({
  title: "Foundations of drug treatment",
  sections: [
    {
      id: "s210-intro",
      title: "Naming and classifying psychotropic drugs",
      blocks: [
        { type: "p", text: "**Psychotropic drugs** (psychiatric drugs) are usually named by their **primary clinical use**: antidepressants, antipsychotics, mood stabilizers, anxiolytics, hypnotics, cognitive enhancers and stimulants. The weakness of this scheme is that many drugs have **several indications**: SSRIs treat both depression and anxiety, and SDAs are both antipsychotics and mood stabilizers. Many drugs made for medical and neurologic conditions are also routinely used in psychiatry." },
        { type: "defs", title: "Other ways drugs are grouped", items: [
          ["Structure", "For example, **tricyclic**."],
          ["Mechanism", "For example, **monoamine oxidase inhibitor (MAOI)**."],
          ["History", "**First-generation**, traditional."],
          ["Uniqueness", "**Atypical**."],
          ["Indication", "**Antidepressant**, antipsychotic, and so on. Chapter 21 uses this scheme."]
        ] },
        { type: "p", text: "Terminology has shifted over time: the first antipsychotics were **tranquilizers** (later **major** tranquilizers, with anxiolytics as **minor** tranquilizers); antidepressants went from **TCAs and MAOIs** to second- and third-generation agents; antipsychotics became **typical (conventional, first-generation)** or **atypical (second-generation)**. Most psychotropics are now generic; brand names in the book are US brands." }
      ]
    },
    {
      id: "s210-select",
      title: "Drug selection and drug factors",
      blocks: [
        { type: "p", text: "All FDA-approved psychotropics are **similar in overall effectiveness** for their indicated disorder but differ in pharmacology and in efficacy and side effects for **individual patients**. No drug is universally effective and none is clearly superior for a major disorder, with one exception: **clozapine** for **treatment-refractory schizophrenia**. Some drugs fill a **niche** for a subgroup without being better overall. Choice is case by case, weighing the drug, the patient and the illness." },
        { type: "defs", items: [
          ["Pharmacokinetics", "What the **body does to the drug**: absorption, distribution, metabolism and excretion; the time course of drug levels; **pharmacokinetic interactions** change the levels of another drug."],
          ["Pharmacodynamics", "What the **drug does to the body**: receptor mechanisms, the **dose–response curve**, the **therapeutic index**, and tolerance, dependence and withdrawal; **pharmacodynamic interactions** change another drug's biologic effect."],
          ["Pharmacogenetics", "How **genetic variation** shapes drug response and side effects, through metabolizing enzymes and CNS targets."]
        ] },
        { type: "p", text: "Drugs in the same class differ in **molecular structure**, transmitter interactions, pharmacokinetics, **active metabolites** and **protein binding**. With patient biology, these determine efficacy, tolerability, safety and the risk-to-benefit ratio." },
        { type: "h", text: "Mechanisms" },
        { type: "p", text: "Standard accounts focus on how drugs change synaptic **dopamine, serotonin, norepinephrine, histamine, GABA or acetylcholine** through receptor agonism or antagonism, reuptake inhibition, enhanced release or **enzyme inhibition**. Some act elsewhere: **lithium** directly inhibits **inositol-1-phosphatase**. Some links are tight: most antipsychotics block **D2 receptors**; benzodiazepines bind a complex containing **benzodiazepine and GABA receptors**." },
        { type: "callout", kind: "pearl", title: "Mechanisms are an oversimplification", text: "If changing transmitter levels were enough, every drug with the same synaptic effect would work equally well, and they do not. **Downstream actions** several steps from the receptor probably explain clinical improvement. Drugs that do not target monoamines also work: **ketamine** (glutamate) rapidly relieves depression as a slow infusion, and the antibiotic **minocycline** has antidepressant effects, pointing to **immune and inflammatory** mechanisms." },
        { type: "table", caption: "Glossary of receptor–drug interactions", head: ["Interaction", "Definition", "Examples"], rows: [
          ["**Agonist** (full agonist)", "Binds a receptor and produces the **same effect as the natural transmitter**", "Opioids (morphine, methadone, oxycodone, heroin, fentanyl); **benzodiazepines** at the GABA receptor complex"],
          ["**Antagonist**", "Binds a receptor and **blocks or reduces** an agonist's action; **competitive** if it competes for the same site, **noncompetitive** otherwise", "**Flumazenil** (competitive benzodiazepine antagonist); antipsychotics at **D2**; opioid antagonists **naltrexone** and **naloxone**"],
          ["**Partial agonist** (mixed agonist)", "Even at full occupancy produces only a **partial response**; acts as an agonist when transmitter levels are low", "**Buprenorphine**: opioid effects with a lower maximum than full agonists, easing withdrawal"],
          ["**Inverse agonist**", "Binds the agonist's receptor but produces the **opposite effect**", "**Ro15-4513** at the benzodiazepine site causes severe anxiety; cannabinoid inverse agonists **reduce appetite**"]
        ] }
      ]
    }
  ]
})
