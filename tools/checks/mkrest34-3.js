// Builds updwork/learn-ch34-3-rest-base.js (domains, pretest, visuals) for release 85.0.0.
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const m={df:'B',mo:'B',ma:'B',ta:'B',pe:'B',pv:'A',se:'B',ei:'B',sw:'B',sx:'B',rs:'C',mm:'C'};
const visuals=[{sec:'s343-posev',block:{type:'chronology',title:'Visual summary: the research behind Model C, then and now',events:[
 {year:1943,label:'Kanner describes infantile autism in 11 children at Johns Hopkins'},
 {year:1954,label:'Olds and Milner report that rats will self-stimulate the septal area'},
 {year:1956,label:'Olds popularizes the idea of pleasure centers in the brain'},
 {year:1992,label:'Mirror neurons first reported, in macaque premotor area F5'},
 {year:2012,label:'Von Economo neurons found in the anterior insula of macaque monkeys'},
 {year:2015,label:'Meta-analysis puts the heritability of well-being at about 36 percent'},
 {year:2020,label:'Review explains why the triune brain idea is rejected'}],
 note:'Events from the chapter and the verified update boxes in this entry. The chapter itself dates the Olds finding to 1955.'}}];
const ids=fs.readFileSync('/tmp/ch34-3-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!m[p])throw id;domains[id]=m[p];});
fs.writeFileSync(U+'learn-ch34-3-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals},null,1)+')\n');
console.log(Object.keys(domains).length,pick(ids,8).join(' '));
