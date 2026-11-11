# Chapter 24 (Psychiatric Rehabilitation and Other Interventions) — drafting spec

You are writing study content for a psychiatry-resident web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., Chapter 24. Your source is ONLY the text file(s) named in your prompt (extracted from the book). Do not add facts from memory or other sources. Do not paste book sentences: rewrite everything in plain, short sentences in the app's own words.

## Style rules (strict)
- Plain, short sentences. No jargon beyond the book's terms.
- **Bold** the key facts a resident must recall (numbers, names, criteria, drug names, key words). Bold becomes a fill-in blank in "Hide key facts" mode, so bold the *answer*, not the question word. Every table cell or list item should contain at most a few bolded phrases.
- Ranges in prose use "to" ("6 to 12 months"), never a hyphen or en dash between numbers. Percentages: "20 percent" in prose, "20%" in tables.
- Where a table cell or sentence in the source text is garbled or cut off, use only what is clearly legible. Never invent text to fill a gap.
- Refer to the book's tables and figures by number in captions ("(Table 24-2)") so the reader can find them.
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
    { id: "s24N-xxx", title: "...", blocks: [ ... ] },
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
hy: [ { id: "hy24N-xx", topic: "Topic name", items: ["one key fact with **bold** answer", ...] }, ... ],
dx: [ { id: "d24N-xx01", tag: "Tag", q: "question", a: "answer with **bold** key words" }, ... ],
cs: [ { id: "c24N-xx01", tag: "Tag", q: "clinical vignette ending in a question (single best answer)", choices: ["A","B","C","D","E"], answer: 0, why: "why the answer is right; cite the section or table" }, ... ],
ph: [ { id: "p24N-xx01", tag: "Tag", q: "...", a: "..." }, ... ],
fd: [ { id: "f24N-xx01", tag: "Tag", q: "...", a: "..." }, ... ]
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

## Chapter 24 rules (strict)
- COPYRIGHT (most important): every word you write must be your own. Never copy a book sentence or a run of more than about six consecutive book words, in the guide, tables, cards or explanations. Short technical terms and names (for example "supported employment", "token economy", "penetrance") are fine. Do not print long passages of the source in your tool calls or your final reply either: read the file, take notes in your head, write in your own words.
- TABLES: turn each book table into a comparison or summary table written in your own words. Keep the same comparison (same columns being compared and the same rows or factors) and every key fact, but rephrase each cell briefly; do not copy cell wording. Caption it with the book table number ("Steps of genetic counseling compared (see Table 24-3)").
- Coverage beats brevity. Every fact, number, named person, school, date, technique and term in your source should appear somewhere in your guide sections and be tested by at least one card. A coverage audit checks this afterwards.
- Section length: 350 to 900 words of content (sections drawn from very short source text may be shorter, about 250). Every section needs at least 3 `callout` blocks (at least one `exam`, one `pearl`, one `caution`).
- The book's clinical vignettes become `case` blocks: paraphrase and shorten them in your own words, de-identify, and keep the clinical point the book makes.
- Keep the book's level of evidence. Where the source says a method is promising, unproven, or lacks controlled data, say exactly that. Never upgrade evidence beyond the source.
- Attribute theoretical stances to their school or author (for example "In the classic analytic view, ..."). Do not add verdicts of your own.
- Sexual orientation: where a vignette mentions a same-sex relationship, describe it neutrally. Homosexuality is not a disorder; make the clinical focus what the source makes it (for example distress over a family's reaction, or underachievement), and do not write any line implying orientation needs treatment.
- Card targets for your part: hy 3 to 5 topics of 10 to 20 items; dx at least 6 per 1,000 source words; cs at least 6 vignettes per 1,000 source words (about 4 per section); fd at least 10; ph 0 to 6 as the source allows (do not invent drug facts).
- Cases should test application: choosing the right rehabilitation approach for a patient, recognizing a technique in action (for example a skills-training step or a token economy), handling an ethical problem (autonomy, confidentiality, disclosure to an employer), and in genetic counseling: explaining risk, choosing whether to test, handling the family and psychosocial impact, and respecting autonomy.
- Genetics: keep risk figures, inheritance terms and named disorders exactly as the source gives them. Never add recurrence-risk numbers the source does not give. Where the source describes a gene or test in general terms, stay general.
- Figures: the source names Figure 24-1 and Figure 24-2; their images are at the PNG paths in your prompt. View them and describe what they show in your own words where useful.
- Vignettes: realistic and varied (ages, settings, sexes); some may be set in the Philippines, but every clinical fact the question depends on must come from your source.
- No post-publication updates and no `update` blocks.
