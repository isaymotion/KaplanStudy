// Release 90.0.0: look-alike psychosis-terms35, glossary terms, changelog. Run from kaplanstudy. (No helper: a history chapter has no decision path.)
const fs=require('fs');
const la={id:"psychosis-terms35",title:"Early names for psychosis and mood disorder",
 summary:"The 19th-century descriptions that led to schizophrenia and bipolar disorder, side by side, as Chapter 35 tells them, with the corrections in its update boxes.",
 items:["Who and when","What it described","What it became"],
 rows:[
  ["Démence précoce","Morel, 1852","Deteriorating illness starting in adolescence; probably the first formal case report of schizophrenic psychosis","Kraepelin's dementia praecox, then schizophrenia"],
  ["Folie circulaire","Jean-Pierre Falret (the chapter prints Jules Falret), presented in full 1854","Alternating mania and melancholia","Bipolar disorder"],
  ["Folie à double forme","Baillarger, 1854","Mania and depression in one illness; priority disputed with Falret","Bipolar disorder"],
  ["Catatonia","Kahlbaum, 1874","One of the earliest medical accounts of catatonia","Later grouped with dementia praecox"],
  ["Cyclothymia","Kahlbaum, 1882","Mania and depression as stages of one illness","Mood disorder concepts"],
  ["Dementia praecox","Kraepelin","Early onset, long deteriorating course, hallucinations and delusions","Renamed schizophrenia"],
  ["Manic-depressive psychosis","Kraepelin","Episodes with normal function between them","Bipolar and other mood disorders"],
  ["Schizophrenia","Bleuler","Splits between thought, emotion and behavior; the four As; deterioration not required","Today's term"]],
 keys:["**Morel** (1852) coined démence précoce; **Kraepelin** turned it into **dementia praecox**; **Bleuler** renamed it **schizophrenia**.","**Kraepelin** split the psychoses by **course**: deteriorating versus **episodic**.","Folie circulaire was **Jean-Pierre Falret's**; his son **Jules** is known for **folie à deux**."],
 links:[{ch:"ch35",sec:"s35-19a",label:"Asylum laws, reformers and the first descriptions of psychosis"},{ch:"ch35",sec:"s35-19b",label:"Kraepelin, Bleuler and Freud"}],
 source:"Kaplan & Sadock 12th ed., Chapter 35 (A Brief History of Psychiatry); Pichot 2004 for Falret"};
let l=fs.readFileSync('data/lookalikes.js','utf8');const lt=l.lastIndexOf('\n];');l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt);fs.writeFileSync('data/lookalikes.js',l);
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms35.json','utf8'));
const end=g.indexOf('\n]);');if(end<0)throw 'gl';if(g.slice(0,end).trimEnd().slice(-1)!==',')g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"90.0.0",date:"2026-11-14",title:"Chapter 35, A Brief History of Psychiatry: the book is complete",items:[
 {type:"chapter",ch:"ch35",text:"New Chapter 35, A Brief History of Psychiatry: from ancient India and Greece through asylums, moral treatment, Kraepelin, Bleuler and Freud, the first psychiatric drugs, deinstitutionalization and the road to DSM-III, plus the people and events of Table 35-1, with 77 cases. Every chapter of the book is now in the app.",href:"#/c/ch35/guide",link:"Open Chapter 35"},
 {type:"correction",ch:"ch35",text:"Corrections: Pussin removed the chains at the Bicêtre in 1797 (Pinel and Pussin at the Salpêtrière in 1800); the Utica asylum opened in 1843; folie circulaire was Jean-Pierre Falret's; Edinburgh phrenology was 19th-century; the unitary view of mental illness was Karl Menninger's.",href:"#/c/ch35/guide/s35-19a",link:"See the corrections"},
 {type:"update",ch:"ch35",text:"Updates: the 1963 community mental health centers law and NIMH, the questions raised since 2019 about the Rosenhan study, and ICD-11 and DSM-5-TR.",href:"#/c/ch35/guide/s35-class",link:"See the updates"},
 {type:"feature",text:"New look-alike: early names for psychosis and mood disorder, from démence précoce to schizophrenia.",href:"#/lookalikes/psychosis-terms35",link:"Open the look-alike"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "89\.0\.0"/);if(!m)throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index);fs.writeFileSync('data/changelog.js',c);console.log('ok');
