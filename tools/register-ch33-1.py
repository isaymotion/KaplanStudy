# Registers ch33-1 (release 78.0.0). Run from kaplanstudy after build_ch33-1.js and patch_updates.js.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
def man(s):
    a=FILES+"\n  }\n];"
    assert s.count(a)==1
    return s.replace(a,FILES+"""
  },
  { id: 'ch33-1', number: '33.1', title: 'The Human Brain and Functional Neuroanatomy', short: 'Brain and neuroanatomy',
    summary: 'Chapter 33 opening: psychiatry and the human brain, endophenotypes, genes, environment and circuits, lessons from neurology; brain organization; somatosensory, visual, auditory, olfactory, taste and autonomic systems and their development; motor systems (basal ganglia, cerebellum, motor cortex); localization; language and aphasias; arousal, attention and memory; emotion, the limbic system, fear and aggression, frontal lobes; and neural development, with updates on DSM-5-TR and ICD-11, RDoC, gene counts, schizophrenia genetics, adult neurogenesis and corrections on localization and Huntington disease.',
"""+FILES+"""
  }
];""")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch32-3/learning.js',\n"
    add=''.join("  './data/ch33-1/%s.js',\n"%f for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    assert a in s
    return s.replace(a,a+add).replace("PREFIX + '77.0.0'","PREFIX + '78.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '77.0.0'","version: '78.0.0'"))
def readme(s):
    s=s.replace("Version 77.0.0","Version 78.0.0")
    a="| 32.3 | Old Age | 6 | 118 | 159 |\n"
    assert a in s
    return s.replace(a,a+"| 33.1 | The Human Brain and Functional Neuroanatomy | %s | %s | %s |\n"%tuple(open('/tmp/ch331-counts').read().split()))
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch32-3']","'ch32-3', 'ch33-1']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch32-3']","'ch32-3','ch33-1']",1))
print('ok')
