/* Chapter 28 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 28. */
KS.add("ch28", "guide", {
  "intro": "Chapter 28 covers forensic psychiatry: malpractice and the 4 Ds, negligent prescribing and split treatment, privilege and confidentiality, high-risk situations (tardive dyskinesia, suicidal and violent patients, Tarasoff), admission procedures, the rights to treatment and to refuse it, civil rights, seclusion and restraint, informed consent, child custody, capacity and competence, competence to stand trial and to be executed, the insanity standards, and other forensic areas including HIPAA. The law described is from the United States; update boxes correct several case names and dates, add later US rulings, and give the Philippine rules (Mental Health Act, Revised Penal Code, Civil Code, Family Code, Rules on Evidence).",
  "objectives": [
    "Name the four elements of malpractice and apply them to a case.",
    "Tell privilege from confidentiality and list the exceptions to each.",
    "State the clinician's duties toward suicidal and violent patients, including Tarasoff I and II.",
    "Compare the four procedures of admission and the landmark right-to-treatment and right-to-refuse cases.",
    "Give the indications, contraindications and legal limits for seclusion and restraint.",
    "Describe the capacity needed for consent, a will, a contract and standing trial.",
    "Compare the M'Naghten, irresistible impulse, Durham and American Law Institute tests and the guilty but mentally ill verdict."
  ],
  "parts": [
    {
      "title": "Malpractice, privilege and confidentiality",
      "sections": [
        {
          "id": "s28-malp",
          "title": "Forensic psychiatry and medical malpractice",
          "blocks": [
            {
              "type": "p",
              "text": "**Forensic** is a **Latin**-derived word; its root meaning is **\"of the forum.\"** In ancient **Rome**, criminal trials were heard in an open public forum, so today the word refers to anything tied to **courts of law**. **Forensic psychiatry** is the field that studies the places where psychiatry and the law meet. This chapter walks through the legal side of everyday psychiatric work."
            },
            {
              "type": "h",
              "text": "What malpractice is"
            },
            {
              "type": "p",
              "text": "Medical malpractice is a **tort**, meaning a **civil wrong**. It is a wrong that grows out of a doctor's **negligence**. In plain terms, negligence is either doing what a doctor who owes the patient care should not do, or failing to do what that doctor should do. What counts as right or wrong is measured against **current medical practice**."
            },
            {
              "type": "list",
              "title": "What sets the standard of care",
              "items": [
                "**Expert witnesses**, the usual and main source",
                "**Journal articles**",
                "**Professional textbooks** (for example the *Comprehensive Textbook of Psychiatry* by Kaplan and Sadock)",
                "**Professional practice guidelines**",
                "**Ethical practices** issued by professional organizations"
              ]
            },
            {
              "type": "h",
              "text": "The four elements (the 4 Ds)"
            },
            {
              "type": "p",
              "text": "The person suing, called the **plaintiff** (for example the patient or the family), carries the burden. The plaintiff must prove each element by a **preponderance of evidence**."
            },
            {
              "type": "steps",
              "title": "The 4 Ds of a malpractice claim",
              "items": [
                [
                  "Duty",
                  "A **doctor-patient relationship** existed, and that relationship created a **duty of care**."
                ],
                [
                  "Deviation",
                  "The doctor's care **fell below the standard**."
                ],
                [
                  "Damage",
                  "The patient suffered **harm** (physical, psychological, or both)."
                ],
                [
                  "Direct causation",
                  "The departure **directly caused** the harm."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "All four or nothing",
              "text": "If even **one** of the 4 Ds (**duty, deviation, damage, direct causation**) is missing, there is **no liability**. Harmful negligence is still not malpractice if there was never a treating relationship, and so no duty."
            },
            {
              "type": "list",
              "title": "When a claim fails",
              "items": [
                "**No duty**: a psychiatrist giving **general advice on a radio program** is unlikely to be sued successfully, more so if they say at the start that **no doctor-patient relationship** is intended.",
                "**No causation**: if the patient gets worse for reasons **unrelated to the negligent care**, the claim will not hold.",
                "**No deviation**: a bad outcome alone is not proof of negligence. Psychiatrists **cannot guarantee** a correct diagnosis or treatment."
              ]
            },
            {
              "type": "p",
              "text": "A psychiatrist who gives **due care** can still make mistakes without being liable. Most psychiatric cases are complex, and the clinician must make **judgment calls** among many reasonable options. A choice that looks wrong **in hindsight** is not, by that fact alone, a breach of the standard of care."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Hindsight is not the test",
              "text": "The question is whether the choice was reasonable **at the time it was made**, not whether it turned out well. Picking one sound option among several is a **judgment call**, not a deviation."
            },
            {
              "type": "h",
              "text": "Intentional torts"
            },
            {
              "type": "p",
              "text": "Negligence is not the only route to a lawsuit. Patients may also sue for **intentional torts**. In an intentional tort, the wrongdoer **means to harm** another person, or knows or should have known that harm was **likely** to follow from what they did."
            },
            {
              "type": "table",
              "caption": "Intentional torts a patient may bring against a psychiatrist",
              "head": [
                "Intentional tort",
                "Note"
              ],
              "rows": [
                [
                  "**Assault**",
                  "Listed as an intentional tort"
                ],
                [
                  "**Battery**",
                  "Listed as an intentional tort"
                ],
                [
                  "**False imprisonment**",
                  "Listed as an intentional tort"
                ],
                [
                  "**Defamation**",
                  "Listed as an intentional tort"
                ],
                [
                  "**Fraud or misrepresentation**",
                  "Example: claiming to a patient that **sexual contact with the therapist** will help as **therapy**"
                ],
                [
                  "**Invasion of privacy**",
                  "Listed as an intentional tort"
                ],
                [
                  "**Intentional infliction of emotional distress**",
                  "Listed as an intentional tort"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Insurance usually will not cover it",
              "text": "**Most malpractice policies do not cover intentional torts.** A psychiatrist who commits fraud, such as claiming that sexual contact is a form of therapy, may face the suit without insurance protection."
            },
            {
              "type": "case",
              "title": "Ms. B, advice on the airwaves",
              "text": "A psychiatrist hosts a call-in radio show. Before taking calls she states that her comments are general and do not create a treatment relationship. A caller follows her general tips, later feels worse, and sues.",
              "point": "Without a **doctor-patient relationship** there is **no duty**, so the first of the 4 Ds fails and the claim is unlikely to succeed."
            }
          ]
        },
        {
          "id": "s28-rx",
          "title": "Negligent prescription practices and split treatment",
          "blocks": [
            {
              "type": "h",
              "text": "Negligent prescribing"
            },
            {
              "type": "list",
              "title": "Usual forms of negligent prescribing",
              "items": [
                "Going **above recommended dosages** and never correcting back to a **therapeutic** range",
                "Combining drugs **unreasonably**",
                "Giving drugs with **no indication**",
                "Prescribing **too many drugs at once**",
                "**Failing to disclose** what a drug may do"
              ]
            },
            {
              "type": "p",
              "text": "**Elderly patients** often take many drugs ordered by **different physicians**. Several psychotropics should be combined only with **special care**, since they can **interact** harmfully and add **side effects**. The reasons for using more than one drug should be **carefully documented**."
            },
            {
              "type": "h",
              "text": "Consent for medication"
            },
            {
              "type": "p",
              "text": "A prescribing psychiatrist must tell the patient the **diagnosis** and the drug's **risks** and **benefits**, as far as is reasonable and the situation allows (see Table 28-1). Consent is harder when the patient's thinking is impaired by **mental illness** or **chronic brain impairment**. Then consent may have to come from a **substitute health care decision maker** instead."
            },
            {
              "type": "table",
              "caption": "Five areas of information usually disclosed for informed consent (see Table 28-1)",
              "head": [
                "Area",
                "What to tell the patient"
              ],
              "rows": [
                [
                  "**Diagnosis**",
                  "What the condition or problem is"
                ],
                [
                  "**Treatment**",
                  "What the proposed treatment is and its aim"
                ],
                [
                  "**Consequences**",
                  "The **risks and benefits** of that treatment"
                ],
                [
                  "**Alternatives**",
                  "Other workable options, each with its own **risks and benefits**"
                ],
                [
                  "**Prognosis**",
                  "Expected course **with and without** treatment"
                ]
              ],
              "note": "No single disclosure standard is accepted for every situation; these five areas are a rule of thumb. Table by **RI Simon**, M.D."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Consent is renewed",
              "text": "Get informed consent **each time** a medication is **changed** and each time a **new drug** is started. If a drug injures a patient and the doctor never warned of that risk, there may be enough grounds for a **malpractice action**."
            },
            {
              "type": "h",
              "text": "Follow-up frequency"
            },
            {
              "type": "p",
              "text": "How often should a patient on medication be seen? There is **no stock answer**: visits should match **clinical need**. The longer the gap, though, the greater the chance of **adverse drug reactions** and new clinical problems. As a rough limit, medicated patients should **probably** be seen at least every **6 months**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Payment rules do not lower the duty",
              "text": "When **managed care** will not pay for frequent visits, a psychiatrist may end up prescribing **large amounts** of medication. The duty to give **appropriate treatment** does not depend on **payment** policies."
            },
            {
              "type": "list",
              "title": "Other medication errors that may lead to suits",
              "items": [
                "Not treating **adverse effects** that were, or should have been, recognized",
                "Not monitoring **compliance with prescription limits**",
                "Prescribing the **wrong amount**",
                "Giving **addictive drugs** to a patient who is **vulnerable**",
                "Not seeking **consultation** when it is indicated",
                "**Stopping** a medication inappropriately"
              ]
            },
            {
              "type": "h",
              "text": "Split treatment"
            },
            {
              "type": "p",
              "text": "In **split treatment**, a **nonmedical therapist** does the **psychotherapy** and the psychiatrist handles the **medication**. It is common in community mental health organizations, group practices and managed care, and it is a known **malpractice minefield**."
            },
            {
              "type": "case",
              "title": "Woman in her 40s, care split between two clinicians",
              "text": "A 43-year-old woman with a long history of recurrent depression and past suicide attempts saw a psychiatrist once, for 20 minutes. He diagnosed recurrent major depression and gave a tricyclic antidepressant with enough supply to last until a visit in 3 months. She denied suicidal thoughts but was eating and sleeping much less. A master's level counselor saw her weekly for 30 minutes; the two clinicians never spoke again. Within 3 weeks, after a breakup, she stopped her medication, drank heavily and died by suicide using alcohol and her antidepressant. Her family sued both clinicians for negligent diagnosis and treatment.",
              "point": "A brief assessment, a large supply of a drug that is dangerous in overdose, and **no contact** between the clinicians let the patient **fall between the cracks**. Both members of a split team can be sued."
            },
            {
              "type": "list",
              "title": "What split treatment requires of the psychiatrist",
              "items": [
                "Do an **adequate evaluation** and get **prior medical records**; a patient cannot be treated as **partly** yours.",
                "Keep **full responsibility** for all of the care. This does not remove the duties of the other clinicians.",
                "Keep up with how the patient is doing **clinically** and of the **nature and quality** of the therapist's treatment.",
                "Share responsibility with the therapist **according to each one's qualifications and limits**; one discipline's duties do not shrink the other's.",
                "Have the team explain each discipline's **separate responsibilities** to the patient.",
                "**Periodically review** together whether the collaboration should go on.",
                "When the collaboration ends, **both** clinicians tell the patient, separately or together.",
                "Be able to **hospitalize** the patient; without **admitting privileges**, set up backup in advance with colleagues who can admit."
              ]
            },
            {
              "type": "p",
              "text": "The annotated *Principles of Medical Ethics* for psychiatry (**Section V, annotation 3**) says that a psychiatrist in a **collaborative or supervisory** role must give **enough time** to make sure proper care is given. A **marginal role** of only writing prescriptions, without a working doctor-patient relationship, falls short of accepted good care. A psychiatrist should never be merely a **medication technician**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Fragmented care hurts the drug too",
              "text": "A psychiatrist who only hands out medication and knows little about the patient's overall state gives **substandard treatment**. At the least, this lowers the **efficacy** of the drug, and it may lead the patient to **stop taking** it."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Sued together",
              "text": "In split treatment, a suit against the **nonmedical therapist** will likely name the collaborating **psychiatrist** **too**, and the reverse is also true."
            }
          ]
        },
        {
          "id": "s28-priv",
          "title": "Privilege",
          "blocks": [
            {
              "type": "p",
              "text": "**Privilege** is the right to keep information secret even when a **subpoena** demands it. **Privileged communications** are statements made inside certain relationships; the law shields them so a witness cannot be **forced** to reveal them **in court**."
            },
            {
              "type": "list",
              "title": "Relationships that can carry privilege",
              "items": [
                "**Husband and wife**",
                "**Priest and penitent**",
                "**Doctor and patient**"
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Who owns the privilege",
              "text": "In the doctor-patient relationship, privilege belongs to the **patient**, not the physician. So only the **patient can waive** it."
            },
            {
              "type": "p",
              "text": "Because psychiatrists are licensed physicians, they may claim **medical privilege**. This privilege has limits, however."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "No privilege in military courts",
              "text": "**Military courts** recognize **no medical privilege**, whether or not the doctor is in the military. It does not matter that the **state** where the trial is held recognizes privilege, because military courts are **not under state jurisdiction**."
            },
            {
              "type": "h",
              "text": "The psychotherapist-patient privilege"
            },
            {
              "type": "defs",
              "title": "Key case",
              "items": [
                [
                  "Jaffee v. Redmon (1996), United States Supreme Court",
                  "Accepted that a **psychotherapist-patient privilege** exists. The Court held that **confidential communications** between patients and a **licensed psychotherapist**, made during **diagnosis or treatment**, cannot be **compelled** into the open, under **Federal Rule of Evidence 501**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "The Court stressed that this privilege serves both **public and private interests**. It sided with the view of the **state legislatures** and of the **Advisory Committee**: the privilege serves a **public good** that outweighs the usual principle of using every rational means to find the truth."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Privilege versus confidentiality",
              "text": "**Privilege** is a **legal** shield that applies in **court** against a subpoena, and it belongs to the patient. **Confidentiality** (next section) is the doctor's **ethical** duty to keep patient information secret in general."
            },
            {
              "type": "case",
              "title": "Mr. C, the waiver is his to give",
              "text": "A 35-year-old man in therapy is a party to a lawsuit. His attorney wants the treating psychiatrist to testify about what the patient said in sessions, and the patient agrees in writing. The psychiatrist would prefer to keep the material private.",
              "point": "Privilege belongs to the **patient**, so the **patient may waive** it. The psychiatrist cannot claim the privilege for himself against the patient's wishes."
            },
            {
              "type": "case",
              "title": "A service member's records",
              "text": "A soldier treated by a civilian doctor for a knee injury is tried in a military court. The doctor argues that the state where the court sits recognizes medical privilege.",
              "point": "**Military courts** recognize **no** medical privilege, whatever the doctor's status, and state law does not apply because military courts are **outside state jurisdiction**."
            },
            {
              "type": "update",
              "year": 1999,
              "title": "Correction: Jaffee v. Redmond, and privilege in military courts",
              "text": "Two points in this section need care. First, the case is **Jaffee v. Redmond** (518 U.S. 1, decided **June 13, 1996**); the book prints \"Redmon\". Second, the book says military courts recognize no medical privilege. That is still how the general doctor-patient privilege is described, but mental health care is now treated differently. In **1999**, after Jaffee, an executive order added **Military Rule of Evidence 513**, a **psychotherapist-patient privilege** for cases under the Uniform Code of Military Justice. It protects **confidential communications** made for diagnosis or treatment of a mental or emotional condition, and it has listed exceptions. In 2022 the military's highest court read it narrowly: it covers the **communications**, not every record of diagnosis and treatment.",
              "source": "Executive Order 13140, 1999 Amendments to the Manual for Courts-Martial (Military Rule of Evidence 513), 64 Fed. Reg. 55115 (October 12, 1999)"
            }
          ]
        },
        {
          "id": "s28-confid",
          "title": "Confidentiality and its exceptions",
          "blocks": [
            {
              "type": "p",
              "text": "A long-standing rule of **medical ethics** says doctors must keep secret whatever patients tell them. This professional duty is called **confidentiality**. It covers some people and not others. People **inside the circle of confidentiality** may share information **without the patient's specific permission**."
            },
            {
              "type": "list",
              "title": "Who is inside the circle of confidentiality",
              "items": [
                "The **physician**",
                "**Other staff** treating the patient",
                "**Clinical supervisors**",
                "**Consultants**"
              ]
            },
            {
              "type": "h",
              "text": "Subpoenas"
            },
            {
              "type": "p",
              "text": "Confidentiality can be overridden by a **subpoena**. For the legal system to function, courts need the power to **compel** testimony. The word means **\"under penalty\"**: it orders a person to come and testify in **court** or at a **deposition**. Doctors are usually served a **subpoena duces tecum**, which also requires them to bring their relevant **records and documents**. Formally a **judge** holds the power to issue them, but in practice an **attorney** for one side usually asks for them and gets them."
            },
            {
              "type": "defs",
              "title": "Terms",
              "items": [
                [
                  "Subpoena",
                  "Order, literally **\"under penalty\"**, to come and testify in court or at a deposition"
                ],
                [
                  "Subpoena duces tecum",
                  "Subpoena that also requires the witness to **produce records and documents**"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Emergencies and releases"
            },
            {
              "type": "p",
              "text": "In a **true (bona fide) emergency**, information may be released, but only **as narrowly as possible** to carry out the needed steps. If time allows, try to get the patient's **permission** first, and **always debrief** the patient afterward about what was released."
            },
            {
              "type": "list",
              "title": "Rules for releasing information with permission",
              "items": [
                "Permission is best given **in writing**; **oral** permission is enough if it is **properly documented**.",
                "Each release covers **only one piece of information**.",
                "Get new permission for **each later release**, including one to a recipient who already got information.",
                "Permission clears the **legal** hurdle but not the **clinical** one: it is **permission, not an obligation**.",
                "If the clinician thinks the information could be **destructive**, discuss it with the patient; the clinician may **refuse** the release, with some exceptions."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "One release, one disclosure",
              "text": "A signed release is good for **one piece of information** only. A second disclosure, even to the **same** recipient, needs **new permission**."
            },
            {
              "type": "h",
              "text": "Third-party payers and supervision"
            },
            {
              "type": "p",
              "text": "Wider **insurance** coverage raises concerns about confidentiality and about how psychiatric practice is modeled. About **70 percent** of health care costs are now paid by **insurance**. A carrier needs enough information to judge how its programs are run and what they cost."
            },
            {
              "type": "list",
              "title": "Why confidentiality is not absolute here",
              "items": [
                "**Quality control** requires review of individual **patients** and **therapists**.",
                "A **therapist in training** must breach confidence to review the case with a **supervisor**.",
                "For **institutionalized** patients under **court-ordered treatment**, each **individualized treatment program** goes to a **mental health board**."
              ]
            },
            {
              "type": "h",
              "text": "Talking and writing about patients"
            },
            {
              "type": "p",
              "text": "Psychiatrists have **multiple loyalties**: to **patients**, to **society** and to the **profession**. Writing, teaching and seminars pass on useful knowledge. But a psychiatric history usually involves **distinguishing features**, so it is much harder to disguise than a physical illness. Psychiatrists must not reveal patient details that are **identifiable**, and perhaps not even **descriptive** ones, without proper **informed consent**. Failing to get consent can lead to a claim of **breach of privacy**, **defamation**, or both."
            },
            {
              "type": "h",
              "text": "The Internet and social media"
            },
            {
              "type": "list",
              "items": [
                "Online messages about patients are **not confidential**, can be **hacked** and can be **subpoenaed**.",
                "Some clinicians have written **blog** posts about patients they thought were disguised, only to have others, including the **patient**, recognize them.",
                "Professional **electronic mailing lists** used for advice or referrals may carry enough detail for others to **trace** the patient.",
                "Using **social media** to discuss patients carries the **same risk**."
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Disguise often fails",
              "text": "A psychiatric case is full of **identifying details**. A \"disguised\" blog post or mailing-list query can still be recognized by colleagues or by the **patient**, and can lead to claims of **breach of privacy** or **defamation**."
            },
            {
              "type": "h",
              "text": "Child abuse"
            },
            {
              "type": "p",
              "text": "In **many states**, all physicians must complete a **course on child abuse** to get a medical license. **All states** now require psychiatrists (and others) who **suspect** child abuse to report it **immediately** to an appropriate agency. Here **statute** sharply limits confidentiality: protecting **vulnerable children** from harm matters more than keeping the psychiatric secret. Reporting has complex **psychodynamic** effects, but such reports are generally seen as **ethically justified**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Suspicion is enough",
              "text": "The duty is triggered by **suspecting** abuse, not by proving it, and the report must be made **immediately**. Confidentiality gives way because the **law** says so."
            },
            {
              "type": "table",
              "caption": "Summary: when confidential information may or must be shared",
              "head": [
                "Situation",
                "Rule"
              ],
              "rows": [
                [
                  "Treating team, supervisors, consultants",
                  "Inside the **circle of confidentiality**; no specific permission needed"
                ],
                [
                  "Subpoena",
                  "Can **compel** disclosure; duces tecum adds **records**"
                ],
                [
                  "Bona fide emergency",
                  "Release **as little as feasible**; seek permission if time allows; **always debrief**"
                ],
                [
                  "Patient permission",
                  "Written preferred, oral if **documented**; **one release per item**"
                ],
                [
                  "Insurers and quality review",
                  "Need information on **costs and administration**"
                ],
                [
                  "Training",
                  "Trainee discusses case with **supervisor**"
                ],
                [
                  "Court-ordered institutional treatment",
                  "Treatment program sent to **mental health board**"
                ],
                [
                  "Suspected child abuse",
                  "**Mandatory immediate report** in **all states**"
                ]
              ]
            },
            {
              "type": "case",
              "title": "Ms. D, the second request",
              "text": "A 52-year-old woman signs a release letting her psychiatrist send a treatment summary to her employer's disability office. Two months later the same office asks for an updated note.",
              "point": "Each release covers **one piece of information**. The psychiatrist needs **new permission** even though the recipient is the **same**."
            },
            {
              "type": "case",
              "title": "A 9-year-old's disclosure",
              "text": "During a family session, a psychiatrist notices injuries on a 9-year-old boy and hears an account that makes her suspect physical abuse. The parents ask her to keep it within the session.",
              "point": "**All states** require an **immediate report** of **suspected** child abuse; statute overrides confidentiality here."
            },
            {
              "type": "update",
              "year": 2020,
              "title": "Philippines: privilege and confidentiality",
              "text": "This chapter describes United States law. In the Philippines, two rules cover the same ground. **Privilege:** the 2019 amendments to the Rules on Evidence (in effect **May 1, 2020**) extended the physician-patient privilege in **Rule 130, Section 24(c)** to a **psychotherapist**, and to people who take part in the diagnosis or treatment under the clinician's direction. As written, it applies **in a civil case**. **Confidentiality:** the **Mental Health Act (Republic Act No. 11036, 2018), Section 5(l)**, gives service users the right to confidentiality of all information and records. Disclosure to third parties needs **written consent**, except when the law or a court order requires it, when the service user has consented, in a **life-threatening emergency** where disclosure is needed to prevent harm, when a **minor** is reasonably believed to be a victim of **child abuse**, or in a case against a mental health professional. Health information is also **sensitive personal information** under the Data Privacy Act. Check the current rules and your hospital's policy.",
              "source": "Republic Act No. 11036, Mental Health Act (Philippines, June 20, 2018)"
            }
          ]
        }
      ]
    },
    {
      "title": "High-risk situations, hospitalization and treatment rights",
      "sections": [
        {
          "id": "s28-risk",
          "title": "High-risk clinical situations: tardive dyskinesia and suicidal patients",
          "blocks": [
            {
              "type": "p",
              "text": "Some clinical situations carry a higher chance of a lawsuit. This section covers two of them: **tardive dyskinesia** after antipsychotic treatment, and the patient who dies by **suicide**. Violent patients follow in the next section."
            },
            {
              "type": "h",
              "text": "Tardive dyskinesia"
            },
            {
              "type": "p",
              "text": "Tardive dyskinesia is common in people who stay on **first-generation antipsychotics** longer than **1 year**. Estimates start at **10 to 20 percent** of such patients and may reach **50 percent**. Rates are **higher still in elderly** patients."
            },
            {
              "type": "p",
              "text": "Given these numbers, one might expect many suits. In fact, **relatively few psychiatrists** have been sued over tardive dyskinesia. One reason is that affected patients may lack the **physical energy** and the **psychological motivation** to go to court."
            },
            {
              "type": "list",
              "title": "Where tardive dyskinesia negligence claims come from",
              "items": [
                "Failure to **evaluate** the patient properly",
                "Failure to obtain **informed consent**",
                "**Negligent diagnosis** of the patient's condition",
                "Failure to **monitor** the patient"
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Tardive dyskinesia by the numbers",
              "text": "After **more than 1 year** on a first-generation antipsychotic, at least **10 to 20 percent** (and perhaps up to **50 percent**) of patients show some tardive dyskinesia. The four negligence allegations are poor **evaluation**, no **informed consent**, **negligent diagnosis** and no **monitoring**."
            },
            {
              "type": "h",
              "text": "Suicidal patients"
            },
            {
              "type": "p",
              "text": "A patient's suicide can lead to a suit against the psychiatrist. The risk is greatest when an **inpatient** dies by suicide, because the psychiatrist is thought to hold **greater control** over inpatients. Courts therefore see such a death as more likely to have been **preventable**."
            },
            {
              "type": "p",
              "text": "Judging suicide risk is among the hardest jobs in psychiatry. Suicide itself is a **rare event**. With present knowledge, no clinician can **accurately predict** whether or when a given patient will die by suicide, and **no professional standard exists for predicting** it. There **are** professional standards for **assessing** suicide risk. Even so, the best a clinician can do, after a **comprehensive psychiatric assessment**, is judge the **degree of risk**."
            },
            {
              "type": "p",
              "text": "Case law points to certain **affirmative precautions** for a patient who is suspected or known to be suicidal. A clinician who fails to make a **reasonable assessment** of the risk, or fails to put an **appropriate precautionary plan** in place, will **likely be held liable**."
            },
            {
              "type": "defs",
              "title": "Two words courts use",
              "items": [
                [
                  "Foreseeability",
                  "A **deliberately vague legal term** based on **common sense**, not science. It has **no matching clinical concept**. It does not mean, and should not be taken to mean, that a clinician can **predict** suicide. The law tends to treat a suicide as preventable when it was foreseeable, so courts look closely at this question."
                ],
                [
                  "Preventability",
                  "Whether the death could have been stopped. It is **not the same as foreseeability**. Looking back, many suicides **seem preventable** even though they were **not foreseeable**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Assess, document, plan",
              "text": "The standard you are held to is not prediction but a **reasonable risk assessment** followed by a **precautionary plan**. A careful assessment that grades the **degree of risk** is your best clinical and legal protection."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Hindsight bias",
              "text": "Do not confuse **foreseeable** with **preventable**. After a death, almost any suicide can look preventable; the legal question is whether it was **foreseeable** at the time."
            },
            {
              "type": "case",
              "title": "Ms. B, discharged without a plan",
              "text": "A woman in her 40s is admitted after an overdose. On day three she says she feels better and asks to go home. No structured risk assessment is recorded and no safety plan is made before discharge. She dies by suicide a week later, and her family sues.",
              "point": "Liability is most likely when there was no **reasonable suicide risk assessment** and no **precautionary plan**, not because the psychiatrist failed to predict the death."
            },
            {
              "type": "update",
              "year": 2020,
              "title": "Tardive dyskinesia now has a recommended treatment",
              "text": "The legal points in this section still hold: evaluate, obtain informed consent, diagnose and monitor. What has changed is treatment. The **American Psychiatric Association's 2020 schizophrenia guideline** recommends that patients with **moderate to severe or disabling** tardive dyskinesia from antipsychotic therapy be treated with a reversible **VMAT2 inhibitor** (a strong recommendation with moderate-quality evidence, rated 1B). It also advises regular checks for tardive syndromes by clinical examination or a structured tool such as the **AIMS**. Failing to look for tardive dyskinesia, or to offer treatment once it is found, is now harder to defend.",
              "source": "Keepers GA et al., The American Psychiatric Association practice guideline for the treatment of patients with schizophrenia. Am J Psychiatry 2020;177:868-872"
            }
          ]
        },
        {
          "id": "s28-violent",
          "title": "Violent patients and the duty to warn or protect",
          "blocks": [
            {
              "type": "p",
              "text": "Psychiatrists who treat violent or possibly violent patients face two main kinds of suit: failing to **control aggressive outpatients**, and **discharging violent inpatients**. A psychiatrist can be held responsible for harm to the public when it was **reasonable to have known** of the patient's violent tendencies and the psychiatrist **could have done something** to protect others."
            },
            {
              "type": "p",
              "text": "Since the landmark Tarasoff decision, courts and state legislatures have more and more held psychiatrists to what amounts to a **fictional standard**: being able to predict future **dangerousness**. Research has **consistently** shown that psychiatrists are **unable to forecast future violence** reliably."
            },
            {
              "type": "p",
              "text": "The duty to protect is **first a professional and moral duty** and only **second a legal one**. Most psychiatrists were already protecting their patients and threatened people **long before Tarasoff**."
            },
            {
              "type": "defs",
              "title": "Named cases",
              "items": [
                [
                  "Tarasoff v. Regents (University of California; landmark ruling)",
                  "**California Supreme Court**. Therapists and other mental health clinicians owe a **duty to protect** third parties who are **identifiable and endangered** when an **outpatient** makes an **imminent threat of serious harm**."
                ],
                [
                  "Tarasoff I (1976)",
                  "Raised the legal **duty to warn**. If a physician or psychotherapist has grounds to think a patient **might hurt or kill** another person, the clinician should **warn that person**. The court deliberated for about **14 months**, an unprecedented length."
                ],
                [
                  "Tarasoff II (1982)",
                  "**California Supreme Court**. **Broadened** the first ruling so that the **duty to warn** became a **duty to protect**."
                ]
              ]
            },
            {
              "type": "case",
              "title": "The facts of Tarasoff",
              "text": "A university student, **Prosenjit Poddar**, was a **voluntary outpatient** at the university mental health clinic. He told his therapist he meant to kill a fellow student who was easy to identify, **Tatiana Tarasoff**. The therapist, with a colleague's agreement, decided to commit him under the state's **72-hour** emergency detention provision and told the **campus police**, by speaking to them and in writing. The therapist's **supervisor**, worried about confidentiality, **overruled** this and had Poddar's records **destroyed**. Police held Poddar briefly and let him go after he promised to keep away from her. Once he learned of the commitment plan from police, he **stopped attending** the clinic. **Two months later** he killed her, and her **parents sued the university** for negligence.",
              "point": "This is the source of the **duty to warn** (Tarasoff I), later widened to a **duty to protect** (Tarasoff II)."
            },
            {
              "type": "list",
              "title": "How the Tarasoff I duty can be discharged (one or more, depending on the case)",
              "items": [
                "Tell the **intended victim**, or people likely to pass the warning on",
                "Notify the **police**",
                "Take any **other steps reasonably necessary** in the circumstances"
              ]
            },
            {
              "type": "p",
              "text": "Tarasoff I does **not** require reporting a patient's **fantasies**. It requires reporting an **intended homicide**, and the therapist must use **sound judgment** to tell which is which."
            },
            {
              "type": "h",
              "text": "What states require"
            },
            {
              "type": "p",
              "text": "When a patient threatens someone, **most states** require the psychiatrist to take some step that might prevent the harm. Where a state has passed **duty-to-warn statutes**, the statute sets out the options. Where a state gives **no guidance**, clinicians should use **clinical judgment** and act to protect the threatened person. Psychiatrists should treat the Tarasoff duty as a **national standard of care**, even where their state has no duty to warn and protect."
            },
            {
              "type": "table",
              "caption": "Options to warn and protect (clinically and legally available)",
              "head": [
                "Option",
                "Note"
              ],
              "rows": [
                [
                  "**Voluntary** hospitalization",
                  "Patient agrees to admission"
                ],
                [
                  "**Involuntary** hospitalization",
                  "Only when **civil commitment** criteria are met"
                ],
                [
                  "**Warning the intended victim**",
                  "Usually **not enough on its own**"
                ],
                [
                  "Notifying the **police**",
                  "Also named in Tarasoff I"
                ],
                [
                  "**Adjusting medication**",
                  "A treatment step"
                ],
                [
                  "Seeing the patient **more often**",
                  "Closer follow-up"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "A warning alone rarely suffices",
              "text": "**A warning to others, used alone, is usually not enough.** Combine it with clinical steps such as hospitalization, medication changes or more frequent visits."
            },
            {
              "type": "h",
              "text": "The Tarasoff II debate"
            },
            {
              "type": "p",
              "text": "Lawyers, judges and expert witnesses still argue over what **protection** means, the nature of the **therapist-patient relationship**, and how to balance **public safety** against **individual privacy**. Clinicians object that the duty **hinders treatment**, because patients may not trust a doctor who might break confidentiality. They add that dangerousness is hard to judge, so **defensive practice** may lead to **unnecessary involuntary hospitalization**."
            },
            {
              "type": "p",
              "text": "Because of this debate, **state courts have not interpreted the duty to protect uniformly**. As a general guide, look for these features:"
            },
            {
              "type": "list",
              "items": [
                "A **specific, identifiable victim**",
                "Danger that is **imminent and probable**, from an act the **mentally ill patient** is contemplating",
                "Harm that would be **serious or severe**",
                "Danger to a **person**, usually **not to property**",
                "Then take **clinically reasonable action**"
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Tarasoff I versus Tarasoff II",
              "text": "**Tarasoff I** created the **duty to warn**; **Tarasoff II** broadened it to the **duty to protect**. Both came from the **California Supreme Court**. The duty applies to an **intended homicide**, not to **fantasies**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Think protection, not prediction",
              "text": "No one expects you to predict violence accurately. What matters is that you notice a **credible threat to an identifiable person** and respond with a **reasonable clinical plan**."
            },
            {
              "type": "update",
              "year": 1976,
              "title": "Correction: the Tarasoff dates",
              "text": "The book dates Tarasoff I to 1976 and Tarasoff II to 1982. The California Supreme Court issued the first decision in **1974** (the **duty to warn**). It then reheard the case and issued the second decision on **July 1, 1976** (the **duty to protect**), which replaced the first. This also explains the book's own later sentence that courts have differed \"since 1976\". For examinations, remember **Tarasoff I, 1974, warn** and **Tarasoff II, 1976, protect**.",
              "source": "Tarasoff v. Regents of Univ. of California, 17 Cal.3d 425 (California Supreme Court, July 1, 1976)"
            },
            {
              "type": "update",
              "year": 2018,
              "title": "The duty differs by state, and in the Philippines",
              "text": "There is no single United States rule. A table kept by the **National Conference of State Legislatures** shows that most states have a duty-to-warn or duty-to-protect law, some **mandatory** and some **permissive** (disclosure is allowed but not required), and that **Maine, North Carolina and North Dakota** have no such duty. In California, the statute now limits liability to cases where the patient has told the therapist of a **serious threat of physical violence** against a **reasonably identifiable victim**; the duty is met by reasonable efforts to tell the **victim** and a **law enforcement agency**. In the Philippines, the **Mental Health Act** has no separate duty-to-warn section. Its confidentiality rule (**Section 5(l)**) **allows** disclosure in a **life-threatening emergency** when it is needed to prevent harm or injury. Check current local rules and your hospital's policy.",
              "source": "National Conference of State Legislatures, Mental health professionals' duty to warn (state law table)"
            }
          ]
        },
        {
          "id": "s28-hosp",
          "title": "Hospitalization and procedures of admission",
          "blocks": [
            {
              "type": "p",
              "text": "**Every state** provides for some form of **involuntary hospitalization**. It is usually used when patients are a **danger to themselves or others** to the point that they clearly need **urgent treatment in a closed institution**. Some states also allow it when patients **cannot care for themselves** adequately."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Parens patriae",
                  "Latin for **\"father of his country.\"** The doctrine lets the **state act as a surrogate parent** for people unable to look after themselves or at risk of self-harm. Under **English common law** it goes back to **King Edward I**, when it referred to the **monarch's obligation to protect** subjects. **US common law** reshaped it into a **paternalism**, with the state acting for **mentally ill persons and minors**."
                ],
                [
                  "Commitment versus hospitalization",
                  "Laws on admitting mentally ill persons were long called **commitment laws**. Legally, commitment means a **warrant for imprisonment**, so psychiatrists disliked the word. Both the **American Psychiatric Association** and the **American Bar Association** urged states to use **hospitalization** instead, and **most states have**. The change does not undo past wrongs, but it fits the psychiatrist's focus on **treatment rather than punishment**."
                ]
              ]
            },
            {
              "type": "h",
              "text": "Four procedures of admission"
            },
            {
              "type": "p",
              "text": "The **American Bar Association** has endorsed **four procedures** of admission. Their aim is to protect **civil liberties** and make sure nobody is forced into a mental hospital on a whim. Each of the **50 states** may make its own hospitalization laws, but these procedures are **gaining wide acceptance**."
            },
            {
              "type": "table",
              "caption": "The four ABA-endorsed procedures of admission",
              "wide": true,
              "head": [
                "Type",
                "Who it is for / how it starts",
                "Who must examine",
                "Can the patient leave?"
              ],
              "rows": [
                [
                  "**Informal**",
                  "Follows the **general hospital model**: same process as any other admission; the ordinary doctor-patient relationship applies",
                  "As for any admission",
                  "**Yes**, free to come and go, even **against medical advice**"
                ],
                [
                  "**Voluntary**",
                  "Patient **applies in writing**, on a physician's advice or on their own; admitted if examination shows need",
                  "Examination showing **need for hospital treatment**",
                  "**Yes**, even **against medical advice**"
                ],
                [
                  "**Temporary**",
                  "Patients too **senile or confused** to decide for themselves, or too **acutely disturbed**, needing **emergency** admission",
                  "**Written recommendation of one physician**; then a **psychiatrist or hospital staff confirms** the need",
                  "Cannot be held beyond a set limit, usually **15 days**"
                ],
                [
                  "**Involuntary**",
                  "Patient is **suicidal** (danger to self) or **homicidal** (danger to others) and **lacks insight**; a **relative or friend** may apply",
                  "**At least two physicians**; both must confirm the need",
                  "Held for a set time, often about **60 days**; release by a judge, review board or **habeas corpus**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Outdated term",
              "text": "\"Senile\" is an old term. The current DSM-5-TR language for the condition behind it is **major neurocognitive disorder** (dementia)."
            },
            {
              "type": "h",
              "text": "Safeguards in involuntary admission"
            },
            {
              "type": "steps",
              "title": "From application to review",
              "items": [
                [
                  "Application",
                  "Often made by a **relative or friend**, because the patient **lacks insight**."
                ],
                [
                  "Examination",
                  "**At least two physicians** examine; admission only if **both** confirm the need."
                ],
                [
                  "Notice",
                  "An established procedure gives **written notice to the next of kin**."
                ],
                [
                  "Legal counsel",
                  "The patient may reach a **lawyer at any time**, who can take the case to a **judge**; the judge may order **release** if hospitalization is not indicated."
                ],
                [
                  "Time limit",
                  "Fixed by each state; **60 days** is a common figure."
                ],
                [
                  "Periodic review",
                  "If the stay continues, a **board** reviews the case periodically: **lawyers**, **psychiatrists**, **nonpsychiatric physicians** and **citizens with no tie to the institution**."
                ]
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Writ of habeas corpus",
                  "A petition by anyone who believes their **liberty was taken unlawfully**. For a hospitalized patient, it asks a court to decide whether the admission lacked **due process of law**. The court must hear it **immediately**, however the motion is filed, and the hospital must pass the petition to the court **immediately**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Admission numbers to know",
              "text": "**Temporary** admission: **one physician's** written recommendation; usual limit **15 days**. **Involuntary** admission: **two physicians** must agree; usual period **about 60 days**, then periodic board review. **Informal** and **voluntary** patients may leave **even against medical advice**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Informal versus voluntary",
              "text": "Both kinds of patient may leave. The difference is the start: a **voluntary** patient makes a **written application**, while an **informal** admission simply follows the **general hospital model**."
            },
            {
              "type": "case",
              "title": "Mr. C, a petition from the ward",
              "text": "A man in his 30s was admitted involuntarily after two physicians found him dangerous to others. On day five he tells the nurse he is being held illegally and hands over a written petition for release, asking that it go to court.",
              "point": "This is a **writ of habeas corpus**. The hospital must send it to the court **immediately**, and the court must hear it **immediately**."
            },
            {
              "type": "update",
              "year": 2018,
              "title": "Philippines: treatment without consent under the Mental Health Act",
              "text": "The admission procedures in this section are from the United States. In the Philippines, the **Mental Health Act (Republic Act No. 11036)** starts from consent: **Section 8** requires **written informed consent** before treatment, and presumes that every person has **legal capacity**. **Section 13** allows treatment, restraint or confinement without consent only during a **psychiatric or neurologic emergency** or when **decision-making capacity is impaired**, and only under set conditions. The service user's **advance directive** is followed unless that would bring an immediate risk of serious harm. Only what is **necessary** is used, and only **while the emergency or impairment lasts**. The **attending mental health professional** must order it, and the facility's **internal review board** reviews the order within **15 days** and then **every 15 days**. The Act also provides for a **legal representative** (Section 10) and **supported decision making** with up to **three supporters** (Section 11). Read the Act and its implementing rules for the details.",
              "source": "Republic Act No. 11036, Mental Health Act (Philippines, June 20, 2018)"
            }
          ]
        },
        {
          "id": "s28-rtx",
          "title": "Right to treatment",
          "blocks": [
            {
              "type": "p",
              "text": "Of all patients' rights, the right to care of a **standard quality** is the most basic. It has been fought over in well-known cases under the slogan **\"right to treatment.\"**"
            },
            {
              "type": "table",
              "caption": "Landmark right-to-treatment cases",
              "wide": true,
              "head": [
                "Case",
                "Year",
                "Court / judge",
                "What it held"
              ],
              "rows": [
                [
                  "**Rouse v. Cameron**",
                  "**1966**",
                  "**District of Columbia Court of Appeals**; Judge **David Bazelon**",
                  "Involuntary hospitalization exists for **treatment**; without treatment the **constitutionality of confinement** is in question. If **less restrictive** treatments exist, involuntary hospitalization **cannot take place**. Patient released on a **writ of habeas corpus**."
                ],
                [
                  "**Wyatt v. Stickney**",
                  "**1971**",
                  "**Alabama federal court**; Judge **Frank Johnson**",
                  "Civilly committed persons have a **constitutional right** to **individual treatment** giving a **reasonable chance of cure** or improvement. Set **minimum staffing**, **physical facility** and **nutrition** standards, and demanded **individualized treatment plans**."
                ]
              ]
            },
            {
              "type": "p",
              "text": "The logic of Rouse v. Cameron is **treatment in exchange for liberty**. If the state takes away a person's freedom to treat them, it must actually treat them. Habeas corpus is described here as the **basic legal remedy** for protecting liberty."
            },
            {
              "type": "p",
              "text": "Wyatt v. Stickney went further. It was a **class-action** case under then-new rules, and it sought **treatment, not release**."
            },
            {
              "type": "list",
              "title": "Rights in the newer, more detailed codes",
              "items": [
                "Freedom from **excessive or unnecessary medication**",
                "**Privacy and dignity**",
                "The **least restrictive environment**",
                "**Unrestricted** visits from **attorneys, clergy and private physicians**",
                "Saying no to **lobotomies**, **electroconvulsive treatments** or similar procedures absent **fully informed consent**"
              ]
            },
            {
              "type": "defs",
              "items": [
                [
                  "Therapeutic tasks versus hospital chores",
                  "Patients may be required to do **therapeutic tasks**. They may **not** be made to do **hospital chores** unless they **volunteer** and are paid at least the **federal minimum wage**."
                ],
                [
                  "Peonage",
                  "The old practice in which **state hospitals** made patients do **menial work without pay** for the state's benefit. The wage rule aims to end it."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Who decided what",
              "text": "**Rouse v. Cameron (1966)**, Judge **Bazelon**, District of Columbia Court of Appeals: no treatment calls confinement into question. **Wyatt v. Stickney (1971)**, Judge **Frank Johnson**, Alabama: a **constitutional right to individual treatment**, with minimum standards."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Chores are not therapy",
              "text": "Assigning unpaid ward work and calling it treatment is **peonage**. Hospital chores need **voluntary** agreement and **federal minimum wage**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Court approval takes time",
              "text": "In **several states**, **medication** or **electroconvulsive therapy** cannot be given by force without **court approval** first, which can take **up to 10 days**. Plan ahead for a patient who refuses."
            },
            {
              "type": "case",
              "title": "Ms. D, confined but untreated",
              "text": "A woman in her 50s has been held involuntarily for months. Her chart shows no treatment plan and no therapy beyond custodial care. Her lawyer files for her release, arguing that holding her without treating her cannot be justified.",
              "point": "This follows **Rouse v. Cameron**: involuntary hospitalization is meant to provide **treatment**, so confinement without it is constitutionally doubtful."
            }
          ]
        },
        {
          "id": "s28-refuse",
          "title": "Right to refuse treatment",
          "blocks": [
            {
              "type": "p",
              "text": "Under the legal doctrine of the **right to refuse treatment**, patients **cannot be forced** to accept treatment they do not want, **except in emergencies**."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Emergency",
                  "A clinical situation calling for **immediate intervention** to stop **death or severe harm** coming to the patient or to **someone else**, or to stop the patient's **clinical state from deteriorating**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Right-to-refuse and confinement cases",
              "wide": true,
              "head": [
                "Case",
                "Year",
                "Court",
                "What it held"
              ],
              "rows": [
                [
                  "**O'Connor v. Donaldson**",
                  "**1976**",
                  "**Supreme Court of the United States**",
                  "**Harmless** mentally ill patients who **can survive outside** may not be held involuntarily and left **untreated**. **Mental illness alone** does not justify involuntary confinement."
                ],
                [
                  "**Rennie v. Klein**",
                  "**1979**",
                  "Not stated",
                  "Gave patients a **right to refuse treatment** plus access to an **appeal process**."
                ],
                [
                  "**Roger v. Oken**",
                  "**1981**",
                  "Not stated",
                  "The right to refuse is called **absolute**, yet a **guardian may authorize** treatment."
                ]
              ]
            },
            {
              "type": "p",
              "text": "After O'Connor v. Donaldson, a patient held involuntarily must be found **dangerous to self or others**, or perhaps so **unable to look after themselves** that **survival outside** is not possible. A diagnosis by itself is not enough."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "O'Connor v. Donaldson",
              "text": "The **US Supreme Court** held that a diagnosis of **mental illness alone** is not enough to justify confining a person against their will. A **harmless** patient who **can survive outside** may not be kept there **untreated**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Emergency is the exception",
              "text": "Outside an **emergency**, a refusal stands. Know the three parts of the definition: averting **death or severe harm** for the patient, harm to **another person**, or **clinical deterioration**."
            },
            {
              "type": "p",
              "text": "Two worries remain. Many people **rightly question** whether psychiatrists can **predict dangerousness**. And many psychiatrists fear that hospitalizing a patient involuntarily exposes them to a suit for **monetary damages** for violating the patient's **civil rights**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Commitment carries legal risk too",
              "text": "Involuntary hospitalization is not a safe default. A patient may sue for **money damages** for **infringement of civil rights** if the criteria were not met."
            },
            {
              "type": "case",
              "title": "Mr. E, quiet and self-sufficient",
              "text": "A man in his 60s with long-standing schizophrenia has been held in a state hospital for years. He is not violent, has never harmed himself, and friends are willing to help him live in the community. He receives no active treatment and asks to leave.",
              "point": "Under **O'Connor v. Donaldson**, a **harmless** person who **can survive outside** may not be held against his will and left **untreated**."
            },
            {
              "type": "case",
              "title": "Ms. F, refusing medication with a guardian",
              "text": "A woman in her 20s on an involuntary unit refuses an antipsychotic. She is not in an emergency. A court-appointed guardian reviews her situation and consents to the medication.",
              "point": "Under **Roger v. Oken (1981)**, the patient's right to refuse is described as **absolute**, but a **guardian may authorize** treatment."
            },
            {
              "type": "update",
              "year": 1982,
              "title": "Correction: two case citations",
              "text": "**O'Connor v. Donaldson** was decided by the US Supreme Court on **June 26, 1975** (422 U.S. 563), not 1976. The case the book calls \"Roger v. Oken (1981)\" is **Rogers v. Okin**, about patients at Boston State Hospital. The federal district court ruled in **1979** that competent patients, voluntary or committed, could refuse antipsychotic drugs **outside an emergency**; the appeals court ruled in **1980**; and the US Supreme Court sent the case back in **1982** (as **Mills v. Rogers**) to be decided under Massachusetts law. The Massachusetts courts then set the rule other states copied: outside an emergency, a committed patient may be medicated against his or her will only after a **court hearing**.",
              "source": "Rogers v. Okin, 478 F. Supp. 1342 (D. Mass. 1979); Mills v. Rogers, 457 U.S. 291 (1982)"
            }
          ]
        }
      ]
    },
    {
      "title": "Civil rights, consent and capacity",
      "sections": [
        {
          "id": "s28-civil",
          "title": "Civil rights of patients",
          "blocks": [
            {
              "type": "p",
              "text": "People with mental illness keep their **civil rights** as persons, separate from their rights as patients. Clinical, public and legal movements over time have set out these rights and then confirmed them. The main groups are the **least restrictive alternative**, **visitation**, **communication**, **privacy** and **economic** rights."
            },
            {
              "type": "h",
              "text": "Least restrictive alternative"
            },
            {
              "type": "p",
              "text": "Under the principle of the **least restrictive alternative**, a patient is owed the **least restrictive** form of care that still gives the needed clinical result. Two examples follow from it. If a patient can be managed as an **outpatient**, the team should not seek **commitment**. If a patient is safe on an **open ward**, the team should not use **seclusion**."
            },
            {
              "type": "p",
              "text": "The idea sounds simple, but it gets hard when the choice is among **involuntary medication**, **seclusion** and **restraint**. Ranking these three by restrictiveness is a **subjective** judgment and open to personal bias. Each one can be judged **more and also less** restrictive than either of the others. Even so, clinicians should still weigh restrictiveness whenever they plan treatment."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "No fixed ranking",
              "text": "There is no agreed order from least to most restrictive among forced medication, seclusion and restraint. Each can be the gentler or the harsher choice depending on the patient. Think it through case by case and write down why you chose one over another."
            },
            {
              "type": "h",
              "text": "Visitation and communication"
            },
            {
              "type": "defs",
              "title": "Rights on the ward",
              "items": [
                [
                  "Visitation",
                  "Patients may have visitors at **reasonable hours**, meaning the usual hospital visiting times. A visit may be withheld when the patient's **clinical condition** does not allow it, but the reason must be **documented**, and the right is not suspended without **good reason**."
                ],
                [
                  "Visitors without hour limits",
                  "The patient's **attorney**, **private physician** and **clergy** have, broadly, **unrestricted access**, including the right to talk in **private**. A true (**bona fide**) **emergency** can still delay these visits, because the patient's needs come first."
                ],
                [
                  "Harmful visits",
                  "Staff may limit specific **noxious visits**, for example a relative who brings **drugs** onto the unit."
                ],
                [
                  "Communication",
                  "Patients should usually have free, open contact with the outside by **telephone** and **mail**. The details **vary by region**. Some jurisdictions make hospital administration responsible for **monitoring** patient communication; in some places the hospital must supply **paper, envelopes and stamps**."
                ],
                [
                  "Limits on communication",
                  "A patient admitted while charged with **harassing or threatening calls** should have phone use limited; the same reasoning applies to **mail**. As a general rule, though, calls are **private**, and staff do not **listen in** or **open mail**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Limits need a reason on paper",
              "text": "Restricting a visit or a call is allowed only for a clinical or safety reason. Chart the reason each time. Blocking a lawyer, the patient's own doctor or a member of the clergy is justified only by a genuine emergency, and only for as long as it lasts."
            },
            {
              "type": "h",
              "text": "Private and economic rights"
            },
            {
              "type": "list",
              "title": "Privacy rights besides confidentiality",
              "items": [
                "A **private bathroom and shower** area.",
                "**Secure storage** for clothes and other belongings.",
                "**Adequate floor space** for each person.",
                "The right to **wear their own clothes**.",
                "The right to **carry their own money**."
              ]
            },
            {
              "type": "p",
              "text": "Unless **incompetence** raises special issues, psychiatric patients may usually **manage their own money**. One part of this economic right is that the hospital must **pay patients** who work for the institution, for example in **gardening** or **food preparation**."
            },
            {
              "type": "p",
              "text": "This rule creates a real conflict. Work and activity can be **therapeutic**, but unpaid work can become **exploitative labor**. Because **legislatures** have often not funded patient **wages**, some hospitals have had to close useful **occupational, vocational and rehabilitative programs**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Least restrictive alternative",
              "text": "The patient has a right to the **least restrictive** means of treatment that achieves the needed clinical effect: outpatient care before **commitment**, an open ward before **seclusion**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Paying patient workers",
              "text": "If a ward job helps the patient, the hospital still has to pay for the labor. When there is no money for wages, the risk is losing the rehabilitation program altogether, which is a known unintended effect of this right."
            }
          ]
        },
        {
          "id": "s28-seclu",
          "title": "Seclusion and restraint",
          "blocks": [
            {
              "type": "p",
              "text": "**Seclusion** and **restraint** raise complex legal questions. Each has accepted **indications** and **contraindications** (Table 28-2). Their use has come under **more and more regulation** over roughly the **past decade**."
            },
            {
              "type": "p",
              "text": "Lawsuits over restraint and seclusion have been filed for institutionalized people with **psychiatric illness** or **cognitive disabilities**. Such suits usually do **not stand alone**. They tend to be one part of a broader attack on many **alleged abuses** in the institution."
            },
            {
              "type": "table",
              "caption": "When seclusion and restraint may and may not be used (see Table 28-2; based on an APA task force report)",
              "head": [
                "",
                "Item",
                "Footnote"
              ],
              "rows": [
                [
                  "Indication",
                  "Stop **clear, imminent harm** to self or others",
                  ""
                ],
                [
                  "Indication",
                  "Stop **significant disruption** of the treatment program or the physical setting",
                  ""
                ],
                [
                  "Indication",
                  "Support an ongoing **behavior therapy** plan",
                  ""
                ],
                [
                  "Indication",
                  "Reduce **sensory overstimulation**",
                  "**Seclusion only**"
                ],
                [
                  "Indication",
                  "A **reasonable voluntary request** from the patient",
                  ""
                ],
                [
                  "Contraindication",
                  "**Extremely unstable** medical and psychiatric conditions",
                  "Unless **close supervision and direct observation**"
                ],
                [
                  "Contraindication",
                  "**Delirious or demented** patients unable to bear **reduced stimulation**",
                  "Unless close supervision and direct observation"
                ],
                [
                  "Contraindication",
                  "**Overtly suicidal** patients",
                  "Unless close supervision and direct observation"
                ],
                [
                  "Contraindication",
                  "**Severe drug reactions** or **overdoses**, or a need for close watching of **drug doses**",
                  "Unless close supervision and direct observation"
                ],
                [
                  "Contraindication",
                  "As **punishment** or for **staff convenience**",
                  "Never allowed (no exception)"
                ]
              ],
              "note": "Source: American Psychiatric Association, Task Force Report No. 22, titled Psychiatric Uses of Seclusion and Restraint."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Never for punishment or convenience",
              "text": "Four contraindications can be overridden if the patient is closely supervised and directly observed. The fifth cannot: seclusion or restraint is **never** acceptable as **punishment** or for the **convenience of staff**."
            },
            {
              "type": "p",
              "text": "In general, **courts** rule, or **consent decrees** require, that hospitals use restraint or seclusion only when the patient poses a **risk of harm** to themselves or others and there is **no less restrictive alternative**. Table 28-3 adds further limits."
            },
            {
              "type": "table",
              "caption": "Legal limits on seclusion and restraint (see Table 28-3)",
              "head": [
                "Requirement",
                "What it means in practice"
              ],
              "rows": [
                [
                  "Threshold",
                  "Use only for **risk of harm** to themselves or others, and only if **no less restrictive** option exists"
                ],
                [
                  "Order",
                  "Needs a **written order** signed by a suitable **medical official**"
                ],
                [
                  "Duration",
                  "Orders cover **specific, time-limited** periods"
                ],
                [
                  "Monitoring",
                  "Staff **review** the patient's state **regularly** and **document** it"
                ],
                [
                  "Extension",
                  "Any extension must be **reviewed and reauthorized**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Seclusion-only indication",
              "text": "Of the indications in Table 28-2, **decreasing sensory overstimulation** applies to **seclusion only**, not to restraint."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Link to the least restrictive principle",
              "text": "The legal threshold for seclusion and restraint is the least restrictive alternative principle applied on the ward. Before writing the order, note which less restrictive steps were tried or why none would work."
            },
            {
              "type": "case",
              "title": "A man with delirium and a seclusion request",
              "text": "A man in his 70s with delirium after surgery becomes agitated and loud on a busy medical unit. A nurse suggests putting him alone in a quiet seclusion room to calm him, with checks once an hour.",
              "point": "Seclusion is contraindicated for a delirious patient who cannot bear less stimulation, unless staff supervise closely and observe directly. Hourly checks do not meet that standard."
            },
            {
              "type": "update",
              "year": 2006,
              "title": "Time limits in current US rules, and the Philippine rule",
              "text": "Table 28-3 says orders must be time-limited but gives no numbers. For US hospitals in Medicare, the federal patients' rights rule (**42 CFR 482.13(e)**) sets them for restraint or seclusion used for violent or self-destructive behavior. Each order lasts at most **4 hours** for adults, **2 hours** for ages **9 to 17**, and **1 hour** for children **under 9**. Orders may be renewed up to **24 hours** in total; after that a physician or other licensed practitioner must see and assess the patient before a new order. **Standing and as-needed (PRN) orders are not allowed.** The patient must be seen **face to face within 1 hour** of the start by a physician, another licensed practitioner or a specially trained nurse. State law may be stricter. In the Philippines, the **Mental Health Act** lists freedom from **solitary confinement** among service users' rights (Section 5), requires informed consent for **physical or chemical restraint** (Section 8), and allows restraint without consent only under the **Section 13** conditions.",
              "source": "US Code of Federal Regulations, 42 CFR 482.13(e), Condition of participation: patient's rights (restraint or seclusion)"
            }
          ]
        },
        {
          "id": "s28-consent",
          "title": "Informed consent and the consent form",
          "blocks": [
            {
              "type": "p",
              "text": "When a patient is injured, the patient's lawyer now **almost always** adds an **informed consent** claim to the claim that a procedure was done **negligently** (malpractice). It gives the plaintiff one more possible route to **liability**."
            },
            {
              "type": "p",
              "text": "Oddly, an informed consent claim needs **no expert testimony**. In an ordinary malpractice claim, the plaintiff must bring an **expert** to show that the physician **departed from accepted practice**. In a consent claim, it does not matter that the treatment was done **skillfully**, met the **standard of care** and produced a **full cure**. In real life, though, a plaintiff whose only complaint is lack of consent rarely gets far with a **jury** unless the treatment had **adverse consequences**."
            },
            {
              "type": "table",
              "caption": "Malpractice claim versus informed consent claim",
              "head": [
                "Feature",
                "Negligent performance (malpractice)",
                "Lack of informed consent"
              ],
              "rows": [
                [
                  "Expert witness",
                  "**Required** to show departure from accepted practice",
                  "**Not required**"
                ],
                [
                  "Good technique or cure",
                  "A defense",
                  "**Immaterial** to the claim"
                ],
                [
                  "Practical success with a jury",
                  "Depends on proving the departure",
                  "Weak unless there were **adverse consequences**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "No expert needed",
              "text": "An **informed consent** claim is the one claim in this setting that does **not** require **expert testimony**; a well-done treatment that cured the patient is no defense to it."
            },
            {
              "type": "h",
              "text": "Minors"
            },
            {
              "type": "list",
              "title": "Consent rules for minors",
              "items": [
                "As a rule, a **parent or guardian** must consent to a minor's medical care.",
                "By **statute**, **most states** list conditions for which minors may agree to their own care: **pregnancy**, **venereal disease**, **contagious diseases**, **alcohol abuse** and **substance dependence**.",
                "In an **emergency**, the physician need not wait for **parental consent**.",
                "Law is moving toward the **mature minor rule**, under which minors may agree to care in **ordinary circumstances**.",
                "**Emancipated minors** have an **adult's rights** if they can show they live as adults and **control their own lives**."
              ]
            },
            {
              "type": "p",
              "text": "Because of the **Supreme Court**'s **1967** decision in **Gault**, every juvenile must now have **counsel**, the chance to **confront witnesses** and **proper notice** of any charges."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Older terms in the statute list",
              "text": "The listed conditions use older wording. \"Venereal disease\" is now usually called a sexually transmitted infection, and DSM-5-TR replaced \"substance dependence\" and \"alcohol abuse\" with substance use disorder and alcohol use disorder. Which conditions a minor may consent to differs from state to state."
            },
            {
              "type": "h",
              "text": "The consent form"
            },
            {
              "type": "steps",
              "title": "Essential elements of a consent form",
              "items": [
                [
                  "Explain",
                  "A **fair account** of what the **procedures** are and **why** they are done"
                ],
                [
                  "Flag research",
                  "Identify any procedures that are **experimental**"
                ],
                [
                  "Risks",
                  "Describe the expected **discomforts and risks**"
                ],
                [
                  "Benefits",
                  "State the **benefits** that can reasonably be expected"
                ],
                [
                  "Alternatives",
                  "Disclose suitable **alternative procedures** that could help the patient"
                ],
                [
                  "Questions",
                  "**Offer to answer** any questions about the procedures"
                ],
                [
                  "Withdrawal",
                  "Explain that the patient may **withdraw consent** and stop taking part **at any time** **without prejudice**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Some writers propose that a **standardized discussion** covering these same points could **replace the form**. If so, the clinician must **document the discussion**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "The talk matters more than the paper",
              "text": "A signed form is only evidence that the conversation happened. Whether you use a form or a standard discussion, the note should show that each element was covered and that the patient was told they could stop at any time."
            },
            {
              "type": "case",
              "title": "A cure that still leads to a lawsuit",
              "text": "A woman has a procedure that is done well, meets the standard of care and fully resolves her problem. She later sues, saying she was never told about the risks or the alternatives. Her lawyer does not plan to call an expert.",
              "point": "A consent claim needs no expert, and a good result does not defeat it; in practice, though, juries seldom favor such a claim unless the treatment caused harm."
            }
          ]
        },
        {
          "id": "s28-custody",
          "title": "Child custody",
          "blocks": [
            {
              "type": "p",
              "text": "In a **custody dispute**, the court focuses on the **child's best interests**. This standard means a biological parent has **no inherent right** to be named the custodial parent."
            },
            {
              "type": "p",
              "text": "For **young children**, a presumption in favor of the **mother** still exists, though it has **eroded somewhat**. Courts usually assume that a child of **tender years** does best living with the **mother**, provided she is a **fit, capable parent**."
            },
            {
              "type": "p",
              "text": "Custody may also help the mother, since many parents might never get over the grief of losing a child. But the mother's best interest is **not automatically** the same as the **child's** best interest (**not ipso facto** equal)."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Whose interest counts",
              "text": "A parent's need or distress is a real factor, but it is not the legal test. Keep the evaluation centered on the child; do not let a parent's interest stand in for the child's."
            },
            {
              "type": "defs",
              "title": "Key terms",
              "items": [
                [
                  "Best interests of the child",
                  "The central standard the court applies in custody disputes"
                ],
                [
                  "Tender years presumption",
                  "Courts presume a **young child**'s welfare is usually best served by a **fit mother**; still present but **a bit eroded**"
                ],
                [
                  "Care and protection proceedings",
                  "The court steps into a child's **welfare** when the **parents cannot care** for the child"
                ],
                [
                  "Juvenile court jurisdiction",
                  "**Every state** has a **statute** letting a court, usually a **juvenile court**, take jurisdiction over an **abused or neglected** child and **remove** the child from the parents"
                ]
              ]
            },
            {
              "type": "p",
              "text": "More **fathers** now seek custody. Fathers receive custody in roughly **5 percent** of cases. As more women hold jobs **outside the home** and more men become the **primary caregiver**, the old reasoning for maternal custody carries **less weight** than it once did."
            },
            {
              "type": "p",
              "text": "When a court takes charge of an abused or neglected child, it usually has a **welfare** or **probation department** oversee the child's care and custody."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "The custody standard",
              "text": "The court decides custody on the **child's best interests**; a natural parent has **no inherent right** to custody."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Fathers and the old presumption",
              "text": "The maternal presumption rests on older family roles. As caregiving roles shift, a father who has been the main caregiver can make a strong claim, even though the share of cases in which fathers get custody is still small."
            },
            {
              "type": "case",
              "title": "Removal from the home",
              "text": "A 6-year-old is found repeatedly left alone without food, and school staff see untreated injuries. Child services bring the matter to court.",
              "point": "Every state has a statute that lets a court, usually a juvenile court, take charge of an abused or neglected child, remove the child from the parents and have a welfare or probation department supervise care."
            },
            {
              "type": "update",
              "year": 1987,
              "title": "Philippines: custody under the Family Code",
              "text": "The custody rules in this section are from the United States. In the Philippines, **Article 213 of the Family Code** says that when parents separate, the **court** decides who exercises parental authority, taking all relevant considerations into account. It gives special weight to the **choice of a child over 7 years old**, unless the parent chosen is **unfit**. A child **under 7** is **not separated from the mother** unless the court finds **compelling reasons** to order otherwise. This is a written form of the tender years idea described above.",
              "source": "Family Code of the Philippines (Executive Order No. 209, 1987), Article 213"
            }
          ]
        },
        {
          "id": "s28-capacity",
          "title": "Testamentary and contractual capacity, competence and the durable power of attorney",
          "blocks": [
            {
              "type": "p",
              "text": "A court may ask a psychiatrist to assess **testamentary capacity**, that is, **competence to make a will**. Proof of this competence needs **three psychological abilities**."
            },
            {
              "type": "list",
              "title": "The three abilities for testamentary capacity",
              "items": [
                "Knowing the **nature and extent** of one's **bounty** (property).",
                "Knowing that one is **making a bequest**.",
                "Knowing who one's **natural beneficiaries** are (**spouse**, **children** and other **relatives**)."
              ]
            },
            {
              "type": "p",
              "text": "When a will goes through **probate**, an **heir** or another person may **contest** it. The court must then **reconstruct** how the **testator**'s mind worked when the will was written, using **documents** and **expert psychiatric testimony**. If a person cannot or does not write a will, **all states** have rules that pass the property to the **heirs**. Where there are **no heirs**, the **public treasury** receives the estate."
            },
            {
              "type": "p",
              "text": "People who witness the **signing** of a will, possibly including a psychiatrist, can confirm the testator seemed **rational** at that moment. Occasionally a lawyer will **videotape** the signing to protect the will against challenge. Ideally, a person who expects questions about their competence should hire a **forensic psychiatrist** for an impartial examination **antemortem** (while alive) to confirm and record capacity."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Assess before, not after",
              "text": "A will contest forces the court to reconstruct a dead person's mind from records. A careful, impartial examination done at the time of signing, while the person is alive, is far stronger evidence."
            },
            {
              "type": "h",
              "text": "Guardianship and competence"
            },
            {
              "type": "p",
              "text": "An **incompetence proceeding** and appointment of a **guardian** may be needed when a relative is **using up the family's assets**, putting the property at risk of being **dissipated**. Typical examples are **elderly** people and those with **cognitive disabilities**, **alcohol dependence** or **psychosis**. The question is whether the person can **manage their affairs**. A property guardian has **no power to write a will** on behalf of the **ward** (the person found incompetent)."
            },
            {
              "type": "list",
              "title": "Core principles of competence",
              "items": [
                "Competence rests on being able to judge soundly: to **weigh**, **reason** and reach **reasonable decisions**.",
                "Competence is **task-specific**; it is never a global trait.",
                "It is often best shown when the person can **ask pertinent, knowledgeable questions** after the **risks and benefits** are explained.",
                "Physicians, especially psychiatrists, give **opinions**; only a **judge's ruling** makes it a **finding**. No one is competent or incompetent until the **court** rules.",
                "A **mental disorder diagnosis alone** is **not enough** for incompetence; the disorder must **impair judgment** on the **specific issues** at stake.",
                "Incompetence is decided in a **formal court proceeding**, after which the court usually names a **guardian** to serve the patient's interests.",
                "A **separate hearing** is needed to restore a finding of **competence**.",
                "**Hospital admission**, even **involuntary**, does **not automatically** mean the person is incompetent."
              ]
            },
            {
              "type": "list",
              "title": "Rights lost after a finding of incompetence",
              "items": [
                "Making **contracts**",
                "**Marrying**",
                "Starting a **divorce** action",
                "**Driving** a vehicle",
                "**Handling property**",
                "**Practicing a profession**"
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Committed is not incompetent",
              "text": "Do not assume a patient on an involuntary hold has lost legal capacity. Incompetence needs its own court ruling, and a diagnosis by itself never settles it."
            },
            {
              "type": "h",
              "text": "Contracts and marriage"
            },
            {
              "type": "p",
              "text": "Since a **contract** binds parties to carry out a **specific act**, it too depends on competence. A contract is **invalid** if, at signing, a party could not understand the **nature and effect** of the act. **Marriage** is a contract held to the **same standard**: it can be **voided** if either spouse did not grasp its **nature, duties and obligations** at the time. Even so, courts are generally **reluctant** to void a marriage for incompetence."
            },
            {
              "type": "p",
              "text": "For wills, contracts and marriage alike, the core question is the person's **awareness** and **ability to understand** what the specific commitment means."
            },
            {
              "type": "table",
              "caption": "Capacity for specific acts",
              "head": [
                "Act",
                "What the person must grasp",
                "Notes"
              ],
              "rows": [
                [
                  "Will (testamentary capacity)",
                  "**Nature and extent** of property, that a **bequest** is being made, the **natural beneficiaries**",
                  "Reconstructed at **probate** if contested; a **guardian cannot write a will** for the ward"
                ],
                [
                  "Contract",
                  "The **nature and effect** of the act at signing",
                  "**Invalid** if not understood"
                ],
                [
                  "Marriage",
                  "The **nature, duties and obligations** of marriage at the time",
                  "Can be **voided**, but courts are **reluctant** to do so"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Durable power of attorney"
            },
            {
              "type": "p",
              "text": "A **durable power of attorney** is a **modern** tool that lets a person plan ahead for losing decision-making capacity. The person chooses a **substitute decision maker** **in advance**. That person can act **without court proceedings** once the signer becomes incompetent from **illness** or **progressive dementia**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Testamentary capacity",
              "text": "The three abilities are knowing the **nature and extent of one's property**, knowing one is **making a bequest**, and knowing one's **natural beneficiaries**."
            },
            {
              "type": "case",
              "title": "An elderly man spending down the estate",
              "text": "A 79-year-old man with progressive memory loss has been giving away large sums, and his children fear the family property will be gone. He is not yet under any court order.",
              "point": "An incompetence proceeding and appointment of a guardian may be needed when assets are at risk of dissipation; only the court's ruling, not the psychiatrist's opinion, makes him incompetent, and the guardian could not write a will for him."
            },
            {
              "type": "update",
              "year": 1949,
              "title": "Philippines: capacity to make a will",
              "text": "Philippine law states testamentary capacity in the **Civil Code**. A person **under 18** cannot make a will (**Article 797**). The testator must be of **sound mind when the will is made** (**Article 798**). Sound mind does not require unbroken or unimpaired faculties: it is enough that the testator knows the **nature of the estate**, the **proper objects of his or her bounty**, and the **character of the act** (**Article 799**). These are the same three abilities this section lists. The law **presumes** soundness of mind, so the person who opposes the will must prove otherwise. One exception: if the testator was **publicly known to be insane within one month** before the will, the person defending the will must prove it was made in a **lucid interval** (**Article 800**).",
              "source": "Civil Code of the Philippines (Republic Act No. 386, 1949), Articles 796 to 800"
            }
          ]
        }
      ]
    },
    {
      "title": "Criminal law and other forensic areas",
      "sections": [
        {
          "id": "s28-trial",
          "title": "Competence to stand trial and competence to be executed",
          "blocks": [
            {
              "type": "p",
              "text": "Criminal law asks psychiatrists two kinds of competence questions about a defendant: can this person be tried now, and, at the far end of the process, can this person be put to death. Both look at the person's **present** mental state, not at the state of mind when the crime happened."
            },
            {
              "type": "h",
              "text": "Competence to stand trial"
            },
            {
              "type": "p",
              "text": "The **US Supreme Court** has called the ban on trying a mentally incompetent person a **fundamental** part of the US justice system. In **Dusky v. the United States**, the Court approved a two-part test of trial competence."
            },
            {
              "type": "defs",
              "title": "The Dusky test (two prongs)",
              "items": [
                [
                  "Ability to work with counsel",
                  "Does the defendant have the **present ability** to work with counsel, showing **reasonably rational understanding**?"
                ],
                [
                  "Understanding of the case",
                  "Does the defendant understand the proceedings against him both **factually** and **rationally**?"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Dusky in one line",
              "text": "Trial competence (**Dusky v. the United States**) = **present** ability to consult a lawyer rationally + a **rational and factual** grasp of the proceedings. It is about now, not about the time of the offense."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Do not mix up the questions",
              "text": "Competence to stand trial looks at the defendant's **current** abilities. Criminal responsibility (the insanity defense) looks back at the mind at the **time of the act**. A person can be competent now and still raise an insanity defense, or the reverse."
            },
            {
              "type": "h",
              "text": "Competence to be executed"
            },
            {
              "type": "p",
              "text": "Competence to be executed is one of the **newer** areas where psychiatry and law meet. The rule that a condemned person must be competent is thought to rest on **three** general principles."
            },
            {
              "type": "steps",
              "title": "Why the law wants a competent person at execution",
              "items": [
                [
                  "1. Retribution",
                  "Awareness is meant to **heighten the retributive** side of punishment. A penalty means little unless the person knows it is happening and **knows why**."
                ],
                [
                  "2. Religious peace",
                  "A competent person is best placed to make **religious peace** in whatever way fits his or her faith, for example through **confession and absolution**."
                ],
                [
                  "3. A last chance at exoneration",
                  "A competent person keeps, to the end, the slim chance of **remembering an overlooked detail** about the events that would clear him or her."
                ]
              ]
            },
            {
              "type": "p",
              "text": "The need to keep this competence was upheld in the Supreme Court case **Ford v. Wainwright**."
            },
            {
              "type": "h",
              "text": "The ethical problem for clinicians"
            },
            {
              "type": "p",
              "text": "Whatever courts decide, most medical bodies regard any clinician's role in **state-mandated executions**, however remote, as **unethical**. The reason given is that a doctor's **duty to preserve life** outranks every competing demand. Large groups, the **American Medical Association (AMA)** among them, say physicians should **not take part in capital punishment**."
            },
            {
              "type": "p",
              "text": "The dilemma is concrete. A psychiatrist who examines a condemned person may find the person **incompetent** because of a mental disorder and may propose a **treatment plan**. If that plan works, the treatment would make the person **fit to be executed**."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Where the authors stand",
              "text": "The text admits there is room for honest disagreement about whether a psychiatrist should be involved at all, but its authors **side with the AMA**: doctors should stay out of the death penalty."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Named case to recall",
              "text": "**Ford v. Wainwright** (US Supreme Court) supported the rule that a person must be **competent to be executed**."
            },
            {
              "type": "update",
              "year": 2019,
              "title": "Competence to be executed: later Supreme Court cases",
              "text": "**Ford v. Wainwright** was decided in **1986**: the Eighth Amendment bars executing a prisoner who has lost his sanity. Two later cases set the test. **Panetti v. Quarterman (2007)** asks whether mental illness leaves the prisoner without a **rational understanding** of why the state is executing him. **Madison v. Alabama (2019)** applied this to a prisoner with vascular dementia. The Court held that **not remembering the crime** does not by that fact alone bar execution, and that **dementia**, not only psychosis, can make a prisoner incompetent if it removes that rational understanding. The test looks at the **effect** of a disorder, not its diagnosis.",
              "source": "Madison v. Alabama, 586 U.S. ___ (US Supreme Court, February 27, 2019)"
            }
          ]
        },
        {
          "id": "s28-resp",
          "title": "Criminal responsibility: the basic idea, M'Naghten and irresistible impulse",
          "blocks": [
            {
              "type": "p",
              "text": "In criminal law, doing something harmful to society does not by itself make a crime. The wrongful act needs **two components**."
            },
            {
              "type": "defs",
              "title": "The two parts of a crime",
              "items": [
                [
                  "Actus reus",
                  "**Voluntary conduct**: the act itself, done willingly."
                ],
                [
                  "Mens rea",
                  "**Evil intent**: the guilty mind behind the act."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Evil intent cannot exist when the offender's mental state is so **deficient, abnormal, or diseased** that it removed the ability to form **rational intent**. Criminal law acts only when an illegal intent is **carried out**. Harmful behavior alone, or an intent to harm alone, is **not** enough for criminal action."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Both parts are needed",
              "text": "A crime requires **actus reus** (voluntary conduct) **and** **mens rea** (evil intent). The insanity defense attacks the **mens rea** part."
            },
            {
              "type": "h",
              "text": "The M'Naghten rule (1843)"
            },
            {
              "type": "p",
              "text": "The precedent for judging legal responsibility was set in **1843** in the **British courts**. Until recently, **most of the United States** used the **M'Naghten rule** to decide criminal responsibility. It is commonly called the **right-wrong test**."
            },
            {
              "type": "p",
              "text": "Under it, a person is found **not guilty by reason of insanity** when, because of mental disease, he or she did not know the **nature, quality, and consequences** of the act, or could not realize that the act was **wrong**. There is a further limit on delusions: a delusion counts as a defense only if the act **would be justified were the delusion true**. If the delusional belief would not excuse the crime, the person is presumably held responsible and punishable."
            },
            {
              "type": "case",
              "title": "The original case: a man who shot the wrong target",
              "text": "In 1843, **Daniel M'Naghten** had suffered **delusions of persecution** for several years and had complained to many people about his persecutors. He decided to solve the problem by killing **Robert Peel**. When Peel's private secretary, **Edward Drummond**, left Peel's home, M'Naghten shot him, believing he was Peel. Following the law of the time, the jury found him **not guilty by reason of insanity**.",
              "point": "This verdict prompted questions about when insanity could be pleaded, and the English chief judge's answers became the **M'Naghten rule**."
            },
            {
              "type": "list",
              "title": "The chief judge's two guidelines (in plain words)",
              "items": [
                "**Clear proof** is required that, at the time of the act, the accused had a **defect of reason** caused by **disease of the mind**, so that he did not know the act's **nature and quality** or, if he did, did not know it was **wrong**.",
                "A person with only **partial delusions**, otherwise sane, who offends because of them, is judged **as if the deluded facts were real**."
              ]
            },
            {
              "type": "p",
              "text": "The test is narrow. It does not ask whether the accused knows right from wrong **in general**. It asks whether the defendant grasped the **nature and quality** of **this act** and knew **this act** was wrong, or instead believed it was right, for example because a delusion made the act seem like **legitimate self-defense**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Delusion must excuse the act",
              "text": "Under M'Naghten, the content of the delusion matters. If the deluded facts, taken as true, would **not** be a legal defense, the person is still treated as **responsible**."
            },
            {
              "type": "case",
              "title": "A serial killer whose planning defeated the plea",
              "text": "Between **June 1978 and July 1991**, a man murdered **17** victims, young men and boys, most of whom were gay or bisexual. He met them at gay bars or bathhouses, lured them home with offers of money for photos or of beer and videos, then drugged and strangled them, performed sexual acts with the bodies, dismembered them, and sometimes kept skulls or other parts. On **July 13, 1992**, **Jeffery Dahmer** changed his plea, now relying on **insanity**. Jurors decided that his **careful planning** and **systematic disposal** of bodies showed he **could control his behavior**, and the testimony supported that he was aware of his actions and **could tell right from wrong**. The jury rejected the claim that mental illness had disabled his thinking or controls. He received **15 consecutive life terms** (**957 years**) and was killed by another inmate on **November 28, 1994**.",
              "point": "Evidence of planning and concealment weighs heavily against an insanity defense: it suggests the person knew the act was wrong and could control it, as the jury found for most serial killers."
            },
            {
              "type": "h",
              "text": "Irresistible impulse (1922)"
            },
            {
              "type": "p",
              "text": "A **committee of jurists in England** looked again at M'Naghten in **1922** and proposed widening insanity to include the **irresistible impulse test**. Under it, a person is not responsible for an act done under an impulse he or she **could not resist because of mental disease**."
            },
            {
              "type": "p",
              "text": "Courts read this so strictly that it became known as the **policeman-at-the-elbow law**: an impulse counts as irresistible only if the accused **would have acted even with a police officer standing beside him**. Most psychiatrists find this unsatisfying because it helps just a **small, select group** of mentally ill people."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Cognitive versus volitional",
              "text": "M'Naghten asks about **knowing** (did the person know the act or its wrongness). Irresistible impulse adds a **control** question (could the person stop). Keep this split in mind when you meet the later tests."
            },
            {
              "type": "update",
              "year": 1992,
              "title": "Correction: details of the Dahmer case",
              "text": "The name is **Jeffrey** Dahmer. He changed his plea on **January 13, 1992** (the book prints July 13), from not guilty to **guilty but insane**, to 15 counts of murder in Milwaukee. Because guilt was admitted, the trial was only about his mental state. On **February 15, 1992** the jury found him **sane** on all counts, and the sentence was **15 life terms**, one after another. The teaching point is unchanged: evidence of planning and concealment was taken to show that he could control his behavior.",
              "source": "United Press International, Dahmer changes plea to guilty (January 13, 1992) and Jury finds Dahmer sane (February 15, 1992)"
            }
          ]
        },
        {
          "id": "s28-resp2",
          "title": "Criminal responsibility: Durham, the Model Penal Code and guilty but mentally ill",
          "blocks": [
            {
              "type": "h",
              "text": "The Durham rule (1954)"
            },
            {
              "type": "p",
              "text": "In **1954**, **Judge Bazelon** (**District of Columbia Court of Appeals**) ruled in **Durham v. the United States**, a decision that created the **product rule**: a defendant bears no criminal responsibility when the illegal act was the **product** of a **mental disease or defect**."
            },
            {
              "type": "p",
              "text": "Bazelon said openly that the rule aimed to bring in **good and complete psychiatric testimony** and to free the law from the **theoretical straitjacket** of M'Naghten. In practice, judges and juries became **confused** over the words **product, disease, and defect**."
            },
            {
              "type": "p",
              "text": "In **1972**, about **18 years** after adopting it, the same court discarded Durham in **United States v. Brawner**. All **nine members**, Judge Bazelon among them, joined a **143-page opinion** that replaced it with the test the **American Law Institute** had recommended in **1962** in its **model penal code**. The text says this test now governs the **federal courts**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Durham to Brawner",
              "text": "**Durham** (1954, Judge **Bazelon**, DC Court of Appeals) = **product rule**. Dropped in **United States v. Brawner** (**1972**) in favor of the **American Law Institute** test (1962)."
            },
            {
              "type": "h",
              "text": "The Model Penal Code (American Law Institute) test"
            },
            {
              "type": "p",
              "text": "A person escapes responsibility for criminal conduct when, at the time, because of **mental disease or defect**, he or she had lost **substantial capacity** to **appreciate** that the conduct was **criminal (wrongful)**, or to **conform** it to legal requirements. The phrase mental disease or defect **excludes** an abnormality shown **only by repeated criminal or antisocial conduct**."
            },
            {
              "type": "list",
              "title": "Five operative concepts in subsection 1",
              "items": [
                "**Lack of substantial capacity**",
                "**Mental disease or defect**",
                "**Appreciation**",
                "**Wrongfulness**",
                "**Conforming conduct** to what the law requires"
              ]
            },
            {
              "type": "p",
              "text": "The **second subsection** says repeated criminal or antisocial behavior is not, by itself, a mental disease or defect. Its purpose is to keep the **sociopath or psychopath** inside criminal responsibility. (These are older labels; the closest DSM-5-TR diagnosis is antisocial personality disorder.)"
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Antisocial conduct alone is not enough",
              "text": "Under the American Law Institute rule, a record of **repeated crime or antisocial acts** cannot by itself establish the mental disease or defect needed for an insanity defense."
            },
            {
              "type": "h",
              "text": "Guilty but mentally ill"
            },
            {
              "type": "p",
              "text": "**Some states** have added an alternative verdict, **guilty but mentally ill**. Under these statutes, the jury may choose it whenever the defense is **insanity** (an NGRI plea). An insanity plea can then end in **four** ways."
            },
            {
              "type": "list",
              "title": "Possible outcomes of an insanity plea in these states",
              "items": [
                "**Guilty**",
                "**Guilty but mentally ill**",
                "**Not guilty by reason of insanity**",
                "**Not guilty**"
              ]
            },
            {
              "type": "p",
              "text": "Critics call it a verdict **without a difference**, because in effect it equals a plain guilty verdict: a **sentence** still has to be imposed. The person is said to get psychiatric treatment if needed, but that treatment is already available to **all prisoners**."
            },
            {
              "type": "table",
              "caption": "Comparing the insanity standards and verdicts in this chapter (summary of the criminal responsibility section)",
              "wide": true,
              "head": [
                "Standard",
                "Origin and year",
                "Core question",
                "Main criticism or limit"
              ],
              "rows": [
                [
                  "**M'Naghten rule** (right-wrong test)",
                  "**British courts**, **1843**",
                  "Did mental disease stop the person knowing the act's **nature and quality**, or that it was **wrong**? A delusion excuses only if, taken as true, it would justify the act",
                  "Narrow; looks only at **knowing**; until recently the rule in most of the United States"
                ],
                [
                  "**Irresistible impulse**",
                  "**Committee of jurists in England**, **1922**",
                  "Was the act done under an impulse the person **could not resist** because of mental disease?",
                  "Read as the **policeman-at-the-elbow** law; applies to just a **small, select group**"
                ],
                [
                  "**Durham rule** (product rule)",
                  "Judge **Bazelon**'s ruling in **Durham v. the United States**, DC Court of Appeals, **1954**",
                  "Did the crime **stem from** (was it the **product** of) mental disease or defect?",
                  "Confusion over **product, disease, defect**; discarded in **United States v. Brawner**, **1972**"
                ],
                [
                  "**Model Penal Code** (American Law Institute)",
                  "Recommended **1962**; adopted in **Brawner**, 1972",
                  "Did mental disease or defect leave the person without **substantial capacity** to **appreciate** wrongfulness or to **conform** conduct to law?",
                  "Excludes abnormality shown **only** by repeated criminal or antisocial conduct; described as federal law today"
                ],
                [
                  "**Guilty but mentally ill** (a verdict, not a test)",
                  "**Some states**",
                  "Jury option once the defense raises **insanity** (an NGRI plea)",
                  "A verdict **without a difference**: sentence still imposed; treatment open to **all prisoners** anyway"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "How the tests grew",
              "text": "Each test widened or reworded the last: M'Naghten (**knowing**), then irresistible impulse (**control**), then Durham (**product** of illness), then the American Law Institute test, which joins **appreciation** and **conformity** with the softer word **substantial**."
            },
            {
              "type": "update",
              "year": 2020,
              "title": "The federal test changed in 1984; states may narrow the defense",
              "text": "The book says the American Law Institute test governs federal courts today. It did, until the **Insanity Defense Reform Act of 1984** (18 U.S.C. section 17). Federal courts now ask only whether, because of a **severe** mental disease or defect, the defendant was **unable to appreciate the nature and quality or the wrongfulness** of the acts. The **\"conform conduct\"** (volitional) part of the ALI test was **removed**, and the **defendant** must prove insanity by **clear and convincing evidence**. States set their own rules. In **Kahler v. Kansas (2020)**, the US Supreme Court held, 6 to 3, that due process does **not** require a state to offer an insanity test based on knowing right from wrong. Kansas may limit mental illness evidence to showing that the defendant lacked the **intent** the crime requires, and consider it again at sentencing.",
              "source": "Kahler v. Kansas, 589 U.S. ___ (US Supreme Court, March 23, 2020)"
            },
            {
              "type": "update",
              "year": 2020,
              "title": "Philippines: insanity as an exempting circumstance",
              "text": "In the Philippines, **Article 12 of the Revised Penal Code** exempts from criminal liability an **imbecile or insane person**, unless the person acted during a **lucid interval**. An insane person who has committed a felony is **confined** by court order in a hospital or asylum and cannot leave without the **same court's permission**. Courts long required a **complete deprivation of intelligence** (the *Formigones* standard). In **People v. Paña (G.R. No. 214444, November 17, 2020)**, the Supreme Court, sitting en banc, restated the test in three parts: insanity must be present **at the time of the crime**; it must be **medically proven** to be the main cause of the act; and its effect must be an **inability to appreciate the nature and quality or the wrongfulness** of the act. The accused must prove it by **clear and convincing evidence**. The Court said the older standard reflected an outdated view of mental illness. In that case the defense failed and the conviction was affirmed.",
              "source": "People v. Paña, G.R. No. 214444 (Supreme Court of the Philippines, en banc, November 17, 2020)"
            }
          ]
        },
        {
          "id": "s28-other",
          "title": "Emotional damage, recovered memories and workers' compensation",
          "blocks": [
            {
              "type": "h",
              "text": "Emotional damage and distress"
            },
            {
              "type": "p",
              "text": "Lawsuits for **psychological and emotional damage** have risen quickly in recent years. Claims arise in three main ways."
            },
            {
              "type": "list",
              "items": [
                "Damage **secondary to a physical injury**.",
                "Damage from **witnessing a stressful act**.",
                "Suffering from living under severe stress, for example the ordeal of **concentration camps**; the **German government** received many such claims from people held in **Nazi camps** in World War II."
              ]
            },
            {
              "type": "p",
              "text": "In the **United States**, courts have shifted from a **conservative** stance to a **liberal** one on awarding damages for these claims. **Both plaintiffs and defendants** often ask for psychiatric examinations and testimony."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Both sides may call you",
              "text": "In emotional-damage suits, the psychiatric examiner may be retained by **either side**, so the evaluation must be impartial."
            },
            {
              "type": "h",
              "text": "Recovered memories"
            },
            {
              "type": "p",
              "text": "Some patients who say they have **recovered memories** of abuse have taken their parents or other accused abusers to court. In turn, several accused people have sued **therapists**, claiming the therapists, through **negligence**, **induced false memories** of being sexually abused. In a reversal, some patients have **recanted** and joined others, usually their **parents**, to sue the therapist."
            },
            {
              "type": "p",
              "text": "Courts have awarded **multimillion-dollar judgments** against clinicians. The central claim is that the therapist dropped a **neutral** stance and used suggestion, persuasion, or coercion to **plant false memories** of childhood sexual abuse. In risk management, the guiding rule is to keep **therapist neutrality** and set **sound treatment boundaries**."
            },
            {
              "type": "table",
              "caption": "Risk management when a patient recovers memories of abuse in therapy (see Table 28-4)",
              "head": [
                "#",
                "Principle in brief"
              ],
              "rows": [
                [
                  "1",
                  "Stay **neutral**; never **suggest** that abuse happened"
                ],
                [
                  "2",
                  "Keep a **clinical focus**: evaluate and treat the presenting problems and symptoms properly"
                ],
                [
                  "3",
                  "**Document** how the memories emerged, carefully"
                ],
                [
                  "4",
                  "Manage your own **bias** and **countertransference**"
                ],
                [
                  "5",
                  "Do not combine the **treater** and **expert witness** roles"
                ],
                [
                  "6",
                  "Watch **supervisory** and **collaborative** therapy relationships closely"
                ],
                [
                  "7",
                  "Make clear to family members that you have **no treatment role** with them"
                ],
                [
                  "8",
                  "Use **special techniques**, for instance **hypnosis** or **sodium amobarbital (Amytal)**, only when **clearly indicated**, after **consultation**"
                ],
                [
                  "9",
                  "Work within your **competence**; decline cases you cannot manage"
                ],
                [
                  "10",
                  "Separate **narrative truth** from **historical truth**"
                ],
                [
                  "11",
                  "**Get consultation** when a case is problematic"
                ],
                [
                  "12",
                  "Respect the patient's **autonomy** and **self-determination**; never **propose a lawsuit**"
                ],
                [
                  "13",
                  "In **managed care**, warn patients that treatment may need to go **beyond brief therapy**"
                ],
                [
                  "14",
                  "In **public statements**, separate personal **opinion** from established **scientific fact**"
                ],
                [
                  "15",
                  "If you feel **uncomfortable** with such a patient, **stop and refer**"
                ],
                [
                  "16",
                  "Do not shy away from **asking about abuse** in a thorough psychiatric assessment"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Neutrality cuts both ways",
              "text": "The danger is **suggesting** abuse, not **asking** about it. Table 28-4 says to avoid suggestion and special techniques, yet says that **asking about abuse** is part of a sound evaluation."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Core risk principle",
              "text": "In recovered memory cases, the main protection is **therapist neutrality** plus **sound treatment boundaries**. The usual allegation is that the therapist **implanted false memories**."
            },
            {
              "type": "h",
              "text": "Workers' compensation"
            },
            {
              "type": "p",
              "text": "Job stress can **cause or worsen** mental illness. Patients are entitled to **compensation** for job-related disability or to **disability retirement benefits**, and psychiatrists are often asked to **evaluate** these claims."
            }
          ]
        },
        {
          "id": "s28-liab",
          "title": "Civil liability, sexual exploitation and HIPAA",
          "blocks": [
            {
              "type": "h",
              "text": "Civil liability for sexual exploitation"
            },
            {
              "type": "p",
              "text": "A psychiatrist who **sexually exploits** a patient faces **civil and criminal** actions, plus **ethics** proceedings and **revocation of the professional license**. Of all these, **malpractice** is the legal action seen **most often**."
            },
            {
              "type": "table",
              "caption": "Legal and ethical consequences of sexual exploitation of a patient (see Table 28-5)",
              "head": [
                "Type of consequence",
                "Examples"
              ],
              "rows": [
                [
                  "**Civil lawsuit**",
                  "**Negligence**; **loss of consortium**; **breach of contract**"
                ],
                [
                  "**Intentional tort** (civil action)",
                  "**Battery**, **fraud**"
                ],
                [
                  "**Criminal sanctions**",
                  "**Sexual assault**, **rape**, **adultery**, statutory offenses"
                ],
                [
                  "**Ethical sanctions**",
                  "Discipline by professional ethics bodies"
                ],
                [
                  "**License revocation**",
                  "Loss of the right to practice"
                ],
                [
                  "**Dismissal** from professional organizations",
                  "Expulsion from membership"
                ]
              ],
              "note": "Table by RI Simon, M.D."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Most common action",
              "text": "Among the many consequences of sexual exploitation of a patient, the action brought most often is **malpractice**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Many penalties at once",
              "text": "These consequences are not either-or. One act of sexual exploitation can bring a **civil suit**, **criminal charges**, **license** loss and **ethics** sanctions together."
            },
            {
              "type": "h",
              "text": "HIPAA (Health Insurance Portability and Accountability Act)"
            },
            {
              "type": "p",
              "text": "**HIPAA** became law in **1996** in response to the growing **complexity** of medical care delivery and its heavier reliance on **electronic communication**. It directs **HHS**, the federal health department, to write rules guarding how patient data are **sent** and kept **confidential**. (HHS stands for the **Department of Health and Human Services**.) Every unit covered by HIPAA must follow them."
            },
            {
              "type": "p",
              "text": "At HHS, the **Office for Civil Rights (OCR)** oversees the **Privacy Rule**, which guards the privacy of patient records. Table 28-6 sums up what patients are entitled to."
            },
            {
              "type": "table",
              "caption": "Patients' rights under the HIPAA Privacy Rule (see Table 28-6)",
              "head": [
                "Right",
                "What the physician must do or allow"
              ],
              "rows": [
                [
                  "**Notice of privacy rights**",
                  "Give a **written notice** of the patient's rights, the practice's policies, and how information is used, stored, and shared; get a **written acknowledgment** that the patient saw it"
                ],
                [
                  "**Access and correction**",
                  "Let patients get **copies** of records and ask for **revisions** within a set time (**usually 30 days**); patients have **no right to see psychotherapy notes**"
                ],
                [
                  "**History of disclosures**",
                  "On request, give a list of **most disclosures** of the patient's information (some exceptions); the **APA Committee on Confidentiality** has a model document"
                ],
                [
                  "**Authorization for nonroutine uses**",
                  "Get the patient's **authorization** for any disclosure beyond **treatment, payment, and health care operations**, which are **routine uses** needing no consent; the APA Committee on Confidentiality has a model document"
                ],
                [
                  "**Other means of contact**",
                  "Honor requests for a **different way of communicating**, such as a specific phone number or address"
                ],
                [
                  "**Treatment not tied to authorization**",
                  "Physicians generally **cannot make treatment depend** on getting the patient's authorization for **nonroutine** disclosures"
                ],
                [
                  "**Complaints**",
                  "Patients may report a violation to the **physician**, to the **health plan**, or directly to the **Secretary of HHS**"
                ]
              ],
              "note": "APA = American Psychiatric Association; HHS = US Department of Health and Human Services."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Psychotherapy notes are special",
              "text": "Patients may see and copy most of the record, but they have **no right to see psychotherapy notes**. Keep that in mind when deciding what goes where in the chart."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Three routine uses",
              "text": "Disclosure to carry out **treatment, payment, and health care operations** needs **no consent** under the Privacy Rule. Anything else needs the patient's **authorization**."
            },
            {
              "type": "update",
              "year": 2024,
              "title": "HIPAA time limits and newer rules",
              "text": "Table 28-6 gives \"usually 30 days\" for record revisions. Under the Privacy Rule, a provider must act on a request for **access** to records within **30 days**, and on a request to **amend** them within **60 days**; each allows one 30-day extension with written notice. The **psychotherapy notes** exception remains: they are also left out of the newer federal rules that push clinical notes to patients electronically. Substance use treatment records have their own, stricter rule (**42 CFR Part 2**). A final rule published **February 16, 2024** brought it closer to HIPAA: one consent can cover future **treatment, payment and health care operations**, breach notification applies, and the records cannot be used **against the patient in legal proceedings** without consent or a court order. Compliance was required by **February 16, 2026**. In the Philippines, health information is **sensitive personal information** under the **Data Privacy Act of 2012**.",
              "source": "US Department of Health and Human Services, Confidentiality of substance use disorder (SUD) patient records, final rule, 89 Fed. Reg. 12472 (February 16, 2024)"
            }
          ]
        }
      ]
    }
  ]
});
