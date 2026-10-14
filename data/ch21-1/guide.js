/* Chapter 21.1 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., section 21.1. */
KS.add("ch21-1", "guide", {
  "intro": "Section 21.1 covers the antipsychotics: the second-generation serotonin–dopamine antagonists, drug by drug from risperidone to clozapine, and the first-generation dopamine receptor antagonists, with their potency, indications, adverse effects from neuroleptic malignant syndrome to retinal pigmentation, interactions, dosing, depots, plasma levels and treatment resistance. Dashed boxes mark approvals and label changes since the 12th edition, such as xanomeline–trospium and the end of the clozapine REMS. Every drug also has its own page in the Drugs section.",
  "objectives": [
    "Explain how serotonin–dopamine antagonists differ from dopamine receptor antagonists in mechanism, efficacy and side effects.",
    "Know each second-generation drug's indications, dosing, distinctive side effects and interactions, and set up metabolic monitoring.",
    "Use clozapine safely: indications, titration, neutropenia monitoring under current rules, seizures, myocarditis and interactions.",
    "Apply potency to predict first-generation side effects, and recognize and manage neuroleptic malignant syndrome, anticholinergic toxicity, hypotension and cardiac effects.",
    "Plan acute, PRN, maintenance and depot treatment, use plasma levels, and define treatment resistance.",
    "Identify post-publication changes, including new mechanisms, indications and long-acting injections."
  ],
  "parts": [
    {
      "title": "Second-generation antipsychotics: the class",
      "sections": [
        {
          "id": "s211-sga",
          "title": "What makes an antipsychotic second generation",
          "blocks": [
            {
              "type": "p",
              "text": "The **second-generation (atypical) antipsychotics**, also called **serotonin–dopamine antagonists (SDAs)**, are a pharmacologically diverse group that has largely replaced the older **dopamine receptor antagonists (DRAs)**. They differ from the DRAs in a **lower, though not absent, risk of extrapyramidal side effects (EPS)**, a broader spectrum of action and significant effects on **both dopamine and serotonin** systems. 'Atypical' is now something of a misnomer, because these drugs are used more than the typical ones."
            },
            {
              "type": "list",
              "title": "The 13 SGAs approved by the FDA as of 2020",
              "cols": 2,
              "items": [
                "Aripiprazole (Abilify)",
                "Asenapine (Saphris)",
                "Brexpiprazole (Rexulti)",
                "Cariprazine (Vraylar)",
                "Clozapine (Clozaril)",
                "Iloperidone (Fanapt)",
                "Lumateperone (Caplyta)",
                "Lurasidone (Latuda)",
                "Olanzapine (Zyprexa; Symbyax with fluoxetine)",
                "Paliperidone (Invega)",
                "Quetiapine (Seroquel)",
                "Risperidone (Risperdal)",
                "Ziprasidone (Geodon)"
              ]
            },
            {
              "type": "p",
              "text": "**All SGAs are indicated for schizophrenia.** Most are also approved, alone or as adjuncts, for **bipolar disorder**, and some as adjuncts in **major depression**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Better tolerated? Only partly",
              "text": "The gain is a **lower risk of EPS**. The cost is **weight gain**, which raises the risk of **diabetes mellitus**. **Olanzapine and clozapine** account for most drug-induced weight gain and diabetes; the others carry a smaller risk."
            },
            {
              "type": "list",
              "title": "FDA-recommended baseline assessment for every patient starting an SGA",
              "items": [
                "Personal and family history of **obesity, diabetes, dyslipidemia, hypertension and cardiovascular disease**",
                "**Weight and height** (for body mass index)",
                "**Waist circumference** at the level of the umbilicus",
                "**Blood pressure**",
                "**Fasting plasma glucose**",
                "**Fasting lipid profile**"
              ]
            },
            {
              "type": "p",
              "text": "Patients with diabetes need regular monitoring, including **HbA1c** and sometimes insulin levels."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Clozapine sits apart",
              "text": "Clozapine is **not first line** because of its **hematologic** risk and the need for frequent blood tests. Although highly effective for both mania and depression, it has **no FDA indication** for them."
            }
          ]
        },
        {
          "id": "s211-mech",
          "title": "Mechanism and indications",
          "blocks": [
            {
              "type": "p",
              "text": "The presumed antipsychotic effect is **D2 blockade**. What sets the SDAs apart is a **higher ratio of serotonin (especially 5-HT2A) to D2 interaction**, plus effects on other transmitter systems, thought to explain their distinct tolerability. **No two SDAs share the same receptor profile**, and how much each receptor contributes to the clinical effect is unknown."
            },
            {
              "type": "defs",
              "title": "Indications",
              "items": [
                [
                  "Schizophrenia and schizoaffective disorder",
                  "Acute and chronic psychosis in adults and adolescents. As good as or better than DRAs for **positive symptoms** and **superior for negative symptoms**. Fewer relapses, hospitalizations, emergency visits and day-program needs. All are first line **except clozapine**, reserved for patients resistant to all other antipsychotics."
                ],
                [
                  "Mood disorders",
                  "Most are approved for **acute mania** (not clozapine). **Aripiprazole, olanzapine, quetiapine and quetiapine XR** are approved for **bipolar maintenance**. **Olanzapine–fluoxetine (Symbyax)** is approved for **bipolar depression** and **treatment-resistant depression**; **aripiprazole and quetiapine XR** as adjuncts in **MDD**; **quetiapine and quetiapine XR** for **bipolar depression**. All SDAs appear to augment antidepressants."
                ],
                [
                  "Aggression and other uses",
                  "About **10%** of patients with schizophrenia are outwardly aggressive; SDAs help. Off-label: AIDS dementia, autism spectrum disorder, Tourette disorder, Huntington disease, Lesch–Nyhan syndrome; aggression and self-injury in children; with stimulants in ADHD plus ODD or conduct disorder; psychotic depression; psychosis after head trauma, in dementia or from drugs."
                ],
                [
                  "Protective effects",
                  "SDAs lower the risk of **suicide** and **water intoxication** in schizophrenia. Some patients with treatment-resistant **OCD** respond, although a few develop treatment-emergent OCD symptoms. Some patients with **borderline personality disorder** improve."
                ],
                [
                  "Tardive dyskinesia",
                  "SDAs, especially **olanzapine, quetiapine and clozapine**, help patients with severe tardive dyskinesia."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Boxed warning in dementia",
              "text": "Every SDA carries an FDA **boxed warning**: elderly patients with **dementia-related psychosis** have a **1.6 to 1.7 times** higher risk of death than with placebo. There is also an increased risk of **stroke**."
            },
            {
              "type": "p",
              "text": "Clozapine also helps severe tardive dyskinesia and patients with a low EPS threshold, and its effect can be boosted by adding **risperidone**, which raises clozapine levels. Some data suggest DRAs given in a first psychotic episode protect against progression; studies are testing whether SDAs in at-risk patients prevent deterioration."
            }
          ]
        }
      ]
    },
    {
      "title": "Second-generation drugs one by one",
      "sections": [
        {
          "id": "s211-risp",
          "title": "Risperidone and paliperidone",
          "blocks": [
            {
              "type": "defs",
              "title": "Risperidone (Risperdal)",
              "items": [
                [
                  "Indications",
                  "Schizophrenia (adults; ages 13 to 17), acute manic or mixed episodes (adults; ages 10 to 17; alone or with lithium or valproate), and **irritability in autism spectrum disorder, ages 5 to 16**."
                ],
                [
                  "Pharmacology",
                  "A benzisoxazole. Extensive first-pass metabolism to **9-hydroxy risperidone**, which is equally active. Combined half-life about **20 hours**, so **once daily** works. Blocks 5-HT2A, D2, α1, α2 and H1; little muscarinic affinity. **As potent at D2 as haloperidol**, yet causes less EPS."
                ],
                [
                  "Dosing",
                  "Start 1 to 2 mg at night, raise to about 4 mg a day; PET shows **1 to 4 mg** gives adequate D2 blockade. **Above 6 mg** a day brings more EPS. No link between level and response. Children start lower."
                ],
                [
                  "Side effects",
                  "**Dose-dependent EPS** (the trend is toward lower doses), weight gain (more in children), anxiety, nausea, rhinitis, erectile and orgasmic dysfunction, increased pigmentation and **marked prolactin elevation**."
                ],
                [
                  "Formulations",
                  "Orally disintegrating M-Tab; **Risperdal Consta**, an IM injection **every 2 weeks** (25, 50 or 75 mg), given with oral risperidone for the first **3 weeks**."
                ],
                [
                  "Interactions",
                  "**Paroxetine** and **fluoxetine** inhibit CYP2D6 and block formation of the active metabolite. With SSRIs, prolactin can rise sharply, causing galactorrhea and breast enlargement."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Paliperidone (Invega)",
              "items": [
                [
                  "What it is",
                  "The **primary active metabolite of risperidone**. Peak about 24 hours after a dose; steady state in 4 to 5 days. CYP2D6 and CYP3A4 play a limited role, so **no change for mild or moderate hepatic impairment**, but **reduce the dose in renal impairment**."
                ],
                [
                  "Indications",
                  "Schizophrenia (acute and maintenance) and acute **schizoaffective disorder**, alone or with mood stabilizers or antidepressants."
                ],
                [
                  "Dosing",
                  "**6 mg each morning** (3, 6, 9 mg tablets), with or without food; **no more than 12 mg** a day."
                ],
                [
                  "Invega Sustenna",
                  "Monthly IM injection; **117 mg** monthly is typical. Give the **first two injections in the deltoid** (levels are 28% higher than gluteal), then either site. Half-life **25 to 49 days**."
                ],
                [
                  "Side effects",
                  "Orthostatic hypotension, tachycardia, somnolence, akathisia, dystonia, EPS and parkinsonism; sensitivity to temperature extremes; **QTc prolongation** (avoid other QT-prolonging drugs)."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2021–2023",
              "title": "Longer-acting risperidone and paliperidone injections",
              "text": "Paliperidone now comes every **3 months** (**Invega Trinza**, after 4 months of Sustenna) and every **6 months** (**Invega Hafyera**, 2021). Risperidone has a **subcutaneous** monthly or 2-monthly injection (**Uzedy**, 2023) that needs **no loading dose or oral overlap**, and a 2-weekly IM form (**Rykindo**, 2023). Conversion tables are on the drug pages.",
              "source": "Prescribing information for Invega Trinza, Invega Hafyera and Uzedy; Janssen (2021), Teva (2023) and Luye (2023) announcements"
            }
          ]
        },
        {
          "id": "s211-olz",
          "title": "Olanzapine",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Indications",
                  "Schizophrenia; bipolar I acute manic or mixed episodes (alone or with lithium or valproate) and maintenance. With fluoxetine (**Symbyax**): bipolar I depression and **treatment-resistant depression**; olanzapine alone is **not** approved for TRD. IM form: acute agitation in schizophrenia and bipolar disorder."
                ],
                [
                  "Pharmacology",
                  "About 85% absorbed, 40% removed on first pass; peak 5 hours; half-life **31 hours** (21 to 54), so once daily. Blocks 5-HT2A and D2 plus **D1, D4, α1, 5-HT1A, muscarinic M1 to M5 and H1**."
                ],
                [
                  "Dosing",
                  "Start **5 to 10 mg** (mania 10 to 15 mg); raise to 10 mg after a week, allowing a week at each step to reach steady state. Usual **5 to 20 mg**; treatment-resistant patients may need **30 to 40 mg**, with more EPS, and doses above 20 mg were not studied in the approval trials. **IM 10 mg** for agitation; combining it with benzodiazepines is not approved. Orally disintegrating **Zydis** tablets help patients who 'cheek' pills."
                ],
                [
                  "Relprevv",
                  "Long-acting **deep gluteal** injection every 2 or 4 weeks (never IV, subcutaneous or deltoid); aspirate first. Boxed warning for **post-injection delirium/sedation syndrome (PDSS)**: observe for **3 hours** after each injection in a registered facility. All patients with PDSS recovered in trials; it is thought to follow accidental entry into a blood vessel."
                ],
                [
                  "Interactions",
                  "**Fluvoxamine** and **cimetidine** raise levels; **carbamazepine** and **phenytoin** lower them. **Alcohol** increases absorption by more than 25%."
                ],
                [
                  "Side effects",
                  "After clozapine, the **most weight gain** of any SGA: not dose-related, peaking around 9 months and possibly continuing more slowly. Somnolence, dry mouth, dizziness, constipation, dyspepsia, increased appetite, akathisia and tremor; dose-related EPS; **2%** stop because of **transaminase elevation**. The manufacturer advises periodic glucose and transaminase checks."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2021",
              "title": "Olanzapine with samidorphan (Lybalvi)",
              "text": "Approved in May 2021 for schizophrenia and bipolar I. The opioid antagonist **samidorphan** reduces olanzapine weight gain. **Contraindicated** with current opioid use or acute opioid withdrawal: stop short-acting opioids 7 days and long-acting opioids 14 days before starting.",
              "source": "Alkermes announcement, June 2021; Lybalvi prescribing information (2026)"
            },
            {
              "type": "update",
              "year": "2026",
              "title": "A subcutaneous monthly olanzapine (Weltruza)",
              "text": "Approved **October 9, 2026** for adults with schizophrenia: monthly subcutaneous doses of 318, 425 or 531 mg (matching 10, 15 or 20 mg oral), with **no loading dose, oral overlap or 3-hour observation**. No PDSS occurred in 3,971 trial injections, but the label keeps the warning.",
              "source": "MedinCell and Teva announcement, October 9, 2026; Psychiatric Times and Healio, October 2026"
            }
          ]
        },
        {
          "id": "s211-quet",
          "title": "Quetiapine",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Indications",
                  "Schizophrenia; acute mania (alone or with lithium or valproate); **bipolar depression** as monotherapy; bipolar I maintenance with lithium or divalproex; adjunct to antidepressants in **MDD**."
                ],
                [
                  "Pharmacology",
                  "A dibenzothiazepine related to clozapine in structure but not in action. Peak 1 to 2 hours; half-life about **7 hours**, so usually 2 or 3 doses a day, though **receptor occupancy outlasts blood levels** and many patients do well on once daily. Blocks D2 and 5-HT2 plus 5-HT6, D1, H1, α1 and α2; **no muscarinic or benzodiazepine** receptor blockade. Generally low receptor antagonism and no EPS."
                ],
                [
                  "Dosing",
                  "Start **25 mg twice daily**; raise by 25 to 50 mg per dose every 2 to 3 days toward **300 to 400 mg**. Effective range **300 to 800 mg**; faster titration is tolerated, and some need **1,200 to 1,600 mg**, which requires **serial ECGs**. **25 to 300 mg** at night has been used for **insomnia**."
                ],
                [
                  "Quetiapine XR",
                  "Once daily in the evening, 3 to 4 hours before bed, without food or with a light meal; start **300 mg**, then 400 to 800 mg."
                ],
                [
                  "QTc",
                  "**Phenytoin** raises clearance fivefold. FDA warns of **QT prolongation**, especially above recommended doses with other QT drugs. Avoid class IA and III antiarrhythmics, ziprasidone, chlorpromazine, thioridazine, gatifloxacin, moxifloxacin, pentamidine and methadone, and avoid in bradycardia, low potassium or magnesium, or congenital long QT. Overdose prolongs QT."
                ],
                [
                  "Side effects",
                  "**Somnolence, postural hypotension and dizziness** are most common, usually transient with slow titration. **The SDA least likely to cause EPS at any dose**, which makes it useful in **Parkinson disease with dopamine agonist–induced psychosis**. Prolactin rise is rare, mild and transient. Modest weight gain, sometimes considerable; a weaker diabetes link than olanzapine; small heart rate increase, constipation, transient transaminase rise."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Cataracts",
              "text": "Animal data raised concern about **cataracts** that has not been borne out, but the book still suggests checking for lens abnormalities early and periodically."
            }
          ]
        },
        {
          "id": "s211-zip",
          "title": "Ziprasidone",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Indications",
                  "Schizophrenia; acute manic or mixed episodes (monotherapy); bipolar I maintenance with lithium or valproate; **IM** for agitation."
                ],
                [
                  "Pharmacology",
                  "A benzisothiazole piperazine. Peak 2 to 6 hours; half-life **5 to 10 hours**, hence **twice-daily** dosing. **Food doubles bioavailability**, so take it with meals. IM peak about 1 hour, half-life 2 to 5 hours. Blocks 5-HT2A and D2 plus 5-HT1D, 5-HT2C, D3, D4, α1 and H1; very low D1, M1 and α2 affinity. It is also a **5-HT1A agonist** and inhibits **serotonin and norepinephrine reuptake**, fitting reports of antidepressant-like effects."
                ],
                [
                  "Dosing",
                  "Start **40 mg a day in two doses**; effective **80 to 160 mg** a day; up to 240 mg in practice. **IM**: 10 mg every 2 hours or 20 mg every 4 hours, **maximum 40 mg a day**."
                ],
                [
                  "Side effects",
                  "Somnolence, headache, dizziness, nausea and lightheadedness. Almost no effects outside the CNS, **almost no weight gain** and **no sustained prolactin rise**. QTc rises at 40 and 120 mg/day, which deters some clinicians."
                ],
                [
                  "Contraindications",
                  "With other **QT-prolonging drugs**: dofetilide, sotalol, quinidine and other class IA and III antiarrhythmics, mesoridazine, thioridazine, chlorpromazine, droperidol, pimozide, sparfloxacin, gatifloxacin, moxifloxacin, halofantrine, mefloquine, pentamidine, arsenic trioxide, dolasetron, probucol and tacrolimus. Avoid in congenital long QT or past arrhythmia. Otherwise few interactions."
                ]
              ]
            }
          ]
        },
        {
          "id": "s211-arip",
          "title": "Aripiprazole",
          "blocks": [
            {
              "type": "p",
              "text": "Aripiprazole is a potent **5-HT2A antagonist** and a **partial D2 agonist**: it competes with endogenous dopamine and produces a functional reduction of dopamine activity. It acts as a **modulator rather than a blocker** at postsynaptic D2 receptors and presynaptic autoreceptors, which in theory corrects excess limbic dopamine and too little frontal dopamine, while sparing striatal D2 blockade and so limiting EPS."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Indications",
                  "Schizophrenia (15 to 30 mg effective; maintenance 15 to 30 mg); bipolar I manic and mixed episodes, acute and maintenance, alone or with lithium or valproate; adjunct to antidepressants in **MDD**; **irritability in autistic disorder**. In aggressive youth with ODD or conduct disorder, about 60% responded in one study."
                ],
                [
                  "Pharmacology",
                  "Peak 3 to 5 hours, unaffected by food; half-life about **75 hours** (active metabolite 96 hours), so once daily; 99% protein-bound; linear kinetics; **CYP3A4 and CYP2D6**. Clearance falls in the elderly. **α1 antagonism** can cause orthostasis."
                ],
                [
                  "Dosing",
                  "5 to 30 mg tablets; effective **10 to 30 mg** a day. The labeled start of 10 to 15 mg causes nausea, insomnia and akathisia, so many start at **5 mg**."
                ],
                [
                  "Interactions",
                  "Carbamazepine and valproate lower levels; ketoconazole, fluoxetine, paroxetine and quinidine raise them. Lithium and valproate do not change steady state. Additive hypotension with antihypertensives."
                ],
                [
                  "Side effects",
                  "Headache, somnolence, agitation, dyspepsia, anxiety, nausea and insomnia. EPS is uncommon, but **akathisia-like activation** is common and often leads to stopping. No increase in weight gain or diabetes so far, **no typical prolactin rise** and **no significant QTc change**. Seizures have been reported."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2023",
              "title": "Two-monthly aripiprazole and its relatives",
              "text": "Beyond monthly **Abilify Maintena** (400 mg), **Abilify Asimtufii** (2023) gives 960 mg every 2 months, and **Aristada** (aripiprazole lauroxil) runs monthly to every 2 months. The related partial agonists **brexpiprazole** and **cariprazine**, only listed in the book, have since gained new indications (see Agents approved since the 12th edition).",
              "source": "Abilify Maintena, Abilify Asimtufii and Aristada prescribing information; Otsuka announcement, April 2023"
            }
          ]
        },
        {
          "id": "s211-others",
          "title": "Asenapine, iloperidone, lurasidone and lumateperone",
          "blocks": [
            {
              "type": "defs",
              "title": "Asenapine (Saphris)",
              "items": [
                [
                  "Indications",
                  "Acute schizophrenia and acute manic or mixed episodes of bipolar I in adults."
                ],
                [
                  "Pharmacology",
                  "Binds 5-HT2A, 5-HT2C, α1, α2, H1 and **D3 and D4 more than D2**; negligible M1 affinity, so little dry mouth or constipation. **Sublingual only**: 35% bioavailable under the tongue but **under 2% if swallowed**; peak 1 hour. **CYP1A2** and glucuronidation: caution with fluvoxamine."
                ],
                [
                  "Dosing",
                  "**5 mg twice daily** for schizophrenia (10 mg twice daily adds side effects, not benefit); **10 mg twice daily** for bipolar, lowered to 5 mg if needed; never above 10 mg twice daily. **Nothing to eat or drink for 10 minutes** afterward."
                ],
                [
                  "Side effects",
                  "Somnolence, dizziness, EPS other than akathisia, weight gain (**0.9 kg** at 52 weeks; no relevant lipid or glucose change). QTc rises 2 to 5 ms. **Prolactin can stay elevated**: galactorrhea, amenorrhea, gynecomastia, impotence."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Iloperidone (Fanapt)",
              "items": [
                [
                  "Indications",
                  "Acute schizophrenia in adults; not established in youth."
                ],
                [
                  "Pharmacology",
                  "Strongest affinity for **D3**, then α2C, 5-HT1A, D2A and 5-HT6; low histamine affinity. Peak 2 to 4 hours; **CYP2D6 and CYP3A4**: **halve the dose** with potent inhibitors. Half-life **18 to 26 hours** in extensive and **31 to 37 hours** in poor CYP2D6 metabolizers (7% to 10% of white and 3% to 8% of African American people). Caution in severe hepatic impairment."
                ],
                [
                  "Dosing",
                  "**Titrate slowly to avoid orthostatic hypotension**: 1 mg twice daily on day 1, rising daily to the effective 12 mg a day by about day 4 (titration pack); maximum **12 mg twice daily**; food does not matter."
                ],
                [
                  "Side effects",
                  "**QTc prolongation** (9 ms at 12 mg twice daily) with arrhythmia and sudden death risk, worse with heart disease, low potassium or magnesium, bradycardia, congenital long QT or CYP inhibitors. Dizziness, dry mouth, fatigue, sedation, tachycardia and orthostasis. EPS and akathisia similar to **placebo** despite strong D2 antagonism. Mean weight gain **2.1 kg**; some prolactin rise; **3 cases of priapism** before marketing."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2024–2026",
              "title": "Iloperidone for mania, and a prodrug",
              "text": "Iloperidone gained an indication for **acute bipolar I mania or mixed episodes** in April 2024. In February 2026 FDA approved **milsaperidone (Bysanti)**, which converts to iloperidone, for schizophrenia and bipolar mania.",
              "source": "Vanda Pharmaceuticals, April 2024 and February 2026; Psychiatric Times, February 2026"
            },
            {
              "type": "defs",
              "title": "Lurasidone (Latuda)",
              "items": [
                [
                  "Indications",
                  "Once-daily SGA for schizophrenia; limited clinical experience at the time of writing."
                ],
                [
                  "Dosing",
                  "20, 40, 80 and 120 mg tablets; **no titration**; start **40 mg once daily with food**; effective **40 to 120 mg**. 120 mg adds side effects without proven benefit, though some patients benefit from the maximum of **160 mg**. Moderate to severe renal impairment: no more than **80 mg**; severe hepatic impairment: no more than **40 mg**."
                ],
                [
                  "Interactions",
                  "With a moderate CYP3A4 inhibitor such as diltiazem, no more than **40 mg**. **Never** with a potent CYP3A4 inhibitor (ketoconazole) or inducer (rifampin)."
                ],
                [
                  "Side effects",
                  "Somnolence, **akathisia**, nausea, parkinsonism and agitation. Less weight and metabolic change than asenapine and iloperidone in trials."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2025",
              "title": "Lurasidone in bipolar depression and adolescents",
              "text": "Lurasidone is approved for **bipolar I depression** (adults 20 to 120 mg, alone or with lithium or valproate; ages 10 to 17, 20 to 80 mg) and for schizophrenia from age 13 (40 to 80 mg). Take it with at least 350 calories.",
              "source": "Latuda prescribing information (January 2025)"
            },
            {
              "type": "defs",
              "title": "Lumateperone (Caplyta)",
              "items": [
                [
                  "Status in the book",
                  "Approved for schizophrenia in adults in **December 2019**, available February 2020. Antagonizes 5-HT2A, D1, D2 and D4. The highest approved dose is **42 mg**; early bipolar depression studies disappointed, and real-world experience was very limited."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2021–2025",
              "title": "Lumateperone, approved after all for depression",
              "text": "Despite the book's note, FDA approved lumateperone **42 mg daily** for **bipolar I or II depression** (December 2021, alone or with lithium or valproate) and as an **adjunct in MDD** (November 2025). No titration is needed; reduce the dose with CYP3A4 inhibitors or hepatic impairment.",
              "source": "Caplyta prescribing information (April 2026); Johnson & Johnson announcement, November 2025"
            }
          ]
        },
        {
          "id": "s211-cloz",
          "title": "Clozapine",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Indications",
                  "The **most effective** drug for patients who fail standard treatment, and for **suicidal patients with schizophrenia or schizoaffective disorder**. It **suppresses severe tardive dyskinesia** (which returns when clozapine stops), even though it rarely causes TD itself. Also used for EPS intolerance, treatment-resistant mania, severe psychotic depression, Parkinson and Huntington disease, and treatment-resistant autism and **OCD** (alone or with an SSRI). Rarely, clozapine alone induces obsessive-compulsive symptoms."
                ],
                [
                  "Pharmacology",
                  "A dibenzothiazepine; peak about 2 hours; steady state in under a week on twice-daily dosing; half-life about **12 hours**. Blocks 5-HT2A, D1, D3, **D4** and α (especially α1) receptors with **low D2 potency**. PET: clinical doses occupy only **40% to 50%** of striatal D2 receptors (haloperidol 10 mg: **80%**), probably why it causes **no EPS**. Loose, **fast-dissociating** D2 binding may allow more normal dopamine transmission."
                ],
                [
                  "Dosing",
                  "25 and 100 mg tablets. Start 25 mg once or twice daily (conservatively **12.5 mg twice daily**), raise by about 25 mg a day every 2 or 3 days to **300 mg** a day in divided doses; up to **900 mg**. If there is no response, check a level: above **350** predicts response."
                ],
                [
                  "Interactions",
                  "Never with other **marrow-suppressing** drugs (**carbamazepine**, phenytoin, propylthiouracil, sulfonamides, captopril). **Lithium** raises the risk of seizures, confusion and movement disorders; avoid the combination after NMS. **Clomipramine** lowers seizure threshold and raises clozapine levels. **Risperidone, fluoxetine, paroxetine and fluvoxamine** raise clozapine levels; paroxetine may precipitate neutropenia."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Clozapine side effects",
              "head": [
                "Effect",
                "What the book says"
              ],
              "rows": [
                [
                  "Most common",
                  "Sedation, dizziness, syncope, **tachycardia**, hypotension, ECG changes, nausea, vomiting; fatigue, **weight gain**, **constipation**, anticholinergic effects, subjective weakness"
                ],
                [
                  "Sialorrhea",
                  "Starts early, **worst at night** (drenched pillows), probably from impaired swallowing. Clonidine or amitriptyline may help; the practical fix is **a towel over the pillow**"
                ],
                [
                  "Seizures",
                  "About **4%** above **600 mg** a day"
                ],
                [
                  "Blood dyscrasias",
                  "Leukopenia, granulocytopenia, agranulocytosis and fever in about 1%. **Agranulocytosis 0.73%** in year 1 and 0.07% in year 2; **neutropenia 2.32%** and 0.69%"
                ],
                [
                  "Myocarditis",
                  "Chest pain, dyspnea, fever or tachypnea: evaluate at once with serial **CK-MB, troponin and ECG**, and **stop clozapine**; it can be fatal"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Monitoring and contraindications, as written in the 12th edition",
              "text": "Contraindications: **WBC under 3,500**/mm³, a prior bone marrow disorder, agranulocytosis on clozapine, or another marrow-suppressing drug. WBC **weekly for the first 6 months**, then **every 2 weeks**; stop if WBC is **under 3,000** or granulocytes **under 1,500**, get hematology input and consider a marrow sample. **Never rechallenge** after agranulocytosis. The book adds that clozapine cannot be dispensed without proof of monitoring; see the update below."
            },
            {
              "type": "update",
              "year": "2025",
              "title": "REMS gone; ANC thresholds now apply",
              "text": "FDA **removed the clozapine REMS in June 2025**: no registry and no pharmacy ANC check before dispensing. The **neutropenia boxed warning stays**, and the label uses **absolute neutrophil count (ANC)**, not WBC. Monitor weekly for months 0 to 6, every 2 weeks for months 7 to 12, then monthly. Do not start below **1,500/µL** (**1,000/µL** in benign ethnic neutropenia). In the general population: 1,000 to 1,499 continue with checks 3 times a week; **500 to 999 interrupt** and consult hematology; **under 500 stop**.",
              "source": "FDA, Information on clozapine and Drug Safety Communication (2025); Clozaril prescribing information (June 2025)"
            },
            {
              "type": "update",
              "year": "2020",
              "title": "Guideline position",
              "text": "The APA schizophrenia guideline (3rd edition) strongly recommends clozapine for **treatment-resistant schizophrenia** and when **suicide risk** stays high despite other treatment, and suggests it when **aggression** persists.",
              "source": "APA Practice Guideline for the Treatment of Patients With Schizophrenia, 3rd edition (2020)"
            }
          ]
        },
        {
          "id": "s211-new",
          "title": "Agents approved since the 12th edition",
          "blocks": [
            {
              "type": "p",
              "text": "The book was written as lumateperone reached the market. Since then a new mechanism has arrived, two listed drugs have gained indications, and several candidates have failed. Each item below is outside the book."
            },
            {
              "type": "update",
              "year": "2024",
              "title": "Xanomeline–trospium (Cobenfy): the first non-dopaminergic antipsychotic",
              "text": "Approved September 2024 for schizophrenia. **Xanomeline** is a central **M1/M4 muscarinic agonist**; **trospium** blocks muscarinic receptors outside the brain to blunt cholinergic side effects. Start 50/20 mg twice daily, then 100/20 mg; maximum 125/30 mg twice daily, 1 hour before or 2 hours after meals. Common effects: nausea, dyspepsia, constipation, vomiting, hypertension and tachycardia; contraindicated in urinary or gastric retention, moderate or severe hepatic impairment and untreated narrow-angle glaucoma. No boxed warning. As an add-on to atypicals (ARISE, 2025) it failed.",
              "source": "FDA news release, September 2024; Cobenfy prescribing information (January 2026); Bristol Myers Squibb, April 2025"
            },
            {
              "type": "update",
              "year": "2022–2023",
              "title": "Brexpiprazole and cariprazine",
              "text": "**Brexpiprazole** (D2, D3 and 5-HT1A partial agonist) is approved for adjunctive MDD, schizophrenia from age 13, and, since May 2023, **agitation associated with Alzheimer dementia**: the first such approval (titrate 0.5 → 1 → 2 mg; max 3 mg). **Cariprazine** (D2/D3-preferring partial agonist) is approved for schizophrenia, bipolar mania, **bipolar depression** and, since December 2022, **adjunctive MDD**; its metabolite **DDCAR** has a 1- to 3-week half-life, so effects can lag dose changes.",
              "source": "Rexulti (April 2026) and Vraylar (December 2025) prescribing information; Otsuka and AbbVie announcements"
            },
            {
              "type": "update",
              "year": "2016–2024",
              "title": "Pimavanserin for Parkinson disease psychosis",
              "text": "**Pimavanserin** (Nuplazid), a **5-HT2A inverse agonist** with no dopamine blockade, is approved only for hallucinations and delusions of **Parkinson disease psychosis**, at 34 mg daily. It was turned down for dementia-related psychosis (2021) and again for Alzheimer disease psychosis (2022) and failed for negative symptoms of schizophrenia (2024).",
              "source": "Nuplazid prescribing information (April 2026); Acadia announcements, 2022 and 2024"
            },
            {
              "type": "update",
              "year": "2023–2024",
              "title": "Candidates that failed",
              "text": "**Ulotaront**, a TAAR1 agonist, failed both phase 3 trials in July 2023, and **emraclidine**, an M4 positive allosteric modulator, failed two phase 2 trials in November 2024. No new boxed warnings for antipsychotics were issued from 2021 to 2026, and the dementia mortality warning still applies.",
              "source": "Sumitomo Pharma and Otsuka, July 2023; AbbVie, November 2024; FDA Drug Safety Communications"
            }
          ]
        }
      ]
    },
    {
      "title": "Using second-generation antipsychotics",
      "sections": [
        {
          "id": "s211-sga-use",
          "title": "Starting, timing and monitoring",
          "blocks": [
            {
              "type": "list",
              "items": [
                "**All SDAs suit a first psychotic episode**; clozapine is reserved for patients refractory to all others.",
                "If the first SDA fails, **try another SDA**. Choose by clinical status and past response.",
                "Full effect was thought to take 4 to 6 weeks and may take **up to 8**, but meta-analyses show benefit as early as **2 to 3 weeks**, and **early response or failure predicts** later response or failure.",
                "In the first weeks it is acceptable to add a **high-potency DRA or a benzodiazepine**; **lorazepam 1 to 2 mg** orally or IM as needed for agitation.",
                "Some treatment-refractory patients need **6 months** of SDA treatment to improve.",
                "**Start low and titrate up.** If an SDA is stopped for **more than 36 hours**, restart at the initial titration schedule.",
                "**Taper olanzapine and clozapine** when stopping, to avoid **cholinergic rebound**: sweating, flushing, diarrhea and hyperactivity."
              ]
            },
            {
              "type": "steps",
              "title": "Workup before an SDA",
              "items": [
                [
                  "Consent",
                  "Explain risks and benefits to the patient and family; for **clozapine**, document an informed consent procedure in the chart."
                ],
                [
                  "History",
                  "**Blood disorders, epilepsy, cardiovascular disease, liver and kidney disease, drug abuse.** Liver or kidney disease calls for low starting doses."
                ],
                [
                  "Examination",
                  "**Supine and standing blood pressure** to screen for orthostasis."
                ],
                [
                  "Laboratory",
                  "**ECG**, several **CBCs with WBC** (averaged), **liver and renal function**."
                ],
                [
                  "Follow-up",
                  "Periodic **blood glucose, lipids and body weight**."
                ]
              ]
            }
          ]
        },
        {
          "id": "s211-switch",
          "title": "Switching, combining and special situations",
          "blocks": [
            {
              "type": "list",
              "title": "Switching",
              "items": [
                "From a DRA to an SDA: an abrupt switch is possible, but **taper the DRA slowly** while titrating the SDA.",
                "**Clozapine and olanzapine** are both anticholinergic, so switching between them rarely causes rebound.",
                "Risperidone to olanzapine: **taper risperidone over 3 weeks** while starting olanzapine at **10 mg**.",
                "**Risperidone, quetiapine and ziprasidone lack anticholinergic effects**: switching abruptly to them from a DRA, olanzapine or clozapine can cause **cholinergic rebound** (salivation, nausea, vomiting, diarrhea). Cover the switch with an anticholinergic and taper it slowly.",
                "**Overlap** old and new drugs. Some patients do better on both during the transition and then regress on the new drug alone; little is known about the safety of combinations.",
                "From a **depot DRA**: give the first SDA dose on the day the next injection is due."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "After clozapine agranulocytosis",
              "text": "Patients can switch safely to **olanzapine**, which has not caused new or recurrent agranulocytosis even in these patients. Starting it during agranulocytosis can prolong recovery from **3 to 4 days to 11 to 12 days**, so wait until the count recovers."
            },
            {
              "type": "defs",
              "title": "Pregnancy and breastfeeding",
              "items": [
                [
                  "Pregnancy",
                  "SDA use in pregnancy has not been studied; consider that **risperidone** can raise prolactin to **3 to 4 times** the upper limit of normal."
                ],
                [
                  "Breastfeeding",
                  "SDAs can pass into breast milk, so the book advises that nursing mothers **should not** take them."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Usual SGA dosing in schizophrenia (Table 21-9)",
              "head": [
                "Drug",
                "Start",
                "Maintenance",
                "Titration",
                "Maximum"
              ],
              "wide": true,
              "rows": [
                [
                  "Aripiprazole",
                  "10 to 15 mg once daily",
                  "10 to 30 mg/day",
                  "No increase before 2 weeks",
                  "30 mg/day"
                ],
                [
                  "Asenapine",
                  "5 mg twice daily",
                  "10 mg twice daily",
                  "Not necessary",
                  "20 mg/day"
                ],
                [
                  "Clozapine",
                  "12.5 mg once or twice daily",
                  "150 to 300 mg/day divided, or 200 mg at night",
                  "25 to 50 mg on day 2, then daily 25 to 50 mg steps to 300 to 450 mg; later no more than once or twice weekly, 100 mg or less",
                  "900 mg/day"
                ],
                [
                  "Iloperidone",
                  "1 mg twice daily",
                  "12 to 24 mg/day divided",
                  "2, 4, 6, 8, then 12 mg twice daily over 7 days",
                  "24 mg/day"
                ],
                [
                  "Lurasidone",
                  "40 mg/day",
                  "40 to 80 mg/day",
                  "Not necessary",
                  "120 mg/day"
                ],
                [
                  "Olanzapine",
                  "5 to 10 mg/day",
                  "10 to 20 mg/day",
                  "5 mg steps at least a week apart",
                  "20 mg/day"
                ],
                [
                  "Paliperidone",
                  "3 to 9 mg ER once daily",
                  "3 to 6 mg/day",
                  "Peak about 24 h after a dose",
                  "12 mg/day"
                ],
                [
                  "Quetiapine",
                  "25 mg twice daily",
                  "Lowest dose that keeps remission",
                  "25 to 50 mg 2 to 3 times daily on days 2 and 3, to 500 mg by day 4; later 25 to 50 mg twice daily steps at least 2 days apart",
                  "800 mg/day"
                ],
                [
                  "Risperidone",
                  "1 mg once daily",
                  "2 to 6 mg once daily",
                  "2 mg day 2, 4 mg day 3; later 1 to 2 mg steps at least a week apart",
                  "1 to 6 mg/day (as printed)"
                ],
                [
                  "Risperidone Consta",
                  "25 to 50 mg IM every 2 weeks",
                  "Oral risperidone for the first 3 weeks",
                  "Start 25 mg every 2 weeks",
                  "50 mg every 2 weeks"
                ],
                [
                  "Ziprasidone",
                  "20 mg twice daily with food",
                  "20 to 80 mg twice daily",
                  "Adjust at least 2 days apart",
                  "80 mg twice daily"
                ],
                [
                  "Ziprasidone IM",
                  "10 to 20 mg as needed",
                  "Not applicable",
                  "10 mg every 2 h or 20 mg every 4 h",
                  "40 mg/day for no more than 3 days"
                ]
              ],
              "note": "From U.S. prescribing information as summarized in the 12th edition. Dose adjustments may be needed in special populations. Lurasidone's text maximum is 160 mg/day."
            }
          ]
        }
      ]
    },
    {
      "title": "First-generation antipsychotics (dopamine receptor antagonists)",
      "sections": [
        {
          "id": "s211-dra",
          "title": "The DRAs: history, pharmacology and potency",
          "blocks": [
            {
              "type": "p",
              "text": "The DRAs were the first effective drugs for schizophrenia. **Chlorpromazine** (Thorazine), a phenothiazine, arrived in the early **1950s**. The class includes **phenothiazines, butyrophenones, thioxanthenes, dibenzoxazepines, dihydroindoles and diphenylbutylpiperidines**. Because they cause EPS at effective doses, the SDAs have gradually replaced them, but the DRAs carry a **lower risk of metabolic abnormalities**. **Intermediate-potency DRAs such as perphenazine are as effective and well tolerated as the SDAs.** **Molindone**, the DRA with the lowest weight and metabolic risk, is no longer made in the United States."
            },
            {
              "type": "list",
              "title": "Pharmacokinetics",
              "items": [
                "Well absorbed orally; **liquids** better than tablets or capsules. Peak **1 to 4 hours** oral, **30 to 60 minutes** parenteral.",
                "**Smoking, coffee, antacids and food** interfere with absorption.",
                "Steady state in **3 to 5 days**; half-lives about **24 hours**; once-daily dosing once stable. Mostly highly protein-bound.",
                "Parenteral forms act faster and more reliably, with up to **10-fold** higher bioavailability.",
                "Mostly metabolized by **CYP2D6** and **CYP3A**.",
                "**Depot** haloperidol and fluphenazine (every 1 to 4 weeks) can take up to **6 months** to reach steady state, so continue oral medication for about the first month."
              ]
            },
            {
              "type": "table",
              "caption": "Factors that change antipsychotic pharmacokinetics (Table 21-10)",
              "head": [
                "Factor",
                "Effect"
              ],
              "rows": [
                [
                  "Age",
                  "Elderly patients may clear the drugs more slowly"
                ],
                [
                  "Medical condition",
                  "Reduced hepatic blood flow or liver disease lowers clearance"
                ],
                [
                  "Enzyme inducers",
                  "Carbamazepine, phenytoin, ethambutol, barbiturates"
                ],
                [
                  "Clearance inhibitors",
                  "SSRIs, TCAs, cimetidine, β-blockers, isoniazid, methylphenidate, erythromycin, triazolobenzodiazepines, ciprofloxacin, ketoconazole"
                ],
                [
                  "Binding proteins",
                  "Hypoalbuminemia from malnutrition or liver failure"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Antipsychotic activity comes from blocking dopamine transmission: DRAs work when about **72% of brain D2 receptors** are occupied. They also block noradrenergic, cholinergic and histaminergic receptors to varying degrees."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Potency rules",
              "text": "**Potency** is the amount of drug needed for effect. **Low-potency** drugs (chlorpromazine, thioridazine; hundreds of mg a day) cause more **sedation, weight gain and nonneurologic effects**. **High-potency** drugs (haloperidol, fluphenazine; under 10 mg a day) cause more **EPS and neurologic effects**."
            },
            {
              "type": "table",
              "caption": "DRA potency and side effects (Table 21-12)",
              "head": [
                "Drug",
                "Class",
                "Equivalent oral dose (mg)",
                "Sedation",
                "Autonomic",
                "EPS"
              ],
              "wide": true,
              "rows": [
                [
                  "Pimozide",
                  "Diphenylbutylpiperidine",
                  "1.5",
                  "+",
                  "+",
                  "+++"
                ],
                [
                  "Fluphenazine",
                  "Phenothiazine, piperazine",
                  "2",
                  "+",
                  "+",
                  "+++"
                ],
                [
                  "Haloperidol",
                  "Butyrophenone",
                  "2",
                  "+",
                  "+",
                  "+++"
                ],
                [
                  "Thiothixene",
                  "Thioxanthene",
                  "4",
                  "+",
                  "+",
                  "+++"
                ],
                [
                  "Trifluoperazine",
                  "Phenothiazine, piperazine",
                  "5",
                  "++",
                  "+",
                  "+++"
                ],
                [
                  "Perphenazine",
                  "Phenothiazine, piperazine",
                  "8",
                  "++",
                  "+",
                  "++/+++"
                ],
                [
                  "Molindone",
                  "Dihydroindolone",
                  "10",
                  "++",
                  "+",
                  "+"
                ],
                [
                  "Loxapine",
                  "Dibenzoxazepine",
                  "10",
                  "++",
                  "+/++",
                  "++/+++"
                ],
                [
                  "Prochlorperazine",
                  "Phenothiazine, piperazine",
                  "15",
                  "++",
                  "+",
                  "+++"
                ],
                [
                  "Acetophenazine",
                  "Phenothiazine, piperazine",
                  "20",
                  "++",
                  "+",
                  "++/+++"
                ],
                [
                  "Triflupromazine",
                  "Phenothiazine, aliphatic",
                  "25",
                  "+++",
                  "++/+++",
                  "++"
                ],
                [
                  "Mesoridazine",
                  "Phenothiazine, piperidine",
                  "50",
                  "+++",
                  "++",
                  "+"
                ],
                [
                  "Chlorpromazine",
                  "Phenothiazine, aliphatic",
                  "100",
                  "+++",
                  "+++",
                  "++"
                ],
                [
                  "Chlorprothixene",
                  "Thioxanthene",
                  "100",
                  "+++",
                  "+++",
                  "+/++"
                ],
                [
                  "Thioridazine",
                  "Phenothiazine, piperidine",
                  "100",
                  "+++",
                  "+++",
                  "+"
                ]
              ],
              "note": "Autonomic: anti-α-adrenergic and anticholinergic effects. EPS excludes tardive dyskinesia, which all agents cause equally at equivalent doses. Pimozide is used mainly for Tourette disorder; prochlorperazine rarely, if ever, as an antipsychotic."
            }
          ]
        },
        {
          "id": "s211-dra-ind",
          "title": "Indications for DRAs",
          "blocks": [
            {
              "type": "list",
              "title": "Indications (Table 21-11)",
              "cols": 2,
              "items": [
                "Acute psychosis in schizophrenia and schizoaffective disorder",
                "Maintenance in schizophrenia and schizoaffective disorder",
                "Mania",
                "Depression with psychotic features",
                "Delusional disorder",
                "Borderline personality disorder",
                "Substance-induced psychotic disorder",
                "Delirium and dementia",
                "Mental disorders due to a medical condition",
                "Childhood schizophrenia",
                "Autism spectrum disorder",
                "Tourette disorder",
                "Huntington disease"
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Schizophrenia",
                  "Reduce acute symptoms and prevent relapse. Most dramatic on **positive symptoms**; negative symptoms improve less and can seem worse because **facial constriction and akinesia mimic them**. After a first episode, maintain for **1 to 2 years**; after multiple episodes, **2 to 5 years**."
                ],
                [
                  "Mania",
                  "Treat psychotic symptoms while slower antimanic drugs start: combine a DRA or SDA with **lithium, valproate, lamotrigine or carbamazepine**, then withdraw the antipsychotic gradually."
                ],
                [
                  "Psychotic depression",
                  "**Antipsychotic plus antidepressant** is one treatment of choice; the other is **ECT**."
                ],
                [
                  "Delusional disorder and borderline personality",
                  "Delusional disorder often responds. Patients with borderline personality who have **transient psychotic symptoms** (perceptual disturbance, suspiciousness, ideas of reference, aggression) may need a DRA; also consider mood stabilizers."
                ],
                [
                  "Severe agitation and violence",
                  "Regardless of diagnosis; irritability, impulsivity, hostility and hyperactivity respond to short-term use. Repeated use to control disruptive behavior in children with intellectual disability or autism is **controversial**."
                ],
                [
                  "Tourette disorder",
                  "**Haloperidol and pimozide** are used most; some prefer **clonidine** for its lower neurologic risk."
                ],
                [
                  "Dementia and delirium",
                  "About **two-thirds** of agitated elderly patients with dementia improve. Use **low doses of high-potency drugs** (haloperidol **0.5 to 1 mg** a day). Find the cause of delirium: **anticholinergic delirium can be worsened by low-potency DRAs**. Orthostasis, parkinsonism and worse cognition are the main problems in older adults."
                ],
                [
                  "Substance-induced psychosis",
                  "Usually time-limited, so avoid a DRA unless the patient is severely agitated; **benzodiazepines** usually suffice and are preferred in **phencyclidine** intoxication. In **alcohol withdrawal** psychosis, DRAs may raise **seizure** risk."
                ],
                [
                  "Childhood schizophrenia",
                  "Children benefit, though research is limited; watch effects on cognition and alertness."
                ],
                [
                  "Neurologic and other uses",
                  "Early **Huntington** chorea and its psychiatric symptoms (high-potency drugs; rigid forms risk acute EPS); **ballismus and hemiballismus**; **nausea, emesis, intractable hiccups and pruritus**; psychosis with endocrine disorders or temporal lobe epilepsy; impulse control disorders only after other measures fail."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "The rule of thumb",
              "text": "**Low-potency drugs cause the most nonneurologic effects; high-potency drugs cause the most neurologic effects.** The most common DRA side effects overall are neurologic."
            },
            {
              "type": "update",
              "year": "2025",
              "title": "APA delirium guideline, 2nd edition",
              "text": "The 2025 APA guideline advises antipsychotics for delirium **only** when de-escalation has failed, reversible causes have been addressed, and the patient has significant distress or poses a risk of harm. It advises **against** using antipsychotics to **prevent** delirium or to **shorten** it.",
              "source": "APA Practice Guideline for the Prevention and Treatment of Delirium, 2nd edition (September 2025)"
            }
          ]
        }
      ]
    },
    {
      "title": "Adverse effects of the DRAs",
      "sections": [
        {
          "id": "s211-nms",
          "title": "Neuroleptic malignant syndrome",
          "blocks": [
            {
              "type": "p",
              "text": "A potentially **fatal** reaction that can occur **at any time** during DRA treatment."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Symptoms",
                  "**Extreme hyperthermia**, severe **muscular rigidity** and dystonia, akinesia, mutism, confusion, agitation, and raised pulse and blood pressure."
                ],
                [
                  "Laboratory",
                  "Raised **WBC**, **creatine phosphokinase**, liver enzymes and plasma **myoglobin**; **myoglobinuria**, sometimes with **renal failure**."
                ],
                [
                  "Course",
                  "Develops over **24 to 72 hours**; untreated, lasts **10 to 14 days**. Often missed early, when withdrawal or agitation is mistaken for worsening psychosis."
                ],
                [
                  "Who",
                  "**Men** more than women; **young** more than elderly patients."
                ],
                [
                  "Mortality",
                  "**20% to 30%** or higher, especially with **depot** drugs; also higher with **high doses of high-potency** agents."
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Management",
              "items": [
                [
                  "Stop the DRA immediately",
                  "Then supportive care."
                ],
                [
                  "Medical support",
                  "**Cool** the patient; monitor vital signs, electrolytes, fluid balance and renal output; treat fever."
                ],
                [
                  "Drugs",
                  "Antiparkinsonian drugs may ease rigidity. **Dantrolene** 0.8 to 2.5 mg/kg every 6 hours (the book prints a total of 10 mg a day), then 100 to 200 mg a day orally once the patient can swallow. **Bromocriptine** 20 to 30 mg a day in four divided doses, or **amantadine**, can be added. Continue **5 to 10 days**."
                ],
                [
                  "Restarting",
                  "Consider a **low-potency drug or an SDA**, remembering that SDAs, including **clozapine**, can also cause NMS."
                ]
              ]
            },
            {
              "type": "update",
              "year": "Dose check",
              "title": "Check the dantrolene ceiling",
              "text": "The 12th edition prints the dantrolene total as **10 mg a day**, which does not fit a dose of 0.8 to 2.5 mg/kg every 6 hours. The intravenous dantrolene label gives a maximum **cumulative dose of 10 mg/kg**. Confirm dosing with a current reference or toxicology before giving it.",
              "source": "Dantrium Intravenous prescribing information"
            }
          ]
        },
        {
          "id": "s211-dra-adverse",
          "title": "Other adverse effects, system by system",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Seizure threshold",
                  "DRAs can lower it; **low-potency** drugs (chlorpromazine, thioridazine) are more epileptogenic. Consider this with a seizure disorder or brain lesion."
                ],
                [
                  "Sedation",
                  "From **H1 blockade**; **chlorpromazine** is the most sedating typical antipsychotic. Giving the whole dose at bedtime usually solves it, and tolerance develops."
                ],
                [
                  "Central anticholinergic toxicity",
                  "Severe agitation, disorientation, hallucinations, seizures, high fever and dilated pupils, progressing to stupor and coma. Stop the causal drugs and give **physostigmine 2 mg by slow IV infusion**, repeated within an hour if needed. Too much physostigmine causes **hypersalivation and sweating**, reversed with **atropine 0.5 mg**."
                ],
                [
                  "Cardiac",
                  "DRAs depress contractility and prolong conduction and refractory periods. **Low-potency phenothiazines are more cardiotoxic**, with one exception: **IV haloperidol** has been linked to ventricular arrhythmias, **torsades de pointes** and sudden death. **Pimozide, sulpiride and droperidol** also prolong QTc. **Thioridazine** caused **28 of 46 (61%)** sudden antipsychotic deaths in one study, the only drug taken in 15. **Chlorpromazine** prolongs QT and PR, blunts T waves and depresses ST. These drugs are for use only when others fail."
                ],
                [
                  "Sudden death",
                  "Arrhythmia, seizure, asphyxiation, malignant hyperthermia, heatstroke or NMS; antipsychotics as a whole carry an increased incidence."
                ],
                [
                  "Orthostatic hypotension",
                  "Most with **low-potency** drugs (chlorpromazine, thioridazine, chlorprothixene), from **α-adrenergic blockade**, mostly in the first days; tolerance develops. Check **lying and standing BP** before and after the first IM low-potency dose. Advise rising slowly, avoiding caffeine and alcohol, **2 L of fluid** a day, extra salt if not hypertensive, and support hose. Treat by lying down with feet raised and leg pumping; severe cases need volume or **pure α agonists** (**metaraminol, norepinephrine**). **Epinephrine is contraindicated**: with α receptors blocked, its β effect worsens hypotension."
                ],
                [
                  "Hematologic",
                  "Temporary **leukopenia** (WBC about 3,500) is common and not serious. **Agranulocytosis** occurs in about **1 in 10,000**, with mortality up to **30%**. Routine CBCs are not needed, but **sore throat and fever** call for an immediate CBC; if counts are low, stop the DRA and transfer to medical care. Purpura, hemolytic anemia and pancytopenia are rare."
                ],
                [
                  "Peripheral anticholinergic",
                  "Dry mouth and nose, blurred vision, **constipation**, urinary retention and mydriasis, especially with **chlorpromazine, thioridazine and mesoridazine**. Severe constipation can become **paralytic ileus** (reduce the dose; pilocarpine gives transient relief). **Bethanechol 20 to 40 mg** a day may help urinary retention."
                ],
                [
                  "Weight",
                  "Linked to morbidity, mortality and nonadherence. Low-potency DRAs cause significant gain, but less than olanzapine or clozapine. **Molindone, and perhaps loxapine**, cause the least."
                ],
                [
                  "Endocrine",
                  "Blocking the **tuberoinfundibular** pathway raises **prolactin**: breast enlargement, galactorrhea, amenorrhea and inhibited orgasm in women; impotence in men. SDAs other than **risperidone** rarely raise prolactin and may be preferred."
                ],
                [
                  "Sexual",
                  "Anorgasmia and low libido in both sexes; up to **50%** of men report ejaculatory or erectile problems. PDE-5 inhibitors are often used but not studied with DRAs. **Thioridazine**: low libido and **retrograde ejaculation**. **Priapism** and painful orgasm are probably from **α1** blockade."
                ],
                [
                  "Skin",
                  "Allergic dermatitis and photosensitivity, mostly with low-potency drugs; early rashes usually remit. **Chlorpromazine** can cause severe sunburn-like reactions (limit sun to 30 to 60 minutes, use sunscreen) and, long term, **blue-gray discoloration** of sun-exposed skin that resolves after switching."
                ],
                [
                  "Eyes",
                  "**Thioridazine above 1,000 mg** a day causes **irreversible retinal pigmentation**, first noticed as trouble with night vision, which can progress to **blindness** even after stopping; hence the **800 mg** maximum. **Chlorpromazine** causes benign whitish-brown **deposits in the anterior lens and posterior cornea**, seen on slit lamp, that resolve after stopping."
                ],
                [
                  "Liver",
                  "Enzyme rises are usually transient. Early **chlorpromazine** use caused **cholestatic jaundice** in the first month (pain, nausea, fever, rash, eosinophilia, raised bilirubin and alkaline phosphatase); now sporadic. Stop the drug if jaundice appears."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2025",
              "title": "Prolactin and breast cancer wording revised",
              "text": "January 2025 FDA safety labeling changes across many antipsychotic labels (risperidone, paliperidone, olanzapine, quetiapine, ziprasidone, asenapine, iloperidone, haloperidol, molindone and others) now say published epidemiologic studies on **hyperprolactinemia and breast cancer** have shown **inconsistent results**, replacing the older statement of no association. The same round added **sleepwalking** (olanzapine, ziprasidone), **fecal incontinence** (olanzapine, quetiapine) and a **serotonin syndrome** warning for ziprasidone.",
              "source": "FDA Safety-related Labeling Changes, January 2025; Risperdal and Lybalvi prescribing information"
            }
          ]
        },
        {
          "id": "s211-dra-tox",
          "title": "Overdose, pregnancy, interactions and laboratory interference",
          "blocks": [
            {
              "type": "defs",
              "title": "Overdose",
              "items": [
                [
                  "Picture",
                  "Exaggerated side effects: CNS depression, EPS, mydriasis, rigidity, restlessness, reduced reflexes, tachycardia and hypotension; severe cases bring **delirium, coma, respiratory depression and seizures**. EEG shows diffuse slowing and low voltage. **Haloperidol** may be among the safest typical antipsychotics in overdose; life-threatening cases usually involve **alcohol or benzodiazepines** too."
                ],
                [
                  "Treatment",
                  "**Activated charcoal** and **gastric lavage** if recent. **Emetics do not work** because DRAs are antiemetic. Seizures: IV **diazepam** or **phenytoin**. Hypotension: **norepinephrine or dopamine, never epinephrine**."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Pregnancy and lactation",
              "items": [
                [
                  "Pregnancy",
                  "Low correlation with malformations, but avoid, especially in the **first trimester**, unless benefit outweighs risk. **High-potency** drugs are preferable because low-potency drugs cause hypotension."
                ],
                [
                  "Lactation",
                  "DRAs reach breast milk in low concentrations; advise against breastfeeding."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Antipsychotic drug interactions (Table 21-13)",
              "head": [
                "Interacting drug",
                "Mechanism",
                "Effect"
              ],
              "wide": true,
              "rows": [
                "Major severity",
                [
                  "β-blockers",
                  "Synergy; antipsychotic inhibits propranolol metabolism and raises levels",
                  "Severe hypotension"
                ],
                [
                  "Anticholinergics",
                  "Pharmacodynamic; additive anticholinergic effect",
                  "Less antipsychotic effect; anticholinergic toxicity"
                ],
                [
                  "Barbiturates",
                  "Phenobarbital induces metabolism",
                  "Lower antipsychotic levels"
                ],
                [
                  "Carbamazepine",
                  "Induces metabolism",
                  "Up to **50%** lower antipsychotic levels"
                ],
                [
                  "Charcoal",
                  "Less GI absorption and enterohepatic recirculation",
                  "Less effect, or toxicity when used for overdose"
                ],
                [
                  "Cigarette smoking",
                  "Induces microsomal enzymes",
                  "Lower antipsychotic levels"
                ],
                [
                  "Epinephrine, norepinephrine",
                  "Antipsychotic opposes pressor effect",
                  "Hypotension"
                ],
                [
                  "Ethanol",
                  "Additive CNS depression",
                  "Impaired psychomotor function"
                ],
                [
                  "Fluvoxamine",
                  "Inhibits haloperidol and clozapine metabolism",
                  "Higher haloperidol and clozapine levels"
                ],
                [
                  "Guanethidine",
                  "Blocks its reuptake",
                  "Weaker antihypertensive effect"
                ],
                [
                  "Lithium",
                  "Unknown",
                  "Rare neurotoxicity"
                ],
                [
                  "Meperidine",
                  "Additive CNS depression",
                  "Hypotension and sedation"
                ],
                "Minor or moderate severity",
                [
                  "Amphetamines, anorexiants",
                  "Opposing actions",
                  "Less weight loss; amphetamines may worsen psychosis"
                ],
                [
                  "ACE inhibitors",
                  "Additive hypotension",
                  "Hypotension, postural intolerance"
                ],
                [
                  "Aluminum antacids",
                  "Insoluble complex in the gut",
                  "Possibly less antipsychotic effect"
                ],
                [
                  "Antidepressants",
                  "Competitive inhibition of metabolism",
                  "Higher antidepressant levels"
                ],
                [
                  "Benzodiazepines",
                  "More benzodiazepine effect",
                  "Respiratory depression, stupor, hypotension"
                ],
                [
                  "Bromocriptine",
                  "Opposes dopamine stimulation",
                  "Higher prolactin"
                ],
                [
                  "Caffeinated drinks",
                  "Precipitate with antipsychotic solutions",
                  "Possibly less effect"
                ],
                [
                  "Cimetidine",
                  "Less absorption and clearance",
                  "Less antipsychotic effect"
                ],
                [
                  "Clonidine",
                  "Potentiates α-adrenergic hypotension",
                  "Hypotension or hypertension"
                ],
                [
                  "Disulfiram",
                  "Impairs metabolism",
                  "Higher antipsychotic levels"
                ],
                [
                  "Methyldopa",
                  "Unknown",
                  "Blood pressure rises"
                ],
                [
                  "Phenytoin",
                  "Induces antipsychotic metabolism; slows phenytoin metabolism",
                  "Lower antipsychotic, higher phenytoin levels"
                ],
                [
                  "SSRIs",
                  "Impair metabolism; pharmacodynamic",
                  "Sudden **EPS**"
                ],
                [
                  "Valproic acid",
                  "Antipsychotic slows valproate metabolism",
                  "Longer valproate half-life, higher levels"
                ]
              ]
            },
            {
              "type": "list",
              "title": "More interactions in the text",
              "items": [
                "**CYP2D6** is the enzyme most often involved. Antacids, charcoal, cholestyramine, kaolin, pectin and cimetidine within **2 hours** reduce absorption; anticholinergics may too. Digoxin and steroids slow gut motility and **increase** absorption.",
                "**Thioridazine** and other phenothiazines can push **phenytoin** to toxic levels.",
                "**Paroxetine, fluoxetine and fluvoxamine** (CYP2D6) and tricyclics raise both drugs' levels, with additive anticholinergic, sedative and hypotensive effects.",
                "DRAs may block the effect of **α-methyldopa**, add to some antihypertensives, and have a variable effect on clonidine; **propranolol** raises both drugs' levels.",
                "DRAs potentiate sedatives, antihistamines, opioids and **alcohol** (heatstroke risk rises with alcohol). They may **lower warfarin** levels.",
                "Phenothiazines, **thioridazine** and **pimozide** must not be given with other QT-prolonging drugs; thioridazine is **contraindicated with CYP2D6 inhibitors** or in poor metabolizers."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Laboratory interference",
              "text": "**Chlorpromazine and perphenazine** can give false-positive or false-negative **pregnancy tests** and falsely high **bilirubin** (reagent strips) and **urobilinogen** (Ehrlich test), and shift glucose tolerance results. Phenothiazines can interfere with **17-ketosteroid and 17-hydroxycorticosteroid** measurement and give false-positive **PKU** tests."
            }
          ]
        }
      ]
    },
    {
      "title": "Prescribing DRAs: dosing and clinical guidelines",
      "sections": [
        {
          "id": "s211-dra-dose",
          "title": "Before and during treatment",
          "blocks": [
            {
              "type": "list",
              "title": "Contraindications",
              "items": [
                "A history of **severe allergic response**",
                "Possible ingestion of a substance that would interact to cause **CNS depression** (alcohol, opioids, barbiturates, benzodiazepines) or **anticholinergic delirium** (scopolamine, possibly PCP)",
                "A **severe cardiac abnormality**",
                "**High seizure risk**",
                "**Narrow-angle glaucoma** or **prostatic hypertrophy**, if a strongly anticholinergic drug is planned",
                "Presence or history of **tardive dyskinesia**"
              ]
            },
            {
              "type": "p",
              "text": "Use caution in **liver disease** (high plasma levels). Assessment includes a **CBC with WBC indexes, liver function tests and an ECG**, especially in **women over 40 and men over 30**. Elderly patients and children are more sensitive, so adjust doses. There is **no set dose**: start low, increase as needed, and allow **4 to 6 weeks** to judge a dose."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Short-term treatment",
                  "The equivalent of **5 to 20 mg of haloperidol** is reasonable for an acutely ill adult; an older adult may need as little as **1 mg**. More than **25 mg of chlorpromazine** in one injection can cause **profound hypotension**. IM doses peak in about **30 minutes** (oral 90) and are about **half the oral dose**. Observe for **1 hour** after the first dose, then give a second dose or a sedative: **lorazepam 2 mg IM** or **amobarbital 50 to 250 mg IM**."
                ],
                [
                  "Rapid neuroleptization",
                  "Hourly IM doses until marked sedation (psychotolysis). Waiting a few hours after one dose gives the **same improvement**. Prevent violence with adjunctive sedatives or temporary restraint."
                ],
                [
                  "Early treatment",
                  "Allow a full **6 weeks** to judge psychotic symptoms; agitation improves quickly. About **75%** with a short history improve significantly, and positive and negative symptoms keep improving for **3 to 12 months**. About **5 mg of haloperidol or 300 mg of chlorpromazine** a day is usually effective; higher doses add side effects, not benefit. A single **bedtime** dose helps sleep and reduces side effects, but raises fall risk in the elderly. Sedation lasts hours; antipsychotic effect lasts **1 to 3 days**."
                ],
                [
                  "PRN orders",
                  "Reasonable in the first days of admission, but **time on the drug, not higher doses**, produces improvement. Orders should name the symptoms, frequency and daily maximum; use small doses (haloperidol **2 mg**) or **lorazepam 2 mg IM**. If PRN doses are still needed after the first week, raise the standing dose."
                ],
                [
                  "Maintenance",
                  "The first **3 to 6 months** after an episode are a stabilization period; then reduce by about **20% every 6 months** to the minimum effective dose. Continue for **1 to 2 years** after a first episode, often **5 years** after a second, and consider **lifelong** treatment after a third, still trying dose reductions every 6 to 12 months. Discuss the patient's wishes, illness severity, supports and upcoming stressors."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "DRA preparations and adult doses (Table 21-14)",
              "head": [
                "Drug (trade)",
                "Forms",
                "Acute (mg/day)",
                "Maintenance (mg/day)"
              ],
              "wide": true,
              "rows": [
                [
                  "Chlorpromazine (Thorazine)",
                  "Tablets, capsules, solution, IM 25 mg/mL, suppositories",
                  "100 to 1,600 PO; 25 to 400 IM",
                  "50 to 400 PO"
                ],
                [
                  "Prochlorperazine (Compazine)",
                  "Tablets, capsules, solution, IM, suppositories",
                  "15 to 200 PO; 40 to 80 IM",
                  "15 to 60 PO"
                ],
                [
                  "Perphenazine (Trilafon)",
                  "Tablets 2 to 16 mg, solution, IM",
                  "12 to 64 PO; 15 to 30 IM",
                  "8 to 24 PO"
                ],
                [
                  "Trifluoperazine (Stelazine)",
                  "Tablets 1 to 10 mg, solution, IM",
                  "4 to 40 PO; 4 to 10 IM",
                  "5 to 20 PO"
                ],
                [
                  "Fluphenazine (Prolixin)",
                  "Tablets 1 to 10 mg, solution, IM; decanoate, enanthate",
                  "2.5 to 40 PO; 5 to 20 IM",
                  "1 to 15 PO; 12.5 to 50 IM depot weekly or every 2 weeks"
                ],
                [
                  "Thioridazine (Mellaril)",
                  "Tablets 10 to 200 mg, solutions",
                  "200 to 800 PO",
                  "100 to 300 PO"
                ],
                [
                  "Mesoridazine (Serentil)",
                  "Tablets, solution, IM",
                  "100 to 400 PO; 25 to 200 IM",
                  "30 to 150 PO"
                ],
                [
                  "Haloperidol (Haldol)",
                  "Tablets 0.5 to 20 mg, solution, IM 5 mg/mL",
                  "5 to 20 PO; 12.5 to 25 IM",
                  "1 to 10 PO"
                ],
                [
                  "Haloperidol decanoate",
                  "IM 50 and 100 mg/mL",
                  "—",
                  "25 to 200 IM monthly"
                ],
                [
                  "Chlorprothixene (Taractan)",
                  "Tablets, suspension, IM",
                  "75 to 600 PO; 75 to 200 IM",
                  "50 to 400 PO"
                ],
                [
                  "Thiothixene (Navane)",
                  "Capsules 1 to 20 mg, solution, IM",
                  "60 to 100 PO; 8 to 30 IM",
                  "6 to 30 PO"
                ],
                [
                  "Loxapine (Loxitane)",
                  "Capsules 5 to 50 mg, solution, IM",
                  "20 to 250 PO; 20 to 75 IM",
                  "20 to 100 PO"
                ],
                [
                  "Molindone (Moban)",
                  "Tablets 5 to 100 mg, solution",
                  "50 to 225 PO",
                  "5 to 150 PO"
                ],
                [
                  "Pimozide (Orap)",
                  "Tablets 2 mg",
                  "0.5 to 20 PO",
                  "0.5 to 5 PO"
                ]
              ]
            }
          ]
        },
        {
          "id": "s211-depot",
          "title": "Long-acting depot injections",
          "blocks": [
            {
              "type": "p",
              "text": "Depots overcome **adherence** problems and are usually given every **1 to 4 weeks**. The book describes three DRA depots in the United States: **fluphenazine decanoate and enanthate**, and **haloperidol decanoate**. They are injected into a large muscle and absorbed slowly; **decanoates** are absorbed more slowly than **enanthates**, so they are given less often."
            },
            {
              "type": "steps",
              "title": "Starting a DRA depot",
              "items": [
                [
                  "Test dose",
                  "Stabilizing on the oral drug is not required, but give **at least one oral dose** to check for severe EPS or allergy."
                ],
                [
                  "First injection",
                  "Begin with **12.5 mg (0.5 mL) of fluphenazine** or **25 mg (0.5 mL) of haloperidol decanoate**."
                ],
                [
                  "Bridge",
                  "If symptoms emerge in the next 2 to 4 weeks, add temporary oral doses or small extra injections."
                ],
                [
                  "Consolidate",
                  "After **3 to 4 weeks**, give a single injection equal to the total given in the initial period."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why start low",
              "text": "Absorption can be **faster than usual at first**, causing frightening **dystonia** that discourages adherence. Some clinicians keep patients drug-free for 3 to 7 days and give tiny doses (**3.125 mg fluphenazine** or **6.25 mg haloperidol**) every few days at first."
            },
            {
              "type": "update",
              "year": "2021–2026",
              "title": "Long-acting second-generation injections now available",
              "text": "Besides Risperdal Consta, Invega Sustenna and Zyprexa Relprevv, current options include **paliperidone every 3 months (Trinza) or 6 months (Hafyera)**, **subcutaneous risperidone** (Perseris; Uzedy monthly or every 2 months), **Rykindo**, **aripiprazole** monthly (Maintena), every 2 months (Asimtufii) and **aripiprazole lauroxil** (Aristada), and **subcutaneous olanzapine** (Weltruza, October 2026) without post-injection observation. The APA guideline suggests a long-acting injectable when the patient prefers one or adherence is poor or uncertain.",
              "source": "Product prescribing information and manufacturer announcements, 2021 to 2026; APA schizophrenia guideline, 3rd edition (2020)"
            }
          ]
        },
        {
          "id": "s211-levels",
          "title": "Plasma levels, treatment resistance and choosing a drug",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Plasma concentrations",
                  "Genes and interactions change metabolism. If there is no improvement after **4 to 6 weeks**, measure a level when feasible, after at least **five half-lives** on the dose. Draw **trough** samples just before the daily dose, at least 12 hours (usually **20 to 24 hours**) after the last. Most antipsychotics lack a clear dose–response curve. Documented ranges: **haloperidol 2 to 15 ng/mL** (the best studied), **chlorpromazine 30 to 100 ng/mL**, **perphenazine 0.8 to 2.4 ng/mL**."
                ],
                [
                  "Treatment resistance",
                  "**10% to 35%** of patients with schizophrenia get little benefit. Resistance means **failure of at least two adequate trials from two pharmacologic classes**. Levels help reveal slow or rapid metabolizers and nonadherence. **Clozapine** has been conclusively shown to work after multiple failed DRA trials."
                ],
                [
                  "Adjunctive drugs",
                  "Commonly **lithium** or other mood stabilizers, **SSRIs** or **benzodiazepines**. The old belief that antidepressants worsen psychosis probably came from **misdiagnosed bipolar disorder**; antidepressants improve depression in schizophrenia. **Amphetamines** are sometimes added for withdrawn, apathetic patients."
                ],
                [
                  "Choosing a DRA",
                  "DRAs remain valuable, especially short term, because they work and **prophylactic antiparkinsonian drugs** prevent acute motor effects, at much lower cost. **Tardive dyskinesia** is the main deterrent to long-term use, though SDAs may not be free of it. DRAs are **not interchangeable**. Other than cost, the current first choice is an **SDA**; if a DRA is preferred, choose a **high-potency** drug, because low-potency drugs cause more cardiac, hypotensive, epileptogenic, sexual and allergic effects. For sedation, give a low-potency drug in divided doses or add a benzodiazepine."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "First-dose dysphoria",
              "text": "An unpleasant reaction to the **first dose** (restlessness, oversedation, acute dystonia) **predicts poor response and nonadherence**. Prophylactic antiparkinsonian drugs may prevent it."
            },
            {
              "type": "update",
              "year": "2017–2024",
              "title": "VMAT2 inhibitors for tardive dyskinesia",
              "text": "The book mentions valbenazine only in passing. **Valbenazine** (Ingrezza; 40 mg, then 80 mg daily after a week; sprinkle capsules since 2024) and **deutetrabenazine** (Austedo, twice daily with food; Austedo XR once daily since 2023; start 12 mg/day, up 6 mg weekly to a maximum of 48 mg) are approved for **tardive dyskinesia** and Huntington chorea. The APA guideline recommends a VMAT2 inhibitor for moderate, severe or disabling TD.",
              "source": "Ingrezza and Austedo prescribing information; Neurocrine (2024) and Teva (2023) announcements; APA schizophrenia guideline, 3rd edition (2020)"
            }
          ]
        }
      ]
    }
  ]
});
