global.KS={};const fs=require('fs');const B='/home/claude/kaplanstudy/';
eval(fs.readFileSync(B+'data/sources.js','utf8'));eval(fs.readFileSync(B+'data/drugs/antipsychotics.js','utf8'));eval(fs.readFileSync(B+'data/drugs/antidepressants.js','utf8'));eval(fs.readFileSync(B+'data/drugs/mood-stabilizers.js','utf8'));eval(fs.readFileSync(B+'data/drugs/anxiolytics.js','utf8'));eval(fs.readFileSync(B+'data/drugs/hypnotics.js','utf8'));eval(fs.readFileSync(B+'data/drugs/stimulants.js','utf8'));eval(fs.readFileSync(B+'data/drugs/substance.js','utf8'));eval(fs.readFileSync(B+'data/drugs/cognitive.js','utf8'));eval(fs.readFileSync(B+'data/drugs/sexual.js','utf8'));eval(fs.readFileSync(B+'data/drugs/sideeffect.js','utf8'));eval(fs.readFileSync(B+'data/drugs/supplement.js','utf8'));
global.KS.add=(id,k,v)=>{(KS.ch=KS.ch||{})[id+k]=v};
const ups=[];
for(const c of ['ch21-0','ch21-1','ch21-2','ch21-3','ch21-4','ch21-5','ch21-6','ch25-3','ch19','ch05','ch06','ch07','ch21-7','ch21-8','ch21-9','ch21-10','ch21-11']){try{eval(fs.readFileSync(B+'data/'+c+'/guide.js','utf8'))}catch(e){}}
Object.values(KS.ch||{}).forEach(g=>g.parts.forEach(p=>p.sections.forEach(s=>s.blocks.forEach(b=>{if(b.type==='update')ups.push(b.source||'')}))));
KS.drugs.forEach(d=>(d.updates||[]).forEach(u=>ups.push(u.source||'')));
const uniq=[...new Set(ups)];
uniq.forEach(src=>{const s=src.toLowerCase();const out=[];
 KS.sourceLinks.forEach(l=>{if(s.includes(l.m.toLowerCase()))out.push(l.label)});
 if(/prescribing information|label/.test(s))KS.drugs.forEach(d=>(d.brands||[]).forEach(b=>{const w=String(b).split(/[ (]/)[0];if(w.length>3&&new RegExp('\\b'+w.toLowerCase()+'\\b').test(s)&&!out.some(t=>t.toLowerCase().includes(w.toLowerCase())||t.toLowerCase().includes(d.name.toLowerCase())))out.push('Label: '+w)}));
 console.log((out.length?'OK ':'NO ')+src.slice(0,110)+(out.length?'  -> '+out.join(' | '):''))});
