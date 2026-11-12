// Release 82.0.0: helper genedesign337, look-alike psych-genetics338, glossary terms, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch33-7",sec,label});
const helper={id:"genedesign337",chapter:"ch33-7",title:"Which genetic study design fits the question?",
 summary:"Pick the study design that section 33.7 matches to a research question, from establishing heritability to mapping genes of large or small effect.",
 caution:"A teaching aid that simplifies. Real studies combine designs, and today's gene mapping in psychiatry relies mostly on very large genome-wide association and sequencing studies.",
 start:"what",
 nodes:{
  what:{q:"What do you want to learn?",options:[
   {label:"Whether a disorder runs in families or is heritable at all",to:"herit",note:"Genetic epidemiology comes before any gene mapping."},
   {label:"Where in the genome a risk gene lies",to:"map",note:"The choice depends on the expected effect size of the gene."},
   {label:"How to define who counts as affected",to:"pheno",note:"Phenotype definition shapes the power of every mapping study."}]},
  herit:{q:"Which comparison?",options:[
   {label:"Disease rates in relatives of patients versus the general population",to:"r:fam",note:"Gives the relative risk, lambda."},
   {label:"Concordance in identical versus fraternal twins",to:"r:twin",note:"Separates genetic from shared environmental influences, with assumptions."},
   {label:"Rates in biological versus adoptive relatives",to:"r:adopt",note:"Separates genes from the rearing environment."}]},
  map:{q:"What kind of gene and sample?",options:[
   {label:"A rare gene of large effect segregating in large multigenerational families",to:"r:ped",note:"High-penetrance variants cosegregate within pedigrees."},
   {label:"Many affected sibling pairs, looking for shared regions",to:"r:asp",note:"Easier to collect than extended families."},
   {label:"Common variants of small effect across a population",to:"r:assoc",note:"Association is more powerful for small effects."}]},
  pheno:{q:"Which approach?",options:[
   {label:"A DSM diagnosis, made reliably",to:"r:cat",note:"Still the mainstay of mapping studies."},
   {label:"A heritable trait that underlies the diagnosis, such as a brain measure",to:"r:endo",note:"Thought to be simpler in cause and easier to map."}]}},
 results:{
  fam:{label:"Family study",dx:"Familial aggregation",line:"Compares the disease rate in relatives of an affected person with the population rate (relative risk, lambda).",points:["Shows that a disorder runs in families.","Cannot by itself separate genes from shared family environment."],link:L("s337-epi","Genetic epidemiology")},
  twin:{label:"Twin study",dx:"Heritability",line:"Higher concordance in MZ than in DZ pairs points to genetic influence.",points:["Assumes MZ and DZ pairs share equally similar environments.","For a purely genetic disorder, DZ concordance would be 25 or 50 percent depending on recessive or dominant inheritance."],link:L("s337-epi","Genetic epidemiology")},
  adopt:{label:"Adoption study",dx:"Genes versus rearing",line:"Compares illness in biological relatives, who share genes, with adoptive relatives, who share the environment.",points:["Helps separate inherited from environmental risk."],link:L("s337-epi","Genetic epidemiology")},
  ped:{label:"Pedigree linkage analysis",dx:"Genes of large effect",line:"Tests whether a marker and a disease locus cosegregate in multigenerational families, summarized by a LOD score.",points:["Found the early-onset Alzheimer genes.","Early bipolar and schizophrenia linkage reports were false positives in underpowered studies."],link:L("s337-ped","Mapping strategies")},
  asp:{label:"Affected sib-pair analysis",dx:"Shared regions in affected siblings",line:"Asks whether affected siblings share a region more than the 50 percent expected by chance.",points:["Like pedigree studies, best at finding genes of large effect.","Data repositories pool sib pairs from many sites."],link:L("s337-ped","Mapping strategies")},
  assoc:{label:"Association study",dx:"Variants of small effect",line:"Compares allele frequencies in cases and controls (or transmitted and untransmitted alleles in trios), using linkage disequilibrium.",points:["Case-control designs risk population stratification.","Genome-wide significance today is p < 5 × 10 to the minus 8 (see the update)."],link:L("s337-assoc","Association studies")},
  cat:{label:"Categorical phenotype",dx:"Diagnosis-based mapping",line:"Uses DSM diagnoses made with chosen criteria, trained clinicians and best-estimate or consensus procedures.",points:["Narrowing (for example early onset) or broadening the phenotype each has trade-offs.","Each extra diagnostic model is another statistical test."],link:L("s337-pheno","Defining phenotypes")},
  endo:{label:"Endophenotype",dx:"Trait-based mapping",line:"Uses a heritable, state-independent trait linked to the disorder, such as an MRI brain measure.",points:["Can be studied in animals too, as with circadian clock genes.","Endophenotypes are hypothesized, not proven, to be simpler to map."],link:L("s337-endo","Endophenotypes")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"psych-genetics338",title:"Genetics of four disorders: then and now",
 summary:"Section 33.8 describes the genetics of Alzheimer disease, autism, bipolar disorder and schizophrenia as they stood when the chapter was written. This table sets the chapter's key findings beside what later large studies showed.",
 items:["What the chapter describes","Main caution in the chapter","Later evidence (update boxes)"],
 rows:[
  ["Alzheimer disease","APP, PS-1 and PS-2 in early-onset families; apoE e4 and GAB2 in late-onset disease","e4 raises risk but does not determine illness; GAB2 effect sizes are provisional","75 risk loci (2022); APOE e4 testing before anti-amyloid antibodies"],
  ["Autism","High twin concordance, chromosomal aberrations, CNVs, de novo mutations; synaptic, migration and excitatory/inhibitory candidate genes","CNV findings preliminary; candidate genes equivocal","Prevalence about 1 in 31 (2022 data); sibling recurrence about 20 percent; 72 genes from sequencing at the strictest threshold, 185 at a looser one (2022)"],
  ["Bipolar disorder","Early X and chromosome 11 linkage, genome screens, chromosome 18, pooled analyses","Early linkage reports did not replicate","Amish linkage excluded (1989); 298 GWAS loci (2025)"],
  ["Schizophrenia","Linkage regions, dysbindin, DISC 1 and 2, neuregulin 1, mutant mice","Human association results equivocal","287 GWAS loci and 10 rare-variant genes (2022); candidate genes not supported"]],
 keys:["Genes of **large effect** were found first in **early-onset Alzheimer** families.","The early **linkage** reports in bipolar disorder and schizophrenia were **false positives** in underpowered studies.","Today's findings come from **very large** genome-wide and sequencing studies: hundreds of loci, each of **small effect**, plus a few rare genes of large effect."],
 links:[{ch:"ch33-8",sec:"s338-adlate",label:"Late-onset Alzheimer disease"},{ch:"ch33-8",sec:"s338-aut",label:"Autism"},{ch:"ch33-8",sec:"s338-bp",label:"Bipolar disorder"},{ch:"ch33-8",sec:"s338-scz",label:"Schizophrenia"}],
 source:"Kaplan & Sadock 12th ed., Chapter 33 (Neurogenetics), with the update boxes in this entry"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');
const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms3378.json','utf8'));
const end=g.indexOf('\n]);'); if(end<0) throw 'gl';
if(g.slice(0,end).trimEnd().slice(-1)!==',') g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');
g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);
fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"82.0.0",date:"2026-11-13",title:"Sections 33.7 and 33.8: Neurogenetics",items:[
 {type:"chapter",ch:"ch33-7",text:"New entry, Neurogenetics I: family, twin and adoption studies, linkage and LOD scores, linkage disequilibrium and markers, pedigree, sib-pair and association mapping, and phenotypes and endophenotypes, with 44 cases.",href:"#/c/ch33-7/guide",link:"Open Neurogenetics I"},
 {type:"chapter",ch:"ch33-8",text:"New entry, Neurogenetics II: the genetics of Alzheimer disease, autism, bipolar disorder and schizophrenia, with 41 cases.",href:"#/c/ch33-8/guide",link:"Open Neurogenetics II"},
 {type:"correction",ch:"ch33-7",text:"Corrections: the chapter's description of the r2 and D-prime measures of linkage disequilibrium, and the genome-wide significance threshold used today (5 × 10 to the minus 8).",href:"#/c/ch33-7/guide/s337-ld",link:"See the corrections"},
 {type:"update",ch:"ch33-8",text:"Updates: Alzheimer GWAS (2022) and anti-amyloid antibodies, autism prevalence, sibling recurrence, heritability and sequencing genes, the Amish bipolar re-analysis and the 2025 bipolar GWAS, and the SCHEMA schizophrenia genes (2022).",href:"#/c/ch33-8/guide/s338-aut",link:"See the updates"},
 {type:"feature",text:"New helper for choosing a genetic study design, and a look-alike table comparing the genetics of four disorders then and now.",href:"#/helpers/genedesign337",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "81\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
