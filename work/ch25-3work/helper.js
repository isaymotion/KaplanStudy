  {
    id: "agitation",
    chapter: "ch25-3",
    title: "Managing an agitated patient in the emergency department",
    summary: "Start from how dangerous the situation is, then the most likely cause of the agitation (medical illness or delirium, alcohol, stimulants, anticholinergic drugs, psychosis or mania, or unknown) to reach the approach in section 25.3, with post-publication Project BETA guidance marked.",
    caution: "A teaching aid built from section 25.3 of the 12th edition, with post-publication updates marked. Agitation is a symptom: check vital signs and glucose, and look for medical causes, intoxication and withdrawal in every patient. Follow local policy and law on medication without consent, seclusion and restraint.",
    start: "danger",
    nodes: {
      danger: {
        q: "How dangerous is the situation right now?",
        options: [
          { label: "Imminent violence that words cannot contain", note: "Imminent danger that verbal intervention cannot contain is the indication for restraint (Table 25-11).", to: "r:restraint" },
          { label: "Agitated, but able to talk and listen", note: "A patient who can still talk can be offered de-escalation and a choice of medication.", to: "cause" }
        ]
      },
      cause: {
        q: "What is the most likely cause?",
        help: "Acute onset, first episode, older age, fluctuating alertness, disorientation or nonauditory hallucinations point to a medical cause (Table 25-8).",
        options: [
          { label: "Delirium or a medical illness", note: "Medical causes come first: the cause determines the intervention.", to: "r:delirium" },
          { label: "Alcohol intoxication", note: "Alcohol adds respiratory depression to any sedative.", to: "r:alcohol" },
          { label: "Alcohol or sedative withdrawal", note: "Withdrawal from alcohol or sedatives is treated with cross-tolerant benzodiazepines.", to: "r:withdrawal" },
          { label: "Stimulant intoxication (cocaine, methamphetamine)", note: "Stimulant agitation is driven by sympathetic overactivity.", to: "r:stimulant" },
          { label: "Anticholinergic drug (dry, hot, flushed, dilated pupils)", note: "Anticholinergic toxicity is worsened by anticholinergic antipsychotics.", to: "r:anticholinergic" },
          { label: "Psychosis or mania", note: "Agitation from psychosis responds best to antipsychotics.", to: "psych" },
          { label: "Not yet clear", note: "When the cause is unclear, psychotic features guide the choice.", to: "unknown" }
        ]
      },
      psych: {
        q: "Will the patient take medication by mouth?",
        options: [
          { label: "Yes", note: "Oral medication is preferred when the patient will take it.", to: "r:oralap" },
          { label: "No, and agitation is escalating", note: "Refusal with escalating agitation calls for IM medication.", to: "r:imap" }
        ]
      },
      unknown: {
        q: "Are there psychotic features?",
        options: [
          { label: "Yes", note: "Psychotic features favor an antipsychotic.", to: "r:oralap" },
          { label: "No", note: "Without psychosis, agitation of unclear cause favors a benzodiazepine.", to: "r:unknownbz" }
        ]
      }
    },
    results: {
      restraint: { label: "Act now", dx: "Show of force, medication and, if needed, restraint", line: "Restraint is used only when the danger cannot be controlled any other way (Table 25-11).", points: ["Have a trained team; tell the patient violence is not acceptable and that restraint will be used if needed; offer medication.", "Observe continuously, check vital signs often, avoid prone positioning and pressure on the chest or neck.", "Post-publication (CMS): no PRN orders; face-to-face evaluation within 1 hour; adult orders last at most 4 hours."], link: { ch: "ch25-3", sec: "s253-restraint", label: "Restraints" } },
      delirium: { label: "Treat the cause", dx: "Delirium or medical illness", line: "Find and treat every contributing cause; use reassurance, structure and orientation clues.", points: ["Book: benzodiazepines and low-dose high-potency antipsychotics only with extreme care.", "Post-publication (Project BETA): a second-generation antipsychotic or low-dose haloperidol; avoid benzodiazepines unless the delirium is from alcohol or sedative withdrawal.", "Post-publication (APA 2025): antipsychotics only after de-escalation fails and causes are addressed, for distress or risk of harm."], link: { ch: "ch25-3", sec: "s253-medical", label: "Medical or psychiatric?" } },
      alcohol: { label: "Prefer", dx: "Time, protection and, if needed, an antipsychotic", line: "Intoxication usually settles with time in a protective environment.", points: ["Post-publication (Project BETA): use medication sparingly; haloperidol has the longest safety record; avoid benzodiazepines (respiratory depression).", "Never give IM olanzapine with a parenteral benzodiazepine.", "Look for head injury, hypoglycemia and coingestants; give thiamine."], link: { ch: "ch25-3", sec: "s253-tox", label: "Alcohol emergencies" } },
      withdrawal: { label: "Prefer", dx: "A benzodiazepine", line: "Alcohol and sedative withdrawal can be fatal; benzodiazepines are the treatment.", points: ["Fluids and electrolytes, vital signs, thiamine 100 mg (with magnesium, before glucose).", "Haloperidol may be added for psychosis in withdrawal delirium.", "Sedative withdrawal: slow benzodiazepine taper and admission (Table 25-12)."], link: { ch: "ch25-3", sec: "s253-tox", label: "Alcohol emergencies" } },
      stimulant: { label: "Prefer", dx: "A benzodiazepine", line: "Post-publication (Project BETA): benzodiazepines are first line for stimulant intoxication.", points: ["Add an antipsychotic for psychosis, especially in chronic amphetamine users.", "Watch for hypertension, tachycardia, chest pain, stroke and hyperthermia (cocaine).", "No gradual withdrawal is needed; screen for withdrawal depression and suicidality."], link: { ch: "ch25-3", sec: "s253-tox", label: "Drug intoxication" } },
      anticholinergic: { label: "Avoid antipsychotics", dx: "Benzodiazepines; physostigmine for severe cases", line: "Antipsychotics are contraindicated in anticholinergic intoxication.", points: ["Stop the drug; benzodiazepines for agitation.", "IV physostigmine 0.5 to 2 mg for severe agitation or fever, with cardiac monitoring.", "Cool and hydrate if hyperthermic."], link: { ch: "ch25-3", sec: "s253-tox", label: "Anticholinergic intoxication" } },
      oralap: { label: "Prefer", dx: "Oral antipsychotic, offered collaboratively", line: "Post-publication (Project BETA): oral medication when the patient will take it; the goal is calm, not sleep.", points: ["Oral risperidone has the strongest evidence; oral olanzapine or haloperidol are alternatives.", "Add lorazepam rather than repeating the antipsychotic if one dose is not enough.", "Post-publication: inhaled loxapine or sublingual dexmedetomidine for schizophrenia or bipolar agitation."], link: { ch: "ch25-3", sec: "s253-pharm", label: "Emergency pharmacotherapy" } },
      imap: { label: "Options", dx: "IM antipsychotic, with or without a benzodiazepine", line: "Book: haloperidol 5 to 10 mg IM, repeated every 30 to 60 minutes; small repeated doses avoid overmedication.", points: ["Post-publication (Project BETA): IM ziprasidone or olanzapine; lorazepam may be added to haloperidol.", "Do not combine IM olanzapine with a parenteral benzodiazepine; avoid IV haloperidol where possible.", "Monitor BP and vital signs; watch for acute dystonia (benztropine or diphenhydramine IM)."], link: { ch: "ch25-3", sec: "s253-pharm", label: "Emergency pharmacotherapy" } },
      unknownbz: { label: "Prefer", dx: "A benzodiazepine", line: "Post-publication (Project BETA): for agitation of unclear cause without psychosis, a benzodiazepine.", points: ["Keep looking for the cause: vital signs, glucose, toxicology, history from informants and old records.", "Book doses: lorazepam 2 to 4 mg or diazepam 5 to 10 mg IV slowly over 2 minutes, watching respiration."], link: { ch: "ch25-3", sec: "s253-pharm", label: "Emergency pharmacotherapy" } }
    }
  }
