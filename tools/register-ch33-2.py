# Registers ch33-2 (release 79.0.0). Run from kaplanstudy after build_ch33-2.js and patch_updates.js.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
def man(s):
    a=FILES+"\n  }\n];"
    assert s.count(a)==1
    return s.replace(a,FILES+"""
  },
  { id: 'ch33-2', number: '33.2', title: 'Neural Development and Neurogenesis', short: 'Neural development',
    summary: 'Neurulation and regional differentiation, proliferative zones, radial and tangential migration, developmental cell death, neural patterning of the spinal cord and forebrain, neuronal specification and miRNAs, extracellular growth factors (Table 33-1), migration and process outgrowth, the neurodevelopmental basis of schizophrenia and autism, and adult neurogenesis, with updates on folic acid, schizophrenia candidate genes, DSM-5 autism, current autism prevalence, early brain overgrowth and the adult neurogenesis debate.',
"""+FILES+"""
  }
];""")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch33-1/learning.js',\n"
    add=''.join("  './data/ch33-2/%s.js',\n"%f for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    assert a in s
    return s.replace(a,a+add).replace("PREFIX + '78.0.0'","PREFIX + '79.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '78.0.0'","version: '79.0.0'"))
def readme(s):
    s=s.replace("Version 78.0.0","Version 79.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 33.1 |")][0]+"\n"
    assert a in s
    return s.replace(a,a+"| 33.2 | Neural Development and Neurogenesis | %s | %s | %s |\n"%tuple(open('/tmp/ch332-counts').read().split()))
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch33-1']","'ch33-1', 'ch33-2']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch33-1']","'ch33-1','ch33-2']",1))
print('ok')
