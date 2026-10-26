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
