# Registers ch34-3 (section 34.2, Normality and Mental Health; release 85.0.0). Run from kaplanstudy after the build and patch_updates.js.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
E={'id':'ch34-3','number':'34.2','title':'Normality and Mental Health','short':'Normality and mental health',
 'summary':'What mental health is and how it differs from the absence of illness, through six models: above normal, maturity and the adult development tasks after Erikson, positive emotions, socioemotional intelligence, subjective well-being, and resilience with the healthy involuntary coping mechanisms, with updates on the history of autism, brain reward research, the limbic system, von Economo and mirror neurons, and the heritability of well-being.'}
ENT="  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(E['id'],E['number'],E['title'],E['short'],E['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+ENT+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch34-2/learning.js',\n"; assert a in s
    add=''.join("  './data/ch34-3/%s.js',\n"%f for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '84.0.1'","PREFIX + '85.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '84.0.1'","version: '85.0.0'"))
def readme(s):
    s=s.replace("Version 84.0.1","Version 85.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 34.1b |")][0]+"\n"
    return s.replace(a,a+"| 34.2 | %s | %s | %s | %s |\n"%(E['title'],*open('/tmp/ch343-counts').read().split()))
rw('README.md',readme)
for p in ('/home/claude/fulltest.py','/home/claude/tools/fulltest.py'):
    rw(p,lambda s:s.replace("'ch34-1', 'ch34-2']","'ch34-1', 'ch34-2', 'ch34-3']",1))
for p in ('/tmp/srcs4.js','/home/claude/tools/srcs-check.js'):
    rw(p,lambda s:s.replace("'ch34-1','ch34-2']","'ch34-1','ch34-2','ch34-3']",1))
def src(s):
    a="  KS.sourceLinks = [\n"; assert a in s
    L=[("Autistic Disturbances of Affective Contact (1943), by Leo Kanner","Embryo Project Encyclopedia: Autistic Disturbances of Affective Contact (1943), by Leo Kanner","https://embryo.asu.edu/pages/autistic-disturbances-affective-contact-1943-leo-kanner"),
    ("Positive reinforcement produced by electrical stimulation of septal area","Olds J, Milner P, Positive reinforcement produced by electrical stimulation of septal area and other regions of rat brain, J Comp Physiol Psychol 1954;47(6):419-27","https://pubmed.ncbi.nlm.nih.gov/13233369/"),
    ("Your Brain Is Not an Onion With a Tiny Reptile Inside","Cesario J, Johnson DJ, Eisthen HL, Your brain is not an onion with a tiny reptile inside, Curr Dir Psychol Sci 2020;29(3):255-260","https://journals.sagepub.com/doi/10.1177/0963721420917687"),
    ("Von Economo Neurons in the Anterior Insula of the Macaque Monkey","Max Planck Society 2012, on Evrard HC, Forro T, Logothetis NK, Von Economo neurons in the anterior insula of the macaque monkey, Neuron 2012;74(3):482-489","https://www.mpg.de/5808445/von_economo_neurons"),
    ("The mind's mirror","APA Monitor on Psychology 2005: The mind's mirror (the discovery of mirror neurons and evidence in humans)","https://www.apa.org/monitor/oct05/mirror"),
    ("Genetics of Wellbeing and Its Components","Bartels M, Genetics of wellbeing and its components satisfaction with life, happiness, and quality of life: a review and meta-analysis of heritability studies, Behav Genet 2015 (PMC)","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4346667/")]
    add="    /* Section 34.2, November 2026 */\n"+''.join("    { m: %s, label: %s, url: %s },\n"%(json.dumps(m),json.dumps(l),json.dumps(u)) for m,l,u in L)
    return s.replace(a,a+add)
rw('data/sources.js',src)
print('ok')
