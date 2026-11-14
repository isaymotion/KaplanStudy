# Registers ch34-9 (34.4d) and ch34-10 (34.4e), the end of section 34.4; release 89.0.0. Run from kaplanstudy after the builds and patch_updates.js.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
ES=[{'id':'ch34-9','number':'34.4d','title':'Theories of Personality IV: Other Psychodynamic Schools','short':'Other psychodynamic schools',
 'summary':'About 40 theorists from Abraham to Winnicott, in alphabetical order: individual psychology, object relations, self-psychology, analytic psychology, interpersonal, humanistic, existential, Gestalt, transactional and behavioral approaches, with comparison tables, the shared Mr. A case and updates on Kernberg\\\'s transference-focused psychotherapy and corrected dates for Rado and the Hampstead clinic.',
 'counts':(8,158,202)},
 {'id':'ch34-10','number':'34.4e','title':'Theories of Personality V: Positive Psychology','short':'Positive psychology',
 'summary':'What positive psychology studies, its findings on happiness, relationships, work, religion and positive institutions, Figure 34-48\\\'s two dimensions of health, strengths assessment, brief exercises and positive psychotherapies, with updates on later meta-analyses, dimensional personality disorder classification and the WHO constitution date.',
 'counts':(5,86,83)}]
def ent(E): return "  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(E['id'],E['number'],E['title'],E['short'],E['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+",\n".join(ent(e) for e in ES)+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch34-8/learning.js',\n"; assert a in s
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ('ch34-9','ch34-10') for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '88.0.0'","PREFIX + '89.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '88.0.0'","version: '89.0.0'"))
def readme(s):
    s=s.replace("Version 88.0.0","Version 89.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 34.4c |")][0]+"\n"
    rows=''.join("| %s | %s | %d | %d | %d |\n"%(E['number'],E['title'],*E['counts']) for E in ES)
    return s.replace(a,a+rows)
rw('README.md',readme)
for p in ('/home/claude/fulltest.py','/home/claude/tools/fulltest.py'):
    rw(p,lambda s:s.replace("'ch34-7', 'ch34-8']","'ch34-7', 'ch34-8', 'ch34-9', 'ch34-10']",1))
for p in ('/tmp/srcs4.js','/home/claude/tools/srcs-check.js'):
    rw(p,lambda s:s.replace("'ch34-7','ch34-8']","'ch34-7','ch34-8','ch34-9','ch34-10']",1))
def src(s):
    a="  KS.sourceLinks = [\n"; assert a in s
    L=[("Anna Freud Centre: Our history","Anna Freud: Our history (course 1947, clinic 1952, renamed the Anna Freud Centre 1984)","https://www.annafreud.org/about/our-history/"),
    ("Freud Museum London: Hampstead Child Therapy Courses","Freud Museum London: Hampstead Child Therapy Courses (1947; clinic added five years later)","https://www.freud.org.uk/?p=3257"),
    ("Evaluating three treatments for borderline personality disorder","Clarkin JF, Levy KN, Lenzenweger MF, Kernberg OF, Evaluating three treatments for borderline personality disorder: a multiwave study, Am J Psychiatry 2007;164:922-928","https://doi.org/10.1176/ajp.2007.164.6.922"),
    ("Transference-focused psychotherapy v. treatment by community psychotherapists","Doering S et al., Transference-focused psychotherapy v. treatment by community psychotherapists for borderline personality disorder: randomised controlled trial, Br J Psychiatry 2010;196:389-395","https://doi.org/10.1192/bjp.bp.109.070177"),
    ("schema-focused therapy vs transference-focused psychotherapy","Giesen-Bloo J et al., Outpatient psychotherapy for borderline personality disorder: randomized trial of schema-focused therapy vs transference-focused psychotherapy, Arch Gen Psychiatry 2006;63:649-658 (cited in the Am J Psychiatry 2007 editorial Do All Roads Lead to Rome?)","https://ajp.psychiatryonline.org/doi/10.1176/ajp.2007.164.6.853"),
    ("Application of the ICD-11 classification of personality disorders","Bach B, First MB, Application of the ICD-11 classification of personality disorders, BMC Psychiatry 2018;18:351","https://doi.org/10.1186/s12888-018-1908-3"),
    ("ICD-11 personality disorder classification, Borderline Personal Disord","Bach B et al., ICD-11 classification of personality disorders: an overview, Borderline Personal Disord Emot Dysregul 2022;9:12","https://pmc.ncbi.nlm.nih.gov/articles/PMC8973542/"),
    ("International Dictionary of Psychoanalysis: Radó","International Dictionary of Psychoanalysis (Encyclopedia.com): Radó, Sándor (1890-1972)","https://www.encyclopedia.com/psychology/dictionaries-thesauruses-pictures-and-press-releases/rado-sandor-1890-1972"),
    ("Encyclopaedia Judaica: Rado, Sandor","Encyclopaedia Judaica (Jewish Virtual Library): Rado, Sandor","https://www.jewishvirtuallibrary.org/rado-sandor"),
    ("WHO Constitution (adopted 22 July 1946","WHO Constitution (adopted 22 July 1946, in force 7 April 1948)","https://www.who.int/about/governance/constitution"),
    ("WHO, History of WHO","WHO, History of WHO","https://www.who.int/about/history"),
    ("Positive psychology interventions: a meta-analysis of randomized controlled studies","Bolier L et al., Positive psychology interventions: a meta-analysis of randomized controlled studies, BMC Public Health 2013;13:119","https://doi.org/10.1186/1471-2458-13-119"),
    ("The effect of positive psychology interventions on well-being and distress in clinical samples","Chakhssi F et al., The effect of positive psychology interventions on well-being and distress in clinical samples with psychiatric or somatic disorders, BMC Psychiatry 2018","https://doi.org/10.1186/s12888-018-1739-2"),
    ("The effects are much smaller than previously reported","White CA, Uttl B, Holder MD, Meta-analyses of positive psychology interventions: The effects are much smaller than previously reported, PLoS One 2019;14:e0216588","https://doi.org/10.1371/journal.pone.0216588"),
    ("Effectiveness of positive psychology interventions: a systematic review and meta-analysis","Carr A et al., Effectiveness of positive psychology interventions: a systematic review and meta-analysis, J Posit Psychol 2021;16:749-769","https://doi.org/10.1080/17439760.2020.1818807"),
    ("compared to other active psychological treatments","Lim WL, Tierney S, The effectiveness of positive psychology interventions for promoting well-being of adults experiencing depression compared to other active psychological treatments, J Happiness Stud 2022","https://doi.org/10.1007/s10902-022-00598-z")]
    add="    /* Section 34.4 (other schools, positive psychology), November 2026 */\n"+''.join("    { m: %s, label: %s, url: %s },\n"%(json.dumps(m),json.dumps(l),json.dumps(u)) for m,l,u in L)
    return s.replace(a,a+add)
rw('data/sources.js',src)
print('ok')
