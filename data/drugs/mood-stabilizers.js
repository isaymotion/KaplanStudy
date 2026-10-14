/* Drug reference: mood stabilizers, other anticonvulsants and calcium channel blockers. Source: Kaplan & Sadock's Synopsis of
   Psychiatry, 12th ed., section 21.3, unless a field sits inside an `updates` entry, which marks information published after the
   12th edition (or a correction), with its source. Profile levels: N none or minimal, L low, M moderate, H high. */
KS.drugClasses = (KS.drugClasses || []).concat([
  {
    id: "mood-stabilizers", label: "Mood stabilizers", singular: "mood stabilizer", chapter: "ch21-3",
    intro: "Lithium remains the reference mood stabilizer, with the strongest evidence for maintenance and suicide prevention. Valproate and carbamazepine treat mania; lamotrigine prevents bipolar depression. Other anticonvulsants and calcium channel blockers are adjuncts or second-line options.",
    groups: [
      { id: "lithium", label: "Lithium", short: "Lithium" },
      { id: "acms", label: "Anticonvulsant mood stabilizers", short: "Anticonvulsant mood stabilizers" },
      { id: "otherac", label: "Other anticonvulsants used in psychiatry", short: "Other anticonvulsants" },
      { id: "ccb", label: "Calcium channel blockers", short: "Calcium channel blockers" }
    ],
    profile: [
      ["weight", "Weight gain"], ["sedation", "Sedation"], ["cognitive", "Cognitive effects"], ["rash", "Serious rash"],
      ["blood", "Blood dyscrasias"], ["liver", "Liver toxicity"], ["renal", "Renal or electrolyte"], ["teratogen", "Teratogenicity"], ["interact", "Drug interactions"]
    ],
    lowFilters: [["weight", "Low weight gain"], ["sedation", "Low sedation"], ["teratogen", "Lower pregnancy risk"], ["interact", "Few interactions"], ["rash", "Low rash risk"]],
    indications: {
      mania: "Acute mania", "bp-maint": "Bipolar maintenance", "bp-dep": "Bipolar depression", rapid: "Rapid or ultradian cycling",
      "mdd-adj": "Augmenting an antidepressant", aggression: "Aggression", epilepsy: "Epilepsy", migraine: "Migraine prevention",
      pain: "Neuropathic pain", gad: "Generalized anxiety", alcohol: "Alcohol use disorder", weightloss: "Weight loss or binge eating (off-label)"
    }
  }
]);

KS.drugs = (KS.drugs || []).concat([
  {
    id: "lithium", name: "Lithium", brands: ["Eskalith", "Lithobid", "Lithotabs", "lithium citrate"], cls: "mood-stabilizers", group: "lithium", chapter: "ch21-3", sec: "s213-li", book: true,
    summary: "Alkali metal ion cleared only by the kidneys; mania, maintenance and suicide prevention; narrow therapeutic index; renal, thyroid and cardiac effects; Ebstein anomaly.",
    ind: ["mania", "bp-maint", "bp-dep", "mdd-adj", "aggression"],
    mechanism: "Unknown; theories involve ion transport, neurotransmitters, signal transduction and second messengers.",
    indications: {
      approved: ["Manic episodes of bipolar I disorder", "Maintenance treatment of bipolar disorder"],
      other: ["Bipolar depression; bipolar II; rapid cycling; cyclothymia", "Augmentation in major depression (300 mg three times daily)", "Schizoaffective disorder and antipsychotic augmentation", "Aggression, conduct disorder, self-injury in intellectual disability"]
    },
    forms: "Carbonate capsules 150, 300, 600 mg; tablets 300 mg; controlled release 450 mg; citrate syrup 8 mEq/5 mL",
    dose: { start: "300 mg three times daily (300 mg once or twice daily in older adults or renal impairment)", titration: "To level; 900 to 1,200 mg gives about 0.6 to 1.0 mEq/L", range: "Mania 1,200 to 1,800 mg (1.0 to 1.2 mEq/L); maintenance 900 to 1,200 mg (0.4 to 0.8 in the book)", max: "By level and toxicity", notes: ["Once daily sustained release after the dose is set.", "Taper slowly when stopping."] },
    half: "18 to 24 hours in young adults; longer in older adults",
    pk: ["Not protein bound, not metabolized; renal excretion.", "Peak 1 to 1.5 hours (standard), 4 to 4.5 hours (slow release); steady state in 5 to 7 days.", "Clearance rises in pregnancy and falls after delivery."],
    effects: {
      common: ["**Polyuria and thirst** (nephrogenic DI, 25% to 35%)", "Fine **postural tremor**", "Nausea, diarrhea", "**Weight gain**, edema", "Cognitive dulling", "Acne, psoriasis, hair loss", "Benign leukocytosis"],
      serious: ["**Toxicity** (ataxia, dysarthria, coarse tremor, seizures, coma)", "**Hypothyroidism**, goiter; hyperparathyroidism", "Chronic **interstitial nephropathy**", "**Sinus node dysfunction**; unmasking of Brugada syndrome", "**Ebstein anomaly** with first-trimester exposure"]
    },
    monitoring: ["Baseline creatinine, electrolytes, thyroid tests, CBC, ECG, pregnancy test", "Level 12 hours after dose at steady state; every 2 to 6 months", "Creatinine and urine studies every 6 months; TSH every 6 to 12 months; ECG yearly"],
    interactions: ["**Raise** lithium: NSAIDs (not aspirin or sulindac), **thiazides**, **ACE inhibitors**, metronidazole, tetracycline, dehydration, low salt.", "**Lower** lithium: caffeine, theophylline, osmotic diuretics, acetazolamide, bicarbonate.", "**Calcium channel blockers**: neurotoxicity. Antipsychotics: rare encephalopathy, NMS. Stop 2 days before ECT."],
    populations: [["Pregnancy", "Avoid in the first trimester (Ebstein anomaly 1 in 1,000); monitor levels closely after delivery; postpartum prophylaxis for all women with bipolar disorder"], ["Older adults", "Lower doses; toxicity near the top of the range"], ["Sick sinus syndrome", "Contraindicated"]],
    pearls: ["**Activated charcoal does not bind lithium**; hemodialysis above 4.0 mEq/L.", "Reduces suicide six- to sevenfold.", "Losartan and irbesartan do not change lithium levels."],
    profile: { weight: "M", sedation: "L", cognitive: "M", rash: "N", blood: "N", liver: "N", renal: "H", teratogen: "M", interact: "H" },
    drill: { mech: "Monovalent ion; mechanism unknown; **renal** excretion only.", dose: "**300 mg three times daily**; book mania **1.0 to 1.2**, maintenance **0.4 to 0.8 mEq/L** (label 0.8 to 1.0).", se: "Polyuria, tremor, hypothyroidism, weight gain, acne; **toxicity** with NSAIDs, thiazides, ACE inhibitors.", mon: "Levels 12 hours post-dose; creatinine, TSH, ECG." },
    clues: ["the mood stabilizer that is not metabolized and is cleared only by the kidneys", "linked to Ebstein anomaly and nephrogenic diabetes insipidus"],
    updates: [
      { year: "2018–2019", field: "dose", title: "Current label and consensus levels", text: "Label: titrate by 300 mg every 3 days; acute **0.8 to 1.2 mEq/L**, maintenance **0.8 to 1.0**; approved from **age 7**; not recommended if creatinine clearance is **under 30 mL/min**. ISBD/IGSLi (2019): standard maintenance **0.60 to 0.80 mmol/L**; 0.40 to 0.60 for most older adults.", source: "Lithium carbonate prescribing information (2018 and later); Nolen WA et al., ISBD/IGSLi task force on the optimal lithium level, Bipolar Disorders, 2019" }
    ]
  },
  {
    id: "valproate", name: "Valproate (divalproex)", brands: ["Depakote", "Depakote ER", "Depakene", "Depacon"], cls: "mood-stabilizers", group: "acms", chapter: "ch21-3", sec: "s213-vpa", book: true,
    summary: "Fast-acting antimanic that can be loaded; good for mixed, irritable and rapid-cycling mania; boxed warnings for hepatotoxicity, pancreatitis and teratogenicity; doubles lamotrigine.",
    ind: ["mania", "bp-maint", "rapid", "epilepsy", "migraine"],
    mechanism: "Possibly **enhances GABA**, modulates voltage-sensitive **sodium channels**, and affects neuropeptides.",
    indications: {
      approved: ["Manic episodes of bipolar I disorder", "Complex partial and absence seizures", "Migraine prophylaxis (divalproex)"],
      other: ["Bipolar maintenance (at least as effective as lithium)", "Rapid cycling, mixed or dysphoric mania, comorbid substance use", "Adjunct in schizophrenia and schizoaffective disorder"]
    },
    forms: "Divalproex delayed release 125, 250, 500 mg; sprinkle 125 mg; ER 250, 500 mg; valproic acid capsules 250 mg and syrup 250 mg/5 mL; IV 100 mg/mL",
    dose: { start: "Mania: oral load 20 to 30 mg/kg a day; otherwise 250 mg with a meal", titration: "To 250 mg three times daily over 3 to 6 days, then to level", range: "1,200 to 1,500 mg a day; level 50 to 125 µg/mL", max: "By level (label up to 60 mg/kg a day)", notes: ["Draw levels in the morning before the first dose.", "Once stable, the whole dose can be given at bedtime."] },
    half: "10 to 16 hours",
    pk: ["Highly protein bound; binding saturates at higher levels, raising free drug.", "Glucuronidation and mitochondrial β-oxidation."],
    effects: {
      common: ["**Nausea**, GI upset (less with divalproex)", "**Sedation, tremor**", "**Weight gain**", "**Hair loss** (5% to 10%)", "Benign transaminase rise (5% to 40%)"],
      serious: ["**Hepatotoxicity** (mainly young children)", "**Pancreatitis**", "**Hyperammonemia** and encephalopathy", "**Thrombocytopenia** (levels ≥110 women, ≥135 men)", "**Neural tube defects**, lower IQ, autism", "PCOS, hirsutism"]
    },
    monitoring: ["Baseline liver panel, CBC with platelets, pregnancy test", "Liver tests and CBC at 1 month, then every 6 to 24 months", "Teach symptoms of liver and pancreatic toxicity"],
    interactions: ["**Doubles lamotrigine** (SJS/TEN risk): halve lamotrigine titration.", "Raises carbamazepine epoxide, diazepam, phenobarbital, TCAs; lowers phenytoin.", "Carbamazepine lowers valproate; fluoxetine, amitriptyline and guanfacine raise it; aspirin displaces it."],
    populations: [["Pregnancy", "The most teratogenic mood stabilizer; folate 1 to 4 mg (book)"], ["Breastfeeding", "Not contraindicated (infant levels 1% to 10%)"], ["Urea cycle disorders", "Contraindicated"]],
    pearls: ["Preferred over lithium in children and older adults in the book.", "False-positive urine ketones."],
    profile: { weight: "H", sedation: "M", cognitive: "L", rash: "L", blood: "M", liver: "H", renal: "L", teratogen: "H", interact: "H" },
    drill: { mech: "Enhances **GABA**; sodium channel modulation.", dose: "Load **20 to 30 mg/kg**; or 250 mg → 250 mg three times daily; usual **1,200 to 1,500 mg**; level **50 to 125 µg/mL**.", se: "Nausea, tremor, **weight gain, hair loss**; **liver, pancreas**, ammonia, platelets; **neural tube defects**.", mon: "Liver tests and CBC with platelets at baseline, 1 month, then every 6 to 24 months; pregnancy test." },
    clues: ["the mood stabilizer that can be orally loaded at 20 to 30 mg/kg and that doubles lamotrigine levels", "the most teratogenic mood stabilizer, linked to neural tube defects and lower IQ"],
    updates: [
      { year: "2024", field: "populations", title: "UK and EU restrictions", text: "UK (January 2024): no new starts **under 55** without two specialists; annual reviews for women and girls. EU (January 2024): precautions for **men**, because of possible neurodevelopmental risk in children of treated fathers.", source: "MHRA, new valproate safety measures, January 2024; European Medicines Agency, 26 January 2024" },
      { field: "dose", title: "Label dose check", text: "Depakote (delayed release) for mania starts at **750 mg a day** in divided doses; Depakote ER at **25 mg/kg once daily**; maximum **60 mg/kg a day**. Contraindicated in pregnancy for migraine prophylaxis.", source: "Depakote and Depakote ER prescribing information" }
    ]
  },
  {
    id: "lamotrigine", name: "Lamotrigine", brands: ["Lamictal", "Lamictal ODT", "Lamictal XR"], cls: "mood-stabilizers", group: "acms", chapter: "ch21-3", sec: "s213-ltg", book: true,
    summary: "Sodium channel blocker approved for bipolar I maintenance; prevents depression more than mania; no weight gain; slow titration to avoid SJS/TEN; halve with valproate.",
    ind: ["bp-maint", "bp-dep", "rapid", "epilepsy"],
    mechanism: "Blocks voltage-sensitive **sodium channels**, reducing **glutamate** and aspartate release; slight calcium channel effect.",
    indications: { approved: ["Maintenance of bipolar I disorder (2003)", "Epilepsy"], other: ["Rapid cycling", "Bipolar depression (not approved for acute treatment)", "Borderline personality disorder, pain (reports)"] },
    forms: "Tablets 25, 100, 150, 200 mg; ODT 25, 50, 100, 200 mg; chewable dispersible 2, 5, 25 mg",
    dose: { start: "25 mg a day (25 mg every other day with valproate; 50 mg with carbamazepine)", titration: "50 mg at weeks 3–4, then up", range: "100 to 200 mg once daily", max: "200 mg (100 with valproate; 400 with carbamazepine)", notes: ["Restart titration after more than 4 days off (book).", "Taper over 2 weeks, or 1 to 2 days if rash."] },
    half: "About 25 hours (varies sixfold with other drugs)",
    effects: { common: ["Dizziness, ataxia, somnolence, headache, diplopia, blurred vision, nausea"], serious: ["**Rash** (8% benign) and **SJS/TEN** (0.08% to 0.13%)"] },
    monitoring: ["Teach to report any rash", "No useful blood levels"],
    interactions: ["**Valproate doubles** lamotrigine; lamotrigine lowers valproate 25%.", "**Carbamazepine, phenytoin, phenobarbital** lower it 40% to 50%.", "Sertraline raises it slightly."],
    pearls: ["No sedation, weight gain or metabolic effects.", "Stabilizes mood from below."],
    profile: { weight: "N", sedation: "L", cognitive: "L", rash: "H", blood: "L", liver: "N", renal: "N", teratogen: "L", interact: "M" },
    drill: { mech: "**Sodium channel** blocker; reduces glutamate release.", dose: "**25 → 50 → 100 → 200 mg**; with valproate **25 mg every other day**, max 100; with carbamazepine 50 → up to 400.", se: "**Rash/SJS**; dizziness, diplopia; no weight gain.", mon: "Watch for any rash; restart titration after a gap." },
    clues: ["the mood stabilizer that delays bipolar depression and must be titrated slowly to avoid Stevens–Johnson syndrome"],
    updates: [
      { field: "indications", title: "Correction: age", text: "Approved for epilepsy from **age 2** and bipolar maintenance in **adults**; the book's 'not under 16' reflects higher rash risk in children, not a contraindication.", source: "Lamictal prescribing information" },
      { year: "2018–2021", field: "effects", title: "HLH and arrhythmia warnings", text: "**HLH** (April 2018): fever, rash, organomegaly, cytopenias, high ferritin. **Arrhythmia** (March 2021): class IB activity; weigh risk in structural or ischemic heart disease.", source: "FDA Drug Safety Communications on lamotrigine, April 2018 and March 2021" },
      { field: "dose", title: "Label dose check", text: "Full bipolar titration: alone 25, 25, 50, 50, 100, **200 mg** (weeks 1–6); with valproate 25 every other day ×2 weeks, 25 ×2 weeks, 50, **100 mg**; with inducers 50, 50, 100, 100, 200, 300, **400 mg**. **Estrogen contraceptives** lower levels by about half.", source: "Lamictal prescribing information" }
    ]
  },
  {
    id: "carbamazepine", name: "Carbamazepine", brands: ["Tegretol", "Tegretol XR", "Carbatrol", "Equetro"], cls: "mood-stabilizers", group: "acms", chapter: "ch21-3", sec: "s213-cbz", book: true,
    summary: "Imipramine-like anticonvulsant approved for mania (Equetro); autoinduces CYP3A4 and lowers many drugs; agranulocytosis, SJS/TEN (HLA-B*15:02), hyponatremia; no weight gain.",
    ind: ["mania", "bp-maint", "rapid", "aggression", "epilepsy", "pain"],
    mechanism: "Binds inactivated **sodium channels** and prolongs inactivation; reduces NMDA currents; adenosine A1 antagonism.",
    indications: { approved: ["Acute manic and mixed episodes (Equetro, 2004)", "Epilepsy (complex partial seizures)", "Trigeminal neuralgia"], other: ["Lithium nonresponders: dysphoric mania, rapid cycling", "Prophylaxis in bipolar II and schizoaffective disorder", "Refractory depression", "Alcohol withdrawal; impulsive aggression"] },
    forms: "Tablets; Tegretol XR 100, 200, 300 mg; Carbatrol/Equetro capsules 100, 200, 300 mg",
    dose: { start: "200 mg at bedtime (600 to 800 mg divided for manic inpatients)", titration: "Slowly; expect autoinduction at 2 to 3 weeks", range: "About 1,200 mg a day for mania; level 4 to 12 µg/mL", max: "By level and side effects (most above 9 µg/mL)", notes: ["One-third to one-half dose in liver disease."] },
    half: "26 hours at first; about 12 hours after autoinduction",
    pk: ["Slow, erratic absorption; 70% to 80% protein bound.", "Active 10,11-epoxide metabolite."],
    effects: { common: ["Nausea, GI upset", "Ataxia, drowsiness, diplopia, vertigo", "Benign rash (10% to 15%)", "Benign leukopenia (1% to 2%)"], serious: ["**Agranulocytosis, aplastic anemia** (about 1 in 125,000)", "**SJS/TEN**, exfoliative dermatitis", "**Hepatitis**", "**Hyponatremia**/SIADH", "Hypersensitivity myocarditis", "Spina bifida, cleft palate"] },
    monitoring: ["Baseline CBC with platelets, liver tests, electrolytes, ECG if over 40", "CBC and liver tests monthly for 6 months, then every 6 to 12 months (Table 21-41)", "Stop for WBC under 3,000, neutrophils under 1,500, platelets under 100,000"],
    interactions: ["Strong **CYP3A4 inducer**: lowers contraceptives, clozapine, haloperidol, TCAs, bupropion, lamotrigine, valproate, warfarin, methadone, benzodiazepines.", "Raised by **erythromycin**/macrolides, **verapamil, diltiazem**, fluoxetine, fluvoxamine, nefazodone, cimetidine, azoles, **grapefruit**.", "Never with MAOIs (2-week gap)."],
    pearls: ["No weight gain.", "Lithium reverses its benign WBC fall.", "False-positive pregnancy test; interferes with the dexamethasone suppression test."],
    profile: { weight: "N", sedation: "M", cognitive: "L", rash: "H", blood: "H", liver: "M", renal: "M", teratogen: "M", interact: "H" },
    drill: { mech: "**Sodium channel** inactivation; **CYP3A4 inducer** with **autoinduction**.", dose: "**200 mg at bedtime** (600 to 800 mg in mania); target about **1,200 mg**; level **4 to 12 µg/mL**.", se: "Ataxia, diplopia, rash; **agranulocytosis, SJS/TEN, hepatitis, hyponatremia**.", mon: "CBC, liver tests, sodium, levels; warning signs." },
    clues: ["the mood stabilizer that induces its own metabolism and lowers contraceptive levels", "linked to agranulocytosis and to SJS/TEN in HLA-B*15:02 carriers"],
    updates: [
      { year: "2007", field: "monitoring", title: "HLA-B*15:02 screening", text: "Boxed warning: test patients of **Asian ancestry** for **HLA-B*15:02** before starting (SJS/TEN risk about 5% in carriers); avoid in carriers. **HLA-A*31:01** also raises rash and DRESS risk (CPIC 2017).", source: "FDA carbamazepine labeling change, December 2007; Phillips EJ et al., CPIC guideline for HLA genotype and carbamazepine and oxcarbazepine, Clinical Pharmacology & Therapeutics, 2018" },
      { field: "indications", title: "Correction: Equetro year", text: "Equetro was approved on **December 10, 2004** (the book says 2002).", source: "Drugs.com approval history for Equetro" }
    ]
  },
  {
    id: "oxcarbazepine", name: "Oxcarbazepine", brands: ["Trileptal"], cls: "mood-stabilizers", group: "acms", chapter: "ch21-3", sec: "s213-oxc", book: true,
    summary: "Carbamazepine analog without blood dyscrasias and with less rash, but more hyponatremia; antimanic efficacy unproven.",
    ind: ["epilepsy"],
    mechanism: "Sodium channel blocker via its active **monohydroxy derivative**.",
    indications: { approved: ["Epilepsy"], other: ["Mania (not confirmed in controlled trials)"] },
    forms: "Tablets 150, 300, 600 mg",
    dose: { start: "150 or 300 mg at night", titration: "Mania trials reached 900 to 1,200 mg", range: "150 to 2,400 mg in two doses", max: "2,400 mg", notes: [] },
    half: "2 hours (parent); 9 hours (monohydroxy derivative)",
    effects: { common: ["Sedation, nausea", "Ataxia, diplopia, dizziness, tremor"], serious: ["**Hyponatremia** (3% to 5%)", "Cross-reactive rash in 25% to 30% of carbamazepine rash patients"] },
    monitoring: ["**Sodium** early in treatment", "No hematologic monitoring needed"],
    interactions: ["Induces CYP3A4/5 and inhibits CYP2C19; lowers **oral contraceptives**.", "Phenobarbital and alcohol lower it."],
    profile: { weight: "L", sedation: "M", cognitive: "L", rash: "L", blood: "N", liver: "L", renal: "H", teratogen: "L", interact: "M" },
    drill: { mech: "Carbamazepine analog; active **monohydroxy derivative**.", dose: "Start **150 to 300 mg at night**; trials **900 to 1,200 mg**.", se: "Sedation, nausea; **hyponatremia** more than carbamazepine; no dyscrasias.", mon: "**Sodium**." },
    clues: ["the carbamazepine analog that causes more hyponatremia but no blood dyscrasias"],
    updates: []
  },
  {
    id: "gabapentin", name: "Gabapentin", brands: ["Neurontin"], cls: "mood-stabilizers", group: "otherac", chapter: "ch21-3", sec: "s213-gaba", book: true,
    summary: "Unmetabolized, renally cleared anticonvulsant used for neuropathic pain, insomnia, anxiety and alcohol craving; not a primary mood stabilizer; respiratory depression with opioids.",
    ind: ["pain", "epilepsy", "alcohol", "gad"],
    mechanism: "Raises cerebral GABA, may reduce glutamate synthesis, modulates calcium channels to reduce monoamine release.",
    indications: { approved: ["Partial seizures (adjunct)", "Postherpetic neuralgia"], other: ["Insomnia", "Social anxiety and panic", "Alcohol craving", "Adjunct in bipolar disorder", "Neuropathic pain, fibromyalgia, pruritus"] },
    forms: "Capsules 100, 300, 400 mg; tablets 600, 800 mg; solution 250 mg/5 mL",
    dose: { start: "300 mg on day 1", titration: "600 mg day 2, 900 mg day 3, then up to 1,800 mg", range: "1,200 to 2,400 mg in divided doses", max: "Up to 4,800 mg reported", notes: ["Lower doses in older adults and renal impairment."] },
    effects: { common: ["**Somnolence, ataxia, fatigue**"], serious: ["Respiratory depression with opioids (post-publication)", "Misuse"] },
    interactions: ["Antacids lower absorption up to 20%.", "False-positive urine drug screens reported."],
    profile: { weight: "L", sedation: "M", cognitive: "L", rash: "N", blood: "N", liver: "N", renal: "L", teratogen: "L", interact: "N" },
    drill: { mech: "GABA-related; calcium channel modulation; **renal**, unmetabolized.", dose: "**300 → 600 → 900 mg**, usual **1,200 to 2,400 mg** divided.", se: "Somnolence, ataxia, fatigue.", mon: "Renal function; sedation with opioids." },
    clues: ["the anticonvulsant excreted unchanged by the kidneys and used as a hypnotic and for alcohol craving"],
    updates: [
      { year: "2019", title: "Breathing problems with opioids", text: "FDA warning: serious **respiratory depression** with opioids or other depressants, COPD, or older age. Misuse occurs, especially with opioid use disorder.", source: "FDA Drug Safety Communication on gabapentin and pregabalin, December 2019" }
    ]
  },
  {
    id: "pregabalin", name: "Pregabalin", brands: ["Lyrica"], cls: "mood-stabilizers", group: "otherac", chapter: "ch21-3", sec: "s213-gaba", book: true,
    summary: "Higher-affinity gabapentin relative; neuropathic pain, fibromyalgia, partial seizures; helps GAD; renal dosing; Schedule V.",
    ind: ["pain", "gad", "epilepsy"],
    mechanism: "Like gabapentin (α2δ calcium channel binding, six times higher affinity); reduces excitatory transmitter release.",
    indications: { approved: ["Diabetic neuropathy", "Postherpetic neuralgia", "Partial-onset seizures (adjunct)", "Fibromyalgia"], other: ["GAD (300 mg best)", "Panic and social anxiety (limited)"] },
    forms: "Capsules 25 to 300 mg",
    dose: { start: "50 to 100 mg three times daily (neuralgia)", titration: "Diabetic neuropathy 100 to 200 mg three times daily", range: "150 to 600 mg", max: "600 mg (fibromyalgia 450 to 600 mg)", notes: ["Reduce if creatinine clearance under 60 mL/min; supplement after dialysis."] },
    half: "About 6.5 hours",
    effects: { common: ["**Dizziness, somnolence**", "Blurred vision, **peripheral edema**", "Memory problems, tremor"], serious: ["Respiratory depression with opioids (post-publication)", "Misuse"] },
    interactions: ["No metabolic interactions; potentiates alcohol, antihistamines, benzodiazepines."],
    profile: { weight: "M", sedation: "M", cognitive: "L", rash: "N", blood: "N", liver: "N", renal: "L", teratogen: "L", interact: "N" },
    drill: { mech: "Gabapentinoid with **six times** gabapentin's affinity.", dose: "Neuralgia **50 to 100 mg three times daily**; neuropathy 100 to 200 mg three times daily; GAD **300 mg**.", se: "Dizziness, somnolence, edema.", mon: "Renal dosing." },
    clues: ["the gabapentinoid that helped GAD best at 300 mg a day"],
    updates: [
      { year: "2019", title: "Breathing problems and scheduling", text: "FDA 2019 respiratory depression warning; pregabalin is **Schedule V**.", source: "FDA Drug Safety Communication on gabapentin and pregabalin, December 2019; Lyrica prescribing information" }
    ]
  },
  {
    id: "topiramate", name: "Topiramate", brands: ["Topamax"], cls: "mood-stabilizers", group: "otherac", chapter: "ch21-3", sec: "s213-topi", book: true,
    summary: "GABAergic carbonic anhydrase inhibitor; migraine prevention and weight loss; paresthesias, cognitive slowing, acidosis and kidney stones; not antimanic; pregnancy restrictions.",
    ind: ["epilepsy", "migraine", "weightloss", "alcohol"],
    mechanism: "GABAergic; raises cerebral GABA; **carbonic anhydrase inhibition**.",
    indications: { approved: ["Epilepsy", "Migraine prevention"], other: ["Psychotropic weight gain, obesity, bulimia, binge eating", "Alcohol use disorder, smoking cessation", "PTSD, self-injury in borderline personality disorder"] },
    forms: "Tablets 25, 100, 200 mg",
    dose: { start: "25 mg at bedtime", titration: "Up 25 mg weekly", range: "75 to 150 mg at bedtime for weight", max: "400 mg (epilepsy: 200 mg twice daily over 8 weeks)", notes: ["Halve in renal insufficiency."] },
    half: "About 24 hours",
    effects: { common: ["**Paresthesias**, weight loss, anorexia", "Somnolence, dizziness, **memory problems**", "Taste changes"], serious: ["**Metabolic acidosis**", "**Kidney stones** (1.5%)", "Oligohidrosis and hyperthermia with other carbonic anhydrase inhibitors"] },
    monitoring: ["Bicarbonate", "Hydration"],
    interactions: ["Raises phenytoin 25%, valproate 11%.", "Carbamazepine and phenytoin lower topiramate 40% to 48%.", "Avoid acetazolamide and other carbonic anhydrase inhibitors."],
    profile: { weight: "N", sedation: "M", cognitive: "H", rash: "L", blood: "N", liver: "N", renal: "M", teratogen: "M", interact: "L" },
    drill: { mech: "GABAergic **carbonic anhydrase inhibitor**.", dose: "**25 mg at bedtime**, +25 mg weekly; weight **75 to 150 mg**; max 400 mg.", se: "**Paresthesias**, cognitive slowing, weight loss, **acidosis, kidney stones**.", mon: "Bicarbonate; fluids." },
    clues: ["the anticonvulsant used to counter psychotropic weight gain that causes paresthesias and kidney stones"],
    updates: [
      { year: "2023", field: "populations", title: "Pregnancy prevention", text: "EMA (September 2023): pregnancy prevention programme; not for migraine or weight in pregnancy; risks include malformations (oral clefts), possible neurodevelopmental effects and small size for gestational age.", source: "EMA PRAC recommendation on topiramate, September 2023; Pack AM et al., AAN, AES and SMFM practice guideline on in utero antiseizure medication exposure, Neurology, 2024" }
    ]
  },
  {
    id: "tiagabine", name: "Tiagabine", brands: ["Gabitril"], cls: "mood-stabilizers", group: "otherac", chapter: "ch21-3", sec: "s213-tiag", book: true,
    summary: "GABA reuptake inhibitor for partial seizures; can cause seizures and status epilepticus in people without epilepsy; little psychiatric role.",
    ind: ["epilepsy", "gad"],
    mechanism: "Blocks **GABA reuptake** into neurons and glia.",
    indications: { approved: ["Partial seizures (adjunct, age 12 and older)"], other: ["GAD and insomnia (rare)"] },
    forms: "Tablets",
    dose: { start: "4 mg a day (with enzyme inducers)", titration: "+4 mg weekly in month 1, then 4 to 8 mg weekly", range: "24 to 32 mg by week 6", max: "56 mg (adults)", notes: ["Never load rapidly."] },
    effects: { common: ["Impaired concentration, speech problems, somnolence, fatigue"], serious: ["**Seizures**, status epilepticus, SUDEP", "Severe rash"] },
    profile: { weight: "N", sedation: "M", cognitive: "M", rash: "M", blood: "N", liver: "N", renal: "N", teratogen: "M", interact: "M" },
    drill: { mech: "**GABA reuptake** inhibitor.", dose: "**4 mg**, +4 mg weekly; 24 to 32 mg by week 6.", se: "**Seizures** even without epilepsy; cognitive effects.", mon: "—" },
    clues: ["the GABA reuptake inhibitor that can provoke seizures in people without epilepsy"],
    updates: [
      { year: "2005", title: "Correction and warning", text: "Approved for **adjunctive treatment of partial seizures**; the FDA warned in 2005 of new seizures in people without epilepsy, mostly with off-label psychiatric use.", source: "Gabitril prescribing information; FDA and Cephalon warning, February 2005" }
    ]
  },
  {
    id: "levetiracetam", name: "Levetiracetam", brands: ["Keppra"], cls: "mood-stabilizers", group: "otherac", chapter: "ch21-3", sec: "s213-topi", book: true,
    summary: "Renally cleared anticonvulsant without CYP interactions; off-label mania and anxiety; behavioral disturbances, agitation and hallucinations.",
    ind: ["epilepsy"],
    mechanism: "Indirectly enhances GABA inhibition (developed as a nootropic).",
    indications: { approved: ["Partial-onset, myoclonic and generalized seizures"], other: ["Acute mania, adjunct in depression, anxiety (off-label)"] },
    forms: "Tablets 250, 500, 750, 1,000 mg; ER 500 mg; oral and IV solution 100 mg/mL",
    dose: { start: "—", titration: "—", range: "1,000 mg a day typical in epilepsy", max: "—", notes: ["Reduce in renal impairment."] },
    effects: { common: ["Drowsiness, dizziness, ataxia, diplopia, memory problems, apathy, paresthesias"], serious: ["**Behavioral disturbance, agitation, hallucinations**"] },
    interactions: ["Few or none; none with lithium."],
    profile: { weight: "N", sedation: "M", cognitive: "L", rash: "N", blood: "N", liver: "N", renal: "L", teratogen: "L", interact: "N" },
    drill: { mech: "Indirect GABA enhancement; no CYP metabolism.", dose: "Typical epilepsy dose **1,000 mg** a day; reduce in renal impairment.", se: "Drowsiness; **behavioral disturbances**, hallucinations.", mon: "Mood and behavior." },
    clues: ["the anticonvulsant with no CYP metabolism that can cause agitation and hallucinations"],
    updates: []
  },
  {
    id: "zonisamide", name: "Zonisamide", brands: ["Zonegran"], cls: "mood-stabilizers", group: "otherac", chapter: "ch21-3", sec: "s213-topi", book: true,
    summary: "Sulfonamide anticonvulsant with a 60-hour half-life; obesity and binge eating; kidney stones and weight loss.",
    ind: ["epilepsy", "weightloss"],
    mechanism: "Sodium (and possibly calcium) channel blockade; weak dopamine and serotonin potentiation; carbonic anhydrase inhibition.",
    indications: { approved: ["Partial seizures (adjunct)"], other: ["Obesity and binge eating (controlled studies)", "Mania (uncontrolled)"] },
    forms: "Capsules 100, 200 mg",
    dose: { start: "100 mg at night", titration: "As tolerated", range: "100 to 400 mg once daily", max: "400 mg (more side effects above 300 mg)", notes: [] },
    half: "60 hours",
    effects: { common: ["Drowsiness, cognitive problems, insomnia, ataxia, GI upset", "**Weight loss**"], serious: ["**Kidney stones** (4%)", "Sulfonamide rash and blood dyscrasias (rare)"] },
    interactions: ["CYP3A substrate: inducers lower it; does not affect others.", "Avoid other carbonic anhydrase inhibitors."],
    profile: { weight: "N", sedation: "M", cognitive: "M", rash: "M", blood: "L", liver: "N", renal: "M", teratogen: "M", interact: "L" },
    drill: { mech: "Sodium channel blocker; **carbonic anhydrase** inhibitor; sulfonamide.", dose: "**100 to 400 mg** once daily.", se: "Kidney stones, weight loss, cognitive effects; sulfonamide rash.", mon: "—" },
    clues: ["the sulfonamide anticonvulsant with a 60-hour half-life that causes kidney stones in 4%"],
    updates: []
  },
  {
    id: "phenytoin", name: "Phenytoin", brands: ["Dilantin"], cls: "mood-stabilizers", group: "otherac", chapter: "ch21-3", sec: "s213-tiag", book: true,
    summary: "Old anticonvulsant with antimanic efficacy but nonlinear kinetics, gingival hyperplasia and blood dyscrasias; level 10 to 20 µg/mL.",
    ind: ["epilepsy", "mania"],
    mechanism: "Blocks voltage-activated **sodium channels**.",
    indications: { approved: ["Tonic–clonic and complex partial seizures; neurosurgical seizures"], other: ["Acute mania"] },
    forms: "Extended capsules 100 mg",
    dose: { start: "100 mg three times daily", titration: "By level; small steps", range: "Level 10 to 20 µg/mL", max: "By level", notes: ["Can switch to once daily."] },
    half: "About 22 hours (7 to 42)",
    effects: { common: ["**Nystagmus, ataxia**, slurred speech, confusion", "**Gingival hyperplasia**"], serious: ["Blood dyscrasias", "Lymphadenopathy", "Neonatal bleeding; malformations"] },
    monitoring: ["Serial levels (nonlinear kinetics)", "CBC"],
    interactions: ["Raised by alcohol (acute), cimetidine, disulfiram, fluoxetine, isoniazid, valproate displaces it; lowered by carbamazepine and chronic alcohol."],
    profile: { weight: "N", sedation: "M", cognitive: "M", rash: "M", blood: "M", liver: "L", renal: "N", teratogen: "H", interact: "H" },
    drill: { mech: "**Sodium channel** blocker; saturable metabolism.", dose: "**100 mg three times daily**; level **10 to 20 µg/mL**.", se: "Nystagmus, ataxia, **gingival hyperplasia**, dyscrasias.", mon: "Serial levels." },
    clues: ["the anticonvulsant with nonlinear kinetics that causes gingival hyperplasia"],
    updates: []
  },
  {
    id: "verapamil", name: "Verapamil", brands: ["Calan", "Isoptin"], cls: "mood-stabilizers", group: "ccb", chapter: "ch21-3", sec: "s213-ccb", book: true,
    summary: "Calcium channel blocker for mania and maintenance in lithium-type responders; may prevent antidepressant-induced mania; hypotension, bradycardia, AV block; raises carbamazepine.",
    ind: ["mania", "bp-maint"],
    mechanism: "Blocks **L-type calcium channels**.",
    indications: { approved: ["Angina, hypertension, supraventricular arrhythmias"], other: ["Mania and bipolar maintenance", "Prevention of antidepressant-induced mania"] },
    forms: "Tablets 40, 80, 120 mg; sustained release tablets and capsules",
    dose: { start: "40 mg three times daily (Table 21-42: 30 mg three times daily)", titration: "Every 4 to 5 days", range: "80 to 120 mg three times daily", max: "480 mg", notes: [] },
    half: "2 to 8 hours at first; 5 to 12 hours later",
    effects: { common: ["Dizziness, headache, constipation, edema"], serious: ["**Hypotension, bradycardia, AV block**", "Delirium, hyperprolactinemia, galactorrhea"] },
    monitoring: ["BP, pulse, ECG (over 40 or heart disease)"],
    interactions: ["**Raises carbamazepine** and digoxin; can precipitate carbamazepine neurotoxicity.", "With lithium: neurotoxicity."],
    profile: { weight: "N", sedation: "L", cognitive: "L", rash: "L", blood: "N", liver: "N", renal: "N", teratogen: "M", interact: "M" },
    drill: { mech: "**L-type calcium channel** blocker.", dose: "**40 mg three times daily** → **80 to 120 mg three times daily**.", se: "Hypotension, bradycardia, **AV block**; galactorrhea.", mon: "BP, pulse, ECG." },
    clues: ["the calcium channel blocker to which lithium responders tend to respond"],
    updates: []
  },
  {
    id: "nimodipine", name: "Nimodipine", brands: ["Nimotop"], cls: "mood-stabilizers", group: "ccb", chapter: "ch21-3", sec: "s213-ccb", book: true,
    summary: "Short-acting calcium channel blocker with the best evidence for ultradian (ultrarapid) cycling.",
    ind: ["rapid", "bp-maint", "mania"],
    mechanism: "Blocks **L-type calcium channels**.",
    indications: { approved: ["Subarachnoid hemorrhage"], other: ["Ultradian cycling; recurrent brief depression; bipolar maintenance"] },
    forms: "Capsules 30 mg",
    dose: { start: "30 mg three times daily", titration: "Every 4 to 5 days", range: "60 mg every 4 hours for ultrarapid cycling", max: "240 to 450 mg (briefly 360 mg in the text)", notes: [] },
    half: "1 to 2 hours",
    effects: { common: ["Dizziness, headache, flushing", "Chest tightness"], serious: ["Hypotension"] },
    profile: { weight: "N", sedation: "L", cognitive: "N", rash: "N", blood: "N", liver: "N", renal: "N", teratogen: "M", interact: "L" },
    drill: { mech: "**L-type calcium channel** blocker.", dose: "**30 mg three times daily**; ultradian **60 mg every 4 hours**.", se: "Flushing, chest tightness, dizziness.", mon: "BP." },
    clues: ["the calcium channel blocker most effective for ultradian cycling"],
    updates: []
  },
  {
    id: "isradipine", name: "Isradipine", brands: ["DynaCirc"], cls: "mood-stabilizers", group: "ccb", chapter: "ch21-3", sec: "s213-ccb", book: true,
    summary: "Short-acting calcium channel blocker with antimanic activity; may blunt methamphetamine's effect.",
    ind: ["mania"],
    mechanism: "Blocks **L-type calcium channels**.",
    indications: { approved: ["Hypertension"], other: ["Mania; possibly ultradian cycling"] },
    forms: "Capsules 2.5, 5 mg",
    dose: { start: "2.5 mg twice daily", titration: "Every 4 to 5 days", range: "—", max: "20 mg a day", notes: [] },
    half: "1 to 2 hours",
    effects: { common: ["Dizziness, headache, edema"], serious: ["Hypotension"] },
    interactions: ["Raises carbamazepine (Table 21-40)."],
    profile: { weight: "N", sedation: "L", cognitive: "N", rash: "N", blood: "N", liver: "N", renal: "N", teratogen: "M", interact: "L" },
    drill: { mech: "L-type calcium channel blocker.", dose: "**2.5 mg twice daily**, max **20 mg**.", se: "Vasodilator effects.", mon: "BP." },
    clues: ["the short-acting calcium channel blocker started at 2.5 mg twice daily, with a 20 mg maximum"],
    updates: []
  },
  {
    id: "amlodipine", name: "Amlodipine", brands: ["Norvasc"], cls: "mood-stabilizers", group: "ccb", chapter: "ch21-3", sec: "s213-ccb", book: true,
    summary: "Long-acting calcium channel blocker substituted for maintenance after a short-acting agent controls symptoms; case reports only.",
    ind: ["bp-maint"],
    mechanism: "Blocks **L-type calcium channels**.",
    indications: { approved: ["Hypertension, angina"], other: ["Bipolar maintenance after a short-acting CCB (case reports)"] },
    forms: "Tablets 2.5, 5, 10 mg",
    dose: { start: "5 mg at night", titration: "As tolerated", range: "5 to 10 mg", max: "10 to 15 mg", notes: [] },
    half: "30 to 50 hours",
    effects: { common: ["Peripheral edema, dizziness, headache"], serious: ["Hypotension"] },
    profile: { weight: "N", sedation: "L", cognitive: "N", rash: "N", blood: "N", liver: "N", renal: "N", teratogen: "M", interact: "L" },
    drill: { mech: "Long-acting L-type calcium channel blocker.", dose: "**5 mg at night**, max **10 to 15 mg**.", se: "Edema, dizziness.", mon: "BP." },
    clues: ["the long-acting calcium channel blocker used to maintain response after nimodipine or isradipine"],
    updates: []
  }
]);
