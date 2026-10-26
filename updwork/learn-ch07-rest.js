({
domains: { "c7-12": "C", "c7-13": "C", "c7-14": "E", "c7-15": "I", "c7-17": "D", "c7-19": "E", "c7-20": "E", "c7-21": "C", "c7-23": "C", "c7-35": "E", "c7-40": "B", "c7-42": "C" },
pretest: ["c7-01", "c7-02", "c7-05", "c7-14", "c7-17", "c7-24", "c7-26", "c7-32"],
checks: {
  "s7-presentation": [
    { q: "What are the two key symptoms of depression?", a: "**Depressed mood** and **loss of interest or pleasure** (anhedonia)." },
    { q: "What proportion report reduced energy, and what proportion have sleep problems?", a: "About **97%** report low energy; about **80%** have sleep trouble, especially **early morning awakening**." },
    { q: "Can a smiling, socially appropriate patient be depressed?", a: "**Yes**: the absence of observable signs does not exclude depression." }
  ],
  "s7-thought": [
    { q: "Give examples of mood-congruent and mood-incongruent delusions in depression.", a: "Congruent: **guilt, sin, worthlessness, poverty, terminal illness**. Incongruent: **grandiose** power, knowledge or worth." },
    { q: "Why should you confirm a patient's report that a past antidepressant failed?", a: "Depressed patients **emphasize the bad and minimize the good**, so check with another source." }
  ],
  "s7-suicide": [
    { q: "What share of depressed patients contemplate suicide, and what share die by it?", a: "About **two thirds** contemplate it; **10% to 15%** die by suicide." },
    { q: "Why is early recovery a high-risk window?", a: "**Energy returns before hopelessness lifts**, so patients can plan and act." }
  ],
  "s7-special": [
    { q: "How may depression present in children and in adolescents?", a: "Children: **school phobia** and **clinging**. Adolescents: poor grades, **substance use**, antisocial behavior, promiscuity, **truancy, running away**." },
    { q: "Why is depression underdiagnosed in older adults?", a: "It often presents with **somatic complaints**, and **ageism** leads clinicians to accept it as normal." }
  ],
  "s7-mdd": [
    { q: "State the core DSM-5 requirements for major depressive disorder.", a: "At least **five** symptoms for **2 weeks**, including **depressed mood or anhedonia**, with impairment and no mania or hypomania." },
    { q: "What turns a depressive episode into a bipolar diagnosis?", a: "Any history of a **manic or hypomanic** episode." }
  ],
  "s7-specifiers": [
    { q: "List the melancholic features.", a: "Loss of pleasure or reactivity plus three or more: **morning worsening, early waking**, marked retardation or agitation, **weight loss**, excessive guilt, distinct quality of mood." },
    { q: "List the atypical features and their associated risk.", a: "**Mood reactivity** with hyperphagia, **hypersomnia, leaden paralysis** and **rejection sensitivity**; associated with **bipolar I** and a seasonal pattern." },
    { q: "Define the mixed features specifier.", a: "Three or more **manic or hypomanic** symptoms during a depressive episode, without separate manic episodes." }
  ],
  "s7-pdd": [
    { q: "What are the duration rules for persistent depressive disorder?", a: "**2 years** or more (1 year in children), with symptom-free periods of **no more than 2 months**." },
    { q: "What links dysthymia to the primary mood disorders?", a: "**Family histories** full of depressive and bipolar disorders." }
  ],
  "s7-other": [
    { q: "What is double depression, and why does it matter?", a: "**Major depression on top of dysthymia** (about 40% of major depression); a **poorer prognosis**, and both need treatment." },
    { q: "How does DSM-5 classify recurrent brief depression?", a: "As **other specified depressive disorder** (episodes under 2 weeks)." }
  ],
  "s7-scales": [
    { q: "Give the HAM-D severity bands.", a: "**10 to 13** mild, **14 to 17** mild to moderate, **above 17** moderate to severe." },
    { q: "Whom does the USPSTF recommend screening for depression (post-publication)?", a: "**All adults**, including pregnant and postpartum people and older adults, and **adolescents 12 to 18**." }
  ],
  "s7-ddx-medical": [
    { q: "Which targeted tests does the chapter name?", a: "**Mononucleosis** in adolescents, **adrenal and thyroid** tests if markedly over- or underweight, **HIV** if at risk." },
    { q: "Name three drugs associated with depression.", a: "**Reserpine, methyldopa, interferon**, steroidal contraceptives, stimulant withdrawal, vincristine." },
    { q: "What is the rule of thumb for substance-induced depression?", a: "**Any drug** a depressed patient takes is a potential cause." }
  ],
  "s7-ddx-neuro": [
    { q: "How common is depression in Parkinson disease, and does it track disability?", a: "**50% to 75%**; it does **not** track disability, age or duration." },
    { q: "Give three clues that favor depression over dementia.", a: "**Sudden onset**, self-reproach, **diurnal variation**, \"I don't know\" answers, and **improvement with coaching**." }
  ],
  "s7-ddx-bipolar": [
    { q: "List five features of a depressive episode that predict bipolarity.", a: "**Early onset**, psychotic depression before 25, **postpartum** (especially psychotic) depression, short abrupt episodes, more than five episodes, **retardation**, atypical features, seasonality, **bipolar family history**." },
    { q: "Why does the distinction matter?", a: "Unipolar and bipolar depression need **different treatment**." }
  ],
  "s7-ddx-psych": [
    { q: "Name two reasons mood disorders get misdiagnosed as schizophrenia.", a: "Relying on a **cross-sectional** picture, and reading **flight of ideas** as loosening or anhedonia as blunting." },
    { q: "How do anxiety and depression profiles differ?", a: "Anxiety: **perceived danger**, hypervigilance, phobic avoidance. Depression: **perceived loss**, retardation, anhedonia, hopelessness." }
  ],
  "s7-bereavement": [
    { q: "Which signs show bereavement has progressed to a depressive disorder?", a: "Seeing oneself as sick, **unreactive mood**, marked **retardation**, guilt of commission or worthlessness, **mummification**, active **suicidal ideation**." },
    { q: "What defines prolonged grief disorder (post-publication)?", a: "At least **12 months** after a death (6 in children), with **persistent longing** or preoccupation and symptoms such as identity disruption, disbelief and intense pain." }
  ],
  "s7-comorbidity": [
    { q: "Which disorders most often accompany major depression?", a: "**Alcohol use disorders**, panic disorder, OCD and social anxiety disorder." },
    { q: "How does the alcohol–depression link differ by sex?", a: "It is **stronger in women**; in men, data suggest two genetically distinct processes." }
  ],
  "s7-course": [
    { q: "How long does an untreated episode of major depression last?", a: "**6 to 13 months**." },
    { q: "How often does dysthymia progress to major depression or bipolar disorder?", a: "About **20%** to major depression, **15%** to bipolar II, under **5%** to bipolar I." }
  ],
  "s7-prognosis": [
    { q: "What is the recurrence rate within 5 years?", a: "**50% to 75%**." },
    { q: "Name three negative prognostic indicators.", a: "**Double depression, substance use, anxiety**, more than one prior episode, male sex." }
  ],
  "s7-tx-principles": [
    { q: "What are the treatment goals, in order?", a: "**Safety**, then complete the **diagnostic evaluation**, then plan for **current and future** well-being." },
    { q: "Give the definite indications for hospitalization.", a: "Risk of **suicide or homicide**, grossly reduced ability to obtain **food and shelter**, and need for **diagnostic procedures**." }
  ],
  "s7-phases": [
    { q: "How long should an antidepressant continue after remission?", a: "At least **6 months** or the length of a previous episode, whichever is longer; taper over **1 to 2 weeks**." },
    { q: "When is prophylaxis recommended?", a: "Episodes less than **2½ years apart**, or past episodes with significant **suicidality or impairment**." }
  ],
  "s7-antidepressants": [
    { q: "What is the most common reason an antidepressant trial fails?", a: "**Too low a dose for too short a time**: raise to the maximum tolerated dose and hold **4 to 5 weeks**." },
    { q: "What is the treatment goal?", a: "**Remission**, not just response: residual symptoms predict relapse." }
  ],
  "s7-subtype-tx": [
    { q: "Match the subtype to the treatment: psychotic, atypical, seasonal.", a: "Psychotic: **antidepressant plus antipsychotic, or ECT**. Atypical: **MAOIs** (also SSRIs, bupropion). Seasonal: **light therapy**." },
    { q: "In comorbid states, which disorder usually dictates drug choice?", a: "The **nonmood** disorder." }
  ],
  "s7-failure": [
    { q: "When should you switch rather than augment?", a: "**Switch** after no benefit; **augment** when there is some benefit but no remission." },
    { q: "Which augmentation agents have the best evidence?", a: "**Quetiapine and aripiprazole** (atypical antipsychotics); lithium also works." }
  ],
  "s7-novel": [
    { q: "How quickly does IV ketamine work, and how long does it last?", a: "Often within **24 hours**; wears off in **2 to 7 days**." },
    { q: "Name two antidepressants approved since the book (post-publication).", a: "**Dextromethorphan–bupropion** (2022), **gepirone ER** (2023), **zuranolone** for postpartum depression (2023)." }
  ],
  "s7-neurostim": [
    { q: "When is TMS indicated, and what contraindicates it?", a: "After failure of **one adequate** antidepressant trial; contraindicated with **implanted metal** in or near the head." },
    { q: "How can the effect of sleep deprivation be sustained?", a: "Follow it with an **antidepressant or lithium**." }
  ],
  "s7-psychotherapy": [
    { q: "Name the three short-term psychotherapies with extensive evidence.", a: "**Cognitive, interpersonal and behavior** therapy." },
    { q: "What predicts a good response to interpersonal psychotherapy?", a: "**Low social dysfunction** and **high severity**." }
  ],
  "s7-epi": [
    { q: "What is the lifetime prevalence of depression in the international meta-analysis?", a: "About **10.8%**." },
    { q: "What is the mean age of onset?", a: "About **40**, with half beginning between 20 and 50." }
  ],
  "s7-neuroendo": [
    { q: "What HPA axis change is common in depression?", a: "**Overactivity**: raised cortisol from increased CRH and reduced feedback inhibition." },
    { q: "Name the typical sleep EEG findings.", a: "**Reduced REM latency**, increased REM density and poor sleep maintenance, with less slow-wave sleep." }
  ],
  "s7-neurotransmitters": [
    { q: "Which drug's effect launched the monoamine idea?", a: "**Reserpine**, which depletes monoamines and causes depression." },
    { q: "Which neurotransmitter has the strongest evidence, and what correlates with response?", a: "**Norepinephrine**: response correlates with **β-adrenergic receptor downregulation**." }
  ],
  "s7-imaging": [
    { q: "What is the most replicated PET finding?", a: "**Decreased anterior brain metabolism**, more on the left." },
    { q: "What may hippocampal volume loss reflect?", a: "**Cortisol neurotoxicity**." }
  ],
  "s7-genetics": [
    { q: "What is the twin heritability of major depression?", a: "About **37%**, higher in women." },
    { q: "What have GWAS found?", a: "**No significant** associations, perhaps because relevant variants are rare." }
  ],
  "s7-psychology": [
    { q: "Which early life event is most associated with later depression?", a: "Losing a **parent before age 11**." },
    { q: "Which stressor is most often linked to the onset of an episode?", a: "Loss of a **spouse**." }
  ],
  "s7-etiology": [
    { q: "Name two weaknesses of the monoamine hypothesis.", a: "Antidepressants take **weeks** although monoamines rise in **hours**, and there is **no convincing evidence** of a chemical imbalance." },
    { q: "What is Beck's cognitive triad?", a: "Negative beliefs about **oneself, the world and the future**." }
  ]
},
visuals: [
  { sec: "s7-specifiers", at: 1, block: { type: "heatmap", title: "Visual summary: melancholic versus atypical features",
    cols: ["Melancholic", "Atypical"],
    rows: [
      { label: "Mood reacts to good news", v: [0, 3] },
      { label: "Early morning waking", v: [3, 0] },
      { label: "Oversleeping", v: [0, 3] },
      { label: "Weight loss", v: [3, 0] },
      { label: "Weight gain, overeating", v: [0, 3] },
      { label: "Worse in the morning", v: [3, 0] },
      { label: "Leaden paralysis", v: [0, 3] },
      { label: "Rejection sensitivity", v: [0, 3] },
      { label: "Excessive guilt", v: [3, 0] },
      { label: "Best drug evidence", v: [2, 3] }
    ],
    legend: ["Not typical", "Some", "Characteristic", "Defining"],
    note: "Built from this chapter's specifier criteria. Melancholic depression may respond better to dual-action antidepressants; atypical depression has strong evidence for MAOIs (and SSRIs and bupropion help)." } }
]
})
