// Builds updwork/learn-ch29-1-rest.js and learn-ch29-3-rest.js (domains, pretest, checks, visuals). Needs the checks files from the agent.
const fs=require('fs');const U='/home/claude/updwork/';
const ids=c=>fs.readFileSync('/tmp/'+c+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor(i*a.length/k)]);return [...new Set(o)]};
const dom1={};ids('ch29-1').forEach(id=>{const p=id.slice(5,7);dom1[id]={dd:'D',ds:'C',dl:'B',bg:'C',bc:'C',bm:'C',bb:'B',bl:'B',bt:'E'}[p];});
dom1['c291-dd06']='G';dom1['c291-dd07']='G';dom1['c291-bb04']='A';dom1['c291-ds02']='F';dom1['c291-ds03']='F';dom1['c291-ds04']='E';dom1['c291-ds05']='E';dom1['c291-dl02']='F';dom1['c291-dl03']='F';dom1['c291-bm03']='E';
const dom3={};ids('ch29-3').forEach(id=>{const p=id.slice(5,7);dom3[id]={eu:'G',ep:'G',er:'E'}[p];});
dom3['c293-er01']='C';dom3['c293-er04']='G';dom3['c293-er05']='F';
const V1=[{sec:'s291-cx',block:{type:'heatmap',title:'Visual summary: the four complicated grief patterns',cols:['Chronic','Hypertrophic','Delayed','Traumatic bereavement'],
 rows:[{label:'Extraordinarily intense reactions',v:[0,3,0,3]},{label:'Long course',v:[3,2,2,3]},{label:'Bitterness and idealization of the deceased',v:[3,0,0,0]},{label:'Grief absent, inhibited or avoided',v:[0,0,3,2]},{label:'Withdrawal',v:[0,2,0,1]},{label:'Intrusive images of the death',v:[0,0,0,3]},{label:'Most often after a sudden, unexpected death',v:[0,3,0,0]}],
 legend:['Not described','Minor','Common','Defining'],note:'A teaching summary of the types table above. Chronic grief is the most common type. Traumatic bereavement combines chronic and hypertrophic features. These are descriptive patterns in DSM-5; prolonged grief disorder (DSM-5-TR, ICD-11) is in the update box.'}}];
const V3=[{sec:'s293-pas',block:{type:'chronology',title:'Assisted dying: key dates (corrected)',events:[
 {year:1990,label:'Kevorkian\'s first publicized assisted death (the book prints 1989)'},
 {year:1994,label:'Oregon voters pass the Death with Dignity Act'},
 {year:1997,label:'Oregon\'s Act takes effect; US Supreme Court finds no constitutional right to a physician\'s aid in dying'},
 {year:1999,label:'Kevorkian convicted of second-degree murder'},
 {year:2001,label:'Attorney General Ashcroft moves against Oregon prescribers'},
 {year:2006,label:'Gonzales v. Oregon: the Supreme Court sides with Oregon\'s law'},
 {year:2007,label:'Kevorkian paroled (the book prints 2006)'},
 {year:2008,label:'Washington passes its law by ballot'},
 {year:2009,label:'Baxter v. Montana: allowed by court ruling, not statute'},
 {year:2013,label:'Vermont passes its law (the book prints 2011)'},
 {year:2016,label:'Canada legalizes medical assistance in dying'},
 {year:2019,label:'World Medical Association reaffirms its opposition (Tbilisi)'},
 {year:2023,label:'Oregon and Vermont drop their residency requirements'},
 {year:2026,label:'New York and Illinois laws take effect; Canada tables Bill C-41; England and Wales bill defeated'}],
 note:'Dates follow the correction and update boxes in this section. Laws change often; check current local law.'}}];
for(const [c,dom,V] of [['ch29-1',dom1,V1],['ch29-3',dom3,V3]]){const a=ids(c);
 fs.writeFileSync(U+'learn-'+c+'-rest.js','('+JSON.stringify({domains:dom,pretest:pick(a,8),checks:eval(fs.readFileSync(U+'learn-'+c+'-checks.js','utf8')),visuals:V},null,1)+')\n');
 console.log(c,'pretest',pick(a,8).join(' '));}
