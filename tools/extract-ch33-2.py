import pymupdf,re
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
out=[];imgs=[]
for p in range(2951,2999):
    pg=d[p]; out.append(f'\n[[PAGE {p+1}]]\n')
    for blk in pg.get_text('dict',flags=(pymupdf.TEXTFLAGS_DICT & ~pymupdf.TEXT_MEDIABOX_CLIP))['blocks']:
        if blk['type']==1:
            imgs.append((p+1,[round(x) for x in blk['bbox']])); out.append(f'[IMAGE p{p+1} {[round(x) for x in blk["bbox"]]}]\n'); continue
        for ln in blk['lines']:
            s=''
            for sp in ln['spans']:
                t=sp['text']
                if t.strip() and ('Bold' in sp['font'] or 'bold' in sp['font'] or sp['flags']&16): s+='<b>'+t+'</b>'
                else: s+=t
            out.append(s.replace('</b><b>','')+'\n')
t=''.join(out)
import re as _re
_a=_re.search(r'<b>NEURAL DEVELOPMENT',t); assert _a, 'start heading'
_m=_re.search(r'<b>NEUROPHYSIOLOGY',t); assert _m, 'cut heading not found'
t=t[_a.start():_m.start()]
open('/home/claude/pdfsrc/ch33-2-all.txt','w').write(t)
print(imgs)
