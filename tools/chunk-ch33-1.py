import re,pymupdf
t=open('/home/claude/pdfsrc/ch33-1-all.txt').read()
c=re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',t); c=re.sub(r'</?b>','',c)
open('/home/claude/pdfsrc/ch33-1-clean.txt','w').write(c)
marks=['<b>Brain Organization</b>','<b>Visual System.</b>','<b>Motor Systems</b>','<b>Language.</b>','<b>Emotion.</b>','<b>Development</b>']
pos=[0]
for m in marks:
    i=t.find(m,pos[-1]+1); assert i>0,m; pos.append(i)
pos.append(len(t))
for k in range(len(pos)-1):
    s=t[pos[k]:pos[k+1]]
    open(f'/home/claude/ch33-1work/src/s{k+1}.txt','w').write(s)
    print(k+1,len(re.sub(r'<.?b>|\[\[PAGE \d+\]\]','',s).split()), sorted(set(re.findall(r'\[\[PAGE (\d+)\]\]',s)))[:1], sorted(set(re.findall(r'Table 33-\d+|Figure 33-\d+|FIGURE 33-\d+',s)))[:14])
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
for p in (2905,2916,2928,2942,2947):
    d[p-1].get_pixmap(dpi=130).save(f'/home/claude/pdfsrc/p{p}.png')
