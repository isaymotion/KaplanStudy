/* Builds the high-yield handout as a real PDF inside the app, so the page is exactly Letter or A4 with no
   browser-added margins, headers or footers. Text stays selectable (standard PDF fonts: Times, Helvetica, Symbol).
   Public: KS.handoutPdf({ paper:'letter'|'a4', blank:Boolean, groups:[[topic,...],...], number, title, attribution }) -> Blob|null */
(function () {
  'use strict';
  var KS = window.KS = window.KS || {};

  var PAGES = { letter: { w: 612, h: 792, m: 36 }, a4: { w: 595.28, h: 841.89, m: 34 } };
  var MM = 72 / 25.4;
  var NAVY = [30, 36, 99], RED = [194, 51, 59], ORANGE = [223, 100, 24], GRAY = [85, 85, 85], SEP = [217, 220, 234], FOOT = [204, 204, 204], INK = [17, 17, 17];

  /* ---- characters -------------------------------------------------------------------------------------------- */
  var CP1252 = { '€': 0x80, '‚': 0x82, 'ƒ': 0x83, '„': 0x84, '…': 0x85, '†': 0x86, '‡': 0x87, 'ˆ': 0x88, '‰': 0x89, 'Š': 0x8A, '‹': 0x8B, 'Œ': 0x8C, 'Ž': 0x8E,
    '‘': 0x91, '’': 0x92, '“': 0x93, '”': 0x94, '•': 0x95, '–': 0x96, '—': 0x97, '˜': 0x98, '™': 0x99, 'š': 0x9A, '›': 0x9B, 'œ': 0x9C, 'ž': 0x9E, 'Ÿ': 0x9F };
  var SYMBOL = { 'α': ['a', 631], 'β': ['b', 549], 'δ': ['d', 494], 'ε': ['e', 439], 'κ': ['k', 549], 'μ': ['m', 576], 'Δ': ['D', 612],
    '≥': ['\xB3', 549], '≤': ['\xA3', 549], '→': ['\xAE', 987], '≈': ['\xBB', 549], '↑': ['\xAD', 603], '↓': ['\xAF', 603] };
  var SWAP = { '⁹': '^9', '⁷': '^7', 'ᵐ': 'm', '⅓': '1/3', '⅔': '2/3', '‑': '-', '−': '-', ' ': ' ', ' ': ' ', ' ': ' ', '→': '->' };

  function mapChar(c) {   // -> { sym:true, ch, w } | { ch } (latin-1 char valid in WinAnsi)
    if (SYMBOL[c]) return { sym: true, ch: SYMBOL[c][0], w: SYMBOL[c][1] };
    if (SWAP[c] != null) return { ch: SWAP[c] };
    var n = c.charCodeAt(0);
    if (n < 0x80 || (n >= 0xA0 && n <= 0xFF)) return { ch: c };
    if (CP1252[c]) return { ch: String.fromCharCode(CP1252[c]) };
    return { ch: '?' };
  }

  /* ---- measuring --------------------------------------------------------------------------------------------- */
  var ctx = document.createElement('canvas').getContext('2d');
  var FAM = { T: '"Times New Roman", Times, "Liberation Serif", serif', H: 'Helvetica, Arial, "Liberation Sans", sans-serif' };
  var cache = {};
  function cssFont(f) {   // f: T TB TI H HB
    var fam = f.charAt(0) === 'T' ? FAM.T : FAM.H;
    return (f === 'TB' || f === 'HB' ? 'bold ' : '') + (f === 'TI' ? 'italic ' : '') + '100px ' + fam;
  }
  function measure(f, str) {   // width of str at 1pt, using a latin-1 string (WinAnsi bytes)
    var key = f + '|' + str;
    if (cache[key] != null) return cache[key];
    ctx.font = cssFont(f);
    // convert WinAnsi bytes back to unicode for the canvas
    var u = '';
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i), ch = str.charAt(i);
      if (code >= 0x80 && code <= 0x9F) { for (var k in CP1252) if (CP1252[k] === code) { ch = k; break; } }
      u += ch;
    }
    return (cache[key] = ctx.measureText(u).width / 100 * 1.008);   // tiny allowance so the viewer never wraps differently
  }

  /* ---- text -> words ------------------------------------------------------------------------------------------ */
  function runs(text) {   // **bold**, *italic*
    var out = [], re = /\*\*(.+?)\*\*|\*([^*\s][^*]*?)\*/g, last = 0, m;
    while ((m = re.exec(text))) {
      if (m.index > last) out.push({ t: text.slice(last, m.index), b: false, i: false });
      if (m[1] != null) out.push({ t: m[1], b: true, i: false }); else out.push({ t: m[2], b: false, i: true });
      last = re.lastIndex;
    }
    if (last < text.length) out.push({ t: text.slice(last), b: false, i: false });
    return out;
  }
  function fontFor(family, r) {
    if (family === 'T') return r.b ? 'TB' : r.i ? 'TI' : 'T';
    return r.b ? 'HB' : 'H';
  }
  // a word = { pieces:[{f,s,sym}], bold:Boolean }; pieces carry a font and a latin-1 string
  function words(text, family, forceBold) {
    var list = [], cur = null;
    function flush() { if (cur && cur.pieces.length) list.push(cur); cur = null; }
    runs(text).forEach(function (r) {
      var f = fontFor(family, forceBold ? { b: true } : r), piece = null;
      for (var i = 0; i < r.t.length; i++) {
        var c = r.t.charAt(i);
        if (c === ' ' || c === ' ' || c === ' ' || c === ' ') { flush(); piece = null; continue; }
        if (!cur) { cur = { pieces: [], bold: !!r.b }; piece = null; }
        var mc = mapChar(c);
        var key = mc.sym ? 'S' : f;
        if (!piece || piece.f !== key) { piece = { f: key, s: '', w: 0 }; cur.pieces.push(piece); }
        piece.s += mc.ch;
        if (mc.sym) piece.symw = (piece.symw || 0) + mc.w / 1000;
        if (r.b) cur.bold = true;
        // a word that mixes bold and plain text is treated as plain with its own fonts
      }
      // spaces between runs: boundaries handled above (flush on space)
    });
    flush();
    return list;
  }
  function wordWidth(w, size) {
    var t = 0;
    w.pieces.forEach(function (p) { t += (p.f === 'S' ? p.symw : measure(p.f, p.s)) * size; });
    return t;
  }

  /* ---- layout ------------------------------------------------------------------------------------------------- */
  function wrap(ws, size, width, family, firstFont) {
    var lines = [], line = [], x = 0, sp = measure(firstFont, ' ') * size;
    ws.forEach(function (w) {
      var ww = wordWidth(w, size);
      if (line.length && x + sp + ww > width) { lines.push(line); line = []; x = 0; }
      if (!line.length && ww > width && w.pieces.length === 1 && w.pieces[0].f !== 'S') {   // very long single word: split it
        var s = w.pieces[0].s, f = w.pieces[0].f;
        while (s.length && measure(f, s) * size > width) {
          var n = s.length - 1; while (n > 1 && measure(f, s.slice(0, n)) * size > width) n--;
          lines.push([{ pieces: [{ f: f, s: s.slice(0, n) }], bold: w.bold }]);
          s = s.slice(n);
        }
        w = { pieces: [{ f: f, s: s }], bold: w.bold }; ww = wordWidth(w, size);
      }
      if (line.length) x += sp;
      line.push(w); x += ww;
    });
    if (line.length) lines.push(line);
    return lines;
  }

  function geometry(P) {
    var pg = PAGES[P.paper] || PAGES.letter, m = pg.m, W = pg.w - 2 * m;
    var g = { pg: pg, m: m, W: W };
    // header
    var srcLines = ['Kaplan & Sadock’s Synopsis of Psychiatry, 12th ed.'];
    g.srcFirst = srcLines.concat(P.blank ? ['Name ____________________ Date __________'] : []);
    g.srcRest = srcLines;
    var srcW = 0;
    g.srcFirst.forEach(function (s) {
      var ws = words(s, 'H'), t = 0; ws.forEach(function (w) { t += wordWidth(w, 7) + measure('H', ' ') * 7; });
      srcW = Math.max(srcW, t);
    });
    g.srcW = srcW;
    g.titleW = W - srcW - 6 * MM;
    g.titleLines = wrap(words('Chapter ' + P.number + ': ' + P.title, 'H', true), 14, g.titleW, 'H', 'HB');
    var kick = 7, title = g.titleLines.length * 14 * 1.15;
    g.headH = kick + 1 * MM + title + 2.4 * MM + 1.2 + 3 * MM;
    g.footH = 2 * MM + 1.6 * MM + 6.5 * 1.3;
    g.bodyTop = m + g.headH;
    g.bodyH = pg.h - m - g.footH - g.bodyTop;
    var gap = 4.5 * MM;
    g.colW = (W - 2 * gap) / 3;
    g.gap = gap;
    return g;
  }

  /* lay one page's topics into three columns at the given size; returns ops or null if it does not fit */
  function layPage(topics, size, g) {
    var ops = [], ci = 0, y = 0, hs = size * 1.04, lh = size * 1.26, indent = size * 1.05, bulletW = 0;
    var colH = g.bodyH, colW = g.colW;
    var innerW = [colW, colW, colW];
    function xOf(c) { return g.m + c * (colW + g.gap); }
    function padLeft(c) { return 0; }
    for (var t = 0; t < topics.length; t++) {
      var topic = topics[t], hl = wrap(words(topic.topic, 'H', true), hs, colW - (0), 'H', 'HB');
      var headH = hl.length * hs * 1.2 + hs * 0.15 + 0.6;
      var headFirst = true;
      for (var i = 0; i < topic.items.length; i++) {
        var il = wrap(words(topic.items[i], 'T'), size, colW - indent, 'T', 'T');
        var itemH = il.length * lh;
        var needHead = i === 0;
        for (var tries = 0; ; tries++) {
          var top = y;
          var extra = needHead ? (y > 0 ? 0.7 * hs : 0) + headH + 0.3 * hs : 0;
          if (y + extra + itemH <= colH + 0.01) {
            if (needHead) {
              y += (y > 0 ? 0.7 * hs : 0);
              ops.push({ k: 'head', c: ci, y: y, lines: hl, hs: hs, x: xOf(ci), w: colW });
              y += headH + 0.3 * hs;
              needHead = false;
            }
            ops.push({ k: 'item', c: ci, y: y, lines: il, size: size, lh: lh, x: xOf(ci), indent: indent });
            y += itemH + 0.16 * size;
            break;
          }
          if (tries > 0 || ci >= 2) return null;    // would not fit even at the top of a fresh column / no columns left
          ci++; y = 0;
        }
      }
    }
    return ops;
  }

  function layAll(groups, size, g) {
    var pages = [];
    for (var i = 0; i < groups.length; i++) {
      var ops = layPage(groups[i], size, g);
      if (!ops) return null;
      pages.push(ops);
    }
    return pages;
  }

  /* ---- PDF writing -------------------------------------------------------------------------------------------- */
  var FONTS = [['T', 'Times-Roman'], ['TB', 'Times-Bold'], ['TI', 'Times-Italic'], ['H', 'Helvetica'], ['HB', 'Helvetica-Bold'], ['S', 'Symbol']];
  function num(n) { return (Math.round(n * 100) / 100).toString(); }
  function col(c, stroke) { return num(c[0] / 255) + ' ' + num(c[1] / 255) + ' ' + num(c[2] / 255) + (stroke ? ' RG' : ' rg') + '\n'; }
  function esc(s) { return s.replace(/[\\()]/g, '\\$&').replace(/\r/g, '\\r').replace(/\n/g, '\\n'); }

  function Page(H) { this.H = H; this.s = ''; }
  Page.prototype.rect = function (x, yTop, w, h, c) { this.s += col(c) + num(x) + ' ' + num(this.H - yTop - h) + ' ' + num(w) + ' ' + num(h) + ' re f\n'; };
  Page.prototype.text = function (f, size, c, x, base, str, charSpace) {
    this.s += 'q\nBT\n' + col(c) + '/' + f + ' ' + num(size) + ' Tf\n' + (charSpace ? num(charSpace) + ' Tc\n' : '') +
      '1 0 0 1 ' + num(x) + ' ' + num(this.H - base) + ' Tm\n(' + esc(str) + ') Tj\nET\nQ\n';
  };

  // draw one line of words starting at x; returns nothing. blank: bold words become underlines
  function drawLine(page, line, x, base, size, color, blank, width, align, firstFont) {
    var sp = measure(firstFont, ' ') * size, total = 0;
    line.forEach(function (w, i) { total += wordWidth(w, size) + (i ? sp : 0); });
    if (align === 'right') x = x + width - total;
    line.forEach(function (w, i) {
      var ww = wordWidth(w, size);
      if (blank && w.bold && w.pieces.length) {
        var end = x + ww, nxt = line[i + 1];
        if (nxt && nxt.bold) end += sp;
        page.rect(x, base + size * 0.16, end - x, 0.7, [51, 51, 51]);
      } else {
        var px = x;
        w.pieces.forEach(function (p) {
          page.text(p.f, size, color, px, base, p.s);
          px += (p.f === 'S' ? p.symw : measure(p.f, p.s)) * size;
        });
      }
      x += ww + sp;
    });
  }

  function renderPage(ops, size, g, P, idx, count, attribution) {
    var pg = g.pg, page = new Page(pg.h), m = g.m;
    // header
    var kicker = ('High-yield ' + (P.blank ? 'worksheet' : 'handout') + (count > 1 ? ', page ' + (idx + 1) + ' of ' + count : '')).toUpperCase();
    var kmap = ''; for (var i = 0; i < kicker.length; i++) kmap += mapChar(kicker.charAt(i)).ch;
    page.text('HB', 7, RED, m, m + 6, kmap, 0.56);
    var ty = m + 7 + 1 * MM;
    g.titleLines.forEach(function (ln, k) {
      drawLine(page, ln, m, ty + k * 14 * 1.15 + 14 * 1.15 * 0.78, 14, NAVY, false, g.titleW, 'left', 'HB');
    });
    var src = idx === 0 ? g.srcFirst : g.srcRest;
    var titleH = g.titleLines.length * 14 * 1.15, srcH = src.length * 7 * 1.5;
    var sy = ty + titleH - srcH;
    src.forEach(function (s, k) {
      var ws = words(s, 'H');
      drawLine(page, [].concat(ws), m, sy + k * 7 * 1.5 + 7 * 1.5 * 0.72, 7, GRAY, false, g.W, 'right', 'H');
    });
    var ruleY = ty + titleH + 2.4 * MM;
    page.rect(m, ruleY, g.W, 1.2, NAVY);
    // column separators
    var top = g.bodyTop, hgt = g.bodyH;
    for (var c = 1; c < 3; c++) page.rect(m + c * (g.colW + g.gap) - g.gap / 2, top, 0.4, hgt, SEP);
    // body
    ops.forEach(function (o) {
      if (o.k === 'head') {
        o.lines.forEach(function (ln, k) {
          drawLine(page, ln, o.x, top + o.y + k * o.hs * 1.2 + o.hs * 1.2 * 0.78, o.hs, NAVY, false, o.w, 'left', 'HB');
        });
        page.rect(o.x, top + o.y + o.lines.length * o.hs * 1.2 + o.hs * 0.15 - 0.3, o.w, 0.6, ORANGE);
      } else {
        o.lines.forEach(function (ln, k) {
          var base = top + o.y + k * o.lh + o.lh * 0.5 + o.size * 0.23;
          if (k === 0) page.text('T', o.size, ORANGE, o.x + o.indent * 0.1, base, '\x95');
          drawLine(page, ln, o.x + o.indent, base, o.size, INK, P.blank, 0, 'left', 'T');
        });
      }
    });
    // footer
    var fy = pg.h - m - g.footH;
    page.rect(m, fy + 2 * MM, g.W, 0.5, FOOT);
    var af = ''; for (var j = 0; j < attribution.length; j++) af += mapChar(attribution.charAt(j)).ch;
    page.text('H', 6.5, GRAY, m, fy + 2 * MM + 1.6 * MM + 6.5 * 1.3 * 0.78, af);
    return page.s;
  }

  function assemble(contents, pg, title) {
    var objs = [], n = 0;
    function add(s) { objs.push(s); return ++n; }
    add('<< /Type /Catalog /Pages 2 0 R >>');
    add('PAGES');   // placeholder
    var fontIds = {};
    FONTS.forEach(function (f) {
      var widths = '';
      if (f[0] !== 'S') {   // state the glyph widths explicitly so every viewer spaces the text exactly as it was laid out
        var arr = [];
        for (var c = 32; c <= 255; c++) arr.push(Math.round(measure(f[0], String.fromCharCode(c)) / 1.008 * 1000));
        widths = ' /FirstChar 32 /LastChar 255 /Widths [' + arr.join(' ') + ']';
      }
      fontIds[f[0]] = add('<< /Type /Font /Subtype /Type1 /BaseFont /' + f[1] + (f[0] === 'S' ? '' : ' /Encoding /WinAnsiEncoding' + widths) + ' >>');
    });
    var res = '<< /Font << ' + FONTS.map(function (f) { return '/' + f[0] + ' ' + fontIds[f[0]] + ' 0 R'; }).join(' ') + ' >> >>';
    var kids = [];
    contents.forEach(function (c) {
      var cid = add('<< /Length ' + c.length + ' >>\nstream\n' + c + 'endstream');
      var pid = add('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + num(pg.w) + ' ' + num(pg.h) + '] /Resources ' + res + ' /Contents ' + cid + ' 0 R >>');
      kids.push(pid + ' 0 R');
    });
    objs[1] = '<< /Type /Pages /Kids [' + kids.join(' ') + '] /Count ' + kids.length + ' >>';
    var info = add('<< /Title (' + esc(title) + ') /Producer (Kaplan & Sadock Study Companion) >>');
    var out = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n', offs = [];
    objs.forEach(function (o, i) { offs.push(out.length); out += (i + 1) + ' 0 obj\n' + o + '\nendobj\n'; });
    var xref = out.length;
    out += 'xref\n0 ' + (objs.length + 1) + '\n0000000000 65535 f \n';
    offs.forEach(function (o) { out += ('0000000000' + o).slice(-10) + ' 00000 n \n'; });
    out += 'trailer\n<< /Size ' + (objs.length + 1) + ' /Root 1 0 R /Info ' + info + ' 0 R >>\nstartxref\n' + xref + '\n%%EOF\n';
    var bytes = new Uint8Array(out.length);
    for (var i = 0; i < out.length; i++) bytes[i] = out.charCodeAt(i) & 255;
    return new Blob([bytes], { type: 'application/pdf' });
  }

  KS.handoutPdf = function (P) {
    var g = geometry(P);
    if (!P.groups.length || !P.groups.every(function (x) { return x.length; })) return null;
    var lo = 4, hi = 11, best = 0;
    if (layAll(P.groups, hi, g)) best = hi;
    else {
      for (var k = 0; k < 16; k++) {
        var mid = (lo + hi) / 2;
        if (layAll(P.groups, mid, g)) { best = mid; lo = mid; } else hi = mid;
      }
    }
    if (!best) return null;
    var size = Math.floor(best * 20) / 20;
    var pages = layAll(P.groups, size, g);
    if (!pages) return null;
    var contents = pages.map(function (ops, i) { return renderPage(ops, size, g, P, i, pages.length, P.attribution); });
    var blob = assemble(contents, g.pg, 'Chapter ' + P.number + ' high-yield ' + (P.blank ? 'worksheet' : 'handout'));
    blob.fontSize = size;
    return blob;
  };
})();
