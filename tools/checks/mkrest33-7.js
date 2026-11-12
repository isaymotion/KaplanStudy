// Builds updwork/learn-ch33-7-rest-base.js and learn-ch33-8-rest-base.js (domains, pretest, visuals).
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const J={
 'ch33-7':{m:{ep:'A',lk:'A',ld:'A',pd:'A',as:'A',pt:'D',en:'A'},
  visuals:[{sec:'s337-assoc',block:{type:'heatmap',title:'Visual summary: how the mapping designs compare',cols:['Genes of large effect','Genes of small effect','Ease of collecting the sample','Protection from population stratification'],
   rows:[{label:'Pedigree linkage',v:[3,0,1,3]},{label:'Affected sib-pair linkage',v:[2,1,2,3]},{label:'Case-control association',v:[1,3,3,0]},{label:'Family-based (trio) association',v:[1,2,2,3]}],
   legend:['Weak','Some','Good','Strong'],note:'Relative ratings drawn from the comparisons in sections 33.7 (pedigree and sib-pair designs favor large effects; association favors small effects; trios avoid stratification but are about two-thirds as powerful). A simplification for revision.'}}]},
 'ch33-8':{m:{ad:'A',al:'A',au:'A',ag:'A',bp:'A',bw:'A',sz:'A'},
  visuals:[{sec:'s338-scz',block:{type:'chronology',title:'Visual summary: psychiatric gene mapping from linkage to large-scale genomics',events:[
   {year:1987,label:'Linkage of bipolar disorder to chromosomes X and 11 reported; neither replicated'},
   {year:1989,label:'Re-analysis of the Amish pedigree excludes the chromosome 11 linkage'},
   {year:1991,label:'Linkage of late-onset Alzheimer disease to chromosome 19'},
   {year:1993,label:'Apolipoprotein E e4 associated with late-onset Alzheimer disease'},
   {year:2007,label:'Autism Genome Project reports copy number variants; GAB2 reported in Alzheimer disease'},
   {year:2016,label:'Complement C4 variants linked to schizophrenia risk and synaptic pruning'},
   {year:2022,label:'Schizophrenia: 287 common-variant loci and 10 rare-variant genes; Alzheimer: 75 loci; autism: 72 genes (185 at a looser threshold)'},
   {year:2023,label:'Lecanemab approved; APOE e4 testing now guides anti-amyloid treatment'},
   {year:2025,label:'Bipolar disorder: 298 genome-wide significant loci'}],
   note:'Events from the chapter text and the verified update boxes in this entry and sections 33.1 and 33.6.'}}]}};
for(const [ch,j] of Object.entries(J)){
 const ids=fs.readFileSync('/tmp/'+ch+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
 const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!j.m[p])throw id;domains[id]=j.m[p];});
 fs.writeFileSync(U+'learn-'+ch+'-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals:j.visuals},null,1)+')\n');
 console.log(ch,Object.keys(domains).length);}
