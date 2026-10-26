  {
    id: "personality",
    chapter: "ch19",
    title: "Which personality disorder?",
    summary: "Answer questions about how long the pattern has lasted, whether something else explains it, and the core interpersonal style to reach the most likely personality disorder from Chapter 19, with the distinctions from its look-alikes.",
    caution: "A teaching aid built from Chapter 19, not a substitute for a full evaluation. Personality disorders are diagnosed from long-term functioning across situations, ideally with collateral history; several can coexist, and each one met should be diagnosed.",
    start: "pattern",
    nodes: {
      pattern: {
        q: "Is this an enduring pattern since adolescence or early adulthood, seen across many situations?",
        options: [
          { label: "No: a recent, marked change after brain injury, a tumor, epilepsy or another medical condition", note: "A change from previous personality with a medical cause points to personality change due to another medical condition.", to: "r:medical" },
          { label: "No: it appears only during a mood, psychotic or substance episode", note: "Features limited to an episode of another disorder do not justify a personality disorder diagnosis.", to: "r:episode" },
          { label: "Yes", note: "A pervasive, long-standing, inflexible pattern causing distress or impairment meets the general criteria.", to: "cluster" }
        ]
      },
      cluster: {
        q: "Which description best fits the person's overall style?",
        options: [
          { label: "Odd, eccentric, suspicious or detached (cluster A)", note: "Odd and eccentric features define cluster A.", to: "a" },
          { label: "Dramatic, emotional, erratic or exploitative (cluster B)", note: "Dramatic, emotional and erratic features define cluster B.", to: "b" },
          { label: "Anxious, fearful or controlling (cluster C)", note: "Anxious and fearful features define cluster C.", to: "c" }
        ]
      },
      a: {
        q: "What stands out most?",
        options: [
          { label: "Pervasive suspicion and distrust; grudges; jealousy", note: "Suspicion without fixed delusions is the hallmark of paranoid PD.", to: "r:paranoid" },
          { label: "Indifference to relationships; prefers solitude; not odd", note: "Detachment without wanting relationships and without oddities suggests schizoid PD.", to: "r:schizoid" },
          { label: "Odd beliefs, magical thinking, peculiar speech or perceptions", note: "Cognitive and perceptual oddities define schizotypal PD.", to: "r:schizotypal" }
        ]
      },
      b: {
        q: "What stands out most?",
        options: [
          { label: "Disregard for others' rights, lying, crime, no remorse", note: "Violation of others' rights without remorse points to antisocial PD.", to: "antisocialage" },
          { label: "Unstable relationships, mood and self-image; fear of abandonment; self-harm", note: "Pervasive instability and impulsivity point to borderline PD.", to: "r:borderline" },
          { label: "Attention seeking, seductiveness, shallow dramatic emotion", note: "Attention seeking with shallow emotion points to histrionic PD.", to: "r:histrionic" },
          { label: "Grandiosity, entitlement, need for admiration, no empathy", note: "Grandiosity with lack of empathy points to narcissistic PD.", to: "r:narcissistic" }
        ]
      },
      antisocialage: {
        q: "Is the person 18 or older, with evidence of conduct disorder before age 15?",
        options: [
          { label: "Yes", note: "Antisocial PD requires age 18 or older and conduct disorder before 15.", to: "r:antisocial" },
          { label: "No conduct disorder before 15, or under 18", note: "Without conduct disorder before 15, or under 18, antisocial PD cannot be diagnosed.", to: "r:notantisocial" }
        ]
      },
      c: {
        q: "What stands out most?",
        options: [
          { label: "Wants relationships but avoids them for fear of rejection; feels inferior", note: "Desire for contact with fear of rejection points to avoidant PD.", to: "r:avoidant" },
          { label: "Submissive and clinging; cannot decide or be alone", note: "An excessive need to be cared for points to dependent PD.", to: "r:dependent" },
          { label: "Perfectionism, rules, control and inflexibility", note: "Perfectionism and rigidity point to obsessive-compulsive PD.", to: "ocpdq" }
        ]
      },
      ocpdq: {
        q: "Are there true obsessions (intrusive, unwanted thoughts) or compulsions (rituals)?",
        options: [
          { label: "No", note: "Without obsessions or compulsions, perfectionism and rigidity fit OCPD.", to: "r:ocpd" },
          { label: "Yes", note: "Recurrent obsessions or compulsions mean obsessive-compulsive disorder.", to: "r:ocd" }
        ]
      }
    },
    results: {
      medical: { label: "Most likely", dx: "Personality change due to another medical condition", line: "A marked change from previous personality with impaired control of emotions and impulses, and a medical cause that came first.", points: ["Head trauma is the most common cause; also stroke, tumors (frontal, temporal), epilepsy, Huntington disease, MS, endocrine disorders, heavy metals, neurosyphilis, AIDS.", "Frontal involvement: apathy and indifference, or hollow euphoria and facile jocularity; temporal lobe epilepsy: hypergraphia, hyperreligiosity.", "Treat the cause; anticonvulsants for irritability or aggression; advise the family; avoid alcohol."], link: { ch: "ch19", sec: "s19-medical", label: "Personality change" } },
      episode: { label: "Not a personality disorder", dx: "Treat the current disorder first", line: "Diagnose a personality disorder only when the features reflect long-term functioning, not a discrete episode or substance effect.", points: ["Reassess personality once the episode has resolved.", "Collateral history about functioning before the episode helps."], link: { ch: "ch19", sec: "s19-dx", label: "Diagnostic rules" } },
      paranoid: { label: "Most likely", dx: "Paranoid personality disorder", line: "Pervasive suspicion that others intend harm, with projection as the main defense.", points: ["Not delusional disorder (no fixed delusions) or schizophrenia (no hallucinations or thought disorder).", "Therapy: straightforward, professional; apologize honestly for mistakes; avoid deep interpretation; counterprojection.", "May precede persecutory delusional disorder; more common in men."], link: { ch: "ch19", sec: "s19-paranoid", label: "Paranoid PD" } },
      schizoid: { label: "Most likely", dx: "Schizoid personality disorder", line: "Lifelong detachment with no wish for close relationships and restricted emotion.", points: ["Avoidant patients want relationships; schizotypal patients are odd; autism has stereotyped behaviors and interests.", "Group therapy can become their only social contact; protect them from attack for their silence."], link: { ch: "ch19", sec: "s19-schizoid", label: "Schizoid PD" } },
      schizotypal: { label: "Most likely", dx: "Schizotypal personality disorder", line: "Social deficits with odd beliefs, perceptions, speech and behavior, without sustained psychosis.", points: ["Brief psychotic episodes under stress; may precede schizophrenia.", "Do not ridicule odd beliefs; antipsychotics for ideas of reference and illusions; treat depression (30% to 50% have it)."], link: { ch: "ch19", sec: "s19-schizotypal", label: "Schizotypal PD" } },
      antisocial: { label: "Most likely", dx: "Antisocial personality disorder", line: "Pervasive disregard for others' rights since 15, with conduct disorder before 15 and age 18 or older.", points: ["Diagnose substance use disorder too if both began in childhood; exclude schizophrenia, mania and intellectual disability.", "Neurologic examination and EEG; contingency management; anticonvulsants, β-blockers or lithium for aggression."], link: { ch: "ch19", sec: "s19-antisocial", label: "Antisocial PD" } },
      notantisocial: { label: "Consider", dx: "Conduct disorder, or adult antisocial behavior", line: "Under 18, consider conduct disorder; without conduct disorder before 15, antisocial PD is not diagnosed.", points: ["Illegal behavior only for gain, without pervasive maladaptive traits, is adult antisocial behavior.", "Look for substance use, mania or other disorders that explain the behavior."], link: { ch: "ch19", sec: "s19-antisocial", label: "Antisocial PD" } },
      borderline: { label: "Most likely", dx: "Borderline personality disorder", line: "Instability of relationships, self-image and affect with marked impulsivity; splitting and projective identification.", points: ["Assess suicide risk; separate from mood disorders by abandonment fear, emptiness and identity disturbance.", "Structured psychotherapy (DBT has the most evidence; MBT, TFP); avoid benzodiazepines.", "Post-publication: no drug treats core symptoms (APA 2024); most patients remit over 10 years."], link: { ch: "ch19", sec: "s19-borderline-tx", label: "Treating borderline PD" } },
      histrionic: { label: "Most likely", dx: "Histrionic personality disorder", line: "Excessive emotionality and attention seeking, with repression and dissociation.", points: ["Borderline has more self-harm, identity diffusion and brief psychosis.", "Look for coexisting somatic symptom and conversion disorders; psychoanalytically oriented therapy."], link: { ch: "ch19", sec: "s19-histrionic", label: "Histrionic PD" } },
      narcissistic: { label: "Most likely", dx: "Narcissistic personality disorder", line: "Grandiosity, entitlement, need for admiration and lack of empathy over fragile self-esteem.", points: ["Mania is episodic with euphoria; borderline is more anxious and chaotic.", "Watch for depression after criticism or loss; symptoms often lessen after 40."], link: { ch: "ch19", sec: "s19-narcissistic", label: "Narcissistic PD" } },
      avoidant: { label: "Most likely", dx: "Avoidant personality disorder", line: "Social inhibition, feelings of inadequacy and hypersensitivity to rejection, with a wish for acceptance.", points: ["Social anxiety disorder avoids specific situations; the two often coexist.", "Alliance first; graded risks; assertiveness training; β-blockers or serotonergic drugs for symptoms."], link: { ch: "ch19", sec: "s19-avoidant", label: "Avoidant PD" } },
      dependent: { label: "Most likely", dx: "Dependent personality disorder", line: "An excessive need to be cared for, with submissive, clinging behavior, usually toward one person.", points: ["Borderline and histrionic patients depend on a series of people and manipulate; dependent patients do not.", "Ask about abuse; respect the attachment when encouraging change; prognosis with treatment is favorable."], link: { ch: "ch19", sec: "s19-dependent", label: "Dependent PD" } },
      ocpd: { label: "Most likely", dx: "Obsessive-compulsive personality disorder", line: "Perfectionism, orderliness and control at the expense of flexibility, without true obsessions or compulsions.", points: ["Reserve the diagnosis for significant impairment, not mere traits.", "Patients often seek help; CBT; respond with precise, rational explanations and let them control their care."], link: { ch: "ch19", sec: "s19-ocpd", label: "OCPD" } },
      ocd: { label: "Consider", dx: "Obsessive-compulsive disorder", line: "Recurrent obsessions or compulsions mean OCD; OCPD may coexist.", points: ["See Chapter 9 for OCD diagnosis and treatment."], link: { ch: "ch19", sec: "s19-ocpd", label: "OCPD versus OCD" } }
    }
  }
