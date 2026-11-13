// Usage (from kaplanstudy): node ckchk.js <ch> [print] -- lists numbers in each section's checks that are missing from that section's guide text
const fs=require('fs'),ch=process.argv[2],pr=process.argv[3]==='print';
global.window=global;window.KS={chapters:{}};KS.add=(c,k,v)=>{(KS.chapters[c]=KS.chapters[c]||{})[k]=v;};
for(const f of ['guide','learning'])eval(fs.readFileSync('data/'+ch+'/'+f+'.js','utf8'));
const C=KS.chapters[ch],secs={};C.guide.parts.forEach(p=>p.sections.forEach(s=>secs[s.id]=JSON.stringify(s)));
let bad=0;for(const [sid,arr] of Object.entries(C.learning.checks)){arr.forEach(k=>{const t=k.q+' '+k.a;
 if(pr)console.log(sid,'|',k.q,'=>',k.a.replace(/\*\*/g,''));
 (t.match(/\d+(\.\d+)?/g)||[]).forEach(n=>{if(!secs[sid].includes(n)){bad++;console.log('MISSING',sid,n,'|',k.q.slice(0,80));}});});}
console.log(ch,'missing numbers:',bad);
