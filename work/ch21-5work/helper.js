  {
    id: "sleepdrug",
    chapter: "ch21-5",
    title: "Choosing a sleep medicine",
    summary: "Start from the sleep problem (trouble falling asleep, waking in the night, waking too early with hours left, a shifted body clock, trauma nightmares or a bad reaction to a hypnotic) and the patient's risks to reach options from sections 21.4 and 21.5.",
    caution: "A teaching aid built from sections 21.4 and 21.5 of the 12th edition, with post-publication updates marked. Insomnia lasting more than 7 to 10 nights needs evaluation for medical, psychiatric, substance and primary sleep disorders (such as sleep apnea), and CBT-I is the first-line treatment for chronic insomnia.",
    start: "problem",
    nodes: {
      problem: {
        q: "What is the main problem?",
        options: [
          { label: "Sleepwalking, sleep driving or amnesia on a sleeping pill", to: "r:complex" },
          { label: "Trouble falling asleep", to: "onset" },
          { label: "Waking during the night and staying awake", to: "r:maint" },
          { label: "Waking in the middle of the night with 4 or more hours left", to: "r:mid" },
          { label: "Body clock out of step (jet lag, shift work, delayed sleep phase, blindness)", to: "r:circadian" },
          { label: "Trauma-related nightmares", to: "r:nightmares" }
        ]
      },
      onset: {
        q: "Any special risk?",
        options: [
          { label: "History of substance misuse, or wants to avoid dependence", to: "r:ramelteon" },
          { label: "Older adult or liver disease", to: "r:older" },
          { label: "No special risk", to: "r:onsetz" }
        ]
      }
    },
    results: {
      complex: { label: "Act now", dx: "Stop the drug: complex sleep behavior", line: "Zolpidem, zaleplon and eszopiclone can cause sleepwalking, sleep driving and amnesia; since 2019 they are contraindicated after any such episode (boxed warning).", points: ["Check for alcohol, other sedatives, high doses and SSRIs (which prolong zolpidem hallucinations).", "Consider CBT-I, ramelteon or, post-publication, an orexin antagonist or low-dose doxepin."], link: { ch: "ch21-5", sec: "s215-z-use", label: "Z drug adverse effects" } },
      onsetz: { label: "Options", dx: "Zaleplon or zolpidem (immediate release)", line: "Short half-lives (1 and 2.6 hours) suit sleep onset without much next-day effect.", points: ["Zolpidem: 5 mg for women, 5 to 10 mg for men; take only at the start of the night.", "Zaleplon 10 mg (max 20).", "AASM 2017 also lists eszopiclone, ramelteon, temazepam and triazolam for sleep onset; CBT-I first."], link: { ch: "ch21-5", sec: "s215-z-dose", label: "Z drug dosing" } },
      ramelteon: { label: "Prefer", dx: "Ramelteon", line: "An MT1/MT2 agonist for sleep-onset insomnia with no rebound, withdrawal or abuse.", points: ["8 mg within 30 minutes of bed, not after a high-fat meal.", "Not with fluvoxamine; avoid in severe liver disease, sleep apnea or COPD.", "Benzodiazepines and Z drugs carry dependence and misuse risks."], link: { ch: "ch21-5", sec: "s215-ramel", label: "Ramelteon" } },
      older: { label: "Prefer", dx: "Low doses, or ramelteon", line: "Older adults and patients with liver disease clear hypnotics more slowly.", points: ["Zolpidem 5 mg; zaleplon 5 mg; eszopiclone 1 to 2 mg.", "Avoid long-acting benzodiazepines (falls; Beers Criteria advise against benzodiazepines).", "Post-publication: low-dose doxepin 3 mg is an option for sleep maintenance."], link: { ch: "ch21-5", sec: "s215-z-dose", label: "Dosing" } },
      maint: { label: "Options", dx: "Eszopiclone or zolpidem CR", line: "Eszopiclone (half-life about 6 hours) and controlled-release zolpidem cover the whole night.", points: ["Eszopiclone: start 1 mg (current label); no tolerance over 6 months in trials.", "Post-publication: orexin antagonists (suvorexant, lemborexant, daridorexant) and doxepin 3 to 6 mg also treat maintenance insomnia.", "Temazepam is the benzodiazepine option (section 21.4)."], link: { ch: "ch21-5", sec: "s215-choose", label: "Choosing a hypnotic" } },
      mid: { label: "Options", dx: "Zaleplon, or low-dose sublingual zolpidem", line: "Zaleplon's 1-hour half-life gives about 4 hours of sleep with minimal residual impairment.", points: ["Post-publication: sublingual zolpidem 1.75 or 3.5 mg (Intermezzo) is designed for this, with at least 4 hours left in bed.", "Avoid driving or hazardous work until fully awake."], link: { ch: "ch21-5", sec: "s215-z-dose", label: "Middle-of-the-night dosing" } },
      circadian: { label: "Consider", dx: "Melatonin or ramelteon (tasimelteon for non-24)", line: "Melatonin agonists act on the suprachiasmatic nucleus to shift the body clock.", points: ["Melatonin up to 2 hours before habitual bedtime; supplement content varies widely (2023 study).", "Ramelteon off-label for jet lag, delayed sleep phase and shift work.", "Post-publication: tasimelteon for non-24-hour disorder in totally blind people."], link: { ch: "ch21-5", sec: "s215-mel", label: "Melatonin" } },
      nightmares: { label: "Consider", dx: "Prazosin, with trauma-focused therapy", line: "An α1 antagonist used to suppress PTSD nightmares, 6 to 15 mg a day in divided doses.", points: ["Watch dizziness and hypotension, especially with other antihypertensives or PDE-5 inhibitors.", "Post-publication: a large 2018 trial was negative; the 2023 VA/DoD guideline gives a weak recommendation.", "Trauma-focused psychotherapy remains first line (Chapter 10)."], link: { ch: "ch21-5", sec: "s215-praz", label: "Prazosin" } }
    }
  }
