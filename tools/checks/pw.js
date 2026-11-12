global.window=global;window.KS={};const fs=require('fs');eval(fs.readFileSync("data/chapters.js","utf8"));
const [ch,a,b]=process.argv.slice(2);for(const f of ["cards-cases","learning"])eval(fs.readFileSync("data/"+ch+"/"+f+".js","utf8"));
const C=KS.chapters[ch];C.cases.slice(+a,+b).forEach(c=>{console.log("## "+c.id+" "+c.q.slice(-90));c.choices.forEach((x,i)=>{if(i!==c.answer)console.log("  - "+x.slice(0,45)+" => "+C.learning.whyNot[c.id][i])})});
