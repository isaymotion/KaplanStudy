const fs=require('fs'), W='/home/claude/ch25-3work/', OUT='/home/claude/kaplanstudy/data/ch25-3/';
const ev=f=>eval('('+fs.readFileSync(W+f,'utf8')+')');
fs.mkdirSync(OUT,{recursive:true});
const N=4;
const parts=[];for(let i=1;i<=N;i++)parts.push(ev('g'+i+'.js'));
const cards=[];for(let i=1;i<=1;i++)cards.push(ev('c'+i+'.js'));
const guide={
 intro:"Section 25.3 covers psychiatric emergencies: emergency settings and epidemiology, triage and the five questions every evaluation must answer, telling medical from psychiatric causes, interviewing psychotic, suicidal and violent patients and survivors of rape, emergency psychotherapy, medication, restraint, disposition and documentation, the book's table of common psychiatric emergencies, and emergencies in children (suicidal behavior, violence, fire setting, abuse, neglect, factitious illness, school refusal). Dashed boxes add what has changed since the 12th edition, including universal suicide screening, safety planning and 988, Project BETA agitation guidance and newer agitation drugs, CMS restraint rules, and corrections on flumazenil, emergency contraception, priapism, sumatriptan, paper bag rebreathing and anorexia criteria.",
 objectives:[
  "Organize an emergency evaluation around safety, triage and the five questions, and document the rationale for each decision.",
  "Recognize the features that point to a medical cause of psychiatric symptoms.",
  "Assess suicide and violence risk, and evaluate and support a survivor of rape.",
  "Choose emergency medication, restraint and disposition, including current agitation and restraint standards.",
  "Recognize and treat the common substance, medication, psychiatric and medical emergencies in Table 25-12.",
  "Evaluate and manage emergencies in children: suicidal behavior, violence, fire setting, abuse, neglect, factitious illness and school refusal."
 ],
 parts
};
const cat=k=>cards.flatMap(c=>c[k]||[]);
const hy=cat('hy'),dx=cat('dx'),ph=cat('ph'),fd=cat('fd');let cs=cat('cs');
function rng(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0;}return()=>{h^=h<<13;h>>>=0;h^=h>>>17;h^=h<<5;h>>>=0;return h/4294967296;};}
cs=cs.map(c=>{const r=rng(c.id+(process.env.SEED||'em4'));const idx=c.choices.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]];}
 return {...c,choices:idx.map(i=>c.choices[i]),answer:idx.indexOf(c.answer)};});
const ids=new Set();const dup=[];
for(const arr of [hy,dx,cs,ph,fd]) for(const x of arr){if(ids.has(x.id))dup.push(x.id);ids.add(x.id);}
const secIds=guide.parts.flatMap(p=>p.sections.map(s=>s.id));
secIds.forEach(s=>{if(ids.has(s))dup.push(s);ids.add(s);});
if(dup.length){console.log('DUP',dup);process.exit(1);}
cs.forEach(c=>{if(c.choices.length!==5||c.answer<0)throw c.id;});
const dist=[0,0,0,0,0];cs.forEach(c=>dist[c.answer]++);
const line=a=>'[\n'+a.map(x=>'  '+JSON.stringify(x)).join(',\n')+'\n]';
const hdr='/* Chapter 25.3 %s. Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., section 25.3. */\n';
const w=(f,key,body,what)=>fs.writeFileSync(OUT+f,hdr.replace('%s',what)+'KS.add("ch25-3", "'+key+'", '+body+');\n');
w('guide.js','guide',JSON.stringify(guide,null,2),'study guide');
w('highyield.js','highYield',JSON.stringify(hy,null,2),'high yield (bold text becomes a blank in "Hide key facts" mode)');
w('cards-diagnosis.js','diagnosis',line(dx),'diagnosis cards');
w('cards-cases.js','cases',line(cs),'clinical case cards: single best answer');
w('cards-pharm.js','pharm',line(ph),'pharmacology cards');
w('cards-foundations.js','foundations',line(fd),'foundations cards');
console.log('parts',N,'sections',secIds.length,'hy topics',hy.length,'hy items',hy.reduce((a,t)=>a+t.items.length,0),'dx',dx.length,'cs',cs.length,'ph',ph.length,'fd',fd.length,'total cards',dx.length+cs.length+ph.length+fd.length,'answer dist',dist);
