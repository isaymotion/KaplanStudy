import re,pymupdf
def clean(s):
    s=re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',s); return re.sub(r'</?b>','',s)
def wc(s): return len(clean(s).split())
t2=open('/home/claude/pdfsrc/ch32-2-all.txt').read()
i=t2.find('<b> 32.2 Adulthood'); assert i>0
tail,t2=t2[:i],t2[i:]
open('/home/claude/ch32-1work/src/s9.txt','w').write(tail)
open('/home/claude/pdfsrc/ch32-1-tail-clean.txt','w').write(clean(tail))
c1=open('/home/claude/pdfsrc/ch32-1-clean.txt').read()
if 'Tattoos' not in c1: open('/home/claude/pdfsrc/ch32-1-clean.txt','a').write(clean(tail))
t3=open('/home/claude/pdfsrc/ch32-3-all.txt').read()
t3=t3[:t3.find('<b>References</b>')]
open('/home/claude/pdfsrc/ch32-2-clean.txt','w').write(clean(t2))
open('/home/claude/pdfsrc/ch32-3-clean.txt','w').write(clean(t3))
def split(t,marks,d):
    pos=[0]+[t.find(m) for m in marks]+[len(t)]
    assert all(p>0 for p in pos[1:-1]),marks
    for k in range(len(pos)-1):
        s=t[pos[k]:pos[k+1]]; open(f'{d}/s{k+1}.txt','w').write(s); print(d[-12:],k+1,wc(s))
split(t2,['<b>Parenthood.</b>','<b>Developing Midlife Friendships</b>','<b>DIVORCE</b>'],'/home/claude/ch32-2work/src')
split(t3,['<b>Life Expectancy</b>','<b>PSYCHOSOCIAL ASPECTS OF AGING</b>'],'/home/claude/ch32-3work/src')
print('tail',wc(tail))
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
for p in (2879,2887,2889,2890,2891):
    d[p-1].get_pixmap(dpi=130).save(f'/home/claude/pdfsrc/p{p}.png')
