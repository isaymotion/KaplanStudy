/* Section 33.4 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 33 (Neurophysiology and Neurochemistry: neuropeptides and novel transmitters). */
KS.add("ch33-4", "guide", {
  "intro": "The second part of the neurochemistry section turns to transmitters beyond the classic monoamines and amino acids. It explains how neuropeptides are studied, made from precursors, distributed, released, signal and are broken down (Tables 33-3 and 33-4); uses thyrotropin-releasing hormone, corticotropin-releasing factor and the urocortins, oxytocin and vasopressin, and neurotensin as prototypes; describes the gaseous transmitters nitric oxide and carbon monoxide; follows the endocannabinoid system from marijuana to its receptors, synthesis, breakdown and roles in anxiety, mood, psychosis, brain injury and pain (Table 33-5); and closes with eicosanoids and neurosteroids. Update boxes add the failed trials of CRF1 and NK1 antagonists, the withdrawal of rimonabant, the approval of cannabidiol for epilepsy, and the neurosteroid drugs now approved for postpartum depression.",
  "objectives": [
    "Explain how neuropeptides differ from classic transmitters in synthesis, storage, release, signaling and inactivation.",
    "Describe the roles of TRH, CRF and the urocortins, oxytocin, vasopressin and neurotensin, and their links to psychiatric illness.",
    "Explain how nitric oxide and carbon monoxide act as unconventional transmitters and their roles in behavior and disease.",
    "Describe the endocannabinoid system, its receptors, synthesis and breakdown, and its roles in anxiety, mood, psychosis and pain.",
    "Summarize what eicosanoids and neurosteroids do in the brain and their relevance to mental illness.",
    "Identify which neuropeptide and neurosteroid targets have produced approved drugs and which have failed in trials."
  ],
  "parts": [
    {
      "title": "Neuropeptide biology",
      "sections": [
        {
          "id": "s334-np",
          "title": "Neuropeptides: overview, selected transmitters and how their function is studied",
          "blocks": [
            {
              "type": "p",
              "text": "Neuropeptides are the **most diverse** group of signaling molecules in the central nervous system (CNS). They were first found because of the part they play in how the **hypothalamus** controls **pituitary hormone** release. Over roughly the **last 30 years**, a much broader role in brain function has come into view."
            },
            {
              "type": "p",
              "text": "The brain contains **more than 100** distinct, biologically active neuropeptides. Many of them, and their receptors, are spread widely through the CNS. Their effects range from changing **transmitter release** and **neuronal firing patterns** to shaping **emotionality** and complex **behavior**. A further layer of complexity is that one peptide often acts through **several receptor subtypes** sitting in different brain regions. New peptides and new subtypes have been found faster than their roles in normal or disordered brain function have been worked out. Today, **pharmacologic, molecular and genetic** methods drive progress on how these systems relate to psychiatric illness."
            },
            {
              "type": "list",
              "title": "Processes neuropeptides have been implicated in",
              "items": [
                "**Thermoregulation**",
                "Eating and drinking (**food and water intake**)",
                "**Sex**, **sleep** and **locomotion**",
                "**Learning and memory**",
                "Reactions to **pain** and to **stress**",
                "**Social cognition** and **emotion**"
              ]
            },
            {
              "type": "p",
              "text": "Because these systems touch so many behaviors, the chapter suggests they **may contribute** to symptoms seen in **psychoses**, **mood disorders**, **dementia** and **autism spectrum disorders (ASDs)**."
            },
            {
              "type": "table",
              "caption": "A selection of neuropeptide transmitters, grouped for study (see Table 33-3)",
              "head": [
                "Group (for study)",
                "Peptides listed"
              ],
              "rows": [
                [
                  "Hypothalamic releasing and inhibiting factors",
                  "**CRF**, **TRH**, **GnRH**, **GHRH** (also called GRF), **somatostatin** (SS; SRIF)"
                ],
                [
                  "Pituitary and related hormones",
                  "**ACTH**, **growth hormone**, **prolactin**, **oxytocin**, **vasopressin** (AVP; ADH)"
                ],
                [
                  "Opioid and opioid-like peptides",
                  "**Dynorphin**, **beta-endorphin**, **Leu-enkephalin**, **Met-enkephalin**, **orphanin FQ/nociceptin**"
                ],
                [
                  "Gut and pancreatic peptides",
                  "**Cholecystokinin** (CCK), **gastrin**, **secretin**, **motilin**, **VIP**, **pancreatic polypeptide**, **insulin**, **bombesin**"
                ],
                [
                  "Tachykinins",
                  "**Substance P**, **substance K**"
                ],
                [
                  "Cardiovascular and calcium-regulating peptides",
                  "**Angiotensin**, **atrial natriuretic peptide**, **calcitonin**, **CGRP** (calcitonin gene-related peptide)"
                ],
                [
                  "Others in the list",
                  "**CART** (cocaine and amphetamine regulated transcript), **galanin**, **orexin**, **neurotensin** and **neuromedin N**, **neuropeptide Y** (NPY), **neuropeptide S**, **urocortin 1, 2 and 3**"
                ]
              ],
              "note": "The book gives a single alphabetical list adapted from the 9th edition of the Comprehensive Textbook (2009). The grouping here is only a study aid and is not part of the book table."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Numbers to recall",
              "text": "More than **100** active neuropeptides have been found in the brain, and a single peptide often signals through **multiple receptor subtypes** in different regions."
            },
            {
              "type": "h",
              "text": "Investigating neuropeptide function"
            },
            {
              "type": "list",
              "title": "Levels of analysis used to study a neuropeptide",
              "items": [
                "How the peptide and its receptors are **built and synthesized** (molecular structure)",
                "**Where in the brain** the peptide and its receptors sit (neuroanatomical localization)",
                "**Regulation** of the peptide's expression and release",
                "The peptide's **behavioral effects**"
              ]
            },
            {
              "type": "p",
              "text": "Most of what is known comes from **laboratory animals**, though human data on where several systems are found, how active they are and why they might matter psychiatrically keep growing. Most peptide structures were first found by **chemically analyzing purified, active peptide**; this eventually led to **cloning** the genes behind them. Knowing gene structure clarifies molecular regulation, and knowing **chromosomal location** helps genetic studies of psychiatric disorders. Structural knowledge also lets researchers make **immunologic and molecular probes**."
            },
            {
              "type": "table",
              "caption": "Methods for mapping peptides and their genes in brain tissue",
              "head": [
                "Method",
                "What it detects",
                "Strength",
                "Limit"
              ],
              "wide": true,
              "rows": [
                [
                  "**Radioimmunoassay** (quantitative)",
                  "Peptide in **microdissected** brain regions, using specific antibodies",
                  "Gives **amounts**",
                  "Regional, not cellular, detail"
                ],
                [
                  "**Immunocytochemistry**",
                  "Peptide in **brain sections**, using specific antibodies",
                  "Shows **exact cells** making the peptide and their **projections**",
                  "Usually **not quantitative**"
                ],
                [
                  "**In situ hybridization**",
                  "**mRNA** for the peptide or receptor, using matching molecular probes",
                  "**Localizes and quantifies** gene expression with fine anatomical resolution",
                  "Needs an mRNA-derived product"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why in situ hybridization suits peptides",
              "text": "A peptide is made **directly from translated mRNA**, so measuring its mRNA tracks its synthesis in place. That is **not possible** for **dopamine, serotonin or norepinephrine**, which are not direct translation products."
            },
            {
              "type": "h",
              "text": "Getting peptides into the brain"
            },
            {
              "type": "p",
              "text": "Behavioral effects are usually first tested by putting the peptide **straight into the brain**. Unlike many nonpeptide transmitters, most peptides **do not cross the blood-brain barrier (BBB)** in useful amounts. Enzymes in **serum and tissue** also break them down on the way, each **peptidase** cutting a particular amino acid sequence. Animal studies therefore rely on **intracerebroventricular (ICV)** or **site-specific** infusions. In people, some studies have given peptides **intranasally**, a route that may help them reach the brain."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "The main barrier to therapy",
              "text": "The **BBB** keeps most peptides and their agonists or antagonists out, so their behavioral effects in humans are **largely unstudied** apart from a few **intranasal** studies. In some cases, **small-molecule nonpeptide** agonists or antagonists given peripherally do get into the brain well enough to act on the receptor."
            },
            {
              "type": "p",
              "text": "Studies of human cerebrospinal fluid (CSF) can be strengthened by comparing samples **before and after treatment**, or taken **during illness** versus **remission**. When an illness progresses, as in **Alzheimer disease** or **schizophrenia**, repeated (**serial**) CSF sampling may track **disease progression** or **treatment response**. Despite such limits, real progress has been made in describing how psychiatric illness affects brain peptide systems."
            }
          ]
        },
        {
          "id": "s334-npbio",
          "title": "Neuropeptide life cycle: biosynthesis, distribution, signaling and peptidases",
          "blocks": [
            {
              "type": "h",
              "text": "Biosynthesis"
            },
            {
              "type": "p",
              "text": "Peptides are made differently from other transmitters. A specific **gene** is transcribed into **mRNA**, the mRNA is translated into a large precursor called a **preprohormone**, and the precursor is then **cut by proteases** after translation. Within roughly the **past 25 years**, researchers have mapped how many peptide genes are organized and how the peptides are made."
            },
            {
              "type": "steps",
              "title": "From gene to active neuropeptide",
              "items": [
                [
                  "Transcription",
                  "A neuropeptide gene, usually built from **multiple exons**, is copied into **mRNA**."
                ],
                [
                  "Translation",
                  "The mRNA is read into a **preprohormone** protein."
                ],
                [
                  "Targeting",
                  "A **signal peptide** at the **N-terminus** steers the growing chain to the membrane of the **rough endoplasmic reticulum (RER)**."
                ],
                [
                  "Posttranslational processing",
                  "**Specific enzymes** cleave the preprohormone, often releasing **several different peptides** from one precursor."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "One precursor, two peptides",
              "text": "The **neurotensin (NT)** gene yields a preprohormone that is cleaved into both **NT** and **neuromedin N**."
            },
            {
              "type": "p",
              "text": "Figure 33-22 sketches the gene, preprohormone mRNA and final peptides for five peptides: **NT**, **TRH**, **CRF**, **AVP** (arginine vasopressin) and **OT** (oxytocin). Boxes mark **exons**, shading marks **coding regions**, every preprohormone starts with a **signal peptide (SP)**, and black boxes show where the **active peptide** is encoded (Figure 33-22)."
            },
            {
              "type": "h",
              "text": "Distribution and regulation"
            },
            {
              "type": "p",
              "text": "Many peptides were first purified from **peripheral tissues** or the **pituitary**, but most later proved to be **widespread in the brain**. Peptides that control pituitary output cluster in the **hypothalamus**. There, **neurosecretory neurons** beside the **third ventricle** make releasing and inhibiting factors and send axons to the **median eminence**, where they discharge peptide into the **hypothalamohypophysial portal** blood supply. These neurons are often regulated by the **peripheral hormones** they control. Peptide neurons and fibers also lie in the **spinal cord**, **hindbrain**, **midbrain** and **limbic** regions."
            },
            {
              "type": "steps",
              "title": "Example of feedback: the TRH loop",
              "items": [
                [
                  "Hypothalamus",
                  "**TRH** neurons release TRH into the portal system."
                ],
                [
                  "Downstream effect",
                  "TRH drives the secretion of **thyroid hormones**."
                ],
                [
                  "Feedback",
                  "Thyroid hormones **negatively feed back** on **TRH gene expression**."
                ]
              ]
            },
            {
              "type": "h",
              "text": "Signaling"
            },
            {
              "type": "p",
              "text": "A neuropeptide may work as a **neurotransmitter**, a **neuromodulator** or a **neurohormone**. Release is **not limited** to synapses or axon terminals: it can happen **along the axon** or even from **dendrites**."
            },
            {
              "type": "table",
              "caption": "Three signaling roles a neuropeptide can play",
              "head": [
                "Role",
                "Effect on the target cell"
              ],
              "rows": [
                [
                  "**Neurotransmitter**",
                  "Typically released from **axon terminals** into a **synapse**; shifts the postsynaptic **membrane potential** (depolarizes or hyperpolarizes). Classical transmitters often do this by acting on **voltage-gated ion channels**."
                ],
                [
                  "**Neuromodulator**",
                  "Does **not directly** change the target's firing; alters the cell's **response to other transmitters** via **second messenger** pathways."
                ],
                [
                  "**Neurohormone**",
                  "Like a modulator: no direct firing change; works by changing **second messenger** signaling."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Each peptide acts through **specific receptors**, so receptor function is central to peptide biology. Most are **seven-transmembrane** receptors coupled to **G proteins**, the **same protein family** that includes the **monoamine receptors**."
            },
            {
              "type": "defs",
              "title": "Three ways to clone a neuropeptide receptor",
              "items": [
                [
                  "Purify and sequence",
                  "The receptor protein is **purified** and **partly sequenced**; **oligonucleotide probes** then pull its cDNA out of a **cDNA library**."
                ],
                [
                  "Expression library",
                  "Cells carrying the receptor cDNA are picked out by their ability to **bind a radiolabeled peptide ligand**."
                ],
                [
                  "Sequence homology",
                  "Many receptors are now found by their **similarity to known peptide receptors**."
                ]
              ]
            },
            {
              "type": "list",
              "title": "What a cloned receptor cDNA makes possible",
              "items": [
                "Making **pure receptor protein** to study its shape and function",
                "**Mutating** single amino acids and comparing binding of altered peptides to define how the **ligand and receptor interact**",
                "Designing drugs, including **nonpeptide** drugs, that act selectively on the receptor",
                "**Mapping** receptor-making cells to define the circuits the peptide modulates",
                "**Transgenic** work such as targeted **overexpression** or **gene knockouts**",
                "**siRNA** methods that selectively disrupt synthesis in a chosen receptor population"
              ]
            },
            {
              "type": "list",
              "title": "Three factors that set a neuropeptide's biologic role",
              "items": [
                "**When and where** the peptide is released (temporal-anatomical release)",
                "How the receptor is **coupled to intracellular signaling**",
                "The **cell types and circuits** that express the receptor"
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Receptor location shapes behavior",
              "text": "Genetic studies show that **regulatory DNA on either side of the receptor coding sequence** controls where the receptor is expressed, and therefore how the body and behavior **respond** to the peptide."
            },
            {
              "type": "h",
              "text": "Peptidases"
            },
            {
              "type": "p",
              "text": "Monoamines are cleared by **reuptake** into the presynaptic terminal, but peptides are **not taken back up**. Instead, enzymes called **peptidases** cut released peptides into smaller pieces and finally into **single amino acids**. Peptidases may be **bound to pre- or postsynaptic membranes** or **dissolved** in cytoplasm and extracellular fluid. Besides the CNS, they occur widely in **serum** and in **peripheral organs**. As a result, a released neuropeptide usually has a **half-life of minutes**."
            },
            {
              "type": "table",
              "caption": "How peptides differ from monoamine transmitters",
              "head": [
                "Feature",
                "Neuropeptides",
                "Monoamines"
              ],
              "rows": [
                [
                  "Synthesis",
                  "**Gene to mRNA to preprohormone**, then cleavage",
                  "Not direct translation products"
                ],
                [
                  "Mapping synthesis by mRNA",
                  "Possible with **in situ hybridization**",
                  "Not possible this way"
                ],
                [
                  "Release site",
                  "Synapse, **along the axon**, or **dendrites**",
                  "Classical transmitters: typically **axon terminals** into a synapse"
                ],
                [
                  "Ending the signal",
                  "**Peptidase** breakdown; **no reuptake**",
                  "**Active uptake** into terminals"
                ],
                [
                  "Crossing the BBB",
                  "Mostly **poor**",
                  "Many nonpeptide transmitters do better"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Do not assume reuptake",
              "text": "A question that asks how a peptide signal ends is about **enzymatic degradation by peptidases**, not transporter **reuptake**."
            }
          ]
        }
      ]
    },
    {
      "title": "Prototype neuropeptides",
      "sections": [
        {
          "id": "s334-trh",
          "title": "Specific neuropeptides as prototypes; thyrotropin-releasing hormone",
          "blocks": [
            {
              "type": "p",
              "text": "A handful of well-studied peptides serve as models for how neuropeptides work: **TRH** (thyrotropin-releasing hormone), **CRF** (corticotropin-releasing factor) with the urocortins, **neurotensin (NT)**, **oxytocin (OT)** and **arginine vasopressin (AVP)**. Each started as a hormone or gut and brain signal and later turned out to shape behavior and psychiatric illness."
            },
            {
              "type": "table",
              "caption": "Prototype neuropeptides: key structural features (see Table 33-4; sequences not reproduced)",
              "head": [
                "Peptide",
                "Key structural feature"
              ],
              "rows": [
                [
                  "TRH",
                  "A **tripeptide**; N-terminal glutamine is **cyclized (pE)**; C-terminus is **amidated**"
                ],
                [
                  "CRF",
                  "C-terminus is **amidated**"
                ],
                [
                  "AVP",
                  "**Cysteine to cysteine disulfide bond**; C-terminus **amidated**"
                ],
                [
                  "Oxytocin",
                  "**Cysteine to cysteine disulfide bond**; C-terminus **amidated**"
                ],
                [
                  "Neurotensin",
                  "N-terminal glutamine is **cyclized (pE)**; C-terminus is a free acid"
                ]
              ],
              "note": "The table in the book is reprinted from the Comprehensive Textbook of Psychiatry, 9th ed. (2009)."
            },
            {
              "type": "defs",
              "title": "Landmarks",
              "items": [
                [
                  "1969",
                  "TRH, a **pyroglutamylhistidylprolinamide** tripeptide, became the **first hypothalamic releasing hormone** to be isolated and characterized."
                ],
                [
                  "Why it mattered",
                  "Solving its structure **proved** that peptides released by the hypothalamus control **anterior pituitary** hormone output."
                ],
                [
                  "Human gene",
                  "Lies on chromosome **3q13.3 to q21**."
                ]
              ]
            },
            {
              "type": "steps",
              "title": "TRH gene layout (rat) and processing (see Figure 33-22)",
              "items": [
                [
                  "Exon 1",
                  "Holds the **5′ untranslated region** of the preprohormone mRNA. The rat gene has **three exons** split by **two introns**."
                ],
                [
                  "Exon 2",
                  "Holds the **signal peptide** and most of the N-terminal part of the precursor."
                ],
                [
                  "Exon 3",
                  "Holds the rest, including **five copies** of the TRH sequence, the C-terminal stretch, and finally the **3′ untranslated region**."
                ],
                [
                  "Promoter control",
                  "The 5′ flanking region carries sequences like those bound by the **glucocorticoid receptor** and sites for **thyroid hormone**, so **cortisol** can regulate the gene and thyroid hormone can give **negative feedback**."
                ],
                [
                  "Processing",
                  "**Carboxypeptidases** cut out the progenitor pieces, the C-terminal **proline is amidated** and the N-terminal **glutamine is cyclized**, giving **five TRH molecules** per prohormone."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Cells showing TRH immunoreactivity sit in the **hypothalamus**, **hippocampus**, **entorhinal cortices**, **olfactory bulbs**, **extended amygdala** and **midbrain**. Like most neuropeptide receptors, the TRH receptor is a **seven-transmembrane G-protein–coupled receptor**."
            },
            {
              "type": "steps",
              "title": "The hypothalamic–pituitary–thyroid (HPT) axis",
              "items": [
                [
                  "Hypothalamus",
                  "**Paraventricular nucleus (PVN)** TRH neurons send terminals to the **median eminence**."
                ],
                [
                  "Portal blood",
                  "TRH enters the **hypothalamohypophyseal portal system** and reaches the **adenohypophysis**."
                ],
                [
                  "Pituitary",
                  "The pituitary releases **TSH** into the general circulation."
                ],
                [
                  "Thyroid",
                  "TSH drives release of **T3 (triiodothyronine)** and **T4 (thyroxine)**."
                ],
                [
                  "Feedback",
                  "PVN TRH neurons carry **thyroid hormone receptors**; rising thyroid hormone **lowers TRH gene expression** and synthesis."
                ]
              ]
            },
            {
              "type": "list",
              "title": "Evidence for feedback at several levels",
              "items": [
                "After **thyroidectomy**, TRH content fell at the **median eminence** while PVN levels held steady; giving thyroid hormone **reversed** this.",
                "Giving thyroid hormone to normal rats lowered TRH in the **PVN** and the **posterior hypothalamic nucleus**.",
                "**In situ hybridization** showed PVN TRH mRNA rising **14 days** after thyroidectomy.",
                "Other HPT stimuli can override feedback: repeated **cold** exposure raises PVN TRH mRNA even while thyroid hormones are high.",
                "TRH regulates mRNA for the **pituitary TRH receptor** and for both the **α and β subunits** of TSH.",
                "TRH boutons touching TRH cell bodies within the PVN's **medial and periventricular** subdivisions suggest **ultrashort feedback**.",
                "Thyroid feedback may be confined to **hypothalamic** TRH neurons; it has not been seen in **extrahypothalamic** ones."
              ]
            },
            {
              "type": "p",
              "text": "Because TRH is found well outside the hypothalamus, researchers proposed that it acts as a **neurotransmitter or neuromodulator**, and much evidence backs this. It modulates **dopamine, serotonin, acetylcholine and opioids**. It can **arouse hibernating animals** and counters the behavioral depression and **hypothermia** caused by CNS depressants such as **barbiturates** and **ethanol**."
            },
            {
              "type": "h",
              "text": "TRH and depression"
            },
            {
              "type": "p",
              "text": "Good tools came early (**radioimmunoassays** and **synthetic peptides**), and **primary hypothyroidism** was known to bring depressive symptoms, so the HPT axis was studied closely in mood disorders. The standardized **TRH stimulation test** gauges negative feedback. It shows a **blunted TSH response** in roughly **25 percent** of depressed patients who are **euthyroid**, a widely replicated result. Basal TSH and thyroid hormones are usually **normal** in these patients, so excess feedback from **hyperthyroidism** does not explain it. One idea is that the pituitary **TRH receptor is downregulated** because the median eminence **oversecretes TRH**. **Raised CSF TRH** in depressed patients fits this idea but does not show where in the brain the extra TRH comes from. In contrast, **PVN TRH mRNA** has been found **decreased** in major depression. Whether the HPT changes **cause** depressive symptoms or are **secondary** to changes in other systems remains unclear."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Blunted TSH response",
              "text": "About **25 percent** of **euthyroid** depressed patients show a **blunted TSH** response to TRH. Thyroid levels are normal, so the favored explanation is **pituitary TRH receptor downregulation** from TRH hypersecretion."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "One gene, five hormones",
              "text": "Each TRH prohormone carries **five copies** of the TRH sequence, so one precursor yields **five active tripeptides** after processing."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Cause or consequence",
              "text": "HPT findings in depression are consistent, but whether they **drive** symptoms or merely **follow** other brain changes is **not settled**. Also note the raised CSF TRH sits alongside **lower PVN TRH mRNA**."
            }
          ]
        },
        {
          "id": "s334-crf",
          "title": "Corticotropin-releasing factor and the urocortins",
          "blocks": [
            {
              "type": "p",
              "text": "Strong evidence links **CRF** and the **urocortins** to coordinating the **endocrine, autonomic, immune and behavioral** reactions of an organism to **stress**. CRF was first isolated for its control of the **HPA axis**, yet it is spread widely across the brain."
            },
            {
              "type": "steps",
              "title": "CRF pathway to the pituitary",
              "items": [
                [
                  "Origin",
                  "The main CRF cell bodies that drive the pituitary lie in the **parvocellular** part of the **PVN**."
                ],
                [
                  "Release",
                  "Their axons end in the **median eminence**, where stress triggers CRF release into the **portal system**."
                ],
                [
                  "Target",
                  "CRF reaches the **anterior pituitary**, which releases **ACTH**."
                ],
                [
                  "Autonomic branch",
                  "A **small group** of PVN neurons sends fibers down to the **brainstem and spinal cord** to control **autonomic** stress responses."
                ]
              ]
            },
            {
              "type": "p",
              "text": "CRF neurons also appear in **other hypothalamic nuclei**, the **neocortex**, **extended amygdala**, **brainstem** and **spinal cord**. When CRF is infused centrally in laboratory animals, they look stressed: **more locomotor activity**, a **larger acoustic startle** and **less exploration** in an open field."
            },
            {
              "type": "table",
              "caption": "The urocortins",
              "head": [
                "Peptide",
                "Main sites of synthesis",
                "Proposed role"
              ],
              "rows": [
                [
                  "Urocortin 1",
                  "**Edinger–Westphal nucleus**, **lateral olivary nucleus**, **supraoptic** hypothalamic nucleus",
                  "Not specified in the chapter"
                ],
                [
                  "Urocortin 2",
                  "Mainly the **hypothalamus**",
                  "Studies suggest it is **anxiolytic** and may dampen stress"
                ],
                [
                  "Urocortin 3",
                  "**Extended amygdala**, **perifornical area**, **preoptic area**",
                  "Studies suggest it is **anxiolytic** and may dampen stress"
                ]
              ],
              "note": "The idea that CRF and the urocortins oppose each other is probably an oversimplification."
            },
            {
              "type": "list",
              "title": "HPA axis changes reported in major depression",
              "items": [
                "**Hypercortisolemia**.",
                "Cortisol that resists **dexamethasone suppression** (a test of negative feedback).",
                "**Blunted ACTH** responses to an intravenous **CRF challenge**.",
                "**Exaggerated cortisol** output on the joint **dexamethasone/CRF test**.",
                "**Raised CSF CRF**."
              ]
            },
            {
              "type": "p",
              "text": "HPA overactivity in major depression ranks among the **most reliably replicated** results of biologic psychiatry, but the exact mechanism behind it in depression and other mood disorders is **still unknown**."
            },
            {
              "type": "table",
              "caption": "Two explanations for the blunted ACTH response to CRF",
              "head": [
                "Hypothesis",
                "Proposed mechanism",
                "Status"
              ],
              "rows": [
                [
                  "First",
                  "**Hypothalamic CRF oversecretion** causes **pituitary CRF receptor downregulation**",
                  "Has gathered **substantial support**"
                ],
                [
                  "Second",
                  "The pituitary has **altered sensitivity** to **glucocorticoid negative feedback**",
                  "Less favored by the evidence so far"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Endocrine tests are only an **indirect** window on the brain. Pituitary ACTH output mainly reflects **hypothalamic** CRF, not the **corticolimbic** CRF circuits, and those circuits are thought **more likely** to be involved in depression."
            },
            {
              "type": "h",
              "text": "CSF CRF and treatment"
            },
            {
              "type": "list",
              "items": [
                "In **drug-free** depressed patients, high CSF CRF drops significantly after successful **ECT**, so CSF CRF behaves as a **state marker**, like hypercortisolemia.",
                "Later studies found the same normalization after successful **fluoxetine** treatment.",
                "In one study, **15 women** with major depression who stayed well for at least **6 months** after antidepressant treatment had a significant fall in CSF CRF; **9 patients** who relapsed in that period showed little change.",
                "So a high or **rising CSF CRF** during treatment may **predict a poor response** even when symptoms seem to improve early.",
                "**Desipramine** given to **normal subjects** also lowers CSF CRF."
              ]
            },
            {
              "type": "p",
              "text": "If excess CRF helps cause depression, blocking CRF signaling might relieve it. Several drug companies have worked to build **small-molecule CRF1 receptor antagonists** that cross the **blood–brain barrier**, and the chapter reports that some compounds looked **promising**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "State, not trait",
              "text": "Raised CSF CRF in depression **falls with successful ECT or fluoxetine**, so it is a **state marker**, like hypercortisolemia."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Watch the CRF trend",
              "text": "Persistently high or climbing CSF CRF during antidepressant treatment may signal **impending relapse** despite early symptom gains."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Pituitary is not cortex",
              "text": "ACTH responses mostly track **hypothalamic** CRF. They say little about the **corticolimbic** CRF circuits that likely matter more in depression."
            },
            {
              "type": "update",
              "year": 2017,
              "title": "Peptide receptor antagonists in psychiatry: mostly failed trials",
              "text": "The chapter describes the search for brain-penetrant **CRF1 receptor antagonists** and the hope for **substance P (NK1) antagonists** as antidepressants. Neither has reached psychiatric practice. After an early open-label study of R121919 in depression (2000), a series of CRF1 antagonists failed double-blind, placebo-controlled trials in **major depression, generalized anxiety disorder and alcohol use disorder**, among other stress-related conditions; a 2017 review concluded their therapeutic scope is narrower than hoped. For NK1, **five** placebo-controlled phase III trials of **aprepitant** in major depression (Keller and colleagues, 2006) found no antidepressant effect even with high brain receptor occupancy, while the active comparator worked; aprepitant is used today only to prevent chemotherapy-induced nausea. These are leading examples of animal findings that did not translate to patients.",
              "source": "Spierling SR, Zorrilla EP, Don't stress about CRF: assessing the translational failures of CRF1 antagonists, Psychopharmacology 2017 (PMC); Keller M et al., Lack of efficacy of the substance P (neurokinin1 receptor) antagonist aprepitant in major depressive disorder, Biol Psychiatry 2006"
            }
          ]
        },
        {
          "id": "s334-otavp",
          "title": "Oxytocin and vasopressin; neurotensin; other neuropeptides",
          "blocks": [
            {
              "type": "p",
              "text": "Extracts of the posterior pituitary were shown to raise blood pressure in **1895**, and the active extracts were given the name **AVP**. Messages for OT and AVP rank among the **most plentiful** in the hypothalamus. They are packed into **PVN** and **supraoptic nucleus** **magnocellular** neurons, which project to the **neurohypophysis**. From there the peptides enter the blood and act on peripheral organs like hormones. OT and AVP are usually made in **separate neurons**."
            },
            {
              "type": "table",
              "caption": "Oxytocin and vasopressin receptors",
              "head": [
                "Receptor",
                "Location",
                "Main role"
              ],
              "rows": [
                [
                  "OTR (oxytocin)",
                  "**Periphery** and **limbic CNS**; the only OT receptor",
                  "Mediates all OT actions"
                ],
                [
                  "V1a",
                  "**Widespread in the CNS**",
                  "**Vasoconstriction**; thought to carry most **behavioral** effects of AVP"
                ],
                [
                  "V1b",
                  "Concentrated in the **anterior pituitary**; some reports of brain mRNA",
                  "Brain function **unknown**"
                ],
                [
                  "V2",
                  "**Kidney**; **absent from brain**",
                  "**Water retention** (antidiuresis)"
                ]
              ],
              "note": "All three AVP receptors are seven-transmembrane G-protein–coupled receptors."
            },
            {
              "type": "p",
              "text": "Pituitary OT is best known for female reproduction: **uterine contractions** in labor and the **milk ejection reflex** in nursing. AVP, also called **antidiuretic hormone**, is released from the neurohypophysis in response to **plasma osmolality**, **hypovolemia**, **hypertension** (as printed) and **hypoglycemia**."
            },
            {
              "type": "h",
              "text": "Neurotensin"
            },
            {
              "type": "p",
              "text": "NT occurs in several brain regions but is studied mostly for its ties to the **mesolimbic dopamine** system and to **schizophrenia**. Three lines of evidence make NT a possible drug target: its system is **anatomically placed** to modulate circuits implicated in schizophrenia, **antipsychotics** given peripherally **consistently alter** it, and central NT systems appear **altered in patients**."
            },
            {
              "type": "list",
              "title": "Antipsychotic-like properties of NT",
              "items": [
                "Its link to dopamine emerged while studying how it **potentiates hypothermia and sedation**.",
                "It suppresses **avoidance but not escape** responses in a conditioned active avoidance task.",
                "It blocks locomotor effects produced by endogenous dopamine or by **indirect dopamine agonists**.",
                "It raises dopamine **release and turnover**.",
                "Most important, like antipsychotics, it **enhances sensorimotor gating**; dopamine agonists and **NT antagonists** disrupt gating.",
                "Unlike antipsychotics, NT **cannot displace dopamine** from its receptor."
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Sensorimotor gating",
                  "The capacity to **filter** incoming sensory input so that only relevant signals get through. Deficits may cause **flooding** by irrelevant stimuli and are increasingly seen as a **cardinal feature of schizophrenia**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "NT is **colocalized and coreleased** with dopamine in **mesolimbic** and **medial prefrontal** terminal fields, the regions thought to be dysregulated in schizophrenia. Antipsychotics acting at **D2 and D4** receptors increase NT **synthesis, concentration and release** in those fields only. The rise lasts through **months** of treatment, comes with higher **NT mRNA**, and is preceded within hours by induction of **c-fos**, an immediate early gene. **Haloperidol** also slows NT breakdown, measured in slices of rat brain a day (**24 hours**) after one dose. Injected into the brain, NT opposes dopamine in the **nucleus accumbens**, sparing the **caudate-putamen**. There, NT receptors sit mainly on **GABAergic** neurons whose GABA **inhibits dopamine release** from nearby terminals."
            },
            {
              "type": "list",
              "title": "NT findings in schizophrenia",
              "items": [
                "**Lower CSF NT** than controls or other psychiatric groups in several patient samples.",
                "Antipsychotics **raise CSF NT**, but whether this causes or merely accompanies improvement is **unknown**.",
                "Postmortem: more NT in dopamine-rich **Brodmann area 32**, possibly **confounded** by prior antipsychotics; other groups found **no change** across many subcortical regions.",
                "**Fewer NT receptors** in the **entorhinal cortex** postmortem.",
                "A true test of NT as an **endogenous antipsychotic-like** substance needs an NT agonist that **crosses the BBB**."
              ]
            },
            {
              "type": "table",
              "caption": "Other neuropeptides implicated in psychiatric disorders",
              "head": [
                "Peptide",
                "Where found",
                "Psychiatric findings"
              ],
              "wide": true,
              "rows": [
                [
                  "Cholecystokinin (CCK)",
                  "First found in the **gut**; receptors in **cortex, striatum, hypothalamus, hippocampus, amygdala**; colocalized with dopamine in **VTA** neurons",
                  "Like NT, **lowers dopamine release**. A CCK fragment triggers **panic** in healthy people, and panic disorder patients are **more sensitive**. **Pentagastrin** raises blood pressure, pulse, HPA activity and panic symptoms in a **dose-dependent** way. A **CCK receptor gene polymorphism** is linked to panic disorder."
                ],
                [
                  "Substance P",
                  "An **undecapeptide** in the **LC, parabrachial nucleus, periaqueductal gray, hypothalamus and amygdala**; colocalized with **norepinephrine and serotonin**",
                  "A **pain** transmitter; in animals it mimics the **stress response**. **CSF levels are high** in depression and **PTSD**, rising sharply when PTSD symptoms are provoked. One trial found an **NK1 receptor antagonist** better than placebo and as useful as **paroxetine**; **later studies did not confirm** this."
                ],
                [
                  "Neuropeptide Y (NPY)",
                  "A **36 amino acid** peptide in **hypothalamus, brainstem, spinal cord** and limbic areas; colocalized with **serotonergic and noradrenergic** neurons",
                  "Regulates **appetite, reward, anxiety, energy balance**; helps **contain** harmful effects of stress. **Reduced** in frontal cortex and caudate of depressed **suicide victims**; **low CSF NPY** in depression. Chronic antidepressants **raise** it in rat neocortex and hippocampus. Soldiers under interrogation stress had **higher plasma NPY**, tracking **dominance and confidence**. A **low NPY stress response** is linked to vulnerability to **depression and PTSD**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Vasopressin receptor map",
              "text": "**V2** acts in the **kidney** (water) and is absent from brain; **V1a** is the main **brain** receptor for behavior; **V1b** is mainly **anterior pituitary**. OT has a **single** receptor."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "NT as a built-in antipsychotic",
              "text": "NT mimics antipsychotics in animal tests, but it acts by **opposing dopamine in the accumbens** through **GABA** neurons, not by **displacing dopamine** from receptors."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Early peptide trial results",
              "text": "A single positive **NK1 antagonist** depression trial was **not replicated**. Treat single-study peptide findings as **provisional**."
            }
          ]
        }
      ]
    },
    {
      "title": "Gaseous transmitters",
      "sections": [
        {
          "id": "s334-no",
          "title": "Novel neurotransmitters: nitric oxide",
          "blocks": [
            {
              "type": "p",
              "text": "Finding that a **gas** can carry signals between neurons showed that brain signaling can be very unusual. **Nitric oxide (NO)** was the **first gas** shown to act as a neurotransmitter, in the **early 1990s**. It breaks almost every rule that classic transmitters follow."
            },
            {
              "type": "table",
              "caption": "Classic transmitter versus nitric oxide (see Figure 33-23)",
              "head": [
                "Feature",
                "Classic transmitter",
                "Nitric oxide"
              ],
              "rows": [
                [
                  "Storage and release",
                  "Packed in and released from synaptic vesicles",
                  "**Not stored in vesicles**; made on demand and simply diffuses out"
                ],
                [
                  "How it reaches the target",
                  "Crosses the synapse to the outer membrane",
                  "**Diffuses freely** through the membrane into the next neuron"
                ],
                [
                  "Target",
                  "A specific receptor on the cell surface",
                  "**Intracellular proteins** (for example the enzyme **guanylyl cyclase**) whose activity it changes directly"
                ],
                [
                  "Removal",
                  "Reuptake or enzyme breakdown",
                  "**No reuptake**; an enzyme that inactivates it is proposed but not proven"
                ],
                [
                  "Lifetime",
                  "Variable",
                  "**Half-life of a few seconds**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "NO was first known outside the brain. Immune cells called **macrophages** release it to **kill bacteria**. Blood vessel lining releases it as the **endothelium-derived relaxing factor** that **widens vessels**. Later work found brain roles in **neurotransmission**, **learning and memory**, **neurogenesis** and **neurodegenerative disease**."
            },
            {
              "type": "steps",
              "title": "How NO signals inside the target neuron (see Figure 33-23)",
              "items": [
                [
                  "Made by an enzyme",
                  "A **nitric oxide synthase (NOS)** enzyme generates the gas in the sending neuron."
                ],
                [
                  "Diffuses",
                  "The gas crosses into a neighboring neuron without any surface receptor."
                ],
                [
                  "Activates guanylyl cyclase",
                  "Inside, it switches on **guanylyl cyclase**, which turns **GTP** into the second messenger **cGMP**."
                ],
                [
                  "Downstream effects",
                  "cGMP partly drives **protein kinases**, **new gene expression**, and shifts in **LTP** and **LTD** (long-term potentiation and depression)."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Atypical transmitter in one line",
              "text": "NO has **no vesicle**, **no surface receptor** and **no reuptake**; it diffuses into the target cell and acts through **guanylyl cyclase and cGMP**."
            },
            {
              "type": "h",
              "text": "Behavior, sexual function and sleep"
            },
            {
              "type": "table",
              "caption": "Mice lacking neuronal NOS (nNOS)",
              "head": [
                "Sex",
                "Behavioral change"
              ],
              "rows": [
                [
                  "Male",
                  "**More aggressive** and **more sexual activity**"
                ],
                [
                  "Female",
                  "**Less aggression** (the opposite pattern)"
                ]
              ],
              "note": "Because mania can bring both **hypersexuality** and **aggression**, the NO pathway may play a part in the psychopathology of mood states. This is a hypothesis drawn from mouse data."
            },
            {
              "type": "steps",
              "title": "Nitric oxide and penile erection (see Figure 33-23)",
              "items": [
                [
                  "Nerve signal",
                  "**nNOS** sits in nerves supplying penile blood vessels, including the **corpus cavernosa**; firing these nerves releases NO."
                ],
                [
                  "Second messenger",
                  "NO raises **cGMP**, which relaxes the vessel wall and dilates it."
                ],
                [
                  "Initial erection",
                  "Engorgement produces the first phase of erection."
                ],
                [
                  "Sustained phase",
                  "**Turbulent blood flow** phosphorylates **eNOS**, keeping NO production going."
                ],
                [
                  "Drug action",
                  "**Sildenafil (Viagra)**, **vardenafil (Levitra)** and **tadalafil (Cialis)** block **phosphodiesterase type 5 (PDE5)**, the enzyme that breaks down penile cGMP, so the NO signal is boosted."
                ]
              ]
            },
            {
              "type": "list",
              "title": "Sleep and wakefulness",
              "items": [
                "Neurons that express nNOS lie in regions that start **REM sleep**: the **pons**, the **dorsal raphe nucleus**, and the **laterodorsal** and **pedunculopontine tegmentum**.",
                "In animals, injecting compounds that **release NO** cut **wakefulness** and raised **slow-wave sleep** against controls.",
                "**NOS inhibitors** tended to lower both slow-wave and REM sleep.",
                "**nNOS-deficient** animals have **less REM sleep**, but mice lacking **inducible NOS (iNOS)** show the **reverse**, so the isoforms seem to interact in a complex way."
              ]
            },
            {
              "type": "h",
              "text": "Mood disorders and schizophrenia"
            },
            {
              "type": "list",
              "title": "Mood disorders",
              "items": [
                "NOS neurons are common in regions tied to depression: the **dorsal raphe nucleus** and the **prefrontal cortex**.",
                "**SSRIs** can **directly inhibit NOS**, hinting that NO shares in antidepressant response.",
                "In the **forced swim test**, **NOS inhibitors** and **soluble guanylyl cyclase inhibitors** produce antidepressant-like effects.",
                "**Bipolar disorder**: plasma NO was **higher** than in healthy controls.",
                "**Depression**: studies found **lower NO** with **higher plasma nitrite**, an NO byproduct.",
                "**Reduced NOS** was reported in the **paraventricular nucleus** in schizophrenia and in depression.",
                "Whether NO controls **serotonin, norepinephrine and dopamine** terminals has **no clear consensus**; it can raise or lower their activity depending on **timing** and **brain region**."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "An SSRI link",
              "text": "SSRIs are usually described by their transporter action, yet they can also **inhibit NOS directly**, one reason NO is studied as part of **antidepressant response**."
            },
            {
              "type": "list",
              "title": "Schizophrenia",
              "items": [
                "**Two genetic studies** found schizophrenia-linked **SNPs** in **CAPON**, a protein that binds nNOS.",
                "SNPs in **nNOS itself** were also linked, but **other groups could not replicate** this.",
                "Postmortem NOS changes appear in **cortex, cerebellum, hypothalamus and brainstem**, with **no consistent direction**.",
                "**Platelets** from both **drug-naive** and **treated** patients show **raised NOS activity**; studies of NO activity disagree (some higher, some lower).",
                "Autopsies show NOS neurons **misplaced** in the **hippocampus**, **prefrontal cortex** and **lateral temporal lobe**, which fits **abnormal neuronal migration** in development.",
                "In rats, **prenatal stress** reduced NOS neurons in the **fascia dentata** (printed as \"fascia dentate\") and hippocampus."
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Mixed findings",
              "text": "NO findings in schizophrenia and mood disorders are **inconsistent** (unreplicated SNPs, opposite directions of change). Treat them as **leads, not established mechanisms**."
            },
            {
              "type": "h",
              "text": "Nitric oxide in neuropathology"
            },
            {
              "type": "steps",
              "title": "How NO damages cells",
              "items": [
                [
                  "Peroxynitrite",
                  "**Superoxide**, a normal metabolic byproduct, combines with NO to make **peroxynitrite (ONOO-)**, an unstable toxic molecule."
                ],
                [
                  "Protein nitration",
                  "Peroxynitrite attaches to **tyrosine** residues of proteins (**protein nitration**) and also to **DNA**, so cells malfunction."
                ],
                [
                  "Excitotoxicity",
                  "In **ischemic stroke**, overdriven **NMDA receptors** kill neurons; NO made after NMDA activation seems to carry much of this death, and **mice lacking nNOS** have **smaller stroke damage**."
                ]
              ]
            },
            {
              "type": "defs",
              "title": "S-nitrosylation in neurodegeneration",
              "items": [
                [
                  "Parkin (Parkinson disease)",
                  "An **E3 ubiquitin ligase** that tags proteins with ubiquitin for the **proteasome**. Its **mutations** cause **early-onset** disease. In **sporadic** Parkinson disease, NO can **nitrosylate Parkin** and block its protective role, which may favor death of **dopaminergic neurons**."
                ],
                [
                  "Protein disulfide isomerase (PDI)",
                  "A protective protein that may help clear **misfolded proteins** such as amyloid fibrils. In **both Alzheimer and Parkinson disease**, PDI appears harmfully **S-nitrosylated**, which blunts its protection."
                ],
                [
                  "Alzheimer disease",
                  "Oxidation of brain proteins, lipids and carbohydrates is long known; **nitrosative stress** from excess NO also seems to take part."
                ]
              ]
            },
            {
              "type": "p",
              "text": "These findings suggest two goals: **earlier diagnosis** by detecting NO damage before full symptoms, and drugs that **protect key neuronal proteins**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Why not just block NOS?",
              "text": "NOS works all over the body, so **blanket, nonspecific** inhibition or stimulation is likely to cause **significant side effects**."
            }
          ]
        },
        {
          "id": "s334-co",
          "title": "Carbon monoxide",
          "blocks": [
            {
              "type": "p",
              "text": "**Carbon monoxide (CO)** is best known as a **combustion pollutant**, yet many organisms, from **bacteria to humans**, make it on purpose. Once seen as a toxic leftover of metabolism, it is now viewed as a regulator of many processes in brain and body."
            },
            {
              "type": "list",
              "title": "Physiologic roles",
              "items": [
                "Regulates **olfactory neurotransmission**.",
                "**Relaxes blood vessels**.",
                "Affects **smooth muscle cell proliferation**.",
                "Affects **platelet aggregation**."
              ]
            },
            {
              "type": "h",
              "text": "Toxicity"
            },
            {
              "type": "p",
              "text": "CO grips the **heme** in hemoglobin, forming **carboxyhemoglobin**, which cannot carry oxygen. Its affinity for hemoglobin is **higher than that of oxygen**."
            },
            {
              "type": "table",
              "caption": "Carboxyhemoglobin levels and what they mean",
              "head": [
                "Situation",
                "Carboxyhemoglobin",
                "Meaning"
              ],
              "rows": [
                [
                  "Nonsmoker",
                  "**Below 2%**",
                  "Baseline"
                ],
                [
                  "Smoker of **1 to 2 packs a day**",
                  "**3% to 8%**",
                  "Typical chronic level"
                ],
                [
                  "Acute poisoning",
                  "**5% to 10%**",
                  "**Impaired alertness and cognition**"
                ],
                [
                  "Acute poisoning",
                  "**30% to 50%**",
                  "**Large fall in oxygen delivery** to tissues"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Know the numbers",
              "text": "Nonsmokers carry **under 2 percent** carboxyhemoglobin; heavy smokers **3 to 8 percent**. After acute exposure, **5 to 10 percent** dulls alertness and thinking, and **30 to 50 percent** sharply cuts tissue oxygen."
            },
            {
              "type": "steps",
              "title": "Making carbon monoxide (see Figure 33-24)",
              "items": [
                [
                  "Heme oxygenase",
                  "The enzyme **heme oxygenase (HO)** breaks down **heme**, giving **CO**, **biliverdin** and **free iron (Fe)**."
                ],
                [
                  "Bilirubin",
                  "**Biliverdin reductase** turns biliverdin into **bilirubin**, which may be an important **antioxidant** rather than mere waste."
                ],
                [
                  "Diffusion",
                  "Like NO, CO is **not stored in vesicles** and crosses membranes freely."
                ],
                [
                  "Signaling",
                  "CO activates **soluble guanylyl cyclase** and other messengers such as **p38 MAP kinase**, at levels **far below** those that cause toxicity."
                ]
              ]
            },
            {
              "type": "p",
              "text": "There are **two distinct heme oxygenase enzymes**, and **one is found mainly in the brain**, which underlines the pathway's importance in neurons. The text names them **HO1** and **HO2**."
            },
            {
              "type": "table",
              "caption": "Carbon monoxide in neurotransmission",
              "head": [
                "System",
                "Finding"
              ],
              "rows": [
                [
                  "Smell",
                  "Odorants trigger CO and then **cGMP**, which supports **long-term adaptation to odors**. Wider effects on perception and cognition are **untested**."
                ],
                [
                  "Rat retina",
                  "Long **light exposure** raised **HO1**, CO and cGMP signaling."
                ],
                [
                  "Chronic pain",
                  "**HO2-deficient** animals show **less hyperalgesia and allodynia**; CO may **set the pain threshold**, but whether centrally or peripherally is **unclear**."
                ],
                [
                  "Ion channel",
                  "CO may **bind and open** the **BKCa** channel (a calcium-activated big potassium channel), with effects not yet characterized."
                ],
                [
                  "Gut",
                  "CO **relaxes the internal anal sphincter** after **VIP** (vasoactive intestinal peptide) and **NANC** (nonadrenergic noncholinergic) nerve stimulation."
                ],
                [
                  "Carotid body",
                  "**Glomus cells** use **oxygen** as HO's substrate to make CO; when oxygen falls, CO falls, **resetting the oxygen-sensing threshold**, possibly through the carotid body **BK channel**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Toxin and sensor",
              "text": "The same gas that blocks oxygen transport at toxic levels helps the **carotid body sense oxygen** at physiologic levels, because HO needs **oxygen** to make CO."
            },
            {
              "type": "table",
              "caption": "Carbon monoxide and hippocampal LTP: conflicting evidence",
              "head": [
                "Supports a role",
                "Argues against"
              ],
              "rows": [
                [
                  "CO plus **tetanic stimulation** raises **EPSPs**.",
                  "**HO2-deficient** animals show **no change in LTP**."
                ],
                [
                  "**HO inhibitors** impair **LTP induction** and lower **calcium-dependent glutamate release**.",
                  "Possible explanations: **HO1** may be the relevant enzyme, or HO inhibitors may **nonspecifically** block other steps needed for LTP."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Unsettled evidence",
              "text": "CO's role in **LTP** rests on **contradictory** results; do not state it as proven."
            }
          ]
        }
      ]
    },
    {
      "title": "Endocannabinoids",
      "sections": [
        {
          "id": "s334-ecb",
          "title": "Endocannabinoids: from marijuana to neurotransmission",
          "blocks": [
            {
              "type": "p",
              "text": "Cannabis, also called **hemp**, **hashish** or **ma-fen**, has been grown and used for **thousands of years**, and its risks and benefits are long argued. Only in **recent decades** have we learned how it acts. The \"high\" of **euphoria** and **tranquility** arises because the drug taps a pathway run by the brain's own cannabinoids, the **endocannabinoids**."
            },
            {
              "type": "p",
              "text": "Medical use is first recorded around **2700 BC**: Chinese Emperor **Shen Nung** listed it in his pharmacopeia for many ailments. Harms were known too: big amounts of hemp fruit could make a user see **devils** or feel in touch with **spirits**. **India** used it for centuries to **stimulate appetite**, today's **\"munchies\"**. Chemists long struggled to isolate the psychoactive **cannabinoids** from the plant oil."
            },
            {
              "type": "table",
              "caption": "Milestones in cannabinoid research (see Table 33-5)",
              "head": [
                "Year",
                "Milestone"
              ],
              "rows": [
                [
                  "**1899**",
                  "**Cannabinol** isolated from resin"
                ],
                [
                  "**1940**",
                  "Cannabinol structure solved"
                ],
                [
                  "**1964**",
                  "Structure of **delta-9-tetrahydrocannabinol (THC)**, the chief psychoactive compound"
                ],
                [
                  "**1988**",
                  "Specific THC **binding sites** found in brain"
                ],
                [
                  "**1990**",
                  "Brain receptor **CB1** identified"
                ],
                [
                  "**1992**",
                  "First brain endocannabinoid, **anandamide**"
                ],
                [
                  "**1993**",
                  "Second receptor, **CB2**"
                ],
                [
                  "**1994**",
                  "CB1 blocker **rimonabant (Acomplia)** developed"
                ],
                [
                  "**1995**",
                  "Second endocannabinoid, **2-AG**"
                ],
                [
                  "**1996**",
                  "Degrading enzyme **FAAH** (fatty acid amide hydrolase) discovered"
                ],
                [
                  "**2003**",
                  "FAAH inhibitors ease **anxiety-like behavior** in animals; **synthesizing** enzymes identified"
                ],
                [
                  "**2006**",
                  "Second degrading enzyme **MAGL** (monoacylglycerol lipase) found; rimonabant approved in **Europe** for **weight loss**"
                ],
                [
                  "**2007**",
                  "Meta-analysis: rimonabant raises **anxiety** and **depressive** symptoms in people with no psychiatric history"
                ]
              ],
              "note": "Adapted from the Comprehensive Textbook of Psychiatry, 9th ed. (2009)."
            },
            {
              "type": "h",
              "text": "Finding the receptor"
            },
            {
              "type": "p",
              "text": "One joint delivers an estimated **20 to 80 µg** of THC to the brain, close to the roughly **100 to 200 µg** of **norepinephrine** in the entire brain, so a transmitter-like action was plausible. In the **1960s** one camp held that THC had **no specific receptor** and acted like **inhaled volatile anesthetics** on membranes or many receptors. The other camp held that a **specific receptor** existed but was hard to find because cannabinoids are so **lipophilic**. New, more **water-soluble** cannabinoids settled it, revealing **CB1** in the **late 1980s**."
            },
            {
              "type": "table",
              "caption": "Endocannabinoids and receptor preference (Fig. 33-25)",
              "head": [
                "Endocannabinoid",
                "Preference"
              ],
              "rows": [
                [
                  "**Anandamide**",
                  "Most **CB1-selective**"
                ],
                [
                  "**N-arachidonyldopamine (NADA)**",
                  "CB1, second to anandamide"
                ],
                [
                  "**Noladin ether** (2-arachidonoylglycerol ether)",
                  "CB1, after NADA"
                ],
                [
                  "**Virodhamine**",
                  "Favors **CB2**; **partial agonist** at CB1"
                ],
                [
                  "**2-arachidonylglycerol (2-AG)**",
                  "**No preference** between CB1 and CB2"
                ]
              ],
              "note": "At least five exist; all come from **arachidonic acid**, an omega-6 fat that also feeds **prostaglandin** and **leukotriene** synthesis."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Who binds what",
              "text": "**Anandamide** is the most CB1-selective; **virodhamine** leans to CB2; **2-AG** binds both equally."
            },
            {
              "type": "h",
              "text": "Synthesis and inactivation"
            },
            {
              "type": "steps",
              "title": "Making anandamide (Fig. 33-26)",
              "items": [
                [
                  "Step 1",
                  "**NAT** shifts an arachidonic acid chain from a membrane phospholipid onto **phosphatidylethanolamine (PE)**, giving **NAPE**"
                ],
                [
                  "Step 2",
                  "**NAPE-PLD** converts NAPE to **anandamide**; NAPE is already normal in membranes, so this **second step** is the key one for signaling"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Endocannabinoids are **not stored in vesicles**; like the **gaseous transmitters** they are made **on demand**. A transmitter must be released by **depolarization**: here depolarization raises **calcium**, which partly acts by activating **NAPE-PLD** and **DAGL**. Because they are **lipophilic** and dissolve poorly in **CSF**, a dedicated **transporter** across the cleft is **hypothesized**."
            },
            {
              "type": "table",
              "caption": "Anandamide versus 2-AG (Fig. 33-26)",
              "head": [
                "Feature",
                "Anandamide",
                "2-AG"
              ],
              "rows": [
                [
                  "Made by",
                  "**NAT**, then **NAPE-PLD**",
                  "**PLC**, then **DAGL**"
                ],
                [
                  "Broken down by",
                  "**FAAH**, into **arachidonic acid** and **ethanolamine**",
                  "**MAGL**, and also FAAH"
                ],
                [
                  "Site of breakdown",
                  "**Postsynaptic** neuron, where it is made",
                  "Mainly **presynaptic** neuron"
                ],
                [
                  "FAAH knockout mice",
                  "About **15-fold** higher",
                  "**Not raised**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Most transmitters are cleared by **reuptake** or a specific enzyme, as **acetylcholinesterase** clears acetylcholine. FAAH lies in **CB1-rich** regions, and its fast action partly explains why anandamide is **weaker than THC**. FAAH knockouts respond **more** to injected anandamide. Drug **FAAH inhibitors** relieve **pain** and **anxiety** in animals without THC's **immobility**, **low body temperature** or **hunger**, a strategy like **MAOIs** (which spare **serotonin** and other monoamines) and **COMT inhibitors** (which spare **dopamine** and other catecholamines)."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Boost the brain's own signal",
              "text": "An FAAH inhibitor raises anandamide only where it is being released, rather than hitting every receptor as THC does, which may be why animals got **analgesia** and **calm** without THC's side effects."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Enzyme names",
              "text": "The prose expands NAT as N-acetyltransferase while the Figure 33-26 legend says **N-acyltransferase**, and NAPE-PLD is misprinted once as NAPD-PLD. Use **NAT** and **NAPE-PLD**. The transporter remains a **hypothesis**."
            },
            {
              "type": "h",
              "text": "Cannabinoid receptors"
            },
            {
              "type": "table",
              "caption": "CB1 versus CB2",
              "head": [
                "Feature",
                "CB1",
                "CB2"
              ],
              "rows": [
                [
                  "Main home",
                  "Brain; perhaps its commonest **G-protein–coupled receptor**",
                  "Immune **white blood cells**"
                ],
                [
                  "Brain sites",
                  "Densest in **cerebellum**, **basal ganglia**, **hypothalamus**, **hippocampus**, **anterior cingulate** and cerebral (especially **frontal**) cortex",
                  "Small amounts in **brainstem**"
                ],
                [
                  "Place on neuron",
                  "**Presynaptic**: axons and terminals, little on dendrites or soma",
                  "Not described"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Large THC doses cause **catalepsy**: scant spontaneous movement and freezing in odd poses. Cannabinoid action in **basal ganglia** and **cerebellum** may underlie it, which **may** bear on **catatonia** in **schizophrenia**."
            },
            {
              "type": "steps",
              "title": "Retrograde signaling (Fig. 33-26)",
              "items": [
                [
                  "Release",
                  "The **postsynaptic** neuron makes anandamide and 2-AG on demand"
                ],
                [
                  "Action",
                  "They cross back to **presynaptic CB1**, usually **suppressing** release (sometimes **activating** the neuron)"
                ],
                [
                  "Clearance",
                  "**MAGL** presynaptically (2-AG); **FAAH** postsynaptically (anandamide)"
                ]
              ]
            },
            {
              "type": "list",
              "title": "CB1 signaling",
              "items": [
                "**G-protein** coupling that **inhibits adenylyl cyclase**, lowering **cAMP**",
                "Opens **potassium channels**; blocks **N-type calcium channels**, which can stop release",
                "Activates **mitogen-activated protein kinases**"
              ]
            },
            {
              "type": "p",
              "text": "In cultures and slices, cannabinoids block **GABA**, **norepinephrine** and **acetylcholine** release. Silencing the excitatory pair should **quiet** circuits; silencing inhibitory GABA should **excite** them, so effects **depend on context**. Cannabinoids also seem to raise **endorphin** release and accumbens **dopamine** release, relevant to **reward**, **addiction** and **learning**, and take part in **LTP** and **LTD**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Retrograde messenger",
              "text": "Made **postsynaptically**, acting on **presynaptic** CB1, endocannabinoids usually **reduce** transmitter release."
            },
            {
              "type": "update",
              "year": 2009,
              "title": "What happened to rimonabant",
              "text": "Table 33-5 ends with rimonabant approved in Europe for weight loss (2006) and a 2007 meta-analysis showing more anxiety and depression. In **October 2008** the European Medicines Agency recommended **suspending** rimonabant (Acomplia) because post-marketing data and ongoing trials showed **serious psychiatric disorders**, including depression and suicidality, were more common than first thought; the risk of psychiatric disorders was roughly **doubled**. The manufacturer stopped sales worldwide in November 2008 and the European authorization was withdrawn in **January 2009**. Rimonabant was **never approved in the United States**. Other CB1 blockers in development were stopped for the same reason. The episode is direct human evidence that CB1 signaling helps regulate mood. **Sibutramine** (Meridia), the comparator weight-loss drug the chapter mentions, was also withdrawn: the EMA suspended it in **January 2010** and the FDA requested its US withdrawal on **October 8, 2010**, after the SCOUT trial showed a **16 percent** higher risk of heart attack, stroke, resuscitated cardiac arrest or cardiovascular death.",
              "source": "European Medicines Agency recommends suspension of the marketing authorisation of Acomplia (rimonabant), October 2008; Meridia (sibutramine) market withdrawal due to risk of serious cardiovascular events, FDA, October 2010"
            }
          ]
        },
        {
          "id": "s334-ecbcl",
          "title": "Endocannabinoids in illness, the periphery and nonpsychoactive cannabinoids",
          "blocks": [
            {
              "type": "h",
              "text": "Anxiety and mood"
            },
            {
              "type": "p",
              "text": "This system **may** be a key **anxiety** regulator, and users often describe THC as **calming**. In animals, **losing** the signal favors anxiety-like states: **CB1-deficient** animals grow more anxious under **stress** or in **unfamiliar** places. The pathway may therefore help explain **posttraumatic stress** responses and **phobias**. Levels cannot yet be measured **safely** in people, but trials of the CB1 blocker **rimonabant (Acomplia)** support the model, since a **frequent** side effect is **increased anxiety and depression**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Blocking CB1 can unmask anxiety and depression",
              "text": "In the chapter, **rimonabant** commonly raised **anxiety** and **depression**, and a **2007** meta-analysis found this even in people with **no psychiatric history** (Table 33-5). The chapter reads this side effect as support for a calming role of normal endocannabinoid signaling."
            },
            {
              "type": "h",
              "text": "Addiction"
            },
            {
              "type": "list",
              "title": "Animal and human findings on addiction",
              "items": [
                "**CB1-deficient mice** ignore cannabinoids and also show **less opiate addiction and withdrawal**",
                "Cannabinoid-driven **dopamine** release in the **nucleus accumbens** needs **µ-opioid receptors**: blocking them prevents it",
                "**Alcohol-preferring rats** have **lower FAAH activity**, implying more cannabinoid signaling",
                "In those rats, **CB1 antagonists** cut drinking, while **FAAH inhibition** increases it",
                "**CB1-deficient** animals also drink **less alcohol**",
                "In humans, a **single amino acid change** in **FAAH** is linked to **drug abuse**; the variant enzyme is **less stable** than the normal one"
              ]
            },
            {
              "type": "h",
              "text": "Psychosis"
            },
            {
              "type": "p",
              "text": "**Heavy** cannabis use can bring on psychotic symptoms in people with no psychiatric past. Whether the drug alone does this, or a **hidden vulnerability** is unmasked, is **unclear**. In schizophrenia, cannabis frequently makes psychosis **worse**, and heavy use is **associated** with later onset of the illness. **Some** argue the link reflects **earlier onset** in people who would have become ill anyway. Either way, because cannabinoid signaling seems to **raise dopamine release**, the system matters for schizophrenia, and **D2 antagonists** will likely stay part of treatment for some time."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Cannabis and psychosis: hold both views",
              "text": "The chapter leaves open whether heavy use **causes** psychosis or **speeds onset** in people already destined to develop schizophrenia. What it does state is that use often **worsens** existing schizophrenia."
            },
            {
              "type": "h",
              "text": "Feeding"
            },
            {
              "type": "p",
              "text": "The **munchies** may depend on **hypothalamic CB1** receptors. Food-deprived animals show rising endocannabinoids in the **hypothalamus** and **limbic system**. **CB1-deficient mice** resist **obesity** on a **high-fat** diet, and rimonabant seems to aid weight loss by blocking cannabinoid signaling."
            },
            {
              "type": "table",
              "caption": "Weight-loss results reported for rimonabant",
              "head": [
                "Study",
                "Result"
              ],
              "rows": [
                [
                  "One-year trial, over **3,000** obese patients",
                  "**6.3 kg** lost on rimonabant versus **1.6 kg** on placebo; **nausea** the most common side effect"
                ],
                [
                  "**2007** meta-analysis",
                  "Rimonabant **4.7 kg**, versus **4.2 kg** for **sibutramine** and **2.9 kg** for **orlistat**"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Brain injury and pain"
            },
            {
              "type": "list",
              "title": "Neuroprotection findings",
              "items": [
                "In mouse **traumatic brain injury**, **2-AG** reduces **edema**, **infarct size** and **cell death** and improves function",
                "**Anandamide** was protective in an **MS** model, and people with MS produce **more anandamide**",
                "The cannabinoid agonist **HU-211** gave **faster recovery** after **head trauma** in a study",
                "Blocking **FAAH** eased **motor** signs in mice modeling **Parkinson disease**, likely through more **dopamine** transmission"
              ]
            },
            {
              "type": "p",
              "text": "Evidence keeps growing that this system shapes **pain**. THC and cannabinoid agonists work in animals with **acute** and **chronic** pain, from **burns** to **nerve damage** and **inflammation**. **CB1** is essential: the effect disappears when **rimonabant** is given and in **CB1-deficient** mice. Stress dulls pain, as in wounded **soldiers** who bear injuries remarkably well: **stress-induced analgesia**. Stressed animals make **anandamide** and **2-AG**, and **rimonabant** blocks the analgesia."
            },
            {
              "type": "table",
              "caption": "Cannabinoid and opioid analgesia: cross-blocking in animals",
              "head": [
                "Blocker",
                "Effect on cannabinoid analgesia",
                "Effect on morphine analgesia"
              ],
              "rows": [
                [
                  "**Rimonabant** (CB1 blocker)",
                  "**Weakens** it",
                  "**Partial** block only"
                ],
                [
                  "**Naloxone (Narcan)** (opiate receptor blocker)",
                  "**Partial** block",
                  "**Blocks** it"
                ]
              ],
              "note": "The two systems are distinct but may share pathways; combining cannabinoid and opiate drugs gives **synergistic** analgesia in animals."
            },
            {
              "type": "p",
              "text": "Cannabinoids were first assumed to relieve pain through the CNS, but **local** application also works in animals, including **CB2-selective** drugs, even though CB2 is scarce in the CNS. Endocannabinoids can also bypass CB1 and CB2. **Anandamide** and **NADA** activate the **vanilloid receptor (TRPV-1)**, a calcium channel on **sensory nerves** that **capsaicin** from **chili peppers** also opens. So endocannabinoids can **relieve** pain through CB1 and CB2 yet **possibly increase** it through **TRP channels**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Opposing pain effects",
              "text": "Through **CB1 and CB2** endocannabinoids are **analgesic**; through **TRPV-1**, the **capsaicin** receptor activated by **anandamide** and **NADA**, they may **promote** pain."
            },
            {
              "type": "p",
              "text": "New cannabinoid drugs might target single symptoms without THC's full profile. **Ajulemic acid** is **analgesic** and **anti-inflammatory** with possibly **limited psychoactive** effects; in a randomized trial, **Mathias Karst** and colleagues found it reduced **chronic neuropathic pain**."
            },
            {
              "type": "h",
              "text": "Effects in the periphery"
            },
            {
              "type": "defs",
              "items": [
                [
                  "Blood vessels",
                  "Local **CB1** receptors directly **relax vascular smooth muscle**"
                ],
                [
                  "Eyes",
                  "Vasodilation in the **conjunctiva** gives a **bloodshot** look; relaxing ocular arteries **may** help **glaucoma** (high **intraocular pressure**)"
                ],
                [
                  "Kidney",
                  "CB1 activation can **improve renal blood flow**"
                ],
                [
                  "Blood pressure",
                  "A general role is **unproven**; pressure is **unchanged** with rimonabant or in CB1-deficient animals"
                ],
                [
                  "Pregnancy",
                  "**CB1-deficient mice** keep many embryos in the **oviduct**, hinting at relevance to **ectopic pregnancy**"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Nonpsychoactive cannabinoids"
            },
            {
              "type": "p",
              "text": "THC is the main **psychoactive** compound, but many **nonpsychoactive** plant cannabinoids are also of interest and may regulate transmission."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Cannabidiol",
                  "May be therapeutic; seems to stimulate **TRPV-1** and affect endocannabinoid **degradation**; protective in mice with **inflammatory arthritis**; **purified** cannabidiol may have **antipsychotic** action, though results are **mixed**"
                ],
                [
                  "Tetrahydrocannabivarin",
                  "Plant cannabinoid that **antagonizes CB1**; a candidate **marker** of **plant cannabis** use, since prescription THC contains **none**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Cannabidiol is not cannabis",
              "text": "Any antipsychotic promise belongs to **purified cannabidiol**. Smoking or eating the **whole plant** usually **worsens** schizophrenia because of its **THC**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Telling plant cannabis from prescribed THC",
              "text": "Finding **tetrahydrocannabivarin** points to **plant-derived** cannabis, because pharmaceutical THC has none of it."
            },
            {
              "type": "update",
              "year": 2018,
              "title": "Cannabidiol became an approved drug",
              "text": "The chapter notes that cannabidiol (CBD) may have therapeutic effects without psychoactivity. On **June 25, 2018** the FDA approved **Epidiolex**, a purified **cannabidiol** oral solution, for seizures of **Lennox-Gastaut syndrome** and **Dravet syndrome** in patients aged **2 years and older**, based on three randomized placebo-controlled trials in 516 patients. It was the first FDA-approved drug made from a purified substance derived from marijuana. CBD does **not** cause the high produced by THC. Its label lists sleepiness and sedation, decreased appetite, diarrhea and **raised liver enzymes**. The FDA warned that unapproved CBD products sold with medical claims are not the same as the tested drug.",
              "source": "FDA approves first drug comprised of an active ingredient derived from marijuana (Epidiolex), June 2018"
            }
          ]
        }
      ]
    },
    {
      "title": "Eicosanoids and neurosteroids",
      "sections": [
        {
          "id": "s334-eico",
          "title": "Eicosanoids: omega-3 fatty acids in psychiatry",
          "blocks": [
            {
              "type": "p",
              "text": "This part of the chapter covers dietary fatty acids sold as supplements. The named **omega-3 fatty acids** are **eicosapentaenoic acid (EPA)**, **docosahexaenoic acid (DHA)** and the EPA ester **ethyl-eicosapentaenoic acid (E-EPA)**. Clinical reports suggest they may ease **depression**, **schizophrenia**, **bipolar illness** and **cognitive impairment**. In children, DHA and EPA may lessen **behavioral outbursts** and improve **attention**."
            },
            {
              "type": "h",
              "text": "Chemistry"
            },
            {
              "type": "p",
              "text": "Essential fatty acids are **polyunsaturated** fats. The chapter defines them by a carbon to carbon double bond **three carbons in from the methyl end** of the chain. They are called essential because the body **cannot make them de novo**, unlike saturated and monounsaturated fats; they must come from **dietary fats and oils**."
            },
            {
              "type": "defs",
              "title": "Key fatty acid terms",
              "items": [
                [
                  "Linoleic acid (LA)",
                  "Parent compound of the **omega-6** family."
                ],
                [
                  "Alpha-linolenic acid (ALA)",
                  "Parent compound of the **omega-3** family."
                ],
                [
                  "Shared enzymes",
                  "Omega-3 and omega-6 families rely on **one shared set of enzymes** for desaturation and elongation, so they compete."
                ],
                [
                  "Primary source",
                  "**Algae and plankton** make omega-3 fatty acids; fish that eat them (**herring, salmon, mackerel, anchovy**) become rich dietary sources."
                ],
                [
                  "EPA and DHA",
                  "Highly unsaturated omega-3 chains held in the cell membrane by **phospholipids**; important for **membrane signaling**. The chapter lists them as having 6 and 5 double bonds, in that order."
                ],
                [
                  "Arachidonic acid",
                  "An **omega-6** fatty acid with pro-excitatory and pro-stress effects in the brain (see below)."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Check the double-bond count",
              "text": "The chapter gives EPA **6** and DHA **5** double bonds. Standard chemistry usually gives these the other way round, so verify before you memorize this pairing."
            },
            {
              "type": "h",
              "text": "Effects on organs and systems"
            },
            {
              "type": "p",
              "text": "The strongest evidence for fatty acid supplements is **cardiovascular**. Human trials show omega-3s **lower blood pressure**, **reduce recurrent myocardial infarction** and **lower triglycerides**. They also raise **cerebral blood flow**, reduce **platelet aggregation** and slow **atherosclerosis**. Within the nervous system they are built into the membranes of **neurons, immune cells and glia**, and are concentrated in **neuronal membranes**."
            },
            {
              "type": "table",
              "caption": "Omega-6 versus omega-3 actions described in the chapter",
              "head": [
                "Family",
                "Reported effects"
              ],
              "rows": [
                [
                  "Omega-6 (general)",
                  "Reported to lessen **inflammation** and **neuronal apoptosis**; decrease **phosphatidylinositol** second messenger activity"
                ],
                [
                  "Omega-6 arachidonic acid",
                  "Enhances **glutamate** transmission; stimulates **stress hormone** release; triggers **glial activation** during oxidative toxicity and neurodegeneration"
                ],
                [
                  "Omega-3 (DHA, EPA)",
                  "Seem to **shield neurons** against oxidative and inflammatory injury; suggested to alter **gene expression**"
                ],
                [
                  "Omega-3 in cell culture",
                  "Raise **serotonin**, enhance **dopamine**, regulate **CRF**"
                ],
                [
                  "EPA in rodent depression models",
                  "Chronic EPA **normalized open field behavior**; raised **serotonin and norepinephrine** in limbic areas"
                ],
                [
                  "Omega-3-poor diet in mice",
                  "Poorer **memory**, altered **learning**, more **behavior problems**"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Therapeutic indications"
            },
            {
              "type": "list",
              "title": "Mood disorders: the epidemiologic basis",
              "items": [
                "Fish intake shows a **negative correlation** with depressive symptoms.",
                "Countries eating less fish per person had up to **60 times** more major depression, postpartum depression and bipolar disorder.",
                "**Iceland and Japan** have low **seasonal affective disorder** rates, lower than latitude would predict; observational studies tied this to dietary fatty acids.",
                "In **Norway**, **cod liver oil** use was tied to fewer depressive symptoms.",
                "Depression after **myocardial infarction** is marked by a raised **arachidonic acid to EPA ratio**.",
                "Postmortem brains in major depressive disorder show less **DHA** in the **orbitofrontal cortex**."
              ]
            },
            {
              "type": "steps",
              "title": "Omega-3 trials in mood disorders, in the order reported",
              "items": [
                [
                  "First randomized controlled pilot",
                  "Omega-3 added to **lithium (Eskalith)** or **valproic acid (Depakene)** in bipolar and unipolar depression: better **Hamilton Depression Scale** scores and **longer remission** than placebo."
                ],
                [
                  "Larger follow-up study",
                  "Supported benefit of **E-EPA** in **bipolar illness**."
                ],
                [
                  "Bipolar or rapid-cycling trial",
                  "E-EPA showed **no significant difference** from placebo on any outcome; **bleeding time rose** in the treated group."
                ],
                [
                  "Current gap",
                  "**No data on monotherapy** for bipolar illness or depression."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Adjunct, not monotherapy",
              "text": "In mood disorders, omega-3 evidence is for **add-on** use with lithium or valproate. There are **no monotherapy data**, and results are **mixed**."
            },
            {
              "type": "list",
              "title": "Other indications",
              "items": [
                "**Early brain development** gives the most convincing evidence: mothers eating **DHA-rich** food in pregnancy had infants with better **problem solving**, though not clearly better **memory**. DHA in pregnancy is also tied to **visual acuity** and eye development.",
                "**Prisoners in England** eating more omega-3 seafood had fewer **assaults**; a **Finnish** study found **lower omega-3** levels in violent than in nonviolent offenders.",
                "**Schizophrenia**: omega-3s may improve **negative and psychotic** symptoms; **haloperidol (Haldol)** seems to cause fewer **extrapyramidal side effects** when given with antioxidants and omega-3s."
              ]
            },
            {
              "type": "table",
              "caption": "Dementia cohort studies compared",
              "head": [
                "Study",
                "Design",
                "Finding"
              ],
              "rows": [
                [
                  "Rotterdam study",
                  "Long-term cohort, **over 5,300** patients",
                  "Fish intake at first looked **inversely related** to new dementia; a later analysis at **6 years** found low omega-3 intake was **not associated** with higher dementia risk"
                ],
                [
                  "Zutphen study (Netherlands)",
                  "Follow-up at **3 years** and after **5 years**",
                  "High fish intake **inversely related** to **cognitive decline**"
                ]
              ],
              "note": "EPA and DHA are linked with fewer new dementia cases, but well-designed trials are still needed before omega-3s can be recommended to prevent cognitive impairment."
            },
            {
              "type": "h",
              "text": "Precautions and adverse reactions"
            },
            {
              "type": "list",
              "items": [
                "Main risk: **bleeding**.",
                "Dietary sources may carry **heavy metals**.",
                "Capsules have **no standard preparation**.",
                "Studies used varied amounts, and evidence on the right amount and **guidelines** is **almost nonexistent**.",
                "**Treatment length** is not yet defined."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Ask about supplements and bleeding",
              "text": "A patient taking fish oil who has a raised **bleeding time** fits the chapter's main warning. Ask about supplements during medication review, especially before procedures."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Observational is not proof",
              "text": "Much of the mood and dementia support is **epidemiologic or observational**, and the Rotterdam follow-up did not confirm its early signal. Present omega-3s as **promising but unproven**."
            },
            {
              "type": "update",
              "year": 2026,
              "title": "Correction: omega-3 fatty acid structure",
              "text": "The chapter swaps the double-bond counts of the two marine omega-3 fatty acids. **EPA (eicosapentaenoic acid)** has **20 carbons and 5 double bonds** (20:5 n-3) and **DHA (docosahexaenoic acid)** has **22 carbons and 6 double bonds** (22:6 n-3); the plant omega-3 **ALA** has 18 carbons and 3 double bonds and can be converted, inefficiently, to EPA and then DHA. \"Omega-3\" means the first double bond lies **3 carbons from the methyl end**; omega-6 fatty acids, such as **arachidonic acid**, the precursor of the classic prostaglandins, have it 6 carbons from the end. DHA is especially abundant in the brain.",
              "source": "Omega-3 fatty acids: ALA 18:3, EPA 20:5 and DHA 22:6 (NIH Office of Dietary Supplements)"
            }
          ]
        },
        {
          "id": "s334-nster",
          "title": "Neurosteroids: background, neuroprotection and mental illness",
          "blocks": [
            {
              "type": "p",
              "text": "**Neurosteroids** are made in the brain from **cholesterol**, independent of steroid production in the **adrenals and gonads**. A chain of enzyme steps run by **cytochrome P450 (CYP)** enzymes and by other (**non-CYP**) enzymes, inside or outside the **mitochondria**, produces them in several cell types of the **CNS and PNS**."
            },
            {
              "type": "p",
              "text": "Newer work shows they can act by a **nongenomic** route, changing neuronal excitability through **neurotransmitter-gated ion channels**. Their receptors sit in the **nucleus, membrane or microtubules**. Steroids and neurosteroids can share **nuclear receptors**, but neurosteroids differ in **topologic distribution** and **regional synthesis**."
            },
            {
              "type": "table",
              "caption": "Named neurosteroids and their main actions",
              "head": [
                "Neurosteroid",
                "Main action in the chapter"
              ],
              "rows": [
                [
                  "Allopregnanolone (3-alpha,5-alpha-tetrahydroprogesterone)",
                  "Acts mainly at the **GABA-A** receptor"
                ],
                [
                  "Pregnanolone (abbreviated PREG in the chapter)",
                  "Acts mainly at **GABA-A**"
                ],
                [
                  "Tetrahydrodeoxycorticosterone (THDOC)",
                  "Acts mainly at **GABA-A**"
                ],
                [
                  "DHEA-S",
                  "**Most prevalent** neurosteroid; **noncompetitive modulator** of GABA"
                ],
                [
                  "DHEA",
                  "Precursor of DHEA-S; also **inhibitory** effects at the GABA receptor"
                ],
                [
                  "Progesterone",
                  "Counted as a neurosteroid; regulates **gene expression** at progesterone receptors"
                ]
              ]
            },
            {
              "type": "p",
              "text": "The best-known target is the **GABA-A receptor**. Some neurosteroids also act at **NMDA, AMPA and kainate** glutamate receptors, plus **serotonin**, **glycine**, **sigma type-1** and **nicotinic** cholinergic receptors."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Most prevalent neurosteroid",
              "text": "**DHEA-S** is the most abundant neurosteroid and modulates GABA **noncompetitively**. **Allopregnanolone** is the classic positive GABA-A modulator."
            },
            {
              "type": "h",
              "text": "Neurodevelopment and neuroprotection"
            },
            {
              "type": "p",
              "text": "Broadly, neurosteroids promote **axonal growth** and **synaptic transmission**, but each has its own protective profile."
            },
            {
              "type": "defs",
              "items": [
                [
                  "DHEA",
                  "Regulates brain **serotonin and dopamine**, suppresses **cortisol**, boosts **cholinergic** function and hippocampal **primed burst potentiation**, lowers **amyloid-beta**, inhibits **proinflammatory cytokines**; the chapter also mentions an effect on free radicals (wording unclear)."
                ],
                [
                  "DHEA and DHEA-S",
                  "Support **glial development**, **neuronal growth** and survival in animals; injected into mouse brain they improved **long-term memory** and **reversed amnesia**."
                ],
                [
                  "Progesterone",
                  "Linked to **myelination**, including **repair of damaged myelin**."
                ],
                [
                  "Allopregnanolone",
                  "Helps **reduce contacts** during **axonal regression**."
                ]
              ]
            },
            {
              "type": "h",
              "text": "Role in mental illness"
            },
            {
              "type": "p",
              "text": "Neurosteroids help keep normal neurologic function but may also feed **neuropathology**. They are regulated **differently in males and females**, which may shape how disorders show in each sex. They matter most for **depression and anxiety**, and may become **drug targets** in future."
            },
            {
              "type": "table",
              "caption": "Neurosteroid findings by disorder",
              "wide": true,
              "head": [
                "Disorder",
                "Neurosteroid",
                "Finding",
                "Certainty"
              ],
              "rows": [
                [
                  "Depression",
                  "Allopregnanolone",
                  "**Lower** in plasma and CSF than controls; levels **inversely related** to severity",
                  "No human allopregnanolone therapies, so efficacy **unsubstantiated**"
                ],
                [
                  "Depression",
                  "Several",
                  "**Fluoxetine (Prozac)** raises certain neurosteroids in multiple studies",
                  "Therapeutic role **debated**"
                ],
                [
                  "Anxiety",
                  "Allopregnanolone",
                  "Released with stress, restores GABA tone after **panic attacks**; about **20 times** benzodiazepine strength and **200 times** barbiturate potency at GABA",
                  "As reported"
                ],
                [
                  "Schizophrenia",
                  "DHEA, DHEA-S",
                  "**Raised** at first episode; DHEA given to reduce **anxiety**; suppress GABA inhibition, boost **NMDA and sigma** responses",
                  "Open **questions** remain"
                ],
                [
                  "ADHD",
                  "DHEA, pregnenolone",
                  "Symptoms **inversely correlated** with levels",
                  "Correlation"
                ],
                [
                  "Substance use",
                  "Allopregnanolone, DHEA-S",
                  "Allopregnanolone rise tied to drug abuse; DHEA-S may limit **morphine tolerance**; DHEA-S **rose with cocaine abstinence** and **fell on relapse**",
                  "Research"
                ],
                [
                  "Eating disorders",
                  "DHEA, DHEA-S",
                  "DHEA cut intake and obesity in rats; **low** in young women with **anorexia nervosa**; **3 months** of oral DHEA raised **bone density**",
                  "Partly hypothetical"
                ],
                [
                  "Postpartum, PMS, PMDD",
                  "DHEA, allopregnanolone",
                  "Low postpartum DHEA tied to **mood instability**; PMDD shows **higher allopregnanolone to progesterone ratio**",
                  "Correlation"
                ],
                [
                  "Aging, Alzheimer, Parkinson",
                  "DHEA",
                  "At **age 70** about **20 percent** of the late-20s peak; **markedly low** in Alzheimer disease",
                  "Supplement trials **conflict**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "For depression, nondrug treatments do not seem to shift neurosteroid levels. Early results suggest the rise seen with antidepressants reflects a **pharmacologic property** of the drugs rather than their **therapeutic action**."
            },
            {
              "type": "p",
              "text": "Anxiety: the main mechanism is the **GABA receptor**. **Positive** GABA-A regulation tracks with **anxiolytic** effects and **negative** regulation with **anxiogenic** effects. Neurosteroids are also implicated in **psychotic, childhood, substance, eating and postpartum** disorders."
            },
            {
              "type": "steps",
              "title": "Proposed alcohol to neurosteroid sequence",
              "items": [
                [
                  "Alcohol intake",
                  "Alcohol is theorized to act on the **GABA receptor** and start new (**de novo**) steroid production in brain."
                ],
                [
                  "Stress-like signal",
                  "A sharp ethanol rise may mimic an **acute stress response** via the **HPA axis**."
                ],
                [
                  "Neurosteroid rise",
                  "**Pregnenolone, allopregnanolone** and **allotetrahydrodeoxycorticosterone** rise in brain and periphery."
                ],
                [
                  "Research aim",
                  "Studying neurosteroid swings and in vivo responsiveness to help **prevent ethanol dependence**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "DHEA is thought to lower caloric load by acting on the **serotonergic** system. In pregnancy, **estrogen and progesterone** fluctuate and then **drop sharply after delivery**, which is why neurosteroids are suspected in postpartum disorders. In PMDD, women improved as **allopregnanolone fell**. Some researchers think **DHEA supplements** could slow age-related cognitive decline, while other studies found **no cognitive benefit**."
            },
            {
              "type": "case",
              "title": "Ms. R, low mood before every period",
              "text": "A 31-year-old woman has marked irritability and low mood in the week before menses, easing after bleeding starts. Her clinician recalls research on neurosteroids in this pattern.",
              "point": "Women with premenstrual dysphoric disorder show a higher allopregnanolone to progesterone ratio, and treated women improved as allopregnanolone fell."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Sex differences",
              "text": "Because neurosteroids are regulated **differently in men and women**, hormonal transitions such as **delivery** and the **luteal phase** are natural windows to think about them."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "No approved neurosteroid therapy in this chapter",
              "text": "The chapter states there are **no allopregnanolone-based therapies** for humans and that DHEA cognitive data **conflict**. Do not present neurosteroids as proven treatments from this source."
            },
            {
              "type": "update",
              "year": 2023,
              "title": "Neurosteroid drugs for postpartum depression",
              "text": "The chapter links neurosteroids to postpartum mood disorders. Two allopregnanolone-based drugs are now FDA approved for **postpartum depression**. **Brexanolone (Zulresso)**, approved in **2019**, is given as a continuous **60-hour IV infusion** in a health care setting because of the risk of excessive sedation and loss of consciousness. **Zuranolone (Zurzuvae)**, approved on **August 4, 2023**, is the first **oral** treatment, taken once daily for **14 days**. Both are **positive allosteric modulators of GABA-A receptors**, acting at synaptic and extrasynaptic receptors at a site different from benzodiazepines, and both are Schedule IV. Zuranolone carries a boxed warning not to drive or operate machinery for **12 hours** after a dose. The FDA **did not** approve zuranolone for major depressive disorder.",
              "source": "FDA approves first oral treatment for postpartum depression (zuranolone), August 2023 (Psychiatric Times)"
            }
          ]
        }
      ]
    }
  ]
});
