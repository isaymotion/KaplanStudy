/* Validates every chapter's learning layer and reports coverage. Usage: node tools/validate-learning.js [--strict chId ...] */
global.window=global; window.KS={}; const fs=require('fs'); process.chdir('/home/claude/kaplanstudy');
eval(fs.readFileSync('data/chapters.js','utf8'));
for(const m of KS.manifest) for(const f of m.files) eval(fs.readFileSync('data/'+m.id+'/'+f+'.js','utf8'));
eval(fs.readFileSync('data/lookalikes.js','utf8'));
const strict=process.argv.includes('--strict')?process.argv.slice(process.argv.indexOf('--strict')+1):[];
let errs=[], rows=[];
for(const m of KS.manifest){ const c=KS.chapters[m.id], L=c.learning; if(!L){errs.push(m.id+': no learning file');continue;}
  const cases=c.cases||[], secs=[]; c.guide.parts.forEach(p=>p.sections.forEach(s=>secs.push(s)));
  let wn=0; for(const k of cases){ const w=(L.whyNot||{})[k.id]; if(!w) continue; wn++;
    if(w.length!==k.choices.length) errs.push(m.id+' '+k.id+': whyNot length '+w.length+' vs '+k.choices.length);
    w.forEach((t,i)=>{ if(i===k.answer && t) errs.push(m.id+' '+k.id+': text at correct answer'); if(i!==k.answer && !String(t).trim()) errs.push(m.id+' '+k.id+': missing reason for choice '+i); }); }
  Object.keys(L.whyNot||{}).forEach(id=>{ if(!cases.find(k=>k.id===id)) errs.push(m.id+': whyNot for unknown case '+id); });
  let ck=0; secs.forEach(s=>{ const q=(L.checks||{})[s.id]||[]; if(q.length) ck++; q.forEach(x=>{ if(!x.q||!x.a) errs.push(m.id+' '+s.id+': empty check'); }); });
  Object.keys(L.checks||{}).forEach(id=>{ if(!secs.find(s=>s.id===id)) errs.push(m.id+': checks for unknown section '+id); });
  (L.pretest||[]).forEach(id=>{ if(!cases.find(k=>k.id===id)) errs.push(m.id+': pretest unknown case '+id); });
  Object.entries(L.domains||{}).forEach(([id,d])=>{ if(!cases.find(k=>k.id===id)) errs.push(m.id+': domain for unknown case '+id); if(!/^[A-I]$/.test(d)) errs.push(m.id+' '+id+': bad domain '+d); });
  (L.visuals||[]).forEach(v=>{ if(!secs.find(s=>s.id===v.sec)) errs.push(m.id+': visual in unknown section '+v.sec); const b=v.block; if(b.type==='heatmap') b.rows.forEach(r=>{ if(r.v.length!==b.cols.length) errs.push(m.id+': heatmap row '+r.label+' length'); }); });
  const done = wn===cases.length && ck===secs.length;
  if(strict.includes(m.id) && !done) errs.push(m.id+': incomplete (strict)');
  rows.push([m.id, wn+'/'+cases.length, ck+'/'+secs.length, (L.pretest||[]).length?'set':'auto', (L.visuals||[]).length, done?'COMPLETE':'']);
}
KS.lookalikes.forEach(l=>{ l.rows.forEach(r=>{ if(r.length!==l.items.length+1) errs.push('lookalike '+l.id+': row length '+r[0]); }); (l.links||[]).forEach(k=>{ const c=KS.chapters[k.ch]; if(!c){errs.push('lookalike '+l.id+': unknown chapter '+k.ch);return;} let f=false; c.guide.parts.forEach(p=>p.sections.forEach(s=>{if(s.id===k.sec)f=true;})); if(!f) errs.push('lookalike '+l.id+': unknown section '+k.ch+'/'+k.sec); }); });
console.log('chapter  whyNot  checks  pretest  visuals'); rows.forEach(r=>console.log(r.join('\t')));
console.log('lookalikes:', KS.lookalikes.length);
const tot=rows.reduce((a,r)=>{const [x,y]=r[1].split('/').map(Number);const [p,q]=r[2].split('/').map(Number);a[0]+=x;a[1]+=y;a[2]+=p;a[3]+=q;return a;},[0,0,0,0]);
console.log('TOTAL cases with explanations',tot[0]+'/'+tot[1],' sections with checks',tot[2]+'/'+tot[3]);
console.log(errs.length?'ERRORS:\n'+errs.join('\n'):'no errors'); process.exit(errs.length?1:0);
