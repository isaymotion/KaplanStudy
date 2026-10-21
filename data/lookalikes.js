/*
 * Look-alikes: side-by-side comparisons of conditions that are easy to confuse.
 * Each entry: id, title, summary, items (column names), rows ([feature, value per item]),
 * keys (how to tell them apart), links ({ ch, sec, label }: sections that show a "Look-alikes" chip),
 * source (optional). Built from Kaplan & Sadock's Synopsis of Psychiatry, 12th edition.
 */
window.KS = window.KS || {};
KS.lookalikes = [
  {
    id: "detached",
    title: "Schizoid, schizotypal and avoidant PD, and autism",
    summary: "Four reasons a person may have few or no relationships.",
    items: ["Schizoid PD", "Schizotypal PD", "Avoidant PD", "Autism spectrum disorder"],
    rows: [
      ["Wants relationships?", "No: **indifferent**, prefers solitude", "Uncomfortable with closeness; few friends", "**Yes**, but fears rejection", "Interest varies; the core problem is **social communication**"],
      ["Odd thinking or perception", "No", "**Yes**: ideas of reference, magical thinking, odd speech", "No", "Literal or idiosyncratic language; no magical thinking required"],
      ["Social anxiety", "Little; indifferent to praise or criticism", "Excessive, from **paranoid fears**; does not ease with familiarity", "Marked, from **feeling inferior**", "Variable"],
      ["Restricted, repetitive behavior", "No", "No", "No", "**Yes**: stereotyped behaviors and interests"],
      ["Onset", "Childhood or adolescence", "Early adulthood; may precede schizophrenia", "Childhood shyness", "**Early developmental period**"],
      ["Treatment notes", "Distant, undemanding therapy; group may be the only social contact", "Never ridicule beliefs; antipsychotics for ideas of reference", "Firm alliance, graded risks, assertiveness training", "Behavioral and educational interventions (Chapter 2)"]
    ],
    keys: [
      "Ask whether the person **wants** relationships: schizoid patients do not, avoidant patients do.",
      "**Oddity** of thought, perception and speech points to schizotypal PD.",
      "**Stereotyped behaviors and restricted interests** from early childhood point to autism.",
      "Avoidant PD and social anxiety disorder often co-occur."
    ],
    links: [
      { ch: "ch19", sec: "s19-schizoid", label: "Schizoid personality disorder" },
      { ch: "ch19", sec: "s19-schizotypal", label: "Schizotypal personality disorder" },
      { ch: "ch19", sec: "s19-avoidant", label: "Avoidant personality disorder" },
      { ch: "ch02", sec: "s2-asd-ddx", label: "Autism: differential diagnosis" }
    ]
  },
  {
    id: "borderline-bipolar",
    title: "Borderline PD, bipolar II disorder and histrionic PD",
    summary: "Mood swings, impulsivity and drama: a pattern or an episode?",
    items: ["Borderline PD", "Bipolar II disorder", "Histrionic PD"],
    rows: [
      ["Time course", "**Pervasive** pattern since early adulthood", "**Discrete episodes** of hypomania and depression", "Pervasive pattern"],
      ["Mood changes", "Rapid shifts over **hours**, triggered by interpersonal events; chronic emptiness", "Hypomania lasting **at least 4 days** with decreased need for sleep; major depressive episodes", "Shallow, rapidly shifting emotion"],
      ["Relationships", "Intense, unstable; **fear of abandonment**; splitting", "Can be stable between episodes", "Superficial; overestimates intimacy"],
      ["Self-harm and suicide", "**Recurrent** self-mutilation and suicidal behavior", "Suicide risk, especially in depression", "Suicidal gestures and threats to coerce care"],
      ["Identity", "**Unstable** self-image", "Intact between episodes", "Intact, though self-dramatizing"],
      ["First-line treatment", "Structured psychotherapy (DBT); medication only as a time-limited adjunct", "Mood stabilizers or approved antipsychotics", "Psychoanalytically oriented psychotherapy"]
    ],
    keys: [
      "Look for **distinct episodes** with a change from baseline functioning: they point to bipolar disorder.",
      "**Fear of abandonment, emptiness and identity disturbance** are not features of bipolar disorder.",
      "A **family history** of bipolar disorder or antidepressant-induced hypomania favors bipolar illness.",
      "Borderline PD has more suicide attempts, identity diffusion and brief psychotic episodes than histrionic PD; the disorders can coexist."
    ],
    links: [
      { ch: "ch19", sec: "s19-borderline", label: "Borderline personality disorder" },
      { ch: "ch19", sec: "s19-histrionic", label: "Histrionic personality disorder" },
      { ch: "ch06", sec: "s6-bp2", label: "Bipolar II disorder" },
      { ch: "ch06", sec: "s6-ddx", label: "Bipolar disorders: differential diagnosis" }
    ]
  },
  {
    id: "ocpd-ocd",
    title: "Obsessive-compulsive personality disorder versus OCD",
    summary: "Perfectionism and rigidity are not obsessions and compulsions.",
    items: ["OCPD", "OCD"],
    rows: [
      ["Core problem", "Pervasive **perfectionism, orderliness and control** at the expense of flexibility", "**Obsessions** (intrusive, unwanted thoughts) and/or **compulsions** (rituals to relieve anxiety)"],
      ["How it feels", "**Ego-syntonic**: the person sees the standards as right", "**Ego-dystonic**: the person recognizes the thoughts as excessive and tries to resist"],
      ["Time and impact", "Lifelong trait pattern; impairment at work and in relationships", "At least **1 hour a day**, or significant distress or impairment"],
      ["Typical defenses", "Isolation, intellectualization, reaction formation, undoing", "Neutralizing thoughts and rituals"],
      ["Treatment", "CBT; many seek help because they are aware of suffering", "SSRIs or clomipramine and exposure and response prevention (Chapter 9)"]
    ],
    keys: [
      "Ask about **intrusive thoughts** and **rituals**: if present, diagnose OCD; OCPD may coexist.",
      "Reserve OCPD for **significant impairment**, not mere conscientious traits."
    ],
    links: [
      { ch: "ch19", sec: "s19-ocpd", label: "Obsessive-compulsive personality disorder" },
      { ch: "ch09", sec: "s9-dx-ocd", label: "Diagnosing OCD" },
      { ch: "ch09", sec: "s9-ddx-psych", label: "OCD: differential diagnosis" }
    ]
  },
  {
    id: "paranoid",
    title: "Paranoid PD, delusional disorder and schizophrenia",
    summary: "Where suspicion ends and psychosis begins.",
    items: ["Paranoid PD", "Delusional disorder", "Schizophrenia"],
    rows: [
      ["Suspicion", "Pervasive **mistrust**, no fixed delusions", "One or more **fixed, nonbizarre delusions** for at least 1 month", "Delusions, often bizarre"],
      ["Hallucinations and thought disorder", "No", "Not prominent", "**Yes**: hallucinations, disorganized speech, negative symptoms"],
      ["Functioning", "Lifelong problems working and living with others", "Often little impairment outside the delusion", "Marked decline"],
      ["Onset", "Early adulthood; lifelong pattern", "Usually middle or later adulthood", "Late adolescence or early adulthood; prodrome"],
      ["Relationship", "May precede persecutory delusional disorder", "May follow paranoid PD", "Paranoid PD can be a premorbid personality"],
      ["Treatment", "Psychotherapy: straightforward, honest, professional", "Antipsychotics; supportive therapy", "Antipsychotics and psychosocial treatment"]
    ],
    keys: [
      "A **fixed delusion** moves the diagnosis from paranoid PD to delusional disorder.",
      "**Hallucinations, formal thought disorder** or negative symptoms point to schizophrenia.",
      "Personality disorders have milder symptoms, a lifelong history and **no identifiable date of onset**."
    ],
    links: [
      { ch: "ch19", sec: "s19-paranoid", label: "Paranoid personality disorder" },
      { ch: "ch05", sec: "s-delusional", label: "Delusional disorder" },
      { ch: "ch05", sec: "s-ddx", label: "Schizophrenia: differential diagnosis" }
    ]
  },
  {
    id: "oud-meds",
    title: "Methadone, buprenorphine and naltrexone",
    summary: "Full agonist, partial agonist or antagonist: three ways to treat opioid use disorder.",
    items: ["Methadone", "Buprenorphine (with naloxone)", "Naltrexone"],
    rows: [
      ["Receptor action", "**Full µ agonist**", "**Partial µ agonist**, κ antagonist; ceiling effect", "**Competitive antagonist** (mainly µ)"],
      ["Before the first dose", "In withdrawal or opioid-dependent", "**Objective withdrawal**: 12 to 24 hours after short-acting opioids, 24 to 48 after methadone", "**Opioid-free** 5 days (short-acting) or 10 days (methadone), plus a **naloxone challenge**"],
      ["Starting dose", "15 to 20 mg (up to 40 mg on day 1)", "2 to 4 mg; day 1 up to 16 mg", "Build up to 50 mg a day"],
      ["Maintenance", "At least 60 to 70 mg a day (usually up to 120 mg)", "6 to 16 mg a day; alternate-day possible", "50 mg a day, 100 mg alternate days, 150 mg every third day, or monthly injection"],
      ["Where", "Opioid treatment programs only (Schedule II)", "Office practice; post-publication, any Schedule III DEA registrant", "Any setting"],
      ["Overdose risk", "**Highest at induction** (deaths at 50 to 60 mg in week 1); with benzodiazepines", "Lower (ceiling), but deaths with **benzodiazepines**", "High if the blockade is **overridden** or after stopping"],
      ["Adherence driver", "Withdrawal if doses are missed", "Withdrawal (milder)", "Nothing pharmacologic: needs psychosocial support"],
      ["Pregnancy", "Recommended: lowest effective dose, split in the third trimester", "Used; post-publication data support the combination", "Only for compelling need"]
    ],
    keys: [
      "A full agonist given to a dependent person relieves withdrawal; a **partial agonist** given too early **precipitates** it; an **antagonist** precipitates it unless the person is opioid-free.",
      "Choose **methadone** for structure and observed dosing, **buprenorphine** for office treatment with less overdose risk, and **naltrexone** for patients who want no opioid and can complete a washout.",
      "Post-publication (X:BOT): once started, extended-release naltrexone and buprenorphine–naloxone work about equally well."
    ],
    links: [
      { ch: "ch21-7", sec: "s217-pk", label: "Methadone and buprenorphine pharmacology" },
      { ch: "ch21-7", sec: "s217-bup", label: "Buprenorphine induction" },
      { ch: "ch21-7", sec: "s217-challenge", label: "Making sure the patient is opioid-free" },
      { ch: "ch04", sec: "s4-opi-maintenance", label: "Opioid maintenance treatment" }
    ]
  },
  {
    id: "aud-meds",
    title: "Naltrexone, acamprosate and disulfiram for alcohol use disorder",
    summary: "Three relapse-prevention drugs with different requirements and dangers.",
    items: ["Naltrexone", "Acamprosate", "Disulfiram"],
    rows: [
      ["How it works", "Opioid antagonist: less **craving** and reward", "**Glutamate/NMDA** modulation", "Blocks **aldehyde dehydrogenase**: aversive acetaldehyde reaction"],
      ["Start when", "Opioid-free; can be used to reduce drinking", "Only **after detoxification** and abstinence", "After **12 hours** without alcohol"],
      ["Dose", "50 mg a day (or monthly injection)", "666 mg three times daily", "500 mg for 1 to 2 weeks, then 250 mg"],
      ["Clearance and organ cautions", "Liver: avoid in acute hepatitis or liver failure", "Kidneys: avoid if CrCl under 30; halve at 30 to 50", "Heart and lungs: avoid in significant disease; liver injury"],
      ["Key interaction", "Blocks opioid analgesics", "Naltrexone raises its levels", "Raises phenytoin and anticoagulant levels; never with paraldehyde"],
      ["Typical side effects", "Nausea, headache", "Diarrhea, headache", "Reaction with any alcohol (up to 2 weeks after the last dose); may worsen psychosis"],
      ["Guideline place (post-publication)", "First line (APA 2018)", "First line (APA 2018)", "Second line, for motivated, supervised patients"]
    ],
    keys: [
      "Ask about **opioids** (naltrexone), **kidneys** (acamprosate) and **heart disease or psychosis** (disulfiram).",
      "Only **naltrexone** helps people still drinking to cut down; acamprosate needs abstinence first.",
      "Disulfiram works through **fear** of the reaction, so it needs motivation and supervision."
    ],
    links: [
      { ch: "ch21-7", sec: "s217-antag-aud", label: "Antagonists for alcohol use disorder" },
      { ch: "ch21-7", sec: "s217-acamp", label: "Acamprosate" },
      { ch: "ch21-7", sec: "s217-dis-use", label: "Using disulfiram" },
      { ch: "ch04", sec: "s4-alc-rehab", label: "Alcohol rehabilitation and medications" }
    ]
  },
  {
    id: "psychosis-durations",
    title: "Brief psychotic, schizophreniform, schizophrenia, schizoaffective and delusional disorder",
    summary: "Five psychotic disorders told apart mostly by duration, mood and which symptoms are present.",
    items: ["Brief psychotic disorder", "Schizophreniform disorder", "Schizophrenia", "Schizoaffective disorder", "Delusional disorder"],
    rows: [
      ["Duration", "**1 day to under 1 month**", "**1 month to under 6 months**", "**6 months or more**, including prodromal and residual phases", "Uninterrupted illness; psychosis **2 weeks or more without** a mood episode", "Delusions for **1 month or more**"],
      ["Symptoms", "Delusions, hallucinations, disorganized speech or grossly disorganized or catatonic behavior", "Same as schizophrenia (criterion A)", "Two or more criterion A symptoms, one being delusions, hallucinations or disorganized speech", "Criterion A symptoms **plus a major mood episode** at the same time", "**Nonbizarre-type** delusions; hallucinations not prominent; no other criterion A symptoms"],
      ["Mood episodes", "Not explained by a mood disorder", "Not explained by a mood disorder", "Absent or brief relative to the illness", "Present for the **majority** of the illness", "Brief relative to the delusional periods"],
      ["Function", "**Full return** to baseline", "Decline not required", "**Marked decline** in work, relationships or self-care", "Usually impaired", "**Not markedly impaired** apart from the delusion"],
      ["Typical trigger or course", "Often follows a **marked stressor**; complete, lasting recovery", "Many go on to schizophrenia; those who do not have a **better outcome**", "Chronic, with relapses", "Course **between** schizophrenia and mood disorders", "Chronic but often stable"]
    ],
    keys: [
      "Count the **time**: under 1 month, under 6 months, or 6 months or more.",
      "If mood episodes fill **most** of the illness and psychosis also occurs **without** them for 2 weeks, think schizoaffective disorder.",
      "A single fixed delusion with **preserved functioning** and little else points to delusional disorder."
    ],
    links: [
      { ch: "ch05", sec: "s-durations", label: "The diagnostic map" },
      { ch: "ch05", sec: "s-brief", label: "Brief psychotic disorder" },
      { ch: "ch05", sec: "s-schizophreniform", label: "Schizophreniform disorder" },
      { ch: "ch05", sec: "s-schizoaffective", label: "Schizoaffective disorder" },
      { ch: "ch05", sec: "s-delusional", label: "Delusional disorder" }
    ]
  },
  {
    id: "grief-depression",
    title: "Normal grief, major depression, persistent depressive disorder and prolonged grief disorder",
    summary: "Four ways sadness can present after a loss or over time.",
    items: ["Normal grief", "Major depressive disorder", "Persistent depressive disorder", "Prolonged grief disorder (post-publication)"],
    rows: [
      ["Time frame", "Eases over months, in waves", "**2 weeks** or more of symptoms", "**2 years** or more (1 year in children); no more than 2 months symptom-free", "**12 months** or more after a death (6 in children)"],
      ["Core feature", "Pangs of grief tied to **reminders** of the deceased", "Pervasive **depressed mood or anhedonia** with at least five symptoms", "Chronic low mood with fewer symptoms", "Persistent **longing** for or preoccupation with the deceased"],
      ["Self-esteem and guilt", "Preserved; guilt about things **left undone**", "**Worthlessness**, guilt of commission", "Low self-esteem, hopelessness", "Identity disruption, feeling part of oneself died"],
      ["Mood reactivity", "Can still enjoy and laugh", "Mood **unreactive**", "Variable", "Intense emotional pain around the loss"],
      ["Red flags", "None of the depressive signs in the next column", "Marked **retardation**, active **suicidal ideation**, mood-congruent delusions", "Superimposed major depression (**double depression**)", "Avoidance of reminders, disbelief, numbness, loneliness"]
    ],
    keys: [
      "Grief that is tied to **reminders**, with preserved self-esteem, is usually normal.",
      "**Worthlessness, retardation and active suicidal ideation** after a loss mean a depressive disorder.",
      "Look at the **time**: 2 weeks (major depression), 2 years (persistent depressive disorder), 12 months of longing after a death (prolonged grief)."
    ],
    links: [
      { ch: "ch07", sec: "s7-bereavement", label: "Bereavement and grief" },
      { ch: "ch07", sec: "s7-mdd", label: "Major depressive disorder" },
      { ch: "ch07", sec: "s7-pdd", label: "Persistent depressive disorder" },
      { ch: "ch07", sec: "s7-other", label: "Other depressive disorders" }
    ]
  },
  {
    id: "dementia-drugs",
    title: "Donepezil, rivastigmine, galantamine and memantine",
    summary: "Four symptomatic dementia drugs that differ in stage, dosing, side effects and interactions.",
    items: ["Donepezil", "Rivastigmine", "Galantamine", "Memantine"],
    rows: [
      ["How it works", "**CNS-selective** acetylcholinesterase inhibitor", "Acetyl- and **butyryl**cholinesterase inhibitor; more peripheral activity", "Acetylcholinesterase inhibitor; daffodil alkaloid", "**NMDA antagonist** (low to moderate affinity)"],
      ["Stage (book)", "Mild to moderate (severe too since 2006)", "Mild to moderate; **Parkinson disease dementia**", "Mild to moderate", "**Moderate to severe**"],
      ["Half-life and dosing", "**70 hours**: once at night", "1 hour, acts 10 hours: **twice daily with food**", "About 6 hours: twice daily (ER once daily)", "**60 to 80 hours**: twice daily (XR once daily)"],
      ["Start and target", "5 mg, then **10 mg** after 4 weeks", "1.5 mg twice daily, up to **6 mg twice daily**", "4 mg twice daily, to **16 to 24 mg** a day", "5 mg, +5 mg weekly to **10 mg twice daily**"],
      ["Elimination and interactions", "**CYP2D6 and 3A4**", "Mostly unbound: **no significant** interactions", "**CYP2D6 and 3A4**", "**Kidneys**, unchanged; accumulates in **alkaline urine**"],
      ["Typical side effects", "Fewest GI effects; bradycardia, syncope, weight loss", "**Most GI effects** (nausea 48% at 6 to 12 mg)", "Dizziness, headache, GI effects", "Dizziness, headache, **constipation**, confusion"],
      ["Other forms (post-publication)", "23 mg tablet; **weekly patch**", "**Daily patch**", "US brand **Razadyne**", "XR 28 mg; combined capsule with donepezil"]
    ],
    keys: [
      "Stage first: cholinesterase inhibitor for **mild to moderate**, memantine for **moderate to severe**.",
      "Many other drugs? **Rivastigmine** (no significant interactions). Simple dosing? **Donepezil** (once at night).",
      "Kidney disease or alkaline urine points to trouble with **memantine**; heart block or syncope to trouble with **cholinesterase inhibitors**."
    ],
    links: [
      { ch: "ch21-8", sec: "s218-pk", label: "Pharmacokinetics" },
      { ch: "ch21-8", sec: "s218-int", label: "Drug interactions" },
      { ch: "ch21-8", sec: "s218-dose", label: "Dosing the cholinesterase inhibitors" },
      { ch: "ch21-8", sec: "s218-mem-dose", label: "Memantine dosing" },
      { ch: "ch03", sec: "s3-dem-treat", label: "Treating dementia" }
    ]
  },
  {
    id: "anti-amyloid",
    title: "Lecanemab and donanemab (post-publication)",
    summary: "Two anti-amyloid antibodies for early Alzheimer disease with similar eligibility but different dosing and stopping rules.",
    items: ["Lecanemab (Leqembi)", "Donanemab (Kisunla)"],
    rows: [
      ["Target", "Soluble amyloid-β **protofibrils** and plaques", "Deposited **plaque** (pyroglutamate amyloid)"],
      ["Approved", "2023 (traditional approval July 6, 2023)", "July 2024"],
      ["Eligibility", "MCI or mild dementia with **confirmed amyloid**", "MCI or mild dementia with **confirmed amyloid**"],
      ["Dosing", "**10 mg/kg IV every 2 weeks**; after 18 months, every 4 weeks IV or **360 mg subcutaneous weekly**", "IV **every 4 weeks**: 350, 700, 1,050, then 1,400 mg"],
      ["Stopping", "Continued", "Can **stop when amyloid is minimal** on PET"],
      ["ARIA", "Boxed warning; MRI monitoring", "Boxed warning; gentler titration (2025) cut ARIA-E to about 14%"]
    ],
    keys: [
      "Both need **confirmed amyloid**, a **baseline MRI** and **ApoE ε4** testing; ARIA risk is highest in ε4 homozygotes and with anticoagulants.",
      "Every **2 weeks** and a home **subcutaneous** option: lecanemab. Every **4 weeks** with a **stop** rule: donanemab."
    ],
    links: [
      { ch: "ch21-8", sec: "s218-amyloid", label: "Anti-amyloid antibodies" },
      { ch: "ch21-8", sec: "s218-mci", label: "Mild cognitive impairment" }
    ],
    source: "FDA, FDA converts novel Alzheimer's disease treatment to traditional approval, July 6, 2023; HCPLive, FDA approves subcutaneous lecanemab, August 29, 2025; NeurologyLive, FDA approves updated label for donanemab, July 2025"
  }
];
