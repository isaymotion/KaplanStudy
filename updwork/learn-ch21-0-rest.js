({
domains: { "c210-06": "C", "c210-09": "E", "c210-11": "E", "c210-12": "F", "c210-13": "D", "c210-14": "E", "c210-15": "E", "c210-16": "E", "c210-17": "C", "c210-19": "E", "c210-20": "H", "c210-21": "A", "c210-22": "A", "c210-23": "H", "c210-26": "A", "c210-27": "A" },
pretest: ["c210-01", "c210-02", "c210-05", "c210-07", "c210-13", "c210-16", "c210-20", "c210-21"],
checks: {
  "s210-intro": [
    { q: "What is the weakness of naming drugs by their main clinical use?", a: "Many drugs have **several uses** across classes." },
    { q: "Name three other ways drugs are grouped.", a: "By **structure** (tricyclic), **mechanism** (MAOI), **history** (first-generation), uniqueness (atypical) or indication." }
  ],
  "s210-select": [
    { q: "Distinguish pharmacokinetics from pharmacodynamics.", a: "Pharmacokinetics: what the **body does to the drug**. Pharmacodynamics: what the **drug does to the body**." },
    { q: "Are approved drugs in a class equally effective overall?", a: "**Broadly yes**, but they differ in pharmacology, side effects and individual response." }
  ],
  "s210-se": [
    { q: "Name four serious side effects and their drugs.", a: "**Agranulocytosis** (clozapine), **Stevens–Johnson** (lamotrigine), **hepatic failure** (nefazodone), **heart block** (thioridazine)." },
    { q: "Why are early side effects overrepresented for new drugs?", a: "Most data come from **short trials** of about 8 weeks." }
  ],
  "s210-suicide": [
    { q: "What did the pooled trials show for suicidality up to age 24?", a: "**4%** on drug versus **2%** on placebo, with **no suicides**." },
    { q: "When was the boxed warning added and extended?", a: "**2004**; extended to ages **18 to 24** in 2007." }
  ],
  "s210-newer": [
    { q: "How should daytime somnolence from a drug be handled?", a: "Warn about **driving and machinery**, document it, consider timing or dose changes." }
  ],
  "s210-overdose": [
    { q: "Which overdoses respond to hemodialysis?", a: "**Lithium** and **valproic acid**." },
    { q: "Which drugs raise lithium levels?", a: "**Thiazides, NSAIDs** and **ACE inhibitors**." }
  ],
  "s210-mid": [
    { q: "Which receptor profile predicts the most EPS?", a: "**High D2** blockade with **low anticholinergic** activity (haloperidol, fluphenazine)." },
    { q: "Name two nonpsychiatric D2 blockers that cause EPS.", a: "**Metoclopramide** and prochlorperazine." }
  ],
  "s210-park": [
    { q: "How long can drug-induced parkinsonism persist after stopping the antipsychotic?", a: "Up to **2 weeks**, and up to **3 months** in older adults." },
    { q: "What treats akathisia best?", a: "**β-blockers**, with dose reduction." }
  ],
  "s210-nms": [
    { q: "List the core features of NMS.", a: "**Rigidity**, **hyperthermia**, autonomic instability, altered consciousness, high **CPK** and WBC." },
    { q: "How is NMS treated?", a: "**Stop the antipsychotic**, supportive care (fluids, cooling), **dantrolene**, **bromocriptine** or amantadine; ECT if drugs fail." }
  ],
  "s210-td": [
    { q: "When does tardive dyskinesia usually appear, and where?", a: "Rarely before **6 months**; most often **perioral** movements." },
    { q: "Which antipsychotic has minimal TD risk?", a: "**Clozapine**, which may even improve TD." },
    { q: "What is the standard treatment now?", a: "A **VMAT2 inhibitor**: valbenazine or deutetrabenazine." }
  ],
  "s210-tremor": [
    { q: "How is drug-induced postural tremor managed?", a: "**Lowest dose**, less **caffeine**, **bedtime** dosing and a **β-blocker**." },
    { q: "What treats restless legs syndrome in this chapter?", a: "**Dopamine agonists** such as ropinirole and pramipexole (now second to iron and gabapentinoids)." }
  ],
  "s210-patient": [
    { q: "Why can misdiagnosis harm a patient with bipolar depression?", a: "Treating it as unipolar can induce **mania or rapid cycling**." },
    { q: "How should a relative's drug response guide choice?", a: "A **positive family response** should be considered." }
  ],
  "s210-consent": [
    { q: "Why explain why a drug is recommended?", a: "Understanding **improves adherence**." }
  ],
  "s210-dosing": [
    { q: "Is underdosing or overdosing the bigger risk with most current drugs?", a: "**Underdosing**: side effects without a chance of benefit." },
    { q: "What does potency mean?", a: "The **dose** needed for an effect, not how effective the drug is." }
  ],
  "s210-duration": [
    { q: "Name the three phases of treatment.", a: "**Initial trial**, **continuation**, **maintenance**." },
    { q: "How often should stable maintenance patients be seen?", a: "About **every 3 months** (6 months after long-standing stability)." }
  ],
  "s210-labs": [
    { q: "When are plasma levels useful?", a: "**Narrow therapeutic index** (lithium), a therapeutic window, interacting combinations, unexplained toxicity, adherence questions." }
  ],
  "s210-outcomes": [
    { q: "Define response and remission in depression trials.", a: "Response: **50% or greater** fall in score. Remission: **HAM-D 7 or less** (MADRS 10 or less)." },
    { q: "Why aim for remission?", a: "Remitted patients are **less likely to relapse**." }
  ],
  "s210-failure": [
    { q: "List the five questions after treatment fails.", a: "Right **diagnosis**? **Illness or drug** effect? Adequate **dose and duration**? **Interactions**? **Adherence**?" }
  ],
  "s210-withdrawal": [
    { q: "Which SSRI causes the worst withdrawal, and why?", a: "**Paroxetine**: it inhibits its own CYP2D6 metabolism, so levels fall steeply." },
    { q: "How can stopping one drug cause withdrawal from another?", a: "Removing a **metabolic inhibitor** (nefazodone) speeds clearance of the other drug (alprazolam)." }
  ],
  "s210-combo": [
    { q: "Distinguish combination therapy and augmentation.", a: "Combination: two drugs with the **same indication**. Augmentation: adding a drug with **another indication** (thyroid hormone)." },
    { q: "What are the downsides of combining drugs?", a: "**Nonadherence**, more side effects, and difficulty telling which drug helped or harmed." }
  ],
  "s210-young-preg": [
    { q: "Which pregnancy risk is linked to valproate and carbamazepine, and what helps?", a: "**Neural tube defects**; **folate**." },
    { q: "What did the EMA advise in 2024?", a: "Precautions for **men** taking valproate (possible neurodevelopmental risk in their children)." }
  ],
  "s210-elderly": [
    { q: "How should drugs be started in older adults?", a: "At about **half** the usual starting dose, raised slowly; many still need full doses." },
    { q: "Which drugs can induce mania in medically ill patients?", a: "**Corticosteroids** and **L-dopa**." }
  ],
  "s210-regulatory": [
    { q: "Is off-label prescribing lawful?", a: "**Yes**, for any medically indicated purpose, but responsibility for harm remains." },
    { q: "How large is the placebo response in mild to moderate depression?", a: "**More than 30%**." }
  ]
},
visuals: [
  { sec: "s210-mid", at: 3, block: { type: "chronology", title: "Visual summary: when medication-induced movement disorders appear", events: [
    { year: "Hours to days", label: "**Acute dystonia**, especially young men on high-potency drugs" },
    { year: "Days to weeks", label: "**Akathisia**" },
    { year: "5 to 90 days", label: "**Parkinsonism**, especially older women" },
    { year: "Any time, often early", label: "**Neuroleptic malignant syndrome**: rigidity, fever, autonomic instability" },
    { year: "Rarely before 6 months", label: "**Tardive dyskinesia**: perioral choreoathetoid movements" }
  ], note: "Built from this section's tables; timing helps separate the syndromes, which section 21.10 treats." } }
]
})
