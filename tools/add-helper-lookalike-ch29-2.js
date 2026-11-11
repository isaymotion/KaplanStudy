// Release 74.0.0: helper pain292, look-alike eol-documents, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch29-2",sec,label});
const helper={id:"pain292",chapter:"ch29-2",title:"Pain in a dying patient: which type, which approach?",
 summary:"Work through the pain types in Table 29-10 and the treatment principles of Chapter 29.2 to choose a first approach.",
 caution:"A teaching aid for the principles in Chapter 29.2. It gives no doses. Several cells of Table 29-11 look misprinted; for repeated dosing current guidance uses a parenteral to oral morphine ratio of about 1:2 to 1:3, and meperidine is not recommended for cancer pain (see the update box). Use a current conversion table.",
 start:"quality",
 nodes:{
  quality:{q:"What is the pain like?",options:[
   {label:"Steady, aching or gnawing, and the patient can point to it",to:"r:somatic",note:"Well-localized aching pain is somatic."},
   {label:"Deep, squeezing, hard to localize, maybe felt in the skin or shoulder",to:"r:visceral",note:"Poorly localized, referred pain is visceral."},
   {label:"Burning, with electric-shock bursts, after nerve injury",to:"r:neuro",note:"Dysesthetic, shock-like pain is neuropathic."},
   {label:"No medical cause found; psychological factors dominate",to:"r:psych",note:"Pure psychogenic pain is rare in cancer."},
   {label:"Pain control is good but the patient is delirious or hallucinating on opioids",to:"r:tox",note:"Opioid psychotoxicity calls for a switch."},
   {label:"The patient asks often for as-needed doses and is called drug-seeking",to:"r:sched",note:"As-needed dosing lets pain build up."}]}},
 results:{
  somatic:{label:"Somatic nociceptive pain",dx:"For example bone metastases",line:"Opioids are the core treatment.",points:["Give analgesia on a schedule, with breakthrough doses.","Consider radiation for painful bone metastases.","Raise the maintenance dose if breakthrough doses are used often."],link:L("s292-pain","Types of pain")},
  visceral:{label:"Visceral nociceptive pain",dx:"For example liver capsule or pleural pain",line:"Opioids work well; the pain may be referred.",points:["Diaphragm irritation can be felt in the shoulder.","Schedule doses and keep rescue doses available.","Palliative anticancer treatment may shrink the source."],link:L("s292-pain","Types of pain")},
  neuro:{label:"Neuropathic pain",dx:"For example phantom limb pain",line:"Opioids plus adjuvants, which may be the mainstay.",points:["Adjuvants include antidepressants and gabapentin.","Sympathetically maintained pain is treated the same way.","Nerve blocks or epidural infusions are options."],link:L("s292-pain","Adjuvants")},
  psych:{label:"Psychogenic contribution",dx:"Rare in pure form in cancer",line:"Look for organic pain that psychological factors amplify.",points:["Anxiety lowers the pain threshold.","Treat anxiety and depression alongside pain.","Do not withhold analgesia on the assumption pain is psychological."],link:L("s292-pain","Types of pain")},
  tox:{label:"Opioid psychotoxicity",dx:"Delirium or hallucinations on opioids",line:"Switch to another opioid at a lowered dose.",points:["Drugs whose analgesia is shorter than their half-life accumulate.","Cross-tolerance is incomplete, so lower the dose at each switch.","Look for other causes of delirium too."],link:L("s292-pain","Opioid psychotoxicity")},
  sched:{label:"Undertreated pain",dx:"Switch to scheduled dosing",line:"Scheduled maintenance doses with breakthrough doses control pain better.",points:["As-needed orders let pain build while the patient waits.","Frequent rescue use means the maintenance dose should rise.","Patient-controlled analgesia gives better relief with less drug."],link:L("s292-pain","Principles of treatment")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"eol-documents",title:"Advance directives and end-of-life orders",
 summary:"The documents and orders in Chapter 29.2 (US law), and POLST from the update box, side by side.",
 items:["What it is","Who signs or decides","Key point"],
 rows:[
  ["Living will","**Written instructions** about life-prolonging treatment for a time the patient cannot communicate","A **mentally competent** patient","Doctors **must follow** the specific instructions"],
  ["Health care proxy","Names a **surrogate** to decide when the patient cannot","The patient names the surrogate","The surrogate decides **as the patient would have wanted**"],
  ["DNR and DNI orders","Forbid **resuscitation** or **intubation** in extremis","A competent patient, in a living will or through the proxy","Narrow: about specific interventions"],
  ["POLST (update)","A **portable medical order** that travels across settings","A **clinician**, after talking with the patient or surrogate","For **serious illness or frailty**; complements, does not replace, a directive"],
  ["Patient Self-Determination Act","US law (passed **1990**, in effect **December 1991**)","Applies to facilities taking Medicare or Medicaid","**Inform, ask, record**"],
  ["Philippine Mental Health Act, sec. 9 (update)","A **notarized advance directive** on mental health treatment","The service user","Revocable by a new directive or notarized revocation"]],
 keys:["A **living will** gives instructions; a **proxy** names a person.","A **POLST** is a **medical order**, not an advance directive.","Raise directives **early**, while the patient is well, and say they **can be changed**."],
 links:[{ch:"ch29-2",sec:"s292-ad",label:"Advance directives"},{ch:"ch29-2",sec:"s292-term",label:"Terminal care decisions"},{ch:"ch28",sec:"s28-capacity",label:"Durable power of attorney"}],
 source:"Kaplan & Sadock 12th ed., section 29.2, with update boxes"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"74.0.0",date:"2026-11-11",title:"Chapter 29.2: Palliative care (Chapter 29 complete)",items:[
 {type:"chapter",ch:"ch29-2",text:"New section 29.2, Palliative Care: anxiety, depression (Endicott substitution criteria, Table 29-5) and delirium in advanced disease, physicians' reactions (Table 29-6), breaking bad news and informed consent, terminal care decisions (Tables 29-7 and 29-8), persistent vegetative state versus brain death, the Quinlan case, advance directives, caring for the family (Table 29-9), pain and opioids (Tables 29-10 and 29-11), end-of-life symptoms (Table 29-12), hospice, dying children and spiritual care, with 71 clinical cases. Chapter 29 is now complete.",href:"#/c/ch29-2/guide",link:"Open the section"},
 {type:"update",ch:"ch29-2",text:"Updates: current morphine conversion for repeated dosing (about 1:2 to 1:3) and why meperidine is avoided; the dronabinol label doses; Medicare hospice certification and benefit periods; POLST; and Philippine law on advance directives, the definition of death and palliative care (UHC Act, Cancer Control Act).",href:"#/c/ch29-2/guide/s292-pain",link:"See the opioid update"},
 {type:"correction",ch:"ch29-2",text:"Correction: the Patient Self-Determination Act was passed in 1990 and took effect on December 1, 1991. Several cells of the opioid table (Table 29-11) are flagged as likely misprints.",href:"#/c/ch29-2/guide/s292-ad",link:"See the correction"},
 {type:"update",ch:"ch29-1",text:"Section 29.1 gains a box on the Philippine legal definition of death (Organ Donation Act, RA 7170).",href:"#/c/ch29-1/guide/s291-def",link:"See the box"},
 {type:"feature",text:"New helper, Pain in a dying patient: which type, which approach?, and a look-alike table of advance directives and end-of-life orders.",href:"#/helper/pain292",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "73\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
