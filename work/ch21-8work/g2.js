({
  title: "Memantine",
  sections: [
    {
      id: "s218-mem-pk",
      title: "Memantine pharmacology",
      blocks: [
        { type: "defs", title: "Pharmacokinetics", items: [
          ["Absorption", "Well absorbed; peak in **3 to 7 hours**; **food does not matter**; linear kinetics."],
          ["Half-life", "**60 to 80 hours**; protein binding **45%**."],
          ["Elimination", "Little metabolism: **57% to 82%** is excreted **unchanged in the urine**. Its three polar metabolites have minimal NMDA activity."]
        ] },
        { type: "p", text: "Memantine is a **low- to moderate-affinity NMDA receptor antagonist**. Glutamate drives learning and memory pathways, but **excess glutamate** overstimulates NMDA receptors and lets **too much calcium** into neurons, contributing to cell death in Alzheimer disease. Memantine **partially blocks** the abnormal, excessive signaling while leaving **physiologic transmission** intact." },
        { type: "callout", kind: "exam", text: "Memantine: **NMDA antagonist**, **renally** excreted unchanged, half-life **60 to 80 hours**. Contrast donepezil: cholinesterase inhibitor, **hepatic** CYP2D6 and 3A4 metabolism, half-life 70 hours." }
      ]
    },
    {
      id: "s218-mem-use",
      title: "Indications and adverse effects",
      blocks: [
        { type: "p", text: "In the book, memantine is described as the **only** therapy approved in the United States for **moderate to severe** Alzheimer disease (see the updates part: donepezil has also been approved for severe disease)." },
        { type: "defs", items: [
          ["Tolerability", "**Safe and well tolerated**."],
          ["Common effects", "**Dizziness, headache, constipation and confusion**."],
          ["Kidneys", "Use in **severe renal impairment** is not recommended."],
          ["Overdose", "One documented overdose of up to **400 mg** caused restlessness, psychosis, visual hallucinations, somnolence, stupor and loss of consciousness, with **full recovery**."]
        ] },
        { type: "update", year: "2025", title: "Renal dosing on the label", text: "Current labeling allows memantine in **severe renal impairment** (creatinine clearance 5 to 29 mL/min) at a **lower target of 5 mg twice daily** (**14 mg once daily** for the extended-release form), rather than avoiding it.", source: "Memantine prescribing information (DailyMed)" }
      ]
    },
    {
      id: "s218-mem-int",
      title: "Interactions and urine pH",
      blocks: [
        { type: "defs", items: [
          ["CYP enzymes", "Minimal inhibition of CYP1A2, 2A6, 2C9, 2D6, 2E1 and 3A4: **no pharmacokinetic interactions expected** through these enzymes."],
          ["Renal cation transport", "Memantine is partly removed by **tubular secretion**, so drugs using the same cationic system (**hydrochlorothiazide–triamterene, cimetidine, ranitidine, quinidine, nicotine**) could alter levels of both. In practice, hydrochlorothiazide–triamterene did not change memantine or triamterene levels, and hydrochlorothiazide fell by 20%."],
          ["Alkaline urine", "Clearance falls by about **80%** at **urine pH 8**, so the drug can **accumulate**. Causes include diet, **carbonic anhydrase inhibitors, topiramate, sodium bicarbonate**, renal tubular acidosis and severe urinary tract infection."],
          ["Laboratory", "No laboratory interferences."]
        ] },
        { type: "callout", kind: "caution", text: "Watch for memantine toxicity when the urine turns **alkaline**: a new **topiramate** or **acetazolamide** prescription, bicarbonate, a change in diet, renal tubular acidosis or a severe UTI." }
      ]
    },
    {
      id: "s218-mem-dose",
      title: "Memantine dosing and combination therapy",
      blocks: [
        { type: "steps", title: "Dosing memantine (book)", items: [
          ["Forms", "**5 and 10 mg** tablets."],
          ["Start", "**5 mg a day**."],
          ["Titrate", "Increase by **5 mg each week** as tolerated, given **twice daily** in divided doses."],
          ["Target", "**20 mg a day** (10 mg twice daily)."]
        ] },
        { type: "p", text: "In **mild to moderate** disease, adding memantine to a cholinesterase inhibitor has **not** given significantly greater benefit in cognition or overall function than a cholinesterase inhibitor alone." },
        { type: "callout", kind: "pearl", text: "The two statements fit together: the combination is a common choice in **moderate to severe** disease, but there is no proven extra benefit in **mild to moderate** disease." }
      ]
    }
  ]
})
