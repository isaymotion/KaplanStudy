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
      { ch: "ch20", sec: "s20-bereave", label: "Bereavement as a condition of clinical attention" },
      { ch: "ch29-1", sec: "s291-cx", label: "Bereavement versus major depression (Table 29-2)" }
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
},
{
  "id": "eol-acts",
  "title": "End-of-life acts that are easily confused",
  "summary": "Chapter 29.3 separates several acts at the end of life. Each row gives what the act is and who decides; the positions held on each are contested and are attributed in the chapter.",
  "items": [
    "What happens",
    "Who acts and who decides",
    "Key distinction"
  ],
  "rows": [
    [
      "Passive euthanasia",
      "**Heroic** life-saving measures are **withheld**",
      "The care team, ideally at the patient's or proxy's request",
      "Nothing is done to cause death; treatment is not started"
    ],
    [
      "Withdrawing treatment at a competent patient's request",
      "Life support is **stopped** because the patient refuses it",
      "A **mentally competent** patient decides; the doctor must honor it",
      "The WMA treats honoring a refusal as **not unethical**"
    ],
    [
      "Palliative treatment that may shorten life",
      "Drugs are given to **relieve suffering**; death may follow",
      "The physician, with consent",
      "Death is **not the goal** and is **not intended**"
    ],
    [
      "Physician-assisted suicide",
      "The physician supplies the means, such as a **lethal prescription**",
      "The **patient** performs the final act",
      "Legal only where a law or court allows it (see the update boxes)"
    ],
    [
      "Voluntary active euthanasia",
      "The physician **deliberately ends** the patient's life at the patient's request",
      "The **physician** performs the act",
      "The book's US bodies (AMA, APA) call it illegal and unethical"
    ],
    [
      "Involuntary euthanasia",
      "Life is ended **without or against** the patient's consent",
      "Someone other than the patient decides",
      "Condemned in the chapter, including by the American Association of Suicidology"
    ]
  ],
  "keys": [
    "Ask **who performs the final act**: the patient (assisted suicide) or the physician (active euthanasia).",
    "Ask **whether death is intended**: relief of suffering that may shorten life is not assisted suicide.",
    "Law differs by country and state: see the update boxes for the United States, Canada, the United Kingdom and the Philippines."
  ],
  "links": [
    {
      "ch": "ch29-3",
      "sec": "s293-euth",
      "label": "Types of euthanasia"
    },
    {
      "ch": "ch29-3",
      "sec": "s293-pas",
      "label": "Physician-assisted suicide"
    },
    {
      "ch": "ch29-3",
      "sec": "s293-req",
      "label": "Responding to requests"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 29.3"
},
{
  "id": "grief-types",
  "title": "Normal and complicated grief patterns",
  "summary": "The grief patterns described in Chapter 29.1, side by side.",
  "items": [
    "Core features",
    "Typical setting",
    "Watch for"
  ],
  "rows": [
    [
      "Normal grief",
      "Reminder-bound **pangs**, positive feelings alongside, slow easing",
      "Any loss",
      "**Loneliness** can last years; not a disorder"
    ],
    [
      "Anticipatory grief",
      "Grief **before** the death",
      "A loved one's **slow dying**",
      "Early **withdrawal** from the dying person"
    ],
    [
      "Anniversary reaction",
      "Grief **rekindled** for hours or days",
      "Death date, holidays, reaching the **age** of the deceased",
      "Usually milder each year"
    ],
    [
      "Chronic grief",
      "The **most common** complicated type; **bitterness**, **idealization**",
      "Close, ambivalent or **dependent** bond; little support",
      "Prolonged grief disorder (see the update box)"
    ],
    [
      "Hypertrophic grief",
      "**Extraordinarily intense**; coping fails; withdrawal",
      "**Sudden, unexpected** death",
      "Family disruption"
    ],
    [
      "Delayed grief",
      "Grief **absent or inhibited**; lasting **denial**",
      "Expected mourning does not appear",
      "Later **anger and guilt**"
    ],
    [
      "Traumatic bereavement",
      "Chronic **and** hypertrophic: yearning, **intrusive images**, avoidance plus preoccupation",
      "Past psychiatric illness; a bond that defined the survivor's identity",
      "PTSD after violent deaths"
    ]
  ],
  "keys": [
    "Complicated grief types are **descriptive** in DSM-5 and may herald **major depression**.",
    "Worthlessness, suicidal ideation and retardation point to **major depression**, not grief.",
    "DSM-5-TR and ICD-11 now name **prolonged grief disorder**; see the update box in s291-cx."
  ],
  "links": [
    {
      "ch": "ch29-1",
      "sec": "s291-grief",
      "label": "Normal grief"
    },
    {
      "ch": "ch29-1",
      "sec": "s291-cx",
      "label": "Complicated grief"
    },
    {
      "ch": "ch29-1",
      "sec": "s291-dep",
      "label": "Grief, depression and PTSD"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 29.1"
},
{
  "id": "eol-documents",
  "title": "Advance directives and end-of-life orders",
  "summary": "The documents and orders in Chapter 29.2 (US law), and POLST from the update box, side by side.",
  "items": [
    "What it is",
    "Who signs or decides",
    "Key point"
  ],
  "rows": [
    [
      "Living will",
      "**Written instructions** about life-prolonging treatment for a time the patient cannot communicate",
      "A **mentally competent** patient",
      "Doctors **must follow** the specific instructions"
    ],
    [
      "Health care proxy",
      "Names a **surrogate** to decide when the patient cannot",
      "The patient names the surrogate",
      "The surrogate decides **as the patient would have wanted**"
    ],
    [
      "DNR and DNI orders",
      "Forbid **resuscitation** or **intubation** in extremis",
      "A competent patient, in a living will or through the proxy",
      "Narrow: about specific interventions"
    ],
    [
      "POLST (update)",
      "A **portable medical order** that travels across settings",
      "A **clinician**, after talking with the patient or surrogate",
      "For **serious illness or frailty**; complements, does not replace, a directive"
    ],
    [
      "Patient Self-Determination Act",
      "US law (passed **1990**, in effect **December 1991**)",
      "Applies to facilities taking Medicare or Medicaid",
      "**Inform, ask, record**"
    ],
    [
      "Philippine Mental Health Act, sec. 9 (update)",
      "A **notarized advance directive** on mental health treatment",
      "The service user",
      "Revocable by a new directive or notarized revocation"
    ]
  ],
  "keys": [
    "A **living will** gives instructions; a **proxy** names a person.",
    "A **POLST** is a **medical order**, not an advance directive.",
    "Raise directives **early**, while the patient is well, and say they **can be changed**."
  ],
  "links": [
    {
      "ch": "ch29-2",
      "sec": "s292-ad",
      "label": "Advance directives"
    },
    {
      "ch": "ch29-2",
      "sec": "s292-term",
      "label": "Terminal care decisions"
    },
    {
      "ch": "ch28",
      "sec": "s28-capacity",
      "label": "Durable power of attorney"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 29.2, with update boxes"
},
{
  "id": "prevention-levels",
  "title": "Levels and categories of prevention",
  "summary": "Chapter 30 uses two schemes: the classic public health levels and the Institute of Medicine categories.",
  "items": [
    "Scheme",
    "Who it targets",
    "Example"
  ],
  "rows": [
    [
      "Primary prevention",
      "Classic level",
      "People without the disorder; prevents new cases",
      "A school program against alcohol use and bullying"
    ],
    [
      "Secondary prevention",
      "Classic level",
      "Early detection and treatment of cases",
      "Screening and prompt treatment"
    ],
    [
      "Tertiary prevention",
      "Classic level",
      "People with an established illness; reduces disability",
      "Rehabilitation and chronic illness care"
    ],
    [
      "Universal",
      "Institute of Medicine",
      "A whole population, regardless of risk",
      "A media campaign on warning signs of depression"
    ],
    [
      "Selective",
      "Institute of Medicine",
      "People at higher than average risk, without the disorder",
      "A resilience group for a child of a parent with bipolar disorder"
    ],
    [
      "Indicated",
      "Institute of Medicine",
      "People with early signs who do not meet full criteria",
      "Coping skills for subthreshold depression"
    ]
  ],
  "keys": [
    "The Institute of Medicine categories all fall **before** a diagnosable disorder.",
    "**Tertiary** prevention is about **disability** in an established illness.",
    "The chapter places some early-symptom groups differently from the usual wording; follow the definitions in the section."
  ],
  "links": [
    {
      "ch": "ch30",
      "sec": "s30-promo",
      "label": "Health promotion and prevention"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., Chapter 30"
},
{
  "id": "dev-stage-theories",
  "title": "Piaget and Mahler by age",
  "summary": "Section 32.1 uses two stage schemes for the early years: Piaget's cognitive periods and Mahler's separation-individuation. Match the age to each.",
  "items": [
    "Piaget (Table 32-5)",
    "Mahler (Table 32-9)",
    "Key sign"
  ],
  "rows": [
    [
      "Birth to 2 months",
      "Sensorimotor",
      "Normal autism",
      "Sleep outweighs waking"
    ],
    [
      "2 to 5 months",
      "Sensorimotor",
      "Symbiosis",
      "Mother and infant felt as one unit"
    ],
    [
      "5 to 10 months",
      "Sensorimotor",
      "Differentiation",
      "Turns outward; senses being separate"
    ],
    [
      "10 to 18 months",
      "Sensorimotor",
      "Practicing",
      "Explores with new mobility"
    ],
    [
      "18 to 24 months",
      "Sensorimotor",
      "Rapprochement",
      "Goes off and returns for reassurance"
    ],
    [
      "2 to 5 years",
      "Preoperational (2 to 7)",
      "Object constancy",
      "Soothed that the mother exists when absent"
    ],
    [
      "7 to 11 years",
      "Concrete operational",
      "(beyond Mahler's scheme)",
      "Logic and conservation"
    ],
    [
      "11 years on",
      "Formal operational",
      "(beyond Mahler's scheme)",
      "Abstract reasoning"
    ]
  ],
  "keys": [
    "**Rapprochement** (18 to 24 months) is the back-and-forth toddler.",
    "**Object constancy** (2 to 5 years) overlaps Piaget's **preoperational** period.",
    "**Conservation** marks the **concrete operational** period."
  ],
  "links": [
    {
      "ch": "ch32-1",
      "sec": "s321-piaget",
      "label": "Piaget's stages"
    },
    {
      "ch": "ch32-1",
      "sec": "s321-mahler",
      "label": "Mahler's subphases"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 32.1"
},
{
  "id": "adult-erikson",
  "title": "Erikson's adult stages",
  "summary": "Sections 32.1 to 32.3 follow Erikson's last stages from adolescence to old age. Match each crisis to its age and to a good and a poor outcome.",
  "items": [
    "Stage",
    "Good outcome",
    "Poor outcome"
  ],
  "rows": [
    [
      "Adolescence",
      "Identity versus role confusion",
      "A firm sense of who one is",
      "Identity diffusion"
    ],
    [
      "Young adulthood",
      "Intimacy versus isolation",
      "Committed love and close bonds",
      "Loneliness and shallow relationships"
    ],
    [
      "Middle adulthood",
      "Generativity versus stagnation",
      "Guiding the next generation, creating, helping others",
      "Self-centered stagnation, poorly prepared for old age"
    ],
    [
      "Late adulthood",
      "Integrity versus despair",
      "Life review that ends in peace and wisdom",
      "Bitterness that life was too short to live over"
    ]
  ],
  "keys": [
    "Having children does **not** ensure **generativity**; childless adults can be generative.",
    "The **life review** is the route to **integrity**.",
    "Each stage builds on the one before it."
  ],
  "links": [
    {
      "ch": "ch32-1",
      "sec": "s321-adnorm",
      "label": "Identity in adolescence"
    },
    {
      "ch": "ch32-2",
      "sec": "s322-midtr",
      "label": "Generativity in midlife"
    },
    {
      "ch": "ch32-3",
      "sec": "s323-theory",
      "label": "Integrity versus despair"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., sections 32.1 to 32.3"
},
{
  "id": "memory-disorders331",
  "title": "Memory disorders compared",
  "summary": "Section 33.1 uses classic patients and diseases to show which structures each kind of memory needs. Match the disorder to its main damage and its memory picture.",
  "items": [
    "Main damage",
    "Memory picture",
    "Other features"
  ],
  "rows": [
    [
      "H. M. (bilateral medial temporal removal)",
      "Hippocampus and amygdala on both sides",
      "Could not form new fact (declarative) memories; skill learning preserved",
      "The classic case for declarative memory"
    ],
    [
      "Korsakoff syndrome",
      "Dorsal medial thalamic nucleus and mammillary bodies",
      "Severe inability to form new memories; variable loss of remote memories",
      "Thiamine deficiency, usually with chronic alcohol use"
    ],
    [
      "Alzheimer disease",
      "Parietal and temporal lobes first",
      "Early memory loss",
      "Impaired syntactical comprehension and visuospatial organization; personality change late"
    ],
    [
      "Pick disease",
      "Frontal lobes first",
      "Memory relatively spared",
      "Disinhibition and impaired language expression"
    ],
    [
      "Parkinson disease",
      "Nigrostriatal dopamine neurons",
      "Procedural (skill) memory impaired",
      "Deficit eased by levodopa"
    ]
  ],
  "keys": [
    "**Declarative** memory needs the **medial temporal lobe**; **procedural** memory needs **dopamine** circuits.",
    "**Korsakoff** is a **diencephalic** amnesia; check **thiamine**.",
    "**Frontal** degeneration changes behavior before memory; **Alzheimer** starts with memory."
  ],
  "links": [
    {
      "ch": "ch33-1",
      "sec": "s331-mem",
      "label": "Memory systems"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., Chapter 33 (Functional Neuroanatomy)"
},
{
  "id": "axon-guidance332",
  "title": "Axon guidance molecules compared",
  "summary": "Four families of cues steer growing axons. Section 33.2 contrasts what kind of molecule each is and whether it attracts or repels.",
  "items": [
    "Type",
    "Main action",
    "Key example"
  ],
  "rows": [
    [
      "Cadherins",
      "Region-specific adhesion molecules controlled by Pax6 and Emx2",
      "Direct axonal pathfinding",
      "Keep axons within their regional targets"
    ],
    [
      "Ephrins and Eph receptors",
      "Membrane-bound; Eph is the largest tyrosine kinase receptor family in the brain",
      "Mostly repel",
      "Topographic mapping"
    ],
    [
      "Netrins",
      "Soluble, secreted (for example by the floor plate)",
      "Mainly attract",
      "Draw interneuron axons across the midline"
    ],
    [
      "Slit and Robo",
      "Soluble ligand and its receptor",
      "Repel",
      "Control midline crossing and fasciculation"
    ]
  ],
  "keys": [
    "**Netrins** mainly **attract**; **Slit/Robo** and most **ephrins** **repel**.",
    "**Ephrins** underlie **topographic maps**.",
    "Guidance cues change axon **direction, speed and bundling**."
  ],
  "links": [
    {
      "ch": "ch33-2",
      "sec": "s332-migrate",
      "label": "Migration and outgrowth"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., Chapter 33 (Neural Development and Neurogenesis)"
},
{
  "id": "novel-transmitters334",
  "title": "Beyond the classic transmitters",
  "summary": "Section 33.4 covers four kinds of signal that break the classic rules of synthesis, storage, receptors and clearance. This table sets them side by side.",
  "items": [
    "How it is made",
    "Stored in vesicles?",
    "Where it acts",
    "How the signal ends"
  ],
  "rows": [
    [
      "Neuropeptides (TRH, CRF, oxytocin, neurotensin)",
      "Cut from a large preprohormone after translation",
      "Yes",
      "Mostly G protein-coupled receptors",
      "Peptidases cut them within minutes; no reuptake"
    ],
    [
      "Gases (nitric oxide, carbon monoxide)",
      "Made on demand by NOS from arginine, or by heme oxygenase from heme",
      "No",
      "Diffuse into cells; act inside them, for example on guanylyl cyclase",
      "Short half-life; no reuptake or receptor"
    ],
    [
      "Endocannabinoids (anandamide, 2-AG)",
      "Made on demand from membrane lipids when calcium rises",
      "No",
      "CB1 on presynaptic terminals (retrograde); CB2 mainly on immune cells",
      "Breakdown by FAAH (anandamide) or MAGL (2-AG)"
    ],
    [
      "Neurosteroids (allopregnanolone, DHEA)",
      "Made in the brain from cholesterol",
      "No",
      "Membrane receptors such as GABA-A and NMDA, besides classic steroid receptors",
      "Metabolism"
    ]
  ],
  "keys": [
    "Only **neuropeptides** are packaged in **vesicles**; gases and endocannabinoids are made **on demand**.",
    "**Endocannabinoids** signal **backward** across the synapse to quiet release.",
    "**Allopregnanolone** strongly enhances **GABA-A**; brexanolone and zuranolone treat **postpartum depression** (see the update)."
  ],
  "links": [
    {
      "ch": "ch33-4",
      "sec": "s334-npbio",
      "label": "Neuropeptide life cycle"
    },
    {
      "ch": "ch33-4",
      "sec": "s334-no",
      "label": "Nitric oxide"
    },
    {
      "ch": "ch33-4",
      "sec": "s334-ecb",
      "label": "Endocannabinoids"
    },
    {
      "ch": "ch33-4",
      "sec": "s334-nster",
      "label": "Neurosteroids"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., Chapter 33 (Neurophysiology and Neurochemistry)"
},
{
  "id": "immune-psych336",
  "title": "Immune findings across disorders",
  "summary": "Section 33.6 reports immune changes in several disorders. This table sets the finding, what it is proposed to mean and what later trials showed side by side. All are associations, not proven causes.",
  "items": [
    "Immune finding the chapter reports",
    "Proposed meaning",
    "Later evidence (update boxes)"
  ],
  "rows": [
    [
      "Major depression",
      "Inflammatory activation together with suppressed acquired immunity",
      "Proinflammatory cytokines may link the two; cytokines can produce sickness behavior",
      "Infliximab (2013): no overall benefit; possible benefit only with high CRP"
    ],
    [
      "Bipolar disorder",
      "Raised plasma inflammatory cytokines, most clearly in mania; lithium lowers several cytokines",
      "Mania and depression share dexamethasone nonsuppression and high sympathetic activity",
      "None added"
    ],
    [
      "Schizophrenia",
      "Raised cytokines; birth-season, epidemic, crowding and serologic clues to early infection",
      "Prenatal or perinatal infection or an autoimmune process; virus searches mostly negative",
      "Complement C4A linked to risk (2016); minocycline trial negative (2018)"
    ],
    [
      "Autism",
      "Immune abnormalities reported; relation to symptoms controversial",
      "Cause, consequence or bystander: not yet separable",
      "Danish cohort (2019) and WHO review (2025): no link with vaccines"
    ],
    [
      "Alzheimer disease",
      "Plaques carry complement and C-reactive protein; NSAID use negatively correlated in observational studies",
      "Immune mechanisms may contribute; not primarily inflammatory",
      "NSAID prevention trials negative (ADAPT, INTREPAD 2019)"
    ]
  ],
  "keys": [
    "Depression shows **both** immunosuppression and **inflammatory activation**.",
    "Inflammatory markers may be **higher in mania** than in bipolar depression.",
    "Anti-inflammatory trials so far (**infliximab, minocycline, NSAIDs**) have been **negative overall**."
  ],
  "links": [
    {
      "ch": "ch33-6",
      "sec": "s336-mood",
      "label": "Depression and bipolar disorder"
    },
    {
      "ch": "ch33-6",
      "sec": "s336-scz",
      "label": "Schizophrenia and autism"
    },
    {
      "ch": "ch33-6",
      "sec": "s336-neuro",
      "label": "Alzheimer disease and others"
    },
    {
      "ch": "ch33-6",
      "sec": "s336-tx",
      "label": "Treatment and immunity"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., Chapter 33 (Immune System and CNS Interactions), with the update boxes in this entry"
},
{
  "id": "psych-genetics338",
  "title": "Genetics of four disorders: then and now",
  "summary": "Section 33.8 describes the genetics of Alzheimer disease, autism, bipolar disorder and schizophrenia as they stood when the chapter was written. This table sets the chapter's key findings beside what later large studies showed.",
  "items": [
    "What the chapter describes",
    "Main caution in the chapter",
    "Later evidence (update boxes)"
  ],
  "rows": [
    [
      "Alzheimer disease",
      "APP, PS-1 and PS-2 in early-onset families; apoE e4 and GAB2 in late-onset disease",
      "e4 raises risk but does not determine illness; GAB2 effect sizes are provisional",
      "75 risk loci (2022); APOE e4 testing before anti-amyloid antibodies"
    ],
    [
      "Autism",
      "High twin concordance, chromosomal aberrations, CNVs, de novo mutations; synaptic, migration and excitatory/inhibitory candidate genes",
      "CNV findings preliminary; candidate genes equivocal",
      "Prevalence about 1 in 31 (2022 data); sibling recurrence about 20 percent; 72 genes from sequencing at the strictest threshold, 185 at a looser one (2022)"
    ],
    [
      "Bipolar disorder",
      "Early X and chromosome 11 linkage, genome screens, chromosome 18, pooled analyses",
      "Early linkage reports did not replicate",
      "Amish linkage excluded (1989); 298 GWAS loci (2025)"
    ],
    [
      "Schizophrenia",
      "Linkage regions, dysbindin, DISC 1 and 2, neuregulin 1, mutant mice",
      "Human association results equivocal",
      "287 GWAS loci and 10 rare-variant genes (2022); candidate genes not supported"
    ]
  ],
  "keys": [
    "Genes of **large effect** were found first in **early-onset Alzheimer** families.",
    "The early **linkage** reports in bipolar disorder and schizophrenia were **false positives** in underpowered studies.",
    "Today's findings come from **very large** genome-wide and sequencing studies: hundreds of loci, each of **small effect**, plus a few rare genes of large effect."
  ],
  "links": [
    {
      "ch": "ch33-8",
      "sec": "s338-adlate",
      "label": "Late-onset Alzheimer disease"
    },
    {
      "ch": "ch33-8",
      "sec": "s338-aut",
      "label": "Autism"
    },
    {
      "ch": "ch33-8",
      "sec": "s338-bp",
      "label": "Bipolar disorder"
    },
    {
      "ch": "ch33-8",
      "sec": "s338-scz",
      "label": "Schizophrenia"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., Chapter 33 (Neurogenetics), with the update boxes in this entry"
},
{
  "id": "phase3310",
  "title": "Advanced versus delayed sleep phase",
  "summary": "Section 33.10 describes two circadian sleep disorders at opposite ends of the lark and owl spectrum. This table sets them side by side, with the current names and genetics from the update box.",
  "items": [
    "Advanced phase",
    "Delayed phase"
  ],
  "rows": [
    [
      "Chapter's name",
      "Advanced sleep phase syndrome (ASPS)",
      "Delayed sleep phase syndrome (DSPS)"
    ],
    [
      "Current name (ICSD-3-TR)",
      "Advanced sleep-wake phase disorder",
      "Delayed sleep-wake phase disorder"
    ],
    [
      "Chronotype",
      "Pathologic extreme of the morning lark",
      "Linked to evening preference"
    ],
    [
      "Sleep timing in the chapter",
      "Familial form about 4 hours early: asleep about 7:30 PM, awake about 4:30 AM",
      "Not detailed in the chapter"
    ],
    [
      "Genetics in the chapter",
      "Familial form autosomal dominant; hPER2 variant (serine to glycine) poorly phosphorylated by casein kinase I epsilon",
      "hPER3 repeat-length polymorphism; shorter allele with evening preference"
    ],
    [
      "Later evidence (update)",
      "Other familial variants found, including in CSNK1D (2005)",
      "PER3 link not consistently confirmed; a CRY1 variant found in familial cases (2017)"
    ]
  ],
  "keys": [
    "**Advanced** means sleepy and awake **too early**; **delayed** means **too late**.",
    "The familial advanced form is **autosomal dominant**, with a **PER2** variant.",
    "For the delayed form, the **PER3** association has **not held up consistently**; **CRY1** is the gene with the stronger family evidence."
  ],
  "links": [
    {
      "ch": "ch33-10",
      "sec": "s3310-csd",
      "label": "Circadian sleep disorders"
    },
    {
      "ch": "ch33-10",
      "sec": "s3310-clock",
      "label": "The circadian clock"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., Chapter 33 (Chronobiology), with the update boxes in this entry"
},
{
  "id": "operant-contingencies341",
  "title": "Reinforcement, punishment and omission",
  "summary": "The four operant outcomes of Figure 34-2 are easy to confuse, above all negative reinforcement and punishment. The table sorts them by what the action does and what happens to the action.",
  "items": [
    "Positive reinforcement",
    "Negative reinforcement",
    "Punishment",
    "Omission"
  ],
  "rows": [
    [
      "Other name",
      "Reward learning",
      "Avoidance or escape",
      "None given",
      "Time-out from reinforcement"
    ],
    [
      "What the action does",
      "Produces a good event",
      "Prevents or ends a bad event",
      "Produces a bad event",
      "Prevents or removes a good event"
    ],
    [
      "Effect on the action",
      "Strengthened",
      "Strengthened",
      "Weakened",
      "Weakened"
    ],
    [
      "Clinical note from the chapter",
      "Overeating and drug taking: the food or the drug's effects reinforce the behavior",
      "Using a drug again to end unpleasant cue-driven feelings; rituals and avoidance that lower anxiety",
      "Can teach avoidance of the punisher instead of giving up the behavior",
      "No clinical example given"
    ]
  ],
  "keys": [
    "**Reinforcement** always means the action gets **stronger**; positive and negative say whether a good event is **produced** or a bad event is **prevented or removed**.",
    "**Negative reinforcement is not punishment**: punishment **weakens** an action.",
    "Before treating a behavior, decide whether it is a **respondent** (change its antecedents) or an **operant** (change its consequences)."
  ],
  "links": [
    {
      "ch": "ch34-1",
      "sec": "s341-learn2",
      "label": "The law of effect"
    },
    {
      "ch": "ch34-1",
      "sec": "s341-operant",
      "label": "Operant learning"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 34.1 (Learning Theory, Figure 34-2)"
},
{
  "id": "memory-kinds342",
  "title": "Declarative versus nondeclarative memory",
  "summary": "Section 34.1 divides memory into a declarative system, lost in amnesia, and several nondeclarative systems that amnesia spares. The table sets them side by side.",
  "items": [
    "Declarative",
    "Nondeclarative"
  ],
  "rows": [
    [
      "What it holds",
      "Facts and events",
      "Skills and habits, priming, simple classical conditioning, nonassociative learning"
    ],
    [
      "Awareness",
      "Open to conscious recollection",
      "Not accessible to awareness; shown through performance"
    ],
    [
      "Flexibility",
      "Flexible: what is retrieved can guide many kinds of response",
      "Tied to the processing system that holds it"
    ],
    [
      "Brain basis",
      "Medial temporal lobe and midline diencephalon, working with the neocortex",
      "Several systems: neostriatum (habits), cerebellum (skeletal conditioning), amygdala (emotional learning), neocortex (priming)"
    ],
    [
      "In amnesia",
      "Impaired",
      "Largely spared; priming that needs a new association tends to be impaired"
    ],
    [
      "In infancy",
      "Not fully available until about the third year",
      "Present early in infancy"
    ]
  ],
  "keys": [
    "Amnesia removes **declarative** memory and spares **nondeclarative** memory.",
    "An amnesic patient can show normal **priming** or slowly learn a **habit** without recalling the learning sessions.",
    "**Infantile amnesia** is explained by late maturation of **declarative** memory."
  ],
  "links": [
    {
      "ch": "ch34-2",
      "sec": "s342-systems",
      "label": "Memory systems"
    },
    {
      "ch": "ch34-2",
      "sec": "s342-types",
      "label": "Types of memory and priming"
    },
    {
      "ch": "ch34-2",
      "sec": "s342-infant",
      "label": "Infantile amnesia"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 34.1 (Biology of Memory, Table 34-7)"
},
{
  "id": "mh-models343",
  "title": "Six models of mental health",
  "summary": "Section 34.2 compares six ways of defining mental health. They overlap, and each comes with its own limits. The table sets them side by side.",
  "items": [
    "What counts as healthy",
    "How it is seen or measured",
    "A limit the chapter notes"
  ],
  "rows": [
    [
      "A. Above normal",
      "An objectively desirable state, better than average; Freud's capacity to work and love",
      "Optimal rather than merely reasonable functioning",
      "The average already contains illness; payers favor the narrower medical model"
    ],
    [
      "B. Maturity",
      "Healthy adult development",
      "Progress through identity, intimacy, career consolidation, generativity and integrity",
      "Not a race or a ranking; after 50 it depends on a healthy brain"
    ],
    [
      "C. Positive emotions",
      "Positive emotions that connect us to others (faith, hope, love, joy, gratitude, awe, compassion, forgiveness)",
      "The connecting emotions; brain research the chapter cites",
      "Practical uses are many years away; some of its brain claims are outdated (see the updates)"
    ],
    [
      "D. Socioemotional intelligence",
      "Skill in perceiving, managing and using emotions in oneself and others",
      "Five criteria; reading nonverbal cues",
      "The number of primary emotions is arguable; the chapter names no measure"
    ],
    [
      "E. Subjective well-being",
      "Positive contentment, not just the absence of misery",
      "PANAS, Satisfaction with Life Scale, SF-36, experience sampling",
      "Happiness can be illusory or fleeting; happiness scales predicted little in the Study of Adult Development"
    ],
    [
      "F. Resilience",
      "Getting through stress by adaptive coping, especially mature involuntary mechanisms",
      "Coping style over time, which patients can see on videotape",
      "Involuntary mechanisms distort reality; mature ones are delicate and depend on timing"
    ]
  ],
  "keys": [
    "Model A defines health as **above average**, not as the absence of illness.",
    "Model C counts only emotions that **connect** a person to others; Model D warns that calling negative emotions unhealthy is an **oversimplification**.",
    "Model F rests on the **mature involuntary mechanisms**, with **suppression** most linked to the other facets of health."
  ],
  "links": [
    {
      "ch": "ch34-3",
      "sec": "s343-models",
      "label": "Models of mental health"
    },
    {
      "ch": "ch34-3",
      "sec": "s343-sei",
      "label": "Comparing Models C and D"
    },
    {
      "ch": "ch34-3",
      "sec": "s343-resil",
      "label": "Comparing Models E and F"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 34.2 (Normality and Mental Health)"
},
{
  "id": "animal-models344",
  "title": "Animal models of psychopathology",
  "summary": "Section 34.3a describes several ways researchers produced abnormal states in animals or volunteers to model human disorders. The table sets the main paradigms side by side.",
  "items": [
    "What was done",
    "What was seen",
    "Human condition it was used to model"
  ],
  "rows": [
    [
      "Experimental neurosis (Pavlov)",
      "Dogs learned to tell a circle from an ellipse, then the shapes were made more and more alike",
      "Severe, lasting agitation",
      "Neurosis and anxiety"
    ],
    [
      "Learned helplessness (Seligman)",
      "Dogs received shocks they could not escape",
      "They stopped trying to escape, and helplessness and apathy spread to other settings",
      "Depression; the chapter calls it controversial, and its authors revised it in 2016 (see the update)"
    ],
    [
      "Social isolation (Harlow)",
      "Rhesus infants reared without a bond to a mother or peer",
      "Self-clasping, fearfulness and abnormal social behavior; little recovery after long total isolation",
      "Effects of the early social environment; peer therapy (Suomi) suggested some deficits can be reversed"
    ],
    [
      "Separation",
      "An existing bond with the caretaker is broken",
      "Protest, then despair within about 48 hours; some show signs like those of depressed patients",
      "Depression and anxiety"
    ],
    [
      "Drug-induced syndromes",
      "Reserpine, which depletes norepinephrine, or catecholamine-depleting drugs during separation",
      "Behavior resembling major depressive disorder, reversed by antidepressants",
      "Depression; the chapter calls such models too simple"
    ],
    [
      "Sensory deprivation (Hebb)",
      "Volunteers had sight, hearing and touch cut off for up to 7 days",
      "More suggestibility; in some, anxiety, body illusions and vivid imagery",
      "Brainwashing and states resembling psychosis"
    ]
  ],
  "keys": [
    "**Isolation** means a bond never forms; **separation** breaks a bond that already exists.",
    "**Learned helplessness** and **separation** were both used as models of **depression**.",
    "Animal findings stay **animal findings**: the chapter links them to people only as possibilities."
  ],
  "links": [
    {
      "ch": "ch34-4",
      "sec": "s344-primate",
      "label": "Primate development and deprivation"
    },
    {
      "ch": "ch34-4",
      "sec": "s344-expdis",
      "label": "Experimental disorders"
    },
    {
      "ch": "ch34-4",
      "sec": "s344-sensdep",
      "label": "Sensory deprivation"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 34.3 (Contributions from the Sociocultural Sciences)"
},
{
  "id": "freud-models346",
  "title": "Freud's models of the mind compared",
  "summary": "Sections 34.4a and 34.4b trace how Freud's picture of the mind changed. The table sets the topographic model, drive theory and the structural model side by side.",
  "items": [
    "When",
    "Main parts",
    "How conflict or symptoms arise",
    "What the chapter says happened to it"
  ],
  "rows": [
    [
      "Topographic model",
      "1900, with The Interpretation of Dreams",
      "Conscious, preconscious and unconscious",
      "Unconscious wishes (mainly sexual) push for discharge; the censor lets them through only in disguise, as dreams and symptoms",
      "Discarded: many defenses were not accessible to awareness, and patients showed an unconscious need for punishment; primary process, wish fulfillment, the dynamic unconscious and regression remain useful"
    ],
    [
      "Drive theory",
      "1905 to 1923",
      "Instincts with source, impetus, aim and object; libido and ego instincts, then life and death instincts, then aggression as its own instinct",
      "Drives seek discharge through the psychosexual stages; fixation or conflict leaves pathologic traits",
      "The death instinct is usually set aside today; analysts mean libido and aggression by the dual instincts"
    ],
    [
      "Structural model",
      "1923, with The Ego and the Id",
      "Id, ego and superego, told apart by function",
      "Conflict moves inside, between id, ego and superego; the ego's defenses contain drive derivatives, and symptoms show them partly failing",
      "The cornerstone of ego psychology, later extended by object relations and self-psychology"
    ]
  ],
  "keys": [
    "In the **topographic** model the regions differ by **consciousness**; in the **structural** model the agencies differ by **function**.",
    "The **id** is not the same as the **unconscious**: ego defenses and most superego scrutiny are unconscious too.",
    "Freud's anxiety theory changed with the models: **dammed-up libido** first, then **signal anxiety**."
  ],
  "links": [
    {
      "ch": "ch34-6",
      "sec": "s346-topo",
      "label": "The topographic model"
    },
    {
      "ch": "ch34-6",
      "sec": "s346-drive",
      "label": "Instinct or drive theory"
    },
    {
      "ch": "ch34-7",
      "sec": "s347-ego",
      "label": "The structural model"
    }
  ],
  "source": "Kaplan & Sadock 12th ed., section 34.4 (Theories of Personality and Psychopathology)"
}
];
