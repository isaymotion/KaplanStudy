global.window=global;window.KS={};const fs=require('fs');const K='/home/claude/kaplanstudy/';
eval(fs.readFileSync(K+'data/chapters.js','utf8'));eval(fs.readFileSync(K+'data/ch34-2/cards-cases.js','utf8'));
const C=KS.chapters['ch34-2'].cases;
const fixes=[['c342-ty03','Spontaneous recovery','Spontaneous recovery is the return of an extinguished response after time has passed. The stem shows a first-word response to a related cue, not a response that faded and came back.'],
 ['c342-sl03','Spontaneous recovery','Spontaneous recovery is the return of an extinguished response after time has passed, not daytime firing patterns reappearing in sleep.'],
 ['c342-pa01','Transient global amnesia','Transient global amnesia does not fit a patient who has lost personal identity yet learns new events well; that combination is the psychogenic picture.'],
 ['c342-pa04','She must be malingering','Nothing in the stem shows malingering. The chapter notes only that psychogenic amnesia can be hard to tell from it.']];
const files=[K+'data/ch34-2/learning.js','/home/claude/updwork/learn-ch34-2-whynot.js','/home/claude/updwork/learn-ch34-2-whynot-a.js','/home/claude/updwork/learn-ch34-2-whynot-b.js'];
for(const [id,pre,txt] of fixes){const c=C.find(x=>x.id===id);const i=c.choices.findIndex(x=>x.startsWith(pre));if(i<0)throw id;
 for(const f of files){let s=fs.readFileSync(f,'utf8');const re=new RegExp('("'+id+'"\\s*:\\s*\\[)([^\\]]*)\\]');const m=s.match(re);if(!m)continue;
  const arr=JSON.parse('['+m[2]+']');arr[i]=txt;s=s.replace(re,m[1]+arr.map(x=>JSON.stringify(x)).join(',')+']');fs.writeFileSync(f,s);console.log(f.split('/').pop(),id,i);}}
