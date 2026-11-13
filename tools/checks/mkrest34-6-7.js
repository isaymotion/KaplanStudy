// Builds updwork/learn-ch34-6-rest-base.js and learn-ch34-7-rest-base.js (domains, pretest, visuals) for release 87.0.0.
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const M={'ch34-6':{lf:'B',dr:'B',tp:'B',dv:'B',nr:'B',oa:'B',pg:'B'},
 'ch34-7':{eg:'B',ea:'B',dp:'C',dm:'C',nt:'E',tv:'E',tm:'E'}};
const V={'ch34-6':[{sec:'s346-life',block:{type:'chronology',title:'Visual summary: Freud\'s life and the growth of his theory',events:[
 {year:1856,label:'Freud born in Freiberg, Moravia (printed as Freiburg)'},
 {year:1860,label:'The family settles in Vienna'},
 {year:1880,label:'Breuer begins treating Anna O (to June 1882)'},
 {year:1882,label:'Anna O admitted to the Bellevue sanatorium, Kreuzlingen'},
 {year:1895,label:'Studies on Hysteria published with Breuer'},
 {year:1900,label:'The Interpretation of Dreams; the topographic model'},
 {year:1905,label:'Dual instinct theory: sexual and ego instincts'},
 {year:1911,label:'Pleasure and reality principles'},
 {year:1914,label:'On Narcissism: ego libido and object libido'},
 {year:1920,label:'Beyond the Pleasure Principle sets Eros against Thanatos'},
 {year:1923,label:'Aggression a separate instinct; The Ego and the Id'},
 {year:1939,label:'Freud dies in London'},
 {year:1972,label:'Ellenberger publishes the Bellevue records on Anna O'}],
 note:'Events from the chapter and the verified update boxes in this entry and in 34.4b.'}}],
 'ch34-7':[{sec:'s347-defnm',block:{type:'heatmap',title:'Visual summary: where each class of defense is usually seen (see Table 34-12)',
 cols:['Psychotic process','Young children','Preadolescence and character disorders','Neurotic disorders and normal people under stress','Healthy adults'],
 rows:[{label:'Narcissistic-psychotic',v:[3,2,0,0,0]},{label:'Immature',v:[0,0,3,1,0]},{label:'Neurotic',v:[0,0,0,3,1]},{label:'Mature',v:[0,0,0,0,3]}],
 legend:['Not described','Occasionally','Often','Typical setting'],
 note:'Based on the class profiles in Table 34-12 and the chapter\'s introduction to defenses; projection appears in both the narcissistic-psychotic and the immature class.'}}]};
for(const ch of ['ch34-6','ch34-7']){const m=M[ch];
 const ids=fs.readFileSync('/tmp/'+ch+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
 const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!m[p])throw id;domains[id]=m[p];});
 fs.writeFileSync(U+'learn-'+ch+'-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals:V[ch]},null,1)+')\n');
 console.log(ch,Object.keys(domains).length,pick(ids,8).join(' '));}
