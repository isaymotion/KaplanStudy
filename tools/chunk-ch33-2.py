import re,pymupdf
t=open('/home/claude/pdfsrc/ch33-2-all.txt').read()
c=re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',t); c=re.sub(r'</?b>','',c)
open('/home/claude/pdfsrc/ch33-2-clean.txt','w').write(c)
marks=['<b>The Ventricular and Subventricular','<b>The Concept of Neural Patterning','<b>Neuronal Specification','<b>Regulation of Neurodevelopment by Extracellular Factors','<b>The Neurodevelopmental Basis','<b>Autism']
pos=[0]
for m in marks:
    i=t.find(m,pos[-1]+1); assert i>0,m; pos.append(i)
pos.append(len(t))
for k in range(len(pos)-1):
    s=t[pos[k]:pos[k+1]]
    open(f'/home/claude/ch33-2work/src/s{k+1}.txt','w').write(s)
    print(k+1,len(re.sub(r'<.?b>|\[\[PAGE \d+\]\]','',s).split()), sorted(set(re.findall(r'\[\[PAGE (\d+)\]\]',s)))[:1], sorted(set(re.findall(r'Table 33-\d+|Figure 33-\d+|FIGURE 33-\d+',s)))[:14])
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
for p in (2955,2958,2960,2964,2970,2973):
    d[p-1].get_pixmap(dpi=130).save(f'/home/claude/pdfsrc/p{p}.png')
