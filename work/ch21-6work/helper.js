  {
    id: "adhdmed",
    chapter: "ch21-6",
    title: "Choosing an ADHD or wakefulness medicine",
    summary: "Start from the problem (ADHD, excessive sleepiness, depression or apathy, or a side effect on a stimulant) and the patient's risks to reach options from section 21.6.",
    caution: "A teaching aid built from section 21.6 of the 12th edition, with post-publication updates marked. Before a stimulant, take a cardiac history and check BP and pulse, look for tics, and assess the risk of misuse or diversion.",
    start: "problem",
    nodes: {
      problem: {
        q: "What is the main problem?",
        options: [
          { label: "ADHD", to: "adhd" },
          { label: "Excessive daytime sleepiness", to: "sleepy" },
          { label: "Depression or apathy in an older or medically ill patient", to: "r:depression" },
          { label: "A side effect on a stimulant", to: "se" }
        ]
      },
      adhd: {
        q: "Which situation fits best?",
        options: [
          { label: "Starting treatment, no special risk", to: "r:first" },
          { label: "No response to an adequate methylphenidate trial", to: "r:switch" },
          { label: "Substance use disorder or concern about diversion", to: "r:atx" },
          { label: "Tics, or needs an add-on to a stimulant", to: "r:alpha2" },
          { label: "Family history of psychosis (adolescent or young adult)", to: "r:psychosis" }
        ]
      },
      sleepy: {
        q: "What is the cause?",
        options: [
          { label: "Narcolepsy", to: "r:narcolepsy" },
          { label: "Shift work or treated obstructive sleep apnea", to: "r:shift" }
        ]
      },
      se: {
        q: "Which side effect?",
        options: [
          { label: "Insomnia or nightmares", to: "r:insomnia" },
          { label: "Poor appetite or weight loss", to: "r:appetite" },
          { label: "Irritability or rebound as the dose wears off", to: "r:rebound" },
          { label: "New tics", to: "r:tics" }
        ]
      }
    },
    results: {
      first: { label: "Start", dx: "Methylphenidate", line: "Stimulants work in about 75% of children, within 15 to 30 minutes; methylphenidate is the usual first drug.", points: ["IR 5 to 10 mg at 8 a.m., noon and 4 p.m. (up to 1 mg/kg), or Concerta 18 mg once in the morning.", "Lisdexamfetamine (start 30 mg) gives smooth once-daily coverage with lower abuse potential.", "Track BP, pulse, height and weight; post-publication MTA data show a small adult height deficit."], link: { ch: "ch21-6", sec: "s216-dose", label: "Stimulant dosing" } },
      switch: { label: "Next", dx: "Try an amphetamine", line: "About 70% of nonresponders to one stimulant respond to another, so try all stimulants before changing class.", points: ["Dextroamphetamine is about twice as potent per mg as methylphenidate.", "Mixed amphetamine salts start at 5 to 10 mg; max 40 mg in children, 60 mg in adults.", "Then consider atomoxetine or, post-publication, viloxazine or an extended-release α2 agonist."], link: { ch: "ch21-6", sec: "s216-ind", label: "Choosing and switching" } },
      atx: { label: "Prefer", dx: "Atomoxetine", line: "A selective norepinephrine reuptake inhibitor with no abuse potential, suited to substance use disorders and suspected stimulant seeking.", points: ["0.5 mg/kg, then 1.2 mg/kg after 3 days (adults 40 then 80 mg); effect builds over weeks.", "CYP2D6: fluoxetine, paroxetine and bupropion raise levels about fivefold.", "Boxed warning for suicidal thoughts in youth; stop for jaundice."], link: { ch: "ch21-6", sec: "s216-atx", label: "Atomoxetine" } },
      alpha2: { label: "Consider", dx: "Guanfacine or clonidine", line: "The book lists α2 agonists as alternatives and for severe stimulant-induced tics; small stimulant doses do not worsen tics much.", points: ["Post-publication: guanfacine ER (Intuniv) and clonidine ER (Kapvay) are approved for ages 6 to 17, alone or with a stimulant.", "Watch sedation, hypotension and bradycardia; taper to avoid rebound hypertension."], link: { ch: "ch21-6", sec: "s216-newer", label: "Newer ADHD drugs" } },
      psychosis: { label: "Prefer", dx: "Methylphenidate over amphetamine", line: "Post-publication: in a 2019 NEJM cohort aged 13 to 25, new psychosis was rare but about twice as common with amphetamine.", points: ["Long-term high stimulant doses can cause a paranoid psychosis.", "Consider atomoxetine if psychosis risk is a major concern.", "Ask about psychotic symptoms at follow-up."], link: { ch: "ch21-6", sec: "s216-ae", label: "Stimulant adverse effects" } },
      narcolepsy: { label: "Options", dx: "Modafinil or a stimulant", line: "Modafinil is as good as amphetamines for wakefulness with less activation; stimulants reduce sleep attacks, but tolerance can develop in narcolepsy.", points: ["Modafinil 200 mg each morning (max 400 mg); armodafinil 50 to 250 mg.", "Post-publication: solriamfetol, and pitolisant (also for cataplexy); oxybates treat cataplexy (section 21.5).", "Modafinil lowers hormonal contraceptive effectiveness (label)."], link: { ch: "ch21-6", sec: "s216-ind", label: "Narcolepsy" } },
      shift: { label: "Prefer", dx: "Modafinil or armodafinil", line: "Approved for shift work sleep disorder and residual sleepiness in obstructive sleep apnea; Schedule IV.", points: ["Modafinil 200 mg before the shift or each morning.", "Post-publication: solriamfetol is also approved for sleep apnea sleepiness.", "Keep treating the apnea itself."], link: { ch: "ch21-6", sec: "s216-pk", label: "Modafinil" } },
      depression: { label: "Consider", dx: "A psychostimulant such as methylphenidate", line: "Used for depression in older or medically ill patients, when a rapid response is needed and ECT is contraindicated, and for apathy after stroke or brain injury.", points: ["Benefit is often short (2 to 4 weeks) because of tolerance.", "A 5 mg dextroamphetamine test helps separate depressive pseudodementia from dementia.", "Watch BP, heart rate and arrhythmias."], link: { ch: "ch21-6", sec: "s216-ind", label: "Stimulants in depression" } },
      insomnia: { label: "Adjust", dx: "Move doses earlier", line: "Table 21-49: dose earlier, use short-acting forms, drop afternoon or evening doses.", points: ["Consider antihistamines, clonidine or antidepressants.", "Lisdexamfetamine should not be taken in the afternoon."], link: { ch: "ch21-6", sec: "s216-ae", label: "Managing side effects" } },
      appetite: { label: "Adjust", dx: "Give with meals", line: "Give the drug with meals and use calorie supplements; do not force meals.", points: ["Appetite loss often lessens with tolerance.", "Monitor height and weight (post-publication MTA growth data)."], link: { ch: "ch21-6", sec: "s216-ae", label: "Managing side effects" } },
      rebound: { label: "Adjust", dx: "Overlap doses or use a long-acting form", line: "Check whether irritability comes at the peak or as the dose wears off.", points: ["Overlap doses or combine long- and short-acting forms.", "Look for a mood disorder or other comorbidity; lower the dose if irritability is at the peak."], link: { ch: "ch21-6", sec: "s216-ae", label: "Managing side effects" } },
      tics: { label: "Assess", dx: "Confirm a dose relationship", line: "Tics are often self-limited in 7 to 10 days; methylphenidate may worsen tics in one-third, mostly as the dose wears off.", points: ["Change doses only after confirming the link.", "Severe tics may need risperidone, clonidine or guanfacine."], link: { ch: "ch21-6", sec: "s216-ae", label: "Tics" } }
    }
  }
