# 34.4c Erikson (ch34-8): 3 chunks from the ERIK H. ERIKSON heading to OTHER PSYCHODYNAMIC SCHOOLS; keeps <b> markers
import re
t=open('/home/claude/pdfsrc/ch34-6-all.txt').read()
def pos(pat,start=0):
    m=re.compile(pat).search(t,start); assert m,pat; return m.start()
a=pos(r'<b>ERIK H\. ERIKSON'); z=pos(r'<b>\s*OTHER PSYCHODYNAMIC')
z=pos(r'<b>\s*OTHER PSYCHODYNAMIC',a)
cuts=[a,pos(r'<b>\s*Table 34-16',a),pos(r'<b>\s*Psychopathology',a),z]
clean=lambda s: re.sub(r'</?b>','',re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',s))
for n,(x,y) in enumerate(zip(cuts,cuts[1:]),1):
    s=t[x:y]; open(f'/home/claude/ch34-8work/src/chunk{n}.txt','w').write(s)
    print(n,len(clean(s).split()),'words')
open('/home/claude/pdfsrc/ch34-8-clean.txt','w').write(clean(t[a:z]))
