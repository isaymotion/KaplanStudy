const fs=require('fs'), W='/home/claude/ch21-0work/', OUT='/home/claude/kaplanstudy/data/ch21-0/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=6;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[];for(let i=1;i<=1;i++)cards.push(ev('c'+i+'.js'));
const guide={
 intro:"Section 21.0 covers the general principles of psychopharmacology that apply to every drug class: how drugs are classified and chosen, pharmacodynamics and pharmacokinetics, side effects and their time course, the antidepressant suicidality debate, medication-induced movement disorders from parkinsonism to tardive dyskinesia and neuroleptic malignant syndrome, overdose, patient factors, consent, dosing, duration and monitoring, outcomes and treatment failure, withdrawal, drug combinations, special populations, regulation, off-label use and placebos.",
 objectives:[
  "Use pharmacodynamic and pharmacokinetic concepts (agonists, partial and inverse agonists, potency versus efficacy, therapeutic index) to explain drug effects and interactions.",
  "Anticipate side effects by cause and time course, and know the serious ones that change prescribing.",
  "Recognize and treat parkinsonism, acute dystonia, akathisia, tardive dyskinesia, neuroleptic malignant syndrome and other drug-induced movement and hyperthermic syndromes.",
  "Choose, dose and monitor a drug using patient factors, consent, adequate trials, laboratory tests and blood levels.",
  "Work through treatment failure, define response and remission, and prevent and recognize withdrawal.",
  "Prescribe safely for children, pregnant and nursing women, the elderly, the medically ill and patients who use substances, and use combinations and off-label drugs appropriately."
 ],
 parts
};
const cat=k=>cards.flatMap(c=>c[k]||[]);
const hy=cat('hy'),dx=cat('dx'),ph=cat('ph'),fd=cat('fd');let cs=cat('cs');
function rng(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0;}return()=>{h^=h<<13;h>>>=0;h^=h>>>17;h^=h<<5;h>>>=0;return h/4294967296;};}
cs=cs.map(c=>{const r=rng(c.id+(process.env.SEED||'pr5'));const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
 return {...c,choices:idx.map(i=>c.choices[i]),answer:idx.indexOf(c.answer)};});
const ids=new Set();const dup=[];
for(const arr of [hy,dx,cs,ph,fd]) for(const x of arr){if(ids.has(x.id))dup.push(x.id);ids.add(x.id);}
const secIds=guide.parts.flatMap(p=>p.sections.map(s=>s.id));
secIds.forEach(s=>{if(ids.has(s))dup.push(s);ids.add(s);});
if(dup.length){console.log('DUP',dup);process.exit(1);}
cs.forEach(c=>{if(c.choices.length!==5||c.answer<0)throw c.id;});
const dist=[0,0,0,0,0];cs.forEach(c=>dist[c.answer]++);
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 21.0 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., section 21.0. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch21-0", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
