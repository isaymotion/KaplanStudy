/* Links for post-publication update sources.
 * Each entry: m = text to find in an update's `source` string (case-insensitive), then the link shown.
 * Add an entry when you cite a new source. DailyMed links search the current FDA-posted label. */
(function () {
  var DM = function (q) { return 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=' + encodeURIComponent(q); };
  KS.sourceLinks = [
    { m: 'Vanda Pharmaceuticals, April 2024', label: 'Psychiatric Times: FDA approves Bysanti (Feb 2026)', url: 'https://www.psychiatrictimes.com/view/fda-approves-bysanti-for-treatment-of-bipolar-1-disorder-and-schizophrenia' },
    { m: 'Rexulti (April 2026)', label: 'Label: brexpiprazole (DailyMed)', url: DM('brexpiprazole') },
    { m: 'Rexulti (April 2026)', label: 'Label: cariprazine (DailyMed)', url: DM('cariprazine') },
    { m: 'APA schizophrenia guideline', label: 'APA schizophrenia guideline, 3rd ed. (2020)', url: 'https://psychiatryonline.org/doi/10.5555/appi.books.9780890424841.Schizophrenia00pre' },
    { m: 'APA Practice Guideline for the Treatment of Patients With Schizophrenia', label: 'APA schizophrenia guideline, 3rd ed. (2020)', url: 'https://psychiatryonline.org/doi/10.5555/appi.books.9780890424841.Schizophrenia00pre' },
    { m: 'Invega Hafyera', label: 'Janssen: Invega Hafyera approval (2021)', url: 'https://www.jnj.com/media-center/press-releases/janssen-announces-u-s-fda-approval-of-invega-hafyera-6-month-paliperidone-palmitate-first-and-only-twice-yearly-treatment-for-adults-with-schizophrenia' },
    { m: 'Invega Trinza', label: 'Label: paliperidone palmitate (DailyMed)', url: DM('paliperidone palmitate') },
    { m: 'Uzedy', label: 'Label: Uzedy risperidone (DailyMed)', url: DM('Uzedy') },
    { m: 'Nuplazid', label: 'Label: pimavanserin (DailyMed)', url: DM('pimavanserin') },
    { m: 'MedinCell and Teva', label: 'Teva: olanzapine LAI (TEV-749) NDA accepted, BioSpace', url: 'https://www.biospace.com/press-releases/u-s-food-and-drug-administration-fda-accepts-tevas-new-drug-application-nda-for-olanzapine-extended-release-injectable-suspension-tev-749-for-the-once-monthly-treatment-of-schizophrenia-in-adults' },
    { m: 'Latuda prescribing', label: 'Label: lurasidone (DailyMed)', url: DM('lurasidone') },
    { m: 'Ingrezza and Austedo', label: 'Label: valbenazine (DailyMed)', url: DM('valbenazine') },
    { m: 'Ingrezza and Austedo', label: 'Label: deutetrabenazine (DailyMed)', url: DM('deutetrabenazine') },
    { m: 'FDA, Information on clozapine', label: 'FDA: clozapine REMS removed (2025)', url: 'https://www.fda.gov/drugs/drug-safety-communications/fda-removes-risk-evaluation-and-mitigation-strategy-rems-program-antipsychotic-drug-clozapine' },
    { m: 'Clozaril prescribing', label: 'Label: clozapine (DailyMed)', url: DM('clozapine') },
    { m: 'FDA news release, September 2024', label: 'Pharmacy Times: FDA approves Cobenfy (Sept 2024)', url: 'https://pharmacytimes.com/view/fda-approves-cobenfy-previously-karxt-for-treatment-of-schizophrenia' },
    { m: 'Cobenfy prescribing', label: 'Label: Cobenfy (DailyMed)', url: DM('Cobenfy') },
    { m: 'Risperdal and Lybalvi', label: 'Label: Lybalvi (DailyMed)', url: DM('olanzapine and samidorphan') },
    { m: 'Risperdal and Lybalvi', label: 'Label: risperidone (DailyMed)', url: DM('risperidone') },
    { m: 'Alkermes announcement, June 2021', label: 'Alkermes: Lybalvi approval (2021)', url: 'https://www.pharmalive.com/alkermes-schizophrenia-drug-gets-u-s-fda-approval/' },
    { m: 'European Medicines Agency', label: 'EMA: valproate and children of treated fathers (Jan 2024)', url: 'https://www.ema.europa.eu/en/documents/dhpc/direct-healthcare-professional-communication-dhpc-valproate-containing-medicines-new-measures-regarding-potential-risk-neurodevelopmental-disorders-children-fathers-treated-valproate-3-months-prior_en.pdf' },
    { m: 'Dantrium', label: 'Label: dantrolene (DailyMed)', url: DM('dantrolene') },
    { m: 'Caplyta prescribing', label: 'Label: Caplyta (DailyMed)', url: DM('Caplyta') },
    { m: 'Johnson & Johnson announcement, November 2025', label: 'J&J: Caplyta approved for adjunctive MDD (Nov 2025)', url: 'https://www.jnj.com/media-center/press-releases/fda-approval-of-caplyta-lumateperone-has-the-potential-to-reset-treatment-expectations-offering-hope-for-remission-in-adults-with-major-depressive-disorder' },
    { m: 'CPIC guideline', label: 'CPIC SSRI guideline (PubMed)', url: 'https://pubmed.ncbi.nlm.nih.gov/37032427/' },
    { m: 'Abilify Maintena', label: 'Label: aripiprazole (DailyMed)', url: DM('aripiprazole') },
    { m: 'Delirium, 2nd edition', label: 'APA delirium guideline (2025)', url: 'https://www.psychiatry.org/psychiatrists/practice/clinical-practice-guidelines/delirium' }
  ];
})();
