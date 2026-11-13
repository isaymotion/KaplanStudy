# Why-not lines for clinical case cards

STEP 1 (MANDATORY): read the ENTIRE guide file named in your job before writing anything. Every line you write must be supported by the guide or by the case stem.

Each line of the cases file is a JSON array: [caseId, tag, stem, [5 choices in STORED order], answerIndex, why]. The choice order is final; do not reorder.

Your job: for every case, write 5 strings aligned to the stored choice order. The string at answerIndex is "" (empty). Each other string explains in one or two plain sentences why that choice is wrong for this stem, naming what the choice actually is and pointing to what fits instead.
Alignment example: choices [A, B, C, D, E], answer 2 -> ["why A is wrong", "why B is wrong", "", "why D is wrong", "why E is wrong"]. Line N must discuss choice N.

Rules:
- Do not state facts the stem does not give, and do not add facts that are not in the guide. Do not contradict the guide's tables or its update boxes (boxes of type update are newer corrections; where a choice repeats something an update corrects, say so).
- Write "the chapter", never "the guide" or "the book".
- If the stem gives no sex, use no he/she/his/her.
- Keep the chapter's hedges; do not call animal findings proven in humans.
- Bold nothing. No straight double quotes inside strings (use single quotes if needed).
- Never copy 7 or more consecutive words from the source text. Run: N=7 DETAIL=/tmp/ov-<you>.tsv python3 /home/claude/tools/overlap.py <overlap source in your job> <your output file> and reword until 0 runs (delete the TSV before each rerun).

Output: a file containing exactly ({ "caseId": [5 strings], ... }) for every case in your cases file.
Self-check with node before finishing: the file parses; key count equals the number of cases; each value has 5 strings; "" appears exactly at the answer index and nowhere else. Print the counts.
Final reply (short, no source quotes): counts, overlap result, and a list of any stem, choice or keyed answer that looked wrong, ambiguous or in conflict with the guide or an update box.
