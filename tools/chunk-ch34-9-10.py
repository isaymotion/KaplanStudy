# 34.4d Other psychodynamic schools (ch34-9, 4 chunks by alphabet) and 34.4e Positive psychology (ch34-10, 2 chunks).
# Reads pdfsrc/ch34-6-all.txt (from tools/extract-ch34-6.py); keeps <b> markers in chunks; writes clean overlap sources.
import re, os
t = open('/home/claude/pdfsrc/ch34-6-all.txt').read()
def pos(pat, start=0):
    m = re.compile(pat).search(t, start); assert m, pat; return m.start()
clean = lambda s: re.sub(r'</?b>', '', re.sub(r'\[\[PAGE \d+\]\]|\[IMAGE[^\]]*\]', '', s))
e = pos(r'<b>ERIK H\. ERIKSON')
a = pos(r'<b>\s*OTHER PSYCHODYNAMIC SCHOOLS', e)
p = pos(r'<b>\s*POSITIVE PSYCHOLOGY', a)
jobs = {
 'ch34-9': [a, pos(r'<b>Raymond Cattell', a), pos(r'<b>Otto Kernberg', a), pos(r'<b>Frederick S\. Perls', a), p],
 'ch34-10': [p, pos(r'<b>Positive Psychology and Clinical Work', p), len(t)],
}
for ch, cuts in jobs.items():
    d = f'/home/claude/{ch}work/src'; os.makedirs(d, exist_ok=True)
    for n, (x, y) in enumerate(zip(cuts, cuts[1:]), 1):
        s = t[x:y]; open(f'{d}/chunk{n}.txt', 'w').write(s)
        print(ch, n, len(clean(s).split()), 'words')
    open(f'/home/claude/pdfsrc/{ch}-clean.txt', 'w').write(clean(t[cuts[0]:cuts[-1]]))
