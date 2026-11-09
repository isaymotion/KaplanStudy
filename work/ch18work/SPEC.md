# Chapter 18 (Disruptive, Impulse-Control, and Conduct Disorders) — drafting spec

You are writing study content for a psychiatry-resident web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., Chapter 18. Your source is ONLY the text file(s) named in your prompt (extracted from the book). Do not add facts from memory or other sources. Do not paste book sentences: rewrite everything in plain, short sentences in the app's own words.

## Style rules (strict)
- Plain, short sentences. No jargon beyond the book's terms.
- **Bold** the key facts a resident must recall (numbers, names, criteria, drug names, key words). Bold becomes a fill-in blank in "Hide key facts" mode, so bold the *answer*, not the question word. Every table cell or list item should contain at most a few bolded phrases.
- Ranges in prose use "to" ("6 to 12 months"), never a hyphen or en dash between numbers. Percentages: "20 percent" in prose, "20%" in tables.
- Use "ICD-10" and "DSM-5" exactly as the book does. Where the ICD-10 column in a criteria table is garbled/cut off in the source text (e.g. "Exposing genit public, often of the o"), use only what is clearly legible and otherwise leave that cell short or empty. Never invent text to fill a cut-off cell.
- Refer to the book's tables and figures by number in captions ("(Table 18-2)") so the reader can find them.
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
    { id: "s18-xxx", title: "...", blocks: [ ... ] },
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
- `{ type: "case", title: "Mr. A, rages over small delays", text: "<paraphrased vignette>", point: "<teaching point, 1-2 sentences>" }`

Section ids: use exactly the ids given in your prompt. Titles: as given (you may polish wording slightly).

## Card formats (for card agents)
One file, a JS object literal in parentheses:
```
({
hy: [ { id: "hy18-xx", topic: "Topic name", items: ["one key fact with **bold** answer", ...] }, ... ],
dx: [ { id: "d18-xx01", tag: "Tag", q: "question", a: "answer with **bold** key words" }, ... ],
cs: [ { id: "c18-xx01", tag: "Tag", q: "clinical vignette ending in a question (single best answer)", choices: ["A","B","C","D","E"], answer: 0, why: "why the answer is right; cite the chapter table/section" }, ... ],
ph: [ { id: "p18-xx01", tag: "Tag", q: "...", a: "..." }, ... ],
fd: [ { id: "f18-xx01", tag: "Tag", q: "...", a: "..." }, ... ]
})
```
- `answer` is the index (0 to 4) of the correct choice in the order you wrote it; the build shuffles later. Vary which position is correct.
- Exactly 5 choices, all plausible, same grammatical form, no "all of the above".
- Vignettes: realistic, 2 to 4 sentences, with age and a clear clinical question ("What is the most likely diagnosis?", "Which is the best next step?", "Which drug is most likely responsible?"). Use the stem only to carry the facts needed; the `why` must be supported by the chapter.
- dx = diagnosis/criteria/epidemiology/course cards; ph = pharmacology (drugs used or tried, evidence level, adverse effects, neurotransmitter links); fd = foundations (neurobiology, psychodynamic theory, impulse vs compulsion concepts, risk factors); hy = high-yield one-liners grouped by topic (8 to 20 items per topic).
- Ids: use the two-letter prefix given in your prompt for each topic, numbered 01, 02, ... with no gaps.
- Tags: use only the tags listed in your prompt.

## Self-check before you finish
Run `node -e 'const o=eval(require("fs").readFileSync("<file>","utf8")); ...'` to confirm the file parses, that every block has a known type, that every case has 5 choices and a valid answer index, that ids are unique and that the section ids match the list you were given. Print the counts.

## Chapter 18 rules (strict) — this chapter uses LARGER targets than earlier chapters
- Coverage beats brevity. Every fact, number, drug, differential, table cell and vignette detail in your source file must appear somewhere in your guide sections AND be tested by at least one card. A coverage audit will check this line by line after you finish, so do not skip "minor" facts (e.g. each drug in a list, each lab test, each exclusion, each percentage).
- Section length: 350 to 900 words of content. Every section needs at least 3 `callout` blocks (at least one `exam`, one `pearl`, one `caution`).
- Where the book compares the three disorders, add a comparison `table` (wide) so residents can contrast intermittent explosive disorder, kleptomania and pyromania.
- Reproduce each DSM-5 vs ICD-10 table (Tables 18-1, 18-2, 18-3) as a table block exactly as the book states it, paraphrased only where needed, cell by cell. Do not correct the book's criteria from memory: the lead author adds correction boxes. Known typo: the text says "Table 18-3 lists the diagnostic approaches to kleptomania"; it means pyromania, so just write pyromania.
- Use "intellectual disability" where the book says "mental retardation", adding "(older term: mental retardation)" once.
- Do not add any post-publication facts (DSM-5-TR, ICD-11, newer trials): the lead author writes those update boxes.
- Card targets per source part: hy 3 to 5 topics of 10 to 20 items; dx at least 25; cs at least 25 vignettes (about 4 per section); ph at least 10 where the part has drugs (fewer if the part has no drugs, then put more in dx/fd); fd at least 8 where the part has theory or neurobiology.
- Cases should mix diagnosis, differential (each named mimic: psychosis, mania, antisocial personality, conduct disorder, borderline personality, substance intoxication, epilepsy, dementia, malingering, amok, Parkinson disease, normal child fire play, arson), next-step workup, comorbidity and treatment-choice questions.
