/* Chapter 21.3 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., section 21.3. */
KS.add("ch21-3", "guide", {
  "intro": "Section 21.3 covers the mood stabilizers: lithium, from its pharmacology and indications to toxicity, monitoring and pregnancy; valproate and its boxed warnings; lamotrigine and the rash that shapes its titration; carbamazepine and oxcarbazepine; the other anticonvulsants used in psychiatry (gabapentin, pregabalin, topiramate, tiagabine, levetiracetam, zonisamide and phenytoin); and calcium channel blockers. It ends by comparing the four main mood stabilizers. Dashed boxes mark label changes and guidance since the 12th edition, such as HLA testing before carbamazepine, the 2024 valproate restrictions and new lamotrigine warnings, and correct a few errors in the book.",
  "objectives": [
    "Explain lithium's pharmacokinetics and use it safely: indications, workup, dosing, levels, interactions and patient education.",
    "Recognize and manage lithium toxicity, renal, thyroid and cardiac effects, and plan lithium use in pregnancy and after delivery.",
    "Use valproate for mania with loading and levels, and counsel on hepatotoxicity, pancreatitis, hyperammonemia and teratogenicity.",
    "Titrate lamotrigine to minimize serious rash, adjusting for valproate and enzyme inducers.",
    "Use carbamazepine and oxcarbazepine with attention to blood dyscrasias, rash, hyponatremia, autoinduction and interactions.",
    "Know the psychiatric uses and key risks of the other anticonvulsants and calcium channel blockers, and compare the mood stabilizers."
  ],
  "parts": [
    {
      "title": "Lithium",
      "sections": [
        {
          "id": "s213-li",
          "title": "Lithium: history and pharmacology",
          "blocks": [
            {
              "type": "p",
              "text": "**John Cade**, an Australian psychiatrist, established lithium's effect in mania and in preventing manic–depressive episodes in the early 1950s. Toxicity fears slowed U.S. acceptance; the FDA approved lithium for **mania in 1970** and for **maintenance in 1974**. For decades it was the only drug approved for both acute and maintenance treatment of bipolar disorder, and it is also used to **augment antidepressants** in major depression."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Chemistry",
                  "A monovalent **group IA alkali metal** (with sodium and potassium). **1,597 mg of lithium carbonate** contains 300 mg of lithium. The ⁷Li isotope allows imaging by magnetic resonance spectroscopy."
                ],
                [
                  "Absorption",
                  "Rapid and complete; peak **1 to 1.5 hours** (standard) or **4 to 4.5 hours** (slow release)."
                ],
                [
                  "Distribution",
                  "**Not protein bound** and **not metabolized**; crosses the blood–brain barrier **slowly**, so a single overdose may not cause toxicity, and chronic toxicity resolves slowly. Thyroid and kidney concentrations exceed serum levels."
                ],
                [
                  "Elimination",
                  "Almost entirely **renal**. Elimination half-life **18 to 24 hours** in young adults (shorter in children, longer in older adults); steady state in **5 to 7 days**. Clearance falls with renal insufficiency, rises with **obesity**, rises in **pregnancy** and drops sharply **after delivery**. Excreted in breast milk."
                ],
                [
                  "Mechanism",
                  "Unknown. Theories involve ion transport, neurotransmitters and neuropeptides, signal transduction and second messengers."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-li-ind",
          "title": "Lithium indications",
          "blocks": [
            {
              "type": "defs",
              "title": "Bipolar I disorder",
              "items": [
                [
                  "Acute mania",
                  "Controls mania and prevents relapse in about **80%** with bipolar I, fewer with **mixed** episodes, **rapid cycling** or encephalopathy. Onset is slow, **1 to 3 weeks**, so a **benzodiazepine, antipsychotic or valproate** is usually added for the first weeks. Dysphoric or mixed mania, rapid cycling, substance use and organic illness predict poorer response."
                ],
                [
                  "Bipolar depression",
                  "Effective, and added to antidepressants in severe MDD. Adding valproate or carbamazepine is well tolerated with little risk of mania."
                ],
                [
                  "Depression during maintenance",
                  "Consider **lithium-induced hypothyroidism**, substance use and **nonadherence**. Options: raise the level to **1 to 1.2 mEq/L**, add valproate or carbamazepine, add **liothyronine 25 µg** even with normal thyroid tests, or judiciously add an antidepressant or ECT; then return to lithium alone if possible."
                ],
                [
                  "Maintenance",
                  "Markedly reduces frequency, severity and duration of episodes; protects **more against mania than depression**. Almost always indicated after the **first episode** of bipolar I. Lithium reduces **suicide six- to sevenfold**."
                ],
                [
                  "Why start after the first episode",
                  "Each episode raises the risk of more. Responders who stop lithium are **28 times more likely to relapse**, and some never respond again after stopping. **Taper slowly**; abrupt stopping increases early recurrence."
                ],
                [
                  "Cyclothymia",
                  "Effective in severe cyclothymic disorder."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Other indications",
              "items": [
                [
                  "Major depression",
                  "As effective as antidepressants long term but not better. Its main role is **augmentation**: **50% to 60%** of antidepressant nonresponders respond when **lithium 300 mg three times daily** is added, sometimes within days, usually over weeks."
                ],
                [
                  "Schizoaffective disorder and schizophrenia",
                  "Patients with prominent mood symptoms respond best. Useful **augmentation** of antipsychotics, including in treatment-resistant cases; occasionally alone for patients who cannot take antipsychotics."
                ],
                [
                  "Aggression",
                  "An **anti-aggressive** effect separate from mood: aggressive outbursts in schizophrenia, prisoners, children with conduct disorder, and self-mutilation in intellectual disability."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Psychiatric uses of lithium (Table 21-25, condensed)",
              "head": [
                "Evidence",
                "Uses"
              ],
              "wide": true,
              "rows": [
                [
                  "Well established (FDA approved)",
                  "Bipolar disorder: **manic episodes** and **maintenance**"
                ],
                [
                  "Reasonably well established",
                  "Bipolar I depression; bipolar II; rapid-cycling bipolar I; cyclothymia; MDD (augmentation and maintenance); schizoaffective disorder"
                ],
                [
                  "Benefit in particular groups",
                  "Schizophrenia; episodic aggression, explosive behavior and self-mutilation; conduct disorder; intellectual disability; cognitive disorders; aggressive prisoners"
                ],
                [
                  "Anecdotal or doubtful",
                  "Substance use disorders, OCD, phobias, PTSD, ADHD, eating disorders, impulse-control disorders, Kleine–Levin syndrome, periodic catatonia and hypersomnia, personality disorders, PMDD, sexual disorders"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Nonpsychiatric uses (Table 21-26)",
              "text": "None is FDA approved. Examples include **cluster headache**, **neutropenia** (lithium stimulates granulocyte production, which is why it reverses carbamazepine's benign WBC drop), thyroid cancer with radioiodine, thyrotoxicosis, SIADH, and topical or oral use for genital herpes."
            },
            {
              "type": "update",
              "year": "2018",
              "title": "Lithium approved from age 7",
              "text": "Lithium's label now covers **acute manic and mixed episodes and maintenance in bipolar I** for patients **7 years and older**, with weight-based starting doses (300 mg twice daily for 20 to 30 kg).",
              "source": "Lithium carbonate prescribing information (2018 and later)"
            }
          ]
        },
        {
          "id": "s213-li-ae",
          "title": "Lithium adverse effects",
          "blocks": [
            {
              "type": "p",
              "text": "Over **80%** of patients have side effects. Monitoring levels, patient education and targeted treatments reduce them. Water and salt balance changes lithium excretion: **high sodium intake lowers** levels; **low-salt diets**, sweating and dehydration **raise** them."
            },
            {
              "type": "table",
              "caption": "Adverse effects of lithium (Table 21-27)",
              "head": [
                "System",
                "Effects"
              ],
              "wide": true,
              "rows": [
                [
                  "Neurologic (benign)",
                  "Dysphoria, lack of spontaneity, slowed reaction time, memory difficulty; **postural tremor**, occasional EPS"
                ],
                [
                  "Neurologic (toxic)",
                  "**Coarse tremor, dysarthria, ataxia**, neuromuscular irritability, seizures, coma, death"
                ],
                [
                  "Neurologic (other)",
                  "Peripheral neuropathy, **benign intracranial hypertension**, myasthenia-like syndrome, altered creativity, lower seizure threshold"
                ],
                [
                  "Endocrine",
                  "**Goiter, hypothyroidism**, exophthalmos, rare hyperthyroidism; **hyperparathyroidism**, adenoma"
                ],
                [
                  "Cardiovascular",
                  "Benign **T-wave** changes, **sinus node dysfunction**"
                ],
                [
                  "Renal",
                  "Concentrating defect, **polyuria (nephrogenic diabetes insipidus)**, reduced GFR, morphologic changes, nephrotic syndrome, renal tubular acidosis"
                ],
                [
                  "Skin",
                  "**Acne**, hair loss, **psoriasis**, rash"
                ],
                [
                  "Gastrointestinal",
                  "Appetite loss, nausea, vomiting, diarrhea"
                ],
                [
                  "Other",
                  "Altered carbohydrate metabolism, **weight gain**, fluid retention"
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "GI",
                  "Divide doses, give with food, or change preparation. **Lithium citrate** causes least diarrhea; lactose in some products affects lactose-intolerant people; slow-release forms can cause lower-GI diarrhea. Antidiarrheals (loperamide, bismuth, diphenoxylate) help."
                ],
                [
                  "Weight gain",
                  "From carbohydrate effects, hypothyroidism, edema, and **sugary drinks** taken for thirst."
                ],
                [
                  "Tremor",
                  "Postural, **8 to 12 Hz**, in outstretched fingers. Divide the dose, use slow release, cut caffeine, review other drugs, treat anxiety; **propranolol 30 to 120 mg** or **primidone 50 to 250 mg**; potassium if low. A **severe tremor suggests toxicity**."
                ],
                [
                  "Cognition",
                  "Dysphoria, lack of spontaneity, slowed reactions, memory problems: a frequent reason for **nonadherence**. Rule out depression, hypothyroidism, **hypercalcemia** and other drugs."
                ],
                [
                  "Polyuria",
                  "The **most common renal** effect: **25% to 35%** pass over **3 L a day** because lithium antagonizes **ADH** (nephrogenic diabetes insipidus). Replace fluids, lowest effective dose, **single daily dosing**, a thiazide or potassium-sparing diuretic (amiloride, spironolactone, triamterene). If a diuretic is started, **halve the lithium dose** and wait 5 days before starting the diuretic."
                ],
                [
                  "Chronic nephropathy",
                  "After **10 years or more**: interstitial fibrosis, falling GFR, rising creatinine, rarely renal failure; microcysts visible on **MRI**. Check creatinine, urine studies and 24-hour volume about **every 6 months**."
                ],
                [
                  "Thyroid",
                  "Goiter **5%**; hypothyroidism **7% to 10%** (**women 14%**, men 4.5%), highest in women in the first **2 years**; twice as likely with rapid cycling. About 30% have raised TSH. Treat symptomatic hypothyroidism with **levothyroxine**; check **TSH every 6 to 12 months**."
                ],
                [
                  "Heart",
                  "ECG changes mimic **hypokalemia** (T-wave flattening or inversion), benign and reversible. Depresses the **sinus node**: dysrhythmias, heart block, syncope; **contraindicated in sick sinus syndrome**. Risk rises with low-salt diets, diuretics, ACE inhibitors, electrolyte imbalance and renal impairment."
                ],
                [
                  "Brugada syndrome",
                  "Lithium can unmask it. Ask about heart disease, unexplained fainting and family history of **sudden death before 45**."
                ],
                [
                  "Skin",
                  "Acneiform, follicular and maculopapular eruptions, pretibial ulcers, **worsening psoriasis**, alopecia. **Tetracycline** for acne raises lithium."
                ],
                [
                  "Other",
                  "Caution in diabetes (glucose changes); benign **leukocytosis** is common."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-li-tox",
          "title": "Lithium toxicity",
          "blocks": [
            {
              "type": "p",
              "text": "Early toxicity: **coarse tremor, dysarthria, ataxia**, GI upset, cardiovascular changes and renal dysfunction. Late: **impaired consciousness, fasciculations, myoclonus, seizures, coma**. Risk factors: excess dose, **renal impairment, low-sodium diet, interacting drugs, dehydration**; older adults are most vulnerable. Toxicity occurs **at or just above** the top of the range, especially in older people."
            },
            {
              "type": "table",
              "caption": "Signs of lithium toxicity by level (Table 21-28)",
              "head": [
                "Level",
                "GI",
                "Neurologic and other"
              ],
              "wide": true,
              "rows": [
                [
                  "Mild to moderate: **1.5 to 2.0 mEq/L**",
                  "Vomiting, abdominal pain, dry mouth",
                  "**Ataxia**, dizziness, **slurred speech**, **nystagmus**, lethargy or excitement, muscle weakness"
                ],
                [
                  "Moderate to severe: **2.0 to 2.5 mEq/L**",
                  "Anorexia, persistent nausea and vomiting",
                  "Blurred vision, **fasciculations**, clonic limb movements, **hyperreflexia**, choreoathetosis, **convulsions**, delirium, syncope, EEG changes, stupor, coma, circulatory failure"
                ],
                [
                  "Severe: **above 2.5 mEq/L**",
                  "—",
                  "Generalized convulsions, **oliguria and renal failure**, death"
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Managing lithium toxicity (Table 21-29)",
              "items": [
                [
                  "Get care",
                  "Emergency department or personal physician."
                ],
                [
                  "Stop lithium",
                  "And treat **dehydration**."
                ],
                [
                  "Assess",
                  "Vital signs, neurologic examination and full mental status examination."
                ],
                [
                  "Test",
                  "**Lithium level, electrolytes, renal function, ECG**."
                ],
                [
                  "Decontaminate",
                  "Emesis or **wide-bore gastric lavage** (pill clumps); **sodium polystyrene sulfonate** (Kayexalate) or **polyethylene glycol** (GoLYTELY). **Activated charcoal does not bind lithium.**"
                ],
                [
                  "Dialysis",
                  "**Hemodialysis** for any level above **4.0 mEq/L** and in severe cases; levels can **rebound** after dialysis as lithium leaves tissues, so repeat sessions may be needed."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Neurologic recovery lags",
              "text": "Because lithium crosses the blood–brain barrier slowly, **neurologic improvement can trail the fall in serum lithium by several days**, and toxicity can cause **permanent neuronal damage**."
            }
          ]
        },
        {
          "id": "s213-li-pop",
          "title": "Lithium in special populations",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Adolescents",
                  "Levels similar to adults; **weight gain and acne** are especially troublesome."
                ],
                [
                  "Older adults",
                  "Safe and effective but complicated by illness, lower renal function, diets and sensitivity. Start low, change doses less often, and allow longer to reach steady state."
                ],
                [
                  "Pregnancy",
                  "Avoid in the **first trimester**. The classic malformation is **Ebstein anomaly** of the tricuspid valve: about **1 in 1,000** exposed fetuses, **20 times** the general rate; screen with **fetal echocardiography**. Overall malformation risk **4% to 12%** (general population 2% to 3%), lower than with valproate or carbamazepine."
                ],
                [
                  "Delivery",
                  "Use the lowest dose and monitor levels closely, especially **after delivery**, when renal clearance falls back within days. Hydrate during labor. **Lithium prophylaxis is recommended for all women with bipolar disorder entering the postpartum period.**"
                ],
                [
                  "Breastfeeding",
                  "Lithium enters breast milk; weigh risks. Infant toxicity: **lethargy, cyanosis, abnormal reflexes**, sometimes hepatomegaly."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-li-int",
          "title": "Lithium interactions",
          "blocks": [
            {
              "type": "table",
              "caption": "Drug interactions with lithium (Table 21-30)",
              "head": [
                "Drug",
                "Effect"
              ],
              "wide": true,
              "rows": [
                [
                  "Antipsychotics",
                  "Case reports of **encephalopathy**, worse EPS and **NMS**; usually a safe, common combination at ordinary doses"
                ],
                [
                  "Antidepressants",
                  "Occasional **serotonin-like syndrome** with potent SRIs"
                ],
                [
                  "Carbamazepine, valproate, lamotrigine, clonazepam",
                  "No major kinetic interaction with carbamazepine or valproate, but **neurotoxicity** reported with carbamazepine; start combinations a little lower; useful for treatment resistance"
                ],
                [
                  "**NSAIDs**",
                  "**Raise lithium** (less renal clearance): indomethacin, ibuprofen, naproxen, diclofenac, piroxicam and others; **aspirin and sulindac do not**"
                ],
                [
                  "**Thiazide diuretics**",
                  "**Raise lithium**, well documented; toxicity reported"
                ],
                [
                  "Potassium-sparing diuretics",
                  "May raise lithium"
                ],
                [
                  "Loop diuretics",
                  "Usually no change (some reports of rises)"
                ],
                [
                  "Osmotic diuretics, xanthines (**caffeine**, theophylline), acetazolamide, bicarbonate",
                  "**Lower lithium** (more renal clearance)"
                ],
                [
                  "**ACE inhibitors**",
                  "Raise lithium and cause toxicity; **losartan and irbesartan do not** change levels"
                ],
                [
                  "**Calcium channel blockers**",
                  "**Neurotoxicity**, sometimes fatal; avoid the combination"
                ],
                [
                  "Succinylcholine, pancuronium",
                  "Prolonged neuromuscular blockade"
                ],
                [
                  "Metronidazole; tetracycline",
                  "Raise lithium"
                ],
                [
                  "Iodides",
                  "Additive antithyroid effect"
                ],
                [
                  "Propranolol",
                  "Treats lithium tremor; may slightly raise levels"
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Quetiapine and ziprasidone",
                  "Lithium with quetiapine causes somnolence; with ziprasidone, slightly more tremor."
                ],
                [
                  "ECT",
                  "Stop lithium **2 days before** ECT to reduce **delirium**."
                ],
                [
                  "Switching mood stabilizers",
                  "Change carefully, with as little overlap as possible."
                ],
                [
                  "Laboratory effects",
                  "Raises **WBC** and **calcium**, lowers **thyroxine**. Blood drawn into a **lithium–heparin tube** gives falsely high levels (by up to **1 mEq/L**)."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-li-dose",
          "title": "Lithium dosing and monitoring",
          "blocks": [
            {
              "type": "steps",
              "title": "Starting lithium",
              "items": [
                [
                  "Workup",
                  "History and examination; **creatinine** (24-hour urine creatinine if worried), **electrolytes**, **thyroid tests** (TSH, T3, T4), **CBC**, **ECG**, and a **pregnancy test** in women who could be pregnant."
                ],
                [
                  "Start",
                  "**300 mg three times daily** for most adults; **300 mg once or twice daily** in older adults or renal impairment."
                ],
                [
                  "Titrate",
                  "**900 to 1,200 mg** a day usually gives 0.6 to 1.0 mEq/L; **1,200 to 1,800 mg** gives 0.8 to 1.2 mEq/L."
                ],
                [
                  "Maintain",
                  "Two or three divided doses of regular release, or **once daily** sustained release at the same total dose, once the dose is set."
                ],
                [
                  "Stop",
                  "**Gradually**, to lower early recurrence and allow early warning signs to be seen."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Levels",
              "items": [
                [
                  "When to draw",
                  "At steady state (about **5 days** on a fixed dose), **12 hours (±30 minutes) after a dose**. Sustained-release levels at 12 hours run about **30% higher** than regular release."
                ],
                [
                  "How often",
                  "Every **2 to 6 months**; weekly during dose changes, suspected toxicity or nonadherence. **ECG at baseline and yearly**; creatinine and urine studies every 6 months; TSH every 6 to 12 months."
                ],
                [
                  "Targets in the book",
                  "**Mania 1.0 to 1.2 mEq/L** (about 1,800 mg); **maintenance 0.4 to 0.8 mEq/L** (900 to 1,200 mg). U.S. package inserts in the book: mania 1.0 to 1.2, maintenance **0.6 to 1.2**. A 3-year study found **0.4 to 0.6** relapsed **2.6 times** more than **0.8 to 1.0**, at the cost of more side effects."
                ],
                [
                  "Treat the patient",
                  "Some need levels above 1.2 with no toxicity; some do well below 0.4. A lab range of 0.5 to 1.2 can lull clinicians into missing toxicity near 1.2."
                ],
                [
                  "Misleading levels",
                  "Lithium–heparin tubes (up to 1 mEq/L falsely high), an aging ion-selective electrode (up to 0.5 mEq/L), dietary sodium, mood state, activity and posture."
                ],
                [
                  "Nonresponse",
                  "No response after **2 weeks** at a level that is starting to cause side effects: taper over 1 to 2 weeks and try another mood stabilizer."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2018–2019",
              "title": "Current label and consensus targets",
              "text": "The current U.S. label targets **0.8 to 1.2 mEq/L** for acute mania (titrating by 300 mg every 3 days) and **0.8 to 1.0 mEq/L** for maintenance, and advises against lithium when **creatinine clearance is under 30 mL/min**. The 2019 **ISBD/IGSLi** task force recommends a standard maintenance level of **0.60 to 0.80 mmol/L** (12-hour trough) in adults, adjusting to 0.40 to 0.60 for good response with poor tolerance or 0.80 to 1.00 for insufficient response, and generally **0.40 to 0.60** in older adults.",
              "source": "Lithium carbonate prescribing information (2018 and later); Nolen WA et al., ISBD/IGSLi task force on the optimal lithium level, Bipolar Disorders, 2019"
            },
            {
              "type": "table",
              "caption": "Instructions to patients taking lithium (Table 21-31, condensed)",
              "head": [
                "Topic",
                "Advice"
              ],
              "wide": true,
              "rows": [
                [
                  "Dosing",
                  "Take exactly as directed; never stop without your doctor. A missed dose: take it unless within **4 hours** of the next (about **6 hours** for slow release); **never double up**."
                ],
                [
                  "Blood tests",
                  "Keep to the schedule (lithium, thyroid, kidney); take the last dose **12 hours** before a level."
                ],
                [
                  "Other medicines",
                  "Tell your doctor before starting anything, even **ibuprofen or naproxen**."
                ],
                [
                  "Diet and fluids",
                  "Avoid sudden diet changes; **caffeine and alcohol** lower levels; drink about **2 to 3 quarts** daily and use **normal salt**; report starting or stopping a low-salt diet."
                ],
                [
                  "Warning signs",
                  "Report sweating illness, vomiting or diarrhea. **Blurred vision, confusion, vomiting, diarrhea, weakness, lethargy, shakiness, slurred speech, unsteadiness, inability to urinate or seizures** need immediate care."
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Valproate",
      "sections": [
        {
          "id": "s213-vpa",
          "title": "Valproate: forms and pharmacology",
          "blocks": [
            {
              "type": "p",
              "text": "**Valproate** (Depakene, Depakote) is approved for **manic episodes of bipolar I disorder** and is one of the most prescribed mood stabilizers. It acts quickly, is well tolerated, and reduces the frequency and intensity of manic episodes over time."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Forms",
                  "A branched-chain carboxylic acid converted to **valproic acid** in the stomach. **Valproic acid** (Depakene); **divalproex sodium** (Depakote), an enteric-coated 1:1 mix of valproic acid and sodium valproate, as delayed-release tablets and **sprinkle** capsules; **extended release** (Depakote ER); **IV sodium valproate** (Depacon). All are therapeutically equivalent."
                ],
                [
                  "Kinetics",
                  "Rapid, complete absorption; peak **4 to 5 hours** (varies by form); half-life **10 to 16 hours**. **Highly protein bound**, but binding **saturates** at higher levels, so **free valproate rises disproportionately** above about 50 to 100 µg/mL. ER gives lower peaks and higher troughs and works **once daily**."
                ],
                [
                  "Metabolism",
                  "Hepatic **glucuronidation** and mitochondrial **β-oxidation**."
                ],
                [
                  "Mechanism",
                  "Unclear: **enhanced GABA** activity, modulation of **voltage-sensitive sodium channels**, effects on extrahypothalamic neuropeptides."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Valproate preparations (Table 21-36)",
              "head": [
                "Form",
                "Brand and strengths",
                "Time to peak"
              ],
              "wide": true,
              "rows": [
                [
                  "Sodium valproate injection",
                  "Depacon, 100 mg/mL",
                  "1 hour"
                ],
                [
                  "Valproic acid",
                  "Depakene syrup 250 mg/5 mL; capsules 250 mg",
                  "1 to 2 hours"
                ],
                [
                  "Divalproex sodium",
                  "Depakote delayed-release tablets 125, 250, 500 mg",
                  "3 to 8 hours"
                ],
                [
                  "Divalproex sprinkle",
                  "Depakote sprinkle capsules 125 mg",
                  "Earlier onset, slower absorption, slightly lower peak"
                ],
                [
                  "Divalproex extended release",
                  "Depakote ER 250, 500 mg",
                  "4 to 17 hours"
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-vpa-ind",
          "title": "Valproate indications",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Neurology",
                  "Complex partial seizures (alone or adjunct), simple and complex **absence** seizures, multiple seizure types including absence; divalproex also for **migraine prophylaxis**."
                ],
                [
                  "Acute mania",
                  "About **two-thirds** respond, usually within **1 to 4 days** of reaching **above 50 µg/mL** (range **50 to 125**). **Oral loading** reaches therapeutic levels in 1 day and controls mania within about 5 days. Can be augmented with lithium, carbamazepine or antipsychotics."
                ],
                [
                  "Who does well",
                  "**Irritable** mania responds better to valproate than lithium. Preferred over lithium in **children and older adults** because of fewer cognitive, skin, thyroid and kidney effects. Also good for **rapid and ultrarapid cycling**, **dysphoric or mixed** mania, mania from a medical condition, comorbid **substance use** or **panic attacks**, and partial lithium responders."
                ],
                [
                  "Bipolar depression",
                  "Much weaker effect than in mania; helps **agitation** more than dysphoria. Often added to an antidepressant to prevent mania or rapid cycling."
                ],
                [
                  "Prophylaxis",
                  "Fewer, milder, shorter manic episodes; **at least as effective as lithium** and better tolerated in direct comparison."
                ],
                [
                  "Schizophrenia and schizoaffective disorder",
                  "May speed antipsychotic response; ineffective alone for psychosis."
                ],
                [
                  "Weak evidence",
                  "Alcohol withdrawal and relapse, panic, PTSD, impulse control, borderline personality disorder, agitation in dementia."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-vpa-ae",
          "title": "Valproate warnings and adverse effects",
          "blocks": [
            {
              "type": "table",
              "caption": "Boxed and other warnings for valproate (Table 21-32)",
              "head": [
                "Risk",
                "What to know"
              ],
              "wide": true,
              "rows": [
                [
                  "**Hepatotoxicity**",
                  "Rare, idiosyncratic. About **1 in 118,000** adults; **1 in 800** with polypharmacy, age **under 2** and intellectual disability. Fatal cases mostly in young children."
                ],
                [
                  "**Pancreatitis**",
                  "Rare, similar pattern; recurs on rechallenge; **asymptomatic amylase rises do not predict it**. Most in the first **6 months**; can be fatal."
                ],
                [
                  "Hyperammonemia",
                  "Rare; more with **carbamazepine**; coarse tremor; may respond to **L-carnitine**."
                ],
                [
                  "Urea cycle disorders",
                  "Stop valproate and protein intake and assess; **divalproex is contraindicated** in urea cycle disorders."
                ],
                [
                  "**Teratogenicity**",
                  "**Neural tube defects 1% to 4%** (3% to 5% in another passage); counsel before conception; folate for all women who could become pregnant."
                ],
                [
                  "Somnolence in older adults",
                  "Titrate more slowly; watch fluid and food intake."
                ],
                [
                  "Thrombocytopenia",
                  "More likely at levels **110 µg/mL or more (women)** and **135 or more (men)**; reduce the dose if bruising or bleeding gums."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Recognize liver failure",
              "text": "**Lethargy, malaise, anorexia, nausea and vomiting, edema and abdominal pain** in a patient on valproate raise the possibility of severe hepatotoxicity. Modest liver test rises do **not** predict it. Risk factors: age **under 3** (book; the table says under 2), **phenobarbital**, neurologic disease and **inborn errors of metabolism**. No one over 10 has died of it on valproate alone."
            },
            {
              "type": "defs",
              "title": "Pregnancy and reproductive effects",
              "items": [
                [
                  "Malformations",
                  "First-trimester use: **neural tube defects** (spina bifida) and heart and other malformations. Folic acid **1 to 4 mg a day** lowers NTD risk and should be given to all women who could conceive."
                ],
                [
                  "Neurodevelopment",
                  "In utero exposure lowers **IQ at age 6**, dose dependently, across cognitive domains, and may raise **autism spectrum disorder** risk."
                ],
                [
                  "Breastfeeding",
                  "Infant levels 1% to 10% of maternal; **not contraindicated** in nursing mothers."
                ],
                [
                  "Polycystic ovaries",
                  "Reports of **PCOS**; many women have menstrual irregularity, hair loss and **hirsutism** from insulin resistance, a particular concern in adolescents and young women."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2024",
              "title": "Valproate restricted for anyone under 55 in the UK, and a risk for children of treated fathers",
              "text": "From **January 31, 2024**, the UK MHRA requires that valproate **not be started in anyone under 55**, male or female, unless **two specialists** independently document that nothing else is effective or tolerated or that the reproductive risks do not apply; women and girls already taking it need an annual review with a second signature. In **January 2024** the EMA also recommended precautions for men, because of a possible higher risk of **neurodevelopmental disorders in children whose fathers took valproate** in the 3 months before conception (see section 21.0). In the United States valproate carries **boxed warnings** for fetal risk and is contraindicated in pregnancy for **migraine prophylaxis**.",
              "source": "MHRA, new valproate safety measures, January 2024; European Medicines Agency, 26 January 2024; Depakote prescribing information"
            },
            {
              "type": "table",
              "caption": "Adverse effects of valproate (Table 21-33)",
              "head": [
                "Frequency",
                "Effects"
              ],
              "wide": true,
              "rows": [
                [
                  "Common",
                  "**GI irritation, nausea, sedation, tremor, weight gain, hair loss**"
                ],
                [
                  "Uncommon",
                  "Vomiting, diarrhea, ataxia, dysarthria, persistent transaminase rise"
                ],
                [
                  "Rare",
                  "Fatal hepatotoxicity (mainly children), reversible **thrombocytopenia**, platelet dysfunction, coagulation problems, edema, **hemorrhagic pancreatitis**, agranulocytosis, encephalopathy and coma, respiratory muscle weakness"
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "GI",
                  "Most in the **first month** and with fast increases; **valproic acid** (Depakene) causes more than divalproex sprinkle or delayed release."
                ],
                [
                  "Neurologic",
                  "Sedation, ataxia, dysarthria, tremor; tremor responds to **β-blockers or gabapentin**; otherwise lower the dose."
                ],
                [
                  "Weight",
                  "Common, especially long term; limit calories."
                ],
                [
                  "Hair loss",
                  "**5% to 10%**; rarely total. Some recommend **zinc and selenium** supplements."
                ],
                [
                  "Liver tests",
                  "**5% to 40%** have benign transaminase rises up to 3 times normal."
                ],
                [
                  "Sodium",
                  "Doses above 1,000 mg can rarely cause SIADH-type **hyponatremia**."
                ],
                [
                  "Overdose",
                  "Coma and death."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-vpa-int",
          "title": "Valproate interactions",
          "blocks": [
            {
              "type": "callout",
              "kind": "exam",
              "title": "The dangerous one: lamotrigine",
              "text": "Valproate **more than doubles lamotrigine** levels, raising the risk of **Stevens–Johnson syndrome** and toxic epidermal necrolysis. Use the slower lamotrigine titration (half doses) when combining them."
            },
            {
              "type": "table",
              "caption": "Interactions of valproate (Table 21-34 and text)",
              "head": [
                "Drug",
                "Interaction"
              ],
              "wide": true,
              "rows": [
                [
                  "Lithium",
                  "More **tremor** (treat with a β-blocker)"
                ],
                [
                  "Antipsychotics",
                  "More sedation and EPS; one report of delirium and stupor"
                ],
                [
                  "Clozapine",
                  "More sedation; one confusional syndrome"
                ],
                [
                  "Carbamazepine",
                  "**Lowers valproate**; valproate displaces carbamazepine and raises its **epoxide**: lower carbamazepine, raise valproate; rare psychosis or ataxia"
                ],
                [
                  "Raised by valproate",
                  "**Lamotrigine**, carbamazepine (epoxide), **diazepam**, amitriptyline, nortriptyline, **phenobarbital** (with sedation)"
                ],
                [
                  "Lowered by valproate",
                  "**Phenytoin**, desipramine"
                ],
                [
                  "Raise valproate",
                  "Guanfacine, amitriptyline, **fluoxetine**"
                ],
                [
                  "Displace valproate from protein",
                  "Carbamazepine, diazepam, **aspirin**"
                ],
                [
                  "Clonazepam",
                  "Rare **absence status** (only with preexisting epilepsy)"
                ],
                [
                  "Anticoagulants",
                  "Possible potentiation; monitor with aspirin or warfarin"
                ],
                [
                  "CNS depressants",
                  "More sedation"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Laboratory interference",
              "text": "Valproate can raise **free fatty acids**, give a **false-positive urine ketone** test, and distort thyroid function tests."
            }
          ]
        },
        {
          "id": "s213-vpa-dose",
          "title": "Valproate dosing and monitoring",
          "blocks": [
            {
              "type": "steps",
              "title": "Using valproate",
              "items": [
                [
                  "Baseline",
                  "**Liver panel, CBC with platelets, pregnancy test**; amylase and coagulation studies if pancreatic disease or coagulopathy is suspected."
                ],
                [
                  "Acute mania",
                  "**Oral loading 20 to 30 mg/kg a day**; well tolerated, but sedation and tremor in older adults. **IV valproate** can stabilize agitation quickly."
                ],
                [
                  "Non-acute start",
                  "**250 mg with a meal** on day 1, raised to **250 mg three times daily over 3 to 6 days**."
                ],
                [
                  "Levels",
                  "Draw in the morning **before the first dose**. Seizure range **50 to 100 µg/mL**; mania studies used **50 to 125**. Most reach range on **1,200 to 1,500 mg** a day in divided doses."
                ],
                [
                  "Maintenance",
                  "Once controlled, the full dose can be taken **at bedtime**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Laboratory tests during valproate therapy (Table 21-35)",
              "head": [
                "When",
                "Tests"
              ],
              "wide": true,
              "rows": [
                [
                  "Before treatment",
                  "Chemistry screen with **liver tests**; **CBC with WBC and platelets**"
                ],
                [
                  "During treatment",
                  "Liver tests and CBC with platelets at **1 month**, then every **6 to 24 months** if normal"
                ],
                [
                  "Mild transaminase rise (under 3 times normal)",
                  "Recheck every 1 to 2 weeks; if stable and responding, monthly to every 3 months"
                ],
                [
                  "Marked rise (over 3 times normal)",
                  "Reduce or stop; rechallenge or raise again if enzymes normalize in a responder"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Teach rather than test",
              "text": "Because even frequent monitoring may not predict organ toxicity, the book stresses telling patients to seek **prompt evaluation of any illness**. Asymptomatic transaminase rises up to 3 times normal need no dose change."
            },
            {
              "type": "update",
              "title": "Label dose check",
              "text": "For mania, the **Depakote** (delayed-release) label starts at **750 mg a day** in divided doses and the **Depakote ER** label at **25 mg/kg once daily**, raised quickly to effect, up to **60 mg/kg a day**; trials targeted troughs of **50 to 125 µg/mL** (ER trials 85 to 125). ER gives about 10% to 20% lower levels than the same dose of delayed release.",
              "source": "Depakote and Depakote ER prescribing information"
            }
          ]
        }
      ]
    },
    {
      "title": "Lamotrigine",
      "sections": [
        {
          "id": "s213-ltg",
          "title": "Lamotrigine: pharmacology and indications",
          "blocks": [
            {
              "type": "p",
              "text": "**Lamotrigine** (Lamictal) came from screening **folate antagonists** as anticonvulsants and was marketed for partial seizures in **1995**. It was approved for **maintenance of bipolar I disorder in 2003**. Its acute effect in bipolar depression was too small to beat placebo consistently, so it is **not approved for acute bipolar depression**, and it is not effective as a primary treatment of acute mania. It 'stabilizes mood **from below**', acting mainly on the depressive pole."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Kinetics",
                  "Bioavailability **98%**; food does not matter; **55%** protein bound; steady-state half-life about **25 hours**, but clearance varies **sixfold** with other drugs; **94%** excreted in urine."
                ],
                [
                  "Mechanism",
                  "Blocks **voltage-sensitive sodium channels**, reducing **glutamate and aspartate** release; slight calcium channel effect; modestly raises serotonin; weak 5-HT3 inhibition."
                ],
                [
                  "Bipolar disorder",
                  "Lengthens the time between episodes, **more for depression than mania**; useful in **rapid cycling**."
                ],
                [
                  "Other",
                  "Reports of benefit in borderline personality disorder and pain syndromes."
                ],
                [
                  "Levels",
                  "No proven relation between blood level and efficacy; levels do not predict adverse events."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-ltg-ae",
          "title": "Lamotrigine rash and other adverse effects",
          "blocks": [
            {
              "type": "p",
              "text": "Lamotrigine is remarkably well tolerated: **no sedation, weight gain or metabolic effects**. Common effects, usually mild: **dizziness, ataxia, somnolence, headache, diplopia, blurred vision, nausea**; anecdotal cognitive complaints and joint or back pain."
            },
            {
              "type": "defs",
              "title": "Rash",
              "items": [
                [
                  "Benign rash",
                  "About **8%** develop a maculopapular rash, mostly in the **first 4 months**. Stop the drug for **any rash**, because it may be the start of **Stevens–Johnson syndrome or toxic epidermal necrolysis**, and stopping does not always prevent progression."
                ],
                [
                  "Serious rash",
                  "**0.08%** with monotherapy and **0.13%** with adjunctive use in adults; German registry data suggest about **1 in 5,000**."
                ],
                [
                  "Raises the risk",
                  "**Faster titration or higher starting doses** than recommended; **valproate**; age **under 16**."
                ],
                [
                  "Missed doses",
                  "After **more than 4 days** off (book), restart at the initial dose and retitrate."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Rash rule",
              "text": "Any rash, or fever with lymphadenopathy, means **stop lamotrigine**: over **1 to 2 days** for rash, compared with a **2-week taper** for ordinary discontinuation."
            },
            {
              "type": "update",
              "title": "Correction: lamotrigine and age",
              "text": "The book says lamotrigine 'should not be taken by anyone younger than 16'. The label approves it for **epilepsy from age 2** and for **bipolar maintenance in adults (18 and older)**; the boxed warning notes that serious rash is **more common in children** than in adults.",
              "source": "Lamictal prescribing information"
            },
            {
              "type": "update",
              "year": "2018–2021",
              "title": "Two FDA safety warnings",
              "text": "**April 2018**: lamotrigine can cause **hemophagocytic lymphohistiocytosis (HLH)**, a rare, life-threatening immune reaction with fever, rash, enlarged liver or spleen, lymphadenopathy, cytopenias and very high ferritin, usually within weeks of starting. Evaluate promptly and stop the drug if no other cause is found. **March 2021**: in vitro, lamotrigine has **class IB antiarrhythmic** activity at therapeutic levels and may raise **arrhythmia risk in structural or ischemic heart disease**; weigh benefits and risks in patients with heart disease.",
              "source": "FDA Drug Safety Communications on lamotrigine, April 2018 and March 2021"
            }
          ]
        },
        {
          "id": "s213-ltg-dose",
          "title": "Lamotrigine interactions and dosing",
          "blocks": [
            {
              "type": "defs",
              "title": "Interactions",
              "items": [
                [
                  "Valproate",
                  "**Doubles** lamotrigine levels (the most serious interaction); lamotrigine lowers valproate about **25%**."
                ],
                [
                  "Sertraline",
                  "Raises lamotrigine, less than valproate."
                ],
                [
                  "Enzyme inducers",
                  "**Carbamazepine, phenytoin, phenobarbital** lower lamotrigine **40% to 50%**."
                ],
                [
                  "Laboratory",
                  "No interference with lab tests."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Lamotrigine titration in the book (Table 21-37), mg a day",
              "head": [
                "Regimen",
                "Weeks 1–2",
                "Weeks 3–4",
                "Weeks 4–5"
              ],
              "wide": true,
              "rows": [
                [
                  "Lamotrigine alone",
                  "25",
                  "50",
                  "100 to 200 (maximum 200)"
                ],
                [
                  "With carbamazepine",
                  "50",
                  "100",
                  "200 to 400 (maximum 400)"
                ],
                [
                  "With valproate",
                  "**25 every other day**",
                  "25",
                  "50 to 100 (maximum 100)"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Dosing",
              "items": [
                [
                  "Target",
                  "No consistent extra benefit above **200 mg** a day in the bipolar trials; most take **100 to 200 mg**."
                ],
                [
                  "Timing",
                  "Twice daily in epilepsy; **once daily** is fine in bipolar disorder, morning or night depending on whether it activates or sedates."
                ],
                [
                  "Forms",
                  "Tablets 25, 100, 150, 200 mg; **orally disintegrating** (25, 50, 100, 200 mg); chewable dispersible 2, 5, 25 mg."
                ],
                [
                  "Renal impairment",
                  "Lower maintenance dose."
                ],
                [
                  "Stopping",
                  "Taper over **2 weeks**, unless rash (then 1 to 2 days)."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Label dose check: the full titration",
              "text": "The label's bipolar schedule runs to week 6 or 7. **Alone**: 25 mg (weeks 1–2), 50 mg (3–4), 100 mg (5), **200 mg** (6). **With valproate**: 25 mg every other day (1–2), 25 mg (3–4), 50 mg (5), **100 mg** (6). **With carbamazepine, phenytoin, phenobarbital or primidone** (no valproate): 50 mg (1–2), 100 mg in divided doses (3–4), 200 mg (5), 300 mg (6), up to **400 mg** (7). **Estrogen-containing contraceptives** lower lamotrigine by about half, and levels rise during pill-free weeks; adjust the dose. Restart titration after a break of more than **5 half-lives**.",
              "source": "Lamictal prescribing information"
            }
          ]
        }
      ]
    },
    {
      "title": "Carbamazepine and oxcarbazepine",
      "sections": [
        {
          "id": "s213-cbz",
          "title": "Carbamazepine: pharmacology and indications",
          "blocks": [
            {
              "type": "p",
              "text": "**Carbamazepine** (Tegretol) resembles **imipramine** structurally and was first synthesized as a potential antidepressant. It was approved for **trigeminal neuralgia (1968)** and **temporal lobe epilepsy (1974)**. Most guidelines treat it as a **second-line mood stabilizer** for both phases of bipolar disorder. The extended-release capsule **Equetro** is approved for **acute mania**."
            },
            {
              "type": "update",
              "title": "Correction: Equetro's approval year",
              "text": "The book dates Equetro's approval for acute mania to 2002. The FDA approved it on **December 10, 2004**, for **acute manic and mixed episodes of bipolar I disorder**.",
              "source": "Drugs.com approval history for Equetro"
            },
            {
              "type": "defs",
              "title": "Pharmacology",
              "items": [
                [
                  "Absorption",
                  "**Slow and unpredictable**; food helps. Peak **2 to 8 hours**; steady state in 2 to 4 days at first. **70% to 80%** protein bound."
                ],
                [
                  "Autoinduction",
                  "Initial half-life **18 to 54 hours** (mean 26) falls to about **12 hours** as carbamazepine induces **CYP3A4**, including its own metabolism; induction peaks at **3 to 5 weeks**, so doses often need raising."
                ],
                [
                  "Extended-release forms",
                  "**Tegretol XR** needs food for normal GI transit; **Carbatrol/Equetro** beads suit bedtime dosing."
                ],
                [
                  "Metabolite",
                  "The **10,11-epoxide** is an active anticonvulsant; its role in mood is unknown; the epoxide-to-parent ratio rises with long-term use."
                ],
                [
                  "Mechanism",
                  "Binds **inactivated sodium channels** and prolongs inactivation, reducing calcium channel activation; also reduces NMDA currents, antagonizes adenosine A1 receptors and potentiates catecholamines."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Indications",
              "items": [
                [
                  "Acute mania",
                  "Effects within days; **50% to 70%** respond within **2 to 3 weeks**. May suit **lithium nonresponders**: **dysphoric mania, rapid cycling**, negative family history. Often combined with lithium, valproate, thyroid hormone or antipsychotics."
                ],
                [
                  "Prophylaxis",
                  "Prevents relapse, especially in **bipolar II**, **schizoaffective disorder** and **dysphoric mania**."
                ],
                [
                  "Depression",
                  "A subgroup of treatment-refractory patients responds, especially with severe episodic depression; an option even after ECT failure."
                ],
                [
                  "Other",
                  "**Alcohol withdrawal** (benzodiazepines work better); paroxysmal PTSD symptoms; **impulsive aggression** in all ages; nonacute agitation and aggression in schizophrenia."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-cbz-ae",
          "title": "Carbamazepine adverse effects",
          "blocks": [
            {
              "type": "p",
              "text": "Generally well tolerated: mild **GI** effects (nausea, vomiting, gastric upset, constipation, diarrhea, anorexia) and **CNS** effects (ataxia, drowsiness), reduced by slow titration. Unlike lithium and valproate it **does not cause weight gain**. Most side effects appear above **9 µg/mL**, and tolerance may improve as autoinduction lowers levels."
            },
            {
              "type": "table",
              "caption": "Carbamazepine adverse events (Table 21-38)",
              "head": [
                "Dose related",
                "Idiosyncratic"
              ],
              "rowHeads": false,
              "rows": [
                [
                  "Double or blurred vision",
                  "**Agranulocytosis**"
                ],
                [
                  "Vertigo",
                  "**Stevens–Johnson syndrome**"
                ],
                [
                  "GI disturbance",
                  "**Aplastic anemia**"
                ],
                [
                  "Impaired task performance",
                  "**Hepatic failure**"
                ],
                [
                  "Hematologic effects",
                  "Rash; pancreatitis"
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Blood dyscrasias",
                  "**Aplastic anemia and agranulocytosis** in about **1 in 125,000**, not dose related. Benign **leukopenia** in **1% to 2%** does not predict them. Warn about **fever, sore throat, rash, petechiae, bruising, bleeding**."
                ],
                [
                  "Hepatitis",
                  "Early hepatocellular (transaminases) or **cholestatic** (bilirubin, alkaline phosphatase) hepatitis. Stop if transaminases stay **above 3 times normal**; it can recur on rechallenge and be fatal."
                ],
                [
                  "Rash",
                  "Benign maculopapular rash in **10% to 15%** within **3 weeks**; serious forms include exfoliative dermatitis, erythema multiforme, **SJS and TEN**. Most clinicians stop for any rash. Rash risk equals valproate's in the first 2 months, then is much higher. Rechallenge is possible if it is the only effective drug; **prednisone 40 mg** may suppress rash but not other allergic features."
                ],
                [
                  "Sodium",
                  "Activates vasopressin receptors: **hyponatremia** and SIADH-like water intoxication, mainly in older adults or at high doses, the **opposite of lithium's** diabetes insipidus (adding carbamazepine does not reverse lithium polyuria). Check electrolytes for confusion, weakness or headache. Occasionally used for non-lithium diabetes insipidus."
                ],
                [
                  "Heart",
                  "Slows cardiac conduction (less than TCAs); caution in heart disease."
                ],
                [
                  "Cautions",
                  "Glaucoma, prostatic hypertrophy, diabetes, alcohol use disorder."
                ],
                [
                  "Hypersensitivity",
                  "Rare fever, rash, **eosinophilia** and possibly fatal **myocarditis**."
                ],
                [
                  "Pregnancy",
                  "**Cleft palate, fingernail hypoplasia, microcephaly, spina bifida** (about 0.5%; other severe outcomes about 8%). Avoid unless necessary; **folic acid 1 to 4 mg** daily for all women who could conceive. Enters breast milk."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2007",
              "title": "HLA testing before carbamazepine",
              "text": "Carbamazepine carries a **boxed warning**: patients of **Asian ancestry** (including Han Chinese, Thai, Malaysian, Filipino and South Asian populations) should be tested for **HLA-B*15:02** before starting, because carriers have about a **5%** risk of **SJS/TEN** in the first months; carriers should generally not receive carbamazepine (and caution applies to phenytoin and oxcarbazepine). **HLA-A*31:01**, found across ancestries, raises the risk of SJS/TEN, DRESS and milder rashes; the 2017 **CPIC** guideline advises avoiding carbamazepine in carriers when alternatives exist.",
              "source": "FDA carbamazepine labeling change, December 2007; Phillips EJ et al., CPIC guideline for HLA genotype and carbamazepine and oxcarbazepine, Clinical Pharmacology & Therapeutics, 2018"
            }
          ]
        },
        {
          "id": "s213-cbz-int",
          "title": "Carbamazepine interactions",
          "blocks": [
            {
              "type": "p",
              "text": "Carbamazepine is a strong **CYP3A4 inducer**, so it **lowers** many drugs: watch for loss of effect. It lowers **hormonal contraceptives** (breakthrough bleeding, unreliable protection: use higher-estrogen forms or other methods). Never with **MAOIs** (stop them 2 weeks before). **Grapefruit juice** raises carbamazepine. With **valproate**, lower carbamazepine (valproate displaces it and raises the epoxide) and raise valproate."
            },
            {
              "type": "table",
              "caption": "Carbamazepine interactions (Table 21-39, condensed)",
              "head": [
                "Direction",
                "Drugs"
              ],
              "wide": true,
              "rows": [
                [
                  "Carbamazepine **lowers**",
                  "Acetaminophen, **alprazolam, clonazepam**, **TCAs** (amitriptyline, clomipramine, desipramine, doxepin, imipramine), **bupropion**, **clozapine, haloperidol, fluphenazine**, **hormonal contraceptives**, **lamotrigine**, **valproate**, **methadone, fentanyl**, **warfarin**, dicumarol, cyclosporine, doxycycline, ethosuximide, felbamate, methylprednisolone, nimodipine, pancuronium, phenytoin, primidone, theophylline"
                ],
                [
                  "Carbamazepine **raises**",
                  "Clomipramine, phenytoin, primidone"
                ],
                [
                  "**Raise** carbamazepine",
                  "**Erythromycin, clarithromycin** and other macrolides, **fluoxetine, fluvoxamine**, **nefazodone**, cimetidine, **diltiazem, verapamil**, isoniazid, itraconazole, ketoconazole, danazol, gemfibrozil, allopurinol, loratadine, lamotrigine, nicotinamide, propoxyphene, valproate (epoxide), viloxazine"
                ],
                [
                  "**Lower** carbamazepine",
                  "Carbamazepine itself (**autoinduction**), phenobarbital, **phenytoin**, primidone, rifampin, theophylline, felbamate, cisplatin, doxorubicin, valproate"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Laboratory effects",
              "text": "Lowers T4 and T3 (without TSH changes of note), raises total cholesterol (mainly HDL), may interfere with the **dexamethasone suppression test**, and can give **false-positive pregnancy tests**."
            }
          ]
        },
        {
          "id": "s213-cbz-dose",
          "title": "Carbamazepine dosing and monitoring",
          "blocks": [
            {
              "type": "steps",
              "title": "Carbamazepine in bipolar illness (Table 21-40, condensed)",
              "items": [
                [
                  "Start",
                  "**200 mg at bedtime** in depression or euthymia; **600 to 800 mg a day** in divided doses for manic inpatients. Extended release can be given entirely at bedtime."
                ],
                [
                  "Titrate",
                  "Slowly to response or side effects; target for mania about **1,200 mg a day**."
                ],
                [
                  "Expect induction",
                  "CYP3A4 and autoinduction at **2 to 3 weeks**: higher doses may be needed."
                ],
                [
                  "Warn",
                  "Benign rash in **5% to 10%** (stop for any rash); benign WBC falls; rare agranulocytosis and aplastic anemia (fever, sore throat, petechiae, bleeding gums → CBC now)."
                ],
                [
                  "Contraception and pregnancy",
                  "Use adequate contraception, including higher-estrogen forms; **avoid in pregnancy**."
                ],
                [
                  "Combine",
                  "Some respond only to carbamazepine; combinations are often needed to keep remission and avoid tolerance."
                ],
                [
                  "Watch inhibitors",
                  "**Verapamil, isradipine**, **macrolides** and **valproate** raise levels toward toxicity."
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Forms",
                  "Immediate release needs **3 or 4 doses** a day; extended release once or twice daily: **Carbatrol/Equetro** capsules 100, 200, 300 mg (do not crush; can sprinkle on food; faster with a high-fat meal); **Tegretol XR** tablets 100, 200, 300 mg."
                ],
                [
                  "Workup",
                  "**CBC with platelets, liver tests, electrolytes**, and an **ECG** if over 40 or with heart disease. EEG not required. Hematologic, hepatic and cardiac disease are relative contraindications."
                ],
                [
                  "Liver disease",
                  "Use **one-third to one-half** of the usual dose and raise slowly."
                ],
                [
                  "Levels",
                  "No antimanic level is established; reach the anticonvulsant range **4 to 12 µg/mL** before calling it a failure."
                ],
                [
                  "Blood monitoring",
                  "Book options: CBC every 2 weeks for 2 months then quarterly, or at 3, 6, 9 and 12 months; the FDA label leaves frequency to the physician. **Teaching patients the warning signs** is probably more useful than frequent counts."
                ],
                [
                  "Lithium and WBC",
                  "Adding **lithium** can reverse carbamazepine's benign WBC fall (it enhances colony-stimulating factor)."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Laboratory monitoring of carbamazepine (Table 21-41)",
              "head": [
                "Test",
                "Baseline",
                "Weekly to stability",
                "Monthly for 6 months",
                "Every 6 to 12 months"
              ],
              "wide": true,
              "rows": [
                [
                  "CBC",
                  "✓",
                  "✓",
                  "✓",
                  "✓"
                ],
                [
                  "Bilirubin",
                  "✓",
                  "",
                  "✓",
                  "✓"
                ],
                [
                  "ALT and AST",
                  "✓",
                  "",
                  "✓",
                  "✓"
                ],
                [
                  "Alkaline phosphatase",
                  "✓",
                  "",
                  "✓",
                  "✓"
                ],
                [
                  "Carbamazepine level",
                  "✓",
                  "✓",
                  "",
                  "✓"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "When to stop and call hematology",
              "text": "**WBC under 3,000/mm³**, **neutrophils under 1,500/mm³**, **platelets under 100,000/mm³**, erythrocytes under 4.0 × 10⁶/mm³, hematocrit under 32%, hemoglobin under 11 g/100 mL, reticulocytes under 0.3%, or serum iron under 150 mg/100 mL (as printed in the book)."
            }
          ]
        },
        {
          "id": "s213-oxc",
          "title": "Oxcarbazepine",
          "blocks": [
            {
              "type": "p",
              "text": "**Oxcarbazepine** (Trileptal), a carbamazepine analog, was used for pediatric epilepsy in Europe from 1990 and marketed in the United States in **2000**. Despite its use in bipolar disorder, **antimanic efficacy has not been confirmed** in large placebo-controlled trials."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Kinetics",
                  "Rapid absorption unaffected by food; peak about **45 minutes**; parent half-life **2 hours**, stable over time; the active **monohydroxy derivative** has a half-life of **9 hours** and carries most of the effect."
                ],
                [
                  "Side effects",
                  "Sedation and nausea most often; also cognitive impairment, ataxia, diplopia, nystagmus, dizziness, tremor."
                ],
                [
                  "Advantages",
                  "**No added risk of blood dyscrasias** (no hematologic monitoring); less benign rash than carbamazepine and very rare severe rash. But **25% to 30%** of patients with a carbamazepine rash also react to oxcarbazepine."
                ],
                [
                  "Hyponatremia",
                  "**More common than with carbamazepine** (3% to 5%); often silent: check **sodium early**; severe cases cause confusion and seizures."
                ],
                [
                  "Interactions",
                  "Phenobarbital and alcohol (inducers) lower it. Oxcarbazepine **induces CYP3A4/5** and **inhibits CYP2C19**; it lowers **oral contraceptive** levels."
                ],
                [
                  "Dosing",
                  "Not established in bipolar disorder. Tablets 150, 300, 600 mg; range **150 to 2,400 mg** a day in two doses; mania trials used **900 to 1,200 mg**, starting **150 or 300 mg at night**."
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Other anticonvulsants",
      "sections": [
        {
          "id": "s213-ac",
          "title": "The other anticonvulsants as a group",
          "blocks": [
            {
              "type": "p",
              "text": "Developed for epilepsy, these drugs are also used for neuropathic pain, spasticity and a range of psychiatric problems, through **more GABA** or **less glutamate** activity. The book covers **gabapentin, pregabalin, topiramate, tiagabine, levetiracetam, zonisamide** and the old drug **phenytoin**. None is FDA approved for bipolar disorder."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "The 2008 suicidality warning",
              "text": "In **2008** the FDA warned that antiepileptic drugs may increase **suicidal thoughts or behavior** compared with placebo. The relative risk was higher in **epilepsy** than in psychiatric disorders, and some data suggest anticonvulsants may **protect** against suicidal thinking in bipolar disorder. Given the high baseline suicide risk in bipolar disorder, monitor all patients."
            },
            {
              "type": "table",
              "caption": "Other anticonvulsants at a glance (from the book)",
              "head": [
                "Drug",
                "Main psychiatric uses",
                "Distinctive risks"
              ],
              "wide": true,
              "rows": [
                [
                  "Gabapentin",
                  "Insomnia, social anxiety, panic, alcohol craving; adjunct in bipolar",
                  "Somnolence, ataxia; renal excretion"
                ],
                [
                  "Pregabalin",
                  "GAD (300 mg best); panic and social anxiety (limited)",
                  "Dizziness, edema, sedation"
                ],
                [
                  "Topiramate",
                  "Weight loss (including drug-induced), bulimia, binge eating, alcohol use, PTSD, self-injury",
                  "Paresthesias, **cognitive slowing**, acidosis, **kidney stones**"
                ],
                [
                  "Tiagabine",
                  "Rarely GAD or insomnia",
                  "**Seizures**, SUDEP, status epilepticus"
                ],
                [
                  "Levetiracetam",
                  "Off-label mania, adjunct in depression, anxiety",
                  "**Behavioral disturbance**, agitation, hallucinations"
                ],
                [
                  "Zonisamide",
                  "Obesity and binge eating; possibly mania",
                  "Sulfonamide rash and dyscrasias; **kidney stones** (4%); weight loss"
                ],
                [
                  "Phenytoin",
                  "Acute mania",
                  "**Nonlinear kinetics**, gingival hyperplasia, blood dyscrasias, nystagmus, ataxia"
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-gaba",
          "title": "Gabapentin and pregabalin",
          "blocks": [
            {
              "type": "defs",
              "title": "Gabapentin (Neurontin)",
              "items": [
                [
                  "Pharmacology",
                  "Circulates unbound, **not metabolized**, excreted **unchanged by the kidneys** (removed by hemodialysis); lower clearance in older adults. Increases cerebral GABA, may inhibit glutamate synthesis, and modulates calcium channels to reduce monoamine release."
                ],
                [
                  "Neurologic uses",
                  "Generalized and partial seizures; **postherpetic neuralgia** and other neuropathic pain; fibromyalgia; some chronic pruritus."
                ],
                [
                  "Psychiatric uses",
                  "**Hypnotic**; **social anxiety and panic**; may reduce **alcohol craving**; adjunct with mood stabilizers. Not a primary treatment for mania or resistant mood disorders."
                ],
                [
                  "Adverse effects",
                  "Mild: **daytime somnolence, ataxia, fatigue**. Overdoses over 45 g caused diplopia, slurred speech, lethargy and diarrhea; all recovered. Avoid in pregnancy and breastfeeding (book)."
                ],
                [
                  "Interactions",
                  "**Antacids** cut bioavailability up to 20%; otherwise few. False-positive drug screens reported (amphetamines, barbiturates, benzodiazepines, marijuana)."
                ],
                [
                  "Dosing",
                  "**300 mg day 1, 600 mg day 2, 900 mg day 3**, then up to 1,800 mg in divided doses; usual **1,200 to 2,400 mg**; sometimes 200 to 300 mg in older adults; up to 4,800 mg. Sedation limits the dose. Taper when stopping."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Pregabalin (Lyrica)",
              "items": [
                [
                  "Pharmacology",
                  "Like gabapentin, with **six times the binding affinity** and a longer half-life (about **6.5 hours**); linear kinetics; peak 1 hour; steady state in 24 to 48 hours; **renal** excretion unchanged. Reduce the dose when creatinine clearance is **under 60 mL/min**; extra doses after hemodialysis."
                ],
                [
                  "Indications",
                  "**Diabetic neuropathy**, **postherpetic neuralgia**, adjunct for partial seizures, **fibromyalgia**. Benefit in **GAD** (300 mg beat 150 and 450 mg); weak evidence in panic and social anxiety."
                ],
                [
                  "Adverse effects",
                  "**Dizziness, somnolence**, blurred vision, **peripheral edema**, memory problems, tremor. Potentiates alcohol, antihistamines and benzodiazepines."
                ],
                [
                  "Dosing",
                  "Postherpetic neuralgia **50 to 100 mg three times daily**; diabetic neuropathy **100 to 200 mg three times daily**; fibromyalgia **450 to 600 mg** a day. Capsules 25 to 300 mg."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2019",
              "title": "Gabapentinoids: breathing problems and misuse",
              "text": "In **December 2019** the FDA warned that **gabapentin and pregabalin** can cause serious **respiratory depression** in patients with risk factors: **opioids** or other CNS depressants, **COPD** and other respiratory disease, and **older age**. Start low and watch for confusion, sleepiness and slowed breathing. Pregabalin is **Schedule V** in the United States, and both drugs are misused, especially by people with opioid use disorder; several states also control gabapentin.",
              "source": "FDA Drug Safety Communication on gabapentin and pregabalin, December 2019; Lyrica prescribing information"
            }
          ]
        },
        {
          "id": "s213-topi",
          "title": "Topiramate, zonisamide and levetiracetam",
          "blocks": [
            {
              "type": "defs",
              "title": "Topiramate (Topamax)",
              "items": [
                [
                  "Pharmacology",
                  "GABAergic; bioavailability **80%**; **15%** protein bound; about **70% renal** (halve the dose in renal insufficiency); half-life about **24 hours**."
                ],
                [
                  "Uses",
                  "Epilepsy; **migraine prevention**; off-label **weight loss** (including psychotropic weight gain), **bulimia, binge eating**, **alcohol use disorder**, smoking cessation, PTSD, essential tremor, self-injury in borderline personality disorder. **Not effective** for acute mania or psychosis."
                ],
                [
                  "Adverse effects",
                  "**Paresthesias, weight loss**, somnolence, anorexia, dizziness, **memory problems**, taste changes. **Low bicarbonate** (metabolic acidosis), arrhythmias, **kidney stones** in about 1.5%: encourage fluids."
                ],
                [
                  "Interactions",
                  "Raises **phenytoin 25%** and valproate 11%; **carbamazepine and phenytoin lower topiramate 40% to 48%**. Avoid other **carbonic anhydrase inhibitors** (acetazolamide): stones, **oligohidrosis and hyperthermia**."
                ],
                [
                  "Dosing",
                  "Epilepsy: titrate over **8 weeks** to 200 mg twice daily. Off-label: **25 mg at bedtime**, up 25 mg weekly; weight loss usually **75 to 150 mg** at bedtime; no gain above 400 mg."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2023–2024",
              "title": "Topiramate in pregnancy",
              "text": "In **September 2023** the EMA introduced a **pregnancy prevention programme** for topiramate: it must not be used for **migraine prevention or weight control in pregnancy**, should not be used for epilepsy in pregnancy unless nothing else is suitable, and women who could conceive need effective contraception and an annual review. Concerns are **major malformations** (including **oral clefts**), possible **neurodevelopmental** effects, and being **small for gestational age**. The 2024 AAN/AES/SMFM guideline also advises avoiding topiramate when feasible in people who could become pregnant.",
              "source": "EMA PRAC recommendation on topiramate, September 2023; Pack AM et al., AAN, AES and SMFM practice guideline on in utero antiseizure medication exposure, Neurology, 2024"
            },
            {
              "type": "defs",
              "title": "Zonisamide (Zonegran)",
              "items": [
                [
                  "Pharmacology",
                  "Blocks sodium (and possibly calcium) channels, weakly boosts dopamine and serotonin, inhibits **carbonic anhydrase**. Metabolized by **CYP3A** (inducers lower it); does not affect other drugs. Half-life **60 hours**: once daily at night."
                ],
                [
                  "Uses",
                  "Generalized and refractory partial seizures; controlled evidence for **obesity and binge eating**; uncontrolled for mania."
                ],
                [
                  "Adverse effects",
                  "A **sulfonamide**: rare fatal rash and blood dyscrasias. **Kidney stones in about 4%**. Drowsiness, cognitive problems, insomnia, ataxia, nystagmus, paresthesia, GI upset, **weight loss**. Raises alkaline phosphatase, BUN and creatinine."
                ],
                [
                  "Dosing",
                  "100 and 200 mg capsules; epilepsy **100 to 400 mg** a day (more side effects above 300 mg). Avoid with other carbonic anhydrase inhibitors."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Levetiracetam (Keppra)",
              "items": [
                [
                  "Pharmacology",
                  "Developed as a nootropic; indirectly enhances GABA inhibition. Rapid, complete absorption (peak 1 hour; food slows it); not protein bound; **no CYP metabolism** (hydrolysis); **renal** clearance (reduce in renal impairment)."
                ],
                [
                  "Uses",
                  "Partial-onset, myoclonic and generalized epilepsy; off-label mania, adjunct in depression, anxiety."
                ],
                [
                  "Adverse effects",
                  "Drowsiness, dizziness, ataxia, diplopia, memory problems, apathy, paresthesias; **behavioral disturbances, agitation and hallucinations**; suicidal patients may become agitated."
                ],
                [
                  "Dosing",
                  "Tablets 250 to 1,000 mg, ER 500 mg, oral and IV solutions; usual adult epilepsy dose **1,000 mg** a day. Few interactions; none with lithium."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-tiag",
          "title": "Tiagabine and phenytoin",
          "blocks": [
            {
              "type": "defs",
              "title": "Tiagabine (Gabitril)",
              "items": [
                [
                  "Pharmacology",
                  "**Blocks GABA reuptake** into neurons and glia, boosting GABAA and GABAB inhibition. Bioavailability 90%; **96%** protein bound; **CYP3A** metabolism to inactive products."
                ],
                [
                  "Psychiatric use",
                  "Rare: GAD and insomnia; early reports in mania, but safety concerns and lack of data limit use."
                ],
                [
                  "Adverse effects",
                  "**Withdrawal seizures**, impaired concentration and speech, somnolence, fatigue, **status epilepticus**, **SUDEP**, severe rash. Overdose: seizures, coma, confusion, myoclonus, respiratory depression."
                ],
                [
                  "Dosing",
                  "Never load rapidly. With enzyme inducers: **4 mg a day**, up 4 mg weekly in month 1, then 4 to 8 mg weekly to 24 to 32 mg by week 6 (adults up to 56 mg)."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Correction and warning: tiagabine",
              "text": "Tiagabine is approved as **adjunctive treatment of partial seizures** (ages 12 and older), not generalized epilepsy as the book states. In **2005** the FDA warned that tiagabine has caused **new-onset seizures and status epilepticus in people without epilepsy**, mostly with off-label psychiatric use, so it is not recommended for these uses.",
              "source": "Gabitril prescribing information; FDA and Cephalon warning, February 2005"
            },
            {
              "type": "defs",
              "title": "Phenytoin (Dilantin)",
              "items": [
                [
                  "Uses",
                  "Generalized tonic–clonic and complex partial seizures and neurosurgical seizures; studies show antimanic efficacy comparable to other anticonvulsants."
                ],
                [
                  "Kinetics",
                  "Half-life about **22 hours** (7 to 42); steady state after **7 to 10 days**. **Nonlinear (saturable) kinetics**: small dose increases can cause **large level rises**. Keep doses exact and monitor levels (**10 to 20 µg/mL**)."
                ],
                [
                  "Adverse effects",
                  "Dose related: **nystagmus, ataxia, slurred speech**, incoordination, confusion; dizziness, insomnia, twitching, headache; rare dyskinesias. Serious: **thrombocytopenia, leukopenia, agranulocytosis, pancytopenia**; **lymphadenopathy** (including pseudolymphoma and lymphoma); **gingival hyperplasia**; hyperglycemia."
                ],
                [
                  "Pregnancy",
                  "Malformations and a **neonatal bleeding disorder** from low vitamin K–dependent clotting factors."
                ],
                [
                  "Interactions",
                  "**Raise** phenytoin: acute alcohol, amiodarone, chlordiazepoxide, **cimetidine**, diazepam, **disulfiram**, estrogens, **fluoxetine**, isoniazid, methylphenidate, phenothiazines, salicylates, trazodone. **Lower**: carbamazepine, chronic alcohol use, reserpine."
                ],
                [
                  "Dosing",
                  "100 mg extended capsules **three times daily**, then once daily; lowers T4, raises glucose, alkaline phosphatase and GGT."
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Calcium channel blockers and choosing a mood stabilizer",
      "sections": [
        {
          "id": "s213-ccb",
          "title": "Calcium channel blockers",
          "blocks": [
            {
              "type": "p",
              "text": "Intracellular calcium regulates serotonin and dopamine signaling. **Calcium channel blockers** are used as **antimanic** agents for patients who cannot take or do not respond to lithium, carbamazepine or valproate, and for **ultradian** cycling (mood cycles shorter than 24 hours). Genome-wide studies implicating **L-type calcium channel** genes in bipolar disorder, schizophrenia, MDD, ADHD and autism have renewed interest."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Pharmacology",
                  "Nearly complete absorption with large **first-pass** metabolism and wide variation in levels; most peak within **30 minutes** (amlodipine about 6 hours). They block calcium entry through **L-type voltage-dependent channels**; the mood mechanism is unknown."
                ],
                [
                  "Bipolar disorder",
                  "**Nimodipine and verapamil** work as maintenance therapy; **lithium responders tend to respond to verapamil**. Nimodipine may help **ultradian cycling** and recurrent brief depression. Start a short-acting drug (nimodipine, isradipine) and raise every 4 to 5 days; switch to long-acting **amlodipine** for maintenance. Failing verapamil does not rule out the others. Verapamil may prevent **antidepressant-induced mania**. Can be combined with carbamazepine."
                ],
                [
                  "Depression",
                  "**Not effective**, and may block antidepressant response."
                ],
                [
                  "Other uses",
                  "Nifedipine for **MAOI hypertensive crises** (no longer recommended sublingually; see 21.2); isradipine may blunt methamphetamine's effect; possible benefit in Tourette, Huntington, panic, intermittent explosive disorder and tardive dyskinesia. Medically: angina, hypertension, migraine, Raynaud, esophageal spasm, premature labor; verapamil for supraventricular arrhythmias."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Calcium channel blockers in psychiatry (Table 21-42)",
              "head": [
                "",
                "Verapamil",
                "Nimodipine",
                "Isradipine",
                "Amlodipine"
              ],
              "wide": true,
              "rows": [
                [
                  "Half-life",
                  "Short (5 to 12 h)",
                  "Short (1 to 2 h)",
                  "Short (1 to 2 h)",
                  "**Long (30 to 50 h)**"
                ],
                [
                  "Starting dose",
                  "30 mg three times daily",
                  "30 mg three times daily",
                  "2.5 mg twice daily",
                  "5 mg at bedtime"
                ],
                [
                  "Peak daily dose",
                  "480 mg",
                  "240 to 450 mg",
                  "20 mg",
                  "10 to 15 mg"
                ],
                [
                  "Antimanic",
                  "++",
                  "++",
                  "++",
                  "Case reports only"
                ],
                [
                  "Antidepressant",
                  "±",
                  "+",
                  "+",
                  "Case reports only"
                ],
                [
                  "Antiultradian",
                  "±",
                  "**++**",
                  "(++)",
                  "Case reports only"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Safety and dosing",
              "items": [
                [
                  "Adverse effects",
                  "From vasodilation: **dizziness, headache, tachycardia, nausea, dysesthesias, peripheral edema**. **Verapamil and diltiazem** cause **hypotension, bradycardia and AV block**. Also constipation, fatigue, rash, cough, wheeze. Diltiazem: hyperactivity, akathisia, parkinsonism; verapamil: delirium, **hyperprolactinemia and galactorrhea**; nimodipine: chest tightness, flushing; nifedipine: depression. Avoid in pregnancy and breastfeeding."
                ],
                [
                  "Interactions",
                  "**Verapamil raises carbamazepine**, digoxin and other CYP3A4 substrates; verapamil and diltiazem (not nifedipine) can precipitate **carbamazepine neurotoxicity**. Do not combine with β-blockers, antihypertensives or antiarrhythmics without medical advice. Cimetidine raises nifedipine and diltiazem. **Lithium plus a calcium channel blocker** can cause **neurotoxicity, including deaths**."
                ],
                [
                  "Verapamil dosing",
                  "Start **40 mg three times daily**; raise every 4 to 5 days to **80 to 120 mg three times daily**. Monitor BP, pulse and ECG (over 40 or with heart disease)."
                ],
                [
                  "Other doses",
                  "Nifedipine 10 mg three or four times daily, maximum 120 mg; **nimodipine 60 mg every 4 hours** for ultrarapid cycling (briefly up to 360 mg); isradipine maximum 20 mg; amlodipine 5 mg at night, maximum 10 to 15 mg; diltiazem 30 mg four times daily, maximum 360 mg. Older adults are more sensitive."
                ]
              ]
            }
          ]
        },
        {
          "id": "s213-choose",
          "title": "Putting it together: comparing the mood stabilizers",
          "blocks": [
            {
              "type": "table",
              "caption": "Lithium, valproate, lamotrigine and carbamazepine compared (compiled from section 21.3)",
              "head": [
                "",
                "Lithium",
                "Valproate",
                "Lamotrigine",
                "Carbamazepine"
              ],
              "wide": true,
              "rows": [
                [
                  "Best evidence",
                  "Classic mania; **maintenance**; **suicide prevention**",
                  "Acute mania (fast, loading); **mixed, irritable, rapid cycling**",
                  "**Maintenance, depressive pole**; rapid cycling",
                  "Mania (Equetro); **lithium nonresponders**, bipolar II"
                ],
                [
                  "Target level",
                  "Mania 1.0 to 1.2; maintenance 0.4 to 0.8 mEq/L (book)",
                  "**50 to 125 µg/mL**",
                  "None",
                  "4 to 12 µg/mL (anticonvulsant)"
                ],
                [
                  "Baseline tests",
                  "Creatinine, electrolytes, **thyroid**, CBC, **ECG**, pregnancy",
                  "**Liver**, CBC with **platelets**, pregnancy",
                  "None required",
                  "**CBC**, liver, electrolytes, ECG if over 40"
                ],
                [
                  "Signature risks",
                  "**Toxicity**, polyuria, **hypothyroidism**, renal damage, tremor",
                  "**Liver failure, pancreatitis**, weight gain, hair loss, PCOS, **thrombocytopenia**",
                  "**SJS/TEN rash**",
                  "**Agranulocytosis, aplastic anemia**, SJS/TEN, **hyponatremia**, enzyme induction"
                ],
                [
                  "Pregnancy",
                  "**Ebstein anomaly** (1 in 1,000)",
                  "**Neural tube defects**, lower IQ, autism: the worst",
                  "Not covered in the book (lower risk in later guidance; see below)",
                  "Spina bifida, cleft palate, nail hypoplasia"
                ],
                [
                  "Weight gain",
                  "Yes",
                  "**Yes**",
                  "No",
                  "No"
                ],
                [
                  "Key interactions",
                  "**NSAIDs, thiazides, ACE inhibitors** raise levels",
                  "Raises **lamotrigine** (rash)",
                  "Halve with valproate; double with inducers",
                  "**Lowers many drugs**, including contraceptives"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Classic exam pairs",
              "text": "**Lithium**: Ebstein anomaly, nephrogenic diabetes insipidus, hypothyroidism, sick sinus syndrome, NSAID and thiazide toxicity, charcoal useless. **Valproate**: neural tube defects, hepatotoxicity in children under 2 or 3, pancreatitis, hyperammonemia, PCOS. **Lamotrigine**: rash, slow titration, valproate doubles it. **Carbamazepine**: agranulocytosis, autoinduction, SIADH, HLA-B*15:02 in Asians. **Oxcarbazepine**: more hyponatremia, no dyscrasias."
            },
            {
              "type": "update",
              "year": "2024",
              "title": "Choosing for people who could become pregnant",
              "text": "The **2024 AAN/AES/SMFM** guideline favors **lamotrigine, levetiracetam and oxcarbazepine** to minimize major malformations, advises **avoiding valproate** (malformations, neural tube defects, lower IQ, autism) and **topiramate** when feasible, and recommends **folic acid 0.4 mg** daily before conception and during pregnancy for everyone of childbearing potential on antiseizure drugs (the book suggests 1 to 4 mg). The guideline is written for epilepsy, but its drug-risk findings apply to mood stabilizer choices.",
              "source": "Pack AM et al., AAN, AES and SMFM practice guideline on in utero antiseizure medication exposure, Neurology, 2024"
            }
          ]
        }
      ]
    }
  ]
});
