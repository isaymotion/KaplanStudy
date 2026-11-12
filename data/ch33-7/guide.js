/* Section 33.7 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 33 (Neurogenetics: methods). */
KS.add("ch33-7", "guide", {
  "intro": "Neurogenetics asks how genes shape the brain and contribute to psychiatric illness. This first part covers the methods: how family, twin and adoption studies show that a trait is heritable (Figure 33-29); how recombination, linkage, LOD scores and linkage disequilibrium let researchers map a gene to a chromosome region; the kinds of genetic markers used; the main mapping strategies (pedigree analysis, affected sib-pair analysis and association studies) and the statistics that guard against false positives (Figure 33-30); and the problem of defining phenotypes, from categorical diagnoses to continuous traits, endophenotypes and animal models (Figure 33-31). Update boxes correct the chapter's account of the r2 and D-prime measures of linkage disequilibrium and give the genome-wide significance threshold used today.",
  "objectives": [
    "Explain what family, twin and adoption studies can and cannot show about heritability.",
    "Describe recombination, genetic linkage, LOD scores and linkage disequilibrium, and how they allow gene mapping.",
    "Compare the main genetic markers: SSLPs or STRs, SNPs and CNVs.",
    "Compare pedigree analysis, affected sib-pair analysis and association studies, with their strengths and limits.",
    "Explain why mapping studies need strict significance thresholds and replication.",
    "Describe categorical and continuous phenotypes, endophenotypes and animal models in psychiatric genetics."
  ],
  "parts": [
    {
      "title": "Genetic epidemiology and linkage",
      "sections": [
        {
          "id": "s337-epi",
          "title": "Neurogenetics: why map genes, and genetic epidemiologic approaches (family, twin and adoption studies)",
          "blocks": [
            {
              "type": "p",
              "text": "Genetics took off once **Gregor Mendel's** ideas were **rediscovered** around **1900**; it is now a base for all of biology and medicine. Learning the **structure of DNA** in the mid 20th century sped everything up, up to reading the **full human genome** and the genomes of many other species. Today the task is to work out what all this stored sequence **means for function**: which sequence differences explain why species, and people within one species, look and behave differently."
            },
            {
              "type": "p",
              "text": "In people, the hope is that linking **genotype to phenotype** will explain why only **some individuals** get common diseases. This matters a great deal in psychiatry, because we still know **very little** about how psychiatric illnesses arise."
            },
            {
              "type": "h",
              "text": "What gene mapping tries to do"
            },
            {
              "type": "p",
              "text": "**Genetic mapping** studies look for genes behind heritable diseases by finding **where on a chromosome** they sit. Researchers study affected people and their relatives with two broad approaches: **linkage** and **association** (Figure 33-29)."
            },
            {
              "type": "p",
              "text": "A **Mendelian trait** is one where a given genotype at **one locus** is **required and by itself enough** to produce it. Such traits are now **easy** to map. Psychiatric disorders are different. They are **etiologically complex** traits that do not follow simple Mendelian patterns."
            },
            {
              "type": "defs",
              "title": "Sources of etiologic complexity",
              "items": [
                [
                  "Incomplete penetrance",
                  "Only **some** people who carry the risk genotype actually show the phenotype."
                ],
                [
                  "Phenocopies",
                  "Cases of the disease that arise from **nongenetic** causes."
                ],
                [
                  "Locus heterogeneity",
                  "One disease, but **different genes** behind it depending on the family or population."
                ],
                [
                  "Polygenic inheritance",
                  "Risk rises only when susceptibility variants in **several genes act together**."
                ]
              ]
            },
            {
              "type": "steps",
              "title": "Component steps in mapping a complex disorder",
              "items": [
                [
                  "Define the phenotype",
                  "Decide exactly **which phenotype** will be studied."
                ],
                [
                  "Show it is transmitted",
                  "Run **epidemiologic studies** to test for evidence of genetic transmission."
                ],
                [
                  "Pick a population",
                  "Choose an **informative study population**."
                ],
                [
                  "Choose methods",
                  "Settle on suitable **experimental and statistical** approaches."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Mendelian versus complex",
              "text": "Mendelian: one locus genotype is **necessary and sufficient**. Psychiatric disorders are **complex traits**; the four named reasons are **incomplete penetrance, phenocopies, locus heterogeneity** and **polygenic inheritance**."
            },
            {
              "type": "p",
              "text": "Figure 33-29 compares the mapping strategies. Linkage work splits into studies of **pedigrees** and studies of **sib pairs**. Association work splits into **case-control** and **family-based** designs. The figure lists key features, strengths and weaknesses of each; these designs are covered in the next part of this chapter."
            },
            {
              "type": "h",
              "text": "Genetic epidemiologic approaches"
            },
            {
              "type": "p",
              "text": "Genetic epidemiology gives **numbers** for how strongly a trait **clusters in families**, and hints at how much of that clustering comes from **genes**."
            },
            {
              "type": "p",
              "text": "**Family studies** compare how often the disease occurs in **relatives of affected people** versus **control** samples. They cannot separate **genetic from environmental** causes of clustering, so they give only **indirect** evidence of heritability."
            },
            {
              "type": "p",
              "text": "Family studies often report the **relative risk (λ)**: the disease rate in a given class of **relatives of an affected person**, divided by the disease rate in the **general population**. A λ **above 1** points to a genetic cause, and its **size** estimates how large the genetic share is. λ can be worked out for **siblings**, for **parents and offspring** and for other relationships. Comparing λ across relationship types helps judge the likely **mode of transmission**."
            },
            {
              "type": "p",
              "text": "Many family studies exist for **OCD**, **schizophrenia**, **bipolar disorder** and **major depression**. All found **familial aggregation**, but the **size** of it varied widely, mostly because studies **defined the phenotype** differently and **recruited and assessed** their samples differently."
            },
            {
              "type": "p",
              "text": "**Twin studies** compare **concordance rates**, the percentage of pairs in which **both twins** are affected, in **monozygotic (MZ)** versus **dizygotic (DZ)** twins."
            },
            {
              "type": "table",
              "caption": "What twin concordance should look like under different causal models",
              "head": [
                "Cause of the disorder",
                "MZ concordance",
                "DZ concordance"
              ],
              "rows": [
                [
                  "Purely genetic",
                  "**100%** (MZ twins share all their genetic material)",
                  "**25%** if **recessive**, **50%** if **dominant** (DZ twins are as related as ordinary siblings)"
                ],
                [
                  "Genes contribute but are not the only cause",
                  "**Higher than DZ**",
                  "Lower than MZ"
                ],
                [
                  "Genes play no role",
                  "**Same as DZ**",
                  "**Same as MZ**"
                ]
              ],
              "note": "The no-difference prediction rests on the simplifying assumption that MZ pairs do **not share a more similar environment** than DZ pairs."
            },
            {
              "type": "p",
              "text": "The more often MZ twins are concordant, the higher the **heritability** and the stronger the case for a genetic share in risk. Twin studies of **autism, bipolar disorder** and **schizophrenia** have repeatedly pointed to **high heritability**, which encouraged efforts to **map loci** for each."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why heritability estimates differ",
              "text": "Different twin studies give different **point estimates**. Most of the spread likely comes from **how the phenotype was ascertained and defined**. So treat these studies as a **rough estimate** of the genetic share in trait variation, still useful for picking traits that are **likely mappable**."
            },
            {
              "type": "table",
              "caption": "Older versus modern ways of assigning twin phenotypes",
              "head": [
                "Feature",
                "Early twin studies",
                "Modern twin studies"
              ],
              "rows": [
                [
                  "Diagnostic method",
                  "**Unstructured interviews** by **one clinician**",
                  "**Standardized assessments**"
                ],
                [
                  "Review",
                  "Single rater",
                  "Diagnostic material reviewed by a **panel of expert clinicians**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Studies also differ in **how wide** they draw the phenotype. Some use a **narrow** definition of who is affected. Others use a **broad** one, for example counting a twin with **major depressive disorder** as concordant with a co-twin who has **bipolar disorder**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Familial is not the same as genetic",
              "text": "Family studies alone cannot tell **genes from shared environment**. Twin comparisons also rest on the assumption of **equal environments** for MZ and DZ pairs. Read any heritability figure together with **how cases were defined**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Relative risk",
              "text": "λ = disease rate in **relatives of an affected person** / rate in the **general population**. The chapter reads λ **greater than 1** as suggesting a **genetic** contribution; shared family environment can also raise it (see the caution above)."
            }
          ]
        },
        {
          "id": "s337-link",
          "title": "Basic concepts of gene mapping: recombination, linkage and LOD scores",
          "blocks": [
            {
              "type": "p",
              "text": "After genetic epidemiology suggests a phenotype is **heritable**, **mapping studies** search for the **specific variants** that raise risk. Every mapping method uses two things: the **chromosomal position** of a variant and the principle of **genetic linkage**."
            },
            {
              "type": "h",
              "text": "Recombination"
            },
            {
              "type": "p",
              "text": "Each cell carries **two copies** of every chromosome, called **homologs**: one from the **mother** and one from the **father**. During **meiosis** the paired homologs **cross over** (recombine). This makes **new, unique chromosomes** that pass to the offspring."
            },
            {
              "type": "table",
              "caption": "Linked versus unlinked loci",
              "head": [
                "Feature",
                "Linked loci",
                "Unlinked loci"
              ],
              "rows": [
                [
                  "Position",
                  "**Physically close** on one chromosome",
                  "**Far apart**, or on **different chromosomes**"
                ],
                [
                  "Recombination",
                  "**Less often** than random segregation predicts",
                  "At **random**: a **50%** chance with each meiosis"
                ],
                [
                  "Recombination fraction (Θ)",
                  "Below **0.5**; **0** means completely linked",
                  "**0.5** (they segregate independently)"
                ],
                [
                  "Link to distance",
                  "Recombination is **proportional to physical distance**",
                  "No relation"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Markers and identity by descent"
            },
            {
              "type": "p",
              "text": "Linkage is why **genetic markers** work. A marker is a stretch of DNA at a **known chromosomal location** that carries **variation (polymorphism)**. Mapping looks for marker alleles that **affected people share more than chance** predicts."
            },
            {
              "type": "p",
              "text": "The assumption is that this sharing means a **marker locus** is **linked** to a nearby **disease locus**. In other words, alleles at both loci came down together from **one shared ancestor** (**identical by descent, IBD**), so the marker points to where the disease locus sits."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Key units",
              "text": "Recombination is measured by the **recombination fraction (Θ)**, which equals genetic distance. **1 percent recombination = 1 centimorgan (cM)**, which on average spans about **1 megabase** of DNA. Θ = **0.5** means **not linked**."
            },
            {
              "type": "h",
              "text": "The LOD score"
            },
            {
              "type": "p",
              "text": "The strength of evidence for linkage depends on how often the two loci **recombine**. The **LOD score** (short for **logarithm of the odds**) expresses how likely it is that two loci are linked at a given genetic distance."
            },
            {
              "type": "steps",
              "title": "How a LOD score is obtained",
              "items": [
                [
                  "Likelihood if linked",
                  "Find how likely the observed data are, assuming **linkage at a chosen Θ**."
                ],
                [
                  "Likelihood if unlinked",
                  "Find how likely the same data are under **no linkage (Θ = 0.5)**."
                ],
                [
                  "Form the odds ratio",
                  "Divide the first likelihood by the second."
                ],
                [
                  "Take the log",
                  "The **base 10 logarithm** of that ratio is the **LOD score**."
                ],
                [
                  "Repeat across Θ",
                  "Compute LOD scores for Θ from **0 (complete linkage)** to **0.5 (no linkage)**."
                ],
                [
                  "Pick the best Θ",
                  "The Θ with the **highest LOD score** gives the **best guess** of how often disease and marker loci recombine."
                ],
                [
                  "Convert to distance",
                  "Express that Θ as a **genetic map distance**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Reading a LOD curve",
              "text": "Think of the LOD score as a plotted curve across Θ values. Its **peak** marks the most likely recombination fraction, and so the most likely **distance** between the marker and the disease locus."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Sharing is presumed, not proven",
              "text": "Excess marker sharing among affected relatives is **presumed** to mean linkage and IBD inheritance from a common ancestor. The marker only **flags a region**; it is not itself the disease variant."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Distance rules are averages",
              "text": "The link of **1 cM to about 1 megabase** holds only **on average**. Do not treat a genetic distance in cM as an exact physical length of DNA."
            }
          ]
        },
        {
          "id": "s337-ld",
          "title": "Linkage disequilibrium and genetic markers (SSLPs/STRs, SNPs, CNVs)",
          "blocks": [
            {
              "type": "h",
              "text": "Linkage disequilibrium"
            },
            {
              "type": "p",
              "text": "**Linkage disequilibrium (LD)** measures how far apart loci are genetically by studying **populations**, not **families**. Alleles at two loci are in LD when they appear together in a population **more often than their separate allele frequencies** would predict."
            },
            {
              "type": "p",
              "text": "**Strong LD** usually means the two loci lie **very close together** on a chromosome. That is useful for mapping risk loci, because one locus can **predict the presence** of the other."
            },
            {
              "type": "p",
              "text": "This matters because current mapping methods can test only **part** of the roughly **10 million common human polymorphisms** (the chapter's estimate). Thanks to LD, typing a **subset** of polymorphisms lets researchers **infer genotypes** at nearby loci that were not typed."
            },
            {
              "type": "defs",
              "title": "LD terms",
              "items": [
                [
                  "Haplotype",
                  "A **cluster of alleles in LD** that is **inherited as one unit**."
                ],
                [
                  "LD mapping",
                  "\"Consolidates\" genome data by finding **haplotypes in populations**, from which **IBD sharing** can be inferred even among **unrelated people**."
                ],
                [
                  "r2",
                  "A common LD measure: the **squared correlation** between alleles at the two loci. The chapter describes it as the observed-minus-expected haplotype gap (that difference is **D**) and says it does not depend on allele frequencies; in fact the **maximum r2 depends on allele frequencies** (see the correction)."
                ],
                [
                  "D′",
                  "Another **widely used** LD measure: D divided by its largest possible value, so its range is the **same whatever the allele frequencies** (see the correction)."
                ]
              ]
            },
            {
              "type": "p",
              "text": "A **large r2** means two alleles are found together more often than chance predicts, that is, they are **in LD**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "LD is a population idea",
              "text": "LD describes alleles that travel together across a **population**, not within one family. Strong LD **usually** signals close physical proximity; it is a tool for **prediction and inference**, not proof that the typed allele is the cause."
            },
            {
              "type": "table",
              "caption": "Family-based linkage versus population-based LD association",
              "head": [
                "Feature",
                "Traditional pedigree (family) linkage",
                "LD-based association"
              ],
              "rows": [
                [
                  "Unit studied",
                  "**Families**",
                  "**Populations**"
                ],
                [
                  "Traditional role of LD",
                  "Main mapping method",
                  "Used to **complement** pedigree work, for example to **home in** on a locus already found by linkage"
                ],
                [
                  "Current role",
                  "Has **failed** for some diseases",
                  "Now the **preferred method** for **whole-genome screens**, especially where linkage has been unsuccessful"
                ],
                [
                  "Sample limit",
                  "Number of available families",
                  "Only the **population size** and **disease frequency**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why bigger samples matter",
              "text": "Because cases come from a **whole population**, association studies can enroll **far more affected people**. This is crucial when **incomplete penetrance** or **genetic heterogeneity** is suspected."
            },
            {
              "type": "h",
              "text": "Genetic markers"
            },
            {
              "type": "p",
              "text": "Every kind of mapping study needs **genetic markers**. The two most used are **microsatellites** and **SNPs**."
            },
            {
              "type": "table",
              "caption": "Types of genetic markers",
              "head": [
                "Marker",
                "What it is",
                "Key properties"
              ],
              "rows": [
                [
                  "**Microsatellite** (also **STR**, \"simple tandem repeat\" as printed, or **SSLP**, simple sequence length polymorphism)",
                  "Runs of a **variable number of repeats** of a **2 to 4 base pair** unit",
                  "**Highly polymorphic**: the repeat count at one locus varies a lot between people"
                ],
                [
                  "**SNP** (single nucleotide polymorphism)",
                  "A change in **one base pair** at a specific nucleotide",
                  "**Most common** sequence variation in the genome; spread **widely across the genome**; typed in a **high-throughput, automated** way"
                ],
                [
                  "**Indel**",
                  "Small **insertion or deletion** polymorphism",
                  "Usually **1 to 30 base pairs**"
                ],
                [
                  "**CNV** (copy number variation)",
                  "A **deletion** or a **duplication**",
                  "**Common**; size ranges from a **few base pairs** up to **millions of base pairs**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Recent **genome-wide surveys** showed that CNVs are **common**. CNVs **may** feed into chromosomal **recombination and rearrangement**, and so may play a major part in creating **genetic diversity**. Because many CNVs are **large**, they are also **hypothesized** to strongly affect the **expression of genes** that lie inside or next to them."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Marker match-up",
              "text": "**SSLP/STR** = repeats of **2 to 4 bp**, highly polymorphic. **SNP** = **single base** change, most common variant, high-throughput. **Indel** = **1 to 30 bp**. **CNV** = deletion or duplication, **bp to millions of bp**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "CNV effects are proposed",
              "text": "The roles of CNVs in **diversity** and in **gene expression** are stated as **possible or hypothesized**, not proven. Keep that level of certainty."
            },
            {
              "type": "update",
              "year": 2008,
              "title": "Correction: r2 and D′",
              "text": "The chapter says that r2, unlike D′, does not depend on allele frequencies, and it describes r2 as the gap between observed and expected haplotype frequencies. Both points are reversed or mislabeled. The gap between the observed frequency of a two-locus haplotype and the frequency expected if the alleles were independent is **D**. **D′** divides D by its largest possible value for the observed allele frequencies, so it always runs from **-1 to 1** whatever the frequencies (though it is not fully independent of them). **r2** is the **squared correlation** between alleles at the two loci; its **maximum depends on the allele frequencies** at both loci, so two markers with very different frequencies can show D′ near 1 but a low r2. r2 matters for association studies because the chi-square test of association equals the sample size times r2, so it tracks how well one marker stands in for another.",
              "source": "VanLiere JM, Rosenberg NA, Mathematical properties of the r2 measure of linkage disequilibrium, Theor Popul Biol 2008 (PMC)"
            }
          ]
        }
      ]
    },
    {
      "title": "Mapping strategies",
      "sections": [
        {
          "id": "s337-ped",
          "title": "Mapping strategies: pedigree analysis and affected sib-pair analysis",
          "blocks": [
            {
              "type": "p",
              "text": "Risk variants for a disease fall roughly into two groups by **penetrance**. The group a variant belongs to decides which mapping strategy suits it best."
            },
            {
              "type": "table",
              "caption": "High- versus low-penetrance variants and how each is mapped (see Figure 33-29)",
              "head": [
                "Feature",
                "High-penetrance variants",
                "Low-penetrance variants"
              ],
              "rows": [
                [
                  "Effect on phenotype",
                  "**Large**",
                  "Relatively **weak**"
                ],
                [
                  "Chance a carrier shows the disease",
                  "**High**",
                  "Low"
                ],
                [
                  "How common",
                  "Tend to be **rare**",
                  "Typically **frequent**"
                ],
                [
                  "Behavior in families",
                  "**Segregate** within families",
                  "Not expected to segregate strongly in pedigrees"
                ],
                [
                  "Best mapping approach",
                  "**Pedigree-based** methods",
                  "**Population samples**"
                ],
                [
                  "What finding one offers",
                  "Usually **basic insight into pathobiology**",
                  "Little new biology at first, but adds to knowledge of **disease risk**"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Pedigree analysis"
            },
            {
              "type": "p",
              "text": "Pedigree analysis is done in **multigenerational families**. Its main aim is to learn whether two or more loci, a **marker of known position** and an **unknown disease locus**, are **cosegregating** inside a pedigree."
            },
            {
              "type": "steps",
              "title": "How a pedigree analysis is run",
              "items": [
                [
                  "Collect families",
                  "Gather **one or more affected pedigrees** spanning several generations."
                ],
                [
                  "Scan with markers",
                  "Type a **series of markers** across the whole genome or part of it."
                ],
                [
                  "Score each position",
                  "Compute a **LOD score** at every marker position."
                ],
                [
                  "Find deviant regions",
                  "Pick out chromosomal regions whose results differ **significantly** from what **independent assortment** would predict."
                ]
              ]
            },
            {
              "type": "p",
              "text": "The method worked for **Mendelian disorders** such as **Huntington disease**, and many groups then applied it to psychiatric disease genes, with **mixed success at best**. From the **late 1980s** to the **mid-1990s**, pedigree studies claimed susceptibility loci for **schizophrenia**, **bipolar disorder** and **Alzheimer disease**. The linkage results for **three Alzheimer disease loci** were **replicated fairly quickly**. The results for bipolar disorder and schizophrenia were in the end judged **false positives**."
            },
            {
              "type": "p",
              "text": "Several reasons have been offered for these failures. Most investigators now accept that the studies were **drastically underpowered** given how **etiologically complex** psychiatric disorders appear to be."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Why early psychiatric linkage failed",
              "text": "Alzheimer loci from pedigree studies replicated; the bipolar and schizophrenia loci proved **false positives**. The main accepted reason is that the studies were **badly underpowered** for disorders this complex."
            },
            {
              "type": "p",
              "text": "Pedigree work in psychiatry has moved toward a better-powered use: mapping **quantitative trait loci (QTLs)**. A QTL is a locus that contributes to variation in a **continuously varying trait**, unlike a **categorical** trait such as a diagnosis. QTLs usually have **small effects** and explain only **part of the variance** seen for a trait across a population. Using analytic tools from the **late 1990s**, it is now broadly accepted that pedigree studies **may** be able to map many quantitative traits relevant to psychiatric disorders. Such studies are under way, usually measuring **multiple phenotypes** in each family member."
            },
            {
              "type": "h",
              "text": "Affected sib-pair analysis"
            },
            {
              "type": "p",
              "text": "**Affected sib-pair (ASP) analysis** came into wide use in the **1990s** for mapping complex traits, including many psychiatric disorders. It asks how often pairs of siblings who are **concordant** for a trait both carry a given genome region, compared with how often random segregation predicts."
            },
            {
              "type": "steps",
              "title": "Logic of an affected sib-pair study",
              "items": [
                [
                  "Baseline",
                  "Siblings share about **50 percent** of their genomes **IBD** (identical by descent), which is the sharing expected by chance."
                ],
                [
                  "Genotype",
                  "**Genotype the siblings**; use **population allele frequencies** and **parental genotypes** to estimate the share of genes IBD at each site for each pair."
                ],
                [
                  "Compare",
                  "The linkage analysis compares pairs **concordant** and **discordant** at each locus."
                ],
                [
                  "Interpret",
                  "If unrelated affected pairs share a region **significantly more than 50 percent** of the time, that region is **likely linked** to the trait."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Pedigree analysis versus affected sib-pair analysis",
              "head": [
                "Feature",
                "Pedigree analysis",
                "Affected sib-pair analysis"
              ],
              "rows": [
                [
                  "Sample",
                  "**Extended multigenerational** families",
                  "Many **unrelated pairs of affected siblings**"
                ],
                [
                  "Core question",
                  "Do marker and disease locus **cosegregate**?",
                  "Do affected sibs share a region **more than 50%** IBD?"
                ],
                [
                  "Power",
                  "Better for genes of **large effect**",
                  "Also better for genes of **large effect**"
                ],
                [
                  "Effort to collect",
                  "Must find and assess **all members** of large pedigrees",
                  "Generally **less effort**, even for large sets of sibs"
                ],
                [
                  "Extras",
                  "Now turning to **QTL** mapping",
                  "Can add **epidemiologic data** to study environment and **gene-environment interactions**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Like pedigree studies, ASP studies find genes of **large effect** more easily than genes of **small effect**. Two partial fixes exist: a **two-tiered design** that adds **more markers or family members** after the first sib-pair scan, or a **larger sample**."
            },
            {
              "type": "p",
              "text": "Sib pairs are easier to gather than whole extended families, especially when **data repositories** pool samples and phenotypes from pairs recruited at **multiple sites**. In the United States, **NIMH** (the **National Institute of Mental Health**) holds such repositories, with large sets of sib pairs affected by **autism**, **Alzheimer disease**, **schizophrenia** or **bipolar disorder**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "A practical edge of sib pairs",
              "text": "Beyond easier recruitment, the ASP design lets you fold in **epidemiologic information**, so **environmental effects** and **gene-environment interactions** can be examined in the same study."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Small effects stay hard to find",
              "text": "Neither pedigree nor ASP designs escape the power problem: both favor **large-effect** genes. A null or weak result does not rule out many **small-effect** loci; it may only mean the sample was too small."
            }
          ]
        },
        {
          "id": "s337-assoc",
          "title": "Association studies, statistical considerations and genome-wide significance",
          "blocks": [
            {
              "type": "p",
              "text": "In recent years more researchers have come to accept that, for mapping, **association studies** beat **linkage** in **power** when the target is loci of **relatively small effect**, which are thought to account for most of the risk behind complex disorders."
            },
            {
              "type": "table",
              "caption": "Linkage versus association",
              "head": [
                "Feature",
                "Linkage studies",
                "Association studies"
              ],
              "rows": [
                [
                  "Question asked",
                  "Does a marker **cosegregate** with a disease locus?",
                  "Is an allele **more frequent than expected** in affected people?"
                ],
                [
                  "Where the comparison is made",
                  "**Within a family or families**",
                  "**Within a population**"
                ],
                [
                  "Strength",
                  "Suits loci of **large effect**",
                  "More powerful for loci of **small effect**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Association mapping rests on **linkage disequilibrium (LD)**. Alleles at markers lying very close to a disease gene are in LD with it. They therefore turn up in affected people **more often than random segregation predicts**, because they are inherited **IBD** along with the gene."
            },
            {
              "type": "h",
              "text": "Two designs"
            },
            {
              "type": "p",
              "text": "The two common designs (see Figure 33-29) are the **case-control** design and the **family-based** design, which usually studies **trios**: **mother, father and one affected child**."
            },
            {
              "type": "table",
              "caption": "Case-control versus family-based (trio) association designs",
              "head": [
                "Feature",
                "Case-control",
                "Family-based (trios)"
              ],
              "rows": [
                [
                  "Comparison",
                  "Allele frequencies in **unrelated affected people** versus a **matched control** group",
                  "**Transmitted** versus **nontransmitted** parental chromosomes"
                ],
                [
                  "Control group",
                  "Separate matched controls",
                  "The **nontransmitted chromosomes** (the copy a parent did not pass on)"
                ],
                [
                  "Power",
                  "Generally **more powerful**",
                  "About **two-thirds** as powerful for the same number of affected people"
                ],
                [
                  "Cost and ease",
                  "Large samples are **easier to collect**; **fewer people** to genotype, so cheaper",
                  "Must genotype **both parents** as well"
                ],
                [
                  "Late-onset traits",
                  "Possibly the **only workable** option (for example **Alzheimer disease**)",
                  "Hard, because **parents are usually unavailable**"
                ],
                [
                  "Main weakness or strength",
                  "Risk of **population stratification**",
                  "**Removes** stratification, since controls are genetically matched by definition"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Key terms",
              "items": [
                [
                  "Population stratification",
                  "When cases and controls are **poorly matched on demographics**, allele frequencies can differ because the **populations differ**, not because of the disease."
                ],
                [
                  "Trio",
                  "**Mother, father and an affected offspring**, the usual unit of a family-based study."
                ],
                [
                  "Nontransmitted chromosome",
                  "The copy of each chromosome a parent **did not pass** to the child; it serves as the **control** in a family-based study."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Spurious association",
              "text": "In a case-control study, poor demographic matching can create allele frequency gaps that reflect **ancestry differences**, not disease. That is **population stratification**, the design's main drawback."
            },
            {
              "type": "h",
              "text": "From candidate genes to genome-wide scans"
            },
            {
              "type": "p",
              "text": "Until recently, few **SNPs** were known, so genome-wide association was not practical. Studies examined **a single marker or a handful** within **candidate genes** picked for their **hypothesized function** in a disease. International projects then found **millions of SNPs** spread fairly evenly through the genome and built **cheap genotyping** tools, making **genome-wide association (GWA)** studies possible. They promise to find **common variants** behind **common diseases**."
            },
            {
              "type": "p",
              "text": "At the time of writing, **few GWA studies of psychiatric disorders** were finished. GWA studies had already given striking results for **type 2 diabetes**, **rheumatoid arthritis** and **inflammatory bowel disease**, using very large samples (some reaching **several thousand** cases plus a similar number of controls). This success further supports the idea that **underpowered designs** explain much of the disappointing record of psychiatric genetics so far."
            },
            {
              "type": "h",
              "text": "Statistical considerations"
            },
            {
              "type": "p",
              "text": "Researchers in other fields are often surprised at how much statistical evidence geneticists demand before calling a linkage or association result significant. The reason is the **very low prior expectation** that any two loci are linked or associated."
            },
            {
              "type": "steps",
              "title": "Why the LOD threshold is 3",
              "items": [
                [
                  "Prior probability",
                  "Given the **genetic length** of the genome, the chance that two given loci are linked is about **1:50**."
                ],
                [
                  "Target posterior",
                  "Geneticists want an overall (**posterior**) probability of linkage of about **1:20**, matching the usual significance level of **p = 0.05**."
                ],
                [
                  "Required odds",
                  "Getting there needs **conditional odds of 1,000:1** in favor of linkage."
                ],
                [
                  "Threshold",
                  "Odds of 1,000:1 equal a **LOD score of 3**, the traditional threshold."
                ],
                [
                  "Result",
                  "This usually yields an **acceptable false-positive rate** (Figure 33-30), though **some false positives have passed even this bar**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Numbers to know",
              "text": "LOD **3** = **1,000:1** odds of linkage. Prior odds of linkage about **1:50**; target posterior about **1:20** (p = **0.05**). The chapter gives **genome-wide significance** for association as p below about 10^-7; the threshold used today is **5 × 10^-8** (see the update)."
            },
            {
              "type": "p",
              "text": "Geneticists expect association between any two loci to be **even less likely** than linkage. So a p value below about **10^-7** is usually taken as **genome-wide significance**. This bar in effect **ignores the extra prior probability** some investigators give to candidate genes chosen for their presumed function."
            },
            {
              "type": "p",
              "text": "GWA studies now **replicate** associations at **extremely small p values** across many complex traits, while most **candidate gene** associations, which usually claim significance at **much higher p values**, are still **unreplicated**. It is therefore increasingly clear that **genome-wide significance** should apply to **all initial association studies** of a trait."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Reading a candidate gene paper",
              "text": "A candidate gene result reported at a modest p value has not met **genome-wide significance**. Treat it as unconfirmed until it **replicates**, since most such associations have not."
            },
            {
              "type": "p",
              "text": "**Figure 33-30** (courtesy of **Dr. Eric Lander**) plots how many **false positives** a whole genome scan should be expected to give at each **LOD score threshold**. A **solid line** gives the expected count with an **ideal (perfect) genetic map**. **Symbols** show results for **100 sib pairs** with markers spaced every **0.1 cM (circles)**, **1 cM (squares)** and **10 cM (triangles)**. A **dotted line** marks a genome-wide significance level of **5 percent**."
            },
            {
              "type": "update",
              "year": 2008,
              "title": "The genome-wide significance threshold used today",
              "text": "The chapter puts genome-wide significance at a p value below about **10 to the minus 7**. For genome-wide association studies of common variants, the threshold in general use is **p < 5 × 10 to the minus 8**. It was first proposed by **Risch and Merikangas (1996)** after many false-positive candidate-gene reports, and near-identical values were then estimated by the International HapMap Consortium (2005), Dudbridge and Gusnanto (2008) and Pe'er and colleagues (2008); it equals a Bonferroni correction for about **1 million** independent common variants. A looser **5 × 10 to the minus 7**, first suggested by the Wellcome Trust Case Control Consortium (2007), finds more true signals in very large studies at the cost of more false positives. Some authors argue for **population-specific** thresholds because linkage disequilibrium differs by ancestry; studies of rare variants use stricter cut-offs.",
              "source": "Chen Z, Boehnke M, Wen X, Mukherjee B, Revisiting the genome-wide significance threshold for common variant GWAS, G3 2021 (PMC); Dudbridge F, Gusnanto A, Estimation of significance thresholds for genomewide association scans, Genet Epidemiol 2008 (PMC)"
            }
          ]
        }
      ]
    },
    {
      "title": "Defining phenotypes",
      "sections": [
        {
          "id": "s337-pheno",
          "title": "Defining phenotypes for mapping studies; categorical phenotypes",
          "blocks": [
            {
              "type": "p",
              "text": "Gene mapping in psychiatry has mostly **disappointed** so far. One response has been to look harder at the **phenotype**: what exactly counts as being ill, and how it is measured. Most mapping studies have used **categorical diagnoses**, such as those of the **DSM-5**."
            },
            {
              "type": "list",
              "title": "Two criticisms of diagnosis-based phenotypes",
              "items": [
                "Diagnosis rests on **subjective clinical evaluation**, so it is hard to decide who is truly affected.",
                "Even a clear diagnosis comes from a **menu-based** system. Two people with the same disorder may share **few symptoms**, which likely points to **different causes (etiologies)**."
              ]
            },
            {
              "type": "p",
              "text": "Worry that diagnosis-based phenotyping is a **major obstacle** to mapping has raised interest in heritable traits that vary **continuously** across the population. Candidate continuous measures include **biochemical** levels (neurotransmitter metabolites or hormones in **serum or CSF**), **cognitive** tests, **personality** ratings, **brain imaging** of structure or function, **biophysical** markers (for example **evoked potential** responses), and **molecular** tests (for example **gene expression profiles**)."
            },
            {
              "type": "table",
              "caption": "Categorical versus continuous phenotypes (see Figure 33-31)",
              "head": [
                "Feature",
                "Categorical traits (Figure 33-31A)",
                "Continuous traits (Figure 33-31B)"
              ],
              "rows": [
                [
                  "Basic idea",
                  "**Menu-based** DSM checklist of signs and symptoms",
                  "Being affected means showing **extreme values** on measures linked to illness"
                ],
                [
                  "How a person is classed",
                  "Checklist sorts the person as **affected** with a given diagnosis",
                  "Scores on **continuous measures** thought to underlie the disorder"
                ],
                [
                  "Symptom picture",
                  "Not every symptom appears in every patient; symptoms **cross diagnostic boundaries** (Venn diagram)",
                  "Measures may track **particular components** of a categorical diagnosis"
                ],
                [
                  "Causes",
                  "Probably **etiologically heterogeneous**",
                  "Thought to be **etiologically simpler**"
                ],
                [
                  "Reliability",
                  "Depends on subjective judgment",
                  "Thought to be **more reliably assessed**"
                ],
                [
                  "Who adds information",
                  "Mainly the affected",
                  "**All** members, affected and unaffected, which **adds power**"
                ],
                [
                  "Figure example",
                  "Venn diagram of overlapping symptoms",
                  "Hexagon of **six types** of measures"
                ]
              ],
              "note": "The figure is adapted from the 9th edition of the Comprehensive Textbook of Psychiatry (2009)."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Why continuous traits help mapping",
              "text": "Continuous traits are thought to be **simpler in cause** and **more reliably measured**, and they use data from **affected and unaffected** people alike, which **raises power**. The figure caption suggests DSM categories may be **etiologically heterogeneous**, which may help explain slow mapping progress."
            },
            {
              "type": "h",
              "text": "Categorical phenotypes"
            },
            {
              "type": "p",
              "text": "The categorical phenotypes used most are **DSM diagnoses**. A study may target **one diagnosis** or take in **several diagnoses**. The broader option is usual for disorders thought to form **one disease spectrum**, for instance the **mood disorders**. The goal of the categorical approach is to class subjects **as unambiguously as possible**."
            },
            {
              "type": "defs",
              "title": "Ways to make diagnosis more reliable",
              "items": [
                [
                  "Choosing criteria",
                  "Decide which **diagnostic criteria** fit the study and **how they will be applied** to each subject."
                ],
                [
                  "Trained clinicians",
                  "Use only **experienced clinicians**, trained in the **instruments** and the **criteria** the study uses."
                ],
                [
                  "Best estimate",
                  "Combine **every available source** (medical records, interviews, videotapes) to reach a diagnosis."
                ],
                [
                  "Consensus diagnosis",
                  "**Two or more** diagnosticians judge each subject **independently**; anyone they **cannot agree** on is **not entered as affected**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "A good design uses what is known of the disorder's **genetic epidemiology** to pick the sample. Some families pass the disorder in what looks like a **simple Mendelian** way, while others do not. When **many genes** probably contribute, it is sensible to start with a sample likely to carry **loci of large effect**. Redefining the phenotype can find such families. In **Alzheimer disease**, limiting the sample to **early onset (before age 65)** helped greatly, because the early-onset form passed in an **autosomal dominant** pattern."
            },
            {
              "type": "list",
              "title": "Other ways to redefine (narrow) the phenotype",
              "items": [
                "**Age of onset**",
                "**Ethnic background**",
                "**Severity of symptoms**",
                "**Response to treatment**",
                "**Comorbid disorders**"
              ]
            },
            {
              "type": "table",
              "caption": "Narrowing versus broadening the phenotype",
              "head": [
                "Strategy",
                "What it does",
                "Gain",
                "Cost or debate"
              ],
              "wide": true,
              "rows": [
                [
                  "Narrowing",
                  "Restricts the sample (for example **early-onset** Alzheimer disease)",
                  "May raise the chance of **finding a gene** in a complex disease",
                  "Fewer affected subjects, so **less power**"
                ],
                [
                  "Broadening",
                  "Includes other phenotypes on the **same spectrum** (for example **major depressive disorder** in a **bipolar** study)",
                  "Enough subjects for **adequate power**",
                  "Argued for **some** disorders only"
                ],
                [
                  "Stratified categories",
                  "Tests linkage under a series of schemas from **narrow to broad**",
                  "Some say it **lowers false negatives** (missed linkage from misspecification)",
                  "Others say choosing the best-scoring model **sharply raises false positives**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "More models, stricter thresholds",
              "text": "Each extra diagnostic model is **another statistical test**. As tests pile up, the evidence needed to call a result **significant** must become **more stringent**. Picking the model with the highest score inflates **false positives**."
            },
            {
              "type": "p",
              "text": "Categorical phenotypes are still the **mainstay**, but the limits of **DSM nosology** for genetics are clearer. Studies now look more at traits that may be **parts of one or more** DSM categories. Growing evidence suggests that a broad **susceptibility to psychosis** plays a part in **schizophrenia** as well as **severe bipolar disorder**. Researchers are also probing links between psychiatric and **nonpsychiatric** disorders. **Bioinformatics** models applied to **medical records databases** found many **pairwise correlations** among psychiatric, **neurologic**, **autoimmune** and **infectious** diseases. Such model fitting may one day guide more powerful linkage and association studies for alleles shared across **multiple disorders**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Narrow and broad can coexist",
              "text": "The two strategies look opposed, yet many groups use **both** by building **stratified** categories and testing linkage at each level. Keep in mind that the field is **divided** on whether this mainly prevents misses or mainly creates false hits."
            }
          ]
        },
        {
          "id": "s337-endo",
          "title": "Continuous phenotypes and endophenotypes; animal models",
          "blocks": [
            {
              "type": "p",
              "text": "Because categorical diagnoses have been hard to map, **neurobehavioral geneticists** increasingly study **quantitative traits** thought to underlie a diagnosis and that may be **easier to map**. These alternative phenotypes are called **endophenotypes**. The hope is that genes found this way will point to the **biologic pathways** behind a disorder."
            },
            {
              "type": "table",
              "caption": "Three features of a useful endophenotype",
              "head": [
                "Feature",
                "Meaning",
                "How it is shown"
              ],
              "rows": [
                [
                  "**State-independent**",
                  "Does **not** shift with the **course of illness** or with **medication**",
                  "Adequate **test-retest stability**"
                ],
                [
                  "**Heritable**",
                  "**Genetic factors** explain a large share of trait variation in the population",
                  "Evidence of genetic contribution to variability"
                ],
                [
                  "**Correlated with the disease**",
                  "Trait values **differ** between patients and **unrelated controls**",
                  "Case versus control comparison"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Endophenotype checklist",
              "text": "A useful endophenotype is **state-independent** (stable over illness and treatment, with good **test-retest stability**), **heritable**, and **associated with the disorder** (patients differ from **unrelated controls**)."
            },
            {
              "type": "h",
              "text": "Which traits are used"
            },
            {
              "type": "p",
              "text": "Most traits now studied as endophenotypes are measures of **brain structure and function**. Several **MRI morphometry** features are **highly heritable**, with heritability the chapter reports as **60 to 95 percent**."
            },
            {
              "type": "list",
              "title": "Heritable MRI morphometry features",
              "items": [
                "Volume of the **whole brain**",
                "Volume of the **cerebellum**",
                "**Density** of gray and of white matter",
                "Volume of the **hippocampus** and of the **amygdala**",
                "Volume of **cortical regions**"
              ]
            },
            {
              "type": "p",
              "text": "A number of studies find that structural brain features tied to disorders like **schizophrenia** or **bipolar disorder** in patient samples are also **abnormal in their relatives**. Physiologic measures of brain activity tried as candidate endophenotypes include **EEG patterns**. Several **\"pencil and paper\"** tests have been used for endophenotypes of **neurocognitive function** and **temperament**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Relatives as a clue",
              "text": "When a brain feature is abnormal not only in patients but also in their **unaffected relatives**, it behaves like a **heritable trait** rather than a result of illness or treatment, which is what makes it attractive as an endophenotype."
            },
            {
              "type": "h",
              "text": "Animal models"
            },
            {
              "type": "p",
              "text": "Unlike categorical diagnoses, endophenotypes link more **directly** to traits that can be measured in **animals**. **Circadian rhythms** are a good example. Mood disorders have long been known to feature **prominent circadian disturbance**. Researchers have put forward **quantitative measures of activity** as possible endophenotypes for these conditions."
            },
            {
              "type": "steps",
              "title": "Circadian clock genes, from flies to mice",
              "items": [
                [
                  "Basic principle",
                  "Animal work shows that **genetically controlled biologic clocks** set circadian activity, and that clock gene variation tracks activity variation **from bacteria to humans**."
                ],
                [
                  "Fruit flies, early 1970s on",
                  "Mapping found **at least seven clock genes**, the first being ***period***."
                ],
                [
                  "Mammals",
                  "**Homologs** of several fly clock genes proved **essential** for mammalian circadian rhythms."
                ],
                [
                  "Mice, early 1990s",
                  "Mouse mapping found new circadian genes, starting with ***Clock***."
                ],
                [
                  "Payoff",
                  "These findings clarified the **cellular networks** and **neurophysiologic circuits** of mammalian rhythms and produced **animal models** that may inform disorders such as **bipolar disorder**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Mice with a **targeted mutation in Clock** show abnormal activity, including **hyperactivity** and **decreased sleep**, and this pattern is **modified by lithium**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Keep the certainty level",
              "text": "Clock-mutant mice are models that **may** shed light on bipolar disorder; they do not show that clock genes cause it. Likewise, endophenotypes are **hypothesized** to underlie disorders and **may** be simpler to map. Do not upgrade these claims."
            }
          ]
        }
      ]
    }
  ]
});
