// Builds updwork/learn-ch30-rest.js and learn-ch31-rest.js (domains, pretest, checks, visuals).
const fs=require('fs');const U='/home/claude/updwork/';
const ids=c=>fs.readFileSync('/tmp/'+c+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor(i*a.length/k)]);return [...new Set(o)]};
const m30={ci:'I',cp:'B',ca:'I',cg:'I',ce:'H',cr:'I',cm:'I',cc:'I',cb:'E',ck:'E'};
const m31={gb:'B',gt:'I',gr:'I',gp:'I',gs:'B',gm:'C',ge:'G',go:'I'};
const dom=(c,m)=>{const d={};ids(c).forEach(id=>{d[id]=m[id.split('-')[1].slice(0,2)];});return d;};
const d30=dom('ch30',m30), d31=dom('ch31',m31);
const V30=[{sec:'s30-promo',block:{type:'heatmap',title:'Visual summary: who each prevention category targets',cols:['Universal','Selective','Indicated','Tertiary'],
 rows:[{label:'Whole population, regardless of risk',v:[3,0,0,0]},{label:'Higher than average risk, no symptoms',v:[0,3,0,0]},{label:'Early signs, below full criteria',v:[0,1,3,0]},{label:'Established illness',v:[0,0,0,3]},{label:'Aim: reduce disability',v:[0,0,0,3]}],
 legend:['Not the target','Sometimes','Often','Defining'],note:'A teaching summary of the prevention section. The chapter places some people with prodromal symptoms under selective interventions, which differs from the usual Institute of Medicine wording; follow the definitions above.'}}];
const V31=[{sec:'s31-orgs',block:{type:'chronology',title:'Global mental health: key documents and reports',events:[
 {year:1990,label:'Declaration of Caracas: restructure psychiatric care toward the community'},
 {year:1991,label:'UN Resolution 46/119 on protecting persons with mental illness'},
 {year:1996,label:'WPA Madrid Declaration on ethics in psychiatric practice'},
 {year:2001,label:'World Health Report 2001, Mental Health: New Understanding, New Hope'},
 {year:2007,label:'Lancet series on global mental health'},
 {year:2008,label:'WHO mhGAP programme begins'},
 {year:2013,label:'WHO Comprehensive Mental Health Action Plan adopted (2013 to 2020)'},
 {year:2018,label:'Lancet Commission on global mental health and sustainable development'},
 {year:2019,label:'Action plan extended to 2030'},
 {year:2022,label:'WHO World mental health report: 970 million with a mental disorder in 2019'},
 {year:2025,label:'Mental Health Atlas 2024 and World mental health today: more than 1 billion'}],
 note:'Dates from the chapter and its update boxes.'}}];
for(const [c,d,V] of [['ch30',d30,V30],['ch31',d31,V31]]){const a=ids(c);
 fs.writeFileSync(U+'learn-'+c+'-rest.js','('+JSON.stringify({domains:d,pretest:pick(a,8),checks:eval(fs.readFileSync(U+'learn-'+c+'-checks.js','utf8')),visuals:V},null,1)+')\n');
 console.log(c,'pretest',pick(a,8).join(' '));}
