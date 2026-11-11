# Handoff: Kaplan & Sadock Study Companion

Last updated 2026-11-11, after release **73.0.0** (`4fa51b1`): **Chapter 29.1** (Death, Dying, and Bereavement, `ch29-1`) and **29.3** (Euthanasia and Physician-Assisted Suicide, `ch29-3`). Release 72.0.0 (`028d30f`) added **Chapter 28** (`ch28`). Release 71.0.0 (`4822e2d`) added Chapters 26 and 27 (`ch26`, `ch27`). Release 70.0.0 (`ee84513`) completed Chapter 25 (`ch25-1`, `ch25-2`), 69.0.0 (`c58037a`) completed Chapter 24 (`ch24-1`, `ch24-2`), 68.0.0 (`5de15e2`) completed Chapter 23 (23.10 to 23.14), 67.0.0 (`4f88440`) added 23.5 to 23.9, 66.0.0 (`c4002f5`) added 23.1 to 23.4, 65.0.0 (`faaa740`) added Chapter 22, 64.0.0 (`0197ce2`) added Chapter 20, 63.0.0 (`cd90432`) Chapter 18, 62.0.0 (`76f2138`) added Chapter 17 and 61.0.0 (`ea101a2`) Chapter 16. A parallel chat shipped release 60.0.0 (`c0f7fbd`, Nov 5): the **design refresh**, which also moved versions to semver and changed the cache prefix (section 2). Next work: **Chapter 29.2, Palliative Care** (PDF pages 2687 to 2717, about 9,100 words; `ch29-2`), release **74.0.0** (recipe B, then A; see section 7). Update the status table and next steps at the end of every unit.

## 1. Project and audience
- A static, offline-capable study web app built from Kaplan & Sadock's *Synopsis of Psychiatry*, 12th ed., for psychiatry residents (Philippines; ABPN-style board prep). The owner is Isabella Navarro, MD.
- Repo `isaymotion/KaplanStudy` (public). `main` is published by GitHub Pages; tools live on `dev-tools`.
- Vanilla JS SPA with a hash router (`index.html`, `js/app.js`, `sw.js`, `data/`).

## 2. Fixed rules
- The attribution reads `App created by Isabella Navarro, MD. Latest version <Month YYYY>. isaymotion@gmail.com`. Keep the wording; update only the month, in `index.html` (footer), `data/app-meta.js` and `README.md`.
- **Versions are semver since release 60.** Each release: add a changelog entry at the top of `data/changelog.js` with the next `version` (for example `"62.0.0"`), then set the same version in `data/app-meta.js` (`version`), `sw.js` (`VERSION = PREFIX + '62.0.0'`) and the first line of `README.md`.
- In `sw.js`, the prefix is now `PREFIX = 'kaplan-study-'` (all isaymotion apps share one origin). Only ever delete caches with this app's prefix (or the old `ks-companion-`, which `OLD_PREFIX` clears).
- Content is written in the app's own words; never paste book text.
- **Copyright rules (the user's decision, Nov 9, after two content-filter blocks):** never print book passages or transcribe book tables into the conversation or into files you write yourself; drafting agents read the extracted source files directly, and you check with counts, `grep -c` and short keyword lookups (a python snippet printing about 60 characters around a number is fine). **Book tables become comparison tables in the app's own words** (same columns, rows and key facts, reworded cells, captioned "see Table NN-N"); the old "cell by cell" rule is gone. Image tables: render the page to PNG and let the drafting agent view it. After drafting, run `N=7 DETAIL=/tmp/ovN.tsv python3 tools/overlap.py <clean source> <work files>`; any run of 7+ words shared with the book gets reworded (a Sonnet agent per section works well; 23.1 to 23.4 went from 242 runs to 0).
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
2. **Extract the text.** From the PDF: `pip install pymupdf --break-system-packages`, find the chapter's page range with `get_toc()`, extract with `page.get_text()`, and list headings by bold sans-serif spans. Some tables are images: render the page to a PNG (`page.get_pixmap(dpi=130)`) and name it in the agent's OUTLINE job so the drafting agent views it; do not transcribe it yourself (section 2). Check any figure description against the image.
3. Split the text into about 6 chunks (keep `<b>` bold markers so agents see headings; `tools/extract-ch23.py` on dev-tools does this with `TEXT_MEDIABOX_CLIP` off, which recovers table text clipped at the page edge) of 3,000 to 5,000 words in `/home/claude/chNNwork/src/`. Write `SPEC.md` (block types, style, card format) and `OUTLINE.md` (fixed section ids per work file); copy them from `work/ch16work/` and edit.
   **Larger targets (the user's choice from Ch 18 on):** sections of 350 to 900 words with at least 3 callouts (exam, pearl, caution); about 6 cases and 6 diagnosis cards per 1,000 source words, plus pharmacology and foundations cards where the chunk supports them; a comparison table wherever the book contrasts disorders or schools; every book table as an own-words comparison table (see the copyright rules in section 2). For Chapter 23, `work/ch23common/SPEC.md` ("Chapter 23 rules") and `OUTLINE.md` are the templates: one shared SPEC and one OUTLINE with a JOB per agent. Ch 18 used **Opus** drafting agents (`model: "opus"`) as a one-off; from now on choose the model by the subagent rule in section 2.
4. **Draft with subagents:** one agent per chunk (model per section 2) writes `gN.js` (one part `{title, sections}` or several `{parts:[...]}`) and `cN.js` (`{hy, dx, cs, ph, fd}`). Give each agent distinct id prefixes **and distinct case prefixes across files** (Ch 16 had a `c16-dv` clash that the build caught as DUP).
5. **Review every draft yourself** against the source (`node /home/claude/tools/show-work.js gN.js` prints a work file compactly). Grep every number. Watch for garbled book tables turned into wrong facts (Ch 16: the voyeurism and pedophilia age "exclusions").
6. Research post-publication changes by web search; write them as `updates.js` (`{chapter, guide:[{sec, block:{year, title, text, source}}]}`) and add each source to `data/sources.js`.
   **Coverage audit (mandatory since Ch 18):** after the build, run `python3 tools/coverage-audit.py /home/claude/pdfsrc/chNN-clean.txt /home/claude/kaplanstudy/data/chNN 0.6`, then again at `0.85`. It flags every book sentence whose content words are mostly missing from the built chapter and every book number that never appears. Read each flag: fill true gaps (add to the work files and rebuild) and ignore paraphrase misses and vignette color. Ch 18 had 3 flags at 0.6 (credit lines and one vignette detail) and no missing numbers. Also check that tables split across source chunks reach the right section: Ch 18's Table 18-3 fell in chunk 2 while its section was in chunk 1, and had to be added by hand.
7. Copy the previous `build_<ch>.js` (handles `parts` arrays since `build_ch16.js`; `build_ch23-N.js` reads intro and objectives from `chNNwork/meta.json`), set intro and objectives, build, then `node tools/patch_updates.js chNNwork/updates.js`. Try a few `SEED` values for an even answer spread and fix the best one in the script.
8. Register: the manifest in `chapters.js`, the file list in `sw.js`, `CHS` in `fulltest.py`, the chapter list in `srcs-check.js` (`/tmp/srcs4.js`), a helper in `helpers.js`, a look-alike in `lookalikes.js`, glossary terms and aliases, the changelog and the README chapter row (sections, high-yield items, cards).
9. Add the learning layer with recipe A.
10. Copy `chNNwork` to `work/` on dev-tools **without `src/`**: the branch is public, and `src/` holds extracted book text.

Built so far: Chapters 1 to 20, 21.0 to 21.11, 22, 23.1 to 23.14 (complete), 24.1 and 24.2 (complete) and 25.1 to 25.3 (complete), 26, 27, 28, 29.1 and 29.3. **Not yet built: 29.2 and 30 to 34.** Chapter 21 is complete (21.0 to 21.11 are all its sections).

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
| Ch 23.1 to 23.4 | 147/147 (56, 26, 38, 27) | 27/27 (8, 6, 8, 5) | Complete (release 66.0.0; 5 Opus drafters (23.1 in two halves), Sonnet for overlap rewording, research and the learning layer; 4 update boxes; helper `psymode`, look-alike `brief-dyn-schools`; visuals: 3 heatmaps (Tables 23-1, 23-4, couples types) and a chronology (23.2); 29 glossary terms) |
| Ch 23.5 to 23.9 | 101/101 (10, 17, 19, 37, 18) | 20/20 (2, 3, 3, 8, 4) | Complete (release 67.0.0; 5 Opus drafters (23.5 with 23.6; 23.8 in two halves) that ran the overlap check themselves (0 runs), Sonnet for research and the learning layer (no whyNot shifts this time after an explicit alignment example in the prompt); 5 update boxes; helper `behtech`, look-alike `exposure-methods`; visuals: heatmap of exposure methods (23.8) and hypnosis chronology (23.9), none for 23.5 to 23.7; 19 glossary terms) |
| Ch 23.10 to 23.14 | 89/89 (32, 16, 24, 11, 6) | 14/14 (4, 3, 4, 2, 1) | Complete (release 68.0.0; 4 Opus drafters (23.13 with 23.14) that ran the overlap check themselves, Sonnet for research and the learning layer (no shifts); 5 update boxes; chapter-wide helper `psytx`, look-alike `structured-therapies`; no visuals; 11 glossary terms) |
| Ch 24.1 and 24.2 | 40/40 (21, 19) | 10/10 (5, 5) | Complete (release 69.0.0; 2 Opus drafters (one per section) that ran the overlap check themselves (0 runs), Sonnet for research, why-not lines and checks (no shifts); 6 update boxes incl. 1 correction (the book's "National Society of Genetic Counseling" is the National Society of Genetic Counselors); helper `rehab24`, look-alike `genetic-info-types`; chronology visual in s242-testing from verified update facts, none for 24.1; 14 glossary terms) |
| Ch 25.1 and 25.2 | 91/91 (46, 45) | 16/16 (8, 8) | Complete (release 70.0.0; 4 Opus drafters (two per section) that ran the overlap check themselves (0 runs), Sonnet for research, why-not lines and checks (no shifts; 5 pronoun or wording fixes); 12 update boxes incl. 1 correction (prion disease is not all PRNP-mutation driven) and several on outdated practice (IM thiamine before glucose, delirium tremens timed from admission, divided dosing, meclizine, Spiegel survival result); helper `clref`, look-alike `late-life-cognition`; chronology of C-L milestones (25.1) and heatmap of dementia versus depression-related cognitive dysfunction (25.2); 13 glossary terms) |
| Ch 26 and 27 | 91/91 (20, 71) | 16/16 (5, 11) | Complete (release 71.0.0; 4 Opus drafters (Ch 26 one, Ch 27 three) that ran the overlap check themselves (0 runs), Sonnet for research, why-not lines (Ch 27 in two halves) and checks (no shifts, no fixes needed); 7 update boxes incl. 1 correction (Physician Charter: 2002, three sponsoring bodies) and 2 on the Philippine Mental Health Act (RA 11036); helper `loc26`, look-alike `ethics-pairs`; heatmap of levels of care (Ch 26) and chronology (Ch 27); 13 glossary terms) |
| Ch 28 | 76/76 | 19/19 | Complete (release 72.0.0; 4 Opus drafters that ran the overlap check themselves, Sonnet for research, why-not lines (two halves) and checks (no shifts; 2 stem fixes, 1 choice fix); 15 update boxes: 5 corrections of book errors (Jaffee v. Redmond spelling and military privilege, Tarasoff 1974 and 1976, O'Connor v. Donaldson 1975 and Rogers v. Okin, Dahmer plea date, federal insanity test since 1984), 4 US updates, 6 with Philippine law (RA 11036, Rule 130 sec. 24, Revised Penal Code art. 12 and People v. Paña, Civil Code arts. 796 to 800, Family Code art. 213, Data Privacy Act); helper `insanity28`, look-alike `forensic-pairs`; chronology of landmark cases in s28-malp; 26 glossary terms) |
| Ch 29.1 and 29.3 | 75/75 (56, 19) | 12/12 (9, 3) | Complete (release 73.0.0; 4 Opus drafters (29.1 three, 29.3 one) that ran the overlap check themselves (0 runs), 4 Sonnet agents for why-not lines (29.1 in two halves) and checks (no shifts; 3 why-not wording fixes, 2 stem or why fixes). The Sonnet research agent was blocked (WebFetch approval unanswered), so research was done in the main session with WebSearch. 10 update boxes: 29.1 (2023 AAN/AAP/CNS/SCCM brain death guideline, UDDA revision paused 2023, prolonged grief disorder, Table 29-2's 2-month figures are DSM-IV), 29.3 (corrections: Kevorkian 1990 and 2007, Vermont 2013, Montana by court ruling, Oregon in effect 1997, Gonzales v. Oregon; US status 2026 (12 states + DC by statute, Montana by ruling); Oregon residency removed 2023 and 2025 data; Canada MAID and Bill C-41; England and Wales bill fell April 2026 and was defeated September 11, 2026; Scotland rejected March 2026; Philippines RPC art. 253 and RA 11036 sec. 9); helper `griefdx29`, look-alikes `grief-types` and `eol-acts`, `grief-depression` now links to s291-cx; heatmap of complicated grief types (29.1) and chronology of assisted-dying dates (29.3); 20 glossary terms) |
| Ch 20 | 104/104 | 18/18 | Complete (release 64.0.0; Opus drafters for the 4 chunks, Sonnet for the learning layer; 6 update boxes incl. 2 corrections; helper `focus20`, look-alike `feigned-ddx`, grief look-alike linked; chronology visual of grief classification) |

Totals: **2,312/2,312 cases and 949/949 sections**, with all tests passing on `4fa51b1` (fulltest 560 desktop routes). Latest changelog version **73.0.0**; `sw.js` VERSION is `PREFIX + '73.0.0'`.

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
1. **Chapter 29.2, Palliative Care (PDF pages 2687 to 2717, about 9,100 words)**, one manifest entry `ch29-2`, release **74.0.0**. Register it between `ch29-1` and `ch29-3` in `data/chapters.js` (the manifest is in display order; `register-ch29a.py` appended both after ch28, so insert 29.2 before the `ch29-3` entry).
   - Extract: `tools/extract-ch29.py` writes `pdfsrc/ch29-all.txt` (pages 2666 to 2728). 29.2 is lines 819 to 1891 of that file (from the "29.2 Palliative Care" heading to just before the 29.3 heading); write it as `pdfsrc/ch29-2-clean.txt`. Headings: prevalence, treatment principles, anxiety, depression (Table 29-5 Endicott substitution criteria), confusional states, disease-specific, patient-family unit, decision points and advance directives, where to die, caring for the dying patient (Table 29-6), communication and breaking bad news, terminal care decisions (Tables 29-7 and 29-8, PVS), advance directives and DNR, caring for the family (Figure 29-1, Table 29-9), dying at home, palliative care, pain (Table 29-10, **Table 29-11 opioids is an image on PDF page 2710**: render it to PNG for the drafter), other symptoms (Table 29-12), hospice, neonatal and child end-of-life care, spiritual issues, alternative medicine. **Figure 29-1 is an image on page 2704.**
   - Split into 4 Opus jobs of about 2,300 words (e.g. lines 819 to 1100, 1101 to 1371, 1372 to 1592, 1593 to 1891; check word counts with the snippet used for 29.1). Copy `work/ch29common/SPEC.md` (change the section lines, keep the contested-topic and classification rules, add: doses as printed, flag odd units, no new doses) and write a new OUTLINE with section ids `s292-*` and card ids `d292-<pp>NN` etc.
   - Research (do it in the main session; subagent WebFetch needed approvals): opioid conversion and palliative sedation guidance, hospice eligibility (Medicare 6-month prognosis), POLST, any update to the Endicott criteria use, and Philippine law: RA 11036 sec. 9 advance directive (already verified, see 29.3 box), Universal Health Care Act (RA 11223) and National Integrated Cancer Control Act (RA 11215) palliative care provisions (confirm), and whether Philippine law defines brain death (Organ Donation Act RA 7170; confirm).
   - Build: copy `tools/build_ch29-1.js` (set `N=4`, paths `ch29-2work`, `data/ch29-2/`), registration from `tools/register-ch29a.py`, helper and look-alike from `tools/add-helper-lookalike-ch29a.js`, rest from `tools/checks/mkrest29a.js`. Look-alike `items` must **exclude** the row-label column (rows have `items.length + 1` cells).
   - Link 29.2 to `ch29-1` (dying patient, brain death) and to `ch28` (advance directives, informed consent) where relevant.
2. Use changelog version **74.0.0** for the next release. Take it from the pulled `data/changelog.js`, not from this doc.
3. After Chapter 29: 30 Community Psychiatry (page 2729), 31 Global and Cultural Issues (2760), 32 Normal Development and Aging (2782), 33 Contributions from the Neurosciences (2905), 34 Contributions from the Behavioral and Social Sciences (3162). Chapters 32 to 34 are long; check their TOC for numbered sections and split releases.
4. The Ch 17 update boxes on minors describe a fast-moving area (UK PATHWAYS trial, Endocrine Society and AAP guideline updates in progress). Recheck them by web search when a later release touches Chapter 17, and add a correction entry to the changelog if anything changed.
5. Chapter 29.3's update boxes describe a fast-moving area: Canada's **Bill C-41** must pass before **March 17, 2027** (check whether it passed), US state laws (new states each year), Oregon's yearly report (published each spring) and any new England and Wales bill. Recheck by web search when a later release touches 29.3, and add a correction entry if anything changed.
6. Chapters 24.2 and 25.2 cite anti-amyloid drug labels, the 2024 Alzheimer's Association criteria and genetic discrimination law; 25.1 cites the PADIS guideline (2025 focused update); 27 cites DoD Instruction 6490.08 (2023); 28 cites the NCSL duty-to-warn table (undated), 42 CFR 482.13 and the 2024 Part 2 rule. Recheck when a later release touches these sections.
7. Possible feature (only if the user asks): the short Geriatric Depression Scale is public domain and would fit the clinical tools hub (recipe C; confirm the licence and cutoffs first).
8. Feature follow-ups only if the user asks: more scales (YMRS needs a licence check; the MoCA is not free), confidence ratings in flashcard daily review, Tagalog versions of the scales.

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

- **Content filter:** in this project the app's output filter blocked two turns (Nov 9) right after book text was printed or a book table was transcribed. Follow the copyright rules in section 2; if a block happens, stop and tell the user instead of retrying the same step.
- **Approval prompts while the user is away:** some WebFetch targets (for example frontiersin.org) need the user's approval; if nobody answers, do not retry. Use WebSearch result snippets of the abstract to confirm the fact instead.
- **Usage limits:** six parallel Sonnet agents hit the 5-hour usage limit mid-run (Nov 9). Their files were already written; resume a stopped agent with SendMessage after the reset rather than starting a new one, and check what it wrote first.
- **whyNot alignment:** in 67.0.0 a prompt with an explicit example ("choices [A..E], answer 2 → [why A, why B, "", why D, why E]") gave no shifts; `/tmp/shiftchk.js`-style word-overlap checks flag lines that share no words with their own choice (mostly false positives, but quick to read). In 66.0.0 Sonnet agents wrote 7 arrays shifted by one position (blank in the wrong slot, each line one choice late). `/tmp/chkwn.js`-style checks catch the blank; to fix, move each line to the choice it discusses and put `""` at the answer. Read every case anyway: a shift with the blank landing correctly would pass the validator.
- **fulltest exam check:** it used to keep only the last chapter in `CHS` and answer 10 questions; ch23-14 has 6 cases, so it now keeps `KEEP = 'ch23-10'`. If a later chapter is short, leave `KEEP` on a chapter with at least 10 cases.
- `dump.js` needs the manifest entry first: register the new section in `data/chapters.js` before dumping guides and cases.
- `g5-chapter-terms.js`: when appending glossary terms, add a comma after the previous last entry; a missing comma is not a syntax error there (it parses as an index) and silently drops terms.

- **Helper notes show up as the "Why" list** on the result page, so a "Go on." note on a pass-through option prints as a reason. Write a short real reason for each option's `note` (fixed in `rehab24`; older helpers such as `behtech` still use "Go on.").
- **Short chapters:** Chapter 24 was two sections of about 2,500 words each. One Opus drafter per section, three Sonnet agents for the learning layer and one research agent were enough; the whole release took one session.

- **Book practice that has changed:** 25.1 and 25.2 had several outdated recommendations (IM thiamine before glucose, delirium tremens timed from admission, divided dosing three or four times a day, meclizine for vertigo in older adults). Keep the book line, add an update box, and fix any case whose **correct answer** repeats the outdated advice (c251-cd01's answer had to be edited in both the work file and `data/ch25-1/cards-cases.js` after the build).
- **Cases that teach a disproved finding:** a drafter framed Spiegel's 18-month survival result as a reason to join a group today. Reframe such cases as "what did the study report" and cite the update in the `why`.
- **Gendered whyNot lines:** Sonnet agents sometimes write "she" or "her" when the stem gives no sex. Grep the lines of cases whose stems use no pronoun.

- **US-only law and codes (Ch 27):** the book's ethics and legal rules are American. Drafters labeled them "in the United States"; update boxes added the Philippine Mental Health Act where it bears on the topic. Do not let agents add Philippine rules from memory: confirm each on the Act's text.
- **Table rulings that newer standards contradict:** Table 27-2 says a mere suspicion of child abuse need not be reported and that no consent is needed to write about cases. Keep the table as printed, add an update box, and make the case's `why` and the wrong-choice line point to the update (tell the whyNot agent in its prompt, as was done for c27-eq10).
- **Distractors that are right elsewhere in the chapter:** one Ch 27 case offered "share if the family agrees" as a wrong choice, while another section says next-of-kin consent permits release. When two drafters cover overlapping topics, read the cases side by side.

- **Wrong years and names in the book (Ch 28):** the forensic chapter printed five checkable errors (Tarasoff I and II years, O'Connor v. Donaldson year, "Roger v. Oken", "Jaffee v. Redmon", the Dahmer plea month). The Opus drafters flagged all of them in their reports because the spec asked for a list of anything that looked wrong. Keep that line in every spec. The guide keeps the printed text with a correction box; **cards, high-yield items, checks and the chronology use the corrected fact** with "(the book prints X)", so nobody memorizes the error.
- **Statements that later law overtook:** "no medical privilege in military courts" and "the ALI test is the law in federal courts" were both superseded (1999 and 1984). Reframe any case whose correct answer depends on the old statement (c28-fp02 became a knee-injury case about general medical privilege).
- **Long Philippine statute pages:** WebFetch reads 100,000 characters at a time. For the Civil Code or Family Code on Lawphil, pass `offset` (Civil Code arts. 796 to 800 are at about 250,000; Family Code art. 213 at about 100,000).
- **Overlap checker and citations:** a full case name or court name can count as a 7-word run ("Tarasoff v. Regents of the University of California", "the District of Columbia Court of Appeals"). Shorten the name in the app's own sentences. `DETAIL=` appends to the TSV, so delete it before re-running.
- **Agents' why-not reports are useful review input:** asking each whyNot agent to list stems or answers that looked wrong caught a missing consent element in a stem (c28-fi04) and an uncorrected case name in a choice (c28-ff01).

- **Research agents and WebFetch (Nov 11):** a Sonnet research agent's WebFetch calls needed approvals nobody answered, so it returned nothing confirmed. Do research in the main session with WebSearch (`extended` for 2026 status questions); result snippets from primary pages (statute sites, government reports, Hansard) were enough to confirm each fact.
- **Look-alike shape:** `items` are the column headers *after* the row label; each row has `items.length + 1` cells. The validator reports "row length" otherwise.
- **`at` indices in updates.js are applied in order:** each insert shifts later blocks, so compute the second `at` in the same section after the first insert (29.3's Oregon correction landed one block early the first time).
- **Superseded guidelines in cases:** when a book table is replaced by a newer guideline (Table 29-1 brain death intervals, Oregon residency), keep the case but frame the stem as "according to Table NN-N as printed" and add the update to the `why`; checks ask about the update instead.

## 10. Files to re-attach
- The K&S Synopsis 12e epub or PDF: **only** for building new chapters (recipe B). The PDF (`Kaplan___Sadock_s_Synopsis_of_Psychiatry__12th_Ed.pdf`) worked well for Chapters 16 to 23; PDF page numbers above refer to it. Needed for Chapter 29 and later. Extracted text (`/home/claude/pdfsrc/`) is never committed.
