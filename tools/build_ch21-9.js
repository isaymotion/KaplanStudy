const fs=require('fs'), W='/home/claude/ch21-9work/', OUT='/home/claude/kaplanstudy/data/ch21-9/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=4;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[ev('c1.js')];
const guide={
 intro:"Section 21.9 covers the drugs used to treat sexual disorders: the phosphodiesterase-5 inhibitors sildenafil, vardenafil and tadalafil, including the erectile cascade, pharmacokinetics, cardiac risk and nitrates, vision and hearing effects, interactions and dosing; phenylephrine for priapism; and yohimbine. Dashed boxes add what has changed since the 12th edition, including avanafil and other approvals, riociguat and nitrate timing, label corrections, the current priapism guideline, evidence in women on antidepressants, yohimbe supplements, and flibanserin and bremelanotide for low sexual desire in women.",
 objectives:[
  "Explain the nitric oxide–cGMP erectile cascade and why PDE-5 inhibitors need sexual stimulation.",
  "Compare sildenafil, vardenafil and tadalafil by onset, half-life, duration and dosing.",
  "Screen for cardiac risk and nitrate use, and recognize vision loss, hearing loss and priapism.",
  "Treat priapism with phenylephrine and manage common drug interactions.",
  "Describe yohimbine's pharmacology, risks and limited role.",
  "Apply the post-publication changes, including newer drugs for erectile dysfunction and low sexual desire in women."
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
  const r=rng(c.id+(process.env.SEED||'b'));const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
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
  pretest:["c219-01","c219-02","c219-05","c219-08","c219-12","c219-14","c219-16","c219-25"],
  domains:{"c219-01":"A","c219-04":"D","c219-09":"C","c219-13":"H","c219-16":"E","c219-17":"E","c219-18":"E","c219-19":"E","c219-24":"E","c219-26":"E"},
  whyNot,
  checks,
  visuals:[
    {sec:"s219-pk",at:2,block:{type:"heatmap",title:"Visual summary: the PDE-5 inhibitors side by side",
      cols:["Speed of onset","Duration","Daily dosing option","Back and muscle pain"],
      rows:[{label:"Sildenafil",v:[2,1,0,0]},{label:"Vardenafil",v:[2,1,0,0]},{label:"Tadalafil",v:[2,3,3,2]},{label:"Avanafil (post-publication)",v:[3,1,0,0]}],
      legend:["None","Low","Moderate","High"],
      note:"Built from this section: sildenafil and vardenafil last about 4 hours; tadalafil lasts up to 36 hours and can be taken daily, with back and muscle pain in about 10%; avanafil (2012) can work in about 15 minutes."}},
    {sec:"s219-women",at:1,block:{type:"chronology",title:"Visual summary: milestones in sexual medicine drugs",events:[
      {year:"1998",label:"**Sildenafil**, the first PDE-5 inhibitor"},
      {year:"2003",label:"**Vardenafil** and **tadalafil**"},
      {year:"2007",label:"Sudden **hearing loss** added to PDE-5 inhibitor labels",note:"Post-publication correction"},
      {year:"2008",label:"RCT: sildenafil helps **women** with antidepressant-associated dysfunction",note:"Post-publication"},
      {year:"2012",label:"**Avanafil**, a fast-onset PDE-5 inhibitor",note:"Post-publication"},
      {year:"2015",label:"**Flibanserin** for low sexual desire in premenopausal women",note:"Post-publication"},
      {year:"2019",label:"**Bremelanotide** approved; flibanserin alcohol rule relaxed",note:"Post-publication"},
      {year:"2022",label:"Urology **priapism guideline** with higher phenylephrine doses",note:"Post-publication"}
    ],note:"Post-publication entries are sourced in the dashed boxes of this section."}}
  ]
};
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 21.9 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., section 21.9. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch21-9", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
w('learning.js','learning',JSON.stringify(learning,null,1),'learning layer: wrong-answer explanations (aligned with each case\'s shuffled choices), section checks, pre-test, board-domain overrides and visual summaries');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
