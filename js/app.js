/* Kaplan & Sadock Study Companion — app logic (no build step, no dependencies). */
(function () {
  'use strict';

  var KS = window.KS;
  var main = document.getElementById('main');
  var qInput = document.getElementById('q');
  var suggestBox = document.getElementById('suggest');

  /* ---------- storage ---------- */
  var PREFIX = 'ks:v1:';
  var store = {
    get: function (k, d) {
      try { var v = localStorage.getItem(PREFIX + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ }
    }
  };
  var PROG = store.get('cards', {});
  function saveProg() { store.set('cards', PROG); }

  /* ---------- modes ---------- */
  var MODES = [
    { key: 'guide', label: 'Study guide', short: 'Study guide', css: 'guide', blurb: 'The whole chapter, organized for learning.' },
    { key: 'high-yield', label: 'High yield', short: 'High yield', css: 'hy', blurb: 'The facts exams and boards keep returning to.' },
    { key: 'diagnosis', label: 'Diagnosis cards', short: 'Diagnosis', css: 'dx', deck: true, blurb: 'Criteria, durations, specifiers, differentials.' },
    { key: 'cases', label: 'Clinical case cards', short: 'Clinical cases', css: 'case', deck: true, blurb: 'Vignettes with a single best answer.' },
    { key: 'pharm', label: 'Pharmacology cards', short: 'Pharmacology', css: 'pharm', deck: true, blurb: 'Antipsychotics, side effects, dosing, monitoring.' },
    { key: 'foundations', label: 'Foundations cards', short: 'Foundations', css: 'found', deck: true, blurb: 'Epidemiology, neurobiology, etiology, psychosocial care.' }
  ];
  var DECKS = MODES.filter(function (m) { return m.deck; });
  function modeBy(k) { for (var i = 0; i < MODES.length; i++) if (MODES[i].key === k) return MODES[i]; return null; }
  function modeHref(ch, m) { return m.deck ? '#/c/' + ch.id + '/cards/' + m.key : '#/c/' + ch.id + '/' + m.key; }

  /* ---------- text helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmt(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>');
  }
  function plain(s) { return String(s == null ? '' : s).replace(/\*\*/g, '').replace(/\*/g, ''); }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  /* ---------- data loading ---------- */
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('Could not load ' + src)); };
      document.head.appendChild(s);
    });
  }
  function loadAll() {
    var jobs = [];
    KS.manifest.forEach(function (ch) {
      ch.files.forEach(function (f) { jobs.push(loadScript('data/' + ch.id + '/' + f + '.js')); });
    });
    return Promise.all(jobs);
  }
  function chapter(id) {
    var meta = null;
    KS.manifest.forEach(function (c) { if (c.id === id) meta = c; });
    if (!meta) return null;
    var d = KS.chapters[id] || {};
    var ch = {};
    Object.keys(meta).forEach(function (k) { ch[k] = meta[k]; });
    Object.keys(d).forEach(function (k) { ch[k] = d[k]; });
    return ch;
  }
  function allChapters() { return KS.manifest.map(function (m) { return chapter(m.id); }); }
  function sectionCount(ch) { var n = 0; (ch.guide && ch.guide.parts || []).forEach(function (p) { n += p.sections.length; }); return n; }
  function hyCount(ch) { var n = 0; (ch.highYield || []).forEach(function (t) { n += t.items.length; }); return n; }
  function cardCount(ch) { var n = 0; DECKS.forEach(function (d) { n += (ch[d.key] || []).length; }); return n; }
  function knownCount(ch, deckKey) {
    var n = 0;
    (deckKey ? [modeBy(deckKey)] : DECKS).forEach(function (d) {
      (ch[d.key] || []).forEach(function (c) { if (PROG[ch.id + '/' + d.key + '/' + c.id] === 'known') n++; });
    });
    return n;
  }

  /* ---------- router ---------- */
  var view = { key: null, focus: null, cleanup: null };

  function parts() {
    var h = location.hash.replace(/^#\/?/, '');
    return h.split('/').filter(Boolean).map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
  }

  function setView(key, html, focusFn, opts) {
    if (view.cleanup) { view.cleanup(); view.cleanup = null; }
    view.key = key;
    view.focus = focusFn || null;
    main.innerHTML = html;
    if (!(opts && opts.keepScroll)) window.scrollTo(0, 0);
    var modes = main.querySelector('.modes'), act = modes && modes.querySelector('.is-active');
    if (act && modes.scrollWidth > modes.clientWidth) modes.scrollLeft = act.offsetLeft - (modes.clientWidth - act.offsetWidth) / 2;
  }

  function route() {
    closeSuggest();
    var p = parts();
    if (!p.length) return renderHome();
    if (p[0] === 'search') {
      var q = p.slice(1).join('/');
      qInput.value = q;
      return renderSearch(q);
    }
    if (p[0] === 'c') {
      var ch = chapter(p[1]);
      if (!ch) return renderMissing();
      var mode = p[2] || 'guide';
      store.set('last', { hash: location.hash, ch: ch.id, mode: mode });
      if (mode === 'guide') return renderGuide(ch, p[3]);
      if (mode === 'high-yield') return renderHY(ch, p[3]);
      if (mode === 'cards') return renderCards(ch, p[3] || 'diagnosis', p[4]);
    }
    renderMissing();
  }

  function renderMissing() {
    setView('missing', '<div class="wrap empty" style="margin-top:48px"><h2>That page is not in the app</h2><p>The link may point to a chapter that has not been added yet.</p><a class="btn btn--solid" href="#/">Go to all chapters</a></div>');
    document.title = 'Not found — Kaplan & Sadock Study Companion';
  }

  /* ---------- home ---------- */
  function prismSVG() {
    return '<svg class="refract__prism" viewBox="0 0 112 160" aria-hidden="true">' +
      '<defs><linearGradient id="hb" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".95"/></linearGradient>' +
      '<linearGradient id="hf" x1="0" y1="0" x2=".4" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".34"/><stop offset="1" stop-color="#c9d2ff" stop-opacity=".1"/></linearGradient></defs>' +
      '<polygon points="-40,58 -40,66 38,84 40,78" fill="url(#hb)"/>' +
      '<polygon points="58,22 74,14 112,80 98,92" fill="#9aa8ff" fill-opacity=".38"/>' +
      '<polygon points="58,22 16,128 98,128" fill="url(#hf)"/>' +
      '<polygon points="39,81 40,77 112,80 112,80" fill="#fff" fill-opacity=".45"/>' +
      '<g fill="none" stroke="#fff" stroke-linejoin="round"><polyline points="16,128 58,22 98,128 16,128" stroke-width="2.4" stroke-opacity=".9"/><polyline points="58,22 74,14 112,80 98,128" stroke-width="2" stroke-opacity=".7"/></g>' +
      '<circle cx="58" cy="22" r="3.2" fill="#fff"/></svg>';
  }
  function raysSVG() {
    var cols = ['#FF5A63', '#FF8C42', '#FFD23F', '#4FD17A', '#3FA2FF', '#9A73FF'];
    var out = '<div class="refract__raybox" aria-hidden="true"><svg class="refract__rays" viewBox="0 0 100 600" preserveAspectRatio="none" aria-hidden="true"><defs>' +
      '<linearGradient id="rf" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset=".6" stop-color="#fff" stop-opacity=".85"/><stop offset="1" stop-color="#fff" stop-opacity=".95"/></linearGradient>' +
      '<mask id="rm"><rect width="100" height="600" fill="url(#rf)"/></mask></defs><g mask="url(#rm)">';
    for (var i = 0; i < 6; i++) {
      var y0 = 285 + i * 5, y1 = y0 + 5, t = i * 100 + 18, b = i * 100 + 82;
      out += '<polygon points="0,' + y0 + ' 0,' + y1 + ' 100,' + b + ' 100,' + t + '" fill="' + cols[i] + '" fill-opacity=".8"/>';
    }
    return out + '</g></svg></div>';
  }

  function renderHome() {
    var chs = allChapters();
    var last = store.get('last', null);
    var focus = (last && chapter(last.ch)) || chs[chs.length - 1];
    var lastCh = last && chapter(last.ch);
    var lastMode = last && (modeBy(last.mode) || (last.mode === 'cards' ? null : null));
    var cont = '';
    if (lastCh) {
      var lbl = lastMode ? lastMode.label.toLowerCase() : 'flashcards';
      cont = '<a class="btn btn--solid" href="' + esc(last.hash) + '">Continue Chapter ' + lastCh.number + ' ' + esc(lbl) + '</a>';
    } else {
      cont = '<a class="btn btn--solid" href="#/c/' + focus.id + '/guide">Start Chapter ' + focus.number + '</a>';
    }

    var spectrum = MODES.map(function (m) {
      return '<li><a class="c-' + m.css + '" href="' + modeHref(focus, m) + '"><span class="spectrum__label">' + esc(m.label) + '</span><span class="spectrum__blurb">' + esc(m.blurb) + '</span></a></li>';
    }).join('');

    var rows = chs.map(function (ch) {
      var total = cardCount(ch), known = knownCount(ch);
      var pct = total ? Math.round(known / total * 100) : 0;
      return '<li><a class="chapter-row" href="#/c/' + ch.id + '/guide">' +
        '<span class="chapter-row__num" aria-hidden="true">' + ch.number + '</span>' +
        '<div><h3><span class="sr-only">Chapter ' + ch.number + ': </span>' + esc(ch.title) + '</h3><p>' + esc(ch.summary) + '</p>' +
        '<div class="chapter-row__stats"><span><b>' + sectionCount(ch) + '</b> guide sections</span><span><b>' + hyCount(ch) + '</b> high-yield points</span><span><b>' + total + '</b> flashcards</span></div></div>' +
        '<div class="meter"><div class="meter__label">' + known + ' of ' + total + ' cards known</div><div class="meter__bar"><span style="width:' + pct + '%"></span></div></div>' +
        '</a></li>';
    }).join('');

    var html =
      '<section class="hero"><div class="wrap hero__grid">' +
        '<div><h1>Synopsis of Psychiatry, one chapter at a time</h1>' +
        '<p class="hero__lede">Study guides, high-yield reviews and flashcards for psychiatry residents, built chapter by chapter from Kaplan &amp; Sadock\u2019s Synopsis of Psychiatry, 12th edition.</p>' +
        '<div class="hero__actions">' + cont + '<a class="btn" href="#/c/' + focus.id + '/cards/cases">Try a clinical case</a></div></div>' +
        '<nav class="refract" aria-label="Study modes for Chapter ' + focus.number + '">' +
          '<p class="refract__for">Chapter ' + focus.number + ': <a href="#/c/' + focus.id + '/guide">' + esc(focus.short || focus.title) + '</a></p>' +
          prismSVG() + raysSVG() + '<ul class="spectrum">' + spectrum + '</ul>' +
        '</nav>' +
      '</div></section>' +
      '<section class="wrap home-section"><h2>Chapters in the app</h2><ul class="chapter-list">' + rows + '</ul></section>' +
      '<section class="wrap home-section"><h2>How to study a chapter</h2><div class="howto">' +
        '<div><h3>Read the study guide</h3><p>Work through it once, end to end. Tables, case summaries and clinical pearls sit where they belong in the argument.</p></div>' +
        '<div><h3>Test yourself on high yield</h3><p>Switch on \u201cHide key facts\u201d and recall each blank before you tap it. Revisit the night before an exam.</p></div>' +
        '<div><h3>Drill the flashcards</h3><p>Mark each card as known or still learning, then filter to the cards you are still learning. Progress stays on this device.</p></div>' +
      '</div></section>';
    setView('home', html);
    document.title = 'Kaplan & Sadock Study Companion';
  }

  /* ---------- chapter header ---------- */
  function chapterHead(ch, active) {
    var tabs = MODES.map(function (m) {
      var on = m.key === active;
      return '<a class="mode c-' + m.css + (on ? ' is-active' : '') + '" href="' + modeHref(ch, m) + '"' + (on ? ' aria-current="page"' : '') + '>' +
        esc(m.short) + (m.deck ? '<span class="mode__count">' + (ch[m.key] || []).length + '</span>' : '') + '</a>';
    }).join('');
    return '<header class="ch-head"><div class="wrap ch-head__inner">' +
      '<p class="crumb"><a href="#/">All chapters</a></p>' +
      '<div class="ch-head__title"><span class="ch-num" aria-hidden="true">' + ch.number + '</span><h1><span class="sr-only">Chapter ' + ch.number + ': </span>' + esc(ch.title) + '</h1></div>' +
      '</div><nav class="modes wrap" aria-label="Study modes">' + tabs + '</nav></header>';
  }

  /* ---------- study guide ---------- */
  function blockHTML(b, id) {
    var cls = 'g-block' + (b.type === 'table' && b.wide ? ' is-wide' : '');
    var open = '<div class="' + cls + '" id="' + id + '">';
    var close = '</div>';
    switch (b.type) {
      case 'p': return '<p class="g-block" id="' + id + '">' + fmt(b.text) + '</p>';
      case 'h': return '<h4 class="g-block" id="' + id + '">' + fmt(b.text) + '</h4>';
      case 'list':
        var tag = b.ordered ? 'ol' : 'ul';
        return open + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<' + tag + (b.cols ? ' class="cols"' : '') + '>' +
          b.items.map(function (it) { return '<li>' + fmt(it) + '</li>'; }).join('') + '</' + tag + '>' + close;
      case 'defs':
        return open + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<dl class="defs">' +
          b.items.map(function (d) { return '<dt>' + fmt(d[0]) + '</dt><dd>' + fmt(d[1]) + '</dd>'; }).join('') + '</dl>' + close;
      case 'callout':
        var titles = { pearl: 'Clinical pearl', exam: 'Exam tip', caution: 'Watch for' };
        return '<aside class="g-block callout callout--' + b.kind + '" id="' + id + '"><p class="callout__title">' + esc(b.title || titles[b.kind]) + '</p><p>' + fmt(b.text) + '</p></aside>';
      case 'case':
        return '<figure class="g-block case" id="' + id + '"><figcaption>' + fmt(b.title) + '</figcaption><p>' + fmt(b.text) + '</p>' +
          (b.point ? '<p class="case__point"><b>Teaching point:</b> ' + fmt(b.point) + '</p>' : '') + '</figure>';
      case 'table':
        var head = b.head ? '<thead><tr>' + b.head.map(function (h) { return '<th scope="col">' + fmt(h) + '</th>'; }).join('') + '</tr></thead>' : '';
        var body = '<tbody>' + b.rows.map(function (r) {
          if (typeof r === 'string') return '<tr class="table-group"><td colspan="' + (b.head ? b.head.length : 2) + '">' + fmt(r) + '</td></tr>';
          return '<tr>' + r.map(function (c, i) { return i === 0 && b.rowHeads !== false ? '<th scope="row">' + fmt(c) + '</th>' : '<td>' + fmt(c) + '</td>'; }).join('') + '</tr>';
        }).join('') + '</tbody>';
        return open + '<div class="table-wrap" tabindex="0" role="region" aria-label="' + esc(plain(b.caption || 'Table')) + '"><table>' +
          (b.caption ? '<caption>' + fmt(b.caption) + '</caption>' : '') + head + body + '</table>' +
          (b.note ? '<p class="table-note">' + fmt(b.note) + '</p>' : '') + '</div>' + close;
      case 'timeline':
        var g = '<div class="timeline__grid"><span></span>' + b.cols.map(function (c) { return '<span class="timeline__head">' + esc(c) + '</span>'; }).join('');
        b.rows.forEach(function (r) {
          g += '<span class="timeline__label">' + esc(r.label) + '</span>' +
            '<span class="timeline__bar c-' + r.color + '" style="grid-column:' + (r.from + 2) + ' / ' + (r.to + 2) + '">' + esc(r.bar) + '</span>';
          if (r.from > 0) { /* fill grid cells before the bar */ }
          if (r.note) g += '<span class="timeline__note">' + fmt(r.note) + '</span>';
        });
        return '<div class="g-block timeline" id="' + id + '">' + (b.title ? '<p class="timeline__title">' + fmt(b.title) + '</p>' : '') + g + '</div></div>';
      case 'steps':
        return open + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<ol class="steps">' +
          b.items.map(function (s) { return '<li><b>' + fmt(s[0]) + '</b>' + fmt(s[1]) + '</li>'; }).join('') + '</ol>' + close;
      default: return '';
    }
  }

  function blockText(b) {
    switch (b.type) {
      case 'p': case 'h': return plain(b.text);
      case 'list': return plain((b.title || '') + ' ' + b.items.join(' '));
      case 'defs': return plain((b.title || '') + ' ' + b.items.map(function (d) { return d[0] + ': ' + d[1]; }).join(' '));
      case 'callout': return plain((b.title || '') + ' ' + b.text);
      case 'case': return plain(b.title + ' ' + b.text + ' ' + (b.point || ''));
      case 'table': return plain((b.caption || '') + ' ' + (b.head || []).join(' ') + ' ' + b.rows.map(function (r) { return typeof r === 'string' ? r : r.join(' '); }).join(' '));
      case 'timeline': return plain((b.title || '') + ' ' + b.rows.map(function (r) { return r.label + ' ' + r.bar + ' ' + (r.note || ''); }).join(' '));
      case 'steps': return plain((b.title || '') + ' ' + b.items.map(function (s) { return s[0] + ' ' + s[1]; }).join(' '));
    }
    return '';
  }

  function tocHTML(ch) {
    var n = 0;
    return ch.guide.parts.map(function (pt) {
      return '<p class="toc__part">' + esc(pt.title) + '</p><ol>' + pt.sections.map(function (s) {
        n++;
        return '<li><a href="#/c/' + ch.id + '/guide/' + s.id + '" data-sec="' + s.id + '"><span class="toc__n">' + ch.number + '.' + n + '</span><span>' + esc(s.title) + '</span></a></li>';
      }).join('') + '</ol>';
    }).join('');
  }

  function renderGuide(ch, target) {
    var key = 'guide:' + ch.id;
    if (view.key === key) { focusTarget(target); return; }
    var n = 0;
    var body = ch.guide.parts.map(function (pt, pi) {
      return '<div class="g-part"><p>Part ' + (pi + 1) + '</p><h2>' + esc(pt.title) + '</h2></div>' +
        pt.sections.map(function (s) {
          n++;
          return '<section class="g-sec" id="' + s.id + '" aria-labelledby="' + s.id + '-h"><h3 id="' + s.id + '-h"><span class="g-n">' + ch.number + '.' + n + '</span><span>' + esc(s.title) + '</span></h3>' +
            s.blocks.map(function (b, i) { return blockHTML(b, s.id + '--' + i); }).join('') + '</section>';
        }).join('');
    }).join('');
    var g = ch.guide;
    var intro = '<p class="reading__intro">' + fmt(g.intro) + '</p>' +
      (g.objectives ? '<div class="objectives"><h2>By the end of this chapter you should be able to</h2><ul>' + g.objectives.map(function (o) { return '<li>' + fmt(o) + '</li>'; }).join('') + '</ul></div>' : '');
    var html = chapterHead(ch, 'guide') +
      '<div class="wrap guide">' +
        '<nav class="toc" aria-label="Chapter sections">' + tocHTML(ch) + '</nav>' +
        '<div class="reading">' +
          '<div class="toc-mobile"><details><summary>Jump to a section</summary><nav class="toc" aria-label="Chapter sections">' + tocHTML(ch) + '</nav></details></div>' +
          intro + body +
        '</div>' +
      '</div>';
    setView(key, html, focusTarget);
    document.title = 'Ch ' + ch.number + ' study guide — K&S Study Companion';

    // close the mobile TOC after choosing a section
    main.querySelectorAll('.toc-mobile a').forEach(function (a) {
      a.addEventListener('click', function () { var d = a.closest('details'); if (d) d.open = false; });
    });

    // scrollspy
    if ('IntersectionObserver' in window) {
      var links = main.querySelectorAll('.toc a[data-sec]');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (a) { a.classList.toggle('is-current', a.getAttribute('data-sec') === e.target.id); });
          }
        });
      }, { rootMargin: '-' + (headerH() + 10) + 'px 0px -70% 0px' });
      main.querySelectorAll('.g-sec').forEach(function (s) { io.observe(s); });
      view.cleanup = function () { io.disconnect(); };
    }
    if (target) setTimeout(function () { focusTarget(target); }, 30);
  }

  function headerH() { var t = document.querySelector('.topbar'); return t ? t.offsetHeight : 64; }

  function focusTarget(target) {
    if (!target) return;
    var el = document.getElementById(target);
    if (!el) return;
    var y = el.getBoundingClientRect().top + window.pageYOffset - headerH() - 24;
    window.scrollTo({ top: y, behavior: reduceMotion() ? 'auto' : 'smooth' });
    if (target.indexOf('--') > -1) {
      el.classList.add('is-flash');
      setTimeout(function () { el.classList.remove('is-flash'); }, 1800);
    }
  }
  function reduceMotion() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  /* ---------- high yield ---------- */
  function renderHY(ch, target) {
    var key = 'hy:' + ch.id;
    if (view.key === key) { focusTarget(target); return; }
    var quiz = store.get('hyQuiz', false);
    var topics = (ch.highYield || []).map(function (t) {
      return '<section class="hy-topic" id="' + t.id + '"><h2>' + esc(t.topic) + '</h2><ul>' +
        t.items.map(function (it, i) { return '<li id="' + t.id + '--' + i + '">' + fmt(it) + '</li>'; }).join('') + '</ul></section>';
    }).join('');
    var html = chapterHead(ch, 'high-yield') +
      '<div class="wrap hy-page' + (quiz ? ' quiz-on' : '') + '">' +
        '<div class="hy-tools"><label class="switch"><input type="checkbox" id="hy-quiz"' + (quiz ? ' checked' : '') + '> Hide key facts</label>' +
        '<p>With key facts hidden, each bold fact becomes a blank. Say the answer, then tap the blank to check.</p></div>' +
        '<div class="hy-grid">' + topics + '</div>' +
      '</div>';
    setView(key, html, focusTarget);
    document.title = 'Ch ' + ch.number + ' high yield — K&S Study Companion';
    var page = main.querySelector('.hy-page');
    var toggle = main.querySelector('#hy-quiz');
    function applyQuiz(on) {
      page.classList.toggle('quiz-on', on);
      page.querySelectorAll('.hy-topic strong').forEach(function (s) {
        s.classList.remove('is-revealed');
        if (on) { s.setAttribute('tabindex', '0'); s.setAttribute('role', 'button'); s.setAttribute('aria-label', 'Hidden fact, press to reveal'); }
        else { s.removeAttribute('tabindex'); s.removeAttribute('role'); s.removeAttribute('aria-label'); }
      });
    }
    applyQuiz(quiz);
    toggle.addEventListener('change', function () { store.set('hyQuiz', toggle.checked); applyQuiz(toggle.checked); });
    function reveal(s) { s.classList.toggle('is-revealed'); if (s.classList.contains('is-revealed')) s.removeAttribute('aria-label'); }
    page.addEventListener('click', function (e) {
      var s = e.target.closest('strong');
      if (s && page.classList.contains('quiz-on')) reveal(s);
    });
    page.addEventListener('keydown', function (e) {
      var s = e.target.closest && e.target.closest('strong');
      if (s && page.classList.contains('quiz-on') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); reveal(s); }
    });
    if (target) setTimeout(function () { focusTarget(target); }, 30);
  }

  /* ---------- flashcards ---------- */
  var sessions = {};
  function shuffled(n) {
    var a = []; for (var i = 0; i < n; i++) a.push(i);
    for (var j = n - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; }
    return a;
  }

  function renderCards(ch, deckKey, cardId) {
    var deck = modeBy(deckKey);
    if (!deck || !deck.deck) return renderMissing();
    var cards = ch[deck.key] || [];
    var sKey = ch.id + '/' + deck.key;
    var prefs = store.get('deckPrefs', { shuffle: false, reviewOnly: false });
    var S = sessions[sKey] || (sessions[sKey] = { pos: 0, flipped: false, chosen: null, shuffle: prefs.shuffle, reviewOnly: prefs.reviewOnly, order: null });

    function status(c) { return PROG[sKey + '/' + c.id]; }
    function buildOrder() {
      var base = S.shuffle ? shuffled(cards.length) : cards.map(function (_, i) { return i; });
      S.order = S.reviewOnly ? base.filter(function (i) { return status(cards[i]) !== 'known'; }) : base;
      if (S.pos >= S.order.length) S.pos = 0;
    }
    if (!S.order) buildOrder();
    if (cardId) {
      var idx = -1; cards.forEach(function (c, i) { if (c.id === cardId) idx = i; });
      if (idx > -1) {
        var at = S.order.indexOf(idx);
        if (at === -1) { S.reviewOnly = false; buildOrder(); at = S.order.indexOf(idx); }
        S.pos = at; S.flipped = false; S.chosen = null;
      }
    }

    var key = 'cards:' + sKey;


    var html = chapterHead(ch, deck.key) +
      '<div class="wrap cards-page c-' + deck.css + '">' +
        '<div class="deck-bar"><div class="deck-bar__opts">' +
          '<label class="check"><input type="checkbox" id="opt-shuffle"' + (S.shuffle ? ' checked' : '') + '> Shuffle</label>' +
          '<label class="check"><input type="checkbox" id="opt-review"' + (S.reviewOnly ? ' checked' : '') + '> Only cards I\u2019m still learning</label>' +
        '</div><button class="link-btn" type="button" id="opt-reset">Reset this deck</button></div>' +
        '<div class="tally" id="tally"></div>' +
        '<div id="card-area" aria-live="polite"></div>' +
        '<p class="kbd-help"><kbd>Space</kbd> flip <kbd>\u2190</kbd> <kbd>\u2192</kbd> previous and next' +
        (deck.key === 'cases' ? ' <kbd>A</kbd>\u2013<kbd>E</kbd> choose an answer' : '') + ' <kbd>1</kbd> still learning <kbd>2</kbd> got it</p>' +
      '</div>';
    setView(key, html, null, { keepScroll: view.key === key });
    document.title = 'Ch ' + ch.number + ' ' + deck.label.toLowerCase() + ' — K&S Study Companion';

    var area = main.querySelector('#card-area');
    var tally = main.querySelector('#tally');

    function drawTally() {
      var kn = 0, le = 0;
      cards.forEach(function (c) { var s = status(c); if (s === 'known') kn++; else if (s === 'learning') le++; });
      var tot = cards.length || 1;
      tally.innerHTML = '<span><b>' + kn + '</b> known</span><span><b>' + le + '</b> still learning</span>' +
        '<div class="tally__bar" role="img" aria-label="' + kn + ' known and ' + le + ' still learning out of ' + cards.length + '"><span class="tally__known" style="width:' + (kn / tot * 100) + '%"></span><span class="tally__learn" style="width:' + (le / tot * 100) + '%"></span></div>' +
        '<span><b>' + cards.length + '</b> total</span>';
      var tab = main.querySelector('.deck.is-active .deck__meta');
      if (tab) tab.textContent = cards.length + ' cards, ' + kn + ' known';
    }

    function draw() {
      drawTally();
      if (!cards.length) {
        area.innerHTML = '<div class="empty"><h2>This deck is empty</h2><p>Cards for this deck have not been added yet.</p></div>';
        return;
      }
      if (!S.order.length) {
        area.innerHTML = '<div class="empty"><h2>Every card in this deck is marked as known</h2><p>Switch off \u201cOnly cards I\u2019m still learning\u201d to review them all again, or reset the deck to start over.</p>' +
          '<button class="btn btn--solid" type="button" id="show-all">Show all cards</button></div>';
        area.querySelector('#show-all').addEventListener('click', function () { S.reviewOnly = false; main.querySelector('#opt-review').checked = false; savePrefs(); buildOrder(); draw(); });
        return;
      }
      var c = cards[S.order[S.pos]];
      var st = status(c);
      var stLabel = st === 'known' ? 'Marked known' : st === 'learning' ? 'Still learning' : '';
      var isCase = !!c.choices;
      var letters = 'ABCDE';
      var front, back;
      if (isCase) {
        front = '<p class="face__q">' + fmt(c.q) + '</p><ul class="choices">' + c.choices.map(function (ch2, i) {
          return '<li><button class="choice" type="button" data-choice="' + i + '"><span class="choice__key">' + letters[i] + '</span><span>' + fmt(ch2) + '</span></button></li>';
        }).join('') + '</ul><p class="face__hint">Choose an answer to turn the card.</p>';
        var right = S.chosen === c.answer;
        var verdict = S.chosen == null ? '<p class="verdict">Answer</p>' :
          '<p class="verdict ' + (right ? 'is-right">Correct' : 'is-wrong">Not quite. You chose ' + letters[S.chosen]) + '</p>';
        back = verdict + '<p class="face__recap">' + fmt(c.q) + '</p><ul class="choices choices--static">' + c.choices.map(function (ch2, i) {
            var cls = i === c.answer ? ' is-correct' : (i === S.chosen ? ' is-wrong' : '');
            var note = i === c.answer ? '<span class="choice__note">Correct answer</span>' : (i === S.chosen ? '<span class="choice__note">Your answer</span>' : '');
            return '<li><div class="choice' + cls + '"><span class="choice__key">' + letters[i] + '</span><span>' + fmt(ch2) + note + '</span></div></li>';
          }).join('') + '</ul><p class="face__why">' + fmt(c.why) + '</p>';
      } else {
        front = '<p class="face__q">' + fmt(c.q) + '</p><p class="face__hint">Tap the card or press Space to see the answer.</p>';
        back = '<p class="face__a">' + fmt(c.a) + '</p>' + (c.why ? '<p class="face__why">' + fmt(c.why) + '</p>' : '');
      }
      var top = '<div class="face__top"><span class="face__tag">' + esc(c.tag || deck.short) + '</span><span>' + esc(stLabel) + '</span></div>';
      area.innerHTML =
        '<div class="stage"><div class="flashcard' + (S.flipped ? ' is-flipped' : '') + '" id="fc" tabindex="0" role="group" aria-roledescription="flashcard" aria-label="Card ' + (S.pos + 1) + ' of ' + S.order.length + (S.flipped ? ', answer side' : ', question side') + '">' +
          '<div class="face face--front"' + (S.flipped ? ' aria-hidden="true"' : '') + '>' + top + front + '</div>' +
          '<div class="face face--back"' + (S.flipped ? '' : ' aria-hidden="true"') + '>' + top + back + '</div>' +
        '</div></div>' +
        '<div class="card-nav">' +
          '<button class="btn" type="button" id="prev"' + (S.pos === 0 ? ' disabled' : '') + '>Previous</button>' +
          '<span class="card-nav__pos">Card ' + (S.pos + 1) + ' of ' + S.order.length + '</span>' +
          (S.flipped
            ? '<div class="rate"><button class="btn btn--learn" type="button" id="r-learn">Still learning</button><button class="btn btn--known" type="button" id="r-known">Got it</button></div>'
            : '<button class="btn btn--solid" type="button" id="flip">' + (isCase ? 'Show answer' : 'Flip card') + '</button>') +
          '<button class="btn" type="button" id="next"' + (S.pos >= S.order.length - 1 ? ' disabled' : '') + '>Next</button>' +
        '</div>';

      var fc = area.querySelector('#fc');
      fc.addEventListener('click', function (e) {
        var b = e.target.closest('[data-choice]');
        if (b) { choose(parseInt(b.getAttribute('data-choice'), 10)); return; }
        if (isCase && !S.flipped) return;
        flip();
      });
      bind('#prev', function () { go(-1); });
      bind('#next', function () { go(1); });
      bind('#flip', flip);
      bind('#r-learn', function () { rate('learning'); });
      bind('#r-known', function () { rate('known'); });
    }
    function bind(sel, fn) { var el = area.querySelector(sel); if (el) el.addEventListener('click', fn); }
    function current() { return cards[S.order[S.pos]]; }
    function flip() { S.flipped = !S.flipped; draw(); refocus(); }
    function choose(i) { S.chosen = i; S.flipped = true; draw(); refocus(); }
    function go(d) {
      var np = S.pos + d;
      if (np < 0 || np >= S.order.length) return;
      S.pos = np; S.flipped = false; S.chosen = null; draw(); refocus();
    }
    function rate(v) {
      var c = current(); if (!c) return;
      PROG[sKey + '/' + c.id] = v; saveProg();
      if (S.reviewOnly && v === 'known') {
        S.order.splice(S.pos, 1);
        if (S.pos >= S.order.length) S.pos = Math.max(0, S.order.length - 1);
        S.flipped = false; S.chosen = null; draw(); refocus();
      } else if (S.pos < S.order.length - 1) { go(1); }
      else { S.flipped = false; S.chosen = null; draw(); refocus(); }
    }
    function refocus() { var fc = area.querySelector('#fc'); if (fc) fc.focus({ preventScroll: true }); }
    function savePrefs() { store.set('deckPrefs', { shuffle: S.shuffle, reviewOnly: S.reviewOnly }); }

    main.querySelector('#opt-shuffle').addEventListener('change', function (e) { S.shuffle = e.target.checked; S.pos = 0; S.flipped = false; S.chosen = null; savePrefs(); buildOrder(); draw(); });
    main.querySelector('#opt-review').addEventListener('change', function (e) { S.reviewOnly = e.target.checked; S.pos = 0; S.flipped = false; S.chosen = null; savePrefs(); buildOrder(); draw(); });
    main.querySelector('#opt-reset').addEventListener('click', function () {
      if (!window.confirm('Clear known and still-learning marks for every card in this deck?')) return;
      cards.forEach(function (c) { delete PROG[sKey + '/' + c.id]; }); saveProg();
      S.pos = 0; S.flipped = false; S.chosen = null; buildOrder(); draw();
    });

    function onKey(e) {
      if (e.target.matches && e.target.matches('input, textarea, select')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var c = current(); if (!c) return;
      var k = e.key;
      if (k === ' ' || k === 'Enter') {
        if (e.target.closest && e.target.closest('button, a') && e.target.id !== 'fc') return;
        if (c.choices && !S.flipped) return;
        e.preventDefault(); flip();
      } else if (k === 'ArrowRight') { e.preventDefault(); go(1); }
      else if (k === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (c.choices && !S.flipped && /^[a-e]$/i.test(k)) {
        var i = 'abcde'.indexOf(k.toLowerCase()); if (i < c.choices.length) { e.preventDefault(); choose(i); }
      }
      else if (S.flipped && k === '1') { rate('learning'); }
      else if (S.flipped && k === '2') { rate('known'); }
    }
    document.addEventListener('keydown', onKey);
    view.cleanup = function () { document.removeEventListener('keydown', onKey); };
    draw();
  }

  /* ---------- search ---------- */
  var INDEX = null;
  var KIND = {
    guide: { label: 'Study guide', css: 'guide' },
    hy: { label: 'High yield', css: 'hy' },
    diagnosis: { label: 'Diagnosis card', css: 'dx' },
    cases: { label: 'Clinical case card', css: 'case' },
    pharm: { label: 'Pharmacology card', css: 'pharm' },
    foundations: { label: 'Foundations card', css: 'found' }
  };
  function buildIndex() {
    INDEX = [];
    allChapters().forEach(function (ch) {
      if (ch.guide) ch.guide.parts.forEach(function (pt) {
        pt.sections.forEach(function (s) {
          s.blocks.forEach(function (b, i) {
            var t = blockText(b);
            if (t.trim()) INDEX.push({ ch: ch, kind: 'guide', title: s.title, text: t, href: '#/c/' + ch.id + '/guide/' + s.id + '--' + i });
          });
        });
      });
      (ch.highYield || []).forEach(function (tp) {
        tp.items.forEach(function (it, i) {
          INDEX.push({ ch: ch, kind: 'hy', title: tp.topic, text: plain(it), href: '#/c/' + ch.id + '/high-yield/' + tp.id + '--' + i });
        });
      });
      DECKS.forEach(function (d) {
        (ch[d.key] || []).forEach(function (c) {
          var text = plain(c.q) + ' ' + (c.choices ? c.choices.map(plain).join(' ') + ' ' : '') + plain(c.a || '') + ' ' + plain(c.why || '');
          INDEX.push({ ch: ch, kind: d.key, title: c.tag || d.short, text: text, front: plain(c.q), href: '#/c/' + ch.id + '/cards/' + d.key + '/' + c.id });
        });
      });
    });
    INDEX.forEach(function (e) { e.lc = e.text.toLowerCase(); e.lt = e.title.toLowerCase(); });
  }
  function terms(q) { return q.toLowerCase().replace(/[^\p{L}\p{N}\-\s.]/gu, ' ').split(/\s+/).filter(function (t) { return t.length > 0; }); }
  function runSearch(q) {
    if (!INDEX) buildIndex();
    var ts = terms(q);
    if (!ts.length) return [];
    var phrase = q.toLowerCase().trim();
    var out = [];
    INDEX.forEach(function (e) {
      var score = 0;
      for (var i = 0; i < ts.length; i++) {
        var t = ts[i], inT = e.lt.indexOf(t) > -1, at = e.lc.indexOf(t);
        if (!inT && at < 0) return;
        if (inT) score += 4;
        if (at > -1) score += 1 + (at < 120 ? 1 : 0);
      }
      if (ts.length > 1 && e.lc.indexOf(phrase) > -1) score += 6;
      if (e.kind === 'hy') score += 0.5;
      out.push({ e: e, score: score });
    });
    out.sort(function (a, b) { return b.score - a.score; });
    return out.map(function (r) { return r.e; });
  }
  function snippet(text, ts, len) {
    len = len || 200;
    var lc = text.toLowerCase(), i = -1;
    ts.forEach(function (t) { var j = lc.indexOf(t); if (j > -1 && (i < 0 || j < i)) i = j; });
    var start = Math.max(0, (i < 0 ? 0 : i) - 70);
    if (start > 0) { var sp = text.indexOf(' ', start); if (sp > -1 && sp - start < 20) start = sp + 1; }
    var s = text.slice(start, start + len);
    return (start > 0 ? '\u2026' : '') + highlight(s, ts) + (start + len < text.length ? '\u2026' : '');
  }
  function highlight(s, ts) {
    var good = ts.filter(function (t) { return t.length > 1; });
    if (!good.length) return esc(s);
    var re = new RegExp('(' + good.map(escRe).join('|') + ')', 'gi');
    var outp = '', last = 0, m;
    while ((m = re.exec(s))) { outp += esc(s.slice(last, m.index)) + '<mark>' + esc(m[0]) + '</mark>'; last = m.index + m[0].length; if (m[0].length === 0) re.lastIndex++; }
    return outp + esc(s.slice(last));
  }
  function kindGroup(k) { return k === 'guide' ? 'guide' : k === 'hy' ? 'hy' : 'cards'; }

  function renderSearch(q) {
    var res = runSearch(q);
    var ts = terms(q);
    var filter = 'all';
    var counts = { all: res.length, guide: 0, hy: 0, cards: 0 };
    res.forEach(function (e) { counts[kindGroup(e.kind)]++; });
    var html = '<div class="wrap search-page"><h1>' + (q ? 'Results for \u201c' + esc(q) + '\u201d' : 'Search') + '</h1>' +
      '<p class="search-page__sub">' + (q ? res.length + ' matches across every chapter in the app' : 'Type in the search box above to search every study guide, high-yield list and flashcard.') + '</p>' +
      (q && res.length ? '<div class="filters" role="group" aria-label="Filter results">' +
        [['all', 'All'], ['guide', 'Study guide'], ['hy', 'High yield'], ['cards', 'Flashcards']].map(function (f) {
          return '<button class="filter" type="button" data-f="' + f[0] + '" aria-pressed="' + (f[0] === 'all') + '">' + f[1] + ' (' + counts[f[0]] + ')</button>';
        }).join('') + '</div>' : '') +
      '<ol class="results" id="results"></ol>' +
      (q && !res.length ? '<div class="empty"><h2>No matches</h2><p>Try a shorter word or a drug name, for example \u201cclozapine\u201d, \u201cerotomanic\u201d or \u201cP300\u201d.</p></div>' : '') +
      '</div>';
    setView('search:' + q, html);
    document.title = (q ? q + ' — ' : '') + 'Search — K&S Study Companion';
    var list = main.querySelector('#results');
    function draw() {
      var shown = res.filter(function (e) { return filter === 'all' || kindGroup(e.kind) === filter; }).slice(0, 250);
      list.innerHTML = shown.map(function (e) {
        var k = KIND[e.kind];
        var title = e.kind === 'guide' || e.kind === 'hy' ? e.title : e.title;
        var text = e.front && !ts.some(function (t) { return e.front.toLowerCase().indexOf(t) > -1; }) ? e.text : (e.front || e.text);
        return '<li class="result"><a href="' + e.href + '"><div class="result__meta"><span class="kind c-' + k.css + '">' + k.label + '</span><span>Chapter ' + e.ch.number + '</span></div>' +
          '<p class="result__title">' + esc(title) + '</p><p class="result__text">' + snippet(text, ts, 240) + '</p></a></li>';
      }).join('');
    }
    draw();
    main.querySelectorAll('.filter').forEach(function (b) {
      b.addEventListener('click', function () {
        filter = b.getAttribute('data-f');
        main.querySelectorAll('.filter').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        draw();
      });
    });
  }

  /* ---------- header search suggestions ---------- */
  var sugIndex = -1, sugTimer = null;
  function closeSuggest() { suggestBox.hidden = true; qInput.setAttribute('aria-expanded', 'false'); sugIndex = -1; }
  function openSuggest(q) {
    if (!q.trim()) { closeSuggest(); return; }
    var res = runSearch(q), ts = terms(q);
    var top = res.slice(0, 7);
    var html = top.map(function (e, i) {
      var k = KIND[e.kind];
      return '<a class="suggest__item" role="option" id="sug-' + i + '" href="' + e.href + '" aria-selected="false">' +
        '<span class="suggest__meta"><span class="kind c-' + k.css + '">' + k.label + '</span><span>Ch ' + e.ch.number + '</span><span>' + esc(e.title) + '</span></span>' +
        '<span class="suggest__text">' + snippet(e.front || e.text, ts, 140) + '</span></a>';
    }).join('');
    if (res.length) html += '<a class="suggest__item suggest__all" role="option" id="sug-' + top.length + '" href="#/search/' + encodeURIComponent(q) + '" aria-selected="false">See all ' + res.length + ' results</a>';
    else html = '<div class="suggest__empty">No matches for \u201c' + esc(q) + '\u201d</div>';
    suggestBox.innerHTML = html;
    suggestBox.hidden = false;
    qInput.setAttribute('aria-expanded', 'true');
    sugIndex = -1;
  }
  function moveSug(d) {
    var items = suggestBox.querySelectorAll('.suggest__item');
    if (!items.length) return;
    sugIndex = (sugIndex + d + items.length) % items.length;
    items.forEach(function (it, i) { it.setAttribute('aria-selected', String(i === sugIndex)); });
    qInput.setAttribute('aria-activedescendant', items[sugIndex].id);
    items[sugIndex].scrollIntoView({ block: 'nearest' });
  }
  qInput.addEventListener('input', function () {
    clearTimeout(sugTimer);
    sugTimer = setTimeout(function () { openSuggest(qInput.value); }, 110);
  });
  qInput.addEventListener('focus', function () { if (qInput.value.trim()) openSuggest(qInput.value); });
  qInput.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (suggestBox.hidden) openSuggest(qInput.value); moveSug(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveSug(-1); }
    else if (e.key === 'Escape') { closeSuggest(); qInput.blur(); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      var items = suggestBox.querySelectorAll('.suggest__item');
      var target = sugIndex > -1 && items[sugIndex] ? items[sugIndex].getAttribute('href') : (qInput.value.trim() ? '#/search/' + encodeURIComponent(qInput.value.trim()) : null);
      closeSuggest();
      if (target) { if (location.hash === target) route(); else location.hash = target; qInput.blur(); }
    }
  });
  suggestBox.addEventListener('mousedown', function (e) { e.preventDefault(); });
  suggestBox.addEventListener('click', function (e) {
    var a = e.target.closest('a'); if (!a) return;
    e.preventDefault(); closeSuggest(); qInput.blur();
    var h = a.getAttribute('href'); if (location.hash === h) route(); else location.hash = h;
  });
  qInput.addEventListener('blur', function () { setTimeout(closeSuggest, 120); });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !(e.target.matches && e.target.matches('input, textarea, select'))) { e.preventDefault(); qInput.focus(); qInput.select(); }
  });

  /* ---------- theme ---------- */
  var themeBtn = document.getElementById('theme');
  function currentTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function labelTheme() { themeBtn.setAttribute('aria-label', currentTheme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'); }
  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store.set('theme', next);
    labelTheme();
  });
  labelTheme();

  /* ---------- boot ---------- */
  window.addEventListener('hashchange', route);
  loadAll().then(function () {
    route();
  }).catch(function (err) {
    main.innerHTML = '<div class="wrap empty" style="margin-top:48px"><h2>Chapter data did not load</h2><p>' + esc(err.message) + '. Check that every file listed in data/chapters.js exists in the repository.</p></div>';
  });

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
