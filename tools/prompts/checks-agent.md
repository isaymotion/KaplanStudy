# Section checks

Read the ENTIRE guide file named in your job first.
For every section id in the guide, write 2 or 3 short check questions with answers: {secId: [{q, a}, ...]}. Questions test the section's key facts (names, numbers, distinctions, clinical points). Answers are one or two sentences with the key facts in **bold**.
Rules:
- Every fact in a question or answer must appear in that same section of the guide. Numbers must match the section exactly.
- Where a section has update boxes (type update), do not ask a question whose answer the update contradicts; you may ask about the update itself.
- Keep the chapter's hedges and give both sides where the chapter does. Animal findings stay animal findings.
- Write "the chapter", never "the guide" or "the book". No straight double quotes inside strings.
- Never copy 7 or more consecutive words from the source. Run: N=7 DETAIL=/tmp/ov-<you>.tsv python3 /home/claude/tools/overlap.py <overlap source in your job> <your output file> and reword until 0 runs (delete the TSV before each rerun). Avoid listing items in the same order as the chapter when that makes a long run.
Output: a file containing exactly ({ "secId": [{ "q": "...", "a": "..." }], ... }) covering every section id.
Self-check with node: parses, every section id in the guide present, 2 to 3 checks each. Final reply (short): counts and overlap result.
