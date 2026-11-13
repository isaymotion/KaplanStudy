// Release 86.0.0: helper cbs345, look-alike animal-models344, glossary terms, changelog. Run from kaplanstudy.
const fs=require('fs');
const L=(sec,label)=>({ch:"ch34-5",sec,label});
const helper={id:"cbs345",chapter:"ch34-5",title:"Which cultural syndrome does this picture suggest?",
 summary:"Section 34.3b describes four syndromes long called culture-bound. This helper sorts a presentation into one of them from its main feature and setting.",
 caution:"A teaching aid, not a diagnosis. Ask the patient and family how they understand the problem, screen for suicide and violence risk, and look for a co-occurring psychiatric or medical disorder before settling on a cultural explanation.",
 start:"core",
 nodes:{
  core:{q:"What stands out most?",options:[
   {label:"A sudden outburst of violence",to:"r:amok",note:"A violent frenzy points to amok."},
   {label:"A brief attack of shouting, crying, trembling or loss of control after upsetting news",to:"r:ataque",note:"An acute emotional attack tied to a family event fits ataque de nervios."},
   {label:"A change of identity attributed to a spirit or deity",to:"r:possess",note:"An outside identity taking over suggests possession trance."},
   {label:"Long-standing fatigue, weakness, poor concentration and vexation",to:"r:shenjing",note:"A gradual, chronic picture of exhaustion fits shenjing shuairuo."}]}},
 results:{
  amok:{label:"Amok",dx:"Amok",line:"A dissociative episode: brooding after a perceived insult, then a sudden homicidal frenzy, ending in stupor or sleep with amnesia.",points:["The term comes from Malaysia; similar patterns are reported in Laos, the Philippines, Papua New Guinea, Polynesia, Puerto Rico and among the Navajo.","The chapter reports it mainly in men; survivors in Malaysia were often diagnosed with schizophrenia.","DSM-5 no longer lists amok among its cultural concepts of distress (see the update)."],link:L("s345-amok","Amok")},
  ataque:{label:"Ataque de nervios",dx:"Ataque de nervios",line:"An attack of nerves, mainly reported among Latinos from the Caribbean, set off by a sudden upsetting event involving someone close.",points:["Uncontrollable shouting, crying, trembling and heat rising from the chest, sometimes aggression or dissociation.","Unlike panic disorder, most people feel better or relieved afterward, and the attack follows a clear trigger.","Strongly linked to suicidal ideation: make sure everyone is safe first."],link:L("s345-ataque","Ataque de nervios")},
  possess:{label:"Possession syndrome",dx:"Possession syndrome (involuntary possession trance)",line:"An involuntary, distressing trance in which a spirit identity seems to take over, described in India and Sri Lanka.",points:["Usually starts with subacute conflict or stress; women outnumber men about 3 to 1; onset is usually between 15 and 35.","Voluntary, normative possession in religious life is not a disorder.","ICD-11 now has possession trance disorder (6B63) (see the update)."],link:L("s345-possess","Possession syndrome")},
  shenjing:{label:"Shenjing shuairuo",dx:"Shenjing shuairuo",line:"Weakness of the nervous system: the Chinese form of neurasthenia, with a gradual onset over months to years.",points:["Fatigue, weakness, poor concentration and memory, sleep problems, headaches and fan nao (troubled vexation).","Often follows persistent work, family or social stress that is hard to escape.","Neurasthenia is not a category in DSM or ICD-11 (see the update)."],link:L("s345-shenjing","Shenjing shuairuo")}}};
let h=fs.readFileSync('data/helpers.js','utf8');const tail=h.lastIndexOf('\n]);');if(tail<0)throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail);fs.writeFileSync('data/helpers.js',h);
const la={id:"animal-models344",title:"Animal models of psychopathology",
 summary:"Section 34.3a describes several ways researchers produced abnormal states in animals or volunteers to model human disorders. The table sets the main paradigms side by side.",
 items:["What was done","What was seen","Human condition it was used to model"],
 rows:[
  ["Experimental neurosis (Pavlov)","Dogs learned to tell a circle from an ellipse, then the shapes were made more and more alike","Severe, lasting agitation","Neurosis and anxiety"],
  ["Learned helplessness (Seligman)","Dogs received shocks they could not escape","They stopped trying to escape, and helplessness and apathy spread to other settings","Depression; the chapter calls it controversial, and its authors revised it in 2016 (see the update)"],
  ["Social isolation (Harlow)","Rhesus infants reared without a bond to a mother or peer","Self-clasping, fearfulness and abnormal social behavior; little recovery after long total isolation","Effects of the early social environment; peer therapy (Suomi) suggested some deficits can be reversed"],
  ["Separation","An existing bond with the caretaker is broken","Protest, then despair within about 48 hours; some show signs like those of depressed patients","Depression and anxiety"],
  ["Drug-induced syndromes","Reserpine, which depletes norepinephrine, or catecholamine-depleting drugs during separation","Behavior resembling major depressive disorder, reversed by antidepressants","Depression; the chapter calls such models too simple"],
  ["Sensory deprivation (Hebb)","Volunteers had sight, hearing and touch cut off for up to 7 days","More suggestibility; in some, anxiety, body illusions and vivid imagery","Brainwashing and states resembling psychosis"]],
 keys:["**Isolation** means a bond never forms; **separation** breaks a bond that already exists.","**Learned helplessness** and **separation** were both used as models of **depression**.","Animal findings stay **animal findings**: the chapter links them to people only as possibilities."],
 links:[{ch:"ch34-4",sec:"s344-primate",label:"Primate development and deprivation"},{ch:"ch34-4",sec:"s344-expdis",label:"Experimental disorders"},{ch:"ch34-4",sec:"s344-sensdep",label:"Sensory deprivation"}],
 source:"Kaplan & Sadock 12th ed., section 34.3 (Contributions from the Sociocultural Sciences)"};
let l=fs.readFileSync('data/lookalikes.js','utf8');const lt=l.lastIndexOf('\n];');l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt);fs.writeFileSync('data/lookalikes.js',l);
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms3445.json','utf8'));
const end=g.indexOf('\n]);');if(end<0)throw 'gl';if(g.slice(0,end).trimEnd().slice(-1)!==',')g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"86.0.0",date:"2026-11-13",title:"Section 34.3: Contributions from the Sociocultural Sciences (34.3a and 34.3b)",items:[
 {type:"chapter",ch:"ch34-4",text:"New entry 34.3a, Sociocultural Sciences I: Sociobiology and Ethology: evolution and behavior, twins reared apart, Lorenz, Tinbergen and von Frisch, primate deprivation studies, experimental disorders and sensory deprivation, with 35 cases.",href:"#/c/ch34-4/guide",link:"Open 34.3a"},
 {type:"chapter",ch:"ch34-5",text:"New entry 34.3b, Sociocultural Sciences II: Transcultural Psychiatry and Culture-Bound Syndromes: the cultural formulation, migration and acculturation, ethnic differences and disparities in US care, research issues, and amok, ataque de nervios, possession syndrome and shenjing shuairuo, with 72 cases.",href:"#/c/ch34-5/guide",link:"Open 34.3b"},
 {type:"update",ch:"ch34-4",text:"Updates: the 1973 prize was the Nobel Prize in Physiology or Medicine, fifty years of twin studies (Polderman 2015), the executive monkey study did not hold up, learned helplessness revised, and brainwashing fears came from the Korean War.",href:"#/c/ch34-4/guide/s344-ethol",link:"See the updates"},
 {type:"update",ch:"ch34-5",text:"Updates: the Cultural Formulation Interview in DSM-5 and DSM-5-TR, cultural concepts of distress replacing culture-bound syndromes, possession trance disorder in ICD-11, neurasthenia in current classifications, and the name of the National Comorbidity Survey.",href:"#/c/ch34-5/guide/s345-cbs",link:"See the updates"},
 {type:"feature",text:"New helper for telling four cultural syndromes apart, and a look-alike table of animal models of psychopathology.",href:"#/helpers/cbs345",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "85\.0\.0"/);if(!m)throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index);fs.writeFileSync('data/changelog.js',c);console.log('ok');
