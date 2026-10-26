// Usage: node apply.js chNN  — merges updwork/learn-chNN-whynot.js and learn-chNN-rest.js into data/chNN/learning.js
const fs=require('fs'), ch=process.argv[2], U='/home/claude/updwork/', K='/home/claude/kaplanstudy/';
global.window=global; window.KS={}; eval(fs.readFileSync(K+'data/chapters.js','utf8'));
const m=KS.manifest.find(x=>x.id===ch); m.files.filter(f=>f!=='learning').forEach(f=>eval(fs.readFileSync(K+'data/'+ch+'/'+f+'.js','utf8')));
const C=KS.chapters[ch], ev=f=>eval('('+fs.readFileSync(U+f,'utf8')+')');
const whyNot=ev('learn-'+ch+'-whynot.js'), rest=ev('learn-'+ch+'-rest.js');
const errs=[]; const cases=C.cases||[];
cases.forEach(c=>{const w=whyNot[c.id]; if(!w){errs.push('missing '+c.id);return;} if(w.length!==c.choices.length) errs.push(c.id+' length'); w.forEach((t,i)=>{ if((i===c.answer)!==(t==='')) errs.push(c.id+' blank mismatch at '+i+' (answer '+c.answer+')'); });});
Object.keys(whyNot).forEach(id=>{ if(!cases.find(c=>c.id===id)) errs.push('unknown case '+id); });
const secs=[]; C.guide.parts.forEach(p=>p.sections.forEach(s=>secs.push(s.id)));
secs.forEach(s=>{ if(!((rest.checks||{})[s]||[]).length) errs.push('no checks '+s); });
Object.keys(rest.checks||{}).forEach(s=>{ if(!secs.includes(s)) errs.push('checks unknown section '+s); });
if(errs.length){ console.log(errs.join('\n')); process.exit(1); }
const L={ pretest: rest.pretest||[], domains: rest.domains||{}, whyNot, checks: rest.checks, visuals: rest.visuals||[] };
fs.writeFileSync(K+'data/'+ch+'/learning.js', '/* Chapter '+m.number+' learning layer: wrong-answer explanations (aligned with each case\'s choices; "" for the correct one), end-of-section checks, pre-test, board-domain overrides and visual summaries.\n   Source: Kaplan & Sadock\'s Synopsis of Psychiatry, 12th ed., Chapter '+m.number+', and the post-publication updates in this chapter. */\nKS.add("'+ch+'", "learning", '+JSON.stringify(L,null,1)+');\n');
console.log(ch,'ok: cases',cases.length,'sections',secs.length,'visuals',L.visuals.length);
