// Release 79.0.0: helper migdx332, look-alike axon-guidance332, changelog. Run from kaplanstudy.
const fs=require('fs');
let h=fs.readFileSync('data/helpers.js','utf8');
const L=(sec,label)=>({ch:"ch33-2",sec,label});
const helper={id:"migdx332",chapter:"ch33-2",title:"Which neural tube or migration disorder?",
 summary:"Match a structural brain finding to the developmental step that failed and the genes or exposures section 33.2 links to it.",
 caution:"A teaching aid. Diagnosis rests on imaging, genetic testing and specialist review; many cases have no identified cause.",
 start:"what",
 nodes:{
  what:{q:"What is the main finding?",options:[
   {label:"The neural tube did not close",to:"tube",note:"A neurulation failure at 3 to 4 weeks."},
   {label:"The brain surface is smooth, with few or no gyri",to:"liss",note:"Neurons failed to reach the cortex."},
   {label:"A band of gray matter sits in the white matter under the cortex",to:"r:dcx",note:"A 'double cortex' on imaging."},
   {label:"Nodules of gray matter line the lateral ventricles",to:"r:filamin",note:"Neurons never left the ventricular zone."}]},
  tube:{q:"Which end failed to close?",options:[
   {label:"The head end",to:"r:anen",note:"Cranial neuropore."},
   {label:"The tail end",to:"r:sb",note:"Caudal neuropore."}]},
  liss:{q:"What does the cortex look like?",options:[
   {label:"Thick and usually four-layered, smooth",to:"r:liss1",note:"Classical pattern."},
   {label:"Chaotic and poorly layered, partly pebbled, sometimes with muscle disease",to:"r:liss2",note:"Cobblestone pattern."}]}},
 results:{
  anen:{label:"Anencephaly",dx:"Anencephaly",line:"Failure of neural tube closure at the head end.",points:["Happens at 3 to 4 weeks of gestation.","Risks the chapter names: retinoic acid skin products, anticonvulsants (especially valproic acid) and lack of folic acid.","Folic acid 0.4 to 0.8 mg daily before and in early pregnancy lowers risk (see the USPSTF box)."],link:L("s332-over","Neurulation")},
  sb:{label:"Spina bifida",dx:"Spina bifida",line:"Failure of neural tube closure at the tail end.",points:["Same timing and risk factors as anencephaly.","Folic acid supplementation lowers risk (see the USPSTF box)."],link:L("s332-over","Neurulation")},
  liss1:{label:"Classical (type I) lissencephaly",dx:"Classical lissencephaly",line:"Thick, usually four-layered smooth cortex because most neurons never reach their targets.",points:["LIS-1 mutations cause up to 60 percent of type I cases.","DCX mutations cause X-linked lissencephaly in males.","Cortex and hippocampus are hit hardest; cerebellum less so."],link:L("s332-migrate","Lissencephaly")},
  liss2:{label:"Cobblestone (type II) lissencephaly",dx:"Cobblestone lissencephaly",line:"Chaotic, poorly layered cortex with a partly pebbled surface.",points:["Caused by defects in enzymes that add mannose sugars to glycoproteins.","Seen with some congenital muscular dystrophies."],link:L("s332-migrate","Lissencephaly")},
  dcx:{label:"Subcortical band heterotopia (double cortex)",dx:"Double cortex",line:"Heterotopic neuron bands within the white matter, seen mainly in females with DCX mutations.",points:["Males with DCX mutations have X-linked lissencephaly.","Severe intellectual disability and epilepsy are common."],link:L("s332-migrate","Migration genes")},
  filamin:{label:"Periventricular nodular heterotopia",dx:"Periventricular nodular heterotopia",line:"Nodules of neurons that stayed beside the ventricles.",points:["Caused by mutations in filamin 1, an actin-linked protein."],link:L("s332-migrate","Migration genes")}}};
const tail=h.lastIndexOf('\n]);'); if(tail<0) throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail); fs.writeFileSync('data/helpers.js',h);
let l=fs.readFileSync('data/lookalikes.js','utf8');
const la={id:"axon-guidance332",title:"Axon guidance molecules compared",
 summary:"Four families of cues steer growing axons. Section 33.2 contrasts what kind of molecule each is and whether it attracts or repels.",
 items:["Type","Main action","Key example"],
 rows:[
  ["Cadherins","Region-specific adhesion molecules controlled by Pax6 and Emx2","Direct axonal pathfinding","Keep axons within their regional targets"],
  ["Ephrins and Eph receptors","Membrane-bound; Eph is the largest tyrosine kinase receptor family in the brain","Mostly repel","Topographic mapping"],
  ["Netrins","Soluble, secreted (for example by the floor plate)","Mainly attract","Draw interneuron axons across the midline"],
  ["Slit and Robo","Soluble ligand and its receptor","Repel","Control midline crossing and fasciculation"]],
 keys:["**Netrins** mainly **attract**; **Slit/Robo** and most **ephrins** **repel**.","**Ephrins** underlie **topographic maps**.","Guidance cues change axon **direction, speed and bundling**."],
 links:[{ch:"ch33-2",sec:"s332-migrate",label:"Migration and outgrowth"}],
 source:"Kaplan & Sadock 12th ed., Chapter 33 (Neural Development and Neurogenesis)"};
const lt=l.lastIndexOf('\n];'); l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt); fs.writeFileSync('data/lookalikes.js',l);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"79.0.0",date:"2026-11-12",title:"Section 33.2: Neural Development and Neurogenesis",items:[
 {type:"chapter",ch:"ch33-2",text:"New section 33.2: neurulation, proliferation and migration, developmental cell death, neural patterning, neuronal specification and miRNAs, growth factors (Table 33-1), migration disorders, the neurodevelopmental basis of schizophrenia and autism, and adult neurogenesis, with 109 cases.",href:"#/c/ch33-2/guide",link:"Open 33.2"},
 {type:"update",ch:"ch33-2",text:"Updates: USPSTF folic acid advice (2023), DSM-5 autism spectrum disorder, CDC autism prevalence (1 in 31, 2022 data), the fate of schizophrenia candidate genes such as DISC1 and NRG1, and the adult neurogenesis debate.",href:"#/c/ch33-2/guide/s332-asd",link:"See autism updates"},
 {type:"correction",ch:"ch33-2",text:"Corrections: gastrulation forms three germ layers; glia and neurons are about 1:1, not 8:1; Dicer cuts the miRNA precursor and Argonaute carries out silencing in RISC; and early brain overgrowth in autism is subtle and limited to a subgroup.",href:"#/c/ch33-2/guide/s332-over",link:"See the corrections"},
 {type:"feature",text:"New helper, Which neural tube or migration disorder?, and a look-alike table comparing axon guidance molecules.",href:"#/helper/migdx332",link:"Open the helper"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "78\.0\.0"/); if(!m) throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index); fs.writeFileSync('data/changelog.js',c);
console.log('ok');
