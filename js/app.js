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
    },
    del: function (k) { try { localStorage.removeItem(PREFIX + k); } catch (e) {} }
  };

  /* ---------- modes ---------- */
  var MODES = [
    { key: 'guide', label: 'Study guide', short: 'Study guide', css: 'guide', blurb: 'The whole chapter, organized for learning.' },
    { key: 'high-yield', label: 'High yield', short: 'High yield', css: 'hy', blurb: 'The facts exams and boards keep returning to.' },
    { key: 'diagnosis', label: 'Diagnosis cards', short: 'Diagnosis', css: 'dx', deck: true, blurb: 'Criteria, durations, specifiers, differentials.' },
    { key: 'cases', label: 'Clinical case cards', short: 'Clinical cases', css: 'case', deck: true, blurb: 'Vignettes with a single best answer.' },
    { key: 'pharm', label: 'Pharmacology cards', short: 'Pharmacology', css: 'pharm', deck: true, blurb: 'Drugs, side effects, dosing, monitoring.' },
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

  function slug(s) { return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); }
  function pct(a, b) { return b ? Math.round(a / b * 100) : 0; }
  function fmtDate(t) { try { return new Date(t).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }); } catch (e) { return ''; } }
  function fmtClock(sec) { sec = Math.max(0, Math.round(sec)); var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }
  function shuffle(a) { for (var j = a.length - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; } return a; }
  function reduceMotion() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

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
    (KS.extraFiles || []).forEach(function (f) { jobs.push(loadScript(f)); });
    return Promise.all(jobs);
  }
  var CHAPTERS = {};
  function chapter(id) {
    if (CHAPTERS[id]) return CHAPTERS[id];
    var meta = null;
    KS.manifest.forEach(function (c) { if (c.id === id) meta = c; });
    if (!meta) return null;
    var d = KS.chapters[id] || {};
    var ch = {};
    Object.keys(meta).forEach(function (k) { ch[k] = meta[k]; });
    Object.keys(d).forEach(function (k) { ch[k] = d[k]; });
    CHAPTERS[id] = ch;
    return ch;
  }
  function allChapters() { return KS.manifest.map(function (m) { return chapter(m.id); }); }
  function sectionCount(ch) { var n = 0; (ch.guide && ch.guide.parts || []).forEach(function (p) { n += p.sections.length; }); return n; }
  function hyCount(ch) { var n = 0; (ch.highYield || []).forEach(function (t) { n += t.items.length; }); return n; }
  function cardCount(ch) { var n = 0; DECKS.forEach(function (d) { n += (ch[d.key] || []).length; }); return n; }

  /* Every card in the app, keyed "chapterId/deck/cardId". */
  var CARDS = {}, CARD_LIST = [];
  function indexCards() {
    CARDS = {}; CARD_LIST = [];
    allChapters().forEach(function (ch) {
      DECKS.forEach(function (d) {
        (ch[d.key] || []).forEach(function (c, i) {
          var key = ch.id + '/' + d.key + '/' + c.id;
          var rec = { key: key, ch: ch, deck: d, c: c, i: i };
          CARDS[key] = rec; CARD_LIST.push(rec);
        });
      });
    });
  }
  function deckKeys(ch, deckKey) { return (ch[deckKey] || []).map(function (c) { return ch.id + '/' + deckKey + '/' + c.id; }); }

  /* ---------- spaced repetition ----------
     Each reviewed card stores { i: interval in days, e: ease, r: successful reps, l: lapses, d: due day }.
     Cards with no record are new. Ratings: 1 Again, 2 Hard, 3 Good, 4 Easy (an SM-2 style schedule). */
  function today() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }
  var SRS = store.get('srs', null);
  (function migrate() {
    if (SRS) return;
    SRS = {};
    var old = store.get('cards', {});
    Object.keys(old).forEach(function (k) {
      if (old[k] === 'known') SRS[k] = { i: 3, e: 2.5, r: 2, l: 0, d: today() + 3 };
      else if (old[k] === 'learning') SRS[k] = { i: 0, e: 2.3, r: 0, l: 1, d: today() };
    });
    store.set('srs', SRS);
  })();
  function saveSRS() { store.set('srs', SRS); }
  function srsNext(s, g) {
    s = s || { i: 0, e: 2.5, r: 0, l: 0 };
    var e = s.e, i, r = s.r, l = s.l || 0;
    if (g === 1) { e = Math.max(1.3, e - 0.2); i = 0; r = 0; l++; }
    else if (g === 2) { e = Math.max(1.3, e - 0.15); i = r === 0 ? 1 : Math.max(s.i + 1, Math.round(s.i * 1.2)); r++; }
    else if (g === 3) { i = r === 0 ? 2 : r === 1 ? 5 : Math.max(s.i + 1, Math.round(s.i * e)); r++; }
    else { e = e + 0.15; i = r === 0 ? 4 : Math.max(s.i + 2, Math.round(s.i * e * 1.3)); r++; }
    return { i: i, e: Math.round(e * 100) / 100, r: r, l: l, d: today() + i };
  }
  function ivLabel(i) { return i === 0 ? 'Today' : i === 1 ? '1 day' : i < 30 ? i + ' days' : i < 365 ? Math.round(i / 30) + ' mo' : (i / 365).toFixed(1) + ' yr'; }
  function cardStatus(key) {
    var s = SRS[key];
    if (!s) return 'new';
    return s.i >= 21 ? 'mastered' : 'learning';
  }
  function isDue(key) { var s = SRS[key]; return !!s && s.d <= today(); }
  var NEW_KEY = 'newToday';
  function newSeenToday() { var n = store.get(NEW_KEY, null); return n && n.day === today() ? n.n : 0; }
  function bumpNewSeen() { store.set(NEW_KEY, { day: today(), n: newSeenToday() + 1 }); }
  function rateCard(key, g) {
    var wasNew = !SRS[key];
    SRS[key] = srsNext(SRS[key], g);
    saveSRS();
    if (wasNew) bumpNewSeen();
    updateNavBadges();
  }
  function tallyKeys(keys) {
    var t = { total: keys.length, fresh: 0, learning: 0, mastered: 0, due: 0 };
    keys.forEach(function (k) {
      var st = cardStatus(k);
      if (st === 'new') t.fresh++; else if (st === 'mastered') t.mastered++; else t.learning++;
      if (isDue(k)) t.due++;
    });
    return t;
  }
  function reviewPrefs() { return store.get('reviewPrefs', { newPerDay: 20, scope: 'all' }); }
  function dueSummary(scope) {
    var due = 0, fresh = 0;
    CARD_LIST.forEach(function (r) {
      if (scope && scope !== 'all' && r.ch.id !== scope) return;
      if (isDue(r.key)) due++; else if (!SRS[r.key]) fresh++;
    });
    var quota = Math.max(0, reviewPrefs().newPerDay - newSeenToday());
    return { due: due, fresh: fresh, newToday: Math.min(quota, fresh) };
  }

  /* ---------- mistakes ---------- */
  var MISTAKES = store.get('mistakes', {});
  function saveMistakes() { store.set('mistakes', MISTAKES); updateNavBadges(); }
  function addMistake(key, src) {
    var m = MISTAKES[key] || { n: 0 };
    m.n++; m.t = Date.now(); m.src = src;
    MISTAKES[key] = m; saveMistakes();
  }
  function clearMistake(key) { if (MISTAKES[key]) { delete MISTAKES[key]; saveMistakes(); } }
  function mistakeKeys() { return Object.keys(MISTAKES).filter(function (k) { return CARDS[k]; }).sort(function (a, b) { return MISTAKES[b].t - MISTAKES[a].t; }); }

  /* ---------- router ---------- */
  var view = { key: null, focus: null, cleanup: null };

  function parts() {
    var h = location.hash.replace(/^#\/?/, '');
    return h.split('/').filter(Boolean).map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
  }

  function setView(key, html, focusFn, opts) {
    if (view.cleanup) { view.cleanup(); view.cleanup = null; }
    closeGloss();
    view.key = key;
    view.focus = focusFn || null;
    main.innerHTML = html;
    if (!(opts && opts.keepScroll)) window.scrollTo(0, 0);
    var modes = main.querySelector('.modes'), act = modes && modes.querySelector('.is-active');
    if (act && modes.scrollWidth > modes.clientWidth) modes.scrollLeft = act.offsetLeft - (modes.clientWidth - act.offsetWidth) / 2;
    markNav();
  }

  function route() {
    closeSuggest();
    var p = parts();
    if (!p.length) return renderHome();
    switch (p[0]) {
      case 'search': var q = p.slice(1).join('/'); qInput.value = q; return renderSearch(q);
      case 'review': return renderReview(p[1]);
      case 'mistakes': return renderMistakes();
      case 'exam':
        if (p[1] === 'run') return renderExamRun();
        if (p[1] === 'results') return renderExamResults(p[2]);
        if (p[1] === 'review') return renderExamReview(p[2], p[3] || 'missed', parseInt(p[4] || '0', 10));
        return renderExamSetup();
      case 'glossary': return renderGlossary(p[1]);
      case 'helpers': return p[1] ? renderHelper(p[1]) : renderHelpers();
      case 'c':
        var ch = chapter(p[1]);
        if (!ch) return renderMissing();
        var mode = p[2] || 'guide';
        store.set('last', { hash: location.hash, ch: ch.id, mode: mode === 'cards' ? (p[3] || 'diagnosis') : mode });
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

  /* ---------- site navigation ---------- */
  function markNav() {
    var p = parts()[0] || '';
    document.querySelectorAll('.sitenav a').forEach(function (a) {
      var on = a.getAttribute('data-nav') === p;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  function updateNavBadges() {
    var b = document.querySelector('[data-badge="review"]');
    if (b && CARD_LIST.length) { var s = dueSummary('all'); var n = s.due + s.newToday; b.textContent = n; b.hidden = !n; }
    var m = document.querySelector('[data-badge="mistakes"]');
    if (m) { var k = mistakeKeys().length; m.textContent = k; m.hidden = !k; }
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
    var lastCh = last && chapter(last.ch);
    var focus = lastCh || chs[chs.length - 1];
    var lastMode = last && modeBy(last.mode);
    var cont = lastCh
      ? '<a class="btn btn--solid" href="' + esc(last.hash) + '">Continue Chapter ' + lastCh.number + ' ' + esc(lastMode ? lastMode.label.toLowerCase() : 'study') + '</a>'
      : '<a class="btn btn--solid" href="#/c/' + focus.id + '/guide">Start Chapter ' + focus.number + '</a>';

    var spectrum = MODES.map(function (m) {
      return '<li><a class="c-' + m.css + '" href="' + modeHref(focus, m) + '"><span class="spectrum__label">' + esc(m.label) + '</span><span class="spectrum__blurb">' + esc(m.blurb) + '</span></a></li>';
    }).join('');

    var s = dueSummary('all');
    var perCh = chs.map(function (ch) {
      var d = dueSummary(ch.id);
      return '<li><a href="#/review/' + ch.id + '"><span>Chapter ' + ch.number + '</span><span class="today__n">' + d.due + ' due</span></a></li>';
    }).join('');
    var mk = mistakeKeys().length;
    var hist = store.get('examHistory', []);
    var lastExam = hist[0];
    var todayPanel =
      '<section class="wrap home-section today" aria-labelledby="today-h">' +
        '<div class="today__main">' +
          '<h2 id="today-h">Today’s review</h2>' +
          '<p class="today__big"><span>' + s.due + '</span> ' + (s.due === 1 ? 'card' : 'cards') + ' due' + (s.newToday ? ' and <span>' + s.newToday + '</span> new' : '') + '</p>' +
          '<p class="today__sub">Spaced repetition brings each card back just before you are likely to forget it. Rate every card honestly and the schedule takes care of the rest.</p>' +
          '<a class="btn btn--solid" href="#/review">' + (s.due + s.newToday ? 'Start review' : 'Open review') + '</a>' +
          '<ul class="today__chapters">' + perCh + '</ul>' +
        '</div>' +
        '<div class="tools">' +
          '<a class="tool" href="#/exam"><span class="tool__name">Board-style exam</span><span class="tool__meta">' + (lastExam ? 'Last score ' + pct(lastExam.score, lastExam.total) + '%' : 'Timed clinical cases from every chapter') + '</span></a>' +
          '<a class="tool" href="#/mistakes"><span class="tool__name">Mistakes</span><span class="tool__meta">' + (mk ? plural(mk, 'case') + ' to revisit' : 'Cases you miss collect here') + '</span></a>' +
          '<a class="tool" href="#/glossary"><span class="tool__name">Glossary</span><span class="tool__meta">' + (KS.glossary || []).length + ' signs and symptoms</span></a>' +
          '<a class="tool" href="#/helpers"><span class="tool__name">Diagnostic helper</span><span class="tool__meta">Psychotic and bipolar disorders, step by step</span></a>' +
        '</div>' +
      '</section>';

    var rows = chs.slice().reverse().map(function (ch) {
      var keys = [];
      DECKS.forEach(function (d) { keys = keys.concat(deckKeys(ch, d.key)); });
      var t = tallyKeys(keys);
      var started = t.total - t.fresh;
      return '<li><a class="chapter-row" href="#/c/' + ch.id + '/guide">' +
        '<span class="chapter-row__num" aria-hidden="true">' + ch.number + '</span>' +
        '<div><h3><span class="sr-only">Chapter ' + ch.number + ': </span>' + esc(ch.title) + '</h3><p>' + esc(ch.summary) + '</p>' +
        '<div class="chapter-row__stats"><span><b>' + sectionCount(ch) + '</b> guide sections</span><span><b>' + hyCount(ch) + '</b> high-yield points</span><span><b>' + t.total + '</b> flashcards</span></div></div>' +
        '<div class="meter"><div class="meter__label">' + t.mastered + ' mastered, ' + started + ' started</div><div class="meter__bar"><span style="width:' + pct(t.mastered, t.total) + '%"></span><span class="meter__learn" style="width:' + pct(t.learning, t.total) + '%"></span></div></div>' +
        '</a></li>';
    }).join('');

    var html =
      '<section class="hero"><div class="wrap hero__grid">' +
        '<div><h1>Synopsis of Psychiatry, one chapter at a time</h1>' +
        '<p class="hero__lede">Study guides, high-yield reviews and flashcards for psychiatry residents, built chapter by chapter from Kaplan &amp; Sadock\u2019s Synopsis of Psychiatry, 12th edition.</p>' +
        '<div class="hero__actions">' + cont + '<a class="btn" href="#/exam">Take a practice exam</a></div></div>' +
        '<nav class="refract" aria-label="Study modes for Chapter ' + focus.number + '">' +
          '<p class="refract__for">Chapter ' + focus.number + ': <a href="#/c/' + focus.id + '/guide">' + esc(focus.short || focus.title) + '</a></p>' +
          prismSVG() + raysSVG() + '<ul class="spectrum">' + spectrum + '</ul>' +
        '</nav>' +
      '</div></section>' +
      todayPanel +
      '<section class="wrap home-section"><h2>Chapters in the app</h2><ul class="chapter-list">' + rows + '</ul></section>' +
      '<section class="wrap home-section"><h2>How to study a chapter</h2><div class="howto">' +
        '<div><h3>Read the study guide</h3><p>Work through it once, end to end. Tap any dotted term for its definition from the book’s glossary.</p></div>' +
        '<div><h3>Test yourself on high yield</h3><p>Switch on \u201cHide key facts\u201d and recall each blank before you tap it. Revisit the night before an exam.</p></div>' +
        '<div><h3>Review a little every day</h3><p>Do the day’s due cards, sit a timed exam each week, and clear your mistakes pile. Progress stays on this device.</p></div>' +
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
    main.querySelectorAll('.reading__intro, .objectives, .g-sec').forEach(function (s) { linkTerms(s); });

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
    main.querySelectorAll('.hy-topic').forEach(function (t) { linkTerms(t, { skip: 'strong' }); });
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


  /* ---------- card player (decks, daily review, mistakes) ----------
     o.queue    array of card keys (mutated when o.consume is true)
     o.consume  true: rated cards leave the queue (Again puts them back a few cards later)
     o.mode     'srs' rates with Again/Hard/Good/Easy; 'mistakes' clears a case when answered correctly
     o.source   show the chapter and deck on each card
     o.done     function(stats) returning the end-of-session HTML
     o.after    called after every change (to refresh tallies) */
  var LETTERS = 'ABCDE';
  function Player(area, o) {
    var st = { pos: o.pos || 0, flipped: false, chosen: null };
    var stats = { rated: 0, again: 0, right: 0, wrong: 0, cleared: 0 };

    function cur() { return CARDS[o.queue[st.pos]]; }
    function statusLabel(key) {
      var s = SRS[key];
      if (!s) return 'New';
      if (s.d <= today()) return 'Due';
      return cardStatus(key) === 'mastered' ? 'Mastered' : 'Learning';
    }

    function draw() {
      if (o.after) o.after();
      if (!o.queue.length || st.pos >= o.queue.length) {
        area.innerHTML = o.done(stats);
        var again = area.querySelector('[data-restart]');
        if (again) again.addEventListener('click', function () { st.pos = 0; st.flipped = false; st.chosen = null; draw(); });
        var rr = area.querySelector('[data-rerender]');
        if (rr) rr.addEventListener('click', function () { route(); });
        return;
      }
      var r = cur(), c = r.c, key = r.key, isCase = !!c.choices;
      var front, back;
      if (isCase) {
        front = '<p class="face__q">' + fmt(c.q) + '</p><ul class="choices">' + c.choices.map(function (ch2, i) {
          return '<li><button class="choice" type="button" data-choice="' + i + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(ch2) + '</span></button></li>';
        }).join('') + '</ul><p class="face__hint">Choose an answer to turn the card.</p>';
        var right = st.chosen === c.answer;
        var verdict = st.chosen == null ? '<p class="verdict">Answer</p>' :
          '<p class="verdict ' + (right ? 'is-right">Correct' : 'is-wrong">Not quite. You chose ' + LETTERS[st.chosen]) + '</p>';
        back = verdict + '<p class="face__recap">' + fmt(c.q) + '</p>' + choiceList(c.choices, c.answer, st.chosen) + '<p class="face__why">' + fmt(c.why) + '</p>';
      } else {
        front = '<p class="face__q">' + fmt(c.q) + '</p><p class="face__hint">Tap the card or press Space to see the answer.</p>';
        back = '<p class="face__q face__q--small">' + fmt(c.q) + '</p><p class="face__a">' + fmt(c.a) + '</p>' + (c.why ? '<p class="face__why">' + fmt(c.why) + '</p>' : '');
      }
      var src = o.source ? '<span class="face__src">Ch ' + r.ch.number + ', ' + esc(r.deck.short) + '</span>' : '';
      var top = '<div class="face__top"><span class="face__tag c-' + r.deck.css + '">' + esc(c.tag || r.deck.short) + '</span>' + src + '<span class="face__status">' + esc(o.mode === 'mistakes' ? 'Missed ' + plural((MISTAKES[key] || { n: 1 }).n, 'time') : statusLabel(key)) + '</span></div>';

      var controls;
      if (!st.flipped) {
        controls = '<button class="btn btn--solid" type="button" id="flip">' + (isCase ? 'Show answer' : 'Flip card') + '</button>';
      } else if (o.mode === 'mistakes') {
        var ok = st.chosen === c.answer;
        controls = '<p class="cleared ' + (ok ? 'is-right' : 'is-wrong') + '">' + (ok ? 'Cleared from your mistakes.' : 'This case stays in your mistakes.') + '</p><button class="btn btn--solid" type="button" id="next-m">Next case</button>';
      } else {
        var s = SRS[key];
        var suggest = isCase && st.chosen != null ? (st.chosen === c.answer ? 3 : 1) : 0;
        controls = '<div class="rate" role="group" aria-label="How well did you know this?">' + [[1, 'Again'], [2, 'Hard'], [3, 'Good'], [4, 'Easy']].map(function (g) {
          return '<button class="btn rate__b rate__b--' + g[0] + (suggest === g[0] ? ' is-suggested' : '') + '" type="button" data-rate="' + g[0] + '"><span>' + g[1] + '</span><small>' + ivLabel(srsNext(s, g[0]).i) + '</small></button>';
        }).join('') + '</div>';
      }
      var canPrev = !o.consume && st.pos > 0;
      var canNext = !o.consume && st.pos < o.queue.length - 1;
      area.innerHTML =
        '<div class="stage"><div class="flashcard' + (st.flipped ? ' is-flipped' : '') + '" id="fc" tabindex="0" role="group" aria-roledescription="flashcard" aria-label="Card ' + (st.pos + 1) + ' of ' + o.queue.length + (st.flipped ? ', answer side' : ', question side') + '">' +
          '<div class="face face--front c-' + r.deck.css + '"' + (st.flipped ? ' aria-hidden="true"' : '') + '>' + top + front + '</div>' +
          '<div class="face face--back c-' + r.deck.css + '"' + (st.flipped ? '' : ' aria-hidden="true"') + '>' + top + back + '</div>' +
        '</div></div>' +
        '<div class="card-nav">' +
          (o.consume ? '<span class="card-nav__pos">' + plural(o.queue.length - st.pos, 'card') + ' left</span>' :
            '<button class="btn" type="button" id="prev"' + (canPrev ? '' : ' disabled') + '>Previous</button><span class="card-nav__pos">Card ' + (st.pos + 1) + ' of ' + o.queue.length + '</span>') +
          '<div class="card-nav__main">' + controls + '</div>' +
          (o.consume ? '' : '<button class="btn" type="button" id="next"' + (canNext ? '' : ' disabled') + '>Next</button>') +
        '</div>';
      area.querySelectorAll('.face').forEach(function (f) { linkTerms(f, { skip: '.choice, .face__top, .verdict' }); });

      var fc = area.querySelector('#fc');
      fc.addEventListener('click', function (e) {
        if (e.target.closest('.gl')) return;
        var b = e.target.closest('[data-choice]');
        if (b) { choose(parseInt(b.getAttribute('data-choice'), 10)); return; }
        if (isCase && !st.flipped) return;
        if (o.mode === 'mistakes' && st.flipped) return;
        flip();
      });
      bind('#prev', function () { go(-1); });
      bind('#next', function () { go(1); });
      bind('#flip', function () { if (isCase && !st.flipped) { st.flipped = true; st.chosen = null; draw(); refocus(); } else flip(); });
      bind('#next-m', advanceMistake);
      area.querySelectorAll('[data-rate]').forEach(function (b) { b.addEventListener('click', function () { rate(parseInt(b.getAttribute('data-rate'), 10)); }); });
    }
    function choiceList(choices, answer, chosen) {
      return '<ul class="choices choices--static">' + choices.map(function (ch2, i) {
        var cls = i === answer ? ' is-correct' : (i === chosen ? ' is-wrong' : '');
        var note = i === answer ? '<span class="choice__note">Correct answer</span>' : (i === chosen ? '<span class="choice__note">Your answer</span>' : '');
        return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(ch2) + note + '</span></div></li>';
      }).join('') + '</ul>';
    }
    function bind(sel, fn) { var el = area.querySelector(sel); if (el) el.addEventListener('click', fn); }
    function flip() { st.flipped = !st.flipped; draw(); refocus(); }
    function choose(i) {
      var r = cur(); st.chosen = i; st.flipped = true;
      var ok = i === r.c.answer;
      if (ok) stats.right++; else stats.wrong++;
      if (o.mode === 'mistakes') {
        if (ok) { clearMistake(r.key); stats.cleared++; rateCard(r.key, 3); }
        else { addMistake(r.key, 'mistakes'); rateCard(r.key, 1); }
      } else if (!ok) addMistake(r.key, 'cards');
      draw(); refocus();
    }
    function go(d) {
      var np = st.pos + d;
      if (np < 0 || np >= o.queue.length) return;
      st.pos = np; st.flipped = false; st.chosen = null; draw(); refocus();
    }
    function rate(g) {
      var r = cur(); if (!r) return;
      rateCard(r.key, g);
      stats.rated++; if (g === 1) stats.again++;
      st.flipped = false; st.chosen = null;
      if (o.consume) {
        var k = o.queue.splice(st.pos, 1)[0];
        if (g === 1) o.queue.splice(Math.min(st.pos + 4, o.queue.length), 0, k);
      } else {
        st.pos++;
      }
      draw(); refocus();
    }
    function advanceMistake() {
      st.flipped = false; st.chosen = null;
      o.queue.splice(st.pos, 1);
      draw(); refocus();
    }
    function refocus() { var fc = area.querySelector('#fc'); if (fc) fc.focus({ preventScroll: true }); }

    function onKey(e) {
      if (e.target.matches && e.target.matches('input, textarea, select')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var r = cur(); if (!r) return;
      var c = r.c, k = e.key;
      if (k === ' ' || k === 'Enter') {
        if (e.target.closest && e.target.closest('button, a, .gl') && e.target.id !== 'fc') return;
        if (o.mode === 'mistakes' && st.flipped) { e.preventDefault(); advanceMistake(); return; }
        if (c.choices && !st.flipped) return;
        e.preventDefault(); flip();
      } else if (k === 'ArrowRight') {
        if (o.mode === 'mistakes' && st.flipped) { e.preventDefault(); advanceMistake(); }
        else if (!o.consume) { e.preventDefault(); go(1); }
      } else if (k === 'ArrowLeft' && !o.consume) { e.preventDefault(); go(-1); }
      else if (c.choices && !st.flipped && /^[a-e]$/i.test(k)) {
        var i = 'abcde'.indexOf(k.toLowerCase()); if (i < c.choices.length) { e.preventDefault(); choose(i); }
      } else if (st.flipped && o.mode !== 'mistakes' && /^[1-4]$/.test(k)) { e.preventDefault(); rate(parseInt(k, 10)); }
    }
    document.addEventListener('keydown', onKey);
    draw();
    return { destroy: function () { document.removeEventListener('keydown', onKey); }, redraw: draw };
  }

  function tallyHTML(t, label) {
    var tot = t.total || 1;
    return '<span><b>' + t.fresh + '</b> new</span><span><b>' + t.learning + '</b> learning</span><span><b>' + t.mastered + '</b> mastered</span>' +
      '<div class="tally__bar" role="img" aria-label="' + esc(label || '') + ' ' + t.mastered + ' mastered and ' + t.learning + ' learning out of ' + t.total + '"><span class="tally__known" style="width:' + (t.mastered / tot * 100) + '%"></span><span class="tally__learn" style="width:' + (t.learning / tot * 100) + '%"></span></div>' +
      '<span><b>' + t.due + '</b> due today</span>';
  }
  function kbdHelp(cases) {
    return '<p class="kbd-help"><kbd>Space</kbd> flip' + (cases ? ' <kbd>A</kbd>\u2013<kbd>E</kbd> answer' : '') + ' <kbd>1</kbd>\u2013<kbd>4</kbd> rate Again, Hard, Good, Easy</p>';
  }

  /* ---------- deck view ---------- */
  var deckSessions = {};
  function renderCards(ch, deckKey, cardId) {
    var deck = modeBy(deckKey);
    if (!deck || !deck.deck) return renderMissing();
    var keys = deckKeys(ch, deck.key);
    var sKey = ch.id + '/' + deck.key;
    var prefs = store.get('deckPrefs', { mode: 'study' });
    if (prefs.mode !== 'study' && prefs.mode !== 'order' && prefs.mode !== 'shuffle') prefs.mode = 'study';
    var S = deckSessions[sKey] || (deckSessions[sKey] = { mode: prefs.mode, queue: null, pos: 0 });

    function build() {
      if (S.mode === 'study') {
        var due = keys.filter(isDue).sort(function (a, b) { return SRS[a].d - SRS[b].d; });
        var fresh = keys.filter(function (k) { return !SRS[k]; });
        S.queue = due.concat(fresh);
      } else if (S.mode === 'shuffle') S.queue = shuffle(keys.slice());
      else S.queue = keys.slice();
      S.pos = 0;
    }
    if (cardId) {
      var want = sKey + '/' + cardId;
      if (keys.indexOf(want) > -1) { S.mode = 'order'; S.queue = keys.slice(); S.pos = keys.indexOf(want); }
    } else if (!S.queue) build();

    var key = 'cards:' + sKey;
    var html = chapterHead(ch, deck.key) +
      '<div class="wrap cards-page c-' + deck.css + '">' +
        '<div class="deck-bar"><div class="deck-bar__opts">' +
          '<label class="select"><span>Show</span><select id="opt-mode">' +
            '<option value="study"' + (S.mode === 'study' ? ' selected' : '') + '>Due and new cards</option>' +
            '<option value="order"' + (S.mode === 'order' ? ' selected' : '') + '>All cards in order</option>' +
            '<option value="shuffle"' + (S.mode === 'shuffle' ? ' selected' : '') + '>All cards, shuffled</option>' +
          '</select></label>' +
        '</div><button class="link-btn" type="button" id="opt-reset">Reset this deck</button></div>' +
        '<div class="tally" id="tally"></div>' +
        '<div id="card-area" aria-live="polite"></div>' + kbdHelp(deck.key === 'cases') +
      '</div>';
    setView(key, html, null, { keepScroll: view.key === key });
    document.title = 'Ch ' + ch.number + ' ' + deck.label.toLowerCase() + ' — K&S Study Companion';
    var tally = main.querySelector('#tally');
    var player;
    function start() {
      if (player) player.destroy();
      player = Player(main.querySelector('#card-area'), {
        queue: S.queue, pos: S.pos, consume: S.mode === 'study', mode: 'srs',
        after: function () { tally.innerHTML = tallyHTML(tallyKeys(keys), deck.label); },
        done: function (stats) {
          if (S.mode === 'study') {
            var t = tallyKeys(keys);
            return '<div class="empty"><h2>' + (stats.rated ? 'Deck done for today' : 'Nothing due in this deck') + '</h2><p>' +
              (stats.rated ? 'You reviewed ' + plural(stats.rated, 'card') + '. ' : '') + 'Cards come back when they are due. ' +
              (t.total - t.fresh ? 'Switch to \u201cAll cards\u201d to keep practicing.' : '') + '</p><a class="btn btn--solid" href="#/review">Go to daily review</a></div>';
          }
          return '<div class="empty"><h2>End of the deck</h2><p>You went through all ' + keys.length + ' cards.</p><button class="btn btn--solid" type="button" data-restart>Start again</button></div>';
        }
      });
    }
    start();
    main.querySelector('#opt-mode').addEventListener('change', function (e) {
      S.mode = e.target.value; store.set('deckPrefs', { mode: S.mode }); build(); start();
    });
    main.querySelector('#opt-reset').addEventListener('click', function () {
      if (!window.confirm('Clear the review schedule for every card in this deck? They will all become new cards again.')) return;
      keys.forEach(function (k) { delete SRS[k]; }); saveSRS(); updateNavBadges(); build(); start();
    });
    view.cleanup = function () { if (player) player.destroy(); };
  }

  /* ---------- daily review ---------- */
  function newCardsFor(scope) {
    var out = [];
    allChapters().forEach(function (ch) {
      if (scope !== 'all' && ch.id !== scope) return;
      var lists = DECKS.map(function (d) { return deckKeys(ch, d.key).filter(function (k) { return !SRS[k]; }); });
      var more = true, i = 0;
      while (more) { more = false; lists.forEach(function (l) { if (i < l.length) { out.push(l[i]); more = true; } }); i++; }
    });
    return out;
  }
  function renderReview(scopeArg) {
    var prefs = reviewPrefs();
    if (scopeArg) { prefs.scope = chapter(scopeArg) ? scopeArg : 'all'; store.set('reviewPrefs', prefs); }
    var scope = prefs.scope || 'all';
    if (scope !== 'all' && !chapter(scope)) scope = 'all';
    function inScope(r) { return scope === 'all' || r.ch.id === scope; }
    var due = CARD_LIST.filter(function (r) { return inScope(r) && isDue(r.key); }).map(function (r) { return r.key; });
    shuffle(due); due.sort(function (a, b) { return SRS[a].d - SRS[b].d; });
    var quota = Math.max(0, prefs.newPerDay - newSeenToday());
    var fresh = newCardsFor(scope).slice(0, quota);
    var queue = due.concat(fresh);
    var scopeOpts = '<option value="all"' + (scope === 'all' ? ' selected' : '') + '>All chapters</option>' + allChapters().map(function (ch) {
      return '<option value="' + ch.id + '"' + (scope === ch.id ? ' selected' : '') + '>Chapter ' + ch.number + '</option>';
    }).join('');
    var newOpts = [0, 10, 20, 40, 80].map(function (n) { return '<option value="' + n + '"' + (prefs.newPerDay === n ? ' selected' : '') + '>' + n + ' new a day</option>'; }).join('');
    var html = '<div class="wrap page">' +
      '<header class="page__head"><h1>Daily review</h1><p>Cards that are due come first, then new cards up to your daily limit. Rate how well you knew each one: <b>Again</b> brings it back in a few cards, <b>Hard</b>, <b>Good</b> and <b>Easy</b> push it further into the future.</p></header>' +
      '<div class="deck-bar"><div class="deck-bar__opts">' +
        '<label class="select"><span>Chapters</span><select id="rv-scope">' + scopeOpts + '</select></label>' +
        '<label class="select"><span>New cards</span><select id="rv-new">' + newOpts + '</select></label>' +
      '</div><span class="deck-bar__count">' + plural(due.length, 'due card') + ', ' + plural(fresh.length, 'new card') + '</span></div>' +
      '<div id="card-area" aria-live="polite"></div>' + kbdHelp(true) + '</div>';
    setView('review:' + scope, html);
    document.title = 'Daily review — K&S Study Companion';
    var player = Player(main.querySelector('#card-area'), {
      queue: queue, consume: true, mode: 'srs', source: true,
      done: function (stats) {
        var next = null;
        CARD_LIST.forEach(function (r) { if (inScope(r) && SRS[r.key] && SRS[r.key].d > today() && (next === null || SRS[r.key].d < next)) next = SRS[r.key].d; });
        var when = next === null ? '' : 'Your next cards are due ' + (next - today() === 1 ? 'tomorrow' : 'in ' + (next - today()) + ' days') + '. ';
        var remainingNew = newCardsFor(scope).length;
        return '<div class="empty"><h2>' + (stats.rated ? 'Review complete' : 'Nothing due right now') + '</h2><p>' +
          (stats.rated ? 'You reviewed ' + plural(stats.rated, 'card') + (stats.again ? ' and marked ' + stats.again + ' to see again' : '') + '. ' : '') + when +
          (remainingNew && !quota ? 'You have reached today’s new-card limit; raise it above to keep going.' : '') + '</p>' +
          '<div class="empty__actions"><a class="btn btn--solid" href="#/exam">Take a practice exam</a><a class="btn" href="#/mistakes">Review mistakes</a></div></div>';
      }
    });
    view.cleanup = function () { player.destroy(); };
    main.querySelector('#rv-scope').addEventListener('change', function (e) {
      var p = reviewPrefs(); p.scope = e.target.value; store.set('reviewPrefs', p);
      var target = '#/review' + (e.target.value === 'all' ? '' : '/' + e.target.value);
      if (location.hash === target) renderReview(); else location.hash = target;
    });
    main.querySelector('#rv-new').addEventListener('change', function (e) { var p = reviewPrefs(); p.newPerDay = parseInt(e.target.value, 10); store.set('reviewPrefs', p); updateNavBadges(); renderReview(); });
  }

  /* ---------- mistakes ---------- */
  function renderMistakes() {
    var keys = mistakeKeys();
    var list = keys.map(function (k) {
      var r = CARDS[k];
      return '<li class="mk"><div class="mk__meta"><span class="kind c-case">Ch ' + r.ch.number + ', ' + esc(r.c.tag || 'Case') + '</span><span>Missed ' + plural(MISTAKES[k].n, 'time') + '</span></div>' +
        '<p class="mk__q">' + esc(plain(r.c.q)) + '</p><button class="link-btn" type="button" data-remove="' + esc(k) + '">Remove</button></li>';
    }).join('');
    var html = '<div class="wrap page">' +
      '<header class="page__head"><h1>Mistakes</h1><p>Every clinical case you answer incorrectly, in the decks, daily review or an exam, lands here. Answer it correctly to clear it.</p></header>' +
      (keys.length ? '<div class="deck-bar"><span class="deck-bar__count">' + plural(keys.length, 'case') + ' to revisit</span><button class="link-btn" type="button" id="mk-clear">Clear all mistakes</button></div><div id="card-area" aria-live="polite"></div>' +
        '<details class="mk-list"><summary>See all ' + plural(keys.length, 'missed case') + '</summary><ul>' + list + '</ul></details>'
        : '<div class="empty"><h2>No mistakes yet</h2><p>Cases you get wrong will collect here so you can come back to them.</p><div class="empty__actions"><a class="btn btn--solid" href="#/exam">Take a practice exam</a><a class="btn" href="#/review">Daily review</a></div></div>') +
      '</div>';
    setView('mistakes', html);
    document.title = 'Mistakes — K&S Study Companion';
    if (!keys.length) return;
    var queue = shuffle(keys.slice());
    var player = Player(main.querySelector('#card-area'), {
      queue: queue, consume: true, mode: 'mistakes', source: true,
      done: function (stats) {
        var left = mistakeKeys().length;
        return '<div class="empty"><h2>' + (left ? 'Round finished' : 'Mistakes cleared') + '</h2><p>You cleared ' + plural(stats.cleared, 'case') + (left ? '; ' + plural(left, 'case') + ' still to revisit.' : '.') + '</p>' +
          (left ? '<button class="btn btn--solid" type="button" data-rerender>Go again</button>' : '<a class="btn btn--solid" href="#/exam">Take a practice exam</a>') + '</div>';
      }
    });
    view.cleanup = function () { player.destroy(); };
    main.querySelector('#mk-clear').addEventListener('click', function () {
      if (!window.confirm('Remove every case from your mistakes?')) return;
      MISTAKES = {}; saveMistakes(); renderMistakes();
    });
    main.querySelectorAll('[data-remove]').forEach(function (b) {
      b.addEventListener('click', function () { clearMistake(b.getAttribute('data-remove')); b.closest('li').remove(); });
    });
  }

  /* ---------- exam mode ---------- */
  var SECS_PER_Q = 90;
  function caseKeys(chIds) {
    var out = [];
    chIds.forEach(function (id) { var ch = chapter(id); if (ch) out = out.concat(deckKeys(ch, 'cases')); });
    return out;
  }
  function renderExamSetup() {
    var chs = allChapters();
    var active = store.get('exam', null);
    var hist = store.get('examHistory', []);
    var prefs = store.get('examPrefs', { chapters: chs.map(function (c) { return c.id; }), count: 20, timed: true });
    var html = '<div class="wrap page exam-setup">' +
      '<header class="page__head"><h1>Board-style exam</h1><p>Single-best-answer clinical cases drawn at random from the chapters you choose. Answer choices are shuffled. Timed exams allow ' + SECS_PER_Q + ' seconds per question, about board pace.</p></header>' +
      (active ? '<div class="banner"><p>You have an exam in progress: ' + plural(active.items.length, 'question') + ', ' + active.items.filter(function (x) { return x.a != null; }).length + ' answered.</p><div class="empty__actions"><a class="btn btn--solid" href="#/exam/run">Resume exam</a><button class="btn" type="button" id="ex-discard">Discard it</button></div></div>' : '') +
      '<form class="exam-form" id="ex-form" onsubmit="return false">' +
        '<fieldset><legend>Chapters</legend>' + chs.map(function (ch) {
          return '<label class="check"><input type="checkbox" name="ch" value="' + ch.id + '"' + (prefs.chapters.indexOf(ch.id) > -1 ? ' checked' : '') + '> Chapter ' + ch.number + ': ' + esc(ch.short || ch.title) + ' <span class="muted">(' + (ch.cases || []).length + ' cases)</span></label>';
        }).join('') + '</fieldset>' +
        '<fieldset><legend>Questions</legend><div class="seg">' + [10, 20, 40, 0].map(function (n) {
          return '<label><input type="radio" name="count" value="' + n + '"' + (prefs.count === n ? ' checked' : '') + '><span>' + (n ? n : 'All') + '</span></label>';
        }).join('') + '</div></fieldset>' +
        '<fieldset><legend>Timing</legend><div class="seg">' +
          '<label><input type="radio" name="timed" value="1"' + (prefs.timed ? ' checked' : '') + '><span>Timed</span></label>' +
          '<label><input type="radio" name="timed" value="0"' + (!prefs.timed ? ' checked' : '') + '><span>Untimed</span></label>' +
        '</div></fieldset>' +
        '<p class="exam-form__sum" id="ex-sum"></p>' +
        '<button class="btn btn--solid" type="button" id="ex-start">Start exam</button>' +
      '</form>' +
      (hist.length ? '<section class="exam-hist"><h2>Past exams</h2><div class="table-wrap"><table><thead><tr><th scope="col">Date</th><th scope="col">Chapters</th><th scope="col">Score</th><th scope="col">Time</th><th scope="col"><span class="sr-only">Results</span></th></tr></thead><tbody>' +
        hist.map(function (h) {
          return '<tr><td>' + fmtDate(h.at) + '</td><td>' + h.chapters.map(function (id) { var c = chapter(id); return c ? c.number : id; }).join(', ') + '</td><td><b>' + pct(h.score, h.total) + '%</b> (' + h.score + '/' + h.total + ')</td><td>' + fmtClock(h.used) + '</td><td><a href="#/exam/results/' + h.id + '">Results</a></td></tr>';
        }).join('') + '</tbody></table></div></section>' : '') +
      '</div>';
    setView('exam', html);
    document.title = 'Exam — K&S Study Companion';
    var form = main.querySelector('#ex-form');
    function read() {
      var sel = Array.prototype.map.call(form.querySelectorAll('input[name=ch]:checked'), function (i) { return i.value; });
      var count = parseInt(form.querySelector('input[name=count]:checked').value, 10);
      var timed = form.querySelector('input[name=timed]:checked').value === '1';
      var pool = caseKeys(sel).length;
      var n = count ? Math.min(count, pool) : pool;
      return { chapters: sel, count: count, timed: timed, n: n, pool: pool };
    }
    function summary() {
      var r = read();
      main.querySelector('#ex-sum').textContent = r.pool ? plural(r.n, 'question') + ' from ' + plural(r.chapters.length, 'chapter') + (r.timed ? ', ' + fmtClock(r.n * SECS_PER_Q) + ' on the clock.' : ', no time limit.') : 'Choose at least one chapter.';
      main.querySelector('#ex-start').disabled = !r.pool;
    }
    form.addEventListener('change', summary); summary();
    main.querySelector('#ex-start').addEventListener('click', function () {
      var r = read(); if (!r.pool) return;
      if (store.get('exam', null) && !window.confirm('Starting a new exam discards the one in progress. Continue?')) return;
      store.set('examPrefs', { chapters: r.chapters, count: r.count, timed: r.timed });
      var picks = shuffle(caseKeys(r.chapters)).slice(0, r.n);
      var exam = {
        id: 'e' + Date.now().toString(36), at: Date.now(), chapters: r.chapters, timed: r.timed,
        limit: r.timed ? r.n * SECS_PER_Q : 0, cur: 0,
        items: picks.map(function (k) { return { k: k, o: shuffle(CARDS[k].c.choices.map(function (_, i) { return i; })), a: null, f: false }; })
      };
      store.set('exam', exam);
      location.hash = '#/exam/run';
    });
    var dis = main.querySelector('#ex-discard');
    if (dis) dis.addEventListener('click', function () { if (window.confirm('Discard the exam in progress?')) { store.del('exam'); renderExamSetup(); } });
  }

  function renderExamRun() {
    var ex = store.get('exam', null);
    if (!ex) { location.hash = '#/exam'; return; }
    ex.items = ex.items.filter(function (it) { return CARDS[it.k]; });
    var timer = null;
    var html = '<div class="wrap page exam-run">' +
      '<div class="exam-bar"><span class="exam-bar__pos" id="ex-pos"></span><span class="exam-bar__clock" id="ex-clock" role="timer" aria-live="off"></span>' +
        '<button class="btn" type="button" id="ex-flag" aria-pressed="false">Flag</button><button class="btn btn--solid" type="button" id="ex-submit">Submit<span class="lg"> exam</span></button></div>' +
      '<div class="exam-grid"><div class="exam-q" id="ex-q" aria-live="polite"></div><nav class="exam-nav" aria-label="Questions"><p class="exam-nav__title">Questions</p><div id="ex-nav" class="exam-nav__grid"></div>' +
        '<p class="exam-nav__key"><span class="dot dot--answered"></span>Answered <span class="dot dot--flag"></span>Flagged</p></nav></div></div>';
    setView('exam-run', html);
    document.title = 'Exam in progress — K&S Study Companion';
    function save() { store.set('exam', ex); }
    function remaining() { return ex.limit - (Date.now() - ex.at) / 1000; }
    function draw() {
      var it = ex.items[ex.cur], r = CARDS[it.k], c = r.c;
      main.querySelector('#ex-pos').innerHTML = '<span class="lg">Question </span>' + (ex.cur + 1) + ' of ' + ex.items.length;
      var flag = main.querySelector('#ex-flag');
      flag.setAttribute('aria-pressed', String(it.f)); flag.textContent = it.f ? 'Flagged' : 'Flag';
      main.querySelector('#ex-q').innerHTML =
        '<p class="exam-q__meta">Chapter ' + r.ch.number + '</p><p class="exam-q__stem">' + fmt(c.q) + '</p>' +
        '<ul class="choices" role="radiogroup" aria-label="Answer choices">' + it.o.map(function (orig, i) {
          var on = it.a === orig;
          return '<li><button class="choice' + (on ? ' is-picked' : '') + '" type="button" role="radio" aria-checked="' + on + '" data-pick="' + orig + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(c.choices[orig]) + '</span></button></li>';
        }).join('') + '</ul>' +
        '<div class="card-nav"><button class="btn" type="button" id="ex-prev"' + (ex.cur ? '' : ' disabled') + '>Previous</button>' +
        '<button class="btn btn--solid" type="button" id="ex-next">' + (ex.cur < ex.items.length - 1 ? 'Next' : 'Review and submit') + '</button></div>';
      linkTerms(main.querySelector('.exam-q__stem'));
      main.querySelector('#ex-nav').innerHTML = ex.items.map(function (x, i) {
        return '<button type="button" class="qn' + (x.a != null ? ' is-answered' : '') + (x.f ? ' is-flagged' : '') + (i === ex.cur ? ' is-current' : '') + '" data-go="' + i + '" aria-label="Question ' + (i + 1) + (x.a != null ? ', answered' : '') + (x.f ? ', flagged' : '') + '"' + (i === ex.cur ? ' aria-current="step"' : '') + '>' + (i + 1) + '</button>';
      }).join('');
      main.querySelectorAll('[data-pick]').forEach(function (b) {
        b.addEventListener('click', function () { it.a = parseInt(b.getAttribute('data-pick'), 10); save(); draw(); });
      });
      main.querySelectorAll('[data-go]').forEach(function (b) { b.addEventListener('click', function () { ex.cur = parseInt(b.getAttribute('data-go'), 10); save(); draw(); }); });
      main.querySelector('#ex-prev').addEventListener('click', function () { if (ex.cur) { ex.cur--; save(); draw(); } });
      main.querySelector('#ex-next').addEventListener('click', function () { if (ex.cur < ex.items.length - 1) { ex.cur++; save(); draw(); } else submit(false); });
    }
    function tick() {
      var el = main.querySelector('#ex-clock'); if (!el) return;
      if (!ex.limit) { el.textContent = 'Untimed, ' + fmtClock((Date.now() - ex.at) / 1000) + ' elapsed'; return; }
      var rem = remaining();
      el.innerHTML = fmtClock(rem) + '<span class="lg"> left</span>';
      el.classList.toggle('is-low', rem < 60);
      if (rem <= 0) submit(true);
    }
    function submit(expired) {
      if (!expired) {
        var open = ex.items.filter(function (x) { return x.a == null; }).length;
        var flagged = ex.items.filter(function (x) { return x.f; }).length;
        var msg = 'Submit the exam now?' + (open ? '\n' + plural(open, 'question') + ' unanswered.' : '') + (flagged ? '\n' + plural(flagged, 'question') + ' flagged.' : '');
        if (!window.confirm(msg)) return;
      }
      clearInterval(timer);
      var score = 0;
      ex.items.forEach(function (x) { if (x.a === CARDS[x.k].c.answer) score++; else addMistake(x.k, 'exam'); });
      var used = Math.round((Date.now() - ex.at) / 1000);
      if (ex.limit) used = Math.min(used, ex.limit);
      var rec = { id: ex.id, at: ex.at, chapters: ex.chapters, timed: ex.timed, limit: ex.limit, used: used, expired: !!expired, score: score, total: ex.items.length, items: ex.items.map(function (x) { return { k: x.k, o: x.o, a: x.a, f: x.f }; }) };
      var hist = store.get('examHistory', []);
      hist.unshift(rec); store.set('examHistory', hist.slice(0, 20));
      store.del('exam');
      location.hash = '#/exam/results/' + ex.id;
    }
    main.querySelector('#ex-flag').addEventListener('click', function () { var it = ex.items[ex.cur]; it.f = !it.f; save(); draw(); });
    main.querySelector('#ex-submit').addEventListener('click', function () { submit(false); });
    function onKey(e) {
      if (e.target.matches && e.target.matches('input, textarea, select')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var it = ex.items[ex.cur];
      if (/^[a-e]$/i.test(e.key)) { var i = 'abcde'.indexOf(e.key.toLowerCase()); if (i < it.o.length) { e.preventDefault(); it.a = it.o[i]; save(); draw(); } }
      else if (e.key === 'ArrowRight' && ex.cur < ex.items.length - 1) { e.preventDefault(); ex.cur++; save(); draw(); }
      else if (e.key === 'ArrowLeft' && ex.cur > 0) { e.preventDefault(); ex.cur--; save(); draw(); }
      else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); it.f = !it.f; save(); draw(); }
    }
    document.addEventListener('keydown', onKey);
    draw(); tick();
    timer = setInterval(tick, 1000);
    view.cleanup = function () { clearInterval(timer); document.removeEventListener('keydown', onKey); };
  }

  function findExam(id) { var h = store.get('examHistory', []); for (var i = 0; i < h.length; i++) if (h[i].id === id) return h[i]; return null; }

  function renderExamResults(id) {
    var ex = findExam(id);
    if (!ex) { renderMissing(); return; }
    var items = ex.items.filter(function (x) { return CARDS[x.k]; });
    var byTopic = {}, byCh = {};
    items.forEach(function (x) {
      var r = CARDS[x.k], ok = x.a === r.c.answer;
      var t = 'Ch ' + r.ch.number + ', ' + (r.c.tag || 'General');
      (byTopic[t] = byTopic[t] || { n: 0, ok: 0 }).n++; if (ok) byTopic[t].ok++;
      var cKey = 'Chapter ' + r.ch.number + ': ' + (r.ch.short || r.ch.title);
      (byCh[cKey] = byCh[cKey] || { n: 0, ok: 0 }).n++; if (ok) byCh[cKey].ok++;
    });
    function rows(obj, sortWeak) {
      var ks = Object.keys(obj);
      if (sortWeak) ks.sort(function (a, b) { return obj[a].ok / obj[a].n - obj[b].ok / obj[b].n || obj[b].n - obj[a].n; });
      return ks.map(function (k) {
        var v = obj[k], p = pct(v.ok, v.n);
        return '<tr><th scope="row">' + esc(k) + '</th><td>' + v.ok + ' of ' + v.n + '</td><td class="bar-cell"><span class="score-bar"><span style="width:' + p + '%" class="' + (p >= 70 ? 'is-good' : p >= 50 ? 'is-mid' : 'is-low') + '"></span></span><span class="score-pct">' + p + '%</span></td></tr>';
      }).join('');
    }
    var missed = items.filter(function (x) { return x.a !== CARDS[x.k].c.answer; }).length;
    var p = pct(ex.score, ex.total);
    var html = '<div class="wrap page exam-results">' +
      '<header class="page__head"><p class="crumb"><a href="#/exam">Exam mode</a></p><h1>Exam results</h1><p>' + fmtDate(ex.at) + (ex.expired ? '. Time ran out and the exam was submitted automatically.' : '.') + '</p></header>' +
      '<div class="score"><p class="score__big">' + p + '<span>%</span></p><div><p class="score__line"><b>' + ex.score + ' of ' + ex.total + '</b> correct</p><p class="score__line">' + fmtClock(ex.used) + (ex.limit ? ' of ' + fmtClock(ex.limit) : '') + ' used, ' + fmtClock(ex.total ? ex.used / ex.total : 0) + ' per question</p></div></div>' +
      '<div class="empty__actions results-actions">' +
        (missed ? '<a class="btn btn--solid" href="#/exam/review/' + ex.id + '/missed">Review what I missed (' + missed + ')</a>' : '') +
        '<a class="btn' + (missed ? '' : ' btn--solid') + '" href="#/exam/review/' + ex.id + '/all">Review all questions</a>' +
        (missed ? '<a class="btn" href="#/mistakes">Practice mistakes</a>' : '') +
        '<a class="btn" href="#/exam">New exam</a></div>' +
      '<section class="results-sec"><h2>Score by topic</h2><p class="muted">Weakest first.</p><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Topic</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' + rows(byTopic, true) + '</tbody></table></div></section>' +
      '<section class="results-sec"><h2>Score by chapter</h2><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Chapter</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' + rows(byCh, false) + '</tbody></table></div></section>' +
      '</div>';
    setView('exam-results:' + id, html);
    document.title = 'Exam results — K&S Study Companion';
  }

  function renderExamReview(id, which, n) {
    var ex = findExam(id);
    if (!ex) { renderMissing(); return; }
    var items = ex.items.filter(function (x) { return CARDS[x.k]; });
    var list = which === 'all' ? items : items.filter(function (x) { return x.a !== CARDS[x.k].c.answer; });
    if (!list.length) { location.hash = '#/exam/results/' + id; return; }
    n = Math.max(0, Math.min(n || 0, list.length - 1));
    var x = list[n], r = CARDS[x.k], c = r.c;
    var ok = x.a === c.answer;
    var choices = x.o.map(function (orig, i) {
      var cls = orig === c.answer ? ' is-correct' : (orig === x.a ? ' is-wrong' : '');
      var note = orig === c.answer ? '<span class="choice__note">Correct answer</span>' : (orig === x.a ? '<span class="choice__note">Your answer</span>' : '');
      return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(c.choices[orig]) + note + '</span></div></li>';
    }).join('');
    var base = '#/exam/review/' + id + '/' + which + '/';
    var html = '<div class="wrap page exam-review">' +
      '<header class="page__head"><p class="crumb"><a href="#/exam/results/' + id + '">Back to results</a></p><h1>' + (which === 'all' ? 'All questions' : 'Questions you missed') + '</h1></header>' +
      '<div class="exam-q review-q"><p class="exam-q__meta">Question ' + (n + 1) + ' of ' + list.length + ', Chapter ' + r.ch.number + ', ' + esc(c.tag || '') + '</p>' +
        '<p class="verdict ' + (ok ? 'is-right">Correct' : x.a == null ? 'is-wrong">Not answered' : 'is-wrong">Incorrect') + '</p>' +
        '<p class="exam-q__stem">' + fmt(c.q) + '</p><ul class="choices choices--static">' + choices + '</ul><p class="face__why">' + fmt(c.why) + '</p>' +
        '<div class="card-nav"><a class="btn' + (n ? '' : ' is-disabled') + '" ' + (n ? 'href="' + base + (n - 1) + '"' : 'aria-disabled="true"') + '>Previous</a>' +
        '<a class="btn btn--solid" href="' + (n < list.length - 1 ? base + (n + 1) : '#/exam/results/' + id) + '">' + (n < list.length - 1 ? 'Next' : 'Back to results') + '</a></div></div>' +
      '</div>';
    setView('exam-review:' + id + which + n, html);
    linkTerms(main.querySelector('.review-q'), { skip: '.choice, .verdict, .exam-q__meta' });
    document.title = 'Exam review — K&S Study Companion';
  }

  /* ---------- glossary engine ----------
     Builds one regular expression from every glossary term so any rendered text can link terms
     to a tap-to-define popover. Very common words are left unlinked so pages stay readable. */
  var GL = null;
  var GL_STOP = ['affect', 'anxiety', 'attention', 'behavior', 'bereavement', 'cognition', 'coma', 'confusion', 'consciousness',
    'convulsion', 'delirium', 'delusion', 'dementia', 'depression', 'emotion', 'fantasy', 'fatigue', 'fear', 'grief', 'guilt',
    'hallucination', 'insight', 'insomnia', 'intelligence', 'judgment', 'mania', 'memory', 'mood', 'orientation', 'panic',
    'perception', 'phobia', 'psychosis', 'psychotic', 'recall', 'rigidity', 'ritual', 'seizure', 'shame', 'tension', 'trance',
    'tremor', 'unconscious', 'agitation', 'anorexia', 'addiction', 'euphoria', 'irritability', 'elation', 'intoxication',
    'hypomania', 'mental disorder', 'suicidal ideation', 'introspection', 'behavior', 'excited', 'detachment', 'mimicry',
    'pantomime', 'twirling', 'denial', 'projection', 'regression', 'condensation', 'substitution', 'displacement', 'automatism',
    'hypnosis', 'stupor', 'mutism', 'aggression', 'rumination', 'cathexis', 'mourning', 'dread', 'drowsiness', 'apathy', 'anergia',
    'grandiosity', 'disinhibition', 'distractibility', 'impulse control', 'mood swings', 'asthenia', 'chorea', 'malingering',
    'manipulation', 'paranoia', 'obsession', 'compulsion', 'akathisia', 'dystonia', 'dyskinesia', 'catalepsy', 'negativism',
    'irritable mood', 'elevated mood', 'expansive mood', 'emotional lability', 'labile mood', 'euthymia', 'melancholia'];
  function buildGloss() {
    var list = (KS.glossary || []).map(function (g) { return { t: g[0], d: g[1], src: g[2] || null, slug: slug(g[0]) }; });
    list.sort(function (a, b) { return a.t.localeCompare(b.t, undefined, { sensitivity: 'base' }); });
    var map = {};
    list.forEach(function (e) { map[e.t.toLowerCase()] = e; });
    var aliases = KS.glossaryAliases || {};
    var stop = {};
    GL_STOP.forEach(function (w) { stop[w] = 1; });
    var forms = [];
    list.forEach(function (e) { if (!stop[e.t.toLowerCase()]) forms.push(e.t.toLowerCase()); });
    Object.keys(aliases).forEach(function (a) { if (map[aliases[a]]) forms.push(a.toLowerCase()); });
    forms.sort(function (a, b) { return b.length - a.length; });
    var alts = forms.map(function (f) { return escRe(f).replace(/\s+/g, '\\s+') + '(?:s|es)?'; }).join('|');
    GL = { list: list, map: map, aliases: aliases, re: alts ? new RegExp('(^|[^\\p{L}\\p{N}])(' + alts + ')(?![\\p{L}\\p{N}])', 'giu') : null };
  }
  function glossLookup(raw) {
    var s = raw.toLowerCase().replace(/\s+/g, ' ');
    var tries = [s, s.replace(/es$/, ''), s.replace(/s$/, ''), s.replace(/ies$/, 'y')];
    for (var i = 0; i < tries.length; i++) {
      var t = tries[i];
      if (GL.map[t]) return GL.map[t];
      if (GL.aliases[t] && GL.map[GL.aliases[t]]) return GL.map[GL.aliases[t]];
    }
    return null;
  }
  function glossOn() { return store.get('glLinks', true); }
  var GL_SKIP = 'a, button, mark, kbd, code, h1, h2, h3, h4, .gl, .choice__key, .kind, .face__tag, .g-n, .toc, caption';
  function linkTerms(root, opts) {
    if (!root || !glossOn()) return;
    if (!GL) buildGloss();
    if (!GL.re) return;
    var skip = GL_SKIP + (opts && opts.skip ? ', ' + opts.skip : '');
    var seen = {};
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.length < 4) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p || p.closest(skip)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var text = node.nodeValue, re = GL.re, m, last = 0, frag = null;
      re.lastIndex = 0;
      while ((m = re.exec(text))) {
        var start = m.index + m[1].length, word = m[2];
        var e = glossLookup(word);
        if (!e || seen[e.slug]) continue;
        seen[e.slug] = 1;
        frag = frag || document.createDocumentFragment();
        frag.appendChild(document.createTextNode(text.slice(last, start)));
        var sp = document.createElement('span');
        sp.className = 'gl'; sp.textContent = word;
        sp.setAttribute('role', 'button'); sp.setAttribute('tabindex', '0');
        sp.setAttribute('data-gl', e.slug);
        sp.setAttribute('aria-label', word + ', show definition');
        frag.appendChild(sp);
        last = start + word.length;
      }
      if (frag) { frag.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(frag, node); }
    });
  }
  function glossBySlug(s) { if (!GL) buildGloss(); for (var i = 0; i < GL.list.length; i++) if (GL.list[i].slug === s) return GL.list[i]; return null; }

  var glPop = null, glAnchor = null;
  function closeGloss() {
    if (glPop) glPop.hidden = true;
    if (glAnchor) { glAnchor.setAttribute('aria-expanded', 'false'); glAnchor = null; }
  }
  function openGloss(el) {
    var e = glossBySlug(el.getAttribute('data-gl'));
    if (!e) return;
    if (!glPop) {
      glPop = document.createElement('div');
      glPop.id = 'glpop'; glPop.className = 'glpop'; glPop.setAttribute('role', 'dialog'); glPop.hidden = true;
      document.body.appendChild(glPop);
      glPop.addEventListener('click', function (ev) {
        if (ev.target.closest('[data-close]')) { var a = glAnchor; closeGloss(); if (a) a.focus(); }
        else if (ev.target.closest('a')) closeGloss();
      });
    }
    if (glAnchor === el && !glPop.hidden) { closeGloss(); return; }
    closeGloss();
    glAnchor = el; el.setAttribute('aria-expanded', 'true');
    glPop.setAttribute('aria-label', 'Definition of ' + e.t);
    glPop.innerHTML = '<div class="glpop__head"><p class="glpop__t">' + esc(e.t) + '</p><button class="glpop__x" type="button" data-close aria-label="Close definition">\u00d7</button></div>' +
      '<p class="glpop__d">' + esc(e.d) + '</p><p class="glpop__foot"><span>' + (e.src ? 'Defined in ' + esc(e.src.replace('Ch ', 'Chapter ')) : 'Book glossary') + '</span><a href="#/glossary/' + e.slug + '">Open in glossary</a></p>';
    glPop.hidden = false;
    var r = el.getBoundingClientRect();
    var w = Math.min(340, window.innerWidth - 24);
    glPop.style.width = w + 'px';
    var left = Math.max(12, Math.min(r.left + window.pageXOffset, window.pageXOffset + window.innerWidth - w - 12));
    var top = r.bottom + window.pageYOffset + 8;
    var ph = glPop.offsetHeight;
    if (r.bottom + ph + 16 > window.innerHeight && r.top - ph - 8 > headerH()) top = r.top + window.pageYOffset - ph - 8;
    glPop.style.left = left + 'px'; glPop.style.top = top + 'px';
  }
  document.addEventListener('click', function (ev) {
    var g = ev.target.closest && ev.target.closest('.gl');
    if (g) { ev.preventDefault(); ev.stopPropagation(); openGloss(g); return; }
    if (glPop && !glPop.hidden && !ev.target.closest('#glpop')) closeGloss();
  }, true);
  document.addEventListener('keydown', function (ev) {
    var g = ev.target.closest && ev.target.closest('.gl');
    if (g && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); ev.stopPropagation(); openGloss(g); return; }
    if (ev.key === 'Escape' && glPop && !glPop.hidden) { var a = glAnchor; closeGloss(); if (a) a.focus(); }
  }, true);
  window.addEventListener('resize', closeGloss);

  /* ---------- glossary page ---------- */
  function renderGlossary(target) {
    if (!GL) buildGloss();
    var letters = {};
    GL.list.forEach(function (e) { var L = e.t.charAt(0).toUpperCase(); (letters[L] = letters[L] || []).push(e); });
    var keys = Object.keys(letters).sort();
    var body = keys.map(function (L) {
      return '<section class="gloss__group" id="gl-' + L + '" data-letter="' + L + '"><h2>' + L + '</h2><dl>' + letters[L].map(function (e) {
        return '<div class="gloss__entry" id="g-' + e.slug + '" data-t="' + esc(e.t.toLowerCase()) + '"><dt>' + esc(e.t) + (e.src ? ' <span class="gloss__src">' + esc(e.src) + '</span>' : '') + '</dt><dd>' + esc(e.d) + '</dd></div>';
      }).join('') + '</dl></section>';
    }).join('');
    var bookN = GL.list.filter(function (e) { return !e.src; }).length;
    var html = '<div class="wrap page gloss">' +
      '<header class="page__head"><h1>Glossary of signs and symptoms</h1><p>' + bookN + ' terms from the book’s glossary, plus ' + (GL.list.length - bookN) + ' terms defined within the chapters (tagged with their chapter). Definitions are written in this app’s own words. Dotted terms anywhere in the app open these definitions when tapped.</p></header>' +
      '<div class="gloss__tools"><label class="gloss__search"><span class="sr-only">Filter terms</span><input type="search" id="gl-q" placeholder="Filter terms, e.g. verbigeration" autocomplete="off" spellcheck="false"></label>' +
        '<label class="switch"><input type="checkbox" id="gl-links"' + (glossOn() ? ' checked' : '') + '> Tap-to-define in text</label></div>' +
      '<nav class="az" aria-label="Jump to letter">' + keys.map(function (L) { return '<a href="#gl-' + L + '" data-az="' + L + '">' + L + '</a>'; }).join('') + '</nav>' +
      '<p class="gloss__count" id="gl-count" aria-live="polite"></p>' +
      '<div class="gloss__body">' + body + '</div></div>';
    var vkey = 'glossary';
    if (view.key !== vkey) {
      setView(vkey, html);
      document.title = 'Glossary — K&S Study Companion';
      var q = main.querySelector('#gl-q'), count = main.querySelector('#gl-count');
      function filter() {
        var v = q.value.trim().toLowerCase(), shown = 0;
        main.querySelectorAll('.gloss__entry').forEach(function (el) {
          var hit = !v || el.getAttribute('data-t').indexOf(v) > -1 || (v.length > 3 && el.textContent.toLowerCase().indexOf(v) > -1);
          el.hidden = !hit; if (hit) shown++;
        });
        main.querySelectorAll('.gloss__group').forEach(function (g) { g.hidden = !g.querySelector('.gloss__entry:not([hidden])'); });
        count.textContent = v ? plural(shown, 'term') + ' match \u201c' + q.value.trim() + '\u201d' : plural(GL.list.length, 'term');
      }
      q.addEventListener('input', filter); filter();
      main.querySelector('#gl-links').addEventListener('change', function (e) { store.set('glLinks', e.target.checked); });
      main.querySelectorAll('[data-az]').forEach(function (a) {
        a.addEventListener('click', function (ev) { ev.preventDefault(); if (q.value) { q.value = ''; filter(); } var el = document.getElementById('gl-' + a.getAttribute('data-az')); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - headerH() - 12, behavior: reduceMotion() ? 'auto' : 'smooth' }); });
      });
    }
    if (target) {
      var el = document.getElementById('g-' + target);
      if (el) {
        var qi = main.querySelector('#gl-q'); if (qi.value) { qi.value = ''; qi.dispatchEvent(new Event('input')); }
        setTimeout(function () {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - headerH() - 24, behavior: 'auto' });
          el.classList.add('is-flash'); setTimeout(function () { el.classList.remove('is-flash'); }, 1800);
        }, 30);
      }
    }
  }

  /* ---------- diagnostic helpers ---------- */
  function helperBy(id) { var h = KS.helpers || []; for (var i = 0; i < h.length; i++) if (h[i].id === id) return h[i]; return null; }
  function renderHelpers() {
    var hs = KS.helpers || [];
    var html = '<div class="wrap page"><header class="page__head"><h1>Diagnostic helpers</h1><p>Step-by-step decision aids built from the chapters. Each one asks a few questions and shows the reasoning behind the likely diagnosis.</p></header>' +
      '<ul class="helper-list">' + hs.map(function (h) {
        var ch = chapter(h.chapter);
        return '<li><a class="tool" href="#/helpers/' + h.id + '"><span class="tool__name">' + esc(h.title) + '</span><span class="tool__meta">' + esc(h.summary) + '</span>' + (ch ? '<span class="tool__ch">Chapter ' + ch.number + '</span>' : '') + '</a></li>';
      }).join('') + '</ul></div>';
    setView('helpers', html);
    document.title = 'Diagnostic helpers — K&S Study Companion';
  }
  function renderHelper(id) {
    var h = helperBy(id);
    if (!h) return renderMissing();
    var path = [];   // [{node, opt}]
    var html = '<div class="wrap page helper"><header class="page__head"><p class="crumb"><a href="#/helpers">Diagnostic helpers</a></p><h1>' + esc(h.title) + '</h1><p>' + esc(h.summary) + '</p></header>' +
      '<div class="helper__grid"><div id="hp-main" aria-live="polite"></div><aside class="trail" aria-label="Your reasoning"><h2>Reasoning so far</h2><ol id="hp-trail"></ol><p class="trail__empty" id="hp-empty">Your answers and what they rule in or out will appear here.</p></aside></div>' +
      '<p class="helper__caution">' + esc(h.caution) + '</p></div>';
    setView('helper:' + id, html);
    document.title = h.title + ' — K&S Study Companion';
    var area = main.querySelector('#hp-main'), trail = main.querySelector('#hp-trail'), empty = main.querySelector('#hp-empty');
    function current() { if (!path.length) return h.start; return path[path.length - 1].to; }
    function drawTrail() {
      trail.innerHTML = path.map(function (s, i) {
        return '<li><p class="trail__q">' + esc(h.nodes[s.node].q) + '</p><p class="trail__a">' + esc(s.label) + '</p><p class="trail__note">' + esc(s.note) + '</p>' +
          '<button class="link-btn" type="button" data-back="' + i + '">Change this answer</button></li>';
      }).join('');
      empty.hidden = !!path.length;
      trail.querySelectorAll('[data-back]').forEach(function (b) { b.addEventListener('click', function () { path = path.slice(0, parseInt(b.getAttribute('data-back'), 10)); draw(); }); });
    }
    function draw() {
      drawTrail();
      var cur = current();
      var nav = '<div class="helper__nav">' + (path.length ? '<button class="btn" type="button" id="hp-back">Back</button><button class="link-btn" type="button" id="hp-reset">Start over</button>' : '') + '</div>';
      if (cur.indexOf('r:') === 0) {
        var res = h.results[cur.slice(2)];
        var link = res.link ? '<a class="btn btn--solid" href="#/c/' + res.link.ch + '/guide/' + res.link.sec + '">Read: ' + esc(res.link.label) + '</a>' : '';
        area.innerHTML = '<div class="result-card"><p class="result-card__eyebrow">' + esc(res.label || 'Most likely') + '</p><h2>' + esc(res.dx) + '</h2><p class="result-card__line">' + esc(res.line) + '</p>' +
          '<h3>Why</h3><ul class="result-card__why">' + path.map(function (s) { return '<li>' + esc(s.note) + '</li>'; }).join('') + '</ul>' +
          '<h3>Next steps and points from the chapter</h3><ul>' + res.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
          '<div class="empty__actions">' + link + (res.also ? '<a class="btn" href="' + esc(res.also.href) + '">' + esc(res.also.label) + '</a>' : '') + '<a class="btn" href="#/c/' + h.chapter + '/cards/cases">Practice clinical cases</a></div></div>' + nav;
        linkTerms(area.querySelector('.result-card'), { skip: 'h2' });
      } else {
        var node = h.nodes[cur];
        area.innerHTML = '<div class="q-card"><p class="q-card__step">Question ' + (path.length + 1) + '</p><h2>' + esc(node.q) + '</h2>' + (node.help ? '<p class="q-card__help">' + esc(node.help) + '</p>' : '') +
          '<ul class="opts">' + node.options.map(function (o, i) { return '<li><button class="opt" type="button" data-opt="' + i + '">' + esc(o.label) + '</button></li>'; }).join('') + '</ul></div>' + nav;
        linkTerms(area.querySelector('.q-card__help'));
        area.querySelectorAll('[data-opt]').forEach(function (b) {
          b.addEventListener('click', function () {
            var o = node.options[parseInt(b.getAttribute('data-opt'), 10)];
            path.push({ node: cur, label: o.label, note: o.note, to: o.to });
            draw();
            var f = area.querySelector('.opt, .result-card h2'); if (f && f.focus) { if (f.tagName === 'H2') f.setAttribute('tabindex', '-1'); f.focus({ preventScroll: true }); }
            if (window.innerWidth < 900) window.scrollTo({ top: area.getBoundingClientRect().top + window.pageYOffset - headerH() - 12, behavior: reduceMotion() ? 'auto' : 'smooth' });
          });
        });
      }
      var bk = area.querySelector('#hp-back'); if (bk) bk.addEventListener('click', function () { path.pop(); draw(); });
      var rs = area.querySelector('#hp-reset'); if (rs) rs.addEventListener('click', function () { path = []; draw(); });
    }
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
    foundations: { label: 'Foundations card', css: 'found' },
    glossary: { label: 'Glossary', css: 'gloss' }
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
    if (!GL) buildGloss();
    GL.list.forEach(function (g) { INDEX.push({ ch: null, kind: 'glossary', title: g.t, text: g.d, src: g.src, href: '#/glossary/' + g.slug }); });
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
      if (e.kind === 'glossary' && e.lt === phrase) score += 10;
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
  function kindGroup(k) { return k === 'guide' ? 'guide' : k === 'hy' ? 'hy' : k === 'glossary' ? 'glossary' : 'cards'; }
  function whereLabel(e, short) { return e.ch ? (short ? 'Ch ' : 'Chapter ') + e.ch.number : (e.src ? 'From ' + e.src : 'Book glossary'); }

  function renderSearch(q) {
    var res = runSearch(q);
    var ts = terms(q);
    var filter = 'all';
    var counts = { all: res.length, guide: 0, hy: 0, cards: 0, glossary: 0 };
    res.forEach(function (e) { counts[kindGroup(e.kind)]++; });
    var html = '<div class="wrap search-page"><h1>' + (q ? 'Results for \u201c' + esc(q) + '\u201d' : 'Search') + '</h1>' +
      '<p class="search-page__sub">' + (q ? res.length + ' matches across every chapter in the app' : 'Type in the search box above to search every study guide, high-yield list, flashcard and glossary term.') + '</p>' +
      (q && res.length ? '<div class="filters" role="group" aria-label="Filter results">' +
        [['all', 'All'], ['guide', 'Study guide'], ['hy', 'High yield'], ['cards', 'Flashcards'], ['glossary', 'Glossary']].filter(function (f) { return f[0] === 'all' || counts[f[0]]; }).map(function (f) {
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
        return '<li class="result"><a href="' + e.href + '"><div class="result__meta"><span class="kind c-' + k.css + '">' + k.label + '</span><span>' + whereLabel(e) + '</span></div>' +
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
        '<span class="suggest__meta"><span class="kind c-' + k.css + '">' + k.label + '</span><span>' + whereLabel(e, true) + '</span><span>' + esc(e.title) + '</span></span>' +
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
  function setTopVar() { document.documentElement.style.setProperty('--top', headerH() + 'px'); }
  window.addEventListener('resize', setTopVar);
  setTopVar();
  window.addEventListener('hashchange', route);
  loadAll().then(function () {
    indexCards();
    updateNavBadges();
    route();
    setTopVar();
  }).catch(function (err) {
    main.innerHTML = '<div class="wrap empty" style="margin-top:48px"><h2>Chapter data did not load</h2><p>' + esc(err.message) + '. Check that every file listed in data/chapters.js exists in the repository.</p></div>';
  });

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
