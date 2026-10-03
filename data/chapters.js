/*
 * Chapter registry.
 * To add a chapter: create data/chNN/ with the same six files used by ch05,
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
  }
];

/* Shared data loaded with the chapters: glossary and diagnostic helpers. */
KS.extraFiles = [
  'data/glossary/g1.js',
  'data/glossary/g2.js',
  'data/glossary/g3.js',
  'data/glossary/g4.js',
  'data/glossary/g5-chapter-terms.js',
  'data/helpers.js'
];
