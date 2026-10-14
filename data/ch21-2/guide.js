/* Chapter 21.2 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., section 21.2. */
KS.add("ch21-2", "guide", {
  "intro": "Section 21.2 covers the antidepressants class by class: the SSRIs and vortioxetine, the SNRIs, bupropion, mirtazapine, nefazodone and trazodone, the tricyclics and tetracyclics, the MAOIs and the tyramine reaction, thyroid augmentation, and the rapid-acting agents ketamine, esketamine and brexanolone. Dashed boxes mark approvals and label changes since the 12th edition, such as zuranolone, dextromethorphan–bupropion, gepirone and esketamine monotherapy, and correct a few errors in the book. Every drug has its own page in the Drugs section.",
  "objectives": [
    "Compare the SSRIs by half-life, CYP inhibition, indications and side effects, and apply the citalopram QT limits.",
    "Recognize and manage serotonin syndrome and antidepressant discontinuation syndromes.",
    "Use SNRIs, bupropion, mirtazapine, trazodone and nefazodone with their distinctive risks: hypertension, seizures, sedation, priapism and liver failure.",
    "Prescribe TCAs safely: ECG screening, plasma levels and the nortriptyline window, and overdose precautions.",
    "Prescribe MAOIs safely: the tyramine diet, drug interactions, washout periods and treatment of hypertensive crisis.",
    "Plan augmentation and switching, including thyroid hormone, and know the rapid-acting and newer agents."
  ],
  "parts": [
    {
      "title": "Selective serotonin reuptake inhibitors",
      "sections": [
        {
          "id": "s212-ssri",
          "title": "The SSRI class",
          "blocks": [
            {
              "type": "p",
              "text": "**Fluoxetine** (Prozac) was the first SSRI in the United States. It spared patients the dry mouth, constipation, sedation, orthostasis and tachycardia of TCAs and MAOIs, was far **safer in overdose**, and helped reduce the stigma of depression. **Sertraline, paroxetine, fluvoxamine, citalopram, escitalopram** and **vilazodone** followed; **vortioxetine** is covered at the end of this part."
            },
            {
              "type": "p",
              "text": "All SSRIs are **equally effective for depression**, but they differ in pharmacokinetics, pharmacodynamics and side effects, which helps explain why a patient can respond to one and not another. Nausea, **sexual dysfunction**, weight gain and **discontinuation symptoms** (worst with **paroxetine**) turned out to matter more than the early trials suggested."
            },
            {
              "type": "table",
              "caption": "FDA-approved SSRI indications in the book (Table 21-15)",
              "head": [
                "Indication",
                "Citalopram",
                "Escitalopram",
                "Fluoxetine",
                "Fluvoxamine",
                "Paroxetine",
                "Sertraline",
                "Vilazodone"
              ],
              "wide": true,
              "rows": [
                [
                  "Major depression",
                  "Adult",
                  "Adult",
                  "Adult and pediatric",
                  "—",
                  "Adult",
                  "Adult",
                  "Adult"
                ],
                [
                  "Generalized anxiety",
                  "—",
                  "Adult",
                  "—",
                  "—",
                  "Adult",
                  "—",
                  "—"
                ],
                [
                  "OCD",
                  "—",
                  "—",
                  "Adult and pediatric",
                  "Adult and pediatric",
                  "Adult",
                  "Adult and pediatric",
                  "—"
                ],
                [
                  "Panic disorder",
                  "—",
                  "—",
                  "Adult",
                  "—",
                  "Adult",
                  "Adult",
                  "—"
                ],
                [
                  "PTSD",
                  "—",
                  "—",
                  "—",
                  "—",
                  "Adult",
                  "Adult",
                  "—"
                ],
                [
                  "Social anxiety",
                  "—",
                  "—",
                  "—",
                  "—",
                  "Adult",
                  "Adult",
                  "—"
                ],
                [
                  "Bulimia nervosa",
                  "—",
                  "—",
                  "Adult",
                  "—",
                  "—",
                  "—",
                  "—"
                ],
                [
                  "PMDD",
                  "—",
                  "—",
                  "Adult (Sarafem)",
                  "—",
                  "Adult (CR)",
                  "Adult",
                  "—"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Fluvoxamine is the exception",
              "text": "**Fluvoxamine** is the only SSRI **not FDA approved for depression**, a marketing decision; it is approved for **OCD** and is used as an antidepressant elsewhere. **Paroxetine** has the most approved indications; **sertraline and paroxetine** are the two approved for **PTSD**."
            },
            {
              "type": "update",
              "year": "2023",
              "title": "Escitalopram now approved for pediatric GAD",
              "text": "In 2023 the FDA extended escitalopram's **generalized anxiety disorder** indication to children and adolescents **aged 7 and older**. Its depression indication covers ages 12 and older.",
              "source": "Lexapro prescribing information (2023 and later)"
            }
          ]
        },
        {
          "id": "s212-ssri-pharm",
          "title": "SSRI pharmacology",
          "blocks": [
            {
              "type": "table",
              "caption": "SSRI half-lives",
              "head": [
                "Drug",
                "Half-life",
                "Active metabolite"
              ],
              "rows": [
                [
                  "Fluoxetine",
                  "**4 to 6 days**",
                  "Norfluoxetine, **7 to 9 days**"
                ],
                [
                  "Sertraline",
                  "26 hours",
                  "Less active metabolite, 3 to 5 days"
                ],
                [
                  "Citalopram",
                  "35 hours",
                  "None of note"
                ],
                [
                  "Escitalopram",
                  "27 to 32 hours",
                  "None of note"
                ],
                [
                  "Paroxetine",
                  "21 hours",
                  "None of note"
                ],
                [
                  "Fluvoxamine",
                  "**15 hours** (shortest)",
                  "None of note"
                ],
                [
                  "Vilazodone",
                  "About 25 hours; steady state in 3 days",
                  "—"
                ]
              ]
            },
            {
              "type": "list",
              "items": [
                "Well absorbed, with peak effects at **3 to 8 hours**; food slightly raises sertraline absorption.",
                "**Sertraline, fluoxetine and paroxetine** are the most protein bound; **escitalopram** the least.",
                "All are metabolized by CYP450. Because their therapeutic index is wide, other drugs rarely raise SSRI levels to a problem; the important interactions come from **SSRIs inhibiting the metabolism of other drugs**.",
                "Transporter saturation is often reached at **starting doses**; higher doses rarely add antidepressant efficacy but add side effects."
              ]
            },
            {
              "type": "defs",
              "title": "Receptor profiles",
              "items": [
                [
                  "Citalopram, escitalopram",
                  "The **most selective** for serotonin reuptake; minimal noradrenergic, dopaminergic, H1, GABA or benzodiazepine activity."
                ],
                [
                  "Fluoxetine",
                  "Weak norepinephrine reuptake inhibition and **5-HT2C** binding."
                ],
                [
                  "Sertraline",
                  "Weak norepinephrine and **dopamine** reuptake inhibition."
                ],
                [
                  "Paroxetine",
                  "**Anticholinergic** at higher doses; binds nitric oxide synthase."
                ],
                [
                  "Vilazodone",
                  "SSRI plus **5-HT1A partial agonist**; clinical meaning of the 1A effect unclear."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "CYP450 inhibition by antidepressants (Table 21-16)",
              "head": [
                "Rank",
                "CYP1A2",
                "CYP2C",
                "CYP2D6",
                "CYP3A"
              ],
              "wide": true,
              "rows": [
                [
                  "Higher",
                  "**Fluvoxamine**",
                  "Fluoxetine, fluvoxamine",
                  "**Bupropion, fluoxetine, paroxetine**",
                  "Fluvoxamine, nefazodone, tricyclics"
                ],
                [
                  "Moderate",
                  "Tertiary amine TCAs, fluoxetine",
                  "Sertraline",
                  "Secondary amine TCAs, citalopram, escitalopram, sertraline",
                  "Fluoxetine, sertraline"
                ],
                [
                  "Low or minimal",
                  "Bupropion, mirtazapine, nefazodone, paroxetine, sertraline, venlafaxine",
                  "Paroxetine, venlafaxine",
                  "Fluvoxamine, mirtazapine, nefazodone, venlafaxine",
                  "Citalopram, escitalopram, mirtazapine, paroxetine, venlafaxine"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Interaction rules worth memorizing",
              "text": "**Fluvoxamine** is the most troublesome (1A2: theophylline, **clozapine**; 3A4: alprazolam, clonazepam). **Fluoxetine and paroxetine** block **CYP2D6**, so codeine and hydrocodone are not converted to their active forms and **analgesia fails**, and **tamoxifen** may work less well. **Sertraline, citalopram and escitalopram** cause the fewest interactions."
            },
            {
              "type": "p",
              "text": "Pharmacodynamic interactions: **olanzapine plus fluoxetine** raises brain norepinephrine, which may underlie the combination's antidepressant effect. SSRIs with **triptans** or **tramadol** can cause **serotonin syndrome**, although many people take triptans with low-dose SSRIs without trouble."
            },
            {
              "type": "update",
              "year": "2023",
              "title": "Genotype-guided SSRI dosing",
              "text": "The 2023 **CPIC** guideline gives dosing advice by **CYP2C19** (citalopram, escitalopram, sertraline) and **CYP2D6** (paroxetine, fluvoxamine, vortioxetine) genotype; for example, a lower starting dose or another drug for poor metabolizers, and avoiding citalopram or escitalopram in CYP2C19 ultrarapid metabolizers if possible. Testing is optional but useful when results are already available.",
              "source": "Bousman CA et al., CPIC guideline for serotonin reuptake inhibitor antidepressants, Clinical Pharmacology & Therapeutics, 2023"
            }
          ]
        },
        {
          "id": "s212-ssri-ind",
          "title": "SSRI indications",
          "blocks": [
            {
              "type": "defs",
              "title": "Depression",
              "items": [
                [
                  "First line",
                  "All SSRIs except fluvoxamine are approved. Drugs with **serotonin plus norepinephrine** activity (MAOIs, TCAs, venlafaxine, mirtazapine) may give **higher remission rates** in head-to-head studies, but SSRIs stay first line for **simplicity, safety and breadth**."
                ],
                [
                  "Switching within the class",
                  "No SSRI is consistently superior. **More than 50%** of people who respond poorly to one SSRI respond to another, so try another SSRI before leaving the class."
                ],
                [
                  "Severity",
                  "SSRIs work better in **more severe** depression than in mild depression. Choosing by 'activating' (fluoxetine) or 'sedating' (paroxetine) is unreliable because effects vary between people."
                ],
                [
                  "Elderly and medically ill",
                  "Safe and well tolerated: little cardiotoxic, anticholinergic, antihistaminic or α-adrenergic effect (except **paroxetine's** anticholinergic effect). Watch for subtle cognitive effects, **prolonged bleeding** and **hyponatremia**. Effective in **poststroke depression**, with dramatic reduction in crying."
                ],
                [
                  "Children",
                  "Controversial. **Fluoxetine** has the most consistent evidence for depression; **sertraline** helps social anxiety, especially with CBT. Use only within comprehensive care."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Suicidality warning",
              "text": "The FDA **boxed warning** covers suicidal thoughts and behavior in **children and young adults**. Later reanalyses found suicidal thoughts **decreased** over time in adults and older adults on antidepressants, mediated by improvement in depression, with no difference in youths. A few patients become anxious and agitated early, so monitor everyone closely in the **first days and weeks**. Chapter 21.0 covers the debate in detail."
            },
            {
              "type": "defs",
              "title": "Pregnancy and the postpartum period",
              "items": [
                [
                  "Relapse risk",
                  "**68% to 100%** of women who stop or change their antidepressant in pregnancy relapse; relapse risk is several times the fetal risk of SSRI exposure."
                ],
                [
                  "Malformations",
                  "No overall increase in major malformations, **except paroxetine**: first-trimester exposure raised **cardiac septal defects** about 1.5 to 2 times (about 2% versus 1%). Paroxetine was Category D and **should usually be avoided** in pregnancy."
                ],
                [
                  "Newborns",
                  "More special care nursery admissions; a possible paroxetine discontinuation syndrome; **persistent pulmonary hypertension** in about **1 to 2 per 1,000** births with late-pregnancy exposure (data inconclusive); transient **QTc prolongation** in exposed newborns."
                ],
                [
                  "Development",
                  "Follow-up into early school years found no effect of fluoxetine on IQ, language or behavior."
                ],
                [
                  "Breastfeeding",
                  "Minimal amounts in breast milk; **sertraline and escitalopram** are especially low. Document the risk discussion."
                ],
                [
                  "Postpartum depression",
                  "Some start an SSRI if blues last beyond a few weeks, or during pregnancy in women at risk, which also protects the infant."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2025",
              "title": "FDA panel on SSRIs in pregnancy",
              "text": "In **July 2025** the FDA held an expert panel on SSRI use in pregnancy, and a citizen petition has asked for stronger pregnancy warnings. The **APA** and **ACOG** responded that the panel was unbalanced and that untreated perinatal depression carries real risks. As of October 2026 no new class-wide pregnancy warning had been added to SSRI labels. Keep making individual risk–benefit decisions.",
              "source": "FDA expert panel on SSRIs and pregnancy, July 2025; APA letter to the FDA, August 2025"
            },
            {
              "type": "defs",
              "title": "Anxiety and related disorders",
              "items": [
                [
                  "OCD",
                  "**Fluvoxamine, paroxetine, sertraline, fluoxetine** in adults; **fluvoxamine, fluoxetine and sertraline** in children (ages 6 to 17 in the book). Needs **higher doses** and **months** for full effect. Partial responders often improve with **low-dose risperidone** (watch EPS and prolactin)."
                ],
                [
                  "OCD spectrum",
                  "SSRIs help trichotillomania, skin picking, nail biting and other nonsuicidal self-mutilation, and are used in compulsive gambling and shopping, hypochondriasis and body dysmorphic disorder."
                ],
                [
                  "Panic disorder",
                  "**Paroxetine, fluoxetine, sertraline**. Slower than benzodiazepines but far better with comorbid depression. Start low (fluoxetine **5 mg**) because SSRIs can briefly **worsen anxiety**; low-dose benzodiazepines can cover this."
                ],
                [
                  "Social anxiety",
                  "Response comparable to **phenelzine**, the old standard, with more safety."
                ],
                [
                  "PTSD",
                  "Broader long-term effect on symptom clusters than TCAs or MAOIs; improve **intrusive and avoidant** symptoms. Benzodiazepines may help acutely."
                ],
                [
                  "GAD and others",
                  "Useful for GAD, specific phobia and separation anxiety, alongside psychotherapy."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Eating, premenstrual and off-label uses",
              "items": [
                [
                  "Bulimia nervosa",
                  "**Fluoxetine 60 mg** a day beats 20 mg and placebo for binges and vomiting; best with psychotherapy. Some start CBT alone and add fluoxetine after 3 to 6 weeks without response. Fluvoxamine failed in one inpatient trial."
                ],
                [
                  "Anorexia nervosa",
                  "Fluoxetine did **not** improve outcome or weight maintenance in 7- and 24-month studies."
                ],
                [
                  "Obesity",
                  "Fluoxetine with a behavioral program helps only modestly; early weight loss is often regained."
                ],
                [
                  "PMDD",
                  "Sertraline, paroxetine, fluoxetine and fluvoxamine help. **Luteal-phase** dosing (the 2 weeks from ovulation to menses) works as well as continuous dosing. Fluoxetine may change period length by more than 4 days."
                ],
                [
                  "Premature ejaculation",
                  "The anorgasmic effect is used therapeutically (fluoxetine, sertraline)."
                ],
                [
                  "Paraphilias",
                  "Reduce time spent on fantasies and urges; better for sexual obsessions than behavior."
                ],
                [
                  "Autism",
                  "Sertraline and fluvoxamine reduce aggression, self-injury and repetitive behavior in adults; fluoxetine is used across ages."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-ssri-ae",
          "title": "SSRI adverse effects",
          "blocks": [
            {
              "type": "p",
              "text": "Think of SSRI side effects by **onset, duration and severity**: nausea and jitteriness are early, mild and time-limited; sexual dysfunction, weight gain and emotional blunting are late and persistent."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Sexual dysfunction",
                  "The **most common long-term** effect, **50% to 80%**: anorgasmia, delayed orgasm, low libido. Rarely fades. Options: lower the dose, add **bupropion** or amphetamine, add **sildenafil**, or switch to **mirtazapine or bupropion**."
                ],
                [
                  "Gastrointestinal",
                  "Via **5-HT3**: nausea, diarrhea, anorexia, vomiting, flatulence, dyspepsia. **Sertraline and fluvoxamine** cause the most; usually dose-related and transient. Paroxetine causes **constipation**; delayed-release paroxetine has less early GI upset."
                ],
                [
                  "Weight",
                  "Early anorexia (most with **fluoxetine**) peaks at **20 weeks**; up to **one-third gain weight**, sometimes over 20 lb, resistant to diet. **Paroxetine** causes the most and fastest gain."
                ],
                [
                  "Headache",
                  "18% to 20%, barely above placebo; **fluoxetine** most often. SSRIs also prevent migraine and tension headaches."
                ],
                [
                  "Anxiety",
                  "**Fluoxetine** can raise anxiety in the first weeks; **paroxetine and escitalopram** less often."
                ],
                [
                  "Sleep",
                  "Up to 25% report insomnia, somnolence or fatigue. **Fluoxetine** causes most insomnia (take it in the morning); **paroxetine and citalopram** cause somnolence; escitalopram disturbs sleep more than citalopram. Vivid dreams, **bruxism**, restless legs, nocturnal myoclonus, sweating. Treat insomnia with a hypnotic or **trazodone** (warn about priapism)."
                ],
                [
                  "Emotional blunting",
                  "Inability to cry, apathy, flattened emotions; a frequent, overlooked reason for stopping."
                ],
                [
                  "Yawning",
                  "A hypothalamic effect, not tiredness."
                ],
                [
                  "Seizures",
                  "**0.1% to 0.2%**, no different from placebo; more at very high doses (fluoxetine 100 mg or more)."
                ],
                [
                  "Extrapyramidal",
                  "Rare akathisia, dystonia, tremor, rigidity; rare tardive dyskinesia; may worsen Parkinson disease."
                ],
                [
                  "Bleeding",
                  "Impair **platelet aggregation** without lowering the count: bruising and bleeding. Higher **GI bleeding** with **NSAIDs** (add a PPI); care with **warfarin** and aspirin."
                ],
                [
                  "Glucose and sodium",
                  "May **lower glucose** acutely in diabetes; **hyponatremia and SIADH**, especially in **older** people and those on **diuretics**."
                ],
                [
                  "Endocrine and skin",
                  "**Prolactin** rise with breast enlargement and galactorrhea in either sex (slowly reversible). Rash in about **4%**, rarely with lung involvement."
                ],
                [
                  "Sweating",
                  "Drenching, including at night; **terazosin 1 to 2 mg** a day often helps."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Cardiac effects and the citalopram limits",
              "items": [
                [
                  "Class effect",
                  "All SSRIs can prolong QT, especially in overdose or with an antipsychotic. **Citalopram** has the largest effect: QTc **+8.5 ms at 20 mg**, **+12.6 at 40 mg**, **+18.5 at 60 mg**, and it was the most dangerous SSRI in poisonings."
                ],
                [
                  "Citalopram rules (FDA)",
                  "**No more than 40 mg** a day. **Maximum 20 mg** if over **60**, with hepatic impairment, **CYP2C19 poor metabolizer**, or on **cimetidine**. Avoid in congenital long QT. Correct low **potassium and magnesium** first; more ECGs with heart failure, bradyarrhythmia or other QT drugs."
                ],
                [
                  "Vilazodone",
                  "Small QTc effect, below the threshold of concern (upper bound under 10 ms)."
                ],
                [
                  "Androgen deprivation",
                  "Lowers androgens and prolongs QTc; weigh this in men with prostate cancer on SSRIs."
                ],
                [
                  "Dextromethorphan–quinidine",
                  "**Nuedexta** for **pseudobulbar affect**; quinidine prolongs QT and strongly inhibits CYP2D6, so avoid other QT-prolonging 2D6 substrates."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Serotonin syndrome symptoms (Table 21-17)",
              "head": [
                "Symptoms",
                ""
              ],
              "rowHeads": false,
              "rows": [
                [
                  "Diarrhea",
                  "Myoclonus"
                ],
                [
                  "Diaphoresis",
                  "Hyperactive reflexes"
                ],
                [
                  "Tremor",
                  "Disorientation"
                ],
                [
                  "Ataxia",
                  "Lability of mood"
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Serotonin syndrome as it worsens",
              "items": [
                [
                  "First",
                  "**Diarrhea**"
                ],
                [
                  "Then",
                  "**Restlessness**"
                ],
                [
                  "Moderate",
                  "Extreme **agitation**, **hyperreflexia**, **autonomic instability** with fluctuating vital signs"
                ],
                [
                  "Severe",
                  "**Myoclonus**, seizures, **hyperthermia**, shivering, rigidity"
                ],
                [
                  "Life-threatening",
                  "Delirium, coma, status epilepticus, cardiovascular collapse, death"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Causes and treatment",
              "text": "Classic triggers: SSRI plus an **MAOI**, **L-tryptophan** or **lithium**, or other serotonergic drugs (triptans, tramadol). Treat by **stopping the drugs** and giving supportive care; options include **cyproheptadine**, methysergide, benzodiazepines, cooling, chlorpromazine, dantrolene, anticonvulsants, nitroglycerin, and ventilation with paralysis in severe cases."
            },
            {
              "type": "defs",
              "title": "Overdose and discontinuation",
              "items": [
                [
                  "Vilazodone overdose",
                  "200 to 280 mg caused serotonin syndrome, lethargy, restlessness, hallucinations and disorientation."
                ],
                [
                  "Discontinuation syndrome",
                  "Dizziness, weakness, nausea, headache, rebound depression, anxiety, insomnia, poor concentration, flu-like symptoms, **paresthesias**. Most with short half-lives (**paroxetine, fluvoxamine**). Usually only after **at least 6 weeks** of treatment and resolves in about **3 weeks**. People with early side effects are more prone."
                ],
                [
                  "Fluoxetine",
                  "Least likely, because norfluoxetine lasts over a week and the drug **tapers itself**; fluoxetine can be used to cover withdrawal from other SSRIs. A delayed, milder syndrome still occurs."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-ssri-int",
          "title": "SSRI interactions, one drug at a time",
          "blocks": [
            {
              "type": "p",
              "text": "SSRIs interfere with few drugs overall. **Fluoxetine, sertraline and paroxetine** can raise **TCA** levels to toxicity. SSRIs that inhibit CYP2D6 blunt **hydrocodone and oxycodone** analgesia and may reduce **tamoxifen** efficacy. All SSRIs, especially **fluvoxamine**, should not be combined with **clozapine** (higher levels, seizures). SSRIs may worsen **zolpidem** side effects, including hallucinations."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Fluoxetine",
                  "Use **low TCA doses** if combined. Through CYP2D6 it may slow metabolism of **carbamazepine**, antineoplastics, **diazepam** and **phenytoin**, and affect benzodiazepines, antipsychotics and lithium. Raises bleeding risk with **warfarin**. About **7%** of people are **CYP2D6 poor metabolizers**."
                ],
                [
                  "Sertraline",
                  "May displace warfarin and raise prothrombin time; weaker 2D6 effect than fluoxetine. Cimetidine raises its level."
                ],
                [
                  "Paroxetine",
                  "**Stronger CYP2D6 inhibitor**, so more interactions than fluoxetine or sertraline: care with other antidepressants, phenothiazines and antiarrhythmics. Raises warfarin effect. **Tramadol** with paroxetine can cause serotonin syndrome in older people. Phenobarbital and phenytoin lower its level."
                ],
                [
                  "Fluvoxamine",
                  "The **most interactions**: raises **theophylline threefold** and **warfarin twofold**; raises **alprazolam, triazolam, diazepam** (do not combine), clozapine, carbamazepine, methadone, propranolol, diltiazem. Ketoconazole inhibits its CYP3A4 metabolism. No problem with lorazepam or digoxin."
                ],
                [
                  "Citalopram",
                  "Not a potent CYP inhibitor. **Cimetidine** raises it about **40%**. Doubles **metoprolol** levels, usually without effect on BP or pulse."
                ],
                [
                  "Escitalopram",
                  "**Moderate CYP2D6** inhibitor; raises desipramine and metoprolol."
                ],
                [
                  "Vilazodone",
                  "Reduce to **20 mg** with strong **CYP3A4 inhibitors**; inducers may make it ineffective."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Laboratory interference",
              "text": "**Sertraline** can give a **false-positive urine benzodiazepine** screen; confirm with gas chromatography–mass spectrometry."
            }
          ]
        },
        {
          "id": "s212-ssri-dose",
          "title": "SSRI dosing",
          "blocks": [
            {
              "type": "table",
              "caption": "SSRI dosing for depression in the book",
              "head": [
                "Drug",
                "Start",
                "Usual or target",
                "Maximum",
                "Tips"
              ],
              "wide": true,
              "rows": [
                [
                  "Fluoxetine",
                  "10 to 20 mg each **morning** (5 to 10 mg if anxious)",
                  "20 mg is often enough",
                  "80 mg",
                  "With food; steady state takes **4 weeks**; every-other-day start possible; **90 mg weekly** capsule for maintenance"
                ],
                [
                  "Sertraline",
                  "50 mg (25 mg for GI upset or **panic**)",
                  "50 to 200 mg",
                  "200 mg",
                  "Raise 50 mg a week after 1 to 3 weeks; concentrate contains **12% alcohol**, dilute it"
                ],
                [
                  "Paroxetine",
                  "10 to 20 mg",
                  "20 to 50 mg",
                  "50 mg (CR start 25 mg; 12.5 mg for panic)",
                  "Raise 10 mg weekly; **taper** every 2 to 3 weeks when stopping"
                ],
                [
                  "Fluvoxamine",
                  "50 mg at bedtime",
                  "50 to 300 mg",
                  "300 mg",
                  "Divide doses above 100 mg; ER 100 and 150 mg; swallow with food; interdose withdrawal possible"
                ],
                [
                  "Citalopram",
                  "20 mg",
                  "40 mg",
                  "**40 mg** (20 mg if older, hepatic impairment or on cimetidine)",
                  "Once daily, with or without food"
                ],
                [
                  "Escitalopram",
                  "10 mg",
                  "10 mg",
                  "20 mg (no extra benefit in trials)",
                  "Tablets and oral solution"
                ],
                [
                  "Vilazodone",
                  "10 mg for 7 days, then 20 mg for 7 days",
                  "40 mg (book)",
                  "40 mg",
                  "**Take with food** or levels fall; not studied in children or severe hepatic impairment"
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Other indications",
                  "Effective doses can differ from depression doses: higher for **OCD** and **bulimia** (fluoxetine 60 mg), lower starts for **panic**."
                ],
                [
                  "Pregnancy and breastfeeding",
                  "Apart from **paroxetine**, SSRIs are acceptable in pregnancy when needed. No human data on vilazodone in pregnancy or breast milk."
                ],
                [
                  "Loss of efficacy ('poop-out')",
                  "Some patients lose their response on a full dose. Options: raise or lower the dose, taper and rechallenge, switch to another SSRI or a non-SSRI, or augment (for example with bupropion)."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-vortiox",
          "title": "Vortioxetine",
          "blocks": [
            {
              "type": "defs",
              "title": "Vortioxetine (Trintellix)",
              "items": [
                [
                  "Mechanism",
                  "Mainly **serotonin reuptake inhibition**, plus **5-HT1A agonist**, **5-HT1B partial agonist**, and **5-HT3, 5-HT1D and 5-HT7 antagonist** actions; the only drug with this combination. Often called a 'multimodal' antidepressant."
                ],
                [
                  "Side effects",
                  "**Nausea**, constipation, vomiting."
                ],
                [
                  "Dosing",
                  "Start **10 mg** once daily without regard to meals, then **20 mg** as tolerated; **5 mg** if higher doses are not tolerated. Tablets 5, 10, 15, 20 mg."
                ],
                [
                  "CYP2D6",
                  "Maximum **10 mg** in known **CYP2D6 poor metabolizers**; **halve the dose** with strong 2D6 inhibitors (**bupropion, fluoxetine, paroxetine, quinidine**)."
                ],
                [
                  "Stopping",
                  "Can be stopped abruptly, but headache and muscle tension followed abrupt stops from 15 or 20 mg; drop to **10 mg for a week** first."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Dose check: vortioxetine with CYP inducers",
              "text": "The book's sentence on inducers is garbled. The label says: with a **strong CYP inducer** (rifampin, carbamazepine, phenytoin) for **more than 14 days**, consider **raising** the vortioxetine dose, up to **three times the original dose**; return to the original dose within **14 days** of stopping the inducer.",
              "source": "Trintellix prescribing information"
            }
          ]
        }
      ]
    },
    {
      "title": "SNRIs and bupropion",
      "sections": [
        {
          "id": "s212-snri",
          "title": "The SNRI class",
          "blocks": [
            {
              "type": "p",
              "text": "Four **serotonin–norepinephrine reuptake inhibitors** are approved for depression in the United States: **venlafaxine** (Effexor, Effexor XR), **desvenlafaxine** (Pristiq), **duloxetine** (Cymbalta) and **levomilnacipran** (Fetzima). **Milnacipran** (Savella) is approved in the United States only for **fibromyalgia**."
            },
            {
              "type": "p",
              "text": "Like the 'dual reuptake' TCAs (clomipramine, and to a lesser degree imipramine and amitriptyline), SNRIs block both transporters, but they have little affinity for **muscarinic, histamine and adrenergic** receptors, so they are much better tolerated."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Do dual-action drugs work better?",
              "text": "The FDA recognizes no antidepressant class as more effective. The argument for dual action rests on Danish studies favoring **clomipramine** over citalopram and paroxetine, and a meta-analysis in which the TCA advantage over SSRIs came almost entirely from the **dual-reuptake TCAs**. Head-to-head meta-analyses suggest **venlafaxine** gives about **6%** higher remission than SSRIs."
            }
          ]
        },
        {
          "id": "s212-ven",
          "title": "Venlafaxine and desvenlafaxine",
          "blocks": [
            {
              "type": "defs",
              "title": "Indications",
              "items": [
                [
                  "Venlafaxine",
                  "**MDD, GAD, social anxiety disorder, panic disorder**. In GAD trials of 6 months, **75 to 225 mg** improved insomnia, poor concentration, restlessness, irritability and muscle tension."
                ],
                [
                  "Desvenlafaxine",
                  "**MDD only**; little head-to-head comparison with other classes."
                ],
                [
                  "Off-label",
                  "OCD, ADHD, depression with cocaine dependence, **chronic pain**."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Adverse effects",
              "items": [
                [
                  "Nausea",
                  "The **most common** effect; reduce by starting low; a **5-HT3 antagonist** or **mirtazapine** can control severe nausea."
                ],
                [
                  "Sexual",
                  "Low libido and delayed orgasm or ejaculation in **30% to 40%** or more when asked directly."
                ],
                [
                  "Others",
                  "Headache, insomnia, somnolence, dry mouth, dizziness, constipation, asthenia, **sweating**, nervousness; these look anticholinergic but come from **noradrenergic** effects."
                ],
                [
                  "Blood pressure",
                  "**Dose-related sustained hypertension**: 3% to 7% at **100 to 300 mg** and **13% above 300 mg** (immediate release). With XR at capped doses the excess is about 1%. Monitor BP at higher XR doses."
                ],
                [
                  "Discontinuation",
                  "Common and unpleasant: dizziness, dry mouth, insomnia, nausea, nervousness, sweating, anorexia, diarrhea, **sensory disturbances**. Taper slowly; a few doses of **fluoxetine** can bridge."
                ],
                [
                  "Overdose",
                  "Premarketing trials had no deaths, but QT, QRS and bundle branch changes, arrhythmias, BP swings, seizures and serotonin syndrome occurred; fatal overdoses usually involve other drugs or alcohol."
                ],
                [
                  "Pregnancy and lactation",
                  "Limited data; both enter breast milk. Weigh risks and benefits."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Interactions and laboratory effects",
              "items": [
                [
                  "Metabolism",
                  "Mainly **CYP2D6**, but parent and metabolite (O-desmethylvenlafaxine, which is **desvenlafaxine**) are equipotent, so 2D6 inhibitors rarely matter."
                ],
                [
                  "Inhibition",
                  "A **weak** CYP2D6 inhibitor; can raise **desipramine** and **risperidone**. Little effect on 1A2, 2C9, 2C19 or 3A4."
                ],
                [
                  "MAOIs",
                  "Contraindicated; wait **at least 7 days** after stopping venlafaxine before starting an MAOI."
                ],
                [
                  "Lab",
                  "False-positive **tramadol** on liquid chromatography."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Dosing",
              "items": [
                [
                  "Forms",
                  "Tablets 25 to 100 mg; **XR capsules 37.5, 75, 150 mg**. Tablets and XR are equipotent; XR is preferred because tablets cause more nausea and need several doses a day."
                ],
                [
                  "Depression",
                  "A **dose–response curve** exists. Start **37.5 mg for 4 to 7 days**, then **75 mg** once daily; raise by **75 mg every 4 or more days**. Usual XR ceiling **225 mg**, approved up to **375 mg** a day."
                ],
                [
                  "Anxiety disorders",
                  "No dose–response; most take **75 to 150 mg**."
                ],
                [
                  "Organ impairment",
                  "**Halve** the dose with significant hepatic or renal impairment."
                ],
                [
                  "Stopping",
                  "Taper over **2 to 4 weeks**."
                ],
                [
                  "Desvenlafaxine",
                  "50 and 100 mg ER tablets; **50 mg** a day for most. Higher doses added side effects, not benefit."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-dulox",
          "title": "Duloxetine",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Pharmacokinetics",
                  "**Delayed-release** formulation to reduce nausea; absorption starts after **2 hours**, peaks at **6 hours** (10 with food). Half-life about **12 hours** (8 to 17); steady state in 3 days. Eliminated through **CYP2D6 and CYP1A2**; **90%** protein bound; 70% of metabolites in urine."
                ],
                [
                  "Depression",
                  "A few comparisons suggest an edge over SSRIs, but they used low fixed SSRI doses against duloxetine up to 120 mg, so superiority is unproven."
                ],
                [
                  "Pain and urinary",
                  "The **first drug approved for diabetic neuropathic pain**. Increases urethral sphincter activity via the sacral cord; approved for **stress urinary incontinence** as **Yentreve** in Europe, not in the United States."
                ],
                [
                  "Adverse effects",
                  "Nausea (the main reason for stopping), dry mouth, dizziness, constipation, fatigue, low appetite, somnolence, sweating. BP rises only about **2/0.5 mm Hg**. Raises **glucose and HbA1c** in long-term use; monitor in diabetes."
                ],
                [
                  "Avoid in",
                  "**Heavy alcohol use** (liver injury), **hepatic insufficiency**, **end-stage renal disease**, uncontrolled **narrow-angle glaucoma**. Avoid abrupt stopping (venlafaxine-like discontinuation)."
                ],
                [
                  "Interactions",
                  "A **moderate** CYP450 inhibitor (notably CYP2D6)."
                ],
                [
                  "Dosing",
                  "**60 mg/day** is both the target and the usual maximum; 20 and 30 mg help with starting or split dosing. Up to 120 mg was studied without consistent added benefit; doses above 60 mg were given as **40 or 60 mg twice daily**."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2026",
              "title": "Current duloxetine label",
              "text": "Duloxetine comes as **delayed-release capsules** (20, 30, 60 mg), not tablets as the book states. Its current U.S. indications are **MDD**, **GAD** (adults and ages **7 to 17**), **diabetic peripheral neuropathic pain**, **fibromyalgia** (adults and ages **13 to 17**) and **chronic musculoskeletal pain**. Labeled doses go up to **120 mg** a day for depression and GAD.",
              "source": "Cymbalta prescribing information"
            }
          ]
        },
        {
          "id": "s212-milna",
          "title": "Milnacipran and levomilnacipran",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Milnacipran (Savella)",
                  "U.S. approval for **fibromyalgia** only; an antidepressant in other countries. About **5 times more potent at norepinephrine** than serotonin reuptake. Half-life about **8 hours**, linear kinetics, no active metabolites, **renal excretion**."
                ],
                [
                  "Milnacipran titration",
                  "Day 1: **12.5 mg** once; days 2 and 3: 12.5 mg twice; days 4 to 7: **25 mg twice**; then **50 mg twice daily**."
                ],
                [
                  "Levomilnacipran (Fetzima)",
                  "The active enantiomer of milnacipran, approved for **MDD** in **2013**; stronger at norepinephrine than serotonin reuptake. Once-daily **sustained release**; **40, 80 and 120 mg** all beat placebo."
                ],
                [
                  "Levomilnacipran side effects",
                  "Nausea, constipation, **hyperhidrosis**, **raised heart rate**, tachycardia, palpitations, **erectile dysfunction**, vomiting. Only **urinary hesitancy** and **erectile dysfunction** were dose related."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-bup",
          "title": "Bupropion",
          "blocks": [
            {
              "type": "p",
              "text": "**Bupropion** (Wellbutrin, SR and XL) inhibits **norepinephrine and probably dopamine** reuptake and has **no serotonergic action**. The result: **little sexual dysfunction or sedation**, modest **weight loss**, and **no withdrawal syndrome**. It is used as monotherapy and very often as an **add-on to SSRIs**. The Zyban brand for smoking cessation has been discontinued in the United States (generic bupropion SR is still used)."
            },
            {
              "type": "defs",
              "title": "Pharmacology",
              "items": [
                [
                  "Formulations",
                  "**Immediate release** (three times daily), **SR** (twice daily) and **XL** (once daily). Generics have shown bioequivalence problems; **Budeprion XL 300** was withdrawn. Ask about formulation changes when efficacy or side effects change."
                ],
                [
                  "Kinetics",
                  "Peak 2 hours (IR), 3 hours (SR), 5 hours (XL). Mean half-life **12 hours** (8 to 40). **XL 300 mg once daily = SR 150 mg twice daily** in 24-hour exposure; lower evening levels mean less insomnia."
                ],
                [
                  "Metabolism",
                  "**CYP2B6** forms the active metabolite **hydroxybupropion**. Bupropion is a **strong CYP2D6 inhibitor**."
                ],
                [
                  "Mechanism",
                  "Binds the **dopamine transporter**; smoking-cessation effect may involve dopamine reward pathways or **nicotinic receptor** blockade."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Indications",
              "items": [
                [
                  "Depression",
                  "Response and remission comparable to SSRIs, inpatient and outpatient. Prevents **seasonal** depressive episodes."
                ],
                [
                  "Smoking cessation",
                  "With behavioral support in motivated patients; best combined with **nicotine replacement**."
                ],
                [
                  "Bipolar disorder",
                  "Less likely than TCAs to trigger mania and less likely than other antidepressants to worsen rapid cycling in bipolar II; evidence is limited."
                ],
                [
                  "ADHD",
                  "**Second line** after stimulants; useful with comorbid depression, conduct disorder, substance use, or **stimulant-induced tics**."
                ],
                [
                  "Cocaine craving",
                  "Explored for its dopaminergic effect; results inconclusive. Possible euphoria raises caution with substance use histories."
                ],
                [
                  "Sexual desire",
                  "Added to SSRIs to counter sexual side effects; may help hypoactive sexual desire, arousal and orgasm."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Adverse effects",
              "items": [
                [
                  "Common",
                  "**Headache, insomnia, dry mouth, tremor, nausea**; restlessness, agitation, irritability. Avoid in **severe anxiety or panic disorder**."
                ],
                [
                  "Psychiatric",
                  "Dopaminergic effects can cause **psychosis** (hallucinations, delusions, catatonia) and delirium. Some patients have **word-finding difficulty**."
                ],
                [
                  "Notably absent",
                  "Orthostasis, weight gain, daytime drowsiness, anticholinergic effects. Hypertension in some; positive inotropic effect."
                ],
                [
                  "Seizures",
                  "**Dose-dependent**: about **0.05%** at **300 mg or less** of SR, about **0.1% at 400 mg**. About 20% show EEG spikes, sharp waves or focal slowing (sharp waves more in women)."
                ],
                [
                  "Seizure risk factors",
                  "Prior seizures, alcohol use, recent **benzodiazepine withdrawal**, brain disease, head trauma, epileptiform EEG. (Current labels also contraindicate **bulimia and anorexia nervosa**.)"
                ],
                [
                  "Pregnancy and lactation",
                  "No specific malformation risk; enters breast milk."
                ],
                [
                  "Overdose",
                  "Few deaths; **seizures in about one-third**, dose dependent; also sinus tachycardia, hypertension, GI upset, hallucinations, agitation. Deaths involve uncontrolled seizures, bradycardia or arrest. Safer than most antidepressants except perhaps SSRIs."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Interactions and laboratory effects",
              "items": [
                [
                  "Venlafaxine",
                  "Bupropion **raises venlafaxine** and lowers its metabolite (2D6 inhibition)."
                ],
                [
                  "SSRIs",
                  "No big level changes with paroxetine or fluoxetine, but case reports of **panic, delirium or seizures** with fluoxetine."
                ],
                [
                  "Lithium",
                  "Rare CNS toxicity including seizures."
                ],
                [
                  "MAOIs",
                  "Do not combine (**hypertensive crisis**); wait **14 days** after an MAOI."
                ],
                [
                  "Dopaminergic drugs",
                  "May allow lower antiparkinsonian doses, but can cause **delirium, psychosis and dyskinesia**."
                ],
                [
                  "Others",
                  "Sinus bradycardia with **metoprolol**; **carbamazepine lowers** bupropion; bupropion **raises valproate**."
                ],
                [
                  "Lab",
                  "False-positive urine **amphetamine** screen; minor ECG changes and a 10% WBC drop in a few patients."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Dosing in the book",
              "items": [
                [
                  "Immediate release",
                  "Start **75 mg twice daily**; on day 4, **100 mg three times daily** (300 mg). Stay at 300 mg for several weeks. Maximum **450 mg** as 150 mg three times daily. Never raise more than **100 mg every 3 days**; no single dose above **150 mg**."
                ],
                [
                  "Sustained release",
                  "Start **100 mg once daily**; after 4 days, 100 mg twice daily, then 150 mg twice daily. Maximum **400 mg** (200 mg twice daily, or 300 mg morning and 100 mg afternoon). No single SR dose above 300 mg (book)."
                ],
                [
                  "Extended release",
                  "Can be taken as a single **450 mg** daily dose after titration."
                ],
                [
                  "Smoking cessation",
                  "SR **150 mg daily**, starting **10 to 14 days before** the quit date; **150 mg twice daily** from day 4; continue **7 to 12 weeks**."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Dose check: bupropion dose limits",
              "text": "The book's dosing paragraph mixes formulations. Current labels: **IR** start 100 mg twice daily, then 100 mg three times daily, maximum **450 mg** a day with **no single dose over 150 mg**; **SR** start 150 mg each morning, then 150 mg twice daily, maximum **400 mg** a day (**200 mg twice daily**); **XL** start 150 mg each morning, then 300 mg, maximum **450 mg once daily**.",
              "source": "Wellbutrin, Wellbutrin SR and Wellbutrin XL prescribing information"
            },
            {
              "type": "update",
              "year": "2022–2026",
              "title": "Dextromethorphan–bupropion (Auvelity)",
              "text": "Approved in **August 2022** for **MDD** in adults. **Dextromethorphan** is an **NMDA receptor antagonist** and **sigma-1 agonist**; **bupropion** adds its own antidepressant action and inhibits **CYP2D6**, which keeps dextromethorphan levels up. One tablet (45/105 mg) each morning for 3 days, then **twice daily** at least 8 hours apart; trials showed benefit from **week 1**. Same seizure precautions as bupropion. In **April 2026** it became the first non-antipsychotic approved for **agitation in Alzheimer dementia**.",
              "source": "Auvelity prescribing information; Axsome announcements, August 2022 and April 2026"
            }
          ]
        }
      ]
    },
    {
      "title": "Mirtazapine, nefazodone and trazodone",
      "sections": [
        {
          "id": "s212-mirt",
          "title": "Mirtazapine",
          "blocks": [
            {
              "type": "p",
              "text": "**Mirtazapine** (Remeron) raises both norepinephrine and serotonin **without reuptake blockade or MAO inhibition**. Through **5-HT3** blockade it tends to **relieve nausea and diarrhea** rather than cause them. Its trademark effects are **sedation and increased appetite**."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Mechanism",
                  "Blocks presynaptic **α2-adrenergic** receptors, increasing norepinephrine and serotonin neuron firing; blocks postsynaptic **5-HT2 and 5-HT3** (less anxiety, better sleep, more appetite). A **potent H1 antagonist**; moderate α1 and muscarinic blockade."
                ],
                [
                  "Kinetics",
                  "Rapid, complete absorption; peak 2 hours; half-life about **30 hours**; steady state in 6 days. Clearance falls up to **30%** in hepatic and **50%** in renal impairment, and in older men (40%) and women (10%)."
                ],
                [
                  "Who it suits",
                  "Depression with **severe insomnia**, **weight loss** and agitation (melancholic features); **older adults**. Young adults often dislike the sedation and appetite. Also used for chemotherapy nausea, where sedation and appetite help."
                ],
                [
                  "Combinations",
                  "Added to SSRIs or venlafaxine to augment response or counter **nausea, agitation and insomnia**; no pharmacokinetic interactions with other antidepressants."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Adverse reactions with mirtazapine (Table 21-18)",
              "head": [
                "Event",
                "Patients (%)"
              ],
              "rows": [
                [
                  "Somnolence",
                  "54"
                ],
                [
                  "Dry mouth",
                  "25"
                ],
                [
                  "Increased appetite",
                  "17"
                ],
                [
                  "Constipation",
                  "13"
                ],
                [
                  "Weight gain",
                  "12"
                ],
                [
                  "Dizziness",
                  "7"
                ],
                [
                  "Myalgias",
                  "5"
                ],
                [
                  "Disturbing dreams",
                  "4"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Precautions",
              "items": [
                [
                  "Sedation",
                  "Over **50%**; give at **bedtime**, warn about driving and getting up at night; avoid alcohol and other sedatives. Extreme sedation usually eases within the first week."
                ],
                [
                  "Metabolic",
                  "Appetite up in about **one-third**; cholesterol 20% above normal in **15%**; triglycerides 500 mg/dL or more in **6%**; ALT over 3 times normal in **2%** (0.3% placebo)."
                ],
                [
                  "Neutropenia",
                  "ANC **500/mm³ or less** within 2 months in **0.3%** before marketing, reversible, not seen more often after marketing. Check counts if **fever, sore throat, or mouth ulcers** appear; stop if the WBC is low."
                ],
                [
                  "Other",
                  "Dizziness 7%; some **orthostasis**; no added seizure risk; mania at the usual antidepressant rate. Use cautiously in pregnancy; the book advises against breastfeeding."
                ],
                [
                  "Interactions",
                  "Adds to sedation with **alcohol and benzodiazepines**; not within **14 days** of an MAOI. No laboratory interferences known."
                ],
                [
                  "Dosing",
                  "15, 30, 45 mg tablets and orally disintegrating tablets. Start **15 mg at bedtime**; raise by 15 mg every **5 days** to **45 mg**. Lower doses in older adults and with renal or hepatic disease."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-nefaz",
          "title": "Nefazodone",
          "blocks": [
            {
              "type": "p",
              "text": "**Nefazodone** (Serzone), an analog of trazodone, was introduced in **1995** without SSRI-type sexual side effects or sleep disruption, but sedation, nausea, dizziness, visual disturbances and rare **fatal hepatotoxicity** limited it. The brand was withdrawn in **2004**; **generic nefazodone** remains available."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Kinetics",
                  "Complete absorption but extensive metabolism: bioavailability about **20%**. Half-life **2 to 4 hours**; steady state with **hydroxynefazodone** in 4 to 5 days. Older people, especially women, clear half as much, so use lower doses. The metabolite **mCPP** can cause migraine, anxiety and weight loss."
                ],
                [
                  "Mechanism",
                  "Inhibits serotonin and, weakly, norepinephrine reuptake; the main effect is thought to be **5-HT2A antagonism** (the book's '5-HTA' is a typo). Mild **α1** blockade gives orthostasis but **not priapism**."
                ],
                [
                  "Indications",
                  "**Major depression** (300 to 600 mg a day). **Less inhibition of orgasm and desire** than SSRIs. Also panic, GAD, PMDD, chronic pain, PTSD and chronic fatigue; **not OCD**. Increases REM sleep and sleep continuity; may help treatment-resistant cases."
                ],
                [
                  "Adverse effects",
                  "Sedation, nausea, dizziness, insomnia, weakness, agitation; a vague 'medicated' feeling; **visual trails** (afterimages with movement). **Severe liver enzyme rises and liver failure**: do serial liver tests, especially with other hepatically metabolized drugs."
                ],
                [
                  "Other cautions",
                  "Postural hypotension (care with heart disease, stroke, dehydration, antihypertensives). Switching from an SSRI to nefazodone does not prevent SSRI withdrawal; mCPP may make it worse. Overdoses over 10 g have been survived; deaths with alcohol. Reduce in severe liver disease; no renal adjustment."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Adverse reactions with nefazodone 300 to 600 mg a day (Table 21-19)",
              "head": [
                "Reaction",
                "%",
                "Reaction",
                "%"
              ],
              "rows": [
                [
                  "Headache",
                  "36",
                  "Weakness",
                  "11"
                ],
                [
                  "Dry mouth",
                  "25",
                  "Lightheadedness",
                  "10"
                ],
                [
                  "Somnolence",
                  "25",
                  "Blurred vision",
                  "9"
                ],
                [
                  "Nausea",
                  "22",
                  "Dyspepsia",
                  "9"
                ],
                [
                  "Dizziness",
                  "17",
                  "Infection",
                  "8"
                ],
                [
                  "Constipation",
                  "14",
                  "Confusion",
                  "7"
                ],
                [
                  "Insomnia",
                  "11",
                  "Scotomata",
                  "7"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Interactions and dosing",
              "items": [
                [
                  "CYP3A4",
                  "A strong 3A4 inhibitor: cut **triazolam by 75%** and **alprazolam by 50%**. Also slows **digoxin** (monitor levels) and **haloperidol** (lower the dose); may worsen lithium side effects. Never with MAOIs."
                ],
                [
                  "Dosing",
                  "Start **100 mg twice daily** (50 mg twice daily is better tolerated, especially in older people). Raise by **100 to 200 mg a day** no faster than weekly. Optimal **300 to 600 mg** a day in two doses; once at bedtime may work. Older adults: about two-thirds of the usual dose, maximum **400 mg**. Benefit appears after **2 to 4 weeks**."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Label detail: nefazodone boxed warning",
              "text": "Nefazodone carries a **boxed warning for life-threatening hepatic failure** (about 1 case per 250,000 to 300,000 patient-years). Do not start it in active liver disease or with raised transaminases, and stop it if AST or ALT reach **3 times the upper limit** of normal. The book mentions the risk but not the boxed warning details.",
              "source": "Nefazodone prescribing information"
            }
          ]
        },
        {
          "id": "s212-traz",
          "title": "Trazodone",
          "blocks": [
            {
              "type": "p",
              "text": "**Trazodone** (Desyrel), a **triazolopyridine** approved in **1981**, was safer than TCAs, but heavy sedation even at low doses limited its antidepressant use. Instead it became a favorite **hypnotic**, and it is **not a controlled substance**."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Kinetics",
                  "Peak about **1 hour**; half-life **5 to 9 hours**; hepatic metabolism, 75% in urine."
                ],
                [
                  "Mechanism",
                  "Weak serotonin reuptake inhibition; potent **5-HT2A and 5-HT2C antagonism**. Active metabolite **mCPP** (a 5-HT2C agonist, half-life 14 hours) can cause migraine, anxiety, weight loss. **α1 blockade** causes many side effects."
                ],
                [
                  "Depression",
                  "Dose–response: **250 to 600 mg** a day are needed. Increases total sleep, reduces awakenings and **REM**, and unlike TCAs does **not reduce stage 4 sleep**; suits depression with anxiety and insomnia."
                ],
                [
                  "Insomnia",
                  "Called **first line** in the book: sedating, favorable sleep architecture, no anticholinergic effects. **25 to 100 mg at bedtime**."
                ],
                [
                  "Other uses",
                  "Erectile disorder (150 to 200 mg; largely replaced by PDE-5 inhibitors); low-dose (**50 mg**) for agitation in developmental disability and dementia; GAD above 250 mg; depression in schizophrenia; PTSD insomnia and nightmares."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Adverse effects",
              "items": [
                [
                  "Common",
                  "**Sedation, orthostatic hypotension**, dizziness, headache, nausea; dry mouth, gastric irritation. **No anticholinergic** effects, weight gain or constipation."
                ],
                [
                  "Orthostasis",
                  "Peaks **4 to 6 hours** after a dose, worse with antihypertensives or a large dose on an empty stomach. **Take with food** to lower the peak."
                ],
                [
                  "Cardiac",
                  "Case reports of arrhythmias with preexisting PVCs or mitral valve prolapse."
                ],
                [
                  "Blood",
                  "Usually insignificant neutropenia; check with fever or sore throat."
                ],
                [
                  "Overdose",
                  "Overdoses over **9 g** have been survived: lethargy, vomiting, orthostasis, dyspnea, tinnitus, tachycardia, incontinence, shivering, coma. Supportive care; forced diuresis may help."
                ],
                [
                  "Pregnancy",
                  "The book calls it contraindicated in pregnancy and breastfeeding; use caution in hepatic and renal disease."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Priapism",
              "text": "About **1 in 10,000** men, usually in the first **4 weeks** but up to **18 months**, at any dose. **Painful erections or erections lasting more than 1 hour** mean stop the drug and get evaluated. Emergency treatment is an **intracavernosal α1-adrenergic agonist** (metaraminol or epinephrine); about **one-third** need surgery, and some have permanent erectile dysfunction."
            },
            {
              "type": "defs",
              "title": "Interactions and dosing",
              "items": [
                [
                  "Interactions",
                  "Adds to CNS depressants and alcohol; hypotension with antihypertensives; raises **digoxin and phenytoin**; caution with warfarin. **CYP3A4 inhibitors** raise mCPP. No hypertensive crises when used for MAOI-induced insomnia."
                ],
                [
                  "Dosing",
                  "50, 100, 150, 300 mg tablets. Start **50 mg at bedtime**; raise by **50 mg every 3 days** as sedation and orthostasis allow. Therapeutic range **200 to 600 mg** in divided doses (some say 400 to 600, others 250 to 400). Titrate to 300 mg, then judge. Once-daily dosing works as well and causes less daytime sedation."
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Tricyclic and tetracyclic antidepressants",
      "sections": [
        {
          "id": "s212-tca",
          "title": "TCA pharmacology",
          "blocks": [
            {
              "type": "p",
              "text": "In **1957** imipramine's antidepressant effect was discovered, and its blockade of norepinephrine reuptake launched the catecholamine theory of depression. **Amitriptyline and imipramine** were once the most prescribed antidepressants, but their anticholinergic and antihistaminic effects pushed clinicians to **nortriptyline** (least orthostasis) and **desipramine** (least anticholinergic). Newer, safer drugs have sharply reduced TCA use, yet TCAs remain **unsurpassed in antidepressant efficacy**."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Kinetics",
                  "Complete absorption with large **first-pass** metabolism; peak **2 to 8 hours**; half-lives **10 to 70 hours** (longer for nortriptyline, maprotiline and especially **protriptyline**), so once-daily dosing works; steady state in **5 to 7 days**. Imipramine pamoate is an IM depot with limited use."
                ],
                [
                  "CYP2D6",
                  "Competition for 2D6 with **quinidine, cimetidine, fluoxetine, sertraline, paroxetine**, phenothiazines, carbamazepine, propafenone and flecainide raises TCA levels. Genetic 2D6 variation explains up to **40-fold** differences in levels."
                ],
                [
                  "Mechanism",
                  "Block **norepinephrine and serotonin transporters**. **Clomipramine** is the most serotonin selective and **desipramine** the most norepinephrine selective."
                ],
                [
                  "Receptor side effects",
                  "Blockade of **muscarinic**, **H1**, **α1 and α2** receptors determines each drug's profile. Least anticholinergic: **amoxapine, nortriptyline, desipramine, maprotiline**. Most antihistaminic: **doxepin**."
                ],
                [
                  "Compared with SSRIs",
                  "More constipation, sedation, dry mouth and lightheadedness, but **less sexual dysfunction**, long-term weight gain and sleep disturbance."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "TCA and tetracyclic preparations (Table 21-20)",
              "head": [
                "Drug",
                "Tablets (mg)",
                "Capsules (mg)",
                "Other"
              ],
              "wide": true,
              "rows": [
                [
                  "Imipramine (Tofranil)",
                  "10, 25, 50",
                  "75, 100, 125, 150",
                  "Parenteral 12.5 mg/mL"
                ],
                [
                  "Desipramine (Norpramin)",
                  "10, 25, 50, 75, 100, 150",
                  "—",
                  "—"
                ],
                [
                  "Trimipramine (Surmontil)",
                  "—",
                  "25, 50, 100",
                  "—"
                ],
                [
                  "Amitriptyline (Elavil)",
                  "10, 25, 50, 75, 100, 150",
                  "—",
                  "Parenteral 10 mg/mL"
                ],
                [
                  "Nortriptyline (Pamelor)",
                  "—",
                  "10, 25, 50, 75",
                  "Solution 10 mg/5 mL"
                ],
                [
                  "Protriptyline (Vivactil)",
                  "5, 10",
                  "—",
                  "—"
                ],
                [
                  "Amoxapine (Asendin)",
                  "25, 50, 100, 150",
                  "—",
                  "—"
                ],
                [
                  "Doxepin (Sinequan)",
                  "—",
                  "10, 25, 50, 75, 100, 150",
                  "Solution 10 mg/mL"
                ],
                [
                  "Maprotiline (Ludiomil)",
                  "25, 50, 75",
                  "—",
                  "—"
                ],
                [
                  "Clomipramine (Anafranil)",
                  "—",
                  "25, 50, 75",
                  "—"
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-tca-ind",
          "title": "TCA indications",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Major depression",
                  "Acute and **prophylactic** treatment are the main indications. Response is more likely with **melancholic features**, prior episodes and a family history. All TCAs are equally effective, though an individual may respond to one and not another. Psychotic depression almost always needs an **antipsychotic plus an antidepressant**."
                ],
                [
                  "Bipolar depression",
                  "Effective but **more likely to induce mania, hypomania or cycling** than SSRIs or bupropion; not advised routinely."
                ],
                [
                  "Clomipramine",
                  "Used worldwide for depression but approved in the United States **only for OCD**; it is the TCA that works for OCD (improvement in 2 to 4 weeks, continuing for 4 to 5 months), and a good choice for depression with marked obsessions."
                ],
                [
                  "Panic with agoraphobia",
                  "**Imipramine** is the best studied. Start small and titrate slowly because of early **anxiogenic** effects; low-dose benzodiazepines can help at first."
                ],
                [
                  "Generalized anxiety",
                  "**Doxepin** is FDA approved for anxiety; imipramine may help. Chlordiazepoxide–amitriptyline (**Limbitrol**) exists for mixed anxiety and depression."
                ],
                [
                  "Pain",
                  "Chronic **neuropathic pain** and **migraine prophylaxis**, most often **amitriptyline**, at lower doses (for example **75 mg**) with faster effect."
                ],
                [
                  "Other",
                  "**Imipramine for childhood enuresis**; doxepin for peptic ulcer (strong antihistamine effect); narcolepsy, nightmares, PTSD; sometimes ADHD, sleepwalking, separation anxiety and night terrors in children; clomipramine for premature ejaculation and compulsive behavior in autism."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "TCAs in children",
              "text": "TCAs have caused **sudden death** in several children and adolescents. The book says they should not be used in children except as a last resort, and the ECG should be monitored regularly when they are."
            }
          ]
        },
        {
          "id": "s212-tca-ae",
          "title": "TCA adverse effects",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Psychiatric",
                  "Switch to **mania or hypomania**; worsening of psychosis; **confusion or delirium** above about **300 ng/mL**, especially in dementia."
                ],
                [
                  "Anticholinergic",
                  "Dry mouth, constipation, blurred vision, urinary retention, delirium. Sugarless gum or fluoride lozenges for dry mouth; **bethanechol** 25 to 50 mg three or four times a day for urinary hesitancy (and erectile problems). Avoid in **narrow-angle glaucoma**; an attack needs a **miotic** urgently. Central anticholinergic syndrome is worse with DRAs or anticholinergics; **physostigmine** IM or IV diagnoses and treats it."
                ],
                [
                  "Cardiac",
                  "Tachycardia, flattened T waves, **prolonged QT**, depressed ST. **Imipramine is quinidine-like** (type IA) and may reduce PVCs. **Contraindicated with conduction defects**; with heart disease use only after newer drugs fail, starting low with cardiac monitoring. Persistent **tachycardia** is a common reason to stop; arrhythmogenic at overdose levels."
                ],
                [
                  "Orthostatic hypotension",
                  "The **most common** cardiovascular effect and the most common reason to stop; falls. **Nortriptyline** causes least. Avoid caffeine, drink 2 L a day, add salt; fludrocortisone works but switching to an SSRI is better. Stop TCAs several days before **elective surgery** (intraoperative hypertension)."
                ],
                [
                  "Sedation",
                  "From H1 and muscarinic blockade. Most: **amitriptyline, trimipramine, doxepin**. Intermediate: imipramine, amoxapine, nortriptyline, maprotiline. Least: **desipramine, protriptyline**."
                ],
                [
                  "Neurologic",
                  "Fine rapid tremor, myoclonic twitches of tongue and arms; rarely speech blockage, paresthesia, peroneal palsy, ataxia."
                ],
                [
                  "Amoxapine",
                  "Its metabolite blocks dopamine: **parkinsonism, akathisia, dyskinesia, rarely NMS**, and hyperprolactinemia with impotence, galactorrhea, anorgasmia and ejaculatory problems. May be the **most lethal** TCA in overdose."
                ],
                [
                  "Seizures",
                  "**Maprotiline** causes seizures if raised too fast or kept high too long; **clomipramine and amoxapine** lower the threshold most. Otherwise the class risk is low except in epilepsy or brain lesions (start low, go slow)."
                ],
                [
                  "Blood and skin",
                  "Rash in **4% to 5%** with maprotiline; rare agranulocytosis, leukopenia, eosinophilia: check a **CBC for sore throat or fever** in the first months."
                ],
                [
                  "Liver",
                  "Mild transaminase rises; fulminant hepatitis in **0.1% to 1%** (stop the drug)."
                ],
                [
                  "Other",
                  "Modest weight gain, gynecomastia, amenorrhea, **SIADH**, nausea, vomiting."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Pregnancy, lactation and ECT",
              "items": [
                [
                  "Pregnancy",
                  "No definite teratogenic link. **Neonatal withdrawal**: tachypnea, cyanosis, irritability, poor sucking. If possible stop **1 week before delivery**. One study of 80 exposed children found no effect on intelligence or language."
                ],
                [
                  "Breastfeeding",
                  "Milk levels equal plasma levels, but infant levels are usually undetectable."
                ],
                [
                  "ECT",
                  "Do not give TCAs during a course of **ECT** (cardiac risk)."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-tca-dose",
          "title": "TCA interactions, dosing and overdose",
          "blocks": [
            {
              "type": "defs",
              "title": "Interactions",
              "items": [
                [
                  "MAOIs",
                  "Not within **14 days** of an MAOI."
                ],
                [
                  "Antihypertensives",
                  "TCAs block antihypertensive effects (the book names propranolol and clonidine); with **methyldopa**, agitation."
                ],
                [
                  "Antiarrhythmics",
                  "Additive with **quinidine**, which also slows TCA metabolism."
                ],
                [
                  "Antipsychotics",
                  "TCAs and DRAs raise each other's levels (**desipramine doubles with perphenazine**) and add anticholinergic and sedative effects."
                ],
                [
                  "CNS depressants and sympathomimetics",
                  "Additive sedation with opioids, alcohol, hypnotics, cold medicines; serious cardiovascular effects with sympathomimetics."
                ],
                [
                  "Levels lowered by",
                  "Oral contraceptives, **smoking**, barbiturates, **carbamazepine**, chloral hydrate, lithium, primidone, ascorbic acid, ammonium chloride."
                ],
                [
                  "Levels raised by",
                  "**Fluoxetine, paroxetine, fluvoxamine** (3 to 4 times), cimetidine, acetazolamide, bicarbonate, aspirin, thiazides."
                ],
                [
                  "Lab",
                  "Little interference, but structural similarity can disturb **antipsychotic level** assays."
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Before and during a TCA",
              "items": [
                [
                  "Workup",
                  "Physical exam; **CBC with differential**, electrolytes, **liver tests**; **ECG** for everyone, especially women over 40 and men over 30. **Contraindicated if QTc over 450 ms**."
                ],
                [
                  "Start",
                  "**25 mg a day** (except protriptyline) and raise as tolerated; give most of a sedating drug at night, eventually all at bedtime."
                ],
                [
                  "Titrate",
                  "Check **pulse and orthostatic BP**. A common mistake is stopping the increase when the drug is tolerated but the dose is still below the therapeutic range."
                ],
                [
                  "Levels",
                  "Draw after **5 to 7 days** on a stable dose, **8 to 12 hours** after the last dose. Levels vary **30- to 50-fold** on the same dose. Treat the patient, not the number."
                ],
                [
                  "Stop",
                  "Drop to three-quarters of the dose for a month, then taper **25 mg every 4 to 7 days** (5 mg for protriptyline) to avoid **cholinergic rebound** (nausea, sweating, headache, neck pain, vomiting) or rebound mania."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "TCA dose ranges and plasma levels (Table 21-21)",
              "head": [
                "Drug",
                "Usual adult dose (mg/day)",
                "Therapeutic level (ng/mL)"
              ],
              "wide": true,
              "rows": [
                [
                  "Imipramine",
                  "150–300",
                  "150–300 (with desipramine)"
                ],
                [
                  "Desipramine",
                  "150–300",
                  "150–300"
                ],
                [
                  "Trimipramine",
                  "150–300",
                  "150–300"
                ],
                [
                  "Amitriptyline",
                  "150–300",
                  "100–250 (with nortriptyline)"
                ],
                [
                  "Nortriptyline",
                  "50–150",
                  "**50–150 (therapeutic window)**"
                ],
                [
                  "Protriptyline",
                  "15–60",
                  "75–250"
                ],
                [
                  "Amoxapine",
                  "150–400",
                  "200–500 (limited data)"
                ],
                [
                  "Doxepin",
                  "150–300",
                  "100–250"
                ],
                [
                  "Maprotiline",
                  "150–230",
                  "150–300"
                ],
                [
                  "Clomipramine",
                  "130–250",
                  "50–250 (limited data)"
                ]
              ]
            },
            {
              "type": "update",
              "title": "Correction: TCA level units",
              "text": "Table 21-21 labels TCA levels in **µg/mL** and the text gives nortriptyline's target as '100 mg/nL'. Both are typos: TCA levels are reported in **ng/mL** (nortriptyline window **50 to 150 ng/mL**).",
              "source": "Standard therapeutic drug monitoring references; current laboratory reporting"
            },
            {
              "type": "defs",
              "title": "Specific drugs",
              "items": [
                [
                  "Nortriptyline",
                  "Start 25 mg; most need about **75 mg** for a level near 100 ng/mL; up to 150 mg. Has a **therapeutic window**: below 50 or above 150 ng/mL may work less well."
                ],
                [
                  "Amoxapine",
                  "Start 150 mg, raise to 400 mg."
                ],
                [
                  "Protriptyline",
                  "Start 15 mg, raise to 60 mg."
                ],
                [
                  "Maprotiline",
                  "Start 25 mg, raise over **4 weeks** to 225 mg, keep there only **6 weeks**, then 175 to 200 mg (seizure risk)."
                ],
                [
                  "Chronic pain",
                  "Start very low; amitriptyline or nortriptyline **10 to 75 mg** often suffices."
                ],
                [
                  "Children",
                  "Imipramine **1.5 mg/kg** a day, maximum **5 mg/kg**; **enuresis 50 to 100 mg at bedtime**. Clomipramine start 50 mg, maximum **3 mg/kg or 200 mg**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "TCA overdose",
              "text": "Often **fatal**. For patients at risk, prescribe **nonrefillable supplies of no more than 1 week**. Signs: agitation, delirium, **convulsions**, hyperreflexia, bowel and bladder paralysis, BP and temperature dysregulation, **mydriasis**, then coma and respiratory depression. Arrhythmias may resist treatment, and because of long half-lives the risk lasts **3 to 4 days**: monitor in **intensive care**."
            }
          ]
        }
      ]
    },
    {
      "title": "Monoamine oxidase inhibitors",
      "sections": [
        {
          "id": "s212-maoi",
          "title": "MAOI pharmacology and indications",
          "blocks": [
            {
              "type": "p",
              "text": "MAOIs, introduced in the late **1950s**, were the **first antidepressant class**. Their antidepressant effect was found by chance in tuberculosis patients. Fear of **tyramine-induced hypertensive crisis** and the restrictive diet has always limited them, and after the SSRIs they became mainly a **treatment-resistant** option: their second-line status reflects **safety, not efficacy**."
            },
            {
              "type": "update",
              "title": "Correction: the first MAOI",
              "text": "The book names **isoniazid**. The tuberculosis drug that turned out to be an antidepressant MAOI was its relative **iproniazid**; isoniazid itself is only a weak MAO inhibitor.",
              "source": "Standard psychopharmacology histories"
            },
            {
              "type": "defs",
              "title": "The drugs",
              "items": [
                [
                  "Irreversible, nonselective",
                  "**Phenelzine** (Nardil), **tranylcypromine** (Parnate), **isocarboxazid** (Marplan). Phenelzine and isocarboxazid are **hydrazines**."
                ],
                [
                  "MAO-B selective at low doses",
                  "**Selegiline** (Eldepryl; transdermal **Emsam**) and **rasagiline** (Azilect); selegiline loses selectivity at higher doses."
                ],
                [
                  "Reversible MAO-A inhibitor (RIMA)",
                  "**Moclobemide** (Manerix), available in most countries but **not the United States**. Brofaromine and befloxatone were never registered."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Pharmacology",
              "items": [
                [
                  "Kinetics",
                  "Phenelzine, tranylcypromine, isocarboxazid: peak within **2 hours**; plasma half-life **2 to 3 hours**, but because they **irreversibly** inactivate MAO, a single dose can act for up to **2 weeks**. Moclobemide half-life **0.5 to 3.5 hours** with a much briefer effect."
                ],
                [
                  "The enzymes",
                  "MAO sits on the **outer mitochondrial membrane** and breaks down cytoplasmic and extraneuronal monoamines in brain, sympathetic nerves, **liver and gut**. **MAO-A** degrades **norepinephrine, serotonin and epinephrine**; **both A and B** degrade **dopamine and tyramine**."
                ],
                [
                  "Amphetamine-like",
                  "**Phenelzine and tranylcypromine** resemble amphetamine and **release dopamine and norepinephrine**, with stimulant effects."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Indications",
              "items": [
                [
                  "Depression",
                  "Phenelzine beats TCAs in **atypical depression**: mood reactivity, **rejection sensitivity**, anergia (leaden paralysis), **hyperphagia and hypersomnia**. MAOIs may also beat TCAs in **bipolar depression**."
                ],
                [
                  "Anxiety",
                  "**Panic disorder** and **social phobia** respond well."
                ],
                [
                  "Other",
                  "Bulimia, PTSD, anginal pain, atypical facial pain, migraine, ADHD, idiopathic orthostatic hypotension, depression after traumatic brain injury."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-maoi-ae",
          "title": "MAOI adverse effects and the tyramine reaction",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Most frequent",
                  "**Orthostatic hypotension, insomnia, weight gain, edema, sexual dysfunction**."
                ],
                [
                  "Orthostasis",
                  "Titrate cautiously. Avoid caffeine, drink 2 L a day, add salt, adjust antihypertensives, support stockings; severe cases **fludrocortisone 0.1 to 0.2 mg**. Divide **tranylcypromine** doses."
                ],
                [
                  "Insomnia",
                  "Divide doses, nothing after dinner, a benzodiazepine hypnotic if needed."
                ],
                [
                  "Weight, edema, sexual",
                  "Often resistant to treatment; may need a switch. Between MAOIs, stop the first for **10 to 14 days** before starting the second."
                ],
                [
                  "Paresthesias",
                  "Myoclonus, muscle pain; paresthesias may reflect **pyridoxine deficiency** (give **50 to 150 mg** a day)."
                ],
                [
                  "Feeling drunk",
                  "Confusion or feeling drunk suggests the dose is too high."
                ],
                [
                  "Liver",
                  "Hepatotoxicity with hydrazines is uncommon; MAOIs are **less cardiotoxic and less epileptogenic** than TCAs."
                ],
                [
                  "Moclobemide",
                  "Dizziness, nausea, insomnia; fewer GI effects than SSRIs; no anticholinergic, cardiovascular or sexual effects."
                ],
                [
                  "Cautions",
                  "Renal or cardiovascular disease, **hyperthyroidism**; may change hypoglycemic needs. Can trigger **mania** in bipolar depression and **psychosis** in schizophrenia. Contraindicated in **pregnancy** (minimal data) and breastfeeding."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Why tyramine is dangerous",
              "text": "Dietary **tyramine** is normally broken down by **intestinal and hepatic MAO**. With an MAOI, intact tyramine reaches the circulation and releases norepinephrine, a powerful **pressor** effect. Keep the diet for **2 weeks after the last dose** of an irreversible MAOI so the enzyme can be resynthesized. Also avoid **sympathomimetics** (ephedrine, pseudoephedrine) and **dextromethorphan**. Even **bee stings** can trigger a crisis."
            },
            {
              "type": "defs",
              "title": "Hypertensive crisis",
              "items": [
                [
                  "Symptoms",
                  "Severe hypertension with **occipital headache, stiff neck**, sweating, nausea and vomiting. Seek emergency care."
                ],
                [
                  "Treatment in the book",
                  "α-blockers: **phentolamine** or **chlorpromazine** (BP falls within 5 minutes); IV **furosemide** for fluid load; a **β-blocker** for tachycardia; sublingual **nifedipine 10 mg**, repeated after 20 minutes."
                ],
                [
                  "Contraindicated",
                  "**Thyrotoxicosis** and **pheochromocytoma**."
                ],
                [
                  "RIMAs",
                  "Lower risk: little MAO-B inhibition and MAO-A activity returns **16 to 48 hours** after the last dose. Avoid only high-tyramine foods, for 3 days after stopping; a practical rule is no tyramine **1 hour before to 2 hours after** a dose."
                ],
                [
                  "Spontaneous crisis",
                  "A rare crisis without tyramine, usually soon after the first exposure; such patients should avoid MAOIs altogether."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Treatment check: sublingual nifedipine",
              "text": "Sublingual **nifedipine** for hypertensive crises fell out of use after the mid-1990s, when reports of uncontrolled drops in blood pressure, **stroke and myocardial infarction** led to calls for a moratorium. Prefer titratable IV agents such as **phentolamine** in a monitored setting.",
              "source": "Grossman E et al., Should a moratorium be placed on sublingual nifedipine capsules given for hypertensive emergencies and pseudoemergencies? JAMA, 1996"
            },
            {
              "type": "table",
              "caption": "Tyramine-rich foods (Table 21-22, abridged)",
              "head": [
                "Content",
                "Examples"
              ],
              "wide": true,
              "rows": [
                [
                  "High (2 mg or more a serving)",
                  "**Aged cheeses** (English Stilton, blue, old or extra-old cheddar, Danish blue, mozzarella, cheese spreads); cured and air-dried sausage, salami, mortadella, pâtés and organ meats; liqueurs and concentrated after-dinner drinks; **Marmite** (yeast extract); **sauerkraut**"
                ],
                [
                  "Moderate (0.5 to 1.99 mg)",
                  "Gruyère, muenster, feta, parmesan, gorgonzola, blue cheese dressing; aged chicken liver, bologna, aged and smoked meats, salmon mousse; some beers and ales; Rioja red wine"
                ],
                [
                  "Low (under 0.5 mg)",
                  "Brie, Camembert; pickled herring, smoked fish, kielbasa, fresh chicken liver, liverwurst; red wine, sherry, scotch; ripe banana and avocado, **banana peel**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Table footnotes worth knowing",
              "text": "Any food left out to **age or spoil** can develop tyramine. **White wine, gin and vodka** contain none. Alcohol can cause marked **orthostasis** with MAOIs."
            },
            {
              "type": "defs",
              "title": "Withdrawal and overdose",
              "items": [
                [
                  "Withdrawal",
                  "Abrupt stopping causes a self-limited syndrome of arousal, mood disturbance and somatic symptoms; taper over **several weeks**."
                ],
                [
                  "Overdose",
                  "Symptoms start **1 to 6 hours** after ingestion: agitation progressing to coma, **hyperthermia**, hypertension, tachypnea, tachycardia, **dilated pupils**, hyperreflexia, involuntary **facial and jaw** movements. **Acidifying the urine** speeds excretion; dialysis may help; phentolamine or chlorpromazine for hypertension. **Moclobemide** overdose is relatively mild."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-maoi-int",
          "title": "MAOI interactions and switching",
          "blocks": [
            {
              "type": "p",
              "text": "Most antidepressants and precursors must be avoided. Patients should tell every physician and **dentist** that they take an MAOI. MAOIs potentiate CNS depressants such as alcohol and barbiturates. **SSRIs, clomipramine**, **lithium** or **tryptophan** with an MAOI can cause **serotonin syndrome** (tremor, hypertonicity, myoclonus, autonomic signs, then hallucinosis, hyperthermia, death). **Meperidine** and **fentanyl** with MAOIs have caused **fatal** reactions."
            },
            {
              "type": "table",
              "caption": "Drugs to avoid with MAOIs (Table 21-23, partial)",
              "head": [
                "Never use",
                "Use carefully"
              ],
              "rowHeads": false,
              "wide": true,
              "rows": [
                [
                  "Antiasthmatics; antihypertensives (methyldopa, guanethidine, reserpine); **buspirone**; **levodopa**",
                  "Anticholinergics; antihistamines; disulfiram; bromocriptine; hydralazine"
                ],
                [
                  "**Opioids**, especially **meperidine, dextromethorphan**, propoxyphene, **tramadol** (morphine or codeine may be less dangerous)",
                  "Sedative-hypnotics; terpin hydrate with codeine"
                ],
                [
                  "Cold, allergy or sinus medicines with dextromethorphan or **sympathomimetics**",
                  "Tricyclics and tetracyclics (**avoid clomipramine**)"
                ],
                [
                  "**SSRIs, clomipramine, venlafaxine**, sibutramine; **L-tryptophan**",
                  ""
                ],
                [
                  "Sympathomimetics: **amphetamines, cocaine, methylphenidate**, dopamine, epinephrine, norepinephrine, isoproterenol, ephedrine, pseudoephedrine, phenylpropanolamine",
                  ""
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Washout rules",
              "head": [
                "Switch",
                "Wait"
              ],
              "rows": [
                [
                  "Irreversible MAOI → any antidepressant",
                  "At least **14 days**"
                ],
                [
                  "Antidepressant → irreversible MAOI",
                  "**10 to 14 days**; **5 weeks after fluoxetine**"
                ],
                [
                  "Venlafaxine → MAOI",
                  "At least **7 days**"
                ],
                [
                  "MAOI → bupropion",
                  "At least **14 days**"
                ],
                [
                  "One MAOI → another",
                  "Taper and stop for **10 to 14 days**"
                ],
                [
                  "RIMA (moclobemide) → other drugs",
                  "MAO activity recovers in **24 to 48 hours**"
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "CYP effects",
                  "Tranylcypromine inhibits **CYP2C19**. Moclobemide inhibits 2D6, 2C19 and 1A2 and is a 2C19 substrate; cimetidine and fluoxetine slow its elimination, although modest doses of fluoxetine and moclobemide together may be tolerated."
                ],
                [
                  "Laboratory",
                  "MAOIs may **lower glucose**, falsely raise **urinary metanephrines** (false-positive for **pheochromocytoma** or neuroblastoma), and slightly raise thyroid tests."
                ]
              ]
            }
          ]
        },
        {
          "id": "s212-maoi-dose",
          "title": "MAOI dosing",
          "blocks": [
            {
              "type": "table",
              "caption": "MAOI preparations and doses (Table 21-24)",
              "head": [
                "Drug",
                "Usual (mg/day)",
                "Maximum (mg/day)",
                "Form"
              ],
              "wide": true,
              "rows": [
                [
                  "Isocarboxazid (Marplan)",
                  "20–40",
                  "60",
                  "10 mg tablets"
                ],
                [
                  "Phenelzine (Nardil)",
                  "30–60",
                  "90",
                  "15 mg tablets"
                ],
                [
                  "Tranylcypromine (Parnate)",
                  "20–60",
                  "60",
                  "10 mg tablets"
                ],
                [
                  "Rasagiline (Azilect)",
                  "0.5–1",
                  "1",
                  "0.5 or 1 mg tablets"
                ],
                [
                  "Selegiline (Eldepryl)",
                  "10",
                  "30",
                  "5 mg tablets"
                ],
                [
                  "Moclobemide (Manerix)",
                  "300–600",
                  "600",
                  "100 or 150 mg tablets"
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Phenelzine",
                  "Test dose **15 mg** on day 1; **15 mg three times daily** in week 1; then up **15 mg a day each week** to **90 mg** in divided doses by week 4."
                ],
                [
                  "Tranylcypromine and isocarboxazid",
                  "Test dose **10 mg**, up to 10 mg three times daily by the end of week 1. Many recommend ceilings of **40 mg** (tranylcypromine) and **50 mg** (isocarboxazid). Small divided tranylcypromine doses lessen hypotension."
                ],
                [
                  "Choosing",
                  "No rationale for choosing one irreversible MAOI over another."
                ],
                [
                  "Combinations",
                  "MAOIs with TCAs, SSRIs or lithium are generally contraindicated but have been used with **extreme caution** in refractory depression."
                ],
                [
                  "Monitoring",
                  "Periodic **liver tests**, especially with **phenelzine and isocarboxazid**."
                ],
                [
                  "Ages",
                  "Older adults are more sensitive, but because MAO activity **rises with age**, doses are the same as for younger adults. Little is known in children."
                ],
                [
                  "Transdermal selegiline",
                  "Has antidepressant properties; selective for MAO-B at low doses, less so at higher doses."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Correction: what Emsam is approved for",
              "text": "The book says transdermal selegiline (**Emsam**, 2006) is used for parkinsonism. Emsam is approved for **major depressive disorder** in adults (6, 9 and 12 mg per 24 hours). At **6 mg/24 h** no tyramine diet is required; at 9 and 12 mg the diet is advised. It is contraindicated under age 12. Oral selegiline and rasagiline are Parkinson disease drugs.",
              "source": "Emsam prescribing information"
            }
          ]
        }
      ]
    },
    {
      "title": "Thyroid hormones, novel agents and choosing a drug",
      "sections": [
        {
          "id": "s212-thyroid",
          "title": "Thyroid hormones",
          "blocks": [
            {
              "type": "p",
              "text": "**Levothyroxine** (T4; Synthroid) and **liothyronine** (T3; Cytomel) are used to **augment antidepressants**, for **rapid-cycling bipolar I** disorder, and as replacement in **lithium-induced hypothyroidism**. Most studies find patients given **T3 are about twice as likely to respond** to their antidepressant as with placebo, with TCAs and SSRIs. Many endocrinologists object, citing **osteoporosis** and **arrhythmias**."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Pharmacology",
                  "Variable oral absorption, better on an **empty stomach**. T4 enters neurons and is converted to **T3**, the active form. Half-lives: **T4 6 to 7 days**, **T3 1 to 2 days**. Acts on intracellular receptors that regulate many genes, including neurotransmitter receptors; the antidepressant mechanism is unknown."
                ],
                [
                  "When",
                  "After a **6-week** adequate antidepressant trial fails, augment with **lithium or thyroid hormone**; most clinicians try lithium first. **Liothyronine converts about 50%** of nonresponders to responders. Thyroid test results do not predict response."
                ],
                [
                  "Dose",
                  "**Liothyronine 25 or 50 µg** a day added to the antidepressant. An adequate trial lasts **2 to 3 weeks**. If it works, continue **2 months**, then taper by **12.5 µg every 3 to 7 days**."
                ],
                [
                  "Adverse effects",
                  "Infrequent at 25 to 50 µg: headache, weight loss, palpitations, nervousness, diarrhea, cramps, sweating, tachycardia, raised BP, tremor, insomnia. Long-term osteoporosis (not seen in T3 augmentation studies). Overdose can cause **heart failure and death**."
                ],
                [
                  "Contraindications",
                  "Cardiac disease, **angina**, hypertension, **thyrotoxicosis**, uncorrected **adrenal insufficiency**, acute MI. Caution in older adults with occult heart disease. Safe in pregnancy with monitoring; minimal milk transfer."
                ],
                [
                  "Interactions",
                  "Potentiate **warfarin**; raise insulin and digitalis needs; avoid with **sympathomimetics, ketamine, maprotiline** (cardiac decompensation). SSRIs, TCAs, **lithium** and **carbamazepine** can lower T4 and raise TSH."
                ],
                [
                  "Laboratory",
                  "Liothyronine suppresses endogenous T4, lowering T4-based tests."
                ],
                [
                  "Forms",
                  "Liothyronine 5, 25, 50 µg; levothyroxine 12.5 to 300 µg tablets and parenteral forms."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Thyroid testing in depression",
              "items": [
                [
                  "Why test",
                  "Hypothyroidism can mimic depression: up to **10%** of patients with depression and fatigue had incipient hypothyroidism, and **8%** of depressed patients have some thyroid illness. **Lithium** can cause hypothyroidism and, rarely, hyperthyroidism."
                ],
                [
                  "TRH stimulation test",
                  "For borderline results or suspected subclinical or lithium-induced hypothyroidism. IV **protirelin** (TRH), then TSH at 15, 30, 60 and 90 minutes. A rise of **5 to 25 mIU/mL** is normal; **under 7** is blunted and may correlate with depression."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Correction: TRH test dose",
              "text": "The book gives the protirelin dose as **500 mg**; the standard dose is **500 µg** (micrograms) IV. Protirelin is no longer marketed in the United States, so the test is now rarely done there.",
              "source": "Standard endocrine testing references"
            }
          ]
        },
        {
          "id": "s212-ketamine",
          "title": "Ketamine and esketamine",
          "blocks": [
            {
              "type": "p",
              "text": "Novel rapid-acting agents are given in **specialized settings** by trained staff because of their safety profile."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Ketamine",
                  "An anesthetic and **noncompetitive NMDA antagonist**. A single **subanesthetic IV** dose can relieve depression within about **4 hours**; benefit lasts weeks, then depression often returns without more treatment. Risks: anesthetic and **psychotomimetic** effects; be ready to manage **respiratory depression or bradycardia**."
                ],
                [
                  "Esketamine",
                  "The **S-enantiomer** of ketamine, FDA approved in **2019** for depression in adults as a **nasal spray**. Like ketamine it blocks NMDA receptors and dopamine transporters, but it **does not act at sigma receptors**, which may reduce psychotomimetic effects."
                ],
                [
                  "Esketamine safety",
                  "Must be given in a clinic able to **observe for at least 2 hours**. Main effects: **sedation, dissociation**, visual and speech difficulty, confusion and possibly delirium, **anxiety** and **raised blood pressure**."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Correction: esketamine's brand and form",
              "text": "In the United States esketamine is **Spravato**, a **nasal spray only**, Schedule **CIII**, available only through a **REMS** at certified sites. 'Ketanest' is an older European brand of injectable esketamine; there is no approved U.S. injectable form. Dosing: **56 mg** on day 1, then 56 or **84 mg twice weekly** for weeks 1 to 4, weekly in weeks 5 to 8, then weekly or every 2 weeks. Check **BP** before and after dosing; patients may not drive until the next day.",
              "source": "Spravato prescribing information"
            },
            {
              "type": "update",
              "year": "2025",
              "title": "Esketamine approved as monotherapy",
              "text": "In **January 2025** the FDA approved Spravato as **monotherapy** for adults with **treatment-resistant depression** (inadequate response to at least two oral antidepressants); before this it had to be paired with an oral antidepressant. In the monotherapy trial, **4-week remission** was **22.5% versus 7.6%** with placebo, with improvement from **24 hours**. It is also approved, with an oral antidepressant, for depressive symptoms in adults with MDD and **acute suicidal ideation or behavior** (2020).",
              "source": "Johnson & Johnson announcement, January 21, 2025; Spravato prescribing information"
            },
            {
              "type": "update",
              "year": "2023",
              "title": "FDA warning on compounded ketamine",
              "text": "In **October 2023** the FDA warned about **compounded ketamine** sold for psychiatric use, including **at-home** products from telehealth platforms: ketamine is not approved for any psychiatric disorder, and unmonitored use risks **sedation, dissociation, raised BP, respiratory depression, abuse** and bladder injury.",
              "source": "FDA, compounded ketamine warning, October 2023"
            }
          ]
        },
        {
          "id": "s212-gaba",
          "title": "Neurosteroids: brexanolone and zuranolone",
          "blocks": [
            {
              "type": "defs",
              "title": "Brexanolone (Zulresso)",
              "items": [
                [
                  "What it is",
                  "**Allopregnanolone**, a neurosteroid **positive allosteric modulator of GABAA** receptors (also a negative modulator at nicotinic receptors, possibly acting at 5-HT3). Approved in **2019** as a breakthrough therapy for **postpartum depression**."
                ],
                [
                  "Speed",
                  "Responders improve within **2 to 3 days**, like ketamine; long-term efficacy is unknown. Benzodiazepines, also GABAA modulators, are not antidepressants, so the mechanism is unclear."
                ],
                [
                  "Drawbacks",
                  "**Continuous IV infusion over 60 hours** with gradual dose increases, in hospital, to guard against **excess sedation and syncope**; **Schedule IV**; restricted distribution; about **$34,000** per treatment plus the hospital stay."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2022–2024",
              "title": "Brexanolone extended to teenagers, then discontinued",
              "text": "The indication was widened to patients **15 and older** in **June 2022**. Its maker then stopped selling Zulresso after **December 31, 2024**, in favor of oral zuranolone.",
              "source": "Sage Therapeutics third-quarter 2024 report, October 29, 2024; Zulresso prescribing information"
            },
            {
              "type": "update",
              "year": "2023",
              "title": "Zuranolone (Zurzuvae): the first oral drug for postpartum depression",
              "text": "Approved **August 4, 2023**. An oral **neuroactive steroid GABAA positive allosteric modulator** taken as **50 mg once daily in the evening with fat-containing food for 14 days** (40 mg if CNS effects occur; 30 mg with strong CYP3A4 inhibitors). Improvement can begin by **day 3**. **Boxed warning**: impaired driving; do not drive or do hazardous work for at least **12 hours** after each dose. Schedule **IV**. The FDA **declined** to approve it for **major depressive disorder** in general.",
              "source": "Biogen and Sage announcement, August 4, 2023; Zurzuvae prescribing information"
            }
          ]
        },
        {
          "id": "s212-newer",
          "title": "Other antidepressant approvals since the 12th edition",
          "blocks": [
            {
              "type": "p",
              "text": "These drugs and indications are not in the 12th edition. Each has a page in the Drugs section."
            },
            {
              "type": "update",
              "year": "2023",
              "title": "Gepirone ER (Exxua)",
              "text": "Approved **September 2023** for **MDD** in adults: a selective **5-HT1A receptor agonist**, related to buspirone, without SSRI-type sexual side effects in trials. Start **18.2 mg once daily** with food and titrate up to **72.6 mg**. It prolongs **QTc**: get a baseline ECG and do not use with a **QTc over 450 ms**, congenital long QT, or **strong CYP3A4 inhibitors**.",
              "source": "FDA approval letter, September 2023; Exxua prescribing information"
            },
            {
              "type": "update",
              "year": "2022–2025",
              "title": "More antipsychotics approved as adjuncts in depression",
              "text": "The book lists **aripiprazole** and **quetiapine XR** (plus brexpiprazole, and olanzapine–fluoxetine for treatment-resistant depression). Since then **cariprazine** (Vraylar, **December 2022**, 1.5 to 3 mg) and **lumateperone** (Caplyta, **November 2025**, 42 mg) were approved as **adjuncts to antidepressants in MDD**. Watch for akathisia, weight and metabolic effects.",
              "source": "AbbVie announcement, December 16, 2022; Johnson & Johnson announcement, November 2025; Vraylar and Caplyta prescribing information"
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Dextromethorphan–bupropion",
              "text": "**Auvelity**, approved in 2022 for MDD and in 2026 for agitation in Alzheimer dementia, is covered with **bupropion** in Part 2."
            }
          ]
        },
        {
          "id": "s212-choose",
          "title": "Putting it together: choosing and switching",
          "blocks": [
            {
              "type": "p",
              "text": "The book states that antidepressants are, as classes, **equally effective**; choices rest on **side effects, safety in overdose, interactions, comorbidity and past response**. This table gathers the book's descriptions."
            },
            {
              "type": "table",
              "caption": "Antidepressant profiles in brief (compiled from section 21.2)",
              "head": [
                "Drug or class",
                "Sedation",
                "Weight gain",
                "Sexual dysfunction",
                "Overdose danger",
                "Key point"
              ],
              "wide": true,
              "rows": [
                [
                  "SSRIs",
                  "Low (paroxetine more)",
                  "Variable; **paroxetine** most",
                  "**High**",
                  "Low (citalopram worst)",
                  "First line; discontinuation with paroxetine"
                ],
                [
                  "Venlafaxine, desvenlafaxine",
                  "Low",
                  "Low",
                  "Moderate",
                  "Moderate",
                  "Dose-related **hypertension**; harsh discontinuation"
                ],
                [
                  "Duloxetine",
                  "Low",
                  "Low",
                  "Uncertain",
                  "Moderate",
                  "**Neuropathic pain**; avoid with alcohol or liver disease"
                ],
                [
                  "Bupropion",
                  "None",
                  "**Weight loss**",
                  "**Minimal**",
                  "Seizures",
                  "**Seizure risk**; avoid in eating disorders and panic"
                ],
                [
                  "Mirtazapine",
                  "**High**",
                  "**High**",
                  "Low",
                  "Low",
                  "Insomnia, poor appetite, nausea; older adults"
                ],
                [
                  "Trazodone",
                  "**High**",
                  "Low",
                  "Low (but **priapism**)",
                  "Low",
                  "Mostly used as a hypnotic"
                ],
                [
                  "Nefazodone",
                  "Moderate",
                  "Low",
                  "Low",
                  "Low",
                  "**Liver failure**; CYP3A4 inhibition"
                ],
                [
                  "TCAs",
                  "Varies (amitriptyline high)",
                  "Moderate",
                  "Lower than SSRIs",
                  "**High, often fatal**",
                  "ECG; nortriptyline window; pain, enuresis, OCD (clomipramine)"
                ],
                [
                  "MAOIs",
                  "Low (insomnia)",
                  "Moderate",
                  "Moderate",
                  "High",
                  "**Tyramine diet**; atypical depression; washouts"
                ]
              ]
            },
            {
              "type": "steps",
              "title": "When the first antidepressant fails (book principles)",
              "items": [
                [
                  "Check the basics",
                  "Adherence, adequate **dose and duration** (about 6 weeks), the diagnosis (bipolar, psychosis, thyroid disease), substance use."
                ],
                [
                  "Try another SSRI",
                  "**Over half** of SSRI nonresponders respond to a second SSRI."
                ],
                [
                  "Switch class",
                  "To an SNRI, bupropion, mirtazapine, a TCA or, for resistant or atypical depression, an MAOI, respecting **washout** rules."
                ],
                [
                  "Augment",
                  "**Lithium** or **liothyronine** (25 to 50 µg), **bupropion** or **mirtazapine** added to an SSRI or venlafaxine, or an **antipsychotic** approved as an adjunct."
                ],
                [
                  "Specialized options",
                  "**Esketamine** or ketamine in certified settings; ECT (Chapter 22, Other Somatic Therapies)."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Washouts to know",
              "text": "**14 days** after an irreversible MAOI before any antidepressant; **5 weeks** after **fluoxetine** before an MAOI; **7 days** after venlafaxine before an MAOI; **14 days** between an MAOI and bupropion, mirtazapine or a TCA."
            }
          ]
        }
      ]
    }
  ]
});
