# Chapter 35 A Brief History of Psychiatry -> ch35 (90.0.0). No bold chapter heading on its first page: cut by page.
import pymupdf,re
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
out=[]
for p in range(3448,3553):
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
r=re.search(r'\n<b>\s*References\s*</b>|\nREFERENCES',t)
print('references at',r.start() if r else None, len(t))
body=t[:r.start()] if r else t
open('/home/claude/pdfsrc/ch35-all.txt','w').write(body)
clean=re.sub(r'</?b>','',re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]','',body))
open('/home/claude/pdfsrc/ch35-clean.txt','w').write(clean)
print('words',len(clean.split()),'pages',re.findall(r'\[\[PAGE (\d+)\]\]',body)[0],re.findall(r'\[\[PAGE (\d+)\]\]',body)[-1])
print('tables/figs',sorted(set(re.findall(r'Table 35-\d+|FIGURE 35-\d+',body))))
print('images on',sorted(set(re.findall(r'\[IMAGE p(\d+)',body))))
print('head:',repr(clean[:120]))
print('tail:',repr(clean[-80:]))
