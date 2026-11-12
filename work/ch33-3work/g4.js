({
  title: "Amino acid transmitters",
  sections: [
    { id: "s333-glu", title: "Glutamate: pathways, receptors, astrocytes, plasticity and excitotoxicity", blocks: [
      { type: "p", text: "For **more than 50 years**, thinking about transmitters in psychiatric illness centered on the **biogenic amines**. Over roughly the **last decade**, postmortem, imaging and genetic work has pointed to the amino acid transmitters, chiefly **glutamic acid** and **GABA**, as important and perhaps central players. Conditions named include **major depression**, **schizophrenia**, **Alzheimer disease**, **anxiety disorders** and **bipolar disorder**." },
      { type: "h", text: "Glutamate at a glance" },
      { type: "list", title: "Key numbers", items: [
        "Glutamate carries **fast excitatory** signaling and is used at about **80 percent** of brain synapses, especially synapses on **dendritic spines**.",
        "Restoring the membrane potential after glutamate-driven depolarization may explain up to roughly **80 percent** of all **energy** the brain spends.",
        "Brain glutamate concentration is about **10 mM**, the **highest of any amino acid**.",
        "Only about **20 percent** of that glutamate is the **transmitter pool**."
      ] },
      { type: "p", text: "Two receptor families carry glutamate's postsynaptic effects. **Glutamate-gated cation channels** (ionotropic receptors) give fast transmission. **Metabotropic glutamate receptors (mGluRs)** are **G-protein-coupled**, in the same broad class as alpha-adrenergic and dopamine receptors, and they mainly **modulate** glutamate signaling." },
      { type: "list", title: "Major glutamatergic pathways", items: [
        "All **primary sensory afferents** seem to use glutamate: **retinal ganglion cells**, **cochlear cells**, the **trigeminal nerve** and **spinal afferents**.",
        "**Thalamocortical projections**, which spread incoming information widely over the cortex.",
        "Corticolimbic **pyramidal neurons**, the main source of the cortex's intrinsic, associational and outgoing excitatory fibers.",
        "**Climbing fibers** to the **cerebellar cortex**.",
        "The **corticospinal tracts**."
      ] },
      { type: "steps", title: "Temporal lobe memory circuit (all glutamatergic)", items: [
        ["Perforant path", "Projects onto the hippocampal **granule cells**."],
        ["Granule cells", "Project onto **CA3 pyramidal cells**."],
        ["CA3 pyramidal cells", "Project onto **CA1 pyramidal cells**."],
        ["Role", "The chapter describes this chain as **four glutamatergic synapses** that matter for forming **new memories**."]
      ] },
      { type: "table", caption: "Ionotropic versus metabotropic glutamate receptors", head: ["Feature", "Ionotropic", "Metabotropic (mGluR)"], rows: [
        ["Mechanism", "**Ligand-gated cation channel**", "Acts through **G proteins**"],
        ["Main job", "**Fast** excitatory transmission", "Mostly **modulates** glutamate signaling"],
        ["Types", "**AMPA**, **kainic acid (KA)** and **NMDA**, named for the selective synthetic analogs that activate them", "**Eight** cloned so far; all respond to glutamate, with widely differing sensitivity"],
        ["Genes and structure", "**16** mammalian subunit genes; receptors seem to be **tetramers**; subunit mix shapes pharmacology and biophysics", "**Seven membrane-spanning** proteins of the G-protein-coupled superfamily"]
      ] },
      { type: "h", text: "Astrocytes at the glutamate synapse" },
      { type: "p", text: "Astrocyte **end-feet** wrap glutamate synapses. The astrocyte carries the two **sodium-dependent** transporters, **EAAT1** and **EAAT2**, that do most of the work of clearing glutamate and so end its action. Mice lacking either one (homozygous null) show high extracellular glutamate and **excitotoxic neurodegeneration**. In **amyotrophic lateral sclerosis** (ALS), several studies find reduced **EAAT2** protein and function in the spinal **ventral horn**." },
      { type: "table", caption: "Excitatory amino acid transporters (EAATs)", head: ["Transporter", "Main site"], rows: [
        ["**EAAT1**, **EAAT2**", "**Astrocytes**; the main route for clearing synaptic glutamate"],
        ["**EAAT3**", "Neuronal; **upper motor neurons**"],
        ["**EAAT4**", "Mainly cerebellar **Purkinje cells**"],
        ["**EAAT5**", "**Retina**"]
      ] },
      { type: "p", text: "Astrocytes also carry **AMPA receptors**, which let them sense glutamate release. Two NMDA co-agonist systems are tied to this signal. **GlyT1**, on the astrocyte membrane, keeps synaptic glycine **below saturating** levels. The chapter states that it moves **three Na+** out per glycine taken in; because of this ratio, AMPA-driven depolarization of the astrocyte strongly **reverses** the transporter, so glycine is released in step with glutamate signaling. AMPA activation also makes **GRIP** let go of the AMPA receptor and bind **serine racemase**, switching it on to make **D-serine**." },
      { type: "table", caption: "D-serine versus glycine as NMDA co-agonists by brain region", head: ["Region", "DAAO", "D-serine", "GlyT1", "Likely main NMDA modulator"], wide: true, rows: [
        ["**Corticolimbic** (forebrain)", "Relatively **low**", "**High**", "Lower", "**D-serine**"],
        ["**Cerebellum** and **brainstem**", "**High**", "**Low**", "**Highest**", "**Glycine**"]
      ], note: "D-amino acid oxidase (DAAO) breaks down D-serine, so regions rich in DAAO have little D-serine." },
      { type: "h", text: "Plasticity" },
      { type: "p", text: "Extinguishing conditioned fear is an **active** process that depends on **NMDA receptors** in the **amygdala**. In rats, NMDA antagonists **block** extinction, while **D-cycloserine**, a partial agonist at the **glycine modulatory site**, **speeds** it. D-cycloserine is a **tuberculosis antibiotic** with about **50 percent** of glycine's efficacy at the NMDA receptor. In people with **acrophobia**, one dose of D-cycloserine added to **CBT** gave a strong drop in symptoms lasting **at least 3 months** compared with placebo plus CBT. Other placebo-controlled trials also back it as a **CBT enhancer**, so boosting plasticity with a drug may strengthen psychotherapy." },
      { type: "p", text: "**Fragile X mental retardation protein (FMRP)** is missing in **fragile X syndrome**. It seems to be made locally in the spine during **NMDA receptor activation** and helps carry certain **mRNAs** to the spine for translation. FMRP-null mice and patients both have **fewer dendritic spines**, mostly of **immature** shape. Losing FMRP **exaggerates mGluR5** responses (mGluR5 drives dendritic protein synthesis), and in the knockout mice, blocking mGluR5 with an **antagonist** undoes the fragile X-like picture." },
      { type: "h", text: "Excitotoxicity" },
      { type: "p", text: "In the **early 1970s**, giving large systemic amounts of **monosodium glutamate** given to immature animals killed neurons in regions with a deficient **blood-brain barrier**. Excitotoxicity is also proposed as a proximate cause of neuron loss in **Alzheimer disease**, where most evidence points to aggregated **beta-amyloid**, especially **beta-amyloid 1-42**." },
      { type: "list", title: "How beta-amyloid makes neurons vulnerable to NMDA excitotoxicity", items: [
        "Fibrils **depolarize** neurons, removing the **Mg2+ block** and making NMDA receptors more sensitive to glutamate.",
        "Fibrils impair glutamate **uptake into astrocytes**, raising extracellular glutamate.",
        "Beta-amyloid drives **oxidative stress** through **inflammation**, adding to the vulnerability."
      ] },
      { type: "callout", kind: "exam", title: "Memantine", text: "The chapter describes **memantine** as a **weak noncompetitive NMDA inhibitor**, which it calls recently approved for **mild to moderate** Alzheimer disease (it was approved in 2003 for **moderate to severe** disease; see the correction box). It dampens **tonic** NMDA sensitivity to excitotoxicity while sparing **phasic** transmission, which slows neuronal degeneration." },
      { type: "callout", kind: "pearl", title: "Drugs that help therapy work", text: "D-cycloserine does not treat fear by itself in these studies; it is paired with **exposure-based CBT** to strengthen **NMDA-dependent extinction learning**." },
      { type: "callout", kind: "caution", title: "Animal data and transporter claims", text: "The EAAT knockout, fear-extinction and FMRP rescue findings come from **mice and rats**. Keep them as animal evidence; the human data in this part are the acrophobia and other CBT trials and the ALS postmortem reports." }
    ] },
    { id: "s333-gaba", title: "GABA, GABA-A and GABA-B receptors, and glycine", blocks: [
      { type: "p", text: "**GABA** is the brain's **main inhibitory transmitter**. It is found throughout the brain at **millimolar** levels, so faulty GABA signaling has been tied to **seizure disorders**, **anxiety disorders**, **alcohol dependence** and **schizophrenia**. Structurally, GABA is glutamic acid minus **one carboxyl group**." },
      { type: "steps", title: "GABA synthesis and breakdown", items: [
        ["Synthesis", "**Glutamic acid decarboxylase (GAD)** removes the **alpha-carboxyl** group of glutamic acid to make GABA."],
        ["Breakdown", "**GABA transaminase (GABA-T)** turns GABA into **succinic semialdehyde**; the amino group usually goes to **alpha-ketoglutarate**, which regenerates glutamic acid."],
        ["Oxidation", "**Succinic semialdehyde dehydrogenase (SSADH)** makes **succinic acid**, which goes back into the **Krebs cycle**."]
      ] },
      { type: "table", caption: "The two forms of glutamic acid decarboxylase", head: ["Form", "Location and role", "Null-mutant mice"], rows: [
        ["**GAD65**", "**Nerve terminals**; makes the GABA packed into **synaptic vesicles**", "Higher **seizure** risk"],
        ["**GAD67**", "Main source of **neuronal GABA** overall", "**Die at birth**, have **cleft palate** and much less brain GABA"]
      ], note: "In the CNS, GAD seems confined to GABA neurons; outside it, GAD is found in pancreatic islet cells." },
      { type: "p", text: "The chapter describes GABA-T as a **membrane-bound** enzyme of neurons and glia facing the **extracellular** side. Blocking GABA breakdown is **anticonvulsant**. **Valproic acid** acts in part by **competitively inhibiting GABA-T**. **Gamma-vinyl-GABA** (**vigabatrin [Sabril]**) irreversibly inhibits GABA-T as a **suicide substrate**, and is described as an anticonvulsant used in Europe." },
      { type: "p", text: "GABA's synaptic action also ends by **high-affinity reuptake** into the terminal and into **astrocytes**. There are **four** distinct GABA transporters, each with **12 membrane-spanning domains** like other transmitter transporters. They run on the **sodium gradient**, so depolarization favors GABA moving **out** of the neuron. In astrocytes, GABA is broken down by GABA-T and converted to glutamic acid and then **glutamine**, which returns to the terminal for new GABA. **Tiagabine (Gabitril)** strongly blocks **GABA transport** and is used for **epilepsy**, with early hints of benefit in **panic disorder**." },
      { type: "h", text: "GABA-A receptors" },
      { type: "p", text: "GABA-A receptors are found **throughout the brain**. Opening the complex raises conductance with an equilibrium potential close to the resting potential of **-70 mV** (Figure 33-20). In **mature** neurons this usually means **Cl- influx** and **hyperpolarization**, which is inhibitory because it raises the threshold for firing. **Immature** neurons hold unusually **high intracellular Cl-**, so GABA-A activation can **depolarize** them instead. For this reason, anticonvulsants that boost GABA-A may **worsen seizures in newborns**." },
      { type: "defs", title: "Figure 33-20: structure of the GABA-A receptor", items: [
        ["Overall shape", "A **heteropentamer** forming a receptor-channel complex."],
        ["GABA site", "At the junction of the **alpha** and **beta** subunits."],
        ["Benzodiazepine site", "At the junction of the **gamma** and **alpha** subunits."]
      ] },
      { type: "table", caption: "Drugs that act at the GABA-A receptor", head: ["Agent", "Effect on receptor", "Clinical result"], rows: [
        ["**Barbiturates** (phenobarbital, pentobarbital)", "Allosterically raise GABA and benzodiazepine site affinity; **lengthen long openings**, cut short ones", "**Sedation**, **anticonvulsant**"],
        ["**Neurosteroids** (modified progesterone and corticosterone analogs)", "Barbiturate-like but at a **separate site**; boost agonist binding and **channel open time**", "**Sedative** and **anxiolytic** in behavioral studies"],
        ["**Anesthetics** as a class", "Raise **chloride conductance**; sensitivity depends on **membrane-spanning** amino acids", "Inhibit transmission"],
        ["**Ethanol**", "Mechanism **unclear** (inconsistent data; subunit mix may matter); recent work: boosts **tonic** currents with the **delta** subunit, which binds GABA very avidly", "Enhances GABA-A function"],
        ["**Picrotoxin**", "Opposite of barbiturates: cuts long openings, favors the **briefest** state", "Antagonist"],
        ["**Pentylenetetrazol**", "Lowers **chloride permeability**", "**Proconvulsant**"],
        ["**Penicillin** (high levels)", "Binds **positively charged** residues and **plugs** the channel", "**Proconvulsant**"]
      ] },
      { type: "p", text: "Endogenous **neurosteroids** have been linked to behavior changes with steroid dosing or natural steroid swings and to **sex differences** in GABA drug effects. Site-directed mutagenesis has mapped benzodiazepine effects to subunits: removing benzodiazepine binding on **alpha-1** points to its role in **sedation** and **amnesia**, while knocking out the site on **alpha-2** abolishes the **anxiolytic** effect." },
      { type: "h", text: "GABA-B receptors" },
      { type: "list", items: [
        "Not blocked by **bicuculline**, the classic GABA-A antagonist.",
        "Strongly activated by **baclofen** (a 4-chlorophenyl GABA analog), which does nothing at GABA-A.",
        "**G-protein-coupled**, but unusual: a **dimer** of two seven-transmembrane subunits.",
        "Found widely, both **presynaptic** and **postsynaptic**.",
        "Postsynaptic: open **potassium channels**, giving **long-lasting hyperpolarization**.",
        "Presynaptic: act as **autoreceptors** and **heteroreceptors** that cut transmitter release."
      ] },
      { type: "table", caption: "GABA-A versus GABA-B receptors", head: ["Feature", "GABA-A", "GABA-B"], rows: [
        ["Type", "**Chloride channel** (heteropentamer)", "**G-protein-coupled** dimer"],
        ["Ion effect", "**Cl-** influx in mature neurons", "**K+** channel opening"],
        ["Bicuculline", "**Blocked**", "**Insensitive**"],
        ["Baclofen", "Inactive", "**Potent agonist**"]
      ] },
      { type: "h", text: "Glycine" },
      { type: "p", text: "**Glycine** is an inhibitory transmitter mainly in the **brainstem** and **spinal cord**, though receptor subunits found in **cortex**, **hippocampus** and **thalamus** hint at a wider role. A **nonessential** amino acid, it is built from **L-serine** in the brain; the enzyme is **serine hydroxymethyltransferase**. A proton-driven vesicular carrier, **VIAAT (also called VGAT)**, loads it into vesicles; the same carrier handles **GABA**. Reuptake into the terminal by **GlyT2** ends its action. GlyT2 is quite different from astrocytic **GlyT1**, which tunes NMDA function." },
      { type: "p", text: "Glycine's inhibition runs through a **ligand-gated chloride channel**. Other agonists at this receptor are **taurine**, **proline**, **beta-alanine**, **L-serine** and **L-alanine**; **GABA** has no effect. Its classic antagonist is the plant alkaloid **strychnine**, and binding of **[3H]strychnine** first identified it. Labeled glycine binds two sites: the strychnine-sensitive **glycine A** receptor and the strychnine-insensitive **glycine B** receptor, which is the NMDA receptor's **glycine modulatory site**." },
      { type: "callout", kind: "exam", title: "Benzodiazepine subunits", text: "**Alpha-1**: sedative and amnestic effects. **Alpha-2**: anxiolytic effect. The benzodiazepine site sits between **gamma** and **alpha**; GABA binds between **alpha** and **beta**." },
      { type: "callout", kind: "caution", title: "Neonatal seizures", text: "Because immature neurons carry high intracellular chloride, GABA-A activation can **excite** them, so GABA-enhancing anticonvulsants may **aggravate** seizures in the **neonatal period**." },
      { type: "callout", kind: "pearl", title: "Two glycine transporters, two jobs", text: "**GlyT2** (presynaptic) ends **inhibitory** glycine signaling in brainstem and cord; **GlyT1** (astrocytic) sets glycine at the **NMDA co-agonist** site." },
      { type: "p", text: "Note on terms: the chapter's \"alcohol dependence\" corresponds to **alcohol use disorder** in DSM-5-TR, and FMRP is now often called fragile X messenger ribonucleoprotein, with intellectual disability replacing the older term." }
    ] }
  ]
})
