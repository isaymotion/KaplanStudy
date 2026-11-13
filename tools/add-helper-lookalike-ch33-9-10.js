// Release 83.0.0: helper eegpattern339, look-alike phase3310, glossary terms, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch33-9",sec,label});
const helper={id:"eegpattern339",chapter:"ch33-9",title:"What does this EEG finding point to?",
 summary:"Match an EEG finding to what section 33.9 says it usually means, from nonspecific slowing to patterns that narrow the search for a medical cause.",
 caution:"A teaching aid that simplifies. An EEG finding is read together with the history and examination; the neurologist's or electroencephalographer's report decides what a tracing shows.",
 start:"what",
 nodes:{
  what:{q:"What kind of finding is it?",options:[
   {label:"Slowing of the background rhythms",to:"slow",note:"Ask whether the slowing is diffuse or focal."},
   {label:"A distinctive waveform or discharge",to:"wave",note:"Some patterns point to particular causes."},
   {label:"More fast (beta) activity than expected",to:"r:beta",note:"Think first about medications."}]},
  slow:{q:"Where is the slowing?",options:[
   {label:"Diffuse, across the whole recording",to:"r:diffuse",note:"The most common EEG abnormality."},
   {label:"Focal, over one region",to:"r:focal",note:"Points to one part of the brain."}]},
  wave:{q:"Which pattern?",options:[
   {label:"Spikes or spike-wave discharges between attacks",to:"r:epi",note:"The interictal hallmark of epilepsy."},
   {label:"Brief runs of generalized triphasic waves",to:"r:tri",note:"A toxic-metabolic pattern."},
   {label:"Periodic discharges over one hemisphere",to:"r:pled",note:"Periodic lateralizing epileptiform discharges."},
   {label:"Generalized periodic sharp waves",to:"r:gpsw",note:"Seen after anoxia and in prion disease."},
   {label:"14 and 6 per second positive spikes",to:"r:benign",note:"See the update on benign variants."}]}},
 results:{
  diffuse:{label:"Diffuse background slowing",dx:"Diffuse encephalopathy, cause not specified",line:"The most common abnormality; it says the brain is diffusely unwell, not why.",points:["Seen in encephalopathies of many causes and in dementia (Figure 33-35).","Look for the medical cause; the EEG does not name it."],link:L("s339-abn","EEG abnormalities")},
  focal:{label:"Focal slowing",dx:"Localized dysfunction",line:"Points to localized parenchymal dysfunction and a focal seizure disorder.",points:["Found with structural lesions and focal fluid collections such as a hematoma.","A focal finding narrows the search to one region."],link:L("s339-abn","EEG abnormalities")},
  epi:{label:"Epileptiform discharges",dx:"Seizure disorder",line:"The interictal hallmark of epilepsy, closely linked with seizure disorders in general.",points:["Spike or spike-wave discharges may be generalized, hemispheric or focal.","Activation procedures such as hyperventilation and sleep deprivation make them more likely to appear."],link:L("s339-abn","EEG abnormalities")},
  tri:{label:"Triphasic waves",dx:"Toxic-metabolic encephalopathy",line:"About half of patients with triphasic waves have hepatic encephalopathy; the rest have another toxic-metabolic encephalopathy.",points:["Brief runs of generalized, synchronous waves."],link:L("s339-abn","EEG abnormalities")},
  pled:{label:"Periodic lateralizing epileptiform discharges",dx:"Acute destructive lesion",line:"Point to an acute destructive cerebral lesion.",points:["Come with seizures, obtundation and focal signs on examination."],link:L("s339-abn","EEG abnormalities")},
  gpsw:{label:"Generalized periodic sharp waves",dx:"Cerebral anoxia or Creutzfeldt-Jakob disease",line:"Seen most often after cerebral anoxia, and in about 90 percent of patients with Creutzfeldt-Jakob disease.",points:["In a rapidly progressive dementia this pattern raises the question of prion disease."],link:L("s339-abn","EEG abnormalities")},
  benign:{label:"14 and 6 per second positive spikes",dx:"A benign variant",line:"Table 33-12 ties them to borderline personality disorder, but they are a recognized benign variant found in many healthy people (see the update).",points:["Not a sign of any psychiatric disorder.","No EEG finding is used to diagnose a psychiatric disorder."],link:L("s339-dis","EEG in medical and psychiatric disorders")},
  beta:{label:"Increased beta activity",dx:"Medication effect",line:"Benzodiazepines raise beta activity (Table 33-10).",points:["Review the medication list before reading meaning into fast activity.","Clozapine is the antipsychotic most linked to slowing and epileptiform discharges (see the update)."],link:L("s339-drug","EEG changes with medications and drugs")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"phase3310",title:"Advanced versus delayed sleep phase",
 summary:"Section 33.10 describes two circadian sleep disorders at opposite ends of the lark and owl spectrum. This table sets them side by side, with the current names and genetics from the update box.",
 items:["Advanced phase","Delayed phase"],
 rows:[
  ["Chapter's name","Advanced sleep phase syndrome (ASPS)","Delayed sleep phase syndrome (DSPS)"],
  ["Current name (ICSD-3-TR)","Advanced sleep-wake phase disorder","Delayed sleep-wake phase disorder"],
  ["Chronotype","Pathologic extreme of the morning lark","Linked to evening preference"],
  ["Sleep timing in the chapter","Familial form about 4 hours early: asleep about 7:30 PM, awake about 4:30 AM","Not detailed in the chapter"],
  ["Genetics in the chapter","Familial form autosomal dominant; hPER2 variant (serine to glycine) poorly phosphorylated by casein kinase I epsilon","hPER3 repeat-length polymorphism; shorter allele with evening preference"],
  ["Later evidence (update)","Other familial variants found, including in CSNK1D (2005)","PER3 link not consistently confirmed; a CRY1 variant found in familial cases (2017)"]],
 keys:["**Advanced** means sleepy and awake **too early**; **delayed** means **too late**.","The familial advanced form is **autosomal dominant**, with a **PER2** variant.","For the delayed form, the **PER3** association has **not held up consistently**; **CRY1** is the gene with the stronger family evidence."],
 links:[{ch:"ch33-10",sec:"s3310-csd",label:"Circadian sleep disorders"},{ch:"ch33-10",sec:"s3310-clock",label:"The circadian clock"}],
 source:"Kaplan & Sadock 12th ed., Chapter 33 (Chronobiology), with the update boxes in this entry"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');
const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms33910.json','utf8'));
const end=g.indexOf('\n]);'); if(end<0) throw 'gl';
if(g.slice(0,end).trimEnd().slice(-1)!==',') g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');
g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);
fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"83.0.0",date:"2026-11-13",title:"Sections 33.9 and 33.10: Applied Electrophysiology and Chronobiology",items:[
 {type:"chapter",ch:"ch33-9",text:"New entry, Applied Electrophysiology: the 10-20 system and activation procedures, normal waking and sleep EEG, warning signs of a hidden medical cause, common abnormal patterns, EEG effects of drugs, EEG in medical and psychiatric disorders, and quantitative EEG and evoked potentials, with 34 cases.",href:"#/c/ch33-9/guide",link:"Open Applied Electrophysiology"},
 {type:"chapter",ch:"ch33-10",text:"New entry, Chronobiology: the circadian clock and light, sleep regulation, advanced and delayed sleep phase disorders, seasonality and melatonin, aging and the clock, and circadian rhythms in drug treatment, with 29 cases. This completes Chapter 33.",href:"#/c/ch33-10/guide",link:"Open Chronobiology"},
 {type:"update",ch:"ch33-9",text:"Updates: current sleep stage names, QEEG is not a diagnostic test for psychiatric disorders, clozapine and the EEG, and benign variants among the psychiatric EEG findings.",href:"#/c/ch33-9/guide/s339-qeeg",link:"See the updates"},
 {type:"update",ch:"ch33-10",text:"Updates: the 2017 Nobel Prize for the molecular clock, and the current names and genetics of the sleep-wake phase disorders.",href:"#/c/ch33-10/guide/s3310-csd",link:"See the updates"},
 {type:"feature",text:"New helper for reading what an EEG finding points to, and a look-alike table comparing advanced and delayed sleep phase.",href:"#/helpers/eegpattern339",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "82\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
