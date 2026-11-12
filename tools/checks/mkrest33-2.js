// Builds updwork/learn-ch33-2-rest-base.js (domains, pretest, visuals).
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const m={ov:'A',rg:'A',pz:'A',cd:'A',np:'A',sc:'A',cx:'A',ns:'A',ef:'A',mg:'A',nb:'A',sz:'A',as:'A',an:'A'};
const visuals=[{sec:'s332-adult',block:{type:'chronology',title:'Visual summary: how the evidence has moved since the chapter',events:[
 {year:2013,label:'DSM-5 merges the autism subtypes into autism spectrum disorder'},
 {year:2013,label:'NIMH review finds early brain overgrowth in autism much weaker than reported'},
 {year:2015,label:'Review finds historical schizophrenia candidate genes (DISC1, NRG1) unconfirmed'},
 {year:2016,label:'Cell-counting review puts the glia-to-neuron ratio near 1:1'},
 {year:2018,label:'Sorrells and colleagues report no detectable adult human hippocampal neurogenesis'},
 {year:2023,label:'USPSTF reaffirms daily folic acid 0.4 to 0.8 mg before and in early pregnancy'},
 {year:2025,label:'CDC: 1 in 31 eight-year-olds identified with autism (2022 data)'},
 {year:2025,label:'Dumitru and colleagues find dividing progenitors in adult human hippocampus'}],
 note:'All events come from the verified update boxes in this chapter section.'}}];
const ids=fs.readFileSync('/tmp/ch33-2-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!m[p])throw id;domains[id]=m[p];});
fs.writeFileSync(U+'learn-ch33-2-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals},null,1)+')\n');
console.log(Object.keys(domains).length);
