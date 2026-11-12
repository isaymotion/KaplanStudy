({
  title: "Gaseous transmitters",
  sections: [
    { id: "s334-no", title: "Novel neurotransmitters: nitric oxide", blocks: [
      { type: "p", text: "Finding that a **gas** can carry signals between neurons showed that brain signaling can be very unusual. **Nitric oxide (NO)** was the **first gas** shown to act as a neurotransmitter, in the **early 1990s**. It breaks almost every rule that classic transmitters follow." },
      { type: "table", caption: "Classic transmitter versus nitric oxide (see Figure 33-23)", head: ["Feature", "Classic transmitter", "Nitric oxide"], rows: [
        ["Storage and release", "Packed in and released from synaptic vesicles", "**Not stored in vesicles**; made on demand and simply diffuses out"],
        ["How it reaches the target", "Crosses the synapse to the outer membrane", "**Diffuses freely** through the membrane into the next neuron"],
        ["Target", "A specific receptor on the cell surface", "**Intracellular proteins** (for example the enzyme **guanylyl cyclase**) whose activity it changes directly"],
        ["Removal", "Reuptake or enzyme breakdown", "**No reuptake**; an enzyme that inactivates it is proposed but not proven"],
        ["Lifetime", "Variable", "**Half-life of a few seconds**"]
      ] },
      { type: "p", text: "NO was first known outside the brain. Immune cells called **macrophages** release it to **kill bacteria**. Blood vessel lining releases it as the **endothelium-derived relaxing factor** that **widens vessels**. Later work found brain roles in **neurotransmission**, **learning and memory**, **neurogenesis** and **neurodegenerative disease**." },
      { type: "steps", title: "How NO signals inside the target neuron (see Figure 33-23)", items: [
        ["Made by an enzyme", "A **nitric oxide synthase (NOS)** enzyme generates the gas in the sending neuron."],
        ["Diffuses", "The gas crosses into a neighboring neuron without any surface receptor."],
        ["Activates guanylyl cyclase", "Inside, it switches on **guanylyl cyclase**, which turns **GTP** into the second messenger **cGMP**."],
        ["Downstream effects", "cGMP partly drives **protein kinases**, **new gene expression**, and shifts in **LTP** and **LTD** (long-term potentiation and depression)."]
      ] },
      { type: "callout", kind: "exam", title: "Atypical transmitter in one line", text: "NO has **no vesicle**, **no surface receptor** and **no reuptake**; it diffuses into the target cell and acts through **guanylyl cyclase and cGMP**." },
      { type: "h", text: "Behavior, sexual function and sleep" },
      { type: "table", caption: "Mice lacking neuronal NOS (nNOS)", head: ["Sex", "Behavioral change"], rows: [
        ["Male", "**More aggressive** and **more sexual activity**"],
        ["Female", "**Less aggression** (the opposite pattern)"]
      ], note: "Because mania can bring both **hypersexuality** and **aggression**, the NO pathway may play a part in the psychopathology of mood states. This is a hypothesis drawn from mouse data." },
      { type: "steps", title: "Nitric oxide and penile erection (see Figure 33-23)", items: [
        ["Nerve signal", "**nNOS** sits in nerves supplying penile blood vessels, including the **corpus cavernosa**; firing these nerves releases NO."],
        ["Second messenger", "NO raises **cGMP**, which relaxes the vessel wall and dilates it."],
        ["Initial erection", "Engorgement produces the first phase of erection."],
        ["Sustained phase", "**Turbulent blood flow** phosphorylates **eNOS**, keeping NO production going."],
        ["Drug action", "**Sildenafil (Viagra)**, **vardenafil (Levitra)** and **tadalafil (Cialis)** block **phosphodiesterase type 5 (PDE5)**, the enzyme that breaks down penile cGMP, so the NO signal is boosted."]
      ] },
      { type: "list", title: "Sleep and wakefulness", items: [
        "Neurons that express nNOS lie in regions that start **REM sleep**: the **pons**, the **dorsal raphe nucleus**, and the **laterodorsal** and **pedunculopontine tegmentum**.",
        "In animals, injecting compounds that **release NO** cut **wakefulness** and raised **slow-wave sleep** against controls.",
        "**NOS inhibitors** tended to lower both slow-wave and REM sleep.",
        "**nNOS-deficient** animals have **less REM sleep**, but mice lacking **inducible NOS (iNOS)** show the **reverse**, so the isoforms seem to interact in a complex way."
      ] },
      { type: "h", text: "Mood disorders and schizophrenia" },
      { type: "list", title: "Mood disorders", items: [
        "NOS neurons are common in regions tied to depression: the **dorsal raphe nucleus** and the **prefrontal cortex**.",
        "**SSRIs** can **directly inhibit NOS**, hinting that NO shares in antidepressant response.",
        "In the **forced swim test**, **NOS inhibitors** and **soluble guanylyl cyclase inhibitors** produce antidepressant-like effects.",
        "**Bipolar disorder**: plasma NO was **higher** than in healthy controls.",
        "**Depression**: studies found **lower NO** with **higher plasma nitrite**, an NO byproduct.",
        "**Reduced NOS** was reported in the **paraventricular nucleus** in schizophrenia and in depression.",
        "Whether NO controls **serotonin, norepinephrine and dopamine** terminals has **no clear consensus**; it can raise or lower their activity depending on **timing** and **brain region**."
      ] },
      { type: "callout", kind: "pearl", title: "An SSRI link", text: "SSRIs are usually described by their transporter action, yet they can also **inhibit NOS directly**, one reason NO is studied as part of **antidepressant response**." },
      { type: "list", title: "Schizophrenia", items: [
        "**Two genetic studies** found schizophrenia-linked **SNPs** in **CAPON**, a protein that binds nNOS.",
        "SNPs in **nNOS itself** were also linked, but **other groups could not replicate** this.",
        "Postmortem NOS changes appear in **cortex, cerebellum, hypothalamus and brainstem**, with **no consistent direction**.",
        "**Platelets** from both **drug-naive** and **treated** patients show **raised NOS activity**; studies of NO activity disagree (some higher, some lower).",
        "Autopsies show NOS neurons **misplaced** in the **hippocampus**, **prefrontal cortex** and **lateral temporal lobe**, which fits **abnormal neuronal migration** in development.",
        "In rats, **prenatal stress** reduced NOS neurons in the **fascia dentata** (printed as \"fascia dentate\") and hippocampus."
      ] },
      { type: "callout", kind: "caution", title: "Mixed findings", text: "NO findings in schizophrenia and mood disorders are **inconsistent** (unreplicated SNPs, opposite directions of change). Treat them as **leads, not established mechanisms**." },
      { type: "h", text: "Nitric oxide in neuropathology" },
      { type: "steps", title: "How NO damages cells", items: [
        ["Peroxynitrite", "**Superoxide**, a normal metabolic byproduct, combines with NO to make **peroxynitrite (ONOO-)**, an unstable toxic molecule."],
        ["Protein nitration", "Peroxynitrite attaches to **tyrosine** residues of proteins (**protein nitration**) and also to **DNA**, so cells malfunction."],
        ["Excitotoxicity", "In **ischemic stroke**, overdriven **NMDA receptors** kill neurons; NO made after NMDA activation seems to carry much of this death, and **mice lacking nNOS** have **smaller stroke damage**."]
      ] },
      { type: "defs", title: "S-nitrosylation in neurodegeneration", items: [
        ["Parkin (Parkinson disease)", "An **E3 ubiquitin ligase** that tags proteins with ubiquitin for the **proteasome**. Its **mutations** cause **early-onset** disease. In **sporadic** Parkinson disease, NO can **nitrosylate Parkin** and block its protective role, which may favor death of **dopaminergic neurons**."],
        ["Protein disulfide isomerase (PDI)", "A protective protein that may help clear **misfolded proteins** such as amyloid fibrils. In **both Alzheimer and Parkinson disease**, PDI appears harmfully **S-nitrosylated**, which blunts its protection."],
        ["Alzheimer disease", "Oxidation of brain proteins, lipids and carbohydrates is long known; **nitrosative stress** from excess NO also seems to take part."]
      ] },
      { type: "p", text: "These findings suggest two goals: **earlier diagnosis** by detecting NO damage before full symptoms, and drugs that **protect key neuronal proteins**." },
      { type: "callout", kind: "caution", title: "Why not just block NOS?", text: "NOS works all over the body, so **blanket, nonspecific** inhibition or stimulation is likely to cause **significant side effects**." }
    ] },
    { id: "s334-co", title: "Carbon monoxide", blocks: [
      { type: "p", text: "**Carbon monoxide (CO)** is best known as a **combustion pollutant**, yet many organisms, from **bacteria to humans**, make it on purpose. Once seen as a toxic leftover of metabolism, it is now viewed as a regulator of many processes in brain and body." },
      { type: "list", title: "Physiologic roles", items: [
        "Regulates **olfactory neurotransmission**.",
        "**Relaxes blood vessels**.",
        "Affects **smooth muscle cell proliferation**.",
        "Affects **platelet aggregation**."
      ] },
      { type: "h", text: "Toxicity" },
      { type: "p", text: "CO grips the **heme** in hemoglobin, forming **carboxyhemoglobin**, which cannot carry oxygen. Its affinity for hemoglobin is **higher than that of oxygen**." },
      { type: "table", caption: "Carboxyhemoglobin levels and what they mean", head: ["Situation", "Carboxyhemoglobin", "Meaning"], rows: [
        ["Nonsmoker", "**Below 2%**", "Baseline"],
        ["Smoker of **1 to 2 packs a day**", "**3% to 8%**", "Typical chronic level"],
        ["Acute poisoning", "**5% to 10%**", "**Impaired alertness and cognition**"],
        ["Acute poisoning", "**30% to 50%**", "**Large fall in oxygen delivery** to tissues"]
      ] },
      { type: "callout", kind: "exam", title: "Know the numbers", text: "Nonsmokers carry **under 2 percent** carboxyhemoglobin; heavy smokers **3 to 8 percent**. After acute exposure, **5 to 10 percent** dulls alertness and thinking, and **30 to 50 percent** sharply cuts tissue oxygen." },
      { type: "steps", title: "Making carbon monoxide (see Figure 33-24)", items: [
        ["Heme oxygenase", "The enzyme **heme oxygenase (HO)** breaks down **heme**, giving **CO**, **biliverdin** and **free iron (Fe)**."],
        ["Bilirubin", "**Biliverdin reductase** turns biliverdin into **bilirubin**, which may be an important **antioxidant** rather than mere waste."],
        ["Diffusion", "Like NO, CO is **not stored in vesicles** and crosses membranes freely."],
        ["Signaling", "CO activates **soluble guanylyl cyclase** and other messengers such as **p38 MAP kinase**, at levels **far below** those that cause toxicity."]
      ], },
      { type: "p", text: "There are **two distinct heme oxygenase enzymes**, and **one is found mainly in the brain**, which underlines the pathway's importance in neurons. The text names them **HO1** and **HO2**." },
      { type: "table", caption: "Carbon monoxide in neurotransmission", head: ["System", "Finding"], rows: [
        ["Smell", "Odorants trigger CO and then **cGMP**, which supports **long-term adaptation to odors**. Wider effects on perception and cognition are **untested**."],
        ["Rat retina", "Long **light exposure** raised **HO1**, CO and cGMP signaling."],
        ["Chronic pain", "**HO2-deficient** animals show **less hyperalgesia and allodynia**; CO may **set the pain threshold**, but whether centrally or peripherally is **unclear**."],
        ["Ion channel", "CO may **bind and open** the **BKCa** channel (a calcium-activated big potassium channel), with effects not yet characterized."],
        ["Gut", "CO **relaxes the internal anal sphincter** after **VIP** (vasoactive intestinal peptide) and **NANC** (nonadrenergic noncholinergic) nerve stimulation."],
        ["Carotid body", "**Glomus cells** use **oxygen** as HO's substrate to make CO; when oxygen falls, CO falls, **resetting the oxygen-sensing threshold**, possibly through the carotid body **BK channel**."]
      ] },
      { type: "callout", kind: "pearl", title: "Toxin and sensor", text: "The same gas that blocks oxygen transport at toxic levels helps the **carotid body sense oxygen** at physiologic levels, because HO needs **oxygen** to make CO." },
      { type: "table", caption: "Carbon monoxide and hippocampal LTP: conflicting evidence", head: ["Supports a role", "Argues against"], rows: [
        ["CO plus **tetanic stimulation** raises **EPSPs**.", "**HO2-deficient** animals show **no change in LTP**."],
        ["**HO inhibitors** impair **LTP induction** and lower **calcium-dependent glutamate release**.", "Possible explanations: **HO1** may be the relevant enzyme, or HO inhibitors may **nonspecifically** block other steps needed for LTP."]
      ] },
      { type: "callout", kind: "caution", title: "Unsettled evidence", text: "CO's role in **LTP** rests on **contradictory** results; do not state it as proven." }
    ] }
  ]
})
