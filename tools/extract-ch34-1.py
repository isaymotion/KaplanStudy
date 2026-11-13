import pymupdf,re
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
out=[];imgs=[]
for p in range(3160,3245):
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
a=re.search(r'<b>JEAN PIAGET AND COGNITIVE DEVELOPMENT',t); assert a,'start'
m=re.search(r'<b>BIOLOGY OF MEMORY',t); assert m,'mid'
z=re.search(r'<b>34\.2|<b>[^<\n]*Normality and Mental Health',t[m.start():]); assert z,'end'
z0=m.start()+z.start()
open('/home/claude/pdfsrc/ch34-1-all.txt','w').write(t[a.start():m.start()])
open('/home/claude/pdfsrc/ch34-2-all.txt','w').write(t[m.start():z0])
open('/home/claude/pdfsrc/ch34-head.txt','w').write(t[:a.start()])
open('/home/claude/pdfsrc/ch34-tail.txt','w').write(t[z0:z0+600])
import json; json.dump(imgs,open('/home/claude/pdfsrc/ch34-imgs.json','w'))
print(len(imgs))
