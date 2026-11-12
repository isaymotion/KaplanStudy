# Registers ch33-5 and ch33-6 (release 81.0.0). Run from kaplanstudy after both builds and patch_updates.js.
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
E1={'id':'ch33-5','number':'33.5','title':'Psychoneuroendocrinology','short':'Psychoneuroendocrinology',
 'summary':'Hormone secretion and classes (Tables 33-6 and 33-7), developmental effects and endocrine assessment; the adrenal stress axis in depression, Cushing syndrome and Addison disease; gonadal steroids, testosterone and DHEA; estrogen, premenstrual dysphoric disorder and menopause; thyroid, growth hormone, prolactin, melatonin, oxytocin and insulin, with updates on estrogen and dementia, testosterone for women, the dexamethasone suppression test and intranasal insulin.'}
E2={'id':'ch33-6','number':'33.6','title':'Immune System and Central Nervous System Interactions','short':'Immune system and the CNS',
 'summary':'What the immune system does, conditioned immunosuppression, stress and immunity, and cytokine-driven sickness behavior; immune findings in depression, bipolar disorder, schizophrenia, autism, Alzheimer disease, HIV infection, multiple sclerosis and related disorders; and how antidepressants and psychosocial interventions affect immunity, with updates on anti-inflammatory trials, complement C4, vaccines and autism, and ME/CFS.'}
def ent(e): return "  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(e['id'],e['number'],e['title'],e['short'],e['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+ent(E1)+",\n"+ent(E2)+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch33-4/learning.js',\n"; assert a in s
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ['ch33-5','ch33-6'] for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '80.0.0'","PREFIX + '81.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '80.0.0'","version: '81.0.0'"))
def readme(s):
    s=s.replace("Version 80.0.0","Version 81.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 33.4 |")][0]+"\n"
    return s.replace(a,a+"| 33.5 | %s | 9 | 132 | 113 |\n"%E1['title']+"| 33.6 | %s | 7 | 96 | 87 |\n"%E2['title'])
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch33-4']","'ch33-4', 'ch33-5', 'ch33-6']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch33-4']","'ch33-4','ch33-5','ch33-6']",1))
rw('/home/claude/tools/srcs-check.js',lambda s:s.replace("'ch33-4']","'ch33-4','ch33-5','ch33-6']",1))
rw('/home/claude/tools/fulltest.py',lambda s:s.replace("'ch33-4']","'ch33-4', 'ch33-5', 'ch33-6']",1))
def src(s):
    a="  KS.sourceLinks = [\n"; assert a in s
    L=[("dexamethasone suppression test: an overview","APA Task Force on Laboratory Tests in Psychiatry, The dexamethasone suppression test, Am J Psychiatry 1987","https://psychiatryonline.org/doi/10.1176/ajp.144.10.1253"),
    ("Global Consensus Position Statement on the Use of Testosterone","Davis SR et al., Global Consensus Position Statement on the Use of Testosterone Therapy for Women, 2019 (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC6821450"),
    ("Estrogen plus progestin and the incidence of dementia","Shumaker SA et al., WHIMS: estrogen plus progestin and dementia, JAMA 2003 (PubMed)","https://pubmed.ncbi.nlm.nih.gov/12771112/"),
    ("Hormone Therapy in Postmenopausal Persons","USPSTF: Hormone Therapy in Postmenopausal Persons, Primary Prevention of Chronic Conditions (November 2022)","https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/menopausal-hormone-therapy-preventive-medication"),
    ("Hormone therapy safety (FDA labeling","HHS Office on Women's Health: Hormone therapy safety (FDA labeling changes, 2025 to 2026)","https://womenshealth.gov/menopause/hormone-therapy-safety"),
    ("Intranasal Insulin for the Treatment of Mild Cognitive Impairment","Craft S et al., Intranasal insulin for MCI and Alzheimer disease dementia (SNIFF), JAMA Neurol 2020","https://doi.org/10.1001/jamaneurol.2020.1840"),
    ("infliximab for treatment-resistant depression","Raison CL et al., Infliximab for treatment-resistant depression, JAMA Psychiatry 2013","https://doi.org/10.1001/2013.jamapsychiatry.4"),
    ("Schizophrenia risk from complex variation of complement component 4","NIMH, 2016: Schizophrenia's strongest known genetic risk deconstructed (Sekar et al., Nature)","https://www.nimh.nih.gov/news/science-updates/2016/schizophrenias-strongest-known-genetic-risk-deconstructed"),
    ("(BeneMin)","Deakin B et al., BeneMin: minocycline for negative symptoms in recent-onset psychosis, Lancet Psychiatry 2018","https://doi.org/10.1016/S2215-0366(18)30345-6"),
    ("Measles, Mumps, Rubella Vaccination and Autism","Hviid A et al., MMR vaccination and autism: a nationwide cohort study, Ann Intern Med 2019","https://doi.org/10.7326/M18-2101"),
    ("Global Advisory Committee on Vaccine Safety on vaccines and autism","WHO, December 11, 2025: expert group reaffirms no link between vaccines and autism","https://www.who.int/news/item/11-12-2025-who-expert-group-s-new-analysis-reaffirms-there-is-no-link-between-vaccines-and-autism"),
    ("CDC webpage on vaccines and autism changed","NPR, November 20, 2025: CDC webpage on vaccines and autism changed","https://www.npr.org/sections/shots-health-news/2025/11/20/nx-s1-5615040/cdc-rfk-childhood-vaccines-autism"),
    ("Alzforum, Therapeutics: Naproxen","Alzforum Therapeutics: Naproxen (ADAPT and INTREPAD results)","https://alzforum.org/node/1940"),
    ("INTREPAD: A randomized trial of naproxen","Meyer PF et al., INTREPAD: naproxen in presymptomatic Alzheimer disease, Neurology 2019","https://doi.org/10.1212/WNL.0000000000007232"),
    ("Beyond Myalgic Encephalomyelitis","Institute of Medicine, Beyond Myalgic Encephalomyelitis/Chronic Fatigue Syndrome: Redefining an Illness (2015)","https://www.nationalacademies.org/publications/19012")]
    import json
    add="    /* Sections 33.5 and 33.6, November 2026 */\n"+''.join("    { m: %s, label: %s, url: %s },\n"%(json.dumps(m),json.dumps(l),json.dumps(u)) for m,l,u in L)
    return s.replace(a,a+add)
rw('data/sources.js',src)
print('ok')
