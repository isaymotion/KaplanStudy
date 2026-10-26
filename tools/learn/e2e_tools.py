"""E2E for Clinical tools (#/tools), the Report-an-error link and daily-review card types.
Needs the local server on 8124. Expected values are worked out by hand from data/tools/calcs.js."""
from playwright.sync_api import sync_playwright
B = 'http://localhost:8124/'
errs, fails = [], []
def check(name, ok, got=''):
    print(('ok   ' if ok else 'FAIL ') + name + ('' if ok else '  -> ' + str(got)[:300]))
    if not ok: fails.append(name)
with sync_playwright() as p:
    b = p.chromium.launch()
    for vw in [(1280, 900), (390, 844)]:
        c = b.new_context(service_workers='block', viewport={'width': vw[0], 'height': vw[1]})
        pg = c.new_page()
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and 'fonts' not in m.text and 'ERR_TUNNEL' not in m.text else None)
        def over(): return pg.evaluate('document.documentElement.scrollWidth > window.innerWidth')
        pg.goto(B + '#/tools'); pg.wait_for_selector('.tools-hub')
        check(f'{vw} hub: 6 scales + 4 calcs + 2 companions', pg.locator('.tools-hub a.tool').count() == 12, pg.locator('.tools-hub a.tool').count())
        check(f'{vw} hub no overflow', not over())
        def pick(item, j): pg.locator(f'[data-item="{item}"] input[value="{j}"]').check()
        # PHQ-9: all "More than half the days" (2) = 18 -> moderately severe; item 9 positive flag with NCMH line
        pg.goto(B + '#/tools/phq9'); pg.wait_for_selector('#sc-form')
        for i in range(1, 10): pick(f'p{i}', 2)
        pick('func', 1)
        r = pg.locator('#sc-result').inner_text()
        check(f'{vw} PHQ-9 18/27 moderately severe + item 9 flag + 1553', '18' in r and 'Moderately severe' in r and 'Item 9 is positive' in r and '1553' in r, r)
        check(f'{vw} scale page no overflow', not over())
        pg.locator('#sc-reset').click(); check(f'{vw} PHQ-9 clear', pg.locator('#sc-form input:checked').count() == 0)
        # GAD-7: 1 each = 7 -> mild
        pg.goto(B + '#/tools/gad7'); pg.wait_for_selector('#sc-form')
        for i in range(1, 8): pick(f'g{i}', 1)
        pick('func', 0)
        r = pg.locator('#sc-result').inner_text(); check(f'{vw} GAD-7 7 mild', '7' in r and 'Mild' in r, r)
        # CIWA-Ar: 2 on items 1-9 (=18) + orientation 1 = 19 -> severe (ASAM 19+)
        pg.goto(B + '#/tools/ciwa'); pg.wait_for_selector('#sc-form')
        for i in range(1, 10): pick(f'c{i}', 2)
        pick('c10', 1)
        r = pg.locator('#sc-result').inner_text(); check(f'{vw} CIWA 19 severe', '19' in r and 'Severe withdrawal' in r, r)
        pick('c10', 0); r = pg.locator('#sc-result').inner_text(); check(f'{vw} CIWA 18 moderate', '18' in r and 'Moderate withdrawal' in r, r)
        # COWS: option index 1 on every item -> 1+1+1+1+1+1+1+1+1+1+3 = 13 -> moderate
        pg.goto(B + '#/tools/cows'); pg.wait_for_selector('#sc-form')
        for i in range(1, 12): pick(f'w{i}', 1)
        r = pg.locator('#sc-result').inner_text(); check(f'{vw} COWS 13 moderate', '13' in r and 'Moderate' in r, r)
        # AIMS: two areas at 2 -> meets Schooler-Kane
        pg.goto(B + '#/tools/aims'); pg.wait_for_selector('#sc-form')
        for i in range(1, 13): pick(f'a{i}', 0)
        pick('a2', 2); pick('a3', 2)
        r = pg.locator('#sc-result').inner_text(); check(f'{vw} AIMS 4/28 meets threshold', '4' in r and 'Meets the Schooler' in r, r)
        pick('a3', 1); r = pg.locator('#sc-result').inner_text(); check(f'{vw} AIMS below threshold', 'Below the Schooler' in r, r)
        # C-SSRS: skip logic and triage
        pg.goto(B + '#/tools/cssrs'); pg.wait_for_selector('#sc-form')
        check(f'{vw} C-SSRS q3 hidden at start', not pg.locator('[data-item="q3"]').is_visible())
        pick('q1', 1); pick('q2', 0); pick('q6', 0)
        r = pg.locator('#sc-result').inner_text(); check(f'{vw} C-SSRS q1 only -> referral', 'referral' in r and '1553' in r, r)
        pick('q6', 1); check(f'{vw} C-SSRS q6b shown', pg.locator('[data-item="q6b"]').is_visible())
        pick('q6b', 0); r = pg.locator('#sc-result').inner_text(); check(f'{vw} C-SSRS q6 >3 months -> referral', 'more than 3 months ago' in r, r)
        pick('q6b', 1); r = pg.locator('#sc-result').inner_text(); check(f'{vw} C-SSRS q6 recent -> consultation', 'consultation' in r and 'within the past 3 months' in r, r)
        pick('q2', 1); check(f'{vw} C-SSRS q3-5 shown after q2 yes', pg.locator('[data-item="q4"]').is_visible())
        # Antipsychotic: risperidone 4 mg = 0.8 DDD -> olanzapine 8 mg
        pg.goto(B + '#/tools/antipsychotic'); pg.wait_for_selector('#ap-out')
        r = pg.locator('#ap-out').inner_text(); check(f'{vw} risperidone 4 -> 0.8 DDD, olanzapine 8', '0.8 DDD' in r and '8 mg Olanzapine a day' in r, r)
        pg.select_option('#ap-from', 'Paliperidone palmitate'); pg.fill('#ap-dose', '234'); pg.fill('#ap-int', '28')
        r = pg.locator('#ap-out').inner_text()
        check(f'{vw} paliperidone palmitate 234 q28d -> 150 mg eq, 2.14 DDD, olanzapine 21.4', '150 mg eq. paliperidone' in r and '2.14 DDD' in r and '21.4 mg Olanzapine' in r and 'more than 2 DDDs' in r, r)
        pg.select_option('#ap-to', 'Haloperidol decanoate'); pg.fill('#ap-tint', '28')
        r = pg.locator('#ap-out').inner_text(); check(f'{vw} -> haloperidol decanoate 198 mg q28d', '198 mg Haloperidol decanoate every 28 days' in r, r)
        check(f'{vw} calc no overflow', not over())
        # Benzodiazepine: lorazepam 2 mg -> diazepam 20 mg; -> clonazepam 1 mg
        pg.goto(B + '#/tools/benzodiazepine'); pg.wait_for_selector('#bz-out')
        r = pg.locator('#bz-out').inner_text(); check(f'{vw} lorazepam 2 -> diazepam 20', '20 mg diazepam' in r, r)
        pg.select_option('#bz-to', 'Clonazepam'); r = pg.locator('#bz-out').inner_text(); check(f'{vw} -> clonazepam 1 mg', '1 mg Clonazepam a day' in r, r)
        # Clozapine ANC
        pg.goto(B + '#/tools/clozapine-anc'); pg.wait_for_selector('#an-out')
        pg.fill('#an-anc', '1400'); r = pg.locator('#an-out').inner_text(); check(f'{vw} baseline 1400 general: not recommended', 'not recommended' in r, r)
        pg.fill('#an-mo', '3'); r = pg.locator('#an-out').inner_text(); check(f'{vw} 1400 at 3 months: mild, three times weekly', 'Mild neutropenia' in r and 'Three times weekly' in r, r)
        pg.fill('#an-anc', '800'); r = pg.locator('#an-out').inner_text(); check(f'{vw} 800 general: interrupt', 'Interrupt clozapine' in r, r)
        pg.select_option('#an-pop', 'ben'); r = pg.locator('#an-out').inner_text(); check(f'{vw} 800 BEN: continue + hematology', 'Continue treatment' in r and 'hematology' in r, r)
        pg.fill('#an-anc', '2000'); pg.fill('#an-mo', '8'); r = pg.locator('#an-out').inner_text(); check(f'{vw} normal at 8 months: every 2 weeks', 'every 2 weeks' in r, r)
        pg.select_option('#an-unit', 'e9'); pg.fill('#an-anc', '0.4'); r = pg.locator('#an-out').inner_text(); check(f'{vw} 0.4 x10^9/L = 400: stop', 'Stop clozapine' in r, r)
        # Lithium
        pg.goto(B + '#/tools/lithium-level'); pg.wait_for_selector('#li-out')
        pg.fill('#li-lv', '0.7'); r = pg.locator('#li-out').inner_text(); check(f'{vw} Li 0.7 maintenance: within', 'Within the target' in r, r)
        pg.fill('#li-h', '6'); r = pg.locator('#li-out').inner_text(); check(f'{vw} Li drawn at 6 h: timing flag', 'earlier than the 12-hour trough' in r, r)
        pg.fill('#li-h', '12'); pg.fill('#li-lv', '1.8'); r = pg.locator('#li-out').inner_text(); check(f'{vw} Li 1.8: mild toxicity', 'Mild toxicity range' in r, r)
        pg.fill('#li-lv', '3.8'); r = pg.locator('#li-out').inner_text(); check(f'{vw} Li 3.8: severe', 'Severe toxicity range' in r, r)
        # nothing saved
        keys = pg.evaluate("Object.keys(localStorage).filter(k => /tool|scale|phq|cssrs|lith|anc/i.test(k))")
        check(f'{vw} nothing saved by the tools', keys == [], keys)
        # chapter links, report link, review card types
        pg.goto(B + '#/c/ch04/guide'); pg.wait_for_selector('.g-sec')
        t = pg.locator('.g-tools').inner_text() if pg.locator('.g-tools').count() else ''
        check(f'{vw} Ch 4 guide links CIWA-Ar, COWS, benzo', 'CIWA-Ar' in t and 'COWS' in t and 'Benzodiazepine' in t, t)
        href = pg.locator('.g-report a').first.get_attribute('href')
        check(f'{vw} report link is a pre-filled mailto', href.startswith('mailto:isaymotion@gmail.com?subject=') and 'Link%3A' in href and 'release' in href, href[:200])
        check(f'{vw} one report link per section', pg.locator('.g-report').count() == pg.locator('.g-sec').count())
        pg.goto(B + '#/review'); pg.wait_for_selector('.rv-types')
        check(f'{vw} review has 4 card-type boxes, all on', pg.locator('[data-rvdeck]:checked').count() == 4)
        pg.locator('[data-rvdeck="cases"]').uncheck(); pg.wait_for_timeout(200)
        pref = pg.evaluate("JSON.parse(localStorage.getItem('ks:v1:reviewPrefs')||'{}').decks")
        check(f'{vw} unchecking cases saves the choice', pref is not None and 'cases' not in pref, pref)
        if vw[0] == 1280:
            pg.goto(B + '#/tools/cssrs'); pg.wait_for_selector('#sc-form')
            pick('q1', 1); pick('q2', 1); pick('q3', 1); pick('q4', 1); pick('q5', 0); pick('q6', 0)
            pg.screenshot(path='/tmp/claude-0/cssrs.png', full_page=True)
            pg.goto(B + '#/tools/antipsychotic'); pg.wait_for_selector('#ap-out'); pg.screenshot(path='/tmp/claude-0/ap.png', full_page=True)
        else:
            pg.goto(B + '#/tools'); pg.wait_for_selector('.tools-hub'); pg.screenshot(path='/tmp/claude-0/hub-mobile.png', full_page=True)
            pg.goto(B + '#/tools/clozapine-anc'); pg.wait_for_selector('#an-out'); pg.fill('#an-anc', '800'); pg.fill('#an-mo', '2'); pg.screenshot(path='/tmp/claude-0/anc-mobile.png', full_page=True)
        c.close()
    b.close()
print('FAILS', fails)
print('ERRORS', errs)
