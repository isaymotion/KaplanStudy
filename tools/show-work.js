const fs=require('fs');const o=eval('('+fs.readFileSync(process.argv[2],'utf8')+')');
const parts=o.parts||(o.sections?[o]:[]);
for(const p of parts){console.log('## PART',p.title);for(const s of p.sections){console.log('\n### ['+s.id+'] '+s.title);
 s.blocks.forEach((b,i)=>{const t=b.type;let x='';
  if(t==='p'||t==='h')x=b.text;else if(t==='callout')x=b.kind.toUpperCase()+' '+b.title+': '+b.text;
  else if(t==='list')x=(b.title||'')+' :: '+b.items.join(' | ');
  else if(t==='defs'||t==='steps')x=(b.title||'')+' :: '+b.items.map(a=>a[0]+' = '+a[1]).join(' | ');
  else if(t==='table')x=b.caption+' :: '+b.head.join(' / ')+' :: '+b.rows.map(r=>r.join(' / ')).join(' || ')+(b.note?' NOTE '+b.note:'');
  else if(t==='case')x=b.title+' :: '+b.text+' POINT '+b.point;
  console.log(i+' '+t+': '+x);});}}
if(o.dx||o.hy){for(const t of o.hy||[])console.log('\nHY',t.id,t.topic,'::',t.items.join(' | '));
 for(const k of ['dx','ph','fd'])for(const c of o[k]||[])console.log(k,c.id,c.tag,'Q',c.q,'A',c.a);
 for(const c of o.cs||[])console.log('cs',c.id,'Q',c.q,'::',c.choices.map((x,i)=>(i===c.answer?'*':'')+x).join(' | '),'WHY',c.why);}
