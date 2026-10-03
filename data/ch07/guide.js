/* Chapter 7 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 7. */
KS.add("ch07", "guide", {
  intro: "Depressive disorders range from the classic major depressive disorder to chronic dysthymia and briefer or milder forms that formal classifications handle unevenly. All are major sources of morbidity. Depression is common, often begins in the most productive years of life, and is one of the costliest disorders to society, yet the prognosis for each episode is excellent with treatment.",
  objectives: [
    "Recognize the mood, neurovegetative, cognitive and psychotic features of depression, including presentations in children, adolescents and older adults.",
    "Apply the DSM-5 and ICD-10 criteria for major depressive disorder and persistent depressive disorder, and use the specifiers correctly.",
    "Work through the differential: medical and pharmacologic causes, neurologic disease, dementia, bipolar disorder, psychotic and anxiety disorders, and bereavement.",
    "Assess suicide risk and decide when a depressed patient needs hospitalization.",
    "Choose, dose, continue and change antidepressant treatment, and know when to use augmentation, novel agents, neurostimulation and psychotherapy.",
    "Explain the course, prognosis, epidemiology and the main biologic and psychosocial models of depression."
  ],
  parts: [
    {
      title: "Recognize the illness",
      sections: [
        {
          id: "s7-presentation",
          title: "How depression presents",
          blocks: [
            { type: "p", text: "The key symptoms are **depressed mood and loss of interest or pleasure**. Patients may call themselves blue, hopeless, down or worthless, and the mood often has a distinct quality that sets it apart from ordinary sadness or grief. Many describe **agonizing emotional pain**; others experience it as a physical illness with exhaustion and lack of motivation, and some feel almost nothing, cannot cry and cannot enjoy anything." },
            { type: "defs", title: "Terms used in this chapter", items: [
              ["Dysphoria", "Used here for the range of depressive feelings (sad, blue, down), to avoid using “depressed” for both the diagnosis and the symptom. Some patients find these words less threatening than “depressed.”"],
              ["Anhedonia", "Inability to enjoy things that are usually enjoyable. Some patients deny dysphoria altogether and describe only this."],
              ["Neurovegetative symptoms", "The typical somatic symptoms of depression (Table 7-1)."],
              ["Reversed neurovegetative symptoms", "Increased appetite, weight gain and longer sleep; also called **atypical features**."]
            ] },
            { type: "h", text: "Appearance and behavior" },
            { type: "p", text: "The classic picture is a **stooped posture, little movement and a downcast gaze**, but presentations range from no visible signs at all to catatonic depression. **Generalized psychomotor retardation** is the most frequently described sign and can be severe enough to resemble catatonia. Psychomotor agitation (hand wringing, hair pulling) also occurs. Speech is often slow and quiet, with one-word answers and delayed responses." },
            { type: "callout", kind: "caution", text: "The **absence of observable signs does not exclude depression**. Some patients stay socially appropriate, even smiling and laughing with others, while feeling miserable inside." },
            { type: "case", title: "Chapter case: Ms. A", text: "A 34-year-old literature professor described feeling dazed, confused and disoriented, with thoughts that would not flow, no sense of direction or purpose, and an inertia so deep that she had no will to assert herself.", point: "Psychomotor and cognitive slowing can dominate the presentation, in a patient's own words." },
            { type: "table", caption: "Neurovegetative symptoms of depression (after Table 7-1)", head: ["Common", "Sometimes included"], rowHeads: false, rows: [
              ["Fatigue, low energy", "Decreased libido and sexual performance"],
              ["Inattention", "Menstrual irregularities"],
              ["Insomnia, early morning awakening", "Depression worse in the morning"],
              ["Poor appetite, weight loss", ""]
            ] },
            { type: "list", items: [
              "**97 percent** of depressed patients report **reduced energy**: trouble finishing tasks, impaired school and work, less motivation for new projects.",
              "About **80 percent** have sleep trouble, especially **early morning awakening (terminal insomnia)** and repeated night awakenings spent ruminating.",
              "Many lose appetite and weight; others eat and sleep more (atypical features)."
            ] },
            { type: "callout", kind: "pearl", text: "In a depressive disorder, patients do not experience their sadness as normal. They often feel genuinely ill, and many first present to primary care saying they feel **“sick”** rather than depressed." }
          ]
        },
        {
          id: "s7-thought",
          title: "Thought, psychosis and cognition",
          blocks: [
            { type: "p", text: "Depressed patients usually hold **negative views of themselves and the world**. Thought content often includes nondelusional ruminations about **loss, guilt, suicide and death**. About **10 percent** have marked thought disorder, usually **thought blocking and profound poverty of content**." },
            { type: "case", title: "Chapter case: the civil servant", text: "A 42-year-old woman felt so paralyzed by depression that she believed a malignant force had taken over her actions and was commenting on everything she did. She recovered fully with antidepressant medication.", point: "Passivity experiences and a running commentary can occur in severe depression without implying a schizophrenic process." },
            { type: "h", text: "Psychotic depression" },
            { type: "defs", items: [
              ["Mood-congruent delusions", "Guilt, sinfulness, worthlessness, **poverty**, failure, persecution, and **terminal somatic illness** (cancer, a “rotting” brain)."],
              ["Mood-incongruent delusions", "Content inconsistent with depression, for example **grandiose** themes of exaggerated power, knowledge or worth."]
            ] },
            { type: "h", text: "Cognition" },
            { type: "list", items: [
              "**50–75 percent** have some cognitive impairment: poor concentration (84 percent in one study) and impaired thinking (67 percent in another).",
              "Most are oriented, though some lack the energy or interest to answer orientation questions.",
              "Memory problems are hard to separate from poor concentration, but some patients have genuine memory deficits."
            ] },
            { type: "h", text: "Insight, judgment and reliability" },
            { type: "list", items: [
              "Some patients seem **unaware of their depression** yet withdraw from family, friends and activities.",
              "Those with negative outlooks should be advised **not to make major life decisions** (relationships, jobs) until they are thinking normally again.",
              "Depressed patients emphasize the bad and minimize the good. **Do not simply accept a report that a past antidepressant failed**: confirm it from another source. This is not deliberate lying; hopeful information may be inaccessible to a depressed mind.",
              "With poor insight, ask about **changes in functioning** rather than feelings (“were there times you could not work or care for your children?”)."
            ] }
          ]
        },
        {
          id: "s7-suicide",
          title: "Suicide and violence",
          blocks: [
            { type: "list", items: [
              "About **two thirds** of depressed patients contemplate suicide, and **10–15 percent** die by suicide.",
              "Patients recently **hospitalized for a suicide attempt or suicidal ideation** have a higher lifetime risk of suicide than those never hospitalized for it.",
              "Risk rises **as patients begin to improve** and regain the energy to plan and act (**paradoxical suicide**).",
              "Psychotic depressed patients occasionally consider killing someone because of their delusions, but the most severely depressed often lack the energy to act violently."
            ] },
            { type: "callout", kind: "exam", text: "The early recovery period is a classic high-risk window: energy returns before hopelessness lifts." }
          ]
        },
        {
          id: "s7-special",
          title: "Children, adolescents and older adults",
          blocks: [
            { type: "defs", items: [
              ["Children", "**School phobia** and **excessive clinging** to parents may be symptoms of depression."],
              ["Adolescents", "Poor academic performance, substance abuse, antisocial behavior, sexual promiscuity, **truancy and running away**."],
              ["Older adults", "Depression is **more common** than in the general population; reported prevalence ranges from **25 to almost 50 percent**, though how much is major depressive disorder is uncertain."]
            ] },
            { type: "list", title: "Depression in older adults", items: [
              "Associated with **low socioeconomic status, loss of a spouse, concurrent physical illness and social isolation**.",
              "Often **underdiagnosed and undertreated**, perhaps especially by general practitioners.",
              "Presents more often with **somatic complaints** than in younger people, and **ageism** can lead clinicians to accept depressive symptoms as normal in old age."
            ] }
          ]
        }
      ]
    },
    {
      title: "Make the diagnosis",
      sections: [
        {
          id: "s7-mdd",
          title: "Major depressive disorder",
          blocks: [
            { type: "p", text: "The core feature is **at least one major depressive episode**: significant depressive symptoms lasting a significant time. This is the disorder most people mean when they say they are depressed." },
            { type: "table", wide: true, caption: "Major depressive disorder in DSM-5 and ICD-10 (after Table 7-2)", head: ["Feature", "DSM-5 (major depressive disorder)", "ICD-10 (major depressive episode)"], rows: [
              ["Duration", "**2 weeks**", "—"],
              ["Symptoms", "Depressed mood; anhedonia; increased or decreased weight or appetite; increased or decreased sleep; increased or decreased activity; decreased energy; worthlessness or guilt; decreased concentration; suicidal ideation or plan", "Low mood, energy, activity, enjoyment, interest and concentration; fatigue after minimal effort; disturbed sleep, early waking; disturbed appetite, weight loss; low self-esteem and confidence; guilt or worthlessness; mood unreactive to circumstances; anhedonia; worse in the morning; agitation or retardation; low libido"],
              ["Number required", "**5, at least one being depressed mood or anhedonia**", "—"],
              ["Consequences", "Distress or impaired functioning", "Depends on severity"],
              ["Exclusions", "Medical illness; substance; another psychiatric disorder; **any history of mania or hypomania**", "Adjustment disorder; conduct disorder; recurrent depressive disorder (a separate diagnosis)"],
              ["Course", "With psychotic features (mood-congruent or incongruent); in partial remission (full criteria no longer met); in full remission (**no symptoms for 2 months**)", "Recurrent depressive disorder coded separately: repeated episodes, no mania"],
              ["Severity", "Mild, moderate, severe", "Mild: 2–3 symptoms, functioning preserved. Moderate: 4 or more, difficulty functioning. Severe: several marked symptoms, worthlessness and guilt, suicidal ideas or acts, somatic symptoms; may include psychotic symptoms"],
              ["Other ICD-10 forms", "—", "Atypical depression; single episodes of “masked depression”; depressive reaction, psychogenic or reactive depression"]
            ] }
          ]
        },
        {
          id: "s7-specifiers",
          title: "Specifiers",
          blocks: [
            { type: "defs", items: [
              ["With psychotic features", "Reflects **severe disease** and is a **poor prognostic sign**. Mood-congruent (“I deserve punishment because I am so bad”) or mood-incongruent; **incongruent** symptoms raise the chance of a comorbid primary psychotic disorder such as schizoaffective disorder or schizophrenia."],
              ["With melancholic features", "From Hippocrates. **Loss of pleasure or of reactivity to pleasure** plus 3 or more of: severe despair, mood worse in the morning, **early morning awakening**, psychomotor disturbance, anorexia or weight loss, **excessive guilt** (often over trivial events). Suicidal ideation is common. Linked to autonomic and endocrine changes; sometimes called **endogenous depression** (no external precipitant)."],
              ["With atypical features", "**Mood reactivity** plus 2 or more of: increased appetite or weight, increased sleep, **leaden paralysis**, **rejection sensitivity**. Younger onset, more severe psychomotor slowing, more comorbid anxiety, substance use and somatic symptom disorders; easily misdiagnosed as an anxiety disorder. Can be associated with a long-term course, **bipolar I disorder** or a seasonal pattern."],
              ["With catatonia", "Catatonic features present for most of the episode. Hallmarks: **stupor, blunted affect, extreme withdrawal, negativism, marked psychomotor retardation**. May have prognostic and treatment significance."],
              ["With peripartum (postpartum) onset", "Onset within **4 weeks postpartum** (DSM-5 also includes pregnancy). Postpartum disorders often include **psychotic symptoms**."],
              ["With seasonal pattern", "Episodes in a particular season, **most often winter** (seasonal affective disorder, a term DSM-5 does not use). Whether it is a subtype or a distinct entity is debated; patients may respond preferentially to **light therapy**."],
              ["With anxious distress", "**2 or more** anxiety symptoms."],
              ["With mixed features", "**3 or more manic or hypomanic symptoms** during the depressive episode. If they occur as independent episodes, diagnose bipolar disorder."]
            ] },
            { type: "case", title: "Chapter case: Kevin", text: "A 15-year-old former B student was referred to rule out narcolepsy: he slept 12–15 hours a day, could not get up for school, had failed most courses over 6 months and had gained 30 lb. Medical and neurologic workups were negative, and he had no cataplexy, sleep paralysis or hypnagogic hallucinations. He denied depression but had lost interest in everything except his dog, thought he was “brain damaged” and wondered whether life was worth living. An antidepressant reversed his symptoms and pushed him to the edge of mania.", point: "Atypical features (hypersomnia, weight gain) in a teenager can mimic a sleep disorder, and atypical depression can herald bipolar disorder." }
          ]
        },
        {
          id: "s7-pdd",
          title: "Persistent depressive disorder (dysthymia)",
          blocks: [
            { type: "p", text: "Dysthymia means “ill-humored” and was introduced in 1980; before then such patients were called **neurotic depression**. Symptoms are **less severe but more chronic** than major depression: depressed mood most of the day, almost continuously, with inadequacy, guilt, irritability, anger, social withdrawal, loss of interest and low productivity. Patients say they have **always been depressed**, so onset is usually in childhood or adolescence and almost always by the 20s." },
            { type: "table", wide: true, caption: "Dysthymic disorder in DSM-5 and ICD-10 (after Table 7-3)", head: ["Feature", "DSM-5 (persistent depressive disorder)", "ICD-10 (dysthymia)"], rows: [
              ["Duration", "**2 years or more (1 year in children)**; symptom-free periods **no longer than 2 months**", "—"],
              ["Symptoms", "**Depressed mood most of the time** plus **2 or more** of: poor appetite, too much or too little sleep, low energy, low self-esteem, poor concentration or indecision, hopelessness", "Chronically depressed mood not meeting criteria for a depressive episode, though criteria may have been met in the past"],
              ["Consequences", "Distress and functional impairment", "—"],
              ["Exclusions", "History of bipolar disorder; another mental illness; substance; another medical illness", "Anxiety; depression; bereavement; schizophrenia"],
              ["Specifiers", "With pure dysthymic syndrome (no major depressive episode in the past 2 years); with persistent major depressive episode (throughout the 2 years); with intermittent major depressive episodes, with or without a current episode; with anxious distress; with mixed features; melancholic; atypical; psychotic features; peripartum onset; mild, moderate, severe", "—"]
            ] },
            { type: "case", title: "Chapter case: the grade-school teacher", text: "A 27-year-old teacher said life had always been a lusterless duty and that he had felt like a failure since childhood. Respected by colleagues, he simply performed his duties, had never felt pleasure or romantic feeling, and felt empty and directionless. He had bought a pistol but did not act, out of concern for his students and community.", point: "Lifelong, pervasive low mood and anhedonia with self-deprecation is the picture of early-onset dysthymia, and it still carries suicide risk." },
            { type: "list", items: [
              "A **late-onset subtype** is much less common and poorly characterized, found mainly in community studies of middle-aged and older adults.",
              "Family histories are full of **depressive and bipolar disorders**, one of the strongest links between dysthymia and the primary mood disorders."
            ] }
          ]
        },
        {
          id: "s7-other",
          title: "Minor, recurrent brief and double depression",
          blocks: [
            { type: "table", wide: true, caption: "Other depressive presentations", head: ["Presentation", "Features", "Classification"], rows: [
              ["Minor depressive disorder", "Episodes **less severe** than major depression; **euthymic between episodes** (unlike dysthymia, which has virtually no euthymic periods)", "Not in DSM-5 (other specified depressive disorder); ICD-10 mild depressive episode"],
              ["Recurrent brief depressive disorder", "Episodes **shorter than 2 weeks** that would otherwise meet major depression criteria; episodic and more severe than dysthymia", "DSM-5 other specified depressive disorder; ICD-10 other recurrent mood disorder"],
              ["Double depression", "Major depressive disorder **plus dysthymia**; about **40 percent** of patients with major depression", "Poorer prognosis; treat **both**, because resolving the major episode still leaves significant impairment"]
            ] }
          ]
        },
        {
          id: "s7-scales",
          title: "Rating scales",
          blocks: [
            { type: "p", text: "Objective scales improve diagnostic reliability and help track an episode over time." },
            { type: "table", caption: "Depression rating scales", head: ["Scale", "Type", "Scoring"], rows: [
              ["Hamilton Rating Scale for Depression (HAM-D)", "Clinician-administered; up to **24 items** rated 0–4 or 0–2", "**10–13 mild**; 14–17 mild to moderate; **above 17 moderate to severe**"],
              ["Zung Self-Rating Depression Scale", "Self-report, **20 items**", "Normal **34 or less**; depressed **50 or more**"],
              ["Raskin Depression Scale", "Clinician-rated, 3 dimensions (verbal report, displayed behavior, secondary symptoms) on a 5-point scale", "Range 3–13; normal **3**; depressed **7 or more**"]
            ] }
          ]
        },
        {
          id: "s7-ddx-medical",
          title: "Medical and pharmacologic causes",
          blocks: [
            { type: "p", text: "Always ask whether a general medical condition or a drug explains the depression; a poor history or ignoring the patient's life context leads to errors. Most medical causes are found with a **full history, physical and neurologic examination, and routine blood and urine tests**, including **thyroid and adrenal function**." },
            { type: "list", title: "Targeted testing named in the chapter", items: [
              "Depressed **adolescents**: test for **mononucleosis**.",
              "Markedly **overweight or underweight** patients: **adrenal and thyroid** function.",
              "Patients with risk factors: **HIV**.",
              "**Older** patients: viral pneumonia and other medical conditions."
            ] },
            { type: "table", wide: true, caption: "Drugs and diseases associated with depression (after Table 7-4)", head: ["Category", "Examples"], rows: [
              ["Pharmacologic", "Steroidal contraceptives; **reserpine, methyldopa**; anticholinesterase insecticides; **amphetamine or cocaine withdrawal**; **alcohol or sedative-hypnotic withdrawal**; cimetidine, indomethacin; phenothiazine antipsychotics; thallium, mercury; cycloserine; vincristine, vinblastine; **interferon**"],
              ["Endocrine-metabolic", "Hypothyroidism and hyperthyroidism; hyperparathyroidism; hypopituitarism; **Addison disease**; **Cushing syndrome**; diabetes mellitus"],
              ["Infectious", "General paresis (tertiary syphilis); toxoplasmosis; influenza, viral pneumonia; viral hepatitis; **infectious mononucleosis**; AIDS"],
              ["Collagen", "Rheumatoid arthritis; lupus erythematosus"],
              ["Nutritional", "Pellagra; pernicious anemia"],
              ["Neurologic", "Multiple sclerosis; **Parkinson disease**; head trauma; complex partial seizures; sleep apnea; cerebral tumors; cerebrovascular disease"],
              ["Neoplastic", "**Abdominal malignancies**; disseminated carcinomatosis"]
            ], note: "Low cholesterol is left out because reports linking it to depression are inconsistent." },
            { type: "callout", kind: "pearl", text: "Rule of thumb for substance-induced mood disorder: **any drug a depressed patient takes is a potential cause**. Cardiac drugs, antihypertensives, sedatives, hypnotics, antipsychotics, antiepileptics, antiparkinsonian drugs, analgesics, antibacterials and antineoplastics are all commonly implicated." }
          ]
        },
        {
          id: "s7-ddx-neuro",
          title: "Neurologic disease and dementia",
          blocks: [
            { type: "p", text: "The commonest neurologic causes of depressive symptoms are **Parkinson disease, dementing illnesses, epilepsy, cerebrovascular disease and tumors**." },
            { type: "defs", items: [
              ["Parkinson disease", "**50–75 percent** have marked depressive symptoms, unrelated to disability, age or duration but correlated with neuropsychological abnormalities. Motor symptoms can **mask** depression. Responds to antidepressants or ECT."],
              ["Temporal lobe epilepsy", "Interictal changes can mimic depression, especially with a **right-sided** focus."],
              ["Cerebrovascular disease", "Depression is frequent, especially in the **2 years** after a stroke; more common with **anterior** than posterior lesions; often antidepressant-responsive."],
              ["Tumors", "Especially **diencephalic and temporal** tumors."]
            ] },
            { type: "table", caption: "Depression versus dementia", head: ["Clue", "Depression", "Primary dementia"], rows: [
              ["Onset of cognitive symptoms", "**Sudden**", "Gradual"],
              ["Other features", "Depressive symptoms such as **self-reproach**", "—"],
              ["Diurnal variation", "**May occur**", "Not seen"],
              ["Answering questions", "Often **does not try**", "May **confabulate**"],
              ["Coaching", "Can be **encouraged into remembering**", "Cannot"]
            ] },
            { type: "callout", kind: "caution", text: "The term **pseudodementia** is ill-advised because it implies the cognitive symptoms of depression are not genuine. They are real." }
          ]
        },
        {
          id: "s7-ddx-bipolar",
          title: "Is it bipolar?",
          blocks: [
            { type: "p", text: "Always ask about past episodes of mania-like symptoms. A bipolar depressive episode can be **identical** to a unipolar one, but some features predict bipolarity." },
            { type: "list", title: "Features of a depressive episode that predict bipolar disorder (after Table 7-5)", cols: 2, items: [
              "Early age at onset",
              "**Psychotic depression before age 25**",
              "**Postpartum depression**, especially psychotic",
              "Rapid onset and offset of **short episodes (under 3 months)**",
              "**Recurrent** depression (more than five episodes)",
              "Marked **psychomotor retardation**",
              "**Atypical features** (reverse vegetative signs)",
              "Seasonality",
              "**Bipolar family history**; dense three-generation pedigrees",
              "Trait mood lability (cyclothymia); **hyperthymic temperament**",
              "**Antidepressant-associated hypomania**",
              "**Loss of antidepressant efficacy** after initial response, at least three times",
              "**Depressive mixed state**: psychomotor excitement, irritable hostility, racing thoughts, sexual arousal during major depression"
            ] },
            { type: "p", text: "If the symptoms are solely depressive, the patient most likely has a depressive disorder; severity and course then decide which one." }
          ]
        },
        {
          id: "s7-ddx-psych",
          title: "Psychotic, anxiety and other mental disorders",
          blocks: [
            { type: "p", text: "Depression can occur in virtually any mental disorder. Consider **substance-related, psychotic, eating, adjustment and somatoform disorders**." },
            { type: "list", title: "Why mood disorders get misdiagnosed as schizophrenia (after Table 7-6)", items: [
              "Relying on a **cross-sectional** rather than longitudinal picture.",
              "Treating incomplete recovery between episodes as a schizophrenic defect.",
              "Equating **bizarreness** with schizophrenic thought disorder.",
              "Reading an irritable, cantankerous mood as paranoid delusions.",
              "Mistaking depressive **anhedonia and depersonalization** for emotional blunting.",
              "Perceiving **flight of ideas** as loose associations.",
              "Unfamiliarity with the phenomenologic assessment of affective delusions and hallucinations.",
              "Giving heavy weight to incidental **Schneiderian** symptoms."
            ] },
            { type: "p", text: "Perhaps the hardest distinction is between **anxiety disorders with depression** and **depressive disorders with marked anxiety**." },
            { type: "table", caption: "Cross-sectional profiles of anxiety and depression (after Table 7-7)", head: ["Anxiety", "Depression"], rowHeads: false, rows: [
              ["Hypervigilance", "Psychomotor retardation"],
              ["Severe tension and panic", "Severe sadness"],
              ["**Perceived danger**", "**Perceived loss**"],
              ["Phobic avoidance", "Loss of interest (anhedonia)"],
              ["Doubt and uncertainty", "Hopelessness, suicidality"],
              ["Insecurity", "Self-deprecation"],
              ["Performance anxiety", "Loss of libido"],
              ["", "Early morning awakening"],
              ["", "Weight loss"]
            ] }
          ]
        },
        {
          id: "s7-bereavement",
          title: "Bereavement",
          blocks: [
            { type: "p", text: "**Uncomplicated bereavement is not a mental disorder**, even though about **one third of bereaved spouses** temporarily meet criteria for major depressive disorder. Some do develop a depressive disorder, but the diagnosis is not made unless the grief **does not resolve**. Severity and course are the key differences." },
            { type: "table", wide: true, caption: "Signs that bereavement has progressed to a depressive disorder (after Table 7-8)", head: ["Domain", "Normal grief", "Depressive disorder"], rows: [
              ["Beliefs", "Grief seen as a normal reaction", "Sees self as **sick**, may fear losing one's mind"],
              ["Emotional reactivity", "Reacts to surroundings; a range of positive affect", "Unreactive, as in melancholia"],
              ["Psychomotor activity", "No marked retardation", "**Marked psychomotor retardation**"],
              ["Guilt", "**Guilt of omission** (what might have saved the person)", "**Guilt of commission**"],
              ["Delusions", "Absent", "Worthlessness, sin, psychotic experiences"],
              ["Suicidal ideation", "**Active ideation rare**", "Common"],
              ["Behavior", "—", "**Mummification**: keeping the deceased's belongings exactly as they were"],
              ["Anniversaries", "—", "**Severe anniversary reactions**"]
            ] },
            { type: "case", title: "Chapter case: the 75-year-old widow", text: "A year after her husband's death, a widow was brought in by her daughter for severe insomnia and total loss of interest. After 2–3 months of agitation she had sunk into inactivity, dressed in black, sobbed that she searched everywhere for him and said everything looked black. She refused treatment, saying she would rather join her husband, and hoped to pine away to death.", point: "Persistent grief a year on, with withdrawal, hopelessness and a wish to die, signals progression to a depressive disorder." },
            { type: "callout", kind: "pearl", text: "In severe bereavement, some argue it would be clinically unwise to withhold antidepressants from many people in such intense mourning, whatever the formal diagnosis." }
          ]
        }
      ]
    },
    {
      title: "Comorbidity, course and prognosis",
      sections: [
        {
          id: "s7-comorbidity",
          title: "Comorbidity",
          blocks: [
            { type: "p", text: "Patients with major depressive disorder are at increased risk of other disorders, most often **alcohol abuse or dependence, panic disorder, OCD and social anxiety disorder**. The reverse also holds: people with substance use and anxiety disorders have higher rates of depression." },
            { type: "defs", items: [
              ["Anxiety", "Significant anxiety and depression often coexist. DSM-5 recognizes **mixed anxiety-depressive disorder**; whether these patients have one disease process or two is unresolved."],
              ["Alcohol", "Frequently coexists with both major depression and bipolar I. The association with depression is **stronger in women**; in men, family and genetic data suggest **two genetically distinct** processes."],
              ["Other substances", "May precipitate episodes or be self-treatment. Manic patients seldom use sedatives, but **depressed patients often use stimulants** such as cocaine and amphetamines."],
              ["Dysthymia and substances", "Commonly co-occur as a way of coping with chronic low mood (alcohol, cocaine, marijuana). Long-term substance use can produce a picture **indistinguishable from dysthymia**."],
              ["Medical illness", "Especially in older adults. Decide whether the illness or its drugs cause the depression. Treating comorbid depression can **improve the course of the medical disorder, including cancer**."]
            ] }
          ]
        },
        {
          id: "s7-course",
          title: "Course",
          blocks: [
            { type: "p", text: "Mood disorders tend to have **long courses and relapses**." },
            { type: "list", title: "Major depressive disorder", items: [
              "About **50 percent** had significant depressive symptoms **before** the first identified episode, so early recognition may prevent a full episode.",
              "Patients usually have **no premorbid personality disorder**.",
              "The first episode occurs **before age 40** in about 50 percent. **Later onset** is associated with no family history of mood disorder, antisocial personality disorder and alcohol abuse.",
              "An **untreated episode lasts 6–13 months**; most **treated episodes about 3 months**.",
              "Stopping antidepressants **before 3 months** almost always brings symptoms back.",
              "Over time, episodes become **more frequent and longer**; over 20 years the mean is **five or six** episodes."
            ] },
            { type: "list", title: "Dysthymia", items: [
              "About **50 percent** have insidious onset **before age 25**, and many wait a decade before seeking help, seeing it as part of life.",
              "Progression: about **20 percent** to major depressive disorder, **15 percent** to bipolar II, **under 5 percent** to bipolar I.",
              "With older treatments only **10–15 percent** were in remission 1 year after diagnosis, and about **25 percent** never fully recover, but the prognosis is **good with treatment** (antidepressants, cognitive and behavior therapies)."
            ] }
          ]
        },
        {
          id: "s7-prognosis",
          title: "Prognosis",
          blocks: [
            { type: "p", text: "Major depressive disorder is **not benign**: it tends to be chronic and relapsing. Many patients who do not recover remain with dysthymia." },
            { type: "table", caption: "Recovery and recurrence", head: ["Measure", "Figure"], rows: [
              ["Recovery in the first year after a first hospitalization", "About **50%**"],
              ["Recurrence in the first 6 months after discharge", "About **25%**"],
              ["Recurrence in the following 2 years", "Another **30–50%**"],
              ["Recurrence within 5 years", "**50–75%**"]
            ], note: "Relapse is lower with continued prophylactic medication and after only one or two episodes. With each new episode, intervals shorten and severity increases." },
            { type: "table", caption: "Prognostic indicators (after Table 7-9)", head: ["Positive", "Negative"], rowHeads: false, rows: [
              ["Mild severity", "**Comorbid dysthymia** (double depression)"],
              ["No psychotic symptoms", "**Substance use disorder**"],
              ["Short hospital stay; no more than 1 hospitalization", "**Anxiety symptoms**"],
              ["No medical or psychiatric comorbidity", "**More than one** previous episode"],
              ["**Advanced age of onset**", "**Male** sex"],
              ["Solid adolescent friendships; stable family; good functioning over the previous 5 years", ""]
            ] }
          ]
        }
      ]
    },
    {
      title: "Treat",
      sections: [
        {
          id: "s7-tx-principles",
          title: "Goals, hospitalization and combined care",
          blocks: [
            { type: "p", text: "Treating depression is rewarding: the **prognosis for each episode is excellent**, which is welcome news for patients and families. But mood disorders are chronic, so educate patients and families about future treatment. Dysthymia, once left untreated or given long insight-oriented therapy, is now treated much like major depression." },
            { type: "steps", title: "Treatment goals, in order", items: [
              ["Guarantee safety", "The patient's safety comes first."],
              ["Complete the diagnostic evaluation", "Including medical causes and bipolarity."],
              ["Plan for now and later", "Treat current symptoms and future well-being, and address the **number and severity of stressors**, which raise relapse risk."]
            ] },
            { type: "h", text: "Hospitalization" },
            { type: "list", items: [
              "**Definite indications**: risk of **suicide or homicide**; grossly reduced ability to obtain **food and shelter**; need for **diagnostic procedures**.",
              "Also: **rapidly progressing symptoms** and **collapse of the support system**.",
              "Office treatment suits dysthymia and milder depression with frequent visits, minimal impaired judgment, weight loss or insomnia, and a reliable support system that is neither overinvolved nor withdrawing.",
              "Patients may refuse admission because of slowed thinking, a negative world view (**Weltanschauung**) and hopelessness; **involuntary commitment** may be needed."
            ] },
            { type: "callout", kind: "pearl", title: "Combined treatment", text: "Trials in **chronically depressed outpatients** show higher response and remission with **medication plus psychotherapy** than either alone, and the chapter recommends combining them. Some argue a single treatment suffices for most patients and that combining adds cost and side effects. A clinician ambivalent about medication may underdose or stop too early; one who ignores psychosocial needs may undermine pharmacotherapy." }
          ]
        },
        {
          id: "s7-phases",
          title: "Phases, duration and prophylaxis",
          blocks: [
            { type: "table", wide: true, caption: "Phases of treatment (after Table 7-10, from CANMAT 2016)", head: ["Phase", "Duration", "Goals", "Activities"], rows: [
              ["Acute and continuation", "**8–12 weeks**", "Symptomatic remission; monitor side effects; restore function", "Therapeutic alliance; psychoeducation; select treatment; supportive and measurement-based care; monitor progress"],
              ["Maintenance", "**6–24 months or longer**", "Full function and quality of life; prevent recurrence", "Continue psychoeducation; rehabilitate; manage comorbidities; monitor for recurrence"]
            ] },
            { type: "list", items: [
              "Continue antidepressants for **at least 6 months or the length of a previous episode, whichever is longer**.",
              "When stopping, **taper over 1–2 weeks**, depending on half-life.",
              "Prophylaxis reduces the number and severity of recurrences. Recommend it when episodes are **less than 2½ years apart**, or when past episodes involved **significant suicidal ideation or functional impairment**.",
              "Only patients with **recurrent or chronic** depression are candidates for maintenance treatment, which appears safe and effective."
            ] }
          ]
        },
        {
          id: "s7-antidepressants",
          title: "Antidepressants: choosing and dosing",
          blocks: [
            { type: "p", text: "Efficacy is established in **more than 500 randomized trials**. All antidepressants beat placebo at least modestly and are broadly similar in efficacy; **tolerability and acceptability** differ. Accurate diagnosis matters because **unipolar and bipolar** disorders need different regimens." },
            { type: "list", items: [
              "The goal is **remission, not just response**: residual symptoms predict relapse and ongoing impairment.",
              "Medication roughly **doubles** the chance of recovery within 1 month.",
              "Antidepressants may take **3–4 weeks** for significant effect.",
              "They do **not** differ in overall efficacy, speed or long-term effectiveness, but do differ in pharmacology, interactions, side effects, discontinuation symptoms and ease of dosing.",
              "Most clinicians start with second- or third-generation agents; **SSRIs** remain the most used.",
              "In uncomplicated, nonchronic, nonpsychotic major depression, **45–60 percent respond** (at least a 50 percent symptom reduction) but only **35–50 percent remit** (virtual absence of symptoms)."
            ] },
            { type: "list", title: "Choosing the first agent depends on", items: [
              "Chronicity and course (recurrent or chronic courses predict more symptoms without treatment).",
              "**Family history** of illness and of treatment response.",
              "Severity, medical and psychiatric comorbidity, **prior responses**, drug interactions and **patient preference**."
            ] },
            { type: "callout", kind: "exam", title: "Most common reason a trial fails", text: "**Too low a dose for too short a time.** Unless side effects prevent it, raise to the **maximum recommended dose** and hold it **at least 4–5 weeks** before calling the trial a failure. If a patient is improving on a low dose, do not raise it unless improvement stalls. With no response after 2–3 weeks at an adequate dose, a **plasma level** can reveal nonadherence or unusual pharmacokinetics." },
            { type: "table", wide: true, caption: "SSRIs, SNRIs and other antidepressants (after Table 7-11)", head: ["Drug", "Dose (mg/day)", "Side effects in 10–30%", "Side effects in over 30%"], rows: [
              "SSRIs",
              ["Citalopram", "20–40", "Nausea, dry mouth, sweating", "—"],
              ["Escitalopram", "10–20", "Male sexual dysfunction, nausea", "—"],
              ["Fluoxetine", "20–60", "Nausea, dry mouth, somnolence, nervousness, anxiety, insomnia, tremor, anorexia", "—"],
              ["Fluvoxamine", "100–300", "Dry mouth, headache, somnolence, agitation, insomnia, sweating, tremor, anorexia, dizziness, constipation", "**Nausea**"],
              ["Paroxetine", "20–60", "Nausea, diarrhea, dry mouth, headache, somnolence, insomnia, sweating, asthenia, male sexual dysfunction, dizziness", "—"],
              ["Sertraline", "50–200", "Nausea, diarrhea, dry mouth, headache, somnolence, insomnia, fatigue, tremor, male sexual dysfunction, dizziness", "—"],
              "SNRIs",
              ["Venlafaxine", "75–375", "Headache, somnolence, dry mouth, dizziness, nervousness, insomnia, sweating, male sexual dysfunction", "**Nausea**"],
              ["Desvenlafaxine", "50–100", "Dry mouth, dizziness, nausea, sweating", "—"],
              ["Duloxetine", "30–120", "Nausea, dry mouth, constipation, insomnia, male sexual dysfunction", "—"],
              ["Levomilnacipran", "20–80", "Nausea, dry mouth, headache, male sexual dysfunction", "—"],
              "Other second-generation and novel",
              ["Agomelatine*", "25–50", "—", "—"],
              ["Bupropion", "150–450", "Insomnia, dry mouth, nausea", "**Headache**"],
              ["Mirtazapine", "15–60", "Dry mouth, constipation, increased appetite, weight gain", "**Somnolence**"],
              ["Moclobemide*", "300–600", "—", "—"],
              ["Vilazodone", "10–40", "Diarrhea, nausea, headache", "—"],
              ["Vortioxetine", "10–20", "Nausea", "—"]
            ], note: "*Not routinely available in the United States." }
          ]
        },
        {
          id: "s7-subtype-tx",
          title: "Matching treatment to the patient",
          blocks: [
            { type: "defs", title: "Clinical subtypes", items: [
              ["Melancholic", "**Dual-action** (serotonergic and noradrenergic) antidepressants may work better."],
              ["Psychotic", "**Antidepressant plus an atypical antipsychotic**; **ECT** is useful and perhaps more effective than pharmacotherapy."],
              ["Atypical", "Strong evidence for **MAOIs**; SSRIs and bupropion also help."],
              ["Seasonal (winter)", "**Light therapy**."]
            ] },
            { type: "defs", title: "Comorbidity", items: [
              ["General rule", "**The nonmood disorder usually dictates the choice** in comorbid states."],
              ["OCD with depression", "Successfully treating the OCD usually brings remission of the depression."],
              ["Panic disorder with depression", "Prefer drugs effective for both, such as **TCAs and SSRIs**."],
              ["Substance use", "Consider substance-induced mood disorder; establish by history or **several weeks of abstinence**, which often brings remission. Persisting depression is diagnosed and treated as an independent mood disorder."],
              ["Medical illness", "Depression worsens morbidity and mortality in cardiovascular disease, diabetes, cerebrovascular disease and cancer."]
            ] },
            { type: "callout", kind: "caution", title: "Using side effects therapeutically is less helpful than it seems", text: "Choosing a sedating drug (**mirtazapine, paroxetine**) for anxious patients or an activating one (**bupropion**) for slowed patients may help briefly, but persistent sedation can lead to early discontinuation and relapse. Short-term hypnotics or anxiolytics alongside the antidepressant are an alternative." },
            { type: "list", title: "Use the history", items: [
              "A **prior response predicts future response**.",
              "A documented failure of a properly conducted trial justifies choosing a **different class**.",
              "A **first-degree relative's response** to a drug predicts response to the same class."
            ] }
          ]
        },
        {
          id: "s7-failure",
          title: "When the first treatment fails",
          blocks: [
            { type: "list", title: "Why patients do not respond", ordered: true, items: [
              "They cannot **tolerate side effects**, even with a good response.",
              "An **idiosyncratic adverse event** occurs.",
              "The clinical response is **inadequate**.",
              "The **diagnosis is wrong**."
            ] },
            { type: "timeline", title: "Judging a trial", cols: ["Week 2–3", "Week 4", "Week 4–6", "Week 8–12+"], rows: [
              { label: "Plasma level", from: 0, to: 1, bar: "if no response", color: "found", note: "Checks adherence and kinetics." },
              { label: "Partial response expected", from: 1, to: 2, bar: "≥20–25% better", color: "hy", note: "Most eventual full responders show this by week 4 at an adequate dose." },
              { label: "Acute trial length", from: 1, to: 3, bar: "4–6 weeks", color: "pharm", note: "No partial response by then: change treatment." },
              { label: "Full extent of benefit", from: 3, to: 4, bar: "8–12 weeks", color: "case", note: "Time needed to see the ultimate degree of improvement." }
            ] },
            { type: "p", text: "About **half of patients need a second trial** because the first is poorly tolerated or ineffective." },
            { type: "defs", title: "Switch or augment", items: [
              ["Switch", "**Preferred after an initial medication failure.** Usually to a different class (e.g., SSRI to SNRI), though in **STAR*D** switches **within and between classes were equally effective**."],
              ["Augment", "For patients with **some benefit but no remission**. Evidence does not clearly favor switching or augmenting overall."],
              ["Antipsychotic augmentation", "**Quetiapine and aripiprazole** have the best evidence; use cautiously because of side effects."],
              ["Lithium augmentation", "Effective with both **SSRIs and TCAs**."],
              ["Thyroid hormone", "Positive studies but rarely used because of monitoring and adverse effects."],
              ["Limited placebo-controlled data", "Bupropion, buspirone, lamotrigine, methylphenidate, pindolol."]
            ] }
          ]
        },
        {
          id: "s7-novel",
          title: "Novel agents",
          blocks: [
            { type: "table", wide: true, caption: "Rapid-acting agents", head: ["Agent", "Mechanism and use", "Onset and duration", "Concerns"], rows: [
              ["Ketamine (IV)", "Anesthetic; **NMDA receptor antagonist**; effective in **treatment-resistant depression**; given as a monitored 30-minute infusion", "Response often **within 24 hours**; wears off in **2–7 days**", "Dizziness, headache, poor coordination (transient); **dissociation**, hallucinations; **abuse potential**; little long-term data"],
              ["Esketamine (nasal)", "FDA-approved for **treatment-resistant depression**", "Mostly short-term evidence; one longer study supports continuation for some", "Available only through a **restricted distribution** program because of abuse risk"],
              ["Brexanolone (IV)", "Allopregnanolone; neuroactive steroid and **GABA-A allosteric modulator**; FDA-approved in **2019 for postpartum depression**", "Effect as early as **24 hours**, lasting at least **30 days** in trials", "Given over **60 hours** in a clinical setting through a restricted program; sleepiness, dry mouth, loss of consciousness, flushing"]
            ] }
          ]
        },
        {
          id: "s7-neurostim",
          title: "Neurostimulation, light and sleep deprivation",
          blocks: [
            { type: "defs", items: [
              ["Vagal nerve stimulation", "Found to lift mood in epilepsy studies. An implanted device stimulates the **left vagus**; preliminary studies show remission in many with **chronic, recurrent** depression. Mechanism unknown."],
              ["Transcranial magnetic stimulation", "FDA-indicated after failure of **one adequate antidepressant trial** in the current episode. Nonconvulsive, **no anesthesia**, no cognitive side effects; about **40-minute** office sessions, **daily for 4–6 weeks**. Most common adverse effect: **scalp pain**. Contraindicated with **implanted metal** in or near the head."],
              ["Phototherapy", "Introduced in **1984** for seasonal depression. Bright light of **1,500–10,000 lux**, usually from a light box, about **1–2 hours before dawn**. Usually well tolerated; rarely switches patients into mania or hypomania. Also used for shift work, sleep problems in older adults, possibly jet lag and seasonal OCD."],
              ["Sleep deprivation", "About **60 percent** benefit transiently from total sleep deprivation, usually reversing after the next night's sleep. Partial deprivation helps up to **50 percent** the same day. Most useful when **followed immediately by an antidepressant or lithium**, which sustains the effect; may also speed antidepressant response and improve premenstrual dysphoria."]
            ] },
            { type: "callout", kind: "exam", text: "Seasonal depression: **at least 75 percent are women**, mean age at presentation **40**, rarely presenting after **55**." }
          ]
        },
        {
          id: "s7-psychotherapy",
          title: "Psychotherapy",
          blocks: [
            { type: "p", text: "Three short-term therapies have extensive evidence: **cognitive, interpersonal and behavior therapy**, plus positive studies of **behavioral marital therapy**. There are no accepted rules for choosing among them." },
            { type: "table", wide: true, caption: "Evidence-based psychotherapies (after Table 7-12)", head: ["Therapy", "How it explains depression", "Sample interventions"], rows: [
              ["Behavioral therapy", "Deficit of reinforcers, including pleasant activities and positive contacts", "Increase activity; structured goal setting; interpersonal skills training"],
              ["Cognitive-behavioral therapy", "Beliefs interacting with a matching stressor", "Identify and challenge automatic thoughts; activities that disprove dysfunctional beliefs; modify core beliefs"],
              ["Interpersonal psychotherapy", "Vulnerabilities from early attachment and learned relationship patterns", "Awareness of relationship patterns; skills training; communication analysis"],
              ["Behavioral marital therapy", "Marital distress adds stress and erodes support", "Assertive communication; active listening; problem solving; more reinforcing behavior toward the spouse"]
            ] },
            { type: "table", caption: "Predictors of response, NIMH collaborative study (after Table 7-13)", head: ["Treatment", "Better response with"], rows: [
              ["Interpersonal psychotherapy", "Low social dysfunction; high depression severity"],
              ["Cognitive-behavioral therapy", "Low cognitive dysfunction"],
              ["Pharmacotherapy", "Low cognitive dysfunction; high severity; high work dysfunction"]
            ] },
            { type: "defs", items: [
              ["Cognitive therapy (Aaron Beck)", "Targets distortions such as selective attention to the negative and morbid inferences. Patients identify and test negative thoughts and rehearse new responses. Mostly **equal to medication**, with fewer adverse effects and better follow-up; some trials show the combination is better than either."],
              ["Interpersonal therapy (Gerald Klerman)", "Focuses on **one or two current interpersonal problems**, assumed to stem from early relationships and to drive the depression. **12–16 weekly sessions**, active, not addressing intrapsychic conflict. May be the most effective **psychotherapy-only** option for severe episodes."],
              ["Behavior therapy", "Maladaptive behavior earns little positive feedback; therapy builds behaviors that bring reinforcement. Limited but positive data."],
              ["Psychoanalytically oriented therapy", "Aims to change **personality structure**, not only symptoms (trust, intimacy, coping, capacity to grieve); may last years. One RCT found outcomes **equal to CBT**."],
              ["Family therapy", "Consider when the disorder jeopardizes the marriage or family, or the family maintains it. Helping patients cope with stress lowers relapse. About **50 percent of spouses** say they would not have married or had children had they known about the mood disorder."]
            ] },
            { type: "case", title: "Chapter example: a cognitive approach to lateness", text: "A patient arrived late, assumed the therapist would be angry and felt nervous. The therapist linked the thought to the feeling, pointed out that coming in had tested the belief, and asked whether the therapist seemed angry; the patient said no and felt calmer.", point: "Cognitive therapy identifies a thought, tests it against evidence and shows how changing it changes the feeling." }
          ]
        }
      ]
    },
    {
      title: "Understand the disorder",
      sections: [
        {
          id: "s7-epi",
          title: "Epidemiology",
          blocks: [
            { type: "p", text: "Measured rates depend heavily on sampling, definitions and instruments; **self-report finds higher rates** than clinician ratings, and reduced stigma may increase reporting." },
            { type: "table", caption: "Prevalence", head: ["Source", "Figure"], rows: [
              ["Meta-analysis, 90 studies, 30 countries (1994–2014): point prevalence", "**12.9%**"],
              ["Same: 1-year prevalence", "**7.2%**"],
              ["Same: lifetime prevalence", "**10.8%**"],
              ["US NSDUH (SAMHSA), 1-year major depressive episode", "**7.1%**"],
              ["Women vs men, international", "**14.4% vs 11.5%**"],
              ["Women vs men, US past year", "**8.7% vs 5.3%**"],
              ["Adolescent girls, US 1-year", "**20%**"]
            ] },
            { type: "list", items: [
              "Depression is **more common in women** almost everywhere. The ratio has not changed much where women's status improved, and biologic differences such as hormones likely explain part of it.",
              "**Mean age of onset about 40**, with half beginning between **20 and 50**. Incidence may be rising in young people; in the US, prevalence in adolescents was almost **twice** that in adults, and highest in adults aged **18–25**.",
              "Most common in people **without close relationships** and in the **divorced or separated**.",
              "**No proven link with socioeconomic status.** A possible rural excess was not confirmed by the international meta-analysis.",
              "In the US survey, prevalence was highest among **White and Native American** respondents.",
              "Figure 7-1 shows lifetime prevalence by country: highest in the **US (about 19 percent)** and **Brazil (about 18 percent)**, lowest in **Mexico (about 8 percent)**."
            ] }
          ]
        },
        {
          id: "s7-neuroendo",
          title: "Stress hormones, sleep and other regulatory systems",
          blocks: [
            { type: "p", text: "Major depressive disorder is probably **a collection of disorders** with overlapping phenomenology but different causes; valid “biotypes” have not yet been found." },
            { type: "defs", items: [
              ["HPA axis", "**Overactive** on average: raised 24-hour cortisol from increased **CRH** and reduced feedback inhibition; evident in **20–40 percent of outpatients** and **40–60 percent of inpatients**. Postmortem studies show more hypothalamic neurons, likely a response to chronic stress. Early trauma is linked to greater HPA activity and cortical atrophy."],
              ["Dexamethasone suppression test", "Depressed patients **escape suppression** and cortisol rises again. Replicable but **neither sensitive nor specific** (Cushing syndrome and stress also cause it), so not a diagnostic test. Normalizes with treatment."],
              ["Thyroid", "**5–10 percent** of people evaluated for depression have undetected thyroid dysfunction (high TSH or exaggerated TSH response to TRH), often with antithyroid antibodies, which can **impair treatment response** unless corrected. **20–30 percent** have a **blunted TSH response to TRH**, linked to **relapse despite prophylaxis**; unlike the DST, it usually **does not normalize** with treatment."],
              ["Growth hormone and somatostatin", "CSF somatostatin is **decreased in depression** and increased in mania."],
              ["Prolactin", "Basal secretion usually normal; some show a blunted response to serotonin agonists, uncommon in premenopausal women (estrogen may moderate it)."],
              ["BDNF", "Maintains neurons. Lower in prefrontal cortex and hippocampus of people who died by suicide; serum BDNF rises in antidepressant responders. Chronic stress lowers BDNF gene activity and neurogenesis; **antidepressants, estrogen, lithium and neurostimulation all raise BDNF** in animals."],
              ["Immune function", "Reduced lymphocyte proliferation and impaired cellular immunity; links among severity, hypercortisolism and immune dysfunction; **interleukin-1** may induce glucocorticoid synthesis genes."]
            ] },
            { type: "h", text: "Sleep and circadian rhythm" },
            { type: "list", items: [
              "Premature loss of **slow-wave sleep** and more nocturnal arousal: more awakenings, less total sleep, **more phasic REM**, higher core body temperature.",
              "Increased REM drive plus less slow-wave sleep gives **reduced REM latency**, which often persists after recovery.",
              "The typical profile (reduced REM latency, increased REM density, poor sleep maintenance) appears in about **40 percent of outpatients and 80 percent of inpatients**. Patients with it respond less to psychotherapy, relapse more and may do better with medication.",
              "Not usable diagnostically: false negatives in young hypersomnolent patients, and about **10 percent of healthy people** have abnormal profiles."
            ] }
          ]
        },
        {
          id: "s7-neurotransmitters",
          title: "Neurotransmitters",
          blocks: [
            { type: "p", text: "In the 1950s **reserpine**, which depletes monoamines, was seen to cause depression, and the first antidepressants were found to block monoamine breakdown, giving rise to the **“chemical imbalance”** idea. Later research did not find such simple relationships, but neurotransmitters clearly matter." },
            { type: "defs", items: [
              ["Norepinephrine", "Strongest evidence: antidepressant response correlates with **downregulation of β-adrenergic receptors**. Presynaptic β2 receptors reduce norepinephrine release and also regulate serotonin release."],
              ["Serotonin", "Most modern antidepressants act here. **Serotonin depletion can precipitate depression**; some suicidal patients have **low CSF serotonin metabolites** and fewer platelet serotonin uptake sites."],
              ["Dopamine", "May be **reduced in depression and increased in mania**. Dopamine-lowering drugs (reserpine) and diseases (Parkinson) cause depressive symptoms; dopamine-raising drugs (tyrosine, amphetamine, **bupropion**) relieve them."],
              ["Acetylcholine", "Cholinergic agonists cause lethargy, anergia and psychomotor retardation and mimic depressive HPA and sleep changes. Remitted patients and their never-ill relatives show trait **hypersensitivity to cholinergic agonists**."],
              ["GABA", "Reduced in plasma, CSF and brain in depression; chronic stress depletes it; antidepressants **upregulate GABA receptors**."],
              ["Glutamate", "Excess glutamate at **NMDA** receptors is neurotoxic; the hippocampus is rich in NMDA receptors. Glutamate may combine with hypercortisolemia to cause neurocognitive damage, and **NMDA antagonists have antidepressant effects**."],
              ["Second messengers", "Regulate ion channels; mood stabilizers appear to act on them."]
            ] }
          ]
        },
        {
          id: "s7-imaging",
          title: "Brain imaging",
          blocks: [
            { type: "list", title: "Structural", items: [
              "Most consistent: **subcortical hyperintensities** (periventricular, basal ganglia, thalamus), more common in older adults, likely from recurrent episodes.",
              "Some studies: ventricular enlargement, cortical atrophy, sulcal widening; reduced **hippocampal or caudate** volume.",
              "Atrophy is linked to greater severity, **bipolarity** and higher cortisol.",
              "**Hippocampal volume loss** may reflect cortisol neurotoxicity; the hippocampus is vulnerable because it is rich in glutamatergic neurons. Losses also reported in prefrontal cortex, cingulate and cerebellum."
            ] },
            { type: "list", title: "Functional", items: [
              "Most replicated PET finding: **decreased anterior brain metabolism, more on the left**; the pattern reverses toward right-sided reductions in mania.",
              "Reduced flow or metabolism in mesocortical and mesolimbic dopamine tracts; antidepressants partly normalize these changes.",
              "**Increased limbic glucose metabolism** in severe recurrent depression with family history, correlating with **intrusive ruminations**.",
              "fMRI meta-analysis: activation of the **pulvinar**; greater response to negative stimuli in **amygdala, insula and anterior cingulate**; lower response in **dorsal striatum and dorsolateral prefrontal cortex**."
            ] },
            { type: "p", text: "Figure 7-2 highlights the orbital and ventromedial prefrontal cortex, dorsolateral prefrontal cortex, hippocampus and amygdala, and anterior cingulate cortex." }
          ]
        },
        {
          id: "s7-genetics",
          title: "Genetics",
          blocks: [
            { type: "list", items: [
              "First-degree relatives have an odds ratio of about **2.84**.",
              "Twin studies estimate heritability at **37 percent**, **higher in women**; shared environment contributes little to familial aggregation.",
              "Adoption studies are few and mixed.",
              "**GWAS have found no significant associations**, perhaps because relevant variants are rare while GWAS detect common ones.",
              "Candidate genes (**HTR1A, the serotonin transporter SLC6A4, DRD4, SLC6A3**) show few replicated findings with small effects; the transporter is the most often replicated.",
              "Most likely, heritability comes from **many genes of small effect**, though a rare undetected variant remains possible."
            ] }
          ]
        },
        {
          id: "s7-psychology",
          title: "Stress and personality",
          blocks: [
            { type: "defs", items: [
              ["Early loss", "The life event most associated with later depression is **losing a parent before age 11**."],
              ["Precipitating stressor", "The stressor most often linked to the onset of an episode is **loss of a spouse**."],
              ["Unemployment", "People out of work are **three times** more likely to report major depressive symptoms."],
              ["Personality", "**No single trait predisposes** to depression. Obsessive-compulsive, histrionic and borderline personality disorders may carry more risk than antisocial or paranoid ones, which externalize through **projection**."]
            ] }
          ]
        },
        {
          id: "s7-etiology",
          title: "Etiology",
          blocks: [
            { type: "h", text: "Biologic theories" },
            { type: "defs", items: [
              ["Monoamine hypothesis", "Antidepressants act on monoamines, and monoamine-depleting drugs and diseases cause depression. **Weaknesses**: antidepressants take **weeks** although monoamine levels rise within hours, and there is **no convincing evidence of a chemical imbalance** in CSF or brain tissue."],
              ["Amygdala", "Way station for novel, emotionally significant stimuli that organizes cortical responses."],
              ["Hippocampus", "Learning and memory; links with the amygdala in emotional learning and **inhibits the HPA axis**."],
              ["Prefrontal cortex", "Holds goals and responses. **Left** regions favor goal-directed, appetitive behavior; **right** regions avoidance and inhibition."],
              ["Anterior cingulate cortex", "Integrates attention and emotion; its rostral-ventral affective division connects with the limbic system and may help control emotional arousal."],
              ["Neurogenesis hypothesis", "Too few new neurons. Chronic stress raises glucocorticoids, which **suppress hippocampal neurogenesis**; the hippocampus then fails to restrain the HPA axis, a vicious circle."],
              ["Neuroplasticity hypothesis", "**Atrophy of mature neurons** from glucocorticoids and reduced **BDNF**, especially in the hippocampus, explaining smaller hippocampal volume."]
            ] },
            { type: "h", text: "Psychosocial theories" },
            { type: "defs", items: [
              ["Life events", "Stress more often precedes **first** than later episodes; the first episode may cause lasting brain changes so later episodes need no stressor."],
              ["Classic psychodynamic view (Freud, Abraham)", "(1) Disturbed infant-mother relationship in the **oral phase** (first 10–18 months); (2) real or imagined **object loss**; (3) **introjection** of the lost object as a defense; (4) ambivalence toward the lost object turns **anger inward**."],
              ["Cognitive theory (Beck)", "**Depressogenic schemata** shaped by early experience. The **cognitive triad**: negative views of the **self**, the **world** and the **future**."],
              ["Learned helplessness", "Dogs given inescapable shocks later stayed passive when escape was possible. In humans, **internal explanations** of bad events lower self-esteem; recovery depends on regaining **control and mastery**."],
              ["Evolutionary theory", "Depression as a response to threat, including social threats of exclusion or defeat; withdrawal and negative bias might once have reduced risk. Hard to test."]
            ] },
            { type: "table", caption: "Elements of cognitive theory (after Table 7-14)", head: ["Element", "Meaning"], rows: [
              ["Cognitive triad", "Beliefs about oneself, the world and the future"],
              ["Schemas", "Ways of organizing and interpreting experience"],
              ["Cognitive distortions", "Persistent, inaccurate, usually negatively biased thinking"],
              ["Arbitrary inference", "A specific conclusion without sufficient evidence"],
              ["Specific abstraction", "Focusing on one detail while ignoring more important aspects"],
              ["Overgeneralization", "Conclusions from too little, too narrow experience"],
              ["Magnification and minimization", "Over- or undervaluing an event's significance"],
              ["Personalization", "Relating external events to oneself without basis"],
              ["Absolutist, dichotomous thinking", "All-or-none categories"]
            ] },
            { type: "case", title: "Chapter case: Ms. C", text: "A 23-year-old became acutely depressed, with suicidal impulses, on being accepted to the graduate school she had worked toward for years. Her older brother, who had had a severe childhood illness, had always insulted her, and she had come to need his disparagement to avoid guilt at being the healthy child. Success overturned that compensatory self-image. Her depression remitted in psychodynamic psychotherapy.", point: "Success can precipitate depression when it threatens a defensive self-image built around survivor guilt." },
            { type: "case", title: "Chapter case: Ms. E", text: "A 21-year-old student with major depression and panic disorder since early adolescence hated herself and felt hopeless. She described a chronically depressed, unavailable mother and felt intense guilt whenever she voiced disappointment in her. She remitted in psychodynamic therapy as she learned to tolerate her rage and disappointment.", point: "Anger toward a loved but disappointing figure, turned against the self, illustrates the classic psychodynamic model." },
            { type: "callout", kind: "pearl", title: "An integrative picture", text: "Genetic vulnerability plus stress produces abnormal epigenetic responses (for example, less growth-factor transcription), leading to subtle neuronal loss in vulnerable areas such as the hippocampus, disrupted regulation of transmitters and hormones, the physical changes of depression and, finally, the subjective experience of it." }
          ]
        }
      ]
    }
  ]
});
