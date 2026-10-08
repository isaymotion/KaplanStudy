/*
 * Diagnostic decision helpers. Each helper is a small decision tree.
 * Node options point to another node id, or to "r:<resultId>".
 * Every option has a `note` that becomes one line of the reasoning trail.
 * Content follows Kaplan & Sadock's Synopsis, 12th ed. (each helper names its chapter).
 */
KS.helpers = (KS.helpers || []).concat([
  {
    id: "psychosis",
    chapter: "ch05",
    title: "Which psychotic disorder?",
    summary: "Answer a few questions about cause, mood, symptoms and duration to reach the most likely DSM-5 psychotic disorder, with the reasoning shown.",
    caution: "A teaching aid built from Chapter 5, not a substitute for a full evaluation. The diagnosis always rests on the complete history and mental status examination.",
    start: "cause",
    nodes: {
      cause: {
        q: "Could a substance, medication or medical condition explain the symptoms?",
        help: "Red flags in the chapter: unusual or rare symptoms, any change in level of consciousness, disorientation, and tactile, olfactory or gustatory hallucinations. Table 5-8 lists neurodegenerative, CNS, vascular, infectious, metabolic, endocrine, vitamin, medication, substance and toxin causes.",
        options: [
          { label: "Yes, or it has not been ruled out yet", to: "r:secondary", note: "A medical, medication or substance cause is possible or not yet excluded." },
          { label: "No, the workup is reassuring", to: "culture", note: "Medical, medication and substance causes have been reasonably excluded." }
        ]
      },
      culture: {
        q: "Could the experience be a culturally or religiously sanctioned response?",
        help: "Customs of a religious group can look strange to outsiders yet be typical within it. A culturally sanctioned response is an explicit exclusion for brief psychotic disorder.",
        options: [
          { label: "Yes, it is accepted within the patient’s culture or faith", to: "r:culture", note: "The experience is sanctioned within the patient’s cultural or religious group." },
          { label: "No", to: "shared", note: "The experience is not explained by cultural or religious norms." }
        ]
      },
      shared: {
        q: "Did the delusion arise through a close relationship with someone who already held it?",
        help: "Shared psychosis usually involves two people closely associated for a long time, often living together in relative isolation.",
        options: [
          { label: "Yes, a dominant partner or relative held the belief first", to: "r:shared", note: "The delusion was transferred from a closely associated primary case." },
          { label: "No", to: "mood", note: "The delusion did not originate with a closely associated person." }
        ]
      },
      mood: {
        q: "How do mood episodes relate to the psychosis?",
        help: "Think about the whole illness, not just today. Time the mood episodes and the psychotic periods as precisely as you can.",
        options: [
          { label: "No major depressive or manic episodes, or only brief mood symptoms", to: "symptoms", note: "There are no mood episodes that account for the psychosis." },
          { label: "Psychosis occurs only during depressive or manic episodes", to: "r:mood", note: "Psychotic symptoms appear only within mood episodes." },
          { label: "Mood episodes are present most of the illness, and psychosis has also persisted ≥2 weeks without mood symptoms", to: "satype", note: "Mood episodes span the majority of the illness, plus at least 2 weeks of psychosis without mood symptoms." },
          { label: "Mood episodes occurred but are brief compared with the psychotic illness", to: "symptoms", note: "Mood episodes are brief relative to the psychosis, so they do not define the diagnosis." }
        ]
      },
      satype: {
        q: "Has the patient ever had a manic episode?",
        help: "DSM-5 schizoaffective subtypes follow the mood episodes: bipolar type if a manic episode is part of the presentation, depressive type if only major depressive episodes.",
        options: [
          { label: "Yes", to: "r:sa-bipolar", note: "A manic episode has occurred." },
          { label: "No, only major depressive episodes", to: "r:sa-depressive", note: "Only major depressive episodes have occurred." }
        ]
      },
      symptoms: {
        q: "Which best describes the psychotic symptoms?",
        help: "DSM-5 criterion symptoms: delusions, hallucinations, disorganized speech, disorganized behavior or catatonia, and negative symptoms.",
        options: [
          { label: "Delusions only; hallucinations absent or not prominent; function largely preserved", to: "deldur", note: "Delusions without prominent hallucinations, and function largely intact." },
          { label: "Two or more criterion symptoms, at least one being delusions, hallucinations or disorganized speech", to: "fulldur", note: "Two or more criterion symptoms, including at least one of delusions, hallucinations or disorganized speech." },
          { label: "Only one of: hallucinations or disorganized speech", to: "onedur", note: "A single major psychotic symptom." },
          { label: "Persistent symptoms that fit no specific pattern, or very minor or transient symptoms", to: "r:other", note: "The symptoms do not fit a specific psychotic disorder." }
        ]
      },
      deldur: {
        q: "How long have the delusions lasted?",
        help: "Delusional disorder needs at least 1 month. Shorter delusional states are assessed as brief psychotic disorder.",
        options: [
          { label: "1 month or longer", to: "r:delusional", note: "The delusions have lasted at least 1 month." },
          { label: "At least 1 day but less than 1 month, with full recovery", to: "stressor", note: "The delusional state lasted at least 1 day and under 1 month, with full return to baseline." },
          { label: "Less than 1 day", to: "r:toobrief", note: "The symptoms lasted under 1 day." }
        ]
      },
      onedur: {
        q: "How long have the symptoms lasted?",
        help: "Brief psychotic disorder needs only one of delusions, hallucinations or disorganized speech. Schizophreniform disorder and schizophrenia need two or more criterion symptoms.",
        options: [
          { label: "At least 1 day but less than 1 month, with full recovery", to: "stressor", note: "Duration at least 1 day and under 1 month, with full return to baseline." },
          { label: "Less than 1 day", to: "r:toobrief", note: "The symptoms lasted under 1 day." },
          { label: "1 month or longer", to: "r:other", note: "A single persisting symptom, such as hallucinations alone, for 1 month or more." }
        ]
      },
      fulldur: {
        q: "What is the total duration of the illness, including prodromal and residual periods?",
        help: "DSM-5 durations: brief psychotic disorder ≥1 day and <1 month; schizophreniform ≥1 and <6 months; schizophrenia ≥6 months. (ICD-10 requires only 1 month for schizophrenia.)",
        options: [
          { label: "Less than 1 day", to: "r:toobrief", note: "Total duration under 1 day." },
          { label: "At least 1 day but less than 1 month, with full recovery", to: "stressor", note: "Total duration at least 1 day and under 1 month, with full return to baseline." },
          { label: "At least 1 month but less than 6 months", to: "sfprog", note: "Total duration at least 1 month and under 6 months." },
          { label: "6 months or longer", to: "r:schizophrenia", note: "Total duration of 6 months or more, with functional impairment." }
        ]
      },
      stressor: {
        q: "What surrounded the onset?",
        help: "Brief psychotic disorder specifiers: with marked stressors, without marked stressors, and with peripartum onset (during pregnancy or within 4 weeks after delivery).",
        options: [
          { label: "During pregnancy or within 4 weeks after delivery", to: "r:brief-peri", note: "Onset during pregnancy or within 4 weeks of delivery." },
          { label: "It followed one or more marked stressors", to: "r:brief-stress", note: "Onset followed marked stressors." },
          { label: "No marked stressor", to: "r:brief-nostress", note: "No marked stressor preceded the onset." }
        ]
      },
      sfprog: {
        q: "How many good prognostic features are present?",
        help: "Psychotic symptoms within 4 weeks of the first behavior change; confusion; good premorbid functioning; no negative symptoms.",
        options: [
          { label: "Two or more", to: "r:sf-good", note: "Two or more good prognostic features are present." },
          { label: "Fewer than two", to: "r:sf-poor", note: "Fewer than two good prognostic features are present." },
          { label: "Not yet known (episode ongoing)", to: "r:sf-provisional", note: "The episode is ongoing, so recovery and prognostic features are not yet known." }
        ]
      }
    },
    results: {
      "secondary": {
        label: "Before anything else",
        dx: "Rule out a secondary psychosis first",
        line: "Psychotic disorder due to another medical condition, catatonic disorder due to another medical condition, or substance-induced psychotic disorder.",
        points: [
          "Pursue a medical cause aggressively when symptoms are unusual or rare or consciousness fluctuates.",
          "Take a complete family history of medical, neurologic and psychiatric disorders.",
          "A prior diagnosis of schizophrenia does not protect against a brain tumor or other new cause.",
          "Serologic and other tests mainly rule out causes such as syphilis or anti-NMDA receptor encephalitis."
        ],
        link: { ch: "ch05", sec: "s-ddx", label: "Differential diagnosis" }
      },
      "culture": {
        label: "Conclusion",
        dx: "Not a psychotic disorder",
        line: "A culturally or religiously sanctioned experience is not diagnosed as psychosis.",
        points: [
          "Interpret findings against the patient’s education, intelligence and cultural background.",
          "Reassess if the experience goes beyond what the patient’s group accepts, causes impairment, or is accompanied by other psychotic symptoms."
        ],
        link: { ch: "ch05", sec: "s-presentation", label: "Clinical presentation" }
      },
      "shared": {
        dx: "Shared psychosis (folie à deux)",
        line: "Delusions transferred from a dominant primary case to a more suggestible secondary case.",
        points: [
          "Most common pairs: sister–sister, husband–wife, mother–child; almost always within one family.",
          "Associated factors: old age, low intelligence, sensory impairment, cerebrovascular disease, alcohol abuse.",
          "Separation may lead the secondary person to give up the delusion, though not always.",
          "Assess the primary case separately; they are often chronically ill."
        ],
        link: { ch: "ch05", sec: "s-other", label: "Shared psychosis" }
      },
      "mood": {
        dx: "Mood disorder with psychotic features",
        line: "Major depressive disorder or bipolar disorder with psychotic features, not a primary psychotic disorder.",
        points: [
          "Delusions in depression are typically mood-congruent: guilt, self-deprecation, deserved punishment, incurable illness.",
          "Delusions in mania are usually mood-congruent and grandiose.",
          "Psychotic symptoms resolve completely when the mood episode resolves.",
          "Do not mistake withdrawal and poor self-care in severe depression for negative symptoms."
        ],
        link: { ch: "ch05", sec: "s-ddx", label: "Mood disorders in the differential" }
      },
      "sa-bipolar": {
        dx: "Schizoaffective disorder, bipolar type",
        line: "Mood episodes for most of the illness, including a manic episode, plus at least 2 weeks of psychosis without mood symptoms.",
        points: [
          "Confirm the mood episodes meet full manic or depressive criteria and time each one.",
          "Course is intermediate: better than schizophrenia, worse than bipolar or major depressive disorder.",
          "The bipolar type may be more common in younger patients.",
          "Add “with catatonia” if three or more catatonic features are present."
        ],
        link: { ch: "ch05", sec: "s-schizoaffective", label: "Schizoaffective disorder" }
      },
      "sa-depressive": {
        dx: "Schizoaffective disorder, depressive type",
        line: "Major depressive episodes for most of the illness plus at least 2 weeks of psychosis without mood symptoms.",
        points: [
          "Confirm the depressive episodes meet full criteria and time each one.",
          "Women outnumber men in the depressive type; it is more common in older adults.",
          "Course is intermediate between schizophrenia and mood disorders.",
          "Add “with catatonia” if three or more catatonic features are present."
        ],
        link: { ch: "ch05", sec: "s-schizoaffective", label: "Schizoaffective disorder" }
      },
      "delusional": {
        dx: "Delusional disorder",
        line: "One or more delusions for at least 1 month, without marked functional impairment or prominent hallucinations.",
        points: [
          "Specify the type: persecutory, jealous, erotomanic, somatic, grandiose, mixed or unspecified. Persecutory and jealous are most common.",
          "Add “with bizarre content” if the belief is impossible or unrelated to reality.",
          "Prognosis is better for persecutory, somatic and erotomanic types than for grandiose and jealous types.",
          "Do not collude; build the alliance and treat the anxiety, low mood and insomnia the delusion causes."
        ],
        link: { ch: "ch05", sec: "s-delusional", label: "Delusional disorder" }
      },
      "toobrief": {
        label: "Conclusion",
        dx: "Too brief for a specific disorder",
        line: "Symptoms lasting under a day do not meet criteria for brief psychotic disorder.",
        points: [
          "Reconsider substance intoxication, medication effects and medical causes such as delirium or seizures.",
          "If symptoms recur or persist, reassess; an other specified psychotic disorder may fit."
        ],
        link: { ch: "ch05", sec: "s-other", label: "Other psychotic disorders" }
      },
      "brief-peri": {
        dx: "Brief psychotic disorder, with peripartum onset",
        line: "Sudden psychosis lasting at least 1 day and under 1 month, beginning during pregnancy or within 4 weeks after delivery, with full recovery.",
        points: [
          "Several features (confusion, impaired attention, memory gaps) can suggest delirium; complete a medical workup.",
          "Labile mood, confusion and impaired attention at onset are more typical of brief than of chronic psychoses.",
          "If symptoms persist beyond a month, revise the diagnosis.",
          "Add “with catatonia” if three or more catatonic features are present."
        ],
        link: { ch: "ch05", sec: "s-brief", label: "Brief psychotic disorder" }
      },
      "brief-stress": {
        dx: "Brief psychotic disorder, with marked stressors",
        line: "Sudden psychosis lasting at least 1 day and under 1 month after marked stressors, with full recovery.",
        points: [
          "More common in women and in people in their 20s and 30s; often seen after disasters or major cultural change, and in people with personality disorders.",
          "Rule out delirium and adverse drug reactions.",
          "Characteristic features: emotional volatility, bizarre behavior, screaming or muteness, impaired memory for recent events.",
          "If symptoms persist beyond a month, revise the diagnosis."
        ],
        link: { ch: "ch05", sec: "s-brief", label: "Brief psychotic disorder" }
      },
      "brief-nostress": {
        dx: "Brief psychotic disorder, without marked stressors",
        line: "Sudden psychosis lasting at least 1 day and under 1 month, without a marked stressor, with full recovery.",
        points: [
          "Rule out delirium and adverse drug reactions.",
          "Labile mood, confusion and impaired attention at onset are more typical of brief than of chronic psychoses.",
          "If symptoms persist beyond a month, revise the diagnosis.",
          "Add “with catatonia” if three or more catatonic features are present."
        ],
        link: { ch: "ch05", sec: "s-brief", label: "Brief psychotic disorder" }
      },
      "sf-good": {
        dx: "Schizophreniform disorder, with good prognostic features",
        line: "Schizophrenia-type symptoms lasting at least 1 month and under 6 months, with two or more good prognostic features.",
        points: [
          "Perhaps 60–80 percent later develop schizophrenia; those who do not have a better outcome.",
          "If total duration passes 6 months, reconsider schizophrenia.",
          "Negative symptoms, if they appear, are a poor prognostic sign.",
          "Add “with catatonia” if three or more catatonic features are present."
        ],
        link: { ch: "ch05", sec: "s-schizophreniform", label: "Schizophreniform disorder" }
      },
      "sf-poor": {
        dx: "Schizophreniform disorder, without good prognostic features",
        line: "Schizophrenia-type symptoms lasting at least 1 month and under 6 months, with fewer than two good prognostic features.",
        points: [
          "Perhaps 60–80 percent later develop schizophrenia; negative symptoms raise that likelihood.",
          "If total duration passes 6 months, reconsider schizophrenia.",
          "Add “with catatonia” if three or more catatonic features are present."
        ],
        link: { ch: "ch05", sec: "s-schizophreniform", label: "Schizophreniform disorder" }
      },
      "sf-provisional": {
        dx: "Schizophreniform disorder (provisional)",
        line: "Schizophrenia-type symptoms for at least 1 month and under 6 months while the episode is still ongoing.",
        points: [
          "Return to baseline is expected; follow the patient to confirm recovery.",
          "Reassess prognostic features: psychotic symptoms within 4 weeks of first behavior change, confusion, good premorbid function, no negative symptoms.",
          "If total duration passes 6 months, reconsider schizophrenia."
        ],
        link: { ch: "ch05", sec: "s-schizophreniform", label: "Schizophreniform disorder" }
      },
      "schizophrenia": {
        dx: "Schizophrenia",
        line: "Two or more criterion symptoms, at least one of delusions, hallucinations or disorganized speech, continuously present for 6 months or more, with functional impairment.",
        points: [
          "Add course specifiers: first or multiple episodes, currently acute, in partial or full remission; continuous; unspecified.",
          "Add “with catatonia” if three or more catatonic features are present.",
          "Screen for depression, suicide risk and substance use; review prognostic factors.",
          "Start treatment with a second-generation antipsychotic and integrate psychosocial care."
        ],
        link: { ch: "ch05", sec: "s-dx-schizophrenia", label: "Schizophrenia" }
      },
      "other": {
        dx: "Other specified or unspecified psychotic disorder",
        line: "Psychotic symptoms that do not fit a specific disorder.",
        points: [
          "Examples in the chapter: persistent auditory hallucinations with no other symptoms; delusions with significant mood symptoms; very transient symptoms; experiences the patient fully recognizes as unreal.",
          "Keep reassessing; the picture may evolve into a specific disorder."
        ],
        link: { ch: "ch05", sec: "s-other", label: "Other psychotic disorders" }
      }
    }
  }
  ,
  {
    id: "bipolar",
    chapter: "ch06",
    title: "Which bipolar disorder?",
    summary: "Work through cause, psychosis, the most severe elevated period, depressive episodes and course to reach bipolar I, bipolar II, cyclothymia or the main look-alikes.",
    caution: "A teaching aid built from Chapter 6, not a substitute for a full evaluation. Time every episode carefully and get collateral history: people who know the patient recognize the change even when strangers do not, and insight in mania is poor.",
    start: "cause",
    nodes: {
      cause: {
        q: "Could a medical condition or a substance explain the mood symptoms?",
        help: "Table 6-5 lists AIDS/HIV, delirium, hyperthyroidism and postencephalitic syndrome, and mania induced by antidepressants, steroids, amphetamines, cocaine, phencyclidine, alcohol, L-dopa, bronchodilators and decongestants. New manic symptoms in an older adult point strongly toward these causes.",
        options: [
          { label: "Yes, or it has not been ruled out yet", to: "r:secondary", note: "A medical or substance cause is possible or not yet excluded." },
          { label: "Elevated mood appeared only while taking an antidepressant", to: "r:ad-induced", note: "The elevated period occurred only during antidepressant treatment." },
          { label: "No, the workup is reassuring", to: "psychosis", note: "Medical and substance causes have been reasonably excluded." }
        ]
      },
      psychosis: {
        q: "Are there psychotic symptoms, and when do they occur?",
        help: "Delusions occur in 75 percent of manic patients and can be mood-incongruent or bizarre. What matters here is whether psychosis persists when mood symptoms are absent.",
        options: [
          { label: "No psychotic symptoms", to: "elevated", note: "No psychotic symptoms." },
          { label: "Psychotic symptoms only during mood episodes", to: "elevated", note: "Psychosis is confined to mood episodes, which fits a mood disorder with psychotic features." },
          { label: "Psychosis has persisted 2 weeks or more without mood symptoms", to: "r:psychotic", note: "Psychosis has persisted for at least 2 weeks without mood symptoms." }
        ]
      },
      elevated: {
        q: "What is the most severe elevated or irritable period the patient has ever had?",
        help: "Manic or hypomanic symptoms: grandiosity, decreased need for sleep, pressured speech, racing thoughts, distractibility, hyperactivity, impulsive or risky activity. Mania needs at least 3 of these (4 if the mood is only irritable).",
        options: [
          { label: "Mania: at least 1 week, with impaired functioning or hospitalization", to: "cycling1", note: "At least one manic episode: 1 week or more, enough to impair functioning or require hospitalization." },
          { label: "Hypomania: at least 4 days, noticeable change but no marked impairment or hospitalization", to: "distinct", note: "The worst elevated period was hypomanic: at least 4 days, without marked impairment or hospitalization." },
          { label: "Only brief or mild hypomanic symptoms, never a full hypomanic episode", to: "chronic", note: "Hypomanic symptoms have never reached a full hypomanic episode." },
          { label: "No elevated or irritable periods at all", to: "r:unipolar", note: "There has never been an elevated or irritable period." }
        ]
      },
      distinct: {
        q: "How do the elevated periods behave?",
        help: "Hypomania is easily confused with the mood lability of personality disorders, especially borderline personality disorder. Dramatic but normal moods, such as relief on emerging from a depression, can also mimic it.",
        options: [
          { label: "A distinct period of changed mood and activity that others noticed", to: "mde2", note: "The hypomania is a distinct episode, a clear change from the patient’s usual self." },
          { label: "Rapid, reactive mood shifts within hours, tied to relationships or stress", to: "r:personality", note: "The shifts are brief and reactive rather than sustained episodes." }
        ]
      },
      mde2: {
        q: "Has the patient ever had a major depressive episode (2 weeks or more, with marked distress or impairment)?",
        help: "Bipolar II needs both: at least one hypomanic episode and at least one major depressive episode.",
        options: [
          { label: "Yes", to: "cycling2", note: "At least one major depressive episode has occurred." },
          { label: "No", to: "r:hypo-only", note: "No major depressive episode has occurred." }
        ]
      },
      chronic: {
        q: "Have hypomanic and depressive symptoms come and gone for at least 2 years (1 year in children), present at least half the time?",
        help: "Cyclothymic symptoms must never meet full criteria for a manic, hypomanic or major depressive episode.",
        options: [
          { label: "Yes, and never a full depressive episode either", to: "r:cyclothymia", note: "Two years or more of alternating subthreshold symptoms, present at least half the time, never full episodes." },
          { label: "Yes, but there has been a full major depressive episode", to: "r:unipolar", note: "A major depressive episode occurred with only subthreshold hypomanic symptoms, so no bipolar diagnosis is met." },
          { label: "No, the pattern is shorter or less frequent", to: "r:subthreshold", note: "Subthreshold symptoms have not lasted 2 years or been present half the time." }
        ]
      },
      cycling1: {
        q: "How many mood episodes in the past year?",
        help: "Rapid cycling means at least four mood episodes in 1 year.",
        options: [
          { label: "Four or more", to: "r:bp1-rc", note: "Four or more mood episodes in the past year." },
          { label: "Fewer than four", to: "r:bp1", note: "Fewer than four mood episodes in the past year." }
        ]
      },
      cycling2: {
        q: "How many mood episodes in the past year?",
        help: "Rapid cycling means at least four mood episodes in 1 year.",
        options: [
          { label: "Four or more", to: "r:bp2-rc", note: "Four or more mood episodes in the past year." },
          { label: "Fewer than four", to: "r:bp2", note: "Fewer than four mood episodes in the past year." }
        ]
      }
    },
    results: {
      "secondary": {
        label: "Before anything else",
        dx: "Rule out a medical or substance-induced cause",
        line: "Manic symptoms are distinctive, but a wide range of medical disorders and substances can produce them.",
        points: [
          "Medical causes in Table 6-5: AIDS/HIV, delirium, hyperthyroidism, postencephalitic syndrome.",
          "Substances: antidepressants, steroids, amphetamines, cocaine, phencyclidine, alcohol intoxication, L-dopa, bronchodilators, decongestants.",
          "In older adults, manic symptoms more often reflect medical illness, dementia or delirium; true new-onset bipolar I is uncommon.",
          "Once a cause is excluded, return to this helper."
        ],
        link: { ch: "ch06", sec: "s6-ddx", label: "Differential diagnosis" }
      },
      "ad-induced": {
        label: "Conclusion",
        dx: "Antidepressant-associated hypomania or mania",
        line: "An episode caused by a medication, including an antidepressant, does not count toward a bipolar diagnosis in the chapter’s criteria.",
        points: [
          "Still treat it as a warning sign: a history of antidepressant-induced hypomania is one of the clues that a depression may be bipolar.",
          "The switch risk seems highest with TCAs, MAOIs and perhaps SNRIs such as venlafaxine.",
          "Look for other bipolar clues: early, abrupt and numerous depressions, hypersomnia, psychomotor retardation, postpartum episodes, family history of bipolar I.",
          "Watch for elevated episodes that occur off medication; one of those changes the diagnosis."
        ],
        link: { ch: "ch06", sec: "s6-depression", label: "Bipolar depression" }
      },
      "psychotic": {
        label: "Consider",
        dx: "A psychotic disorder, such as schizoaffective disorder",
        line: "Psychosis that persists without mood symptoms points away from a pure bipolar disorder.",
        points: [
          "Schizoaffective disorder and catatonic schizophrenia are on the psychiatric differential of mania (Table 6-5).",
          "Favoring mania: merriment, elation and infectious mood, rapid onset from a normal baseline, and a family history of mood disorder.",
          "Manic symptoms in Black and Hispanic patients are too often misdiagnosed as schizophrenia; weigh the full history.",
          "The psychotic disorders helper (Chapter 5) walks through the rest of this distinction."
        ],
        link: { ch: "ch06", sec: "s6-ddx", label: "Differential diagnosis" },
        also: { href: "#/helpers/psychosis", label: "Open the psychotic disorders helper" }
      },
      "bp1": {
        dx: "Bipolar I disorder",
        line: "At least one manic episode. Depressive episodes are common but not required.",
        points: [
          "Manic episodes are distinct when separated by at least 2 months without significant manic or hypomanic symptoms.",
          "Check specifiers: mixed features, anxious distress, mood-congruent or incongruent psychotic features, catatonia, peripartum onset (within 4 weeks of delivery), seasonal pattern.",
          "First-line for acute mania: lithium, divalproex or an atypical antipsychotic, or an antipsychotic added to lithium or divalproex.",
          "An untreated manic episode lasts about 3 months, and 90 percent of patients have another; plan maintenance treatment."
        ],
        link: { ch: "ch06", sec: "s6-bp1", label: "Bipolar I disorder" }
      },
      "bp1-rc": {
        dx: "Bipolar I disorder, with rapid cycling",
        line: "At least one manic episode, and four or more mood episodes in the past year.",
        points: [
          "Rapid cyclers are 5 to 15 percent of bipolar patients, more often women with depressive and hypomanic episodes.",
          "There is no familial pattern, so look for an external trigger such as stress or drug treatment.",
          "Antidepressants are especially controversial with rapid cycling and may drive cycling.",
          "Check the other specifiers too: mixed features, anxious distress, psychotic features, catatonia, peripartum onset, seasonal pattern."
        ],
        link: { ch: "ch06", sec: "s6-specifiers", label: "Specifiers" }
      },
      "bp2": {
        dx: "Bipolar II disorder",
        line: "At least one hypomanic and at least one major depressive episode, and never a manic episode.",
        points: [
          "Impairment comes from the depressive episodes; hypomania causes no marked impairment or hospitalization.",
          "A later manic episode changes the diagnosis to bipolar I.",
          "The diagnosis is stable over 5 years; it is chronic and warrants long-term treatment.",
          "For bipolar depression: quetiapine (300 mg/day), lurasidone or lamotrigine; avoid antidepressant monotherapy."
        ],
        link: { ch: "ch06", sec: "s6-bp2", label: "Bipolar II disorder" }
      },
      "bp2-rc": {
        dx: "Bipolar II disorder, with rapid cycling",
        line: "Hypomanic and major depressive episodes, never mania, with four or more mood episodes in the past year.",
        points: [
          "Rapid cycling is more common in women and has no familial pattern; look for stress or drug treatment as a trigger.",
          "Antidepressants are especially controversial with rapid cycling and mixed states.",
          "Hypomania with frequent shifts is easily mistaken for borderline personality disorder; confirm distinct episodes.",
          "A later manic episode changes the diagnosis to bipolar I."
        ],
        link: { ch: "ch06", sec: "s6-specifiers", label: "Specifiers" }
      },
      "hypo-only": {
        label: "Conclusion",
        dx: "Hypomania without a major depressive episode",
        line: "This does not meet DSM-5 bipolar II, which also requires a major depressive episode.",
        points: [
          "ICD-10 differs: it does not separate bipolar I from II, and a current hypomanic episode plus any prior affective episode (including hypomania) qualifies as bipolar affective disorder.",
          "If subthreshold symptoms have alternated for 2 years or more, reconsider cyclothymia.",
          "Follow the patient: a later major depressive episode makes it bipolar II, and a manic episode makes it bipolar I."
        ],
        link: { ch: "ch06", sec: "s6-bp2", label: "Bipolar II disorder" }
      },
      "cyclothymia": {
        dx: "Cyclothymic disorder",
        line: "At least 2 years (1 in children) of hypomanic and depressive symptoms present at least half the time, never meeting full episode criteria.",
        points: [
          "Exclude substances, medication, medical conditions and bipolar I or II.",
          "Requires marked distress or impairment; the only DSM-5 specifier is with anxious distress.",
          "ICD-10 includes affective personality disorder, cycloid personality and cyclothymic personality here.",
          "Lifelong instability in moods, work and relationships is typical, as in the chapter’s case of Mr. B."
        ],
        link: { ch: "ch06", sec: "s6-cyclothymia", label: "Cyclothymic disorder" }
      },
      "subthreshold": {
        label: "Conclusion",
        dx: "No bipolar disorder diagnosis yet",
        line: "Subthreshold hypomanic symptoms that are too brief or infrequent do not meet criteria for any bipolar disorder.",
        points: [
          "Keep a life chart of mood over time; the chapter recommends graphing the course and updating it.",
          "Reassess if symptoms persist toward 2 years (cyclothymia) or a full episode occurs.",
          "Consider personality factors and normal mood variation in the differential."
        ],
        link: { ch: "ch06", sec: "s6-course", label: "Course" }
      },
      "personality": {
        label: "Consider",
        dx: "Borderline personality disorder rather than hypomania",
        line: "Rapid, reactive mood shifts suggest the lability of a personality disorder rather than distinct hypomanic episodes.",
        points: [
          "Hypomania is frequently confused with borderline lability, and both can produce a severely disrupted life.",
          "Look for features of a bipolar diathesis: family history of bipolar disorder or hypomania, suicide in relatives, antidepressant-induced hypomania.",
          "The two can coexist; in the chapter’s case of the 19-year-old, lithium plus divalproex helped markedly.",
          "If distinct, sustained episodes emerge, return to the bipolar diagnoses."
        ],
        link: { ch: "ch06", sec: "s6-ddx", label: "Differential diagnosis" }
      },
      "unipolar": {
        label: "Conclusion",
        dx: "Not a bipolar disorder: assess as a depressive disorder",
        line: "Without a manic or hypomanic episode, there is no bipolar diagnosis.",
        points: [
          "Ask family or friends directly about past elevated periods; hypomania is easily missed.",
          "Bipolar clues in a depressed patient: hypersomnia, psychomotor retardation, psychotic features, postpartum episodes, family history of bipolar I, antidepressant-induced hypomania, early and abrupt onset.",
          "About 5 to 10 percent of patients with major depression have a manic episode 6 to 10 years later, at a mean age of 32.",
          "When those clues are present, watch closely for switching after starting an antidepressant."
        ],
        link: { ch: "ch06", sec: "s6-depression", label: "Bipolar versus unipolar depression" }
      }
    }
  }
  ,
  {
    id: "depression",
    chapter: "ch07",
    title: "Which depressive disorder?",
    summary: "Work through cause, bipolarity, bereavement, chronicity, episode severity and features to reach major depressive disorder with its specifiers, persistent depressive disorder, double depression or the briefer and milder forms.",
    caution: "A teaching aid built from Chapter 7, not a substitute for a full evaluation. Assess suicide risk in every depressed patient, and confirm the history with another source when you can: depressed patients often minimize what has helped.",
    start: "cause",
    nodes: {
      cause: {
        q: "Could a medical condition, a medication or a substance explain the depression?",
        help: "Table 7-4 lists drugs (reserpine, methyldopa, steroidal contraceptives, interferon, stimulant or alcohol withdrawal and more) and endocrine, infectious, collagen, nutritional, neurologic and neoplastic diseases. Rule of thumb: any drug a depressed patient takes is a potential cause.",
        options: [
          { label: "Yes, or it has not been ruled out yet", to: "r:secondary", note: "A medical, medication or substance cause is possible or not yet excluded." },
          { label: "No, the workup is reassuring", to: "bipolar", note: "Medical, medication and substance causes have been reasonably excluded." }
        ]
      },
      bipolar: {
        q: "Has there ever been a manic or hypomanic episode?",
        help: "Ask directly, and ask family. A depressive episode of bipolar disorder can be identical to a unipolar one.",
        options: [
          { label: "Yes", to: "r:bipolar", note: "There is a history of mania or hypomania." },
          { label: "No", to: "predictors", note: "There has never been a manic or hypomanic episode." }
        ]
      },
      predictors: {
        q: "Are there features that predict bipolar disorder (Table 7-5)?",
        help: "Early onset; psychotic depression before 25; postpartum (especially psychotic) depression; short episodes with rapid onset and offset; more than five episodes; marked retardation; atypical features; seasonality; bipolar family history; cyclothymic or hyperthymic temperament; antidepressant-associated hypomania; repeated loss of antidepressant efficacy; depressive mixed state.",
        options: [
          { label: "Yes, one or more", to: "grief", note: "Features that predict bipolarity are present: keep asking about hypomania and watch for switching on antidepressants." },
          { label: "No", to: "grief", note: "No features that predict bipolarity." }
        ]
      },
      grief: {
        q: "Did the symptoms follow the death of someone close?",
        help: "About one third of bereaved spouses meet criteria for major depression for a time. Normal grief keeps emotional reactivity, involves guilt of omission and rarely includes active suicidal ideation.",
        options: [
          { label: "Yes, and it looks like normal grief", to: "r:grief", note: "Symptoms follow a death and fit normal grief: reactive mood, guilt of omission, no active suicidal ideation." },
          { label: "Yes, with signs of a depressive disorder", to: "chronic", note: "Grief shows Table 7-8 warning signs: feeling ill, marked retardation, guilt of commission, worthlessness or psychosis, active suicidal ideation, mummification or severe anniversary reactions." },
          { label: "No", to: "chronic", note: "The depression is not a response to bereavement." }
        ]
      },
      chronic: {
        q: "What is the pattern over time?",
        help: "Persistent depressive disorder needs depressed mood most days for 2 years (1 year in children), never symptom-free for more than 2 months.",
        options: [
          { label: "Depressed most days for 2 years or more, never well for more than 2 months", to: "pddmde", note: "Chronic depressed mood for at least 2 years with no symptom-free period longer than 2 months." },
          { label: "Discrete episodes, with clear periods in between", to: "episode", note: "The depression comes in discrete episodes." }
        ]
      },
      pddmde: {
        q: "Have full major depressive episodes occurred during these 2 years?",
        help: "These are the DSM-5 course specifiers for persistent depressive disorder (Table 7-3).",
        options: [
          { label: "No full episode in the past 2 years", to: "r:pdd-pure", note: "No major depressive episode in the past 2 years." },
          { label: "Yes, throughout the entire 2 years", to: "r:pdd-persistent", note: "Full major depressive criteria have been met for the whole 2 years." },
          { label: "Yes, on and off, and one is happening now", to: "r:double", note: "Intermittent major depressive episodes on top of chronic low mood, with a current episode." },
          { label: "Yes, on and off, but not right now", to: "r:pdd-intermittent", note: "Intermittent major depressive episodes in the past 2 years, none current." }
        ]
      },
      episode: {
        q: "What are the episodes like?",
        help: "Major depression needs 5 symptoms for 2 weeks, one being depressed mood or anhedonia, with distress or impairment.",
        options: [
          { label: "5 or more symptoms, including low mood or anhedonia, for 2 weeks or more, with distress or impairment", to: "psychotic", note: "Episodes meet major depressive criteria: 5 or more symptoms for at least 2 weeks with distress or impairment." },
          { label: "Full-severity symptoms, but each episode lasts less than 2 weeks", to: "r:rbd", note: "Episodes are severe enough for major depression but last under 2 weeks." },
          { label: "Fewer, milder symptoms, with normal mood between episodes", to: "r:minor", note: "Episodes are milder than major depression, with euthymia in between." }
        ]
      },
      psychotic: {
        q: "Are there delusions or hallucinations?",
        help: "Mood-congruent themes: guilt, sin, worthlessness, poverty, failure, persecution, terminal illness. Mood-incongruent: for example, grandiose power, knowledge or worth.",
        options: [
          { label: "Yes, mood-congruent", to: "r:mdd-psychotic", note: "Psychotic features with mood-congruent content." },
          { label: "Yes, mood-incongruent", to: "r:mdd-incongruent", note: "Psychotic features with mood-incongruent content." },
          { label: "No", to: "features", note: "No psychotic features." }
        ]
      },
      features: {
        q: "Which description fits the episode best?",
        help: "Choose the most prominent pattern. Several specifiers can apply at once; the result lists the others to check.",
        options: [
          { label: "Melancholic: no pleasure or reactivity, worse in the morning, early waking, weight loss, excessive guilt", to: "r:mdd-melancholic", note: "Melancholic features: loss of pleasure or reactivity plus morning worsening, early waking, weight loss or excessive guilt." },
          { label: "Atypical: mood still brightens, plus overeating, oversleeping, leaden paralysis or rejection sensitivity", to: "r:mdd-atypical", note: "Atypical features: mood reactivity with reversed vegetative signs, leaden paralysis or rejection sensitivity." },
          { label: "Three or more manic or hypomanic symptoms within the episode", to: "r:mdd-mixed", note: "Mixed features: at least three manic or hypomanic symptoms within the depressive episode." },
          { label: "Catatonic: stupor, extreme withdrawal, negativism, marked retardation for most of the episode", to: "r:mdd-catatonic", note: "Catatonic features for most of the episode." },
          { label: "Began within 4 weeks after delivery", to: "r:mdd-postpartum", note: "Onset within 4 weeks postpartum." },
          { label: "Recurs in the same season, usually winter", to: "r:mdd-seasonal", note: "A seasonal pattern, usually winter." },
          { label: "None of these stands out", to: "r:mdd", note: "No distinctive specifier pattern." }
        ]
      }
    },
    results: {
      "secondary": {
        label: "Before anything else",
        dx: "Rule out a medical or substance cause",
        line: "Many medical and neurologic disorders and drugs produce depression; most are found with a careful history, examination and routine tests.",
        points: [
          "Do a full history, physical and neurologic examination, and routine blood and urine tests, including thyroid and adrenal function.",
          "Targeted tests: mononucleosis in adolescents; adrenal and thyroid function if markedly over- or underweight; HIV with risk factors; viral pneumonia and other illness in older patients.",
          "Neurologic causes to consider: Parkinson disease, dementia, epilepsy (especially a right temporal focus), stroke (especially anterior, within 2 years) and diencephalic or temporal tumors.",
          "With substance use, establish the link by history or several weeks of abstinence; depression that persists despite abstinence is an independent mood disorder."
        ],
        link: { ch: "ch07", sec: "s7-ddx-medical", label: "Medical and pharmacologic causes" }
      },
      "bipolar": {
        label: "Conclusion",
        dx: "A bipolar disorder, not a depressive disorder",
        line: "Any history of mania or hypomania excludes major depressive disorder in DSM-5.",
        points: [
          "The depressive episode of bipolar disorder can be identical to a unipolar episode.",
          "Unipolar and bipolar disorders need different treatment, so the diagnosis changes the plan.",
          "The bipolar disorders helper (Chapter 6) works through bipolar I, bipolar II and cyclothymia."
        ],
        link: { ch: "ch07", sec: "s7-ddx-bipolar", label: "Is it bipolar?" },
        also: { href: "#/helpers/bipolar", label: "Open the bipolar disorders helper" }
      },
      "grief": {
        label: "Conclusion",
        dx: "Uncomplicated bereavement",
        line: "Normal grief is not a mental disorder, even when it temporarily meets symptom criteria.",
        points: [
          "About one third of bereaved spouses meet criteria for major depression for a time.",
          "Diagnose a depressive disorder only if the grief does not resolve; severity and course are the key differences.",
          "Watch for Table 7-8 signs: feeling ill, marked retardation, guilt of commission, worthlessness or psychosis, active suicidal ideation, mummification, severe anniversary reactions.",
          "In severe bereavement, some argue it is unwise to withhold antidepressants, whatever the diagnosis."
        ],
        link: { ch: "ch07", sec: "s7-bereavement", label: "Bereavement" }
      },
      "pdd-pure": {
        dx: "Persistent depressive disorder (dysthymia), with pure dysthymic syndrome",
        line: "Chronic depressed mood for at least 2 years without a major depressive episode in that time.",
        points: [
          "Usually begins in childhood or adolescence; patients say they have always been depressed and often wait a decade before seeking help.",
          "Over time about 20 percent progress to major depression, 15 percent to bipolar II and under 5 percent to bipolar I.",
          "Treat much as for major depression: antidepressants and cognitive or behavior therapy. The prognosis is good with treatment.",
          "Screen for substance use, a common way of coping with chronic low mood."
        ],
        link: { ch: "ch07", sec: "s7-pdd", label: "Persistent depressive disorder" }
      },
      "pdd-persistent": {
        dx: "Persistent depressive disorder, with persistent major depressive episode",
        line: "Full major depressive criteria have been met throughout the 2 years.",
        points: [
          "Treat as for major depression, aiming for remission rather than partial response.",
          "In chronically depressed outpatients, medication plus psychotherapy gives higher response and remission than either alone.",
          "Chronic depression is a candidate for maintenance treatment, which appears safe and effective."
        ],
        link: { ch: "ch07", sec: "s7-pdd", label: "Persistent depressive disorder" }
      },
      "double": {
        dx: "Double depression",
        line: "A major depressive episode on top of persistent depressive disorder (DSM-5: with intermittent major depressive episodes, with current episode).",
        points: [
          "Found in about 40 percent of patients with major depressive disorder.",
          "Poorer prognosis than major depression alone; comorbid dysthymia is a negative indicator in Table 7-9.",
          "Treat both: resolving the major episode alone still leaves significant impairment.",
          "Assess suicide risk; chronic hopelessness can coexist with acute risk."
        ],
        link: { ch: "ch07", sec: "s7-other", label: "Double depression" }
      },
      "pdd-intermittent": {
        dx: "Persistent depressive disorder, with intermittent major depressive episodes, without current episode",
        line: "Chronic low mood with at least one major depressive episode in the past 2 years, none at present.",
        points: [
          "Keep treating the chronic depression; residual symptoms raise the risk of recurrence.",
          "Recurrent or chronic depression is a candidate for maintenance treatment.",
          "Watch for a new episode, which would make this double depression."
        ],
        link: { ch: "ch07", sec: "s7-pdd", label: "Persistent depressive disorder" }
      },
      "rbd": {
        dx: "Recurrent brief depressive disorder",
        line: "Full-severity depressive episodes lasting less than 2 weeks. DSM-5 codes it as other specified depressive disorder; ICD-10 as other recurrent mood disorder.",
        points: [
          "It differs from dysthymia by being episodic and more severe.",
          "Rapid onset and offset of short depressive episodes is one of the Table 7-5 predictors of bipolar disorder: ask carefully about hypomania.",
          "Track episodes over time with a rating scale such as the HAM-D or Zung."
        ],
        link: { ch: "ch07", sec: "s7-other", label: "Recurrent brief depression" }
      },
      "minor": {
        dx: "Minor depressive disorder",
        line: "Episodes milder than major depression, with normal mood in between. DSM-5 codes it as other specified depressive disorder; ICD-10 as a mild depressive episode.",
        points: [
          "It differs from dysthymia mainly by being episodic; dysthymia has virtually no euthymic periods.",
          "If low mood becomes near-continuous for 2 years, reconsider persistent depressive disorder.",
          "If an episode reaches 5 symptoms for 2 weeks, it becomes major depression."
        ],
        link: { ch: "ch07", sec: "s7-other", label: "Minor depressive disorder" }
      },
      "mdd": {
        dx: "Major depressive disorder",
        line: "At least one major depressive episode, with no history of mania or hypomania.",
        points: [
          "Specify severity (mild, moderate, severe) and whether the episode is single or recurrent; check for anxious distress (2 or more anxiety symptoms).",
          "Assess suicide risk and the indications for hospitalization: suicide or homicide risk, inability to obtain food or shelter, need for diagnostic procedures.",
          "SSRIs are the most common first choice; give an adequate dose for 4–5 weeks, aim for remission, and continue at least 6 months.",
          "Cognitive, interpersonal and behavior therapy all have strong evidence; combined treatment is the chapter's general recommendation."
        ],
        link: { ch: "ch07", sec: "s7-mdd", label: "Major depressive disorder" }
      },
      "mdd-psychotic": {
        dx: "Major depressive disorder, with mood-congruent psychotic features",
        line: "A major depressive episode with delusions or hallucinations in keeping with the depressed mood.",
        points: [
          "Psychotic features reflect severe disease and predict a poorer prognosis.",
          "Treat with an antidepressant plus an atypical antipsychotic; ECT is useful and perhaps more effective than medication.",
          "Assess suicide and homicide risk; delusions occasionally lead to thoughts of harming others.",
          "Psychotic depression before age 25 predicts bipolar disorder (Table 7-5)."
        ],
        link: { ch: "ch07", sec: "s7-specifiers", label: "Specifiers" }
      },
      "mdd-incongruent": {
        dx: "Major depressive disorder, with mood-incongruent psychotic features",
        line: "A major depressive episode with psychotic content that does not fit the depressed mood, such as grandiosity.",
        points: [
          "Mood-incongruent features raise the chance of a comorbid primary psychotic disorder, such as schizoaffective disorder or schizophrenia.",
          "Guard against the reverse error too: Table 7-6 lists how mood disorders get misdiagnosed as schizophrenia. Take a longitudinal view.",
          "Treat with an antidepressant plus an atypical antipsychotic, or ECT.",
          "The psychotic disorders helper (Chapter 5) covers the psychotic differential."
        ],
        link: { ch: "ch07", sec: "s7-ddx-psych", label: "Psychotic and other disorders" },
        also: { href: "#/helpers/psychosis", label: "Open the psychotic disorders helper" }
      },
      "mdd-melancholic": {
        dx: "Major depressive disorder, with melancholic features",
        line: "Loss of pleasure or reactivity plus at least three of: severe despair, morning worsening, early waking, psychomotor change, weight loss, excessive guilt.",
        points: [
          "Sometimes called endogenous depression; linked to autonomic and endocrine changes.",
          "Suicidal ideation is common: assess risk carefully.",
          "Dual-action (serotonergic and noradrenergic) antidepressants may work better.",
          "Also check for anxious distress and catatonia."
        ],
        link: { ch: "ch07", sec: "s7-specifiers", label: "Specifiers" }
      },
      "mdd-atypical": {
        dx: "Major depressive disorder, with atypical features",
        line: "Mood reactivity plus at least two of: increased appetite or weight, increased sleep, leaden paralysis, rejection sensitivity.",
        points: [
          "Strongest evidence for MAOIs; SSRIs and bupropion also help.",
          "Younger onset and more anxiety, substance use and somatic symptom comorbidity; easily misdiagnosed as an anxiety disorder.",
          "Associated with a long course, a seasonal pattern and bipolar I disorder: watch for switching, as in the chapter's case of Kevin.",
          "Atypical features are a Table 7-5 predictor of bipolarity."
        ],
        link: { ch: "ch07", sec: "s7-specifiers", label: "Specifiers" }
      },
      "mdd-mixed": {
        dx: "Major depressive disorder, with mixed features",
        line: "At least three manic or hypomanic symptoms within the depressive episode, never as separate episodes.",
        points: [
          "If the manic or hypomanic symptoms ever occur as independent episodes, the diagnosis is bipolar disorder.",
          "A depressive mixed state (psychomotor excitement, irritable hostility, racing thoughts, sexual arousal) predicts bipolarity in Table 7-5.",
          "Accurate diagnosis matters because unipolar and bipolar disorders need different treatment."
        ],
        link: { ch: "ch07", sec: "s7-specifiers", label: "Specifiers" },
        also: { href: "#/helpers/bipolar", label: "Open the bipolar disorders helper" }
      },
      "mdd-catatonic": {
        dx: "Major depressive disorder, with catatonia",
        line: "Catatonic features (stupor, blunted affect, extreme withdrawal, negativism, marked retardation) present for most of the episode.",
        points: [
          "Catatonic features in mood disorders may carry prognostic and treatment significance.",
          "Severe retardation can make catatonia hard to distinguish from depression itself.",
          "Check whether the patient can obtain food and care for themselves; inability is an indication for hospitalization.",
          "Catatonia also occurs in schizophrenia; review the longitudinal history."
        ],
        link: { ch: "ch07", sec: "s7-specifiers", label: "Specifiers" }
      },
      "mdd-postpartum": {
        dx: "Major depressive disorder, with peripartum (postpartum) onset",
        line: "A major depressive episode beginning within 4 weeks after delivery.",
        points: [
          "Postpartum disorders commonly include psychotic symptoms: ask specifically.",
          "Brexanolone (IV allopregnanolone, approved 2019) treats postpartum depression, acting within 24 hours; it is given over 60 hours in a restricted program.",
          "Postpartum depression, especially with psychosis, is a Table 7-5 predictor of bipolar disorder."
        ],
        link: { ch: "ch07", sec: "s7-novel", label: "Novel agents" }
      },
      "mdd-seasonal": {
        dx: "Major depressive disorder, with seasonal pattern",
        line: "Depressive episodes that recur in a particular season, most often winter.",
        points: [
          "Patients may respond preferentially to light therapy: 1,500–10,000 lux, about 1–2 hours before dawn.",
          "At least 75 percent are women; mean age at presentation is 40, and presentation after 55 is rare.",
          "Light therapy can rarely switch patients into mania or hypomania, and seasonality predicts bipolarity (Table 7-5)."
        ],
        link: { ch: "ch07", sec: "s7-neurostim", label: "Light therapy" }
      }
    }
  }
  ,
  {
    id: "anxiety",
    chapter: "ch08",
    title: "Which anxiety disorder?",
    summary: "Rule out medical, cultural and other psychiatric explanations, then ask what the person is actually afraid of and for how long, to reach panic disorder, agoraphobia, specific phobia, social anxiety disorder or generalized anxiety disorder.",
    caution: "A teaching aid built from Chapter 8, not a substitute for a full evaluation. Anxious patients rarely volunteer suicidal thoughts but are at increased risk, so ask directly.",
    start: "cause",
    nodes: {
      cause: {
        q: "Could a medical condition or a substance explain the anxiety?",
        help: "Panic-like states occur with thyroid disease, hyperparathyroidism, pheochromocytoma, insulinoma (episodic hypoglycemia), seizures, vestibular dysfunction, neoplasms, arrhythmias, COPD, asthma and prescribed or illicit drugs. Clues: ataxia, altered consciousness or bladder dyscontrol during attacks, onset late in life, and physical signs of illness.",
        options: [
          { label: "Yes, or it has not been ruled out yet", to: "r:secondary", note: "A medical or substance cause is possible or not yet excluded." },
          { label: "No, the history, examination and workup are reassuring", to: "culture", note: "Medical and substance causes have been reasonably excluded." }
        ]
      },
      culture: {
        q: "Is this a culturally specific anxiety syndrome?",
        help: "Examples in the chapter: anxiety syndromes related to fear of “wind attacks” in Cambodian patients, and ataque de nervios (attack of nerves) in Puerto Rican and Dominican patients. Symptoms are usually the same as elsewhere, with emphasis on those that fit beliefs about the cause.",
        options: [
          { label: "Yes, the patient frames it in culturally specific terms", to: "r:culture", note: "The presentation is framed as a culturally specific syndrome." },
          { label: "No", to: "otherdx", note: "No culturally specific framing." }
        ]
      },
      otherdx: {
        q: "Does the anxiety occur only as part of another psychiatric disorder?",
        help: "Anxiety and panic attacks are common in major depression, schizophrenia, PTSD (panic on trauma reminders), substance use, and paranoid, avoidant and dependent personality disorders.",
        options: [
          { label: "Yes, it occurs only within another disorder", to: "r:other-psych", note: "The anxiety is confined to the course of another psychiatric disorder." },
          { label: "No, the anxiety stands on its own", to: "core", note: "The anxiety is not explained by another psychiatric disorder." }
        ]
      },
      core: {
        q: "What is the person mainly afraid of?",
        help: "This is the question that separates the anxiety disorders. Ask what they fear will happen, not only where the anxiety occurs.",
        options: [
          { label: "The panic attacks themselves: sudden surges of intense fear with physical symptoms", to: "panicnature", note: "The fear centers on panic attacks." },
          { label: "Places where escape or help would be hard: transport, open or closed spaces, crowds, being out alone", to: "agora", note: "The fear centers on places where escape or help would be difficult." },
          { label: "A specific object or situation: an animal, heights, storms, blood or needles, driving, flying", to: "specific", note: "The fear centers on a specific object or situation." },
          { label: "Being watched, judged or embarrassed in social or performance situations", to: "socialwhy", note: "The fear centers on social or performance situations." },
          { label: "Many everyday matters, most of the time: work, money, health, family", to: "gad", note: "The worry spreads across many everyday matters." }
        ]
      },
      panicnature: {
        q: "What is the pattern of the attacks?",
        help: "A panic attack needs 4 or more symptoms: shortness of breath, palpitations, chest discomfort, nausea, sweating, chills or flushing, trembling, dizziness, numbness or tingling, derealization or depersonalization, fear of losing control, fear of dying. Panic disorder needs recurrent, unexpected attacks.",
        options: [
          { label: "Recurrent, unexpected attacks, then at least 1 month of worry about more attacks or avoidance", to: "panicagora", note: "Recurrent, unexpected attacks with at least a month of anticipatory anxiety or avoidance." },
          { label: "Attacks come only with a particular feared trigger", to: "trigger", note: "The attacks are expected, tied to a particular trigger." },
          { label: "A single attack, or attacks without lasting worry or avoidance", to: "r:panic-attack", note: "Attacks have not led to a month of worry or avoidance." }
        ]
      },
      trigger: {
        q: "What sets the attacks off?",
        help: "Expected attacks point to the fear behind them, which decides the diagnosis.",
        options: [
          { label: "A specific object or situation", to: "specific", note: "The attacks are triggered by a specific object or situation." },
          { label: "Social scrutiny or performing", to: "socialscope", note: "The attacks are triggered by social scrutiny." },
          { label: "Being somewhere escape or help would be hard", to: "agora", note: "The attacks are triggered by places where escape would be hard." }
        ]
      },
      panicagora: {
        q: "Does the person also avoid places where escape or help would be difficult?",
        help: "Agoraphobia is the most common comorbidity of panic disorder: avoiding public transport, crowds, open or enclosed spaces, or going out alone, often needing a companion.",
        options: [
          { label: "Yes", to: "r:panic-agora", note: "There is agoraphobic avoidance as well." },
          { label: "No", to: "r:panic", note: "There is no agoraphobic avoidance." }
        ]
      },
      agora: {
        q: "How long has the fear and avoidance lasted, and is there panic disorder?",
        help: "DSM-5 agoraphobia needs fear of at least 1 of 5 situations for 6 months or more, out of proportion and impairing. Panic disorder is its most common cause.",
        options: [
          { label: "6 months or more, with recurrent unexpected panic attacks", to: "r:panic-agora", note: "At least 6 months of agoraphobic fear, with panic disorder." },
          { label: "6 months or more, without panic disorder", to: "r:agoraphobia", note: "At least 6 months of agoraphobic fear, without panic disorder." },
          { label: "Less than 6 months, or not impairing", to: "r:subthreshold", note: "The fear is too brief or too mild for the diagnosis." }
        ]
      },
      specific: {
        q: "Does exposure bring immediate fear, out of proportion, with avoidance or painful endurance for 6 months or more?",
        help: "Specific phobia types: animal, natural environment, blood–injection–injury, situational, other. Lasting avoidance after even a single panic attack in one setting can meet criteria.",
        options: [
          { label: "Yes", to: "r:specific", note: "Immediate, disproportionate fear on exposure, with avoidance or endurance, for at least 6 months." },
          { label: "No, it is briefer or not impairing", to: "r:subthreshold", note: "The fear is too brief or too mild for the diagnosis." }
        ]
      },
      socialwhy: {
        q: "In those situations, what does the person fear will happen?",
        help: "In social anxiety disorder the fear is of embarrassment or negative evaluation, not of the situation itself. Someone who avoids speaking only because they might have a panic attack does not have social anxiety disorder.",
        options: [
          { label: "Being embarrassed, judged or rejected, or that others will notice the anxiety", to: "socialscope", note: "The fear is of negative evaluation." },
          { label: "Having a panic attack there", to: "panicnature", note: "The fear is of having a panic attack, not of being judged." },
          { label: "Being unable to escape or get help", to: "agora", note: "The fear is of being unable to escape." }
        ]
      },
      socialscope: {
        q: "How far does the fear reach, and has it lasted 6 months with real impairment?",
        help: "Some anxiety about public speaking or a party of strangers is nearly universal. The disorder requires disabling fear under scrutiny. DSM-5 has a performance-only specifier.",
        options: [
          { label: "Many social situations, 6 months or more, impairing", to: "r:social", note: "Fear of negative evaluation across social situations, for at least 6 months, with impairment." },
          { label: "Only public speaking or performing, 6 months or more, impairing", to: "r:social-performance", note: "Fear limited to performance, for at least 6 months, with impairment." },
          { label: "Ordinary nervousness that does not impair", to: "r:subthreshold", note: "The nervousness does not cause clinically significant distress or impairment." }
        ]
      },
      gad: {
        q: "Is the worry excessive and hard to control, most of the time for 6 months, with physical symptoms?",
        help: "DSM-5 needs 3 or more of: restlessness, fatigue, poor concentration, irritability, muscle tension, insomnia. A key feature is being unable to prioritize worries or set them aside.",
        options: [
          { label: "Yes, with 3 or more of the symptoms", to: "r:gad", note: "Excessive, uncontrollable worry for at least 6 months, with 3 or more symptoms." },
          { label: "Excessive, but under 6 months or with fewer symptoms", to: "r:subthreshold", note: "The worry falls short of the duration or symptom count." },
          { label: "Proportionate and controllable", to: "r:normal", note: "The worry is proportionate, controllable and not impairing." }
        ]
      }
    },
    results: {
      "secondary": {
        label: "Before anything else",
        dx: "Rule out a medical or substance cause",
        line: "Many medical disorders and drugs cause anxiety or panic-like symptoms.",
        points: [
          "Endocrine: hypo- and hyperthyroidism, hyperparathyroidism, pheochromocytoma, insulinoma with episodic hypoglycemia.",
          "Neurologic: seizure disorders, vestibular dysfunction, neoplasms, and the CNS effects of prescribed and illicit drugs.",
          "Cardiopulmonary: arrhythmias, COPD and asthma can produce crescendo anxiety hard to tell from panic.",
          "Ataxia, altered consciousness or bladder dyscontrol during attacks, or a first onset late in life, call for a medical workup; hospitalization is reasonable when one is needed."
        ],
        link: { ch: "ch08", sec: "s8-ddx", label: "Differential diagnosis" }
      },
      "culture": {
        label: "Consider",
        dx: "A culturally specific anxiety syndrome",
        line: "Some groups have anxiety syndromes that reflect culturally specific understandings of the body.",
        points: [
          "Examples: fear of “wind attacks” in Cambodian patients; ataque de nervios in Puerto Rican and Dominican patients.",
          "The symptoms themselves usually match those seen elsewhere; the emphasis follows beliefs about the cause.",
          "Take a full history and examination, and consider a cultural consultation.",
          "Once understood, the presentation may still meet criteria for one of the anxiety disorders; continue the assessment."
        ],
        link: { ch: "ch08", sec: "s8-special", label: "Special populations and culture" }
      },
      "other-psych": {
        label: "Consider",
        dx: "Anxiety as part of another psychiatric disorder",
        line: "Anxiety and panic attacks are common features of many disorders and may not need a separate diagnosis.",
        points: [
          "Panic attacks occur especially in the phobias and PTSD; a panic attack is a symptom, not a diagnosis.",
          "Agoraphobic avoidance can arise in major depression, schizophrenia, and paranoid, avoidant and dependent personality disorders.",
          "Depression complicates panic disorder in 40–80 percent of patients, and substance use in 20–40 percent; a separate anxiety disorder may still coexist.",
          "Treat the primary disorder, and reassess whether anxiety persists independently."
        ],
        link: { ch: "ch08", sec: "s8-ddx", label: "Differential diagnosis" }
      },
      "panic": {
        dx: "Panic disorder",
        line: "Recurrent, unexpected panic attacks followed by at least 1 month of anticipatory anxiety or avoidance.",
        points: [
          "First line: an SSRI or venlafaxine; a short-term benzodiazepine can bridge the first weeks. TCAs and MAOIs work but are less preferred.",
          "Cognitive therapy: correct the misreading of bodily sensations and teach that attacks are time-limited and not life-threatening.",
          "Maintenance antidepressants prevent relapse for 1 to 3 years; taper very slowly. Advise cutting back caffeine and nicotine.",
          "Screen for depression (40–80 percent), substance use (20–40 percent) and suicide risk."
        ],
        link: { ch: "ch08", sec: "s8-panic", label: "Panic disorder" }
      },
      "panic-agora": {
        dx: "Panic disorder with agoraphobia",
        line: "Panic disorder plus avoidance of places where escape or help would be difficult.",
        points: [
          "Panic disorder is the most common cause of agoraphobia; DSM-5 records agoraphobia as a comorbid condition.",
          "Medication mainly targets the panic attacks: an SSRI or venlafaxine first line.",
          "Improving the panic often improves the agoraphobia; behavior therapy (graded exposure) gives rapid, complete reduction.",
          "Agoraphobia can be the most disabling phobia; virtual-reality exposure can help with hard-to-recreate settings."
        ],
        link: { ch: "ch08", sec: "s8-agoraphobia", label: "Agoraphobia" }
      },
      "panic-attack": {
        label: "Conclusion",
        dx: "Panic attacks without panic disorder",
        line: "Isolated attacks, or attacks without a month of worry or avoidance, do not meet criteria for panic disorder.",
        points: [
          "DSM-5 provides a panic attack specifier for discrete attacks without the full disorder.",
          "After the first one or two attacks many people are unconcerned; repeated attacks can bring anticipatory anxiety, so follow up.",
          "If avoidance of one specific setting develops after an attack, consider specific phobia."
        ],
        link: { ch: "ch08", sec: "s8-panic", label: "Panic disorder" }
      },
      "agoraphobia": {
        dx: "Agoraphobia",
        line: "At least 6 months of fear and avoidance of places where escape or help would be difficult, without panic disorder.",
        points: [
          "Feared situations: public transportation, open spaces, enclosed spaces, lines or crowds, being alone outside the home.",
          "Without panic disorder it is often incapacitating and chronic, complicated by depression and alcohol use disorder.",
          "Behavior therapy with graded or virtual exposure; early studies did not support medication for pure agoraphobia.",
          "Rule out depression, schizophrenia, and paranoid, avoidant and dependent personality disorders."
        ],
        link: { ch: "ch08", sec: "s8-agoraphobia", label: "Agoraphobia" }
      },
      "specific": {
        dx: "Specific phobia",
        line: "Immediate, disproportionate fear of a specific object or situation, with avoidance or painful endurance, for at least 6 months.",
        points: [
          "Specify the type: animal, natural environment, blood–injection–injury, situational or other.",
          "Treatment of choice: in vivo exposure, usually graded with relaxation; virtual reality helps for situations like flying.",
          "SSRIs may help but are little studied.",
          "Phobias are the most stable anxiety disorders over time and have the highest heritability, perhaps 60 percent."
        ],
        link: { ch: "ch08", sec: "s8-specific", label: "Specific phobia" }
      },
      "social": {
        dx: "Social anxiety disorder",
        line: "At least 6 months of disabling fear of scrutiny and negative evaluation across social situations.",
        points: [
          "First line: SSRIs or SNRIs; pregabalin and clonazepam also have strong evidence; phenelzine works but is rarely used.",
          "Not recommended: TCAs, buspirone and quetiapine. β-Blockers do not help generalized social anxiety.",
          "Individual CBT is first line in some guidelines; group CBT and social skills training also help.",
          "The sex ratio is roughly equal, unlike most anxiety disorders."
        ],
        link: { ch: "ch08", sec: "s8-social", label: "Social anxiety disorder" }
      },
      "social-performance": {
        dx: "Social anxiety disorder, performance only",
        line: "Disabling fear limited to public speaking or performance, for at least 6 months.",
        points: [
          "β-Blockers such as propranolol may help performance anxiety, though evidence is thin and side effects can impair performance.",
          "Their benefit does not generalize to other social anxiety.",
          "CBT and exposure are useful; SSRIs and SNRIs remain first line if broader treatment is needed."
        ],
        link: { ch: "ch08", sec: "s8-social", label: "Social anxiety disorder" }
      },
      "gad": {
        dx: "Generalized anxiety disorder",
        line: "Excessive, hard-to-control worry about many matters most of the time for at least 6 months, with 3 or more physical or cognitive symptoms.",
        points: [
          "First line: SSRIs or SNRIs. Alternatives: agomelatine, pregabalin, buspirone (three divided doses, slow onset) or quetiapine.",
          "Allow 8–12 weeks at an optimal dose; maintain at least 6 months.",
          "CBT has substantial effects in GAD.",
          "Relapses can come long after the first episode; keep monitoring, including for suicide risk."
        ],
        link: { ch: "ch08", sec: "s8-gad", label: "Generalized anxiety disorder" }
      },
      "subthreshold": {
        label: "Conclusion",
        dx: "Anxiety that does not yet meet criteria",
        line: "The fear or worry is too brief, too mild or not impairing enough for a specific anxiety disorder.",
        points: [
          "The anxiety disorders require clinically significant distress or impairment, and most require 6 months.",
          "A rating scale such as the GAD-7 or Beck Anxiety Inventory can track symptoms over time.",
          "Reassess if symptoms persist or spread; brief symptoms with good premorbid functioning carry a favorable outlook."
        ],
        link: { ch: "ch08", sec: "s8-map", label: "The anxiety disorders at a glance" }
      },
      "normal": {
        label: "Conclusion",
        dx: "Normal anxiety",
        line: "Anxiety that is proportionate, controllable and not impairing is an adaptive response, not a disorder.",
        points: [
          "Fear and anxiety prepare us for danger through fight, flight or freezing.",
          "In the right dose, anxiety sharpens attention and alertness.",
          "It becomes a disorder only when inappropriately triggered and maladaptive."
        ],
        link: { ch: "ch08", sec: "s8-overview", label: "Normal and pathologic anxiety" }
      }
    }
  }
  ,
  {
    id: "ocd",
    chapter: "ch09",
    title: "Which obsessive-compulsive or related disorder?",
    summary: "Exclude medical causes and look-alike disorders, then follow the focus of the repetitive thoughts or behavior to reach OCD, body dysmorphic disorder, hoarding disorder, trichotillomania, excoriation disorder or olfactory reference syndrome, with the relevant specifiers.",
    caution: "A teaching aid built from Chapter 9, not a substitute for a full evaluation. These patients often hide their symptoms out of embarrassment, and BDD and excoriation carry real suicide risk: ask directly.",
    start: "cause",
    nodes: {
      cause: {
        q: "Could a medical condition or a substance explain the symptoms?",
        help: "Consider PANDAS in a child after group A streptococcal infection; Sydenham chorea or Huntington disease (look for neurologic signs); new onset after age 30; drugs, medications or alcohol during use or withdrawal. For hair loss, alopecia areata and tinea capitis (a biopsy may be needed); for picking, scabies or Prader–Willi syndrome; for phantom odors, temporal lobe epilepsy, pituitary tumor or sinusitis.",
        options: [
          { label: "Yes, or it has not been ruled out yet", to: "r:secondary", note: "A medical or substance cause is possible or not yet excluded." },
          { label: "No, the history and examination are reassuring", to: "otherdx", note: "Medical and substance causes have been reasonably excluded." }
        ]
      },
      otherdx: {
        q: "Are the thoughts or behaviors better explained by another disorder or by personality?",
        help: "Depressive ruminations and manic preoccupations are mood-congruent and ego-syntonic. Psychotic patients cannot acknowledge the unreasonableness of their behavior. OCPD has perfectionism without genuine obsessions or compulsions.",
        options: [
          { label: "They occur only during depressive or manic episodes and fit the mood", to: "r:mood", note: "The thoughts occur only within mood episodes and are mood-congruent." },
          { label: "They are part of a psychosis, with other psychotic features and no recognition that they are unreasonable", to: "r:psychotic", note: "The symptoms belong to a psychotic disorder." },
          { label: "The body concern is about weight, or about sex characteristics", to: "r:body-other", note: "The bodily preoccupation centers on weight or on sex characteristics." },
          { label: "Lifelong perfectionism and rigidity, but no real obsessions or compulsions", to: "r:ocpd", note: "Perfectionistic traits without genuine obsessions or compulsions." },
          { label: "None of these", to: "focus", note: "No other disorder or personality pattern explains the symptoms." }
        ]
      },
      focus: {
        q: "What is the main focus of the repetitive thoughts or behavior?",
        help: "The focus decides the diagnosis in this group. If several apply, work through the main one first; multiple diagnoses are given only when concerns go beyond the usual focus of each disorder.",
        options: [
          { label: "Intrusive thoughts and/or rituals: contamination, doubt and checking, forbidden thoughts, symmetry", to: "ocdimpact", note: "The focus is intrusive obsessions and/or compulsive rituals." },
          { label: "A flaw in appearance that others cannot see or consider slight", to: "bddacts", note: "The focus is a perceived flaw in appearance." },
          { label: "Keeping possessions: difficulty discarding", to: "hoardwhy", note: "The focus is keeping possessions." },
          { label: "Pulling out hair", to: "hairwhy", note: "The focus is hair pulling." },
          { label: "Picking at skin", to: "skinwhy", note: "The focus is skin picking." },
          { label: "A belief of giving off a foul body odor no one else notices", to: "r:ors", note: "The focus is a perceived foul body odor." }
        ]
      },
      ocdimpact: {
        q: "Do the symptoms take at least 1 hour a day, or cause significant distress or impairment?",
        help: "Include avoidance of triggers when judging impact. Common patterns: contamination with washing, doubt with checking, intrusive sexual or aggressive thoughts, symmetry with slowness.",
        options: [
          { label: "Yes", to: "insight", note: "The symptoms take at least an hour a day or cause significant distress or impairment." },
          { label: "No, they are mild and do not interfere", to: "r:normal", note: "The symptoms are mild and not impairing." }
        ]
      },
      insight: {
        q: "How convinced is the patient that the OCD beliefs are true?",
        help: "Specify insight: good or fair (recognizes the beliefs are definitely or probably not true), poor (thinks they are probably true), or absent/delusional (completely convinced). Absent insight risks misdiagnosis as psychosis.",
        options: [
          { label: "Recognizes they are definitely or probably not true", to: "tics", note: "Insight is good or fair." },
          { label: "Thinks they are probably true", to: "tics", note: "Insight is poor." },
          { label: "Completely convinced", to: "tics", note: "Insight is absent; the beliefs are delusional." }
        ]
      },
      tics: {
        q: "Is there a current or past tic disorder?",
        help: "20–30 percent of patients with OCD have a history of tics, and 5–7 percent have Tourette disorder.",
        options: [
          { label: "Yes", to: "r:ocd-tic", note: "There is a current or past tic disorder." },
          { label: "No", to: "r:ocd", note: "There is no tic history." }
        ]
      },
      bddacts: {
        q: "Have there been repetitive behaviors or mental acts about it, with significant distress or impairment?",
        help: "Mirror checking or avoiding mirrors, excessive grooming, skin picking, comparing with others, camouflaging. In avoidant personality or social phobia, appearance worry is usually not prominent, persistent or impairing.",
        options: [
          { label: "Yes", to: "bddtype", note: "Repetitive appearance-related acts with significant distress or impairment." },
          { label: "No, the concern is not prominent, persistent or impairing", to: "r:normal", note: "The appearance concern is not prominent or impairing." }
        ]
      },
      bddtype: {
        q: "What best describes the concern?",
        help: "DSM-5 specifiers: with muscle dysmorphia, and insight good or fair, poor, or absent/delusional. Only about a quarter of BDD patients have reasonable insight.",
        options: [
          { label: "Believes their muscles or build are too small", to: "r:bdd-muscle", note: "The concern is low muscle mass or small build." },
          { label: "Completely convinced, with delusional intensity", to: "r:bdd-delusional", note: "The belief has delusional intensity." },
          { label: "Another appearance concern, with at least some doubt", to: "r:bdd", note: "An appearance concern held with at least some doubt." }
        ]
      },
      hoardwhy: {
        q: "Why are the possessions kept?",
        help: "In hoarding disorder there is no obsession: the person wants to keep items and is distressed by discarding them. Collections reflecting a special interest suggest autism spectrum disorder.",
        options: [
          { label: "To prevent harm, or because of symmetry, incompleteness or contamination obsessions", to: "r:ocd-hoard", note: "The keeping is driven by an obsession." },
          { label: "It reflects a special interest, a psychosis, or neurologic disease such as dementia or Prader–Willi syndrome", to: "r:hoard-secondary", note: "The keeping is explained by another condition." },
          { label: "They feel needed or important, and discarding is distressing; clutter causes distress or impairment", to: "hoardacq", note: "Items are kept because they feel needed, with distressing clutter." },
          { label: "An enjoyable, focused collection without clutter or impairment", to: "r:collecting", note: "An enjoyable, restricted collection without impairment." }
        ]
      },
      hoardacq: {
        q: "Does the person also acquire excessively (buying, collecting free items, taking things)?",
        help: "DSM-5 specifier: with excessive acquisition.",
        options: [
          { label: "Yes", to: "r:hoard-acq", note: "There is excessive acquisition." },
          { label: "No, items accumulate passively", to: "r:hoard", note: "Possessions accumulate passively." }
        ]
      },
      hairwhy: {
        q: "What drives the hair pulling?",
        help: "Trichotillomania involves an urge, often tension before and relief after, repeated attempts to stop, and noticeable hair loss. Pulling in response to a delusion or hallucination, or as stereotypic movement, is excluded.",
        options: [
          { label: "An urge with repeated failed attempts to stop, causing hair loss and distress", to: "r:trich", note: "Urge-driven pulling with failed attempts to stop and hair loss." },
          { label: "Grooming stray hairs for cosmetic reasons", to: "r:normal", note: "Hair removal is cosmetic." },
          { label: "In response to a delusion or hallucination", to: "r:psychotic", note: "The pulling responds to psychotic experiences." }
        ]
      },
      skinwhy: {
        q: "What drives the skin picking?",
        help: "Excoriation disorder involves recurrent picking with lesions, failed attempts to stop, and often tension then relief. Picking can also serve appearance concerns (BDD) or contamination obsessions (OCD).",
        options: [
          { label: "An urge with tension and relief, causing lesions, with failed attempts to stop", to: "r:excoriation", note: "Urge-driven picking causing lesions, with failed attempts to stop." },
          { label: "Trying to fix perceived flaws in appearance", to: "r:bdd-pick", note: "The picking aims to fix perceived appearance flaws." },
          { label: "Removing contamination", to: "r:ocd-pick", note: "The picking responds to contamination obsessions." },
          { label: "Elaborate self-inflicted lesions with geometric edges and a vague account", to: "r:factitious", note: "Lesions suggest deliberate self-injury by elaborate methods." }
        ]
      }
    },
    results: {
      "secondary": {
        label: "Before anything else",
        dx: "Rule out a medical or substance cause",
        line: "Use the diagnosis due to another medical condition, or substance-induced, when that explains the symptoms.",
        points: [
          "PANDAS: OCD-like symptoms in children after group A β-hemolytic streptococcal infection.",
          "Look for neurologic signs of Sydenham chorea or Huntington disease; new onset after 30 suggests a neurologic cause.",
          "Hair loss: consider alopecia areata and tinea capitis (biopsy if needed). Picking: scabies, Prader–Willi syndrome. Phantom odors: temporal lobe epilepsy, pituitary tumor, sinusitis.",
          "Substance-induced symptoms occur during use or withdrawal, outside a delirium."
        ],
        link: { ch: "ch09", sec: "s9-ddx-medical", label: "Medical differential" }
      },
      "mood": {
        label: "Consider",
        dx: "Ruminations of a mood episode",
        line: "Depressive ruminations and manic preoccupations are mood-congruent and ego-syntonic, and are not neutralized by compulsions.",
        points: [
          "Obsessive thoughts in major depression occur only during the depressive episode.",
          "Treat the mood disorder and reassess whether obsessions persist.",
          "OCD and major depression often coexist (about 67 percent lifetime), so both may be present."
        ],
        link: { ch: "ch09", sec: "s9-ddx-psych", label: "Psychiatric differential" }
      },
      "psychotic": {
        label: "Consider",
        dx: "Symptoms of a psychotic disorder",
        line: "Psychotic disorders can produce obsessive thoughts, compulsions, bodily preoccupations or hoarding.",
        points: [
          "Psychotic patients cannot acknowledge the unreasonableness of their behavior and have other psychotic features.",
          "Beware the reverse error: OCD or BDD with absent insight can look psychotic but is still OCD or BDD.",
          "Hair pulling in response to a delusion or hallucination is excluded from trichotillomania."
        ],
        link: { ch: "ch09", sec: "s9-ddx-psych", label: "Psychiatric differential" }
      },
      "body-other": {
        label: "Consider",
        dx: "An eating disorder or gender dysphoria",
        line: "Bodily preoccupation focused on weight, or on sex characteristics, belongs to another diagnosis.",
        points: [
          "Anorexia nervosa: the bodily preoccupation centers on weight; an eating disorder is an exclusion for BDD.",
          "Gender dysphoria: discomfort with, or a sense of wrongness about, primary and secondary sex characteristics.",
          "BDD can still be diagnosed if concerns extend to other appearance features."
        ],
        link: { ch: "ch09", sec: "s9-ddx-psych", label: "Psychiatric differential" }
      },
      "ocpd": {
        label: "Consider",
        dx: "Obsessive-compulsive personality disorder",
        line: "Perfectionism and preoccupation with detail resemble OCD only superficially.",
        points: [
          "Only OCD has genuine obsessions and compulsions.",
          "ICD-10 lists OCPD as an exclusion for OCD.",
          "The two can coexist; personality disorders are among OCD’s common comorbidities."
        ],
        link: { ch: "ch09", sec: "s9-ddx-psych", label: "Psychiatric differential" }
      },
      "ocd": {
        dx: "Obsessive-compulsive disorder",
        line: "Obsessions and/or compulsions taking at least an hour a day or causing significant distress or impairment.",
        points: [
          "Specify insight from the reasoning trail: good or fair, poor, or absent/delusional.",
          "First line: an SSRI at higher doses than for depression (e.g., fluoxetine 80 mg, sertraline 200 mg) for at least 12 weeks, and/or ERP.",
          "Start with CBT in younger patients; with medication if severe or depressed. The combination may be best.",
          "Continue an effective dose 1–2 years and taper very gradually. Screen for depression (about 67 percent) and suicide risk."
        ],
        link: { ch: "ch09", sec: "s9-dx-ocd", label: "Diagnosing OCD" }
      },
      "ocd-tic": {
        dx: "Obsessive-compulsive disorder, tic-related",
        line: "OCD with a current or past tic disorder.",
        points: [
          "Specify insight from the reasoning trail as well.",
          "Antipsychotic augmentation (risperidone or aripiprazole) may be particularly useful with tics, though data are inconsistent; response usually comes within about 4 weeks.",
          "OCD and Tourette disorder co-occur in individuals and families.",
          "SRI and ERP principles are otherwise the same as for OCD."
        ],
        link: { ch: "ch09", sec: "s9-dx-ocd", label: "Diagnosing OCD" }
      },
      "normal": {
        label: "Conclusion",
        dx: "Within normal behavior",
        line: "Concern with germs, appearance, tidiness or grooming that is not impairing is not a disorder.",
        points: [
          "Normal behaviors are desired, usually restricted and often enjoyable.",
          "A pandemic blurs the line between contamination fears and prudent caution.",
          "Reassess if the behavior becomes time-consuming, distressing or impairing."
        ],
        link: { ch: "ch09", sec: "s9-normal", label: "Normal behaviors" }
      },
      "bdd": {
        dx: "Body dysmorphic disorder",
        line: "Preoccupation with a perceived or slight appearance flaw, with repetitive behaviors or mental acts, causing distress or impairment.",
        points: [
          "Specify insight from the reasoning trail.",
          "SSRIs at higher doses and for longer than in depression; another SRI if one fails; buspirone augmentation for partial response.",
          "BDD carries the highest depression (75 percent) and suicidal ideation (80 percent) rates in this group: assess suicide risk.",
          "Be cautious about cosmetic surgery; unrealistic expectations lead to disappointment, depression or litigation."
        ],
        link: { ch: "ch09", sec: "s9-dx-bdd", label: "Diagnosing BDD" }
      },
      "bdd-muscle": {
        dx: "Body dysmorphic disorder, with muscle dysmorphia",
        line: "Preoccupation with the belief that one’s build is too small or not muscular enough.",
        points: [
          "Treat as BDD: higher-dose, longer SSRI treatment.",
          "Specify insight as well.",
          "Assess depression, suicide risk and substance use to self-medicate."
        ],
        link: { ch: "ch09", sec: "s9-dx-bdd", label: "Diagnosing BDD" }
      },
      "bdd-delusional": {
        dx: "Body dysmorphic disorder, with absent insight/delusional beliefs",
        line: "BDD held with delusional conviction; the chapter adds delusional disorder, somatic type, generally alongside BDD.",
        points: [
          "SSRIs work even in delusional BDD; do not assume an antipsychotic is required.",
          "Controlled data on dopamine blockers as augmenters are not encouraging, though aripiprazole has anecdotal support.",
          "Ideas or delusions of reference about others noticing the flaw are common.",
          "Assess suicide risk carefully."
        ],
        link: { ch: "ch09", sec: "s9-tx-bdd", label: "Treating BDD" }
      },
      "ocd-hoard": {
        dx: "OCD with hoarding symptoms",
        line: "Hoarding driven by an obsession is part of OCD, not hoarding disorder.",
        points: [
          "Typical drivers: symmetry, incompleteness, or fear that discarding will cause harm or contamination.",
          "Treat the OCD with SRIs and ERP.",
          "OCD and hoarding disorder can coexist when keeping is also driven by the wish to save items."
        ],
        link: { ch: "ch09", sec: "s9-ddx-psych", label: "Psychiatric differential" }
      },
      "hoard-secondary": {
        label: "Consider",
        dx: "Hoarding due to another condition",
        line: "Diagnose hoarding disorder only when hoarding is independent of other disorders.",
        points: [
          "Autism spectrum disorder: collections reflect a specific interest.",
          "Psychotic disorders can produce hoarding.",
          "Prader–Willi syndrome (food hoarding, obesity, skin picking), Alzheimer disease, and damage to the anterior ventromedial prefrontal and cingulate cortices can cause hoarding."
        ],
        link: { ch: "ch09", sec: "s9-ddx-psych", label: "Psychiatric differential" }
      },
      "hoard": {
        dx: "Hoarding disorder",
        line: "Persistent difficulty discarding, leading to clutter and significant distress or impairment.",
        points: [
          "Specify insight; most hoarders do not see a problem.",
          "OCD treatments help little; use hoarding-specific CBT with decision-making and categorizing training, exposure to discarding and cognitive restructuring, including home visits.",
          "Assess safety: fire, falls, sanitation, pests and eviction risk.",
          "Screen for OCD, GAD and depression."
        ],
        link: { ch: "ch09", sec: "s9-tx-hoarding", label: "Treating hoarding" }
      },
      "hoard-acq": {
        dx: "Hoarding disorder, with excessive acquisition",
        line: "Difficulty discarding plus excessive acquiring of additional possessions.",
        points: [
          "Specify insight as well.",
          "Hoarding-specific CBT in office and home; medication evidence is limited to uncontrolled SSRI and venlafaxine data.",
          "Symptoms tend to worsen each decade; first treatment often comes around age 50."
        ],
        link: { ch: "ch09", sec: "s9-tx-hoarding", label: "Treating hoarding" }
      },
      "collecting": {
        label: "Conclusion",
        dx: "Collecting, not hoarding",
        line: "Collecting is desired, restricted and enjoyable, without distressing clutter or impairment.",
        points: [
          "Collecting can be an enjoyable and sometimes lucrative hobby.",
          "If clutter grows or discarding becomes distressing, reassess for hoarding disorder."
        ],
        link: { ch: "ch09", sec: "s9-normal", label: "Normal behaviors" }
      },
      "trich": {
        dx: "Hair-pulling disorder (trichotillomania)",
        line: "Recurrent pulling causing hair loss, with repeated failed attempts to stop and distress or impairment.",
        points: [
          "Note focused versus automatic pulling; most patients mix both.",
          "Habit reversal training (awareness, competing response, social support) with stimulus control.",
          "Medication: N-acetylcysteine first line in adults (negative in children); SSRIs for comorbid conditions; low-dose dopamine blockers if refractory.",
          "Ask about trichophagy: trichobezoars can cause intestinal obstruction."
        ],
        link: { ch: "ch09", sec: "s9-trich", label: "Trichotillomania" }
      },
      "excoriation": {
        dx: "Excoriation (skin-picking) disorder",
        line: "Recurrent picking causing skin lesions, with repeated failed attempts to stop and distress or impairment.",
        points: [
          "A thorough physical examination first; exclude scabies and other dermatologic causes.",
          "Fluoxetine beat placebo; NAC and dopamine blockers are anecdotal; lamotrigine inconsistent.",
          "Habit reversal training and brief CBT.",
          "Assess suicide risk: 15 percent report suicidal ideation and about 12 percent have attempted suicide."
        ],
        link: { ch: "ch09", sec: "s9-excoriation", label: "Excoriation disorder" }
      },
      "bdd-pick": {
        dx: "Body dysmorphic disorder (picking is part of it)",
        line: "Skin picking to fix perceived appearance flaws is a BDD behavior; a second diagnosis is not necessary.",
        points: [
          "Confirm the other BDD features: preoccupation with perceived flaws and other repetitive acts.",
          "Treat as BDD, with higher-dose, longer SSRI treatment.",
          "Assess insight and suicide risk."
        ],
        link: { ch: "ch09", sec: "s9-dx-bdd", label: "Diagnosing BDD" }
      },
      "ocd-pick": {
        dx: "OCD (picking driven by contamination obsessions)",
        line: "Skin picking in response to contamination obsessions is part of OCD.",
        points: [
          "Treat the OCD: SRIs at higher doses for at least 12 weeks, and ERP.",
          "Diagnose excoriation disorder separately only if picking also occurs independently of the obsessions."
        ],
        link: { ch: "ch09", sec: "s9-ddx-psych", label: "Psychiatric differential" }
      },
      "factitious": {
        label: "Consider",
        dx: "Factitious dermatitis (dermatitis artefacta)",
        line: "Deliberately self-inflicted skin lesions by methods more elaborate than simple picking.",
        points: [
          "Lesions are often bizarre and linear, with angular or geometric edges, beside entirely healthy skin.",
          "The account of how lesions appeared is vague.",
          "Seen in 0.3 percent of dermatology patients; 8:1 female; most often adolescents and young adults.",
          "It is an exclusion for excoriation disorder."
        ],
        link: { ch: "ch09", sec: "s9-ddx-psych", label: "Psychiatric differential" }
      },
      "ors": {
        dx: "Olfactory reference syndrome (other specified obsessive-compulsive or related disorder)",
        line: "A false belief of giving off a foul odor others do not notice, with repetitive washing or changing clothes.",
        points: [
          "Exclude temporal lobe epilepsy, pituitary tumors and frontal, ethmoid or sphenoid sinusitis.",
          "If the belief reaches a somatic delusion, delusional disorder may fit better.",
          "Mostly male and single, mean onset 25; whether it deserves its own diagnosis remains controversial."
        ],
        link: { ch: "ch09", sec: "s9-other", label: "Other specified forms" }
      }
    }
  },
  {
    id: "workup",
    chapter: "ch01",
    title: "Which medical workup?",
    summary: "Pick the clinical situation and a detail or two to see the laboratory tests, ECG, EEG and imaging that Chapter 1 points to, with the reasoning shown.",
    caution: "A teaching aid built from Chapter 1, not an order set. Tests follow the history and examination, reference ranges differ between laboratories, and local protocols and consultants take precedence.",
    start: "situation",
    nodes: {
      situation: {
        q: "What is prompting the medical workup?",
        help: "The history, review of systems and physical examination decide which tests are relevant. Choose the situation that best fits this patient.",
        options: [
          { label: "Acute confusion, fluctuating alertness or a sudden change in mental status", to: "acute", note: "The presentation is an acute change in mental status." },
          { label: "Gradual decline in memory or thinking", to: "decline", note: "The presentation is a gradual cognitive decline." },
          { label: "New-onset psychosis", to: "psychosis", note: "This is a first episode of psychosis." },
          { label: "Suspected substance use or toxic exposure", to: "substance", note: "Substance use or a toxic exposure is suspected." },
          { label: "Starting or monitoring a psychotropic, or preparing for ECT", to: "drug", note: "The question is drug or ECT monitoring." },
          { label: "Eating disorder with restriction or purging", to: "r:eating", note: "The patient has an eating disorder with restriction or purging." },
          { label: "Intentional overdose", to: "r:overdose", note: "The patient has taken an intentional overdose." }
        ]
      },
      acute: {
        q: "Which feature stands out?",
        help: "Altered consciousness is a sensitive sign of brain dysfunction. Look at current drugs, vital signs, the neurologic examination and any history of seizures.",
        options: [
          { label: "Taking an antipsychotic, with fever, rigidity and unstable vital signs", to: "r:nms", note: "Fever, rigidity and autonomic instability on a neuroleptic raise neuroleptic malignant syndrome." },
          { label: "Episodes with automatisms, olfactory hallucinations or a recent head injury", to: "r:seizure", note: "The episodes carry clinical clues to seizure activity." },
          { label: "Taking valproate, now lethargic or confused", to: "r:valproate", note: "Valproate can raise ammonia and cause lethargy or confusion." },
          { label: "Taking lithium, with tremor, sedation or confusion", to: "r:lithium", note: "These are the early signs of lithium toxicity." },
          { label: "None of these specifically", to: "r:delirium", note: "No single cause stands out, so a broad delirium workup is needed." }
        ]
      },
      decline: {
        q: "Which feature stands out?",
        help: "Alzheimer disease, the most common cause, has no characteristic routine imaging appearance, but several treatable causes do.",
        options: [
          { label: "An early gait disorder, with or without urinary symptoms", to: "r:nph", note: "An early gait disorder with cognitive decline suggests normal pressure hydrocephalus." },
          { label: "Focal neurologic signs or a stepwise course", to: "r:focal", note: "Focal signs or a stepwise course point to a structural or vascular cause." },
          { label: "Young adult with a movement disorder, personality change or liver disease", to: "r:wilson", note: "Onset in the second or third decade with movement and liver signs suggests Wilson disease." },
          { label: "Prominent depressed mood alongside the cognitive complaints", to: "r:pseudo", note: "Depression can impair memory and timed performance and mimic dementia." },
          { label: "Only minor lapses such as names and misplaced objects, with normal function", to: "r:benign", note: "Minor lapses with intact function fit benign senescent forgetfulness." },
          { label: "None of these specifically", to: "r:dementia", note: "A standard dementia workup is needed." }
        ]
      },
      psychosis: {
        q: "Are there any of these features?",
        help: "New-onset psychosis is itself an indication for a workup that includes neuroimaging. Some medical causes have distinctive clues.",
        options: [
          { label: "Recurrent attacks with abdominal pain, neuropathy or autonomic symptoms", to: "r:porphyria", note: "Psychosis with abdominal pain and neuropathy raises acute intermittent porphyria." },
          { label: "Young adult with a movement disorder or abnormal liver tests", to: "r:wilson", note: "Psychosis with movement and liver signs in a young adult suggests Wilson disease." },
          { label: "Rash, joint symptoms or other signs of an autoimmune disease", to: "r:lupus", note: "Psychosis with autoimmune features raises systemic lupus erythematosus." },
          { label: "Episodic symptoms with automatisms, olfactory hallucinations or altered consciousness", to: "r:seizure", note: "The psychotic symptoms come with clues to seizure activity." },
          { label: "None of these", to: "r:newpsych", note: "No specific medical clue, so the standard first-episode workup applies." }
        ]
      },
      substance: {
        q: "What is the main concern?",
        help: "Patients are often unreliable reporters of substance use, and substance-induced disorders can resemble primary psychiatric disorders.",
        options: [
          { label: "Alcohol", to: "r:alcohol", note: "Alcohol is the main concern." },
          { label: "Injection drug use", to: "r:ivdu", note: "The patient injects drugs." },
          { label: "Other drugs, or unexplained behavioral change", to: "r:tox", note: "Other drug use, or unexplained behavior, calls for a drug screen." },
          { label: "Inhalants, or occupational or hobby exposure to metals or chemicals", to: "r:toxins", note: "Volatile solvents or environmental toxins are possible." },
          { label: "Anabolic steroids in an athlete or bodybuilder", to: "r:steroids", note: "Anabolic steroid use is suspected." }
        ]
      },
      drug: {
        q: "Which treatment?",
        help: "Monitoring aims to avoid toxicity and to confirm that enough drug is on board for a response.",
        options: [
          { label: "Lithium", to: "r:lithium", note: "The patient is starting or taking lithium." },
          { label: "Valproate", to: "r:valproate", note: "The patient is starting or taking valproate." },
          { label: "Carbamazepine", to: "r:carbamazepine", note: "The patient is starting or taking carbamazepine." },
          { label: "Clozapine", to: "r:clozapine", note: "The patient is starting or taking clozapine." },
          { label: "Ziprasidone or thioridazine", to: "r:qtc", note: "These antipsychotics prolong the QTc in a dose-related way." },
          { label: "A tricyclic or tetracyclic antidepressant", to: "r:tca", note: "Tricyclics affect cardiac conduction." },
          { label: "A monoamine oxidase inhibitor", to: "r:maoi", note: "MAOIs affect blood pressure and occasionally the liver." },
          { label: "An antipsychotic with a raised prolactin", to: "r:prolactin", note: "Antipsychotics raise prolactin by blocking pituitary dopamine receptors." },
          { label: "Electroconvulsive therapy", to: "r:ect", note: "The patient is being prepared for ECT." }
        ]
      }
    },
    results: {
      delirium: {
        label: "Suggested workup",
        dx: "Delirium workup",
        line: "Start with the standard dementia laboratory panel, then add tests aimed at infection, metabolic causes, drugs and the brain.",
        points: [
          "CBC, electrolytes, liver tests, BUN and creatinine, thyroid tests, B12 and folate, VDRL and urinalysis.",
          "Add urine or blood cultures, a chest radiograph, neuroimaging or an EEG as appropriate.",
          "Electrolytes are often abnormal in delirium: low sodium, magnesium or calcium can all cause it; a high BUN can cause lethargy.",
          "Check ammonia if liver disease or valproate is possible.",
          "Review every drug: anticholinergics are a classic cause of delirium in older patients.",
          "Inattention from altered consciousness can make the neurologic examination hard to interpret."
        ],
        link: { ch: "ch01", sec: "s1-lab-approach", label: "Why medical testing matters" }
      },
      nms: {
        label: "Suggested workup",
        dx: "Neuroleptic malignant syndrome workup",
        line: "Autonomic instability, hyperpyrexia, severe rigidity and delirium in a patient on a neuroleptic.",
        points: [
          "CBC, electrolytes, BUN, creatinine and creatine kinase.",
          "Urinalysis including urine myoglobin.",
          "Blood and urine cultures as part of the fever workup.",
          "White counts typically run 10,000 to 40,000 per mm³; liver enzymes rise if the liver fails.",
          "Stop the neuroleptic, hydrate, give muscle relaxants and provide supportive care.",
          "Remember that IM injections, long periods in restraints and dystonia also raise CK."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels, monitoring and NMS" }
      },
      seizure: {
        label: "Suggested workup",
        dx: "Look for a seizure disorder",
        line: "An EEG has its highest yield when the history suggests a seizure; imaging is added for a structural cause.",
        points: [
          "Clues that raise EEG yield: altered consciousness, olfactory or other atypical hallucinations, head injury and automatisms.",
          "A normal EEG does not rule out a seizure disorder; seizures are a clinical diagnosis.",
          "Video-EEG telemetry correlates behavior with brain electrical activity.",
          "A prolactin drawn promptly after an episode helps separate a true seizure from a pseudoseizure.",
          "Consider MRI, including FLAIR for hippocampal sclerosis in temporal lobe epilepsy; an EEG is also usual after an abnormal CT or MRI."
        ],
        link: { ch: "ch01", sec: "s1-eeg-ecg", label: "EEG, sleep studies and ECG" }
      },
      dementia: {
        label: "Suggested workup",
        dx: "Standard dementia workup",
        line: "Look for treatable and contributing causes; Alzheimer disease shows only diffuse volume loss on routine imaging.",
        points: [
          "CBC, electrolytes, liver tests, BUN and creatinine, thyroid tests, B12 and folate, VDRL and urinalysis.",
          "No clear clinical indication for apolipoprotein E ε4 testing.",
          "CT if there are focal neurologic findings; MRI is the nonemergency study of choice; EEG if delirium is suspected.",
          "Medications, metabolic disorders, infection and nutritional deficits can cause dementia without imaging changes.",
          "FDG-PET temporoparietal hypometabolism supports Alzheimer disease; the MMSE detects and tracks impairment but does not diagnose."
        ],
        link: { ch: "ch01", sec: "s1-imaging-indications", label: "When to image" }
      },
      nph: {
        label: "Suggested workup",
        dx: "Image for normal pressure hydrocephalus",
        line: "A treatable dementia that needs neuroimaging for diagnosis.",
        points: [
          "CT or MRI shows dilated ventricles that press on the frontal lobes.",
          "A gait disorder is almost always present; the dementia may look like Alzheimer disease and appears less consistently.",
          "Relieving the CSF pressure may completely restore gait and mental function.",
          "Complete the standard dementia laboratory panel as well."
        ],
        link: { ch: "ch01", sec: "s1-imaging-indications", label: "When to image" }
      },
      focal: {
        label: "Suggested workup",
        dx: "Image for a structural or vascular cause",
        line: "Any change on neurologic examination that localizes to the brain or spinal cord requires neuroimaging.",
        points: [
          "CT for acute hemorrhage, acute infarct, calcification, skull fracture or a meningeal tumor; MRI otherwise.",
          "Vascular dementia: many small infarcts with patches of white matter hyperintensity on MRI.",
          "Space-occupying lesions: chronic subdural hematoma, contusion, meningioma, infiltrating glioma.",
          "Chronic infections (syphilis, cryptococcus, tuberculosis, Lyme) enhance the basal meninges; serology completes the diagnosis.",
          "Multiple sclerosis plaques appear as periventricular high signal; Huntington disease shows caudate atrophy."
        ],
        link: { ch: "ch01", sec: "s1-imaging-indications", label: "When to image" }
      },
      wilson: {
        label: "Suggested workup",
        dx: "Test for Wilson disease",
        line: "A rare disorder of copper metabolism that deposits copper in the brain and liver.",
        points: [
          "Serum ceruloplasmin (the copper transport protein) is low.",
          "24-hour urine copper is high; serum copper is low.",
          "Presents in the second and third decades with intellectual decline, personality change, psychosis and a movement disorder.",
          "Add liver tests and complete the standard workup for the presentation."
        ],
        link: { ch: "ch01", sec: "s1-chemistry", label: "Clinical chemistry" }
      },
      pseudo: {
        label: "Suggested workup",
        dx: "Separate depression from dementia",
        line: "Depression, even without dementia, impairs memory, visuospatial and timed motor performance.",
        points: [
          "Complete the standard dementia laboratory panel, including thyroid tests.",
          "Polysomnography: depression shortens REM latency and increases REM; patients who look depressed from dementia do not show this.",
          "Use the Geriatric Depression Scale, which leaves out somatic items that confound the diagnosis in the medically ill.",
          "Remember that post-stroke depression can itself cause pseudodementia.",
          "Ask directly about suicidal thoughts."
        ],
        link: { ch: "ch01", sec: "s1-geri-testing", label: "Testing older adults" }
      },
      benign: {
        label: "Conclusion",
        dx: "Benign senescent forgetfulness",
        line: "Minor age-associated memory lapses, such as forgetting names or misplacing objects, are of no clinical significance.",
        points: [
          "Interview anxiety alone can produce minor cognitive lapses.",
          "Confirm that daily functioning and the mental status examination are intact.",
          "Repeat the examination if the picture changes; recent memory is the first to fail in true cognitive disorders."
        ],
        link: { ch: "ch01", sec: "s1-geri-history", label: "Approach and history in older adults" }
      },
      porphyria: {
        label: "Suggested workup",
        dx: "Test for acute intermittent porphyria",
        line: "Psychosis, apathy or depression with intermittent abdominal pain, neuropathy and autonomic dysfunction.",
        points: [
          "Urine porphobilinogen is raised during symptomatic periods.",
          "If it is raised, collect a 24-hour urine for quantitative porphobilinogen and aminolevulinic acid.",
          "Complete the standard first-episode psychosis workup."
        ],
        link: { ch: "ch01", sec: "s1-chemistry", label: "Clinical chemistry" }
      },
      lupus: {
        label: "Suggested workup",
        dx: "Test for systemic lupus erythematosus",
        line: "Lupus can cause depression, dementia, delirium, mania and psychosis; about 5 percent present with psychosis.",
        points: [
          "Antinuclear antibodies are found in virtually all patients but are not specific.",
          "A positive result is followed by anti-DNA antibodies, which with ANA strongly suggest lupus and are followed during treatment.",
          "Lupus can cause a false-positive FTA-ABS for syphilis."
        ],
        link: { ch: "ch01", sec: "s1-endocrine", label: "Endocrine and immune evaluations" }
      },
      newpsych: {
        label: "Suggested workup",
        dx: "First-episode psychosis workup",
        line: "New-onset psychosis is an indication for a medical workup that includes neuroimaging.",
        points: [
          "Neuroimaging: MRI is the nonemergency study of choice; a tumor can present as a first psychiatric episode.",
          "Urine drug screen, confirmed if positive, because substance-induced disorders mimic primary ones.",
          "Basic laboratory panel with thyroid tests, B12 and folate, and syphilis serology (confirm a positive RPR or VDRL with FTA-ABS).",
          "Consider HIV and other STD testing; mania and substance use raise the risk.",
          "Pregnancy test in women before starting drugs with teratogenic risk."
        ],
        link: { ch: "ch01", sec: "s1-imaging-indications", label: "When to image" }
      },
      alcohol: {
        label: "Suggested workup",
        dx: "Alcohol-related tests",
        line: "No single test is diagnostic: the drinking history matters most, and labs support it.",
        points: [
          "Blood alcohol level: high BAL with little impairment means tolerance; marked intoxication with a low BAL suggests other agents.",
          "Liver tests: AST usually exceeds ALT, often 2:1 or more; GGT and bilirubin may rise; albumin may fall and PT lengthen.",
          "CBC for macrocytosis; carbohydrate-deficient transferrin for chronic heavy use.",
          "Magnesium, folate and B12 are often low; amylase if pancreatitis is possible.",
          "Look for rhinophyma, telangiectasias, hepatomegaly and trauma; in withdrawal, hypertension, tremor and tachycardia."
        ],
        link: { ch: "ch01", sec: "s1-tox", label: "Toxicology and alcohol" }
      },
      ivdu: {
        label: "Suggested workup",
        dx: "Injection drug use workup",
        line: "Contaminated needles bring risks of bacterial infection, hepatitis and HIV.",
        points: [
          "Hepatitis B and C serology and liver tests; more than 60 percent of new hepatitis C cases involve injecting drugs.",
          "HIV and other sexually transmitted disease testing.",
          "If endocarditis, bacteremia or abscess is suspected: CBC and blood cultures from at least two sites, and internal medicine consultation.",
          "Urine drug screen, with confirmation of positives."
        ],
        link: { ch: "ch01", sec: "s1-infection", label: "Infectious disease testing" }
      },
      tox: {
        label: "Suggested workup",
        dx: "Drug screen",
        line: "Urine immunoassays screen quickly for common drugs of abuse, but they are screening tests.",
        points: [
          "Confirm any positive result; false positives often come from prescribed drugs, and false negatives from collection or storage problems.",
          "Mind the detection windows: cocaine metabolites 2 to 4 days, marijuana 2 to 7 days, benzodiazepines about 3 days.",
          "Random testing may monitor abstinence more accurately than scheduled testing.",
          "Comprehensive chromatographic screening is reserved for unexplained toxicity with an atypical picture."
        ],
        link: { ch: "ch01", sec: "s1-tox", label: "Toxicology" }
      },
      toxins: {
        label: "Suggested workup",
        dx: "Toxin exposure workup",
        line: "Exposure usually comes through work or hobbies; match the test to the toxin.",
        points: [
          "Lead: blood level or 24-hour urine; free erythrocyte protoporphyrin screens chronic exposure.",
          "Arsenic, manganese and mercury can be measured in urine, blood and hair; aluminum in urine or blood.",
          "Toluene inhalation can show loss of gray–white differentiation and atrophy on MRI; butyl nitrite can cause methemoglobinemia.",
          "There is no ready test for most insecticides; poison control centers can help find one."
        ],
        link: { ch: "ch01", sec: "s1-tox", label: "Environmental toxins" }
      },
      steroids: {
        label: "Suggested workup",
        dx: "Anabolic steroid screen",
        line: "Steroid use is linked to irritability, aggression, depression and psychosis.",
        points: [
          "Urine specimens can screen for these agents.",
          "So many compounds exist that several tests may be needed; androgens other than testosterone are detected by gas chromatography and mass spectroscopy.",
          "Consultation with a specialist is advised."
        ],
        link: { ch: "ch01", sec: "s1-endocrine", label: "Endocrine evaluations" }
      },
      lithium: {
        label: "Monitoring",
        dx: "Lithium monitoring",
        line: "A narrow therapeutic index makes blood levels essential.",
        points: [
          "Toxicity can begin above 1.2 mEq/L and is common above 1.4 mEq/L; elderly or debilitated patients can be toxic at lower levels.",
          "Renal function: BUN, creatinine and creatinine clearance; a high BUN often means impaired lithium clearance.",
          "Ask about polyuria: about one-fifth develop it, and lithium is a common cause of nephrogenic diabetes insipidus.",
          "ECG before starting and in toxicity: benign T-wave changes, sinus node dysfunction, heart block.",
          "Pregnancy test before starting in women of childbearing age."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      valproate: {
        label: "Monitoring",
        dx: "Valproate monitoring",
        line: "Watch the liver, blood counts, ammonia and pregnancy risk.",
        points: [
          "Baseline liver tests; transaminases may stay raised up to three times normal, and hepatic necrosis is rare.",
          "Check ammonia in any patient on valproate with lethargy or altered mental status.",
          "Blood counts for leukopenia and thrombocytopenia; consider pancreatitis.",
          "Pregnancy test before starting and counseling about contraception."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      carbamazepine: {
        label: "Monitoring",
        dx: "Carbamazepine monitoring",
        line: "Blood counts, sodium and pregnancy status matter most.",
        points: [
          "Baseline CBC: anemia, aplastic anemia, leukopenia and thrombocytopenia are rare but possible.",
          "Sodium: usually mild hyponatremia, but SIADH can occur and cause delirium.",
          "Pregnancy test: spina bifida and finger anomalies are reported.",
          "Toxicity: nausea, ataxia, nystagmus, confusion, urinary retention; very high levels cause arrhythmias, seizures and respiratory depression."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      clozapine: {
        label: "Monitoring",
        dx: "Clozapine monitoring",
        line: "Morning trough levels and white counts guide treatment.",
        points: [
          "About 100 is widely taken as the minimum therapeutic level; at least about 350 is considered necessary in refractory schizophrenia.",
          "Seizures and other side effects become more likely above 1,200 or at doses above 600 mg per day.",
          "Clozapine is a common cause of leukopenia: interrupt treatment for moderate to severe leukopenia; rechallenge may be possible later."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      qtc: {
        label: "Monitoring",
        dx: "QTc monitoring",
        line: "Ziprasidone and thioridazine prolong the QTc in a dose-related way.",
        points: [
          "Obtain a baseline ECG before starting.",
          "Ziprasidone is contraindicated with known QTc prolongation or congenital long QT, recent myocardial infarction or uncompensated heart failure.",
          "Bradycardia, low potassium or magnesium and other QT-prolonging drugs raise the risk of serious arrhythmia.",
          "Stop ziprasidone if the QTc stays above 500 ms."
        ],
        link: { ch: "ch01", sec: "s1-eeg-ecg", label: "ECG in psychiatric practice" }
      },
      tca: {
        label: "Monitoring",
        dx: "Tricyclic monitoring",
        line: "Tricyclics affect cardiac conduction.",
        points: [
          "Baseline CBC, electrolytes and liver tests.",
          "ECG for PR, QRS and QTc, especially if the patient is over 40 or has cardiovascular disease.",
          "A QTc above 0.440 seconds raises the risk of sudden death from arrhythmia.",
          "Tricyclics can cause or worsen atrioventricular or bundle branch block."
        ],
        link: { ch: "ch01", sec: "s1-eeg-ecg", label: "ECG in psychiatric practice" }
      },
      maoi: {
        label: "Monitoring",
        dx: "MAOI monitoring",
        line: "Blood pressure is the key measurement; blood levels are not useful.",
        points: [
          "Baseline blood pressure, then monitor during treatment for orthostasis and, rarely, hypertensive crisis.",
          "Liver tests at the start and periodically, because hepatotoxicity occasionally occurs.",
          "Direct monitoring of MAOI blood levels is not clinically indicated."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and monitoring" }
      },
      prolactin: {
        label: "Interpretation",
        dx: "Drug-related hyperprolactinemia",
        line: "Antipsychotics raise prolactin by blocking dopamine receptors in the pituitary.",
        points: [
          "Brain MRI is not usually needed if the patient takes a prolactin-raising antipsychotic and the elevation is consistent with a drug cause.",
          "A rise out of proportion to the drug calls for further evaluation.",
          "Hyperprolactinemia is one of the psychotropic health risks that make physical monitoring important."
        ],
        link: { ch: "ch01", sec: "s1-endocrine", label: "Endocrine evaluations" }
      },
      ect: {
        label: "Preparation",
        dx: "Pre-ECT evaluation",
        line: "No specific laboratory test is required; the history and physical examination are the real screen.",
        points: [
          "Typical tests: CBC, electrolytes, urinalysis and liver tests, usually with an ECG.",
          "Spine x-rays are no longer routine, because paralytic agents make spinal injury rare.",
          "Use the history and examination to find conditions that could complicate treatment."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels, monitoring and ECT" }
      },
      eating: {
        label: "Suggested workup",
        dx: "Eating disorder panel",
        line: "Restriction and purging cause predictable laboratory and ECG changes.",
        points: [
          "Electrolytes, especially potassium and phosphorus; glucose; thyroid tests; liver enzymes; total protein and albumin; BUN and creatinine; CBC; ECG.",
          "Serum amylase in bulimia.",
          "Vomiting: low chloride and potassium with high bicarbonate; laxatives: high bicarbonate, low potassium, low calcium.",
          "Hypokalemia on ECG: flat or inverted T waves and U waves."
        ],
        link: { ch: "ch01", sec: "s1-chemistry", label: "Clinical chemistry" }
      },
      overdose: {
        label: "Suggested workup",
        dx: "Overdose workup",
        line: "Combine qualitative toxicology with the clinical picture and the time of ingestion.",
        points: [
          "Acetaminophen level: toxicity is likely above 140 mcg/mL at 4 hours; give acetylcysteine promptly. Heavy drinkers are especially vulnerable.",
          "Salicylate level: most patients are symptomatic above 40 mg/dL, with tinnitus, tachypnea and acid–base disturbance.",
          "Levels of any prescribed drug with a therapeutic range, such as lithium.",
          "ECG if tricyclics or other conduction-altering drugs may be involved.",
          "Comprehensive chromatographic screening if the toxicity is unexplained or the picture atypical."
        ],
        link: { ch: "ch01", sec: "s1-drug-levels", label: "Drug levels and overdose" }
      }
    }
  },
  {
    id: "development",
    chapter: "ch02",
    title: "Which developmental disorder?",
    summary: "Start from the main concern about a child (global delay, speech and language, social relating, learning, coordination, movements or attention) and follow the chapter's distinctions to the most likely neurodevelopmental diagnosis.",
    caution: "A teaching aid built from Chapter 2, not a substitute for a full developmental, medical and psychological evaluation with standardized testing. Several of these disorders often coexist.",
    start: "concern",
    nodes: {
      concern: {
        q: "What is the main concern about this child?",
        help: "Pick the problem that stands out most. Read every behavior against what is normal for the child's age.",
        options: [
          { label: "Slow across most areas of development", to: "global", note: "Development is delayed across most areas." },
          { label: "Speech or language", to: "hearing", note: "The main concern is speech or language." },
          { label: "Social relating, with or without repetitive behaviors", to: "social", note: "The main concern is social relating." },
          { label: "Learning one school subject despite adequate teaching", to: "learning", note: "The difficulty is limited to academic learning." },
          { label: "Clumsiness and poor motor coordination", to: "motor", note: "The main concern is coordination." },
          { label: "Repetitive movements or sounds", to: "moves", note: "The main concern is repetitive movements or vocalizations." },
          { label: "Inattention, hyperactivity or impulsivity", to: "attention", note: "The main concern is attention and activity." }
        ]
      },
      global: {
        q: "Which description fits best?",
        help: "Intellectual disability needs deficits in both intellectual and adaptive functioning, beginning before 18. Severity is set by adaptive functioning.",
        options: [
          { label: "Both IQ and adaptive skills are well below age, starting in childhood", to: "r:id", note: "Intellectual and adaptive functioning are both significantly impaired from childhood." },
          { label: "The child lost skills he or she had already mastered", to: "r:regression", note: "Previously acquired skills have been lost." },
          { label: "Delays followed severe neglect and improve quickly in a nurturing home", to: "r:deprivation", note: "Delays track deprivation and improve with enrichment." },
          { label: "Hearing or vision has not been checked", to: "r:sensory", note: "A sensory impairment has not been ruled out." }
        ]
      },
      hearing: {
        q: "Has hearing been tested with an audiogram and found normal?",
        help: "Every child with a speech or language disorder needs an audiogram; hearing loss can mimic both language disorder and intellectual disability.",
        options: [
          { label: "Yes, hearing is normal", to: "speech", note: "Hearing loss has been excluded." },
          { label: "No, or not yet tested", to: "r:sensory", note: "Hearing has not been tested." }
        ]
      },
      speech: {
        q: "What is the speech or language problem?",
        help: "Separate the content of language (vocabulary, grammar, comprehension) from producing sounds, fluency, social use and when the child speaks.",
        options: [
          { label: "Understands well but has few words or short, simple sentences", to: "r:expressive", note: "Comprehension is intact; expressive language lags." },
          { label: "Has trouble understanding as well as expressing language", to: "r:mixed", note: "Both comprehension and expression are impaired." },
          { label: "Language is fine but sounds are mispronounced, left out or substituted", to: "r:speechsound", note: "The problem is producing speech sounds." },
          { label: "Repeats or prolongs sounds and syllables, with blocks", to: "r:stutter", note: "The problem is fluency." },
          { label: "Language is fine but social use of it is poor (greetings, turn-taking, humor, adapting to listener)", to: "social", note: "The problem lies in social use of language." },
          { label: "Speaks normally at home but not at school or with others", to: "r:mutism", note: "Speech is present in some settings and absent in others." }
        ]
      },
      social: {
        q: "Have restricted, repetitive behaviors or interests ever been present, even only in early childhood?",
        help: "Examples: lining up objects, rigid routines, intense narrow interests, stereotyped movements, unusual sensory interests. If they appear anywhere in the history, social (pragmatic) communication disorder cannot be diagnosed.",
        options: [
          { label: "Yes, now or in the history", to: "r:asd", note: "Restricted, repetitive behavior is present now or in the history." },
          { label: "Never", to: "socialother", note: "There has never been restricted or repetitive behavior." }
        ]
      },
      socialother: {
        q: "Which best describes the social difficulty?",
        help: "Consider the caregiving history and whether skills are absent everywhere or only in feared situations.",
        options: [
          { label: "Poor social use of language everywhere, in a child over about 4", to: "r:pragmatic", note: "Social communication is impaired in all settings without repetitive behavior." },
          { label: "Has the skills but avoids or freezes in social situations from fear of embarrassment", to: "r:socialanx", note: "Skills are present but not used in feared situations." },
          { label: "Withdrawn, rarely seeks comfort, after severe neglect or many caregivers", to: "r:rad", note: "Inhibited attachment behavior follows pathogenic care." },
          { label: "Indiscriminately friendly with strangers, after severe neglect or many caregivers", to: "r:dsed", note: "Overfamiliar behavior with strangers follows pathogenic care." }
        ]
      },
      learning: {
        q: "What is the child's overall intellectual and adaptive level?",
        help: "Specific learning disorder affects particular academic skills; intellectual disability lowers most skills. Rule out vision and hearing problems and inadequate schooling.",
        options: [
          { label: "Generally average; problems are specific to reading, writing or math", to: "subject", note: "Overall ability is adequate and the deficit is specific." },
          { label: "Low across most skills and in daily living", to: "r:id", note: "Skills are low across the board." }
        ]
      },
      subject: {
        q: "Which skill is most affected?",
        help: "Specify every area involved; the three often coexist.",
        options: [
          { label: "Reading: slow, inaccurate word recognition, poor spelling", to: "r:reading", note: "Reading and spelling are most affected." },
          { label: "Mathematics: number facts, calculation, word problems", to: "r:math", note: "Mathematics is most affected." },
          { label: "Written expression: spelling, grammar, organization, handwriting", to: "r:writing", note: "Written expression is most affected." }
        ]
      },
      motor: {
        q: "What does the neurologic examination show?",
        help: "Developmental coordination disorder is diagnosed only when a neurologic or neuromuscular condition does not explain the clumsiness.",
        options: [
          { label: "Normal strength and no neurologic disease; at most soft signs", to: "r:dcd", note: "Neurologic examination is essentially normal." },
          { label: "Weakness, spasticity or other neurologic deficits", to: "r:neuro", note: "There are neurologic or neuromuscular findings." }
        ]
      },
      moves: {
        q: "Which description fits the movements?",
        help: "Tics are sudden, nonrhythmic and preceded by an urge; they change location over time. Stereotypies are rhythmic, start younger, stay the same and feel soothing.",
        options: [
          { label: "Sudden tics with an urge: several motor tics and at least one vocal tic, for over a year, starting before 18", to: "r:tourette", note: "Multiple motor and at least one vocal tic have lasted over a year." },
          { label: "Motor tics only, or vocal tics only, for over a year", to: "r:chronictic", note: "Only one type of tic has lasted over a year." },
          { label: "Tics for less than a year", to: "r:provisional", note: "Tics have lasted under a year." },
          { label: "Rhythmic, self-soothing movements (rocking, flapping, head banging) with no urge", to: "r:stereotypic", note: "The movements are rhythmic, self-soothing stereotypies." }
        ]
      },
      attention: {
        q: "How do the symptoms behave over time and place?",
        help: "ADHD needs 6 or more symptoms (5 from 17) for 6 months, several before 12, impairing in two or more settings. Mania waxes and wanes.",
        options: [
          { label: "Persistent since early childhood and impairing at home and school", to: "r:adhd", note: "Symptoms are persistent, early and present in two or more settings." },
          { label: "Seen in only one setting", to: "r:onesetting", note: "Symptoms appear in only one setting." },
          { label: "Come in distinct episodes with changes in mood and sleep", to: "r:episodic", note: "Symptoms are episodic, with mood and sleep changes." },
          { label: "Brief staring spells many times a day", to: "r:absence", note: "There are brief staring spells." }
        ]
      }
    },
    results: {
      id: { label: "Most likely", dx: "Intellectual disability", line: "Deficits in intellectual and adaptive functioning beginning in the developmental period; severity is graded by adaptive functioning.", points: ["Use a standardized IQ test (about 70 or below) and an adaptive scale such as the Vineland.", "Look for a cause: pregnancy and birth history, consanguinity, family history; chromosome analysis when anomalies and delay coexist; metabolic tests; neuroimaging for seizures, abnormal head size, regression or neurologic signs.", "Test hearing and vision; check for comorbid ADHD, ASD, mood disorders and seizures.", "Mild disability is about 85% of cases; plan education, behavior support, family education and services (IFSP to 3, IEP from 3 to 21)."], link: { ch: "ch02", sec: "s2-id-dx", label: "Diagnosis and workup" } },
      regression: { label: "Investigate now", dx: "Developmental regression", line: "Loss of previously acquired skills is an indication for neuroimaging and further workup.", points: ["Consider Rett syndrome in girls (hand-wringing, decelerating head growth, breathing irregularities).", "Regression after at least 2 years of normal development was formerly childhood disintegrative disorder, now within ASD.", "Up to 25% of children with ASD lose early language.", "Neurologic, metabolic and degenerative disorders (e.g., adrenoleukodystrophy) need exclusion."], link: { ch: "ch02", sec: "s2-id-genetic", label: "Genetic syndromes" } },
      deprivation: { label: "Most likely", dx: "Effects of psychosocial deprivation", line: "Severe neglect can produce delays that look like intellectual disability or autism but improve in an enriched, nurturing environment.", points: ["Ensure safety and report suspected neglect to child protective services.", "Consider reactive attachment disorder, disinhibited social engagement disorder and PTSD.", "Re-evaluate development after a period of good care."], link: { ch: "ch02", sec: "s2-id-ddx", label: "Differential diagnosis" } },
      sensory: { label: "First step", dx: "Rule out hearing or vision loss", line: "Unrecognized sensory impairment can mimic intellectual disability, language disorder and autism.", points: ["Obtain an audiogram (or auditory evoked potentials in young or uncooperative children).", "Deaf infants babble normally, then the babbling fades at 6–12 months; they seek nonverbal contact.", "Return to the developmental assessment once hearing and vision are known."], link: { ch: "ch02", sec: "s2-comm-language", label: "Language disorder" } },
      expressive: { label: "Most likely", dx: "Language disorder: expressive deficits", line: "Expressive language well below nonverbal ability, with comprehension within normal limits.", points: ["Many late talkers (50–80%) catch up in preschool; treatment is often started if the delay persists beyond the preschool years.", "The child wants to communicate, uses gestures and plays symbolically, unlike autism.", "Watch for later reading problems and comorbid ADHD and anxiety."], link: { ch: "ch02", sec: "s2-comm-language", label: "Language disorder" } },
      mixed: { label: "Most likely", dx: "Language disorder: mixed receptive–expressive deficits", line: "Comprehension and expression both fall well below nonverbal ability; the child may seem deaf to speech.", points: ["Give standardized receptive and expressive tests and an audiogram.", "About half also have speech sound disorder and half reading disorder; at least a third have ADHD.", "Prognosis is less favorable than expressive deficits alone; aim early for rudimentary reading skills."], link: { ch: "ch02", sec: "s2-comm-language", label: "Language disorder" } },
      speechsound: { label: "Most likely", dx: "Speech sound disorder", line: "Persistent difficulty producing speech sounds expected for age, not explained by structural or neurologic causes.", points: ["Omissions are most severe, then substitutions, then distortions; late sounds (r, sh, th, f, z, l, ch) are most often wrong.", "Rule out dysarthria (drooling, abnormal chewing or swallowing, slow speech).", "Most improve by third grade; treat if errors persist past about 8 or speech is unintelligible."], link: { ch: "ch02", sec: "s2-comm-speech", label: "Speech sound disorder" } },
      stutter: { label: "Most likely", dx: "Childhood-onset fluency disorder (stuttering)", line: "Involuntary repetitions, prolongations and blocks that disrupt the flow of speech.", points: ["Normal preschool dysfluency comes without tension; stuttering brings strain and part-word repetitions.", "Early treatment (e.g., the parent-delivered Lidcombe Program) makes full resolution far more likely.", "Screen older stutterers for social anxiety disorder."], link: { ch: "ch02", sec: "s2-comm-stutter", label: "Stuttering" } },
      mutism: { label: "Most likely", dx: "Selective mutism", line: "Consistent failure to speak in specific social situations (usually school) despite speaking normally elsewhere, for at least a month.", points: ["Not the first month of school, and not a child still learning a new language.", "Closely related to social anxiety disorder.", "Treat with graded, rewarded speaking exposures (CBT) and SSRIs as needed."], link: { ch: "ch02", sec: "s2-mutism", label: "Selective mutism" } },
      asd: { label: "Most likely", dx: "Autism spectrum disorder", line: "Persistent social communication deficits plus restricted, repetitive behavior, present from early development.", points: ["Specify intellectual and language impairment and severity; use the ADOS when available.", "Rule out deafness, intellectual disability alone and deprivation.", "Start early intensive behavioral and developmental intervention; medication targets associated symptoms (risperidone or aripiprazole for irritability)."], link: { ch: "ch02", sec: "s2-asd-ddx", label: "Autism differential diagnosis" } },
      pragmatic: { label: "Most likely", dx: "Social (pragmatic) communication disorder", line: "Persistent difficulty using verbal and nonverbal communication socially, with no restricted or repetitive behavior ever.", points: ["Rarely diagnosed before age 4.", "Social communication must be worse than expected for intellectual level.", "Often coexists with language disorder, ADHD and learning disorders; may raise risk of social anxiety."], link: { ch: "ch02", sec: "s2-comm-pragmatic", label: "Social (pragmatic) communication disorder" } },
      socialanx: { label: "Most likely", dx: "Social anxiety disorder", line: "Fear of scrutiny in social situations, which are avoided or endured, with anxiety occurring among peers.", points: ["Skills are present but not used in feared situations, unlike social (pragmatic) communication disorder.", "CBT, SSRIs, or both (combined treatment had the best response in CAMS)."], link: { ch: "ch02", sec: "s2-anx-three", label: "Childhood anxiety disorders" } },
      rad: { label: "Most likely", dx: "Reactive attachment disorder", line: "An emotionally withdrawn, inhibited pattern toward caregivers after grossly insufficient care, with onset before 5.", points: ["Assess safety and nutrition; report maltreatment.", "Distinguish from ASD: children with RAD are often malnourished, and improve with good care.", "Treat the caregiver–child relationship (e.g., ABC intervention)."], link: { ch: "ch02", sec: "s2-trauma-attach", label: "Attachment disorders" } },
      dsed: { label: "Most likely", dx: "Disinhibited social engagement disorder", line: "Overfamiliar behavior with unfamiliar adults after pathogenic care, not explained by impulsivity.", points: ["Often persists despite adoption and good care.", "Frequently coexists with ADHD, PTSD and language delay."], link: { ch: "ch02", sec: "s2-trauma-attach", label: "Attachment disorders" } },
      reading: { label: "Most likely", dx: "Specific learning disorder with impairment in reading", line: "Slow, inaccurate word reading and poor spelling below age expectations for 6 months despite help.", points: ["Core deficit is phonologic processing; visual-motor theories are myths.", "Screen for ADHD (up to 25%) and language disorder.", "Explicit letter–sound remediation (e.g., Orton-Gillingham) and an IEP."], link: { ch: "ch02", sec: "s2-sld-reading", label: "Reading impairment" } },
      math: { label: "Most likely", dx: "Specific learning disorder with impairment in mathematics", line: "Problems with number facts, calculation and mathematical reasoning below age expectations.", points: ["Usually identified in second or third grade; KeyMath testing.", "Early remediation emphasizing problem solving; address math anxiety."], link: { ch: "ch02", sec: "s2-sld-math", label: "Mathematics impairment" } },
      writing: { label: "Most likely", dx: "Specific learning disorder with impairment in written expression", line: "Spelling, grammar, punctuation, organization and handwriting well below age.", points: ["Confirm with a standardized writing test (TOWL) and rule out ADHD or depression as the cause.", "Direct writing instruction and accommodations (extra time, software)."], link: { ch: "ch02", sec: "s2-sld-writing", label: "Written expression" } },
      dcd: { label: "Most likely", dx: "Developmental coordination disorder", line: "Motor coordination well below age and intellect, impairing daily life, not due to a neurologic condition.", points: ["Bruininks-Oseretsky testing; often coexists with ADHD and reading disorder.", "Occupational therapy, task-specific training, adaptive physical education; watch self-esteem and bullying."], link: { ch: "ch02", sec: "s2-motor-dcd", label: "Developmental coordination disorder" } },
      neuro: { label: "Investigate", dx: "Neurologic or neuromuscular disorder", line: "Cerebral palsy, muscular dystrophy and neuromuscular disease cause broader deficits and exclude developmental coordination disorder.", points: ["Refer for neurologic evaluation."], link: { ch: "ch02", sec: "s2-motor-dcd", label: "Developmental coordination disorder" } },
      tourette: { label: "Most likely", dx: "Tourette disorder", line: "Multiple motor and at least one vocal tic for more than a year, beginning before 18.", points: ["Screen for ADHD (over half) and OCD (20–40%).", "Psychoeducation; habit reversal (CBIT) first line; risperidone, α2-agonists, haloperidol or pimozide when needed.", "Tics usually peak at 10–12 and improve by adolescence."], link: { ch: "ch02", sec: "s2-motor-tourette", label: "Tourette disorder" } },
      chronictic: { label: "Most likely", dx: "Persistent (chronic) motor or vocal tic disorder", line: "Either motor or vocal tics, but not both, for more than a year, beginning before 18.", points: ["Onset at 6–8 with facial tics carries the best outlook.", "Habit reversal is first line."], link: { ch: "ch02", sec: "s2-motor-chronic-tic", label: "Chronic tic disorder" } },
      provisional: { label: "For now", dx: "Tics of less than a year (transient tic disorder)", line: "Tics present for under 12 months do not yet meet Tourette or persistent tic disorder criteria.", points: ["Follow over time; many remit.", "Reassess for Tourette disorder if both motor and vocal tics persist beyond a year."], link: { ch: "ch02", sec: "s2-motor-tourette", label: "Tic disorders" } },
      stereotypic: { label: "Most likely", dx: "Stereotypic movement disorder", line: "Repetitive, purposeless, rhythmic movements that interfere with activities or cause injury.", points: ["Specify with or without self-injury; common with ASD and intellectual disability.", "Transient rhythmic habits are normal in toddlers and usually fade by about 4.", "Habit reversal and differential reinforcement; medication for dangerous self-injury."], link: { ch: "ch02", sec: "s2-motor-stereo", label: "Stereotypic movement disorder" } },
      adhd: { label: "Most likely", dx: "Attention-deficit/hyperactivity disorder", line: "Persistent, impairing inattention and/or hyperactivity-impulsivity with several symptoms before 12 in two or more settings.", points: ["Specify combined, predominantly inattentive or predominantly hyperactive/impulsive presentation.", "Rule out absence seizures, sensory loss and thyroid disease; take a cardiac history.", "Stimulants are first line; combine with behavioral treatment, especially with comorbidity."], link: { ch: "ch02", sec: "s2-adhd-dx", label: "Recognizing ADHD" } },
      onesetting: { label: "Not yet", dx: "ADHD not established", line: "ADHD requires impairing symptoms in at least two settings.", points: ["Gather reports from home, school and other settings.", "Consider setting-specific causes: a learning disorder, anxiety, an unsuitable classroom or family stress.", "If oppositional behavior is the main problem at home, consider oppositional defiant disorder."], link: { ch: "ch02", sec: "s2-adhd-ddx", label: "ADHD differential diagnosis" } },
      episodic: { label: "Consider", dx: "A mood disorder", line: "Episodic symptoms with mood and sleep changes suggest mania or depression rather than ADHD.", points: ["Bipolar symptoms wax and wane; ADHD is persistent.", "Chronic, nonepisodic irritability with frequent outbursts suggests DMDD.", "ADHD and bipolar disorder often coexist."], link: { ch: "ch02", sec: "s2-bp-picture", label: "Bipolar disorder in youth" } },
      absence: { label: "Investigate", dx: "Possible absence seizures", line: "Brief staring spells can mimic inattention.", points: ["Obtain neurologic consultation and an EEG.", "An unrecognized temporal lobe focus can also resemble ADHD."], link: { ch: "ch02", sec: "s2-adhd-dx", label: "ADHD workup" } }
    }
  },
  {
    id: "cognitive",
    chapter: "ch03",
    title: "Which cognitive disorder?",
    summary: "Start from how the cognitive change began (acute and fluctuating, gradual, memory only, rapidly progressive or mild) and follow the chapter's distinctions to delirium, a dementia type, an amnestic syndrome, a medical cause or mild cognitive impairment.",
    caution: "A teaching aid built from Chapter 3, not a substitute for a full history, examination and workup. Cognitive disorders often coexist: delirium on dementia, and mixed Alzheimer and vascular disease, are common.",
    start: "onset",
    nodes: {
      onset: {
        q: "How did the cognitive change begin?",
        help: "Time course and level of consciousness are the first branch point. Delirium is acute, fluctuating and impairs attention and awareness; dementia is gradual in clear consciousness; amnestic disorders spare most other cognition.",
        options: [
          { label: "Acutely, over hours to days, with fluctuating attention or awareness", to: "delcause", note: "The onset is acute with fluctuating attention or awareness." },
          { label: "Gradually, over months to years, in an alert patient", to: "progress", note: "Decline is gradual in clear consciousness." },
          { label: "Mainly loss of memory, with other cognition relatively spared", to: "amnesia", note: "Memory loss dominates the picture." },
          { label: "A rapidly progressive decline over weeks to months", to: "rapid", note: "The decline is rapidly progressive." },
          { label: "Mild decline with daily activities still intact", to: "mild", note: "Decline is mild and daily function is preserved." },
          { label: "Cognitive complaints alongside prominent depressed mood", to: "r:depcog", note: "Cognitive complaints come with prominent depression." }
        ]
      },
      delcause: {
        q: "What does the setting suggest?",
        help: "Assume any drug the patient has taken could be the cause. Physical examination often points to the source: vital signs, pupils, neck stiffness, breath, tongue lacerations.",
        options: [
          { label: "On anticholinergic drugs, with dry flushed skin and dilated pupils", to: "r:anticholinergic", note: "There are anticholinergic signs and exposure." },
          { label: "Stopping alcohol or sedatives, with tremor and autonomic overactivity", to: "r:withdrawal", note: "The picture follows alcohol or sedative withdrawal." },
          { label: "Known dementia that has suddenly worsened", to: "r:beclouded", note: "An existing dementia has acutely worsened." },
          { label: "Abrupt, self-limited episodes, unexplained falls or a recent seizure", to: "r:seizure", note: "Episodes are abrupt and self-limited, or follow a seizure." },
          { label: "Medical illness, surgery, infection, ICU care or new medications", to: "r:delirium", note: "There is a medical, surgical or drug precipitant." }
        ]
      },
      progress: {
        q: "Which feature came first or dominates?",
        help: "Cortical dementias (Alzheimer) bring early memory loss and aphasia; frontotemporal dementia starts with personality change; Lewy body dementia fluctuates with hallucinations; subcortical dementias slow thinking and movement.",
        options: [
          { label: "Recent memory loss first, steadily progressive, later aphasia, apraxia and agnosia", to: "r:alzheimer", note: "Memory loss came first with steady progression." },
          { label: "Personality change, disinhibition, apathy or hyperorality, with memory relatively spared", to: "r:ftd", note: "Behavior and personality changed first, with memory relatively spared." },
          { label: "Fluctuating alertness, well-formed visual hallucinations, parkinsonism after the decline", to: "r:lewy", note: "There is fluctuation, visual hallucinations and later parkinsonism." },
          { label: "Stepwise decline with focal neurologic signs and vascular risk factors", to: "r:vascular", note: "Decline is stepwise with focal signs." },
          { label: "Slowed thinking and apathy without aphasia, with a movement disorder", to: "subcort", note: "The pattern is subcortical: slowing, apathy and a movement disorder." },
          { label: "A clue to a medical cause: recent fall, thyroid signs, anemia or abnormal pupils", to: "reversible", note: "There is a clue to a potentially reversible medical cause." }
        ]
      },
      subcort: {
        q: "What is the context?",
        help: "Subcortical dementia: no aphasia, impaired retrieval more than recognition, early slowing, apathy, dysarthria and abnormal movements.",
        options: [
          { label: "Established Parkinson disease preceded the cognitive decline", to: "r:parkinson", note: "Parkinson disease preceded the decline." },
          { label: "Chorea, with a family history", to: "r:huntington", note: "There is chorea and a family history." },
          { label: "HIV infection", to: "r:hiv", note: "The patient has HIV infection." },
          { label: "Years of repeated head blows (boxing, football)", to: "r:pugilistica", note: "There were years of repeated head trauma." }
        ]
      },
      reversible: {
        q: "Which clue is present?",
        help: "About 10–15% of dementias are potentially reversible if treated before permanent damage. The workup aims to find these causes.",
        options: [
          { label: "A recent fall or head injury in an older person", to: "r:subdural", note: "There was a recent fall or head injury." },
          { label: "Slowed thinking with weight gain, cold intolerance and lateral eyebrow loss", to: "r:thyroid", note: "There are signs of hypothyroidism." },
          { label: "Paresthesias, macrocytic anemia or poor nutrition", to: "r:b12", note: "There are clues to B12 deficiency." },
          { label: "Grandiosity and small, irregular pupils that do not react to light", to: "r:neurosyphilis", note: "There are Argyll Robertson pupils and frontal change." }
        ]
      },
      amnesia: {
        q: "What is the setting of the memory loss?",
        help: "Amnestic disorders impair new learning (and recall), with immediate memory intact and orientation to person rarely lost. Dissociative and factitious amnesia behave differently.",
        options: [
          { label: "Chronic alcohol use or malnutrition, with confabulation", to: "r:korsakoff", note: "Amnesia follows alcohol use or malnutrition, with confabulation." },
          { label: "An abrupt episode of 6–24 hours, repeating questions, alert, with full recovery", to: "r:tga", note: "There was an abrupt, self-limited episode." },
          { label: "During a course of ECT", to: "r:ect", note: "The amnesia follows ECT." },
          { label: "After a head injury", to: "r:headamn", note: "The amnesia follows head injury." },
          { label: "After hypoxia, carbon monoxide, herpes encephalitis or a posterior circulation stroke", to: "r:amnestic", note: "There was a hippocampal or diencephalic insult." },
          { label: "Loss of personal identity after a stressful event, yet new learning is intact", to: "r:dissociative", note: "Identity is lost but new learning is preserved." },
          { label: "Inconsistent test performance, no cause and possible gain", to: "r:factitious", note: "Performance is inconsistent with no cause found." }
        ]
      },
      rapid: {
        q: "Which features accompany the rapid decline?",
        help: "Rapid dementia with motor signs suggests prion disease; fever and focal temporal signs suggest encephalitis.",
        options: [
          { label: "Middle-aged or older, with myoclonus, ataxia and periodic EEG complexes", to: "r:cjd", note: "There is myoclonus with periodic EEG complexes." },
          { label: "Under 40, depression or anxiety first, then ataxia or myoclonus", to: "r:vcjd", note: "A young person had psychiatric symptoms, then cerebellar signs." },
          { label: "Fever, anosmia and olfactory or gustatory hallucinations", to: "r:hsv", note: "There is fever with anosmia and olfactory hallucinations." },
          { label: "A young woman with vivid hallucinations, dissociation, amnesia and seizures", to: "r:nmda", note: "A young woman has a schizophrenia-like encephalitis." }
        ]
      },
      mild: {
        q: "What does testing show?",
        help: "MCI needs objective impairment for age and education with intact daily activities. Subjective complaints alone give false positives.",
        options: [
          { label: "Memory well below norms for age and education, other cognition and ADLs intact", to: "r:mci", note: "Objective memory impairment with intact function." },
          { label: "Minor forgetfulness consistent with age, no significant test deficit or impact", to: "r:aging", note: "Forgetfulness is minor and age-appropriate." }
        ]
      }
    },
    results: {
      delirium: { label: "Most likely", dx: "Delirium", line: "Acute, fluctuating disturbance of attention and awareness with other cognitive deficits and evidence of a physiologic cause.", points: ["Specify hyperactive, hypoactive or mixed, and the cause (substance, medication, medical condition, multiple).", "Examine vital signs, neck, pupils, breath and neurologic signs; standard labs, ECG, EEG (diffuse slowing), chest film and drug screens.", "Treat the cause; reorient (clock, calendar, familiar person); avoid restraints and both under- and overstimulation.", "Haloperidol for psychosis or agitation with QT monitoring; avoid phenothiazines and benzodiazepines unless withdrawal.", "1-year mortality up to 50%; address predisposing factors to prevent recurrence."], link: { ch: "ch03", sec: "s3-del-features", label: "Delirium" } },
      anticholinergic: { label: "Most likely", dx: "Anticholinergic delirium", line: "Delirium from medications with anticholinergic activity, one of its most common causes; reduced acetylcholine is the core mechanism.", points: ["Stop the offending drugs.", "Physostigmine 1–2 mg IV or IM, repeated every 15–30 minutes if needed.", "Avoid phenothiazines and other anticholinergic agents."], link: { ch: "ch03", sec: "s3-del-treat", label: "Treating delirium" } },
      withdrawal: { label: "Most likely", dx: "Alcohol or sedative withdrawal delirium", line: "Withdrawal delirium tracks locus ceruleus noradrenergic overactivity; the EEG shows low-voltage fast activity rather than slowing.", points: ["Benzodiazepines (e.g., lorazepam) are the best use of this class in delirium.", "Watch for autonomic overactivity (dilated pupils, tachycardia, fever) and seizures.", "Give thiamine to prevent Wernicke–Korsakoff syndrome."], link: { ch: "ch03", sec: "s3-del-treat", label: "Treating delirium" } },
      beclouded: { label: "Most likely", dx: "Delirium superimposed on dementia (beclouded dementia)", line: "Existing dementia is a major risk factor for delirium; diagnose both when the dementia is documented.", points: ["Search for infection, medications, dehydration and other precipitants.", "Dementia patients react badly to benzodiazepines and alcohol.", "Expect slower recovery in older patients."], link: { ch: "ch03", sec: "s3-del-exam", label: "Delirium versus dementia" } },
      seizure: { label: "Investigate", dx: "Epilepsy-related confusion", line: "Postictal states look like a gradually clearing delirium; abrupt self-limited psychosis or delirium and unexplained falls suggest epilepsy, including adult-onset absence.", points: ["Look for tongue or cheek lacerations and incontinence.", "Obtain EEGs; a normal EEG does not exclude complex partial epilepsy (use sleep deprivation or 24–72 hour recordings).", "In known epilepsy, check seizure control, adherence and anticonvulsant side effects."], link: { ch: "ch03", sec: "s3-epilepsy", label: "Epilepsy" } },
      alzheimer: { label: "Most likely", dx: "Major or mild neurocognitive disorder due to Alzheimer disease", line: "Insidious decline in memory and learning (plus another domain for major NCD), steadily progressive without plateaus, with no mixed cause.", points: ["Probable with a genetic cause or all criteria; otherwise possible.", "Rule out reversible causes: thyroid, B12, depression, medications, subdural hematoma, NPH.", "Cholinesterase inhibitors (donepezil) for mild to moderate disease; memantine; avoid anticholinergics.", "Support caregivers; average survival about 8 years."], link: { ch: "ch03", sec: "s3-alz", label: "Alzheimer disease" } },
      ftd: { label: "Most likely", dx: "Frontotemporal neurocognitive disorder", line: "Middle-aged onset of disinhibition, apathy, loss of empathy, perseveration and hyperorality (behavioral variant) or language decline, with learning and memory relatively spared.", points: ["Imaging shows frontal and temporal atrophy; about half are familial.", "Klüver–Bucy features (hypersexuality, placidity, hyperorality) favor Pick disease over Alzheimer disease.", "Usually begins before 75 and is more common in men."], link: { ch: "ch03", sec: "s3-ftd-lewy", label: "Frontotemporal and Lewy body dementias" } },
      lewy: { label: "Most likely", dx: "Neurocognitive disorder with Lewy bodies", line: "Fluctuating cognition, recurrent well-formed visual hallucinations and parkinsonism that follows the cognitive decline.", points: ["REM sleep behavior disorder and severe neuroleptic sensitivity are suggestive features.", "Use antipsychotics with great caution.", "Capgras syndrome, falls and syncope are common."], link: { ch: "ch03", sec: "s3-ftd-lewy", label: "Frontotemporal and Lewy body dementias" } },
      vascular: { label: "Most likely", dx: "Vascular neurocognitive disorder", line: "Cognitive decline linked to cerebrovascular disease, often stepwise, mainly affecting complex attention and executive function.", points: ["Look for focal signs, carotid bruits, pseudobulbar palsy and imaging evidence; Binswanger disease affects subcortical white matter.", "Control blood pressure (higher end of normal), diabetes and lipids; antiplatelet or anticoagulant drugs; avoid β-blockers.", "Mixed Alzheimer and vascular disease is common (10–15%)."], link: { ch: "ch03", sec: "s3-vascular", label: "Vascular dementia" } },
      parkinson: { label: "Most likely", dx: "Neurocognitive disorder due to Parkinson disease", line: "Gradual subcortical decline (bradyphrenia) arising in established Parkinson disease.", points: ["Dementia affects 20–30% with Parkinson disease; another 30–40% have measurable impairment.", "If parkinsonism follows the cognitive decline instead, consider Lewy body NCD.", "For psychosis, pimavanserin is approved; clozapine has support."], link: { ch: "ch03", sec: "s3-subcortical", label: "Subcortical dementias" } },
      huntington: { label: "Most likely", dx: "Neurocognitive disorder due to Huntington disease", line: "Subcortical dementia with psychomotor slowing and choreoathetosis in an autosomal dominant disease.", points: ["Memory, language and insight are relatively kept early.", "High rates of depression and psychosis distinguish it from Alzheimer disease."], link: { ch: "ch03", sec: "s3-subcortical", label: "Subcortical dementias" } },
      hiv: { label: "Most likely", dx: "HIV-associated dementia", line: "Subcortical triad of memory and psychomotor slowing, depression and movement disorder in confirmed HIV infection.", points: ["Screen and track with the Modified HIV Dementia Scale.", "Exclude opportunistic infection, lymphoma, major depression and substances.", "Poor prognosis; early treatment may prevent progression; watch protease inhibitor interactions."], link: { ch: "ch03", sec: "s3-hiv", label: "HIV and AIDS" } },
      pugilistica: { label: "Most likely", dx: "Dementia due to repeated head trauma (dementia pugilistica)", line: "Emotional lability, dysarthria and impulsivity after years of repeated head blows.", points: ["Seen in boxers and in football players after repeated concussions.", "Use low starting doses and slow titration of psychotropics after brain injury."], link: { ch: "ch03", sec: "s3-subcortical", label: "Subcortical dementias" } },
      subdural: { label: "Investigate now", dx: "Subdural hematoma", line: "Falls can cause a subdural hematoma that mimics dementia or delirium and reverses after evacuation.", points: ["Obtain CT.", "Ask about dizziness on standing and earlier falls."], link: { ch: "ch03", sec: "s3-subcortical", label: "Head trauma and dementia" } },
      thyroid: { label: "Investigate", dx: "Hypothyroidism", line: "Myxedema madness: slowed thinking, depression, paranoia or delirium with hypothyroid signs.", points: ["Check thyroid function.", "About 10% keep residual neuropsychiatric symptoms after replacement."], link: { ch: "ch03", sec: "s3-endocrine", label: "Endocrine disorders" } },
      b12: { label: "Investigate", dx: "Vitamin B12 deficiency", line: "Apathy, depression, irritability or megaloblastic madness, with neurologic signs that may precede anemia.", points: ["Check B12 and RBC folate.", "Early, continued parenteral B12 arrests the neurologic damage."], link: { ch: "ch03", sec: "s3-nutrition", label: "Nutritional disorders" } },
      neurosyphilis: { label: "Investigate", dx: "Neurosyphilis (general paresis)", line: "Frontal personality change and poor judgment, grandiosity in 10–20%, Argyll Robertson pupils, tremor and dysarthria.", points: ["CSF: lymphocytosis, raised protein and positive VDRL.", "Seen again in some urban settings with AIDS."], link: { ch: "ch03", sec: "s3-infections", label: "Infectious diseases" } },
      korsakoff: { label: "Most likely", dx: "Korsakoff syndrome", line: "Amnesia from thiamine deficiency, with confabulation, apathy and frontal-type executive deficits, often after Wernicke encephalopathy.", points: ["Thiamine prevents further damage but seldom reverses severe amnesia.", "About a quarter to a third recover fully; a quarter do not improve.", "Distinguish from alcohol-induced persisting dementia (broader cognitive loss)."], link: { ch: "ch03", sec: "s3-amn-subtypes", label: "Amnestic syndromes" } },
      tga: { label: "Most likely", dx: "Transient global amnesia", line: "Abrupt loss of recent memory and new learning with clear sensorium, lasting 6–24 hours, with full recovery.", points: ["Probably temporal and diencephalic ischemia (vertebrobasilar).", "Recurs in about 20%; some patients have epilepsy.", "More hypertension and migraine than TIA patients."], link: { ch: "ch03", sec: "s3-amn-subtypes", label: "Amnestic syndromes" } },
      ect: { label: "Expected", dx: "ECT-related amnesia", line: "Retrograde amnesia for minutes before and anterograde amnesia after each treatment.", points: ["Anterograde amnesia usually clears within 5 hours.", "Mild deficits may last 1–2 months and resolve by 6–9 months."], link: { ch: "ch03", sec: "s3-amn-subtypes", label: "Amnestic syndromes" } },
      headamn: { label: "Most likely", dx: "Amnestic disorder due to head injury", line: "Retrograde amnesia before the injury plus amnesia for the event; usually improves over months.", points: ["The best predictor of outcome is improvement in the first week after regaining consciousness.", "Recovery continues for 6–12 months; screen for depression, impulsivity and aggression."], link: { ch: "ch03", sec: "s3-amn-subtypes", label: "Amnestic syndromes" } },
      amnestic: { label: "Most likely", dx: "Amnestic disorder due to another medical condition", line: "Hippocampal or diencephalic damage produces impaired new learning with relatively preserved other cognition.", points: ["Causes with a predilection for the hippocampus: thiamine deficiency, hypoglycemia, hypoxia (including carbon monoxide) and herpes simplex encephalitis.", "Course is usually static; give orienting prompts, a behavioral plan and supportive psychotherapy.", "Review all drugs, especially benzodiazepines and anticholinergics."], link: { ch: "ch03", sec: "s3-amn-ddx", label: "Causes and differential" } },
      dissociative: { label: "Consider", dx: "Dissociative amnesia", line: "Loss of orientation to self with selective memory loss, preserved new learning and a stressful trigger.", points: ["Organic amnesia rarely loses orientation to person.", "Explore stressors involving money, the law or relationships."], link: { ch: "ch03", sec: "s3-amn-ddx", label: "Causes and differential" } },
      factitious: { label: "Consider", dx: "Factitious disorder or malingering", line: "Inconsistent memory test results without an identifiable cause, with evidence of primary or secondary gain.", points: ["True dementia loses time and place before person, and recent before remote memory.", "Neuropsychological testing helps document inconsistency."], link: { ch: "ch03", sec: "s3-amn-ddx", label: "Causes and differential" } },
      cjd: { label: "Most likely", dx: "Creutzfeldt–Jakob disease", line: "Rapidly progressive dementia with myoclonus, ataxia, aphasia and psychiatric symptoms, ending in akinetic mutism and death.", points: ["EEG shows a slow irregular background with periodic complexes in nearly all.", "Confirmed by cortical pathology (spongiform change, neuronal loss, astrocytosis).", "No treatment; death usually within 6 months of diagnosis; household contacts are not at risk."], link: { ch: "ch03", sec: "s3-prion", label: "Prion diseases" } },
      vcjd: { label: "Consider", dx: "Variant Creutzfeldt–Jakob disease", line: "Young patients with depression, withdrawal, anxiety or paranoia followed by cerebellar signs, linked to bovine spongiform encephalopathy.", points: ["Tonsil biopsy with Western blot for PrPSc allows antemortem diagnosis.", "Death usually within 2–3 years."], link: { ch: "ch03", sec: "s3-prion", label: "Prion diseases" } },
      hsv: { label: "Investigate now", dx: "Herpes simplex encephalitis", line: "The most common focal encephalitis, involving frontal and temporal lobes with anosmia, olfactory and gustatory hallucinations and personality change.", points: ["Survivors often have memory loss, personality change and psychosis.", "Complex partial epilepsy may follow."], link: { ch: "ch03", sec: "s3-infections", label: "Infectious diseases" } },
      nmda: { label: "Consider", dx: "Anti-NMDA receptor encephalitis", line: "An autoimmune encephalitis that mimics schizophrenia, with dissociation, amnesia and vivid hallucinations, mostly in women.", points: ["IV immunoglobulin has proved useful.", "Recovery occurs but may require prolonged intensive care."], link: { ch: "ch03", sec: "s3-immune", label: "Lupus and autoimmune encephalitis" } },
      mci: { label: "Most likely", dx: "Mild cognitive impairment (mild neurocognitive disorder)", line: "Memory impairment for age and education with preserved general cognition and daily activities, not demented.", points: ["About 10–15% per year convert to Alzheimer-type dementia; some revert to normal.", "Hippocampal atrophy, APOE4 and CSF low Aβ42 with high tau signal higher risk.", "No approved drug: control vascular risk factors and check thyroid, B12, medications and depression."], link: { ch: "ch03", sec: "s3-mci-def", label: "Mild cognitive impairment" } },
      aging: { label: "Likely", dx: "Normal age-related forgetfulness", line: "Benign senescent forgetfulness or age-associated memory impairment without significant social or occupational impact.", points: ["Reassess if complaints grow, an informant reports decline, or function falls.", "Neuropsychological testing separates MCI from normal aging."], link: { ch: "ch03", sec: "s3-mci-course", label: "MCI differential" } },
      depcog: { label: "Consider", dx: "Depression-related cognitive dysfunction (pseudodementia)", line: "Prominent depression with detailed complaints of memory loss, 'don't know' answers, a datable onset and often prior episodes.", points: ["Compare with dementia: demented patients conceal deficits, give near-miss answers and worsen at night.", "Memory usually improves with antidepressant treatment.", "Depression and dementia can coexist; reassess cognition after treatment."], link: { ch: "ch03", sec: "s3-dem-ddx", label: "Dementia differential diagnosis" } }
    }
  },
  {
    id: "substance",
    chapter: "ch04",
    title: "Which substance syndrome?",
    summary: "Start from what you see (intoxication or overdose, withdrawal, symptoms that may be substance-induced, persisting perceptions, or a behavioral addiction) and follow the chapter's signs to the likely substance, its danger points and first steps.",
    caution: "A teaching aid built from Chapter 4, not a substitute for examination, toxicology and medical care. Polysubstance use is common, so one picture can hide another; check glucose, vital signs and other causes of altered mental status.",
    start: "state",
    nodes: {
      state: {
        q: "What best describes the presentation?",
        help: "Intoxication follows recent use; withdrawal follows stopping or cutting down heavy, prolonged use. Substance-induced disorders arise during or soon after intoxication or withdrawal.",
        options: [
          { label: "Signs of recent use: intoxication or overdose", to: "intox", note: "The picture suggests recent use or overdose." },
          { label: "Symptoms after stopping or cutting down", to: "withdraw", note: "Symptoms began after stopping or reducing use." },
          { label: "Depression, anxiety or psychosis in someone using heavily", to: "induced", note: "Psychiatric symptoms occur in the context of heavy use." },
          { label: "Visual disturbances returning long after hallucinogen use", to: "r:hppd", note: "Perceptual symptoms recur long after hallucinogen use." },
          { label: "Compulsive gambling without a substance", to: "r:gambling", note: "The addictive behavior is gambling." }
        ]
      },
      intox: {
        q: "Which picture fits best?",
        help: "Pupils, vital signs, nystagmus, breath and skin clues sort most intoxications.",
        options: [
          { label: "Coma, pinpoint pupils and slow breathing", to: "r:opioidod", note: "There is the triad of coma, miosis and respiratory depression." },
          { label: "Slurred speech, ataxia, nystagmus, alcohol on the breath", to: "r:alcintox", note: "Sedation with alcohol on the breath." },
          { label: "Slurred speech, ataxia, nystagmus, drowsiness without alcohol (pills found)", to: "r:sedintox", note: "Sedation without alcohol, with pills involved." },
          { label: "Agitation, tachycardia, hypertension, dilated pupils, paranoia", to: "r:stimintox", note: "There is sympathomimetic arousal with mydriasis." },
          { label: "Red eyes, mild tachycardia, appetite, slowed sense of time, anxiety", to: "r:cannabis", note: "Conjunctival injection with slowed time and anxiety." },
          { label: "Vivid visual distortions, synesthesia, dilated pupils, fear of going insane", to: "r:hallucinogen", note: "Perceptual distortion dominates with dilated pupils." },
          { label: "Violence, vertical or rotatory nystagmus, hypertension, hyperthermia", to: "r:pcp", note: "There is multidirectional nystagmus with violence and hypertension." },
          { label: "Rash around the nose and mouth, solvent odor or paint residue", to: "r:inhalant", note: "There are signs of sniffing or huffing." },
          { label: "Restless, flushed, talkative, sweating after coffee, pills or energy drinks", to: "r:caffeine", note: "Restless arousal follows heavy caffeine intake." },
          { label: "Irritable, hypomanic aggression in a bodybuilder", to: "r:aas", note: "Hypomanic aggression occurs with steroid use for muscle." }
        ]
      },
      withdraw: {
        q: "What was stopped, or what does the withdrawal look like?",
        help: "Alcohol and sedative withdrawal can kill; opioid withdrawal rarely does; stimulant withdrawal is mainly a mood crash.",
        options: [
          { label: "Alcohol", to: "alc", note: "The person stopped or cut down heavy drinking." },
          { label: "Yawning, tearing, runny nose, gooseflesh, dilated pupils, diarrhea, bone aches", to: "r:opioidwd", note: "The signs are those of opioid withdrawal." },
          { label: "Benzodiazepines or barbiturates", to: "r:sedwd", note: "A sedative-hypnotic was stopped." },
          { label: "A crash: sleeping a lot, ravenous, dysphoric, after stimulants", to: "r:stimwd", note: "There is a stimulant crash." },
          { label: "Irritable, can't concentrate, hungry, slower heart rate, after stopping smoking", to: "r:tobwd", note: "The picture is tobacco withdrawal." },
          { label: "Headache and fatigue 12–24 hours after skipping caffeine", to: "r:cafwd", note: "Headache and fatigue followed stopping caffeine." },
          { label: "Irritable, insomnia, vivid dreams, poor appetite, 1–2 weeks after daily cannabis", to: "r:canwd", note: "The picture is cannabis withdrawal." }
        ]
      },
      alc: {
        q: "Which picture, and how long since the last drink?",
        help: "Usual sequence: tremor at 6–8 hours, perceptual changes at 8–12, seizures at 12–24, delirium tremens within 72 hours (stages can be skipped).",
        options: [
          { label: "Tremor, sweating, anxiety, startle; alert and oriented", to: "r:alcwd", note: "There is uncomplicated withdrawal with tremor in an alert patient." },
          { label: "Threatening voices or other hallucinations with a clear sensorium", to: "r:hallucinosis", note: "Hallucinations occur with a clear sensorium." },
          { label: "A generalized seizure", to: "r:alcseizure", note: "A generalized seizure occurred." },
          { label: "Delirium with tremor, fever, tachycardia, sweating, often hospital day 3", to: "r:dts", note: "There is delirium with autonomic hyperactivity." },
          { label: "Confusion, gait ataxia and nystagmus or gaze palsy", to: "r:wernicke", note: "There is confusion with ataxia and eye signs." }
        ]
      },
      induced: {
        q: "Which description fits?",
        help: "Substance-induced syndromes usually clear with abstinence; an independent disorder predates use or persists well into abstinence.",
        options: [
          { label: "Depression in a heavy drinker, with no depression during past sober periods", to: "r:alcmood", note: "Depression appears only in the context of heavy drinking." },
          { label: "New panic attacks or social fears during heavy drinking or early abstinence", to: "r:alcanx", note: "Anxiety is tied to drinking or withdrawal." },
          { label: "Paranoid delusions and hallucinations in clear consciousness after stimulants", to: "r:stimpsych", note: "Paranoid psychosis follows stimulant use." },
          { label: "Symptoms began before the substance use or persist after weeks of abstinence", to: "r:independent", note: "Symptoms predate use or persist in abstinence." }
        ]
      }
    },
    results: {
      opioidod: { label: "Emergency", dx: "Opioid overdose", line: "Coma, pinpoint pupils and respiratory depression; death is from respiratory arrest.", points: ["Secure the airway and ventilate.", "Naloxone slowly IV, about 0.8 mg per 70 kg; repeat every few minutes; no response after 4–5 mg suggests a nonopioid cause.", "Naloxone is short-acting; re-sedation can follow with methadone or other long-acting opioids.", "Look for needle tracks; excess naloxone precipitates withdrawal."], link: { ch: "ch04", sec: "s4-opi-overdose", label: "Opioid overdose" } },
      alcintox: { label: "Most likely", dx: "Alcohol intoxication", line: "Recent drinking with maladaptive behavior and at least one physiologic sign.", points: ["Legal intoxication is 80–100 mg/dL; at 200–300 mg/dL nystagmus, slurring and blackouts; over 300 mg/dL vital signs are impaired.", "No impairment at about 150 mg/dL implies tolerance.", "Check glucose (hypoglycemia), head injury and other drugs; give thiamine."], link: { ch: "ch04", sec: "s4-alc-intox", label: "Alcohol intoxication" } },
      sedintox: { label: "Most likely", dx: "Sedative, hypnotic or anxiolytic intoxication", line: "Incoordination, dysarthria, nystagmus, memory and gait problems; confirm with blood toxicology.", points: ["Benzodiazepines alone are rarely lethal (about 200:1 ratio) but deadly with alcohol; flumazenil reverses them.", "Barbiturates are lethal at about ten times the usual dose (respiratory depression).", "Assess for suicidal intent and coingestants."], link: { ch: "ch04", sec: "s4-sed-overdose", label: "Sedative overdose and intoxication" } },
      stimintox: { label: "Most likely", dx: "Stimulant intoxication (cocaine or amphetamine)", line: "Euphoria or agitation with tachycardia, hypertension and mydriasis; paranoia at high doses.", points: ["Watch for chest pain, arrhythmias, stroke, aortic dissection and seizures.", "Delirium can follow high doses with sleep deprivation.", "Psychosis responds to short-term antipsychotics such as haloperidol."], link: { ch: "ch04", sec: "s4-stim-dx", label: "Stimulant intoxication" } },
      cannabis: { label: "Most likely", dx: "Cannabis intoxication", line: "Euphoria or anxiety with red eyes, mild tachycardia, dry mouth, increased appetite and slowed time.", points: ["Anxiety and panic are the commonest adverse effects, especially in inexperienced users; reassure, and give a benzodiazepine if needed.", "Oral cannabis acts later and is harder to dose.", "Motor impairment lasts 8–12 hours: no driving."], link: { ch: "ch04", sec: "s4-can-clinical", label: "Cannabis intoxication" } },
      hallucinogen: { label: "Most likely", dx: "Hallucinogen intoxication", line: "Perceptual changes, synesthesia and depersonalization with dilated pupils, tachycardia, sweating and tremor.", points: ["Talk the patient down in a quiet room: the effects are drug-induced and will pass.", "Diazepam 20 mg orally for severe anxiety; avoid antipsychotics if possible.", "Differential: anticholinergic or amphetamine intoxication, alcohol withdrawal."], link: { ch: "ch04", sec: "s4-hal-treat", label: "Treating hallucinogen intoxication" } },
      pcp: { label: "Emergency", dx: "Phencyclidine (PCP) intoxication", line: "Horizontal, vertical and rotatory nystagmus with hypertension, hyperthermia, agitation or violence.", points: ["Minimize stimulation in a quiet room; benzodiazepines or antipsychotics for sedation; avoid anticholinergic drugs.", "Activated charcoal; no urinary acidification (rhabdomyolysis and renal failure).", "Observe for many hours: levels fluctuate; psychosis can last up to 2 weeks."], link: { ch: "ch04", sec: "s4-pcp", label: "PCP and ketamine" } },
      inhalant: { label: "Most likely", dx: "Inhalant intoxication", line: "Euphoria and disinhibition with nystagmus, diplopia, ataxia and slurred speech; rash and odor around the face.", points: ["Supportive care; watch for arrhythmias, bronchospasm and coma.", "Avoid benzodiazepines and other sedatives; cautious haloperidol for severe agitation.", "Draw blood early (detectable 4–10 hours); screen for conduct disorder and maltreatment."], link: { ch: "ch04", sec: "s4-inh-treat", label: "Inhalant treatment" } },
      caffeine: { label: "Most likely", dx: "Caffeine intoxication", line: "Usually above 250 mg: restlessness, nervousness, flushing, diuresis, GI upset, twitching, insomnia, rambling speech.", points: ["Over 1 g: arrhythmias, tinnitus, agitation; over 10 g: seizures and death.", "Exclude hyperthyroidism, pheochromocytoma and other stimulants.", "Taper intake about 10% every few days using a diary."], link: { ch: "ch04", sec: "s4-caf-clinical", label: "Caffeine disorders" } },
      aas: { label: "Most likely", dx: "Anabolic steroid-induced mood disorder", line: "Euphoria, irritability, aggression and hypomanic or manic symptoms during AAS cycles.", points: ["Assess for violence and other drug use (stimulants, nalbuphine, opioids).", "Expect depression with suicide risk when the cycle ends.", "Look for muscle dysmorphia; consider CBT or SSRIs."], link: { ch: "ch04", sec: "s4-aas", label: "Anabolic-androgenic steroids" } },
      alcwd: { label: "Most likely", dx: "Alcohol withdrawal", line: "Tremulousness, sweating, anxiety, mydriasis, tachycardia and startle in an alert patient, usually 6–8 hours after the last drink.", points: ["Examine fully; give rest, nutrition and thiamine.", "Benzodiazepine on day 1, then taper about 20% a day (e.g., chlordiazepoxide); carbamazepine 800 mg/day is an alternative.", "Never IM diazepam or chlordiazepoxide; beta-blockers and clonidine do not prevent seizures or DTs."], link: { ch: "ch04", sec: "s4-alc-detox", label: "Alcohol detoxification" } },
      hallucinosis: { label: "Most likely", dx: "Alcohol-induced psychotic disorder (alcoholic hallucinosis)", line: "Usually threatening voices during heavy drinking or withdrawal, with a clear sensorium.", points: ["Treat like withdrawal: benzodiazepines, nutrition, fluids; add an antipsychotic if it persists.", "Usually clears within a week; if it lingers, consider another psychotic disorder.", "With intact reality testing, code withdrawal with perceptual disturbances."], link: { ch: "ch04", sec: "s4-alc-induced", label: "Alcohol-induced disorders" } },
      alcseizure: { label: "Most likely", dx: "Alcohol withdrawal seizure", line: "Generalized tonic–clonic seizures 12–24 hours after drinking stops, often a second one 3–6 hours later.", points: ["Rule out head injury, CNS infection, tumor, stroke and low glucose, sodium or magnesium.", "Benzodiazepines are the treatment of choice; anticonvulsants add no benefit.", "Watch closely for progression to delirium tremens."], link: { ch: "ch04", sec: "s4-alc-withdrawal", label: "Withdrawal seizures" } },
      dts: { label: "Emergency", dx: "Alcohol withdrawal delirium (delirium tremens)", line: "Delirium within a week of stopping with tactile hallucinations, fever, tachycardia, hypertension and sweating; 20% mortality untreated.", points: ["Search for the medical illness behind it (pneumonia, liver, renal or heart disease).", "Chlordiazepoxide 50–100 mg every 4 hours orally or IV lorazepam; fluids, high-calorie diet, vitamins and thiamine.", "Prefer seclusion to restraints; haloperidol for severe agitation can lower the seizure threshold."], link: { ch: "ch04", sec: "s4-alc-detox", label: "Severe withdrawal" } },
      wernicke: { label: "Emergency", dx: "Wernicke encephalopathy", line: "Acute confusion, gait ataxia and eye signs (nystagmus, lateral rectus or gaze palsy) from thiamine deficiency.", points: ["Large doses of parenteral thiamine; it is reversible and prevents Korsakoff syndrome.", "Add 100 mg thiamine to each liter of IV glucose.", "If no response to thiamine, consider alcoholic pellagra (niacin)."], link: { ch: "ch04", sec: "s4-alc-related-tx", label: "Treating alcohol-related disorders" } },
      opioidwd: { label: "Most likely", dx: "Opioid withdrawal", line: "Yawning, lacrimation, rhinorrhea, piloerection, mydriasis, diarrhea, cramps and bone aches; rarely fatal.", points: ["Heroin: starts 6–8 hours, peaks day 2–3; methadone: starts 1–3 days, lasts 10–14 days.", "Methadone (20–30 mg start) or buprenorphine (2 mg doses once withdrawal is at least moderate) for supervised withdrawal or maintenance.", "Clonidine for autonomic symptoms; loperamide, NSAIDs and hypnotics for the rest."], link: { ch: "ch04", sec: "s4-opi-detox", label: "Medically supervised withdrawal" } },
      sedwd: { label: "Warning", dx: "Sedative, hypnotic or anxiolytic withdrawal", line: "Anxiety, insomnia, tremor, sensory hypersensitivity, and seizures or delirium, especially with barbiturates.", points: ["Benzodiazepine onset 2–3 days (5–6 for diazepam); barbiturate seizures on day 2–3, always before delirium.", "Stabilize, then taper (benzodiazepines: 30% then 10–25% every few days; barbiturates: pentobarbital test dose, phenobarbital substitution).", "Hospitalize for high doses, medical or psychiatric problems, or polysubstance use."], link: { ch: "ch04", sec: "s4-sed-treat", label: "Sedative withdrawal treatment" } },
      stimwd: { label: "Most likely", dx: "Stimulant withdrawal", line: "The crash: dysphoria, fatigue, hypersomnia with nightmares, insatiable hunger; peaks in 2–4 days, resolves in about a week.", points: ["Assess suicide risk: depression is the most serious symptom.", "An outpatient trial is usually reasonable; no drug reliably helps.", "Frequent unscheduled urine tests and relapse prevention therapy."], link: { ch: "ch04", sec: "s4-stim-dx", label: "Stimulant withdrawal" } },
      tobwd: { label: "Most likely", dx: "Tobacco withdrawal", line: "Craving, irritability, poor concentration, insomnia, slower heart rate, increased appetite and weight gain; peaks at 24–48 hours.", points: ["Nicotine replacement doubles quit rates; bupropion or varenicline are alternatives.", "Follow up 2–3 days after the quit date.", "Combine medication with behavior therapy."], link: { ch: "ch04", sec: "s4-tob-dx", label: "Tobacco withdrawal" } },
      cafwd: { label: "Most likely", dx: "Caffeine withdrawal", line: "Headache and fatigue (also irritability, mild depression, nausea, craving) beginning 12–24 hours after the last dose.", points: ["Analgesics such as aspirin for headache.", "Taper over 7–14 days before procedures or when stopping.", "Ask about weekday-only intake and hidden sources."], link: { ch: "ch04", sec: "s4-caf-clinical", label: "Caffeine withdrawal" } },
      canwd: { label: "Most likely", dx: "Cannabis withdrawal", line: "Irritability, craving, anxiety, insomnia, vivid dreams, low appetite and weight loss within 1–2 weeks of stopping daily use.", points: ["Short-term anxiolytic may help some patients.", "Support abstinence with education, therapy and urine monitoring (detectable up to 4 weeks).", "Treat an underlying depression if present."], link: { ch: "ch04", sec: "s4-can-treat", label: "Cannabis treatment" } },
      alcmood: { label: "Most likely", dx: "Alcohol-induced depressive disorder", line: "Heavy drinking mimics major depression, but sadness improves within days to a month of abstinence.", points: ["Only 10–15% of alcoholic persons have had major depression when not drinking heavily.", "Educate and use CBT; wait 2–4 weeks of abstinence before antidepressants.", "Assess suicide risk: alcohol use disorder carries a high suicide rate."], link: { ch: "ch04", sec: "s4-alc-induced", label: "Alcohol-induced disorders" } },
      alcanx: { label: "Most likely", dx: "Alcohol-induced anxiety disorder", line: "Panic attacks during withdrawal (almost 80% report them) and social avoidance in early abstinence that fade over weeks.", points: ["Check state markers (GGT, CDT) and collateral history when panic starts at an unusual age.", "Treat withdrawal and support abstinence; symptoms usually disappear.", "Diagnose an anxiety disorder only if it predates drinking or persists in abstinence."], link: { ch: "ch04", sec: "s4-alc-induced", label: "Alcohol-induced disorders" } },
      stimpsych: { label: "Most likely", dx: "Stimulant-induced psychotic disorder", line: "Paranoid delusions and hallucinations (up to 50% of misusers), formication with cocaine, in clear consciousness.", points: ["Short-term haloperidol and sleep; symptoms usually resolve within days of abstinence.", "More common with IV use and crack and in men.", "Persisting psychosis after abstinence needs reassessment."], link: { ch: "ch04", sec: "s4-stim-induced", label: "Stimulant-induced disorders" } },
      independent: { label: "Consider", dx: "An independent psychiatric disorder with comorbid substance use", line: "Symptoms that predate use or persist well into abstinence suggest a co-occurring disorder, which is common.", points: ["Up to 50% of people with addictions have another psychiatric disorder; antisocial personality disorder in 35–60%.", "Treat both, preferably with integrated care by the same team.", "Stabilize the psychiatric disorder before rehabilitation."], link: { ch: "ch04", sec: "s4-gen-comorbid", label: "Comorbidity" } },
      hppd: { label: "Most likely", dx: "Hallucinogen-persisting perception disorder", line: "Flashbacks of intoxication perceptions (trails, halos, afterimages, geometric images), usually with insight.", points: ["Rule out migraine, seizures, PTSD and visual disorders.", "Clonazepam or other long-acting benzodiazepines; antipsychotics may worsen it.", "Avoid cannabis (even passive), caffeine, alcohol and stress; watch for panic and depression."], link: { ch: "ch04", sec: "s4-hal-dx", label: "Hallucinogen diagnoses" } },
      gambling: { label: "Consider", dx: "Gambling disorder", line: "Four or more of nine criteria in 12 months (chasing losses, higher stakes, lying, failed attempts to stop), not better explained by mania.", points: ["Screen for depression, bipolar disorder, substance use and suicidality.", "Gamblers Anonymous, family therapy, CBT; insight therapy after 3 months away from gambling.", "Ask about dopamine agonists in Parkinson disease."], link: { ch: "ch04", sec: "s4-gamble", label: "Gambling disorder" } }
    }
  },
  {
    id: "trauma",
    chapter: "ch10",
    title: "Which trauma or stressor disorder?",
    summary: "Start from the kind of stressor (an extreme trauma, an everyday stressor or a loss) and follow the timing and symptom counts to PTSD, acute stress disorder, an adjustment disorder subtype or a look-alike.",
    caution: "A teaching aid built from Chapter 10, not a substitute for a full assessment. Check for head injury, substances and suicide risk in every patient after trauma or a major stressor.",
    start: "stressor",
    nodes: {
      stressor: {
        q: "What kind of stressor came before the symptoms?",
        help: "PTSD and acute stress disorder need exposure to actual or threatened death, serious injury or sexual violence: experienced, witnessed in person, learned of in someone close, or repeated exposure to details. Media exposure does not count.",
        options: [
          { label: "An extreme trauma: death, serious injury or sexual violence, experienced, witnessed or learned of in someone close", to: "timing", note: "There was a qualifying traumatic exposure." },
          { label: "Distressing images seen only through television, the internet or photos", to: "r:media", note: "Exposure was only through media." },
          { label: "An everyday stressor: job loss, divorce, illness, money or relationship problems", to: "adjfit", note: "The stressor is not a qualifying trauma." },
          { label: "The death of a loved one, with grief", to: "r:bereavement", note: "The stressor is a bereavement." }
        ]
      },
      timing: {
        q: "How long have symptoms lasted since the trauma?",
        help: "Acute stress disorder spans 3 days to 1 month; PTSD needs more than a month.",
        options: [
          { label: "Less than 3 days", to: "r:early", note: "Symptoms have lasted under 3 days." },
          { label: "3 days to 1 month", to: "asd", note: "Symptoms have lasted between 3 days and 1 month." },
          { label: "More than 1 month", to: "ptsd", note: "Symptoms have lasted more than a month." }
        ]
      },
      asd: {
        q: "How many symptoms are present across intrusion, negative mood, dissociation, avoidance and arousal?",
        help: "Acute stress disorder needs nine or more symptoms from any of the five categories; not every category is required.",
        options: [
          { label: "Nine or more", to: "r:asd", note: "Nine or more symptoms are present." },
          { label: "Fewer than nine, but distressing and impairing", to: "r:subthreshold", note: "Symptoms fall below the acute stress disorder threshold." }
        ]
      },
      ptsd: {
        q: "Which description fits?",
        help: "PTSD needs at least one intrusion, one avoidance, two negative mood or cognition and two arousal symptoms, with distress or impairment, not due to a substance or medical condition.",
        options: [
          { label: "All four clusters met, beginning within 6 months of the trauma", to: "dissoc", note: "Full PTSD criteria are met." },
          { label: "All four clusters met, but full criteria first reached 6 months or more after the trauma", to: "r:delayed", note: "Full criteria were reached only after 6 months." },
          { label: "A head injury, seizures, or alcohol or drug use may explain or worsen the symptoms", to: "r:medical", note: "A medical or substance contributor is possible." },
          { label: "Anxiety and arousal without trauma-linked intrusions or avoidance", to: "r:anxiety", note: "There are no intrusions or avoidance tied to the trauma." },
          { label: "Distressing symptoms that fall short of full PTSD criteria", to: "r:subthreshold", note: "Criteria for PTSD are not fully met." }
        ]
      },
      dissoc: {
        q: "Are there persistent depersonalization or derealization experiences?",
        help: "The specifier 'with dissociative symptoms' covers feeling outside one's body or that surroundings are unreal.",
        options: [
          { label: "Yes", to: "r:ptsd_dissoc", note: "There are dissociative symptoms." },
          { label: "No", to: "r:ptsd", note: "There are no prominent dissociative symptoms." }
        ]
      },
      adjfit: {
        q: "How do the symptoms relate to the stressor?",
        help: "Adjustment disorder begins within 3 months of the stressor, causes distress out of proportion to it or marked impairment, and resolves within 6 months after the stressor ends.",
        options: [
          { label: "Began within 3 months; distress out of proportion or impairing", to: "adjtype", note: "Symptoms began within 3 months and are excessive or impairing." },
          { label: "Meet criteria for major depression or another specific disorder", to: "r:other", note: "Criteria for another specific disorder are met." },
          { label: "Proportionate to the stressor, with no real impairment", to: "r:normal", note: "The reaction is within expectable bounds." }
        ]
      },
      adjtype: {
        q: "What dominates the picture?",
        help: "Name the subtype by the main symptoms.",
        options: [
          { label: "Low mood, tearfulness, hopelessness", to: "r:adj_dep", note: "Depressed mood dominates." },
          { label: "Worry, nervousness, restlessness", to: "r:adj_anx", note: "Anxiety dominates." },
          { label: "Both anxiety and low mood", to: "r:adj_mixed", note: "Anxiety and depressed mood are both present." },
          { label: "Fighting, rule-breaking, impulsive or violent acts", to: "r:adj_conduct", note: "Conduct disturbance dominates." },
          { label: "Both emotional symptoms and conduct problems", to: "r:adj_both", note: "Emotional and conduct symptoms are mixed." },
          { label: "Massive denial or refusing treatment after a medical diagnosis", to: "r:adj_unspec", note: "The reaction is atypical (denial or noncompliance)." }
        ]
      }
    },
    results: {
      ptsd: { label: "Most likely", dx: "Posttraumatic stress disorder", line: "Intrusion, avoidance, negative mood or cognition and hyperarousal lasting more than a month after a qualifying trauma.", points: ["Screen for comorbid depression, substance use and suicide risk; two-thirds have at least two other disorders.", "First-line medication: SSRIs (sertraline, paroxetine); prazosin for nightmares; avoid benzodiazepines.", "Trauma-focused CBT (prolonged exposure), cognitive processing therapy or EMDR; group and family therapy."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "Diagnosing PTSD" } },
      ptsd_dissoc: { label: "Most likely", dx: "PTSD with dissociative symptoms", line: "Full PTSD with persistent depersonalization or derealization.", points: ["Peritraumatic dissociation is a risk factor for PTSD.", "Distinguish from dissociative disorders, which usually show less avoidance and arousal.", "Treat as PTSD, pacing trauma work so reexperiencing does not overwhelm."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "PTSD specifiers" } },
      delayed: { label: "Most likely", dx: "PTSD with delayed expression", line: "Full criteria first met 6 months or more after the trauma.", points: ["Ask about earlier partial symptoms and recent stress that intensified them.", "Treatment is the same as for PTSD.", "Check for new comorbid depression or substance use."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "PTSD specifiers" } },
      asd: { label: "Most likely", dx: "Acute stress disorder", line: "Nine or more symptoms of intrusion, negative mood, dissociation, avoidance or arousal between 3 days and 1 month after trauma.", points: ["Watch for self-medication with alcohol and for suicidal ideation.", "Reassess after a month: persisting symptoms may become PTSD.", "Exclude substances, medical causes and brief psychotic disorder."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "Acute stress disorder" } },
      early: { label: "For now", dx: "An immediate stress reaction", line: "Shock, nightmares and intrusive thoughts are common right after trauma; acute stress disorder cannot be diagnosed before 3 days.", points: ["ICD-10's acute stress reaction (daze, narrowed attention, panic-like signs) usually resolves within hours or days.", "Offer support, check for injuries (especially head injury) and substance use.", "Reassess if symptoms continue beyond 3 days."], link: { ch: "ch10", sec: "s10-comorbid-course", label: "Course and prognosis" } },
      subthreshold: { label: "Consider", dx: "Adjustment disorder or other specified trauma- or stressor-related disorder", line: "When the response to an extreme stressor does not meet acute stress disorder or PTSD thresholds, adjustment disorder is appropriate; other specified states why criteria are not met.", points: ["Treat with psychotherapy; use medication briefly for insomnia or anxiety.", "Monitor for progression to full PTSD.", "Assess suicide risk."], link: { ch: "ch10", sec: "s10-ddx", label: "Differential diagnosis" } },
      medical: { label: "Investigate", dx: "A medical or substance contributor", line: "Traumatic brain injury, epilepsy, alcohol and other substance use, intoxication and withdrawal can cause or worsen posttraumatic symptoms.", points: ["Take a careful history and examination, especially for head injury during the trauma.", "Reassess after intoxication or withdrawal effects wear off.", "PTSD can coexist; treat both."], link: { ch: "ch10", sec: "s10-ddx", label: "Differential diagnosis" } },
      anxiety: { label: "Consider", dx: "Panic disorder or generalized anxiety disorder", line: "Prominent anxiety and arousal without intrusions or avoidance tied to the trauma point away from PTSD.", points: ["Review the time course relative to the trauma.", "Also consider major depression, borderline personality disorder, dissociative and factitious disorders."], link: { ch: "ch10", sec: "s10-ddx", label: "Differential diagnosis" } },
      media: { label: "Not PTSD", dx: "Exposure does not meet the trauma criterion", line: "Exposure through media, electronics, movies or photos does not qualify for PTSD or acute stress disorder.", points: ["Consider adjustment disorder or an anxiety or depressive disorder if symptoms are impairing.", "Ask about any direct or close-person exposure that may have been missed."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "PTSD criteria" } },
      bereavement: { label: "Usually", dx: "Uncomplicated bereavement", line: "Grief can impair function temporarily but stays within expectable bounds, so it is not adjustment disorder.", points: ["Consider major depression if criteria are met.", "If the death was violent or sudden and witnessed, consider PTSD criteria."], link: { ch: "ch10", sec: "s10-ddx", label: "Adjustment disorder differential" } },
      other: { label: "Diagnose instead", dx: "Another specific disorder", line: "If major depression, an anxiety disorder, brief psychotic disorder, somatic symptom disorder, a substance or conduct disorder explains the response, diagnose that instead.", points: ["Adjustment disorder excludes exacerbation of an existing mental disorder.", "A personality disorder may coexist with adjustment disorder."], link: { ch: "ch10", sec: "s10-ddx", label: "Differential diagnosis" } },
      normal: { label: "No disorder", dx: "An expectable reaction to stress", line: "Distress proportionate to the stressor without significant impairment is not a disorder.", points: ["Offer support and follow-up.", "Reassess if symptoms escalate or function declines."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorders" } },
      adj_dep: { label: "Most likely", dx: "Adjustment disorder with depressed mood", line: "Low mood, tearfulness, hopelessness, poor sleep or low self-esteem after a stressor, short of major depression.", points: ["Assess suicide risk: past attempts and recent suicidality are common.", "Psychotherapy is the treatment of choice; SSRIs may help subthreshold depression.", "Distinguish from major depression and uncomplicated bereavement."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_anx: { label: "Most likely", dx: "Adjustment disorder with anxiety", line: "Generalized or situational anxiety and restlessness after a stressor.", points: ["Distinguish from anxiety disorders.", "Psychotherapy first; short-term medication for severe anxiety or insomnia."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_mixed: { label: "Most likely", dx: "Adjustment disorder with mixed anxiety and depressed mood", line: "Features of both, without meeting criteria for an anxiety or depressive disorder.", points: ["Assess suicide risk.", "Psychotherapy and crisis intervention; brief medication for specific symptoms."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_conduct: { label: "Most likely", dx: "Adjustment disorder with disturbance of conduct", line: "Impulsivity, lack of insight and violent behavior after a stressor.", points: ["Distinguish from conduct disorder and antisocial personality disorder by the prior pattern.", "Adolescents recover more slowly and may later develop mood or substance disorders."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_both: { label: "Most likely", dx: "Adjustment disorder with mixed disturbance of emotions and conduct", line: "Emotional symptoms with conduct problems such as heavy drinking, hostility or fraud.", points: ["Try to choose one subtype for clarity when possible.", "Check substance use, homicidal and suicidal ideation."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_unspec: { label: "Most likely", dx: "Adjustment disorder, unspecified", line: "Atypical maladaptive reactions such as massive denial, severe noncompliance or withdrawal after a medical diagnosis, without marked mood or anxiety.", points: ["Make sure the symptoms are not part of the illness or its treatment.", "Supportive and problem-solving psychotherapy; involve the medical team."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } }
    }
  },
  {
    id: "dissociative",
    chapter: "ch11",
    title: "Which dissociative disorder?",
    summary: "Start from the leading complaint (lost memory, feeling unreal, separate identities, trance or odd answers), rule out medical, substance and other psychiatric causes, and follow the pattern to a dissociative diagnosis or a look-alike.",
    caution: "A teaching aid built from Chapter 11, not a substitute for a full assessment. Every dissociative presentation needs a medical and neurologic workup (labs, drug screen, EEG when indicated) and a check for suicide risk and ongoing abuse.",
    start: "core",
    nodes: {
      core: {
        q: "What is the leading problem?",
        help: "Dissociation is a disruption of the normally integrated functions of memory, identity, perception and consciousness. Pick the feature that dominates the presentation.",
        options: [
          { label: "Gaps in memory for important personal information", to: "amn_cause", note: "Memory loss is the main complaint." },
          { label: "Feeling detached from oneself or that the surroundings are unreal", to: "dp_cause", note: "Depersonalization or derealization." },
          { label: "Separate identities or parts that take control, with lost time, voices or unexplained behavior", to: "did_check", note: "Possible alternate identities." },
          { label: "An altered state of consciousness or a sense of being taken over by a spirit or another being", to: "trance_culture", note: "Trance or possession." },
          { label: "Answers that just miss the mark (2 + 2 = 5) with clouded consciousness", to: "r:ganser", note: "Approximate answers." },
          { label: "Drastic change in identity, values and beliefs after captivity, a cult or prolonged coercion", to: "r:brainwash", note: "Coercive persuasion." }
        ]
      },
      amn_cause: {
        q: "Is there a medical, neurologic or substance explanation for the memory loss?",
        help: "Dissociative amnesia is diagnosed only when the loss is not due to a substance or a neurologic or other medical condition and is too extensive for ordinary forgetfulness.",
        options: [
          { label: "Clear head injury with unconsciousness or objective signs of brain injury", to: "r:headinjury" },
          { label: "Sudden loss of new learning with retrograde gaps, identity preserved, anxious repeated questions; older patient with vascular risk factors", to: "r:tga" },
          { label: "Clear ictal events, or wandering with confusion, perseveration and repetitive movements", to: "r:seizure" },
          { label: "Intoxication or a medication (alcohol, sedative-hypnotics, PCP, anticholinergics, steroids, β-blockers and others)", to: "r:amn_substance" },
          { label: "Memory loss is part of wider problems with cognition, language and attention", to: "r:neurocog" },
          { label: "Gaps limited to the period around ECT", to: "r:ect" },
          { label: "None of these: the workup is unrevealing", to: "amn_context" }
        ]
      },
      amn_context: {
        q: "What is the context of the amnesia?",
        help: "No test reliably separates genuine from feigned amnesia, so the circumstances matter. Dissociative identity disorder shows multiple complex amnesias rather than a single gap.",
        options: [
          { label: "Amnesia that helps escape legal, financial, personal or military trouble, or covers only bad behavior", to: "r:malinger" },
          { label: "The chief complaint is 'recovering repressed memories'", to: "r:recovered" },
          { label: "Recurrent blackouts, possessions not remembered being acquired, fluctuating skills and habits", to: "did_check" },
          { label: "Amnesia only as part of the immediate reaction to a trauma, with intrusions, avoidance and arousal", to: "r:ptsd" },
          { label: "A stress-related loss of personal memory that stands on its own", to: "amn_travel" }
        ]
      },
      amn_travel: {
        q: "Was there sudden, unexpected travel away from home or work?",
        help: "Fugue is a subtype of dissociative amnesia in DSM-5: purposeful travel or bewildered wandering with confusion about identity or a new identity.",
        options: [
          { label: "Yes, with confusion about identity or a new identity", to: "r:fugue" },
          { label: "No travel", to: "amn_type" }
        ]
      },
      amn_type: {
        q: "What pattern does the memory loss follow?",
        help: "The pattern names the type of dissociative amnesia.",
        options: [
          { label: "Everything during a circumscribed period", to: "r:localized" },
          { label: "Some but not all events of a circumscribed period", to: "r:selective" },
          { label: "The person's entire life", to: "r:generalized" },
          { label: "Each new event as it happens", to: "r:continuous" },
          { label: "A category of information, such as everything about the family or one person", to: "r:systematized" }
        ]
      },
      dp_cause: {
        q: "Is there a medical, neurologic or substance cause?",
        help: "Depersonalization is common with intoxication, withdrawal and neurologic disease. Organic depersonalization tends to be mainly sensory, without elaborate personal meanings.",
        options: [
          { label: "Intoxication, withdrawal or a medication (persistent cases can follow marijuana, cocaine and other stimulants)", to: "r:dp_substance" },
          { label: "Seizures, brain tumor, postconcussion syndrome, migraine, vertigo, Ménière disease or a metabolic problem", to: "r:dp_neuro" },
          { label: "None found after medical and neurologic evaluation", to: "dp_psych" }
        ]
      },
      dp_psych: {
        q: "Does another mental disorder account for the symptoms?",
        help: "Depersonalization occurs with panic attacks, phobias, PTSD, acute stress disorder, depression, schizophrenia, illness anxiety disorder and other dissociative disorders.",
        options: [
          { label: "Reality testing is lost: delusions or hallucinations", to: "r:dp_psychosis" },
          { label: "It occurs only during panic attacks, depressive episodes or a posttraumatic reaction", to: "r:dp_other" },
          { label: "It comes with separate identities, lost time or switching", to: "did_check" },
          { label: "Persistent or recurrent on its own, reality testing intact, with distress or impairment", to: "r:dpdr" }
        ]
      },
      did_check: {
        q: "Could the identity experiences be normal for the setting?",
        help: "DSM-5 excludes identity changes that are part of accepted cultural or religious practice, and imaginary playmates or fantasy play in children.",
        options: [
          { label: "Part of an accepted cultural or religious practice", to: "r:cultural" },
          { label: "A young child's imaginary companion or daydream that does not take control of behavior", to: "r:imaginary" },
          { label: "Neither", to: "did_genuine" }
        ]
      },
      did_genuine: {
        q: "How does the patient relate to the symptoms?",
        help: "Patients with genuine DID are usually confused, conflicted and ashamed. Imitated or malingered cases show little dysphoria and convenient amnesia.",
        options: [
          { label: "Ashamed and distressed; amnesia across many areas of life; collateral information supports it", to: "did_full" },
          { label: "Little distress; amnesia only for bad behavior; symptoms amplified when observed; refuses collateral contacts", to: "r:did_feigned" }
        ]
      },
      did_full: {
        q: "Are there two or more distinct personality states with recurrent memory gaps?",
        help: "DID requires disrupted identity with two or more personality states, each with its own sense of self and agency, plus gaps in recall of everyday events, personal information or trauma.",
        options: [
          { label: "Yes: distinct states with their own sense of self, and recurrent memory lapses", to: "r:did" },
          { label: "Identity disturbance and dissociative symptoms that fall short of full criteria", to: "r:osdd" }
        ]
      },
      trance_culture: {
        q: "Is the state part of an accepted cultural or religious practice?",
        help: "Trance and possession states are a normal part of many cultural and religious practices and are diagnosed only when they are not.",
        options: [
          { label: "Yes, accepted in the person's culture or religion", to: "r:cultural" },
          { label: "No, and it causes distress or impairment", to: "trance_type" }
        ]
      },
      trance_type: {
        q: "Is the usual identity replaced by another?",
        help: "Both forms need partial or full amnesia and must not occur only during a psychotic episode or from a substance or medical illness.",
        options: [
          { label: "Replaced by a spirit, deity or another person, with stereotyped behavior or a sense of being controlled", to: "r:possession" },
          { label: "Consciousness or the sense of identity is altered, without a replacement identity", to: "r:trance" }
        ]
      }
    },
    results: {
      localized: { label: "Most likely", dx: "Dissociative amnesia, localized", line: "Loss of all memory for events during a circumscribed period, usually around a trauma.", points: ["Exclude intoxication and medical causes; ask about lost time and blackouts.", "Phase-oriented treatment; cognitive therapy and hypnosis can open the way to recall."], link: { ch: "ch11", sec: "s11-amnesia", label: "Dissociative amnesia" } },
      selective: { label: "Most likely", dx: "Dissociative amnesia, selective", line: "Some but not all events of a circumscribed period are lost.", points: ["Often tied to a specific trauma; check for PTSD.", "Hypnosis allows controlled, titrated recall."], link: { ch: "ch11", sec: "s11-amnesia", label: "Dissociative amnesia" } },
      generalized: { label: "Most likely", dx: "Dissociative amnesia, generalized", line: "Loss of memory for the person's entire life.", points: ["Classic, dramatic presentation after extreme trauma; risk of depression and suicidal ideation.", "Educate and suggest memory will return as tolerated; hypnosis or a drug-facilitated interview if needed."], link: { ch: "ch11", sec: "s11-tx-amnesia", label: "Treating dissociative amnesia" } },
      continuous: { label: "Most likely", dx: "Dissociative amnesia, continuous", line: "Each new event is forgotten as it occurs.", points: ["Make sure there is no neurologic cause of anterograde amnesia.", "Exclude transient global amnesia and substances."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      systematized: { label: "Most likely", dx: "Dissociative amnesia, systematized", line: "Loss of a category of information, such as everything about one's family or one person.", points: ["Explore the meaning of the lost category and related trauma.", "Cognitive therapy can correct distortions about the trauma's meaning."], link: { ch: "ch11", sec: "s11-amnesia", label: "Dissociative amnesia" } },
      fugue: { label: "Most likely", dx: "Dissociative amnesia with dissociative fugue", line: "Sudden travel away from home or work with inability to recall the past and confusion about identity or a new identity.", points: ["Lasts minutes to months; in children fugues are brief and close to home.", "Watch for intense suicidal ideation as the dissociation lifts.", "Cases with an alternate identity may be better classified as DID; consider malingering in forensic settings."], link: { ch: "ch11", sec: "s11-fugue", label: "Dissociative fugue" } },
      headinjury: { label: "Consider instead", dx: "Posttraumatic amnesia from head injury", line: "Clear physical head trauma, unconsciousness or amnesia, and objective signs of brain injury.", points: ["Neurologic assessment and imaging.", "Dissociative amnesia is diagnosed only when a neurologic cause is excluded."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      tga: { label: "Consider instead", dx: "Transient global amnesia", line: "Sudden complete anterograde amnesia with retrograde gaps, but personal identity is preserved.", points: ["Anxious repetitive questioning, otherwise normal behavior, rapid recovery.", "Usually over 50 with vascular risk factors; also linked to epilepsy and migraine."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      seizure: { label: "Consider instead", dx: "Seizure-related amnesia or epileptic fugue", line: "Epileptic fugue shows confusion, perseveration and abnormal or repetitive movements.", points: ["Telemetry or ambulatory EEG may be needed.", "Psychogenic seizures can coexist with dissociation."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      amn_substance: { label: "Consider instead", dx: "Substance- or medication-induced amnesia", line: "Memory loss explained by intoxication or a drug.", points: ["Culprits include alcohol, sedative-hypnotics, anticholinergics, steroids, marijuana, opioids, psychedelics, PCP, β-blockers and lithium.", "Drug screen; reassess once the substance has cleared."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      neurocog: { label: "Consider instead", dx: "Dementia, delirium or an amnestic disorder", line: "Memory loss sits within wider cognitive, language and attention problems.", points: ["Loss of personal identity is unusual without broad cognitive disturbance.", "Causes include Korsakoff psychosis, stroke and postoperative, postinfectious or anoxic amnesia."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      ect: { label: "Consider instead", dx: "Memory loss after ECT", line: "Temporary, sometimes persistent, gaps for events around the treatments, unrelated to trauma.", points: ["Not a dissociative disorder.", "Document the timing relative to the treatment course."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      malinger: { label: "Consider", dx: "Malingered or factitious amnesia", line: "Amnesia that serves to escape trouble or excuse behavior.", points: ["No test reliably distinguishes genuine from feigned amnesia; some keep up the deception under hypnosis or barbiturates.", "Always consider malingering when fugue is claimed in a forensic setting."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      recovered: { label: "Consider", dx: "Factitious disorder or suggestion", line: "A chief complaint of recovering repressed memories most likely reflects a factitious disorder or suggestion.", points: ["Avoid leading questions.", "Memory work aims at integration, not exhuming memories."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      ptsd: { label: "Consider", dx: "Acute stress disorder or PTSD with dissociative amnesia", line: "Amnesia is a common part of the reaction to trauma.", points: ["Add dissociative amnesia only if it persists beyond the immediate trauma.", "Treat the posttraumatic disorder."], link: { ch: "ch11", sec: "s11-amnesia-ddx", label: "Differential of dissociative amnesia" } },
      dpdr: { label: "Most likely", dx: "Depersonalization/derealization disorder", line: "Persistent or recurrent detachment from oneself or the surroundings with intact reality testing.", points: ["Often triggered by anxiety and linked to early stress; patients may look undistressed.", "Often treatment-resistant: benzodiazepines, SRIs or stimulants help some; naltrexone for individual patients.", "Avoid antipsychotics: no evidence, and they may deepen emotional deadness."], link: { ch: "ch11", sec: "s11-dpdr", label: "Depersonalization/derealization disorder" } },
      dp_substance: { label: "Consider instead", dx: "Substance- or medication-related depersonalization", line: "Usually transient, but persistent depersonalization can follow marijuana, cocaine and other stimulants.", points: ["Drug screen and medication review.", "The disorder is diagnosed only when substances do not explain the symptoms."], link: { ch: "ch11", sec: "s11-dpdr-ddx", label: "Differential of depersonalization" } },
      dp_neuro: { label: "Consider instead", dx: "Depersonalization due to a neurologic or medical condition", line: "Organic depersonalization tends to be mainly sensory.", points: ["Standard labs, EEG and neurologic evaluation.", "Causes include seizures, brain tumors, postconcussion syndrome, migraine, vertigo and Ménière disease."], link: { ch: "ch11", sec: "s11-dpdr-ddx", label: "Differential of depersonalization" } },
      dp_psychosis: { label: "Consider instead", dx: "A psychotic disorder", line: "Reality testing is lost, unlike depersonalization/derealization disorder.", points: ["Depersonalization can occur in schizophrenia.", "Treat the psychotic disorder."], link: { ch: "ch11", sec: "s11-dpdr", label: "Depersonalization/derealization disorder" } },
      dp_other: { label: "Consider instead", dx: "Depersonalization as part of another disorder", line: "Symptoms limited to panic attacks, depression, PTSD or acute stress disorder belong to that disorder.", points: ["Diagnose and treat the primary disorder.", "Reassess if depersonalization persists between episodes."], link: { ch: "ch11", sec: "s11-dpdr-ddx", label: "Differential of depersonalization" } },
      cultural: { label: "Not a disorder", dx: "Accepted cultural or religious experience", line: "Trance, possession or identity experiences that are part of accepted practice are excluded.", points: ["Diagnose only if the state falls outside accepted practice and causes distress or impairment.", "Ask about the person's cultural and religious context."], link: { ch: "ch11", sec: "s11-other", label: "Trance and possession" } },
      imaginary: { label: "Not a disorder", dx: "Normal imaginary companion or fantasy play", line: "Imaginary companions and daydreams are normal in children.", points: ["Concern arises when companions become autonomous and take control through passive influence or commanding pseudohallucinations.", "Teachers and relatives help document discontinuities."], link: { ch: "ch11", sec: "s11-did", label: "Dissociative identity disorder" } },
      did: { label: "Most likely", dx: "Dissociative identity disorder", line: "Two or more distinct personality states with recurrent gaps in memory.", points: ["Often misdiagnosed as schizophrenia or borderline personality disorder; typically follows severe childhood abuse.", "Phase-oriented treatment: safety and stabilization, optional trauma work, then integration or resolution.", "Medication targets specific symptoms; prazosin for nightmares and intrusions."], link: { ch: "ch11", sec: "s11-tx-did", label: "Treating DID" } },
      osdd: { label: "Most likely", dx: "Other specified dissociative disorder", line: "Chronic and recurrent mixed dissociative syndromes that do not meet full criteria for DID.", points: ["Includes identity disturbance after coercive persuasion, acute dissociative reactions and dissociative trance.", "Treat as for complex trauma with phase-oriented care."], link: { ch: "ch11", sec: "s11-other", label: "Other specified dissociative disorders" } },
      did_feigned: { label: "Consider", dx: "Factitious, imitative or malingered DID", line: "Little dysphoria, amnesia only for bad behavior, symptoms amplified when observed.", points: ["Look for lies, legal problems, refusal of collateral contacts and pseudologia fantastica.", "Genuine patients are usually ashamed and distressed by their symptoms."], link: { ch: "ch11", sec: "s11-did-ddx", label: "Differential of DID" } },
      possession: { label: "Most likely", dx: "Dissociative trance with possession", line: "The usual identity is replaced by one attributed to a spirit, deity or another person.", points: ["Needs amnesia, distress or impairment, and no psychosis, substance or medical cause.", "Hypnotizability testing can reproduce the state and increase control over it."], link: { ch: "ch11", sec: "s11-other", label: "Trance and possession" } },
      trance: { label: "Most likely", dx: "Dissociative trance", line: "A temporary marked alteration of consciousness or loss of the usual sense of identity without a replacement identity.", points: ["Help the patient relate trance to ordinary daydreaming and recognize autohypnotic states.", "Chronic cases: supportive-expressive therapy as for conversion disorder."], link: { ch: "ch11", sec: "s11-tx-other", label: "Treating trance" } },
      ganser: { label: "Most likely", dx: "Ganser syndrome", line: "Approximate answers (vorbeigehen) with clouded consciousness; about half have hallucinations.", points: ["Thorough medical and neurologic workup: head trauma, seizures and psychosis are common.", "Do not confront the answers; protective, supportive hospitalization; recovery usually within days, with amnesia for the episode.", "Differentiate from dementia, depressive pseudodementia and Korsakoff confabulation."], link: { ch: "ch11", sec: "s11-other", label: "Ganser syndrome" } },
      brainwash: { label: "Most likely", dx: "Identity disturbance due to prolonged coercive persuasion", line: "Brainwashing in captivity, cults or political reform produces a dissociative pseudoidentity.", points: ["Look for idealization of captors, identification with the aggressor and traumatic infantilism.", "Phased trauma treatment as for torture victims, with family and social interventions."], link: { ch: "ch11", sec: "s11-tx-other", label: "Treating brainwashing" } }
    }
  },
  {
    id: "somatic",
    chapter: "ch12",
    title: "Which somatic symptom or related disorder?",
    summary: "Start by asking whether symptoms are deliberately produced, then whether a medical illness is being worsened, and follow what dominates the picture to somatic symptom disorder, illness anxiety, conversion, factitious disorder, malingering or a look-alike.",
    caution: "A teaching aid built from Chapter 12, not a substitute for a full assessment. Every patient needs a thorough physical and neurologic examination: a quarter to half of patients first labeled with conversion later receive a medical or neurologic diagnosis. Where a child may be harmed, safety comes first.",
    start: "intent",
    nodes: {
      intent: {
        q: "Is there evidence that symptoms are being deliberately produced or feigned?",
        help: "In somatic symptom, illness anxiety and conversion disorders the symptoms are experienced, not simulated. Clues to deliberate production include lab results that contradict the history, self-induced findings and resistance to outside information.",
        options: [
          { label: "Yes, and there is an obvious external goal (money, avoiding work, charges or the police, a bed for the night)", to: "r:malinger" },
          { label: "Yes, with no external reward beyond being a patient", to: "r:fact_self" },
          { label: "A caregiver appears to be producing or faking illness in a child or dependent", to: "r:fdia" },
          { label: "No evidence of deliberate production", to: "med" }
        ]
      },
      med: {
        q: "Is a medical condition present that psychological or behavioral factors are clearly worsening?",
        help: "Psychological factors affecting other medical conditions needs a medical illness and an unambiguous, documentable psychological effect on its course. A psychological reaction to being ill is an adjustment disorder instead.",
        options: [
          { label: "Yes: denial, refusing or manipulating treatment, or stress clearly worsening the illness", to: "r:pfamc" },
          { label: "The problem is distress in reaction to having the illness", to: "r:adjustment" },
          { label: "No, or this is not the main issue", to: "kind" }
        ]
      },
      kind: {
        q: "What dominates the picture?",
        help: "Pick the feature that best describes the presentation.",
        options: [
          { label: "Neurologic-looking motor or sensory symptoms: weakness, abnormal movements, attacks, blindness, numbness, gait problems", to: "conv_exam" },
          { label: "One or more distressing somatic symptoms with excessive thoughts, worry or time devoted to them", to: "ssd_other" },
          { label: "Fear of having or getting a serious illness, with few or no symptoms", to: "iad_other" },
          { label: "Concern that a part of the body looks defective", to: "r:bdd" },
          { label: "A bizarre bodily belief of delusional intensity, with other psychotic symptoms", to: "r:psychosis" }
        ]
      },
      conv_exam: {
        q: "Do the examination and workup show findings incompatible with neurologic disease?",
        help: "Conversion requires inconsistency with recognized neurologic or medical conditions. Examples: Hoover sign, midline splitting, give-way weakness, no afferent pupillary defect in 'blindness', retained reflexes and normal prolactin after an attack.",
        options: [
          { label: "Yes: clear signs of incompatibility and a negative workup", to: "conv_course" },
          { label: "Findings could fit a neurologic disease, or the workup is incomplete", to: "r:conv_workup" }
        ]
      },
      conv_course: {
        q: "How long have the symptoms lasted?",
        help: "DSM-5 specifies an acute episode (under 6 months) or persistent course (6 months or more), with or without a psychological stressor.",
        options: [
          { label: "Under 6 months", to: "r:conv_acute" },
          { label: "6 months or more", to: "r:conv_persist" }
        ]
      },
      ssd_other: {
        q: "Does another disorder better explain the somatic focus?",
        help: "Somatic preoccupation also occurs in panic, depressive and anxiety disorders. A patient fearing heart disease may turn out to have classic panic attacks.",
        options: [
          { label: "Discrete attacks of pounding heart, sweating and fear that peak within minutes", to: "r:panic" },
          { label: "The concerns appear only during a depressive or anxiety disorder", to: "r:mood_anx" },
          { label: "No", to: "ssd_dur" }
        ]
      },
      ssd_dur: {
        q: "How long has the pattern lasted?",
        help: "Somatic symptom disorder requires at least 6 months. Shorter reactions to a major stress or a frightening illness are coded as other specified somatic symptom and related disorder.",
        options: [
          { label: "6 months or more", to: "ssd_sev" },
          { label: "Under 6 months, after a stress or a resolved illness", to: "r:ssd_brief" }
        ]
      },
      ssd_sev: {
        q: "Which best describes the symptoms?",
        help: "Severity is graded by the number of symptoms; 'with predominant pain' is a specifier that can apply at any severity.",
        options: [
          { label: "Pain is the main symptom", to: "r:ssd_pain" },
          { label: "One symptom", to: "r:ssd_mild" },
          { label: "Two or more symptoms", to: "r:ssd_mod" },
          { label: "Two or more with multiple complaints, or one very severe symptom", to: "r:ssd_severe" }
        ]
      },
      iad_other: {
        q: "Does another disorder account for the fear of illness?",
        help: "Fear of illness also occurs in depressive and anxiety disorders. If full criteria for both illness anxiety and another disorder are met, diagnose both.",
        options: [
          { label: "Repeated compulsions and several unrelated obsessions", to: "r:ocd" },
          { label: "Full criteria for major depression, GAD or panic disorder are also met", to: "r:iad_both" },
          { label: "No", to: "iad_dur" }
        ]
      },
      iad_dur: {
        q: "How long has the preoccupation lasted?",
        help: "Illness anxiety disorder requires at least 6 months.",
        options: [
          { label: "6 months or more", to: "iad_type" },
          { label: "Under 6 months", to: "r:iad_brief" }
        ]
      },
      iad_type: {
        q: "How does the patient respond to the fear?",
        help: "DSM-5 specifies care-seeking or care-avoidant type.",
        options: [
          { label: "Seeks repeated tests, visits and reassurance", to: "r:iad_seek" },
          { label: "Avoids doctors and appointments", to: "r:iad_avoid" }
        ]
      }
    },
    results: {
      malinger: { label: "Consider", dx: "Malingering", line: "Deliberate production of symptoms for a recognizable external goal.", points: ["Malingerers can usually stop when the symptoms stop being useful or become too risky.", "Their history tends to be more inconsistent and contradictory than in conversion disorder."], link: { ch: "ch12", sec: "s12-ddx-fact", label: "Differential of factitious disorder" } },
      fact_self: { label: "Most likely", dx: "Factitious disorder imposed on self", line: "Feigning or inducing illness to take on the sick role, without external reward.", points: ["Look for many hospitals, health care work, worsening before discharge, requests for surgery and opposition to psychiatric assessment.", "Confirm with collateral sources and targeted tests (e.g., high insulin with low C-peptide).", "Manage, not cure: early recognition, minimize harm, one gatekeeper, a face-saving, nonconfrontational approach."], link: { ch: "ch12", sec: "s12-fact-clues", label: "Clues and detection" } },
      fdia: { label: "Act now", dx: "Factitious disorder imposed on another", line: "A caregiver deliberately produces or fakes illness in someone in their care; the perpetrator receives the diagnosis.", points: ["Ensure the child's current and future safety; inform child protective services when a child is harmed.", "A pediatrician acts as gatekeeper; consider monitored admission.", "Clues: symptoms only with one caregiver, no relief at good news, a sibling's unexplained illness or death."], link: { ch: "ch12", sec: "s12-fdia", label: "Imposed on another" } },
      pfamc: { label: "Most likely", dx: "Psychological factors affecting other medical conditions", line: "Psychological or behavioral factors clearly and measurably worsen a medical illness.", points: ["Examples: denial of a heart attack, anxiety worsening asthma, manipulating insulin to lose weight.", "Work with the medical team and family; psychoeducation; treat any psychiatric disorder."], link: { ch: "ch12", sec: "s12-pfamc", label: "Psychological factors" } },
      adjustment: { label: "Consider instead", dx: "Adjustment disorder", line: "Psychological consequences of having a medical condition are better classified as an adjustment disorder.", points: ["Reserve psychological factors affecting other medical conditions for psychological effects on the illness itself.", "Somatic symptom disorder applies if distress about the illness is excessive and persistent."], link: { ch: "ch12", sec: "s12-pfamc", label: "Psychological factors" } },
      bdd: { label: "Consider instead", dx: "Body dysmorphic disorder", line: "Wants to look normal and believes others notice a defect, rather than seeking care for a presumed disease.", points: ["Covered with the obsessive-compulsive and related disorders.", "ICD-10 includes it as a subtype of hypochondriacal disorder."], link: { ch: "ch12", sec: "s12-ddx-ssd", label: "Differential of somatic symptom disorder" } },
      psychosis: { label: "Consider instead", dx: "A psychotic disorder with somatic delusions", line: "Delusional intensity, other psychotic symptoms and bizarre, culturally out-of-place content.", points: ["Example: 'my guts are rotting away' despite a full workup.", "Treat the psychotic disorder."], link: { ch: "ch12", sec: "s12-ddx-ssd", label: "Differential of somatic symptom disorder" } },
      conv_workup: { label: "Investigate", dx: "Complete the medical and neurologic workup", line: "Conversion requires findings incompatible with neurologic disease; many patients are later found to have a medical cause.", points: ["Consider multiple sclerosis, myasthenia gravis, myopathies, optic neuritis, Guillain–Barré, periodic paralysis, tumors and early neurologic AIDS.", "Routine labs, EEG and imaging such as MRI; video EEG for attacks.", "Resolution with suggestion (hypnosis, amobarbital or lorazepam) supports conversion."], link: { ch: "ch12", sec: "s12-ddx-conv", label: "Differential of conversion disorder" } },
      conv_acute: { label: "Most likely", dx: "Conversion disorder (functional neurologic symptom disorder), acute episode", line: "Neurologic-looking symptoms incompatible with neurologic disease, present under 6 months.", points: ["About 95% of acute cases remit, usually within 2 weeks in hospital.", "Reassure that key tests are normal and recovery is expected; never imply malingering.", "Specify the symptom type and whether a psychological stressor is present."], link: { ch: "ch12", sec: "s12-tx-conv", label: "Treating conversion disorder" } },
      conv_persist: { label: "Most likely", dx: "Conversion disorder (functional neurologic symptom disorder), persistent", line: "Symptoms present 6 months or more; the chance of resolution is under 50% and falls with time.", points: ["Multimodal treatment: psychotherapy, behavioral techniques, hypnosis, physical therapy, biofeedback and medication for comorbid disorders.", "Tremor and seizures carry a poorer prognosis; recurrence is common."], link: { ch: "ch12", sec: "s12-tx-conv", label: "Treating conversion disorder" } },
      panic: { label: "Consider instead", dx: "Panic disorder", line: "Careful history in a patient fearing heart disease often uncovers classic panic attacks.", points: ["Treat the panic disorder.", "Reassess for somatic symptom disorder if preoccupation persists between attacks."], link: { ch: "ch12", sec: "s12-ddx-ssd", label: "Differential of somatic symptom disorder" } },
      mood_anx: { label: "Consider", dx: "Somatic focus within a depressive or anxiety disorder", line: "Somatic preoccupation commonly occurs with depressive and anxiety disorders.", points: ["Treat the primary disorder.", "Somatic symptom disorder can co-occur when its own criteria are met."], link: { ch: "ch12", sec: "s12-ddx-ssd", label: "Differential of somatic symptom disorder" } },
      ssd_brief: { label: "Most likely", dx: "Other specified somatic symptom and related disorder", line: "A transient somatic symptom reaction lasting under 6 months after a stress or a frightening illness.", points: ["Usually remits as the stress resolves.", "Can become chronic if friends or clinicians reinforce the concerns."], link: { ch: "ch12", sec: "s12-ssd", label: "Somatic symptom disorder" } },
      ssd_pain: { label: "Most likely", dx: "Somatic symptom disorder, with predominant pain", line: "Pain is the main somatic symptom, with excessive thoughts, worry or time devoted to it.", points: ["Antidepressants help painful syndromes, with data favoring tricyclics over SSRIs.", "CBT, one primary care physician and regular brief visits."], link: { ch: "ch12", sec: "s12-tx-ssd", label: "Treating somatic symptom disorder" } },
      ssd_mild: { label: "Most likely", dx: "Somatic symptom disorder, mild", line: "One distressing somatic symptom with excessive response for at least 6 months.", points: ["Regular scheduled visits with a brief examination; avoid unnecessary tests.", "CBT has the strongest evidence."], link: { ch: "ch12", sec: "s12-tx-ssd", label: "Treating somatic symptom disorder" } },
      ssd_mod: { label: "Most likely", dx: "Somatic symptom disorder, moderate", line: "Two or more distressing symptoms with excessive response for at least 6 months.", points: ["Modest goals: fewer visits, one primary care physician, limited specialist referrals.", "A consultation letter to primary care reduces health care use."], link: { ch: "ch12", sec: "s12-tx-ssd", label: "Treating somatic symptom disorder" } },
      ssd_severe: { label: "Most likely", dx: "Somatic symptom disorder, severe", line: "Two or more symptoms with multiple complaints, or one very severe symptom.", points: ["Aim for rapport and prevention of iatrogenic harm; prepare for long-term care.", "Avoid medication except for clear anxiety, depression or psychosis.", "Specify persistent if severe symptoms and impairment last over 6 months."], link: { ch: "ch12", sec: "s12-ssd", label: "Somatic symptom disorder" } },
      ocd: { label: "Consider instead", dx: "Obsessive-compulsive disorder", line: "Illness anxiety involves a single belief without compulsive behavior.", points: ["Treat OCD if obsessions and compulsions extend beyond health fears.", "The fear in illness anxiety may still have an obsessive quality."], link: { ch: "ch12", sec: "s12-ddx-ssd", label: "Differential of illness anxiety" } },
      iad_both: { label: "Diagnose both", dx: "Illness anxiety disorder with a co-occurring depressive or anxiety disorder", line: "When full criteria for both are met, both diagnoses are given.", points: ["Comorbidity with GAD and panic disorder is common.", "CBT first line; SSRIs such as fluoxetine have trial support."], link: { ch: "ch12", sec: "s12-ddx-ssd", label: "Differential of illness anxiety" } },
      iad_brief: { label: "Most likely", dx: "Other specified somatic symptom and related disorder (brief illness anxiety disorder)", line: "Illness anxiety that does not yet meet the 6-month duration criterion.", points: ["Reassess over time.", "Examine the patient properly rather than dismissing the concerns."], link: { ch: "ch12", sec: "s12-other", label: "Other specified disorders" } },
      iad_seek: { label: "Most likely", dx: "Illness anxiety disorder, care-seeking type", line: "Preoccupation with serious illness, few symptoms, and repeated tests, visits and reassurance-seeking.", points: ["CBT is first line; mindfulness, exposure and ACT also help.", "SSRIs, especially fluoxetine, have trial support."], link: { ch: "ch12", sec: "s12-iad", label: "Illness anxiety disorder" } },
      iad_avoid: { label: "Most likely", dx: "Illness anxiety disorder, care-avoidant type", line: "Preoccupation with serious illness, few symptoms, and avoidance of medical care.", points: ["Build trust gently and keep a careful medical examination.", "CBT is first line."], link: { ch: "ch12", sec: "s12-iad", label: "Illness anxiety disorder" } }
    }
  }
]);
