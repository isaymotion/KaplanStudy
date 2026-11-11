/* What's new. Newest entry FIRST. version = semver string (also the key for the unseen badge),
   date = ISO YYYY-MM-DD, title, items: [{ type, text }].
   Item types: "chapter", "feature", "correction", "update", "content".
   Optional per item: `ch` (chapter id: tags that chapter "Updated" on the home page while the entry is unseen),
   `href` (link into the app, e.g. "#/c/ch05/guide/s-brief") and `link` (link text, defaults to "Open").
   Every entry below the newest is a release listed in the app before the design refresh: dates, titles and
   text unchanged; each old integer id n became version "n.0.0" (same date order), so id 59 is the release before this one.
   For every release: add an entry at the top, then bump APP_META.version (data/app-meta.js), VERSION in sw.js,
   and "Latest version <Month YYYY>" in the footer (index.html), data/app-meta.js and README.md.

   Example correction:
     { type: "correction", ch: "ch05", text: "Fixed the duration of brief psychotic disorder in the timeline.",
       href: "#/c/ch05/guide/s-map", link: "See the corrected section" } */
window.APP_CHANGELOG = [
  {
    "version": "74.0.0",
    "date": "2026-11-11",
    "title": "Chapter 29.2: Palliative care (Chapter 29 complete)",
    "items": [
      {
        "type": "chapter",
        "ch": "ch29-2",
        "text": "New section 29.2, Palliative Care: anxiety, depression (Endicott substitution criteria, Table 29-5) and delirium in advanced disease, physicians' reactions (Table 29-6), breaking bad news and informed consent, terminal care decisions (Tables 29-7 and 29-8), persistent vegetative state versus brain death, the Quinlan case, advance directives, caring for the family (Table 29-9), pain and opioids (Tables 29-10 and 29-11), end-of-life symptoms (Table 29-12), hospice, dying children and spiritual care, with 71 clinical cases. Chapter 29 is now complete.",
        "href": "#/c/ch29-2/guide",
        "link": "Open the section"
      },
      {
        "type": "update",
        "ch": "ch29-2",
        "text": "Updates: current morphine conversion for repeated dosing (about 1:2 to 1:3) and why meperidine is avoided; the dronabinol label doses; Medicare hospice certification and benefit periods; POLST; and Philippine law on advance directives, the definition of death and palliative care (UHC Act, Cancer Control Act).",
        "href": "#/c/ch29-2/guide/s292-pain",
        "link": "See the opioid update"
      },
      {
        "type": "correction",
        "ch": "ch29-2",
        "text": "Correction: the Patient Self-Determination Act was passed in 1990 and took effect on December 1, 1991. Several cells of the opioid table (Table 29-11) are flagged as likely misprints.",
        "href": "#/c/ch29-2/guide/s292-ad",
        "link": "See the correction"
      },
      {
        "type": "update",
        "ch": "ch29-1",
        "text": "Section 29.1 gains a box on the Philippine legal definition of death (Organ Donation Act, RA 7170).",
        "href": "#/c/ch29-1/guide/s291-def",
        "link": "See the box"
      },
      {
        "type": "feature",
        "text": "New helper, Pain in a dying patient: which type, which approach?, and a look-alike table of advance directives and end-of-life orders.",
        "href": "#/helper/pain292",
        "link": "Open the helper"
      }
    ]
  },
  {
    "version": "73.0.0",
    "date": "2026-11-11",
    "title": "Chapter 29.1 and 29.3: Death, bereavement, euthanasia and assisted suicide",
    "items": [
      {
        "type": "chapter",
        "ch": "ch29-1",
        "text": "New section 29.1, Death, Dying, and Bereavement: defining death and brain death (Table 29-1), the psychological autopsy, Kübler-Ross stages, how children and adults face death, normal and anticipatory grief, complicated grief (Tables 29-2 and 29-3), grief versus depression and PTSD, phases of grief (Table 29-4), bereavement across the life cycle and grief therapy, with 56 clinical cases.",
        "href": "#/c/ch29-1/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch29-3",
        "text": "New section 29.3, Euthanasia and Physician-Assisted Suicide: types of euthanasia, the arguments on each side, positions of professional bodies, Kevorkian, Oregon's law (Table 29-13) and the AMA's eight-step approach (Table 29-14), with 19 clinical cases. Every position is attributed to whoever holds it.",
        "href": "#/c/ch29-3/guide",
        "link": "Open the section"
      },
      {
        "type": "correction",
        "ch": "ch29-3",
        "text": "Correction boxes fix dates the book prints wrongly: Kevorkian's first assisted death (1990) and parole (2007), Vermont's law (2013), and Montana's route (a 2009 court ruling, not a statute). Cards use the corrected facts.",
        "href": "#/c/ch29-3/guide/s293-pas",
        "link": "See the corrections"
      },
      {
        "type": "update",
        "ch": "ch29-1",
        "text": "Updates: the 2023 US brain death guideline for adults and children, the paused revision of the Uniform Determination of Death Act, prolonged grief disorder in DSM-5-TR and ICD-11, and the 2-month figures in Table 29-2.",
        "href": "#/c/ch29-1/guide/s291-def",
        "link": "See the brain death update"
      },
      {
        "type": "update",
        "ch": "ch29-3",
        "text": "Updates on current law: aid in dying in 12 US states and DC by statute plus Montana; Oregon's 2023 removal of residency and its 2025 figures; Canada's MAID and Bill C-41 on mental illness; the England and Wales and Scotland bills; and the Philippines (Revised Penal Code art. 253, Mental Health Act advance directives).",
        "href": "#/c/ch29-3/guide/s293-euth",
        "link": "See the international update"
      },
      {
        "type": "feature",
        "text": "New helper, After a loss: which picture fits?, and look-alike tables of grief patterns and of end-of-life acts that are easily confused. The grief and depression look-alike now links to section 29.1.",
        "href": "#/helper/griefdx29",
        "link": "Open the helper"
      }
    ]
  },
  {
    "version": "72.0.0",
    "date": "2026-11-11",
    "title": "Chapter 28: Forensic and legal issues",
    "items": [
      {
        "type": "chapter",
        "ch": "ch28",
        "text": "New Chapter 28, Forensic and Legal Issues: malpractice and the 4 Ds, split treatment, privilege and confidentiality, suicidal and violent patients (Tarasoff), admission procedures, rights to treatment and to refuse it, seclusion and restraint (Tables 28-2 and 28-3), informed consent, custody, capacity, competence to stand trial, the insanity standards and HIPAA, with 76 clinical cases.",
        "href": "#/c/ch28/guide",
        "link": "Open the chapter"
      },
      {
        "type": "correction",
        "ch": "ch28",
        "text": "Correction boxes fix dates and names the book prints wrongly: Tarasoff I (1974) and II (1976), O'Connor v. Donaldson (1975), Rogers v. Okin, Jaffee v. Redmond, and the Dahmer plea (January 13, 1992). Cards use the corrected facts.",
        "href": "#/c/ch28/guide/s28-violent",
        "link": "See the Tarasoff correction"
      },
      {
        "type": "update",
        "ch": "ch28",
        "text": "Updates: the 1984 federal insanity test and Kahler v. Kansas (2020); Madison v. Alabama (2019) on competence to be executed; the military psychotherapist-patient privilege; current US time limits for seclusion and restraint orders; HIPAA time limits and the 2024 rule on substance use records; and treatment for tardive dyskinesia."
      },
      {
        "type": "update",
        "ch": "ch28",
        "text": "Philippine law boxes: the Mental Health Act (RA 11036) on consent, emergency treatment and confidentiality; insanity under Article 12 of the Revised Penal Code and People v. Paña (2020); wills under the Civil Code; custody under Article 213 of the Family Code; and privilege under the 2019 Rules on Evidence.",
        "href": "#/c/ch28/guide/s28-resp2",
        "link": "See the insanity box"
      },
      {
        "type": "feature",
        "text": "New helper, Which insanity standard fits?, and a look-alike table of forensic terms that are easily confused (privilege and confidentiality, warn and protect, opinion and finding).",
        "href": "#/helpers/insanity28",
        "link": "Open the helper"
      }
    ]
  },
  {
    "version": "71.0.0",
    "date": "2026-11-11",
    "title": "Chapters 26 and 27: Level of care; ethics and professionalism",
    "items": [
      {
        "type": "chapter",
        "ch": "ch26",
        "text": "New Chapter 26, Level of Care: matching patients to inpatient, partial hospital, intensive outpatient, outpatient or residential care (Table 26-1), involuntary admission, length of stay and discharge planning, with 20 clinical cases.",
        "href": "#/c/ch26/guide",
        "link": "Open the chapter"
      },
      {
        "type": "chapter",
        "ch": "ch27",
        "text": "New Chapter 27, Ethics and Professionalism: codes, the four principles, boundary violations, confidentiality, managed care, impaired physicians, trainees, the Physician Charter (Table 27-1), ethical questions and answers (Table 27-2) and military psychiatry, with 71 clinical cases.",
        "href": "#/c/ch27/guide",
        "link": "Open the chapter"
      },
      {
        "type": "correction",
        "ch": "ch27",
        "text": "The book dates the Physician Charter to 2001 and credits the American Board of Internal Medicine alone; it was published in 2002 by the ABIM Foundation, the ACP-ASIM Foundation and the European Federation of Internal Medicine. A correction box explains this.",
        "href": "#/c/ch27/guide/s27-charter",
        "link": "See the correction"
      },
      {
        "type": "update",
        "ch": "ch27",
        "text": "Updates: the Philippine Mental Health Act (RA 11036) on consent, involuntary treatment and confidentiality; the LOCUS tool; child-abuse reporting on reasonable suspicion; written consent for publishing cases; and the US military's current presumption of confidentiality."
      },
      {
        "type": "feature",
        "text": "New decision helper \"Choosing a level of care\" and a look-alike on ethics terms that are easily confused (conflict and dilemma, weak and strong paternalism, crossing and violation, confidentiality and privilege).",
        "href": "#/helpers/loc26",
        "link": "Open the helper"
      }
    ]
  },
  {
    "version": "70.0.0",
    "date": "2026-11-11",
    "title": "Chapter 25: Consultation-liaison and geriatric psychiatry",
    "items": [
      {
        "type": "chapter",
        "ch": "ch25-1",
        "text": "New section 25.1, Consultation-Liaison Psychiatry: history and names, clinical problems (Table 25-1), evaluation and treatment in the medically ill, common referral problems, ICU and dialysis units, urgent causes of delirium (Table 25-2), surgery, transplantation and psycho-oncology, with 46 clinical cases.",
        "href": "#/c/ch25-1/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch25-2",
        "text": "New section 25.2, Geriatric Psychiatry: assessment (Table 25-3), dementia and reversible look-alikes (Table 25-4), late-life depression and the Geriatric Depression Scale, psychosis, anxiety, substance use, sleep, suicide, syncope (Table 25-6), hearing loss, elder abuse, bereavement, prescribing and psychotherapy, with 45 clinical cases.",
        "href": "#/c/ch25-2/guide",
        "link": "Open the section"
      },
      {
        "type": "correction",
        "ch": "ch25-2",
        "text": "The book says all human prion diseases come from PRNP mutations; that applies only to the inherited forms (sporadic CJD, about 85%, has no known cause). A correction box explains this.",
        "href": "#/c/ch25-2/guide/s252-dementia",
        "link": "See the correction"
      },
      {
        "type": "update",
        "ch": "ch25-1",
        "text": "Updates in 25.1: capacity versus competence, delirium tremens timed from the last drink, ICU delirium guidelines (PADIS 2018 and 2025), thiamine and glucose, the boxed warning on antipsychotics in dementia and brexpiprazole, and the failed replication of the group-therapy survival result in breast cancer."
      },
      {
        "type": "update",
        "ch": "ch25-2",
        "text": "Updates in 25.2: current US suicide rates in late life, new Alzheimer criteria and anti-amyloid treatments, WHO elder abuse figures, hearing loss as a dementia risk factor, and the 2023 Beers Criteria (including meclizine and once-daily dosing)."
      },
      {
        "type": "feature",
        "text": "Chapter 25 is now complete (25.1 to 25.3). New decision helper \"Working through a C-L referral\" and a look-alike comparing delirium, dementia and depression-related cognitive dysfunction.",
        "href": "#/helpers/clref",
        "link": "Open the helper"
      }
    ]
  },
  {
    "version": "69.0.0",
    "date": "2026-11-11",
    "title": "Chapter 24: Psychiatric rehabilitation and genetic counseling",
    "items": [
      {
        "type": "chapter",
        "ch": "ch24-1",
        "text": "New section 24.1, Psychiatric Rehabilitation: supported employment, social skills training (Table 24-1), social perception and problem-solving training, milieu therapy, token economies, cognitive rehabilitation and ethics, with 21 clinical cases.",
        "href": "#/c/ch24-1/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch24-2",
        "text": "New section 24.2, Genetic Counseling: definitions, genes and environment (Table 24-2), family history and pedigrees (Figures 24-1 and 24-2), the steps of counseling (Table 24-3), risk communication, psychosocial support and the ethics of testing, with 19 clinical cases.",
        "href": "#/c/ch24-2/guide",
        "link": "Open the section"
      },
      {
        "type": "correction",
        "ch": "ch24-2",
        "text": "The book calls the professional body the \"National Society of Genetic Counseling\"; it is the National Society of Genetic Counselors (NSGC). A correction box explains this.",
        "href": "#/c/ch24-2/guide/s242-intro",
        "link": "See the correction"
      },
      {
        "type": "update",
        "ch": "ch24-1",
        "text": "Updates since the book: IPS supported employment (2022 meta-analysis), cognitive remediation (2021 meta-analysis), large genome studies and polygenic scores (2022), APOE testing before anti-amyloid drugs, and the limits of genetic discrimination law."
      },
      {
        "type": "feature",
        "text": "Chapter 24 is complete (24.1 and 24.2). New decision helper \"Which rehabilitation approach?\" and a look-alike comparing family history, rare variants, polygenic scores and APOE testing.",
        "href": "#/helpers/rehab24",
        "link": "Open the helper"
      }
    ]
  },
  {
    "version": "68.0.0",
    "date": "2026-11-10",
    "title": "Chapter 23 complete: sections 23.10 to 23.14",
    "items": [
      {
        "type": "chapter",
        "ch": "ch23-10",
        "text": "New section 23.10, Interpersonal Therapy: origins, the three phases (Table 23-13), the four problem areas (Table 23-14) and group IPT (Table 23-15), with 32 clinical cases.",
        "href": "#/c/ch23-10/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-11",
        "text": "New section 23.11, Narrative Psychotherapy: metaphor, plot and character, and narrative psychiatry, with 16 clinical cases.",
        "href": "#/c/ch23-11/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-12",
        "text": "New section 23.12, Combined Psychotherapy and Pharmacotherapy: indications, one versus two clinicians (Table 23-16), the linkage phenomenon, adherence, attribution theory and combined treatment by disorder, with 24 clinical cases.",
        "href": "#/c/ch23-12/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-13",
        "text": "New section 23.13, Mentalization-Based Treatment: mentalizing, techniques, alliance building (Table 23-17), indications and contraindications, with 11 clinical cases.",
        "href": "#/c/ch23-13/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-14",
        "text": "New section 23.14, Psychoeducational Interventions: components, formats and evidence by disorder, with 6 clinical cases.",
        "href": "#/c/ch23-14/guide",
        "link": "Open the section"
      },
      {
        "type": "update",
        "ch": "ch23-10",
        "text": "Updates since the book: IPT versus antidepressants (2024), narrative therapy meta-analysis (2024), combined treatment for depression (network meta-analysis), short versus long MBT (2023 trial) and psychoeducation in bipolar disorder (2024 review)."
      },
      {
        "type": "feature",
        "text": "Chapter 23 is now complete (23.1 to 23.14). New decision helper \"Which psychotherapy? (all of Chapter 23)\" and a look-alike comparing DBT, cognitive therapy, IPT and MBT.",
        "href": "#/helpers/psytx",
        "link": "Open the helper"
      }
    ]
  },
  {
    "version": "67.0.0",
    "date": "2026-11-09",
    "title": "Chapter 23 continued: sections 23.5 to 23.9 (DBT to hypnosis)",
    "items": [
      {
        "type": "chapter",
        "ch": "ch23-5",
        "text": "New section 23.5, Dialectical Behavior Therapy: Linehan's model, the problem-behavior loop (Figure 23-1), the five functions and four modes, consultation team agreements (Table 23-7) and results, with 10 clinical cases.",
        "href": "#/c/ch23-5/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-6",
        "text": "New section 23.6, Biofeedback: theory and instruments, relaxation techniques (Table 23-8), autogenic training (Table 23-9), applied tension and applied relaxation (Table 23-10), with 17 clinical cases.",
        "href": "#/c/ch23-6/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-7",
        "text": "New section 23.7, Cognitive Therapy: the cognitive model (Figure 23-2), automatic thoughts and assumptions, cognitive distortions (Figure 23-3, Table 23-11), the thought record (Figure 23-4) and indications, with 19 clinical cases.",
        "href": "#/c/ch23-7/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-8",
        "text": "New section 23.8, Behavior Therapy: history, systematic desensitization, graded exposure, flooding, participant modeling, virtual reality, assertiveness and social skills training (Table 23-12), aversion therapy, EMDR, reinforcement and behavioral activation, with 37 clinical cases.",
        "href": "#/c/ch23-8/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-9",
        "text": "New section 23.9, Hypnosis: history, hypnotizability, induction, indications and contraindications, with 18 clinical cases.",
        "href": "#/c/ch23-9/guide",
        "link": "Open the section"
      },
      {
        "type": "update",
        "ch": "ch23-5",
        "text": "Updates since the book: the 2024 APA guideline for borderline personality disorder (23.5), a 2025 blinded-outcome meta-analysis of neurofeedback for ADHD (23.6), the 2022 NICE depression guideline (23.7), the 2023 VA/DoD PTSD guideline on EMDR and exposure (23.8) and a 2024 umbrella review of hypnosis (23.9)."
      },
      {
        "type": "feature",
        "text": "New decision helper \"Which behavioral or cognitive technique?\" and a look-alike comparing exposure-based methods. Every case has explanations for the wrong answers, and every section has end-of-section checks.",
        "href": "#/helpers/behtech",
        "link": "Open the helper"
      }
    ]
  },
  {
    "version": "66.0.0",
    "date": "2026-11-09",
    "title": "Chapter 23 begins: sections 23.1 to 23.4 (psychotherapy)",
    "items": [
      {
        "type": "chapter",
        "ch": "ch23-1",
        "text": "New section 23.1, Psychoanalysis and Psychoanalytic Psychotherapy: classic, expressive and supportive modes on one continuum (Table 23-1), the analytic process and stages (Table 23-2), patient prerequisites (Table 23-3), the setting and rules, expressive and supportive techniques and the corrective emotional experience, with 56 clinical cases.",
        "href": "#/c/ch23-1/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-2",
        "text": "New section 23.2, Brief Psychodynamic Psychotherapy: the Malan, Mann, Davanloo and Sifneos schools compared, with 26 clinical cases.",
        "href": "#/c/ch23-2/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-3",
        "text": "New section 23.3, Group Psychotherapy, Combined Individual and Group Psychotherapy, and Psychodrama: orientations (Table 23-4), selection and preparation, therapeutic factors (Table 23-5), inpatient and self-help groups, combined therapy, psychodrama and ethical issues, with 38 clinical cases.",
        "href": "#/c/ch23-3/guide",
        "link": "Open the section"
      },
      {
        "type": "chapter",
        "ch": "ch23-4",
        "text": "New section 23.4, Family Therapy and Couples Therapy: indications, consultation and interviewing, the schools of family therapy (Table 23-6), modified techniques, and the types, indications, contraindications and goals of couples therapy, with 27 clinical cases.",
        "href": "#/c/ch23-4/guide",
        "link": "Open the section"
      },
      {
        "type": "update",
        "ch": "ch23-1",
        "text": "Updates since the book: the 2023 umbrella review of psychodynamic therapy (23.1), a 2023 patient-level meta-analysis of short-term psychodynamic therapy for depression (23.2), online group therapy (23.3) and the APA 2020 guideline on family interventions in schizophrenia (23.4)."
      },
      {
        "type": "feature",
        "text": "New decision helper \"Which psychodynamic or relational approach?\" and a look-alike comparing the four schools of brief dynamic therapy. Every case has explanations for the wrong answers, and every section has end-of-section checks.",
        "href": "#/helpers/psymode",
        "link": "Open the helper"
      }
    ]
  },
  {
    "version": "65.0.0",
    "date": "2026-11-09",
    "title": "Chapter 22: Other Somatic Therapies",
    "items": [
      {
        "type": "chapter",
        "ch": "ch22",
        "text": "New chapter: electroconvulsive therapy (history and Table 22-1, mechanism, indications and Table 22-2, pretreatment workup and concomitant drugs, anesthesia and muscle relaxants, electrode placement, stimulus dosing, seizure monitoring, course, maintenance and adverse effects), the newer brain stimulation methods (TMS with Table 22-3, tDCS, CES, MST, VNS and implanted cortical stimulation) and psychiatric neurosurgery (patient selection, the four lesion procedures, deep brain stimulation and outcomes), with 114 clinical cases, explanations for every wrong answer and end-of-section checks.",
        "href": "#/c/ch22/guide",
        "link": "Open the chapter"
      },
      {
        "type": "correction",
        "ch": "ch22",
        "text": "Two corrections to the book: alfentanil is dosed in micrograms per kilogram, not \"2 to 9 mg/kg\", and the US ECT device limit is in millicoulombs (576 mC), not \"mCi\"."
      },
      {
        "type": "update",
        "ch": "ch22",
        "text": "Post-publication updates: the FDA's 2018 reclassification of ECT devices, the ELEKT-D trial of ketamine versus ECT, TMS clearances from 2008 to 2024 (deep TMS, theta-burst, accelerated SAINT, adolescents), the 2025 approval of a tDCS device for depression, the 2019 CES classification, Medicare coverage of VNS, and DBS for OCD and the negative depression trials."
      },
      {
        "type": "feature",
        "ch": "ch22",
        "text": "New helper (troubleshooting an ECT course) and a look-alike table comparing ECT, MST, rTMS, tDCS, CES and VNS."
      }
    ]
  },
  {
    "version": "64.0.0",
    "date": "2026-11-09",
    "title": "Chapter 20: Other Conditions that May be a Focus of Clinical Attention",
    "items": [
      {
        "type": "chapter",
        "ch": "ch20",
        "text": "New chapter: conditions that are not mental disorders but bring people to care. Malingering and its differential (Table 20-2), bereavement versus depression, occupational problems, adult antisocial behavior (Table 20-3), religious or spiritual problems and cults, acculturation and culture shock, prisoners of war and torture victims, phase of life problems, nonadherence and relational problems, with the full Table 20-1, 104 clinical cases, explanations for every wrong answer and end-of-section checks.",
        "href": "#/c/ch20/guide",
        "link": "Open the chapter"
      },
      {
        "type": "update",
        "ch": "ch20",
        "text": "Post-publication updates: DSM-5 removed the 2-month bereavement exclusion; prolonged grief disorder in DSM-5-TR and ICD-11; DSM-5-TR codes for suicidal behavior and nonsuicidal self-injury; ICD-11 Chapter 24 and malingering (QC30); a correction to the last lines of Table 20-1; and 2025 US earnings figures."
      },
      {
        "type": "feature",
        "ch": "ch20",
        "text": "New diagnostic helper (feigned symptoms or antisocial behavior: condition or disorder?) and a look-alike table for malingering, factitious disorder and conversion disorder. The grief look-alike now links to Chapter 20."
      }
    ]
  },
  {
    "version": "63.0.0",
    "date": "2026-11-09",
    "title": "Chapter 18: Disruptive, Impulse-Control, and Conduct Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch18",
        "text": "New chapter: intermittent explosive disorder, kleptomania and pyromania. The impulse cycle, DSM-5 and ICD-10 criteria (Tables 18-1 to 18-3), workup, impulses versus compulsions, differential diagnosis, comorbidity, course, treatment, epidemiology and etiology, with 111 clinical cases, explanations for every wrong answer and end-of-section checks.",
        "href": "#/c/ch18/guide",
        "link": "Open the chapter"
      },
      {
        "type": "update",
        "ch": "ch18",
        "text": "Post-publication updates: ICD-11's impulse control disorders group (intermittent explosive disorder now named, 6C73), gaming disorder in DSM-5-TR versus ICD-11, and placebo-controlled trials of fluoxetine for intermittent explosive disorder and naltrexone for kleptomania."
      },
      {
        "type": "correction",
        "ch": "ch18",
        "text": "Table 18-3 lists one or more fires for pyromania in DSM-5; DSM-5 requires fire setting on more than one occasion. A correction box sits under the table.",
        "href": "#/c/ch18/guide/s18-pyro",
        "link": "See the correction"
      },
      {
        "type": "feature",
        "text": "New decision helper (Which impulse-control disorder?), look-alike comparisons for stealing and for fire setting, and 8 new glossary terms. The glossary's kleptomania entry now matches the chapter (an impulse, not a compulsion)."
      }
    ]
  },
  {
    "version": "62.0.0",
    "date": "2026-11-09",
    "title": "Chapter 17: Gender Dysphoria, Gender Identity, and Related Conditions",
    "items": [
      {
        "type": "chapter",
        "ch": "ch17",
        "text": "New chapter: gender identity and the terms used; DSM-5 and ICD-10 gender dysphoria in children, adolescents and adults; differential diagnosis, course and comorbidity; psychotherapy, hormones and surgery; epidemiology and causes. 13 sections, 62 high-yield facts and 82 cards, with a pre-test, wrong-answer explanations for all 30 cases, end-of-section checks and a development timeline.",
        "href": "#/c/ch17/guide",
        "link": "Open the chapter"
      },
      {
        "type": "update",
        "ch": "ch17",
        "text": "Post-publication updates: ICD-11 gender incongruence, DSM-5-TR wording, WPATH Standards of Care 8, Endocrine Society monitoring, and how evidence reviews and policies on puberty blockers and surgery in minors have changed since the book (Cass Review, UK restrictions and the PATHWAYS trial, the AAP, the US HHS review, and 2026 statements on surgery)."
      },
      {
        "type": "feature",
        "text": "Look-alike comparison of gender dysphoria, gender nonconformity, transvestic disorder, body dysmorphic disorder and psychosis. 18 new glossary terms."
      }
    ]
  },
  {
    "version": "61.0.0",
    "date": "2026-11-09",
    "title": "Chapter 16: Human Sexuality and Sexual Dysfunctions",
    "items": [
      {
        "type": "chapter",
        "ch": "ch16",
        "text": "New chapter: the sex history; desire, arousal, erectile, orgasm, ejaculation and genito-pelvic pain disorders; dysfunction from medical illness and drugs; PDE-5 inhibitors, hormones, devices and sex therapy; the paraphilic disorders; compulsive sexual behavior; and normal sexuality and the sexual response cycle. 42 sections, 204 high-yield facts and 190 cards, with a pre-test, wrong-answer explanations for all 50 cases, end-of-section checks and a drug heatmap.",
        "href": "#/c/ch16/guide",
        "link": "Open the chapter"
      },
      {
        "type": "update",
        "ch": "ch16",
        "text": "Post-publication updates: ICD-11's sexual health chapter and compulsive sexual behaviour disorder, the ISSM premature ejaculation definition, dapoxetine, testosterone for postmenopausal low desire, bremelanotide, the WFSBP 2020 paraphilia drug algorithm and current disorders of sex development terms."
      },
      {
        "type": "correction",
        "ch": "ch16",
        "text": "Corrected the book's age rules for voyeuristic disorder (at least 18) and pedophilic disorder (at least 16 and 5 years older), which its tables print as exclusions."
      },
      {
        "type": "feature",
        "text": "New diagnostic helper, \"Which sexual dysfunction?\", and a look-alike comparison of premature, delayed and retrograde ejaculation and orgasmic anhedonia. 34 new glossary terms."
      }
    ]
  },
  {
    "version": "60.0.0",
    "date": "2026-11-05",
    "title": "Design refresh",
    "items": [
      {
        "type": "feature",
        "text": "Same look and controls as the other isaymotion apps: docked menu on larger screens, slide-in menu on phones, match-device theme, Alt+arrow back/forward, scroll position kept when you go back, backup with undo, offline support."
      },
      {
        "type": "feature",
        "text": "Language switch on the About page (Tagalog interface strings are a draft)."
      }
    ]
  },
  {
    "version": "59.0.0",
    "date": "2026-10-28",
    "title": "Confidence ratings",
    "items": [
      {
        "type": "feature",
        "text": "Exams, quizzes, drills and pre- and post-tests now ask how sure you are after you pick an answer: Guessed, Unsure or Sure (keys 1 to 3). It is optional, and you can turn it off on the exam page.",
        "href": "#/exam",
        "link": "Open exam mode"
      },
      {
        "type": "feature",
        "text": "Results show your score at each confidence level, the answers you were sure of but got wrong (misconceptions to fix first) and the right answers you only guessed, each with its own review list."
      },
      {
        "type": "feature",
        "text": "Weak topics now lists topics with confident errors first and counts a right answer you marked Guessed as not yet learned.",
        "href": "#/weak",
        "link": "Open Weak topics"
      }
    ]
  },
  {
    "version": "58.0.0",
    "date": "2026-10-27",
    "title": "Clinical tools, Report an error and review card types",
    "items": [
      {
        "type": "feature",
        "text": "New Clinical tools page: PHQ-9, GAD-7, AIMS, CIWA-Ar, COWS and the C-SSRS screener score as you answer, with severity bands, the AIMS Schooler–Kane threshold and the Columbia response protocol. Nothing you enter is saved. Each tool shows its sources and terms of use.",
        "href": "#/tools",
        "link": "Open Clinical tools"
      },
      {
        "type": "feature",
        "text": "Four calculators: antipsychotic equivalents by WHO defined daily dose (oral and long-acting injectables), benzodiazepine equivalents (Ashton), clozapine ANC monitoring (US label, general population and benign ethnic neutropenia) and lithium level interpretation (ISBD/IGSLi 2019).",
        "href": "#/tools",
        "link": "Open calculators"
      },
      {
        "type": "feature",
        "text": "Every study-guide section now has a Report an error link that opens a pre-filled email with the section, its link and the app release."
      },
      {
        "type": "feature",
        "text": "Daily review: choose which card types to review (diagnosis, clinical cases, pharmacology, foundations).",
        "href": "#/review",
        "link": "Open daily review"
      },
      {
        "type": "update",
        "text": "Chapter study guides link to their clinical tools, and the Clinical tools page links to the Stahl and DSM-5-TR companion apps."
      }
    ]
  },
  {
    "version": "57.0.0",
    "date": "2026-10-26",
    "title": "Weak topics and session takeaway sheets",
    "items": [
      {
        "type": "feature",
        "text": "New Weak topics page: your exam and quiz answers, flashcard ratings and open mistakes, pooled by topic and ranked weakest first, with roll-ups by chapter and by ABPN board domain. Each topic has a one-click drill of its cases. Pre-tests are left out, and everything stays in this browser.",
        "href": "#/weak",
        "link": "Open Weak topics"
      },
      {
        "type": "feature",
        "text": "Teaching mode: every session summary now has a Resident handout, a printable takeaway sheet with the questions to revisit (or every question discussed), the answer, the explanation and why each wrong choice is wrong, plus the room's score by topic. It shows no per-choice vote counts, so it can go straight to residents.",
        "href": "#/teach",
        "link": "Open teaching mode"
      },
      {
        "type": "update",
        "text": "Flashcards now keep a count of every review, so the Weak topics page can show how often you rated each card. Cards reviewed before this release are counted from their saved history."
      }
    ]
  },
  {
    "version": "56.0.0",
    "date": "2026-10-26",
    "title": "Chapter 15: Sleep–Wake Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch15",
        "text": "New Chapter 15: sleep stages and the three classification systems; insomnia disorder, its subtypes and CBTi (sleep hygiene, stimulus control, sleep restriction, relaxation and cognitive therapy); hypersomnolence disorder, Kleine–Levin syndrome and narcolepsy; obstructive and central sleep apnea and hypoventilation; the circadian rhythm types with light therapy, melatonin and chronotherapy; NREM arousal disorders, nightmares, REM sleep behavior disorder and other parasomnias; restless legs, periodic limb movements and bruxism; and polysomnography, home testing, the MSLT and the sleep history. It includes Check yourself questions, a pre-test and post-test, wrong-answer explanations for every case and two visual summaries.",
        "href": "#/c/ch15/guide",
        "link": "Open the study guide"
      },
      {
        "type": "update",
        "ch": "ch15",
        "text": "Post-publication updates and corrections: N3 scoring, ICSD-3-TR, newer hypnotics and the 2019 boxed warning, CBTi as first-line treatment, the DSM-5 narcolepsy and apnea criteria, low-sodium oxybate for idiopathic hypersomnia, pediatric pitolisant and the 2026 approval of oveporexton (Orzeyful), tirzepatide for sleep apnea, hypoglossal and phrenic nerve stimulation, tasimelteon, the 2018 nightmare position paper and the 2024 restless legs guideline.",
        "href": "#/updates",
        "link": "See all updates"
      },
      {
        "type": "feature",
        "text": "New diagnostic helper: Which sleep–wake disorder?",
        "href": "#/helpers/sleep",
        "link": "Open the helper"
      },
      {
        "type": "feature",
        "text": "New look-alikes: night terrors, nightmares, RBD and nocturnal seizures; narcolepsy, hypersomnolence, sleep apnea and the long sleeper; the circadian types; and restless legs, periodic limb movements, leg cramps and akathisia.",
        "href": "#/compare/ch/ch15",
        "link": "Open look-alikes"
      },
      {
        "type": "update",
        "text": "Glossary: 30 new terms from Chapter 15, including psychophysiologic insomnia, sleep efficiency, the MSLT, apnea-hypopnea index and REM sleep behavior disorder."
      },
      {
        "type": "correction",
        "text": "Glossary shortcuts such as Z drugs, CBT-I and GLP-1 agonist now show their definitions; 32 alternative names were not linking."
      },
      {
        "type": "correction",
        "text": "The ordinary word \"same\" no longer links to the SAMe supplement page in the study guides."
      },
      {
        "type": "correction",
        "text": "Search no longer stops showing results when a match falls in a look-alike comparison; look-alikes now appear in results with the study guide."
      }
    ]
  },
  {
    "version": "55.0.0",
    "date": "2026-10-26",
    "title": "Learning tools for Chapter 4",
    "items": [
      {
        "type": "feature",
        "ch": "ch04",
        "text": "Chapter 4 (substance-related and addictive disorders) now has Check yourself questions in all 53 sections, a pre-test and post-test, wrong-answer explanations for all 86 cases, board blueprint tags and a visual summary comparing naltrexone, acamprosate and disulfiram. Every chapter and section in the app now has the full set of learning tools.",
        "href": "#/c/ch04/guide",
        "link": "Open the study guide"
      }
    ]
  },
  {
    "version": "54.0.0",
    "date": "2026-10-26",
    "title": "Learning tools for Chapter 3",
    "items": [
      {
        "type": "feature",
        "ch": "ch03",
        "text": "Chapter 3 (neurocognitive disorders) now has Check yourself questions in all 37 sections, a pre-test and post-test, wrong-answer explanations for all 85 cases, board blueprint tags and a visual summary of delirium and dementia side by side.",
        "href": "#/c/ch03/guide",
        "link": "Open the study guide"
      }
    ]
  },
  {
    "version": "53.0.0",
    "date": "2026-10-26",
    "title": "Learning tools for Chapter 2",
    "items": [
      {
        "type": "feature",
        "ch": "ch02",
        "text": "Chapter 2 (child and adolescent psychiatry) now has Check yourself questions in all 57 sections, a pre-test and post-test, wrong-answer explanations for all 114 cases, board blueprint tags and a visual summary comparing treatments for tics.",
        "href": "#/c/ch02/guide",
        "link": "Open the study guide"
      }
    ]
  },
  {
    "version": "52.0.0",
    "date": "2026-10-26",
    "title": "Learning tools for Chapter 1",
    "items": [
      {
        "type": "feature",
        "ch": "ch01",
        "text": "Chapter 1 (examination of the psychiatric patient) now has Check yourself questions in all 46 sections, a pre-test and post-test, wrong-answer explanations for all 87 cases, board blueprint tags and a visual summary comparing the four aphasias.",
        "href": "#/c/ch01/guide",
        "link": "Open the study guide"
      }
    ]
  },
  {
    "version": "51.0.0",
    "date": "2026-10-25",
    "title": "Learning tools for Sections 21.4 to 21.6",
    "items": [
      {
        "type": "feature",
        "ch": "ch21-4",
        "text": "Section 21.4 (anxiolytics) now has Check yourself questions in every section, a pre-test and post-test, wrong-answer explanations for all 30 cases, board blueprint tags and a visual summary comparing benzodiazepines, buspirone, β-blockers and barbiturates.",
        "href": "#/c/ch21-4/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch21-5",
        "text": "Section 21.5 (drugs for sleep disorders) now has the same learning tools, with a visual summary of which hypnotic fits which sleep problem.",
        "href": "#/c/ch21-5/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch21-6",
        "text": "Section 21.6 (stimulants) now has the same learning tools, with a visual summary comparing ADHD medicines.",
        "href": "#/c/ch21-6/guide",
        "link": "Open the study guide"
      }
    ]
  },
  {
    "version": "50.0.0",
    "date": "2026-10-25",
    "title": "Chapter 21.11: Nutritional Supplements and Medical Foods",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-11",
        "text": "New section 21.11, which completes Chapter 21: how dietary supplements, medical foods and phytomedicines are regulated, safety in pregnancy and lactation, supplements for cognition and mood, melatonin, medical foods such as L-methylfolate and N-acetylcysteine, St. John's wort, kava and other sedative, stimulant and toxic herbs, kratom, and taking a supplement history. It includes Check yourself questions, a pre-test and post-test, wrong-answer explanations for every case and two visual summaries.",
        "href": "#/c/ch21-11/guide",
        "link": "Open the study guide"
      },
      {
        "type": "update",
        "ch": "ch21-11",
        "text": "Post-publication updates: the 2004 ephedra ban, FDA tianeptine warnings, pediatric melatonin poisonings and gummy mislabeling, how St. John's wort lowers drug levels and current evidence, the 2002 kava liver advisory, the Ginkgo Evaluation of Memory trial, L-tryptophan and eosinophilia-myalgia syndrome, NAC for trichotillomania, the 2025 FDA 7-OH (kratom) scheduling recommendation, ashwagandha liver injury and the 2019 omega-3 guideline.",
        "href": "#/updates",
        "link": "See all updates"
      },
      {
        "type": "feature",
        "text": "New diagnostic helper: Checking a patient's supplement.",
        "href": "#/helpers/suppchk",
        "link": "Open the helper"
      },
      {
        "type": "feature",
        "text": "Drug reference: 12 supplements, medical foods and herbs, with drills and a class PDF.",
        "href": "#/drugs",
        "link": "Open drugs"
      },
      {
        "type": "feature",
        "text": "New look-alikes: dietary supplement, medical food and prescription drug; and St. John's wort, 5-HTP, SAMe and L-tryptophan.",
        "href": "#/compare/ch/ch21-11",
        "link": "Open look-alikes"
      }
    ]
  },
  {
    "version": "49.0.0",
    "date": "2026-10-22",
    "title": "Learning tools for Sections 21.0 to 21.3",
    "items": [
      {
        "type": "feature",
        "ch": "ch21-0",
        "text": "Section 21.0 (principles of psychopharmacology) now has Check yourself questions in every section, a pre-test and post-test, wrong-answer explanations for all 27 cases, board blueprint tags and a timeline of when movement side effects appear.",
        "href": "#/c/ch21-0/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch21-1",
        "text": "Section 21.1 (antipsychotics) now has the same learning tools, with a visual summary of second-generation antipsychotic side-effect profiles.",
        "href": "#/c/ch21-1/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch21-2",
        "text": "Section 21.2 (antidepressants) now has the same learning tools, with a visual summary of antidepressant side-effect profiles.",
        "href": "#/c/ch21-2/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch21-3",
        "text": "Section 21.3 (mood stabilizers) now has the same learning tools, with a visual summary of the key risks of each mood stabilizer.",
        "href": "#/c/ch21-3/guide",
        "link": "Open the study guide"
      }
    ]
  },
  {
    "version": "48.0.0",
    "date": "2026-10-22",
    "title": "Chapter 21.10: Drugs Used to Treat the Side Effects of Psychotropic Drugs",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-10",
        "text": "New section 21.10: anticholinergics for parkinsonism and dystonia, anticholinergic intoxication and physostigmine, antihistamines, dopamine agonists, levodopa and amantadine, and drugs for psychotropic weight gain. It includes Check yourself questions, a pre-test and post-test, wrong-answer explanations for every case and two visual summaries.",
        "href": "#/c/ch21-10/guide",
        "link": "Open the study guide"
      },
      {
        "type": "update",
        "ch": "ch21-10",
        "text": "Post-publication updates and corrections: physostigmine's mechanism and dosing, hydroxyzine QT limits, promethazine warnings and doses, ranitidine's withdrawal, dopamine agonist impulse control warnings, the 2024 restless legs guideline, amantadine and influenza, and GLP-1 drugs (liraglutide, semaglutide, tirzepatide), naltrexone–bupropion and olanzapine–samidorphan, with the 2025 HISTORI trial and a 2026 network meta-analysis.",
        "href": "#/updates",
        "link": "See all updates"
      },
      {
        "type": "feature",
        "text": "New diagnostic helper: Treating a psychotropic side effect.",
        "href": "#/helpers/sedrug",
        "link": "Open the helper"
      },
      {
        "type": "feature",
        "text": "Drug reference: 16 drugs for psychotropic side effects, with drills and a class PDF.",
        "href": "#/drugs",
        "link": "Open drugs"
      },
      {
        "type": "feature",
        "text": "New look-alikes: the four antipsychotic movement side effects; and anticholinergic intoxication, serotonin syndrome and NMS.",
        "href": "#/compare/ch/ch21-10",
        "link": "Open look-alikes"
      }
    ]
  },
  {
    "version": "47.0.0",
    "date": "2026-10-22",
    "title": "Learning tools for Chapters 12, 13, 14 and 25.3",
    "items": [
      {
        "type": "feature",
        "ch": "ch12",
        "text": "Chapter 12 (somatic symptom and related disorders) now has Check yourself questions in every section, a pre-test and post-test, wrong-answer explanations for all 34 cases, board blueprint tags and a visual summary of intent and motive from somatic symptom disorder to malingering.",
        "href": "#/c/ch12/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch13",
        "text": "Chapter 13 (feeding and eating disorders) now has the same learning tools, with a visual summary for telling the eating disorders apart.",
        "href": "#/c/ch13/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch14",
        "text": "Chapter 14 (elimination disorders) now has the same learning tools, with a timeline of continence milestones and diagnostic ages.",
        "href": "#/c/ch14/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch25-3",
        "text": "Section 25.3 (psychiatric emergencies) now has the same learning tools, with a visual summary of choosing a drug for agitation by cause.",
        "href": "#/c/ch25-3/guide",
        "link": "Open the study guide"
      }
    ]
  },
  {
    "version": "46.0.0",
    "date": "2026-10-22",
    "title": "Chapter 21.9: Drugs Used to Treat Sexual Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-9",
        "text": "New section 21.9: sildenafil, vardenafil and tadalafil (the erectile cascade, pharmacokinetics, cardiac risk and nitrates, vision and hearing effects, interactions and dosing), phenylephrine for priapism, and yohimbine. It includes Check yourself questions, a pre-test and post-test, wrong-answer explanations for every case and two visual summaries.",
        "href": "#/c/ch21-9/guide",
        "link": "Open the study guide"
      },
      {
        "type": "update",
        "ch": "ch21-9",
        "text": "Post-publication updates and corrections: amyl nitrite (not nitrate), riociguat and nitrate timing, hearing loss labeling (2007), priapism warnings and the 2022 guideline doses, avanafil and other approvals, evidence in women on antidepressants, yohimbe supplements, and flibanserin and bremelanotide for low sexual desire in women.",
        "href": "#/updates",
        "link": "See all updates"
      },
      {
        "type": "feature",
        "text": "New diagnostic helper: Choosing a drug for a sexual problem.",
        "href": "#/helpers/sexmed",
        "link": "Open the helper"
      },
      {
        "type": "feature",
        "text": "Drug reference: 8 drugs for sexual disorders, with drills and a class PDF.",
        "href": "#/drugs",
        "link": "Open drugs"
      },
      {
        "type": "feature",
        "text": "New look-alikes: the four PDE-5 inhibitors; and flibanserin versus bremelanotide.",
        "href": "#/compare/ch/ch21-9",
        "link": "Open look-alikes"
      }
    ]
  },
  {
    "version": "45.0.0",
    "date": "2026-10-22",
    "title": "Learning tools for Chapters 8 to 11",
    "items": [
      {
        "type": "feature",
        "ch": "ch08",
        "text": "Chapter 8 (anxiety disorders) now has Check yourself questions in every section, a pre-test and post-test, wrong-answer explanations for all 40 cases, board blueprint tags and a visual summary of drug evidence by disorder.",
        "href": "#/c/ch08/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch09",
        "text": "Chapter 9 (obsessive-compulsive and related disorders) now has the same learning tools, with a visual summary of how the five disorders differ.",
        "href": "#/c/ch09/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch10",
        "text": "Chapter 10 (trauma- and stressor-related disorders) now has the same learning tools, with a timeline of the diagnostic time rules after trauma.",
        "href": "#/c/ch10/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch11",
        "text": "Chapter 11 (dissociative disorders) now has the same learning tools, with a visual summary of which functions each disorder disrupts.",
        "href": "#/c/ch11/guide",
        "link": "Open the study guide"
      }
    ]
  },
  {
    "version": "44.0.0",
    "date": "2026-10-22",
    "title": "Chapter 21.8: Drugs Used for Cognitive Enhancement",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-8",
        "text": "New section 21.8: donepezil, rivastigmine, galantamine and tacrine, and memantine, covering pharmacology, indications, adverse effects (with Table 21-56), tacrine liver monitoring, interactions, urine pH and dosing. It includes Check yourself questions, a pre-test and post-test, wrong-answer explanations for every case and two visual summaries.",
        "href": "#/c/ch21-8/guide",
        "link": "Open the study guide"
      },
      {
        "type": "update",
        "ch": "ch21-8",
        "text": "Post-publication updates: donepezil for severe disease, rivastigmine for Parkinson disease dementia and its patch, the Razadyne name, memantine XR and the memantine–donepezil capsule, the weekly donepezil patch, tacrine's withdrawal, label dose corrections for galantamine, rivastigmine and memantine, lecanemab and donanemab with ARIA, Alzheimer blood tests, the mild cognitive impairment guideline and brexpiprazole for agitation.",
        "href": "#/updates",
        "link": "See all updates"
      },
      {
        "type": "feature",
        "text": "New diagnostic helper: Choosing a cognitive enhancer.",
        "href": "#/helpers/cogmed",
        "link": "Open the helper"
      },
      {
        "type": "feature",
        "text": "Drug reference: 8 cognitive enhancers and anti-amyloid antibodies, with drills and a class PDF.",
        "href": "#/drugs",
        "link": "Open drugs"
      },
      {
        "type": "feature",
        "text": "New look-alikes: the four symptomatic dementia drugs; and lecanemab versus donanemab.",
        "href": "#/compare/ch/ch21-8",
        "link": "Open look-alikes"
      },
      {
        "type": "update",
        "ch": "ch03",
        "text": "Chapter 3's dementia treatment section now notes tacrine's withdrawal, newer approvals, anti-amyloid antibodies and brexpiprazole for agitation.",
        "href": "#/c/ch03/guide/s3-dem-treat",
        "link": "See the update"
      }
    ]
  },
  {
    "version": "43.0.0",
    "date": "2026-10-22",
    "title": "Learning tools for Chapters 5, 6 and 7",
    "items": [
      {
        "type": "feature",
        "ch": "ch05",
        "text": "Chapter 5 (schizophrenia and other psychotic disorders) now has Check yourself questions in every section, a pre-test and post-test, wrong-answer explanations for all 53 cases, board blueprint tags and a visual summary of antipsychotic side effects.",
        "href": "#/c/ch05/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch06",
        "text": "Chapter 6 (bipolar disorders) now has the same learning tools, with a visual summary of where the main drugs work.",
        "href": "#/c/ch06/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "ch": "ch07",
        "text": "Chapter 7 (depressive disorders) now has the same learning tools, with a visual summary of melancholic versus atypical features.",
        "href": "#/c/ch07/guide",
        "link": "Open the study guide"
      },
      {
        "type": "feature",
        "text": "New look-alikes: the five psychotic disorders by duration; and normal grief, major depression, persistent depressive disorder and prolonged grief disorder.",
        "href": "#/compare",
        "link": "Open look-alikes"
      }
    ]
  },
  {
    "version": "42.0.0",
    "date": "2026-10-21",
    "title": "Chapter 21.7: Drugs Used to Treat Substance Use Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-7",
        "text": "New section 21.7: methadone, buprenorphine and tramadol; naltrexone, nalmefene and naloxone, with the naloxone challenge and rapid detoxification; disulfiram and acamprosate; and clonidine and guanfacine. It includes Check yourself questions, a pre-test and post-test, wrong-answer explanations for every case and two visual summaries.",
        "href": "#/c/ch21-7/guide",
        "link": "Open the study guide"
      },
      {
        "type": "update",
        "ch": "ch21-7",
        "text": "Post-publication updates: the end of the buprenorphine X-waiver, the 2024 opioid treatment program rule, long-acting buprenorphine injections, induction in the fentanyl era, buprenorphine–naloxone in pregnancy, over-the-counter naloxone, nalmefene's return, lofexidine and the APA alcohol guideline.",
        "href": "#/updates",
        "link": "See all updates"
      },
      {
        "type": "feature",
        "text": "New diagnostic helper: Choosing a medicine for a substance use disorder.",
        "href": "#/helpers/sudmed",
        "link": "Open the helper"
      },
      {
        "type": "feature",
        "text": "Drug reference: 14 drugs for substance use disorders, with drills and a class PDF.",
        "href": "#/drugs",
        "link": "Open drugs"
      },
      {
        "type": "feature",
        "text": "New look-alikes: methadone, buprenorphine and naltrexone; and the three alcohol use disorder medicines.",
        "href": "#/compare/ch/ch21-7",
        "link": "Open look-alikes"
      },
      {
        "type": "correction",
        "ch": "ch04",
        "text": "Chapter 4 now notes that the DEA waiver for prescribing buprenorphine was eliminated in December 2022.",
        "href": "#/c/ch04/guide/s4-opi-detox",
        "link": "See the correction"
      },
      {
        "type": "correction",
        "text": "Drug class PDFs now print the µ (mu) symbol correctly in every PDF viewer.",
        "href": "#/all-highyield",
        "link": "Open the PDFs"
      }
    ]
  },
  {
    "version": "41.0.0",
    "date": "2026-10-21",
    "title": "Look-alikes in the main menu, with PDF reviewers",
    "items": [
      {
        "type": "feature",
        "text": "Look-alikes is now in the top navigation and under Study tools in the menu, which now lists the study tools before the chapters. Filter comparisons by chapter or search them.",
        "href": "#/compare",
        "link": "Open look-alikes"
      },
      {
        "type": "correction",
        "text": "The top bar now fits at every window width and text size: the brand name and link labels shorten first, then the study tools move into the menu, so the search box and buttons never overlap."
      },
      {
        "type": "feature",
        "text": "Download look-alikes as a landscape PDF reviewer, as an answer key or a blank worksheet to fill in, one at a time, by chapter or all together. Also on the All high-yield (PDF) page.",
        "href": "#/all-highyield",
        "link": "Open the PDF page"
      }
    ]
  },
  {
    "version": "40.0.0",
    "date": "2026-10-21",
    "title": "New ways to learn: checks, pre-tests, look-alikes, shareable quizzes and read aloud",
    "items": [
      {
        "type": "feature",
        "text": "Every study-guide section can now end with Check yourself questions, and each chapter has a pre-test and post-test so you can see what you learned. Chapter 19 has them first; the other chapters are being filled in.",
        "ch": "ch19",
        "href": "#/c/ch19/guide",
        "link": "Try Chapter 19"
      },
      {
        "type": "feature",
        "text": "After a clinical case, each wrong answer now explains why it is wrong (Chapter 19 first, more chapters coming).",
        "ch": "ch19",
        "href": "#/c/ch19/cards/cases",
        "link": "Open Chapter 19 cases"
      },
      {
        "type": "feature",
        "text": "Look-alikes: side-by-side comparisons of conditions that are easy to confuse, with links to the chapters.",
        "href": "#/compare",
        "link": "Open look-alikes"
      },
      {
        "type": "feature",
        "text": "Exam mode can filter by ABPN board domain, scores your results by domain, and can share a quiz as a link or QR code so everyone gets the same questions.",
        "href": "#/exam",
        "link": "Open exam mode"
      },
      {
        "type": "feature",
        "text": "Text size and read aloud: tap Aa in the top bar to change the text size, and the speaker beside any study-guide section to hear it read aloud.",
        "ch": "ch19",
        "href": "#/c/ch19/guide/s19-glance",
        "link": "See the new visual summary"
      }
    ]
  },
  {
    "version": "39.0.0",
    "date": "2026-10-15",
    "title": "Bottom tab bar on phones and tablets",
    "items": [
      {
        "type": "feature",
        "text": "A bottom tab bar (Home, Review, Drugs, Search, Menu) now appears on phones and tablets. It slides away as you scroll down and returns when you scroll up, so more text fits on screen."
      }
    ]
  },
  {
    "version": "38.0.0",
    "date": "2026-10-15",
    "title": "Offline storage fix",
    "items": [
      {
        "type": "correction",
        "text": "Offline storage no longer clears the other study apps' offline copies."
      }
    ]
  },
  {
    "version": "37.0.0",
    "date": "2026-10-15",
    "title": "Post-publication updates for Chapters 5, 6 and 7",
    "items": [
      {
        "type": "update",
        "ch": "ch05",
        "text": "**Chapter 5, schizophrenia spectrum**: 15 dashed update boxes on ICD-11, xanomeline–trospium and lumateperone, the APA 2020 guideline, prolactin (correcting the book's claim that all antipsychotics raise it), VMAT2 inhibitors, olanzapine–samidorphan, clozapine REMS removal and guideline position, newer long-acting injections, the TRRIP definition of treatment resistance, coordinated specialty care (RAISE-ETP), high-potency cannabis, the 2022 genetics study and suicide prevention. Plus 9 high-yield points and 7 cards.",
        "href": "#/updates",
        "link": "See all updates"
      },
      {
        "type": "update",
        "ch": "ch06",
        "text": "**Chapter 6, bipolar disorders**: 8 boxes on the five approved treatments for bipolar depression (adding cariprazine and lumateperone), iloperidone and olanzapine–samidorphan, lithium level targets and pediatric approval, valproate restrictions, lamotrigine warnings, the Equetro approval date and DMDD. Plus 8 high-yield points and 5 cards.",
        "href": "#/c/ch06/guide/s6-depression-tx",
        "link": "Open"
      },
      {
        "type": "update",
        "ch": "ch07",
        "text": "**Chapter 7, depressive disorders**: 9 boxes on prolonged grief disorder, USPSTF screening, CPIC genotype-guided dosing, newer antidepressants (dextromethorphan–bupropion, gepirone, zuranolone, esketamine monotherapy), compounded ketamine, newer adjunctive antipsychotics, accelerated TMS (SAINT), peripartum treatment and suicide prevention. Plus 8 high-yield points and 6 cards.",
        "href": "#/c/ch07/guide/s7-novel",
        "link": "Open"
      }
    ]
  },
  {
    "version": "36.0.0",
    "date": "2026-10-15",
    "title": "Chapter 19: Personality Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch19",
        "text": "**Chapter 19, Personality Disorders**: general criteria and the three clusters, then each of the ten disorders (presentation, interview, DSM-5 and ICD-10 criteria, differential, comorbidity, course, epidemiology and treatment), borderline treatment (DBT, MBT, TFP), personality change due to a medical condition, target-symptom pharmacotherapy, defenses and how to respond to them, and Cloninger's temperament dimensions. Study guide, high-yield list, printable handout and 66 cards. Post-publication boxes cover ICD-11's severity-and-trait model, the 10-year course of borderline personality disorder, the 2024 APA borderline guideline, the Cochrane review and LABILE lamotrigine trial, the community sex ratio of BPD, and correct the avoidant criteria.",
        "href": "#/c/ch19/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Which personality disorder?*",
        "href": "#/helpers/personality",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "**Glossary**: 24 new terms from Chapter 19, including splitting, projective identification, counterprojection, DBT, MBT and Cloninger's temperament dimensions."
      }
    ]
  },
  {
    "version": "35.0.0",
    "date": "2026-10-15",
    "title": "Chapter 25.3: Psychiatric Emergencies",
    "items": [
      {
        "type": "chapter",
        "ch": "ch25-3",
        "text": "**Chapter 25.3, Psychiatric Emergencies**: settings and triage, the five questions of every emergency evaluation, medical versus psychiatric causes, interviewing psychotic, suicidal and violent patients and survivors of rape, emergency psychotherapy, medication, restraint, disposition and documentation, the book's table of common emergencies grouped by cause, and emergencies in children. Study guide, high-yield list, printable handout and 68 cards. Post-publication boxes cover universal suicide screening, safety planning and 988, the ASQ for youth, Project BETA agitation guidance, inhaled loxapine and sublingual dexmedetomidine, CMS restraint rules, excited delirium, lithium dialysis criteria, VMAT2 inhibitors, OTC naloxone and buprenorphine without the X-waiver, current HIV care, and correct the book on flumazenil dosing, emergency contraception, priapism, sumatriptan, paper bag rebreathing and anorexia criteria.",
        "href": "#/c/ch25-3/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Managing an agitated patient in the emergency department*.",
        "href": "#/helpers/agitation",
        "link": "Try it"
      },
      {
        "type": "correction",
        "text": "**Diagnostic helpers**: when an answer has no explanation of its own, the *Why* list now shows the question and the answer chosen instead of a blank line."
      },
      {
        "type": "update",
        "text": "**Glossary**: 19 new terms from Chapter 25.3, including psychiatric triage, verbal de-escalation, safety plan, anticholinergic toxidrome and the silent rape reaction."
      }
    ]
  },
  {
    "version": "34.0.0",
    "date": "2026-10-15",
    "title": "Drug class PDFs",
    "items": [
      {
        "type": "feature",
        "text": "**All high-yield (PDF)** now has a *Drug class PDFs* section: every drug's mechanism, dosing, side effects to watch for and monitoring, grouped by class, in the same two-column, paginated format as the chapter high-yield PDFs. Build one class at a time, or all 6 classes combined into one reference. Also linked from the Drugs page.",
        "href": "#/all-highyield",
        "link": "Open it"
      }
    ]
  },
  {
    "version": "33.0.0",
    "date": "2026-10-15",
    "title": "All high-yield summaries as one PDF",
    "items": [
      {
        "type": "feature",
        "text": "**For educators**: a new *All high-yield (PDF)* page compiles every chapter’s high-yield list into one two-column PDF, with each chapter starting on a new page and running page numbers. Build the full set in one file, or download any single chapter’s PDF on its own. Also linked from each chapter’s high-yield page.",
        "href": "#/all-highyield",
        "link": "Open it"
      }
    ]
  },
  {
    "version": "32.0.0",
    "date": "2026-10-15",
    "title": "Chapter 21.6: Stimulants",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-6",
        "text": "**Chapter 21.6, Stimulants**: methylphenidate and dexmethylphenidate, the amphetamines and lisdexamfetamine, methamphetamine, modafinil and armodafinil, and atomoxetine, for ADHD, narcolepsy, depression, apathy and fatigue, with side-effect management, dosing tables and a comparison of ADHD medicines. Study guide, high-yield list, printable handout and 58 cards. Post-publication boxes cover the 2023 boxed warning, MTA growth findings, psychosis risk with amphetamines, label doses, and newer drugs (viloxazine, Azstarys, extended-release guanfacine and clonidine, solriamfetol, pitolisant), and correct the book on how methylphenidate works.",
        "href": "#/c/ch21-6/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**Drugs**: 16 stimulants and ADHD drugs added, including the newer nonstimulants and wakefulness agents.",
        "href": "#/drugs",
        "link": "Open Drugs"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Choosing an ADHD or wakefulness medicine*.",
        "href": "#/helpers/adhdmed",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "**Glossary**: 15 new terms from Chapter 21.6, including sympathomimetic, narcolepsy, prodrug, lisdexamfetamine and stimulant diversion."
      }
    ]
  },
  {
    "version": "31.0.0",
    "date": "2026-10-15",
    "title": "Chapter 21.5: Drugs Used to Treat Sleep Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-5",
        "text": "**Chapter 21.5, Drugs Used to Treat Sleep Disorders**: zolpidem, zaleplon and eszopiclone, sodium oxybate, ramelteon, melatonin and agomelatine, and prazosin for nightmares, with a comparison of hypnotics. Study guide, high-yield list, printable handout and 48 cards. Post-publication boxes cover the 2019 complex sleep behavior warning, lower zolpidem and eszopiclone doses, orexin antagonists, low-dose doxepin, tasimelteon, newer oxybates, melatonin label accuracy, the prazosin evidence and the AASM guideline, and correct the book on prazosin forms and GHB's receptor.",
        "href": "#/c/ch21-5/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**Drugs**: 12 hypnotics and sleep drugs added, including the orexin antagonists.",
        "href": "#/drugs",
        "link": "Open Drugs"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Choosing a sleep medicine*.",
        "href": "#/helpers/sleepdrug",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "**Glossary**: 13 new terms from Chapter 21.5, including Z drug, complex sleep behaviors, orexin and CBT-I."
      }
    ]
  },
  {
    "version": "30.0.0",
    "date": "2026-10-15",
    "title": "Chapter 21.4: Anxiolytics",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-4",
        "text": "**Chapter 21.4, Anxiolytics**: benzodiazepines (pharmacokinetics, indications from panic to catatonia, adverse effects, dependence and withdrawal, interactions) and flumazenil, buspirone, β-blockers, and barbiturates and older sedatives, ending with a comparison table. Study guide, high-yield list, printable handout and 93 cards, with post-publication updates (the 2020 benzodiazepine boxed warning, the 2016 opioid–benzodiazepine warning, the 2025 tapering guideline, the 2023 Beers Criteria) and a correction of flumazenil's half-life.",
        "href": "#/c/ch21-4/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**Drugs**: 26 anxiolytics, sedatives, β-blockers and barbiturates added.",
        "href": "#/drugs",
        "link": "Open Drugs"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Choosing an anxiolytic*.",
        "href": "#/helpers/anxiolytic",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "**Glossary**: 17 new terms from Chapter 21.4, including GABAA receptor, pentobarbital challenge test and Amytal interview."
      }
    ]
  },
  {
    "version": "29.0.0",
    "date": "2026-10-14",
    "title": "Chapter 21.3: Mood Stabilizers",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-3",
        "text": "**Chapter 21.3, Mood Stabilizers**: lithium (indications, adverse effects, toxicity, special populations, interactions, dosing and levels), valproate, lamotrigine, carbamazepine and oxcarbazepine, the other anticonvulsants used in psychiatry, and calcium channel blockers, ending with a comparison of the four main mood stabilizers. Study guide, high-yield list, printable handout and 107 cards, with post-publication updates (current lithium targets, HLA-B*15:02 testing before carbamazepine, the 2024 valproate restrictions, lamotrigine HLH and arrhythmia warnings, gabapentinoid breathing risks, topiramate in pregnancy, the 2024 pregnancy guideline) and corrections of a few errors in the book.",
        "href": "#/c/ch21-3/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**Drugs**: 16 mood stabilizers, anticonvulsants and calcium channel blockers added.",
        "href": "#/drugs",
        "link": "Open Drugs"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Choosing a mood stabilizer*.",
        "href": "#/helpers/moodstab",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "**Glossary**: 26 new terms from Chapter 21.3, including autoinduction, HLA-B*15:02, ultradian cycling and trough level."
      }
    ]
  },
  {
    "version": "28.0.0",
    "date": "2026-10-14",
    "title": "Chapter 21.2: Antidepressants",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-2",
        "text": "**Chapter 21.2, Antidepressants**: SSRIs and vortioxetine, SNRIs, bupropion, mirtazapine, nefazodone and trazodone, tricyclics, MAOIs and the tyramine diet, thyroid augmentation, ketamine, esketamine and the neurosteroids, with a closing section on choosing and switching. Study guide, high-yield list, printable handout and 107 cards, plus post-publication updates (zuranolone, dextromethorphan–bupropion, gepirone, esketamine monotherapy, the end of brexanolone, new adjunct antipsychotics, the 2025 FDA panel on SSRIs in pregnancy) and corrections of a few errors in the book.",
        "href": "#/c/ch21-2/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**Drugs**: 39 antidepressants and augmenting agents added, with drug pages, comparisons, drills and a class sheet.",
        "href": "#/drugs",
        "link": "Open Drugs"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Choosing an antidepressant*.",
        "href": "#/helpers/antidepressant",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "**Glossary**: 32 new terms from Chapter 21.2, including serotonin syndrome, tyramine, atypical depression and washout period."
      }
    ]
  },
  {
    "version": "27.0.0",
    "date": "2026-10-14",
    "title": "Source links in post-publication updates",
    "items": [
      {
        "type": "feature",
        "text": "**Read the source**: post-publication update boxes now link to the FDA, EMA, APA and CPIC pages, manufacturer and news announcements, and current drug labels (DailyMed) they cite, so you can read them yourself. Links open in a new tab.",
        "href": "#/updates",
        "link": "See all updates"
      }
    ]
  },
  {
    "version": "26.0.0",
    "date": "2026-10-14",
    "title": "Navigation fix",
    "items": [
      {
        "type": "update",
        "text": "**Study guide contents list**: section numbers such as 21.1.13 no longer overlap the section titles on iPad, desktop or phone."
      }
    ]
  },
  {
    "version": "25.0.0",
    "date": "2026-10-14",
    "title": "Chapter 21.0: Principles of Psychopharmacology",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-0",
        "text": "**Chapter 21.0, Principles of Psychopharmacology**: pharmacodynamics and kinetics, side effects and their time course, the antidepressant suicidality debate, medication-induced movement disorders (parkinsonism, dystonia, akathisia, tardive dyskinesia, neuroleptic malignant syndrome and other hyperthermic syndromes), overdose, dosing and monitoring, treatment failure, withdrawal, combinations, special populations, off-label use and placebos. Study guide, high-yield list, printable handout and 106 cards, with post-publication updates on the antidepressant warning, VMAT2 inhibitors, pharmacogenetic dosing and valproate in men.",
        "href": "#/c/ch21-0/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Which medication-induced movement disorder?*",
        "href": "#/helpers/movement",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "**Glossary**: 34 new terms from Chapter 21.0, including acute dystonia, rabbit syndrome, the AIMS and therapeutic index."
      }
    ]
  },
  {
    "version": "24.0.0",
    "date": "2026-10-14",
    "title": "Chapter 21.1: Antipsychotics, and a new Drugs section",
    "items": [
      {
        "type": "chapter",
        "ch": "ch21-1",
        "text": "**Chapter 21.1, Antipsychotics**, the first part of the psychopharmacology chapter: second-generation drugs one by one, first-generation drugs by potency, neuroleptic malignant syndrome and other adverse effects, dosing, depots and treatment resistance. Study guide, high-yield list, printable handout and cards.",
        "href": "#/c/ch21-1/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**Drugs**: a drug reference arranged by class. Each drug page has the same fields (mechanism, indications, dosing, pharmacokinetics, side effects, monitoring, interactions, special populations and pearls). Filter by class, indication or side-effect profile; **compare** up to four drugs side by side, choosing by class and group; **drill** drug facts with spaced repetition; download a one-page **class sheet** PDF. Drug names in the study guides link to their pages.",
        "href": "#/drugs",
        "link": "Open Drugs"
      },
      {
        "type": "feature",
        "text": "**Post-publication updates**: approvals, label changes and guidelines since the 12th edition (for example the 2025 removal of the clozapine REMS, xanomeline–trospium, new long-acting injectables) appear in dashed boxes where they are discussed, and are gathered on one page.",
        "href": "#/updates",
        "link": "See all updates"
      }
    ]
  },
  {
    "version": "23.0.0",
    "date": "2026-10-14",
    "title": "Chapter 14: Elimination Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch14",
        "text": "**Chapter 14, Elimination Disorders**, is now available: encopresis and enuresis, with criteria and minimum ages, medical differential, behavioral treatment (PEG and toileting routines, the bell-and-pad alarm), medication and causes. Study guide, high-yield list, printable handout and 106 cards.",
        "href": "#/c/ch14/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Which elimination disorder?*",
        "href": "#/helpers/elimination",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "**Glossary**: 13 new terms from Chapter 14, including Hirschsprung disease, megacolon and the bell-and-pad alarm."
      }
    ]
  },
  {
    "version": "22.0.0",
    "date": "2026-10-14",
    "title": "A tidier top bar and a chapter menu",
    "items": [
      {
        "type": "feature",
        "text": "**Menu button** (three bars, top left): jump to any chapter from anywhere. It keeps the mode you are in, so a study guide goes to the next study guide. On narrower screens it also holds Review, Exam, Mistakes, Bookmarks, Glossary and the Diagnostic helper."
      },
      {
        "type": "update",
        "text": "**Top bar** now stays on a single row, with search beside the other buttons, on iPad, tablet and phone."
      }
    ]
  },
  {
    "version": "21.0.0",
    "date": "2026-10-14",
    "title": "Chapter 13: Feeding and Eating Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch13",
        "text": "**Chapter 13, Feeding and Eating Disorders**, is now available: anorexia nervosa, bulimia nervosa, binge-eating disorder, night-eating syndrome and purging disorder, with medical complications, laboratory findings, refeeding and hospital management, family-based therapy, CBT and medication. Study guide, high-yield list, printable handout and 147 cards.",
        "href": "#/c/ch13/guide",
        "link": "Open the chapter"
      },
      {
        "type": "feature",
        "text": "**New diagnostic helper**: *Which feeding or eating disorder?* works from the main eating problem to the likely diagnosis or a look-alike.",
        "href": "#/helpers/eating",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "**Glossary**: 22 new terms from Chapter 13, including lanugo, refeeding syndrome, melanosis coli and postbinge anguish."
      }
    ]
  },
  {
    "version": "20.0.0",
    "date": "2026-10-08",
    "title": "Move between chapters faster",
    "items": [
      {
        "type": "feature",
        "text": "**Chapter navigator**: every chapter page now has previous and next buttons and a chapter menu beside “All chapters”. It keeps the mode you are in, so a study guide goes to the next study guide and a pharmacology deck to the next pharmacology deck. On a keyboard, press [ and ] to step between chapters."
      }
    ]
  },
  {
    "version": "19.0.0",
    "date": "2026-10-08",
    "title": "Download handouts as a PDF",
    "items": [
      {
        "type": "feature",
        "text": "**Printable handouts** now have a **Download PDF** button. The app builds the page itself at exact Letter or A4 size, with no browser margins, headers or footers, so the type fills the page. On iPhone and iPad it opens the share sheet (Save to Files, Print, AirDrop). The text stays selectable. *Print instead* is still there.",
        "href": "#/c/ch06/handout",
        "link": "Try it"
      }
    ]
  },
  {
    "version": "18.0.0",
    "date": "2026-10-08",
    "title": "Back up and move your progress",
    "items": [
      {
        "type": "feature",
        "text": "**Back up progress**: export your review schedule, mistakes, bookmarks, exams and teaching sessions to a file, then merge or restore it on another phone or computer. The last import can be undone.",
        "href": "#/progress",
        "link": "Open backup"
      }
    ]
  },
  {
    "version": "17.0.0",
    "date": "2026-10-08",
    "title": "Teaching mode for flashcards and high-yield facts",
    "items": [
      {
        "type": "feature",
        "text": "**Recall mode**: present the Diagnosis, Pharmacology or Foundations flashcards (or all three mixed), reveal the answer, and count who knew it, who partly did and who missed it. Works with the presenter window and the session summary.",
        "href": "#/teach",
        "link": "Open teaching mode"
      },
      {
        "type": "feature",
        "text": "**High-yield fill-in-the-blank**: present one high-yield fact at a time with its key terms blanked, then reveal and count the room.",
        "href": "#/c/ch05/high-yield",
        "link": "Try it on Chapter 5"
      },
      {
        "type": "update",
        "text": "Every flashcard deck now has a *Present in teaching mode* button, and high-yield pages have *Present as fill-in-the-blank*."
      }
    ]
  },
  {
    "version": "16.0.0",
    "date": "2026-10-08",
    "title": "Teaching mode: group tally, facilitator notes and session summary",
    "items": [
      {
        "type": "feature",
        "text": "**Group tally**: count the room's votes for each choice, then reveal the spread, the percent correct and the most chosen wrong answer.",
        "href": "#/teach",
        "link": "Open teaching mode"
      },
      {
        "type": "feature",
        "text": "**Facilitator notes**: discussion prompts in a side panel or a separate presenter window with live counts and remote controls, so the shared screen stays clean."
      },
      {
        "type": "feature",
        "text": "**Session summary**: score by topic and chapter, the questions to revisit (which you can present again), and a printable or copyable report."
      }
    ]
  },
  {
    "version": "15.0.0",
    "date": "2026-10-08",
    "title": "Handouts print cleanly on iPhone and iPad",
    "items": [
      {
        "type": "update",
        "text": "**Printable handouts** now fit inside standard page margins, and lay out their three columns themselves, so they no longer collapse into one long column or spill onto extra pages when printed from Safari on iPhone or iPad. Long chapters now add a page rather than shrink the type below 7 pt.",
        "href": "#/c/ch12/handout",
        "link": "Open a handout"
      }
    ]
  },
  {
    "version": "14.0.0",
    "date": "2026-10-08",
    "title": "Chapter 12 and study-guide bookmarks",
    "items": [
      {
        "type": "feature",
        "text": "**Bookmarks**: tap the ribbon beside any study-guide section to save it. Bookmarked sections are flagged in the chapter contents and collected on a new Bookmarks page, in book order with a short preview.",
        "href": "#/bookmarks",
        "link": "Open bookmarks"
      },
      {
        "type": "chapter",
        "ch": "ch12",
        "text": "**Chapter 12: Somatic Symptom and Related Disorders**: somatic symptom disorder, illness anxiety disorder, conversion disorder with its examination signs, psychological factors affecting other medical conditions, and factitious disorder imposed on self or another, with clues, laboratory detection, differential, course and management. Study guide, high-yield list, 130 flashcards and a printable handout.",
        "href": "#/c/ch12/guide",
        "link": "Start Chapter 12"
      },
      {
        "type": "feature",
        "ch": "ch12",
        "text": "**Which somatic symptom or related disorder?** helper: start with whether symptoms are deliberately produced, then follow the picture to one of 22 outcomes, from malingering and factitious disorder to conversion, illness anxiety and somatic symptom disorder by severity.",
        "href": "#/helpers/somatic",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "24 Chapter 12 terms, such as primary and secondary gain, Hoover test, sick role and somatosensory amplification, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "13.0.0",
    "date": "2026-10-08",
    "title": "Chapter 11: Dissociative Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch11",
        "text": "**Chapter 11: Dissociative Disorders**: dissociative amnesia and fugue, depersonalization/derealization disorder, dissociative identity disorder, trance, coercive persuasion and Ganser syndrome, with their differential diagnosis, course, phase-oriented treatment, epidemiology and etiology. Study guide, high-yield list, 86 flashcards and a printable handout.",
        "href": "#/c/ch11/guide",
        "link": "Start Chapter 11"
      },
      {
        "type": "feature",
        "ch": "ch11",
        "text": "**Which dissociative disorder?** helper: start from lost memory, feeling unreal, separate identities, trance or approximate answers, rule out medical, substance and psychiatric look-alikes, and reach one of 29 outcomes, from the amnesia types to DID and Ganser syndrome.",
        "href": "#/helpers/dissociative",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "23 Chapter 11 terms, such as passive influence, possession trance, approximate answers and phase-oriented treatment, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "12.0.0",
    "date": "2026-10-08",
    "title": "Chapter 10: Trauma- and Stressor-Related Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch10",
        "text": "**Chapter 10: Trauma- and Stressor-Related Disorders**: PTSD, acute stress disorder and adjustment disorders, with their criteria, differential diagnosis, comorbidity, course, treatment, epidemiology and risk factors. Study guide, high-yield list, 74 flashcards and a printable handout.",
        "href": "#/c/ch10/guide",
        "link": "Start Chapter 10"
      },
      {
        "type": "feature",
        "ch": "ch10",
        "text": "**Which trauma or stressor disorder?** helper: start from the kind of stressor, then follow timing and symptom counts to PTSD (with its specifiers), acute stress disorder, an adjustment disorder subtype or a look-alike, across 18 outcomes.",
        "href": "#/helpers/trauma",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "18 Chapter 10 terms, such as prolonged exposure, cognitive processing therapy, delayed expression and peritraumatic dissociation, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "11.0.0",
    "date": "2026-10-08",
    "title": "Chapter 4: Substance Use and Addictive Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch04",
        "text": "**Chapter 4: Substance Use and Addictive Disorders**: the general features of substance disorders, then alcohol, cannabis, opioids, sedatives, stimulants, tobacco, caffeine, hallucinogens including PCP and ketamine, inhalants and anabolic steroids, plus gambling disorder and internet gaming. Study guide, high-yield list, 393 flashcards and a printable handout.",
        "href": "#/c/ch04/guide",
        "link": "Start Chapter 4"
      },
      {
        "type": "feature",
        "ch": "ch04",
        "text": "**Which substance syndrome?** helper: start from intoxication or overdose, withdrawal, substance-induced symptoms, flashbacks or gambling, and reach one of 27 outcomes with danger points and first steps (naloxone, alcohol withdrawal staging, PCP, Wernicke encephalopathy and more).",
        "href": "#/helpers/substance",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "43 Chapter 4 terms, such as precipitated withdrawal, Mellanby effect, chasing losses and hallucinogen-persisting perception disorder, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "10.0.0",
    "date": "2026-10-07",
    "title": "Chapter 3: Neurocognitive Disorders, and a new app icon",
    "items": [
      {
        "type": "chapter",
        "ch": "ch03",
        "text": "**Chapter 3: Neurocognitive Disorders**: evaluating cognition, delirium, dementia and its causes (Alzheimer, vascular, frontotemporal, Lewy body, subcortical and prion), amnestic disorders, psychiatric syndromes due to medical conditions (epilepsy, tumors, head trauma, MS, infections, HIV, lupus, endocrine, metabolic, nutritional and toxic) and mild cognitive impairment. Study guide, high-yield list, 401 flashcards and a printable handout.",
        "href": "#/c/ch03/guide",
        "link": "Start Chapter 3"
      },
      {
        "type": "feature",
        "ch": "ch03",
        "text": "**Which cognitive disorder?** helper: start from how the change began (acute, gradual, memory only, rapidly progressive or mild) and reach one of 31 outcomes, from delirium and dementia types to amnestic syndromes, reversible medical causes and MCI.",
        "href": "#/helpers/cognitive",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "A new app icon, the brain rising over the waves, now appears on your home screen, browser tab and the home page."
      },
      {
        "type": "update",
        "text": "49 Chapter 3 terms, such as beclouded dementia, Korsakoff syndrome, transient global amnesia and Argyll Robertson pupils, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "9.0.0",
    "date": "2026-10-07",
    "title": "Chapter 2: Neurodevelopmental Disorders and Other Childhood Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch02",
        "text": "**Chapter 2: Neurodevelopmental Disorders and Other Childhood Disorders**: intellectual disability, communication disorders, autism, ADHD, learning and motor disorders, early feeding disorders, attachment and trauma, depression and suicide, bipolar disorder and DMDD, disruptive behavior, anxiety and selective mutism, OCD, early-onset schizophrenia and adolescent substance use. Study guide, high-yield list, 584 flashcards and a printable handout.",
        "href": "#/c/ch02/guide",
        "link": "Start Chapter 2"
      },
      {
        "type": "feature",
        "ch": "ch02",
        "text": "**Which developmental disorder?** helper: start from the main concern about a child (global delay, speech and language, social relating, learning, coordination, movements or attention) and reach one of 27 outcomes.",
        "href": "#/helpers/development",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "24 Chapter 2 terms, such as theory of mind, premonitory urge, behavioral inhibition and Werther syndrome, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "8.0.0",
    "date": "2026-10-07",
    "title": "Chapter 1: Examination and Diagnosis of the Psychiatric Patient",
    "items": [
      {
        "type": "chapter",
        "ch": "ch01",
        "text": "**Chapter 1: Examination and Diagnosis of the Psychiatric Patient**: the interview, history and mental status examination, the medical workup and laboratory tests, neuroimaging, rating scales and psychological testing, and the child, adolescent and geriatric evaluation. Study guide, high-yield list, 404 flashcards and a printable handout.",
        "href": "#/c/ch01/guide",
        "link": "Start Chapter 1"
      },
      {
        "type": "feature",
        "ch": "ch01",
        "text": "**Which medical workup?** helper: pick the situation (acute confusion, cognitive decline, new psychosis, substances, drug monitoring, eating disorder or overdose) to see the tests the chapter points to, across 28 outcomes.",
        "href": "#/helpers/workup",
        "link": "Try it"
      },
      {
        "type": "feature",
        "text": "**Back and forward buttons** in the top bar (or Alt+Left and Alt+Right) step through the pages you have visited."
      },
      {
        "type": "update",
        "text": "Printable handouts for long chapters can now run to three or four pages; the page count is chosen automatically to keep the type readable.",
        "href": "#/c/ch01/handout",
        "link": "Open the Chapter 1 handout"
      },
      {
        "type": "update",
        "text": "36 Chapter 1 terms, such as transference, reliability, witzelsucht and neuroleptic malignant syndrome, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "7.0.0",
    "date": "2026-10-03",
    "title": "Chapter 9: Obsessive-Compulsive and Related Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch09",
        "text": "**Chapter 9: Obsessive-Compulsive and Related Disorders**: study guide, high-yield list, 189 flashcards and a printable handout.",
        "href": "#/c/ch09/guide",
        "link": "Start Chapter 9"
      },
      {
        "type": "feature",
        "ch": "ch09",
        "text": "**Which obsessive-compulsive or related disorder?** diagnostic helper: medical causes and look-alikes first, then the focus of the thoughts or behavior, ending at one of 22 outcomes with insight and other specifiers.",
        "href": "#/helpers/ocd",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "Nine Chapter 9 terms, such as exposure and response prevention, PANDAS and trichophagy, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "6.0.0",
    "date": "2026-10-03",
    "title": "Chapter 8: Anxiety Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch08",
        "text": "**Chapter 8: Anxiety Disorders**: study guide, high-yield list, 195 flashcards and a printable handout.",
        "href": "#/c/ch08/guide",
        "link": "Start Chapter 8"
      },
      {
        "type": "feature",
        "ch": "ch08",
        "text": "**Which anxiety disorder?** diagnostic helper: medical, cultural and psychiatric explanations first, then what the person fears and for how long, ending at one of 13 outcomes.",
        "href": "#/helpers/anxiety",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "Eight Chapter 8 terms, such as anticipatory anxiety and systematic desensitization, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "5.0.0",
    "date": "2026-10-03",
    "title": "Chapter 7: Depressive Disorders",
    "items": [
      {
        "type": "chapter",
        "ch": "ch07",
        "text": "**Chapter 7: Depressive Disorders**: study guide, high-yield list, 214 flashcards and a printable handout.",
        "href": "#/c/ch07/guide",
        "link": "Start Chapter 7"
      },
      {
        "type": "feature",
        "ch": "ch07",
        "text": "**Which depressive disorder?** diagnostic helper: cause, bipolarity, bereavement, chronicity, episode severity and specifiers, ending at one of 18 outcomes.",
        "href": "#/helpers/depression",
        "link": "Try it"
      },
      {
        "type": "update",
        "text": "Ten Chapter 7 terms, such as double depression and paradoxical suicide, added to the glossary.",
        "href": "#/glossary",
        "link": "Open the glossary"
      }
    ]
  },
  {
    "version": "4.0.0",
    "date": "2026-10-03",
    "title": "Tools for educators",
    "items": [
      {
        "type": "feature",
        "text": "**Printable handouts**: a one-page high-yield sheet for each chapter, sized automatically to fit A4 or Letter, as an answer key or a fill-in worksheet.",
        "href": "#/c/ch06/handout",
        "link": "Open the Chapter 6 handout"
      },
      {
        "type": "feature",
        "text": "**Teaching mode**: present board-style questions or the chapter cases full screen for group discussion, with the answer revealed on click.",
        "href": "#/teach",
        "link": "Open teaching mode"
      },
      {
        "type": "feature",
        "text": "**What’s new**: this page, listing new chapters, features and corrections."
      }
    ]
  },
  {
    "version": "3.0.0",
    "date": "2026-10-03",
    "title": "Diagnostic helper for bipolar disorders",
    "items": [
      {
        "type": "feature",
        "ch": "ch06",
        "text": "**Which bipolar disorder?** walks through cause, psychosis, the most severe elevated period, depressive episodes and course to bipolar I, bipolar II, cyclothymia or the main look-alikes.",
        "href": "#/helpers/bipolar",
        "link": "Try it"
      }
    ]
  },
  {
    "version": "2.0.0",
    "date": "2026-10-02",
    "title": "Chapter 6 and new ways to study",
    "items": [
      {
        "type": "chapter",
        "ch": "ch06",
        "text": "**Chapter 6: Bipolar Disorders**: study guide, high-yield list and 208 flashcards.",
        "href": "#/c/ch06/guide",
        "link": "Start Chapter 6"
      },
      {
        "type": "feature",
        "text": "**Spaced repetition** replaces the Got it and Still learning marks. Existing marks were carried over. A daily review queue now pulls due cards from every chapter.",
        "href": "#/review",
        "link": "Open daily review"
      },
      {
        "type": "feature",
        "text": "**Board-style exam**: timed clinical cases across chapters, scored by topic, with a review of what you missed.",
        "href": "#/exam",
        "link": "Take an exam"
      },
      {
        "type": "feature",
        "text": "**Mistakes**: every case answered wrong is collected automatically for another try.",
        "href": "#/mistakes",
        "link": "Open mistakes"
      },
      {
        "type": "feature",
        "text": "**Glossary** of signs and symptoms from the book, with tap-to-define for dotted terms throughout the app.",
        "href": "#/glossary",
        "link": "Open the glossary"
      },
      {
        "type": "update",
        "ch": "ch05",
        "text": "**Which psychotic disorder?** diagnostic helper added for Chapter 5, and glossary terms in the Chapter 5 guide can now be tapped for definitions.",
        "href": "#/helpers/psychosis",
        "link": "Try the helper"
      }
    ]
  },
  {
    "version": "1.0.0",
    "date": "2026-10-02",
    "title": "The app launches with Chapter 5",
    "items": [
      {
        "type": "chapter",
        "ch": "ch05",
        "text": "**Chapter 5: Schizophrenia Spectrum and Other Psychotic Disorders**: study guide, high-yield list and 267 flashcards.",
        "href": "#/c/ch05/guide",
        "link": "Open Chapter 5"
      }
    ]
  }
];
