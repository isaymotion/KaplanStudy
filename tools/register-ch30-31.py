# Registers ch30 and ch31 (release 75.0.0). Run from /home/claude/kaplanstudy.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
def man(s):
    a=FILES+"\n  }\n];"
    assert s.count(a)==1
    return s.replace(a,FILES+"""
  },
  { id: 'ch30', number: '30', title: 'Community Psychiatry', short: 'Community psychiatry',
    summary: 'Public health and prevention (levels and Institute of Medicine categories), access to care, public agencies and the workforce, evidence-based adult and child community programs, the psychiatrist in multidisciplinary teams, systems of care and assertive community treatment, and the chronic illness care model, with 988, NCMH 1553, collaborative care and Philippine Mental Health Act updates.',
"""+FILES+"""
  },
  { id: 'ch31', number: '31', title: 'Global and Cultural Issues in Psychiatry', short: 'Global psychiatry',
    summary: 'Worldwide prevalence and burden, the treatment gap, mental health resources by WHO region, program development and its barriers, stigma, mental and physical illness, ethics and international declarations, and international organizations, with current WHO estimates and the Mental Health Atlas 2024.',
"""+FILES+"""
  }
];""")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch29-3/learning.js',\n"
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ['ch30','ch31'] for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    assert a in s
    return s.replace(a,a+add).replace("PREFIX + '74.0.0'","PREFIX + '75.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '74.0.0'","version: '75.0.0'"))
def readme(s):
    s=s.replace("Version 74.0.0","Version 75.0.0")
    a="| 29.3 | Euthanasia and Physician-Assisted Suicide | 3 | 58 | 55 |\n"
    assert a in s
    return s.replace(a,a+"| 30 | Community Psychiatry | 10 | 160 | 174 |\n| 31 | Global and Cultural Issues in Psychiatry | 8 | 121 | 130 |\n")
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch29-1', 'ch29-2', 'ch29-3']","'ch29-1', 'ch29-2', 'ch29-3', 'ch30', 'ch31']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch29-1','ch29-2','ch29-3']","'ch29-1','ch29-2','ch29-3','ch30','ch31']",1))
def src(s):
    a="    /* Chapter 29.2, November 2026 */\n"
    assert a in s; return s.replace(a,open('/tmp/src3031.txt').read()+a)
rw('data/sources.js',src)
terms=json.load(open('/tmp/terms3031.json'))
aliases={"ACT team":"assertive community treatment","universal prevention programs":"universal prevention","indicated interventions":"indicated prevention","selective interventions":"selective prevention","systems of care":"system of care","chronic care model":"chronic illness care model","collaborative care model":"collaborative care","DALYs":"disability-adjusted life year","DALY":"disability-adjusted life year","Mental Health Atlas":"Project Atlas","Mental Health Gap Action Programme":"mhGAP"}
def glos(s):
    a='"Ch 29.2"]\n]);'
    assert s.count(a)==1
    add=',\n'.join('  [%s, %s, %s]'%(json.dumps(t),json.dumps(d,ensure_ascii=False),json.dumps(c)) for t,d,c in terms)
    s=s.replace(a,'"Ch 29.2"],\n'+add+'\n]);')
    b='  "equianalgesic": "equianalgesic dose"\n};'
    assert b in s
    return s.replace(b,'  "equianalgesic": "equianalgesic dose",\n'+',\n'.join('  %s: %s'%(json.dumps(k),json.dumps(v)) for k,v in aliases.items())+'\n};')
rw('data/glossary/g5-chapter-terms.js',glos)
print('ok')
