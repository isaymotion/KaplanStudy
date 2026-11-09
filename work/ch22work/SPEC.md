# Chapter 22 (Other Somatic Therapies) — drafting spec

You are writing study content for a psychiatry-resident web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., Chapter 22. Your source is ONLY the text file(s) named in your prompt (extracted from the book). Do not add facts from memory or other sources. Do not paste book sentences: rewrite everything in plain, short sentences in the app's own words.

## Style rules (strict)
- Plain, short sentences. No jargon beyond the book's terms.
- **Bold** the key facts a resident must recall (numbers, names, criteria, drug names, key words). Bold becomes a fill-in blank in "Hide key facts" mode, so bold the *answer*, not the question word. Every table cell or list item should contain at most a few bolded phrases.
- Ranges in prose use "to" ("6 to 12 months"), never a hyphen or en dash between numbers. Percentages: "20 percent" in prose, "20%" in tables.
- Where a table cell or sentence in the source text is garbled or cut off, use only what is clearly legible. Never invent text to fill a gap.
- Refer to the book's tables and figures by number in captions ("(Table 22-2)") so the reader can find them.
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
    { id: "s22-xxx", title: "...", blocks: [ ... ] },
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
- `{ type: "case", title: "Mr. A, forgets only what suits him", text: "<paraphrased vignette>", point: "<teaching point, 1-2 sentences>" }`

Section ids: use exactly the ids given in your prompt. Titles: as given (you may polish wording slightly).

## Card formats (for card agents)
One file, a JS object literal in parentheses:
```
({
hy: [ { id: "hy22-xx", topic: "Topic name", items: ["one key fact with **bold** answer", ...] }, ... ],
dx: [ { id: "d22-xx01", tag: "Tag", q: "question", a: "answer with **bold** key words" }, ... ],
cs: [ { id: "c22-xx01", tag: "Tag", q: "clinical vignette ending in a question (single best answer)", choices: ["A","B","C","D","E"], answer: 0, why: "why the answer is right; cite the chapter table/section" }, ... ],
ph: [ { id: "p22-xx01", tag: "Tag", q: "...", a: "..." }, ... ],
fd: [ { id: "f22-xx01", tag: "Tag", q: "...", a: "..." }, ... ]
})
```
- `answer` is the index (0 to 4) of the correct choice in the order you wrote it; the build shuffles later. Vary which position is correct.
- Exactly 5 choices, all plausible, same grammatical form, no "all of the above".
- Vignettes: realistic, 2 to 4 sentences, with age and a clear clinical question ("What is the most likely diagnosis?", "Which is the best next step?", "Which drug is most likely responsible?"). Use the stem only to carry the facts needed; the `why` must be supported by the chapter.
- dx = facts about indications, technique, parameters, outcomes, adverse effects and history; ph = pharmacology (drugs used or tried, evidence level, adverse effects, neurotransmitter links); fd = foundations (neurophysiology, mechanisms, circuits, history, concepts); hy = high-yield one-liners grouped by topic (8 to 20 items per topic).
- Ids: use the two-letter prefix given in your prompt for each topic, numbered 01, 02, ... with no gaps.
- Tags: use only the tags listed in your prompt.

## Self-check before you finish
Run `node -e 'const o=eval(require("fs").readFileSync("<file>","utf8")); ...'` to confirm the file parses, that every block has a known type, that every case has 5 choices and a valid answer index, that ids are unique and that the section ids match the list you were given. Print the counts.

## Chapter 22 rules (strict) — LARGER targets
- Chapter 22 covers electroconvulsive therapy (ECT), other brain stimulation methods (TMS, tDCS, CES, MST, VNS, implanted cortical stimulation) and neurosurgical treatments including deep brain stimulation (DBS).
- Coverage beats brevity. Every fact, number, parameter (mA, Hz, seconds, joules, percentages, session counts), drug name and dose, named person, date, device and procedure in your source file must appear somewhere in your guide sections AND be tested by at least one card. A coverage audit checks this line by line afterwards, so do not skip "minor" facts.
- Section length: 350 to 900 words of content. Every section needs at least 3 `callout` blocks (at least one `exam`, one `pearl`, one `caution`).
- Reproduce each book table (Tables 22-1, 22-2, 22-3) as a table/list block cell by cell, in full, exactly as the book gives it. Describe Figure 22-1 (electrode positions) in words from the caption and the bracketed transcription note; do not invent more than they say.
- Do NOT add any post-publication facts (newer FDA clearances, new TMS protocols such as accelerated or theta-burst schedules not in the source, esketamine, newer DBS trials or approvals, newer device rules): the lead author writes those update boxes. Write the book's figures as the book states them, and where a figure comes from a named or dated study, say so. Never write "the book says".
- Where the source describes something as experimental, investigational, promising or unproven, keep exactly that level of evidence. Never upgrade evidence ("effective", "approved", "first line") beyond the source's words.
- Psychosurgery history (for example frontal lobotomy) is value-laden: describe it factually as the source does, with no verdict of your own.
- Card targets for your part: hy 3 to 5 topics of 10 to 20 items; dx at least 25; cs at least 22 vignettes (about 4 per section); fd at least 10 (mechanisms, neurophysiology, circuits, history, concepts); ph: write ph cards for every drug, anesthetic, muscle relaxant, anticholinergic, drug interaction or medication-and-device point in your source (part 2 should have at least 10; other parts 0 to 8 as the source allows).
- Cases should mix: indications and patient selection (who should get ECT, TMS, VNS, DBS or a lesion procedure, and when), technique and dosing choices supported by the source, managing problems (failure to induce a seizure, prolonged seizures, cognitive side effects, medication interactions), contraindications and high-risk situations, mechanism questions, and the differences between the methods.
- Vignettes: realistic and varied (ages, settings, sexes); you may set some in the Philippines, but every clinical fact the question depends on must come from your source.
