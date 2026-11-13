// Builds updwork/learn-ch34-1-rest-base.js and learn-ch34-2-rest-base.js (domains, pretest, visuals).
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const B='B';
const J={
 'ch34-1':{m:{pg:B,sm:B,po:B,co:B,fo:B,pa:'E',dp:'E',at:B,as:B,ss:B,ad:'C',ap:'E',lb:B,lc:B,pv:B,pe:B,pn:B,ex:B,cx:B,op:B,py:B,rf:B,mv:B,av:B,aw:B,sy:B,hb:B},
  visuals:[{sec:'s341-piaget',block:{type:'heatmap',title:'Visual summary: what each Piagetian stage can do',
   cols:['Sensorimotor','Preoperational','Concrete operations','Formal operations'],
   rows:[
    {label:'Object permanence',v:[2,3,3,3]},
    {label:'Symbols and language',v:[1,3,3,3]},
    {label:'Conservation and reversibility',v:[0,0,3,3]},
    {label:'Taking another person\'s point of view',v:[0,0,3,3]},
    {label:'Logical reasoning about real objects',v:[0,0,3,3]},
    {label:'Abstract, hypotheticodeductive thinking',v:[0,0,0,3]}],
   legend:['Absent','Beginning','Develops in this stage','Present'],
   note:'A simplified reading of Tables 34-1 and 34-2 and the text. Object permanence develops through the sensorimotor stage and is attained at 18 months to 2 years; symbols begin at about 18 months. Some people never reach formal operations.'}}]},
 'ch34-2':{m:{bi:'A',lt:'A',cx:'A',am:'A',sp:'A',fr:'A',ra:'A',ty:'A',ms:'A',ni:'A',sl:'A',as:'D',rm:'D',pa:'C',md:B,ia:B},
  visuals:[{sec:'s342-amnesia',block:{type:'chronology',title:'Visual summary: landmarks in the study of memory',events:[
   {year:1879,label:'Galton introduces the word-probe method for sampling autobiographical memories'},
   {year:1953,label:'HM has both medial temporal lobes removed for epilepsy and becomes amnesic'},
   {year:1957,label:'Scoville and Milner publish the first report of HM'},
   {year:2000,label:'Nobel Prize to Carlsson, Greengard and Kandel; Kandel\'s share is for the Aplysia work on synapses and memory'},
   {year:2007,label:'AASM scoring manual: sleep stages 3 and 4 become one stage, N3'},
   {year:2008,label:'HM dies and is identified as Henry Molaison'},
   {year:2013,label:'DSM-5: dissociative amnesia, with fugue as a specifier'}],
   note:'Events from the chapter text and the verified update boxes in this entry.'}}]}};
for(const [ch,j] of Object.entries(J)){
 const ids=fs.readFileSync('/tmp/'+ch+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
 const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!j.m[p])throw id;domains[id]=j.m[p];});
 fs.writeFileSync(U+'learn-'+ch+'-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals:j.visuals},null,1)+')\n');
 console.log(ch,Object.keys(domains).length);}
