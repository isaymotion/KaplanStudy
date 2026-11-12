// Release 75.0.0: helper program30, look-alike prevention-levels, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch30",sec,label});
const helper={id:"program30",chapter:"ch30",title:"Which community program fits this person?",
 summary:"Work through the needs described in Chapter 30 and Tables 30-1 and 30-2 to pick an evidence-based community program.",
 caution:"A teaching aid for the programs in Chapter 30. Availability and names differ by country and service; the programs described are mainly from the United States. Base real referrals on a full assessment.",
 start:"age",
 nodes:{
  age:{q:"Is the person a child or adolescent, or an adult?",options:[
   {label:"Adult",to:"adult",note:"Table 30-1 covers adult programs."},
   {label:"Child or adolescent",to:"child",note:"Table 30-2 covers child programs."}]},
  adult:{q:"What is the main need?",options:[
   {label:"Severe mental illness, repeated admissions, needs help with daily life and crises at any hour",to:"r:act",note:"Round-the-clock team support in the community."},
   {label:"Repeated self-harm with emotion dysregulation",to:"r:dbt",note:"Studied in parasuicidal patients with borderline personality disorder."},
   {label:"Ambivalence about changing alcohol or drug use",to:"r:met",note:"Builds motivation from the person's own goals."},
   {label:"Sober, but wants to spot early warning signs of relapse",to:"r:rpt",note:"Targets the slide back toward use."},
   {label:"Needs everyday living skills and wants to manage symptoms",to:"r:skills",note:"Skills training for independent living."}]},
  child:{q:"What is the main need?",options:[
   {label:"Serious antisocial behavior across home, school and neighborhood",to:"r:mst",note:"Works across all of the youth's environments."},
   {label:"Would otherwise be placed in an institution and needs a therapeutic home",to:"r:mtfc",note:"Trained foster parents provide a structured home."},
   {label:"PTSD after trauma, with a caregiver who can join therapy",to:"r:tfcbt",note:"Trauma-focused work with the caregiver involved."},
   {label:"Disruptive behavior at home and school",to:"r:pmt",note:"Parents and teachers learn behavior management."},
   {label:"Needs and agencies too many for one service to meet",to:"r:soc",note:"A coordinated system of care fits multi-agency needs."}]}},
 results:{
  act:{label:"Assertive community treatment",dx:"ACT team",line:"A multidisciplinary team brings treatment and practical support to the person in the community.",points:["For severe mental illness with repeated admissions.","Help with housing, money, medication and crises.","Several US states fund ACT through case or bundled rates."],link:L("s30-ebpa","Adult programs (Table 30-1)")},
  dbt:{label:"Dialectical behavior therapy",dx:"DBT",line:"Studied in parasuicidal patients with borderline personality disorder.",points:["Targets self-harm and emotion regulation.","Combines individual and skills work.","See Table 30-1 for its evaluation results."],link:L("s30-ebpa","Adult programs (Table 30-1)")},
  met:{label:"Motivational enhancement therapy",dx:"MET",line:"Helps the person see how use clashes with their own goals.",points:["Shown to reduce addictive behaviors.","Works with ambivalence rather than against it.","Can lead into other treatment."],link:L("s30-ebpa","Adult programs (Table 30-1)")},
  rpt:{label:"Relapse prevention therapy",dx:"Relapse prevention",line:"Teaches early warning signs and coping before a full relapse.",points:["For people already in recovery.","Plans for high-risk situations.","See Table 30-1."],link:L("s30-ebpa","Adult programs (Table 30-1)")},
  skills:{label:"Social and independent living skills training",dx:"Skills training",line:"Builds daily living, social and symptom self-management skills.",points:["For adults with serious mental illness.","Supports recovery goals.","See Table 30-1."],link:L("s30-ebpa","Adult programs (Table 30-1)")},
  mst:{label:"Multisystemic therapy",dx:"MST",line:"Intensive home- and community-based work across the youth's environments.",points:["Therapists with 24-hour backup, for up to about 6 months.","For serious antisocial behavior.","See Table 30-2."],link:L("s30-ebpc","Child programs (Table 30-2)")},
  mtfc:{label:"Multidimensional treatment foster care",dx:"MTFC",line:"Trained, supported foster parents provide a structured therapeutic home.",points:["An alternative to institutional placement.","Close supervision and support of the foster family.","See Table 30-2."],link:L("s30-ebpc","Child programs (Table 30-2)")},
  tfcbt:{label:"Trauma-focused cognitive-behavioral therapy",dx:"TF-CBT",line:"Symptom management and trauma processing with the caregiver involved.",points:["For PTSD after abuse or other trauma.","Disruptive behavior did not improve in trials.","See Table 30-2."],link:L("s30-ebpc","Child programs (Table 30-2)")},
  pmt:{label:"Parent behavior and teacher classroom management training",dx:"Parent and teacher training",line:"Parents and teachers learn behavior management strategies, for example Incredible Years.",points:["For disruptive behavior at home and in class.","Works through the adults around the child.","See Table 30-2."],link:L("s30-ebpc","Child programs (Table 30-2)")},
  soc:{label:"System of care",dx:"Coordinated multi-agency care",line:"A consortium of agencies and a child and family team plan care together.",points:["Set expected outcomes for each intervention and track progress.","Needs matching commitment from state agencies.","See organized systems of care."],link:L("s30-models","Organized systems of care")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"prevention-levels",title:"Levels and categories of prevention",
 summary:"Chapter 30 uses two schemes: the classic public health levels and the Institute of Medicine categories.",
 items:["Scheme","Who it targets","Example"],
 rows:[
  ["Primary prevention","Classic level","People without the disorder; prevents new cases","A school program against alcohol use and bullying"],
  ["Secondary prevention","Classic level","Early detection and treatment of cases","Screening and prompt treatment"],
  ["Tertiary prevention","Classic level","People with an established illness; reduces disability","Rehabilitation and chronic illness care"],
  ["Universal","Institute of Medicine","A whole population, regardless of risk","A media campaign on warning signs of depression"],
  ["Selective","Institute of Medicine","People at higher than average risk, without the disorder","A resilience group for a child of a parent with bipolar disorder"],
  ["Indicated","Institute of Medicine","People with early signs who do not meet full criteria","Coping skills for subthreshold depression"]],
 keys:["The Institute of Medicine categories all fall **before** a diagnosable disorder.","**Tertiary** prevention is about **disability** in an established illness.","The chapter places some early-symptom groups differently from the usual wording; follow the definitions in the section."],
 links:[{ch:"ch30",sec:"s30-promo",label:"Health promotion and prevention"}],
 source:"Kaplan & Sadock 12th ed., Chapter 30"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"75.0.0",date:"2026-11-12",title:"Chapters 30 and 31: Community psychiatry and global psychiatry",items:[
 {type:"chapter",ch:"ch30",text:"New Chapter 30, Community Psychiatry: public health and prevention, access to care, public agencies and the workforce, evidence-based adult and child programs (Tables 30-1 and 30-2), the psychiatrist's roles, systems of care and assertive community treatment, and the chronic illness care model, with 62 clinical cases.",href:"#/c/ch30/guide",link:"Open the chapter"},
 {type:"chapter",ch:"ch31",text:"New Chapter 31, Global and Cultural Issues in Psychiatry: worldwide burden and DALYs (Tables 31-1 to 31-3), the treatment gap, resources by WHO region (Tables 31-4 to 31-6), program development, stigma, mental and physical illness, ethics and declarations, and international organizations, with 44 clinical cases.",href:"#/c/ch31/guide",link:"Open the chapter"},
 {type:"update",ch:"ch31",text:"Updates: WHO's 2022 and 2025 estimates (970 million in 2019; more than 1 billion now), the treatment gap, Mental Health Atlas 2024 resources and spending, and the Comprehensive Mental Health Action Plan 2013 to 2030.",href:"#/c/ch31/guide/s31-res",link:"See the Atlas update"},
 {type:"update",ch:"ch30",text:"Updates: the 988 Suicide & Crisis Lifeline and NCMH 1553, collaborative care billing in the United States, and community mental health under the Philippine Mental Health Act.",href:"#/c/ch30/guide/s30-agency",link:"See the Philippine update"},
 {type:"correction",ch:"ch31",text:"Corrections: the Decade of the Brain was a congressional and presidential designation run with NIMH and the Library of Congress; WHO has 194 member states; the World Health Report 2001 and New Understanding, New Hope are one report; the Lancet global mental health series (2007) and Commission (2018) are separate.",href:"#/c/ch31/guide/s31-orgs",link:"See the corrections"},
 {type:"feature",text:"New helper, Which community program fits this person?, and a look-alike table of prevention levels and categories.",href:"#/helper/program30",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "74\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
