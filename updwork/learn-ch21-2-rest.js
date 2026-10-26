({
domains: { "c212-02": "E", "c212-03": "E", "c212-05": "C", "c212-06": "A", "c212-08": "A", "c212-12": "C", "c212-15": "D", "c212-17": "A", "c212-18": "D", "c212-20": "D", "c212-24": "E", "c212-30": "E" },
pretest: ["c212-01", "c212-02", "c212-05", "c212-09", "c212-14", "c212-19", "c212-24", "c212-25"],
checks: {
  "s212-ssri": [
    { q: "Which SSRI is not FDA approved for depression?", a: "**Fluvoxamine** (approved for OCD)." },
    { q: "Are the SSRIs equally effective for depression?", a: "**Yes**, but they differ in kinetics, interactions and side effects." }
  ],
  "s212-ssri-pharm": [
    { q: "Which SSRIs block CYP2D6 strongly, and with what consequence?", a: "**Fluoxetine and paroxetine**: codeine and hydrocodone are not activated, and TCA levels rise." },
    { q: "Which SSRI is the most troublesome for interactions?", a: "**Fluvoxamine** (CYP1A2 and 3A4)." }
  ],
  "s212-ssri-ind": [
    { q: "How likely is relapse if a woman stops her antidepressant in pregnancy?", a: "**68% to 100%**." },
    { q: "What fluoxetine dose treats bulimia nervosa?", a: "**60 mg a day**." }
  ],
  "s212-ssri-ae": [
    { q: "What is the most common long-term SSRI side effect?", a: "**Sexual dysfunction**, in 50% to 80%." },
    { q: "What is the citalopram dose limit over age 60?", a: "**20 mg a day** (QT prolongation)." },
    { q: "List the early signs of serotonin syndrome.", a: "**Diarrhea**, restlessness, then agitation, **hyperreflexia, clonus** and autonomic instability." }
  ],
  "s212-ssri-int": [
    { q: "Which SSRI can give a false-positive benzodiazepine screen?", a: "**Sertraline**." },
    { q: "Why avoid paroxetine with tamoxifen?", a: "CYP2D6 inhibition may **reduce tamoxifen's effect**." }
  ],
  "s212-ssri-dose": [
    { q: "Which indications need higher SSRI doses?", a: "**OCD** and **bulimia** (fluoxetine 60 mg)." }
  ],
  "s212-vortiox": [
    { q: "What adjustment does vortioxetine need with bupropion?", a: "**Halve the dose** (strong CYP2D6 inhibitor)." }
  ],
  "s212-snri": [
    { q: "Name the SNRIs approved for depression.", a: "**Venlafaxine, desvenlafaxine, duloxetine, levomilnacipran**." },
    { q: "Is any antidepressant class more effective, per the FDA?", a: "**No**." }
  ],
  "s212-ven": [
    { q: "What dose-related effect requires monitoring on venlafaxine?", a: "Sustained **hypertension**." },
    { q: "Why is venlafaxine XR preferred over tablets?", a: "Less **nausea** and **once-daily** dosing." }
  ],
  "s212-dulox": [
    { q: "When should duloxetine be avoided?", a: "With **substantial alcohol use** or **hepatic insufficiency**." }
  ],
  "s212-milna": [
    { q: "What is milnacipran approved for in the United States?", a: "**Fibromyalgia** only." }
  ],
  "s212-bup": [
    { q: "What are bupropion's advantages?", a: "Little **sexual dysfunction** or sedation, modest **weight loss**, **smoking cessation**." },
    { q: "Who should not take bupropion?", a: "People with **seizure risk** (prior seizure, alcohol or benzodiazepine withdrawal, brain injury) or **bulimia or anorexia**." }
  ],
  "s212-mirt": [
    { q: "How does mirtazapine work?", a: "**α2 blockade** raising norepinephrine and serotonin, plus **5-HT2 and 5-HT3** blockade and strong H1 blockade." },
    { q: "Which serious adverse effect needs a WBC check?", a: "Rare **neutropenia**: fever, sore throat, mouth ulcers." }
  ],
  "s212-nefaz": [
    { q: "Which serious risk limits nefazodone?", a: "**Hepatic failure**: monitor liver tests." },
    { q: "How must alprazolam and triazolam doses change with nefazodone?", a: "Alprazolam **halved**; triazolam cut by **75%**." }
  ],
  "s212-traz": [
    { q: "Which emergency can trazodone cause?", a: "**Priapism** (about 1 in 10,000 men)." },
    { q: "Why is trazodone used mainly as a hypnotic?", a: "Heavy **sedation** at low doses." }
  ],
  "s212-tca": [
    { q: "Which discovery launched the catecholamine theory of depression?", a: "**Imipramine's** blockade of norepinephrine reuptake." }
  ],
  "s212-tca-ind": [
    { q: "Which TCA is used for OCD and enuresis?", a: "**Clomipramine** for OCD; **imipramine** for enuresis." },
    { q: "Why avoid TCAs in children?", a: "**Sudden deaths** have occurred; use only as a last resort with ECG monitoring." }
  ],
  "s212-tca-ae": [
    { q: "What is the main cardiac risk of TCAs?", a: "**Slowed conduction**: contraindicated with conduction defects or QTc over 450 ms." }
  ],
  "s212-tca-dose": [
    { q: "What is nortriptyline's therapeutic window?", a: "**50 to 150 ng/mL**." },
    { q: "How should TCAs be prescribed to a suicidal patient?", a: "**Nonrefillable supplies of no more than 1 week**." }
  ],
  "s212-maoi": [
    { q: "Which depression subtype responds better to MAOIs than TCAs?", a: "**Atypical depression**." },
    { q: "Name the irreversible nonselective MAOIs.", a: "**Phenelzine, tranylcypromine, isocarboxazid**." }
  ],
  "s212-maoi-ae": [
    { q: "How is MAOI hypertensive crisis treated?", a: "An **α-blocker** such as **phentolamine** (or chlorpromazine)." },
    { q: "Why does tyramine cause a crisis on an MAOI?", a: "Intact tyramine reaches the circulation and **releases norepinephrine**." }
  ],
  "s212-maoi-int": [
    { q: "Which cough and pain drugs must be avoided with MAOIs?", a: "**Dextromethorphan**, sympathomimetic decongestants, **meperidine** and fentanyl." },
    { q: "How long to wait after fluoxetine before an MAOI?", a: "**5 weeks**." }
  ],
  "s212-maoi-dose": [
    { q: "How is phenelzine started?", a: "**15 mg** test dose, 15 mg three times daily in week 1, then up 15 mg a day weekly to **90 mg**." }
  ],
  "s212-thyroid": [
    { q: "How is liothyronine used for augmentation?", a: "**25 to 50 µg** a day for 2 to 3 weeks; continue 2 months if it works." }
  ],
  "s212-ketamine": [
    { q: "What monitoring does esketamine require?", a: "Observation for at least **2 hours** in a certified setting." }
  ],
  "s212-gaba": [
    { q: "Which oral drug treats postpartum depression, and how?", a: "**Zuranolone** 50 mg nightly with fatty food for **14 days**; no driving for 12 hours after each dose." }
  ],
  "s212-newer": [
    { q: "Which newer antidepressant combines dextromethorphan with bupropion?", a: "**Auvelity** (2022)." }
  ],
  "s212-choose": [
    { q: "What is the washout after an irreversible MAOI before another antidepressant?", a: "**14 days**." },
    { q: "What should you check first when an antidepressant fails?", a: "**Adherence, dose and duration**, the **diagnosis** and substance use." }
  ]
},
visuals: [
  { sec: "s212-choose", at: 1, block: { type: "heatmap", title: "Visual summary: antidepressant side-effect profiles",
    cols: ["Sexual dysfunction", "Sedation", "Weight gain", "Overdose danger", "Interactions"],
    rows: [
      { label: "SSRIs", v: [3, 1, 1, 0, 2] },
      { label: "Venlafaxine, duloxetine", v: [2, 1, 1, 1, 1] },
      { label: "Bupropion", v: [0, 0, 0, 2, 2] },
      { label: "Mirtazapine", v: [1, 3, 3, 0, 0] },
      { label: "Trazodone", v: [1, 3, 0, 1, 1] },
      { label: "TCAs", v: [2, 2, 2, 3, 2] },
      { label: "MAOIs", v: [2, 1, 2, 3, 3] }
    ],
    legend: ["Minimal", "Low", "Moderate", "High"],
    note: "A teaching summary of this section: SSRIs cause the most sexual dysfunction; mirtazapine sedates and adds weight; bupropion spares sexual function but carries seizure risk in overdose; TCAs and MAOIs are most dangerous in overdose and MAOIs in interactions." } }
]
})
