({
 "domains": {
  "c337-ep01": "A",
  "c337-ep02": "A",
  "c337-ep03": "A",
  "c337-ep04": "A",
  "c337-ep05": "A",
  "c337-ep06": "A",
  "c337-lk01": "A",
  "c337-lk02": "A",
  "c337-lk03": "A",
  "c337-lk04": "A",
  "c337-lk05": "A",
  "c337-lk06": "A",
  "c337-ld01": "A",
  "c337-ld02": "A",
  "c337-ld03": "A",
  "c337-ld04": "A",
  "c337-ld05": "A",
  "c337-ld06": "A",
  "c337-pd01": "A",
  "c337-pd02": "A",
  "c337-pd03": "A",
  "c337-pd04": "A",
  "c337-pd05": "A",
  "c337-pd06": "A",
  "c337-as01": "A",
  "c337-as02": "A",
  "c337-as03": "A",
  "c337-as04": "A",
  "c337-as05": "A",
  "c337-as06": "A",
  "c337-as07": "A",
  "c337-as08": "A",
  "c337-pt01": "D",
  "c337-pt02": "D",
  "c337-pt03": "D",
  "c337-pt04": "D",
  "c337-pt05": "D",
  "c337-pt06": "D",
  "c337-pt07": "D",
  "c337-en01": "A",
  "c337-en02": "A",
  "c337-en03": "A",
  "c337-en04": "A",
  "c337-en05": "A"
 },
 "pretest": [
  "c337-ep03",
  "c337-lk03",
  "c337-ld02",
  "c337-pd02",
  "c337-as01",
  "c337-as07",
  "c337-pt04",
  "c337-en03"
 ],
 "checks": {
  "s337-epi": [
   {
    "q": "Name the four sources of etiologic complexity that make psychiatric disorders non-Mendelian.",
    "a": "**Incomplete penetrance**, **phenocopies**, **locus heterogeneity** and **polygenic inheritance**."
   },
   {
    "q": "How is the relative risk (λ) calculated, and what does a λ above 1 suggest?",
    "a": "λ is the **disease rate in relatives of an affected person divided by the rate in the general population**. A λ above 1 suggests a **genetic contribution**, though shared family environment can also raise it."
   },
   {
    "q": "What twin concordance pattern would you expect if a disorder is purely genetic, and what if genes play no role?",
    "a": "Purely genetic: **100% in MZ twins**, and 25% (recessive) or 50% (dominant) in DZ twins. No genetic role: **MZ concordance equals DZ concordance**."
   }
  ],
  "s337-link": [
   {
    "q": "What do a recombination fraction (Θ) of 0 and of 0.5 mean?",
    "a": "**Θ = 0** means the loci are completely linked. **Θ = 0.5** means they are unlinked and segregate independently."
   },
   {
    "q": "How is a LOD score obtained, and what does the peak of the LOD curve show?",
    "a": "It is the **base 10 log of the ratio** of the likelihood of the data if linked at a given Θ to the likelihood if unlinked (Θ = 0.5). The **peak** marks the most likely recombination fraction and distance."
   },
   {
    "q": "How does 1 centimorgan relate to physical DNA, and how firm is that link?",
    "a": "1 percent recombination is **1 cM**, which spans about **1 megabase** on average. It is only an average, not an exact length."
   }
  ],
  "s337-ld": [
   {
    "q": "Why does linkage disequilibrium let researchers type only a subset of the chapter's estimated 10 million common polymorphisms?",
    "a": "Alleles in LD travel together, so typing some polymorphisms lets researchers **infer genotypes at nearby untyped loci**."
   },
   {
    "q": "What do r2 and D′ actually measure, and what do later sources say about the chapter's statement on allele frequency?",
    "a": "**r2 is the squared correlation** between alleles at two loci, and **D′ is D divided by its maximum possible value**. The chapter had this reversed: the **maximum of r2 depends on allele frequencies**, so D′ can be near 1 while r2 is low."
   },
   {
    "q": "List the main genetic marker types and one key property of each.",
    "a": "**Microsatellite (STR/SSLP)**: 2 to 4 bp repeats, highly polymorphic. **SNP**: single base change, most common. **Indel**: 1 to 30 bp. **CNV**: deletion or duplication, from bp to millions of bp."
   }
  ],
  "s337-ped": [
   {
    "q": "How do high-penetrance and low-penetrance variants differ in which mapping approach suits them?",
    "a": "**High-penetrance** variants are rare, segregate in families and suit **pedigree methods**. **Low-penetrance** variants are common, do not segregate strongly and suit **population samples**."
   },
   {
    "q": "What happened to the pedigree linkage claims for schizophrenia, bipolar disorder and Alzheimer disease, and why?",
    "a": "The **Alzheimer loci replicated**, but the **bipolar and schizophrenia loci were judged false positives**. The accepted reason is that the studies were **badly underpowered**."
   },
   {
    "q": "In an affected sib-pair study, what sharing is expected by chance, and what result suggests linkage?",
    "a": "Siblings share about **50 percent IBD** by chance. Affected pairs sharing a region **significantly more than 50 percent** suggests linkage."
   }
  ],
  "s337-assoc": [
   {
    "q": "Why are association studies more powerful than linkage for complex disorders, and what does association mapping rely on?",
    "a": "They are **more powerful for loci of small effect**, thought to account for most complex-disorder risk. They rely on **linkage disequilibrium** between markers and the disease gene."
   },
   {
    "q": "Compare case-control and trio designs for association, including the weakness of case-control.",
    "a": "**Case-control** is more powerful and cheaper but risks **population stratification**. **Trios** use nontransmitted chromosomes as controls, avoiding stratification, but are about **two-thirds as powerful**."
   },
   {
    "q": "What p value does the chapter give for genome-wide significance, and what threshold do later sources say is used today?",
    "a": "The chapter gives about **10^-7**. The threshold in general use today is **p < 5 × 10^-8**, equal to a Bonferroni correction for about 1 million independent common variants."
   }
  ],
  "s337-pheno": [
   {
    "q": "Give two criticisms of diagnosis-based (categorical) phenotypes for gene mapping.",
    "a": "Diagnosis rests on **subjective clinical evaluation**, and a **menu-based system** means two people with the same disorder may share few symptoms and have different causes."
   },
   {
    "q": "What are four ways to make a categorical diagnosis more reliable?",
    "a": "**Choosing criteria**, using **trained clinicians**, a **best-estimate** diagnosis from all sources, and a **consensus diagnosis** by two or more diagnosticians."
   },
   {
    "q": "Why did restricting Alzheimer disease samples to early onset help, and what is the risk of testing many diagnostic models?",
    "a": "Early onset (before age 65) passed in an **autosomal dominant** pattern, which helped mapping. Each extra model is another test, so picking the best-scoring one **raises false positives**."
   }
  ],
  "s337-endo": [
   {
    "q": "What three features make a useful endophenotype?",
    "a": "It is **state-independent**, **heritable**, and **correlated with the disease**, with patients differing from unrelated controls."
   },
   {
    "q": "Why is a brain feature abnormal in unaffected relatives attractive as an endophenotype?",
    "a": "It behaves like a **heritable trait** rather than a result of illness or treatment."
   },
   {
    "q": "What did circadian clock gene work in animals show, and how should Clock-mutant mice be interpreted?",
    "a": "Clock genes were found in **flies (period)** and **mice (Clock)**, with homologs essential in mammals. Clock-mutant mice show hyperactivity and less sleep, modified by lithium, but they are **models that may inform bipolar disorder, not proof clock genes cause it**."
   }
  ]
 },
 "visuals": [
  {
   "sec": "s337-assoc",
   "block": {
    "type": "heatmap",
    "title": "Visual summary: how the mapping designs compare",
    "cols": [
     "Genes of large effect",
     "Genes of small effect",
     "Ease of collecting the sample",
     "Protection from population stratification"
    ],
    "rows": [
     {
      "label": "Pedigree linkage",
      "v": [
       3,
       0,
       1,
       3
      ]
     },
     {
      "label": "Affected sib-pair linkage",
      "v": [
       2,
       1,
       2,
       3
      ]
     },
     {
      "label": "Case-control association",
      "v": [
       1,
       3,
       3,
       0
      ]
     },
     {
      "label": "Family-based (trio) association",
      "v": [
       1,
       2,
       2,
       3
      ]
     }
    ],
    "legend": [
     "Weak",
     "Some",
     "Good",
     "Strong"
    ],
    "note": "Relative ratings drawn from the comparisons in sections 33.7 (pedigree and sib-pair designs favor large effects; association favors small effects; trios avoid stratification but are about two-thirds as powerful). A simplification for revision."
   }
  }
 ]
})
