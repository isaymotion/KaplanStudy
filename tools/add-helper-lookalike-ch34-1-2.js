// Release 84.0.0: helper relapse341, look-alikes operant-contingencies341 and memory-kinds342, glossary terms, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch34-1",sec,label});
const helper={id:"relapse341",chapter:"ch34-1",title:"Why did the extinguished response come back?",
 summary:"After exposure therapy or any extinction, a fear or craving can return. This helper matches what happened before the return to the relapse effect section 34.1 describes.",
 caution:"A teaching aid that simplifies. The four effects can act together, and a return of symptoms always needs a full clinical review, not only a learning-theory label.",
 start:"what",
 nodes:{
  what:{q:"What happened between the end of extinction and the return of the response?",options:[
   {label:"Only time passed",to:"r:spont",note:"Nothing else changed; the cue was simply met again later."},
   {label:"The cue was met in a different place or setting",to:"r:renewal",note:"Extinction is tied to the context where it took place."},
   {label:"The original bad event (or the drug) was met again",to:"again",note:"Contact with the unconditional stimulus can undo extinction in two ways."}]},
  again:{q:"How was the event met again?",options:[
   {label:"On its own, in the current setting, without the cue",to:"r:reinst",note:"The setting itself becomes linked with the event again."},
   {label:"Together with the cue: the two were paired once more",to:"r:reacq",note:"A new pairing of cue and event."}]}},
 results:{
  spont:{label:"Spontaneous recovery",dx:"Spontaneous recovery",line:"The extinguished response returns when time passes before the cue is met again.",points:["Extinction lowered the response without destroying the original learning.","Tell patients that some return of fear with time is expected and can be treated with further exposure."],link:L("s341-extinct","Extinction and what follows it")},
  renewal:{label:"Renewal",dx:"Renewal effect",line:"The response returns when the cue is met outside the extinction context: back in the original setting, or in any setting different from where extinction took place.",points:["Extinction is context dependent.","Exposure in the settings where relapse is likely, and retrieval cues, may protect gains (see the context section and the update on the inhibitory learning approach)."],link:L("s341-extinct","Extinction and what follows it")},
  reinst:{label:"Reinstatement",dx:"Reinstatement",line:"The response returns after the current context is again linked with the unconditional stimulus.",points:["Renewed contact with the original event, even without the cue, can bring the response back."],link:L("s341-extinct","Extinction and what follows it")},
  reacq:{label:"Rapid reacquisition",dx:"Rapid reacquisition",line:"The response comes back quickly when the cue and the unconditional stimulus are paired once more.",points:["The speed of relearning shows that the original learning was still stored."],link:L("s341-extinct","Extinction and what follows it")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la1={id:"operant-contingencies341",title:"Reinforcement, punishment and omission",
 summary:"The four operant outcomes of Figure 34-2 are easy to confuse, above all negative reinforcement and punishment. The table sorts them by what the action does and what happens to the action.",
 items:["Positive reinforcement","Negative reinforcement","Punishment","Omission"],
 rows:[
  ["Other name","Reward learning","Avoidance or escape","None given","Time-out from reinforcement"],
  ["What the action does","Produces a good event","Prevents or ends a bad event","Produces a bad event","Prevents or removes a good event"],
  ["Effect on the action","Strengthened","Strengthened","Weakened","Weakened"],
  ["Clinical note from the chapter","Overeating and drug taking: the food or the drug's effects reinforce the behavior","Using a drug again to end unpleasant cue-driven feelings; rituals and avoidance that lower anxiety","Can teach avoidance of the punisher instead of giving up the behavior","No clinical example given"]],
 keys:["**Reinforcement** always means the action gets **stronger**; positive and negative say whether a good event is **produced** or a bad event is **prevented or removed**.","**Negative reinforcement is not punishment**: punishment **weakens** an action.","Before treating a behavior, decide whether it is a **respondent** (change its antecedents) or an **operant** (change its consequences)."],
 links:[{ch:"ch34-1",sec:"s341-learn2",label:"The law of effect"},{ch:"ch34-1",sec:"s341-operant",label:"Operant learning"}],
 source:"Kaplan & Sadock 12th ed., section 34.1 (Learning Theory, Figure 34-2)"};
const la2={id:"memory-kinds342",title:"Declarative versus nondeclarative memory",
 summary:"Section 34.1 divides memory into a declarative system, lost in amnesia, and several nondeclarative systems that amnesia spares. The table sets them side by side.",
 items:["Declarative","Nondeclarative"],
 rows:[
  ["What it holds","Facts and events","Skills and habits, priming, simple classical conditioning, nonassociative learning"],
  ["Awareness","Open to conscious recollection","Not accessible to awareness; shown through performance"],
  ["Flexibility","Flexible: what is retrieved can guide many kinds of response","Tied to the processing system that holds it"],
  ["Brain basis","Medial temporal lobe and midline diencephalon, working with the neocortex","Several systems: neostriatum (habits), cerebellum (skeletal conditioning), amygdala (emotional learning), neocortex (priming)"],
  ["In amnesia","Impaired","Largely spared; priming that needs a new association tends to be impaired"],
  ["In infancy","Not fully available until about the third year","Present early in infancy"]],
 keys:["Amnesia removes **declarative** memory and spares **nondeclarative** memory.","An amnesic patient can show normal **priming** or slowly learn a **habit** without recalling the learning sessions.","**Infantile amnesia** is explained by late maturation of **declarative** memory."],
 links:[{ch:"ch34-2",sec:"s342-systems",label:"Memory systems"},{ch:"ch34-2",sec:"s342-types",label:"Types of memory and priming"},{ch:"ch34-2",sec:"s342-infant",label:"Infantile amnesia"}],
 source:"Kaplan & Sadock 12th ed., section 34.1 (Biology of Memory, Table 34-7)"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la1,null,2)+',\n'+JSON.stringify(la2,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');
const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms3412.json','utf8'));
const end=g.indexOf('\n]);'); if(end<0) throw 'gl';
if(g.slice(0,end).trimEnd().slice(-1)!==',') g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');
g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);
fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"84.0.0",date:"2026-11-13",title:"Section 34.1: Contributions from the Psychosocial Sciences",items:[
 {type:"chapter",ch:"ch34-1",text:"New entry, Psychosocial Sciences I: Piaget's stages and their use in psychiatry, attachment theory and the Strange Situation, and learning theory from Pavlovian conditioning and extinction to operant learning, avoidance and habits, with 116 cases.",href:"#/c/ch34-1/guide",link:"Open Psychosocial Sciences I"},
 {type:"chapter",ch:"ch34-2",text:"New entry, Psychosocial Sciences II: the biology of memory, from synaptic plasticity and long-term potentiation to amnesia, the types of memory, memory assessment, psychogenic amnesia, memory distortion and infantile amnesia, with 72 cases.",href:"#/c/ch34-2/guide",link:"Open Psychosocial Sciences II"},
 {type:"update",ch:"ch34-1",text:"Updates: infants and object permanence, who described disorganized attachment, Spitz's hospitalism and anaclitic depression, the DSM-5 attachment disorders, the inhibitory learning approach to exposure therapy, D-cycloserine, and the revised account of learned helplessness.",href:"#/c/ch34-1/guide/s341-extinct",link:"See the updates"},
 {type:"update",ch:"ch34-2",text:"Updates: the 2000 Nobel Prize for the Aplysia work, the identity of patient HM, current sleep-stage names and the DSM-5 term for psychogenic amnesia.",href:"#/c/ch34-2/guide/s342-amnesia",link:"See the updates"},
 {type:"feature",text:"New helper for working out why an extinguished fear or craving came back, and two look-alike tables: reinforcement versus punishment, and declarative versus nondeclarative memory.",href:"#/helpers/relapse341",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "83\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
