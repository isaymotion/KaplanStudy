({
  title: "Defining phenotypes",
  sections: [
    { id: "s337-pheno", title: "Defining phenotypes for mapping studies; categorical phenotypes", blocks: [
      { type: "p", text: "Gene mapping in psychiatry has mostly **disappointed** so far. One response has been to look harder at the **phenotype**: what exactly counts as being ill, and how it is measured. Most mapping studies have used **categorical diagnoses**, such as those of the **DSM-5**." },
      { type: "list", title: "Two criticisms of diagnosis-based phenotypes", items: [
        "Diagnosis rests on **subjective clinical evaluation**, so it is hard to decide who is truly affected.",
        "Even a clear diagnosis comes from a **menu-based** system. Two people with the same disorder may share **few symptoms**, which likely points to **different causes (etiologies)**."
      ] },
      { type: "p", text: "Worry that diagnosis-based phenotyping is a **major obstacle** to mapping has raised interest in heritable traits that vary **continuously** across the population. Candidate continuous measures include **biochemical** levels (neurotransmitter metabolites or hormones in **serum or CSF**), **cognitive** tests, **personality** ratings, **brain imaging** of structure or function, **biophysical** markers (for example **evoked potential** responses), and **molecular** tests (for example **gene expression profiles**)." },
      { type: "table", caption: "Categorical versus continuous phenotypes (see Figure 33-31)", head: ["Feature", "Categorical traits (Figure 33-31A)", "Continuous traits (Figure 33-31B)"], rows: [
        ["Basic idea", "**Menu-based** DSM checklist of signs and symptoms", "Being affected means showing **extreme values** on measures linked to illness"],
        ["How a person is classed", "Checklist sorts the person as **affected** with a given diagnosis", "Scores on **continuous measures** thought to underlie the disorder"],
        ["Symptom picture", "Not every symptom appears in every patient; symptoms **cross diagnostic boundaries** (Venn diagram)", "Measures may track **particular components** of a categorical diagnosis"],
        ["Causes", "Probably **etiologically heterogeneous**", "Thought to be **etiologically simpler**"],
        ["Reliability", "Depends on subjective judgment", "Thought to be **more reliably assessed**"],
        ["Who adds information", "Mainly the affected", "**All** members, affected and unaffected, which **adds power**"],
        ["Figure example", "Venn diagram of overlapping symptoms", "Hexagon of **six types** of measures"]
      ], note: "The figure is adapted from the 9th edition of the Comprehensive Textbook of Psychiatry (2009)." },
      { type: "callout", kind: "exam", title: "Why continuous traits help mapping", text: "Continuous traits are thought to be **simpler in cause** and **more reliably measured**, and they use data from **affected and unaffected** people alike, which **raises power**. The figure caption suggests DSM categories may be **etiologically heterogeneous**, which may help explain slow mapping progress." },
      { type: "h", text: "Categorical phenotypes" },
      { type: "p", text: "The categorical phenotypes used most are **DSM diagnoses**. A study may target **one diagnosis** or take in **several diagnoses**. The broader option is usual for disorders thought to form **one disease spectrum**, for instance the **mood disorders**. The goal of the categorical approach is to class subjects **as unambiguously as possible**." },
      { type: "defs", title: "Ways to make diagnosis more reliable", items: [
        ["Choosing criteria", "Decide which **diagnostic criteria** fit the study and **how they will be applied** to each subject."],
        ["Trained clinicians", "Use only **experienced clinicians**, trained in the **instruments** and the **criteria** the study uses."],
        ["Best estimate", "Combine **every available source** (medical records, interviews, videotapes) to reach a diagnosis."],
        ["Consensus diagnosis", "**Two or more** diagnosticians judge each subject **independently**; anyone they **cannot agree** on is **not entered as affected**."]
      ] },
      { type: "p", text: "A good design uses what is known of the disorder's **genetic epidemiology** to pick the sample. Some families pass the disorder in what looks like a **simple Mendelian** way, while others do not. When **many genes** probably contribute, it is sensible to start with a sample likely to carry **loci of large effect**. Redefining the phenotype can find such families. In **Alzheimer disease**, limiting the sample to **early onset (before age 65)** helped greatly, because the early-onset form passed in an **autosomal dominant** pattern." },
      { type: "list", title: "Other ways to redefine (narrow) the phenotype", items: [
        "**Age of onset**",
        "**Ethnic background**",
        "**Severity of symptoms**",
        "**Response to treatment**",
        "**Comorbid disorders**"
      ] },
      { type: "table", caption: "Narrowing versus broadening the phenotype", head: ["Strategy", "What it does", "Gain", "Cost or debate"], wide: true, rows: [
        ["Narrowing", "Restricts the sample (for example **early-onset** Alzheimer disease)", "May raise the chance of **finding a gene** in a complex disease", "Fewer affected subjects, so **less power**"],
        ["Broadening", "Includes other phenotypes on the **same spectrum** (for example **major depressive disorder** in a **bipolar** study)", "Enough subjects for **adequate power**", "Argued for **some** disorders only"],
        ["Stratified categories", "Tests linkage under a series of schemas from **narrow to broad**", "Some say it **lowers false negatives** (missed linkage from misspecification)", "Others say choosing the best-scoring model **sharply raises false positives**"]
      ] },
      { type: "callout", kind: "caution", title: "More models, stricter thresholds", text: "Each extra diagnostic model is **another statistical test**. As tests pile up, the evidence needed to call a result **significant** must become **more stringent**. Picking the model with the highest score inflates **false positives**." },
      { type: "p", text: "Categorical phenotypes are still the **mainstay**, but the limits of **DSM nosology** for genetics are clearer. Studies now look more at traits that may be **parts of one or more** DSM categories. Growing evidence suggests that a broad **susceptibility to psychosis** plays a part in **schizophrenia** as well as **severe bipolar disorder**. Researchers are also probing links between psychiatric and **nonpsychiatric** disorders. **Bioinformatics** models applied to **medical records databases** found many **pairwise correlations** among psychiatric, **neurologic**, **autoimmune** and **infectious** diseases. Such model fitting may one day guide more powerful linkage and association studies for alleles shared across **multiple disorders**." },
      { type: "callout", kind: "pearl", title: "Narrow and broad can coexist", text: "The two strategies look opposed, yet many groups use **both** by building **stratified** categories and testing linkage at each level. Keep in mind that the field is **divided** on whether this mainly prevents misses or mainly creates false hits." }
    ] },
    { id: "s337-endo", title: "Continuous phenotypes and endophenotypes; animal models", blocks: [
      { type: "p", text: "Because categorical diagnoses have been hard to map, **neurobehavioral geneticists** increasingly study **quantitative traits** thought to underlie a diagnosis and that may be **easier to map**. These alternative phenotypes are called **endophenotypes**. The hope is that genes found this way will point to the **biologic pathways** behind a disorder." },
      { type: "table", caption: "Three features of a useful endophenotype", head: ["Feature", "Meaning", "How it is shown"], rows: [
        ["**State-independent**", "Does **not** shift with the **course of illness** or with **medication**", "Adequate **test-retest stability**"],
        ["**Heritable**", "**Genetic factors** explain a large share of trait variation in the population", "Evidence of genetic contribution to variability"],
        ["**Correlated with the disease**", "Trait values **differ** between patients and **unrelated controls**", "Case versus control comparison"]
      ] },
      { type: "callout", kind: "exam", title: "Endophenotype checklist", text: "A useful endophenotype is **state-independent** (stable over illness and treatment, with good **test-retest stability**), **heritable**, and **associated with the disorder** (patients differ from **unrelated controls**)." },
      { type: "h", text: "Which traits are used" },
      { type: "p", text: "Most traits now studied as endophenotypes are measures of **brain structure and function**. Several **MRI morphometry** features are **highly heritable**, with heritability the chapter reports as **60 to 95 percent**." },
      { type: "list", title: "Heritable MRI morphometry features", items: [
        "Volume of the **whole brain**",
        "Volume of the **cerebellum**",
        "**Density** of gray and of white matter",
        "Volume of the **hippocampus** and of the **amygdala**",
        "Volume of **cortical regions**"
      ] },
      { type: "p", text: "A number of studies find that structural brain features tied to disorders like **schizophrenia** or **bipolar disorder** in patient samples are also **abnormal in their relatives**. Physiologic measures of brain activity tried as candidate endophenotypes include **EEG patterns**. Several **\"pencil and paper\"** tests have been used for endophenotypes of **neurocognitive function** and **temperament**." },
      { type: "callout", kind: "pearl", title: "Relatives as a clue", text: "When a brain feature is abnormal not only in patients but also in their **unaffected relatives**, it behaves like a **heritable trait** rather than a result of illness or treatment, which is what makes it attractive as an endophenotype." },
      { type: "h", text: "Animal models" },
      { type: "p", text: "Unlike categorical diagnoses, endophenotypes link more **directly** to traits that can be measured in **animals**. **Circadian rhythms** are a good example. Mood disorders have long been known to feature **prominent circadian disturbance**. Researchers have put forward **quantitative measures of activity** as possible endophenotypes for these conditions." },
      { type: "steps", title: "Circadian clock genes, from flies to mice", items: [
        ["Basic principle", "Animal work shows that **genetically controlled biologic clocks** set circadian activity, and that clock gene variation tracks activity variation **from bacteria to humans**."],
        ["Fruit flies, early 1970s on", "Mapping found **at least seven clock genes**, the first being ***period***."],
        ["Mammals", "**Homologs** of several fly clock genes proved **essential** for mammalian circadian rhythms."],
        ["Mice, early 1990s", "Mouse mapping found new circadian genes, starting with ***Clock***."],
        ["Payoff", "These findings clarified the **cellular networks** and **neurophysiologic circuits** of mammalian rhythms and produced **animal models** that may inform disorders such as **bipolar disorder**."]
      ] },
      { type: "p", text: "Mice with a **targeted mutation in Clock** show abnormal activity, including **hyperactivity** and **decreased sleep**, and this pattern is **modified by lithium**." },
      { type: "callout", kind: "caution", title: "Keep the certainty level", text: "Clock-mutant mice are models that **may** shed light on bipolar disorder; they do not show that clock genes cause it. Likewise, endophenotypes are **hypothesized** to underlie disorders and **may** be simpler to map. Do not upgrade these claims." }
    ] }
  ]
})
