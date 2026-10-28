# Confidence ratings: exam run prompt, results section, review lists, weak topics, setup toggle.
import asyncio
from playwright.async_api import async_playwright
B='http://localhost:8124/'
async def main():
    errs=[]; fails=[]
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for w,theme in [(1280,'light'),(390,'dark')]:
            pg=await b.new_page(viewport={'width':w,'height':900})
            pg.on('pageerror',lambda e: errs.append(str(e)))
            pg.on('dialog',lambda d: asyncio.ensure_future(d.accept()))
            await pg.goto(B); await pg.evaluate("localStorage.clear(); localStorage.setItem('ks:v1:theme', JSON.stringify('%s'))"%theme)
            await pg.goto(B+'#/exam'); await pg.wait_for_timeout(400)
            await pg.click('input[name=count][value="10"]', force=True)
            await pg.click('input[name=timed][value="0"]', force=True)
            await pg.click('#ex-start'); await pg.wait_for_timeout(400)
            if await pg.locator('.conf').count(): fails.append('conf shown before answering')
            for i in range(10):
                await pg.click('[data-pick] >> nth=0'); await pg.wait_for_timeout(60)
                if not await pg.locator('.conf').count(): fails.append('no conf row q%d'%i); break
                if i%3==0: await pg.click('[data-conf="s"]')
                elif i%3==1: await pg.keyboard.press('1')
                else: await pg.keyboard.press('2')
                await pg.wait_for_timeout(60)
                on=await pg.locator('.conf__b.is-on').count()
                if on!=1: fails.append('conf not set q%d'%i)
                if i==0:
                    ov=await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
                    if ov: fails.append('overflow at %d'%w)
                    await pg.screenshot(path='/tmp/conf_run_%d.png'%w)
                if i<9: await pg.click('#ex-next')
            await pg.click('#ex-submit'); await pg.wait_for_timeout(600)
            h=await pg.evaluate("location.hash")
            if '/results/' not in h: fails.append('no results '+h)
            txt=await pg.inner_text('main')
            if 'Confidence' not in txt: fails.append('no confidence section')
            await pg.screenshot(path='/tmp/conf_res_%d.png'%w, full_page=True)
            ex=await pg.evaluate("JSON.parse(localStorage.getItem('ks:v1:examHistory')||'[]')[0]")
            if not ex: fails.append('no history record')
            else:
                if sum(1 for x in ex['items'] if x.get('s'))!=10: fails.append('ratings not stored')
                for which in ['blind','lucky']:
                    await pg.goto(B+'#/exam/review/%s/%s'%(ex['id'],which)); await pg.wait_for_timeout(300)
                    t=await pg.inner_text('main')
                    if 'You said' not in t and 'Exam results' not in t and 'Confidence' not in t: fails.append('review %s broken'%which)
            await pg.goto(B+'#/weak'); await pg.wait_for_timeout(400)
            wt=await pg.inner_text('main')
            if 'how sure you were' not in wt: fails.append('weak header')
            await pg.screenshot(path='/tmp/conf_weak_%d.png'%w, full_page=True)
            # toggle off
            await pg.goto(B+'#/exam'); await pg.wait_for_timeout(300)
            await pg.click('input[name=conf][value="0"]', force=True)
            await pg.click('input[name=count][value="10"]', force=True)
            await pg.click('#ex-start'); await pg.wait_for_timeout(300)
            await pg.click('[data-pick] >> nth=0'); await pg.wait_for_timeout(60)
            if await pg.locator('.conf').count(): fails.append('conf shown when off')
            await pg.evaluate("localStorage.removeItem('ks:v1:exam')")
            await pg.close()
        await b.close()
    print('FAILS',fails); print('ERRORS',errs)
asyncio.run(main())
