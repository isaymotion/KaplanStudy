// TEMPLATE: copy, then edit the chapter id, the fixes list (case id, start of the wrong choice, new line) and the files list. Rewrites one why-not line in learning.js and every updwork copy.
global.window=global;window.KS={};const fs=require('fs');const K='/home/claude/kaplanstudy/';
eval(fs.readFileSync(K+'data/chapters.js','utf8'));eval(fs.readFileSync(K+'data/ch33-9/cards-cases.js','utf8'));
const C=KS.chapters['ch33-9'].cases;
const fixes=[['c339-ds03','Skip the EEG','The EEG in catatonia is usually normal, but catatonia is itself a red flag for a medical cause. In a new catatonic patient the chapter advises an EEG to exclude other causes.']];
const files=[K+'data/ch33-9/learning.js','/home/claude/updwork/learn-ch33-9-whynot.js'];
for(const [id,pre,txt] of fixes){const c=C.find(x=>x.id===id);const i=c.choices.findIndex(x=>x.startsWith(pre));if(i<0)throw id;
 for(const f of files){let s=fs.readFileSync(f,'utf8');const re=new RegExp('("'+id+'"\\s*:\\s*\\[)([^\\]]*)\\]');const m=s.match(re);if(!m)continue;
  const arr=JSON.parse('['+m[2]+']');arr[i]=txt;s=s.replace(re,m[1]+arr.map(x=>JSON.stringify(x)).join(',')+']');fs.writeFileSync(f,s);console.log(f.split('/').pop(),id,i);}}
