const fs=require('fs');
// helper
let h=fs.readFileSync('data/helpers.js','utf8');
const helper={id:"insanity28",chapter:"ch28",title:"Which insanity standard fits?",
 summary:"Work through a fact pattern to see which of the tests in Chapter 28 it would meet: M'Naghten, irresistible impulse, the American Law Institute test or the Durham product rule, and when the question is really competence to stand trial.",
 caution:"A teaching aid for the tests as Chapter 28 describes them (United States and English law). It is not legal advice. Each jurisdiction uses its own test: US federal courts changed theirs in 1984, and Philippine courts apply Article 12 of the Revised Penal Code and People v. Paña (see the update boxes).",
 start:"when",
 nodes:{
  when:{q:"Which point in time is the question about?",options:[
   {label:"Now: can the person follow the proceedings and work with a lawyer?",to:"r:dusky",note:"The question concerns present abilities, not the time of the act."},
   {label:"The time of the act",to:"know",note:"Criminal responsibility looks back at the mind when the act was done."}]},
  know:{q:"Because of mental disease, did the person not know the nature and quality of the act, or not know it was wrong?",options:[
   {label:"Yes, did not know",to:"r:mn",note:"A failure of knowing, the cognitive question."},
   {label:"No, knew what the act was and that it was wrong",to:"impulse",note:"Knew the act and its wrongfulness."}]},
  impulse:{q:"Did mental disease produce an impulse the person could not resist, even with a police officer standing by?",options:[
   {label:"Yes",to:"r:imp",note:"A total loss of control from mental disease."},
   {label:"No, control was reduced but not absent",to:"subst",note:"Some control remained."}]},
  subst:{q:"Did mental disease or defect remove substantial capacity to appreciate wrongfulness or to conform conduct to the law?",options:[
   {label:"Yes",to:"r:ali",note:"Substantial, not total, loss of appreciation or control."},
   {label:"No",to:"product",note:"Capacity was not substantially lost."}]},
  product:{q:"What links the mental condition to the act?",options:[
   {label:"The act was a product of mental disease or defect",to:"r:durham",note:"Only a causal link to illness is shown."},
   {label:"The only sign of abnormality is repeated criminal or antisocial conduct",to:"r:none",note:"Repeated antisocial conduct alone."},
   {label:"Mentally ill, but no test is met",to:"r:gbmi",note:"Illness is present without meeting an insanity test."}]}},
 results:{
  dusky:{label:"Competence to stand trial",dx:"Dusky test (not an insanity question)",line:"Trial competence is about the defendant's present abilities.",points:["Present ability to consult a lawyer with reasonable rational understanding.","A rational and factual understanding of the proceedings.","A person can be competent now and still plead insanity, or the reverse."],link:{ch:"ch28",sec:"s28-trial",label:"Competence to stand trial"}},
  mn:{label:"M'Naghten rule",dx:"Right-wrong test (1843)",line:"Not guilty by reason of insanity if mental disease kept the person from knowing the act or its wrongfulness.",points:["The narrowest test: it asks only about knowing.","A delusion excuses only if the act would be justified were the delusion true.","Fact patterns that meet M'Naghten also meet the broader American Law Institute test."],link:{ch:"ch28",sec:"s28-resp",label:"M'Naghten and irresistible impulse"}},
  imp:{label:"Irresistible impulse",dx:"Irresistible impulse test (1922)",line:"The person knew the act was wrong but mental disease made the impulse impossible to resist.",points:["Read strictly as the policeman-at-the-elbow law.","Adds a control question to M'Naghten's knowing question.","Helps only a small group of patients."],link:{ch:"ch28",sec:"s28-resp",label:"Irresistible impulse"}},
  ali:{label:"American Law Institute test",dx:"Model Penal Code test (1962)",line:"Lack of substantial capacity to appreciate wrongfulness or to conform conduct to the law.",points:["Joins a knowing part (appreciate) with a control part (conform).","'Substantial' means the loss need not be total.","Adopted in United States v. Brawner (1972).","US federal courts dropped the conform-conduct part in 1984 (see the update)."],link:{ch:"ch28",sec:"s28-resp2",label:"Model Penal Code test"}},
  durham:{label:"Durham rule",dx:"Product rule (1954)",line:"Not responsible if the unlawful act was the product of mental disease or defect.",points:["Judge Bazelon's rule, meant to open the door to full psychiatric testimony.","Confusion over product, disease and defect.","Dropped in 1972 for the American Law Institute test, so it would not succeed today where that test applies."],link:{ch:"ch28",sec:"s28-resp2",label:"Durham rule"}},
  none:{label:"No insanity defense",dx:"Criminally responsible",line:"Repeated criminal or antisocial conduct alone is not a mental disease or defect.",points:["The American Law Institute test's second subsection excludes it.","Its purpose is to keep the sociopath or psychopath (antisocial personality disorder) responsible."],link:{ch:"ch28",sec:"s28-resp2",label:"Model Penal Code test"}},
  gbmi:{label:"Guilty, or guilty but mentally ill",dx:"No insanity test met",line:"In some US states the jury may return guilty but mentally ill.",points:["The person is still sentenced.","Critics call it a verdict without a difference: treatment is open to all prisoners anyway.","Four outcomes are possible in these states: guilty, guilty but mentally ill, not guilty by reason of insanity, not guilty."],link:{ch:"ch28",sec:"s28-resp2",label:"Guilty but mentally ill"}}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
// lookalike
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"forensic-pairs",title:"Forensic terms that are easily confused",
 summary:"Paired terms from Chapter 28 that examiners like to contrast: privilege and confidentiality, warn and protect, foreseeable and preventable, informal and voluntary admission, opinion and finding, and competence to stand trial and criminal responsibility.",
 items:["First term","Second term","How to tell them apart"],
 rows:[
  ["Privilege vs confidentiality","**Privilege**: the **patient's legal right** to keep communications out of **court**","**Confidentiality**: the clinician's **ethical duty** to keep patient information secret everywhere","Ask whether a court or subpoena is involved, and remember only the **patient** can waive privilege"],
  ["Duty to warn vs duty to protect","**Tarasoff I**: **warn** the intended victim","**Tarasoff II**: take reasonable steps to **protect**; a warning is one option","A warning alone is usually **not enough**"],
  ["Foreseeable vs preventable","**Foreseeable**: a legal, common-sense judgment that harm could be anticipated","**Preventable**: the harm could have been stopped","In hindsight many suicides look preventable that were **not foreseeable**"],
  ["Informal vs voluntary admission","**Informal**: general hospital model, no written application","**Voluntary**: the patient **applies in writing**","Both may leave, even **against medical advice**"],
  ["Temporary vs involuntary admission","**Temporary**: **one physician**, usually up to **15 days**","**Involuntary**: **two physicians**, commonly **60 days**, then board review","Count the physicians and the days"],
  ["Right to treatment vs right to refuse","**Rouse** and **Wyatt**: confinement must come with **treatment**","**O'Connor**, **Rennie**, **Rogers**: limits on confinement and on **forced treatment**","Refusal stands except in an **emergency**"],
  ["Opinion vs finding of competence","**Opinion**: what the psychiatrist gives","**Finding**: only a **judge's ruling**","No one is incompetent until a **court** says so; commitment is not incompetence"],
  ["Malpractice vs informed consent claim","**Malpractice**: needs an **expert** to show departure from the standard","**Consent claim**: **no expert** needed; a good result is no defense","Ask whether the complaint is about **how** it was done or **what was disclosed**"],
  ["Competence to stand trial vs criminal responsibility","**Competence** (Dusky): the mind **now**","**Responsibility** (insanity tests): the mind **at the time of the act**","Check which point in time the question asks about"],
  ["M'Naghten vs American Law Institute test","**M'Naghten**: did not **know** the act or its wrongfulness","**ALI**: lacked **substantial capacity** to appreciate or to **conform**","ALI adds control and softens 'know' to 'appreciate'"]],
 keys:["**Privilege** belongs to the **patient**; **confidentiality** is the doctor's duty.","**Tarasoff I** is **1974** (warn) and **Tarasoff II** is **1976** (protect); the book prints later years.","Most rules in Chapter 28 are **US law**; see the update boxes for the Philippine rules."],
 links:[{ch:"ch28",sec:"s28-priv",label:"Privilege"},{ch:"ch28",sec:"s28-violent",label:"Tarasoff and the duty to protect"},{ch:"ch28",sec:"s28-hosp",label:"Procedures of admission"},{ch:"ch28",sec:"s28-capacity",label:"Capacity and competence"},{ch:"ch28",sec:"s28-resp2",label:"Insanity standards compared"}],
 source:"Kaplan & Sadock 12th ed., Chapter 28"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
// changelog
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"72.0.0",date:"2026-11-11",title:"Chapter 28: Forensic and legal issues",items:[
 {type:"chapter",ch:"ch28",text:"New Chapter 28, Forensic and Legal Issues: malpractice and the 4 Ds, split treatment, privilege and confidentiality, suicidal and violent patients (Tarasoff), admission procedures, rights to treatment and to refuse it, seclusion and restraint (Tables 28-2 and 28-3), informed consent, custody, capacity, competence to stand trial, the insanity standards and HIPAA, with 76 clinical cases.",href:"#/c/ch28/guide",link:"Open the chapter"},
 {type:"correction",ch:"ch28",text:"Correction boxes fix dates and names the book prints wrongly: Tarasoff I (1974) and II (1976), O'Connor v. Donaldson (1975), Rogers v. Okin, Jaffee v. Redmond, and the Dahmer plea (January 13, 1992). Cards use the corrected facts.",href:"#/c/ch28/guide/s28-violent",link:"See the Tarasoff correction"},
 {type:"update",ch:"ch28",text:"Updates: the 1984 federal insanity test and Kahler v. Kansas (2020); Madison v. Alabama (2019) on competence to be executed; the military psychotherapist-patient privilege; current US time limits for seclusion and restraint orders; HIPAA time limits and the 2024 rule on substance use records; and treatment for tardive dyskinesia."},
 {type:"update",ch:"ch28",text:"Philippine law boxes: the Mental Health Act (RA 11036) on consent, emergency treatment and confidentiality; insanity under Article 12 of the Revised Penal Code and People v. Paña (2020); wills under the Civil Code; custody under Article 213 of the Family Code; and privilege under the 2019 Rules on Evidence.",href:"#/c/ch28/guide/s28-resp2",link:"See the insanity box"},
 {type:"feature",text:"New helper, Which insanity standard fits?, and a look-alike table of forensic terms that are easily confused (privilege and confidentiality, warn and protect, opinion and finding).",href:"#/helper/insanity28",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "71\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
