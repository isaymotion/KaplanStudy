  {
    id: "suppchk",
    chapter: "ch21-11",
    title: "Checking a patient's supplement",
    summary: "Start from what you are worried about (a new supplement with a psychiatric drug, pregnancy, liver injury, bleeding, mania or a gas-station product) to reach the key risks and actions from section 21.11.",
    caution: "A teaching aid built from section 21.11 and its post-publication updates, not a substitute for clinical judgment, poison center advice or a current interaction checker. Supplement labels may be inaccurate, so consider any product potentially adulterated.",
    start: "q",
    nodes: {
      q: {
        q: "What is the situation?",
        options: [
          { label: "The patient takes, or wants to add, a supplement to a psychiatric drug", note: "Interactions depend on the supplement's main action.", to: "kind" },
          { label: "The patient is pregnant or breastfeeding", note: "The book's advice is the same for nearly every product.", to: "r:pregnancy" },
          { label: "Jaundice, raised liver enzymes or liver disease", note: "Several herbs are hepatotoxic.", to: "r:liver" },
          { label: "Anticoagulants, antiplatelets or upcoming surgery", note: "Several supplements add to bleeding.", to: "r:bleed" },
          { label: "Seizure, collapse or opioid-like effects after a gas-station, 'nootropic' or kratom product", note: "Unapproved drugs are sold as supplements.", to: "r:gas" },
          { label: "A child swallowed a supplement or herb", note: "Pediatric ingestions are rising.", to: "r:child" }
        ]
      },
      kind: {
        q: "What does the supplement mainly do?",
        options: [
          { label: "Raises serotonin (St. John's wort, 5-HTP, L-tryptophan, SAMe)", note: "Check for SSRIs, SNRIs, MAOIs and other serotonergic drugs.", to: "sero" },
          { label: "Sedates (kava, valerian, passion flower, lavender, chamomile, lemon balm, melatonin)", note: "Additive with CNS depressants.", to: "r:sedative" },
          { label: "Stimulates (ephedra, ginseng, phenylalanine)", note: "MAOIs are the key danger.", to: "r:stim" },
          { label: "Acts on acetylcholine or seizure threshold (huperzine A, acetyl-L-carnitine)", note: "Watch cholinesterase inhibitors and valproate.", to: "r:chol" },
          { label: "An adjunct with evidence (L-methylfolate, omega-3, NAC)", note: "These have specific doses and roles.", to: "r:adjunct" }
        ]
      },
      sero: {
        q: "Is the supplement St. John's wort?",
        options: [
          { label: "Yes", note: "St. John's wort also lowers the levels of many drugs.", to: "r:sjw" },
          { label: "No (5-HTP, L-tryptophan or SAMe)", note: "Precursors and methyl donors add serotonergic load.", to: "r:precursor" }
        ]
      }
    },
    results: {
      sjw: { label: "Caution", dx: "St. John's wort: serotonin syndrome and falling drug levels", line: "Do not combine with SSRIs or MAOIs (serotonin syndrome; mania with sertraline). It lowers levels of amitriptyline, alprazolam, paroxetine, sertraline and others.", points: ["Post-publication: hyperforin induces CYP3A4 and P-glycoprotein, so check contraceptives, cyclosporine, tacrolimus, HIV drugs, warfarin, digoxin and statins.", "If used alone for mild depression: 100 to 950 mg a day, judged after 4 to 6 weeks.", "Warn about photosensitivity."], link: { ch: "ch21-11", sec: "s2111-sjw", label: "St. John's wort" } },
      precursor: { label: "Caution", dx: "Serotonin syndrome risk with serotonergic drugs", line: "5-HTP and SAMe can cause serotonin syndrome with SSRIs, SNRIs and MAOIs; SAMe can also cause hypomania.", points: ["L-tryptophan: post-publication history of eosinophilia-myalgia syndrome (1989).", "SAMe may worsen Parkinson symptoms and interacts with levodopa, meperidine and tramadol.", "Ask about bipolar disorder before SAMe."], link: { ch: "ch21-11", sec: "s2111-mood", label: "Supplements for mood" } },
      sedative: { label: "Caution", dx: "Additive sedation with CNS depressants and alcohol", line: "Kava, valerian, passion flower, lavender, lemon balm and melatonin add to benzodiazepines, hypnotics and alcohol.", points: ["Kava and valerian are hepatotoxic; kava opposes levodopa and is contraindicated in endogenous depression.", "Lavender may be fatal in overdose.", "Melatonin: 0.3 to 3 mg at bedtime; gummy content varies widely."], link: { ch: "ch21-11", sec: "s2111-sedative", label: "Sedative herbs" } },
      stim: { label: "Avoid with MAOIs", dx: "Stimulant supplements and MAOIs", line: "Ephedra causes sympathomimetic overload and was banned (effective April 2004); ginseng should not be used with MAOIs, sedatives, antidiabetics or steroids.", points: ["Phenylalanine: contraindicated in PKU; may worsen tardive dyskinesia or hypertension; interacts with MAOIs and antipsychotics.", "Ginseng abuse syndrome: insomnia, hypertonia, edema."], link: { ch: "ch21-11", sec: "s2111-stim", label: "Stimulant herbs" } },
      chol: { label: "Caution", dx: "Huperzine A with cholinesterase inhibitors; acetyl-L-carnitine with valproate", line: "Huperzine A adds to cholinesterase inhibition (seizures, arrhythmias); acetyl-L-carnitine can cause seizures and interacts with valproic acid.", points: ["Ask about memory supplements in anyone on donepezil, rivastigmine or galantamine.", "Huperzine A: 60 to 200 µg a day; acetyl-L-carnitine: 500 mg to 2 g a day."], link: { ch: "ch21-11", sec: "s2111-cog", label: "Cognitive supplements" } },
      adjunct: { label: "Option", dx: "L-methylfolate, omega-3 or NAC as adjuncts", line: "L-methylfolate 15 mg a day (prescription medical food) as an SSRI adjunct; NAC 1,200 to 2,400 mg for trichotillomania or OCD augmentation.", points: ["Post-publication omega-3 guideline: EPA or EPA:DHA above 2:1, 1 to 2 g of EPA a day, as an adjunct.", "Omega-3s and fish oil add to bleeding with anticoagulants.", "None replaces proven treatment for moderate or severe illness."], link: { ch: "ch21-11", sec: "s2111-medfoods", label: "Medical foods" } },
      pregnancy: { label: "Avoid", dx: "Avoid supplements in pregnancy; contraindicated in lactation", line: "Trials are lacking, some herbs (horehound, mugwort, ashwagandha) can cause abortion, and most substances enter breast milk.", points: ["The book notes L-methylfolate as safe in pregnancy when used as directed.", "Review all products the patient already takes."], link: { ch: "ch21-11", sec: "s2111-safety", label: "Adverse effects and pregnancy" } },
      liver: { label: "Stop and assess", dx: "Suspect a hepatotoxic herb", line: "Kava (FDA advisory, March 2002), valerian, skullcap and nux vomica are hepatotoxic; post-publication reports add ashwagandha.", points: ["Stop the product, check liver tests and record the brand.", "Skullcap with alcohol causes a disulfiram-like reaction."], link: { ch: "ch21-11", sec: "s2111-sedative", label: "Hepatotoxic herbs" } },
      bleed: { label: "Stop before surgery", dx: "Supplements that raise bleeding risk", line: "Ginkgo (platelet-activating factor), DHA, fish oil, vitamin E, vinpocetine and holy basil add to anticoagulants and antiplatelets.", points: ["Stop DHA and fish oil before surgery; stop vitamin E 1 month before.", "Mugwort potentiates anticoagulants."], link: { ch: "ch21-11", sec: "s2111-cog", label: "Bleeding risks" } },
      gas: { label: "Urgent", dx: "Consider tianeptine or concentrated 7-OH (kratom) products", line: "Post-publication FDA warnings: tianeptine is unapproved and linked to seizures and deaths; 7-OH is an opioid that can be more potent than morphine.", points: ["Treat as poisoning; contact poison control (1-800-222-1222 in the United States).", "Ask about dependence and withdrawal; kratom causes withdrawal."], link: { ch: "ch21-11", sec: "s2111-kratom", label: "Kratom" } },
      child: { label: "Urgent", dx: "Pediatric ingestion: contact poison control", line: "Pediatric melatonin ingestions rose about 530% from 2012 to 2021; mistletoe berries, nux vomica and catnip (delirium) are dangerous in children.", points: ["Bring the product; labels may be inaccurate.", "Advise safe storage for all supplements in the home."], link: { ch: "ch21-11", sec: "s2111-safety", label: "Safety" } }
    }
  }
