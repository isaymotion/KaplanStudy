import re,pymupdf
def clean(x): x=re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',x); return re.sub(r'</?b>','',x)
marks={'ch34-1':['<b>ATTACHMENT THEORY</b>','<b>LEARNING THEORY</b>','<b>Operant/Instrumental Learning</b>','<b>Pavlovian and Operant Learning Together</b>'],
       'ch34-2':['<b>Memory and Amnesia</b>','<b>MULTIPLE TYPES OF MEMORY</b>','<b>ASSESSMENT OF MEMORY FUNCTIONS</b>']}
for ch in marks:
    tx=open(f'/home/claude/pdfsrc/{ch}-all.txt').read()
    open(f'/home/claude/pdfsrc/{ch}-clean.txt','w').write(clean(tx))
    pos=[0]
    for m in marks[ch]:
        i=tx.find(m,pos[-1]+1); assert i>0,m; pos.append(i)
    pos.append(len(tx))
    for k in range(len(pos)-1):
        s=tx[pos[k]:pos[k+1]]
        open(f'/home/claude/{ch}work/src/s{k+1}.txt','w').write(s)
        print(ch,k+1,len(clean(s).split()), sorted(set(re.findall(r'\[\[PAGE (\d+)\]\]',s)))[:1], sorted(set(re.findall(r'Table 34-\d+|FIGURE 34-\d+',s))))
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
for p in (3165,3166,3170,3176,3179,3186,3193,3205,3206,3216,3218,3220,3222,3223,3226,3229,3230,3231,3232,3235,3236,3241):
    d[p-1].get_pixmap(dpi=110).save(f'/home/claude/pdfsrc/p{p}.png')
