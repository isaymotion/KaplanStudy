// Release 76.0.0: helper attach321, look-alike dev-stage-theories, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch32-1",sec,label});
const helper={id:"attach321",chapter:"ch32-1",title:"Which attachment pattern or disorder fits?",
 summary:"Work from a young child's caregiving history and behavior to the attachment pattern or DSM-5 disorder it suggests, using section 32.1 and its update boxes.",
 caution:"A teaching aid. Strange Situation patterns describe a research procedure, not a diagnosis. Diagnose reactive attachment disorder or disinhibited social engagement disorder only after a full assessment, and act on any concern about neglect or abuse.",
 start:"care",
 nodes:{
  care:{q:"What caregiving has the child had?",options:[
   {label:"Ordinary, stable care by familiar caregivers",to:"reunion",note:"Look at the reunion behavior, as in Ainsworth's Strange Situation."},
   {label:"Severe neglect, institutional care or frequent changes of caregiver",to:"deprived",note:"DSM-5 attachment disorders need a history of insufficient care."}]},
  reunion:{q:"How does the child behave when the caregiver returns after a brief separation?",options:[
   {label:"Was upset, seeks the caregiver, is comforted and goes back to play",to:"r:secure",note:"Uses the caregiver as a secure base."},
   {label:"Showed little distress and ignores or turns away from the caregiver",to:"r:avoidant",note:"Avoidance at reunion is the key sign."},
   {label:"Was distressed even before separation, clings yet resists comfort",to:"r:ambivalent",note:"Hard to soothe at reunion."},
   {label:"Contradictory or confused behavior, freezing, or fear of the caregiver",to:"r:disorganized",note:"No consistent strategy."}]},
  deprived:{q:"What is the main behavior with adults?",options:[
   {label:"Withdrawn, rarely seeks or responds to comfort from caregivers",to:"r:rad",note:"Inhibited pattern."},
   {label:"Overly familiar with strangers, goes off with unfamiliar adults",to:"r:dsed",note:"Disinhibited pattern."},
   {label:"Global developmental lag, now in an adequate foster home",to:"r:deprivation",note:"Deprivation effects can improve with good care."}]}},
 results:{
  secure:{label:"Secure attachment",dx:"Secure (Strange Situation)",line:"Explores from the caregiver as a secure base and is comforted at reunion.",points:["Linked to sensitive, responsive caregiving.","Fewer adjustment problems later.","See the Strange Situation update in s321-attach."],link:L("s321-attach","Attachment")},
  avoidant:{label:"Insecure-avoidant attachment",dx:"Avoidant",line:"Little distress at separation and avoidance of the caregiver at reunion.",points:["Linked to rejecting care.","Table 32-8 describes this type differently; follow the update box.","Not a diagnosis by itself."],link:L("s321-attach","Attachment")},
  ambivalent:{label:"Insecure-resistant (ambivalent) attachment",dx:"Ambivalent/resistant",line:"Clings yet resists comfort and is hard to soothe.",points:["Linked to inconsistent care.","Infant temperament may shape which insecure type appears.","Not a diagnosis by itself."],link:L("s321-attach","Attachment")},
  disorganized:{label:"Disorganized/disoriented attachment",dx:"Disorganized (Main and Solomon, 1990)",line:"Contradictory, confused behavior with no consistent strategy.",points:["Common after abuse or with a frightening caregiver.","Ask about safety in the home.","Added after Ainsworth's three types."],link:L("s321-attach","Attachment")},
  rad:{label:"Reactive attachment disorder",dx:"RAD (DSM-5)",line:"An inhibited, withdrawn child who rarely seeks comfort after insufficient care.",points:["Developmental age at least 9 months.","The DSM-IV inhibited subtype.","Assess for neglect and arrange stable care."],link:L("s321-attach","Attachment")},
  dsed:{label:"Disinhibited social engagement disorder",dx:"DSED (DSM-5)",line:"Overly familiar behavior with unfamiliar adults after insufficient care.",points:["The DSM-IV disinhibited subtype, now a separate disorder.","Can occur even once attachments form.","Assess for neglect and arrange stable care."],link:L("s321-attach","Attachment")},
  deprivation:{label:"Effects of social deprivation",dx:"Deprivation effects (Spitz)",line:"Institutional care with few staff and high turnover delays development.",points:["Delay occurs even with good nutrition.","Development speeds up markedly in adequate foster or adoptive care.","Check for an attachment disorder as well."],link:L("s321-attach","Attachment")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"dev-stage-theories",title:"Piaget and Mahler by age",
 summary:"Section 32.1 uses two stage schemes for the early years: Piaget's cognitive periods and Mahler's separation-individuation. Match the age to each.",
 items:["Piaget (Table 32-5)","Mahler (Table 32-9)","Key sign"],
 rows:[
  ["Birth to 2 months","Sensorimotor","Normal autism","Sleep outweighs waking"],
  ["2 to 5 months","Sensorimotor","Symbiosis","Mother and infant felt as one unit"],
  ["5 to 10 months","Sensorimotor","Differentiation","Turns outward; senses being separate"],
  ["10 to 18 months","Sensorimotor","Practicing","Explores with new mobility"],
  ["18 to 24 months","Sensorimotor","Rapprochement","Goes off and returns for reassurance"],
  ["2 to 5 years","Preoperational (2 to 7)","Object constancy","Soothed that the mother exists when absent"],
  ["7 to 11 years","Concrete operational","(beyond Mahler's scheme)","Logic and conservation"],
  ["11 years on","Formal operational","(beyond Mahler's scheme)","Abstract reasoning"]],
 keys:["**Rapprochement** (18 to 24 months) is the back-and-forth toddler.","**Object constancy** (2 to 5 years) overlaps Piaget's **preoperational** period.","**Conservation** marks the **concrete operational** period."],
 links:[{ch:"ch32-1",sec:"s321-piaget",label:"Piaget's stages"},{ch:"ch32-1",sec:"s321-mahler",label:"Mahler's subphases"}],
 source:"Kaplan & Sadock 12th ed., section 32.1"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"76.0.0",date:"2026-11-12",title:"Section 32.1: Infant, child, and adolescent development",items:[
 {type:"chapter",ch:"ch32-1",text:"New section 32.1, Infant, Child, and Adolescent Development: prenatal development and exposures, infant milestones, language and Piaget, temperament, attachment and Mahler, the toddler, preschool and school years, family factors and divorce, and adolescence from normal turmoil to substance use, violence and exploitation, with 150 clinical cases.",href:"#/c/ch32-1/guide",link:"Open the section"},
 {type:"update",ch:"ch32-1",text:"Updates: the 2022 CDC and AAP milestone checklists and screening ages, alcohol in pregnancy and ND-PAE, DSM-5 attachment disorders, recent US teen birth and Monitoring the Future data, the Dobbs decision, and Philippine laws on newborn screening, early childhood care (RA 12199), sexual consent (RA 11648), bullying and trafficking.",href:"#/c/ch32-1/guide/s321-inf",link:"See the milestone update"},
 {type:"correction",ch:"ch32-1",text:"Corrections: preterm birth is before 37 weeks (the book prints 34), the slow-to-warm-up temperament type, standard Strange Situation patterns (Table 32-8 differs), Baumrind and Maccoby and Martin for parenting styles (the book credits Rutter), and low juvenile sexual reoffending rates.",href:"#/c/ch32-1/guide/s321-attach",link:"See the attachment correction"},
 {type:"feature",text:"New helper, Which attachment pattern or disorder fits?, and a look-alike table of Piaget and Mahler by age.",href:"#/helper/attach321",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "75\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
