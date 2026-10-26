({
  title: "Lamotrigine",
  sections: [
    {
      id: "s213-ltg",
      title: "Lamotrigine: pharmacology and indications",
      blocks: [
        { type: "p", text: "**Lamotrigine** (Lamictal) came from screening **folate antagonists** as anticonvulsants and was marketed for partial seizures in **1995**. It was approved for **maintenance of bipolar I disorder in 2003**. Its acute effect in bipolar depression was too small to beat placebo consistently, so it is **not approved for acute bipolar depression**, and it is not effective as a primary treatment of acute mania. It 'stabilizes mood **from below**', acting mainly on the depressive pole." },
        { type: "defs", items: [
          ["Kinetics", "Bioavailability **98%**; food does not matter; **55%** protein bound; steady-state half-life about **25 hours**, but clearance varies **sixfold** with other drugs; **94%** excreted in urine."],
          ["Mechanism", "Blocks **voltage-sensitive sodium channels**, reducing **glutamate and aspartate** release; slight calcium channel effect; modestly raises serotonin; weak 5-HT3 inhibition."],
          ["Bipolar disorder", "Lengthens the time between episodes, **more for depression than mania**; useful in **rapid cycling**."],
          ["Other", "Reports of benefit in borderline personality disorder and pain syndromes."],
          ["Levels", "No proven relation between blood level and efficacy; levels do not predict adverse events."]
        ] }
      ]
    },
    {
      id: "s213-ltg-ae",
      title: "Lamotrigine rash and other adverse effects",
      blocks: [
        { type: "p", text: "Lamotrigine is remarkably well tolerated: **no sedation, weight gain or metabolic effects**. Common effects, usually mild: **dizziness, ataxia, somnolence, headache, diplopia, blurred vision, nausea**; anecdotal cognitive complaints and joint or back pain." },
        { type: "defs", title: "Rash", items: [
          ["Benign rash", "About **8%** develop a maculopapular rash, mostly in the **first 4 months**. Stop the drug for **any rash**, because it may be the start of **Stevens–Johnson syndrome or toxic epidermal necrolysis**, and stopping does not always prevent progression."],
          ["Serious rash", "**0.08%** with monotherapy and **0.13%** with adjunctive use in adults; German registry data suggest about **1 in 5,000**."],
          ["Raises the risk", "**Faster titration or higher starting doses** than recommended; **valproate**; age **under 16**."],
          ["Missed doses", "After **more than 4 days** off (book), restart at the initial dose and retitrate."]
        ] },
        { type: "callout", kind: "caution", title: "Rash rule", text: "Any rash, or fever with lymphadenopathy, means **stop lamotrigine**: over **1 to 2 days** for rash, compared with a **2-week taper** for ordinary discontinuation." },
        { type: "update", title: "Correction: lamotrigine and age", text: "The book says lamotrigine 'should not be taken by anyone younger than 16'. The label approves it for **epilepsy from age 2** and for **bipolar maintenance in adults (18 and older)**; the boxed warning notes that serious rash is **more common in children** than in adults.", source: "Lamictal prescribing information" },
        { type: "update", year: "2018–2021", title: "Two FDA safety warnings", text: "**April 2018**: lamotrigine can cause **hemophagocytic lymphohistiocytosis (HLH)**, a rare, life-threatening immune reaction with fever, rash, enlarged liver or spleen, lymphadenopathy, cytopenias and very high ferritin, usually within weeks of starting. Evaluate promptly and stop the drug if no other cause is found. **March 2021**: in vitro, lamotrigine has **class IB antiarrhythmic** activity at therapeutic levels and may raise **arrhythmia risk in structural or ischemic heart disease**; weigh benefits and risks in patients with heart disease.", source: "FDA Drug Safety Communications on lamotrigine, April 2018 and March 2021" }
      ]
    },
    {
      id: "s213-ltg-dose",
      title: "Lamotrigine interactions and dosing",
      blocks: [
        { type: "defs", title: "Interactions", items: [
          ["Valproate", "**Doubles** lamotrigine levels (the most serious interaction); lamotrigine lowers valproate about **25%**."],
          ["Sertraline", "Raises lamotrigine, less than valproate."],
          ["Enzyme inducers", "**Carbamazepine, phenytoin, phenobarbital** lower lamotrigine **40% to 50%**."],
          ["Laboratory", "No interference with lab tests."]
        ] },
        { type: "table", caption: "Lamotrigine titration in the book (Table 21-37), mg a day", head: ["Regimen", "Weeks 1–2", "Weeks 3–4", "Weeks 4–5"], wide: true, rows: [
          ["Lamotrigine alone", "25", "50", "100 to 200 (maximum 200)"],
          ["With carbamazepine", "50", "100", "200 to 400 (maximum 400)"],
          ["With valproate", "**25 every other day**", "25", "50 to 100 (maximum 100)"]
        ] },
        { type: "defs", title: "Dosing", items: [
          ["Target", "No consistent extra benefit above **200 mg** a day in the bipolar trials; most take **100 to 200 mg**."],
          ["Timing", "Twice daily in epilepsy; **once daily** is fine in bipolar disorder, morning or night depending on whether it activates or sedates."],
          ["Forms", "Tablets 25, 100, 150, 200 mg; **orally disintegrating** (25, 50, 100, 200 mg); chewable dispersible 2, 5, 25 mg."],
          ["Renal impairment", "Lower maintenance dose."],
          ["Stopping", "Taper over **2 weeks**, unless rash (then 1 to 2 days)."]
        ] },
        { type: "update", title: "Label dose check: the full titration", text: "The label's bipolar schedule runs to week 6 or 7. **Alone**: 25 mg (weeks 1–2), 50 mg (3–4), 100 mg (5), **200 mg** (6). **With valproate**: 25 mg every other day (1–2), 25 mg (3–4), 50 mg (5), **100 mg** (6). **With carbamazepine, phenytoin, phenobarbital or primidone** (no valproate): 50 mg (1–2), 100 mg in divided doses (3–4), 200 mg (5), 300 mg (6), up to **400 mg** (7). **Estrogen-containing contraceptives** lower lamotrigine by about half, and levels rise during pill-free weeks; adjust the dose. Restart titration after a break of more than **5 half-lives**.", source: "Lamictal prescribing information" }
      ]
    }
  ]
})
