# Section 34.4 (Theories of Personality and Psychopathology), last part — drafting spec

You are writing study content for a psychiatry-resident web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., Chapter 34, section 34.4, Theories of Personality and Psychopathology. Its last part becomes two app entries: `ch34-9` (numbered 34.4d, Theories of Personality IV: Other Psychodynamic Schools, about 40 theorists in alphabetical order) and `ch34-10` (numbered 34.4e, Theories of Personality V: Positive Psychology). Freud (34.4a, 34.4b) and Erikson (34.4c) are already built. Your source is ONLY the text file named in your prompt (extracted from the book). Do not add facts from memory or other sources. Do not paste book sentences: rewrite everything in plain, short sentences in the app's own words.

## Style rules (strict)
- Plain, short sentences. No jargon beyond the book's terms.
- **Bold** the key facts a resident must recall (numbers, names, criteria, drug names, key words). Bold becomes a fill-in blank in "Hide key facts" mode, so bold the *answer*, not the question word. Every table cell or list item should contain at most a few bolded phrases.
- Ranges in prose use "to" ("6 to 12 months"), never a hyphen or en dash between numbers. Percentages: "20 percent" in prose, "20%" in tables.
- Where a table cell or sentence in the source text is garbled or cut off, use only what is clearly legible. Never invent text to fill a gap.
- Refer to the book's tables and figures by number in captions ("(Table 34-16)") so the reader can find them.
- Clinical vignettes in the book become `case` blocks (paraphrased, shortened, de-identified; keep the diagnosis the book gives).
- No post-publication updates, no `update` blocks: the lead author adds those after verification.
- Do not mention "the book says" in content; write as a teacher would.
- Keep every section between roughly 250 and 700 words of content. Vary block types; every section needs at least 2 `callout` blocks (one `exam`, and one `pearl` or `caution`).
- JSON-safe strings: escape double quotes inside strings with \" and avoid raw newlines inside strings.

## Guide section format
Each work file is a JS object literal in parentheses, exactly like this:

```
({
  title: "<part title>",
  sections: [
    { id: "s349-xxx", title: "...", blocks: [ ... ] },
    ...
  ]
})
```

Block types (use only these):
- `{ type: "p", text: "..." }` — a paragraph.
- `{ type: "h", text: "..." }` — a sub-heading inside a long section (use sparingly).
- `{ type: "list", title?: "...", items: ["...", "..."] }` — bullet list.
- `{ type: "defs", title?: "...", items: [["Term", "Definition ..."], ...] }` — term/definition pairs.
- `{ type: "table", caption: "...", head: ["col", ...], rows: [["...", ...], ...], note?: "...", wide?: true }` — set `wide: true` when 4+ columns.
- `{ type: "steps", title: "...", items: [["Step name", "What happens"], ...] }` — ordered sequence.
- `{ type: "callout", kind: "exam" | "pearl" | "caution", title: "...", text: "..." }` — exam = board-style key fact; pearl = clinical insight; caution = pitfall/safety.
- `{ type: "case", title: "Mr. C, pain that hides his fear", text: "<paraphrased vignette>", point: "<teaching point, 1-2 sentences>" }`

Section ids: use exactly the ids given in your prompt. Titles: as given (you may polish wording slightly).

## Card formats (for card agents)
One file, a JS object literal in parentheses:
```
({
hy: [ { id: "hy349-xx", topic: "Topic name", items: ["one key fact with **bold** answer", ...] }, ... ],
dx: [ { id: "d349-xx01", tag: "Tag", q: "question", a: "answer with **bold** key words" }, ... ],
cs: [ { id: "c349-xx01", tag: "Tag", q: "clinical vignette ending in a question (single best answer)", choices: ["A","B","C","D","E"], answer: 0, why: "why the answer is right; cite the section by its short name" }, ... ],
ph: [ { id: "p349-xx01", tag: "Tag", q: "...", a: "..." }, ... ],
fd: [ { id: "f349-xx01", tag: "Tag", q: "...", a: "..." }, ... ]
})
```
- `answer` is the index (0 to 4) of the correct choice in the order you wrote it; the build shuffles later. Vary which position is correct.
- Exactly 5 choices, all plausible, same grammatical form, no "all of the above".
- Vignettes: realistic, 2 to 4 sentences, with age and a clear clinical question ("What is the most likely diagnosis?", "Which is the best next step?", "Which drug is most likely responsible?"). Use the stem only to carry the facts needed; the `why` must be supported by the chapter.
- dx = clinical facts: indications, contraindications, patient selection, technique, goals, limitations, outcomes; ph = pharmacology only where the source discusses medication (for example medication as an adjunct); fd = foundations: theory, concepts, mechanisms of change, terms, named founders and history; hy = high-yield one-liners grouped by topic (8 to 20 items per topic).
- Ids: use the two-letter prefix given in your prompt for each topic, numbered 01, 02, ... with no gaps.
- Tags: use only the tags listed in your prompt.

## Self-check before you finish
Run `node -e 'const o=eval(require("fs").readFileSync("<file>","utf8")); ...'` to confirm the file parses, that every block has a known type, that every case has 5 choices and a valid answer index, that ids are unique and that the section ids match the list you were given. Print the counts.

## Section rules (strict)
- COPYRIGHT (most important): every word you write must be your own. Never copy a book sentence or a run of more than about six consecutive book words, in the guide, tables, cards or explanations. Short technical terms, terms of art, statute and case names (for example "dorsal column-medial lemniscal pathway", "Papez circuit", "anterior cingulate cortex") are fine, but shorten long names in your own sentences. Do not print long passages of the source in your tool calls or your final reply either: read the file, take notes in your head, write in your own words.
- OVERLAP CHECK (mandatory before you finish): run `N=7 DETAIL=/tmp/ov-<yourjob>.tsv python3 /home/claude/tools/overlap.py <clean source named in your job> <your g file> <your c file>` and reword until it reports 0 runs. Delete the TSV before each re-run (DETAIL appends). Report the final count.
- TABLES: turn each book table into a comparison or summary table written in your own words. Keep the same columns and rows and every key fact, but rephrase each cell briefly; do not copy cell wording. Caption it with the book table number ("... (see Table 34-1)").
- Coverage beats brevity. Every fact, number, named person, year, statute, stage, type, term and study result in your source should appear somewhere in your guide sections and be tested by at least one card. A coverage audit checks this afterwards.
- NAMED PEOPLE, MODELS AND STAGES: give each named model (for example circuits, pathways or memory systems), named author, statute or court case its own line in a `defs`, `steps` or `table` block, as the source gives it (spelling and years included). Where the source contrasts things (for example declarative versus nondeclarative memory, or the direct and indirect basal ganglia pathways), add a comparison table. If a name, year, number or claim in the source looks wrong or outdated, keep it and flag it in your final report.
- Section length: 350 to 900 words of content (sections drawn from very short source text may be shorter, about 250). Every section needs at least 3 `callout` blocks (at least one `exam`, one `pearl`, one `caution`).
- The book's clinical vignettes become `case` blocks: paraphrase and shorten them in your own words, de-identify, and keep the point the book makes.
- Keep the book's level of certainty. Where the source says something is debated, varies by state or country, or is unsettled, say exactly that. Do not add verdicts of your own. Where the source reports debates (for example about genetic diagnosis, localization of function or the role of a structure in a disorder), attribute each position to whoever holds it in the source and add no verdict of your own.
- Research claims: neuroscience findings in the source (gene associations, imaging results, animal studies) are as printed and attributed ("the chapter reports", "in animal studies"). Do not upgrade "may" or "has been linked" to "causes". Do not add newer findings; the lead author adds verified updates.
- Statistics: keep every prevalence, percentage, ratio and age exactly as printed, with its year and source body (for example a named survey). Where the source projects a future year (for example 2030), say it is a projection.
- Card targets for your part: hy 3 to 5 topics of 10 to 20 items; dx at least 6 per 1,000 source words; cs at least 6 vignettes per 1,000 source words (about 3 to 5 per section); fd at least 10 (named models, people, terms, laws and history go here); ph 0 to 6 only where the source discusses medication (do not invent drug facts or doses).
- Cases should test application (see the Cases rule near the end). Keep every fact the answer depends on within the source; do not invent drug facts the chapter does not give.
- A wrong choice must be wrong everywhere in the chapter. Do not use as a distractor something another part of the source treats as acceptable.
- Doses and numbers: keep every number, time limit, percentage and age exactly as the source gives it; flag any that looks wrong in your final report instead of changing it.
- Outdated terms in the source stay as written, with a short note in your own words that the current term differs where you are sure of it (do not state new rules).
- Vignettes: realistic and varied (ages, settings, sexes). Every fact the question depends on must come from your source.
- No post-publication updates and no `update` blocks.
- FINAL REPORT (short, no source quotes): counts per section and card type, the final overlap count, and a list of anything in the source that looked wrong, outdated, garbled or contradictory.

## Section 34.4 additions (theories) (strict)
- THEORIES, NOT FACTS: this section reports what theorists proposed. Attribute every claim to the theorist ("Freud proposed", "in Freud's view", "Anna Freud described", "the chapter notes") and keep the chapter's own hedges and any criticism it reports. Never state a psychoanalytic idea as established fact, and add no verdict of your own on whether a theory is right. Where the chapter reports a later revision, a critique or a disagreement between analysts, give each position with whoever holds it.
- THEORIST ENTRIES (34.4d): the source is a series of short entries, one per theorist, in alphabetical order, each headed by the name and years. For EVERY theorist in your chunk give, inside a `defs` block (one line per theorist, or a few lines for a long entry), in this order: name and years exactly as printed; school or movement as the chapter names it; key concepts with their terms of art in **bold**; what the chapter credits them with (works with titles and years as printed, institutions, people they trained or broke with); treatment ideas if the chapter gives any. Long entries (Adler, Jung, Klein, Kohut, Sullivan, Winnicott, Kernberg, Horney, Frankl, Anna Freud and the like) may also get their own `p`, `steps` or `table` blocks. Do not skip any theorist or any named concept: the coverage audit checks every one.
- COMPARISON TABLE PER JOB: each job adds one own-words comparison table of ALL the theorists in its chunk (columns: Theorist and years | School or approach | Key concepts | View of psychopathology or treatment, as the chapter gives it; write "not stated" where the chapter gives nothing). Where the chapter contrasts two theorists (for example Jung against Freud, Klein against Anna Freud), add a callout or a short table on that contrast.
- FIGURES: Figures 34-25 to 34-47 are portraits. Do not view them and do not describe them; you may add "(Figure 34-NN)" after the theorist's name in the defs line. Figure 34-48 (positive psychology) is a diagram: JOB F views its PNG and describes it in one own-words sentence plus a small table if it has quadrants.
- POSITIVE PSYCHOLOGY (34.4e): attribute claims to the field or to the researchers the chapter names (with years as printed); keep the chapter's hedges, including where it says something is untested. Lists of strengths, virtues, assessments and techniques become `defs` or own-words tables with every item the chapter names. Where the chapter contrasts positive psychology with the deficit (disease) model or with earlier humanistic psychology, add a comparison table.
- CASE MATERIAL: write a `case` block only where the source itself gives a clinical illustration or a life story. Cards may still be short vignettes that test a principle (for example recognizing which theorist's concept fits a patient's behavior or a therapist's technique), kept within the chapter's definitions. Theorist-recognition cases work well: a stem describing a concept or technique, five theorists as choices; make sure no wrong choice is also credited with that concept anywhere in the chapter or in the other parts of 34.4.
- NAMED PEOPLE: every named person in your source (including people a theorist trained with, analyzed, influenced or opposed) gets a mention with what the chapter credits them with.
- CLINICAL LINKS: where the chapter ties a concept to practice (for example interpretation, transference handling, a defense seen in a disorder), put it in a callout at the chapter's level of certainty and test it with a case.
- RELATED CONTENT ALREADY IN THE APP: Fairbairn, Balint, Winnicott, Klein, Kohut, Hartmann and Anna Freud appear in 34.4b (ego psychology, object relations, defenses); Bowlby and attachment, Skinner and operant learning are in 34.1a; Erikson in 34.4c; positive emotions, Vaillant's mature mechanisms and models of mental health in 34.2; psychodynamic, interpersonal, transactional, Gestalt, client-centered and existential therapies in Chapter 23 (23.1 to 23.4). Do not contradict them. Where this source states a date, name or claim differently, use this source and flag the difference in your report.
- Ids: entry ch34-9 uses section ids `s349-`, cards `d349-<pp>NN`, `c349-<pp>NN`, `p349-<pp>NN`, `f349-<pp>NN`, hy `hy349-NN`; entry ch34-10 uses `s3410-`, `d3410-<pp>NN`, `c3410-<pp>NN`, `p3410-<pp>NN`, `f3410-<pp>NN`, `hy3410-NN`. Your job in the OUTLINE says which prefixes and hy numbers are yours.
- In `why` text, refer to a section by a short plain name in parentheses, for example (Adler to Bowlby). Never write a section id there and never use straight double quotes inside a string.
- Write "the chapter", never "the guide" or "the book", when you must refer to the source.
