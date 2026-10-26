({
domains: { "c215-05": "A", "c215-06": "A", "c215-08": "A", "c215-10": "A", "c215-18": "H", "c215-11": "C" },
pretest: ["c215-01", "c215-03", "c215-04", "c215-07", "c215-10", "c215-14", "c215-15", "c215-17"],
checks: {
  "s215-z": [
    { q: "Rank the Z drugs by half-life.", a: "**Zaleplon** 1 hour < **zolpidem** 2.6 hours < **eszopiclone** about 6 hours." },
    { q: "Why do Z drugs have little muscle relaxant or anticonvulsant effect?", a: "They are **selective** for particular GABAA subunits." },
    { q: "What reverses a Z drug overdose?", a: "**Flumazenil** (zolpidem and zaleplon)." }
  ],
  "s215-z-use": [
    { q: "What boxed warning did the FDA add in 2019?", a: "**Complex sleep behaviors** (sleepwalking, sleep driving) with injuries and deaths." },
    { q: "What can prolong zolpidem hallucinations?", a: "**SSRIs**." }
  ],
  "s215-z-dose": [
    { q: "What is the zolpidem starting dose for women?", a: "**5 mg** immediate release (6.25 mg CR)." },
    { q: "What is the current eszopiclone starting dose?", a: "**1 mg**, raised to 2 or 3 mg if needed." },
    { q: "What is sodium oxybate approved for?", a: "**Narcolepsy** (cataplexy and daytime sleepiness)." }
  ],
  "s215-ramel": [
    { q: "How does ramelteon work?", a: "**MT1 and MT2** melatonin receptor agonist." },
    { q: "Which drug must not be combined with ramelteon?", a: "**Fluvoxamine** (strong CYP1A2 inhibitor)." },
    { q: "Which endocrine effect needs watching?", a: "Raised **prolactin** (amenorrhea, galactorrhea)." }
  ],
  "s215-mel": [
    { q: "What is melatonin's regulatory status in the United States?", a: "A **dietary supplement**, not FDA approved." },
    { q: "When may melatonin best improve sleep onset?", a: "Up to **2 hours before** habitual bedtime." }
  ],
  "s215-newer": [
    { q: "Name the dual orexin receptor antagonists.", a: "**Suvorexant, lemborexant, daridorexant**." },
    { q: "In which disorder are orexin antagonists contraindicated?", a: "**Narcolepsy**." }
  ],
  "s215-praz": [
    { q: "How does prazosin work?", a: "**α1-adrenergic** receptor antagonist." },
    { q: "What did the 2018 NEJM trial find?", a: "**No benefit** over placebo for nightmares in veterans with chronic PTSD." }
  ],
  "s215-choose": [
    { q: "What is first-line treatment for chronic insomnia?", a: "**CBT-I**." },
    { q: "Which drugs did the 2017 AASM guideline suggest against?", a: "**Trazodone, diphenhydramine, melatonin**, tiagabine, L-tryptophan and valerian." }
  ]
},
visuals: [
  { sec: "s215-choose", at: 1, block: { type: "heatmap", title: "Visual summary: which hypnotic for which sleep problem",
    cols: ["Sleep onset", "Sleep maintenance", "Middle of the night", "Circadian disorders"],
    rows: [
      { label: "Zaleplon", v: [3, 0, 3, 0] },
      { label: "Zolpidem IR / CR", v: [3, 2, 1, 0] },
      { label: "Eszopiclone", v: [3, 3, 0, 0] },
      { label: "Ramelteon", v: [3, 0, 0, 2] },
      { label: "Melatonin", v: [1, 0, 0, 3] },
      { label: "Orexin antagonists (post-publication)", v: [2, 3, 0, 0] },
      { label: "Low-dose doxepin (post-publication)", v: [0, 3, 0, 0] }
    ],
    legend: ["Not used", "Weak or off-label", "Effective", "Best fit"],
    note: "Built from this section: zaleplon's 1-hour half-life suits onset and middle-of-the-night dosing (with at least 4 hours left); eszopiclone and zolpidem CR help maintenance; ramelteon and melatonin act on circadian timing. Low-dose sublingual zolpidem is also designed for middle-of-the-night use." } }
]
})
