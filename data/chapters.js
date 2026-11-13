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
    id: 'ch15', number: 15, title: 'Sleep–Wake Disorders', short: 'Sleep–wake disorders',
    summary: 'Sleep stages and classification; insomnia and CBTi; hypersomnolence, Kleine–Levin syndrome and narcolepsy; obstructive and central sleep apnea and hypoventilation; circadian rhythm disorders; parasomnias; restless legs and other movement disorders; and polysomnography, MSLT and the sleep history, with post-publication updates.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch16', number: 16, title: 'Human Sexuality and Sexual Dysfunctions', short: 'Sexuality and sexual dysfunctions',
    summary: 'The sex history; desire, arousal, erectile, orgasm, ejaculation and genito-pelvic pain disorders; dysfunction due to medical illness and drugs; PDE-5 inhibitors, hormones, devices and sex therapy; the paraphilic disorders; compulsive sexual behavior; and normal sexuality, sexual development and the sexual response cycle, with post-publication updates.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch17', number: 17, title: 'Gender Dysphoria, Gender Identity, and Related Conditions', short: 'Gender dysphoria',
    summary: 'Gender identity and the terms used; DSM-5 and ICD-10 gender dysphoria in children, adolescents and adults; differential diagnosis, course and comorbidity; psychotherapy, hormones and surgery; epidemiology and theories of causation, with post-publication updates on ICD-11, DSM-5-TR, WPATH SOC-8 and the changing evidence and policy on treating minors.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch18', number: 18, title: 'Disruptive, Impulse-Control, and Conduct Disorders', short: 'Impulse-control disorders',
    summary: 'Intermittent explosive disorder, kleptomania and pyromania: the impulse cycle, DSM-5 and ICD-10 criteria, workup, impulses versus compulsions, differential diagnosis, comorbidity, course, treatment, epidemiology and etiology, with post-publication updates on ICD-11, the pyromania criteria and controlled trials of fluoxetine and naltrexone.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch19', number: 19, title: 'Personality Disorders', short: 'Personality disorders',
    summary: 'The ten personality disorders in three clusters: presentation, DSM-5 and ICD-10 criteria, differential diagnosis, comorbidity, course, epidemiology and treatment (including DBT, MBT and TFP), personality change due to a medical condition, target-symptom pharmacotherapy, defenses and temperament, with post-publication updates on ICD-11 and borderline personality disorder.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  {
    id: 'ch20', number: 20, title: 'Other Conditions that May be a Focus of Clinical Attention', short: 'Other conditions of clinical attention',
    summary: 'Conditions that are not mental disorders but bring people to care: malingering and its differential, bereavement versus depression, occupational problems, adult antisocial behavior, religious or spiritual problems, acculturation and culture shock, prisoners of war and torture victims, phase of life problems, nonadherence and relational problems, with post-publication updates on DSM-5-TR, ICD-11, the bereavement exclusion and prolonged grief disorder.',
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
  { id: 'ch22', number: 22, title: 'Other Somatic Therapies', short: 'ECT, brain stimulation and neurosurgery',
    summary: 'Electroconvulsive therapy (history, mechanism, indications, pretreatment workup, anesthesia, electrode placement, stimulus dosing, seizure monitoring, course and adverse effects), the newer brain stimulation methods (TMS, tDCS, CES, MST, VNS) and psychiatric neurosurgery (lesion procedures and deep brain stimulation), with post-publication updates on FDA device rulings and clearances, ketamine versus ECT and DBS trials, plus two corrections to the book.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-1', number: '23.1', title: 'Psychoanalysis and Psychoanalytic Psychotherapy', short: 'Psychoanalysis',
    summary: 'Classic psychoanalysis (process, indications, prerequisites, stages, setting, rules and limits) and psychoanalytic psychotherapy in its expressive and supportive modes, compared on one clinical continuum, with the corrective emotional experience and an update on the evidence base.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-2', number: '23.2', title: 'Brief Psychodynamic Psychotherapy', short: 'Brief dynamic therapy',
    summary: 'The four classic schools of brief dynamic therapy (Malan, Mann, Davanloo and Sifneos): selection criteria, the focus, the time limit, confrontation and anxiety-provoking techniques, and results, with newer evidence for depression.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-3', number: '23.3', title: 'Group Psychotherapy, Combined Individual and Group Psychotherapy, and Psychodrama', short: 'Group therapy and psychodrama',
    summary: 'Group orientations compared, patient selection and preparation, size, frequency and composition, the therapeutic factors, the therapist\'s role, inpatient and self-help groups, combined therapy, psychodrama and ethical issues, with an update on online groups.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-4', number: '23.4', title: 'Family Therapy and Couples Therapy', short: 'Family and couples therapy',
    summary: 'Indications, consultation and interviewing, the schools of family and couple therapy, family group and social network therapy, paradox and reframing, and the types, indications, contraindications and goals of couples therapy, with the APA guideline on family interventions.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-5', number: '23.5', title: 'Dialectical Behavior Therapy', short: 'DBT',
    summary: 'Linehan\'s DBT for borderline personality disorder and beyond: the problem-behavior loop, five functions and four modes (skills group, individual therapy, telephone consultation, consultation team), team agreements and results, with the 2024 APA guideline.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-6', number: '23.6', title: 'Biofeedback', short: 'Biofeedback',
    summary: 'Biofeedback theory and instruments, relaxation techniques, autogenic training, applied tension and applied relaxation, with indications, results and a recent neurofeedback meta-analysis.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-7', number: '23.7', title: 'Cognitive Therapy', short: 'Cognitive therapy',
    summary: 'Beck\'s cognitive model and cognitive triad, structure of treatment, automatic thoughts, maladaptive assumptions, cognitive errors, behavioral techniques and indications, with the 2022 NICE depression guideline.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-8', number: '23.8', title: 'Behavior Therapy', short: 'Behavior therapy',
    summary: 'Learning principles, systematic desensitization, graded exposure, flooding, participant modeling, virtual reality, assertiveness and social skills training, aversion therapy, EMDR, reinforcement and behavioral activation, with current PTSD guideline positions.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-9', number: '23.9', title: 'Hypnosis', short: 'Hypnosis',
    summary: 'History and definition of hypnosis, hypnotizability as a trait, induction, and indications and contraindications, with a 2024 umbrella review of the evidence.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-10', number: '23.10', title: 'Interpersonal Therapy', short: 'IPT',
    summary: 'Klerman and Weissman\'s IPT: the three phases (Table 23-13), the four problem areas of grief, interpersonal deficits, role disputes and role transitions (Table 23-14), and group IPT (Table 23-15), with a 2024 comparison with antidepressants.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-11', number: '23.11', title: 'Narrative Psychotherapy', short: 'Narrative therapy',
    summary: 'Narrative psychotherapy and narrative psychiatry: stories, metaphor, plot and character, and future directions, with early meta-analytic evidence.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-12', number: '23.12', title: 'Combined Psychotherapy and Pharmacotherapy', short: 'Combined therapy',
    summary: 'Indications, one versus two clinicians (Table 23-16), communication, the linkage phenomenon, adherence and education, attribution theory, and combined treatment by disorder, with a network meta-analysis for depression.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-13', number: '23.13', title: 'Mentalization-Based Treatment', short: 'MBT',
    summary: 'Mentalizing and MBT: aims, techniques, alliance building (Table 23-17), indications and contraindications, with a 2023 trial of short versus long MBT.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch23-14', number: '23.14', title: 'Psychoeducational Interventions', short: 'Psychoeducation',
    summary: 'What psychoeducation includes, how it is delivered, and the evidence in schizophrenia, bipolar disorder and depression.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch24-1', number: '24.1', title: 'Psychiatric Rehabilitation', short: 'Rehabilitation',
    summary: 'Aims and values of psychiatric rehabilitation, supported employment, social skills training (Table 24-1), social perception and problem-solving training, milieu therapy, token economies, cognitive rehabilitation and ethics, with updates on IPS and cognitive remediation.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch24-2', number: '24.2', title: 'Genetic Counseling', short: 'Genetic counseling',
    summary: 'Genetic counseling in psychiatry: definition, genes and environment in complex disorders (Table 24-2), family history and pedigrees (Figures 24-1 and 24-2), the steps of counseling (Table 24-3), risk communication, psychosocial support and the ethics of testing, with updates on genome studies, APOE testing and genetic discrimination law.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch25-1', number: '25.1', title: 'Consultation-Liaison Psychiatry', short: 'C-L psychiatry',
    summary: 'Consultation-liaison psychiatry (psychosomatic medicine): history, clinical problems (Table 25-1), evaluation and treatment in the medically ill, common referral problems, ICU and dialysis units, urgent causes of delirium (Table 25-2), surgery, transplantation and psycho-oncology, with updates on capacity, ICU delirium, thiamine and the group-therapy survival trials.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch25-2', number: '25.2', title: 'Geriatric Psychiatry', short: 'Geriatric psychiatry',
    summary: 'Mental disorders of late life: assessment (Table 25-3), dementia and reversible look-alikes (Table 25-4), depression and the Geriatric Depression Scale (Table 25-5), psychosis, anxiety, substance use, sleep, suicide, syncope (Table 25-6), hearing loss, elder abuse, bereavement, prescribing and psychotherapy, with updates on suicide data, Alzheimer criteria and treatments, and the Beers Criteria.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch25-3', number: '25.3', title: 'Psychiatric Emergencies', short: 'Psychiatric emergencies',
    summary: 'Emergency evaluation and triage, medical versus psychiatric causes, suicidal, violent and psychotic patients, rape, emergency medication, restraint and disposition, the common emergencies table, and emergencies in children, with post-publication updates on suicide screening and safety planning, agitation guidance, restraint rules and corrected doses.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch26', number: 26, title: 'Level of Care', short: 'Levels of care',
    summary: 'How to match a patient to inpatient, partial hospital, intensive outpatient, outpatient or residential care (Table 26-1), voluntary and involuntary admission, length of stay and discharge planning, with updates on the LOCUS tool and the Philippine Mental Health Act.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch27', number: 27, title: 'Ethics and Professionalism', short: 'Ethics and professionalism',
    summary: 'Professional codes, the four ethical principles, sexual and nonsexual boundary violations, confidentiality, managed care duties, impaired physicians, trainees, the Physician Charter (Table 27-1), common ethical questions (Table 27-2) and military psychiatry, with updates on Philippine law, child-abuse reporting, case publication and military confidentiality.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch28', number: 28, title: 'Forensic and Legal Issues', short: 'Forensic psychiatry',
    summary: 'Malpractice and the 4 Ds, negligent prescribing and split treatment, privilege and confidentiality, suicidal and violent patients (Tarasoff), admission procedures, rights to treatment and to refuse it, seclusion and restraint, informed consent, custody, capacity, competence to stand trial, the insanity standards and HIPAA, with corrections to case names and dates and notes on Philippine law.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch29-1', number: '29.1', title: 'Death, Dying, and Bereavement', short: 'Death and bereavement',
    summary: 'Defining death and brain death, the psychological autopsy, Kübler-Ross stages, how children and adults face death, normal and anticipatory grief, complicated grief and its types, grief versus depression and PTSD, bereavement across the life cycle and grief therapy, with the 2023 brain death guideline and prolonged grief disorder.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch29-2', number: '29.2', title: 'Palliative Care', short: 'Palliative care',
    summary: 'Anxiety, depression (Endicott criteria) and delirium in advanced disease, breaking bad news and informed consent, persistent vegetative state versus brain death, the Quinlan case, advance directives and DNR orders, family care and dying at home, pain and the opioid table, end-of-life symptoms, hospice, dying children and spiritual care, with current opioid, Medicare, POLST and Philippine law updates.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch29-3', number: '29.3', title: 'Euthanasia and Physician-Assisted Suicide', short: 'Euthanasia and assisted suicide',
    summary: 'Types of euthanasia, the arguments on each side, positions of professional bodies, Kevorkian, Oregon\'s law and data, the AMA\'s eight-step response to a request and the psychiatric view, with corrected dates and current law in the US, Canada, the UK and the Philippines.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch30', number: '30', title: 'Community Psychiatry', short: 'Community psychiatry',
    summary: 'Public health and prevention (levels and Institute of Medicine categories), access to care, public agencies and the workforce, evidence-based adult and child community programs, the psychiatrist in multidisciplinary teams, systems of care and assertive community treatment, and the chronic illness care model, with 988, NCMH 1553, collaborative care and Philippine Mental Health Act updates.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch31', number: '31', title: 'Global and Cultural Issues in Psychiatry', short: 'Global psychiatry',
    summary: 'Worldwide prevalence and burden, the treatment gap, mental health resources by WHO region, program development and its barriers, stigma, mental and physical illness, ethics and international declarations, and international organizations, with current WHO estimates and the Mental Health Atlas 2024.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch32-1', number: '32.1', title: 'Infant, Child, and Adolescent Development', short: 'Child and adolescent development',
    summary: 'Prenatal development and exposures, infant reflexes and milestones, language and Piaget, temperament, attachment and Mahler, the toddler, preschool and school years, family factors and divorce, and adolescence (stages, maturation, sexuality, substances, violence and exploitation), with 2022 milestone checklists, DSM-5 attachment disorders and Philippine child-protection law updates.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch32-2', number: '32.2', title: 'Adulthood', short: 'Adulthood',
    summary: 'Young and middle adulthood: developmental tasks, work, friendship, marriage (interracial and same-sex) and couples therapy, parenthood and adoption, midlife theories (Erikson, Vaillant, Colarusso and Nemiroff), the climacterium, midlife transition and crisis, the empty nest, divorce and custody, and adult maturity, with updates on US marriage law, Philippine divorce law and Tan-Andal v. Andal.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch32-3', number: '32.3', title: 'Old Age', short: 'Old age',
    summary: 'Late adulthood: developmental tasks, demographics and longevity, biologic changes of aging by system, life expectancy by sex and race, exercise and diet, theories of aging and personality, ageism, chronic conditions, transference and countertransference, retirement, sexuality and long-term care, with current US figures, Medicare coverage and Philippine senior-citizen law.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-1', number: '33.1', title: 'The Human Brain and Functional Neuroanatomy', short: 'Brain and neuroanatomy',
    summary: 'Chapter 33 opening: psychiatry and the human brain, endophenotypes, genes, environment and circuits, lessons from neurology; brain organization; somatosensory, visual, auditory, olfactory, taste and autonomic systems and their development; motor systems (basal ganglia, cerebellum, motor cortex); localization; language and aphasias; arousal, attention and memory; emotion, the limbic system, fear and aggression, frontal lobes; and neural development, with updates on DSM-5-TR and ICD-11, RDoC, gene counts, schizophrenia genetics, adult neurogenesis and corrections on localization and Huntington disease.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-2', number: '33.2', title: 'Neural Development and Neurogenesis', short: 'Neural development',
    summary: 'Neurulation and regional differentiation, proliferative zones, radial and tangential migration, developmental cell death, neural patterning of the spinal cord and forebrain, neuronal specification and miRNAs, extracellular growth factors (Table 33-1), migration and process outgrowth, the neurodevelopmental basis of schizophrenia and autism, and adult neurogenesis, with updates on folic acid, schizophrenia candidate genes, DSM-5 autism, current autism prevalence, early brain overgrowth and the adult neurogenesis debate.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-3', number: '33.3', title: 'Neurochemistry I: Monoamines and Amino Acid Transmitters', short: 'Monoamines and amino acids',
    summary: 'Serotonin, dopamine, norepinephrine, histamine and acetylcholine systems; synthesis, storage, degradation and transporters; monoamine receptor subtypes (Table 33-2); glutamate, GABA and glycine with their receptors, plasticity and excitotoxicity; and amino acid transmitters in schizophrenia, anxiety, depression and alcoholism, with updates on memantine, esketamine, D-cycloserine, xanomeline-trospium and pitolisant.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-4', number: '33.4', title: 'Neurochemistry II: Neuropeptides and Novel Transmitters', short: 'Neuropeptides and novel transmitters',
    summary: 'Neuropeptide biology (Tables 33-3 and 33-4), TRH, CRF and urocortins, oxytocin, vasopressin and neurotensin; nitric oxide and carbon monoxide; the endocannabinoid system (Table 33-5); eicosanoids and neurosteroids, with updates on CRF1 and NK1 antagonist trials, rimonabant, cannabidiol and the neurosteroid drugs for postpartum depression.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-5', number: '33.5', title: 'Psychoneuroendocrinology', short: 'Psychoneuroendocrinology',
    summary: 'Hormone secretion and classes (Tables 33-6 and 33-7), developmental effects and endocrine assessment; the adrenal stress axis in depression, Cushing syndrome and Addison disease; gonadal steroids, testosterone and DHEA; estrogen, premenstrual dysphoric disorder and menopause; thyroid, growth hormone, prolactin, melatonin, oxytocin and insulin, with updates on estrogen and dementia, testosterone for women, the dexamethasone suppression test and intranasal insulin.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-6', number: '33.6', title: 'Immune System and Central Nervous System Interactions', short: 'Immune system and the CNS',
    summary: 'What the immune system does, conditioned immunosuppression, stress and immunity, and cytokine-driven sickness behavior; immune findings in depression, bipolar disorder, schizophrenia, autism, Alzheimer disease, HIV infection, multiple sclerosis and related disorders; and how antidepressants and psychosocial interventions affect immunity, with updates on anti-inflammatory trials, complement C4, vaccines and autism, and ME/CFS.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-7', number: '33.7', title: 'Neurogenetics I: Methods', short: 'Neurogenetics methods',
    summary: 'Family, twin and adoption studies; recombination, linkage, LOD scores and linkage disequilibrium; SSLP, SNP and CNV markers; pedigree, sib-pair and association mapping and genome-wide significance; categorical and continuous phenotypes, endophenotypes and animal models, with a correction on the r2 and D-prime measures of linkage disequilibrium and the genome-wide significance threshold used today.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-8', number: '33.8', title: 'Neurogenetics II: Specific Disorders', short: 'Neurogenetics of disorders',
    summary: 'The genetics of Alzheimer disease (APP, presenilins, APOE e4, GAB2), autism (heritability, chromosomal aberrations, CNVs, de novo mutations and synaptic, migration and excitatory/inhibitory pathways), bipolar disorder (early linkage reports, genome screens, chromosome 18, study power) and schizophrenia (candidate genes, mouse models), with updates from the large genome-wide and sequencing studies of 2019 to 2025.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-9', number: '33.9', title: 'Applied Electrophysiology', short: 'Applied electrophysiology',
    summary: 'Recording the EEG: the 10-20 system and activation procedures; the four waking waveforms and the sleep EEG; warning signs of a hidden medical cause (Table 33-8); common EEG abnormalities; EEG effects of medications and drugs; EEG changes in medical and psychiatric disorders; quantitative EEG and evoked potentials, with updates on QEEG for diagnosis and on clozapine and the EEG.',
    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']
  },
  { id: 'ch33-10', number: '33.10', title: 'Chronobiology', short: 'Chronobiology',
    summary: 'Circadian rhythms and the suprachiasmatic nucleus; light and entrainment; how the clock and sleep pressure regulate sleep; advanced and delayed sleep phase disorders and their genetics; seasonality and melatonin; seasonality in humans; aging and the clock; circadian rhythms and drug treatment, with updates on the 2017 Nobel Prize and current names and genetics of the phase disorders.',
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
  'data/tools/scales.js',
  'data/tools/calcs.js'
];
