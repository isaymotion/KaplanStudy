/* Drug reference: antidepressants. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., section 21.2, unless a
   field sits inside an `updates` entry, which marks information published after the 12th edition (or a correction), with its source.
   Profile levels: N none or minimal, L low, M moderate, H high (from the book's descriptions). */
KS.drugClasses = (KS.drugClasses || []).concat([
  {
    id: "antidepressants", label: "Antidepressants", singular: "antidepressant", chapter: "ch21-2",
    intro: "As classes, antidepressants are about equally effective, so choices turn on side effects, overdose safety, interactions and past response. SSRIs are first line; TCAs and MAOIs remain powerful but dangerous; newer agents act through NMDA, GABAA or 5-HT1A receptors.",
    groups: [
      { id: "ssri", label: "Selective serotonin reuptake inhibitors (and vortioxetine)", short: "SSRIs" },
      { id: "snri", label: "Serotonin–norepinephrine reuptake inhibitors", short: "SNRIs" },
      { id: "atypical", label: "Other mechanisms: bupropion, mirtazapine, trazodone, nefazodone", short: "Other mechanisms" },
      { id: "tca", label: "Tricyclics and tetracyclics", short: "TCAs" },
      { id: "maoi", label: "Monoamine oxidase inhibitors", short: "MAOIs" },
      { id: "rapid", label: "Rapid-acting agents: NMDA antagonists and neurosteroids", short: "Rapid-acting" },
      { id: "newad", label: "Approved after the 12th edition", short: "Newer agents" },
      { id: "augment", label: "Augmenting agents", short: "Augmenters" }
    ],
    profile: [
      ["sedation", "Sedation"], ["weight", "Weight gain"], ["sexual", "Sexual dysfunction"], ["ach", "Anticholinergic"],
      ["ortho", "Orthostasis"], ["qtc", "QTc or conduction"], ["overdose", "Overdose danger"], ["interact", "CYP interactions"]
    ],
    lowFilters: [["weight", "Low weight gain"], ["sexual", "Low sexual dysfunction"], ["sedation", "Low sedation"], ["overdose", "Safer in overdose"], ["interact", "Few interactions"]],
    indications: {
      mdd: "Major depression", "mdd-adj": "Augmenting an antidepressant", trd: "Treatment-resistant depression", suicidal: "Depression with suicidal ideation",
      ppd: "Postpartum depression", atypical: "Atypical depression", gad: "Generalized anxiety", panic: "Panic disorder", social: "Social anxiety",
      ptsd: "PTSD", ocd: "OCD", bulimia: "Bulimia nervosa", pmdd: "PMDD", pain: "Neuropathic or chronic pain", fibro: "Fibromyalgia",
      smoking: "Smoking cessation", enuresis: "Enuresis", insomnia: "Insomnia (off-label)", "ad-agitation": "Agitation in Alzheimer dementia"
    }
  }
]);
