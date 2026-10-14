/* Chapter 21.0 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., section 21.0. */
KS.add("ch21-0", "guide", {
  "intro": "Section 21.0 covers the general principles of psychopharmacology that apply to every drug class: how drugs are classified and chosen, pharmacodynamics and pharmacokinetics, side effects and their time course, the antidepressant suicidality debate, medication-induced movement disorders from parkinsonism to tardive dyskinesia and neuroleptic malignant syndrome, overdose, patient factors, consent, dosing, duration and monitoring, outcomes and treatment failure, withdrawal, drug combinations, special populations, regulation, off-label use and placebos.",
  "objectives": [
    "Use pharmacodynamic and pharmacokinetic concepts (agonists, partial and inverse agonists, potency versus efficacy, therapeutic index) to explain drug effects and interactions.",
    "Anticipate side effects by cause and time course, and know the serious ones that change prescribing.",
    "Recognize and treat parkinsonism, acute dystonia, akathisia, tardive dyskinesia, neuroleptic malignant syndrome and other drug-induced movement and hyperthermic syndromes.",
    "Choose, dose and monitor a drug using patient factors, consent, adequate trials, laboratory tests and blood levels.",
    "Work through treatment failure, define response and remission, and prevent and recognize withdrawal.",
    "Prescribe safely for children, pregnant and nursing women, the elderly, the medically ill and patients who use substances, and use combinations and off-label drugs appropriately."
  ],
  "parts": [
    {
      "title": "Foundations of drug treatment",
      "sections": [
        {
          "id": "s210-intro",
          "title": "Naming and classifying psychotropic drugs",
          "blocks": [
            {
              "type": "p",
              "text": "**Psychotropic drugs** (psychiatric drugs) are usually named by their **primary clinical use**: antidepressants, antipsychotics, mood stabilizers, anxiolytics, hypnotics, cognitive enhancers and stimulants. The weakness of this scheme is that many drugs have **several indications**: SSRIs treat both depression and anxiety, and SDAs are both antipsychotics and mood stabilizers. Many drugs made for medical and neurologic conditions are also routinely used in psychiatry."
            },
            {
              "type": "defs",
              "title": "Other ways drugs are grouped",
              "items": [
                [
                  "Structure",
                  "For example, **tricyclic**."
                ],
                [
                  "Mechanism",
                  "For example, **monoamine oxidase inhibitor (MAOI)**."
                ],
                [
                  "History",
                  "**First-generation**, traditional."
                ],
                [
                  "Uniqueness",
                  "**Atypical**."
                ],
                [
                  "Indication",
                  "**Antidepressant**, antipsychotic, and so on. Chapter 21 uses this scheme."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Terminology has shifted over time: the first antipsychotics were **tranquilizers** (later **major** tranquilizers, with anxiolytics as **minor** tranquilizers); antidepressants went from **TCAs and MAOIs** to second- and third-generation agents; antipsychotics became **typical (conventional, first-generation)** or **atypical (second-generation)**. Most psychotropics are now generic; brand names in the book are US brands."
            }
          ]
        },
        {
          "id": "s210-select",
          "title": "Drug selection and drug factors",
          "blocks": [
            {
              "type": "p",
              "text": "All FDA-approved psychotropics are **similar in overall effectiveness** for their indicated disorder but differ in pharmacology and in efficacy and side effects for **individual patients**. No drug is universally effective and none is clearly superior for a major disorder, with one exception: **clozapine** for **treatment-refractory schizophrenia**. Some drugs fill a **niche** for a subgroup without being better overall. Choice is case by case, weighing the drug, the patient and the illness."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Pharmacokinetics",
                  "What the **body does to the drug**: absorption, distribution, metabolism and excretion; the time course of drug levels; **pharmacokinetic interactions** change the levels of another drug."
                ],
                [
                  "Pharmacodynamics",
                  "What the **drug does to the body**: receptor mechanisms, the **dose–response curve**, the **therapeutic index**, and tolerance, dependence and withdrawal; **pharmacodynamic interactions** change another drug's biologic effect."
                ],
                [
                  "Pharmacogenetics",
                  "How **genetic variation** shapes drug response and side effects, through metabolizing enzymes and CNS targets."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Drugs in the same class differ in **molecular structure**, transmitter interactions, pharmacokinetics, **active metabolites** and **protein binding**. With patient biology, these determine efficacy, tolerability, safety and the risk-to-benefit ratio."
            },
            {
              "type": "h",
              "text": "Mechanisms"
            },
            {
              "type": "p",
              "text": "Standard accounts focus on how drugs change synaptic **dopamine, serotonin, norepinephrine, histamine, GABA or acetylcholine** through receptor agonism or antagonism, reuptake inhibition, enhanced release or **enzyme inhibition**. Some act elsewhere: **lithium** directly inhibits **inositol-1-phosphatase**. Some links are tight: most antipsychotics block **D2 receptors**; benzodiazepines bind a complex containing **benzodiazepine and GABA receptors**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Mechanisms are an oversimplification",
              "text": "If changing transmitter levels were enough, every drug with the same synaptic effect would work equally well, and they do not. **Downstream actions** several steps from the receptor probably explain clinical improvement. Drugs that do not target monoamines also work: **ketamine** (glutamate) rapidly relieves depression as a slow infusion, and the antibiotic **minocycline** has antidepressant effects, pointing to **immune and inflammatory** mechanisms."
            },
            {
              "type": "table",
              "caption": "Glossary of receptor–drug interactions",
              "head": [
                "Interaction",
                "Definition",
                "Examples"
              ],
              "rows": [
                [
                  "**Agonist** (full agonist)",
                  "Binds a receptor and produces the **same effect as the natural transmitter**",
                  "Opioids (morphine, methadone, oxycodone, heroin, fentanyl); **benzodiazepines** at the GABA receptor complex"
                ],
                [
                  "**Antagonist**",
                  "Binds a receptor and **blocks or reduces** an agonist's action; **competitive** if it competes for the same site, **noncompetitive** otherwise",
                  "**Flumazenil** (competitive benzodiazepine antagonist); antipsychotics at **D2**; opioid antagonists **naltrexone** and **naloxone**"
                ],
                [
                  "**Partial agonist** (mixed agonist)",
                  "Even at full occupancy produces only a **partial response**; acts as an agonist when transmitter levels are low",
                  "**Buprenorphine**: opioid effects with a lower maximum than full agonists, easing withdrawal"
                ],
                [
                  "**Inverse agonist**",
                  "Binds the agonist's receptor but produces the **opposite effect**",
                  "**Ro15-4513** at the benzodiazepine site causes severe anxiety; cannabinoid inverse agonists **reduce appetite**"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Side effects",
      "sections": [
        {
          "id": "s210-se",
          "title": "Thinking about side effects",
          "blocks": [
            {
              "type": "p",
              "text": "Side effects are an **unavoidable risk**. No single source, not even the product information, lists every treatment-emergent event, but prescribers should know the **common** ones and those with **serious medical consequences**. Consider the **probability** of an effect, its impact on **quality of life**, its **time course** and its **cause**. When a medical disorder or a past reaction puts a patient at risk, choose a drug not typically linked to that effect."
            },
            {
              "type": "defs",
              "title": "Two kinds of cause",
              "items": [
                [
                  "An unrelated property",
                  "TCA dry mouth and sedation come from **muscarinic and histamine blockade**, not their antidepressant action, so a drug without these properties avoids them."
                ],
                [
                  "The therapeutic mechanism itself",
                  "Often unavoidable: **SSRI** serotonin reuptake blockade causes **nausea and sexual dysfunction**; **D2 blockade** causes EPS; benzodiazepine agonism causes **ataxia and daytime sleepiness**. Extra drugs are often added to make the main drug tolerable."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Time course of side effects",
              "head": [
                "Pattern",
                "Examples"
              ],
              "rows": [
                [
                  "Early and time-limited",
                  "**Nausea** with SSRIs or venlafaxine; **sedation** with mirtazapine"
                ],
                [
                  "Early and persistent",
                  "**Dry mouth** from noradrenergic reuptake inhibition or antimuscarinic action"
                ],
                [
                  "Late-appearing, sometimes the opposite of early effects",
                  "**Weight loss early, weight gain later** with SSRIs; early activation followed by **fatigue or apathy**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Why product information underestimates late effects",
              "text": "Most data on new drugs come from **short trials of about 8 weeks**, so **early-onset effects are overrepresented**. Clinicians must keep learning from later reports to know a drug's real profile."
            },
            {
              "type": "table",
              "caption": "Serious side effects to remember",
              "head": [
                "Effect",
                "Drug"
              ],
              "rowHeads": false,
              "rows": [
                [
                  "Agranulocytosis",
                  "**Clozapine**"
                ],
                [
                  "Stevens–Johnson syndrome",
                  "**Lamotrigine**"
                ],
                [
                  "Hepatic failure",
                  "**Nefazodone**"
                ],
                [
                  "Stroke",
                  "**Phenelzine**"
                ],
                [
                  "Heart block",
                  "**Thioridazine**"
                ]
              ]
            },
            {
              "type": "list",
              "items": [
                "Overall, the risk of **life-threatening** effects with psychotropics is **low**; drugs that carry it need closer monitoring and a clear benefit.",
                "A **black box warning** usually means a drug is used less than it otherwise would be.",
                "Long-term DRA complications such as **tardive dyskinesia** are well documented; emerging evidence links dopamine antagonists with a **small rise in breast cancer risk** related to cumulative dose.",
                "SSRIs and SDAs date only from the 1980s and 1990s, so long-term effects are less certain, though there is no evidence of effects beyond those seen early."
              ]
            }
          ]
        },
        {
          "id": "s210-suicide",
          "title": "Antidepressants and suicidality",
          "blocks": [
            {
              "type": "p",
              "text": "A pooled analysis of short-term (**4 to 16 weeks**) placebo-controlled trials of nine newer antidepressants in more than **4,400** children, adolescents and adults **up to age 24** found suicidal thinking or behavior in **4%** on drug versus **2%** on placebo in the first months. **No suicides** occurred. There was **no increase** in adults aged **25 to 65**, and antidepressants **reduced** suicidality **over 65**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "The 2004 black box warning",
              "text": "In **October 2004** the FDA required a **black box warning**, its most severe label warning, on **all antidepressants**. Prescriptions for adolescents **fell** and adult prescribing flattened."
            },
            {
              "type": "list",
              "title": "Evidence that cuts the other way",
              "items": [
                "A real-world study of **65,103** patients (2006): newer antidepressants lowered risk faster than older ones, and attempts were **more likely in the month before** starting treatment than in the 6 months after.",
                "US suicide rates began **falling from 1987**, the year before fluoxetine; areas with the most SSRI prescribing had the biggest declines. Each **10% rise in prescribing** went with a **3% fall** in suicide.",
                "In 10- to 19-year-olds, a **1% rise** in antidepressant use was associated with **0.23 fewer suicides** per 100,000 a year.",
                "After prescribing for depressed youth **fell**, **youth suicide rates rose** in several countries."
              ]
            },
            {
              "type": "update",
              "year": "2007",
              "title": "The warning extends to young adults",
              "text": "In **May 2007** the FDA expanded the boxed warning to include **young adults aged 18 to 24** during initial treatment. The revised labeling also states that antidepressants did **not** increase suicidality in adults over 24 and **reduced** it in adults **65 and older**, and that depression and other psychiatric disorders themselves increase the risk of suicide. As of October 2026 the boxed warning is still in place.",
              "source": "FDA, Antidepressant use in children, adolescents and adults (2007 labeling change); current antidepressant prescribing information"
            }
          ]
        },
        {
          "id": "s210-newer",
          "title": "Side effects of newer drugs",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Somnolence",
                  "Intended for insomnia, anxiety or agitation but unwanted by day. Warn about **driving and machinery** and document it. It can be carryover from a hypnotic or poor sleep quality; chronic **SSRIs** can cause fatigue and **yawning** despite enough sleep. Manage by adjusting **dose or timing**, switching, or adding a small dose of a **stimulant** or **modafinil**."
                ],
                [
                  "Gastrointestinal",
                  "Older drugs: **constipation and dry mouth** (antimuscarinic). Newer drugs: **serotonin-mediated** stomach pain, **nausea**, flatulence and **diarrhea**, since most serotonin is in the gut. Usually transient; **start low** or use **delayed-release** forms."
                ],
                [
                  "Movement disorders",
                  "Fewer with SDAs, but dose-related parkinsonism, akathisia and dystonia persist. **Risperidone** most resembles older drugs; **olanzapine** causes more EPS than trials suggested; **aripiprazole** can cause severe **akathisia**. SSRIs rarely cause akathisia to tardive dyskinesia."
                ],
                [
                  "Sexual dysfunction",
                  "Reduced libido, impaired ejaculation and erection, inhibited female orgasm. The original fluoxetine label gave **under 5%**; direct questioning finds **35% to 75%** with SSRIs. Patients rarely volunteer it, so **ask**. Antidotes are mostly anecdotal; consider a drug with less sexual dysfunction."
                ],
                [
                  "Weight gain",
                  "From fluid retention, more calories, less exercise or altered metabolism; it can also signal recovery (bulimia, atypical depression). A common reason for **nonadherence**. Mediated mainly by **histamine and serotonin**; worst with **clozapine and olanzapine**. **Metformin** may help weight gain from SDAs and valproate. Valproate and olanzapine cause **insulin resistance**. A **5-HT2C** promoter polymorphism affects how much weight is gained."
                ],
                [
                  "Weight loss",
                  "SSRI weight loss is **transient**. **Bupropion** gives modest **sustained** loss; **topiramate** and **zonisamide** can cause substantial loss."
                ],
                [
                  "Glucose",
                  "Glucose abnormalities and diabetes rise with weight gain. **Clozapine and olanzapine** carry the most risk, including **hyperosmolar diabetes and ketoacidosis**; the dysregulation appears drug-induced and raises **glucagon**."
                ],
                [
                  "Hyponatremia",
                  "**Oxcarbazepine** and **SSRIs**, especially in the **elderly**: confusion, agitation, lethargy."
                ],
                [
                  "Cognitive impairment",
                  "**Benzodiazepines** cause **anterograde amnesia**. SSRIs, lamotrigine, topiramate, gabapentin, lithium, TCAs and bupropion can cause subtler **absent-mindedness** and word-finding trouble. **Anticholinergic** drugs worsen memory."
                ],
                [
                  "Sweating",
                  "Heavy sweating with **TCAs, SSRIs and venlafaxine**, often socially disabling; try **terazosin** or **oxybutynin**."
                ],
                [
                  "Cardiovascular",
                  "Newer drugs have fewer direct cardiac effects; **TCAs and phenothiazines** affect BP and conduction. **Thioridazine** prolongs **QTc** dose-dependently and risks **torsades de pointes** and sudden death. **Sertindole** was never marketed in the US; ziprasidone's slight QTc effect delayed its launch. **Clozapine** rarely causes **myocarditis**."
                ],
                [
                  "Rash",
                  "Any drug can cause one. **Carbamazepine** and **lamotrigine** raise the risk of **Stevens–Johnson syndrome**, which can be fatal or cause scarring or blindness. Warn about widespread lesions **above the neck**, **mucous membrane** involvement, **fever** and **lymphadenopathy**, and tell patients to go to an emergency department immediately."
                ]
              ]
            }
          ]
        },
        {
          "id": "s210-overdose",
          "title": "Idiosyncratic reactions, therapeutic index and overdose",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Idiosyncratic reaction",
                  "Rare, **unrelated to known pharmacology**, probably a **genetically based** sensitivity."
                ],
                [
                  "Paradoxical response",
                  "The **opposite** of the expected effect."
                ],
                [
                  "Therapeutic index",
                  "**Median toxic dose ÷ median effective dose**. A **high** index (haloperidol) allows a wide dose range; a **low** index (**lithium**) requires blood-level monitoring."
                ]
              ]
            },
            {
              "type": "p",
              "text": "In **March 2007** the FDA reported **complex sleep behaviors** with sedative-hypnotics: **sleepwalking, binge eating, aggressive outbursts and night driving** without awareness. Drugs required to carry the warning included **zolpidem**, **eszopiclone**, **zaleplon**, **ramelteon**, **triazolam**, **temazepam**, **flurazepam**, **estazolam**, **quazepam**, and barbiturates such as butabarbital and secobarbital."
            },
            {
              "type": "list",
              "title": "Overdose and suicide prevention",
              "items": [
                "Most newer drugs have a **wide safety margin**, but a **1-month supply of a TCA can be fatal**, in the population most likely to attempt suicide.",
                "Even safe drugs can be dangerous **combined**; prescribe low-therapeutic-index drugs **judiciously**.",
                "Small, nonrefillable prescriptions raise copays, and benefit managers favor 3-month supplies, so weigh the trade-off.",
                "Watch for **hoarding**: random **pill counts** or a **family member dispensing** daily doses. Some patients attempt suicide just as they **begin to recover**.",
                "Store medication safely to prevent **accidental ingestion by children**."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Dialysis in overdose",
              "text": "Low protein binding does not guarantee dialyzability: **venlafaxine** is only 27% protein bound but the molecule is **too large**. Hemodialysis is useful for **lithium** and **valproic acid** overdose."
            },
            {
              "type": "h",
              "text": "Pharmacokinetic interactions and pharmacogenetics"
            },
            {
              "type": "list",
              "items": [
                "Interactions can **raise or lower** another drug's level or its metabolites, or block conversion to an **active metabolite**.",
                "Kidney interactions: **ACE inhibitors, NSAIDs and thiazides** reduce lithium clearance and can cause severe lithium elevation.",
                "Use charts or software, know the interaction profiles of the drugs you prescribe most, and prefer drugs with **minimal interaction risk**.",
                "**Ultrarapid or extensive metabolizers** may have lower-than-expected levels."
              ]
            },
            {
              "type": "update",
              "year": "2023",
              "title": "Pharmacogenetic dosing guidance for antidepressants",
              "text": "The Clinical Pharmacogenetics Implementation Consortium (CPIC) updated its guideline in **2023** to give genotype-based recommendations for **CYP2D6, CYP2C19 and CYP2B6** and the serotonin reuptake inhibitor antidepressants (SSRIs, SNRIs and related drugs), for example dose adjustment or an alternative drug for **poor or ultrarapid metabolizers**. CPIC guidelines explain how to act on genotype results that are already available; they do not address whether to order testing.",
              "source": "Bousman CA et al., CPIC guideline for serotonin reuptake inhibitor antidepressants, Clinical Pharmacology & Therapeutics, 2023"
            }
          ]
        }
      ]
    },
    {
      "title": "Medication-induced movement disorders",
      "sections": [
        {
          "id": "s210-mid",
          "title": "Overview and receptor profiles",
          "blocks": [
            {
              "type": "p",
              "text": "Movement disorders are most often caused by **D2-blocking** drugs but can follow other medications. They can be hard to tell from illness: **anxiety resembles akathisia**, and alcohol or benzodiazepine withdrawal causes **tremor**. The APA keeps the term **neuroleptic** for antipsychotic side effects because the word originally described the tendency to cause abnormal movements. **SGA** and **SDA** are used interchangeably."
            },
            {
              "type": "list",
              "items": [
                "Most common: **parkinsonism**, **acute dystonia** and **acute akathisia**.",
                "**Neuroleptic malignant syndrome** is life-threatening and often missed.",
                "**Tardive dyskinesia** appears late and can be irreversible, though recent data suggest it is less pernicious than once thought.",
                "SDAs block dopamine receptors less, so they are presumed to cause fewer movement disorders, but the risk remains."
              ]
            },
            {
              "type": "table",
              "caption": "Receptor blockade of drugs associated with movement disorders",
              "head": [
                "Drug",
                "D2",
                "5-HT2",
                "Muscarinic"
              ],
              "rows": [
                "First-generation antipsychotics",
                [
                  "Chlorpromazine (aliphatic phenothiazine)",
                  "Low",
                  "High",
                  "High"
                ],
                [
                  "Thioridazine, mesoridazine (piperidines)",
                  "Low",
                  "Med",
                  "High"
                ],
                [
                  "Trifluoperazine (piperazine)",
                  "Med",
                  "Med",
                  "Med"
                ],
                [
                  "Fluphenazine (piperazine)",
                  "**High**",
                  "Low",
                  "Low"
                ],
                [
                  "Perphenazine (piperazine)",
                  "High",
                  "Med",
                  "Low"
                ],
                [
                  "Thiothixene (thioxanthene)",
                  "High",
                  "Med",
                  "Low"
                ],
                [
                  "Loxapine (dibenzoxazepine)",
                  "Med",
                  "High",
                  "Low"
                ],
                [
                  "Haloperidol, droperidol (butyrophenones)",
                  "**High**",
                  "Low (haloperidol), Med (droperidol)",
                  "Low"
                ],
                [
                  "Pimozide (diphenylbutylpiperidine)",
                  "High",
                  "Med",
                  "Low"
                ],
                [
                  "Molindone (dihydroindolone)",
                  "Med",
                  "Low",
                  "Low"
                ],
                "Second-generation antipsychotics",
                [
                  "Clozapine",
                  "**Low**",
                  "High",
                  "High"
                ],
                [
                  "Risperidone",
                  "High",
                  "High",
                  "Low"
                ],
                [
                  "Olanzapine",
                  "Low",
                  "High",
                  "High"
                ],
                [
                  "Quetiapine",
                  "Low/med",
                  "Low/med",
                  "Low"
                ],
                [
                  "Ziprasidone",
                  "Med",
                  "High",
                  "Low"
                ],
                [
                  "Aripiprazole",
                  "High (partial agonist)",
                  "High",
                  "Low"
                ],
                "Others",
                [
                  "Anticonvulsants",
                  "Low",
                  "Low",
                  "Low"
                ],
                [
                  "Antidepressants",
                  "Low (except **amoxapine**)",
                  "Varies",
                  "Varies"
                ],
                [
                  "Prochlorperazine, metoclopramide (nonpsychiatric)",
                  "**High**",
                  "Med to high",
                  "Low"
                ]
              ],
              "wide": true
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Reading the table",
              "text": "High D2 blockade with **low** anticholinergic activity predicts the most EPS (haloperidol, fluphenazine). Strong **muscarinic** blockade is partly protective (chlorpromazine, thioridazine, clozapine). Remember the nonpsychiatric D2 blockers **metoclopramide** and **prochlorperazine**."
            }
          ]
        },
        {
          "id": "s210-park",
          "title": "Parkinsonism, acute dystonia and akathisia",
          "blocks": [
            {
              "type": "table",
              "caption": "The three early neuroleptic movement disorders",
              "head": [
                "",
                "Parkinsonism",
                "Acute dystonia",
                "Acute akathisia"
              ],
              "rows": [
                [
                  "Picture",
                  "**Lead pipe** and **cogwheel** rigidity, shuffling gait, stooped posture, **drooling**; coarse tremor like essential tremor (pill-rolling is rare); **rabbit syndrome** (perioral tremor, often late)",
                  "Brief or sustained contractions: **oculogyric crisis**, tongue protrusion, **trismus**, **torticollis**, laryngeal–pharyngeal dystonia (can threaten breathing), limb and trunk postures; **opisthotonos**, scoliosis and lordosis in children",
                  "Subjective and objective **restlessness**: anxiety, inability to relax, jitteriness, **pacing**, rocking, alternating sitting and standing"
                ],
                [
                  "Timing",
                  "Within **5 to 90 days** of starting",
                  "**Early**, often within days",
                  "Same time course as parkinsonism"
                ],
                [
                  "Highest risk",
                  "**Elderly** and **female** patients",
                  "**Men**, age **under 30**, **high doses of high-potency** drugs, especially **IM**",
                  "**Middle-aged women**"
                ],
                [
                  "Mechanism",
                  "**D2 blockade** in the **caudate** at the end of the **nigrostriatal** pathway; worst with high-potency, low-anticholinergic drugs (**haloperidol**)",
                  "Dopaminergic **hyperactivity** in the basal ganglia as CNS drug levels **fall between doses**",
                  "Seen with antipsychotics, **antidepressants** and **sympathomimetics**"
                ],
                [
                  "Differential",
                  "Idiopathic parkinsonism, other organic causes, **depression** (both blunt the face and slow movement)",
                  "**Seizures**, **tardive dyskinesia**; fluctuation and response to reassurance can wrongly suggest it is **hysterical**",
                  "**Anxiety**, agitation of the illness"
                ],
                [
                  "Treatment",
                  "**Anticholinergic** (benztropine), **amantadine** or **diphenhydramine**; withdraw after **4 to 6 weeks** to test for tolerance (about **half** need to continue)",
                  "**IM anticholinergic** or **IV/IM diphenhydramine 50 mg** almost always works; also IV diazepam 10 mg, amobarbital, caffeine sodium benzoate, hypnosis. Prophylaxis prevents it but has its own risks",
                  "**Reduce the dose**, add a drug, consider switching. **β-blockers** are most effective; anticholinergics, benzodiazepines and **cyproheptadine** help some; sometimes nothing works"
                ]
              ],
              "wide": true
            },
            {
              "type": "list",
              "items": [
                "Drug-induced parkinsonism can persist **up to 2 weeks** after the antipsychotic is stopped, and up to **3 months** in the elderly; continue the anticholinergic until it resolves.",
                "Dystonia is **painful and frightening** and often leads to nonadherence; consider changing the antipsychotic if the patient fears a recurrence.",
                "Akathisia may predict a **poor treatment outcome**; lower the dose to the minimum adequate level once it is recognized."
              ]
            },
            {
              "type": "table",
              "caption": "Drugs for extrapyramidal disorders",
              "head": [
                "Drug",
                "Usual dose",
                "Used for"
              ],
              "rows": [
                "Anticholinergics",
                [
                  "**Benztropine** (Cogentin)",
                  "PO 0.5–2 mg three times a day; IM or IV 1–2 mg",
                  "Acute dystonia, parkinsonism, akinesia, akathisia"
                ],
                [
                  "Biperiden (Akineton)",
                  "PO 2–6 mg three times a day; IM or IV 2 mg",
                  ""
                ],
                [
                  "Procyclidine (Kemadrin)",
                  "PO 2.5–5 mg two to four times a day",
                  ""
                ],
                [
                  "**Trihexyphenidyl** (Artane)",
                  "PO 2–5 mg three times a day",
                  ""
                ],
                [
                  "Orphenadrine (Norflex)",
                  "PO 50–100 mg two to four times a day; IV 60 mg",
                  "**Rabbit syndrome**"
                ],
                "Antihistamine",
                [
                  "**Diphenhydramine** (Benadryl)",
                  "PO 25 mg four times a day; IM or IV 25 mg",
                  "Acute dystonia, parkinsonism, akinesia, rabbit syndrome"
                ],
                "Dopaminergic",
                [
                  "**Amantadine** (Symmetrel)",
                  "PO 100–200 mg twice a day",
                  "Parkinsonism, akinesia, rabbit syndrome"
                ],
                "β-blocker",
                [
                  "**Propranolol** (Inderal)",
                  "PO 20–40 mg three times a day",
                  "**Akathisia**, tremor"
                ],
                "α-adrenergic agonist",
                [
                  "Clonidine (Catapres)",
                  "PO 0.1 mg three times a day",
                  "Akathisia"
                ],
                "Benzodiazepines",
                [
                  "Clonazepam (Klonopin)",
                  "PO 1 mg twice a day",
                  "Akathisia, acute dystonia"
                ],
                [
                  "Lorazepam (Ativan)",
                  "PO 1 mg three times a day",
                  ""
                ],
                "Other",
                [
                  "Buspirone (BuSpar)",
                  "PO 20–40 mg four times a day",
                  "Tardive dyskinesia"
                ],
                [
                  "Vitamin E",
                  "PO 1,200–1,600 IU a day",
                  "Tardive dyskinesia"
                ]
              ]
            }
          ]
        },
        {
          "id": "s210-nms",
          "title": "Neuroleptic malignant syndrome and hyperthermic syndromes",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Features",
                  "**Motor and behavioral**: rigidity and dystonia, akinesia, **mutism**, obtundation, agitation. **Autonomic**: **hyperthermia**, diaphoresis, raised pulse and BP. **Labs**: raised **WBC**, **CPK**, liver enzymes, plasma **myoglobin** and myoglobinuria, sometimes **renal failure**."
                ],
                [
                  "Who and when",
                  "Can occur **any time** during treatment, in **0.01% to 0.02%** of treated patients. **Men** and **young** patients more than women and the elderly. High-potency drugs (haloperidol) carry the greatest risk; drugs with **anticholinergic** effects seem less likely to cause it."
                ],
                [
                  "Course",
                  "Evolves over **24 to 72 hours**; untreated it lasts **10 to 14 days**. Often missed early, when withdrawal or agitation is taken for worsening psychosis. Mortality **10% to 20%**, higher with **depot** drugs."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Treating neuroleptic malignant syndrome",
              "head": [
                "Intervention",
                "Dosing",
                "Effectiveness"
              ],
              "rows": [
                [
                  "**Supportive measures**",
                  "IV hydration, cooling blankets, ice packs, ice-water enema, oxygen, antipyretics",
                  "Often effective early as the first approach"
                ],
                [
                  "**Dantrolene**",
                  "1 mg/kg a day for 8 days, then oral for 7 more days",
                  "Benefit within minutes or hours, alone or combined"
                ],
                [
                  "**Bromocriptine**",
                  "2.5 mg PO two or three times a day, up to 45 mg a day",
                  "Lowers mortality alone or combined"
                ],
                [
                  "**Amantadine**",
                  "200–400 mg PO a day in divided doses",
                  "Beneficial alone or combined; lowers deaths"
                ],
                [
                  "Levodopa/carbidopa",
                  "Levodopa 50–100 mg a day as a continuous IV infusion",
                  "Case reports of dramatic improvement"
                ],
                [
                  "Benzodiazepines",
                  "1–2 mg IM test dose, then oral if effective",
                  "Worked when others failed; consider if the underlying disorder has **catatonic** features"
                ],
                [
                  "**ECT**",
                  "Unilateral or bilateral; response in as few as **3 treatments**",
                  "Effective when drugs fail; also treats the psychiatric disorder"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Also **stop or reduce the antipsychotic** to the lowest effective dose. **Bromocriptine and amantadine** act as dopamine agonists and can overcome the blockade."
            },
            {
              "type": "table",
              "caption": "Drug-induced central hyperthermic syndromes",
              "head": [
                "Condition (mechanism)",
                "Common causes",
                "Key features",
                "Treatment",
                "Course"
              ],
              "rows": [
                [
                  "**Hyperthermia** (less heat loss, more heat production)",
                  "Atropine, lidocaine, meperidine; NSAID toxicity, pheochromocytoma, thyrotoxicosis",
                  "Hyperthermia, diaphoresis, malaise",
                  "Rectal acetaminophen; diazepam for febrile seizures",
                  "Benign; febrile seizures in children"
                ],
                [
                  "**Malignant hyperthermia** (heat production)",
                  "**Succinylcholine**, **halothane**",
                  "Hyperthermia, **rigidity**, arrhythmias, hypotension, rhabdomyolysis, DIC",
                  "**Dantrolene** IV infusion",
                  "**Familial**; 10% mortality untreated"
                ],
                [
                  "**Tricyclic overdose** (heat production)",
                  "TCAs, cocaine",
                  "Hyperthermia, confusion, visual hallucinations, agitation, hyperreflexia, **anticholinergic signs** (dry skin, dilated pupils), arrhythmias",
                  "**Sodium bicarbonate** if arrhythmia; **physostigmine** with cardiac monitoring",
                  "Fatal if untreated"
                ],
                [
                  "**Autonomic hyperreflexia** (heat production)",
                  "**Stimulants** (amphetamines)",
                  "Hyperthermia, excitement, hyperreflexia",
                  "Trimethaphan infusion",
                  "Reversible"
                ],
                [
                  "**Lethal catatonia** (less heat loss)",
                  "Lead poisoning",
                  "Hyperthermia, intense anxiety, destructive behavior, psychosis",
                  "**Lorazepam** IV; antipsychotics may be contraindicated",
                  "High mortality untreated"
                ],
                [
                  "**Neuroleptic malignant syndrome** (mixed, hypothalamic)",
                  "**Antipsychotics**, methyldopa, reserpine",
                  "Hyperthermia, **rigidity**, diaphoresis, **leukocytosis**, delirium, rhabdomyolysis, **high CPK**, autonomic instability, EPS",
                  "Bromocriptine, carbidopa–levodopa, **dantrolene**",
                  "Rapid onset; 20% mortality untreated"
                ]
              ],
              "wide": true
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "All movement disorders can run hot",
              "text": "Every medication-induced movement disorder can be associated with **hyperthermia**; gastric lavage, cooling and supportive care are needed in most hyperthermic syndromes."
            }
          ]
        },
        {
          "id": "s210-td",
          "title": "Tardive dyskinesia and late syndromes",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Picture",
                  "**Delayed**: rarely before **6 months** of treatment. Involuntary, irregular **choreoathetoid** movements of head, limbs and trunk. **Perioral** movements are most common: darting, twisting and protruding tongue, chewing and lateral jaw movement, lip-puckering, grimacing. Also finger movements and hand clenching; **torticollis, retrocollis, trunk twisting, pelvic thrusting** when severe; breathing and swallowing irregularities (aerophagia, belching, grunting) at worst. **Worse with stress; gone in sleep.**"
                ],
                [
                  "Epidemiology",
                  "**10% to 20%** of patients treated over a year; **20% to 40%** of long-term inpatients. Higher in **women**, **children**, patients **over 50**, and those with **brain damage** or **mood disorders**."
                ],
                [
                  "Course",
                  "**5% to 40%** of all cases eventually remit, and **50% to 90%** of mild cases; remission is **less likely in the elderly**."
                ],
                [
                  "Tardive dystonia and akathisia",
                  "Dystonia and akathisia that appear **late** and can persist for months or years despite stopping or reducing the drug."
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Prevention, detection and management",
              "items": [
                [
                  "Prevent",
                  "Use antipsychotics **only when indicated** and at the **lowest effective dose**. SDAs carry less TD than older drugs; **clozapine** has minimal risk and can even **improve** existing TD."
                ],
                [
                  "Examine regularly",
                  "Use a standardized scale such as the **AIMS** (below)."
                ],
                [
                  "When TD appears",
                  "**Reduce or stop** the antipsychotic, or switch to **clozapine** or another SDA. Withholding a DRA often **worsens** movements at first; substituting an SDA may limit them."
                ],
                [
                  "If no antipsychotic can be used",
                  "**Lithium**, **carbamazepine** or **benzodiazepines** may reduce both movements and psychosis."
                ],
                [
                  "Approved treatment",
                  "**Valbenazine** (2017) was the first FDA-approved drug for TD in adults."
                ]
              ]
            },
            {
              "type": "list",
              "title": "AIMS examination (rate each 0 none to 4 severe)",
              "ordered": true,
              "items": [
                "Observe the patient **unobtrusively at rest**; use a firm chair without arms. Ask about anything in the mouth, the teeth and dentures, and whether the patient notices movements.",
                "Sitting, hands on knees, legs apart, feet flat: look at the **whole body**.",
                "Hands hanging **unsupported**.",
                "Mouth open: observe the **tongue at rest** (twice).",
                "**Protrude the tongue** (twice).",
                "**Tap thumb to each finger** rapidly for 10 to 15 seconds, each hand: watch face and legs.",
                "Flex and extend each arm.",
                "**Stand up**: observe in profile, including hips.",
                "Arms outstretched, palms down (activated): watch trunk, legs and mouth.",
                "**Walk** a few paces, turn and return (activated), twice."
              ]
            },
            {
              "type": "update",
              "year": "2017–2024",
              "title": "VMAT2 inhibitors are now standard treatment",
              "text": "Two **VMAT2 inhibitors** are FDA-approved for **tardive dyskinesia** and for Huntington chorea: **valbenazine** (Ingrezza; 40 mg once daily, then 80 mg after a week; sprinkle capsules since 2024) and **deutetrabenazine** (Austedo; twice daily with food, start 12 mg a day and increase by 6 mg weekly to a maximum of 48 mg; once-daily Austedo XR since 2023). The APA schizophrenia guideline recommends a VMAT2 inhibitor for **moderate to severe or disabling** TD. The book's older options (vitamin E, buspirone) have weaker evidence.",
              "source": "Ingrezza and Austedo prescribing information; APA Practice Guideline for the Treatment of Patients With Schizophrenia, 3rd edition (2020)"
            }
          ]
        },
        {
          "id": "s210-tremor",
          "title": "Tremor, nocturnal myoclonus and restless legs",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Medication-induced postural tremor",
                  "Rhythmic, usually faster than 1 per second; **fine (8 to 12 Hz)** is most common. Less with relaxation and sleep, more with stress. Causes include **lithium, stimulants, antidepressants, caffeine** and **valproate**. Treat with the **lowest dose**, **less caffeine**, **bedtime dosing**, and a **β-blocker** such as propranolol."
                ],
                [
                  "Nocturnal myoclonus",
                  "Stereotyped, abrupt **leg muscle** contractions in sleep every **20 to 60 seconds** (big toe extension; ankle, knee and hip flexion), without awareness; frequent awakenings, unrefreshing sleep and daytime sleepiness. In about **40% of people over 65**; a rare **SSRI** effect. No universally effective treatment: benzodiazepines, levodopa, quinine, rarely opioids."
                ],
                [
                  "Restless legs syndrome",
                  "Deep **creeping sensations** in the calves at rest with an almost irresistible **urge to move**, disturbing sleep onset; relieved by movement and massage. Peaks in middle age, **5%** of people; a rare SSRI effect. **Ropinirole** and **pramipexole** are effective; also benzodiazepines, levodopa, quinine, opioids, propranolol, valproate and carbamazepine."
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Choosing, starting and monitoring a drug",
      "sections": [
        {
          "id": "s210-patient",
          "title": "Patient-related factors",
          "blocks": [
            {
              "type": "p",
              "text": "There is no one-size-fits-all approach. Response and side-effect sensitivity depend on **diagnosis**, **genetics**, **lifestyle**, **medical status**, **concurrent disorders**, **past drug response**, and the patient's **attitude**, **aversion to particular side effects** and **preferences**."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Diagnosis",
                  "Misdiagnosis wastes the chance of the right drug and can **worsen** illness: treating the depressed phase of **bipolar disorder** as unipolar depression can induce **mania or rapid cycling**. Failure or worsening should prompt **reassessment of the diagnosis**."
                ],
                [
                  "Past treatment response",
                  "Choose by the patient's history of **adherence, response and side effects**, the family's history and the drug's side-effect profile. A drug that worked before for the patient or a relative should be **used again**, though some patients fail to respond on resumption. A history of **severe side effects** predicts **nonadherence** with that drug. Confirm the history with **records** and **family**."
                ],
                [
                  "Family response",
                  "Responses are thought to **cluster in families**; evidence is not conclusive, but a relative's good response deserves weight (allowing for drugs not available in their era)."
                ],
                [
                  "Medical and psychiatric comorbidity",
                  "A medical disorder may **cause** the symptoms: untreated **thyroid disease** looks like depression; **sleep apnea** causes depression and cognitive impairment; **Kleine–Levin syndrome** can mimic bipolar disorder. Choose a drug that least worsens existing problems."
                ],
                [
                  "Substances",
                  "**Recreational drugs, alcohol and caffeine** can undermine treatment or cause the symptoms. Ask patients to abstain until benefit is clear, then reintroduce moderate alcohol, tea and coffee and watch the effect."
                ]
              ]
            }
          ]
        },
        {
          "id": "s210-consent",
          "title": "Informed consent and patient education",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Explain the **options**, likely **side effects** and particular **benefits**; respect **patient preference** unless another drug has a compelling advantage in efficacy, tolerability or safety.",
                "Explain **why** a drug is recommended; understanding improves adherence.",
                "A strong **therapeutic alliance** helps patients persist through side effects and **repeated failed trials**.",
                "**Document** the discussion; a **signed consent is not needed**.",
                "Patients told about side effects **report more** of them but **do not stop treatment** more often.",
                "Explore the **psychodynamic meaning** of medication: some see it as a **panacea**, others as the **enemy**. With consent, educate relatives and other clinicians."
              ]
            }
          ]
        },
        {
          "id": "s210-dosing",
          "title": "Dosing",
          "blocks": [
            {
              "type": "p",
              "text": "The effective dose depends on the drug and the patient: inherited sensitivity and **metabolism**, medical illness, other drugs and past exposure. Plasma levels can vary **up to 10-fold**, so dosing is partly **trial and error** within the usual range. Genotyping hepatic enzymes may help: **ultrarapid metabolizers** may need higher doses; **slow metabolizers** may get toxicity at low doses."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Dose–response curve",
                  "Plots drug concentration against effect; some drugs show a clear relationship."
                ],
                [
                  "Potency",
                  "The **dose** needed for an effect, **not** its efficacy. **Haloperidol** is more potent than **chlorpromazine** (about **5 mg** equals **100 mg**), but they are **equally efficacious**."
                ],
                [
                  "Efficacy",
                  "The **maximal clinical response** a drug can achieve."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Underdosing is the bigger risk",
              "text": "Avoid **subtherapeutic doses** and **incomplete trials**: they expose the patient to side effects without the chance of benefit. With most current drugs, **more risk lies in underdosing** than in exceeding the usual range."
            },
            {
              "type": "list",
              "title": "Timing and schedules",
              "items": [
                "Timing follows **half-life** and side effects: **sedating** drugs at **night**, **activating** drugs in the morning.",
                "Once-daily versus divided dosing is usually based on **plasma** levels, but **brain and plasma kinetics dissociate**, so plasma-based schedules can mislead.",
                "Use psychotropics **continuously**; exceptions are insomnia, agitation and situational anxiety.",
                "A common error: taking **alprazolam or clonazepam only after a panic attack starts**; they should be taken on a **regular schedule** to prevent attacks.",
                "Some patients with SSRI sexual dysfunction take a **drug holiday**, skipping occasional doses.",
                "**Intermittent SSRIs** in the **2-week luteal phase** treat **premenstrual dysphoric disorder**."
              ]
            }
          ]
        },
        {
          "id": "s210-duration",
          "title": "Duration of treatment and visits",
          "blocks": [
            {
              "type": "p",
              "text": "How long depends on the **disorder**, **symptom duration**, **family history**, and tolerance of and benefit from the drug. First see whether it works and is tolerable; discuss duration once the result is clear. Most psychiatric disorders are **chronic or relapsing**, so long-term treatment is often needed. Psychotropics **control symptoms**; they are **not said to cure**."
            },
            {
              "type": "steps",
              "title": "Three phases",
              "items": [
                [
                  "Initial therapeutic trial",
                  "At least **several weeks**, because onset is delayed for most classes. Set expectations at the start: side effects usually come **before** benefit, and some symptoms may worsen at first (panic patients often get **jitteriness or more attacks** on starting a TCA or SSRI). A poor early reaction does not predict the outcome. **Benzodiazepines** are the exception: their hypnotic and anxiolytic effects are **immediate**."
                ],
                [
                  "Continuation",
                  "Provides significant protection against **relapse**, though not absolute."
                ],
                [
                  "Maintenance",
                  "Length depends on history. **Early-onset chronic** depression, **multiple past episodes**, and a **severe or long** current episode argue for longer or **indefinite** treatment."
                ]
              ]
            },
            {
              "type": "p",
              "text": "See patients **as often as needed** until there is a clear response, several times a week if severely ill. Stable maintenance patients still need monitoring: about **every 3 months** is reasonable, and **6 months** may do after long-standing treatment."
            }
          ]
        },
        {
          "id": "s210-labs",
          "title": "Laboratory tests and blood-level monitoring",
          "blocks": [
            {
              "type": "list",
              "items": [
                "For most commonly used psychotropics, **routine testing is not required**; testing follows the clinical situation and the drug.",
                "**Pretreatment tests** establish baselines and rule out medical causes or complications; obtain recent results.",
                "Get a **pretreatment ECG** for drugs that affect **cardiac conduction**.",
                "**Lithium and clozapine** need pretreatment and ongoing tests of **thyroid, renal, hepatic or hematologic** function.",
                "The FDA suggests monitoring for **diabetes** in every patient on an **atypical antipsychotic**."
              ]
            },
            {
              "type": "list",
              "title": "When plasma levels help",
              "items": [
                "Drugs with a **narrow therapeutic index**, such as **lithium**.",
                "Drugs with a **therapeutic window** (an optimal range for response).",
                "Combinations that can **raise levels** of a drug or its metabolites to toxic range.",
                "**Unexplained toxicity** at usual doses.",
                "**Failure to respond** when nonadherence is possible."
              ]
            },
            {
              "type": "p",
              "text": "Do not hesitate to order **random urine toxicology** in a patient who misuses substances."
            }
          ]
        }
      ]
    },
    {
      "title": "Outcomes, failure and withdrawal",
      "sections": [
        {
          "id": "s210-outcomes",
          "title": "Response and remission",
          "blocks": [
            {
              "type": "p",
              "text": "The goal is to eliminate all manifestations of the disorder so the patient functions and enjoys life as before. Improvement to **below the syndromal threshold** is **remission**, the preferred outcome: patients in remission are **less likely to relapse and recur**."
            },
            {
              "type": "table",
              "caption": "Defining outcomes in depression trials",
              "head": [
                "Outcome",
                "Definition"
              ],
              "rows": [
                [
                  "**Response**",
                  "Improved but not fully resolved; usually a **50% or greater decrease** from baseline on a scale such as the **HAM-D** or **MADRS**"
                ],
                [
                  "**Remission**",
                  "**HAM-D 7 or less**, or **MADRS 10 or less**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Expectations depend on the disorder: **OCD** and **schizophrenia** more often leave residual symptoms than major depression or panic disorder. With SSRIs alone over 2 years, full OCD remission is **under 12%** and partial remission about **47%**."
            }
          ]
        },
        {
          "id": "s210-failure",
          "title": "Treatment failure and resistance",
          "blocks": [
            {
              "type": "p",
              "text": "Plan for failure from the start: have a **next step** ready. Repeated failures call for reassessment."
            },
            {
              "type": "steps",
              "title": "Five questions after treatment fails",
              "items": [
                [
                  "1. Was the diagnosis right?",
                  "Include an **undiagnosed medical condition** or **recreational drug use** as the cause."
                ],
                [
                  "2. Are the symptoms the illness or the drug?",
                  "**Akinesia** resembles psychotic withdrawal; **akathisia** and **NMS** resemble psychotic agitation; long-term SSRIs can cause **emotional blunting** that mimics depression. **Intolerance of side effects** may be the most common reason for failure."
                ],
                [
                  "3. Was the dose and duration adequate?",
                  "Absorption and metabolism vary widely; **plasma levels** can confirm an adequate dose."
                ],
                [
                  "4. Did an interaction reduce efficacy?",
                  "Consider **pharmacokinetic or pharmacodynamic** interactions with other drugs."
                ],
                [
                  "5. Did the patient take it?",
                  "**Nonadherence** follows complicated regimens (more than one drug, more than once a day), **unnoticed side effects**, poor education, and stopping after recovery in the belief of cure."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Treatment resistance",
              "text": "Some patients fail repeated trials and no single factor explains it. Strategies include **combinations**, **high-dose therapy** and **unconventional drugs**, with limited comparative evidence for any of them."
            }
          ]
        },
        {
          "id": "s210-withdrawal",
          "title": "Tolerance, sensitization and withdrawal",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Tolerance",
                  "Needing **higher doses over time** to keep an effect; also **reduced sensitivity to side effects** such as nausea, which is why some drugs start at subtherapeutic doses. Reflects CNS changes such as altered receptor configuration or density. Similar drugs show **cross-tolerance**."
                ],
                [
                  "Sensitization",
                  "The reverse: the **same dose produces a stronger effect** over time."
                ],
                [
                  "Withdrawal",
                  "Physiologic adaptation with symptoms on stopping; technically a **side effect**. More likely the **more abruptly** a drug is stopped and the **shorter its half-life**; can follow **missed doses** or the gaps between doses of short-acting drugs. **Sedative-hypnotics and opiates** cause the most distressing reactions; **barbiturate** withdrawal can be **fatal**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Who withdraws, and why",
              "head": [
                "Drug",
                "Point"
              ],
              "rows": [
                [
                  "**Alprazolam, triazolam**",
                  "More immediate and intense withdrawal than other benzodiazepines"
                ],
                [
                  "**Paroxetine**",
                  "The SSRI with the most frequent and severe withdrawal. It is metabolized by **and inhibits CYP2D6**, so it inhibits its own metabolism; when the dose falls, levels **drop steeply**"
                ],
                [
                  "**Fluoxetine**",
                  "Discontinuation symptoms are **delayed and attenuated**, weeks later, because of its long-lived active metabolite"
                ],
                [
                  "**Venlafaxine**",
                  "Severe SSRI-like withdrawal"
                ],
                [
                  "Alprazolam with nefazodone",
                  "Stopping the CYP3A4 inhibitor **nefazodone** speeds alprazolam metabolism and can precipitate withdrawal **without any change in the alprazolam dose**"
                ],
                [
                  "Sustained-release forms",
                  "**Do not** reduce withdrawal: the longer apparent half-life reflects **slow absorption**, not slower elimination"
                ],
                [
                  "Generic switch",
                  "**Low bioavailability** of a generic may cause loss of effect or withdrawal soon after a refill; check the drug and dose dispensed"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Withdrawal or relapse?",
              "text": "Withdrawal begins **hours or days** after a reduction and resolves within **a few weeks**; **persisting** symptoms argue against withdrawal. After long-term treatment, psychotic and mood symptoms **rarely return abruptly**. **Taper gradually** after prolonged use, which reduces but does not eliminate the risk."
            }
          ]
        }
      ]
    },
    {
      "title": "Combinations, special populations and regulation",
      "sections": [
        {
          "id": "s210-combo",
          "title": "Combining drugs",
          "blocks": [
            {
              "type": "p",
              "text": "APA practice guidelines advise that **multiple agents should be avoided if possible**, yet **polypharmacy** has been common since **chlorpromazine was combined with reserpine** in the early 1950s. Psychiatric inpatients take about **three** psychotropics on average."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Combination therapy",
                  "Two drugs with the **same approved indication** used together."
                ],
                [
                  "Augmentation",
                  "Adding a drug with **another indication**, often not primarily a psychotropic (for example **thyroid hormone** added to an antidepressant)."
                ],
                [
                  "Fixed combination",
                  "One product with two active ingredients; simplifies the regimen and may help **adherence**, but **dosing is inflexible** and may keep a patient on two drugs when one would do."
                ]
              ]
            },
            {
              "type": "list",
              "title": "Common reasons to combine",
              "items": [
                "**Bipolar disorder**: almost all patients take more than one psychotropic.",
                "**Psychotic depression**: antidepressant plus a DRA or SDA.",
                "**OCD**: SSRIs often give partial benefit, so an **SDA** may be added.",
                "To **counteract side effects**, treat specific symptoms, or bridge a **switch** between drugs.",
                "Adding to a drug that gave **partial benefit**."
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Pros and cons",
              "text": "Combining builds on an existing response, which is less demoralizing, and may create effects no single drug provides. But **nonadherence and side effects increase**, it becomes hard to tell which drug helped or harmed, and metabolite ratios change."
            },
            {
              "type": "table",
              "caption": "Selected fixed-combination drugs",
              "head": [
                "Ingredients",
                "Strengths",
                "Dosing",
                "Indication"
              ],
              "rows": [
                [
                  "**Olanzapine–fluoxetine** (Symbyax)",
                  "Capsules 6/25, 6/50, 12/25, 12/50 mg",
                  "Once in the evening; olanzapine 6–12 mg with fluoxetine 25–50 mg",
                  "**Depressive episodes of bipolar I**"
                ],
                [
                  "Perphenazine–amitriptyline",
                  "Tablets 2/25, 4/25, 4/50, 2/10, 4/10 mg",
                  "2/25 or 4/25 four times a day initially; maintenance two to four times a day",
                  "Depression with anxiety"
                ],
                [
                  "Chlordiazepoxide–amitriptyline",
                  "Tablets 5/12.5, 10/25 mg",
                  "Three or four times a day, up to six tablets a day",
                  "Depression with anxiety"
                ],
                [
                  "Dextroamphetamine–amphetamine (Adderall, Adderall XR)",
                  "Tablets 5–30 mg; XR capsules 5–30 mg",
                  "Ages 3 to 5: 2.5 mg a day; 6 and older: 5 mg a day to start",
                  "**ADHD**"
                ],
                [
                  "Chlordiazepoxide–clidinium",
                  "Capsule 5/2.5 mg",
                  "One or two capsules three or four times a day",
                  "Peptic ulcer, irritable bowel and related GI conditions"
                ]
              ]
            },
            {
              "type": "p",
              "text": "**Combined psychotherapy and pharmacotherapy** outperforms either alone in many studies. Treatment should be **coordinated and integrated**; when two clinicians share the care, they must **communicate clearly and often**."
            }
          ]
        },
        {
          "id": "s210-young-preg",
          "title": "Children, pregnancy and breastfeeding",
          "blocks": [
            {
              "type": "p",
              "text": "Trials mostly enrolled healthy young adults and long excluded women of child-bearing age, so data for the young, the old, the medically ill and pregnant or nursing women are limited."
            },
            {
              "type": "defs",
              "title": "Children",
              "items": [
                [
                  "Evidence",
                  "Mostly **clinical experience**; adult data are extrapolated despite developmental differences in kinetics and dynamics. The **FDA Modernization Act of 1997** gave incentives for pediatric studies."
                ],
                [
                  "Dosing",
                  "A smaller volume of distribution argues for lower doses, but **faster metabolism** argues for a **higher mg/kg** ratio. Start low and raise until effect; **adult doses** are fine if effective and tolerated."
                ]
              ]
            },
            {
              "type": "list",
              "title": "Pregnancy",
              "items": [
                "No drug is risk-free, and **no psychotropic is absolutely contraindicated**; avoid drugs with known risks when acceptable alternatives exist.",
                "Basic rule: avoid drugs in pregnancy (especially the **first trimester**) and breastfeeding unless the disorder is **severe** and benefit outweighs risk; a woman may choose to continue to avoid relapse.",
                "**Paroxetine**: the only newer antidepressant with an FDA warning, for **cardiac malformations**.",
                "**Lithium**: **Ebstein anomaly**, though the risk now seems smaller than once believed.",
                "**Carbamazepine and valproate**: **neural tube defects**, prevented by **folate**.",
                "**Lamotrigine**: **oral clefts** with first-trimester use.",
                "Some experts advise **folate** for all women of child-bearing age on psychotropics.",
                "Near delivery: newborn **oversedation** (sometimes needing ventilation) and **dependence** with withdrawal. **Third-trimester SSRIs**: neonatal withdrawal syndrome and **persistent pulmonary hypertension** of the newborn."
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Breastfeeding (as stated in the book)",
              "text": "Virtually all psychiatric drugs pass into **breast milk**, and the book advises mothers taking them **not to breastfeed**."
            },
            {
              "type": "update",
              "year": "2024",
              "title": "Valproate: precautions for men too",
              "text": "In **January 2024** the European Medicines Agency recommended precautions after a study suggested a possible higher risk of **neurodevelopmental disorders** in children whose **fathers** took valproate in the 3 months before conception: treatment started and supervised by a specialist, **regular review** (especially if the patient plans a child), discussion of **effective contraception** including for the partner during treatment and for 3 months after, and **no sperm donation** during treatment and for 3 months after. From January 2024 the UK also restricted **starting** valproate in any patient **under 55** unless two specialists agree that no other treatment is suitable.",
              "source": "European Medicines Agency, 26 January 2024; UK MHRA valproate safety measures, 2023 to 2024"
            }
          ]
        },
        {
          "id": "s210-elderly",
          "title": "Elderly, medically ill and substance-using patients",
          "blocks": [
            {
              "type": "list",
              "title": "Elderly patients",
              "items": [
                "More susceptible to side effects (especially **cardiac**) and slower to **metabolize and excrete** drugs.",
                "**Start at about half** the usual starting dose and raise slowly; many still need a **full dose**.",
                "They use about **one-third** of all prescriptions; community elders take **3 to 5** drugs, hospitalized elders about **10**, and nearly half of long-term care residents take a psychotropic, so check **interactions**.",
                "Psychotropics cause **falls**: stopping them cuts fall risk by about **40%**.",
                "Avoid drugs causing **hypotension, conduction problems, anticholinergic effects or respiratory depression**.",
                "**Benzodiazepines and anticholinergics** can mimic or worsen **dementia**; **DRAs** can induce or worsen **Parkinson disease**.",
                "**SSRI-induced SIADH** and **oxcarbazepine hyponatremia** are commoner in older patients.",
                "Assess **capacity to consent** in medically ill or demented patients, before medication or ECT."
              ]
            },
            {
              "type": "list",
              "title": "Medically ill patients",
              "items": [
                "Rule out the medical disorder as the cause: neurologic and endocrine disease and **HIV** affect mood and cognition; **corticosteroids** and **L-dopa** can induce **mania**; **NSAIDs** rarely cause psychosis.",
                "**Diabetes**: avoid drugs causing weight gain or glucose dysregulation; consider weight-reducing options such as **bupropion, topiramate or zonisamide** where they fit the diagnosis.",
                "**Obstructive pulmonary disease**: avoid **sedating** drugs that suppress respiration.",
                "Interactions: **rifampicin** induces **carbamazepine** metabolism; **paroxetine and fluoxetine** (CYP2D6 inhibitors) block conversion of **hydrocodone** and other opiates to their active analgesic form.",
                "Start low, go slow; blood levels may help but are rarely needed or available."
              ]
            },
            {
              "type": "p",
              "text": "**Substance use**: ongoing **marijuana, cocaine or alcohol** use can make the psychiatric disorder untreatable, and stopping can bring craving and withdrawal. If several trials fail, **detoxification in hospital** may be needed. There is little research and no consensus on drug treatment in regular users."
            }
          ]
        },
        {
          "id": "s210-regulatory",
          "title": "Labeling, off-label use and placebos",
          "blocks": [
            {
              "type": "defs",
              "title": "FDA labeling",
              "items": [
                [
                  "Package insert",
                  "FDA-approved product information: side effects, interactions, monitoring and restrictions. The FDA negotiates the wording and can move to **withdraw** a drug if a company refuses."
                ],
                [
                  "Black box warning",
                  "The strongest warning, for serious risks; now applied to **whole classes**, including **SDAs** and **antidepressants**."
                ],
                [
                  "Contraindications",
                  "When risk outweighs benefit; otherwise the label says **\"None known.\"**"
                ],
                [
                  "Precautions",
                  "Advice for all patients and special groups (pregnancy, nursing, children): driving, alcohol, foods, laboratory monitoring and interactions."
                ],
                [
                  "Adverse reactions",
                  "Frequencies of undesirable effects, including those from **overdose** and **interactions**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "**Off-label use** is common and lawful: once a drug is approved, a physician may prescribe it for any medically indicated purpose or dose **without notifying the FDA**. It is not a departure from good practice, but it does not remove responsibility for harm, and deviating from the label can be argued in malpractice cases. **Explain the reasons to the patient, document them**, and seek a colleague's opinion when in doubt."
            },
            {
              "type": "table",
              "caption": "Examples of off-label and limited-approval use",
              "head": [
                "Drug",
                "Use"
              ],
              "rowHeads": false,
              "rows": [
                [
                  "Propranolol",
                  "**Social anxiety**; lithium tremor"
                ],
                [
                  "Verapamil",
                  "**Mania**; MAOI hypertensive crisis"
                ],
                [
                  "Levothyroxine",
                  "Antidepressant **augmentation**"
                ],
                [
                  "Clonidine, guanfacine",
                  "**PTSD**"
                ],
                [
                  "Dextroamphetamine",
                  "Antidepressant augmentation"
                ],
                [
                  "Riluzole",
                  "Self-injurious behavior"
                ],
                [
                  "Divalproex, risperidone",
                  "Approved for **acute** mania, routinely used long term (book's statement)"
                ],
                [
                  "Lamotrigine",
                  "First-choice for bipolar disorder **before** FDA approval"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Placebos"
            },
            {
              "type": "list",
              "items": [
                "Placebo response exceeds **30%** in mild to moderate **depression** and some **anxiety** disorders, but is **meager** in **schizophrenia, mania and psychotic depression**.",
                "Placebos have **biologic** effects: **naloxone** can block placebo analgesia, implicating **endorphins**.",
                "**Nocebo**: adverse effects attributed to an inert substance; some trial side effects are **more frequent on placebo**.",
                "Giving a placebo **without consent** can destroy trust when discovered."
              ]
            }
          ]
        }
      ]
    }
  ]
});
