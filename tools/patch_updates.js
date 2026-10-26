// Usage: node tools/patch_updates.js <spec.js>
// Adds post-publication update blocks, high-yield items and cards to an existing chapter's data files.
// Idempotent: skips updates whose title already exists in the section and cards whose id exists.
const fs=require('fs'),path=require('path');
const D='/home/claude/kaplanstudy/data/';
const spec=eval('('+fs.readFileSync(process.argv[2],'utf8')+')');
const ch=spec.chapter;
function load(file){const src=fs.readFileSync(D+ch+'/'+file,'utf8');let out;const KS={add:(id,k,v)=>{out={id,k,v};}};eval(src);const hdr=src.slice(0,src.indexOf('KS.add('));return {hdr,...out};}
function save(file,o){fs.writeFileSync(D+ch+'/'+file,o.hdr+'KS.add('+JSON.stringify(o.id)+', '+JSON.stringify(o.k)+', '+JSON.stringify(o.v,null,2)+');\n');}
let n={upd:0,hy:0,cards:0};
if(spec.guide){const g=load('guide.js');const secs={};g.v.parts.forEach(p=>p.sections.forEach(s=>secs[s.id]=s));
 spec.guide.forEach(u=>{const s=secs[u.sec];if(!s)throw new Error('no section '+u.sec);if(s.blocks.some(b=>b.type==='update'&&b.title===u.block.title))return;
  const blk=Object.assign({type:'update'},u.block);if(typeof u.at==='number')s.blocks.splice(u.at,0,blk);else s.blocks.push(blk);n.upd++;});
 save('guide.js',g);}
if(spec.highYield){const h=load('highyield.js');spec.highYield.forEach(t=>{let top=h.v.find(x=>x.id===t.id);if(!top){top={id:t.id,topic:t.topic,items:[]};h.v.push(top);}
 t.items.forEach(it=>{if(!top.items.includes(it)){top.items.push(it);n.hy++;}});});save('highyield.js',h);}
const deckFile={diagnosis:'cards-diagnosis.js',cases:'cards-cases.js',pharm:'cards-pharm.js',foundations:'cards-foundations.js'};
Object.keys(deckFile).forEach(k=>{if(!spec[k])return;const f=load(deckFile[k]);const ids=new Set(f.v.map(c=>c.id));
 spec[k].forEach(c=>{if(ids.has(c.id))return;if(k==='cases'&&(c.choices.length!==5||c.answer<0||c.answer>4))throw new Error('bad case '+c.id);f.v.push(c);n.cards++;});save(deckFile[k],f);});
console.log(ch,n);
