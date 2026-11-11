// Release 73.0.0: helper griefdx29, look-alikes eol-acts and grief-types, link ch29-1 to grief-depression, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch29-1",sec,label});
const helper={id:"griefdx29",chapter:"ch29-1",title:"After a loss: which picture fits?",
 summary:"Work through the main questions in Chapter 29.1 to tell normal grief from anticipatory grief, anniversary reactions, the complicated grief types, major depression and PTSD after a violent death.",
 caution:"A teaching aid for the patterns Chapter 29.1 describes. It does not diagnose. Prolonged grief disorder now has its own criteria in DSM-5-TR (12 months after the death in adults) and ICD-11 (6 months); see the update boxes. Always ask about suicidal thoughts.",
 start:"when",
 nodes:{
  when:{q:"Has the death already happened?",options:[
   {label:"No: a loved one is dying slowly",to:"r:antic",note:"Grief can start before the death."},
   {label:"Yes",to:"dep",note:"The questions below apply after a death."}]},
  dep:{q:"Are there worthlessness, active suicidal thoughts, marked psychomotor slowing, or low mood that does not depend on reminders?",options:[
   {label:"Yes, one or more",to:"r:mdd",note:"These features are rare in ordinary grief."},
   {label:"No",to:"trauma",note:"The core depressive red flags are absent."}]},
  trauma:{q:"Was the death violent or unnatural (homicide, suicide, terrorism), with horror, intrusive images or hyperarousal?",options:[
   {label:"Yes",to:"r:ptsd",note:"Violent deaths set off PTSD far more often than natural deaths."},
   {label:"No",to:"shape",note:"No trauma picture is present."}]},
  shape:{q:"What is the grief like?",options:[
   {label:"Pangs tied to reminders, with warm memories and slow easing",to:"r:normal",note:"Reminder-bound pangs with positive feelings fit typical grief."},
   {label:"A brief return of grief around a date or age milestone",to:"r:anniv",note:"Dates and milestones can rekindle grief."},
   {label:"Hardly any grief when mourning was expected, with lasting denial",to:"r:delayed",note:"Grief is absent or held back."},
   {label:"Extraordinarily intense after a sudden death; usual coping fails",to:"r:hyper",note:"Intensity after a sudden loss points here."},
   {label:"Long-lasting, with bitterness and an idealized picture of the dead person",to:"r:chronic",note:"Bitterness and idealization over a long course."}]}},
 results:{
  antic:{label:"Anticipatory grief",dx:"Grief before the death",line:"Grief that starts during a loved one's slow dying.",points:["It may soften the later loss.","It can bring early separation and withdrawal from the dying person.","It does not reliably lessen bereavement afterwards."],link:L("s291-grief","Anticipatory grief")},
  mdd:{label:"Consider major depressive disorder",dx:"Major depression after a loss",line:"DSM-5 removed the bereavement exclusion, so depression can be diagnosed after a death.",points:["Clues: feeling worthless or bad, suicidal ideation, retardation, mood independent of reminders, past or family history of depression.","Active suicidal thinking needs psychiatric assessment now.","Major depression in a dying or bereaved person is treatable; do not call it normal."],link:L("s291-cx","Bereavement versus major depression")},
  ptsd:{label:"Traumatic distress after a violent death",dx:"Screen for PTSD",line:"Homicide, suicide and terrorism deaths raise the risk of PTSD in survivors.",points:["Grief mixes with themes of violence, victimization and volition.","Treat the traumatic distress first.","Medication, psychotherapy and self-help groups all have a role."],link:L("s291-dep","Bereavement and PTSD")},
  normal:{label:"Normal grief",dx:"Uncomplicated bereavement",line:"Grief that comes in reminder-bound waves and slowly eases.",points:["Loneliness after losing a spouse can last years.","Social timetables are not clinical cutoffs.","A mild sleep aid may sometimes help; antidepressants are rarely needed."],link:L("s291-grief","Normal grief")},
  anniv:{label:"Anniversary reaction",dx:"Rekindled grief",line:"Grief that returns around the death date, holidays, birthdays or the age at which the person died.",points:["Usually milder and briefer each year.","May last hours or days.","Expected and usually self-limited."],link:L("s291-grief","Anniversary reactions")},
  delayed:{label:"Delayed grief",dx:"Complicated grief: delayed type",line:"Grief absent or inhibited when open mourning would be expected.",points:["Lasting denial is typical.","The course may later bring anger and guilt.","Follow up: complicated grief can herald major depression."],link:L("s291-cx","Types of complicated grief")},
  hyper:{label:"Hypertrophic grief",dx:"Complicated grief: hypertrophic type",line:"Unusually intense grief, most often after a sudden, unexpected death.",points:["Usual coping does not ease the anxiety.","Withdrawal is common and family stability may suffer.","It often lasts long but eases over time."],link:L("s291-cx","Types of complicated grief")},
  chronic:{label:"Chronic grief",dx:"Complicated grief: chronic type (consider prolonged grief disorder)",line:"The most common type of complicated grief.",points:["Bitterness and idealization of the dead person.","More likely after a close, ambivalent or dependent bond, or with little support.","If yearning or preoccupation persists with impairment 12 months after the death (DSM-5-TR adults), check the prolonged grief disorder criteria."],link:L("s291-cx","Types of complicated grief")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
// look-alikes
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la1={id:"eol-acts",title:"End-of-life acts that are easily confused",
 summary:"Chapter 29.3 separates several acts at the end of life. Each row gives what the act is and who decides; the positions held on each are contested and are attributed in the chapter.",
 items:["What happens","Who acts and who decides","Key distinction"],
 rows:[
  ["Passive euthanasia","**Heroic** life-saving measures are **withheld**","The care team, ideally at the patient's or proxy's request","Nothing is done to cause death; treatment is not started"],
  ["Withdrawing treatment at a competent patient's request","Life support is **stopped** because the patient refuses it","A **mentally competent** patient decides; the doctor must honor it","The WMA treats honoring a refusal as **not unethical**"],
  ["Palliative treatment that may shorten life","Drugs are given to **relieve suffering**; death may follow","The physician, with consent","Death is **not the goal** and is **not intended**"],
  ["Physician-assisted suicide","The physician supplies the means, such as a **lethal prescription**","The **patient** performs the final act","Legal only where a law or court allows it (see the update boxes)"],
  ["Voluntary active euthanasia","The physician **deliberately ends** the patient's life at the patient's request","The **physician** performs the act","The book's US bodies (AMA, APA) call it illegal and unethical"],
  ["Involuntary euthanasia","Life is ended **without or against** the patient's consent","Someone other than the patient decides","Condemned in the chapter, including by the American Association of Suicidology"]],
 keys:["Ask **who performs the final act**: the patient (assisted suicide) or the physician (active euthanasia).","Ask **whether death is intended**: relief of suffering that may shorten life is not assisted suicide.","Law differs by country and state: see the update boxes for the United States, Canada, the United Kingdom and the Philippines."],
 links:[{ch:"ch29-3",sec:"s293-euth",label:"Types of euthanasia"},{ch:"ch29-3",sec:"s293-pas",label:"Physician-assisted suicide"},{ch:"ch29-3",sec:"s293-req",label:"Responding to requests"}],
 source:"Kaplan & Sadock 12th ed., section 29.3"};
const la2={id:"grief-types",title:"Normal and complicated grief patterns",
 summary:"The grief patterns described in Chapter 29.1, side by side.",
 items:["Core features","Typical setting","Watch for"],
 rows:[
  ["Normal grief","Reminder-bound **pangs**, positive feelings alongside, slow easing","Any loss","**Loneliness** can last years; not a disorder"],
  ["Anticipatory grief","Grief **before** the death","A loved one's **slow dying**","Early **withdrawal** from the dying person"],
  ["Anniversary reaction","Grief **rekindled** for hours or days","Death date, holidays, reaching the **age** of the deceased","Usually milder each year"],
  ["Chronic grief","The **most common** complicated type; **bitterness**, **idealization**","Close, ambivalent or **dependent** bond; little support","Prolonged grief disorder (see the update box)"],
  ["Hypertrophic grief","**Extraordinarily intense**; coping fails; withdrawal","**Sudden, unexpected** death","Family disruption"],
  ["Delayed grief","Grief **absent or inhibited**; lasting **denial**","Expected mourning does not appear","Later **anger and guilt**"],
  ["Traumatic bereavement","Chronic **and** hypertrophic: yearning, **intrusive images**, avoidance plus preoccupation","Past psychiatric illness; a bond that defined the survivor's identity","PTSD after violent deaths"]],
 keys:["Complicated grief types are **descriptive** in DSM-5 and may herald **major depression**.","Worthlessness, suicidal ideation and retardation point to **major depression**, not grief.","DSM-5-TR and ICD-11 now name **prolonged grief disorder**; see the update box in s291-cx."],
 links:[{ch:"ch29-1",sec:"s291-grief",label:"Normal grief"},{ch:"ch29-1",sec:"s291-cx",label:"Complicated grief"},{ch:"ch29-1",sec:"s291-dep",label:"Grief, depression and PTSD"}],
 source:"Kaplan & Sadock 12th ed., section 29.1"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la1,null,2)+',\n'+JSON.stringify(la2,null,2)+l.slice(lt);
const anchor='{ ch: "ch20", sec: "s20-bereave", label: "Bereavement as a condition of clinical attention" }';
if(!l.includes(anchor)) throw 'anchor';
l=l.replace(anchor,anchor+',\n      { ch: "ch29-1", sec: "s291-cx", label: "Bereavement versus major depression (Table 29-2)" }');
fs.writeFileSync('data/lookalikes.js',l);
// changelog
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"73.0.0",date:"2026-11-11",title:"Chapter 29.1 and 29.3: Death, bereavement, euthanasia and assisted suicide",items:[
 {type:"chapter",ch:"ch29-1",text:"New section 29.1, Death, Dying, and Bereavement: defining death and brain death (Table 29-1), the psychological autopsy, Kübler-Ross stages, how children and adults face death, normal and anticipatory grief, complicated grief (Tables 29-2 and 29-3), grief versus depression and PTSD, phases of grief (Table 29-4), bereavement across the life cycle and grief therapy, with 56 clinical cases.",href:"#/c/ch29-1/guide",link:"Open the section"},
 {type:"chapter",ch:"ch29-3",text:"New section 29.3, Euthanasia and Physician-Assisted Suicide: types of euthanasia, the arguments on each side, positions of professional bodies, Kevorkian, Oregon's law (Table 29-13) and the AMA's eight-step approach (Table 29-14), with 19 clinical cases. Every position is attributed to whoever holds it.",href:"#/c/ch29-3/guide",link:"Open the section"},
 {type:"correction",ch:"ch29-3",text:"Correction boxes fix dates the book prints wrongly: Kevorkian's first assisted death (1990) and parole (2007), Vermont's law (2013), and Montana's route (a 2009 court ruling, not a statute). Cards use the corrected facts.",href:"#/c/ch29-3/guide/s293-pas",link:"See the corrections"},
 {type:"update",ch:"ch29-1",text:"Updates: the 2023 US brain death guideline for adults and children, the paused revision of the Uniform Determination of Death Act, prolonged grief disorder in DSM-5-TR and ICD-11, and the 2-month figures in Table 29-2.",href:"#/c/ch29-1/guide/s291-def",link:"See the brain death update"},
 {type:"update",ch:"ch29-3",text:"Updates on current law: aid in dying in 12 US states and DC by statute plus Montana; Oregon's 2023 removal of residency and its 2025 figures; Canada's MAID and Bill C-41 on mental illness; the England and Wales and Scotland bills; and the Philippines (Revised Penal Code art. 253, Mental Health Act advance directives).",href:"#/c/ch29-3/guide/s293-euth",link:"See the international update"},
 {type:"feature",text:"New helper, After a loss: which picture fits?, and look-alike tables of grief patterns and of end-of-life acts that are easily confused. The grief and depression look-alike now links to section 29.1.",href:"#/helper/griefdx29",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "72\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
