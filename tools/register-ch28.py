import json,re
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
def man(s):
    a="""    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  }
];"""
    assert s.count(a)==1
    return s.replace(a,"""    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch28', number: 28, title: 'Forensic and Legal Issues', short: 'Forensic psychiatry',
    summary: 'Malpractice and the 4 Ds, negligent prescribing and split treatment, privilege and confidentiality, suicidal and violent patients (Tarasoff), admission procedures, rights to treatment and to refuse it, seclusion and restraint, informed consent, custody, capacity, competence to stand trial, the insanity standards and HIPAA, with corrections to case names and dates and notes on Philippine law.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  }
];""")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch27/learning.js',\n"
    add=''.join("  './data/ch28/%s.js',\n"%f for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '71.0.0'","PREFIX + '72.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '71.0.0'","version: '72.0.0'"))
def readme(s):
    s=s.replace("Version 71.0.0","Version 72.0.0")
    a="| 27 | Ethics and Professionalism | 11 | 168 | 173 |\n"
    assert a in s
    return s.replace(a,a+"| 28 | Forensic and Legal Issues | 19 | 306 | 229 |\n")
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch27'","'ch27', 'ch28'",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch27'","'ch27','ch28'",1))
def src(s):
    a="    /* Chapters 26 and 27, November 2026 */\n"
    new=open('/tmp/src28.txt').read()
    assert a in s; return s.replace(a,new+a)
rw('data/sources.js',src)
terms=json.load(open('/tmp/terms28.json'))
aliases={"malpractice":"medical malpractice","four Ds":"4 Ds","intentional torts":"intentional tort","writ of habeas corpus":"habeas corpus","right-wrong test":"M'Naghten rule","product rule":"Durham rule","model penal code":"American Law Institute test","irresistible impulse test":"irresistible impulse","emancipated minors":"emancipated minor","Tarasoff duty":"duty to protect"}
def glos(s):
    a='"Ch 27"]\n]);'
    assert s.count(a)==1
    add=',\n'.join('  [%s, %s, "Ch 28"]'%(json.dumps(t),json.dumps(d,ensure_ascii=False)) for t,d in terms)
    s=s.replace(a,'"Ch 27"],\n'+add+'\n]);')
    b='  "ethical dilemmas": "ethical dilemma"\n};'
    assert b in s
    return s.replace(b,'  "ethical dilemmas": "ethical dilemma",\n'+',\n'.join('  %s: %s'%(json.dumps(k),json.dumps(v)) for k,v in aliases.items())+'\n};')
rw('data/glossary/g5-chapter-terms.js',glos)
print('ok')
