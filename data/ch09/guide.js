/* Chapter 9 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 9. */
KS.add("ch09", "guide", {
  intro: "The obsessive-compulsive and related disorders share repetitive, intrusive thoughts and repeated mental acts or behaviors. The group includes obsessive-compulsive disorder, body dysmorphic disorder, hoarding disorder, hair-pulling disorder (trichotillomania) and excoriation (skin-picking) disorder, with related categories for medical, substance-induced and other presentations. They tend to be chronic and hidden out of embarrassment, yet each has treatments that work.",
  objectives: [
    "Define obsessions and compulsions and recognize the four main OCD symptom dimensions in adults and children.",
    "Recognize body dysmorphic disorder, hoarding disorder, trichotillomania and excoriation disorder, including the role of insight.",
    "Apply the DSM-5 and ICD-10 criteria and specifiers (insight, tic-related, muscle dysmorphia, excessive acquisition).",
    "Work through the differential: PANDAS and basal ganglia disease, Tourette disorder, OCPD, GAD, mood and psychotic disorders, eating disorders, factitious dermatitis and normal behavior.",
    "Treat OCD with high-dose SRIs for at least 12 weeks, augmentation and exposure and response prevention; know the specific approaches for BDD, hoarding and body-focused repetitive behaviors.",
    "Summarize the epidemiology, course and cortico-striatal-thalamic-cortical model of these disorders."
  ],
  parts: [
    {
      title: "Recognize the disorders",
      sections: [
        {
          id: "s9-overview",
          title: "Obsessions and compulsions",
          blocks: [
            { type: "defs", items: [
              ["Obsessions", "Intrusive, unwanted, repetitive **thoughts, urges or impulses** that often sharply increase anxiety or distress, for example contamination (“my hands are dirty”) or doubt (“I left the stove on”)."],
              ["Compulsions", "Repetitive **behaviors or mental acts** done in response to obsessions, or in a **rigid, rule-bound** way."],
              ["OCD", "Recurrent obsessions or compulsions that cause severe distress, are **time-consuming**, and interfere with routine, work, social life or relationships. Some patients have only obsessions or only compulsions, but **most have both**."]
            ] },
            { type: "callout", kind: "caution", title: "Insight varies", text: "Most patients with OCD know their beliefs are not real. Some have **poor insight**, and a few have **none**: their obsessions are delusional. These patients may be **misdiagnosed with a psychotic disorder** and treated inappropriately." }
          ]
        },
        {
          id: "s9-ocd-presentation",
          title: "OCD in adults: the four symptom patterns",
          blocks: [
            { type: "p", text: "Symptoms can overlap and change over time, but they cluster in four main dimensions, listed from most to least common." },
            { type: "steps", items: [
              ["1. Contamination and cleansing", "The most common: an obsession of contamination followed by **washing** or **avoidance** of the feared object, often something hard to avoid (feces, urine, dust, germs). Patients may rub the skin off their hands or be unable to leave home. Anxiety is most common, but **shame and disgust** also occur. Patients believe contamination spreads by the slightest contact."],
              ["2. Pathologic doubt and checking", "An obsession of doubt, often implying danger of violence (the stove left on, a door unlocked), followed by **checking**, sometimes many trips back home. Patients feel guilty and doubt themselves."],
              ["3. Intrusive forbidden thoughts", "Obsessional thoughts **without a compulsion**, usually of a **sexual or aggressive** act the patient finds reprehensible. Patients may report themselves to the police or confess to a priest. Suicidal ideation can be obsessive and unlikely to be acted on, but **always assess actual risk**."],
              ["4. Symmetry and ordering", "A need for symmetry or precision, leading to **compulsive slowness**: hours to eat a meal or shave."]
            ] },
            { type: "p", text: "Also common: **religious obsessions** and **compulsive hoarding**. Compulsive hair pulling and nail biting are related behaviors, and masturbation can be compulsive." },
            { type: "case", title: "Chapter case: Ms. K and the locked doors", text: "Ms. K had lost several jobs and relationships to checking rituals. Doubting she had locked her car, she checked so forcefully that she broke door handles and arrived up to an hour late; she returned repeatedly to check her apartment door. Skipping the checks left her too worried about theft to function. Over 3 months it worsened until she lost her job, though she recognized the fears were irrational.", point: "Pathologic doubt with checking compulsions that relieve anxiety, preserved insight, and severe functional cost is classic OCD." },
            { type: "table", caption: "OCD symptoms in adults (after Table 9-1)", head: ["Obsessions (N = 200)", "%", "Compulsions (N = 200)", "%"], rowHeads: false, rows: [
              ["Contamination", "**45**", "Checking", "**63**"],
              ["Pathologic doubt", "42", "Washing", "50"],
              ["Somatic", "36", "Counting", "36"],
              ["Need for symmetry", "31", "Need to ask or confess", "31"],
              ["Aggressive", "28", "Symmetry and precision", "28"],
              ["Sexual", "26", "Hoarding", "18"],
              ["Multiple obsessions", "60", "Multiple compulsions", "48"]
            ], note: "Course (N = 100): continuous 85%, deteriorative 10%, episodic 2%. Age at onset: men 17.5 ± 6.8 years, women 20.8 ± 8.5 years." }
          ]
        },
        {
          id: "s9-ocd-children",
          title: "OCD in children and adolescents",
          blocks: [
            { type: "table", wide: true, caption: "Presenting symptoms in 70 consecutive young patients (after Table 9-2)", head: ["Symptom", "%"], rows: [
              "Obsessions",
              ["Concern or disgust about bodily wastes, dirt, germs, toxins", "**43**"],
              ["Fear something terrible may happen (fire, death or illness)", "24"],
              ["Symmetry, order or exactness", "17"],
              ["Scrupulosity (excessive praying or religious concern)", "13"],
              ["Lucky and unlucky numbers", "8"],
              ["Forbidden sexual thoughts, images or impulses", "4"],
              ["Intrusive nonsense sounds, words or music", "1"],
              "Compulsions",
              ["Excessive or ritualized washing, showering, bathing, toothbrushing, grooming", "**85**"],
              ["Repeating rituals (in and out of doors, up and down from chairs)", "51"],
              ["Checking doors, locks, stove, appliances, car brakes", "46"],
              ["Miscellaneous rituals (licking, spitting, special dress)", "26"],
              ["Cleaning to remove contaminants", "23"],
              ["Touching", "20"],
              ["Counting", "18"],
              ["Ordering and arranging", "17"],
              ["Measures to prevent harm", "16"],
              ["Hoarding and collecting", "11"]
            ], note: "Totals exceed 100% because most patients had several symptoms." },
            { type: "callout", kind: "exam", text: "In adults the most common **compulsion** is **checking**; in children it is **washing and grooming**. In both, the most common **obsession** is **contamination**." }
          ]
        },
        {
          id: "s9-bdd",
          title: "Body dysmorphic disorder",
          blocks: [
            { type: "p", text: "Persistent preoccupation with one or more **perceived defects in appearance** that are slight or invisible to others, leading to mental acts or behaviors: **comparing** with others, **mirror checking**, or **camouflaging**." },
            { type: "list", items: [
              "The most common concerns involve the **face and head**: skin, nose shape and size, hair. Any body area can be involved, and some concerns are vague (a “scrunchy” chin).",
              "Over the illness, patients worry about **five to seven** body areas; more than a quarter focus on **symmetry**.",
              "Associated: **ideas or delusions of reference** (others noticing the flaw), frequent mirror checking **or avoidance of reflective surfaces**, attempts to hide the deformity.",
              "Avoidance ranges from minor social avoidance to being **housebound**: always assess it."
            ] },
            { type: "callout", kind: "exam", title: "Insight is poorer than in OCD", text: "Only about **a quarter** of patients with BDD have reasonable insight, and about **one third have absent insight**." },
            { type: "case", title: "Chapter case: Ms. R, convinced she was ugly", text: "A 28-year-old woman believed she was ugly and that people laughed at her, though her family found her attractive. From age 13 she fixated on a “fat” nose and eyes too far apart; a confident, sociable student, she withdrew, her grades fell and she left high school. She picked at facial “blemishes,” checked every reflective surface, and could not be reassured.", point: "Adolescent onset, fixation on facial features, checking, picking and social withdrawal despite reassurance are typical of BDD." },
            { type: "table", caption: "Location of imagined defects in 30 patients (after Table 9-3)", head: ["Location", "%"], rows: [
              ["Hair (mostly head hair; some beard or body hair)", "**63**"],
              ["Nose", "50"],
              ["Skin (acne, facial lines, other)", "50"],
              ["Eyes", "27"],
              ["Head or face shape or size", "20"],
              ["Overall build, bone structure", "20"],
              ["Lips, chin, stomach or waist", "17 each"],
              ["Teeth, legs or knees", "13 each"],
              ["Breasts or pectorals; ugly face in general", "10 each"]
            ], note: "Most patients had more than one location." }
          ]
        },
        {
          id: "s9-hoarding",
          title: "Hoarding disorder",
          blocks: [
            { type: "p", text: "Persistent, profound **difficulty discarding** possessions, producing congestion, clutter and significant distress or impairment. That distress and impairment separate it from **collecting**. People typically acquire things of little or no value and cannot throw them away." },
            { type: "defs", items: [
              ["What drives it", "Fear of losing items that **may be needed later**, distorted beliefs about possessions, emotional attachment, and an overemphasis on **remembering information** (keeping old newspapers so nothing important is lost)."],
              ["The core deficit", "Inability to **organize possessions** and keep them organized; many hoard rather than make decisions about discarding."],
              ["Insight", "Most do **not** see their behavior as a problem; many consider it reasonable and part of their identity."],
              ["How it accumulates", "Mostly **passively** rather than intentionally, so clutter builds gradually. Common items: newspapers, mail, magazines, old clothes, bags, books, lists and notes."],
              ["Risks", "Impaired eating, sleeping and grooming; poor sanitation, especially with **animal hoarding**; **fires**, falls and deaths; **pest infestation** affecting neighbors; **eviction**."]
            ] },
            { type: "case", title: "Chapter case: Ms. T and the cluttered home", text: "A 55-year-old woman was brought by her son, who said she could not throw anything away. Over 5 years boxes and bags of papers, magazines, clothes and trinkets filled her home except the kitchen and bathroom, until it was hard to move around. She grew agitated when he tried to help, had stopped entertaining, and was saddened that he no longer visited. She had always been this way but never saw it as a problem, and said she might need the things later.", point: "Lifelong difficulty discarding, gradual worsening, poor insight, family distress and the belief that items will be needed later are typical of hoarding disorder." }
          ]
        },
        {
          id: "s9-trich",
          title: "Hair-pulling disorder (trichotillomania)",
          blocks: [
            { type: "p", text: "A chronic disorder of **repetitive hair pulling** causing variable, sometimes visible, hair loss. The name comes from the Greek *trich* (hair) and *tillein* (to pull), coined by the French dermatologist **François Hallopeau in 1889**. Once thought rare, it appears relatively common. It resembles both OCD and impulse-control disorders: **tension before pulling, then relief or gratification**." },
            { type: "list", items: [
              "Pulling is **not for cosmetic reasons**; patients describe an irresistible urge, and repeated attempts to stop.",
              "Most common site: the **scalp**, then eyebrows, eyelashes and beard; the trunk, armpits and pubic area are less common.",
              "Hair loss shows as **short, broken strands next to long, healthy hairs**; the skin and scalp are otherwise normal. Itching and tingling may occur.",
              "**Trichophagy** (mouthing or eating hair) can follow, with **trichobezoars**, malnutrition and **intestinal obstruction**.",
              "Patients usually **deny** the behavior and hide the alopecia; some self-injure in other ways (head banging, nail biting, scratching, gnawing, excoriation)."
            ] },
            { type: "defs", title: "Two styles of pulling (most patients mix both)", items: [
              ["Focused pulling", "An intentional act to control an unpleasant urge, sensation (itching, burning) or thought."],
              ["Automatic pulling", "Outside awareness, most often during **sedentary** activities."]
            ] },
            { type: "case", title: "Chapter case: Ms. C, pulling while she read", text: "A 27-year-old graduate student began pulling hairs at the nape of her neck at age 11, later from her whole scalp, hiding small bald patches with careful brushing, scarves and hats. She pulled every day, often unaware until she found a pile of hair on her book; trying to stop made her increasingly anxious. Sessions lasted 10 minutes to an hour, yet she functioned well at school.", point: "Childhood onset, scalp involvement, automatic pulling during sedentary tasks, concealment and rising tension when resisting are typical of trichotillomania." }
          ]
        },
        {
          id: "s9-excoriation",
          title: "Excoriation (skin-picking) disorder",
          blocks: [
            { type: "p", text: "Repeated picking of the skin severe enough to cause **lesions**, with failed attempts to stop and clinically significant distress or impairment. Some scab picking is nearly universal. Older literature called it **neurotic** or **psychogenic excoriation**; **DSM-5** first made it a separate diagnosis." },
            { type: "list", items: [
              "Most common site: the **face**, then hands, fingers, arms and legs; often several sites.",
              "Severe cases cause disfigurement and medical complications needing **skin grafts** or other procedures.",
              "**Tension before, relief after**; picking can relieve stress and negative feelings, followed by guilt and embarrassment.",
              "Up to **87 percent** feel embarrassed and **58 percent** avoid social situations; many hide lesions with bandages, makeup or clothing.",
              "**15 percent** report suicidal ideation because of the picking, and about **12 percent** have attempted suicide."
            ] },
            { type: "case", title: "Chapter case: Ms. J, sent by her dermatologist", text: "A 22-year-old woman picked her face up to three times a day for 20 minutes to over an hour, leaving extensive scarring; one lesion became infected. It began at puberty with acne and spread to clear skin as the urge grew. She felt great tension before picking and relief only once she started, and withdrew from all social activities.", point: "Pubertal onset, facial picking with tension and relief, infection and social withdrawal fit excoriation disorder; dermatologists are often the first to see it." }
          ]
        },
        {
          id: "s9-other",
          title: "Medical, substance-induced and other specified forms",
          blocks: [
            { type: "defs", items: [
              ["Due to another medical condition", "When symptoms in this category result from a medical condition, use this separate diagnosis."],
              ["Substance-induced", "Symptoms due to drugs, medications or alcohol, during use or withdrawal, and not part of a delirium."],
              ["Other specified", "Symptoms typical of the group that do not meet full criteria, in three situations: an **atypical** presentation; a specific syndrome not listed in DSM-5, such as **olfactory reference syndrome**; or **insufficient information**."]
            ] },
            { type: "h", text: "Olfactory reference syndrome" },
            { type: "list", items: [
              "A false belief of a **foul body odor** that others do not perceive, with repetitive washing or changing clothes.",
              "Insight ranges from good to absent; if the belief reaches **somatic delusion**, delusional disorder may fit better.",
              "Predominantly **male and single**; mean onset **25 years**.",
              "Exclude medical causes: **temporal lobe epilepsy**, hippocampal irritation from **pituitary tumors**, and **frontal, ethmoid or sphenoid sinusitis**.",
              "Whether it deserves its own diagnosis is controversial; DSM-5 places it under **other specified**."
            ] }
          ]
        }
      ]
    },
    {
      title: "Make the diagnosis",
      sections: [
        {
          id: "s9-map",
          title: "The disorders at a glance",
          blocks: [
            { type: "table", wide: true, caption: "Comparing the obsessive-compulsive and related disorders", head: ["Disorder", "Core feature", "Insight", "Typical onset", "Sex ratio (community)"], rows: [
              ["OCD", "Obsessions and/or compulsions, ≥1 hour a day or impairing", "Mostly good", "Mean **19**; rare after 30", "More women in community; equal in clinics"],
              ["Body dysmorphic disorder", "Preoccupation with perceived appearance flaws, plus repetitive acts", "**Poor**: a third absent", "Adolescence", "More women in community; equal in clinics"],
              ["Hoarding disorder", "Difficulty discarding, clutter", "Usually poor", "Symptoms in youth; criteria met in **30s**", "About equal; more women in clinics"],
              ["Trichotillomania", "Recurrent hair pulling with hair loss", "Usually good, hidden", "At **menarche**", "**4:1** female in adults; equal in children"],
              ["Excoriation disorder", "Recurrent skin picking with lesions", "Usually good, hidden", "Mean **12**, puberty", "More women, less lopsided than trichotillomania"]
            ] },
            { type: "timeline", title: "Typical age at onset", cols: ["Childhood", "Puberty and adolescence", "20s–30s", "50s and later"], rows: [
              { label: "Excoriation and hair pulling", from: 1, to: 2, bar: "Puberty, menarche", color: "case", note: "Excoriation mean age 12." },
              { label: "Body dysmorphic disorder", from: 1, to: 2, bar: "Adolescence", color: "dx", note: "Earlier onset predicts a worse course." },
              { label: "OCD", from: 1, to: 3, bar: "Mean 19", color: "guide", note: "Earlier in males; onset after 30 is rare." },
              { label: "Hoarding disorder", from: 2, to: 4, bar: "Criteria in 30s; first treatment ~50", color: "found", note: "Worsens each decade." }
            ] }
          ]
        },
        {
          id: "s9-dx-ocd",
          title: "Diagnosing OCD",
          blocks: [
            { type: "p", text: "A thorough history and examination usually establishes OCD. Patients try to **neutralize** obsessions with compulsions that are **not realistically connected** to the thought, or are excessive. When rating impact, include **avoidance** of triggers." },
            { type: "table", wide: true, caption: "OCD in DSM-5 and ICD-10 (after Table 9-4)", head: ["Feature", "DSM-5", "ICD-10"], rows: [
              ["Symptoms", "Obsessions (intrusive thoughts the person tries to ignore or counteract) and/or compulsions (repetitive acts, usually driven by an obsession, to relieve anxiety)", "Recurrent obsessional thoughts and/or compulsive acts; compulsions are stereotyped behaviors to neutralize a thought or prevent an adverse event; resistance often fails and worsens anxiety"],
              ["Required", "Obsessions, compulsions or both", "Obsessions, compulsions or both"],
              ["Impact", "**At least 1 hour a day**, or significant distress or impairment", "—"],
              ["Exclusions", "Medical illness; substance; other psychiatric disorder", "Obsessive-compulsive personality disorder"],
              ["Specifiers", "**Tic-related** (current or past tic disorder); insight **good or fair**, **poor**, or **absent/delusional**", "Predominantly obsessional thoughts or ruminations; predominantly compulsive acts; mixed"]
            ] }
          ]
        },
        {
          id: "s9-dx-bdd",
          title: "Diagnosing body dysmorphic disorder",
          blocks: [
            { type: "p", text: "DSM-5 requires preoccupation with a perceived defect, or overemphasis of a slight one, and **at some point** compulsive behaviors or mental acts related to it (mirror checking, excessive grooming, comparing). The preoccupation must cause significant distress or impairment." },
            { type: "table", wide: true, caption: "BDD in DSM-5 and ICD-10 (after Table 9-5)", head: ["Feature", "DSM-5", "ICD-10"], rows: [
              ["Symptoms", "Preoccupation with appearance and subjective flaws; repetitive behaviors at some point (**checking, grooming, skin picking, comparing**)", "Excessive preoccupation with image or appearance"],
              ["Impact", "Significant distress or impairment", "Significant distress or impairment"],
              ["Exclusions", "Medical illness; substance; **eating disorder**; other psychiatric disorder", "—"],
              ["Specifiers", "**With muscle dysmorphia** (belief of too little muscle or too small a build); insight good or fair, poor, or absent/delusional", "—"]
            ] }
          ]
        },
        {
          id: "s9-dx-hoarding",
          title: "Diagnosing hoarding disorder",
          blocks: [
            { type: "p", text: "Key features: acquiring large amounts of useless possessions, **being unable to discard them**, and resulting clutter in living areas, causing distress or impairment. If living spaces are clear, it is because **others have cleaned them**. Some patients are entirely unaware of the problem, and delusional beliefs about items can occur." },
            { type: "table", wide: true, caption: "Hoarding disorder in DSM-5 and ICD-10 (after Table 9-6)", head: ["Feature", "DSM-5", "ICD-10"], rows: [
              ["Symptoms", "Excessive attachment to possessions; distress at separation; excessive accumulation; distress, impairment or compromised safety or health", "Difficulty parting with objects because of a perceived need to save them; distress and impairment at separation"],
              ["Exclusions", "Medical illness; **neurocognitive disorder**; other psychiatric disorder", "—"],
              ["Specifiers", "**With excessive acquisition**; insight good or fair, poor, or absent/delusional", "—"]
            ] }
          ]
        },
        {
          id: "s9-dx-bfrb",
          title: "Diagnosing trichotillomania and excoriation disorder",
          blocks: [
            { type: "table", wide: true, caption: "The body-focused repetitive behaviors (after Tables 9-7 and 9-8)", head: ["Feature", "Trichotillomania (hair pulling)", "Excoriation (skin picking)"], rows: [
              ["DSM-5 criteria", "Recurrent pulling causing **hair loss**; repeated attempts to stop; distress or impairment", "Recurrent picking causing **skin lesions**; repeated attempts to stop; distress or impairment"],
              ["ICD-10", "Noticeable hair loss from recurrent pulling, **preceded by anxiety that pulling relieves**", "As for the obsessive-compulsive disorders"],
              ["Exclusions", "Medical illness; other psychiatric disorder; preexisting skin inflammation; response to a delusion or hallucination; **stereotypic movement disorder**", "Other psychiatric disorder; **factitious dermatitis**; also another medical condition and substance use (e.g., cocaine or methamphetamine)"],
              ["Key point", "Not motivated by **cosmetic** reasons", "A thorough **physical examination** comes first"]
            ] }
          ]
        },
        {
          id: "s9-ddx-medical",
          title: "Differential diagnosis: medical and neurologic",
          blocks: [
            { type: "defs", items: [
              ["PANDAS", "**Pediatric autoimmune neuropsychiatric disorders associated with streptococcus**: OCD-like symptoms in children after **group A β-hemolytic streptococcal** infection, possibly from autoimmune inflammation of the **basal ganglia** disrupting cortical–striatal–thalamic circuits."],
              ["Basal ganglia disease", "OCD-like disorders in **Sydenham chorea and Huntington disease** underpin the view of OCD as a basal ganglia disorder. Look for their neurologic signs."],
              ["Late onset", "OCD usually begins **before 30**; new onset in an older person should prompt a search for **neurologic** causes."],
              ["Alopecia", "Many medical disorders cause hair loss; a **biopsy** may be needed to separate trichotillomania from **alopecia areata** and **tinea capitis**."],
              ["Itching and picking", "Itchy conditions such as **scabies**, and conditions like **Prader–Willi syndrome**, can cause skin picking."]
            ] },
            { type: "h", text: "Tourette disorder" },
            { type: "list", items: [
              "OCD and Tourette disorder co-occur in individuals over time and within families.",
              "About **90 percent** of people with Tourette disorder have compulsive symptoms, and up to **two thirds** meet OCD criteria.",
              "Tics themselves only slightly resemble OCD, but the **premonitory urges** before tics resemble obsessions, and complex motor tics resemble compulsions."
            ] }
          ]
        },
        {
          id: "s9-ddx-psych",
          title: "Differential diagnosis: other psychiatric disorders",
          blocks: [
            { type: "table", wide: true, caption: "How to tell them apart", head: ["Condition", "Distinguishing point"], rows: [
              ["Obsessive-compulsive personality disorder", "Concern with details and **perfectionism**, but **no genuine obsessions or compulsions**"],
              ["Generalized anxiety disorder", "Worries about **real-life concerns**, less irrational and less **ego-dystonic**"],
              ["Depression and mania", "Ruminations and preoccupations are **mood-congruent and ego-syntonic** and not neutralized by compulsions; depressive obsessive thoughts occur **only during episodes**"],
              ["Psychotic disorders", "Patients **cannot acknowledge the unreasonableness** of their behavior and have other psychotic features"],
              ["Delusional BDD", "When preoccupation reaches delusional intensity, **delusional disorder, somatic type** can be diagnosed, generally **in addition to** BDD"],
              ["Avoidant personality disorder, social phobia", "Worry about appearance is usually **not prominent, persistent, distressing or impairing**"],
              ["Anorexia nervosa", "Bodily preoccupation focused on **weight**"],
              ["Gender dysphoria", "Discomfort with, or wrongness about, **primary and secondary sex characteristics**"],
              ["Autism spectrum, psychosis, Prader–Willi, Alzheimer disease", "Can cause hoarding (in autism, collections reflect a special interest); damage to the **anterior ventromedial prefrontal and cingulate cortices** can cause indiscriminate hoarding. Diagnose hoarding disorder only if **independent** of these"],
              ["OCD with hoarding", "Hoarding **driven by an obsession** (symmetry, incompleteness, harm, contamination); in hoarding disorder there is **no obsession**, just a wish to keep items. Both can coexist"],
              ["Skin picking in OCD or BDD", "Picking from **contamination** obsessions is part of OCD; picking over **appearance** is part of BDD, with **no second diagnosis**"],
              ["Olfactory reference syndrome", "Washing or changing clothes over a believed **odor**; give multiple diagnoses only when concerns go beyond the usual focus of each disorder"]
            ] },
            { type: "h", text: "Factitious dermatitis (dermatitis artefacta)" },
            { type: "list", items: [
              "Self-inflicted skin injury using methods **more elaborate** than simple picking.",
              "Seen in **0.3 percent** of dermatology patients; **female to male 8:1**; most often adolescents and young adults.",
              "Lesions (blisters, ulcers, erythema, edema, purpura, sinuses) are often **bizarre and linear, with angular or geometric edges**.",
              "**Healthy skin right next to dramatic lesions** is a clue, and the patient’s account of how lesions developed is **vague**."
            ] }
          ]
        },
        {
          id: "s9-normal",
          title: "Normal behaviors",
          blocks: [
            { type: "p", text: "Many of these behaviors exist in ordinary life: concern about appearance, care about germs, removing stray hairs, biting a nail or picking a scab, and **collecting**, an enjoyable and sometimes lucrative hobby. A **global pandemic** blurs the line between contamination fears and sensible caution, an overlap likely to persist." },
            { type: "callout", kind: "pearl", title: "Normal versus disorder", text: "Normal behaviors are **desired, usually restricted** (a collector collects certain toys) and **often enjoyable**. The disorders cause **distress and impairment**." }
          ]
        }
      ]
    },
    {
      title: "Comorbidity and course",
      sections: [
        {
          id: "s9-comorbidity",
          title: "Comorbidity",
          blocks: [
            { type: "defs", items: [
              ["OCD", "Lifetime **major depression about 67 percent**, **social phobia about 25 percent**; also alcohol use, GAD, specific phobia, panic, eating and personality disorders. **Tourette disorder in 5–7 percent**; **20–30 percent** have a history of tics. Suicide is a risk for all patients."],
              ["Body dysmorphic disorder", "The most depression-laden of the group: lifetime **depression 75 percent** and **suicidal ideation 80 percent**. About **one third** have had OCD; about **30 percent** have panic attacks triggered by appearance concerns. High rejection sensitivity, low self-esteem, and substance use to self-medicate."],
              ["Hoarding disorder", "Commonly OCD, GAD and major depression."],
              ["Trichotillomania", "Other body-focused repetitive behaviors, most often **excoriation**; more OCD than in the general population. **More than half** of treatment seekers have another psychiatric disorder, mostly mood and anxiety. Medical sequelae such as trichobezoars."],
              ["Excoriation disorder", "Other body-focused repetitive behaviors, most often **hair pulling**; more OCD and BDD than in the general population; mood and anxiety disorders."]
            ] }
          ]
        },
        {
          id: "s9-course",
          title: "Course and prognosis",
          blocks: [
            { type: "defs", items: [
              ["OCD", "Generally **chronic**; untreated, it can persist for decades. Recent data show long-term outcomes **can be positive**, so encourage hope and trials of several evidence-based treatments."],
              ["Body dysmorphic disorder", "Generally chronic; **earlier onset and more severe symptoms at intake** predict a worse course."],
              ["Hoarding disorder", "**Later** than the others; often **chronic and progressive**. Symptoms often start in childhood or adolescence, criteria are met in the **30s**, and symptoms **worsen each decade**."],
              ["Trichotillomania", "Little long-term data; likely chronic untreated, though some cases **remit**."],
              ["Excoriation disorder", "Often chronic with **fluctuating** severity."]
            ] },
            { type: "callout", kind: "caution", title: "Why patients do not come", text: "People with these disorders often avoid care because they are **embarrassed**, think they should stop on their own, or do not know it is a recognized, **treatable** condition." }
          ]
        }
      ]
    },
    {
      title: "Treat",
      sections: [
        {
          id: "s9-tx-ocd-drugs",
          title: "OCD: medication",
          blocks: [
            { type: "p", text: "Effective drugs are **clomipramine** and the **SSRIs**; together with other serotonergic drugs they are called **serotonin reuptake inhibitors (SRIs)**. Head-to-head, clomipramine and SSRIs are **equally effective**, but SSRIs are **better tolerated**." },
            { type: "list", title: "Dosing and duration", items: [
              "Use **higher doses** than for depression, for example **fluoxetine 80 mg** or **sertraline 200 mg**; some patients respond to even more.",
              "Do **not exceed** recommended doses of **clomipramine or citalopram**, for safety reasons.",
              "Response is **slower** than in depression: give an SRI at least **12 weeks** before switching or augmenting.",
              "Continue the effective dose for at least **1 to 2 years**.",
              "Relapse risk on stopping is real: taper **very gradually**, with small changes every few months.",
              "A patient who fails one SRI **may respond to another**."
            ] },
            { type: "h", text: "Augmentation" },
            { type: "list", items: [
              "The largest evidence base is for **antipsychotics**; **risperidone and aripiprazole** are best supported as adjuncts, possibly especially with **tics** (data are inconsistent).",
              "Response to antipsychotic augmentation usually comes **quickly, about 4 weeks**. Monitor adverse effects of dopamine blockers.",
              "Other promising augmenting agents: **memantine, riluzole, ketamine, lamotrigine and N-acetylcysteine**."
            ] }
          ]
        },
        {
          id: "s9-tx-ocd-therapy",
          title: "OCD: psychotherapy, combined and somatic treatment",
          blocks: [
            { type: "p", text: "Despite a long psychodynamic tradition, there is **no rigorous evidence** that psychodynamic therapy treats OCD. The evidence comes from behavioral and cognitive approaches." },
            { type: "defs", items: [
              ["Exposure and response prevention (ERP)", "The most effective component: minimize avoidance, use **in vivo exposure** to feared situations and **imaginal exposure** to feared consequences, then **refrain from the usual compulsion**. Therapist and patient build a **hierarchy** of increasingly distressing cues. Make sure the dose and duration are sufficient."],
              ["Cognitive therapy", "Tests thought distortions such as **inflated responsibility** and replaces them with more adaptive thinking; **mindfulness** techniques increasingly supplement it."],
              ["Family sessions", "Helpful especially for **younger** patients, to understand OCD and the principles of ERP."]
            ] },
            { type: "table", caption: "Choosing where to start", head: ["Situation", "Reasonable first step"], rows: [
              ["Guidelines in general", "Either **medication or psychotherapy**"],
              ["Younger patients", "Begin with **CBT**"],
              ["More severe symptoms or comorbid depression", "Begin with **medication**"],
              ["Best results", "Some evidence that **CBT plus medication** is particularly useful"]
            ] },
            { type: "defs", title: "Somatic treatments for refractory OCD", items: [
              ["Neurosurgery", "Targeted lesions of **cortico-striatal-thalamic-cortical** tracts help some highly refractory patients: **anterior cingulotomy, capsulotomy** and others."],
              ["Deep brain stimulation", "The recent focus of neurosurgical work."],
              ["Transcranial magnetic stimulation", "Studied, but data are not yet strong enough for routine use."],
              ["ECT", "**Does not seem useful** for OCD."]
            ] }
          ]
        },
        {
          id: "s9-tx-bdd",
          title: "Body dysmorphic disorder",
          blocks: [
            { type: "list", items: [
              "**SSRIs** work, **including in delusional BDD**.",
              "As in OCD, **higher doses** and **longer durations** help; taper gradually and watch for returning symptoms.",
              "Nonresponse to one SRI does not rule out response to another.",
              "Augmentation: **buspirone** for partial responders (anecdotal); dopamine blockers have little and discouraging controlled data, though **aripiprazole** has anecdotal support; irreversible **MAOIs** have some positive experiential reports."
            ] },
            { type: "h", text: "BDD and plastic surgery" },
            { type: "list", items: [
              "Estimates of BDD among plastic surgery patients range from **2 percent** in one clinic study to **7–8 percent** in DSM-5, and may be higher.",
              "Requests include removal of sags, jowls, wrinkles and puffiness; rhinoplasty; breast reduction or enhancement; penile enlargement; and cosmetic surgery of the labia or lips.",
              "Patients usually hold **unrealistic expectations** of what surgery will fix. When reality sets in, they may become **depressed** or **sue the surgeon**; psychotherapy can address the underlying sense of inadequacy."
            ] }
          ]
        },
        {
          id: "s9-tx-hoarding",
          title: "Hoarding disorder",
          blocks: [
            { type: "p", text: "Hoarding is **hard to treat**, and OCD treatments help little: in one study only **18 percent** responded to medication plus CBT. Obstacles include **poor insight, low motivation and resistance**." },
            { type: "defs", items: [
              ["Most effective approach", "A **cognitive-behavioral model** with training in **decision making and categorizing**, **exposure and habituation to discarding**, and **cognitive restructuring**, in the office **and at home**."],
              ["The therapist’s role", "Build decision-making skills, give feedback about **normal saving**, and challenge mistaken beliefs about possessions."],
              ["Goals", "Discard a significant amount, make the home **livable**, and keep a sustainable balance between possessions and space."],
              ["Medication", "Only limited, uncontrolled data for **SSRIs or venlafaxine**."]
            ] }
          ]
        },
        {
          id: "s9-tx-bfrb",
          title: "Trichotillomania and excoriation disorder",
          blocks: [
            { type: "h", text: "Trichotillomania" },
            { type: "list", items: [
              "Early data: **clomipramine** worked better than desipramine. Later trials of **SSRIs and venlafaxine** have **not consistently** shown efficacy.",
              "The largest positive trial: **N-acetylcysteine (NAC) 1,200–2,400 mg/day**, a glutamatergic nutraceutical. A **pediatric** NAC trial was **negative**.",
              "Small controlled trials support **dopamine receptor blockers**.",
              "Suggested approach: **NAC first line in adults**; SSRIs when comorbid conditions call for them; **low-dose dopamine blockers** for refractory cases."
            ] },
            { type: "defs", items: [
              ["Habit reversal training (HRT)", "Effective in children and adults: **awareness training, competing response training and social support**."],
              ["Stimulus control (SC)", "Changes the environment so pulling is more effortful or less rewarding."],
              ["Augmenting HRT/SC", "Controlled trials support adding **acceptance and commitment therapy, dialectical behavior therapy** or **cognitive therapy**."]
            ] },
            { type: "h", text: "Excoriation disorder" },
            { type: "list", items: [
              "Hard to treat, with few data; most patients do not seek care out of embarrassment or the belief it is untreatable.",
              "**SSRIs** have support: **fluoxetine** beat placebo in reducing picking.",
              "**Lamotrigine** is inconsistent; **NAC** and dopamine blockers have anecdotal support.",
              "Nondrug options: **HRT** and brief **CBT**."
            ] }
          ]
        }
      ]
    },
    {
      title: "Understand the disorders",
      sections: [
        {
          id: "s9-epi",
          title: "Epidemiology",
          blocks: [
            { type: "table", wide: true, caption: "Prevalence, onset and sex", head: ["Disorder", "Prevalence", "Onset", "Sex"], rows: [
              ["OCD", "Lifetime **2–3%**, consistent across studies", "Mean **19**; childhood or adolescence; earlier in males; **rare after 30**", "More women in community; about equal in clinics"],
              ["Body dysmorphic disorder", "Point **1.7–2.4%**; high in psychiatric inpatients, cosmetic surgery and dermatology clinics", "Adolescence", "More women in community; about equal in clinics"],
              ["Hoarding disorder", "Point **1.5%** (DSM-5 criteria)", "Prevalence **rises with age**; first treatment around **50**", "About 1:1; more women in clinics, perhaps reflecting insight"],
              ["Trichotillomania", "Point **0.5–2%** (college samples)", "At **menarche**", "**4:1** female in adults; equal in children"],
              ["Excoriation disorder", "Point **1.4–5.4%**", "Mean **12**, around puberty", "More women, but less skewed than trichotillomania"]
            ] }
          ]
        },
        {
          id: "s9-etiology-ocd",
          title: "Etiology of OCD",
          blocks: [
            { type: "p", text: "OCD is now viewed mainly as a **neuropsychiatric disorder mediated by specific neurocircuits**. Early work showed it could follow **damage to striatal circuitry**, as after the global influenza epidemic of the early 20th century." },
            { type: "defs", items: [
              ["Neuropsychology", "Impaired executive function, with **cognitive inflexibility, motor impulsivity and excessive habit formation**: OCD as impaired control of automated, habitual behavior."],
              ["Neurocircuitry", "The **anterior cingulate, orbitofrontal cortex and striatum** are consistently implicated (Figure 9-4). The **cortico-striatal-thalamic-cortical (CSTC)** model holds that activating or inhibiting parts of this circuit drives compulsive and impulsive features. Both **medication and CBT normalize** CSTC function on imaging."],
              ["Serotonin", "Influential hypothesis: patients respond to **SRIs but not noradrenergic reuptake inhibitors**. Yet there is **little evidence serotonin is causal**."],
              ["Dopamine", "Evidence for involvement, and **dopamine blocker augmentation** of SRIs is first-line for treatment-refractory OCD."],
              ["Glutamate and GABA", "Also implicated; some **glutamatergic** agents may help."],
              ["Genetics", "Twin and family studies show genetic susceptibility, **stronger in childhood-onset** OCD."]
            ] }
          ]
        },
        {
          id: "s9-etiology-related",
          title: "Etiology of the related disorders",
          blocks: [
            { type: "defs", items: [
              ["Body dysmorphic disorder", "Deficits in **executive function and visual processing**; possible involvement of **CSTC** and **visual processing** circuits; preliminary family and twin evidence of genetic susceptibility and a link to OCD. The cause remains far from clear."],
              ["Hoarding disorder", "Impaired **spatial planning, working memory, response inhibition and set-shifting**. Its circuitry **overlaps only partly** with OCD; neurologic cases implicate **ventromedial prefrontal and anterior cingulate cortices** and **medial temporal** regions. Animal studies suggest a **dopaminergic** role; twin studies show genetic susceptibility."],
              ["Trichotillomania and excoriation", "This edition gives no separate etiology for these two disorders."]
            ] }
          ]
        }
      ]
    }
  ]
});
