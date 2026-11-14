// Release 89.0.0: helper school349, look-alike objrel349, glossary terms, changelog. Run from kaplanstudy.
const fs=require('fs');
const L=(sec,label)=>({ch:"ch34-9",sec,label});
const helper={id:"school349",chapter:"ch34-9",title:"Which school does this idea come from?",
 summary:"Section 34.4d surveys about 40 theorists. This helper sorts a described idea about personality or treatment into the school the chapter places it in, then names the theorists to check.",
 caution:"A study aid for recognizing schools, not a judgment of which theory is right. Several theorists span schools (Allport, Goldstein and Perls touch humanistic, trait and Gestalt ideas), so check the named entries.",
 start:"beh",
 nodes:{
  beh:{q:"Does the idea set aside inner mental life and explain personality only by observable behavior shaped by reward and punishment?",options:[
   {label:"Yes: personality is a set of conditioned responses",to:"r:beh",note:"Only observable, measurable behavior counts in behaviorism."},
   {label:"No: it describes inner experience, a self or the unconscious",to:"early",note:"Inner life matters here, so ask where the theory looks first."}]},
  early:{q:"Is the focus the infant's early bond with the mother or caregiver?",options:[
   {label:"Yes: early care, inner images of self and others, or attachment",to:"att",note:"Early relationships are the core of attachment, object relations and self-psychology."},
   {label:"No: the focus is later life, society, growth, meaning or traits",to:"social",note:"The theory looks beyond infancy, so ask about social and cultural forces."}]},
  att:{q:"Is the bond explained biologically, as a pull to stay near the caregiver drawn from ethology and evolution?",options:[
   {label:"Yes: proximity, a secure base, biologically driven readiness to attach",to:"r:att",note:"Bowlby grounded attachment in biology, ethology and evolutionary theory."},
   {label:"No: the bond is described through inner images, splitting or the self",to:"self",note:"Inner representations point to object relations or self-psychology."}]},
  self:{q:"Does the theory put self-esteem and self-cohesion first, with self-object needs and empathic failures?",options:[
   {label:"Yes: grandiose self, idealized parental image, mirror or twinship needs",to:"r:self",note:"These are Kohut's terms in self-psychology."},
   {label:"No: it describes internal objects, positions, splitting or a good-enough mother",to:"r:obj",note:"Internal objects and early splitting mark object relations theory."}]},
  social:{q:"Does the idea stress present relationships, culture or society shaping personality and illness?",options:[
   {label:"Yes: interpersonal modes, character types formed by culture, striving for power, basic anxiety",to:"r:inter",note:"Social and cultural forces are central for Adler, Horney, Fromm and Sullivan."},
   {label:"No: it stresses growth, meaning, an inherited unconscious or measurable traits",to:"human",note:"Look at what the theory says drives the person."}]},
  human:{q:"Is the core an inborn push toward growth, meaning or freedom?",options:[
   {label:"Yes",to:"exist",note:"Growth, meaning and freedom belong to the humanistic and existential thinkers."},
   {label:"No",to:"jung",note:"Neither growth nor meaning is central, so ask about the unconscious."}]},
  exist:{q:"Is the key issue meaning, freedom or responsibility, rather than growth toward self-actualization?",options:[
   {label:"Yes: meaning in suffering, being condemned to be free, neurosis as an escape from freedom",to:"r:ex",note:"Frankl and Sartre built existential approaches around meaning and freedom."},
   {label:"No: self-actualization, peak experiences, unconditional positive regard, the here and now",to:"r:hum",note:"Self-actualization and present-centered growth mark the humanistic and Gestalt thinkers."}]},
  jung:{q:"Does it describe a shared, inherited unconscious with universal images?",options:[
   {label:"Yes: collective unconscious, archetypes, persona, anima and animus",to:"r:jung",note:"These are the terms of Jung's analytic psychology."},
   {label:"No: it measures traits, needs or a field of forces",to:"r:trait",note:"Trait measurement, needs and field theory belong to the personality and social psychologists."}]}},
 results:{
  beh:{label:"Behaviorism",dx:"Behaviorism (Skinner)",line:"Skinner treated personality as the set of responses built by operant conditioning; self, ideas and ego are unnecessary in his model.",points:["His operant learning work helped found behavior modification and programmed instruction.","Only observable, measurable, operationalized behavior is studied."],link:L("s349-sw","Sartre, Skinner, Sullivan and Winnicott")},
  att:{label:"Attachment theory",dx:"Attachment theory (Bowlby)",line:"Bowlby described a biologically driven pull to stay near the caregiver, with a secure base as the launching pad for independence.",points:["His ideas grew from advising the WHO on homeless children in the 1950s.","Section 34.1a covers attachment in more depth."],link:L("s349-bb","Balint, Berne, Bion and Bowlby")},
  self:{label:"Self-psychology",dx:"Self-psychology (Kohut)",line:"Kohut ranked self-esteem and self-cohesion above sexuality and aggression and traced pathology to empathic failures by the mother.",points:["Three poles of the self give mirror, twinship and idealizing transferences.","He first applied the model to narcissistic personality disorder, then to all psychopathology."],link:L("s349-kl","Kernberg, Klein, Kohut and Lacan")},
  obj:{label:"Object relations",dx:"Object relations (Klein, Fairbairn, Balint, Winnicott, Jacobson, Kernberg, Bion)",line:"These analysts put internalized relations with early objects at the center, though they differ on how much drive theory to keep.",points:["Klein: paranoid-schizoid and depressive positions, death instinct central.","Fairbairn: an object-seeking infant; Balint: basic fault; Winnicott: good-enough mother and true and false self.","Kernberg: borderline personality organization; Bion: containment of projections.","See the look-alike table of object relations theorists."],link:L("s349-kl","Kernberg, Klein, Kohut and Lacan")},
  inter:{label:"Social and interpersonal schools",dx:"Social and interpersonal schools (Adler, Horney, Fromm, Sullivan)",line:"These theorists held that social and cultural forces and present relationships shape personality more than infantile sexuality does.",points:["Adler: individual psychology, inferiority complex, birth order.","Horney: real and idealized self, pride system; Fromm: five character types.","Sullivan: prototaxic, parataxic and syntaxic modes, chum period, participant-observer."],link:L("s349-fj","Fromm to Jung")},
  ex:{label:"Existential approaches",dx:"Existential approaches (Frankl, Sartre)",line:"Frankl built logotherapy on finding meaning; Sartre held that people are condemned to be free and denied the unconscious.",points:["Frankl: self-transcendence and self-distancing; existential neuroses when meaning fails.","Sartre: existential psychoanalysis; neurosis as an escape from freedom."],link:L("s349-cf","Cattell to Anna Freud")},
  hum:{label:"Humanistic and Gestalt approaches",dx:"Humanistic and Gestalt approaches (Allport, Goldstein, Maslow, Rogers, Perls)",line:"These theorists stressed an inborn push toward growth and self-actualization or, for Perls, the whole experienced in the here and now.",points:["Goldstein coined self-actualization; Maslow placed it at the top of his hierarchy of needs.","Rogers: client-centered therapy with unconditional positive regard.","Perls: Gestalt therapy of the here and now."],link:L("s349-lm","Lewin to Murray")},
  jung:{label:"Analytic psychology",dx:"Analytic psychology (Jung)",line:"Jung broke with Freud over infantile sexuality and described a collective unconscious of archetypes.",points:["Key terms: complexes, persona, anima and animus, introversion and extroversion.","Individuation is the goal of Jungian treatment."],link:L("s349-fj","Fromm to Jung")},
  trait:{label:"Trait, need and field approaches",dx:"Trait, need and field approaches (Cattell, Allport, Murray, Murphy, Lewin)",line:"These psychologists described personality through measurable traits, needs or a field of interdependent forces.",points:["Cattell: factor analysis of traits; Allport: traits and personal dispositions.","Murray: personology and the TAT; Murphy: canalization; Lewin: life space and group dynamics."],link:L("s349-lm","Lewin to Murray")}}};
let h=fs.readFileSync('data/helpers.js','utf8');const tail=h.lastIndexOf('\n]);');if(tail<0)throw 'tail';
h=h.slice(0,tail)+',\n'+JSON.stringify(helper,null,2)+h.slice(tail);fs.writeFileSync('data/helpers.js',h);
const la={id:"objrel349",title:"Object relations and self-psychology theorists compared",
 summary:"Seven analysts who put the early relationship at the center, side by side as sections 34.4b and 34.4d describe them. They differ most on how much of Freud's drive theory they kept.",
 items:["Core idea about the infant","Drives","Key terms","Treatment idea"],
 rows:[
  ["Melanie Klein","The ego splits to cope with a terror of annihilation; projection and introjection are the first defenses","Kept: object relations tied closely to drives; the death instinct is central","Paranoid-schizoid and depressive positions, persecutory anxiety","Child analysis with a play technique"],
  ["Ronald Fairbairn","The infant is object seeking","Gave up libido and aggression as prime movers; dynamic structures replace energy, ego and id","Split-off ego, internal objects","Not stated"],
  ["Michael Balint","Longing for the primary love object; a basic fault from maternal failure","Kept in part: libido seeks pleasure and objects","Primary love, basic fault","The relationship itself is decisive for preverbal material"],
  ["Donald Winnicott","The true self grows in a holding environment given by a good-enough mother","Not stated","True and false self, transitional object","Not stated"],
  ["Edith Jacobson","Good and bad images form from pleasure and unpleasure","Structural model and object relations are compatible","Self-images and object images; fixation as modes of object relatedness","Not stated"],
  ["Otto Kernberg","Good and bad relational experience comes before the drives","Libido and aggression grow out of love and hate","Splitting, borderline personality organization","Psychotherapy with early transference interpretation (later TFP)"],
  ["Heinz Kohut","Self-esteem and self-cohesion come first","Sexuality and aggression are not central","Grandiose self, idealized parental image, self-object transferences","Empathic failures cause arrest; mirror, twinship and idealizing transferences in treatment"]],
 keys:["**Fairbairn** gave up drive theory; **Balint** kept it in part; **Klein** kept drives central with the **death instinct**.","**Kernberg** puts object relations **before** the drives; **Kohut** puts **self-cohesion** before them.","Projective identification is **Klein's**; its interpersonal version and **containment** are **Bion's**."],
 links:[{ch:"ch34-9",sec:"s349-kl",label:"Kernberg, Klein, Kohut and Lacan"},{ch:"ch34-9",sec:"s349-bb",label:"Balint, Berne, Bion and Bowlby"},{ch:"ch34-9",sec:"s349-cf",label:"Cattell to Anna Freud (Fairbairn)"},{ch:"ch34-9",sec:"s349-fj",label:"Fromm to Jung (Jacobson)"},{ch:"ch34-9",sec:"s349-sw",label:"Sartre, Skinner, Sullivan and Winnicott"},{ch:"ch34-7",sec:"s347-ego",label:"Ego psychology and the British object relations analysts (34.4b)"}],
 source:"Kaplan & Sadock 12th ed., section 34.4 (Theories of Personality and Psychopathology)"};
let l=fs.readFileSync('data/lookalikes.js','utf8');const lt=l.lastIndexOf('\n];');l=l.slice(0,lt)+',\n'+JSON.stringify(la,null,2)+l.slice(lt);fs.writeFileSync('data/lookalikes.js',l);
let g=fs.readFileSync('data/glossary/g5-chapter-terms.js','utf8');const T=JSON.parse(fs.readFileSync('/home/claude/tools/terms349.json','utf8'));
const end=g.indexOf('\n]);');if(end<0)throw 'gl';if(g.slice(0,end).trimEnd().slice(-1)!==',')g=g.slice(0,end).trimEnd()+','+g.slice(end);
const e2=g.indexOf('\n]);');g=g.slice(0,e2)+'\n'+T.map(t=>'  '+JSON.stringify(t)).join(',\n')+g.slice(e2);fs.writeFileSync('data/glossary/g5-chapter-terms.js',g);
let c=fs.readFileSync('data/changelog.js','utf8');
const entry={version:"89.0.0",date:"2026-11-14",title:"Section 34.4 complete: other psychodynamic schools (34.4d) and positive psychology (34.4e)",items:[
 {type:"chapter",ch:"ch34-9",text:"New entry 34.4d, Theories of Personality IV: Other Psychodynamic Schools: about 40 theorists from Abraham to Winnicott with their schools, key terms and treatment ideas, a comparison table for each group and the shared Mr. A case, with 61 cases.",href:"#/c/ch34-9/guide",link:"Open 34.4d"},
 {type:"chapter",ch:"ch34-10",text:"New entry 34.4e, Theories of Personality V: Positive Psychology: findings on happiness, relationships, work and positive institutions, Figure 34-48's two dimensions of health, strengths assessment, brief exercises and positive psychotherapies, with 28 cases. Section 34.4 is now complete.",href:"#/c/ch34-10/guide",link:"Open 34.4e"},
 {type:"update",ch:"ch34-9",text:"Updates: trials of Kernberg's transference-focused psychotherapy, and corrected dates for Rado's arrival in the United States (1931) and the Hampstead clinic (1952).",href:"#/c/ch34-9/guide/s349-kl",link:"See the updates"},
 {type:"update",ch:"ch34-10",text:"Updates: the WHO constitution date (adopted 1946, in force 1948), dimensional classification of personality disorder in ICD-11 and DSM-5-TR, and meta-analyses of positive psychology interventions.",href:"#/c/ch34-10/guide/s3410-tech",link:"See the updates"},
 {type:"feature",text:"New helper (which school does this idea come from?) and a look-alike table of object relations and self-psychology theorists.",href:"#/lookalikes/objrel349",link:"Open the look-alike"}]};
const m=c.match(/\n\s*\{\s*\n\s*"version": "88\.0\.0"/);if(!m)throw 'cl';
const ind=JSON.stringify(entry,null,2).split('\n').map(x=>'  '+x).join('\n');
c=c.slice(0,m.index)+'\n'+ind+','+c.slice(m.index);fs.writeFileSync('data/changelog.js',c);console.log('ok');
