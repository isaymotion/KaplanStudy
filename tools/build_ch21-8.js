const fs=require('fs'), W='/home/claude/ch21-8work/', OUT='/home/claude/kaplanstudy/data/ch21-8/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=4;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[ev('c1.js')];
const guide={
 intro:"Section 21.8 covers the drugs used for cognitive enhancement in dementia: the cholinesterase inhibitors donepezil, rivastigmine, galantamine and the historical tacrine, and the NMDA antagonist memantine, with their pharmacology, indications, adverse effects, interactions and dosing. Dashed boxes add what has changed since the 12th edition, including donepezil's approval for severe disease, new patches and combination products, tacrine's withdrawal, label dose corrections, anti-amyloid antibodies, Alzheimer blood tests, the mild cognitive impairment guideline and the first approved drug for agitation in Alzheimer dementia.",
 objectives:[
  "Explain how cholinesterase inhibitors and memantine work and why they suit different stages of Alzheimer disease.",
  "Compare donepezil, rivastigmine and galantamine by half-life, selectivity, side effects and drug interactions.",
  "Start and titrate each drug, and recognize bradycardia, syncope, GI effects and the catastrophic reaction.",
  "Describe tacrine's hepatotoxicity monitoring and why it was abandoned.",
  "Use memantine safely, including renal elimination, alkaline urine and combination therapy.",
  "Apply the post-publication changes: new approvals and forms, anti-amyloid antibodies and ARIA, blood biomarkers, mild cognitive impairment and agitation."
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
  const r=rng(c.id+(process.env.SEED||'g'));const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
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
  pretest:["c218-01","c218-03","c218-09","c218-12","c218-13","c218-20","c218-24","c218-27"],
  domains:{"c218-01":"E","c218-10":"E","c218-12":"E","c218-14":"E","c218-16":"E","c218-17":"E","c218-20":"E","c218-21":"A","c218-24":"D","c218-26":"E","c218-27":"E","c218-29":"E","c218-30":"I","c218-31":"D","c218-32":"E","c218-11":"D","c218-25":"C"},
  whyNot,
  checks,
  visuals:[
    {sec:"s218-ae",at:2,block:{type:"heatmap",title:"Visual summary: GI and other side effects by drug and dose (Table 21-56)",
      cols:["Nausea","Vomiting","Diarrhea","Dizziness"],
      rows:[{label:"Donepezil 5 mg",v:[0,0,1,2]},{label:"Donepezil 10 mg",v:[2,1,2,2]},{label:"Rivastigmine 1 to 4 mg",v:[2,1,1,2]},{label:"Rivastigmine 6 to 12 mg",v:[3,3,2,3]},{label:"Galantamine 8 mg",v:[1,0,1,0]},{label:"Galantamine 16 mg",v:[2,1,2,0]},{label:"Galantamine 24 mg",v:[2,1,1,0]}],
      legend:["Under 5% or not reported","5% to 9%","10% to 19%","20% or more"],
      note:"Banded from Table 21-56. Rates rise with dose for every drug; rivastigmine at 6 to 12 mg a day is the outlier (nausea 48%, vomiting 27%)."}},
    {sec:"s218-amyloid",at:2,block:{type:"chronology",title:"Visual summary: cognitive drug milestones",events:[
      {year:"1993",label:"**Tacrine**, the first cholinesterase inhibitor"},
      {year:"1996–2001",label:"**Donepezil**, **rivastigmine** and **galantamine** for mild to moderate Alzheimer disease"},
      {year:"2003",label:"**Memantine** for moderate to severe Alzheimer disease"},
      {year:"2005",label:"Galantamine renamed **Razadyne** in the US",note:"Post-publication correction"},
      {year:"2006",label:"**Donepezil** for severe disease; **rivastigmine** for Parkinson disease dementia",note:"Post-publication correction"},
      {year:"2013",label:"**Tacrine** withdrawn in the US",note:"Post-publication"},
      {year:"2014",label:"**Memantine ER–donepezil** capsule",note:"Post-publication"},
      {year:"2021",label:"**Aducanumab** accelerated approval (discontinued 2024)",note:"Post-publication"},
      {year:"2023",label:"**Lecanemab** traditional approval; **brexpiprazole** for Alzheimer agitation",note:"Post-publication"},
      {year:"2024",label:"**Donanemab** approved",note:"Post-publication"},
      {year:"2025",label:"First Alzheimer **blood test** cleared; subcutaneous lecanemab; gentler donanemab titration",note:"Post-publication"}
    ],note:"Approval years before 2005 are given for orientation; post-publication entries are sourced in the dashed boxes of this section."}}
  ]
};
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 21.8 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., section 21.8. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch21-8", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
w('learning.js','learning',JSON.stringify(learning,null,1),'learning layer: wrong-answer explanations (aligned with each case\'s shuffled choices), section checks, pre-test, board-domain overrides and visual summaries');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
