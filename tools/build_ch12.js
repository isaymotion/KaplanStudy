const fs=require('fs'), W='/home/claude/ch12work/', OUT='/home/claude/app/data/ch12/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=7;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[];for(let i=1;i<=2;i++)cards.push(ev('c'+i+'.js'));
const guide={
 intro:"Chapter 12 covers the somatic symptom and related disorders, where distress and behavior centered on bodily symptoms dominate a person's life. It explains DSM-5's shift away from 'medically unexplained' symptoms and covers somatic symptom disorder, illness anxiety disorder, conversion (functional neurologic symptom) disorder, psychological factors affecting other medical conditions and factitious disorder, imposed on self or on another, with their evaluation, differential diagnosis, course, management, epidemiology and theories of cause.",
 objectives:[
  "Explain why DSM-5 focuses on the excessive response to somatic symptoms rather than on whether they are medically explained.",
  "Diagnose somatic symptom disorder and illness anxiety disorder with their specifiers, and separate them from medical illness, panic, OCD, body dysmorphic disorder and psychosis.",
  "Recognize conversion disorder from its examination findings (Hoover test, midline splitting, retained reflexes after nonepileptic seizures) while keeping a thorough neurologic workup.",
  "Diagnose psychological factors affecting other medical conditions and distinguish it from adjustment disorder.",
  "Identify clues to factitious disorder imposed on self or another, distinguish it from malingering, and use laboratory patterns that reveal factitious illness.",
  "Plan management: a single primary care physician, regular brief visits, CBT, a nonconfrontational approach, child safety measures, and appropriate limited use of medication."
 ],
 parts
};
const cat=k=>cards.flatMap(c=>c[k]||[]);
const hy=cat('hy'),dx=cat('dx'),ph=cat('ph'),fd=cat('fd');let cs=cat('cs');
function rng(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0;}return()=>{h^=h<<13;h>>>=0;h^=h>>>17;h^=h<<5;h>>>=0;return h/4294967296;};}
cs=cs.map(c=>{const r=rng(c.id+(process.env.SEED||'u12'));const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
 return {...c,choices:idx.map(i=>c.choices[i]),answer:idx.indexOf(c.answer)};});
const ids=new Set();const dup=[];
for(const arr of [hy,dx,cs,ph,fd]) for(const x of arr){if(ids.has(x.id))dup.push(x.id);ids.add(x.id);}
const secIds=guide.parts.flatMap(p=>p.sections.map(s=>s.id));
secIds.forEach(s=>{if(ids.has(s))dup.push(s);ids.add(s);});
if(dup.length){console.log('DUP',dup);process.exit(1);}
cs.forEach(c=>{if(c.choices.length!==5||c.answer<0)throw c.id;});
const dist=[0,0,0,0,0];cs.forEach(c=>dist[c.answer]++);
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 12 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., Chapter 12. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch12", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
