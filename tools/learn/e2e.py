import json, sys
from playwright.sync_api import sync_playwright
B='http://localhost:8124/'
STUB = """
window.__spoken=[];
(function(){ var q=[]; Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{ speaking:false, getVoices:function(){return [{name:'Test',lang:'en-US',localService:true,'default':true}]}, addEventListener:function(){},
 speak:function(u){ window.__spoken.push(u.text); setTimeout(function(){ if(!u.__c && u.onend) u.onend({}); }, 30); q.push(u); },
 cancel:function(){ q.forEach(function(u){u.__c=1;}); q=[]; }, pause:function(){}, resume:function(){} }});
 Object.defineProperty(window,'SpeechSynthesisUtterance',{configurable:true,writable:true,value:function(t){ this.text=t; }});
})();
"""
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch()
    def ctx(**kw):
        c=b.new_context(service_workers='block', **kw); c.add_init_script(STUB); return c
    c=ctx(viewport={'width':1280,'height':900}); pg=c.new_page()
    pg.on('pageerror',lambda e: errs.append(str(e)))
    pg.on('console',lambda m: errs.append(m.text) if m.type=='error' and 'fonts' not in m.text and 'ERR_TUNNEL' not in m.text else None)
    pg.goto(B+'#/c/ch19/guide'); pg.wait_for_selector('.g-sec')
    print('checks', pg.locator('.checks').count(), 'heatmap', pg.locator('.heatmap').count(), 'compare chips', pg.locator('.g-compare a').count(), 'listen', pg.locator('.g-listen').count(), 'prepost', pg.locator('.prepost').count())
    pg.locator('.checks summary').first.click(); print('check open', pg.locator('.checks details[open]').count())
    # read aloud
    pg.locator('[data-listen="s19-paranoid"]').click(); pg.wait_for_timeout(600)
    sp=pg.evaluate('window.__spoken'); print('tts spoken', len(sp), sp[:2]); print('tts bar visible', pg.locator('.tts').is_visible(), 'speaking el', pg.locator('.is-speaking').count())
    pg.locator('[data-tts=play]').click(); n1=len(pg.evaluate('window.__spoken')); pg.wait_for_timeout(300); print('paused stable', n1==len(pg.evaluate('window.__spoken')))
    pg.locator('[data-tts=stop]').click(); print('bar hidden', not pg.locator('.tts').is_visible())
    # pre-test
    pg.locator('[data-prepost=pre]').click(); pg.wait_for_url('**/exam/run')
    n=pg.locator('#ex-nav button').count(); print('pretest questions', n)
    for i in range(n):
        pg.locator('[data-pick]').first.click(); 
        if i<n-1: pg.locator('#ex-next').click()
    pg.once('dialog', lambda d: d.accept()); pg.locator('#ex-submit').click(); pg.wait_for_url('**/exam/results/**')
    print('results h1', pg.locator('h1').inner_text(), '| domain table', pg.locator('text=Score by board domain').count())
    mk=pg.evaluate("JSON.parse(localStorage.getItem('ks:v1:mistakes')||'{}')"); print('mistakes after pretest', len(mk))
    pg.goto(B+'#/c/ch19/guide'); pg.wait_for_selector('.prepost'); print('prepost slot', pg.locator('.prepost__score').first.inner_text())
    # review missed shows why-not
    pg.goto(B+'#/c/ch19/cards/cases/c19-01'); pg.wait_for_selector('[data-choice]')
    pg.locator('[data-choice="0"]').click(); pg.wait_for_timeout(200)
    print('whyNot on card', pg.locator('.face--back .choice__why').count(), pg.locator('.face--back .choice__why').first.inner_text()[:60])
    # exam setup domain filter + share
    pg.goto(B+'#/exam'); pg.wait_for_selector('#ex-form')
    pg.locator('#dom-none').click(); print('none ->', pg.locator('#ex-sum').inner_text(), pg.locator('#ex-start').is_disabled())
    pg.locator('input[name=dom][value=E]').check(); print('E only ->', pg.locator('#ex-sum').inner_text())
    pg.locator('#dom-all').click()
    pg.locator('input[name=ch]').evaluate_all("els=>els.forEach(e=>{e.checked=e.value==='ch19'})"); pg.locator('input[name=ch]').first.dispatch_event('change')
    pg.locator('input[name=count][value="10"]').check(force=True)
    pg.locator('#ex-share').click(); pg.wait_for_selector('#sh-qr svg')
    pg.locator('#sh-title').fill('Week 3 personality'); pg.wait_for_timeout(200)
    link=pg.locator('#sh-link').input_value(); print('link', len(link), link[:110])
    pg.locator('#sh-qr').screenshot(path='/tmp/lt/qr.png')
    # open the link in two fresh contexts and compare
    orders=[]
    for k in range(2):
        c2=ctx(viewport={'width':390,'height':800}, is_mobile=True, has_touch=True); p2=c2.new_page(); p2.on('pageerror',lambda e: errs.append(str(e)))
        p2.goto(link); p2.wait_for_selector('#qz-start'); t=p2.locator('h1').inner_text()
        p2.locator('#qz-start').click(); p2.wait_for_url('**/exam/run')
        ex=p2.evaluate("JSON.parse(localStorage.getItem('ks:v1:exam'))"); orders.append([[i['k'],i['o']] for i in ex['items']])
        if k==0: print('quiz title', t, '| n', len(ex['items']), '| kind', ex['kind'])
        c2.close()
    print('same order across devices', orders[0]==orders[1])
    # compare pages
    pg.goto(B+'#/compare'); pg.wait_for_selector('.cmp-card'); print('compare cards', pg.locator('.cmp-card').count())
    pg.goto(B+'#/compare/borderline-bipolar'); pg.wait_for_selector('.cmp-table'); print('cmp rows', pg.locator('.cmp-table tbody tr').count())
    pg.goto(B+'#/search/look-alikes'); pg.wait_for_timeout(500)
    # text size
    pg.goto(B+'#/c/ch19/guide'); pg.wait_for_selector('.g-sec')
    pg.locator('#display-btn').click(); pg.locator('input[name=ts][value="125"]').check(force=True)
    print('font-size', pg.evaluate("getComputedStyle(document.documentElement).fontSize"))
    pg.reload(); pg.wait_for_selector('.g-sec'); print('font-size after reload', pg.evaluate("getComputedStyle(document.documentElement).fontSize"))
    pg.locator('#display-btn').click(); pg.locator('input[name=ts][value="100"]').check(force=True)
    # HY listen
    pg.goto(B+'#/c/ch19/high-yield'); pg.wait_for_selector('#hy-listen'); pg.evaluate('window.__spoken=[]'); pg.locator('#hy-listen').click(); pg.wait_for_timeout(300); print('hy spoken', len(pg.evaluate('window.__spoken')))
    # chapter without learning content still OK
    pg.goto(B+'#/c/ch05/guide'); pg.wait_for_selector('.prepost'); print('ch05 auto pretest', pg.locator('.prepost__intro p').inner_text()[:40])
    b.close()
print('ERRORS', errs)
