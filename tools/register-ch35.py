# Registers ch35 (Chapter 35, A Brief History of Psychiatry; the last chapter); release 90.0.0. Run from kaplanstudy after the build and patch_updates.js.
# Sources for the update boxes were added to data/sources.js by hand in this release.
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
E={'id':'ch35','number':'35','title':'A Brief History of Psychiatry','short':'History of psychiatry',
 'summary':'From ancient India and Greece through Bethlem, moral treatment, the first descriptions of psychosis, Kraepelin, Bleuler and Freud, chance drug discoveries, deinstitutionalization and the road to DSM-III, plus the people and events of Table 35-1, with corrections on Pinel and Pussin, Utica and Dix, Falret, phrenology and Menninger, and updates on the Rosenhan study and ICD-11.',
 'counts':(12,219,272)}
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    e="  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(E['id'],E['number'],E['title'],E['short'],E['summary'],FILES)
    return s.replace(a,FILES+"\n  },\n"+e+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch34-10/learning.js',\n"; assert a in s
    add=''.join("  './data/ch35/%s.js',\n"%f for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '89.0.0'","PREFIX + '90.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '89.0.0'","version: '90.0.0'"))
def readme(s):
    s=s.replace("Version 89.0.0","Version 90.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 34.4e |")][0]+"\n"
    return s.replace(a,a+"| %s | %s | %d | %d | %d |\n"%(E['number'],E['title'],*E['counts']))
rw('README.md',readme)
for p in ('/home/claude/fulltest.py','/home/claude/tools/fulltest.py'):
    rw(p,lambda s:s.replace("'ch34-9', 'ch34-10']","'ch34-9', 'ch34-10', 'ch35']",1))
for p in ('/tmp/srcs4.js','/home/claude/tools/srcs-check.js'):
    rw(p,lambda s:s.replace("'ch34-9','ch34-10']","'ch34-9','ch34-10','ch35']",1))
print('ok')
