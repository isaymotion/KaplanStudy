// Builds updwork/learn-ch33-1-rest-base.js (domains, pretest, visuals).
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const m={hb:'D',hg:'A',hn:'C',bo:'A',so:'A',vs:'A',au:'A',ol:'A',mo:'A',mx:'A',la:'A',at:'A',me:'A',em:'A',fa:'A',fr:'C',dv:'A',ng:'A'};
const visuals=[{sec:'s331-brain',block:{type:'chronology',title:'Visual summary: from localization to genomics',events:[
 {year:1865,label:'Broca links loss of fluent speech to the left inferior frontal lobe'},
 {year:1868,label:'Harlow describes the personality change of Phineas Gage'},
 {year:1874,label:'Wernicke places language comprehension in the left superior temporal lobe'},
 {year:2009,label:'NIMH launches the Research Domain Criteria (RDoC)'},
 {year:2018,label:'Sorrells and colleagues report no detectable adult hippocampal neurogenesis'},
 {year:2022,label:'DSM-5-TR and ICD-11; schizophrenia GWAS finds 287 loci'},
 {year:2025,label:'Dumitru and colleagues find dividing neural progenitors in adult hippocampus'}],
 note:'1865 to 1874 come from the chapter; later events come from the verified update boxes in this section, s331-genome and s331-neurog.'}}];
const ids=fs.readFileSync('/tmp/ch33-1-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!m[p])throw id;domains[id]=m[p];});
fs.writeFileSync(U+'learn-ch33-1-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals},null,1)+')\n');
console.log(Object.keys(domains).length);
