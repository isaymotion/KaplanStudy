({
domains: { "c14-en02": "C", "c14-en06": "F", "c14-en10": "C", "c14-eu03": "D", "c14-eu04": "D", "c14-eu05": "D", "c14-eu12": "A", "c14-eu15": "A" },
pretest: ["c14-en01", "c14-en02", "c14-en03", "c14-en07", "c14-eu01", "c14-eu03", "c14-eu06", "c14-eu09"],
checks: {
  "s14-dev": [
    { q: "In what order is continence usually mastered?", a: "**Nocturnal fecal**, **diurnal fecal**, **diurnal bladder**, then **nocturnal bladder** control." },
    { q: "Which brain regions regulate micturition?", a: "Neurons in the **pons and midbrain**, coordinated by the frontal lobes." }
  ],
  "s14-overview": [
    { q: "Give the minimum ages for encopresis and enuresis.", a: "Encopresis **4 years**; enuresis **5 years**." },
    { q: "Give the DSM-5 frequency rules.", a: "Encopresis at least **once a month for 3 months**; enuresis at least **twice a week for 3 months**." }
  ],
  "s14-enc-dx": [
    { q: "What does abnormal anal sphincter contraction predict?", a: "A **poor response to laxatives**; normal tone predicts quick improvement." },
    { q: "What can voluntary soiling express?", a: "**Anger** toward punitive parents, maintained by negative attention." }
  ],
  "s14-enc-workup": [
    { q: "What is the chief medical differential?", a: "**Hirschsprung disease** (aganglionic megacolon)." },
    { q: "Which simple test gauges constipation?", a: "An **abdominal x-ray** (with abdominal and rectal examination)." }
  ],
  "s14-enc-course": [
    { q: "How long does encopresis usually last?", a: "It is sometimes self-limiting and **rarely continues beyond middle adolescence**." },
    { q: "Which cases are harder to treat?", a: "Those with **physiologic** factors: poor motility or inability to relax the sphincter." }
  ],
  "s14-enc-tx": [
    { q: "List the steps of a typical treatment plan.", a: "**Educate** the family, **disimpact**, daily **PEG** (about 1 g/kg), and a **behavioral toileting** program." },
    { q: "Who does not need laxatives?", a: "Children who are **not constipated** and have reasonable bowel control." }
  ],
  "s14-enc-epi": [
    { q: "How common is encopresis at age 4 and age 10?", a: "About **3%** at 4 and **1.6%** at 10." },
    { q: "Which disorder is linked to encopresis?", a: "**Enuresis**." }
  ],
  "s14-enc-etio": [
    { q: "What share of chronic childhood encopresis is functional retentive?", a: "About **90%**, with overflow in more than **75%**." },
    { q: "Is encopresis a specific sign of sexual abuse?", a: "**No**, though it is more common in abused children." }
  ],
  "s14-enu-dx": [
    { q: "Which disorders are children with enuresis at higher risk for?", a: "**ADHD** and **encopresis**." },
    { q: "How common are structural obstructive abnormalities?", a: "Up to **3%**." }
  ],
  "s14-enu-ddx": [
    { q: "Which pattern suggests infection or obstruction?", a: "**Nocturnal and diurnal** wetting with **frequency and urgency**." },
    { q: "Name two causes of polyuria to exclude.", a: "**Diabetes mellitus** and **diabetes insipidus**." }
  ],
  "s14-enu-course": [
    { q: "How often does nocturnal enuresis resolve each year?", a: "About **15%** a year." },
    { q: "What does new-onset wetting in adulthood require?", a: "A **search for other causes**." }
  ],
  "s14-enu-tx": [
    { q: "What is the most effective treatment?", a: "The **bell-and-pad alarm** (classical conditioning), dry in more than **50%**." },
    { q: "Who responds best to alarms?", a: "Children who wake promptly, usually **at least 6 or 7**." }
  ],
  "s14-enu-drugs": [
    { q: "What is the main risk of desmopressin?", a: "**Hyponatremic seizures**; relapse after stopping is common." },
    { q: "How does imipramine help?", a: "Through **anticholinergic** effects, with considerable side effects." }
  ],
  "s14-enu-epi": [
    { q: "How common is enuresis at age 5 and in adolescence?", a: "**5% to 10%** at 5; about **1%** at 15 and older." },
    { q: "What share of cases is nocturnal?", a: "About **80%**." }
  ],
  "s14-enu-etio": [
    { q: "What may explain nocturnal enuresis?", a: "**Lower nighttime ADH** with excess urine, and voiding urges at smaller volumes." },
    { q: "How much does an enuretic father raise risk?", a: "More than **seven times**." }
  ]
},
visuals: [
  { sec: "s14-overview", at: 3, block: { type: "chronology", title: "Visual summary: continence milestones and diagnostic ages", events: [
    { year: "1 to 3 years", label: "Cortical inhibitory pathways develop; **bowel** control comes before bladder control" },
    { year: "Age 2 to 4", label: "Regular wetting is **normal**: 82% at 2, 49% at 3, 26% at 4" },
    { year: "Age 4", label: "**Encopresis** can be diagnosed; over 95% have bowel control" },
    { year: "Age 5", label: "**Enuresis** can be diagnosed; 99% have bowel control" },
    { year: "Age 6 to 7", label: "Best age to respond to a **bell-and-pad alarm**" },
    { year: "Adolescence", label: "Enuresis about **1%** at 15; encopresis rarely beyond middle adolescence" }
  ], note: "Built from this chapter's development, prevalence and treatment sections." } }
]
})
