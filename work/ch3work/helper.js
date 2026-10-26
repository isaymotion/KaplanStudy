  {
    id: "cognitive",
    chapter: "ch03",
    title: "Which cognitive disorder?",
    summary: "Start from how the cognitive change began (acute and fluctuating, gradual, memory only, rapidly progressive or mild) and follow the chapter's distinctions to delirium, a dementia type, an amnestic syndrome, a medical cause or mild cognitive impairment.",
    caution: "A teaching aid built from Chapter 3, not a substitute for a full history, examination and workup. Cognitive disorders often coexist: delirium on dementia, and mixed Alzheimer and vascular disease, are common.",
    start: "onset",
    nodes: {
      onset: {
        q: "How did the cognitive change begin?",
        help: "Time course and level of consciousness are the first branch point. Delirium is acute, fluctuating and impairs attention and awareness; dementia is gradual in clear consciousness; amnestic disorders spare most other cognition.",
        options: [
          { label: "Acutely, over hours to days, with fluctuating attention or awareness", to: "delcause", note: "The onset is acute with fluctuating attention or awareness." },
          { label: "Gradually, over months to years, in an alert patient", to: "progress", note: "Decline is gradual in clear consciousness." },
          { label: "Mainly loss of memory, with other cognition relatively spared", to: "amnesia", note: "Memory loss dominates the picture." },
          { label: "A rapidly progressive decline over weeks to months", to: "rapid", note: "The decline is rapidly progressive." },
          { label: "Mild decline with daily activities still intact", to: "mild", note: "Decline is mild and daily function is preserved." },
          { label: "Cognitive complaints alongside prominent depressed mood", to: "r:depcog", note: "Cognitive complaints come with prominent depression." }
        ]
      },
      delcause: {
        q: "What does the setting suggest?",
        help: "Assume any drug the patient has taken could be the cause. Physical examination often points to the source: vital signs, pupils, neck stiffness, breath, tongue lacerations.",
        options: [
          { label: "On anticholinergic drugs, with dry flushed skin and dilated pupils", to: "r:anticholinergic", note: "There are anticholinergic signs and exposure." },
          { label: "Stopping alcohol or sedatives, with tremor and autonomic overactivity", to: "r:withdrawal", note: "The picture follows alcohol or sedative withdrawal." },
          { label: "Known dementia that has suddenly worsened", to: "r:beclouded", note: "An existing dementia has acutely worsened." },
          { label: "Abrupt, self-limited episodes, unexplained falls or a recent seizure", to: "r:seizure", note: "Episodes are abrupt and self-limited, or follow a seizure." },
          { label: "Medical illness, surgery, infection, ICU care or new medications", to: "r:delirium", note: "There is a medical, surgical or drug precipitant." }
        ]
      },
      progress: {
        q: "Which feature came first or dominates?",
        help: "Cortical dementias (Alzheimer) bring early memory loss and aphasia; frontotemporal dementia starts with personality change; Lewy body dementia fluctuates with hallucinations; subcortical dementias slow thinking and movement.",
        options: [
          { label: "Recent memory loss first, steadily progressive, later aphasia, apraxia and agnosia", to: "r:alzheimer", note: "Memory loss came first with steady progression." },
          { label: "Personality change, disinhibition, apathy or hyperorality, with memory relatively spared", to: "r:ftd", note: "Behavior and personality changed first, with memory relatively spared." },
          { label: "Fluctuating alertness, well-formed visual hallucinations, parkinsonism after the decline", to: "r:lewy", note: "There is fluctuation, visual hallucinations and later parkinsonism." },
          { label: "Stepwise decline with focal neurologic signs and vascular risk factors", to: "r:vascular", note: "Decline is stepwise with focal signs." },
          { label: "Slowed thinking and apathy without aphasia, with a movement disorder", to: "subcort", note: "The pattern is subcortical: slowing, apathy and a movement disorder." },
          { label: "A clue to a medical cause: recent fall, thyroid signs, anemia or abnormal pupils", to: "reversible", note: "There is a clue to a potentially reversible medical cause." }
        ]
      },
      subcort: {
        q: "What is the context?",
        help: "Subcortical dementia: no aphasia, impaired retrieval more than recognition, early slowing, apathy, dysarthria and abnormal movements.",
        options: [
          { label: "Established Parkinson disease preceded the cognitive decline", to: "r:parkinson", note: "Parkinson disease preceded the decline." },
          { label: "Chorea, with a family history", to: "r:huntington", note: "There is chorea and a family history." },
          { label: "HIV infection", to: "r:hiv", note: "The patient has HIV infection." },
          { label: "Years of repeated head blows (boxing, football)", to: "r:pugilistica", note: "There were years of repeated head trauma." }
        ]
      },
      reversible: {
        q: "Which clue is present?",
        help: "About 10–15% of dementias are potentially reversible if treated before permanent damage. The workup aims to find these causes.",
        options: [
          { label: "A recent fall or head injury in an older person", to: "r:subdural", note: "There was a recent fall or head injury." },
          { label: "Slowed thinking with weight gain, cold intolerance and lateral eyebrow loss", to: "r:thyroid", note: "There are signs of hypothyroidism." },
          { label: "Paresthesias, macrocytic anemia or poor nutrition", to: "r:b12", note: "There are clues to B12 deficiency." },
          { label: "Grandiosity and small, irregular pupils that do not react to light", to: "r:neurosyphilis", note: "There are Argyll Robertson pupils and frontal change." }
        ]
      },
      amnesia: {
        q: "What is the setting of the memory loss?",
        help: "Amnestic disorders impair new learning (and recall), with immediate memory intact and orientation to person rarely lost. Dissociative and factitious amnesia behave differently.",
        options: [
          { label: "Chronic alcohol use or malnutrition, with confabulation", to: "r:korsakoff", note: "Amnesia follows alcohol use or malnutrition, with confabulation." },
          { label: "An abrupt episode of 6–24 hours, repeating questions, alert, with full recovery", to: "r:tga", note: "There was an abrupt, self-limited episode." },
          { label: "During a course of ECT", to: "r:ect", note: "The amnesia follows ECT." },
          { label: "After a head injury", to: "r:headamn", note: "The amnesia follows head injury." },
          { label: "After hypoxia, carbon monoxide, herpes encephalitis or a posterior circulation stroke", to: "r:amnestic", note: "There was a hippocampal or diencephalic insult." },
          { label: "Loss of personal identity after a stressful event, yet new learning is intact", to: "r:dissociative", note: "Identity is lost but new learning is preserved." },
          { label: "Inconsistent test performance, no cause and possible gain", to: "r:factitious", note: "Performance is inconsistent with no cause found." }
        ]
      },
      rapid: {
        q: "Which features accompany the rapid decline?",
        help: "Rapid dementia with motor signs suggests prion disease; fever and focal temporal signs suggest encephalitis.",
        options: [
          { label: "Middle-aged or older, with myoclonus, ataxia and periodic EEG complexes", to: "r:cjd", note: "There is myoclonus with periodic EEG complexes." },
          { label: "Under 40, depression or anxiety first, then ataxia or myoclonus", to: "r:vcjd", note: "A young person had psychiatric symptoms, then cerebellar signs." },
          { label: "Fever, anosmia and olfactory or gustatory hallucinations", to: "r:hsv", note: "There is fever with anosmia and olfactory hallucinations." },
          { label: "A young woman with vivid hallucinations, dissociation, amnesia and seizures", to: "r:nmda", note: "A young woman has a schizophrenia-like encephalitis." }
        ]
      },
      mild: {
        q: "What does testing show?",
        help: "MCI needs objective impairment for age and education with intact daily activities. Subjective complaints alone give false positives.",
        options: [
          { label: "Memory well below norms for age and education, other cognition and ADLs intact", to: "r:mci", note: "Objective memory impairment with intact function." },
          { label: "Minor forgetfulness consistent with age, no significant test deficit or impact", to: "r:aging", note: "Forgetfulness is minor and age-appropriate." }
        ]
      }
    },
    results: {
      delirium: { label: "Most likely", dx: "Delirium", line: "Acute, fluctuating disturbance of attention and awareness with other cognitive deficits and evidence of a physiologic cause.", points: ["Specify hyperactive, hypoactive or mixed, and the cause (substance, medication, medical condition, multiple).", "Examine vital signs, neck, pupils, breath and neurologic signs; standard labs, ECG, EEG (diffuse slowing), chest film and drug screens.", "Treat the cause; reorient (clock, calendar, familiar person); avoid restraints and both under- and overstimulation.", "Haloperidol for psychosis or agitation with QT monitoring; avoid phenothiazines and benzodiazepines unless withdrawal.", "1-year mortality up to 50%; address predisposing factors to prevent recurrence."], link: { ch: "ch03", sec: "s3-del-features", label: "Delirium" } },
      anticholinergic: { label: "Most likely", dx: "Anticholinergic delirium", line: "Delirium from medications with anticholinergic activity, one of its most common causes; reduced acetylcholine is the core mechanism.", points: ["Stop the offending drugs.", "Physostigmine 1–2 mg IV or IM, repeated every 15–30 minutes if needed.", "Avoid phenothiazines and other anticholinergic agents."], link: { ch: "ch03", sec: "s3-del-treat", label: "Treating delirium" } },
      withdrawal: { label: "Most likely", dx: "Alcohol or sedative withdrawal delirium", line: "Withdrawal delirium tracks locus ceruleus noradrenergic overactivity; the EEG shows low-voltage fast activity rather than slowing.", points: ["Benzodiazepines (e.g., lorazepam) are the best use of this class in delirium.", "Watch for autonomic overactivity (dilated pupils, tachycardia, fever) and seizures.", "Give thiamine to prevent Wernicke–Korsakoff syndrome."], also: "Opioid and other withdrawal states are covered with the substance disorders.", link: { ch: "ch03", sec: "s3-del-treat", label: "Treating delirium" } },
      beclouded: { label: "Most likely", dx: "Delirium superimposed on dementia (beclouded dementia)", line: "Existing dementia is a major risk factor for delirium; diagnose both when the dementia is documented.", points: ["Search for infection, medications, dehydration and other precipitants.", "Dementia patients react badly to benzodiazepines and alcohol.", "Expect slower recovery in older patients."], link: { ch: "ch03", sec: "s3-del-exam", label: "Delirium versus dementia" } },
      seizure: { label: "Investigate", dx: "Epilepsy-related confusion", line: "Postictal states look like a gradually clearing delirium; abrupt self-limited psychosis or delirium and unexplained falls suggest epilepsy, including adult-onset absence.", points: ["Look for tongue or cheek lacerations and incontinence.", "Obtain EEGs; a normal EEG does not exclude complex partial epilepsy (use sleep deprivation or 24–72 hour recordings).", "In known epilepsy, check seizure control, adherence and anticonvulsant side effects."], link: { ch: "ch03", sec: "s3-epilepsy", label: "Epilepsy" } },
      alzheimer: { label: "Most likely", dx: "Major or mild neurocognitive disorder due to Alzheimer disease", line: "Insidious decline in memory and learning (plus another domain for major NCD), steadily progressive without plateaus, with no mixed cause.", points: ["Probable with a genetic cause or all criteria; otherwise possible.", "Rule out reversible causes: thyroid, B12, depression, medications, subdural hematoma, NPH.", "Cholinesterase inhibitors (donepezil) for mild to moderate disease; memantine; avoid anticholinergics.", "Support caregivers; average survival about 8 years."], link: { ch: "ch03", sec: "s3-alz", label: "Alzheimer disease" } },
      ftd: { label: "Most likely", dx: "Frontotemporal neurocognitive disorder", line: "Middle-aged onset of disinhibition, apathy, loss of empathy, perseveration and hyperorality (behavioral variant) or language decline, with learning and memory relatively spared.", points: ["Imaging shows frontal and temporal atrophy; about half are familial.", "Klüver–Bucy features (hypersexuality, placidity, hyperorality) favor Pick disease over Alzheimer disease.", "Usually begins before 75 and is more common in men."], link: { ch: "ch03", sec: "s3-ftd-lewy", label: "Frontotemporal and Lewy body dementias" } },
      lewy: { label: "Most likely", dx: "Neurocognitive disorder with Lewy bodies", line: "Fluctuating cognition, recurrent well-formed visual hallucinations and parkinsonism that follows the cognitive decline.", points: ["REM sleep behavior disorder and severe neuroleptic sensitivity are suggestive features.", "Use antipsychotics with great caution.", "Capgras syndrome, falls and syncope are common."], link: { ch: "ch03", sec: "s3-ftd-lewy", label: "Frontotemporal and Lewy body dementias" } },
      vascular: { label: "Most likely", dx: "Vascular neurocognitive disorder", line: "Cognitive decline linked to cerebrovascular disease, often stepwise, mainly affecting complex attention and executive function.", points: ["Look for focal signs, carotid bruits, pseudobulbar palsy and imaging evidence; Binswanger disease affects subcortical white matter.", "Control blood pressure (higher end of normal), diabetes and lipids; antiplatelet or anticoagulant drugs; avoid β-blockers.", "Mixed Alzheimer and vascular disease is common (10–15%)."], link: { ch: "ch03", sec: "s3-vascular", label: "Vascular dementia" } },
      parkinson: { label: "Most likely", dx: "Neurocognitive disorder due to Parkinson disease", line: "Gradual subcortical decline (bradyphrenia) arising in established Parkinson disease.", points: ["Dementia affects 20–30% with Parkinson disease; another 30–40% have measurable impairment.", "If parkinsonism follows the cognitive decline instead, consider Lewy body NCD.", "For psychosis, pimavanserin is approved; clozapine has support."], link: { ch: "ch03", sec: "s3-subcortical", label: "Subcortical dementias" } },
      huntington: { label: "Most likely", dx: "Neurocognitive disorder due to Huntington disease", line: "Subcortical dementia with psychomotor slowing and choreoathetosis in an autosomal dominant disease.", points: ["Memory, language and insight are relatively kept early.", "High rates of depression and psychosis distinguish it from Alzheimer disease."], link: { ch: "ch03", sec: "s3-subcortical", label: "Subcortical dementias" } },
      hiv: { label: "Most likely", dx: "HIV-associated dementia", line: "Subcortical triad of memory and psychomotor slowing, depression and movement disorder in confirmed HIV infection.", points: ["Screen and track with the Modified HIV Dementia Scale.", "Exclude opportunistic infection, lymphoma, major depression and substances.", "Poor prognosis; early treatment may prevent progression; watch protease inhibitor interactions."], link: { ch: "ch03", sec: "s3-hiv", label: "HIV and AIDS" } },
      pugilistica: { label: "Most likely", dx: "Dementia due to repeated head trauma (dementia pugilistica)", line: "Emotional lability, dysarthria and impulsivity after years of repeated head blows.", points: ["Seen in boxers and in football players after repeated concussions.", "Use low starting doses and slow titration of psychotropics after brain injury."], link: { ch: "ch03", sec: "s3-subcortical", label: "Subcortical dementias" } },
      subdural: { label: "Investigate now", dx: "Subdural hematoma", line: "Falls can cause a subdural hematoma that mimics dementia or delirium and reverses after evacuation.", points: ["Obtain CT.", "Ask about dizziness on standing and earlier falls."], link: { ch: "ch03", sec: "s3-subcortical", label: "Head trauma and dementia" } },
      thyroid: { label: "Investigate", dx: "Hypothyroidism", line: "Myxedema madness: slowed thinking, depression, paranoia or delirium with hypothyroid signs.", points: ["Check thyroid function.", "About 10% keep residual neuropsychiatric symptoms after replacement."], link: { ch: "ch03", sec: "s3-endocrine", label: "Endocrine disorders" } },
      b12: { label: "Investigate", dx: "Vitamin B12 deficiency", line: "Apathy, depression, irritability or megaloblastic madness, with neurologic signs that may precede anemia.", points: ["Check B12 and RBC folate.", "Early, continued parenteral B12 arrests the neurologic damage."], link: { ch: "ch03", sec: "s3-nutrition", label: "Nutritional disorders" } },
      neurosyphilis: { label: "Investigate", dx: "Neurosyphilis (general paresis)", line: "Frontal personality change and poor judgment, grandiosity in 10–20%, Argyll Robertson pupils, tremor and dysarthria.", points: ["CSF: lymphocytosis, raised protein and positive VDRL.", "Seen again in some urban settings with AIDS."], link: { ch: "ch03", sec: "s3-infections", label: "Infectious diseases" } },
      korsakoff: { label: "Most likely", dx: "Korsakoff syndrome", line: "Amnesia from thiamine deficiency, with confabulation, apathy and frontal-type executive deficits, often after Wernicke encephalopathy.", points: ["Thiamine prevents further damage but seldom reverses severe amnesia.", "About a quarter to a third recover fully; a quarter do not improve.", "Distinguish from alcohol-induced persisting dementia (broader cognitive loss)."], link: { ch: "ch03", sec: "s3-amn-subtypes", label: "Amnestic syndromes" } },
      tga: { label: "Most likely", dx: "Transient global amnesia", line: "Abrupt loss of recent memory and new learning with clear sensorium, lasting 6–24 hours, with full recovery.", points: ["Probably temporal and diencephalic ischemia (vertebrobasilar).", "Recurs in about 20%; some patients have epilepsy.", "More hypertension and migraine than TIA patients."], link: { ch: "ch03", sec: "s3-amn-subtypes", label: "Amnestic syndromes" } },
      ect: { label: "Expected", dx: "ECT-related amnesia", line: "Retrograde amnesia for minutes before and anterograde amnesia after each treatment.", points: ["Anterograde amnesia usually clears within 5 hours.", "Mild deficits may last 1–2 months and resolve by 6–9 months."], link: { ch: "ch03", sec: "s3-amn-subtypes", label: "Amnestic syndromes" } },
      headamn: { label: "Most likely", dx: "Amnestic disorder due to head injury", line: "Retrograde amnesia before the injury plus amnesia for the event; usually improves over months.", points: ["The best predictor of outcome is improvement in the first week after regaining consciousness.", "Recovery continues for 6–12 months; screen for depression, impulsivity and aggression."], link: { ch: "ch03", sec: "s3-amn-subtypes", label: "Amnestic syndromes" } },
      amnestic: { label: "Most likely", dx: "Amnestic disorder due to another medical condition", line: "Hippocampal or diencephalic damage produces impaired new learning with relatively preserved other cognition.", points: ["Causes with a predilection for the hippocampus: thiamine deficiency, hypoglycemia, hypoxia (including carbon monoxide) and herpes simplex encephalitis.", "Course is usually static; give orienting prompts, a behavioral plan and supportive psychotherapy.", "Review all drugs, especially benzodiazepines and anticholinergics."], link: { ch: "ch03", sec: "s3-amn-ddx", label: "Causes and differential" } },
      dissociative: { label: "Consider", dx: "Dissociative amnesia", line: "Loss of orientation to self with selective memory loss, preserved new learning and a stressful trigger.", points: ["Organic amnesia rarely loses orientation to person.", "Explore stressors involving money, the law or relationships."], link: { ch: "ch03", sec: "s3-amn-ddx", label: "Causes and differential" } },
      factitious: { label: "Consider", dx: "Factitious disorder or malingering", line: "Inconsistent memory test results without an identifiable cause, with evidence of primary or secondary gain.", points: ["True dementia loses time and place before person, and recent before remote memory.", "Neuropsychological testing helps document inconsistency."], link: { ch: "ch03", sec: "s3-amn-ddx", label: "Causes and differential" } },
      cjd: { label: "Most likely", dx: "Creutzfeldt–Jakob disease", line: "Rapidly progressive dementia with myoclonus, ataxia, aphasia and psychiatric symptoms, ending in akinetic mutism and death.", points: ["EEG shows a slow irregular background with periodic complexes in nearly all.", "Confirmed by cortical pathology (spongiform change, neuronal loss, astrocytosis).", "No treatment; death usually within 6 months of diagnosis; household contacts are not at risk."], link: { ch: "ch03", sec: "s3-prion", label: "Prion diseases" } },
      vcjd: { label: "Consider", dx: "Variant Creutzfeldt–Jakob disease", line: "Young patients with depression, withdrawal, anxiety or paranoia followed by cerebellar signs, linked to bovine spongiform encephalopathy.", points: ["Tonsil biopsy with Western blot for PrPSc allows antemortem diagnosis.", "Death usually within 2–3 years."], link: { ch: "ch03", sec: "s3-prion", label: "Prion diseases" } },
      hsv: { label: "Investigate now", dx: "Herpes simplex encephalitis", line: "The most common focal encephalitis, involving frontal and temporal lobes with anosmia, olfactory and gustatory hallucinations and personality change.", points: ["Survivors often have memory loss, personality change and psychosis.", "Complex partial epilepsy may follow."], link: { ch: "ch03", sec: "s3-infections", label: "Infectious diseases" } },
      nmda: { label: "Consider", dx: "Anti-NMDA receptor encephalitis", line: "An autoimmune encephalitis that mimics schizophrenia, with dissociation, amnesia and vivid hallucinations, mostly in women.", points: ["IV immunoglobulin has proved useful.", "Recovery occurs but may require prolonged intensive care."], link: { ch: "ch03", sec: "s3-immune", label: "Lupus and autoimmune encephalitis" } },
      mci: { label: "Most likely", dx: "Mild cognitive impairment (mild neurocognitive disorder)", line: "Memory impairment for age and education with preserved general cognition and daily activities, not demented.", points: ["About 10–15% per year convert to Alzheimer-type dementia; some revert to normal.", "Hippocampal atrophy, APOE4 and CSF low Aβ42 with high tau signal higher risk.", "No approved drug: control vascular risk factors and check thyroid, B12, medications and depression."], link: { ch: "ch03", sec: "s3-mci-def", label: "Mild cognitive impairment" } },
      aging: { label: "Likely", dx: "Normal age-related forgetfulness", line: "Benign senescent forgetfulness or age-associated memory impairment without significant social or occupational impact.", points: ["Reassess if complaints grow, an informant reports decline, or function falls.", "Neuropsychological testing separates MCI from normal aging."], link: { ch: "ch03", sec: "s3-mci-course", label: "MCI differential" } },
      depcog: { label: "Consider", dx: "Depression-related cognitive dysfunction (pseudodementia)", line: "Prominent depression with detailed complaints of memory loss, 'don't know' answers, a datable onset and often prior episodes.", points: ["Compare with dementia: demented patients conceal deficits, give near-miss answers and worsen at night.", "Memory usually improves with antidepressant treatment.", "Depression and dementia can coexist; reassess cognition after treatment."], link: { ch: "ch03", sec: "s3-dem-ddx", label: "Dementia differential diagnosis" } }
    }
  }
