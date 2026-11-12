# Registers ch32-2 and ch32-3 (release 77.0.0) and refreshes the ch32-1 README row. Run from kaplanstudy.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
def man(s):
    a=FILES+"\n  }\n];"
    assert s.count(a)==1
    return s.replace(a,FILES+"""
  },
  { id: 'ch32-2', number: '32.2', title: 'Adulthood', short: 'Adulthood',
    summary: 'Young and middle adulthood: developmental tasks, work, friendship, marriage (interracial and same-sex) and couples therapy, parenthood and adoption, midlife theories (Erikson, Vaillant, Colarusso and Nemiroff), the climacterium, midlife transition and crisis, the empty nest, divorce and custody, and adult maturity, with updates on US marriage law, Philippine divorce law and Tan-Andal v. Andal.',
"""+FILES+"""
  },
  { id: 'ch32-3', number: '32.3', title: 'Old Age', short: 'Old age',
    summary: 'Late adulthood: developmental tasks, demographics and longevity, biologic changes of aging by system, life expectancy by sex and race, exercise and diet, theories of aging and personality, ageism, chronic conditions, transference and countertransference, retirement, sexuality and long-term care, with current US figures, Medicare coverage and Philippine senior-citizen law.',
"""+FILES+"""
  }
];""")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch32-1/learning.js',\n"
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ['ch32-2','ch32-3'] for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    assert a in s
    return s.replace(a,a+add).replace("PREFIX + '76.0.0'","PREFIX + '77.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '76.0.0'","version: '77.0.0'"))
def readme(s):
    s=s.replace("Version 76.0.0","Version 77.0.0")
    a="| 32.1 | Infant, Child, and Adolescent Development | 22 | 382 | 441 |\n"
    assert a in s
    return s.replace(a,"| 32.1 | Infant, Child, and Adolescent Development | 23 | 395 | 450 |\n| 32.2 | Adulthood | 9 | 160 | 197 |\n| 32.3 | Old Age | 6 | 118 | 159 |\n")
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch31', 'ch32-1']","'ch31', 'ch32-1', 'ch32-2', 'ch32-3']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch31','ch32-1']","'ch31','ch32-1','ch32-2','ch32-3']",1))
terms=json.load(open('/tmp/terms3223.json'))
aliases={"empty nest":"empty-nest syndrome","empty-nest":"empty-nest syndrome","midlife crises":"midlife crisis","generativity":"generativity versus stagnation","ego integrity":"integrity versus despair"}
def glos(s):
    a='"Ch 32.1"]\n]);'
    assert s.count(a)==1
    add=',\n'.join('  [%s, %s, %s]'%(json.dumps(t),json.dumps(d,ensure_ascii=False),json.dumps(c)) for t,d,c in terms)
    s=s.replace(a,'"Ch 32.1"],\n'+add+'\n]);')
    b='  "startle reflex": "Moro reflex"\n};'
    assert b in s
    return s.replace(b,'  "startle reflex": "Moro reflex",\n'+',\n'.join('  %s: %s'%(json.dumps(k),json.dumps(v)) for k,v in aliases.items())+'\n};')
rw('data/glossary/g5-chapter-terms.js',glos)
print('ok')
