const fs=require('fs'), W='/home/claude/ch13work/', OUT='/home/claude/app/data/ch13/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=7;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[];for(let i=1;i<=2;i++)cards.push(ev('c'+i+'.js'));
const guide={
 intro:"Chapter 13 covers the feeding and eating disorders of adolescence and adulthood: anorexia nervosa, bulimia nervosa, binge-eating disorder and other specified feeding or eating disorders such as night-eating syndrome and purging disorder. It sets out their diagnosis, medical complications and laboratory findings, differential diagnosis, comorbidity, course and mortality, treatment from refeeding to psychotherapy and medication, epidemiology and theories of cause.",
 objectives:[
  "Diagnose anorexia nervosa and its restricting and binge-eating/purging subtypes, knowing that body image distortion is not required.",
  "Diagnose bulimia nervosa, binge-eating disorder, night-eating syndrome and purging disorder, and tell them apart from one another.",
  "Recognize the medical complications and laboratory findings of starvation and purging, including hypokalemic alkalosis and ECG changes.",
  "Separate anorexia nervosa from depression, psychosis and medical causes of weight loss, and bulimia from neurologic causes of overeating.",
  "Decide when to hospitalize, and plan safe refeeding, ward management and family-based therapy or CBT.",
  "Choose medication appropriately: fluoxetine for bulimia, lisdexamfetamine for binge-eating disorder, no proven drug for anorexia nervosa, and no bupropion in bulimia."
 ],
 parts
};
const cat=k=>cards.flatMap(c=>c[k]||[]);
const hy=cat('hy'),dx=cat('dx'),ph=cat('ph'),fd=cat('fd');let cs=cat('cs');
function rng(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0;}return()=>{h^=h<<13;h>>>=0;h^=h>>>17;h^=h<<5;h>>>=0;return h/4294967296;};}
cs=cs.map(c=>{const r=rng(c.id+(process.env.SEED||'e13'));const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
 return {...c,choices:idx.map(i=>c.choices[i]),answer:idx.indexOf(c.answer)};});
const ids=new Set();const dup=[];
for(const arr of [hy,dx,cs,ph,fd]) for(const x of arr){if(ids.has(x.id))dup.push(x.id);ids.add(x.id);}
const secIds=guide.parts.flatMap(p=>p.sections.map(s=>s.id));
secIds.forEach(s=>{if(ids.has(s))dup.push(s);ids.add(s);});
if(dup.length){console.log('DUP',dup);process.exit(1);}
cs.forEach(c=>{if(c.choices.length!==5||c.answer<0)throw c.id;});
const dist=[0,0,0,0,0];cs.forEach(c=>dist[c.answer]++);
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 13 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., Chapter 13. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch13", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
