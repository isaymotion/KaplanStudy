const fs=require('fs'), W='/home/claude/ch21-10work/', OUT='/home/claude/kaplanstudy/data/ch21-10/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=5;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[ev('c1.js')];
const guide={
 intro:"Section 21.10 covers the drugs used to treat the side effects of other psychotropics: anticholinergics for parkinsonism and dystonia, with anticholinergic intoxication and physostigmine; antihistamines (diphenhydramine, hydroxyzine, promethazine, cyproheptadine); dopamine agonists, levodopa and amantadine; and drugs for psychotropic-induced weight gain, from phentermine and orlistat to topiramate and metformin. Dashed boxes add what has changed since the 12th edition, including physostigmine and promethazine corrections, hydroxyzine QT limits, ranitidine's withdrawal, impulse control warnings, the restless legs guideline, amantadine and influenza, and the GLP-1 drugs for antipsychotic weight gain.",
 objectives:[
  "Recognize neuroleptic-induced parkinsonism, acute dystonia and akathisia, and choose and dose the right treatment.",
  "Recognize anticholinergic intoxication and use physostigmine safely.",
  "Use diphenhydramine, hydroxyzine, promethazine and cyproheptadine, knowing their interactions, laboratory effects and safety warnings.",
  "Describe the dopamine agonists and amantadine: pharmacology, psychiatric uses, adverse effects and dosing.",
  "Manage psychotropic-induced weight gain with lifestyle measures, metformin, topiramate and approved weight-loss drugs.",
  "Apply the post-publication changes, including GLP-1 receptor agonists for antipsychotic weight gain."
 ],
 parts
};
const cat=k=>cards.flatMap(c=>c[k]||[]);
const hy=cat('hy'),dx=cat('dx'),ph=cat('pharm'),fd=cat('foundations');let cs=cat('cases');
function rng(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0;}return()=>{h^=h<<13;h>>>=0;h^=h>>>17;h^=h<<5;h>>>=0;return h/4294967296;};}
const whyNot={};
cs=cs.map(c=>{
  if(!c.whyNot||c.whyNot.length!==c.choices.length) throw new Error('whyNot missing or misaligned: '+c.id);
  c.whyNot.forEach((t,i)=>{ if((i===c.answer)!==(t==='')) throw new Error('whyNot blank mismatch: '+c.id+' choice '+i); });
  const r=rng(c.id+(process.env.SEED||'d'));const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
  whyNot[c.id]=idx.map(i=>c.whyNot[i]);
  const {whyNot:_w,...rest}=c;
  return {...rest,choices:idx.map(i=>c.choices[i]),answer:idx.indexOf(c.answer)};
});
const ids=new Set();const dup=[];
for(const arr of [hy,dx,cs,ph,fd]) for(const x of arr){if(ids.has(x.id))dup.push(x.id);ids.add(x.id);}
const secIds=guide.parts.flatMap(p=>p.sections.map(s=>s.id));
secIds.forEach(s=>{if(ids.has(s))dup.push(s);ids.add(s);});
if(dup.length){console.log('DUP',dup);process.exit(1);}
cs.forEach(c=>{if(c.choices.length!==5||c.answer<0)throw c.id;});
const dist=[0,0,0,0,0];cs.forEach(c=>dist[c.answer]++);
// learning layer
const checks=ev('checks.js');
const missing=secIds.filter(s=>!(checks[s]||[]).length), extra=Object.keys(checks).filter(s=>!secIds.includes(s));
if(missing.length||extra.length){console.log('CHECKS missing',missing,'extra',extra);process.exit(1);}
const learning={
  pretest:["c2110-01","c2110-05","c2110-08","c2110-09","c2110-13","c2110-26","c2110-30","c2110-35"],
  domains:{"c2110-09":"C","c2110-18":"D","c2110-23":"E","c2110-25":"E","c2110-26":"E","c2110-27":"C","c2110-31":"E","c2110-36":"E","c2110-12":"E"},
  whyNot,
  checks,
  visuals:[
    {sec:"s2110-ac-ind",at:1,block:{type:"heatmap",title:"Visual summary: which drug for which movement side effect",
      cols:["Acute dystonia","Parkinsonism","Akathisia","Tardive dyskinesia"],
      rows:[{label:"Anticholinergics (benztropine)",v:[3,3,1,0]},{label:"Diphenhydramine",v:[3,2,2,0]},{label:"Amantadine",v:[1,3,0,0]},{label:"β-blockers",v:[0,0,3,0]},{label:"Benzodiazepines",v:[2,0,2,0]},{label:"VMAT2 inhibitors (post-publication)",v:[0,0,0,3]}],
      legend:["Not effective or not used","Weak or second line","Effective","First choice"],
      note:"Built from this section: anticholinergics and diphenhydramine treat dystonia and parkinsonism; amantadine matches anticholinergics for parkinsonism but is weaker for dystonia and ineffective for akathisia and TD; β-blockers lead for akathisia; VMAT2 inhibitors (2017) treat TD."}},
    {sec:"s2110-wt-new",at:2,block:{type:"heatmap",title:"Visual summary: weight loss versus placebo in antipsychotic-treated patients",
      cols:["Weight loss","Strength of evidence"],
      rows:[{label:"Semaglutide (about 11 kg)",v:[3,2]},{label:"Liraglutide (about 5 kg)",v:[2,2]},{label:"Topiramate (about 4 kg)",v:[2,2]},{label:"Metformin (about 4 kg)",v:[2,3]},{label:"Exenatide (about 3 kg)",v:[1,1]}],
      legend:["Little","Modest","Moderate","Large or strongest"],
      note:"From the 2026 JAMA Psychiatry network meta-analysis (95 trials): semaglutide gave the largest loss; metformin has the most trials (16)."}}
  ]
};
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 21.10 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., section 21.10. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch21-10", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
w('learning.js','learning',JSON.stringify(learning,null,1),'learning layer: wrong-answer explanations (aligned with each case\'s shuffled choices), section checks, pre-test, board-domain overrides and visual summaries');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
