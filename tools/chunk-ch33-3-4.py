import re,pymupdf
t=open('/home/claude/pdfsrc/ch33-3-all.txt').read()
cut=t.find('<b>Neuropeptides</b>'); assert cut>0
parts={'ch33-3':t[:cut],'ch33-4':t[cut:]}
def clean(x): x=re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',x); return re.sub(r'</?b>','',x)
marks={'ch33-3':['<b>Acetylcholine.</b>','<b>Receptors</b>','<b>Amino Acid Neurotransmitters','<b>Neuropsychiatric Implications'],
       'ch33-4':['<b>THYROTROPIN-RELEASING','<b>Novel Neurotransmitters','<b>Endocannabinoids:','<b>Eicosanoids']}
for ch,tx in parts.items():
    open(f'/home/claude/pdfsrc/{ch}-clean.txt','w').write(clean(tx))
    pos=[0]
    for m in marks[ch]:
        i=tx.find(m,pos[-1]+1); assert i>0,m; pos.append(i)
    pos.append(len(tx))
    for k in range(len(pos)-1):
        s=tx[pos[k]:pos[k+1]]
        open(f'/home/claude/{ch}work/src/s{k+1}.txt','w').write(s)
        print(ch,k+1,len(clean(s).split()), sorted(set(re.findall(r'\[\[PAGE (\d+)\]\]',s)))[:1], sorted(set(re.findall(r'Table 33-\d+|FIGURE 33-\d+',s))))
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
for p in (3000,3002,3004,3005,3006,3008,3011,3014,3018,3019,3020,3021,3030,3033,3037,3038,3041,3045,3046,3055,3059,3060,3061,3063,3065):
    d[p-1].get_pixmap(dpi=130).save(f'/home/claude/pdfsrc/p{p}.png')
