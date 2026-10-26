/* Reference calculators for the Clinical tools page. js/tools.js holds the logic (one engine per calculator);
   this file holds the tables. Every value was checked against the source listed with it (October 2026). */
KS.calcs = [
  {
    id: 'antipsychotic', engine: 'ddd', short: 'Antipsychotic equivalents', name: 'Antipsychotic dose equivalents (DDD method)',
    blurb: 'Convert between antipsychotics, oral and long-acting injectable, using WHO defined daily doses',
    summary: 'Expresses a dose as a multiple of the drug’s **WHO defined daily dose (DDD)**, the method of Leucht et al. (2016), then shows the matching dose of another antipsychotic and the olanzapine and chlorpromazine equivalents.',
    chapters: ['ch21-1', 'ch05'],
    /* [name, DDD in mg per day, route, note]. Depot DDDs are per day: divide the injection dose by the interval. */
    drugs: [
      ['Amisulpride', 400, 'oral'], ['Aripiprazole', 15, 'oral'], ['Asenapine', 20, 'oral', 'sublingual'], ['Brexpiprazole', 3, 'oral'],
      ['Cariprazine', 3, 'oral'], ['Chlorpromazine', 300, 'oral'], ['Clozapine', 300, 'oral'], ['Flupentixol', 6, 'oral'],
      ['Fluphenazine', 10, 'oral'], ['Haloperidol', 8, 'oral'], ['Iloperidone', 18, 'oral'], ['Loxapine', 100, 'oral'],
      ['Lurasidone', 60, 'oral'], ['Olanzapine', 10, 'oral'], ['Paliperidone', 6, 'oral'], ['Perphenazine', 30, 'oral'],
      ['Pimozide', 4, 'oral'], ['Quetiapine', 400, 'oral'], ['Risperidone', 5, 'oral'], ['Sulpiride', 800, 'oral'],
      ['Thioridazine', 300, 'oral'], ['Trifluoperazine', 20, 'oral'], ['Ziprasidone', 80, 'oral'], ['Zuclopenthixol', 30, 'oral'],
      ['Aripiprazole LAI', 13.3, 'depot', 'monthly aripiprazole (e.g. 400 mg every month)'],
      ['Flupentixol decanoate', 4, 'depot'], ['Fluphenazine decanoate', 1, 'depot'], ['Haloperidol decanoate', 3.3, 'depot', 'enter the haloperidol dose'],
      ['Olanzapine pamoate', 10, 'depot', 'enter the olanzapine dose'], ['Paliperidone palmitate', 2.5, 'depot', 'paliperidone, not palmitate', 1.56],
      ['Risperidone LAI', 2.7, 'depot'], ['Zuclopenthixol decanoate', 15, 'depot']
    ],
    note: 'DDDs are WHO drug-utilization units: the assumed average maintenance dose per day for the main indication in adults. Leucht and colleagues showed they track well with other equivalence methods, but no method is exact, especially at high doses, for clozapine, or between drugs with very different receptor profiles. **Switch by cross-titration and clinical response, not by arithmetic alone.** Drugs approved recently (for example lumateperone and xanomeline–trospium) have no WHO DDD yet, so they are not listed. For paliperidone palmitate, US doses are written as the palmitate: 39, 78, 117, 156 and 234 mg equal 25, 50, 75, 100 and 150 mg of paliperidone (factor 1.56). This calculator takes either and converts.',
    cite: 'Leucht S, Samara M, Heres S, Davis JM. Dose equivalents for antipsychotic drugs: the DDD method. *Schizophr Bull.* 2016;42(Suppl 1):S90–S94. WHO Collaborating Centre for Drug Statistics Methodology, ATC/DDD Index (N05A, last updated 2026-01-20).',
    sources: [
      { label: 'WHO ATC/DDD Index: antipsychotics, N05A (2026)', url: 'https://atcddd.fhi.no/atc_ddd_index/?code=N05A&showdescription=no' },
      { label: 'Leucht et al. 2016, Schizophrenia Bulletin (DOI)', url: 'https://doi.org/10.1093/schbul/sbv167' },
      { label: 'Janssen: paliperidone palmitate dose conversion (mg eq.)', url: 'https://www.jnjmedicalconnect.com/products/invega-sustenna/medical-content/dosing-of-invega-sustenna-maximum-dose' }
    ]
  },
  {
    id: 'benzodiazepine', engine: 'benzo', short: 'Benzodiazepine equivalents', name: 'Benzodiazepine dose equivalents',
    blurb: 'Approximate doses equal to diazepam 10 mg, with half-lives, for switching and tapering',
    summary: 'Converts a daily benzodiazepine dose to its **diazepam equivalent** and to another benzodiazepine, using the Ashton Manual table. A second column shows the UK Specialist Pharmacy Service figure where it gives one.',
    chapters: ['ch21-4', 'ch04'],
    /* [name, Ashton mg equal to diazepam 10 mg (low, high), half-life h (active metabolite), SPS mg equal to diazepam 10 mg or null] */
    drugs: [
      ['Alprazolam', 0.5, 0.5, '6 to 12', 0.5], ['Bromazepam', 5, 6, '10 to 20', null], ['Chlordiazepoxide', 25, 25, '5 to 30 (36 to 200)', 25],
      ['Clobazam', 20, 20, '12 to 60', 20], ['Clonazepam', 0.5, 0.5, '18 to 50', 0.5], ['Clorazepate', 15, 15, '(36 to 200)', null],
      ['Diazepam', 10, 10, '20 to 100 (36 to 200)', 10], ['Estazolam', 1, 2, '10 to 24', null], ['Flunitrazepam', 1, 1, '18 to 26 (36 to 200)', null],
      ['Flurazepam', 15, 30, '(40 to 250)', null], ['Lorazepam', 1, 1, '10 to 20', 1], ['Lormetazepam', 1, 2, '10 to 12', null],
      ['Nitrazepam', 10, 10, '15 to 38', 10], ['Oxazepam', 20, 20, '4 to 15', 20], ['Temazepam', 20, 20, '8 to 22', 20],
      ['Triazolam', 0.5, 0.5, '2', null], ['Zolpidem (Z-drug)', 20, 20, '2', null], ['Zopiclone (Z-drug)', 15, 15, '5 to 6', null],
      ['Eszopiclone (Z-drug)', 3, 3, '6 (9 in older adults)', null]
    ],
    note: 'Equivalents are **approximate** and vary between people; tables from different authors disagree. They come from clinical experience of switching to diazepam for withdrawal, not from trials. When switching, change over in steps and watch for oversedation or withdrawal; long-acting drugs accumulate, especially in older adults and liver disease (oxazepam and lorazepam are less affected). Taper gradually; do not stop abruptly after long use. Half-lives in brackets are for active metabolites.',
    cite: 'Ashton CH. *Benzodiazepines: How They Work and How to Withdraw* (the Ashton Manual), equivalence table revised 2007. UK Specialist Pharmacy Service. Oral benzodiazepines and choosing equivalent doses (reviewed July 2025).',
    sources: [
      { label: 'Ashton Manual: benzodiazepine equivalence table', url: 'https://www.benzo.org.uk/bzequiv.htm' },
      { label: 'NHS Specialist Pharmacy Service: choosing equivalent doses (2025)', url: 'https://sps.nhs.uk/articles/oral-benzodiazepines-and-choosing-equivalent-doses/' }
    ]
  },
  {
    id: 'clozapine-anc', engine: 'anc', short: 'Clozapine ANC', name: 'Clozapine ANC monitoring',
    blurb: 'What an ANC result means for clozapine, and when to check next, including benign ethnic neutropenia',
    summary: 'Enter the absolute neutrophil count and how long the patient has been on clozapine. The tool gives the neutropenia category, the recommended action and the monitoring frequency from the **US prescribing information (Clozaril, revised June 2025)**.',
    chapters: ['ch21-1', 'ch05'],
    general: [
      { lo: 1500, label: 'Normal range (1,500/µL or more)', tone: 'ok', action: 'Continue treatment.', freq: 'normal' },
      { lo: 1000, label: 'Mild neutropenia (1,000 to 1,499/µL)', tone: 'mild', action: 'Continue treatment; no dose change.', freq: 'Three times weekly until the ANC is 1,500/µL or more, then return to the routine schedule.' },
      { lo: 500, label: 'Moderate neutropenia (500 to 999/µL)', tone: 'mod', action: '**Interrupt clozapine** and get a hematology consultation. Resume once the ANC is 1,000/µL or more.', freq: 'Daily until the ANC is 1,000/µL or more, then three times weekly until it is 1,500/µL or more; then weekly for 4 weeks, then the routine schedule.' },
      { lo: 0, label: 'Severe neutropenia (under 500/µL)', tone: 'sev', action: '**Stop clozapine** and get a hematology consultation. Rechallenge only if the benefit outweighs the risk, once the ANC is 1,500/µL or more.', freq: 'Daily until the ANC is 1,000/µL or more, then three times weekly until it is 1,500/µL or more. If restarted, monitor as a new start.' }
    ],
    ben: [
      { lo: 1000, label: 'Normal range for BEN (1,000/µL or more)', tone: 'ok', action: 'Continue treatment.', freq: 'normal' },
      { lo: 500, label: 'BEN neutropenia (500 to 999/µL)', tone: 'mod', action: 'Continue treatment; no dose change. Get a hematology consultation.', freq: 'Three times weekly until the ANC is 1,000/µL or more and at or above the patient’s baseline; then weekly for 4 weeks, then the routine BEN schedule.' },
      { lo: 0, label: 'Severe neutropenia (under 500/µL)', tone: 'sev', action: '**Stop clozapine** and get a hematology consultation. Rechallenge only if the benefit outweighs the risk, once the ANC is 1,000/µL or more and at or above baseline.', freq: 'Daily until the ANC is 500/µL or more, then three times weekly until it is at or above baseline. If restarted, monitor as a new BEN start.' }
    ],
    note: '**Starting:** clozapine is not recommended if the baseline ANC is under 1,500/µL, or under 1,000/µL in benign ethnic neutropenia (get at least two baseline values in BEN). **Routine schedule** while the ANC is normal: weekly for the first 6 months, every 2 weeks for months 7 to 12, then monthly. **US update:** the FDA removed the Clozapine REMS effective June 13, 2025, so prescribers and pharmacies no longer enroll or report ANCs to a registry. FDA still says to monitor the ANC at the frequencies in the prescribing information. Rules elsewhere, including the Philippines, may differ; follow your hospital and the local label. Also ask about fever, sore throat and other signs of infection at every visit.',
    cite: 'Clozaril (clozapine) US prescribing information, revised 6/2025, section 2, Tables 1 and 2. FDA Drug Safety Communication, August 27, 2025.',
    sources: [
      { label: 'Clozaril prescribing information, FDA (revised June 2025)', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/019758Orig1s107lbl.pdf' },
      { label: 'FDA: clozapine REMS removed (2025)', url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-removes-risk-evaluation-and-mitigation-strategy-rems-program-antipsychotic-drug-clozapine' }
    ]
  },
  {
    id: 'lithium-level', engine: 'lithium', short: 'Lithium level', name: 'Lithium level interpretation',
    blurb: 'Read a serum lithium level against maintenance and acute targets and toxicity ranges',
    summary: 'Enter a serum lithium level (mmol/L and mEq/L are the same number for lithium), what it is for and when it was drawn. The tool compares it with the **ISBD/IGSLi 2019** maintenance targets, the US label’s acute range and the usual toxicity bands.',
    chapters: ['ch21-3', 'ch06'],
    targets: {
      maint: { label: 'Maintenance, adult', lo: 0.6, hi: 0.8, text: 'ISBD/IGSLi standard target **0.60 to 0.80 mmol/L**. Options: 0.40 to 0.60 for a good response with poor tolerance; 0.80 to 1.00 for an insufficient response with good tolerance.' },
      older: { label: 'Maintenance, older adult', lo: 0.4, hi: 0.6, text: 'ISBD/IGSLi suggests **0.40 to 0.60 mmol/L** in older adults, at most 0.70 to 0.80 at age 65 to 79 and at most 0.70 over 80 (majority view, not consensus).' },
      acute: { label: 'Acute mania', lo: 1.0, hi: 1.5, text: 'The US label targets **1.0 to 1.5 mEq/L** for acute mania; Kaplan gives 1.0 to 1.2. Levels should not go above 2.0 during acute treatment.' }
    },
    toxic: [
      { lo: 3.5, label: 'Severe toxicity range (over 3.5)', tone: 'sev', text: 'Medical emergency. Seizures, coma and arrhythmias are possible. Discuss extracorporeal treatment (hemodialysis) with toxicology now.' },
      { lo: 2.5, label: 'Moderate toxicity range (2.5 to 3.5)', tone: 'sev', text: 'Hold lithium and treat as toxicity: confusion, ataxia, coarse tremor and myoclonus are typical. Check renal function, electrolytes and an ECG.' },
      { lo: 1.5, label: 'Mild toxicity range (1.5 to 2.5)', tone: 'mod', text: 'Toxic levels begin here, close to the therapeutic range. Hold the next dose, look for nausea, diarrhea, tremor and drowsiness, and find the cause (dehydration, interacting drugs, renal decline).' }
    ],
    note: 'Draw levels as a **trough, 12 hours after the last dose** (ISBD/IGSLi: 12 ± 1 hours), at steady state, about 5 days after a dose change. A level drawn sooner after a dose reads falsely high. Toxicity is a clinical diagnosis: chronic toxicity can be serious at lower levels than acute overdose, and some patients are toxic even within the therapeutic range. Toxicity bands are the traditional ones; levels correlate imperfectly with symptoms.',
    cite: 'Nolen WA, Licht RW, Young AH, et al. What is the optimal serum level for lithium in the maintenance treatment of bipolar disorder? A systematic review and recommendations from the ISBD/IGSLI Task Force on treatment with lithium. *Bipolar Disord.* 2019;21(5):394–409. Lithium carbonate US prescribing information. StatPearls: Lithium toxicity (2026).',
    sources: [
      { label: 'ISBD/IGSLi lithium level recommendations (2019, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6688930' },
      { label: 'Lithium carbonate label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=lithium%20carbonate' },
      { label: 'StatPearls: Lithium toxicity', url: 'https://www.ncbi.nlm.nih.gov/books/NBK499992/' }
    ]
  }
];
