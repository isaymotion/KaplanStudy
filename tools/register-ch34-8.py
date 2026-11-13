# Registers ch34-8 (34.4c), section 34.4 Theories of Personality and Psychopathology (Erikson part); release 88.0.0. Run from kaplanstudy after the build and patch_updates.js.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
ES=[{'id':'ch34-8','number':'34.4c','title':'Theories of Personality III: Erik Erikson and the Life Cycle','short':'Erikson: the life cycle',
 'summary':'Erik Erikson\\\'s life and psychohistories, the epigenetic principle, the eight psychosocial stages from trust versus mistrust to integrity versus despair with their virtues, the psychopathology tied to each stage and his approach to treatment, with updates on his later honors, Joan Erikson\\\'s ninth stage and current suicide rates by age.',
 'counts':(6,108,147)}]
def ent(E): return "  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(E['id'],E['number'],E['title'],E['short'],E['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+",\n".join(ent(e) for e in ES)+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch34-7/learning.js',\n"; assert a in s
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ('ch34-8',) for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '87.0.0'","PREFIX + '88.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '87.0.0'","version: '88.0.0'"))
def readme(s):
    s=s.replace("Version 87.0.0","Version 88.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 34.4b |")][0]+"\n"
    rows=''.join("| %s | %s | %d | %d | %d |\n"%(E['number'],E['title'],*E['counts']) for E in ES)
    return s.replace(a,a+rows)
rw('README.md',readme)
for p in ('/home/claude/fulltest.py','/home/claude/tools/fulltest.py'):
    rw(p,lambda s:s.replace("'ch34-6', 'ch34-7']","'ch34-6', 'ch34-7', 'ch34-8']",1))
for p in ('/tmp/srcs4.js','/home/claude/tools/srcs-check.js'):
    rw(p,lambda s:s.replace("'ch34-6','ch34-7']","'ch34-6','ch34-7','ch34-8']",1))
def src(s):
    a="  KS.sourceLinks = [\n"; assert a in s
    L=[("Harvard University Department of Psychology: Erik Erikson","Harvard University Department of Psychology: Erik Erikson (1902-1994), Psychosocial Theory of Human Development","https://psychology.fas.harvard.edu/people/erik-erikson"),
    ("The Life Cycle Completed: Extended Version","Erikson EH, Erikson JM, The Life Cycle Completed: Extended Version, with new chapters on the ninth stage of development by Joan M. Erikson (W. W. Norton, 1997)","https://search.worldcat.org/title/The-life-cycle-completed/oclc/35198742"),
    ("CDC, Suicide Data and Statistics","CDC, Suicide Data and Statistics (2023 data from CDC WONDER: highest rates at ages 85 and older; men about four times the rate of women)","https://www.cdc.gov/suicide/facts/data.html")]
    add="    /* Section 34.4 (Erikson), November 2026 */\n"+''.join("    { m: %s, label: %s, url: %s },\n"%(json.dumps(m),json.dumps(l),json.dumps(u)) for m,l,u in L)
    return s.replace(a,a+add)
rw('data/sources.js',src)
print('ok')
