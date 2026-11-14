// Builds updwork/learn-ch35-rest-base.js (domains, pretest, visual) for release 90.0.0.
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const ids=fs.readFileSync('/tmp/ch35-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
const M={bf:'B',em:'B',na:'B',nb:'C',lt:'E',di:'I',cl:'D',fu:'A',ta:'B',tb:'B',tc:'B',td:'B'};
const domains={};ids.forEach(id=>{const p=id.split('-')[1].replace(/^\d+/,'').slice(0,2);if(!M[p])throw id;domains[id]=M[p];});
const visuals=[{sec:'s35-future',block:{type:'chronology',title:'Visual summary: psychiatry\'s history at a glance',events:[
 {year:1247,label:'Bethlem founded in London'},
 {year:1797,label:'Pussin removes the chains at the Bicêtre (Salpêtrière with Pinel, 1800)'},
 {year:1808,label:'Britain\'s County Asylums Act (chapter: Country)'},
 {year:1843,label:'Utica asylum opens; Dix\'s Massachusetts memorial (chapter: about 1850)'},
 {year:1852,label:'Morel uses démence précoce'},
 {year:1854,label:'Jean-Pierre Falret and Baillarger: circular and double-form insanity'},
 {year:1874,label:'Kahlbaum describes catatonia'},
 {year:1921,label:'Loewi\'s frog-heart experiment published'},
 {year:1963,label:'Kennedy signs the community mental health centers law'},
 {year:1968,label:'DSM-II'},
 {year:1973,label:'Rosenhan\'s pseudopatient paper (questioned since 2019)'},
 {year:1980,label:'DSM-III: descriptive criteria'},
 {year:2013,label:'DSM-5'},
 {year:2022,label:'ICD-11 in effect; DSM-5-TR published'}],
 note:'Dates from the chapter and the verified update boxes in this chapter.'}}];
fs.writeFileSync(U+'learn-ch35-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals},null,1)+')\n');
console.log(Object.keys(domains).length,pick(ids,8).join(' '));
