  {
    id: "sedrug",
    chapter: "ch21-10",
    title: "Treating a psychotropic side effect",
    summary: "Start from the side effect (dystonia, parkinsonism, akathisia, tardive dyskinesia, anticholinergic toxicity, hyperprolactinemia, sexual effects or weight gain) to reach the drug and its key precautions from section 21.10.",
    caution: "A teaching aid built from section 21.10 and its post-publication updates, not a substitute for clinical judgment and current labeling. Always consider lowering the dose or switching the causative drug first.",
    start: "se",
    nodes: {
      se: {
        q: "Which side effect needs treatment?",
        options: [
          { label: "Sudden muscle spasm of the neck, tongue, eyes or jaw (acute dystonia)", note: "Acute dystonia needs prompt parenteral treatment.", to: "larynx" },
          { label: "Tremor, rigidity, slowness, drooling (parkinsonism) or perioral tremor", note: "Parkinsonism has several equally effective options.", to: "parkpt" },
          { label: "Restlessness and inability to sit still (akathisia)", note: "Akathisia responds best to non-anticholinergic drugs.", to: "r:akathisia" },
          { label: "Late choreoathetoid movements (tardive dyskinesia)", note: "Anticholinergics do not help tardive dyskinesia.", to: "r:td" },
          { label: "Delirium, flushing, dry skin, dilated pupils, fever (anticholinergic toxicity)", note: "Anticholinergic toxicity is treated by stopping the drugs.", to: "r:toxic" },
          { label: "Amenorrhea, galactorrhea or high prolactin", note: "Dopamine agonists counter DRA hyperprolactinemia.", to: "r:prolactin" },
          { label: "Delayed orgasm, anorgasmia or fatigue on an SSRI", note: "Several add-ons are reported.", to: "r:sexual" },
          { label: "Weight gain on an antipsychotic or other psychotropic", note: "Weight gain has lifestyle and drug options.", to: "r:weight" }
        ]
      },
      larynx: {
        q: "Is there stridor or difficulty breathing (laryngeal dystonia)?",
        options: [
          { label: "Yes", note: "Laryngeal dystonia is a medical emergency.", to: "r:laryngeal" },
          { label: "No", note: "Standard parenteral anticholinergic or antihistamine treatment.", to: "r:dystonia" }
        ]
      },
      parkpt: {
        q: "Is the patient older or sensitive to anticholinergic effects (memory problems, glaucoma, prostate enlargement)?",
        options: [
          { label: "Yes", note: "Amantadine avoids anticholinergic burden.", to: "r:amantadine" },
          { label: "No", note: "Anticholinergics are the standard choice.", to: "r:anticholinergic" }
        ]
      }
    },
    results: {
      laryngeal: { label: "Do now", dx: "Benztropine up to 4 mg in 10 minutes, then lorazepam IV", line: "Laryngeal dystonia is a medical emergency: protect the airway.", points: ["Follow benztropine with lorazepam 1 to 2 mg slowly IV.", "Give prophylaxis afterward (4 to 8 weeks, then taper)."], link: { ch: "ch21-10", sec: "s2110-ac-dose", label: "Dosing anticholinergics" } },
      dystonia: { label: "Treat", dx: "Benztropine 1 to 2 mg IM (or diphenhydramine 25 to 50 mg IV)", line: "Repeat in 20 to 30 minutes if needed; if still no response, give a benzodiazepine (lorazepam 1 mg IM or IV).", points: ["Prophylaxis after one dystonia or in young men on high-potency DRAs, for 4 to 8 weeks.", "Consider switching to an SDA."], link: { ch: "ch21-10", sec: "s2110-ac-dose", label: "Acute dystonia" } },
      anticholinergic: { label: "Option", dx: "Benztropine 1 to 3 mg once or twice daily", line: "All anticholinergics are equally effective; alternatives are amantadine or diphenhydramine.", points: ["Lower the antipsychotic dose or switch to an SDA if possible.", "Stop after 4 to 8 weeks to reassess, tapering over 1 to 2 weeks.", "Avoid trihexyphenidyl if misuse is a concern."], link: { ch: "ch21-10", sec: "s2110-ac-ind", label: "Indications" } },
      amantadine: { label: "Option", dx: "Amantadine 100 mg twice daily", line: "As effective as anticholinergics for parkinsonism, akinesia and rabbit syndrome, with less memory impairment.", points: ["Check renal function: it is excreted unchanged and levels double in older adults.", "Watch for livedo reticularis, insomnia, seizures and psychosis.", "Not effective for tardive dyskinesia or akathisia."], link: { ch: "ch21-10", sec: "s2110-amant", label: "Amantadine" } },
      akathisia: { label: "Option", dx: "A β-blocker such as propranolol", line: "β-blockers, and perhaps benzodiazepines or clonidine, work better than anticholinergics; antihistamines are an alternative.", points: ["Lower the dose or switch the antipsychotic where possible.", "Amantadine does not help akathisia."], link: { ch: "ch21-10", sec: "s2110-ac-ind", label: "Akathisia" } },
      td: { label: "Option", dx: "A VMAT2 inhibitor (valbenazine or deutetrabenazine)", line: "Post-publication: approved for tardive dyskinesia in 2017; anticholinergics do not help and may worsen it.", points: ["See section 21.0 and section 25.3."], link: { ch: "ch21-0", sec: "s210-td", label: "Tardive dyskinesia" } },
      toxic: { label: "Do now", dx: "Stop all anticholinergic drugs; physostigmine only if severe", line: "Physostigmine 1 to 2 mg slowly IV with cardiac monitoring and life support available.", points: ["Avoid physostigmine with bradycardia, AV block or a wide QRS (tricyclic overdose).", "Antipsychotics are contraindicated in anticholinergic delirium; benzodiazepines are preferred for agitation (section 25.3)."], link: { ch: "ch21-10", sec: "s2110-ac-safety", label: "Anticholinergic intoxication" } },
      prolactin: { label: "Option", dx: "Switch the antipsychotic, or a dopamine agonist such as bromocriptine", line: "Dopamine agonists counteract DRA-induced amenorrhea and galactorrhea.", points: ["Start bromocriptine at 1.25 mg twice daily with meals.", "Watch for nausea, hypotension and worsening psychosis."], link: { ch: "ch21-10", sec: "s2110-da-ind", label: "Dopamine agonist indications" } },
      sexual: { label: "Options", dx: "Cyproheptadine, amantadine or sildenafil", line: "Cyproheptadine 4 to 16 mg 1 to 2 hours before sex; amantadine for SSRI fatigue or anorgasmia; sildenafil (section 21.9).", points: ["Cyproheptadine may blunt the antidepressant effect and causes sedation and weight gain.", "Ropinirole may also help antidepressant-induced dysfunction."], link: { ch: "ch21-10", sec: "s2110-ah", label: "Antihistamines" } },
      weight: { label: "Step up", dx: "Lifestyle, then metformin; consider topiramate or a GLP-1 receptor agonist", line: "Metformin has the best evidence in the book for antipsychotic weight gain, especially with clozapine and olanzapine.", points: ["Metformin 500 to 2,000 mg a day; check renal function and avoid alcohol.", "Post-publication: semaglutide (9.2 kg in schizophrenia, 2025) and liraglutide work; a 2026 meta-analysis ranked semaglutide first.", "Consider switching to a lower-risk antipsychotic; olanzapine–samidorphan limits olanzapine weight gain."], link: { ch: "ch21-10", sec: "s2110-wt-new", label: "Since the book: weight-loss drugs" } }
    }
  }
