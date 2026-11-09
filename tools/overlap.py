#!/usr/bin/env python3
# Usage: overlap.py <source.txt> <workfile...>  -> counts runs of N+ consecutive words shared with the source (prints only the first 4 words of each run).
import re,sys
import os
N=int(os.environ.get('N','8'))
def toks(s): return re.findall(r"[a-z0-9]+",s.lower())
src=toks(re.sub(r'<\/?b>','',open(sys.argv[1]).read()))
grams=set(tuple(src[i:i+N]) for i in range(len(src)-N+1))
for f in sys.argv[2:]:
    t=toks(open(f).read()); hits=[];i=0
    while i<=len(t)-N:
        if tuple(t[i:i+N]) in grams:
            j=i+N
            while j<len(t) and tuple(t[j-N+1:j+1]) in grams: j+=1
            hits.append((j-i,' '.join(t[i:i+4]),i)); i=j
        else: i+=1
    if os.environ.get('DETAIL'):
        open(os.environ['DETAIL'],'a').write(''.join(f'{f}\t{n}\t{" ".join(t[k:k+n])}\n' for n,k in [(h[0],h[2]) for h in hits]))
    print(f, 'runs>=%d:'%N, len(hits), 'longest:', max([h[0] for h in hits],default=0), 'runs>=10:',len([h for h in hits if h[0]>=10]))
