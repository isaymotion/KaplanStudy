({
domains: { "c11-am05": "G", "c11-am07": "D", "c11-dp04": "D", "c11-di03": "G", "c11-di04": "E", "c11-di05": "E", "c11-di06": "E" },
pretest: ["c11-am01", "c11-am02", "c11-am04", "c11-dp01", "c11-di01", "c11-di04", "c11-ot01", "c11-ot03"],
checks: {
  "s11-overview": [
    { q: "Define dissociation.", a: "An **unconscious defense** that segregates a group of mental or behavioral processes from the rest of psychic activity." },
    { q: "Which functions can dissociation disrupt?", a: "**Memory, identity, perception, consciousness** or **motor behavior**." }
  ],
  "s11-amnesia": [
    { q: "Name the five types of dissociative amnesia.", a: "**Localized, selective, generalized, continuous** and **systematized**." },
    { q: "What risk accompanies classic dissociative amnesia?", a: "**Depression and suicidal ideation**." }
  ],
  "s11-fugue": [
    { q: "How does DSM-5 classify dissociative fugue?", a: "As a **subtype of dissociative amnesia** (separate in ICD-10)." },
    { q: "What may emerge as a fugue lifts?", a: "**Mood symptoms**, intense **suicidal ideation**, PTSD and anxiety symptoms." }
  ],
  "s11-amnesia-ddx": [
    { q: "How does organic amnesia usually differ from dissociative amnesia?", a: "It comes with **broader cognitive, language and attention** problems; loss of identity is unusual." },
    { q: "Name two organic causes to exclude.", a: "**Korsakoff psychosis, stroke**, anoxia, **transient global amnesia**, seizures." }
  ],
  "s11-dpdr": [
    { q: "Distinguish depersonalization and derealization.", a: "Depersonalization: detachment from **oneself**. Derealization: the **surroundings** feel unreal." },
    { q: "What stays intact in this disorder?", a: "**Reality testing**." }
  ],
  "s11-dpdr-ddx": [
    { q: "Which workup is needed?", a: "A full medical and neurologic evaluation: **labs, EEG, drug screens**." },
    { q: "What suggests an organic cause?", a: "Mainly **sensory** experiences without elaborate personal meanings." }
  ],
  "s11-did": [
    { q: "What is the core of DID?", a: "**Two or more distinct identities** or personality states, with **memory gaps** beyond ordinary forgetting." },
    { q: "Which disorders is DID often mistaken for?", a: "**Schizophrenia, borderline personality disorder** and **malingering**." }
  ],
  "s11-did-ddx": [
    { q: "List clues to factitious or malingered DID.", a: "**Little dysphoria**, amnesia **only for bad behavior**, refusal of collateral contacts, **legal problems**." },
    { q: "What supports genuine DID?", a: "**Distress and shame**, amnesia across many areas, **collateral** confirmation." }
  ],
  "s11-other": [
    { q: "What is the hallmark of Ganser syndrome?", a: "**Approximate answers** that show the question was understood (2 + 2 = 5)." },
    { q: "What separates dissociative trance from cultural practice?", a: "It is **not an accepted part** of the person's cultural or religious practice and causes **distress or impairment**." }
  ],
  "s11-course": [
    { q: "Why restore lost memories quickly in dissociative amnesia?", a: "Unrecovered memories can form a **nucleus for future** amnestic episodes." },
    { q: "How long does a fugue usually last?", a: "**Hours to days**." }
  ],
  "s11-tx-amnesia": [
    { q: "What is the only somatic option for dissociative amnesia?", a: "A **drug-facilitated interview** (IV amobarbital or similar)." },
    { q: "Why avoid antipsychotics in depersonalization disorder?", a: "No evidence of benefit, and they may **deepen emotional deadness**." }
  ],
  "s11-tx-did": [
    { q: "What is the first phase of DID treatment?", a: "**Safety and stabilization**." },
    { q: "Which drug has the most robust effect in DID?", a: "**Prazosin** for nightmares and intrusions." },
    { q: "How do self-help groups usually affect DID patients?", a: "**Negatively**: worsened PTSD, exploitation, contaminated recall." }
  ],
  "s11-tx-other": [
    { q: "How is Ganser syndrome managed?", a: "A **protective, supportive** setting, exploring stressors, sometimes low-dose antipsychotics; **do not confront** the approximate answers." },
    { q: "How is identity disturbance from coercive persuasion treated?", a: "**Phased trauma treatment**, as for torture victims, plus family and social interventions." }
  ],
  "s11-epi": [
    { q: "What is the prevalence of DID, and how does the sex ratio change?", a: "About **1% to 1.5%**; from **1:1** in early childhood to about **8:1** female by late adolescence." },
    { q: "How common is transient depersonalization?", a: "The **third most common** psychiatric symptom; lifetime **26% to 74%**." }
  ],
  "s11-etiology": [
    { q: "What setting often precedes dissociative amnesia?", a: "Massive **conflict** with intolerable shame, guilt or rage, **abuse**, or **betrayal trauma**." },
    { q: "How common is trauma in clinical depersonalization?", a: "**One third to one half** of cases." }
  ]
},
visuals: [
  { sec: "s11-overview", at: 1, block: { type: "heatmap", title: "Visual summary: which functions each dissociative disorder disrupts",
    cols: ["Memory", "Identity", "Perception of self or world", "Travel or behavior"],
    rows: [
      { label: "Dissociative amnesia", v: [3, 1, 1, 0] },
      { label: "Dissociative fugue", v: [3, 3, 1, 3] },
      { label: "Depersonalization/derealization", v: [0, 1, 3, 0] },
      { label: "Dissociative identity disorder", v: [3, 3, 2, 2] },
      { label: "Ganser syndrome", v: [2, 1, 2, 1] },
      { label: "Dissociative trance", v: [2, 3, 1, 2] }
    ],
    legend: ["Not typical", "Sometimes", "Often", "Defining"],
    note: "A teaching summary of this chapter: amnesia is memory loss; fugue adds travel and identity confusion; depersonalization alters the sense of self or world with intact reality testing; DID combines identity states with amnesia; Ganser syndrome adds approximate answers and clouding; trance alters consciousness and identity." } }
]
})
