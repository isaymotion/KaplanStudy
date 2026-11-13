# Split 34.3 source into 34.3a (ch34-4, chunks 1-2) and 34.3b (ch34-5, chunks 1-4); keeps <b> markers
import re
t=open('/home/claude/pdfsrc/ch34-4-all.txt').read()
def pos(pat):
    m=re.search(pat,t); assert m,pat; return m.start()
cuts=[0,pos(r'<b>\s*Subhuman Primate Development'),pos(r'<b>\s*TRANSCULTURAL PSYCHIATRY'),
      pos(r'<b>\s*Psychiatric Assessment of Immigrants'),pos(r'<b>\s*Research in Transcultural'),
      pos(r'<b>\s*Ataque de Nervios'),len(t)]
dest=[('ch34-4',1),('ch34-4',2),('ch34-5',1),('ch34-5',2),('ch34-5',3),('ch34-5',4)]
clean=lambda s: re.sub(r'</?b>','',re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',s))
for (ch,n),a,z in zip(dest,cuts,cuts[1:]):
    s=t[a:z]; open(f'/home/claude/{ch}work/src/chunk{n}.txt','w').write(s)
    pg=re.findall(r'\[\[PAGE (\d+)\]\]',s)
    print(ch,n,len(clean(s).split()),'words; pages',pg[0] if pg else '-',pg[-1] if pg else '-')
open('/home/claude/pdfsrc/ch34-4-clean.txt','w').write(clean(t[cuts[0]:cuts[2]]))
open('/home/claude/pdfsrc/ch34-5-clean.txt','w').write(clean(t[cuts[2]:]))
