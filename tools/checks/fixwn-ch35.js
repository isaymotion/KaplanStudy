// TEMPLATE: copy, then edit the chapter id, the fixes list (case id, start of the wrong choice, new line) and the files list. Rewrites one why-not line in learning.js and every updwork copy.
global.window=global;window.KS={};const fs=require('fs');const K='/home/claude/kaplanstudy/';
eval(fs.readFileSync(K+'data/chapters.js','utf8'));eval(fs.readFileSync(K+'data/ch35/cards-cases.js','utf8'));
const C=KS.chapters['ch35'].cases;
const fixes=[['c35-lt06','Walter Menninger','The chapter credits Walter Menninger with helping build the psychosocial model (an update notes the unitary view is best known from Karl Menninger); neither is linked to lithium, which Cade rediscovered.'],
 ['c35-lt09','Walter Menninger','The chapter credits Walter Menninger with helping build the psychosocial model of failed adaptation; he did not propose an emotion circuit.'],
 ['c35-na03','The Utica State','The Utica State Hospital is an American asylum (opened 1843, per an update), not the London hospital whose abuses prompted the 1828 appointments; Bethlem fits.'],
 ['c35-fu04','Chlorpromazine','Chlorpromazine was the earlier antipsychotic first given as a sedative, and the chapter does not call it the most effective; clozapine fits.']];
const files=[K+'data/ch35/learning.js','/home/claude/updwork/learn-ch35-whynot.js','/home/claude/updwork/learn-ch35-whynot-a.js','/home/claude/updwork/learn-ch35-whynot-b.js','/home/claude/updwork/learn-ch35-whynot-c.js'];
for(const [id,pre,txt] of fixes){const c=C.find(x=>x.id===id);const i=c.choices.findIndex(x=>x.startsWith(pre));if(i<0)throw id;
 for(const f of files){let s=fs.readFileSync(f,'utf8');const re=new RegExp('("'+id+'"\\s*:\\s*\\[)([^\\]]*)\\]');const m=s.match(re);if(!m)continue;
  const arr=JSON.parse('['+m[2]+']');arr[i]=txt;s=s.replace(re,m[1]+arr.map(x=>JSON.stringify(x)).join(',')+']');fs.writeFileSync(f,s);console.log(f.split('/').pop(),id,i);}}
