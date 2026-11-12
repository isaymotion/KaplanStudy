// Release 77.0.0: helper midlife322, look-alike adult-erikson, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(ch,sec,label)=>({ch,sec,label});
const helper={id:"midlife322",chapter:"ch32-2",title:"Midlife transition, crisis or something to treat?",
 summary:"Sort a middle-aged person's distress or sudden change into the patterns section 32.2 describes, and spot when it needs clinical assessment.",
 caution:"A teaching aid. Severe depression, heavy drinking or drug use, or any suicidal thinking needs a full assessment and treatment whatever the life stage; do not label it a normal midlife phase.",
 start:"what",
 nodes:{
  what:{q:"What best describes what is happening?",options:[
   {label:"Taking stock of life and goals, with inner turmoil but no rash moves",to:"r:transition",note:"Reappraisal prompted by a sense that life is finite."},
   {label:"Sudden, drastic changes in work or marriage, made impulsively",to:"risk",note:"Impulsive action marks a true crisis."},
   {label:"Low mood starting as the youngest child prepares to leave home",to:"r:emptynest",note:"Timing tied to the child's departure."},
   {label:"Body changes of the menopausal years, or lower sexual function in a man",to:"r:climac",note:"Biologic change of middle adulthood."}]},
  risk:{q:"Are there signs of severe depression, more alcohol or drug use, or thoughts of suicide?",options:[
   {label:"Yes",to:"r:assess",note:"These are clinical problems, not a phase."},
   {label:"No",to:"r:crisis",note:"Impulsive change without these signs."}]}},
 results:{
  transition:{label:"Midlife transition",dx:"Normal midlife transition",line:"An intense reappraisal of life that stays mostly in thought.",points:["Most people keep their marriages and careers.","Changes, even a divorce or a new job, are made thoughtfully.","Support reflection; no specific treatment is needed."],link:L("ch32-2","s322-climac","Midlife transition and crisis")},
  crisis:{label:"True midlife crisis",dx:"Midlife crisis",line:"A revolutionary turning point with a flurry of impulsive actions.",points:["Pleas to slow down usually go unheard.","The therapist often helps those left behind cope.","Keep watching for depression or substance use."],link:L("ch32-2","s322-climac","Midlife transition and crisis")},
  emptynest:{label:"Empty-nest syndrome",dx:"Empty-nest syndrome",line:"Depression in some parents as the youngest child is about to leave.",points:["Most parents feel relief rather than stress.","Assess for a depressive disorder if symptoms are marked or lasting.","Link to s322-climac."],link:L("ch32-2","s322-climac","Empty-nest syndrome")},
  climac:{label:"Climacterium",dx:"Climacterium",line:"Declining biologic function in middle age; the menopausal period in women, with no clear boundary in men.",points:["In women estrogen falls and menses change, then stop.","In men, lower testosterone may reduce erections and sexual activity.","Check for medical causes of new symptoms."],link:L("ch32-2","s322-climac","The climacterium")},
  assess:{label:"Assess for a psychiatric disorder",dx:"Needs clinical assessment",line:"Severe depression or more alcohol or drug use can come with a midlife crisis but need treatment in their own right.",points:["Screen for depression and suicide risk.","Ask about alcohol and drug use.","Treat the disorder; do not call it a normal phase."],link:L("ch32-2","s322-climac","Midlife transition and crisis")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"adult-erikson",title:"Erikson's adult stages",
 summary:"Sections 32.1 to 32.3 follow Erikson's last stages from adolescence to old age. Match each crisis to its age and to a good and a poor outcome.",
 items:["Stage","Good outcome","Poor outcome"],
 rows:[
  ["Adolescence","Identity versus role confusion","A firm sense of who one is","Identity diffusion"],
  ["Young adulthood","Intimacy versus isolation","Committed love and close bonds","Loneliness and shallow relationships"],
  ["Middle adulthood","Generativity versus stagnation","Guiding the next generation, creating, helping others","Self-centered stagnation, poorly prepared for old age"],
  ["Late adulthood","Integrity versus despair","Life review that ends in peace and wisdom","Bitterness that life was too short to live over"]],
 keys:["Having children does **not** ensure **generativity**; childless adults can be generative.","The **life review** is the route to **integrity**.","Each stage builds on the one before it."],
 links:[{ch:"ch32-1",sec:"s321-adnorm",label:"Identity in adolescence"},{ch:"ch32-2",sec:"s322-midtr",label:"Generativity in midlife"},{ch:"ch32-3",sec:"s323-theory",label:"Integrity versus despair"}],
 source:"Kaplan & Sadock 12th ed., sections 32.1 to 32.3"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"77.0.0",date:"2026-11-12",title:"Sections 32.2 and 32.3: Adulthood and Old Age",items:[
 {type:"chapter",ch:"ch32-2",text:"New section 32.2, Adulthood: young adult tasks, work, friendship, marriage and couples therapy, parenthood and adoption, midlife theories, the climacterium, midlife transition and crisis, the empty nest, divorce and custody, and adult maturity, with 71 clinical cases.",href:"#/c/ch32-2/guide",link:"Open 32.2"},
 {type:"chapter",ch:"ch32-3",text:"New section 32.3, Old Age: developmental tasks, demographics, biology of aging, life expectancy, exercise and diet, theories of aging, ageism, chronic conditions, transference, retirement and long-term care, with 55 clinical cases.",href:"#/c/ch32-3/guide",link:"Open 32.3"},
 {type:"content",ch:"ch32-1",text:"Section 32.1 now ends with the rest of the trafficking paragraph and a new short section on tattoos and body piercing in adolescents, with 3 new cases.",href:"#/c/ch32-1/guide/s321-body",link:"See body modification"},
 {type:"update",ch:"ch32-2",text:"Updates: Obergefell, the Respect for Marriage Act and the 2025 Davis petition; the status of divorce bills in the Philippines; and Tan-Andal v. Andal (2021), which made psychological incapacity a legal rather than medical concept.",href:"#/c/ch32-2/guide/s322-divorce",link:"See the Philippine updates"},
 {type:"update",ch:"ch32-3",text:"Updates: 2024 Census and NCHS figures (life expectancy 79.0), the WHO Global report on ageism, what Medicare covers today (mental health, prevention, nursing homes), and US and Philippine retirement and senior-citizen benefits.",href:"#/c/ch32-3/guide/s323-lifeexp",link:"See current life expectancy"},
 {type:"correction",ch:"ch32-2",text:"Corrections: 16 states, not 19, still banned interracial marriage when Loving v. Virginia was decided; NCHS 2013 life expectancy was 76.4 for men and 81.2 for women (the book prints 77.4 and 82.2).",href:"#/c/ch32-2/guide/s322-marr",link:"See the marriage section"},
 {type:"feature",text:"New helper, Midlife transition, crisis or something to treat?, and a look-alike table of Erikson's adult stages.",href:"#/helper/midlife322",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "76\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
