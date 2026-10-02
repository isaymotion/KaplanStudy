# Kaplan & Sadock Study Companion

Chapter-by-chapter study app for psychiatry residents, built from *Kaplan & Sadock's Synopsis of Psychiatry*, 12th edition.

Each chapter has:

- **Study guide**: the full chapter reorganized for learning, with comparison tables, duration timelines, chapter case summaries, clinical pearls and exam tips.
- **High yield**: the facts most likely to appear on exams and boards. Switch on *Hide key facts* to turn every bold fact into a blank for self-testing.
- **Flashcards** in four decks: **Diagnosis**, **Clinical cases** (single-best-answer vignettes with explanations), **Pharmacology**, and **Foundations** (epidemiology, neurobiology, etiology and psychosocial care). Mark cards *Got it* or *Still learning*, shuffle, and filter to the cards you are still learning. Progress is saved in the browser on each device.
- **Search** across every chapter, guide, high-yield list and flashcard. Press `/` anywhere to jump to the search box.

Also included: light and dark themes, keyboard shortcuts, offline support after the first visit, and installability as an app on phones and desktops.

## Chapters

| Chapter | Title | Guide sections | High-yield points | Flashcards |
|---|---|---|---|---|
| 5 | Schizophrenia Spectrum and Other Psychotic Disorders | 33 | 157 | 267 |

## Publish on GitHub Pages

1. Create a new repository on GitHub and upload everything in this folder (keep the folder structure, including the empty `.nojekyll` file).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

There is no build step and no dependencies. To preview locally, open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Folder structure

```
index.html              App shell
css/app.css             Styles (light and dark themes)
js/app.js               Router, study guide, high yield, flashcards, search
data/chapters.js        Chapter registry
data/ch05/              Chapter 5 content
  guide.js              Study guide
  highyield.js          High-yield topics
  cards-diagnosis.js    Diagnosis deck
  cards-cases.js        Clinical case deck
  cards-pharm.js        Pharmacology deck
  cards-foundations.js  Foundations deck
icons/                  App icons (SVG sources and PNG exports)
manifest.webmanifest    Install metadata
sw.js                   Offline cache
```

## Adding a chapter

1. Create `data/chNN/` with the same six files as `data/ch05/`, following the same data shapes.
2. Add an entry to `KS.manifest` in `data/chapters.js` (id, number, title, short title, one-sentence summary, file list).
3. Change `VERSION` in `sw.js` so returning users get the new content.

Search, the home page and the chapter navigation pick up the new chapter automatically.

### Content conventions

- `**bold**` and `*italic*` are supported in all text. In high-yield items, bold marks the fact that becomes a blank in self-test mode, so bold the answer, not the topic.
- Study guide block types: `p`, `h`, `list`, `defs`, `table`, `callout` (`pearl`, `exam`, `caution`), `case`, `timeline`, `steps`.
- Clinical case cards use `choices` and a zero-based `answer` index, plus `why`.

## Attribution

App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com

An independent study aid built from *Kaplan & Sadock's Synopsis of Psychiatry*, 12th edition. Not affiliated with or endorsed by the publisher. The underlying textbook is copyrighted, so consider who has access to the published site. Always confirm doses and prescribing details against current product labeling.
