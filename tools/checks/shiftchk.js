const fs=require('fs');const stop=new Set('the a an of and or to in is for not on with this that it as be by are was from his her at its than does do no'.split(' '));
const w=s=>new Set(s.toLowerCase().match(/[a-z]{4,}/g)?.filter(x=>!stop.has(x))||[]);
for(const n of process.argv.slice(2)){const W=eval(fs.readFileSync('/home/claude/updwork/learn-ch23-'+n+'-whynot.js','utf8'));
for(const c of fs.readFileSync('/tmp/ch23-'+n+'-cases.txt','utf8').trim().split('\n').map(JSON.parse)){const a=W[c[0]];
 c[3].forEach((ch,i)=>{if(i===c[4])return;const s=w(a[i]);const sc=j=>[...w(c[3][j])].filter(x=>s.has(x)).length;const own=sc(i);const best=Math.max(...c[3].map((_,j)=>j===i||j===c[4]?-1:sc(j)));if(own===0||best>own)console.log(c[0],i,'own',own,'other',best,'|',ch.slice(0,50),'->',a[i].slice(0,90))})}}
