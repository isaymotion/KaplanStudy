/* Chapter 8 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 8. */
KS.add("ch08", "guide", {
  intro: "Everyone feels anxious. Anxiety becomes a disorder when it is triggered inappropriately and becomes maladaptive. The anxiety disorders (panic disorder, agoraphobia, specific phobia, social anxiety disorder and generalized anxiety disorder) are the most prevalent psychiatric syndromes in the United States, begin earlier than almost any other psychiatric disorder, and respond well to treatment.",
  objectives: [
    "Describe anxiety and how it differs from fear, and recognize its physical, cognitive and perceptual features, including cultural presentations.",
    "Apply the DSM-5 and ICD-10 criteria for panic disorder, agoraphobia, specific phobia, social anxiety disorder and generalized anxiety disorder.",
    "Tell the anxiety disorders apart from each other, and from other psychiatric and medical causes of anxiety.",
    "Choose first- and second-line medications for each disorder (Table 8-6) and use benzodiazepines appropriately.",
    "Match psychotherapies to disorders, including exposure for specific phobia and CBT for panic and social anxiety.",
    "Summarize the course, epidemiology, genetics, imaging and fear-circuit neurobiology of anxiety."
  ],
  parts: [
    {
      title: "Recognize the illness",
      sections: [
        {
          id: "s8-overview",
          title: "Normal and pathologic anxiety",
          blocks: [
            { type: "p", text: "Anxiety has **two components**: awareness of **physiologic sensations** (palpitations, sweating) and awareness of **being nervous or frightened**. It is a diffuse, unpleasant, vague sense of apprehension, usually with autonomic symptoms." },
            { type: "defs", items: [
              ["Fear", "A response to an **overt** danger."],
              ["Anxiety", "A response to an **impending** danger, not an overt one. Like fear, it is a normal adaptive response that prepares us for **fight, flight or freezing**."],
              ["Pathologic anxiety", "Anxiety that is **inappropriately triggered and maladaptive**: an anxiety disorder."]
            ] },
            { type: "table", caption: "Why anxiety disorders matter", head: ["Measure", "Figure"], rows: [
              ["US adults with a lifetime major anxiety disorder", "Nearly **one fifth**"],
              ["US adults with a current anxiety disorder", "**1 in 10**"],
              ["Global rank among contributors to nonfatal health loss", "**Sixth**"],
              ["Share of DALYs for mental, neurologic and substance use disorders", "**10 percent**, second only to major depression"]
            ] },
            { type: "p", text: "Anxiety disorders cause social impairment and, when they begin in childhood, can interfere with healthy development, with consequences for later social and occupational functioning." }
          ]
        },
        {
          id: "s8-presentation",
          title: "How anxiety presents",
          blocks: [
            { type: "p", text: "Many anxiety symptoms, especially autonomic ones, are **observable and quantifiable**, which makes objective measurement and research easier than in many disorders." },
            { type: "defs", items: [
              ["Physical", "Most common is autonomic: **headache, perspiration, palpitations, chest tightness, mild stomach discomfort**. Motor symptoms include restlessness, being unable to sit or stand still. The constellation varies between people."],
              ["Mood and appearance", "Patients describe feeling nervous or frightened. In a panic attack the expression is classically fearful: **eyes and mouth open, eyebrows raised**. In chronic anxiety the expression may be blunted, more like depressed affect."],
              ["Thought", "Thoughts may race and, in severe anxiety, become disorganized; during panic a patient may ruminate or stammer. Thoughts focus on the perceived cause, with **catastrophizing and overestimation of danger**. Chronic anxiety brings more negative thinking."],
              ["Perception", "Hallucinations are rare, but severe anxiety can distort perception of **time, space, people and the meaning of events**."],
              ["Cognition", "In the right dose anxiety sharpens attention; in excess it impairs cognition, with confusion, poor focus and trouble with recall."],
              ["Insight and judgment", "Usually not significantly affected, though patients may interpret their environment selectively to justify their reactions."]
            ] },
            { type: "callout", kind: "exam", title: "The emergency department presentation", text: "In panic, attention fixes on dying from a cardiac or respiratory catastrophe. Patients present as **young, physically healthy people insisting they are having a heart attack**. As many as **20 percent** have syncope during a panic attack." },
            { type: "callout", kind: "caution", title: "Suicide risk", text: "Patients rarely volunteer suicidal ideation, but they are at **increased risk**. Lifetime suicide risk in panic disorder is higher than in people with no mental disorder, and most anxiety disorders raise the risk." }
          ]
        },
        {
          id: "s8-special",
          title: "Special populations and culture",
          blocks: [
            { type: "list", items: [
              "**Children and older adults** may present more with **somatic** symptoms than other adults.",
              "Some cultural groups have syndromes that reflect culturally specific understandings of the body, for example the anxiety syndromes related to fear of **“wind attacks” in Cambodians**, and **ataque de nervios** (attack of nerves) in Puerto Rican and Dominican patients.",
              "Symptoms usually do not differ from those in other cultures; the emphasis falls on symptoms relevant to beliefs about the cause.",
              "A full history and examination usually clarify the problem, and a **cultural consultation** often helps.",
              "Broad generalizations about ethnic or cultural groups often reflect bias and are rarely helpful."
            ] }
          ]
        }
      ]
    },
    {
      title: "Make the diagnosis",
      sections: [
        {
          id: "s8-map",
          title: "The anxiety disorders at a glance",
          blocks: [
            { type: "p", text: "The chapter covers **panic disorder** (with or without agoraphobia), **agoraphobia** (without a history of panic disorder), **specific phobia**, **social anxiety disorder** (social phobia) and **generalized anxiety disorder**. Each is defined by **what** the person fears and **for how long**." },
            { type: "table", wide: true, caption: "What each disorder is afraid of", head: ["Disorder", "Core fear", "Minimum duration"], rows: [
              ["Panic disorder", "**Recurrent, unexpected panic attacks**, then worry about more attacks or avoidance", "**1 month** of worry or avoidance after an attack"],
              ["Agoraphobia", "Places where **escape or help would be difficult**, away from home and safety", "**6 months**"],
              ["Specific phobia", "A specific **object or situation** seen as dangerous", "**6 months**"],
              ["Social anxiety disorder", "**Scrutiny and negative evaluation**: embarrassment or rejection", "**6 months**"],
              ["Generalized anxiety disorder", "**Many everyday events or activities**, worried about most of the time", "**6 months**"]
            ] },
            { type: "timeline", title: "Time frames", cols: ["Minutes", "1 month", "Months", "6 months or more"], rows: [
              { label: "Panic attack", from: 0, to: 1, bar: "Peaks in ~10 min", color: "guide", note: "Usually lasts 20–30 minutes, rarely more than an hour." },
              { label: "Panic disorder", from: 1, to: 2, bar: "≥ 1 month", color: "hy", note: "Anticipatory anxiety or avoidance after an attack." },
              { label: "Phobias, social anxiety, GAD", from: 3, to: 4, bar: "≥ 6 months", color: "found", note: "Agoraphobia, specific phobia, social anxiety and GAD." }
            ] }
          ]
        },
        {
          id: "s8-panic",
          title: "Panic disorder",
          blocks: [
            { type: "p", text: "Panic disorder is an acute, intense attack of anxiety with **feelings of impending doom**, occurring in discrete periods of intense fear, from several attacks in a day to only a few a year. The most common comorbidity is **agoraphobia**." },
            { type: "callout", kind: "pearl", title: "A panic attack is a symptom, not a diagnosis", text: "A **panic attack** is a sudden period of intense fear lasting minutes to hours. Many disorders and situations besides panic disorder can cause one, especially the **phobias and PTSD**." },
            { type: "case", title: "Chapter case: Mrs. K at her desk", text: "A 35-year-old woman suddenly developed breathlessness, dizziness, a racing heart, shakiness and terror of dying of a heart attack while at work. A full emergency workup, including ECG and blood tests, was normal. She later revealed two earlier episodes, one while driving and one at breakfast, which she had not reported for fear of being thought crazy. She called the psychiatrist only after a fourth attack.", point: "Recurrent, unexpected attacks with a normal medical workup suggest panic disorder; shame and fear of being dismissed often delay care." },
            { type: "table", wide: true, caption: "Panic disorder in DSM-5 and ICD-10 (after Table 8-1)", head: ["Feature", "DSM-5 (panic disorder)", "ICD-10 (episodic paroxysmal anxiety)"], rows: [
              ["Duration", "**1 month** of worry after a panic attack", "Attacks occur during a discrete period"],
              ["Panic attack symptoms", "Cardiopulmonary: shortness of breath, palpitations, chest discomfort. GI: nausea or discomfort. Skin and systemic: sweating, chills or flushing. Neurologic: trembling, dizziness, numbness or tingling. Psychiatric: derealization or depersonalization, fear of losing control, fear of dying. Abrupt and unpredictable", "Recurrent, unpredictable attacks of severe anxiety with chest pain, palpitations, difficulty breathing, sweating, dizziness, plus depersonalization, derealization, fear of losing control or of dying"],
              ["Between attacks", "**Anticipatory anxiety** (fear of further attacks) or **avoidance behavior**", "—"],
              ["Number required", "Panic attack: **4 or more** symptoms; at least 1 attack; worry or avoidance for 1 month or more", "—"],
              ["Exclusions", "Substance use; another medical condition; another mental disorder", "Another mental illness"],
              ["Comment", "A **panic attack specifier** exists for attacks without full panic disorder", "—"]
            ] },
            { type: "defs", title: "Kinds of panic attack", items: [
              ["Unexpected", "No identifiable trigger. DSM-5 requires **recurrent, unexpected** attacks for panic disorder, to separate it from the phobias and other causes."],
              ["Expected", "Linked to a situational stimulus."],
              ["Situationally predisposed", "Fits neither neatly: may or may not occur with a trigger, either immediately or after a considerable delay."]
            ] }
          ]
        },
        {
          id: "s8-agoraphobia",
          title: "Agoraphobia",
          blocks: [
            { type: "p", text: "Fear of or anxiety about places from which **escape might be difficult**. It can be the **most disabling phobia**, because it interferes with work and social life outside the home. It often coexists with panic disorder, but **DSM-5 treats it as a separate condition**. People with agoraphobia alone often still have panic-like symptoms that fall short of full attacks." },
            { type: "case", title: "Chapter case: Mrs. W, afraid to leave home", text: "A 33-year-old woman felt she was having a heart attack whenever she left home. It began 8 years earlier with a sudden attack during a yoga class; repeated workups were normal while attacks recurred about four times a month. She came to fear attacks away from home, went out only when necessary with her phone or a companion, and avoided malls, theaters and banks where escape is hard, knowing her fear was excessive.", point: "Panic attacks commonly lead to agoraphobic avoidance of places where escape or help would be difficult." },
            { type: "list", items: [
              "Patients rigidly avoid situations where help would be hard to get, and prefer a **companion** when leaving home, especially to crowded or closed places.",
              "Severely affected patients may **refuse to leave the house**.",
              "Patients may fear they are **going crazy**."
            ] },
            { type: "table", wide: true, caption: "Agoraphobia in DSM-5 and ICD-10 (after Table 8-2)", head: ["Feature", "DSM-5", "ICD-10"], rows: [
              ["Duration", "**6 months or more**", "—"],
              ["Feared situations", "Public transportation; open spaces; confined spaces; lines or crowds; being alone outside the home", "Leaving home; public places; crowded places; traveling alone"],
              ["Reason for avoidance", "Fear of a **panic attack** there, or of having **no companion** to help", "Avoidance of anxiety-provoking situations; often with panic disorder"],
              ["Number required", "**At least 1** of the feared situations", "—"],
              ["Proportion and impact", "Out of proportion to the threat; marked distress or impairment", "—"],
              ["Exclusions", "Another medical condition; another mental disorder", "—"]
            ], note: "DSM-5 uses this diagnosis when the fear occurs without panic disorder, even when the fear is of having an attack." },
            { type: "p", text: "The feared places share one feature: the person is **away from home and safety and cannot quickly return**." }
          ]
        },
        {
          id: "s8-specific",
          title: "Specific phobia",
          blocks: [
            { type: "p", text: "An intense, persistent fear of an **object or situation** considered dangerous, **out of proportion** to the real threat. Exposure produces intense anxiety, even panic. Patients may anticipate harm (being bitten by a dog) or fear losing control (fainting once the elevator doors close)." },
            { type: "case", title: "Chapter case: Mr. S, the lawyer who could not drive", text: "A successful lawyer sought treatment when his firm moved somewhere he could only reach by car. He was terrified of driving, especially on highways; even the thought brought images of a fiery crash, a racing heart, nausea and sweating, and on busy roads he often had to pull over to vomit.", point: "Intense fear tied to one situation, with anticipatory dread and avoidance, fits a situational specific phobia." },
            { type: "table", wide: true, caption: "Specific phobia in DSM-5 and ICD-10 (after Table 8-3)", head: ["Feature", "DSM-5", "ICD-10 (specific, isolated phobias)"], rows: [
              ["Duration", "Persistent, **6 months or more**", "—"],
              ["Symptoms", "Fear of an object or situation; **immediate** fear on exposure; avoidance; out of proportion to the threat", "Phobias restricted to highly specific situations, objects or activities; exposure causes panic"],
              ["Number required", "All of the above", "—"],
              ["Impact", "Marked distress or impairment", "—"],
              ["Types", "**Animal; natural environment; blood–injection–injury** (blood, injections and transfusions, other medical care, injury); **situational**; other", "Also other phobic anxiety disorder and unspecified"]
            ] },
            { type: "p", text: "Anxiety usually comes **immediately** on exposure, and the result is **avoidance or painful endurance**. What all specific phobias share is the irrational belief that the feared object is harmful or dangerous." }
          ]
        },
        {
          id: "s8-social",
          title: "Social anxiety disorder",
          blocks: [
            { type: "p", text: "Fear of social situations involving **scrutiny** or contact with strangers. The fear is of the **embarrassment** that may occur, **not of the situation itself**, which is what separates it from a specific phobia. Fears may be specific (eating or speaking in front of others) or a vague fear of embarrassing oneself." },
            { type: "case", title: "Chapter case: Ms. B and the promotion", text: "A 29-year-old programmer hesitated to accept a promotion that required meeting other divisions and occasional public speaking. She had always feared being ridiculed for saying something stupid and was terrified of speaking to groups. In meetings her heart raced, her mouth went dry and she sweated, fearing a gaffe would make people laugh; she began skipping meetings or leaving early.", point: "Fear of negative evaluation that becomes impairing when demands increase is the core of social anxiety disorder." },
            { type: "table", wide: true, caption: "Social anxiety disorder in DSM-5 and ICD-10 (after Table 8-4)", head: ["Feature", "DSM-5", "ICD-10"], rows: [
              ["Duration", "**6 months**", "—"],
              ["Symptoms", "Fear of being judged in social situations; fear that others will **notice the anxiety**; avoidance; out of proportion to the social risk", "Fear of being judged; avoidance; may be linked to low self-esteem; may cause panic attacks"],
              ["Impact", "Marked distress or impairment", "—"],
              ["Exclusions", "Another mental illness; another medical illness", "—"],
              ["Specifier", "**Performance only**: fear limited to public speaking or performance", "—"]
            ] },
            { type: "callout", kind: "pearl", text: "Almost everyone is somewhat anxious about public speaking or a party full of strangers. The disorder requires anxiety that is **disabling**, occurs **under scrutiny**, and involves fear of being **negatively evaluated** (embarrassed or rejected)." }
          ]
        },
        {
          id: "s8-gad",
          title: "Generalized anxiety disorder",
          blocks: [
            { type: "p", text: "**Excessive anxiety and worry about several events or activities most of the time for at least 6 months.** The worry is hard to control, covers a broad swath of everyday life (daily activities, timeliness, finances, health) and comes with somatic symptoms. Ordinary concerns feel as if catastrophe is possible, likely and imminent." },
            { type: "callout", kind: "exam", title: "A key feature", text: "Patients **cannot prioritize** their worries or set them aside to deal with more pressing matters. This inability drives much of the impairment." },
            { type: "case", title: "Chapter case: Mr. G, the teacher who worried", text: "A successful 28-year-old teacher had spent a year worrying more and more about his teaching, despite being popular and respected, and about losing his money to unexpected expenses despite being financially secure. He felt tense and irritable at work and home, could not stop thinking about the next day’s challenges, and lay awake restless at night.", point: "Excessive, uncontrollable worry across several areas, with tension, irritability and insomnia, is generalized anxiety disorder." },
            { type: "table", wide: true, caption: "Generalized anxiety disorder in DSM-5 and ICD-10 (after Table 8-5)", head: ["Feature", "DSM-5", "ICD-10"], rows: [
              ["Duration", "**6 months**", "—"],
              ["Symptoms", "Excessive anxiety and worry; difficulty controlling it; with **restlessness, fatigue, poor concentration, irritability, muscle tension, insomnia**", "Persistent anxiety with shaking, muscle tension, sweating, lightheadedness, palpitations, GI symptoms"],
              ["Number required", "The first two plus **3 or more** of the specific symptoms", "—"],
              ["Impact", "Marked distress or impairment", "—"],
              ["Exclusions", "Another mental disorder; substance use; another medical condition", "Anxiety not tied to an object, event or situation"]
            ] },
            { type: "p", text: "What separates GAD from normal worry: the worry is **excessive, difficult to control and impairing**." }
          ]
        },
        {
          id: "s8-scales",
          title: "Rating scales",
          blocks: [
            { type: "defs", items: [
              ["Beck Anxiety Inventory (BAI)", "A widely used anxiety scale."],
              ["Hospital Anxiety and Depression Scale (HADS)", "Measures anxiety and depression together."],
              ["GAD-7", "The Generalized Anxiety Disorder scale."],
              ["State-Trait Anxiety Inventory", "Separates **state** anxiety (situational) from **trait** anxiety (characteristic of the person, independent of the situation)."]
            ] },
            { type: "p", text: "Some scales measure anxiety itself; others help identify a specific disorder. Many broader scales also include anxiety items." }
          ]
        },
        {
          id: "s8-ddx",
          title: "Differential diagnosis",
          blocks: [
            { type: "h", text: "Between the anxiety disorders" },
            { type: "p", text: "The disorders overlap, and panic disorder can be hard to separate from specific and social phobias. The question to ask is **what the person is afraid of**." },
            { type: "list", items: [
              "A **single** panic attack in one setting (an elevator) followed by lasting avoidance of that setting meets criteria for **specific phobia**, whether or not attacks recur. Clinical judgment decides.",
              "Someone who avoids public speaking **because they fear having a panic attack** does not have social anxiety disorder, even though the picture looks almost identical: the fear is of the attack, not of the speaking."
            ] },
            { type: "h", text: "Other psychiatric disorders" },
            { type: "p", text: "The differential for agoraphobia includes every disorder that causes anxiety or depression. **Panic disorder is the most common cause of agoraphobia**, and then a separate agoraphobia diagnosis is not needed. Others include **major depressive disorder, schizophrenia, and paranoid, avoidant and dependent personality disorders**." },
            { type: "h", text: "Medical disorders" },
            { type: "table", caption: "Medical conditions that mimic panic", head: ["Category", "Examples"], rows: [
              ["Endocrine", "Hypo- and hyperthyroidism; hyperparathyroidism; **pheochromocytoma**; episodic hypoglycemia from **insulinoma**"],
              ["Neurologic", "Seizure disorders; vestibular dysfunction; neoplasms; prescribed and illicit substances acting on the CNS"],
              ["Cardiopulmonary", "**Arrhythmias; COPD; asthma**, with autonomic symptoms and crescendo anxiety"]
            ] },
            { type: "callout", kind: "caution", title: "Clues to a medical cause", text: "**Atypical features** during attacks (**ataxia, altered consciousness, bladder dyscontrol**), **onset relatively late in life**, and physical signs or symptoms of a medical disorder." }
          ]
        }
      ]
    },
    {
      title: "Comorbidity and course",
      sections: [
        {
          id: "s8-comorbidity",
          title: "Comorbidity",
          blocks: [
            { type: "list", items: [
              "Depression complicates panic disorder in **40–80 percent** of patients, depending on the study.",
              "Besides agoraphobia, **other phobias and OCD** can coexist with panic disorder.",
              "**Alcohol and other substance use disorders** occur in about **20–40 percent** of patients.",
              "Comorbid disorders, especially substance use, **complicate the course** of anxiety disorders."
            ] }
          ]
        },
        {
          id: "s8-course",
          title: "Course",
          blocks: [
            { type: "h", text: "The panic attack" },
            { type: "list", items: [
              "The first attack is often **completely spontaneous**, though some follow excitement, exertion, sexual activity or moderate emotional trauma.",
              "Symptoms build rapidly over about **10 minutes**: extreme fear and a sense of impending death and doom, usually without a nameable source, with confusion and poor concentration.",
              "Physical signs: **tachycardia, palpitations, dyspnea, sweating**. Patients often try to leave and seek help.",
              "An attack usually lasts **20–30 minutes**, rarely more than an hour."
            ] },
            { type: "h", text: "Panic disorder" },
            { type: "list", items: [
              "Onset usually in **late adolescence or early adulthood**, though childhood, early adolescence and midlife onset occur. Most cases have **no identifiable stressor**.",
              "Chronic, with a variable course.",
              "After one or two attacks patients may be unconcerned; repeated attacks bring **anticipatory anxiety**.",
              "Patients may keep attacks secret, worrying family with unexplained changes in behavior.",
              "Attacks range from several a day to less than one a month. **Caffeine and nicotine** can worsen symptoms."
            ] },
            { type: "table", caption: "Long-term outcome of panic disorder", head: ["Outcome", "Share"], rows: [
              ["Symptom-free", "**30–40%**"],
              ["Mild symptoms that do not significantly affect life", "**About 50%**"],
              ["Continuing significant symptoms", "**10–20%**"]
            ], note: "These follow-up studies did not control for treatment." },
            { type: "h", text: "Agoraphobia and the other disorders" },
            { type: "list", items: [
              "When agoraphobia is part of panic disorder, **treating the panic often improves the agoraphobia**; **behavior therapy** gives rapid, complete reduction.",
              "Agoraphobia **without** panic disorder is often **incapacitating and chronic**, complicated by depression and alcohol use disorder.",
              "Most anxiety disorders are **chronic with multiple relapses**. GAD can relapse long after the first episode, giving a false sense of security, so keep monitoring.",
              "**Good premorbid functioning and brief symptoms** predict a favorable prognosis.",
              "Most of these disorders raise **suicide risk**; monitor it."
            ] }
          ]
        }
      ]
    },
    {
      title: "Treat",
      sections: [
        {
          id: "s8-tx-principles",
          title: "Principles and hospitalization",
          blocks: [
            { type: "p", text: "With treatment, **most patients improve dramatically**. Pharmacologic, psychological and combined treatments exist for every anxiety disorder; meta-analyses suggest **pharmacotherapy has the largest effect size**." },
            { type: "p", text: "**Hospitalization is rarely needed**: mainly for a diagnostic workup (to rule out a medical cause), comorbid substance use, or suicidality." }
          ]
        },
        {
          id: "s8-drugs",
          title: "Medication classes",
          blocks: [
            { type: "defs", items: [
              ["SSRIs", "**First-line for most anxiety disorders**, including panic disorder, GAD and social anxiety disorder."],
              ["SNRIs", "**Venlafaxine** is useful for panic disorder, GAD and social anxiety disorder."],
              ["Tricyclic antidepressants", "Useful for panic disorder, but less popular because of side effects."],
              ["Mirtazapine", "Many clinicians consider it useful because it is sedating, but there are few studies in anxiety."],
              ["Benzodiazepines", "Perhaps the **most popular** anxiety medications. Guidelines limit them mostly to **short-term** use: as an adjunct while an SSRI takes effect, or for acute exacerbations. Long-term use only for patients who do not respond to or cannot tolerate SSRIs. Concerns: **dependence**, cognitive and other side effects. **Tolerance to the anxiolytic effect does not seem to develop.**"],
              ["Antipsychotics and anticonvulsants", "Not for initial therapy; possible role in treatment resistance. **Quetiapine** may be a useful **second-line option for GAD**."],
              ["Buspirone", "An **azapirone**, effective for **GAD**. Given in **three divided doses**. Takes several weeks, sometimes months, to work. Use as an adjunct in other anxiety disorders rests mostly on anecdote."],
              ["β-Blockers (propranolol)", "Used especially for social anxiety, presumably by blocking physical symptoms, but **evidence does not support it**; at least one study showed no effect. Possibly useful for **performance anxiety** (one study in musical performance), though side effects can impair performance."],
              ["Antihistamines (hydroxyzine)", "An alternative to benzodiazepines for **acute** treatment, with some evidence in GAD; little is known about long-term effects."]
            ] }
          ]
        },
        {
          id: "s8-evidence",
          title: "Evidence by disorder and key pointers",
          blocks: [
            { type: "table", wide: true, caption: "Evidence-based monotherapy for anxiety disorders (after Table 8-6)", head: ["Class or agent", "GAD", "Panic disorder", "Social anxiety disorder"], rows: [
              ["SSRIs", "**First line**", "**First line**", "**First line**"],
              ["SNRIs", "**First line**", "**First line**", "**First line**"],
              ["TCAs", "Second line", "Second line", "Not recommended"],
              ["MAOIs", "Insufficient evidence", "Second line", "Second line"],
              ["Moclobemide (RIMA)", "Insufficient evidence", "Insufficient evidence", "Second line"],
              ["Agomelatine, buspirone, mirtazapine", "Second line", "Second line", "Second line"],
              ["Benzodiazepines", "Second line", "Second line", "Second line"],
              ["Quetiapine", "Second line", "Insufficient evidence", "Not recommended"],
              ["Pregabalin", "Second line", "Insufficient evidence", "Second line"]
            ], note: "β-Blockers are recommended only for performance anxiety." },
            { type: "list", title: "Key pointers for pharmacotherapy (after Table 8-7)", items: [
              "**SSRIs are first line.**",
              "**Start low and go slow.**",
              "Routine increases to higher doses are not recommended, though a subgroup may benefit.",
              "A **short-term benzodiazepine** alongside the initial SSRI may help.",
              "Allow **8–12 weeks** at optimal doses to judge efficacy.",
              "Good evidence for **maintenance** treatment for at least **6 months**."
            ] },
            { type: "callout", kind: "pearl", title: "Severe acute anxiety", text: "When rapid control is needed, use a short-term benzodiazepine such as **lorazepam or alprazolam**, and **start an SSRI at the same time**, increasing it slowly." }
          ]
        },
        {
          id: "s8-by-disorder",
          title: "Treatment disorder by disorder",
          blocks: [
            { type: "defs", items: [
              ["Panic disorder", "First line: **SSRIs or venlafaxine**. TCAs and MAOIs work but are less preferred for side effects; mirtazapine and others are second line; benzodiazepines mainly short term or for exacerbations. Long-term antidepressants prevent relapse, with benefits lasting **1 to 3 years**. **Discontinue maintenance very slowly.**"],
              ["Generalized anxiety disorder", "First line: **SSRIs and SNRIs**. Alternatives: **agomelatine, pregabalin, buspirone, quetiapine**."],
              ["Social anxiety disorder", "First line: **SSRIs and SNRIs**. **Pregabalin and clonazepam** also have strong evidence (benzodiazepine caveats apply). **Phenelzine** works but is rarely used for side effects. **TCAs, buspirone and quetiapine are not recommended.** β-Blockers may help performance anxiety only; benefit does not generalize."],
              ["Specific phobia", "**Psychotherapy, especially behavior therapy, is first line**; in vivo exposure is the treatment of choice. SSRIs may help but are little studied."],
              ["Agoraphobia", "Medication mainly targets the **comorbid panic attacks**. Early studies did not support drugs for pure agoraphobia, with little research since."]
            ] }
          ]
        },
        {
          id: "s8-psychotherapy",
          title: "Psychotherapy",
          blocks: [
            { type: "p", text: "There is strong support for **CBT, behavior therapy and interpersonal therapy**. CBT has substantial effects in GAD, panic disorder and social anxiety disorder, though concerns about bias temper the evidence. Some guidelines make **individual CBT first line for social anxiety disorder**, and **group CBT** also helps. **In vivo exposure is the treatment of choice for specific phobia.**" },
            { type: "defs", items: [
              ["Cognitive therapy (panic)", "Two foci: correcting the **false belief** that mild bodily sensations signal panic, doom or death, and **information** that attacks are **time-limited and not life-threatening**."],
              ["Behavior therapy", "Change without needing insight into causes. Techniques: reinforcement, **systematic desensitization**, flooding, implosion, **graded exposure**, response prevention, thought stopping, relaxation, panic control therapy, self-monitoring, hypnosis. For specific phobia, **gradually increasing exposure while practicing relaxation** (higher and higher floors for a fear of heights)."],
              ["Interpersonal psychotherapy", "Good evidence, especially **interpersonal skills training for social anxiety disorder**, on the premise that skill deficits bring more punishments and fewer rewards from social contact."],
              ["Virtual therapy", "Computer environments for agoraphobia, specific phobia and social anxiety, such as a crowded supermarket; especially useful for exposures hard to recreate near the office, like **flying**."],
              ["Supportive psychotherapy", "Uses psychodynamic concepts and the alliance to strengthen adaptive defenses and reality testing. Lacks empirical support but is often combined with medication."],
              ["Insight-oriented psychotherapy", "Aims at insight into the conflicts behind symptoms; once the classic treatment for anxiety. Some studies suggest lasting benefit, but methods are weak and large comparative trials are lacking."]
            ] }
          ]
        }
      ]
    },
    {
      title: "Understand the disorders",
      sections: [
        {
          id: "s8-epi",
          title: "Epidemiology",
          blocks: [
            { type: "p", text: "In the National Comorbidity Study, **one in four** people met criteria for at least one anxiety disorder, with a **12-month prevalence of 17.7 percent**." },
            { type: "table", wide: true, caption: "12-month prevalence by disorder, as reported in the chapter", head: ["Disorder", "Typical range", "Extremes reported"], rows: [
              ["Panic disorder", "Most studies **0.2–1.1%**", "0.1% (Nigeria) to 6.9% (Italy)"],
              ["Generalized anxiety disorder", "**2.1–3.1%** in the US", "0% (Nigeria) to 2.6% (Germany) elsewhere"],
              ["Social anxiety disorder", "Median about **4–5%**", "0.2% (China) to **6.8% (US)**; may reflect cultural concepts of social fear and translation"],
              ["Agoraphobia", "Mostly consistent", "0% (China) to 0.8% (US); South Africa an outlier at 4.8%"],
              ["Specific phobia", "Varies widely", "1.9% (China) to **8.7% (US)**"]
            ] },
            { type: "table", wide: true, caption: "Selected rows from Table 8-8 (12-month and lifetime prevalence, %)", head: ["Study", "GAD 12 mo / LT", "Panic 12 mo / LT", "Social 12 mo / LT", "Specific 12 mo / LT", "All anxiety 12 mo / LT"], rows: [
              ["US, NESARC", "2.1 / 4.1", "2.1 / 5.1", "2.8 / 5.0", "7.1 / 9.4", "11.1 / 17.2"],
              ["US, WHO WMH", "3.1 / 5.7", "2.7 / 4.7", "6.8 / 12.1", "8.7 / 12.5", "18.1 / 28.8"],
              ["Japan, WHO WMH", "1.2 / —", "0.5 / —", "0.8 / —", "2.7 / —", "4.8 / —"],
              ["China, WHO WMH", "0.8 / —", "0.2 / 0.4", "0.2 / 0.5", "1.9 / 2.6", "2.7 / 4.8"],
              ["Nigeria, WHO WMH", "0.0 / 0.1", "0.1 / 0.2", "0.3 / 0.3", "3.5 / 5.4", "4.1 / 5.7"]
            ], note: "LT, lifetime. DSM-IV international community studies of adults." },
            { type: "defs", items: [
              ["Sex", "Women have higher rates of almost all anxiety disorders, **about twofold**; the exception is **social anxiety disorder, roughly equal**. The gap is largest in early and mid-adulthood."],
              ["Age", "Among the **earliest onsets** of all psychiatric disorders; most begin in childhood or adolescence, **median age 12**. **Phobias are the most stable over time**; panic disorder and GAD wax and wane like major depression."],
              ["Socioeconomic and ethnic", "More common with **lower socioeconomic status and education**, though the relationship is complex. Some studies report higher rates in African Americans and lower rates in Hispanics."]
            ] }
          ]
        },
        {
          id: "s8-genetics",
          title: "Genetics",
          blocks: [
            { type: "p", text: "Fear and anxiety are common to animals and easy to observe, so **animal models** have informed much of the research. In humans:" },
            { type: "list", items: [
              "Family studies show **familial aggregation** of panic disorder, GAD, phobias and agoraphobia. For panic disorder, familial risk is highest with **early onset**; for social anxiety, with the **generalized subtype**.",
              "Twin studies show higher concordance in monozygotic twins. The genetic contribution is about **30 percent or more**, perhaps **60 percent for the phobias**.",
              "Linkage and candidate-gene association studies (neurotransmitter and stress-response genes) are **inconsistent**, as expected for complex disorders without highly penetrant genes."
            ] }
          ]
        },
        {
          id: "s8-imaging",
          title: "Neuroimaging",
          blocks: [
            { type: "p", text: "Guided by animal fear circuitry, research centers on the **amygdala** and its frontoamygdala connections (perirhinal cortex, ventrolateral prefrontal cortex, anterior insula), and the **hippocampus**, critical for fear learning and **extinction**. Fear conditioning in healthy humans implicates the **amygdala, ventromedial prefrontal cortex and hippocampus**, showing the circuitry is conserved across species." },
            { type: "table", wide: true, caption: "Imaging findings by disorder", head: ["Disorder", "Findings"], rows: [
              ["Panic disorder", "At rest: **hippocampal and parahippocampal** areas. During panic: **insular and striatal** activity with reduced prefrontal activity. Gray matter changes in parahippocampal and temporal regions. Exaggerated brain **lactate** response to hypocapnia, suggesting a **suffocation response**. Abnormal **GABA and 5-HT1A** binding."],
              ["Specific phobia", "Activation of anterior paralimbic regions and the **sensory association cortex** for the feared stimulus; the amygdala again implicated: hypersensitivity to threat cues."],
              ["Social anxiety disorder", "Exaggerated medial temporal response to social stimuli; most commonly **amygdala hyperresponsivity to social threat**."],
              ["Generalized anxiety disorder", "**No clear amygdala hyperactivity.** Emotional dysregulation with disrupted **anterior cingulate–amygdala** connectivity and the **uncinate fasciculus**: weaker frontoamygdala connectivity and fear overgeneralization. Effective CBT and drugs may target these areas."]
            ] },
            { type: "p", text: "Neurochemical research focuses on the central **noradrenergic, serotonergic, dopaminergic and GABA** systems." }
          ]
        },
        {
          id: "s8-conditioning",
          title: "Conditioning and extinction",
          blocks: [
            { type: "p", text: "Pavlovian conditioning is the psychology most relevant to anxiety, especially the phobias." },
            { type: "defs", items: [
              ["Conditioned stimulus", "The originally **neutral** stimulus, such as a tone."],
              ["Unconditioned stimulus", "The **aversive** stimulus, such as a shock. After repeated pairing, the tone alone evokes the fear response."],
              ["Extinction", "Repeatedly presenting the conditioned stimulus without the aversive one until the association fades. Its speed depends on the stimuli, the individual and the **context**."],
              ["Reinstatement", "Extinction does not erase the original learning; it creates a **competing memory**, so under the right circumstances the fear can return."]
            ] }
          ]
        },
        {
          id: "s8-neurochem",
          title: "Neurochemistry and the fight-or-flight reaction",
          blocks: [
            { type: "p", text: "Perceived stress activates neurotransmitters and neuropeptides that produce the **fight-or-flight reaction**. It is adaptive in context; **overgeneralization** of it can be disabling and underlies many anxiety disorders. Chronic activation alters many systems, and **early-life stress** may predispose to later anxiety disorders. Broadly, anxious patients show **exaggerated noradrenergic output** with increased autonomic and sympathetic activation." },
            { type: "table", wide: true, caption: "Neurochemical systems in anxiety (after Table 8-9)", head: ["System", "Association with anxiety", "Treatment link"], rows: [
              ["Noradrenergic (locus coeruleus and others)", "Unrestrained, excessive activation", "SNRIs first line; propranolol for performance anxiety"],
              ["HPA axis", "Dysregulated: excess cortisol, abnormal feedback (some studies)", "Cortisol under study for social anxiety and spider phobia; mifepristone for GAD and panic"],
              ["CRH", "Persistently increased concentrations", "CRH-1 antagonists have failed in trials so far"],
              ["Neurosteroids", "Abnormal peripheral levels in panic disorder; inconsistent in GAD and social anxiety", "Synthetic analogs in development"],
              ["Arginine vasopressin", "V1b receptor gene variant linked to panic disorder", "V1b antagonist failed for GAD; newer ones under study"],
              ["Dopaminergic", "Excess mesocortical dopamine release", "Bupropion sometimes an adjunct"],
              ["Serotonergic", "Low postsynaptic **5-HT1A** activity in panic and social anxiety", "SSRIs and SNRIs first line"],
              ["GABA", "Reduced **GABA-A and benzodiazepine binding** and GABA levels in panic disorder", "Tiagabine equivocal in GAD; topiramate mixed in panic. Gabapentin and pregabalin do not act on GABA receptors."],
              ["Glutamate", "Possible GABA–glutamate imbalance in panic disorder", "**D-cycloserine** aids exposure therapy for acrophobia, social anxiety and panic; riluzole preliminary for GAD"],
              ["Neuropeptide Y", "Low levels in PTSD; less studied in anxiety disorders", "Intranasal NPY under study"],
              ["Galanin", "Gene variant linked to panic disorder, in women only", "No known treatment studies"],
              ["Cholecystokinin", "Lower CSF levels in panic disorder", "CCK-B antagonists have failed for GAD and panic"],
              ["Oxytocin", "Receptor gene variant raises anxiety risk after early-life stress", "Intranasal oxytocin under study for social anxiety"],
              ["Endocannabinoid", "Dysregulated signaling", "Cannabidiol reduced anxiety during public speaking in social anxiety"]
            ] }
          ]
        },
        {
          id: "s8-circuit",
          title: "The fear circuit",
          blocks: [
            { type: "p", text: "In broad terms a stimulus is collected by afferent systems, evaluated for threat using past experience and context, and answered with behavioral, endocrine and autonomic responses (Figure 8-1)." },
            { type: "steps", title: "From threat to response", items: [
              ["Afferent systems", "Auditory, visual, somatosensory, olfactory and visceral input reach the **thalamus**, sensory cortices and directly the amygdala."],
              ["Lateral nucleus of the amygdala", "The main interface for sensory information from thalamus and cortex; **thalamus–lateral amygdala** connections are central to fear conditioning."],
              ["Basal nuclei", "Form **long-lasting traces** of fear conditioning, modulated by memory, context and the body’s state; the **hippocampus** supports fear learning and extinction."],
              ["Central nucleus of the amygdala", "The output: drives motor, autonomic and neuroendocrine systems via the hypothalamus, midbrain and medulla."],
              ["Responses", "**Hypothalamus** triggers CRH and the hormonal stress response; **lateral hypothalamus** sympathetic activation (tachycardia, raised blood pressure, sweating, dilated pupils); **periaqueductal gray** fight-or-flight behavior; **parabrachial nucleus** hyperventilation; **dorsal vagal nucleus** parasympathetic effects; facial nuclei the expression of fear; striatum a halt to exploratory behavior."]
            ] },
            { type: "p", text: "The **locus coeruleus**, **bed nucleus of the stria terminalis** and orbitofrontal and medial prefrontal cortices interact with the amygdala throughout this circuit." }
          ]
        }
      ]
    }
  ]
});
