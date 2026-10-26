const fs=require('fs'), W='/home/claude/ch3work/', OUT='/home/claude/app/data/ch03/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=10;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[];for(let i=1;i<=6;i++)cards.push(ev('c'+i+'.js'));
const guide={
 intro:"Chapter 3 covers the cognitive disorders, where medicine, neurology and psychiatry meet. It begins with how to evaluate cognition, then works through delirium, dementia (major neurocognitive disorder) and its causes, the amnestic disorders, the many general medical conditions that produce psychiatric syndromes (epilepsy, tumors, head trauma, demyelinating, infectious, immune, endocrine, metabolic, nutritional and toxic disorders) and mild cognitive impairment. The theme throughout is to recognize the syndrome, find its cause and look for what is reversible.",
 objectives:[
  "Evaluate cognition with the history, mental status examination, laboratory tests, imaging and neuropsychologic testing.",
  "Diagnose delirium, separate it from dementia, depression and psychosis, find its cause and manage it with environmental and drug measures.",
  "Diagnose major and mild neurocognitive disorders, grade severity and distinguish Alzheimer, vascular, frontotemporal, Lewy body, subcortical and prion dementias and depression-related cognitive dysfunction.",
  "Treat dementia with cholinesterase inhibitors, memantine, vascular risk control and support for patients and caregivers.",
  "Recognize amnestic syndromes such as Korsakoff syndrome, transient global amnesia and ECT- or trauma-related amnesia.",
  "Identify psychiatric presentations of epilepsy, tumors, head trauma, MS, CNS infections, HIV, lupus, endocrine, metabolic, nutritional and toxic disorders, and define mild cognitive impairment."
 ],
 parts
};
const cat=k=>cards.flatMap(c=>c[k]||[]);
const hy=cat('hy'),dx=cat('dx'),ph=cat('ph'),fd=cat('fd');let cs=cat('cs');
function rng(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0;}return()=>{h^=h<<13;h>>>=0;h^=h>>>17;h^=h<<5;h>>>=0;return h/4294967296;};}
cs=cs.map(c=>{const r=rng(c.id+'ch3');const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
 return {...c,choices:idx.map(i=>c.choices[i]),answer:idx.indexOf(c.answer)};});
const ids=new Set();const dup=[];
for(const arr of [hy,dx,cs,ph,fd]) for(const x of arr){if(ids.has(x.id))dup.push(x.id);ids.add(x.id);}
const secIds=guide.parts.flatMap(p=>p.sections.map(s=>s.id));
secIds.forEach(s=>{if(ids.has(s))dup.push(s);ids.add(s);});
if(dup.length){console.log('DUP',dup);process.exit(1);}
cs.forEach(c=>{if(c.choices.length!==5||c.answer<0)throw c.id;});
const dist=[0,0,0,0,0];cs.forEach(c=>dist[c.answer]++);
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 3 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., Chapter 3. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch03", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
