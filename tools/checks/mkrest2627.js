// Builds updwork/learn-chNN-rest.js (domains, pretest, checks, visuals) for Chapters 26 and 27.
const fs=require('fs');const U='/home/claude/updwork/';
const ids=n=>fs.readFileSync('/tmp/ch'+n+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(c=>c[0]);
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor(i*a.length/k)]);return [...new Set(o)]};
const V={
 '26':[{sec:'s26-intro',at:8,block:{type:'heatmap',title:'Levels of care at a glance',
  cols:['Inpatient','Partial hospital','Intensive outpatient','Outpatient','Residential'],
  rows:[{label:'Risk of harm',v:[3,2,1,0,2]},{label:'Severity of illness',v:[3,2,2,1,2]},{label:'Functional impairment',v:[3,2,1,0,3]},{label:'Hours of care per day',v:[3,2,1,0,3]},{label:'Can hold or restrain',v:[3,0,0,0,0]}],
  legend:['Low or none','Mild','Moderate','High'],
  note:'Built from Table 26-1 and the text of this chapter. Residential care runs 24 hours but with less staffing and treatment than a ward.'}}],
 '27':[{sec:'s27-charter',block:{type:'chronology',title:'Dates in Chapter 27 and its updates',events:[
  {year:1999,label:'Medical Professionalism Project begins'},
  {year:2002,label:'Physician Charter published (Annals of Internal Medicine and The Lancet)'},
  {year:2006,label:'Medical Board of California report of the 7-year exploitation case'},
  {year:2011,label:'US Department of Defense Instruction 6490.08: presumption against notifying commanders'},
  {year:2018,label:'Philippine Mental Health Act (Republic Act No. 11036)'},
  {year:2023,label:'DoD Instruction 6490.08 reissued'}],
  note:'The book dates the Charter effort to 2001; see the correction box.'}}]};
const D={'26':{}, '27':{}};
for(const n of ['26','27']){const a=ids(n);
 fs.writeFileSync(U+'learn-ch'+n+'-rest.js','('+JSON.stringify({domains:D[n],pretest:pick(a,8),checks:eval(fs.readFileSync(U+'learn-ch'+n+'-checks.js','utf8')),visuals:V[n]},null,1)+')\n');
 console.log('ch'+n,'pretest',pick(a,8).join(' '));}
