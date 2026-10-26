({
domains: { "c211-04": "D", "c211-09": "D", "c211-11": "C", "c211-13": "E", "c211-16": "C", "c211-18": "A", "c211-22": "E", "c211-23": "C", "c211-26": "D", "c211-27": "E", "c211-28": "C", "c211-32": "A" },
pretest: ["c211-01", "c211-03", "c211-04", "c211-06", "c211-10", "c211-14", "c211-17", "c211-25"],
checks: {
  "s211-sga": [
    { q: "What is the main gain and main cost of SGAs?", a: "Gain: lower **EPS** risk. Cost: **weight gain** and diabetes, mostly with **olanzapine and clozapine**." },
    { q: "List the FDA-recommended baseline assessments.", a: "Personal and family history, **weight and BMI, waist**, **blood pressure**, fasting **glucose** and **lipids**." }
  ],
  "s211-mech": [
    { q: "What distinguishes SDAs pharmacologically?", a: "A higher **5-HT2A to D2** interaction ratio plus effects on other systems." },
    { q: "What boxed warning do all SDAs carry?", a: "Increased **death** (1.6 to 1.7 times) in older adults with **dementia-related psychosis**, plus stroke risk." }
  ],
  "s211-risp": [
    { q: "Which ages and indications does risperidone cover?", a: "Schizophrenia (adults, 13 to 17), mania (adults, 10 to 17) and **autism irritability (5 to 16)**." },
    { q: "Why does paliperidone need renal dose adjustment?", a: "It is **minimally metabolized** by the liver and cleared by the **kidneys**." }
  ],
  "s211-olz": [
    { q: "What is olanzapine's main drawback?", a: "**Weight gain** and metabolic effects, second only to clozapine." },
    { q: "What is the risk with olanzapine pamoate (Relprevv)?", a: "**Post-injection delirium/sedation syndrome**: observe for **3 hours** after each injection." }
  ],
  "s211-quet": [
    { q: "Why is quetiapine useful in Parkinson disease psychosis?", a: "It is the SDA **least likely to cause EPS** at any dose." },
    { q: "What are quetiapine's common early effects?", a: "**Somnolence, postural hypotension** and dizziness." }
  ],
  "s211-zip": [
    { q: "How should ziprasidone be taken?", a: "**With food** (doubles absorption) and **twice daily**." },
    { q: "With which drugs is ziprasidone contraindicated?", a: "**QT-prolonging** drugs such as sotalol and other class III antiarrhythmics." }
  ],
  "s211-arip": [
    { q: "How does aripiprazole work at D2 receptors?", a: "As a **partial agonist**: a modulator rather than a blocker." },
    { q: "What common adverse effect limits it?", a: "**Akathisia-like activation**; start at 5 mg." }
  ],
  "s211-others": [
    { q: "How must asenapine be taken?", a: "**Sublingually**, with no food or drink for 10 minutes (swallowed, bioavailability under 2%)." },
    { q: "Why titrate iloperidone slowly?", a: "To avoid **orthostatic hypotension**." },
    { q: "Which drugs must not be combined with lurasidone?", a: "Potent **CYP3A4 inducers** (rifampin) or inhibitors (ketoconazole)." }
  ],
  "s211-cloz": [
    { q: "Name clozapine's key indications.", a: "**Treatment-resistant** schizophrenia and **suicidality** in schizophrenia or schizoaffective disorder." },
    { q: "What should prompt testing for myocarditis?", a: "**Fever, chest pain, tachycardia**, especially in the first weeks: check troponin, CK-MB and ECG." },
    { q: "What changed for clozapine in 2025?", a: "The **REMS was removed**; ANC thresholds and the neutropenia boxed warning remain." }
  ],
  "s211-new": [
    { q: "What is the first non-dopaminergic antipsychotic?", a: "**Xanomeline–trospium** (Cobenfy, 2024), a muscarinic agonist." },
    { q: "Which drug is approved for Parkinson disease psychosis?", a: "**Pimavanserin**, a 5-HT2A inverse agonist." }
  ],
  "s211-sga-use": [
    { q: "What do you do if the first SDA fails?", a: "Try **another SDA**; reserve **clozapine** for refractory patients." }
  ],
  "s211-switch": [
    { q: "Why can switching from olanzapine to risperidone cause problems?", a: "**Cholinergic rebound**: risperidone lacks olanzapine's anticholinergic effect." },
    { q: "When is olanzapine safe after clozapine agranulocytosis?", a: "After the **counts recover**; starting during agranulocytosis prolongs recovery." }
  ],
  "s211-dra": [
    { q: "What D2 occupancy gives antipsychotic effect?", a: "About **72%**." },
    { q: "How does potency predict side effects?", a: "**Low potency**: sedation, hypotension, anticholinergic effects. **High potency**: EPS." }
  ],
  "s211-dra-ind": [
    { q: "Which symptoms do DRAs treat best?", a: "**Positive** symptoms; negative symptoms improve less." },
    { q: "When does the 2025 APA guideline allow antipsychotics for delirium?", a: "Only after de-escalation fails and reversible causes are addressed, for **significant distress or danger**." }
  ],
  "s211-nms": [
    { q: "What is the first step in NMS?", a: "**Stop the DRA** at once, then supportive care." },
    { q: "Which drugs may be added?", a: "**Dantrolene**, **bromocriptine** or **amantadine**." }
  ],
  "s211-dra-adverse": [
    { q: "Which DRAs lower the seizure threshold most?", a: "**Low-potency** drugs such as chlorpromazine and thioridazine." },
    { q: "Which pressor must be avoided in DRA hypotension, and why?", a: "**Epinephrine**: with α receptors blocked, its β effect worsens hypotension." }
  ],
  "s211-dra-tox": [
    { q: "What does a DRA overdose look like?", a: "**CNS depression, EPS**, mydriasis, tachycardia and **hypotension**; severe cases bring coma and seizures." },
    { q: "Which enzyme is most often involved in DRA interactions?", a: "**CYP2D6**." }
  ],
  "s211-dra-dose": [
    { q: "What does the book say about rapid neuroleptization?", a: "Waiting several hours after **one dose** gives the same improvement." },
    { q: "What dose may suffice for an older adult?", a: "As little as **1 mg** of haloperidol." }
  ],
  "s211-depot": [
    { q: "How is a DRA depot started?", a: "An **oral test dose**, then fluphenazine decanoate **12.5 mg** or haloperidol decanoate **25 mg**." },
    { q: "When does an oral SGA start after a depot?", a: "On the day the **next injection** would be due." }
  ],
  "s211-levels": [
    { q: "When should a plasma level be drawn?", a: "After no response at **4 to 6 weeks**, at **trough**, after at least five half-lives." },
    { q: "What does an unpleasant first-dose reaction predict?", a: "**Poor response** and **nonadherence**." }
  ]
},
visuals: [
  { sec: "s211-sga", at: 3, block: { type: "heatmap", title: "Visual summary: side-effect profiles of common second-generation antipsychotics",
    cols: ["Weight and metabolic", "EPS and akathisia", "Prolactin", "Sedation", "QT"],
    rows: [
      { label: "Clozapine", v: [3, 0, 0, 3, 1] },
      { label: "Olanzapine", v: [3, 1, 1, 2, 1] },
      { label: "Quetiapine", v: [2, 0, 0, 3, 1] },
      { label: "Risperidone", v: [2, 2, 3, 1, 1] },
      { label: "Paliperidone", v: [2, 2, 3, 1, 1] },
      { label: "Ziprasidone", v: [0, 1, 1, 1, 2] },
      { label: "Aripiprazole", v: [0, 2, 0, 0, 0] },
      { label: "Lurasidone", v: [0, 2, 1, 1, 0] }
    ],
    legend: ["Minimal", "Low", "Moderate", "High"],
    note: "A teaching summary of this section: olanzapine and clozapine cause the most weight gain; risperidone and paliperidone raise prolactin most; aripiprazole's main problem is akathisia; ziprasidone carries the most QT concern among these." } }
]
})
