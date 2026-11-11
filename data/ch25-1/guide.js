/* Chapter 25.1 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., section 25.1. */
KS.add("ch25-1", "guide", {
  "intro": "Section 25.1 covers consultation-liaison (C-L) psychiatry, once called psychosomatic medicine: its history and names, the problems it handles (Table 25-1), how a C-L evaluation and treatment differ from ordinary practice, the common referral problems, work in ICUs and dialysis units, urgent causes of delirium (Table 25-2), surgery and transplantation, and psycho-oncology. Update boxes add capacity versus competence, ICU delirium guidelines, thiamine and glucose, the boxed warning on antipsychotics in dementia, and the failed replication of the group-therapy survival result.",
  "objectives": [
    "Describe what C-L psychiatry covers and how its evaluation differs from a standard assessment.",
    "Choose psychiatric drugs safely in medically ill patients.",
    "Work up common referral problems: suicide risk, agitation, hallucinations, insomnia, confusion, refusal and unexplained symptoms.",
    "Recognize urgent medical causes of delirium from history and examination clues.",
    "Describe the psychiatric issues of ICUs, dialysis, surgery and transplantation.",
    "Summarize the psychiatric side of cancer care."
  ],
  "parts": [
    {
      "title": "Consultation-liaison psychiatry: role and methods",
      "sections": [
        {
          "id": "s251-intro",
          "title": "What C-L psychiatry is: names, history, trends and clinical problems",
          "blocks": [
            {
              "type": "p",
              "text": "**Consultation-liaison (C-L) psychiatry**, long called **psychosomatic medicine**, is the part of psychiatry that cares for mental illness arising in the middle of physical health care. It has been a defined area of interest for **more than 50 years**. The word psychosomatic joins two Greek roots: **psyche (soul)** and **soma (body)**. It describes the way the mind acts on the body."
            },
            {
              "type": "h",
              "text": "Why the name changed"
            },
            {
              "type": "p",
              "text": "Among the public, \"psychosomatic\" drifted to mean a person whose physical complaints have no bodily cause, as if the illness were imaginary. Partly for this reason the professional names moved away from it."
            },
            {
              "type": "table",
              "caption": "Name changes in the field",
              "head": [
                "Year",
                "Body",
                "Change"
              ],
              "rows": [
                [
                  "Earlier (DSM)",
                  "DSM",
                  "Dropped **psychophysiological (psychosomatic) disorders**; used **psychological factors affecting physical conditions** instead"
                ],
                [
                  "2003",
                  "**American Board of Medical Specialties** and **American Board of Psychiatry and Neurology (ABPN)**",
                  "Approved **Psychosomatic Medicine** as a specialty"
                ],
                [
                  "2005",
                  "ABPN",
                  "Gave the **first subspecialty examination**"
                ],
                [
                  "2017",
                  "Same two boards",
                  "Renamed the specialty **Consultation-Liaison psychiatry**"
                ],
                [
                  "2018",
                  "Academy of Psychosomatic Medicine",
                  "Became the **Academy of Consultation-Liaison Psychiatry**"
                ]
              ],
              "note": "DSM-5-TR wording is \"psychological factors affecting other medical conditions\"."
            },
            {
              "type": "p",
              "text": "The older word survives in research. It appears in journal titles such as **Psychosomatic Medicine** plus the **Journal of Psychosomatic Research**, in the **American Psychosomatic Society**, and internationally in the **European Association for C-L Psychiatry and Psychosomatics**."
            },
            {
              "type": "h",
              "text": "History"
            },
            {
              "type": "defs",
              "title": "People to know",
              "items": [
                [
                  "**Edward Shorter**",
                  "Historian of psychosomatic illness. Patients **unconsciously choose symptoms** that their era accepts as real bodily disease, so presentations **change over time**."
                ],
                [
                  "Before **1800**",
                  "Doctors did no clinical examinations and **could not separate somatic from psychogenic** illness, so **hysteria** and **hypochondriasis** were often labeled in people with real disease and pointed to no specific illness."
                ],
                [
                  "**Sigmund Freud**",
                  "Brought psyche and soma together; showed emotions can produce mental and bodily disorders; early analytic work on **psychic determinism** in **somatic conversion reactions**."
                ],
                [
                  "**Sándor Ferenczi (1926)**",
                  "Extended conversion to organs run by the **autonomic nervous system**."
                ],
                [
                  "**Karl Abraham (1927)**",
                  "Proposed that **unresolved pregenital impulses** affect adult organ tissue."
                ],
                [
                  "**Georg Groddeck (1929)**",
                  "Gave **symbolic meaning** to **fever and hemorrhage**."
                ],
                [
                  "**George W. Henry**",
                  "Wrote about C-L work as practiced in the **United States** during the **1920s**."
                ],
                [
                  "**Thure von Uexküll**",
                  "German pioneer; saw psychosomatic medicine as **central to all medical disease**, which is **multifactorial** (organic plus psychological), not just a psychiatric subspecialty."
                ]
              ]
            },
            {
              "type": "p",
              "text": "In the US, academic departments built **C-L divisions** and **fellowships**. In **Europe**, most psychosomatic medicine departments are **separate from psychiatry departments**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Dates in order",
              "text": "Ferenczi **1926**, Abraham **1927**, Groddeck **1929**. Specialty approved **2003**, first board exam **2005**, renamed C-L psychiatry **2017**, Academy renamed **2018**."
            },
            {
              "type": "h",
              "text": "Current trends"
            },
            {
              "type": "p",
              "text": "The field now centers on psychiatric illness **within physical health care settings**. Three forces drove this: medicine grew **more complex**, links between medical and psychiatric illness became **better understood**, and mind and body came to be seen **as one**. Care happens in many settings, with growing diagnostic tools and effective somatic and psychotherapeutic treatments. Research looks at **pathophysiologic links**, the **epidemiology of comorbidity**, and how treatments change **physiologic, clinical and economic outcomes**."
            },
            {
              "type": "table",
              "caption": "Kinds of clinical problems in psychosomatic medicine (see Table 25-1)",
              "head": [
                "Kind of problem",
                "Example"
              ],
              "rows": [
                [
                  "Psychiatric symptoms **caused by** a medical condition",
                  "**Delirium**, **dementia**"
                ],
                [
                  "Psychiatric symptoms as a **reaction** to illness or treatment",
                  "Anxiety around **chemotherapy**; depression after **limb amputation**"
                ],
                [
                  "Psychiatric **complications** of illness or treatment",
                  "Depression from **interferon**"
                ],
                [
                  "Psychological factors **bringing on** bodily symptoms",
                  "The **somatic symptom and related disorders**"
                ],
                [
                  "**Medical** problems caused by psychiatric illness or its treatment",
                  "**Neuroleptic malignant syndrome**; acute **alcohol or other substance withdrawal**"
                ],
                [
                  "Medical and psychiatric illness **occurring together**",
                  "Depression **recurring** during cancer treatment (independent conditions); **schizophrenia** with **end-stage renal disease**"
                ],
                [
                  "Psychiatric or psychosocial **assessment**",
                  "**Capacity evaluation**; **pre-transplant** evaluation"
                ]
              ]
            },
            {
              "type": "h",
              "text": "How common, and why it matters"
            },
            {
              "type": "list",
              "items": [
                "Psychiatric illness affects **20 to 67 percent** of medically ill patients, by illness and setting.",
                "**General hospital** inpatients have the **highest** rates, above community and ambulatory primary care samples; rates are also raised in primary and long-term care.",
                "Versus the community, hospital **depression** is **more than twice** as common and **substance abuse** **two to three times** more frequent.",
                "**Delirium** affects **18 percent** of patients.",
                "**Depression** both **raises the risk** of **coronary artery disease** and signals a **poorer prognosis** in it.",
                "Psychiatric illness raises cardiac morbidity and mortality **after myocardial infarction**, worsens **glycemic control** in diabetes and slows **return to function after stroke**; depression and anxiety add to stroke disability.",
                "In **Parkinson's** and **Alzheimer's** disease, depression, psychosis and behavior problems predict **functional decline**, **institutionalization** and **caregiver burden**.",
                "Inpatients with **delirium** recover function less often; delirium predicts **worse surgical outcomes** even **after adjusting for illness severity**.",
                "Mental illness lowers **quality of life** and **treatment adherence** (for example in diabetes or cancer).",
                "In **HIV**, psychiatric illness is tied to poor **antiretroviral adherence** (lower survival) and, in people who inject drugs, to ignoring **safe sex** and **sterile needle** advice, a **public health** issue."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Treating the mind protects the body",
              "text": "Psychiatric illness is not a side issue on a medical ward. It **worsens the medical illness itself** (cardiac death, blood sugar, stroke recovery, HIV survival), so treating it is part of treating the medical disease."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Watch your words",
              "text": "Telling a patient a symptom is \"psychosomatic\" can sound like \"**all in your head**\". That lay meaning is the reason the professional names changed."
            }
          ]
        },
        {
          "id": "s251-eval",
          "title": "The evaluation process in psychosomatic medicine",
          "blocks": [
            {
              "type": "p",
              "text": "A C-L assessment is a **standard psychiatric assessment** with extra weight on the **medical history** and the **context of physical care**. The patient is medically ill, often on many treatments, and the question usually comes from another team."
            },
            {
              "type": "steps",
              "title": "Parts of the C-L evaluation",
              "items": [
                [
                  "Psychiatric history",
                  "A **complete** history: past and **family history**, **development**, and a **systems review**."
                ],
                [
                  "Medical history",
                  "Review and **document** the medical history and **current treatment**."
                ],
                [
                  "Mental status",
                  "A **full mental status examination** that **includes a cognitive examination**."
                ],
                [
                  "Neurologic and physical exam",
                  "Parts of these **may be indicated**, depending on the presenting problem."
                ],
                [
                  "Illness experience",
                  "Learn how the patient **experiences the illness**. Often this becomes the **main focus** of both assessment and treatment."
                ],
                [
                  "Report",
                  "Write a **full report** that pulls the data together, with **specific recommendations** for more evaluation and treatment."
                ],
                [
                  "Talk to the referrer",
                  "Ideally, **discuss the report with the referring physician**."
                ]
              ]
            },
            {
              "type": "h",
              "text": "Understanding the illness experience"
            },
            {
              "type": "p",
              "text": "Knowing the patient's **personal and developmental background** and core **dynamic conflicts** can make their reaction to illness easier to understand. Useful lenses include **coping strategies**, **defense mechanisms**, **stress** and **personality traits**."
            },
            {
              "type": "p",
              "text": "The ideas you form serve two purposes. They guide **psychotherapy** aimed at **reducing distress**, and they help the **primary medical team** in how they deal with the patient day to day."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Do not skip cognition",
              "text": "In the medical setting the mental status examination must include a **cognitive examination**. Delirium and dementia are among the most common reasons for a C-L call."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "The illness experience is the core",
              "text": "Ask what the illness means to the patient. Frequently the **patient's experience of illness** is the real problem behind the referral and the real target of treatment."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "A note is not enough",
              "text": "Leaving recommendations in the chart without speaking to the team weakens the consult. The ideal is a **written synthesis plus a conversation** with the referring physician."
            },
            {
              "type": "case",
              "title": "Mr. R, a difficult patient after a heart attack",
              "text": "A 58-year-old man recovering from a myocardial infarction argues with nurses and skips cardiac rehabilitation. The team asks for help with a \"difficult patient\". The consultant takes a full psychiatric and medical history, does a mental status and cognitive exam, and learns that he sees being dependent on others as humiliating.",
              "point": "Understanding the patient's **experience of illness** and his coping style explains the behavior. Sharing this with the team, alongside a written report, changes how they approach him."
            }
          ]
        },
        {
          "id": "s251-tx",
          "title": "Treatments used in psychosomatic medicine",
          "blocks": [
            {
              "type": "p",
              "text": "Many treatments work well in psychosomatic medicine. Two things set C-L treatment apart: medicines must be chosen **around the medical illness and its treatments**, and **psychotherapy** is vital but may differ in **structure and outcomes** from therapy in ordinary mental health practice."
            },
            {
              "type": "h",
              "text": "Choosing a psychiatric drug in a medically ill patient"
            },
            {
              "type": "list",
              "title": "Weigh all of these",
              "items": [
                "The patient's **active target symptoms**.",
                "Past **illness and treatment history**.",
                "The **side-effect profile** of the drug.",
                "**Drug-drug interactions** with the medical regimen.",
                "**Contraindications** to the psychiatric agent.",
                "**Liver function**, because **most psychiatric drugs are metabolized in the liver**.",
                "General risks: **weight gain**, **diabetes risk** and **cardiovascular risk**.",
                "**Recent evidence** on benefit and specific risk in patients with both psychiatric and physical illness."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Liver first",
              "text": "Since **most psychiatric medicines are cleared by the liver**, check **liver function** before and while prescribing in the medically ill."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Antipsychotics in dementia",
              "text": "Better knowledge of antipsychotic side effects has raised **concern about using antipsychotics in patients with dementia**. Weigh this before using them for behavior problems."
            },
            {
              "type": "h",
              "text": "Psychosocial treatment"
            },
            {
              "type": "p",
              "text": "Psychosocial methods also need **adapting** for medically ill people. Both the **methods** and the **goals** are shaped by the disease's **onset, cause, course, prognosis and treatment**, by the **nature of the psychiatric symptoms**, and by the patient's **coping skills** and **social support network**."
            },
            {
              "type": "p",
              "text": "There are **ample data** that psychosocial treatments help with a range of defined problems and, in many cases, go along with **positive clinical outcomes**."
            },
            {
              "type": "table",
              "caption": "Medication versus psychosocial treatment in the medically ill",
              "head": [
                "Aspect",
                "Medication",
                "Psychosocial treatment"
              ],
              "rows": [
                [
                  "Extra factors",
                  "Interactions, contraindications, **liver function**, weight, diabetes and cardiac risk",
                  "Disease **onset, cause, course, prognosis, treatment**"
                ],
                [
                  "Patient factors",
                  "Target symptoms, past response",
                  "**Coping skills**, **social support**"
                ],
                [
                  "Evidence",
                  "Use **current data** on risks in comorbid patients",
                  "**Ample data** of effectiveness"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Same drug, different patient",
              "text": "A drug that is routine in clinic may be risky on a medical ward. Always ask what the **medical illness and its treatments** change about the choice."
            },
            {
              "type": "case",
              "title": "Mrs. T, depressed with liver disease",
              "text": "A 62-year-old woman with cirrhosis and diabetes is depressed after a long admission. The team wants an antidepressant. The consultant reviews her liver tests, her diabetes and her medication list for interactions before choosing an agent, and suggests supportive therapy built around her limited family support.",
              "point": "In C-L work, drug choice depends on **liver function**, **interactions** and **metabolic risk**, and therapy is fitted to the illness and the patient's **support network**."
            },
            {
              "type": "update",
              "year": 2023,
              "title": "Antipsychotics in dementia: the boxed warning and the first approval for agitation",
              "text": "All antipsychotics in the United States carry a **boxed warning**: older people with **dementia-related psychosis** treated with antipsychotics have an **increased risk of death**. In **May 2023** the FDA approved **brexpiprazole** as the first drug for **agitation associated with dementia due to Alzheimer disease**, based on two 12-week placebo-controlled trials. It keeps the boxed warning and is not approved for dementia-related psychosis without agitation. The **2023 Beers Criteria** still advise avoiding antipsychotics for behavior problems in dementia unless other measures have failed and the patient may harm self or others. Look first for a medical, drug or environmental cause of the agitation.",
              "source": "US FDA news release, FDA approves first drug to treat agitation symptoms associated with dementia due to Alzheimer's disease (May 11, 2023)"
            }
          ]
        },
        {
          "id": "s251-problems",
          "title": "Common C-L problems",
          "blocks": [
            {
              "type": "p",
              "text": "Most C-L referrals fall into a short list of problems. Each has typical causes and first steps."
            },
            {
              "type": "h",
              "text": "Suicide attempt or threat"
            },
            {
              "type": "p",
              "text": "People with **medical illness** have **higher suicide rates** than those without medical or surgical problems."
            },
            {
              "type": "list",
              "title": "High-risk factors",
              "items": [
                "**Previous suicide attempt**",
                "**Men over 45 years** of age",
                "**Alcohol dependence**",
                "**No social support**",
                "**Incapacitating or catastrophic** medical illness, especially with **severe pain**"
              ]
            },
            {
              "type": "p",
              "text": "If suicide risk is present, **transfer to a psychiatric unit** or start **24-hour nursing care**."
            },
            {
              "type": "h",
              "text": "Depression"
            },
            {
              "type": "p",
              "text": "Every depressed patient needs a **suicide risk assessment**. Many inpatients, though, are depressed **without** suicidal thoughts, and an **antidepressant can be started** if needed, after a careful check for **drug-drug interactions**, done **together with the primary physician**."
            },
            {
              "type": "h",
              "text": "Agitation"
            },
            {
              "type": "p",
              "text": "Agitation often comes from a **cognitive disorder** or **drug withdrawal** (**opioids, alcohol, sedative-hypnotics**). **Antipsychotics** may help when it is excessive. Look for **command hallucinations** or **paranoid ideas** the patient is reacting to, and always rule out a **toxic reaction to a medication**."
            },
            {
              "type": "h",
              "text": "Hallucinations"
            },
            {
              "type": "p",
              "text": "A common cause on a general ward is **delirium tremens**, which usually starts **3 to 4 days after admission**. ICU patients with **sensory isolation** may hallucinate. **Schizophrenia**, **brief psychotic disorder** and **neurocognitive disorders** also cause hallucinations and **respond rapidly to antipsychotics**. **Formication**, the feeling of **bugs crawling on the skin**, often goes with **cocaine use**."
            },
            {
              "type": "h",
              "text": "Sleep-wake disorders"
            },
            {
              "type": "table",
              "caption": "Inpatient sleep complaints and likely causes",
              "head": [
                "Pattern",
                "Think of"
              ],
              "rows": [
                [
                  "Insomnia in an inpatient (common)",
                  "**Pain**; treating it usually **fixes the insomnia**"
                ],
                [
                  "**Early morning awakening**",
                  "**Depression**"
                ],
                [
                  "**Trouble falling asleep**",
                  "**Anxiety**"
                ],
                [
                  "Any new insomnia",
                  "**Early substance withdrawal** (keep in the differential)"
                ]
              ],
              "note": "Depending on cause, an antianxiety or antidepressant agent may be prescribed."
            },
            {
              "type": "h",
              "text": "Confusion"
            },
            {
              "type": "p",
              "text": "**Delirium** tops the list of causes when a general hospital inpatient is **confused or disoriented**. Causes are many: **metabolic**, **neurologic**, **substance** and **mental illness**, among others. **Low-dose antipsychotics** may be used if marked agitation comes with the confusion. **Benzodiazepines** and other sedatives can **worsen** it and bring on **sundowner syndrome** (**ataxia, disorientation**). When **sensory deprivation** plays a part, add cues: a **radio**, a **clock**, and **curtains left open**. Urgent causes are listed in **Table 25-2** (next part)."
            },
            {
              "type": "h",
              "text": "Noncompliance or refusal to consent"
            },
            {
              "type": "p",
              "text": "The **doctor-patient relationship** is often the hidden factor. A **common cause** of noncompliance is **negative transference** toward the doctor. **Fear** of a drug or procedure often eases with **education and reassurance**. When refusal comes from **impaired judgment**, only a **judge** can rule the patient **incompetent**. In inpatients, **cognitive disorders** are the **leading cause** of poor judgment."
            },
            {
              "type": "h",
              "text": "No physiologic basis for symptoms"
            },
            {
              "type": "table",
              "caption": "When no medical cause is found",
              "head": [
                "Condition",
                "Clue"
              ],
              "rows": [
                [
                  "**Conversion disorder**",
                  "**Glove-and-stocking anesthesia** with **autonomic symptoms**"
                ],
                [
                  "**Somatization disorder**",
                  "**Multiple bodily complaints**"
                ],
                [
                  "**Factitious disorder**",
                  "**Wants to stay in hospital**"
                ],
                [
                  "**Malingering**",
                  "Obvious **secondary gain** (for example **compensation cases**)"
                ]
              ],
              "note": "Older labels: DSM-5-TR calls conversion disorder functional neurological symptom disorder, and somatization disorder falls under somatic symptom disorder. Hypochondriasis is now mostly illness anxiety disorder or somatic symptom disorder."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Most common causes",
              "text": "Most common cause of inpatient **confusion**: **delirium**. Leading cause of **impaired judgment**: **cognitive disorders**. Common cause of inpatient **insomnia**: **pain**. Common cause of ward **hallucinations**: **delirium tremens** (3 to 4 days in)."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Restraints and sedatives",
              "text": "Use **physical restraints** very carefully and **only as a last resort**; **sedation is preferable and safer**. But in a confused patient, **benzodiazepines can make things worse**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Look at the relationship",
              "text": "When a patient refuses care, first look at **how they feel about the doctor**. Negative transference or simple fear often explains refusal better than a lack of capacity."
            },
            {
              "type": "case",
              "title": "Mr. D, seeing things on day 3",
              "text": "A 50-year-old man admitted for a leg fracture becomes tremulous, confused and frightened on his third hospital day, describing animals in the room. His wife later says he drank heavily every day.",
              "point": "Hallucinations starting **3 to 4 days after admission** in a heavy drinker suggest **delirium tremens**, a common cause of hallucinations on general wards."
            },
            {
              "type": "case",
              "title": "Mrs. L, refusing surgery",
              "text": "A 74-year-old woman with a hip fracture refuses surgery. She is disoriented and cannot recall what the surgeon told her. The team asks whether they can operate.",
              "point": "**Cognitive disorders** are the most frequent reason inpatients lose sound judgment. Only a **judge** can declare her **incompetent**."
            },
            {
              "type": "update",
              "year": 2007,
              "title": "Capacity versus competence",
              "text": "The book's point that only a **judge** can declare a patient **incompetent** reflects US law: **competence** is a **legal** finding. **Decision-making capacity**, by contrast, is a **clinical** judgment about **one specific decision**, which the treating physician or consultant makes and documents. Capacity is usually judged on four abilities: **communicating a choice**, **understanding** the relevant information, **appreciating** what it means for oneself, and **reasoning** about the options. The more serious the risk of the decision, the more carefully capacity is examined. Laws on surrogate decision-makers differ by country; check current local rules and guidelines.",
              "source": "Appelbaum PS, Assessment of patients' competence to consent to treatment. N Engl J Med 2007;357:1834-1840"
            },
            {
              "type": "update",
              "year": 2025,
              "title": "Timing delirium tremens from the last drink",
              "text": "The book times delirium tremens from **hospital admission** (3 to 4 days). The useful anchor is the **last drink**: symptoms most often begin **48 to 96 hours after the last drink**, and sometimes **7 to 10 days** later. Withdrawal **seizures** are most common in the first **12 to 48 hours**. A patient who kept drinking until admission will match the book's timing; one who stopped days earlier may already be in danger on arrival.",
              "source": "MedlinePlus (US National Library of Medicine), Delirium tremens, reviewed January 2025"
            }
          ]
        }
      ]
    },
    {
      "title": "C-L psychiatry in special settings",
      "sections": [
        {
          "id": "s251-icu",
          "title": "Special situations: intensive care units and hemodialysis units",
          "blocks": [
            {
              "type": "h",
              "text": "Intensive care units (ICUs)"
            },
            {
              "type": "p",
              "text": "Every ICU sees three recurring psychiatric problems in its patients: **anxiety**, **depression** and **delirium**. The unit itself is a source of severe stress for both patients and staff, and the stress tracks the severity of the illnesses being treated."
            },
            {
              "type": "p",
              "text": "People in the ICU often witness **cardiac arrests**, **deaths** and other medical catastrophes. Repeated exposure keeps them physiologically on alert (**autonomic arousal**) and pushes them into **psychological defensiveness**. Nurses and the patients they look after carry unusually heavy loads of anxiety and depression, so **nurse burnout** and **high staff turnover** are common."
            },
            {
              "type": "p",
              "text": "Staff stress is well studied in the **nursing** literature. The **house staff**, particularly residents on **surgical** services, get far less attention, although they face the same pressures."
            },
            {
              "type": "list",
              "title": "What ICU support groups do",
              "items": [
                "Everyone working in the unit needs a way to face their own feelings about these unusual and draining experiences.",
                "**Regular support groups** where feelings can be talked through are advised for **both ICU staff and house staff**.",
                "For staff, the groups guard against the **psychiatric morbidity** that would otherwise be expected in some members.",
                "For patients, the groups protect care from staff who would otherwise show **poor concentration**, **low energy** and slowed, flat (**psychomotor-retarded**) communication."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "ICU triad",
              "text": "The three psychiatric problems found in all ICUs are **anxiety**, **depression** and **delirium**. The recommended staff intervention is **regular support groups** for nurses and house staff alike."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Do not forget the house staff",
              "text": "Burnout research focuses on nurses, but **surgical house staff** are under similar strain and receive much less attention. A consultant should include them when proposing staff support."
            },
            {
              "type": "h",
              "text": "Hemodialysis units"
            },
            {
              "type": "p",
              "text": "The dialysis unit is a **model (paradigm)** of the complex modern treatment setting. Patients live with a **lifelong**, disabling and restricting illness, and they depend on a large team of caregivers to reach a **machine** that keeps them alive. Sessions run **three times a week** for **4 to 6 hours** each, which breaks up the patient's former daily routine."
            },
            {
              "type": "p",
              "text": "The first task is fighting the disease. Patients must also accept a degree of **dependence on others** that most have not felt since **childhood**."
            },
            {
              "type": "defs",
              "title": "Common reactions on entering dialysis",
              "items": [
                [
                  "Struggle for independence",
                  "Resisting the new reliance on staff and machine."
                ],
                [
                  "Regression",
                  "Slipping back into **childlike** states."
                ],
                [
                  "Denial through acting out",
                  "Defying medical orders, for example **breaking the diet** or **skipping sessions**."
                ],
                [
                  "Anger",
                  "Hostility aimed at **staff members**."
                ],
                [
                  "Bargaining and pleading",
                  "Trying to negotiate with the team."
                ],
                [
                  "Infantilized, obsequious behavior",
                  "Becoming overly dependent and fawning."
                ],
                [
                  "Acceptance and courage",
                  "The **most frequent** response of all."
                ]
              ]
            },
            {
              "type": "p",
              "text": "How a patient reacts depends on **personality style** and **earlier experience** with this illness or another chronic one. Patients who have had **time to adjust** to their kidney disease cope better with the new routine; those with **recent renal failure** and new machine dependence tend to struggle more."
            },
            {
              "type": "p",
              "text": "Social factors are poorly studied, yet **culture** shapes the reaction to dialysis, and how the unit is run matters. The best outcomes tend to come from units with **firm, consistent** handling of patients, **clear consequences** when patients break rules, and **real psychological support for staff**."
            },
            {
              "type": "list",
              "title": "Psychiatric complications of dialysis",
              "items": [
                "**Depression** is a recognized complication. **Suicide** in this group is **not rare**.",
                "Sexual problems may be **neurogenic** or **psychogenic**, or may come from **testicular atrophy** and **gonadal dysfunction**.",
                "**Dialysis dementia**: a **rare** syndrome of memory loss, disorientation, **dystonias** and **seizures**, seen after **many years** of dialysis."
              ]
            },
            {
              "type": "p",
              "text": "Dialysis dementia is not fully understood. The most likely cause is **aluminum toxicity**. Lowering **aluminum in the dialysate** and cutting aluminum intake reduces how often it occurs. A **chelating agent** such as **deferoxamine** may help if started **early**, but it should be used **sparingly** because its adverse effects are serious."
            },
            {
              "type": "steps",
              "title": "Psychological care of dialysis patients (two areas)",
              "items": [
                [
                  "Before dialysis",
                  "Prepare carefully, including the work of adapting to chronic illness, with special attention to **denial** and **unrealistic expectations**. **Every patient** should have a **psychosocial evaluation** first."
                ],
                [
                  "During the program",
                  "Ask regularly and specifically about adaptation, in a way that does **not foster dependence** or the **sick role**. Staff should watch for **depression** and **sexual problems**."
                ]
              ]
            },
            {
              "type": "list",
              "title": "Supports that work",
              "items": [
                "**Group sessions** provide support.",
                "**Patient self-help groups** rebuild a social network and restore **self-mastery** and **self-esteem**.",
                "**Antidepressants** can be used in dialysis patients when needed.",
                "Psychiatric care works best when **brief** and **problem-oriented**.",
                "**Home dialysis** has improved attitudes toward treatment: patients fit it into daily life more easily and feel **more autonomous** and less dependent than those dialyzed in hospital."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Home beats hospital for autonomy",
              "text": "Patients on **home dialysis** feel **more autonomous** and less dependent than hospital-treated patients, which fits the core psychological struggle of dialysis: forced **dependence**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Dialysis dementia",
              "text": "Rare; after **years** of dialysis; memory loss, disorientation, **dystonias**, **seizures**. Probable cause **aluminum toxicity**. Prevent by lowering **dialysate aluminum**; **deferoxamine** early, used sparingly."
            },
            {
              "type": "update",
              "year": 2025,
              "title": "Antipsychotics for ICU delirium: the guidelines",
              "text": "The **2018 PADIS guideline** of the Society of Critical Care Medicine (pain, agitation/sedation, delirium, immobility, sleep) advises **against routine haloperidol or atypical antipsychotics** to **prevent** or **treat** delirium in adult ICU patients. A placebo-controlled trial of 566 patients found that haloperidol and ziprasidone did not shorten delirium, ventilation, stay or survival. Short-term use can still be considered for distressing symptoms such as severe agitation. The **2025 focused update** made no recommendation for or against antipsychotics for delirium, citing low-certainty evidence. Both put the weight on prevention: treat pain first, keep sedation light, avoid benzodiazepines where possible, mobilize early and protect sleep.",
              "source": "Devlin JW et al., Clinical practice guidelines for the prevention and management of pain, agitation/sedation, delirium, immobility, and sleep disruption in adult patients in the ICU. Crit Care Med 2018;46:e825-e873; SCCM 2025 focused update"
            }
          ]
        },
        {
          "id": "s251-delirium",
          "title": "Clues to causes of delirium that need urgent attention",
          "blocks": [
            {
              "type": "p",
              "text": "Delirium in an older or medically ill patient is often the only sign of a dangerous underlying problem. Table 25-2 groups the urgent causes into four families: **metabolic disorders**, **systemic illness**, **central nervous system (CNS) disorders**, and **drugs and medication**. Each entry pairs a cause with the history or examination clue that points to it."
            },
            {
              "type": "table",
              "caption": "Metabolic causes of delirium and their clues (see Table 25-2)",
              "head": [
                "Cause",
                "Clue"
              ],
              "rows": [
                [
                  "**Hypoglycemia**",
                  "Diabetes or **alcoholism**; drowsy, **tremulous**, **sweating**, may fight"
                ],
                [
                  "**Hyperglycemia**",
                  "Diabetes; **thirst**, frequent **urination**, or a flulike illness"
                ],
                [
                  "**Hyponatremia**",
                  "**Lung cancer**, recent **stroke**, chronic lung infection, **heart failure**, **cirrhosis**, **diuretics**"
                ],
                [
                  "**Hypernatremia**",
                  "**Dehydration**: too little intake or fluid lost and not replaced"
                ],
                [
                  "**Hypercalcemia**",
                  "**Bone metastases**; **sarcoidosis**; **multiple myeloma**; cancer of lung or kidney (**renal cell**); long **immobilization**"
                ],
                [
                  "**Hypoxia**",
                  "Brain short of oxygen from poor lung or heart function, or **carbon monoxide** poisoning"
                ],
                [
                  "**Hypercarbia**",
                  "Chronic lung disease with **CO2 retention**; may use **home oxygen**"
                ],
                [
                  "**Hepatic encephalopathy**",
                  "Chronic liver disease or alcoholism; likely **jaundice**, **ascites**"
                ],
                [
                  "**Uremia**",
                  "Kidney disease; an **enlarged prostate**; new **inability to urinate**"
                ],
                [
                  "**Thiamine deficiency** (Wernicke encephalopathy)",
                  "Varying **ophthalmoplegia**, **ataxia** and confusion; poor nutrition from alcoholism"
                ],
                [
                  "**Hypothyroidism**",
                  "Fatigue, **constipation**, **cold intolerance**, weight gain, coarse hair and skin, slowed thinking; **low temperature**, large heart, **slow pulse**; can be triggered by **lithium**"
                ],
                [
                  "**Hyperthyroidism**",
                  "Overactive **or apathetic**; weight loss, **diarrhea**, **heat intolerance**, labile mood; **goiter**, fine silky hair, warm damp skin, **proptosis** and stare, fine **tremor**, fast or irregular pulse; in older people, **heart failure** and **weakness** may stand out"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Thiamine before glucose",
              "text": "Giving **intravenous glucose** quickly uses up the body's remaining thiamine. The book advises **intramuscular thiamine before the glucose infusion** in any patient with **alcoholism**, or Wernicke encephalopathy may be set off. Today thiamine is usually given **intravenously**, and glucose for true **hypoglycemia** is **never delayed** (see the update box). Left untreated it moves fast to **Korsakoff syndrome** (a permanent memory disorder) and, in advanced cases, **death**."
            },
            {
              "type": "table",
              "caption": "Systemic illnesses that present as delirium (see Table 25-2)",
              "head": [
                "Cause",
                "Clue"
              ],
              "rows": [
                [
                  "**Low cardiac output**",
                  "**Heart failure**, **arrhythmia**, **pulmonary embolus**, **myocardial infarction**; looks ill (ashen, weak, nauseated, sweaty), abnormal vital signs"
                ],
                [
                  "**Pneumonia**",
                  "Recent cold, bedbound, **aspiration**; fever may be absent but **tachycardia** or **hypotension** shows"
                ],
                [
                  "**Urinary tract infection**",
                  "**Indwelling catheter**, **prostatic hypertrophy**, **diabetes**, **neurogenic bladder**"
                ],
                [
                  "**Anemia**",
                  "**Acute blood loss** (injury, gut bleeding), chronic illness, hidden **GI cancer**"
                ],
                [
                  "**Acute surgical emergency**",
                  "**Bowel infarction**, **appendicitis**, **volvulus**: common, and may show **only confusion**"
                ],
                [
                  "**Hypertension**",
                  "Fast or sustained rise causing **encephalopathy**; usually prior high pressure; patient on an **MAO inhibitor** who ate **tyramine**-rich food"
                ],
                [
                  "**Vasculitis**",
                  "For example **systemic lupus erythematosus**: brain involvement or **steroid** treatment"
                ],
                [
                  "**Any fever or infection**",
                  "Can confuse an older person"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Silent heart attack",
              "text": "In **13 percent** of elderly patients, **confusion** is the main presenting symptom of acute **myocardial infarction**. Older patients often lack typical chest pain and instead report **indigestion**."
            },
            {
              "type": "table",
              "caption": "CNS disorders that present as delirium (see Table 25-2)",
              "head": [
                "Cause",
                "Clue"
              ],
              "rows": [
                [
                  "**Subdural or epidural hematoma**",
                  "Head injury history **may be absent**; **fluctuating** mental state; may have **no focal signs**"
                ],
                [
                  "**Seizure**",
                  "Unwitnessed fit suspected if **found on the floor** with **incontinence** or **vomiting**; known seizures or alcoholism"
                ],
                [
                  "**Stroke**",
                  "Prior **TIAs** or strokes; confusion may be the **only sign**"
                ],
                [
                  "**Infection**",
                  "**Viral encephalitis**; **meningitis** that is bacterial, **tuberculous** or fungal"
                ],
                [
                  "**Tumor** (primary or metastatic)",
                  "Rising **intracranial pressure** compresses vital structures or causes **herniation**; **brain atrophy** in the elderly leaves extra room, so signs may appear only when the mass is **large**"
                ],
                [
                  "**Normal pressure hydrocephalus**",
                  "Triad: **dementia**, **gait disturbance**, **incontinence**; may be cured by **surgery**"
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Drugs, alcohol and substances as causes of delirium (see Table 25-2)",
              "head": [
                "Cause",
                "Clue"
              ],
              "rows": [
                [
                  "**Medications**",
                  "Nearly **any drug** can confuse an older person. Worst offenders: strongly **anticholinergic** drugs (**antidepressants**, **antipsychotics**, **antiparkinsonian** drugs, many **over-the-counter** products); **sedative-hypnotics** (**barbiturates**, **benzodiazepines**); heart drugs (**digoxin**, **lidocaine**, **propranolol**, **quinidine**); **anticonvulsants**; **antihypertensives**; **cimetidine**; **corticosteroids**; **analgesics**, both **narcotic** and **nonnarcotic**"
                ],
                [
                  "**Alcohol**",
                  "**Intoxication** and **withdrawal** look as in younger adults, but frailer health raises the risk in older people"
                ],
                [
                  "**Drug abuse**",
                  "**Much rarer** in the elderly; chronic intoxication with **bromides** or **prescription tranquilizers** does occur"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Confusion may be the only complaint",
              "text": "Several urgent causes show up with **nothing but confusion**: abdominal emergencies (**bowel infarction**, **appendicitis**, **volvulus**), **stroke**, and a **subdural hematoma** without focal signs. In an older patient, new confusion is a medical workup, not a psychiatric label."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Fever can be missing",
              "text": "In older patients with **pneumonia**, fever may not appear; look for **tachycardia** or **hypotension** instead."
            },
            {
              "type": "update",
              "year": 2012,
              "title": "Thiamine and glucose: do not delay either",
              "text": "The book advises **intramuscular thiamine before glucose**. The evidence behind \"thiamine first\" rests on **case reports**. A literature review found no trial showing that one glucose dose sets off Wernicke encephalopathy, and concluded that glucose for a **hypoglycemic** patient should **not be delayed**. Thiamine should follow promptly or be given **at the same time**. Prolonged glucose without thiamine is the real risk. In suspected Wernicke encephalopathy, thiamine is now given **intravenously** in high doses, since absorption from other routes is unreliable in these patients. Follow local protocols for the dose.",
              "source": "Schabelman E, Kuo D, Glucose before thiamine for Wernicke encephalopathy: a literature review. J Emerg Med 2012;42:488-494"
            }
          ]
        },
        {
          "id": "s251-surgery",
          "title": "Surgical units and transplantation issues",
          "blocks": [
            {
              "type": "h",
              "text": "Surgical units"
            },
            {
              "type": "p",
              "text": "Some surgeons hold that a patient who **expects to die** during an operation is **more likely to die**. This idea once sounded like superstition; it now seems **less superstitious** than before, though it remains a belief rather than a proven rule."
            },
            {
              "type": "list",
              "title": "Attitude and surgical outcome",
              "items": [
                "Patients who are visibly **depressed or anxious** before surgery but **deny it** fare worse, with more **morbidity** and **mortality**, than patients able to voice their feelings.",
                "Patients with a **positive attitude** toward the coming operation do **better still**."
              ]
            },
            {
              "type": "list",
              "title": "What improves surgical outcome",
              "items": [
                "**Informed consent** and **education** about what the patient will feel.",
                "Where they will wake up: it helps to **show the recovery room** beforehand.",
                "What **loss of function** to expect.",
                "Which **tubes and devices** will be in place.",
                "How to **cope with the expected pain**.",
                "If the patient **will not be able to speak or see** after surgery, explain **beforehand** how to make up for these losses.",
                "If **confusion**, **delirium** or **pain** after surgery can be foreseen, **discuss it in advance** so the patient does not read it as uncalled for or as a **sign of danger**.",
                "**Constructive family members** can help **before and after** the operation."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Denied fear is the risky fear",
              "text": "The worrying preoperative patient is the one who is plainly anxious or depressed but **denies** it. Helping a patient put fear into words is part of preparing for surgery."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Prepare for predictable delirium",
              "text": "If **postoperative confusion or delirium** can be foreseen, tell the patient **before surgery**, so it is not experienced as unexpected or as a **sign of danger**."
            },
            {
              "type": "h",
              "text": "Transplantation"
            },
            {
              "type": "p",
              "text": "Transplant programs have grown over the past decade. The C-L psychiatrist has a central role in helping patients and families with the psychosocial side of transplantation."
            },
            {
              "type": "list",
              "title": "Five psychosocial issues in transplantation",
              "items": [
                "**Which** waiting-list patients will get organs, and **when**.",
                "**Anxiety** about the procedure.",
                "**Fear of death**.",
                "**Organ rejection**.",
                "**Adapting to life** after a successful transplant."
              ]
            },
            {
              "type": "p",
              "text": "Aftercare is complex, and **medication adherence** may be hard to achieve without **supportive psychotherapy**. This applies particularly to **liver** recipients whose transplant followed **hepatitis C** acquired through sexual risk behavior, and to patients with a **substance use disorder** history who shared **contaminated needles**."
            },
            {
              "type": "p",
              "text": "**Group therapy** that brings together recipients of **similar transplant procedures** lets members back each other up and trade facts and feelings about the stresses of their illness. The groups may be **run or supervised by the psychiatrist**."
            },
            {
              "type": "table",
              "caption": "Psychiatric complications after transplant",
              "head": [
                "Complication",
                "Frequency and action"
              ],
              "rows": [
                [
                  "**Major depression** or **adjustment disorder with depressed mood**",
                  "Close to **20%** during the **first year**; assess **suicidal ideation and risk**"
                ],
                [
                  "Signs of **posttraumatic stress disorder**",
                  "A further **10%**; **nightmares** and **anxiety attacks** tied to the procedure"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Another issue is the organ's source: a **cadaver**, or a **living donor**, who may be a **relative** of the recipient or not. **Pretransplant sessions with potential donors** help them with fears about the operation and worries about **who will receive** their organ. Donor and recipient are sometimes **counseled together**, for example when a relative gives a **kidney**. **Peer support groups** mixing **donors with recipients** have also helped people cope."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Screen transplant recipients for suicide risk",
              "text": "With nearly **20 percent** developing major depression or adjustment disorder with depressed mood in the first year, every depressed recipient needs an **evaluation of suicidal ideation and risk**."
            }
          ]
        },
        {
          "id": "s251-onco",
          "title": "Psycho-oncology",
          "blocks": [
            {
              "type": "p",
              "text": "**Psycho-oncology** studies two directions of influence: how **cancer affects psychological functioning**, and how **psychological and behavioral factors** may affect **cancer risk and survival**. A defining feature of the field has been **intervention studies** that try to change the course of cancer."
            },
            {
              "type": "table",
              "caption": "Key psycho-oncology intervention studies",
              "head": [
                "Study",
                "Patients and intervention",
                "Finding"
              ],
              "rows": [
                [
                  "**David Spiegel** (landmark study)",
                  "Women with **metastatic breast cancer**; **weekly group psychotherapy** vs randomized **routine care**",
                  "Lived a mean of **18 months longer**"
                ],
                [
                  "Melanoma study",
                  "**Malignant melanoma**; **structured group intervention**",
                  "Significantly **lower recurrence** and **lower mortality**; more **large granular lymphocytes** and **NK cells**, signs of higher **NK activity** (suggests a stronger **immune response**)"
                ],
                [
                  "Breast cancer behavioral study",
                  "**Breast cancer**; group **relaxation**, **guided imagery**, **biofeedback**",
                  "Compared with controls: more **NK cell activity** and stronger **lymphocyte mitogen responses**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Spiegel",
              "text": "**David Spiegel**: weekly **group psychotherapy** for **metastatic breast cancer**; on average the group members lived **18 months longer** than randomized routine-care controls."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Read the immune data carefully",
              "text": "The melanoma immune changes only **suggest** a stronger immune response; they are markers, not proof of the mechanism by which groups might help."
            },
            {
              "type": "p",
              "text": "New treatments have turned many cancers from **incurable** into **chronic** and often **curable** illnesses, so the psychiatric side of cancer (reactions to the diagnosis and to treatment) matters more and more. In the United States, **at least half** of people who develop cancer each year survive at least **5 years**, and about **3 million** survivors show **no evidence of disease**."
            },
            {
              "type": "table",
              "caption": "Mental disorders in cancer patients",
              "head": [
                "Measure",
                "Figure"
              ],
              "rows": [
                [
                  "Cancer patients with a mental disorder",
                  "About **half**"
                ],
                [
                  "**Adjustment disorder** (largest group)",
                  "**68%**"
                ],
                [
                  "**Major depressive disorder**",
                  "**13%**"
                ],
                [
                  "**Delirium**",
                  "**8%**"
                ]
              ],
              "note": "These disorders are mostly considered **reactions** to learning one has cancer."
            },
            {
              "type": "list",
              "title": "Psychological reactions to a cancer diagnosis",
              "items": [
                "Fear of **dying**, of **disability** and of **disfigurement**.",
                "Fear of **abandonment** and of losing **independence**.",
                "Fear of disrupted **relationships**, **role functioning** and **finances**.",
                "**Denial**, **anxiety**, **anger** and **guilt**."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Suicidal thoughts versus suicide",
              "text": "Suicidal **thoughts and wishes** are **common** in cancer, but the actual **suicide rate** is only **slightly higher** than in the general population. Ask about them, and do not assume they predict an attempt."
            },
            {
              "type": "p",
              "text": "Because survival has improved, the consultant now often sees patients living for years with cancer and its treatment, not only those facing death. Reactions to treatment matter as much as reactions to the diagnosis."
            },
            {
              "type": "p",
              "text": "Every cancer patient deserves a careful **psychiatric and medical** assessment. Pay special attention to the family: **long-standing conflicts within the family**, **family abandonment** and **family exhaustion**."
            },
            {
              "type": "update",
              "year": 2007,
              "title": "The survival result was not replicated",
              "text": "Spiegel's 1989 finding that group therapy lengthened survival in **metastatic breast cancer** did **not hold up**. A multicenter Canadian trial of **235** women (Goodwin, **2001**) found the same median survival with or without supportive-expressive group therapy (about **18 months** in both). Spiegel's own **2007** replication in **125** women also found **no overall survival benefit**. Both trials confirmed that groups improve **mood** and **pain**, especially in more distressed women. Offer group support for quality of life, not as a way to extend survival. Distress screening, for example with the NCCN **Distress Thermometer**, is now part of standard cancer care.",
              "source": "Goodwin PJ et al., The effect of group psychosocial support on survival in metastatic breast cancer. N Engl J Med 2001;345:1719-1726; Spiegel D et al., Cancer 2007;110:1130-1138"
            }
          ]
        }
      ]
    }
  ]
});
