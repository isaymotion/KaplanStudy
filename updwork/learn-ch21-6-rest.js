({
domains: { "c216-05": "A", "c216-16": "A", "c216-18": "A", "c216-17": "G", "c216-19": "H", "c216-20": "G", "c216-10": "C" },
pretest: ["c216-01", "c216-02", "c216-03", "c216-05", "c216-11", "c216-14", "c216-17", "c216-19"],
checks: {
  "s216-stim": [
    { q: "What are stimulants mainly used for today?", a: "**ADHD** and **wakefulness in narcolepsy**." },
    { q: "Which stimulant was withdrawn in 2005, and why?", a: "**Pemoline**, for **hepatotoxicity**." }
  ],
  "s216-pk": [
    { q: "How is lisdexamfetamine activated?", a: "**Red blood cell enzymes** cleave lysine, releasing dextroamphetamine gradually." },
    { q: "How do methylphenidate and amphetamines differ in mechanism (post-publication)?", a: "Methylphenidate mainly **blocks DAT and NET**; amphetamines mainly **release** dopamine and norepinephrine." }
  ],
  "s216-ind": [
    { q: "How often do stimulants work in ADHD?", a: "About **75%** of the time." },
    { q: "What share of nonresponders to one stimulant respond to another?", a: "About **70%**." },
    { q: "Which drug is approved for narcolepsy, shift work and sleep apnea sleepiness?", a: "**Modafinil** (and armodafinil)." }
  ],
  "s216-ae": [
    { q: "What did the MTA follow-up find about growth?", a: "Consistent users were about **2.5 cm shorter** as adults." },
    { q: "Which stimulant carried higher psychosis risk in 2019 data?", a: "**Amphetamine**, about twice methylphenidate." },
    { q: "How is amphetamine overdose treated?", a: "**Benzodiazepines** for seizures, **β-blockers** for cardiac effects, **cooling**, antipsychotics for delirium." }
  ],
  "s216-dose": [
    { q: "Which stimulants are Schedule IV?", a: "**Modafinil, armodafinil**, phentermine, diethylpropion, mazindol." },
    { q: "What Vyvanse dose matches Adderall 20 mg?", a: "**50 mg**." },
    { q: "What is the usual modafinil dose?", a: "**200 mg** each morning (100 mg with hepatic impairment)." }
  ],
  "s216-atx": [
    { q: "How does atomoxetine work, and how is it metabolized?", a: "Selective **norepinephrine transporter** inhibitor, metabolized by **CYP2D6**." },
    { q: "What are atomoxetine's contraindications?", a: "**MAOIs** (or within 2 weeks) and **narrow-angle glaucoma**." }
  ],
  "s216-newer": [
    { q: "Which nonstimulant strongly inhibits CYP1A2?", a: "**Viloxazine** (Qelbree)." },
    { q: "Name the newer drugs for excessive daytime sleepiness.", a: "**Solriamfetol** (narcolepsy, sleep apnea) and **pitolisant** (narcolepsy)." }
  ],
  "s216-choose": [
    { q: "Which ADHD drug suits a patient with a substance use disorder?", a: "**Atomoxetine** (no abuse potential)." },
    { q: "Who develops tolerance to stimulants: ADHD or narcolepsy patients?", a: "**Narcolepsy** patients may; ADHD patients usually do not." }
  ]
},
visuals: [
  { sec: "s216-choose", at: 1, block: { type: "heatmap", title: "Visual summary: ADHD medicines compared",
    cols: ["Speed of onset", "Abuse potential", "Appetite and sleep effects", "Interaction concerns"],
    rows: [
      { label: "Methylphenidate", v: [3, 2, 2, 1] },
      { label: "Amphetamines", v: [3, 3, 2, 1] },
      { label: "Lisdexamfetamine", v: [2, 2, 2, 1] },
      { label: "Atomoxetine", v: [1, 0, 1, 2] },
      { label: "Guanfacine ER, clonidine ER (post-publication)", v: [1, 0, 1, 1] },
      { label: "Viloxazine (post-publication)", v: [1, 0, 1, 3] }
    ],
    legend: ["Minimal", "Low", "Moderate", "High"],
    note: "A teaching summary of this section: stimulants act within 30 minutes but are Schedule II (2023 boxed warning on misuse); lisdexamfetamine's prodrug design lowers abuse potential; atomoxetine (CYP2D6) and viloxazine (CYP1A2) take weeks and have no abuse potential." } }
]
})
