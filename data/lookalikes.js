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
      { ch: "ch07", sec: "s7-other", label: "Other depressive disorders" },
      { ch: "ch20", sec: "s20-bereave", label: "Bereavement as a condition of clinical attention" }
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
  },
  {
    id: "pde5-drugs",
    title: "Sildenafil, vardenafil, tadalafil and avanafil",
    summary: "Four PDE-5 inhibitors with the same mechanism but different timing, duration and side effects.",
    items: ["Sildenafil", "Vardenafil", "Tadalafil", "Avanafil (post-publication)"],
    rows: [
      ["Half-life", "**3 to 4 hours**", "**3 to 4 hours**", "About **18 hours**", "Short"],
      ["Onset and timing", "About 30 to 60 minutes; take **1 hour before**", "Slightly faster; take about **1 hour before**", "Slightly faster than sildenafil", "About **15 minutes**"],
      ["Duration", "About **4 hours**", "Similar to sildenafil", "Up to **36 hours** (\"weekend pill\")", "Short"],
      ["Usual dose", "**50 mg** (25 to 100)", "**10 mg** (5 to 20); 10 mg orally disintegrating", "**10 mg** (5 to 20) or **2.5 to 5 mg daily**", "50 to 200 mg"],
      ["Distinctive effects", "**Blue-tinged vision**", "As sildenafil", "**Back and muscle pain** (about 10%)", "As the class"],
      ["Other approved uses", "Pulmonary hypertension (Revatio)", "—", "**BPH**; pulmonary hypertension (Adcirca)", "—"]
    ],
    keys: [
      "All four need **sexual stimulation** and are **contraindicated with nitrates, poppers and riociguat**.",
      "Long window or daily dosing: **tadalafil**. Fastest onset: **avanafil**.",
      "Start **sildenafil 25 mg** over 65, with cirrhosis, severe renal impairment or CYP3A4 inhibitors."
    ],
    links: [
      { ch: "ch21-9", sec: "s219-pk", label: "Pharmacokinetics" },
      { ch: "ch21-9", sec: "s219-dose", label: "Dosing" },
      { ch: "ch21-9", sec: "s219-cardiac", label: "Cardiac risk and nitrates" }
    ]
  },
  {
    id: "hsdd-drugs",
    title: "Flibanserin and bremelanotide (post-publication)",
    summary: "Two brain-acting drugs for low sexual desire in premenopausal women, one nightly and one as needed.",
    items: ["Flibanserin (Addyi)", "Bremelanotide (Vyleesi)"],
    rows: [
      ["Approved", "August 2015", "June 2019"],
      ["How it works", "**5-HT1A agonist**, **5-HT2A antagonist**", "**Melanocortin receptor agonist**"],
      ["How it is taken", "**100 mg every night** at bedtime", "**Injection at least 45 minutes before** sex"],
      ["Limits", "Stop if no benefit after 8 weeks", "1 dose in 24 hours; **8 a month**"],
      ["Main risks", "**Hypotension and syncope** with alcohol or CYP3A4 inhibitors", "**Nausea** (40%), flushing, transient BP rise"]
    ],
    keys: [
      "Nightly pill with an **alcohol** rule (stop at least 2 hours before): **flibanserin**.",
      "As-needed **injection** with nausea: **bremelanotide**.",
      "Both are for **acquired, generalized** HSDD in **premenopausal** women; rule out antidepressant, relationship and medical causes first."
    ],
    links: [
      { ch: "ch21-9", sec: "s219-women", label: "Low sexual desire in women" }
    ],
    source: "Pharmacy Times, FDA orders safety labeling changes for female sexual dysfunction therapy, April 2019; Drugs.com, Vyleesi approval history"
  },
  {
    id: "eps-syndromes",
    title: "Acute dystonia, parkinsonism, akathisia and tardive dyskinesia",
    summary: "Four antipsychotic movement side effects with different timing, populations and treatments.",
    items: ["Acute dystonia", "Parkinsonism", "Akathisia", "Tardive dyskinesia"],
    rows: [
      ["Timing", "**Hours to days**", "After **2 to 3 weeks**", "Days to weeks", "**Months to years**"],
      ["Typical patient", "**Young men**, high-potency DRAs", "**Older adults**, high-potency DRAs", "Any; common with some SGAs", "Older adults, women, long exposure"],
      ["Features", "Sustained spasm of **neck, tongue, eyes**, jaw, back; laryngeal dystonia is an emergency", "**Tremor, rigidity, bradykinesia**, drooling, shuffling", "Inner and outer **restlessness**, cannot sit still", "Choreoathetoid **orofacial** and limb movements"],
      ["First treatment", "**Benztropine 1 to 2 mg IM** or diphenhydramine IV", "Lower dose or switch; **benztropine** or **amantadine**", "**β-blocker**; benzodiazepine or clonidine", "**VMAT2 inhibitor** (post-publication)"],
      ["Anticholinergics", "Treat and prevent", "Treat (all equally effective)", "Weak", "**No benefit**; may worsen"]
    ],
    keys: [
      "Ask **when** it started: days (dystonia), weeks (parkinsonism, akathisia), months to years (tardive dyskinesia).",
      "Restlessness is **akathisia**: do not reach for benztropine first.",
      "Amantadine helps parkinsonism and rabbit syndrome but **not** akathisia or tardive dyskinesia."
    ],
    links: [
      { ch: "ch21-10", sec: "s2110-ac-ind", label: "Anticholinergic indications" },
      { ch: "ch21-10", sec: "s2110-ac-dose", label: "Dosing anticholinergics" },
      { ch: "ch21-0", sec: "s210-park", label: "Medication-induced parkinsonism" },
      { ch: "ch21-0", sec: "s210-td", label: "Tardive dyskinesia" }
    ]
  },
  {
    id: "toxidromes",
    title: "Anticholinergic intoxication, serotonin syndrome and neuroleptic malignant syndrome",
    summary: "Three drug-induced syndromes with fever, agitation or confusion that need opposite treatments.",
    items: ["Anticholinergic intoxication", "Serotonin syndrome", "Neuroleptic malignant syndrome"],
    rows: [
      ["Cause", "Anticholinergics, antihistamines, tricyclics, low-potency DRAs", "Combined **serotonergic** drugs (SSRIs, MAOIs)", "**Dopamine blockers**"],
      ["Onset", "Hours", "Hours", "Days"],
      ["Skin and pupils", "**Hot, dry, flushed**; **dilated** pupils", "**Sweating**; dilated pupils", "Sweating; normal pupils"],
      ["Neuromuscular", "Normal tone", "**Clonus, hyperreflexia**, tremor", "**Lead-pipe rigidity**, bradyreflexia"],
      ["Bowel", "**Absent** bowel sounds", "**Hyperactive**, diarrhea", "Normal or reduced"],
      ["Specific treatment", "Stop drugs; **physostigmine** if severe; benzodiazepines", "Stop drugs; benzodiazepines; **cyproheptadine**", "Stop the antipsychotic; cooling, fluids; **dantrolene, bromocriptine**"]
    ],
    keys: [
      "**Dry skin** points to anticholinergic toxicity; **clonus** to serotonin syndrome; **lead-pipe rigidity** to NMS.",
      "Antipsychotics are **contraindicated** in anticholinergic delirium and must be stopped in NMS.",
      "Cyproheptadine treats serotonin syndrome; bromocriptine treats NMS."
    ],
    links: [
      { ch: "ch21-10", sec: "s2110-ac-safety", label: "Anticholinergic intoxication" },
      { ch: "ch21-10", sec: "s2110-ah", label: "Cyproheptadine" },
      { ch: "ch21-0", sec: "s210-nms", label: "Neuroleptic malignant syndrome" },
      { ch: "ch25-3", sec: "s253-meds", label: "Medication-induced emergencies" }
    ]
  },
  {
    id: "supp-categories",
    title: "Dietary supplement, medical food and prescription drug",
    summary: "Three regulatory categories that patients often confuse; only drugs need FDA approval and proof of efficacy.",
    items: ["Dietary supplement", "Medical food", "Prescription drug"],
    rows: [
      ["Legal basis", "**DSHEA (1994)**", "**Orphan Drug Act** definition", "Food, Drug, and Cosmetic Act"],
      ["Premarket FDA approval", "**No**", "**No**", "**Yes**"],
      ["Proof of efficacy", "Not required; FDA does not evaluate", "Must meet the **distinctive nutritional needs** of a specific disease", "Required"],
      ["Intended for", "Healthy adults", "A **specific disease**, under **medical supervision**", "Labeled indications"],
      ["Oversight", "Laxer; quality varies; FDA acts after harm (ephedra, 2004)", "Manufacturing practices, facility registration, **annual inspections**", "Full drug regulation"],
      ["Psychiatric examples", "St. John's wort, kava, SAMe, 5-HTP, melatonin", "**L-methylfolate** (Deplin), caprylic triglyceride (Axona), Theramine", "SSRIs, ramelteon, esketamine"]
    ],
    keys: [
      "**Neither supplements nor medical foods** need premarket approval.",
      "A medical food is defined by a **specific disease** and **medical supervision**, not by proven efficacy in drug-style trials.",
      "Unapproved drugs sold as supplements (tianeptine) are **not lawful dietary ingredients** (post-publication)."
    ],
    links: [
      { ch: "ch21-11", sec: "s2111-regulation", label: "Regulation" },
      { ch: "ch21-11", sec: "s2111-medfoods", label: "Medical foods" }
    ],
    source: "FDA, small entity compliance guide: final rule declaring dietary supplements containing ephedrine alkaloids adulterated; FDA, warns consumers not to purchase or use any tianeptine product due to serious risks"
  },
  {
    id: "serotonergic-supps",
    title: "St. John's wort, 5-HTP, SAMe and L-tryptophan",
    summary: "Four 'natural' antidepressant products that all add serotonergic risk but differ in their other dangers.",
    items: ["St. John's wort", "5-HTP", "SAMe", "L-tryptophan"],
    rows: [
      ["What it is", "Herb (**hypericin, hyperforin**)", "**Immediate serotonin precursor**", "Natural **methyl donor**", "Essential amino acid, serotonin precursor"],
      ["Book dose", "**100 to 950 mg** a day", "**100 mg to 2 g**, safer with carbidopa", "**200 to 1,600 mg**", "**4 to 5 g** a day"],
      ["Serotonin syndrome", "With **SSRIs or MAOIs**", "With **SSRIs or MAOIs**, carcinoid", "With **SSRIs or SNRIs**", "Additive serotonergic risk"],
      ["Distinctive risk", "**Lowers drug levels** (CYP3A4, P-gp); **photosensitivity**; mania with sertraline", "Serotonin syndrome", "**Hypomania**; worsens Parkinson symptoms", "**Eosinophilia-myalgia syndrome** (1989, post-publication)"],
      ["Category", "Phytomedicine", "Dietary supplement", "Supplement and medical food", "Medical food"]
    ],
    keys: [
      "Only **St. John's wort** also **lowers the levels** of other drugs: think contraceptives, cyclosporine and HIV drugs.",
      "**SAMe** can trigger **hypomania**: ask about bipolar disorder.",
      "Myalgia with **eosinophilia** after tryptophan points to **eosinophilia-myalgia syndrome**."
    ],
    links: [
      { ch: "ch21-11", sec: "s2111-sjw", label: "St. John's wort" },
      { ch: "ch21-11", sec: "s2111-mood", label: "Supplements for mood" },
      { ch: "ch21-2", sec: "s212-ssri-ae", label: "Serotonin syndrome (SSRIs)" }
    ],
    source: "Nicolussi S et al., clinical relevance of St. John's wort drug interactions revisited, British Journal of Pharmacology, 2020; CDC MMWR, eosinophilia-myalgia syndrome and L-tryptophan-containing products, November 1989"
  },
  {
    id: "ejaculation-orgasm",
    title: "Premature, delayed or retrograde ejaculation and orgasmic anhedonia",
    summary: "Four complaints about ejaculation and orgasm in men: what happens, what causes it, and how it is coded.",
    items: ["Premature (early) ejaculation", "Delayed ejaculation", "Retrograde ejaculation", "Orgasmic anhedonia"],
    rows: [
      ["What happens", "Ejaculates within about **1 minute** of penetration, before he wishes", "Ejaculates with great difficulty, or **not at all**, in partnered sex", "Orgasm occurs but semen passes **back into the bladder**: a **dry orgasm**", "Ejaculation occurs but **no pleasure** or sensation of orgasm is felt"],
      ["With masturbation", "Often similar", "Usually **normal**", "Also dry", "Also unfelt"],
      ["Typical cause", "Shorter nerve latency, or **conditioning** and anxiety", "**Antidepressants**, heavy pornography use, psychodynamic conflict, OCD", "**Always organic**: genitourinary surgery or **anticholinergic** drugs such as phenothiazines", "**Extreme guilt** with dissociation; rule out sacral or cephalic lesions"],
      ["Clue", "Severity by seconds: mild 30 s to 1 min, moderate 15 to 30 s, severe under 15 s", "Lifelong form suggests severe psychopathology; acquired form suggests relationship trouble", "**Milky urine** after orgasm; pleasure is kept", "Body works, pleasure is missing"],
      ["Coding", "Premature (early) ejaculation", "Delayed ejaculation", "Due to a medical condition or medication", "**Other specified sexual dysfunction**"],
      ["Management", "**Squeeze** or **stop-start**; SSRIs, tricyclics or topical anesthetics if behavioral methods fail", "Treat the cause; extravaginal ejaculation first, then gradual entry; switch an antidepressant if needed", "Reassure (harmless); review drugs", "Psychotherapy for guilt after organic causes are excluded"]
    ],
    keys: [
      "Ask whether **semen comes out**: a dry orgasm with milky urine is retrograde ejaculation, which is always organic.",
      "Ask whether the problem also occurs with **masturbation**: delayed ejaculation usually does not.",
      "A new problem soon after an **SSRI or venlafaxine** points to a drug cause.",
      "Sex therapy has been **most successful** in premature ejaculation."
    ],
    links: [
      { ch: "ch16", sec: "s16-pe", label: "Premature (early) ejaculation" },
      { ch: "ch16", sec: "s16-de", label: "Delayed ejaculation" },
      { ch: "ch16", sec: "s16-med-other", label: "Dyspareunia, desire, ejaculation and orgasm problems due to medical conditions" },
      { ch: "ch16", sec: "s16-other-spec", label: "Orgasmic anhedonia, premature female orgasm and postcoital headache" },
      { ch: "ch16", sec: "s16-techniques", label: "Specific techniques and exercises" }
    ]
  },
  {
    id: "gender-ddx",
    title: "Gender dysphoria, gender nonconformity, transvestic disorder, body dysmorphic disorder and psychosis",
    summary: "Five situations in which someone talks about gender or wants to change gendered body parts: what drives it and what the diagnosis is.",
    items: ["Gender dysphoria", "Gender nonconformity", "Transvestic disorder", "Body dysmorphic disorder", "Psychosis with gender content"],
    rows: [
      ["Core experience", "Marked **incongruence** between experienced and assigned gender", "Interests, dress or play typical of another gender, **content** with assigned gender", "Intense **sexual arousal** from cross-dressing", "A body part looks **abnormal or ugly**", "A **delusion** about being another gender"],
      ["Gender identity", "Differs from the **assigned** gender", "Matches the assigned gender", "**Matches** the assigned gender", "Matches the assigned gender", "Part of the psychotic belief"],
      ["Distress", "**Required** (DSM-5)", "Absent, or only in caregivers", "Required, or impairment", "From the perceived defect", "Variable"],
      ["Clues", "Persistent statements; wish for **anatomical change**; distress at puberty", "Brief or no statements about being another gender", "Arousal and masturbation with cross-dressing; identity stable", "Focus on appearance, **not on gender**", "Other psychotic symptoms; concerns **fade with antipsychotic treatment**"],
      ["Diagnosis", "Gender dysphoria (ICD-11: gender incongruence)", "None", "Transvestic disorder (Chapter 16)", "Body dysmorphic disorder", "The psychotic disorder"]
    ],
    keys: [
      "Ask whether the person's **gender identity** differs from the assigned gender, and whether they are distressed by it.",
      "Gender-nonconforming behavior alone is **not** a diagnosis; DSM-5 needs distress, and ICD-11 says behavior alone is not enough.",
      "In transvestic disorder the identity matches the assigned gender and the driver is **sexual excitement**.",
      "Gender content in psychosis is rare and **resolves with treatment** of the psychosis."
    ],
    links: [
      { ch: "ch17", sec: "s17-ddx", label: "Differential diagnosis" },
      { ch: "ch17", sec: "s17-dx-child", label: "Gender dysphoria in children" },
      { ch: "ch17", sec: "s17-dx-adult", label: "Gender dysphoria in adolescents and adults" },
      { ch: "ch16", sec: "s16-fetish", label: "Fetishism and transvestism" }
    ]
  },
  {
    id: "theft-ddx",
    title: "Kleptomania and other reasons people steal",
    summary: "Six reasons a person takes things without paying, and how to tell them apart.",
    items: ["Kleptomania", "Ordinary shoplifting", "Antisocial stealing", "Psychotic stealing", "Dementia", "Malingering"],
    rows: [
      ["What drives it", "An **irresistible urge**; the act itself, not the object", "**Kicks** and the goods", "**Personal gain**", "Mood elevation or depression, **delusions** or **command hallucinations**", "**Forgetfulness**, not intent", "Avoiding punishment by **claiming** kleptomania"],
      ["Planning", "**Unplanned**, done alone", "Often in **pairs or small groups**", "**Premeditated**; may get others to steal", "Follows the psychosis", "None; leaves without paying", "Planned theft"],
      ["The object", "**Not needed**, often of little value; given away, returned or hidden", "Wanted", "Valued", "Variable", "Whatever was in hand", "Wanted"],
      ["Feelings", "Tension before, **relief** after; guilt may follow", "No disorder", "Guilt and remorse **lacking** or insincere", "Part of the illness", "Unaware", "Variable"],
      ["Violence", "No; **no anger or vengeance**", "Rare", "Threats or **violence** to avoid capture", "Possible", "No", "Variable"],
      ["Diagnosis", "Kleptomania", "None (most shoplifters are teens and young adults)", "Antisocial personality or conduct disorder", "Mania, psychotic depression or schizophrenia", "Neurocognitive disorder", "Malingering"]
    ],
    keys: [
      "Ask what the person did with the item: kleptomania means stealing **unneeded** things that are often **given away, returned or hidden**.",
      "Kleptomania excludes theft out of **anger or vengeance**, or better explained by **conduct disorder, mania or antisocial personality disorder**.",
      "Only **4 to 24 percent** of people arrested for shoplifting have kleptomania.",
      "A clever person with antisocial traits may **claim** kleptomania: that is malingering."
    ],
    links: [
      { ch: "ch18", sec: "s18-klepto", label: "Kleptomania" },
      { ch: "ch18", sec: "s18-ddx-kp", label: "Differential diagnosis of kleptomania and pyromania" }
    ]
  },
  {
    id: "firesetting-ddx",
    title: "Pyromania and other reasons people set fires",
    summary: "Six reasons a person sets a fire: only one is pyromania.",
    items: ["Pyromania", "Child's curiosity", "Arson or extremism", "Conduct disorder or ASPD", "Psychosis or mania", "Impaired judgment"],
    rows: [
      ["What drives it", "**Tension** before, **pleasure or relief** after; fascination with fire", "Normal **exploration** with matches and lighters", "**Profit**, hiding a crime, **sociopolitical** ideology", "**Deliberate** act for profit, sabotage or **retaliation**", "**Delusions or hallucinations**", "Failure to **appreciate consequences**"],
      ["Failure to resist an impulse?", "**Yes**", "No", "No", "No", "No", "No"],
      ["Clues", "Repeated fires, false alarms, **interest in firefighting**, leaves clues", "Young child, no pattern of harm", "Clear motive and **gain**", "Other rule-breaking and aggression", "Psychotic or manic symptoms on examination", "**Dementia**, **intellectual disability** or **intoxication**"],
      ["Diagnosis", "Pyromania", "None", "None (a crime)", "Conduct disorder or antisocial personality disorder", "The psychotic or mood disorder", "The underlying condition"]
    ],
    keys: [
      "Pyromania needs fire setting that is **deliberate, purposeful and repeated**, with no gain or other motive.",
      "Most fire setters are not pyromaniacs: **60 percent** of US fire setters are adolescents, and few meet criteria.",
      "Treat any **child's fire setting** seriously, with family therapy, as treatment and prevention rather than punishment."
    ],
    links: [
      { ch: "ch18", sec: "s18-pyro", label: "Pyromania" },
      { ch: "ch18", sec: "s18-ddx-kp", label: "Differential diagnosis of kleptomania and pyromania" }
    ]
  },
  {
    id: "sleep-night-events",
    title: "Night terrors, nightmares, RBD and nocturnal seizures",
    summary: "Four causes of frightening or violent events at night: which stage of sleep, and what is remembered?",
    items: ["Sleepwalking and sleep terrors", "Nightmare disorder", "REM sleep behavior disorder", "Nocturnal seizures"],
    rows: [
      ["Sleep stage", "**Slow-wave (NREM)** sleep", "**REM** sleep", "**REM** sleep, without normal atonia", "Can arise from any stage; seizure-like EEG activity often in slow-wave sleep"],
      ["Timing in the night", "Toward the end of the **first or second** slow-wave period (early)", "Usually later, when REM is longest", "During REM periods", "Variable"],
      ["Behavior", "Walks or acts semi-purposefully; terrors begin with a **piercing scream** and autonomic arousal", "Wakes from a long, increasingly frightening dream; little movement or vocalization", "**Acts out the dream**: punches, kicks, leaps; often injures self or bed partner", "Stereotyped events; tongue biting, jerks"],
      ["State on waking", "Hard to wake; **confused** or disoriented", "Quickly **awake and alert**", "**Not confused** when woken", "May be postictally confused"],
      ["Recall", "**Amnesia**; little or no dream report", "**Vivid recall** of the dream", "Recalls dream imagery that matches the behavior", "Usually none"],
      ["Typical patient", "Children (sleepwalking peaks at **4 to 8 years**); rare and familial in adults", "Children 3 to 6; trauma, drugs, withdrawal from REM suppressants", "Older adults; Parkinson disease and other neurodegenerative disorders", "Any age; history of epilepsy or febrile convulsions"],
      ["Key test", "Polysomnography with EEG if adult, injurious or atypical", "Usually clinical", "Polysomnography: **REM sleep without atonia**", "Clinical EEG and polysomnography with an extended EEG montage"],
      ["Management notes", "Guide back to bed gently; avoid sleep deprivation; secure the home", "Imagery rehearsal, exposure, cognitive therapy; prazosin for PTSD nightmares", "Protect the sleeping environment; watch for a later neurodegenerative disorder", "Treat the seizure disorder (neurology)"]
    ],
    keys: [
      "Ask what the person **remembers**: nothing (sleep terrors, sleepwalking), a long dream with full alertness (nightmare), or a dream that matches the movements (RBD).",
      "**Early-night** events from slow-wave sleep point to NREM arousal disorders; dream enactment in REM points to RBD.",
      "A sleepwalker calmly steps through a window; a patient with RBD **dives** through it as if into a dream lake.",
      "Put **seizures** at the top of the differential for most parasomnias and order polysomnography with EEG for adult, violent or atypical events.",
      "Sleep apnea can trigger sleepwalking, terrors and nightmares; ask about snoring and witnessed apneas."
    ],
    links: [
      { ch: "ch15", sec: "s15-nrem", label: "NREM sleep arousal disorders" },
      { ch: "ch15", sec: "s15-nightmare", label: "Nightmare disorder" },
      { ch: "ch15", sec: "s15-rbd", label: "REM sleep behavior disorder and sleep paralysis" },
      { ch: "ch15", sec: "s15-para-other", label: "Other parasomnias and their triggers" }
    ]
  },
  {
    id: "sleepy-patient",
    title: "Narcolepsy, hypersomnolence, sleep apnea and the long sleeper",
    summary: "Four reasons a person is sleepy or sleeps too long: how to tell them apart with the history and the sleep laboratory.",
    items: ["Narcolepsy", "Hypersomnolence disorder", "Obstructive sleep apnea", "Long sleeper"],
    rows: [
      ["Core complaint", "Irresistible sleep attacks or naps, at least 3 times a week for 3 months", "Sleepy despite adequate sleep; main sleep **over 9 hours** but unrefreshing; hard to wake", "Daytime sleepiness with **snoring**, choking or gasping, morning headache and dry mouth", "Needs long nights (often 10 to 12 hours)"],
      ["Distinctive feature", "**Cataplexy** triggered by laughter or emotion; sleep paralysis; hypnagogic hallucinations", "No cataplexy; often more slow-wave sleep", "**Witnessed apneas**; obesity, small or set-back jaw", "**No daytime sleepiness** when allowed a full night"],
      ["Polysomnography", "REM within 15 minutes of sleep onset", "Looks sleep deprived, and stays so after several long nights", "Airflow stops for at least 10 s while chest and abdominal effort continue; desaturation and arousals", "Normal when sleep need is met"],
      ["MSLT and other tests", "Mean latency **8 minutes or less** with **2 or more sleep-onset REM periods**; low CSF hypocretin", "Mean latency 8 minutes or less with **fewer than 2** sleep-onset REM periods", "Diagnosis rests on events per hour: at least 5 with symptoms, or at least 15", "Not needed"],
      ["Treatment", "Modafinil, armodafinil, stimulants, pitolisant, solriamfetol; antidepressants or sodium oxybate for cataplexy; scheduled naps", "Stimulants or modafinil off label; drug holidays and monitoring", "PAP first; oral appliance, positional therapy, surgery, weight loss", "None: protect the sleep time"]
    ],
    keys: [
      "**Clear cataplexy** strongly indicates narcolepsy; vague weakness during arguments is equivocal.",
      "Give a consistent long night: a **long sleeper** is then alert, while idiopathic hypersomnia is not.",
      "**Sleep-onset REM periods** separate narcolepsy from hypersomnolence disorder on the MSLT.",
      "Ask a bed partner about snoring and pauses; people who sleep alone may never know they have apneas.",
      "Exclude insufficient sleep, sedating drugs, stimulant withdrawal and depression first, and ask about drowsy driving."
    ],
    links: [
      { ch: "ch15", sec: "s15-narc", label: "Narcolepsy: presentation and criteria" },
      { ch: "ch15", sec: "s15-narc-ddx", label: "Narcolepsy: differential and comorbidity" },
      { ch: "ch15", sec: "s15-hyp", label: "Hypersomnolence disorder" },
      { ch: "ch15", sec: "s15-osa", label: "Obstructive sleep apnea-hypopnea" },
      { ch: "ch15", sec: "s15-mslt", label: "MSLT, maintenance of wakefulness test and actigraphy" },
      { ch: "ch15", sec: "s15-variants", label: "Isolated symptoms and normal variants" }
    ]
  },
  {
    id: "circadian-types",
    title: "Delayed, advanced, non-24-hour and irregular circadian types",
    summary: "Four ways the body clock can be out of step with the day.",
    items: ["Delayed sleep phase", "Advanced sleep phase", "Non–24-hour type", "Irregular sleep–wake type"],
    rows: [
      ["What goes wrong", "Clock runs slow or is shifted **later**", "Clock shifts **earlier**", "Clock is **not reset** each day, so it drifts", "Rhythm is **absent** or weak"],
      ["Sleep pattern", "Falls asleep and wakes late; alert in the evening (**night owl**)", "Drowsy early in the evening, wakes very early (**lark**)", "Sleep onset moves progressively later; weeks of insomnia and sleepiness, then a few normal days", "Normal total sleep split into **3 or more** irregular bouts"],
      ["Typical complaint", "Sleep-onset insomnia and morning sleepiness", "Evening sleepiness and early waking", "**Periodic** insomnia and periodic excessive sleepiness", "Night insomnia with daytime sleepiness and long naps"],
      ["Associated with", "Young and middle-aged adults’ natural tendency to delay; may be familial", "May be familial", "**Blindness**, traumatic brain injury", "Dementia, bedridden or hospitalized patients"],
      ["Light therapy", "**Morning** bright light to advance", "**Evening** bright light to delay", "Timed light in sighted patients; totally blind patients cannot be reset by light", "Regular light and activity cues"],
      ["Other treatment", "Melatonin; chronotherapy (delay 2 to 3 hours a night around the clock)", "Low-dose melatonin to realign the rhythm", "Melatonin or ramelteon (off label) to re-entrain", "Regular schedule; melatonin"]
    ],
    keys: [
      "Ask when the person **would** sleep if free to choose: later (delayed) or earlier (advanced) but otherwise normal sleep.",
      "Sleep that **drifts** later each day with cycles of good and bad weeks suggests non–24-hour type, especially in a blind patient.",
      "Sleep **fragmented** into several bouts with no clear night points to irregular type.",
      "Light before the temperature low point delays the clock; light after it advances it.",
      "Use a sleep diary or actigraphy over days to weeks; consider insomnia disorder, mood disorders and a normal variant."
    ],
    links: [
      { ch: "ch15", sec: "s15-circ", label: "The circadian clock and the DSM-5 types" },
      { ch: "ch15", sec: "s15-circ-phase", label: "Delayed, advanced, irregular and non-24-hour types" },
      { ch: "ch15", sec: "s15-circ-tx", label: "Light, melatonin and chronotherapy" }
    ]
  },
  {
    id: "rls-plmd-cramps",
    title: "Restless legs, periodic limb movements, leg cramps and akathisia",
    summary: "Four causes of uncomfortable legs or leg movements around sleep.",
    items: ["Restless legs syndrome", "Periodic limb movement disorder", "Sleep-related leg cramps", "Akathisia"],
    rows: [
      ["What the patient notices", "Creeping, crawling feelings with an **urge to move** the legs", "Often nothing; the bed partner reports kicks; unrefreshing sleep", "A **painful** calf contraction that wakes them", "Drug-induced inner and motor restlessness"],
      ["When", "At rest and on lying down; **worse at night**", "During **NREM sleep**", "During sleep", "Not tied to sleep"],
      ["Relieved by", "**Moving** or walking", "Not applicable (unaware)", "Easing the cramp", "See Chapter 21.0"],
      ["Movement pattern", "Voluntary moving to relieve discomfort", "Brief stereotyped big-toe extension with ankle, knee and hip flexion, every **20 to 40 s**", "Sustained muscle contraction", "See Chapter 21.0"],
      ["Workup", "History and examination; **ferritin** in every patient; no sleep study needed", "Polysomnography with leg EMG", "Metabolic, mineral and electrolyte problems, diabetes, pregnancy", "Medication history: recent antipsychotic"],
      ["Treatment", "Gabapentinoids and iron first (AASM 2024); the book's dopamine agonists risk augmentation", "As for RLS if both present; clonazepam reported to help", "Correct the precipitant", "See Chapter 21.0"]
    ],
    keys: [
      "RLS needs all three: an **urge** to move, **worse at night**, and **relief** by movement, at least 3 times a week for 3 months.",
      "PLMD is a finding in sleep that the patient may not notice; RLS is a waking complaint.",
      "**Pain** from muscle contraction means a cramp, not RLS.",
      "DSM-5 lists **akathisia** as an exclusion for RLS: always ask about antipsychotics and other dopamine blockers.",
      "Antidepressants, antihistamines, antipsychotics and lithium can cause or worsen RLS and PLMD (Table 15-18)."
    ],
    links: [
      { ch: "ch15", sec: "s15-rls", label: "Restless legs syndrome" },
      { ch: "ch15", sec: "s15-plmd", label: "Periodic limb movements and leg cramps" },
      { ch: "ch15", sec: "s15-move-other", label: "Drug-induced movement disorders" },
      { ch: "ch21-0", sec: "s210-park", label: "Parkinsonism, acute dystonia and akathisia" }
    ]
  },
  {
    id: "feigned-ddx",
    title: "Malingering, factitious disorder and conversion disorder",
    summary: "Three ways symptoms can outrun the findings, told apart by intent and motive.",
    items: ["Malingering", "Partial malingering", "Factitious disorder", "Conversion disorder"],
    rows: [
      ["Symptoms produced on purpose?", "**Yes**, deliberately", "**Exaggerates** real symptoms", "**Yes**", "**No conscious volition**"],
      ["Goal", "A **tangible gain** (money, avoiding duty, work or trial, drugs, shelter)", "A **tangible gain**", "The **sick role**", "None conscious"],
      ["Stance in evaluation", "**Suspicious, uncooperative, aloof**; avoids tests, refuses treatment", "Variable", "Not described in this chapter", "**Friendly, cooperative, clinging**; welcomes tests, \"searching for an answer\""],
      ["Story of onset", "**Extremely detailed and exacting**", "Variable", "Not described in this chapter", "**Gaps, inaccuracies and vagaries**"],
      ["Work offered around the disability", "**Refuses**", "Variable", "Not described in this chapter", "**Accepts**"],
      ["Mental disorder?", "**No**: a condition", "**No**: a condition, on top of real illness", "**Yes**", "**Yes**"]
    ],
    keys: [
      "Motive separates the first three: **tangible gain** in malingering, the **sick role** in factitious disorder.",
      "In both malingering and conversion disorder, **objective signs cannot account for the complaint**; Table 20-2 helps separate them.",
      "A real disorder and malingering are **not mutually exclusive**.",
      "Suspect malingering with a **medicolegal context**, a **gap between claim and findings**, **poor cooperation** and **antisocial personality disorder**."
    ],
    links: [
      { ch: "ch20", sec: "s20-mal-dx", label: "Malingering: clues and motives" },
      { ch: "ch20", sec: "s20-mal-ddx", label: "Malingering: differential diagnosis" }
    ]
  },
  {
    id: "stim-methods",
    title: "ECT and the newer brain stimulation methods",
    summary: "How the six stimulation treatments in Chapter 22 differ in energy, seizure, invasiveness and the evidence the chapter gives.",
    items: ["ECT", "MST", "rTMS", "tDCS", "CES", "VNS"],
    rows: [
      ["Energy", "**Alternating** electrical current through the scalp", "**Magnetic** field from a high-output TMS device", "**Magnetic** pulses from a scalp coil", "**Direct** current, **1 to 3 mA**", "**Alternating** current, **1 to 4 mA**, earlobe clips", "Electrical pulses to the **left vagus nerve**"],
      ["Seizure?", "**Yes**", "**Yes**", "No", "No (it **polarizes**, does not stimulate)", "No", "No (it is **anticonvulsant**)"],
      ["Invasive or anesthesia?", "**General anesthesia** and **muscle relaxant**", "**General anesthesia** and **muscle relaxant**", "Noninvasive, **no anesthesia**", "Noninvasive", "Noninvasive", "**Implanted** pulse generator in the chest"],
      ["Main risk named", "**Memory** effects; anesthesia", "Anesthesia and seizure; coil **noise** (earplugs)", "Unintended **seizure**", "**Tingling**, skin irritation", "Skin effects, **dizziness**", "**Voice alteration**, dyspnea, neck pain"],
      ["Status in this chapter", "Most effective for **major depression**", "**Investigational**", "Lower effect size than ECT; **under study**", "**Early stages**", "Better than sham for **anxiety** in a meta-analysis", "Adjunct after **four or more** failed antidepressant trials; about **30 percent** respond at 1 year"]
    ],
    keys: [
      "Only **ECT** and **MST** induce seizures; MST aims for ECT's efficacy with **less amnesia**.",
      "**Magnetic** methods (TMS, MST) bypass the **impedance** of the scalp and skull, so they are more **focal**.",
      "**tDCS** is the one method that **polarizes** rather than stimulates.",
      "Device status has changed since the book: see the update boxes for **TMS**, **tDCS**, **CES**, **VNS** and **ECT**."
    ],
    links: [
      { ch: "ch22", sec: "s22-nm", label: "Therapeutic neuromodulation" },
      { ch: "ch22", sec: "s22-tms", label: "Transcranial magnetic stimulation" },
      { ch: "ch22", sec: "s22-vns", label: "Vagus nerve stimulation" }
    ]
  },
{
  "id": "brief-dyn-schools",
  "title": "The four schools of brief psychodynamic psychotherapy",
  "summary": "How Malan, Mann, Davanloo and Sifneos differ in setting, length, selection, focus and technique (section 23.2).",
  "items": [
    "Malan (brief focal)",
    "Mann (time-limited)",
    "Davanloo (short-term dynamic)",
    "Sifneos (STAPP)"
  ],
  "rows": [
    [
      "Origin",
      "**Balint** team, **Tavistock Clinic**, London, 1950s",
      "**Boston University**, early 1970s",
      "**McGill University**",
      "**Massachusetts General Hospital** (Harvard), 1950s"
    ],
    [
      "Length",
      "About **20** sessions (**30** for a trainee); never more than **40**",
      "Exactly **12** sessions",
      "Not fixed in the section",
      "Not fixed in the section"
    ],
    [
      "Selection",
      "Explicit criteria; **high motivation** predicts success; response to trial interpretation",
      "**Less explicit** criteria; excludes severe depression and **acute psychosis**",
      "Ego-function assessment; response to interpretation; includes **severe, long-standing** neurotic problems",
      "Seven criteria, including a **circumscribed chief complaint** and motivation for **change**, not just relief"
    ],
    [
      "Focus",
      "A **circumscribed** focus",
      "One **central issue**",
      "**Oedipal, non-oedipal or several** foci",
      "Usually an **oedipal** focus; pregenital issues sidestepped"
    ],
    [
      "Signature technique",
      "**Early transference interpretation** (including negative) linked to the parents; fixed end date",
      "Early **positive transference**; the ending as a **maturational** separation",
      "**Active** confrontation of defenses; corrective experience in the transference made so by **interpretation**",
      "Repeated **anxiety-provoking questions**; avoid a **transference neurosis** at all costs"
    ]
  ],
  "keys": [
    "**Exactly 12 sessions** means Mann.",
    "**Anxiety-provoking questioning** and an oedipal focus mean Sifneos.",
    "A technique for **incapacitating OCD and phobias** means Davanloo.",
    "**High motivation** was the feature Malan found invariably linked to success."
  ],
  "links": [
    {
      "ch": "ch23-2",
      "sec": "s232-intro",
      "label": "Brief dynamic therapy compared"
    },
    {
      "ch": "ch23-2",
      "sec": "s232-malan",
      "label": "Malan"
    },
    {
      "ch": "ch23-2",
      "sec": "s232-mann",
      "label": "Mann"
    },
    {
      "ch": "ch23-2",
      "sec": "s232-davanloo",
      "label": "Davanloo"
    },
    {
      "ch": "ch23-2",
      "sec": "s232-sifneos",
      "label": "Sifneos"
    }
  ]
},
{
  "id": "exposure-methods",
  "title": "Exposure-based methods compared",
  "summary": "How systematic desensitization, graded exposure, flooding, participant modeling and ERP differ (section 23.8).",
  "items": [
    "Systematic desensitization",
    "Graded exposure",
    "Flooding",
    "Participant modeling",
    "ERP"
  ],
  "rows": [
    [
      "Key idea",
      "**Reciprocal inhibition**: relaxation suppresses anxiety (Wolpe)",
      "Learn by doing that **no harm follows**",
      "**Block escape** until anxiety extinguishes",
      "**Imitate a fearless model**",
      "Expose to cues and **block rituals**"
    ],
    [
      "Relaxation training",
      "**Yes**",
      "No",
      "No",
      "No",
      "No"
    ],
    [
      "Hierarchy",
      "**Yes**, imagined scenes",
      "**Yes**, real life",
      "**None**: worst first",
      "Gradual, at the patient's pace",
      "Graded or prolonged exposure"
    ],
    [
      "Classic use",
      "Phobias with a **clear stimulus**",
      "Phobias",
      "**Specific phobias**",
      "Phobic children; **agoraphobia** (therapist accompanies)",
      "**OCD** (first choice)"
    ],
    [
      "Main caution",
      "Needs a clearly identifiable stimulus",
      "Slower",
      "Contraindicated in **heart disease** or fragile adaptation; leaving early worsens fear",
      "Needs a credible model",
      "Every fear-lowering behavior must be blocked"
    ]
  ],
  "keys": [
    "**Relaxation plus imagined hierarchy** means systematic desensitization.",
    "**Worst scene first, no escape** means flooding.",
    "**Watching a calm peer** means participant modeling.",
    "**Rituals blocked** means response prevention."
  ],
  "links": [
    {
      "ch": "ch23-8",
      "sec": "s238-desens",
      "label": "Systematic desensitization"
    },
    {
      "ch": "ch23-8",
      "sec": "s238-expo",
      "label": "Graded exposure and flooding"
    },
    {
      "ch": "ch23-8",
      "sec": "s238-model",
      "label": "Participant modeling"
    }
  ]
},
{
  "id": "structured-therapies",
  "title": "DBT, cognitive therapy, IPT and MBT compared",
  "summary": "Four structured psychotherapies from Chapter 23: who built them, for whom, what they target and how they run.",
  "items": [
    "DBT (23.5)",
    "Cognitive therapy (23.7)",
    "IPT (23.10)",
    "MBT (23.13)"
  ],
  "rows": [
    [
      "Developed by",
      "**Marsha Linehan**",
      "**Aaron T. Beck**",
      "**Klerman and Weissman** (1970s)",
      "Not named in the section"
    ],
    [
      "Built for",
      "Chronically **self-injuring** patients with **BPD**",
      "**Depression** (cognitive theory of depression)",
      "**Major depressive disorder**",
      "**BPD**, especially severe"
    ],
    [
      "Core target",
      "Emotion dysregulation; skills deficits",
      "**Automatic thoughts**, assumptions and schemas",
      "**Current relationships**: grief, role dispute, role transition, deficits",
      "**Mentalizing** that fails under strong affect"
    ],
    [
      "Format and length",
      "Skills group, individual therapy, phone coaching, consultation team",
      "Short course of about **6 to 12** sessions when uncomplicated",
      "**12 to 20** sessions over 4 to 5 months, three phases",
      "Group and individual; starts with a **10 to 12** session introductory group"
    ],
    [
      "Signature method",
      "Balance of acceptance and change; treatment hierarchy",
      "Thought record; testing thoughts; activity scheduling",
      "Link mood changes to interpersonal events",
      "Restore mentalizing in the session; agreed formulation"
    ]
  ],
  "keys": [
    "**Self-harm in BPD with a skills group and phone coaching** means DBT.",
    "**Grief, role dispute or role transition** as the focus means IPT.",
    "**Automatic thoughts and the cognitive triad** mean cognitive therapy.",
    "**Understanding minds when feelings run high** means MBT."
  ],
  "links": [
    {
      "ch": "ch23-5",
      "sec": "s235-dbt",
      "label": "DBT"
    },
    {
      "ch": "ch23-7",
      "sec": "s237-model",
      "label": "Cognitive therapy"
    },
    {
      "ch": "ch23-10",
      "sec": "s2310-intro",
      "label": "IPT"
    },
    {
      "ch": "ch23-13",
      "sec": "s2313-mbt",
      "label": "MBT"
    }
  ]
},
{
  "id": "genetic-info-types",
  "title": "Kinds of genetic risk information compared",
  "summary": "Family history, rare large-effect variants, polygenic risk scores and APOE genotype: what each tells a patient and how far it can be used in psychiatric care (section 24.2 and its update boxes).",
  "items": [
    "Family history (pedigree)",
    "Rare large-effect variant (e.g., 22q11.2 deletion)",
    "Polygenic risk score",
    "APOE ε4 genotype"
  ],
  "rows": [
    [
      "What it is",
      "Diagnoses, onset ages and exposures in relatives, drawn as a **pedigree**",
      "A single change with a **large effect**, such as a **copy number variant**",
      "Sum of **many small-effect** common variants",
      "Common variant of one gene"
    ],
    [
      "How common as a cause",
      "The usual starting point for **every** consultation",
      "**Rare** in psychiatric disorders",
      "Reflects the **usual** polygenic pattern",
      "Raises risk of late-onset Alzheimer disease"
    ],
    [
      "What it can tell",
      "**Recurrence risk** as a **range**",
      "A **diagnosis** that can explain illness, e.g., with signs of a rare syndrome",
      "Group-level risk only; **cannot predict** an individual's illness",
      "Cannot predict or confirm Alzheimer disease; flags **ARIA risk** on anti-amyloid drugs"
    ],
    [
      "Clinical status",
      "Core of genetic counseling",
      "**Chromosomal microarray** is standard in developmental delay, intellectual disability and autism",
      "**Research use only** (ISPG)",
      "**Tested before** lecanemab or donanemab, after discussing implications"
    ],
    [
      "Counseling point",
      "Diagnoses in relatives must be **verified**; stigma hides history",
      "Implications for **relatives** and other organ systems",
      "Explain why a number from a company is not a diagnosis",
      "Result also bears on **relatives'** risk"
    ]
  ],
  "keys": [
    "**Numbers from a family history** are given as a **range**, only to clients who want them.",
    "**Psychosis with signs of a rare syndrome** or several affected relatives is where precision testing may help.",
    "**A polygenic score** is not a clinical test in psychiatry yet.",
    "**APOE testing** now has a treatment use, so it needs genetic counseling."
  ],
  "links": [
    {
      "ch": "ch24-2",
      "sec": "s242-process",
      "label": "Family history and risk communication"
    },
    {
      "ch": "ch24-2",
      "sec": "s242-genetics",
      "label": "Genetics and psychiatric disorders"
    },
    {
      "ch": "ch24-2",
      "sec": "s242-testing",
      "label": "Testing and ethics"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 24.2; ISPG Genetic Testing Statement (2019); LEQEMBI US prescribing information"
},
{
  "id": "late-life-cognition",
  "title": "Delirium, dementia or depression in an older adult",
  "summary": "Three causes of poor cognition in late life that are easily confused, compared on onset, attention, testing behavior and what to do first (sections 25.1 and 25.2).",
  "items": [
    "Delirium",
    "Neurodegenerative dementia",
    "Depression-related cognitive dysfunction"
  ],
  "rows": [
    [
      "Onset and course",
      "**Acute**, fluctuating; often the only sign of a medical problem",
      "**Gradual**, progressive, generally irreversible",
      "Follows the **mood** change; tends to improve when depression is treated"
    ],
    [
      "Attention",
      "Markedly impaired",
      "Consistently poor on testing, as part of global deficits",
      "**Variable** from moment to moment"
    ],
    [
      "Pattern of deficits",
      "Global confusion, disorientation",
      "**Global** and consistently poor; language problems and confabulation more likely",
      "Patchy; answers **\"I don't know\"**; free recall poor but **cued recognition** better"
    ],
    [
      "Common clues",
      "New drug, infection, metabolic change, withdrawal, silent MI or stroke",
      "Female sex, family history, age; behavior problems; delusions in up to 75%",
      "Widowhood, chronic illness, somatic complaints, early morning waking; GDS score above 5"
    ],
    [
      "First step",
      "**Find and treat the cause** (Table 25-2)",
      "Exclude **reversible** look-alikes (Table 25-4)",
      "Treat the **depression**, then retest cognition"
    ]
  ],
  "keys": [
    "**Delirium** is a medical emergency until a cause is found.",
    "About **10 to 15%** of patients who seem demented have a treatable condition, depression above all.",
    "**25 to 50%** of people with dementia are also depressed, so the two can coexist."
  ],
  "links": [
    {
      "ch": "ch25-1",
      "sec": "s251-delirium",
      "label": "Urgent causes of delirium"
    },
    {
      "ch": "ch25-2",
      "sec": "s252-dementia",
      "label": "Dementia and reversible look-alikes"
    },
    {
      "ch": "ch25-2",
      "sec": "s252-depress",
      "label": "Depression in late life"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., sections 25.1 and 25.2"
},
{
  "id": "ethics-pairs",
  "title": "Ethics terms that are easily confused",
  "summary": "Paired terms from Chapter 27 that boards like to contrast: conflict and dilemma, weak and strong paternalism, boundary crossing and violation, confidentiality and privilege, and the duties around an impaired colleague.",
  "items": [
    "First term",
    "Second term",
    "How to tell them apart"
  ],
  "rows": [
    [
      "Ethical conflict vs ethical dilemma",
      "**Conflict**: what the psychiatrist **wants** against what is **right**",
      "**Dilemma**: two **ethical values** against each other",
      "Ask whether a personal wish is involved"
    ],
    [
      "Weak vs strong paternalism",
      "**Weak**: acting for a patient whose capacity for autonomous choice is **impaired**",
      "**Strong**: acting for the patient's good although autonomy is **intact**",
      "Ask whether the patient can choose autonomously"
    ],
    [
      "Boundary crossing vs boundary violation",
      "**Crossing**: any step outside the treatment role; may be harmless",
      "**Violation**: a crossing that **exploits** the patient for the doctor's needs",
      "Exploitation defines a violation; **harm is not required**"
    ],
    [
      "Confidentiality vs privilege",
      "**Confidentiality**: the **clinician's duty** not to tell third parties",
      "**Privilege**: the **patient's right** to block disclosure in **court**",
      "Ask who holds it and where it applies"
    ],
    [
      "Legal vs ethical duty to report an impaired colleague",
      "**Legal** duty: varies by US state",
      "**Ethical** duty: **universal**",
      "Report to the proper authority either way"
    ],
    [
      "Treating vs monitoring an impaired physician",
      "**Treating** psychiatrist provides care",
      "**Independent** physician or group monitors fitness to work",
      "Keep the two roles apart"
    ]
  ],
  "keys": [
    "**Beneficence** is applied through paternalism; choose the option that infringes autonomy least.",
    "A **subpoena** does not release the whole record; ask for an **in-camera review**.",
    "Most rules in Chapter 27 come from **US codes**; check the law and codes where you practice."
  ],
  "links": [
    {
      "ch": "ch27",
      "sec": "s27-codes",
      "label": "Codes: conflict and dilemma"
    },
    {
      "ch": "ch27",
      "sec": "s27-princ",
      "label": "Basic ethical principles"
    },
    {
      "ch": "ch27",
      "sec": "s27-nonsex",
      "label": "Boundary crossings and violations"
    },
    {
      "ch": "ch27",
      "sec": "s27-confid",
      "label": "Confidentiality and privilege"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., Chapter 27"
},
{
  "id": "forensic-pairs",
  "title": "Forensic terms that are easily confused",
  "summary": "Paired terms from Chapter 28 that examiners like to contrast: privilege and confidentiality, warn and protect, foreseeable and preventable, informal and voluntary admission, opinion and finding, and competence to stand trial and criminal responsibility.",
  "items": [
    "First term",
    "Second term",
    "How to tell them apart"
  ],
  "rows": [
    [
      "Privilege vs confidentiality",
      "**Privilege**: the **patient's legal right** to keep communications out of **court**",
      "**Confidentiality**: the clinician's **ethical duty** to keep patient information secret everywhere",
      "Ask whether a court or subpoena is involved, and remember only the **patient** can waive privilege"
    ],
    [
      "Duty to warn vs duty to protect",
      "**Tarasoff I**: **warn** the intended victim",
      "**Tarasoff II**: take reasonable steps to **protect**; a warning is one option",
      "A warning alone is usually **not enough**"
    ],
    [
      "Foreseeable vs preventable",
      "**Foreseeable**: a legal, common-sense judgment that harm could be anticipated",
      "**Preventable**: the harm could have been stopped",
      "In hindsight many suicides look preventable that were **not foreseeable**"
    ],
    [
      "Informal vs voluntary admission",
      "**Informal**: general hospital model, no written application",
      "**Voluntary**: the patient **applies in writing**",
      "Both may leave, even **against medical advice**"
    ],
    [
      "Temporary vs involuntary admission",
      "**Temporary**: **one physician**, usually up to **15 days**",
      "**Involuntary**: **two physicians**, commonly **60 days**, then board review",
      "Count the physicians and the days"
    ],
    [
      "Right to treatment vs right to refuse",
      "**Rouse** and **Wyatt**: confinement must come with **treatment**",
      "**O'Connor**, **Rennie**, **Rogers**: limits on confinement and on **forced treatment**",
      "Refusal stands except in an **emergency**"
    ],
    [
      "Opinion vs finding of competence",
      "**Opinion**: what the psychiatrist gives",
      "**Finding**: only a **judge's ruling**",
      "No one is incompetent until a **court** says so; commitment is not incompetence"
    ],
    [
      "Malpractice vs informed consent claim",
      "**Malpractice**: needs an **expert** to show departure from the standard",
      "**Consent claim**: **no expert** needed; a good result is no defense",
      "Ask whether the complaint is about **how** it was done or **what was disclosed**"
    ],
    [
      "Competence to stand trial vs criminal responsibility",
      "**Competence** (Dusky): the mind **now**",
      "**Responsibility** (insanity tests): the mind **at the time of the act**",
      "Check which point in time the question asks about"
    ],
    [
      "M'Naghten vs American Law Institute test",
      "**M'Naghten**: did not **know** the act or its wrongfulness",
      "**ALI**: lacked **substantial capacity** to appreciate or to **conform**",
      "ALI adds control and softens 'know' to 'appreciate'"
    ]
  ],
  "keys": [
    "**Privilege** belongs to the **patient**; **confidentiality** is the doctor's duty.",
    "**Tarasoff I** is **1974** (warn) and **Tarasoff II** is **1976** (protect); the book prints later years.",
    "Most rules in Chapter 28 are **US law**; see the update boxes for the Philippine rules."
  ],
  "links": [
    {
      "ch": "ch28",
      "sec": "s28-priv",
      "label": "Privilege"
    },
    {
      "ch": "ch28",
      "sec": "s28-violent",
      "label": "Tarasoff and the duty to protect"
    },
    {
      "ch": "ch28",
      "sec": "s28-hosp",
      "label": "Procedures of admission"
    },
    {
      "ch": "ch28",
      "sec": "s28-capacity",
      "label": "Capacity and competence"
    },
    {
      "ch": "ch28",
      "sec": "s28-resp2",
      "label": "Insanity standards compared"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., Chapter 28"
}
];
