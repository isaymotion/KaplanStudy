# Kaplan & Sadock Study Companion

Chapter-by-chapter study app for psychiatry residents, built from *Kaplan & Sadock's Synopsis of Psychiatry*, 12th edition.

Each chapter has:

- **Study guide**: the full chapter reorganized for learning, with comparison tables, duration timelines, chapter case summaries, clinical pearls and exam tips.
- **High yield**: the facts most likely to appear on exams and boards. Switch on *Hide key facts* to turn every bold fact into a blank for self-testing.
- **Flashcards** in four decks: **Diagnosis**, **Clinical cases** (single-best-answer vignettes with explanations), **Pharmacology**, and **Foundations** (epidemiology, neurobiology, etiology and psychosocial care). Rate each card *Again*, *Hard*, *Good* or *Easy* and a spaced-repetition schedule brings it back just before you are likely to forget it.
- **Learning layer** (`data/chNN/learning.js`):
  - **Check yourself**: two or three retrieval questions at the end of every study-guide section; answer in your head, then open each to check.
  - **Pre-test and post-test**: the same set of the chapter's clinical cases (8 by default) before and after reading, untimed, with the change in score shown on the study guide. Pre-test answers do not go to Mistakes.
  - **Wrong-answer explanations**: after answering a clinical case (in a deck, review, mistakes or exam review, and in teaching-mode notes), each wrong choice shows why it is wrong.
  - **Visual summaries**: heatmaps and chronologies placed in the relevant guide sections.
- **Search** across every chapter, guide, high-yield list, flashcard and glossary term. Press `/` anywhere to jump to the search box.

Across all chapters:

- **Daily review**: one queue of every card due today from every chapter, followed by new cards up to a daily limit (10, 20, 40 or 80). The home page shows what is due, per chapter.
- **Board-style exam**: a timed (90 seconds per question) or untimed exam of clinical cases drawn at random from the chapters you pick, with shuffled answer choices, flags and a question navigator. Results show the score by topic (weakest first) and by chapter, with a *Review what I missed* walkthrough. The last 20 exams are kept.
- **Board domains**: every clinical case is tagged with an ABPN Psychiatry certification content outline (2025) Dimension 2 competency (neuroscience, behavioral and social sciences, clinical aspects, diagnostic procedures, treatment, communication, professionalism, ethics and law, practice-based learning, systems-based practice). Exam mode filters by domain and the results page scores by domain. Tags are automatic from the question wording unless `learning.js` overrides them.
- **Look-alikes** (`#/compare`, in the top navigation, under *Study tools* in the menu and on the home page): side-by-side comparisons of conditions that are easy to confuse, across chapters, with how to tell them apart and links to the guide sections. Filter by chapter (`#/compare/ch/ch19`) or search. Each study guide lists its look-alikes under the objectives, and linked sections show a *Look-alikes* chip.
  - **Look-alikes reviewer (PDF)**: landscape pages, one comparison per page with a contents page, as an **answer key** or a **blank worksheet** (features and headings kept, cells and *how to tell them apart* lines left empty), on A4 or Letter. Download one comparison, the ones shown by the current filter, or all of them; the *All high-yield (PDF)* page has the same downloads by chapter.
- **Mistakes**: every clinical case answered wrong, in a deck, the daily review or an exam, is collected automatically. Answer it correctly to clear it.
- **Bookmarks**: tap the ribbon beside any study-guide section title to save it. Bookmarked sections are marked in the chapter contents and collected on the Bookmarks page (`#/bookmarks`) in book order, with a preview of each section.
- **Glossary**: the book's glossary of signs and symptoms (431 terms, definitions written in the app's own words) plus terms defined within the chapters. Glossary terms are underlined with a dotted line throughout the app; tap one to see its definition. This can be switched off on the glossary page.
- **Diagnostic helpers**: step-by-step decision aids that end with the likely diagnosis (or workup), the reasoning trail, chapter points and a link to the guide section.
  - *Which medical workup?* (Chapter 1): acute mental status change, cognitive decline, new-onset psychosis, substance or toxin exposure, drug monitoring and ECT, eating disorders and overdose. Reaches the laboratory tests, ECG, EEG and imaging the chapter points to, from the delirium and dementia workups to NMS, Wilson disease, porphyria, lupus, alcohol, injection drug use, lithium, valproate, carbamazepine, clozapine, QTc and tricyclic monitoring.
  - *Which developmental disorder?* (Chapter 2): global delay, speech and language (after hearing is checked), social relating and repetitive behavior, specific learning problems, coordination, tics and stereotypies, and attention. Reaches intellectual disability, the language, speech sound and fluency disorders, selective mutism, autism spectrum disorder, social (pragmatic) communication disorder, attachment disorders, the learning disorder specifiers, developmental coordination disorder, the tic disorders, stereotypic movement disorder or ADHD, and flags regression, sensory loss, deprivation, absence seizures and mood episodes.
  - *Which cognitive disorder?* (Chapter 3): acute and fluctuating, gradual, memory-only, rapidly progressive or mild decline, and depression with cognitive complaints. Reaches delirium (anticholinergic, withdrawal, beclouded dementia, seizure-related), the Alzheimer, frontotemporal, Lewy body, vascular, Parkinson, Huntington, HIV and trauma-related neurocognitive disorders, reversible causes (subdural hematoma, hypothyroidism, B12 deficiency, neurosyphilis), Korsakoff syndrome, transient global amnesia and other amnestic syndromes, prion disease, encephalitis, mild cognitive impairment, normal aging or depression-related cognitive dysfunction.
  - *Which substance syndrome?* (Chapter 4): intoxication or overdose, withdrawal (with alcohol withdrawal staged from tremor to delirium tremens and Wernicke encephalopathy), possibly substance-induced depression, anxiety or psychosis, flashbacks and gambling. Reaches opioid overdose, alcohol, sedative, stimulant, cannabis, hallucinogen, PCP, inhalant, caffeine and anabolic steroid syndromes, each withdrawal syndrome, alcohol-induced mood and anxiety disorders, stimulant psychosis, an independent comorbid disorder, hallucinogen-persisting perception disorder or gambling disorder.
  - *Which psychotic disorder?* (Chapter 5): cause, culture, shared delusions, mood involvement, symptoms and duration.
  - *Which bipolar disorder?* (Chapter 6): medical or substance cause, antidepressant-associated episodes, psychosis outside mood episodes, the most severe elevated period, distinct episodes versus personality lability, major depressive episodes, a 2-year subthreshold course, and rapid cycling. Reaches bipolar I, bipolar II (each with or without rapid cycling), cyclothymia, or the main look-alikes.
  - *Which depressive disorder?* (Chapter 7): medical or substance cause, history of mania or hypomania, predictors of bipolarity, bereavement, a chronic versus episodic course, the persistent depressive disorder course specifiers, episode severity and duration, psychotic features and the main specifiers. Reaches major depressive disorder with its specifiers, persistent depressive disorder, double depression, recurrent brief and minor depression, normal grief, or a medical or bipolar cause.
  - *Which anxiety disorder?* (Chapter 8): medical or substance cause, culturally specific syndromes, anxiety within another psychiatric disorder, then what the person fears (the attacks themselves, places without escape, a specific object or situation, scrutiny, or everyday matters) and for how long. Reaches panic disorder with or without agoraphobia, isolated panic attacks, agoraphobia, specific phobia, social anxiety disorder (including performance only), generalized anxiety disorder, subthreshold or normal anxiety, or a medical, cultural or psychiatric explanation.
  - *Which obsessive-compulsive or related disorder?* (Chapter 9): medical or substance cause; mood, psychotic, eating, gender and personality look-alikes; then the focus (intrusive thoughts and rituals, appearance, possessions, hair, skin, odor) with insight, tic, muscle dysmorphia and excessive acquisition specifiers. Reaches OCD, BDD, hoarding disorder, trichotillomania, excoriation disorder, olfactory reference syndrome, OCD-driven hoarding or picking, factitious dermatitis, collecting or normal behavior.
  - *Which trauma or stressor disorder?* (Chapter 10): the kind of stressor (qualifying trauma, media-only exposure, everyday stressor or bereavement), time since the trauma and symptom counts. Reaches PTSD (with dissociative symptoms or delayed expression), acute stress disorder, the adjustment disorder subtypes, subthreshold reactions, medical or substance contributors, panic or generalized anxiety, another specific disorder, bereavement or an expectable reaction.
  - *Which dissociative disorder?* (Chapter 11): the leading complaint (memory gaps, depersonalization or derealization, separate identities, trance, approximate answers or coercive persuasion), then medical, substance and psychiatric look-alikes. Reaches the dissociative amnesia types and fugue, depersonalization/derealization disorder, DID, other specified dissociative disorder, trance and possession, Ganser syndrome, feigned presentations and normal cultural or childhood experiences.
  - *Which somatic symptom or related disorder?* (Chapter 12): deliberate production (malingering, factitious disorder imposed on self or on another), psychological effects on a medical illness, then what dominates the picture. Reaches somatic symptom disorder by severity and with predominant pain, illness anxiety disorder by type, acute or persistent conversion disorder, psychological factors affecting other medical conditions, brief forms, and look-alikes such as adjustment disorder, panic, OCD, body dysmorphic disorder and psychosis.
  - *Which feeding or eating disorder?* (Chapter 13): the main eating problem (restriction, binges, purging after small amounts, night eating, or weight loss without fear of fatness), then fear of weight gain, compensation, weight, neurologic features and frequency. Reaches anorexia nervosa (restricting or binge-eating/purging), bulimia nervosa, binge-eating disorder, purging disorder, night-eating syndrome, subthreshold disorders, sleep-related eating disorder, Kleine–Levin and Klüver–Bucy syndromes, depression, psychosis, the hyperactive vagus syndrome, or a medical workup.
  - *Which elimination disorder?* (Chapter 14): feces or urine, age, frequency and duration, medical causes, then encopresis with or without constipation and overflow, enuresis (nocturnal, diurnal or both), or normal development, a transient reaction or a medical cause.
  - *Which medication-induced movement disorder?* (Chapter 21.0): fever and rigidity, sustained spasm, restlessness, stiffness, late involuntary movements, tremor or night-time leg symptoms. Reaches neuroleptic malignant syndrome and other hyperthermic syndromes, acute dystonia, akathisia, parkinsonism, rabbit syndrome, tardive dyskinesia and other tardive syndromes, postural tremor, restless legs or nocturnal myoclonus.
  - *Choosing an antipsychotic* (Chapter 21.1): the clinical situation (treatment resistance, Parkinson disease, acute agitation, poor adherence, dementia, intoxication or a first choice), then the side effect that matters most, to a short list of drugs.
  - *Choosing an antidepressant* (Chapter 21.2): emergencies (serotonin syndrome, MAOI hypertensive crisis, discontinuation), pregnancy, postpartum depression and treatment resistance, or the symptom or risk that matters most, to a short list of drugs.
  - *Choosing a mood stabilizer* (Chapter 21.3): warning signs (lithium toxicity, rash, blood dyscrasia, valproate liver or pancreas toxicity), pregnancy, the type of manic episode, or the goal of long-term prevention, to a short list of drugs.
  - *Choosing an anxiolytic* (Chapter 21.4): suspected sedative overdose (and when flumazenil helps or harms), withdrawal, stopping a long-term benzodiazepine, or a target symptom (panic, generalized anxiety, performance anxiety, catatonia, akathisia, alcohol withdrawal, older adults, insomnia).
  - *Choosing a sleep medicine* (Chapter 21.5): complex sleep behaviors, sleep-onset or maintenance insomnia, middle-of-the-night waking, circadian problems or trauma nightmares, with risk factors such as substance misuse, age and liver disease.
  - *Choosing a medicine for a substance use disorder* (Chapter 21.7): overdose reversal, opioid use disorder (pregnancy, methadone, buprenorphine induction timing and fentanyl, antagonists, long-acting injections), withdrawal management and rapid detoxification, and alcohol use disorder (withdrawal first, opioid, renal and liver contraindications, first- and second-line drugs).
  - *Choosing a cognitive enhancer* (Chapter 21.8): workup first, mild cognitive impairment (exercise, anti-amyloid eligibility), mild to moderate Alzheimer disease (donepezil, rivastigmine, patches, cardiac cautions), moderate to severe disease (memantine, donepezil), Parkinson disease dementia, and healthy people seeking enhancement.
  - *Choosing a drug for a sexual problem* (Chapter 21.9): priapism emergencies, erectile dysfunction (nitrates, poppers and riociguat, cardiac review, short- versus long-acting PDE-5 inhibitors, low starting doses), antidepressant-related dysfunction, and low sexual desire in women (flibanserin, bremelanotide).
  - *Choosing an ADHD or wakefulness medicine* (Chapter 21.6): starting ADHD treatment, switching after nonresponse, substance use, tics, psychosis risk, narcolepsy, shift work and sleep apnea sleepiness, depression and apathy, and common stimulant side effects.
  - *Managing an agitated patient in the emergency department* (Chapter 25.3): imminent violence and restraint, then the likely cause (delirium or medical illness, alcohol intoxication or withdrawal, stimulants, anticholinergic drugs, psychosis or mania, or unknown) and whether the patient will take oral medication, with Project BETA guidance marked as post-publication.
  - *Which personality disorder?* (Chapter 19): enduring pattern versus medical change or an episode of another disorder, then cluster and core style, with the age rule for antisocial personality disorder and the OCPD versus OCD distinction.

- **Text size and read aloud** (the *Aa* button in the top bar): four text sizes, saved per device, and a read-aloud speed. The speaker beside any study-guide section reads from there to the end of the chapter (and *Listen* on a high-yield page reads the list), highlighting each paragraph, with pause, back, skip and stop. It uses the device's built-in voice and works offline.
- **Back and forward buttons** in the top bar (also Alt+Left and Alt+Right) step through the pages visited in this session.

Progress (review schedule, mistakes, bookmarks, exam history, teaching sessions, settings) is saved in the browser on each device. **Back up progress** (`#/progress`, linked in the footer) exports it to a file and imports it on another device: *Merge* keeps the more advanced record of each card and combines mistakes, bookmarks, exams and sessions, *Replace* swaps everything, and *Undo last import* restores the device to just before. The home page reminds people with 30 or more reviewed cards to back up once a month.

For educators:

- **Printable handouts** (`#/c/ch06/handout`, or the *Printable handout* button on any high-yield page): the high-yield list laid out as a print-ready sheet for A4 or Letter, as an answer key or as a fill-in worksheet with every key fact blanked. The type size is fitted automatically. Topics can be unticked to focus a session. If a chapter is too long for one page at a readable size, the page moves to two pages (front and back), or up to four pages for the longest chapters, and printing is blocked whenever content would be cut off. Use *Download PDF*, which builds an exact-size PDF inside the app (`js/pdf.js`, standard PDF fonts, selectable text, no browser margins); *Print instead* uses the browser's print dialog.
- **All high-yield (PDF)** (`#/all-highyield`, under *For educators* on the home page and in the menu, or the *High-yield PDF* button on any high-yield page): every chapter's high-yield list compiled into one two-column PDF, each chapter starting on a new page, with running headers and page numbers (`KS.allHighYieldPdf` in `js/pdf.js`). Build one PDF of all chapters, or download any single chapter on its own. Unlike the printable handout, this one flows across as many pages as a chapter needs at a comfortable, fixed type size rather than shrinking to fit one sheet.
  - The same page has a **Drug class PDFs** section (also linked from the Drugs page): every drug's mechanism, dosing, side effects to watch for and monitoring, grouped by class, in the same two-column format (`KS.drugClassPdf`, sharing the layout engine above). Build one class's PDF, or all 6 classes combined into one reference, each class starting a new page.
- **Teaching mode** (`#/teach`, or *Present in teaching mode* on any flashcard deck, or *Present as fill-in-the-blank* on a high-yield page): full-screen presentation for group discussion. Choose what to present: board-style questions, chapter cases, the Diagnosis, Pharmacology or Foundations flashcards (or all three mixed), or high-yield facts as fill-in-the-blank slides.
  - **Recall mode** (flashcards and high-yield): ask the question, discuss, reveal the answer, then count the room as *Knew it*, *Partly* or *Missed it* (click, or A, B, C; type 5 then A to add five). High-yield facts show their bold key terms as blanks until the reveal. The summary shows the percent who knew it by topic and chapter, and the items to revisit.
  - **Group tally**: count the room's votes for each answer choice by clicking it or pressing A to E (Shift+letter or the minus button removes one; type a number first, such as 12 then B, to add many at once; U undoes). Counts can stay hidden until the reveal so late voters are not swayed. Reveal shows each choice's share, the percent who chose the correct answer, and the most chosen wrong answer.
  - **Facilitator notes**: press N for a side panel, or P (or *Presenter window*) for a separate window that shows live counts, +/- vote buttons, reveal and next/previous controls, and private discussion prompts, so nothing extra appears on the shared screen. Notes are built from each case (prompts by topic, the anchor explanation, a probe for each wrong choice with the most chosen one flagged). A case may carry its own `notes: { ask: [], watch: "", extend: [] }` in its data file, which is shown first.
  - **Session summary**: *End session* (or Finish on the last case) opens a summary with the overall score, score by topic (weakest first) and by chapter, and the questions under 60% with the room's vote spread and the explanation. *Present the ones to revisit* starts a new session from them; *Print or save as PDF* and *Copy as text* are included. The last 10 sessions are kept in the browser and listed on the setup page.
  - Mark the group's answer with a click or A to E, reveal with Space, move with the arrow keys, F toggles full screen, Esc closes. Teaching mode never affects review schedules or mistakes.
- **Shareable quizzes**: in Exam mode, choose chapters, board domains, the number of questions and timing, then *Share as a quiz link*. The link (and its QR code, drawn on the device, with a download button) gives everyone the same questions in the same order with the same answer order. Exam results also have *Share these questions*. Answers stay on each resident's device.
- **What's new** (`#/whats-new`, linked in the footer): new chapters, features and corrections. Residents see a notice on the home page and an *Updated* tag on affected chapters until they open the page.

**Chapter navigator**: each chapter page has previous and next buttons and a chapter menu beside *All chapters*. Switching keeps the current mode (study guide, high yield or the same flashcard deck), and the `[` and `]` keys step between chapters.

Also included: light and dark themes, keyboard shortcuts, offline support after the first visit, and installability as an app on phones and desktops.

## Chapters

| Chapter | Title | Guide sections | High-yield points | Flashcards |
|---|---|---|---|---|
| 1 | Examination and Diagnosis of the Psychiatric Patient | 46 | 249 | 404 |
| 2 | Neurodevelopmental Disorders and Other Childhood Disorders | 57 | 248 | 584 |
| 3 | Neurocognitive Disorders | 37 | 171 | 401 |
| 4 | Substance Use and Addictive Disorders | 53 | 198 | 393 |
| 5 | Schizophrenia Spectrum and Other Psychotic Disorders | 33 | 157 | 267 |
| 6 | Bipolar Disorders | 24 | 102 | 208 |
| 7 | Depressive Disorders | 32 | 123 | 214 |
| 8 | Anxiety Disorders | 24 | 92 | 195 |
| 9 | Obsessive-Compulsive and Related Disorders | 26 | 94 | 189 |
| 10 | Trauma- and Stressor-Related Disorders | 10 | 45 | 74 |
| 11 | Dissociative Disorders | 15 | 48 | 86 |
| 12 | Somatic Symptom and Related Disorders | 22 | 66 | 130 |
| 13 | Feeding and Eating Disorders | 22 | 105 | 147 |
| 14 | Elimination Disorders | 15 | 48 | 106 |
| 19 | Personality Disorders | 19 | 65 | 66 |
| 21.0 | Principles of Psychopharmacology | 23 | 87 | 106 |
| 21.1 | Antipsychotics | 20 | 92 | 101 (plus generated drug drills) |
| 21.2 | Antidepressants | 28 | 102 | 107 (plus generated drug drills) |
| 21.3 | Mood Stabilizers | 26 | 102 | 107 (plus generated drug drills) |
| 21.4 | Anxiolytics | 14 | 86 | 93 (plus generated drug drills) |
| 21.5 | Drugs Used to Treat Sleep Disorders | 8 | 38 | 48 (plus generated drug drills) |
| 21.6 | Stimulants | 8 | 58 | 58 (plus generated drug drills) |
| 21.7 | Drugs Used to Treat Substance Use Disorders | 24 | 72 | 84 (plus generated drug drills) |
| 21.8 | Drugs Used for Cognitive Enhancement | 17 | 43 | 64 (plus generated drug drills) |
| 21.9 | Drugs Used to Treat Sexual Disorders | 12 | 37 | 53 (plus generated drug drills) |
| 25.3 | Psychiatric Emergencies | 20 | 87 | 68 |

## Publish on GitHub Pages

1. Create a new repository on GitHub and upload everything in this folder (keep the folder structure, including the empty `.nojekyll` file).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

There is no build step and no dependencies. To preview locally, open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Folder structure

```
index.html              App shell
css/app.css             Styles (light and dark themes)
js/app.js               Router, study guide, high yield, flashcards and spaced repetition,
                        daily review, exam, mistakes, glossary, diagnostic helpers, search
data/chapters.js        Chapter registry and list of shared data files
data/glossary/          Glossary (g1–g4: book glossary; g5: chapter-defined terms and aliases)
data/helpers.js         Diagnostic helper decision trees
data/lookalikes.js      Look-alike comparison pages
data/changelog.js       What's new entries
data/ch01/ … data/ch09/ Chapter content
  guide.js              Study guide
  highyield.js          High-yield topics
  cards-diagnosis.js    Diagnosis deck
  cards-cases.js        Clinical case deck
  cards-pharm.js        Pharmacology deck
  cards-foundations.js  Foundations deck
  learning.js           Wrong-answer explanations, section checks, pre-test, board-domain overrides, visual summaries
js/qr.js                QR code encoder for shareable quizzes (loaded on demand)
icons/                  App icons (PNG sizes, maskable versions, favicon) and the home page image
manifest.webmanifest    Install metadata
tools/validate-learning.js  Checks every chapter's learning layer and reports coverage (Node)
sw.js                   Offline cache
```

## Adding a chapter

1. Create `data/chNN/` with the same seven files as `data/ch19/`, following the same data shapes. Every new chapter ships with a complete `learning.js`: a reason for every wrong choice of every clinical case, two or three checks for every guide section, a chosen pre-test and any visual summaries; add look-alike pages for the chapter's commonly confused conditions to `data/lookalikes.js`.
2. Add an entry to `KS.manifest` in `data/chapters.js` (id, number, title, short title, one-sentence summary, file list).
3. Change `VERSION` in `sw.js` so returning users get the new content.

Run `node tools/validate-learning.js --strict chNN` before publishing: it checks every explanation lines up with its choices, every section has checks and every look-alike link exists.

Search, the home page, daily review, exam mode and the chapter navigation pick up the new chapter automatically.

Add an entry to the top of `data/changelog.js` for every release, with the next `id` number. Give items a `ch` field to tag the chapter as updated, and an `href` to link to what changed. Use `type: "correction"` for corrections so residents can go straight to the corrected content.

To add glossary terms a chapter defines, append `[term, definition, "Ch NN"]` to `data/glossary/g5-chapter-terms.js`. To add a diagnostic helper, append a decision tree to `KS.helpers` in `data/helpers.js` (nodes with options that point to another node or to `r:<result>`); the helpers page lists it automatically.

### Content conventions

- `**bold**` and `*italic*` are supported in all text. In high-yield items, bold marks the fact that becomes a blank in self-test mode, so bold the answer, not the topic.
- Study guide block types: `p`, `h`, `list`, `defs`, `table`, `callout` (`pearl`, `exam`, `caution`), `case`, `timeline`, `steps`, `update`, `heatmap` (`cols`, `rows: [{ label, v: [0–3 per column] }]`, optional `legend`, `note`) and `chronology` (`events: [{ year, label, note }]`). Visual summaries normally go in `learning.js` as `visuals: [{ sec, at, block }]`.
- In `learning.js`, `whyNot[caseId]` is an array aligned with the case's `choices`, with `""` at the correct answer.
- Clinical case cards use `choices` and a zero-based `answer` index, plus `why`. Case cards feed exam mode and the mistakes pile, and their `tag` is the topic used in exam scoring.
- Card `id`s are the key for each card's review schedule, so keep them stable when editing content.

## Attribution

App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com

An independent study aid built from *Kaplan & Sadock's Synopsis of Psychiatry*, 12th edition. Not affiliated with or endorsed by the publisher. The underlying textbook is copyrighted, so consider who has access to the published site. Always confirm doses and prescribing details against current product labeling.

## Drugs section and post-publication updates

- `js/drugs.js` renders `#/drugs` (browse by class with indication and side-effect filters), `#/drugs/<id>` (drug page), `#/drugs/compare/<id,id,...>` (up to four, chosen by class and group), `#/drugs/drill/<scope>` (generated cards, same spaced-repetition store) and `#/updates` (every post-publication update in one list). It also links drug names in guide and high-yield text and adds drugs to search.
- Drug data lives in `data/drugs/<class>.js` (`KS.drugClasses`, `KS.drugs`). Fields: `mechanism`, `indications {approved, other}`, `forms`, `dose {start, titration, range, max, notes}`, `half`/pharmacokinetics, `effects {common, serious}`, `profile` levels, `monitoring`, `interactions`, `populations`, `pearls`, `clues` (for "which drug?" cards) and `updates`.
- Anything published after the 12th edition goes in an `updates` entry (`{year, title, text, source, field}`) on a drug, or a `{ type: "update", ... }` block in a study guide. Both render as a dashed "Post-publication update" box that names its source.
- Source links: `data/sources.js` (`KS.sourceLinks`) maps text in an update's `source` to verified URLs, shown as "Read the source" links. A source that cites "<Brand> prescribing information" for a drug in the Drugs section also gets a DailyMed label link automatically.

