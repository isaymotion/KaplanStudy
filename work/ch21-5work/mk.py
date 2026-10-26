import json
cls={"id":"hypnotics","label":"Hypnotics and sleep drugs","singular":"sleep drug","chapter":"ch21-5",
 "intro":"Z drugs act selectively at GABAA receptor subunits; melatonin agonists shift circadian timing; orexin antagonists (since the book) damp the wake system; prazosin targets trauma nightmares. Benzodiazepine hypnotics are with the anxiolytics.",
 "groups":[{"id":"z","label":"Nonbenzodiazepine GABA agonists (Z drugs)","short":"Z drugs"},{"id":"mel","label":"Melatonin receptor agonists","short":"Melatonin agonists"},{"id":"dora","label":"Orexin receptor antagonists (after the 12th edition)","short":"Orexin antagonists"},{"id":"oxy","label":"Oxybates","short":"Oxybates"},{"id":"praz","label":"α1-adrenergic antagonist","short":"Prazosin"}],
 "profile":[["sedation","Next-day sedation"],["dependence","Dependence or abuse"],["complex","Complex sleep behaviors"],["onset","Speed of onset"],["interact","Drug interactions"]],
 "lowFilters":[["dependence","Low dependence"],["sedation","Little next-day sedation"],["interact","Few interactions"]],
 "indications":{"onset":"Sleep-onset insomnia","maint":"Sleep-maintenance insomnia","mid":"Middle-of-the-night awakening","circadian":"Circadian rhythm disorders","narcolepsy":"Narcolepsy","nightmares":"PTSD nightmares","mdd":"Major depression (outside the U.S.)"}}
D=[]
def add(**k):
    k.setdefault("cls","hypnotics");k.setdefault("chapter","ch21-5");k.setdefault("pk",[]);k.setdefault("updates",[]);k.setdefault("interactions",[]);k.setdefault("pearls",[]);D.append(k)
CSB={"year":"2019","title":"Boxed warning: complex sleep behaviors","text":"Sleepwalking, sleep driving and other activities while not fully awake, with serious injuries and deaths; contraindicated after a prior episode.","source":"FDA, boxed warning for certain prescription insomnia medicines, April 2019"}
add(id="zolpidem",name="Zolpidem",brands=["Ambien","Ambien CR","Edluar","Intermezzo"],group="z",sec="s215-z",book=True,
 summary="Z drug (half-life 2.6 hours) for sleep onset (IR), maintenance (CR) and middle-of-the-night use (low-dose sublingual); automatic behavior, amnesia, hallucinations; lower doses for women.",
 ind=["onset","maint","mid"],mechanism="Positive modulator at the benzodiazepine site, **selective for particular GABAA subunits** (sedative, little muscle relaxant or anticonvulsant effect).",
 indications={"approved":["Insomnia"],"other":["Parkinson disease bradykinesia and rigidity (small numbers)"]},forms="Tablets 5, 10 mg; CR 6.25, 12.5 mg; sublingual tablets; oral spray",
 dose={"start":"5 mg (women); 5 to 10 mg (men); 5 mg over 65","titration":"—","range":"5 to 10 mg (CR 6.25 to 12.5 mg)","max":"10 mg (CR 12.5 mg)","notes":["Only at the start of the night; avoid activity for 7 to 8 hours."]},
 half="2.6 hours (peak 1.6 hours)",effects={"common":["Dizziness, drowsiness, dyspepsia, diarrhea"],"serious":["**Complex sleep behaviors**, automatic behavior, **amnesia**","Hallucinations (prolonged by SSRIs)","Withdrawal after escalation to 30 to 40 mg"]},
 interactions=["CNS depressants (alcohol, opioids).","SSRIs prolong hallucinations."],pearls=["Flumazenil reverses it.","No tolerance to sedation."],
 profile={"sedation":"M","dependence":"M","complex":"H","onset":"H","interact":"M"},
 drill=dict(mech="**Subunit-selective GABAA** modulator (Z drug).",dose="**5 mg** women, 5 to 10 mg men; CR 6.25 to 12.5 mg; 5 mg over 65.",se="Amnesia, **automatic behavior**, hallucinations; complex sleep behaviors.",mon="Next-day impairment; sleep behaviors."),
 clues=["the Z drug with lower recommended doses for women and a controlled-release form for sleep maintenance"],
 updates=[CSB,{"year":"2013","field":"dose","title":"Lower dose for women","text":"FDA (2013): women **5 mg** IR or **6.25 mg** CR; men 5 or 10 mg (6.25 or 12.5 mg CR). Low-dose sublingual **Intermezzo** (1.75, 3.5 mg) for middle-of-the-night waking with 4 hours left in bed.","source":"FDA Drug Safety Communications on zolpidem (January 2013) and eszopiclone (May 2014)"}])
add(id="zaleplon",name="Zaleplon",brands=["Sonata"],group="z",sec="s215-z",book=True,
 summary="Shortest Z drug (half-life 1 hour): sleep onset with about 4 hours of sleep and little residual impairment; enzyme inducers lower it.",
 ind=["onset","mid"],mechanism="Subunit-selective GABAA modulator.",indications={"approved":["Insomnia (sleep onset)"],"other":[]},forms="Capsules 5, 10 mg",
 dose={"start":"10 mg (5 mg over 65 or hepatic impairment)","titration":"—","range":"10 mg","max":"20 mg","notes":["About 4 hours of sleep."]},half="1 hour (peak 1 hour)",
 effects={"common":["Dizziness, drowsiness above 10 mg"],"serious":["Complex sleep behaviors"]},interactions=["**Cimetidine** raises it; **rifampin, phenytoin, carbamazepine, phenobarbital** lower it."],
 profile={"sedation":"L","dependence":"M","complex":"H","onset":"H","interact":"M"},
 drill=dict(mech="Subunit-selective GABAA modulator.",dose="**10 mg** (max 20; 5 mg over 65).",se="Little residual impairment; complex sleep behaviors.",mon="—"),
 clues=["the Z drug with a 1-hour half-life giving about 4 hours of sleep"],updates=[CSB])
add(id="eszopiclone",name="Eszopiclone",brands=["Lunesta"],group="z",sec="s215-z",book=True,
 summary="Longest Z drug (half-life 6 hours) for sleep onset and maintenance; no tolerance over 6 months; unpleasant taste; start at 1 mg.",
 ind=["onset","maint"],mechanism="Subunit-selective GABAA modulator.",indications={"approved":["Insomnia (onset and maintenance)"],"other":[]},forms="Tablets 1, 2, 3 mg",
 dose={"start":"Book: 2 to 3 mg adults, 2 mg over 65; label now 1 mg","titration":"Up to 2 or 3 mg if needed","range":"1 to 3 mg","max":"3 mg (1 mg with strong CYP3A4 inhibitors or severe liver disease)","notes":["A heavy meal delays onset."]},
 half="About 6 hours",effects={"common":["**Unpleasant taste**, dry mouth"],"serious":["Complex sleep behaviors","Next-day impairment"]},interactions=["CYP3A4 and CYP2E1 metabolism; strong 3A4 inhibitors: 1 mg."],
 pearls=["No tolerance to any sleep measure over 6 months in trials."],profile={"sedation":"M","dependence":"M","complex":"H","onset":"M","interact":"M"},
 drill=dict(mech="Subunit-selective GABAA modulator.",dose="Start **1 mg** (label); up to **3 mg**; 1 mg max with strong CYP3A4 inhibitors.",se="**Unpleasant taste**; complex sleep behaviors.",mon="Next-day impairment."),
 clues=["the longest-acting Z drug, with no tolerance over 6 months in trials"],
 updates=[CSB,{"year":"2014","field":"dose","title":"Starting dose 1 mg","text":"FDA (May 2014): start at **1 mg** for everyone because of next-day impairment; raise to 2 or 3 mg only if needed.","source":"FDA Drug Safety Communications on zolpidem (January 2013) and eszopiclone (May 2014)"}])
add(id="sodium-oxybate",name="Sodium oxybate (GHB)",brands=["Xyrem","Xywav","Lumryz"],group="oxy",sec="s215-z-dose",book="list",
 summary="GHB for narcolepsy (cataplexy and daytime sleepiness); increases slow-wave sleep; abuse, dependence, absence seizures and respiratory depression.",
 ind=["narcolepsy"],mechanism="γ-hydroxybutyrate acting at **GABAB** and GHB receptors (the book says GABAA).",
 indications={"approved":["Narcolepsy: cataplexy and excessive daytime sleepiness"],"other":["Idiopathic hypersomnia (Xywav, post-publication)"]},forms="Oral solution; extended-release granules (Lumryz)",
 dose={"start":"Per label (taken at bedtime and again 2.5 to 4 hours later, or once nightly as Lumryz)","titration":"—","range":"—","max":"—","notes":["Schedule III; REMS."]},half="Short",
 effects={"common":["Nausea, dizziness, enuresis"],"serious":["**Respiratory depression** with alcohol or sedatives","Abuse and dependence","Absence seizures"]},
 profile={"sedation":"H","dependence":"H","complex":"M","onset":"H","interact":"M"},
 drill=dict(mech="GHB at **GABAB**/GHB receptors.",dose="Twice nightly (or once nightly ER) per label.",se="Respiratory depression, abuse, absence seizures.",mon="REMS; no alcohol or sedatives."),
 clues=["the GHB product approved for narcolepsy with cataplexy"],
 updates=[{"year":"2020–2023","title":"Newer forms and mechanism","text":"Low-sodium **Xywav** (narcolepsy 2020, idiopathic hypersomnia 2021) and once-nightly **Lumryz** (2023). GHB acts mainly at GABAB receptors.","source":"Xywav and Lumryz prescribing information"}])
add(id="ramelteon",name="Ramelteon",brands=["Rozerem"],group="mel",sec="s215-ramel",book=True,
 summary="MT1/MT2 agonist for sleep-onset insomnia: no rebound, withdrawal or abuse; headache; raises prolactin; CYP1A2 (not with fluvoxamine).",
 ind=["onset","circadian"],mechanism="**MT1 and MT2 melatonin receptor agonist**; no GABA activity.",indications={"approved":["Insomnia with difficulty falling asleep"],"other":["Jet lag, delayed sleep phase, shift work"]},forms="Tablets 8 mg",
 dose={"start":"8 mg within 30 minutes of bedtime","titration":"—","range":"8 mg","max":"8 mg","notes":["Not with or right after a high-fat meal."]},half="1 to 2.6 hours (bioavailability about 2%)",
 effects={"common":["**Headache**, somnolence, fatigue, dizziness, nausea"],"serious":["Raised prolactin, lower cortisol and testosterone (amenorrhea, galactorrhea)","Worse insomnia or depression"]},
 interactions=["**Fluvoxamine** and other **CYP1A2** inhibitors raise it.","Caution with ketoconazole and fluconazole."],pearls=["Avoid in severe liver disease, severe sleep apnea and severe COPD."],
 profile={"sedation":"L","dependence":"N","complex":"L","onset":"M","interact":"M"},
 drill=dict(mech="**MT1/MT2 agonist**.",dose="**8 mg** within 30 minutes of bed.",se="Headache; prolactin rise; no withdrawal.",mon="Menses and galactorrhea in women."),
 clues=["the melatonin receptor agonist approved for sleep-onset insomnia"],
 updates=[{"field":"interactions","title":"Label detail","text":"Do not combine with **fluvoxamine**, which raises ramelteon exposure many-fold.","source":"Rozerem prescribing information"}])
add(id="melatonin",name="Melatonin",brands=["(dietary supplement)"],group="mel",sec="s215-mel",book=True,
 summary="Pineal hormone sold as a supplement (not FDA approved); circadian rhythm problems and jet lag; product content varies widely.",
 ind=["circadian","onset"],mechanism="Agonist at melatonin receptors, including in the suprachiasmatic nucleus.",indications={"approved":["None in the United States (prescription insomnia drug in the EU)"],"other":["Insomnia, jet lag, shift work, delayed sleep phase"]},forms="Capsules, liquid, lozenges, sublingual and timed-release tablets, 0.5 to 5 mg",
 dose={"start":"At bedtime, or up to 2 hours before habitual bedtime","titration":"—","range":"No clear dose–response","max":"—","notes":[]},half="Short; 90% first-pass (CYP1A1, CYP1A2)",
 effects={"common":["Fatigue, dizziness, headache, irritability, somnolence"],"serious":["Confusion, sleepwalking, nightmares","Reduced fertility"]},interactions=["Caution with anticoagulants, antiseizure drugs, antihypertensives."],
 profile={"sedation":"L","dependence":"N","complex":"L","onset":"M","interact":"L"},
 drill=dict(mech="Melatonin receptor agonist (SCN).",dose="At bedtime or up to 2 hours before; 0.5 to 5 mg forms.",se="Headache, somnolence, vivid dreams; fertility effects.",mon="—"),
 clues=["the pineal hormone sold as a dietary supplement"],
 updates=[{"year":"2023","title":"Label accuracy","text":"Gummies contained **74% to 347%** of the labeled melatonin (JAMA, 2023). AASM (2017) suggests against melatonin for chronic insomnia.","source":"Cohen PA et al., melatonin gummy content, JAMA, April 2023; Sateia MJ et al., AASM clinical practice guideline for the pharmacologic treatment of chronic insomnia, Journal of Clinical Sleep Medicine, 2017"}])
add(id="agomelatine",name="Agomelatine",brands=["Valdoxan"],group="mel",sec="s215-mel",book="list",
 summary="Melatonin agonist and serotonin antagonist marketed in Europe for depression; efficacy and safety questioned; not in the United States.",
 ind=["mdd"],mechanism="**MT1/MT2 agonist** and serotonin (5-HT2C) antagonist.",indications={"approved":["Major depression (Europe)"],"other":[]},forms="Tablets (outside the U.S.)",
 dose={"start":"—","titration":"—","range":"—","max":"—","notes":["Not marketed in the United States."]},half="Short",effects={"common":["—"],"serious":["Safety concerns raised by trial data"]},
 profile={"sedation":"L","dependence":"N","complex":"L","onset":"L","interact":"M"},
 drill=dict(mech="MT1/MT2 agonist + serotonin antagonist.",dose="Not available in the U.S.",se="Efficacy and safety questioned.",mon="—"),
 clues=["the melatonin-related antidepressant used in Europe but not marketed in the United States"],updates=[])
DORA_SRC="Belsomra, Dayvigo and Quviviq prescribing information; Idorsia announcement, January 2022"
def dora(id,name,brand,year,dose,mx,half,clue):
    add(id=id,name=name,brands=[brand],group="dora",sec="s215-newer",book=False,
     summary=f"Dual orexin receptor antagonist (approved {year}) for sleep-onset and maintenance insomnia; somnolence and sleep paralysis; contraindicated in narcolepsy; Schedule IV.",
     ind=["onset","maint"],mechanism="Blocks **orexin OX1 and OX2 receptors**, damping the wake-promoting system.",indications={"approved":[f"Insomnia, sleep onset and maintenance ({year})"],"other":[]},forms="Tablets",
     dose={"start":dose,"titration":"—","range":dose,"max":mx,"notes":["Within 30 minutes of bed with at least 7 hours left."]},half=half,
     effects={"common":["Next-day somnolence, headache"],"serious":["Sleep paralysis, hypnagogic hallucinations, cataplexy-like symptoms","Complex sleep behaviors"]},
     interactions=["Avoid with strong CYP3A4 inhibitors; additive with CNS depressants."],pearls=["Contraindicated in **narcolepsy**."],
     profile={"sedation":"M","dependence":"L","complex":"M","onset":"M","interact":"M"},
     drill=dict(mech="**Dual orexin receptor antagonist**.",dose=dose+f"; max {mx}.",se="Somnolence, sleep paralysis; not in narcolepsy.",mon="Next-day alertness."),
     clues=[clue],updates=[{"year":year,"title":"Approval","text":f"{name} was approved in {year}; not covered in the 12th edition.","source":DORA_SRC}])
dora("suvorexant","Suvorexant","Belsomra","2014","10 mg","20 mg","About 12 hours","the first orexin antagonist approved for insomnia, in 2014")
dora("lemborexant","Lemborexant","Dayvigo","2019","5 mg","10 mg","About 17 to 19 hours","the orexin antagonist approved in 2019, dosed at 5 to 10 mg")
dora("daridorexant","Daridorexant","Quviviq","2022","25 to 50 mg","50 mg","About 8 hours","the orexin antagonist approved in 2022, dosed at 25 to 50 mg")
add(id="tasimelteon",name="Tasimelteon",brands=["Hetlioz"],group="mel",sec="s215-newer",book=False,
 summary="MT1/MT2 agonist approved for non-24-hour sleep–wake disorder in totally blind people and sleep disturbance in Smith–Magenis syndrome.",
 ind=["circadian"],mechanism="**MT1/MT2 agonist**.",indications={"approved":["Non-24-hour sleep–wake disorder (2014)","Nighttime sleep disturbance in Smith–Magenis syndrome (2020)"],"other":[]},forms="Capsules 20 mg; oral suspension",
 dose={"start":"20 mg before bedtime","titration":"—","range":"20 mg","max":"20 mg","notes":["Same time each night."]},half="About 1 to 2 hours",effects={"common":["Headache, abnormal dreams"],"serious":["Somnolence"]},
 interactions=["Avoid strong CYP1A2 inhibitors (fluvoxamine) and CYP3A4 inducers."],profile={"sedation":"L","dependence":"N","complex":"L","onset":"M","interact":"M"},
 drill=dict(mech="MT1/MT2 agonist.",dose="**20 mg** before bed nightly.",se="Headache, abnormal dreams.",mon="—"),
 clues=["the melatonin agonist approved for non-24-hour sleep–wake disorder in the totally blind"],
 updates=[{"year":"2014–2020","title":"Approvals","text":"Non-24-hour disorder (2014); Smith–Magenis syndrome (2020).","source":"Hetlioz prescribing information"}])
add(id="prazosin",name="Prazosin",brands=["Minipress"],group="praz",sec="s215-praz",book=True,
 summary="α1 antagonist used for PTSD nightmares at 6 to 15 mg a day; dizziness and hypotension; evidence mixed since a negative 2018 trial.",
 ind=["nightmares"],mechanism="**α1-adrenergic antagonist** (quinazoline); lowers peripheral resistance.",indications={"approved":["Hypertension"],"other":["**PTSD nightmares**"]},forms="Capsules 1, 2, 5 mg",
 dose={"start":"Low, then titrate","titration":"Gradually","range":"6 to 15 mg a day in divided doses","max":"No added benefit above 20 mg","notes":["Reduce to 1 to 2 mg three times daily when adding a diuretic or antihypertensive, then retitrate."]},half="2 to 3 hours (peak 3 hours)",
 effects={"common":["**Dizziness** (10.3%), headache, drowsiness, low energy, weakness, palpitations, nausea"],"serious":["Hypotension, especially with other antihypertensives or PDE-5 inhibitors"]},
 interactions=["Additive hypotension with diuretics, antihypertensives and **PDE-5 inhibitors**."],profile={"sedation":"M","dependence":"N","complex":"N","onset":"M","interact":"L"},
 drill=dict(mech="**α1 antagonist**.",dose="**6 to 15 mg a day** divided; max useful 20 mg.",se="Dizziness, headache, hypotension.",mon="BP, especially with other antihypertensives."),
 clues=["the α1 antagonist used to suppress PTSD nightmares"],
 updates=[{"year":"2018–2023","field":"indications","title":"Evidence","text":"A large 2018 NEJM trial was negative; the 2023 VA/DoD guideline gives a weak recommendation for nightmares. Capsules only (no nasal spray).","source":"Raskind MA et al., prazosin for PTSD in veterans, New England Journal of Medicine, 2018; VA/DoD clinical practice guideline for PTSD, 2023; Minipress prescribing information"}])
out="/* Drug reference: hypnotics and sleep drugs. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., section 21.5, unless a field sits inside an `updates` entry (post-publication information or a correction, with its source). Profile levels: N none or minimal, L low, M moderate, H high (for onset, H means fast). */\n"
out+="KS.drugClasses = (KS.drugClasses || []).concat(["+json.dumps(cls,ensure_ascii=False,indent=1)+"]);\n\n"
out+="KS.drugs = (KS.drugs || []).concat([\n"+",\n".join(json.dumps(d,ensure_ascii=False) for d in D)+"\n]);\n"
open('/home/claude/kaplanstudy/data/drugs/hypnotics.js','w').write(out); print(len(D))
