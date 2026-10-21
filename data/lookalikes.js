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
  }
];
