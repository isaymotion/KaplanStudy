const fs=require('fs'), W='/home/claude/ch21-7work/', OUT='/home/claude/kaplanstudy/data/ch21-7/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=5;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[ev('c1.js')];
const guide={
 intro:"Section 21.7 covers the drugs used to treat substance use disorders: the opioid agonists methadone and buprenorphine (and tramadol's antidepressant use), the opioid antagonists naltrexone, nalmefene and naloxone with the naloxone challenge test and rapid detoxification, disulfiram and acamprosate for alcohol use disorder, and clonidine and guanfacine for withdrawal, tics and hyperactivity. Dashed boxes add what has changed since the 12th edition, including the end of the buprenorphine X-waiver, new opioid treatment program rules, long-acting buprenorphine injections, induction in the fentanyl era, buprenorphine–naloxone in pregnancy, over-the-counter naloxone and the return of nalmefene, lofexidine, and the APA alcohol guideline.",
 objectives:[
  "Explain µ and κ opioid receptor effects and how methadone, buprenorphine, naltrexone, nalmefene and naloxone act on them.",
  "Start and dose methadone and buprenorphine safely, including induction timing, precipitated withdrawal, pregnancy and long-term maintenance.",
  "Confirm an opioid-free state with the naloxone challenge test, use antagonists for opioid and alcohol use disorder, and describe rapid detoxification.",
  "Use disulfiram and acamprosate appropriately, including the disulfiram–alcohol reaction, contraindications and renal dosing.",
  "Use clonidine and guanfacine for withdrawal syndromes, tics and childhood hyperactivity, and manage their hypotension, overdose and rebound.",
  "Apply the regulatory, product and guideline changes since the book."
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
  pretest:["c217-02","c217-05","c217-08","c217-10","c217-13","c217-20","c217-24","c217-26"],
  domains:{"c217-04":"E","c217-05":"E","c217-08":"E","c217-11":"E","c217-12":"E","c217-14":"D","c217-16":"E","c217-18":"E","c217-19":"E","c217-20":"E","c217-22":"E","c217-23":"A","c217-24":"E","c217-28":"E","c217-29":"F","c217-30":"G","c217-31":"E"},
  whyNot,
  checks,
  visuals:[
    {sec:"s217-antag",at:3,block:{type:"heatmap",title:"Visual summary: opioid receptor actions of the treatment drugs",
      cols:["µ agonism","µ blockade","κ blockade","δ blockade"],
      rows:[{label:"Methadone",v:[3,0,0,0]},{label:"Buprenorphine",v:[2,0,3,0]},{label:"Naltrexone",v:[0,3,1,1]},{label:"Nalmefene",v:[0,3,3,3]},{label:"Naloxone",v:[0,3,2,2]}],
      legend:["None","Weak","Partial or moderate","Strong"],
      note:"Built from the book's descriptions: methadone is a pure µ agonist; buprenorphine a partial µ agonist and potent κ antagonist; naltrexone a potent µ but weak κ and δ antagonist; nalmefene equally potent at all three; naloxone has its highest affinity for µ. Buprenorphine also occupies µ receptors so tightly that it blocks other opioids, which this simple grid does not show."}},
    {sec:"s217-choose",at:1,block:{type:"chronology",title:"Visual summary: treatment milestones",events:[
      {year:"1994",label:"Naltrexone approved for **alcohol dependence**"},
      {year:"2002",label:"Sublingual **buprenorphine** and buprenorphine–naloxone approved for opioid dependence"},
      {year:"2003",label:"**LAAM** withdrawn (QT prolongation)",note:"Post-publication correction"},
      {year:"2006",label:"Monthly **extended-release naltrexone** injection"},
      {year:"2017",label:"Monthly **buprenorphine depot** injection (Sublocade)"},
      {year:"2018",label:"**Lofexidine**, the first non-opioid drug approved for opioid withdrawal",note:"Post-publication"},
      {year:"2020",label:"**Probuphine** implants withdrawn",note:"Post-publication"},
      {year:"2022",label:"**X-waiver** eliminated: any Schedule III DEA registrant may prescribe buprenorphine",note:"Post-publication"},
      {year:"2023",label:"**Naloxone** nasal spray over the counter; **Brixadi** weekly and monthly injection; **Opvee** nalmefene nasal spray",note:"Post-publication"},
      {year:"2024",label:"New federal **opioid treatment program** rule (take-homes, telehealth, no 1-year history)",note:"Post-publication"},
      {year:"2025",label:"**Sublocade** rapid initiation after one transmucosal dose",note:"Post-publication"}
    ],note:"Post-publication entries are sourced in the dashed boxes of this section."}}
  ]
};
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 21.7 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., section 21.7. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch21-7", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
w('learning.js','learning',JSON.stringify(learning,null,1),'learning layer: wrong-answer explanations (aligned with each case\'s shuffled choices), section checks, pre-test, board-domain overrides and visual summaries');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
