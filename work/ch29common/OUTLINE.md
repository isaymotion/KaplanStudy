# Chapter 29: outline for release 73.0.0 (ids fixed)

Two app sections in this release: ch29-1 (Death, Dying, and Bereavement) and ch29-3 (Euthanasia and Physician-Assisted Suicide).
Card ids: dx d29N-<pp>NN, cases c29N-<pp>NN, ph p29N-<pp>NN, fd f29N-<pp>NN, where N is 1 or 3 (the section) and <pp> is the two-letter prefix below (put each card under the prefix of the section it tests). Stay inside YOUR prefixes. Example: d291-dd01, c293-eu04.
Source text marks bold with <b>...</b>, so headings are visible. Ignore page markers, credit lines and image markers (the small images are page icons). Table text can appear a little before or after the heading it belongs to.
Related content elsewhere in the app: Chapter 20 already covers uncomplicated bereavement as a DSM "other condition"; you do not need to repeat it, but do not contradict the book.

## JOB A: source /home/claude/ch29-1work/src/s1.txt (about 2,600 words); overlap source /home/claude/pdfsrc/ch29-1-clean.txt
Write /home/claude/ch29-1work/g1.js + c1.js; ONE part "Death and dying"
  s291-def    | dd | Definitions of death, the Uniform Determination of Death Act, legal aspects of death, and Table 29-1 (clinical criteria for brain death) as an own-words table
  s291-stages | ds | The stages of death and dying (each stage, with its clinical handling) and near-death experiences
  s291-life   | dl | Life-cycle considerations about death and dying (children by age, adolescents, adults) and management of the dying patient
  hy ids hy291-01 to hy291-03; tags: Definitions of death | Stages of dying | Life cycle | Management

## JOB B: source /home/claude/ch29-1work/src/s2.txt (about 2,200 words); overlap source /home/claude/pdfsrc/ch29-1-clean.txt
Write /home/claude/ch29-1work/g2.js + c2.js; ONE part "Bereavement, grief and mourning"
  s291-grief  | bg | Definitions (bereavement, grief, mourning), normal bereavement reactions, duration of grief, anticipatory grief, anniversary reactions, mourning
  s291-cx     | bc | Complicated bereavement: Table 29-2 (bereavement versus major depression) and Table 29-3 (DSM-5 versus ICD-10 approaches) as own-words tables, and the types (chronic, hypertrophic, delayed, traumatic)
  s291-dep    | bm | Medical or psychiatric illnesses associated with bereavement, bereavement and depression, bereavement and PTSD
  hy ids hy291-04 to hy291-06; tags: Normal grief | Complicated grief | Grief and depression | Grief and PTSD

## JOB C: source /home/claude/ch29-1work/src/s3.txt (about 1,650 words); overlap source /home/claude/pdfsrc/ch29-1-clean.txt
Write /home/claude/ch29-1work/g3.js + c3.js; ONE part "Biology, life cycle and treatment of grief"
  s291-bio    | bb | Biologic perspectives and the phenomenology of grief, with Table 29-4 (phases of grief) as an own-words table or steps block
  s291-lcb    | bl | Bereavement during childhood and adolescence and during adulthood (loss of spouse, child, parent and so on, as the source gives)
  s291-tx     | bt | Grief therapy, medication in grief, self-help groups
  hy ids hy291-07 to hy291-09; tags: Biology of grief | Phases of grief | Bereavement across life | Grief therapy

## JOB D: source /home/claude/ch29-3work/src/s1.txt (about 2,350 words); overlap source /home/claude/pdfsrc/ch29-3-clean.txt
Write /home/claude/ch29-3work/g1.js + c1.js; ONE part "Euthanasia and physician-assisted suicide"
  s293-euth   | eu | Euthanasia: definitions and types, history, positions and the arguments given for and against (each attributed)
  s293-pas    | ep | Physician-assisted suicide: definitions, law and court rulings as the source gives them, Table 29-13 (Oregon's law) as an own-words table, data and debate
  s293-req    | er | How to deal with requests for suicide, Table 29-14 (the AMA's recommended approach) as an own-words steps block or table, and future directions
  hy ids hy293-01 to hy293-03; tags: Euthanasia | Assisted suicide | Law and policy | Responding to requests
  Card targets here: at least 14 cs, 14 dx, 10 fd.
