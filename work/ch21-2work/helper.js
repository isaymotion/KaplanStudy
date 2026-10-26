  {
    id: "antidepressant",
    chapter: "ch21-2",
    title: "Choosing an antidepressant",
    summary: "Start from the situation (a serotonergic or hypertensive emergency, pregnancy, postpartum depression, treatment resistance, or a first choice), then weigh the symptom or risk that matters most to reach a short list from section 21.2.",
    caution: "A teaching aid built from section 21.2 of the 12th edition, with post-publication updates marked. It does not replace a full assessment, current prescribing information or local guidelines. Ask about bipolar history before any antidepressant, and assess suicide risk.",
    start: "situation",
    nodes: {
      situation: {
        q: "Which situation are you in?",
        options: [
          { label: "Agitation, sweating, tremor, hyperreflexia or clonus after adding a serotonergic drug", to: "r:ss" },
          { label: "Severe headache and very high blood pressure in a patient on an MAOI", to: "r:crisis" },
          { label: "Dizziness, nausea and 'electric' sensations after stopping an antidepressant", to: "r:discont" },
          { label: "Pregnant, planning pregnancy or breastfeeding", to: "r:pregnancy" },
          { label: "Postpartum depression", to: "r:ppd" },
          { label: "No response to two or more adequate trials", to: "r:trd" },
          { label: "Choosing a first antidepressant", to: "priority" }
        ]
      },
      priority: {
        q: "What matters most for this patient?",
        help: "As classes the antidepressants are about equally effective; SSRIs are first line for simplicity and safety.",
        options: [
          { label: "Avoiding sexual side effects", to: "r:sexual" },
          { label: "Insomnia, poor appetite and weight loss, or an older patient", to: "r:mirt" },
          { label: "Avoiding weight gain or sedation, or wanting to stop smoking", to: "r:bup" },
          { label: "Neuropathic or chronic pain as well", to: "r:pain" },
          { label: "Prominent anxiety, panic, OCD or PTSD", to: "r:anxiety" },
          { label: "Heart disease, QT prolongation or overdose risk", to: "r:cardiac" },
          { label: "Taking many other drugs (interaction risk)", to: "r:interact" },
          { label: "Atypical features: reactive mood, rejection sensitivity, oversleeping, overeating", to: "r:atypical" }
        ]
      }
    },
    results: {
      ss: { label: "Emergency", dx: "Serotonin syndrome", line: "Serotonergic drugs combined (SSRI or SNRI with an MAOI, lithium, tryptophan, tramadol, triptans; MAOI with meperidine or fentanyl).", points: ["Progression: diarrhea, restlessness, agitation with hyperreflexia and autonomic instability, then myoclonus, seizures, hyperthermia, rigidity, coma.", "Stop the drugs and give supportive care; cyproheptadine, benzodiazepines and cooling can help.", "Distinguish from NMS, which follows antipsychotics and evolves over days with lead-pipe rigidity."], link: { ch: "ch21-2", sec: "s212-ssri-ae", label: "Serotonin syndrome" } },
      crisis: { label: "Emergency", dx: "Tyramine-induced hypertensive crisis", line: "MAOIs let dietary tyramine or sympathomimetics reach the circulation: occipital headache, stiff neck, sweating, nausea and vomiting.", points: ["Book: α-blockers such as phentolamine or chlorpromazine; IV furosemide; a β-blocker for tachycardia.", "Sublingual nifedipine, also in the book, is no longer recommended.", "Review diet (aged cheese, cured meats, Marmite, sauerkraut) and cold medicines."], link: { ch: "ch21-2", sec: "s212-maoi-ae", label: "Hypertensive crisis" } },
      discont: { label: "Most likely", dx: "Antidepressant discontinuation syndrome", line: "Most with short half-life drugs: paroxetine, fluvoxamine, venlafaxine, desvenlafaxine and duloxetine; usually after at least 6 weeks of use.", points: ["Restart the drug and taper more slowly; a few doses of fluoxetine can bridge.", "Usually resolves in about 3 weeks.", "TCAs cause cholinergic rebound; MAOIs cause arousal and mood symptoms."], link: { ch: "ch21-2", sec: "s212-ssri-ae", label: "Discontinuation" } },
      pregnancy: { label: "Weigh with the patient", dx: "Usually continue an SSRI other than paroxetine", line: "68% to 100% of women who stop or change antidepressants in pregnancy relapse.", points: ["Avoid paroxetine (first-trimester cardiac septal defects).", "Sertraline and escitalopram have the lowest breast-milk levels.", "Discuss persistent pulmonary hypertension (1 to 2 per 1,000) and neonatal adaptation; document the discussion.", "Post-publication: a 2025 FDA panel revisited SSRIs in pregnancy; no new class warning as of October 2026."], link: { ch: "ch21-2", sec: "s212-ssri-ind", label: "Pregnancy" } },
      ppd: { label: "Options", dx: "An SSRI, or a neurosteroid", line: "Postpartum depression responds to standard antidepressants; neurosteroids act within days.", points: ["Book: brexanolone, a 60-hour IV infusion (discontinued at the end of 2024).", "Post-publication: oral zuranolone 50 mg each evening with fatty food for 14 days; no driving for 12 hours after each dose.", "Screen for bipolar disorder and psychosis; postpartum psychosis is an emergency."], link: { ch: "ch21-2", sec: "s212-gaba", label: "Neurosteroids" } },
      trd: { label: "Next steps", dx: "Switch, augment, or use a rapid-acting agent", line: "Check adherence, dose, duration (about 6 weeks), diagnosis and substances first.", points: ["Another SSRI helps over half of SSRI nonresponders; then another class (SNRI, mirtazapine, TCA, MAOI) with proper washouts.", "Augment with lithium, liothyronine 25 to 50 µg, bupropion or mirtazapine, or an antipsychotic approved as an adjunct.", "Esketamine nasal spray in certified clinics (monotherapy since 2025), or ECT."], link: { ch: "ch21-2", sec: "s212-choose", label: "Choosing and switching" } },
      sexual: { label: "Short list", dx: "Bupropion or mirtazapine (nefazodone, vortioxetine less often)", line: "SSRIs and SNRIs cause sexual dysfunction in many patients; it rarely fades.", points: ["Bupropion has no serotonergic action and little sexual dysfunction.", "Mirtazapine and nefazodone also spare sexual function (nefazodone carries a liver warning).", "Post-publication: gepirone (2023) had sexual side effects like placebo but needs ECG monitoring."], link: { ch: "ch21-2", sec: "s212-bup", label: "Bupropion" } },
      mirt: { label: "Consider", dx: "Mirtazapine", line: "Sedating, increases appetite and relieves nausea through 5-HT3 blockade; well suited to older adults.", points: ["15 mg at bedtime, up to 45 mg.", "Watch weight, lipids and rare neutropenia.", "Trazodone at bedtime is an alternative for sleep (priapism warning)."], link: { ch: "ch21-2", sec: "s212-mirt", label: "Mirtazapine" } },
      bup: { label: "Consider", dx: "Bupropion", line: "No sedation, weight loss rather than gain, and approved for smoking cessation.", points: ["Avoid with seizure risk, bulimia or anorexia, severe anxiety or panic.", "Keep within dose limits; seizures rise with dose.", "Strong CYP2D6 inhibitor."], link: { ch: "ch21-2", sec: "s212-bup", label: "Bupropion" } },
      pain: { label: "Short list", dx: "Duloxetine, or a low-dose TCA", line: "Duloxetine was the first drug approved for diabetic neuropathic pain; TCAs (amitriptyline, nortriptyline 10 to 75 mg) are widely used.", points: ["Avoid duloxetine with heavy alcohol use or liver disease.", "Milnacipran is approved for fibromyalgia.", "TCAs need an ECG and are dangerous in overdose."], link: { ch: "ch21-2", sec: "s212-dulox", label: "Duloxetine" } },
      anxiety: { label: "Short list", dx: "An SSRI (or venlafaxine)", line: "SSRIs are approved for panic, social anxiety, OCD and PTSD (sertraline, paroxetine); venlafaxine for GAD, social anxiety and panic.", points: ["Start low in panic disorder (for example fluoxetine 5 mg or sertraline 25 mg).", "OCD needs higher doses and months; clomipramine is the TCA for OCD.", "Avoid bupropion in severe anxiety or panic."], link: { ch: "ch21-2", sec: "s212-ssri-ind", label: "SSRI indications" } },
      cardiac: { label: "Prefer", dx: "Sertraline or another SSRI (not citalopram at high dose)", line: "SSRIs have little cardiotoxicity; TCAs are contraindicated with conduction defects and are lethal in overdose.", points: ["Citalopram: maximum 40 mg, or 20 mg over age 60.", "Avoid TCAs with QTc above 450 ms; give small supplies to patients at risk of overdose.", "Venlafaxine raises blood pressure at higher doses."], link: { ch: "ch21-2", sec: "s212-ssri-ae", label: "Cardiac effects" } },
      interact: { label: "Prefer", dx: "Sertraline, citalopram, escitalopram or mirtazapine", line: "These have the fewest CYP interactions.", points: ["Avoid fluvoxamine (1A2 and 3A4), and fluoxetine, paroxetine and bupropion (2D6) when interactions matter.", "Nefazodone strongly inhibits 3A4 (triazolam, alprazolam).", "2D6 inhibitors block codeine and hydrocodone activation and may weaken tamoxifen."], link: { ch: "ch21-2", sec: "s212-ssri-pharm", label: "CYP interactions" } },
      atypical: { label: "Consider", dx: "An MAOI such as phenelzine, if SSRIs fail", line: "Phenelzine beats TCAs in atypical depression.", points: ["Teach the tyramine diet and the never-use drug list.", "Washouts: 14 days after an MAOI; 5 weeks after fluoxetine before one.", "Transdermal selegiline at 6 mg/24 h needs no diet (post-publication correction)."], link: { ch: "ch21-2", sec: "s212-maoi", label: "MAOIs" } }
    }
  }
