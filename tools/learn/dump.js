global.window=global; window.KS={}; const fs=require('fs');
eval(fs.readFileSync('data/chapters.js','utf8'));
const id=process.argv[2]; const m=KS.manifest.find(x=>x.id===id);
for(const f of m.files){ try{eval(fs.readFileSync('data/'+id+'/'+f+'.js','utf8'))}catch(e){} }
const c=KS.chapters[id]; const pl=s=>String(s).replace(/\*\*/g,'');
function bt(b){switch(b.type){case 'p':case 'h':return pl(b.text);case 'list':case 'steps':return (b.title?pl(b.title)+': ':'')+b.items.map(x=>Array.isArray(x)?pl(x.join(' — ')):pl(x)).join(' | ');case 'defs':return (b.title?pl(b.title)+': ':'')+b.items.map(d=>pl(d[0])+' = '+pl(d[1])).join(' | ');case 'callout':return '['+b.kind+'] '+pl(b.text);case 'case':return 'CASE '+pl(b.text)+' POINT '+pl(b.point||'');case 'table':return 'TABLE '+pl(b.caption||'')+' :: '+(b.head||[]).join(' / ')+' :: '+b.rows.map(r=>typeof r==='string'?r:pl(r.join(' / '))).join(' || ');case 'update':return 'UPDATE '+pl(b.title)+': '+pl(b.text);default:return b.type;}}
const mode=process.argv[3]||'guide';
if(mode==='guide'){ for(const p of c.guide.parts){ console.log('## '+p.title); for(const s of p.sections){ console.log('### '+s.id+' | '+s.title); for(const b of s.blocks) console.log('- '+bt(b)); } } }
if(mode==='secs'){ for(const p of c.guide.parts) for(const s of p.sections) console.log(s.id+' | '+s.title+' | '+s.blocks.length); }
if(mode==='cases'){ for(const k of c.cases) console.log(JSON.stringify([k.id,k.tag,k.q,k.choices,k.answer,k.why])); }
