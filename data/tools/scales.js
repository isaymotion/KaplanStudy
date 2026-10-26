/* Rating scales for the Clinical tools page (js/tools.js). Item wording follows the published forms,
 * which their owners allow to be reproduced (see each scale's `license`). Bands and rules are those the
 * listed sources state; where sources differ, the note says so. Checked October 2026. */
(function () {
  var FREQ = [['Not at all', 0], ['Several days', 1], ['More than half the days', 2], ['Nearly every day', 3]];
  var PHQ_FUNC = { id: 'func', label: 'F', score: false, text: 'If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?',
    opts: [['Not difficult at all', 0], ['Somewhat difficult', 1], ['Very difficult', 2], ['Extremely difficult', 3]] };
  var PHQ_CREDIT = 'Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc. No permission required to reproduce, translate, display or distribute.';
  /* 0-7 items where only some points carry a printed anchor; the others are rated between anchors. */
  function anchored(max, anchors) {
    var out = [];
    for (var i = 0; i <= max; i++) out.push([anchors[i] || 'Between the anchors above and below', i]);
    return out;
  }
  var HALL = { 4: 'Moderately severe hallucinations', 5: 'Severe hallucinations', 6: 'Extremely severe hallucinations', 7: 'Continuous hallucinations' };
  function hall(o) { var x = {}; Object.keys(o).forEach(function (k) { x[k] = o[k]; }); Object.keys(HALL).forEach(function (k) { x[k] = HALL[k]; }); return x; }
  var AIMS_OPTS = [['None', 0], ['Minimal, may be extreme normal', 1], ['Mild', 2], ['Moderate', 3], ['Severe', 4]];

  KS.scales = [
    {
      id: 'phq9', short: 'PHQ-9', name: 'PHQ-9: Patient Health Questionnaire',
      blurb: 'Depression severity over the last 2 weeks; 9 items, 0 to 27.',
      summary: 'A self-report measure of depressive symptom severity over the last 2 weeks. It screens and tracks severity; it does not make a diagnosis on its own.',
      intro: 'Over the last 2 weeks, how often have you been bothered by any of the following problems?',
      chapters: ['ch07'],
      max: 27,
      items: [
        { id: 'p1', text: 'Little interest or pleasure in doing things', opts: FREQ },
        { id: 'p2', text: 'Feeling down, depressed, or hopeless', opts: FREQ },
        { id: 'p3', text: 'Trouble falling or staying asleep, or sleeping too much', opts: FREQ },
        { id: 'p4', text: 'Feeling tired or having little energy', opts: FREQ },
        { id: 'p5', text: 'Poor appetite or overeating', opts: FREQ },
        { id: 'p6', text: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down', opts: FREQ },
        { id: 'p7', text: 'Trouble concentrating on things, such as reading the newspaper or watching television', opts: FREQ },
        { id: 'p8', text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual', opts: FREQ },
        { id: 'p9', text: 'Thoughts that you would be better off dead or of hurting yourself in some way', opts: FREQ },
        PHQ_FUNC
      ],
      bands: [
        { lo: 0, hi: 4, label: 'Minimal (0 to 4)', tone: 'ok' },
        { lo: 5, hi: 9, label: 'Mild (5 to 9)', tone: 'mild' },
        { lo: 10, hi: 14, label: 'Moderate (10 to 14)', tone: 'mod', text: 'A score of **10 or more** detected major depression with a sensitivity and specificity of 88% in the validation study.' },
        { lo: 15, hi: 19, label: 'Moderately severe (15 to 19)', tone: 'sev' },
        { lo: 20, hi: 27, label: 'Severe (20 to 27)', tone: 'sev' }
      ],
      flags: [{ item: 'p9', 'in': [1, 2, 3], tone: 'sev', short: 'item 9 positive', text: '**Item 9 is positive.** Common practice is to ask directly about suicidal thoughts and assess risk now, before the patient leaves. The <a href="#/tools/cssrs">C-SSRS screener</a> is one way to structure it. In the Philippines, the NCMH Crisis Hotline is free and open 24/7: **1553** (landline, toll-free), **0919-057-1553** or **0917-899-8727**.' }],
      note: 'The total adds items 1 to 9. The last question (how difficult the problems have made things) is not scored; it describes impairment. Cut points of 5, 10, 15 and 20 mark mild, moderate, moderately severe and severe depression.',
      license: PHQ_CREDIT,
      cite: 'Kroenke K, Spitzer RL, Williams JBW. The PHQ-9: validity of a brief depression severity measure. *J Gen Intern Med.* 2001;16(9):606–613.',
      sources: [
        { label: 'PHQ-9 form (Indian Health Service copy of the Pfizer form)', url: 'https://www.ihs.gov/sites/crs/themes/responsive2017/display_objects/documents/phq_9.pdf' },
        { label: 'PHQ-9 form (NIDA Common Data Elements)', url: 'https://cde.nida.nih.gov/system/files/PatientHealthQuestionnaire-9_2014Mar19.pdf' },
        { label: 'PHQ screeners (instrument home page)', url: 'https://www.phqscreeners.com/' }
      ]
    },
    {
      id: 'gad7', short: 'GAD-7', name: 'GAD-7: Generalized Anxiety Disorder scale',
      blurb: 'Anxiety severity over the last 2 weeks; 7 items, 0 to 21.',
      summary: 'A self-report measure of anxiety symptoms over the last 2 weeks. A positive screen gives a probable diagnosis that needs a clinical interview to confirm.',
      intro: 'Over the last 2 weeks, how often have you been bothered by the following problems?',
      chapters: ['ch08'],
      max: 21,
      items: [
        { id: 'g1', text: 'Feeling nervous, anxious or on edge', opts: FREQ },
        { id: 'g2', text: 'Not being able to stop or control worrying', opts: FREQ },
        { id: 'g3', text: 'Worrying too much about different things', opts: FREQ },
        { id: 'g4', text: 'Trouble relaxing', opts: FREQ },
        { id: 'g5', text: 'Being so restless that it is hard to sit still', opts: FREQ },
        { id: 'g6', text: 'Becoming easily annoyed or irritable', opts: FREQ },
        { id: 'g7', text: 'Feeling afraid as if something awful might happen', opts: FREQ },
        PHQ_FUNC
      ],
      bands: [
        { lo: 0, hi: 4, label: 'Minimal (0 to 4)', tone: 'ok' },
        { lo: 5, hi: 9, label: 'Mild (5 to 9)', tone: 'mild' },
        { lo: 10, hi: 14, label: 'Moderate (10 to 14)', tone: 'mod', text: 'A score of **10 or more** is the suggested cut point for generalized anxiety disorder (sensitivity 89%, specificity 82% in the validation study). Confirm with a clinical interview.' },
        { lo: 15, hi: 21, label: 'Severe (15 to 21)', tone: 'sev', text: 'Confirm with a clinical interview.' }
      ],
      note: 'The total adds items 1 to 7. The difficulty question is not scored. Cut points of 5, 10 and 15 mark mild, moderate and severe anxiety.',
      license: PHQ_CREDIT,
      cite: 'Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. *Arch Intern Med.* 2006;166:1092–1097.',
      sources: [
        { label: 'GAD-7 validation paper (University of Washington copy)', url: 'https://depts.washington.edu/psychres/wordpress/wp-content/uploads/2017/09/gad7_ref.pdf' },
        { label: 'PHQ-9 and GAD-7 forms (North Dakota HHS copy)', url: 'https://www.hhs.nd.gov/sites/www/files/documents/BH/BHC/PHQ-9-and-GAD-7.pdf' },
        { label: 'PHQ screeners (instrument home page)', url: 'https://www.phqscreeners.com/' }
      ]
    },
    {
      id: 'aims', short: 'AIMS', name: 'AIMS: Abnormal Involuntary Movement Scale',
      blurb: 'Tardive dyskinesia exam; 7 body areas rated 0 to 4, plus global and dental items.',
      summary: 'A clinician-rated exam for involuntary movements such as tardive dyskinesia. Do the standard examination first, then rate the highest severity you observed.',
      intro: 'Rate the highest severity observed. Movements seen only on activation are rated one point less than those seen spontaneously. Do not rate tremor.',
      chapters: ['ch21-10', 'ch21-1'],
      max: 28, hidePoints: false,
      items: [
        { id: 'a1', movement: true, text: '**Muscles of facial expression**, e.g. movements of forehead, eyebrows, periorbital area, cheeks; include frowning, blinking, smiling, grimacing', opts: AIMS_OPTS },
        { id: 'a2', movement: true, text: '**Lips and perioral area**, e.g. puckering, pouting, smacking', opts: AIMS_OPTS },
        { id: 'a3', movement: true, text: '**Jaw**, e.g. biting, clenching, chewing, mouth opening, lateral movement', opts: AIMS_OPTS },
        { id: 'a4', movement: true, text: '**Tongue**: rate only increases in movement both in and out of the mouth, not inability to sustain movement', opts: AIMS_OPTS },
        { id: 'a5', movement: true, text: '**Upper extremities** (arms, wrists, hands, fingers): include choreic movements (rapid, objectively purposeless, irregular, spontaneous) and athetoid movements (slow, irregular, complex, serpentine). Do not include tremor (repetitive, regular, rhythmic)', opts: AIMS_OPTS },
        { id: 'a6', movement: true, text: '**Lower extremities** (legs, knees, ankles, toes), e.g. lateral knee movement, foot tapping, heel dropping, foot squirming, inversion and eversion of the foot', opts: AIMS_OPTS },
        { id: 'a7', movement: true, text: '**Neck, shoulders, hips**, e.g. rocking, twisting, squirming, pelvic gyrations', opts: AIMS_OPTS },
        { id: 'a8', label: '8', score: false, text: '**Global:** severity of abnormal movements overall', opts: AIMS_OPTS },
        { id: 'a9', label: '9', score: false, text: '**Global:** incapacitation due to abnormal movements', opts: AIMS_OPTS },
        { id: 'a10', label: '10', score: false, text: '**Global:** patient’s awareness of abnormal movements (rate only the patient’s report)', opts: [['No awareness', 0], ['Aware, no distress', 1], ['Aware, mild distress', 2], ['Aware, moderate distress', 3], ['Aware, severe distress', 4]] },
        { id: 'a11', label: '11', score: false, text: '**Dental:** current problems with teeth and/or dentures?', opts: [['No', 0], ['Yes', 1]] },
        { id: 'a12', label: '12', score: false, text: '**Dental:** are dentures usually worn?', opts: [['No', 0], ['Yes', 1]] }
      ],
      rule: 'aims',
      positive: {
        yes: { label: 'Meets the Schooler–Kane movement threshold', tone: 'sev', text: 'At least one area rated **3 or more**, or two areas rated **2 or more**. For research-criteria tardive dyskinesia this also needs at least 3 months of antipsychotic exposure and no other cause for the movements. The AIMS alone does not diagnose TD.' },
        no: { label: 'Below the Schooler–Kane movement threshold', tone: 'ok', text: 'No area rated 3 or more, and fewer than two areas rated 2 or more. Repeat the exam on schedule and compare with earlier scores.' }
      },
      note: 'The total adds the 7 body areas (0 to 28). Items 8 to 12 are recorded but not added. The form itself sets no cut-off; the Schooler–Kane research criteria are the threshold most often used.',
      license: 'A US federal government (NIMH) instrument in the public domain. Adapted from Guy W, ECDEU Assessment Manual for Psychopharmacology, 1976.',
      cite: 'Guy W. *ECDEU Assessment Manual for Psychopharmacology, Revised.* DHEW Publ. No. (ADM) 76-338. Rockville, MD: NIMH; 1976:534–537. Schooler NR, Kane JM. Research diagnoses for tardive dyskinesia. *Arch Gen Psychiatry.* 1982;39:486–487.',
      sources: [
        { label: 'AIMS form, NIMH (University of Wisconsin copy)', url: 'https://www.psychiatry.wisc.edu/wp-content/uploads/2019/01/AIMS.pdf' },
        { label: 'AIMS with examination procedure (University of Florida copy)', url: 'https://com-psychiatry-dcf-a2.sites.medinfo.ufl.edu/files/2011/05/AIMS.pdf' },
        { label: 'Diagnosing tardive dyskinesia: Schooler–Kane criteria (J Clin Psychiatry)', url: 'https://www.psychiatrist.com/jcp/diagnosing-tardive-dyskinesia/' }
      ]
    },
    {
      id: 'ciwa', short: 'CIWA-Ar', name: 'CIWA-Ar: Clinical Institute Withdrawal Assessment for Alcohol, revised',
      blurb: 'Alcohol withdrawal severity; 10 items, 0 to 67.',
      summary: 'A clinician-rated scale for alcohol withdrawal, used to decide on and adjust symptom-triggered treatment. It assumes the symptoms are from withdrawal; rule out other causes such as infection, hepatic encephalopathy or other drugs.',
      chapters: ['ch04'],
      max: 67,
      items: [
        { id: 'c1', text: '**Nausea and vomiting.** Ask: “Do you feel sick to your stomach? Have you vomited?”', opts: anchored(7, { 0: 'No nausea and no vomiting', 1: 'Mild nausea with no vomiting', 4: 'Intermittent nausea with dry heaves', 7: 'Constant nausea, frequent dry heaves and vomiting' }) },
        { id: 'c2', text: '**Tremor.** Arms extended and fingers spread apart.', opts: anchored(7, { 0: 'No tremor', 1: 'Not visible, but can be felt fingertip to fingertip', 4: 'Moderate, with patient’s arms extended', 7: 'Severe, even with arms not extended' }) },
        { id: 'c3', text: '**Paroxysmal sweats.**', opts: anchored(7, { 0: 'No sweat visible', 1: 'Barely perceptible sweating, palms moist', 4: 'Beads of sweat obvious on forehead', 7: 'Drenching sweats' }) },
        { id: 'c4', text: '**Anxiety.** Ask: “Do you feel nervous?”', opts: anchored(7, { 0: 'No anxiety, at ease', 1: 'Mildly anxious', 4: 'Moderately anxious, or guarded, so anxiety is inferred', 7: 'Equivalent to acute panic states as seen in severe delirium or acute schizophrenic reactions' }) },
        { id: 'c5', text: '**Agitation.**', opts: anchored(7, { 0: 'Normal activity', 1: 'Somewhat more than normal activity', 4: 'Moderately fidgety and restless', 7: 'Paces back and forth during most of the interview, or constantly thrashes about' }) },
        { id: 'c6', text: '**Tactile disturbances.** Ask: “Have you any itching, pins and needles sensations, any burning, any numbness, or do you feel bugs crawling on or under your skin?”', opts: anchored(7, hall({ 0: 'None', 1: 'Very mild itching, pins and needles, burning or numbness', 2: 'Mild itching, pins and needles, burning or numbness', 3: 'Moderate itching, pins and needles, burning or numbness' })) },
        { id: 'c7', text: '**Auditory disturbances.** Ask: “Are you more aware of sounds around you? Are they harsh? Do they frighten you? Are you hearing anything that is disturbing to you? Are you hearing things you know are not there?”', opts: anchored(7, hall({ 0: 'Not present', 1: 'Very mild harshness or ability to frighten', 2: 'Mild harshness or ability to frighten', 3: 'Moderate harshness or ability to frighten' })) },
        { id: 'c8', text: '**Visual disturbances.** Ask: “Does the light appear to be too bright? Is its color different? Does it hurt your eyes? Are you seeing anything that is disturbing to you? Are you seeing things you know are not there?”', opts: anchored(7, hall({ 0: 'Not present', 1: 'Very mild sensitivity', 2: 'Mild sensitivity', 3: 'Moderate sensitivity' })) },
        { id: 'c9', text: '**Headache, fullness in head.** Ask: “Does your head feel different? Does it feel like there is a band around your head?” Do not rate for dizziness or lightheadedness.', opts: [['Not present', 0], ['Very mild', 1], ['Mild', 2], ['Moderate', 3], ['Moderately severe', 4], ['Severe', 5], ['Very severe', 6], ['Extremely severe', 7]] },
        { id: 'c10', text: '**Orientation and clouding of sensorium.** Ask: “What day is this? Where are you? Who am I?”', opts: [['Oriented and can do serial additions', 0], ['Cannot do serial additions or is uncertain about date', 1], ['Disoriented for date by no more than 2 calendar days', 2], ['Disoriented for date by more than 2 calendar days', 3], ['Disoriented for place and/or person', 4]] }
      ],
      bands: [
        { lo: 0, hi: 9, label: 'Mild withdrawal (under 10)', tone: 'ok', text: 'The form notes that patients scoring under 10 do not usually need additional medication for withdrawal.' },
        { lo: 10, hi: 18, label: 'Moderate withdrawal (10 to 18)', tone: 'mod', text: 'Usually treated with medication, often symptom-triggered; reassess often.' },
        { lo: 19, hi: 67, label: 'Severe withdrawal (19 or more)', tone: 'sev', text: 'Severe withdrawal: medically supervised management, usually inpatient. Watch for seizures and delirium.' }
      ],
      note: 'Items 1 to 9 are rated 0 to 7 and orientation 0 to 4, so the maximum is 67. Only some points on each item have printed anchors; rate between them as needed. Bands here follow the 2020 ASAM alcohol withdrawal guideline (under 10 mild, 10 to 18 moderate, 19 or more severe). Older copies of the form use other cut-offs, so follow your unit’s protocol. The CIWA-Ar tracks withdrawal and guides symptom-triggered dosing; it does not diagnose withdrawal. Several items rely on what the patient reports, so the scale is hard to use when a patient cannot communicate.',
      license: 'The CIWA-Ar is not copyrighted and may be reproduced freely (statement printed on the form).',
      cite: 'Sullivan JT, Sykora K, Schneiderman J, Naranjo CA, Sellers EM. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). *Br J Addict.* 1989;84:1353–1357.',
      sources: [
        { label: 'CIWA-Ar form (Stanford copy)', url: 'https://web.stanford.edu/~ashford/CIWA2.htm' },
        { label: 'CIWA-Ar form (Massachusetts DPH copy)', url: 'https://www.mass.gov/doc/neurobiologyconsequences-treatment-of-alcohol-od-and-wdciwaar/download' },
        { label: 'CIWA-Ar score ranges from the ASAM 2020 guideline (California Society of Addiction Medicine)', url: 'https://www.csam-asam.org/ciwa-ar' },
      ]
    },
    {
      id: 'cows', short: 'COWS', name: 'COWS: Clinical Opiate Withdrawal Scale',
      blurb: 'Opioid withdrawal severity; 11 signs and symptoms.',
      summary: 'A clinician-rated scale for opioid withdrawal. Rate each item only on its apparent relationship to opioid withdrawal: a fast pulse after the patient was jogging does not count.',
      chapters: ['ch04', 'ch21-7'],
      max: 48,
      items: [
        { id: 'w1', text: '**Resting pulse rate**, measured after the patient is sitting or lying for one minute', opts: [['80 or below', 0], ['81 to 100', 1], ['101 to 120', 2], ['Greater than 120', 4]] },
        { id: 'w2', text: '**Sweating** over the past half hour, not accounted for by room temperature or patient activity', opts: [['No report of chills or flushing', 0], ['Subjective report of chills or flushing', 1], ['Flushed or observable moistness on face', 2], ['Beads of sweat on brow or face', 3], ['Sweat streaming off face', 4]] },
        { id: 'w3', text: '**Restlessness**, observed during the assessment', opts: [['Able to sit still', 0], ['Reports difficulty sitting still, but is able to do so', 1], ['Frequent shifting or extraneous movements of legs or arms', 3], ['Unable to sit still for more than a few seconds', 5]] },
        { id: 'w4', text: '**Pupil size**', opts: [['Pupils pinned or normal size for room light', 0], ['Pupils possibly larger than normal for room light', 1], ['Pupils moderately dilated', 2], ['Pupils so dilated that only the rim of the iris is visible', 5]] },
        { id: 'w5', text: '**Bone or joint aches.** If the patient had pain before, score only the additional part attributed to opioid withdrawal.', opts: [['Not present', 0], ['Mild diffuse discomfort', 1], ['Patient reports severe diffuse aching of joints or muscles', 2], ['Patient is rubbing joints or muscles and is unable to sit still because of discomfort', 4]] },
        { id: 'w6', text: '**Runny nose or tearing**, not accounted for by cold symptoms or allergies', opts: [['Not present', 0], ['Nasal stuffiness or unusually moist eyes', 1], ['Nose running or tearing', 2], ['Nose constantly running or tears streaming down cheeks', 4]] },
        { id: 'w7', text: '**GI upset** over the last half hour', opts: [['No GI symptoms', 0], ['Stomach cramps', 1], ['Nausea or loose stool', 2], ['Vomiting or diarrhea', 3], ['Multiple episodes of diarrhea or vomiting', 5]] },
        { id: 'w8', text: '**Tremor**, observed with hands outstretched', opts: [['No tremor', 0], ['Tremor can be felt, but not observed', 1], ['Slight tremor observable', 2], ['Gross tremor or muscle twitching', 4]] },
        { id: 'w9', text: '**Yawning**, observed during the assessment', opts: [['No yawning', 0], ['Yawning once or twice during the assessment', 1], ['Yawning three or more times during the assessment', 2], ['Yawning several times a minute', 4]] },
        { id: 'w10', text: '**Anxiety or irritability**', opts: [['None', 0], ['Patient reports increasing irritability or anxiousness', 1], ['Patient obviously irritable or anxious', 2], ['Patient so irritable or anxious that participation in the assessment is difficult', 4]] },
        { id: 'w11', text: '**Gooseflesh skin**', opts: [['Skin is smooth', 0], ['Piloerection of skin can be felt or hairs standing up on arms', 3], ['Prominent piloerection', 5]] }
      ],
      bands: [
        { lo: 0, hi: 4, label: 'Under 5: below the mild range', tone: 'ok', text: 'The form gives no label for scores under 5.' },
        { lo: 5, hi: 12, label: 'Mild (5 to 12)', tone: 'mild' },
        { lo: 13, hi: 24, label: 'Moderate (13 to 24)', tone: 'mod' },
        { lo: 25, hi: 36, label: 'Moderately severe (25 to 36)', tone: 'sev' },
        { lo: 37, hi: 48, label: 'Severe (more than 36)', tone: 'sev' }
      ],
      note: 'The total is the sum of all 11 items. The points are not evenly spaced (for example 0, 1, 2 or 4), so use the descriptions, not a guess at the number. Buprenorphine induction protocols set their own COWS threshold for the first dose; follow yours.',
      license: 'The form states: “This version may be copied and used clinically.” Source: Wesson DR, Ling W, *J Psychoactive Drugs* 2003.',
      cite: 'Wesson DR, Ling W. The Clinical Opiate Withdrawal Scale (COWS). *J Psychoactive Drugs.* 2003;35(2):253–259.',
      sources: [
        { label: 'COWS form (NIDA)', url: 'https://nida.nih.gov/sites/default/files/ClinicalOpiateWithdrawalScale.pdf' }
      ]
    },
    {
      id: 'cssrs', short: 'C-SSRS screener', name: 'C-SSRS screener: Columbia Suicide Severity Rating Scale, screen version',
      blurb: 'Suicidal ideation and behavior; 6 yes/no questions with skip logic.',
      summary: 'A short screen for suicidal ideation and behavior. Ask the questions as written. It is a screen, not a full risk assessment: a positive answer leads to a fuller assessment and a safety plan.',
      intro: 'Questions 1 to 5 ask about the **past month**; question 6 asks about **lifetime** behavior, then whether it was within the past three months. Always ask questions 1 and 2. If YES to 2, ask questions 3, 4, 5 and 6. If NO to 2, go directly to question 6.',
      chapters: ['ch25-3'],
      hidePoints: true,
      items: [
        { id: 'q1', text: 'Have you wished you were dead or wished you could go to sleep and not wake up?', opts: [['No', 0], ['Yes', 1]] },
        { id: 'q2', text: 'Have you actually had any thoughts of killing yourself?', opts: [['No', 0], ['Yes', 1]] },
        { id: 'q3', show: { item: 'q2', 'in': [1] }, text: 'Have you been thinking about how you might do this?', hint: 'E.g. “I thought about taking an overdose but I never made a specific plan as to when where or how I would actually do it…and I would never go through with it.”', opts: [['No', 0], ['Yes', 1]] },
        { id: 'q4', show: { item: 'q2', 'in': [1] }, text: 'Have you had these thoughts and had some intention of acting on them?', hint: 'As opposed to “I have the thoughts but I definitely will not do anything about them.”', opts: [['No', 0], ['Yes', 1]] },
        { id: 'q5', show: { item: 'q2', 'in': [1] }, text: 'Have you started to work out or worked out the details of how to kill yourself?', hint: 'Then ask: “Did you intend to carry out this plan?”', opts: [['No', 0], ['Yes', 1]] },
        { id: 'q6', text: 'Have you ever done anything, started to do anything, or prepared to do anything to end your life?', hint: 'Examples: Took pills, tried to shoot yourself, cut yourself, or hang yourself, took out pills but didn’t swallow any, held a gun but changed your mind or it was grabbed from your hand, went to the roof but didn’t jump, collected pills, obtained a gun, gave away valuables, wrote a will or suicide note, etc.', opts: [['No', 0], ['Yes', 1]] },
        { id: 'q6b', label: '6a', show: { item: 'q6', 'in': [1] }, text: 'Was this within the past three months?', opts: [['No', 0], ['Yes', 1]] }
      ],
      rule: 'cssrs',
      risk: {
        high: { label: 'Item 4 or 5 yes, or item 6 within the past 3 months', tone: 'sev', text: 'The developers’ possible response protocol: **behavioral health consultation and patient safety precautions.** Do not leave the patient alone while this is arranged. In the Philippines, the NCMH Crisis Hotline is free and open 24/7: **1553** (landline, toll-free), **0919-057-1553** or **0917-899-8727**.' },
        low: { label: 'Item 1, 2 or 3 yes, or item 6 more than 3 months ago', tone: 'mod', text: 'The developers’ possible response protocol: **behavioral health referral.** Go on to a fuller risk assessment and a safety plan. In the Philippines, the NCMH Crisis Hotline is free and open 24/7: **1553** (landline, toll-free), **0919-057-1553** or **0917-899-8727**.' },
        none: { label: 'No positive answers', tone: 'ok', text: 'No suicidal ideation or behavior reported on the screen. Rescreen when the situation changes.' }
      },
      note: 'The developers leave the exact thresholds to each service. Their possible response protocol links items 1 to 3, and item 6 more than three months ago, to a behavioral health referral; items 4 and 5, and item 6 within the past three months, to behavioral health consultation plus patient safety precautions. A screen is not a full risk assessment.',
      license: 'Free to use in community and healthcare settings without special permission; the core questions must not be changed. © 2008 The Research Foundation for Mental Hygiene, Inc. Developed by Kelly Posner, PhD, and colleagues, The Columbia Lighthouse Project.',
      cite: 'Posner K, Brown GK, Stanley B, et al. The Columbia–Suicide Severity Rating Scale: initial validity and internal consistency findings from three multisite studies with adolescents and adults. *Am J Psychiatry.* 2011;168(12):1266–1277.',
      sources: [
        { label: 'C-SSRS screener, lifetime/recent, with triage points (Columbia Lighthouse Project)', url: 'https://cssrs.columbia.edu/c-ssrs-screener-lifetime-recent-with-triage-points-2026/' },
        { label: 'Possible response protocol (Columbia Lighthouse Project)', url: 'https://cssrs.columbia.edu/c-ssrs-screener-since-last-contact-with-triage-points-for-advocates-2026/' },
        { label: 'C-SSRS for communities and healthcare: terms of use', url: 'https://cssrs.columbia.edu/the-columbia-scale-c-ssrs/cssrs-for-communities-and-healthcare/' }
      ]
    }
  ];
})();
