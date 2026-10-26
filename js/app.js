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
  function rng(seed) {
    var a = (seed >>> 0) || 1;
    return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function shuffleWith(a, r) { for (var j = a.length - 1; j > 0; j--) { var k = Math.floor(r() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; } return a; }
  function reduceMotion() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  /* ---------- read aloud ----------
     Uses the device's speech synthesis. Text is spoken in short chunks (long utterances stall in some browsers),
     the block being read is highlighted, and a small player gives pause, back, skip and stop. */
  var TTS = (function () {
    var ok = typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance === 'function';
    var items = [], idx = 0, chunks = [], ci = 0, gen = 0, playing = false, bar = null, title = '';
    function rate() { var r = parseFloat(store.get('ttsRate', '1')); return r >= 0.5 && r <= 2 ? r : 1; }
    function voice() {
      var vs = (window.speechSynthesis.getVoices && window.speechSynthesis.getVoices()) || [], best = null;
      vs.forEach(function (v) {
        if (!/^en/i.test(v.lang)) return;
        var score = (v.lang === 'en-US' ? 2 : 0) + (v.localService ? 1 : 0) + (v['default'] ? 1 : 0) + (/natural|enhanced|premium|neural/i.test(v.name) ? 2 : 0);
        if (!best || score > best.s) best = { v: v, s: score };
      });
      return best && best.v;
    }
    function split(t) {
      t = String(t || '').replace(/\s+/g, ' ').trim();
      if (!t) return [];
      var parts = t.match(/[^.!?;]+[.!?;]*\s*/g) || [t], out = [], buf = '';
      parts.forEach(function (p) {
        while (p.length > 240) { var cut = p.lastIndexOf(', ', 220); cut = cut > 60 ? cut + 1 : 220; out.push((buf + p.slice(0, cut)).trim()); buf = ''; p = p.slice(cut); }
        if ((buf + p).length > 240) { out.push(buf.trim()); buf = p; } else buf += p;
      });
      if (buf.trim()) out.push(buf.trim());
      return out;
    }
    function cancel() { gen++; try { window.speechSynthesis.cancel(); } catch (e) {} }
    function mark() {
      items.forEach(function (it, i) { if (it.el) it.el.classList.toggle('is-speaking', i === idx); });
      var it = items[idx];
      if (it && it.el && playing) {
        var r = it.el.getBoundingClientRect(), top = (document.querySelector('.topbar') || { offsetHeight: 64 }).offsetHeight;
        if (r.top < top + 8 || r.top > window.innerHeight - 160) window.scrollTo({ top: r.top + window.pageYOffset - top - 24, behavior: reduceMotion() ? 'auto' : 'smooth' });
      }
      paint();
    }
    function paint() {
      if (!bar) return;
      var it = items[idx];
      bar.querySelector('.tts__label').textContent = (title ? title + ': ' : '') + (it && it.label ? it.label : '');
      var pb = bar.querySelector('[data-tts=play]');
      pb.setAttribute('aria-label', playing ? 'Pause' : 'Resume'); pb.title = playing ? 'Pause' : 'Resume';
      pb.innerHTML = playing ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor"/></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';
      bar.querySelector('[data-tts=back]').disabled = idx <= 0;
      bar.querySelector('[data-tts=next]').disabled = idx >= items.length - 1;
    }
    function speakNext() {
      if (!playing) return;
      while (ci >= chunks.length) {
        idx++; ci = 0;
        if (idx >= items.length) { stop(); toast('Finished reading.'); return; }
        chunks = split(items[idx].text); mark();
      }
      var my = ++gen, u = new SpeechSynthesisUtterance(chunks[ci]), v = voice();
      u.rate = rate(); u.lang = v ? v.lang : 'en-US'; if (v) u.voice = v;
      u.onend = function () { if (my !== gen) return; ci++; speakNext(); };
      u.onerror = function (e) { if (my !== gen) return; if (e && (e.error === 'interrupted' || e.error === 'canceled')) return; ci++; speakNext(); };
      window.speechSynthesis.speak(u);
    }
    function showBar() {
      if (!bar) {
        bar = document.createElement('div');
        bar.className = 'tts'; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Read aloud');
        bar.innerHTML = '<span class="tts__label" aria-live="polite"></span><div class="tts__btns">' +
          '<button type="button" data-tts="back" aria-label="Back one paragraph" title="Back"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2v14H6zM20 5v14L9 12z" fill="currentColor"/></svg></button>' +
          '<button type="button" data-tts="play" class="tts__play"></button>' +
          '<button type="button" data-tts="next" aria-label="Skip to next paragraph" title="Skip"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 5h2v14h-2zM4 5v14l11-7z" fill="currentColor"/></svg></button>' +
          '<button type="button" data-tts="stop" aria-label="Stop reading" title="Stop"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button></div>';
        bar.addEventListener('click', function (e) {
          var b = e.target.closest('[data-tts]'); if (!b) return;
          var a = b.getAttribute('data-tts');
          if (a === 'play') { if (playing) pause(); else resume(); }
          else if (a === 'back') jump(-1);
          else if (a === 'next') jump(1);
          else stop();
        });
        document.body.appendChild(bar);
      }
      bar.hidden = false; document.body.classList.add('tts-on');
    }
    function start(list, t) {
      if (!ok) return;
      list = list.filter(function (x) { return x.text && x.text.trim(); });
      if (!list.length) return;
      cancel(); clearMarks();
      items = list; idx = 0; ci = 0; chunks = split(items[0].text); title = t || ''; playing = true;
      showBar(); mark(); speakNext();
    }
    function clearMarks() { items.forEach(function (it) { if (it.el) it.el.classList.remove('is-speaking'); }); }
    function pause() { playing = false; cancel(); paint(); }
    function resume() { if (!items.length) return; playing = true; paint(); speakNext(); }
    function jump(d) {
      var n = idx + d; if (n < 0 || n >= items.length) return;
      cancel(); idx = n; ci = 0; chunks = split(items[idx].text); playing = true; mark(); speakNext();
    }
    function stop() {
      var had = items.length || playing;
      playing = false; cancel(); clearMarks(); items = []; idx = 0;
      if (bar) bar.hidden = true;
      document.body.classList.remove('tts-on');
      return had;
    }
    function rateChanged() { if (playing) { cancel(); speakNext(); } }
    if (ok && window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener('voiceschanged', function () {});
    return { ok: ok, start: start, stop: stop, rateChanged: rateChanged, active: function () { return items.length > 0; } };
  })();

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
    applyLearning(ch);
    return ch;
  }
  /* Learning layer (data/chNN/learning.js): wrong-answer explanations, board domains and
     visual summaries are merged into the chapter once, when it is first used. */
  function findSection(ch, secId) {
    var hit = null;
    (ch.guide && ch.guide.parts || []).forEach(function (pt) { pt.sections.forEach(function (s) { if (s.id === secId) hit = s; }); });
    return hit;
  }
  function applyLearning(ch) {
    var L = ch.learning;
    if (!L) return;
    var wn = L.whyNot || {}, dm = L.domains || {};
    (ch.cases || []).forEach(function (c) { if (wn[c.id]) c.whyNot = wn[c.id]; if (dm[c.id]) c.domain = dm[c.id]; });
    (L.visuals || []).forEach(function (v) {
      var s = findSection(ch, v.sec);
      if (!s) return;
      var at = v.at == null ? s.blocks.length : Math.min(v.at, s.blocks.length);
      s.blocks.splice(at, 0, v.block);
    });
  }
  function checksFor(ch, secId) { return (ch.learning && ch.learning.checks && ch.learning.checks[secId]) || []; }

  /* ABPN Psychiatry certification content outline (2025), Dimension 2: competencies. */
  var DOMAINS = [
    ['A', 'Neuroscience and mechanisms of disease'], ['B', 'Behavioral and social sciences'], ['C', 'Clinical aspects'],
    ['D', 'Diagnostic procedures'], ['E', 'Treatment'], ['F', 'Interpersonal and communication skills'],
    ['G', 'Professionalism, ethics and the law'], ['H', 'Practice-based learning'], ['I', 'Systems-based practice']
  ];
  function domainName(k) { for (var i = 0; i < DOMAINS.length; i++) if (DOMAINS[i][0] === k) return DOMAINS[i][1]; return k; }
  function caseDomain(c) {
    if (c.domain) return c.domain;
    if (c._dom) return c._dom;
    var q = String(c.q || '').toLowerCase(), d = 'C';
    if (/(confidential|informed consent|\bconsent\b|decision-making capacity|\bcapacity\b|tarasoff|duty to (warn|protect)|commitment|malpractice|\blegal|ethic|boundar|guardian|testif|\bcourt\b|competen|involuntar)/.test(q)) d = 'G';
    else if (/(best response|what should (the |you )?(psychiatrist |physician |clinician |resident |doctor )?say|how should (the |you )?(psychiatrist |physician |clinician |resident )?respond|best way to (tell|explain|respond)|what do you tell|how do you (tell|explain))/.test(q)) d = 'F';
    else if (/(most likely diagnosis|which (disorder|diagnosis|condition)|diagnosis\?|best explains|most likely cause|what is (she|he|this) most likely)/.test(q)) d = 'C';
    else if (/(\btests?\b|laborator|\blabs?\b|\beeg\b|\bmri\b|\bct\b|imaging|\bpet\b|spect|screen|\bscales?\b|serum level|blood level|plasma level|assessment|examination|polysomnogra|lumbar puncture|\burine\b|\becg\b|\bekg\b|work-?up|\bmmse\b|\bmoca\b|questionnaire|inventory)/.test(q)) d = 'D';
    else if (/(\btreat|therap|\bdrugs?\b|medication|\bdoses?\b|dosing|prescrib|manage|first[- ]line|next step|intervention|augment|\bswitch|\bstart|taper|discontinu|\bect\b|\btms\b|antidepressant|antipsychotic|side effect|adverse|interaction|toxicity|withdrawal|overdose|antidote|psychotherap|counsel)/.test(q)) d = 'E';
    else if (/(receptor|mechanism|neurotransmitter|\bgenes?\b|genetic|chromosom|pathophysiolog|lesion|neuroanatom|\blobe\b|nucleus|cortex|pathway|neuropatholog|protein|allele|heritab|twin)/.test(q)) d = 'A';
    else if (/(piaget|erikson|freud|attachment|developmental stage|stage of development|sensitivity|specificity|study design|\bbias\b|culture|cultural|defense mechanism|\bdefenses?\b|learning theory|conditioning)/.test(q)) d = 'B';
    return (c._dom = d);
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
    return { i: i, e: Math.round(e * 100) / 100, r: r, l: l, n: srsTries(s) + 1, d: today() + i };
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

  /* ---------- bookmarks ---------- */
  var BOOKMARKS = store.get('bookmarks', {});
  var RIBBON = '<svg viewBox="0 0 20 28" aria-hidden="true" focusable="false"><path d="M3.5 1.5h13v24.2l-6.5-5.4-6.5 5.4z"/></svg>';
  function saveBookmarks() { store.set('bookmarks', BOOKMARKS); }
  function isBookmarked(chId, secId) { return !!BOOKMARKS[chId + ':' + secId]; }
  function toggleBookmark(chId, secId) {
    var k = chId + ':' + secId;
    if (BOOKMARKS[k]) delete BOOKMARKS[k]; else BOOKMARKS[k] = { t: Date.now() };
    saveBookmarks();
    return !!BOOKMARKS[k];
  }
  /* Section lookup for one chapter: id -> { s, n, part, pi } */
  function sectionIndex(ch) {
    var map = {}, n = 0;
    (ch.guide && ch.guide.parts || []).forEach(function (pt, pi) {
      pt.sections.forEach(function (s) { n++; map[s.id] = { s: s, n: n, part: pt.title, pi: pi }; });
    });
    return map;
  }
  /* Saved bookmarks that still point at a real section, in book order. */
  function bookmarkList() {
    var out = [], idx = {};
    Object.keys(BOOKMARKS).forEach(function (k) {
      var i = k.indexOf(':'), ch = chapter(k.slice(0, i));
      if (!ch) return;
      var m = idx[ch.id] || (idx[ch.id] = sectionIndex(ch)), hit = m[k.slice(i + 1)];
      if (hit) out.push({ key: k, ch: ch, sec: hit.s, n: hit.n, part: hit.part, pi: hit.pi, t: BOOKMARKS[k].t });
    });
    return out.sort(function (a, b) { return a.ch.number - b.ch.number || a.n - b.n; });
  }
  function ribbonBtn(chId, s) {
    var on = isBookmarked(chId, s.id);
    return '<button class="ribbon' + (on ? ' is-on' : '') + '" type="button" data-bm="' + s.id + '" aria-pressed="' + on + '" aria-label="Bookmark this section: ' + esc(s.title) + '" title="' + (on ? 'Remove bookmark' : 'Bookmark this section') + '">' + RIBBON + '</button>';
  }
  function setRibbon(btn, on) {
    btn.classList.toggle('is-on', on);
    btn.setAttribute('aria-pressed', String(on));
    btn.title = on ? 'Remove bookmark' : 'Bookmark this section';
  }
  var toastTimer = null;
  function toast(html) {
    var t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.innerHTML = html;
    t.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('is-on'); }, 2600);
  }

  /* ---------- router ---------- */
  var view = { key: null, focus: null, cleanup: null };

  function parts() {
    var h = location.hash.replace(/^#\/?/, '');
    return h.split('/').filter(Boolean).map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
  }

  function setView(key, html, focusFn, opts) {
    if (view.cleanup) { view.cleanup(); view.cleanup = null; }
    if (TTS && TTS.ok) TTS.stop();
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
      case 'weak': return renderWeak();
      case 'bookmarks': return renderBookmarks();
      case 'exam':
        if (p[1] === 'run') return renderExamRun();
        if (p[1] === 'results') return renderExamResults(p[2]);
        if (p[1] === 'review') return renderExamReview(p[2], p[3] || 'missed', parseInt(p[4] || '0', 10));
        return renderExamSetup();
      case 'glossary': return renderGlossary(p[1]);
      case 'drugs': return DRUG ? DRUG.route(p) : renderMissing();
      case 'updates': return DRUG ? DRUG.renderUpdates() : renderMissing();
      case 'helpers': return p[1] ? renderHelper(p[1]) : renderHelpers();
      case 'teach':
        if (p[1] === 'run') return renderTeachRun();
        if (p[1] === 'summary') return renderTeachSummary(p[2]);
        if (p[1] === 'handout') return renderTeachHandout(p[2], p[3] === 'all');
        if (p[1] === 'presenter') return renderTeachPresenter();
        return renderTeachSetup();
      case 'progress': return renderProgress();
      case 'whats-new': return renderNews();
      case 'all-highyield': return renderAllHighYield();
      case 'quiz': return renderQuiz(p);
      case 'compare': return p[1] === 'ch' ? renderCompareList(p[2]) : p[1] ? renderCompare(p[1]) : renderCompareList();
      case 'c':
        var ch = chapter(p[1]);
        if (!ch) return renderMissing();
        var mode = p[2] || 'guide';
        if (mode === 'handout') return renderHandout(ch);
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
    if (CARD_LIST.length) { var s = dueSummary('all'); var n = s.due + s.newToday; document.querySelectorAll('[data-badge="review"]').forEach(function (b) { b.textContent = n; b.hidden = !n; }); }
    var nw = document.querySelector('[data-badge="news"]');
    if (nw && KS.changelog) { var u = unseenNews().length; nw.textContent = u; nw.hidden = !u; }
    var m = document.querySelector('[data-badge="mistakes"]');
    if (m) { var k = mistakeKeys().length; m.textContent = k; m.hidden = !k; }
  }

  /* ---------- home ---------- */
  function heroArt() {
    return '<img class="refract__art" src="icons/home-brain.png" width="160" height="160" alt="" decoding="async">';
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
          '<a class="tool" href="#/weak"><span class="tool__name">Weak topics</span><span class="tool__meta">Your exam answers and flashcard ratings, pooled by topic, weakest first</span></a>' +
          '<a class="tool" href="#/mistakes"><span class="tool__name">Mistakes</span><span class="tool__meta">' + (mk ? plural(mk, 'case') + ' to revisit' : 'Cases you miss collect here') + '</span></a>' +
          '<a class="tool" href="#/glossary"><span class="tool__name">Glossary</span><span class="tool__meta">' + (KS.glossary || []).length + ' signs and symptoms</span></a>' +
          '<a class="tool" href="#/helpers"><span class="tool__name">Diagnostic helper</span><span class="tool__meta">Medical workup and developmental, cognitive, substance, psychotic, mood, anxiety, OCD-related, trauma-related, dissociative, somatic symptom, eating and elimination disorders, step by step</span></a>' +
          '<a class="tool" href="#/drugs"><span class="tool__name">Drugs</span><span class="tool__meta">' + ((KS.drugs || []).length ? (KS.drugs || []).length + ' drugs by class: mechanism, dosing, side effects, monitoring; compare and drill' : 'Drug reference by class') + '</span></a>' +
          '<a class="tool" href="#/compare"><span class="tool__name">Look-alikes</span><span class="tool__meta">' + ((KS.lookalikes || []).length ? plural((KS.lookalikes || []).length, 'side-by-side comparison') + ' of conditions that are easy to confuse' : 'Side-by-side comparisons of conditions that are easy to confuse') + '</span></a>' +
          '<a class="tool" href="#/bookmarks"><span class="tool__name">Bookmarks</span><span class="tool__meta">' + (bookmarkList().length ? plural(bookmarkList().length, 'saved section') + ' across the study guides' : 'Tap the ribbon on any study-guide section to save it here') + '</span></a>' +
        '</div>' +
      '</section>';

    var unseen = unseenNews(), upd = updatedChapters();
    var newsStrip = unseen.length
      ? '<div class="wrap news-strip-wrap"><a class="news-strip" href="#/whats-new"><span class="news-strip__tag">New</span><span class="news-strip__text">' + esc(unseen[0].title) + (unseen.length > 1 ? ' and ' + plural(unseen.length - 1, 'more update') : '') + '</span><span class="news-strip__go">See what changed</span></a></div>'
      : '';
    var rows = chs.slice().sort(function (a, b) { return a.number - b.number; }).map(function (ch) {
      var keys = [];
      DECKS.forEach(function (d) { keys = keys.concat(deckKeys(ch, d.key)); });
      var t = tallyKeys(keys);
      var started = t.total - t.fresh;
      return '<li><a class="chapter-row" href="#/c/' + ch.id + '/guide">' +
        '<span class="chapter-row__num" aria-hidden="true">' + ch.number + '</span>' +
        '<div><h3><span class="sr-only">Chapter ' + ch.number + ': </span>' + esc(ch.title) + (upd[ch.id] ? ' <span class="upd">Updated</span>' : '') + '</h3><p>' + esc(ch.summary) + '</p>' +
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
          heroArt() + raysSVG() + '<ul class="spectrum">' + spectrum + '</ul>' +
        '</nav>' +
      '</div></section>' +
      newsStrip + backupNudge() + todayPanel +
      '<section class="wrap home-section"><h2>Chapters in the app</h2><ul class="chapter-list">' + rows + '</ul></section>' +
      '<section class="wrap home-section"><h2>For educators</h2><div class="tools tools--3">' +
        '<a class="tool" href="#/teach"><span class="tool__name">Teaching mode</span><span class="tool__meta">Present a case full screen for group discussion; reveal the answer on click.</span></a>' +
        '<div class="tool"><span class="tool__name">Printable handouts</span><span class="tool__meta">A print-ready high-yield sheet per chapter, as an answer key or a fill-in worksheet.</span><span class="tool__links">' +
          chs.map(function (ch) { return '<a href="#/c/' + ch.id + '/handout">Chapter ' + ch.number + '</a>'; }).join('') + '</span></div>' +
        '<a class="tool" href="#/all-highyield"><span class="tool__name">All high-yield (PDF)</span><span class="tool__meta">Every chapter’s high-yield list as one compiled, paginated PDF, or one chapter at a time.</span></a>' +
        '<a class="tool" href="#/exam"><span class="tool__name">Shareable quiz</span><span class="tool__meta">Pick chapters and board domains in Exam mode, then share a link or QR code so every resident gets the same questions in the same order.</span></a>' +
        '<a class="tool" href="#/whats-new"><span class="tool__name">What’s new</span><span class="tool__meta">New chapters, features and corrections, so residents know what to revisit.</span></a>' +
      '</div></section>' +
      '<section class="wrap home-section"><h2>How to study a chapter</h2><div class="howto">' +
        '<div><h3>Read the study guide</h3><p>Work through it once, end to end. Tap any dotted term for its definition from the book’s glossary.</p></div>' +
        '<div><h3>Test yourself on high yield</h3><p>Switch on \u201cHide key facts\u201d and recall each blank before you tap it. Revisit the night before an exam.</p></div>' +
        '<div><h3>Review a little every day</h3><p>Do the day’s due cards, sit a timed exam each week, and clear your mistakes pile. Progress stays on this device.</p></div>' +
      '</div></section>';
    setView('home', html);
    document.title = 'Kaplan & Sadock Study Companion';
    var bl = main.querySelector('#backup-later');
    if (bl) bl.addEventListener('click', function () { store.set('backupNudge', Date.now()); var n = main.querySelector('#backup-nudge'); if (n) n.remove(); });
  }

  /* A quiet reminder, shown only to people with real progress who have not backed it up in a month. */
  function backupNudge() {
    var reviewed = Object.keys(SRS).length, last = store.get('lastExport', 0) || 0, dismissed = store.get('backupNudge', 0) || 0, now = Date.now(), DAY = 86400000;
    if (reviewed < 30 || now - last < 30 * DAY || now - dismissed < 14 * DAY) return '';
    return '<div class="wrap news-strip-wrap" id="backup-nudge"><div class="news-strip"><span class="news-strip__text">Your progress is saved only in this browser. <a href="#/progress">Back it up</a> so a cleared cache or a new phone does not lose it.</span><button class="link-btn" type="button" id="backup-later">Not now</button></div></div>';
  }

  /* ---------- chapter header ---------- */
  /* Previous / next chapter and a chapter menu. Switching keeps the study mode you are in, so a resident
     reading study guides moves from guide to guide, and one drilling pharmacology cards stays in pharmacology. */
  function chapterNav(ch, active) {
    var list = allChapters().slice().sort(function (a, b) { return a.number - b.number; });
    if (list.length < 2) return '';
    var m = modeBy(active) || MODES[0], idx = 0;
    list.forEach(function (c, i) { if (c.id === ch.id) idx = i; });
    var prev = list[idx - 1], next = list[idx + 1];
    function step(c, dir) {
      var label = dir < 0 ? 'Previous chapter' : 'Next chapter', glyph = dir < 0 ? '\u2039' : '\u203a';
      return c ? '<a class="chnav__step" id="ch-' + (dir < 0 ? 'prev' : 'next') + '" href="' + modeHref(c, m) + '" aria-label="' + label + ': Chapter ' + c.number + ', ' + esc(c.short || c.title) + '" title="' + label + ' ([ and ] keys)"><span aria-hidden="true">' + glyph + '</span></a>'
        : '<span class="chnav__step is-off" aria-hidden="true">' + glyph + '</span>';
    }
    return '<nav class="chnav" aria-label="Chapter navigation">' + step(prev, -1) +
      '<label class="chnav__pick"><span class="sr-only">Go to chapter</span><select id="ch-nav" aria-label="Go to chapter">' +
      list.map(function (c) { return '<option value="' + modeHref(c, m) + '"' + (c.id === ch.id ? ' selected' : '') + '>Ch ' + c.number + ': ' + esc(c.short || c.title) + '</option>'; }).join('') +
      '</select></label>' + step(next, 1) + '</nav>';
  }
  document.addEventListener('change', function (e) {
    if (e.target && e.target.id === 'ch-nav') location.hash = e.target.value.replace(/^#/, '');
  });
  function chapterHead(ch, active) {
    var tabs = MODES.map(function (m) {
      var on = m.key === active;
      return '<a class="mode c-' + m.css + (on ? ' is-active' : '') + '" href="' + modeHref(ch, m) + '"' + (on ? ' aria-current="page"' : '') + '>' +
        esc(m.short) + (m.deck ? '<span class="mode__count">' + (ch[m.key] || []).length + '</span>' : '') + '</a>';
    }).join('');
    return '<header class="ch-head"><div class="wrap ch-head__inner">' +
      '<div class="ch-head__top"><p class="crumb"><a href="#/">All chapters</a></p>' + chapterNav(ch, active) + '</div>' +
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
      case 'update':
        return DRUG ? DRUG.updateBox(b, { id: id }) : '';
      case 'heatmap':
        var lv = b.legend || ['Absent', 'Some', 'Marked', 'Defining'], sym = ['\u2013', '+', '++', '+++'];
        return '<div class="g-block heatmap" id="' + id + '">' + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') +
          '<div class="table-wrap" tabindex="0" role="region" aria-label="' + esc(plain(b.title || 'Visual summary')) + '"><table class="hm"><thead><tr><th scope="col"><span class="sr-only">Feature</span></th>' +
          b.cols.map(function (c) { return '<th scope="col">' + fmt(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.rows.map(function (r) {
            return '<tr><th scope="row">' + fmt(r.label) + '</th>' + r.v.map(function (x) { return '<td class="hm-' + x + '" title="' + esc(lv[x]) + '"><span aria-hidden="true">' + sym[x] + '</span><span class="sr-only">' + esc(lv[x]) + '</span></td>'; }).join('') + '</tr>';
          }).join('') + '</tbody></table></div>' +
          '<p class="hm-legend">' + lv.map(function (l, i) { return '<span><i class="hm-' + i + '">' + sym[i] + '</i>' + esc(l) + '</span>'; }).join('') + '</p>' +
          (b.note ? '<p class="table-note">' + fmt(b.note) + '</p>' : '') + '</div>';
      case 'chronology':
        return '<div class="g-block chrono" id="' + id + '">' + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<ol>' +
          b.events.map(function (e) { return '<li><span class="chrono__year">' + esc(e.year) + '</span><span class="chrono__what">' + fmt(e.label) + (e.note ? '<small>' + fmt(e.note) + '</small>' : '') + '</span></li>'; }).join('') +
          '</ol>' + (b.note ? '<p class="table-note">' + fmt(b.note) + '</p>' : '') + '</div>';
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
      case 'update': return plain('Post-publication update ' + (b.year || '') + ' ' + (b.title || '') + ' ' + b.text);
      case 'heatmap': return plain((b.title || '') + ' ' + b.cols.join(' ') + ' ' + b.rows.map(function (r) { return r.label; }).join(' ') + ' ' + (b.note || ''));
      case 'chronology': return plain((b.title || '') + ' ' + b.events.map(function (e) { return e.year + ' ' + e.label + ' ' + (e.note || ''); }).join(' '));
    }
    return '';
  }

  function tocHTML(ch) {
    var n = 0, total = ch.guide.parts.reduce(function (a, pt) { return a + pt.sections.length; }, 0);
    var nw = ((ch.number + '.' + total).length * 0.62 + 0.6).toFixed(1) + 'em';
    return ch.guide.parts.map(function (pt) {
      return '<p class="toc__part">' + esc(pt.title) + '</p><ol>' + pt.sections.map(function (s) {
        n++;
        return '<li><a href="#/c/' + ch.id + '/guide/' + s.id + '" data-sec="' + s.id + '" style="--nw:' + nw + '"' + (isBookmarked(ch.id, s.id) ? ' class="is-bm"' : '') + '><span class="toc__n">' + ch.number + '.' + n + '</span><span>' + esc(s.title) + '</span></a></li>';
      }).join('') + '</ol>';
    }).join('') + '<a class="toc__bookmarks" href="#/bookmarks">' + RIBBON + 'All bookmarks</a>';
  }

  function renderGuide(ch, target) {
    var key = 'guide:' + ch.id;
    if (view.key === key) { focusTarget(target); return; }
    var n = 0;
    var body = ch.guide.parts.map(function (pt, pi) {
      return '<div class="g-part"><p>Part ' + (pi + 1) + '</p><h2>' + esc(pt.title).replace(/\//g, '/<wbr>') + '</h2></div>' +
        pt.sections.map(function (s) {
          n++;
          return '<section class="g-sec" id="' + s.id + '" aria-labelledby="' + s.id + '-h"><div class="g-sec__head"><h3 id="' + s.id + '-h"><span class="g-n">' + ch.number + '.' + n + '</span><span>' + esc(s.title).replace(/\//g, '/<wbr>') + '</span></h3>' + listenBtn(s.id) + ribbonBtn(ch.id, s) + '</div>' +
            s.blocks.map(function (b, i) { return blockHTML(b, s.id + '--' + i); }).join('') + checksHTML(ch, s) + compareChips(ch, s) + '</section>';
        }).join('');
    }).join('');
    var g = ch.guide;
    var intro = '<p class="reading__intro">' + fmt(g.intro) + '</p>' +
      (g.objectives ? '<div class="objectives"><h2>By the end of this chapter you should be able to</h2><ul>' + g.objectives.map(function (o) { return '<li>' + fmt(o) + '</li>'; }).join('') + '</ul></div>' : '') +
      prepostHTML(ch) + chapterLookalikes(ch);
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
    main.querySelectorAll('.reading__intro, .objectives, .g-sec').forEach(function (s) { if (DRUG) DRUG.link(s); linkTerms(s); });

    // bookmark ribbons, read aloud, pre/post-test
    main.querySelector('.reading').addEventListener('click', function (e) {
      var ls = e.target.closest('[data-listen]');
      if (ls) { TTS.start(guideItems(ch, ls.getAttribute('data-listen')), 'Chapter ' + ch.number); return; }
      var pp = e.target.closest('[data-prepost]');
      if (pp) { startExam({ keys: pretestKeys(ch), timed: false, kind: pp.getAttribute('data-prepost'), ch: ch.id, chapters: [ch.id], seed: hashSeed(ch.id) }); return; }
      var btn = e.target.closest('[data-bm]');
      if (!btn) return;
      var id = btn.getAttribute('data-bm'), on = toggleBookmark(ch.id, id);
      setRibbon(btn, on);
      main.querySelectorAll('.toc a[data-sec="' + id + '"]').forEach(function (a) { a.classList.toggle('is-bm', on); });
      toast(on ? 'Section bookmarked. <a href="#/bookmarks">See all bookmarks</a>' : 'Bookmark removed.');
    });

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

  function listenBtn(secId) {
    return TTS.ok ? '<button class="g-listen" type="button" data-listen="' + secId + '" aria-label="Listen from this section" title="Listen from here"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>' : '';
  }
  function checksHTML(ch, s) {
    var list = checksFor(ch, s.id);
    if (!list.length) return '';
    return '<div class="checks"><p class="checks__title">Check yourself</p><p class="checks__hint">Answer in your head, then open each question to check.</p><ol>' + list.map(function (q) {
      return '<li><details><summary>' + fmt(q.q) + '</summary><p>' + fmt(q.a) + '</p></details></li>';
    }).join('') + '</ol></div>';
  }
  function comparisonsFor(chId, secId) {
    return (KS.lookalikes || []).filter(function (c) { return (c.links || []).some(function (l) { return l.ch === chId && l.sec === secId; }); });
  }
  function compareChips(ch, s) {
    var list = comparisonsFor(ch.id, s.id);
    if (!list.length) return '';
    return '<p class="g-compare"><span>Look-alikes:</span> ' + list.map(function (c) { return '<a href="#/compare/' + c.id + '">' + esc(c.title) + '</a>'; }).join('') + '</p>';
  }
  function guideItems(ch, fromSec) {
    var out = [], on = false, n = 0;
    main.querySelectorAll('.g-sec').forEach(function (sec) {
      n++;
      if (sec.id === fromSec) on = true;
      if (!on) return;
      var h = sec.querySelector('h3'), title = h ? h.textContent.replace(/^[\d.]+/, '').trim() : '';
      out.push({ el: h, text: 'Section ' + ch.number + '.' + n + '. ' + title + '.', label: ch.number + '.' + n + ' ' + title });
      Array.prototype.forEach.call(sec.children, function (b) {
        if (!b.classList.contains('g-block')) return;
        out.push({ el: b, text: speakText(b), label: ch.number + '.' + n + ' ' + title });
      });
    });
    return out;
  }
  function speakText(el) {
    var c = el.cloneNode(true);
    c.querySelectorAll('.sr-only, .update__links, .table-note a, button').forEach(function (x) { x.remove(); });
    c.querySelectorAll('tr').forEach(function (tr) { tr.appendChild(document.createTextNode('. ')); });
    c.querySelectorAll('li, dd, p, h4, caption').forEach(function (x) { x.appendChild(document.createTextNode('. ')); });
    return (c.textContent || '').replace(/\u2013|\u2014/g, ', ').replace(/\s+/g, ' ').replace(/(\.\s*){2,}/g, '. ').trim();
  }
  function hashSeed(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function pretestKeys(ch) {
    var L = ch.learning || {}, ids = L.pretest;
    if (!ids || !ids.length) {
      var pool = (ch.cases || []).filter(function (c) { return !/post-publication/i.test(c.tag || ''); });
      var n = Math.min(8, pool.length);
      ids = [];
      for (var i = 0; i < n; i++) ids.push(pool[Math.floor(i * pool.length / n)].id);
    }
    return ids.map(function (id) { return ch.id + '/cases/' + id; }).filter(function (k) { return CARDS[k]; });
  }
  function chapterLookalikes(ch) {
    var list = comparisonsInChapter(ch.id);
    if (!list.length) return '';
    return '<p class="g-lookalikes"><b>Look-alikes in this chapter:</b> ' + list.map(function (c) { return '<a href="#/compare/' + c.id + '">' + esc(c.title) + '</a>'; }).join('') +
      '<a class="g-lookalikes__all" href="#/compare/ch/' + ch.id + '">All, with PDFs</a></p>';
  }
  function prepostHTML(ch) {
    var keys = pretestKeys(ch);
    if (keys.length < 3) return '';
    var pp = (store.get('prepost', {}) || {})[ch.id] || {};
    function slot(kind, label) {
      var r = pp[kind];
      return '<div class="prepost__slot"><p class="prepost__label">' + label + '</p>' +
        (r ? '<p class="prepost__score">' + pct(r.s, r.t) + '<span>%</span></p><p class="prepost__meta">' + r.s + ' of ' + r.t + ', ' + fmtDate(r.at) + '</p>' : '<p class="prepost__meta">Not taken yet</p>') +
        '<button class="btn' + (kind === 'pre' && !r ? ' btn--solid' : kind === 'post' && pp.pre && !r ? ' btn--solid' : '') + '" type="button" data-prepost="' + kind + '">' + (r ? 'Retake' : 'Start') + '</button></div>';
    }
    var delta = pp.pre && pp.post ? pct(pp.post.s, pp.post.t) - pct(pp.pre.s, pp.pre.t) : null;
    return '<div class="prepost"><div class="prepost__intro"><h2>Pre-test and post-test</h2><p>Take the ' + plural(keys.length, 'question') + ' before you read to see what to focus on, then the same questions after you finish to measure what you learned. Untimed; pre-test answers do not go to your mistakes.</p></div>' +
      '<div class="prepost__row">' + slot('pre', 'Pre-test') + slot('post', 'Post-test') +
      (delta != null ? '<div class="prepost__slot prepost__delta"><p class="prepost__label">Change</p><p class="prepost__score ' + (delta > 0 ? 'is-up' : delta < 0 ? 'is-down' : '') + '">' + (delta > 0 ? '+' : '') + delta + '<span> pts</span></p></div>' : '') +
      '</div></div>';
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


  /* ---------- look-alikes (comparisons across chapters) ---------- */
  function lookalike(id) { var l = KS.lookalikes || []; for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function comparisonsInChapter(chId) { return (KS.lookalikes || []).filter(function (c) { return (c.links || []).some(function (l) { return l.ch === chId; }); }); }
  function laPrefs() { var p = store.get('laPrefs', {}) || {}; return { paper: PAPER[p.paper] ? p.paper : 'a4', blank: !!p.blank }; }
  function laPdfItem(c) {
    var chs = chaptersIn(c);
    return {
      title: c.title, summary: c.summary, items: c.items, rows: c.rows, keys: c.keys,
      chapters: chs.map(function (ch) { return 'Ch ' + ch.number; }).join(', '),
      readMore: (c.links || []).map(function (l) { var ch = chapter(l.ch); return ch ? 'Chapter ' + ch.number + ', ' + l.label : ''; }).filter(Boolean).join('; ')
    };
  }
  function laFileName(base, blank, paper) { return 'KS-lookalikes-' + base + '-' + (blank ? 'worksheet' : 'answer-key') + '-' + PAPER[paper].label.toLowerCase() + '.pdf'; }
  /* builds and saves a look-alikes PDF; statusEl shows progress */
  function laPdf(list, blank, paper, base, statusEl, title) {
    if (statusEl) { statusEl.className = 'ahy-status'; statusEl.textContent = 'Building the PDF…'; }
    setTimeout(function () {
      var blob = window.KS && KS.lookalikePdf && KS.lookalikePdf({ paper: paper, blank: blank, items: list.map(laPdfItem), attribution: ATTRIBUTION, title: title });
      if (!blob) { if (statusEl) { statusEl.className = 'ahy-status is-warn'; statusEl.textContent = 'Could not build that PDF.'; } return; }
      savePdf(blob, laFileName(base, blank, paper));
      if (statusEl) statusEl.textContent = '';
    }, 10);
  }
  function laSeg(name, opts, cur) {
    return '<div class="seg" role="radiogroup">' + opts.map(function (o) {
      return '<label><input type="radio" name="' + name + '" value="' + o[0] + '"' + (String(o[0]) === String(cur) ? ' checked' : '') + '><span>' + o[1] + '</span></label>';
    }).join('') + '</div>';
  }
  function renderCompareList(chFilter) {
    var all = (KS.lookalikes || []).slice().sort(function (a, b) { return a.title.localeCompare(b.title); });
    var pr = laPrefs();
    var chs = allChapters().filter(function (ch) { return comparisonsInChapter(ch.id).length; }).sort(function (a, b) { return a.number - b.number; });
    if (chFilter && !chapter(chFilter)) chFilter = '';
    var html = '<div class="wrap page cmp-page">' +
      '<header class="page__head"><h1>Look-alikes</h1><p>Side-by-side comparisons of conditions that are easy to confuse, with the features that tell them apart and links to the chapters. Download any of them as a landscape PDF, as an answer key or a blank worksheet to fill in.</p></header>' +
      (all.length ? '<div class="cmp-tools no-print">' +
        '<label class="cmp-tools__field"><span>Chapter</span><select id="cmp-ch"><option value="">All chapters (' + all.length + ')</option>' + chs.map(function (ch) {
          return '<option value="' + ch.id + '"' + (ch.id === chFilter ? ' selected' : '') + '>Ch ' + ch.number + ': ' + esc(ch.short || ch.title) + ' (' + comparisonsInChapter(ch.id).length + ')</option>';
        }).join('') + '</select></label>' +
        '<label class="cmp-tools__field cmp-tools__search"><span>Find</span><input id="cmp-q" type="search" placeholder="Condition or feature" autocomplete="off"></label>' +
      '</div><p class="cmp-count" id="cmp-count" aria-live="polite"></p>' +
      '<ul class="cmp-list">' + all.map(function (c) {
        var txt = plain(c.title + ' ' + (c.summary || '') + ' ' + c.items.join(' ') + ' ' + c.rows.map(function (r) { return r.join(' '); }).join(' ')).toLowerCase();
        return '<li class="cmp-item" data-id="' + c.id + '" data-chs="' + chaptersIn(c).map(function (ch) { return ch.id; }).join(' ') + '" data-text="' + esc(txt) + '">' +
          '<a class="cmp-card" href="#/compare/' + c.id + '"><span class="cmp-card__title">' + esc(c.title) + '</span><span class="cmp-card__meta">' + esc(c.summary || '') + '</span>' +
          '<span class="cmp-card__ch">' + chaptersIn(c).map(function (ch) { return 'Ch ' + ch.number; }).join(' · ') + ' · ' + plural(c.items.length, 'condition') + '</span></a>' +
          '<div class="cmp-item__pdf"><button class="btn btn--small" type="button" data-la="' + c.id + '" data-blank="0">Answer key PDF</button><button class="btn btn--small" type="button" data-la="' + c.id + '" data-blank="1">Worksheet PDF</button></div></li>';
      }).join('') + '</ul>' +
      '<section class="handout-tools cmp-pdf no-print" aria-labelledby="cmp-pdf-h"><h2 id="cmp-pdf-h">Look-alikes reviewer (PDF)</h2>' +
        '<p class="muted">One landscape page per comparison, with a contents page. The answer key fills every cell; the worksheet keeps the features and headings and leaves the cells and the <i>how to tell them apart</i> lines blank.</p>' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Version</span>' + laSeg('la-ver', [['0', 'Answer key'], ['1', 'Blank worksheet']], pr.blank ? '1' : '0') + '</div>' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Paper</span>' + laSeg('la-paper', [['a4', 'A4'], ['letter', 'Letter']], pr.paper) + '</div>' +
        '<div class="handout-tools__go"><button class="btn btn--solid" type="button" id="la-all"></button><p class="ahy-status" id="la-status" aria-live="polite"></p></div>' +
      '</section>'
      : '<p class="muted">Comparisons are being added chapter by chapter.</p>') +
      '</div>';
    setView('compare', html);
    document.title = 'Look-alikes — K&S Study Companion';
    if (!all.length) return;
    var sel = main.querySelector('#cmp-ch'), q = main.querySelector('#cmp-q'), status = main.querySelector('#la-status'), go = main.querySelector('#la-all');
    function shown() {
      var ch = sel.value, t = q.value.trim().toLowerCase(), out = [];
      main.querySelectorAll('.cmp-item').forEach(function (li) {
        var ok = (!ch || (' ' + li.getAttribute('data-chs') + ' ').indexOf(' ' + ch + ' ') > -1) && (!t || li.getAttribute('data-text').indexOf(t) > -1);
        li.hidden = !ok; if (ok) out.push(lookalike(li.getAttribute('data-id')));
      });
      return out;
    }
    function paint() {
      var list = shown(), c = sel.value ? chapter(sel.value) : null;
      main.querySelector('#cmp-count').textContent = list.length === all.length ? plural(all.length, 'comparison') : plural(list.length, 'comparison') + ' of ' + all.length + (c ? ' in Chapter ' + c.number : '');
      go.textContent = list.length === all.length ? 'Create PDF of all ' + plural(all.length, 'comparison') : 'Create PDF of the ' + plural(list.length, 'comparison') + ' shown';
      go.disabled = !list.length;
    }
    sel.addEventListener('change', function () { history.replaceState(history.state, '', sel.value ? '#/compare/ch/' + sel.value : '#/compare'); paint(); });
    q.addEventListener('input', paint);
    function savePr(k, v) { var p = store.get('laPrefs', {}) || {}; p[k] = v; store.set('laPrefs', p); }
    main.querySelectorAll('input[name=la-ver]').forEach(function (i) { i.addEventListener('change', function () { savePr('blank', i.value === '1'); }); });
    main.querySelectorAll('input[name=la-paper]').forEach(function (i) { i.addEventListener('change', function () { savePr('paper', i.value); }); });
    go.addEventListener('click', function () {
      var list = shown(), p = laPrefs(), c = sel.value ? chapter(sel.value) : null;
      laPdf(list, p.blank, p.paper, c ? 'ch' + c.number : (list.length === all.length ? 'all' : 'selected'), status, c ? 'Chapter ' + c.number + ' look-alikes' : 'Look-alikes reviewer');
    });
    main.querySelectorAll('[data-la]').forEach(function (b) {
      b.addEventListener('click', function () { var c = lookalike(b.getAttribute('data-la')); laPdf([c], b.getAttribute('data-blank') === '1', laPrefs().paper, c.id, status, c.title); });
    });
    paint();
  }
  function chaptersIn(c) {
    var seen = {}, out = [];
    (c.links || []).forEach(function (l) { var ch = chapter(l.ch); if (ch && !seen[ch.id]) { seen[ch.id] = 1; out.push(ch); } });
    return out.sort(function (a, b) { return a.number - b.number; });
  }
  function renderCompare(id) {
    var c = lookalike(id);
    if (!c) { renderMissing(); return; }
    var html = '<div class="wrap page compare">' +
      '<header class="page__head"><p class="crumb"><a href="#/compare">Look-alikes</a></p><h1>' + esc(c.title) + '</h1>' + (c.summary ? '<p>' + fmt(c.summary) + '</p>' : '') + '</header>' +
      '<div class="table-wrap" tabindex="0" role="region" aria-label="' + esc(c.title) + '"><table class="cmp-table"><thead><tr><th scope="col">Feature</th>' + c.items.map(function (n) { return '<th scope="col">' + fmt(n) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        c.rows.map(function (r) { return '<tr><th scope="row">' + fmt(r[0]) + '</th>' + r.slice(1).map(function (v) { return '<td>' + fmt(v) + '</td>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>' +
      (c.keys && c.keys.length ? '<section class="cmp-keys"><h2>How to tell them apart</h2><ul>' + c.keys.map(function (k) { return '<li>' + fmt(k) + '</li>'; }).join('') + '</ul></section>' : '') +
      (c.links && c.links.length ? '<section class="cmp-links"><h2>Read more in the study guides</h2><ul>' + c.links.map(function (l) {
        var ch = chapter(l.ch); return ch ? '<li><a href="#/c/' + ch.id + '/guide/' + l.sec + '">Chapter ' + ch.number + ': ' + esc(l.label) + '</a></li>' : '';
      }).join('') + '</ul></section>' : '') +
      '<p class="muted cmp-src">' + esc(c.source || 'Built from Kaplan & Sadock\u2019s Synopsis of Psychiatry, 12th edition.') + '</p>' +
      '<div class="empty__actions no-print cmp-detail-pdf"><button class="btn" type="button" data-la-one="0">Answer key PDF</button><button class="btn" type="button" data-la-one="1">Worksheet PDF</button><a class="btn" href="#/compare">All look-alikes</a><p class="ahy-status" id="la-status" aria-live="polite"></p></div>' +
      '</div>';
    setView('compare:' + id, html);
    main.querySelectorAll('[data-la-one]').forEach(function (b) {
      b.addEventListener('click', function () { laPdf([c], b.getAttribute('data-la-one') === '1', laPrefs().paper, c.id, main.querySelector('#la-status'), c.title); });
    });
    main.querySelectorAll('.compare').forEach(function (s) { if (DRUG) DRUG.link(s); linkTerms(s); });
    document.title = c.title + ' — K&S Study Companion';
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
        '<p>With key facts hidden, each bold fact becomes a blank. Say the answer, then tap the blank to check.</p>' +
        '<a class="btn hy-tools__print" href="#/c/' + ch.id + '/handout">Printable handout</a><a class="btn" href="#/all-highyield">High-yield PDF</a><a class="btn" href="#/teach" id="hy-teach">Present as fill-in-the-blank</a>' + (TTS.ok ? '<button class="btn" type="button" id="hy-listen">Listen</button>' : '') + '</div>' +
        '<div class="hy-grid">' + topics + '</div>' +
      '</div>';
    setView(key, html, focusTarget);
    document.title = 'Ch ' + ch.number + ' high yield — K&S Study Companion';
    main.querySelectorAll('.hy-topic').forEach(function (t) { if (DRUG) DRUG.link(t); linkTerms(t, { skip: 'strong' }); });
    var page = main.querySelector('.hy-page');
    var toggle = main.querySelector('#hy-quiz');
    var hyt = main.querySelector('#hy-teach');
    if (hyt) hyt.addEventListener('click', function () { var tp = teachPrefs(); tp.scope = ch.id; tp.kind = 'hy'; store.set('teachPrefs', tp); });
    var hyl = main.querySelector('#hy-listen');
    if (hyl) hyl.addEventListener('click', function () {
      var items = [];
      main.querySelectorAll('.hy-topic').forEach(function (t) {
        var h = t.querySelector('h2'), lab = h ? h.textContent : '';
        items.push({ el: h, text: lab + '.', label: lab });
        t.querySelectorAll('li').forEach(function (li) { items.push({ el: li, text: speakText(li), label: lab }); });
      });
      TTS.start(items, 'Chapter ' + ch.number + ' high yield');
    });
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
        back = verdict + '<p class="face__recap">' + fmt(c.q) + '</p>' + choiceList(c.choices, c.answer, st.chosen, c.whyNot) + '<p class="face__why">' + fmt(c.why) + '</p>';
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
    function choiceList(choices, answer, chosen, why) {
      return '<ul class="choices choices--static">' + choices.map(function (ch2, i) {
        var cls = i === answer ? ' is-correct' : (i === chosen ? ' is-wrong' : '');
        var note = i === answer ? '<span class="choice__note">Correct answer</span>' : (i === chosen ? '<span class="choice__note">Your answer</span>' : '');
        return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(ch2) + note + whyNotHTML(why, i, answer) + '</span></div></li>';
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

  function whyNotHTML(why, i, answer) {
    return why && i !== answer && why[i] ? '<span class="choice__why">' + fmt(why[i]) + '</span>' : '';
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
        '</div><div class="deck-bar__right">' + '<a class="btn btn--small" href="#/teach" id="opt-teach">Present in teaching mode</a>' + '<button class="link-btn" type="button" id="opt-reset">Reset this deck</button></div></div>' +
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
    var tl = main.querySelector('#opt-teach');
    if (tl) tl.addEventListener('click', function () { var tp = teachPrefs(); tp.scope = ch.id; tp.kind = ({ cases: 'mcq', diagnosis: 'dx', pharm: 'pharm', foundations: 'found' })[deck.key] || 'mcq'; store.set('teachPrefs', tp); });
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
  function renderBookmarks() {
    var list = bookmarkList(), groups = [], cur = null;
    list.forEach(function (b) {
      if (!cur || cur.ch !== b.ch) { cur = { ch: b.ch, items: [] }; groups.push(cur); }
      cur.items.push(b);
    });
    var date = function (t) { try { return new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return ''; } };
    var body = groups.map(function (g) {
      return '<section class="bm-group"><h2><a href="#/c/' + g.ch.id + '/guide">Chapter ' + g.ch.number + ': ' + esc(g.ch.title) + '</a></h2><ul>' +
        g.items.map(function (b) {
          var first = '';
          for (var i = 0; i < b.sec.blocks.length && first.length < 40; i++) first += ' ' + blockText(b.sec.blocks[i]);
          first = first.trim();
          if (first.length > 170) first = first.slice(0, 170).replace(/\s+\S*$/, '') + '…';
          return '<li class="bm" data-key="' + esc(b.key) + '">' +
            '<a class="bm__link" href="#/c/' + b.ch.id + '/guide/' + b.sec.id + '">' +
              '<span class="bm__meta"><span class="bm__n">' + b.ch.number + '.' + b.n + '</span><span>Part ' + (b.pi + 1) + ': ' + esc(b.part) + '</span>' + (b.t ? '<span>Saved ' + esc(date(b.t)) + '</span>' : '') + '</span>' +
              '<span class="bm__title">' + esc(b.sec.title).replace(/\//g, '/<wbr>') + '</span>' +
              (first ? '<span class="bm__snip">' + esc(first) + '</span>' : '') +
            '</a>' +
            '<button class="ribbon is-on" type="button" data-unbm="' + esc(b.key) + '" aria-pressed="true" aria-label="Remove bookmark: ' + esc(b.sec.title) + '" title="Remove bookmark">' + RIBBON + '</button>' +
          '</li>';
        }).join('') + '</ul></section>';
    }).join('');
    var last = store.get('last', null);
    var html = '<div class="wrap page bm-page">' +
      '<header class="page__head"><h1>Bookmarks</h1><p>Study-guide sections you marked with the ribbon, in book order. Bookmarks stay on this device.</p></header>' +
      (list.length
        ? '<div class="deck-bar"><span class="deck-bar__count">' + plural(list.length, 'bookmarked section') + '</span><button class="link-btn" type="button" id="bm-clear">Remove all bookmarks</button></div>' + body
        : '<div class="empty"><span class="empty__ribbon">' + RIBBON + '</span><h2>No bookmarks yet</h2><p>Tap the ribbon beside any section title in a study guide to save it here.</p><div class="empty__actions"><a class="btn btn--solid" href="' + (last && last.ch ? '#/c/' + last.ch + '/guide' : '#/c/' + KS.manifest[0].id + '/guide') + '">Open a study guide</a></div></div>') +
      '</div>';
    setView('bookmarks', html, null, { keepScroll: view.key === 'bookmarks' });
    document.title = 'Bookmarks — K&S Study Companion';
    main.querySelectorAll('[data-unbm]').forEach(function (b) {
      b.addEventListener('click', function () {
        delete BOOKMARKS[b.getAttribute('data-unbm')]; saveBookmarks();
        view.key = null; renderBookmarks();
        toast('Bookmark removed.');
      });
    });
    var clr = main.querySelector('#bm-clear');
    if (clr) clr.addEventListener('click', function () {
      if (!window.confirm('Remove every bookmark?')) return;
      BOOKMARKS = {}; saveBookmarks(); renderBookmarks();
    });
  }

  function renderMistakes() {
    var keys = mistakeKeys();
    var list = keys.map(function (k) {
      var r = CARDS[k];
      return '<li class="mk"><div class="mk__meta"><span class="kind c-case">Ch ' + r.ch.number + ', ' + esc(r.c.tag || 'Case') + '</span><span>Missed ' + plural(MISTAKES[k].n, 'time') + '</span></div>' +
        '<p class="mk__q">' + esc(plain(r.c.q)) + '</p><button class="link-btn" type="button" data-remove="' + esc(k) + '">Remove</button></li>';
    }).join('');
    var html = '<div class="wrap page">' +
      '<header class="page__head"><h1>Mistakes</h1><p>Every clinical case you answer incorrectly, in the decks, daily review or an exam, lands here. Answer it correctly to clear it. To see which topics you miss most, open <a href="#/weak">Weak topics</a>.</p></header>' +
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

  /* ---------- weak topics ----------
     Pools what this browser already keeps, nothing new: answers in kept exams and quizzes (pre-tests
     are left out because they are taken before studying), flashcard ratings (each Again is a miss)
     and open mistakes. A topic is a chapter plus the card's tag, as on the exam results page. */
  var WEAK_MIN = 3, WEAK_SHOW = 15, DRILL_MAX = 20;
  function srsTries(s) { return s ? (typeof s.n === 'number' ? s.n : (s.r || 0) + (s.l || 0)) : 0; }
  function weakData() {
    var T = {}, C = {}, D = {}, exams = 0;
    function topic(r) {
      var tag = r.c.tag || 'General', k = r.ch.id + '|' + tag;
      return T[k] || (T[k] = { key: k, ch: r.ch, tag: tag, en: 0, emiss: 0, fn: 0, fmiss: 0, open: 0 });
    }
    function bump(o, k, n, miss) { var v = o[k] || (o[k] = { n: 0, miss: 0 }); v.n += n; v.miss += miss; }
    (store.get('examHistory', []) || []).forEach(function (ex) {
      if (!ex || ex.kind === 'pre') return;
      var any = false;
      (ex.items || []).forEach(function (x) {
        var r = CARDS[x.k];
        if (!r || x.a == null) return; /* unanswered questions say nothing about what you know */
        any = true;
        var miss = x.a === r.c.answer ? 0 : 1, t = topic(r);
        t.en++; t.emiss += miss;
        bump(C, r.ch.id, 1, miss); bump(D, caseDomain(r.c), 1, miss);
      });
      if (any) exams++;
    });
    Object.keys(SRS).forEach(function (k) {
      var r = CARDS[k], s = SRS[k], n = srsTries(s);
      if (!r || !n) return;
      var miss = Math.min(s.l || 0, n), t = topic(r);
      t.fn += n; t.fmiss += miss;
      bump(C, r.ch.id, n, miss);
      if (r.deck.key === 'cases') bump(D, caseDomain(r.c), n, miss);
    });
    mistakeKeys().forEach(function (k) { topic(CARDS[k]).open++; });
    var all = Object.keys(T).map(function (k) { var t = T[k]; t.n = t.en + t.fn; t.miss = t.emiss + t.fmiss; return t; });
    function weakFirst(a, b) { return b.miss / b.n - a.miss / a.n || b.n - a.n; }
    var ranked = all.filter(function (t) { return t.n >= WEAK_MIN; }).sort(weakFirst);
    var thin = all.filter(function (t) { return t.n < WEAK_MIN && (t.n || t.open); }).sort(function (a, b) { return b.open - a.open || b.miss - a.miss; });
    return { ranked: ranked, thin: thin, byCh: C, byDom: D, exams: exams, tries: all.reduce(function (s, t) { return s + t.n; }, 0) };
  }
  function topicCaseKeys(ch, tag) {
    return deckKeys(ch, 'cases').filter(function (k) { return CARDS[k] && (CARDS[k].c.tag || 'General') === tag; });
  }
  function scoreBar(ok, n) {
    var p = pct(ok, n);
    return '<span class="bar-cell"><span class="score-bar"><span style="width:' + p + '%" class="' + (p >= 70 ? 'is-good' : p >= 50 ? 'is-mid' : 'is-low') + '"></span></span><span class="score-pct">' + p + '%</span></span>';
  }
  function renderWeak(showAll) {
    var W = weakData(), list = showAll ? W.ranked : W.ranked.slice(0, WEAK_SHOW);
    function sources(t) {
      var bits = [];
      if (t.en) bits.push('Exams: ' + (t.en - t.emiss) + ' of ' + t.en + ' right');
      if (t.fn) bits.push('Flashcards: Again ' + t.fmiss + ' of ' + plural(t.fn, 'review'));
      if (t.open) bits.push(plural(t.open, 'open mistake'));
      return bits.join(' · ');
    }
    function actions(t) {
      var n = topicCaseKeys(t.ch, t.tag).length;
      return '<p class="weak__acts">' + (n ? '<button class="btn btn--small btn--solid" type="button" data-drill="' + esc(t.key) + '">Drill ' + plural(Math.min(n, DRILL_MAX), 'case') + '</button>' : '') +
        '<a class="btn btn--small" href="#/c/' + t.ch.id + '/guide">Chapter ' + t.ch.number + ' guide</a><a class="btn btn--small" href="#/c/' + t.ch.id + '/high-yield">High yield</a></p>';
    }
    function item(t) {
      return '<li class="weak__item"><div class="weak__top"><h3>Ch ' + t.ch.number + ', ' + esc(t.tag) + '</h3><span class="weak__miss">Missed ' + t.miss + ' of ' + plural(t.n, 'try', 'tries') + '</span></div>' +
        scoreBar(t.n - t.miss, t.n) + '<p class="weak__src">' + sources(t) + '</p>' + actions(t) + '</li>';
    }
    function rollup(title, note, obj, label, href) {
      var ks = Object.keys(obj).filter(function (k) { return obj[k].n; });
      if (!ks.length) return '';
      ks.sort(function (a, b) { return obj[b].miss / obj[b].n - obj[a].miss / obj[a].n || obj[b].n - obj[a].n; });
      return '<section class="results-sec"><h2>' + title + '</h2><p class="muted">' + note + '</p><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">' + label + '</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' +
        ks.map(function (k) {
          var v = obj[k], name = href(k);
          return '<tr><th scope="row">' + name + '</th><td>' + (v.n - v.miss) + ' of ' + v.n + '</td><td>' + scoreBar(v.n - v.miss, v.n) + '</td></tr>';
        }).join('') + '</tbody></table></div></section>';
    }
    var head = '<header class="page__head"><h1>Weak topics</h1><p>Your exam and quiz answers, flashcard ratings and open mistakes, pooled by topic so you can see where to spend your next hour. Pre-tests are left out because you take them before studying. Everything is read from this browser; nothing is sent anywhere.</p></header>';
    var html;
    if (!W.tries) {
      html = '<div class="wrap page weak-page">' + head + '<div class="empty"><h2>Nothing to rank yet</h2><p>Take an exam or rate some flashcards and your weakest topics appear here. A topic needs at least ' + WEAK_MIN + ' tries to be ranked.</p>' +
        '<div class="empty__actions"><a class="btn btn--solid" href="#/exam">Take a practice exam</a><a class="btn" href="#/review">Daily review</a></div></div></div>';
    } else {
      html = '<div class="wrap page weak-page">' + head +
        '<p class="weak__sum">' + plural(W.tries, 'try', 'tries') + ' counted' + (W.exams ? ', from ' + plural(W.exams, 'exam or quiz', 'exams and quizzes') + ' and your flashcard reviews' : ', all from flashcard reviews') + '. Each Again counts as a miss; Hard, Good and Easy count as right.</p>' +
        '<section class="results-sec"><h2>Weakest first</h2>' +
        (W.ranked.length ? '<ol class="weak__list">' + list.map(item).join('') + '</ol>' +
          (W.ranked.length > WEAK_SHOW ? '<p><button class="btn" type="button" id="wk-more">' + (showAll ? 'Show the weakest ' + WEAK_SHOW : 'Show all ' + W.ranked.length + ' topics') + '</button></p>' : '')
          : '<p class="muted">No topic has ' + WEAK_MIN + ' tries yet. Keep going and the ranking fills in.</p>') +
        '</section>' +
        rollup('By chapter', 'All tries in each chapter, weakest first.', W.byCh, 'Chapter', function (id) { var c = chapter(id); return c ? '<a href="#/review/' + c.id + '">Chapter ' + c.number + ': ' + esc(c.short || c.title) + '</a>' : esc(id); }) +
        rollup('By board domain', 'Clinical cases only, grouped by the ABPN content outline.', W.byDom, 'Domain', function (k) { return esc(k + '. ' + domainName(k)); }) +
        (W.thin.length ? '<section class="results-sec"><details class="weak__thin"><summary>' + plural(W.thin.length, 'topic') + ' with fewer than ' + WEAK_MIN + ' tries</summary><ul>' +
          W.thin.map(function (t) { return '<li><b>Ch ' + t.ch.number + ', ' + esc(t.tag) + '</b> <span class="muted">' + (sources(t) || 'Not tried yet') + '</span></li>'; }).join('') + '</ul></details></section>' : '') +
        '</div>';
    }
    setView('weak', html);
    document.title = 'Weak topics — K&S Study Companion';
    var more = main.querySelector('#wk-more');
    if (more) more.addEventListener('click', function () { renderWeak(!showAll); });
    main.querySelectorAll('[data-drill]').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-drill'), i = k.indexOf('|'), ch = chapter(k.slice(0, i)), tag = k.slice(i + 1);
        if (!ch) return;
        var keys = shuffle(topicCaseKeys(ch, tag)).slice(0, DRILL_MAX);
        startExam({ keys: keys, timed: false, kind: 'quiz', chapters: [ch.id], quiz: { t: 'Drill: Chapter ' + ch.number + ', ' + tag } });
      });
    });
  }

  /* ---------- exam mode ---------- */
  var SECS_PER_Q = 90;
  function caseKeys(chIds) {
    var out = [];
    chIds.forEach(function (id) { var ch = chapter(id); if (ch) out = out.concat(deckKeys(ch, 'cases')); });
    return out;
  }
  function startExam(o) {
    var keys = o.keys.filter(function (k) { return CARDS[k]; });
    if (!keys.length) return false;
    if (store.get('exam', null) && !window.confirm('Starting this discards the exam in progress. Continue?')) return false;
    var r = o.seed != null ? rng(o.seed) : Math.random;
    var exam = {
      id: 'e' + Date.now().toString(36), at: Date.now(), chapters: o.chapters || [], timed: !!o.timed,
      limit: o.timed ? keys.length * SECS_PER_Q : 0, cur: 0, kind: o.kind || 'exam', ch: o.ch || null, quiz: o.quiz || null,
      items: keys.map(function (k) { return { k: k, o: shuffleWith(CARDS[k].c.choices.map(function (_, i) { return i; }), r), a: null, f: false }; })
    };
    store.set('exam', exam);
    location.hash = '#/exam/run';
    return true;
  }
  function chaptersOf(keys) { var seen = {}, out = []; keys.forEach(function (k) { var c = k.split('/')[0]; if (!seen[c]) { seen[c] = 1; out.push(c); } }); return out; }

  /* Shareable quiz links: #/quiz/1/<t|u>/<seed>/<title>/<chapter!prefix!ids~...>.
     The seed fixes the question order and the answer order, so everyone gets the same quiz. */
  function commonPrefix(ids) {
    if (!ids.length) return '';
    var p = ids[0];
    ids.forEach(function (s) { while (s.indexOf(p) !== 0) p = p.slice(0, -1); });
    while (p && ids.some(function (s) { return s.length === p.length; })) p = p.slice(0, -1);
    return p;
  }
  function quizLink(keys, timed, title, seed) {
    var groups = {}, order = [];
    keys.forEach(function (k) { var p = k.split('/'); if (!groups[p[0]]) { groups[p[0]] = []; order.push(p[0]); } groups[p[0]].push(p[2]); });
    var g = order.map(function (c) { var ids = groups[c], pre = commonPrefix(ids); return c + '!' + pre + '!' + ids.map(function (i) { return i.slice(pre.length); }).join('.'); }).join('~');
    var base = location.href.split('#')[0];
    return base + '#/quiz/1/' + (timed ? 't' : 'u') + '/' + (seed >>> 0).toString(36) + '/' + encodeURIComponent(title || 'Quiz') + '/' + g;
  }
  function parseQuiz(p) {
    if (p[1] !== '1' || !p[5]) return null;
    var keys = [];
    p[5].split('~').forEach(function (grp) {
      var a = grp.split('!');
      if (a.length !== 3) return;
      a[2].split('.').forEach(function (s) { if (s !== '' || a[1]) keys.push(a[0] + '/cases/' + a[1] + s); });
    });
    var seed = parseInt(p[3], 36) >>> 0;
    var all = shuffleWith(keys.slice(), rng(seed));
    var ok = all.filter(function (k) { return CARDS[k]; });
    return { timed: p[2] === 't', seed: seed, title: p[4] || 'Quiz', keys: ok, missing: all.length - ok.length };
  }
  function renderQuiz(p) {
    var qz = parseQuiz(p);
    if (!qz || !qz.keys.length) { renderMissing(); return; }
    var chs = chaptersOf(qz.keys).map(function (id) { var c = chapter(id); return c ? 'Chapter ' + c.number : id; });
    var html = '<div class="wrap page quiz-landing">' +
      '<header class="page__head"><p class="crumb"><a href="#/exam">Exam mode</a></p><p class="eyebrow">Shared quiz</p><h1>' + esc(qz.title) + '</h1>' +
      '<p>' + plural(qz.keys.length, 'question') + ' from ' + esc(chs.join(', ')) + '. ' + (qz.timed ? 'Timed: ' + fmtClock(qz.keys.length * SECS_PER_Q) + ' on the clock.' : 'Untimed.') + ' Everyone who opens this link gets the same questions in the same order.</p>' +
      (qz.missing ? '<p class="muted">' + plural(qz.missing, 'question') + ' in this link are no longer in the app and were left out.</p>' : '') + '</header>' +
      '<div class="empty__actions"><button class="btn btn--solid" type="button" id="qz-start">Start quiz</button><button class="btn" type="button" id="qz-share">Share link or QR code</button></div>' +
      '<div id="qz-panel"></div></div>';
    setView('quiz:' + p.join('/'), html);
    document.title = qz.title + ' — K&S Study Companion';
    main.querySelector('#qz-start').addEventListener('click', function () {
      startExam({ keys: qz.keys, timed: qz.timed, kind: 'quiz', chapters: chaptersOf(qz.keys), seed: qz.seed + 1, quiz: { t: qz.title, link: location.href } });
    });
    main.querySelector('#qz-share').addEventListener('click', function () { sharePanel(main.querySelector('#qz-panel'), { keys: qz.keys, timed: qz.timed, title: qz.title, seed: qz.seed, fixed: location.href }); });
  }
  function loadQR() {
    if (KS.qr) return Promise.resolve();
    return loadScript('js/qr.js');
  }
  /* o: { keys, timed, title, seed, fixed (an existing link to reuse) } */
  function sharePanel(box, o) {
    var seed = o.seed != null ? o.seed : (Math.random() * 4294967296) >>> 0;
    box.innerHTML = '<section class="share" aria-label="Share this quiz">' +
      '<div class="share__form"><h2>Share this quiz</h2>' +
        (o.fixed ? '' : '<label class="share__label" for="sh-title">Quiz title</label><input id="sh-title" class="share__input" type="text" maxlength="60" value="' + esc(o.title || 'Practice quiz') + '">') +
        '<label class="share__label" for="sh-link">Link</label><input id="sh-link" class="share__input" type="text" readonly>' +
        '<div class="empty__actions"><button class="btn btn--solid" type="button" id="sh-copy">Copy link</button>' + (navigator.share ? '<button class="btn" type="button" id="sh-native">Share\u2026</button>' : '') + '<button class="btn" type="button" id="sh-dl">Download QR code</button></div>' +
        '<p class="muted share__note">' + plural(o.keys.length, 'question') + (o.timed ? ', timed' : ', untimed') + '. Residents open the link (or scan the code) and press Start; their answers stay on their own devices. Show the QR code on a projector so the room can scan it.</p></div>' +
      '<div class="share__qr" id="sh-qr" aria-live="polite"></div></section>';
    var title = box.querySelector('#sh-title'), link = box.querySelector('#sh-link'), qr = box.querySelector('#sh-qr');
    function url() { return o.fixed || quizLink(o.keys, o.timed, title ? title.value.trim() : o.title, seed); }
    function paint() {
      var u = url(); link.value = u;
      loadQR().then(function () { qr.innerHTML = KS.qr.svg(u, { label: 'QR code for this quiz link' }); }).catch(function () { qr.innerHTML = '<p class="muted">The QR code could not be drawn. Share the link instead.</p>'; });
    }
    if (title) title.addEventListener('input', paint);
    box.querySelector('#sh-copy').addEventListener('click', function () {
      var u = url();
      (navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(u) : Promise.reject()).then(function () { toast('Link copied.'); })
        .catch(function () { link.select(); try { document.execCommand('copy'); toast('Link copied.'); } catch (e) { toast('Select the link and copy it.'); } });
    });
    var nat = box.querySelector('#sh-native');
    if (nat) nat.addEventListener('click', function () { navigator.share({ title: title ? title.value : o.title, url: url() }).catch(function () {}); });
    box.querySelector('#sh-dl').addEventListener('click', function () {
      loadQR().then(function () { savePdf(new Blob([KS.qr.svg(url())], { type: 'image/svg+xml' }), slug(title ? title.value || 'quiz' : o.title) + '-qr.svg'); });
    });
    paint();
    box.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
  }

  function renderExamSetup() {
    var chs = allChapters();
    var active = store.get('exam', null);
    var hist = store.get('examHistory', []);
    var prefs = store.get('examPrefs', { chapters: chs.map(function (c) { return c.id; }), count: 20, timed: true });
    var doms = prefs.domains || DOMAINS.map(function (d) { return d[0]; });
    var html = '<div class="wrap page exam-setup">' +
      '<header class="page__head"><h1>Board-style exam</h1><p>Single-best-answer clinical cases drawn at random from the chapters you choose. Answer choices are shuffled. Timed exams allow ' + SECS_PER_Q + ' seconds per question, about board pace.</p></header>' +
      (active ? '<div class="banner"><p>You have an exam in progress: ' + plural(active.items.length, 'question') + ', ' + active.items.filter(function (x) { return x.a != null; }).length + ' answered.</p><div class="empty__actions"><a class="btn btn--solid" href="#/exam/run">Resume exam</a><button class="btn" type="button" id="ex-discard">Discard it</button></div></div>' : '') +
      '<form class="exam-form" id="ex-form" onsubmit="return false">' +
        '<fieldset><legend>Chapters</legend>' + chs.map(function (ch) {
          return '<label class="check"><input type="checkbox" name="ch" value="' + ch.id + '"' + (prefs.chapters.indexOf(ch.id) > -1 ? ' checked' : '') + '> Chapter ' + ch.number + ': ' + esc(ch.short || ch.title) + ' <span class="muted">(' + (ch.cases || []).length + ' cases)</span></label>';
        }).join('') + '</fieldset>' +
        '<fieldset><legend>Board domain <span class="muted">(ABPN content outline)</span></legend><div class="dom-tools"><button class="btn btn--small" type="button" id="dom-all">All</button><button class="btn btn--small" type="button" id="dom-none">None</button></div>' + DOMAINS.map(function (d) {
          return '<label class="check"><input type="checkbox" name="dom" value="' + d[0] + '"' + (doms.indexOf(d[0]) > -1 ? ' checked' : '') + '> ' + esc(d[1]) + ' <span class="muted" data-domn="' + d[0] + '"></span></label>';
        }).join('') + '</fieldset>' +
        '<fieldset><legend>Questions</legend><div class="seg">' + [10, 20, 40, 0].map(function (n) {
          return '<label><input type="radio" name="count" value="' + n + '"' + (prefs.count === n ? ' checked' : '') + '><span>' + (n ? n : 'All') + '</span></label>';
        }).join('') + '</div></fieldset>' +
        '<fieldset><legend>Timing</legend><div class="seg">' +
          '<label><input type="radio" name="timed" value="1"' + (prefs.timed ? ' checked' : '') + '><span>Timed</span></label>' +
          '<label><input type="radio" name="timed" value="0"' + (!prefs.timed ? ' checked' : '') + '><span>Untimed</span></label>' +
        '</div></fieldset>' +
        '<p class="exam-form__sum" id="ex-sum"></p>' +
        '<div class="empty__actions"><button class="btn btn--solid" type="button" id="ex-start">Start exam</button><button class="btn" type="button" id="ex-share">Share as a quiz link</button></div>' +
      '</form><div id="ex-share-box"></div>' +
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
      var dm = Array.prototype.map.call(form.querySelectorAll('input[name=dom]:checked'), function (i) { return i.value; });
      var all = caseKeys(sel);
      var keys = all.filter(function (k) { return dm.indexOf(caseDomain(CARDS[k].c)) > -1; });
      var pool = keys.length;
      var n = count ? Math.min(count, pool) : pool;
      return { chapters: sel, count: count, timed: timed, n: n, pool: pool, keys: keys, all: all, domains: dm };
    }
    function summary() {
      var r = read();
      var per = {};
      r.all.forEach(function (k) { var d = caseDomain(CARDS[k].c); per[d] = (per[d] || 0) + 1; });
      main.querySelectorAll('[data-domn]').forEach(function (s) { s.textContent = '(' + (per[s.getAttribute('data-domn')] || 0) + ')'; });
      main.querySelector('#ex-sum').textContent = r.pool ? plural(r.n, 'question') + ' from ' + plural(r.chapters.length, 'chapter') + (r.timed ? ', ' + fmtClock(r.n * SECS_PER_Q) + ' on the clock.' : ', no time limit.') : !r.chapters.length ? 'Choose at least one chapter.' : !r.domains.length ? 'Choose at least one board domain.' : 'No questions match these choices.';
      main.querySelector('#ex-start').disabled = !r.pool; main.querySelector('#ex-share').disabled = !r.pool;
    }
    form.addEventListener('change', summary); summary();
    function setDoms(on) { form.querySelectorAll('input[name=dom]').forEach(function (i) { i.checked = on; }); summary(); }
    main.querySelector('#dom-all').addEventListener('click', function () { setDoms(true); });
    main.querySelector('#dom-none').addEventListener('click', function () { setDoms(false); });
    function savePrefs(r) { store.set('examPrefs', { chapters: r.chapters, count: r.count, timed: r.timed, domains: r.domains }); }
    main.querySelector('#ex-start').addEventListener('click', function () {
      var r = read(); if (!r.pool) return;
      savePrefs(r);
      startExam({ keys: shuffle(r.keys.slice()).slice(0, r.n), timed: r.timed, chapters: r.chapters });
    });
    main.querySelector('#ex-share').addEventListener('click', function () {
      var r = read(); if (!r.pool) return;
      savePrefs(r);
      sharePanel(main.querySelector('#ex-share-box'), { keys: shuffle(r.keys.slice()).slice(0, r.n), timed: r.timed, title: 'Practice quiz' });
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
      ex.items.forEach(function (x) { if (x.a === CARDS[x.k].c.answer) score++; else if (ex.kind !== 'pre') addMistake(x.k, 'exam'); });
      var used = Math.round((Date.now() - ex.at) / 1000);
      if (ex.limit) used = Math.min(used, ex.limit);
      var rec = { id: ex.id, at: ex.at, chapters: ex.chapters, timed: ex.timed, limit: ex.limit, used: used, expired: !!expired, score: score, total: ex.items.length, kind: ex.kind || 'exam', ch: ex.ch || null, quiz: ex.quiz || null, items: ex.items.map(function (x) { return { k: x.k, o: x.o, a: x.a, f: x.f }; }) };
      if ((ex.kind === 'pre' || ex.kind === 'post') && ex.ch) {
        var pp = store.get('prepost', {}) || {};
        pp[ex.ch] = pp[ex.ch] || {};
        pp[ex.ch][ex.kind] = { s: score, t: ex.items.length, at: Date.now() };
        store.set('prepost', pp);
      }
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
    var byTopic = {}, byCh = {}, byDom = {};
    items.forEach(function (x) {
      var r = CARDS[x.k], ok = x.a === r.c.answer;
      var dk = domainName(caseDomain(r.c));
      (byDom[dk] = byDom[dk] || { n: 0, ok: 0 }).n++; if (ok) byDom[dk].ok++;
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
      '<header class="page__head"><p class="crumb"><a href="#/exam">Exam mode</a></p><h1>' + (ex.kind === 'pre' ? 'Pre-test results' : ex.kind === 'post' ? 'Post-test results' : ex.quiz ? esc(ex.quiz.t) : 'Exam results') + '</h1><p>' + fmtDate(ex.at) + (ex.expired ? '. Time ran out and the exam was submitted automatically.' : '.') + '</p></header>' +
      prepostResult(ex) +
      '<div class="score"><p class="score__big">' + p + '<span>%</span></p><div><p class="score__line"><b>' + ex.score + ' of ' + ex.total + '</b> correct</p><p class="score__line">' + fmtClock(ex.used) + (ex.limit ? ' of ' + fmtClock(ex.limit) : '') + ' used, ' + fmtClock(ex.total ? ex.used / ex.total : 0) + ' per question</p></div></div>' +
      '<div class="empty__actions results-actions">' +
        (missed ? '<a class="btn btn--solid" href="#/exam/review/' + ex.id + '/missed">Review what I missed (' + missed + ')</a>' : '') +
        '<a class="btn' + (missed ? '' : ' btn--solid') + '" href="#/exam/review/' + ex.id + '/all">Review all questions</a>' +
        (missed ? '<a class="btn" href="#/mistakes">Practice mistakes</a>' : '') +
        '<a class="btn" href="#/exam">New exam</a><button class="btn" type="button" id="ex-reshare">Share these questions</button></div><div id="ex-reshare-box"></div>' +
      '<section class="results-sec"><h2>Score by topic</h2><p class="muted">Weakest first.</p><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Topic</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' + rows(byTopic, true) + '</tbody></table></div></section>' +
      '<section class="results-sec"><h2>Score by board domain</h2><p class="muted">ABPN content outline, Dimension 2.</p><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Domain</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' + rows(byDom, true) + '</tbody></table></div></section>' +
      '<section class="results-sec"><h2>Score by chapter</h2><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Chapter</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' + rows(byCh, false) + '</tbody></table></div></section>' +
      '</div>';
    setView('exam-results:' + id, html);
    document.title = 'Exam results — K&S Study Companion';
    main.querySelector('#ex-reshare').addEventListener('click', function () {
      sharePanel(main.querySelector('#ex-reshare-box'), ex.quiz && ex.quiz.link ? { keys: items.map(function (x) { return x.k; }), timed: ex.timed, title: ex.quiz.t, fixed: ex.quiz.link } :
        { keys: items.map(function (x) { return x.k; }), timed: ex.timed, title: ex.kind === 'pre' || ex.kind === 'post' ? 'Chapter quiz' : 'Exam questions' });
    });
  }
  function prepostResult(ex) {
    if ((ex.kind !== 'pre' && ex.kind !== 'post') || !ex.ch) return '';
    var c = chapter(ex.ch), pp = (store.get('prepost', {}) || {})[ex.ch] || {};
    if (!c) return '';
    var msg = ex.kind === 'pre'
      ? 'Read the study guide next, paying attention to the topics you missed below, then take the post-test.'
      : (pp.pre ? 'Pre-test ' + pct(pp.pre.s, pp.pre.t) + '%, post-test ' + pct(ex.score, ex.total) + '%.' : 'You have not taken the pre-test for this chapter.');
    return '<div class="banner"><p><b>Chapter ' + c.number + ': ' + esc(c.short || c.title) + '.</b> ' + msg + '</p><div class="empty__actions"><a class="btn btn--solid" href="#/c/' + c.id + '/guide">Open the study guide</a></div></div>';
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
      return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(c.choices[orig]) + note + whyNotHTML(c.whyNot, orig, c.answer) + '</span></div></li>';
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
    Object.keys(aliases).forEach(function (a) { if (map[String(aliases[a]).toLowerCase()]) forms.push(a.toLowerCase()); });
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
      if (GL.aliases[t] && GL.map[String(GL.aliases[t]).toLowerCase()]) return GL.map[String(GL.aliases[t]).toLowerCase()];
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
    var hs = (KS.helpers || []).slice().sort(function (x, y) {
      var a = chapter(x.chapter), b = chapter(y.chapter);
      return (a ? a.number : 99) - (b ? b.number : 99);
    });
    var html = '<div class="wrap page"><header class="page__head"><h1>Diagnostic helpers</h1><p>Step-by-step decision aids built from the chapters. Each one asks a few questions and shows the reasoning behind the likely diagnosis or workup.</p></header>' +
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
        return '<li><p class="trail__q">' + esc(h.nodes[s.node].q) + '</p><p class="trail__a">' + esc(s.label) + '</p>' + (s.note ? '<p class="trail__note">' + esc(s.note) + '</p>' : '') +
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
          '<h3>Why</h3><ul class="result-card__why">' + path.map(function (s) { return '<li>' + esc(s.note || (h.nodes[s.node].q.replace(/\?$/, '') + ': ' + s.label)) + '</li>'; }).join('') + '</ul>' +
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

  /* ---------- printable handout ----------
     One sheet per chapter built from the high-yield list. The font size is fitted automatically
     so the chosen topics fill exactly one page; "Fill-in worksheet" turns every bold fact into a blank. */
  /* Sheets are sized to the area inside the page margins, with spare height, because some browsers
     (Safari on iPhone and iPad) ignore @page margins and add their own, plus a URL and date line. */
  var PAPER = {
    a4: { label: 'A4', w: '186mm', h: '262mm', page: 'A4', margin: '12mm' },
    letter: { label: 'Letter', w: '7.5in', h: '9.55in', page: 'letter', margin: '0.5in' }
  };
  var ATTRIBUTION = 'App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com';

  function renderHandout(ch) {
    if (!(ch.highYield || []).length) return renderMissing();
    var prefs = store.get('handoutPrefs', { paper: 'a4', mode: 'key', pages: 1 });
    if (!PAPER[prefs.paper]) prefs.paper = 'a4';
    var hyCount = 0; ch.highYield.forEach(function (t) { hyCount += t.items.length; });
    var MAX_PAGES = Math.min(ch.highYield.length, hyCount > 150 ? 4 : 2);
    if (!(prefs.pages >= 1 && prefs.pages <= MAX_PAGES)) prefs.pages = 1;
    prefs.pages = Math.round(prefs.pages);
    var MIN_PT = 6.5, COMFORT_PT = 7, autoTwo = false, lastSize = 0;
    var PAGE_WORDS = ['', 'one page', 'two pages', 'three pages', 'four pages'];
    var on = {};
    ch.highYield.forEach(function (t) { on[t.id] = true; });
    function seg(name, opts, cur) {
      return '<div class="seg" role="radiogroup">' + opts.map(function (o) {
        return '<label><input type="radio" name="' + name + '" value="' + o[0] + '"' + (String(o[0]) === String(cur) ? ' checked' : '') + '><span>' + o[1] + '</span></label>';
      }).join('') + '</div>';
    }
    var html = '<div class="wrap page handout-page">' +
      '<header class="page__head no-print"><p class="crumb"><a href="#/c/' + ch.id + '/high-yield">Chapter ' + ch.number + ' high yield</a></p><h1>Printable handout</h1>' +
        '<p>A print-ready sheet from the Chapter ' + ch.number + ' high-yield list. The type size adjusts automatically to fill the page; untick topics to make room or to focus a session.</p></header>' +
      '<div class="handout-tools no-print">' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Paper</span>' + seg('paper', [['a4', 'A4'], ['letter', 'Letter']], prefs.paper) + '</div>' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Version</span>' + seg('mode', [['key', 'Answer key'], ['blank', 'Fill-in worksheet']], prefs.mode) + '</div>' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Length</span>' + seg('pages', [[1, 'One page'], [2, MAX_PAGES > 2 ? 'Two pages' : 'Two pages (front and back)'], [3, 'Three pages'], [4, 'Four pages']].slice(0, MAX_PAGES), prefs.pages) + '</div>' +
        '<details class="handout-topics"><summary id="ho-sum"></summary><div class="handout-topics__list">' + ch.highYield.map(function (t) {
          return '<label class="check"><input type="checkbox" data-topic="' + t.id + '" checked> ' + esc(t.topic) + ' <span class="muted">(' + t.items.length + ')</span></label>';
        }).join('') + '</div></details>' +
        '<div class="handout-tools__go"><button class="btn btn--solid" type="button" id="ho-pdf">Download PDF</button><button class="btn" type="button" id="ho-print">Print instead</button><p class="handout-fit" id="ho-fit" aria-live="polite"></p></div>' +
      '</div>' +
      '<div class="sheet-frame" id="ho-frame"><div class="sheets" id="ho-sheets"></div></div>' +
      '</div>';
    setView('handout:' + ch.id, html);
    document.title = 'Ch ' + ch.number + ' handout — K&S Study Companion';
    document.body.classList.add('print-handout');
    var pageStyle = document.createElement('style');
    pageStyle.id = 'page-size';
    document.head.appendChild(pageStyle);
    var frame = main.querySelector('#ho-frame'), wrap = main.querySelector('#ho-sheets'), fitMsg = main.querySelector('#ho-fit'), printBtn = main.querySelector('#ho-print'), pdfBtn = main.querySelector('#ho-pdf');
    var curGroups = [];

    function weight(t) { var n = 0; t.items.forEach(function (it) { n += plain(it).length + 40; }); return n + 60; }
    function split(topics, k) {
      // keep topic order; start a new sheet once the running total passes each equal share of the text
      k = Math.min(k, topics.length);
      if (k <= 1) return [topics];
      var total = 0; topics.forEach(function (t) { total += weight(t); });
      var groups = [[]], acc = 0;
      topics.forEach(function (t, i) {
        var w = weight(t), g = groups.length;
        var left = topics.length - i;           // topics still to place, including this one
        var need = k - g;                       // sheets still to open after the current one
        var cur = groups[g - 1];
        if (cur.length && g < k && (acc + w / 2 > total * g / k || left <= need)) { groups.push([t]); }
        else cur.push(t);
        acc += w;
      });
      return groups;
    }
    function sheetHTML(topics, idx, count) {
      var paper = PAPER[prefs.paper], blank = prefs.mode === 'blank';
      return '<div class="sheet' + (blank ? ' sheet--blank' : '') + '" style="width:' + paper.w + ';height:' + paper.h + '">' +
        '<header class="sheet__head"><div><p class="sheet__kicker">High-yield ' + (blank ? 'worksheet' : 'handout') + (count > 1 ? ', page ' + (idx + 1) + ' of ' + count : '') + '</p><h1>Chapter ' + ch.number + ': ' + esc(ch.title) + '</h1></div>' +
          '<p class="sheet__src">Kaplan &amp; Sadock\u2019s Synopsis of Psychiatry, 12th ed.' + (blank && idx === 0 ? '<br>Name ____________________ Date __________' : '') + '</p></header>' +
        '<div class="sheet__body">' + (topics.length ? '<div class="sheet__col"></div><div class="sheet__col"></div><div class="sheet__col"></div>' : '<p class="sheet__none">Choose at least one topic.</p>') + '</div>' +
        '<footer class="sheet__foot">' + esc(ATTRIBUTION) + '</footer></div>';
    }
    function build() {
      var paper = PAPER[prefs.paper];
      pageStyle.textContent = '@media print { @page { size: ' + paper.page + '; margin: ' + paper.margin + '; } }';
      var topics = ch.highYield.filter(function (t) { return on[t.id]; });
      var pages = Math.max(1, Math.min(prefs.pages, topics.length || 1));
      var groups = split(topics, pages);
      curGroups = groups;
      wrap.innerHTML = groups.map(function (g, i) { return sheetHTML(g, i, groups.length); }).join('');
      wrap.querySelectorAll('.sheet__body').forEach(function (b, i) { b._topics = groups[i] || []; });
      main.querySelector('#ho-sum').textContent = 'Topics: ' + topics.length + ' of ' + ch.highYield.length + ' included';
      fit(topics.length, pages);
      scale();
    }
    /* Lay the topics out into three explicit columns. This is done by hand rather than with CSS
       multi-column, which Safari's print engine collapses into a single long column. */
    function colFull(col) { return col.scrollHeight > col.clientHeight + 1 || col.scrollWidth > col.clientWidth + 1; }
    var PRINT_SLACK = 0.96;  // leave 4% of the column height spare in case printed text runs slightly taller than on screen
    function flow(body, size) {
      body.style.fontSize = size + 'pt';
      var cols = body.querySelectorAll('.sheet__col');
      if (!cols.length) return true;
      if (!body._colH) body._colH = Math.floor(body.clientHeight * PRINT_SLACK);
      cols.forEach(function (c) { c.innerHTML = ''; c.style.height = body._colH + 'px'; });
      var ci = 0;
      function next() { ci++; return ci < cols.length; }
      var topics = body._topics || [];
      for (var t = 0; t < topics.length; t++) {
        var topic = topics[t], h = null, ul = null;
        for (var i = 0; i < topic.items.length; i++) {
          while (true) {
            var col = cols[ci];
            if (!ul || ul.parentNode !== col) {
              if (i === 0) {
                h = document.createElement('h2'); h.className = 'sheet__h'; h.textContent = topic.topic;
                col.appendChild(h);
              }
              ul = document.createElement('ul'); ul.className = 'sheet__list';
              col.appendChild(ul);
            }
            var li = document.createElement('li'); li.innerHTML = fmt(topic.items[i]);
            ul.appendChild(li);
            if (!colFull(col)) break;
            // does not fit: take it back (with an orphaned heading) and move to the next column
            ul.removeChild(li);
            if (!ul.children.length) { col.removeChild(ul); if (i === 0 && h && h.parentNode === col) col.removeChild(h); }
            ul = null;
            if (!next()) return false;
          }
        }
      }
      return true;
    }
    function fitOne(body) {
      var lo = 4.5, hi = 11, best = lo;
      if (flow(body, hi)) return hi;
      for (var k = 0; k < 12; k++) {
        var mid = (lo + hi) / 2;
        if (flow(body, mid)) { best = mid; lo = mid; } else hi = mid;
      }
      return best;
    }
    function fit(n, pages) {
      var bodies = wrap.querySelectorAll('.sheet__body');
      if (!n) { fitMsg.textContent = ''; printBtn.disabled = pdfBtn.disabled = true; return; }
      var best = 11;
      bodies.forEach(function (b) { best = Math.min(best, fitOne(b)); });
      var size = Math.floor(best * 0.97 * 10) / 10;   // a little slack for printer rendering
      lastSize = size;
      var bad = false;
      bodies.forEach(function (b) { if (!flow(b, size)) bad = true; });
      var tooSmall = bad || size < MIN_PT;
      printBtn.disabled = pdfBtn.disabled = tooSmall;
      fitMsg.className = 'handout-fit' + (tooSmall ? ' is-warn' : '');
      fitMsg.textContent = tooSmall
        ? 'Too long for ' + PAGE_WORDS[pages] + ' at a readable size. ' + (pages < MAX_PAGES ? 'Choose more pages, or untick a topic or two.' : 'Untick a topic or two.')
        : (autoTwo && pages > 1 ? 'This chapter is too long for one page at a readable size, so ' + PAGE_WORDS[pages] + ' are selected. ' : '') +
          'Fits on ' + PAGE_WORDS[pages] + ' at ' + size + ' pt.' + (autoTwo && pages > 1 ? ' Untick topics to use fewer pages.' : '');
    }
    function scale() {
      var sheets = wrap.querySelectorAll('.sheet');
      var avail = frame.clientWidth;
      if (!sheets.length) return;
      var w = sheets[0].offsetWidth, h = sheets[0].offsetHeight, gap = 24;
      var s = Math.min(1, avail / w);
      wrap.style.transform = s < 1 ? 'scale(' + s + ')' : '';
      frame.style.height = ((h + gap) * sheets.length - gap) * s + 'px';
    }
    main.querySelectorAll('input[name=paper], input[name=mode], input[name=pages]').forEach(function (i) {
      i.addEventListener('change', function () { if (i.name === 'pages') autoTwo = false; prefs[i.name] = i.name === 'pages' ? parseInt(i.value, 10) : i.value; store.set('handoutPrefs', prefs); build(); });
    });
    main.querySelectorAll('[data-topic]').forEach(function (i) {
      i.addEventListener('change', function () { on[i.getAttribute('data-topic')] = i.checked; build(); });
    });
    printBtn.addEventListener('click', function () { if (!printBtn.disabled) window.print(); });
    pdfBtn.addEventListener('click', function () {
      if (pdfBtn.disabled) return;
      var blob = window.KS && KS.handoutPdf && KS.handoutPdf({
        paper: prefs.paper, blank: prefs.mode === 'blank', groups: curGroups, number: ch.number, title: ch.title, attribution: ATTRIBUTION });
      if (!blob) { toast('Could not build the PDF. Try Print instead.'); return; }
      var name = 'KS-Ch' + ch.number + (prefs.mode === 'blank' ? '-worksheet-' : '-handout-') + PAPER[prefs.paper].label.toLowerCase() + '.pdf';
      var file = null;
      try { file = new File([blob], name, { type: 'application/pdf' }); } catch (e) {}
      var touch = 'ontouchend' in document;
      if (touch && file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
        navigator.share({ files: [file], title: name }).catch(function (e) { if (e && e.name !== 'AbortError') saveBlob(blob, name); });
      } else saveBlob(blob, name);
    });
    function saveBlob(blob, name) {
      var url = URL.createObjectURL(blob), a = document.createElement('a');
      a.href = url; a.download = name; a.rel = 'noopener'; document.body.appendChild(a); a.click();
      setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 4000);
    }
    var onResize = function () { scale(); };
    window.addEventListener('resize', onResize);
    function initial() {
      build();
      // add pages automatically when the type would otherwise be too small to read comfortably
      while ((printBtn.disabled || lastSize < COMFORT_PT) && prefs.pages < MAX_PAGES) {
        prefs.pages += 1; autoTwo = true;
        var r = main.querySelector('input[name=pages][value="' + prefs.pages + '"]'); if (r) r.checked = true;
        build();
      }
    }
    initial();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (main.contains(wrap)) build(); });
    view.cleanup = function () {
      window.removeEventListener('resize', onResize);
      document.body.classList.remove('print-handout');
      if (pageStyle.parentNode) pageStyle.parentNode.removeChild(pageStyle);
    };
  }

  /* ---------- all high-yield PDFs (for educators) ----------
     One compiled, two-column PDF of every chapter's high-yield list (or any single chapter), paginated
     with running headers and page numbers. Unlike the per-chapter handout, this one flows across as many
     pages as a chapter needs, at a fixed comfortable size, rather than shrinking to fit one sheet. */
  function renderAllHighYield() {
    var chs = allChapters().slice().sort(function (a, b) { return a.number - b.number; });
    var classes = DRUG ? DRUG.classesInfo() : [];
    var prefs = store.get('allHyPrefs', { paper: 'a4' });
    if (!PAPER[prefs.paper]) prefs.paper = 'a4';
    function seg(name, opts, cur) {
      return '<div class="seg" role="radiogroup">' + opts.map(function (o) {
        return '<label><input type="radio" name="' + name + '" value="' + o[0] + '"' + (String(o[0]) === String(cur) ? ' checked' : '') + '><span>' + o[1] + '</span></label>';
      }).join('') + '</div>';
    }
    var html = '<div class="wrap page">' +
      '<header class="page__head"><h1>All high-yield summaries (PDF)</h1>' +
        '<p>Every chapter’s high-yield list in one two-column PDF, each chapter starting on a new page, with page numbers. For a one-page sheet or a fill-in worksheet of a single chapter, use the high-yield PDF on each chapter’s high-yield page.</p></header>' +
      '<div class="handout-tools no-print">' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Paper</span>' + seg('paper', [['a4', 'A4'], ['letter', 'Letter']], prefs.paper) + '</div>' +
        '<div class="handout-tools__go"><button class="btn btn--solid" type="button" id="ahy-all">Create PDF of all ' + chs.length + ' chapters</button><p class="ahy-status" id="ahy-status" aria-live="polite"></p></div>' +
      '</div>' +
      '<div class="ahy-grid">' + chs.map(function (ch) {
        return '<button class="btn" type="button" data-ch="' + ch.id + '">Ch ' + ch.number + ' PDF</button>';
      }).join('') + '</div>' +
      (classes.length ?
        '<h2 class="ahy-subhead">Drug class PDFs</h2>' +
        '<p class="ahy-sub">Every drug’s mechanism, dosing and key warnings, grouped by class, in the same two-column format — one class per page or two, or every class combined into one reference.</p>' +
        '<div class="handout-tools no-print">' +
          '<div class="handout-tools__go"><button class="btn btn--solid" type="button" id="ahy-cls-all">Create PDF of all ' + classes.length + ' drug classes</button><p class="ahy-status" id="ahy-cls-status" aria-live="polite"></p></div>' +
        '</div>' +
        '<div class="ahy-grid">' + classes.map(function (c) {
          return '<button class="btn" type="button" data-cls="' + c.id + '">' + esc(c.label) + ' PDF</button>';
        }).join('') + '</div>'
      : '') +
      ((KS.lookalikes || []).length ?
        '<h2 class="ahy-subhead">Look-alike PDFs</h2>' +
        '<p class="ahy-sub">Comparison tables of conditions that are easy to confuse, one landscape page each, as an answer key or a blank worksheet to fill in. <a href="#/compare">Open look-alikes</a></p>' +
        '<div class="handout-tools no-print">' +
          '<div class="handout-tools__row"><span class="handout-tools__label">Version</span>' + seg('la-ver', [['0', 'Answer key'], ['1', 'Blank worksheet']], laPrefs().blank ? '1' : '0') + '</div>' +
          '<div class="handout-tools__go"><button class="btn btn--solid" type="button" id="ahy-la-all">Create PDF of all ' + plural(KS.lookalikes.length, 'comparison') + '</button><p class="ahy-status" id="ahy-la-status" aria-live="polite"></p></div>' +
        '</div>' +
        '<div class="ahy-grid">' + chs.filter(function (ch) { return comparisonsInChapter(ch.id).length; }).map(function (ch) {
          return '<button class="btn" type="button" data-la-ch="' + ch.id + '">Ch ' + ch.number + ' look-alikes (' + comparisonsInChapter(ch.id).length + ')</button>';
        }).join('') + '</div>'
      : '') +
    '</div>';
    setView('all-highyield', html);
    document.title = 'All high-yield summaries — K&S Study Companion';
    var status = main.querySelector('#ahy-status');
    var clsStatus = main.querySelector('#ahy-cls-status');
    main.querySelectorAll('input[name=paper]').forEach(function (i) {
      i.addEventListener('change', function () { prefs.paper = i.value; store.set('allHyPrefs', prefs); });
    });
    function build(statusEl, builderFn, name) {
      statusEl.className = 'ahy-status'; statusEl.textContent = 'Building ' + name + '…';
      setTimeout(function () {
        var blob = builderFn();
        if (!blob) { statusEl.className = 'ahy-status is-warn'; statusEl.textContent = 'Could not build that PDF.'; return; }
        savePdf(blob, name);
        statusEl.textContent = '';
      }, 10);
    }
    var allBtn = main.querySelector('#ahy-all');
    if (allBtn) allBtn.addEventListener('click', function () {
      build(status, function () {
        return window.KS && KS.allHighYieldPdf && KS.allHighYieldPdf({
          paper: prefs.paper, chapters: chs.map(function (ch) { return { number: ch.number, title: ch.title, highYield: ch.highYield || [] }; }), attribution: ATTRIBUTION
        });
      }, 'KS-all-highyield-' + PAPER[prefs.paper].label.toLowerCase() + '.pdf');
    });
    main.querySelectorAll('[data-ch]').forEach(function (b) {
      b.addEventListener('click', function () {
        var ch = chapter(b.getAttribute('data-ch'));
        if (!ch || !(ch.highYield || []).length) { status.className = 'ahy-status is-warn'; status.textContent = 'That chapter has no high-yield list.'; return; }
        build(status, function () {
          return window.KS && KS.allHighYieldPdf && KS.allHighYieldPdf({
            paper: prefs.paper, chapters: [{ number: ch.number, title: ch.title, highYield: ch.highYield || [] }], attribution: ATTRIBUTION
          });
        }, 'KS-Ch' + ch.number + '-highyield-' + PAPER[prefs.paper].label.toLowerCase() + '.pdf');
      });
    });
    main.querySelectorAll('input[name=la-ver]').forEach(function (i) {
      i.addEventListener('change', function () { var p = store.get('laPrefs', {}) || {}; p.blank = i.value === '1'; store.set('laPrefs', p); });
    });
    var laStatus = main.querySelector('#ahy-la-status'), laAll = main.querySelector('#ahy-la-all');
    if (laAll) laAll.addEventListener('click', function () {
      laPdf((KS.lookalikes || []).slice().sort(function (a, b) { return a.title.localeCompare(b.title); }), laPrefs().blank, prefs.paper, 'all', laStatus, 'Look-alikes reviewer');
    });
    main.querySelectorAll('[data-la-ch]').forEach(function (b) {
      b.addEventListener('click', function () {
        var ch = chapter(b.getAttribute('data-la-ch'));
        laPdf(comparisonsInChapter(ch.id), laPrefs().blank, prefs.paper, 'ch' + ch.number, laStatus, 'Chapter ' + ch.number + ' look-alikes');
      });
    });
    var clsAllBtn = main.querySelector('#ahy-cls-all');
    if (clsAllBtn) clsAllBtn.addEventListener('click', function () {
      build(clsStatus, function () { return DRUG && DRUG.classPdf('all', prefs.paper); }, 'KS-drug-classes-all-' + PAPER[prefs.paper].label.toLowerCase() + '.pdf');
    });
    main.querySelectorAll('[data-cls]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-cls');
        build(clsStatus, function () { return DRUG && DRUG.classPdf(id, prefs.paper); }, 'KS-drugs-' + id + '-' + PAPER[prefs.paper].label.toLowerCase() + '.pdf');
      });
    });
  }

  /* ---------- teaching mode ----------
     A full-screen presentation of one case at a time for group discussion.
     - Group tally: the presenter counts the room's votes per answer choice; reveal shows the spread.
     - Facilitator notes: discussion prompts for the presenter, in a side panel or a separate presenter window.
     - Session summary: score by topic and chapter, the questions to revisit, printable.
     Nothing here touches the review schedule or the mistakes pile. */
  var DECK_OF = { dx: ['diagnosis'], pharm: ['pharm'], found: ['foundations'], recall: ['diagnosis', 'pharm', 'foundations'] };
  var DECK_LABEL = { diagnosis: 'Diagnosis', pharm: 'Pharmacology', foundations: 'Foundations' };
  function teachItems(scope, kind) {
    var out = [];
    allChapters().forEach(function (ch) {
      if (scope !== 'all' && ch.id !== scope) return;
      if (kind === 'mcq') {
        (ch.cases || []).forEach(function (c) { out.push({ id: ch.id + '/' + c.id, ch: ch, c: c, notes: c.notes }); });
      } else if (DECK_OF[kind]) {
        DECK_OF[kind].forEach(function (dk) {
          (ch[dk] || []).forEach(function (c) { out.push({ id: ch.id + '/' + dk + '/' + c.id, ch: ch, rc: c, deck: dk, notes: c.notes }); });
        });
      } else if (kind === 'hy') {
        (ch.highYield || []).forEach(function (t) {
          (t.items || []).forEach(function (txt, i) {
            if (/\*\*.+?\*\*/.test(txt)) out.push({ id: ch.id + '/hy/' + t.id + '--' + i, ch: ch, topic: t.topic, text: txt, hy: true });
          });
        });
      } else if (ch.guide) {
        ch.guide.parts.forEach(function (pt) {
          pt.sections.forEach(function (s) {
            s.blocks.forEach(function (b, i) {
              if (b.type === 'case') out.push({ id: ch.id + '/' + s.id + '--' + i, ch: ch, sec: s, title: String(b.title || 'Case').replace(/^Chapter case:\s*/i, ''), text: b.text, point: b.point, notes: b.notes });
            });
          });
        });
      }
    });
    return out;
  }
  /* Kinds that are voted on: board-style questions (vote before the reveal) and the recall kinds
     (flashcards, high-yield blanks), where the room self-rates after the reveal. */
  function isRecall(kind) { return kind === 'dx' || kind === 'pharm' || kind === 'found' || kind === 'recall' || kind === 'hy'; }
  function isVoting(kind) { return kind === 'mcq' || isRecall(kind); }
  var BUCKETS = ['Knew it', 'Partly', 'Missed it'];
  function nBuckets(it, kind) { return kind === 'mcq' ? it.c.choices.length : isRecall(kind) ? 3 : 0; }
  function itemTag(it, kind) {
    if (kind === 'mcq') return it.c.tag || 'Case';
    if (kind === 'hy') return it.topic;
    if (isRecall(kind)) return (DECK_LABEL[it.deck] || '') + ' \u00b7 ' + (it.rc.tag || 'General');
    return it.sec.title;
  }
  function itemLabel(it, kind) {
    if (kind === 'mcq') return plain(it.c.q);
    if (kind === 'hy') return plain(it.text).replace(/\s+/g, ' ');
    if (isRecall(kind)) return plain(it.rc.q);
    return it.title;
  }
  /* Blank out the bold facts of a high-yield line; filled in on reveal. No answer text is in the page until then. */
  function blankify(text, reveal) {
    return fmt(text).replace(/<strong>(.+?)<\/strong>/g, function (m, g) {
      if (reveal) return '<mark class="hyfill">' + g + '</mark>';
      var w = Math.max(4, Math.min(24, plain(g).length));
      return '<span class="hyblank" role="img" aria-label="blank" style="min-width:' + w + 'ch"></span>';
    });
  }
  var KIND_NOUN = { mcq: 'question', dx: 'card', pharm: 'card', found: 'card', recall: 'card', hy: 'fact', chapter: 'chapter case' };
  var KIND_OPTS = [
    ['mcq', 'Board-style questions'], ['chapter', 'Chapter cases'], ['dx', 'Diagnosis flashcards (recall)'], ['pharm', 'Pharmacology flashcards (recall)'],
    ['found', 'Foundations flashcards (recall)'], ['recall', 'All three flashcard decks mixed (recall)'], ['hy', 'High-yield fill-in-the-blank']
  ];
  var KIND_HINT = {
    mcq: 'Single-best-answer vignettes. Count the room\u2019s votes, then reveal the answer and its explanation.',
    chapter: 'The textbook cases summarized in each study guide. Reveal shows the teaching point.',
    dx: 'Ask the question, discuss, reveal the answer, then count who knew it, who partly did and who missed it.',
    pharm: 'Ask the question, discuss, reveal the answer, then count who knew it, who partly did and who missed it.',
    found: 'Ask the question, discuss, reveal the answer, then count who knew it, who partly did and who missed it.',
    recall: 'Diagnosis, pharmacology and foundations cards together. Reveal the answer, then count who knew it.',
    hy: 'One high-yield fact at a time with its key terms blanked. Reveal fills the blanks, then count who knew it.'
  };
  function teachPrefs() {
    var p = store.get('teachPrefs', {}) || {};
    return { scope: p.scope || 'all', kind: p.kind || 'mcq', order: p.order || 'order', counts: p.counts || 'hide' };
  }

  /* --- tally helpers. A session log maps item id -> { v: [votes per choice], r: 1 once revealed }. --- */
  function tEnsure(S, id, n) {
    S.log = S.log || {};
    var e = S.log[id] || (S.log[id] = { v: [], r: 0 });
    while (e.v.length < n) e.v.push(0);
    return e;
  }
  function tSum(e) { var s = 0; if (e) for (var i = 0; i < e.v.length; i++) s += e.v[i]; return s; }
  function tStats(c, e) {
    var total = tSum(e), ok = (e && e.v[c.answer]) || 0, top = -1, topN = 0;
    if (e) e.v.forEach(function (n, i) { if (i !== c.answer && n > topN) { topN = n; top = i; } });
    return { total: total, ok: ok, pct: pct(ok, total), topWrong: top, topWrongN: topN };
  }
  /* Per-item stats for any voting kind. For recall kinds the "correct" bucket is "Knew it". */
  function tItemStats(it, kind, e) {
    if (kind === 'mcq') return tStats(it.c, e);
    var total = tSum(e), ok = (e && e.v[0]) || 0;
    return { total: total, ok: ok, pct: pct(ok, total), partly: (e && e.v[1]) || 0, missed: (e && e.v[2]) || 0, topWrong: -1, topWrongN: 0 };
  }
  function tVerdict(p) { return p >= 70 ? 'The room mostly had it.' : p >= 40 ? 'The room was split.' : 'Most of the room missed this one.'; }
  function tVerdictRecall(p) { return p >= 70 ? 'Most of the room knew this.' : p >= 40 ? 'The room was split on this.' : 'Most of the room did not know this.'; }
  var REVISIT_BELOW = 60;

  /* --- facilitator notes. Built from what the app already knows about the case; a case may carry its
         own `notes: { ask: [], watch: "", extend: [] }` (markdown-style bold allowed), which comes first. --- */
  function tagPrompts(tag) {
    var t = String(tag || '').toLowerCase();
    if (/suicid|safety/.test(t)) return ['What would you ask, and how would you word it? What protective and risk factors change the disposition?', 'What would make you admit rather than follow up in clinic?'];
    if (/side effect|monitor|clozapine|tardive|lai/.test(t)) return ['What would you monitor, how often, and what result would make you change course?', 'What do you tell the patient up front so they do not stop the drug on their own?'];
    if (/drug details|novel|neurostim/.test(t)) return ['What distinguishes this treatment from its closest neighbor?', 'Who is it for, and who should not get it?'];
    if (/medical|workup|neurolog|mimic/.test(t)) return ['What would you rule out before accepting a psychiatric explanation, and with which test?', 'Which finding in the stem should have raised the medical question?'];
    if (/treat|psychotherapy|maintenance|response|agitation|special|older|bereave/.test(t)) return ['What is the goal right now: acute control, relapse prevention or tolerability?', 'What would you check before starting, and when would you expect to judge response?'];
    if (/epidemiolog|genetic|neurobio|comorbid|prognos|course/.test(t)) return ['Which number or mechanism does the room remember, and where did they learn it?', 'How would this fact change what you tell a patient or family?'];
    return ['Which features in the stem point to the answer? Which argue against the runner-up?', 'What single detail, if changed, would make a different choice correct?'];
  }
  function wrongChoiceRows(c, e) {
    var s = tStats(c, e);
    return c.choices.map(function (txt, i) { return { i: i, txt: txt }; }).filter(function (r) { return r.i !== c.answer; }).map(function (r) {
      var n = e ? (e.v[r.i] || 0) : 0;
      return '<li><b>' + LETTERS[r.i] + '.</b> ' + fmt(r.txt) + (c.whyNot && c.whyNot[r.i] ? ' <span class="pn__why">' + fmt(c.whyNot[r.i]) + '</span>' : '') + (n ? ' <span class="pn__tag' + (r.i === s.topWrong ? ' is-top' : '') + '">' + plural(n, 'vote') + (r.i === s.topWrong ? ', most chosen wrong answer: start here' : '') + '</span>' : '') + '</li>';
    }).join('');
  }
  function teachNotesHtml(it, kind, e) {
    var a = it.notes || {}, h = '', asks = [], extend = [];
    if (isRecall(kind)) return recallNotesHtml(it, kind, e);
    function list(arr) { return '<ul>' + arr.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul>'; }
    if (kind === 'mcq') {
      var c = it.c, s = tStats(c, e);
      asks = (a.ask || []).concat(['Before anyone votes: is this asking for a diagnosis, a next step or a mechanism?'], tagPrompts(c.tag));
      h += '<h3>Ask the room</h3>' + list(asks);
      h += '<h3>Anchor</h3><p><b>Answer ' + LETTERS[c.answer] + '.</b> ' + fmt(c.choices[c.answer]) + '</p><p>' + fmt(c.why) + '</p>';
      if (a.watch) h += '<p class="pn__watch"><b>Watch for:</b> ' + fmt(a.watch) + '</p>';
      if (s.total) h += '<p class="pn__live"><b>Live tally:</b> ' + s.ok + ' of ' + s.total + ' on the correct answer (' + s.pct + '%). ' + tVerdict(s.pct) + '</p>';
      h += '<h3>Probe the other choices</h3><p class="pn__hint">For each, ask what would have to change in the vignette for it to be right.</p><ul class="pn__wrong">' + wrongChoiceRows(c, e) + '</ul>';
      extend = (a.extend || []).concat(['Ask one resident to state the take-home in a single sentence.']);
      h += '<h3>Extend</h3>' + list(extend);
      h += '<p class="pn__links"><a href="#/c/' + it.ch.id + '/high-yield" target="_blank" rel="noopener">High-yield list</a> <a href="#/c/' + it.ch.id + '/guide" target="_blank" rel="noopener">Study guide</a> <a href="#/c/' + it.ch.id + '/cards/' + (c.tag ? 'cases' : 'cases') + '" target="_blank" rel="noopener">Case deck</a></p>';
    } else {
      asks = (a.ask || []).concat(['Before the reveal: name the diagnosis and two features that support it.', 'What single detail, if changed, would change the diagnosis?', 'What is the next step in management, and why that one?']);
      h += '<h3>Ask the room</h3>' + list(asks);
      h += '<h3>Anchor</h3><p>' + fmt(it.point || '') + '</p>';
      if (a.watch) h += '<p class="pn__watch"><b>Watch for:</b> ' + fmt(a.watch) + '</p>';
      extend = (a.extend || []).concat(['Which other disorder in this chapter does this case most resemble, and what separates them?']);
      h += '<h3>Extend</h3>' + list(extend);
      h += '<p class="pn__links"><a href="#/c/' + it.ch.id + '/guide/' + it.sec.id + '" target="_blank" rel="noopener">Open this study-guide section</a> <a href="#/c/' + it.ch.id + '/high-yield" target="_blank" rel="noopener">High-yield list</a></p>';
    }
    return h;
  }

  function recallNotesHtml(it, kind, e) {
    var a = it.notes || {}, h = '', s = tItemStats(it, kind, e);
    function list(arr) { return '<ul>' + arr.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul>'; }
    var asks, extend;
    if (kind === 'hy') {
      asks = (a.ask || []).concat(['Read the line aloud and have someone fill each blank before you reveal.', 'Why does this fact matter at the bedside or on the exam?']);
      h += '<h3>Ask the room</h3>' + list(asks);
      h += '<h3>Anchor</h3><p>' + blankify(it.text, true) + '</p>';
      extend = ['Which other fact in \u201c' + esc(it.topic) + '\u201d is easy to confuse with this one?'];
    } else {
      var rc = it.rc, dk = it.deck;
      var deckAsk = dk === 'pharm' ? ['Which drug or class is this, and what would you monitor or counsel?'] : dk === 'foundations' ? ['Where would a resident be tested on this, and what clinical decision does it change?'] : ['What would you ask or look for to confirm this at the bedside?'];
      asks = (a.ask || []).concat(['Have two residents answer in their own words before you reveal.'], deckAsk);
      h += '<h3>Ask the room</h3>' + list(asks);
      h += '<h3>Anchor</h3><p>' + fmt(rc.a) + '</p>' + (rc.why ? '<p>' + fmt(rc.why) + '</p>' : '');
      extend = (a.extend || []).concat(['Ask one resident to state the take-home in a single sentence.']);
    }
    if (a.watch) h += '<p class="pn__watch"><b>Watch for:</b> ' + fmt(a.watch) + '</p>';
    if (s.total) h += '<p class="pn__live"><b>Live tally:</b> ' + s.ok + ' of ' + s.total + ' knew it (' + s.pct + '%), ' + s.partly + ' partly, ' + s.missed + ' missed. ' + tVerdictRecall(s.pct) + '</p>';
    h += '<h3>Extend</h3>' + list(extend);
    var deckHref = kind === 'hy' ? 'high-yield' : 'cards/' + it.deck;
    h += '<p class="pn__links"><a href="#/c/' + it.ch.id + '/' + deckHref + '" target="_blank" rel="noopener">' + (kind === 'hy' ? 'High-yield list' : 'This deck') + '</a> <a href="#/c/' + it.ch.id + '/guide" target="_blank" rel="noopener">Study guide</a></p>';
    return h;
  }

  function saveTeachSession(S) {
    var list = store.get('teachSessions', []) || [];
    list = list.filter(function (r) { return r.id !== S.started; });
    list.unshift({ id: S.started, at: Date.now(), scope: S.scope, kind: S.kind, order: S.order, log: S.log || {} });
    store.set('teachSessions', list.slice(0, 10));
  }
  /* Totals for a finished (or in-progress) MCQ session. */
  function summarize(rec) {
    var byId = {}, kind = rec.kind, voting = isVoting(kind);
    teachItems(rec.scope, kind).forEach(function (it) { byId[it.id] = it; });
    var out = { polled: 0, presented: 0, votes: 0, ok: 0, byTopic: {}, byCh: {}, revisit: [], gotIt: 0, covered: [], skipped: [] };
    rec.order.forEach(function (id) {
      var it = byId[id], e = rec.log && rec.log[id];
      if (!it || !e) return;
      out.presented++;
      if (!voting) { (e.r ? out.covered : out.skipped).push(it); return; }
      var s = tItemStats(it, kind, e);
      if (!s.total) return;
      out.polled++; out.votes += s.total; out.ok += s.ok;
      if (s.pct >= REVISIT_BELOW) out.gotIt++;
      var t = 'Ch ' + it.ch.number + ', ' + itemTag(it, kind);
      var tb = out.byTopic[t] || (out.byTopic[t] = { n: 0, ok: 0, q: 0 }); tb.n += s.total; tb.ok += s.ok; tb.q++;
      var ck = 'Chapter ' + it.ch.number + ': ' + (it.ch.short || it.ch.title);
      var cb = out.byCh[ck] || (out.byCh[ck] = { n: 0, ok: 0, q: 0 }); cb.n += s.total; cb.ok += s.ok; cb.q++;
      if (s.pct < REVISIT_BELOW) out.revisit.push({ it: it, e: e, s: s });
    });
    out.revisit.sort(function (a, b) { return a.s.pct - b.s.pct || b.s.total - a.s.total; });
    return out;
  }

  var LIST_CAP = 300;
  function renderTeachSetup() {
    var prefs = teachPrefs();
    if (prefs.scope !== 'all' && !chapter(prefs.scope)) prefs.scope = 'all';
    var past = store.get('teachSessions', []) || [];
    var pastHtml = '';
    if (past.length) {
      pastHtml = '<section class="teach-past"><h2>Recent sessions</h2><ul>' + past.slice(0, 5).map(function (r) {
        var sm = summarize(r), line = isVoting(r.kind)
          ? plural(sm.polled, KIND_NOUN[r.kind] || 'item') + ' polled' + (sm.votes ? ', ' + pct(sm.ok, sm.votes) + '% ' + (r.kind === 'mcq' ? 'correct' : 'knew it') : '')
          : plural(sm.covered.length, 'chapter case') + ' discussed';
        return '<li><a href="#/teach/summary/' + r.id + '"><b>' + fmtDate(r.at) + '</b> <span class="muted">' + esc(line) + '</span></a></li>';
      }).join('') + '</ul></section>';
    }
    var html = '<div class="wrap page teach-setup">' +
      '<header class="page__head"><h1>Teaching mode</h1><p>Present one case at a time, full screen, for ward rounds, journal club or a group session. Count the room’s votes for each answer choice; the answer stays hidden until you reveal it, and then the spread shows. Facilitator notes keep your discussion prompts off the shared screen. A summary at the end shows what to revisit. Nothing here affects anyone’s review schedule or mistakes.</p></header>' +
      '<div class="exam-form">' +
        '<fieldset><legend>Chapter</legend><label class="select"><select id="t-scope"><option value="all"' + (prefs.scope === 'all' ? ' selected' : '') + '>All chapters</option>' +
          allChapters().map(function (ch) { return '<option value="' + ch.id + '"' + (prefs.scope === ch.id ? ' selected' : '') + '>Chapter ' + ch.number + ': ' + esc(ch.short || ch.title) + '</option>'; }).join('') + '</select></label></fieldset>' +
        '<fieldset><legend>What to present</legend><label class="select"><select id="t-kind">' +
          KIND_OPTS.map(function (o) { return '<option value="' + o[0] + '"' + (prefs.kind === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></label>' +
          '<p class="muted teach-setup__hint" id="t-hint"></p></fieldset>' +
        '<fieldset><legend>Order</legend><div class="seg">' +
          '<label><input type="radio" name="order" value="order"' + (prefs.order === 'order' ? ' checked' : '') + '><span>In order</span></label>' +
          '<label><input type="radio" name="order" value="shuffle"' + (prefs.order === 'shuffle' ? ' checked' : '') + '><span>Shuffled</span></label></div></fieldset>' +
        '<fieldset id="t-counts-set"><legend>Vote counts on screen</legend><div class="seg">' +
          '<label><input type="radio" name="counts" value="hide"' + (prefs.counts === 'hide' ? ' checked' : '') + '><span>Hide until reveal</span></label>' +
          '<label><input type="radio" name="counts" value="show"' + (prefs.counts === 'show' ? ' checked' : '') + '><span>Show as I count</span></label></div>' +
          '<p class="muted teach-setup__hint">Hiding keeps late voters from following the crowd. The presenter window always shows the live counts.</p></fieldset>' +
        '<button class="btn btn--solid" type="button" id="t-start">Start presenting</button>' +
      '</div>' + pastHtml +
      '<section class="teach-list"><h2 id="t-count"></h2><ol id="t-list"></ol></section></div>';
    setView('teach', html);
    document.title = 'Teaching mode — K&S Study Companion';
    function read() {
      prefs.scope = main.querySelector('#t-scope').value;
      prefs.kind = main.querySelector('#t-kind').value;
      prefs.order = main.querySelector('input[name=order]:checked').value;
      prefs.counts = main.querySelector('input[name=counts]:checked').value;
      store.set('teachPrefs', prefs);
    }
    function list() {
      read();
      var items = teachItems(prefs.scope, prefs.kind);
      main.querySelector('#t-counts-set').hidden = prefs.kind !== 'mcq';
      main.querySelector('#t-hint').textContent = KIND_HINT[prefs.kind] || '';
      main.querySelector('#t-count').textContent = plural(items.length, KIND_NOUN[prefs.kind] || 'item') + (items.length > LIST_CAP ? ' (listing the first ' + LIST_CAP + '; Start presenting runs all of them)' : '');
      main.querySelector('#t-list').innerHTML = items.slice(0, LIST_CAP).map(function (it, i) {
        var label = itemLabel(it, prefs.kind);
        var meta = 'Ch ' + it.ch.number + ', ' + itemTag(it, prefs.kind);
        return '<li><button type="button" class="teach-item" data-start="' + i + '"><span class="teach-item__meta">' + esc(meta) + '</span><span class="teach-item__q">' + esc(label.length > 170 ? label.slice(0, 170) + '…' : label) + '</span></button></li>';
      }).join('');
      main.querySelectorAll('[data-start]').forEach(function (b) { b.addEventListener('click', function () { start(parseInt(b.getAttribute('data-start'), 10)); }); });
    }
    function start(from) {
      read();
      var ids = teachItems(prefs.scope, prefs.kind).map(function (it) { return it.id; });
      if (!ids.length) return;
      var first = typeof from === 'number' ? ids[from] : null;
      if (prefs.order === 'shuffle') { shuffle(ids); if (first) { ids.splice(ids.indexOf(first), 1); ids.unshift(first); } }
      store.set('teach', { scope: prefs.scope, kind: prefs.kind, order: ids, pos: prefs.order === 'shuffle' || first === null ? 0 : from, started: Date.now(), counts: prefs.counts, log: {} });
      enterFullscreen();
      location.hash = '#/teach/run';
    }
    main.querySelector('#t-scope').addEventListener('change', list);
    main.querySelector('#t-kind').addEventListener('change', list);
    main.querySelectorAll('input[name=order], input[name=counts]').forEach(function (i) { i.addEventListener('change', list); });
    main.querySelector('#t-start').addEventListener('click', function () { start(null); });
    list();
  }

  function isFullscreen() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
  function enterFullscreen() {
    var el = document.documentElement;
    try { var r = (el.requestFullscreen || el.webkitRequestFullscreen).call(el); if (r && r.catch) r.catch(function () {}); } catch (e) { /* not supported */ }
  }
  function exitFullscreen() {
    try { if (isFullscreen()) { var r = (document.exitFullscreen || document.webkitExitFullscreen).call(document); if (r && r.catch) r.catch(function () {}); } } catch (e) {}
  }

  function renderTeachRun() {
    var S = store.get('teach', null);
    if (!S) { location.hash = '#/teach'; return; }
    var byId = {};
    teachItems(S.scope, S.kind).forEach(function (it) { byId[it.id] = it; });
    S.order = S.order.filter(function (id) { return byId[id]; });
    if (!S.order.length) { location.hash = '#/teach'; return; }
    S.pos = Math.max(0, Math.min(S.pos || 0, S.order.length - 1));
    S.log = S.log || {};
    if (!S.started) S.started = Date.now();
    var kind = S.kind, mcq = kind === 'mcq', recall = isRecall(kind), voting = mcq || recall;
    var st = { revealed: false, undo: [] }, buf = '', notesOpen = false;
    /* Questions are voted on before the reveal; recall items are rated after it. */
    function votable() { return voting && (mcq ? !st.revealed : st.revealed); }
    setView('teach-run', '<div class="teach" id="teach" role="region" aria-label="Teaching mode"></div>');
    document.title = 'Teaching mode — K&S Study Companion';
    document.body.classList.add('is-teaching');
    var box = main.querySelector('#teach');

    function curId() { return S.order[S.pos]; }
    function cur() { return byId[curId()]; }
    function persist() {
      store.set('teach', S);
      store.set('teachLive', { t: Date.now(), id: curId(), revealed: st.revealed, buf: buf });
    }

    function draw() {
      var it = cur(), e = S.log[curId()] || null;
      var meta = 'Chapter ' + it.ch.number + ', ' + itemTag(it, kind);
      var body, total = 0;
      function rows(labels, s, correct) {
        var show = recall || S.counts === 'show';
        return '<ul class="teach__choices' + (recall ? ' teach__choices--rate' : '') + '">' + labels.map(function (lab, i) {
          var n = e ? (e.v[i] || 0) : 0, share = s.total ? Math.round(n / s.total * 100) : 0, cls = '';
          if (mcq && st.revealed) cls = i === correct ? ' is-correct' : (i === s.topWrong ? ' is-wrong' : ' is-dim');
          else if (recall) cls = i === 0 && n ? ' is-correct' : '';
          else if (n) cls = ' is-picked';
          var reveal = mcq ? st.revealed : true;
          var badge = (reveal || show) && s.total ? '<span class="tchoice__n">' + n + (reveal ? ' · ' + share + '%' : '') + '</span>' : '';
          var bar = reveal && s.total ? '<span class="tchoice__bar" style="width:' + share + '%"></span>' : '';
          var can = votable();
          return '<li class="tc-row"><button type="button" class="tchoice' + cls + '" data-pick="' + i + '"' + (can ? '' : ' disabled') + '>' + bar + '<span class="tchoice__key">' + LETTERS[i] + '</span><span class="tchoice__txt">' + fmt(lab) + '</span>' + badge + '</button>' +
            (can ? '<button type="button" class="tminus" data-minus="' + i + '" aria-label="Remove one vote for ' + LETTERS[i] + '" title="Remove one vote">−</button>' : '') + '</li>';
        }).join('') + '</ul>';
      }
      if (mcq) {
        var c = it.c, s = tStats(c, e);
        total = s.total;
        body = '<p class="teach__stem">' + fmt(c.q) + '</p>' + rows(c.choices, s, c.answer) +
        (st.revealed ? '<div class="teach__answer"><p class="teach__label">Answer: ' + LETTERS[c.answer] + (s.total ? ' · ' + s.ok + ' of ' + s.total + ' (' + s.pct + '%) chose it' : '') + '</p>' +
          (s.total ? '<p class="teach__verdict">' + tVerdict(s.pct) + (s.topWrong > -1 ? ' Most chosen wrong answer: ' + LETTERS[s.topWrong] + ' (' + s.topWrongN + ').' : '') + '</p>' : '') +
          '<p>' + fmt(c.why) + '</p></div>' : '');
      } else if (recall) {
        var rs = tItemStats(it, kind, e), rc = it.rc;
        total = rs.total;
        var stem = kind === 'hy' ? '<p class="teach__stem teach__stem--hy">' + blankify(it.text, st.revealed) + '</p>' + (st.revealed ? '' : '<p class="teach__prompt">Fill in the blanks.</p>') : '<p class="teach__stem">' + fmt(rc.q) + '</p>';
        var ans = '';
        if (st.revealed && kind !== 'hy') ans = '<div class="teach__answer"><p class="teach__label">Answer</p><p>' + fmt(rc.a) + '</p>' + (rc.why ? '<p class="teach__why">' + fmt(rc.why) + '</p>' : '') + '</div>';
        var rate = st.revealed ? '<p class="teach__prompt">' + (rs.total ? rs.ok + ' of ' + rs.total + ' knew it. ' + tVerdictRecall(rs.pct) : 'Who knew it? Count the room.') + '</p>' + rows(BUCKETS, rs, 0) : '';
        body = stem + ans + rate;
      } else {
        body = '<h2 class="teach__title">' + esc(it.title) + '</h2><p class="teach__stem">' + fmt(it.text) + '</p>' +
          (st.revealed ? '<div class="teach__answer"><p class="teach__label">Teaching point</p><p>' + fmt(it.point || '') + '</p></div>' : '<p class="teach__prompt">What is the diagnosis, and what does this case teach?</p>');
      }
      var last = S.pos >= S.order.length - 1;
      box.innerHTML =
        '<div class="teach__bar"><span class="teach__meta">' + esc(meta) + '</span><span class="teach__pos">' + (mcq ? 'Question ' : recall ? (kind === 'hy' ? 'Fact ' : 'Card ') : 'Case ') + (S.pos + 1) + ' of ' + S.order.length + '</span>' +
          (voting ? '<span class="teach__votes" aria-live="polite">' + plural(total, mcq ? 'vote' : 'rating') + (buf ? ' · adding ' + esc(buf) : '') + '</span>' : '') +
          '<span class="teach__spacer"></span>' +
          '<button class="tbtn" type="button" id="t-notes" aria-expanded="' + notesOpen + '">Notes</button>' +
          '<button class="tbtn" type="button" id="t-presenter" title="Open the presenter view in its own window (P)">Presenter</button>' +
          '<button class="tbtn" type="button" id="t-fs">' + (isFullscreen() ? 'Exit full screen' : 'Full screen') + '</button>' +
          '<button class="tbtn" type="button" id="t-end">End session</button><button class="tbtn" type="button" id="t-exit">Close</button></div>' +
        '<div class="teach__stage"><div class="teach__inner' + (st.revealed ? ' is-revealed' : '') + '">' + body + '</div></div>' +
        '<div class="teach__nav"><button class="tbtn" type="button" id="t-prev"' + (S.pos ? '' : ' disabled') + '>Previous</button>' +
          (votable() ? '<button class="tbtn" type="button" id="t-undo"' + (st.undo.length ? '' : ' disabled') + '>Undo vote</button>' : '') +
          '<button class="tbtn tbtn--solid" type="button" id="t-reveal">' + (st.revealed ? 'Hide answer' : kind === 'chapter' ? 'Reveal teaching point' : 'Reveal answer') + '</button>' +
          (last ? '<button class="tbtn" type="button" id="t-next">Finish</button>' : '<button class="tbtn" type="button" id="t-next">Next</button>') + '</div>' +
        '<p class="teach__keys" aria-hidden="true">' + (recall ? 'After the reveal: A knew it, B partly, C missed \u00b7 type 5 then A adds 5 \u00b7 U undo \u00b7 ' : mcq ? 'Click or A–E add a vote · Shift+letter or − removes one · type 12 then B adds 12 · U undo · ' : '') + 'Space reveal · ← → move · N notes · P presenter window · F full screen · Esc close</p>' +
        (notesOpen ? '<aside class="teach__notes pn" aria-label="Facilitator notes"><div class="pn__head"><b>Facilitator notes</b><button class="pn__x" type="button" id="t-notes-x" aria-label="Close notes">×</button></div><p class="pn__warn">Visible to everyone while you share this screen. Use the presenter window to keep notes private.</p>' + teachNotesHtml(it, S.kind, e) + '</aside>' : '');
      linkTerms(box.querySelector('.teach__inner'), { skip: '.tchoice__key, .teach__label' });
      box.querySelectorAll('[data-pick]').forEach(function (b) {
        var i = parseInt(b.getAttribute('data-pick'), 10);
        b.addEventListener('click', function (ev) { addVote(i, ev.shiftKey ? -1 : 1); });
        b.addEventListener('contextmenu', function (ev) { ev.preventDefault(); addVote(i, -1); });
      });
      box.querySelectorAll('[data-minus]').forEach(function (b) { b.addEventListener('click', function () { addVote(parseInt(b.getAttribute('data-minus'), 10), -1); }); });
      box.querySelector('#t-reveal').addEventListener('click', toggle);
      box.querySelector('#t-prev').addEventListener('click', function () { go(-1); });
      box.querySelector('#t-next').addEventListener('click', function () { if (last) finish(); else go(1); });
      var ub = box.querySelector('#t-undo'); if (ub) ub.addEventListener('click', undo);
      box.querySelector('#t-exit').addEventListener('click', close);
      box.querySelector('#t-end').addEventListener('click', finish);
      box.querySelector('#t-notes').addEventListener('click', toggleNotes);
      var nx = box.querySelector('#t-notes-x'); if (nx) nx.addEventListener('click', toggleNotes);
      box.querySelector('#t-presenter').addEventListener('click', openPresenter);
      box.querySelector('#t-fs').addEventListener('click', function () { if (isFullscreen()) exitFullscreen(); else enterFullscreen(); });
      box.querySelector('.teach__stage').scrollTop = 0;
      persist();
    }
    function toggleNotes() { notesOpen = !notesOpen; draw(); }
    function openPresenter() {
      var w = null;
      try { w = window.open(location.href.split('#')[0] + '#/teach/presenter', 'ks-presenter', 'width=560,height=840'); } catch (x) { w = null; }
      if (!w) { notesOpen = true; draw(); }
    }
    function addVote(i, d, n) {
      if (!votable()) return;
      var it = cur(), nb = nBuckets(it, kind), e = tEnsure(S, curId(), nb);
      if (i < 0 || i >= nb) return;
      var amt = n || (buf ? parseInt(buf, 10) : 1) || 1;
      if (d < 0) amt = Math.min(amt, e.v[i]);
      buf = '';
      if (!amt) { draw(); return; }
      e.v[i] += d * amt;
      st.undo.push({ i: i, d: d, n: amt });
      draw();
    }
    function undo() {
      if (!votable() || !st.undo.length) return;
      var op = st.undo.pop(), e = tEnsure(S, curId(), nBuckets(cur(), kind));
      e.v[op.i] = Math.max(0, e.v[op.i] - op.d * op.n);
      draw();
    }
    function toggle() {
      st.revealed = !st.revealed; buf = '';
      if (st.revealed) tEnsure(S, curId(), nBuckets(cur(), kind)).r = 1;
      draw();
      var a = box.querySelector('.teach__answer'); if (a) a.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' });
    }
    function go(d) {
      var np = S.pos + d; if (np < 0 || np >= S.order.length) return;
      S.pos = np; st = { revealed: false, undo: [] }; buf = ''; draw();
    }
    function finish() { saveTeachSession(S); exitFullscreen(); location.hash = '#/teach/summary/' + S.started; }
    function close() { exitFullscreen(); location.hash = '#/teach'; }
    function onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target.closest && e.target.closest('.glpop')) return;
      var onBtn = e.target.closest && e.target.closest('button, a, .gl');
      if ((e.key === ' ' || e.key === 'Enter') && !onBtn) { e.preventDefault(); toggle(); }
      else if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(-1); }
      else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); if (isFullscreen()) exitFullscreen(); else enterFullscreen(); }
      else if (e.key === 'n' || e.key === 'N') { e.preventDefault(); toggleNotes(); }
      else if (e.key === 'p' || e.key === 'P') { e.preventDefault(); openPresenter(); }
      else if (e.key === 'Escape' && buf) { e.preventDefault(); buf = ''; draw(); }
      else if (e.key === 'Escape' && notesOpen) { e.preventDefault(); toggleNotes(); }
      else if (e.key === 'Escape' && !isFullscreen() && !(glPop && !glPop.hidden)) { e.preventDefault(); close(); }
      else if (votable() && /^[0-9]$/.test(e.key)) { e.preventDefault(); if (buf.length < 3) { buf += e.key; draw(); } }
      else if (votable() && (e.key === 'u' || e.key === 'U' || e.key === 'Backspace')) { e.preventDefault(); if (buf) { buf = buf.slice(0, -1); draw(); } else undo(); }
      else if (votable() && /^[a-e]$/i.test(e.key)) {
        var i = 'abcde'.indexOf(e.key.toLowerCase());
        if (i < nBuckets(cur(), kind)) { e.preventDefault(); addVote(i, e.shiftKey ? -1 : 1); }
      }
    }
    /* Commands from the presenter window arrive through localStorage. */
    function onStorage(ev) {
      if (ev.key !== PREFIX + 'teachCmd' || !ev.newValue) return;
      var m; try { m = JSON.parse(ev.newValue); } catch (x) { return; }
      if (m.cmd === 'next') { if (S.pos >= S.order.length - 1) finish(); else go(1); }
      else if (m.cmd === 'prev') go(-1);
      else if (m.cmd === 'reveal') toggle();
      else if (m.cmd === 'vote') addVote(m.i, m.d, m.n || 1);
      else if (m.cmd === 'undo') undo();
    }
    function onFs() { var b = box.querySelector('#t-fs'); if (b) b.textContent = isFullscreen() ? 'Exit full screen' : 'Full screen'; }
    document.addEventListener('keydown', onKey);
    window.addEventListener('storage', onStorage);
    document.addEventListener('fullscreenchange', onFs);
    document.addEventListener('webkitfullscreenchange', onFs);
    draw();
    view.cleanup = function () {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('storage', onStorage);
      document.removeEventListener('fullscreenchange', onFs);
      document.removeEventListener('webkitfullscreenchange', onFs);
      document.body.classList.remove('is-teaching');
    };
  }

  /* ---------- presenter window: live counts, vote entry and private notes ---------- */
  function renderTeachPresenter() {
    document.title = 'Presenter view — K&S Study Companion';
    document.body.classList.add('is-presenter');
    setView('teach-presenter', '<div class="wrap page presenter" id="presenter"></div>');
    var box = main.querySelector('#presenter');
    function send(cmd, extra) {
      var m = { cmd: cmd, seq: Date.now() + Math.random() };
      if (extra) Object.keys(extra).forEach(function (k) { m[k] = extra[k]; });
      store.set('teachCmd', m);
    }
    function draw() {
      var S = store.get('teach', null), live = store.get('teachLive', null);
      if (!S || !live) {
        box.innerHTML = '<h1>Presenter view</h1><p>Start presenting in the main window, then this view follows along with live vote counts and your private notes.</p><p><a class="btn btn--solid" href="#/teach">Open teaching mode</a></p>';
        return;
      }
      var byId = {};
      teachItems(S.scope, S.kind).forEach(function (it) { byId[it.id] = it; });
      var it = byId[live.id];
      if (!it) { box.innerHTML = '<p>That session has ended.</p>'; return; }
      var kind = S.kind, mcq = kind === 'mcq', recall = isRecall(kind), e = (S.log || {})[live.id] || null, pos = S.order.indexOf(live.id);
      var can = mcq ? !live.revealed : recall ? live.revealed : false;
      var h = '<p class="pres__meta"><b>Presenter view</b> · ' + (mcq ? 'Question ' : recall ? (kind === 'hy' ? 'Fact ' : 'Card ') : 'Case ') + (pos + 1) + ' of ' + S.order.length + ' · Chapter ' + it.ch.number + ', ' + esc(itemTag(it, kind)) + '</p>';
      function ctl(labels, correct) {
        return '<ul class="pres__choices">' + labels.map(function (t, i) {
          var n = e ? (e.v[i] || 0) : 0;
          return '<li class="' + (i === correct ? 'is-answer' : '') + '"><span class="pres__key">' + LETTERS[i] + '</span><span class="pres__txt">' + fmt(t) + (i === correct && mcq ? ' <span class="pn__tag is-ok">correct</span>' : '') + '</span>' +
            '<span class="pres__ctl"><button type="button" data-v="' + i + '" data-d="-1" aria-label="Remove one vote for ' + LETTERS[i] + '"' + (can ? '' : ' disabled') + '>−</button><b class="pres__n">' + n + '</b><button type="button" data-v="' + i + '" data-d="1" aria-label="Add one vote for ' + LETTERS[i] + '"' + (can ? '' : ' disabled') + '>+</button></span></li>';
        }).join('') + '</ul>';
      }
      if (mcq) {
        var c = it.c, s = tStats(c, e);
        h += '<p class="pres__stem">' + fmt(c.q) + '</p>' + ctl(c.choices, c.answer) + '<p class="pres__tot">' + plural(s.total, 'vote') + (s.total ? ' · ' + s.pct + '% on the correct answer' : '') + (live.revealed ? ' · answer is showing on the main screen' : '') + '</p>';
      } else if (recall) {
        var rs = tItemStats(it, kind, e);
        h += (kind === 'hy' ? '<p class="pres__stem">' + blankify(it.text, true) + '</p>' : '<p class="pres__stem">' + fmt(it.rc.q) + '</p><p class="pres__stem pres__ans"><b>Answer:</b> ' + fmt(it.rc.a) + '</p>') +
          ctl(BUCKETS, 0) + '<p class="pres__tot">' + (live.revealed ? plural(rs.total, 'rating') + (rs.total ? ' · ' + rs.pct + '% knew it' : '') : 'Reveal the answer on the main screen, then count the room here.') + '</p>';
      } else {
        h += '<h2>' + esc(it.title) + '</h2><p class="pres__stem">' + fmt(it.text) + '</p>';
      }
      h += '<div class="pres__nav"><button class="btn" type="button" data-c="prev"' + (pos ? '' : ' disabled') + '>Previous</button>' +
        (can ? '<button class="btn" type="button" data-c="undo">Undo vote</button>' : '') +
        '<button class="btn btn--solid" type="button" data-c="reveal">' + (live.revealed ? 'Hide answer' : 'Reveal on main screen') + '</button>' +
        '<button class="btn" type="button" data-c="next">' + (pos >= S.order.length - 1 ? 'Finish' : 'Next') + '</button></div>' +
        '<section class="pn">' + teachNotesHtml(it, S.kind, e) + '</section>';
      box.innerHTML = h;
      linkTerms(box, {});
      box.querySelectorAll('[data-v]').forEach(function (b) { b.addEventListener('click', function () { send('vote', { i: parseInt(b.getAttribute('data-v'), 10), d: parseInt(b.getAttribute('data-d'), 10), n: 1 }); }); });
      box.querySelectorAll('[data-c]').forEach(function (b) { b.addEventListener('click', function () { send(b.getAttribute('data-c')); }); });
    }
    function onStorage(ev) { if (ev.key === PREFIX + 'teach' || ev.key === PREFIX + 'teachLive') draw(); }
    window.addEventListener('storage', onStorage);
    draw();
    view.cleanup = function () { window.removeEventListener('storage', onStorage); document.body.classList.remove('is-presenter'); };
  }

  /* ---------- session summary ---------- */
  /* Resident takeaway sheet for a finished session: what to revisit, with answers, explanations and
     why-not lines, and the room's score by topic. No per-choice vote counts, so it can go to residents. */
  function renderTeachHandout(id, all) {
    var list = store.get('teachSessions', []) || [], rec = null;
    list.forEach(function (r) { if (String(r.id) === String(id)) rec = r; });
    if (!rec) { renderTeachSummary(id); return; }
    var kind = rec.kind, voting = isVoting(kind), mcq = kind === 'mcq', sm = summarize(rec), byId = {};
    teachItems(rec.scope, kind).forEach(function (it) { byId[it.id] = it; });
    var picked = [];
    if (voting) {
      if (all) rec.order.forEach(function (oid) {
        var it = byId[oid], e = rec.log && rec.log[oid];
        if (!it || !e) return;
        var s = tItemStats(it, kind, e);
        if (s.total) picked.push({ it: it, s: s });
      });
      else picked = sm.revisit.map(function (r) { return { it: r.it, s: r.s }; });
    }
    var okWord = mcq ? 'correct' : 'knew it';
    var scope = rec.scope === 'all' ? 'All chapters' : 'Chapter ' + (chapter(rec.scope) || {}).number;
    var kindLabel = ((KIND_OPTS.filter(function (o) { return o[0] === kind; })[0]) || [kind, kind])[1];
    function entry(p) {
      var it = p.it, meta = '<p class="ts-miss__meta">Chapter ' + it.ch.number + ', ' + esc(itemTag(it, kind)) + (p.s ? ' · Room: ' + p.s.pct + '% ' + okWord : '') + '</p>';
      if (mcq) {
        var c = it.c;
        return '<li>' + meta + '<p class="ts-miss__q">' + fmt(c.q) + '</p><ol class="ho-choices">' + c.choices.map(function (t, i) {
          var ok = i === c.answer, why = !ok && c.whyNot && c.whyNot[i];
          return '<li class="' + (ok ? 'is-ok' : '') + '"><span class="ho-key">' + LETTERS[i] + '</span><span>' + fmt(t) + (ok ? ' <b class="ho-mark">Answer</b>' : '') + (why ? '<span class="ho-why">' + fmt(why) + '</span>' : '') + '</span></li>';
        }).join('') + '</ol><p class="ts-miss__why"><b>Why ' + LETTERS[c.answer] + ':</b> ' + fmt(c.why) + '</p></li>';
      }
      if (kind === 'hy') return '<li>' + meta + '<p class="ts-miss__q">' + blankify(it.text, true) + '</p></li>';
      return '<li>' + meta + '<p class="ts-miss__q">' + fmt(it.rc.q) + '</p><p><b>Answer:</b> ' + fmt(it.rc.a) + '</p>' + (it.rc.why ? '<p class="ts-miss__why">' + fmt(it.rc.why) + '</p>' : '') + '</li>';
    }
    var body = '';
    if (voting) {
      var tk = Object.keys(sm.byTopic).sort(function (a, b) { return sm.byTopic[a].ok / sm.byTopic[a].n - sm.byTopic[b].ok / sm.byTopic[b].n; });
      if (tk.length) body += '<section class="results-sec"><h2>How the room did by topic</h2><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Topic</th><th scope="col">' + (mcq ? 'Questions' : 'Items') + '</th><th scope="col">Room score</th></tr></thead><tbody>' +
        tk.map(function (k) { var v = sm.byTopic[k]; return '<tr><th scope="row">' + esc(k) + '</th><td>' + v.q + '</td><td>' + scoreBar(v.ok, v.n) + '</td></tr>'; }).join('') + '</tbody></table></div></section>';
      body += '<section class="results-sec"><h2>' + (all ? 'Every ' + (KIND_NOUN[kind] || 'item') + ' discussed' : 'To revisit') + '</h2>' +
        (picked.length ? '<p class="muted">' + (all ? 'In the order presented.' : 'The room scored under ' + REVISIT_BELOW + '% on these, lowest first.') + '</p><ol class="ts-miss">' + picked.map(entry).join('') + '</ol>'
          : '<p class="muted">' + (all ? 'No items were polled in this session.' : 'The room scored ' + REVISIT_BELOW + '% or better on every item. Choose "Every item discussed" for a full review sheet.') + '</p>') + '</section>';
    } else {
      body += '<section class="results-sec"><h2>Cases discussed</h2>' + (sm.covered.length ? '<ol class="ts-miss">' + sm.covered.map(function (it) {
        return '<li><p class="ts-miss__meta">Chapter ' + it.ch.number + ', ' + esc(it.sec.title) + '</p><p class="ts-miss__q"><b>' + esc(it.title) + '</b></p>' + (it.text ? '<p>' + fmt(it.text) + '</p>' : '') + '<p class="ts-miss__why"><b>Teaching point:</b> ' + fmt(it.point || '') + '</p></li>';
      }).join('') + '</ol>' : '<p class="muted">No cases were revealed in this session.</p>') + '</section>';
    }
    var html = '<div class="wrap page exam-results teach-summary teach-handout">' +
      '<header class="page__head"><p class="crumb"><a href="#/teach/summary/' + rec.id + '">Session summary</a></p><h1>Session takeaways</h1><p>' + esc(fmtDate(rec.at)) + ' · ' + esc(scope) + ' · ' + esc(kindLabel) + (voting && sm.votes ? ' · Room score ' + pct(sm.ok, sm.votes) + '% ' + okWord : '') + '</p></header>' +
      '<div class="no-print ho-bar">' + (voting ? '<div class="seg" role="group" aria-label="Items to include"><a class="btn btn--small' + (all ? '' : ' btn--solid') + '" href="#/teach/handout/' + rec.id + '"' + (all ? '' : ' aria-current="page"') + '>To revisit</a><a class="btn btn--small' + (all ? ' btn--solid' : '') + '" href="#/teach/handout/' + rec.id + '/all"' + (all ? ' aria-current="page"' : '') + '>Every item discussed</a></div>' : '') +
        '<button class="btn btn--solid" type="button" id="ho-print">Print or save as PDF</button></div>' +
      body + '<footer class="ho-foot">' + esc(ATTRIBUTION) + '</footer></div>';
    setView('teach-handout:' + rec.id + (all ? ':all' : ''), html);
    document.title = 'Session takeaways — K&S Study Companion';
    main.querySelector('#ho-print').addEventListener('click', function () { try { window.print(); } catch (x) {} });
  }

  function renderTeachSummary(id) {
    var list = store.get('teachSessions', []) || [], rec = null;
    list.forEach(function (r) { if (String(r.id) === String(id) || (!id && !rec)) rec = r; });
    if (!rec) {
      setView('teach-summary', '<div class="wrap empty" style="margin-top:48px"><h2>No session to summarize</h2><p>Finish a teaching session and its summary appears here.</p><a class="btn btn--solid" href="#/teach">Teaching mode</a></div>');
      document.title = 'Session summary — K&S Study Companion';
      return;
    }
    var kind = rec.kind, sm = summarize(rec), voting = isVoting(kind), mcq = kind === 'mcq', noun = KIND_NOUN[kind] || 'item', okWord = mcq ? 'on the correct answer' : 'knew it';
    function rows(obj, sortWeak) {
      var ks = Object.keys(obj);
      if (sortWeak) ks.sort(function (a, b) { return obj[a].ok / obj[a].n - obj[b].ok / obj[b].n || obj[b].n - obj[a].n; });
      return ks.map(function (k) {
        var v = obj[k], p = pct(v.ok, v.n);
        return '<tr><th scope="row">' + esc(k) + '</th><td>' + plural(v.q, noun) + '</td><td>' + v.ok + ' of ' + plural(v.n, mcq ? 'vote' : 'rating') + '</td><td class="bar-cell"><span class="score-bar"><span style="width:' + p + '%" class="' + (p >= 70 ? 'is-good' : p >= 50 ? 'is-mid' : 'is-low') + '"></span></span><span class="score-pct">' + p + '%</span></td></tr>';
      }).join('');
    }
    function table(title, note, obj, weak) {
      return '<section class="results-sec"><h2>' + title + '</h2><p class="muted">' + note + '</p><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">' + (weak ? 'Topic' : 'Chapter') + '</th><th scope="col">' + (mcq ? 'Questions' : 'Items') + '</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' + rows(obj, weak) + '</tbody></table></div></section>';
    }
    var p = pct(sm.ok, sm.votes), live = store.get('teach', null), canResume = live && live.started === rec.id;
    var html = '<div class="wrap page exam-results teach-summary">' +
      '<header class="page__head"><p class="crumb"><a href="#/teach">Teaching mode</a></p><h1>Session summary</h1><p>' + fmtDate(rec.at) + '. ' + (rec.scope === 'all' ? 'All chapters' : 'Chapter ' + (chapter(rec.scope) || {}).number) + ', ' + ((KIND_OPTS.filter(function (o) { return o[0] === kind; })[0] || ['', 'cases'])[1].toLowerCase()) + '.</p></header>';
    if (voting) {
      html += (sm.votes
        ? '<div class="score"><p class="score__big">' + p + '<span>%</span></p><div><p class="score__line"><b>' + sm.ok + ' of ' + plural(sm.votes, mcq ? 'vote' : 'rating') + '</b> ' + okWord + '</p><p class="score__line">' + plural(sm.polled, noun) + ' polled' + (sm.presented > sm.polled ? ', ' + (sm.presented - sm.polled) + ' shown without a ' + (mcq ? 'vote' : 'rating') : '') + '. The room got ' + sm.gotIt + ' of ' + sm.polled + ' (' + REVISIT_BELOW + '% or better).</p></div></div>'
        : '<p class="muted">No ' + (mcq ? 'votes were' : 'ratings were') + ' counted in this session, so there is no score. ' + (mcq ? 'Votes are counted by clicking a choice or pressing A\u2013E while presenting.' : 'After revealing an item, click Knew it, Partly or Missed it, or press A, B or C.') + '</p>');
    } else {
      html += '<div class="score"><p class="score__big">' + sm.covered.length + '</p><div><p class="score__line"><b>chapter cases discussed</b> and revealed</p>' + (sm.skipped.length ? '<p class="score__line">' + sm.skipped.length + ' opened but not revealed.</p>' : '') + '</div></div>';
    }
    html += '<div class="empty__actions results-actions no-print">' +
      (voting && sm.revisit.length ? '<button class="btn btn--solid" type="button" id="ts-again">Present the ' + sm.revisit.length + ' to revisit</button>' : '') +
      '<a class="btn' + (voting && sm.revisit.length ? '' : ' btn--solid') + '" href="#/teach/handout/' + rec.id + '">Resident handout</a>' +
      '<button class="btn" type="button" id="ts-print">Print this summary</button>' +
      '<button class="btn" type="button" id="ts-copy">Copy as text</button>' +
      (canResume ? '<a class="btn" href="#/teach/run">Back to the session</a>' : '') +
      '<a class="btn" href="#/teach">New session</a></div><p class="muted no-print" id="ts-msg" role="status"></p>';
    if (voting && sm.votes) {
      html += table('Score by topic', 'Weakest first. ' + (mcq ? 'Votes' : 'Ratings') + ' are pooled across the items in each topic.', sm.byTopic, true) + table('Score by chapter', '', sm.byCh, false);
      html += '<section class="results-sec"><h2>Questions to revisit</h2>';
      if (!sm.revisit.length) html += '<p class="muted">The room scored ' + REVISIT_BELOW + '% or better on every question it was polled on.</p>';
      else {
        html += '<p class="muted">Under ' + REVISIT_BELOW + '% ' + (mcq ? 'on the correct answer' : 'knew it') + ', lowest first.</p><ol class="ts-miss">' + sm.revisit.map(function (r) {
          var it = r.it, c = it.c, lines;
          if (mcq) {
            lines = '<p class="ts-miss__q">' + fmt(c.q) + '</p><p class="ts-miss__dist">' + c.choices.map(function (t, i) { return '<span class="' + (i === c.answer ? 'is-ok' : '') + '">' + LETTERS[i] + ' ' + (r.e.v[i] || 0) + '</span>'; }).join('') + '</p>' +
              '<p><b>Answer ' + LETTERS[c.answer] + ':</b> ' + fmt(c.choices[c.answer]) + '</p><p class="ts-miss__why">' + fmt(c.why) + '</p>';
          } else {
            lines = (kind === 'hy' ? '<p class="ts-miss__q">' + blankify(it.text, true) + '</p>' : '<p class="ts-miss__q">' + fmt(it.rc.q) + '</p>') +
              '<p class="ts-miss__dist">' + BUCKETS.map(function (t, i) { return '<span class="' + (i === 0 ? 'is-ok' : '') + '">' + t + ' ' + (r.e.v[i] || 0) + '</span>'; }).join('') + '</p>' +
              (kind === 'hy' ? '' : '<p><b>Answer:</b> ' + fmt(it.rc.a) + '</p>' + (it.rc.why ? '<p class="ts-miss__why">' + fmt(it.rc.why) + '</p>' : ''));
          }
          return '<li><p class="ts-miss__meta">Chapter ' + it.ch.number + ', ' + esc(itemTag(it, kind)) + ' · ' + r.s.pct + '% ' + (mcq ? 'correct' : 'knew it') + ' (' + r.s.ok + ' of ' + r.s.total + ')</p>' + lines + '</li>';
        }).join('') + '</ol>';
      }
      html += '</section>';
    } else if (!voting && sm.covered.length) {
      html += '<section class="results-sec"><h2>Cases discussed</h2><ol class="ts-miss">' + sm.covered.map(function (it) {
        return '<li><p class="ts-miss__meta">Chapter ' + it.ch.number + ', ' + esc(it.sec.title) + '</p><p class="ts-miss__q"><b>' + esc(it.title) + '</b></p><p class="ts-miss__why">' + fmt(it.point || '') + '</p><p class="no-print"><a href="#/c/' + it.ch.id + '/guide/' + it.sec.id + '">Open in the study guide</a></p></li>';
      }).join('') + '</ol></section>';
    }
    html += '</div>';
    setView('teach-summary:' + rec.id, html);
    document.title = 'Session summary — K&S Study Companion';
    linkTerms(main, {});
    var again = main.querySelector('#ts-again');
    if (again) again.addEventListener('click', function () {
      store.set('teach', { scope: 'all', kind: rec.kind, order: sm.revisit.map(function (r) { return r.it.id; }), pos: 0, started: Date.now(), counts: teachPrefs().counts, log: {} });
      enterFullscreen();
      location.hash = '#/teach/run';
    });
    main.querySelector('#ts-print').addEventListener('click', function () { try { window.print(); } catch (x) {} });
    main.querySelector('#ts-copy').addEventListener('click', function () {
      var t = 'Teaching session ' + fmtDate(rec.at) + '\n';
      if (voting) {
        t += sm.votes ? p + '% ' + (mcq ? 'correct' : 'knew it') + ' (' + sm.ok + ' of ' + sm.votes + (mcq ? ' votes, ' : ' ratings, ') + plural(sm.polled, noun) + ')\n\nBy topic (weakest first):\n' : 'No votes counted.\n';
        Object.keys(sm.byTopic).sort(function (a, b) { return sm.byTopic[a].ok / sm.byTopic[a].n - sm.byTopic[b].ok / sm.byTopic[b].n; }).forEach(function (k) { t += '- ' + k + ': ' + pct(sm.byTopic[k].ok, sm.byTopic[k].n) + '%\n'; });
        if (sm.revisit.length) { t += '\nTo revisit:\n'; sm.revisit.forEach(function (r) { t += '- Ch ' + r.it.ch.number + ', ' + itemTag(r.it, kind) + ' (' + r.s.pct + '%): ' + itemLabel(r.it, kind) + (mcq ? ' Answer ' + LETTERS[r.it.c.answer] + ': ' + plain(r.it.c.choices[r.it.c.answer]) : kind === 'hy' ? ' => ' + plain(r.it.text) : ' Answer: ' + plain(r.it.rc.a)) + '\n'; }); }
      } else {
        t += plural(sm.covered.length, 'chapter case') + ' discussed:\n';
        sm.covered.forEach(function (it) { t += '- Ch ' + it.ch.number + ': ' + it.title + '\n'; });
      }
      var msg = main.querySelector('#ts-msg');
      function done(ok) { msg.textContent = ok ? 'Copied to the clipboard.' : 'Could not copy. Select the page text instead.'; }
      try { navigator.clipboard.writeText(t).then(function () { done(true); }, function () { done(false); }); } catch (x) { done(false); }
    });
  }

  /* ---------- back up and restore progress ----------
     All progress lives in this browser's storage. Export writes it to a JSON file; import merges a file into
     this device (keeping the more advanced record of each card) or replaces everything, and a snapshot taken
     just before makes the last import undoable. */
  var BACKUP_FORMAT = 'ks-study-companion-progress';
  var BACKUP_TYPES = { srs: 'o', mistakes: 'o', bookmarks: 'o', examHistory: 'a', teachSessions: 'a', newToday: 'o', seenNews: 'n', hyQuiz: 'b', reviewPrefs: 'o', examPrefs: 'o', deckPrefs: 'o', teachPrefs: 'o', handoutPrefs: 'o', glLinks: 'b', theme: 's', prepost: 'o', textSize: 's', ttsRate: 's', laPrefs: 'o' };
  var BACKUP_KEYS = Object.keys(BACKUP_TYPES);
  function typeOk(v, t) {
    if (t === 'o') return v && typeof v === 'object' && !Array.isArray(v);
    if (t === 'a') return Array.isArray(v);
    if (t === 'n') return typeof v === 'number' && isFinite(v);
    if (t === 'b') return typeof v === 'boolean';
    return typeof v === 'string';
  }
  function makeBackup() {
    var data = {};
    BACKUP_KEYS.forEach(function (k) { var v = store.get(k, undefined); if (v !== undefined && typeOk(v, BACKUP_TYPES[k])) data[k] = v; });
    return { format: BACKUP_FORMAT, version: 1, exported: new Date().toISOString(), data: data };
  }
  /* Returns { data, skipped } or null when the file is not a progress backup. */
  function readBackup(text) {
    var obj;
    try { obj = JSON.parse(text); } catch (e) { return null; }
    if (!obj || obj.format !== BACKUP_FORMAT || !obj.data || typeof obj.data !== 'object') return null;
    var data = {}, skipped = 0;
    Object.keys(obj.data).forEach(function (k) {
      if (BACKUP_TYPES[k] && typeOk(obj.data[k], BACKUP_TYPES[k])) data[k] = obj.data[k]; else skipped++;
    });
    var srs = data.srs;
    if (srs) Object.keys(srs).forEach(function (k) {
      var c = srs[k];
      if (!c || typeof c.d !== 'number' || typeof c.i !== 'number' || typeof c.e !== 'number') { delete srs[k]; skipped++; }
    });
    return { data: data, skipped: skipped, exported: obj.exported || '' };
  }
  function backupCounts(d) {
    return { cards: Object.keys(d.srs || {}).length, mistakes: Object.keys(d.mistakes || {}).length, bookmarks: Object.keys(d.bookmarks || {}).length, exams: (d.examHistory || []).length, sessions: (d.teachSessions || []).length };
  }
  function mergeInto(cur, inc) {
    var out = {};
    BACKUP_KEYS.forEach(function (k) { if (cur[k] !== undefined) out[k] = cur[k]; });
    var s = {}, a = cur.srs || {}, b = inc.srs || {};
    Object.keys(a).forEach(function (k) { s[k] = a[k]; });
    Object.keys(b).forEach(function (k) {
      var x = s[k], y = b[k];
      if (!x) { s[k] = y; return; }
      var hx = srsTries(x), hy = srsTries(y);
      if (hy > hx || (hy === hx && y.d > x.d)) s[k] = y;
    });
    if (Object.keys(s).length) out.srs = s;
    var m = {}, ma = cur.mistakes || {}, mb = inc.mistakes || {};
    Object.keys(ma).forEach(function (k) { m[k] = ma[k]; });
    Object.keys(mb).forEach(function (k) { if (!m[k] || (mb[k].t || 0) > (m[k].t || 0)) m[k] = mb[k]; });
    if (Object.keys(m).length) out.mistakes = m;
    var bk = {}, ba = cur.bookmarks || {}, bb = inc.bookmarks || {};
    Object.keys(bb).forEach(function (k) { bk[k] = bb[k]; });
    Object.keys(ba).forEach(function (k) { bk[k] = ba[k]; });
    if (Object.keys(bk).length) out.bookmarks = bk;
    function union(key, idKey, cap) {
      var seen = {}, all = (cur[key] || []).concat(inc[key] || []).filter(function (r) { if (!r || seen[r[idKey]]) return false; seen[r[idKey]] = 1; return true; });
      all.sort(function (p, q) { return (q.at || 0) - (p.at || 0); });
      if (all.length) out[key] = all.slice(0, cap);
    }
    union('examHistory', 'id', 20); union('teachSessions', 'id', 10);
    if (cur.seenNews !== undefined || inc.seenNews !== undefined) out.seenNews = Math.max(cur.seenNews || 0, inc.seenNews || 0);
    var nt = cur.newToday || inc.newToday; if (nt) out.newToday = nt;
    ['hyQuiz', 'reviewPrefs', 'examPrefs', 'deckPrefs', 'teachPrefs', 'handoutPrefs', 'glLinks', 'theme'].forEach(function (k) { if (out[k] === undefined && inc[k] !== undefined) out[k] = inc[k]; });
    return out;
  }
  function applyData(data) {
    BACKUP_KEYS.forEach(function (k) { if (data[k] !== undefined) store.set(k, data[k]); else store.del(k); });
    ['teach', 'teachLive', 'teachCmd', 'exam'].forEach(function (k) { store.del(k); });
  }

  function renderProgress() {
    var cur = makeBackup().data, c = backupCounts(cur);
    var lastExp = store.get('lastExport', null), pre = store.get('preImport', null);
    var html = '<div class="wrap page progress-page">' +
      '<header class="page__head"><h1>Back up your progress</h1><p>Your review schedule, mistakes, bookmarks, exam results, teaching sessions and settings are saved in this browser only. Export them to a file to keep a copy or to move to a new phone or computer, then import the file there.</p></header>' +
      '<section class="results-sec"><h2>On this device</h2><div class="table-wrap"><table class="score-table"><tbody>' +
        '<tr><th scope="row">Flashcards reviewed</th><td>' + c.cards + '</td></tr><tr><th scope="row">Mistakes to revisit</th><td>' + c.mistakes + '</td></tr>' +
        '<tr><th scope="row">Bookmarked sections</th><td>' + c.bookmarks + '</td></tr><tr><th scope="row">Exams kept</th><td>' + c.exams + '</td></tr>' +
        '<tr><th scope="row">Teaching sessions kept</th><td>' + c.sessions + '</td></tr></tbody></table></div></section>' +
      '<section class="results-sec"><h2>Export</h2><p class="muted">' + (lastExp ? 'Last backup: ' + fmtDate(lastExp) + '.' : 'You have not backed up on this device yet.') + '</p>' +
        '<div class="empty__actions"><button class="btn btn--solid" type="button" id="pg-export">Download backup file</button></div></section>' +
      '<section class="results-sec"><h2>Import</h2><p class="muted">Choose a backup file made by this app. Nothing changes until you pick Merge or Replace.</p>' +
        '<input type="file" id="pg-file" accept=".json,application/json" class="pg-file"><div id="pg-preview" role="status" aria-live="polite"></div></section>' +
      (pre ? '<section class="results-sec"><h2>Undo</h2><p class="muted">The last import was on ' + fmtDate(pre.at) + '. This puts this device back the way it was just before.</p><div class="empty__actions"><button class="btn" type="button" id="pg-undo">Undo last import</button></div></section>' : '') +
      '</div>';
    setView('progress', html);
    document.title = 'Back up progress — K&S Study Companion';
    var prev = main.querySelector('#pg-preview');
    main.querySelector('#pg-export').addEventListener('click', function () {
      var b = makeBackup(), name = 'ks-progress-' + new Date().toISOString().slice(0, 10) + '.json';
      try {
        var url = URL.createObjectURL(new Blob([JSON.stringify(b)], { type: 'application/json' }));
        var a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click();
        setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 500);
        store.set('lastExport', Date.now());
        toast('Backup saved as ' + esc(name) + '.');
      } catch (e) { toast('Could not create the backup file in this browser.'); }
    });
    function finish(msg) { toast(msg); setTimeout(function () { location.hash = '#/'; location.reload(); }, 900); }
    main.querySelector('#pg-file').addEventListener('change', function (ev) {
      var f = ev.target.files && ev.target.files[0];
      if (!f) return;
      if (f.size > 8 * 1024 * 1024) { prev.innerHTML = '<p class="pg-bad">That file is too large to be a progress backup.</p>'; return; }
      var rd = new FileReader();
      rd.onload = function () {
        var res = readBackup(String(rd.result || ''));
        if (!res || !Object.keys(res.data).length) { prev.innerHTML = '<p class="pg-bad">That file is not a progress backup from this app, so nothing was changed.</p>'; return; }
        var n = backupCounts(res.data), when = res.exported ? fmtDate(res.exported) : 'an unknown date';
        prev.innerHTML = '<p>Backup from <b>' + esc(when) + '</b>: ' + plural(n.cards, 'reviewed card') + ', ' + plural(n.mistakes, 'mistake') + ', ' + plural(n.bookmarks, 'bookmark') + ', ' + plural(n.exams, 'exam') + ', ' + plural(n.sessions, 'teaching session') + '.' + (res.skipped ? ' ' + plural(res.skipped, 'unreadable entry', 'unreadable entries') + ' skipped.' : '') + '</p>' +
          '<div class="empty__actions"><button class="btn btn--solid" type="button" id="pg-merge">Merge into this device</button><button class="btn" type="button" id="pg-replace">Replace this device’s progress</button></div>' +
          '<p class="muted">Merge keeps the more advanced record of each card and combines mistakes, bookmarks, exams and sessions. Replace discards what is on this device first.</p>';
        function snapshot() { store.set('preImport', { at: Date.now(), data: makeBackup().data }); }
        prev.querySelector('#pg-merge').addEventListener('click', function () { snapshot(); applyData(mergeInto(makeBackup().data, res.data)); finish('Merged. Reloading.'); });
        var rb = prev.querySelector('#pg-replace');
        rb.addEventListener('click', function () {
          if (!rb.getAttribute('data-sure')) { rb.setAttribute('data-sure', '1'); rb.textContent = 'Tap again to replace everything'; return; }
          snapshot(); applyData(res.data); finish('Replaced. Reloading.');
        });
      };
      rd.onerror = function () { prev.innerHTML = '<p class="pg-bad">That file could not be read.</p>'; };
      rd.readAsText(f);
    });
    var ub = main.querySelector('#pg-undo');
    if (ub) ub.addEventListener('click', function () { var p = store.get('preImport', null); if (!p) return; applyData(p.data); store.del('preImport'); finish('Restored. Reloading.'); });
  }

  /* ---------- what's new ---------- */
  var NEWS_TYPES = { chapter: 'New chapter', feature: 'New feature', correction: 'Correction', update: 'Update' };
  function newsList() { return (KS.changelog || []).slice().sort(function (a, b) { return b.id - a.id; }); }
  function latestNewsId() { var l = newsList(); return l.length ? l[0].id : 0; }
  function seenNewsId() {
    var s = store.get('seenNews', null);
    if (s != null) return s;
    // First visit with this feature: returning residents (who already have progress) see everything
    // after the original release as new; brand-new visitors start fully up to date.
    var returning = store.get('last', null) || Object.keys(SRS).length;
    s = returning ? 1 : latestNewsId();
    store.set('seenNews', s);
    return s;
  }
  function unseenNews() { var seen = seenNewsId(); return newsList().filter(function (e) { return e.id > seen; }); }
  function updatedChapters() {
    var out = {};
    unseenNews().forEach(function (e) { e.items.forEach(function (it) { if (it.ch) out[it.ch] = true; }); });
    return out;
  }
  function fmtNewsDate(d) {
    try { var p = d.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }); } catch (e) { return d; }
  }
  function renderNews() {
    var seen = seenNewsId();
    var list = newsList();
    var html = '<div class="wrap page news">' +
      '<header class="page__head"><h1>What’s new</h1><p>New chapters, features and corrections, newest first. Entries marked <span class="news__new">New</span> were added since your last visit; corrections link straight to the changed content so you know what to revisit.</p></header>' +
      list.map(function (e) {
        return '<article class="news__entry' + (e.id > seen ? ' is-new' : '') + '"><div class="news__date"><time datetime="' + esc(e.date) + '">' + fmtNewsDate(e.date) + '</time>' + (e.id > seen ? '<span class="news__new">New</span>' : '') + '</div>' +
          '<div class="news__body"><h2>' + esc(e.title) + '</h2>' + (e.summary ? '<p>' + fmt(e.summary) + '</p>' : '') +
          '<ul>' + e.items.map(function (it) {
            var ch = it.ch && chapter(it.ch);
            return '<li><span class="news__type news__type--' + esc(it.type) + '">' + esc(NEWS_TYPES[it.type] || 'Update') + '</span>' +
              '<span class="news__text">' + fmt(it.text) + (ch && plain(it.text).indexOf('Chapter ' + ch.number) < 0 ? ' <span class="muted">(Chapter ' + ch.number + ')</span>' : '') + (it.href ? ' <a href="' + esc(it.href) + '">' + esc(it.link || 'Open') + '</a>' : '') + '</span></li>';
          }).join('') + '</ul></div></article>';
      }).join('') +
      (list.some(function (e) { return e.items.some(function (it) { return it.type === 'correction'; }); }) ? '' : '<p class="news__note">No corrections have been needed so far. If one is made, it will be listed here with a link to the corrected content.</p>') +
      '</div>';
    setView('news', html);
    document.title = 'What’s new — K&S Study Companion';
    store.set('seenNews', latestNewsId());
    updateNavBadges();
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
    glossary: { label: 'Glossary', css: 'gloss' },
    drug: { label: 'Drug', css: 'pharm' },
    compare: { label: 'Look-alikes', css: 'found' }
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
    if (DRUG) DRUG.searchEntries().forEach(function (e) { INDEX.push(e); });
    (KS.lookalikes || []).forEach(function (c) {
      INDEX.push({ ch: null, kind: 'compare', title: c.title, src: 'Look-alikes', text: plain(c.title + ' ' + (c.summary || '') + ' ' + c.items.join(' ') + ' ' + c.rows.map(function (r) { return r.join(' '); }).join(' ') + ' ' + (c.keys || []).join(' ')), href: '#/compare/' + c.id });
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
      if (e.kind === 'glossary' && e.lt === phrase) score += 10;
      if (e.kind === 'drug' && e.lt.indexOf(phrase) === 0) score += 12;
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
  function kindGroup(k) { return k === 'guide' ? 'guide' : k === 'hy' ? 'hy' : k === 'glossary' ? 'glossary' : k === 'drug' ? 'drugs' : k === 'compare' ? 'guide' : 'cards'; }
  function whereLabel(e, short) { return e.ch ? (short ? 'Ch ' : 'Chapter ') + e.ch.number : (e.src ? 'From ' + e.src : 'Book glossary'); }

  function renderSearch(q) {
    var res = runSearch(q);
    var ts = terms(q);
    var filter = 'all';
    var counts = { all: res.length, guide: 0, hy: 0, cards: 0, glossary: 0, drugs: 0 };
    res.forEach(function (e) { counts[kindGroup(e.kind)]++; });
    var html = '<div class="wrap search-page"><h1>' + (q ? 'Results for \u201c' + esc(q) + '\u201d' : 'Search') + '</h1>' +
      '<p class="search-page__sub">' + (q ? res.length + ' matches across every chapter in the app' : 'Type in the search box above to search every study guide, high-yield list, flashcard and glossary term.') + '</p>' +
      (q && res.length ? '<div class="filters" role="group" aria-label="Filter results">' +
        [['all', 'All'], ['drugs', 'Drugs'], ['guide', 'Study guide'], ['hy', 'High yield'], ['cards', 'Flashcards'], ['glossary', 'Glossary']].filter(function (f) { return f[0] === 'all' || counts[f[0]]; }).map(function (f) {
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

    if ((e.key === '[' || e.key === ']') && !e.metaKey && !e.ctrlKey && !e.altKey && !(e.target.matches && e.target.matches('input, textarea, select')) && !document.body.classList.contains('is-teaching')) {
      var a = document.getElementById(e.key === '[' ? 'ch-prev' : 'ch-next');
      if (a) { e.preventDefault(); location.hash = a.getAttribute('href').replace(/^#/, ''); }
    }
  });

  /* ---------- chapters and tools menu ---------- */
  (function () {
    var btn = document.getElementById('menu-btn'), panel = document.getElementById('menu-panel'), scrim = document.getElementById('menu-scrim');
    if (!btn || !panel) return;
    function currentMode() {
      var m = /^#\/c\/(ch\d+)\/(?:cards\/)?([\w-]+)/.exec(location.hash || '');
      return m ? { ch: m[1], mode: modeBy(m[2]) } : { ch: null, mode: null };
    }
    function build() {
      var cur = currentMode(), mode = cur.mode || MODES[0];
      var list = (KS.manifest || []).slice().sort(function (a, b) { return a.number - b.number; });
      var tools = document.querySelector('.sitenav');
      var toolsHtml = tools ? '<div class="menu-panel__tools"><h2>Study tools</h2>' + Array.prototype.map.call(tools.querySelectorAll('a'), function (a) {
        return '<a href="' + a.getAttribute('href') + '">' + a.innerHTML.replace(/ data-nav="[^"]*"/g, '') + '</a>';
      }).join('') + '</div>' : '';
      var html = '<a href="#/"><span class="mn-num" aria-hidden="true">\u2302</span><span class="mn-ch">All chapters (home)</span></a>' + toolsHtml + '<h2>Chapters</h2>' +
        list.map(function (c) {
          return '<a href="' + modeHref(c, mode) + '"' + (c.id === cur.ch ? ' class="is-current" aria-current="page"' : '') + '><span class="mn-num">' + c.number + '</span><span class="mn-ch">' + esc(c.short || c.title) + '</span></a>';
        }).join('');
      html += '<h2>More</h2><a href="#/teach"><span class="mn-num" aria-hidden="true"></span><span class="mn-ch">Teaching mode</span></a><a href="#/all-highyield"><span class="mn-num" aria-hidden="true"></span><span class="mn-ch">All high-yield (PDF)</span></a><a href="#/whats-new"><span class="mn-num" aria-hidden="true"></span><span class="mn-ch">What\u2019s new</span></a><a href="#/updates"><span class="mn-num" aria-hidden="true"></span><span class="mn-ch">Post-publication updates</span></a><a href="#/progress"><span class="mn-num" aria-hidden="true"></span><span class="mn-ch">Back up progress</span></a>';
      panel.innerHTML = html;
    }
    function open() {
      build(); panel.hidden = false; scrim.hidden = false; btn.setAttribute('aria-expanded', 'true');
      var c = panel.querySelector('.is-current'); if (c && c.scrollIntoView) c.scrollIntoView({ block: 'center' });
    }
    function close(focus) {
      if (panel.hidden) return;
      panel.hidden = true; scrim.hidden = true; btn.setAttribute('aria-expanded', 'false');
      if (focus) btn.focus();
    }
    btn.addEventListener('click', function () { if (panel.hidden) open(); else close(); });
    scrim.addEventListener('click', function () { close(); });
    panel.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(true); });
    window.addEventListener('hashchange', function () { close(); });
  })();

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
  /* Keep the top bar usable at every width and text size: when the search box gets too narrow,
     first hide the brand name, then shorten the links, then move the study-tool links into the menu. */
  function fitTopbar() {
    var root = document.documentElement, q = document.querySelector('.search');
    root.classList.remove('nav-nobrand', 'nav-compact', 'nav-tight');
    if (!q || window.innerWidth < 1080) return;
    var steps = ['nav-nobrand', 'nav-compact', 'nav-tight'];
    for (var i = 0; i < steps.length; i++) {
      if (q.getBoundingClientRect().width >= 80) return;
      root.classList.add(steps[i]);
    }
  }
  function setTopVar() { fitTopbar(); document.documentElement.style.setProperty('--top', headerH() + 'px'); }
  window.addEventListener('resize', setTopVar);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setTopVar);
  setTopVar();
  /* ---------- back and forward buttons ----------
     Each history entry the app visits is stamped with its position (history.state.ksIdx), so the
     buttons know whether there is an in-app page behind or ahead of the current one. */
  var HIST_KEY = 'ks:v1:hist';
  var hist = (function () { try { return JSON.parse(sessionStorage.getItem(HIST_KEY)) || { cur: 0, max: 0 }; } catch (e) { return { cur: 0, max: 0 }; } })();
  function saveHist() { try { sessionStorage.setItem(HIST_KEY, JSON.stringify(hist)); } catch (e) {} }
  function stamp(i) { try { history.replaceState({ ksIdx: i }, ''); } catch (e) {} }
  function syncHist() {
    var st = history.state;
    if (st && typeof st.ksIdx === 'number') {
      hist.cur = st.ksIdx;
      if (hist.cur > hist.max) hist.max = hist.cur;
    } else {
      hist.cur = hist.cur + 1;     // a new page: anything that was ahead is discarded
      hist.max = hist.cur;
      stamp(hist.cur);
    }
    saveHist(); paintHist();
  }
  function paintHist() {
    var b = document.getElementById('nav-back'), f = document.getElementById('nav-fwd');
    if (b) b.disabled = hist.cur <= 0;
    if (f) f.disabled = hist.cur >= hist.max;
  }
  (function initHist() {
    var st = history.state;
    if (st && typeof st.ksIdx === 'number') { hist.cur = st.ksIdx; if (hist.max < hist.cur) hist.max = hist.cur; }
    else { hist = { cur: 0, max: 0 }; stamp(0); }
    saveHist(); paintHist();
    var b = document.getElementById('nav-back'), f = document.getElementById('nav-fwd');
    if (b) b.addEventListener('click', function () { if (!b.disabled) history.back(); });
    if (f) f.addEventListener('click', function () { if (!f.disabled) history.forward(); });
  })();

  window.addEventListener('hashchange', function () { syncHist(); route(); });
  function savePdf(blob, name) {
    var file = null;
    try { file = new File([blob], name, { type: 'application/pdf' }); } catch (e) {}
    function save() {
      var url = URL.createObjectURL(blob), a = document.createElement('a');
      a.href = url; a.download = name; a.rel = 'noopener'; document.body.appendChild(a); a.click();
      setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 4000);
    }
    if ('ontouchend' in document && file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      navigator.share({ files: [file], title: name }).catch(function (e) { if (e && e.name !== 'AbortError') save(); });
    } else save();
  }

  /* ---------- display settings: text size and read-aloud speed ---------- */
  var TEXT_SIZES = [['90', 'Smaller'], ['100', 'Default'], ['112.5', 'Larger'], ['125', 'Largest']];
  var TTS_RATES = [['0.8', '0.8\u00d7'], ['1', '1\u00d7'], ['1.2', '1.2\u00d7'], ['1.5', '1.5\u00d7'], ['1.8', '1.8\u00d7']];
  function applyTextSize(v) {
    var ok = TEXT_SIZES.some(function (t) { return t[0] === v; });
    document.documentElement.style.fontSize = ok && v !== '100' ? v + '%' : '';
    setTopVar();
  }
  (function () {
    var btn = document.getElementById('display-btn');
    if (!btn) return;
    var panel = document.createElement('div');
    panel.className = 'display-panel'; panel.id = 'display-panel'; panel.hidden = true;
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Text size and read aloud');
    document.body.appendChild(panel);
    function build() {
      var cur = store.get('textSize', '100'), rate = store.get('ttsRate', '1');
      panel.innerHTML = '<p class="display-panel__title">Text size</p><div class="seg seg--full">' + TEXT_SIZES.map(function (t, i) {
        return '<label><input type="radio" name="ts" value="' + t[0] + '"' + (cur === t[0] ? ' checked' : '') + '><span style="font-size:' + (0.82 + i * 0.1) + 'rem">' + t[1] + '</span></label>';
      }).join('') + '</div>' +
      (TTS.ok ? '<p class="display-panel__title">Read-aloud speed</p><div class="seg seg--full">' + TTS_RATES.map(function (t) {
        return '<label><input type="radio" name="tr" value="' + t[0] + '"' + (rate === t[0] ? ' checked' : '') + '><span>' + t[1] + '</span></label>';
      }).join('') + '</div><p class="display-panel__note">Tap the speaker beside any study-guide section, or Listen on a high-yield page, to hear it read aloud. It uses your device\u2019s built-in voice and works offline.</p>' :
        '<p class="display-panel__note">Read aloud is not available in this browser.</p>');
    }
    function open() { build(); panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); var f = panel.querySelector('input:checked'); if (f) f.focus(); }
    function close() { if (panel.hidden) return; panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
    btn.addEventListener('click', function (e) { e.stopPropagation(); if (panel.hidden) open(); else close(); });
    panel.addEventListener('change', function (e) {
      if (e.target.name === 'ts') { store.set('textSize', e.target.value); applyTextSize(e.target.value); }
      if (e.target.name === 'tr') { store.set('ttsRate', e.target.value); TTS.rateChanged(); }
    });
    document.addEventListener('click', function (e) { if (!panel.hidden && !panel.contains(e.target) && e.target !== btn) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { close(); btn.focus(); } });
    window.addEventListener('hashchange', close);
  })();

  /* ---------- bottom tab bar: markers, actions and auto-hide on scroll ---------- */
  (function () {
    var bar = document.getElementById('tabbar'), body = document.body, menuBtn = document.getElementById('menu-btn');
    if (!bar) return;
    var tabs = bar.querySelectorAll('[data-tab]');
    function mark() {
      var p = (location.hash.replace(/^#\/?/, '').split('/')[0]) || 'home';
      Array.prototype.forEach.call(tabs, function (t) {
        if (t.tagName !== 'A') return;
        var on = t.getAttribute('data-tab') === p;
        t.classList.toggle('is-active', on);
        if (on) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
      });
    }
    bar.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('button[data-tab]');
      if (!t) return;
      if (t.getAttribute('data-tab') === 'menu' && menuBtn) menuBtn.click();
      else if (t.getAttribute('data-tab') === 'search') { var q = document.getElementById('q'); if (q) { window.scrollTo(0, 0); q.focus(); } }
    });
    var last = 0, ticking = false, DOWN = 10, UP = 6, EDGE = 80;
    function show() { body.classList.remove('tabbar-hidden'); }
    function menuOpen() { return menuBtn && menuBtn.getAttribute('aria-expanded') === 'true'; }
    function update() {
      ticking = false;
      var y = Math.max(0, window.pageYOffset || document.documentElement.scrollTop || 0);
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (y < EDGE || max - y < EDGE || menuOpen() || body.classList.contains('is-teaching')) { show(); last = y; return; }
      var d = y - last;
      if (d > DOWN) { body.classList.add('tabbar-hidden'); last = y; }
      else if (d < -UP) { show(); last = y; }
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('hashchange', function () { last = 0; show(); mark(); });
    document.addEventListener('focusin', function (e) { if (e.target.matches && e.target.matches('input, textarea, select')) show(); });
    if (menuBtn) menuBtn.addEventListener('click', show);
    window.addEventListener('resize', function () { last = window.pageYOffset || 0; });
    mark();
  })();

  var DRUG = null;
  loadAll().then(function () {
    if (KS.drugModule) {
      DRUG = KS.drugModule({
        esc: esc, fmt: fmt, plain: plain, store: store, plural: plural, shuffle: shuffle, toast: toast,
        setView: setView, main: function () { return main; }, viewKey: function () { return view.key; }, setCleanup: function (fn) { view.cleanup = fn; },
        chapter: chapter, allChapters: allChapters, renderMissing: renderMissing, linkTerms: linkTerms,
        cards: function () { return CARDS; }, srs: function () { return SRS; }, isDue: isDue, Player: Player,
        tallyKeys: tallyKeys, tallyHTML: tallyHTML, kbdHelp: kbdHelp, savePdf: savePdf, ATTRIBUTION: ATTRIBUTION
      });
      DRUG.inject();
    }
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
