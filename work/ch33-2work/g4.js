({
  title: "Specification, growth factors and migration",
  sections: [
    {
      id: "s332-spec",
      title: "Neuronal specification and miRNAs",
      blocks: [
        { type: "p", text: "Once a cell sits in the right region, it still has to decide what it will become. **Transcription factors** make these choices at more than one level. They first settle the broad class (a **neuron** or a **glial cell**) and then the exact **neuron subtype**. The same logic seen in the basal ganglia applies across the whole nervous system." },
        { type: "defs", title: "Transcription factors in cell fate", items: [
          ["Mash1", "Tips a precursor toward a **neuronal** rather than a glial fate; can also induce the **GABA interneuron** phenotype."],
          ["Olig1/2", "A **bHLH** factor that drives **oligodendrocyte** development in one place but **motor neuron** differentiation in another."],
          ["Id", "An **inhibitory bHLH** factor found where **somatosensory** cortex meets **motor** cortex, which hints that this family helps set **areal** identity."],
          ["NeuroD and Math1", "Needed for **granule neuron** fate in the **hippocampus**; deleting **either** one leaves too few granule cells."],
          ["Tbr1, Otx1 and Pax6", "Likely contributors to which **cortical layer** a neuron joins; this is still under **active investigation**."]
        ] },
        { type: "callout", kind: "exam", title: "Same factor, different outcome", text: "Olig1/2 produces **oligodendrocytes** in one region and **motor neurons** in another. The lesson is that fate depends on the **combination** of factors a cell expresses, not on one factor alone." },
        { type: "h", text: "miRNAs: a newer layer of gene control" },
        { type: "p", text: "In roughly the past **decade**, researchers have studied a way of controlling mRNA that uses **microRNAs (miRNAs)**. It has been found in organisms from simple to complex. miRNAs matter for **normal development** and **brain function**. They are also tied to disease: **Parkinson disease**, **Alzheimer disease**, **tauopathies** and **brain cancer**." },
        { type: "list", title: "Key features of miRNAs", items: [
          "Length: **21 to 23 nucleotides**, **single-stranded** RNA.",
          "They are **noncoding**: never translated into protein. Instead they are processed into **loop** structures.",
          "Each has a sequence **partly complementary** to one or several cellular mRNAs.",
          "Binding a target mRNA blocks its function and so **downregulates** that gene product.",
          "They can act at several stages: **transcription**, **splicing** (alternative), **molecular modification** of RNA, or **translation**."
        ] },
        { type: "steps", title: "From gene to silenced target (Figure 33-11)", items: [
          ["Transcription", "The **primary miRNA** is made and folds into a **hairpin**."],
          ["Nuclear cut", "The **Microprocessor** complex, made of **Drosha** (a nuclease) and **Pasha** (a protein that binds double-stranded RNA), trims it to a **pre-miRNA**."],
          ["Export", "The pre-miRNA leaves the nucleus through **nuclear pores**."],
          ["Cytoplasmic cut", "**Dicer** cleaves the stem loop, giving **two complementary** short RNAs."],
          ["Loading", "Only **one** strand enters **RISC** (the **RNA-induced silencing complex**), where it acts as the **guide strand**, giving target specificity."],
          ["Silencing", "The guide pairs with its target mRNA; the duplex is degraded by **argonaute**, which the figure caption calls the **catalytic enzyme** of RISC."]
        ] },
        { type: "callout", kind: "caution", title: "Who does the cutting?", text: "The main text describes **Dicer** as part of RISC and links it to target cleavage, while the Figure 33-11 caption names **argonaute** as the catalytic enzyme of RISC that degrades the mRNA duplex. Know both statements as given and do not mix up Drosha (nucleus) with Dicer (cytoplasm)." },
        { type: "table", caption: "miRNA numbers and disease links reported in the chapter", head: ["Item", "What the chapter reports"], rows: [
          ["Human miRNAs identified", "**475**"],
          ["Estimated total", "Between **600 and 3,441**"],
          ["Share of genes possibly regulated", "Up to **30%**"],
          ["miR-133b", "Found in **midbrain dopaminergic** neurons; **deficient** in midbrain tissue from people with **Parkinson disease**"],
          ["miR-9, miR-124a and miR-125b; also miR-132, miR-128 and miR-219", "Plentiful in **fetal hippocampus**; regulated differently in the **aged** brain; **altered** in the hippocampus in **Alzheimer disease**"]
        ] },
        { type: "p", text: "**Short-interfering RNAs (siRNAs)** are close relatives of miRNAs. They were found in **plants**, where they stop **viral RNA** from being transcribed, and they work by closely related mechanisms. Because they can knock down a chosen gene product, siRNAs are now used in **basic and clinical research**. They help map **neurodevelopmental pathways** and offer selective tools against **disease-causing genes** or **therapeutic targets**." },
        { type: "callout", kind: "pearl", title: "Why this matters at the bedside", text: "miRNAs add a whole extra layer of control: up to **30 percent** of genes may be under their influence. A single miRNA lost from one cell type, as with **miR-133b** in dopamine neurons in Parkinson disease, shows how small RNAs can be linked to a specific brain disorder." }
      ]
    },
    {
      id: "s332-factors",
      title: "Extracellular factors that regulate neurodevelopment",
      blocks: [
        { type: "p", text: "Region-specific neurogenesis depends on **intrinsic genetic programs** working together with **extracellular factors**. These outside signals regulate four processes: cell **survival**, **proliferation**, **migration** and **differentiation** (Table 33-1). **Patterning genes** set which **growth factor receptors** a cell makes and control parts of its **cell division cycle** machinery." },
        { type: "defs", title: "Where the signals come from", items: [
          ["Autocrine", "The signal comes from the **cell itself**."],
          ["Paracrine", "The signal comes from **neighboring cells or tissues**."],
          ["Endocrine", "The signal arrives through the **general circulation**."]
        ] },
        { type: "p", text: "All three sources affect proliferation in the developing brain, both **before and after birth**. Several growth factors first studied in **cell culture** are now well described in living animals." },
        { type: "table", caption: "Factors that push proliferation up or down", head: ["Stimulate division", "Inhibit division"], rows: [
          ["**Basic FGF (bFGF)**", "**PACAP** (pituitary adenylate-cyclase-activating polypeptide)"],
          ["**EGF**", "**GABA** and **glutamate**"],
          ["**IGF-I**", "Members of the **TGF-beta superfamily**"],
          ["**Shh**", ""]
        ], note: "Other signals the chapter lists as likely proliferative: Wnts, TGF-alpha, IGF-I and BMPs." },
        { type: "table", caption: "Two ways a signal raises cell numbers", head: ["Action", "What it does", "Cancer parallel"], rows: [
          ["**Mitogenic**", "Drives cells to **re-enter the cell cycle**", "**c-myc**"],
          ["**Trophic**", "Keeps the dividing population **alive**", "**bcl-2**"]
        ], note: "Both actions are needed to reach the largest cell numbers. Among the neurotrophins, BDNF and NT3 support survival of dividing precursors and their new daughter cells." },
        { type: "table", wide: true, caption: "Extracellular factors and their effects on development (see Table 33-1)", head: ["Factor", "Proliferation", "Migration", "Differentiation", "Survival"], rows: [
          ["bFGF", "**Up**: cortex, cerebellum, hippocampus", "None listed", "**Up**: nigrostriatum, cortex", "**Up**: nigrostriatum, cerebellum, cortex"],
          ["IGF-1", "**Up**: cortex, cerebellum", "None listed", "**Up**: spinal neurons, cerebellum", "**Up**: cortex, cerebellum"],
          ["EGF", "**Up**: cortex, adult SVZ", "None listed", "**Up**: cortex", "None listed"],
          ["TGF-beta", "**Down**: cortex, cerebellum", "None listed", "None listed", "**Down**: cortex, cerebellum"],
          ["Shh", "**Up**: cortex, cerebellum", "**Up**: cerebellum", "None listed", "None listed"],
          ["PACAP", "**Down**: cortex, cerebellum", "**Down**: cerebellum", "**Up**: cerebellum", "**Up**: cerebellum"],
          ["GABA", "**Down**: cortex", "**Up**: cortex", "None listed", "None listed"],
          ["Glutamate", "**Down**: cortex", "**Up**: cortex, cerebellum", "**Down** in pyramidal cells; **up** in granule cells", "**Up** in immature neurons; **down** in mature neurons"],
          ["TNF-alpha", "**Down**: neurons", "None listed", "None listed", "**Down**: neurons"],
          ["BDNF", "None listed", "**Up**: cerebellum", "**Up**: cortex, adult SVZ", "**Up**: cortex, cerebellum"],
          ["Wnt", "**Up**: embryonic stem cells, hippocampus", "None listed", "**Up**: axon guidance, spinal cord", "None listed"],
          ["NT3", "**Down**: cortical stem cells", "**Up**: cortex", "**Up**: cortex", "**Up**: cortex"],
          ["LIF/CNTF/gp130", "**Up**: cortex, embryonic stem cells", "None listed", "**Up**: astrocytes", "None listed"]
        ], note: "Up = increases; Down = decreases; None listed = a dash in the original table." },
        { type: "callout", kind: "exam", title: "Glutamate has opposite effects by cell type and age", text: "In Table 33-1, glutamate **lowers** differentiation of **pyramidal** neurons but **raises** it in **granule** neurons, and it **supports immature** neurons while **reducing survival of mature** ones." },
        { type: "h", text: "Evidence from animal experiments" },
        { type: "p", text: "Two lines of evidence show these mitogens matter. The factors and their receptors are **expressed where neurons are being made**. Changing their activity during development also has **profound and lasting** effects. Giving growth factors to embryos or pups alters proliferation in the prenatal **cortical VZ**, the postnatal **cerebellar EGL** and the **hippocampal dentate gyrus**, changing region size and cell mix for **life**. The chapter suggests such changes **may** relate to structural differences seen in **depression**, **schizophrenia** and **autism**." },
        { type: "table", caption: "Growth factor experiments in rats, as reported in the chapter", head: ["Experiment", "Result"], rows: [
          ["**ICV bFGF** in the embryo (cortical VZ)", "Larger adult cortex with **87%** more neurons, all **glutamatergic**; excitatory pyramidal to GABA inhibitory ratio **rose** because GABA cells were **unchanged**"],
          ["Embryonic **PACAP** injection", "Cortical precursor proliferation **down 26%**; **5 days** later, the cortical plate held fewer labeled **layer 5/6** neurons"],
          ["Gene deletion of **bFGF** or **LIF/CNTF/gp130** signaling", "Similar drop in proliferation; **smaller cortex**"],
          ["bFGF given **later**, when **gliogenesis** dominates", "Changed **glial** numbers selectively"],
          ["**Single peripheral bFGF** injection in newborn pups", "Crossed into **CSF**; by **8 hours** EGL proliferation **up 30%** and dentate gyrus proliferation **doubled** (an **endocrine** action)"],
          ["Cerebellar outcome", "**33%** more internal granule layer neurons; cerebellum **22%** larger"],
          ["Hippocampal outcome", "Dentate granule neurons **up 33%** at **3 weeks** (counted **stereologically**); hippocampus **25%** larger with more neurons and astrocytes, **lifelong**"],
          ["Gene deletion of **bFGF**", "**Cerebellum** and **hippocampus** both smaller from birth onward, for life"]
        ] },
        { type: "p", text: "In the embryonic rat cortical VZ, **bFGF** (promitogenic) and **PACAP** (antimitogenic) act as **autocrine/paracrine** signals. Effects were shown **in utero** by **intracerebroventricular (ICV)** injection of the factors or their antagonists. Because responses depend on the **stage** of regional development, disturbed mitogen signaling from genes or environment (**hypoxia**, **maternal or fetal infection**, **drug or toxicant exposure**) will likely cause **subtle** changes in cortical size and makeup." },
        { type: "p", text: "Rats make cerebellar granule neurons after birth for only **3 weeks**, as humans also do postnatally; dentate gyrus neurons, in contrast, keep being made **throughout life** in **both** species. Besides bFGF, **Shh** and **PACAP** regulate cerebellar granule neurogenesis, and disrupting them contributes to human **medulloblastoma**; for the hippocampus, the **Wnt** family is a possible player." },
        { type: "p", text: "A striking study using **mouse embryonic stem cells** raises the idea that forebrain specification **may** be an ancestral **intrinsic** program that appears without outside signals. When endogenous **Shh** signaling is blocked in culture, these cells produce, in sequence, neurons with the main traits of true **cortical pyramidal** neurons. Grafted into cortex, they project to selected cortical (**visual** and **limbic**) and **subcortical** targets. How intrinsic programs and extrinsic factors interact is **not yet defined**. Better control of differentiation could aid **neuronal grafts** in humans for acquired and **neurodegenerative** diseases." },
        { type: "callout", kind: "caution", title: "Stage matters", text: "The same factor can hit different cells at different times. bFGF given early expands **neurons**; given during **gliogenesis** it changes **glial** numbers. Timing of an exposure shapes its result." },
        { type: "list", title: "Clinical implications raised in the chapter", items: [
          "Drugs given in the **newborn nursery** may need study for **long-term neurogenetic** effects.",
          "bFGF works in the **adult** as well as the newborn because it is **specifically transported** across the mature **BBB**; other protein growth factors may enter the same way. In rats, **IGF-I** also stimulates adult **dentate gyrus** neurogenesis.",
          "**Steroids** cross the BBB easily because they are **lipid soluble** and **inhibit neurogenesis** at every age. They are often used **perinatally** for **lung maturation**, infection and trauma, yet their effect on human brain formation **has not been examined**.",
          "Children with a **severe systemic illness** and many **inflammatory cytokines** may show delayed neurologic development; how much this reflects disrupted neurogenesis is an open question.",
          "Infection in the **mother** during pregnancy is an established **schizophrenia** risk factor. In **animal models**, cytokines crossing the **placenta** can affect fetal cell proliferation, differentiation, migration, target selection and synapse maturation, leading to brain and behavior problems in adult offspring."
        ] },
        { type: "callout", kind: "pearl", title: "Think about the nursery", text: "Treatments given intravenously to **premature** and **newborn** infants reach a brain that is still making **cerebellar** and **dentate** granule cells. Growth factors and **steroids** are examples where a drug could change brain cell numbers." }
      ]
    },
    {
      id: "s332-migrate",
      title: "Cell migration, differentiation and process outgrowth",
      blocks: [
        { type: "p", text: "New neurons normally travel away from the zones where they were born. If this travel fails, cells end up in the wrong place and work abnormally. **More than 25** human syndromes of disturbed neuronal migration have been described. Migration can be **radial** or **tangential**, and layers can form **inside-to-outside** or the reverse, depending on the region." },
        { type: "table", caption: "Migration patterns by region", head: ["Region", "Cells", "Route"], rows: [
          ["Cerebral cortex", "Most cortical neurons", "**Radial**, from the **VZ** into their layers, **inside-to-outside**"],
          ["Cerebral cortex", "**GABA interneurons** from the **medial ganglionic eminences**", "**Tangential**, through the **intermediate zone** alongside axons or other neurons"],
          ["Cerebellum", "**Purkinje cells** from the **fourth ventricle** VZ", "**Radial**"],
          ["Cerebellum", "Precursors from the **rhombic lip**", "**Tangential** over the surface, forming the **EGL**, a **secondary proliferative zone**"],
          ["Cerebellum", "**Granule cells** born in the EGL", "**Radially inward** to form the **internal granule cell layer**"],
          ["Olfactory bulb", "**Granule interneurons** from the **SVZ** of the lateral ventricles over the striatum", "Divide while moving in the **rostral migratory stream**, as **chains** of cells"]
        ] },
        { type: "p", text: "The best known human migration disorders are the extensive **lissencephalies**. Incomplete migration of smaller groups of neurons, called **heterotopias**, often underlies **focal seizure** disorders." },
        { type: "list", title: "What a migrating cell needs (from animal models)", items: [
          "Signals to **start** and **stop** moving.",
          "**Adhesion molecules** to guide the path.",
          "A working **cytoskeleton** to move the cell body."
        ] },
        { type: "h", text: "Reelin and the reeler mouse" },
        { type: "p", text: "**Reeler** is a **spontaneous** mouse mutant and the best described model of faulty migration. Its cortical layers are **inverted**, built **outside-to-inside**. **Reelin** is a big glycoprotein that is **secreted** into the extracellular space. In the embryo it is made by the earliest preplate neurons, the **Cajal-Retzius cells**, and also in the **hippocampus** and **cerebellum**." },
        { type: "steps", title: "Reelin signaling sequence", items: [
          ["Ligand", "**Reelin** is secreted."],
          ["Receptors", "At least two: **VLDLR** (very low-density lipoprotein receptor) and **ApoER2** (apoprotein E receptor 2)."],
          ["Adapter", "The intracellular protein **disabled 1 (Dab1)**, first found in the **scrambler** mouse, a **phenocopy** of reeler."]
        ] },
        { type: "p", text: "Current thinking treats reelin as one of the signals behind migration guided by **radial glia**, but whether it starts or stops migration remains **controversial**. Its receptors are of interest for a possible role in **Alzheimer disease** risk. Human **RELN** mutations have been tied to **autosomal recessive lissencephaly with cerebellar hypoplasia**: a very **thick cortex** with **pachygyria**, abnormal hippocampal formation and severe cerebellar hypoplasia with **no folia**. Reelin **polymorphisms** may also add to **ASD** risk." },
        { type: "h", text: "Lissencephaly and cytoskeletal genes" },
        { type: "table", caption: "Two types of lissencephaly", head: ["Feature", "Classical (type I)", "Cobblestone (type II)"], rows: [
          ["Cortex", "**Thick**, usually **four-layered**", "**Chaotic**, with poor lamination"],
          ["Surface", "Smooth", "Partly smooth, partly **pebbled**"],
          ["Example cause", "**LIS-1** mutation (up to **60%** of type I cases)", "Defects in enzymes adding **mannose** sugars to glycoproteins, as in some **congenital muscular dystrophies**"]
        ], note: "In both, the gyri and sulci are lacking and brain surface area is much reduced because most neurons never reach their targets. Cortex and hippocampus are hit hardest; the cerebellum less so." },
        { type: "p", text: "Work on the fungus **Aspergillus nidulans** unexpectedly explained **Miller-Dieker syndrome**, a lissencephaly with an abnormality of chromosome **17q13.3**. The fungal gene **NudF** is needed for **nuclear distribution** in the cell, a movement also used when mammalian cells migrate. Its human homolog is **LIS-1 (PAFAH1B1)**. The LIS-1 protein works with **microtubules**, the motor parts **dynein** and **dynactin**, and **doublecortin (DCX)**, which may control microtubule stability." },
        { type: "defs", title: "Other migration genes and molecules", items: [
          ["DCX", "Mutations give **X-linked lissencephaly** in **males** and, in **females**, **heterotopic** neuron bands within the white matter that look like a **double cortex** on imaging, with severe mental retardation and **epilepsy**."],
          ["Filamin 1", "An **actin**-linked protein; mutations cause **periventricular nodular heterotopias**."],
          ["CDK5/p35", "A regulatory **phosphokinase** complex; mutations disturb migration."],
          ["Astrotactin", "A major **glial** protein for migration along **radial glial** fibers."],
          ["Neuregulins and ErbB2-4", "Mediate **neuron-glia** migratory interactions; neuregulin **polymorphisms** are associated with **schizophrenia**, hinting at altered **oligodendrocyte** numbers and activity and **synaptic** function."],
          ["GABA, glutamate and PDGF", "Early transmitters and platelet-derived growth factor that some work suggests set **migration speed**."]
        ] },
        { type: "callout", kind: "caution", title: "Outdated term", text: "The chapter uses \"mental retardation\" for the DCX phenotype. Current DSM-5-TR wording is **intellectual disability** (intellectual developmental disorder)." },
        { type: "p", text: "Cortical **GABA interneurons** leave the **ganglionic eminences** by different means. **Slit** with its **Robo** receptor, **semaphorins** with **neuropilin** receptors, and **hepatocyte growth factor** with its **c-Met** receptor all seem to **repel** these cells from the basal forebrain, pushing them **tangentially** into cortex. **c-Met** has been associated with **ASD**, suggesting that faulty interneuron migration and weak **inhibitory** signaling may add to seizures and abnormal cognition." },
        { type: "callout", kind: "exam", title: "Migration genes to know", text: "**LIS-1** (Miller-Dieker, type I lissencephaly), **DCX** (X-linked lissencephaly in males, double cortex in females), **filamin 1** (periventricular nodular heterotopia), **RELN** (lissencephaly with cerebellar hypoplasia)." },
        { type: "h", text: "Differentiation and process outgrowth" },
        { type: "p", text: "After arriving, neurons and glia **mature**. Neurons grow **dendrites**, extend **axons**, form **synapses** and build transmitter systems with their **receptors** and **reuptake sites**. Most axons get **myelin** from **oligodendroglia**. Many of these events peak from **5 months of gestation** on. During early childhood (the first **several years**), many systems overgrow and branch, then are trimmed by experience-dependent **pruning** of axons and synapses. **Myelination** keeps going for years after birth and **into adulthood**." },
        { type: "p", text: "A core feature of the nervous system is **topographic** (point-to-point) mapping between neuron groups. The **growth cone** at the axon tip senses cues. The axon shaft is held up by **microtubules** under control of **microtubule-associated proteins (MAPs)**; the growth cone shifts to **actin** microfilaments. Its rod-like **filopodia** carry receptors for cues on cells and in the **extracellular matrix**, so the cone advances, turns or pulls back. **LIMK** kinase, which modulates actin, causes the **language phenotype** of **Williams syndrome**. Receptor activation in the growth cone triggers **local mRNA translation** of synaptic proteins, contrary to the older idea that all proteins are shipped from the cell body." },
        { type: "table", caption: "Axon guidance molecules", head: ["Molecule", "Type", "Main action"], rows: [
          ["**Cadherins**", "Region-specific guidance molecules controlled by **Pax6** and **Emx2**", "Direct **axonal pathfinding**"],
          ["**Ephrins** with **Eph** receptors", "Transmembrane; Eph is the **largest** tyrosine kinase receptor family in the brain", "Mostly **chemorepellent**; key for **topographic mapping**"],
          ["**Netrins**", "Soluble, secreted (for example by the **floor plate**)", "Mainly **chemoattractant**; draw **spinothalamic** interneuron axons into the **anterior commissure**"],
          ["**Slit** with **Robo**", "Soluble, secreted", "**Chemorepulsive**; controls **midline crossing**, **fasciculation** and pathfinding"]
        ], note: "Guidance cues can be soluble or bound to matrix or membranes, and they alter axon direction, speed and fasciculation by positive or negative regulation." },
        { type: "steps", title: "Retinotectal mapping with ephrins", items: [
          ["Target gradient", "In the **optic tectum**, **ephrins A2 and A5** form a gradient, highest **posteriorly** and falling toward the **anterior** end."],
          ["Axon gradient", "Retinal ganglion cells carry a matching gradient of **Eph** receptors."],
          ["Posterior retina", "These axons have **high Eph A3** levels."],
          ["Outcome", "They prefer the **anterior tectum**, where low ephrin does not switch on the Eph kinase that makes growth cones **retract**."]
        ] },
        { type: "callout", kind: "pearl", title: "Heterotopias and seizures", text: "When a patient has **focal seizures** and imaging shows misplaced gray matter, think of **incomplete migration**: heterotopias such as the **double cortex** of DCX or the **periventricular nodules** of filamin 1." }
      ]
    }
  ]
})
