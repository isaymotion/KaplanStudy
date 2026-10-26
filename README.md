# dev-tools branch

Build and test tools for the Kaplan & Sadock Study Companion (the site is on `main`). This branch is never published; GitHub Pages serves `main` only.

Read `HANDOFF.md` first. Run `bash restore.sh` to put everything where the scripts expect it:

| In this branch | Restored to | What it is |
|---|---|---|
| `tools/build_*.js` | `/home/claude/tools/` | One build script per chapter: reads `/home/claude/<ch>work/` and writes `kaplanstudy/data/<ch>/` |
| `tools/learn/` | `/home/claude/tools/learn/` | `dump.js` (print a chapter's guide or cases), `apply.js` (merge a backfill into `learning.js`), `validate.js`, `e2e.py`, `stat.js`, `patch_engine.py` |
| `tools/patch_updates.js` | `/home/claude/tools/` | Adds update boxes or cards to an existing chapter from a spec file |
| `tools/fulltest.py` | `/home/claude/fulltest.py` | Playwright test over every route (file:// URL) |
| `tools/srcs-check.js` | `/tmp/srcs4.js` | Checks every update `source` resolves to a link in `data/sources.js` |
| `updwork/` | `/home/claude/updwork/` | Backfill inputs `learn-<ch>-whynot.js` and `learn-<ch>-rest.js` |
| `work/<ch>work/` | `/home/claude/<ch>work/` | Chapter drafts (`g*.js`, `c1.js`, `checks.js`, `srcs.js`, `helper.js`, `mk.py`) |

The scripts use absolute paths under `/home/claude`, so restore there. `kaplanstudy/tools/validate-learning.js` lives in the site repo itself.

No book text, epub contents or page images are stored here.
