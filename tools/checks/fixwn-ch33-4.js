// TEMPLATE: copy, then edit the chapter id, the fixes list (case id, start of the wrong choice, new line) and the files list. Rewrites one why-not line in learning.js and every updwork copy.
global.window=global;window.KS={};const fs=require('fs');const K='/home/claude/kaplanstudy/';
eval(fs.readFileSync(K+'data/chapters.js','utf8'));eval(fs.readFileSync(K+'data/ch33-4/cards-cases.js','utf8'));
const C=KS.chapters['ch33-4'].cases;
const fixes=[
 ['c334-th05','Cell death','Thyroid hormone regulates TRH synthesis through feedback; it is not described as killing TRH neurons anywhere in the brain.'],
 ['c334-th05','Strong suppression','Strong suppression is the feedback seen in the PVN, but no such feedback has been shown in TRH neurons outside the hypothalamus.'],
 ['c334-th05','Strong stimulation','Thyroid hormone does not stimulate TRH synthesis; where feedback exists it is negative, and none has been shown outside the hypothalamus.'],
 ['c334-ek03','Reducing anandamide','Reducing anandamide synthesis would lower cannabinoid signaling, and less signaling goes with less drinking in these rats, not more.'],
 ['c334-ek01','Orlistat','Orlistat is a weight-loss drug that does not act on CB1 receptors and is not linked to new anxiety and low mood.'],
 ['c334-ec06','Activate N-type','Activating N-type calcium channels would not slow anandamide breakdown; CB1 itself closes these channels to stop transmitter release.']];
const files=[K+'data/ch33-4/learning.js','/home/claude/updwork/learn-ch33-4-whynot.js','/home/claude/updwork/learn-ch33-4-whynot-a.js','/home/claude/updwork/learn-ch33-4-whynot-b.js'];
for(const [id,pre,txt] of fixes){const c=C.find(x=>x.id===id);const i=c.choices.findIndex(x=>x.startsWith(pre));if(i<0)throw id;
 for(const f of files){let s=fs.readFileSync(f,'utf8');const re=new RegExp('("'+id+'"\\s*:\\s*\\[)([^\\]]*)\\]');const m=s.match(re);if(!m)continue;
  const arr=JSON.parse('['+m[2]+']');arr[i]=txt;s=s.replace(re,m[1]+arr.map(x=>JSON.stringify(x)).join(',')+']');fs.writeFileSync(f,s);console.log(f.split('/').pop(),id,i);}}
// Second pass: "the guide" reads as app jargon; the cases say "the chapter".
for(const f of files){let t=fs.readFileSync(f,'utf8');t=t.replace(/\bthe guide\b/g,'the chapter').replace(/\bThe guide\b/g,'The chapter').replace(/\bin the chapter\b(?= gives| does| says)/g,'in the chapter');fs.writeFileSync(f,t);}
