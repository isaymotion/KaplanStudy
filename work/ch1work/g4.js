({
  title: "Laboratory testing and neuroimaging",
  sections: [
    {
      id: "s1-lab-approach",
      title: "Why medical testing matters in psychiatry",
      blocks: [
        { type: "p", text: "Two realities have moved medical assessment to the front of psychiatric practice: **metabolic syndrome** is widespread among psychiatric patients, and these patients **die earlier** than the general population. Tobacco, alcohol and drug use, poor diet and obesity all contribute, and many psychotropics add risks of their own (obesity, metabolic syndrome, hyperprolactinemia)." },
        { type: "list", title: "Goals of physical health monitoring", items: [
          "Give appropriate care for illnesses the patient already has.",
          "Protect current health from **future impairment**: prevention should target the small number of common problems that account for much of the morbidity and premature death in psychiatric patients.",
          "Use testing logically: to reach accurate diagnoses, find medical comorbidity, guide treatment and keep care cost-effective.",
          "Know the limits of your expertise and **consult** nonpsychiatric colleagues about medical disease."
        ] },
        { type: "list", title: "History and examination come first", items: [
          "A thorough history with a **review of systems** decides which tests are relevant; collateral sources (family, prior clinicians, old records) help when the patient cannot give details.",
          "Medical history: injuries, especially **head injury with loss of consciousness** and other causes of unconsciousness; pain; ongoing illness; hospitalizations; surgeries; current medications; **toxic exposures** (often occupational).",
          "Social history: legal history, relationships and occupational history, which also inform the assessment of personality pathology."
        ] },
        { type: "table", caption: "Standard workup for an apparent dementia or delirium", head: ["Element", "Detail"], rows: [
          ["Physical examination", "Look for causes: cogwheel rigidity and tremor (Parkinson disease), focal deficits suggesting prior strokes"],
          ["Routine labs", "CBC, electrolytes, LFTs, BUN, creatinine, thyroid tests, **B12 and folate**, **VDRL**, urinalysis"],
          ["Genetic testing", "No clear clinical indication for **apolipoprotein E ε4** testing"],
          ["CT", "Often done when there are **focal neurologic findings**"],
          ["EEG", "May be done when **delirium** is suspected"],
          ["Delirium additions", "Urine or blood cultures, chest radiograph, neuroimaging or EEG as appropriate; inattention can make the neurologic exam hard to interpret"]
        ] }
      ]
    },
    {
      id: "s1-tox",
      title: "Toxicology, alcohol and environmental toxins",
      blocks: [
        { type: "list", title: "Urine drug screens", items: [
          "Rapid **immunoassays** (results within about an hour) for barbiturates, benzodiazepines, cocaine metabolites, opiates, PCP, THC and tricyclics; they are **screening tests** and positives need **confirmation**.",
          "Specimens: usually urine; also blood, breath (alcohol), hair, saliva and sweat.",
          "**False positives** are common, often from prescribed drugs interacting with the assay; **false negatives** often reflect collection or storage problems.",
          "Except for alcohol, only presence or absence is reported; drug **levels do not track behavior** in a useful way.",
          "Comprehensive qualitative screening by liquid and gas **chromatography** takes hours and is reserved for unexplained toxicity with an atypical picture."
        ] },
        { type: "list", title: "When to order a drug screen", items: [
          "Unexplained behavioral symptoms.",
          "History of illicit drug use or dependence in a new patient evaluation.",
          "High-risk background (e.g., criminal record, adolescents, sex work).",
          "Monitoring abstinence in treatment: scheduled or **random** (many clinicians think random testing is more accurate); testing can also motivate the patient.",
          "Patients are often unreliable reporters, substance-induced disorders mimic primary ones, and substances worsen existing illness."
        ] },
        { type: "table", caption: "How long drugs are detectable in urine", head: ["Drug", "Detection window"], rows: [
          ["Alcohol", "7–12 hours"],
          ["Cocaine", "6–8 hours (metabolites 2–4 days)"],
          ["Barbiturate", "24 hours short-acting; 3 weeks long-acting"],
          ["Heroin", "36–72 hours"],
          ["Codeine", "48 hours"],
          ["Morphine; amphetamine", "48–72 hours"],
          ["Benzodiazepine; methadone", "3 days"],
          ["Marijuana", "2–7 days"],
          ["Methaqualone", "7 days"]
        ] },
        { type: "defs", title: "Alcohol: what the labs show", items: [
          ["Diagnosis", "No single test or exam finding is diagnostic; the **drinking history** matters most, labs confirm."],
          ["Blood alcohol level", "Intoxication usually at **100–300 mg/dL**; 50–100 mg/dL impairs judgment and coordination; above 100 mg/dL causes **ataxia**. Legal driving limit in many states **80 mg/dL**."],
          ["Reading the BAL", "High BAL with little clinical intoxication = **tolerance**. Marked intoxication with a low BAL = suspect **other agents**."],
          ["Liver", "AST usually exceeds ALT, classically an **AST:ALT ratio of 2:1 or more**; GGT and bilirubin may rise; albumin and protein fall; PT lengthens."],
          ["Blood", "**Macrocytosis** (raised MCV) in most people drinking four or more drinks a day; macrocytic anemia."],
          ["CDT", "Carbohydrate-deficient transferrin flags chronic heavy use: sensitivity **60–70%**, specificity **80–90%**."],
          ["Examination", "Rhinophyma, telangiectasias, hepatomegaly, signs of trauma; in withdrawal, hypertension, tremor, tachycardia."]
        ] },
        { type: "table", caption: "Environmental toxins", head: ["Toxin", "Presentation", "Where to test"], rows: [
          ["Aluminum", "Dementia-like picture", "Urine or blood"],
          ["Arsenic", "Fatigue, loss of consciousness, anemia, **hair loss**", "Urine, blood, hair"],
          ["Manganese", "Delirium, confusion, **parkinsonism**", "Urine, blood, hair"],
          ["Mercury", "Apathy, poor memory, lability, headache, fatigue", "Urine, blood, hair"],
          ["Lead", "Encephalopathy, irritability, apathy, anorexia", "Blood or 24-hour urine; **free erythrocyte protoporphyrin** screens chronic exposure. CDC: >5 μg/dL needs evaluation; >20 μg/dL needs investigation of home and other sources"],
          ["Insecticides (organic compounds)", "Behavioral change; many are strongly **anticholinergic**", "No readily available test; poison control can help"]
        ] },
        { type: "callout", kind: "caution", title: "Volatile solvent inhalation", text: "Gasoline, glue, paint thinner, correction fluid, aerosol propellants, nitrites (amyl \"poppers\", butyl \"rush\") and anesthetic gases. Chronic use damages brain, liver, kidney, lung, heart, marrow and blood; signs include short-term memory loss, slurred \"scanning\" speech, tremor and arrhythmias. **Toluene** is linked to loss of gray–white differentiation and atrophy on MRI; butyl nitrite to **methemoglobinemia**. Chronic use can bring panic attacks, an organic personality change and executive deficits." }
      ]
    },
    {
      id: "s1-drug-levels",
      title: "Drug levels, monitoring and NMS",
      blocks: [
        { type: "p", text: "Serum levels protect against **toxicity** and confirm that enough drug is on board for a response. Hepatic enzymes shape most levels. Reference ranges differ by laboratory, so check the lab's own range, and remember that the elderly and debilitated can show toxicity at \"therapeutic\" levels." },
        { type: "table", caption: "Overdose agents and psychotropic monitoring", head: ["Drug", "Key facts"], rows: [
          "Common overdose agents",
          ["Acetaminophen", "Hepatic necrosis; toxicity with levels **>140 mcg/mL at 4 hours** (no prior liver disease); heavy drinkers especially vulnerable; give **acetylcysteine** promptly"],
          ["Salicylate", "500 mg/kg may be fatal; most are symptomatic above **40 mg/dL**: acid–base disturbance, tachypnea, **tinnitus**, nausea, vomiting; severe: hyperthermia, altered mental status, pulmonary edema"],
          "Antipsychotic",
          ["Clozapine", "Morning **trough** levels. ~**100** = minimum threshold; ≥**350** needed for refractory schizophrenia; seizures and side effects rise above **1,200** or doses >**600 mg/day**. Common cause of leukopenia: interrupt for moderate–severe leukopenia (rechallenge possible later)"],
          "Mood stabilizers",
          ["Lithium", "Narrow therapeutic index. Toxicity (tremor, sedation, confusion → delirium, seizures, coma) begins **>1.2 mEq/L**, common **>1.4 mEq/L**; elderly may be toxic below 1.2"],
          ["Carbamazepine", "Rare aplastic anemia, leukopenia, thrombocytopenia (baseline **CBC**); usually mild hyponatremia, possible **SIADH**; teratogen (spina bifida, finger anomalies); toxicity: nausea, ataxia, nystagmus, confusion, urinary retention; very high: arrhythmia, seizures, respiratory depression"],
          ["Valproate", "Baseline **LFTs**; transaminases may stay up to **3× normal**; rare hepatic necrosis; teratogen (pregnancy test, contraception); leukopenia, thrombocytopenia; **ammonia** if lethargic or confused; pancreatitis"],
          "Antidepressants",
          ["MAOIs", "Baseline and ongoing **blood pressure** (orthostasis, rare hypertensive crisis); no useful blood levels; occasional hepatotoxicity (LFTs at start and periodically)"],
          ["TCAs and tetracyclics", "Baseline CBC, electrolytes, LFTs and often an **ECG** (PR, QRS, QTc)"]
        ] },
        { type: "defs", title: "Neuroleptic malignant syndrome", items: [
          ["Picture", "Rare, potentially fatal: **autonomic instability, hyperpyrexia, severe rigidity, delirium**."],
          ["Mechanism", "Sustained muscle contraction generates heat and breaks down muscle (raised **CK**, myoglobinuria); central thermoregulation fails."],
          ["Labs", "CBC, electrolytes, BUN, creatinine, CK, urinalysis with **urine myoglobin**; blood and urine cultures for the fever workup. WBC typically **10,000–40,000/mm³**; liver enzymes rise with hepatic failure."],
          ["Causes of death", "Hyperpyrexia, aspiration pneumonia, renal or hepatic failure, respiratory arrest, cardiovascular collapse."],
          ["Treatment", "Stop the neuroleptic, hydrate, muscle relaxants, supportive nursing care."],
          ["Other CK rises", "Repeated IM injections, long or agitated periods in **restraints**, and **dystonic reactions**."]
        ] },
        { type: "callout", kind: "pearl", title: "Before ECT", text: "**No specific test is required**, but CBC, electrolytes, urinalysis, LFTs and usually an ECG are typical. A careful history and physical are the real screen. Routine **spine x-rays are no longer indicated** because paralytic agents make spinal injury rare." }
      ]
    },
    {
      id: "s1-endocrine",
      title: "Endocrine and immune evaluations",
      blocks: [
        { type: "table", caption: "Endocrine and related conditions with psychiatric presentations", head: ["Condition / test", "What to know"], rows: [
          ["Addison disease (low cortisol)", "Fatigue, anorexia, weight loss, malaise; memory problems, confusion or delirium; depression or psychosis"],
          ["Cushing syndrome (high cortisol)", "About **half** develop psychiatric symptoms: lability, irritability, anxiety, panic, depression, euphoria or mania, paranoia; slowed thinking; usually improve as cortisol normalizes"],
          ["Cortisol / DST in primary psychiatric illness", "**Not useful**; the dexamethasone-suppression test remains a research tool"],
          ["Anabolic steroids", "Irritability, aggression, depression, psychosis (athletes, bodybuilders); urine screens; non-testosterone androgens by GC–mass spectroscopy; consult a specialist"],
          ["Diabetes insipidus", "Low ADH (AVP) in **central** DI (pituitary/hypothalamus, e.g., head trauma); **nephrogenic** DI is inherited (X-linked) or acquired, e.g., **lithium** reduces renal tubule sensitivity to AVP. About **one-fifth** of lithium patients develop polyuria. Central DI responds to vasopressin. Primary polydipsia (dry mouth from medications) is another cause of polyuria"],
          ["SIADH", "Excess AVP → water retention → **hyponatremia** → possible delirium; brain injury or drugs (phenothiazines, butyrophenones, carbamazepine, oxcarbazepine)"],
          ["hCG", "Routine urine tests reliable about **1–2 weeks after a missed period**; ultrasensitive tests 7 days after fertilization. Check before **lithium, carbamazepine, valproate**"],
          ["Parathormone", "Calcium and phosphorus disturbances → depression or delirium"],
          ["Prolactin", "Raised by antipsychotic **D2 blockade** in the pituitary; brain MRI usually not needed if the rise fits a drug cause. **Rises briefly after a seizure**, helping separate epileptic from nonepileptic events"],
          ["Thyroid", "Mainly depression and anxiety, also panic, dementia, psychosis; hard to reach **euthymia** unless **euthyroid**"],
          ["Lupus (SLE)", "**ANA** in virtually all patients but not specific; **anti-DNA** with ANA strongly suggests lupus and tracks treatment. Depression, dementia, delirium, mania, psychosis; about **5%** present with psychosis"],
          ["Amylase", "Pancreatitis in heavy drinkers; can be fractionated into salivary and pancreatic components; often checked in **bulimia**"]
        ] }
      ]
    },
    {
      id: "s1-chemistry",
      title: "Clinical chemistry, liver, kidney and vitamins",
      blocks: [
        { type: "table", caption: "Electrolytes and minerals", head: ["Finding", "Psychiatric associations"], rows: [
          ["Low chloride; high bicarbonate", "Self-induced **vomiting**; bicarbonate also high with laxative abuse"],
          ["Low bicarbonate; low phosphorus", "**Hyperventilation** from anxiety"],
          ["Hypokalemia", "Purging, laxative or diuretic abuse, psychogenic vomiting; weakness, fatigue; ECG: **flat or inverted T waves, U waves**, ST depression, arrhythmias"],
          ["Low magnesium", "Alcohol use; agitation, confusion, delirium → seizures and coma if untreated"],
          ["Low phosphorus", "Purging, hyperventilation, hyperparathyroidism (high phosphorus in hypoparathyroidism)"],
          ["Hyponatremia", "**Psychogenic polydipsia**, SIADH, carbamazepine; delirium"],
          ["Low calcium", "Depression, delirium, irritability; laxative abuse; after thyroid surgery (hypoparathyroidism)"],
          ["High calcium", "Depression, psychosis, weakness"],
          ["Wilson disease", "Low serum copper and **ceruloplasmin**, high **24-hour urine copper**; copper in brain and liver → intellectual decline, personality change, psychosis, movement disorder; onset 2nd–3rd decade"]
        ] },
        { type: "list", title: "Standard eating disorder panel", items: [
          "Electrolytes (especially **potassium and phosphorus**), glucose, thyroid tests, liver enzymes, total protein, albumin, BUN, creatinine, CBC and **ECG**; amylase in bulimia."
        ] },
        { type: "defs", title: "Kidney, liver and other tests", items: [
          ["BUN", "Raised with dehydration; can cause lethargy or delirium; high BUN often means **impaired lithium clearance**."],
          ["Creatinine", "Less sensitive: rises only after roughly **50% of nephrons** are damaged."],
          ["Creatinine clearance", "Sensitive renal measure in lithium patients: 24-hour urine in a well-hydrated patient with a serum creatinine at the midpoint."],
          ["Acute intermittent porphyria", "Raised urine **porphobilinogen** during attacks: psychosis, apathy or depression with abdominal pain, neuropathy and autonomic dysfunction; follow with 24-hour porphobilinogen and aminolevulinic acid."],
          ["AST vs ALT", "AST > ALT in alcoholic liver disease; ALT dominates in viral and drug-induced disease; GGT up in hepatobiliary disease and cirrhosis."],
          ["Alkaline phosphatase", "Liver, bone, kidney, thyroid disease; raised by some psychotropics, notably **phenothiazines**."],
          ["Ammonia", "High in **hepatic encephalopathy** and with **valproate**."],
          ["Bilirubin", "Indirect (unconjugated, prehepatic) vs direct (conjugated, posthepatic) helps locate the cause."],
          ["LDH", "Liver, muscle, heart, kidney disease and **pernicious anemia**."],
          ["Folate and B12", "Deficient in heavy drinkers; dementia, delirium, psychosis (including paranoia), fatigue, personality change. Low folate with oral contraceptives or estrogen, alcohol, **phenytoin**."]
        ] }
      ]
    },
    {
      id: "s1-infection",
      title: "Infectious disease testing",
      blocks: [
        { type: "list", title: "Sexually transmitted diseases", items: [
          "Mania and substance use raise STD risk. Screen for HSV-1 and -2, chlamydia, gonorrhea, hepatitis, syphilis and **HIV**; also consider Epstein–Barr virus.",
          "Risk factors: sex workers, drug use, prior STD, partners met online, multiple or new partners, being young or unmarried."
        ] },
        { type: "list", title: "Intravenous drug use", items: [
          "Usually heroin, amphetamines and cocaine. Risks: **bacterial endocarditis**, abscess, bacteremia, hepatitis B and C, HIV and AIDS.",
          "More than **60%** of new hepatitis C cases occur in people with a history of injecting drugs.",
          "Suspected endocarditis or bacteremia: CBC and **blood cultures from at least two sites** if febrile, plus internal medicine consultation."
        ] },
        { type: "defs", title: "Syphilis and hepatitis", items: [
          ["FTA-ABS", "Treponemal antibody test, more sensitive and specific than **RPR/VDRL**; used to **confirm** a positive screen and when neurosyphilis is suspected; usually **positive for life**; false positives in SLE."],
          ["Viral hepatitis", "A, B, C and D (delta). ALT especially raised; psychiatric symptoms include depression, anxiety, weakness, psychosis; impaired hepatic metabolism means **dose adjustment** or less hepatically dependent drugs."],
          ["Lab course", "WBC normal to low; bilirubinuria precedes jaundice; very high AST/ALT early, then bilirubin and alkaline phosphatase; marked PT prolongation predicts higher mortality."],
          ["Chronicity", "Chronic = enzymes raised **>6 months**: **1–2%** of adults after acute hepatitis B vs **>80%** after hepatitis C. Cirrhosis in up to **30%** of chronic C and **40%** of chronic B; hepatocellular carcinoma **3–5% per year** with cirrhosis."]
        ] }
      ]
    },
    {
      id: "s1-eeg-ecg",
      title: "EEG, sleep studies and ECG",
      blocks: [
        { type: "defs", title: "Electrophysiology", items: [
          ["EEG", "Records cortical electrical activity; can be digitized into topographic maps or paired with video (**telemetry**) for epilepsy workups; also used to monitor ECT."],
          ["Use in psychiatry", "Mainly to **rule out seizures or delirium** as the cause of symptoms. For stroke, tumor, subdural or dementia, **imaging** has a higher yield."],
          ["Highest yield", "Seizure history or clues to recent seizure: altered consciousness, **olfactory** or other atypical hallucinations, head injury, automatisms; also after an abnormal CT/MRI."],
          ["Evoked potentials", "Averaged EEG responses to visual, auditory or somatosensory stimuli (milliseconds); used for multiple sclerosis and, in psychiatry, to separate organic from functional deficits (e.g., possible **hysterical blindness**)."],
          ["Polysomnography", "EEG, ECG, oxygen saturation, respiration, temperature, EMG and EOG. Major depression shows **more REM** and **shortened REM latency**; patients who look depressed from dementia do not."]
        ] },
        { type: "callout", kind: "exam", title: "A normal EEG does not exclude epilepsy", text: "Seizures are a **clinical diagnosis**. A normal tracing never rules them out." },
        { type: "table", caption: "ECG in psychiatric practice", head: ["Drug or problem", "ECG point"], rows: [
          ["Ziprasidone", "Dose-related **QTc prolongation**; baseline ECG; contraindicated with known long QT, recent MI, uncompensated heart failure; risk up with bradycardia, low K or Mg, other QT drugs; stop if QTc persistently **>500 ms**"],
          ["Thioridazine", "Dose-related QTc prolongation, torsades and sudden death; baseline ECG"],
          ["Tricyclics", "Faster heart rate; longer PR, QRS, QT; ST and T changes; can cause or worsen AV or bundle branch block. **QTc >0.440 s** raises sudden-death risk. ECG before starting if **over 40** or any cardiovascular disease"],
          ["Lithium", "Benign reversible **T-wave changes**; can impair SA node function and cause heart block; ECG before starting and in toxicity"],
          ["Hypokalemia (eating disorders)", "Flat or inverted T waves and U waves"],
          ["Holter monitor", "Ambulatory ~24-hour ECG for dizziness, palpitations, syncope; often used in **panic disorder** with cardiac symptoms"],
          ["Cardiac ultrasound", "Evaluates **mitral valve prolapse**, whose link to panic and anxiety is unclear"]
        ] }
      ]
    },
    {
      id: "s1-imaging-indications",
      title: "When to image and what imaging shows",
      blocks: [
        { type: "list", title: "Clinical indications", items: [
          "Any neurologic exam change that **localizes** to the brain or spinal cord (mental status, cranial nerves, motor, coordination, sensory, reflexes).",
          "**New-onset psychosis** and **acute mental status change** warrant a workup that includes imaging.",
          "The **clinical examination takes priority**; imaging follows clinical suspicion of a CNS disorder."
        ] },
        { type: "table", caption: "Imaging in the dementia workup", head: ["Cause", "Imaging clue"], rows: [
          ["Alzheimer disease (most common)", "No characteristic routine picture; **diffuse volume loss**; medial temporal lobe atrophy most specific on MRI"],
          ["Normal pressure hydrocephalus", "**Dilated ventricles** pressing on frontal lobes; **gait disorder almost always**, dementia less consistently; shunting can fully restore function"],
          ["Stroke", "Easily seen on MRI; post-stroke depression is common and can cause pseudodementia"],
          ["Vascular dementia", "Many tiny infarcts: **white matter hyperintensities** on MRI"],
          ["Huntington disease", "**Caudate** (and lentiform) atrophy with lateral ventricle dilation"],
          ["Space-occupying lesions", "Chronic subdural, contusion; skull-base meningioma compressing cortex; infiltrating gliomas cutting white matter tracts; periventricular tumors raising pressure"],
          ["Chronic infection", "Neurosyphilis, cryptococcosis, TB, Lyme: **basal meningeal enhancement**; serology completes the diagnosis"],
          ["HIV", "Diffuse volume loss, or progressive multifocal leukoencephalopathy with white matter signal"],
          ["Multiple sclerosis", "**Periventricular** high-signal plaques on MRI"]
        ] },
        { type: "callout", kind: "caution", title: "Normal scan, real dementia", text: "Medication effects, metabolic derangements, infection and nutritional deficits may cause dementia **without imaging changes**, so the lab workup still matters." },
        { type: "list", title: "Research findings by disorder", items: [
          "**Schizophrenia**: loss of brain (especially gray matter) volume, enlarged lateral and third ventricles, greatest loss in the **temporal lobes** (left more than right), and reduced **frontal metabolism** during prefrontal tasks; MRS shows lower NAA.",
          "**Mood**: volume loss and lower frontal activity; left prefrontal inactivation lowers mood, right prefrontal inactivation raises it.",
          "**OCD**: normal structure or a **smaller caudate**; abnormal orbital prefrontal activity during symptoms; caudate metabolism partly normalizes with fluoxetine, clomipramine or behavior therapy.",
          "**ADHD**: normal or smaller **right prefrontal cortex and globus pallidus**; caudate nuclei may be equal in size instead of right larger than left.",
          "**Panic**: brain lactate rises during attacks; lactate infusion triggers panic in about **three-fourths** of patients with panic disorder or major depression."
        ] }
      ]
    },
    {
      id: "s1-imaging-tech",
      title: "Imaging techniques compared",
      blocks: [
        { type: "p", text: "**Structural** imaging (x-ray, CT, MRI) shows anatomy; **functional** imaging (PET, SPECT, fMRI, MRS) maps biochemical processes or blood flow. Apart from some PET uses, functional methods remain largely research tools." },
        { type: "table", caption: "CT versus MRI", head: ["Feature", "CT", "MRI"], rows: [
          ["Principle", "X-ray absorption, computer reconstruction (1972)", "Nuclear magnetic resonance of hydrogen nuclei (1982)"],
          ["Best for", "Emergencies; **acute hemorrhage**, acute infarct, **calcification**, meningeal tumors, skull fracture", "Nonemergency study of choice; temporal lobes, cerebellum, deep structures, **white matter hyperintensities**, demyelination, small lesions"],
          ["Weaknesses", "Poor gray–white contrast; bone artifact near the brainstem; some tumors invisible", "Misses calcification; claustrophobia (open scanners have lower resolution); long, noisy, motionless scans"],
          ["Contrast", "Iodinated; caution with **iodine or shellfish allergy**", "**Gadolinium**, on T1 only"],
          ["Contraindications", "Radiation exposure", "**Pacemaker, aneurysm clips, ferromagnetic** implants or fragments"]
        ] },
        { type: "defs", title: "MRI sequences", items: [
          ["T1", "Fat bright, CSF dark; closest to CT; overall structure; only sequence for gadolinium enhancement."],
          ["T2", "CSF bright, brain dark; high-water lesions (tumor, inflammation, stroke) bright; shows pathology most clearly."],
          ["Proton density", "Equalizes CSF and brain to show changes right next to the ventricles."],
          ["FLAIR", "Doubles gray–white contrast; detects **hippocampal sclerosis** in temporal lobe epilepsy."],
          ["Field strength", "Clinical scanners 1.5–3.0 tesla; no proven tissue harm from the magnetic field."]
        ] },
        { type: "table", caption: "Functional techniques", head: ["Method", "Measures", "Notes"], rows: [
          ["fMRI (BOLD)", "Blood flow via oxygenated hemoglobin", "No radioactivity; resolution limited because the flow area exceeds active neurons by 1–2 cm; most used for cognitive research; Alzheimer: less hippocampal activation during encoding"],
          ["MRS", "Odd-numbered nuclei (¹H, ³¹P, ¹⁹F, ⁷Li)", "¹H: NAA, creatine, choline, glutamate, glutamine, lactate, myoinositol (amines too dilute); ³¹P: pH and ATP. Alzheimer: **low NAA, high myoinositol**. Brain lithium half of plasma except in mania; fluoxetine takes ~6 months to peak at ~20× serum"],
          ["SPECT", "Blood flow with single-photon isotopes (¹²³I, ⁹⁹ᵐTc-HMPAO, ¹³³Xe)", "Xenon sees only the cortical surface; useful for stroke perfusion; lower resolution than PET"],
          ["PET", "Glucose metabolism (**FDG**), blood flow, receptor occupancy", "Two photons emitted 180° apart give better resolution; needs an onsite **cyclotron**. Alzheimer: **temporoparietal hypometabolism**; FDDNP binds plaques and tangles; haloperidol occupies nearly all D2 receptors"]
        ] },
        { type: "callout", kind: "pearl", title: "Imaging can change the diagnosis", text: "The chapter's example: a woman hospitalized for a first episode of depression and suicidality after a breakup turned out to have a **malignant tumor** extending into a lateral ventricle." }
      ]
    }
  ]
})
