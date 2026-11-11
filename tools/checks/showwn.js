const fs=require('fs');const [n,ids]=[process.argv[2],process.argv[3]?process.argv[3].split(','):null];
const W={};for(const f of fs.readdirSync('/home/claude/updwork').filter(f=>f.startsWith('learn-ch23-'+n+'-whynot')))Object.assign(W,eval(fs.readFileSync('/home/claude/updwork/'+f,'utf8')));
for(const c of fs.readFileSync('/tmp/ch23-'+n+'-cases.txt','utf8').trim().split('\n').map(JSON.parse)){ if(ids&&!ids.includes(c[0]))continue;
 console.log('\n'+c[0]+' | '+c[2]);c[3].forEach((ch,i)=>console.log((i===c[4]?' * ':'   ')+ch+'  ->  '+(W[c[0]]||[])[i]));}
