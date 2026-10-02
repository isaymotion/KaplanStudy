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
  }
];
