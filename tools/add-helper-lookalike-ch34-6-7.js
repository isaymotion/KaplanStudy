// Release 87.0.0: helper defense347, look-alike freud-models346, glossary terms, changelog. Run from kaplanstudy.
const fs=require('fs');
const L=(sec,label)=>({ch:"ch34-7",sec,label});
const helper={id:"defense347",chapter:"ch34-7",title:"Which class of defense does this behavior suggest?",
 summary:"Section 34.4b sorts defense mechanisms into four classes (Table 34-12). This helper places a described behavior in a class by how it handles reality and feeling.",
 caution:"A teaching aid for psychodynamic formulation, not a diagnosis. The same person uses defenses from several classes, and the class depends on level: projection, for example, appears as both a psychotic and an immature defense.",
 start:"reality",
 nodes:{
  reality:{q:"Is reality grossly denied, distorted or replaced by a delusion?",options:[
   {label:"Yes: delusions, hallucinations or refusal to accept plain facts",to:"r:np",note:"Avoiding, negating or distorting reality marks the narcissistic-psychotic class."},
   {label:"No: reality testing is kept",to:"action",note:"Reality is kept, so look at how the impulse or feeling is handled."}]},
  action:{q:"Is the impulse discharged in action, bodily complaints, fantasy retreat or indirect hostility?",options:[
   {label:"Yes: acting out, somatic complaints, passive hostility, regression or retreat into fantasy",to:"r:imm",note:"Discharge in action, the body or fantasy is typical of the immature class."},
   {label:"No: the impulse is contained inside the mind",to:"aware",note:"The impulse is held inside, so ask whether feeling and awareness are kept."}]},
  aware:{q:"Is the feeling or idea kept out of awareness, split off or turned into its opposite?",options:[
   {label:"Yes: forgetting, feeling nothing about a remembered event, thinking instead of feeling, shifting the target or showing the opposite attitude",to:"r:neur",note:"Repression, isolation, intellectualization, displacement and reaction formation are neurotic defenses."},
   {label:"No: the person faces the feeling and handles it in a useful way",to:"r:mat",note:"Facing the feeling and channeling it well is the mark of the mature class."}]}},
 results:{
  np:{label:"Narcissistic-psychotic",dx:"Narcissistic-psychotic defenses (projection, denial, distortion)",line:"Reality is avoided, negated or distorted; typical of a psychotic process, and also seen in young children and in adult dreams and fantasies.",points:["Psychotic projection gives frank, usually persecutory delusions.","Denial refuses what is seen or heard; distortion reshapes reality to fit inner needs, as in megalomanic beliefs.","Not all denial is psychotic; like projection, it can serve neurotic ends."],link:L("s347-defnp","Narcissistic-psychotic and immature defenses")},
  imm:{label:"Immature",dx:"Immature defenses (acting out, blocking, hypochondriasis, introjection, passive-aggressive behavior, projection, regression, schizoid fantasy, somatization)",line:"Common before adolescence and in adults with character disorders; often set off by anxiety about intimacy or its loss.",points:["Acting out carries a wish into action so the feeling is not felt.","Hypochondriasis here is a defense: reproach turned into bodily complaints, not the old diagnosis.","These defenses often soften as relationships improve or the person matures."],link:L("s347-defnp","Narcissistic-psychotic and immature defenses")},
  neur:{label:"Neurotic",dx:"Neurotic defenses (controlling, displacement, dissociation, externalization, inhibition, intellectualization, isolation, rationalization, reaction formation, repression, sexualization)",line:"Common in apparently normal people and in neurotic disorders; they relieve distressing affects and may be adaptive in some settings.",points:["Isolation splits feeling from content; intellectualization thinks instead of feels.","Displacement changes the object but keeps the impulse's aim.","Reaction formation can become a lasting obsessional character trait."],link:L("s347-defnm","Neurotic and mature defenses")},
  mat:{label:"Mature",dx:"Mature defenses (altruism, anticipation, asceticism, humor, sublimation, suppression)",line:"Healthy and adaptive across the life cycle; they fit personal needs together with social demands and relationships.",points:["Sublimation keeps the goal but changes the aim or object to a socially valued one.","Humor stays with the feeling; wit moves away from it.","Here suppression is called conscious or semiconscious; other chapters call it conscious."],link:L("s347-defnm","Neurotic and mature defenses")}}};
let h=fs.readFileSync('data/helpers.js','utf8');const tail=h.lastIndexOf('\n]);');if(tail<0)throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail);fs.writeFileSync('data/helpers.js',h);
const la={id:"freud-models346",title:"Freud's models of the mind compared",
 summary:"Sections 34.4a and 34.4b trace how Freud's picture of the mind changed. The table sets the topographic model, drive theory and the structural model side by side.",
 items:["When","Main parts","How conflict or symptoms arise","What the chapter says happened to it"],
 rows:[
  ["Topographic model","1900, with The Interpretation of Dreams","Conscious, preconscious and unconscious","Unconscious wishes (mainly sexual) push for discharge; the censor lets them through only in disguise, as dreams and symptoms","Discarded: many defenses were not accessible to awareness, and patients showed an unconscious need for punishment; primary process, wish fulfillment, the dynamic unconscious and regression remain useful"],
  ["Drive theory","1905 to 1923","Instincts with source, impetus, aim and object; libido and ego instincts, then life and death instincts, then aggression as its own instinct","Drives seek discharge through the psychosexual stages; fixation or conflict leaves pathologic traits","The death instinct is usually set aside today; analysts mean libido and aggression by the dual instincts"],
  ["Structural model","1923, with The Ego and the Id","Id, ego and superego, told apart by function","Conflict moves inside, between id, ego and superego; the ego's defenses contain drive derivatives, and symptoms show them partly failing","The cornerstone of ego psychology, later extended by object relations and self-psychology"]],
 keys:["In the **topographic** model the regions differ by **consciousness**; in the **structural** model the agencies differ by **function**.","The **id** is not the same as the **unconscious**: ego defenses and most superego scrutiny are unconscious too.","Freud's anxiety theory changed with the models: **dammed-up libido** first, then **signal anxiety**."],
 links:[{ch:"ch34-6",sec:"s346-topo",label:"The topographic model"},{ch:"ch34-6",sec:"s346-drive",label:"Instinct or drive theory"},{ch:"ch34-7",sec:"s347-ego",label:"The structural model"}],
 source:"Kaplan & Sadock 12th ed., section 34.4 (Theories of Personality and Psychopathology)"};
let l=fs.readFileSync('data/lookalikes.js','utf8');const lt=l.lastIndexOf('\n];');l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt);fs.writeFileSync('data/lookalikes.js',l);
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms3467.json','utf8'));
const end=g.indexOf('\n]);');if(end<0)throw 'gl';if(g.slice(0,end).trimEnd().slice(-1)!==',')g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"87.0.0",date:"2026-11-14",title:"Section 34.4, part 1: Freud (34.4a and 34.4b)",items:[
 {type:"chapter",ch:"ch34-6",text:"New entry 34.4a, Theories of Personality I: Freud, from Dreams to the Psychosexual Stages: Breuer and Anna O, dream theory and the dream work, the topographic model, drive theory, infantile sexuality and narcissism, and the oral to genital stages, with 48 cases.",href:"#/c/ch34-6/guide",link:"Open 34.4a"},
 {type:"chapter",ch:"ch34-7",text:"New entry 34.4b, Theories of Personality II: Freud, Ego Psychology, Defenses and Transference: the structural model, ego functions and autonomy, signal anxiety, the four classes of defense mechanisms, the classic theory of neuroses and technique, and transference variants and mechanisms, with 51 cases.",href:"#/c/ch34-7/guide",link:"Open 34.4b"},
 {type:"update",ch:"ch34-6",text:"Updates: Freud was born in Freiberg, Moravia (now Příbor), what the Bellevue sanatorium records showed about Anna O, and the removal of homosexuality from the DSM in 1973 with the American Psychoanalytic Association's 2019 apology.",href:"#/c/ch34-6/guide/s346-life",link:"See the updates"},
 {type:"update",ch:"ch34-7",text:"Updates: Vaillant's defense hierarchy in DSM-IV's Defensive Functioning Scale and later research, and the removal of neurosis as a diagnosis in DSM-III.",href:"#/c/ch34-7/guide/s347-defnp",link:"See the updates"},
 {type:"feature",text:"New helper for placing a behavior in one of the four classes of defense, and a look-alike table comparing Freud's models of the mind.",href:"#/helpers/defense347",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "86\.0\.0"/);if(!m)throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index);fs.writeFileSync('data/changelog.js',c);console.log('ok');
