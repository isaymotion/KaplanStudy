  {
    id: "cogmed",
    chapter: "ch21-8",
    title: "Choosing a cognitive enhancer",
    summary: "Start from the diagnosis and stage to reach a cholinesterase inhibitor, memantine or (since the book) an anti-amyloid antibody, with the key precautions from section 21.8.",
    caution: "A teaching aid built from section 21.8 and its post-publication updates, not a substitute for clinical judgment and current labeling. Combine drug treatment with caregiver support and nondrug care.",
    start: "workup",
    nodes: {
      workup: {
        q: "Has the dementia been evaluated, with treatable causes ruled out?",
        options: [
          { label: "Yes: the diagnosis is established", note: "Cholinesterase inhibitors are started only after the diagnosis is established.", to: "who" },
          { label: "Not yet", note: "Treatable causes of dementia come first.", to: "r:workup" }
        ]
      },
      who: {
        q: "What is the diagnosis and stage?",
        options: [
          { label: "Mild cognitive impairment", note: "No drug is approved for mild cognitive impairment itself.", to: "mci" },
          { label: "Mild to moderate Alzheimer disease", note: "Cholinesterase inhibitors are indicated at this stage.", to: "chei" },
          { label: "Moderate to severe Alzheimer disease", note: "Memantine is indicated at this stage; donepezil is approved for severe disease too.", to: "r:severe" },
          { label: "Parkinson disease dementia or Lewy body disease", note: "Donepezil and rivastigmine may help; rivastigmine is approved for Parkinson disease dementia.", to: "r:pdd" },
          { label: "A healthy person wanting better memory", note: "Use in nondemented people should be discouraged.", to: "r:healthy" }
        ]
      },
      mci: {
        q: "Has Alzheimer pathology been confirmed (amyloid PET or CSF) and is the patient interested in disease-modifying treatment?",
        options: [
          { label: "Yes, and willing to have infusions and MRI monitoring", note: "Anti-amyloid antibodies are approved for MCI or mild dementia with confirmed amyloid.", to: "r:amyloid" },
          { label: "No, or not wanted", note: "Guidelines let clinicians decline cholinesterase inhibitors in MCI.", to: "r:mci" }
        ]
      },
      chei: {
        q: "Which matters most for this patient?",
        options: [
          { label: "Simple once-daily dosing", note: "Donepezil has a 70-hour half-life.", to: "r:donepezil" },
          { label: "Many other medicines (interaction risk)", note: "Rivastigmine has no significant drug interactions.", to: "r:rivastigmine" },
          { label: "Cannot swallow pills or has GI side effects", note: "Patches avoid oral dosing and cause fewer GI effects.", to: "r:patch" },
          { label: "Bradycardia, heart block or fainting", note: "All cholinesterase inhibitors can cause bradyarrhythmias and syncope.", to: "r:cardiac" },
          { label: "Interested in disease-modifying treatment (mild dementia with confirmed amyloid)", note: "Anti-amyloid antibodies are for MCI or mild dementia only.", to: "r:amyloid" }
        ]
      }
    },
    results: {
      workup: { label: "First", dx: "Evaluate for treatable causes", line: "Rule out treatable causes of dementia and establish the diagnosis of dementia of the Alzheimer type before starting a cholinesterase inhibitor.", points: ["Review medicines, especially anticholinergic drugs, which also counteract cholinesterase inhibitors.", "See Chapter 3 for the dementia workup."], link: { ch: "ch03", sec: "s3-dem-treat", label: "Treating dementia" } },
      severe: { label: "Option", dx: "Memantine (alone or with a cholinesterase inhibitor), or donepezil", line: "Memantine 5 mg a day, raised 5 mg weekly to 10 mg twice daily (XR 28 mg once daily).", points: ["Book: memantine for moderate to severe disease; post-publication correction: donepezil is also approved for severe disease (2006), as is the rivastigmine patch.", "Lower memantine dose in severe renal impairment; watch for alkaline urine (topiramate, acetazolamide, bicarbonate).", "A memantine ER–donepezil capsule (2014) suits patients stable on donepezil."], link: { ch: "ch21-8", sec: "s218-mem-dose", label: "Memantine dosing" } },
      pdd: { label: "Option", dx: "Rivastigmine (or donepezil)", line: "Rivastigmine was the first drug approved for mild to moderate Parkinson disease dementia (2006).", points: ["Titrate rivastigmine every 4 weeks in Parkinson disease dementia; watch for worsening tremor and GI effects.", "Avoid anticholinergic drugs and be cautious with antipsychotics in Lewy body disease."], link: { ch: "ch21-8", sec: "s218-ind", label: "Indications" } },
      healthy: { label: "Avoid", dx: "Do not prescribe a cognitive enhancer", line: "Using cholinesterase inhibitors to improve cognition in nondemented people should be discouraged.", points: ["Address sleep, mood, substances and medicines that impair memory instead."], link: { ch: "ch21-8", sec: "s218-ind", label: "Indications" } },
      amyloid: { label: "Consider", dx: "Anti-amyloid antibody (lecanemab or donanemab) in specialty care", line: "Post-publication: for MCI or mild dementia due to Alzheimer disease with confirmed amyloid.", points: ["Baseline MRI and ApoE ε4 testing; ARIA is the key risk (boxed warning), highest in ApoE ε4 homozygotes and with anticoagulants.", "Lecanemab: 10 mg/kg IV every 2 weeks, later monthly IV or weekly subcutaneous; donanemab: IV every 4 weeks, can stop when plaques clear.", "Benefit is a modest slowing of decline, not improvement; cholinesterase inhibitors can continue."], link: { ch: "ch21-8", sec: "s218-amyloid", label: "Anti-amyloid antibodies" } },
      mci: { label: "Consider", dx: "Exercise and monitoring; a cholinesterase inhibitor only after discussion", line: "Post-publication (2018 guideline): clinicians may choose not to offer cholinesterase inhibitors; if offered, explain they are off-label without high-quality evidence.", points: ["Recommend regular exercise (twice a week).", "Reassess cognition over time; consider biomarker testing in specialty care."], link: { ch: "ch21-8", sec: "s218-mci", label: "Mild cognitive impairment" } },
      donepezil: { label: "Start", dx: "Donepezil", line: "5 mg at night; raise to 10 mg after 4 weeks if tolerated and helpful.", points: ["Fewest GI effects of the group (CNS selective).", "Levels changed by CYP2D6 and 3A4 drugs: lower with carbamazepine, phenytoin, rifampin; higher with paroxetine, ketoconazole, erythromycin."], link: { ch: "ch21-8", sec: "s218-dose", label: "Dosing" } },
      rivastigmine: { label: "Start", dx: "Rivastigmine", line: "1.5 mg twice daily with food; raise by 1.5 mg per dose at least every 2 weeks, up to 6 mg twice daily.", points: ["No significant pharmacokinetic interactions (mostly unbound).", "Most GI effects of the group at 6 to 12 mg a day; the patch causes fewer."], link: { ch: "ch21-8", sec: "s218-int", label: "Interactions" } },
      patch: { label: "Option", dx: "Rivastigmine patch or weekly donepezil patch", line: "Post-publication: rivastigmine patch 4.6, 9.5 or 13.3 mg/24 hours (daily); donepezil weekly patch (2022).", points: ["Oral rivastigmine under 6 mg a day → 4.6 mg patch; 6 to 12 mg a day → 9.5 mg patch.", "Rotate sites; remove the old patch to avoid double dosing."], link: { ch: "ch21-8", sec: "s218-new-forms", label: "New forms" } },
      cardiac: { label: "Caution", dx: "Assess before any cholinesterase inhibitor", line: "Cholinesterase inhibitors can cause bradyarrhythmias and syncope, especially with underlying heart disease.", points: ["Check pulse and ECG; review rate-slowing drugs (β-blockers, digoxin).", "Memantine has no bradycardia risk but is indicated for moderate to severe disease."], link: { ch: "ch21-8", sec: "s218-ae", label: "Adverse effects" } }
    }
  }
