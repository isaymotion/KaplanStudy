// Release 81.0.0: helper endo335, look-alike immune-psych336, glossary terms, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch33-5",sec,label});
const helper={id:"endo335",chapter:"ch33-5",title:"Could this psychiatric picture be endocrine?",
 summary:"Match a mood, anxiety or libido complaint to the endocrine condition that section 33.5 links with it.",
 caution:"A teaching aid, not a diagnostic tool. Endocrine causes are confirmed by history, examination and laboratory testing, and most patients with these symptoms have no endocrine disease.",
 start:"what",
 nodes:{
  what:{q:"What is the leading picture?",options:[
   {label:"Low mood, apathy or fatigue",to:"low",note:"Several endocrine states present this way."},
   {label:"Anxiety, restlessness or elevated mood",to:"up",note:"Think thyroid first, then drugs and supplements."},
   {label:"Low libido or a sexual complaint",to:"lib",note:"Prolactin and the gonadal axis are the usual links."},
   {label:"Euphoria with anger and mood swings in someone using muscle-building drugs",to:"r:aas",note:"The controlled study found both positive and negative mood effects."}]},
  low:{q:"Which features go with it?",options:[
   {label:"Raised cortisol, poor visual memory and planning; sometimes psychosis or suicidal thinking",to:"r:cush",note:"Cortisol excess affects mood in more than half of patients."},
   {label:"Marked fatigue, apathy, social withdrawal, poor sleep and concentration in adrenal insufficiency",to:"r:add",note:"The behavioral picture of too little glucocorticoid."},
   {label:"Fatigue, poor memory, irritability, low libido; puffy face, dry skin",to:"r:hypo",note:"The classic chronic hypothyroid picture."},
   {label:"Depressive symptoms that start in the luteal phase and clear a few days into menses",to:"r:pmdd",note:"Timing, not a hormone level, defines it."},
   {label:"Depression, anxiety, irritability and poor stress tolerance with high prolactin",to:"r:prl",note:"Symptoms track the prolactin level."}]},
  up:{q:"Which features go with it?",options:[
   {label:"Anxiety, insomnia, weight loss, emotional lability, poor concentration",to:"r:hyper",note:"The usual hyperthyroid picture."},
   {label:"Mania soon after thyroid replacement corrected hypothyroidism quickly",to:"r:rapid",note:"Reported with rapid normalization."},
   {label:"New elation or agitation after starting an over-the-counter hormone supplement",to:"r:dhea",note:"Case reports link DHEA with mania."}]},
  lib:{q:"Which setting?",options:[
   {label:"On a classical antipsychotic, with high prolactin",to:"r:prl",note:"Dopamine blockade removes the brake on prolactin."},
   {label:"Irregular periods with worry, fatigue, crying spells and mood swings",to:"r:peri",note:"Most menopausal complaints come in perimenopause."}]}},
 results:{
  cush:{label:"Cushing syndrome",dx:"Cortisol excess",line:"Mood disturbance occurs in more than 50 percent of patients, and psychosis or suicidal thinking in more than 10 percent of those studied.",points:["Deficits in visual memory and higher cortical functions resemble those of major depressive disorder.","Lowering cortisol normalizes mood and mental status."],link:L("s335-hpa","HPA axis")},
  add:{label:"Addison disease",dx:"Adrenal insufficiency",line:"Apathy, social withdrawal, poor sleep and poor concentration, often with marked fatigue.",points:["Behavioral symptoms clear with glucocorticoid replacement, not with electrolyte replacement."],link:L("s335-hpa","HPA axis")},
  hypo:{label:"Hypothyroidism",dx:"Thyroid deficiency",line:"Fatigue, lower libido, memory impairment and irritability; severe cases show the puffy face, nonpitting swelling around the eyes and dry skin of myxedema.",points:["A secondary psychotic disorder can occur.","Subclinical hypothyroidism lacks the gross signs and is easy to miss."],link:L("s335-thy","Thyroid axis")},
  hyper:{label:"Hyperthyroidism",dx:"Thyroid excess",line:"Anxiety, insomnia, restlessness, irritability, emotional lability and weight loss; severe cases can reach delirium, mania or psychosis with paranoia.",points:["Some patients are instead slowed, apathetic and withdrawn.","Behavior usually normalizes when thyroid function does."],link:L("s335-thy","Thyroid axis")},
  rapid:{label:"Mania after rapid thyroid correction",dx:"Treatment-related mood change",line:"Manic symptoms have been reported when hypothyroidism is corrected rapidly.",points:["In episodic endocrine dysfunction, mood may rise and fall with thyroid level."],link:L("s335-thy","Thyroid axis")},
  pmdd:{label:"Premenstrual dysphoric disorder",dx:"Cycle-linked mood disorder",line:"Symptoms like major depression recur in most cycles, begin in the luteal phase and clear within a few days of menses.",points:["No definite abnormality of estrogen or progesterone levels has been shown.","Reduced serotonin uptake with the premenstrual fall in steroids tracks some symptoms."],link:L("s335-estro","Estrogen and progesterone")},
  peri:{label:"Perimenopause",dx:"Menopausal transition",line:"Worry, fatigue, crying spells, mood swings, reduced coping and lower libido are reported mostly in perimenopause.",points:["Studies suggest no rise in the incidence of major depressive disorder.","Hormone therapy is for symptoms; it has not been shown to prevent dementia (see the correction)."],link:L("s335-estro","Estrogen and progesterone")},
  prl:{label:"Hyperprolactinemia",dx:"High prolactin",line:"Depression, low libido, anxiety, irritability and poor stress tolerance; low testosterone in men.",points:["Classical antipsychotics raise prolactin by blocking tuberoinfundibular dopamine.","Symptoms usually improve as prolactin falls with treatment."],link:L("s335-prl","Prolactin")},
  dhea:{label:"Possible DHEA-induced mania",dx:"Supplement effect",line:"Several case reports describe mania that DHEA may have caused.",points:["Ask about over-the-counter hormone supplements.","Later consensus advice recommends against systemic DHEA for low desire in postmenopausal women (see the update)."],link:L("s335-dhea","DHEA")},
  aas:{label:"Anabolic-androgenic steroid effects",dx:"Steroid-related mood change",line:"A placebo-controlled study in normal subjects found euphoria, energy and sexual arousal together with irritability, anger, hostility and mood swings.",points:["Testosterone improves mood in hypogonadal men; extra testosterone does not help men with normal levels."],link:L("s335-hpg","Gonadal axis and testosterone")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"immune-psych336",title:"Immune findings across disorders",
 summary:"Section 33.6 reports immune changes in several disorders. This table sets the finding, what it is proposed to mean and what later trials showed side by side. All are associations, not proven causes.",
 items:["Immune finding the chapter reports","Proposed meaning","Later evidence (update boxes)"],
 rows:[
  ["Major depression","Inflammatory activation together with suppressed acquired immunity","Proinflammatory cytokines may link the two; cytokines can produce sickness behavior","Infliximab (2013): no overall benefit; possible benefit only with high CRP"],
  ["Bipolar disorder","Raised plasma inflammatory cytokines, most clearly in mania; lithium lowers several cytokines","Mania and depression share dexamethasone nonsuppression and high sympathetic activity","None added"],
  ["Schizophrenia","Raised cytokines; birth-season, epidemic, crowding and serologic clues to early infection","Prenatal or perinatal infection or an autoimmune process; virus searches mostly negative","Complement C4A linked to risk (2016); minocycline trial negative (2018)"],
  ["Autism","Immune abnormalities reported; relation to symptoms controversial","Cause, consequence or bystander: not yet separable","Danish cohort (2019) and WHO review (2025): no link with vaccines"],
  ["Alzheimer disease","Plaques carry complement and C-reactive protein; NSAID use negatively correlated in observational studies","Immune mechanisms may contribute; not primarily inflammatory","NSAID prevention trials negative (ADAPT, INTREPAD 2019)"]],
 keys:["Depression shows **both** immunosuppression and **inflammatory activation**.","Inflammatory markers may be **higher in mania** than in bipolar depression.","Anti-inflammatory trials so far (**infliximab, minocycline, NSAIDs**) have been **negative overall**."],
 links:[{ch:"ch33-6",sec:"s336-mood",label:"Depression and bipolar disorder"},{ch:"ch33-6",sec:"s336-scz",label:"Schizophrenia and autism"},{ch:"ch33-6",sec:"s336-neuro",label:"Alzheimer disease and others"},{ch:"ch33-6",sec:"s336-tx",label:"Treatment and immunity"}],
 source:"Kaplan & Sadock 12th ed., Chapter 33 (Immune System and CNS Interactions), with the update boxes in this entry"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
// glossary
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');
const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms3356.json','utf8'));
const end=g.indexOf('\n]);'); if(end<0) throw 'gl';
if(g.slice(0,end).trimEnd().slice(-1)!==',') g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');
g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);
fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"81.0.0",date:"2026-11-13",title:"Sections 33.5 and 33.6: Psychoneuroendocrinology; Immune System and CNS Interactions",items:[
 {type:"chapter",ch:"ch33-5",text:"New entry, Psychoneuroendocrinology: hormone secretion and classes, endocrine assessment, the HPA axis, testosterone and DHEA, estrogen and progesterone, thyroid, growth hormone, prolactin, melatonin, oxytocin and insulin, with 30 cases.",href:"#/c/ch33-5/guide",link:"Open Psychoneuroendocrinology"},
 {type:"chapter",ch:"ch33-6",text:"New entry, Immune System and CNS Interactions: conditioned immunosuppression, stress and immunity, sickness behavior, immune findings in mood disorders, schizophrenia, autism, Alzheimer disease and other disorders, and treatment effects on immunity, with 27 cases.",href:"#/c/ch33-6/guide",link:"Open Immune System and CNS Interactions"},
 {type:"correction",ch:"ch33-5",text:"Correction: estrogen has not been shown to prevent dementia (WHIMS 2003, USPSTF 2022, FDA labeling changes of 2025 to 2026), and Premarin is estrogen alone.",href:"#/c/ch33-5/guide/s335-estro",link:"See the correction"},
 {type:"update",ch:"ch33-5",text:"Updates: the dexamethasone suppression test is not a diagnostic test, testosterone for women has one evidence-based use (2019 consensus), and the larger intranasal insulin trial in Alzheimer disease was negative (2020).",href:"#/c/ch33-5/guide/s335-hpa",link:"See the updates"},
 {type:"update",ch:"ch33-6",text:"Updates: infliximab in depression (2013), complement C4 and the negative minocycline trial in schizophrenia, later studies and agency statements on vaccines and autism, negative NSAID prevention trials in Alzheimer disease, and the 2015 ME/CFS criteria.",href:"#/c/ch33-6/guide/s336-scz",link:"See the updates"},
 {type:"feature",text:"New helper for endocrine causes of psychiatric presentations, and a look-alike table of immune findings across disorders.",href:"#/helpers/endo335",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "80\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
