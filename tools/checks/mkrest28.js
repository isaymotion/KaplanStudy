// Builds updwork/learn-ch28-rest.js (domains, pretest, checks, visuals) for Chapter 28.
const fs=require('fs');const U='/home/claude/updwork/';
const ids=fs.readFileSync('/tmp/ch28-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(c=>c[0]);
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor(i*a.length/k)]);return [...new Set(o)]};
const V=[{sec:'s28-malp',block:{type:'chronology',title:'Landmark cases and laws in Chapter 28 (corrected dates)',events:[
 {year:1843,label:"M'Naghten rule (England): the right-wrong test"},
 {year:1922,label:'Irresistible impulse test proposed'},
 {year:1954,label:'Durham rule (product rule), Judge Bazelon'},
 {year:1962,label:'American Law Institute test in the Model Penal Code'},
 {year:1966,label:'Rouse v. Cameron: confinement must come with treatment'},
 {year:1971,label:'Wyatt v. Stickney: constitutional right to individual treatment'},
 {year:1972,label:'United States v. Brawner replaces Durham with the ALI test'},
 {year:1974,label:'Tarasoff I: duty to warn (the book prints 1976)'},
 {year:1975,label:"O'Connor v. Donaldson: mental illness alone cannot justify confinement (the book prints 1976)"},
 {year:1976,label:'Tarasoff II: duty to protect (the book prints 1982)'},
 {year:1979,label:'Rennie v. Klein and Rogers v. Okin: right to refuse treatment'},
 {year:1984,label:'US Insanity Defense Reform Act narrows the federal test'},
 {year:1986,label:'Ford v. Wainwright: competence to be executed'},
 {year:1996,label:'Jaffee v. Redmond (psychotherapist-patient privilege); HIPAA becomes law'},
 {year:2018,label:'Philippine Mental Health Act (Republic Act No. 11036)'},
 {year:2020,label:'Kahler v. Kansas (US); People v. Paña (Philippines)'}],
 note:'Dates follow the correction and update boxes in this chapter. The book gives 1981 for the case it calls Roger v. Oken; the first federal ruling in Rogers v. Okin was in 1979.'}}];
const pre=pick(ids,8);
fs.writeFileSync(U+'learn-ch28-rest.js','('+JSON.stringify({domains:{},pretest:pre,checks:eval(fs.readFileSync(U+'learn-ch28-checks.js','utf8')),visuals:V},null,1)+')\n');
console.log('pretest',pre.join(' '));
