import json
cls={"id":"sexual","label":"Drugs for sexual disorders","singular":"sexual disorder drug","chapter":"ch21-9",
 "intro":"PDE-5 inhibitors (sildenafil, vardenafil, tadalafil) prolong erections started by sexual stimulation; yohimbine, an α2 antagonist, is a weaker option; phenylephrine reverses priapism; since the book, flibanserin and bremelanotide treat low sexual desire in premenopausal women.",
 "groups":[{"id":"pde5","label":"PDE-5 inhibitors","short":"PDE-5 inhibitors"},{"id":"other","label":"Yohimbine and priapism treatment","short":"Yohimbine, priapism"},{"id":"desire","label":"Drugs for low sexual desire in women (post-publication)","short":"Low desire"}],
 "profile":[["cardiac","Cardiovascular risk"],["interact","Drug interactions"],["ae","Side-effect burden"],["burden","Dosing burden"]],
 "lowFilters":[["cardiac","Low cardiovascular risk"],["interact","Few interactions"],["ae","Mild side effects"]],
 "indications":{"ed":"Erectile dysfunction","ssri":"SSRI-induced sexual dysfunction (off-label)","priapism":"Priapism","hsdd":"Low sexual desire in premenopausal women","other":"Other approved uses (BPH, pulmonary hypertension)"}}
D=[]
def add(**k):
    k.setdefault("cls","sexual");k.setdefault("chapter","ch21-9");k.setdefault("pk",[]);k.setdefault("updates",[]);k.setdefault("interactions",[]);k.setdefault("pearls",[]);k.setdefault("populations",[]);D.append(k)
P_SE={"common":["**Headache, flushing, stomach pain** (dose dependent)","Nasal congestion, dizziness, diarrhea, rash","Vision: **blue tinge**, light sensitivity, blurring"],"serious":["**Hypotension** with nitrates or poppers; MI risk from exertion in heart disease","**NAION** (rare, may be permanent)","Sudden **hearing loss**","Priapism (erection over 4 hours)"]}
P_INT=["**Nitrates** and amyl nitrite **poppers**: contraindicated.","**Riociguat**: contraindicated (post-publication label).","**CYP3A4 inhibitors** (erythromycin, ketoconazole, itraconazole, cimetidine) raise levels; **rifampicin** lowers them.","**α-Blockers**: additive hypotension."]
P_MON=["Cardiac risk and exercise tolerance","Nitrate use","Vision or hearing changes"]
NIT={"year":"2025","title":"Nitrites, riociguat and timing","text":"Poppers are amyl **nitrite**; **riociguat** is also contraindicated; wait at least **48 hours** after tadalafil before a nitrate.","source":"Tadalafil prescribing information (DailyMed); sildenafil prescribing information (DailyMed)"}
HEAR={"year":"2007","title":"Hearing loss labeling","text":"Sudden hearing loss was added to labels in **October 2007** after 29 reports (the book says 2010).","source":"FDA press release, revisions to labels for Cialis, Levitra and Viagra, October 2007 (FierceBiotech)"}
add(id="sildenafil",name="Sildenafil",brands=["Viagra","Revatio"],group="pde5",sec="s219-dose",book=True,
 summary="The first PDE-5 inhibitor (1998): 50 mg 1 hour before sex (25 to 100 mg), once a day, lasting about 4 hours; start 25 mg over 65, with cirrhosis, severe renal impairment or CYP3A4 inhibitors; reverses SSRI anorgasmia.",
 ind=["ed","ssri","other"],mechanism="**PDE-5 inhibitor**: prolongs NO–cGMP smooth muscle relaxation.",
 indications={"approved":["Erectile dysfunction","Pulmonary arterial hypertension (Revatio)"],"other":["SSRI-induced sexual dysfunction in men and women"]},
 forms="Tablets 25, 50, 100 mg",
 dose={"start":"50 mg about 1 hour before sex (25 mg in older, hepatic, renal or CYP3A4 inhibitor patients)","titration":"25 to 100 mg by response and side effects","range":"25 to 100 mg","max":"100 mg, once a day","notes":["Works in about 30 minutes fasting; a fatty meal delays it."]},
 half="3 to 4 hours; peak about 60 minutes",effects=P_SE,monitoring=P_MON,interactions=P_INT,
 populations=[["Older adults","Levels 40% higher over 65: start 25 mg."],["Pregnancy","Avoid (no fetal data)."]],
 pearls=["Erythromycin +182%, cimetidine +56%."],
 profile={"cardiac":"M","interact":"M","ae":"L","burden":"M"},
 drill=dict(mech="**PDE-5 inhibitor** (NO enhancer).",dose="**50 mg** 1 hour before; 25 to 100 mg; once a day.",se="Headache, flushing, blue vision; NAION, hearing loss.",mon="Nitrates, cardiac risk."),
 clues=["the first PDE-5 inhibitor, 50 mg about an hour before sex"],updates=[NIT,HEAR,{"year":"2008","title":"Women on antidepressants","text":"An RCT showed benefit for antidepressant-associated sexual dysfunction in women (28% unimproved versus 73% on placebo).","source":"Nurnberg HG et al., sildenafil for women with antidepressant-associated sexual dysfunction, JAMA, 2008 (ScienceDaily summary)"}])
add(id="vardenafil",name="Vardenafil",brands=["Levitra","Staxyn"],group="pde5",sec="s219-dose",book=True,
 summary="PDE-5 inhibitor similar to sildenafil: 10 mg about 1 hour before sex (5 to 20 mg), once a day; 10 mg orally disintegrating form.",
 ind=["ed"],mechanism="**PDE-5 inhibitor**.",
 indications={"approved":["Erectile dysfunction"],"other":[]},forms="Tablets 2.5, 5, 10, 20 mg; 10 mg orally disintegrating",
 dose={"start":"10 mg about 1 hour before sex","titration":"5 to 20 mg","range":"5 to 20 mg","max":"20 mg, once a day","notes":["Adjust in liver impairment or with CYP3A4 inhibitors."]},
 half="3 to 4 hours",effects=P_SE,monitoring=P_MON,interactions=P_INT,
 profile={"cardiac":"M","interact":"M","ae":"L","burden":"M"},
 drill=dict(mech="**PDE-5 inhibitor**.",dose="**10 mg** (5 to 20) 1 hour before; once a day.",se="As sildenafil.",mon="Nitrates, CYP3A4 drugs."),
 clues=["the PDE-5 inhibitor with a 10 mg orally disintegrating form"],updates=[NIT,HEAR])
add(id="tadalafil",name="Tadalafil",brands=["Cialis","Adcirca"],group="pde5",sec="s219-dose",book=True,
 summary="Long-acting PDE-5 inhibitor (half-life about 18 hours, effect up to 36 hours, the 'weekend pill'): 10 mg before sex (5 to 20) or 2.5 to 5 mg daily; back and muscle pain in about 10%.",
 ind=["ed","other"],mechanism="**PDE-5 inhibitor** with a long half-life.",
 indications={"approved":["Erectile dysfunction","Benign prostatic hyperplasia","Pulmonary arterial hypertension (Adcirca)"],"other":[]},forms="Tablets 2.5, 5, 10, 20 mg",
 dose={"start":"10 mg before sex, or 2.5 to 5 mg daily","titration":"5 to 20 mg as needed","range":"5 to 20 mg (as needed); 2.5 to 5 mg (daily)","max":"20 mg, once a day","notes":["Detectable for 5 days.","Wait at least 48 hours before a nitrate."]},
 half="About 18 hours",effects={"common":P_SE["common"]+["**Back and muscle pain** (about 10%)"],"serious":P_SE["serious"]},monitoring=P_MON,interactions=P_INT,
 profile={"cardiac":"M","interact":"M","ae":"M","burden":"L"},
 drill=dict(mech="Long-acting **PDE-5 inhibitor**.",dose="**10 mg** (5 to 20) or **2.5 to 5 mg daily**.",se="Back and muscle pain; headache, flushing.",mon="Nitrates (48-hour wait)."),
 clues=["the 'weekend pill' with an 18-hour half-life"],updates=[NIT,HEAR])
add(id="avanafil",name="Avanafil",brands=["Stendra"],group="pde5",sec="s219-dose",book=False,
 summary="Fourth PDE-5 inhibitor (April 2012): 50, 100 or 200 mg, taken about 15 to 30 minutes before sex.",
 ind=["ed"],mechanism="**PDE-5 inhibitor** with rapid onset.",
 indications={"approved":["Erectile dysfunction"],"other":[]},forms="Tablets 50, 100, 200 mg",
 dose={"start":"Per label (lowest effective dose)","titration":"50 to 200 mg","range":"50 to 200 mg","max":"Once a day","notes":["Can act in about 15 minutes."]},
 half="—",effects=P_SE,monitoring=P_MON,interactions=P_INT,
 profile={"cardiac":"M","interact":"M","ae":"L","burden":"M"},
 drill=dict(mech="Rapid-onset **PDE-5 inhibitor**.",dose="50 to 200 mg, about 15 to 30 minutes before.",se="As other PDE-5 inhibitors.",mon="Nitrates."),
 clues=["the PDE-5 inhibitor approved in 2012 that works in about 15 minutes"],
 updates=[{"year":"2012","title":"Approval","text":"Approved April 27, 2012; not in the 12th edition.","source":"ABC News, FDA approves new drug for erectile dysfunction (Stendra), April 27, 2012"}])
add(id="yohimbine",name="Yohimbine",brands=["Yocon"],group="other",sec="s219-yoh",book=True,
 summary="α2-adrenergic antagonist with erratic absorption and a 0.5- to 2-hour half-life: about 16 mg a day for erectile or SSRI-induced dysfunction, with inconsistent benefit; anxiogenic, especially in panic disorder; blocks clonidine.",
 ind=["ed","ssri"],mechanism="**α2-adrenergic antagonist**: raises norepinephrine; increases cholinergic tone.",
 indications={"approved":["Erectile disorder (book)"],"other":["SSRI-induced loss of desire and orgasmic inhibition"]},forms="Tablets 5.4 mg",
 dose={"start":"Lower doses if side effects","titration":"Reduce, then raise gradually","range":"2.7 to 5.4 mg three times daily (about 16 mg a day)","max":"—","notes":["May worsen mental status in psychiatric patients."]},
 half="0.5 to 2 hours; bioavailability 7% to 87%",effects={"common":["**Anxiety**, irritability, tremor, headache, flushing","Raised **BP and heart rate**, dizziness, urinary frequency, nausea, sweating"],"serious":["Panic in panic disorder","Arrhythmias, seizures (supplement reports)"]},
 monitoring=["BP and heart rate","Anxiety and mental status"],interactions=["Blocks **clonidine, guanfacine** and other α2 agonists.","Avoid with **MAOIs and tricyclics** (supplement guidance)."],
 populations=[["Women","Not found useful; use with caution."]],
 profile={"cardiac":"H","interact":"M","ae":"H","burden":"H"},
 drill=dict(mech="**α2 antagonist**.",dose="About **16 mg a day** in three doses.",se="Anxiety, raised BP; panic in panic disorder.",mon="BP, anxiety; avoid in cardiac, renal disease, glaucoma, ulcer."),
 clues=["the α2 antagonist from Rauwolfia that provokes anxiety in panic disorder"],
 updates=[{"year":"2025","title":"Supplements","text":"Often sold as mislabeled supplements; linked to arrhythmias, heart attacks and seizures.","source":"NCCIH, Yohimbe: usefulness and safety (NIH)"}])
add(id="phenylephrine",name="Phenylephrine (priapism)",brands=["Neo-Synephrine"],group="other",sec="s219-priapism",book=True,
 summary="Almost pure α-agonist and first-line treatment of priapism: intracavernosal injection (book: 1,000 µg in 10 mL, 0.3 to 0.5 mL every 10 to 15 minutes; guideline: 100 to 500 µg every 3 to 5 minutes); oral 10 to 20 mg every 4 hours is weaker.",
 ind=["priapism"],mechanism="**α1-adrenergic agonist** with minimal β activity: cavernosal vasoconstriction and detumescence.",
 indications={"approved":["Hypotension during anesthesia (IV)"],"other":["Priapism (intracavernosal)"]},forms="Injection (dilute for intracavernosal use); oral tablets",
 dose={"start":"Book: 1 mL (1,000 µg) + 9 mL saline; 0.3 to 0.5 mL intracavernosal","titration":"Repeat every 10 to 15 minutes (guideline: 100 to 500 µg every 3 to 5 minutes)","range":"Oral 10 to 20 mg every 4 hours","max":"—","notes":["Monitor vital signs; compress the site."]},
 half="Short",effects={"common":["Hypertension, headache","Reflex bradycardia"],"serious":["Hypertensive crisis, arrhythmia (in heart disease)"]},
 monitoring=["Blood pressure and heart rate during injections"],interactions=["MAOIs and other pressors: exaggerated hypertension."],
 profile={"cardiac":"M","interact":"M","ae":"M","burden":"H"},
 drill=dict(mech="Nearly pure **α-agonist**.",dose="Intracavernosal: book 30 to 50 µg every 10 to 15 minutes; guideline 100 to 500 µg every 3 to 5 minutes.",se="Hypertension, bradycardia.",mon="Vital signs."),
 clues=["the nearly pure α-agonist injected into the corpora for priapism"],
 updates=[{"year":"2022","title":"Guideline dosing","text":"AUA/SMSNA guideline: 100 to 500 µg per injection every 3 to 5 minutes, with or without aspiration.","source":"Westafer LM, Updated urology guidelines for priapism, ACEP Now, June 2024"}])
add(id="flibanserin",name="Flibanserin",brands=["Addyi"],group="desire",sec="s219-women",book=False,
 summary="5-HT1A agonist and 5-HT2A antagonist (2015) taken 100 mg nightly for acquired, generalized hypoactive sexual desire disorder in premenopausal women; hypotension and syncope with alcohol or CYP3A4 inhibitors.",
 ind=["hsdd"],mechanism="**5-HT1A agonist** and **5-HT2A antagonist**.",
 indications={"approved":["Acquired, generalized HSDD in premenopausal women"],"other":[]},forms="Tablets 100 mg",
 dose={"start":"100 mg at bedtime","titration":"—","range":"100 mg at bedtime","max":"100 mg","notes":["Stop if no improvement after 8 weeks.","Stop drinking at least 2 hours before the dose, or skip it."]},
 half="About 11 hours",effects={"common":["Dizziness, somnolence, nausea, fatigue"],"serious":["**Hypotension and syncope** (boxed warning with alcohol)","CNS depression"]},
 monitoring=["Alcohol use","CYP3A4 inhibitors","Benefit at 8 weeks"],interactions=["**Alcohol**: severe hypotension and syncope.","Moderate or strong **CYP3A4 inhibitors**: contraindicated."],
 profile={"cardiac":"M","interact":"H","ae":"M","burden":"M"},
 drill=dict(mech="**5-HT1A agonist / 5-HT2A antagonist**.",dose="**100 mg** nightly at bedtime.",se="Hypotension, syncope, somnolence.",mon="Alcohol timing, CYP3A4 inhibitors."),
 clues=["the nightly pill for low desire in premenopausal women with an alcohol warning"],
 updates=[{"year":"2019","title":"Alcohol label change","text":"Stop drinking at least 2 hours before the bedtime dose or skip it (April 2019).","source":"Pharmacy Times, FDA orders safety labeling changes for female sexual dysfunction therapy, April 2019"}])
add(id="bremelanotide",name="Bremelanotide",brands=["Vyleesi"],group="desire",sec="s219-women",book=False,
 summary="Melanocortin receptor agonist (June 2019) self-injected at least 45 minutes before sex for hypoactive sexual desire disorder in premenopausal women; nausea in 40%; no more than 1 dose a day or 8 a month.",
 ind=["hsdd"],mechanism="**Melanocortin receptor agonist**.",
 indications={"approved":["Acquired, generalized HSDD in premenopausal women"],"other":[]},forms="Subcutaneous autoinjector 1.75 mg",
 dose={"start":"1.75 mg subcutaneously at least 45 minutes before sex","titration":"—","range":"As needed","max":"1 dose in 24 hours; 8 doses a month","notes":[]},
 half="About 2.7 hours",effects={"common":["**Nausea** (40%), flushing (20%), injection-site reactions, headache"],"serious":["Transient **blood pressure rise**","Focal hyperpigmentation"]},
 monitoring=["Blood pressure","Nausea"],interactions=["May slow gastric emptying: reduced absorption of some oral drugs (label)."],
 profile={"cardiac":"M","interact":"L","ae":"H","burden":"M"},
 drill=dict(mech="**Melanocortin agonist**.",dose="Inject **45 minutes before** sex; max 8 a month.",se="Nausea 40%, flushing.",mon="Blood pressure."),
 clues=["the as-needed injection for low desire in premenopausal women"],
 updates=[{"year":"2019","title":"Approval","text":"Approved June 21, 2019; not in the 12th edition.","source":"Drugs.com, Vyleesi approval history"}])
out="/* Drug reference: drugs for sexual disorders. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., section 21.9, unless a field sits inside an `updates` entry (post-publication information or a correction, with its source) or the drug is marked book: false. Profile levels: N none or minimal, L low, M moderate, H high. */\n"
out+="KS.drugClasses = (KS.drugClasses || []).concat(["+json.dumps(cls,ensure_ascii=False,indent=1)+"]);\n\n"
out+="KS.drugs = (KS.drugs || []).concat([\n"+",\n".join(json.dumps(d,ensure_ascii=False) for d in D)+"\n]);\n"
open('/home/claude/kaplanstudy/data/drugs/sexual.js','w').write(out); print(len(D))
