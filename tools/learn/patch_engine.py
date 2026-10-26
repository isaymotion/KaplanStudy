import re, sys
P = '/home/claude/kaplanstudy/'
def rd(f): return open(P + f, encoding='utf8').read()
def wr(f, s): open(P + f, 'w', encoding='utf8').write(s)
def rep(s, old, new, count=1):
    if old not in s:
        sys.exit('ANCHOR NOT FOUND: ' + old[:90])
    return s.replace(old, new, count)

js = rd('js/app.js')

# ---- 1. merge learning data into chapters
js = rep(js, """    CHAPTERS[id] = ch;
    return ch;
  }""", """    CHAPTERS[id] = ch;
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
    if (/(confidential|informed consent|\\bconsent\\b|decision-making capacity|\\bcapacity\\b|tarasoff|duty to (warn|protect)|commitment|malpractice|\\blegal|ethic|boundar|guardian|testif|\\bcourt\\b|competen|involuntar)/.test(q)) d = 'G';
    else if (/(best response|what should (the |you )?(psychiatrist |physician |clinician |resident |doctor )?say|how should (the |you )?(psychiatrist |physician |clinician |resident )?respond|best way to (tell|explain|respond)|what do you tell|how do you (tell|explain))/.test(q)) d = 'F';
    else if (/(most likely diagnosis|which (disorder|diagnosis|condition)|diagnosis\\?|best explains|most likely cause|what is (she|he|this) most likely)/.test(q)) d = 'C';
    else if (/(\\btests?\\b|laborator|\\blabs?\\b|\\beeg\\b|\\bmri\\b|\\bct\\b|imaging|\\bpet\\b|spect|screen|\\bscales?\\b|serum level|blood level|plasma level|assessment|examination|polysomnogra|lumbar puncture|\\burine\\b|\\becg\\b|\\bekg\\b|work-?up|\\bmmse\\b|\\bmoca\\b|questionnaire|inventory)/.test(q)) d = 'D';
    else if (/(\\btreat|therap|\\bdrugs?\\b|medication|\\bdoses?\\b|dosing|prescrib|manage|first[- ]line|next step|intervention|augment|\\bswitch|\\bstart|taper|discontinu|\\bect\\b|\\btms\\b|antidepressant|antipsychotic|side effect|adverse|interaction|toxicity|withdrawal|overdose|antidote|psychotherap|counsel)/.test(q)) d = 'E';
    else if (/(receptor|mechanism|neurotransmitter|\\bgenes?\\b|genetic|chromosom|pathophysiolog|lesion|neuroanatom|\\blobe\\b|nucleus|cortex|pathway|neuropatholog|protein|allele|heritab|twin)/.test(q)) d = 'A';
    else if (/(piaget|erikson|freud|attachment|developmental stage|stage of development|sensitivity|specificity|study design|\\bbias\\b|culture|cultural|defense mechanism|\\bdefenses?\\b|learning theory|conditioning)/.test(q)) d = 'B';
    return (c._dom = d);
  }""")

# ---- 2. seeded random helpers
js = rep(js, "  function reduceMotion() {", """  function rng(seed) {
    var a = (seed >>> 0) || 1;
    return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function shuffleWith(a, r) { for (var j = a.length - 1; j > 0; j--) { var k = Math.floor(r() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; } return a; }
  function reduceMotion() {""")

# ---- 3. visual blocks
js = rep(js, """      case 'steps':
        return open + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<ol class="steps">' +""", """      case 'heatmap':
        var lv = b.legend || ['Absent', 'Some', 'Marked', 'Defining'], sym = ['\\u2013', '+', '++', '+++'];
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
        return open + (b.title ? '<h4>' + fmt(b.title) + '</h4>' : '') + '<ol class="steps">' +""")
js = rep(js, """      case 'update': return plain('Post-publication update ' + (b.year || '') + ' ' + (b.title || '') + ' ' + b.text);
    }""", """      case 'update': return plain('Post-publication update ' + (b.year || '') + ' ' + (b.title || '') + ' ' + b.text);
      case 'heatmap': return plain((b.title || '') + ' ' + b.cols.join(' ') + ' ' + b.rows.map(function (r) { return r.label; }).join(' ') + ' ' + (b.note || ''));
      case 'chronology': return plain((b.title || '') + ' ' + b.events.map(function (e) { return e.year + ' ' + e.label + ' ' + (e.note || ''); }).join(' '));
    }""")

# ---- 4. study guide: listen buttons, checks, look-alike chips, pre/post-test
js = rep(js, """          return '<section class="g-sec" id="' + s.id + '" aria-labelledby="' + s.id + '-h"><div class="g-sec__head"><h3 id="' + s.id + '-h"><span class="g-n">' + ch.number + '.' + n + '</span><span>' + esc(s.title).replace(/\\//g, '/<wbr>') + '</span></h3>' + ribbonBtn(ch.id, s) + '</div>' +
            s.blocks.map(function (b, i) { return blockHTML(b, s.id + '--' + i); }).join('') + '</section>';""", """          return '<section class="g-sec" id="' + s.id + '" aria-labelledby="' + s.id + '-h"><div class="g-sec__head"><h3 id="' + s.id + '-h"><span class="g-n">' + ch.number + '.' + n + '</span><span>' + esc(s.title).replace(/\\//g, '/<wbr>') + '</span></h3>' + listenBtn(s.id) + ribbonBtn(ch.id, s) + '</div>' +
            s.blocks.map(function (b, i) { return blockHTML(b, s.id + '--' + i); }).join('') + checksHTML(ch, s) + compareChips(ch, s) + '</section>';""")
js = rep(js, """    var intro = '<p class="reading__intro">' + fmt(g.intro) + '</p>' +
      (g.objectives ? '<div class="objectives"><h2>By the end of this chapter you should be able to</h2><ul>' + g.objectives.map(function (o) { return '<li>' + fmt(o) + '</li>'; }).join('') + '</ul></div>' : '');""", """    var intro = '<p class="reading__intro">' + fmt(g.intro) + '</p>' +
      (g.objectives ? '<div class="objectives"><h2>By the end of this chapter you should be able to</h2><ul>' + g.objectives.map(function (o) { return '<li>' + fmt(o) + '</li>'; }).join('') + '</ul></div>' : '') +
      prepostHTML(ch);""")
js = rep(js, """    // bookmark ribbons
    main.querySelector('.reading').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-bm]');""", """    // bookmark ribbons, read aloud, pre/post-test
    main.querySelector('.reading').addEventListener('click', function (e) {
      var ls = e.target.closest('[data-listen]');
      if (ls) { TTS.start(guideItems(ch, ls.getAttribute('data-listen')), 'Chapter ' + ch.number); return; }
      var pp = e.target.closest('[data-prepost]');
      if (pp) { startExam({ keys: pretestKeys(ch), timed: false, kind: pp.getAttribute('data-prepost'), ch: ch.id, chapters: [ch.id], seed: hashSeed(ch.id) }); return; }
      var btn = e.target.closest('[data-bm]');""")

js = rep(js, "  function headerH() {", """  function listenBtn(secId) {
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
      var h = sec.querySelector('h3'), title = h ? h.textContent.replace(/^[\\d.]+/, '').trim() : '';
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
    return (c.textContent || '').replace(/\\u2013|\\u2014/g, ', ').replace(/\\s+/g, ' ').replace(/(\\.\\s*){2,}/g, '. ').trim();
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

  function headerH() {""")

# ---- 5. wrong-answer explanations in cards, exam review and teaching notes
js = rep(js, "choiceList(c.choices, c.answer, st.chosen) +", "choiceList(c.choices, c.answer, st.chosen, c.whyNot) +")
js = rep(js, """    function choiceList(choices, answer, chosen) {
      return '<ul class="choices choices--static">' + choices.map(function (ch2, i) {
        var cls = i === answer ? ' is-correct' : (i === chosen ? ' is-wrong' : '');
        var note = i === answer ? '<span class="choice__note">Correct answer</span>' : (i === chosen ? '<span class="choice__note">Your answer</span>' : '');
        return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(ch2) + note + '</span></div></li>';""", """    function choiceList(choices, answer, chosen, why) {
      return '<ul class="choices choices--static">' + choices.map(function (ch2, i) {
        var cls = i === answer ? ' is-correct' : (i === chosen ? ' is-wrong' : '');
        var note = i === answer ? '<span class="choice__note">Correct answer</span>' : (i === chosen ? '<span class="choice__note">Your answer</span>' : '');
        return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(ch2) + note + whyNotHTML(why, i, answer) + '</span></div></li>';""")
js = rep(js, "  function tallyHTML(t, label) {", """  function whyNotHTML(why, i, answer) {
    return why && i !== answer && why[i] ? '<span class="choice__why">' + fmt(why[i]) + '</span>' : '';
  }
  function tallyHTML(t, label) {""")
js = rep(js, """      return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(c.choices[orig]) + note + '</span></div></li>';
    }).join('');
    var base = '#/exam/review/' + id + '/' + which + '/';""", """      return '<li><div class="choice' + cls + '"><span class="choice__key">' + LETTERS[i] + '</span><span>' + fmt(c.choices[orig]) + note + whyNotHTML(c.whyNot, orig, c.answer) + '</span></div></li>';
    }).join('');
    var base = '#/exam/review/' + id + '/' + which + '/';""")
js = rep(js, """      return '<li><b>' + LETTERS[r.i] + '.</b> ' + fmt(r.txt) + (n ? ' <span class="pn__tag""", """      return '<li><b>' + LETTERS[r.i] + '.</b> ' + fmt(r.txt) + (c.whyNot && c.whyNot[r.i] ? ' <span class="pn__why">' + fmt(c.whyNot[r.i]) + '</span>' : '') + (n ? ' <span class="pn__tag""")

# ---- 6. exams: shared start, board-domain filter, sharing, pre/post results
js = rep(js, "  function renderExamSetup() {", """  function startExam(o) {
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
        '<div class="empty__actions"><button class="btn btn--solid" type="button" id="sh-copy">Copy link</button>' + (navigator.share ? '<button class="btn" type="button" id="sh-native">Share\\u2026</button>' : '') + '<button class="btn" type="button" id="sh-dl">Download QR code</button></div>' +
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

  function renderExamSetup() {""")

js = rep(js, """    var prefs = store.get('examPrefs', { chapters: chs.map(function (c) { return c.id; }), count: 20, timed: true });""", """    var prefs = store.get('examPrefs', { chapters: chs.map(function (c) { return c.id; }), count: 20, timed: true });
    var doms = prefs.domains || DOMAINS.map(function (d) { return d[0]; });""")
js = rep(js, """        '<fieldset><legend>Questions</legend><div class="seg">' + [10, 20, 40, 0].map(function (n) {""", """        '<fieldset><legend>Board domain <span class="muted">(ABPN content outline)</span></legend><div class="dom-tools"><button class="btn btn--small" type="button" id="dom-all">All</button><button class="btn btn--small" type="button" id="dom-none">None</button></div>' + DOMAINS.map(function (d) {
          return '<label class="check"><input type="checkbox" name="dom" value="' + d[0] + '"' + (doms.indexOf(d[0]) > -1 ? ' checked' : '') + '> ' + esc(d[1]) + ' <span class="muted" data-domn="' + d[0] + '"></span></label>';
        }).join('') + '</fieldset>' +
        '<fieldset><legend>Questions</legend><div class="seg">' + [10, 20, 40, 0].map(function (n) {""")
js = rep(js, """        '<button class="btn btn--solid" type="button" id="ex-start">Start exam</button>' +
      '</form>' +""", """        '<div class="empty__actions"><button class="btn btn--solid" type="button" id="ex-start">Start exam</button><button class="btn" type="button" id="ex-share">Share as a quiz link</button></div>' +
      '</form><div id="ex-share-box"></div>' +""")
js = rep(js, """      var timed = form.querySelector('input[name=timed]:checked').value === '1';
      var pool = caseKeys(sel).length;
      var n = count ? Math.min(count, pool) : pool;
      return { chapters: sel, count: count, timed: timed, n: n, pool: pool };
    }
    function summary() {
      var r = read();""", """      var timed = form.querySelector('input[name=timed]:checked').value === '1';
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
      main.querySelectorAll('[data-domn]').forEach(function (s) { s.textContent = '(' + (per[s.getAttribute('data-domn')] || 0) + ')'; });""")
js = rep(js, """    form.addEventListener('change', summary); summary();
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
    });""", """    form.addEventListener('change', summary); summary();
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
    });""")
js = rep(js, "      main.querySelector('#ex-start').disabled = !r.pool;", "      main.querySelector('#ex-start').disabled = !r.pool; main.querySelector('#ex-share').disabled = !r.pool;")
js = rep(js, """      ex.items.forEach(function (x) { if (x.a === CARDS[x.k].c.answer) score++; else addMistake(x.k, 'exam'); });""", """      ex.items.forEach(function (x) { if (x.a === CARDS[x.k].c.answer) score++; else if (ex.kind !== 'pre') addMistake(x.k, 'exam'); });""")
js = rep(js, """      var rec = { id: ex.id, at: ex.at, chapters: ex.chapters, timed: ex.timed, limit: ex.limit, used: used, expired: !!expired, score: score, total: ex.items.length, items: ex.items.map(function (x) { return { k: x.k, o: x.o, a: x.a, f: x.f }; }) };""", """      var rec = { id: ex.id, at: ex.at, chapters: ex.chapters, timed: ex.timed, limit: ex.limit, used: used, expired: !!expired, score: score, total: ex.items.length, kind: ex.kind || 'exam', ch: ex.ch || null, quiz: ex.quiz || null, items: ex.items.map(function (x) { return { k: x.k, o: x.o, a: x.a, f: x.f }; }) };
      if ((ex.kind === 'pre' || ex.kind === 'post') && ex.ch) {
        var pp = store.get('prepost', {}) || {};
        pp[ex.ch] = pp[ex.ch] || {};
        pp[ex.ch][ex.kind] = { s: score, t: ex.items.length, at: Date.now() };
        store.set('prepost', pp);
      }""")
js = rep(js, """    var byTopic = {}, byCh = {};
    items.forEach(function (x) {
      var r = CARDS[x.k], ok = x.a === r.c.answer;""", """    var byTopic = {}, byCh = {}, byDom = {};
    items.forEach(function (x) {
      var r = CARDS[x.k], ok = x.a === r.c.answer;
      var dk = domainName(caseDomain(r.c));
      (byDom[dk] = byDom[dk] || { n: 0, ok: 0 }).n++; if (ok) byDom[dk].ok++;""")
js = rep(js, """      '<header class="page__head"><p class="crumb"><a href="#/exam">Exam mode</a></p><h1>Exam results</h1><p>' + fmtDate(ex.at) + (ex.expired ? '. Time ran out and the exam was submitted automatically.' : '.') + '</p></header>' +""", """      '<header class="page__head"><p class="crumb"><a href="#/exam">Exam mode</a></p><h1>' + (ex.kind === 'pre' ? 'Pre-test results' : ex.kind === 'post' ? 'Post-test results' : ex.quiz ? esc(ex.quiz.t) : 'Exam results') + '</h1><p>' + fmtDate(ex.at) + (ex.expired ? '. Time ran out and the exam was submitted automatically.' : '.') + '</p></header>' +
      prepostResult(ex) +""")
js = rep(js, """        '<a class="btn" href="#/exam">New exam</a></div>' +""", """        '<a class="btn" href="#/exam">New exam</a><button class="btn" type="button" id="ex-reshare">Share these questions</button></div><div id="ex-reshare-box"></div>' +""")
js = rep(js, """      '<section class="results-sec"><h2>Score by chapter</h2>""", """      '<section class="results-sec"><h2>Score by board domain</h2><p class="muted">ABPN content outline, Dimension 2.</p><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Domain</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>' + rows(byDom, true) + '</tbody></table></div></section>' +
      '<section class="results-sec"><h2>Score by chapter</h2>""")
js = rep(js, """    setView('exam-results:' + id, html);
    document.title = 'Exam results — K&S Study Companion';""", """    setView('exam-results:' + id, html);
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
    return '<div class="banner"><p><b>Chapter ' + c.number + ': ' + esc(c.short || c.title) + '.</b> ' + msg + '</p><div class="empty__actions"><a class="btn btn--solid" href="#/c/' + c.id + '/guide">Open the study guide</a></div></div>';""")

# ---- 7. routes
js = rep(js, "      case 'all-highyield': return renderAllHighYield();", """      case 'all-highyield': return renderAllHighYield();
      case 'quiz': return renderQuiz(p);
      case 'compare': return p[1] ? renderCompare(p[1]) : renderCompareList();""")

# stop reading aloud when the page changes
js = rep(js, """  function setView(key, html, focusFn, opts) {
    if (view.cleanup) { view.cleanup(); view.cleanup = null; }""", """  function setView(key, html, focusFn, opts) {
    if (view.cleanup) { view.cleanup(); view.cleanup = null; }
    if (TTS && TTS.ok) TTS.stop();""")

# ---- 8. look-alike pages
js = rep(js, "  /* ---------- high yield ---------- */", """  /* ---------- look-alikes (comparisons across chapters) ---------- */
  function lookalike(id) { var l = KS.lookalikes || []; for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function renderCompareList() {
    var list = (KS.lookalikes || []).slice().sort(function (a, b) { return a.title.localeCompare(b.title); });
    var html = '<div class="wrap page">' +
      '<header class="page__head"><h1>Look-alikes</h1><p>Side-by-side comparisons of conditions that are easy to confuse, with the features that tell them apart and links to the chapters.</p></header>' +
      (list.length ? '<ul class="cmp-list">' + list.map(function (c) {
        return '<li><a class="cmp-card" href="#/compare/' + c.id + '"><span class="cmp-card__title">' + esc(c.title) + '</span><span class="cmp-card__meta">' + esc(c.summary || '') + '</span><span class="cmp-card__ch">' +
          chaptersIn(c).map(function (ch) { return 'Ch ' + ch.number; }).join(' \\u00b7 ') + '</span></a></li>';
      }).join('') + '</ul>' : '<p class="muted">Comparisons are being added chapter by chapter.</p>') +
      '</div>';
    setView('compare', html);
    document.title = 'Look-alikes — K&S Study Companion';
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
      '<p class="muted cmp-src">' + esc(c.source || 'Built from Kaplan & Sadock\\u2019s Synopsis of Psychiatry, 12th edition.') + '</p>' +
      '</div>';
    setView('compare:' + id, html);
    main.querySelectorAll('.compare').forEach(function (s) { if (DRUG) DRUG.link(s); linkTerms(s); });
    document.title = c.title + ' — K&S Study Companion';
  }

  /* ---------- high yield ---------- */""")

# search entries for look-alikes
js = rep(js, "    if (DRUG) DRUG.searchEntries().forEach(function (e) { INDEX.push(e); });", """    if (DRUG) DRUG.searchEntries().forEach(function (e) { INDEX.push(e); });
    (KS.lookalikes || []).forEach(function (c) {
      INDEX.push({ ch: null, kind: 'compare', title: c.title, src: 'Look-alikes', text: plain(c.title + ' ' + (c.summary || '') + ' ' + c.items.join(' ') + ' ' + c.rows.map(function (r) { return r.join(' '); }).join(' ') + ' ' + (c.keys || []).join(' ')), href: '#/compare/' + c.id });
    });""")

# ---- 9. high-yield listen
js = rep(js, """<a class="btn" href="#/teach" id="hy-teach">Present as fill-in-the-blank</a></div>' +""", """<a class="btn" href="#/teach" id="hy-teach">Present as fill-in-the-blank</a>' + (TTS.ok ? '<button class="btn" type="button" id="hy-listen">Listen</button>' : '') + '</div>' +""")
js = rep(js, """    if (hyt) hyt.addEventListener('click', function () { var tp = teachPrefs(); tp.scope = ch.id; tp.kind = 'hy'; store.set('teachPrefs', tp); });""", """    if (hyt) hyt.addEventListener('click', function () { var tp = teachPrefs(); tp.scope = ch.id; tp.kind = 'hy'; store.set('teachPrefs', tp); });
    var hyl = main.querySelector('#hy-listen');
    if (hyl) hyl.addEventListener('click', function () {
      var items = [];
      main.querySelectorAll('.hy-topic').forEach(function (t) {
        var h = t.querySelector('h2'), lab = h ? h.textContent : '';
        items.push({ el: h, text: lab + '.', label: lab });
        t.querySelectorAll('li').forEach(function (li) { items.push({ el: li, text: speakText(li), label: lab }); });
      });
      TTS.start(items, 'Chapter ' + ch.number + ' high yield');
    });""")

# ---- 10. backup keys
js = rep(js, "glLinks: 'b', theme: 's' };", "glLinks: 'b', theme: 's', prepost: 'o', textSize: 's', ttsRate: 's' };")

# ---- 11. menu and home links
js = rep(js, """<a href="#/all-highyield"><span class="mn-num" aria-hidden="true"></span><span class="mn-ch">All high-yield (PDF)</span></a>""", """<a href="#/all-highyield"><span class="mn-num" aria-hidden="true"></span><span class="mn-ch">All high-yield (PDF)</span></a><a href="#/compare"><span class="mn-num" aria-hidden="true"></span><span class="mn-ch">Look-alikes</span></a>""")
js = rep(js, """          '<a class="tool" href="#/bookmarks"><span class="tool__name">Bookmarks</span>""", """          '<a class="tool" href="#/compare"><span class="tool__name">Look-alikes</span><span class="tool__meta">' + ((KS.lookalikes || []).length ? plural((KS.lookalikes || []).length, 'side-by-side comparison') + ' of conditions that are easy to confuse' : 'Side-by-side comparisons of conditions that are easy to confuse') + '</span></a>' +
          '<a class="tool" href="#/bookmarks"><span class="tool__name">Bookmarks</span>""")
js = rep(js, """        '<a class="tool" href="#/whats-new"><span class="tool__name">What’s new</span>""", """        '<a class="tool" href="#/exam"><span class="tool__name">Shareable quiz</span><span class="tool__meta">Pick chapters and board domains in Exam mode, then share a link or QR code so every resident gets the same questions in the same order.</span></a>' +
        '<a class="tool" href="#/whats-new"><span class="tool__name">What’s new</span>""")

# ---- 12. read aloud and display settings (before the bottom tab bar module)
js = rep(js, "  /* ---------- bottom tab bar: markers, actions and auto-hide on scroll ---------- */", """  /* ---------- display settings: text size and read-aloud speed ---------- */
  var TEXT_SIZES = [['90', 'Smaller'], ['100', 'Default'], ['112.5', 'Larger'], ['125', 'Largest']];
  var TTS_RATES = [['0.8', '0.8\\u00d7'], ['1', '1\\u00d7'], ['1.2', '1.2\\u00d7'], ['1.5', '1.5\\u00d7'], ['1.8', '1.8\\u00d7']];
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
      }).join('') + '</div><p class="display-panel__note">Tap the speaker beside any study-guide section, or Listen on a high-yield page, to hear it read aloud. It uses your device\\u2019s built-in voice and works offline.</p>' :
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

  /* ---------- bottom tab bar: markers, actions and auto-hide on scroll ---------- */""")

# TTS engine placed near the top so other code can call it
js = rep(js, "  /* ---------- data loading ---------- */", """  /* ---------- read aloud ----------
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
      t = String(t || '').replace(/\\s+/g, ' ').trim();
      if (!t) return [];
      var parts = t.match(/[^.!?;]+[.!?;]*\\s*/g) || [t], out = [], buf = '';
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

  /* ---------- data loading ---------- */""")

wr('js/app.js', js)

# ---- index.html: display button, early text size
h = rd('index.html')
h = rep(h, """    try { var t = localStorage.getItem('ks:v1:theme'); if (t) document.documentElement.setAttribute('data-theme', JSON.parse(t)); } catch (e) {}""", """    try { var t = localStorage.getItem('ks:v1:theme'); if (t) document.documentElement.setAttribute('data-theme', JSON.parse(t)); } catch (e) {}
    try { var z = JSON.parse(localStorage.getItem('ks:v1:textSize') || 'null'); if (z === '90' || z === '112.5' || z === '125') document.documentElement.style.fontSize = z + '%'; } catch (e) {}""")
h = rep(h, """      <button class="theme-btn" id="theme" type="button" aria-label="Switch color theme">""", """      <button class="theme-btn display-btn" id="display-btn" type="button" aria-label="Text size and read aloud" aria-expanded="false" aria-controls="display-panel" title="Text size and read aloud"><span aria-hidden="true">A<small>A</small></span></button>
      <button class="theme-btn" id="theme" type="button" aria-label="Switch color theme">""")
wr('index.html', h)
print('ok')
