// Builds updwork/learn-ch33-9-rest-base.js and learn-ch33-10-rest-base.js (domains, pretest, visuals).
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const J={
 'ch33-9':{m:{eg:'D',pl:'D',nm:'D',ab:'D',dr:'D',ds:'D',qe:'D'},
  visuals:[{sec:'s339-qeeg',block:{type:'chronology',title:'Visual summary: how EEG use in psychiatry has been reassessed',events:[
   {year:1968,label:'Rechtschaffen and Kales manual: sleep scored as wake, non-REM stages 1 to 4 and REM'},
   {year:1997,label:'AAN and ACNS judge QEEG for psychiatric disorders investigational'},
   {year:2007,label:'AASM scoring manual: stages W, N1, N2, N3 and R'},
   {year:2013,label:'FDA allows the NEBA theta/beta device only as an aid to full clinical evaluation; meta-analysis finds the ratio unreliable for ADHD'},
   {year:2016,label:'AAN advises against using the theta/beta ratio to confirm ADHD outside research'},
   {year:2019,label:'Systematic review: clozapine raises the odds of EEG slowing about 17-fold and of epileptiform discharges about 6-fold'}],
   note:'Events from the verified update boxes in this entry. The routine EEG keeps its role in looking for seizures and medical causes.'}}]},
 'ch33-10':{m:{ck:'A',sl:'A',cs:'C',se:'A',hu:'A',ag:'A',rx:'E'},
  visuals:[{sec:'s3310-csd',block:{type:'chronology',title:'Visual summary: from clock genes to the phase disorders',events:[
   {year:1984,label:'The period gene isolated in fruit flies'},
   {year:1993,label:'Wehr and colleagues: long natural nights give two sleep bouts with quiet wakefulness between them'},
   {year:1994,label:'Timeless, a second clock gene, found (Young)'},
   {year:2001,label:'PER2 variant found in familial advanced sleep phase (Toh and colleagues)'},
   {year:2005,label:'CSNK1D variant found in familial advanced sleep phase (Xu and colleagues)'},
   {year:2014,label:'ICSD-3 names advanced and delayed sleep-wake phase disorder'},
   {year:2017,label:'Nobel Prize to Hall, Rosbash and Young; CRY1 variant found in familial delayed sleep-wake phase disorder (Patke and colleagues)'},
   {year:2023,label:'ICSD-3-TR keeps the sleep-wake phase disorder names'}],
   note:'Events from the chapter text (Figure 33-37) and the verified update boxes in this entry.'}}]}};
for(const [ch,j] of Object.entries(J)){
 const ids=fs.readFileSync('/tmp/'+ch+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
 const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!j.m[p])throw id;domains[id]=j.m[p];});
 fs.writeFileSync(U+'learn-'+ch+'-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals:j.visuals},null,1)+')\n');
 console.log(ch,Object.keys(domains).length);}
