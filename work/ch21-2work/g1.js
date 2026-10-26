({
  title: "Selective serotonin reuptake inhibitors",
  sections: [
    {
      id: "s212-ssri",
      title: "The SSRI class",
      blocks: [
        { type: "p", text: "**Fluoxetine** (Prozac) was the first SSRI in the United States. It spared patients the dry mouth, constipation, sedation, orthostasis and tachycardia of TCAs and MAOIs, was far **safer in overdose**, and helped reduce the stigma of depression. **Sertraline, paroxetine, fluvoxamine, citalopram, escitalopram** and **vilazodone** followed; **vortioxetine** is covered at the end of this part." },
        { type: "p", text: "All SSRIs are **equally effective for depression**, but they differ in pharmacokinetics, pharmacodynamics and side effects, which helps explain why a patient can respond to one and not another. Nausea, **sexual dysfunction**, weight gain and **discontinuation symptoms** (worst with **paroxetine**) turned out to matter more than the early trials suggested." },
        { type: "table", caption: "FDA-approved SSRI indications in the book (Table 21-15)", head: ["Indication", "Citalopram", "Escitalopram", "Fluoxetine", "Fluvoxamine", "Paroxetine", "Sertraline", "Vilazodone"], wide: true, rows: [
          ["Major depression", "Adult", "Adult", "Adult and pediatric", "—", "Adult", "Adult", "Adult"],
          ["Generalized anxiety", "—", "Adult", "—", "—", "Adult", "—", "—"],
          ["OCD", "—", "—", "Adult and pediatric", "Adult and pediatric", "Adult", "Adult and pediatric", "—"],
          ["Panic disorder", "—", "—", "Adult", "—", "Adult", "Adult", "—"],
          ["PTSD", "—", "—", "—", "—", "Adult", "Adult", "—"],
          ["Social anxiety", "—", "—", "—", "—", "Adult", "Adult", "—"],
          ["Bulimia nervosa", "—", "—", "Adult", "—", "—", "—", "—"],
          ["PMDD", "—", "—", "Adult (Sarafem)", "—", "Adult (CR)", "Adult", "—"]
        ] },
        { type: "callout", kind: "exam", title: "Fluvoxamine is the exception", text: "**Fluvoxamine** is the only SSRI **not FDA approved for depression**, a marketing decision; it is approved for **OCD** and is used as an antidepressant elsewhere. **Paroxetine** has the most approved indications; **sertraline and paroxetine** are the two approved for **PTSD**." },
        { type: "update", year: "2023", title: "Escitalopram now approved for pediatric GAD", text: "In 2023 the FDA extended escitalopram's **generalized anxiety disorder** indication to children and adolescents **aged 7 and older**. Its depression indication covers ages 12 and older.", source: "Lexapro prescribing information (2023 and later)" }
      ]
    },
    {
      id: "s212-ssri-pharm",
      title: "SSRI pharmacology",
      blocks: [
        { type: "table", caption: "SSRI half-lives", head: ["Drug", "Half-life", "Active metabolite"], rows: [
          ["Fluoxetine", "**4 to 6 days**", "Norfluoxetine, **7 to 9 days**"],
          ["Sertraline", "26 hours", "Less active metabolite, 3 to 5 days"],
          ["Citalopram", "35 hours", "None of note"],
          ["Escitalopram", "27 to 32 hours", "None of note"],
          ["Paroxetine", "21 hours", "None of note"],
          ["Fluvoxamine", "**15 hours** (shortest)", "None of note"],
          ["Vilazodone", "About 25 hours; steady state in 3 days", "—"]
        ] },
        { type: "list", items: [
          "Well absorbed, with peak effects at **3 to 8 hours**; food slightly raises sertraline absorption.",
          "**Sertraline, fluoxetine and paroxetine** are the most protein bound; **escitalopram** the least.",
          "All are metabolized by CYP450. Because their therapeutic index is wide, other drugs rarely raise SSRI levels to a problem; the important interactions come from **SSRIs inhibiting the metabolism of other drugs**.",
          "Transporter saturation is often reached at **starting doses**; higher doses rarely add antidepressant efficacy but add side effects."
        ] },
        { type: "defs", title: "Receptor profiles", items: [
          ["Citalopram, escitalopram", "The **most selective** for serotonin reuptake; minimal noradrenergic, dopaminergic, H1, GABA or benzodiazepine activity."],
          ["Fluoxetine", "Weak norepinephrine reuptake inhibition and **5-HT2C** binding."],
          ["Sertraline", "Weak norepinephrine and **dopamine** reuptake inhibition."],
          ["Paroxetine", "**Anticholinergic** at higher doses; binds nitric oxide synthase."],
          ["Vilazodone", "SSRI plus **5-HT1A partial agonist**; clinical meaning of the 1A effect unclear."]
        ] },
        { type: "table", caption: "CYP450 inhibition by antidepressants (Table 21-16)", head: ["Rank", "CYP1A2", "CYP2C", "CYP2D6", "CYP3A"], wide: true, rows: [
          ["Higher", "**Fluvoxamine**", "Fluoxetine, fluvoxamine", "**Bupropion, fluoxetine, paroxetine**", "Fluvoxamine, nefazodone, tricyclics"],
          ["Moderate", "Tertiary amine TCAs, fluoxetine", "Sertraline", "Secondary amine TCAs, citalopram, escitalopram, sertraline", "Fluoxetine, sertraline"],
          ["Low or minimal", "Bupropion, mirtazapine, nefazodone, paroxetine, sertraline, venlafaxine", "Paroxetine, venlafaxine", "Fluvoxamine, mirtazapine, nefazodone, venlafaxine", "Citalopram, escitalopram, mirtazapine, paroxetine, venlafaxine"]
        ] },
        { type: "callout", kind: "pearl", title: "Interaction rules worth memorizing", text: "**Fluvoxamine** is the most troublesome (1A2: theophylline, **clozapine**; 3A4: alprazolam, clonazepam). **Fluoxetine and paroxetine** block **CYP2D6**, so codeine and hydrocodone are not converted to their active forms and **analgesia fails**, and **tamoxifen** may work less well. **Sertraline, citalopram and escitalopram** cause the fewest interactions." },
        { type: "p", text: "Pharmacodynamic interactions: **olanzapine plus fluoxetine** raises brain norepinephrine, which may underlie the combination's antidepressant effect. SSRIs with **triptans** or **tramadol** can cause **serotonin syndrome**, although many people take triptans with low-dose SSRIs without trouble." },
        { type: "update", year: "2023", title: "Genotype-guided SSRI dosing", text: "The 2023 **CPIC** guideline gives dosing advice by **CYP2C19** (citalopram, escitalopram, sertraline) and **CYP2D6** (paroxetine, fluvoxamine, vortioxetine) genotype; for example, a lower starting dose or another drug for poor metabolizers, and avoiding citalopram or escitalopram in CYP2C19 ultrarapid metabolizers if possible. Testing is optional but useful when results are already available.", source: "Bousman CA et al., CPIC guideline for serotonin reuptake inhibitor antidepressants, Clinical Pharmacology & Therapeutics, 2023" }
      ]
    },
    {
      id: "s212-ssri-ind",
      title: "SSRI indications",
      blocks: [
        { type: "defs", title: "Depression", items: [
          ["First line", "All SSRIs except fluvoxamine are approved. Drugs with **serotonin plus norepinephrine** activity (MAOIs, TCAs, venlafaxine, mirtazapine) may give **higher remission rates** in head-to-head studies, but SSRIs stay first line for **simplicity, safety and breadth**."],
          ["Switching within the class", "No SSRI is consistently superior. **More than 50%** of people who respond poorly to one SSRI respond to another, so try another SSRI before leaving the class."],
          ["Severity", "SSRIs work better in **more severe** depression than in mild depression. Choosing by 'activating' (fluoxetine) or 'sedating' (paroxetine) is unreliable because effects vary between people."],
          ["Elderly and medically ill", "Safe and well tolerated: little cardiotoxic, anticholinergic, antihistaminic or α-adrenergic effect (except **paroxetine's** anticholinergic effect). Watch for subtle cognitive effects, **prolonged bleeding** and **hyponatremia**. Effective in **poststroke depression**, with dramatic reduction in crying."],
          ["Children", "Controversial. **Fluoxetine** has the most consistent evidence for depression; **sertraline** helps social anxiety, especially with CBT. Use only within comprehensive care."]
        ] },
        { type: "callout", kind: "caution", title: "Suicidality warning", text: "The FDA **boxed warning** covers suicidal thoughts and behavior in **children and young adults**. Later reanalyses found suicidal thoughts **decreased** over time in adults and older adults on antidepressants, mediated by improvement in depression, with no difference in youths. A few patients become anxious and agitated early, so monitor everyone closely in the **first days and weeks**. Chapter 21.0 covers the debate in detail." },
        { type: "defs", title: "Pregnancy and the postpartum period", items: [
          ["Relapse risk", "**68% to 100%** of women who stop or change their antidepressant in pregnancy relapse; relapse risk is several times the fetal risk of SSRI exposure."],
          ["Malformations", "No overall increase in major malformations, **except paroxetine**: first-trimester exposure raised **cardiac septal defects** about 1.5 to 2 times (about 2% versus 1%). Paroxetine was Category D and **should usually be avoided** in pregnancy."],
          ["Newborns", "More special care nursery admissions; a possible paroxetine discontinuation syndrome; **persistent pulmonary hypertension** in about **1 to 2 per 1,000** births with late-pregnancy exposure (data inconclusive); transient **QTc prolongation** in exposed newborns."],
          ["Development", "Follow-up into early school years found no effect of fluoxetine on IQ, language or behavior."],
          ["Breastfeeding", "Minimal amounts in breast milk; **sertraline and escitalopram** are especially low. Document the risk discussion."],
          ["Postpartum depression", "Some start an SSRI if blues last beyond a few weeks, or during pregnancy in women at risk, which also protects the infant."]
        ] },
        { type: "update", year: "2025", title: "FDA panel on SSRIs in pregnancy", text: "In **July 2025** the FDA held an expert panel on SSRI use in pregnancy, and a citizen petition has asked for stronger pregnancy warnings. The **APA** and **ACOG** responded that the panel was unbalanced and that untreated perinatal depression carries real risks. As of October 2026 no new class-wide pregnancy warning had been added to SSRI labels. Keep making individual risk–benefit decisions.", source: "FDA expert panel on SSRIs and pregnancy, July 2025; APA letter to the FDA, August 2025" },
        { type: "defs", title: "Anxiety and related disorders", items: [
          ["OCD", "**Fluvoxamine, paroxetine, sertraline, fluoxetine** in adults; **fluvoxamine, fluoxetine and sertraline** in children (ages 6 to 17 in the book). Needs **higher doses** and **months** for full effect. Partial responders often improve with **low-dose risperidone** (watch EPS and prolactin)."],
          ["OCD spectrum", "SSRIs help trichotillomania, skin picking, nail biting and other nonsuicidal self-mutilation, and are used in compulsive gambling and shopping, hypochondriasis and body dysmorphic disorder."],
          ["Panic disorder", "**Paroxetine, fluoxetine, sertraline**. Slower than benzodiazepines but far better with comorbid depression. Start low (fluoxetine **5 mg**) because SSRIs can briefly **worsen anxiety**; low-dose benzodiazepines can cover this."],
          ["Social anxiety", "Response comparable to **phenelzine**, the old standard, with more safety."],
          ["PTSD", "Broader long-term effect on symptom clusters than TCAs or MAOIs; improve **intrusive and avoidant** symptoms. Benzodiazepines may help acutely."],
          ["GAD and others", "Useful for GAD, specific phobia and separation anxiety, alongside psychotherapy."]
        ] },
        { type: "defs", title: "Eating, premenstrual and off-label uses", items: [
          ["Bulimia nervosa", "**Fluoxetine 60 mg** a day beats 20 mg and placebo for binges and vomiting; best with psychotherapy. Some start CBT alone and add fluoxetine after 3 to 6 weeks without response. Fluvoxamine failed in one inpatient trial."],
          ["Anorexia nervosa", "Fluoxetine did **not** improve outcome or weight maintenance in 7- and 24-month studies."],
          ["Obesity", "Fluoxetine with a behavioral program helps only modestly; early weight loss is often regained."],
          ["PMDD", "Sertraline, paroxetine, fluoxetine and fluvoxamine help. **Luteal-phase** dosing (the 2 weeks from ovulation to menses) works as well as continuous dosing. Fluoxetine may change period length by more than 4 days."],
          ["Premature ejaculation", "The anorgasmic effect is used therapeutically (fluoxetine, sertraline)."],
          ["Paraphilias", "Reduce time spent on fantasies and urges; better for sexual obsessions than behavior."],
          ["Autism", "Sertraline and fluvoxamine reduce aggression, self-injury and repetitive behavior in adults; fluoxetine is used across ages."]
        ] }
      ]
    },
    {
      id: "s212-ssri-ae",
      title: "SSRI adverse effects",
      blocks: [
        { type: "p", text: "Think of SSRI side effects by **onset, duration and severity**: nausea and jitteriness are early, mild and time-limited; sexual dysfunction, weight gain and emotional blunting are late and persistent." },
        { type: "defs", items: [
          ["Sexual dysfunction", "The **most common long-term** effect, **50% to 80%**: anorgasmia, delayed orgasm, low libido. Rarely fades. Options: lower the dose, add **bupropion** or amphetamine, add **sildenafil**, or switch to **mirtazapine or bupropion**."],
          ["Gastrointestinal", "Via **5-HT3**: nausea, diarrhea, anorexia, vomiting, flatulence, dyspepsia. **Sertraline and fluvoxamine** cause the most; usually dose-related and transient. Paroxetine causes **constipation**; delayed-release paroxetine has less early GI upset."],
          ["Weight", "Early anorexia (most with **fluoxetine**) peaks at **20 weeks**; up to **one-third gain weight**, sometimes over 20 lb, resistant to diet. **Paroxetine** causes the most and fastest gain."],
          ["Headache", "18% to 20%, barely above placebo; **fluoxetine** most often. SSRIs also prevent migraine and tension headaches."],
          ["Anxiety", "**Fluoxetine** can raise anxiety in the first weeks; **paroxetine and escitalopram** less often."],
          ["Sleep", "Up to 25% report insomnia, somnolence or fatigue. **Fluoxetine** causes most insomnia (take it in the morning); **paroxetine and citalopram** cause somnolence; escitalopram disturbs sleep more than citalopram. Vivid dreams, **bruxism**, restless legs, nocturnal myoclonus, sweating. Treat insomnia with a hypnotic or **trazodone** (warn about priapism)."],
          ["Emotional blunting", "Inability to cry, apathy, flattened emotions; a frequent, overlooked reason for stopping."],
          ["Yawning", "A hypothalamic effect, not tiredness."],
          ["Seizures", "**0.1% to 0.2%**, no different from placebo; more at very high doses (fluoxetine 100 mg or more)."],
          ["Extrapyramidal", "Rare akathisia, dystonia, tremor, rigidity; rare tardive dyskinesia; may worsen Parkinson disease."],
          ["Bleeding", "Impair **platelet aggregation** without lowering the count: bruising and bleeding. Higher **GI bleeding** with **NSAIDs** (add a PPI); care with **warfarin** and aspirin."],
          ["Glucose and sodium", "May **lower glucose** acutely in diabetes; **hyponatremia and SIADH**, especially in **older** people and those on **diuretics**."],
          ["Endocrine and skin", "**Prolactin** rise with breast enlargement and galactorrhea in either sex (slowly reversible). Rash in about **4%**, rarely with lung involvement."],
          ["Sweating", "Drenching, including at night; **terazosin 1 to 2 mg** a day often helps."]
        ] },
        { type: "defs", title: "Cardiac effects and the citalopram limits", items: [
          ["Class effect", "All SSRIs can prolong QT, especially in overdose or with an antipsychotic. **Citalopram** has the largest effect: QTc **+8.5 ms at 20 mg**, **+12.6 at 40 mg**, **+18.5 at 60 mg**, and it was the most dangerous SSRI in poisonings."],
          ["Citalopram rules (FDA)", "**No more than 40 mg** a day. **Maximum 20 mg** if over **60**, with hepatic impairment, **CYP2C19 poor metabolizer**, or on **cimetidine**. Avoid in congenital long QT. Correct low **potassium and magnesium** first; more ECGs with heart failure, bradyarrhythmia or other QT drugs."],
          ["Vilazodone", "Small QTc effect, below the threshold of concern (upper bound under 10 ms)."],
          ["Androgen deprivation", "Lowers androgens and prolongs QTc; weigh this in men with prostate cancer on SSRIs."],
          ["Dextromethorphan–quinidine", "**Nuedexta** for **pseudobulbar affect**; quinidine prolongs QT and strongly inhibits CYP2D6, so avoid other QT-prolonging 2D6 substrates."]
        ] },
        { type: "table", caption: "Serotonin syndrome symptoms (Table 21-17)", head: ["Symptoms", ""], rowHeads: false, rows: [
          ["Diarrhea", "Myoclonus"], ["Diaphoresis", "Hyperactive reflexes"], ["Tremor", "Disorientation"], ["Ataxia", "Lability of mood"]
        ] },
        { type: "steps", title: "Serotonin syndrome as it worsens", items: [
          ["First", "**Diarrhea**"],
          ["Then", "**Restlessness**"],
          ["Moderate", "Extreme **agitation**, **hyperreflexia**, **autonomic instability** with fluctuating vital signs"],
          ["Severe", "**Myoclonus**, seizures, **hyperthermia**, shivering, rigidity"],
          ["Life-threatening", "Delirium, coma, status epilepticus, cardiovascular collapse, death"]
        ] },
        { type: "callout", kind: "exam", title: "Causes and treatment", text: "Classic triggers: SSRI plus an **MAOI**, **L-tryptophan** or **lithium**, or other serotonergic drugs (triptans, tramadol). Treat by **stopping the drugs** and giving supportive care; options include **cyproheptadine**, methysergide, benzodiazepines, cooling, chlorpromazine, dantrolene, anticonvulsants, nitroglycerin, and ventilation with paralysis in severe cases." },
        { type: "defs", title: "Overdose and discontinuation", items: [
          ["Vilazodone overdose", "200 to 280 mg caused serotonin syndrome, lethargy, restlessness, hallucinations and disorientation."],
          ["Discontinuation syndrome", "Dizziness, weakness, nausea, headache, rebound depression, anxiety, insomnia, poor concentration, flu-like symptoms, **paresthesias**. Most with short half-lives (**paroxetine, fluvoxamine**). Usually only after **at least 6 weeks** of treatment and resolves in about **3 weeks**. People with early side effects are more prone."],
          ["Fluoxetine", "Least likely, because norfluoxetine lasts over a week and the drug **tapers itself**; fluoxetine can be used to cover withdrawal from other SSRIs. A delayed, milder syndrome still occurs."]
        ] }
      ]
    },
    {
      id: "s212-ssri-int",
      title: "SSRI interactions, one drug at a time",
      blocks: [
        { type: "p", text: "SSRIs interfere with few drugs overall. **Fluoxetine, sertraline and paroxetine** can raise **TCA** levels to toxicity. SSRIs that inhibit CYP2D6 blunt **hydrocodone and oxycodone** analgesia and may reduce **tamoxifen** efficacy. All SSRIs, especially **fluvoxamine**, should not be combined with **clozapine** (higher levels, seizures). SSRIs may worsen **zolpidem** side effects, including hallucinations." },
        { type: "defs", items: [
          ["Fluoxetine", "Use **low TCA doses** if combined. Through CYP2D6 it may slow metabolism of **carbamazepine**, antineoplastics, **diazepam** and **phenytoin**, and affect benzodiazepines, antipsychotics and lithium. Raises bleeding risk with **warfarin**. About **7%** of people are **CYP2D6 poor metabolizers**."],
          ["Sertraline", "May displace warfarin and raise prothrombin time; weaker 2D6 effect than fluoxetine. Cimetidine raises its level."],
          ["Paroxetine", "**Stronger CYP2D6 inhibitor**, so more interactions than fluoxetine or sertraline: care with other antidepressants, phenothiazines and antiarrhythmics. Raises warfarin effect. **Tramadol** with paroxetine can cause serotonin syndrome in older people. Phenobarbital and phenytoin lower its level."],
          ["Fluvoxamine", "The **most interactions**: raises **theophylline threefold** and **warfarin twofold**; raises **alprazolam, triazolam, diazepam** (do not combine), clozapine, carbamazepine, methadone, propranolol, diltiazem. Ketoconazole inhibits its CYP3A4 metabolism. No problem with lorazepam or digoxin."],
          ["Citalopram", "Not a potent CYP inhibitor. **Cimetidine** raises it about **40%**. Doubles **metoprolol** levels, usually without effect on BP or pulse."],
          ["Escitalopram", "**Moderate CYP2D6** inhibitor; raises desipramine and metoprolol."],
          ["Vilazodone", "Reduce to **20 mg** with strong **CYP3A4 inhibitors**; inducers may make it ineffective."]
        ] },
        { type: "callout", kind: "pearl", title: "Laboratory interference", text: "**Sertraline** can give a **false-positive urine benzodiazepine** screen; confirm with gas chromatography–mass spectrometry." }
      ]
    },
    {
      id: "s212-ssri-dose",
      title: "SSRI dosing",
      blocks: [
        { type: "table", caption: "SSRI dosing for depression in the book", head: ["Drug", "Start", "Usual or target", "Maximum", "Tips"], wide: true, rows: [
          ["Fluoxetine", "10 to 20 mg each **morning** (5 to 10 mg if anxious)", "20 mg is often enough", "80 mg", "With food; steady state takes **4 weeks**; every-other-day start possible; **90 mg weekly** capsule for maintenance"],
          ["Sertraline", "50 mg (25 mg for GI upset or **panic**)", "50 to 200 mg", "200 mg", "Raise 50 mg a week after 1 to 3 weeks; concentrate contains **12% alcohol**, dilute it"],
          ["Paroxetine", "10 to 20 mg", "20 to 50 mg", "50 mg (CR start 25 mg; 12.5 mg for panic)", "Raise 10 mg weekly; **taper** every 2 to 3 weeks when stopping"],
          ["Fluvoxamine", "50 mg at bedtime", "50 to 300 mg", "300 mg", "Divide doses above 100 mg; ER 100 and 150 mg; swallow with food; interdose withdrawal possible"],
          ["Citalopram", "20 mg", "40 mg", "**40 mg** (20 mg if older, hepatic impairment or on cimetidine)", "Once daily, with or without food"],
          ["Escitalopram", "10 mg", "10 mg", "20 mg (no extra benefit in trials)", "Tablets and oral solution"],
          ["Vilazodone", "10 mg for 7 days, then 20 mg for 7 days", "40 mg (book)", "40 mg", "**Take with food** or levels fall; not studied in children or severe hepatic impairment"]
        ] },
        { type: "defs", items: [
          ["Other indications", "Effective doses can differ from depression doses: higher for **OCD** and **bulimia** (fluoxetine 60 mg), lower starts for **panic**."],
          ["Pregnancy and breastfeeding", "Apart from **paroxetine**, SSRIs are acceptable in pregnancy when needed. No human data on vilazodone in pregnancy or breast milk."],
          ["Loss of efficacy ('poop-out')", "Some patients lose their response on a full dose. Options: raise or lower the dose, taper and rechallenge, switch to another SSRI or a non-SSRI, or augment (for example with bupropion)."]
        ] }
      ]
    },
    {
      id: "s212-vortiox",
      title: "Vortioxetine",
      blocks: [
        { type: "defs", title: "Vortioxetine (Trintellix)", items: [
          ["Mechanism", "Mainly **serotonin reuptake inhibition**, plus **5-HT1A agonist**, **5-HT1B partial agonist**, and **5-HT3, 5-HT1D and 5-HT7 antagonist** actions; the only drug with this combination. Often called a 'multimodal' antidepressant."],
          ["Side effects", "**Nausea**, constipation, vomiting."],
          ["Dosing", "Start **10 mg** once daily without regard to meals, then **20 mg** as tolerated; **5 mg** if higher doses are not tolerated. Tablets 5, 10, 15, 20 mg."],
          ["CYP2D6", "Maximum **10 mg** in known **CYP2D6 poor metabolizers**; **halve the dose** with strong 2D6 inhibitors (**bupropion, fluoxetine, paroxetine, quinidine**)."],
          ["Stopping", "Can be stopped abruptly, but headache and muscle tension followed abrupt stops from 15 or 20 mg; drop to **10 mg for a week** first."]
        ] },
        { type: "update", title: "Dose check: vortioxetine with CYP inducers", text: "The book's sentence on inducers is garbled. The label says: with a **strong CYP inducer** (rifampin, carbamazepine, phenytoin) for **more than 14 days**, consider **raising** the vortioxetine dose, up to **three times the original dose**; return to the original dose within **14 days** of stopping the inducer.", source: "Trintellix prescribing information" }
      ]
    }
  ]
})
