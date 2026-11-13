// Release 85.0.0: helper mature343, look-alike mh-models343, glossary terms, changelog. Run from kaplanstudy.
const fs=require('fs');
const L=(sec,label)=>({ch:"ch34-3",sec,label});
const helper={id:"mature343",chapter:"ch34-3",title:"Which healthy involuntary mechanism is this?",
 summary:"Section 34.2 describes five mature, involuntary ways of coping with conflict. This helper sorts a coping style you observe into one of them.",
 caution:"A teaching aid. These mechanisms work largely outside awareness, so judge them over time and from behavior, not from one remark, and do not label a patient from a single episode.",
 start:"when",
 nodes:{
  when:{q:"Is the conflict about something happening now, or something still to come?",options:[
   {label:"Something still to come",to:"r:anticipation",note:"The feeling is met ahead of time, in small doses."},
   {label:"Something happening now, or already past",to:"others",note:"The other four mechanisms deal with present conflict."}]},
  others:{q:"Does the person deal with the pain by giving to other people?",options:[
   {label:"Yes: gives others what they themselves wished to receive",to:"r:altruism",note:"Pleasure comes from giving, not from denying the wish."},
   {label:"No",to:"expr",note:"The feeling is handled within the person."}]},
  expr:{q:"What happens to the painful feeling?",options:[
   {label:"It is expressed with humor that faces the pain and harms no one",to:"r:humor",note:"Feeling much while acting little; timing is everything."},
   {label:"It is turned into a creative product of value",to:"r:sublimation",note:"The pain is transformed, not bargained away."},
   {label:"It is held, and gratification is reduced and delayed but not ignored",to:"r:suppression",note:"Stoic patience that keeps the feeling in view."}]}},
 results:{
  anticipation:{label:"Anticipation",dx:"Anticipation",line:"Feeling the distress of an unbearable future event in manageable doses, beforehand.",points:["Examples in the chapter: moderate anxiety before surgery; anticipatory mourning by parents of a child with leukemia.","It helps only in manageable doses."],link:L("s343-mechs","Healthy involuntary mechanisms")},
  altruism:{label:"Altruism",dx:"Altruism",line:"Getting pleasure from giving others what one wished to receive.",points:["Example: a former drinker becomes an Alcoholics Anonymous sponsor.","Its less adaptive look-alike is reaction formation: the same man campaigning to ban alcohol and irritating his friends.","The chapter calls it potentially lifesaving for giver and receiver."],link:L("s343-mechs","Healthy involuntary mechanisms")},
  humor:{label:"Humor",dx:"Humor",line:"Discharging emotion with no discomfort to oneself and no harm to others, while still facing the pain.",points:["Dissociation and slapstick distract from pain; mature humor looks straight at it.","Like a house of cards, it depends on timing."],link:L("s343-mechs","Healthy involuntary mechanisms")},
  sublimation:{label:"Sublimation",dx:"Sublimation",line:"Transforming suffering into something of value.",points:["The chapter's images: an oyster making a pearl from sand, and Beethoven setting Schiller's Ode to Joy in the Ninth Symphony."],link:L("s343-mechs","Healthy involuntary mechanisms")},
  suppression:{label:"Suppression",dx:"Suppression",line:"Handling conflict with stoicism: gratification is reduced and delayed but not ignored.",points:["Empirically, the defense most highly associated with other facets of mental health.","The chapter argues it is more than a conscious strategy; other sources in this app define it as conscious control."],link:L("s343-mechs","Healthy involuntary mechanisms")}}};
let h=fs.readFileSync('data/helpers.js','utf8');const tail=h.lastIndexOf('\n]);');if(tail<0)throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail);fs.writeFileSync('data/helpers.js',h);
const la={id:"mh-models343",title:"Six models of mental health",
 summary:"Section 34.2 compares six ways of defining mental health. They overlap, and each comes with its own limits. The table sets them side by side.",
 items:["What counts as healthy","How it is seen or measured","A limit the chapter notes"],
 rows:[
  ["A. Above normal","An objectively desirable state, better than average; Freud's capacity to work and love","Optimal rather than merely reasonable functioning","The average already contains illness; payers favor the narrower medical model"],
  ["B. Maturity","Healthy adult development","Progress through identity, intimacy, career consolidation, generativity and integrity","Not a race or a ranking; after 50 it depends on a healthy brain"],
  ["C. Positive emotions","Positive emotions that connect us to others (faith, hope, love, joy, gratitude, awe, compassion, forgiveness)","The connecting emotions; brain research the chapter cites","Practical uses are many years away; some of its brain claims are outdated (see the updates)"],
  ["D. Socioemotional intelligence","Skill in perceiving, managing and using emotions in oneself and others","Five criteria; reading nonverbal cues","The number of primary emotions is arguable; the chapter names no measure"],
  ["E. Subjective well-being","Positive contentment, not just the absence of misery","PANAS, Satisfaction with Life Scale, SF-36, experience sampling","Happiness can be illusory or fleeting; happiness scales predicted little in the Study of Adult Development"],
  ["F. Resilience","Getting through stress by adaptive coping, especially mature involuntary mechanisms","Coping style over time, which patients can see on videotape","Involuntary mechanisms distort reality; mature ones are delicate and depend on timing"]],
 keys:["Model A defines health as **above average**, not as the absence of illness.","Model C counts only emotions that **connect** a person to others; Model D warns that calling negative emotions unhealthy is an **oversimplification**.","Model F rests on the **mature involuntary mechanisms**, with **suppression** most linked to the other facets of health."],
 links:[{ch:"ch34-3",sec:"s343-models",label:"Models of mental health"},{ch:"ch34-3",sec:"s343-sei",label:"Comparing Models C and D"},{ch:"ch34-3",sec:"s343-resil",label:"Comparing Models E and F"}],
 source:"Kaplan & Sadock 12th ed., section 34.2 (Normality and Mental Health)"};
let l=fs.readFileSync('data/lookalikes.js','utf8');const lt=l.lastIndexOf('\n];');l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt);fs.writeFileSync('data/lookalikes.js',l);
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms343.json','utf8'));
const end=g.indexOf('\n]);');if(end<0)throw 'gl';if(g.slice(0,end).trimEnd().slice(-1)!==',')g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"85.0.0",date:"2026-11-13",title:"Section 34.2: Normality and Mental Health",items:[
 {type:"chapter",ch:"ch34-3",text:"New entry, Normality and Mental Health: what mental health is beyond the absence of illness, and six models of it, from above normal and maturity to positive emotions, socioemotional intelligence, subjective well-being and resilience, with 51 cases.",href:"#/c/ch34-3/guide",link:"Open Normality and Mental Health"},
 {type:"update",ch:"ch34-3",text:"Updates: Kanner described autism in 11 children (not in his son), the first brain reward study was published in 1954, the triune brain idea is no longer accepted, von Economo neurons occur in macaques, where mirror neurons were found, and the heritability of well-being (about a third).",href:"#/c/ch34-3/guide/s343-posev",link:"See the updates"},
 {type:"feature",text:"New helper for telling the five healthy involuntary coping mechanisms apart, and a look-alike table of the six models of mental health.",href:"#/helpers/mature343",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "84\.0\.1"/);if(!m)throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index);fs.writeFileSync('data/changelog.js',c);console.log('ok');
