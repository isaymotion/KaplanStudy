#!/usr/bin/env python3
"""Coverage audit: does the built chapter cover every sentence of the book source?

Usage: python3 coverage-audit.py <source.txt> <chapter-data-dir> [threshold]
  e.g. python3 coverage-audit.py /home/claude/pdfsrc/ch18-clean.txt /home/claude/kaplanstudy/data/ch18 0.6

For each source sentence it takes the content words (numbers, drug and disease
names, any word of 5+ letters that is not a stop word), crudely stems them, and
checks how many appear anywhere in the guide + cards text. Sentences below the
threshold are printed, with the missing words, for a human to review. It also
lists every number in the source that never appears in the app text.
A flagged line is not proof of a gap (paraphrase can hide a match), and a
passed line is not proof of coverage; the human review decides.
"""
import re, sys, os, glob

STOP = set('''about above after again against among although another because been before being below between
both cannot could during each either every few from further have having here however into itself just
least less many might more most much must neither other others otherwise ought over same several should
since some such than that their theirs them then there these they this those though through thus under
until upon very what when where whether which while whom whose will with within without would your
also often usually typically generally clinicians patients patient individuals individual persons person
people disorder disorders include includes including associated reported described discussed section
chapter table considered called known found shown suggest suggests study studies another regarding
particular certain quite something someone become becomes became make makes made used using uses
indicate indicates'''.split())

def stem(w):
    w = w.lower()
    for suf in ('ational', 'ations', 'ation', 'ically', 'ality', 'ness', 'ments', 'ment', 'ings', 'ing',
                'ies', 'ied', 'ive', 'ous', 'ers', 'ed', 'es', 'ly', 'al', 's', 'e', 'y'):
        if len(w) - len(suf) >= 4 and w.endswith(suf):
            return w[:-len(suf)]
    return w

def words(text):
    return re.findall(r"[A-Za-z][A-Za-z\-]+|\d+(?:\.\d+)?", text)

def main():
    src, data = sys.argv[1], sys.argv[2]
    thr = float(sys.argv[3]) if len(sys.argv) > 3 else 0.6
    raw = open(src, encoding='utf8').read()
    raw = re.sub(r'\[p\d+\]', ' ', raw)
    if 'References' in raw:
        raw = raw[:raw.rindex('References')]
    app = ''
    for f in glob.glob(os.path.join(data, '*.js')):
        app += open(f, encoding='utf8').read() + '\n'
    app = app.replace('**', '')
    appstems = {stem(w) for w in words(app)}
    applow = app.lower()
    sents = [s.strip() for s in re.split(r'(?<=[.!?])\s+|\n(?=[A-Z][a-z]+ ?\n)', raw) if len(s.strip()) > 25]
    flagged = 0
    for i, s in enumerate(sents):
        keys = [w for w in words(s) if (w[0].isdigit() or (len(w) >= 5 and w.lower() not in STOP))]
        keys = list(dict.fromkeys(keys))
        if len(keys) < 3:
            continue
        miss = [w for w in keys if not (stem(w) in appstems or w.lower() in applow)]
        cov = 1 - len(miss) / len(keys)
        if cov < thr:
            flagged += 1
            print(f'[{cov:.0%}] ' + (f'#{len(s)}ch: ' if os.environ.get('NOTEXT') else s[:220]+'\n      ') + f'missing: {", ".join(miss)}')
    nums = sorted(set(re.findall(r'(?<![\w.])\d+(?:\.\d+)?(?![\w.])', raw)), key=float)
    appnums = set(re.findall(r'\d+(?:\.\d+)?', app))
    lost = [n for n in nums if n not in appnums]
    print(f'\n{flagged} of {len(sents)} sentences below {thr:.0%}. Source numbers absent from app: {lost}')

if __name__ == '__main__':
    main()
