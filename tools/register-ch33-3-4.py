# Registers ch33-3 and ch33-4 (release 80.0.0). Run from kaplanstudy after both builds and patch_updates.js.
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
E1={'id':'ch33-3','number':'33.3','title':'Neurochemistry I: Monoamines and Amino Acid Transmitters','short':'Monoamines and amino acids',
 'summary':'Serotonin, dopamine, norepinephrine, histamine and acetylcholine systems; synthesis, storage, degradation and transporters; monoamine receptor subtypes (Table 33-2); glutamate, GABA and glycine with their receptors, plasticity and excitotoxicity; and amino acid transmitters in schizophrenia, anxiety, depression and alcoholism, with updates on memantine, esketamine, D-cycloserine, xanomeline-trospium and pitolisant.'}
E2={'id':'ch33-4','number':'33.4','title':'Neurochemistry II: Neuropeptides and Novel Transmitters','short':'Neuropeptides and novel transmitters',
 'summary':'Neuropeptide biology (Tables 33-3 and 33-4), TRH, CRF and urocortins, oxytocin, vasopressin and neurotensin; nitric oxide and carbon monoxide; the endocannabinoid system (Table 33-5); eicosanoids and neurosteroids, with updates on CRF1 and NK1 antagonist trials, rimonabant, cannabidiol and the neurosteroid drugs for postpartum depression.'}
def ent(e): return "  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(e['id'],e['number'],e['title'],e['short'],e['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+ent(E1)+",\n"+ent(E2)+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch33-2/learning.js',\n"; assert a in s
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ['ch33-3','ch33-4'] for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '79.0.0'","PREFIX + '80.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '79.0.0'","version: '80.0.0'"))
def readme(s):
    s=s.replace("Version 79.0.0","Version 80.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 33.2 |")][0]+"\n"
    c3=open('/tmp/ch333-counts').read().split(); c4=open('/tmp/ch334-counts').read().split()
    return s.replace(a,a+"| 33.3 | %s | %s | %s | %s |\n"%(E1['title'],*c3)+"| 33.4 | %s | %s | %s | %s |\n"%(E2['title'],*c4))
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch33-2']","'ch33-2', 'ch33-3', 'ch33-4']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch33-2']","'ch33-2','ch33-3','ch33-4']",1))
print('ok')
