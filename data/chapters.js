/*
 * Chapter registry.
 * To add a chapter: create data/chNN/ with the same six files used by the other chapters,
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
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations']
  },
  {
    id: 'ch02',
    number: 2,
    title: 'Neurodevelopmental Disorders and Other Childhood Disorders',
    short: 'Childhood disorders',
    summary: 'Intellectual disability, communication disorders, autism, ADHD, learning and motor disorders, and the childhood forms of trauma, mood, disruptive, anxiety, OCD, psychotic and substance use disorders: recognition, differential and evidence-based treatment.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations']
  },
  {
    id: 'ch05',
    number: 5,
    title: 'Schizophrenia Spectrum and Other Psychotic Disorders',
    short: 'Schizophrenia spectrum',
    summary: 'Schizophrenia, schizoaffective, schizophreniform, brief psychotic and delusional disorders: how they present, how to tell them apart, and how to treat them.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations']
  },
  {
    id: 'ch06',
    number: 6,
    title: 'Bipolar Disorders',
    short: 'Bipolar disorders',
    summary: 'Bipolar I, bipolar II and cyclothymia: recognizing mania and bipolar depression, the specifiers, the differential, and acute and maintenance treatment.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations']
  },
  {
    id: 'ch07',
    number: 7,
    title: 'Depressive Disorders',
    short: 'Depressive disorders',
    summary: 'Major depressive disorder, dysthymia and the briefer forms: recognizing depression, the specifiers and a wide differential, and choosing, dosing and changing treatment.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations']
  },
  {
    id: 'ch08',
    number: 8,
    title: 'Anxiety Disorders',
    short: 'Anxiety disorders',
    summary: 'Panic disorder, agoraphobia, specific phobia, social anxiety disorder and generalized anxiety disorder: what each fears, how to tell them apart, and evidence-based drug and psychological treatment.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations']
  },
  {
    id: 'ch09',
    number: 9,
    title: 'Obsessive-Compulsive and Related Disorders',
    short: 'Obsessive-compulsive and related',
    summary: 'OCD, body dysmorphic disorder, hoarding, hair pulling and skin picking: the symptom patterns, the role of insight, a wide differential, and high-dose SRIs, ERP and disorder-specific therapies.',
    files: ['guide', 'highyield', 'cards-diagnosis', 'cards-cases', 'cards-pharm', 'cards-foundations']
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
  'data/changelog.js'
];
