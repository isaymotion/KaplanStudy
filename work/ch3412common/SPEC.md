# Section 34.1 (Contributions from the Psychosocial Sciences) — drafting spec

You are writing study content for a psychiatry-resident web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., Chapter 34, Contributions from the Behavioral and Social Sciences, section 34.1. The section becomes two app entries: "Psychosocial Sciences I: Piaget, Attachment, and Learning Theory" (`ch34-1`: Piaget's stages and their psychiatric applications, attachment theory, the Strange Situation and attachment disorders, Pavlovian conditioning, extinction, operant learning, reinforcement theory, avoidance learning) and "Psychosocial Sciences II: Biology of Memory" (`ch34-2`: synaptic plasticity and long-term potentiation, cortical organization of memory, amnesia, the types and systems of memory, neuroimaging, sleep and memory, assessment of memory, psychogenic amnesia, memory distortion and infantile amnesia). Your source is ONLY the text file named in your prompt (extracted from the book). Do not add facts from memory or other sources. Do not paste book sentences: rewrite everything in plain, short sentences in the app's own words.

## Style rules (strict)
- Plain, short sentences. No jargon beyond the book's terms.
- **Bold** the key facts a resident must recall (numbers, names, criteria, drug names, key words). Bold becomes a fill-in blank in "Hide key facts" mode, so bold the *answer*, not the question word. Every table cell or list item should contain at most a few bolded phrases.
- Ranges in prose use "to" ("6 to 12 months"), never a hyphen or en dash between numbers. Percentages: "20 percent" in prose, "20%" in tables.
- Where a table cell or sentence in the source text is garbled or cut off, use only what is clearly legible. Never invent text to fill a gap.
- Refer to the book's tables and figures by number in captions ("(Table 29-2)") so the reader can find them.
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
    { id: "s341-xxx or s342-xxx", title: "...", blocks: [ ... ] },
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
hy: [ { id: "hy341-xx", topic: "Topic name", items: ["one key fact with **bold** answer", ...] }, ... ],
dx: [ { id: "d341-xx01", tag: "Tag", q: "question", a: "answer with **bold** key words" }, ... ],
cs: [ { id: "c341-xx01", tag: "Tag", q: "clinical vignette ending in a question (single best answer)", choices: ["A","B","C","D","E"], answer: 0, why: "why the answer is right; cite the section or table" }, ... ],
ph: [ { id: "p341-xx01", tag: "Tag", q: "...", a: "..." }, ... ],
fd: [ { id: "f341-xx01", tag: "Tag", q: "...", a: "..." }, ... ]
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

## Section 34.1 additions (strict)
- FIGURES: figure captions are in the text; describe figures only from the caption. Where your job names a PNG you may open it with the Read tool to understand a diagram or check a table's layout, but do not describe details that the text and caption do not give.
- DRUGS: mention a drug only as the source does; no doses, no card whose answer is a dose.
- THEORISTS, STAGES, EXPERIMENTS AND TERMS: name every theorist, researcher, experiment, stage, phase, attachment pattern, conditioning term, reinforcement schedule or theory, memory type, brain structure, patient (for example a patient known by initials) and test exactly as the source does, with every age range, year, percentage and duration exactly as printed. Give each named person one line in a `defs` block saying what the source credits them with. Where the source walks through stages, phases or a procedure in order (Piaget's stages, phases of attachment, the Strange Situation episodes, how a conditioned response is acquired and extinguished, how long-term potentiation is induced), give a `steps` block or a table. Where it contrasts things (stages, attachment patterns, Pavlovian versus operant learning, positive versus negative reinforcement versus punishment, schedules, declarative versus nondeclarative memory, anterograde versus retrograde amnesia, organic versus psychogenic amnesia), give an own-words comparison table.
- LEARNING THEORY PRECISION: the source uses technical terms with exact meanings (for example conditioned and unconditioned stimulus and response, extinction, renewal, spontaneous recovery, reinstatement, blocking, reinforcer, punisher, ratio and interval schedules, habit versus goal-directed action). Use each term exactly as the source defines it and give the source's own example in your own words. Do not swap in textbook definitions from memory where the source words it differently; if the source's usage looks unusual or wrong, keep it and flag it in your report.
- CLINICAL LINKS: where the source ties a principle to a disorder or a treatment (for example exposure therapy and extinction, relapse after extinction, drug cues, anxiety, attachment and later psychopathology, memory complaints in depression, amnesia in specific conditions), make that link explicit in a callout and test it with a case. Keep the source's level of certainty.
- Where something looks wrong or outdated (an old diagnostic term, a DSM reference to an older edition, an age that conflicts with another part of your source, a claim about recovered or repressed memories stated without the source's caveats, a research claim stated too strongly), keep it as printed with "the chapter reports" and flag it in your report; the lead author adds verified update boxes. Never make a card whose correct answer is a figure or claim you flagged as doubtful.
- BOOK TABLES: render every book table in your chunk as an own-words comparison table with the same columns and rows and the key facts, captioned "see Table 34-N". Do not copy cell wording. Extracted table text can be scrambled (cells out of order): your job names a PNG of each table page; open it with the Read tool to see which cell belongs to which row, then write the table in your own words. If a cell is unreadable, leave it out rather than guess.
- NO INVENTED CASE BLOCKS: write a `case` block only where the source itself gives a clinical vignette or a named patient.
- Related content already in the app: section 32.1 (child development: Piaget, attachment, the Strange Situation and Table 32-8), section 33.1 (functional neuroanatomy, memory and the hippocampus), Chapter 3 (neurocognitive and amnestic disorders), section 23.8 (behavior therapy and exposure), Chapter 7 (dissociative amnesia), and the anxiety and trauma chapters. Do not contradict them and do not repeat their details. Keep to your source.
- Cases: vignettes where the answer turns on a principle the source describes (which Piagetian stage a child's reasoning shows, which attachment pattern or phase a behavior fits, which conditioning phenomenon explains a relapse or a symptom, which reinforcement schedule or theory applies, which memory system or brain region is affected, which test finding separates one amnesia from another), plus student or laboratory framings for basic points. Keep every fact the answer depends on within the source.
- Ids: entry `ch34-1` uses section ids `s341-`, card ids `d341-<pp>NN`, `c341-<pp>NN`, `p341-<pp>NN`, `f341-<pp>NN` and hy ids `hy341-NN`; entry `ch34-2` uses the same pattern with `342` (for example `s342-`, `c342-lt01`, `hy342-01`). Your job in the OUTLINE says which.
- In `why` text, refer to a section by a short plain name in parentheses, for example (Pavlovian conditioning). Never write a section id there and never use straight double quotes inside a string.
- Write "the chapter", never "the guide" or "the book", when you must refer to the source.
