// Builds updwork/learn-ch33-5-rest-base.js and learn-ch33-6-rest-base.js (domains, pretest, visuals).
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const J={
 'ch33-5':{m:{hm:'A',ha:'C',hg:'A',dh:'A',es:'C',ty:'C',gh:'A',pr:'C',ot:'A'},
  visuals:[{sec:'s335-estro',block:{type:'chronology',title:'Visual summary: how the hormone evidence has moved since the chapter',events:[
   {year:1987,label:'APA task force: the dexamethasone suppression test is too insensitive to diagnose depression'},
   {year:2003,label:'WHIMS: estrogen plus progestin doubles probable dementia in women 65 or older'},
   {year:2004,label:'WHI estrogen-alone trial stopped; no reduction in dementia'},
   {year:2019,label:'Global consensus: testosterone for women only for hypoactive sexual desire disorder after menopause'},
   {year:2020,label:'SNIFF trial: intranasal insulin gives no benefit in Alzheimer disease'},
   {year:2022,label:'USPSTF recommends against hormone therapy to prevent chronic conditions'},
   {year:2025,label:'FDA asks makers to remove dementia, heart disease and breast cancer statements from the boxed warning'},
   {year:2026,label:'First revised hormone therapy labels approved'}],
   note:'All events come from the verified update boxes in this entry.'}}]},
 'ch33-6':{m:{im:'A',cd:'B',st:'A',md:'A',sz:'A',ne:'C',tx:'E'},
  visuals:[{sec:'s336-tx',block:{type:'chronology',title:'Visual summary: immune hypotheses tested since the chapter',events:[
   {year:2013,label:'Infliximab trial in treatment-resistant depression: no overall benefit'},
   {year:2015,label:'Institute of Medicine redefines ME/CFS as a medical illness with new criteria'},
   {year:2016,label:'Complement C4A expression linked to schizophrenia risk and synaptic pruning'},
   {year:2018,label:'BeneMin: minocycline does not improve negative symptoms in early schizophrenia'},
   {year:2019,label:'INTREPAD: naproxen does not slow presymptomatic Alzheimer disease'},
   {year:2019,label:'Danish cohort of 657,461 children: no link between MMR vaccination and autism'},
   {year:2025,label:'WHO vaccine safety committee reaffirms that vaccines do not cause autism'}],
   note:'All events come from the verified update boxes in this entry.'}}]}};
for(const [ch,j] of Object.entries(J)){
 const ids=fs.readFileSync('/tmp/'+ch+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
 const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!j.m[p])throw id;domains[id]=j.m[p];});
 fs.writeFileSync(U+'learn-'+ch+'-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals:j.visuals},null,1)+')\n');
 console.log(ch,Object.keys(domains).length);}
