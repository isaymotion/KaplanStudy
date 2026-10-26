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
