// Builds updwork/learn-ch32-2-rest-base.js and learn-ch32-3-rest-base.js (domains, pretest, visuals).
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const cfg={
 'ch32-2':{m:{yi:'B',yw:'B',ym:'B',yp:'B',mt:'B',mr:'B',mc:'B',dv:'B',am:'B'},
  visuals:[{sec:'s322-marr',block:{type:'chronology',title:'Visual summary: marriage and divorce law milestones',events:[
   {year:1967,label:'Loving v. Virginia strikes down interracial marriage bans in 16 states'},
   {year:2015,label:'Obergefell v. Hodges: same-sex marriage legal in every US state'},
   {year:2021,label:'Tan-Andal v. Andal: psychological incapacity is a legal, not medical, concept (Philippines)'},
   {year:2022,label:'Respect for Marriage Act protects same-sex and interracial marriage under US federal law'},
   {year:2024,label:'Philippine House passes an Absolute Divorce Bill; the Senate does not act'},
   {year:2025,label:'US Supreme Court declines a petition to revisit Obergefell'}],
   note:'Built from the verified update boxes in this section and in s322-divorce. Check current law.'}}]},
 'ch32-3':{m:{oi:'B',ob:'A',ol:'C',ot:'B',op:'B',or:'I'},
  visuals:[{sec:'s323-lifeexp',block:{type:'chronology',title:'Visual summary: US life expectancy at birth',events:[
   {year:1900,label:'About 48 years (as the section gives it)'},
   {year:1990,label:'Men 72.1, women 79.0 (Table 32-22)'},
   {year:2013,label:'Men 76.4, women 81.2, overall 78.8 (NCHS final data)'},
   {year:2024,label:'Overall 79.0, the highest ever; men 76.5, women 81.4 (NCHS)'},
   {year:2050,label:'Projected men 76.4, women 83.3 (Table 32-22, from 1990s data)'}],
   note:'1900 and the projections come from the book; 2013 and 2024 come from the NCHS update boxes.'}}]}};
for(const [ch,c] of Object.entries(cfg)){
 const ids=fs.readFileSync('/tmp/'+ch+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
 const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!c.m[p])throw id;domains[id]=c.m[p];});
 fs.writeFileSync(U+'learn-'+ch+'-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals:c.visuals},null,1)+')\n');
 console.log(ch,Object.keys(domains).length);
}
