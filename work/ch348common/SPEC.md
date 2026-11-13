# Section 34.4 (Theories of Personality and Psychopathology), Erikson part — drafting spec

You are writing study content for a psychiatry-resident web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., Chapter 34, section 34.4, Theories of Personality and Psychopathology. Its Erikson part becomes one app entry: `ch34-8` (numbered 34.4c, Theories of Personality III: Erik Erikson and the Life Cycle). The Freud part is already built as 34.4a and 34.4b. Your source is ONLY the text file named in your prompt (extracted from the book). Do not add facts from memory or other sources. Do not paste book sentences: rewrite everything in plain, short sentences in the app's own words.

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
    { id: "s348-xxx", title: "...", blocks: [ ... ] },
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
hy: [ { id: "hy348-xx", topic: "Topic name", items: ["one key fact with **bold** answer", ...] }, ... ],
dx: [ { id: "d348-xx01", tag: "Tag", q: "question", a: "answer with **bold** key words" }, ... ],
cs: [ { id: "c348-xx01", tag: "Tag", q: "clinical vignette ending in a question (single best answer)", choices: ["A","B","C","D","E"], answer: 0, why: "why the answer is right; cite the section or table" }, ... ],
ph: [ { id: "p348-xx01", tag: "Tag", q: "...", a: "..." }, ... ],
fd: [ { id: "f348-xx01", tag: "Tag", q: "...", a: "..." }, ... ]
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

## Section 34.4 additions (strict)
- THEORIES, NOT FACTS: this section reports what theorists proposed. Attribute every claim to the theorist ("Freud proposed", "in Freud's view", "Anna Freud described", "the chapter notes") and keep the chapter's own hedges and any criticism it reports. Never state a psychoanalytic idea as established fact, and add no verdict of your own on whether a theory is right. Where the chapter reports a later revision, a critique or a disagreement between analysts, give each position with whoever holds it.
- NAMED PEOPLE, DATES AND WORKS: give Erikson and each person the source names with him (teachers, analysts, collaborators, subjects of his psychohistories such as Luther and Gandhi, family members if named) a line in a `defs` block or table saying what the source credits them with, with years and work titles exactly as printed (for example *Childhood and Society*). Put Erikson's life in a dated `steps` block.
- STAGES: each of the eight psychosocial stages gets the same fields (Erikson's crisis, approximate ages, the corresponding Freudian stage, the basic strength or virtue, the radius of relationships or social institution, and anything else Table 34-16 gives) in ONE own-words comparison table that follows Table 34-16's columns, plus a short paragraph or `defs` entry per stage. Psychopathology tied to each stage gets its own table row or `defs` line.
- COMPARISON TABLES ACROSS SCHOOLS AND MODELS: where the source contrasts models (topographic versus structural, primary versus secondary process, pleasure versus reality principle, classes of defense, transference types), add a comparison table.
- BOOK TABLES AND FIGURES: Table 34-16 may be text, an image or both. Your JOB names the page PNGs: view them with the Read tool and check every cell against the image. Make each an own-words table captioned "(see Table 34-NN)" with the same rows and columns. Figure 34-24 is an image (a photo); describe a figure only from its caption and what the image plainly shows, in one sentence, captioned "(Figure 34-NN)". Do not invent table numbers.
- CASE MATERIAL: where the source gives a clinical illustration or a life story (for example from Erikson's psychohistories), make it a `case` block in your own words, keeping the point the chapter makes. Write a `case` block only where the source itself gives one. Cards may still be short vignettes that test a principle (for example recognizing a stage crisis from behavior), kept within the source's definitions.
- CLINICAL LINKS: where the chapter ties a concept to practice (for example interpretation, transference handling, a defense seen in a disorder), put it in a callout at the chapter's level of certainty and test it with a case.
- RELATED CONTENT ALREADY IN THE APP: Erikson's crises already appear in sections 32.1 to 32.3 (development across the life cycle), in 34.1a and in a Table 34-11 row of 34.4b; Freud's psychosexual stages are in 34.4a; defense mechanisms in 34.4b and 34.2; psychodynamic therapy in 23.1 and 23.2. Do not contradict them. Where this source states a stage's ages or name differently from those, use this source and flag the difference in your report.
- Ids: entry ch34-8 uses section ids `s348-`, cards `d348-<pp>NN`, `c348-<pp>NN`, `p348-<pp>NN`, `f348-<pp>NN`, hy `hy348-NN`. Your job in the OUTLINE says which prefixes and hy numbers are yours.
- In `why` text, refer to a section by a short plain name in parentheses, for example (The epigenetic principle). Never write a section id there and never use straight double quotes inside a string.
- Write "the chapter", never "the guide" or "the book", when you must refer to the source.
