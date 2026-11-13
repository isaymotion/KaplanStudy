# Registers ch34-4 (34.3a) and ch34-5 (34.3b), section 34.3 Contributions from the Sociocultural Sciences; release 86.0.0. Run from kaplanstudy after the build and patch_updates.js.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
ES=[{'id':'ch34-4','number':'34.3a','title':'Sociocultural Sciences I: Sociobiology and Ethology','short':'Sociobiology and ethology',
 'summary':'Behavior through evolution and animal study: sociobiology and fitness, identical twins reared apart, the ethology of Lorenz, Tinbergen and von Frisch, primate isolation and separation, experimental disorders such as learned helplessness, and sensory deprivation, with updates on the 1973 Nobel Prize, fifty years of twin studies, the executive monkey study and the Korean War origin of brainwashing research.',
 'counts':(7,132,111)},
 {'id':'ch34-5','number':'34.3b','title':'Sociocultural Sciences II: Transcultural Psychiatry and Culture-Bound Syndromes','short':'Transcultural psychiatry',
 'summary':'Culture, race and ethnicity in psychiatry: the cultural formulation, migration and acculturative stress, assessing immigrants and refugees, US ethnic differences and disparities in care, cross-cultural research, and amok, ataque de nervios, possession syndrome and shenjing shuairuo, with updates on the Cultural Formulation Interview, cultural concepts of distress, ICD-11 possession trance disorder and neurasthenia.',
 'counts':(13,223,217)}]
def ent(E): return "  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(E['id'],E['number'],E['title'],E['short'],E['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+ent(ES[0])+",\n"+ent(ES[1])+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch34-3/learning.js',\n"; assert a in s
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ('ch34-4','ch34-5') for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '85.0.0'","PREFIX + '86.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '85.0.0'","version: '86.0.0'"))
def readme(s):
    s=s.replace("Version 85.0.0","Version 86.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 34.2 |")][0]+"\n"
    rows=''.join("| %s | %s | %d | %d | %d |\n"%(E['number'],E['title'],*E['counts']) for E in ES)
    return s.replace(a,a+rows)
rw('README.md',readme)
for p in ('/home/claude/fulltest.py','/home/claude/tools/fulltest.py'):
    rw(p,lambda s:s.replace("'ch34-2', 'ch34-3']","'ch34-2', 'ch34-3', 'ch34-4', 'ch34-5']",1))
for p in ('/tmp/srcs4.js','/home/claude/tools/srcs-check.js'):
    rw(p,lambda s:s.replace("'ch34-2','ch34-3']","'ch34-2','ch34-3','ch34-4','ch34-5']",1))
def src(s):
    a="  KS.sourceLinks = [\n"; assert a in s
    L=[("The Nobel Prize in Physiology or Medicine 1973","NobelPrize.org: The Nobel Prize in Physiology or Medicine 1973 (von Frisch, Lorenz, Tinbergen)","https://www.nobelprize.org/prizes/medicine/1973/summary/"),
    ("Meta-analysis of the heritability of human traits based on fifty years of twin studies","Polderman TJC et al., Meta-analysis of the heritability of human traits based on fifty years of twin studies, Nat Genet 2015;47:702-709","https://www.nature.com/articles/ng.3285"),
    ("Effects of coping behavior with and without a feedback signal","Weiss JM, Effects of coping behavior with and without a feedback signal on stress pathology in rats, J Comp Physiol Psychol 1971;77:22-30","https://scilit.com/publications/94274ff70d775535f9c8a9da8cf2c225"),
    ("Wellcome Collection: the isolated mind","Wellcome Collection: the isolated mind (Hebb, McGill and sensory deprivation research)","https://wellcomecollection.org/articles/W1bwkyYAACUAqy10"),
    ("APA: Cultural Formulation Interview","American Psychiatric Association: DSM-5-TR online assessment measures, including the Cultural Formulation Interview and its supplementary modules","https://www.psychiatry.org/psychiatrists/practice/dsm/educational-resources/assessment-measures"),
    ("Harvard Medical School: National Comorbidity Survey","Harvard Medical School: National Comorbidity Survey (NCS, NCS-2, NCS-R, NCS-A)","https://www.hcp.med.harvard.edu/ncs/"),
    ("DSM-5 on Culture: A Significant Advance","Foundation for Psychocultural Research: DSM-5 on Culture, A Significant Advance (Lewis-Fernandez on the glossary and the CFI)","https://thefpr.org/?p=3458"),
    ("possession trance disorder in ICD-10, ICD-11 and DSM-5","Pietkiewicz IJ, Klosinska U, Tomalski R, A case of possession trance disorder with a 3-year follow-up, Front Psychiatry 2022 (PMC; table of ICD-10, ICD-11 and DSM-5 categories)","https://pmc.ncbi.nlm.nih.gov/articles/PMC9199574/"),
    ("6C20 Bodily distress disorder","WHO ICD-11: 6C20 Bodily distress disorder","https://icd.who.int/browse/2024-01/mms/en#767044268")]
    add="    /* Section 34.3, November 2026 */\n"+''.join("    { m: %s, label: %s, url: %s },\n"%(json.dumps(m),json.dumps(l),json.dumps(u)) for m,l,u in L)
    return s.replace(a,a+add)
rw('data/sources.js',src)
print('ok')
