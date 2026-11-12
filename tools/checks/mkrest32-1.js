// Builds updwork/learn-ch32-1-rest-base.js (domains, pretest, visuals); checks are merged in later.
const fs=require('fs');const U='/home/claude/updwork/';
const ids=fs.readFileSync('/tmp/ch32-1-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
const m={pl:'A',pm:'A',pd:'C',ir:'B',il:'B',ip:'B',ie:'B',ia:'B',im:'B',tt:'B',tp:'B',ms:'B',md:'B',mf:'B',an:'B',as:'B',ac:'B',ax:'B',ar:'B',au:'C',av:'B',ao:'C'};
const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!m[p])throw id;domains[id]=m[p];});
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const pretest=pick(ids,8);
const visuals=[{sec:'s321-attach',block:{type:'heatmap',title:'Visual summary: Strange Situation patterns',cols:['Secure','Avoidant','Ambivalent','Disorganized'],
 rows:[{label:'Upset when the caregiver leaves',v:[2,0,3,1]},{label:'Comforted at reunion, returns to play',v:[3,0,0,0]},{label:'Ignores or turns away at reunion',v:[0,3,0,1]},{label:'Clings yet resists comfort',v:[0,0,3,1]},{label:'Contradictory or confused behavior',v:[0,0,0,3]},{label:'Linked caregiving: sensitive and responsive',v:[3,0,0,0]}],
 legend:['Not typical','Sometimes','Often','Defining'],note:'A teaching summary built from the Strange Situation update box (Ainsworth; Main and Solomon). Table 32-8 above describes the types differently, as printed.'}}];
fs.writeFileSync(U+'learn-ch32-1-rest-base.js','('+JSON.stringify({domains,pretest,visuals},null,1)+')\n');
console.log(Object.keys(domains).length,pretest);
