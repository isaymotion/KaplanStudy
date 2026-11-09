# Handoff: Kaplan & Sadock Study Companion

Last updated 2026-11-09, after release **65.0.0** (`faaa740`): **Chapter 22, Other Somatic Therapies**. Release 64.0.0 (`0197ce2`) added Chapter 20, 63.0.0 (`cd90432`) Chapter 18, 62.0.0 (`76f2138`) added Chapter 17 and 61.0.0 (`ea101a2`) Chapter 16. A parallel chat shipped release 60.0.0 (`c0f7fbd`, Nov 5): the **design refresh**, which also moved versions to semver and changed the cache prefix (section 2). Next work: Chapter 23, Psychotherapy, sections 23.1 to 23.4 as release 66.0.0 (recipe B, then A; see section 7). Update the status table and next steps at the end of every unit.

## 1. Project and audience
- A static, offline-capable study web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., for psychiatry residents (Philippines; ABPN-style board prep). The owner is Isabella Navarro, MD.
- Repo `isaymotion/KaplanStudy` (public). `main` is published by GitHub Pages; tools live on `dev-tools`.
- Vanilla JS SPA with a hash router (`index.html`, `js/app.js`, `sw.js`, `data/`).

## 2. Fixed rules
- The attribution reads `App created by Isabella Navarro, MD. Latest version <Month YYYY>. isaymotion@gmail.com`. Keep the wording; update only the month, in `index.html` (footer), `data/app-meta.js` and `README.md`.
- **Versions are semver since release 60.** Each release: add a changelog entry at the top of `data/changelog.js` with the next `version` (for example `"62.0.0"`), then set the same version in `data/app-meta.js` (`version`), `sw.js` (`VERSION = PREFIX + '62.0.0'`) and the first line of `README.md`.
- In `sw.js`, the prefix is now `PREFIX = 'kaplan-study-'` (all isaymotion apps share one origin). Only ever delete caches with this app's prefix (or the old `ks-companion-`, which `OLD_PREFIX` clears).
- Content is written in the app's own words; never paste book text.
- **Corrections policy:** book content stays as the book says. Book errors and anything newer go in `update` boxes, each with a `source` that resolves in `data/sources.js`. Verify every post-publication fact by web search before writing it. Check questions may cite the update box (for example, "The book says none; since then lecanemab and donanemab...").
- Style: plain, short sentences; **bold** key facts (bold becomes a blank in "Hide key facts" mode); "to" for ranges in prose.
- Commits end with the session's Co-Authored-By and Claude-Session lines. Push to `main` after the tests pass.
- After each unit, give the user a status table.
- **Subagent rule (the user's standing preference, restored after Ch 18):** use subagents whenever appropriate, to save tokens. Pick the model per task: Sonnet for simpler or mechanical work (whyNot lines, checks, searches, bulk edits), Opus where depth matters (chapter drafts). Claude keeps design, clinical content decisions and the final review. Ch 18 used Opus for everything as a one-off choice; that is not the default.

## 3. Architecture and data formats
- `data/chapters.js`: `KS.manifest` entries `{id, number, title, short, summary, files:['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations','learning']}`. Chapter files load through the manifest; `KS.extraFiles` holds only shared data (glossary, helpers, drugs, tools).
- Changelog items: `{type: chapter|feature|correction|update|content, text, ch?, href?, link?}`; `ch` tags that chapter "Updated" on the home page.
- Data files call `KS.add(chId, key, value)`.
- **Guide:** `{intro, objectives[], parts:[{title, sections:[{id, title, blocks[]}]}]}`. Block types:
  - `p {text}`
  - `defs {title?, items:[[k,v]]}`
  - `table {caption, head, rows, note?}`
  - `steps {title, items:[[k,v]]}`
  - `callout {kind: exam|pearl|caution, text}`
  - `update {year, title, text, source}`
- **Cards:** `dx`, `pharm`, `foundations` are `{id, tag, q, a}`. `cases` are `{id, tag, q, choices[5], answer, why}`.
- **Learning file** (`data/<ch>/learning.js`):
  - `pretest`: 8 case ids
  - `domains`: `{caseId: 'A'–'I'}` overrides. ABPN Dimension 2: A neuroscience, B behavioral/social, C clinical, D diagnostic procedures, E treatment, F communication, G ethics/law, H practice-based learning, I systems. Cases without an override are auto-classified.
  - `whyNot`: `{caseId: [5 strings]}` aligned to the **stored (already shuffled) choice order**, with `""` at the answer index
  - `checks`: `{secId: [{q, a}]}` for **every** section
  - `visuals`: `[{sec, at, block}]`, where `at` is the block index to insert before (omit to append), and `block` is a `heatmap {title, cols, rows:[{label, v:[0-3]}], legend[4], note}` or a `chronology {title, events:[{year, label}], note}`
- **Other files:**
  - Look-alikes (`data/lookalikes.js`): `{id, title, summary, items, rows, keys, links:[{ch, sec, label}], source?}`
  - Helpers (`data/helpers.js`): `{id, chapter, title, summary, caution, start, nodes:{q, options:[{label, note, to}]}, results:{label, dx, line, points, link}}`, where `to` is a node id or `"r:<result>"`
  - Glossary: `data/glossary/g5-chapter-terms.js` (`["term","def","Ch X"]`) and `KS.glossaryAliases`. Matching is case-insensitive, so never use an alias that equals a common word or an existing term.
  - Drug reference: `data/drugs/<class>.js`, generated by `mk.py` in a work folder.
  - Changelog: `data/changelog.js`; the newest entry goes at the top with the next semver `version`.

## 4. Per-unit recipes
**A. Learning layer for a chapter** (use for any future chapter built with recipe B)
1. `cd /home/claude/kaplanstudy && node /home/claude/tools/learn/dump.js chNN guide > /tmp/chNN-guide.txt && node /home/claude/tools/learn/dump.js chNN cases > /tmp/chNN-cases.txt`
2. **Draft with subagents.** Split the cases file in half (`sed -n`), then launch agents in parallel (model per the subagent rule in section 2; Sonnet is usually enough here. Ch 18 used Opus and needed only 3 small fixes). Two write `updwork/learn-chNN-whynot-a.js` and `-b.js`, each `({ "caseId": [5 strings aligned to the dumped choice order, "" at answer], ... })`. A third writes `updwork/learn-chNN-checks.js` (`{secId: [2–3 {q, a}]}`, key facts in **bold**). Put "STEP 1 (MANDATORY): read the ENTIRE guide before writing" at the top of each whyNot prompt; in pass 7 agents skipped the guide without it, and in pass 8 they all read it. Tell each agent to self-check with node (key count, 5 strings, `""` only at the answer, all section ids).
3. Meanwhile, write the domains, pretest (8 ids across the chapter) and one visual yourself, as `updwork/learn-chNN-rest-base.js`. Build the visual from a table already in the guide. Find its `at` by listing the section's blocks from `data/chNN/guide.js`.
4. Merge everything with node into `updwork/learn-chNN-whynot.js` and `updwork/learn-chNN-rest.js` (`{domains, pretest, checks, visuals}`), then `node /home/claude/tools/learn/apply.js chNN` (it refuses on any misalignment or missing section).
5. `node tools/validate-learning.js --strict chNN` must say `no errors`.
6. **Clinical review (you, not an agent):**
   - Print each case's stem and choices beside its whyNot text and read every line.
   - Grep the guide for every number or claim in the checks.
   - Check the chapter's `update` boxes, because an answer drawn from book text alone may be outdated.
   - Fix lines that state facts the stem does not give, contradict the guide, refer to a "list", imply unproven efficacy, or **sit on the wrong choice**. The validator only checks where the blank is, so two swapped wrong-answer strings pass it.
   - Fixes needed so far: pass 6, 5; pass 7, 7; pass 8, 11 across two chapters, including one swapped pair (c4-ha08), a borrowed figure (a morphine lethal dose quoted as nicotine's) and a check answer contradicting its update box.
7. Add a changelog entry (next version) and bump the version everywhere (section 2), then run the tests (section 5), commit and push `main`. Copy the two final updwork files to `devtools-wt/updwork/`, then commit and push `dev-tools`.

**B. New chapter section** (needs the book: the epub or the PDF)
1. Pull `main` and check `data/chapters.js`, because a parallel chat may have built the chapter.
2. **Extract the text.** From the PDF: `pip install pymupdf --break-system-packages`, find the chapter's page range with `get_toc()`, extract with `page.get_text()`, and list headings by bold sans-serif spans. Some tables are images: extract them with `get_images()` / `Pixmap`, view them, and transcribe them yourself into bracketed notes in the source chunks. Figures likewise; check any figure description against the image.
3. Split the text into about 6 chunks of 3,000 to 5,000 words in `/home/claude/chNNwork/src/`. Write `SPEC.md` (block types, style, card format) and `OUTLINE.md` (fixed section ids per work file); copy them from `work/ch16work/` and edit.
   **Larger targets (the user's choice from Ch 18 on):** sections of 350 to 900 words with at least 3 callouts (exam, pearl, caution); per chunk about 25 or more cases and 25 or more diagnosis cards, plus pharmacology and foundations cards where the chunk supports them; a comparison table wherever the book contrasts disorders; every book table reproduced cell by cell. The "Chapter 18 rules" block in `work/ch18work/SPEC.md` is the template. Ch 18 used **Opus** drafting agents (`model: "opus"`) as a one-off; from now on choose the model by the subagent rule in section 2.
4. **Draft with subagents:** one agent per chunk (model per section 2) writes `gN.js` (one part `{title, sections}` or several `{parts:[...]}`) and `cN.js` (`{hy, dx, cs, ph, fd}`). Give each agent distinct id prefixes **and distinct case prefixes across files** (Ch 16 had a `c16-dv` clash that the build caught as DUP).
5. **Review every draft yourself** against the source (`node /home/claude/tools/show-work.js gN.js` prints a work file compactly). Grep every number. Watch for garbled book tables turned into wrong facts (Ch 16: the voyeurism and pedophilia age "exclusions").
6. Research post-publication changes by web search; write them as `updates.js` (`{chapter, guide:[{sec, block:{year, title, text, source}}]}`) and add each source to `data/sources.js`.
   **Coverage audit (mandatory since Ch 18):** after the build, run `python3 tools/coverage-audit.py /home/claude/pdfsrc/chNN-clean.txt /home/claude/kaplanstudy/data/chNN 0.6`, then again at `0.85`. It flags every book sentence whose content words are mostly missing from the built chapter and every book number that never appears. Read each flag: fill true gaps (add to the work files and rebuild) and ignore paraphrase misses and vignette color. Ch 18 had 3 flags at 0.6 (credit lines and one vignette detail) and no missing numbers. Also check that tables split across source chunks reach the right section: Ch 18's Table 18-3 fell in chunk 2 while its section was in chunk 1, and had to be added by hand.
7. Copy the previous `build_<ch>.js` (handles `parts` arrays since `build_ch16.js`), set intro and objectives, build, then `node tools/patch_updates.js chNNwork/updates.js`. Try a few `SEED` values for an even answer spread and fix the best one in the script.
8. Register: the manifest in `chapters.js`, the file list in `sw.js`, `CHS` in `fulltest.py`, the chapter list in `srcs-check.js` (`/tmp/srcs4.js`), a helper in `helpers.js`, a look-alike in `lookalikes.js`, glossary terms and aliases, the changelog and the README chapter row (sections, high-yield items, cards).
9. Add the learning layer with recipe A.
10. Copy `chNNwork` to `work/` on dev-tools **without `src/`**: the branch is public, and `src/` holds extracted book text.

Built so far: Chapters 1 to 20, 21.0 to 21.11, 22 and 25.3. **Not yet built: 23, 24, 25 (except 25.3) and 26 to 34.** Chapter 21 is complete (21.0 to 21.11 are all its sections).

**Contested topics** (Ch 17 set the pattern): write update boxes that attribute every position to the body that holds it, with dates, put differing positions side by side, add no verdict of the app's own, and end with "check current local rules and guidelines" where law differs by country. Keep the guide's own text to what the book says, attributed where the book takes a stance. Cut any agent line that goes beyond the book on a contested point (for example, claims about the reversibility of puberty blockers).

**C. New app feature** (for the section 7 list)
1. Read the relevant parts of `js/app.js` and the router first. Check that the feature does not already exist in some form.
2. Agree the design and scope with the user before building. Keep it vanilla JS, offline-capable, and in the app's existing style.
3. Verify every clinical number (scale cutoffs, equivalence tables, ANC thresholds, lithium ranges) by web search against a current primary source, and add each source to `data/sources.js`. Use only rating scales that are free to use; confirm the license by web search.
4. Register any new files in `sw.js` CORE and `KS.extraFiles`, add new routes to the `fulltest.py` routes and to `e2e.py` where useful, add a changelog entry (next version), and bump the version everywhere (section 2).
5. Run the tests (section 5), commit and push `main`, then update this doc.

## 5. Commands
```
# restore (new session)
git clone https://github.com/isaymotion/KaplanStudy.git /home/claude/kaplanstudy
cd /home/claude/kaplanstudy && git fetch origin dev-tools && git worktree add /home/claude/devtools-wt dev-tools
bash /home/claude/devtools-wt/restore.sh
# tests (run before and after work)
cd /home/claude/kaplanstudy
node tools/validate-learning.js --strict <ch...>   # expect "no errors"
node /tmp/srcs4.js | grep '^NO'                    # only the 6 known lines (see pitfalls)
python3 /home/claude/fulltest.py | tail -3         # expect "errors: []"
python3 -m http.server 8124 >/dev/null 2>&1 &      # e2e needs a server; confirm with curl (200) first
python3 /home/claude/tools/learn/e2e.py | tail -1  # expect "ERRORS []"
python3 /home/claude/tools/learn/e2e_weak.py | tail -1  # Weak topics + handout; expect "ERRORS []"
python3 /home/claude/tools/learn/e2e_tools.py | tail -2  # Clinical tools, report link, card types; expect "FAILS []" and "ERRORS []"
python3 /home/claude/tools/learn/e2e_conf.py | tail -2   # Confidence ratings; expect "FAILS []" and "ERRORS []"
```
After changing tools, copy them back into the dev-tools worktree, then commit and push `dev-tools`.

## 6. Status (learning-layer backfill: complete)
| Chapter | Cases with whyNot | Sections with checks | State |
|---|---|---|---|
| Ch 1 | 87/87 | 46/46 | Complete (pass 6) |
| Ch 2 | 114/114 | 57/57 | Complete (pass 7) |
| Ch 3 | 85/85 | 37/37 | Complete (pass 8) |
| Ch 4 | 86/86 | 53/53 | Complete (pass 8) |
| Ch 5–14, 19, 21.0–21.11, 25.3 | all | all | Complete (passes 1–5) |
| Ch 15 | 50/50 | 40/40 | Complete (built with its learning layer in a parallel chat) |
| Ch 16 | 50/50 | 42/42 | Complete (release 61.0.0; built from the PDF with recipes B and A) |
| Ch 17 | 30/30 | 13/13 | Complete (release 62.0.0; 7 update boxes on a contested area; no helper, a look-alike instead) |
| Ch 18 | 111/111 | 15/15 | Complete (release 63.0.0; larger targets with Opus drafters and a coverage audit; 6 update boxes, helper `impdx`, look-alikes `theft-ddx` and `firesetting-ddx`) |
| Ch 22 | 114/114 | 21/21 | Complete (release 65.0.0; 4 Opus drafters, Sonnet for research and the learning layer; 9 update boxes incl. 2 corrections (alfentanil units, device limit units); helper `ectfix`, look-alike `stim-methods`; chronology visual of somatic therapies) |
| Ch 20 | 104/104 | 18/18 | Complete (release 64.0.0; Opus drafters for the 4 chunks, Sonnet for the learning layer; 6 update boxes incl. 2 corrections; helper `focus20`, look-alike `feigned-ddx`, grief look-alike linked; chronology visual of grief classification) |

Totals: **1,602/1,602 cases and 815/815 sections**, with all tests passing on `faaa740`. Latest changelog version **65.0.0**; `sw.js` VERSION is `PREFIX + '65.0.0'`.

### Features built (recipe C)
| Feature | Route | Release | Notes |
|---|---|---|---|
| Weak topics dashboard | `#/weak` | 57 | `renderWeak`/`weakData` in `js/app.js`. Topic = chapter + card tag. Pools kept exams and quizzes (pre-tests and unanswered items left out), flashcard ratings (Again = miss) and open mistakes. Ranked once a topic has 3 tries (`WEAK_MIN`); roll-ups by chapter and ABPN domain; "Drill" starts an untimed `kind:'quiz'` exam of up to 20 of the topic's cases. Linked from Home tools and the Mistakes page. |
| Confidence ratings | exam run, results, `#/exam/review/<id>/blind\|lucky`, `#/weak` | 59 | `CONF`, `confOn`, `isLucky`, `isBlind`, `confResults` in `js/app.js`. Item field `s` ('g'/'u'/'s'), shown after an answer is picked when `ex.conf` (from `examPrefs.conf`, default on). Weak topics counts guessed-right as a miss and lists sure-but-wrong topics first. Flashcards do not ask (Again/Hard already carry it). |
| SRS review counter | — | 57 | `srsNext` now stores `n` (total reviews). `srsTries(s)` falls back to `r + l` for older records; backup merge uses it. |
| Clinical tools hub | `#/tools`, `#/tools/<id>` | 58 | `js/tools.js` (`KS.toolsModule`, loaded like `drugs.js`; in `index.html`, `sw.js` CORE). Data: `data/tools/scales.js` (`KS.scales`) and `data/tools/calcs.js` (`KS.calcs`), both in `KS.extraFiles`. Nothing entered is saved. Hub also links the Stahl and DSM-5-TR companion apps. Guides show "Clinical tools for this chapter" chips (`chapterTools` in `app.js`, from each tool's `chapters`). |
| Rating scales | `phq9`, `gad7`, `aims`, `ciwa`, `cows`, `cssrs` | 58 | Generic scale renderer: items/opts/bands/flags; custom rules `RULES.cssrs` and `RULES.aims`. C-SSRS: Columbia primary-care response protocol (items 4, 5 and item 6 within 3 months → consultation + precautions; items 1–3 and older item 6 → referral). CIWA-Ar bands ASAM 2020 (<10, 10–18, ≥19). AIMS Schooler–Kane (one area ≥3 or two ≥2). PHQ-9 item 9 and positive C-SSRS show NCMH 1553 / 0919-057-1553 / 0917-899-8727. COWS shows bands only; buprenorphine start thresholds left to local protocol (no guideline figure verified). |
| Calculators | `antipsychotic`, `benzodiazepine`, `clozapine-anc`, `lithium-level` | 58 | `ENGINES.ddd` (WHO DDDs, N05A index updated 2026-01-20; paliperidone palmitate ÷1.56), `ENGINES.benzo` (Ashton + NHS SPS), `ENGINES.anc` (Clozaril PI 6/2025 tables 1–2; REMS ended June 13, 2025), `ENGINES.lithium` (ISBD/IGSLi 2019, US label, StatPearls bands; flags non-12-hour samples). Verified research is in `updwork/clinical/*.json` on dev-tools. |
| Report an error | every guide section | 58 | `reportLink` in `app.js`: mailto isaymotion@gmail.com with section, link and release. |
| Daily-review card types | `#/review` | 58 | `reviewDecks()`; choice saved in `reviewPrefs.decks`; at least one stays on. Clinical cases were already in daily review; this adds the on/off choice. |
| Resident handout | `#/teach/handout/<id>[/all]` | 57 | `renderTeachHandout`. From the session summary ("Resident handout"). Revisit items (or all polled) with answer, why and why-not lines, topic table; no per-choice vote counts. Chapter-case sessions list cases with teaching points. Uses `window.print()`. |

## 7. Next steps
1. **Chapter 23, Psychotherapy** (PDF pages 2343 to 2491, about 150 pages). **Decided by the user (Nov 9): one manifest entry per section, ids `ch23-1` to `ch23-14` with `number: '23.1'` to `'23.14'` (same pattern as `ch21-x`), built in 3 or 4 releases starting at 66.0.0.** Planned batches:
   - **Release 66.0.0:** 23.1 psychoanalysis and psychoanalytic psychotherapy (p. 2343), 23.2 brief psychodynamic psychotherapy (2369), 23.3 group, combined individual and group psychotherapy, and psychodrama (2377), 23.4 family and couples therapy (2392).
   - **Release 67.0.0:** 23.5 dialectical behavior therapy (2401), 23.6 biofeedback (2405), 23.7 cognitive therapy (2412), 23.8 behavior therapy (2421), 23.9 hypnosis (2435).
   - **Release 68.0.0:** 23.10 interpersonal therapy (2442), 23.11 narrative psychotherapy (2456), 23.12 combined psychotherapy and pharmacotherapy (2461), 23.13 mentalization-based treatment (2471), 23.14 psychoeducational interventions (2474 to 2491).
   - If a batch runs long, split the last release in two (a fourth release, 69.0.0).
   - Per section: extract its page range, and use one drafting agent per section (or per about 4,000 words for long ones such as 23.1). Give each section its own work folder `ch23-NNwork/`, build script `build_ch23-NN.js` and id prefixes (`s231-`, `hy231-`, `c231-` and so on for 23.1, following the `ch21-x` files: check one, for example `data/ch21-1/guide.js`, for the exact pattern). Register each section separately: manifest (after `ch22`), `sw.js`, `CHS` in `fulltest.py`, the `srcs-check.js` list, README rows. Do the learning layer (recipe A) for every section in the release before tagging it.
   - A helper and a look-alike per release, not per section (for example, a "which psychotherapy?" helper in the last batch, and look-alikes comparing therapies).
   - Recipe B with the larger targets and the coverage audit, then recipe A. The PDF must be re-attached (section 10). Pull `main` first.
2. Use changelog version **66.0.0** for the next release. Take it from the pulled `data/changelog.js`, not from this doc.
3. The Ch 17 update boxes on minors describe a fast-moving area (UK PATHWAYS trial, Endocrine Society and AAP guideline updates in progress). Recheck them by web search when a later release touches Chapter 17, and add a correction entry to the changelog if anything changed.
4. Feature follow-ups only if the user asks: more scales (YMRS needs a licence check; the MoCA is not free), confidence ratings in flashcard daily review, Tagalog versions of the scales.

## 8. Scheduled tasks (manage only with the user's explicit say-so)
- **"Kaplan backfill pass"**: the user asked to delete it on Oct 27. It did not appear in `list_triggers` (even with `include_completed`), so it was not deleted from here; it may be a scheduled task stored locally by the desktop app. The user was told to remove it there.
- **"Remind: remaining K&S app feature ideas"**: fires once on Oct 28 at 9:00 am Manila in an older session. Everything on its list is now built (releases 57 and 58).
- **"Weekly app backup to Google Drive"**: Sundays at 7:31 am Manila. Leave it running.

## 9. Pitfalls learned
- **Parallel chats push to `main`.** Always `git pull --ff-only origin main` before starting a unit and again before committing. Take the next changelog version from the pulled files, not from this doc.
- whyNot must follow the **stored** choice order from `dump.js cases`, not the original order in the work folder.
- A glossary alias that equals an existing term makes validation error. Check `grep -i` first.
- Foreground `sleep` is blocked; use background loops or Python waits.
- WebFetch returns PROVENANCE_REQUIRED for some drugs.com dosage pages, and pubmed sometimes fails; use another page from search results.
- `srcs4.js` prints 6 known `NO` lines (generic sources such as "DSM-5-TR (American Psychiatric Association, 2022)"). These are expected. It only scans the chapters in its list: add each new chapter to that list (in `/tmp/srcs4.js` and `tools/srcs-check.js`). The generic "DSM-5 (American Psychiatric Association, 2013)" now links to the APA DSM page.
- `gh` GraphQL is blocked; use `gh api repos/...` (REST).
- The remote says "repository moved" on push. It is harmless (it redirects to `isaymotion/KaplanStudy`).
- **The design refresh renamed controls.** `e2e.py` now uses `#textSizeBtn` and `input[name=textSize]`; `e2e_tools.py` accepts "version" in the report link. If a later redesign breaks a selector, fix the test, not the app.
- `fulltest.py` `CHS` had missed Chapter 15; it now lists 15 to 18. Check it when adding a chapter.
- `fulltest.py` takes over 2 minutes now: run it in the background and wait for `errors:` in its output.
- Agents copy the book's evidence wording ("open-label only") into callouts, tables and stems; after adding an update box that changes the evidence, grep the guide and cards for the old wording and align it (Ch 18 naltrexone).
- `rsync` is not installed: copy work folders with `tar --exclude=./src`.
- Fixing a case stem or `why` after the learning layer exists: edit both the work file and `data/chNN/cards-cases.js` directly. Do not rebuild for this: the build reshuffles choices, which could break the whyNot alignment.
- **Push access:** cloning works without attaching the repo, but pushing does not (git proxy 403). Claude cannot attach the repo with push access on its own initiative; the request is blocked. At the start of a session, ask the user to say "Add isaymotion/KaplanStudy to this session with push access", then call `add_repo` with `access: "push"`. If a clone already exists at `/home/claude/kaplanstudy`, keep it; do not re-clone.
- The first Bash call of a session may be refused with "the classifier gave no verdict"; repeating the identical call once works.
- The local test server can stop between turns. If `curl localhost:8124` does not return 200, restart it and rerun e2e.
- In whyNot text, do not state facts the stem does not give, and do not contradict the guide's own tables (for example, factor analysis is listed under content validity, and the book's IQ bands overlap at 80 and 90).
- The guide can contain two different figures for one fact in different sections (for example, reversible dementia "about 15%" and "10 to 15%"). Don't ask the same check twice with different answers.
- **Keep both copies of this doc in sync:** `claude/handoff.md` in the project and `HANDOFF.md` on `dev-tools`. The scheduled task reads the dev-tools copy; before pass 8, that copy was still stale at pass 5.

- **Book table errors stay faithful; fix them in update boxes and in the callouts and cards.** Ch 20: Table 20-1 prints malingering as an example of nonadherence (DSM-5 lists them separately), and the bereavement section repeats the DSM-IV 2-month rule. Agents turned both into exam callouts and cards; grep the cards and callouts for any fact an update box corrects and reword them (the book's sentence in the guide stays).
- `fulltest.py` phone run lists horizontal overflow on `#/drugs/drill*` and `#/compare*` routes (seen on 64.0.0; not Chapter 20 pages). It does not count as an error; check whether it predates 64.0.0 before changing anything.
- Chapter 20 learning visual is a `chronology` built from verified update-box facts (no guide table suited a heatmap); the drafters' self-built tables were cut where rows did not pair (the religion table).
- **Book unit and dose errors are dangerous:** Ch 22 printed alfentanil as "2 to 9 mg/kg" (a thousandfold error; it is micrograms) and the device limit as "mCi". Have drafters flag odd units, verify by search, keep the book line marked "as printed", fix cards to the correct unit, and add a correction box.
- **Research agent output:** use a Sonnet agent to gather post-publication facts into `chNNwork/research.json` (with `confirmed` flags), then open the primary page yourself for every fact you put in a box. Never cite a PMID from memory: confirm it or link the DOI.
- **Clinical numbers need primary sources.** Subagent research is a starting point; read the label or guideline page yourself for any threshold that drives an action (pass 58 caught a C-SSRS item 6 over-triage and unverified CIWA-Ar bands this way).
- A container restart can drop recent turns from view while files survive. Before rebuilding, run `git status` in the clone and check `/tmp/claude-0/.../tasks/` for earlier work.

## 10. Files to re-attach
- The K&S Synopsis 12e epub or PDF: **only** for building new chapters (recipe B). The PDF (`Kaplan___Sadock_s_Synopsis_of_Psychiatry__12th_Ed.pdf`) worked well for Chapters 16 to 22; PDF page numbers above refer to it. Needed for Chapter 23. Extracted text (`/home/claude/pdfsrc/`) is never committed.
