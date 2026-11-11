# Registers ch29-1 and ch29-3 (release 73.0.0). Run from /home/claude/kaplanstudy.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
def man(s):
    a=FILES+"\n  }\n];"
    assert s.count(a)==1
    return s.replace(a,FILES+"""
  },
  { id: 'ch29-1', number: '29.1', title: 'Death, Dying, and Bereavement', short: 'Death and bereavement',
    summary: 'Defining death and brain death, the psychological autopsy, Kübler-Ross stages, how children and adults face death, normal and anticipatory grief, complicated grief and its types, grief versus depression and PTSD, bereavement across the life cycle and grief therapy, with the 2023 brain death guideline and prolonged grief disorder.',
"""+FILES+"""
  },
  { id: 'ch29-3', number: '29.3', title: 'Euthanasia and Physician-Assisted Suicide', short: 'Euthanasia and assisted suicide',
    summary: 'Types of euthanasia, the arguments on each side, positions of professional bodies, Kevorkian, Oregon\\'s law and data, the AMA\\'s eight-step response to a request and the psychiatric view, with corrected dates and current law in the US, Canada, the UK and the Philippines.',
"""+FILES+"""
  }
];""")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch28/learning.js',\n"
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ['ch29-1','ch29-3'] for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    assert a in s
    return s.replace(a,a+add).replace("PREFIX + '72.0.0'","PREFIX + '73.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '72.0.0'","version: '73.0.0'"))
def readme(s):
    s=s.replace("Version 72.0.0","Version 73.0.0")
    a="| 28 | Forensic and Legal Issues | 19 | 306 | 229 |\n"
    assert a in s
    return s.replace(a,a+"| 29.1 | Death, Dying, and Bereavement | 9 | 160 | 154 |\n| 29.3 | Euthanasia and Physician-Assisted Suicide | 3 | 58 | 55 |\n")
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch28']","'ch28', 'ch29-1', 'ch29-3']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch28']","'ch28','ch29-1','ch29-3']",1))
def src(s):
    a="    /* Chapter 28, November 2026 */\n"
    assert a in s; return s.replace(a,open('/tmp/src29.txt').read()+a)
rw('data/sources.js',src)
terms=json.load(open('/tmp/terms29.json'))
aliases={"brain-death":"brain death","Kubler-Ross stages":"Kübler-Ross stages","stages of dying":"Kübler-Ross stages","near-death experiences":"near-death experience","anniversary reactions":"anniversary reaction","medical aid in dying":"physician-assisted suicide","assisted suicide":"physician-assisted suicide","Oregon Death with Dignity Act":"Death with Dignity Act"}
def glos(s):
    a='"Ch 28"]\n]);'
    assert s.count(a)==1
    add=',\n'.join('  [%s, %s, %s]'%(json.dumps(t),json.dumps(d,ensure_ascii=False),json.dumps(c)) for t,d,c in terms)
    s=s.replace(a,'"Ch 28"],\n'+add+'\n]);')
    b='  "Tarasoff duty": "duty to protect"\n};'
    assert b in s
    return s.replace(b,'  "Tarasoff duty": "duty to protect",\n'+',\n'.join('  %s: %s'%(json.dumps(k),json.dumps(v,ensure_ascii=False)) for k,v in aliases.items())+'\n};')
rw('data/glossary/g5-chapter-terms.js',glos)
print('ok')
