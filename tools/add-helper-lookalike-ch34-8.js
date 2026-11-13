// Release 88.0.0: look-alike erikson-freud348, glossary terms, changelog. Run from kaplanstudy.
const fs=require('fs');
const la={id:"erikson-freud348",title:"Erikson's psychosocial stages beside Freud's psychosexual stages",
 summary:"Erikson kept Freud's stages and their zones but added a social crisis and a virtue to each, and three more stages for adult life. The table lines them up as 34.4a and 34.4c describe them.",
 items:["Approximate ages (Table 34-16)","Freud's stage and zone","Erikson's mode or social modality","Virtue"],
 rows:[
  ["Trust vs. mistrust","Birth to about 18 months","Oral (mouth)","Incorporation: to get, then taking and holding on","Hope"],
  ["Autonomy vs. shame and doubt","About 18 months to 3 years","Anal (sphincter and muscle control)","Holding on and letting go","Will"],
  ["Initiative vs. guilt","About 3 to 5 years","Phallic (oedipal)","Intrusive: being on the make","Purpose"],
  ["Industry vs. inferiority","About 5 to 13 years","Latency","The work principle: making things","Competence"],
  ["Identity vs. role confusion","About 13 to 21 years","Genital stage begins at puberty","Fitting earlier roles to the occupations and ideologies of the time","Fidelity"],
  ["Intimacy vs. isolation","About 21 to 40 years","No matching Freudian stage","Commitment to partners and groups despite sacrifice","Love"],
  ["Generativity vs. stagnation","About 40 to 60 years","No matching Freudian stage","Care for the next generation and its institutions","Care"],
  ["Integrity vs. despair","About 60 years to death","No matching Freudian stage","Accepting one's one and only life","Wisdom"]],
 keys:["Erikson's **first four** stages map onto Freud's **oral, anal, phallic and latency** stages; the last three have **no Freudian counterpart**.","Each crisis yields a **virtue**: hope, will, purpose, competence, fidelity, love, care, wisdom.","Freud's genital stage starts at **puberty**, where Erikson places the **identity** crisis."],
 links:[{ch:"ch34-6",sec:"s346-oral",label:"Freud's oral, anal and urethral stages"},{ch:"ch34-6",sec:"s346-phallic",label:"Freud's phallic, latency and genital stages"},{ch:"ch34-8",sec:"s348-early",label:"Erikson's stages 1 to 4"},{ch:"ch34-8",sec:"s348-later",label:"Erikson's stages 5 to 8"}],
 source:"Kaplan & Sadock 12th ed., section 34.4 (Theories of Personality and Psychopathology)"};
let l=fs.readFileSync('data/lookalikes.js','utf8');const lt=l.lastIndexOf('\n];');l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt);fs.writeFileSync('data/lookalikes.js',l);
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms348.json','utf8'));
const end=g.indexOf('\n]);');if(end<0)throw 'gl';if(g.slice(0,end).trimEnd().slice(-1)!==',')g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"88.0.0",date:"2026-11-14",title:"Section 34.4, part 2: Erikson (34.4c)",items:[
 {type:"chapter",ch:"ch34-8",text:"New entry 34.4c, Theories of Personality III: Erik Erikson and the Life Cycle: his life and psychohistories, the epigenetic principle, the eight psychosocial stages with their virtues, the psychopathology Erikson tied to each stage and his approach to treatment, with 43 cases.",href:"#/c/ch34-8/guide",link:"Open 34.4c"},
 {type:"update",ch:"ch34-8",text:"Updates: Erikson's retirement date, later honors and death, Joan Erikson's ninth stage of very old age (1997), and current US suicide rates by age (highest at 85 and older in 2023).",href:"#/c/ch34-8/guide/s348-later",link:"See the updates"},
 {type:"feature",text:"New look-alike table setting Erikson's psychosocial stages beside Freud's psychosexual stages.",href:"#/lookalikes/erikson-freud348",link:"Open the look-alike"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "87\.0\.0"/);if(!m)throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index);fs.writeFileSync('data/changelog.js',c);console.log('ok');
