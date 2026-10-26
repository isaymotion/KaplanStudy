({
domains: { "cs04": "C", "cs07": "D", "cs30": "E", "cs46": "C", "cs47": "C", "csu1": "E", "cs16": "I", "cs39": "F", "cs41": "F", "cs44": "F" },
pretest: ["cs01", "cs05", "cs11", "cs14", "cs17", "cs23", "cs26", "cs32"],
checks: {
  "s-overview": [
    { q: "What does the diagnosis of schizophrenia rest on?", a: "Entirely on the **psychiatric history and mental status examination**: no sign is pathognomonic and **no laboratory test** confirms it." },
    { q: "What share of homeless Americans have schizophrenia?", a: "About **15% to 45%**." }
  ],
  "s-presentation": [
    { q: "Why is a single mental status examination not enough to diagnose schizophrenia?", a: "Symptoms **fluctuate**, and every sign also occurs in other disorders, so the **longitudinal history** carries the diagnosis." },
    { q: "What do neurologic soft signs signify in schizophrenia?", a: "Signs such as dysdiadochokinesia and astereognosis correlate with **greater severity, affective blunting** and a **poorer prognosis**." }
  ],
  "s-mse": [
    { q: "Which hallucinations should prompt a search for a medical cause?", a: "**Tactile, olfactory and gustatory** hallucinations, which are unusual in schizophrenia." },
    { q: "What does disorientation suggest in a patient with psychosis?", a: "A **medical or neurologic brain disorder**; patients with schizophrenia are usually oriented." },
    { q: "Which better predicts outpatient function: psychotic symptoms or cognition?", a: "**Cognitive impairment**." }
  ],
  "s-domains": [
    { q: "Name the three symptom domains and what each means.", a: "**Positive**: abnormal experiences or behaviors that are present. **Negative**: absence of normal function (flat affect, alogia, avolition, anhedonia, asociality). **Cognitive**: attention, working memory and executive deficits." },
    { q: "Which domain drives much of the disability and responds least to antipsychotics?", a: "The **cognitive** domain." }
  ],
  "s-safety": [
    { q: "What is the single most important factor driving suicide in schizophrenia?", a: "A **major depressive episode**." },
    { q: "What are the risk factors for violence in schizophrenia?", a: "**Persecutory delusions**, a **history of violence** and **neurologic deficits**." },
    { q: "Are patients with schizophrenia more likely than others to commit homicide?", a: "**No**, despite media attention." }
  ],
  "s-special": [
    { q: "How does childhood-onset schizophrenia usually behave?", a: "Insidious onset, **chronic course** and a mostly **unfavorable** prognosis; early on it can be hard to tell from intellectual disability or autism." },
    { q: "Describe late-onset schizophrenia.", a: "Onset **after 45**, more common in **women**, mostly **paranoid** symptoms, **good response** to antipsychotics and a favorable prognosis." }
  ],
  "s-durations": [
    { q: "Give the durations of brief psychotic disorder, schizophreniform disorder and schizophrenia.", a: "Brief psychotic disorder **1 day to under 1 month**; schizophreniform **1 month to under 6 months**; schizophrenia **6 months or more**." },
    { q: "How does ICD-10 differ on duration?", a: "It requires only **1 month** for schizophrenia and lumps brief and schizophreniform disorders as **acute and transient psychotic disorder**." }
  ],
  "s-dx-schizophrenia": [
    { q: "Which symptom must be among the two required psychotic symptoms?", a: "At least one of **delusions, hallucinations or disorganized speech**." },
    { q: "How many features does the DSM-5 catatonia specifier need?", a: "**Three or more**." },
    { q: "Why did DSM-5 drop the schizophrenia subtypes?", a: "They related weakly to biology, were **unstable over time** and **predicted poorly**." }
  ],
  "s-schizoaffective": [
    { q: "What are the DSM-5 timing requirements for schizoaffective disorder?", a: "Mood episodes for the **majority** of the illness, plus at least **2 weeks** of psychosis **without** mood symptoms." },
    { q: "How does its course compare with schizophrenia and mood disorders?", a: "**In between**: better than schizophrenia, worse than bipolar or major depressive disorder." }
  ],
  "s-schizophreniform": [
    { q: "What proportion of patients with schizophreniform disorder later develop schizophrenia?", a: "Perhaps **60% to 80%**." },
    { q: "Which feature is a poor prognostic sign in schizophreniform disorder?", a: "**Negative symptoms**." }
  ],
  "s-brief": [
    { q: "Who most often gets brief psychotic disorder?", a: "**Younger** people (20s and 30s) and **women**, often with personality disorders or after major stressors or disasters." },
    { q: "Which DSM-5 specifiers apply to brief psychotic disorder?", a: "**With marked stressors**, **without marked stressors**, **with peripartum onset** (within 4 weeks of delivery), and with catatonia." },
    { q: "Why is a medical workup important?", a: "Several features resemble **delirium**, so rule out medical causes and **adverse drug reactions**." }
  ],
  "s-delusional": [
    { q: "What is striking about the mental status exam in delusional disorder?", a: "It is **normal** apart from a markedly abnormal **delusional system**; no prominent or sustained hallucinations." },
    { q: "Which two delusional types are most common, and which carry a poorer prognosis?", a: "**Persecutory and jealous** are most common; **grandiose and jealous** types have a poorer prognosis." },
    { q: "How should you respond when a patient asks you to agree with the delusion?", a: "Neither collude nor argue; **build the alliance** and focus on **anxiety, mood and sleep**." }
  ],
  "s-other": [
    { q: "Describe the usual primary and secondary cases in shared psychosis.", a: "The **primary** is often chronically ill and **dominant**; the **secondary** is more suggestible, passive or lower in self-esteem." },
    { q: "What may help the secondary partner?", a: "**Separation** from the primary case, though not always." }
  ],
  "s-tests": [
    { q: "What are laboratory tests for in psychosis?", a: "To **rule out other causes**, such as syphilis or anti-NMDA receptor encephalitis; none diagnoses schizophrenia." },
    { q: "Match the scale to its use: PANSS, Simpson–Angus, AIMS, Barnes.", a: "**PANSS** (and BPRS): symptom severity; **Simpson–Angus**: parkinsonism; **AIMS**: tardive and involuntary movements; **Barnes**: akathisia." }
  ],
  "s-ddx": [
    { q: "State the three rules for every psychotic presentation.", a: "Pursue **medical causes** aggressively, take a complete **family history**, and **never assume an old diagnosis** explains new symptoms." },
    { q: "How can you tell flight of ideas from schizophrenic thought disorder?", a: "In flight of ideas the **associative links are preserved**; it is hard to follow because of speed." },
    { q: "What separates malingering from factitious disorder?", a: "Malingering: **full control** of symptom production with an obvious **legal or financial motive**; factitious: less control, to assume the sick role." }
  ],
  "s-comorbidity": [
    { q: "What is the lifetime prevalence of comorbid substance use disorder in schizophrenia?", a: "About **74%**." },
    { q: "Which model of the substance–schizophrenia link is best supported?", a: "**Shared vulnerability**." }
  ],
  "s-course": [
    { q: "What is the typical premorbid personality?", a: "**Schizoid or schizotypal**: quiet, passive, introverted, few friends." },
    { q: "Which period of illness generally predicts the long-term course?", a: "The pattern over the **first 5 years** after diagnosis." }
  ],
  "s-prognosis": [
    { q: "By how much is life expectancy reduced?", a: "By as much as **20%**." },
    { q: "Name three good and three poor prognostic factors.", a: "Good: **acute onset, female sex, living in a developed country**. Poor: **insidious onset, childhood or adolescent onset, poor premorbid function**, cognitive impairment." }
  ],
  "s-tx-principles": [
    { q: "What are the indications for hospitalization?", a: "**Diagnostic evaluation**, **stabilizing medication**, **safety** (suicidal or homicidal ideation) and **grossly disorganized behavior** or inability to meet basic needs." },
    { q: "How long should a typical hospital stay be?", a: "Short stays of **4 to 6 weeks** are as effective as long ones." }
  ],
  "s-acute": [
    { q: "What should drive the choice of antipsychotic?", a: "**Side effects**, since efficacy differences are small; most guidelines start with a second-generation drug." },
    { q: "Which IM options calm agitation with little EPS?", a: "**IM ziprasidone or olanzapine**, or **IM lorazepam**." }
  ],
  "s-side-effects": [
    { q: "List three ways to manage EPS.", a: "**Reduce the dose**, add an **antiparkinson** drug, or **switch** to a drug less likely to cause EPS." },
    { q: "When can tardive dyskinesia begin?", a: "During treatment, within **4 weeks** of stopping an oral drug, or within **8 weeks** of stopping a depot." },
    { q: "What metabolic monitoring follows a medication change?", a: "**BMI, fasting glucose and lipids**; weigh at **every visit for at least 6 months**." }
  ],
  "s-clozapine": [
    { q: "What are clozapine's three serious risks?", a: "**Agranulocytosis** (about 0.3%), **seizures** (up to 5% above 600 mg) and rarely **myocarditis**." },
    { q: "When should clozapine be considered?", a: "After **at least two** failed antipsychotic trials, and for persistent **suicide risk** or severe **tardive dyskinesia**." }
  ],
  "s-drug-table": [
    { q: "What does a lower CPZ equivalent mean?", a: "**Higher potency** (less drug equals 100 mg of chlorpromazine)." },
    { q: "Which antipsychotics need food, and how much?", a: "**Lurasidone** with at least **350 kcal**; **ziprasidone** with at least **500 kcal**." }
  ],
  "s-maintenance": [
    { q: "Compare 1-year relapse on and off medication.", a: "**16% to 23%** on medication versus **53% to 72%** off it." },
    { q: "How long should a first-episode patient continue treatment?", a: "**At least 1 year**; consider indefinite treatment after **two or more** episodes." },
    { q: "Give two advantages of long-acting injectables.", a: "You **know at once** when a dose is missed, and **steadier levels** make the minimum effective dose easier to find." }
  ],
  "s-resistance": [
    { q: "What does no response by week 2 suggest?", a: "A lower chance of benefit: a **change** may be the best option." },
    { q: "What is the most common reason for a very low plasma level?", a: "**Nonadherence or partial adherence**." },
    { q: "How is ECT used in schizophrenia?", a: "**Added to antipsychotics**, which continue during and after ECT." }
  ],
  "s-psychosocial": [
    { q: "What is probably the best predictor of outcome in psychotherapy?", a: "The strength of the **therapeutic alliance**." },
    { q: "What does Assertive Community Treatment provide?", a: "A **multidisciplinary team** with a fixed caseload (about 1:12) giving care **in the community around the clock**; it reduces rehospitalization." },
    { q: "How should families be helped after discharge?", a: "**Psychoeducation**, open discussion of the episode and its triggers, gradual reintegration and **low emotional intensity**." }
  ],
  "s-epi": [
    { q: "What is the worldwide lifetime prevalence of schizophrenia?", a: "About **0.7%**." },
    { q: "Give the peak ages of onset in men and women.", a: "Men **10 to 25**; women **25 to 35**, with a second peak in middle age." }
  ],
  "s-brain": [
    { q: "What does CT consistently show in schizophrenia?", a: "**Lateral and third ventricular enlargement** and some reduction in cortical volume." },
    { q: "Which limbic structures are smaller?", a: "**Amygdala, hippocampus** and **parahippocampal gyrus**." }
  ],
  "s-physiology": [
    { q: "What does PET show about dopamine in schizophrenia?", a: "**Increased** dopamine in the **ventral striatum** and **reduced** dopamine in the **frontal cortex**." },
    { q: "Name two possible trait markers.", a: "**Eye movement dysfunction** (poor smooth pursuit) and a **prepulse inhibition** deficit." }
  ],
  "s-neurochem": [
    { q: "Where is increased dopamine synthesis capacity localized?", a: "The **associative (dorsal) striatum**, linked to positive symptoms and treatment response." },
    { q: "Which immune encephalitis can mimic early schizophrenia?", a: "**Anti-NMDA receptor encephalitis**." }
  ],
  "s-genetics": [
    { q: "What is the monozygotic twin concordance, and what does it imply?", a: "About **50%**: genes raise vulnerability but are not destiny." },
    { q: "Give the heritability of schizophrenia.", a: "About **60% to 80%**." }
  ],
  "s-etiology": [
    { q: "What two observations founded the dopamine hypothesis?", a: "Antipsychotic potency correlates with **D2 blockade**, and dopamine-raising drugs such as **amphetamine and cocaine** cause psychosis." },
    { q: "Give three findings that support a neurodevelopmental model.", a: "Childhood **motor and cognitive problems**, **obstetric complications** as risk factors, and **no gliosis** or consistent neurodegeneration." }
  ],
  "s-psych-theories": [
    { q: "Does a specific family pattern cause schizophrenia?", a: "**No** well-controlled evidence shows that it does." },
    { q: "Which patients benefit from insight-oriented work after a psychotic episode?", a: "Those who can **integrate** the experience; those who **seal over** do not." }
  ]
},
visuals: [
  { sec: "s-side-effects", at: 0, block: { type: "heatmap", title: "Visual summary: side-effect profiles of representative antipsychotics",
    cols: ["EPS", "Sedation", "Postural hypotension", "Weight and metabolic", "Prolactin rise"],
    rows: [
      { label: "Haloperidol (high-potency FGA)", v: [3, 1, 1, 1, 3] },
      { label: "Chlorpromazine (low-potency FGA)", v: [1, 3, 3, 2, 2] },
      { label: "Risperidone", v: [2, 1, 1, 2, 3] },
      { label: "Olanzapine", v: [1, 2, 1, 3, 1] },
      { label: "Aripiprazole", v: [1, 0, 0, 1, 0] },
      { label: "Clozapine", v: [0, 3, 3, 3, 0] }
    ],
    legend: ["Minimal", "Low", "Moderate", "High"],
    note: "A relative teaching summary built from this chapter's side-effect descriptions and the post-publication prolactin correction. Aripiprazole's EPS is mainly akathisia; clozapine's main risks (agranulocytosis, seizures, myocarditis, hypersalivation) are not shown. See section 21.1 for each drug." } }
]
})
