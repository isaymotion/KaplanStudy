// Builds updwork/learn-ch34-8-rest-base.js (domains, pretest, visual) for release 88.0.0.
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const M={lf:'B',ep:'B',ea:'B',la:'B',pp:'C',tx:'E'};
const ids=fs.readFileSync('/tmp/ch34-8-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!M[p])throw id;domains[id]=M[p];});
const visuals=[{sec:'s348-life',block:{type:'chronology',title:'Visual summary: Erikson\'s life and works',events:[
 {year:1902,label:'Born in Frankfurt am Main'},
 {year:1927,label:'Goes to Vienna to teach with Peter Blos'},
 {year:1950,label:'Childhood and Society, his first book'},
 {year:1958,label:'Young Man Luther'},
 {year:1964,label:'Insight and Responsibility'},
 {year:1968,label:'Identity: Youth and Crisis'},
 {year:1969,label:'Gandhi\'s Truth (Pulitzer Prize and National Book Award)'},
 {year:1970,label:'Retires from Harvard as professor emeritus (chapter: 1972)'},
 {year:1994,label:'Dies in Harwich, Massachusetts'},
 {year:1997,label:'Joan Erikson adds a ninth stage'}],
 note:'Dates from the chapter and the verified update boxes in this entry.'}}];
fs.writeFileSync(U+'learn-ch34-8-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals},null,1)+')\n');
console.log(Object.keys(domains).length,pick(ids,8).join(' '));
