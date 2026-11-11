// Builds updwork/learn-ch24-N-rest.js (domains, pretest, checks, visuals) for Chapter 24 sections.
const fs=require('fs');const U='/home/claude/updwork/';
const ids=n=>fs.readFileSync('/tmp/ch24-'+n+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(c=>c[0]);
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor(i*a.length/k)]);return [...new Set(o)]};
const V={'1':[],'2':[{sec:'s242-testing',block:{type:'chronology',title:'Psychiatric genetics and counseling since the book',events:[
 {year:2006,label:'NSGC publishes its definition of genetic counseling (interpretation, education, counseling)'},
 {year:2008,label:'US GINA bars most health insurers and employers from using genetic information'},
 {year:2019,label:'ISPG genetic testing statement: microarray standard in developmental delay, intellectual disability and autism'},
 {year:2020,label:'Florida becomes the first US state to bar genetic information in life, disability and long-term care insurance'},
 {year:2021,label:'ISPG: polygenic risk scores have no current clinical use in psychiatry'},
 {year:2022,label:'Psychiatric Genomics Consortium: 287 schizophrenia loci'},
 {year:2023,label:'Lecanemab approved; ApoE ε4 testing advised before treatment because of ARIA risk'}],
 note:'Built from the update boxes in this section and the section on genetics; laws and guidance differ by country, so check current local rules.'}}]};
// Domains: genetics cases about mechanisms -> A (neuroscience); ethics/law cases -> G; rehab cases -> E (treatment); counseling communication -> F
const D={'1':{'c241-re01':'G','c241-re02':'G','c241-re03':'G','c241-re04':'G'},
 '2':{'c242-gg02':'A','c242-gg03':'A','c242-gg04':'A','c242-gp01':'F','c242-gp02':'F','c242-gs01':'F','c242-gt03':'G','c242-gt05':'B'}};
for(const n of ['1','2']){const a=ids(n);
 fs.writeFileSync(U+'learn-ch24-'+n+'-rest.js','('+JSON.stringify({domains:D[n],pretest:pick(a,8),checks:eval(fs.readFileSync(U+'learn-ch24-'+n+'-checks.js','utf8')),visuals:V[n]},null,1)+')\n');
 console.log('ch24-'+n,'pretest',pick(a,8).join(' '));}
