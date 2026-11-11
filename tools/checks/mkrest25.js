// Builds updwork/learn-ch25-N-rest.js (domains, pretest, checks, visuals) for sections 25.1 and 25.2.
const fs=require('fs');const U='/home/claude/updwork/';
const ids=n=>fs.readFileSync('/tmp/ch25-'+n+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(c=>c[0]);
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor(i*a.length/k)]);return [...new Set(o)]};
const V={
 '1':[{sec:'s251-intro',at:9,block:{type:'chronology',title:'Milestones of consultation-liaison psychiatry',events:[
  {year:1926,label:'Ferenczi extends conversion to organs run by the autonomic nervous system'},
  {year:1927,label:'Abraham: unresolved pregenital impulses affect adult organs'},
  {year:1929,label:'Groddeck gives symbolic meaning to fever and hemorrhage'},
  {year:2003,label:'Psychosomatic Medicine approved as a subspecialty (ABMS and ABPN)'},
  {year:2005,label:'First ABPN subspecialty examination'},
  {year:2017,label:'Subspecialty renamed Consultation-Liaison Psychiatry'},
  {year:2018,label:'Academy of Psychosomatic Medicine becomes the Academy of Consultation-Liaison Psychiatry'}],
  note:'Dates as given in section 25.1.'}}],
 '2':[{sec:'s252-depress',at:7,block:{type:'heatmap',title:'Depression-related cognitive dysfunction versus neurodegenerative dementia',
  cols:['Neurodegenerative dementia','Depression-related cognitive dysfunction'],
  rows:[{label:'Global, consistently poor deficits',v:[3,1]},{label:'Variable attention and concentration',v:[1,3]},{label:'Language impairment',v:[3,1]},{label:'Confabulation',v:[3,1]},{label:'Answers "I don\'t know"',v:[1,3]},{label:'Poor free recall',v:[3,3]},{label:'Poor recognition with cues',v:[3,1]}],
  legend:['Rare','Less likely','Common','Typical'],
  note:'Built from the comparison table in this section; the two often coexist, since 25 to 50% of people with dementia are also depressed.'}}]};
const D={'1':{'c251-ce01':'D','c251-ce04':'D','c251-cp10':'F','c251-cs04':'F','c251-ce03':'F'},
 '2':{'c252-gi04':'D','c252-gi05':'D','c252-gp03':'D','c252-gr03':'F','c252-go04':'G','c252-gt04':'E','c252-gt05':'E'}};
for(const n of ['1','2']){const a=ids(n);
 fs.writeFileSync(U+'learn-ch25-'+n+'-rest.js','('+JSON.stringify({domains:D[n],pretest:pick(a,8),checks:eval(fs.readFileSync(U+'learn-ch25-'+n+'-checks.js','utf8')),visuals:V[n]},null,1)+')\n');
 console.log('ch25-'+n,'pretest',pick(a,8).join(' '));}
