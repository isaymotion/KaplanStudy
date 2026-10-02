/* Chapter 5 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 5. */
KS.add("ch05", "guide", {
  intro: "Schizophrenia is probably not one disease but a group of disorders with different causes, presentations, treatment responses and courses. It usually starts before age 25, tends to last a lifetime, and is diagnosed entirely from the history and the mental status examination: there is no laboratory test for it.",
  objectives: [
    "Describe the positive, negative and cognitive symptom domains and recognize them on a mental status examination.",
    "Separate schizophrenia, schizophreniform, brief psychotic, schizoaffective and delusional disorders by duration, symptoms and function.",
    "Work up a first presentation of psychosis for medical, substance, mood and personality explanations.",
    "Assess suicide and violence risk in a patient with schizophrenia.",
    "Choose, dose and monitor antipsychotics, manage their side effects, and know when to use clozapine or a long-acting injectable.",
    "Build a psychosocial treatment plan and explain the main neurobiologic and etiologic models to a patient’s family."
  ],
  parts: [
    /* ================================================================ */
    {
      title: "Recognize the illness",
      sections: [
        {
          id: "s-overview",
          title: "Why schizophrenia matters",
          blocks: [
            { type: "p", text: "The chapter frames schizophrenia as a **syndrome** or group of disorders, which is why DSM-5 groups these conditions as the **schizophrenia spectrum disorders**. Symptoms involve perception, emotion, cognition, thinking and behavior. They vary between patients and over time in the same patient, but the impact is always severe and usually long-lasting. It affects every social class, and patients and families often meet inadequate care and social ostracism rooted in public ignorance about the illness." },
            { type: "list", title: "The burden in numbers", items: [
              "In the United States, the financial cost probably **exceeds that of all cancers combined**, because the illness starts early, causes lasting impairment, uses a great deal of hospital care and needs ongoing clinical, rehabilitation and support services.",
              "People with schizophrenia make up **15 to 45 percent of homeless Americans**, and roughly **5 percent of patients are homeless in a given year**.",
              "Worldwide it is among the **top 25 causes of disability**, striking for a disorder of relatively low prevalence.",
              "Indirect costs to families, caregivers and society are large and often underestimated."
            ] },
            { type: "callout", kind: "exam", text: "The diagnosis rests **entirely on the psychiatric history and mental status examination**. No sign or symptom is pathognomonic and no laboratory test confirms it." }
          ]
        },
        {
          id: "s-presentation",
          title: "Appearance, behavior and neurologic signs",
          blocks: [
            { type: "p", text: "Every sign seen in schizophrenia also occurs in other psychiatric and neurologic disorders, so the **longitudinal history** carries the diagnosis. A single mental status examination is not enough, because symptoms fluctuate: hallucinations may come and go, social performance may vary, and mood symptoms may wax and wane. Interpret findings against the patient’s education, intelligence and cultural or religious background. Poor abstraction may reflect schooling rather than illness, and the customs of a religious group can look strange to an outsider while being normal within it." },
            { type: "p", text: "**Appearance** ranges from the disheveled, screaming, agitated patient to the obsessively groomed, silent and motionless one. Between these extremes patients may be talkative or adopt bizarre postures. Agitation or violence can appear unprovoked but is usually a response to hallucinations. Poor grooming, not bathing and dressing too warmly for the weather are common. Other odd behaviors include **tics, stereotypies, mannerisms** and sometimes **echopraxia**, in which the patient imitates the examiner’s posture or movements." },
            { type: "case", title: "Chapter case: the 32-year-old woman who regressed", text: "A woman in her early thirties lost weight, her work slipped, and she became convinced that coworkers were spreading slander and that a male colleague had insulted her, a claim an investigation showed to be baseless. At home she laughed loudly, cried at the sight of her brother, believed a man was watching her through the window and that someone was having sexual relations with her unseen. In hospital she grimaced, made stereotyped hand movements, talked to herself in a childish voice and walked about on her toes. Over months she stayed silly, preoccupied, unkempt and withdrawn, with no interest in visitors.", point: "Disorganized speech and behavior, inappropriate affect, stereotypies and progressive social withdrawal can dominate the picture alongside delusions and hallucinations." },
            { type: "h", text: "Catatonia" },
            { type: "p", text: "In **catatonic stupor** the patient appears lifeless and may show **muteness, negativism and automatic obedience**. **Waxy flexibility** and manneristic behavior were once common and are now rare. Milder forms look like marked social withdrawal, egocentricity, little spontaneous speech or movement and no goal-directed behavior: the patient sits immobile, answers briefly and moves only when told to. Odd clumsiness or stiffness may be the only overt sign." },
            { type: "h", text: "Neurologic signs" },
            { type: "p", text: "Both localizing (**hard**) and nonlocalizing (**soft**) neurologic signs are more common in schizophrenia than in other psychiatric disorders. Soft signs include **dysdiadochokinesia, astereognosis, primitive reflexes and reduced dexterity**. Their presence correlates with **greater severity, affective blunting and a poorer prognosis**. Other abnormalities include tics, stereotypies, grimacing, poor fine motor skill, abnormal tone and abnormal movements, which most patients do not notice." },
            { type: "list", title: "Eye and parietal findings", items: [
              "Abnormal **smooth ocular pursuit** (saccadic intrusion) and an **elevated blink rate**, the latter possibly reflecting hyperdopaminergic activity.",
              "Inability to perceive or produce the **prosody** of speech, a finding typical of **nondominant parietal** dysfunction.",
              "Other parietal-like signs: **apraxia**, **right–left disorientation** and **lack of concern** about the illness."
            ] }
          ]
        },
        {
          id: "s-mse",
          title: "Mood, thought, perception and cognition",
          blocks: [
            { type: "h", text: "Mood and affect" },
            { type: "p", text: "Two affective patterns are common: **reduced emotional responsiveness**, sometimes severe enough to call anhedonia, and **excessive, inappropriate emotion** such as rage, elation or anxiety. Overly emotional patients may describe omnipotence, religious ecstasy, terror that their soul is disintegrating or dread about the destruction of the universe. Perplexity, isolation, overwhelming ambivalence and depression also occur." },
            { type: "callout", kind: "pearl", title: "Flat affect has three common causes", text: "A flat or blunted affect may come from **the illness itself**, from **antipsychotic-induced parkinsonism**, or from **depression**. Telling them apart is a real clinical challenge and changes management." },
            { type: "h", text: "Form of thought" },
            { type: "p", text: "Psychotic disorders are first and foremost **disorders of thought**, affecting its process, its content or both. Formal thought disorder is inferred from how the patient speaks, writes or draws, and from how they carry out tasks such as occupational therapy. Mild disturbance looks stilted or vague. As it worsens, associations loosen." },
            { type: "list", title: "Thought process abnormalities named in the chapter", cols: true, items: ["Circumstantiality", "Tangentiality", "Perseveration", "Neologisms", "Echolalia", "Verbigeration", "Word salad", "Mutism"] },
            { type: "h", text: "Content of thought: delusions" },
            { type: "p", text: "Delusions are the clearest disorder of thought content and may be **persecutory, grandiose, religious or somatic**. Patients may believe an outside force controls them or that they control outside events, such as making the sun rise. Some become absorbed in esoteric, symbolic or philosophic ideas, or fear bizarre and implausible bodily conditions, such as aliens inside the testicles affecting fertility." },
            { type: "defs", title: "Loss of ego boundaries", items: [
              ["Loss of ego boundaries", "No clear sense of where one’s own body, mind and influence end and those of other people or objects begin."],
              ["Ideas of reference", "Believing that other people, the television or newspapers are referring to oneself."],
              ["Thought control", "Outside forces control what the patient thinks or feels."],
              ["Thought broadcasting", "Others can read the patient’s mind, or the patient’s thoughts are broadcast, for example through televisions."],
              ["Fusion and cosmic identity", "Feeling physically fused with an object or person, or dissolved into the whole universe."],
              ["Doubts about gender or orientation", "Can arise from this state of mind and should not be confused with gender identity problems."]
            ] },
            { type: "h", text: "Perception: hallucinations" },
            { type: "p", text: "Any sense can be involved, but **auditory hallucinations are the most common**. Voices are often threatening, obscene, accusatory or insulting. Two or more voices may converse with each other, or a voice may comment on the patient’s life or behavior. **Cenesthetic hallucinations** are unfounded sensations of altered states in body organs, such as burning in the brain, pushing in the blood vessels or cutting in the bone marrow. Bodily distortions also occur." },
            { type: "callout", kind: "caution", title: "Red flag senses", text: "Visual hallucinations are common, but **tactile, olfactory and gustatory hallucinations are unusual** in schizophrenia. Their presence should prompt a search for an **underlying medical or neurologic disorder** that may be causing the whole syndrome." },
            { type: "case", title: "Chapter case: the voices he did not want to lose", text: "A man diagnosed with schizophrenia in the army at 21 lived alone on disability and never liked to discuss his chronic voices. When told during informed consent for a medication study that the new drug might reduce his hallucinations, he left abruptly. He later explained that his nightly gossip with voices he believed were 17th-century French courtiers was his most reliable pleasure, and losing that companionship was too frightening to consider.", point: "Hallucinations can carry meaning and comfort for isolated patients. Ask what a symptom means to the patient before assuming they want it gone; it affects engagement and adherence." },
            { type: "h", text: "Cognition" },
            { type: "p", text: "Patients are usually **oriented** to person, time and place; disorientation should prompt a search for a medical or neurologic brain disorder. Some give bizarre answers driven by delusions (for example, saying they are Christ, it is heaven and the year is AD 35). Memory on bedside testing is usually intact with minor deficits, though poor attention can make it hard to test." },
            { type: "p", text: "Subtle **cognitive impairment** is now recognized as central. It affects **attention, executive function, working memory and episodic memory**. Many patients have an average IQ, yet every patient may function below what they could have achieved without the illness. In outpatients, cognitive impairment **predicts level of function better than the severity of psychotic symptoms**. It is already present at the first episode, stays largely stable early in the illness, appears in attenuated form in nonpsychotic relatives, and is now a target of drug and psychosocial trials. A small subgroup may develop true dementia in late life not explained by Alzheimer disease or other cognitive disorders." },
            { type: "h", text: "Insight, judgment and reliability" },
            { type: "p", text: "Insight is classically poor, and poor insight is associated with **poor adherence**. Define the components separately: awareness of symptoms, awareness of trouble getting along with people, and understanding of why. This helps tailor treatment and points toward brain regions involved in lack of insight, such as the parietal lobes. A patient with schizophrenia is **no less reliable** than any other psychiatric patient, but the illness makes it necessary to verify information with other sources." }
          ]
        },
        {
          id: "s-domains",
          title: "Positive, negative and cognitive symptoms",
          blocks: [
            { type: "p", text: "The chapter groups symptoms into three domains. **Positive symptoms** are abnormal behaviors that are present and usually observable; they dominate acute psychotic episodes. **Negative symptoms** (deficit symptoms) are defined by the absence of normal function and tend to accompany progression of the illness. **Cognitive symptoms** can be subtle early on but account for much of the disability." },
            { type: "table", caption: "Positive symptoms (after Table 5-1)", head: ["Category", "Examples"], rows: [
              ["Hallucinations", "Auditory; voices commenting; voices conversing; somatic or tactile; olfactory; visual"],
              ["Delusions", "Persecutory; jealousy; guilt or sin; grandiose; religious; somatic; reference; being controlled; mind reading; thought broadcasting, insertion and withdrawal"],
              ["Bizarre behavior", "Clothing and appearance; social and sexual behavior; aggressive behavior; repetitive or stereotyped behavior"],
              ["Positive formal thought disorder", "Derailment; tangentiality; incoherence; illogicality; circumstantiality; pressure of speech; distractible speech; clanging"]
            ] },
            { type: "table", caption: "Negative symptoms (after Table 5-2)", head: ["Category", "Examples"], rows: [
              ["Affective flattening or blunting", "Unchanging facial expression; decreased spontaneous movement; few expressive gestures; poor eye contact; affective nonresponsivity; inappropriate affect; lack of vocal inflection"],
              ["Alogia", "Poverty of speech; poverty of content of speech; blocking; increased response latency"],
              ["Avolition and apathy", "Poor grooming and hygiene; impersistence at work or school; physical anergia"],
              ["Anhedonia and asociality", "Few recreational interests; low sexual interest; little intimacy or closeness; few friendships"],
              ["Attention", "Social inattentiveness; inattentiveness during testing"]
            ] },
            { type: "callout", kind: "exam", text: "Cognitive symptoms, chiefly impairments of **attention, working memory and executive functioning**, account for much of the disability in schizophrenia, and antipsychotics do little for them." }
          ]
        },
        {
          id: "s-safety",
          title: "Violence, suicide and homicide",
          blocks: [
            { type: "p", text: "When ill, patients may be agitated with poor impulse control and reduced social sensitivity, for example grabbing another patient’s cigarettes, switching the television channel abruptly or throwing food. Some impulsive acts, including suicide and homicide attempts, follow **command hallucinations**." },
            { type: "h", text: "Violence" },
            { type: "p", text: "Violence other than homicide is common in **untreated** patients; compared with the general population, the odds are increased by **49 to 68 percent**. Risk factors are **persecutory delusions, a history of violence and neurologic deficits**." },
            { type: "callout", kind: "caution", title: "Trust your fear", text: "If you feel afraid in the presence of a patient, treat it as an internal clue that the patient may be about to act out. **End the interview, or continue it only with an attendant ready.**" },
            { type: "h", text: "Suicide" },
            { type: "table", caption: "Suicide in schizophrenia", head: ["Measure", "Figure"], rows: [
              ["Rank among causes of premature death", "Single leading cause"],
              ["Lifetime prevalence of suicidality", "About 34.5%"],
              ["Patients who attempt suicide", "20–50%"],
              ["Long-term suicide rate (estimate)", "10–13%"],
              ["Deaths by suicide per DSM-5", "About 5–6% (probably an underestimate)"],
              ["Lifetime major depressive episode", "Up to 80%"],
              ["Seen by a clinician within 72 hours of death", "Two thirds or more"]
            ] },
            { type: "list", title: "What drives risk", items: [
              "The **most important factor is a major depressive episode**.",
              "Suicide often seems to come **out of the blue**, without warning or stated intent.",
              "Paradoxically, patients with the **best prognosis** (few negative symptoms, preserved capacity to feel, better abstract thinking) may be at **highest risk**.",
              "Highest-risk profile: a **young man** who once had high expectations, has **declined from a higher level of functioning**, realizes his dreams are unlikely to come true and has **lost faith in treatment**.",
              "Other contributors: **command hallucinations** and **drug abuse**."
            ] },
            { type: "callout", kind: "pearl", title: "Treatment levers", text: "**Clozapine** may be particularly effective in reducing suicidal ideation in patients with prior hospitalizations for suicidality. **Adjunctive antidepressants** may help co-occurring major depression." },
            { type: "h", text: "Homicide" },
            { type: "p", text: "Despite media attention, patients with schizophrenia are **no more likely to commit homicide than the general population**. When it happens it may be for bizarre reasons tied to hallucinations or delusions. Predictors are **previous violence, dangerous behavior during hospitalization, and hallucinations or delusions with violent content**." }
          ]
        },
        {
          id: "s-special",
          title: "Children, adolescents and older adults",
          blocks: [
            { type: "p", text: "**Childhood-onset schizophrenia** affects a small minority. Early on it can be hard to distinguish from intellectual disability (called mental retardation in the text) and autism spectrum disorder. It is diagnosed with the **same symptoms as adult schizophrenia**. Onset is usually **insidious**, the course **chronic** and the prognosis mostly **unfavorable**." },
            { type: "p", text: "**Late-onset schizophrenia** begins **after age 45** and is clinically indistinguishable from earlier-onset illness. It is **more common in women**, tends to be dominated by **paranoid symptoms**, carries a **favorable prognosis**, and usually **responds well to antipsychotics**." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      title: "Make the diagnosis",
      sections: [
        {
          id: "s-durations",
          title: "The diagnostic map: duration and symptoms",
          blocks: [
            { type: "p", text: "Most of the spectrum is separated by **how long the psychosis lasts**, **which symptoms are present**, and **whether mood episodes dominate**. Learn this map first; the sections that follow fill in each disorder." },
            { type: "timeline", title: "DSM-5 durations at a glance", cols: ["Under 1 day", "1 day to 1 month", "1 to 6 months", "6 months or more"], rows: [
              { label: "Brief psychotic disorder", from: 1, to: 2, bar: "≥1 day, <1 month", color: "hy", note: "Full return to premorbid function. At least one of delusions, hallucinations or disorganized speech." },
              { label: "Schizophreniform disorder", from: 2, to: 3, bar: "≥1 month, <6 months", color: "dx", note: "Same symptom criteria as schizophrenia; return to baseline expected." },
              { label: "Schizophrenia", from: 3, to: 4, bar: "≥6 months continuous", color: "guide", note: "Two or more symptoms, at least one being delusions, hallucinations or disorganized speech; functional impairment." },
              { label: "Delusional disorder", from: 2, to: 4, bar: "Delusion ≥1 month", color: "found", note: "One or more delusions; no marked functional impairment; no prominent hallucinations." },
              { label: "Schizoaffective disorder", from: 2, to: 4, bar: "Mood episodes most of the illness", color: "pharm", note: "Plus a period of at least 2 weeks of psychosis without mood symptoms." }
            ] },
            { type: "callout", kind: "exam", text: "**ICD-10 requires only 1 month** of symptoms for schizophrenia, versus **6 months in DSM-5**. ICD-10 also does not separate brief psychotic disorder from schizophreniform disorder: both fall under **acute and transient psychotic disorder**." }
          ]
        },
        {
          id: "s-dx-schizophrenia",
          title: "Schizophrenia",
          blocks: [
            { type: "p", text: "The patient must show evidence of a psychotic disorder, but hallucinations or delusions are **not strictly required**: the diagnosis can rest on **any two** of the psychotic symptom criteria, provided at least one is delusions, hallucinations or disorganized speech. Symptoms must persist for an extended time, and DSM-5 adds **course specifiers** that describe real clinical situations." },
            { type: "table", wide: true, caption: "Schizophrenia in DSM-5 and ICD-10 (after Table 5-3)", head: ["Feature", "DSM-5", "ICD-10"], rows: [
              ["Duration", "Symptoms continuously present for at least 6 months", "1 month (see text)"],
              ["Symptoms", "Delusions; hallucinations; disorganized speech; disorganized behavior or catatonia; negative symptoms", "Thought distortions; perceptual disorders; negative, often blunted affect; possible cognitive dysfunction. Also thought echo, thought insertion or withdrawal, thought broadcasting, delusional perception, delusions of control, influence or passivity, hallucinatory voices, disorganized thinking, negative symptoms"],
              ["Number required", "Two or more, including at least one of the first three", "Defined by the first three listed; the others are common"],
              ["Consequences", "Functional impairment", "—"],
              ["Exclusions", "Substances; other medical conditions; other psychiatric conditions", "Other neurologic disease; schizoaffective disorder; epilepsy; psychoactive substances"],
              ["Symptom specifiers", "With catatonia (three or more catatonic features)", "Paranoid, hebephrenic, catatonic, undifferentiated, residual and simple schizophrenia; other; unspecified"],
              ["Course specifiers", "First episode or multiple episodes, each currently acute, in partial remission or in full remission; continuous; unspecified", "—"]
            ] },
            { type: "list", title: "The DSM-5 “with catatonia” specifier: three or more of", cols: true, items: [
              "Decreased psychomotor activity or stupor",
              "**Catalepsy** (holding a posture for an extended period)",
              "**Waxy flexibility** (holds a position but can be moved to a new posture as if made of wax)",
              "Mutism",
              "Negativism",
              "Posturing",
              "Odd mannerisms",
              "Stereotypic behaviors",
              "Agitation",
              "Grimacing",
              "**Echolalia** (imitating another person’s speech)",
              "**Echopraxia** (imitating another person’s movements)"
            ] },
            { type: "h", text: "Catatonic schizophrenia and the old subtypes" },
            { type: "p", text: "The catatonic type was common several decades ago and is now rare in Europe and North America. Its hallmark is marked motor disturbance: stupor, negativism, rigidity, excitement or posturing. Patients may alternate rapidly between excitement and stupor, with stereotypies, mannerisms, waxy flexibility and especially **mutism**. During **catatonic excitement** patients need close supervision to prevent harm to themselves or others, and often need medical care for **malnutrition, exhaustion, hyperpyrexia or self-inflicted injury**." },
            { type: "case", title: "Chapter case: the self-described genius emerging from stupor", text: "A 32-year-old, thin and poorly nourished man with dilated pupils, brisk reflexes and a pulse of 120 grimaced, postured rigidly, struck staff, refused to speak and seemed to hallucinate. Later the same day he was stuporous, mute and rigid, with closed eyes he resisted opening and no response to pain. As he recovered he called the episode sleep, recalled little, said he had been afraid to say the wrong thing, and declared himself the most extraordinary inventor of the century.", point: "Catatonia can swing between excitement and stupor. Persisting grandiosity and inadequate emotional response show that remission of the motor signs is not remission of the illness." },
            { type: "p", text: "Earlier DSM editions described **paranoid, disorganized, catatonic, undifferentiated and residual** subtypes. DSM-5 dropped them because their validity was questioned: despite face validity they relate weakly to biology, are unstable over time and predict poorly. ICD-10 keeps them." },
            { type: "table", caption: "ICD-10 subtypes in brief", head: ["Subtype", "Defining features"], rows: [
              ["Paranoid", "Primarily delusions, with little or no disturbance of affect or volition"],
              ["Hebephrenic", "Negative affect with inappropriate mood, social isolation and unpredictable behavior"],
              ["Catatonic", "Psychomotor change: posturing, odd mannerisms, stupor or agitation"],
              ["Undifferentiated", "Does not fit a specific subtype"],
              ["Residual", "Chronic illness with cognitive change after prolonged psychosis"],
              ["Simple", "Slowly progressive change in behavior and function, affective blunting, without preceding psychotic symptoms"]
            ] }
          ]
        },
        {
          id: "s-schizoaffective",
          title: "Schizoaffective disorder",
          blocks: [
            { type: "p", text: "Schizoaffective disorder has features of both schizophrenia and a mood disorder. Patients can receive the diagnosis if they fall into any of **six groups**: schizophrenia with mood symptoms; mood disorder with schizophrenic symptoms; both disorders; a third psychosis unrelated to either; a disorder on a continuum between the two; or a combination. Clinicians often use it as a **provisional label when uncertain**." },
            { type: "p", text: "Whether it is a subtype of schizophrenia, a mood disorder, both at once, or a distinct third psychosis is unresolved. Coincidental co-occurrence is unlikely because it is more common than chance would predict. The most likely answer is that it is a **heterogeneous group** covering all of these possibilities, and the overlap between the genetics of schizophrenia and mood disorders makes overlap between the disorders plausible." },
            { type: "table", wide: true, caption: "Schizoaffective disorder in DSM-5 and ICD-10 (after Table 5-4)", head: ["Feature", "DSM-5", "ICD-10"], rows: [
              ["Duration", "Mood symptoms present for the majority of the illness, plus a 2-week period of psychotic symptoms without mood symptoms", "—"],
              ["Symptoms", "Meets criteria for a major depressive or manic episode and for schizophrenia", "Symptoms of an affective episode and schizophrenic symptoms"],
              ["Consequences", "Functional impairment", "—"],
              ["Exclusions", "Substance use; another mental illness; another medical condition", "Schizophrenia; depressive or manic episodes"],
              ["Specifiers", "Bipolar type (manic episode); depressive type (depressive episode); with catatonia", "Manic, depressive, mixed, unspecified and other types"],
              ["Course specifiers", "Same set as schizophrenia", "—"]
            ] },
            { type: "callout", kind: "exam", title: "Why episode length matters", text: "You must time each episode for two reasons. First, to show psychosis **also occurs independently of mood symptoms**, you need to know when the mood episode ends and the psychosis continues. Second, the mood and psychotic periods should be **roughly comparable in length**, which requires knowing the course." },
            { type: "case", title: "Chapter case: Mrs. P", text: "A 47-year-old woman with illness since age 20 had recurrent depressive episodes and periods of increased energy, talkativeness, reduced need for sleep and all-night cleaning. About four years in, she began hearing voices that worsened with depression but persisted when her mood was normal. Later came beliefs that police were everywhere and neighbors were spying, then messages from God and the police to fight drugs while organized crime tried to stop her. Lithium, antidepressants and antipsychotics left her chronically symptomatic on olanzapine and citalopram.", point: "A classic schizoaffective course: clear depressive and hypomanic episodes on top of continuous psychosis with first-rank symptoms that persists between mood episodes." },
            { type: "p", text: "**Course and epidemiology.** The course lies between schizophrenia and mood disorders: **better than schizophrenia, worse than bipolar or major depressive disorder**. Prevalence is perhaps **0.5 to 0.8 percent**. Sex differences resemble mood disorders: more women in the depressive type, a similar ratio in the bipolar type. The bipolar type may be more common in younger people and the depressive type in older adults. As with schizophrenia, women tend to develop it later than men." }
          ]
        },
        {
          id: "s-schizophreniform",
          title: "Schizophreniform disorder",
          blocks: [
            { type: "p", text: "Symptoms match schizophrenia but last **at least 1 month and less than 6 months**, after which the patient should return to baseline. It is an **acute psychotic disorder with rapid onset and no long prodrome**. Patients may be impaired during an episode but rarely describe a progressive decline in social or occupational function. Like schizoaffective disorder, it is heterogeneous: some patients resemble schizophrenia, others a mood disorder. Some have episodic illness with several episodes separated by long full remissions; if total symptom duration passes 6 months, consider schizophrenia." },
            { type: "table", wide: true, caption: "Schizophreniform disorder in DSM-5 and ICD-10 (after Table 5-5)", head: ["Feature", "DSM-5", "ICD-10 (acute and transient psychotic disorder)"], rows: [
              ["Duration", "At least 1 month but less than 6 months", "Less than 1 month on average"],
              ["Symptoms", "Same as schizophrenia", "Schizophrenic symptoms, with or without polymorphic (unstable, frequently changing) delusions, hallucinations or behavior"],
              ["Number and exclusions", "Same as schizophrenia", "If symptoms persist, change the diagnosis to schizophrenia"],
              ["Specifiers", "With catatonia. With good prognostic features (two or more): psychotic symptoms within 4 weeks of first behavior change; confusion; good premorbid function; no negative symptoms. Or without good prognostic features", "—"]
            ] },
            { type: "case", title: "Chapter case: Mr. C, the accountant", text: "A well-functioning 28-year-old accountant became convinced, after his girlfriend ended the relationship and asked him to stay away, that she wanted him dead and had hired his supervisor to kill him. A mocking voice told him to quit and move away. He was hypervigilant, terrified and enraged, with no mood syndrome or formal thought disorder. After two months he was brought in by police, treated with an antipsychotic, remitted within weeks and returned to work.", point: "Rapid onset, good premorbid function and full recovery within 6 months fit schizophreniform disorder with good prognostic features." },
            { type: "list", title: "Outcome and epidemiology", items: [
              "Perhaps **60 to 80 percent** later develop schizophrenia. Others have recurrent time-limited episodes, and only a few have a single episode.",
              "Patients who do not progress to schizophrenia have a **better outcome** than patients with schizophrenia.",
              "Negative symptoms are rare; when present they are a **poor prognostic sign**, and many such patients go on to schizophrenia.",
              "About **half as common as schizophrenia**, **more common in men**, most common in **adolescents and young adults**.",
              "Relatives are **more likely to have mood disorders** (often psychotic) than relatives of patients with schizophrenia."
            ] }
          ]
        },
        {
          id: "s-brief",
          title: "Brief psychotic disorder",
          blocks: [
            { type: "p", text: "A psychotic condition with **sudden onset lasting at least 1 day and less than 1 month**, followed by **full remission** and return to premorbid function. It is an acute and transient syndrome, considered uncommon, with no reliable incidence or prevalence data." },
            { type: "list", title: "Who gets it", items: [
              "More common in **younger patients (20s and 30s)** and in **women**, a pattern sharply different from schizophrenia.",
              "May be seen most often in **lower socioeconomic groups** and in people who have lived through **disasters or major cultural change**, such as immigrants.",
              "Age of onset may be higher in industrialized settings than in developing countries.",
              "Cause unknown, but it is **common in patients with personality disorders**, and major **psychosocial stressors** raise risk."
            ] },
            { type: "p", text: "There is always at least one major psychotic symptom (hallucinations, delusions or disorganized thinking), usually with abrupt onset, but not always the full schizophrenic picture. **Labile mood, confusion and impaired attention** may be more common at onset than in illnesses that become chronic. Characteristic features include **emotional volatility, strange or bizarre behavior, screaming or muteness, and impaired memory for recent events**." },
            { type: "callout", kind: "caution", text: "Several features of brief psychotic disorder suggest **delirium**. A medical workup is warranted, especially to rule out **adverse drug reactions**." },
            { type: "table", wide: true, caption: "Brief psychotic disorder in DSM-5 (after Table 5-6)", head: ["Feature", "DSM-5"], rows: [
              ["Duration", "At least 1 day and less than 1 month, with return to baseline"],
              ["Symptoms", "As for schizophrenia except that negative symptoms are not included"],
              ["Number required", "One of delusions, hallucinations or disorganized speech, with or without behavioral symptoms"],
              ["Exclusions", "Culturally sanctioned response or behavior; another mental illness; substance use; another medical condition"],
              ["Symptom specifiers", "With marked stressors; without marked stressors; with catatonia"],
              ["Course specifier", "With peripartum onset: during pregnancy or within 4 weeks of delivery"]
            ], note: "ICD-10 does not distinguish brief psychotic disorder from schizophreniform disorder; both are acute and transient psychotic disorder." },
            { type: "case", title: "Chapter case: the new military recruit", text: "A shy, isolative 20-year-old from a poor, conflict-ridden home with an abusive, drinking father felt watched and targeted by other recruits within a week of starting military duty and heard voices calling his name. He was admitted guarded, suspicious and depressed. Psychosis cleared quickly with an antipsychotic. At follow-up 4, 7 and 23 years later he had no recurrence, had worked steadily, married, raised children and ran a small business.", point: "An acute psychosis precipitated by a marked stressor in a vulnerable person, with complete and lasting recovery." }
          ]
        },
        {
          id: "s-delusional",
          title: "Delusional disorder",
          blocks: [
            { type: "p", text: "Diagnosed when one or more delusions last **at least 1 month** and cannot be attributed to another psychiatric disorder. Delusions are usually **nonbizarre**, concerning situations that could happen in real life, such as being followed, infected or loved at a distance." },
            { type: "table", wide: true, caption: "Delusional disorder in DSM-5 and ICD-10 (after Table 5-7)", head: ["Feature", "DSM-5", "ICD-10"], rows: [
              ["Duration", "At least 1 month", "—"],
              ["Symptoms", "Delusions", "Persistent delusions, with or without hallucinations"],
              ["Number required", "One or more", "One or more delusions"],
              ["Consequences", "No marked functional impairment", "—"],
              ["Exclusions", "Schizophrenia; another medical condition; substance use; another mental illness", "Personality disorder; psychosis; psychogenic reaction; schizophrenia"],
              ["Type specifiers", "Erotomanic, grandiose, jealous, persecutory, somatic, mixed, unspecified; **with bizarre content** if the belief is impossible or unrelated to reality", "—"],
              ["Course specifiers", "Same set as schizophrenia", "—"]
            ] },
            { type: "defs", title: "Types", items: [
              ["Persecutory", "Others are trying to harm the patient. One of the two most common types."],
              ["Jealous", "A partner is unfaithful. The other most common type."],
              ["Erotomanic", "Another person, often of higher status, is in love with the patient."],
              ["Somatic", "The patient has a physical disorder."],
              ["Grandiose", "A delusion of grandeur."],
              ["Mixed or unspecified", "A combination of types, or one that fits none."]
            ] },
            { type: "p", text: "**Presentation.** Patients are usually well groomed with no gross disintegration of personality or daily life, yet may seem eccentric, odd, suspicious or hostile, and are sometimes **litigious**. The striking feature is a mental status examination that is **normal apart from a markedly abnormal delusional system**. **Mood matches the delusion**: euphoric with grandiosity, suspicious with persecution, often with mild depressive coloring. By definition there are **no prominent or sustained hallucinations**; the few patients who hallucinate almost always have auditory rather than visual experiences. Cognition is generally normal." },
            { type: "callout", kind: "pearl", title: "Do not collude", text: "Patients may try to recruit you as an ally in the delusion. **Do not pretend to accept it**; collusion confuses reality further and sets up later distrust. Instead build the alliance, **avoid arguing about the truth of the delusion**, and focus on the distress it causes: anxiety, low mood, insomnia." },
            { type: "case", title: "Chapter case: Mrs. S and the downstairs neighbor", text: "A 62-year-old woman, still active and playing tennis daily, spent 8 months convinced her downstairs neighbor was harassing her to make her move, first from looks and a damaged mailbox, then by leaving cleaning solutions in the basement so fumes would overcome her. Afraid to fall asleep, she was mildly depressed but still enjoyed friends. Her mental status was otherwise normal. She improved with risperidone at bedtime and clonazepam after her psychiatrist focused on her sleep and anxiety rather than the truth of her belief.", point: "A single, plausible (nonbizarre) delusion with preserved function and subthreshold depression: delusional disorder, persecutory type, not psychotic depression." },
            { type: "case", title: "Chapter case: Mr. M and his wife’s fidelity", text: "A 51-year-old sanitation truck driver followed his wife, kept notes and woke her at night with accusations of an affair until an argument turned physical. He felt low about the “betrayal” but had no sleep, appetite or work changes. Low-dose antipsychotic treatment reduced his preoccupation, but 10 years later he still believed she was unfaithful, without further aggression or admissions.", point: "A fixed, encapsulated jealous delusion with a partial response to medication. The jealous type carries a poorer prognosis." },
            { type: "p", text: "**Epidemiology and course.** Delusional disorder is rare, probably heterogeneous, and its causes are unknown. Many patients function well and never see a psychiatrist; they may come to attention during evaluation for something else, such as major depression or a medical consultation. The disorder appears **stable over time**. Prognosis is thought to be **better for persecutory, somatic and erotomanic** delusions than for **grandiose and jealous** delusions." }
          ]
        },
        {
          id: "s-other",
          title: "Other psychotic disorders and shared psychosis",
          blocks: [
            { type: "p", text: "Some presentations fit no specific disorder: persistent auditory hallucinations with no other symptoms, delusions with prominent mood symptoms, very transient symptoms, or experiences the patient has full insight into, which may be too minor to warrant a typical diagnosis." },
            { type: "h", text: "Shared psychosis (folie à deux)" },
            { type: "p", text: "Delusions **transfer from one person to another**. The pair has usually been closely associated for a long time, often living together in social isolation. In the most common form, recognized in DSM-5, the **primary case** is often chronically ill and the dominant member of the relationship; the **secondary case** is more suggestible, and often less intelligent, more gullible, more passive or lower in self-esteem. If the pair separates the secondary person **may give up the delusion**, though not always." },
            { type: "list", title: "Points to know", items: [
              "Associated factors: **old age, low intelligence, sensory impairment, cerebrovascular disease and alcohol abuse**; a genetic predisposition to idiopathic psychosis has also been suggested.",
              "**Folie simultanée**: two people become psychotic at the same time with the same delusion.",
              "More than two people (folie à trois, à quatre, à famille) is especially rare.",
              "Most common pairings: **sister–sister, husband–wife and mother–child**. Almost all cases involve members of one family.",
              "Probably rare; the literature consists mostly of case reports."
            ] },
            { type: "case", title: "Chapter case: a family’s judicial conspiracy", text: "A 52-year-old man arrested for berating a probate judge mid-trial described years of persecution by local judges, kept records of their wrongdoing and wrote to newspapers, the bar association and Congress. Apart from this story and mildly low mood, his mental state was normal. His wife and several adult children shared the belief, which did not change over 10 days of observation; he declined follow-up.", point: "When others share the delusion they shield the patient and validate his response, which makes these cases hard to treat." }
          ]
        },
        {
          id: "s-tests",
          title: "Tests, rating scales and psychological testing",
          blocks: [
            { type: "p", text: "Psychotic disorders remain **clinical diagnoses**; no test is sensitive or specific enough to diagnose them. Tests such as serology are used mainly to **rule out other causes**, such as **syphilis** or **anti-NMDA receptor encephalitis**. Some tests differ on average between groups, for example **event-related potentials on computerized EEG**." },
            { type: "table", caption: "Scales named in the chapter", head: ["Purpose", "Instrument"], rows: [
              ["Track symptom severity and treatment outcome", "Positive and Negative Syndrome Scale (**PANSS**); Brief Psychiatric Rating Scale (**BPRS**)"],
              ["Parkinsonism and other extrapyramidal signs", "Simpson–Angus Scale (**SAS**)"],
              ["Tardive and other involuntary movements", "Abnormal Involuntary Movement Scale (**AIMS**)"],
              ["Akathisia", "Barnes Akathisia Rating Scale (**BARS**)"]
            ], note: "Structured diagnostic interviews exist but are used mainly in research. Most scales measure outcomes, not the presence of the diagnosis." },
            { type: "list", title: "Psychological testing", items: [
              "Patients generally do poorly across neuropsychological tests; **vigilance, memory and concept formation** are most affected, consistent with **frontotemporal** involvement.",
              "**Halstead–Reitan** and **Luria–Nebraska** batteries often show **bilateral frontal and temporal** dysfunction: attention, retention time and problem solving. Motor ability is also impaired, possibly related to brain asymmetry.",
              "**Intelligence**: as a group, patients score lower; low intelligence is often present at onset and may decline as the illness progresses.",
              "**Projective tests** (Rorschach, Thematic Apperception Test) may reveal bizarre ideation. **Personality inventories** such as the MMPI are often abnormal but add little to diagnosis or treatment planning."
            ] }
          ]
        },
        {
          id: "s-ddx",
          title: "Differential diagnosis",
          blocks: [
            { type: "p", text: "Many medical conditions and substances can cause psychosis or catatonia. The correct diagnosis in that case is **psychotic disorder due to another medical condition**, **catatonic disorder due to another medical condition**, or **substance-induced psychotic disorder**." },
            { type: "steps", title: "Three rules for every psychotic presentation", items: [
              ["Pursue medical causes aggressively", "when there are unusual or rare symptoms or **any change in level of consciousness**."],
              ["Take a complete family history", "of medical, neurologic and psychiatric disorders."],
              ["Never assume an old diagnosis explains new symptoms", "A patient with schizophrenia is **just as likely to have a brain tumor** causing psychosis as anyone else."]
            ] },
            { type: "table", wide: true, caption: "Medical causes of delusional syndromes (after Table 5-8)", head: ["Category", "Examples"], rows: [
              ["Neurodegenerative", "Alzheimer disease, Pick disease, Huntington disease, basal ganglia calcification, multiple sclerosis, metachromatic leukodystrophy"],
              ["Other CNS disorders", "Brain tumors (especially temporal lobe and deep hemispheric), epilepsy (especially complex partial seizures), head trauma with subdural hematoma, anoxic brain injury, fat embolism"],
              ["Vascular", "Atherosclerotic disease (especially diffuse, temporoparietal or subcortical lesions), hypertensive encephalopathy, subarachnoid hemorrhage, temporal arteritis"],
              ["Infectious", "HIV/AIDS, encephalitis lethargica, Creutzfeldt–Jakob disease, syphilis, malaria, acute viral encephalitis"],
              ["Metabolic", "Hypercalcemia, hyponatremia, hypoglycemia, uremia, hepatic encephalopathy, porphyria"],
              ["Endocrine", "Addison disease, Cushing syndrome, hyperthyroidism or hypothyroidism, panhypopituitarism"],
              ["Vitamin deficiency", "B12, folate, thiamine, niacin"],
              ["Medications", "ACTH, anabolic steroids, corticosteroids, cimetidine, antibiotics (cephalosporins, penicillin), disulfiram, anticholinergic agents"],
              ["Substances", "Amphetamines, cocaine, alcohol, cannabis, hallucinogens"],
              ["Toxins", "Mercury, arsenic, manganese, thallium"]
            ] },
            { type: "h", text: "Mood disorders" },
            { type: "p", text: "Severe depression can bring delusions and hallucinations that are typically **mood-congruent**: guilt, self-deprecation, deserved punishment, incurable illness. The psychosis **resolves completely when the depression resolves**. Withdrawal, poor self-care and loss of function in severe depression are secondary to mood and should not be mistaken for negative symptoms. Mania often brings **grandiose**, mood-congruent delusions and sometimes hallucinations. **Flight of ideas** can resemble schizophrenic thought disorder; listen for whether the **associative links between topics are preserved**, even though the speed makes it hard to follow." },
            { type: "h", text: "Personality disorders" },
            { type: "p", text: "**Schizotypal, schizoid and borderline** personality disorders overlap with schizophrenia, and severe **obsessive-compulsive personality disorder** can mask an underlying schizophrenic process. Personality disorders differ in having **milder symptoms, a lifelong history and no identifiable date of onset**." },
            { type: "h", text: "Malingering and factitious disorder" },
            { type: "p", text: "Convincingly faking schizophrenia is hard, especially in front of an experienced clinician, yet people have been admitted and treated this way. Full conscious control of symptom production, usually with an evident **financial or legal motive**, suggests **malingering**. Less control over falsified psychotic symptoms suggests **factitious disorder**. Patients who truly have schizophrenia may also exaggerate an exacerbation to gain benefits or admission." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      title: "Comorbidity, course and prognosis",
      sections: [
        {
          id: "s-comorbidity",
          title: "Comorbidity",
          blocks: [
            { type: "h", text: "Substance use disorders" },
            { type: "p", text: "Lifetime prevalence of a comorbid substance use disorder is **74 percent**. **Tobacco, alcohol, cannabis and cocaine** are most common, and almost half of patients have a severe drug or alcohol problem at some point." },
            { type: "defs", title: "Three models for the link", items: [
              ["Diathesis–stress", "A biologically vulnerable person exposed to stress, which may include a substance, is more likely to develop schizophrenia."],
              ["Self-medication", "Patients use substances to ease symptoms or side effects."],
              ["Shared vulnerability", "Both disorders share causes. **The available evidence favors this model**: shared genetic risk or environmental insult disrupts key circuits such as reward pathways, raising adolescent substance use and schizophrenia together."]
            ] },
            { type: "table", caption: "Medical comorbidity", head: ["Condition", "What the chapter says"], rows: [
              ["Complex partial epilepsy", "Schizophrenia-like psychoses are more frequent than expected, especially with temporal lobe seizures. Risk factors: **left-sided focus, medial temporal lesion, early seizure onset**."],
              ["Obesity", "Higher BMI than matched peers, due partly to antipsychotics, poor nutrition and inactivity; drives cardiovascular disease, diabetes, hyperlipidemia and obstructive sleep apnea."],
              ["Type 2 diabetes", "Increased risk, partly through obesity, with evidence that some antipsychotics cause diabetes **through a direct mechanism**."],
              ["Cardiovascular disease", "Antipsychotic effects on cardiac electrophysiology plus obesity, smoking, diabetes, hyperlipidemia and sedentary life."],
              ["HIV", "Risk **1.5 to 2 times** the general population, from unprotected sex, multiple partners and drug use."],
              ["COPD", "Increased, largely from smoking; unclear whether smoking is the only cause."],
              ["Rheumatoid arthritis", "**Reduced** risk, a repeatedly replicated inverse association; GWAS show negative genetic correlation. Significance unknown."]
            ] }
          ]
        },
        {
          id: "s-course",
          title: "Course of illness",
          blocks: [
            { type: "p", text: "**Premorbid signs** appear before the prodrome, which is part of the evolving illness itself. A typical (not invariable) premorbid history is a **schizoid or schizotypal** personality: quiet, passive, introverted, with few friends in childhood. Preschizophrenic adolescents may have no close friends, no dates and avoid team sports, preferring films, music or computer games to social life. Some show a sudden onset of **obsessive-compulsive behavior** as part of the prodrome." },
            { type: "p", text: "Families often date the illness to the first hospitalization, but signs have often been present for **months or years**. Early complaints may be somatic (headache, back and muscle pain, weakness, digestive problems), leading to initial diagnoses such as malingering, chronic fatigue syndrome or somatic symptom disorder. Family and friends notice the person has changed and is not functioning at work, socially or personally. The patient may become drawn to **abstract ideas, philosophy, the occult or religion**. Other prodromal features: markedly peculiar behavior, abnormal affect, unusual speech, bizarre ideas and strange perceptual experiences." },
            { type: "steps", title: "Typical sequence", items: [
              ["Premorbid", "Schizoid or schizotypal traits; social withdrawal through childhood and adolescence."],
              ["Prodrome", "Usually begins in adolescence; may be triggered by leaving for college, substance use or a death in the family; can last **a year or more** before overt psychosis."],
              ["First psychotic episode", "Gradual recovery, sometimes with relatively normal function for a long time."],
              ["Relapses", "Usual. The pattern over the **first 5 years** after diagnosis generally predicts the course. Each relapse is followed by **further decline in baseline function**."],
              ["Later course", "Positive symptoms tend to lessen; **negative symptoms may worsen**. Vulnerability to stress is usually lifelong, and a **postpsychotic depression** can follow an episode."]
            ] },
            { type: "callout", kind: "exam", text: "Failure to return to baseline after each relapse was historically considered the **main distinction between schizophrenia and mood disorders**." },
            { type: "case", title: "Chapter case: the man under the steam pipes", text: "An unmarried 27-year-old was admitted after violence toward his father. Weeks of voices gave way to a strange routine: awake all night, asleep all day, unwashed for weeks, chain-smoking and drinking huge amounts of tea. In hospital he was cooperative but indifferent to almost everything and needed supervision for hygiene. Six years later he lay on a couch all day, refused any work, and in winter lay for hours under the warm steam pipes in the hospital tunnels.", point: "After positive symptoms fade, avolition, apathy and asociality can become the disabling core of the illness." },
            { type: "p", text: "About **one third** of patients achieve some marginal or integrated social existence. Most live lives marked by aimlessness, inactivity, frequent hospitalization and, in cities, homelessness and poverty." }
          ]
        },
        {
          id: "s-prognosis",
          title: "Prognosis",
          blocks: [
            { type: "list", items: [
              "Life expectancy is reduced by as much as **20 percent**. Mortality from accidents and natural causes is higher; institutional or treatment factors do not explain it, but diagnosing and treating medical and surgical illness in these patients is hard, and **clinical neglect** may contribute.",
              "Reported remission rates range from **10 to 60 percent**. A reasonable estimate: **20–30 percent** lead somewhat normal lives, **20–30 percent** have moderate ongoing symptoms, and **40–60 percent** remain significantly impaired for life.",
              "Over the **5 to 10 years** after a first hospitalization, only **10–20 percent** have a good outcome and **over 50 percent** a poor one, with repeated admissions, exacerbations, major mood episodes and suicide attempts.",
              "Patients with schizophrenia do much worse than those with mood disorders, though **20–25 percent** of mood disorder patients are also severely disturbed at long-term follow-up."
            ] },
            { type: "table", caption: "Prognostic factors for schizophrenia (after Table 5-9)", head: ["Better prognosis", "Poorer prognosis"], rowHeads: false, rows: [
              ["Acute onset", "Insidious onset"],
              ["Female sex", "Childhood or adolescent onset"],
              ["Living in a developed country", "Poor premorbid functioning"],
              ["", "Cognitive impairment"]
            ] },
            { type: "callout", kind: "pearl", text: "Schizophrenia does not always deteriorate. Use these factors to set realistic expectations with families. Elsewhere the chapter links **neurologic soft signs** to a poor prognosis, and **negative symptoms** to a poor prognosis in schizophreniform disorder." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      title: "Treat",
      sections: [
        {
          id: "s-tx-principles",
          title: "Principles and hospitalization",
          blocks: [
            { type: "p", text: "Antipsychotics are the **mainstay** of treatment, but no single approach is enough for such a multifaceted disorder. Psychosocial treatment should be integrated with and support medication, and patients do better with **the combination than with either alone**." },
            { type: "list", title: "Hospital use", items: [
              "Readmission after a first hospitalization is frequent: perhaps **40–60 percent within 2 years**.",
              "Patients with schizophrenia occupy about **50 percent of psychiatric hospital beds** and make up about **16 percent of all psychiatric patients receiving any treatment**."
            ] },
            { type: "list", title: "Indications for hospitalization", items: [
              "Diagnostic evaluation",
              "Stabilizing medication",
              "Safety: suicidal or homicidal ideation",
              "Grossly disorganized or inappropriate behavior, including inability to meet basic needs for food, clothing and shelter"
            ] },
            { type: "p", text: "A main goal of admission is to **link the patient with community supports**. **Short stays of 4 to 6 weeks are as effective as long ones**, and settings with **active behavioral approaches** do better than custodial institutions. Plans should focus on self-care, quality of life, work and relationships, and coordinate early with aftercare: family homes, foster families, board-and-care homes and halfway houses. Day programs and home visits by therapists or nurses help patients stay out of hospital and improve daily life." }
          ]
        },
        {
          id: "s-acute",
          title: "Acute pharmacotherapy and agitation",
          blocks: [
            { type: "p", text: "Most patients first present with acute psychosis needing immediate treatment. The **acute phase** focuses on the most severe psychotic symptoms and usually lasts **4 to 8 weeks**." },
            { type: "list", title: "Choosing a drug", items: [
              "Most guidelines recommend **starting with a second-generation antipsychotic (SGA)**.",
              "SGAs are probably most effective for severe and predominantly positive symptoms but help across a broad range of symptoms and severity.",
              "There is little guidance for choosing a specific agent. Some studies suggest efficacy differences, but **the biggest difference between drugs is their side effects**, which should drive the choice."
            ] },
            { type: "h", text: "Managing agitation" },
            { type: "table", caption: "Options for psychotic agitation", head: ["Option", "Key points"], rows: [
              ["IM antipsychotic", "Faster effect in highly agitated patients. A single IM dose of a first- or second-generation drug can often calm the patient **without excessive sedation**."],
              ["Low-potency antipsychotic", "Often causes **sedation and postural hypotension**, especially when given IM."],
              ["IM ziprasidone or olanzapine", "Like their oral forms, little extrapyramidal toxicity acutely: an advantage over **haloperidol or fluphenazine**, which can cause **frightening dystonias or akathisia**."],
              ["Olanzapine rapidly dissolving tablet", "An oral alternative to an injection."],
              ["Benzodiazepine", "Useful for agitation. **Lorazepam** is reliably absorbed **orally or IM**. Benzodiazepines may **reduce the antipsychotic dose** needed."]
            ] },
            { type: "callout", kind: "pearl", title: "Side effects come first", text: "Response may take days to weeks, but side effects can start almost immediately. Warn patients so early adverse effects do not end the trial before benefit arrives." }
          ]
        },
        {
          id: "s-side-effects",
          title: "Side effects: EPS, tardive dyskinesia, prolactin and metabolic risk",
          blocks: [
            { type: "table", caption: "Typical side-effect profiles", head: ["Drug group", "Main problems"], rows: [
              ["First-generation, high potency", "Extrapyramidal side effects: parkinsonism, dystonia, akathisia"],
              ["First-generation, low potency", "Sedation and postural hypotension"],
              ["Second-generation", "Weight gain and metabolic derangement (EPS less common but possible)"]
            ] },
            { type: "h", text: "Extrapyramidal side effects (EPS)" },
            { type: "list", title: "Three ways to manage EPS", ordered: true, items: [
              "**Reduce the antipsychotic dose.**",
              "**Add an antiparkinson drug.** Anticholinergic antiparkinson agents are the most effective, but they cause dry mouth, constipation, blurred vision and often memory loss, and are often only partly effective.",
              "**Switch** to a drug less likely to cause EPS."
            ] },
            { type: "callout", kind: "exam", title: "Akathisia", text: "Centrally acting **β-blockers such as propranolol** may help akathisia; most patients respond to **30 to 90 mg per day**." },
            { type: "list", title: "Prophylactic antiparkinson medication with conventional drugs", items: [
              "Consider it for patients **with a history of EPS sensitivity** and those on **relatively high doses of high-potency drugs**.",
              "It may help **young men** on high-potency drugs, who are especially **vulnerable to dystonia**.",
              "These patients should also be considered for newer drugs."
            ] },
            { type: "p", text: "Some patients get EPS at the dose needed to control psychosis and find the side effects worse than the illness; they should routinely receive a drug less likely to cause EPS. **Risperidone** can cause EPS **even at 0.5 mg**, with risk and severity rising above about **6 mg**. **Olanzapine and ziprasidone** also cause **dose-related parkinsonism and akathisia**." },
            { type: "h", text: "Tardive dyskinesia (TD)" },
            { type: "list", items: [
              "About **20–30 percent** of patients on long-term first-generation antipsychotics develop TD.",
              "About **3–5 percent of young patients** on a first-generation drug develop TD **each year**; the risk in **elderly** patients is **much higher**.",
              "Severe TD is uncommon but can affect walking, breathing, eating and talking.",
              "More vulnerable: patients **sensitive to acute EPS**, and those with comorbid **cognitive or mood disorders**.",
              "Onset: during treatment, or within **4 weeks of stopping an oral drug** or **8 weeks after stopping a depot**.",
              "Risk is **lower with newer drugs but not zero**."
            ] },
            { type: "steps", title: "Preventing and managing TD", items: [
              ["Use the lowest effective dose", "of antipsychotic."],
              ["Prescribe cautiously", "in children, elderly patients and patients with mood disorders."],
              ["Examine regularly", "for signs of TD."],
              ["When TD appears", "consider an alternative antipsychotic and a dose reduction."],
              ["If TD worsens", "consider stopping the antipsychotic or switching drugs. **Clozapine** is effective for severe TD and tardive dystonia."]
            ] },
            { type: "h", text: "Sedation, hypotension and prolactin" },
            { type: "p", text: "Sedation and postural hypotension are most severe at the start of treatment with low-potency first-generation drugs (and with clozapine), so reaching a therapeutic dose may take **weeks of titration**. Most patients become tolerant, but persistent daytime drowsiness can undermine a return to community life." },
            { type: "p", text: "The chapter states that **all antipsychotics elevate prolactin**, which can cause **galactorrhea and irregular menses**. Chronic elevation suppresses gonadotropin-releasing hormone and therefore gonadal hormones, affecting **libido and sexual function**, and may reduce **bone density** toward osteoporosis. These concerns come from prolactin elevations due to tumors and other causes; it is unclear whether the smaller elevations from medications carry the same risks." },
            { type: "h", text: "Metabolic monitoring" },
            { type: "callout", kind: "exam", text: "Because SGAs affect insulin metabolism, monitor **BMI, fasting glucose and lipids**. **Weigh the patient and calculate BMI at every visit for at least 6 months after any medication change.**" }
          ]
        },
        {
          id: "s-clozapine",
          title: "Clozapine",
          blocks: [
            { type: "p", text: "Clozapine is considered **the most effective antipsychotic**, particularly for patients who have not responded to other treatments. Double-blind comparisons show its clearest advantage in patients with the **most severe psychotic symptoms** and those who **responded poorly to other antipsychotics**. It may be particularly effective in reducing suicidal ideation in patients previously hospitalized for suicidality, and it is effective for severe tardive dyskinesia and tardive dystonia." },
            { type: "table", caption: "Clozapine adverse effects", head: ["Type", "Effect"], rows: [
              ["Serious", "**Agranulocytosis** in about **0.3 percent**; **seizures** in up to **5 percent at doses above 600 mg**; rarely **myocarditis**"],
              ["Common", "Hypersalivation, sedation, tachycardia, weight gain, postural hypotension"]
            ] },
            { type: "timeline", title: "US blood monitoring schedule for clozapine", cols: ["Months 1–6", "Months 7–12", "Year 2", "Onward"], rows: [
              { label: "First 6 months", from: 0, to: 1, bar: "Weekly", color: "guide" },
              { label: "Next 6 months", from: 1, to: 2, bar: "Every 2 weeks", color: "hy" },
              { label: "After 1 year", from: 2, to: 4, bar: "Monthly", color: "case" }
            ] },
            { type: "callout", kind: "exam", title: "When to use it", text: "Because of its risks and monitoring burden, most guidelines recommend considering clozapine **after failure of at least two other antipsychotic trials**." },
            { type: "p", text: "From Table 5-10: start at **12.5 mg**, typical range **50–600 mg**, maximum approved **900 mg**. It is metabolized mainly by **CYP1A2** (about 30 percent), then 2C19, 3A4, 2C9 and 2D6. Half-life is about **12 hours**. Forms: tablets, dissolvable tablets and a 50 mg/mL liquid." }
          ]
        },
        {
          id: "s-drug-table",
          title: "Antipsychotic reference table",
          blocks: [
            { type: "p", text: "The chapter’s Table 5-10 summarizes pharmacology and dosing from package inserts. Doses must be individualized for efficacy and tolerability. **CPZ equivalent** is the dose equal to 100 mg of chlorpromazine; a smaller number means higher potency." },
            { type: "table", wide: true, caption: "Second- and selected first-generation antipsychotics (after Table 5-10)", head: ["Drug", "Main CYP", "Half-life", "CPZ eq. (mg)", "Start (mg)", "Usual range (mg)", "Max (mg)", "Forms and notes"], rows: [
              "Second generation: partial D2 agonists",
              ["Aripiprazole", "2D6 > 3A4", "PO 75 h; LAI 30–47 days", "7.5", "PO 10–15", "PO 10–30; LAI 400 every 4 wk", "PO 30; LAI 400", "PO, dissolvable, liquid, short-acting IM, LAI. Start LAI 400 mg with **2 weeks of oral** aripiprazole 10–20 mg"],
              ["Brexpiprazole", "2D6, 3A4", "91 h", "N/A", "0.5–1", "2–4", "4", "PO only"],
              ["Cariprazine", "3A4 > 2D6", "2–5 days (didesmethyl metabolite 1–3 wk)", "N/A", "1.5", "1.5–6", "6", "PO only"],
              "Second generation: D2–5-HT2A antagonists",
              ["Asenapine", "1A2 > 3A4", "About 24 h terminal", "7.5", "5 bid", "10–20", "20", "**Sublingual**; bioavailability 35%, **2% or less if swallowed**; no food or drink for 10 min"],
              ["Clozapine", "1A2 > 2C19 > 3A4 > 2C9 > 2D6", "12 h", "50", "12.5", "50–600", "900", "PO, dissolvable, liquid"],
              ["Iloperidone", "2D6 > 3A4 > 1A2", "18 h", "5", "1 bid day 1, 2 bid day 2, then +2/day", "12–24", "24", "PO; titrate"],
              ["Lurasidone", "3A4", "18 h", "25", "40–80", "40–120", "160", "PO **with a meal of at least 350 kcal**; bioavailability 9–19%"],
              ["Olanzapine", "1A2, 2D6, 3A4", "PO 30 h", "5", "PO 5–10", "PO 10–20", "20", "PO, dissolvable, short-acting IM, LAI every 2 or 4 wk (e.g., 210/2 wk or 405/4 wk ≈ oral 10 mg)"],
              ["Paliperidone", "Under 10% hepatic first-pass", "PO 23 h; LAI 25–49 days", "3", "PO 6", "PO 3–12; LAI 117–234 every 4 wk", "12", "ER tablets; LAI monthly or every 12 weeks. Start LAI **234 mg deltoid day 1, 156 mg day 8**, then 39–234 mg monthly"],
              ["Quetiapine", "3A4", "6–7 h", "75", "IR 25–100; XR 200–300", "IR 150–750; XR 400–800", "800", "PO immediate and extended release"],
              ["Risperidone", "2D6 > 3A4", "3 h", "2", "PO 2", "PO 2–8; LAI 12.5–50 every 2 wk", "16", "PO, dissolvable, liquid, LAI. Start LAI 25 mg with **3 weeks of oral** risperidone"],
              ["Ziprasidone", "Aldehyde oxidase (2/3) > 3A4 (1/3)", "PO 7 h", "60", "20–40 bid", "80–160", "160", "PO **with a meal of at least 500 kcal**; short-acting IM"],
              "First generation: D2 antagonists",
              ["Chlorpromazine", "2D6", "30 h", "100", "PO 25–100; IM 25 then 25–50 after 1–4 h", "PO 200–800", "2,000", "PO, syrup, short-acting IM, IV, rectal suppository"],
              ["Fluphenazine", "1A2", "PO 14–16 h; LAI 14 days", "2", "2.5–10 divided", "1–5 divided; LAI 12.5–25 every 2–4 wk", "40", "PO, liquid, LAI"],
              ["Haloperidol", "3A4", "PO 18 h; LAI 3 wk", "2", "PO 1–2; IM 2–5 every 4–8 h", "PO 2–10; LAI 10–15× oral dose every 4 wk", "PO 60; LAI 100", "PO, liquid, short-acting IM, LAI (first dose 10–20× oral, up to 100 mg)"],
              ["Perphenazine", "2D6", "9–12 h", "10", "Inpatient 8–16; outpatient 4–8, divided", "8–32", "64", "PO"]
            ], note: "LAI, long-acting injectable; IR/XR, immediate/extended release; N/A, not available. Source in the book: package inserts. Confirm against current labeling before prescribing." }
          ]
        },
        {
          id: "s-maintenance",
          title: "Maintenance, relapse prevention and long-acting injectables",
          blocks: [
            { type: "p", text: "In the **stable or maintenance phase** the illness is in relative remission with minimal psychotic symptoms. The goals are to **prevent relapse** and **improve function**. Newer drugs, with much lower TD risk, have eased one of the main worries about long-term treatment." },
            { type: "table", caption: "One-year relapse rates", head: ["Group", "Relapse within 1 year"], rows: [
              ["Stable patients maintained on medication", "16–23%"],
              ["Stable patients off medication", "53–72%"]
            ] },
            { type: "list", title: "How long to treat", items: [
              "**First episode**: maintain for **at least 1 year**. Relapse risk over the next 5 years remains high, and some experts consider 1 year inadequate, especially for patients working or studying who have much to lose.",
              "**Two or more episodes**: most experts recommend considering **indefinite** treatment."
            ] },
            { type: "h", text: "Nonadherence and long-acting injectables (LAIs)" },
            { type: "p", text: "Nonadherence is very common: an estimated **40–50 percent** of patients stop within **1 or 2 years**. LAIs were developed for patients likely to stop daily oral medication. Despite some controversy, the weight of evidence suggests depot formulations **improve adherence and reduce relapse**, particularly in real-world settings. **Oral supplementation is needed when starting** an LAI while plasma levels rise." },
            { type: "list", title: "Available LAIs named in the chapter", cols: true, items: ["Fluphenazine", "Haloperidol", "Risperidone", "Paliperidone", "Aripiprazole", "Olanzapine"] },
            { type: "list", title: "Advantages of LAIs", items: [
              "You **know immediately when a dose is missed** and have time to intervene before the drug effect wears off.",
              "**Less day-to-day variation** in blood levels makes it easier to find the minimum effective dose.",
              "Many patients **prefer** it to managing a daily pill schedule."
            ] }
          ]
        },
        {
          id: "s-resistance",
          title: "Poor response, treatment resistance and somatic treatments",
          blocks: [
            { type: "p", text: "About **60 percent** of acutely ill patients improve to full remission or mild symptoms on an antipsychotic. The other **40 percent** improve but keep varying positive symptoms that resist medication. Think in **degrees of response** rather than responders and nonresponders: some patients need long-term institutional care, while others have most psychosis suppressed but keep persistent hallucinations or delusions." },
            { type: "steps", title: "Working through a poor response", items: [
              ["Watch the first two weeks", "In a meta-analysis, patients with **no response at all by week 2** were less likely to benefit; a change may be the best option."],
              ["Confirm an adequate trial", "**4 to 6 weeks at an adequate dose** is reasonable for most patients. Those with even mild improvement may keep improving steadily for **3 to 6 months**."],
              ["Consider a plasma level", "Accepted levels mostly apply to first-generation drugs. A **very low level** suggests **nonadherence or partial adherence** (most common), **rapid metabolism** or **poor absorption**, and raising the dose may help. A **high level** should prompt you to ask whether side effects are blocking response."],
              ["Prefer switching to pushing the dose", "Doses above the usual range rarely improve response; **changing drugs is preferable**."],
              ["Move to clozapine", "After at least two failed trials, clozapine has the clearest advantage in severe and previously poorly responsive illness."]
            ] },
            { type: "p", text: "Adjunctive medications have been tried with **mixed success**: lamotrigine, mirtazapine, donepezil, D-alanine, D-serine, estradiol, memantine and allopurinol." },
            { type: "h", text: "Other somatic treatments" },
            { type: "list", items: [
              "**ECT**: in recent-onset patients it is about **as effective as antipsychotics** and **more effective than psychotherapy**. Adding ECT to antipsychotics is more effective than antipsychotics alone. **Continue antipsychotics during and after ECT.**",
              "**Neuromodulation**: early studies suggest **TMS** or **tDCS** may help **hallucinations or negative symptoms**.",
              "**Psychosurgery** is no longer considered appropriate, though some centers use it experimentally for severe, intractable cases."
            ] }
          ]
        },
        {
          id: "s-psychosocial",
          title: "Psychosocial treatments",
          blocks: [
            { type: "p", text: "Psychotherapy is an essential part of treatment. Patients who receive it along with medication show **better adherence, fewer negative symptoms and better overall functioning**. No single approach has been shown to be superior, but effective approaches are **structured** rather than open-ended and exploratory. The aim is to build the social, vocational and practical skills needed for independent living." },
            { type: "table", wide: true, caption: "Psychosocial interventions at a glance", head: ["Intervention", "What it does", "Evidence and practical points"], rows: [
              ["Cognitive behavioral therapy", "Targets cognitive distortions, distractibility and errors of judgment using **cognitive restructuring, self-monitoring and graded coping skills**", "Some reports of reduced delusions and hallucinations. Best for patients with **some insight**, usually **after the acute episode**. Recommended **with** antipsychotics"],
              ["Social skills training", "Works on poor eye contact, response delays, odd facial expressions, poor spontaneity and misreading others’ emotions using video, role play and homework", "**Reduces relapse and hospitalization**"],
              ["Group therapy", "Focuses on real-life plans, problems and relationships", "Improves social function, reduces negative symptoms and social isolation, builds cohesion and improves reality testing. **Supportive groups help most**; insight-oriented interpretation is doubtful"],
              ["Family therapy", "Psychoeducation and problem-solving training", "**Reduces relapse and rehospitalization.** After discharge, a brief, **intensive (even daily)** course focused on the immediate situation helps"],
              ["Case management", "One person coordinates the many professionals involved, keeps appointments on track, may make home visits", "Success depends on the manager’s training; keep caseloads **under 20**"],
              ["Assertive Community Treatment (ACT)", "A multidisciplinary team delivers all services where and when needed, **24 hours a day, 7 days a week**: home medication delivery, health monitoring, in vivo social skills, family contact", "Developed in **Madison, Wisconsin, in the 1970s**. Staff ratio about **1:12**. **Reduces rehospitalization** but is labor-intensive and expensive. Intensive case management works best when it incorporates ACT"],
              ["Individual psychotherapy", "A relationship the patient experiences as safe", "Effects add to medication. Think in **decades**, not sessions"],
              ["Vocational rehabilitation", "Sheltered workshops, job clubs, part-time or transitional work; **supported employment** aims at competitive jobs", "Supported employment has strong data for finding and keeping jobs, less need for treatment and better self-esteem, but less consistent effects on overall illness outcome"],
              ["Art therapy", "An outlet for constant imagery", "Helps patients communicate and share a frightening inner world"],
              ["Cognitive remediation", "Computer-based exercises to improve cognition, including working memory", "Can improve social functioning; **medium effect size** in one meta-analysis"],
              ["NAMI and similar groups", "Support groups for patients, families and friends", "Practical help navigating care; anti-stigma and advocacy work"]
            ] },
            { type: "h", text: "Working with families" },
            { type: "p", text: "Families often push a relative to resume normal activities too quickly, out of ignorance or denial. Without being discouraging, help them understand the illness and **talk openly about the psychotic episode and what led up to it**. Ignoring the episode is common, increases shame and wastes the chance to understand it while it is fresh. Later sessions can target long-term stress reduction, coping and gradual reintegration. **Control the emotional intensity of sessions**: excessive expressed emotion can damage recovery." },
            { type: "h", text: "The therapeutic relationship" },
            { type: "p", text: "The **strength of the therapeutic alliance** is probably the best predictor of outcome. Patients who form a positive alliance tend to stay in therapy, keep taking medication and have good outcomes at 2 years. Patients with schizophrenia are often desperately lonely yet defend against closeness, becoming suspicious, anxious, hostile or regressed when someone draws near." },
            { type: "callout", kind: "pearl", title: "How to be with the patient", text: "Respect distance and privacy. Offer **simple directness, patience, sincerity and sensitivity to social conventions** rather than premature informality or condescending use of first names. **Exaggerated warmth or professions of friendship** are likely to be read as bribery, manipulation or exploitation. Stay flexible within a professional frame." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      title: "Understand the disorder",
      sections: [
        {
          id: "s-epi",
          title: "Epidemiology and risk factors",
          blocks: [
            { type: "table", caption: "Key numbers", head: ["Measure", "Figure"], rows: [
              ["Worldwide lifetime prevalence of schizophrenia", "About **0.7%**"],
              ["Mean global lifetime prevalence of psychotic disorders (meta-analysis, 1990–2015)", "**7.49 per 1,000**, with about a five-fold range between studies, largely from methodology"],
              ["US population treated for schizophrenia in a year", "About **0.05%**"],
              ["Patients who ever obtain treatment", "Perhaps only **half**"],
              ["Patients in treatment aged 15–55", "About **90%**"]
            ] },
            { type: "h", text: "Sex and age" },
            { type: "list", items: [
              "**Equally prevalent** in men and women, but onset and course differ.",
              "Onset is **earlier in men**. More than half of male patients but only one third of female patients are hospitalized **before age 25**.",
              "Men may be more impaired by **negative symptoms**; women tend to have **better premorbid social function** and, overall, **better outcomes**.",
              "US peak onset: **10–25 years in men**, **25–35 years in women**.",
              "Women show a **bimodal** distribution with a second peak in middle age; about **3–10 percent** of women have onset **after 40**.",
              "Onset **before 10 or after 60** is rare. **Late-onset** schizophrenia means onset **after 45**."
            ] },
            { type: "h", text: "Other risk factors" },
            { type: "defs", items: [
              ["Season of birth", "More likely born in **winter or early spring**: January to April in the Northern Hemisphere, July to September in the Southern Hemisphere."],
              ["Maternal and obstetric", "Delivery complications, maternal malnutrition and other illness during pregnancy."],
              ["Early life", "Childhood trauma, social isolation and other deprivation."],
              ["Urban upbringing", "Being **raised** in a city matters more than being born in one, and the effect may be **dose-related**: the bigger the city, the higher the risk."],
              ["Cannabis", "May raise risk by as much as **40 percent**, especially in **heavy users**."],
              ["Cognitive deficits", "Poor verbal learning and memory and slower processing speed can **predict impending psychosis**."],
              ["Paternal age", "Among patients with no family history, those born to fathers **over 60** were vulnerable, presumably from epigenetic damage during spermatogenesis."]
            ] },
            { type: "p", text: "Epidemiology of the related disorders is covered with each diagnosis: schizoaffective disorder perhaps 0.5–0.8 percent; schizophreniform about half as common as schizophrenia and more common in young men; brief psychotic disorder more common in young women." },
            { type: "p", text: "Table 5-11 lists prevalence studies from 1931 to 2007 across Europe, Asia, Africa, Australia, Micronesia and the United States, with rates mostly between about 1.4 and 23 per 1,000 depending on population, method and which psychoses were counted." }
          ]
        },
        {
          id: "s-brain",
          title: "Brain structure",
          blocks: [
            { type: "p", text: "Nineteenth-century neuropathologists found no lesion and called schizophrenia a functional disorder. Better tools have since revealed a likely neuropathologic basis." },
            { type: "table", wide: true, caption: "Structural findings", head: ["Region", "Findings"], rows: [
              ["Ventricles and cortex", "CT consistently shows **lateral and third ventricular enlargement** and some reduction in cortical volume. **Reduced gray matter** is present in the earliest stages. Whether changes progress is unresolved."],
              ["Symmetry", "**Reduced symmetry** in temporal, frontal and occipital lobes, thought to arise in fetal life from disrupted lateralization."],
              ["Limbic system", "Smaller **amygdala, hippocampus and parahippocampal gyrus** in postmortem and MRI studies. The hippocampus is also functionally abnormal (disturbed **glutamate** transmission) and its neurons can be disorganized."],
              ["Prefrontal cortex", "Anatomic and functional abnormalities; several symptoms resemble those after prefrontal lobotomy or in frontal lobe syndromes."],
              ["Thalamus", "Volume loss or neuronal loss in some subnuclei, notably fewer neurons in the **medial dorsal nucleus**, which connects reciprocally with prefrontal cortex. Total neurons, oligodendrocytes and astrocytes reduced **30–45 percent**; not explained by antipsychotics."],
              ["Basal ganglia and cerebellum", "Implicated because many unmedicated patients have odd movements (awkward gait, grimacing, stereotypies) and because basal ganglia diseases such as **Huntington and Parkinson disease** are the movement disorders most associated with psychosis. Cell-loss findings are inconsistent. **D2 receptors are increased** in caudate, putamen and nucleus accumbens, possibly from medication."]
            ] }
          ]
        },
        {
          id: "s-physiology",
          title: "Brain function and electrophysiology",
          blocks: [
            { type: "list", title: "Functional imaging", items: [
              "PET: **increased dopamine in the ventral striatum** and **reduced dopamine in frontal cortex**.",
              "MR spectroscopy: **increased glutamate** in prefrontal and medial temporal areas; **lower N-acetyl aspartate** (a neuronal marker) in hippocampus and frontal lobes."
            ] },
            { type: "list", title: "EEG", items: [
              "Many patients have abnormal records, with increased sensitivity to activation (frequent spikes after sleep deprivation), **decreased alpha**, **increased theta and delta**, possibly more epileptiform activity and more **left-sided** abnormalities.",
              "Patients cannot filter out irrelevant sounds and are very sensitive to background noise. The resulting flood of sound impairs concentration and may contribute to **auditory hallucinations**; this may have a genetic basis."
            ] },
            { type: "defs", title: "Evoked potentials", items: [
              ["P300", "Large positive wave about **300 ms** after a stimulus is detected, probably generated in **medial temporal limbic** structures. **Smaller in schizophrenia** and abnormal in high-risk children of affected parents. Whether it is a state or trait marker is debated."],
              ["N100", "Negative wave about 100 ms after a stimulus; abnormal in schizophrenia."],
              ["Contingent negative variation", "Slow negative shift after a warning stimulus; abnormal in schizophrenia."],
              ["Interpretation", "Patients seem **oversensitive to sensory input (larger early potentials)** and compensate by **blunting higher cortical processing (smaller late potentials)**."]
            ] },
            { type: "defs", title: "Trait-like markers", items: [
              ["Eye movement dysfunction", "Poor smooth pursuit and disinhibited saccades. Independent of drugs and clinical state, and present in first-degree relatives, so possibly a **trait marker**. Seen in **50–85%** of patients, about **25%** of other psychiatric patients and **under 10%** of controls."],
              ["Prepulse inhibition deficit", "A weak prestimulus normally dampens the startle to a stronger one (sensorimotor gating). Patients and their relatives lack this inhibition. Gating is regulated by **dopamine**, and PPI is a likely **endophenotype**."]
            ] }
          ]
        },
        {
          id: "s-neurochem",
          title: "Neurotransmitters, immunity and endocrinology",
          blocks: [
            { type: "list", title: "Neurotransmitters and receptors", items: [
              "**Excess dopamine release** tracks the severity of **positive symptoms**. PET shows increased **subcortical synaptic dopamine content and synthesis capacity**, localized to the **associative striatum**, linked to positive symptoms and to treatment response.",
              "These dopamine abnormalities **precede illness onset** and occur in people at high risk, so they are not simply a result of symptoms.",
              "**Increased glutamate** and **decreased GABA**; some patients lose **GABAergic neurons in the hippocampus**.",
              "Postmortem: **decreased muscarinic and nicotinic receptors** in caudate-putamen, hippocampus and prefrontal regions, systems involved in cognition.",
              "**NMDA receptors appear hypofunctional**, as a result of glutamate and dopamine excess."
            ] },
            { type: "p", text: "**Immune findings** include decreased T-cell interleukin-2 production, fewer and less responsive peripheral lymphocytes, abnormal cellular and humoral reactivity to neurons, and **antibrain antibodies**, compatible with a neurotoxic virus or an autoimmune process. Autoimmune illnesses such as **lupus** and immune encephalitides such as **anti-NMDA receptor encephalitis** can cause psychosis resembling early schizophrenia." },
            { type: "list", title: "Endocrine findings", items: [
              "The **dexamethasone suppression test** is abnormal in some subgroups but has no practical or predictive value.",
              "Possibly decreased **LH and FSH**, perhaps related to age of onset and illness length.",
              "Possibly linked to **negative symptoms**: blunted prolactin and growth hormone release after GnRH or TRH stimulation, and blunted growth hormone release after **apomorphine**."
            ] },
            { type: "h", text: "Infection and environment" },
            { type: "p", text: "Evidence for infection is mostly indirect: winter birth excess (though diet and other explanations exist), more schizophrenia after **prenatal influenza exposure**, particularly in the **second trimester**, more minor physical anomalies at birth, more pregnancy and birth complications, geographic clusters of adult cases and seasonal hospitalizations. Other prenatal and perinatal factors (birth complications, trauma after delivery, nutritional deficiency) add small but significant risk." }
          ]
        },
        {
          id: "s-genetics",
          title: "Genetics",
          blocks: [
            { type: "table", caption: "Inheritance at a glance", head: ["Finding", "Figure or detail"], rows: [
              ["Heritability", "About **60–80%**"],
              ["Monozygotic twin concordance", "About **50%**"],
              ["Compared with dizygotic twins and other first-degree relatives", "MZ rate is **4–5 times** higher"],
              ["Second- and third-degree relatives", "Risk falls with decreasing genetic loading"],
              ["Adoption studies", "Higher rates in the **biologic** relatives of an adopted-away patient than in the adoptive relatives"]
            ] },
            { type: "p", text: "Because identical twins are only about 50 percent concordant, genetic vulnerability does not make schizophrenia inevitable. A **vulnerability–liability (diathesis) model** proposes that biologic or psychosocial environmental factors prevent or trigger illness in vulnerable people." },
            { type: "list", title: "Molecular findings", items: [
              "The mode of transmission is unknown; many genes are implicated. Methods include comparative genomic hybridization, SNP chips, next-generation sequencing, GWAS and CRISPR/Cas9 editing. Many hits are probably chance findings.",
              "Best candidates involve **synaptic transmission**: monoamine receptors and glutamate release and signaling.",
              "**COMT** polymorphisms, which affect dopamine metabolism, have been implicated.",
              "**Copy number variants** may account for **2–5 percent** of cases: rare, highly penetrant variants in synaptic and neurodevelopmental genes. Example: **22q11.2 microdeletion** (velocardiofacial or DiGeorge syndrome), about **1 in 4,000** live births.",
              "**Most risk comes from hundreds of common alleles of small effect.** GWAS loci include **DRD** dopamine receptor genes, glutamate, calcium signaling and dendritic spine genes.",
              "Strongest association: the **major histocompatibility complex (MHC)**, especially **C4 alleles** involved in **synaptic pruning**, which may explain why symptoms emerge in adolescence and early adulthood.",
              "Many implicated sequences do not code for proteins but regulate transcription and epigenetics.",
              "Conflicting findings reflect heterogeneity; researchers use measurable **endophenotypes** such as prepulse inhibition."
            ] }
          ]
        },
        {
          id: "s-etiology",
          title: "Biologic theories of etiology",
          blocks: [
            { type: "h", text: "The dopamine hypothesis" },
            { type: "p", text: "In its simplest form, schizophrenia results from **too much dopaminergic activity**. It grew from two observations: the potency of antipsychotics correlates with their **D2 receptor antagonism**, and drugs that increase dopamine, notably **cocaine and amphetamine, are psychotomimetic**. Abnormal dopamine-regulated functions such as prepulse inhibition add support. The basic theory does not say whether the problem is too much dopamine, too many receptors, oversensitive receptors or a mix." },
            { type: "p", text: "Older models placed positive symptoms in the **mesolimbic** pathway (tumors and seizures there mimic schizophrenia; amphetamine acts on the nucleus accumbens). Newer imaging places the largest differences in the **dorsal (associative) striatum** and its projections, in patients and in high-risk individuals. This integrative region shapes **habit formation**, suggesting psychosis may be a rigid, habitual way of thinking that cannot consider alternative explanations." },
            { type: "defs", title: "Other neurotransmitter theories", items: [
              ["Serotonin", "Serotonin excess may cause both positive and negative symptoms; supported by the strong 5-HT antagonism of clozapine and other SGAs and clozapine’s efficacy in chronic patients."],
              ["GABA", "Loss of inhibitory GABAergic neurons in the hippocampus could release dopaminergic neurons from inhibition."],
              ["Neuropeptides", "Substance P and neurotensin co-localize with catecholamines and indoleamines and could alter their firing."],
              ["Glutamate", "**Phencyclidine (PCP)**, a glutamate antagonist, produces an acute schizophrenia-like syndrome. Hypotheses include hyperactivity, hypoactivity and glutamate neurotoxicity."],
              ["Acetylcholine and nicotine", "Deficits in muscarinic and nicotinic receptors may contribute to cognitive impairment."]
            ] },
            { type: "h", text: "Circuits: the disconnection hypothesis" },
            { type: "p", text: "Thinking has shifted from discrete regions to **neural circuits**. Frontal abnormalities may arise from disease in connected basal ganglia or cerebellum. An early developmental lesion of dopaminergic tracts to prefrontal cortex could disturb prefrontal and limbic function and produce positive, negative and cognitive symptoms." },
            { type: "table", caption: "Circuit and symptom", head: ["Circuit", "Associated symptoms"], rows: [
              ["Anterior cingulate–basal ganglia–thalamocortical", "**Positive** psychotic symptoms"],
              ["Dorsolateral prefrontal", "Primary, enduring **negative (deficit)** symptoms"],
              ["Working memory circuit (prefrontal, cingulate, inferior parietal cortex, hippocampus)", "Working memory deficits; involved in **auditory hallucinations** on functional imaging"]
            ] },
            { type: "h", text: "Viruses, neurotoxicity and neuroinflammation" },
            { type: "p", text: "Careful searches for neurotoxic viruses have mostly been negative, which weakens the circumstantial evidence. Autoimmune brain antibodies have some support but probably explain only a subset. The **neurotoxicity hypothesis** holds that psychosis itself, through stress and cortisol, plus exogenous toxins such as cannabis and alcohol, and perhaps antipsychotics, damages the brain; the **lack of evidence for neurodegeneration** argues against it. **Neuroinflammation** has growing support: overlap with autoimmune disease in clinical, epidemiologic and genetic features, immune activation in a subset of patients, and GWAS hits in immune and pruning genes." },
            { type: "h", text: "Schizophrenia as a neurodevelopmental disorder" },
            { type: "list", items: [
              "Many patients had motor and cognitive problems as children.",
              "Obstetric complications are risk factors.",
              "Cognitive deficits often do not worsen much after onset.",
              "**No gliosis** and no consistent evidence of neurodegeneration, implying failed growth rather than cell death.",
              "Many risk genes are most active **before birth**; some may make the placenta more sensitive to stress.",
              "**C4-mediated synaptic pruning** in adolescence and early adulthood may explain the age of onset."
            ] },
            { type: "callout", kind: "exam", title: "Why antipsychotics only partly work", text: "Symptoms likely arise from dysfunction in several networks: sensory networks generate hallucinations, **corticostriatal** dopamine dysfunction removes insight and produces delusional beliefs about them, and other circuits shape the emotional reaction. Antipsychotics normalize **associative striatal dopamine** and so reduce psychosis, but they act on that one circuit and do little for **negative and cognitive** symptoms." }
          ]
        },
        {
          id: "s-psych-theories",
          title: "Psychological and psychosocial theories",
          blocks: [
            { type: "p", text: "If schizophrenia is a brain disease, its course should be affected by psychosocial stress, much as myocardial infarction or diabetes are. Clinicians should consider both biologic and psychosocial factors, and remember that each patient has a unique psychology." },
            { type: "h", text: "Family dynamics" },
            { type: "p", text: "In a classic British study, 4-year-olds rated as having a poor mother–child relationship had a **six-fold** higher risk of schizophrenia, though it is unclear which came first. Adopted-away children were more likely to develop schizophrenia if raised in adverse circumstances, and children of mothers with schizophrenia raised on a **kibbutz** were more likely to develop it than those raised at home. Still, **no well-controlled evidence shows that a specific family pattern causes schizophrenia**. Do not overlook pathologic family behavior that adds stress for a vulnerable patient." },
            { type: "defs", title: "Theorists to know", items: [
              ["Sigmund Freud", "Developmental fixations early in life produce ego defects that contribute to symptoms."],
              ["Margaret Mahler and Paul Federn", "Distortions in the mother–infant relationship."],
              ["Harry Stack Sullivan", "A disturbance of interpersonal relatedness; schizophrenia as an adaptive way to avoid panic, terror and disintegration of the self, arising from cumulative developmental trauma."],
              ["Object relations deficit model", "Neurodevelopmental errors distort the filters through which relationships are taken in, so introjects are incomplete and threatening. The patient avoids relationships, loses corrective experiences, and builds an alternative reality through psychosis. It explains positive and negative symptoms and suggests the therapist’s task: offer positive experiences the patient can introject."],
              ["Learning theory", "Children learn irrational reactions and thinking by imitating emotionally troubled parents; poor relationships reflect poor childhood models."]
            ] },
            { type: "callout", kind: "pearl", text: "Every psychodynamic approach assumes **psychotic symptoms have meaning**: grandiosity may follow an injury to self-esteem, and closeness may feel terrifying. Patients who **seal over** a psychotic episode do not benefit from exploratory therapy, while those who can **integrate** the experience may benefit from some insight-oriented work. Compassion and sanctuary are a cornerstone of any plan." }
          ]
        }
      ]
    }
  ]
});
