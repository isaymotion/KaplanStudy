  {
    id: "development",
    chapter: "ch02",
    title: "Which developmental disorder?",
    summary: "Start from the main concern about a child (global delay, speech and language, social relating, learning, coordination, movements or attention) and follow the chapter's distinctions to the most likely neurodevelopmental diagnosis.",
    caution: "A teaching aid built from Chapter 2, not a substitute for a full developmental, medical and psychological evaluation with standardized testing. Several of these disorders often coexist.",
    start: "concern",
    nodes: {
      concern: {
        q: "What is the main concern about this child?",
        help: "Pick the problem that stands out most. Read every behavior against what is normal for the child's age.",
        options: [
          { label: "Slow across most areas of development", to: "global", note: "Development is delayed across most areas." },
          { label: "Speech or language", to: "hearing", note: "The main concern is speech or language." },
          { label: "Social relating, with or without repetitive behaviors", to: "social", note: "The main concern is social relating." },
          { label: "Learning one school subject despite adequate teaching", to: "learning", note: "The difficulty is limited to academic learning." },
          { label: "Clumsiness and poor motor coordination", to: "motor", note: "The main concern is coordination." },
          { label: "Repetitive movements or sounds", to: "moves", note: "The main concern is repetitive movements or vocalizations." },
          { label: "Inattention, hyperactivity or impulsivity", to: "attention", note: "The main concern is attention and activity." }
        ]
      },
      global: {
        q: "Which description fits best?",
        help: "Intellectual disability needs deficits in both intellectual and adaptive functioning, beginning before 18. Severity is set by adaptive functioning.",
        options: [
          { label: "Both IQ and adaptive skills are well below age, starting in childhood", to: "r:id", note: "Intellectual and adaptive functioning are both significantly impaired from childhood." },
          { label: "The child lost skills he or she had already mastered", to: "r:regression", note: "Previously acquired skills have been lost." },
          { label: "Delays followed severe neglect and improve quickly in a nurturing home", to: "r:deprivation", note: "Delays track deprivation and improve with enrichment." },
          { label: "Hearing or vision has not been checked", to: "r:sensory", note: "A sensory impairment has not been ruled out." }
        ]
      },
      hearing: {
        q: "Has hearing been tested with an audiogram and found normal?",
        help: "Every child with a speech or language disorder needs an audiogram; hearing loss can mimic both language disorder and intellectual disability.",
        options: [
          { label: "Yes, hearing is normal", to: "speech", note: "Hearing loss has been excluded." },
          { label: "No, or not yet tested", to: "r:sensory", note: "Hearing has not been tested." }
        ]
      },
      speech: {
        q: "What is the speech or language problem?",
        help: "Separate the content of language (vocabulary, grammar, comprehension) from producing sounds, fluency, social use and when the child speaks.",
        options: [
          { label: "Understands well but has few words or short, simple sentences", to: "r:expressive", note: "Comprehension is intact; expressive language lags." },
          { label: "Has trouble understanding as well as expressing language", to: "r:mixed", note: "Both comprehension and expression are impaired." },
          { label: "Language is fine but sounds are mispronounced, left out or substituted", to: "r:speechsound", note: "The problem is producing speech sounds." },
          { label: "Repeats or prolongs sounds and syllables, with blocks", to: "r:stutter", note: "The problem is fluency." },
          { label: "Language is fine but social use of it is poor (greetings, turn-taking, humor, adapting to listener)", to: "social", note: "The problem lies in social use of language." },
          { label: "Speaks normally at home but not at school or with others", to: "r:mutism", note: "Speech is present in some settings and absent in others." }
        ]
      },
      social: {
        q: "Have restricted, repetitive behaviors or interests ever been present, even only in early childhood?",
        help: "Examples: lining up objects, rigid routines, intense narrow interests, stereotyped movements, unusual sensory interests. If they appear anywhere in the history, social (pragmatic) communication disorder cannot be diagnosed.",
        options: [
          { label: "Yes, now or in the history", to: "r:asd", note: "Restricted, repetitive behavior is present now or in the history." },
          { label: "Never", to: "socialother", note: "There has never been restricted or repetitive behavior." }
        ]
      },
      socialother: {
        q: "Which best describes the social difficulty?",
        help: "Consider the caregiving history and whether skills are absent everywhere or only in feared situations.",
        options: [
          { label: "Poor social use of language everywhere, in a child over about 4", to: "r:pragmatic", note: "Social communication is impaired in all settings without repetitive behavior." },
          { label: "Has the skills but avoids or freezes in social situations from fear of embarrassment", to: "r:socialanx", note: "Skills are present but not used in feared situations." },
          { label: "Withdrawn, rarely seeks comfort, after severe neglect or many caregivers", to: "r:rad", note: "Inhibited attachment behavior follows pathogenic care." },
          { label: "Indiscriminately friendly with strangers, after severe neglect or many caregivers", to: "r:dsed", note: "Overfamiliar behavior with strangers follows pathogenic care." }
        ]
      },
      learning: {
        q: "What is the child's overall intellectual and adaptive level?",
        help: "Specific learning disorder affects particular academic skills; intellectual disability lowers most skills. Rule out vision and hearing problems and inadequate schooling.",
        options: [
          { label: "Generally average; problems are specific to reading, writing or math", to: "subject", note: "Overall ability is adequate and the deficit is specific." },
          { label: "Low across most skills and in daily living", to: "r:id", note: "Skills are low across the board." }
        ]
      },
      subject: {
        q: "Which skill is most affected?",
        help: "Specify every area involved; the three often coexist.",
        options: [
          { label: "Reading: slow, inaccurate word recognition, poor spelling", to: "r:reading", note: "Reading and spelling are most affected." },
          { label: "Mathematics: number facts, calculation, word problems", to: "r:math", note: "Mathematics is most affected." },
          { label: "Written expression: spelling, grammar, organization, handwriting", to: "r:writing", note: "Written expression is most affected." }
        ]
      },
      motor: {
        q: "What does the neurologic examination show?",
        help: "Developmental coordination disorder is diagnosed only when a neurologic or neuromuscular condition does not explain the clumsiness.",
        options: [
          { label: "Normal strength and no neurologic disease; at most soft signs", to: "r:dcd", note: "Neurologic examination is essentially normal." },
          { label: "Weakness, spasticity or other neurologic deficits", to: "r:neuro", note: "There are neurologic or neuromuscular findings." }
        ]
      },
      moves: {
        q: "Which description fits the movements?",
        help: "Tics are sudden, nonrhythmic and preceded by an urge; they change location over time. Stereotypies are rhythmic, start younger, stay the same and feel soothing.",
        options: [
          { label: "Sudden tics with an urge: several motor tics and at least one vocal tic, for over a year, starting before 18", to: "r:tourette", note: "Multiple motor and at least one vocal tic have lasted over a year." },
          { label: "Motor tics only, or vocal tics only, for over a year", to: "r:chronictic", note: "Only one type of tic has lasted over a year." },
          { label: "Tics for less than a year", to: "r:provisional", note: "Tics have lasted under a year." },
          { label: "Rhythmic, self-soothing movements (rocking, flapping, head banging) with no urge", to: "r:stereotypic", note: "The movements are rhythmic, self-soothing stereotypies." }
        ]
      },
      attention: {
        q: "How do the symptoms behave over time and place?",
        help: "ADHD needs 6 or more symptoms (5 from 17) for 6 months, several before 12, impairing in two or more settings. Mania waxes and wanes.",
        options: [
          { label: "Persistent since early childhood and impairing at home and school", to: "r:adhd", note: "Symptoms are persistent, early and present in two or more settings." },
          { label: "Seen in only one setting", to: "r:onesetting", note: "Symptoms appear in only one setting." },
          { label: "Come in distinct episodes with changes in mood and sleep", to: "r:episodic", note: "Symptoms are episodic, with mood and sleep changes." },
          { label: "Brief staring spells many times a day", to: "r:absence", note: "There are brief staring spells." }
        ]
      }
    },
    results: {
      id: { label: "Most likely", dx: "Intellectual disability", line: "Deficits in intellectual and adaptive functioning beginning in the developmental period; severity is graded by adaptive functioning.", points: ["Use a standardized IQ test (about 70 or below) and an adaptive scale such as the Vineland.", "Look for a cause: pregnancy and birth history, consanguinity, family history; chromosome analysis when anomalies and delay coexist; metabolic tests; neuroimaging for seizures, abnormal head size, regression or neurologic signs.", "Test hearing and vision; check for comorbid ADHD, ASD, mood disorders and seizures.", "Mild disability is about 85% of cases; plan education, behavior support, family education and services (IFSP to 3, IEP from 3 to 21)."], link: { ch: "ch02", sec: "s2-id-dx", label: "Diagnosis and workup" } },
      regression: { label: "Investigate now", dx: "Developmental regression", line: "Loss of previously acquired skills is an indication for neuroimaging and further workup.", points: ["Consider Rett syndrome in girls (hand-wringing, decelerating head growth, breathing irregularities).", "Regression after at least 2 years of normal development was formerly childhood disintegrative disorder, now within ASD.", "Up to 25% of children with ASD lose early language.", "Neurologic, metabolic and degenerative disorders (e.g., adrenoleukodystrophy) need exclusion."], link: { ch: "ch02", sec: "s2-id-genetic", label: "Genetic syndromes" } },
      deprivation: { label: "Most likely", dx: "Effects of psychosocial deprivation", line: "Severe neglect can produce delays that look like intellectual disability or autism but improve in an enriched, nurturing environment.", points: ["Ensure safety and report suspected neglect to child protective services.", "Consider reactive attachment disorder, disinhibited social engagement disorder and PTSD.", "Re-evaluate development after a period of good care."], link: { ch: "ch02", sec: "s2-id-ddx", label: "Differential diagnosis" } },
      sensory: { label: "First step", dx: "Rule out hearing or vision loss", line: "Unrecognized sensory impairment can mimic intellectual disability, language disorder and autism.", points: ["Obtain an audiogram (or auditory evoked potentials in young or uncooperative children).", "Deaf infants babble normally, then the babbling fades at 6–12 months; they seek nonverbal contact.", "Return to the developmental assessment once hearing and vision are known."], link: { ch: "ch02", sec: "s2-comm-language", label: "Language disorder" } },
      expressive: { label: "Most likely", dx: "Language disorder: expressive deficits", line: "Expressive language well below nonverbal ability, with comprehension within normal limits.", points: ["Many late talkers (50–80%) catch up in preschool; treatment is often started if the delay persists beyond the preschool years.", "The child wants to communicate, uses gestures and plays symbolically, unlike autism.", "Watch for later reading problems and comorbid ADHD and anxiety."], link: { ch: "ch02", sec: "s2-comm-language", label: "Language disorder" } },
      mixed: { label: "Most likely", dx: "Language disorder: mixed receptive–expressive deficits", line: "Comprehension and expression both fall well below nonverbal ability; the child may seem deaf to speech.", points: ["Give standardized receptive and expressive tests and an audiogram.", "About half also have speech sound disorder and half reading disorder; at least a third have ADHD.", "Prognosis is less favorable than expressive deficits alone; aim early for rudimentary reading skills."], link: { ch: "ch02", sec: "s2-comm-language", label: "Language disorder" } },
      speechsound: { label: "Most likely", dx: "Speech sound disorder", line: "Persistent difficulty producing speech sounds expected for age, not explained by structural or neurologic causes.", points: ["Omissions are most severe, then substitutions, then distortions; late sounds (r, sh, th, f, z, l, ch) are most often wrong.", "Rule out dysarthria (drooling, abnormal chewing or swallowing, slow speech).", "Most improve by third grade; treat if errors persist past about 8 or speech is unintelligible."], link: { ch: "ch02", sec: "s2-comm-speech", label: "Speech sound disorder" } },
      stutter: { label: "Most likely", dx: "Childhood-onset fluency disorder (stuttering)", line: "Involuntary repetitions, prolongations and blocks that disrupt the flow of speech.", points: ["Normal preschool dysfluency comes without tension; stuttering brings strain and part-word repetitions.", "Early treatment (e.g., the parent-delivered Lidcombe Program) makes full resolution far more likely.", "Screen older stutterers for social anxiety disorder."], link: { ch: "ch02", sec: "s2-comm-stutter", label: "Stuttering" } },
      mutism: { label: "Most likely", dx: "Selective mutism", line: "Consistent failure to speak in specific social situations (usually school) despite speaking normally elsewhere, for at least a month.", points: ["Not the first month of school, and not a child still learning a new language.", "Closely related to social anxiety disorder.", "Treat with graded, rewarded speaking exposures (CBT) and SSRIs as needed."], link: { ch: "ch02", sec: "s2-mutism", label: "Selective mutism" } },
      asd: { label: "Most likely", dx: "Autism spectrum disorder", line: "Persistent social communication deficits plus restricted, repetitive behavior, present from early development.", points: ["Specify intellectual and language impairment and severity; use the ADOS when available.", "Rule out deafness, intellectual disability alone and deprivation.", "Start early intensive behavioral and developmental intervention; medication targets associated symptoms (risperidone or aripiprazole for irritability)."], link: { ch: "ch02", sec: "s2-asd-ddx", label: "Autism differential diagnosis" } },
      pragmatic: { label: "Most likely", dx: "Social (pragmatic) communication disorder", line: "Persistent difficulty using verbal and nonverbal communication socially, with no restricted or repetitive behavior ever.", points: ["Rarely diagnosed before age 4.", "Social communication must be worse than expected for intellectual level.", "Often coexists with language disorder, ADHD and learning disorders; may raise risk of social anxiety."], link: { ch: "ch02", sec: "s2-comm-pragmatic", label: "Social (pragmatic) communication disorder" } },
      socialanx: { label: "Most likely", dx: "Social anxiety disorder", line: "Fear of scrutiny in social situations, which are avoided or endured, with anxiety occurring among peers.", points: ["Skills are present but not used in feared situations, unlike social (pragmatic) communication disorder.", "CBT, SSRIs, or both (combined treatment had the best response in CAMS)."], link: { ch: "ch02", sec: "s2-anx-three", label: "Childhood anxiety disorders" } },
      rad: { label: "Most likely", dx: "Reactive attachment disorder", line: "An emotionally withdrawn, inhibited pattern toward caregivers after grossly insufficient care, with onset before 5.", points: ["Assess safety and nutrition; report maltreatment.", "Distinguish from ASD: children with RAD are often malnourished, and improve with good care.", "Treat the caregiver–child relationship (e.g., ABC intervention)."], link: { ch: "ch02", sec: "s2-trauma-attach", label: "Attachment disorders" } },
      dsed: { label: "Most likely", dx: "Disinhibited social engagement disorder", line: "Overfamiliar behavior with unfamiliar adults after pathogenic care, not explained by impulsivity.", points: ["Often persists despite adoption and good care.", "Frequently coexists with ADHD, PTSD and language delay."], link: { ch: "ch02", sec: "s2-trauma-attach", label: "Attachment disorders" } },
      reading: { label: "Most likely", dx: "Specific learning disorder with impairment in reading", line: "Slow, inaccurate word reading and poor spelling below age expectations for 6 months despite help.", points: ["Core deficit is phonologic processing; visual-motor theories are myths.", "Screen for ADHD (up to 25%) and language disorder.", "Explicit letter–sound remediation (e.g., Orton-Gillingham) and an IEP."], link: { ch: "ch02", sec: "s2-sld-reading", label: "Reading impairment" } },
      math: { label: "Most likely", dx: "Specific learning disorder with impairment in mathematics", line: "Problems with number facts, calculation and mathematical reasoning below age expectations.", points: ["Usually identified in second or third grade; KeyMath testing.", "Early remediation emphasizing problem solving; address math anxiety."], link: { ch: "ch02", sec: "s2-sld-math", label: "Mathematics impairment" } },
      writing: { label: "Most likely", dx: "Specific learning disorder with impairment in written expression", line: "Spelling, grammar, punctuation, organization and handwriting well below age.", points: ["Confirm with a standardized writing test (TOWL) and rule out ADHD or depression as the cause.", "Direct writing instruction and accommodations (extra time, software)."], link: { ch: "ch02", sec: "s2-sld-writing", label: "Written expression" } },
      dcd: { label: "Most likely", dx: "Developmental coordination disorder", line: "Motor coordination well below age and intellect, impairing daily life, not due to a neurologic condition.", points: ["Bruininks-Oseretsky testing; often coexists with ADHD and reading disorder.", "Occupational therapy, task-specific training, adaptive physical education; watch self-esteem and bullying."], link: { ch: "ch02", sec: "s2-motor-dcd", label: "Developmental coordination disorder" } },
      neuro: { label: "Investigate", dx: "Neurologic or neuromuscular disorder", line: "Cerebral palsy, muscular dystrophy and neuromuscular disease cause broader deficits and exclude developmental coordination disorder.", points: ["Refer for neurologic evaluation."], link: { ch: "ch02", sec: "s2-motor-dcd", label: "Developmental coordination disorder" } },
      tourette: { label: "Most likely", dx: "Tourette disorder", line: "Multiple motor and at least one vocal tic for more than a year, beginning before 18.", points: ["Screen for ADHD (over half) and OCD (20–40%).", "Psychoeducation; habit reversal (CBIT) first line; risperidone, α2-agonists, haloperidol or pimozide when needed.", "Tics usually peak at 10–12 and improve by adolescence."], link: { ch: "ch02", sec: "s2-motor-tourette", label: "Tourette disorder" } },
      chronictic: { label: "Most likely", dx: "Persistent (chronic) motor or vocal tic disorder", line: "Either motor or vocal tics, but not both, for more than a year, beginning before 18.", points: ["Onset at 6–8 with facial tics carries the best outlook.", "Habit reversal is first line."], link: { ch: "ch02", sec: "s2-motor-chronic-tic", label: "Chronic tic disorder" } },
      provisional: { label: "For now", dx: "Tics of less than a year (transient tic disorder)", line: "Tics present for under 12 months do not yet meet Tourette or persistent tic disorder criteria.", points: ["Follow over time; many remit.", "Reassess for Tourette disorder if both motor and vocal tics persist beyond a year."], link: { ch: "ch02", sec: "s2-motor-tourette", label: "Tic disorders" } },
      stereotypic: { label: "Most likely", dx: "Stereotypic movement disorder", line: "Repetitive, purposeless, rhythmic movements that interfere with activities or cause injury.", points: ["Specify with or without self-injury; common with ASD and intellectual disability.", "Transient rhythmic habits are normal in toddlers and usually fade by about 4.", "Habit reversal and differential reinforcement; medication for dangerous self-injury."], link: { ch: "ch02", sec: "s2-motor-stereo", label: "Stereotypic movement disorder" } },
      adhd: { label: "Most likely", dx: "Attention-deficit/hyperactivity disorder", line: "Persistent, impairing inattention and/or hyperactivity-impulsivity with several symptoms before 12 in two or more settings.", points: ["Specify combined, predominantly inattentive or predominantly hyperactive/impulsive presentation.", "Rule out absence seizures, sensory loss and thyroid disease; take a cardiac history.", "Stimulants are first line; combine with behavioral treatment, especially with comorbidity."], link: { ch: "ch02", sec: "s2-adhd-dx", label: "Recognizing ADHD" } },
      onesetting: { label: "Not yet", dx: "ADHD not established", line: "ADHD requires impairing symptoms in at least two settings.", points: ["Gather reports from home, school and other settings.", "Consider setting-specific causes: a learning disorder, anxiety, an unsuitable classroom or family stress.", "If oppositional behavior is the main problem at home, consider oppositional defiant disorder."], link: { ch: "ch02", sec: "s2-adhd-ddx", label: "ADHD differential diagnosis" } },
      episodic: { label: "Consider", dx: "A mood disorder", line: "Episodic symptoms with mood and sleep changes suggest mania or depression rather than ADHD.", points: ["Bipolar symptoms wax and wane; ADHD is persistent.", "Chronic, nonepisodic irritability with frequent outbursts suggests DMDD.", "ADHD and bipolar disorder often coexist."], link: { ch: "ch02", sec: "s2-bp-picture", label: "Bipolar disorder in youth" } },
      absence: { label: "Investigate", dx: "Possible absence seizures", line: "Brief staring spells can mimic inattention.", points: ["Obtain neurologic consultation and an EEG.", "An unrecognized temporal lobe focus can also resemble ADHD."], link: { ch: "ch02", sec: "s2-adhd-dx", label: "ADHD workup" } }
    }
  }
