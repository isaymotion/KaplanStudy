# Registers ch33-9 and ch33-10 (release 83.0.0). Run from kaplanstudy after both builds and patch_updates.js.
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
E1={'id':'ch33-9','number':'33.9','title':'Applied Electrophysiology','short':'Applied electrophysiology',
 'summary':'Recording the EEG: the 10-20 system and activation procedures; the four waking waveforms and the sleep EEG; warning signs of a hidden medical cause (Table 33-8); common EEG abnormalities; EEG effects of medications and drugs; EEG changes in medical and psychiatric disorders; quantitative EEG and evoked potentials, with updates on QEEG for diagnosis and on clozapine and the EEG.'}
E2={'id':'ch33-10','number':'33.10','title':'Chronobiology','short':'Chronobiology',
 'summary':'Circadian rhythms and the suprachiasmatic nucleus; light and entrainment; how the clock and sleep pressure regulate sleep; advanced and delayed sleep phase disorders and their genetics; seasonality and melatonin; seasonality in humans; aging and the clock; circadian rhythms and drug treatment, with updates on the 2017 Nobel Prize and current names and genetics of the phase disorders.'}
def ent(e): return "  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(e['id'],e['number'],e['title'],e['short'],e['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+ent(E1)+",\n"+ent(E2)+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch33-8/learning.js',\n"; assert a in s
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ['ch33-9','ch33-10'] for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '82.0.0'","PREFIX + '83.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '82.0.0'","version: '83.0.0'"))
def readme(s):
    s=s.replace("Version 82.0.0","Version 83.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 33.8 |")][0]+"\n"
    return s.replace(a,a+"| 33.9 | %s | %s | %s | %s |\n"%(E1['title'],*open('/tmp/ch339-counts').read().split())+"| 33.10 | %s | %s | %s | %s |\n"%(E2['title'],*open('/tmp/ch3310-counts').read().split()))
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch33-8']","'ch33-8', 'ch33-9', 'ch33-10']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch33-8']","'ch33-8','ch33-9','ch33-10']",1))
rw('/home/claude/tools/srcs-check.js',lambda s:s.replace("'ch33-8']","'ch33-8','ch33-9','ch33-10']",1))
rw('/home/claude/tools/fulltest.py',lambda s:s.replace("'ch33-8']","'ch33-8', 'ch33-9', 'ch33-10']",1))
def src(s):
    a="  KS.sourceLinks = [\n"; assert a in s
    L=[("Assessment of digital EEG, quantitative EEG, and EEG brain mapping","Nuwer M, Assessment of digital EEG, quantitative EEG, and EEG brain mapping (AAN and ACNS), Neurology 1997","https://scilit.com/publications/78fe0978b62969440f5e13201801fecb"),
    ("How should child psychologists and psychiatrists interpret FDA device approval","Arns M et al., Editorial perspective: how should child psychologists and psychiatrists interpret FDA device approval? Caveat emptor, J Child Psychol Psychiatry 2016 (eScholarship)","https://escholarship.org/uc/item/8bp9v2q5"),
    ("Quantitative EEG in attention-deficit/hyperactivity disorder: a companion payment policy review","Nuwer MR, Buchhalter J, Shepard KM, Quantitative EEG in ADHD: a companion payment policy review, Neurol Clin Pract 2016 (PubMed)","https://pubmed.ncbi.nlm.nih.gov/28058208/"),
    ("EEG changes in patients on antipsychotic therapy: a systematic review","Jackson A, Seneviratne U, EEG changes in patients on antipsychotic therapy: a systematic review, Epilepsy Behav 2019","https://research.monash.edu/en/publications/eeg-changes-in-patients-on-antipsychotic-therapy-a-systematic-rev/"),
    ("Prevalence and pattern of electroencephalographic changes associated with clozapine","Roub M et al., EEG changes with clozapine treatment: a cross-sectional study, Middle East Curr Psychiatry 2023","https://doi.org/10.1186/s43045-023-00311-7"),
    ("The Nobel Prize in Physiology or Medicine 2017 to Jeffrey C. Hall","Karolinska Institutet, The Nobel Prize in Physiology or Medicine 2017 (Hall, Rosbash and Young)","https://news.ki.se/the-nobel-prize-in-physiology-or-medicine-2017-to-jeffrey-c-hall-michael-rosbash-and-michael-w-young"),
    ("International Classification of Sleep Disorders, 3rd ed., text revision","AASM, ICSD-3-TR (2023): table of contents with the circadian rhythm sleep-wake disorders","https://aasm.org/wp-content/uploads/2026/03/ICSD-3-TR_table-of-contents.pdf"),
    ("Sleep classification according to AASM and Rechtschaffen","Sleep classification according to AASM and Rechtschaffen and Kales: effects on sleep scoring parameters, Sleep 2009 (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC2635577"),
    ("An Introductory Text and Atlas of Normal and Abnormal Findings","Electroencephalography (EEG): An Introductory Text and Atlas, Benign Variants in the EEG (NCBI Bookshelf)","https://ncbi.nlm.nih.gov/books/n/elec/pt5"),
    ("Mutation of the human circadian clock gene CRY1 in familial delayed sleep phase disorder","Patke A et al., Mutation of the human circadian clock gene CRY1 in familial delayed sleep phase disorder, Cell 2017 (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC5479574/")]
    import json
    add="    /* Sections 33.9 and 33.10, November 2026 */\n"+''.join("    { m: %s, label: %s, url: %s },\n"%(json.dumps(m),json.dumps(l),json.dumps(u)) for m,l,u in L)
    return s.replace(a,a+add)
rw('data/sources.js',src)
print('ok')
