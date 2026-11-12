import re,pymupdf
t=open('/home/claude/pdfsrc/ch32-1-all.txt').read()
# clean source for overlap/coverage
c=re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',t); c=re.sub(r'</?b>','',c)
open('/home/claude/pdfsrc/ch32-1-clean.txt','w').write(c)
marks=['<b>INFANCY</b>','<b>Emotional and Social Development.</b>','<b>TODDLER PERIOD</b>','<b>MIDDLE YEARS</b>','<b>ADOLESCENCE</b>','<b>Components of Adolescence</b>','<b>Drug Use</b>']
pos=[0]
for m in marks:
    i=t.find(m); assert i>0,m; pos.append(i)
pos.append(len(t))
for k in range(len(pos)-1):
    s=t[pos[k]:pos[k+1]]
    open(f'/home/claude/ch32-1work/src/s{k+1}.txt','w').write(s)
    print(k+1,len(re.sub(r'<.?b>|\[\[PAGE \d+\]\]','',s).split()))
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
for p in (2784,2785,2787,2788,2792,2793):
    d[p-1].get_pixmap(dpi=130).save(f'/home/claude/pdfsrc/p{p}.png')
