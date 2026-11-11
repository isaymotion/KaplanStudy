# Chapter 28 (Forensic and Legal Issues) — drafting spec

You are writing study content for a psychiatry-resident web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., Chapter 28. Your source is ONLY the text file(s) named in your prompt (extracted from the book). Do not add facts from memory or other sources. Do not paste book sentences: rewrite everything in plain, short sentences in the app's own words.

## Style rules (strict)
- Plain, short sentences. No jargon beyond the book's terms.
- **Bold** the key facts a resident must recall (numbers, names, criteria, drug names, key words). Bold becomes a fill-in blank in "Hide key facts" mode, so bold the *answer*, not the question word. Every table cell or list item should contain at most a few bolded phrases.
- Ranges in prose use "to" ("6 to 12 months"), never a hyphen or en dash between numbers. Percentages: "20 percent" in prose, "20%" in tables.
- Where a table cell or sentence in the source text is garbled or cut off, use only what is clearly legible. Never invent text to fill a gap.
- Refer to the book's tables and figures by number in captions ("(Table 27-2)") so the reader can find them.
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
    { id: "s28-xxx", title: "...", blocks: [ ... ] },
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
hy: [ { id: "hy28-xx", topic: "Topic name", items: ["one key fact with **bold** answer", ...] }, ... ],
dx: [ { id: "d28-xx01", tag: "Tag", q: "question", a: "answer with **bold** key words" }, ... ],
cs: [ { id: "c28-xx01", tag: "Tag", q: "clinical vignette ending in a question (single best answer)", choices: ["A","B","C","D","E"], answer: 0, why: "why the answer is right; cite the section or table" }, ... ],
ph: [ { id: "p28-xx01", tag: "Tag", q: "...", a: "..." }, ... ],
fd: [ { id: "f28-xx01", tag: "Tag", q: "...", a: "..." }, ... ]
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

## Chapter 28 rules (strict)
- COPYRIGHT (most important): every word you write must be your own. Never copy a book sentence or a run of more than about six consecutive book words, in the guide, tables, cards or explanations. Short technical terms, legal terms of art and case names (for example "duty to protect", "least restrictive alternative", "not guilty by reason of insanity") are fine. Do not print long passages of the source in your tool calls or your final reply either: read the file, take notes in your head, write in your own words.
- OVERLAP CHECK (mandatory before you finish): run `N=7 DETAIL=/tmp/ov-<yourjob>.tsv python3 /home/claude/tools/overlap.py /home/claude/pdfsrc/ch28-clean.txt <your g file> <your c file>` and reword until it reports 0 runs. Report the final count.
- TABLES: turn each book table into a comparison or summary table written in your own words. Keep the same columns and rows and every key fact, but rephrase each cell briefly; do not copy cell wording. Caption it with the book table number ("... (see Table 28-2)").
- Coverage beats brevity. Every fact, number, named person, court case, year, statute, legal test and term in your source should appear somewhere in your guide sections and be tested by at least one card. A coverage audit checks this afterwards.
- COURT CASES AND LEGAL TESTS: keep every case name, court, year and holding exactly as the source gives them (spelling included). Give each named case or test its own line in a `defs` or `table` block (case, year, court if given, what it held). Where the source contrasts legal tests (for example the insanity standards), add a comparison table. If a name, year or holding in the source looks wrong, keep it and flag it in your final report.
- Section length: 350 to 900 words of content (sections drawn from very short source text may be shorter, about 250). Every section needs at least 3 `callout` blocks (at least one `exam`, one `pearl`, one `caution`).
- The book's clinical or legal vignettes become `case` blocks: paraphrase and shorten them in your own words, de-identify, and keep the point the book makes.
- Keep the book's level of certainty. Where the source says rules vary by state or are unsettled, say exactly that. Do not add verdicts of your own.
- Law: the source describes US law (federal and state case law and statutes) and sometimes English law. Keep it as the source gives it and say "in the United States" (or the state or country named) where the source is jurisdiction-specific. Do not add Philippine law or any rule the source does not give; the lead author adds verified local notes afterwards.
- Card targets for your part: hy 3 to 5 topics of 10 to 20 items; dx at least 6 per 1,000 source words; cs at least 6 vignettes per 1,000 source words (about 3 to 4 per section); fd at least 10 (named cases, tests, terms and history go here); ph 0 to 6 only where the source discusses medication (do not invent drug facts).
- Cases should test application: spotting the four elements of malpractice, privilege versus confidentiality and their exceptions, duties toward suicidal and violent patients, the type of admission, rights to treatment and to refuse it, when seclusion or restraint is allowed, the elements of informed consent, the capacity or competence needed for a given act, which insanity standard a fact pattern meets, and the named court case that set a rule.
- A wrong choice must be wrong everywhere in the chapter. Do not use as a distractor something another part of the source treats as acceptable.
- Doses and numbers: keep every number, time limit, percentage and age exactly as the source gives it; flag any that looks wrong in your final report instead of changing it.
- Outdated terms in the source stay as written, with a short note in your own words that the current DSM-5-TR term differs where you are sure of it.
- Vignettes: realistic and varied (ages, settings, sexes). Because the rules are US law, set legal vignettes in the United States or leave the place unstated; every fact the question depends on must come from your source.
- No post-publication updates and no `update` blocks.
