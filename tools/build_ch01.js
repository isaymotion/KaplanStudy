const fs=require('fs'), W='/home/claude/ch1work/', OUT='/home/claude/app/data/ch01/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const guide={
 intro:"Chapter 1 is the toolkit for every other chapter: how to interview a psychiatric patient, take the history and perform the mental status examination, reach a formulation and write it up; when to do a medical evaluation, which laboratory tests and scans to order and how to read them; how rating scales and psychological and neuropsychological tests work; and how the examination changes for children, adolescents, people with intellectual disability and older adults.",
 objectives:[
  "Run a patient-centered psychiatric interview: build rapport, manage time, use open and closed questions well and handle difficult situations.",
  "Take a complete psychiatric history and perform and document a mental status examination, including suicide and violence risk.",
  "Build a biopsychosocial formulation and write the psychiatric report and medical record, within HIPAA rules.",
  "Decide when a medical workup is needed and interpret toxicology, drug levels, endocrine, chemistry, infectious, EEG, ECG and neuroimaging results.",
  "Explain reliability and validity and choose among rating scales, intelligence, neuropsychological and personality tests.",
  "Adapt the evaluation to children and adolescents, patients with intellectual disability and geriatric patients."
 ],
 parts:['g1.js','g2.js','g3.js','g4.js','g5.js','g6.js'].map(ev)
};
const cat=(fs_)=>fs_.flatMap(ev);
const hy=cat(['hy_a.js','hy_b.js','hy_c.js','hy_d.js','hy_e.js']);
const dx=cat(['dx_a.js','dx_b.js','dx_c.js','dx_d.js','dx_e.js']);
let cs=cat(['cs_a.js','cs_b.js','cs_c.js','cs_d.js','cs_e.js']);
const ph=cat(['ph_a.js','ph_b.js']);
const fd=cat(['fd_a.js','fd_b.js','fd_c.js','fd_d.js','fd_e.js']);
// seeded shuffle of case choices
function rng(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0;}return()=>{h^=h<<13;h>>>=0;h^=h>>>17;h^=h<<5;h>>>=0;return h/4294967296;};}
cs=cs.map(c=>{const r=rng(c.id+'one');const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
 return {...c,choices:idx.map(i=>c.choices[i]),answer:idx.indexOf(c.answer)};});
// checks
const ids=new Set();const dup=[];
for(const arr of [hy,dx,cs,ph,fd]) for(const x of arr){if(ids.has(x.id))dup.push(x.id);ids.add(x.id);}
const secIds=guide.parts.flatMap(p=>p.sections.map(s=>s.id));
secIds.forEach(s=>{if(ids.has(s))dup.push(s);ids.add(s);});
if(dup.length){console.log('DUP',dup);process.exit(1);}
cs.forEach(c=>{if(c.choices.length!==5||c.answer<0)throw c.id;});
const dist=[0,0,0,0,0];cs.forEach(c=>dist[c.answer]++);
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 1 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., Chapter 1. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch01", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology and monitoring cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
console.log('sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'answer dist',dist);
