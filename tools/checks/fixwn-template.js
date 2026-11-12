// TEMPLATE: copy, then edit the chapter id, the fixes list (case id, start of the wrong choice, new line) and the files list. Rewrites one why-not line in learning.js and every updwork copy.
global.window=global;window.KS={};const fs=require('fs');const K='/home/claude/kaplanstudy/';
eval(fs.readFileSync(K+'data/chapters.js','utf8'));eval(fs.readFileSync(K+'data/ch29-2/cards-cases.js','utf8'));
const C=KS.chapters['ch29-2'].cases;
const fixes=[['c292-pm02','Refuse to discuss','Refusing to discuss prognosis ignores her question. She should get a range, with a clear caveat that estimates are often inaccurate.'],
 ['c292-ph01','He must have failed','Failed chemotherapy is not a requirement. What counts is a certified prognosis of 6 months or less.']];
const files=[K+'data/ch29-2/learning.js','/home/claude/updwork/learn-ch29-2-whynot.js','/home/claude/updwork/learn-ch29-2-whynot-a.js','/home/claude/updwork/learn-ch29-2-whynot-b.js'];
for(const [id,pre,txt] of fixes){const c=C.find(x=>x.id===id);const i=c.choices.findIndex(x=>x.startsWith(pre));if(i<0)throw id;
 for(const f of files){let s=fs.readFileSync(f,'utf8');const re=new RegExp('("'+id+'"\\s*:\\s*\\[)([^\\]]*)\\]');const m=s.match(re);if(!m)continue;
  const arr=JSON.parse('['+m[2]+']');arr[i]=txt;s=s.replace(re,m[1]+arr.map(x=>JSON.stringify(x)).join(',')+']');fs.writeFileSync(f,s);console.log(f.split('/').pop(),id,i);}}
