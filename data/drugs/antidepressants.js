/* Drug reference: antidepressants. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., section 21.2, unless a
   field sits inside an `updates` entry, which marks information published after the 12th edition (or a correction), with its source.
   Profile levels: N none or minimal, L low, M moderate, H high (from the book's descriptions). */
KS.drugClasses = (KS.drugClasses || []).concat([
  {
    id: "antidepressants", label: "Antidepressants", singular: "antidepressant", chapter: "ch21-2",
    intro: "As classes, antidepressants are about equally effective, so choices turn on side effects, overdose safety, interactions and past response. SSRIs are first line; TCAs and MAOIs remain powerful but dangerous; newer agents act through NMDA, GABAA or 5-HT1A receptors.",
    groups: [
      { id: "ssri", label: "Selective serotonin reuptake inhibitors (and vortioxetine)", short: "SSRIs" },
      { id: "snri", label: "Serotonin–norepinephrine reuptake inhibitors", short: "SNRIs" },
      { id: "atypical", label: "Other mechanisms: bupropion, mirtazapine, trazodone, nefazodone", short: "Other mechanisms" },
      { id: "tca", label: "Tricyclics and tetracyclics", short: "TCAs" },
      { id: "maoi", label: "Monoamine oxidase inhibitors", short: "MAOIs" },
      { id: "rapid", label: "Rapid-acting agents: NMDA antagonists and neurosteroids", short: "Rapid-acting" },
      { id: "newad", label: "Approved after the 12th edition", short: "Newer agents" },
      { id: "augment", label: "Augmenting agents", short: "Augmenters" }
    ],
    profile: [
      ["sedation", "Sedation"], ["weight", "Weight gain"], ["sexual", "Sexual dysfunction"], ["ach", "Anticholinergic"],
      ["ortho", "Orthostasis"], ["qtc", "QTc or conduction"], ["overdose", "Overdose danger"], ["interact", "CYP interactions"]
    ],
    lowFilters: [["weight", "Low weight gain"], ["sexual", "Low sexual dysfunction"], ["sedation", "Low sedation"], ["overdose", "Safer in overdose"], ["interact", "Few interactions"]],
    indications: {
      mdd: "Major depression", "mdd-adj": "Augmenting an antidepressant", trd: "Treatment-resistant depression", suicidal: "Depression with suicidal ideation",
      ppd: "Postpartum depression", atypical: "Atypical depression", gad: "Generalized anxiety", panic: "Panic disorder", social: "Social anxiety",
      ptsd: "PTSD", ocd: "OCD", bulimia: "Bulimia nervosa", pmdd: "PMDD", pain: "Neuropathic or chronic pain", fibro: "Fibromyalgia",
      smoking: "Smoking cessation", enuresis: "Enuresis", insomnia: "Insomnia (off-label)", "ad-agitation": "Agitation in Alzheimer dementia"
    }
  }
]);
KS.drugs = (KS.drugs || []).concat([
  /* ===================== SSRIs ===================== */
  {
    id: "fluoxetine", name: "Fluoxetine", brands: ["Prozac", "Sarafem", "Prozac Weekly"], cls: "antidepressants", group: "ssri", chapter: "ch21-2", sec: "s212-ssri-pharm", book: true,
    summary: "The first U.S. SSRI; longest half-life (norfluoxetine 7 to 9 days), so it tapers itself; activating; strong CYP2D6 inhibitor; 5-week washout before an MAOI.",
    ind: ["mdd", "ocd", "panic", "bulimia", "pmdd", "trd"],
    mechanism: "Serotonin reuptake inhibitor with weak norepinephrine reuptake inhibition and **5-HT2C** binding.",
    indications: {
      approved: ["Major depression, adults and children", "OCD, adults and children", "Panic disorder", "Bulimia nervosa (60 mg)", "PMDD (as Sarafem)", "With olanzapine (Symbyax): bipolar depression and treatment-resistant depression"],
      other: ["Premature ejaculation", "Paraphilias", "Autism features", "Treating discontinuation from other SSRIs"]
    },
    forms: "Capsules 10, 20 mg; scored 10 mg tablet; 90 mg enteric-coated weekly capsule; oral concentrate 20 mg/5 mL",
    dose: { start: "10 or 20 mg each morning (5 to 10 mg if anxious or for panic)", titration: "Slowly; steady state takes about 4 weeks; every-other-day dosing possible", range: "20 mg is often as effective as higher doses; bulimia 60 mg", max: "80 mg a day", notes: ["Take with food to reduce nausea.", "**90 mg weekly** capsule for continuation and maintenance."] },
    half: "4 to 6 days; norfluoxetine 7 to 9 days",
    pk: ["Highly protein bound.", "CYP2D6 metabolism; about 7% of people are poor metabolizers."],
    effects: {
      common: ["**Anxiety and restlessness** early", "**Insomnia** (take in the morning)", "**Headache** (most of the SSRIs)", "Early anorexia and weight loss, later possible gain", "Sexual dysfunction"],
      serious: ["Serotonin syndrome with MAOIs", "Seizures at 100 mg a day or more", "Bleeding with anticoagulants or NSAIDs"]
    },
    monitoring: ["Suicidality and activation early in treatment", "Sodium in older adults on diuretics"],
    interactions: ["Strong **CYP2D6** (and 2C) inhibitor: raises **TCAs** (use low TCA doses), may slow carbamazepine, diazepam, phenytoin; blocks **codeine and hydrocodone** activation; may weaken **tamoxifen**.", "**Warfarin**: more bleeding and bruising.", "MAOIs: wait **5 weeks** after fluoxetine before starting one."],
    pearls: ["Least likely SSRI to cause discontinuation syndrome.", "Best evidence for depression in children."],
    profile: { sedation: "N", weight: "L", sexual: "H", ach: "N", ortho: "N", qtc: "L", overdose: "L", interact: "H" },
    drill: { mech: "SSRI with weak NE reuptake inhibition and **5-HT2C** binding.", dose: "Start **10 to 20 mg** each morning; **20 mg** often enough; max **80 mg**; bulimia **60 mg**; weekly **90 mg** capsule.", se: "Early **anxiety**, **insomnia**, headache, anorexia; sexual dysfunction; little discontinuation.", mon: "Early activation and suicidality; 5-week washout before an MAOI." },
    clues: ["the SSRI with a half-life long enough that it tapers itself and needs a 5-week washout before an MAOI", "approved at 60 mg a day for bulimia nervosa"],
    updates: []
  },
  {
    id: "sertraline", name: "Sertraline", brands: ["Zoloft"], cls: "antidepressants", group: "ssri", chapter: "ch21-2", sec: "s212-ssri-pharm", book: true,
    summary: "Broadly approved SSRI (MDD, OCD including children, panic, PTSD, social anxiety, PMDD) with few interactions; most GI upset and diarrhea; low breast-milk levels.",
    ind: ["mdd", "ocd", "panic", "ptsd", "social", "pmdd"],
    mechanism: "Serotonin reuptake inhibitor with weak **norepinephrine and dopamine** reuptake inhibition.",
    indications: {
      approved: ["Major depression", "OCD, adults and children", "Panic disorder", "PTSD", "Social anxiety disorder", "PMDD"],
      other: ["Social anxiety in children with CBT", "Premature ejaculation", "Autism-related aggression and repetitive behavior"]
    },
    forms: "Scored tablets 25, 50, 100 mg; oral concentrate 20 mg/mL (12% alcohol, dilute before use)",
    dose: { start: "50 mg once daily (25 mg for GI upset or panic)", titration: "After 1 to 3 weeks, raise 50 mg a week", range: "50 to 200 mg", max: "200 mg a day", notes: ["Morning or evening; after food lessens GI effects.", "Food slightly increases absorption."] },
    half: "26 hours; less active metabolite 3 to 5 days",
    effects: {
      common: ["**Nausea, loose stools and diarrhea** (diarrhea may persist)", "Insomnia or somnolence about equally", "Sexual dysfunction"],
      serious: ["Serotonin syndrome", "Bleeding with warfarin, NSAIDs", "Hyponatremia"]
    },
    monitoring: ["Early suicidality and activation", "Prothrombin time with warfarin"],
    interactions: ["Moderate CYP2D6 and 2C inhibition, weaker than fluoxetine or paroxetine.", "May displace **warfarin** and raise prothrombin time.", "**Cimetidine** raises sertraline."],
    pearls: ["**False-positive urine benzodiazepine** screen.", "Breast-milk levels are especially low."],
    profile: { sedation: "L", weight: "L", sexual: "H", ach: "N", ortho: "N", qtc: "L", overdose: "L", interact: "L" },
    drill: { mech: "SSRI with weak **NE and dopamine** reuptake inhibition.", dose: "Start **50 mg** (25 mg for panic or GI upset); raise 50 mg weekly; max **200 mg**.", se: "Most **GI upset and diarrhea**; sexual dysfunction; false-positive benzodiazepine screen.", mon: "Early activation; PT with warfarin." },
    clues: ["the SSRI that can cause a false-positive urine benzodiazepine screen", "an SSRI with the most persistent diarrhea and an oral concentrate containing alcohol"],
    updates: []
  },
  {
    id: "paroxetine", name: "Paroxetine", brands: ["Paxil", "Paxil CR"], cls: "antidepressants", group: "ssri", chapter: "ch21-2", sec: "s212-ssri-pharm", book: true,
    summary: "SSRI with the most indications but the worst discontinuation syndrome, most weight gain, anticholinergic effects, strong CYP2D6 inhibition and first-trimester cardiac defect risk.",
    ind: ["mdd", "gad", "ocd", "panic", "ptsd", "social", "pmdd"],
    mechanism: "Serotonin reuptake inhibitor with **muscarinic (anticholinergic)** activity at higher doses; binds nitric oxide synthase.",
    indications: {
      approved: ["Major depression", "Generalized anxiety disorder", "OCD", "Panic disorder", "PTSD", "Social anxiety disorder", "PMDD (CR)"],
      other: []
    },
    forms: "Tablets 10, 20 (scored), 30, 40 mg; suspension 10 mg/5 mL; CR 12.5, 25, 37.5 mg",
    dose: { start: "10 or 20 mg (CR 25 mg; CR 12.5 mg for panic)", titration: "10 mg a week after 1 to 3 weeks", range: "20 to 50 mg", max: "50 mg a day (immediate release)", notes: ["Evening dosing at first; divide higher doses.", "**Taper** every 2 to 3 weeks when stopping."] },
    half: "21 hours",
    effects: {
      common: ["**Somnolence**", "**Constipation, dry mouth** (anticholinergic)", "**Weight gain**, most and fastest of the SSRIs, especially in young women", "Sexual dysfunction"],
      serious: ["**Discontinuation syndrome**, the worst of the SSRIs", "First-trimester **cardiac septal defects**", "Serotonin syndrome with tramadol in older adults"]
    },
    monitoring: ["Pregnancy planning", "Cognition and constipation in older adults"],
    interactions: ["**Potent CYP2D6 inhibitor**: care with other antidepressants, phenothiazines, antiarrhythmics; blocks codeine activation; may weaken tamoxifen.", "Raises **warfarin** effect.", "Cimetidine raises; **phenobarbital and phenytoin** lower paroxetine."],
    pearls: ["Avoid in pregnancy when possible (former Category D).", "Less likely than fluoxetine to raise anxiety early."],
    profile: { sedation: "M", weight: "H", sexual: "H", ach: "M", ortho: "N", qtc: "L", overdose: "L", interact: "H" },
    drill: { mech: "SSRI with **anticholinergic** activity; potent **CYP2D6** inhibitor.", dose: "Start **10 to 20 mg**; raise 10 mg weekly; max **50 mg**; CR 25 mg (12.5 mg panic).", se: "**Worst discontinuation**, most **weight gain**, sedation, constipation; first-trimester **cardiac defects**.", mon: "Taper slowly; avoid in pregnancy." },
    clues: ["the SSRI most likely to cause a discontinuation syndrome and linked to first-trimester heart defects", "the SSRI with anticholinergic effects and the most weight gain"],
    updates: []
  },
  {
    id: "fluvoxamine", name: "Fluvoxamine", brands: ["Luvox", "Luvox CR"], cls: "antidepressants", group: "ssri", chapter: "ch21-2", sec: "s212-ssri-int", book: true,
    summary: "SSRI approved for OCD, not depression, in the United States; the most CYP interactions (1A2 and 3A4: theophylline, clozapine, alprazolam, warfarin); short half-life.",
    ind: ["ocd"],
    mechanism: "Serotonin reuptake inhibitor; strong inhibitor of **CYP1A2** and **CYP3A4** (and 2C).",
    indications: {
      approved: ["OCD, adults and children"],
      other: ["Depression (approved in other countries)", "Panic attacks", "Autism-related behaviors in adults"]
    },
    forms: "Tablets 25, 50 and 100 mg (scored); extended release 100, 150 mg",
    dose: { start: "50 mg at bedtime for the first week", titration: "Adjust to response and side effects; slower if nausea in the first 2 weeks", range: "50 to 300 mg", max: "300 mg a day", notes: ["Divide doses above 100 mg twice daily.", "Swallow with food; do not chew."] },
    half: "15 hours (the shortest SSRI)",
    effects: {
      common: ["**Nausea** and GI upset (with sertraline the most)", "Insomnia or somnolence"],
      serious: ["Toxicity of coadministered drugs", "Discontinuation and interdose withdrawal"]
    },
    monitoring: ["Levels or effects of theophylline, warfarin, clozapine"],
    interactions: ["**Theophylline** levels up threefold; **warfarin** twofold.", "Do not combine with **alprazolam, triazolam, diazepam**.", "Raises **clozapine** (seizures), carbamazepine, methadone, propranolol, diltiazem.", "No interaction with lorazepam or digoxin."],
    pearls: ["Its antidepressant status in the United States reflects a marketing decision."],
    profile: { sedation: "L", weight: "L", sexual: "H", ach: "N", ortho: "N", qtc: "L", overdose: "L", interact: "H" },
    drill: { mech: "SSRI; strong **CYP1A2 and 3A4** inhibitor.", dose: "Start **50 mg at bedtime**; range **50 to 300 mg**; divide above 100 mg.", se: "Nausea; discontinuation; dangerous **interactions**.", mon: "Theophylline, warfarin and clozapine levels or effects." },
    clues: ["the SSRI approved only for OCD in the United States, with the most CYP interactions"],
    updates: []
  },
  {
    id: "citalopram", name: "Citalopram", brands: ["Celexa"], cls: "antidepressants", group: "ssri", chapter: "ch21-2", sec: "s212-ssri-ae", book: true,
    summary: "Highly selective SSRI with few interactions but the most QT prolongation: maximum 40 mg, or 20 mg over 60, in liver disease, CYP2C19 poor metabolizers or with cimetidine.",
    ind: ["mdd"],
    mechanism: "Highly **selective** serotonin reuptake inhibitor; minimal NE, dopamine, H1, GABA or benzodiazepine activity.",
    indications: { approved: ["Major depression"], other: ["Panic attacks"] },
    forms: "Scored tablets 20, 40 mg; liquid 10 mg/5 mL",
    dose: { start: "20 mg a day for a week", titration: "Then usually 40 mg", range: "20 to 40 mg", max: "40 mg (20 mg over age 60, hepatic impairment, CYP2C19 poor metabolizers, or with cimetidine)", notes: ["Once daily, morning or evening, with or without food."] },
    half: "35 hours",
    effects: {
      common: ["Somnolence", "Nausea", "Sexual dysfunction"],
      serious: ["**Dose-dependent QTc prolongation** (+8.5 ms at 20 mg, +12.6 at 40, +18.5 at 60)", "The most dangerous SSRI in overdose (fatal arrhythmias)"]
    },
    monitoring: ["ECG with heart failure, bradyarrhythmia or other QT drugs", "Potassium and magnesium"],
    interactions: ["Not a potent CYP inhibitor.", "**Cimetidine** raises citalopram about **40%**.", "Doubles **metoprolol** levels (usually no BP effect)."],
    pearls: ["Avoid in congenital long QT syndrome."],
    profile: { sedation: "M", weight: "L", sexual: "H", ach: "N", ortho: "N", qtc: "H", overdose: "M", interact: "L" },
    drill: { mech: "The most **selective** SSRI (with escitalopram).", dose: "**20 mg**, then **40 mg**; max **40 mg**; **20 mg** if over 60, liver disease, CYP2C19 PM or cimetidine.", se: "**QTc prolongation**, somnolence, sexual dysfunction.", mon: "ECG and K+/Mg2+ when at risk." },
    clues: ["the SSRI capped at 40 mg a day because of QT prolongation"],
    updates: [
      { year: "2023", field: "dose", title: "Genotype guidance", text: "CPIC advises a lower starting dose and slower titration (or another drug) for **CYP2C19 poor metabolizers**, and an alternative drug for ultrarapid metabolizers.", source: "Bousman CA et al., CPIC guideline for serotonin reuptake inhibitor antidepressants, Clinical Pharmacology & Therapeutics, 2023" }
    ]
  },
  {
    id: "escitalopram", name: "Escitalopram", brands: ["Lexapro"], cls: "antidepressants", group: "ssri", chapter: "ch21-2", sec: "s212-ssri-dose", book: true,
    summary: "S-enantiomer of citalopram; highly selective, least protein bound, few interactions; MDD and GAD; 10 mg is the usual dose; low breast-milk levels.",
    ind: ["mdd", "gad"],
    mechanism: "Highly **selective** serotonin reuptake inhibitor (S-enantiomer of citalopram); a moderate CYP2D6 inhibitor.",
    indications: { approved: ["Major depression (adults and adolescents)", "Generalized anxiety disorder"], other: [] },
    forms: "Scored tablets 10, 20 mg; oral solution 5 mg/5 mL",
    dose: { start: "10 mg a day", titration: "May raise to 20 mg", range: "10 mg", max: "20 mg (no added benefit in trials)", notes: [] },
    half: "27 to 32 hours",
    effects: {
      common: ["Nausea", "Insomnia (more than citalopram)", "Sexual dysfunction"],
      serious: ["QTc prolongation (less than citalopram)", "Hyponatremia"]
    },
    interactions: ["**Moderate CYP2D6** inhibitor: raises desipramine and metoprolol."],
    pearls: ["Less anxiety at the start than fluoxetine.", "The least protein-bound SSRI."],
    profile: { sedation: "L", weight: "L", sexual: "H", ach: "N", ortho: "N", qtc: "L", overdose: "L", interact: "L" },
    drill: { mech: "Selective SSRI, S-enantiomer of citalopram.", dose: "**10 mg** a day; max **20 mg**.", se: "Nausea, insomnia, sexual dysfunction.", mon: "—" },
    clues: ["the least protein-bound SSRI, approved for depression and GAD at a usual dose of 10 mg"],
    updates: [
      { year: "2023", field: "indications", title: "Pediatric GAD", text: "Approved for **generalized anxiety disorder** in patients **aged 7 and older** (2023).", source: "Lexapro prescribing information (2023 and later)" }
    ]
  },
  {
    id: "vilazodone", name: "Vilazodone", brands: ["Viibryd"], cls: "antidepressants", group: "ssri", chapter: "ch21-2", sec: "s212-ssri-dose", book: true,
    summary: "SSRI plus 5-HT1A partial agonist; titrate over 2 weeks and take with food; halve with strong CYP3A4 inhibitors.",
    ind: ["mdd"],
    mechanism: "Serotonin reuptake inhibitor and **5-HT1A partial agonist** (clinical meaning unclear).",
    indications: { approved: ["Major depression in adults"], other: [] },
    forms: "Tablets 10, 20, 40 mg",
    dose: { start: "10 mg once daily for 7 days", titration: "20 mg for 7 days, then 40 mg", range: "20 to 40 mg", max: "40 mg (book recommends 40 mg)", notes: ["**Take with food**; levels fall without it.", "20 mg with strong CYP3A4 inhibitors.", "No adjustment for age, mild or moderate hepatic, or renal impairment."] },
    half: "About 25 hours; steady state in 3 days",
    effects: { common: ["Nausea, diarrhea", "Sexual dysfunction"], serious: ["Overdose of 200 to 280 mg: serotonin syndrome, hallucinations"] },
    interactions: ["Strong **CYP3A4** inhibitors: reduce to 20 mg; inducers may make it ineffective."],
    pearls: ["Small QTc effect, below the level of concern."],
    profile: { sedation: "L", weight: "L", sexual: "M", ach: "N", ortho: "N", qtc: "L", overdose: "L", interact: "L" },
    drill: { mech: "SSRI plus **5-HT1A partial agonist**.", dose: "**10 → 20 → 40 mg** at weekly steps; **with food**.", se: "Nausea, diarrhea; serotonin syndrome in overdose.", mon: "—" },
    clues: ["the SSRI that must be taken with food and is also a 5-HT1A partial agonist"],
    updates: [
      { year: "2026", field: "dose", title: "Current label dose", text: "The current label recommends **20 to 40 mg** a day (10 mg for 7 days, then 20 mg; 40 mg optional).", source: "Viibryd prescribing information" }
    ]
  },
  {
    id: "vortioxetine", name: "Vortioxetine", brands: ["Trintellix"], cls: "antidepressants", group: "ssri", chapter: "ch21-2", sec: "s212-vortiox", book: true,
    summary: "Multimodal serotonergic antidepressant (reuptake inhibition plus 5-HT1A agonism and 5-HT3, 1D, 7 antagonism); nausea; halve with strong CYP2D6 inhibitors.",
    ind: ["mdd"],
    mechanism: "Serotonin reuptake inhibitor, **5-HT1A agonist**, **5-HT1B partial agonist**, and **5-HT3, 5-HT1D and 5-HT7 antagonist**.",
    indications: { approved: ["Major depression in adults"], other: [] },
    forms: "Tablets 5, 10, 15, 20 mg",
    dose: { start: "10 mg once daily, without regard to meals", titration: "Up to 20 mg as tolerated", range: "10 to 20 mg (5 mg if not tolerated)", max: "20 mg; 10 mg in CYP2D6 poor metabolizers", notes: ["Halve with strong CYP2D6 inhibitors (bupropion, fluoxetine, paroxetine, quinidine).", "From 15 or 20 mg, reduce to 10 mg for a week before stopping."] },
    effects: { common: ["**Nausea**", "Constipation, vomiting"], serious: ["Serotonin syndrome"] },
    interactions: ["Strong 2D6 inhibitors: halve the dose.", "Strong inducers for more than 14 days: consider raising, up to 3 times the original dose."],
    pearls: ["The only drug with this combination of receptor actions."],
    profile: { sedation: "L", weight: "L", sexual: "M", ach: "N", ortho: "N", qtc: "N", overdose: "L", interact: "L" },
    drill: { mech: "SRI + **5-HT1A agonist**, 5-HT1B partial agonist, **5-HT3/1D/7 antagonist**.", dose: "**10 mg**, then **20 mg**; max 10 mg in 2D6 poor metabolizers; halve with strong 2D6 inhibitors.", se: "**Nausea**, constipation, vomiting.", mon: "—" },
    clues: ["the multimodal antidepressant that blocks 5-HT3 and 5-HT7 receptors while inhibiting serotonin reuptake"],
    updates: [
      { field: "interactions", title: "Dose check: inducers", text: "The label advises considering a **higher** dose (up to **3 times** the original) when a strong CYP inducer is given for more than 14 days, and returning to the original dose within 14 days after it stops.", source: "Trintellix prescribing information" }
    ]
  },
  /* ===================== SNRIs ===================== */
  {
    id: "venlafaxine", name: "Venlafaxine", brands: ["Effexor", "Effexor XR"], cls: "antidepressants", group: "snri", chapter: "ch21-2", sec: "s212-ven", book: true,
    summary: "SNRI for MDD, GAD, social anxiety and panic; dose–response in depression; dose-related hypertension; harsh discontinuation syndrome.",
    ind: ["mdd", "gad", "social", "panic"],
    mechanism: "Serotonin and norepinephrine reuptake inhibitor (more serotonergic at low doses) without muscarinic, histamine or adrenergic receptor affinity.",
    indications: { approved: ["Major depression", "Generalized anxiety disorder (XR)", "Social anxiety disorder (XR)", "Panic disorder"], other: ["OCD, ADHD, chronic pain, depression with cocaine dependence"] },
    forms: "Tablets 25, 37.5, 50, 75, 100 mg; XR capsules 37.5, 75, 150 mg",
    dose: { start: "37.5 mg XR for 4 to 7 days", titration: "75 mg, then up by 75 mg every 4 or more days (150 mg after day 4 for rapid titration)", range: "75 to 225 mg (anxiety disorders usually 75 to 150 mg)", max: "225 mg usual; approved up to 375 mg a day", notes: ["Halve with significant hepatic or renal impairment.", "Taper over 2 to 4 weeks."] },
    pk: ["CYP2D6 converts it to desvenlafaxine, which is equipotent."],
    effects: {
      common: ["**Nausea** (most common)", "Sexual dysfunction (30% to 40% when asked)", "Headache, insomnia, somnolence, dry mouth, dizziness, constipation, **sweating**"],
      serious: ["**Sustained hypertension**: 13% above 300 mg (IR)", "**Discontinuation syndrome**", "Overdose: QT and QRS prolongation, seizures, serotonin syndrome"]
    },
    monitoring: ["Blood pressure, especially at higher doses"],
    interactions: ["Weak CYP2D6 inhibitor (raises desipramine, risperidone).", "**MAOIs** contraindicated; wait 7 days after venlafaxine.", "Bupropion raises venlafaxine levels."],
    pearls: ["About 6% higher remission than SSRIs in meta-analyses.", "False-positive **tramadol** on liquid chromatography."],
    profile: { sedation: "L", weight: "L", sexual: "M", ach: "N", ortho: "N", qtc: "L", overdose: "M", interact: "L" },
    drill: { mech: "**SNRI**; parent and metabolite (desvenlafaxine) equipotent.", dose: "XR **37.5 mg**, then **75 mg**; +75 mg every 4 days; usual max **225 mg**, approved to **375 mg**.", se: "Nausea, sweating, sexual dysfunction; **dose-related hypertension**; harsh **discontinuation**.", mon: "**Blood pressure**." },
    clues: ["the SNRI with dose-related sustained hypertension above 300 mg a day", "the antidepressant that can cause a false-positive tramadol test"],
    updates: []
  },
  {
    id: "desvenlafaxine", name: "Desvenlafaxine", brands: ["Pristiq"], cls: "antidepressants", group: "snri", chapter: "ch21-2", sec: "s212-ven", book: true,
    summary: "The active metabolite of venlafaxine; MDD only; 50 mg is the dose for most; discontinuation symptoms.",
    ind: ["mdd"],
    mechanism: "Serotonin and norepinephrine reuptake inhibitor (O-desmethylvenlafaxine).",
    indications: { approved: ["Major depression"], other: [] },
    forms: "ER tablets 50, 100 mg",
    dose: { start: "50 mg once daily", titration: "Usually none needed", range: "50 mg", max: "Higher doses add side effects, not benefit", notes: [] },
    effects: { common: ["Nausea", "Sexual dysfunction", "Sweating, dizziness"], serious: ["Discontinuation syndrome", "Raised blood pressure"] },
    monitoring: ["Blood pressure"],
    profile: { sedation: "L", weight: "L", sexual: "M", ach: "N", ortho: "N", qtc: "L", overdose: "M", interact: "N" },
    drill: { mech: "SNRI; venlafaxine's active metabolite.", dose: "**50 mg** a day; higher doses add only side effects.", se: "Nausea, sexual dysfunction, discontinuation.", mon: "Blood pressure." },
    clues: ["the SNRI that is venlafaxine's active metabolite, dosed at 50 mg a day"],
    updates: []
  },
  {
    id: "duloxetine", name: "Duloxetine", brands: ["Cymbalta"], cls: "antidepressants", group: "snri", chapter: "ch21-2", sec: "s212-dulox", book: true,
    summary: "Delayed-release SNRI; first drug approved for diabetic neuropathic pain; 60 mg target; avoid with heavy alcohol use or liver disease; raises HbA1c.",
    ind: ["mdd", "gad", "pain", "fibro"],
    mechanism: "Serotonin and norepinephrine reuptake inhibitor; increases urethral sphincter activity via the sacral cord.",
    indications: { approved: ["Major depression", "Diabetic peripheral neuropathic pain"], other: ["Stress urinary incontinence (Yentreve, Europe only)"] },
    forms: "Delayed-release capsules 20, 30, 60 mg",
    dose: { start: "20 to 30 mg, or 60 mg", titration: "Split doses help tolerability", range: "60 mg", max: "60 mg in the book (doses to 120 mg gave no consistent benefit)", notes: ["Doses above 60 mg were given as 40 or 60 mg twice daily."] },
    half: "About 12 hours (8 to 17)",
    pk: ["Absorption starts after 2 hours; peak 6 hours (10 with food).", "Eliminated by CYP2D6 and CYP1A2; 90% protein bound."],
    effects: { common: ["**Nausea** (main reason for stopping)", "Dry mouth, dizziness, constipation, fatigue, low appetite, somnolence, sweating"], serious: ["Hepatic injury with heavy alcohol use", "Raised **glucose and HbA1c**", "Discontinuation syndrome"] },
    monitoring: ["Glucose and HbA1c in diabetes", "Liver function when at risk"],
    interactions: ["**Moderate** CYP2D6 inhibitor."],
    pearls: ["Avoid in hepatic insufficiency, end-stage renal disease and uncontrolled narrow-angle glaucoma."],
    profile: { sedation: "L", weight: "L", sexual: "M", ach: "N", ortho: "N", qtc: "L", overdose: "M", interact: "M" },
    drill: { mech: "**SNRI**, delayed release.", dose: "Target **60 mg** a day (20 or 30 mg to start); 120 mg no better in the book.", se: "Nausea; liver injury with **alcohol**; raises **HbA1c**.", mon: "Glucose in diabetes; liver tests if at risk." },
    clues: ["the first drug approved for diabetic neuropathic pain", "the SNRI to avoid in heavy drinkers because of liver injury"],
    updates: [
      { year: "2026", field: "indications", title: "Current label", text: "Comes as **delayed-release capsules**. Current U.S. indications: **MDD**, **GAD** (adults and ages 7 to 17), **diabetic peripheral neuropathic pain**, **fibromyalgia** (adults and ages 13 to 17), and **chronic musculoskeletal pain**. Labeled maximum **120 mg** a day.", source: "Cymbalta prescribing information" }
    ]
  },
  {
    id: "milnacipran", name: "Milnacipran", brands: ["Savella"], cls: "antidepressants", group: "snri", chapter: "ch21-2", sec: "s212-milna", book: true,
    summary: "SNRI approved in the United States only for fibromyalgia; 5 times more noradrenergic than serotonergic; renal excretion.",
    ind: ["fibro"],
    mechanism: "Norepinephrine-preferring SNRI (about 5 times more potent at norepinephrine than serotonin reuptake).",
    indications: { approved: ["Fibromyalgia"], other: ["Depression (approved in other countries)"] },
    forms: "Tablets 12.5, 25, 50, 100 mg",
    dose: { start: "12.5 mg once on day 1", titration: "12.5 mg twice daily days 2 to 3; 25 mg twice daily days 4 to 7", range: "50 mg twice daily", max: "200 mg a day (label)", notes: [] },
    half: "About 8 hours",
    pk: ["Linear kinetics 50 to 250 mg; no active metabolites; mostly renal excretion."],
    effects: { common: ["Nausea", "Sweating", "Raised heart rate and BP"], serious: ["Hypertension"] },
    monitoring: ["Blood pressure and heart rate", "Renal function"],
    profile: { sedation: "L", weight: "L", sexual: "M", ach: "N", ortho: "N", qtc: "L", overdose: "L", interact: "N" },
    drill: { mech: "Norepinephrine-preferring **SNRI**.", dose: "12.5 mg day 1 → 12.5 mg twice daily → 25 mg twice daily → **50 mg twice daily**.", se: "Nausea, sweating, raised heart rate.", mon: "BP and pulse." },
    clues: ["the SNRI approved in the United States only for fibromyalgia"],
    updates: []
  },
  {
    id: "levomilnacipran", name: "Levomilnacipran", brands: ["Fetzima"], cls: "antidepressants", group: "snri", chapter: "ch21-2", sec: "s212-milna", book: true,
    summary: "Active enantiomer of milnacipran, approved for MDD in 2013; norepinephrine-preferring; raises heart rate; dose-related urinary hesitancy and erectile dysfunction.",
    ind: ["mdd"],
    mechanism: "SNRI with greater potency for norepinephrine than serotonin reuptake; no effect on dopamine.",
    indications: { approved: ["Major depression in adults"], other: [] },
    forms: "Extended-release capsules 20, 40, 80, 120 mg",
    dose: { start: "20 mg once daily for 2 days", titration: "40 mg, then up by 40 mg every 2 or more days", range: "40 to 120 mg", max: "120 mg a day", notes: ["Titration from the label; the book notes 40, 80 and 120 mg all beat placebo."] },
    effects: { common: ["Nausea, constipation, vomiting", "**Hyperhidrosis**", "**Increased heart rate**, palpitations"], serious: ["Dose-related **urinary hesitancy** and **erectile dysfunction**"] },
    monitoring: ["Heart rate and blood pressure"],
    profile: { sedation: "L", weight: "L", sexual: "M", ach: "N", ortho: "N", qtc: "L", overdose: "L", interact: "L" },
    drill: { mech: "Norepinephrine-preferring **SNRI**; enantiomer of milnacipran.", dose: "**20 mg** for 2 days, then 40 mg; range **40 to 120 mg**.", se: "Sweating, tachycardia; dose-related **urinary hesitancy** and **ED**.", mon: "Heart rate, BP." },
    clues: ["the SNRI whose only dose-related side effects are urinary hesitancy and erectile dysfunction"],
    updates: []
  },
  /* ===================== other mechanisms ===================== */
  {
    id: "bupropion", name: "Bupropion", brands: ["Wellbutrin", "Wellbutrin SR", "Wellbutrin XL", "Zyban"], cls: "antidepressants", group: "atypical", chapter: "ch21-2", sec: "s212-bup", book: true,
    summary: "Norepinephrine–dopamine reuptake inhibitor with no serotonergic effect: little sexual dysfunction, weight loss, no sedation; dose-dependent seizures; smoking cessation.",
    ind: ["mdd", "smoking"],
    mechanism: "Inhibits **norepinephrine and dopamine** reuptake (binds the dopamine transporter); may block nicotinic receptors. No serotonergic action.",
    indications: { approved: ["Major depression", "Prevention of seasonal depressive episodes", "Smoking cessation (SR, with behavioral support)"], other: ["ADHD (second line)", "Counteracting SSRI sexual dysfunction", "Hypoactive sexual desire", "Cocaine craving (inconclusive)"] },
    forms: "IR 75, 100, 150 mg; SR 100, 150, 200, 300 mg (book); XL 150, 300 mg",
    dose: { start: "IR 75 mg twice daily; SR 100 mg once daily; XL 150 mg each morning", titration: "IR to 100 mg three times daily on day 4; never more than 100 mg every 3 days", range: "300 mg a day", max: "IR 450 mg (no single dose over 150 mg); SR 400 mg (200 mg twice daily); XL 450 mg once daily", notes: ["Smoking: SR 150 mg daily from **10 to 14 days before** quitting, twice daily from day 4, for 7 to 12 weeks.", "XL 300 mg once daily equals SR 150 mg twice daily."] },
    half: "About 12 hours (8 to 40)",
    pk: ["CYP2B6 forms active hydroxybupropion.", "Bioequivalence problems with some generics (Budeprion XL 300 withdrawn)."],
    effects: { common: ["**Headache, insomnia, dry mouth, tremor, nausea**", "Restlessness, agitation", "Weight loss"], serious: ["**Seizures**, dose dependent (0.05% at 300 mg SR; 0.1% at 400 mg)", "**Psychosis**, delirium", "Hypertension", "Overdose: seizures in one-third"] },
    monitoring: ["Seizure risk factors", "Blood pressure"],
    interactions: ["Strong **CYP2D6** inhibitor (raises venlafaxine, TCAs, vortioxetine, dextromethorphan).", "**MAOIs**: 14-day gap (hypertensive crisis).", "Carbamazepine lowers bupropion; bupropion raises valproate.", "Dopaminergic drugs: delirium, psychosis, dyskinesia; metoprolol: bradycardia; lithium: rare seizures."],
    pearls: ["Avoid in severe anxiety, panic, seizure disorders, and (labels) bulimia and anorexia.", "False-positive urine **amphetamine** screen."],
    profile: { sedation: "N", weight: "N", sexual: "N", ach: "N", ortho: "N", qtc: "N", overdose: "M", interact: "H" },
    drill: { mech: "**NE and dopamine** reuptake inhibitor; no serotonin effect; strong **CYP2D6** inhibitor.", dose: "IR **75 mg twice daily** → 100 mg three times daily; usual **300 mg**; max IR 450, SR 400, XL 450.", se: "Insomnia, tremor, headache; **seizures** (dose dependent); psychosis; little sexual dysfunction.", mon: "Seizure risk factors; BP." },
    clues: ["the antidepressant with no serotonergic action, little sexual dysfunction and dose-dependent seizures", "used for smoking cessation, started 10 to 14 days before the quit date"],
    updates: [
      { field: "dose", title: "Dose check: formulation limits", text: "Current labels: **IR** start 100 mg twice daily, max **450 mg** (no single dose over 150 mg); **SR** start 150 mg each morning, max **400 mg** as 200 mg twice daily; **XL** start 150 mg each morning, then 300 mg, max **450 mg** once daily. The book's paragraph mixes these up.", source: "Wellbutrin, Wellbutrin SR and Wellbutrin XL prescribing information" }
    ]
  },
  {
    id: "mirtazapine", name: "Mirtazapine", brands: ["Remeron", "RemeronSolTab"], cls: "antidepressants", group: "atypical", chapter: "ch21-2", sec: "s212-mirt", book: true,
    summary: "α2 antagonist with 5-HT2, 5-HT3 and strong H1 blockade: sedation, appetite and weight gain, antinausea; little sexual dysfunction; rare neutropenia.",
    ind: ["mdd"],
    mechanism: "Blocks presynaptic **α2** receptors (more norepinephrine and serotonin firing) and postsynaptic **5-HT2 and 5-HT3**; potent **H1** blocker; moderate α1 and muscarinic blockade.",
    indications: { approved: ["Major depression"], other: ["Depression with insomnia, weight loss and agitation", "Chemotherapy nausea and anorexia", "Added to SSRIs or venlafaxine to augment or counter nausea and insomnia"] },
    forms: "Scored tablets 15, 30, 45 mg; orally disintegrating tablets 15, 30, 45 mg",
    dose: { start: "15 mg at bedtime", titration: "Up by 15 mg every 5 days", range: "15 to 45 mg", max: "45 mg at bedtime", notes: ["Lower doses in older adults and renal or hepatic disease."] },
    half: "About 30 hours",
    pk: ["Peak 2 hours; steady state in 6 days.", "Clearance down 30% (hepatic), 50% (renal), 40% (older men)."],
    effects: { common: ["**Somnolence** (54%)", "Dry mouth (25%)", "**Increased appetite** (17%), **weight gain** (12%)", "Constipation, dizziness"], serious: ["**Neutropenia** (ANC ≤500 in 0.3% before marketing)", "Cholesterol and triglyceride rises; ALT rises", "Orthostatic hypotension"] },
    monitoring: ["CBC if fever, sore throat or mouth ulcers", "Weight and lipids"],
    interactions: ["Adds to sedation with **alcohol and benzodiazepines**.", "Not within 14 days of an MAOI.", "No significant pharmacokinetic interactions with other antidepressants."],
    pearls: ["Well suited to older adults with insomnia and weight loss; young adults often dislike it."],
    profile: { sedation: "H", weight: "H", sexual: "L", ach: "L", ortho: "L", qtc: "L", overdose: "L", interact: "N" },
    drill: { mech: "**α2 antagonist** + 5-HT2/5-HT3 blockade + potent **H1** blockade.", dose: "**15 mg at bedtime**, +15 mg every 5 days, max **45 mg**.", se: "**Somnolence**, appetite, weight gain, lipids; rare **neutropenia**; antinausea.", mon: "CBC with infection signs; weight and lipids." },
    clues: ["the α2 antagonist antidepressant that increases appetite and blocks 5-HT3 receptors"],
    updates: []
  },
  {
    id: "trazodone", name: "Trazodone", brands: ["Desyrel"], cls: "antidepressants", group: "atypical", chapter: "ch21-2", sec: "s212-traz", book: true,
    summary: "5-HT2A/2C antagonist and weak SRI; very sedating, mostly used as a non-controlled hypnotic; orthostasis; priapism in 1 in 10,000 men.",
    ind: ["mdd", "insomnia"],
    mechanism: "Weak serotonin reuptake inhibitor; potent **5-HT2A and 5-HT2C antagonist**; **α1** blockade; metabolite **mCPP** (5-HT2C agonist).",
    indications: { approved: ["Major depression"], other: ["**Insomnia** (25 to 100 mg)", "Agitation in dementia or developmental disability (50 mg)", "PTSD insomnia and nightmares", "GAD above 250 mg"] },
    forms: "Tablets 50, 100, 150, 300 mg",
    dose: { start: "50 mg at bedtime", titration: "Up 50 mg every 3 days as tolerated; reassess at 300 mg", range: "200 to 600 mg in divided doses for depression", max: "600 mg (book)", notes: ["Hypnotic doses 25 to 100 mg.", "Take with food to lower peak and orthostasis."] },
    half: "5 to 9 hours (mCPP 14 hours)",
    effects: { common: ["**Sedation**, **orthostatic hypotension** (4 to 6 hours after a dose)", "Dizziness, headache, nausea"], serious: ["**Priapism** (1 in 10,000 men)", "Arrhythmias with preexisting PVCs or mitral valve prolapse"] },
    monitoring: ["Orthostatic BP", "Counsel about priapism"],
    interactions: ["Adds to CNS depressants and antihypertensives.", "Raises digoxin and phenytoin; caution with warfarin.", "**CYP3A4 inhibitors** raise mCPP."],
    pearls: ["No anticholinergic effects or weight gain.", "Does not suppress stage 4 sleep, unlike TCAs.", "Not a controlled substance."],
    profile: { sedation: "H", weight: "L", sexual: "L", ach: "N", ortho: "H", qtc: "L", overdose: "L", interact: "L" },
    drill: { mech: "**5-HT2A/2C antagonist**, weak SRI, **α1** blocker; metabolite mCPP.", dose: "Depression: **50 mg**, +50 mg every 3 days to **200 to 600 mg**; sleep **25 to 100 mg**.", se: "**Sedation**, **orthostasis**, **priapism**.", mon: "Orthostatic BP; priapism warning." },
    clues: ["the sedating antidepressant used as a hypnotic that can cause priapism"],
    updates: []
  },
  {
    id: "nefazodone", name: "Nefazodone", brands: ["Serzone (brand withdrawn)"], cls: "antidepressants", group: "atypical", chapter: "ch21-2", sec: "s212-nefaz", book: true,
    summary: "Trazodone analog and 5-HT2A antagonist; little sexual dysfunction; boxed warning for hepatic failure; strong CYP3A4 inhibitor; visual trails.",
    ind: ["mdd"],
    mechanism: "**5-HT2A antagonist** with serotonin and weak norepinephrine reuptake inhibition; mild α1 blockade; metabolites hydroxynefazodone and mCPP.",
    indications: { approved: ["Major depression"], other: ["Panic, GAD, PMDD, chronic pain, PTSD; not OCD"] },
    forms: "Tablets 50, 200, 250 mg (unscored); 100, 150 mg (scored)",
    dose: { start: "100 mg twice daily (50 mg twice daily in older adults)", titration: "Up 100 to 200 mg a day, no faster than weekly", range: "300 to 600 mg in two doses", max: "600 mg; 400 mg in older adults", notes: ["Benefit after 2 to 4 weeks.", "Lower in severe liver disease."] },
    half: "2 to 4 hours; bioavailability about 20%",
    effects: { common: ["Headache, dry mouth, **somnolence**, nausea, dizziness", "**Visual trails**", "Feeling 'medicated'"], serious: ["**Hepatic failure**", "Postural hypotension"] },
    monitoring: ["Serial **liver function tests**"],
    interactions: ["**CYP3A4** inhibitor: cut triazolam 75%, alprazolam 50%; slows digoxin and haloperidol.", "Never with MAOIs."],
    pearls: ["Does not protect against SSRI withdrawal on a switch; mCPP may worsen it."],
    profile: { sedation: "M", weight: "L", sexual: "L", ach: "L", ortho: "M", qtc: "L", overdose: "L", interact: "H" },
    drill: { mech: "**5-HT2A antagonist**, weak SRI/NRI; strong **CYP3A4** inhibitor.", dose: "**100 mg twice daily**; +100 to 200 mg weekly; **300 to 600 mg** in two doses.", se: "Sedation, **visual trails**, **hepatic failure**; little sexual dysfunction.", mon: "Serial **liver tests**." },
    clues: ["the antidepressant with a boxed warning for liver failure and visual trails"],
    updates: [
      { field: "monitoring", title: "Label detail: boxed warning", text: "Boxed warning for **life-threatening hepatic failure** (about 1 per 250,000 to 300,000 patient-years). Do not start with active liver disease or raised transaminases; stop if AST or ALT reach **3 times** the upper limit of normal.", source: "Nefazodone prescribing information" }
    ]
  },
  /* ===================== TCAs ===================== */
  {
    id: "imipramine", name: "Imipramine", brands: ["Tofranil"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca", book: true,
    summary: "The first TCA (1957); tertiary amine converted to desipramine; panic with agoraphobia and childhood enuresis; quinidine-like cardiac effects.",
    ind: ["mdd", "panic", "enuresis"],
    mechanism: "Norepinephrine and serotonin reuptake inhibitor; blocks muscarinic, H1, α1 receptors; demethylated to **desipramine**.",
    indications: { approved: ["Major depression", "Childhood enuresis"], other: ["Panic disorder with agoraphobia (best studied TCA)", "GAD"] },
    forms: "Tablets 10, 25, 50 mg; capsules 75 to 150 mg (pamoate); injection 12.5 mg/mL",
    dose: { start: "25 mg a day", titration: "Raise as tolerated, mostly at bedtime", range: "150 to 300 mg", max: "300 mg; children 5 mg/kg a day", notes: ["Children: start 1.5 mg/kg a day; enuresis 50 to 100 mg at bedtime."] },
    effects: { common: ["Anticholinergic effects", "Orthostasis", "Sedation (intermediate)", "Tachycardia"], serious: ["Conduction delay (quinidine-like)", "Lethal in overdose"] },
    monitoring: ["ECG", "Level 150 to 300 ng/mL (with desipramine)"],
    profile: { sedation: "M", weight: "M", sexual: "M", ach: "H", ortho: "H", qtc: "H", overdose: "H", interact: "M" },
    drill: { mech: "Tertiary-amine TCA (NE + 5-HT reuptake); metabolite desipramine; quinidine-like.", dose: "Start **25 mg**; **150 to 300 mg**; enuresis **50 to 100 mg** at bedtime.", se: "Anticholinergic, orthostasis, conduction delay; lethal overdose.", mon: "ECG; level 150 to 300 ng/mL." },
    clues: ["the TCA used for childhood enuresis and best studied in panic with agoraphobia"],
    updates: []
  },
  {
    id: "desipramine", name: "Desipramine", brands: ["Norpramin"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca", book: true,
    summary: "Secondary-amine TCA; the most norepinephrine-selective and least anticholinergic and sedating TCA.",
    ind: ["mdd"],
    mechanism: "The most **norepinephrine-selective** TCA; least muscarinic blockade.",
    indications: { approved: ["Major depression"], other: ["ADHD in children (caution: sudden death reports)"] },
    forms: "Tablets 10, 25, 50, 75, 100, 150 mg",
    dose: { start: "25 mg a day", titration: "Raise as tolerated", range: "150 to 300 mg", max: "300 mg", notes: [] },
    effects: { common: ["Tachycardia", "Mild anticholinergic effects", "Insomnia rather than sedation"], serious: ["Arrhythmia in overdose", "Sudden death reported in children"] },
    monitoring: ["ECG", "Level 150 to 300 ng/mL"],
    interactions: ["Doubles with **perphenazine**; raised by SSRIs, escitalopram, venlafaxine."],
    profile: { sedation: "L", weight: "L", sexual: "M", ach: "L", ortho: "M", qtc: "H", overdose: "H", interact: "M" },
    drill: { mech: "Secondary-amine TCA, the most **NE-selective**.", dose: "Start **25 mg**; **150 to 300 mg**.", se: "Least anticholinergic and sedating TCA; tachycardia.", mon: "ECG; levels." },
    clues: ["the least anticholinergic TCA, and the most norepinephrine selective"],
    updates: []
  },
  {
    id: "amitriptyline", name: "Amitriptyline", brands: ["Elavil", "Endep"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca-ind", book: true,
    summary: "Highly sedating, strongly anticholinergic tertiary-amine TCA; most used TCA for chronic pain and migraine prophylaxis at low doses.",
    ind: ["mdd", "pain"],
    mechanism: "Dual reuptake inhibitor; strong muscarinic and H1 blockade; metabolized to **nortriptyline**.",
    indications: { approved: ["Major depression"], other: ["**Neuropathic pain** and **migraine prophylaxis** (10 to 75 mg)", "With chlordiazepoxide (Limbitrol) for mixed anxiety and depression"] },
    forms: "Tablets 10, 25, 50, 75, 100, 150 mg; injection 10 mg/mL",
    dose: { start: "25 mg at bedtime (10 mg for pain)", titration: "Raise as tolerated", range: "150 to 300 mg for depression; 10 to 75 mg for pain", max: "300 mg", notes: [] },
    effects: { common: ["**Heavy sedation**", "**Anticholinergic** effects", "Weight gain", "Orthostasis"], serious: ["Delirium in older adults", "Lethal in overdose"] },
    monitoring: ["ECG", "Level 100 to 250 ng/mL (with nortriptyline)"],
    profile: { sedation: "H", weight: "H", sexual: "M", ach: "H", ortho: "H", qtc: "H", overdose: "H", interact: "M" },
    drill: { mech: "Tertiary-amine dual reuptake TCA; strong **anticholinergic** and **H1**.", dose: "**150 to 300 mg** for depression; pain **10 to 75 mg**.", se: "Sedation, anticholinergic, weight gain, orthostasis.", mon: "ECG; level 100 to 250 ng/mL." },
    clues: ["the TCA most often used for chronic pain and migraine prophylaxis"],
    updates: []
  },
  {
    id: "nortriptyline", name: "Nortriptyline", brands: ["Pamelor", "Aventyl"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca-dose", book: true,
    summary: "Secondary-amine TCA with the least orthostasis and a therapeutic window of 50 to 150 ng/mL; a preferred TCA in older adults.",
    ind: ["mdd", "pain"],
    mechanism: "Secondary-amine TCA (demethylated amitriptyline); less anticholinergic than tertiary amines.",
    indications: { approved: ["Major depression"], other: ["Chronic pain (10 to 75 mg)"] },
    forms: "Capsules 10, 25, 50, 75 mg; solution 10 mg/5 mL",
    dose: { start: "25 mg a day", titration: "Most need about 75 mg for a level near 100 ng/mL", range: "50 to 150 mg", max: "150 mg", notes: ["Adjust to the therapeutic window."] },
    effects: { common: ["Mild anticholinergic effects", "Sedation (intermediate)"], serious: ["Conduction delay", "Lethal in overdose"] },
    monitoring: ["**Plasma level 50 to 150 ng/mL** (therapeutic window)", "ECG"],
    profile: { sedation: "M", weight: "M", sexual: "M", ach: "L", ortho: "L", qtc: "H", overdose: "H", interact: "M" },
    drill: { mech: "Secondary-amine TCA.", dose: "Start **25 mg**; about **75 mg** usual; max **150 mg**.", se: "Least **orthostasis** of the TCAs; mild anticholinergic.", mon: "**Therapeutic window 50 to 150 ng/mL**; ECG." },
    clues: ["the TCA with a therapeutic window of 50 to 150 ng/mL and the least orthostatic hypotension"],
    updates: []
  },
  {
    id: "clomipramine", name: "Clomipramine", brands: ["Anafranil"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca-ind", book: true,
    summary: "The most serotonergic TCA; U.S. approval only for OCD; lowers the seizure threshold; never with MAOIs.",
    ind: ["ocd", "mdd"],
    mechanism: "The most **serotonin-selective** TCA, a dual reuptake inhibitor.",
    indications: { approved: ["OCD (U.S.)"], other: ["Depression worldwide, especially with obsessive features", "Premature ejaculation", "Compulsive behavior in autism"] },
    forms: "Capsules 25, 50, 75 mg",
    dose: { start: "25 to 50 mg", titration: "Raise as tolerated", range: "130 to 250 mg", max: "250 mg; children 3 mg/kg or 200 mg", notes: [] },
    effects: { common: ["Anticholinergic effects", "Sedation", "Sexual dysfunction"], serious: ["**Seizures** (lowers threshold more than most TCAs)", "Serotonin syndrome with MAOIs"] },
    monitoring: ["ECG", "Level 50 to 250 ng/mL (limited data)"],
    interactions: ["**Never with MAOIs** (on the never-use list)."],
    profile: { sedation: "H", weight: "M", sexual: "H", ach: "H", ortho: "M", qtc: "M", overdose: "H", interact: "M" },
    drill: { mech: "The most **serotonergic** TCA.", dose: "**130 to 250 mg**; children max 3 mg/kg or 200 mg.", se: "Anticholinergic, sedation, **seizures**.", mon: "ECG." },
    clues: ["the TCA approved in the United States only for OCD"],
    updates: []
  },
  {
    id: "doxepin", name: "Doxepin", brands: ["Sinequan", "Adapin"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca-ind", book: true,
    summary: "The most antihistaminic TCA; FDA approved for anxiety; very sedating.",
    ind: ["mdd", "gad", "insomnia"],
    mechanism: "Tertiary-amine TCA with the **strongest H1 (and H2) blockade**.",
    indications: { approved: ["Depression", "Anxiety disorders"], other: ["Peptic ulcer disease (antihistamine effect)"] },
    forms: "Capsules 10 to 150 mg; solution 10 mg/mL",
    dose: { start: "25 mg at bedtime", titration: "Raise as tolerated", range: "150 to 300 mg", max: "300 mg", notes: [] },
    effects: { common: ["**Heavy sedation**", "Weight gain", "Anticholinergic effects"], serious: ["Lethal in overdose"] },
    monitoring: ["ECG", "Level 100 to 250 ng/mL"],
    profile: { sedation: "H", weight: "H", sexual: "M", ach: "H", ortho: "H", qtc: "H", overdose: "H", interact: "M" },
    drill: { mech: "Tertiary TCA, the most **antihistaminic**.", dose: "**150 to 300 mg**.", se: "Sedation, weight gain, anticholinergic.", mon: "ECG." },
    clues: ["the TCA with the most antihistamine activity, approved for anxiety"],
    updates: [
      { year: "2010", field: "indications", title: "Low-dose doxepin for insomnia", text: "Doxepin **3 and 6 mg** tablets (Silenor) are approved for **sleep-maintenance insomnia**; at these doses it acts almost purely as an H1 antagonist. Covered in section 21.5.", source: "Silenor prescribing information" }
    ]
  },
  {
    id: "trimipramine", name: "Trimipramine", brands: ["Surmontil"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca", book: true,
    summary: "Very sedating tertiary-amine TCA.",
    ind: ["mdd"],
    mechanism: "Tertiary-amine TCA with strong sedative (H1 and muscarinic) effects.",
    indications: { approved: ["Major depression"], other: [] },
    forms: "Capsules 25, 50, 100 mg",
    dose: { start: "25 mg", titration: "Raise as tolerated", range: "150 to 300 mg", max: "300 mg", notes: [] },
    effects: { common: ["**Heavy sedation**", "Anticholinergic effects"], serious: ["Lethal in overdose"] },
    monitoring: ["ECG", "Level 150 to 300 ng/mL"],
    profile: { sedation: "H", weight: "M", sexual: "M", ach: "H", ortho: "M", qtc: "H", overdose: "H", interact: "M" },
    drill: { mech: "Tertiary-amine TCA.", dose: "**150 to 300 mg**.", se: "Among the most sedating TCAs.", mon: "ECG." },
    clues: ["a tertiary-amine TCA as sedating as amitriptyline and doxepin"],
    updates: []
  },
  {
    id: "protriptyline", name: "Protriptyline", brands: ["Vivactil"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca-dose", book: true,
    summary: "Least sedating TCA with the longest half-life; low doses (15 to 60 mg).",
    ind: ["mdd"],
    mechanism: "Secondary-amine TCA.",
    indications: { approved: ["Major depression"], other: [] },
    forms: "Tablets 5, 10 mg",
    dose: { start: "15 mg", titration: "Up to 60 mg", range: "15 to 60 mg", max: "60 mg", notes: ["Taper by 5 mg every 4 to 7 days."] },
    half: "Particularly long",
    effects: { common: ["Activation rather than sedation", "Anticholinergic effects"], serious: ["Lethal in overdose"] },
    monitoring: ["ECG", "Level 75 to 250 ng/mL"],
    profile: { sedation: "L", weight: "L", sexual: "M", ach: "M", ortho: "M", qtc: "H", overdose: "H", interact: "M" },
    drill: { mech: "Secondary-amine TCA.", dose: "**15 to 60 mg**.", se: "Least sedating TCA (with desipramine).", mon: "ECG." },
    clues: ["the TCA dosed at only 15 to 60 mg a day with a particularly long half-life"],
    updates: []
  },
  {
    id: "amoxapine", name: "Amoxapine", brands: ["Asendin"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca-ae", book: true,
    summary: "TCA whose metabolite blocks dopamine: EPS, NMS, prolactin rise; may be the most lethal TCA in overdose.",
    ind: ["mdd"],
    mechanism: "Tetracyclic-related TCA; a metabolite (7-hydroxyamoxapine) has **dopamine receptor blocking** activity.",
    indications: { approved: ["Major depression"], other: [] },
    forms: "Tablets 25, 50, 100, 150 mg",
    dose: { start: "150 mg (book)", titration: "Up to 400 mg", range: "150 to 400 mg", max: "400 mg", notes: [] },
    effects: { common: ["**Parkinsonism, akathisia**", "Hyperprolactinemia: galactorrhea, impotence, anorgasmia"], serious: ["**Dyskinesia, NMS**", "Seizures", "Most lethal TCA in overdose"] },
    monitoring: ["EPS", "Prolactin symptoms", "ECG"],
    profile: { sedation: "M", weight: "M", sexual: "H", ach: "L", ortho: "M", qtc: "H", overdose: "H", interact: "M" },
    drill: { mech: "TCA with a **dopamine-blocking** metabolite.", dose: "**150 to 400 mg**.", se: "**EPS, NMS, prolactin**; seizures; deadly overdose.", mon: "EPS; ECG." },
    clues: ["the antidepressant that can cause parkinsonism and NMS because a metabolite blocks dopamine"],
    updates: []
  },
  {
    id: "maprotiline", name: "Maprotiline", brands: ["Ludiomil"], cls: "antidepressants", group: "tca", chapter: "ch21-2", sec: "s212-tca-dose", book: true,
    summary: "Tetracyclic, noradrenergic; seizures if titrated fast or kept high; rash in 4% to 5%.",
    ind: ["mdd"],
    mechanism: "Tetracyclic **norepinephrine** reuptake inhibitor; little anticholinergic effect.",
    indications: { approved: ["Major depression"], other: [] },
    forms: "Tablets 25, 50, 75 mg",
    dose: { start: "25 mg", titration: "Over 4 weeks to 225 mg; keep there only 6 weeks", range: "175 to 200 mg maintenance", max: "225 mg", notes: [] },
    half: "Long",
    effects: { common: ["**Rash** (4% to 5%)", "Sedation (intermediate)"], serious: ["**Seizures** with fast titration or prolonged high doses", "Cardiac decompensation with thyroid hormone"] },
    monitoring: ["Seizure risk", "ECG"],
    interactions: ["Avoid with **thyroid hormone** and sympathomimetics."],
    profile: { sedation: "M", weight: "M", sexual: "M", ach: "L", ortho: "M", qtc: "H", overdose: "H", interact: "L" },
    drill: { mech: "Tetracyclic **NE** reuptake inhibitor.", dose: "**25 mg** → **225 mg** over 4 weeks, only 6 weeks, then **175 to 200 mg**.", se: "**Seizures**, rash.", mon: "Seizure risk; ECG." },
    clues: ["the tetracyclic that causes seizures if raised too quickly and rash in 4% to 5%"],
    updates: []
  },
  /* ===================== MAOIs ===================== */
  {
    id: "phenelzine", name: "Phenelzine", brands: ["Nardil"], cls: "antidepressants", group: "maoi", chapter: "ch21-2", sec: "s212-maoi-dose", book: true,
    summary: "Irreversible hydrazine MAOI; best evidence in atypical depression and social phobia; tyramine diet; hepatotoxicity; weight gain and edema.",
    ind: ["mdd", "atypical", "panic", "social", "trd"],
    mechanism: "**Irreversible, nonselective** MAO-A and MAO-B inhibitor (hydrazine); amphetamine-like release of dopamine and norepinephrine.",
    indications: { approved: ["Depression, especially atypical"], other: ["Panic disorder, social phobia", "Bulimia, PTSD", "Bipolar depression"] },
    forms: "Tablets 15 mg",
    dose: { start: "Test dose 15 mg on day 1", titration: "15 mg three times daily in week 1; then +15 mg a day weekly", range: "30 to 60 mg", max: "90 mg a day in divided doses", notes: ["Effect persists up to 2 weeks after stopping."] },
    half: "2 to 3 hours (effect lasts up to 2 weeks)",
    effects: { common: ["**Orthostatic hypotension**", "Insomnia", "**Weight gain, edema**", "Sexual dysfunction", "Paresthesias (pyridoxine deficiency)"], serious: ["**Tyramine hypertensive crisis**", "Serotonin syndrome", "Hepatotoxicity"] },
    monitoring: ["**Liver tests** periodically", "Blood pressure", "Diet adherence"],
    interactions: ["See the never-use list: SSRIs, clomipramine, venlafaxine, meperidine, dextromethorphan, sympathomimetics, buspirone, levodopa.", "Washout 14 days after; 5 weeks after fluoxetine before."],
    pearls: ["Beat TCAs in atypical depression."],
    profile: { sedation: "L", weight: "H", sexual: "H", ach: "N", ortho: "H", qtc: "N", overdose: "H", interact: "H" },
    drill: { mech: "**Irreversible nonselective MAOI** (hydrazine).", dose: "Test **15 mg**; 15 mg three times daily; +15 mg weekly to **90 mg**.", se: "Orthostasis, weight gain, edema, sexual dysfunction; **hypertensive crisis**.", mon: "Liver tests; BP; diet." },
    clues: ["the MAOI shown to beat TCAs in atypical depression, dosed up to 90 mg"],
    updates: []
  },
  {
    id: "tranylcypromine", name: "Tranylcypromine", brands: ["Parnate"], cls: "antidepressants", group: "maoi", chapter: "ch21-2", sec: "s212-maoi-dose", book: true,
    summary: "Irreversible, amphetamine-like nonhydrazine MAOI; divide doses for orthostasis; inhibits CYP2C19.",
    ind: ["mdd", "trd"],
    mechanism: "**Irreversible nonselective MAOI** with amphetamine-like structure and stimulant effects.",
    indications: { approved: ["Major depression"], other: ["Treatment-resistant depression"] },
    forms: "Tablets 10 mg",
    dose: { start: "Test dose 10 mg", titration: "10 mg three times daily by end of week 1", range: "20 to 60 mg", max: "60 mg (many recommend 40 mg)", notes: ["Divide the dose to reduce hypotension."] },
    effects: { common: ["**Orthostatic hypotension**", "Insomnia, stimulation"], serious: ["**Tyramine hypertensive crisis**", "Spontaneous hypertensive crisis (rare)"] },
    monitoring: ["Blood pressure", "Diet adherence"],
    interactions: ["Inhibits **CYP2C19**.", "MAOI never-use list."],
    profile: { sedation: "N", weight: "M", sexual: "M", ach: "N", ortho: "H", qtc: "N", overdose: "H", interact: "H" },
    drill: { mech: "Irreversible, **amphetamine-like** MAOI.", dose: "Test **10 mg** → 10 mg three times daily; **20 to 60 mg**.", se: "Orthostasis (divide doses), insomnia; hypertensive crisis.", mon: "BP; diet." },
    clues: ["the amphetamine-like MAOI whose orthostatic hypotension is eased by dividing the daily dose"],
    updates: []
  },
  {
    id: "isocarboxazid", name: "Isocarboxazid", brands: ["Marplan"], cls: "antidepressants", group: "maoi", chapter: "ch21-2", sec: "s212-maoi-dose", book: true,
    summary: "Irreversible hydrazine MAOI; 10 mg tablets; check liver tests.",
    ind: ["mdd"],
    mechanism: "**Irreversible nonselective MAOI** (hydrazine).",
    indications: { approved: ["Depression"], other: [] },
    forms: "Tablets 10 mg",
    dose: { start: "Test dose 10 mg", titration: "10 mg three times daily by end of week 1", range: "20 to 40 mg", max: "60 mg (many recommend 50 mg)", notes: [] },
    effects: { common: ["Orthostasis", "Insomnia, weight gain, sexual dysfunction"], serious: ["Hypertensive crisis", "Hepatotoxicity"] },
    monitoring: ["**Liver tests**", "Blood pressure"],
    profile: { sedation: "L", weight: "M", sexual: "M", ach: "N", ortho: "H", qtc: "N", overdose: "H", interact: "H" },
    drill: { mech: "Irreversible hydrazine MAOI.", dose: "Test **10 mg**; **20 to 40 mg**; max 60 mg.", se: "Orthostasis; crisis; liver.", mon: "Liver tests; BP." },
    clues: ["the hydrazine MAOI sold as Marplan"],
    updates: []
  },
  {
    id: "selegiline-td", name: "Selegiline (transdermal)", brands: ["Emsam", "Eldepryl (oral)"], cls: "antidepressants", group: "maoi", chapter: "ch21-2", sec: "s212-maoi-dose", book: true,
    summary: "MAO-B selective at low doses, nonselective at higher doses; the transdermal patch is approved for depression; no diet needed at 6 mg/24 h.",
    ind: ["mdd"],
    mechanism: "Irreversible **MAO-B** inhibitor at low doses; inhibits MAO-A too as the dose rises. The patch bypasses gut MAO-A.",
    indications: { approved: ["Major depression (Emsam patch)", "Parkinson disease (oral)"], other: [] },
    forms: "Oral 5 mg tablets; transdermal patch 6, 9, 12 mg/24 h",
    dose: { start: "Patch 6 mg/24 h", titration: "Up by 3 mg/24 h every 2 or more weeks", range: "6 to 12 mg/24 h", max: "12 mg/24 h (oral 30 mg in the book)", notes: [] },
    effects: { common: ["Application-site reactions", "Insomnia"], serious: ["Hypertensive crisis at higher patch doses", "Serotonin syndrome"] },
    monitoring: ["Blood pressure"],
    profile: { sedation: "L", weight: "L", sexual: "L", ach: "N", ortho: "M", qtc: "N", overdose: "M", interact: "H" },
    drill: { mech: "**MAO-B** selective at low doses; transdermal avoids gut MAO-A inhibition.", dose: "Patch **6 → 9 → 12 mg/24 h**.", se: "Site reactions, insomnia; crisis at high doses.", mon: "BP." },
    clues: ["the MAOI given as a skin patch, with no tyramine diet at its lowest dose"],
    updates: [
      { field: "indications", title: "Correction: Emsam's indication", text: "The book says Emsam is used for parkinsonism. Emsam (2006) is approved for **major depressive disorder** in adults; tyramine restrictions apply only at **9 and 12 mg/24 h**. Contraindicated under age 12.", source: "Emsam prescribing information" }
    ]
  },
  {
    id: "moclobemide", name: "Moclobemide", brands: ["Manerix"], cls: "antidepressants", group: "maoi", chapter: "ch21-2", sec: "s212-maoi", book: true,
    summary: "Reversible MAO-A inhibitor (RIMA), not available in the United States; looser diet; MAO recovers in 24 to 48 hours.",
    ind: ["mdd", "social"],
    mechanism: "**Reversible inhibitor of MAO-A** (RIMA); little MAO-B effect.",
    indications: { approved: ["Depression (outside the United States)"], other: ["Social anxiety"] },
    forms: "Tablets 100, 150 mg",
    dose: { start: "300 mg a day in divided doses", titration: "—", range: "300 to 600 mg", max: "600 mg", notes: ["Avoid tyramine from 1 hour before to 2 hours after a dose."] },
    half: "0.5 to 3.5 hours",
    effects: { common: ["Dizziness, nausea, insomnia"], serious: ["Mild overdose toxicity"] },
    interactions: ["Inhibits 2D6, 2C19, 1A2; cimetidine and fluoxetine slow its elimination."],
    pearls: ["No anticholinergic, cardiovascular or sexual side effects."],
    profile: { sedation: "N", weight: "N", sexual: "N", ach: "N", ortho: "L", qtc: "N", overdose: "L", interact: "M" },
    drill: { mech: "**RIMA**: reversible MAO-A inhibitor.", dose: "**300 to 600 mg** a day.", se: "Dizziness, nausea, insomnia; no sexual effects.", mon: "—" },
    clues: ["the reversible MAO-A inhibitor not available in the United States"],
    updates: []
  },
  /* ===================== rapid-acting ===================== */
  {
    id: "esketamine", name: "Esketamine", brands: ["Spravato"], cls: "antidepressants", group: "rapid", chapter: "ch21-2", sec: "s212-ketamine", book: true,
    summary: "Nasal-spray NMDA antagonist (S-ketamine) for treatment-resistant depression and depression with suicidality; 2-hour observation in certified clinics; dissociation and BP rise.",
    ind: ["trd", "suicidal"],
    mechanism: "Noncompetitive **NMDA receptor antagonist**; inhibits dopamine transporters; unlike ketamine, **no sigma receptor** activity.",
    indications: { approved: ["Treatment-resistant depression (2019)"], other: [] },
    forms: "Nasal spray device, 28 mg per device",
    dose: { start: "56 mg on day 1 (label)", titration: "56 or 84 mg twice weekly, weeks 1 to 4", range: "Weekly in weeks 5 to 8, then weekly or every 2 weeks", max: "84 mg per session", notes: ["Give in a certified setting; observe at least **2 hours**.", "No food 2 hours or drink 30 minutes before."] },
    effects: { common: ["**Dissociation**, sedation, dizziness", "Nausea, vertigo", "Visual and speech difficulties"], serious: ["**Raised blood pressure**", "Confusion, delirium", "Abuse potential (CIII)"] },
    monitoring: ["BP before and after dosing", "Sedation and dissociation for 2 hours", "No driving until the next day"],
    profile: { sedation: "H", weight: "N", sexual: "N", ach: "N", ortho: "N", qtc: "N", overdose: "L", interact: "N" },
    drill: { mech: "**NMDA antagonist** (S-enantiomer of ketamine); no sigma activity.", dose: "**56 mg** day 1, then 56 or **84 mg twice weekly** for 4 weeks, then weekly, then weekly or every 2 weeks.", se: "Dissociation, sedation, **BP rise**, nausea.", mon: "**2-hour observation**; BP; REMS." },
    clues: ["the nasal spray antidepressant that requires 2 hours of observation after each dose"],
    updates: [
      { field: "indications", title: "Correction: brand and form", text: "In the United States esketamine is **Spravato**, a nasal spray only, **Schedule III**, through a **REMS**. 'Ketanest' is an older European injectable brand.", source: "Spravato prescribing information" },
      { year: "2020–2025", field: "indications", title: "New indications", text: "With an oral antidepressant, for **depressive symptoms with acute suicidal ideation or behavior** (2020); as **monotherapy** for treatment-resistant depression (**January 2025**; 4-week remission 22.5% vs 7.6%).", source: "Johnson & Johnson announcement, January 21, 2025; Spravato prescribing information" }
    ]
  },
  {
    id: "ketamine", name: "Ketamine", brands: ["Ketalar"], cls: "antidepressants", group: "rapid", chapter: "ch21-2", sec: "s212-ketamine", book: "list",
    summary: "Anesthetic NMDA antagonist used off-label at subanesthetic IV doses for rapid antidepressant effect within hours; relapse after weeks; psychotomimetic.",
    ind: ["trd"],
    mechanism: "Noncompetitive **NMDA receptor antagonist**; also acts at sigma receptors.",
    indications: { approved: ["Anesthesia (not approved for any psychiatric disorder)"], other: ["Treatment-resistant depression in specialized centers (single low IV dose)"] },
    forms: "Injection",
    dose: { start: "Single subanesthetic IV dose (much lower than anesthetic doses)", titration: "—", range: "—", max: "—", notes: ["Effect within about 4 hours; lasts weeks."] },
    effects: { common: ["Dissociation, psychotomimetic effects", "Raised BP"], serious: ["Respiratory depression", "Bradycardia", "Abuse"] },
    monitoring: ["Breathing, heart rate and BP during and after infusion"],
    profile: { sedation: "H", weight: "N", sexual: "N", ach: "N", ortho: "N", qtc: "N", overdose: "M", interact: "N" },
    drill: { mech: "**NMDA antagonist** (also sigma).", dose: "Single **subanesthetic IV** dose in specialized centers.", se: "Dissociation, psychotomimetic effects, BP; respiratory depression.", mon: "Vital signs and breathing." },
    clues: ["the anesthetic that relieves depression within hours of a single IV dose"],
    updates: [
      { year: "2023", title: "FDA warning on compounded ketamine", text: "The FDA warned in **October 2023** against **compounded and at-home ketamine** for psychiatric use: unapproved, with risks of sedation, dissociation, BP rise, respiratory depression, abuse and bladder injury.", source: "FDA, compounded ketamine warning, October 2023" }
    ]
  },
  {
    id: "brexanolone", name: "Brexanolone", brands: ["Zulresso"], cls: "antidepressants", group: "rapid", chapter: "ch21-2", sec: "s212-gaba", book: true,
    summary: "IV allopregnanolone (GABAA positive allosteric modulator) for postpartum depression: a 60-hour infusion; discontinued at the end of 2024.",
    ind: ["ppd"],
    mechanism: "Neurosteroid **positive allosteric modulator of GABAA** receptors; negative modulator at nicotinic receptors.",
    indications: { approved: ["Postpartum depression (2019)"], other: [] },
    forms: "IV infusion",
    dose: { start: "Continuous IV infusion over **60 hours**", titration: "Dose raised gradually during the infusion", range: "—", max: "—", notes: ["Inpatient, to prevent excess sedation and syncope.", "About $34,000 per treatment (book)."] },
    effects: { common: ["Sedation, somnolence", "Dizziness"], serious: ["**Excessive sedation and loss of consciousness**", "Syncope"] },
    monitoring: ["Continuous monitoring during the infusion"],
    profile: { sedation: "H", weight: "N", sexual: "N", ach: "N", ortho: "M", qtc: "N", overdose: "L", interact: "N" },
    drill: { mech: "**Allopregnanolone**: GABAA positive allosteric modulator.", dose: "**60-hour continuous IV infusion**.", se: "Sedation, loss of consciousness, syncope.", mon: "Continuous inpatient monitoring." },
    clues: ["the neurosteroid given as a 60-hour IV infusion for postpartum depression"],
    updates: [
      { year: "2022–2024", title: "Teen approval, then discontinued", text: "Approved for ages **15 and older** in June 2022; withdrawn from sale after **December 31, 2024** in favor of oral zuranolone.", source: "Sage Therapeutics third-quarter 2024 report, October 29, 2024; Zulresso prescribing information" }
    ]
  },
  /* ===================== approved after the 12th edition ===================== */
  {
    id: "zuranolone", name: "Zuranolone", brands: ["Zurzuvae"], cls: "antidepressants", group: "newad", chapter: "ch21-2", sec: "s212-gaba", book: false,
    summary: "Oral neuroactive steroid (GABAA positive allosteric modulator) for postpartum depression: 50 mg nightly with fat-containing food for 14 days; no driving for 12 hours after each dose.",
    ind: ["ppd"],
    mechanism: "Oral neuroactive steroid **GABAA positive allosteric modulator** (synaptic and extrasynaptic receptors).",
    indications: { approved: ["Postpartum depression in adults (August 2023)"], other: [] },
    forms: "Capsules 20, 25, 30 mg",
    dose: { start: "50 mg once daily in the evening with fat-containing food", titration: "None; a single 14-day course", range: "50 mg (40 mg if CNS depressant effects)", max: "50 mg; 30 mg with strong CYP3A4 inhibitors", notes: ["Total course **14 days**."] },
    effects: { common: ["Somnolence, dizziness", "Fatigue, diarrhea"], serious: ["**Impaired driving** (boxed warning)", "CNS depression with alcohol or other depressants", "Suicidality warning (antidepressant class)"] },
    monitoring: ["No driving or hazardous work for **12 hours** after each dose"],
    interactions: ["Strong CYP3A4 inhibitors: 30 mg; avoid strong inducers.", "Additive CNS depression."],
    pearls: ["Schedule IV.", "The FDA declined approval for general MDD."],
    profile: { sedation: "H", weight: "N", sexual: "N", ach: "N", ortho: "N", qtc: "N", overdose: "L", interact: "M" },
    drill: { mech: "Oral **neuroactive steroid**, GABAA positive allosteric modulator.", dose: "**50 mg** each evening **with fatty food** for **14 days**.", se: "Somnolence, dizziness; **boxed warning: no driving for 12 hours**.", mon: "Driving restriction; sedation." },
    clues: ["the oral 14-day treatment for postpartum depression with a 12-hour driving restriction"],
    updates: [
      { year: "2023", title: "Approval", text: "Approved **August 4, 2023** for postpartum depression; the MDD application received a complete response letter.", source: "Biogen and Sage announcement, August 4, 2023; Zurzuvae prescribing information" }
    ]
  },
  {
    id: "dextromethorphan-bupropion", name: "Dextromethorphan–bupropion", brands: ["Auvelity"], cls: "antidepressants", group: "newad", chapter: "ch21-2", sec: "s212-bup", book: false,
    summary: "Oral NMDA antagonist plus bupropion (which inhibits CYP2D6 to raise dextromethorphan levels); MDD from 2022 with effect from week 1; Alzheimer agitation from 2026.",
    ind: ["mdd", "ad-agitation"],
    mechanism: "**Dextromethorphan**: NMDA antagonist and sigma-1 agonist (also serotonin and norepinephrine reuptake inhibition). **Bupropion**: NDRI and **CYP2D6 inhibitor** that boosts dextromethorphan.",
    indications: { approved: ["Major depression in adults (August 2022)", "Agitation in dementia due to Alzheimer disease (April 2026)"], other: [] },
    forms: "Extended-release tablets 45 mg dextromethorphan / 105 mg bupropion",
    dose: { start: "1 tablet each morning for 3 days", titration: "Then 1 tablet twice daily, at least 8 hours apart", range: "2 tablets a day", max: "2 tablets a day (1 a day with strong CYP2D6 inhibitors or moderate renal impairment)", notes: [] },
    effects: { common: ["Dizziness, headache, diarrhea, somnolence, dry mouth", "Sexual dysfunction (low)"], serious: ["**Seizures** (bupropion)", "Serotonin syndrome", "Hypertension"] },
    monitoring: ["Blood pressure", "Seizure risk factors"],
    interactions: ["Contraindicated with MAOIs and in seizure or eating disorders.", "Strong CYP2D6 inhibitors: 1 tablet a day; strong inducers: avoid."],
    profile: { sedation: "L", weight: "N", sexual: "L", ach: "N", ortho: "N", qtc: "N", overdose: "M", interact: "H" },
    drill: { mech: "**NMDA antagonist** (dextromethorphan) boosted by bupropion's **CYP2D6** inhibition.", dose: "**45/105 mg** each morning for 3 days, then **twice daily**.", se: "Dizziness, headache; bupropion **seizure** risk.", mon: "BP; seizure risks." },
    clues: ["the oral NMDA antagonist combination approved for depression in 2022 and Alzheimer agitation in 2026"],
    updates: [
      { year: "2022–2026", title: "Approvals", text: "MDD in **August 2022** (rapid onset from week 1 in trials); **agitation in Alzheimer dementia** in **April 2026**, the first non-antipsychotic for that indication.", source: "Auvelity prescribing information; Axsome announcements, August 2022 and April 2026" }
    ]
  },
  {
    id: "gepirone", name: "Gepirone ER", brands: ["Exxua"], cls: "antidepressants", group: "newad", chapter: "ch21-2", sec: "s212-newer", book: false,
    summary: "Selective 5-HT1A agonist approved for MDD in 2023; sexual side effects like placebo; QTc prolongation, so baseline ECG and no use above 450 ms.",
    ind: ["mdd"],
    mechanism: "Selective **5-HT1A receptor agonist** (an azapirone, like buspirone).",
    indications: { approved: ["Major depression in adults (September 2023)"], other: [] },
    forms: "Extended-release tablets 18.2, 36.3, 54.5, 72.6 mg",
    dose: { start: "18.2 mg once daily with food", titration: "36.3 mg on day 4; 54.5 mg after day 7; 72.6 mg after another week", range: "18.2 to 72.6 mg", max: "72.6 mg (36.3 mg over 65, CrCl under 50, or moderate hepatic impairment)", notes: ["Halve with moderate CYP3A4 inhibitors."] },
    effects: { common: ["**Dizziness, nausea** during titration", "Insomnia"], serious: ["**QTc prolongation**"] },
    monitoring: ["**ECG** at baseline, during titration and periodically", "Electrolytes"],
    interactions: ["**Strong CYP3A4 inhibitors contraindicated**; moderate inhibitors: halve the dose.", "MAOIs contraindicated."],
    pearls: ["Contraindicated with baseline **QTc above 450 ms**, congenital long QT, or severe hepatic impairment."],
    profile: { sedation: "L", weight: "N", sexual: "N", ach: "N", ortho: "N", qtc: "M", overdose: "L", interact: "M" },
    drill: { mech: "Selective **5-HT1A agonist**.", dose: "**18.2 mg** → 36.3 → 54.5 → **72.6 mg** once daily with food.", se: "Dizziness, nausea; **QTc prolongation**; little sexual dysfunction.", mon: "**ECG** baseline and during titration." },
    clues: ["the 5-HT1A agonist antidepressant approved in 2023 that needs a baseline ECG"],
    updates: [
      { year: "2023", title: "Approval", text: "Approved **September 2023** for MDD in adults.", source: "FDA approval letter, September 2023; Exxua prescribing information" }
    ]
  },
  /* ===================== augmenters ===================== */
  {
    id: "liothyronine", name: "Liothyronine (T3)", brands: ["Cytomel"], cls: "antidepressants", group: "augment", chapter: "ch21-2", sec: "s212-thyroid", book: true,
    summary: "Thyroid hormone used at 25 to 50 µg to augment antidepressants; converts about half of nonresponders; avoid in cardiac disease.",
    ind: ["mdd-adj"],
    mechanism: "Active thyroid hormone acting on intracellular receptors that regulate many genes; antidepressant mechanism unknown.",
    indications: { approved: ["Hypothyroidism"], other: ["**Augmentation** of antidepressants after a failed 6-week trial", "Rapid-cycling bipolar disorder"] },
    forms: "Tablets 5, 25, 50 µg",
    dose: { start: "25 µg a day added to the antidepressant", titration: "25 or 50 µg; trial of 2 to 3 weeks", range: "25 to 50 µg", max: "50 µg for augmentation", notes: ["If effective, continue 2 months, then taper 12.5 µg every 3 to 7 days."] },
    half: "1 to 2 days (T4 6 to 7 days)",
    effects: { common: ["Headache, palpitations, nervousness, tremor, insomnia, sweating, diarrhea"], serious: ["Arrhythmia, angina", "Osteoporosis long term (not seen in T3 augmentation studies)"] },
    monitoring: ["Heart rate and cardiac symptoms", "Thyroid tests"],
    interactions: ["Potentiates **warfarin**; raises insulin and digitalis needs.", "Avoid with sympathomimetics, ketamine, maprotiline."],
    pearls: ["Contraindicated in cardiac disease, angina, hypertension, thyrotoxicosis, uncorrected adrenal insufficiency."],
    profile: { sedation: "N", weight: "N", sexual: "N", ach: "N", ortho: "N", qtc: "N", overdose: "M", interact: "L" },
    drill: { mech: "Active thyroid hormone (T3) on nuclear receptors.", dose: "**25 to 50 µg** a day; trial 2 to 3 weeks; continue 2 months; taper 12.5 µg every 3 to 7 days.", se: "Palpitations, tremor, insomnia; avoid in heart disease.", mon: "Cardiac symptoms; thyroid tests." },
    clues: ["the thyroid hormone added at 25 to 50 µg to convert antidepressant nonresponders"],
    updates: []
  }
]);
