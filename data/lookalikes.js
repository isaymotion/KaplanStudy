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
  }
];
