# Chapter 20 (Other Conditions that May be a Focus of Clinical Attention) — drafting spec

You are writing study content for a psychiatry-resident web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., Chapter 20. Your source is ONLY the text file(s) named in your prompt (extracted from the book). Do not add facts from memory or other sources. Do not paste book sentences: rewrite everything in plain, short sentences in the app's own words.

## Style rules (strict)
- Plain, short sentences. No jargon beyond the book's terms.
- **Bold** the key facts a resident must recall (numbers, names, criteria, drug names, key words). Bold becomes a fill-in blank in "Hide key facts" mode, so bold the *answer*, not the question word. Every table cell or list item should contain at most a few bolded phrases.
- Ranges in prose use "to" ("6 to 12 months"), never a hyphen or en dash between numbers. Percentages: "20 percent" in prose, "20%" in tables.
- Use "ICD-10" and "DSM-5" exactly as the book does. Where the ICD-10 column in a criteria table is garbled/cut off in the source text (e.g. "Exposing genit public, often of the o"), use only what is clearly legible and otherwise leave that cell short or empty. Never invent text to fill a cut-off cell.
- Refer to the book's tables and figures by number in captions ("(Table 20-2)") so the reader can find them.
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
    { id: "s20-xxx", title: "...", blocks: [ ... ] },
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
hy: [ { id: "hy20-xx", topic: "Topic name", items: ["one key fact with **bold** answer", ...] }, ... ],
dx: [ { id: "d20-xx01", tag: "Tag", q: "question", a: "answer with **bold** key words" }, ... ],
cs: [ { id: "c20-xx01", tag: "Tag", q: "clinical vignette ending in a question (single best answer)", choices: ["A","B","C","D","E"], answer: 0, why: "why the answer is right; cite the chapter table/section" }, ... ],
ph: [ { id: "p20-xx01", tag: "Tag", q: "...", a: "..." }, ... ],
fd: [ { id: "f20-xx01", tag: "Tag", q: "...", a: "..." }, ... ]
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

## Chapter 20 rules (strict) — LARGER targets
- This chapter covers conditions that are **not mental disorders** (DSM-5 "Other Conditions that May be a Focus of Clinical Attention"; ICD-10 "Factors Influencing Health Status and Contact with Health Services"). Keep that framing clear: say "condition" or "problem", not "disorder", except where the book names a real disorder.
- Coverage beats brevity. Every fact, number, list item, table cell, named person/body (e.g. Dorothy Lewis, the Surgeon General's Workshop of 1985, NICHD) and vignette detail in your source file must appear somewhere in your guide sections AND be tested by at least one card. A coverage audit checks this line by line afterwards, so do not skip "minor" facts (each motive, each percentage, each item in a list).
- Section length: 350 to 900 words of content. Every section needs at least 3 `callout` blocks (at least one `exam`, one `pearl`, one `caution`).
- Reproduce each book table (Tables 20-1, 20-2, 20-3) as a table/list block cell by cell, in full, exactly as the book gives it.
- Use "intellectual disability" where the book says "mental retardation", adding "(older term: mental retardation)" once.
- Do NOT add any post-publication facts (DSM-5-TR, ICD-11, prolonged grief disorder, newer statistics): the lead author writes those update boxes. Write the book's figures as the book states them. Where a figure comes from a named or dated study, say so ("In one study, ...", "Robins' 1966 follow-up found ..."). Never write "the book says".
- Contested or value-laden passages (capital punishment, corporal punishment, media content, gender roles, SES-based parenting and marital-role differences, sexual harassment): attribute each view to whoever holds it in the source (e.g. "the 1985 Surgeon General's workshop on violence urged ..."; "opponents of capital punishment call it ..."). Add no verdict of your own and do not generalize the book's group differences beyond what it says.
- Card targets for your part: hy 3 to 5 topics of 10 to 20 items; dx at least 25; cs at least 22 vignettes (about 4 per section); ph: this chapter has almost no drugs, so write ph cards ONLY if your source mentions a medication or substance point (0 to 5 cards is fine); fd at least 10 (theory, psychodynamics, genetics, family systems, social factors, epidemiology concepts).
- Cases should mix: which condition code fits (the "not a mental disorder" category vs. a real disorder), differential diagnosis (malingering vs factitious disorder vs conversion disorder vs the somatoform disorders (use the source's terms); bereavement vs major depression; adult antisocial behavior vs antisocial personality disorder vs mania vs schizophrenia vs complex partial seizures vs substance use; religious experience vs psychosis; culture shock vs psychiatric restlessness; partner problem vs individual mental disorder), next-step questions (e.g. confront tactfully, full neuropsychiatric workup, ask about domestic violence), and management choices supported by the source.
- Vignettes: realistic and varied (ages, settings, sexes); you may set some in the Philippines or other settings, but every clinical fact the question depends on must come from your source.
