({
  title: "Genetic epidemiology and linkage",
  sections: [
    { id: "s337-epi", title: "Neurogenetics: why map genes, and genetic epidemiologic approaches (family, twin and adoption studies)", blocks: [
      { type: "p", text: "Genetics took off once **Gregor Mendel's** ideas were **rediscovered** around **1900**; it is now a base for all of biology and medicine. Learning the **structure of DNA** in the mid 20th century sped everything up, up to reading the **full human genome** and the genomes of many other species. Today the task is to work out what all this stored sequence **means for function**: which sequence differences explain why species, and people within one species, look and behave differently." },
      { type: "p", text: "In people, the hope is that linking **genotype to phenotype** will explain why only **some individuals** get common diseases. This matters a great deal in psychiatry, because we still know **very little** about how psychiatric illnesses arise." },
      { type: "h", text: "What gene mapping tries to do" },
      { type: "p", text: "**Genetic mapping** studies look for genes behind heritable diseases by finding **where on a chromosome** they sit. Researchers study affected people and their relatives with two broad approaches: **linkage** and **association** (Figure 33-29)." },
      { type: "p", text: "A **Mendelian trait** is one where a given genotype at **one locus** is **required and by itself enough** to produce it. Such traits are now **easy** to map. Psychiatric disorders are different. They are **etiologically complex** traits that do not follow simple Mendelian patterns." },
      { type: "defs", title: "Sources of etiologic complexity", items: [
        ["Incomplete penetrance", "Only **some** people who carry the risk genotype actually show the phenotype."],
        ["Phenocopies", "Cases of the disease that arise from **nongenetic** causes."],
        ["Locus heterogeneity", "One disease, but **different genes** behind it depending on the family or population."],
        ["Polygenic inheritance", "Risk rises only when susceptibility variants in **several genes act together**."]
      ] },
      { type: "steps", title: "Component steps in mapping a complex disorder", items: [
        ["Define the phenotype", "Decide exactly **which phenotype** will be studied."],
        ["Show it is transmitted", "Run **epidemiologic studies** to test for evidence of genetic transmission."],
        ["Pick a population", "Choose an **informative study population**."],
        ["Choose methods", "Settle on suitable **experimental and statistical** approaches."]
      ] },
      { type: "callout", kind: "exam", title: "Mendelian versus complex", text: "Mendelian: one locus genotype is **necessary and sufficient**. Psychiatric disorders are **complex traits**; the four named reasons are **incomplete penetrance, phenocopies, locus heterogeneity** and **polygenic inheritance**." },
      { type: "p", text: "Figure 33-29 compares the mapping strategies. Linkage work splits into studies of **pedigrees** and studies of **sib pairs**. Association work splits into **case-control** and **family-based** designs. The figure lists key features, strengths and weaknesses of each; these designs are covered in the next part of this chapter." },
      { type: "h", text: "Genetic epidemiologic approaches" },
      { type: "p", text: "Genetic epidemiology gives **numbers** for how strongly a trait **clusters in families**, and hints at how much of that clustering comes from **genes**." },
      { type: "p", text: "**Family studies** compare how often the disease occurs in **relatives of affected people** versus **control** samples. They cannot separate **genetic from environmental** causes of clustering, so they give only **indirect** evidence of heritability." },
      { type: "p", text: "Family studies often report the **relative risk (λ)**: the disease rate in a given class of **relatives of an affected person**, divided by the disease rate in the **general population**. A λ **above 1** points to a genetic cause, and its **size** estimates how large the genetic share is. λ can be worked out for **siblings**, for **parents and offspring** and for other relationships. Comparing λ across relationship types helps judge the likely **mode of transmission**." },
      { type: "p", text: "Many family studies exist for **OCD**, **schizophrenia**, **bipolar disorder** and **major depression**. All found **familial aggregation**, but the **size** of it varied widely, mostly because studies **defined the phenotype** differently and **recruited and assessed** their samples differently." },
      { type: "p", text: "**Twin studies** compare **concordance rates**, the percentage of pairs in which **both twins** are affected, in **monozygotic (MZ)** versus **dizygotic (DZ)** twins." },
      { type: "table", caption: "What twin concordance should look like under different causal models", head: ["Cause of the disorder", "MZ concordance", "DZ concordance"], rows: [
        ["Purely genetic", "**100%** (MZ twins share all their genetic material)", "**25%** if **recessive**, **50%** if **dominant** (DZ twins are as related as ordinary siblings)"],
        ["Genes contribute but are not the only cause", "**Higher than DZ**", "Lower than MZ"],
        ["Genes play no role", "**Same as DZ**", "**Same as MZ**"]
      ], note: "The no-difference prediction rests on the simplifying assumption that MZ pairs do **not share a more similar environment** than DZ pairs." },
      { type: "p", text: "The more often MZ twins are concordant, the higher the **heritability** and the stronger the case for a genetic share in risk. Twin studies of **autism, bipolar disorder** and **schizophrenia** have repeatedly pointed to **high heritability**, which encouraged efforts to **map loci** for each." },
      { type: "callout", kind: "pearl", title: "Why heritability estimates differ", text: "Different twin studies give different **point estimates**. Most of the spread likely comes from **how the phenotype was ascertained and defined**. So treat these studies as a **rough estimate** of the genetic share in trait variation, still useful for picking traits that are **likely mappable**." },
      { type: "table", caption: "Older versus modern ways of assigning twin phenotypes", head: ["Feature", "Early twin studies", "Modern twin studies"], rows: [
        ["Diagnostic method", "**Unstructured interviews** by **one clinician**", "**Standardized assessments**"],
        ["Review", "Single rater", "Diagnostic material reviewed by a **panel of expert clinicians**"]
      ] },
      { type: "p", text: "Studies also differ in **how wide** they draw the phenotype. Some use a **narrow** definition of who is affected. Others use a **broad** one, for example counting a twin with **major depressive disorder** as concordant with a co-twin who has **bipolar disorder**." },
      { type: "callout", kind: "caution", title: "Familial is not the same as genetic", text: "Family studies alone cannot tell **genes from shared environment**. Twin comparisons also rest on the assumption of **equal environments** for MZ and DZ pairs. Read any heritability figure together with **how cases were defined**." },
      { type: "callout", kind: "exam", title: "Relative risk", text: "λ = disease rate in **relatives of an affected person** / rate in the **general population**. The chapter reads λ **greater than 1** as suggesting a **genetic** contribution; shared family environment can also raise it (see the caution above)." }
    ] },
    { id: "s337-link", title: "Basic concepts of gene mapping: recombination, linkage and LOD scores", blocks: [
      { type: "p", text: "After genetic epidemiology suggests a phenotype is **heritable**, **mapping studies** search for the **specific variants** that raise risk. Every mapping method uses two things: the **chromosomal position** of a variant and the principle of **genetic linkage**." },
      { type: "h", text: "Recombination" },
      { type: "p", text: "Each cell carries **two copies** of every chromosome, called **homologs**: one from the **mother** and one from the **father**. During **meiosis** the paired homologs **cross over** (recombine). This makes **new, unique chromosomes** that pass to the offspring." },
      { type: "table", caption: "Linked versus unlinked loci", head: ["Feature", "Linked loci", "Unlinked loci"], rows: [
        ["Position", "**Physically close** on one chromosome", "**Far apart**, or on **different chromosomes**"],
        ["Recombination", "**Less often** than random segregation predicts", "At **random**: a **50%** chance with each meiosis"],
        ["Recombination fraction (Θ)", "Below **0.5**; **0** means completely linked", "**0.5** (they segregate independently)"],
        ["Link to distance", "Recombination is **proportional to physical distance**", "No relation"]
      ] },
      { type: "h", text: "Markers and identity by descent" },
      { type: "p", text: "Linkage is why **genetic markers** work. A marker is a stretch of DNA at a **known chromosomal location** that carries **variation (polymorphism)**. Mapping looks for marker alleles that **affected people share more than chance** predicts." },
      { type: "p", text: "The assumption is that this sharing means a **marker locus** is **linked** to a nearby **disease locus**. In other words, alleles at both loci came down together from **one shared ancestor** (**identical by descent, IBD**), so the marker points to where the disease locus sits." },
      { type: "callout", kind: "exam", title: "Key units", text: "Recombination is measured by the **recombination fraction (Θ)**, which equals genetic distance. **1 percent recombination = 1 centimorgan (cM)**, which on average spans about **1 megabase** of DNA. Θ = **0.5** means **not linked**." },
      { type: "h", text: "The LOD score" },
      { type: "p", text: "The strength of evidence for linkage depends on how often the two loci **recombine**. The **LOD score** (short for **logarithm of the odds**) expresses how likely it is that two loci are linked at a given genetic distance." },
      { type: "steps", title: "How a LOD score is obtained", items: [
        ["Likelihood if linked", "Find how likely the observed data are, assuming **linkage at a chosen Θ**."],
        ["Likelihood if unlinked", "Find how likely the same data are under **no linkage (Θ = 0.5)**."],
        ["Form the odds ratio", "Divide the first likelihood by the second."],
        ["Take the log", "The **base 10 logarithm** of that ratio is the **LOD score**."],
        ["Repeat across Θ", "Compute LOD scores for Θ from **0 (complete linkage)** to **0.5 (no linkage)**."],
        ["Pick the best Θ", "The Θ with the **highest LOD score** gives the **best guess** of how often disease and marker loci recombine."],
        ["Convert to distance", "Express that Θ as a **genetic map distance**."]
      ] },
      { type: "callout", kind: "pearl", title: "Reading a LOD curve", text: "Think of the LOD score as a plotted curve across Θ values. Its **peak** marks the most likely recombination fraction, and so the most likely **distance** between the marker and the disease locus." },
      { type: "callout", kind: "caution", title: "Sharing is presumed, not proven", text: "Excess marker sharing among affected relatives is **presumed** to mean linkage and IBD inheritance from a common ancestor. The marker only **flags a region**; it is not itself the disease variant." },
      { type: "callout", kind: "caution", title: "Distance rules are averages", text: "The link of **1 cM to about 1 megabase** holds only **on average**. Do not treat a genetic distance in cM as an exact physical length of DNA." }
    ] },
    { id: "s337-ld", title: "Linkage disequilibrium and genetic markers (SSLPs/STRs, SNPs, CNVs)", blocks: [
      { type: "h", text: "Linkage disequilibrium" },
      { type: "p", text: "**Linkage disequilibrium (LD)** measures how far apart loci are genetically by studying **populations**, not **families**. Alleles at two loci are in LD when they appear together in a population **more often than their separate allele frequencies** would predict." },
      { type: "p", text: "**Strong LD** usually means the two loci lie **very close together** on a chromosome. That is useful for mapping risk loci, because one locus can **predict the presence** of the other." },
      { type: "p", text: "This matters because current mapping methods can test only **part** of the roughly **10 million common human polymorphisms** (the chapter's estimate). Thanks to LD, typing a **subset** of polymorphisms lets researchers **infer genotypes** at nearby loci that were not typed." },
      { type: "defs", title: "LD terms", items: [
        ["Haplotype", "A **cluster of alleles in LD** that is **inherited as one unit**."],
        ["LD mapping", "\"Consolidates\" genome data by finding **haplotypes in populations**, from which **IBD sharing** can be inferred even among **unrelated people**."],
        ["r2", "A common LD measure: the **squared correlation** between alleles at the two loci. The chapter describes it as the observed-minus-expected haplotype gap (that difference is **D**) and says it does not depend on allele frequencies; in fact the **maximum r2 depends on allele frequencies** (see the correction)."],
        ["D′", "Another **widely used** LD measure: D divided by its largest possible value, so its range is the **same whatever the allele frequencies** (see the correction)."]
      ] },
      { type: "p", text: "A **large r2** means two alleles are found together more often than chance predicts, that is, they are **in LD**." },
      { type: "callout", kind: "caution", title: "LD is a population idea", text: "LD describes alleles that travel together across a **population**, not within one family. Strong LD **usually** signals close physical proximity; it is a tool for **prediction and inference**, not proof that the typed allele is the cause." },
      { type: "table", caption: "Family-based linkage versus population-based LD association", head: ["Feature", "Traditional pedigree (family) linkage", "LD-based association"], rows: [
        ["Unit studied", "**Families**", "**Populations**"],
        ["Traditional role of LD", "Main mapping method", "Used to **complement** pedigree work, for example to **home in** on a locus already found by linkage"],
        ["Current role", "Has **failed** for some diseases", "Now the **preferred method** for **whole-genome screens**, especially where linkage has been unsuccessful"],
        ["Sample limit", "Number of available families", "Only the **population size** and **disease frequency**"]
      ] },
      { type: "callout", kind: "pearl", title: "Why bigger samples matter", text: "Because cases come from a **whole population**, association studies can enroll **far more affected people**. This is crucial when **incomplete penetrance** or **genetic heterogeneity** is suspected." },
      { type: "h", text: "Genetic markers" },
      { type: "p", text: "Every kind of mapping study needs **genetic markers**. The two most used are **microsatellites** and **SNPs**." },
      { type: "table", caption: "Types of genetic markers", head: ["Marker", "What it is", "Key properties"], rows: [
        ["**Microsatellite** (also **STR**, \"simple tandem repeat\" as printed, or **SSLP**, simple sequence length polymorphism)", "Runs of a **variable number of repeats** of a **2 to 4 base pair** unit", "**Highly polymorphic**: the repeat count at one locus varies a lot between people"],
        ["**SNP** (single nucleotide polymorphism)", "A change in **one base pair** at a specific nucleotide", "**Most common** sequence variation in the genome; spread **widely across the genome**; typed in a **high-throughput, automated** way"],
        ["**Indel**", "Small **insertion or deletion** polymorphism", "Usually **1 to 30 base pairs**"],
        ["**CNV** (copy number variation)", "A **deletion** or a **duplication**", "**Common**; size ranges from a **few base pairs** up to **millions of base pairs**"]
      ] },
      { type: "p", text: "Recent **genome-wide surveys** showed that CNVs are **common**. CNVs **may** feed into chromosomal **recombination and rearrangement**, and so may play a major part in creating **genetic diversity**. Because many CNVs are **large**, they are also **hypothesized** to strongly affect the **expression of genes** that lie inside or next to them." },
      { type: "callout", kind: "exam", title: "Marker match-up", text: "**SSLP/STR** = repeats of **2 to 4 bp**, highly polymorphic. **SNP** = **single base** change, most common variant, high-throughput. **Indel** = **1 to 30 bp**. **CNV** = deletion or duplication, **bp to millions of bp**." },
      { type: "callout", kind: "caution", title: "CNV effects are proposed", text: "The roles of CNVs in **diversity** and in **gene expression** are stated as **possible or hypothesized**, not proven. Keep that level of certainty." }
    ] }
  ]
})
