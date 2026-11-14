import sys
H=sys.argv[1]; P='/home/claude/devtools-wt/HANDOFF.md'
s=open(P).read()
def rep(a,b):
    global s; assert s.count(a)==1,a[:60]; s=s.replace(a,b)
rep("Last updated 2026-11-14, after release **90.0.0** (`47e0bfc`): ","Last updated 2026-11-14, after release **90.1.0** (`%s`): the **GDS-15** (short Geriatric Depression Scale) in the clinical tools hub, plus a fix for the PHQ-9 item 9 link. Release **90.0.0** (`47e0bfc`): "%H)
row="| GDS-15 | `#/tools/gds15` | 90.1.0 | `gds15` in `data/tools/scales.js` (after `phq9`); yes or no options `YES1`/`NO1` (no scores 1 on items 1, 5, 7, 11, 13). Bands from the author's Stanford scoring page: 0 to 5 not suggestive, 6 to 10 suggestive (follow-up interview), 11 to 15 almost always depression; matches Ch 25.2 (\"above 5\"). The note names other cut points (Hartford 5 to 8, 9 to 11, 12 to 15; many studies use 5 or more), dementia limits and the author's prorating advice (the tool scores only a complete form). Flag on item 14 (hopelessness) with the C-SSRS link and NCMH lines, since the GDS does not ask about suicide. Public domain per the author's site. Linked from Ch 25.2 (`chapters: ['ch25-2']`). e2e_tools checks 6 (suggestive) and 7 with the flag; the hub test now expects 13 tools. |\n"
a="| Report an error | every guide section | 58 |"
rep(a,row+a)
rep("Totals: **4,014/4,014 cases and 1,240/1,240 sections**, with all tests passing on `47e0bfc`","Totals: **4,014/4,014 cases and 1,240/1,240 sections**, with all tests passing on `%s` (release 90.1.0; fulltest 723 routes) and on `47e0bfc`"%H)
rep("Latest changelog version **90.0.0**; `sw.js` VERSION is `PREFIX + '90.0.0'`.","Latest changelog version **90.1.0**; `sw.js` VERSION is `PREFIX + '90.1.0'`. Feature releases since 90.0.0 bump the minor number.")
rep("7. Possible feature (only if the user asks): the short Geriatric Depression Scale is public domain and would fit the clinical tools hub (recipe C; confirm the licence and cutoffs first).","7. Done in 90.1.0: the GDS-15 (see the features table).")
add="""- **Links inside tool texts (90.1.0):** `A.fmt` escapes HTML, so the PHQ-9 item 9 flag showed `<a href=...>` as raw text from release 58 until 90.1.0, and no test caught it. `js/tools.js` now wraps `fmt` to turn `[label](#/route)` into an anchor (internal hash routes only). Write links in scale and calculator texts that way, and look at a screenshot of any new tool result, not only its text.
"""
k=s.index("\n## 10. Files to re-attach")
s=s[:k]+"\n"+add+s[k:]
open(P,'w').write(s); print('ok')
