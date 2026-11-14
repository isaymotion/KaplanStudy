// Builds updwork/learn-ch34-9-rest-base.js and learn-ch34-10-rest-base.js (domains, pretest, visual) for release 89.0.0.
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
function mk(ch,M,visuals){
 const ids=fs.readFileSync('/tmp/'+ch+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
 const domains={};ids.forEach(id=>{const p=id.split('-')[1].replace(/^\d+/,'').slice(0,2);if(!M[p])throw id;domains[id]=M[p];});
 fs.writeFileSync(U+'learn-'+ch+'-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals},null,1)+')\n');
 console.log(ch,Object.keys(domains).length,pick(ids,8).join(' '));
}
mk('ch34-9',{ab:'B',bb:'B',cf:'B',fj:'B',kl:'B',lm:'B',pr:'E',sw:'B'},[{sec:'s349-ab',block:{type:'chronology',title:'Visual summary: some dates from the other schools',events:[
 {year:1892,label:'Adolf Meyer comes to the United States from Switzerland'},
 {year:1902,label:'Adler joins Freud\'s circle'},
 {year:1924,label:'Rank\'s The Trauma of the Birth'},
 {year:1931,label:'Rado arrives in New York (chapter: 1945)'},
 {year:1933,label:'Fromm arrives in the United States'},
 {year:1940,label:'Sartre a prisoner of war (1940 to 1941)'},
 {year:1944,label:'Rado founds the Columbia psychoanalytic clinic'},
 {year:1947,label:'Anna Freud starts the Hampstead child therapy course'},
 {year:1950,label:'1950s: Bowlby advises the WHO on homeless children'},
 {year:1952,label:'Hampstead clinic opens (chapter: 1947 for both)'},
 {year:2007,label:'First randomized trial of Kernberg\'s TFP against DBT and supportive treatment'}],
 note:'Dates from the chapter and the verified update boxes in this entry.'}}]);
mk('ch34-10',{df:'B',ef:'B',hp:'B',as:'D',tq:'E'},[{sec:'s3410-health',at:9,block:{type:'heatmap',title:'Visual summary: the four quadrants of Figure 34-48',cols:['Assets','Problems'],rows:[
 {label:'Troubled',v:[0,3]},{label:'Problem-free',v:[0,0]},{label:'Dealing with it',v:[3,3]},{label:'Complete mental health',v:[3,0]}],
 legend:['Low','Some','Moderate','High'],note:'Traditional therapy lowers problems (Troubled to Problem-free); positive psychotherapy and promotion raise assets toward complete mental health. The figure treats both as dimensions.'}}]);
