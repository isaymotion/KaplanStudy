import re,html,sys
out=[]
for f in sys.argv[2:]:
    t=open(f,encoding='utf8').read()
    t=re.sub(r'<(script|style)[^>]*>.*?</\1>','',t,flags=re.S)
    t=re.sub(r'<img[^>]*src="([^"]+)"[^>]*>',r' [IMG \1] ',t)
    t=re.sub(r'<h(\d)[^>]*>',lambda m:'\n\n'+'#'*int(m.group(1))+' ',t)
    t=re.sub(r'</(p|div|li|tr|h\d|dt|dd)>','\n',t)
    t=re.sub(r'<(td|th)[^>]*>',' | ',t)
    t=re.sub(r'<[^>]+>','',t)
    t=html.unescape(t)
    t=re.sub(r'[ \t]+',' ',t)
    t=re.sub(r'\n\s*\n+','\n\n',t)
    out.append(t)
t='\n'.join(out)
open(sys.argv[1],'w').write(t)
print(len(t.split()),'words')
