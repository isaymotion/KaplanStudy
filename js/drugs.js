/* Drugs section: browse by class, drug pages, compare, drug drills, class sheets, drug-name links and
   post-publication updates. app.js calls KS.drugModule(api) once the data has loaded. */
(function () {
  'use strict';
  var KS = window.KS = window.KS || {};

  var LEVEL = { N: 0, L: 1, M: 2, H: 3 };
  var LEVEL_WORD = ['Minimal', 'Low', 'Moderate', 'High'];
  var BOOK_NOTE = 'Doses and details from Kaplan & Sadock’s Synopsis of Psychiatry, 12th edition, unless marked as a post-publication update. Confirm against current prescribing information.';

  KS.drugModule = function (A) {
    var esc = A.esc, fmt = A.fmt, plain = A.plain, store = A.store, plural = A.plural;
    var DRUGS = KS.drugs || [], CLASSES = KS.drugClasses || [];
    var BY_ID = {}, CLS = {}, GROUP = {};
    DRUGS.forEach(function (d) { BY_ID[d.id] = d; });
    CLASSES.forEach(function (c) { CLS[c.id] = c; c.groups.forEach(function (g) { GROUP[c.id + ':' + g.id] = g; }); });
    function groupOf(d) { return GROUP[d.cls + ':' + d.group] || { label: d.group, short: d.group }; }
    function clsOf(d) { return CLS[d.cls] || { label: d.cls, groups: [], profile: [], indications: {} }; }
    function inClassOrder(list) {
      var order = {};
      CLASSES.forEach(function (c, ci) { c.groups.forEach(function (g, gi) { order[c.id + ':' + g.id] = ci * 100 + gi; }); });
      return list.slice().sort(function (a, b) {
        var oa = order[a.cls + ':' + a.group] || 0, ob = order[b.cls + ':' + b.group] || 0;
        return oa - ob || DRUGS.indexOf(a) - DRUGS.indexOf(b);
      });
    }
    function brands(d) { return (d.brands || []).join(', '); }
    function hasUpdates(d) { return (d.updates || []).length > 0; }
    function bookBadge(d) {
      if (d.book === true) return '';
      if (d.book === 'list') return '<span class="dbadge dbadge--new" title="Only named in the 12th edition">Listed only in 12e</span>';
      return '<span class="dbadge dbadge--new" title="Not in the 12th edition">Not in 12e</span>';
    }

    /* ---------- post-publication update boxes ---------- */
    function srcLinks(u) {
      var src = (u.source || '').toLowerCase(), seen = {}, out = (u.links || []).slice();
      (KS.sourceLinks || []).forEach(function (l) { if (src.indexOf(l.m.toLowerCase()) !== -1) out.push(l); });
      // a cited label ("X prescribing information") links to its current DailyMed label when no entry covers it
      if (/prescribing information|label/.test(src)) {
        DRUGS.forEach(function (d) {
          (d.brands || []).forEach(function (b) {
            var w = String(b).split(/[ (]/)[0];
            if (w.length > 3 && new RegExp('\\b' + w.toLowerCase() + '\\b').test(src) && !out.some(function (l) { var t = l.label.toLowerCase(); return t.indexOf(w.toLowerCase()) !== -1 || t.indexOf(d.name.toLowerCase()) !== -1; }))
              out.push({ label: 'Label: ' + w + ' (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=' + encodeURIComponent(w) });
          });
        });
      }
      out = out.filter(function (l) { if (seen[l.url]) return false; seen[l.url] = 1; return true; });
      if (!out.length) return '';
      return '<p class="update__links"><span>Read the source:</span> ' + out.map(function (l) {
        return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + '<span class="sr-only"> (opens in a new tab)</span></a>';
      }).join('') + '</p>';
    }
    function updateBox(u, opts) {
      return '<aside class="g-block update"' + (opts && opts.id ? ' id="' + opts.id + '"' : '') + '>' +
        '<p class="update__kicker">Post-publication update' + (u.year ? ' · ' + esc(u.year) : '') + '</p>' +
        (u.title ? '<p class="update__title">' + fmt(u.title) + '</p>' : '') +
        '<p class="update__text">' + fmt(u.text) + '</p>' +
        '<p class="update__src">Not from the 12th edition.' + (u.source ? ' Source: ' + esc(u.source) + '.' : '') + ' Confirm against current labeling.</p>' + srcLinks(u) + '</aside>';
    }

    /* ---------- generated drill cards ---------- */
    var CARD_IDS = {};   // drug id -> [card keys]
    function inject() {
      DRUGS.forEach(function (d) {
        if (!d.drill || !KS.chapters || !KS.chapters[d.chapter]) return;
        var chd = KS.chapters[d.chapter];
        chd.pharm = chd.pharm || [];
        var tag = groupOf(d).short || clsOf(d).label;
        var nm = '**' + d.name + '**' + (d.brands && d.brands.length ? ' (' + d.brands[0] + ')' : '');
        var cards = [];
        if (d.drill.mech) cards.push({ id: 'dg-' + d.id + '-mech', q: 'What is the mechanism of ' + nm + '?', a: d.drill.mech });
        if (d.drill.dose) cards.push({ id: 'dg-' + d.id + '-dose', q: nm + ': starting dose, usual range and maximum?', a: d.drill.dose });
        if (d.drill.se) cards.push({ id: 'dg-' + d.id + '-se', q: nm + ': which side effects define it?', a: d.drill.se });
        if (d.drill.mon && d.drill.mon !== '—') cards.push({ id: 'dg-' + d.id + '-mon', q: nm + ': what needs monitoring?', a: d.drill.mon });
        if (d.indications && d.indications.approved && d.indications.approved.length) cards.push({ id: 'dg-' + d.id + '-ind', q: nm + ': what is it approved for?', a: d.indications.approved.join('; ') + (d.book !== true ? ' (post-publication)' : '') });
        (d.clues || []).forEach(function (cl, i) {
          cards.push({ id: 'dg-' + d.id + '-who' + (i + 1), q: 'Which ' + (clsOf(d).singular || 'drug') + ' is ' + cl + '?', a: nm + '. ' + d.summary });
        });
        CARD_IDS[d.id] = [];
        cards.forEach(function (c) {
          c.tag = tag; c.drug = d.id;
          if (!chd.pharm.some(function (x) { return x.id === c.id; })) chd.pharm.push(c);
          CARD_IDS[d.id].push(d.chapter + '/pharm/' + c.id);
        });
      });
    }
    function keysFor(scope) {
      var list = scopeDrugs(scope), out = [];
      list.forEach(function (d) { (CARD_IDS[d.id] || []).forEach(function (k) { if (A.cards()[k]) out.push(k); }); });
      return out;
    }
    function scopeDrugs(scope) {
      if (!scope || scope === 'all') return inClassOrder(DRUGS);
      var parts = scope.split(':');
      if (parts[0] === 'drug') return BY_ID[parts[1]] ? [BY_ID[parts[1]]] : [];
      return inClassOrder(DRUGS.filter(function (d) { return d.cls === parts[0] && (!parts[1] || d.group === parts[1]); }));
    }
    function scopeLabel(scope) {
      if (!scope || scope === 'all') return 'All drugs';
      var p = scope.split(':');
      if (p[0] === 'drug') return BY_ID[p[1]] ? BY_ID[p[1]].name : 'Drug';
      var c = CLS[p[0]]; if (!c) return 'Drugs';
      return p[1] && GROUP[p[0] + ':' + p[1]] ? c.label + ': ' + GROUP[p[0] + ':' + p[1]].short : c.label;
    }

    /* ---------- profile meters ---------- */
    function pips(level, label) {
      var n = LEVEL[level];
      if (n == null) return '<span class="pips pips--na" title="Not described in the book">—</span>';
      var out = '<span class="pips pips--' + n + '" role="img" aria-label="' + esc(label) + ': ' + LEVEL_WORD[n] + '" title="' + LEVEL_WORD[n] + '">';
      for (var i = 1; i <= 3; i++) out += '<i' + (i <= n ? ' class="on"' : '') + '></i>';
      return out + '</span>';
    }
    function profileTable(d) {
      var c = clsOf(d), p = d.profile || {};
      var rows = (c.profile || []).filter(function (k) { return p[k[0]]; });
      if (!rows.length) return '';
      return '<div class="dprofile">' + rows.map(function (k) {
        return '<div class="dprofile__row"><span>' + esc(k[1]) + '</span>' + pips(p[k[0]], k[1]) + '<span class="dprofile__w">' + LEVEL_WORD[LEVEL[p[k[0]]]] + '</span></div>';
      }).join('') + '</div>';
    }

    /* ---------- browse ---------- */
    function prefs() { return store.get('drugPrefs', { cls: 'all', ind: '', low: [], q: '' }); }
    function savePrefs(p) { store.set('drugPrefs', p); }
    function matches(d, p) {
      if (p.cls && p.cls !== 'all' && d.cls !== p.cls) return false;
      if (p.ind && (d.ind || []).indexOf(p.ind) < 0) return false;
      if (p.low && p.low.length) {
        for (var i = 0; i < p.low.length; i++) { var v = (d.profile || {})[p.low[i]]; if (!v || LEVEL[v] > 1) return false; }
      }
      if (p.q) {
        var hay = (d.name + ' ' + brands(d) + ' ' + d.summary + ' ' + groupOf(d).label).toLowerCase();
        if (hay.indexOf(p.q.toLowerCase()) < 0) return false;
      }
      return true;
    }
    function drugCard(d) {
      var c = clsOf(d), p = d.profile || {};
      var mini = (c.profile || []).filter(function (k) { return p[k[0]]; }).slice(0, 4).map(function (k) {
        return '<span class="dmini"><span>' + esc(k[1].replace(' and metabolic', '')) + '</span>' + pips(p[k[0]], k[1]) + '</span>';
      }).join('');
      return '<li><a class="dcard" href="#/drugs/' + d.id + '">' +
        '<span class="dcard__name">' + esc(d.name) + bookBadge(d) + (hasUpdates(d) ? '<span class="dbadge dbadge--upd" title="Has post-publication updates">Updated</span>' : '') + '</span>' +
        (d.brands && d.brands.length ? '<span class="dcard__brand">' + esc(brands(d)) + '</span>' : '') +
        '<span class="dcard__sum">' + fmt(d.summary) + '</span>' +
        (mini ? '<span class="dcard__mini">' + mini + '</span>' : '') + '</a></li>';
    }
    function renderBrowse() {
      var p = prefs();
      var clsOpts = '<option value="all">All classes</option>' + CLASSES.map(function (c) { return '<option value="' + c.id + '"' + (p.cls === c.id ? ' selected' : '') + '>' + esc(c.label) + '</option>'; }).join('');
      var indSet = {};
      CLASSES.forEach(function (c) { if (p.cls === 'all' || p.cls === c.id) Object.keys(c.indications || {}).forEach(function (k) { indSet[k] = c.indications[k]; }); });
      var indOpts = '<option value="">Any indication</option>' + Object.keys(indSet).map(function (k) { return '<option value="' + k + '"' + (p.ind === k ? ' selected' : '') + '>' + esc(indSet[k]) + '</option>'; }).join('');
      var lowSet = {};
      CLASSES.forEach(function (c) { if (p.cls === 'all' || p.cls === c.id) (c.lowFilters || []).forEach(function (f) { lowSet[f[0]] = f[1]; }); });
      var lowChips = Object.keys(lowSet).map(function (k) { return '<button class="filter" type="button" data-low="' + k + '" aria-pressed="' + (p.low.indexOf(k) > -1) + '">' + esc(lowSet[k]) + '</button>'; }).join('');
      var html = '<div class="wrap page drugs-page">' +
        '<header class="page__head"><h1>Drugs</h1><p>Every drug from the pharmacology chapters, arranged by class, with mechanism, indications, dosing, side effects, monitoring and interactions. Open a drug, compare up to four side by side, drill the facts with spaced repetition, or print a one-page class sheet.</p></header>' +
        '<div class="dtools"><a class="btn btn--solid" href="#/drugs/compare">Compare drugs</a><a class="btn" href="#/drugs/drill/all">Drill all drugs</a><a class="btn" href="#/updates">Post-publication updates</a></div>' +
        '<div class="dfilters">' +
          '<label class="select"><span class="sr-only">Class</span><select id="df-cls">' + clsOpts + '</select></label>' +
          '<label class="select"><span class="sr-only">Indication</span><select id="df-ind">' + indOpts + '</select></label>' +
          '<label class="dsearch"><span class="sr-only">Filter by name</span><input id="df-q" type="search" placeholder="Filter by name or brand" value="' + esc(p.q || '') + '" autocomplete="off"></label>' +
          (lowChips ? '<div class="filters dfilters__low" role="group" aria-label="Side-effect filters">' + lowChips + '</div>' : '') +
        '</div>' +
        '<div id="dlist"></div>' +
        '<p class="dnote">' + esc(BOOK_NOTE) + ' Side-effect levels summarize the book’s descriptions and Table 21-12; a dash means the book does not rate it.</p>' +
        '</div>';
      A.setView('drugs', html, null, { keepScroll: A.viewKey() === 'drugs' });
      document.title = 'Drugs — K&S Study Companion';
      var listEl = A.main().querySelector('#dlist');
      function draw() {
        var shown = inClassOrder(DRUGS.filter(function (d) { return matches(d, p); }));
        if (!shown.length) { listEl.innerHTML = '<div class="empty"><h2>No drugs match</h2><p>Loosen a filter to see more.</p><button class="btn" type="button" id="df-clear">Clear filters</button></div>'; bindClear(); return; }
        var out = '';
        CLASSES.forEach(function (c) {
          var inCls = shown.filter(function (d) { return d.cls === c.id; });
          if (!inCls.length) return;
          var ch = A.chapter(c.chapter);
          out += '<section class="dclass"><div class="dclass__head"><h2>' + esc(c.label) + '</h2>' + (ch ? '<a href="#/c/' + ch.id + '/guide">Chapter ' + esc(ch.number) + ' study guide</a>' : '') + '</div>' + (c.intro ? '<p class="dclass__intro">' + fmt(c.intro) + '</p>' : '');
          c.groups.forEach(function (g) {
            var inG = inCls.filter(function (d) { return d.group === g.id; });
            if (!inG.length) return;
            var scope = c.id + ':' + g.id, n = keysFor(scope).length;
            out += '<div class="dgroup"><div class="dgroup__head"><h3>' + esc(g.label) + ' <span class="muted">(' + inG.length + ')</span></h3><div class="dgroup__acts">' +
              (n ? '<a class="btn btn--small" href="#/drugs/drill/' + scope + '">Drill ' + n + ' cards</a>' : '') +
              '<a class="btn btn--small" href="#/drugs/compare/' + inG.slice(0, 4).map(function (d) { return d.id; }).join(',') + '">Compare</a>' +
              '<button class="btn btn--small" type="button" data-sheet="' + scope + '">Class sheet PDF</button></div></div>' +
              '<ul class="dgrid">' + inG.map(drugCard).join('') + '</ul></div>';
          });
          out += '</section>';
        });
        listEl.innerHTML = out;
        listEl.querySelectorAll('[data-sheet]').forEach(function (b) { b.addEventListener('click', function () { classSheet(b.getAttribute('data-sheet'), b); }); });
      }
      function bindClear() {
        var b = listEl.querySelector('#df-clear');
        if (b) b.addEventListener('click', function () { p = { cls: 'all', ind: '', low: [], q: '' }; savePrefs(p); renderBrowse(); });
      }
      draw();
      var m = A.main();
      m.querySelector('#df-cls').addEventListener('change', function (e) { p.cls = e.target.value; p.ind = ''; p.low = []; savePrefs(p); renderBrowse(); });
      m.querySelector('#df-ind').addEventListener('change', function (e) { p.ind = e.target.value; savePrefs(p); draw(); });
      m.querySelector('#df-q').addEventListener('input', function (e) { p.q = e.target.value.trim(); savePrefs(p); draw(); });
      m.querySelectorAll('[data-low]').forEach(function (b) {
        b.addEventListener('click', function () {
          var k = b.getAttribute('data-low'), i = p.low.indexOf(k);
          if (i > -1) p.low.splice(i, 1); else p.low.push(k);
          b.setAttribute('aria-pressed', String(i < 0)); savePrefs(p); draw();
        });
      });
    }

    /* ---------- drug page ---------- */
    function list(items) { return items && items.length ? '<ul>' + items.map(function (i) { return '<li>' + fmt(i) + '</li>'; }).join('') + '</ul>' : ''; }
    function field(id, title, body, d) {
      if (!body) return '';
      var ups = (d.updates || []).filter(function (u) { return u.field === id; }).map(function (u) { return updateBox(u); }).join('');
      return '<section class="dsec" id="d-' + id + '"><h2>' + esc(title) + '</h2>' + body + ups + '</section>';
    }
    function doseBlock(d) {
      var x = d.dose; if (!x) return '';
      var rows = [['Starting dose', x.start], ['Titration', x.titration], ['Usual range', x.range], ['Maximum', x.max]].filter(function (r) { return r[1] && r[1] !== '—'; });
      return (d.forms ? '<p class="dforms"><b>Forms:</b> ' + fmt(d.forms) + '</p>' : '') +
        (rows.length ? '<dl class="defs">' + rows.map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + fmt(r[1]) + '</dd>'; }).join('') + '</dl>' : '') +
        list(x.notes) + (d.potency ? '<p><b>Potency:</b> ' + fmt(d.potency) + '</p>' : '');
    }
    function quick(d) {
      var x = d.dose || {}, cells = [['Start', x.start], ['Usual', x.range], ['Max', x.max], ['Half-life', d.half]].filter(function (c) { return c[1] && c[1] !== '—'; });
      return cells.length ? '<dl class="dquick">' + cells.map(function (c) { return '<div><dt>' + c[0] + '</dt><dd>' + fmt(c[1]) + '</dd></div>'; }).join('') + '</dl>' : '';
    }
    function renderDrug(id) {
      var d = BY_ID[id];
      if (!d) return A.renderMissing();
      var c = clsOf(d), g = groupOf(d), ch = A.chapter(d.chapter);
      var siblings = inClassOrder(DRUGS.filter(function (x) { return x.cls === d.cls && x.group === d.group; }));
      var si = siblings.indexOf(d), prev = siblings[si - 1], next = siblings[si + 1];
      var general = (d.updates || []).filter(function (u) { return !u.field; });
      var nCards = (CARD_IDS[d.id] || []).length;
      var secLink = ch && d.sec ? '<a href="#/c/' + ch.id + '/guide/' + d.sec + '">Read Chapter ' + esc(ch.number) + ': ' + esc(ch.short || ch.title) + '</a>' : '';
      var html = '<div class="wrap page drug-page">' +
        '<p class="crumb"><a href="#/drugs">Drugs</a> › ' + esc(c.label) + ' › ' + esc(g.short || g.label) + '</p>' +
        '<header class="dhead"><h1>' + esc(d.name) + '</h1>' + (d.brands && d.brands.length ? '<p class="dhead__brand">' + esc(brands(d)) + '</p>' : '') +
          '<p class="dhead__sum">' + fmt(d.summary) + '</p><p class="dhead__tags"><span class="kind c-pharm">' + esc(g.label) + '</span>' + bookBadge(d) + '</p></header>' +
        quick(d) +
        '<div class="dacts">' + (nCards ? '<a class="btn btn--solid btn--small" href="#/drugs/drill/drug:' + d.id + '">Drill ' + plural(nCards, 'card') + '</a>' : '') +
          '<a class="btn btn--small" href="#/drugs/compare/' + d.id + '">Compare with…</a>' + (secLink ? '<span class="dacts__read">' + secLink + '</span>' : '') + '</div>' +
        general.map(function (u) { return updateBox(u); }).join('') +
        '<div class="dbody">' +
          field('mechanism', 'Mechanism', d.mechanism ? '<p>' + fmt(d.mechanism) + '</p>' : '', d) +
          field('indications', 'Indications', d.indications ? (d.indications.approved && d.indications.approved.length ? '<h3>Approved</h3>' + list(d.indications.approved) : '') + (d.indications.other && d.indications.other.length ? '<h3>Other uses in the book</h3>' + list(d.indications.other) : '') : '', d) +
          field('dose', 'Dosing', doseBlock(d), d) +
          field('pk', 'Pharmacokinetics', (d.half ? '<p><b>Half-life:</b> ' + fmt(d.half) + '</p>' : '') + list(d.pk), d) +
          field('effects', 'Side effects', d.effects ? (profileTable(d) + (d.effects.common && d.effects.common.length ? '<h3>Common</h3>' + list(d.effects.common) : '') + (d.effects.serious && d.effects.serious.length ? '<h3 class="dserious">Serious and boxed</h3><ul class="dserious__list">' + d.effects.serious.map(function (i) { return '<li>' + fmt(i) + '</li>'; }).join('') + '</ul>' : '')) : '', d) +
          field('monitoring', 'Monitoring', list(d.monitoring), d) +
          field('interactions', 'Interactions and contraindications', list(d.interactions), d) +
          field('populations', 'Special populations', d.populations && d.populations.length ? '<dl class="defs">' + d.populations.map(function (r) { return '<dt>' + fmt(r[0]) + '</dt><dd>' + fmt(r[1]) + '</dd>'; }).join('') + '</dl>' : '', d) +
          field('pearls', 'Pearls', list(d.pearls), d) +
        '</div>' +
        '<nav class="dpager" aria-label="Other drugs in this group">' + (prev ? '<a href="#/drugs/' + prev.id + '">‹ ' + esc(prev.name) + '</a>' : '<span></span>') + (next ? '<a href="#/drugs/' + next.id + '">' + esc(next.name) + ' ›</a>' : '<span></span>') + '</nav>' +
        '<p class="dnote">' + esc(BOOK_NOTE) + '</p></div>';
      A.setView('drug:' + d.id, html);
      document.title = d.name + ' — Drugs — K&S Study Companion';
      var body = A.main().querySelector('.dbody');
      if (body) A.linkTerms(body, { skip: '.update' });
    }

    /* ---------- compare ---------- */
    function renderCompare(arg) {
      var sel = (arg || '').split(',').filter(function (x) { return BY_ID[x]; }).slice(0, 4);
      var p = store.get('cmpPrefs', { cls: '', group: '' });
      if (!p.cls && sel.length) { p.cls = BY_ID[sel[0]].cls; p.group = ''; }
      if (!p.cls && CLASSES.length) p.cls = CLASSES[0].id;
      var c = CLS[p.cls] || CLASSES[0];
      var pool = inClassOrder(DRUGS.filter(function (d) { return (!c || d.cls === c.id) && (!p.group || d.group === p.group); }));
      var clsOpts = CLASSES.map(function (x) { return '<option value="' + x.id + '"' + (c && x.id === c.id ? ' selected' : '') + '>' + esc(x.label) + '</option>'; }).join('');
      var grpOpts = '<option value="">All groups</option>' + (c ? c.groups.map(function (g) { return '<option value="' + g.id + '"' + (p.group === g.id ? ' selected' : '') + '>' + esc(g.short || g.label) + '</option>'; }).join('') : '');
      var chips = pool.map(function (d) {
        var on = sel.indexOf(d.id) > -1;
        return '<button class="filter" type="button" data-pick="' + d.id + '" aria-pressed="' + on + '"' + (!on && sel.length >= 4 ? ' disabled' : '') + '>' + esc(d.name) + '</button>';
      }).join('');
      var chosen = sel.map(function (id) { return BY_ID[id]; });
      var table = '';
      if (chosen.length) {
        var rows = [
          ['Group', function (d) { return esc(groupOf(d).short || groupOf(d).label) + (d.book !== true ? ' ' + bookBadge(d) : ''); }],
          ['Brand', function (d) { return esc(brands(d)); }],
          ['Mechanism', function (d) { return fmt(d.drill && d.drill.mech || d.mechanism || ''); }],
          ['Approved for', function (d) { return d.indications && d.indications.approved ? list(d.indications.approved) : ''; }],
          ['Starting dose', function (d) { return fmt(d.dose && d.dose.start || ''); }],
          ['Usual range', function (d) { return fmt(d.dose && d.dose.range || ''); }],
          ['Maximum', function (d) { return fmt(d.dose && d.dose.max || ''); }],
          ['Half-life', function (d) { return fmt(d.half || ''); }]
        ];
        var profKeys = [];
        chosen.forEach(function (d) { (clsOf(d).profile || []).forEach(function (k) { if (!profKeys.some(function (x) { return x[0] === k[0]; })) profKeys.push(k); }); });
        profKeys.forEach(function (k) { rows.push([k[1], function (d) { var v = (d.profile || {})[k[0]]; return pips(v, k[1]) + (v ? ' <span class="dprofile__w">' + LEVEL_WORD[LEVEL[v]] + '</span>' : ''); }, 'prof']); });
        rows.push(['Serious effects', function (d) { return d.effects ? list(d.effects.serious) : ''; }]);
        rows.push(['Monitoring', function (d) { return list(d.monitoring); }]);
        rows.push(['Key interactions', function (d) { return list((d.interactions || []).slice(0, 3)); }]);
        rows.push(['Since the 12th edition', function (d) { return (d.updates || []).length ? list(d.updates.map(function (u) { return u.year + ': ' + u.title; })) : '<span class="muted">No updates</span>'; }]);
        table = '<div class="table-wrap cmp-wrap" tabindex="0" role="region" aria-label="Drug comparison"><table class="cmp"><thead><tr><th scope="col"><span class="sr-only">Feature</span></th>' +
          chosen.map(function (d) { return '<th scope="col"><a href="#/drugs/' + d.id + '">' + esc(d.name) + '</a><button class="cmp__x" type="button" data-drop="' + d.id + '" aria-label="Remove ' + esc(d.name) + '">×</button></th>'; }).join('') +
          '</tr></thead><tbody>' + rows.map(function (r) {
            return '<tr' + (r[2] ? ' class="cmp__prof"' : '') + '><th scope="row">' + esc(r[0]) + '</th>' + chosen.map(function (d) { return '<td>' + (r[1](d) || '<span class="muted">—</span>') + '</td>'; }).join('') + '</tr>';
          }).join('') + '</tbody></table></div>';
      }
      var html = '<div class="wrap page cmp-page">' +
        '<p class="crumb"><a href="#/drugs">Drugs</a></p>' +
        '<header class="page__head"><h1>Compare drugs</h1><p>Choose a class and group, then pick up to four drugs to see side by side.</p></header>' +
        '<div class="dfilters"><label class="select"><span>Class</span><select id="cm-cls">' + clsOpts + '</select></label><label class="select"><span>Group</span><select id="cm-grp">' + grpOpts + '</select></label>' +
          (sel.length ? '<button class="link-btn" type="button" id="cm-clear">Clear selection</button>' : '') + '</div>' +
        '<details class="cmp-pick"' + (sel.length < 2 || store.get('cmpOpen', false) ? ' open' : '') + '><summary>Choose drugs <span class="muted">(' + (sel.length ? sel.length + ' of 4 selected' : 'none selected yet') + ')</span></summary>' +
        '<div class="filters cmp-picks" role="group" aria-label="Drugs to compare">' + chips + '</div></details>' +
        (table || '<div class="empty"><h2>Pick drugs to compare</h2><p>Tap two to four names above.</p></div>') +
        '<p class="dnote">' + esc(BOOK_NOTE) + '</p></div>';
      A.setView('compare', html, null, { keepScroll: A.viewKey() === 'compare' });
      document.title = 'Compare drugs — K&S Study Companion';
      var m = A.main();
      function go(list) { location.hash = '#/drugs/compare/' + list.join(','); }
      m.querySelector('#cm-cls').addEventListener('change', function (e) { store.set('cmpPrefs', { cls: e.target.value, group: '' }); renderCompare(sel.join(',')); });
      m.querySelector('#cm-grp').addEventListener('change', function (e) { store.set('cmpPrefs', { cls: c.id, group: e.target.value }); renderCompare(sel.join(',')); });
      m.querySelectorAll('[data-pick]').forEach(function (b) {
        b.addEventListener('click', function () {
          var id = b.getAttribute('data-pick'), i = sel.indexOf(id), next = sel.slice();
          if (i > -1) next.splice(i, 1); else if (next.length < 4) next.push(id);
          store.set('cmpPrefs', { cls: c.id, group: p.group || '' });
          go(next);
        });
      });
      m.querySelectorAll('[data-drop]').forEach(function (b) { b.addEventListener('click', function () { go(sel.filter(function (x) { return x !== b.getAttribute('data-drop'); })); }); });
      var clr = m.querySelector('#cm-clear'); if (clr) clr.addEventListener('click', function () { go([]); });
      var det = m.querySelector('.cmp-pick'); if (det) det.addEventListener('toggle', function () { store.set('cmpOpen', det.open); });
    }

    /* ---------- drill ---------- */
    var drillSessions = {};
    function renderDrill(scope) {
      scope = scope || 'all';
      var keys = keysFor(scope);
      var S = drillSessions[scope] || (drillSessions[scope] = { mode: store.get('drillMode', 'study'), queue: null });
      function build() {
        if (S.mode === 'study') {
          var due = keys.filter(A.isDue).sort(function (a, b) { return A.srs()[a].d - A.srs()[b].d; });
          var fresh = keys.filter(function (k) { return !A.srs()[k]; });
          S.queue = due.concat(fresh);
        } else S.queue = A.shuffle(keys.slice());
      }
      build();
      var scopes = '<option value="all"' + (scope === 'all' ? ' selected' : '') + '>All drugs</option>' + CLASSES.map(function (c) {
        return '<option value="' + c.id + '"' + (scope === c.id ? ' selected' : '') + '>' + esc(c.label) + '</option>' + c.groups.map(function (g) {
          var s = c.id + ':' + g.id; return keysFor(s).length ? '<option value="' + s + '"' + (scope === s ? ' selected' : '') + '>  ' + esc(g.short || g.label) + '</option>' : '';
        }).join('');
      }).join('') + (scope.indexOf('drug:') === 0 ? '<option value="' + scope + '" selected>' + esc(scopeLabel(scope)) + '</option>' : '');
      var html = '<div class="wrap page cards-page c-pharm">' +
        '<p class="crumb"><a href="#/drugs">Drugs</a></p>' +
        '<header class="page__head"><h1>Drug drill</h1><p>Mechanism, dose, side effects, monitoring, indications and “which drug?” cards, built from the drug pages. Ratings feed the same spaced-repetition schedule as your daily review.</p></header>' +
        '<div class="deck-bar"><div class="deck-bar__opts">' +
          '<label class="select"><span>Drugs</span><select id="dr-scope">' + scopes + '</select></label>' +
          '<label class="select"><span>Show</span><select id="dr-mode"><option value="study"' + (S.mode === 'study' ? ' selected' : '') + '>Due and new cards</option><option value="shuffle"' + (S.mode === 'shuffle' ? ' selected' : '') + '>All cards, shuffled</option></select></label>' +
        '</div><span class="deck-bar__count">' + plural(keys.length, 'card') + '</span></div>' +
        '<div class="tally" id="tally"></div><div id="card-area" aria-live="polite"></div>' + A.kbdHelp(false) + '</div>';
      A.setView('drill:' + scope, html);
      document.title = 'Drug drill — K&S Study Companion';
      var m = A.main(), tally = m.querySelector('#tally'), player;
      function start() {
        if (player) player.destroy();
        player = A.Player(m.querySelector('#card-area'), {
          queue: S.queue, consume: S.mode === 'study', mode: 'srs',
          after: function () { tally.innerHTML = A.tallyHTML(A.tallyKeys(keys), 'Drug drill'); },
          done: function (stats) {
            return '<div class="empty"><h2>' + (stats.rated ? 'Drill done' : (S.mode === 'study' ? 'Nothing due here' : 'End of the cards')) + '</h2><p>' + (stats.rated ? 'You reviewed ' + plural(stats.rated, 'card') + '. ' : '') + 'Cards return when they are due.</p><div class="empty__actions"><button class="btn btn--solid" type="button" data-restart>Go again</button><a class="btn" href="#/drugs">Back to drugs</a></div></div>';
          }
        });
      }
      start();
      m.querySelector('#dr-scope').addEventListener('change', function (e) { location.hash = '#/drugs/drill/' + e.target.value; });
      m.querySelector('#dr-mode').addEventListener('change', function (e) { S.mode = e.target.value; store.set('drillMode', S.mode); build(); start(); });
      A.setCleanup(function () { if (player) player.destroy(); });
    }

    /* ---------- class sheet (PDF) ---------- */
    function sheetTopics(drugs) {
      return drugs.map(function (d) {
        var items = [];
        if (d.drill && d.drill.mech) items.push('**Mechanism:** ' + plain(d.drill.mech));
        if (d.drill && d.drill.dose) items.push('**Dose:** ' + plain(d.drill.dose));
        if (d.drill && d.drill.se) items.push('**Watch for:** ' + plain(d.drill.se));
        if (d.drill && d.drill.mon && d.drill.mon !== '—') items.push('**Monitor:** ' + plain(d.drill.mon));
        if (d.book !== true) items.push('*Post-publication drug; not in the 12th edition.*');
        return { id: d.id, topic: d.name + (d.brands && d.brands.length ? ' (' + d.brands[0] + ')' : ''), items: items };
      });
    }
    function splitEven(topics, k) {
      var out = [], per = Math.ceil(topics.length / k);
      for (var i = 0; i < topics.length; i += per) out.push(topics.slice(i, i + per));
      return out;
    }
    function classSheet(scope, btn) {
      if (!KS.handoutPdf) { A.toast('PDF tool did not load.'); return; }
      var drugs = scopeDrugs(scope), topics = sheetTopics(drugs);
      var hp = store.get('handoutPrefs', { paper: 'letter' }), paper = hp.paper === 'a4' ? 'a4' : 'letter';
      var blob = null;
      for (var pages = 1; pages <= 4; pages++) {
        blob = KS.handoutPdf({ paper: paper, blank: false, groups: splitEven(topics, pages), heading: 'Drug class sheet: ' + scopeLabel(scope), kicker: 'Drug class sheet', number: '', title: '', attribution: A.ATTRIBUTION,
          src: ['Kaplan & Sadock’s Synopsis of Psychiatry, 12th ed.', 'Confirm doses against current labeling'] });
        if (blob && blob.fontSize >= 7) break;
      }
      if (!blob) { A.toast('Could not build the class sheet.'); return; }
      A.savePdf(blob, 'KS-drugs-' + scope.replace(/[:]/g, '-') + '-' + paper + '.pdf');
    }

    /* ---------- drug-name links in reading text ---------- */
    var NAME_RE = null, NAME_MAP = {};
    function buildNames() {
      var names = [];
      DRUGS.forEach(function (d) {
        [d.name].concat(d.brands || []).forEach(function (n) {
          var base = n.replace(/\s*\(.*\)$/, '');
          if (base.length < 4 || /\s(M-Tab|Zydis|Consta|Relprevv|Maintena|Sustenna|Decanoate|XR)$/.test(base) && base !== d.name) return;
          var k = base.toLowerCase(); if (NAME_MAP[k]) return;
          NAME_MAP[k] = d.id; names.push(base);
        });
      });
      names.sort(function (a, b) { return b.length - a.length; });
      NAME_RE = names.length ? new RegExp('(^|[^A-Za-z\\u00C0-\\u024F-])(' + names.map(function (n) { return n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')(?![A-Za-z\\u00C0-\\u024F])', 'gi') : null;
    }
    var LINK_SKIP = 'a, button, h1, h2, h3, h4, .gl, .dl, .update, .toc, caption, .face__tag, .g-n, .kind';
    function link(root) {
      if (!root || !DRUGS.length) return;
      if (!NAME_RE) buildNames();
      if (!NAME_RE) return;
      var seen = {};
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.length < 4) return NodeFilter.FILTER_REJECT;
        var pe = n.parentElement; if (!pe || pe.closest(LINK_SKIP)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      } });
      var nodes = [], n; while ((n = walker.nextNode())) nodes.push(n);
      nodes.forEach(function (node) {
        var text = node.nodeValue, m, last = 0, frag = null; NAME_RE.lastIndex = 0;
        while ((m = NAME_RE.exec(text))) {
          var id = NAME_MAP[m[2].toLowerCase()]; if (!id || seen[id]) continue;
          seen[id] = 1;
          var start = m.index + m[1].length;
          frag = frag || document.createDocumentFragment();
          frag.appendChild(document.createTextNode(text.slice(last, start)));
          var a = document.createElement('a'); a.className = 'dl'; a.href = '#/drugs/' + id; a.setAttribute('data-drug', id); a.textContent = m[2];
          a.setAttribute('aria-label', m[2] + ', open drug summary');
          frag.appendChild(a); last = start + m[2].length;
        }
        if (frag) { frag.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(frag, node); }
      });
    }
    /* tap a drug link: show a small summary card first */
    var pop = null, popFor = null;
    function closePop() { if (pop) pop.hidden = true; popFor = null; }
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a.dl');
      if (!a) { if (pop && !pop.hidden && !(e.target.closest && e.target.closest('#dpop'))) closePop(); return; }
      var d = BY_ID[a.getAttribute('data-drug')]; if (!d) return;
      e.preventDefault();
      if (popFor === a && pop && !pop.hidden) { closePop(); return; }
      if (!pop) {
        pop = document.createElement('div'); pop.id = 'dpop'; pop.className = 'glpop dpop'; pop.setAttribute('role', 'dialog'); pop.hidden = true; document.body.appendChild(pop);
        pop.addEventListener('click', function (ev) { if (ev.target.closest('[data-close]')) closePop(); else if (ev.target.closest('a')) closePop(); });
      }
      var x = d.dose || {};
      pop.setAttribute('aria-label', d.name + ' summary');
      pop.innerHTML = '<div class="glpop__head"><p class="glpop__t">' + esc(d.name) + (d.brands && d.brands.length ? ' <span class="muted">(' + esc(d.brands[0]) + ')</span>' : '') + '</p><button class="glpop__x" type="button" data-close aria-label="Close">×</button></div>' +
        '<p class="dpop__g">' + esc(groupOf(d).label) + '</p><p class="glpop__d">' + fmt(d.summary) + '</p>' +
        ((x.range || x.max) ? '<p class="dpop__dose">' + (x.range && x.range !== '—' ? '<b>Usual:</b> ' + fmt(x.range) + ' ' : '') + (x.max && x.max !== '—' ? '<b>Max:</b> ' + fmt(x.max) : '') + '</p>' : '') +
        '<p class="glpop__foot"><span>Drug reference</span><a href="#/drugs/' + d.id + '">Open drug page</a></p>';
      pop.hidden = false; popFor = a;
      var r = a.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 24);
      pop.style.width = w + 'px';
      var left = Math.max(12, Math.min(r.left + window.scrollX, window.scrollX + window.innerWidth - w - 12));
      pop.style.left = left + 'px'; pop.style.top = (r.bottom + window.scrollY + 8) + 'px';
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePop(); });
    window.addEventListener('hashchange', closePop);

    /* ---------- post-publication updates page ---------- */
    function allUpdates() {
      var out = [];
      A.allChapters().forEach(function (ch) {
        (ch.guide && ch.guide.parts || []).forEach(function (pt) {
          pt.sections.forEach(function (s) {
            s.blocks.forEach(function (b, i) { if (b.type === 'update') out.push({ u: b, where: 'Chapter ' + ch.number + ': ' + s.title, href: '#/c/' + ch.id + '/guide/' + s.id + '--' + i }); });
          });
        });
      });
      DRUGS.forEach(function (d) { (d.updates || []).forEach(function (u) { out.push({ u: u, where: 'Drug page: ' + d.name, href: '#/drugs/' + d.id }); }); });
      out.sort(function (a, b) { return String(b.u.year || '').localeCompare(String(a.u.year || '')); });
      return out;
    }
    function renderUpdates() {
      var ups = allUpdates(), years = {};
      // group by the latest year mentioned; corrections and checks without a year go last
      function latest(y) { var m = String(y || '').match(/\d{4}/g); return m ? Math.max.apply(null, m.map(Number)) : 0; }
      ups.forEach(function (x) { var k = latest(x.u.year) || 'Corrections and dose checks'; (years[k] = years[k] || []).push(x); });
      var body = Object.keys(years).sort(function (a, b) { return (Number(b) || 0) - (Number(a) || 0); }).map(function (y) {
        return '<section class="upd-year"><h2>' + esc(y) + '</h2>' + years[y].map(function (x) {
          return '<div class="upd-item"><p class="upd-item__where"><a href="' + x.href + '">' + esc(x.where) + '</a></p>' + updateBox(x.u) + '</div>';
        }).join('') + '</section>';
      }).join('');
      var html = '<div class="wrap page upd-page"><header class="page__head"><h1>Post-publication updates</h1><p>Approvals, label changes and guideline updates since the 12th edition, gathered from the study guides and drug pages. Each one names its source and appears in a dashed box wherever it is discussed.</p></header>' +
        (ups.length ? body : '<div class="empty"><h2>No updates yet</h2></div>') + '</div>';
      A.setView('updates', html);
      document.title = 'Post-publication updates — K&S Study Companion';
    }

    /* ---------- search entries ---------- */
    function searchEntries() {
      return DRUGS.map(function (d) {
        var text = [d.summary, brands(d), plain(d.mechanism || ''), (d.indications && d.indications.approved || []).join(' '), d.dose ? [d.dose.start, d.dose.range, d.dose.max].join(' ') : '',
          d.effects ? (d.effects.common || []).concat(d.effects.serious || []).join(' ') : '', (d.monitoring || []).join(' '), (d.interactions || []).join(' ')].join(' ');
        return { ch: null, kind: 'drug', title: d.name + (d.brands && d.brands.length ? ' (' + d.brands[0] + ')' : ''), text: plain(text), src: 'Drug reference', href: '#/drugs/' + d.id };
      });
    }

    function route(p) {
      if (!p[1]) return renderBrowse();
      if (p[1] === 'compare') return renderCompare(p[2]);
      if (p[1] === 'drill') return renderDrill(p[2]);
      return renderDrug(p[1]);
    }

    return { inject: inject, route: route, renderUpdates: renderUpdates, link: link, updateBox: updateBox, searchEntries: searchEntries, count: function () { return DRUGS.length; } };
  };
})();
