// Release 81.0.0 why-not wording fixes; rewrites lines in learning.js and the updwork copies.
const fs=require('fs');
const R=[["Electrolyte (mineralocorticoid) replacement alone","Electrolyte replacement alone"],
["The chapter reports lower CSF insulin, not higher, and giving insulin markedly improves verbal memory rather than worsening it.","The chapter reports lower CSF insulin, not higher, and it reports that insulin improves verbal memory rather than worsening it."],
["and insulin or glucose improves verbal memory, so a normal level with no effect is wrong.","and it reports a memory gain with insulin or glucose, so a normal level with no effect is not its account."],
["and giving glucose markedly improves verbal memory instead of worsening it.","and it reports that glucose improves verbal memory instead of worsening it."]];
for(const f of ['data/ch33-5/learning.js','/home/claude/updwork/learn-ch33-5-whynot.js']){let s=fs.readFileSync(f,'utf8');for(const [a,b] of R){if(s.split(a).length!==2)throw f+' '+a;s=s.replace(a,b);}fs.writeFileSync(f,s);}
console.log('ok');
