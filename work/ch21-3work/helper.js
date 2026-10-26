  {
    id: "moodstab",
    chapter: "ch21-3",
    title: "Choosing a mood stabilizer",
    summary: "Start from the situation (possible lithium toxicity, rash or liver or blood warning signs, pregnancy, an acute manic episode, or long-term prevention), then weigh the pattern of illness and the patient's risks to reach a short list from section 21.3.",
    caution: "A teaching aid built from section 21.3 of the 12th edition, with post-publication updates marked. It does not replace a full assessment, current prescribing information or local guidelines. Check renal, hepatic, hematologic and pregnancy status before prescribing.",
    start: "situation",
    nodes: {
      situation: {
        q: "Which situation are you in?",
        options: [
          { label: "A patient on lithium with coarse tremor, slurred speech, unsteadiness, vomiting or confusion", to: "r:litox" },
          { label: "New rash on lamotrigine or carbamazepine", to: "r:rash" },
          { label: "Fever, sore throat, bruising or bleeding on carbamazepine", to: "r:dyscrasia" },
          { label: "Lethargy, vomiting or abdominal pain on valproate", to: "r:vpatox" },
          { label: "Pregnant, planning pregnancy or could become pregnant", to: "r:pregnancy" },
          { label: "Treating an acute manic or mixed episode", to: "mania" },
          { label: "Choosing long-term prevention", to: "maint" }
        ]
      },
      mania: {
        q: "What does the manic episode look like?",
        help: "Lithium works over 1 to 3 weeks, so a benzodiazepine, an antipsychotic or valproate is usually added at first.",
        options: [
          { label: "Classic euphoric mania", to: "r:lithium" },
          { label: "Irritable, mixed or dysphoric mania, rapid cycling, or comorbid substance use", to: "r:valproate" },
          { label: "Needs very fast control", to: "r:loading" },
          { label: "Did not respond to lithium or valproate", to: "r:carbamazepine" }
        ]
      },
      maint: {
        q: "What matters most for prevention?",
        options: [
          { label: "Suicide risk, or a classic course with mania predominating", to: "r:lithium" },
          { label: "Depressive episodes predominate", to: "r:lamotrigine" },
          { label: "Rapid cycling, or ultradian cycling despite standard drugs", to: "r:rapid" },
          { label: "Kidney disease, or an older adult", to: "r:renal" },
          { label: "Weight gain is the main concern", to: "r:weight" },
          { label: "Patient of Asian ancestry being considered for carbamazepine", to: "r:hla" }
        ]
      }
    },
    results: {
      litox: { label: "Emergency", dx: "Possible lithium toxicity", line: "Coarse tremor, dysarthria and ataxia are early signs; fasciculations, hyperreflexia, seizures and coma follow at higher levels.", points: ["Stop lithium; check level, electrolytes, renal function and ECG; treat dehydration.", "Look for causes: NSAIDs, thiazides, ACE inhibitors, low salt, sweating, vomiting, renal decline.", "Charcoal does not bind lithium; use lavage, Kayexalate or polyethylene glycol; hemodialysis above 4.0 mEq/L."], link: { ch: "ch21-3", sec: "s213-li-tox", label: "Lithium toxicity" } },
      rash: { label: "Act now", dx: "Stop the drug", line: "Any rash on lamotrigine may be early Stevens–Johnson syndrome or TEN; most clinicians stop carbamazepine for any rash.", points: ["Stop lamotrigine over 1 to 2 days; seek care for fever, mucosal lesions or blistering.", "Lamotrigine rash risk rises with fast titration, valproate and youth.", "Post-publication: test patients of Asian ancestry for HLA-B*15:02 before carbamazepine."], link: { ch: "ch21-3", sec: "s213-ltg-ae", label: "Lamotrigine rash" } },
      dyscrasia: { label: "Act now", dx: "Check a CBC for a blood dyscrasia", line: "Agranulocytosis and aplastic anemia occur in about 1 in 125,000 on carbamazepine, unrelated to dose.", points: ["Stop and consult hematology if WBC under 3,000, neutrophils under 1,500 or platelets under 100,000.", "Benign leukopenia (1% to 2%) is common and does not predict dyscrasias.", "Oxcarbazepine does not cause dyscrasias but causes more hyponatremia."], link: { ch: "ch21-3", sec: "s213-cbz-ae", label: "Carbamazepine adverse effects" } },
      vpatox: { label: "Act now", dx: "Rule out hepatotoxicity, pancreatitis or hyperammonemia", line: "Lethargy, malaise, anorexia, vomiting, edema and abdominal pain suggest liver toxicity; abdominal pain also suggests pancreatitis.", points: ["Check liver tests, lipase or amylase, ammonia and platelets.", "Modest transaminase rises do not predict liver failure; amylase does not predict pancreatitis.", "Hyperammonemia may respond to L-carnitine; screen for urea cycle disorders."], link: { ch: "ch21-3", sec: "s213-vpa-ae", label: "Valproate warnings" } },
      pregnancy: { label: "Weigh with the patient", dx: "Avoid valproate; plan carefully with lithium", line: "Valproate is the most teratogenic (neural tube defects, lower IQ, autism); carbamazepine causes spina bifida and cleft palate; lithium causes Ebstein anomaly (1 in 1,000).", points: ["If lithium continues: lowest dose, fetal echocardiography, close levels after delivery, postpartum prophylaxis.", "Folic acid for all who could conceive (book 1 to 4 mg; 2024 guidance 0.4 mg).", "Post-publication: lamotrigine, levetiracetam and oxcarbazepine carry the lowest malformation risk; the UK restricts valproate under age 55."], link: { ch: "ch21-3", sec: "s213-li-pop", label: "Lithium in pregnancy" } },
      lithium: { label: "First choice", dx: "Lithium", line: "Controls mania in about 80% and gives the best evidence for maintenance and suicide prevention (six- to sevenfold reduction).", points: ["Workup: creatinine, electrolytes, thyroid tests, CBC, ECG, pregnancy test.", "300 mg three times daily; levels 12 hours after dose (book: mania 1.0 to 1.2, maintenance 0.4 to 0.8 mEq/L).", "Avoid NSAIDs, thiazides and ACE inhibitors; contraindicated in sick sinus syndrome."], link: { ch: "ch21-3", sec: "s213-li-dose", label: "Lithium dosing" } },
      valproate: { label: "Consider", dx: "Valproate", line: "Irritable, mixed or dysphoric mania, rapid cycling and comorbid substance use or panic respond well; about two-thirds of manic patients respond.", points: ["Level 50 to 125 µg/mL; most need 1,200 to 1,500 mg a day.", "Baseline liver panel, CBC with platelets and pregnancy test.", "Avoid in people who could become pregnant when possible."], link: { ch: "ch21-3", sec: "s213-vpa-ind", label: "Valproate indications" } },
      loading: { label: "Consider", dx: "Valproate oral loading (or an antipsychotic)", line: "20 to 30 mg/kg a day reaches therapeutic levels in a day and controls mania within about 5 days.", points: ["Watch sedation and tremor in older adults.", "IV valproate can stabilize agitation rapidly.", "Antipsychotics and benzodiazepines also give fast control (section 21.1)."], link: { ch: "ch21-3", sec: "s213-vpa-dose", label: "Valproate dosing" } },
      carbamazepine: { label: "Consider", dx: "Carbamazepine (Equetro)", line: "Some respond to carbamazepine but not to lithium or valproate, especially with dysphoric mania or rapid cycling.", points: ["Start 200 mg at bedtime (600 to 800 mg in manic inpatients); target about 1,200 mg.", "Autoinduction at 2 to 3 weeks; it lowers contraceptives and many drugs.", "Monitor CBC, liver tests and sodium; test HLA-B*15:02 in Asian ancestry."], link: { ch: "ch21-3", sec: "s213-cbz-dose", label: "Carbamazepine dosing" } },
      lamotrigine: { label: "Consider", dx: "Lamotrigine", line: "Approved for bipolar I maintenance; delays depressive episodes more than manic ones, with no weight gain.", points: ["Titrate 25 → 50 → 100 → 200 mg; halve with valproate.", "Stop for any rash.", "Not effective as primary treatment of acute mania."], link: { ch: "ch21-3", sec: "s213-ltg-dose", label: "Lamotrigine dosing" } },
      rapid: { label: "Options", dx: "Valproate, lamotrigine or carbamazepine; nimodipine for ultradian cycling", line: "Lithium works less well in rapid cycling; check thyroid function, which worsens cycling.", points: ["Valproate is particularly useful in rapid and ultrarapid cycling.", "Lamotrigine helps rapid cycling, especially depressive phases.", "Nimodipine (up to 60 mg every 4 hours) for cycles shorter than 24 hours."], link: { ch: "ch21-3", sec: "s213-ccb", label: "Calcium channel blockers" } },
      renal: { label: "Prefer", dx: "Valproate or lamotrigine over lithium", line: "Lithium is cleared only by the kidneys and can cause chronic nephropathy; older adults develop toxicity near the top of the range.", points: ["The book prefers valproate to lithium in children and older adults.", "If lithium is used, start 300 mg once or twice daily and aim lower (post-publication consensus 0.4 to 0.6 mmol/L in older adults).", "Gabapentin, pregabalin, topiramate and levetiracetam also need renal dose reduction."], link: { ch: "ch21-3", sec: "s213-li-pop", label: "Lithium in older adults" } },
      weight: { label: "Prefer", dx: "Lamotrigine or carbamazepine", line: "Neither causes weight gain; lithium and valproate do.", points: ["Topiramate or zonisamide are used off-label to counter psychotropic weight gain.", "Check the lamotrigine titration and carbamazepine interactions."], link: { ch: "ch21-3", sec: "s213-choose", label: "Comparison table" } },
      hla: { label: "Test first", dx: "HLA-B*15:02 before carbamazepine (post-publication)", line: "Carriers have about a 5% risk of SJS/TEN; the allele is common in many Asian populations, including parts of the Philippines.", points: ["Avoid carbamazepine in carriers; use caution with oxcarbazepine and phenytoin.", "HLA-A*31:01 also raises rash and DRESS risk across ancestries.", "A negative test does not remove the need to watch for rash."], link: { ch: "ch21-3", sec: "s213-cbz-ae", label: "HLA testing" } }
    }
  }
