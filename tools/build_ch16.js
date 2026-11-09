const fs=require('fs'), W='/home/claude/ch16work/', OUT='/home/claude/kaplanstudy/data/ch16/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=6;
const parts=[];for(let i=1;i<=N;i++){const g=ev('g'+i+'.js');if(g.parts)parts.push(...g.parts);else parts.push(g);}
const cards=[];for(let i=1;i<=N;i++)cards.push(ev('c'+i+'.js'));
const guide={
 intro:"Chapter 16 covers human sexuality in four parts: the DSM-5 sexual dysfunctions (desire and arousal, erection, orgasm and ejaculation, genito-pelvic pain), including those caused by medical illness and by drugs; their treatment with medication, devices and sex therapy; the paraphilic disorders and compulsive sexual behavior; and normal sexuality, from sexual development and identity to the brain and the sexual response cycle.",
 objectives:[
  "Take a sex history and apply the DSM-5 framework for sexual dysfunction: lifelong or acquired, generalized or situational, and severity by distress.",
  "Recognize each sexual dysfunction from its criteria and presentation, and separate psychological from organic causes.",
  "Identify the medical conditions and drugs, especially psychiatric drugs, that impair desire, erection, ejaculation and orgasm, and manage drug-induced dysfunction.",
  "Plan treatment: PDE-5 inhibitors and other somatic options, and the techniques of dual-sex therapy, behavior therapy and related psychotherapies.",
  "Diagnose the paraphilic disorders, know when a paraphilia becomes a disorder, and outline their course, treatment and the concept of compulsive sexual behavior.",
  "Describe normal sexual development, sexual and gender identity, the biology of sexual behavior and the phases of the sexual response cycle."
 ],
 parts
};
const cat=k=>cards.flatMap(c=>c[k]||[]);
const hy=cat('hy'),dx=cat('dx'),ph=cat('ph'),fd=cat('fd');let cs=cat('cs');
function rng(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0;}return()=>{h^=h<<13;h>>>=0;h^=h>>>17;h^=h<<5;h>>>=0;return h/4294967296;};}
cs=cs.map(c=>{const r=rng(c.id+(process.env.SEED||'d'));const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
 return {...c,choices:idx.map(i=>c.choices[i]),answer:idx.indexOf(c.answer)};});
const ids=new Set();const dup=[];
for(const arr of [hy,dx,cs,ph,fd]) for(const x of arr){if(ids.has(x.id))dup.push(x.id);ids.add(x.id);}
const secIds=guide.parts.flatMap(p=>p.sections.map(s=>s.id));
secIds.forEach(s=>{if(ids.has(s))dup.push(s);ids.add(s);});
if(dup.length){console.log('DUP',dup);process.exit(1);}
cs.forEach(c=>{if(c.choices.length!==5||c.answer<0)throw c.id;});
const dist=[0,0,0,0,0];cs.forEach(c=>dist[c.answer]++);
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 16 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., Chapter 16. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch16", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
