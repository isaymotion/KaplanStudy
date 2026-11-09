const fs=require('fs'), W='/home/claude/ch20work/', OUT='/home/claude/kaplanstudy/data/ch20/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=4;
const parts=[];for(let i=1;i<=N;i++){const g=ev('g'+i+'.js');if(g.parts)parts.push(...g.parts);else parts.push(g);}
const cards=[];for(let i=1;i<=N;i++)cards.push(ev('c'+i+'.js'));
const guide={
 intro:"Chapter 20 covers conditions that are not mental disorders but still bring people to clinical attention: malingering, bereavement, occupational problems, adult antisocial behavior, religious or spiritual problems, acculturation problems, phase of life problems, nonadherence to treatment and relational problems. Each can be recorded with or without a mental disorder. The chapter covers how to recognize each, how to tell it apart from a true disorder, and how to manage it.",
 objectives:[
  "Explain the three ways this category is used and list the main groups of conditions in DSM-5 (Table 20-1).",
  "Recognize malingering from its clues and motives, separate it from factitious, conversion and somatoform disorders, and manage it with tactful but firm confrontation.",
  "Tell normal bereavement from a major depressive episode using the features that suggest depression.",
  "Identify occupational stressors, the groups at higher risk, and when work problems need referral or vocational rehabilitation.",
  "Diagnose adult antisocial behavior as a diagnosis of exclusion and know its differential, epidemiology, causes, treatment and prevention.",
  "Distinguish religious experience from psychopathology, and culture shock or brainwashing from psychiatric illness, and know the effects of imprisonment and torture.",
  "Assess phase of life problems, nonadherence and relational problems (partner, parent-child, sibling and those linked to illness) and choose the right level of help."
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
const hdr='/* Chapter 20 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., Chapter 20. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch20", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
