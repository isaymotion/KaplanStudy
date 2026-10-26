({
domains: { "c214-05": "A", "c214-09": "A", "c214-11": "C", "c214-12": "A", "c214-26": "D", "c214-29": "D", "c214-07": "A" },
pretest: ["c214-01", "c214-03", "c214-05", "c214-08", "c214-12", "c214-14", "c214-22", "c214-25"],
checks: {
  "s214-bzd": [
    { q: "What did the FDA add for all benzodiazepines in 2020?", a: "A **boxed warning** on abuse, misuse, addiction, physical dependence and withdrawal." },
    { q: "Which benzodiazepines are high potency?", a: "**Alprazolam** and **clonazepam** (clonazepam 0.25 mg ≈ diazepam 5 mg)." }
  ],
  "s214-bzd-pk": [
    { q: "Which benzodiazepines are glucuronidated directly?", a: "**Lorazepam, oxazepam, temazepam** (LOT)." },
    { q: "What determines onset and offset after a single dose?", a: "**Lipid solubility** more than half-life." },
    { q: "Which benzodiazepines are reliably absorbed IM?", a: "**Lorazepam** and **midazolam**." }
  ],
  "s214-bzd-ind": [
    { q: "How are benzodiazepines combined with SSRIs in panic disorder?", a: "Start both, then **taper the benzodiazepine after 3 to 4 weeks**." },
    { q: "Which benzodiazepine treats catatonia?", a: "**Lorazepam**, up to 12 mg a day or more; ECT is definitive." }
  ],
  "s214-flum": [
    { q: "What does flumazenil not reverse?", a: "**Alcohol, barbiturates or opioids**." },
    { q: "What is the first flumazenil dose?", a: "**0.2 mg IV** over 30 seconds." },
    { q: "Why is flumazenil dangerous in a mixed TCA overdose?", a: "It can unmask **seizures and arrhythmias**." }
  ],
  "s214-bzd-ae": [
    { q: "What is the most common benzodiazepine adverse effect?", a: "**Drowsiness** (about 10%)." },
    { q: "What is the main risk of third-trimester use?", a: "**Neonatal withdrawal**." }
  ],
  "s214-bzd-wd": [
    { q: "List severe benzodiazepine withdrawal features.", a: "**Depression, paranoia, delirium and seizures**." },
    { q: "How fast does the 2025 joint guideline suggest tapering?", a: "**5% to 10%** every **2 to 4 weeks**, adjusted to response." }
  ],
  "s214-bzd-int": [
    { q: "What is the most dangerous benzodiazepine interaction?", a: "**CNS depressants**, especially **opioids** and alcohol (2016 boxed warning)." },
    { q: "How much should alprazolam be reduced with nefazodone?", a: "By **50%** (triazolam by 75%)." }
  ],
  "s214-busp": [
    { q: "Why can't buspirone treat benzodiazepine withdrawal?", a: "**No cross-tolerance**: it does not act on the GABA–chloride channel." },
    { q: "Which disorder does buspirone treat?", a: "**GAD** only, after 2 to 4 weeks at over 30 mg a day." }
  ],
  "s214-beta": [
    { q: "What are the definite psychiatric uses of β-blockers?", a: "**Performance anxiety**, **lithium tremor** and **neuroleptic-induced akathisia**." },
    { q: "Which β-blocker augments antidepressants?", a: "**Pindolol**." }
  ],
  "s214-beta-ae": [
    { q: "When should a β-blocker dose be held?", a: "Pulse under **50** or systolic BP under **90**." },
    { q: "Why taper a β-blocker?", a: "To avoid **rebound angina**." }
  ],
  "s214-barb": [
    { q: "Which barbiturate is used for ECT anesthesia?", a: "**Methohexital**, 0.7 to 1.2 mg/kg IV." },
    { q: "What does the pentobarbital challenge estimate?", a: "The patient's **daily sedative habit** (tolerance)." }
  ],
  "s214-barb-ae": [
    { q: "In which disorder are barbiturates contraindicated?", a: "**Acute intermittent porphyria**." },
    { q: "What dose is usually fatal?", a: "**2 to 10 g**." }
  ],
  "s214-other": [
    { q: "What is a 'Mickey Finn'?", a: "**Chloral hydrate** with **alcohol**." },
    { q: "Which drug's metabolism does disulfiram block, causing toxicity?", a: "**Paraldehyde**." }
  ],
  "s214-choose": [
    { q: "Which anxiolytic has no dependence or overdose deaths?", a: "**Buspirone**." },
    { q: "Which drug treats performance anxiety and akathisia?", a: "**Propranolol**." }
  ]
},
visuals: [
  { sec: "s214-choose", at: 1, block: { type: "heatmap", title: "Visual summary: anxiolytic risks compared",
    cols: ["Dependence", "Overdose danger", "Sedation", "Interactions", "Speed of onset"],
    rows: [
      { label: "Benzodiazepines", v: [3, 1, 3, 2, 3] },
      { label: "Buspirone", v: [0, 0, 0, 1, 0] },
      { label: "β-blockers", v: [0, 1, 1, 2, 2] },
      { label: "Barbiturates", v: [3, 3, 3, 3, 2] }
    ],
    legend: ["Minimal", "Low", "Moderate", "High"],
    note: "A teaching summary of this section: benzodiazepines are fast and sedating with dependence (2020 boxed warning) and danger with opioids; buspirone is slow but safe; β-blockers act within an hour for performance anxiety; barbiturates combine dependence, enzyme induction and lethal overdose." } }
]
})
