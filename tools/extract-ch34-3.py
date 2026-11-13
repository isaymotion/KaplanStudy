# Section 34.2 Normality and Mental Health -> app entry ch34-3 (release 85.0.0)
import pymupdf,re
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
out=[]
for p in range(3242,3264):
    pg=d[p]; out.append(f'\n[[PAGE {p+1}]]\n')
    for blk in pg.get_text('dict',flags=(pymupdf.TEXTFLAGS_DICT & ~pymupdf.TEXT_MEDIABOX_CLIP))['blocks']:
        if blk['type']==1: out.append(f'[IMAGE p{p+1}]\n'); continue
        for ln in blk['lines']:
            s=''
            for sp in ln['spans']:
                t=sp['text']
                s+=('<b>'+t+'</b>') if t.strip() and ('Bold' in sp['font'] or sp['flags']&16) else t
            out.append(s.replace('</b><b>','')+'\n')
t=''.join(out)
a=re.search(r'<b> ?34\.2 Normality and Mental Health',t); assert a,'start'
z=re.search(r'<b> ?34\.3 Contributions',t); assert z,'end'
body=t[a.start():z.start()]
r=re.search(r'\n<b>References</b>|\nREFERENCES',body)
print('references at',r.start() if r else None, len(body))
if r: body=body[:r.start()]
open('/home/claude/pdfsrc/ch34-3-all.txt','w').write(body)
clean=re.sub(r'</?b>','',re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',body))
open('/home/claude/pdfsrc/ch34-3-clean.txt','w').write(clean)
print('words',len(clean.split()),'pages',re.findall(r'\[\[PAGE (\d+)\]\]',body)[0],re.findall(r'\[\[PAGE (\d+)\]\]',body)[-1])
print('tables/figs',sorted(set(re.findall(r'Table 34-\d+|FIGURE 34-\d+',body))))
print('images on',sorted(set(re.findall(r'\[IMAGE p(\d+)',body))))
print('tail:',repr(clean[-150:]))
