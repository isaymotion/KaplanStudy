# Registers ch34-6 (34.4a) and ch34-7 (34.4b), section 34.4 Theories of Personality and Psychopathology (Freud part); release 87.0.0. Run from kaplanstudy after the build and patch_updates.js.
import json
def rw(p,f):
    s=open(p).read(); n=f(s); assert n!=s,p; open(p,'w').write(n)
FILES="    files: ['guide','highyield','cards-diagnosis','cards-cases','cards-pharm','cards-foundations', 'learning']"
ES=[{'id':'ch34-6','number':'34.4a','title':'Theories of Personality I: Freud, from Dreams to the Psychosexual Stages','short':'Freud I: dreams, drives, stages',
 'summary':'Freud and the beginnings of psychoanalysis: Breuer and Anna O, the interpretation of dreams and the dream work, the topographic model, drive theory with libido, aggression and the life and death instincts, infantile sexuality and narcissism, and the oral to genital stages, with updates on Freud\\\'s birthplace, what the archives showed about Anna O and the removal of homosexuality from the DSM.',
 'counts':(7,130,138)},
 {'id':'ch34-7','number':'34.4b','title':'Theories of Personality II: Freud, Ego Psychology, Defenses and Transference','short':'Freud II: ego, defenses, transference',
 'summary':'The structural model of id, ego and superego, ego functions and autonomy, signal anxiety, the four classes of defense mechanisms, the classic theory of neuroses and analytic technique, and transference variants and mechanisms, with updates on the DSM-IV defense hierarchy and the removal of neurosis from DSM-III.',
 'counts':(7,121,144)}]
def ent(E): return "  { id: '%s', number: '%s', title: '%s', short: '%s',\n    summary: '%s',\n%s\n  }"%(E['id'],E['number'],E['title'],E['short'],E['summary'],FILES)
def man(s):
    a=FILES+"\n  }\n];"; assert s.count(a)==1
    return s.replace(a,FILES+"\n  },\n"+ent(ES[0])+",\n"+ent(ES[1])+"\n];")
rw('data/chapters.js',man)
def sw(s):
    a="  './data/ch34-5/learning.js',\n"; assert a in s
    add=''.join("  './data/%s/%s.js',\n"%(c,f) for c in ('ch34-6','ch34-7') for f in ['cards-cases','cards-diagnosis','cards-foundations','cards-pharm','guide','highyield','learning'])
    return s.replace(a,a+add).replace("PREFIX + '86.0.0'","PREFIX + '87.0.0'")
rw('sw.js',sw)
rw('data/app-meta.js',lambda s:s.replace("version: '86.0.0'","version: '87.0.0'"))
def readme(s):
    s=s.replace("Version 86.0.0","Version 87.0.0")
    a=[l for l in s.split("\n") if l.startswith("| 34.3b |")][0]+"\n"
    rows=''.join("| %s | %s | %d | %d | %d |\n"%(E['number'],E['title'],*E['counts']) for E in ES)
    return s.replace(a,a+rows)
rw('README.md',readme)
for p in ('/home/claude/fulltest.py','/home/claude/tools/fulltest.py'):
    rw(p,lambda s:s.replace("'ch34-4', 'ch34-5']","'ch34-4', 'ch34-5', 'ch34-6', 'ch34-7']",1))
for p in ('/tmp/srcs4.js','/home/claude/tools/srcs-check.js'):
    rw(p,lambda s:s.replace("'ch34-4','ch34-5']","'ch34-4','ch34-5','ch34-6','ch34-7']",1))
def src(s):
    a="  KS.sourceLinks = [\n"; assert a in s
    L=[("Britannica: Sigmund Freud (born May 6, 1856","Britannica: Sigmund Freud (born May 6, 1856, Freiberg, Moravia, now Příbor; died September 23, 1939, London)","https://www.britannica.com/biography/Sigmund-Freud"),
    ("Britannica: Bertha Pappenheim (Anna O)","Britannica: Bertha Pappenheim (Anna O), including her stay at the Bellevue Sanatorium, Kreuzlingen, July to October 1882","https://www.britannica.com/biography/Anna-O"),
    ("Stonewall's 50th anniversary and an overdue apology","Drescher J, Stonewall's 50th anniversary and an overdue apology, Psychology Today, June 2019 (American Psychoanalytic Association apology; APA decision of December 1973)","https://www.psychologytoday.com/us/blog/psychoanalysis-unplugged/201906/stonewall-s-50th-anniversary-and-overdue-apology"),
    ("The hierarchy of defense mechanisms: assessing defensive functioning","Di Giuseppe M, Perry JC, The hierarchy of defense mechanisms: assessing defensive functioning with the Defense Mechanisms Rating Scales Q-Sort, Front Psychol 2021;12:718440","https://www.frontiersin.org/articles/10.3389/fpsyg.2021.718440/full"),
    ("DSM-III: the 3d edition of the Diagnostic and Statistical Manual","Pichot P, DSM-III: the 3d edition of the Diagnostic and Statistical Manual of Mental Disorders from the American Psychiatric Association, Rev Neurol (Paris) 1986;142:489-499","https://pubmed.ncbi.nlm.nih.gov/3787052/")]
    add="    /* Section 34.4 (Freud), November 2026 */\n"+''.join("    { m: %s, label: %s, url: %s },\n"%(json.dumps(m),json.dumps(l),json.dumps(u)) for m,l,u in L)
    return s.replace(a,a+add)
rw('data/sources.js',src)
print('ok')
