# Chapter 35 (ch35, 90.0.0): 4 prose chunks cut at bold headings + Table 35-1 in 2 chunks (cut at page 3512).
import re, os
t = open('/home/claude/pdfsrc/ch35-all.txt').read()
def pos(pat, start=0):
    m = re.compile(pat).search(t, start); assert m, pat; return m.start()
clean = lambda s: re.sub(r'</?b>', '', re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]', '', s))
tb = pos(r'<b>Table 35-1</b>')
cuts = [0, pos(r'<b>The 19th and Early 20th Century'), pos(r'<b>The Latter 20th Century'),
        pos(r'<b>THE CLASSIFICATION OF PSYCHIATRIC'), tb, pos(r'\[\[PAGE 3512\]\]', tb), len(t)]
d = '/home/claude/ch35work/src'; os.makedirs(d, exist_ok=True)
for n, (x, y) in enumerate(zip(cuts, cuts[1:]), 1):
    s = t[x:y]; open(f'{d}/chunk{n}.txt', 'w').write(s)
    print(n, len(clean(s).split()), 'words', re.findall(r'\[\[PAGE (\d+)', s)[:1])
