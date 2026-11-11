// Builds updwork/learn-ch29-2-rest.js (domains, pretest, checks, visuals). Needs the checks file from the agent.
const fs=require('fs');const U='/home/claude/updwork/';
const a=fs.readFileSync('/tmp/ch29-2-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor(i*a.length/k)]);return [...new Set(o)]};
const map={pi:'C',pa:'C',pd:'C',pc:'C',pf:'F',pr:'H',pm:'F',pt:'D',pv:'G',pw:'F',pp:'E',pn:'E',ps:'E',ph:'I',pk:'B',pj:'B'};
const domains={};a.forEach(id=>{domains[id]=map[id.slice(5,7)];});
domains['c292-pt03']='G';domains['c292-pt04']='G';domains['c292-pm05']='G';domains['c292-pk03']='G';
const V=[{sec:'s292-pain',block:{type:'heatmap',title:'Visual summary: the four types of pain in dying patients',cols:['Somatic','Visceral','Neuropathic','Psychogenic'],
 rows:[{label:'Steady, aching or gnawing',v:[3,0,0,0]},{label:'Well localized',v:[3,0,0,0]},{label:'Deep, squeezing, poorly localized',v:[0,3,0,0]},{label:'Referred to the skin',v:[0,3,0,0]},{label:'Burning with shock-like bursts',v:[0,0,3,0]},{label:'Opiates are the main treatment',v:[3,3,1,0]},{label:'Adjuvant drugs needed',v:[0,0,3,0]},{label:'Psychological factors, no medical cause',v:[0,0,0,3]}],
 legend:['Not described','Minor','Common','Defining'],note:'A teaching summary of the pain-types table above (Table 29-10). Most patients with advanced cancer have more than one type. Pure psychogenic pain is rare in cancer but often adds to organic pain.'}}];
fs.writeFileSync(U+'learn-ch29-2-rest.js','('+JSON.stringify({domains,pretest:pick(a,8),checks:eval(fs.readFileSync(U+'learn-ch29-2-checks.js','utf8')),visuals:V},null,1)+')\n');
console.log('pretest',pick(a,8).join(' '));
