# Registers ch34-1 and ch34-2 (release 84.0.0). Run from kaplanstudy after both builds and patch_updates.js.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
E1={'id':'ch34-1','number':'34.1a','title':'Psychosocial Sciences I: Piaget, Attachment, and Learning Theory','short':'Piaget, attachment and learning',
 'summary':'The four stages of Piaget and their use in psychiatry and psychotherapy; attachment theory, the phases of attachment, the Strange Situation and the effects of separation; Pavlovian conditioning, extinction and relapse, operant learning, schedules and theories of reinforcement, avoidance learning, learned helplessness and habits, with updates on infant object permanence, disorganized attachment, the DSM-5 attachment disorders, the inhibitory learning approach to exposure and D-cycloserine.'}
E2={'id':'ch34-2','number':'34.1b','title':'Psychosocial Sciences II: Biology of Memory','short':'Biology of memory',
 'summary':'Synaptic plasticity and long-term potentiation; cortical organization of memory; amnesia and the patients HM and EP; Korsakoff syndrome and frontal damage; retrograde amnesia and consolidation; declarative and nondeclarative memory, priming, neuroimaging and sleep; memory assessment; psychogenic amnesia, memory distortion and infantile amnesia, with updates on the identity of HM and current terms.'}
def ent(e): return "  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(e['id'],e['number'],e['title'],e['short'],e['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+ent(E1)+",\n"+ent(E2)+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch33-10/learning.js',\n"; assert a in s
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ['ch34-1','ch34-2'] for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '83.0.0'","PREFIX + '84.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '83.0.0'","version: '84.0.0'"))
def readme(s):
    s=s.replace("Version 83.0.0","Version 84.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 33.10 |")][0]+"\n"
    return s.replace(a,a+"| 34.1a | %s | %s | %s | %s |\n"%(E1['title'],*open('/tmp/ch341-counts').read().split())+"| 34.1b | %s | %s | %s | %s |\n"%(E2['title'],*open('/tmp/ch342-counts').read().split()))
rw('README.md',readme)
rw('/home/claude/fulltest.py',lambda s:s.replace("'ch33-10']","'ch33-10', 'ch34-1', 'ch34-2']",1))
rw('/tmp/srcs4.js',lambda s:s.replace("'ch33-10']","'ch33-10','ch34-1','ch34-2']",1))
rw('/home/claude/tools/srcs-check.js',lambda s:s.replace("'ch33-10']","'ch33-10','ch34-1','ch34-2']",1))
rw('/home/claude/tools/fulltest.py',lambda s:s.replace("'ch33-10']","'ch33-10', 'ch34-1', 'ch34-2']",1))
def src(s):
    a="  KS.sourceLinks = [\n"; assert a in s
    L=[("Object permanence in young infants: further evidence and later occlusion studies","Baillargeon and colleagues, occlusion events in 3- and 3.5-month-old infants, with a review of earlier violation-of-expectation studies (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC4241364"),
    ("Infant disorganized attachment: clarifying levels of analysis","Duschinsky R, Solomon J, Infant disorganized attachment: clarifying levels of analysis, Clin Child Psychol Psychiatry 2017 (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC5641982"),
    ("Hospitalism, International Dictionary of Psychoanalysis","Hospitalism, International Dictionary of Psychoanalysis (Encyclopedia.com)","https://encyclopedia.com/psychology/dictionaries-thesauruses-pictures-and-press-releases/hospitalism"),
    ("Trauma Disorder Criteria Reflect Variability of Response to Events","Psychiatric News 2013: trauma and stressor-related disorders in DSM-5, including the two attachment diagnoses","https://psychnews.psychiatryonline.org/doi/10.1176/appi.pn.2013.3a21"),
    ("Maximizing exposure therapy: an inhibitory learning approach","Craske MG et al., Maximizing exposure therapy: an inhibitory learning approach, Behav Res Ther 2014 (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC4114726"),
    ("Learned helplessness at fifty: insights from neuroscience","Maier SF, Seligman MEP, Learned helplessness at fifty: insights from neuroscience, Psychol Rev 2016 (PMC)","https://pmc.ncbi.nlm.nih.gov/articles/PMC4920136"),
    ("Nobel Prize in Physiology or Medicine 2000, award ceremony speech","Nobel Prize in Physiology or Medicine 2000 (Carlsson, Greengard and Kandel): award ceremony speech","https://www.nobelprize.org/prizes/medicine/2000/ceremony-speech/"),
    ("HM, the Man with No Memory","Ogden J, HM, the Man with No Memory, Psychology Today 2012","https://www.psychologytoday.com/us/blog/trouble-in-mind/201201/hm-the-man-no-memory"),
    ("DSM-5 dissociative disorders changes, Psychiatric News 2013","Psychiatric News 2013: DSM-5 self-exam on dissociative disorders (fugue as a specifier of dissociative amnesia)","https://psychiatryonline.org/doi/10.1176/appi.pn.2013.12a29")]
    add="    /* Section 34.1, November 2026 */\n"+''.join("    { m: %s, label: %s, url: %s },\n"%(json.dumps(m),json.dumps(l),json.dumps(u)) for m,l,u in L)
    return s.replace(a,a+add)
rw('data/sources.js',src)
print('ok')
