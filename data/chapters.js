/*
 * Chapter registry.
 * To add a chapter: create data/chNN/ with the same seven files used by the other chapters (learning.js holds
 * the wrong-answer explanations, section checks, pre-test, board domains and visual summaries),
 * then add one entry below. The app loads every listed file at startup so the
 * search covers the whole app.
 */
window.KS = window.KS || {};
KS.chapters = KS.chapters || {};
KS.add = function (id, key, value) {
  (KS.chapters[id] = KS.chapters[id] || {})[key] = value;
};

KS.manifest = [
  {
    id: 'ch01',
    number: 1,
    title: 'Examination and Diagnosis of the Psychiatric Patient',
    short: 'Examination and diagnosis',
    summary: 'The interview, history and mental status examination; formulation and the record; laboratory tests, drug levels and neuroimaging; rating scales and psychological testing; and how the evaluation changes for children and older adults.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations', 'learning']
  },
  {
    id: 'ch02',
    number: 2,
    title: 'Neurodevelopmental Disorders and Other Childhood Disorders',
    short: 'Childhood disorders',
    summary: 'Intellectual disability, communication disorders, autism, ADHD, learning and motor disorders, and the childhood forms of trauma, mood, disruptive, anxiety, OCD, psychotic and substance use disorders: recognition, differential and evidence-based treatment.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations', 'learning']
  },
  {
    id: 'ch03', number: 3, title: 'Neurocognitive Disorders', short: 'Neurocognitive disorders',
    summary: 'Cognitive evaluation, delirium, dementia and its causes, amnestic disorders, psychiatric syndromes due to medical conditions, and mild cognitive impairment.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch04', number: 4, title: 'Substance Use and Addictive Disorders', short: 'Substance use and addiction',
    summary: 'General features of substance disorders, then alcohol, cannabis, opioids, sedatives, stimulants, tobacco, caffeine, hallucinogens, inhalants and anabolic steroids, plus gambling disorder.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch05',
    number: 5,
    title: 'Schizophrenia Spectrum and Other Psychotic Disorders',
    short: 'Schizophrenia spectrum',
    summary: 'Schizophrenia, schizoaffective, schizophreniform, brief psychotic and delusional disorders: how they present, how to tell them apart, and how to treat them.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations', 'learning']
  },
  {
    id: 'ch06',
    number: 6,
    title: 'Bipolar Disorders',
    short: 'Bipolar disorders',
    summary: 'Bipolar I, bipolar II and cyclothymia: recognizing mania and bipolar depression, the specifiers, the differential, and acute and maintenance treatment.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations', 'learning']
  },
  {
    id: 'ch07',
    number: 7,
    title: 'Depressive Disorders',
    short: 'Depressive disorders',
    summary: 'Major depressive disorder, dysthymia and the briefer forms: recognizing depression, the specifiers and a wide differential, and choosing, dosing and changing treatment.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations', 'learning']
  },
  {
    id: 'ch08',
    number: 8,
    title: 'Anxiety Disorders',
    short: 'Anxiety disorders',
    summary: 'Panic disorder, agoraphobia, specific phobia, social anxiety disorder and generalized anxiety disorder: what each fears, how to tell them apart, and evidence-based drug and psychological treatment.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations', 'learning']
  },
  {
    id: 'ch09',
    number: 9,
    title: 'Obsessive-Compulsive and Related Disorders',
    short: 'Obsessive-compulsive and related',
    summary: 'OCD, body dysmorphic disorder, hoarding, hair pulling and skin picking: the symptom patterns, the role of insight, a wide differential, and high-dose SRIs, ERP and disorder-specific therapies.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations', 'learning']
  },
  {
    id: 'ch10', number: 10, title: 'Trauma- and Stressor-Related Disorders', short: 'Trauma and stressor-related',
    summary: 'Posttraumatic stress disorder, acute stress disorder and adjustment disorders: diagnosis, differential, course, treatment and risk factors.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch11', number: 11, title: 'Dissociative Disorders', short: 'Dissociative disorders',
    summary: 'Dissociative amnesia and fugue, depersonalization/derealization disorder, dissociative identity disorder, trance and Ganser syndrome: diagnosis, differential, treatment and the role of trauma.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch12', number: 12, title: 'Somatic Symptom and Related Disorders', short: 'Somatic symptom and related',
    summary: 'Somatic symptom disorder, illness anxiety disorder, conversion disorder, psychological factors affecting medical conditions and factitious disorder: diagnosis, examination signs, detection, differential and management.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch13', number: 13, title: 'Feeding and Eating Disorders', short: 'Feeding and eating',
    summary: 'Anorexia nervosa, bulimia nervosa, binge-eating disorder and night-eating syndrome: diagnosis, medical complications, differential, refeeding and hospital care, psychotherapy and medication, course and causes.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch14', number: 14, title: 'Elimination Disorders', short: 'Elimination disorders',
    summary: 'Encopresis and enuresis: how continence develops, diagnostic criteria and minimum ages, medical differential, behavioral and drug treatment, and physiologic and psychosocial causes.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch19', number: 19, title: 'Personality Disorders', short: 'Personality disorders',
    summary: 'The ten personality disorders in three clusters: presentation, DSM-5 and ICD-10 criteria, differential diagnosis, comorbidity, course, epidemiology and treatment (including DBT, MBT and TFP), personality change due to a medical condition, target-symptom pharmacotherapy, defenses and temperament, with post-publication updates on ICD-11 and borderline personality disorder.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch21-0', number: '21.0', title: 'Principles of Psychopharmacology', short: 'Psychopharmacology principles',
    summary: 'How drugs are chosen, dosed and monitored: pharmacodynamics and kinetics, side effects, antidepressant suicidality, medication-induced movement disorders and NMS, overdose, treatment failure, withdrawal, combinations, special populations, off-label use and placebos.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch21-1', number: '21.1', title: 'Antipsychotics', short: 'Antipsychotics',
    summary: 'Second-generation serotonin–dopamine antagonists and first-generation dopamine receptor antagonists: mechanisms, drug-by-drug indications and dosing, clozapine, neuroleptic malignant syndrome and other adverse effects, depots, levels and treatment resistance, with post-publication updates.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch21-2', number: '21.2', title: 'Antidepressants', short: 'Antidepressants',
    summary: 'SSRIs and vortioxetine, SNRIs, bupropion, mirtazapine, nefazodone and trazodone, tricyclics, MAOIs and the tyramine diet, thyroid augmentation, ketamine, esketamine and neurosteroids: indications, dosing, side effects, interactions and overdose, with post-publication updates.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch21-3', number: '21.3', title: 'Mood Stabilizers', short: 'Mood stabilizers',
    summary: 'Lithium, valproate, lamotrigine, carbamazepine and oxcarbazepine, the other anticonvulsants and calcium channel blockers: indications, dosing, levels, toxicity, interactions, monitoring and pregnancy, with post-publication updates.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch21-4', number: '21.4', title: 'Anxiolytics', short: 'Anxiolytics',
    summary: 'Benzodiazepines and flumazenil, buspirone, β-blockers, barbiturates and older sedatives: pharmacokinetics, indications, dependence and withdrawal, overdose, interactions and dosing, with post-publication updates.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch21-5', number: '21.5', title: 'Drugs Used to Treat Sleep Disorders', short: 'Sleep drugs',
    summary: 'Zolpidem, zaleplon and eszopiclone, sodium oxybate, ramelteon and melatonin, and prazosin for nightmares, with post-publication updates on complex sleep behaviors, dosing, orexin antagonists, low-dose doxepin and guidelines.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch21-6', number: '21.6', title: 'Stimulants', short: 'Stimulants',
    summary: 'Methylphenidate, the amphetamines and lisdexamfetamine, modafinil and armodafinil, and atomoxetine for ADHD, narcolepsy, depression and apathy, with post-publication updates on mechanism, growth, misuse warnings, psychosis risk and newer ADHD and wakefulness drugs.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch21-7', number: '21.7', title: 'Drugs Used to Treat Substance Use Disorders', short: 'Substance use disorder drugs',
    summary: 'Methadone, buprenorphine and tramadol; naltrexone, nalmefene and naloxone with the naloxone challenge and rapid detoxification; disulfiram and acamprosate; and clonidine and guanfacine, with post-publication updates on prescribing rules, long-acting buprenorphine, fentanyl-era induction, pregnancy, over-the-counter naloxone, lofexidine and the alcohol guideline.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch21-8', number: '21.8', title: 'Drugs Used for Cognitive Enhancement', short: 'Cognitive enhancers',
    summary: 'Donepezil, rivastigmine, galantamine and tacrine, and memantine for Alzheimer disease and other dementias, with post-publication updates on approvals for severe disease and Parkinson disease dementia, patches and combination products, label dose corrections, anti-amyloid antibodies and ARIA, blood tests, mild cognitive impairment and agitation.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch21-9', number: '21.9', title: 'Drugs Used to Treat Sexual Disorders', short: 'Sexual disorder drugs',
    summary: 'Sildenafil, vardenafil and tadalafil, phenylephrine for priapism, and yohimbine, with post-publication updates on avanafil and other approvals, nitrites, riociguat and nitrate timing, hearing loss and priapism labeling, the priapism guideline, evidence in women, yohimbe supplements, and flibanserin and bremelanotide.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch21-10', number: '21.10', title: 'Drugs Used to Treat the Side Effects of Psychotropic Drugs', short: 'Side-effect drugs',
    summary: 'Anticholinergics and physostigmine, antihistamines, dopamine agonists, levodopa and amantadine, and drugs for psychotropic weight gain, with post-publication updates on physostigmine, promethazine and hydroxyzine safety, ranitidine, impulse control, restless legs, influenza, and GLP-1 drugs for antipsychotic weight gain.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch21-11', number: '21.11', title: 'Nutritional Supplements and Medical Foods', short: 'Supplements',
    summary: 'Dietary supplements, medical foods and phytomedicines: DSHEA and medical food rules, supplements for cognition and mood, melatonin, L-methylfolate and N-acetylcysteine, St. John\'s wort, kava and other sedative, stimulant and toxic herbs, and the supplement history, with post-publication updates on ephedra, tianeptine, melatonin, St. John\'s wort interactions, kava, ginkgo, L-tryptophan, kratom 7-OH, ashwagandha and omega-3s.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch25-3', number: '25.3', title: 'Psychiatric Emergencies', short: 'Psychiatric emergencies',
    summary: 'Emergency evaluation and triage, medical versus psychiatric causes, suicidal, violent and psychotic patients, rape, emergency medication, restraint and disposition, the common emergencies table, and emergencies in children, with post-publication updates on suicide screening and safety planning, agitation guidance, restraint rules and corrected doses.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  }
];

/* Shared data loaded with the chapters: glossary and diagnostic helpers. */
KS.extraFiles = [
  'data/glossary/g1.js',
  'data/glossary/g2.js',
  'data/glossary/g3.js',
  'data/glossary/g4.js',
  'data/glossary/g5-chapter-terms.js',
  'data/helpers.js',
  'data/lookalikes.js',
  'data/sources.js',
  'data/drugs/antipsychotics.js',
  'data/drugs/antidepressants.js',
  'data/drugs/mood-stabilizers.js',
  'data/drugs/anxiolytics.js',
  'data/drugs/hypnotics.js',
  'data/drugs/stimulants.js',
  'data/drugs/substance.js',
  'data/drugs/cognitive.js',
  'data/drugs/sexual.js',
  'data/drugs/sideeffect.js',
  'data/drugs/supplement.js',
  'data/changelog.js'
];
