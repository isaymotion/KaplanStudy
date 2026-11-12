/* Section 33.3 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 33 (Neurophysiology and Neurochemistry: monoamines and amino acids). */
KS.add("ch33-3", "guide", {
  "intro": "This part of Chapter 33 covers the classic small-molecule transmitters. It traces the serotonin, dopamine, norepinephrine, epinephrine, histamine and acetylcholine systems from their cell groups to their targets and functions; explains how each is made, stored, released, taken back up and broken down, including the transporters and the vesicular monoamine transporter; surveys their receptor subtypes and signaling (Table 33-2); describes glutamate, its receptors, astrocytes, plasticity and excitotoxicity, and GABA and glycine with their receptors; and ends with what amino acid transmitters reveal about schizophrenia, anxiety, depression and alcoholism. Update boxes add the correct memantine indication, esketamine for treatment-resistant depression, the evidence on D-cycloserine with exposure therapy, and new drugs acting at muscarinic M1/M4 and histamine H3 receptors.",
  "objectives": [
    "Describe where the serotonin, dopamine, norepinephrine, histamine and acetylcholine neurons lie, where they project and what they do.",
    "Outline the synthesis, storage, release, reuptake and breakdown of each monoamine and acetylcholine, and the roles of transporters and VMAT.",
    "Compare the main receptor subtypes for each monoamine and acetylcholine, their signaling, and the drugs that act at them.",
    "Explain glutamate signaling, its ionotropic and metabotropic receptors, the role of astrocytes, synaptic plasticity and excitotoxicity.",
    "Describe GABA-A, GABA-B and glycine receptors and the drugs that act at them.",
    "Summarize the amino acid transmitter findings in schizophrenia, anxiety, depression and alcoholism, and how treatment has moved since."
  ],
  "parts": [
    {
      "title": "Monoamine systems",
      "sections": [
        {
          "id": "s333-sero",
          "title": "Monoamine overview and the serotonin system",
          "blocks": [
            {
              "type": "p",
              "text": "**Neurochemistry** is the study of how neurons talk to each other with chemicals. Knowledge of these chemical messengers and the **receptors** they act on has grown very fast. That knowledge also shapes how we understand **brain physiology**, and it helps explain how varied thoughts, feelings and behavior can be."
            },
            {
              "type": "h",
              "text": "Monoamines: one system, many jobs"
            },
            {
              "type": "p",
              "text": "For decades the **monoamines** and **acetylcholine** have been tied both to the causes and to the treatment of many neuropsychiatric disorders. The relationship runs both ways. Each monoamine system tunes **many neural pathways**, and each pathway serves several behaviors and body functions. In turn, each brain process is probably shaped by **several interacting transmitter systems**. This web makes it hard to pin down exactly how a given monoamine contributes to a given disorder."
            },
            {
              "type": "defs",
              "title": "Tools that have clarified monoamine biology",
              "items": [
                [
                  "Molecular cloning",
                  "Found many genes that control monoamine signaling: the **enzymes** (synthesis), the **receptors** (actions on the cell) and the **transporters** (reuptake)."
                ],
                [
                  "Human genetics and genomics",
                  "Found intriguing links between **allelic variants** of monoamine-related genes and **psychiatric illnesses and abnormal traits**."
                ],
                [
                  "Experimental animal work",
                  "Changing **gene function and cell activity in animals** has shown which genes and pathways drive particular behaviors."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Monoamines work by binding **cell-surface receptors** on target cells. Each monoamine has **multiple receptor subtypes**. These sit in different brain regions and different parts of the cell, and they couple to different **intracellular signaling** routes. So one transmitter can **excite one cell and inhibit another**, depending on which subtype that cell carries."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why one drug has many effects",
              "text": "Because a single monoamine reaches many circuits through many receptor subtypes, a drug that changes one monoamine will rarely have just one effect. Expect wanted and unwanted effects to come from **different pathways and subtypes**."
            },
            {
              "type": "h",
              "text": "Serotonin: few cells, wide reach"
            },
            {
              "type": "p",
              "text": "Only about **one in a million** brain neurons makes serotonin, yet these cells touch almost **every aspect of CNS function**. Their cell bodies cluster along the brainstem midline in the **raphe nuclei** (Figure 33-12)."
            },
            {
              "type": "table",
              "caption": "Serotonergic raphe groups and their targets (Figure 33-12)",
              "head": [
                "Raphe group",
                "Direction",
                "Main targets"
              ],
              "rows": [
                [
                  "**Rostral raphe nuclei**",
                  "Ascending",
                  "**Throughout the brain**"
                ],
                [
                  "**Caudal raphe nuclei**",
                  "Descending",
                  "**Medulla, cerebellum, spinal cord**"
                ],
                [
                  "**Dorsal raphe nucleus** (midbrain)",
                  "Ascending via the **medial forebrain bundle**",
                  "Most fibers to the **striatum and thalamus**; also cortex"
                ],
                [
                  "**Median raphe nucleus** (midbrain)",
                  "Ascending via the **medial forebrain bundle**",
                  "Most fibers to the **limbic system**; also cortex"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Together the **dorsal and median raphe** supply most serotonin input to the **cortex and limbic system**. Figure 33-12 is drawn from **rats**; the caption notes that monoamine pathways in rats and humans are only **approximately similar**."
            },
            {
              "type": "list",
              "title": "Serotonin and body state",
              "items": [
                "Descending serotonin fibers reaching the spinal **dorsal horn** have been linked to **dampening pain (nociceptive) pathways**. This may relate to the **pain relief seen with some antidepressants**.",
                "Tonic firing of serotonin neurons changes over the **sleep–wake cycle** and **stops during REM sleep**.",
                "Firing **rises during rhythmic motor behavior**, suggesting serotonin helps shape **some kinds of motor output**."
              ]
            },
            {
              "type": "table",
              "caption": "Dorsal versus median raphe serotonergic fibers",
              "head": [
                "Feature",
                "Dorsal raphe",
                "Median raphe"
              ],
              "rows": [
                [
                  "Fiber shape",
                  "**Fine** axons",
                  "Thick axons"
                ],
                [
                  "Varicosities",
                  "**Small**, vesicle-coated swellings",
                  "**Large spherical or beaded**"
                ],
                [
                  "Main targets",
                  "**Striatum and thalamus**",
                  "**Limbic system**"
                ],
                [
                  "MDMA (\"ecstasy\")",
                  "Fine axons are **lesioned**",
                  "Beaded axons are **spared**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "**Varicosities** are small swellings along an axon that hold vesicles. It is still **unclear** whether serotonin acts mainly as a true synaptic (**\"private\"**) transmitter, or more like a local hormone (a **\"social transmitter\"**), or whether this differs by fiber type. The meaning of the shape differences is also unclear, though **recent work** has found **functional differences** between dorsal and median raphe neurons."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Raphe facts to recall",
              "text": "Serotonin cell bodies sit in the **raphe nuclei**. The **median raphe** mainly supplies the **limbic system**; the **dorsal raphe** mainly supplies the **striatum and thalamus**. Serotonin neurons go **silent in REM sleep**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "MDMA is selectively neurotoxic",
              "text": "The amphetamine analog **MDMA** (3,4-methylenedioxymethamphetamine, \"ecstasy\") damages the **fine dorsal raphe axons** but leaves the thick beaded median raphe axons intact. Keep this selective toxicity in mind when patients report ecstasy use."
            }
          ]
        },
        {
          "id": "s333-da",
          "title": "Dopamine pathways and functions",
          "blocks": [
            {
              "type": "p",
              "text": "Dopamine neurons are **spread more widely** than those of any other monoamine. Midbrain sites are the **substantia nigra** and the **ventral tegmental area (VTA)**. Other sites are the **retina**, **olfactory bulb**, **hypothalamus** and **periaqueductal gray**. Outside the brain, dopamine in the **kidney** causes **renal vasodilation**, **diuresis** and **natriuresis**."
            },
            {
              "type": "p",
              "text": "Three dopamine systems matter most in psychiatry: the **nigrostriatal**, the **mesocorticolimbic** and the **tuberohypophyseal** systems (Figure 33-13, drawn from rats)."
            },
            {
              "type": "table",
              "caption": "The three principal dopamine pathways (Figure 33-13)",
              "wide": true,
              "head": [
                "Pathway",
                "Origin",
                "Targets",
                "Main role",
                "Antipsychotic link (as the chapter reports)"
              ],
              "rows": [
                [
                  "**Nigrostriatal**",
                  "**Substantia nigra pars compacta**",
                  "**Dorsal striatum** (especially **caudate and putamen**)",
                  "**Motor control**; its degeneration causes **Parkinson disease**",
                  "Blocking striatal receptors is thought to cause **extrapyramidal effects**"
                ],
                [
                  "**Mesolimbic** part of mesocorticolimbic",
                  "**VTA** (medial to the substantia nigra)",
                  "Limbic sites: **nucleus accumbens**, **amygdala**",
                  "**Reward** (mesoaccumbens pathway); **addiction**",
                  "Thought to be a key target for controlling **positive symptoms**"
                ],
                [
                  "**Mesocortical** part of mesocorticolimbic",
                  "**VTA**",
                  "Cortex, such as the **prefrontal cortex**",
                  "**Working memory** and **attention**",
                  "Blocking here may **worsen negative symptoms**"
                ],
                [
                  "**Tuberohypophyseal**",
                  "Hypothalamic **arcuate and paraventricular nuclei**",
                  "**Pituitary gland**",
                  "**Inhibits prolactin** release",
                  "Blocking pituitary receptors can **release prolactin** and cause **galactorrhea**"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Nigrostriatal system"
            },
            {
              "type": "p",
              "text": "Loss of nigrostriatal neurons causes **Parkinson disease**. This has driven intense study of how midbrain dopamine neurons develop and work. Cells in the **pars compacta** project up to the **dorsal striatum** and so help regulate movement."
            },
            {
              "type": "h",
              "text": "Mesocorticolimbic system"
            },
            {
              "type": "p",
              "text": "The **mesoaccumbens** pathway, from the VTA to the nucleus accumbens, is central to how the brain **represents reward**. **Every known drug of abuse activates** this pathway, and **plastic changes** in it are thought to underlie **addiction**. Dopamine receptor antagonists are believed to act largely on the **mesolimbic** projection to control **hallucinations and delusions**."
            },
            {
              "type": "p",
              "text": "VTA projections to the **prefrontal cortex** support working memory and attention. **Reduced activity** here has been proposed to underlie the **negative symptoms** of schizophrenia. This creates a trade-off: a drug that blocks dopamine receptors in the mesolimbic pathway to ease positive symptoms may block the **same receptors in the mesocortical pathway** and make negative symptoms worse."
            },
            {
              "type": "steps",
              "title": "From dopamine blockade to galactorrhea",
              "items": [
                [
                  "Normal state",
                  "Dopamine from **arcuate and paraventricular** neurons reaches the **pituitary**."
                ],
                [
                  "Normal effect",
                  "This dopamine **holds back prolactin** release."
                ],
                [
                  "Drug effect",
                  "An antipsychotic blocks **pituitary dopamine receptors**."
                ],
                [
                  "Result",
                  "Prolactin release is **disinhibited**, which can cause **galactorrhea**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Match the pathway to the effect",
              "text": "**Nigrostriatal** blockade: extrapyramidal effects. **Mesolimbic** blockade: fewer positive symptoms. **Mesocortical** blockade: possible worsening of negative symptoms. **Tuberohypophyseal** blockade: high prolactin and galactorrhea."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Clozapine and extrapyramidal risk",
              "text": "The chapter credits **clozapine's** lower risk of extrapyramidal side effects to its **relatively selective action on the mesocortical projection**. Note that the chapter compares it with \"other typical\" antipsychotics, although clozapine is usually grouped as an **atypical** (second-generation) agent."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Positive gains, negative costs",
              "text": "Improvement in hallucinations and delusions on a dopamine blocker does not mean the patient is better overall. Watch for **worsening apathy, poor attention and weak working memory**, which may reflect **mesocortical blockade**."
            }
          ]
        },
        {
          "id": "s333-nehis",
          "title": "Norepinephrine, epinephrine and histamine",
          "blocks": [
            {
              "type": "h",
              "text": "Norepinephrine and epinephrine in the periphery"
            },
            {
              "type": "p",
              "text": "In the autonomic nervous system, **postganglionic sympathetic neurons** release **norepinephrine**. Its effects are widespread and include **tachycardia** and **raised blood pressure**. Epinephrine, released by the **adrenal medulla**, acts in a similar way. **Pheochromocytoma** tumors that secrete epinephrine cause **episodes of sympathetic surge, heightened central arousal and anxiety**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Anxiety with a hidden source",
              "text": "Episodic anxiety with surges of fast heart rate and high blood pressure can come from an **epinephrine-secreting pheochromocytoma**. A medical cause should stay on the list before the attacks are labeled purely psychiatric."
            },
            {
              "type": "h",
              "text": "Brain noradrenergic groups"
            },
            {
              "type": "p",
              "text": "Within the brain, norepinephrine neurons form two main clusters in the **pons and medulla**: the **locus ceruleus (LC)** and, separately, the **lateral tegmental noradrenergic nuclei (LTN)** (Figure 33-14, drawn from rats). Axons from both groups **branch widely** as they spread through the whole neuraxis."
            },
            {
              "type": "table",
              "caption": "Locus ceruleus versus lateral tegmental noradrenergic nuclei (Figure 33-14)",
              "head": [
                "Feature",
                "Locus ceruleus",
                "Lateral tegmental nuclei"
              ],
              "rows": [
                [
                  "Location",
                  "**Dorsal caudal pons**",
                  "**Loosely scattered** through the **ventral pons and medulla**"
                ],
                [
                  "Cell number (human)",
                  "About **12,000** densely packed neurons **per side**",
                  "Not stated"
                ],
                [
                  "Typical targets",
                  "**Neocortex, hippocampus, thalamus, midbrain tectum**",
                  "**Mainly** supplies the **hypothalamus and lower brainstem**"
                ],
                [
                  "Shared targets",
                  "**Amygdala, septum, spinal cord**",
                  "**Amygdala, septum, spinal cord** (projections partly overlap the LC)"
                ]
              ]
            },
            {
              "type": "p",
              "text": "LC firing tracks the animal's **level of wakefulness**. It responds to **novel or stressful** events, and responds most to stimuli that **interrupt ongoing behavior and shift attention**. Taken together, the physiology points to roles in **arousal**, **vigilance** and the **stress response**."
            },
            {
              "type": "p",
              "text": "Only a **small number** of neurons use **epinephrine** as their transmitter. They lie in the **caudal pons and medulla**, mixed in among noradrenergic cells. They project up to the **hypothalamus**, the **LC**, and the visceral afferent and efferent nuclei that the chapter places in the **midbrain**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Locus ceruleus in one line",
              "text": "The **locus ceruleus** in the **dorsal caudal pons** holds about **12,000 neurons per side** and regulates **arousal, vigilance and stress responses**; it fires most to stimuli that **reorient attention**."
            },
            {
              "type": "h",
              "text": "Histamine"
            },
            {
              "type": "p",
              "text": "Histamine is best known from **allergy**. **Mast cells** store this **inflammatory mediator** and let it out when they meet an **allergen**. Once out, it makes vessels **leak**, causes **edema**, and produces other allergy signs on the face and skin."
            },
            {
              "type": "p",
              "text": "Brain histamine pathways were mapped **more recently**, by **immunocytochemistry** with antibodies against histamine and its synthetic enzyme **histidine decarboxylase**. The cell bodies sit in the **tuberomammillary nucleus** of the **posterior hypothalamus**. Their fibers spread **diffusely** through the brain and spinal cord (Figure 33-15)."
            },
            {
              "type": "table",
              "caption": "Histaminergic projection routes (Figure 33-15)",
              "head": [
                "Route",
                "Path",
                "Targets"
              ],
              "rows": [
                [
                  "**Ventral ascending**",
                  "Via the **medial forebrain bundle**",
                  "**Hypothalamus, diagonal band, septum, olfactory bulb**"
                ],
                [
                  "**Dorsal ascending**",
                  "Not stated",
                  "**Thalamus, hippocampus, amygdala, rostral forebrain**"
                ],
                [
                  "**Descending**",
                  "Via the **central midbrain gray**",
                  "**Dorsal hindbrain and spinal cord**"
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Firing across the sleep–wake cycle",
              "head": [
                "State",
                "Tuberomammillary (histamine)",
                "Raphe (serotonin)"
              ],
              "rows": [
                [
                  "Waking",
                  "**Highest** firing",
                  "Varies with state"
                ],
                [
                  "Slow-wave sleep",
                  "**Slowed** firing",
                  "Varies with state"
                ],
                [
                  "REM sleep",
                  "**No firing**",
                  "**No activity**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Histamine fibers carry varicosities that **rarely form classical synapses**. So histamine may act **at a distance** from where it is released, much like a **local hormone**. Of all regions, the **hypothalamus** gets the **densest** histamine input, which fits a role in **autonomic and neuroendocrine** control. Histamine fibers also reach **monoaminergic and cholinergic nuclei**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Two monoamines acting like local hormones",
              "text": "Both **serotonin** and **histamine** have been proposed to act partly like **local hormones**, released from varicosities and diffusing to nearby targets rather than acting only at a classical synapse."
            }
          ]
        }
      ]
    },
    {
      "title": "Acetylcholine, synthesis and transport",
      "sections": [
        {
          "id": "s333-ach",
          "title": "Acetylcholine pathways and functions",
          "blocks": [
            {
              "type": "p",
              "text": "Cholinergic neurons in the brain come in two forms. **Projection neurons** send axons to faraway regions. **Interneurons** stay local and contact cells inside their own structure. Most cholinergic projection neurons sit in two large groups: the **basal forebrain complex** and, lower down, the **mesopontine complex** (Figure 33-16, drawn from rat brain)."
            },
            {
              "type": "table",
              "caption": "The two cholinergic projection complexes (see Figure 33-16)",
              "head": [
                "Feature",
                "Basal forebrain complex",
                "Mesopontine complex"
              ],
              "rows": [
                [
                  "Nuclei",
                  "**Nucleus basalis of Meynert**; **diagonal bands of Broca** (horizontal and vertical limbs); **medial septal nucleus**",
                  "**Pedunculopontine** and **laterodorsal tegmental** nuclei (midbrain and pons)"
                ],
                [
                  "Main targets",
                  "Most cholinergic input to the **nonstriatal telencephalon**",
                  "**Thalamus** and midbrain, including **VTA and substantia nigra** dopamine cells"
                ],
                [
                  "Other targets",
                  "See the nucleus-by-nucleus list below",
                  "Descending fibers to the **LC**, the **dorsal raphe** and **cranial nerve nuclei**"
                ],
                [
                  "Clinical link",
                  "Degenerates in **Alzheimer disease**",
                  "Proposed role in **REM sleep induction**"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Basal forebrain nuclei and where each one projects",
              "items": [
                [
                  "Nucleus basalis of Meynert",
                  "Sends fibers widely across the **cortex** and to the **amygdala**."
                ],
                [
                  "Diagonal bands of Broca (horizontal and vertical)",
                  "Supply the **anterior cingulate gyrus** and the **olfactory bulb**."
                ],
                [
                  "Medial septal nucleus",
                  "Supplies the **hippocampus**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "The book lists the three target groups in order (cortex and amygdala; anterior cingulate and olfactory bulb; hippocampus) and pairs them with the three nuclei \"respectively\". Read the pairings above in that light."
            },
            {
              "type": "h",
              "text": "Alzheimer disease"
            },
            {
              "type": "p",
              "text": "In Alzheimer disease, many neurons of the **nucleus basalis** die. The cortex then receives much less cholinergic input. The amount of cell loss tracks the **severity of dementia**. This shortfall in acetylcholine **may contribute** to worsening cognition. This idea fits with the benefit seen from drugs that boost acetylcholine signaling in the disorder."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Nucleus basalis and dementia",
              "text": "The **nucleus basalis of Meynert** is the key cholinergic nucleus lost in **Alzheimer disease**. How much is lost **tracks how severe the dementia is**."
            },
            {
              "type": "h",
              "text": "Sleep, striatum and periphery"
            },
            {
              "type": "list",
              "items": [
                "Serotonin, norepinephrine and histamine neurons fall quiet in REM sleep, but cholinergic neurons **may keep firing during REM sleep**. They have been **proposed** to help start REM sleep.",
                "Cholinergic **interneurons** are found in several regions, including the **striatum**.",
                "Changing striatal cholinergic signaling has been **implicated** in how **anticholinergic** drugs ease parkinsonism.",
                "In the body, acetylcholine is the transmitter of **postganglionic parasympathetic neurons**, **preganglionic autonomic neurons** and **motoneurons to skeletal muscle**.",
                "Peripheral acetylcholine produces the typical parasympathetic effects: **bradycardia**, **lower blood pressure** and **enhanced digestion**."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why anticholinergics help parkinsonism",
              "text": "Acetylcholine in the striatum is carried by **local interneurons**, not long projections. Damping this local signal is the proposed basis for the **antiparkinsonian** effect of anticholinergic agents."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Rat maps, not human maps",
              "text": "Figures 33-15 and 33-16 are drawn from **rat** brain. Use them to learn the layout of each system, not exact human anatomy."
            },
            {
              "type": "p",
              "text": "Figure 33-15, printed in this stretch of the chapter, belongs to the histamine system. It shows histamine cells in the caudal hypothalamus, in the **tuberomammillary nucleus**, sending fibers to the **hypothalamus** and to more distant regions such as cortex, hippocampus, thalamus and striatum."
            },
            {
              "type": "case",
              "title": "Ms. R, forgetful and withdrawn",
              "text": "A woman in her late 70s has two years of worsening memory and getting lost in familiar places. Her family also notes agitation in the evenings. Her neurologist diagnoses Alzheimer disease and starts a drug that raises acetylcholine signaling. Over the next months her memory and her agitation improve somewhat.",
              "point": "Loss of **nucleus basalis** neurons cuts cortical cholinergic input in Alzheimer disease. Boosting acetylcholine gives a **moderate** benefit for both cognition and behavior."
            }
          ]
        },
        {
          "id": "s333-synth",
          "title": "Monoamine synthesis, storage and degradation",
          "blocks": [
            {
              "type": "p",
              "text": "Monoamines share more than anatomy. They are also made, stored and broken down in much the same way (Figure 33-17, a diagram of a monoamine synapse). Acetylcholine follows a different plan, covered at the end of this section."
            },
            {
              "type": "steps",
              "title": "Life cycle at a monoamine synapse (see Figure 33-17)",
              "items": [
                [
                  "1. Synthesis",
                  "Made inside the neuron from **common amino acid precursors**."
                ],
                [
                  "2. Vesicle loading",
                  "Packed into synaptic vesicles by a **vesicular monoamine transporter**."
                ],
                [
                  "3. Release",
                  "When stimulated, vesicles **fuse** with the terminal and empty into the cleft."
                ],
                [
                  "4. Postsynaptic action",
                  "Transmitter binds **postsynaptic receptors** and changes the target cell."
                ],
                [
                  "5. Autoreceptor feedback",
                  "Transmitter acts on **presynaptic autoreceptors** to **curb further release**."
                ],
                [
                  "6. Reuptake",
                  "**Plasma membrane transporters** pull transmitter back into the terminal. This limits both the **size** and the **duration** of the signal."
                ],
                [
                  "7. Degradation or rescue",
                  "Inside, it is either broken down by **enzymes** (such as MAO) or saved by moving back into **vesicles**."
                ]
              ]
            },
            {
              "type": "h",
              "text": "Serotonin"
            },
            {
              "type": "list",
              "items": [
                "The CNS holds **less than 2 percent** of the body's serotonin.",
                "Peripheral serotonin lives in **mast cells**, **platelets** and **enterochromaffin cells**.",
                "The **gut** holds **more than 80 percent**, and there it it adjusts motility and digestion.",
                "In platelets, serotonin aids clotting by **serotonylation**: it is bonded covalently to small **GTP-binding proteins**, which it then switches on.",
                "Serotonin from the blood **cannot cross the BBB**, so the brain makes its own."
              ]
            },
            {
              "type": "steps",
              "title": "Serotonin synthesis and breakdown (see Figure 33-18)",
              "items": [
                [
                  "Dietary tryptophan",
                  "The precursor amino acid comes from **food**."
                ],
                [
                  "Tryptophan hydroxylase (rate-limiting)",
                  "Adds a hydroxyl group to make **5-hydroxytryptophan**. There are **two isoforms**: one mostly **peripheral**, one only in the **CNS**."
                ],
                [
                  "Aromatic amino acid decarboxylase",
                  "Quickly removes a carboxyl group to give **serotonin**. The same enzyme makes dopamine."
                ],
                [
                  "MAOA",
                  "Oxidizes the amino group to an **aldehyde**. MAOA sits in **mitochondrial membranes** and also acts on norepinephrine."
                ],
                [
                  "Further oxidation",
                  "The aldehyde becomes **5-HIAA** (5-hydroxyindoleacetic acid)."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Normally, **tryptophan supply** is what limits serotonin production. Tryptophan enters the brain on a **saturable active carrier** that it shares with other **large neutral amino acids**. So brain uptake depends on blood tryptophan and on its **ratio to the competing amino acids**. **Carbohydrate** raises the ratio: insulin drives the competitors into peripheral tissue. **High-protein** foods, which carry relatively little tryptophan, lower it. Special **low-tryptophan diets** clearly reduce brain serotonin."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "5-HIAA is an imperfect gauge",
              "text": "5-HIAA is often measured as a stand-in for serotonin system activity, but how it relates to actual serotonergic **firing remains unclear**."
            },
            {
              "type": "h",
              "text": "Catecholamines"
            },
            {
              "type": "steps",
              "title": "Catecholamine synthesis (see Figure 33-19)",
              "items": [
                [
                  "Tyrosine",
                  "Enters the brain by **active transport**."
                ],
                [
                  "Tyrosine hydroxylase (rate-limiting)",
                  "Hydroxylates the **meta** position to give **L-dopa**. High catecholamine levels block it (**end-product inhibition**)."
                ],
                [
                  "Dopa decarboxylase",
                  "A **cytoplasmic** enzyme that turns L-dopa into **dopamine**. It works on all natural aromatic L-amino acids, so the better name is **aromatic amino acid decarboxylase**."
                ],
                [
                  "Dopamine beta-hydroxylase",
                  "In noradrenergic and adrenergic cells, dopamine is pumped into vesicles and converted there to **norepinephrine**."
                ],
                [
                  "PNMT",
                  "In the **adrenal medulla** and in **adrenergic neurons**, **phenylethanolamine N-methyltransferase** in the cytoplasm makes **epinephrine**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Tyrosine hydroxylase is usually **saturated** with tyrosine. Raising or lowering tyrosine therefore does **not readily change** catecholamine output. Contrast this with tryptophan and serotonin."
            },
            {
              "type": "table",
              "caption": "Enzymes that break down catecholamines",
              "head": [
                "Enzyme",
                "Location",
                "Action and substrates"
              ],
              "rows": [
                [
                  "**MAOA**",
                  "**Outer mitochondrial membrane**, including adrenergic terminals",
                  "Prefers **serotonin** and **norepinephrine**"
                ],
                [
                  "**MAOB**",
                  "Same; neurons carry **both** MAO forms",
                  "Prefers **dopamine**, **histamine** and many **phenylethylamines**"
                ],
                [
                  "**COMT**",
                  "**Cytoplasm**, wide in brain and body; **little or none** in adrenergic neurons",
                  "Uses **S-adenosyl methionine** as methyl donor, adding the methyl to the m-hydroxyl of most catechols"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Main human metabolites used as activity markers",
              "items": [
                [
                  "Homovanillic acid (HVA)",
                  "Chief metabolite of **dopamine**."
                ],
                [
                  "MHPG (3-methoxy-4-hydroxyphenylglycol)",
                  "Chief metabolite of **norepinephrine**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "MAO inhibitors block monoamine breakdown and raise brain monoamine levels. The rise in serotonin is **believed** to explain their antidepressant effect. MAO in the **gut and liver** also clears toxic amines. One is dietary **tyramine**, which can push norepinephrine out of sympathetic nerve endings and cause **hypertension** if enough is present."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "The tyramine warning",
              "text": "Patients on MAO inhibitors are told to avoid **pickled and fermented foods**, which are rich in **tyramine**. Without gut and liver MAO, tyramine reaches sympathetic nerves and can drive **blood pressure** up."
            },
            {
              "type": "h",
              "text": "Histamine and acetylcholine"
            },
            {
              "type": "p",
              "text": "Like serotonin, most body histamine is outside the brain, mainly in **mast cells**. It **does not pass the BBB easily**, so the brain is thought to make its own. **L-histidine decarboxylase** turns **histidine** into histamine. This enzyme is **not usually saturated**, so output follows histidine supply; giving histidine peripherally raises brain histamine. Breakdown runs through **histamine N-methyltransferase** (to **methylhistamine**) and then **MAOB**."
            },
            {
              "type": "steps",
              "title": "Acetylcholine cycle",
              "items": [
                [
                  "Choline uptake (rate-limiting)",
                  "Most brain choline comes **from blood**. A **high-affinity active transporter** brings it into the neuron; more firing means **more uptake**."
                ],
                [
                  "ChAT",
                  "**Choline acetyltransferase** attaches an acetyl group, taken from **acetyl coenzyme A**, to choline."
                ],
                [
                  "Storage",
                  "A **vesicular acetylcholine transporter** loads vesicles."
                ],
                [
                  "Breakdown",
                  "After release, **acetylcholinesterase** in the cleft **hydrolyzes** it quickly."
                ],
                [
                  "Recycling",
                  "Much of the freed choline returns to the terminal on the **choline transporter**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "A second enzyme, **butyrylcholinesterase**, is found mainly in **liver and plasma** and in **glia**. **Cholinesterase inhibitors** have shown **moderate** benefit for both thinking and behavior problems in Alzheimer disease. They are also used in **myasthenia gravis**, where **autoantibodies to acetylcholine receptors** block nerve-to-muscle signaling and cause weakness."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Rate-limiting steps compared",
              "text": "Serotonin: **tryptophan hydroxylase**, with tryptophan supply limiting. Catecholamines: **tyrosine hydroxylase** (saturated, so tyrosine supply matters little). Histamine: **histidine decarboxylase** (unsaturated, so histidine matters). Acetylcholine: **choline uptake**."
            },
            {
              "type": "case",
              "title": "Mr. D, a headache after dinner",
              "text": "A man in his 50s with depression takes an MAO inhibitor. After a meal of aged, fermented foods he develops a pounding headache, and the emergency team finds a sharply raised blood pressure.",
              "point": "Blocked MAO in the **gut and liver** lets dietary **tyramine** through. It displaces **norepinephrine** from sympathetic nerve endings and raises blood pressure."
            }
          ]
        },
        {
          "id": "s333-trans",
          "title": "Transporters and the vesicular monoamine transporter",
          "blocks": [
            {
              "type": "p",
              "text": "The plasma membrane transporters for monoamines are now well understood at the molecular level. They carry released transmitter **back into the presynaptic terminal**. Each cycle also moves **Na+ and Cl- ions**. The energy comes from the ion gradient built by the **Na+/K+ ATPase**."
            },
            {
              "type": "list",
              "title": "What reuptake does",
              "items": [
                "Limits **how strongly** and **how long** monoamine receptors are activated.",
                "**Refills** the terminal's transmitter stores.",
                "Serves as the target of several **antidepressants**, **psychostimulants** and **monoamine neurotoxins**."
              ]
            },
            {
              "type": "table",
              "caption": "Known plasma membrane monoamine transporters",
              "head": [
                "Transmitter",
                "Transporter",
                "Status"
              ],
              "rows": [
                [
                  "Serotonin",
                  "**SERT**",
                  "Well characterized"
                ],
                [
                  "Dopamine",
                  "**DAT**",
                  "Well characterized"
                ],
                [
                  "Norepinephrine",
                  "**NET**",
                  "Well characterized"
                ],
                [
                  "Histamine",
                  "None shown",
                  "**No selective transporter demonstrated**"
                ],
                [
                  "Epinephrine",
                  "None shown",
                  "**No selective transporter demonstrated**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Missing transporters",
              "text": "No selective plasma membrane transporter has **yet been shown** for **histamine** or **epinephrine**."
            },
            {
              "type": "h",
              "text": "Cocaine and the knockout mice"
            },
            {
              "type": "p",
              "text": "**Cocaine** binds tightly to **all three** known monoamine transporters. Its stimulant effect has been credited mainly to **DAT blockade**. Mice engineered to **lack DAT** support this: cocaine no longer makes them more active. In these mice, psychostimulants instead **reduce** movement, a paradoxical effect blamed on **SERT blockade**."
            },
            {
              "type": "p",
              "text": "Cocaine's **reward** has also been linked mainly to DAT. Yet cocaine **still rewards** DAT-lacking mice, so **other targets** must help. **Serotonergic** as well as dopaminergic mechanisms appear to be involved."
            },
            {
              "type": "table",
              "caption": "Cocaine in normal versus DAT-lacking mice",
              "head": [
                "Effect",
                "Usual explanation",
                "Finding in DAT-lacking mice"
              ],
              "rows": [
                [
                  "Locomotor stimulation",
                  "**DAT blockade**",
                  "**Absent**; psychostimulants instead **suppress** movement (credited to **SERT** blockade)"
                ],
                [
                  "Reward",
                  "Mainly **DAT inhibition**",
                  "**Still present**, so other targets (likely **serotonergic**) contribute"
                ]
              ]
            },
            {
              "type": "defs",
              "title": "Neurotoxins that enter through transporters",
              "items": [
                [
                  "MPTP",
                  "Gets into and damages **dopamine** neurons."
                ],
                [
                  "MDMA",
                  "Gets into and damages **serotonin** neurons."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Transporters are also entry doors",
              "text": "The same transporters that clear transmitter can let **neurotoxins** in. **MPTP** harms dopamine cells and **MDMA** harms serotonin cells this way."
            },
            {
              "type": "h",
              "text": "Vesicular monoamine transporter"
            },
            {
              "type": "p",
              "text": "A second transport step concentrates monoamines **inside synaptic vesicles**. Plasma membrane transporters come in several kinds, but the brain is thought to rely on **just one kind** of vesicular monoamine transporter."
            },
            {
              "type": "list",
              "title": "Three jobs of vesicular storage",
              "items": [
                "Allows **controlled release** when the right stimulus arrives.",
                "Shields monoamines from breakdown by **MAO**.",
                "Shields neurons from **free radicals** made when monoamines oxidize in the cytoplasm."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Reserpine and mood",
              "text": "The antihypertensive **reserpine (Serpasil)** blocks the vesicular monoamine transporter. It **depletes** brain serotonin, norepinephrine and dopamine and **raises suicide risk** and the risk of **affective dysfunction**."
            },
            {
              "type": "case",
              "title": "Mrs. L, low after a new pill",
              "text": "A woman in her 60s is treated long term for high blood pressure with reserpine. Over the following months she becomes persistently sad, loses interest in her hobbies and tells her daughter that life is not worth living.",
              "point": "Reserpine blocks the **single vesicular monoamine transporter**. This empties stores of all three monoamines and is linked to **depression and suicide risk**."
            }
          ]
        }
      ]
    },
    {
      "title": "Monoamine receptors",
      "sections": [
        {
          "id": "s333-rec",
          "title": "Receptors overview; serotonin and dopamine receptors",
          "blocks": [
            {
              "type": "p",
              "text": "What a monoamine finally does to behavior depends on the **receptor** it binds. These receptors sit in the **plasma membrane**. Binding sets off a chain of events inside the cell that changes how easily the neuron fires. Each monoamine has a single transporter, but it has **many receptor subtypes** (Table 33-2)."
            },
            {
              "type": "h",
              "text": "Serotonin (5-HT) receptors"
            },
            {
              "type": "p",
              "text": "The **5-HT1** group is the **largest** serotonin receptor subfamily. In humans it includes **5-HT1A, 1B, 1D, 1E and 1F**. Every member shares three features: genes **without introns**, **high affinity** for serotonin, and **inhibition of adenylate cyclase**."
            },
            {
              "type": "defs",
              "title": "The 5-HT1A receptor, the best studied subtype",
              "items": [
                [
                  "Postsynaptic sites",
                  "Forebrain neurons, mainly in the **hippocampus**, **cortex** and **septum**."
                ],
                [
                  "Presynaptic role",
                  "On serotonin neurons themselves it acts as an **inhibitory somatodendritic autoreceptor**."
                ],
                [
                  "Link to antidepressants",
                  "Long-term serotonin reuptake inhibitor use **downregulates 5-HT1A autoreceptors**, a change thought to be part of the antidepressant effect."
                ],
                [
                  "Link to neurogenesis",
                  "SSRIs may act partly by raising **hippocampal neurogenesis** through **postsynaptic** 5-HT1A activation."
                ],
                [
                  "Drug example",
                  "Partial 5-HT1A agonists such as **buspirone** have both **anxiolytic** and **antidepressant** effects."
                ]
              ]
            },
            {
              "type": "p",
              "text": "**5-HT2A/C** receptors have drawn interest because of **atypical antipsychotics** such as **clozapine**, **risperidone** and **olanzapine**. Their binding profiles led to the idea that **5-HT2A blockade** tracks with their therapeutic benefit. 5-HT2A also affects **working memory**, a function that is probably impaired in schizophrenia."
            },
            {
              "type": "list",
              "title": "The 5-HT2C receptor",
              "items": [
                "High expression in the **amygdala**, **striatum**, **hippocampal formation**, **choroid plexus**, **hypothalamus** and **prefrontal cortex**.",
                "Stimulating it is proposed to be **anxiogenic** and **anorectic**; the appetite effect may involve hypothalamic **melanocortin** and **leptin** pathways.",
                "It may contribute to the **weight gain** and **type 2 diabetes mellitus** seen with atypical antipsychotics.",
                "Mice bred without it show **obesity** with **overeating** and **greater seizure susceptibility**, which suggests it tunes network excitability.",
                "Many antidepressants and antipsychotics **block** it with high affinity.",
                "Its transcripts undergo **RNA editing**, giving isoforms whose baseline and serotonin-driven activity differ markedly.",
                "Changed 5-HT2C **mRNA editing** was found in brains of **suicide victims with major depression**, and **SSRIs** can shift editing patterns."
              ]
            },
            {
              "type": "p",
              "text": "Going the other way, **hallucinogens** such as **LSD** act as **agonists** at 5-HT2 and other serotonin subtypes."
            },
            {
              "type": "table",
              "caption": "Serotonin receptors in brief (see Table 33-2)",
              "head": [
                "Subtype",
                "Main effector",
                "Proposed clinical relevance"
              ],
              "rows": [
                [
                  "5-HT1A, 1B, 1D, 1E, 1F",
                  "**↓ AC**, **↑ GIRK** currents",
                  "Partial agonist **buspirone** is anxiolytic; role in hippocampal neurogenesis; 1B/D drugs (**triptans**) treat **migraine** (table lists them as antagonists)"
                ],
                [
                  "5-HT2A, 2B, 2C",
                  "**↑ PI turnover**",
                  "2A blockade gives **antipsychotic** effects; 2A agonism gives **hallucinogenic** effects; 2B agonism linked to **cardiac valvulopathy**; 2C agonists under study as **appetite suppressants**, possibly antiepileptics"
                ],
                [
                  "5-HT3",
                  "**Na+ channel**; depolarizes the membrane",
                  "**Ondansetron** is **antiemetic** (table lists it as an agonist)"
                ],
                [
                  "5-HT4",
                  "**↑ AC**",
                  "Partial agonist **tegaserod** used in **IBS**"
                ],
                [
                  "5-HT5, 6 and 7",
                  "**↑ AC**",
                  "Mostly **unclear**; antagonists of one subtype in the group may have **antidepressant** potential"
                ]
              ],
              "note": "The extracted table was clipped; row alignment for the 5-HT5 to 5-HT7 group is not fully clear. The table is adapted from the Comprehensive Textbook of Psychiatry, 9th ed. (2009)."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Check the agonist and antagonist labels",
              "text": "Table 33-2 labels the antimigraine **triptans** as 5-HT1B/D antagonists and **ondansetron** as a 5-HT3 agonist. Both labels are wrong: triptans are 5-HT1B/1D **agonists** and ondansetron is a 5-HT3 **antagonist** (see the correction box below)."
            },
            {
              "type": "h",
              "text": "Dopamine receptors"
            },
            {
              "type": "p",
              "text": "In **1979**, researchers recognized that dopamine works through **more than one receptor**. They separated **D1** from **D2** using three lines of evidence: different binding affinities for a series of agonists and antagonists, different effector mechanisms, and different distribution in the CNS. Later work showed that how well an antipsychotic works correlates strongly with its **affinity for D2**, marking D2 as a key site of antipsychotic action."
            },
            {
              "type": "p",
              "text": "Molecular cloning later found genes for **D3, D4 and D5**. By structure, pharmacology and effector, **D3 and D4 are D2-like** and **D5 is D1-like**. The roles of these newer subtypes are **not yet settled**."
            },
            {
              "type": "table",
              "caption": "D1 versus D2 receptor families (see Table 33-2)",
              "head": [
                "Feature",
                "D1-like (D1, D5)",
                "D2-like (D2, D3, D4)"
              ],
              "rows": [
                [
                  "Effect on cAMP",
                  "**Stimulates** cAMP formation (**↑ AC**)",
                  "**Opposite**: lowers it (**↓ AC**)"
                ],
                [
                  "Original pharmacologic marker",
                  "High affinity for **SCH 23390**; low affinity for butyrophenones",
                  "High affinity for butyrophenones such as **haloperidol**"
                ],
                [
                  "Proposed clinical relevance",
                  "Agonists at D1 have a role in **Parkinson disease**",
                  "Blocking D2 gives **antipsychotic** action (e.g., haloperidol); **pramipexole**, a D3 agonist, is used in Parkinson disease and **restless legs syndrome**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "D2 and antipsychotic potency",
              "text": "Antipsychotic clinical efficacy correlates strongly with **D2 receptor affinity**. Separately, **5-HT2A blockade** is hypothesized to track with the benefit of **atypical** agents."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why SSRIs take time",
              "text": "One proposed reason for the delay is that **chronic** SSRI exposure **downregulates 5-HT1A autoreceptors**, removing a brake on serotonin neuron firing. Postsynaptic 5-HT1A effects on **hippocampal neurogenesis** may also contribute (see section 33.2)."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Metabolic risk and 5-HT2C",
              "text": "**5-HT2C** blockade may contribute to the **weight gain** and **type 2 diabetes** linked to atypical antipsychotics. Mice lacking the receptor overeat, become obese and seize more easily."
            },
            {
              "type": "update",
              "year": 2024,
              "title": "Correction: drug actions in Table 33-2",
              "text": "Several drug entries in Table 33-2 are wrong or out of date. **Triptans** (sumatriptan, zolmitriptan and others) are **agonists**, not antagonists, at **5-HT1B and 5-HT1D** receptors: 5-HT1B activation constricts dilated cranial vessels and 5-HT1D activation blocks neuropeptide release from trigeminal nerve endings. **Ondansetron** is a selective **5-HT3 antagonist**, not an agonist; it prevents nausea and vomiting by blocking 5-HT3 receptors on vagal nerve terminals and in the chemoreceptor trigger zone. **5-HT2C agonist** for weight loss: lorcaserin (Belviq) was approved in **2012**, and in **February 2020** the FDA asked for its withdrawal after a large safety trial showed more cancers. **5-HT4:** tegaserod (Zelnorm), a 5-HT4 partial agonist for constipation-predominant IBS, was withdrawn in **2007** for cardiovascular events, reintroduced in **2019** for women under 65, and withdrawn again in **2022** for business reasons. The chapter also calls clozapine a typical antipsychotic; it is the prototype **atypical** (second-generation) antipsychotic.",
              "source": "StatPearls, Triptans; StatPearls, Ondansetron; FDA requests withdrawal of weight-loss drug Belviq (lorcaserin), February 2020 (Healio); Tegaserod (Zelnorm) withdrawn from US market (Managed Healthcare Executive)"
            }
          ]
        },
        {
          "id": "s333-rec2",
          "title": "Adrenergic, histamine and cholinergic receptors",
          "blocks": [
            {
              "type": "h",
              "text": "Adrenergic receptors"
            },
            {
              "type": "p",
              "text": "The **α2** receptors come in three subtypes: **α2A, α2B and α2C**. As with α1 receptors, their separate functions are hard to pin down because **selective agonists and antagonists are lacking**. α2 receptors act both as **presynaptic autoreceptors** and at **postsynaptic** sites. All appear to **inhibit cAMP formation** and to **open potassium channels**, which **hyperpolarizes** the membrane. They control transmitter release from **peripheral sympathetic** nerve endings."
            },
            {
              "type": "steps",
              "title": "How clonidine is proposed to act",
              "items": [
                [
                  "Central autoreceptor stimulation",
                  "Clonidine, an **α2 agonist**, stimulates central α2 autoreceptors (probably **α2A**)."
                ],
                [
                  "Locus coeruleus slows",
                  "Firing of noradrenergic **LC** neurons, which are tied to **arousal**, falls; this is proposed to explain **sedation**."
                ],
                [
                  "Brainstem autonomic shift",
                  "Stimulating brainstem α2 receptors is proposed to **lower sympathetic** and **raise parasympathetic** tone."
                ],
                [
                  "Clinical uses",
                  "This may relate to clonidine **lowering blood pressure** and damping the **sympathetic hyperactivity of opiate withdrawal**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Adrenergic input also steers the serotonin system. In the **dorsal raphe nucleus**, **α2** activation **inhibits** serotonin neurons, while local **α1** activation **excites** them. That α1 drive is thought to be an important **activating input** to serotonin cells."
            },
            {
              "type": "table",
              "caption": "Adrenergic receptors (epinephrine/norepinephrine) (see Table 33-2)",
              "head": [
                "Subtype",
                "Main effector",
                "Proposed clinical relevance"
              ],
              "rows": [
                [
                  "α1A, α1B, α1D",
                  "**↑ PI turnover**",
                  "Antagonists used for **prostate disease**"
                ],
                [
                  "α2A, α2B, α2C",
                  "**↓ AC**",
                  "Agonists are **sedative**; the table also says \"hypertensive\" (see caution)"
                ],
                [
                  "β1",
                  "**↑ AC**",
                  "Regulates **cardiac function**; antagonists may be **anxiolytic**"
                ],
                [
                  "β2",
                  "**↑ AC**",
                  "Agonists used as **bronchodilators**"
                ],
                [
                  "β3",
                  "**↑ AC**",
                  "Agonists might treat **obesity**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "A table label that conflicts with the text",
              "text": "Table 33-2 describes α2 agonists as hypertensive, yet the text explains that the α2 agonist **clonidine lowers blood pressure**. Rely on the mechanism: α2 stimulation **reduces sympathetic outflow**."
            },
            {
              "type": "h",
              "text": "Histamine receptors"
            },
            {
              "type": "p",
              "text": "Histamine systems are proposed to modulate **arousal**, **wakefulness**, **feeding** and **neuroendocrine** responses. **Four** subtypes are known: **H1, H2, H3 and H4**. **H4**, the newest, is found mainly in the **periphery**, for example **leukocytes**, **bone marrow** and the **spleen**. The remaining three are prominent in the CNS."
            },
            {
              "type": "list",
              "title": "The H1 receptor",
              "items": [
                "In the body: smooth muscle of the **gut** and **bronchial walls**, and **vascular endothelium**.",
                "In the brain: widespread, densest in the **thalamus**, **cortex** and **cerebellum**.",
                "Signals through **Gq** and **phosphoinositide turnover**; tends to boost **excitatory** responses.",
                "Target of classic antihistamines for **allergic rhinitis** and **conjunctivitis**; their **sedation** comes from CNS action, implicating histamine in the **sleep-wake cycle**.",
                "Mutant mice without histamine show **deficits in waking and attention**.",
                "**Sedation** and **weight gain** from several antipsychotics and antidepressants are attributed to **H1 antagonism**.",
                "In animal models, H1 agonists **increase arousal** and **reduce food intake**."
              ]
            },
            {
              "type": "table",
              "caption": "Histamine receptors (see Table 33-2)",
              "head": [
                "Subtype",
                "Main effector",
                "Proposed clinical relevance"
              ],
              "rows": [
                [
                  "H1",
                  "**↑ PI turnover**",
                  "Antagonists treat **allergy** and **inflammation**; they also cause **sedation** and **weight gain**"
                ],
                [
                  "H2",
                  "**↑ AC**",
                  "Antagonists treat **peptic ulcer**, **GI reflux** and **GI bleeding**"
                ],
                [
                  "H3",
                  "**↓ AC**",
                  "Antagonists proposed for **sleep disorders**, **obesity** and **dementia**"
                ],
                [
                  "H4",
                  "**↓ AC**",
                  "Antagonists might serve as **anti-inflammatory** agents"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Cholinergic receptors"
            },
            {
              "type": "defs",
              "items": [
                [
                  "M1 muscarinic",
                  "The **most abundant** muscarinic receptor in the forebrain (**cortex**, **hippocampus**, **striatum**). Drug evidence ties it to **memory** and **synaptic plasticity**; M1 knockout mice fail memory tasks thought to need **cortex-hippocampus** interaction."
                ],
                [
                  "Nicotinic (general)",
                  "Linked to **attention**, **working memory** and **processing speed**. In Alzheimer disease, nicotinic receptors in cortex and hippocampus seem **markedly reduced**, and nicotine helps attention in some patients."
                ],
                [
                  "Galantamine",
                  "An **acetylcholinesterase inhibitor** for Alzheimer disease that also **positively modulates** nicotinic receptors."
                ],
                [
                  "α7 nicotinic",
                  "A candidate **susceptibility gene for schizophrenia**, one among many; low levels go with impaired **sensory gating**."
                ],
                [
                  "α4 and β2 nicotinic subunits",
                  "Mutations underlie some rare forms of **ADNFLE (autosomal dominant nocturnal frontal lobe epilepsy)**."
                ],
                [
                  "Mesolimbic nicotinic receptors",
                  "Their stimulation in dopamine **reward** pathways is proposed to drive the **reinforcing** effect of **tobacco**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Receptors behind common side effects",
              "text": "**H1 antagonism** explains the **sedation and weight gain** of several antipsychotics and antidepressants. **α2 agonism** at the **locus coeruleus** is proposed to explain **clonidine** sedation."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Clonidine in opiate withdrawal",
              "text": "Withdrawal brings **sympathetic hyperactivity**. Clonidine, by stimulating brainstem **α2** receptors, is proposed to shift balance toward **parasympathetic** tone."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Hold the genetics loosely",
              "text": "The **α7** nicotinic receptor is only **one of many possible** schizophrenia susceptibility genes. The ADNFLE mutations explain only **some rare** familial forms."
            },
            {
              "type": "update",
              "year": 2026,
              "title": "Correction: alpha-2 agonists lower blood pressure",
              "text": "Table 33-2 lists alpha-2 agonists as hypertensive. They are **antihypertensive**: **clonidine** and **guanfacine** stimulate central **alpha-2 (mainly alpha-2A)** receptors, which reduces sympathetic outflow from the brainstem and lowers blood pressure and heart rate, as the chapter's own text says. They must be **tapered**, because stopping them suddenly can cause **rebound hypertension**. Clonidine also has FDA-approved uses in **ADHD**, and alpha-2 agonists are used for tics and opioid withdrawal symptoms; sedation and fatigue are their most common side effects.",
              "source": "StatPearls, Clonidine (NCBI Bookshelf)"
            },
            {
              "type": "update",
              "year": 2024,
              "title": "New drugs acting at receptors in this section",
              "text": "Two receptor subtypes the chapter describes now have approved drugs. **Muscarinic M1 and M4:** on **September 26, 2024** the FDA approved **xanomeline-trospium (Cobenfy)** for schizophrenia in adults, the first antipsychotic that works through **cholinergic** receptors **without blocking D2 receptors**. Xanomeline is an M1- and M4-preferring muscarinic agonist; **trospium** is a muscarinic antagonist that barely crosses the blood-brain barrier and blocks xanomeline's peripheral side effects. Its label warns about urinary retention, raised heart rate and reduced gut motility. **Histamine H3:** on **August 14, 2019** the FDA approved **pitolisant (Wakix)**, an **H3 antagonist/inverse agonist** that increases histamine release, for excessive daytime sleepiness and cataplexy in narcolepsy; it is not a controlled substance.",
              "source": "FDA approves Cobenfy (xanomeline-trospium), first muscarinic agonist for schizophrenia, September 2024 (Psychiatric Times); Wakix (pitolisant) prescribing information, DailyMed"
            }
          ]
        }
      ]
    },
    {
      "title": "Amino acid transmitters",
      "sections": [
        {
          "id": "s333-glu",
          "title": "Glutamate: pathways, receptors, astrocytes, plasticity and excitotoxicity",
          "blocks": [
            {
              "type": "p",
              "text": "For **more than 50 years**, thinking about transmitters in psychiatric illness centered on the **biogenic amines**. Over roughly the **last decade**, postmortem, imaging and genetic work has pointed to the amino acid transmitters, chiefly **glutamic acid** and **GABA**, as important and perhaps central players. Conditions named include **major depression**, **schizophrenia**, **Alzheimer disease**, **anxiety disorders** and **bipolar disorder**."
            },
            {
              "type": "h",
              "text": "Glutamate at a glance"
            },
            {
              "type": "list",
              "title": "Key numbers",
              "items": [
                "Glutamate carries **fast excitatory** signaling and is used at about **80 percent** of brain synapses, especially synapses on **dendritic spines**.",
                "Restoring the membrane potential after glutamate-driven depolarization may explain up to roughly **80 percent** of all **energy** the brain spends.",
                "Brain glutamate concentration is about **10 mM**, the **highest of any amino acid**.",
                "Only about **20 percent** of that glutamate is the **transmitter pool**."
              ]
            },
            {
              "type": "p",
              "text": "Two receptor families carry glutamate's postsynaptic effects. **Glutamate-gated cation channels** (ionotropic receptors) give fast transmission. **Metabotropic glutamate receptors (mGluRs)** are **G-protein-coupled**, in the same broad class as alpha-adrenergic and dopamine receptors, and they mainly **modulate** glutamate signaling."
            },
            {
              "type": "list",
              "title": "Major glutamatergic pathways",
              "items": [
                "All **primary sensory afferents** seem to use glutamate: **retinal ganglion cells**, **cochlear cells**, the **trigeminal nerve** and **spinal afferents**.",
                "**Thalamocortical projections**, which spread incoming information widely over the cortex.",
                "Corticolimbic **pyramidal neurons**, the main source of the cortex's intrinsic, associational and outgoing excitatory fibers.",
                "**Climbing fibers** to the **cerebellar cortex**.",
                "The **corticospinal tracts**."
              ]
            },
            {
              "type": "steps",
              "title": "Temporal lobe memory circuit (all glutamatergic)",
              "items": [
                [
                  "Perforant path",
                  "Projects onto the hippocampal **granule cells**."
                ],
                [
                  "Granule cells",
                  "Project onto **CA3 pyramidal cells**."
                ],
                [
                  "CA3 pyramidal cells",
                  "Project onto **CA1 pyramidal cells**."
                ],
                [
                  "Role",
                  "The chapter describes this chain as **four glutamatergic synapses** that matter for forming **new memories**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Ionotropic versus metabotropic glutamate receptors",
              "head": [
                "Feature",
                "Ionotropic",
                "Metabotropic (mGluR)"
              ],
              "rows": [
                [
                  "Mechanism",
                  "**Ligand-gated cation channel**",
                  "Acts through **G proteins**"
                ],
                [
                  "Main job",
                  "**Fast** excitatory transmission",
                  "Mostly **modulates** glutamate signaling"
                ],
                [
                  "Types",
                  "**AMPA**, **kainic acid (KA)** and **NMDA**, named for the selective synthetic analogs that activate them",
                  "**Eight** cloned so far; all respond to glutamate, with widely differing sensitivity"
                ],
                [
                  "Genes and structure",
                  "**16** mammalian subunit genes; receptors seem to be **tetramers**; subunit mix shapes pharmacology and biophysics",
                  "**Seven membrane-spanning** proteins of the G-protein-coupled superfamily"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Astrocytes at the glutamate synapse"
            },
            {
              "type": "p",
              "text": "Astrocyte **end-feet** wrap glutamate synapses. The astrocyte carries the two **sodium-dependent** transporters, **EAAT1** and **EAAT2**, that do most of the work of clearing glutamate and so end its action. Mice lacking either one (homozygous null) show high extracellular glutamate and **excitotoxic neurodegeneration**. In **amyotrophic lateral sclerosis** (ALS), several studies find reduced **EAAT2** protein and function in the spinal **ventral horn**."
            },
            {
              "type": "table",
              "caption": "Excitatory amino acid transporters (EAATs)",
              "head": [
                "Transporter",
                "Main site"
              ],
              "rows": [
                [
                  "**EAAT1**, **EAAT2**",
                  "**Astrocytes**; the main route for clearing synaptic glutamate"
                ],
                [
                  "**EAAT3**",
                  "Neuronal; **upper motor neurons**"
                ],
                [
                  "**EAAT4**",
                  "Mainly cerebellar **Purkinje cells**"
                ],
                [
                  "**EAAT5**",
                  "**Retina**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Astrocytes also carry **AMPA receptors**, which let them sense glutamate release. Two NMDA co-agonist systems are tied to this signal. **GlyT1**, on the astrocyte membrane, keeps synaptic glycine **below saturating** levels. The chapter states that it moves **three Na+** out per glycine taken in; because of this ratio, AMPA-driven depolarization of the astrocyte strongly **reverses** the transporter, so glycine is released in step with glutamate signaling. AMPA activation also makes **GRIP** let go of the AMPA receptor and bind **serine racemase**, switching it on to make **D-serine**."
            },
            {
              "type": "table",
              "caption": "D-serine versus glycine as NMDA co-agonists by brain region",
              "head": [
                "Region",
                "DAAO",
                "D-serine",
                "GlyT1",
                "Likely main NMDA modulator"
              ],
              "wide": true,
              "rows": [
                [
                  "**Corticolimbic** (forebrain)",
                  "Relatively **low**",
                  "**High**",
                  "Lower",
                  "**D-serine**"
                ],
                [
                  "**Cerebellum** and **brainstem**",
                  "**High**",
                  "**Low**",
                  "**Highest**",
                  "**Glycine**"
                ]
              ],
              "note": "D-amino acid oxidase (DAAO) breaks down D-serine, so regions rich in DAAO have little D-serine."
            },
            {
              "type": "h",
              "text": "Plasticity"
            },
            {
              "type": "p",
              "text": "Extinguishing conditioned fear is an **active** process that depends on **NMDA receptors** in the **amygdala**. In rats, NMDA antagonists **block** extinction, while **D-cycloserine**, a partial agonist at the **glycine modulatory site**, **speeds** it. D-cycloserine is a **tuberculosis antibiotic** with about **50 percent** of glycine's efficacy at the NMDA receptor. In people with **acrophobia**, one dose of D-cycloserine added to **CBT** gave a strong drop in symptoms lasting **at least 3 months** compared with placebo plus CBT. Other placebo-controlled trials also back it as a **CBT enhancer**, so boosting plasticity with a drug may strengthen psychotherapy."
            },
            {
              "type": "p",
              "text": "**Fragile X mental retardation protein (FMRP)** is missing in **fragile X syndrome**. It seems to be made locally in the spine during **NMDA receptor activation** and helps carry certain **mRNAs** to the spine for translation. FMRP-null mice and patients both have **fewer dendritic spines**, mostly of **immature** shape. Losing FMRP **exaggerates mGluR5** responses (mGluR5 drives dendritic protein synthesis), and in the knockout mice, blocking mGluR5 with an **antagonist** undoes the fragile X-like picture."
            },
            {
              "type": "h",
              "text": "Excitotoxicity"
            },
            {
              "type": "p",
              "text": "In the **early 1970s**, giving large systemic amounts of **monosodium glutamate** given to immature animals killed neurons in regions with a deficient **blood-brain barrier**. Excitotoxicity is also proposed as a proximate cause of neuron loss in **Alzheimer disease**, where most evidence points to aggregated **beta-amyloid**, especially **beta-amyloid 1-42**."
            },
            {
              "type": "list",
              "title": "How beta-amyloid makes neurons vulnerable to NMDA excitotoxicity",
              "items": [
                "Fibrils **depolarize** neurons, removing the **Mg2+ block** and making NMDA receptors more sensitive to glutamate.",
                "Fibrils impair glutamate **uptake into astrocytes**, raising extracellular glutamate.",
                "Beta-amyloid drives **oxidative stress** through **inflammation**, adding to the vulnerability."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Memantine",
              "text": "The chapter describes **memantine** as a **weak noncompetitive NMDA inhibitor**, which it calls recently approved for **mild to moderate** Alzheimer disease (it was approved in 2003 for **moderate to severe** disease; see the correction box). It dampens **tonic** NMDA sensitivity to excitotoxicity while sparing **phasic** transmission, which slows neuronal degeneration."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Drugs that help therapy work",
              "text": "D-cycloserine does not treat fear by itself in these studies; it is paired with **exposure-based CBT** to strengthen **NMDA-dependent extinction learning**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Animal data and transporter claims",
              "text": "The EAAT knockout, fear-extinction and FMRP rescue findings come from **mice and rats**. Keep them as animal evidence; the human data in this part are the acrophobia and other CBT trials and the ALS postmortem reports."
            },
            {
              "type": "update",
              "year": 2003,
              "title": "Correction: what memantine is approved for",
              "text": "The chapter describes memantine as newly approved for **mild to moderate** Alzheimer disease. The FDA approved it on **October 17, 2003** for **moderate to severe** Alzheimer disease; at the time it was the only drug approved for the more advanced stages, while the cholinesterase inhibitors covered mild to moderate disease. It is a moderate-affinity, uncompetitive **NMDA receptor antagonist**, and its benefit was described as modest. Its approved indication is still moderate to severe dementia of the Alzheimer type.",
              "source": "Memantine (Namenda) FDA approval, October 2003: moderate to severe Alzheimer disease (Psychiatric News 2004)"
            }
          ]
        },
        {
          "id": "s333-gaba",
          "title": "GABA, GABA-A and GABA-B receptors, and glycine",
          "blocks": [
            {
              "type": "p",
              "text": "**GABA** is the brain's **main inhibitory transmitter**. It is found throughout the brain at **millimolar** levels, so faulty GABA signaling has been tied to **seizure disorders**, **anxiety disorders**, **alcohol dependence** and **schizophrenia**. Structurally, GABA is glutamic acid minus **one carboxyl group**."
            },
            {
              "type": "steps",
              "title": "GABA synthesis and breakdown",
              "items": [
                [
                  "Synthesis",
                  "**Glutamic acid decarboxylase (GAD)** removes the **alpha-carboxyl** group of glutamic acid to make GABA."
                ],
                [
                  "Breakdown",
                  "**GABA transaminase (GABA-T)** turns GABA into **succinic semialdehyde**; the amino group usually goes to **alpha-ketoglutarate**, which regenerates glutamic acid."
                ],
                [
                  "Oxidation",
                  "**Succinic semialdehyde dehydrogenase (SSADH)** makes **succinic acid**, which goes back into the **Krebs cycle**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "The two forms of glutamic acid decarboxylase",
              "head": [
                "Form",
                "Location and role",
                "Null-mutant mice"
              ],
              "rows": [
                [
                  "**GAD65**",
                  "**Nerve terminals**; makes the GABA packed into **synaptic vesicles**",
                  "Higher **seizure** risk"
                ],
                [
                  "**GAD67**",
                  "Main source of **neuronal GABA** overall",
                  "**Die at birth**, have **cleft palate** and much less brain GABA"
                ]
              ],
              "note": "In the CNS, GAD seems confined to GABA neurons; outside it, GAD is found in pancreatic islet cells."
            },
            {
              "type": "p",
              "text": "The chapter describes GABA-T as a **membrane-bound** enzyme of neurons and glia facing the **extracellular** side. Blocking GABA breakdown is **anticonvulsant**. **Valproic acid** acts in part by **competitively inhibiting GABA-T**. **Gamma-vinyl-GABA** (**vigabatrin [Sabril]**) irreversibly inhibits GABA-T as a **suicide substrate**, and is described as an anticonvulsant used in Europe."
            },
            {
              "type": "p",
              "text": "GABA's synaptic action also ends by **high-affinity reuptake** into the terminal and into **astrocytes**. There are **four** distinct GABA transporters, each with **12 membrane-spanning domains** like other transmitter transporters. They run on the **sodium gradient**, so depolarization favors GABA moving **out** of the neuron. In astrocytes, GABA is broken down by GABA-T and converted to glutamic acid and then **glutamine**, which returns to the terminal for new GABA. **Tiagabine (Gabitril)** strongly blocks **GABA transport** and is used for **epilepsy**, with early hints of benefit in **panic disorder**."
            },
            {
              "type": "h",
              "text": "GABA-A receptors"
            },
            {
              "type": "p",
              "text": "GABA-A receptors are found **throughout the brain**. Opening the complex raises conductance with an equilibrium potential close to the resting potential of **-70 mV** (Figure 33-20). In **mature** neurons this usually means **Cl- influx** and **hyperpolarization**, which is inhibitory because it raises the threshold for firing. **Immature** neurons hold unusually **high intracellular Cl-**, so GABA-A activation can **depolarize** them instead. For this reason, anticonvulsants that boost GABA-A may **worsen seizures in newborns**."
            },
            {
              "type": "defs",
              "title": "Figure 33-20: structure of the GABA-A receptor",
              "items": [
                [
                  "Overall shape",
                  "A **heteropentamer** forming a receptor-channel complex."
                ],
                [
                  "GABA site",
                  "At the junction of the **alpha** and **beta** subunits."
                ],
                [
                  "Benzodiazepine site",
                  "At the junction of the **gamma** and **alpha** subunits."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Drugs that act at the GABA-A receptor",
              "head": [
                "Agent",
                "Effect on receptor",
                "Clinical result"
              ],
              "rows": [
                [
                  "**Barbiturates** (phenobarbital, pentobarbital)",
                  "Allosterically raise GABA and benzodiazepine site affinity; **lengthen long openings**, cut short ones",
                  "**Sedation**, **anticonvulsant**"
                ],
                [
                  "**Neurosteroids** (modified progesterone and corticosterone analogs)",
                  "Barbiturate-like but at a **separate site**; boost agonist binding and **channel open time**",
                  "**Sedative** and **anxiolytic** in behavioral studies"
                ],
                [
                  "**Anesthetics** as a class",
                  "Raise **chloride conductance**; sensitivity depends on **membrane-spanning** amino acids",
                  "Inhibit transmission"
                ],
                [
                  "**Ethanol**",
                  "Mechanism **unclear** (inconsistent data; subunit mix may matter); recent work: boosts **tonic** currents with the **delta** subunit, which binds GABA very avidly",
                  "Enhances GABA-A function"
                ],
                [
                  "**Picrotoxin**",
                  "Opposite of barbiturates: cuts long openings, favors the **briefest** state",
                  "Antagonist"
                ],
                [
                  "**Pentylenetetrazol**",
                  "Lowers **chloride permeability**",
                  "**Proconvulsant**"
                ],
                [
                  "**Penicillin** (high levels)",
                  "Binds **positively charged** residues and **plugs** the channel",
                  "**Proconvulsant**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Endogenous **neurosteroids** have been linked to behavior changes with steroid dosing or natural steroid swings and to **sex differences** in GABA drug effects. Site-directed mutagenesis has mapped benzodiazepine effects to subunits: removing benzodiazepine binding on **alpha-1** points to its role in **sedation** and **amnesia**, while knocking out the site on **alpha-2** abolishes the **anxiolytic** effect."
            },
            {
              "type": "h",
              "text": "GABA-B receptors"
            },
            {
              "type": "list",
              "items": [
                "Not blocked by **bicuculline**, the classic GABA-A antagonist.",
                "Strongly activated by **baclofen** (a 4-chlorophenyl GABA analog), which does nothing at GABA-A.",
                "**G-protein-coupled**, but unusual: a **dimer** of two seven-transmembrane subunits.",
                "Found widely, both **presynaptic** and **postsynaptic**.",
                "Postsynaptic: open **potassium channels**, giving **long-lasting hyperpolarization**.",
                "Presynaptic: act as **autoreceptors** and **heteroreceptors** that cut transmitter release."
              ]
            },
            {
              "type": "table",
              "caption": "GABA-A versus GABA-B receptors",
              "head": [
                "Feature",
                "GABA-A",
                "GABA-B"
              ],
              "rows": [
                [
                  "Type",
                  "**Chloride channel** (heteropentamer)",
                  "**G-protein-coupled** dimer"
                ],
                [
                  "Ion effect",
                  "**Cl-** influx in mature neurons",
                  "**K+** channel opening"
                ],
                [
                  "Bicuculline",
                  "**Blocked**",
                  "**Insensitive**"
                ],
                [
                  "Baclofen",
                  "Inactive",
                  "**Potent agonist**"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Glycine"
            },
            {
              "type": "p",
              "text": "**Glycine** is an inhibitory transmitter mainly in the **brainstem** and **spinal cord**, though receptor subunits found in **cortex**, **hippocampus** and **thalamus** hint at a wider role. A **nonessential** amino acid, it is built from **L-serine** in the brain; the enzyme is **serine hydroxymethyltransferase**. A proton-driven vesicular carrier, **VIAAT (also called VGAT)**, loads it into vesicles; the same carrier handles **GABA**. Reuptake into the terminal by **GlyT2** ends its action. GlyT2 is quite different from astrocytic **GlyT1**, which tunes NMDA function."
            },
            {
              "type": "p",
              "text": "Glycine's inhibition runs through a **ligand-gated chloride channel**. Other agonists at this receptor are **taurine**, **proline**, **beta-alanine**, **L-serine** and **L-alanine**; **GABA** has no effect. Its classic antagonist is the plant alkaloid **strychnine**, and binding of **[3H]strychnine** first identified it. Labeled glycine binds two sites: the strychnine-sensitive **glycine A** receptor and the strychnine-insensitive **glycine B** receptor, which is the NMDA receptor's **glycine modulatory site**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Benzodiazepine subunits",
              "text": "**Alpha-1**: sedative and amnestic effects. **Alpha-2**: anxiolytic effect. The benzodiazepine site sits between **gamma** and **alpha**; GABA binds between **alpha** and **beta**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Neonatal seizures",
              "text": "Because immature neurons carry high intracellular chloride, GABA-A activation can **excite** them, so GABA-enhancing anticonvulsants may **aggravate** seizures in the **neonatal period**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Two glycine transporters, two jobs",
              "text": "**GlyT2** (presynaptic) ends **inhibitory** glycine signaling in brainstem and cord; **GlyT1** (astrocytic) sets glycine at the **NMDA co-agonist** site."
            },
            {
              "type": "p",
              "text": "Note on terms: the chapter's \"alcohol dependence\" corresponds to **alcohol use disorder** in DSM-5-TR, and FMRP is now often called fragile X messenger ribonucleoprotein, with intellectual disability replacing the older term."
            }
          ]
        }
      ]
    },
    {
      "title": "Amino acid transmitters in psychiatric illness",
      "sections": [
        {
          "id": "s333-aascz",
          "title": "Neuropsychiatric implications: schizophrenia",
          "blocks": [
            {
              "type": "p",
              "text": "Thinking about the biology of schizophrenia is moving away from a pure **dopamine** story. Postmortem, drug and genetic work now points more and more toward **glutamate** and **GABA**. One reason for the shift is clinical: for about **50 years** treatment has relied on **D2 receptor antagonists** alone, yet **more than two-thirds** of treated patients still live with substantial disability."
            },
            {
              "type": "h",
              "text": "The GABAergic deficit in the cortex"
            },
            {
              "type": "p",
              "text": "The first postmortem clue was lower activity of **GAD** (the GABA-making enzyme) in the cortex of people with schizophrenia compared with matched controls. Later, immunocytochemistry and gene expression methods let researchers pin down which cells are affected."
            },
            {
              "type": "defs",
              "title": "Key players in the cortical GABA deficit",
              "items": [
                [
                  "Parvalbumin-positive interneurons",
                  "GABA cells in the cortex's **middle (intermediate) layers** that carry most of the pathology. They fire **rapidly** and supply **perisomatic** input to pyramidal cells."
                ],
                [
                  "Chandelier cells",
                  "One type of these interneurons. They give **negative feedback inhibition** to cortical **pyramidal cells**."
                ],
                [
                  "Reduced markers",
                  "Less **GAD67**, less **parvalbumin** and less **GAT** (the GABA transporter) are made."
                ],
                [
                  "Upregulated GABA-A receptors",
                  "Seen with **autoradiography** or **antibodies**; read as a sign that the **presynaptic** GABA neurons are **hypofunctional**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Reproducible pathology, weak genetic signal",
              "text": "Even though this GABA finding replicates well, GABA-related genes have **not stood out** in genome-wide searches. The chapter suggests the GABA deficit may be **secondary**, arising **downstream** of some earlier, more proximal genetic defect, not the primary cause."
            },
            {
              "type": "h",
              "text": "The NMDA receptor hypofunction theory"
            },
            {
              "type": "p",
              "text": "The idea that underactive **NMDA receptors** help cause schizophrenia began with **phencyclidine (PCP)** and related **dissociative anesthetics**. These drugs block NMDA receptors and can produce a state that may look **indistinguishable from schizophrenia**. They are called dissociative because the person stays **conscious** but cannot **form new memories**."
            },
            {
              "type": "list",
              "title": "What low-dose ketamine reproduces",
              "items": [
                "In human laboratory studies, a low-dose **ketamine** infusion brings on the **positive**, **negative** and **cognitive** symptom groups of schizophrenia while consciousness stays **clear**.",
                "It **enhances amphetamine-induced subcortical dopamine release**, as seen in schizophrenia.",
                "In experimental animals it produces abnormal cortical **event-related potentials (ERPs)**.",
                "In experimental animals it **disrupts prepulse inhibition**."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "PCP and ketamine model",
              "text": "Blocking **NMDA receptors** with **PCP** or **ketamine** can mimic **positive, negative and cognitive** features of schizophrenia, which is the main origin of the **NMDA receptor hypofunction** theory."
            },
            {
              "type": "table",
              "caption": "Putative schizophrenia risk genes tied to NMDA receptor function",
              "head": [
                "Gene or protein",
                "Link reported in the chapter"
              ],
              "rows": [
                [
                  "**DAAO**",
                  "Described as coding for an **activator of D-amino acid oxidase**; **repeatedly linked** to schizophrenia risk"
                ],
                [
                  "**D-amino acid oxidase**",
                  "The enzyme on its own is also tied to **higher risk**"
                ],
                [
                  "**Serine racemase**",
                  "A **promoter-region** allelic variant recently associated with risk"
                ],
                [
                  "**Neuregulin 1**",
                  "Called a **convincing** risk gene; **interacts directly** with NMDA receptors"
                ],
                [
                  "**Dysbindin**",
                  "Risk gene **expressed in glutamatergic terminals**"
                ],
                [
                  "**mGluR3**",
                  "Normally **turns down glutamate release**; associated with schizophrenia"
                ]
              ],
              "note": "The first three variants could each lower cortical **D-serine** and so weaken NMDA receptor function."
            },
            {
              "type": "p",
              "text": "Fitting this gene story, patients with schizophrenia have **significantly lower** **D-serine** in **CSF and blood**. D-serine acts as a **coagonist** at the NMDA receptor."
            },
            {
              "type": "h",
              "text": "Linking the two findings (Figure 33-21)"
            },
            {
              "type": "p",
              "text": "Newer work joins the GABA pathology to NMDA hypofunction. When rats are given **NMDA receptor antagonists chronically**, they lose expression of **GAD67**, **parvalbumin** and **GAT**, the same pattern seen in patients. The fast-firing interneurons have NMDA receptors that are **far more sensitive** to antagonists than those on quieter GABA cells or on pyramidal cells."
            },
            {
              "type": "steps",
              "title": "Pathologic circuit in schizophrenia (Figure 33-21)",
              "items": [
                [
                  "NMDA hypofunction",
                  "NMDA receptors on fast-firing **parvalbumin (PV)** GABA interneurons in the intermediate cortex are hit hardest by **antagonists** or by loss of the coagonist **D-serine**."
                ],
                [
                  "Interneuron changes",
                  "Expression of **PV**, **GAD67** and **GAT** falls; **GABA-A receptors** on pyramidal neurons are **upregulated**."
                ],
                [
                  "Disinhibition",
                  "Subtly weaker GABA inhibition **releases glutamatergic pyramidal output** from its brake."
                ],
                [
                  "Cortical symptoms",
                  "Loss of inhibitory feedback could explain **cognitive dysfunction** and **negative symptoms**."
                ],
                [
                  "Psychosis",
                  "Disinhibited output drives **excess subcortical dopamine release**, producing **psychosis**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Dopamine as the last link",
              "text": "In this model, **psychosis is a downstream event**. The primary fault lies in **glutamate and GABA** signaling in the **cerebral cortex**, and extra subcortical dopamine is the result. This may help explain why D2 blockade alone leaves many patients disabled."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Keep the certainty level",
              "text": "These gene links are **associations** and the circuit is a **model**. Animal data (chronic antagonist treatment in rats) support it, but the chapter does not present it as proven cause."
            }
          ]
        },
        {
          "id": "s333-aamood",
          "title": "Anxiety and depression; alcoholism",
          "blocks": [
            {
              "type": "p",
              "text": "Abnormal **GABA** signaling has been tied to anxiety disorders, above all **panic disorder**, and to **major depressive disorder**. In the clinic the two groups of disorders often **co-occur**."
            },
            {
              "type": "table",
              "caption": "GABA and glutamate findings in panic disorder and major depressive disorder",
              "head": [
                "Measure",
                "Panic disorder",
                "Major depressive disorder"
              ],
              "rows": [
                [
                  "Neurosteroids (3α-reduced GABA-A modulators)",
                  "Plasma levels **significantly raised**, perhaps as **compensation**",
                  "**Lower** in **plasma and CSF**; effective **SSRI** treatment **raises** them"
                ],
                [
                  "MRS of GABA",
                  "**Lower GABA** in **anterior cingulate** and **basal ganglia** (medicated patients)",
                  "**Lower GABA and Glx** in **prefrontal cortex**; lower **occipital** GABA during episodes, which **normalizes** with **SSRI** or **ECT**"
                ],
                [
                  "PET or postmortem",
                  "PET: selective **bilateral** loss of **benzodiazepine receptor sites** in the **insular cortex**",
                  "Postmortem: **GABA-A α1 and β3** subunits **upregulated** in cortex of depressed patients who died by **suicide**, consistent with reduced GABA transmission"
                ],
                [
                  "Genetics",
                  "Genome-wide screen: significant linkage at **15q**, a region holding **GABA-A subunit genes**",
                  "Not reported"
                ]
              ],
              "note": "MRS = magnetic resonance spectroscopy; Glx = glutamate/glutamine."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Neurosteroids point in opposite directions",
              "text": "Neuroactive steroid levels are **low in depression** (and rise with **SSRI** response) but **high in panic disorder**, where the rise may be **compensatory**."
            },
            {
              "type": "h",
              "text": "Glutamate and depression"
            },
            {
              "type": "list",
              "items": [
                "**NMDA receptor antagonists** act as antidepressants in several animal models: **learned helplessness**, **forced swim** and **tail suspension**.",
                "In rats, **one injection of ketamine** protects against induced **behavioral despair** for **up to 10 days**.",
                "**Chronic antidepressant** treatment changes which **NMDA receptor subunits** are expressed and lowers **glycine receptor B binding** (wording as printed).",
                "**Two placebo-controlled trials** found that **one dose of ketamine** gave a **rapid, substantial and lasting** drop in depressive symptoms in major depressive disorder."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Same drug, two pictures",
              "text": "**Ketamine** models schizophrenia in healthy volunteers yet relieves symptoms quickly in **major depressive disorder**. Both effects run through **NMDA receptor blockade**."
            },
            {
              "type": "h",
              "text": "Alcoholism"
            },
            {
              "type": "p",
              "text": "At intoxicating levels, **ethanol** does two things at once: it **boosts GABA receptor function** and **dampens NMDA receptor function**. The GABA action may underlie alcohol's **anxiolytic** effect."
            },
            {
              "type": "table",
              "caption": "Acute versus chronic ethanol effects on amino acid receptors",
              "head": [
                "Phase",
                "GABA-A receptors",
                "NMDA receptors",
                "Clinical result"
              ],
              "rows": [
                [
                  "Acute intoxication",
                  "Function **enhanced**",
                  "Function **attenuated**",
                  "**Anxiolysis** (GABA effect)"
                ],
                [
                  "Persistent abuse and dependence",
                  "**Downregulated**",
                  "**Upregulated**",
                  "Adapted brain relies on ethanol"
                ],
                [
                  "Abrupt stop",
                  "Too little inhibition",
                  "Excess excitation",
                  "**Hyperexcitable** state with **delirium tremens**"
                ],
                [
                  "Plus thiamine deficiency",
                  "Not stated",
                  "**Supersensitive**",
                  "May add to **excitotoxic** neuron loss in **Wernicke-Korsakoff syndrome**"
                ]
              ],
              "wide": true
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Withdrawal is a rebound",
              "text": "Stopping heavy drinking suddenly leaves **too few GABA-A** and **too many NMDA** receptors, so the brain swings into a **hyperexcitable** state; **delirium tremens** is the dangerous end of this."
            },
            {
              "type": "defs",
              "title": "Acamprosate",
              "items": [
                [
                  "What it is",
                  "A **homotaurine derivative** made to cut **drinking, craving and relapse**; trials show **moderate efficacy**."
                ],
                [
                  "First idea",
                  "Since **taurine looks like GABA**, people assumed it worked at **GABA-A receptors**, but **electrophysiologic** studies gave **little support**."
                ],
                [
                  "Later finding",
                  "It **blocked NMDA responses** both in **slices of cortex** and in **recombinant** receptors."
                ],
                [
                  "Open question",
                  "**Exactly how** it changes NMDA receptor function is **still unclear**."
                ]
              ]
            },
            {
              "type": "h",
              "text": "Fetal alcohol syndrome"
            },
            {
              "type": "p",
              "text": "Among preventable causes of what the chapter calls **mental retardation** (the current term is intellectual disability), **fetal alcohol syndrome** ranks **first**. Strong evidence links the **microencephaly** of fetal alcohol exposure to **NMDA receptor inhibition**, which triggers **widespread apoptosis** of neurons in the **developing cortex**. Young neurons **need NMDA receptor activation** to **survive and differentiate**."
            },
            {
              "type": "case",
              "title": "Ms. R, shaking on day two",
              "text": "A 52-year-old woman who has drunk heavily every day for years is admitted for surgery and stops drinking abruptly. Two days later she is agitated, tremulous and confused.",
              "point": "Long-term ethanol use downregulates GABA-A receptors and upregulates NMDA receptors, so sudden withdrawal unmasks a hyperexcitable state that can reach delirium tremens."
            },
            {
              "type": "update",
              "year": 2025,
              "title": "Glutamate-based treatment of depression: esketamine",
              "text": "The chapter describes ketamine's NMDA blockade mainly as a model of psychosis. Since then the glutamate system has given psychiatry a new antidepressant. The FDA approved **esketamine nasal spray (Spravato)** for **treatment-resistant depression** on **March 5, 2019**, used with an oral antidepressant, and on **January 21, 2025** approved it as the **first monotherapy** for adults with major depression who have not responded to **at least two** oral antidepressants. Esketamine is a nonselective, noncompetitive **NMDA receptor antagonist**; how it relieves depression is not fully known. Because of **sedation, dissociation, respiratory depression, abuse and misuse**, it is given only under supervision in certified settings through a **REMS** program.",
              "source": "FDA approves Spravato (esketamine) as first monotherapy for treatment-resistant depression, January 2025 (Pharmacy Times)"
            },
            {
              "type": "update",
              "year": 2017,
              "title": "D-cycloserine with exposure therapy: a small effect",
              "text": "The chapter presents D-cycloserine, a partial agonist at the NMDA glycine site, as a promising way to speed up exposure therapy. The largest analysis since then, an **individual participant data meta-analysis** of **21 trials** and about **1,050 patients** with anxiety disorders, OCD and PTSD (**Mataix-Cols and colleagues, JAMA Psychiatry 2017**), found only a **small augmentation effect** from pretreatment to posttreatment, no faster improvement by midtreatment, and no patient or study features that predicted who would benefit. The apparent effect of D-cycloserine also **declined** across trials published from 2004 onward. It is not an established part of routine exposure therapy.",
              "source": "Mataix-Cols D et al., D-cycloserine augmentation of exposure-based cognitive behavior therapy: individual participant data meta-analysis, JAMA Psychiatry 2017"
            }
          ]
        }
      ]
    }
  ]
});
