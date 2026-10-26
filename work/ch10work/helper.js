  {
    id: "trauma",
    chapter: "ch10",
    title: "Which trauma or stressor disorder?",
    summary: "Start from the kind of stressor (an extreme trauma, an everyday stressor or a loss) and follow the timing and symptom counts to PTSD, acute stress disorder, an adjustment disorder subtype or a look-alike.",
    caution: "A teaching aid built from Chapter 10, not a substitute for a full assessment. Check for head injury, substances and suicide risk in every patient after trauma or a major stressor.",
    start: "stressor",
    nodes: {
      stressor: {
        q: "What kind of stressor came before the symptoms?",
        help: "PTSD and acute stress disorder need exposure to actual or threatened death, serious injury or sexual violence: experienced, witnessed in person, learned of in someone close, or repeated exposure to details. Media exposure does not count.",
        options: [
          { label: "An extreme trauma: death, serious injury or sexual violence, experienced, witnessed or learned of in someone close", to: "timing", note: "There was a qualifying traumatic exposure." },
          { label: "Distressing images seen only through television, the internet or photos", to: "r:media", note: "Exposure was only through media." },
          { label: "An everyday stressor: job loss, divorce, illness, money or relationship problems", to: "adjfit", note: "The stressor is not a qualifying trauma." },
          { label: "The death of a loved one, with grief", to: "r:bereavement", note: "The stressor is a bereavement." }
        ]
      },
      timing: {
        q: "How long have symptoms lasted since the trauma?",
        help: "Acute stress disorder spans 3 days to 1 month; PTSD needs more than a month.",
        options: [
          { label: "Less than 3 days", to: "r:early", note: "Symptoms have lasted under 3 days." },
          { label: "3 days to 1 month", to: "asd", note: "Symptoms have lasted between 3 days and 1 month." },
          { label: "More than 1 month", to: "ptsd", note: "Symptoms have lasted more than a month." }
        ]
      },
      asd: {
        q: "How many symptoms are present across intrusion, negative mood, dissociation, avoidance and arousal?",
        help: "Acute stress disorder needs nine or more symptoms from any of the five categories; not every category is required.",
        options: [
          { label: "Nine or more", to: "r:asd", note: "Nine or more symptoms are present." },
          { label: "Fewer than nine, but distressing and impairing", to: "r:subthreshold", note: "Symptoms fall below the acute stress disorder threshold." }
        ]
      },
      ptsd: {
        q: "Which description fits?",
        help: "PTSD needs at least one intrusion, one avoidance, two negative mood or cognition and two arousal symptoms, with distress or impairment, not due to a substance or medical condition.",
        options: [
          { label: "All four clusters met, beginning within 6 months of the trauma", to: "dissoc", note: "Full PTSD criteria are met." },
          { label: "All four clusters met, but full criteria first reached 6 months or more after the trauma", to: "r:delayed", note: "Full criteria were reached only after 6 months." },
          { label: "A head injury, seizures, or alcohol or drug use may explain or worsen the symptoms", to: "r:medical", note: "A medical or substance contributor is possible." },
          { label: "Anxiety and arousal without trauma-linked intrusions or avoidance", to: "r:anxiety", note: "There are no intrusions or avoidance tied to the trauma." },
          { label: "Distressing symptoms that fall short of full PTSD criteria", to: "r:subthreshold", note: "Criteria for PTSD are not fully met." }
        ]
      },
      dissoc: {
        q: "Are there persistent depersonalization or derealization experiences?",
        help: "The specifier 'with dissociative symptoms' covers feeling outside one's body or that surroundings are unreal.",
        options: [
          { label: "Yes", to: "r:ptsd_dissoc", note: "There are dissociative symptoms." },
          { label: "No", to: "r:ptsd", note: "There are no prominent dissociative symptoms." }
        ]
      },
      adjfit: {
        q: "How do the symptoms relate to the stressor?",
        help: "Adjustment disorder begins within 3 months of the stressor, causes distress out of proportion to it or marked impairment, and resolves within 6 months after the stressor ends.",
        options: [
          { label: "Began within 3 months; distress out of proportion or impairing", to: "adjtype", note: "Symptoms began within 3 months and are excessive or impairing." },
          { label: "Meet criteria for major depression or another specific disorder", to: "r:other", note: "Criteria for another specific disorder are met." },
          { label: "Proportionate to the stressor, with no real impairment", to: "r:normal", note: "The reaction is within expectable bounds." }
        ]
      },
      adjtype: {
        q: "What dominates the picture?",
        help: "Name the subtype by the main symptoms.",
        options: [
          { label: "Low mood, tearfulness, hopelessness", to: "r:adj_dep", note: "Depressed mood dominates." },
          { label: "Worry, nervousness, restlessness", to: "r:adj_anx", note: "Anxiety dominates." },
          { label: "Both anxiety and low mood", to: "r:adj_mixed", note: "Anxiety and depressed mood are both present." },
          { label: "Fighting, rule-breaking, impulsive or violent acts", to: "r:adj_conduct", note: "Conduct disturbance dominates." },
          { label: "Both emotional symptoms and conduct problems", to: "r:adj_both", note: "Emotional and conduct symptoms are mixed." },
          { label: "Massive denial or refusing treatment after a medical diagnosis", to: "r:adj_unspec", note: "The reaction is atypical (denial or noncompliance)." }
        ]
      }
    },
    results: {
      ptsd: { label: "Most likely", dx: "Posttraumatic stress disorder", line: "Intrusion, avoidance, negative mood or cognition and hyperarousal lasting more than a month after a qualifying trauma.", points: ["Screen for comorbid depression, substance use and suicide risk; two-thirds have at least two other disorders.", "First-line medication: SSRIs (sertraline, paroxetine); prazosin for nightmares; avoid benzodiazepines.", "Trauma-focused CBT (prolonged exposure), cognitive processing therapy or EMDR; group and family therapy."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "Diagnosing PTSD" } },
      ptsd_dissoc: { label: "Most likely", dx: "PTSD with dissociative symptoms", line: "Full PTSD with persistent depersonalization or derealization.", points: ["Peritraumatic dissociation is a risk factor for PTSD.", "Distinguish from dissociative disorders, which usually show less avoidance and arousal.", "Treat as PTSD, pacing trauma work so reexperiencing does not overwhelm."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "PTSD specifiers" } },
      delayed: { label: "Most likely", dx: "PTSD with delayed expression", line: "Full criteria first met 6 months or more after the trauma.", points: ["Ask about earlier partial symptoms and recent stress that intensified them.", "Treatment is the same as for PTSD.", "Check for new comorbid depression or substance use."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "PTSD specifiers" } },
      asd: { label: "Most likely", dx: "Acute stress disorder", line: "Nine or more symptoms of intrusion, negative mood, dissociation, avoidance or arousal between 3 days and 1 month after trauma.", points: ["Watch for self-medication with alcohol and for suicidal ideation.", "Reassess after a month: persisting symptoms may become PTSD.", "Exclude substances, medical causes and brief psychotic disorder."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "Acute stress disorder" } },
      early: { label: "For now", dx: "An immediate stress reaction", line: "Shock, nightmares and intrusive thoughts are common right after trauma; acute stress disorder cannot be diagnosed before 3 days.", points: ["ICD-10's acute stress reaction (daze, narrowed attention, panic-like signs) usually resolves within hours or days.", "Offer support, check for injuries (especially head injury) and substance use.", "Reassess if symptoms continue beyond 3 days."], link: { ch: "ch10", sec: "s10-comorbid-course", label: "Course and prognosis" } },
      subthreshold: { label: "Consider", dx: "Adjustment disorder or other specified trauma- or stressor-related disorder", line: "When the response to an extreme stressor does not meet acute stress disorder or PTSD thresholds, adjustment disorder is appropriate; other specified states why criteria are not met.", points: ["Treat with psychotherapy; use medication briefly for insomnia or anxiety.", "Monitor for progression to full PTSD.", "Assess suicide risk."], link: { ch: "ch10", sec: "s10-ddx", label: "Differential diagnosis" } },
      medical: { label: "Investigate", dx: "A medical or substance contributor", line: "Traumatic brain injury, epilepsy, alcohol and other substance use, intoxication and withdrawal can cause or worsen posttraumatic symptoms.", points: ["Take a careful history and examination, especially for head injury during the trauma.", "Reassess after intoxication or withdrawal effects wear off.", "PTSD can coexist; treat both."], link: { ch: "ch10", sec: "s10-ddx", label: "Differential diagnosis" } },
      anxiety: { label: "Consider", dx: "Panic disorder or generalized anxiety disorder", line: "Prominent anxiety and arousal without intrusions or avoidance tied to the trauma point away from PTSD.", points: ["Review the time course relative to the trauma.", "Also consider major depression, borderline personality disorder, dissociative and factitious disorders."], link: { ch: "ch10", sec: "s10-ddx", label: "Differential diagnosis" } },
      media: { label: "Not PTSD", dx: "Exposure does not meet the trauma criterion", line: "Exposure through media, electronics, movies or photos does not qualify for PTSD or acute stress disorder.", points: ["Consider adjustment disorder or an anxiety or depressive disorder if symptoms are impairing.", "Ask about any direct or close-person exposure that may have been missed."], link: { ch: "ch10", sec: "s10-ptsd-dx", label: "PTSD criteria" } },
      bereavement: { label: "Usually", dx: "Uncomplicated bereavement", line: "Grief can impair function temporarily but stays within expectable bounds, so it is not adjustment disorder.", points: ["Consider major depression if criteria are met.", "If the death was violent or sudden and witnessed, consider PTSD criteria."], link: { ch: "ch10", sec: "s10-ddx", label: "Adjustment disorder differential" } },
      other: { label: "Diagnose instead", dx: "Another specific disorder", line: "If major depression, an anxiety disorder, brief psychotic disorder, somatic symptom disorder, a substance or conduct disorder explains the response, diagnose that instead.", points: ["Adjustment disorder excludes exacerbation of an existing mental disorder.", "A personality disorder may coexist with adjustment disorder."], link: { ch: "ch10", sec: "s10-ddx", label: "Differential diagnosis" } },
      normal: { label: "No disorder", dx: "An expectable reaction to stress", line: "Distress proportionate to the stressor without significant impairment is not a disorder.", points: ["Offer support and follow-up.", "Reassess if symptoms escalate or function declines."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorders" } },
      adj_dep: { label: "Most likely", dx: "Adjustment disorder with depressed mood", line: "Low mood, tearfulness, hopelessness, poor sleep or low self-esteem after a stressor, short of major depression.", points: ["Assess suicide risk: past attempts and recent suicidality are common.", "Psychotherapy is the treatment of choice; SSRIs may help subthreshold depression.", "Distinguish from major depression and uncomplicated bereavement."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_anx: { label: "Most likely", dx: "Adjustment disorder with anxiety", line: "Generalized or situational anxiety and restlessness after a stressor.", points: ["Distinguish from anxiety disorders.", "Psychotherapy first; short-term medication for severe anxiety or insomnia."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_mixed: { label: "Most likely", dx: "Adjustment disorder with mixed anxiety and depressed mood", line: "Features of both, without meeting criteria for an anxiety or depressive disorder.", points: ["Assess suicide risk.", "Psychotherapy and crisis intervention; brief medication for specific symptoms."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_conduct: { label: "Most likely", dx: "Adjustment disorder with disturbance of conduct", line: "Impulsivity, lack of insight and violent behavior after a stressor.", points: ["Distinguish from conduct disorder and antisocial personality disorder by the prior pattern.", "Adolescents recover more slowly and may later develop mood or substance disorders."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_both: { label: "Most likely", dx: "Adjustment disorder with mixed disturbance of emotions and conduct", line: "Emotional symptoms with conduct problems such as heavy drinking, hostility or fraud.", points: ["Try to choose one subtype for clarity when possible.", "Check substance use, homicidal and suicidal ideation."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } },
      adj_unspec: { label: "Most likely", dx: "Adjustment disorder, unspecified", line: "Atypical maladaptive reactions such as massive denial, severe noncompliance or withdrawal after a medical diagnosis, without marked mood or anxiety.", points: ["Make sure the symptoms are not part of the illness or its treatment.", "Supportive and problem-solving psychotherapy; involve the medical team."], link: { ch: "ch10", sec: "s10-adj-clinical", label: "Adjustment disorder subtypes" } }
    }
  }
