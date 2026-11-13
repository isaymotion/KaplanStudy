// Builds updwork/learn-ch34-4-rest-base.js and learn-ch34-5-rest-base.js (domains, pretest, visuals) for release 86.0.0.
const fs=require('fs');const U='/home/claude/updwork/';
const pick=(a,k)=>{const o=[];for(let i=0;i<k;i++)o.push(a[Math.floor((i+0.5)*a.length/k)]);return [...new Set(o)]};
const M={'ch34-4':{sb:'B',tw:'B',et:'B',tf:'B',pd:'B',ed:'B',sd:'B'},
 'ch34-5':{ti:'B',cf:'D',cg:'D',mg:'B',ia:'D',re:'B',di:'I',rt:'H',cb:'C',am:'C',at:'C',ps:'C',sj:'C'}};
const V={'ch34-4':[{sec:'s344-sensdep',block:{type:'chronology',title:'Visual summary: animal and twin research behind this section, then and now',events:[
 {year:1951,label:'Brainwashing fears after Korean War confessions; Hebb begins isolation studies at McGill'},
 {year:1954,label:'Bexton, Heron and Scott publish the first sensory deprivation results'},
 {year:1958,label:'Harlow names contact comfort; Brady reports the executive monkey study'},
 {year:1971,label:'Weiss, with random assignment, finds that control protects against stress pathology'},
 {year:1973,label:'Lorenz, Tinbergen and von Frisch share the Nobel Prize in Physiology or Medicine'},
 {year:1975,label:'E. O. Wilson coins sociobiology'},
 {year:2015,label:'Meta-analysis of fifty years of twin studies: average heritability 49 percent'},
 {year:2016,label:'Maier and Seligman revise learned helplessness'}],
 note:'Events from the chapter and the verified update boxes in this entry.'}}],
 'ch34-5':[{sec:'s345-cbs',block:{type:'chronology',title:'Visual summary: how classifications have treated cultural syndromes',events:[
 {year:1868,label:'George Beard revives neurasthenia in its modern form'},
 {year:1980,label:'DSM-III drops neurasthenia'},
 {year:1994,label:'DSM-IV adds the Outline for Cultural Formulation and a glossary of 25 culture-bound syndromes'},
 {year:2013,label:'DSM-5 replaces culture-bound syndromes with cultural concepts of distress (9 in its glossary) and adds the Cultural Formulation Interview'},
 {year:2022,label:'ICD-11 in effect, with possession trance disorder and no neurasthenia; DSM-5-TR revises the cultural sections'}],
 note:'Events from the chapter and the verified update boxes in this entry. The chapter dates neurasthenia\'s arrival in China to the 1920s and 1930s.'}}]};
for(const ch of ['ch34-4','ch34-5']){const m=M[ch];
 const ids=fs.readFileSync('/tmp/'+ch+'-cases.txt','utf8').trim().split('\n').map(JSON.parse).map(x=>x[0]);
 const domains={};ids.forEach(id=>{const p=id.split('-')[1].slice(0,2);if(!m[p])throw id;domains[id]=m[p];});
 fs.writeFileSync(U+'learn-'+ch+'-rest-base.js','('+JSON.stringify({domains,pretest:pick(ids,8),visuals:V[ch]},null,1)+')\n');
 console.log(ch,Object.keys(domains).length,pick(ids,8).join(' '));}
