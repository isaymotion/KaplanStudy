# Registers ch29-2 (release 74.0.0) between ch29-1 and ch29-3. Run from /home/claude/kaplanstudy.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
def man(s):
    a="  { id: 'ch29-3',"
    assert s.count(a)==1
    return s.replace(a,"""  { id: 'ch29-2', number: '29.2', title: 'Palliative Care', short: 'Palliative care',
    summary: 'Anxiety, depression (Endicott criteria) and delirium in advanced disease, breaking bad news and informed consent, persistent vegetative state versus brain death, the Quinlan case, advance directives and DNR orders, family care and dying at home, pain and the opioid table, end-of-life symptoms, hospice, dying children and spiritual care, with current opioid, Medicare, POLST and Philippine law updates.',
"""+FILES+"""
  },
"""+a)
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch29-1/learning.js',\n"
    add=''.join("  './data/ch29-2/%s.js',\n"%f for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    assert a in s
    return s.replace(a,a+add).replace("PREFIX + '73.0.0'","PREFIX + '74.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '73.0.0'","version: '74.0.0'"))
def readme(s):
    s=s.replace("Version 73.0.0","Version 74.0.0")
    a="| 29.1 | Death, Dying, and Bereavement | 9 | 160 | 154 |\n"
    assert a in s
    return s.replace(a,a+"| 29.2 | Palliative Care | 16 | 248 | 228 |\n")
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch29-1', 'ch29-3']","'ch29-1', 'ch29-2', 'ch29-3']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch29-1','ch29-3']","'ch29-1','ch29-2','ch29-3']",1))
def src(s):
    a="    /* Chapter 29 (29.1 and 29.3), November 2026 */\n"
    assert a in s; return s.replace(a,open('/tmp/src292.txt').read()+a)
rw('data/sources.js',src)
terms=json.load(open('/tmp/terms292.json'))
aliases={"Endicott criteria":"Endicott substitution criteria","vegetative state":"persistent vegetative state","advance directives":"advance directive","living wills":"living will","DNR order":"do-not-resuscitate order","do-not-intubate order":"do-not-resuscitate order","Portable Medical Orders":"POLST","Karen Ann Quinlan":"Quinlan case","palliative medicine":"palliative care","hospice care":"hospice","rescue dose":"breakthrough pain","PCA":"patient-controlled analgesia","equianalgesic":"equianalgesic dose"}
def glos(s):
    a='"Ch 29.3"]\n]);'
    assert s.count(a)==1
    add=',\n'.join('  [%s, %s, %s]'%(json.dumps(t),json.dumps(d,ensure_ascii=False),json.dumps(c)) for t,d,c in terms)
    s=s.replace(a,'"Ch 29.3"],\n'+add+'\n]);')
    b='  "Oregon Death with Dignity Act": "Death with Dignity Act"\n};'
    assert b in s
    return s.replace(b,'  "Oregon Death with Dignity Act": "Death with Dignity Act",\n'+',\n'.join('  %s: %s'%(json.dumps(k),json.dumps(v)) for k,v in aliases.items())+'\n};')
rw('data/glossary/g5-chapter-terms.js',glos)
print('ok')
