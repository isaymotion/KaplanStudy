"""E2E for the weak-topics dashboard (#/weak) and the teaching takeaway sheet (#/teach/handout/<id>).
Needs the local server on 8124. Seeds progress in localStorage, then drives the pages."""
import json
from playwright.sync_api import sync_playwright
B = 'http://localhost:8124/'
errs = []
with sync_playwright() as p:
    b = p.chromium.launch()
    for vw in [(1280, 900), (390, 844)]:
        c = b.new_context(service_workers='block', viewport={'width': vw[0], 'height': vw[1]})
        pg = c.new_page()
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and 'fonts' not in m.text and 'ERR_TUNNEL' not in m.text else None)
        pg.goto(B + '#/weak'); pg.wait_for_selector('h1')
        print(vw, 'empty state:', pg.locator('.empty h2').inner_text())
        # seed: an exam on ch05 cases, flashcard ratings, a teaching session
        seed = pg.evaluate("""() => {
          var C = {}; Object.keys(KS.chapters).forEach(ch => Object.keys(KS.chapters[ch]).forEach(dk => { var v = KS.chapters[ch][dk]; if (Array.isArray(v) && v[0] && v[0].q) v.forEach(c => C[ch + '/' + dk + '/' + c.id] = { c: c }); }));
          var keys = Object.keys(C).filter(k => k.startsWith('ch05/cases/')).slice(0, 12);
          var items = keys.map((k, i) => ({ k: k, o: [0,1,2,3,4], a: i % 3 === 0 ? C[k].c.answer : (C[k].c.answer + 1) % 5, f: false }));
          items.push({ k: keys[0], o: [0,1,2,3,4], a: null, f: false });
          var pre = keys.map(k => ({ k: k, o: [0,1,2,3,4], a: (C[k].c.answer + 1) % 5, f: false }));
          var hist = [{ id: 'eT1', at: Date.now(), chapters: ['ch05'], timed: false, score: 4, total: 13, kind: 'exam', items: items },
                      { id: 'eT0', at: Date.now() - 1e6, chapters: ['ch05'], timed: false, score: 0, total: 12, kind: 'pre', ch: 'ch05', items: pre }];
          localStorage.setItem('ks:v1:examHistory', JSON.stringify(hist));
          var srs = {}, dx = Object.keys(C).filter(k => k.startsWith('ch06/') && !k.startsWith('ch06/cases/')).slice(0, 8);
          dx.forEach((k, i) => srs[k] = { i: 1, e: 2.3, r: 1, l: i % 2, n: 4, d: 1 });
          srs[dx[0]] = { i: 1, e: 2.3, r: 2, l: 1, d: 1 }; /* old record with no n */
          localStorage.setItem('ks:v1:srs', JSON.stringify(srs));
          var order = keys.slice(0, 5).map(k => k.replace('/cases/', '/')), log = {};
          order.forEach((id, i) => { var ans = C[keys[i]].c.answer, v = [0,0,0,0,0]; v[ans] = i < 3 ? 1 : 8; v[(ans + 1) % 5] = 6; log[id] = { v: v, r: 1 }; });
          localStorage.setItem('ks:v1:teachSessions', JSON.stringify([{ id: 1700000000000, at: Date.now(), scope: 'ch05', kind: 'mcq', order: order, log: log }]));
          return { exam: keys.length, cards: dx.length };
        }""")
        pg.reload(); pg.wait_for_selector('.weak__item, .weak__sum')
        print(vw, 'seed', seed, '| summary:', pg.locator('.weak__sum').inner_text())
        print(vw, 'ranked items', pg.locator('.weak__item').count(), '| first:', pg.locator('.weak__item h3').first.inner_text(), '|', pg.locator('.weak__miss').first.inner_text())
        print(vw, 'first sources:', pg.locator('.weak__src').first.inner_text())
        print(vw, 'rollups:', pg.locator('.results-sec h2').all_inner_texts())
        tries = pg.evaluate("Array.from(document.querySelectorAll('.score-table tbody tr td:nth-child(2)')).map(t=>t.innerText).slice(0,3)")
        print(vw, 'chapter rows', tries)
        over = pg.evaluate('document.documentElement.scrollWidth > window.innerWidth')
        print(vw, 'horizontal overflow', over)
        if vw[0] == 1280:
            pg.locator('[data-drill]').first.click(); pg.wait_for_url('**/exam/run')
            ex = pg.evaluate("JSON.parse(localStorage.getItem('ks:v1:exam'))")
            print('drill started:', ex['kind'], ex['quiz']['t'], len(ex['items']), 'untimed' if not ex['timed'] else 'TIMED')
            pg.evaluate("localStorage.removeItem('ks:v1:exam')")
            # SRS counter: rating a card adds n
            pg.goto(B + '#/review'); pg.wait_for_selector('h1')
            n = pg.evaluate("""() => { var s = JSON.parse(localStorage.getItem('ks:v1:srs')); return Object.keys(s).length; }""")
            print('srs sample', n)
        # teaching summary -> handout
        pg.goto(B + '#/teach/summary/1700000000000'); pg.wait_for_selector('h1')
        print(vw, 'summary has handout link', pg.locator('a[href="#/teach/handout/1700000000000"]').count())
        pg.locator('a[href="#/teach/handout/1700000000000"]').click(); pg.wait_for_selector('.teach-handout')
        print(vw, 'handout h1', pg.locator('h1').inner_text(), '| revisit items', pg.locator('.ts-miss > li').count(),
              '| why-not lines', pg.locator('.ho-why').count(), '| answer marks', pg.locator('.ho-mark').count(),
              '| vote chips', pg.locator('.ts-miss__dist').count(), '| foot', pg.locator('.ho-foot').inner_text()[:40])
        pg.locator('a[href="#/teach/handout/1700000000000/all"]').click(); pg.wait_for_selector('.teach-handout')
        print(vw, 'all items', pg.locator('.ts-miss > li').count())
        print(vw, 'horizontal overflow', pg.evaluate('document.documentElement.scrollWidth > window.innerWidth'))
        if vw[0] == 1280:
            pg.emulate_media(media='print'); pg.screenshot(path='/tmp/claude-0/handout-print.png', full_page=True)
            print('print hides controls', not pg.locator('.ho-bar').is_visible())
            pg.emulate_media(media='screen')
            pg.goto(B + '#/weak'); pg.wait_for_selector('.weak__item'); pg.screenshot(path='/tmp/claude-0/weak.png', full_page=True)
        else:
            pg.goto(B + '#/weak'); pg.wait_for_selector('.weak__item'); pg.screenshot(path='/tmp/claude-0/weak-mobile.png', full_page=True)
        c.close()
    b.close()
print('ERRORS', errs)
