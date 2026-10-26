global.window=global; window.KS={}; eval(require('fs').readFileSync('data/chapters.js','utf8'));
const fs=require('fs');
for(const m of KS.manifest){ for(const f of m.files){ try{ eval(fs.readFileSync('data/'+m.id+'/'+f+'.js','utf8')) }catch(e){console.log('ERR',m.id,f,e.message)} } }
let tot={cases:0,secs:0,cards:0};
for(const m of KS.manifest){ const c=KS.chapters[m.id]; const secs=c.guide.parts.reduce((a,p)=>a+p.sections.length,0);
 const n=(c.cases||[]).length; tot.cases+=n; tot.secs+=secs; const cards=['diagnosis','pharm','foundations','cases'].reduce((a,k)=>a+(c[k]||[]).length,0); tot.cards+=cards;
 console.log(m.id, m.number, 'secs',secs,'cases',n,'cards',cards,'obj',(c.guide.objectives||[]).length, m.files.join(','));}
console.log(tot);
