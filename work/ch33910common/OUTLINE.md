# Chapter 33 parts 9 and 10: outline for release 83.0.0 (ids fixed)

Two app entries. JOBs A and B build `ch33-9` (ids with 339); JOBs C and D build `ch33-10` (ids with 3310). Card ids: dx d33N-<pp>NN, cases c33N-<pp>NN, ph p33N-<pp>NN, fd f33N-<pp>NN, where 33N is 339 or 3310 and <pp> is the two-letter prefix below. Stay inside YOUR prefixes.
Source text marks bold with <b>...</b>, so headings are visible. Ignore page markers, credit lines and image markers. Figure captions appear in the text; describe figures only from captions (you may view a named PNG to understand a figure).
Each job writes ONE part: `({title, sections})`.
Overlap source: JOBs A and B use /home/claude/pdfsrc/ch33-9-clean.txt; JOBs C and D use /home/claude/pdfsrc/ch33-10-clean.txt.

## JOB A (ch33-9): source /home/claude/ch33-9work/src/s1.txt (about 1,300 words); optional images /home/claude/pdfsrc/p3132.png (Figure 33-33), /home/claude/pdfsrc/p3134.png (Figure 33-34)
Write /home/claude/ch33-9work/g1.js + c1.js; part "Recording the EEG and the normal tracing"
  s339-eeg    | eg | Section opening; electroencephalography: what it records and when it is used
  s339-place  | pl | Electrode placement (Figure 33-33); activated EEG (activation procedures)
  s339-normal | nm | Normal EEG tracing: awake EEG and the four basic waveforms (Figure 33-34); sleep EEG
  hy ids hy339-01 to hy339-03; tags: EEG basics | Recording and activation | Normal waking and sleep EEG

## JOB B (ch33-9): source /home/claude/ch33-9work/src/s2.txt (about 1,100 words, with Tables 33-8 to 33-12 as text); optional image /home/claude/pdfsrc/p3139.png (Figure 33-35)
Write /home/claude/ch33-9work/g2.js + c2.js; part "Abnormal EEG, QEEG and evoked potentials"
  s339-abn   | ab | EEG abnormalities; warning signs of covert medical or organic factors (Table 33-8); common EEG abnormalities (Table 33-9)
  s339-drug  | dr | EEG alterations with medication and drugs (Table 33-10)
  s339-dis   | ds | EEG alterations in medical disorders (Table 33-11) and psychiatric disorders (Table 33-12)
  s339-qeeg  | qe | Topographic quantitative EEG (Figure 33-35); cerebral evoked potentials
  hy ids hy339-04 to hy339-07; tags: EEG abnormalities | Drugs and the EEG | EEG in medical and psychiatric disorders | QEEG and evoked potentials

## JOB C (ch33-10): source /home/claude/ch33-10work/src/s1.txt (about 1,300 words); optional images /home/claude/pdfsrc/p3143.png (Figure 33-36), /home/claude/pdfsrc/p3146.png (Figure 33-37)
Write /home/claude/ch33-10work/g1.js + c1.js; part "Circadian rhythms and sleep"
  s3310-clock | ck | Section opening: circadian rhythms, the clock and its properties
  s3310-sleep | sl | Sleep and circadian rhythms: sleep regulation (Figure 33-36)
  s3310-csd   | cs | Circadian sleep disorders (Figure 33-37)
  hy ids hy3310-01 to hy3310-03; tags: The circadian clock | Sleep regulation | Circadian sleep disorders

## JOB D (ch33-10): source /home/claude/ch33-10work/src/s2.txt (about 1,800 words)
Write /home/claude/ch33-10work/g2.js + c2.js; part "Seasonality, aging and treatment timing"
  s3310-season | se | Seasonality; melatonin and seasonality
  s3310-human  | hu | Seasonality in humans
  s3310-aging  | ag | Effect of aging
  s3310-rx     | rx | Circadian rhythms and pharmacotherapy
  hy ids hy3310-04 to hy3310-07; tags: Seasonality and melatonin | Seasonality in humans | Aging and the clock | Circadian rhythms and drugs
