# Registers ch33-7 and ch33-8 (release 82.0.0). Run from kaplanstudy after both builds and patch_updates.js.
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
E1={'id':'ch33-7','number':'33.7','title':'Neurogenetics I: Methods','short':'Neurogenetics methods',
 'summary':'Family, twin and adoption studies; recombination, linkage, LOD scores and linkage disequilibrium; SSLP, SNP and CNV markers; pedigree, sib-pair and association mapping and genome-wide significance; categorical and continuous phenotypes, endophenotypes and animal models, with a correction on the r2 and D-prime measures of linkage disequilibrium and the genome-wide significance threshold used today.'}
E2={'id':'ch33-8','number':'33.8','title':'Neurogenetics II: Specific Disorders','short':'Neurogenetics of disorders',
 'summary':'The genetics of Alzheimer disease (APP, presenilins, APOE e4, GAB2), autism (heritability, chromosomal aberrations, CNVs, de novo mutations and synaptic, migration and excitatory/inhibitory pathways), bipolar disorder (early linkage reports, genome screens, chromosome 18, study power) and schizophrenia (candidate genes, mouse models), with updates from the large genome-wide and sequencing studies of 2019 to 2025.'}
def ent(e): return "  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(e['id'],e['number'],e['title'],e['short'],e['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+ent(E1)+",\n"+ent(E2)+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch33-6/learning.js',\n"; assert a in s
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ['ch33-7','ch33-8'] for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '81.0.0'","PREFIX + '82.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '81.0.0'","version: '82.0.0'"))
def readme(s):
    s=s.replace("Version 81.0.0","Version 82.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 33.6 |")][0]+"\n"
    return s.replace(a,a+"| 33.7 | %s | %s | %s | %s |\n"%(E1['title'],*open('/tmp/ch337-counts').read().split())+"| 33.8 | %s | %s | %s | %s |\n"%(E2['title'],*open('/tmp/ch338-counts').read().split()))
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch33-6']","'ch33-6', 'ch33-7', 'ch33-8']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch33-6']","'ch33-6','ch33-7','ch33-8']",1))
rw('/home/claude/tools/srcs-check.js',lambda s:s.replace("'ch33-6']","'ch33-6','ch33-7','ch33-8']",1))
rw('/home/claude/tools/fulltest.py',lambda s:s.replace("'ch33-6']","'ch33-6', 'ch33-7', 'ch33-8']",1))
def src(s):
    a="  KS.sourceLinks = [\n"; assert a in s
    L=[("Mathematical properties of the r2 measure of linkage disequilibrium","VanLiere JM, Rosenberg NA, Mathematical properties of the r2 measure of linkage disequilibrium, Theor Popul Biol 2008 (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC2580747"),
    ("Revisiting the genome-wide significance threshold","Chen Z et al., Revisiting the genome-wide significance threshold for common variant GWAS, G3 2021 (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC8022962/"),
    ("Estimation of significance thresholds for genomewide association scans","Dudbridge F, Gusnanto A, Estimation of significance thresholds for genomewide association scans, Genet Epidemiol 2008 (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC2573032"),
    ("New insights into the genetic etiology of Alzheimer","Bellenguez C et al., New insights into the genetic etiology of Alzheimer's disease and related dementias, Nat Genet 2022","https://doi.org/10.1038/s41588-022-01024-z"),
    ("Familial Recurrence of Autism","Ozonoff S et al., Familial Recurrence of Autism: Updates From the Baby Siblings Research Consortium, Pediatrics 2024 (UC Davis summary)","https://health.ucdavis.edu/news/headlines/large-study-confirms-siblings-of-autistic-children-have-20-chance-of-autism-/2024/07"),
    ("autism in a 5-country cohort","NICHD: Bai D et al., genetic and environmental factors in autism, 5-country cohort, JAMA Psychiatry 2019","https://www.nichd.nih.gov/newsroom/news/080119-autism"),
    ("Rare coding variation provides insight into the genetic architecture","Fu JM et al., Rare coding variation and the genetic architecture of autism, Nat Genet 2022","https://doi.org/10.1038/s41588-022-01104-0"),
    ("Re-evaluation of the linkage relationship between chromosome 11p","Kelsoe JR et al., Re-evaluation of chromosome 11p linkage to bipolar disorder in the Old Order Amish, Nature 1989","https://doi.org/10.1038/342238a0"),
    ("Genomics yields biological and phenotypic insights into bipolar","O'Connell KS et al. (PGC), Genomics yields biological and phenotypic insights into bipolar disorder, Nature 2025","https://doi.org/10.1038/s41586-024-08468-9"),
    ("Rare coding variants in 10 genes confer substantial risk","NIMH 2022: Rare genetic variation in 10 genes substantially raises the risk for schizophrenia (SCHEMA, Nature)","https://www.nimh.nih.gov/news/research-highlights/2022/rare-genetic-variation-in-10-genes-substantially-raise-the-risk-for-schizophrenia")]
    import json
    add="    /* Sections 33.7 and 33.8, November 2026 */\n"+''.join("    { m: %s, label: %s, url: %s },\n"%(json.dumps(m),json.dumps(l),json.dumps(u)) for m,l,u in L)
    return s.replace(a,a+add)
rw('data/sources.js',src)
print('ok')
