# Chapter 29.2: outline for release 74.0.0 (ids fixed)

One app section: ch29-2 (Palliative Care).
Card ids: dx d292-<pp>NN, cases c292-<pp>NN, ph p292-<pp>NN, fd f292-<pp>NN, where <pp> is the two-letter prefix below (put each card under the prefix of the section it tests). Stay inside YOUR prefixes.
Source text marks bold with <b>...</b>, so headings are visible. Ignore page markers, credit lines and image markers (small images are page icons). Table text can appear a little before or after the heading it belongs to.
Overlap source for every job: /home/claude/pdfsrc/ch29-2-clean.txt

## JOB A: source /home/claude/ch29-2work/src/s1.txt (about 2,650 words)
Write /home/claude/ch29-2work/g1.js + c1.js; ONE part "Psychiatric care in advanced disease"
  s292-intro | pi | Introduction, prevalence and general treatment principles
  s292-anx   | pa | Anxiety in patients with advanced disease (causes, assessment, treatment as given)
  s292-dep   | pd | Depression in patients with advanced disease, with Table 29-5 (Endicott substitution criteria) as an own-words table
  s292-conf  | pc | Confusional states and the disease-specific considerations
  s292-dec   | pf | The patient-family unit, decision points (transition to palliative care) and where to die (unattended and attended deaths)
  hy ids hy292-01 to hy292-04; tags: Psychiatric symptoms | Depression | Delirium | Decisions

## JOB B: source /home/claude/ch29-2work/src/s2.txt (about 2,500 words)
Write /home/claude/ch29-2work/g2.js + c2.js; ONE part "Caring, communicating and deciding"
  s292-care  | pr | Caring for the dying patient, physicians' reactions, Table 29-6 (risk factors for aversive reactions in physicians) as an own-words table
  s292-comm  | pm | Communication: breaking bad news, telling the truth, informed consent
  s292-term  | pt | Terminal care decisions, Table 29-7 (difficult questions from patients) and Table 29-8 (persistent vegetative state), brain death versus persistent vegetative state (comparison table)
  s292-ad    | pv | Advance directives: living will, health care proxy, do-not-resuscitate and do-not-intubate orders
  hy ids hy292-05 to hy292-08; tags: Physician reactions | Communication | Terminal decisions | Advance directives

## JOB C: source /home/claude/ch29-2work/src/s3.txt (about 1,850 words) plus images /home/claude/pdfsrc/p2704.png (Figure 29-1) and /home/claude/pdfsrc/p2710.png (Table 29-11, opioid analgesics: the table is an image)
Write /home/claude/ch29-2work/g3.js + c3.js; ONE part "Family, palliative care and pain"
  s292-fam   | pw | Caring for the family, Figure 29-1 (describe it in your own words) and Table 29-9 (tasks of family members) as an own-words table, and dying at home
  s292-pall  | pp | Palliative care: definition, aims, team and principles as given
  s292-pain  | pn | Pain: types (Table 29-10 as an own-words table) and treatment, including Table 29-11 (opioid analgesics) as an own-words table from the PNG; keep every drug, dose and route as printed and flag odd ones
  hy ids hy292-09 to hy292-11; tags: Family care | Palliative care | Pain | Opioids

## JOB D: source /home/claude/ch29-2work/src/s4.txt (about 2,150 words)
Write /home/claude/ch29-2work/g4.js + c4.js; ONE part "Symptoms, hospice and special groups"
  s292-sx      | ps | Palliation of other symptoms and Table 29-12 (common end-of-life symptoms and signs, their meaning and management) as an own-words table
  s292-hospice | ph | Hospice care (definition, eligibility, services, history as given)
  s292-peds    | pk | Neonatal and infant end-of-life care, and child end-of-life care
  s292-spirit  | pj | Spiritual issues and alternative and complementary medicine
  hy ids hy292-12 to hy292-15; tags: Symptoms | Hospice | Children | Spiritual care
