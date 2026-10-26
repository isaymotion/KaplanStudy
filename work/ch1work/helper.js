  {
    id: "workup",
    chapter: "ch01",
    title: "Which medical workup?",
    summary: "Pick the clinical situation and a detail or two to see the laboratory tests, ECG, EEG and imaging that Chapter 1 points to, with the reasoning shown.",
    caution: "A teaching aid built from Chapter 1, not an order set. Tests follow the history and examination, reference ranges differ between laboratories, and local protocols and consultants take precedence.",
    start: "situation",
    nodes: {
      situation: {
        q: "What is prompting the medical workup?",
        help: "The history, review of systems and physical examination decide which tests are relevant. Choose the situation that best fits this patient.",
        options: [
          { label: "Acute confusion, fluctuating alertness or a sudden change in mental status", to: "acute", note: "The presentation is an acute change in mental status." },
          { label: "Gradual decline in memory or thinking", to: "decline", note: "The presentation is a gradual cognitive decline." },
          { label: "New-onset psychosis", to: "psychosis", note: "This is a first episode of psychosis." },
          { label: "Suspected substance use or toxic exposure", to: "substance", note: "Substance use or a toxic exposure is suspected." },
          { label: "Starting or monitoring a psychotropic, or preparing for ECT", to: "drug", note: "The question is drug or ECT monitoring." },
          { label: "Eating disorder with restriction or purging", to: "r:eating", note: "The patient has an eating disorder with restriction or purging." },
          { label: "Intentional overdose", to: "r:overdose", note: "The patient has taken an intentional overdose." }
        ]
      },
      acute: {
        q: "Which feature stands out?",
        help: "Altered consciousness is a sensitive sign of brain dysfunction. Look at current drugs, vital signs, the neurologic examination and any history of seizures.",
        options: [
          { label: "Taking an antipsychotic, with fever, rigidity and unstable vital signs", to: "r:nms", note: "Fever, rigidity and autonomic instability on a neuroleptic raise neuroleptic malignant syndrome." },
          { label: "Episodes with automatisms, olfactory hallucinations or a recent head injury", to: "r:seizure", note: "The episodes carry clinical clues to seizure activity." },
          { label: "Taking valproate, now lethargic or confused", to: "r:valproate", note: "Valproate can raise ammonia and cause lethargy or confusion." },
          { label: "Taking lithium, with tremor, sedation or confusion", to: "r:lithium", note: "These are the early signs of lithium toxicity." },
          { label: "None of these specifically", to: "r:delirium", note: "No single cause stands out, so a broad delirium workup is needed." }
        ]
      },
      decline: {
        q: "Which feature stands out?",
        help: "Alzheimer disease, the most common cause, has no characteristic routine imaging appearance, but several treatable causes do.",
        options: [
          { label: "An early gait disorder, with or without urinary symptoms", to: "r:nph", note: "An early gait disorder with cognitive decline suggests normal pressure hydrocephalus." },
          { label: "Focal neurologic signs or a stepwise course", to: "r:focal", note: "Focal signs or a stepwise course point to a structural or vascular cause." },
          { label: "Young adult with a movement disorder, personality change or liver disease", to: "r:wilson", note: "Onset in the second or third decade with movement and liver signs suggests Wilson disease." },
          { label: "Prominent depressed mood alongside the cognitive complaints", to: "r:pseudo", note: "Depression can impair memory and timed performance and mimic dementia." },
          { label: "Only minor lapses such as names and misplaced objects, with normal function", to: "r:benign", note: "Minor lapses with intact function fit benign senescent forgetfulness." },
          { label: "None of these specifically", to: "r:dementia", note: "A standard dementia workup is needed." }
        ]
      },
      psychosis: {
        q: "Are there any of these features?",
        help: "New-onset psychosis is itself an indication for a workup that includes neuroimaging. Some medical causes have distinctive clues.",
        options: [
          { label: "Recurrent attacks with abdominal pain, neuropathy or autonomic symptoms", to: "r:porphyria", note: "Psychosis with abdominal pain and neuropathy raises acute intermittent porphyria." },
          { label: "Young adult with a movement disorder or abnormal liver tests", to: "r:wilson", note: "Psychosis with movement and liver signs in a young adult suggests Wilson disease." },
          { label: "Rash, joint symptoms or other signs of an autoimmune disease", to: "r:lupus", note: "Psychosis with autoimmune features raises systemic lupus erythematosus." },
          { label: "Episodic symptoms with automatisms, olfactory hallucinations or altered consciousness", to: "r:seizure", note: "The psychotic symptoms come with clues to seizure activity." },
          { label: "None of these", to: "r:newpsych", note: "No specific medical clue, so the standard first-episode workup applies." }
        ]
      },
      substance: {
        q: "What is the main concern?",
        help: "Patients are often unreliable reporters of substance use, and substance-induced disorders can resemble primary psychiatric disorders.",
        options: [
          { label: "Alcohol", to: "r:alcohol", note: "Alcohol is the main concern." },
          { label: "Injection drug use", to: "r:ivdu", note: "The patient injects drugs." },
          { label: "Other drugs, or unexplained behavioral change", to: "r:tox", note: "Other drug use, or unexplained behavior, calls for a drug screen." },
          { label: "Inhalants, or occupational or hobby exposure to metals or chemicals", to: "r:toxins", note: "Volatile solvents or environmental toxins are possible." },
          { label: "Anabolic steroids in an athlete or bodybuilder", to: "r:steroids", note: "Anabolic steroid use is suspected." }
        ]
      },
      drug: {
        q: "Which treatment?",
        help: "Monitoring aims to avoid toxicity and to confirm that enough drug is on board for a response.",
        options: [
          { label: "Lithium", to: "r:lithium", note: "The patient is starting or taking lithium." },
          { label: "Valproate", to: "r:valproate", note: "The patient is starting or taking valproate." },
          { label: "Carbamazepine", to: "r:carbamazepine", note: "The patient is starting or taking carbamazepine." },
          { label: "Clozapine", to: "r:clozapine", note: "The patient is starting or taking clozapine." },
          { label: "Ziprasidone or thioridazine", to: "r:qtc", note: "These antipsychotics prolong the QTc in a dose-related way." },
          { label: "A tricyclic or tetracyclic antidepressant", to: "r:tca", note: "Tricyclics affect cardiac conduction." },
          { label: "A monoamine oxidase inhibitor", to: "r:maoi", note: "MAOIs affect blood pressure and occasionally the liver." },
          { label: "An antipsychotic with a raised prolactin", to: "r:prolactin", note: "Antipsychotics raise prolactin by blocking pituitary dopamine receptors." },
          { label: "Electroconvulsive therapy", to: "r:ect", note: "The patient is being prepared for ECT." }
        ]
      }
    },
    results: {
      delirium: {
        label: "Suggested workup",
        dx: "Delirium workup",
        line: "Start with the standard dementia laboratory panel, then add tests aimed at infection, metabolic causes, drugs and the brain.",
        points: [
          "CBC, electrolytes, liver tests, BUN and creatinine, thyroid tests, B12 and folate, VDRL and urinalysis.",
          "Add urine or blood cultures, a chest radiograph, neuroimaging or an EEG as appropriate.",
          "Electrolytes are often abnormal in delirium: low sodium, magnesium or calcium can all cause it; a high BUN can cause lethargy.",
          "Check ammonia if liver disease or valproate is possible.",
          "Review every drug: anticholinergics are a classic cause of delirium in older patients.",
          "Inattention from altered consciousness can make the neurologic examination hard to interpret."
        ],
        link: { ch: "ch01", sec: "s1-lab-approach", label: "Why medical testing matters" }
      },
      nms: {
        label: "Suggested workup",
        dx: "Neuroleptic malignant syndrome workup",
        line: "Autonomic instability, hyperpyrexia, severe rigidity and delirium in a patient on a neuroleptic.",
        points: [
          "CBC, electrolytes, BUN, creatinine and creatine kinase.",
          "Urinalysis including urine myoglobin.",
          "Blood and urine cultures as part of the fever workup.",
          "White counts typically run 10,000 to 40,000 per mm³; liver enzymes rise if the liver fails.",
          "Stop the neuroleptic, hydrate, give muscle relaxants and provide supportive care.",
          "Remember that IM injections, long periods in restraints and dystonia also raise CK."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels, monitoring and NMS" }
      },
      seizure: {
        label: "Suggested workup",
        dx: "Look for a seizure disorder",
        line: "An EEG has its highest yield when the history suggests a seizure; imaging is added for a structural cause.",
        points: [
          "Clues that raise EEG yield: altered consciousness, olfactory or other atypical hallucinations, head injury and automatisms.",
          "A normal EEG does not rule out a seizure disorder; seizures are a clinical diagnosis.",
          "Video-EEG telemetry correlates behavior with brain electrical activity.",
          "A prolactin drawn promptly after an episode helps separate a true seizure from a pseudoseizure.",
          "Consider MRI, including FLAIR for hippocampal sclerosis in temporal lobe epilepsy; an EEG is also usual after an abnormal CT or MRI."
        ],
        link: { ch: "ch01", sec: "s1-eeg-ecg", label: "EEG, sleep studies and ECG" }
      },
      dementia: {
        label: "Suggested workup",
        dx: "Standard dementia workup",
        line: "Look for treatable and contributing causes; Alzheimer disease shows only diffuse volume loss on routine imaging.",
        points: [
          "CBC, electrolytes, liver tests, BUN and creatinine, thyroid tests, B12 and folate, VDRL and urinalysis.",
          "No clear clinical indication for apolipoprotein E ε4 testing.",
          "CT if there are focal neurologic findings; MRI is the nonemergency study of choice; EEG if delirium is suspected.",
          "Medications, metabolic disorders, infection and nutritional deficits can cause dementia without imaging changes.",
          "FDG-PET temporoparietal hypometabolism supports Alzheimer disease; the MMSE detects and tracks impairment but does not diagnose."
        ],
        link: { ch: "ch01", sec: "s1-imaging-indications", label: "When to image" }
      },
      nph: {
        label: "Suggested workup",
        dx: "Image for normal pressure hydrocephalus",
        line: "A treatable dementia that needs neuroimaging for diagnosis.",
        points: [
          "CT or MRI shows dilated ventricles that press on the frontal lobes.",
          "A gait disorder is almost always present; the dementia may look like Alzheimer disease and appears less consistently.",
          "Relieving the CSF pressure may completely restore gait and mental function.",
          "Complete the standard dementia laboratory panel as well."
        ],
        link: { ch: "ch01", sec: "s1-imaging-indications", label: "When to image" }
      },
      focal: {
        label: "Suggested workup",
        dx: "Image for a structural or vascular cause",
        line: "Any change on neurologic examination that localizes to the brain or spinal cord requires neuroimaging.",
        points: [
          "CT for acute hemorrhage, acute infarct, calcification, skull fracture or a meningeal tumor; MRI otherwise.",
          "Vascular dementia: many small infarcts with patches of white matter hyperintensity on MRI.",
          "Space-occupying lesions: chronic subdural hematoma, contusion, meningioma, infiltrating glioma.",
          "Chronic infections (syphilis, cryptococcus, tuberculosis, Lyme) enhance the basal meninges; serology completes the diagnosis.",
          "Multiple sclerosis plaques appear as periventricular high signal; Huntington disease shows caudate atrophy."
        ],
        link: { ch: "ch01", sec: "s1-imaging-indications", label: "When to image" }
      },
      wilson: {
        label: "Suggested workup",
        dx: "Test for Wilson disease",
        line: "A rare disorder of copper metabolism that deposits copper in the brain and liver.",
        points: [
          "Serum ceruloplasmin (the copper transport protein) is low.",
          "24-hour urine copper is high; serum copper is low.",
          "Presents in the second and third decades with intellectual decline, personality change, psychosis and a movement disorder.",
          "Add liver tests and complete the standard workup for the presentation."
        ],
        link: { ch: "ch01", sec: "s1-chemistry", label: "Clinical chemistry" }
      },
      pseudo: {
        label: "Suggested workup",
        dx: "Separate depression from dementia",
        line: "Depression, even without dementia, impairs memory, visuospatial and timed motor performance.",
        points: [
          "Complete the standard dementia laboratory panel, including thyroid tests.",
          "Polysomnography: depression shortens REM latency and increases REM; patients who look depressed from dementia do not show this.",
          "Use the Geriatric Depression Scale, which leaves out somatic items that confound the diagnosis in the medically ill.",
          "Remember that post-stroke depression can itself cause pseudodementia.",
          "Ask directly about suicidal thoughts."
        ],
        link: { ch: "ch01", sec: "s1-geri-testing", label: "Testing older adults" }
      },
      benign: {
        label: "Conclusion",
        dx: "Benign senescent forgetfulness",
        line: "Minor age-associated memory lapses, such as forgetting names or misplacing objects, are of no clinical significance.",
        points: [
          "Interview anxiety alone can produce minor cognitive lapses.",
          "Confirm that daily functioning and the mental status examination are intact.",
          "Repeat the examination if the picture changes; recent memory is the first to fail in true cognitive disorders."
        ],
        link: { ch: "ch01", sec: "s1-geri-history", label: "Approach and history in older adults" }
      },
      porphyria: {
        label: "Suggested workup",
        dx: "Test for acute intermittent porphyria",
        line: "Psychosis, apathy or depression with intermittent abdominal pain, neuropathy and autonomic dysfunction.",
        points: [
          "Urine porphobilinogen is raised during symptomatic periods.",
          "If it is raised, collect a 24-hour urine for quantitative porphobilinogen and aminolevulinic acid.",
          "Complete the standard first-episode psychosis workup."
        ],
        link: { ch: "ch01", sec: "s1-chemistry", label: "Clinical chemistry" }
      },
      lupus: {
        label: "Suggested workup",
        dx: "Test for systemic lupus erythematosus",
        line: "Lupus can cause depression, dementia, delirium, mania and psychosis; about 5 percent present with psychosis.",
        points: [
          "Antinuclear antibodies are found in virtually all patients but are not specific.",
          "A positive result is followed by anti-DNA antibodies, which with ANA strongly suggest lupus and are followed during treatment.",
          "Lupus can cause a false-positive FTA-ABS for syphilis."
        ],
        link: { ch: "ch01", sec: "s1-endocrine", label: "Endocrine and immune evaluations" }
      },
      newpsych: {
        label: "Suggested workup",
        dx: "First-episode psychosis workup",
        line: "New-onset psychosis is an indication for a medical workup that includes neuroimaging.",
        points: [
          "Neuroimaging: MRI is the nonemergency study of choice; a tumor can present as a first psychiatric episode.",
          "Urine drug screen, confirmed if positive, because substance-induced disorders mimic primary ones.",
          "Basic laboratory panel with thyroid tests, B12 and folate, and syphilis serology (confirm a positive RPR or VDRL with FTA-ABS).",
          "Consider HIV and other STD testing; mania and substance use raise the risk.",
          "Pregnancy test in women before starting drugs with teratogenic risk."
        ],
        link: { ch: "ch01", sec: "s1-imaging-indications", label: "When to image" }
      },
      alcohol: {
        label: "Suggested workup",
        dx: "Alcohol-related tests",
        line: "No single test is diagnostic: the drinking history matters most, and labs support it.",
        points: [
          "Blood alcohol level: high BAL with little impairment means tolerance; marked intoxication with a low BAL suggests other agents.",
          "Liver tests: AST usually exceeds ALT, often 2:1 or more; GGT and bilirubin may rise; albumin may fall and PT lengthen.",
          "CBC for macrocytosis; carbohydrate-deficient transferrin for chronic heavy use.",
          "Magnesium, folate and B12 are often low; amylase if pancreatitis is possible.",
          "Look for rhinophyma, telangiectasias, hepatomegaly and trauma; in withdrawal, hypertension, tremor and tachycardia."
        ],
        link: { ch: "ch01", sec: "s1-tox", label: "Toxicology and alcohol" }
      },
      ivdu: {
        label: "Suggested workup",
        dx: "Injection drug use workup",
        line: "Contaminated needles bring risks of bacterial infection, hepatitis and HIV.",
        points: [
          "Hepatitis B and C serology and liver tests; more than 60 percent of new hepatitis C cases involve injecting drugs.",
          "HIV and other sexually transmitted disease testing.",
          "If endocarditis, bacteremia or abscess is suspected: CBC and blood cultures from at least two sites, and internal medicine consultation.",
          "Urine drug screen, with confirmation of positives."
        ],
        link: { ch: "ch01", sec: "s1-infection", label: "Infectious disease testing" }
      },
      tox: {
        label: "Suggested workup",
        dx: "Drug screen",
        line: "Urine immunoassays screen quickly for common drugs of abuse, but they are screening tests.",
        points: [
          "Confirm any positive result; false positives often come from prescribed drugs, and false negatives from collection or storage problems.",
          "Mind the detection windows: cocaine metabolites 2 to 4 days, marijuana 2 to 7 days, benzodiazepines about 3 days.",
          "Random testing may monitor abstinence more accurately than scheduled testing.",
          "Comprehensive chromatographic screening is reserved for unexplained toxicity with an atypical picture."
        ],
        link: { ch: "ch01", sec: "s1-tox", label: "Toxicology" }
      },
      toxins: {
        label: "Suggested workup",
        dx: "Toxin exposure workup",
        line: "Exposure usually comes through work or hobbies; match the test to the toxin.",
        points: [
          "Lead: blood level or 24-hour urine; free erythrocyte protoporphyrin screens chronic exposure.",
          "Arsenic, manganese and mercury can be measured in urine, blood and hair; aluminum in urine or blood.",
          "Toluene inhalation can show loss of gray–white differentiation and atrophy on MRI; butyl nitrite can cause methemoglobinemia.",
          "There is no ready test for most insecticides; poison control centers can help find one."
        ],
        link: { ch: "ch01", sec: "s1-tox", label: "Environmental toxins" }
      },
      steroids: {
        label: "Suggested workup",
        dx: "Anabolic steroid screen",
        line: "Steroid use is linked to irritability, aggression, depression and psychosis.",
        points: [
          "Urine specimens can screen for these agents.",
          "So many compounds exist that several tests may be needed; androgens other than testosterone are detected by gas chromatography and mass spectroscopy.",
          "Consultation with a specialist is advised."
        ],
        link: { ch: "ch01", sec: "s1-endocrine", label: "Endocrine evaluations" }
      },
      lithium: {
        label: "Monitoring",
        dx: "Lithium monitoring",
        line: "A narrow therapeutic index makes blood levels essential.",
        points: [
          "Toxicity can begin above 1.2 mEq/L and is common above 1.4 mEq/L; elderly or debilitated patients can be toxic at lower levels.",
          "Renal function: BUN, creatinine and creatinine clearance; a high BUN often means impaired lithium clearance.",
          "Ask about polyuria: about one-fifth develop it, and lithium is a common cause of nephrogenic diabetes insipidus.",
          "ECG before starting and in toxicity: benign T-wave changes, sinus node dysfunction, heart block.",
          "Pregnancy test before starting in women of childbearing age."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      valproate: {
        label: "Monitoring",
        dx: "Valproate monitoring",
        line: "Watch the liver, blood counts, ammonia and pregnancy risk.",
        points: [
          "Baseline liver tests; transaminases may stay raised up to three times normal, and hepatic necrosis is rare.",
          "Check ammonia in any patient on valproate with lethargy or altered mental status.",
          "Blood counts for leukopenia and thrombocytopenia; consider pancreatitis.",
          "Pregnancy test before starting and counseling about contraception."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      carbamazepine: {
        label: "Monitoring",
        dx: "Carbamazepine monitoring",
        line: "Blood counts, sodium and pregnancy status matter most.",
        points: [
          "Baseline CBC: anemia, aplastic anemia, leukopenia and thrombocytopenia are rare but possible.",
          "Sodium: usually mild hyponatremia, but SIADH can occur and cause delirium.",
          "Pregnancy test: spina bifida and finger anomalies are reported.",
          "Toxicity: nausea, ataxia, nystagmus, confusion, urinary retention; very high levels cause arrhythmias, seizures and respiratory depression."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      clozapine: {
        label: "Monitoring",
        dx: "Clozapine monitoring",
        line: "Morning trough levels and white counts guide treatment.",
        points: [
          "About 100 is widely taken as the minimum therapeutic level; at least about 350 is considered necessary in refractory schizophrenia.",
          "Seizures and other side effects become more likely above 1,200 or at doses above 600 mg per day.",
          "Clozapine is a common cause of leukopenia: interrupt treatment for moderate to severe leukopenia; rechallenge may be possible later."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      qtc: {
        label: "Monitoring",
        dx: "QTc monitoring",
        line: "Ziprasidone and thioridazine prolong the QTc in a dose-related way.",
        points: [
          "Obtain a baseline ECG before starting.",
          "Ziprasidone is contraindicated with known QTc prolongation or congenital long QT, recent myocardial infarction or uncompensated heart failure.",
          "Bradycardia, low potassium or magnesium and other QT-prolonging drugs raise the risk of serious arrhythmia.",
          "Stop ziprasidone if the QTc stays above 500 ms."
        ],
        link: { ch: "ch01", sec: "s1-eeg-ecg", label: "ECG in psychiatric practice" }
      },
      tca: {
        label: "Monitoring",
        dx: "Tricyclic monitoring",
        line: "Tricyclics affect cardiac conduction.",
        points: [
          "Baseline CBC, electrolytes and liver tests.",
          "ECG for PR, QRS and QTc, especially if the patient is over 40 or has cardiovascular disease.",
          "A QTc above 0.440 seconds raises the risk of sudden death from arrhythmia.",
          "Tricyclics can cause or worsen atrioventricular or bundle branch block."
        ],
        link: { ch: "ch01", sec: "s1-eeg-ecg", label: "ECG in psychiatric practice" }
      },
      maoi: {
        label: "Monitoring",
        dx: "MAOI monitoring",
        line: "Blood pressure is the key measurement; blood levels are not useful.",
        points: [
          "Baseline blood pressure, then monitor during treatment for orthostasis and, rarely, hypertensive crisis.",
          "Liver tests at the start and periodically, because hepatotoxicity occasionally occurs.",
          "Direct monitoring of MAOI blood levels is not clinically indicated."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      prolactin: {
        label: "Interpretation",
        dx: "Drug-related hyperprolactinemia",
        line: "Antipsychotics raise prolactin by blocking dopamine receptors in the pituitary.",
        points: [
          "Brain MRI is not usually needed if the patient takes a prolactin-raising antipsychotic and the elevation is consistent with a drug cause.",
          "A rise out of proportion to the drug calls for further evaluation.",
          "Hyperprolactinemia is one of the psychotropic health risks that make physical monitoring important."
        ],
        link: { ch: "ch01", sec: "s1-endocrine", label: "Endocrine evaluations" }
      },
      ect: {
        label: "Preparation",
        dx: "Pre-ECT evaluation",
        line: "No specific laboratory test is required; the history and physical examination are the real screen.",
        points: [
          "Typical tests: CBC, electrolytes, urinalysis and liver tests, usually with an ECG.",
          "Spine x-rays are no longer routine, because paralytic agents make spinal injury rare.",
          "Use the history and examination to find conditions that could complicate treatment."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels, monitoring and ECT" }
      },
      eating: {
        label: "Suggested workup",
        dx: "Eating disorder panel",
        line: "Restriction and purging cause predictable laboratory and ECG changes.",
        points: [
          "Electrolytes, especially potassium and phosphorus; glucose; thyroid tests; liver enzymes; total protein and albumin; BUN and creatinine; CBC; ECG.",
          "Serum amylase in bulimia.",
          "Vomiting: low chloride and potassium with high bicarbonate; laxatives: high bicarbonate, low potassium, low calcium.",
          "Hypokalemia on ECG: flat or inverted T waves and U waves."
        ],
        link: { ch: "ch01", sec: "s1-chemistry", label: "Clinical chemistry" }
      },
      overdose: {
        label: "Suggested workup",
        dx: "Overdose workup",
        line: "Combine qualitative toxicology with the clinical picture and the time of ingestion.",
        points: [
          "Acetaminophen level: toxicity is likely above 140 mcg/mL at 4 hours; give acetylcysteine promptly. Heavy drinkers are especially vulnerable.",
          "Salicylate level: most patients are symptomatic above 40 mg/dL, with tinnitus, tachypnea and acid–base disturbance.",
          "Levels of any prescribed drug with a therapeutic range, such as lithium.",
          "ECG if tricyclics or other conduction-altering drugs may be involved.",
          "Comprehensive chromatographic screening if the toxicity is unexplained or the picture atypical."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and overdose" }
      }
    }
  }
