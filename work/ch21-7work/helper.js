  {
    id: "sudmed",
    chapter: "ch21-7",
    title: "Choosing a medicine for a substance use disorder",
    summary: "Start from the goal (overdose, opioid maintenance, relapse prevention, withdrawal or alcohol use disorder) and the patient's situation to reach the medicine and its key precautions from section 21.7.",
    caution: "A teaching aid built from section 21.7 and its post-publication updates, not a substitute for clinical judgment, current labeling and local regulations. Combine every medicine with psychosocial treatment.",
    start: "goal",
    nodes: {
      goal: {
        q: "What do you need to do?",
        options: [
          { label: "Reverse a suspected opioid overdose", note: "Overdose reversal comes first.", to: "r:overdose" },
          { label: "Treat opioid use disorder long term", note: "Long-term treatment choices depend on pregnancy and the patient's goals.", to: "oudpreg" },
          { label: "Manage opioid withdrawal or detoxification", note: "Withdrawal can be managed with an agonist taper or nonopioid drugs.", to: "detox" },
          { label: "Prevent relapse in alcohol use disorder", note: "Relapse-prevention drugs differ in what they need before starting.", to: "audnow" }
        ]
      },
      oudpreg: {
        q: "Is the patient pregnant?",
        options: [
          { label: "Yes", note: "Pregnancy changes both the drug choice and the dosing.", to: "r:pregnancy" },
          { label: "No", note: "Choose between agonist and antagonist treatment.", to: "oudpref" }
        ]
      },
      oudpref: {
        q: "Which approach fits the patient?",
        options: [
          { label: "Agonist treatment with structure: daily observed dosing in a program", note: "Methadone is dispensed only through opioid treatment programs.", to: "r:methadone" },
          { label: "Agonist treatment in office practice, with lower overdose risk", note: "Buprenorphine has a ceiling on respiratory depression and can be prescribed in offices.", to: "bupwhen" },
          { label: "No opioid at all: willing to complete an opioid-free washout", note: "Antagonists need an opioid-free state confirmed first.", to: "r:naltrexone" },
          { label: "Stable on sublingual buprenorphine but daily dosing is a problem", note: "Long-acting injections remove daily dosing.", to: "r:depot" }
        ]
      },
      bupwhen: {
        q: "When did the patient last use a full opioid agonist, and are there objective withdrawal signs?",
        options: [
          { label: "Short-acting opioid 12 to 24 hours ago (or methadone 24 to 48 hours ago), now in mild to moderate objective withdrawal", note: "This is the right window to start a partial agonist.", to: "r:bup" },
          { label: "Recent use, no objective withdrawal yet", note: "Starting now risks precipitated withdrawal.", to: "r:bupwait" },
          { label: "Regular fentanyl use", note: "Fentanyl raises concern about precipitated withdrawal.", to: "r:bupfent" }
        ]
      },
      detox: {
        q: "Which approach to withdrawal?",
        options: [
          { label: "Taper with an opioid agonist", note: "Methadone or buprenorphine tapers ease withdrawal; partial agonists give milder withdrawal.", to: "r:taper" },
          { label: "Nonopioid relief of autonomic symptoms", note: "α2 agonists relieve autonomic signs.", to: "r:alpha2" },
          { label: "Fast transition to an antagonist (rapid detoxification)", note: "Rapid detoxification uses clonidine, a benzodiazepine and rising naltrexone doses.", to: "r:rapid" }
        ]
      },
      audnow: {
        q: "Is the patient currently drinking or in withdrawal?",
        options: [
          { label: "In alcohol withdrawal now", note: "Withdrawal is treated first; acamprosate and disulfiram are not withdrawal treatments.", to: "r:audwd" },
          { label: "Stopped drinking (detoxified), wants to stay abstinent", note: "All the relapse-prevention drugs are possible; check contraindications.", to: "audcheck" },
          { label: "Still drinking, wants to cut down", note: "Only some drugs help people who are still drinking.", to: "audcheckdrink" }
        ]
      },
      audcheck: {
        q: "Do any of these apply?",
        options: [
          { label: "Takes or will need opioids (pain or opioid agonist treatment)", note: "Naltrexone blocks opioids and is contraindicated.", to: "r:acamp" },
          { label: "Severe renal impairment (creatinine clearance under 30)", note: "Acamprosate is contraindicated in severe renal impairment.", to: "r:ntxaud" },
          { label: "Acute hepatitis or liver failure", note: "Naltrexone is contraindicated in acute hepatitis or liver failure.", to: "r:acamp" },
          { label: "None of these", note: "Both first-line drugs are options.", to: "audfirst" }
        ]
      },
      audcheckdrink: {
        q: "Does the patient take or need opioids, or have acute liver failure?",
        options: [
          { label: "No", note: "Naltrexone reduces craving and heavy drinking.", to: "r:ntxaud" },
          { label: "Yes", note: "Naltrexone is contraindicated; acamprosate needs prior abstinence.", to: "r:second" }
        ]
      },
      audfirst: {
        q: "Have naltrexone and acamprosate been tried?",
        options: [
          { label: "Not yet", note: "Start with a first-line drug.", to: "r:first" },
          { label: "Failed or not tolerated; patient wants abstinence and can be supervised", note: "Disulfiram is an aversive option for motivated, supervised patients.", to: "r:disulfiram" },
          { label: "Failed or not tolerated; disulfiram unsuitable", note: "Other options remain.", to: "r:second" }
        ]
      }
    },
    results: {
      overdose: { label: "Do now", dx: "Naloxone", line: "Give naloxone (repeat as needed) and get emergency care; its antagonism lasts under 1 hour.", points: ["Observe after long-acting opioids such as methadone: sedation may return.", "Reversal precipitates withdrawal in dependent people; buprenorphine respiratory depression may not fully reverse.", "Post-publication: Narcan nasal spray is over the counter (2023); nalmefene nasal and autoinjector forms exist, with longer withdrawal after reversal."], link: { ch: "ch21-7", sec: "s217-rescue", label: "Reversing an opioid overdose" } },
      pregnancy: { label: "Recommended", dx: "Methadone or buprenorphine maintenance", line: "Maintenance with psychosocial and obstetric care improves outcomes; never withdraw to abstinence in pregnancy.", points: ["Methadone: lowest effective dose; faster metabolism in the third trimester, so higher doses split twice daily.", "Book: buprenorphine alone in pregnancy; post-publication (2024): buprenorphine–naloxone showed no more malformations and less neonatal abstinence syndrome.", "Watch the newborn for delayed, prolonged withdrawal."], link: { ch: "ch21-7", sec: "s217-preg", label: "Pregnancy and neonatal withdrawal" } },
      methadone: { label: "Option", dx: "Methadone maintenance", line: "Full µ agonist through an opioid treatment program: 70% lower mortality; works best above 60 mg.", points: ["Induction 15 to 20 mg (up to 40 mg on day 1); raise over weeks to at least 70 mg; usual maximum 120 mg.", "Deaths in week 1 at 50 to 60 mg: avoid high induction doses, especially with liver disease or benzodiazepines.", "Long-term treatment: more than 80% who stop relapse within 2 years.", "Post-publication: 2024 rule allows take-homes up to 28 days and telehealth initiation."], link: { ch: "ch21-7", sec: "s217-dose", label: "Dosing methadone and buprenorphine" } },
      bup: { label: "Start", dx: "Buprenorphine–naloxone induction", line: "Give 2 to 4 mg, repeat in 1 to 2 hours if withdrawal persists; day 1 total 2 to 16 mg; maintain at 6 to 16 mg.", points: ["Use the combination for most patients; daily, alternate-day or thrice-weekly dosing.", "Avoid benzodiazepines (deaths reported).", "Post-publication: any Schedule III DEA registrant can prescribe; refer to a dentist early."], link: { ch: "ch21-7", sec: "s217-bup", label: "Buprenorphine induction" } },
      bupwait: { label: "Wait", dx: "Delay buprenorphine until objective withdrawal", line: "A partial agonist given while a full agonist is on board causes precipitated withdrawal.", points: ["Wait 12 to 24 hours after short-acting opioids and 24 to 48 hours or longer after methadone.", "Start only with objective signs of mild to moderate withdrawal; clonidine can ease symptoms while waiting."], link: { ch: "ch21-7", sec: "s217-bup", label: "Buprenorphine induction" } },
      bupfent: { label: "Consider", dx: "Standard induction after a longer wait, or low-dose initiation", line: "Post-publication: fentanyl raises concern about precipitated withdrawal.", points: ["Standard induction after 48 to 72 hours without fentanyl does not cause precipitated withdrawal in most patients.", "Low-dose initiation (small rising doses while other opioids continue) is an option; evidence is mostly observational.", "Choose by setting and patient preference."], link: { ch: "ch21-7", sec: "s217-bup", label: "Fentanyl and buprenorphine induction" } },
      naltrexone: { label: "Option", dx: "Naltrexone (oral or monthly injection)", line: "After 5 days opioid-free (short-acting) or 10 days (methadone), a negative urine screen and a naloxone challenge.", points: ["Build up to 50 mg a day, or 100 mg alternate days, or 150 mg every third day; observed dosing helps.", "Warn: high opioid doses can override the blockade and cause overdose; relapse risk is very high if stopped.", "Post-publication (X:BOT): once started, as effective as buprenorphine–naloxone, but many never start."], link: { ch: "ch21-7", sec: "s217-challenge", label: "Naloxone challenge test" } },
      depot: { label: "Option", dx: "Extended-release buprenorphine injection", line: "Sublocade monthly; post-publication, Brixadi weekly or monthly.", points: ["Post-publication: Sublocade rapid initiation after one transmucosal dose (2025).", "The Probuphine implant was withdrawn in 2020."], link: { ch: "ch21-7", sec: "s217-bup", label: "Long-acting buprenorphine" } },
      taper: { label: "Option", dx: "Methadone or buprenorphine taper", line: "Agonist tapers ease withdrawal; buprenorphine's withdrawal is milder and can bridge from methadone to antagonists.", points: ["Methadone short-term detoxification 7 to 30 days; long-term up to 180 days.", "Most relapse after short programs: consider maintenance instead."], link: { ch: "ch21-7", sec: "s217-methadone", label: "Methadone maintenance" } },
      alpha2: { label: "Option", dx: "Clonidine (or lofexidine)", line: "Relieves autonomic signs (hypertension, tachycardia, mydriasis, sweating, lacrimation, rhinorrhea), not subjective distress.", points: ["Clonidine 0.1 to 0.2 mg four times daily; hold for systolic BP under 90 or bradycardia; taper over 5 to 10 days.", "Post-publication: lofexidine is approved for opioid withdrawal symptoms (2018)."], link: { ch: "ch21-7", sec: "s217-a2-wd", label: "Clonidine for withdrawal" } },
      rapid: { label: "Option", dx: "Rapid detoxification with naltrexone", line: "Clonidine 0.2 mg every 2 hours (maximum 1.8 mg), oxazepam, and naltrexone 12.5 mg (day 1), 25 mg (day 2), 50 mg (day 3).", points: ["Monitor BP every 30 to 60 minutes for 8 hours; be ready for emergencies.", "Taper clonidine and the benzodiazepine over 5 to 10 days."], link: { ch: "ch21-7", sec: "s217-antag-oud", label: "Rapid detoxification" } },
      audwd: { label: "First", dx: "Treat alcohol withdrawal first", line: "Manage withdrawal (see Chapter 4); clonidine can reduce autonomic symptoms as an adjunct.", points: ["Do not use acamprosate for withdrawal; start it after detoxification.", "Disulfiram needs at least 12 hours without alcohol."], link: { ch: "ch04", sec: "s4-alc-detox", label: "Alcohol detoxification" } },
      acamp: { label: "Recommended", dx: "Acamprosate", line: "For abstinent patients who cannot take naltrexone: 666 mg three times daily.", points: ["Reduce to 333 mg three times daily at creatinine clearance 30 to 50; avoid under 30.", "Mild early diarrhea and headache; no addiction or withdrawal."], link: { ch: "ch21-7", sec: "s217-acamp", label: "Acamprosate" } },
      ntxaud: { label: "Recommended", dx: "Naltrexone", line: "Reduces craving and heavy drinking; 50 mg a day or monthly injection.", points: ["Contraindicated with opioids and in acute hepatitis or liver failure.", "May halve relapse to heavy drinking when added to a good program."], link: { ch: "ch21-7", sec: "s217-antag-aud", label: "Antagonists for alcohol" } },
      first: { label: "Recommended", dx: "Naltrexone or acamprosate", line: "Post-publication (APA 2018): first line for moderate to severe alcohol use disorder.", points: ["Naltrexone if no opioids or liver failure; acamprosate if abstinent and kidneys allow.", "Combine with counseling and support groups."], link: { ch: "ch21-7", sec: "s217-aud-choice", label: "Choosing an alcohol medication" } },
      disulfiram: { label: "Option", dx: "Disulfiram", line: "Aversive deterrent for motivated, supervised patients who want abstinence.", points: ["After 12 hours without alcohol: 500 mg for 1 to 2 weeks, then 250 mg.", "Contraindicated in significant heart or lung disease; may worsen psychosis.", "Reactions possible up to 2 weeks after the last dose; avoid hidden alcohol."], link: { ch: "ch21-7", sec: "s217-dis-use", label: "Using disulfiram" } },
      second: { label: "Consider", dx: "Topiramate or gabapentin", line: "Post-publication (APA 2018): second-line options (2C) when first-line drugs are unsuitable.", points: ["Topiramate and gabapentin are covered with the anticonvulsants (section 21.3).", "Avoid antidepressants for alcohol use disorder itself and benzodiazepines outside withdrawal."], link: { ch: "ch21-7", sec: "s217-aud-choice", label: "Choosing an alcohol medication" } }
    }
  }
