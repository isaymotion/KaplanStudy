({
domains: { "c10-pt05": "D", "c10-pt08": "E", "c10-pt11": "C", "c10-pt12": "C", "c10-pt13": "B", "c10-ad03": "E", "c10-ad05": "E" },
pretest: ["c10-pt01", "c10-pt02", "c10-pt04", "c10-pt07", "c10-pt09", "c10-ad01", "c10-ad03", "c10-ad07"],
checks: {
  "s10-overview": [
    { q: "Which disorders belong to this group?", a: "**PTSD**, **acute stress disorder** and **adjustment disorders**, plus other specified and unspecified forms." },
    { q: "What did the World Wars call these reactions?", a: "**Battle fatigue, shell shock** and **soldier's heart**." }
  ],
  "s10-ptsd-clinical": [
    { q: "What two features of PTSD symptoms does the chapter stress?", a: "They **persist after the threat ends**, and they are **involuntary, uncontrollable and intense**." },
    { q: "How do people with PTSD organize their lives?", a: "Around **avoiding reminders** of the trauma, while scanning for threat." }
  ],
  "s10-ptsd-dx": [
    { q: "What exposures qualify for PTSD?", a: "Direct experience, **witnessing in person**, learning of it in a **close relative or friend**, or **repeated exposure to details**; not through media." },
    { q: "Give the time rules for acute stress disorder, PTSD and delayed expression.", a: "Acute stress disorder **3 days to 1 month**; PTSD **more than 1 month**; delayed expression when criteria are first met **6 months or more** after." },
    { q: "How many symptoms does acute stress disorder need?", a: "**Nine or more** from five categories." }
  ],
  "s10-adj-clinical": [
    { q: "When must adjustment disorder begin and end?", a: "Within **3 months** of the stressor; resolves within **6 months** after the stressor or its consequences end." },
    { q: "Name the adjustment disorder subtypes.", a: "With **depressed mood**, with **anxiety**, **mixed** anxiety and depressed mood, with **disturbance of conduct**, mixed emotions and conduct, and **unspecified**." }
  ],
  "s10-ddx": [
    { q: "How does the stressor differ between adjustment disorder and PTSD?", a: "Adjustment disorder: **any severity**; PTSD and acute stress disorder: an **extreme** stressor with a defined symptom set." },
    { q: "Which medical problem must be ruled out after trauma?", a: "**Traumatic brain injury** sustained in the trauma (also epilepsy and substance effects)." }
  ],
  "s10-comorbid-course": [
    { q: "What happens to untreated PTSD?", a: "About **30%** recover fully, **40%** mild symptoms, **20%** moderate, **10%** unchanged or worse; about **50%** recover within a year." },
    { q: "List the good prognostic factors in PTSD.", a: "**Rapid onset**, duration **under 6 months**, good premorbid function, **strong social support**, no comorbidity." },
    { q: "Why assess suicide in adjustment disorder?", a: "A **high proportion** have past attempts and recent suicidality, especially adolescents with substance use." }
  ],
  "s10-ptsd-tx": [
    { q: "Which drugs have the strongest PTSD evidence?", a: "**SSRIs**, especially **sertraline and paroxetine**." },
    { q: "What is preferred over benzodiazepines for PTSD insomnia?", a: "**Low-dose trazodone** (suvorexant promising)." },
    { q: "Name three trauma-focused psychotherapies.", a: "**Prolonged exposure**, **cognitive processing therapy** and **EMDR**." }
  ],
  "s10-adj-tx": [
    { q: "What is the treatment of choice for adjustment disorder?", a: "**Psychotherapy** (supportive, CBT, problem solving, psychodynamic), with crisis intervention when needed." },
    { q: "What is the common treatment error?", a: "Assuming it will **remit on its own** because the stressor is explicit." }
  ],
  "s10-epi": [
    { q: "What is the lifetime prevalence of PTSD?", a: "**6.8%** (women 9.7%, men 3.6%)." },
    { q: "What are the most important risk factors?", a: "**Severity, duration and proximity** of exposure." }
  ],
  "s10-etiology": [
    { q: "How much of PTSD variance is genetic?", a: "About **30%**." },
    { q: "Name three predisposing vulnerability factors.", a: "**Childhood trauma**, inadequate support, **female sex**, personality traits, recent stress, **external locus of control**, recent heavy drinking." },
    { q: "Does stressor severity predict adjustment disorder severity?", a: "**No**: it depends on the stressor's number, duration, reversibility and personal context." }
  ]
},
visuals: [
  { sec: "s10-ptsd-dx", at: 2, block: { type: "chronology", title: "Visual summary: the time rules after a trauma", events: [
    { year: "Hours to days", label: "Shock, nightmares and intrusive thoughts are common and **expected**" },
    { year: "3 days to 1 month", label: "**Acute stress disorder** if nine or more symptoms" },
    { year: "More than 1 month", label: "**PTSD** if intrusion, avoidance, negative cognition and mood, and arousal criteria are met" },
    { year: "6 months or more", label: "**Delayed expression** when full PTSD criteria are first met this late" },
    { year: "About 1 year", label: "About **half** of untreated PTSD has recovered" }
  ], note: "Adjustment disorder runs on its own clock: onset within 3 months of any stressor, resolution within 6 months after it ends." } }
]
})
