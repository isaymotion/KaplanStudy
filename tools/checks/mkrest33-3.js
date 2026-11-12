// Builds updwork/learn-ch33-3-rest-base.js and learn-ch33-4-rest-base.js (domains, pretest, visuals).
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const J={
 'ch33-3':{m:{sr:'A',dp:'A',nh:'A',ac:'A',sy:'A',tr:'A',rc:'A',ra:'A',gl:'A',gb:'A',az:'C',am:'E'},
  visuals:[{sec:'s333-aamood',block:{type:'chronology',title:'Visual summary: how the drugs in this section have moved since the chapter',events:[
   {year:2003,label:'FDA approves memantine for moderate to severe Alzheimer disease'},
   {year:2007,label:'Tegaserod withdrawn in the US for cardiovascular events'},
   {year:2012,label:'FDA approves lorcaserin for weight management'},
   {year:2017,label:'Meta-analysis: D-cycloserine adds only a small effect to exposure therapy'},
   {year:2019,label:'FDA approves esketamine nasal spray (with REMS) and pitolisant'},
   {year:2020,label:'Lorcaserin withdrawn after a cancer signal'},
   {year:2022,label:'Tegaserod withdrawn again, for business reasons'},
   {year:2024,label:'FDA approves xanomeline-trospium, a muscarinic schizophrenia drug'},
   {year:2025,label:'Esketamine approved as monotherapy for treatment-resistant depression'}],
   note:'All events come from the verified update boxes in this chapter section.'}}]},
 'ch33-4':{m:{np:'A',nb:'A',th:'A',cr:'A',ov:'A',no:'A',co:'A',ec:'A',ek:'E',ei:'A',ns:'A'},
  visuals:[{sec:'s334-nster',block:{type:'chronology',title:'Visual summary: how the evidence has moved since the chapter',events:[
   {year:2006,label:'NK1 antagonist trials in depression fail to beat placebo'},
   {year:2008,label:'EMA suspends rimonabant for psychiatric adverse effects'},
   {year:2010,label:'Sibutramine withdrawn in Europe and the US after the SCOUT trial'},
   {year:2017,label:'Review: CRF1 antagonists have failed in psychiatric trials'},
   {year:2018,label:'FDA approves cannabidiol (Epidiolex) for two epilepsy syndromes'},
   {year:2019,label:'FDA approves brexanolone for postpartum depression'},
   {year:2023,label:'FDA approves zuranolone for postpartum depression, not major depression'}],
   note:'All events come from the verified update boxes in this chapter section.'}}]}};
for(const [ch,j] of Object.entries(J)){
 const ids=fs.readFileSync('/tmp/'+ch+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
 const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!j.m[p])throw id;domains[id]=j.m[p];});
 fs.writeFileSync(U+'learn-'+ch+'-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals:j.visuals},null,1)+')\n');
 console.log(ch,Object.keys(domains).length);}
