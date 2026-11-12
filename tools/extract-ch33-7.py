import pymupdf,re
d=pymupdf.open('/home/claude/pdfsrc/ks.pdf')
out=[];imgs=[]
for p in range(3097,3131):
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
a=re.search(r'<b>NEUROGENETICS',t); assert a,'start'
z=re.search(r'<b>APPLIED ELECTROPHYSIOLOGY',t); assert z,'end'
open('/home/claude/pdfsrc/ch33-7-all.txt','w').write(t[a.start():z.start()])
print(imgs)
