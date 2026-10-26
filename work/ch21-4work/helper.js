  {
    id: "anxiolytic",
    chapter: "ch21-4",
    title: "Choosing an anxiolytic",
    summary: "Start from the situation (suspected sedative overdose or withdrawal, stopping a long-term benzodiazepine, or a target symptom such as panic, generalized anxiety, performance anxiety, catatonia, akathisia or alcohol withdrawal) to reach the drug and first steps from section 21.4.",
    caution: "A teaching aid built from section 21.4 of the 12th edition, with post-publication updates marked. It does not replace a full assessment, current prescribing information or local guidelines. Rule out medical causes of anxiety (thyroid disease, caffeine, other drugs) and assess substance use before prescribing a benzodiazepine.",
    start: "situation",
    nodes: {
      situation: {
        q: "Which situation are you in?",
        options: [
          { label: "Sedated or unresponsive after a suspected overdose", to: "od" },
          { label: "Anxiety, tremor, insomnia, hyperacusis or seizures after stopping a sedative", to: "r:withdrawal" },
          { label: "Planning to stop a benzodiazepine taken for months or years", to: "r:taper" },
          { label: "Choosing a drug for a target symptom", to: "target" }
        ]
      },
      od: {
        q: "What was taken?",
        options: [
          { label: "A benzodiazepine alone", to: "r:flumazenil" },
          { label: "A benzodiazepine plus a tricyclic, or in a dependent or epileptic patient", to: "r:flumcaution" },
          { label: "A barbiturate", to: "r:barbod" },
          { label: "Alcohol or an opioid", to: "r:notflum" }
        ]
      },
      target: {
        q: "What is the main target?",
        options: [
          { label: "Panic attacks", to: "r:panic" },
          { label: "Chronic generalized worry", to: "r:gad" },
          { label: "Tremor and palpitations before a performance", to: "r:performance" },
          { label: "Mutism, posturing, rigidity (catatonia)", to: "r:catatonia" },
          { label: "Restlessness on an antipsychotic (akathisia)", to: "r:akathisia" },
          { label: "Alcohol withdrawal", to: "r:alcohol" },
          { label: "Anxiety or insomnia in an older adult", to: "r:older" },
          { label: "Short-term insomnia", to: "r:insomnia" }
        ]
      }
    },
    results: {
      flumazenil: { label: "Consider", dx: "Supportive care, with flumazenil if needed", line: "Benzodiazepines alone are rarely fatal; flumazenil reverses sedation.", points: ["Secure the airway and IV access first.", "0.2 mg IV over 30 seconds, then 0.3 mg, then 0.5 mg each minute to 3 mg.", "Watch for resedation (1% to 3%); its half-life is shorter than most benzodiazepines."], link: { ch: "ch21-4", sec: "s214-flum", label: "Flumazenil" } },
      flumcaution: { label: "Caution", dx: "Avoid or use flumazenil with great care", line: "Flumazenil can provoke seizures in dependent or epileptic patients and unmask tricyclic seizures and arrhythmias.", points: ["Prioritize airway support and cardiac monitoring.", "Treat TCA toxicity as its own emergency (section 21.2)."], link: { ch: "ch21-4", sec: "s214-flum", label: "Flumazenil" } },
      barbod: { label: "Emergency", dx: "Barbiturate overdose", line: "Low therapeutic index: 1 g causes severe toxicity and 2 to 10 g is usually fatal.", points: ["Airway and circulatory support; activated charcoal.", "Alkalinize the urine to speed excretion; dialysis if severe.", "Flumazenil does not reverse barbiturates."], link: { ch: "ch21-4", sec: "s214-barb-ae", label: "Barbiturate toxicity" } },
      notflum: { label: "Note", dx: "Flumazenil will not help", line: "Flumazenil does not reverse alcohol, barbiturates or opioids.", points: ["Use naloxone for opioid overdose and supportive care for alcohol.", "Remember the 2016 boxed warning: opioids plus benzodiazepines cause deadly respiratory depression."], link: { ch: "ch21-4", sec: "s214-flum", label: "Flumazenil" } },
      withdrawal: { label: "Most likely", dx: "Sedative-hypnotic withdrawal", line: "Benzodiazepine withdrawal: anxiety, insomnia, tremor, hyperacusis, depersonalization, myoclonus, delirium and seizures, worst after abrupt stops of short half-life drugs such as alprazolam.", points: ["Restart a benzodiazepine and taper slowly; long half-life drugs can delay withdrawal 1 to 2 weeks.", "For barbiturates or unknown amounts: pentobarbital 200 mg challenge, then phenobarbital 30 mg per 100 mg, tapered 10% a day.", "Buspirone does not treat withdrawal (no cross-tolerance)."], link: { ch: "ch21-4", sec: "s214-bzd-wd", label: "Withdrawal" } },
      taper: { label: "Plan", dx: "A slow, supported taper", line: "Book: about 25% a week; post-publication 2025 guideline: 5% to 10% every 2 to 4 weeks, adjusted to the patient, never stopping abruptly.", points: ["Switch alprazolam to clonazepam before tapering.", "Carbamazepine 400 to 500 mg a day may ease withdrawal.", "Monitor symptoms (a rating scale helps) and offer psychological support; long-term users may need a year or more."], link: { ch: "ch21-4", sec: "s214-bzd-wd", label: "Tapering" } },
      panic: { label: "Plan", dx: "An SSRI, with a benzodiazepine at first", line: "Alprazolam and clonazepam act fast without sexual side effects, but SSRIs treat comorbid depression and OCD.", points: ["Start both, then taper the benzodiazepine after 3 to 4 weeks.", "Buspirone and β-blockers are not effective for panic disorder."], link: { ch: "ch21-4", sec: "s214-bzd-ind", label: "Panic disorder" } },
      gad: { label: "Options", dx: "An SSRI or SNRI, or buspirone; a benzodiazepine briefly", line: "Buspirone is effective only for GAD and is not habit forming, but needs 2 to 4 weeks and over 30 mg a day.", points: ["Benzodiazepines work fast; set a duration and reassess monthly.", "Buspirone is better for anger and hostility, worse for somatic anxiety.", "Switching from a benzodiazepine: overlap, then taper slowly."], link: { ch: "ch21-4", sec: "s214-busp", label: "Buspirone" } },
      performance: { label: "First choice", dx: "Propranolol before the event", line: "10 to 40 mg, 20 to 30 minutes before performing.", points: ["Check for asthma, diabetes on insulin, heart block or heart failure.", "A β1-selective drug if a β-blocker must be used with lung disease."], link: { ch: "ch21-4", sec: "s214-beta", label: "β-blockers" } },
      catatonia: { label: "First choice", dx: "Lorazepam", line: "From under 5 mg to 12 mg a day or more; catatonia is more often linked to bipolar disorder.", points: ["Chronic catatonia responds less well.", "ECT is the definitive treatment."], link: { ch: "ch21-4", sec: "s214-bzd-ind", label: "Catatonia" } },
      akathisia: { label: "First choice", dx: "A β-blocker such as propranolol", line: "More effective than anticholinergics or benzodiazepines for akathisia.", points: ["β-blockers do not help dystonia or parkinsonism.", "Benzodiazepines help some patients."], link: { ch: "ch21-4", sec: "s214-beta", label: "Akathisia" } },
      alcohol: { label: "First choice", dx: "A benzodiazepine (chlordiazepoxide or clorazepate)", line: "Propranolol is only an adjunct: none if pulse under 50, 50 mg if 50 to 79, 100 mg if 80 or more.", points: ["In liver disease, lorazepam or oxazepam avoids active metabolites.", "Buspirone does not treat withdrawal."], link: { ch: "ch21-4", sec: "s214-bzd-ind", label: "Alcohol withdrawal" } },
      older: { label: "Caution", dx: "Avoid benzodiazepines when possible", line: "Long half-life drugs accumulate, causing sedation, ataxia, falls and hip fractures.", points: ["Post-publication: the 2023 Beers Criteria advise avoiding benzodiazepines in older adults.", "Consider an SSRI or buspirone for anxiety; if a benzodiazepine is unavoidable, use lorazepam, oxazepam or temazepam at low doses."], link: { ch: "ch21-4", sec: "s214-bzd-ae", label: "Adverse effects" } },
      insomnia: { label: "Consider", dx: "Temazepam or estazolam, short term", line: "Investigate insomnia lasting beyond 7 to 10 nights.", points: ["Flurazepam causes next-day impairment; triazolam rebound anxiety and amnesia (no more than 10 days).", "See section 21.5 for nonbenzodiazepine hypnotics."], link: { ch: "ch21-4", sec: "s214-bzd-ind", label: "Insomnia" } }
    }
  }
