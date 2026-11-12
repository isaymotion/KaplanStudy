// Release 78.0.0: helper visloc331, look-alike memory-disorders331, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch33-1",sec,label});
const helper={id:"visloc331",chapter:"ch33-1",title:"Which disorder of visual perception?",
 summary:"Sort a patient who sees but cannot make sense of what they see into the focal-lesion syndromes section 33.1 describes, with the lesion site the chapter gives.",
 caution:"A teaching aid. New visual or perceptual symptoms need neurologic assessment and imaging; acute onset suggests stroke and is an emergency.",
 start:"what",
 nodes:{
  what:{q:"What is the main problem?",options:[
   {label:"Cannot recognize familiar faces, but recognizes objects",to:"r:proso",note:"Face-specific loss."},
   {label:"Cannot recognize objects by sight",to:"obj",note:"Other senses still identify them."},
   {label:"Problems with color",to:"r:color",note:"Color perception, recognition or naming."},
   {label:"Is blind but insists they can see",to:"r:anton",note:"Denial of blindness."},
   {label:"Cannot reach accurately by sight, move the eyes on purpose, or see a scene as a whole",to:"r:balint",note:"Spatial integration failure."},
   {label:"Trouble writing, calculating, telling left from right and naming fingers",to:"r:gerst",note:"A four-part syndrome."}]},
  obj:{q:"Can the patient copy a drawing of the object?",options:[
   {label:"No, cannot identify it or draw it",to:"r:apper",note:"Perception itself fails."},
   {label:"Yes, can draw it but cannot name it or show its use",to:"r:assoc",note:"Perception intact, meaning lost."}]}},
 results:{
  proso:{label:"Prosopagnosia",dx:"Prosopagnosia",line:"Loss of face recognition with other objects still recognized.",points:["The chapter proposes a left-sided disconnection.","Current lesion studies point to right or bilateral occipitotemporal (fusiform) or anterior temporal damage (see the update box).","Patients often recognize people by voice."],link:L("s331-vis","Visual system")},
  apper:{label:"Apperceptive visual agnosia",dx:"Apperceptive visual agnosia",line:"Cannot identify or draw items by sight while other senses work.",points:["Lesion site given: bilateral visual association areas.","Thought to be a failure of transmission from the higher visual pathway to association areas."],link:L("s331-vis","Disorders of visual perception")},
  assoc:{label:"Associative visual agnosia",dx:"Associative visual agnosia",line:"Can draw an object but cannot name it or use it.",points:["Lesion site given: bilateral medial occipitotemporal.","May come with other visual problems."],link:L("s331-vis","Disorders of visual perception")},
  color:{label:"Color syndromes",dx:"Color agnosia, color anomia or central achromatopsia",line:"Color agnosia: cannot recognize a color but can match it. Color anomia: cannot name a color but can point to it. Central achromatopsia: no color perception at all.",points:["The chapter ties loss of color perception to the dominant occipital lobe plus the splenium of the corpus callosum.","It does not give a separate site for each of the three."],link:L("s331-vis","Disorders of visual perception")},
  anton:{label:"Anton syndrome",dx:"Anton syndrome",line:"Denial of blindness.",points:["Lesion site given: bilateral occipital.","Possibly from cut fibers used in self-assessment."],link:L("s331-vis","Disorders of visual perception")},
  balint:{label:"Balint syndrome",dx:"Balint syndrome",line:"Optic ataxia, oculomotor apraxia and simultanagnosia.",points:["Lesion site given: bilateral parietooccipital.","Ties to the parietal 'where' stream."],link:L("s331-vis","The Balint triad")},
  gerst:{label:"Gerstmann syndrome",dx:"Gerstmann syndrome",line:"Agraphia, acalculia, right-left disorientation and finger agnosia.",points:["Lesion site given: the dominant parietal lobe."],link:L("s331-vis","Disorders of visual perception")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"memory-disorders331",title:"Memory disorders compared",
 summary:"Section 33.1 uses classic patients and diseases to show which structures each kind of memory needs. Match the disorder to its main damage and its memory picture.",
 items:["Main damage","Memory picture","Other features"],
 rows:[
  ["H. M. (bilateral medial temporal removal)","Hippocampus and amygdala on both sides","Could not form new fact (declarative) memories; skill learning preserved","The classic case for declarative memory"],
  ["Korsakoff syndrome","Dorsal medial thalamic nucleus and mammillary bodies","Severe inability to form new memories; variable loss of remote memories","Thiamine deficiency, usually with chronic alcohol use"],
  ["Alzheimer disease","Parietal and temporal lobes first","Early memory loss","Impaired syntactical comprehension and visuospatial organization; personality change late"],
  ["Pick disease","Frontal lobes first","Memory relatively spared","Disinhibition and impaired language expression"],
  ["Parkinson disease","Nigrostriatal dopamine neurons","Procedural (skill) memory impaired","Deficit eased by levodopa"]],
 keys:["**Declarative** memory needs the **medial temporal lobe**; **procedural** memory needs **dopamine** circuits.","**Korsakoff** is a **diencephalic** amnesia; check **thiamine**.","**Frontal** degeneration changes behavior before memory; **Alzheimer** starts with memory."],
 links:[{ch:"ch33-1",sec:"s331-mem",label:"Memory systems"}],
 source:"Kaplan & Sadock 12th ed., Chapter 33 (Functional Neuroanatomy)"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"78.0.0",date:"2026-11-12",title:"Section 33.1: The Human Brain and Functional Neuroanatomy",items:[
 {type:"chapter",ch:"ch33-1",text:"New section 33.1, the opening of Chapter 33: psychiatry and the brain, endophenotypes, genes and circuits, brain organization, the sensory and motor systems, localization, language, attention, memory, emotion and the limbic system, the frontal lobes and neural development, with 119 clinical cases.",href:"#/c/ch33-1/guide",link:"Open 33.1"},
 {type:"update",ch:"ch33-1",text:"Updates: DSM-5-TR and ICD-11, NIMH's RDoC framework, the 2022 schizophrenia genetics study (287 loci), and the debate over adult human neurogenesis from 2018 to the 2025 Science study.",href:"#/c/ch33-1/guide/s331-neurog",link:"See adult neurogenesis"},
 {type:"correction",ch:"ch33-1",text:"Corrections: humans have just under 20,000 protein-coding genes (not 25,000 or 30,000 to 40,000); primary somatosensory cortex is in the postcentral gyrus behind the central sulcus; face recognition is right-dominant and prosopagnosia follows right or bilateral damage; chorea, not rigidity, is the usual first motor sign of adult Huntington disease; and Fast ForWord-style training did not work in controlled trials.",href:"#/c/ch33-1/guide/s331-vis",link:"See the face recognition box"},
 {type:"feature",text:"New helper, Which disorder of visual perception?, and a look-alike table comparing memory disorders.",href:"#/helper/visloc331",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "77\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
