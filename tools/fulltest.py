import asyncio, subprocess
from playwright.async_api import async_playwright

B = 'file:///home/claude/kaplanstudy/index.html'
CHS = ['ch01', 'ch02', 'ch03', 'ch04', 'ch05', 'ch06', 'ch07', 'ch08', 'ch09', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14', 'ch21-0', 'ch21-1', 'ch21-2', 'ch21-3', 'ch21-4', 'ch21-5', 'ch21-6', 'ch25-3', 'ch19', 'ch21-7', 'ch21-8', 'ch21-9', 'ch21-10', 'ch21-11']
ROUTES = ['', '#/review', '#/exam', '#/mistakes', '#/weak', '#/teach/handout/0', '#/glossary', '#/helpers', '#/teach', '#/whats-new',
          '#/search/trichotillomania', '#/search/witzelsucht', '#/helpers/workup', '#/helpers/development', '#/helpers/cognitive', '#/helpers/substance', '#/helpers/trauma', '#/helpers/dissociative', '#/bookmarks', '#/helpers/somatic', '#/helpers/eating', '#/helpers/elimination', '#/drugs', '#/drugs/clozapine', '#/drugs/xanomeline-trospium', '#/drugs/haloperidol', '#/drugs/compare/olanzapine,aripiprazole,ziprasidone', '#/drugs/compare', '#/drugs/drill', '#/updates', '#/helpers/movement', '#/c/ch21-0/guide/s210-nms', '#/c/ch21-0/handout', '#/glossary/rabbit-syndrome', '#/c/ch21-1/guide/s211-cloz', '#/c/ch21-1/handout', '#/search/clozapine', '#/c/ch14/handout', '#/c/ch14/guide/s14-enu-tx', '#/search/megacolon', '#/glossary/hirschsprung-disease', '#/c/ch13/handout', '#/c/ch13/guide/s13-tx-an-hosp', '#/search/lanugo', '#/glossary/refeeding-syndrome', '#/c/ch12/handout', '#/c/ch12/guide/s12-fact-clues', '#/search/hoover', '#/glossary/primary-gain', '#/c/ch11/handout', '#/c/ch11/guide/s11-did', '#/search/ganser', '#/glossary/passive-influence', '#/search/prazosin', '#/glossary/prolonged-exposure', '#/c/ch10/guide/s10-ptsd-dx', '#/c/ch10/handout', '#/search/disulfiram', '#/glossary/precipitated-withdrawal', '#/c/ch04/guide/s4-opi-detox', '#/c/ch04/handout', '#/search/korsakoff', '#/glossary/beclouded-dementia', '#/c/ch03/guide/s3-del-treat', '#/c/ch03/handout', '#/search/hyperlexia', '#/glossary/witzelsucht', '#/glossary/exposure-and-response-prevention', '#/c/ch21-2/guide/s212-maoi-ae', '#/c/ch21-2/handout', '#/helpers/antidepressant', '#/drugs/bupropion', '#/drugs/zuranolone', '#/drugs/compare/sertraline,venlafaxine,bupropion,mirtazapine', '#/drugs/drill/antidepressants', '#/glossary/serotonin-syndrome', '#/search/tyramine', '#/c/ch21-3/guide/s213-li-tox', '#/c/ch21-3/handout', '#/helpers/moodstab', '#/drugs/lithium', '#/drugs/lamotrigine', '#/drugs/compare/lithium,valproate,lamotrigine,carbamazepine', '#/drugs/drill/mood-stabilizers', '#/glossary/autoinduction', '#/search/ebstein', '#/c/ch21-4/guide/s214-flum', '#/c/ch21-4/handout', '#/helpers/anxiolytic', '#/drugs/alprazolam', '#/drugs/buspirone', '#/drugs/compare/lorazepam,diazepam,alprazolam,clonazepam', '#/drugs/drill/anxiolytics', '#/glossary/amytal-interview', '#/search/flumazenil', '#/c/ch21-5/guide/s215-newer', '#/c/ch21-5/handout', '#/helpers/sleepdrug', '#/drugs/zolpidem', '#/drugs/suvorexant', '#/drugs/compare/zolpidem,zaleplon,eszopiclone,ramelteon', '#/drugs/drill/hypnotics', '#/glossary/z-drug', '#/search/ramelteon', '#/c/ch21-6/guide/s216-ae', '#/c/ch21-6/handout', '#/helpers/adhdmed', '#/drugs/methylphenidate', '#/drugs/viloxazine', '#/drugs/compare/methylphenidate,amphetamine,lisdexamfetamine,atomoxetine', '#/drugs/drill/stimulants', '#/glossary/sympathomimetic', '#/search/atomoxetine', '#/all-highyield', '#/c/ch25-3/guide/s253-suicide', '#/c/ch25-3/guide/s253-tox', '#/c/ch25-3/handout', '#/c/ch25-3/high-yield', '#/c/ch25-3/cards/cases', '#/helpers/agitation', '#/glossary/safety-plan', '#/search/restraint', '#/search/flumazenil', '#/c/ch19/guide/s19-borderline', '#/c/ch19/guide/s19-defenses', '#/c/ch19/handout', '#/c/ch19/high-yield', '#/helpers/personality', '#/glossary/splitting', '#/search/schizotypal', '#/compare', '#/compare/detached', '#/compare/borderline-bipolar', '#/compare/ocpd-ocd', '#/compare/paranoid', '#/quiz/1/u/abc/Test%20quiz/ch19!c19-!01.02.03~ch07!c7-!01.02', '#/search/heatmap', '#/compare/ch/ch19', '#/compare/ch/ch06', '#/c/ch21-7/guide/s217-bup', '#/c/ch21-7/guide/s217-antag', '#/c/ch21-7/guide/s217-choose', '#/c/ch21-7/handout', '#/helpers/sudmed', '#/drugs/buprenorphine', '#/drugs/naltrexone', '#/drugs/lofexidine', '#/drugs/compare/methadone,buprenorphine,naltrexone', '#/drugs/drill/substance', '#/glossary/naloxone-challenge-test', '#/search/disulfiram', '#/compare/oud-meds', '#/compare/aud-meds', '#/compare/ch/ch21-7', '#/c/ch21-8/guide/s218-amyloid', '#/c/ch21-8/guide/s218-ae', '#/c/ch21-8/handout', '#/helpers/cogmed', '#/drugs/donepezil', '#/drugs/lecanemab', '#/drugs/compare/donepezil,rivastigmine,galantamine,memantine', '#/drugs/drill/cognitive', '#/glossary/amyloid-related-imaging-abnormalities', '#/search/memantine', '#/compare/dementia-drugs', '#/compare/anti-amyloid', '#/compare/ch/ch21-8', '#/c/ch21-9/guide/s219-cardiac', '#/c/ch21-9/guide/s219-women', '#/c/ch21-9/handout', '#/helpers/sexmed', '#/drugs/tadalafil', '#/drugs/flibanserin', '#/drugs/compare/sildenafil,vardenafil,tadalafil', '#/drugs/drill/sexual', '#/glossary/poppers', '#/search/yohimbine', '#/compare/pde5-drugs', '#/compare/hsdd-drugs', '#/compare/ch/ch21-9', '#/c/ch21-10/guide/s2110-ac-ind', '#/c/ch21-10/guide/s2110-wt-new', '#/c/ch21-10/handout', '#/helpers/sedrug', '#/drugs/amantadine', '#/drugs/semaglutide', '#/drugs/compare/benztropine,diphenhydramine,amantadine', '#/drugs/drill/sideeffect', '#/glossary/livedo-reticularis', '#/search/physostigmine', '#/compare/eps-syndromes', '#/compare/toxidromes', '#/compare/ch/ch21-10', '#/c/ch21-11/guide/s2111-sjw', '#/c/ch21-11/guide/s2111-safety', '#/c/ch21-11/handout', '#/helpers/suppchk', '#/drugs/st-johns-wort', '#/drugs/kava', '#/drugs/compare/st-johns-wort,s-adenosylmethionine,hydroxytryptophan', '#/drugs/drill/supplement', '#/glossary/kratom', '#/search/hyperforin', '#/compare/supp-categories', '#/compare/serotonergic-supps', '#/compare/ch/ch21-11']
for c in CHS:
    ROUTES += [f'#/c/{c}/guide', f'#/c/{c}/high-yield', f'#/c/{c}/cards/diagnosis',
               f'#/c/{c}/cards/cases', f'#/c/{c}/cards/pharm', f'#/c/{c}/cards/foundations']


def ignorable(t):
    return 'ERR_TUNNEL' in t or '403' in t or 'fonts.g' in t


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        # 1. Route sweep, desktop and phone
        for w, h, tag in [(1360, 900, 'desktop'), (390, 844, 'phone')]:
            pg = await b.new_page(viewport={'width': w, 'height': h})
            errs = []
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and not ignorable(m.text) else None)
            await pg.goto(B); await pg.wait_for_timeout(1000)
            over = []
            for r in ROUTES:
                await pg.evaluate(f"location.hash='{r}'"); await pg.wait_for_timeout(250)
                if await pg.evaluate('document.documentElement.scrollWidth') > w: over.append(r)
            await pg.evaluate("location.hash='#/c/ch09/guide'"); await pg.wait_for_timeout(400)
            gl = await pg.evaluate("document.querySelectorAll('.gl').length")
            print(f'{tag}: {len(ROUTES)} routes, errors={errs}, overflow={over}, ch9 glossary links={gl}')
            await pg.close()

        pg = await b.new_page(viewport={'width': 1360, 'height': 900})
        errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.on('dialog', lambda d: asyncio.ensure_future(d.accept()))
        await pg.goto(B); await pg.wait_for_timeout(900)
        print('home chapters:', await pg.eval_on_selector_all('.chapter-row h3', 'e=>e.map(x=>x.textContent)'))

        # 2. Every path through every helper
        helpers = await pg.evaluate('KS.helpers')
        for h in helpers:
            paths = []
            def dfs(node, path):
                for i, o in enumerate(h['nodes'][node]['options']):
                    if o['to'].startswith('r:'): paths.append((path + [i], o['to'][2:]))
                    else: dfs(o['to'], path + [i])
            dfs(h['start'], [])
            bad = []
            for path, exp in paths:
                await pg.evaluate("location.hash='#/helpers'"); await pg.wait_for_timeout(30)
                await pg.evaluate(f"location.hash='#/helpers/{h['id']}'"); await pg.wait_for_timeout(80)
                for i in path:
                    await pg.click(f'[data-opt="{i}"]'); await pg.wait_for_timeout(15)
                got = await pg.inner_text('.result-card h2')
                if got != h['results'][exp]['dx']: bad.append((path, exp, got))
            print(f"helper {h['id']}: {len(paths)} paths, wrong={bad}")

        # 3. Exam on Chapter 9 only
        await pg.evaluate("location.hash='#/exam'"); await pg.wait_for_timeout(300)
        for c in CHS[:-1]: await pg.uncheck(f'input[name=ch][value={c}]')
        await pg.check('input[name=count][value="10"]'); await pg.wait_for_timeout(100)
        print('exam setup:', await pg.inner_text('#ex-sum'))
        await pg.click('#ex-start'); await pg.wait_for_timeout(300)
        for i in range(10):
            await pg.click('[data-pick]')
            if i < 9: await pg.click('#ex-next')
            await pg.wait_for_timeout(30)
        await pg.click('#ex-submit'); await pg.wait_for_timeout(500)
        print('exam result:', (await pg.inner_text('.score')).replace('\n', ' '),
              await pg.eval_on_selector_all('.score-table >> nth=1 >> tbody th', 'e=>e.map(x=>x.textContent)'))

        # 4. Handouts: fit message and real PDF page count for every chapter
        for c in CHS:
            await pg.evaluate("localStorage.removeItem('ks:v1:handoutPrefs')")
            await pg.evaluate("location.hash='#/'"); await pg.wait_for_timeout(100)
            await pg.evaluate(f"location.hash='#/c/{c}/handout'"); await pg.wait_for_timeout(700)
            fit = await pg.inner_text('#ho-fit')
            out = f'/tmp/claude-0/handout_{c}.pdf'
            await pg.pdf(path=out, prefer_css_page_size=True, print_background=True)
            n = subprocess.run(['python3', '-c', f"from pypdf import PdfReader;print(len(PdfReader('{out}').pages))"],
                               capture_output=True, text=True).stdout.strip()
            print(f'handout {c}: pdf pages={n} | {fit}')

        # 5. Teaching mode, Chapter 9 chapter cases
        await pg.evaluate("location.hash='#/teach'"); await pg.wait_for_timeout(300)
        await pg.select_option('#t-scope', 'ch14'); await pg.wait_for_timeout(200)
        print('teach ch13 hint:', await pg.inner_text('#t-hint'))
        await pg.click('#t-start'); await pg.wait_for_timeout(400)
        print('teach view:', await pg.evaluate("location.hash"))
        await pg.evaluate("location.hash='#/'"); await pg.wait_for_timeout(300)

        # 6. Flashcard rating and mistakes on Chapter 9
        await pg.evaluate("location.hash='#/c/ch09/cards/cases'"); await pg.wait_for_timeout(300)
        ans = await pg.evaluate("(()=>{const q=document.querySelector('.face--front .face__q').textContent;return KS.chapters.ch09.cases.find(c=>c.q.replace(/\\*\\*/g,'')===q).answer})()")
        await pg.click(f'.face--front [data-choice="{(ans + 1) % 5}"]'); await pg.wait_for_timeout(150)
        print('wrong answer -> mistakes badge:', await pg.inner_text('[data-badge="mistakes"]'))

        # 7. What's new and search
        await pg.evaluate("location.hash='#/whats-new'"); await pg.wait_for_timeout(300)
        print('whats new top:', await pg.inner_text('.news__entry h2'))
        await pg.evaluate("location.hash='#/search/hoarding'"); await pg.wait_for_timeout(400)
        print('search hoarding results:', await pg.evaluate("document.querySelectorAll('.result').length"))
        print('errors:', errs)
        await b.close()

asyncio.run(main())
