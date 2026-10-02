/* Chapter 5 clinical case cards: single best answer. `answer` is the zero-based index of the correct choice. */
KS.add("ch05", "cases", [
  {
    id: "cs01", tag: "Diagnosis",
    q: "A 24-year-old graduate student, previously sociable and doing well, develops persecutory delusions and hears voices commenting on him. Symptoms began 10 weeks ago after a breakup. There is no mood syndrome or substance use. What is the most likely diagnosis?",
    choices: ["Schizophreniform disorder", "Brief psychotic disorder", "Schizophrenia", "Delusional disorder", "Schizoaffective disorder"],
    answer: 0,
    why: "Schizophrenia-type symptoms lasting at least 1 month but less than 6 months fit schizophreniform disorder. Brief psychotic disorder lasts under a month; schizophrenia needs 6 months; prominent hallucinations argue against delusional disorder."
  },
  {
    id: "cs02", tag: "Diagnosis",
    q: "A 62-year-old retired woman has believed for 8 months that her downstairs neighbor is trying to poison her with fumes so she will move. She still plays tennis daily and sees friends. Apart from mild low mood and trouble sleeping, her mental status is normal. Diagnosis?",
    choices: ["Brief psychotic disorder", "Paranoid personality disorder", "Late-onset schizophrenia", "Major depressive disorder with psychotic features", "Delusional disorder, persecutory type"],
    answer: 4,
    why: "A single nonbizarre delusion for more than 1 month, preserved function and an otherwise normal MSE define delusional disorder. Her depressive symptoms are subthreshold, so this is not psychotic depression."
  },
  {
    id: "cs03", tag: "Diagnosis",
    q: "Two weeks after losing her home in a flood, a 29-year-old woman becomes acutely paranoid, screams, then falls mute, and has patchy memory for recent events. Eighteen days later she is entirely back to normal. Which diagnosis and specifier fit best?",
    choices: ["Delusional disorder, mixed type", "Schizophreniform disorder, with good prognostic features", "Schizophrenia, first episode, in full remission", "Brief psychotic disorder, without marked stressors", "Brief psychotic disorder, with marked stressors"],
    answer: 4,
    why: "Sudden psychosis lasting at least 1 day but under 1 month with full recovery is brief psychotic disorder; the flood is a marked stressor. Emotional volatility, screaming or muteness and impaired recent memory are characteristic."
  },
  {
    id: "cs04", tag: "Diagnosis",
    q: "Ten days after delivering her first child, a 27-year-old woman develops hallucinations and delusions that resolve completely in 2 weeks. Medical workup is negative. Which specifier applies?",
    choices: ["With bizarre content", "Without marked stressors only", "With catatonia", "Continuous", "With peripartum onset"],
    answer: 4,
    why: "In brief psychotic disorder, peripartum onset means onset during pregnancy or within 4 weeks of delivery."
  },
  {
    id: "cs05", tag: "Diagnosis",
    q: "A 40-year-old man has had recurrent manic and depressive episodes for 15 years, which make up most of his illness. He also hears voices continuously, including for 3 weeks during which his mood was normal. Diagnosis?",
    choices: ["Schizophrenia with comorbid bipolar disorder", "Schizophreniform disorder", "Bipolar I disorder with psychotic features", "Schizoaffective disorder, bipolar type", "Schizoaffective disorder, depressive type"],
    answer: 3,
    why: "Mood episodes for the majority of the illness plus at least 2 weeks of psychosis without mood symptoms is schizoaffective disorder; a manic episode makes it the bipolar type. In bipolar disorder with psychotic features, psychosis resolves with the mood episode."
  },
  {
    id: "cs06", tag: "Differential",
    q: "A 55-year-old man with severe depression believes he has committed unforgivable sins and deserves punishment. Which finding would most support psychotic depression over schizophrenia?",
    choices: ["He has voices commenting on his behavior", "The delusions are mood-congruent and resolve completely when the depression resolves", "The delusions persist after the depression remits", "He has a family history of schizophrenia", "He shows poverty of speech"],
    answer: 1,
    why: "In mood disorders, delusions are typically mood-congruent (guilt, punishment, incurable illness) and resolve entirely with the mood episode. Withdrawal and poor self-care in depression should not be mistaken for negative symptoms."
  },
  {
    id: "cs07", tag: "Differential",
    q: "A 35-year-old man with a 12-year history of schizophrenia now reports smelling burning rubber and seems confused about the date. What is the best next step?",
    choices: ["Add a benzodiazepine", "Pursue a medical and neurologic workup for a secondary cause", "Attribute the change to his known schizophrenia", "Increase his antipsychotic dose", "Switch to clozapine"],
    answer: 1,
    why: "Olfactory hallucinations are unusual in schizophrenia and disorientation suggests a brain disorder. A patient with schizophrenia is just as likely as anyone to have, for example, a temporal lobe tumor or complex partial seizures."
  },
  {
    id: "cs08", tag: "Differential",
    q: "A 30-year-old man facing assault charges reports dramatic voices and bizarre beliefs only when his attorney is present. He appears fully in control of what he reports. Most likely explanation?",
    choices: ["Delusional disorder", "Factitious disorder", "Schizotypal personality disorder", "Brief psychotic disorder", "Malingering"],
    answer: 4,
    why: "Full control over symptom production with an obvious legal or financial motive suggests malingering. Factitious disorder involves less control over the falsification."
  },
  {
    id: "cs09", tag: "Differential",
    q: "A manic patient jumps rapidly from topic to topic. On careful listening, each idea is linked to the one before it. How should you interpret this?",
    choices: ["Word salad", "Loosening of associations typical of schizophrenia", "Clang associations only", "Flight of ideas with preserved associative links", "Thought blocking"],
    answer: 3,
    why: "In mania, flight of ideas can resemble schizophrenic thought disorder, but the associative links between topics are conserved; it is hard to follow because of the speed."
  },
  {
    id: "cs10", tag: "Differential",
    q: "A 26-year-old has been odd, aloof and magical in her thinking for as long as her family can remember, with no clear date of onset and no sustained psychosis. Which best distinguishes her condition from schizophrenia?",
    choices: ["Female sex", "Presence of hallucinations", "Normal IQ", "Poor response to antipsychotics", "Mild symptoms with a lifelong course and no identifiable onset"],
    answer: 4,
    why: "Personality disorders such as schizotypal overlap with schizophrenia but have milder symptoms, a lifelong history and no identifiable date of onset."
  },
  {
    id: "cs11", tag: "Workup",
    q: "A 22-year-old presents with a first episode of psychosis. Her family asks which test will confirm schizophrenia. What is the best reply?",
    choices: ["Genetic testing for C4 alleles confirms it", "A positive dexamethasone suppression test confirms it", "An MRI showing enlarged ventricles confirms it", "A reduced P300 on EEG confirms it", "No test confirms it; tests such as serology are used to rule out other causes like syphilis or anti-NMDA receptor encephalitis"],
    answer: 4,
    why: "Schizophrenia is a clinical diagnosis. Group-level findings (ventricles, P300, genetics) are not diagnostic in an individual; tests mainly exclude other causes."
  },
  {
    id: "cs12", tag: "Catatonia",
    q: "A patient is mute, holds his arm in the air for long periods, and his limbs can be repositioned like soft wax. He also grimaces. Which DSM-5 specifier applies, and what is the minimum number of features?",
    choices: ["With catatonia; two features", "With catatonia; three features", "With bizarre content; one feature", "With marked stressors; three features", "Continuous; two features"],
    answer: 1,
    why: "Mutism, catalepsy, waxy flexibility and grimacing meet the DSM-5 catatonia specifier, which requires three or more features."
  },
  {
    id: "cs13", tag: "Catatonia",
    q: "A patient with catatonic schizophrenia alternates between stupor and frenzied excitement. Besides supervision to prevent injury, what else must the team monitor for?",
    choices: ["Tardive dyskinesia", "Hypersalivation", "Thought broadcasting", "Galactorrhea", "Malnutrition, exhaustion and hyperpyrexia"],
    answer: 4,
    why: "During catatonic excitement patients often need medical care for malnutrition, exhaustion, hyperpyrexia or self-inflicted injury."
  },
  {
    id: "cs14", tag: "Suicide risk",
    q: "Which patient with schizophrenia is at highest suicide risk?",
    choices: ["A 35-year-old woman with late-onset paranoid symptoms responding well to medication", "A 45-year-old man with chronic voices he finds comforting", "A 60-year-old woman with prominent negative symptoms and stable housing", "A 23-year-old former honors student who has declined in function, sees his ambitions slipping away and has lost faith in treatment", "A 50-year-old man with a fixed jealous delusion"],
    answer: 3,
    why: "The highest-risk profile is a young man who once had high expectations, has declined from a higher level of function, realizes his dreams may not come true and has lost faith in treatment. Major depression is the most important single factor."
  },
  {
    id: "cs15", tag: "Suicide risk",
    q: "A patient with schizophrenia, hospitalized twice for suicide attempts, has persistent suicidal ideation despite two adequate antipsychotic trials. Which medication is most supported by the chapter?",
    choices: ["Lurasidone", "Propranolol", "Haloperidol decanoate", "Clozapine", "Lamotrigine"],
    answer: 3,
    why: "A large pharmacologic study suggests clozapine may be particularly effective in reducing suicidal ideation in patients with prior hospitalizations for suicidality; two failed trials also make clozapine appropriate."
  },
  {
    id: "cs16", tag: "Safety",
    q: "During an outpatient interview, you notice you feel afraid of a pacing patient with persecutory delusions and prior assaults. What should you do?",
    choices: ["Confront the patient about his delusions", "Lock the office door", "Continue alone to preserve rapport", "End the interview or continue only with an attendant ready", "Ignore the feeling as countertransference"],
    answer: 3,
    why: "The chapter advises treating fear as a clue that the patient may be about to act out. Persecutory delusions and previous violence are risk factors."
  },
  {
    id: "cs17", tag: "Agitation",
    q: "A severely agitated 21-year-old man with acute psychosis needs rapid IM medication. He had a frightening dystonic reaction to haloperidol last year. Which option best avoids EPS?",
    choices: ["IM chlorpromazine at high dose", "IM fluphenazine", "IM olanzapine or IM ziprasidone", "IM haloperidol", "Oral perphenazine"],
    answer: 2,
    why: "IM ziprasidone and olanzapine, like their oral forms, cause little EPS in acute treatment, an advantage over haloperidol or fluphenazine. IM lorazepam is another reliable option."
  },
  {
    id: "cs18", tag: "Agitation",
    q: "You want a sedative for psychotic agitation that is reliably absorbed by mouth or by injection and may lower the antipsychotic dose needed. Which drug?",
    choices: ["Quetiapine XR", "Benztropine", "Diazepam", "Lorazepam", "Propranolol"],
    answer: 3,
    why: "Lorazepam has reliable oral and IM absorption, and benzodiazepines may reduce the amount of antipsychotic needed."
  },
  {
    id: "cs19", tag: "Side effects",
    q: "Three days after starting a high-potency first-generation antipsychotic, a young man cannot sit still and paces constantly, feeling inner restlessness. What is a reasonable treatment?",
    choices: ["Start clozapine immediately", "Add an SSRI", "Add lithium", "Propranolol 30–90 mg/day", "Increase the antipsychotic dose"],
    answer: 3,
    why: "This is akathisia. Centrally acting β-blockers such as propranolol may help, and most patients respond to 30–90 mg per day. Dose reduction or switching are also options."
  },
  {
    id: "cs20", tag: "Side effects",
    q: "A patient on haloperidol has a masked face, slowed movements and little spontaneous speech. Before calling these negative symptoms, what else must you consider?",
    choices: ["Malingering", "Only tardive dyskinesia", "Antipsychotic-induced parkinsonism and depression", "Catatonia due to lithium", "Hyperprolactinemia"],
    answer: 2,
    why: "Flat or blunted affect may come from the illness, parkinsonian side effects of antipsychotics, or depression; differentiating them changes management."
  },
  {
    id: "cs21", tag: "Side effects",
    q: "A 19-year-old man is starting a relatively high dose of a high-potency conventional antipsychotic. Why might you add a prophylactic antiparkinson drug?",
    choices: ["Young men are especially vulnerable to dystonia", "It improves negative symptoms", "It prevents tardive dyskinesia", "It speeds antipsychotic response", "It lowers prolactin"],
    answer: 0,
    why: "Prophylaxis may help when prescribing high-potency drugs to young men, who are more vulnerable to dystonia, and to anyone with prior EPS sensitivity. Such patients should also be considered for newer drugs."
  },
  {
    id: "cs22", tag: "Side effects",
    q: "A 34-year-old woman on an antipsychotic reports milky nipple discharge and irregular periods. What is the most likely mechanism?",
    choices: ["Agranulocytosis", "Hypothyroidism", "Muscarinic blockade", "Elevated prolactin", "Serotonin syndrome"],
    answer: 3,
    why: "The chapter notes antipsychotics elevate prolactin, causing galactorrhea and irregular menses; chronic elevation suppresses GnRH and gonadal hormones, affecting libido and possibly bone density."
  },
  {
    id: "cs23", tag: "Tardive dyskinesia",
    q: "A 58-year-old man on a first-generation antipsychotic for 20 years develops severe tardive dyskinesia affecting speech and eating. His psychosis still requires treatment. Which drug is effective for severe TD?",
    choices: ["Chlorpromazine", "Benztropine", "Fluphenazine decanoate", "Clozapine", "Haloperidol at a higher dose"],
    answer: 3,
    why: "Clozapine is effective in reducing severe tardive dyskinesia or tardive dystonia. Other steps: lowest effective dose, consider alternatives or dose reduction, or stopping or switching if TD worsens."
  },
  {
    id: "cs24", tag: "Tardive dyskinesia",
    q: "Five weeks after stopping a depot antipsychotic, a patient develops new choreiform mouth movements. Could this still be tardive dyskinesia?",
    choices: ["Yes; TD can begin within 8 weeks after withdrawing a depot", "No; TD only occurs during treatment", "Only in patients over 65", "Only if he was also on an anticholinergic", "No; the window after a depot is 2 weeks"],
    answer: 0,
    why: "TD usually begins during treatment, within 4 weeks of stopping an oral antipsychotic, or within 8 weeks after withdrawing a depot."
  },
  {
    id: "cs25", tag: "Monitoring",
    q: "You switch a patient from haloperidol to olanzapine. What weight monitoring does the chapter recommend?",
    choices: ["No monitoring is needed with second-generation drugs", "Weigh and calculate BMI at every visit for at least 6 months, plus fasting glucose and lipids", "BMI only if the patient complains", "Weight at 1 year only", "Monthly HbA1c for life"],
    answer: 1,
    why: "Because SGAs affect insulin metabolism, monitor BMI, fasting glucose and lipids, and weigh at every visit for at least 6 months after a medication change."
  },
  {
    id: "cs26", tag: "Clozapine",
    q: "A patient started clozapine 8 months ago. In the US monitoring program, how often should his blood counts be checked now?",
    choices: ["Weekly", "Every 2 weeks", "Monthly", "Every 3 months", "No longer needed"],
    answer: 1,
    why: "Weekly for the first 6 months, every 2 weeks for the next 6 months, and monthly thereafter."
  },
  {
    id: "cs27", tag: "Clozapine",
    q: "A patient on clozapine 700 mg/day is doing well psychiatrically. Which serious risk is substantially increased at this dose?",
    choices: ["Seizures, up to 5% above 600 mg", "Agranulocytosis rising to 5%", "Hyperprolactinemia", "Tardive dyskinesia", "Acute dystonia"],
    answer: 0,
    why: "Seizures occur in as many as 5 percent of patients at doses above 600 mg. Agranulocytosis occurs in about 0.3 percent."
  },
  {
    id: "cs28", tag: "Clozapine",
    q: "When do most guidelines recommend considering clozapine for schizophrenia?",
    choices: ["After failure of at least two other antipsychotic trials", "Only for patients over 40", "After one week of nonresponse", "Only after ECT fails", "As first-line for all first episodes"],
    answer: 0,
    why: "Its serious side effects and monitoring burden relegate clozapine to a later option, considered after at least two failed antipsychotic trials."
  },
  {
    id: "cs29", tag: "Treatment response",
    q: "A patient started risperidone 12 days ago at an adequate dose and shows no improvement at all. What does the chapter suggest?",
    choices: ["Add ECT immediately", "No response by week 2 lowers the chance of benefit; a change may be the best option", "Response never occurs before 12 weeks, so wait", "Stop all medication", "Double the dose above the maximum"],
    answer: 1,
    why: "A meta-analysis found patients with no response by the second week were less likely to benefit. More generally, 4–6 weeks at an adequate dose is a reasonable trial."
  },
  {
    id: "cs30", tag: "Treatment response",
    q: "After 6 weeks on haloperidol, a patient has improved little and his plasma level is very low. What is the most common explanation?",
    choices: ["Rapid metabolism", "Nonadherence or partial adherence", "Poor absorption", "Drug-induced hepatitis", "Laboratory error"],
    answer: 1,
    why: "A low level may reflect rapid metabolism or poor absorption, but more commonly nonadherence or partial adherence. Raising the dose may help in these situations."
  },
  {
    id: "cs31", tag: "Treatment response",
    q: "A partial responder is already at the top of the usual dose range. What does the chapter favor?",
    choices: ["Add a second identical drug", "Switch to another antipsychotic", "Discontinue and observe", "Add donepezil", "Exceed the maximum dose"],
    answer: 1,
    why: "Higher than recommended doses usually do not improve response; changing to another drug is preferable. Clozapine follows after repeated failure."
  },
  {
    id: "cs32", tag: "Maintenance",
    q: "A 21-year-old in full remission 7 months after a first psychotic episode wants to stop his antipsychotic before starting university. What is the best advice?",
    choices: ["Stop now; one episode needs only acute treatment", "Switch to an as-needed regimen", "Stop now and restart only if voices return", "Continue indefinitely regardless of course", "Continue for at least 1 year; relapse within a year is about 53–72% off medication versus 16–23% on it"],
    answer: 4,
    why: "First-episode patients should be maintained at least a year, and some experts feel that is not enough, especially for people in school or work who have a lot to lose."
  },
  {
    id: "cs33", tag: "Maintenance",
    q: "A 33-year-old has had three psychotic relapses, each after stopping medication. What maintenance plan do most experts recommend?",
    choices: ["ECT maintenance only", "Psychotherapy alone", "Consider indefinite treatment, and consider a long-acting injectable", "Treat each relapse only", "1 year of treatment then stop"],
    answer: 2,
    why: "With two or more episodes, most experts recommend considering indefinite treatment. LAIs help adherence and reduce relapse, particularly in real-world settings."
  },
  {
    id: "cs34", tag: "LAI",
    q: "You start aripiprazole 400 mg long-acting injection monthly. What else is needed at initiation?",
    choices: ["A loading dose of 156 mg on day 8", "Nothing; levels are therapeutic immediately", "Lorazepam for 1 month", "3 weeks of oral risperidone", "2 weeks of oral aripiprazole 10–20 mg"],
    answer: 4,
    why: "Table 5-10: aripiprazole LAI 400 mg is started with 2 weeks of oral aripiprazole. Oral supplementation is generally needed while plasma levels rise."
  },
  {
    id: "cs35", tag: "LAI",
    q: "Which initiation schedule matches paliperidone monthly long-acting injection in Table 5-10?",
    choices: ["25 mg with 3 weeks of oral overlap", "400 mg with 2 weeks of oral overlap", "10–20 times the oral dose", "12.5 mg every 2 weeks", "234 mg deltoid on day 1, then 156 mg on day 8, then monthly"],
    answer: 4,
    why: "Paliperidone LAI: 234 mg into the deltoid on day 1, 156 mg on day 8, then 39–234 mg deltoid or gluteal every 4 weeks."
  },
  {
    id: "cs36", tag: "Drug details",
    q: "A patient on lurasidone has had little benefit. He takes it at bedtime on an empty stomach. What is the likely problem?",
    choices: ["He needs a CYP2D6 inhibitor", "He needs oral loading with olanzapine", "Lurasidone should be taken with a meal of at least 350 kcal", "Bedtime dosing causes akathisia", "Lurasidone must be taken sublingually"],
    answer: 2,
    why: "Table 5-10 specifies lurasidone with a meal of at least 350 kcal (bioavailability is only 9–19%). Ziprasidone similarly needs at least 500 kcal."
  },
  {
    id: "cs37", tag: "Drug details",
    q: "A patient prescribed asenapine has been swallowing the tablets. What is the consequence?",
    choices: ["Toxicity from higher absorption", "Increased EPS", "Bioavailability falls to about 2% or less", "Faster onset", "No change"],
    answer: 2,
    why: "Asenapine is sublingual (35% bioavailability); swallowed, bioavailability is 2% or less. Patients should avoid eating or drinking for 10 minutes after a dose."
  },
  {
    id: "cs38", tag: "Somatic treatment",
    q: "A patient with schizophrenia has a poor response to antipsychotics and the team plans ECT. What does the chapter say about antipsychotics during ECT?",
    choices: ["Use only benzodiazepines", "Stop them for the full course", "Continue them during and after ECT", "Replace them with lithium", "Stop them after the first treatment"],
    answer: 2,
    why: "ECT added to antipsychotics is more effective than antipsychotics alone, and antipsychotics should be administered during and after ECT."
  },
  {
    id: "cs39", tag: "Delusional disorder",
    q: "A 50-year-old with delusional disorder asks you to agree that his neighbor is spying on him. What is the best approach?",
    choices: ["Refer him to the police", "Argue firmly against the delusion each session", "Discharge him since he functions well", "Agree, to build rapport", "Avoid colluding or debating its truth; build the alliance and focus on his anxiety, mood and sleep"],
    answer: 4,
    why: "Pretending to accept the delusion confuses reality and breeds later distrust. In the chapter’s case, avoiding the veracity debate and treating anxiety, depression and insomnia allowed medications to be introduced."
  },
  {
    id: "cs40", tag: "Shared psychosis",
    q: "A passive, socially isolated woman shares her dominant, chronically psychotic sister’s belief that the government is poisoning their water. What intervention may lead the secondary partner to give up the delusion?",
    choices: ["ECT for the secondary case", "Separation from the primary case", "Exploratory psychotherapy together", "High-dose antipsychotics for both", "No intervention ever helps"],
    answer: 1,
    why: "In shared psychosis, if the pair separates the secondary person may abandon the delusion, though not uniformly."
  },
  {
    id: "cs41", tag: "Psychosocial",
    q: "A recently discharged patient with schizophrenia returns home. His family wants him back at work next week and avoids mentioning his hospitalization. What does the chapter recommend?",
    choices: ["Encourage a rapid return to full activity", "Long-term insight-oriented family analysis", "No family involvement", "Brief, intensive family therapy with psychoeducation, open discussion of the episode, and control of emotional intensity", "Avoid discussing the episode to reduce shame"],
    answer: 3,
    why: "Families often push too fast. Therapy should educate, encourage discussion of the episode and what led to it, identify troublesome situations, and keep sessions from becoming emotionally intense."
  },
  {
    id: "cs42", tag: "Psychosocial",
    q: "A patient with chronic schizophrenia has repeated admissions, misses appointments and lives alone. A team will deliver medications at home, monitor his health and provide in vivo skills training around the clock. What is this program?",
    choices: ["Cognitive remediation", "Sheltered workshop", "Assertive Community Treatment (ACT)", "Clubhouse model", "Partial hospitalization"],
    answer: 2,
    why: "ACT, developed in Madison, Wisconsin, in the 1970s, uses a multidisciplinary team with a fixed caseload, staff ratio about 1:12, 24/7. It reduces rehospitalization but is expensive."
  },
  {
    id: "cs43", tag: "Psychosocial",
    q: "A patient has poor eye contact, delayed responses, odd facial expressions and misreads others’ emotions. Which intervention targets these directly with video, role play and homework?",
    choices: ["Cognitive remediation", "Art therapy", "Supported employment", "Psychoanalysis", "Social skills training"],
    answer: 4,
    why: "Social skills (behavioral skills) training uses videotapes, role play and homework, and can reduce relapse and hospitalization."
  },
  {
    id: "cs44", tag: "Psychosocial",
    q: "A new resident greets a suspicious patient with schizophrenia warmly by first name and tells him they will be friends. What is the patient likely to perceive?",
    choices: ["Reassurance that improves the alliance", "Bribery, manipulation or exploitation", "Nothing; patients ignore style", "Indifference", "Professional distance"],
    answer: 1,
    why: "Exaggerated warmth or professions of friendship are likely to be seen as bribery, manipulation or exploitation. Directness, patience, sincerity and respect for social conventions work better."
  },
  {
    id: "cs45", tag: "Course and prognosis",
    q: "Which first-episode patient has the most favorable prognosis according to Table 5-9?",
    choices: ["A 12-year-old with gradual decline", "A 19-year-old with marked cognitive impairment", "A 28-year-old woman in a developed country with acute onset", "A 22-year-old man with poor premorbid functioning", "A 15-year-old boy with insidious onset"],
    answer: 2,
    why: "Positive factors: acute onset, female sex, living in a developed country. Poor: insidious or child/adolescent onset, poor premorbid functioning, cognitive impairment."
  },
  {
    id: "cs46", tag: "Special populations",
    q: "A 52-year-old woman develops paranoid delusions and hallucinations for 8 months with no mood, medical or substance cause. What do you tell her family about prognosis?",
    choices: ["Antipsychotics are ineffective after 45", "This is always delusional disorder", "Late onset always means dementia", "Prognosis is worse than early-onset illness", "Late-onset schizophrenia usually responds well to antipsychotics and has a favorable prognosis"],
    answer: 4,
    why: "Late-onset schizophrenia (after 45) is more common in women, paranoid symptoms predominate, and patients usually do well on antipsychotics."
  },
  {
    id: "cs47", tag: "Comorbidity",
    q: "A patient with schizophrenia has smoked heavily since age 14 and used cannabis daily. His mother asks whether he uses drugs to treat his voices. Which model of the schizophrenia–substance link does the chapter say is best supported?",
    choices: ["Self-medication", "Shared vulnerability", "No link exists", "Diathesis–stress", "Cannabis is the sole cause"],
    answer: 1,
    why: "Evidence favors shared vulnerability: common genetic or environmental insults disrupt circuits such as reward pathways, raising both adolescent substance use and schizophrenia."
  },
  {
    id: "cs48", tag: "Course",
    q: "A 17-year-old who was always quiet and friendless spends months complaining of headaches and fatigue, quits sports and becomes absorbed in philosophy and the occult before developing voices. How should these earlier changes be understood?",
    choices: ["Somatic symptom disorder only", "Premorbid traits followed by a prodrome of the evolving illness", "Signs of delusional disorder", "Unrelated adolescent behavior", "Malingering"],
    answer: 1,
    why: "Schizoid or schizotypal premorbid traits, somatic complaints, functional decline and new interest in abstract, philosophic or occult ideas are classic premorbid and prodromal features, often recognized only in hindsight."
  },
  {
    id: "cs49", tag: "Genetics",
    q: "The identical twin of a patient with schizophrenia asks about her own risk. What does the chapter say?",
    choices: ["About 100%", "About 50%", "About 10%", "Same as the general population", "About 80%"],
    answer: 1,
    why: "Monozygotic concordance is about 50 percent, four to five times the rate in dizygotic twins or other first-degree relatives, showing that genes are not the whole story."
  },
  {
    id: "cs50", tag: "Genetics",
    q: "A 16-year-old with velocardiofacial (DiGeorge) syndrome develops psychosis. Which rare, highly penetrant genetic variant underlies this syndrome and is linked to psychosis in the chapter?",
    choices: ["C4 duplication", "Trisomy 21", "22q11.2 microdeletion (velocardiofacial/DiGeorge syndrome)", "DRD2 point mutation", "COMT polymorphism"],
    answer: 2,
    why: "The 22q11.2 microdeletion, causing velocardiofacial (DiGeorge) syndrome in about 1 in 4,000 births, is the chapter’s example of a rare variant associated with psychosis."
  }
]);
