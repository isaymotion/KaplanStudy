# Split the Freud part of 34.4 into 34.4a (ch34-6, chunks 1-3) and 34.4b (ch34-7, chunks 1-3); keeps <b> markers
import re
t=open('/home/claude/pdfsrc/ch34-6-all.txt').read()
def pos(pat):
    m=re.search(pat,t); assert m,pat; return m.start()
cuts=[0,pos(r'<b>\s*Topographical Model'),pos(r'<b>\s*Table 34-10'),
      pos(r'<b>\s*Ego Psychology'),pos(r'<b>\s*Table 34-12'),pos(r'<b>\s*Classic Psychoanalytic Theory of Neuroses'),
      pos(r'<b>\s*ERIK H\. ERIKSON')]
dest=[('ch34-6',1),('ch34-6',2),('ch34-6',3),('ch34-7',1),('ch34-7',2),('ch34-7',3)]
clean=lambda s: re.sub(r'</?b>','',re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',s))
for (ch,n),a,z in zip(dest,cuts,cuts[1:]):
    s=t[a:z]; open(f'/home/claude/{ch}work/src/chunk{n}.txt','w').write(s)
    pg=re.findall(r'\[\[PAGE (\d+)\]\]',s)
    print(ch,n,len(clean(s).split()),'words; pages',pg[0] if pg else '-',pg[-1] if pg else '-')
open('/home/claude/pdfsrc/ch34-6-clean.txt','w').write(clean(t[cuts[0]:cuts[3]]))
open('/home/claude/pdfsrc/ch34-7-clean.txt','w').write(clean(t[cuts[3]:cuts[6]]))
