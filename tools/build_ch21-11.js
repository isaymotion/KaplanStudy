const fs=require('fs'), W='/home/claude/ch21-11work/', OUT='/home/claude/kaplanstudy/data/ch21-11/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=4;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[ev('c1.js')];
const guide={
 intro:"Section 21.11 covers products patients often take without telling their psychiatrist: dietary supplements, medical foods and phytomedicines (herbal preparations). It explains how DSHEA and the medical food rules differ from drug regulation, reviews the supplements and herbs the book tabulates, from SAMe, 5-HTP and L-methylfolate to St. John's wort, kava, ginkgo and kratom, and shows how to take a nonjudgmental supplement history and spot dangerous interactions. Dashed boxes add what has changed since the 12th edition, including the ephedra ban, tianeptine and 7-OH warnings, melatonin poisonings and mislabeling, St. John's wort enzyme induction, the kava advisory, the ginkgo prevention trial, L-tryptophan and eosinophilia-myalgia syndrome, ashwagandha liver injury and the omega-3 guideline.",
 objectives:[
  "Distinguish dietary supplements, medical foods and prescription drugs by how they are regulated and what each requires.",
  "Name the supplements used in psychiatry, their doses and their key adverse effects and interactions.",
  "Recognize the medical foods with psychoactive claims and how L-methylfolate and N-acetylcysteine are used.",
  "Identify the phytomedicines that cause serotonin syndrome, lower drug levels, sedate, bleed or injure the liver.",
  "Advise on supplements in pregnancy, lactation, surgery and childhood ingestion.",
  "Take a nonjudgmental supplement history and apply the post-publication safety warnings."
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
  const r=rng(c.id+(process.env.SEED||'s'));const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
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
  pretest:["c2111-01","c2111-02","c2111-07","c2111-10","c2111-13","c2111-17","c2111-25","c2111-32"],
  domains:{"c2111-01":"I","c2111-02":"I","c2111-03":"I","c2111-06":"F","c2111-07":"C","c2111-13":"C","c2111-21":"C","c2111-22":"C","c2111-24":"G","c2111-34":"D","c2111-35":"C","c2111-38":"C","c2111-39":"C","c2111-23":"I"},
  whyNot,
  checks,
  visuals:[
    {sec:"s2111-history",at:3,block:{type:"heatmap",title:"Visual summary: which supplements carry which risks",
      cols:["Serotonin syndrome","Lowers other drugs","Liver toxicity","Bleeding","Sedation"],
      rows:[{label:"St. John's wort",v:[3,3,0,0,1]},{label:"5-HTP, L-tryptophan",v:[3,0,0,0,1]},{label:"SAMe",v:[2,0,0,0,0]},{label:"Kava",v:[0,0,3,0,3]},{label:"Valerian, skullcap",v:[0,0,2,0,3]},{label:"Ginkgo",v:[0,0,0,3,0]},{label:"Fish oil, DHA, vitamin E",v:[0,0,0,2,0]},{label:"Hops",v:[0,2,0,0,2]},{label:"Ephedra, ginseng (MAOI danger)",v:[1,0,0,0,0]}],
      legend:["Not a known risk","Possible","Moderate","Major"],
      note:"A teaching summary of Tables 21-62 and 21-64 with the post-publication updates: St. John's wort is both serotonergic and a broad enzyme inducer; kava, valerian and skullcap are hepatotoxic; ginkgo and fish oils add to bleeding."}},
    {sec:"s2111-safety",at:2,block:{type:"chronology",title:"Visual summary: supplement safety milestones",
      events:[
        {year:"1989",label:"**L-tryptophan** linked to eosinophilia-myalgia syndrome; nationwide recall"},
        {year:"1994",label:"**DSHEA** defines dietary supplements: no premarket approval"},
        {year:"2002",label:"FDA advisory on **kava** and severe liver injury"},
        {year:"2004",label:"**Ephedra** (ephedrine alkaloid) supplements banned"},
        {year:"2022",label:"Pediatric **melatonin** ingestions up about 530% over a decade"},
        {year:"2023",label:"**Tianeptine** warnings; melatonin gummies 74% to 347% of label"},
        {year:"2025",label:"FDA recommends scheduling concentrated **7-OH** (kratom)"}
      ],
      note:"Only DSHEA is in the book; the other milestones are post-publication context, each sourced in this section's dashed boxes."}}
  ]
};
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 21.11 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., section 21.11. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch21-11", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
w('learning.js','learning',JSON.stringify(learning,null,1),'learning layer: wrong-answer explanations (aligned with each case\'s shuffled choices), section checks, pre-test, board-domain overrides and visual summaries');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
