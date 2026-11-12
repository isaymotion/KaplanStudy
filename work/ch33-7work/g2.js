({
  title: "Mapping strategies",
  sections: [
    { id: "s337-ped", title: "Mapping strategies: pedigree analysis and affected sib-pair analysis", blocks: [
      { type: "p", text: "Risk variants for a disease fall roughly into two groups by **penetrance**. The group a variant belongs to decides which mapping strategy suits it best." },
      { type: "table", caption: "High- versus low-penetrance variants and how each is mapped (see Figure 33-29)", head: ["Feature", "High-penetrance variants", "Low-penetrance variants"], rows: [
        ["Effect on phenotype", "**Large**", "Relatively **weak**"],
        ["Chance a carrier shows the disease", "**High**", "Low"],
        ["How common", "Tend to be **rare**", "Typically **frequent**"],
        ["Behavior in families", "**Segregate** within families", "Not expected to segregate strongly in pedigrees"],
        ["Best mapping approach", "**Pedigree-based** methods", "**Population samples**"],
        ["What finding one offers", "Usually **basic insight into pathobiology**", "Little new biology at first, but adds to knowledge of **disease risk**"]
      ] },
      { type: "h", text: "Pedigree analysis" },
      { type: "p", text: "Pedigree analysis is done in **multigenerational families**. Its main aim is to learn whether two or more loci, a **marker of known position** and an **unknown disease locus**, are **cosegregating** inside a pedigree." },
      { type: "steps", title: "How a pedigree analysis is run", items: [
        ["Collect families", "Gather **one or more affected pedigrees** spanning several generations."],
        ["Scan with markers", "Type a **series of markers** across the whole genome or part of it."],
        ["Score each position", "Compute a **LOD score** at every marker position."],
        ["Find deviant regions", "Pick out chromosomal regions whose results differ **significantly** from what **independent assortment** would predict."]
      ] },
      { type: "p", text: "The method worked for **Mendelian disorders** such as **Huntington disease**, and many groups then applied it to psychiatric disease genes, with **mixed success at best**. From the **late 1980s** to the **mid-1990s**, pedigree studies claimed susceptibility loci for **schizophrenia**, **bipolar disorder** and **Alzheimer disease**. The linkage results for **three Alzheimer disease loci** were **replicated fairly quickly**. The results for bipolar disorder and schizophrenia were in the end judged **false positives**." },
      { type: "p", text: "Several reasons have been offered for these failures. Most investigators now accept that the studies were **drastically underpowered** given how **etiologically complex** psychiatric disorders appear to be." },
      { type: "callout", kind: "exam", title: "Why early psychiatric linkage failed", text: "Alzheimer loci from pedigree studies replicated; the bipolar and schizophrenia loci proved **false positives**. The main accepted reason is that the studies were **badly underpowered** for disorders this complex." },
      { type: "p", text: "Pedigree work in psychiatry has moved toward a better-powered use: mapping **quantitative trait loci (QTLs)**. A QTL is a locus that contributes to variation in a **continuously varying trait**, unlike a **categorical** trait such as a diagnosis. QTLs usually have **small effects** and explain only **part of the variance** seen for a trait across a population. Using analytic tools from the **late 1990s**, it is now broadly accepted that pedigree studies **may** be able to map many quantitative traits relevant to psychiatric disorders. Such studies are under way, usually measuring **multiple phenotypes** in each family member." },
      { type: "h", text: "Affected sib-pair analysis" },
      { type: "p", text: "**Affected sib-pair (ASP) analysis** came into wide use in the **1990s** for mapping complex traits, including many psychiatric disorders. It asks how often pairs of siblings who are **concordant** for a trait both carry a given genome region, compared with how often random segregation predicts." },
      { type: "steps", title: "Logic of an affected sib-pair study", items: [
        ["Baseline", "Siblings share about **50 percent** of their genomes **IBD** (identical by descent), which is the sharing expected by chance."],
        ["Genotype", "**Genotype the siblings**; use **population allele frequencies** and **parental genotypes** to estimate the share of genes IBD at each site for each pair."],
        ["Compare", "The linkage analysis compares pairs **concordant** and **discordant** at each locus."],
        ["Interpret", "If unrelated affected pairs share a region **significantly more than 50 percent** of the time, that region is **likely linked** to the trait."]
      ] },
      { type: "table", caption: "Pedigree analysis versus affected sib-pair analysis", head: ["Feature", "Pedigree analysis", "Affected sib-pair analysis"], rows: [
        ["Sample", "**Extended multigenerational** families", "Many **unrelated pairs of affected siblings**"],
        ["Core question", "Do marker and disease locus **cosegregate**?", "Do affected sibs share a region **more than 50%** IBD?"],
        ["Power", "Better for genes of **large effect**", "Also better for genes of **large effect**"],
        ["Effort to collect", "Must find and assess **all members** of large pedigrees", "Generally **less effort**, even for large sets of sibs"],
        ["Extras", "Now turning to **QTL** mapping", "Can add **epidemiologic data** to study environment and **gene-environment interactions**"]
      ] },
      { type: "p", text: "Like pedigree studies, ASP studies find genes of **large effect** more easily than genes of **small effect**. Two partial fixes exist: a **two-tiered design** that adds **more markers or family members** after the first sib-pair scan, or a **larger sample**." },
      { type: "p", text: "Sib pairs are easier to gather than whole extended families, especially when **data repositories** pool samples and phenotypes from pairs recruited at **multiple sites**. In the United States, **NIMH** (the **National Institute of Mental Health**) holds such repositories, with large sets of sib pairs affected by **autism**, **Alzheimer disease**, **schizophrenia** or **bipolar disorder**." },
      { type: "callout", kind: "pearl", title: "A practical edge of sib pairs", text: "Beyond easier recruitment, the ASP design lets you fold in **epidemiologic information**, so **environmental effects** and **gene-environment interactions** can be examined in the same study." },
      { type: "callout", kind: "caution", title: "Small effects stay hard to find", text: "Neither pedigree nor ASP designs escape the power problem: both favor **large-effect** genes. A null or weak result does not rule out many **small-effect** loci; it may only mean the sample was too small." }
    ] },
    { id: "s337-assoc", title: "Association studies, statistical considerations and genome-wide significance", blocks: [
      { type: "p", text: "In recent years more researchers have come to accept that, for mapping, **association studies** beat **linkage** in **power** when the target is loci of **relatively small effect**, which are thought to account for most of the risk behind complex disorders." },
      { type: "table", caption: "Linkage versus association", head: ["Feature", "Linkage studies", "Association studies"], rows: [
        ["Question asked", "Does a marker **cosegregate** with a disease locus?", "Is an allele **more frequent than expected** in affected people?"],
        ["Where the comparison is made", "**Within a family or families**", "**Within a population**"],
        ["Strength", "Suits loci of **large effect**", "More powerful for loci of **small effect**"]
      ] },
      { type: "p", text: "Association mapping rests on **linkage disequilibrium (LD)**. Alleles at markers lying very close to a disease gene are in LD with it. They therefore turn up in affected people **more often than random segregation predicts**, because they are inherited **IBD** along with the gene." },
      { type: "h", text: "Two designs" },
      { type: "p", text: "The two common designs (see Figure 33-29) are the **case-control** design and the **family-based** design, which usually studies **trios**: **mother, father and one affected child**." },
      { type: "table", caption: "Case-control versus family-based (trio) association designs", head: ["Feature", "Case-control", "Family-based (trios)"], rows: [
        ["Comparison", "Allele frequencies in **unrelated affected people** versus a **matched control** group", "**Transmitted** versus **nontransmitted** parental chromosomes"],
        ["Control group", "Separate matched controls", "The **nontransmitted chromosomes** (the copy a parent did not pass on)"],
        ["Power", "Generally **more powerful**", "About **two-thirds** as powerful for the same number of affected people"],
        ["Cost and ease", "Large samples are **easier to collect**; **fewer people** to genotype, so cheaper", "Must genotype **both parents** as well"],
        ["Late-onset traits", "Possibly the **only workable** option (for example **Alzheimer disease**)", "Hard, because **parents are usually unavailable**"],
        ["Main weakness or strength", "Risk of **population stratification**", "**Removes** stratification, since controls are genetically matched by definition"]
      ] },
      { type: "defs", title: "Key terms", items: [
        ["Population stratification", "When cases and controls are **poorly matched on demographics**, allele frequencies can differ because the **populations differ**, not because of the disease."],
        ["Trio", "**Mother, father and an affected offspring**, the usual unit of a family-based study."],
        ["Nontransmitted chromosome", "The copy of each chromosome a parent **did not pass** to the child; it serves as the **control** in a family-based study."]
      ] },
      { type: "callout", kind: "caution", title: "Spurious association", text: "In a case-control study, poor demographic matching can create allele frequency gaps that reflect **ancestry differences**, not disease. That is **population stratification**, the design's main drawback." },
      { type: "h", text: "From candidate genes to genome-wide scans" },
      { type: "p", text: "Until recently, few **SNPs** were known, so genome-wide association was not practical. Studies examined **a single marker or a handful** within **candidate genes** picked for their **hypothesized function** in a disease. International projects then found **millions of SNPs** spread fairly evenly through the genome and built **cheap genotyping** tools, making **genome-wide association (GWA)** studies possible. They promise to find **common variants** behind **common diseases**." },
      { type: "p", text: "At the time of writing, **few GWA studies of psychiatric disorders** were finished. GWA studies had already given striking results for **type 2 diabetes**, **rheumatoid arthritis** and **inflammatory bowel disease**, using very large samples (some reaching **several thousand** cases plus a similar number of controls). This success further supports the idea that **underpowered designs** explain much of the disappointing record of psychiatric genetics so far." },
      { type: "h", text: "Statistical considerations" },
      { type: "p", text: "Researchers in other fields are often surprised at how much statistical evidence geneticists demand before calling a linkage or association result significant. The reason is the **very low prior expectation** that any two loci are linked or associated." },
      { type: "steps", title: "Why the LOD threshold is 3", items: [
        ["Prior probability", "Given the **genetic length** of the genome, the chance that two given loci are linked is about **1:50**."],
        ["Target posterior", "Geneticists want an overall (**posterior**) probability of linkage of about **1:20**, matching the usual significance level of **p = 0.05**."],
        ["Required odds", "Getting there needs **conditional odds of 1,000:1** in favor of linkage."],
        ["Threshold", "Odds of 1,000:1 equal a **LOD score of 3**, the traditional threshold."],
        ["Result", "This usually yields an **acceptable false-positive rate** (Figure 33-30), though **some false positives have passed even this bar**."]
      ] },
      { type: "callout", kind: "exam", title: "Numbers to know", text: "LOD **3** = **1,000:1** odds of linkage. Prior odds of linkage about **1:50**; target posterior about **1:20** (p = **0.05**). The chapter gives **genome-wide significance** for association as p below about 10^-7; the threshold used today is **5 × 10^-8** (see the update)." },
      { type: "p", text: "Geneticists expect association between any two loci to be **even less likely** than linkage. So a p value below about **10^-7** is usually taken as **genome-wide significance**. This bar in effect **ignores the extra prior probability** some investigators give to candidate genes chosen for their presumed function." },
      { type: "p", text: "GWA studies now **replicate** associations at **extremely small p values** across many complex traits, while most **candidate gene** associations, which usually claim significance at **much higher p values**, are still **unreplicated**. It is therefore increasingly clear that **genome-wide significance** should apply to **all initial association studies** of a trait." },
      { type: "callout", kind: "pearl", title: "Reading a candidate gene paper", text: "A candidate gene result reported at a modest p value has not met **genome-wide significance**. Treat it as unconfirmed until it **replicates**, since most such associations have not." },
      { type: "p", text: "**Figure 33-30** (courtesy of **Dr. Eric Lander**) plots how many **false positives** a whole genome scan should be expected to give at each **LOD score threshold**. A **solid line** gives the expected count with an **ideal (perfect) genetic map**. **Symbols** show results for **100 sib pairs** with markers spaced every **0.1 cM (circles)**, **1 cM (squares)** and **10 cM (triangles)**. A **dotted line** marks a genome-wide significance level of **5 percent**." }
    ] }
  ]
})
