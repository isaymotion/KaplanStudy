/* Chapter 15 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 15, with labeled post-publication updates. */
KS.add("ch15", "guide", {
  "intro": "Chapter 15 covers the sleep–wake disorders: insomnia, hypersomnolence and narcolepsy, the sleep-related breathing disorders, circadian rhythm sleep–wake disorders, parasomnias and sleep-related movement disorders. It compares how DSM-5, ICSD-3 and ICD-10 classify each, explains the sleep history, polysomnography and the multiple sleep latency test and sets out drug and nondrug treatment, with cognitive-behavioral therapy for insomnia (CBTi) treated in detail.",
  "objectives": [
    "Describe the electrophysiology of wakefulness, NREM stages and REM sleep, and compare how DSM-5, ICSD-3 and ICD-10 classify the sleep–wake disorders.",
    "Diagnose insomnia disorder and its subtypes, and treat it with CBTi (sleep hygiene, stimulus control, sleep restriction, relaxation and cognitive therapy) and appropriately chosen hypnotics.",
    "Distinguish hypersomnolence disorder, Kleine–Levin syndrome and narcolepsy using the history, polysomnography and the MSLT, and outline wake-promoting and anticataplectic treatment.",
    "Recognize obstructive and central sleep apnea and sleep-related hypoventilation, interpret their polysomnographic criteria and plan positive airway pressure and other treatment.",
    "Identify the circadian rhythm sleep–wake disorders and the parasomnias and sleep-related movement disorders (sleepwalking, sleep terrors, nightmares, REM sleep behavior disorder, restless legs syndrome), and know their treatments, including light, melatonin and chronotherapy.",
    "Take a structured sleep history and know when to order polysomnography, home sleep testing, the MSLT, the maintenance of wakefulness test or actigraphy, and know which psychiatric and medical disorders commonly accompany each sleep disorder."
  ],
  "parts": [
    {
      "title": "Sleep, its stages and how disorders are classified",
      "sections": [
        {
          "id": "s15-overview",
          "title": "Why sleep matters",
          "blocks": [
            {
              "type": "p",
              "text": "The chapter frames sleep around three essential characteristics:"
            },
            {
              "type": "defs",
              "title": "Three core features of sleep",
              "items": [
                [
                  "Sleep is required",
                  "Proper **brain function** depends on it. Sleep loss impairs **thinking, mood regulation** and many normal physiologic functions."
                ],
                [
                  "Sleep is not one process",
                  "There are several **distinct types of sleep** that differ qualitatively and quantitatively, each with its own function and regulation. Selectively depriving one type causes a **compensatory rebound** of that type once sleep is unrestricted."
                ],
                [
                  "Sleep is not passive",
                  "The sleeping brain shows a **high degree of activation and metabolism**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Sleep disorders arise when the mechanisms that regulate sleep go awry. They are **dangerous** and **expensive**."
            },
            {
              "type": "list",
              "title": "Why it matters clinically",
              "items": [
                "**Hypersomnolence** is potentially life-threatening and affects family, coworkers and the public, not only the sleepy person.",
                "**Sleep-related motor vehicle accidents** are a major public safety concern; some US states have **criminal statutes** against sleepy driving.",
                "Many major **industrial catastrophes** have been linked to sleepiness.",
                "**Sleep-disordered breathing** contributes to **hypertension, heart failure and stroke**.",
                "US direct costs are about **$16 billion** a year; indirect costs exceed **$100 billion**."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "One umbrella, very different disorders",
              "text": "All of the chapter's disorders are disturbances of healthy sleep, but they vary widely, from conditioned arousal in insomnia to airway collapse in obstructive sleep apnea. Knowing the **stages of sleep** and their **electrophysiologic criteria** is the foundation for telling them apart."
            }
          ]
        },
        {
          "id": "s15-stages",
          "title": "Stages of normal sleep",
          "blocks": [
            {
              "type": "p",
              "text": "Sleep is staged from three recordings: the **electroencephalogram (EEG)**, the **electrooculogram (EOG)** and the **electromyogram (EMG)**. Table 15-1 gives the classic Rechtschaffen and Kales (1968) criteria, which divide NREM sleep into **stages 1 to 4**."
            },
            {
              "type": "table",
              "caption": "Electrophysiologic criteria for the stages of sleep (Table 15-1)",
              "head": [
                "State",
                "EEG",
                "EOG",
                "EMG"
              ],
              "rows": [
                [
                  "Wakefulness",
                  "Low-voltage, mixed frequency; **alpha (8 to 13 cps)** with eyes closed",
                  "Eye movements and blinks",
                  "**High tonic** activity and voluntary movements"
                ],
                "Non–rapid eye movement (NREM) sleep",
                [
                  "Stage 1",
                  "Low-voltage, mixed frequency; **theta (3 to 7 cps)**, **vertex sharp waves**",
                  "**Slow** eye movements",
                  "Tonic activity slightly below wakefulness"
                ],
                [
                  "Stage 2",
                  "Low-voltage mixed background with **sleep spindles (12 to 14 cps bursts)** and **K complexes** (negative sharp wave then positive slow wave)",
                  "None",
                  "Low tonic activity"
                ],
                [
                  "Stage 3",
                  "High-amplitude (**≥75 µV**) slow waves (**≤2 cps**) filling **20% to 50%** of the epoch",
                  "None",
                  "Low tonic activity"
                ],
                [
                  "Stage 4",
                  "High-amplitude slow waves filling **more than 50%** of the epoch",
                  "None",
                  "Low tonic activity"
                ],
                "Rapid eye movement (REM) sleep",
                [
                  "REM",
                  "Low-voltage, mixed frequency; **saw-tooth waves**, theta and slow alpha",
                  "**Rapid eye movements**",
                  "**Tonic atonia** with phasic twitches"
                ]
              ],
              "note": "cps, cycles per second. Stages 3 and 4 together make up slow-wave sleep.",
              "wide": true
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Recognize each stage by its signature",
              "text": "Alpha with eyes closed = **relaxed wakefulness**. Vertex sharp waves and slow eye movements = **stage 1**. Spindles and K complexes = **stage 2**. Slow waves over 20% (stage 3) or over 50% (stage 4) of the epoch = **slow-wave sleep**. Saw-tooth waves with atonia and REMs = **REM sleep**."
            },
            {
              "type": "p",
              "text": "Wakefulness, NREM and REM each have their own neurologic organization. In NREM sleep both **body and brain** are much less active; REM sleep pairs an **atonic body** with an **active, dreaming brain**, and imaging confirms increased brain activation during REM."
            },
            {
              "type": "h",
              "text": "What depression does to the sleep histogram (Figure 15-1)"
            },
            {
              "type": "p",
              "text": "Figure 15-1 compares a normal sleep histogram with that of a patient with **major depressive disorder**:"
            },
            {
              "type": "list",
              "items": [
                "Sleep is disrupted after about **2 hours**, and **continuity worsens toward morning**, the electrophysiologic correlate of **difficulty maintaining sleep** and **early morning awakening**.",
                "**REM latency is markedly reduced**, a feature characteristic of depression.",
                "Some attribute short REM latency to a **cholinergic–aminergic imbalance**."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Short REM latency is a depression marker",
              "text": "When a depressed patient complains of waking early and sleeping poorly, the sleep study typically shows fragmented late-night sleep and **early onset of REM**. Short REM latency also appears in narcolepsy, so interpret it in context."
            },
            {
              "type": "update",
              "year": "2007",
              "title": "Sleep is now scored as N1, N2, N3 and R",
              "text": "Table 15-1 uses the 1968 Rechtschaffen and Kales stages. Since the **American Academy of Sleep Medicine (AASM) scoring manual of 2007**, laboratories score **W, N1, N2, N3 and R**: old **stages 3 and 4 are merged into N3** (slow-wave sleep). You will see N3 on every current sleep study report.",
              "source": "Iber C et al., The AASM Manual for the Scoring of Sleep and Associated Events, 2007"
            }
          ]
        },
        {
          "id": "s15-nosology",
          "title": "Three classification systems",
          "blocks": [
            {
              "type": "p",
              "text": "Three nosologies classify sleep disorders: **DSM-5**, the **International Classification of Sleep Disorders, third edition (ICSD-3)** and **ICD-10**. Most general psychiatrists use **DSM-5**; **sleep medicine specialists** often prefer **ICSD-3**. The chapter's comparison tables (15-5, 15-8 to 15-11) set the three side by side."
            },
            {
              "type": "table",
              "caption": "Outline of ICSD-3 (Table 15-4)",
              "head": [
                "Group",
                "Main disorders"
              ],
              "rows": [
                [
                  "I. Insomnia",
                  "**Chronic** insomnia disorder; **short-term** insomnia disorder; other insomnia disorder. Normal variants: excessive time in bed, **short sleeper**"
                ],
                [
                  "II. Sleep-related breathing disorders",
                  "**Obstructive sleep apnea** (adult, pediatric); **central sleep apnea syndromes** (8 forms, including with Cheyne–Stokes breathing, high-altitude periodic breathing, medication or substance, primary CSA of infancy and of prematurity, treatment-emergent CSA); **sleep-related hypoventilation** disorders (6, including obesity hypoventilation syndrome); sleep-related hypoxemia. Normal variants: **snoring**, **catathrenia**"
                ],
                [
                  "III. Central disorders of hypersomnolence",
                  "**Narcolepsy type 1** and **type 2**; **idiopathic hypersomnia**; **Kleine–Levin syndrome**; hypersomnia due to a medical disorder, a medication or substance or a psychiatric disorder; **insufficient sleep syndrome**. Normal variant: **long sleeper**"
                ],
                [
                  "IV. Circadian rhythm sleep–wake disorders",
                  "Delayed and advanced sleep–wake phase; irregular sleep–wake rhythm; non–24-hour rhythm; **shift work**; **jet lag**; not otherwise specified"
                ],
                [
                  "V. Parasomnias",
                  "**NREM-related**: confusional arousals, sleepwalking, sleep terrors, sleep-related eating disorder. **REM-related**: REM sleep behavior disorder, recurrent isolated sleep paralysis, nightmare disorder. **Other**: exploding head syndrome, sleep-related hallucinations, sleep enuresis, due to medical disorder or substance, unspecified. Normal variant: sleep talking"
                ],
                [
                  "VI. Sleep-related movement disorders",
                  "**Restless legs syndrome**; periodic limb movement disorder; leg cramps; bruxism; rhythmic movement disorder; benign sleep myoclonus of infancy; propriospinal myoclonus at sleep onset; due to medical disorder or substance; unspecified. Normal variants: excessive fragmentary myoclonus, hypnagogic foot tremor and alternating leg muscle activation, **sleep starts (hypnic jerks)**"
                ],
                [
                  "VII. Other sleep disorders",
                  ""
                ]
              ],
              "wide": true
            },
            {
              "type": "table",
              "caption": "Where DSM-5 differs from ICSD-3",
              "head": [
                "Family",
                "DSM-5",
                "ICSD-3"
              ],
              "rows": [
                [
                  "Hypersomnolence",
                  "**Hypersomnolence disorder** as a discrete diagnosis",
                  "**Idiopathic hypersomnia**, possibly a group of disorders with different causes"
                ],
                [
                  "Breathing",
                  "Three disorders: **obstructive sleep apnea-hypopnea**, **central sleep apnea**, **sleep-related hypoventilation**",
                  "Many subtypes of central apnea and hypoventilation"
                ],
                [
                  "Circadian",
                  "**Six** types: delayed, advanced, irregular, non–24-hour, shift work, unspecified; **no jet lag type**",
                  "Includes **jet lag disorder**"
                ],
                [
                  "Parasomnias",
                  "Only **3 of the 10** ICSD-3 parasomnias; includes **restless legs syndrome** as a separate disorder",
                  "Restless legs syndrome is a **sleep-related movement disorder**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Jet lag and restless legs are the classic traps",
              "text": "**Jet lag** is in ICSD-3 but not DSM-5. DSM-5 includes **restless legs syndrome** as its own sleep–wake disorder (the chapter discusses it with the parasomnias); ICSD-3 lists it among the **seven** specific sleep-related movement disorders."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "ICSD-3 lists normal variants",
              "text": "Several ICSD-3 groups end with **isolated symptoms and normal variants** (short sleeper, long sleeper, snoring, sleep talking, hypnic jerks). Always ask whether a complaint is simply a variant before labeling it a disorder."
            },
            {
              "type": "update",
              "year": "2023",
              "title": "ICSD-3-TR",
              "text": "The AASM published a **text revision of ICSD-3 in 2023**. Changes that matter in psychiatric practice: **sleep enuresis** is now grouped as **sleep-related urologic dysfunction** (with new entries for **nocturia**), **sleep-related leg cramps** became **nocturnal muscle cramps**, idiopathic hypersomnia now requires sleep testing that does **not** fit narcolepsy, and circadian disorders need **sleep logs** alongside actigraphy.",
              "source": "AASM, International Classification of Sleep Disorders, 3rd ed., text revision, 2023"
            }
          ]
        }
      ]
    },
    {
      "title": "Insomnia",
      "sections": [
        {
          "id": "s15-ins-dx",
          "title": "Insomnia disorder: presentation and criteria",
          "blocks": [
            {
              "type": "p",
              "text": "People with insomnia have **difficulty falling asleep**, **difficulty staying asleep** or **early morning awakening** with inability to return to sleep, enough to impair functioning."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Insomnia in children",
              "text": "In children, insomnia may show as **resisting the bedtime** a caregiver sets or being unable to sleep **without a caregiver's intervention**."
            },
            {
              "type": "p",
              "text": "Diagnostic criteria describe how insomnia affects sleep. There are **no formal criteria for subtypes**, but ICSD-3 briefly describes each one (next section)."
            },
            {
              "type": "table",
              "caption": "Insomnia disorder in three systems (Table 15-5)",
              "head": [
                "Element",
                "DSM-5",
                "ICSD-3",
                "ICD-10"
              ],
              "rows": [
                [
                  "Name",
                  "Insomnia disorder",
                  "Insomnia disorder",
                  "Disorders of initiating and maintaining sleep (insomnias)"
                ],
                [
                  "Duration",
                  "At least **3 nights a week** for at least **3 months**",
                  "At least **3 times a week**",
                  ""
                ],
                [
                  "Symptoms",
                  "**Dissatisfaction with sleep quality** from difficulty falling asleep, difficulty maintaining sleep or early morning awakening",
                  "1. Problem **initiating or maintaining** sleep. 2. Occurs **despite adequate opportunity** for sleep. 3. **Daytime consequences** of poor sleep",
                  "Difficulty falling and/or staying asleep"
                ],
                [
                  "Number needed",
                  "**Any one**",
                  "**All three**",
                  ""
                ],
                [
                  "Exclusions (not due to)",
                  "A medical disorder; a medication or substance; another sleep–wake disorder; **insufficient opportunity** for sleep",
                  "",
                  "Nightmares; nonorganic sleep disorders; sleep terrors; sleepwalking"
                ],
                [
                  "Impact",
                  "Significant **distress or impairment**",
                  "Significant **daytime impairment** required",
                  ""
                ],
                [
                  "Specifiers",
                  "With non-sleep mental comorbidity (including substance use disorder); with other medical comorbidity; with other sleep disorder",
                  "",
                  ""
                ],
                [
                  "Course",
                  "**Episodic** (1 to 3 months); **persistent** (3 months or longer); **recurrent** (2 or more episodes within 1 year)",
                  "**Short-term** insomnia disorder: under 3 months. **Chronic** insomnia disorder: 3 months or longer",
                  ""
                ],
                [
                  "Comment",
                  "",
                  "Short-term insomnia often occurs with an **acute stressor**",
                  ""
                ]
              ],
              "wide": true
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "The 3-and-3 rule",
              "text": "DSM-5 insomnia disorder needs symptoms on at least **3 nights a week** for at least **3 months**. ICSD-3 splits insomnia at 3 months into **short-term** and **chronic** forms."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Opportunity to sleep matters",
              "text": "Poor sleep because of **too little time in bed** is not insomnia disorder. DSM-5 excludes insufficient opportunity, and ICSD-3 requires symptoms **despite adequate opportunity**."
            }
          ]
        },
        {
          "id": "s15-ins-types",
          "title": "Insomnia subtypes",
          "blocks": [
            {
              "type": "p",
              "text": "The ICSD-3 descriptions highlight nuances and complications that shape treatment."
            },
            {
              "type": "defs",
              "title": "ICSD-3 insomnia subtypes",
              "items": [
                [
                  "Psychophysiologic insomnia (PPI)",
                  "**Conditioned arousal** to the thought of sleeping; the bed and bedroom become **conditioned stimuli** for wakefulness. Daytime adaptation is usually good, though some become extremely tired and desperate. Often occurs with **stress and anxiety disorders**, **delayed sleep phase syndrome** and **hypnotic use and withdrawal**."
                ],
                [
                  "Idiopathic insomnia",
                  "**Lifelong** inability to get adequate sleep that **predates any psychiatric condition**. Rule out or treat PPI, environmental sleep disturbance and poor sleep hygiene first."
                ],
                [
                  "Paradoxical insomnia",
                  "The person believes he or she is awake although the EEG shows **healthy sleep**: a dissociation between sleep and its usual unconsciousness. Suspect it when complaints have **no objective evidence** of disrupted sleep. May occur without psychopathology, or represent a **somatic delusion** or **hypochondriasis**; some patients have **obsessional** concerns about bodily functions."
                ],
                [
                  "Inadequate sleep hygiene",
                  "Insomnia from habits that **raise arousal** (nighttime caffeine or nicotine, intense emotional or physical stimulation within a few hours of bed) or **disturb sleep architecture** (daytime naps, a widely varying sleep–wake schedule)."
                ],
                [
                  "Behavioral insomnia of childhood",
                  "The child depends on a specific **object, person or setting** (a stuffed toy, a parent) to fall or return asleep, or poor **limit-setting** leads to **bedtime stalling** and **bedtime refusal**."
                ],
                [
                  "Insomnia comorbid with a mental disorder",
                  "The **most common** type. About **35%** of insomnia patients seen at sleep centers have a mental disorder; **major depressive disorder (MDD)** leads, followed by bipolar disorder, schizophrenia and generalized anxiety disorder."
                ],
                [
                  "Insomnia comorbid with a medical condition",
                  "Any **painful** condition can disturb sleep, and poor sleep **lowers the pain threshold**, a vicious cycle; easing either helps the other. In other conditions the insomnia is secondary: treating nocturnal **GERD** improves sleep, but hypnotics seldom relieve GERD. **COPD** brings both sleep-onset and maintenance insomnia; **neurodegenerative disorders** are often accompanied by sleep disorders."
                ],
                [
                  "Insomnia due to a drug or substance",
                  "Prescription drugs, alcohol, caffeine and illicit stimulants (see the next section)."
                ]
              ]
            },
            {
              "type": "list",
              "title": "Typical features of psychophysiologic insomnia (Table 15-6)",
              "items": [
                "**Excessive worry** about being unable to sleep",
                "**Trying too hard** to sleep",
                "**Rumination**: cannot clear the mind in bed",
                "**Muscle tension** rises on getting into bed",
                "Other **somatic signs of anxiety**",
                "**Falls asleep when not trying** (for example, in front of the television)",
                "**Sleeps better away from own bedroom**"
              ],
              "ordered": true
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "The giveaway for PPI",
              "text": "The patient **sleeps when not trying** and **sleeps better somewhere else**. Both point to a conditioned link between the person's own bed and arousal."
            },
            {
              "type": "case",
              "title": "Ms. W, 41, sleepless since moving cities",
              "text": "A meticulous laboratory worker had 2.5 years of poor sleep that began after relocating for a new job: 30 to 45 minutes to fall asleep, waking every 1 to 2 hours, about 4.5 hours of sleep a night, tired and edgy but rarely napping. She saw the bedroom as a place of sleeplessness, sometimes could not tell if she was asleep, and called herself a Type-A worrier who could not relax. Mood, appetite and libido were otherwise normal, sleep hygiene was good, and she used no caffeine, alcohol or drugs. Her work was still accurate, though she double-checked it. Over 18 months she was labeled depressed, anxious and ADHD and given fluoxetine, antihistamines, trazodone, zolpidem 5 mg, buspirone and paroxetine, all of which failed or caused side effects, before she asked for a sleep center referral.",
              "point": "Noise and adjustment explain the onset, but a **conditioned, self-perpetuating insomnia (PPI)** keeps it going. Do not diagnose depression from insomnia alone; document the pattern with a **sleep log** and lead with **behavioral treatment**, using sedatives cautiously."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Insomnia is not 'masked depression'",
              "text": "Many patients are labeled depressed on the strength of an insomnia complaint alone and treated unsuccessfully with antidepressants. Consider a mood disorder in sleep maintenance and early-waking insomnia, but look for **other signs of depression** before diagnosing it. Idiopathic insomnia requires a **childhood onset**."
            }
          ]
        },
        {
          "id": "s15-ins-subst",
          "title": "Insomnia due to drugs and substances",
          "blocks": [
            {
              "type": "p",
              "text": "Many prescription drugs disturb sleep even when taken correctly."
            },
            {
              "type": "list",
              "title": "Medications and drugs causing insomnia (Table 15-7)",
              "items": [
                "Antiparkinsonian drugs",
                "Decongestants (for example, **pseudoephedrine**)",
                "Anorectics",
                "Stimulants",
                "Antiepileptic medications",
                "**SSRI** antidepressants",
                "Caffeine",
                "Alcohol (**rebound** insomnia)",
                "Sedatives (**rebound** insomnia)"
              ],
              "cols": 2
            },
            {
              "type": "steps",
              "title": "How alcohol and hypnotics backfire",
              "items": [
                [
                  "Initial effect",
                  "**Alcohol and hypnotics** shorten sleep latency through sedation; alcohol can relax a tense person."
                ],
                [
                  "Later in the night",
                  "Alcohol-induced sleep becomes **fragmented by arousals**."
                ],
                [
                  "Tolerance",
                  "Higher or more frequent doses are needed to keep the effect."
                ],
                [
                  "Withdrawal or tolerance",
                  "Insomnia **rebounds**, often **worse than the original** problem."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Caffeine and chocolate",
              "items": [
                [
                  "Methylxanthines",
                  "**Caffeine** (coffee) and **theobromine** (chocolate) are CNS psychostimulants."
                ],
                [
                  "Effects on sleep",
                  "Psychostimulants **increase sleep latency**, **reduce sleep efficiency** and **decrease total sleep time**."
                ],
                [
                  "Half-life",
                  "Caffeine's half-life is **3 to 7 hours**, so large amounts through the day or smaller amounts near bedtime can disturb sleep."
                ],
                [
                  "Hypersensitivity",
                  "Some people react to **any** coffee or chocolate with trouble falling asleep, or wake after a couple of hours and cannot return to sleep."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Illicit **stimulants** such as **cocaine** and **amphetamines** disturb both sleep onset and maintenance."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Opposite withdrawal patterns",
              "text": "Stopping **alcohol or sedatives** produces **rebound insomnia**. Stopping **stimulants** produces **hypersomnolence**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Ask about chocolate, not only coffee",
              "text": "A patient who has cut out coffee may still take caffeine and theobromine in chocolate, tea or decongestants. A careful drug and diet history often uncovers a reversible cause."
            }
          ]
        },
        {
          "id": "s15-ins-ddx",
          "title": "Differential diagnosis and comorbidity",
          "blocks": [
            {
              "type": "p",
              "text": "As with every sleep–wake disorder, the differential spans other sleep–wake disorders, psychiatric and medical conditions, medications and substances and normal variants."
            },
            {
              "type": "table",
              "caption": "Differential diagnosis of insomnia disorder",
              "head": [
                "Category",
                "Consider"
              ],
              "rows": [
                [
                  "Psychiatric disorders",
                  "**MDD**, **bipolar disorder**, **PTSD**"
                ],
                [
                  "Medications and substances",
                  "See **Table 15-7**"
                ],
                [
                  "Other sleep–wake disorders",
                  "**Circadian rhythm** sleep–wake disorder, **restless legs syndrome**, **sleep-related breathing** disorders, **narcolepsy**, **parasomnias**"
                ],
                [
                  "Normal variant or context",
                  "A **short sleeper**; poor sleep in response to an **acute stressor**"
                ]
              ]
            },
            {
              "type": "list",
              "title": "Common psychiatric comorbidity (Table 15-23)",
              "items": [
                "Bipolar disorder",
                "Generalized anxiety disorder",
                "Major depressive disorder",
                "Posttraumatic stress disorder",
                "Schizophrenia"
              ],
              "cols": 2
            },
            {
              "type": "defs",
              "title": "What insomnia means in each disorder",
              "items": [
                [
                  "MDD",
                  "Nearly **90%** of patients with MDD have insomnia, and insomnia is an **independent risk factor for suicide** in MDD."
                ],
                [
                  "PTSD",
                  "Insomnia **predicts who will develop PTSD** after a trauma."
                ],
                [
                  "Bipolar disorder",
                  "**Sleep loss can precipitate mania**."
                ],
                [
                  "Schizophrenia",
                  "Patients may **deny having slept** although objective measures show normal sleep."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Treat insomnia in depression as a suicide risk",
              "text": "Because insomnia independently raises suicide risk in MDD, ask about suicidal thinking whenever a depressed patient reports poor sleep, and treat the insomnia actively."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Sleep loss and mania",
              "text": "In bipolar disorder, **lack of sleep** can trigger a **manic episode**: protect sleep in these patients."
            }
          ]
        },
        {
          "id": "s15-ins-drugs",
          "title": "Medication for insomnia",
          "blocks": [
            {
              "type": "steps",
              "title": "How the hypnotic options developed",
              "items": [
                [
                  "Benzodiazepines",
                  "For many years the **most commonly prescribed** sedative–hypnotics for insomnia."
                ],
                [
                  "Other benzodiazepine-receptor agonists",
                  "**Zolpidem** and similar drugs followed."
                ],
                [
                  "Newer mechanisms",
                  "Low-dose antihistamine **doxepin**, melatonin receptor agonist **ramelteon** and orexin antagonist **suvorexant**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "American Academy of Sleep Medicine guideline",
              "head": [
                "Recommended",
                "Recommended against"
              ],
              "rows": [
                [
                  "**Suvorexant**, **eszopiclone**, **zaleplon**, **zolpidem**, **triazolam**, **temazepam**, **ramelteon**, **doxepin** (specific agents suit sleep-onset or sleep-maintenance insomnia)",
                  "**Trazodone**, **tiagabine**, **diphenhydramine**, **melatonin**, **tryptophan**, **valerian**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Off-label sedating antidepressants",
              "text": "Prescribing sedating antidepressants for insomnia is **commonplace but unapproved and not recommended**; trazodone is on the guideline's 'against' list."
            },
            {
              "type": "defs",
              "title": "Nonprescription options",
              "items": [
                [
                  "Over-the-counter (OTC) aids",
                  "Sedating **antihistamines**, protein precursors and other substances. Unlike prescription drugs, which must be proven **safe and effective** in rigorous trials for FDA approval, OTC products are **virtually untested**."
                ],
                [
                  "L-tryptophan",
                  "Withdrawn after an outbreak of **eosinophilia**, which was traced to a **single manufacturer**; it is now sold OTC again."
                ],
                [
                  "Melatonin",
                  "The leading self-administered supplement for sleeplessness. **Low-dose** melatonin can help when used to **realign (reentrain) the circadian rhythm** with the desired schedule."
                ]
              ]
            },
            {
              "type": "list",
              "title": "Duration of use",
              "items": [
                "Most hypnotics are approved for **short-term** use. The book notes that **zolpidem modified-release**, **eszopiclone** and **ramelteon** are approved for longer-term use.",
                "Used properly, hypnotics give **immediate** relief.",
                "Insomnia usually **returns when the drug is stopped**."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Melatonin: no for insomnia, yes for the clock",
              "text": "The guideline recommends **against** melatonin for insomnia, yet **low-dose** melatonin is useful to **reentrain circadian rhythms**. See Chapter 21.5 for sleep drugs."
            },
            {
              "type": "update",
              "year": "2019–2022",
              "title": "Newer hypnotics and a boxed warning",
              "text": "Two more **orexin receptor antagonists** joined suvorexant: **lemborexant** (2019) and **daridorexant** (2022). In **April 2019** the FDA added a **boxed warning** to **zolpidem, zaleplon and eszopiclone** for **complex sleep behaviors** such as sleepwalking and sleep driving; they are contraindicated after such an episode. Details and doses are in **section 21.5**.",
              "source": "FDA, boxed warning for certain prescription insomnia medicines, April 2019; Belsomra, Dayvigo and Quviviq prescribing information"
            }
          ]
        },
        {
          "id": "s15-cbti",
          "title": "Cognitive-behavioral therapy for insomnia (CBTi)",
          "blocks": [
            {
              "type": "p",
              "text": "CBTi combines **behavioral** and **cognitive** techniques to correct dysfunctional sleep behaviors, misperceptions and distorted, disruptive thoughts about sleep."
            },
            {
              "type": "list",
              "title": "Components",
              "items": [
                "Universal **sleep hygiene**",
                "**Stimulus control** therapy",
                "**Sleep restriction** therapy",
                "**Relaxation** therapies",
                "**Biofeedback**",
                "**Cognitive** therapy and paradoxical intention"
              ],
              "cols": 2
            },
            {
              "type": "table",
              "caption": "CBTi compared with hypnotics",
              "head": [
                "",
                "CBTi",
                "Hypnotics"
              ],
              "rows": [
                [
                  "Short-term benefit",
                  "Similar to medication",
                  "Immediate"
                ],
                [
                  "Durability",
                  "Lasting, even **36 months** after treatment",
                  "Insomnia often returns on stopping, sometimes with **rebound**"
                ],
                [
                  "Adverse effects",
                  "**None apparent**",
                  "Tolerance, withdrawal, rebound"
                ],
                [
                  "Onset",
                  "**Slower**: several weeks",
                  "Fast"
                ]
              ]
            },
            {
              "type": "p",
              "text": "CBTi reliably improves the **number and duration of awakenings** and **sleep latency**."
            },
            {
              "type": "list",
              "title": "Limitations and barriers",
              "items": [
                "No established 'best practice' for the **number or length of sessions**.",
                "Most data do not compare the **individual components**; however, **sleep hygiene education alone** has an **insignificant** effect, which favors a **multicomponent** approach.",
                "Practical barriers: few **trained specialists**, **cost** and lack of **insurance coverage**.",
                "Patients arrive **desperate** and want a **quick fix** or a procedure; CBTi needs them to be **active participants** who attend multiple sessions and accept that changing thoughts and behaviors can help."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "A small step into psychodynamics",
              "text": "For some long-standing insomniacs, being an insomniac becomes part of their **identity**, with possible **primary or secondary gain**. The **negative emotional response** to insomnia (anger at losing control, feeling a failure) keeps it chronic. These patients tend to **internalize emotion**, need **control**, have interpersonal difficulties and resent past events. Addressing that response, and reframing failure as a challenge, prevents poor response and relapse."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Sleep hygiene alone is not CBTi",
              "text": "Sleep hygiene education by itself produces an **insignificant** improvement and is **less effective than full CBTi**."
            },
            {
              "type": "update",
              "year": "2016–2021",
              "title": "CBTi is first-line treatment",
              "text": "The **American College of Physicians (2016)** recommends **CBTi as the initial treatment** for chronic insomnia in adults, before medication. The **AASM behavioral treatment guideline (2021)** gives CBTi its only **strong** recommendation and advises **against sleep hygiene education used on its own**. Digital (app-based or online) CBTi helps where trained therapists are scarce.",
              "source": "Qaseem A et al., ACP guideline on chronic insomnia, Annals of Internal Medicine, 2016; Edinger JD et al., AASM guideline on behavioral and psychological treatments for insomnia, Journal of Clinical Sleep Medicine, 2021"
            }
          ]
        },
        {
          "id": "s15-cbti-behav",
          "title": "Sleep hygiene, stimulus control and sleep restriction",
          "blocks": [
            {
              "type": "h",
              "text": "Universal sleep hygiene"
            },
            {
              "type": "p",
              "text": "Sleep hygiene targets **modifiable** lifestyle and environmental factors that raise **arousal near bedtime** or **shift circadian rhythms**, such as irregular hours, excess caffeine, heavy meals before bed and too little exercise."
            },
            {
              "type": "list",
              "title": "Using it well",
              "items": [
                "Because habits are hard to change, choose **only 1 or 2 items** together with the patient.",
                "Review the routine and its **irregularity**: day-to-day **variability** is close to the essence of insomnia and can hide the causes.",
                "A carefully explained program with **follow-up** is inexpensive and helps even when the main cause is **physical**.",
                "It is **less effective than CBTi**."
              ]
            },
            {
              "type": "table",
              "caption": "Do's and don'ts for good sleep hygiene (Table 15-24)",
              "head": [
                "Do",
                "Don't"
              ],
              "rows": [
                [
                  "Keep **regular** bedtime and rising hours",
                  "**Nap**"
                ],
                [
                  "Have a **light snack** if hungry before bed",
                  "**Watch the clock** to gauge how bad the insomnia is"
                ],
                [
                  "Exercise on a **regular** schedule",
                  "**Exercise right before bed** to tire yourself out"
                ],
                [
                  "Allow about **an hour to wind down**",
                  "Watch **television**, **read**, eat, exercise or talk on the phone **in bed**"
                ],
                [
                  "**Write down worries** at bedtime and deal with them in the morning",
                  "Eat a **heavy meal** before bed"
                ],
                [
                  "Keep the bedroom **cool, dark and quiet**",
                  "Drink **coffee in the afternoon or evening**; **smoke** when you cannot sleep; use **alcohol** to fall asleep"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Stimulus control therapy"
            },
            {
              "type": "p",
              "text": "A **deconditioning** method that strengthens the bed as a cue for sleep and breaks its link with wakefulness, reducing both **primary and reactive** factors in insomnia."
            },
            {
              "type": "steps",
              "title": "Stimulus control instructions (Table 15-25)",
              "items": [
                [
                  "Sleepy only",
                  "Go to bed **only when sleepy**."
                ],
                [
                  "Bed for sleep",
                  "Use the bed **only for sleeping**: no television, reading, eating or phone calls."
                ],
                [
                  "Get up if awake",
                  "If unable to sleep after **a few minutes** (without clock-watching), get up, go to **another room** and do something nonarousing until sleepy; repeat as needed."
                ],
                [
                  "Fixed wake time",
                  "Rise at the **same time every morning** regardless of bedtime, sleep obtained or day of the week, and **never nap**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Warn patients it takes time",
              "text": "Stimulus control works, but results may take **weeks to a month**. With consistent practice, insomnia episodes become **less frequent and less severe**."
            },
            {
              "type": "h",
              "text": "Sleep restriction therapy"
            },
            {
              "type": "p",
              "text": "For patients who **lie awake in bed**, cutting time in bed consolidates sleep and raises **sleep efficiency** (time asleep as a percentage of time in bed)."
            },
            {
              "type": "steps",
              "title": "Running sleep restriction",
              "items": [
                [
                  "Shrink time in bed",
                  "Match time in bed to sleep obtained (for example, someone sleeping 5 of 8 hours in bed gets less time in bed), but **never under 4 hours** a night."
                ],
                [
                  "Warn about sleepiness",
                  "Explain the hazards of **daytime sleepiness**."
                ],
                [
                  "No sleep outside the window",
                  "Avoid sleep at other times; **older adults** may take a **30-minute nap**."
                ],
                [
                  "Track efficiency",
                  "Monitor sleep efficiency each night."
                ],
                [
                  "Extend gradually",
                  "When efficiency reaches **85%** averaged over **5 nights**, add **15 minutes** to time in bed."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "The sleep restriction numbers",
              "text": "Floor of **4 hours** in bed; extend by **15 minutes** once sleep efficiency is **85%** over **5 nights**; only the **elderly** may nap (**30 minutes**). Result: a gradual, steady decline in nighttime wakefulness."
            }
          ]
        },
        {
          "id": "s15-cbti-cog",
          "title": "Relaxation, biofeedback and cognitive techniques",
          "blocks": [
            {
              "type": "h",
              "text": "Relaxation therapy"
            },
            {
              "type": "p",
              "text": "What matters most is doing it **properly**. Self-hypnosis, progressive relaxation, guided imagery and deep breathing all work **if they produce relaxation**; find the best technique for each patient, and remember that **not every patient** needs help relaxing."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Progressive muscle relaxation",
                  "Best for patients with **muscle tension**. Tense each muscle group for **5 to 6 seconds**, then relax for **20 to 30 seconds**, working from **head to feet**, noticing the contrast."
                ],
                [
                  "Guided imagery",
                  "Visualize a pleasant, restful scene using **all the senses**."
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Abdominal breathing (Table 15-26)",
              "items": [
                [
                  "Breathe normally",
                  "Lying **supine**, breathe through mouth or nose, whichever is comfortable, and notice the pattern."
                ],
                [
                  "Shift to the abdomen",
                  "Keeping the rhythm, breathe more with the **abdomen** and less with the chest."
                ],
                [
                  "Pause and evaluate",
                  "Pause about **half a second** after each in-and-out cycle and judge its smoothness; breaths gradually become uniform."
                ],
                [
                  "Focus on one spot",
                  "Find where the air is felt best moving in and out and concentrate there."
                ],
                [
                  "Let thoughts float away",
                  "Visualize intrusive thoughts drifting off; if there are too many, **stop and try later**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Practice by day before using at night",
              "text": "Practice breathing exercises at least **20 minutes a day for 2 weeks**, mastering each step before the next. Then use the technique **once at bedtime for 30 minutes**; if it fails, try again another night. The technique must **not become linked with failing to sleep**."
            },
            {
              "type": "h",
              "text": "Biofeedback"
            },
            {
              "type": "list",
              "items": [
                "Gives cues from physiologic markers of relaxation: **forehead muscle tension** or **finger temperature** (which **rises** as the person relaxes).",
                "Needs thorough training; handing over an **instruction tape** is of little use.",
                "Master the skill **during the day**, preferably **out of bed**, for several weeks so it is **automatic** by the time it is used in bed.",
                "Relaxation methods combine well with sleep hygiene and stimulus control, and they **distract ruminators** from the thoughts that fuel insomnia."
              ]
            },
            {
              "type": "h",
              "text": "Cognitive therapy"
            },
            {
              "type": "p",
              "text": "Adapted from treatment of depression and generalized anxiety, it targets the **negative emotional response** to appraising a sleep situation, which creates arousal that sustains insomnia. Typical distortions are **exaggerating the consequences** of poor sleep and **unrealistic expectations** about sleep need."
            },
            {
              "type": "steps",
              "title": "Three steps of cognitive therapy",
              "items": [
                [
                  "Identify",
                  "Find the maladaptive cognitions."
                ],
                [
                  "Challenge",
                  "Test their validity."
                ],
                [
                  "Replace",
                  "Substitute more adaptive thoughts."
                ]
              ]
            },
            {
              "type": "case",
              "title": "DH, 42, insomnia for 5 years",
              "text": "Insomnia began with a job loss and a colicky newborn but persisted after he found a better job and the baby slept through the night. Low back pain and a spouse with periodic limb movement disorder kept it going. He spent 8 to 9 hours in bed for 4 to 5 hours of broken sleep, watched television in bed and watched the clock for hours. On waking he thought: 'I hardly slept. I should be able to sleep more. Something must be wrong with me. I'll be too tired to concentrate on anything today.'",
              "point": "Name the distortions: **'I should sleep more'** reflects a need for **control**; **'too tired to concentrate on anything'** is **misattribution** and **all-or-nothing thinking**; **'something must be wrong with me'** is **catastrophizing** and **emotional reasoning**. Precipitating factors had resolved; perpetuating factors and thoughts now drive the insomnia."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Paradoxical intention",
                  "Based on the idea that **performance anxiety** blocks sleep onset. The patient tries to **stay awake as long as possible**; anxiety falls and sleep latency improves. Evidence is **conflicting**, **compliance** is a barrier, but it helps a **limited number** of patients."
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Hypersomnolence and narcolepsy",
      "sections": [
        {
          "id": "s15-hyp",
          "title": "Hypersomnolence disorder",
          "blocks": [
            {
              "type": "p",
              "text": "Hypersomnolence means **excessive sleepiness and time asleep**: drowsiness and reduced attention by day. It is serious, potentially **life-threatening** and affects family, colleagues and the public. It is **not caused by disrupted sleep or circadian problems** and probably reflects a fundamental **neurologic dysfunction of sleep regulation**."
            },
            {
              "type": "p",
              "text": "Suspect it when a patient feels **sleepy despite adequate sleep**, **naps** by day and wakes **unrefreshed**."
            },
            {
              "type": "table",
              "caption": "Hypersomnolence in three systems (Table 15-8)",
              "head": [
                "Element",
                "DSM-5",
                "ICSD-3",
                "ICD-10"
              ],
              "rows": [
                [
                  "Name",
                  "**Hypersomnolence disorder**",
                  "**Idiopathic hypersomnia**",
                  "Nonorganic hypersomnia"
                ],
                [
                  "Duration",
                  "At least **3 times a week** for at least **3 months**",
                  "",
                  ""
                ],
                [
                  "Symptoms",
                  "1. **Repeated sleep episodes** in the same day. 2. Main sleep over **9 hours** but **nonrestorative**. 3. **Difficulty becoming fully awake** when woken",
                  "Subjective sleepiness; **MSLT mean sleep latency ≤8 minutes**; **fewer than 2 sleep-onset REM periods** on the MSLT and overnight polysomnogram",
                  "Excess daytime sleepiness; **sleep attacks**; difficulty becoming fully awake"
                ],
                [
                  "Number needed",
                  "**At least one**",
                  "All",
                  ""
                ],
                [
                  "Exclusions (not due to)",
                  "Another sleep disorder; substance use; another mental or medical disorder",
                  "**Cataplexy**; **hypocretin-1 deficiency**; sleep deprivation; other causes of sleepiness",
                  "Medical cause; **narcolepsy**"
                ],
                [
                  "Impact",
                  "Significant distress or impairment",
                  "",
                  ""
                ],
                [
                  "Specifiers",
                  "With mental disorder; with medical condition; with another sleep disorder",
                  "",
                  ""
                ],
                [
                  "Severity",
                  "**Mild**: 1 to 2 days a week. **Moderate**: 3 to 4 days. **Severe**: 5 to 7 days",
                  "",
                  ""
                ],
                [
                  "Course",
                  "**Acute**: under 1 month. **Subacute**: 1 to 3 months. **Persistent**: over 3 months",
                  "",
                  ""
                ],
                [
                  "Comment",
                  "",
                  "May be **one disorder or several** with different mechanisms",
                  "Usually associated with **another mental disorder**"
                ]
              ],
              "wide": true
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "What separates idiopathic hypersomnia from narcolepsy",
              "text": "Both show a short MSLT latency (**≤8 minutes**), but idiopathic hypersomnia has **fewer than 2 SOREMPs** and **no cataplexy or hypocretin deficiency**."
            },
            {
              "type": "defs",
              "title": "Test findings",
              "items": [
                [
                  "Sleep pattern (Figure 15-2)",
                  "Looks like that of a **sleep-deprived** healthy person: rapid sleep onset, almost uninterrupted sleep and great difficulty arousing."
                ],
                [
                  "Key difference",
                  "The pattern **persists after several nights of extended sleep**, unlike true sleep deprivation."
                ],
                [
                  "Slow-wave sleep",
                  "May be **elevated**, continuing to alternate with REM through the night; the patient wakes **unrefreshed**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Differential and comorbidity",
              "head": [
                "",
                "Disorders"
              ],
              "rows": [
                [
                  "Psychiatric differential",
                  "**MDD** or **bipolar depression** (more sleep or fatigue)"
                ],
                [
                  "Medications and substances",
                  "**Sedative–hypnotics**, **opioids**"
                ],
                [
                  "Other sleep–wake disorders",
                  "Circadian rhythm disorder, **sleep-related breathing** disorders, parasomnias; **poor sleep quality** of any cause"
                ],
                [
                  "Normal variant",
                  "**Long sleepers** who simply need more sleep"
                ],
                [
                  "Common comorbidity (Table 15-23)",
                  "Bipolar disorder; depressive disorders (especially **seasonal depression**); neurodegenerative disorders; **stimulant use disorders**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Watch for stimulant misuse",
              "text": "Medication use disorders, especially with **stimulants**, are common as patients try to stay awake. Treatment (the book lists no approved drug; modafinil or psychostimulants are used) is covered with narcolepsy below."
            }
          ]
        },
        {
          "id": "s15-kls",
          "title": "Kleine–Levin syndrome",
          "blocks": [
            {
              "type": "p",
              "text": "Kleine–Levin syndrome is the **best-recognized recurrent hypersomnia**, though uncommon: **recurrent periods of prolonged sleep** (the patient can be roused) separated by periods of **normal sleep and alert waking**."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Who",
                  "Mainly **males in early adolescence**, but also females and older people."
                ],
                [
                  "Onset",
                  "First attack almost always between **10 and 21 years**; rare reports of onset in the **fourth and fifth decades**."
                ],
                [
                  "Classic episode",
                  "**Extreme sleepiness** (18- to 20-hour sleep periods), **voracious eating**, **hypersexuality** and **disinhibition** (for example, aggression)."
                ],
                [
                  "Waking periods during episodes",
                  "**Social withdrawal** and return to bed at the first chance."
                ],
                [
                  "Timing",
                  "Episodes last **a few days to several weeks** and occur **1 to 10 times a year**."
                ],
                [
                  "Variants",
                  "A **monosymptomatic hypersomnolent** form exists."
                ],
                [
                  "Inheritance",
                  "Usually **sporadic**; familial cases are reported."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "The Kleine–Levin tetrad",
              "text": "Recurrent **hypersomnia** + **hyperphagia** + **hypersexuality** + **disinhibition** in an **adolescent boy**, with normal functioning between episodes."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Between episodes the patient is well",
              "text": "The **episodic** course with healthy sleep and alertness between attacks distinguishes Kleine–Levin syndrome from the persistent sleepiness of hypersomnolence disorder and narcolepsy."
            }
          ]
        },
        {
          "id": "s15-narc",
          "title": "Narcolepsy: presentation and criteria",
          "blocks": [
            {
              "type": "p",
              "text": "People with narcolepsy have an **overwhelming desire to sleep** and may fall asleep suddenly, even when inappropriate: irresistible sleep episodes, lapses into sleep or frequent napping."
            },
            {
              "type": "defs",
              "title": "Ancillary symptoms",
              "items": [
                [
                  "Cataplexy",
                  "Sudden **loss of muscle tone** with full or partial **preserved consciousness**, usually triggered by **laughter** or another strong emotion. Ranges from brief **knee weakness** to **total paralysis**; lasts **seconds to minutes**. The patient usually **cannot speak** and may fall."
                ],
                [
                  "Sleep paralysis",
                  "Persistence of **REM atonia** into the transition to wakefulness."
                ],
                [
                  "Hypnagogic or hypnopompic hallucinations",
                  "Vivid perceptions on falling asleep or on waking."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Hypocretin changed the definition",
              "text": "The discovery that narcolepsy is strongly associated with **hypocretin (orexin) deficiency** changed diagnostic practice. Cataplexy was once a core feature, but variants **without cataplexy** are now recognized."
            },
            {
              "type": "table",
              "caption": "Narcolepsy in three systems (Table 15-9)",
              "head": [
                "Element",
                "DSM-5",
                "ICSD-3",
                "ICD-10"
              ],
              "rows": [
                [
                  "Name",
                  "Narcolepsy",
                  "Narcolepsy",
                  "Narcolepsy and cataplexy"
                ],
                [
                  "Core requirement",
                  "Recurrent **irresistible need to sleep**, lapsing into sleep or napping, at least **3 times a week** for **3 months**",
                  "**Excessive sleepiness**",
                  "Daytime sleepiness despite adequate sleep, often with cataplexy and uncontrollable lapses in consciousness"
                ],
                [
                  "Plus",
                  "**At least one** of: 1. **Cataplexy**. 2. **Hypocretin (orexin) deficiency** in CSF. 3. Polysomnography **REM latency ≤15 minutes**, or **MSLT mean sleep latency ≤8 minutes** with **2 or more sleep-onset REM periods**",
                  "Cataplexy and/or **hypocretin-1 deficiency**; **MSLT mean latency ≤8 minutes** with **2 SOREMPs** (REM within 15 minutes of sleep onset)",
                  ""
                ],
                [
                  "Types",
                  "",
                  "**Type 1**: all criteria met. **Type 2**: **neither** cataplexy nor hypocretin deficiency",
                  ""
                ],
                [
                  "Exclusions",
                  "Substance use disorder; another sleep–wake disorder",
                  "Sleep deprivation; another sleep disorder",
                  ""
                ]
              ],
              "wide": true
            },
            {
              "type": "update",
              "title": "Correction: the DSM-5 narcolepsy criteria",
              "text": "Table 15-9's symptom list is garbled. DSM-5 requires recurrent periods of an **irresistible need to sleep**, lapsing into sleep or napping, at least **3 times a week for 3 months**, plus **at least one** of: **cataplexy** at least a few times a month; **CSF hypocretin-1** deficiency (**110 pg/mL or less**, or a third or less of normal); or a sleep study showing **REM latency of 15 minutes or less** overnight, or an **MSLT** mean sleep latency of **8 minutes or less** with **2 or more** sleep-onset REM periods.",
              "source": "DSM-5 (American Psychiatric Association, 2013)"
            },
            {
              "type": "list",
              "title": "DSM-5 subtype specifiers",
              "items": [
                "Narcolepsy **without cataplexy but with hypocretin deficiency**",
                "Narcolepsy **with cataplexy but without hypocretin deficiency**",
                "**Autosomal dominant cerebellar ataxia, deafness and narcolepsy**: genetic, with **late onset** in the **30s and 40s**",
                "**Autosomal dominant narcolepsy, obesity and type 2 diabetes**: linked to a mutation in the **myelin oligodendrocyte glycoprotein** gene",
                "Narcolepsy **secondary to another medical condition**"
              ]
            },
            {
              "type": "table",
              "caption": "DSM-5 severity",
              "head": [
                "Severity",
                "Features"
              ],
              "rows": [
                [
                  "Mild",
                  "Cataplexy **less than once a week**; **1 or 2 naps** a day; nighttime sleep mildly or intermittently disturbed"
                ],
                [
                  "Moderate",
                  "Cataplexy about **once a day**; disturbed nighttime sleep; **multiple naps** needed"
                ],
                [
                  "Severe",
                  "**Nearly constant** sleepiness; **multiple attacks a day**; disturbed nighttime sleep; **resistant to medication**"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Test findings",
              "items": [
                [
                  "Overnight polysomnogram",
                  "When the diagnosis is not clinically obvious, shows a characteristic **sleep-onset REM period (SOREMP)**."
                ],
                [
                  "Figure 15-3",
                  "Normal sleep onset brings fading alpha and slow rolling eye movements. In narcolepsy, within about **25 seconds** there is an abrupt **loss of muscle tone** with **rapid eye movements**."
                ],
                [
                  "MSLT",
                  "**Rapid sleep onset** and usually **one or more SOREMPs**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "SOREMP is the signature",
              "text": "REM sleep appearing **within minutes of sleep onset** characterizes narcolepsy and is part of its criteria. Cataplexy is thought to be **REM atonia intruding into wakefulness**."
            }
          ]
        },
        {
          "id": "s15-narc-ddx",
          "title": "Narcolepsy: differential and comorbidity",
          "blocks": [
            {
              "type": "p",
              "text": "The differential overlaps with that of **hypersomnolence disorder** (depression, sedating drugs, breathing and circadian disorders, long sleepers). Cataplexy itself may be mistaken for **seizures** or **neurologic movement disorders** such as **chorea**."
            },
            {
              "type": "list",
              "title": "Medical disorders causing cataplexy (Table 15-22)",
              "items": [
                "Disorders affecting the **hypothalamus**",
                "**Tumors**",
                "**Sarcoidosis**",
                "**Multiple sclerosis** plaques",
                "**Paraneoplastic** syndrome",
                "**Niemann–Pick type C** disease",
                "**Coffin–Lowry** syndrome"
              ],
              "cols": 2
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Secondary cataplexy",
              "text": "The book states that cataplexy caused by these medical disorders **precludes a diagnosis of narcolepsy**. Narcolepsy associated with **multiple sclerosis, myotonic dystrophy, Prader–Willi syndrome, Parkinson disease** and **multisystem atrophy** usually occurs **without cataplexy**."
            },
            {
              "type": "table",
              "caption": "Common comorbidity of narcolepsy (Table 15-23)",
              "head": [
                "Psychiatric",
                "Medical"
              ],
              "rows": [
                [
                  "**Anxiety**; **depressive disorders**",
                  "**Obstructive sleep apnea**; headache; hyperlipidemia; hypertension; **obesity**; peripheral neuropathy; **thyroid disease** and other endocrinopathies"
                ]
              ]
            },
            {
              "type": "case",
              "title": "Mr. J, 28, 'tired of being tired'",
              "text": "An accountant had about 10 years of daytime sleepiness that began in college, where long naps and late study nights derailed his grades and social life; he now felt depressed, isolated and hopeless. In high school he had felt best on 10 hours of sleep. He drank 8 to 10 cups of coffee a day, used no alcohol or drugs, had a BMI of 29 and normal labs including TSH. Despite better sleep hygiene and a month off caffeine, he still overslept on workdays, slept 10:30 pm to 10:00 am on weekends, woke unrefreshed, dozed at his desk after lunch for 20 to 60 minutes and had nodded off while driving. He lived alone but had been told he snores loudly; no gasping, hypnagogic hallucinations or sleep paralysis, but possible weakness during rare heated arguments.",
              "point": "Chronic hypersomnia has a broad differential: **OSA** (overweight, loud snoring, no bed partner to witness apneas), **idiopathic hypersomnia**, **sleep deprivation in a long sleeper**, **mood disorder** and **narcolepsy** (equivocal cataplexy; a desire for 10 hours of sleep is unusual). **Polysomnography** is recommended because these disorders need **lifelong treatment** and carry real morbidity and mortality."
            },
            {
              "type": "table",
              "caption": "Clues in the hypersomnia differential (from Mr. J)",
              "head": [
                "Possibility",
                "Points for or against"
              ],
              "rows": [
                [
                  "Narcolepsy",
                  "**Clear cataplexy** strongly indicates it; vague weakness with arguments is **equivocal**; a persistent need for **10 hours** of sleep is atypical"
                ],
                [
                  "Long sleeper",
                  "Needs **10 to 12 hours**, but **no daytime sleepiness** when consistently allowed a full night"
                ],
                [
                  "Idiopathic hypersomnia",
                  "Long sleep and **groggy awakening**; may show **autonomic dysfunction** or **raised slow-wave sleep** on polysomnography"
                ],
                [
                  "Mood disorder",
                  "Low-grade chronic depression can mimic hypersomnolence; use polysomnography, interview and **psychometric testing**. He links his mood to sleepiness, not the reverse"
                ],
                [
                  "Obstructive sleep apnea",
                  "Overweight and **loud snoring**; many patients are unaware of gasping, and apneas are usually reported by **family**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Who witnesses the apneas?",
              "text": "Patients often do not know they stop breathing. When someone **sleeps alone**, absence of reported apneas means little; order a sleep study."
            }
          ]
        },
        {
          "id": "s15-narc-tx",
          "title": "Treating narcolepsy and hypersomnolence",
          "blocks": [
            {
              "type": "p",
              "text": "Narcolepsy **cannot be cured**, but its symptoms can be managed; **drug therapy is the treatment of choice**."
            },
            {
              "type": "table",
              "caption": "Drug treatment of narcolepsy",
              "head": [
                "Target",
                "Options"
              ],
              "rows": [
                [
                  "Sleepiness: wake-promoting agents",
                  "**Modafinil** or **armodafinil**"
                ],
                [
                  "Sleepiness: traditional psychostimulants",
                  "**Amphetamines** and their derivatives"
                ],
                [
                  "Sleepiness: FDA-approved newer agents",
                  "**Pitolisant** (selective **H3 receptor antagonist/inverse agonist**); **solriamfetol** (selective **norepinephrine–dopamine reuptake inhibitor**)"
                ],
                [
                  "Cataplexy: REM-suppressing antidepressants",
                  "**Imipramine** and **protriptyline** (often very effective); **SSRIs** (popular for fewer side effects than tricyclics)"
                ],
                [
                  "Cataplexy, sleep and sleepiness",
                  "**Sodium oxybate**: reduces cataplexy even when thought **intractable**, and also improves nighttime sleep and some daytime sleepiness"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Why antidepressants treat cataplexy",
              "text": "Cataplexy is presumed to be **REM sleep phenomena intruding into wakefulness**, so drugs that **suppress REM sleep** reduce it."
            },
            {
              "type": "list",
              "title": "The rest of the narcolepsy plan",
              "items": [
                "**Scheduled naps**",
                "**Lifestyle adjustment**",
                "**Psychological counseling**",
                "**Drug holidays** to reduce tolerance",
                "Careful monitoring of **refills**, general health and **cardiac status**"
              ],
              "cols": 2
            },
            {
              "type": "h",
              "text": "Hypersomnolence disorder"
            },
            {
              "type": "list",
              "items": [
                "Usually treated with **medication**, although the book notes **no drug is approved** for it (see the update below).",
                "**Modafinil** or traditional **psychostimulants** (amphetamines and derivatives) sometimes help, with varying success.",
                "Add lifestyle adjustment, counseling, **drug holidays** if using stimulants and monitoring of refills, health and cardiac status."
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Stimulants need monitoring",
              "text": "Tolerance, misuse and cardiac effects are the reasons for **drug holidays** and close tracking of **refills and cardiac status**. See Chapter 21.6 for stimulants and wake-promoting drugs."
            },
            {
              "type": "update",
              "year": "2021–2026",
              "title": "Newer drugs for narcolepsy and idiopathic hypersomnia",
              "text": "In **August 2021** **low-sodium oxybate** (Xywav) became the **first drug approved for idiopathic hypersomnia** (the ICSD-3 counterpart of hypersomnolence disorder), so the book's statement that none is approved is out of date. **Pitolisant** was approved for children **6 and older** with narcolepsy in **June 2024**. In **August 2026** the FDA approved **oveporexton** (Orzeyful), the first **orexin receptor 2 agonist**, for adults with **narcolepsy type 1**; it replaces the missing hypocretin signal rather than masking sleepiness. **Insomnia** and **urinary frequency** were common in trials, and **DEA scheduling** was still pending at approval. See **sections 21.5 and 21.6** for oxybate forms, pitolisant and solriamfetol.",
              "source": "Jazz Pharmaceuticals and AASM, Xywav approved for idiopathic hypersomnia, August 2021; Wakix pediatric approval, June 2024; Takeda, Orzeyful approval, August 2026"
            }
          ]
        }
      ]
    },
    {
      "title": "Sleep-related breathing disorders",
      "sections": [
        {
          "id": "s15-osa",
          "title": "Obstructive sleep apnea-hypopnea",
          "blocks": [
            {
              "type": "p",
              "text": "Sleep-related breathing disorders interrupt normal respiration during sleep, usually provoking **CNS arousal** and therefore **daytime sleepiness**. They include **large-airway obstruction**, **central** breathing cessation and **hypoventilation** without cessation."
            },
            {
              "type": "defs",
              "title": "Key terms",
              "items": [
                [
                  "Apnea",
                  "Breathing stops for **10 seconds or more** during sleep."
                ],
                [
                  "Hypopnea",
                  "Breathing is **reduced** rather than absent."
                ],
                [
                  "Obstructive, central or mixed",
                  "Obstruction is the **usual** cause; **central (brainstem)** pathology can also be responsible. Events typically cause **arousal**, significant **oxyhemoglobin desaturation** or both."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Sleep apnea symptoms by cause (Table 15-2)",
              "head": [
                "Obstructive sleep apnea",
                "Central sleep apnea"
              ],
              "rows": [
                [
                  "**Excessive sleepiness**; **snoring**; **obesity**; restless sleep; nocturnal awakening with **choking or gasping**; morning **dry mouth**; morning **headaches**; heavy **night sweats**",
                  "Breathing cessations **unrelated to airflow limitation**; **insomnia**; daytime sleepiness; morning headaches"
                ]
              ]
            },
            {
              "type": "p",
              "text": "In **obstructive sleep apnea (OSA)** the airway **partially or fully collapses** during sleep; falling oxygen saturation and increasing respiratory effort cause **arousals** and **sleep fragmentation**. Events can occur in any stage but are most typical in **REM** and **NREM stages 1 and 2**."
            },
            {
              "type": "table",
              "caption": "Risk factors and consequences of OSA",
              "head": [
                "Predisposing factors",
                "Possible consequences"
              ],
              "rows": [
                [
                  "**Male** sex; **middle age**; **obesity**; **micrognathia** (small lower jaw); **retrognathia** (set-back lower jaw); **nasopharyngeal** abnormalities; **hypothyroidism**; **acromegaly**",
                  "**Hypertension**; **erectile failure**; **depression**; **heart failure**; **nocturia**; **polycythemia**; **memory impairment**"
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Sleep-related breathing disorders in three systems (Table 15-10)",
              "head": [
                "Element",
                "DSM-5",
                "ICSD-3",
                "ICD-10"
              ],
              "rows": [
                [
                  "Names",
                  "Breathing-related sleep disorders: **obstructive sleep apnea-hypopnea**, **central sleep apnea**, **sleep-related hypoventilation**",
                  "Sleep-related breathing disorders: central sleep apnea syndromes, obstructive sleep apnea disorders, sleep-related hypoventilation disorders (including **obesity hypoventilation syndrome**)",
                  "Sleep apnea: central; obstructive"
                ],
                [
                  "Obstructive sleep apnea-hypopnea",
                  "Polysomnography shows **at least 5** obstructive apneas or hypopneas per hour **with** nocturnal breathing disturbance (snoring, pauses) or daytime sleepiness or fatigue; **or 15 or more** per hour **regardless of symptoms**",
                  "**15 or more** events per hour, **or 5** obstructive events per hour with daytime fatigue or sleepiness",
                  ""
                ],
                [
                  "Central sleep apnea",
                  "**5 or more central apneas** per hour of sleep on polysomnography",
                  "",
                  ""
                ],
                [
                  "Sleep-related hypoventilation",
                  "Decreased respiration with **raised CO2** on polysomnography",
                  "**Raised alveolar CO2** (direct or end-tidal). Obesity hypoventilation: daytime **PaCO2 over 45 mm Hg** with **BMI over 30 kg/m2**",
                  ""
                ],
                [
                  "Number needed",
                  "OSA: one criterion; CSA and hypoventilation: all",
                  "Same as DSM-5",
                  ""
                ],
                [
                  "Exclusions",
                  "Another sleep disorder; a substance or medication",
                  "Another sleep disorder; a substance or medication",
                  "**Pickwickian syndrome**; **sleep apnea of the newborn**"
                ],
                [
                  "DSM-5 specifiers",
                  "CSA: idiopathic; Cheyne–Stokes breathing; comorbid with opioid use. Hypoventilation: idiopathic; congenital central alveolar; comorbid",
                  "",
                  ""
                ],
                [
                  "DSM-5 severity",
                  "OSA by **apnea-hypopnea index (AHI)**: **mild under 15**, **moderate 15 to 30**, **severe over 30**. CSA: frequency of events plus desaturation and sleep fragmentation. Hypoventilation: degree of hypoxemia and hypercarbia and **end-organ impairment**; **abnormal blood gases while awake** mean more severe illness",
                  "",
                  ""
                ]
              ],
              "wide": true
            },
            {
              "type": "update",
              "title": "Correction: the DSM-5 apnea threshold",
              "text": "Table 15-10 prints the DSM-5 criterion as 5 or fewer events an hour. DSM-5 requires **at least 5** obstructive apneas or hypopneas per hour of sleep **with** snoring, breathing pauses or daytime sleepiness, **or at least 15** per hour **regardless of symptoms**.",
              "source": "DSM-5 (American Psychiatric Association, 2013)"
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "OSA thresholds",
              "text": "**5 or more** obstructive events per hour **plus symptoms**, or **15 or more** per hour **with or without symptoms**. Severity: AHI **under 15** mild, **15 to 30** moderate, **over 30** severe."
            },
            {
              "type": "defs",
              "title": "Polysomnographic findings in OSA (Figure 15-4)",
              "items": [
                [
                  "Airflow",
                  "Repeated periods of **at least 10 seconds** in which nasal and oral airflow stops wholly or partly."
                ],
                [
                  "Effort",
                  "Chest and abdominal leads show **continuing respiratory effort** against the obstruction."
                ],
                [
                  "Oxygen and heart",
                  "**Oxygen saturation falls**; often **bradycardia**, sometimes arrhythmias such as **premature ventricular contractions**."
                ],
                [
                  "Breakthrough",
                  "An **arousal reflex** ends the event, seen as a waking signal and possibly motor artifact on EEG; the patient may move restlessly."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Effort tells obstructive from central",
              "text": "In Figure 15-4, **obstructive** apnea shows rib cage and abdominal effort **throughout** the airflow pause; **central** apnea shows **no effort**; **mixed** apnea begins without effort and **ends with effort**."
            }
          ]
        },
        {
          "id": "s15-csa",
          "title": "Central sleep apnea",
          "blocks": [
            {
              "type": "p",
              "text": "**Central sleep apnea (CSA)** is a **diminished effort to breathe**. What links all its forms is that reduced breathing is **not caused by airway obstruction**."
            },
            {
              "type": "list",
              "title": "Causes",
              "items": [
                "**Heart failure**",
                "**High altitude**",
                "**Brainstem lesions**",
                "Metabolic conditions",
                "Drugs or substances (**CNS depressants**)",
                "Congenital abnormalities",
                "**Positive airway pressure (PAP)** treatment"
              ],
              "cols": 2
            },
            {
              "type": "p",
              "text": "DSM-5 defines **three** subtypes; ICSD-3 adds several more."
            },
            {
              "type": "defs",
              "title": "CSA subtypes",
              "items": [
                [
                  "Idiopathic CSA (DSM-5)",
                  "**Low-normal awake PaCO2** and a **high ventilatory response to CO2**. Presents with daytime sleepiness, insomnia or **waking short of breath**. Cessations are independent of ventilatory effort; polysomnography shows **5 or more central apneas per hour**."
                ],
                [
                  "Cheyne–Stokes breathing (DSM-5)",
                  "Prolonged **crescendo–decrescendo** hyperpnea alternating with apneas and hypopneas of reduced effort. Most common in **older men with congestive heart failure or stroke**. Same presenting symptoms as idiopathic CSA; **5 or more** central apneas and hypopneas per hour."
                ],
                [
                  "CSA comorbid with opioid use (DSM-5)",
                  "Specified when **opioid use disorder** is present; chronic **long-acting opioids** impair neuromuscular respiratory control."
                ],
                [
                  "High-altitude periodic breathing (ICSD-3)",
                  "No longer in DSM-5 but clinically relevant. Central apnea at sleep onset is **universal above 7,600 m** and can occur from **1,500 m**, especially with **rapid ascent**. Apnea alternates with hyperpnea in a **12- to 34-second cycle**."
                ],
                [
                  "Due to a medical disorder without Cheyne–Stokes (ICSD-3)",
                  "Usually a **brainstem lesion** of varied cause; **cardiac and renal** disorders can also cause it. Requires **5 or more** central apneas and hypopneas per hour."
                ],
                [
                  "Due to a drug or substance (ICSD-3)",
                  "Most notably **long-acting opiates**; other agents can also impair control. Central apnea index of **5 or more** per hour."
                ],
                [
                  "Primary sleep apnea of infancy (ICSD-3)",
                  "Prolonged apneas or hypopneas with **hypoxemia, bradycardia** or both in **preterm neonates** with an immature brainstem; worsened by other medical problems."
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Why altitude causes central apnea",
              "items": [
                [
                  "Normal sleep onset",
                  "Medullary pH receptors **raise their set-point** and need a lower pH to drive breathing."
                ],
                [
                  "At altitude",
                  "**Hyperventilation** produces **hypocapnic alkalosis**."
                ],
                [
                  "During sleep",
                  "The alkalosis **reduces ventilation**, giving periodic central apneas."
                ],
                [
                  "Effect on sleep",
                  "More **stages 1 and 2**, **less slow-wave sleep**; REM may be spared."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "The number 5 again",
              "text": "Nearly every CSA form requires **5 or more central events per hour** on polysomnography. On the tracing, CSA resembles OSA except that **respiratory effort ceases** in the chest and abdominal leads."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Opioids and central apnea",
              "text": "Chronic **long-acting opioids** are the classic drug cause of CSA; in DSM-5 this becomes a specifier when **opioid use disorder** is present."
            },
            {
              "type": "update",
              "year": "2017",
              "title": "Phrenic nerve stimulation",
              "text": "For **moderate to severe central sleep apnea** in adults, an implanted **phrenic nerve stimulator** (remedē) was approved in **October 2017**; it stimulates the diaphragm to breathe during sleep.",
              "source": "FDA, remedē system approval (P160039), October 2017"
            }
          ]
        },
        {
          "id": "s15-hypovent",
          "title": "Sleep-related hypoventilation",
          "blocks": [
            {
              "type": "p",
              "text": "Hypoventilation reduces breathing **without breathing cessation**."
            },
            {
              "type": "defs",
              "title": "DSM-5 types",
              "items": [
                [
                  "Idiopathic hypoventilation",
                  "No identified cause."
                ],
                [
                  "Congenital central alveolar hypoventilation",
                  "Present from birth."
                ],
                [
                  "Comorbid sleep-related hypoventilation",
                  "Due to a medical disorder such as a **cervical spinal cord injury**, **COPD** or a **neuromuscular disorder**."
                ]
              ]
            },
            {
              "type": "list",
              "title": "Polysomnographic requirement",
              "items": [
                "Episodes of **raised CO2** with **decreased respiration**, or",
                "If CO2 is not monitored, **persistently low oxyhemoglobin** levels **not provoked by apnea or hypopnea**."
              ]
            },
            {
              "type": "p",
              "text": "ICSD-3 lists **six** hypoventilation disorders: **obesity hypoventilation syndrome**, congenital central alveolar hypoventilation, late-onset central hypoventilation with hypothalamic dysfunction, idiopathic central alveolar hypoventilation, and hypoventilation due to a medication or substance or to a medical disorder."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Obesity hypoventilation by numbers",
              "text": "ICSD-3: daytime **PaCO2 over 45 mm Hg** in a patient with **BMI over 30 kg/m2**. Abnormal **awake blood gases** signal more severe disease."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Low saturation without apneas",
              "text": "Sustained desaturation on the oximetry channel **without** apneas or hypopneas should prompt you to think of hypoventilation rather than apnea."
            }
          ]
        },
        {
          "id": "s15-sbd-ddx",
          "title": "Breathing disorders: differential and comorbidity",
          "blocks": [
            {
              "type": "p",
              "text": "Because breathing disorders present with **fatigue and daytime sleepiness**, their differential overlaps with that of **insomnia** and **hypersomnolence**."
            },
            {
              "type": "defs",
              "title": "Psychiatric look-alikes",
              "items": [
                [
                  "Panic attacks",
                  "Listed by the chapter as a condition to exclude."
                ],
                [
                  "ADHD",
                  "Repeated apneas can impair **focus and attention** and **school or job performance**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Common comorbidity of sleep-related breathing disorders (Table 15-23)",
              "head": [
                "Psychiatric",
                "Medical"
              ],
              "rows": [
                [
                  "**Anxiety** disorders; **dementia**; **mood** disorders; **PTSD**; **psychotic** disorders",
                  "**Cardiovascular** disease; **diabetes mellitus**; **heart failure**; **hypertension**; **obesity**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Inattention in a snorer",
              "text": "Before diagnosing ADHD in a child or adult with poor focus, ask about **snoring and witnessed apneas**; treating the breathing disorder may fix the attention problem."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Screen psychiatric patients",
              "text": "Mood, anxiety and psychotic disorders, PTSD and dementia all appear on the comorbidity list, alongside **obesity** and cardiometabolic disease. Conditions associated with CSA and hypoventilation are covered in their own sections."
            }
          ]
        },
        {
          "id": "s15-osa-tx",
          "title": "Treating obstructive sleep apnea",
          "blocks": [
            {
              "type": "list",
              "title": "Options",
              "items": [
                "**Positive airway pressure (PAP)**",
                "**Oral appliances**",
                "**Positional therapy**",
                "**Surgery**",
                "**Weight loss**"
              ],
              "cols": 2
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "In the book: no drug treats the airway",
              "text": "The book says medications are **not useful** for OSA itself (see the 2024 update below). **Modafinil**, **solriamfetol** and **pitolisant** may help **residual sleepiness** that persists despite PAP, but they do not address airway occlusion."
            },
            {
              "type": "update",
              "year": "2024",
              "title": "The first drug approved for sleep apnea",
              "text": "On **December 20, 2024** the FDA approved **tirzepatide** (Zepbound), a GIP and GLP-1 receptor agonist, for **moderate to severe obstructive sleep apnea in adults with obesity**, with diet and exercise. In the **SURMOUNT-OSA** trials it lowered the apnea-hypopnea index by about **25 to 29 events an hour** (roughly **half**) at one year, versus about 5 with placebo. So medication is no longer without a role in OSA, although PAP remains the standard. **AD109** (aroxybutynin with atomoxetine), a pill aimed at airway muscle tone, was under FDA review with a decision expected in **February 2027**.",
              "source": "FDA approval of Zepbound for obstructive sleep apnea, December 2024; Malhotra A et al., SURMOUNT-OSA, New England Journal of Medicine, 2024; Apnimed AD109 NDA acceptance, July 2026"
            },
            {
              "type": "p",
              "text": "**PAP is the preferred treatment.** A fan-driven blower delivers pressure through tubing to a **nasal mask, oronasal interface or nasal pillows**, acting as a **pneumatic splint** that offsets the airway collapse caused by negative inspiratory pressure. Properly titrated, it can relieve **even the most severe** apnea."
            },
            {
              "type": "defs",
              "title": "PAP devices",
              "items": [
                [
                  "CPAP",
                  "**Continuous** preset pressure; the most common system."
                ],
                [
                  "BPAP (bilevel)",
                  "Separate **inspiratory and expiratory** pressures, for patients who find it hard to **exhale against continuous pressure**."
                ],
                [
                  "APAP (automatic)",
                  "Senses airway resistance and **adjusts pressure automatically**, adapting to changes from sleep deprivation, medication, weight, sleep stage, illness and aging."
                ],
                [
                  "NIPPV (timed bilevel, servo-ventilation)",
                  "**Noninvasive positive pressure ventilation**, more suited to other lung diseases and **neuromuscular** breathing problems."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "The CPAP rebound (Figure 15-8)",
              "text": "A patient with **more than 200** obstructive events in one night had almost no REM or slow-wave sleep. On CPAP the next night, sleep continuity normalized with a **massive rebound of REM and slow-wave sleep**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Adherence is the real challenge",
              "text": "PAP is highly effective and safe, but only if used nightly. **Education** and **systematic follow-up** are crucial; fix mask, pressure and **nasal stuffiness** problems quickly. Surgery is mainly reserved for PAP **failure, rejection or nonadherence**."
            },
            {
              "type": "defs",
              "title": "Other nonsurgical options",
              "items": [
                [
                  "Oral appliance",
                  "Repositions the **mandible**, lifts the **palate** or retains the **tongue**. Helps **snoring** and **mild to moderate** OSA; results in **severe** OSA are often inadequate, so follow-up is essential."
                ],
                [
                  "Positional therapy",
                  "For apnea **only when supine**: **tennis balls** in the back of a nightshirt or **foam wedges**. Useful clinically, but large trials are lacking."
                ],
                [
                  "Weight loss",
                  "Helps many patients, but is hard to achieve and maintain, so recommend it **alongside** other treatment."
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Surgical approaches",
              "items": [
                [
                  "Tracheostomy",
                  "Used for severe apnea in the **late 1970s**; no longer preferred but still the **standard** against which other treatments are judged."
                ],
                [
                  "Uvulopalatopharyngoplasty (UPPP)",
                  "Modifies the soft palate; helps about **30% to 50%**, probably those with **oropharyngeal** obstruction, so patient selection matters."
                ],
                [
                  "Maxillomandibular surgery",
                  "For obstruction in the **posterior airway space**; advancing the jaw in **retrognathic** patients can normalize breathing."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2014–2023",
              "title": "Hypoglossal nerve stimulation",
              "text": "An implanted **hypoglossal nerve stimulator** (Inspire, approved **2014**) pushes the tongue forward during sleep. It is an option when PAP **cannot be used or tolerated**. Since **2023** the labeled range is an AHI of **15 to 100** and a BMI up to **40**, in adults and in adolescents **13 and older with Down syndrome**; patients need an airway assessment first, because complete concentric collapse at the soft palate excludes it.",
              "source": "FDA, Inspire upper airway stimulation approval and 2023 expansion (P130008)"
            }
          ]
        },
        {
          "id": "s15-csa-tx",
          "title": "Treating central apnea at high altitude",
          "blocks": [
            {
              "type": "p",
              "text": "CSA due to high-altitude periodic breathing arises from **hypocapnic alkalosis** that suppresses ventilation during sleep. **Acetazolamide** counters this by **lowering serum pH** and **increasing respiratory drive**."
            },
            {
              "type": "table",
              "caption": "Acetazolamide adverse effects",
              "head": [
                "Serious",
                "Common"
              ],
              "rows": [
                [
                  "**Metabolic acidosis**; **electrolyte imbalance**; **anaphylaxis**; **Stevens–Johnson syndrome**; **toxic epidermal necrolysis**; **agranulocytosis**",
                  "Fatigue; anorexia; **taste changes**; **polyuria**; diarrhea; melena; tinnitus; photosensitivity"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Match mechanism to cause",
              "text": "Altitude causes **alkalosis** that blunts breathing; acetazolamide induces a mild **acidosis** that restores drive."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Rare but severe reactions",
              "text": "Although uncommon, acetazolamide can cause **Stevens–Johnson syndrome**, **toxic epidermal necrolysis**, **agranulocytosis** and **electrolyte disturbance**; weigh these before prescribing."
            }
          ]
        }
      ]
    },
    {
      "title": "Circadian rhythm sleep–wake disorders",
      "sections": [
        {
          "id": "s15-circ",
          "title": "The circadian clock and the DSM-5 types",
          "blocks": [
            {
              "type": "p",
              "text": "All circadian rhythm sleep–wake disorders share one cause: a **desynchrony** between the person's **internal circadian clock** and the sleep–wake schedule they want or that society expects. The result is a **misalignment between desired and actual sleep periods**."
            },
            {
              "type": "defs",
              "title": "How the clock works",
              "items": [
                [
                  "The pacemaker",
                  "Located in the **suprachiasmatic nucleus (SCN)**. Its firing oscillates in a nearly **sinusoidal** pattern with a period of about **24 hours**, and its output tracks the daily swing in **core body temperature**."
                ],
                [
                  "Daily resetting",
                  "Normally the clock is re-entrained each day by **bright light**, **social cues**, **stimulants** and **activity**. When these cues fail to reset the rhythm, a circadian sleep disorder appears."
                ],
                [
                  "Three routes to mismatch",
                  "An **improper phase relationship** between clock and schedule; **travel across time zones**; or a **dysfunction of the basic biologic rhythm** itself."
                ]
              ]
            },
            {
              "type": "list",
              "title": "The six DSM-5 types",
              "items": [
                "**Delayed sleep phase** type",
                "**Advanced sleep phase** type",
                "**Irregular sleep–wake** type",
                "**Non–24-hour sleep–wake** type",
                "**Shift work** type",
                "**Unspecified** type"
              ],
              "cols": 2
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Jet lag is not a DSM-5 type",
              "text": "DSM-5 **dropped jet lag**; **ICSD-3 still includes jet lag disorder**, and ICSD-3 requires symptoms for **at least 3 months** except in jet lag."
            },
            {
              "type": "table",
              "caption": "Circadian rhythm sleep–wake disorders in DSM-5, ICSD-3 and ICD-10 (Table 15-11)",
              "head": [
                "Element",
                "DSM-5",
                "ICSD-3",
                "ICD-10"
              ],
              "rows": [
                [
                  "Name",
                  "Circadian rhythm sleep–wake disorders",
                  "Circadian rhythm sleep–wake disorders: shift work, **jet lag**, delayed sleep–wake phase, advanced sleep–wake phase, irregular sleep–wake rhythm, non–24-hour sleep–wake rhythm",
                  "**Disorders of sleep–wake schedule**: delayed sleep phase syndrome, irregular sleep–wake pattern"
                ],
                [
                  "Duration",
                  "See course specifiers",
                  "Symptoms **at least 3 months** (except jet lag disorder)",
                  ""
                ],
                [
                  "Symptoms",
                  "Disturbed sleep from an **altered circadian rhythm**; **excessive daytime sleepiness and/or insomnia**",
                  "Chronic sleep–wake disruption from abnormal circadian timing or schedule; **insomnia and/or excessive sleepiness**",
                  "Persistent insomnia or daytime sleepiness from altered circadian rhythm and environmental demands; disruption of the normal 24-hour cycle"
                ],
                [
                  "Required",
                  "**All**",
                  "**All**",
                  "**One**"
                ],
                [
                  "Exclusions",
                  "Not due to a **substance** or **another medical condition**",
                  "",
                  "Not nightmares, sleep terrors, sleepwalking or nonorganic sleep disorders"
                ],
                [
                  "Impact",
                  "**Marked distress and/or impairment**",
                  "Distress or impairment",
                  ""
                ],
                [
                  "Type specifiers",
                  "Delayed (later onset and waking; specify **familial** or **overlapping with non–24-hour**); advanced (earlier onset and waking; specify familial); irregular (disorganized cycle); non–24-hour (daily drift later); shift work; unspecified",
                  "",
                  ""
                ],
                [
                  "Course specifiers",
                  "**Episodic** (1 to 3 months); **persistent** (3 months or more); **recurrent** (2 or more episodes within 1 year)",
                  "",
                  ""
                ],
                [
                  "Comment",
                  "",
                  "May result from underlying **medical, psychiatric or neurologic** disorders",
                  ""
                ]
              ],
              "wide": true
            },
            {
              "type": "defs",
              "items": [
                [
                  "Differential diagnosis",
                  "**Insomnia disorder**, other sleep–wake disorders and **mood disorders**; also consider that the pattern is a **normal variant**."
                ],
                [
                  "Comorbidity",
                  "Both psychiatric and medical comorbidity occur (Table 15-23). The **shift work type** is especially linked to many psychiatric and medical disorders."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Night owl or disorder?",
              "text": "A late or early sleep pattern alone may be a **normal variant**. Diagnose a disorder only when the mismatch causes **insomnia or sleepiness** with **distress or impairment**."
            }
          ]
        },
        {
          "id": "s15-circ-phase",
          "title": "Delayed, advanced, irregular and non-24-hour types",
          "blocks": [
            {
              "type": "table",
              "caption": "The four intrinsic circadian types",
              "head": [
                "Type",
                "Clock problem",
                "What the patient experiences"
              ],
              "rows": [
                [
                  "Delayed sleep phase",
                  "Clock runs **slower than 24 hours** or is shifted **later** than the desired schedule",
                  "More alert in the **evening and early night**, stays up late, tired in the morning (**night owls**)"
                ],
                [
                  "Advanced sleep phase",
                  "Rhythm shifts **forward**, so sleepiness comes **earlier**",
                  "Drowsy in the evening, goes to bed early, wakes early, most alert in the **early morning** (**early birds** or **larks**)"
                ],
                [
                  "Irregular sleep–wake",
                  "Circadian rhythm **absent or pathologically diminished**",
                  "Total 24-hour sleep is **normal** but split into **3 or more irregular episodes**; insomnia at night, sleepiness by day, long naps, nocturnal wakefulness"
                ],
                [
                  "Non–24-hour sleep–wake",
                  "Cycle **longer or shorter than 24 hours** and **not reset** each morning",
                  "Symptoms wax and wane as internal and environmental clocks drift in and out of phase"
                ]
              ]
            },
            {
              "type": "steps",
              "title": "The non–24-hour cycle",
              "items": [
                [
                  "Drift begins",
                  "With a period **longer than 24 hours** and no daily reset, **sleep-onset insomnia** and **daytime sleepiness** worsen progressively."
                ],
                [
                  "Peak",
                  "Problems are worst when the internal and environmental clocks are **12 hours out of phase**."
                ],
                [
                  "Easing",
                  "As the drift continues, symptoms lessen."
                ],
                [
                  "Realignment",
                  "The clocks line up and sleep is **normal for a few days**."
                ],
                [
                  "Recurrence",
                  "The cycle then starts again."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Periodic insomnia",
              "text": "Because symptoms come and go in cycles, non–24-hour disorder has been called **periodic insomnia** and **periodic excessive sleepiness**. Causes include **blindness** and **traumatic brain injury**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why the cycle recurs",
              "text": "The light–dark cycle normally **resynchronizes** the clock every day. When it cannot (as when light is not perceived), the mismatch accumulates night by night."
            },
            {
              "type": "list",
              "items": [
                "Irregular type **usually impairs daily activities** despite a normal total amount of sleep.",
                "DSM-5 lets you specify **familial** for delayed and advanced types, and **overlap with non–24-hour** type for the delayed type."
              ]
            }
          ]
        },
        {
          "id": "s15-circ-shift",
          "title": "Shift work, jet lag and unspecified types",
          "blocks": [
            {
              "type": "p",
              "text": "Round-the-clock industries (transportation, health care, mining, manufacturing) mean ever more people work shifts. Shift workers commonly have **insomnia, excessive sleepiness or both**. Some adjust quickly; others struggle, and **frequent shift rotation** makes it worse."
            },
            {
              "type": "list",
              "title": "Why shift workers stay misaligned",
              "items": [
                "On days off, workers often switch back to an **unshifted schedule** for social reasons.",
                "Even those who try to stay shifted usually keep an **unshifted circadian rhythm**.",
                "Result: **severe insomnia** when trying to sleep, **excessive sleepiness** when trying to stay awake and **profound sleep deprivation**."
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "The 3 to 5 AM low point",
              "text": "The natural trough of the sleep–wake rhythm falls at about **3:00 to 5:00 AM**, the window when sleepiness-related **transportation and industrial accidents** commonly occur."
            },
            {
              "type": "defs",
              "title": "Jet lag",
              "items": [
                [
                  "Jet lag",
                  "Rapid travel across many time zones forces a **phase advance or delay**, depending on direction. Crossing **1 or 2 zones** is usually not a problem; overseas travel is harder, and frequent business travelers may be impaired when making key decisions. Removed from DSM-5 but kept in other systems."
                ],
                [
                  "Direction matters",
                  "**Night owls** struggle more with **eastward** travel (it needs a **phase advance**); **larks** theoretically struggle more with **westward** travel."
                ],
                [
                  "Rate of adjustment",
                  "Healthy people adapt about **1 or 2 time zones per day**, so an **8-hour** shift may take **4 or more days**."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Unspecified type: where it arises",
              "items": [
                [
                  "Bedridden and hospitalized patients",
                  "Erratic sleep during illness disrupts the rhythm; medications can worsen the breakdown."
                ],
                [
                  "Dementia",
                  "Some forms produce erratic, chaotic sleep–wake patterns."
                ],
                [
                  "Intensive care unit",
                  "**Noise, light** and therapeutic and monitoring procedures disorganize sleep enough to cause a significant sleep disorder."
                ],
                [
                  "Recreational drugs",
                  "**Methamphetamine** or **ecstasy** use can keep people awake overnight or for days, followed by periods of **profound hypersomnia**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Only one drug is approved for shift work disorder",
              "text": "The book notes that **modafinil**, a wake-promoting agent, is the only medication approved for shift work sleep disorder; it treats sleepiness during night shifts (see Light, melatonin and chronotherapy)."
            }
          ]
        },
        {
          "id": "s15-circ-tx",
          "title": "Light, melatonin and chronotherapy",
          "blocks": [
            {
              "type": "p",
              "text": "Bright light can **reset the circadian pacemaker** by shifting the clock's set point. It works best when the light is **brighter than 10,000 lux** or in the **blue spectrum**, and when it is timed precisely."
            },
            {
              "type": "steps",
              "title": "Timing light therapy",
              "items": [
                [
                  "Find the marker",
                  "Use the **core body temperature nadir** as the physiologic reference point."
                ],
                [
                  "Light before the nadir",
                  "Produces a **phase delay**."
                ],
                [
                  "Light after the nadir",
                  "Produces a **phase advance**."
                ],
                [
                  "Timing strength",
                  "The **closer to the nadir**, the **stronger** the shift."
                ],
                [
                  "Delayed sleep phase",
                  "Give **early-morning** bright light to advance the clock."
                ],
                [
                  "Advanced sleep phase",
                  "Give **evening** bright light."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Blue light is the active ingredient",
              "text": "Blue wavelengths drive phase setting and shifting, so timed **blue light exposure** or **blue-blocking eyewear** can be used therapeutically. Light therapy is used for **shift workers, astronauts** and **jet lag**."
            },
            {
              "type": "defs",
              "title": "Medication",
              "items": [
                [
                  "Melatonin",
                  "Thought to be the biologic substrate of the circadian oscillator: levels **rise at dusk** and stay high **until dawn**; **bright light suppresses** release. It acts as the brain's **signal of darkness** and is used for **sighted** patients with disturbed sleep–wake cycles. Available **over the counter** in the United States; a **sustained-release prescription** form exists outside the United States."
                ],
                [
                  "Ramelteon",
                  "Prescription **melatonin receptor agonist**. Approved for **sleep-onset insomnia**; used **off label** across the circadian rhythm disorders."
                ],
                [
                  "Modafinil",
                  "Wake-promoting agent; the **only medication approved for shift work sleep disorder**, treating sleepiness during the night shift."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2014",
              "title": "Tasimelteon for non-24-hour rhythm",
              "text": "**Tasimelteon** (Hetlioz), a melatonin receptor agonist, is approved for **non-24-hour sleep–wake disorder** in **totally blind** people, who cannot be entrained by light. An application for **jet lag** was **not** approved. See **section 21.5**.",
              "source": "Hetlioz prescribing information"
            },
            {
              "type": "steps",
              "title": "Chronotherapy",
              "items": [
                [
                  "Delay nightly",
                  "Push bedtime **2 to 3 hours later each night**."
                ],
                [
                  "Ride the natural tendency",
                  "Most young and middle-aged adults drift toward phase delay, so delaying is easier than advancing."
                ],
                [
                  "Stop on target",
                  "Halt when the clock matches the desired schedule, then **hold that synchrony**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Why chronotherapy has fallen out of favor",
              "text": "Stopping the delay at the right moment and maintaining it is hard, and the patient lives on an **odd schedule for most of a week**, which disrupts school or work. **Light therapy** and **medication** have largely overshadowed it."
            }
          ]
        }
      ]
    },
    {
      "title": "Parasomnias",
      "sections": [
        {
          "id": "s15-para",
          "title": "What parasomnias are",
          "blocks": [
            {
              "type": "p",
              "text": "Parasomnias are **disorders of partial arousal**: a diverse group of physiologic or behavioral events that occur **during sleep or are potentiated by sleep**. A useful model sees many of them as **overlaps or intrusions of one sleep–wake state into another**."
            },
            {
              "type": "table",
              "caption": "The three basic states",
              "head": [
                "State",
                "Body",
                "Brain"
              ],
              "rows": [
                [
                  "Wakefulness",
                  "Active",
                  "Active"
                ],
                [
                  "NREM sleep",
                  "Much less active",
                  "Much less active"
                ],
                [
                  "REM sleep",
                  "**Atonic**",
                  "**Active** (elaborate dreams; imaging confirms increased activation)"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "State boundary violations",
              "items": [
                [
                  "Arousal disorders (sleepwalking, sleep terrors)",
                  "Momentary or partial **wakeful behavior** breaking into **NREM sleep**."
                ],
                [
                  "Isolated sleep paralysis",
                  "**REM atonia persisting** into the transition to wakefulness."
                ],
                [
                  "REM sleep behavior disorder (RBD)",
                  "**Failure of REM atonia**, so the person **acts out dreams**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "DSM-5 covers few parasomnias",
              "text": "DSM-5 includes only **3 of the 10** specific parasomnias in ICSD-3, but it does include **restless legs syndrome**, which ICSD-3 places among the sleep-related movement disorders."
            },
            {
              "type": "list",
              "title": "Differential diagnosis of a parasomnia",
              "items": [
                "Other parasomnias",
                "**Sleep-related breathing disorders**",
                "**Nocturnal seizures**",
                "**Panic attacks**",
                "Other sleep–wake disorders",
                "**Amnestic and dissociative** syndromes",
                "Numerous medical conditions"
              ],
              "cols": 2
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "RBD often heralds neurodegeneration",
              "text": "Each parasomnia has its own comorbidities (Table 15-23), but note especially that **many people who present with RBD later develop a neurodegenerative disorder**."
            }
          ]
        },
        {
          "id": "s15-nrem",
          "title": "NREM sleep arousal disorders",
          "blocks": [
            {
              "type": "table",
              "caption": "NREM sleep disorders in DSM-5, ICSD-3 and ICD-10 (Table 15-12)",
              "head": [
                "Element",
                "DSM-5",
                "ICSD-3",
                "ICD-10"
              ],
              "rows": [
                [
                  "Name",
                  "**NREM sleep arousal disorders**",
                  "**NREM-related parasomnias**",
                  "Listed separately: sleepwalking (somnambulism), sleep terrors (night terrors), nightmares"
                ],
                [
                  "Core feature",
                  "Recurrent **incomplete awakening** with sleepwalking or sleep terrors",
                  "Recurrent incomplete awakening with abnormal behavior: **confusional arousal**, sleepwalking, sleep terrors, **sleep-related eating disorder**",
                  "Sleepwalking: mixed sleep and wake state with low awareness and **no recall**. Sleep terrors: terror and panic with movement, vocalization and **high autonomic tone**, little or no recall"
                ],
                [
                  "Responsiveness and recall",
                  "**Little or no dream recall**; **amnesia** for episodes",
                  "**Absent or inappropriate responsiveness**; limited or no dream report; **partial or complete amnesia**",
                  "See above"
                ],
                [
                  "Required",
                  "All criteria",
                  "",
                  ""
                ],
                [
                  "Exclusions",
                  "Not due to a **substance or medication** or another **mental or medical** disorder",
                  "",
                  ""
                ],
                [
                  "Impact",
                  "Marked impairment and/or distress",
                  "",
                  ""
                ],
                [
                  "Specifiers",
                  "**Sleep terror type**; **sleepwalking type** (with **sleep-related eating** or with **sleep-related sexual behavior**)",
                  "",
                  "ICD-10 groups nightmares here; DSM-5 makes **nightmare disorder** a separate category"
                ]
              ],
              "wide": true
            },
            {
              "type": "defs",
              "title": "The arousal disorders",
              "items": [
                [
                  "Sleepwalking (somnambulism)",
                  "Getting up and walking **without fully waking**, sometimes with complex semipurposeful acts. Arises from **slow-wave sleep**, typically toward the **end of the first or second slow-wave episode**. The sleepwalker often navigates obstacles but may act inappropriately (out of a window, into a road); violence has occurred. **Hard to wake** and **confused** once awake."
                ],
                [
                  "Sleep terrors",
                  "Sudden arousal with a **piercing scream** and panic-level fear, strong **autonomic** signs; the person sits up, is **unresponsive**, and is **confused or disoriented** if woken. Speech is incoherent. Usually **amnesia** for the episode. Also called **pavor nocturnus**, **incubus** or **night terror**."
                ],
                [
                  "Confusional arousals",
                  "The **mildest** form (ICSD-3), **common in young children**: partial waking, sitting up confused, then lying back down to sleep."
                ],
                [
                  "Sleep-related eating disorder",
                  "In DSM-5, **sleepwalking with sleep-related eating**. Eating may become obsessional, with several small meals a night, often **unaware**; **weight gain**, odd foods or combinations, and injury or hazards while cooking (a stove fire)."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "A continuum",
              "text": "**Confusional arousals, sleepwalking and sleep terrors** probably lie on one continuum. **Sleep deprivation** and disrupted slow-wave sleep provoke or worsen all of them."
            },
            {
              "type": "table",
              "caption": "Age, triggers and severity",
              "head": [
                "",
                "Sleepwalking",
                "Sleep terrors"
              ],
              "rows": [
                [
                  "Age pattern",
                  "**Very common in children**, peak **4 to 8 years**, usually gone after adolescence; **rare in adults**, familial",
                  "Psychopathology **seldom** in children; adults often have **trauma** or **psychiatric** comorbidity"
                ],
                [
                  "Triggers",
                  "**Sleep deprivation**, interrupted slow-wave sleep; may be secondary to another sleep disorder (such as **sleep apnea**)",
                  "**Fever**, **CNS depressant withdrawal**, sleep deprivation"
                ],
                [
                  "Severe when",
                  "**Nightly to weekly** episodes with **physical injury** to self or others",
                  "**Almost nightly** with injury (range: less than monthly to nearly nightly)"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Do not grab a sleepwalker",
              "text": "Guide the sleepwalker **gently back to bed**. Grabbing, shaking or shouting can make the confused person feel attacked and **react violently**."
            },
            {
              "type": "table",
              "caption": "Telling the night-time events apart",
              "head": [
                "Feature",
                "Sleepwalking",
                "Sleep terrors",
                "Nightmares",
                "RBD"
              ],
              "rows": [
                [
                  "Sleep stage",
                  "**Slow-wave (NREM)**",
                  "**Slow-wave (NREM)**",
                  "**REM**",
                  "**REM**"
                ],
                [
                  "Mental content",
                  "Little or no dream recall",
                  "No imagery, or brief, vivid, often **static fragments**",
                  "Long, elaborate dream that grows **increasingly frightening**",
                  "Behavior **matches dream imagery**"
                ],
                [
                  "Recall",
                  "**Amnesia**",
                  "**Amnesia** despite intensity",
                  "**Vivid recall**",
                  "Linked to dream enactment"
                ],
                [
                  "On waking",
                  "Hard to wake; **confused**",
                  "Unresponsive; **confused or disoriented**",
                  "Quickly **awake and alert**",
                  "**Not confused** (DSM-5)"
                ],
                [
                  "Behavior",
                  "Walking, semipurposeful acts; interacts with the real environment",
                  "Scream, sitting up, **autonomic surge**, incoherent speech",
                  "Usually **no vocalization or body movement**",
                  "Punching, kicking, leaping; acts on the **dream world**, not the room"
                ]
              ],
              "wide": true
            },
            {
              "type": "case",
              "title": "Ms. R, 20, talking, screaming and wandering at night",
              "text": "She talked, mumbled and screamed in her sleep at least twice weekly, once woke locked outside her apartment with no memory of leaving, and had leg kicking, bruxism (wearing an oral guard), occasional nightmares, mild snoring and morning headaches. She slept only 5 to 7 hours on an irregular schedule and was sleepy by day. Febrile convulsions in infancy. A clinical EEG was normal, but overnight polysomnography with an extended EEG montage showed rebound from sleep deprivation (sleep efficiency 96%, sleep latency 1 minute, REM 31% with REM latency 57 minutes) and abnormal microarchitecture: paroxysmal high-amplitude bursts, prolonged spindles, rhythmic K complexes and sharp waves and spikes (possibly right temporal), mostly in slow-wave sleep. No breathing disorder (SaO2 nadir 90%) and no periodic limb movements.",
              "point": "Adult sleepwalking is rare and needs workup: sleep talking alone does not, but nocturnal wandering calls for polysomnography with clinical EEG to exclude nocturnal seizures. Sleep deprivation worsens both parasomnias and seizures."
            }
          ]
        },
        {
          "id": "s15-nightmare",
          "title": "Nightmare disorder",
          "blocks": [
            {
              "type": "p",
              "text": "Nightmares are frightening dreams, sometimes called **dream anxiety attacks**, that cause **sympathetic activation** and wake the dreamer. They arise in **REM sleep**, usually from a **long, complicated dream** that becomes steadily more frightening, and the dream is **remembered** on waking (unlike sleep terrors)."
            },
            {
              "type": "table",
              "caption": "Nightmare disorder in DSM-5, ICSD-3 and ICD-10 (Table 15-14)",
              "head": [
                "Element",
                "DSM-5",
                "ICSD-3",
                "ICD-10"
              ],
              "rows": [
                [
                  "Name",
                  "**Nightmare disorder** (a separate category)",
                  "Nightmare disorder, classed with the **REM-related parasomnias**",
                  "Grouped with **sleep terrors** as a nonorganic sleep disorder"
                ],
                [
                  "Symptoms",
                  "Pattern of **long, dysphoric, threatening, vivid** dreams; **recalled**; on waking, quickly becomes **awake and alert**",
                  "Recurrent, highly dysphoric or anxiety-laden nightmares, **remembered** on waking",
                  "Dreams with fear and negative emotion, **intact recall**, **no vocalization or body movement** (contrast sleep terrors: panic, movement, vocalization, high autonomic tone, little recall)"
                ],
                [
                  "Required",
                  "All",
                  "",
                  ""
                ],
                [
                  "Exclusions",
                  "Not due to a **substance or medication** or a coexisting **mental or medical** disorder",
                  "",
                  ""
                ],
                [
                  "Impact",
                  "Marked distress and/or impairment",
                  "Marked distress and/or impairment",
                  ""
                ],
                [
                  "Specifiers",
                  "**During sleep onset**; with associated **nonsleep disorder** (including substance use disorder); with associated **other medical condition**; with associated **other sleep disorder**",
                  "",
                  ""
                ],
                [
                  "Severity",
                  "**Mild**: under 1 episode a week. **Moderate**: 1 or more a week but not nightly. **Severe**: nightly",
                  "",
                  ""
                ],
                [
                  "Course",
                  "**Acute**: 1 month or less. **Subacute**: 1 to 6 months. **Persistent**: 6 months or more",
                  "",
                  ""
                ]
              ],
              "wide": true
            },
            {
              "type": "list",
              "title": "Clinical features",
              "items": [
                "**Common at ages 3 to 6 years**; **rare in adults**.",
                "**Most people with nightmares have no psychiatric disorder**.",
                "Some nightmares **recur**; in **PTSD** they may replay actual events (see Chapter 10).",
                "Trauma can induce nightmares **immediately or after a delay**, and they may persist for **many years**."
              ]
            },
            {
              "type": "defs",
              "title": "What provokes nightmares",
              "items": [
                [
                  "Medications",
                  "**L-DOPA** and **β-blockers**."
                ],
                [
                  "Withdrawal",
                  "Stopping **REM-suppressing** drugs (REM rebound)."
                ],
                [
                  "Substances",
                  "**Drug or alcohol abuse**, including alcohol withdrawal."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "The fear-of-sleep cycle",
              "text": "Frequent nightmares produce a **fear-of-sleeping insomnia**; the resulting **sleep deprivation worsens nightmares**, closing a vicious cycle."
            },
            {
              "type": "defs",
              "title": "Treatment",
              "items": [
                [
                  "Behavioral and cognitive",
                  "**Desensitization and exposure therapy**, **image rehearsal therapy**, **lucid dream therapy** and **cognitive therapy**."
                ],
                [
                  "Prazosin",
                  "A CNS **α1-receptor antagonist** with growing evidence for **PTSD-related nightmares**."
                ],
                [
                  "Benzodiazepines",
                  "**Nitrazepam** and **triazolam** may also help."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2018",
              "title": "What the evidence supports for nightmares",
              "text": "The **AASM 2018 position paper** recommends **image rehearsal therapy** for nightmare disorder and PTSD-associated nightmares; **prazosin may be used** for PTSD-associated nightmares, and **clonazepam** and **venlafaxine** are not recommended. The largest prazosin trial (**Raskind, 2018**, about 300 veterans) found **no benefit** over placebo. The book's nitrazepam and triazolam have little supporting evidence.",
              "source": "Morgenthaler TI et al., AASM position paper on nightmare disorder, Journal of Clinical Sleep Medicine, 2018; Raskind MA et al., prazosin for PTSD in veterans, New England Journal of Medicine, 2018"
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Classification differs by system",
              "text": "**ICSD-3**: a REM-related parasomnia. **DSM-5**: a separate disorder. **ICD-10**: a nonorganic sleep disorder grouped with sleep terrors."
            }
          ]
        },
        {
          "id": "s15-rbd",
          "title": "REM sleep behavior disorder and sleep paralysis",
          "blocks": [
            {
              "type": "p",
              "text": "In REM sleep behavior disorder (RBD) the normal **atonia of REM sleep fails**, so the patient **acts out dreams**. Normally, REM-related **hyperpolarization (inhibition)** of **α and γ motor neurons** immobilizes the dreamer; without it, or with only intermittent atonia, the dreamer may punch, kick or leap in step with the dream."
            },
            {
              "type": "table",
              "caption": "REM sleep behavior disorder in DSM-5, ICSD-3 and ICD-10 (Table 15-13)",
              "head": [
                "Element",
                "DSM-5",
                "ICSD-3",
                "ICD-10"
              ],
              "rows": [
                [
                  "Name",
                  "REM sleep behavior disorder",
                  "REM-related parasomnias",
                  "REM sleep behavior disorder"
                ],
                [
                  "Symptoms",
                  "Repeated arousals with **vocalization or complex motor behavior** during **REM sleep**; **not confused** when awakened; plus either **REM sleep without atonia** on polysomnography or a history of REM behaviors with an established **synucleinopathy** (such as **Parkinson disease**)",
                  "Sleep-related vocalizations or complex motor behaviors in REM sleep, **documented by polysomnography** (or presumed from history); **REM sleep without atonia** on polysomnography; **no epileptiform activity** in REM sleep",
                  "Recurrent sudden, often **violent** behavior in REM sleep that may harm self or others; associated with **dream enactment**"
                ],
                [
                  "Required",
                  "All",
                  "All",
                  ""
                ],
                [
                  "Exclusions",
                  "Not due to **medication**, **substance use disorder**, another **medical condition** or a **mental disorder**",
                  "Not better explained by another **sleep**, **medical or neurologic** or **mental** disorder, **medication** or **substance use**",
                  ""
                ],
                [
                  "Impact",
                  "Marked distress and/or impairment",
                  "",
                  ""
                ]
              ],
              "wide": true
            },
            {
              "type": "table",
              "caption": "Sleepwalking versus RBD",
              "head": [
                "",
                "Sleepwalking",
                "RBD"
              ],
              "rows": [
                [
                  "Stage",
                  "Slow-wave NREM",
                  "REM"
                ],
                [
                  "Awareness",
                  "Interacts with the **real environment**, often appropriately",
                  "Unaware of the room; acting on the **dream sensorium**"
                ],
                [
                  "Example",
                  "Calmly opens a window and **steps out**",
                  "**Dives through** the window, taking it for a dreamed **lake**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Injuries are common",
              "text": "Patients and **bed partners** are often hurt, sometimes severely (**lacerations, fractures**). Many drugs and comorbid conditions can precipitate or worsen RBD (Table 15-15)."
            },
            {
              "type": "h",
              "text": "Recurrent isolated sleep paralysis"
            },
            {
              "type": "list",
              "items": [
                "An **inability to move voluntarily** at **sleep onset or on awakening**, while partly conscious and aware of surroundings.",
                "Lasts **1 to several minutes**; very distressing, especially with a sense of an **intruder** or with **hypnagogic hallucinations**.",
                "Part of the **narcolepsy tetrad**, but it also occurs in people with **neither cataplexy nor daytime sleepiness**.",
                "It is **normal REM atonia briefly intruding into wakefulness**.",
                "More likely with **irregular sleep, sleep deprivation, psychological stress** and **shift work**."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "The 'Old Hag' and other visitors",
              "text": "Sleep paralysis with hypnagogia may explain reports of a nearby **presence** or creature that talks, attacks or **sits on the chest**, then vanishes: incubus, **Old Hag**, vampire, **kanashibari** (ghost oppression in Japanese), witch riding or **alien encounters**."
            },
            {
              "type": "defs",
              "title": "Treating sleep paralysis",
              "items": [
                [
                  "First line",
                  "**Better sleep hygiene** and **sufficient sleep**."
                ],
                [
                  "Ending an episode",
                  "Episodes usually stop if the person makes **voluntary rapid eye movements** or is **touched** by someone."
                ]
              ]
            }
          ]
        },
        {
          "id": "s15-para-other",
          "title": "Other parasomnias and their triggers",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Exploding head syndrome",
                  "A loud imagined noise or sense of **explosion inside the head** while falling asleep or waking, once or recurrently. **Painless**, but patients may fear a **stroke**; even one episode can cause severe insomnia. **No known neurologic consequences**."
                ],
                [
                  "Sleep-related hallucinations",
                  "Mostly **visual** images at sleep onset (**hypnagogic**) or on waking (**hypnopompic**); hard to separate from dreams and **common in narcolepsy**. Complex hallucinations are **rare**, follow abrupt waking without dream recall, and are **vivid and immobile**, lasting **several minutes**; they usually show up on **turning on a light** and may be frightening."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Sleep enuresis (bed-wetting)",
              "head": [
                "",
                "Primary",
                "Secondary"
              ],
              "rows": [
                [
                  "Definition",
                  "Bed-wetting **continuing since infancy**",
                  "**Relapse** after toilet training and a dry period"
                ],
                [
                  "Associations",
                  "**Parental primary enuresis**; a **single recessive gene** is suspected",
                  "Birth of a **sibling** ('cry for attention'); **nocturnal seizures**, **sleep deprivation**, **urologic anomalies**"
                ]
              ],
              "note": "After toilet training, bed-wetting usually resolves on its own **before age 6**. In adults it may accompany **sleep-disordered breathing**. The main harms are **embarrassment, shame and guilt**, which can leave psychosocial scars if ignored (see Chapter 14)."
            },
            {
              "type": "defs",
              "title": "Treating enuresis",
              "items": [
                [
                  "Medication",
                  "**Desmopressin acetate** is preferred; alternatives are **imipramine** and **oxybutynin chloride**."
                ],
                [
                  "Behavioral",
                  "**Bladder training**, conditioning devices (**bell and pad**), **diet modification** and **fluid restriction**."
                ],
                [
                  "Other",
                  "Psychotherapy, motivational strategies and hypnotherapy."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Drugs that cause or worsen parasomnias (Table 15-15)",
              "head": [
                "Parasomnia",
                "Drugs and substances"
              ],
              "rows": [
                [
                  "RBD: drugs",
                  "**Biperiden**, **caffeine**, **MAOIs**, **selegiline**, **serotonin agonists**, **tricyclic antidepressants**, **venlafaxine**"
                ],
                [
                  "RBD: withdrawal from",
                  "**Alcohol**, **meprobamate**, **pentazocine**, **nitrazepam**"
                ],
                [
                  "Nightmares",
                  "**Alcohol** abuse or withdrawal; **REM rebound** on withdrawing REM suppressants (such as methamphetamine); **L-DOPA**; **β-blockers**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Alcohol and sleepwalking",
              "text": "Drugs that **lighten sleep** tend to trigger parasomnias, and **alcohol** is notorious for **sleepwalking**, even in people who have also taken sleeping pills."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Seizures first",
              "text": "Put **seizure disorder at the top** of the differential for most parasomnias. AASM guidelines support **polysomnography to rule out seizures** when diagnosing sleep terrors, sleepwalking, RBD, nightmares and other parasomnias."
            },
            {
              "type": "defs",
              "title": "Parasomnias due to medical conditions",
              "items": [
                [
                  "Sleep-related breathing disorders",
                  "Can trigger **sleepwalking, enuresis, sleep terrors, confusional arousals** and **nightmares**."
                ],
                [
                  "Neurologic disease and RBD",
                  "**Parkinson disease**, **dementia**, **progressive supranuclear palsy**, **Shy–Drager syndrome** (a movement disorder with autonomic symptoms), **narcolepsy** and others."
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Sleep-related movement disorders and normal variants",
      "sections": [
        {
          "id": "s15-rls",
          "title": "Restless legs syndrome",
          "blocks": [
            {
              "type": "p",
              "text": "Restless legs syndrome (RLS) is an uncomfortable subjective sensation in the limbs, usually the **legs** ('**creepy-crawly**', **ants walking** on the skin), with an **irresistible urge to move** them **at rest** or when trying to fall asleep. It is **worse at night** and **relieved by moving or walking**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "How RLS causes insomnia",
              "text": "Lying in bed relaxing brings on the sensations; the patient moves the legs, tries again to sleep, and the cycle can run for **hours**, producing **profound insomnia**."
            },
            {
              "type": "table",
              "caption": "Restless legs syndrome in DSM-5, ICSD-3 and ICD-10 (Table 15-16)",
              "head": [
                "Element",
                "DSM-5",
                "ICSD-3",
                "ICD-10"
              ],
              "rows": [
                [
                  "Name",
                  "Restless legs syndrome",
                  "Restless legs syndrome",
                  "Under **other specified extrapyramidal and movement disorders**"
                ],
                [
                  "Duration",
                  "**At least 3 times a week** for **at least 3 months**",
                  "",
                  ""
                ],
                [
                  "Symptoms",
                  "**Urge to move** the legs; **worse at night**; **relieved by movement**",
                  "Urge to move the legs with uncomfortable sensations during **rest or inactivity**; at least **partly relieved** by movement; **circadian** pattern (mainly at night)",
                  "Strong urge to move the legs to relieve discomfort, often lying or sitting, worse at night"
                ],
                [
                  "Required",
                  "All",
                  "All",
                  ""
                ],
                [
                  "Exclusions",
                  "Not **akathisia**, a **substance or medication**, another **mental or medical** condition, or a **behavioral** condition (habitual movements)",
                  "",
                  ""
                ],
                [
                  "Impact",
                  "Marked distress and/or impairment",
                  "Marked distress and/or impairment",
                  ""
                ]
              ],
              "wide": true
            },
            {
              "type": "list",
              "title": "Medical causes of secondary RLS (Table 15-17)",
              "items": [
                "**COPD**",
                "**Diabetes**",
                "**Fibromyalgia**",
                "**Iron and folic acid deficiency** anemias",
                "**Neuropathies**",
                "**Rheumatoid arthritis**",
                "**Thyroid** diseases",
                "**Uremia**"
              ],
              "cols": 2
            },
            {
              "type": "steps",
              "title": "Workup",
              "items": [
                [
                  "History and examination",
                  "A **detailed history and physical** are essential to find secondary causes."
                ],
                [
                  "Ferritin",
                  "**Check ferritin in every patient** with RLS symptoms."
                ],
                [
                  "No sleep study needed",
                  "**Polysomnography is not required** to diagnose RLS. If done, it may show bilateral leg EMG activity (anterior tibialis) while the patient tries to fall asleep (Fig. 15-6)."
                ],
                [
                  "Differential",
                  "**Arthritis**, **neuropathy**, **positional ischemia** and **peripheral artery disease**, among others; DSM-5 also excludes **akathisia** (see Chapter 21.0)."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Treatment",
              "items": [
                [
                  "First choice in the book",
                  "Dopamine agonists **pramipexole**, **rotigotine** and **ropinirole** (FDA approved)."
                ],
                [
                  "Other drugs",
                  "**Levodopa** (dopamine precursor), **benzodiazepines**, **opiates** (including prolonged-release **oxycodone–naloxone**) and antiepileptics (**gabapentin**, **pregabalin**)."
                ],
                [
                  "Iron",
                  "**Iron supplementation** when iron deficiency or **low ferritin** is present."
                ],
                [
                  "Nonpharmacologic",
                  "Avoid **alcohol and nicotine near bedtime**; leg **massage**, **hot baths**, heat or cold to the area, magnetic or electric stimulation, **moderate exercise**."
                ]
              ]
            },
            {
              "type": "update",
              "year": "2024",
              "title": "Restless legs: dopamine agonists no longer first line",
              "text": "The **AASM 2024 guideline** recommends **against the standard use** of **pramipexole, ropinirole, rotigotine and levodopa** because of **augmentation** (symptoms become worse, start earlier and spread). First-line options are now the **gabapentinoids** (gabapentin, gabapentin enacarbil, pregabalin) and **iron**, including **intravenous ferric carboxymaltose**, guided by iron studies that use higher ferritin cutoffs than for anemia. See **section 21.10**.",
              "source": "HCPLive, AASM updates clinical guidelines for restless legs syndrome, November 2024; Winkelman JW et al., AASM guideline for RLS and PLMD, Journal of Clinical Sleep Medicine, 2024"
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "RLS comorbidity",
              "text": "Table 15-23 links RLS to **depression**, **anxiety**, **attentional disorders** and **iron deficiency**."
            }
          ]
        },
        {
          "id": "s15-plmd",
          "title": "Periodic limb movements and leg cramps",
          "blocks": [
            {
              "type": "p",
              "text": "Periodic limb movement disorder (PLMD), formerly **nocturnal myoclonus**, consists of brief, **stereotyped, repetitive, nonepileptiform** limb movements, usually of the legs, mainly in **NREM sleep**."
            },
            {
              "type": "table",
              "caption": "PLMD at a glance",
              "head": [
                "Feature",
                "Detail"
              ],
              "rows": [
                [
                  "Movement",
                  "**Extension of the big toe**, sometimes with partial flexion of the **ankle, knee and hip**"
                ],
                [
                  "Duration",
                  "**0.5 to 5 seconds** each"
                ],
                [
                  "Frequency",
                  "Every **20 to 40 seconds**"
                ],
                [
                  "Effect on sleep",
                  "Often brief **arousals**; can (but **does not always**) disturb sleep architecture"
                ],
                [
                  "Associations",
                  "Rises with **age**; **folate deficiency**, **renal disease**, **anemia**, **antidepressant** use"
                ],
                [
                  "Measured as",
                  "**Nocturnal myoclonus index**: periodic leg movements per hour (Table 15-21)"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Treatment",
              "items": [
                [
                  "PLMD with RLS",
                  "Treat as for **RLS**."
                ],
                [
                  "Other PLMD",
                  "Trials are lacking, but **benzodiazepines**, especially **clonazepam**, reportedly improve sleep."
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Sleep-related leg cramps",
                  "Painful contractions, usually of the **calf**, like daytime cramps; the pain **wakes** the sleeper. Precipitants: **metabolic disorders**, **mineral deficiencies**, **electrolyte imbalance**, **diabetes** and **pregnancy**. Why some people cramp only in sleep is unknown."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "PLMD versus RLS",
              "text": "RLS is a **waking sensory urge** at rest that delays sleep; PLMD is **involuntary periodic movement during sleep** recorded on polysomnography. They can coexist, and Table 15-20 lists PLMD among possible indications for polysomnography."
            }
          ]
        },
        {
          "id": "s15-brux",
          "title": "Bruxism and rhythmic movement disorder",
          "blocks": [
            {
              "type": "p",
              "text": "Sleep-related bruxism is **grinding or clenching the teeth** in sleep. Once classed as a parasomnia, it can wear and damage teeth, cause **tooth and jaw pain**, atypical **facial pain** and **headache**, and make noises that disturb the bed partner."
            },
            {
              "type": "list",
              "items": [
                "**More than 85%** of people brux at some time; it is clinically significant in only about **5%**.",
                "Occurs in **any stage** but most at **sleep onset**, in **stage 2** and in **REM**; REM grinding is more often linked to **dental damage**.",
                "**Not** made worse by **malocclusion**; **worse with stress** (also anxiety and sleep deprivation).",
                "Secondary causes: **sleep-related breathing disorders**, **psychostimulants** (amphetamine, cocaine), **alcohol** and some **SSRIs**.",
                "Frequency: **infrequent** (monthly), **regular** (weekly) or **frequent** (nightly). Severity depends on **sleep disruption, pain and dental damage**."
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "A night in the lab may miss it",
              "text": "Many patients grind **less in the laboratory**, so **repeat studies** may be needed; yet bruxism often turns up on studies done for other reasons. On polysomnography it shows a rhythmic **EEG–EOG–EMG interference pattern** (Fig. 15-7). Include **nocturnal seizures** in the differential."
            },
            {
              "type": "defs",
              "title": "Treating bruxism",
              "items": [
                [
                  "Oral appliance (usual treatment)",
                  "**Soft mouth guard** for short-term use; **hard acrylic bite splint** for long-term use with regular follow-up."
                ],
                [
                  "Other approaches",
                  "**Relaxation**, **biofeedback**, **hypnosis**, physical therapy and **stress management**."
                ],
                [
                  "Drugs",
                  "Benzodiazepines, muscle relaxants, dopamine agonists and propranolol have been tried **without reliable outcome data**; **botulinum toxin** can reduce episode frequency."
                ]
              ]
            },
            {
              "type": "h",
              "text": "Sleep-related rhythmic movement disorder"
            },
            {
              "type": "list",
              "items": [
                "Repetitive, rhythmic movements, usually of the **head and neck**, mostly at the **wake–sleep transition**, sometimes continuing into light sleep. Formerly a parasomnia.",
                "Other names: **jactatio capitis nocturna**, **headbanging**, head rolling, **body rocking**, rhythmie du sommeil.",
                "**Most infants body rock**, possibly for the soothing effect of **vestibular stimulation**.",
                "Persistence into childhood raises **injury** risk, especially with **headbanging**.",
                "**Male to female ratio 4:1**. Severity ranges from **under once weekly** to **nightly with injury**."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Stimulants and rhythmic movements",
              "text": "Table 15-18 links **stimulants** to **rhythmic movement disorders** and **bruxism**."
            }
          ]
        },
        {
          "id": "s15-move-other",
          "title": "Infant, sleep-onset and drug-induced movement disorders",
          "blocks": [
            {
              "type": "p",
              "text": "Sleep-related movement disorders typically involve **relatively simple movements** that disturb sleep. Table 15-3 lists the ICSD-3 group:"
            },
            {
              "type": "list",
              "title": "Sleep-related movement disorders (Table 15-3)",
              "items": [
                "Restless legs syndrome",
                "Periodic limb movement disorder",
                "Sleep-related leg cramps",
                "Sleep-related bruxism",
                "Sleep-related rhythmic movement disorder",
                "**Benign sleep myoclonus of infancy**",
                "**Propriospinal myoclonus at sleep onset**",
                "Due to a **medical condition**, **medication** or **substance**"
              ],
              "cols": 2
            },
            {
              "type": "defs",
              "items": [
                [
                  "Benign sleep myoclonus of infancy",
                  "Formerly benign neonatal sleep myoclonus. **Asynchronous jerks of limbs and trunk** during **quiet sleep** in neonates; begins in the **first week of life** and lasts **days to months**. Benign and apparently rare; **no treatment needed**."
                ],
                [
                  "Propriospinal myoclonus at sleep onset",
                  "**Spinal cord–mediated**, sometimes with **spinal cord lesions**. Movements appear in **relaxed wakefulness**, start in **abdominal and truncal** muscles and spread to the **neck and proximal limbs**, interfering with sleep onset. **Clonazepam** or **anticonvulsants** may help."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Medications that cause sleep-related movement disorders (Table 15-18)",
              "head": [
                "Drug class",
                "Notes"
              ],
              "rows": [
                [
                  "**Antidepressants**",
                  "Including most **tricyclics** and **SSRIs**"
                ],
                [
                  "Antiemetics",
                  ""
                ],
                [
                  "Antihistamines",
                  ""
                ],
                [
                  "**Antipsychotics**",
                  "**Restless legs** symptoms, **PLMD**"
                ],
                [
                  "Calcium channel blockers",
                  ""
                ],
                [
                  "**Lithium**",
                  ""
                ],
                [
                  "**Stimulants**",
                  "**Rhythmic movement disorders**, **bruxism**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Look beyond drugs",
              "text": "Neurologic diseases that cause **daytime movement disorders** can also cause sleep-related ones, and **stress, anxiety and sleep deprivation** may contribute to bruxism."
            }
          ]
        },
        {
          "id": "s15-variants",
          "title": "Isolated symptoms and normal variants",
          "blocks": [
            {
              "type": "defs",
              "items": [
                [
                  "Sleep talking (somniloquy)",
                  "Unconscious speech in sleep, seldom noticed unless it bothers a bed partner. Induced by **fever**, **stress** or **talking to the sleeper**. May accompany **sleep terrors, sleepwalking, confusional arousals, obstructive sleep apnea** and **RBD**."
                ],
                [
                  "Sleep starts (hypnic jerks)",
                  "Sudden brief contractions at the **wake–sleep transition** in **60% to 70% of adults**, usually in the legs, sometimes arms and head. Usually **benign**, but may come with a **sense of falling**, a hallucinated **flash of light** or a **loud crackling** sound; severe cases cause **sleep-onset insomnia**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Normal variants and isolated symptoms in ICSD-3 (Table 15-4)",
              "head": [
                "ICSD-3 category",
                "Variants"
              ],
              "rows": [
                [
                  "Insomnia",
                  "Excessive time in bed; **short sleeper**"
                ],
                [
                  "Sleep-related breathing disorders",
                  "**Snoring**; **catathrenia**"
                ],
                [
                  "Central disorders of hypersomnolence",
                  "**Long sleeper**"
                ],
                [
                  "Parasomnias",
                  "**Sleep talking**"
                ],
                [
                  "Sleep-related movement disorders",
                  "Excessive fragmentary myoclonus; hypnagogic foot tremor and alternating leg muscle activation; **sleep starts**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Short and long sleepers",
              "text": "Before diagnosing **insomnia**, ask whether the person is simply a **short sleeper** (or reacting to an **acute stressor**). Before diagnosing **hypersomnolence**, ask whether they are a **long sleeper** who normally needs more sleep."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Sleep talking alone",
              "text": "As the Ms. R case shows, **sleep talking by itself does not need a sleep study**; nocturnal wandering does."
            }
          ]
        }
      ]
    },
    {
      "title": "Assessment",
      "sections": [
        {
          "id": "s15-hx",
          "title": "The sleep history",
          "blocks": [
            {
              "type": "p",
              "text": "A careful clinical interview is **one of the most informative** parts of a sleep workup. A **sleep history questionnaire** (Table 15-19) helps."
            },
            {
              "type": "steps",
              "title": "Interview checklist",
              "items": [
                [
                  "Schedule",
                  "Habitual **bedtime and rising time** on **weekdays and weekends**."
                ],
                [
                  "Naps and sleepiness",
                  "Nap **frequency, duration** and whether **restorative**; overall **sleepiness**."
                ],
                [
                  "Initiating and maintaining sleep",
                  "Bedtime **rumination**, **fear of not sleeping**, excessive worry when trying to sleep."
                ],
                [
                  "Movements",
                  "Leg movements and sensations, **leg cramps**, **teeth grinding**, **dream enactment** (with or without injury)."
                ],
                [
                  "Other night symptoms",
                  "**Morning headaches**, **morning dry mouth**, nocturnal **reflux**, **hyperhidrosis**, **nocturia**, **enuresis**, nocturnal **tongue biting**, nightmares and sleep terrors."
                ],
                [
                  "Environment",
                  "**Family pets**, and whether they sleep in the bedroom or bed."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Example sleep history questionnaire (Table 15-19)",
              "head": [
                "Domain",
                "Questions"
              ],
              "rows": [
                [
                  "Daytime",
                  "Sleepiness or **sleep attacks**; **naps**; trouble **concentrating**"
                ],
                [
                  "Night",
                  "Trouble **falling asleep**; waking during the night, **more than once**; waking **too early**"
                ],
                [
                  "History",
                  "**How long**, and what **precipitated** it; usual night's sleep (hours, quality)"
                ],
                [
                  "Schedule and context",
                  "**Weekend versus weekday** schedule; others at home who interrupt sleep; woken by **pain or bathroom** needs; **shift work or travel**"
                ],
                [
                  "Substances and health",
                  "**Caffeine** (coffee, tea, soft drinks); other medical problems; **sleep medications** (dose, frequency, duration); other prescription and OTC drugs; past **depression or anxiety**; **snoring**"
                ],
                "Questions for the sleep partner",
                [
                  "Partner",
                  "Does the patient **snore**, **stop breathing** repeatedly, **jerk or kick** the legs? Does the partner have sleep trouble?"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Always ask the bed partner",
              "text": "Snoring, **witnessed apneas** and **leg kicking** are usually reported by the partner, not the patient."
            }
          ]
        },
        {
          "id": "s15-psg",
          "title": "Polysomnography and home sleep testing",
          "blocks": [
            {
              "type": "p",
              "text": "Polysomnography (PSG) is the **continuous, attended, comprehensive** recording of physiologic changes during sleep, usually **overnight for 6 to 8 hours**."
            },
            {
              "type": "table",
              "caption": "What polysomnography records",
              "head": [
                "Channel",
                "Used for"
              ],
              "rows": [
                [
                  "**EEG**, eye movements (EOG), **submentalis EMG**",
                  "**Sleep staging** and **CNS arousals**"
                ],
                [
                  "Nasal–oral airflow, nasal pressure, **respiratory effort**, **oxyhemoglobin saturation**",
                  "**Sleep apnea** and other breathing disorders"
                ],
                [
                  "Heart rhythm",
                  "Arrhythmias, bradycardia during apneas"
                ],
                [
                  "**Leg movements**, muscle tone",
                  "**PLMD** (and RLS); tone falls with deeper sleep"
                ],
                [
                  "Body position, snoring sounds",
                  "Usually recorded too"
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Indications for polysomnography (Table 15-20)",
              "head": [
                "Common reasons",
                "Other possible uses"
              ],
              "rows": [
                [
                  "Diagnosing **sleep-related breathing disorders**",
                  "**Atypical parasomnias**"
                ],
                [
                  "**PAP titration** and checking treatment efficacy",
                  "Sleep problems from **neuromuscular disorders**"
                ],
                [
                  "**Violent or potentially harmful** sleep behaviors",
                  "**PLMD**"
                ],
                [
                  "Separating **narcolepsy** from other hypersomnolence",
                  "Arousals from **seizure disorder**"
                ],
                [
                  "Separating **parasomnias from nocturnal seizures**",
                  "Excessive daytime sleepiness; **waking gasping or choking**; narcolepsy (sleep quality and quantity **before an MSLT**)"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "No PSG for RLS",
              "text": "A sleep study is **not needed to diagnose restless legs syndrome**."
            },
            {
              "type": "defs",
              "title": "Standard measures (Table 15-21)",
              "items": [
                [
                  "Sleep latency",
                  "Lights out to the appearance of **stage 2** sleep (as the book defines it)."
                ],
                [
                  "Early morning awakening",
                  "Time continuously awake from the last sleep stage to the **end of the record** (usually 7 AM)."
                ],
                [
                  "Sleep efficiency",
                  "**Total sleep time divided by total recording time (time in bed) × 100**."
                ],
                [
                  "Apnea index",
                  "Apneas **longer than 10 seconds** per hour of sleep."
                ],
                [
                  "Nocturnal myoclonus index",
                  "**Periodic leg movements per hour**."
                ],
                [
                  "REM latency",
                  "Sleep onset to the **first REM period**."
                ],
                [
                  "Sleep-onset REM period (SOREMP)",
                  "**REM soon after sleep onset** (within **15 minutes** on the MSLT)."
                ]
              ]
            },
            {
              "type": "update",
              "title": "Correction: two polysomnography definitions",
              "text": "**Sleep efficiency** is total sleep time **divided by** time in bed (the recording time), times 100; Table 15-21 prints \"or\". A **sleep-onset REM period** is REM sleep within **15 minutes** of sleep onset, the figure the MSLT uses, not 10 minutes as the table states.",
              "source": "Iber C et al., The AASM Manual for the Scoring of Sleep and Associated Events, 2007"
            },
            {
              "type": "table",
              "caption": "Typical findings by disorder",
              "head": [
                "Disorder",
                "Polysomnographic picture"
              ],
              "rows": [
                [
                  "Obstructive sleep apnea",
                  "Airflow stops wholly or partly for **at least 10 seconds** while **chest and abdominal effort continue**; desaturation, often **bradycardia** and possible PVCs, ending in an **arousal** ('breakthrough') with restless movement"
                ],
                [
                  "Central sleep apnea",
                  "Like OSA but **respiratory effort also stops**"
                ],
                [
                  "Sleep-related hypoventilation",
                  "**Raised CO2** with reduced breathing, or persistent **low oxyhemoglobin** not caused by apneas or hypopneas"
                ],
                [
                  "Narcolepsy",
                  "Characteristic **sleep-onset REM period**"
                ],
                [
                  "Hypersomnolence disorder",
                  "Looks like **sleep deprivation** but persists after nights of extended sleep; slow-wave sleep may be raised"
                ],
                [
                  "Parasomnias",
                  "Helps exclude **seizures**, breathing disorders or another sleep disorder; sleep terrors arise from **stage 4** slow-wave sleep (Fig. 15-5)"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Home sleep testing",
              "items": [
                [
                  "What it records",
                  "A limited set of cardiopulmonary signals: **airflow**, **respiratory effort**, **heart rhythm**, **snoring** and **oximetry**."
                ],
                [
                  "Strengths",
                  "**Much cheaper** than laboratory PSG; detects **moderate to severe** sleep apnea."
                ],
                [
                  "Limits",
                  "**Less sensitive**, so **negative studies are problematic**; it does **not** screen for the full range of sleep disorders."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "A negative home test is not the end",
              "text": "If a home test is negative despite **obvious symptoms or comorbidity**, schedule **laboratory polysomnography**. If symptoms persist after a home-diagnosed breathing disorder is treated, follow up carefully for another sleep disorder."
            }
          ]
        },
        {
          "id": "s15-mslt",
          "title": "MSLT, maintenance of wakefulness test and actigraphy",
          "blocks": [
            {
              "type": "p",
              "text": "The **multiple sleep latency test (MSLT)** is **essential for the workup of narcolepsy**. It measures how quickly the patient falls asleep when allowed to, and whether REM sleep appears."
            },
            {
              "type": "steps",
              "title": "MSLT procedure",
              "items": [
                [
                  "Start",
                  "Begin **2 hours after morning awakening**."
                ],
                [
                  "Nap opportunities",
                  "**Five** **20-minute** naps at **2-hour intervals**; the patient is told **not to resist** sleep."
                ],
                [
                  "Recording",
                  "**EEG, EOG and submentalis EMG** to stage sleep."
                ],
                [
                  "If sleep occurs",
                  "Wake the patient **15 minutes after sleep onset**."
                ],
                [
                  "If no sleep",
                  "End the session after **20 minutes**."
                ],
                [
                  "Interpret",
                  "**Sleep latency** gauges hypersomnolence; **REM in 2 or more naps** confirms narcolepsy, or **REM in 1 nap** if the previous night's PSG showed **REM within 15 minutes** of sleep onset."
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Maintenance of wakefulness test (MWT)",
              "items": [
                [
                  "Sessions",
                  "**40-minute** sessions at **2-hour intervals** across the day."
                ],
                [
                  "Instruction",
                  "The patient tries to **stay awake**, sitting in a darkened room in a comfortable chair or in bed with a bolster pillow."
                ],
                [
                  "Sleep onset",
                  "The **first epoch of stage 2, 3 or 4 or REM**, or **3 consecutive epochs of stage 1**."
                ],
                [
                  "Interpret",
                  "Any sleep shows some sleepiness; latency **under 8 minutes is abnormal**; **8 to 40 minutes** is of **unknown significance**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "MSLT versus MWT",
              "head": [
                "",
                "MSLT",
                "MWT"
              ],
              "rows": [
                [
                  "Instruction",
                  "**Try to fall asleep**",
                  "**Try to stay awake**"
                ],
                [
                  "Session length",
                  "20 minutes",
                  "40 minutes"
                ],
                [
                  "Main use",
                  "**Diagnosing narcolepsy**, assessing hypersomnolence",
                  "**Treatment outcome**; **fitness-for-duty** testing"
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Actigraphy",
                  "A wrist-worn movement recorder, like a watch, giving a **rough measure of the sleep–wake cycle** over **days or weeks**. Useful for **insomnia**, **circadian rhythm disorders**, **movement disorders** and rare events."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Opposite instructions",
              "text": "MSLT: 'do not resist sleep'. MWT: 'try to stay awake'. Confusing the two is a classic exam trap."
            }
          ]
        },
        {
          "id": "s15-ddx-all",
          "title": "Differential and comorbidity at a glance",
          "blocks": [
            {
              "type": "p",
              "text": "For any sleep–wake complaint, the differential diagnosis should cover five groups:"
            },
            {
              "type": "list",
              "items": [
                "Other **sleep–wake disorders**",
                "**Psychiatric disorders**",
                "**Medical conditions**",
                "**Medications and substances**",
                "**Normal variants**"
              ],
              "ordered": true
            },
            {
              "type": "table",
              "caption": "Disorders commonly comorbid with sleep disorders (Table 15-23)",
              "head": [
                "Sleep disorder group",
                "Psychiatric comorbidity",
                "Medical comorbidity"
              ],
              "rows": [
                [
                  "Insomnia disorder",
                  "**Bipolar disorder**, **generalized anxiety disorder**, **major depressive disorder**, **PTSD**, **schizophrenia**",
                  ""
                ],
                [
                  "Hypersomnolence disorder",
                  "Bipolar disorder; depressive disorders (especially **seasonal depression**); **neurodegenerative** disorders; **substance use disorders (stimulants)**",
                  ""
                ],
                [
                  "Narcolepsy",
                  "**Anxiety**, **depressive** disorders",
                  "**Obstructive sleep apnea**, headache, hyperlipidemia, hypertension, **obesity**, peripheral neuropathy, **thyroid disease** and other endocrinopathies"
                ],
                [
                  "Sleep-related breathing disorders",
                  "Anxiety disorders, **dementia**, mood disorders, PTSD, psychotic disorders",
                  "**Cardiovascular disease**, **diabetes mellitus**, **heart failure**, **hypertension**, **obesity**"
                ],
                [
                  "Circadian rhythm sleep–wake disorders",
                  "Depression, **neurodegenerative** and **neurodevelopmental** disorders, **personality disorder**, somatic symptom disorders, substance use disorders",
                  "**Blindness**, cardiovascular disease, diabetes mellitus, gastrointestinal disease"
                ],
                "Parasomnias and sleep-related movement disorders",
                [
                  "Sleepwalking",
                  "**Obsessive-compulsive disorder**, **major depression**",
                  ""
                ],
                [
                  "Nightmare disorder",
                  "**PTSD**, **acute stress disorder**, schizophrenia, anxiety disorders, personality disorders, **bereavement**",
                  "Pain, neurodegenerative disorders, cardiovascular disease"
                ],
                [
                  "REM sleep behavior disorder",
                  "",
                  "**Narcolepsy**, **neurodegenerative disorders**"
                ],
                [
                  "Restless legs syndrome",
                  "Depression, anxiety, **attentional disorders**",
                  "**Iron deficiency**"
                ]
              ],
              "note": "The book prints each row as an unlabeled list; the split into psychiatric and medical columns here follows the printed order.",
              "wide": true
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Insomnia and suicide",
              "text": "Nearly **90%** of patients with major depression have insomnia, and insomnia is an **independent risk factor for suicide** in MDD. Insomnia also **predicts PTSD** after trauma, and lost sleep may **precipitate mania**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Stimulant misuse in hypersomnolence",
              "text": "Patients with hypersomnolence often misuse **stimulants** trying to stay awake, and the **shift work** circadian type carries especially heavy psychiatric and medical comorbidity."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "RBD as a warning sign",
              "text": "**Many patients with RBD go on to develop a neurodegenerative disorder**, so new dream enactment in an adult deserves neurologic follow-up."
            }
          ]
        }
      ]
    }
  ]
});
