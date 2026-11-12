// Release 80.0.0: helper rxclue333, look-alike novel-transmitters334, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label,ch)=>({ch:ch||"ch33-3",sec,label});
const helper={id:"rxclue333",chapter:"ch33-3",title:"Which receptor or pathway explains this drug effect?",
 summary:"Trace a common psychotropic effect or side effect to the receptor action or dopamine pathway that section 33.3 links to it.",
 caution:"A teaching aid that simplifies. Most psychotropics act at several receptors, and effects in a given patient depend on dose, other drugs and illness.",
 start:"what",
 nodes:{
  what:{q:"What kind of effect are you explaining?",options:[
   {label:"A side effect of an antipsychotic",to:"ap",note:"D2 blockade in different pathways, plus other receptors."},
   {label:"Sleepiness or weight gain from a psychotropic",to:"sw"},
   {label:"A therapeutic action at a serotonin receptor",to:"ht"},
   {label:"Drowsiness from clonidine",to:"r:a2",note:"An antihypertensive also used in psychiatry."}]},
  ap:{q:"Which effect?",options:[
   {label:"Stiffness, tremor or shuffling gait",to:"r:ns"},
   {label:"High prolactin, galactorrhea or missed periods",to:"r:th"},
   {label:"More apathy and poorer attention",to:"r:mc"},
   {label:"Fewer hallucinations and delusions (the wanted effect)",to:"r:ml"}]},
  sw:{q:"Which pattern?",options:[
   {label:"Sedation together with weight gain",to:"r:h1"},
   {label:"Weight gain with high glucose or diabetes on an atypical antipsychotic",to:"r:c2"}]},
  ht:{q:"Which drug action?",options:[
   {label:"Relief of an acute migraine attack",to:"r:tr"},
   {label:"Prevention of chemotherapy nausea",to:"r:on"},
   {label:"Anxiolytic effect of buspirone",to:"r:bu"},
   {label:"Hallucinations from LSD",to:"r:ha"}]}},
 results:{
  ns:{label:"Nigrostriatal D2 blockade",dx:"Extrapyramidal effects",line:"Blocking D2 receptors in the substantia nigra to striatum pathway causes parkinsonism and other movement effects.",points:["The same pathway degenerates in Parkinson disease.","The chapter credits clozapine's low risk to relatively selective mesocortical effects."],link:L("s333-da","Dopamine pathways")},
  th:{label:"Tuberohypophyseal D2 blockade",dx:"Hyperprolactinemia",line:"Dopamine from the arcuate and paraventricular nuclei restrains pituitary prolactin; blocking it raises prolactin.",points:["Can cause galactorrhea in someone who is not pregnant."],link:L("s333-da","Dopamine pathways")},
  mc:{label:"Mesocortical D2 blockade",dx:"Worse negative and cognitive symptoms",line:"Blocking dopamine in the VTA to prefrontal pathway may worsen apathy, attention and working memory.",points:["This pathway supports working memory and attention."],link:L("s333-da","Dopamine pathways")},
  ml:{label:"Mesolimbic D2 blockade",dx:"Antipsychotic effect",line:"Blocking D2 receptors in the VTA to limbic pathway is the route by which positive symptoms improve.",points:["D2 affinity tracks antipsychotic potency across drugs."],link:L("s333-da","Dopamine pathways")},
  h1:{label:"H1 antagonism",dx:"Sedation and weight gain",line:"Sedation and weight gain from several antipsychotics and antidepressants are attributed to H1 blockade.",points:["H1 antagonists are also the classic allergy drugs.","H3 antagonism instead promotes wakefulness (pitolisant; see the update)."],link:L("s333-rec2","Histamine receptors")},
  c2:{label:"5-HT2C blockade (proposed)",dx:"Metabolic effects",line:"5-HT2C blockade may contribute to the weight gain and type 2 diabetes linked to atypical antipsychotics.",points:["5-HT2C knockout mice overeat and become obese.","The 5-HT2C agonist lorcaserin was withdrawn in 2020 (see the update)."],link:L("s333-rec","Serotonin receptors")},
  tr:{label:"5-HT1B/1D agonism",dx:"Triptans",line:"Triptans are 5-HT1B/1D agonists; the book's table labels them wrongly (see the correction).",points:["Agonism, not antagonism, is the mechanism."],link:L("s333-rec","Serotonin receptors")},
  on:{label:"5-HT3 antagonism",dx:"Ondansetron",line:"Ondansetron blocks the 5-HT3 receptor, a ligand-gated ion channel; the book's table labels it wrongly (see the correction).",points:["5-HT3 is the only ion-channel serotonin receptor."],link:L("s333-rec","Serotonin receptors")},
  bu:{label:"5-HT1A partial agonism",dx:"Buspirone",line:"Buspirone's anxiolytic and antidepressant properties are credited to partial agonism at 5-HT1A receptors.",points:["5-HT1A is also linked to antidepressant action and neurogenesis."],link:L("s333-rec","Serotonin receptors")},
  ha:{label:"5-HT2A agonism",dx:"Hallucinogens",line:"LSD and related hallucinogens act as agonists at 5-HT2A receptors.",points:["Atypical antipsychotics block 5-HT2A receptors."],link:L("s333-rec","Serotonin receptors")},
  a2:{label:"Alpha-2 agonism",dx:"Clonidine",line:"Clonidine stimulates alpha-2 receptors, lowering sympathetic outflow and blood pressure; the drowsiness is proposed to follow from this action.",points:["Alpha-2 agonists are antihypertensive; the book's table says otherwise (see the correction)."],link:L("s333-rec2","Adrenergic receptors")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"novel-transmitters334",title:"Beyond the classic transmitters",
 summary:"Section 33.4 covers four kinds of signal that break the classic rules of synthesis, storage, receptors and clearance. This table sets them side by side.",
 items:["How it is made","Stored in vesicles?","Where it acts","How the signal ends"],
 rows:[
  ["Neuropeptides (TRH, CRF, oxytocin, neurotensin)","Cut from a large preprohormone after translation","Yes","Mostly G protein-coupled receptors","Peptidases cut them within minutes; no reuptake"],
  ["Gases (nitric oxide, carbon monoxide)","Made on demand by NOS from arginine, or by heme oxygenase from heme","No","Diffuse into cells; act inside them, for example on guanylyl cyclase","Short half-life; no reuptake or receptor"],
  ["Endocannabinoids (anandamide, 2-AG)","Made on demand from membrane lipids when calcium rises","No","CB1 on presynaptic terminals (retrograde); CB2 mainly on immune cells","Breakdown by FAAH (anandamide) or MAGL (2-AG)"],
  ["Neurosteroids (allopregnanolone, DHEA)","Made in the brain from cholesterol","No","Membrane receptors such as GABA-A and NMDA, besides classic steroid receptors","Metabolism"]],
 keys:["Only **neuropeptides** are packaged in **vesicles**; gases and endocannabinoids are made **on demand**.","**Endocannabinoids** signal **backward** across the synapse to quiet release.","**Allopregnanolone** strongly enhances **GABA-A**; brexanolone and zuranolone treat **postpartum depression** (see the update)."],
 links:[{ch:"ch33-4",sec:"s334-npbio",label:"Neuropeptide life cycle"},{ch:"ch33-4",sec:"s334-no",label:"Nitric oxide"},{ch:"ch33-4",sec:"s334-ecb",label:"Endocannabinoids"},{ch:"ch33-4",sec:"s334-nster",label:"Neurosteroids"}],
 source:"Kaplan & Sadock 12th ed., Chapter 33 (Neurophysiology and Neurochemistry)"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"80.0.0",date:"2026-11-12",title:"Sections 33.3 and 33.4: Neurophysiology and Neurochemistry",items:[
 {type:"chapter",ch:"ch33-3",text:"New entry, Neurochemistry I: monoamine pathways (serotonin, dopamine, norepinephrine, histamine, acetylcholine), synthesis, transporters and receptors, glutamate, GABA and glycine, and their links to schizophrenia, anxiety, depression and alcoholism, with 71 cases.",href:"#/c/ch33-3/guide",link:"Open Neurochemistry I"},
 {type:"chapter",ch:"ch33-4",text:"New entry, Neurochemistry II: neuropeptides (TRH, CRF and urocortins, oxytocin, vasopressin, neurotensin), nitric oxide, carbon monoxide, endocannabinoids, omega-3 fatty acids and neurosteroids, with 88 cases.",href:"#/c/ch33-4/guide",link:"Open Neurochemistry II"},
 {type:"update",ch:"ch33-3",text:"Updates: esketamine (2019, monotherapy 2025), xanomeline-trospium (2024), pitolisant (2019), and the small effect of D-cycloserine with exposure therapy.",href:"#/c/ch33-3/guide/s333-aamood",link:"See the updates"},
 {type:"update",ch:"ch33-4",text:"Updates: failed CRF1 and NK1 antagonist trials, the withdrawals of rimonabant and sibutramine, cannabidiol for epilepsy (2018), and brexanolone and zuranolone for postpartum depression.",href:"#/c/ch33-4/guide/s334-nster",link:"See the updates"},
 {type:"correction",ch:"ch33-3",text:"Corrections to Table 33-2 and the text: triptans are 5-HT1B/1D agonists, ondansetron is a 5-HT3 antagonist, alpha-2 agonists lower blood pressure, clozapine is atypical, memantine is approved for moderate to severe Alzheimer disease, and the later histories of lorcaserin and tegaserod.",href:"#/c/ch33-3/guide/s333-rec",link:"See the corrections"},
 {type:"correction",ch:"ch33-4",text:"Correction: EPA has 20 carbons and 5 double bonds, DHA 22 carbons and 6.",href:"#/c/ch33-4/guide/s334-eico",link:"See the correction"},
 {type:"feature",text:"New helper, Which receptor or pathway explains this drug effect?, and a look-alike table comparing neuropeptides, gases, endocannabinoids and neurosteroids.",href:"#/helper/rxclue333",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "79\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
