({
hy: [
  { id: "hy4-tobacco", topic: "Tobacco", items: [
    "No tobacco **intoxication** diagnosis; withdrawal needs ≥4 symptoms.",
    "Withdrawal starts within **2 hours**, peaks **24–48 h**: craving, irritability, poor concentration, **↓HR and BP**, ↑appetite and **weight gain**.",
    "Set a **quit date**; follow up **2–3 days** after it.",
    "The 5 A's: **Ask, Advise, Assess, Assist, Arrange**.",
    "Behavior therapy is the best-proven psychological treatment; NRT + behavior therapy beats either alone.",
    "All NRT forms roughly **double** quit rates; use 6–12 weeks then taper.",
    "Gum: 2 mg (<25/day) or 4 mg; **no acidic drinks**; max 24/day.",
    "Nasal spray: closest to smoking; irritation in **>70%**.",
    "Bupropion **150 mg × 3 days → 150 mg BID**, start 1–2 weeks before quitting; avoid in **seizures, bulimia/anorexia, MAOIs**.",
    "Varenicline: **α4β2 partial agonist**; 0.5 mg → 1 mg BID; black box removed; small CV risk in heart disease.",
    "Schizophrenia **~90%**, bipolar ~70%, all psychiatric outpatients ~50% smoke.",
    "Only **5–10%** quit permanently per attempt; ~50% of ever-smokers eventually quit.",
    "**400,000+** US deaths/year (20%); ~30% of cancer deaths; lung cancer **15–30×**.",
    "Nicotine reaches brain in **15 seconds**; half-life ~**2 hours**; **60 mg** fatal.",
    "Teen **vaping** far exceeds cigarette smoking (21% of 12th graders)."
  ] },
  { id: "hy4-caffeine", topic: "Caffeine", items: [
    "Intoxication usually >**250 mg**; needs **≥5** symptoms; >1 g arrhythmias, tinnitus, rambling; >10 g seizures, death.",
    "Withdrawal in **50–75%**: **headache and fatigue**; starts **12–24 h**, peaks 24–48 h, gone within a week.",
    "Taper over **7–14 days** before procedures; **10% every few days** with a diary.",
    "Caffeine use disorder is in DSM-5 **Section III** (further study).",
    "Differential: GAD, panic, bipolar II, ADHD, **hyperthyroidism, pheochromocytoma**.",
    "Advise patients with **panic disorder** to avoid caffeine.",
    "Coffee **100–150 mg/cup**; tea ~⅓ of that; US mean ~300 mg/day.",
    "**Adenosine antagonist** → ↑cAMP; three cups occupy ~50% of receptors.",
    "Half-life **3–10 h**; peak 30–60 min.",
    "Smokers consume more caffeine; heritability **35–77%**.",
    "Caffeine causes cerebral **vasoconstriction**; rebound on withdrawal."
  ] }
],
dx: [
  { id: "d4-to01", tag: "Tobacco", q: "What are the symptoms of tobacco withdrawal?", a: "Intense **craving**, tension, **irritability**, poor concentration, drowsiness with insomnia, **decreased heart rate and BP**, increased appetite and **weight gain**." },
  { id: "d4-to02", tag: "Tobacco", q: "When does tobacco withdrawal begin and peak?", a: "Begins within **2 hours**, peaks at **24–48 hours**, lasts weeks to months." },
  { id: "d4-to03", tag: "Tobacco", q: "Why does tobacco dependence develop quickly?", a: "Nicotine activates the **VTA dopamine** system, like cocaine and amphetamine." },
  { id: "d4-to04", tag: "Tobacco", q: "What are the 5 A's of tobacco intervention?", a: "**Ask, Advise, Assess, Assist, Arrange**." },
  { id: "d4-to05", tag: "Tobacco", q: "What are the signs of low-dose nicotine toxicity?", a: "Nausea, vomiting, salivation, **pallor**, abdominal pain, diarrhea, dizziness, headache, hypertension, tachycardia, tremor, cold sweats." },
  { id: "d4-ca01b", tag: "Caffeine", q: "At what dose does caffeine intoxication generally occur?", a: "Above **250 mg**, with at least **five** symptoms." },
  { id: "d4-cf02", tag: "Caffeine", q: "What symptoms appear above 1 g of caffeine?", a: "**Rambling speech**, confused thinking, **arrhythmias**, inexhaustibility, agitation, **tinnitus**, light flashes." },
  { id: "d4-cf03", tag: "Caffeine", q: "What are the most common caffeine withdrawal symptoms?", a: "**Headache and fatigue**; also irritability, anxiety, mild depression, nausea, craving, muscle pain." },
  { id: "d4-cf04", tag: "Caffeine", q: "What is the time course of caffeine withdrawal?", a: "Begins **12–24 hours** after the last dose, peaks at **24–48 hours**, resolves within **1 week**." },
  { id: "d4-cf05", tag: "Caffeine", q: "Which medical conditions must be excluded in suspected caffeine-related anxiety?", a: "**Hyperthyroidism and pheochromocytoma** (and use of other stimulants)." },
  { id: "d4-cf06", tag: "Caffeine", q: "Where is caffeine use disorder in DSM-5?", a: "In **Section III**, conditions for further study." },
  { id: "d4-cf07", tag: "Caffeine", q: "What does caffeine-induced anxiety disorder resemble?", a: "**Generalized anxiety disorder**: wired, talkative, irritable, sleeping poorly; it can also trigger panic attacks." }
],
cs: [
  { id: "c4-to01", tag: "Tobacco", q: "A smoker with a history of bulimia nervosa wants a non-nicotine medication to quit. Which drug should be avoided?", choices: ["Varenicline", "Bupropion", "Nicotine patch", "Nortriptyline", "Nicotine gum"], answer: 1, why: "Bupropion is contraindicated with current or past bulimia or anorexia because of seizure risk." },
  { id: "c4-to02", tag: "Tobacco", q: "A patient using nicotine gum drinks coffee while chewing it and reports no benefit. Why?", choices: ["Coffee speeds nicotine metabolism", "Acidic drinks reduce buccal nicotine absorption", "Caffeine blocks nicotinic receptors", "The gum dose is too high", "Gum works only with a patch"], answer: 1, why: "Avoid coffee, tea, soda and juice before, during and after gum use because they reduce absorption." },
  { id: "c4-to03", tag: "Tobacco", q: "A patient on the 24-hour nicotine patch complains of vivid dreams and trouble sleeping. What change helps?", choices: ["Stop all treatment", "Switch to a 16-hour patch removed at bedtime", "Add bupropion at night", "Double the patch dose", "Switch to snuff"], answer: 1, why: "Insomnia is a known effect of 24-hour wear; a 16-hour patch avoids nighttime nicotine." },
  { id: "c4-to04", tag: "Tobacco", q: "How does varenicline differ from nicotine replacement?", choices: ["It is a full nicotinic agonist", "As an α4β2 partial agonist it eases withdrawal and blocks nicotine's reward", "It is a dopamine reuptake inhibitor", "It is an opioid antagonist", "It works only as a behavioral substitute"], answer: 1, why: "Varenicline relieves craving and withdrawal and reduces the reinforcing effect of smoking." },
  { id: "c4-to05", tag: "Tobacco", q: "A smoker sets a quit date for Monday. When should the first follow-up occur?", choices: ["In 1 month", "2–3 days after the quit date", "Only if she relapses", "In 6 months", "The day before"], answer: 1, why: "Relapse is rapid, so contact 2–3 days after the quit date (at least within the first week)." },
  { id: "c4-to06", tag: "Tobacco", q: "Why might patients with schizophrenia smoke so heavily?", choices: ["Nicotine cures hallucinations", "Nicotine may reduce sensory overload and improve concentration", "Antipsychotics require nicotine", "Smoking is required on wards", "No reason is proposed"], answer: 1, why: "Up to 90% smoke, possibly to dampen sensitivity to stimuli and improve concentration." },
  { id: "c4-cf01", tag: "Caffeine", q: "A woman has afternoon 'anxiety attacks' with flushing, sweating and pressured speech after six to seven cups of coffee each morning. What is the likely diagnosis?", choices: ["Panic disorder", "Caffeine intoxication", "Bipolar II hypomania", "Pheochromocytoma", "GAD"], answer: 1, why: "Restlessness, flushing, sweating and rapid speech after heavy coffee intake fit caffeine intoxication." },
  { id: "c4-cf02", tag: "Caffeine", q: "A coffee drinker is told to stop caffeine before colonoscopy. What should be advised?", choices: ["Stop abruptly the night before", "Taper over 7–14 days", "Switch to energy drinks", "Take a benzodiazepine for a month", "No change is needed"], answer: 1, why: "Taper over 7–14 days to avoid iatrogenic caffeine withdrawal." },
  { id: "c4-cf03", tag: "Caffeine", q: "A man gets headaches, fatigue and poor concentration every Saturday and Sunday but feels fine at work. He drinks five cups of coffee on weekdays only. What is the cause?", choices: ["Weekend depression", "Caffeine withdrawal", "Migraine with aura", "Hypothyroidism", "Sleep apnea"], answer: 1, why: "Withdrawal begins 12–24 hours after the last dose with headache and fatigue." },
  { id: "c4-cf04", tag: "Caffeine", q: "A patient wants to cut down on caffeine. What is the first step?", choices: ["Stop all caffeine today", "A daily diary to measure intake and sources", "Start a benzodiazepine", "Switch to tea", "Order a sleep study"], answer: 1, why: "A food diary establishes the true daily dose before a 10%-every-few-days taper." }
],
ph: [
  { id: "p4-to01", tag: "Tobacco", q: "What is the bupropion schedule for smoking cessation?", a: "**150 mg/day for 3 days**, then **150 mg twice daily**; start 1–2 weeks before the quit date; continue 6–12 weeks (up to 6 months)." },
  { id: "p4-to02", tag: "Tobacco", q: "What is the varenicline titration?", a: "0.5 mg daily (days 1–3), 0.5 mg twice daily (days 4–7), then **1 mg twice daily**." },
  { id: "p4-to03", tag: "Tobacco", q: "What is varenicline's current safety status?", a: "Neuropsychiatric black box **removed**; small increased **cardiovascular** risk in people with heart disease." },
  { id: "p4-to04", tag: "Tobacco", q: "How is nicotine gum dosed?", a: "**2 mg** if under 25 cigarettes/day, **4 mg** if over; 1–2 pieces an hour, **maximum 24** a day." },
  { id: "p4-to05", tag: "Tobacco", q: "Which nicotine replacement gives the highest nicotine levels, and which most resembles smoking?", a: "**Lozenges** give the highest levels; **nasal spray** most resembles smoking kinetics." },
  { id: "p4-to06", tag: "Tobacco", q: "What is the main asset of the nicotine inhaler?", a: "A **behavioral substitute** for smoking; nicotine is absorbed in the throat at low levels." },
  { id: "p4-to07", tag: "Tobacco", q: "Which antidepressant besides bupropion may help smoking cessation?", a: "**Nortriptyline**." },
  { id: "p4-cf01", tag: "Caffeine", q: "How are caffeine withdrawal symptoms treated?", a: "**Aspirin** or other analgesics; benzodiazepines rarely, in small doses for **7–10 days** at most." },
  { id: "p4-cf02", tag: "Caffeine", q: "How much caffeine do OTC stimulant tablets contain?", a: "**100–200 mg** per tablet, more than a cup of coffee." }
],
fd: [
  { id: "f4-to01", tag: "Tobacco", q: "How does nicotine act in the brain?", a: "As an **agonist at nicotinic acetylcholine receptors**, activating VTA dopamine projections." },
  { id: "f4-to02", tag: "Tobacco", q: "How fast does nicotine reach the brain and what is its half-life?", a: "Within **15 seconds**; half-life about **2 hours**." },
  { id: "f4-to03", tag: "Tobacco", q: "What is a fatal dose of nicotine?", a: "About **60 mg** (respiratory paralysis); a cigarette delivers about 0.5 mg." },
  { id: "f4-to04", tag: "Tobacco", q: "How many US deaths does tobacco cause yearly?", a: "Over **400,000** (20% of deaths); smokers die about 10 years earlier." },
  { id: "f4-to05", tag: "Tobacco", q: "What fraction of cancer deaths is caused by tobacco?", a: "Nearly **30%**; lung cancer risk is 15–30 times higher." },
  { id: "f4-to06", tag: "Tobacco", q: "What fraction of the population develops tobacco dependence?", a: "About **20%**; 85% of daily smokers are dependent." },
  { id: "f4-to07", tag: "Tobacco", q: "What reduces smoking initiation?", a: "**Increased taxation**; school programs are only mildly effective." },
  { id: "f4-to08", tag: "Tobacco", q: "What are the pregnancy effects of smoking?", a: "**Low birth weight** and persistent pulmonary hypertension of the newborn; quitting by 3–4 months restores normal risk." },
  { id: "f4-cf01", tag: "Caffeine", q: "How does caffeine act?", a: "As an **adenosine receptor antagonist**, raising intraneuronal cAMP." },
  { id: "f4-cf02", tag: "Caffeine", q: "What are caffeine's half-life and time to peak?", a: "Half-life **3–10 hours**; peak **30–60 minutes**." },
  { id: "f4-cf03", tag: "Caffeine", q: "How much caffeine is in a cup of coffee and how much do US adults consume?", a: "**100–150 mg** per cup; mean intake about **300 mg/day**." },
  { id: "f4-cf04", tag: "Caffeine", q: "How heritable is caffeine use?", a: "**35–77%**; a shared polysubstance factor links caffeine, tobacco and alcohol." },
  { id: "f4-cf05", tag: "Caffeine", q: "How does caffeine affect cerebral blood flow?", a: "**Vasoconstriction** without tolerance, with rebound increase on withdrawal." }
]
})
