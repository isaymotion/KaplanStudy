/* Chapter 6 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 6. */
KS.add("ch06", "guide", {
  intro: "The bipolar disorders are bipolar I disorder (classic manic depression), bipolar II disorder and cyclothymia. They were split from the depressive disorders with DSM-III because their epidemiology, course and treatment differ, yet many experts still see real continuity between recurrent depression and bipolar illness, and the idea of a bipolar spectrum remains under active debate.",
  objectives: [
    "Recognize a manic episode from mood, speech, thought, judgment and behavior, including psychotic mania.",
    "List the features that make a depressive episode more likely to be bipolar than unipolar.",
    "Apply the DSM-5 criteria and durations for manic, hypomanic and major depressive episodes, bipolar I, bipolar II and cyclothymia.",
    "Use the specifiers correctly: mixed features, rapid cycling, anxious distress, psychotic features, catatonia, seasonal pattern and peripartum onset.",
    "Separate mania from schizophrenia, borderline personality disorder, and medical or substance-induced states.",
    "Choose first-line treatment for acute mania, bipolar depression and maintenance, and monitor lithium, anticonvulsants and antipsychotics safely.",
    "Explain the course, prognosis, genetics and main etiologic models to a patient and family."
  ],
  parts: [
    {
      title: "Recognize the illness",
      sections: [
        {
          id: "s6-overview",
          title: "The bipolar disorders and the spectrum debate",
          blocks: [
            { type: "p", text: "Historically, depression and mania were thought of as two ends of one continuum, hence the term **polarity**. DSM-III (1980s) separated bipolar disorders from depressive disorders because they differ in **epidemiology, course and treatment**. The separation has been questioned repeatedly, because many patients with major depressive disorder have had **at least some manic symptoms** in the past." },
            { type: "defs", title: "Key terms", items: [
              ["Bipolar I disorder", "At least one **manic** episode. Often called manic depression."],
              ["Bipolar II disorder", "Hypomanic episodes plus major depressive episodes, never a full manic episode."],
              ["Cyclothymia", "A milder, chronic form of bipolar disorder with hypomanic and depressive symptoms that never reach full episode criteria."],
              ["Hypomania", "An episode of manic symptoms that does **not meet criteria for a manic episode**."],
              ["Dysthymia", "A less severe, chronic form of major depression (covered with the depressive disorders)."],
              ["Unipolar or pure mania", "Terms sometimes used for bipolar patients who have manic episodes but **no depressive episodes**."],
              ["Bipolar spectrum", "A proposed continuum spanning classic bipolar disorder, bipolar II and recurrent depression."]
            ] }
          ]
        },
        {
          id: "s6-mania",
          title: "The manic episode",
          blocks: [
            { type: "p", text: "Manic patients are excited, talkative, sometimes amusing and often hyperactive. Their speech is fast, loud, hard to interrupt and seems driven by an unexplained urgency. **Pressured speech is considered a hallmark of mania.**" },
            { type: "h", text: "Mood" },
            { type: "p", text: "An **elevated, expansive or irritable mood** is the hallmark of the episode. Euphoria is often infectious, enough that an inexperienced clinician may deny the illness through countertransference. Strangers may not notice anything unusual, but people who know the patient recognize the change. Irritability appears especially when someone blocks an unrealistic plan, and the predominant mood often shifts from **euphoria early to irritability later**. Frustration tolerance is low, and mood can be labile, swinging from laughter to irritability to depression within minutes or hours." },
            { type: "h", text: "Thought and speech" },
            { type: "list", title: "As mania intensifies", ordered: true, items: [
              "Rapid thoughts, inferred from speech; puns, jokes, rhymes and wordplay. The patient may seem clever or brilliant.",
              "Distractibility with an accelerated, unrestrained flow of ideas.",
              "**Loosened associations**, failing concentration, **flight of ideas, clanging and neologisms**.",
              "In acute manic excitement, speech can be **incoherent and indistinguishable from schizophrenia**."
            ] },
            { type: "p", text: "Thought content centers on **self-confidence and self-aggrandizement**. Patients may become preoccupied with religious, political, financial, sexual or persecutory ideas that grow into complex delusional systems. Some become grossly psychotic and disorganized and need physical restraint and IM sedating medication." },
            { type: "callout", kind: "exam", text: "**Delusions occur in 75 percent of manic patients.** Mood-congruent delusions involve great wealth, extraordinary abilities or power, but **bizarre and mood-incongruent** delusions and hallucinations also occur in mania." },
            { type: "case", title: "Chapter case: the engineer who felt divine", text: "A 37-year-old engineer had three manic hospitalizations, each preceded by weeks of psychomotor slowing. Lithium worked each time, but he stopped it after discharge. Now euthymic, after an episode in which he badly beat his wife, he described mania as God entering his brain and refused lithium because it would block the divinity in him, even as his marriage collapsed.", point: "The exhilaration of mania and the lack of insight can drive persistent refusal of effective treatment, with serious consequences for families." },
            { type: "case", title: "Chapter case: the secret national hero", text: "A 29-year-old mother with lithium-responsive manic and depressive episodes kept believing, after her mood stabilized, that she had uncovered an international plot during a postpartum mania and was now persecuted for it. Over months of weekly sessions the psychiatrist gently challenged the belief; she revealed she felt overshadowed by her high-achieving family and needed to be someone important. Antipsychotics were tapered and she was maintained on lithium, with only passing mention of the plot.", point: "Grandiose delusions can persist after mood symptoms resolve and may carry personal meaning; trust built over time allows gentle challenge." },
            { type: "h", text: "Sensorium, cognition, judgment and insight" },
            { type: "list", items: [
              "Orientation and memory are grossly intact, though some patients are so euphoric they answer orientation questions wrongly; **Kraepelin called this delirious mania**.",
              "Cognitive deficits are less understood than in schizophrenia, but there is evidence of shared deficits.",
              "**Impaired judgment is a hallmark**: breaking laws about credit, sex and finances, sometimes ruining the family financially; inappropriate phone calls; pathologic gambling; undressing in public; outlandish, brightly colored clothing and jewelry; inattention to small details.",
              "Patients act impulsively yet with **conviction and purpose**, and have **little insight**.",
              "Some regress severely, occasionally playing with urine and feces."
            ] },
            { type: "h", text: "Risk" },
            { type: "list", items: [
              "About **75 percent** of manic patients are **assaultive or threatening** at some point.",
              "Suicide risk is increased in mania, but the **greatest risk is when bipolar patients are depressed**.",
              "Manic patients often **drink excessively**, perhaps to self-medicate."
            ] }
          ]
        },
        {
          id: "s6-depression",
          title: "Bipolar depression",
          blocks: [
            { type: "p", text: "Depressive episodes in bipolar disorder resemble those of the depressive disorders. Many experts suspect qualitative differences, but reliable distinguishing features have been elusive. Some clinicians report that depressed patients later diagnosed with bipolar disorder often have **hypersomnia, psychomotor retardation, psychotic symptoms, a history of postpartum episodes, a family history of bipolar I disorder, and a history of antidepressant-induced hypomania**." },
            { type: "table", wide: true, caption: "Bipolar versus unipolar depression (after Table 6-1)", head: ["Feature", "Bipolar", "Unipolar"], rows: [
              ["History of mania or hypomania", "Yes (definitional)", "No"],
              ["Temperament and personality", "Cyclothymic, extroverted", "Dysthymic, introverted"],
              ["Sex ratio", "Equal", "More women"],
              ["Age of onset", "Teens, 20s, 30s", "30s, 40s, 50s"],
              ["Postpartum episodes", "More common", "Less common"],
              ["Onset of episode", "Often abrupt", "More insidious"],
              ["Number of episodes", "Numerous", "Fewer"],
              ["Duration of episode", "3–6 months", "3–12 months"],
              ["Psychomotor activity", "Retardation > agitation", "Agitation > retardation"],
              ["Sleep", "Hypersomnia > insomnia", "Insomnia > hypersomnia"],
              ["Family history of bipolar disorder", "Yes", "±"],
              ["Family history of unipolar disorder", "Yes", "Yes"],
              ["Family history of alcoholism", "Yes", "Yes"],
              ["Response to most antidepressants", "May induce hypomania or mania", "±"],
              ["Lithium", "Prophylaxis", "±"]
            ] }
          ]
        },
        {
          id: "s6-youth",
          title: "Children and adolescents",
          blocks: [
            { type: "p", text: "Adolescent mania is easily misdiagnosed as **conduct disorder, antisocial personality disorder or schizophrenia**. It can present with psychosis, alcohol or other substance abuse, suicide attempts, academic problems, philosophical brooding, obsessive-compulsive symptoms, multiple somatic complaints, marked irritability leading to fights, and other antisocial behavior. Many of these occur in healthy adolescents, but **severe or persistent** symptoms should put bipolar I disorder on the differential." },
            { type: "p", text: "The incidence of bipolar I disorder in children and adolescents is about **1 percent**, with onset as early as **age 8** (the epidemiology section notes onset as early as 5 or 6). Prevalence rises with age: about **2 percent at 13–14 years**, roughly **doubling by 18**." }
          ]
        }
      ]
    },
    {
      title: "Make the diagnosis",
      sections: [
        {
          id: "s6-map",
          title: "Episode building blocks",
          blocks: [
            { type: "p", text: "Bipolar diagnoses are built from episodes. Learn the three episode types and their minimum durations first, then the disorders follow." },
            { type: "timeline", title: "DSM-5 minimum durations", cols: ["Days", "1–2 weeks", "Weeks to months", "Years"], rows: [
              { label: "Hypomanic episode", from: 0, to: 1, bar: "≥4 days", color: "hy", note: "No marked impairment and no hospitalization." },
              { label: "Manic episode", from: 1, to: 2, bar: "≥1 week", color: "guide", note: "Impaired functioning or need for hospitalization." },
              { label: "Major depressive episode", from: 1, to: 2, bar: "≥2 weeks", color: "pharm", note: "Marked distress or psychosocial impairment." },
              { label: "Cyclothymic disorder", from: 3, to: 4, bar: "≥2 years (≥1 in children)", color: "found", note: "Symptoms present at least half the time; never full episode criteria." }
            ] },
            { type: "table", caption: "Which episodes make which disorder", head: ["Disorder", "Requires", "Excludes"], rows: [
              ["Bipolar I", "At least one **manic** episode", "Episodes better explained by substances, medication or another condition"],
              ["Bipolar II", "At least one **hypomanic** and at least one **major depressive** episode", "Any history of a manic episode (that makes it bipolar I)"],
              ["Cyclothymia", "≥2 years of hypomanic and depressive **symptoms** that never meet episode criteria", "Bipolar I or II"]
            ] },
            { type: "callout", kind: "exam", text: "ICD-10 does **not** separate bipolar I from bipolar II. It uses **bipolar affective disorder**, requiring a history of discrete episodes of mania, hypomania or depression demarcated by switches in mood." }
          ]
        },
        {
          id: "s6-bp1",
          title: "Bipolar I disorder",
          blocks: [
            { type: "p", text: "Bipolar I disorder requires **at least one manic episode**, and it is what most people mean by bipolar disorder. Episodes may be single or recurrent. Manic episodes are considered **distinct when separated by at least 2 months** without significant manic or hypomanic symptoms. Episodes must not be due to another cause such as medication, **including an antidepressant**." },
            { type: "table", wide: true, caption: "Bipolar I disorder in DSM-5 and ICD-10 (after Table 6-2)", head: ["Feature", "DSM-5", "ICD-10 (bipolar affective disorder)"], rows: [
              ["Duration", "Manic episode ≥1 week; hypomanic ≥4 days; major depressive ≥2 weeks", "—"],
              ["Manic or hypomanic symptoms", "Abnormally elevated or irritable mood (required); grandiosity; decreased need for sleep; pressured speech; racing, expansive thoughts; distractibility; hyperactivity; impulsive or high-risk activity", "Mania: elevated or irritable mood (required), increased activity and talkativeness, flight of ideas, social disinhibition, decreased need for sleep, grandiosity, distractibility, recklessness, hypersexuality. Hypomania: elevated mood (required), agitation, talkativeness, poor concentration, decreased sleep need, hypersexuality, spending, overfamiliarity"],
              ["Depressive symptoms", "Similar to major depressive disorder", "Depressed mood, loss of interest or pleasure, decreased energy, plus low self-esteem, guilt, thoughts of death or suicide, poor concentration, psychomotor change, sleep and appetite change"],
              ["Number required", "At least one manic episode: elevated or irritable mood plus **≥3 other symptoms (≥4 if mood is only irritable)**", "Current episode (hypomanic, manic, depressed or mixed) plus a history of at least one prior affective episode"],
              ["Exclusions", "Drug abuse; medication effect; other medical condition; other psychiatric illness", "Psychoactive substance use; another mental disorder"],
              ["Impact", "Mania: impaired function or hospitalization. Hypomania: no impairment or hospitalization. Depression: marked distress or impairment", "—"],
              ["Symptom specifiers", "With mixed features; with rapid cycling; with melancholic features; with atypical features; with anxious distress; with mood-congruent or mood-incongruent psychotic features; with catatonia", "Current episode hypomanic; manic with or without psychotic symptoms (congruent or incongruent); depressed; mixed; in remission"],
              ["Severity", "Mild, moderate, severe", "Depression: mild (2–3 symptoms), moderate (≥4, including ≥2 of loss of pleasure, depressed mood, low energy), severe; with or without psychotic symptoms"],
              ["Course specifiers", "With peripartum onset (pregnancy or within 4 weeks after delivery); with seasonal pattern (≥2 years); in partial or full remission", "—"]
            ] }
          ]
        },
        {
          id: "s6-bp2",
          title: "Bipolar II disorder",
          blocks: [
            { type: "p", text: "In bipolar II disorder the patient has **hypomania rather than mania**: manic-type symptoms that are less severe and less impairing. DSM-5 requires **at least one hypomanic episode and at least one major depressive episode**. A history of any manic episode changes the diagnosis to bipolar I. Impairment comes from the depressive episodes; hypomania causes **no marked impairment and no hospitalization**." },
            { type: "callout", kind: "caution", title: "Hypomania mimics", text: "Dramatic but normal moods are easily mistaken for hypomania. A patient emerging from depression may feel thrilled and euphoric, and **many medications, including antidepressants, can induce hypomanic symptoms**. The criteria aim to separate true hypomania from these causes." },
            { type: "p", text: "Bipolar II uses the same symptom, severity and course specifiers as bipolar I (current episode depressed or hypomanic; anxious distress; mixed features; rapid cycling; melancholic or atypical features; psychotic features; catatonia; peripartum onset; seasonal pattern)." }
          ]
        },
        {
          id: "s6-specifiers",
          title: "Specifiers",
          blocks: [
            { type: "defs", items: [
              ["With rapid cycling", "**At least four mood episodes in a year**, with at least 2 months of partial or full remission between them (Table 6-2). Patients are likely to be **female** and to have had depressive and hypomanic episodes. There is **no familial pattern**, so an external factor such as **stress or drug treatment** may provoke it."],
              ["With mixed features", "A depressive or manic/hypomanic episode with additional symptoms of the opposite pole that do not meet full criteria. Women in mania are more likely than men to present a mixed picture."],
              ["With anxious distress", "**At least two** of: feeling tense, restlessness, trouble concentrating because of worry, fear without cause, fear of losing control."],
              ["With melancholic or atypical features", "Defined as for major depressive disorder."],
              ["With psychotic features", "Mood-congruent or mood-incongruent."],
              ["With catatonia", "Often overlooked in bipolar I because stupor contrasts so sharply with classic mania, but catatonic symptoms are associated with **depressive episodes**."],
              ["With seasonal pattern", "Pattern present ≥2 years. Some studies find more mania in **spring and summer**, but evidence is strongest for **seasonal depressive** episodes."],
              ["With peripartum onset", "Onset during pregnancy or within **4 weeks after delivery**. Postpartum mania is critical because of the **risk to the child**."]
            ] }
          ]
        },
        {
          id: "s6-cyclothymia",
          title: "Cyclothymic disorder",
          blocks: [
            { type: "p", text: "Long recognized as a **less severe form of bipolar disorder**. Patients have **at least 2 years** of frequent hypomanic symptoms that never amount to a manic episode and depressive symptoms that never amount to a major depressive episode." },
            { type: "table", wide: true, caption: "Cyclothymic disorder in DSM-5 and ICD-10 (after Table 6-4)", head: ["Feature", "DSM-5", "ICD-10 (cyclothymia)"], rows: [
              ["Duration", "**≥2 years (≥1 year in children)**, with symptoms present **at least 50% of the time**", "2 years of depression and mild elation without ever meeting depressive or manic episode criteria"],
              ["Symptoms", "Hypomanic and depressive symptoms", "Unstable mood; many periods of depression or mild elation too mild to call hypomania or major depression"],
              ["Number required", "Never meets full criteria for a depressive or manic episode", "Several episodes, insufficient for hypomania, major depression or another bipolar disorder"],
              ["Exclusions", "Substance use; medication; medical condition; other mental illness (bipolar I or II)", "Bipolar affective disorder (though a past history may exist)"],
              ["Impact", "Marked distress or impairment", "—"],
              ["Specifiers", "With anxious distress", "Includes affective personality disorder, cycloid personality, cyclothymic personality"]
            ] },
            { type: "case", title: "Chapter case: Mr. B", text: "A 25-year-old man described lifelong cycles: days to weeks of irritability, insomnia, jumpiness and excess energy alternating with longer stretches of hopelessness, exhaustion and suicidal thoughts. Raised in a series of foster homes, he had run away, skipped school and committed minor crimes, then drifted between odd jobs and quickly made and ended friendships. He had never been treated and denied drug use.", point: "Chronic, lifelong alternation of subthreshold hypomanic and depressive periods with disrupted relationships and work fits cyclothymic disorder." }
          ]
        },
        {
          id: "s6-ddx",
          title: "Differential diagnosis",
          blocks: [
            { type: "p", text: "A bipolar patient in a depressive episode has the **same differential as major depressive disorder**. A manic patient has a broad differential across mood disorders, other psychiatric disorders, medical disorders and substances. Manic symptoms are **more distinctive** than depressive symptoms, which appear in almost every psychiatric disorder." },
            { type: "table", caption: "Differential diagnosis of mania (after Table 6-5)", head: ["Category", "Causes"], rows: [
              ["Medical", "AIDS/HIV; delirium; hyperthyroidism; postencephalitic syndrome"],
              ["Substance induced", "Antidepressants; steroids; amphetamines; cocaine; phencyclidine; alcohol intoxication; L-dopa; bronchodilators; decongestants"],
              ["Psychiatric", "Atypical psychosis; bipolar disorder; catatonic schizophrenia; schizoaffective disorder"]
            ] },
            { type: "h", text: "Mania versus schizophrenia" },
            { type: "list", items: [
              "**Merriment, elation and infectious mood** are much more common in mania.",
              "The combination of **heightened mood, rapid speech and hyperactivity** favors mania.",
              "Mania usually begins **rapidly** and is a marked change from previous behavior.",
              "**Family history** helps.",
              "In catatonia, look carefully for past manic or depressive episodes and a family history of mood disorder."
            ] },
            { type: "callout", kind: "caution", title: "Diagnostic bias", text: "There is an unfortunate tendency to **misdiagnose manic symptoms in people from minority groups, mainly Black and Hispanic patients, as schizophrenia**." },
            { type: "h", text: "Personality disorders" },
            { type: "p", text: "Hypomania is often confused with the mood lability of personality disorders, especially **borderline personality disorder**. Both can produce a severely disrupted life, as in bipolar II with its many episodes of significant mood symptoms." },
            { type: "case", title: "Chapter case: the 19-year-old with daily mood storms", text: "A 19-year-old woman had near-daily mood swings since puberty, hostile irritability, hypersomnic depressions with repeated overdoses and self-injury, chronic emptiness, substance use, binge-purge behavior and a history of childhood sexual abuse, all suggesting borderline personality disorder. Her mother had clear hypomanic episodes and her father had died by suicide. On an MAOI she became hypomanic premenstrually and impulsively married a stranger. Stabilized on lithium plus divalproex, her mood, bulimia and migraines improved and she returned to college, continuing psychotherapy.", point: "A strong family history of bipolar illness and antidepressant-induced hypomania point to a bipolar diathesis beneath a borderline-looking presentation." },
            { type: "h", text: "Medical conditions and substances" },
            { type: "p", text: "A wide range of medical disorders and substances can cause manic symptoms, and **antidepressant treatment can precipitate mania** in some patients." }
          ]
        }
      ]
    },
    {
      title: "Comorbidity, course and prognosis",
      sections: [
        {
          id: "s6-comorbidity",
          title: "Comorbidity",
          blocks: [
            { type: "p", text: "Men more often present with **substance use disorders**; women more often with comorbid **anxiety and eating disorders**. Bipolar patients have more substance use and anxiety comorbidity than patients with unipolar depression. Comorbid substance use and anxiety disorders **worsen prognosis and markedly raise suicide risk**." },
            { type: "table", caption: "Lifetime comorbidity in the ECA study", head: ["Disorder", "Bipolar I", "Unipolar major depression"], rows: [
              ["Substance use disorder", "61%", "27%"],
              ["Panic disorder", "21%", "10%"],
              ["Obsessive-compulsive disorder", "21%", "12%"]
            ], note: "Roughly twice as high in bipolar I." },
            { type: "p", text: "Cyclothymic disorder is sometimes diagnosed retrospectively in bipolar I patients, but **no specific personality traits are associated with bipolar I disorder**." }
          ]
        },
        {
          id: "s6-course",
          title: "Course",
          blocks: [
            { type: "callout", kind: "pearl", title: "Keep a life chart", text: "Because the natural history is episodic and recurrent, it is useful to **graph the patient’s illness** over time (a life chart, Figure 6-1) and keep it updated through treatment." },
            { type: "h", text: "Onset" },
            { type: "list", items: [
              "About **5–10 percent** of patients first diagnosed with major depressive disorder have a manic episode **6–10 years** after their first depression, at a **mean age of 32**, often after **2–4 depressive episodes**.",
              "Bipolar I most often **starts with depression**: **75 percent of the time in women, 67 percent in men**.",
              "Most patients have both depressive and manic episodes; **10–20 percent have only manic episodes**.",
              "Manic symptoms are common in older adults, but causes are broad (medical illness, dementia, delirium); **true new-onset bipolar I in older age is uncommon**."
            ] },
            { type: "h", text: "Duration and recurrence" },
            { type: "list", items: [
              "Manic episodes usually begin **rapidly (hours or days)** but can evolve over weeks.",
              "An **untreated manic episode lasts about 3 months**, so medication should not be stopped before then.",
              "**90 percent** of people with one manic episode will have another.",
              "Intervals between episodes often **shorten** as the illness progresses, then stabilize at about **6–9 months after about five episodes**.",
              "**5–15 percent** have four or more episodes a year (rapid cyclers)."
            ] },
            { type: "p", text: "**Bipolar II disorder** is a stable diagnosis: patients are highly likely to have the same diagnosis 5 years later. It is a **chronic illness that warrants long-term treatment**." }
          ]
        },
        {
          id: "s6-prognosis",
          title: "Prognosis",
          blocks: [
            { type: "p", text: "Bipolar I has a **poorer prognosis than major depressive disorder**. Lithium prophylaxis improves the course, but probably only **50–60 percent** achieve significant symptom control with lithium." },
            { type: "table", caption: "Course and outcome numbers", head: ["Measure", "Figure"], rows: [
              ["Second manic episode within 2 years of the first", "40–50%"],
              ["No recurrence", "About 7%"],
              ["More than one episode", "45%"],
              ["Chronic disorder", "40%"],
              ["Number of manic episodes", "2 to 30; mean about 9"],
              ["More than 10 episodes", "About 40%"],
              ["Long-term: well / well with relapses / partial remission / chronically ill", "15% / 45% / 30% / 10%"],
              ["Chronic symptoms with significant social decline", "One third"]
            ] },
            { type: "table", caption: "Prognostic indicators", head: ["Poorer prognosis", "Better prognosis"], rowHeads: false, rows: [
              ["Poor premorbid occupational status", "Short manic episodes"],
              ["Alcohol dependence", "Older age of onset"],
              ["Psychotic features", "Few suicidal thoughts"],
              ["Depressive features and interepisode depression", "Few coexisting psychiatric or medical problems"],
              ["Male sex", ""]
            ] }
          ]
        }
      ]
    },
    {
      title: "Treat",
      sections: [
        {
          id: "s6-tx-principles",
          title: "Principles and hospitalization",
          blocks: [
            { type: "p", text: "**Medications are the treatment of choice**, with psychotherapy as an essential adjunct. Treatment has acute and maintenance phases and needs different strategies for mania or hypomania versus depression. Lithium, augmented by antidepressants, antipsychotics and benzodiazepines, was the classic approach; **carbamazepine, valproate and lamotrigine** and several atypical antipsychotics are now common options. Several trials are often needed, and although monotherapy is the goal, **polypharmacy is common**." },
            { type: "p", text: "**Severe mania is best treated in hospital**, where aggressive dosing can bring a relatively quick response. Manic patients may test ward rules, shift responsibility onto others, exploit others’ weaknesses and **split staff**." },
            { type: "callout", kind: "caution", title: "Adherence", text: "Manic patients often lack insight and refuse medication. When impaired judgment, impulsivity and aggression put the patient or others at risk, **medication may be necessary to protect them from harm**." }
          ]
        },
        {
          id: "s6-mania-tx",
          title: "Treating acute mania",
          blocks: [
            { type: "table", wide: true, caption: "Pharmacologic treatment of acute mania (after Table 6-6, modified from CANMAT/ISBD)", head: ["Line", "Monotherapy", "Combination or adjunctive"], rows: [
              ["First line", "Lithium; divalproex (and ER); olanzapine; risperidone; quetiapine (and XR); aripiprazole; ziprasidone; asenapine; paliperidone ER; cariprazine", "Risperidone, quetiapine, olanzapine, aripiprazole or asenapine **added to lithium or divalproex**"],
              ["Second line", "Carbamazepine (and ER); ECT; haloperidol", "Lithium + divalproex"],
              ["Third line", "Chlorpromazine; clozapine; tamoxifen", "Lithium or divalproex + haloperidol; lithium + carbamazepine; adjunctive tamoxifen"],
              ["Not recommended", "Gabapentin; topiramate; **lamotrigine**; verapamil; tiagabine", "Risperidone + carbamazepine; olanzapine + carbamazepine"]
            ] },
            { type: "defs", title: "The main agents", items: [
              ["Lithium carbonate", "The **prototypical mood stabilizer**. Its antimanic onset is slow, so early treatment is often supplemented with atypical antipsychotics, anticonvulsants or high-potency benzodiazepines. **Therapeutic level 0.6–1.2 mEq/L.** Use has declined because of unpredictable efficacy, side effects and frequent lab tests, yet for many patients the benefit is remarkable."],
              ["Valproate (valproic acid, divalproex)", "Has **surpassed lithium** for acute mania. Indicated for acute mania only, though most experts believe it is also prophylactic. Dose **750–2,500 mg/day**, blood level **50–120 µg/mL**. **Oral loading 15–20 mg/kg from day 1** is well tolerated with rapid response. Requires some laboratory monitoring."],
              ["Carbamazepine", "First-line for decades worldwide; **FDA-approved for acute mania in 2004**. Dose **600–1,800 mg/day**, level **4–12 µg/mL**."],
              ["Oxcarbazepine", "Keto congener of carbamazepine; better tolerated, but efficacy data conflict and a Cochrane review found **insufficient evidence** for acute mania."],
              ["Atypical antipsychotics", "Many are FDA-approved. Compared with haloperidol and chlorpromazine they carry less risk of extrapyramidal effects and tardive dyskinesia, and many do not raise prolactin, but many cause **weight gain**. Some patients need maintenance antipsychotics."]
            ] },
            { type: "callout", kind: "exam", text: "Most patients respond **within 2 weeks**. If not, try **another first-line option**. If first-line options fail, consider haloperidol, carbamazepine or lithium + valproate, then other antipsychotics." }
          ]
        },
        {
          id: "s6-depression-tx",
          title: "Treating bipolar depression",
          blocks: [
            { type: "defs", items: [
              ["Lithium", "Limited evidence. Early studies were promising; later placebo-controlled trials did not confirm efficacy, though larger studies suggest it is at least as useful as other mood stabilizers."],
              ["Lamotrigine", "The **most promising anticonvulsant** for bipolar depression. Must be **titrated gradually to prevent a severe skin rash**. Evidence for valproate and others is limited; **gabapentin and levetiracetam appear ineffective**."],
              ["Quetiapine", "**Best evidence** among antipsychotics; a modest dose of **300 mg/day** is sufficient."],
              ["Olanzapine, lurasidone, cariprazine", "Positive studies; **lurasidone is FDA-approved** for bipolar depression."],
              ["Ziprasidone, aripiprazole", "**Do not appear effective** for bipolar depression."],
              ["Antidepressants", "Controversial, especially with **rapid cycling or mixed states**. Less effective than in major depression and may induce **cycling, mania or hypomania**. Risk of switching seems highest with **TCAs, MAOIs and perhaps SNRIs such as venlafaxine**. **Not appropriate as monotherapy.** Some (e.g., fluoxetine) have evidence as **adjuncts to a mood stabilizer**."],
              ["ECT", "For patients who do not respond to mood stabilizers and adjuncts, especially when **strong suicidality is a medical emergency**."],
              ["Other agents", "Mostly disappointing. Preliminary evidence for modafinil and armodafinil (listed with dopamine agonists) and N-acetylcysteine; conflicting evidence for omega-3 fatty acids; **ketamine** and other glutamatergic modulators may help treatment-resistant patients."]
            ] }
          ]
        },
        {
          id: "s6-aap-table",
          title: "Atypical antipsychotics in bipolar disorder",
          blocks: [
            { type: "table", wide: true, caption: "Efficacy summary and doses (after Table 6-7)", head: ["Drug", "Dose (mg/day)", "Acute mania", "Acute depression", "Prevents mania", "Prevents depression", "Notes"], rows: [
              ["Olanzapine", "5–20", "Yes", "Yes*", "Yes", "Yes", "*Benefit mostly sleep, appetite and tension, not core depression; smaller effect than for mania"],
              ["Risperidone", "1–6", "Yes", "No data", "Yes", "No", "Prophylaxis shown with the long-acting injection, not oral"],
              ["Quetiapine", "300–800", "Yes", "Yes", "Yes", "Yes", "300 mg as effective as 600 mg for depression; prevents both poles equally"],
              ["Ziprasidone", "80–160", "Yes", "No", "Yes", "No", "Prophylaxis shown as adjunct only"],
              ["Aripiprazole", "15–30", "Yes", "No", "Yes", "No", ""],
              ["Paliperidone", "6–12", "Yes", "No data", "Yes", "No", "Less effective than olanzapine in preventing episodes"],
              ["Asenapine", "10–20", "Yes", "No data", "Yes", "Yes", "Fewer relapses numerically, not significant"],
              ["Lurasidone", "40–120", "No data", "Yes", "Underway", "Underway", "Effective in depression with mixed features"],
              ["Cariprazine", "3–12", "Yes", "Yes", "No data", "No data", "1.5–3 mg for depression; up to 12 mg for mania"]
            ] },
            { type: "callout", kind: "exam", text: "Only **olanzapine, quetiapine and asenapine** are marked as preventing **both** mania and depression in Table 6-7. **Quetiapine** is the one with acute efficacy at both poles plus prevention of both." }
          ]
        },
        {
          id: "s6-monitoring",
          title: "Safety monitoring",
          blocks: [
            { type: "p", text: "Figure 6-2 (ISBD safety monitoring guidance) sets **basic parameters for everyone** before treatment, then **add-on monitoring by drug**." },
            { type: "list", title: "Baseline for every patient", items: [
              "**History**: medical comorbidity including cardiovascular risk factors, smoking, alcohol use, pregnancy status, family history of cardiovascular risk factors.",
              "**Investigations**: waist circumference and/or BMI, blood pressure, full blood count, electrolytes/urea/creatinine, liver function tests, fasting glucose, fasting lipids."
            ] },
            { type: "table", wide: true, caption: "Add-on monitoring by treatment (after Figure 6-2)", head: ["Drug", "Baseline", "Serum levels", "Ongoing"], rows: [
              ["Lithium", "TSH, calcium", "2 levels to set the dose, then every 3–6 months, after dose increases and as indicated", "Electrolytes/urea/creatinine every 3–6 months; calcium, TSH and weight at 6 months, then yearly"],
              ["Valproate", "Hematologic and hepatic history", "2 levels to set the dose, then as indicated", "Weight, blood count, LFTs and menstrual history every 3 months for a year, then yearly; BP, glucose, lipids and bone density if risk factors"],
              ["Carbamazepine", "Hematologic and hepatic history", "2 levels **4 weeks apart** to set the dose, then as indicated", "Blood count, LFTs, electrolytes monthly for 3 months, then yearly; **watch for rash** early; bone density if risk factors; **review contraceptive efficacy**"],
              ["Lamotrigine", "—", "—", "**Alert to rash**"],
              ["Atypical antipsychotics (not clozapine)", "—", "—", "Weight monthly for 3 months, then every 3 months; BP and fasting glucose every 3 months for a year, then yearly; lipids at 3 months, then yearly; ECG and prolactin as indicated"]
            ] },
            { type: "callout", kind: "pearl", text: "Long-term lithium often requires **thyroid supplementation** for lithium-induced hypothyroidism." }
          ]
        },
        {
          id: "s6-maintenance",
          title: "Maintenance and treatment failure",
          blocks: [
            { type: "p", text: "**Preventing recurrence is the greatest challenge.** The regimen must keep the patient euthymic without side effects that impair function. **Sedation, cognitive impairment, tremor, weight gain and rash** are common reasons patients stop." },
            { type: "list", items: [
              "**Lithium, carbamazepine and valproic acid**, alone or combined, are the most widely used long-term agents.",
              "**Lamotrigine** has prophylactic antidepressant and possibly mood-stabilizing properties; it is **better for the depressive pole** than the manic, both acutely and for prevention.",
              "Do not stop antimanic medication before about **3 months**, the length of an untreated manic episode.",
              "**Transcranial magnetic stimulation** and **magnetic seizure therapy** have limited but promising data."
            ] },
            { type: "steps", title: "When treatment fails", items: [
              ["Allow about 2 weeks", "Most patients respond within this time."],
              ["Switch to another first-line agent", "There are several, and most patients respond to one of them, at least in mania. Depression may be harder."],
              ["Second options", "Haloperidol, carbamazepine, or lithium plus valproate."],
              ["Then", "Consider other antipsychotics. ECT is available for refractory depression or emergencies."]
            ] }
          ]
        },
        {
          id: "s6-psychotherapy",
          title: "Psychotherapy",
          blocks: [
            { type: "p", text: "Psychotherapy is a crucial adjunct whose goals are to **support adherence, promote stability and avoid risk factors**. CBT, interpersonal and social rhythm therapy, and family-focused therapy are all reasonable choices." },
            { type: "table", wide: true, caption: "Efficacious psychotherapies for bipolar disorder (after Table 6-8)", head: ["Therapy", "How it conceptualizes the disorder", "Sample interventions"], rows: [
              ["Cognitive-behavioral therapy", "Biologic vulnerability interacting with stress; skill deficits limit symptom management", "Challenge automatic thoughts that undermine adherence; rewarding activities that add routine and stability; practice communicating with providers"],
              ["Interpersonal and social rhythm therapy", "Interpersonal vulnerabilities from early attachment and learned relationship patterns, plus **disrupted social rhythms**", "Awareness of relationship patterns, including with the therapist; **track and stabilize social rhythms**; interpersonal skills training; communication analysis"],
              ["Family-focused therapy", "Biologic vulnerability worsened by **negative expressed emotion** in the family", "Education on precipitants, risks and treatment; a **relapse prevention plan agreed by all family members**; communication and problem-solving training"]
            ] }
          ]
        }
      ]
    },
    {
      title: "Understand the disorder",
      sections: [
        {
          id: "s6-epi",
          title: "Epidemiology",
          blocks: [
            { type: "list", items: [
              "Annual incidence is usually estimated at **under 1 percent**; worldwide it varies from **0.3 to 1.2 percent** by country. Milder forms are easily missed.",
              "Unlike major depression, bipolar I has a **roughly equal prevalence in men and women**. **Mania is more common in men; depression in women.** Women are more likely to have **mixed** episodes and **rapid cycling**.",
              "Onset is **earlier than major depression**: from childhood (as early as 5–6 years) to 50 or older, **mean age 30**.",
              "More common in **divorced and single** people, possibly reflecting early onset and marital discord.",
              "Higher incidence in **upper socioeconomic groups**, yet more common in people **without a college degree**, again possibly reflecting early onset."
            ] },
            { type: "table", caption: "Past-year prevalence of bipolar disorder in US adults (Figure 6-3, NCS-R 2001–2003)", head: ["Group", "Approximate %"], rows: [
              ["Overall", "2.8"], ["Female", "2.8"], ["Male", "2.9"], ["Age 18–29", "4.7"], ["Age 30–44", "3.5"], ["Age 45–59", "2.2"], ["Age 60+", "0.7"]
            ], note: "Values read from the chapter’s bar chart." }
          ]
        },
        {
          id: "s6-neuro",
          title: "Neurobiology and genetics",
          blocks: [
            { type: "p", text: "The most consistent finding, as in depressive disorders, is more **subcortical hyperintensities** (periventricular regions, basal ganglia, thalamus), more common in bipolar I than in depressed adults. They likely reflect the **neurodegenerative effects of recurrent episodes**." },
            { type: "table", caption: "Inheritance", head: ["Finding", "Figure"], rows: [
              ["Twin heritability", "0.7–0.8"],
              ["Risk in first-degree relatives", "About 10-fold"],
              ["Relatives of bipolar probands (one large study)", "3-fold more bipolar disorder, 2-fold more unipolar disorder"],
              ["Most common mood disorder in families of bipolar probands", "Unipolar depression"]
            ] },
            { type: "list", title: "Molecular genetics", items: [
              "Linkage studies implicated **chromosomes 18q and 22q**; the 18q signal came mainly from bipolar II sibling pairs and families with panic symptoms.",
              "GWAS show **polygenic risk**: many loci of small effect, overlapping with other severe disorders.",
              "Perhaps the most important finding: **most genes associated with bipolar disorder are also associated with schizophrenia**.",
              "Candidate genes involve **neurodevelopment** and **voltage-dependent calcium channels**."
            ] },
            { type: "defs", title: "Imaging", items: [
              ["Structural, inconsistent", "Gray matter differences reported in striatum, thalamus, amygdala, hippocampus and pituitary, but studies are small and conflicting; one meta-analysis found no overall support."],
              ["Structural, consistent", "**Inferior frontal gyrus, left insula, cerebellum and left orbitofrontal gyrus**, seen in patients **and first-degree relatives**. Some show **increased thickness**, suggesting compensation rather than cause. The inferior frontal gyrus may underlie **response inhibition**."],
              ["Functional", "**Increased activation** in superior and medial frontal cortex and insula (executive function, working memory); **decreased activation** in amygdala, basal ganglia and limbic system, possibly downregulation."]
            ] },
            { type: "list", title: "Other biologic findings", items: [
              "Inflammatory markers, especially **interleukin-6**, are elevated, more so in **adolescence** than adulthood.",
              "**BDNF** alterations, which in one study predicted **lithium response**; oxidative stress findings also related to lithium response (preliminary).",
              "**HPA axis** dysregulation with increased ACTH and cortisol, but only **after symptoms begin**, suggesting a consequence (a neurobiologic scar) rather than a cause."
            ] }
          ]
        },
        {
          id: "s6-psychology",
          title: "Neuropsychology",
          blocks: [
            { type: "p", text: "The most commonly reported deficits are in **executive functioning and verbal memory and learning**; deficits in cognitive flexibility, psychomotor speed and attention are reported less consistently." },
            { type: "p", text: "**Response inhibition**, the ability to hold back an impulsive response that would be inappropriate in context, is often deficient in patients **and in unaffected first-degree relatives**, and especially in **bipolar disorder with psychotic features**. General impulsivity and risk-taking are other executive deficits. Similar deficits occur in schizophrenia (the chapter describes them as less severe there and less likely to be recognized before onset), raising the possibility of a broader psychotic spectrum that crosses diagnostic lines." }
          ]
        },
        {
          id: "s6-etiology",
          title: "Etiology",
          blocks: [
            { type: "p", text: "Disrupted systems for **emotional regulation and executive function** are implicated, but it is unclear which findings cause the illness and which result from it." },
            { type: "defs", title: "Biologic theories", items: [
              ["Calcium signaling", "Supported by genetic findings in **voltage-gated calcium channel** genes, by drugs that act on calcium channels (antiepileptics), by increased intracellular calcium signaling in patients’ neurons, and by calcium channel abnormalities in **high-risk asymptomatic people and relatives**, suggesting a causal role."],
              ["Neurodevelopment", "As in schizophrenia; immune markers are more prevalent in **adolescence** than adulthood."],
              ["HPA axis", "Disruption appears only after symptoms occur: a **scar** of the illness."]
            ] },
            { type: "h", text: "Psychosocial theories" },
            { type: "p", text: "Most psychodynamic theories see **mania as a defense against underlying depression**. These views have lost ground as biologic evidence has grown, but environment, especially **psychosocial stress**, is likely crucial." },
            { type: "defs", items: [
              ["Karl Abraham", "Mania may reflect an inability to tolerate a developmental tragedy such as **loss of a parent**."],
              ["Tyrannical superego", "Excessive self-criticism replaced by euphoric self-satisfaction."],
              ["Bertram Lewin", "The ego is overwhelmed by pleasurable impulses (sex) or feared impulses (aggression)."],
              ["Melanie Klein", "Mania as a defense against depression using **manic defenses such as omnipotence**, leading to grandiosity."]
            ] },
            { type: "case", title: "Chapter case: Ms. G at her son’s bedside", text: "A devout 42-year-old mother, usually somewhat low, became hypomanic and then frankly manic (without psychosis) when her only child, conceived after 10 years of trying, was diagnosed with leukemia. As his prognosis worsened she grew more cheerful, sleepless and joking, describing a metaphoric oneness with the Virgin Mary. Her mania resolved when he went into remission.", point: "An illustration of the psychodynamic view of mania as a defense against overwhelming loss and depression." }
          ]
        }
      ]
    }
  ]
});
