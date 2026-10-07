/*
 * What's new. Add a new entry at the top for every release, with the next id number.
 * Residents see entries with a higher id than their last visit marked "New", and chapters
 * named in an item's `ch` field show an "Updated" tag on the home page.
 *
 * Item types: "chapter", "feature", "correction", "update".
 * Optional: `ch` (chapter id), `href` (link into the app, e.g. "#/c/ch05/guide/s-brief"),
 * `link` (link text, defaults to "Open").
 *
 * Example correction:
 *   { type: "correction", ch: "ch05", text: "Fixed the duration of brief psychotic disorder in the timeline.",
 *     href: "#/c/ch05/guide/s-map", link: "See the corrected section" }
 */
KS.changelog = [
  {
    id: 9,
    date: "2026-10-07",
    title: "Chapter 2: Neurodevelopmental Disorders and Other Childhood Disorders",
    items: [
      { type: "chapter", ch: "ch02", text: "**Chapter 2: Neurodevelopmental Disorders and Other Childhood Disorders**: intellectual disability, communication disorders, autism, ADHD, learning and motor disorders, early feeding disorders, attachment and trauma, depression and suicide, bipolar disorder and DMDD, disruptive behavior, anxiety and selective mutism, OCD, early-onset schizophrenia and adolescent substance use. Study guide, high-yield list, 584 flashcards and a printable handout.", href: "#/c/ch02/guide", link: "Start Chapter 2" },
      { type: "feature", ch: "ch02", text: "**Which developmental disorder?** helper: start from the main concern about a child (global delay, speech and language, social relating, learning, coordination, movements or attention) and reach one of 27 outcomes.", href: "#/helpers/development", link: "Try it" },
      { type: "update", text: "24 Chapter 2 terms, such as theory of mind, premonitory urge, behavioral inhibition and Werther syndrome, added to the glossary.", href: "#/glossary", link: "Open the glossary" }
    ]
  },
  {
    id: 8,
    date: "2026-10-07",
    title: "Chapter 1: Examination and Diagnosis of the Psychiatric Patient",
    items: [
      { type: "chapter", ch: "ch01", text: "**Chapter 1: Examination and Diagnosis of the Psychiatric Patient**: the interview, history and mental status examination, the medical workup and laboratory tests, neuroimaging, rating scales and psychological testing, and the child, adolescent and geriatric evaluation. Study guide, high-yield list, 404 flashcards and a printable handout.", href: "#/c/ch01/guide", link: "Start Chapter 1" },
      { type: "feature", ch: "ch01", text: "**Which medical workup?** helper: pick the situation (acute confusion, cognitive decline, new psychosis, substances, drug monitoring, eating disorder or overdose) to see the tests the chapter points to, across 28 outcomes.", href: "#/helpers/workup", link: "Try it" },
      { type: "feature", text: "**Back and forward buttons** in the top bar (or Alt+Left and Alt+Right) step through the pages you have visited." },
      { type: "update", text: "Printable handouts for long chapters can now run to three or four pages; the page count is chosen automatically to keep the type readable.", href: "#/c/ch01/handout", link: "Open the Chapter 1 handout" },
      { type: "update", text: "36 Chapter 1 terms, such as transference, reliability, witzelsucht and neuroleptic malignant syndrome, added to the glossary.", href: "#/glossary", link: "Open the glossary" }
    ]
  },
  {
    id: 7,
    date: "2026-10-03",
    title: "Chapter 9: Obsessive-Compulsive and Related Disorders",
    items: [
      { type: "chapter", ch: "ch09", text: "**Chapter 9: Obsessive-Compulsive and Related Disorders**: study guide, high-yield list, 189 flashcards and a printable handout.", href: "#/c/ch09/guide", link: "Start Chapter 9" },
      { type: "feature", ch: "ch09", text: "**Which obsessive-compulsive or related disorder?** diagnostic helper: medical causes and look-alikes first, then the focus of the thoughts or behavior, ending at one of 22 outcomes with insight and other specifiers.", href: "#/helpers/ocd", link: "Try it" },
      { type: "update", text: "Nine Chapter 9 terms, such as exposure and response prevention, PANDAS and trichophagy, added to the glossary.", href: "#/glossary", link: "Open the glossary" }
    ]
  },
  {
    id: 6,
    date: "2026-10-03",
    title: "Chapter 8: Anxiety Disorders",
    items: [
      { type: "chapter", ch: "ch08", text: "**Chapter 8: Anxiety Disorders**: study guide, high-yield list, 195 flashcards and a printable handout.", href: "#/c/ch08/guide", link: "Start Chapter 8" },
      { type: "feature", ch: "ch08", text: "**Which anxiety disorder?** diagnostic helper: medical, cultural and psychiatric explanations first, then what the person fears and for how long, ending at one of 13 outcomes.", href: "#/helpers/anxiety", link: "Try it" },
      { type: "update", text: "Eight Chapter 8 terms, such as anticipatory anxiety and systematic desensitization, added to the glossary.", href: "#/glossary", link: "Open the glossary" }
    ]
  },
  {
    id: 5,
    date: "2026-10-03",
    title: "Chapter 7: Depressive Disorders",
    items: [
      { type: "chapter", ch: "ch07", text: "**Chapter 7: Depressive Disorders**: study guide, high-yield list, 214 flashcards and a printable handout.", href: "#/c/ch07/guide", link: "Start Chapter 7" },
      { type: "feature", ch: "ch07", text: "**Which depressive disorder?** diagnostic helper: cause, bipolarity, bereavement, chronicity, episode severity and specifiers, ending at one of 18 outcomes.", href: "#/helpers/depression", link: "Try it" },
      { type: "update", text: "Ten Chapter 7 terms, such as double depression and paradoxical suicide, added to the glossary.", href: "#/glossary", link: "Open the glossary" }
    ]
  },
  {
    id: 4,
    date: "2026-10-03",
    title: "Tools for educators",
    items: [
      { type: "feature", text: "**Printable handouts**: a one-page high-yield sheet for each chapter, sized automatically to fit A4 or Letter, as an answer key or a fill-in worksheet.", href: "#/c/ch06/handout", link: "Open the Chapter 6 handout" },
      { type: "feature", text: "**Teaching mode**: present board-style questions or the chapter cases full screen for group discussion, with the answer revealed on click.", href: "#/teach", link: "Open teaching mode" },
      { type: "feature", text: "**What’s new**: this page, listing new chapters, features and corrections." }
    ]
  },
  {
    id: 3,
    date: "2026-10-03",
    title: "Diagnostic helper for bipolar disorders",
    items: [
      { type: "feature", ch: "ch06", text: "**Which bipolar disorder?** walks through cause, psychosis, the most severe elevated period, depressive episodes and course to bipolar I, bipolar II, cyclothymia or the main look-alikes.", href: "#/helpers/bipolar", link: "Try it" }
    ]
  },
  {
    id: 2,
    date: "2026-10-02",
    title: "Chapter 6 and new ways to study",
    items: [
      { type: "chapter", ch: "ch06", text: "**Chapter 6: Bipolar Disorders**: study guide, high-yield list and 208 flashcards.", href: "#/c/ch06/guide", link: "Start Chapter 6" },
      { type: "feature", text: "**Spaced repetition** replaces the Got it and Still learning marks. Existing marks were carried over. A daily review queue now pulls due cards from every chapter.", href: "#/review", link: "Open daily review" },
      { type: "feature", text: "**Board-style exam**: timed clinical cases across chapters, scored by topic, with a review of what you missed.", href: "#/exam", link: "Take an exam" },
      { type: "feature", text: "**Mistakes**: every case answered wrong is collected automatically for another try.", href: "#/mistakes", link: "Open mistakes" },
      { type: "feature", text: "**Glossary** of signs and symptoms from the book, with tap-to-define for dotted terms throughout the app.", href: "#/glossary", link: "Open the glossary" },
      { type: "update", ch: "ch05", text: "**Which psychotic disorder?** diagnostic helper added for Chapter 5, and glossary terms in the Chapter 5 guide can now be tapped for definitions.", href: "#/helpers/psychosis", link: "Try the helper" }
    ]
  },
  {
    id: 1,
    date: "2026-10-02",
    title: "The app launches with Chapter 5",
    items: [
      { type: "chapter", ch: "ch05", text: "**Chapter 5: Schizophrenia Spectrum and Other Psychotic Disorders**: study guide, high-yield list and 267 flashcards.", href: "#/c/ch05/guide", link: "Open Chapter 5" }
    ]
  }
];
