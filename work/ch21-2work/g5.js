({
  title: "Monoamine oxidase inhibitors",
  sections: [
    {
      id: "s212-maoi",
      title: "MAOI pharmacology and indications",
      blocks: [
        { type: "p", text: "MAOIs, introduced in the late **1950s**, were the **first antidepressant class**. Their antidepressant effect was found by chance in tuberculosis patients. Fear of **tyramine-induced hypertensive crisis** and the restrictive diet has always limited them, and after the SSRIs they became mainly a **treatment-resistant** option: their second-line status reflects **safety, not efficacy**." },
        { type: "update", title: "Correction: the first MAOI", text: "The book names **isoniazid**. The tuberculosis drug that turned out to be an antidepressant MAOI was its relative **iproniazid**; isoniazid itself is only a weak MAO inhibitor.", source: "Standard psychopharmacology histories" },
        { type: "defs", title: "The drugs", items: [
          ["Irreversible, nonselective", "**Phenelzine** (Nardil), **tranylcypromine** (Parnate), **isocarboxazid** (Marplan). Phenelzine and isocarboxazid are **hydrazines**."],
          ["MAO-B selective at low doses", "**Selegiline** (Eldepryl; transdermal **Emsam**) and **rasagiline** (Azilect); selegiline loses selectivity at higher doses."],
          ["Reversible MAO-A inhibitor (RIMA)", "**Moclobemide** (Manerix), available in most countries but **not the United States**. Brofaromine and befloxatone were never registered."]
        ] },
        { type: "defs", title: "Pharmacology", items: [
          ["Kinetics", "Phenelzine, tranylcypromine, isocarboxazid: peak within **2 hours**; plasma half-life **2 to 3 hours**, but because they **irreversibly** inactivate MAO, a single dose can act for up to **2 weeks**. Moclobemide half-life **0.5 to 3.5 hours** with a much briefer effect."],
          ["The enzymes", "MAO sits on the **outer mitochondrial membrane** and breaks down cytoplasmic and extraneuronal monoamines in brain, sympathetic nerves, **liver and gut**. **MAO-A** degrades **norepinephrine, serotonin and epinephrine**; **both A and B** degrade **dopamine and tyramine**."],
          ["Amphetamine-like", "**Phenelzine and tranylcypromine** resemble amphetamine and **release dopamine and norepinephrine**, with stimulant effects."]
        ] },
        { type: "defs", title: "Indications", items: [
          ["Depression", "Phenelzine beats TCAs in **atypical depression**: mood reactivity, **rejection sensitivity**, anergia (leaden paralysis), **hyperphagia and hypersomnia**. MAOIs may also beat TCAs in **bipolar depression**."],
          ["Anxiety", "**Panic disorder** and **social phobia** respond well."],
          ["Other", "Bulimia, PTSD, anginal pain, atypical facial pain, migraine, ADHD, idiopathic orthostatic hypotension, depression after traumatic brain injury."]
        ] }
      ]
    },
    {
      id: "s212-maoi-ae",
      title: "MAOI adverse effects and the tyramine reaction",
      blocks: [
        { type: "defs", items: [
          ["Most frequent", "**Orthostatic hypotension, insomnia, weight gain, edema, sexual dysfunction**."],
          ["Orthostasis", "Titrate cautiously. Avoid caffeine, drink 2 L a day, add salt, adjust antihypertensives, support stockings; severe cases **fludrocortisone 0.1 to 0.2 mg**. Divide **tranylcypromine** doses."],
          ["Insomnia", "Divide doses, nothing after dinner, a benzodiazepine hypnotic if needed."],
          ["Weight, edema, sexual", "Often resistant to treatment; may need a switch. Between MAOIs, stop the first for **10 to 14 days** before starting the second."],
          ["Paresthesias", "Myoclonus, muscle pain; paresthesias may reflect **pyridoxine deficiency** (give **50 to 150 mg** a day)."],
          ["Feeling drunk", "Confusion or feeling drunk suggests the dose is too high."],
          ["Liver", "Hepatotoxicity with hydrazines is uncommon; MAOIs are **less cardiotoxic and less epileptogenic** than TCAs."],
          ["Moclobemide", "Dizziness, nausea, insomnia; fewer GI effects than SSRIs; no anticholinergic, cardiovascular or sexual effects."],
          ["Cautions", "Renal or cardiovascular disease, **hyperthyroidism**; may change hypoglycemic needs. Can trigger **mania** in bipolar depression and **psychosis** in schizophrenia. Contraindicated in **pregnancy** (minimal data) and breastfeeding."]
        ] },
        { type: "callout", kind: "exam", title: "Why tyramine is dangerous", text: "Dietary **tyramine** is normally broken down by **intestinal and hepatic MAO**. With an MAOI, intact tyramine reaches the circulation and releases norepinephrine, a powerful **pressor** effect. Keep the diet for **2 weeks after the last dose** of an irreversible MAOI so the enzyme can be resynthesized. Also avoid **sympathomimetics** (ephedrine, pseudoephedrine) and **dextromethorphan**. Even **bee stings** can trigger a crisis." },
        { type: "defs", title: "Hypertensive crisis", items: [
          ["Symptoms", "Severe hypertension with **occipital headache, stiff neck**, sweating, nausea and vomiting. Seek emergency care."],
          ["Treatment in the book", "α-blockers: **phentolamine** or **chlorpromazine** (BP falls within 5 minutes); IV **furosemide** for fluid load; a **β-blocker** for tachycardia; sublingual **nifedipine 10 mg**, repeated after 20 minutes."],
          ["Contraindicated", "**Thyrotoxicosis** and **pheochromocytoma**."],
          ["RIMAs", "Lower risk: little MAO-B inhibition and MAO-A activity returns **16 to 48 hours** after the last dose. Avoid only high-tyramine foods, for 3 days after stopping; a practical rule is no tyramine **1 hour before to 2 hours after** a dose."],
          ["Spontaneous crisis", "A rare crisis without tyramine, usually soon after the first exposure; such patients should avoid MAOIs altogether."]
        ] },
        { type: "update", title: "Treatment check: sublingual nifedipine", text: "Sublingual **nifedipine** for hypertensive crises fell out of use after the mid-1990s, when reports of uncontrolled drops in blood pressure, **stroke and myocardial infarction** led to calls for a moratorium. Prefer titratable IV agents such as **phentolamine** in a monitored setting.", source: "Grossman E et al., Should a moratorium be placed on sublingual nifedipine capsules given for hypertensive emergencies and pseudoemergencies? JAMA, 1996" },
        { type: "table", caption: "Tyramine-rich foods (Table 21-22, abridged)", head: ["Content", "Examples"], wide: true, rows: [
          ["High (2 mg or more a serving)", "**Aged cheeses** (English Stilton, blue, old or extra-old cheddar, Danish blue, mozzarella, cheese spreads); cured and air-dried sausage, salami, mortadella, pâtés and organ meats; liqueurs and concentrated after-dinner drinks; **Marmite** (yeast extract); **sauerkraut**"],
          ["Moderate (0.5 to 1.99 mg)", "Gruyère, muenster, feta, parmesan, gorgonzola, blue cheese dressing; aged chicken liver, bologna, aged and smoked meats, salmon mousse; some beers and ales; Rioja red wine"],
          ["Low (under 0.5 mg)", "Brie, Camembert; pickled herring, smoked fish, kielbasa, fresh chicken liver, liverwurst; red wine, sherry, scotch; ripe banana and avocado, **banana peel**"]
        ] },
        { type: "callout", kind: "pearl", title: "Table footnotes worth knowing", text: "Any food left out to **age or spoil** can develop tyramine. **White wine, gin and vodka** contain none. Alcohol can cause marked **orthostasis** with MAOIs." },
        { type: "defs", title: "Withdrawal and overdose", items: [
          ["Withdrawal", "Abrupt stopping causes a self-limited syndrome of arousal, mood disturbance and somatic symptoms; taper over **several weeks**."],
          ["Overdose", "Symptoms start **1 to 6 hours** after ingestion: agitation progressing to coma, **hyperthermia**, hypertension, tachypnea, tachycardia, **dilated pupils**, hyperreflexia, involuntary **facial and jaw** movements. **Acidifying the urine** speeds excretion; dialysis may help; phentolamine or chlorpromazine for hypertension. **Moclobemide** overdose is relatively mild."]
        ] }
      ]
    },
    {
      id: "s212-maoi-int",
      title: "MAOI interactions and switching",
      blocks: [
        { type: "p", text: "Most antidepressants and precursors must be avoided. Patients should tell every physician and **dentist** that they take an MAOI. MAOIs potentiate CNS depressants such as alcohol and barbiturates. **SSRIs, clomipramine**, **lithium** or **tryptophan** with an MAOI can cause **serotonin syndrome** (tremor, hypertonicity, myoclonus, autonomic signs, then hallucinosis, hyperthermia, death). **Meperidine** and **fentanyl** with MAOIs have caused **fatal** reactions." },
        { type: "table", caption: "Drugs to avoid with MAOIs (Table 21-23, partial)", head: ["Never use", "Use carefully"], rowHeads: false, wide: true, rows: [
          ["Antiasthmatics; antihypertensives (methyldopa, guanethidine, reserpine); **buspirone**; **levodopa**", "Anticholinergics; antihistamines; disulfiram; bromocriptine; hydralazine"],
          ["**Opioids**, especially **meperidine, dextromethorphan**, propoxyphene, **tramadol** (morphine or codeine may be less dangerous)", "Sedative-hypnotics; terpin hydrate with codeine"],
          ["Cold, allergy or sinus medicines with dextromethorphan or **sympathomimetics**", "Tricyclics and tetracyclics (**avoid clomipramine**)"],
          ["**SSRIs, clomipramine, venlafaxine**, sibutramine; **L-tryptophan**", ""],
          ["Sympathomimetics: **amphetamines, cocaine, methylphenidate**, dopamine, epinephrine, norepinephrine, isoproterenol, ephedrine, pseudoephedrine, phenylpropanolamine", ""]
        ] },
        { type: "table", caption: "Washout rules", head: ["Switch", "Wait"], rows: [
          ["Irreversible MAOI → any antidepressant", "At least **14 days**"],
          ["Antidepressant → irreversible MAOI", "**10 to 14 days**; **5 weeks after fluoxetine**"],
          ["Venlafaxine → MAOI", "At least **7 days**"],
          ["MAOI → bupropion", "At least **14 days**"],
          ["One MAOI → another", "Taper and stop for **10 to 14 days**"],
          ["RIMA (moclobemide) → other drugs", "MAO activity recovers in **24 to 48 hours**"]
        ] },
        { type: "defs", items: [
          ["CYP effects", "Tranylcypromine inhibits **CYP2C19**. Moclobemide inhibits 2D6, 2C19 and 1A2 and is a 2C19 substrate; cimetidine and fluoxetine slow its elimination, although modest doses of fluoxetine and moclobemide together may be tolerated."],
          ["Laboratory", "MAOIs may **lower glucose**, falsely raise **urinary metanephrines** (false-positive for **pheochromocytoma** or neuroblastoma), and slightly raise thyroid tests."]
        ] }
      ]
    },
    {
      id: "s212-maoi-dose",
      title: "MAOI dosing",
      blocks: [
        { type: "table", caption: "MAOI preparations and doses (Table 21-24)", head: ["Drug", "Usual (mg/day)", "Maximum (mg/day)", "Form"], wide: true, rows: [
          ["Isocarboxazid (Marplan)", "20–40", "60", "10 mg tablets"],
          ["Phenelzine (Nardil)", "30–60", "90", "15 mg tablets"],
          ["Tranylcypromine (Parnate)", "20–60", "60", "10 mg tablets"],
          ["Rasagiline (Azilect)", "0.5–1", "1", "0.5 or 1 mg tablets"],
          ["Selegiline (Eldepryl)", "10", "30", "5 mg tablets"],
          ["Moclobemide (Manerix)", "300–600", "600", "100 or 150 mg tablets"]
        ] },
        { type: "defs", items: [
          ["Phenelzine", "Test dose **15 mg** on day 1; **15 mg three times daily** in week 1; then up **15 mg a day each week** to **90 mg** in divided doses by week 4."],
          ["Tranylcypromine and isocarboxazid", "Test dose **10 mg**, up to 10 mg three times daily by the end of week 1. Many recommend ceilings of **40 mg** (tranylcypromine) and **50 mg** (isocarboxazid). Small divided tranylcypromine doses lessen hypotension."],
          ["Choosing", "No rationale for choosing one irreversible MAOI over another."],
          ["Combinations", "MAOIs with TCAs, SSRIs or lithium are generally contraindicated but have been used with **extreme caution** in refractory depression."],
          ["Monitoring", "Periodic **liver tests**, especially with **phenelzine and isocarboxazid**."],
          ["Ages", "Older adults are more sensitive, but because MAO activity **rises with age**, doses are the same as for younger adults. Little is known in children."],
          ["Transdermal selegiline", "Has antidepressant properties; selective for MAO-B at low doses, less so at higher doses."]
        ] },
        { type: "update", title: "Correction: what Emsam is approved for", text: "The book says transdermal selegiline (**Emsam**, 2006) is used for parkinsonism. Emsam is approved for **major depressive disorder** in adults (6, 9 and 12 mg per 24 hours). At **6 mg/24 h** no tyramine diet is required; at 9 and 12 mg the diet is advised. It is contraindicated under age 12. Oral selegiline and rasagiline are Parkinson disease drugs.", source: "Emsam prescribing information" }
      ]
    }
  ]
})
