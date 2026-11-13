global.window=global;window.KS={};const fs=require('fs');const K='/home/claude/kaplanstudy/';
eval(fs.readFileSync(K+'data/chapters.js','utf8'));eval(fs.readFileSync(K+'data/ch34-1/cards-cases.js','utf8'));
const C=KS.chapters['ch34-1'].cases;
const fixes=[['c341-op01','Partial reinforcement extinction effect','This effect means intermittently reinforced actions last longer in extinction. Here attention was withdrawn and the shouting declined.'],
 ['c341-hb03','The food remains a positive reinforcer','The food was devalued by the illness pairing, so it no longer works as a valued reinforcer. The pressing continues through habit.'],
 ['c341-aw02','Helplessness is the established cause','The chapter says learned helplessness was once treated as a model of depression. Today controllability is seen mainly as changing how stressful and harmful a stressor is.']];
const files=[K+'data/ch34-1/learning.js','/home/claude/updwork/learn-ch34-1-whynot.js','/home/claude/updwork/learn-ch34-1-whynot-a.js','/home/claude/updwork/learn-ch34-1-whynot-b.js','/home/claude/updwork/learn-ch34-1-whynot-c.js'];
for(const [id,pre,txt] of fixes){const c=C.find(x=>x.id===id);const i=c.choices.findIndex(x=>x.startsWith(pre));if(i<0)throw id;
 for(const f of files){let s=fs.readFileSync(f,'utf8');const re=new RegExp('("'+id+'"\\s*:\\s*\\[)([^\\]]*)\\]');const m=s.match(re);if(!m)continue;
  const arr=JSON.parse('['+m[2]+']');arr[i]=txt;s=s.replace(re,m[1]+arr.map(x=>JSON.stringify(x)).join(',')+']');fs.writeFileSync(f,s);console.log(f.split('/').pop(),id,i);}}
