# Registers ch32-1 (release 76.0.0). Run from /home/claude/kaplanstudy.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
def man(s):
    a=FILES+"\n  }\n];"
    assert s.count(a)==1
    return s.replace(a,FILES+"""
  },
  { id: 'ch32-1', number: '32.1', title: 'Infant, Child, and Adolescent Development', short: 'Child and adolescent development',
    summary: 'Prenatal development and exposures, infant reflexes and milestones, language and Piaget, temperament, attachment and Mahler, the toddler, preschool and school years, family factors and divorce, and adolescence (stages, maturation, sexuality, substances, violence and exploitation), with 2022 milestone checklists, DSM-5 attachment disorders and Philippine child-protection law updates.',
"""+FILES+"""
  }
];""")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch31/learning.js',\n"
    add=''.join("  './data/ch32-1/%s.js',\n"%f for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    assert a in s
    return s.replace(a,a+add).replace("PREFIX + '75.0.0'","PREFIX + '76.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '75.0.0'","version: '76.0.0'"))
def readme(s):
    s=s.replace("Version 75.0.0","Version 76.0.0")
    a="| 31 | Global and Cultural Issues in Psychiatry | 8 | 121 | 130 |\n"
    assert a in s
    return s.replace(a,a+"| 32.1 | Infant, Child, and Adolescent Development | 22 | 382 | 441 |\n")
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch30', 'ch31']","'ch30', 'ch31', 'ch32-1']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch30','ch31']","'ch30','ch31','ch32-1']",1))
terms=json.load(open('/tmp/terms321.json'))
aliases={"Tanner stages":"sexual maturity rating","Tanner stage":"sexual maturity rating","good-enough mothering":"good-enough mother","transitional objects":"transitional object","imaginary companions":"imaginary companion","DSED":"disinhibited social engagement disorder","synapse pruning":"synaptic pruning","startle reflex":"Moro reflex"}
def glos(s):
    a='"Ch 31"]\n]);'
    assert s.count(a)==1
    add=',\n'.join('  [%s, %s, %s]'%(json.dumps(t),json.dumps(d,ensure_ascii=False),json.dumps(c)) for t,d,c in terms)
    s=s.replace(a,'"Ch 31"],\n'+add+'\n]);')
    b='  "Mental Health Gap Action Programme": "mhGAP"\n};'
    assert b in s
    return s.replace(b,'  "Mental Health Gap Action Programme": "mhGAP",\n'+',\n'.join('  %s: %s'%(json.dumps(k),json.dumps(v)) for k,v in aliases.items())+'\n};')
rw('data/glossary/g5-chapter-terms.js',glos)
print('ok')
