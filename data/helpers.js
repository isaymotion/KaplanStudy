/*
 * Diagnostic decision helpers. Each helper is a small decision tree.
 * Node options point to another node id, or to "r:<resultId>".
 * Every option has a `note` that becomes one line of the reasoning trail.
 * Content follows Kaplan & Sadock's Synopsis, 12th ed., Chapter 5.
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
]);
