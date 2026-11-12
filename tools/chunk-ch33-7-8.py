import re,pymupdf
def clean(x): x=re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',x); return re.sub(r'</?b>','',x)
t=open('/home/claude/pdfsrc/ch33-7-all.txt').read()
cut=t.find('<b>Progress in the Genetics of Specific Disorders</b>'); assert cut>0
parts={'ch33-7':t[:cut],'ch33-8':t[cut:]}
marks={'ch33-7':['<b>Mapping Strategies</b>','<b>Defining Phenotypes for Mapping Studies</b>'],
       'ch33-8':['<b>Bipolar Disorder.</b>']}
for ch,tx in parts.items():
    open(f'/home/claude/pdfsrc/{ch}-clean.txt','w').write(clean(tx))
    pos=[0]
    for m in marks[ch]:
        i=tx.find(m,pos[-1]+1); assert i>0,m; pos.append(i)
    pos.append(len(tx))
    for k in range(len(pos)-1):
        s=tx[pos[k]:pos[k+1]]
        open(f'/home/claude/{ch}work/src/s{k+1}.txt','w').write(s)
        print(ch,k+1,len(clean(s).split()), sorted(set(re.findall(r'\[\[PAGE (\d+)\]\]',s)))[:1], sorted(set(re.findall(r'FIGURE 33-\d+',s))))
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
for p in (3101,3110,3111,3122):
    d[p-1].get_pixmap(dpi=110).save(f'/home/claude/pdfsrc/p{p}.png')
