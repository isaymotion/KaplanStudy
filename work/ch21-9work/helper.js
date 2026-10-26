  {
    id: "sexmed",
    chapter: "ch21-9",
    title: "Choosing a drug for a sexual problem",
    summary: "Start from the problem (erectile dysfunction, antidepressant-related dysfunction, priapism or low desire in women) and the patient's risks to reach the drug and its key precautions from section 21.9.",
    caution: "A teaching aid built from section 21.9 and its post-publication updates, not a substitute for clinical judgment and current labeling. Look for medical, psychological, relationship and medication causes first.",
    start: "problem",
    nodes: {
      problem: {
        q: "What is the problem?",
        options: [
          { label: "An erection lasting more than 4 hours", note: "Prolonged erection is an emergency.", to: "r:priapism" },
          { label: "Erectile dysfunction", note: "PDE-5 inhibitors are first line, after safety screening.", to: "nitrate" },
          { label: "Sexual dysfunction from an SSRI or other serotonergic antidepressant", note: "Antidepressant effects have specific strategies.", to: "r:ssri" },
          { label: "Low sexual desire in a premenopausal woman", note: "Two drugs are approved since the book.", to: "hsdd" }
        ]
      },
      nitrate: {
        q: "Does he use nitrates in any form (including amyl nitrite poppers) or riociguat?",
        options: [
          { label: "Yes", note: "PDE-5 inhibitors are contraindicated with nitrates, poppers and riociguat.", to: "r:nonitrate" },
          { label: "No", note: "Next check cardiac risk.", to: "cardiac" }
        ]
      },
      cardiac: {
        q: "Prior MI or stroke, renal failure, hypertension, diabetes, or older than 70?",
        options: [
          { label: "Yes", note: "Sexual activity stresses the heart; a medical review comes first.", to: "r:cardiac" },
          { label: "No", note: "Choose by timing and preference.", to: "style" }
        ]
      },
      style: {
        q: "What does he want from the drug?",
        options: [
          { label: "Occasional use, timed before sex", note: "Short-acting PDE-5 inhibitors are taken about an hour before.", to: "r:sildenafil" },
          { label: "A long window or daily dosing for spontaneity", note: "Tadalafil acts up to 36 hours or can be taken daily.", to: "r:tadalafil" },
          { label: "Older than 65, cirrhosis, severe renal impairment, or a CYP3A4 inhibitor", note: "Higher drug levels call for a lower start.", to: "r:lowstart" }
        ]
      },
      hsdd: {
        q: "Which treatment pattern does she prefer?",
        options: [
          { label: "A nightly pill, and she can avoid alcohol near bedtime", note: "Flibanserin is taken every night.", to: "r:flibanserin" },
          { label: "An as-needed treatment before sex", note: "Bremelanotide is injected before sexual activity.", to: "r:bremelanotide" }
        ]
      }
    },
    results: {
      priapism: { label: "Do now", dx: "Emergency treatment of priapism", line: "Intracavernosal phenylephrine (a nearly pure α-agonist) is first line, with or without aspiration and irrigation.", points: ["Book: 1,000 µg in 10 mL saline, 0.3 to 0.5 mL every 10 to 15 minutes; post-publication guideline: 100 to 500 µg every 3 to 5 minutes.", "Monitor vital signs; compress the site; involve urology early.", "Review causes such as trazodone, α1-blocking antipsychotics and erectile drugs."], link: { ch: "ch21-9", sec: "s219-priapism", label: "Treating priapism" } },
      nonitrate: { label: "Avoid", dx: "No PDE-5 inhibitor", line: "Nitrates, amyl nitrite poppers and riociguat with a PDE-5 inhibitor can cause precipitous hypotension, MI and death.", points: ["Discuss alternatives with cardiology or urology.", "If a nitrate is needed after tadalafil, wait at least 48 hours (label)."], link: { ch: "ch21-9", sec: "s219-cardiac", label: "Cardiac risk and nitrates" } },
      cardiac: { label: "First", dx: "Medical review before a PDE-5 inhibitor", line: "Discuss plans with an internist or cardiologist, addressing exercise tolerance and nitrate use.", points: ["Used as labeled, the drugs do not themselves raise the risk of death; intercourse adds cardiac stress.", "Yohimbine is no safer: avoid it in cardiac and renal disease."], link: { ch: "ch21-9", sec: "s219-cardiac", label: "Cardiac risk" } },
      sildenafil: { label: "Start", dx: "Sildenafil (or vardenafil)", line: "Sildenafil 50 mg about 1 hour before sex (25 to 100 mg), no more than once a day; vardenafil 10 mg (5 to 20 mg).", points: ["It needs sexual stimulation to work; a fatty meal delays it.", "Warn about headache, flushing, blue vision, and to seek care for vision or hearing loss or an erection over 4 hours.", "Post-publication: avanafil can act in about 15 minutes."], link: { ch: "ch21-9", sec: "s219-dose", label: "Dosing" } },
      tadalafil: { label: "Start", dx: "Tadalafil", line: "10 mg before sex (5 to 20 mg), effective up to 36 hours, or 2.5 to 5 mg once daily.", points: ["Back and muscle pain in about 10%.", "Wait at least 48 hours after the last dose before any nitrate."], link: { ch: "ch21-9", sec: "s219-dose", label: "Dosing" } },
      lowstart: { label: "Start low", dx: "Sildenafil 25 mg", line: "Levels are higher over 65, with cirrhosis or severe renal impairment, and with CYP3A4 inhibitors (erythromycin, ketoconazole, cimetidine).", points: ["Vardenafil and tadalafil doses also need adjustment in liver impairment and with potent CYP3A4 inhibitors."], link: { ch: "ch21-9", sec: "s219-int", label: "Drug interactions" } },
      ssri: { label: "Options", dx: "Manage antidepressant-related dysfunction", line: "Sildenafil reverses SSRI-induced anorgasmia in men and, in a 2008 RCT, helped women; yohimbine is a weaker option.", points: ["Other strategies: lower the dose, add bupropion, or switch to bupropion or mirtazapine (Chapter 21.2).", "Yohimbine (about 16 mg a day) raises anxiety and blood pressure, especially in panic disorder, and blocks clonidine."], link: { ch: "ch21-9", sec: "s219-ind", label: "Therapeutic indications" } },
      flibanserin: { label: "Option", dx: "Flibanserin", line: "Post-publication: 100 mg every night at bedtime for acquired, generalized hypoactive sexual desire disorder in premenopausal women.", points: ["Stop drinking at least 2 hours before the dose, or skip it: hypotension and syncope (boxed warning).", "Contraindicated with moderate or strong CYP3A4 inhibitors; stop if no benefit after 8 weeks."], link: { ch: "ch21-9", sec: "s219-women", label: "Low sexual desire in women" } },
      bremelanotide: { label: "Option", dx: "Bremelanotide", line: "Post-publication: self-injected at least 45 minutes before sex; no more than 1 dose in 24 hours or 8 a month.", points: ["Nausea in 40%; flushing; transient blood pressure rise."], link: { ch: "ch21-9", sec: "s219-women", label: "Low sexual desire in women" } }
    }
  }
