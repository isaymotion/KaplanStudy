/* Clinical tools: interactive rating scales and reference calculators.
   app.js calls KS.toolsModule(api) once the data has loaded; data/tools/*.js supply the content.
   Nothing entered here is ever saved: answers live in memory and are gone when the page changes.
   Every number shown comes from the sources listed on each tool's page. */
(function () {
  'use strict';
  var KS = window.KS = window.KS || {};

  KS.toolsModule = function (A) {
    var esc = A.esc, fmt = A.fmt, plural = A.plural;
    var SCALES = KS.scales || [], CALCS = KS.calcs || [];
    var BY_ID = {};
    SCALES.forEach(function (s) { s.kind = 'scale'; BY_ID[s.id] = s; });
    CALCS.forEach(function (c) { c.kind = 'calc'; BY_ID[c.id] = c; });
    var COMPANIONS = [
      { name: 'Stahl Study Companion', url: 'https://isaymotion.github.io/Stahl/', blurb: 'Psychopharmacology from Stahl’s Essential Psychopharmacology: mechanisms, drug classes and drills.' },
      { name: 'DSM-5-TR Study Companion', url: 'https://isaymotion.github.io/DSMVapp/', blurb: 'Diagnostic criteria, specifiers and differentials from DSM-5-TR.' }
    ];
    var DISCLAIMER = 'For learning and as a bedside aid. Check the result against the original instrument or current prescribing information, and use clinical judgment. Nothing you enter is saved.';

    function toneClass(t) { return t ? ' tl-' + t : ''; }
    function sourcesHTML(t) {
      return '<section class="tl-src"><h2>Sources</h2>' + (t.cite ? '<p>' + fmt(t.cite) + '</p>' : '') +
        '<ul>' + (t.sources || []).map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>'; }).join('') + '</ul>' +
        (t.license ? '<p class="muted"><b>Use:</b> ' + fmt(t.license) + '</p>' : '') + '</section>';
    }
    function related(t) {
      var chs = (t.chapters || []).map(function (id) { return A.chapter(id); }).filter(Boolean);
      return chs.length ? '<p class="tl-rel">In the study guides: ' + chs.map(function (c) { return '<a href="#/c/' + c.id + '/guide">Chapter ' + c.number + ': ' + esc(c.short || c.title) + '</a>'; }).join(', ') + '</p>' : '';
    }
    function head(t, crumb) {
      return '<header class="page__head"><p class="crumb"><a href="#/tools">Clinical tools</a></p><h1>' + esc(t.name) + '</h1>' +
        '<p>' + fmt(t.summary) + '</p>' + related(t) + '</header><p class="tl-disc" role="note">' + esc(DISCLAIMER) + '</p>';
    }
    function copyText(text, msgEl) {
      function ok() { A.toast('Result copied.'); }
      (navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(text) : Promise.reject()).then(ok).catch(function () {
        var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); ok(); } catch (e) { A.toast('Select the result and copy it.'); }
        document.body.removeChild(ta);
      });
    }

    /* ---------- hub ---------- */
    function renderHub() {
      function card(t) {
        return '<a class="tool" href="#/tools/' + t.id + '"><span class="tool__name">' + esc(t.short || t.name) + '</span><span class="tool__meta">' + esc(t.blurb) + '</span></a>';
      }
      var html = '<div class="wrap page tools-hub">' +
        '<header class="page__head"><h1>Clinical tools</h1><p>Rating scales that score as you go, and reference calculators for the doses and levels residents look up most. Each tool shows its sources. ' + esc(DISCLAIMER) + '</p></header>' +
        '<section class="results-sec"><h2>Rating scales</h2><div class="tools tools--3">' + SCALES.map(card).join('') + '</div></section>' +
        '<section class="results-sec"><h2>Calculators</h2><div class="tools tools--3">' + CALCS.map(card).join('') + '</div></section>' +
        '<section class="results-sec"><h2>Companion apps</h2><div class="tools tools--3">' + COMPANIONS.map(function (c) {
          return '<a class="tool" href="' + esc(c.url) + '" target="_blank" rel="noopener"><span class="tool__name">' + esc(c.name) + ' <span aria-hidden="true">↗</span></span><span class="tool__meta">' + esc(c.blurb) + '</span></a>';
        }).join('') + '</div></section></div>';
      A.setView('tools', html);
      document.title = 'Clinical tools — K&S Study Companion';
    }

    /* ---------- rating scales ----------
       Scale data: {id, name, short, blurb, summary, intro, items:[{id, text, hint?, opts:[[label, points]], score?:false,
       show?:{item, in:[points]}}], max, bands:[{lo, hi, label, tone, text}], flags:[{item, in:[points], tone, text}],
       rule?: name of a custom result function, note, license, cite, sources, chapters} */
    var RULES = {
      /* C-SSRS screener: the developers' possible response protocol. Items 4 and 5, and item 6 within the past
         3 months, call for consultation and safety precautions; items 1 to 3 and older item 6 behavior, a referral. */
      cssrs: function (s, ans) {
        var yes = function (id) { return ans[id] === 1; };
        var r = s.risk || {};
        if (['q4', 'q5', 'q6b'].some(yes)) return r.high;
        if (['q1', 'q2', 'q3', 'q6'].some(yes)) return r.low;
        return r.none;
      },
      /* AIMS: positive screen from the movement items (1-7). */
      aims: function (s, ans) {
        var m = s.items.filter(function (it) { return it.movement; }).map(function (it) { return ans[it.id]; });
        var two = m.filter(function (v) { return v >= 2; }).length, three = m.filter(function (v) { return v >= 3; }).length;
        var r = s.positive || {};
        return (three >= 1 || two >= 2) ? r.yes : r.no;
      }
    };
    function visible(s, it, ans) {
      if (!it.show) return true;
      var v = ans[it.show.item];
      return v != null && it.show['in'].indexOf(v) >= 0;
    }
    function renderScale(s) {
      var ans = {};
      var html = '<div class="wrap page tool-page scale-page">' + head(s) +
        (s.intro ? '<p class="tl-intro">' + fmt(s.intro) + '</p>' : '') +
        '<form class="scale" id="sc-form" novalidate>' + s.items.map(function (it, i) {
          return '<fieldset class="sc-item" data-item="' + it.id + '"' + (it.show ? ' hidden' : '') + '><legend><span class="sc-n">' + (it.label || (i + 1)) + '</span><span>' + fmt(it.text) + '</span></legend>' +
            (it.hint ? '<p class="sc-hint">' + fmt(it.hint) + '</p>' : '') +
            '<div class="sc-opts">' + it.opts.map(function (o, j) {
              return '<label class="sc-opt"><input type="radio" name="' + it.id + '" value="' + j + '"><span class="sc-opt__l">' + fmt(o[0]) + '</span>' + (it.score === false || s.hidePoints ? '' : '<span class="sc-opt__p">' + o[1] + '</span>') + '</label>';
            }).join('') + '</div></fieldset>';
        }).join('') + '</form>' +
        '<section class="sc-result" id="sc-result" aria-live="polite"></section>' +
        '<div class="empty__actions"><button class="btn btn--solid" type="button" id="sc-copy">Copy result</button><button class="btn" type="button" id="sc-reset">Clear answers</button></div>' +
        (s.note ? '<p class="tl-note">' + fmt(s.note) + '</p>' : '') + sourcesHTML(s) + '</div>';
      A.setView('tool:' + s.id, html);
      document.title = s.short + ' — K&S Study Companion';
      var root = A.main(), out = root.querySelector('#sc-result');
      function scored() { return s.items.filter(function (it) { return it.score !== false && visible(s, it, ans); }); }
      function compute() {
        s.items.forEach(function (it) {
          var fs = root.querySelector('[data-item="' + it.id + '"]'), vis = visible(s, it, ans);
          fs.hidden = !vis;
          if (!vis && ans[it.id] != null) { delete ans[it.id]; fs.querySelectorAll('input').forEach(function (x) { x.checked = false; }); }
        });
        var sc = scored(), done = sc.filter(function (it) { return ans[it.id] != null; }), total = 0;
        done.forEach(function (it) { total += ans[it.id]; });
        var visAll = s.items.filter(function (it) { return visible(s, it, ans); }), answered = visAll.filter(function (it) { return ans[it.id] != null; }).length;
        var complete = answered === visAll.length, res = { total: total, complete: complete, band: null, flags: [], rule: null };
        if (complete && s.bands) s.bands.forEach(function (b) { if (total >= b.lo && total <= b.hi) res.band = b; });
        if (complete && s.rule && RULES[s.rule]) res.rule = RULES[s.rule](s, ans);
        (s.flags || []).forEach(function (f) { if (ans[f.item] != null && f['in'].indexOf(ans[f.item]) >= 0) res.flags.push(f); });
        var h = '';
        if (s.max != null) h += '<p class="sc-total"><span class="sc-total__n">' + total + '</span><span class="sc-total__of">of ' + s.max + '</span></p>';
        if (!complete) h += '<p class="muted">' + plural(visAll.length - answered, 'item') + ' still to answer' + (s.max != null ? '; the total so far counts only answered items.' : '.') + '</p>';
        if (res.band) h += '<p class="sc-band' + toneClass(res.band.tone) + '"><b>' + esc(res.band.label) + '</b>' + (res.band.text ? ' — ' + fmt(res.band.text) : '') + '</p>';
        if (res.rule) h += '<p class="sc-band' + toneClass(res.rule.tone) + '"><b>' + esc(res.rule.label) + '</b>' + (res.rule.text ? ' — ' + fmt(res.rule.text) : '') + '</p>';
        res.flags.forEach(function (f) { h += '<p class="sc-flag' + toneClass(f.tone) + '" role="alert">' + fmt(f.text) + '</p>'; });
        out.innerHTML = h;
        return res;
      }
      function summary() {
        var r = compute(), parts = [s.short + (s.max != null ? ': ' + r.total + '/' + s.max : '')];
        if (!r.complete) parts.push('incomplete');
        if (r.band) parts.push(r.band.label);
        if (r.rule) parts.push(r.rule.label);
        r.flags.forEach(function (f) { parts.push(f.short || 'flag'); });
        var items = s.items.filter(function (it) { return visible(s, it, ans) && ans[it.id] != null; }).map(function (it, i) { return (it.label || (s.items.indexOf(it) + 1)) + '=' + (it.score === false ? it.opts[it._j][0] : ans[it.id]); });
        return parts.join('; ') + '. Items: ' + items.join(', ') + '.';
      }
      root.querySelector('#sc-form').addEventListener('change', function (e) {
        var x = e.target; if (x.type !== 'radio') return;
        var it = null; s.items.forEach(function (i) { if (i.id === x.name) it = i; });
        it._j = +x.value; ans[it.id] = it.opts[+x.value][1];
        compute();
      });
      root.querySelector('#sc-copy').addEventListener('click', function () { copyText(summary()); });
      root.querySelector('#sc-reset').addEventListener('click', function () {
        ans = {}; root.querySelectorAll('#sc-form input').forEach(function (x) { x.checked = false; }); compute(); window.scrollTo(0, 0);
      });
      compute();
    }

    /* ---------- calculators ----------
       Each calculator in data/tools/calcs.js names a renderer here (c.engine) and carries its own tables. */
    var ENGINES = {};
    KS.toolEngines = ENGINES;
    /* ---------- calculator engines ---------- */
    function num(v) { var n = parseFloat(String(v).replace(',', '.')); return isFinite(n) ? n : null; }
    function round(n) { return n >= 100 ? Math.round(n) : n >= 10 ? Math.round(n * 10) / 10 : Math.round(n * 100) / 100; }
    function opts(list, sel) { return list.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (o[0] === sel ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join(''); }
    function actions() { return '<div class="empty__actions"><button class="btn btn--solid" type="button" data-copy>Copy result</button></div>'; }
    function wire(box, draw, text) {
      box.addEventListener('input', draw); box.addEventListener('change', draw);
      box.querySelector('[data-copy]').addEventListener('click', function () { var t = text(); if (t) copyText(t); else A.toast('Enter the values first.'); });
      draw();
    }

    /* Antipsychotics by WHO DDD: dose/day ÷ DDD = number of DDDs; × DDD of the target drug = equivalent dose. */
    ENGINES.ddd = function (c, box) {
      var D = c.drugs, idx = {};
      D.forEach(function (d, i) { idx[d[0]] = i; });
      function list(sel) {
        var oral = D.filter(function (d) { return d[2] === 'oral'; }), dep = D.filter(function (d) { return d[2] === 'depot'; });
        function o(d) { return '<option' + (d[0] === sel ? ' selected' : '') + '>' + esc(d[0]) + '</option>'; }
        return '<optgroup label="Oral">' + oral.map(o).join('') + '</optgroup><optgroup label="Long-acting injectable">' + dep.map(o).join('') + '</optgroup>';
      }
      box.innerHTML = '<div class="calc">' +
        '<div class="calc-row"><label>From<select id="ap-from">' + list('Risperidone') + '</select></label>' +
          '<label><span id="ap-dose-l">Dose (mg)</span><input id="ap-dose" type="number" inputmode="decimal" min="0" step="any" value="4"></label>' +
          '<label id="ap-int-w" hidden>Every (days)<input id="ap-int" type="number" inputmode="numeric" min="1" step="1" value="28"></label>' +
          '<label id="ap-sal-w" hidden>Dose written as<select id="ap-sal"><option value="pal">Paliperidone palmitate (US: 39 to 234 mg)</option><option value="eq">mg eq. paliperidone</option></select></label></div>' +
        '<div class="calc-row"><label>To<select id="ap-to">' + list('Olanzapine') + '</select></label>' +
          '<label id="ap-tint-w" hidden>Every (days)<input id="ap-tint" type="number" inputmode="numeric" min="1" step="1" value="28"></label></div>' +
        '<div class="calc-out" id="ap-out" aria-live="polite"></div>' + actions() +
        '<details class="tl-table"><summary>All DDD values</summary><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Drug</th><th scope="col">Route</th><th scope="col">DDD (mg/day)</th></tr></thead><tbody>' +
          D.map(function (d) { return '<tr><th scope="row">' + esc(d[0]) + '</th><td>' + (d[2] === 'oral' ? (d[3] || 'Oral') : 'Long-acting injectable' + (d[3] ? ' (' + esc(d[3]) + ')' : '')) + '</td><td>' + d[1] + '</td></tr>'; }).join('') +
        '</tbody></table></div></details></div>';
      var q = function (s) { return box.querySelector(s); }, last = '';
      function draw() {
        var f = D[idx[q('#ap-from').value]], t = D[idx[q('#ap-to').value]], fd = f[2] === 'depot', td = t[2] === 'depot';
        q('#ap-int-w').hidden = !fd; q('#ap-tint-w').hidden = !td; q('#ap-sal-w').hidden = !f[4];
        q('#ap-dose-l').textContent = fd ? 'Injection dose (mg)' : 'Dose per day (mg)';
        var dose = num(q('#ap-dose').value), iv = fd ? num(q('#ap-int').value) : 1, tiv = td ? num(q('#ap-tint').value) : 1, out = q('#ap-out');
        if (dose == null || dose < 0 || !iv || iv < 1 || !tiv || tiv < 1) { out.innerHTML = '<p class="muted">Enter a dose' + (fd || td ? ' and an interval in days' : '') + '.</p>'; last = ''; return; }
        var active = f[4] && q('#ap-sal').value === 'pal' ? dose / f[4] : dose;
        var perDay = active / iv, n = perDay / f[1], tDay = n * t[1], tDose = tDay * tiv;
        var tShown = t[4] ? tDose * t[4] : tDose;
        var olz = n * 10, cpz = n * 300;
        var fromTxt = round(dose) + ' mg ' + f[0] + (fd ? ' every ' + iv + ' days' : ' a day') + (f[4] && q('#ap-sal').value === 'pal' ? ' (' + round(active) + ' mg eq. paliperidone)' : '');
        var toTxt = round(tShown) + ' mg ' + t[0] + (td ? ' every ' + tiv + ' days' : ' a day') + (t[4] ? ' (' + round(tDose) + ' mg eq. paliperidone)' : '');
        out.innerHTML = '<p>' + esc(fromTxt) + ' is <b>' + round(n) + ' DDD</b>.</p>' +
          '<p class="calc-big">' + esc(toTxt) + '</p>' +
          '<p class="muted">Also about ' + round(olz) + ' mg olanzapine or ' + round(cpz) + ' mg chlorpromazine a day.</p>' +
          (n > 2 ? '<p class="sc-flag tl-mod">This is more than 2 DDDs. Equivalence is least reliable at high doses; check the target drug’s maximum labeled dose.</p>' : '') +
          (/Clozapine/.test(f[0] + t[0]) ? '<p class="sc-flag tl-mod">Clozapine does not convert reliably by any equivalence method. Switch with specialist care and the usual clozapine monitoring.</p>' : '');
        last = fromTxt + ' = ' + round(n) + ' DDD ≈ ' + toTxt + ' (≈ olanzapine ' + round(olz) + ' mg/day, chlorpromazine ' + round(cpz) + ' mg/day). WHO DDD method (Leucht 2016). Approximate; switch by cross-titration and response.';
      }
      wire(box, draw, function () { return last; });
    };

    /* Benzodiazepines by the Ashton table: dose ÷ (dose equal to diazepam 10 mg) × 10 = diazepam equivalent. */
    ENGINES.benzo = function (c, box) {
      var D = c.drugs, idx = {};
      D.forEach(function (d, i) { idx[d[0]] = i; });
      function list(sel) { return D.map(function (d) { return '<option' + (d[0] === sel ? ' selected' : '') + '>' + esc(d[0]) + '</option>'; }).join(''); }
      function eq(d) { return d[1] === d[2] ? String(d[1]) : d[1] + ' to ' + d[2]; }
      box.innerHTML = '<div class="calc">' +
        '<div class="calc-row"><label>From<select id="bz-from">' + list('Lorazepam') + '</select></label><label>Total dose per day (mg)<input id="bz-dose" type="number" inputmode="decimal" min="0" step="any" value="2"></label></div>' +
        '<div class="calc-row"><label>To<select id="bz-to">' + list('Diazepam') + '</select></label></div>' +
        '<div class="calc-out" id="bz-out" aria-live="polite"></div>' + actions() +
        '<details class="tl-table"><summary>Full equivalence table</summary><div class="table-wrap"><table class="score-table"><thead><tr><th scope="col">Drug</th><th scope="col">≈ Diazepam 10 mg (Ashton)</th><th scope="col">NHS SPS</th><th scope="col">Half-life, hours</th></tr></thead><tbody>' +
          D.map(function (d) { return '<tr><th scope="row">' + esc(d[0]) + '</th><td>' + eq(d) + ' mg</td><td>' + (d[4] != null ? d[4] + ' mg' : '—') + '</td><td>' + esc(d[3]) + '</td></tr>'; }).join('') +
        '</tbody></table></div><p class="muted">The NHS SPS table is written per diazepam 5 mg; its values are doubled here to compare. Brackets: active metabolite.</p></details></div>';
      var q = function (s) { return box.querySelector(s); }, last = '';
      function draw() {
        var f = D[idx[q('#bz-from').value]], t = D[idx[q('#bz-to').value]], dose = num(q('#bz-dose').value), out = q('#bz-out');
        if (dose == null || dose < 0) { out.innerHTML = '<p class="muted">Enter the total daily dose.</p>'; last = ''; return; }
        var dzLo = dose / f[2] * 10, dzHi = dose / f[1] * 10;
        var tLo = dzLo / 10 * t[1], tHi = dzHi / 10 * t[2];
        function rng(a, b) { a = round(a); b = round(b); return a === b ? String(a) : a + ' to ' + b; }
        var toTxt = rng(tLo, tHi) + ' mg ' + t[0] + ' a day';
        out.innerHTML = '<p>' + round(dose) + ' mg ' + esc(f[0]) + ' a day is about <b>' + rng(dzLo, dzHi) + ' mg diazepam</b>.</p>' +
          '<p class="calc-big">' + esc(toTxt) + '</p>' +
          '<p class="muted">Half-life: ' + esc(f[0]) + ' ' + esc(f[3]) + ' h; ' + esc(t[0]) + ' ' + esc(t[3]) + ' h.</p>' +
          (/Z-drug/.test(f[0] + t[0]) ? '<p class="sc-flag tl-mod">Z-drug equivalents are rougher still; Ashton lists them for switching to diazepam during withdrawal.</p>' : '');
        last = round(dose) + ' mg ' + f[0] + '/day ≈ diazepam ' + rng(dzLo, dzHi) + ' mg/day ≈ ' + toTxt + ' (Ashton table; approximate, switch in steps).';
      }
      wire(box, draw, function () { return last; });
    };

    /* Clozapine ANC: category, action and next monitoring frequency (US label tables 1 and 2). */
    ENGINES.anc = function (c, box) {
      box.innerHTML = '<div class="calc">' +
        '<div class="calc-row"><label>Population<select id="an-pop">' + opts([['general', 'General population'], ['ben', 'Benign ethnic neutropenia (BEN)']], 'general') + '</select></label>' +
          '<label>ANC (/µL)<input id="an-anc" type="number" inputmode="numeric" min="0" step="1" placeholder="e.g. 1800"></label>' +
          '<label>Units<select id="an-unit">' + opts([['ul', 'cells/µL'], ['e9', '× 10⁹/L']], 'ul') + '</select></label>' +
          '<label>Months on clozapine<input id="an-mo" type="number" inputmode="decimal" min="0" step="any" value="0"></label></div>' +
        '<div class="calc-out" id="an-out" aria-live="polite"></div>' + actions() + '</div>';
      var q = function (s) { return box.querySelector(s); }, last = '';
      function routine(mo) { return mo < 6 ? 'weekly (first 6 months)' : mo < 12 ? 'every 2 weeks (months 7 to 12)' : 'monthly (after 12 months)'; }
      function draw() {
        var pop = q('#an-pop').value, raw = num(q('#an-anc').value), mo = num(q('#an-mo').value), out = q('#an-out');
        q('#an-anc').placeholder = q('#an-unit').value === 'e9' ? 'e.g. 1.8' : 'e.g. 1800';
        if (raw == null || raw < 0 || mo == null || mo < 0) { out.innerHTML = '<p class="muted">Enter the ANC and months on treatment (0 if not started).</p>'; last = ''; return; }
        var anc = q('#an-unit').value === 'e9' ? raw * 1000 : raw;
        if (q('#an-unit').value === 'ul' && raw > 0 && raw < 20) { out.innerHTML = '<p class="sc-flag tl-mod">That looks like a value in × 10⁹/L. Change the units, or enter cells/µL (for example 1.8 × 10⁹/L is 1,800/µL).</p>'; last = ''; return; }
        var rows = pop === 'ben' ? c.ben : c.general, r = null;
        rows.forEach(function (x) { if (!r && anc >= x.lo) r = x; });
        var start = pop === 'ben' ? 1000 : 1500, h = '', ancTxt = Math.round(anc).toLocaleString('en-US') + '/µL';
        if (mo === 0) {
          var ok = anc >= start;
          h = '<p class="sc-band ' + (ok ? 'tl-ok' : 'tl-sev') + '"><b>Baseline ' + ancTxt + ':</b> ' + (ok ? 'clozapine can be started' : 'starting clozapine is not recommended') + ' (threshold ' + start.toLocaleString('en-US') + '/µL' + (pop === 'ben' ? ', with at least two baseline values in BEN' : '') + ').</p>' +
            (ok ? '<p>Then check the ANC weekly for the first 6 months.</p>' : '');
          last = 'Clozapine baseline ANC ' + ancTxt + ' (' + (pop === 'ben' ? 'BEN' : 'general') + '): ' + (ok ? 'may start; ANC weekly for 6 months.' : 'starting not recommended (needs ≥ ' + start + '/µL).');
        } else {
          var freq = r.freq === 'normal' ? 'Routine schedule: ' + routine(mo) + '.' : r.freq;
          h = '<p class="sc-band tl-' + r.tone + '"><b>' + esc(r.label) + '</b></p><p>' + fmt(r.action) + '</p><p><b>Next ANC:</b> ' + esc(freq) + '</p>';
          last = 'Clozapine ANC ' + ancTxt + ' at ' + round(mo) + ' months (' + (pop === 'ben' ? 'BEN' : 'general') + '): ' + r.label + '. ' + r.action.replace(/\*\*/g, '') + ' Next ANC: ' + freq;
        }
        out.innerHTML = h + '<p class="muted">From the US prescribing information. Follow your hospital’s protocol and the local label.</p>';
      }
      wire(box, draw, function () { return last; });
    };

    /* Lithium level: compare with the chosen target and the toxicity bands; flag a non-trough sample. */
    ENGINES.lithium = function (c, box) {
      var T = c.targets;
      box.innerHTML = '<div class="calc">' +
        '<div class="calc-row"><label>Serum lithium (mmol/L or mEq/L)<input id="li-lv" type="number" inputmode="decimal" min="0" step="0.01" placeholder="e.g. 0.7"></label>' +
          '<label>Purpose<select id="li-pur">' + opts(Object.keys(T).map(function (k) { return [k, T[k].label]; }), 'maint') + '</select></label>' +
          '<label>Hours since last dose<input id="li-h" type="number" inputmode="decimal" min="0" step="0.5" value="12"></label></div>' +
        '<div class="calc-out" id="li-out" aria-live="polite"></div>' + actions() + '</div>';
      var q = function (s) { return box.querySelector(s); }, last = '';
      function draw() {
        var lv = num(q('#li-lv').value), k = q('#li-pur').value, t = T[k], hr = num(q('#li-h').value), out = q('#li-out');
        if (lv == null || lv < 0) { out.innerHTML = '<p class="muted">Enter the serum level.</p>'; last = ''; return; }
        var tox = null; c.toxic.forEach(function (x) { if (!tox && lv > x.lo) tox = x; });
        if (!tox && lv === 1.5) tox = c.toxic[2];
        var where = lv < t.lo ? 'Below the target' : lv > t.hi ? 'Above the target' : 'Within the target';
        var h = '';
        if (tox) h += '<p class="sc-flag tl-' + tox.tone + '" role="alert"><b>' + esc(tox.label) + '.</b> ' + fmt(tox.text) + '</p>';
        h += '<p class="sc-band ' + (tox ? 'tl-sev' : where === 'Within the target' ? 'tl-ok' : 'tl-mild') + '"><b>' + where + '</b> for ' + esc(t.label.toLowerCase()) + ' (' + t.lo.toFixed(1) + ' to ' + t.hi.toFixed(1) + ').</p><p class="muted">' + fmt(t.text) + '</p>';
        var timing = '';
        if (hr != null && (hr < 11 || hr > 13)) {
          timing = hr < 11 ? 'Drawn ' + round(hr) + ' hours after a dose: earlier than the 12-hour trough, so it reads higher than the true trough. Repeat at 12 hours before acting on a borderline result.' : 'Drawn ' + round(hr) + ' hours after a dose: later than the 12-hour trough, so it may read lower than the true trough.';
          h += '<p class="sc-flag tl-mod">' + esc(timing) + '</p>';
        }
        out.innerHTML = h;
        last = 'Lithium ' + lv + ' mmol/L' + (hr != null ? ', ' + round(hr) + ' h post-dose' : '') + ': ' + where.toLowerCase() + ' for ' + t.label.toLowerCase() + ' (' + t.lo + '–' + t.hi + ')' + (tox ? '; ' + tox.label : '') + (timing ? '. ' + timing : '.');
      }
      wire(box, draw, function () { return last; });
    };

    function renderCalc(c) {
      var eng = ENGINES[c.engine];
      if (!eng) { A.renderMissing(); return; }
      var html = '<div class="wrap page tool-page calc-page">' + head(c) + '<div id="calc-body"></div>' +
        (c.note ? '<p class="tl-note">' + fmt(c.note) + '</p>' : '') + sourcesHTML(c) + '</div>';
      A.setView('tool:' + c.id, html);
      document.title = c.short + ' — K&S Study Companion';
      eng(c, A.main().querySelector('#calc-body'), { esc: esc, fmt: fmt, plural: plural, copy: copyText, tone: toneClass });
    }

    function route(p) {
      if (!p[1]) return renderHub();
      var t = BY_ID[p[1]];
      if (!t) return A.renderMissing();
      return t.kind === 'scale' ? renderScale(t) : renderCalc(t);
    }
    return { route: route, scales: SCALES, calcs: CALCS };
  };
})();
