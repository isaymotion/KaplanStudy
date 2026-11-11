const fs=require('fs');
for(const n of process.argv.slice(2)){let W={};try{W=eval(fs.readFileSync('/home/claude/updwork/learn-ch23-'+n+'-whynot.js','utf8'))}catch(e){console.log(n,'PARSE',e.message);continue}
 const C=fs.readFileSync('/tmp/ch23-'+n+'-cases.txt','utf8').trim().split('\n').map(JSON.parse);let bad=[];
 for(const c of C){const w=W[c[0]];if(!w){bad.push(c[0]+' missing');continue}if(w.length!==5)bad.push(c[0]+' len');w.forEach((s,i)=>{if((i===c[4])!==(s===''))bad.push(c[0]+' blank@'+i)})}
 console.log(n,'cases',C.length,'keys',Object.keys(W).length,'bad',bad.slice(0,8));}
