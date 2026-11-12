# Sections 32.2 and 32.3: outline for release 77.0.0 (ids fixed)

Two app entries: ch32-2 (Adulthood) and ch32-3 (Old Age), plus a short addition to ch32-1 (JOB H). Card ids: dx dNNN-<pp>NN, cases cNNN-<pp>NN, ph pNNN-<pp>NN, fd fNNN-<pp>NN, where NNN is 322, 323 or 321 as given in your job and <pp> is the two-letter prefix below. Stay inside YOUR prefixes.
Source text marks bold with <b>...</b>, so headings are visible. Ignore page markers, credit lines and image markers (small images are page icons). Table text can appear a little before or after its heading.
Each job writes ONE part: `({title, sections})`.

## JOB A (32.2): source /home/claude/ch32-2work/src/s1.txt (about 2,300 words); overlap source /home/claude/pdfsrc/ch32-2-clean.txt
Write /home/claude/ch32-2work/g1.js + c1.js; part "Young adulthood"
  s322-intro | yi | Introduction to adulthood, the transition from adolescence, developmental tasks (Table 32-15) and psychological development concepts (Table 32-16)
  s322-work  | yw | Work identity, unemployment and developing adult friendships
  s322-marr  | ym | Sexuality and marriage: interracial marriage, same-sex marriage, marital problems, marriage and couples therapy
  hy ids hy322-01 to hy322-03; tags: Young adult tasks | Work and friendship | Marriage

## JOB B (32.2): source /home/claude/ch32-2work/src/s2.txt (about 1,850 words); overlap source /home/claude/pdfsrc/ch32-2-clean.txt
Write /home/claude/ch32-2work/g2.js + c2.js; part "Parenthood and the move into midlife"
  s322-parent| yp | Parenthood, single-parent families, alternative lifestyle parenting, adoption
  s322-midtr | mt | Middle adulthood (40 to 65): the transition from young adulthood, features salient to middle adulthood (Table 32-17) and the developmental theorists (Erikson, Vaillant, Colarusso and Nemiroff)
  hy ids hy322-04 to hy322-05; tags: Parenthood | Midlife theory

## JOB C (32.2): source /home/claude/ch32-2work/src/s3.txt (about 2,450 words); overlap source /home/claude/pdfsrc/ch32-2-clean.txt
Write /home/claude/ch32-2work/g3.js + c3.js; part "Midlife relationships and transitions"
  s322-midrel| mr | Developing midlife friendships, reappraising relationships, sexuality in midlife
  s322-climac| mc | Climacterium, midlife transition and crisis, empty-nest syndrome and other tasks of middle adulthood
  hy ids hy322-06 to hy322-07; tags: Midlife relationships | Midlife transitions

## JOB D (32.2): source /home/claude/ch32-2work/src/s4.txt (about 1,350 words); overlap source /home/claude/pdfsrc/ch32-2-clean.txt
Write /home/claude/ch32-2work/g4.js + c4.js; part "Divorce and adult maturity"
  s322-divorce| dv | Divorce: types of separation (psychic, legal, economic, community, coparental), custody, reasons for divorce, intercourse outside of marriage
  s322-matur  | am | Adult maturity
  hy ids hy322-08 to hy322-09; tags: Divorce | Maturity

## JOB E (32.3): source /home/claude/ch32-3work/src/s1.txt (about 2,250 words) plus image /home/claude/pdfsrc/p2879.png (Table 32-19 body); overlap source /home/claude/pdfsrc/ch32-3-clean.txt
Write /home/claude/ch32-3work/g1.js + c1.js; part "Demographics and biology of aging"
  s323-intro | oi | Developmental tasks of late adulthood (Table 32-18), demographics (Table 32-19), longevity and demographic highlights of the aged (Table 32-20)
  s323-bio   | ob | Biology of aging and biologic changes by system (Table 32-21: cellular, immune, musculoskeletal, integument, genitourinary, senses, neuropsychiatric, memory, neurotransmitters, brain, cardiovascular, GI, endocrine, respiratory)
  hy ids hy323-01 to hy323-02; tags: Demographics | Biology of aging

## JOB F (32.3): source /home/claude/ch32-3work/src/s2.txt (about 1,900 words) plus image /home/claude/pdfsrc/p2887.png (Table 32-22 body); figure pages p2889.png, p2890.png, p2891.png are optional; overlap source /home/claude/pdfsrc/ch32-3-clean.txt
Write /home/claude/ch32-3work/g2.js + c2.js; part "Life expectancy, health and theories of aging"
  s323-lifeexp| ol | Life expectancy (Table 32-22), ethnicity and race, sex ratios, geographic distribution, exercise, diet and health (Table 32-23 effects of exercise, Table 32-24 nutrition, Figures 32-7 to 32-9)
  s323-theory | ot | Stage theories of personality development, old age developmental theorists, personality over the life span (stability and change)
  hy ids hy323-03 to hy323-04; tags: Life expectancy and health | Theories of aging

## JOB G (32.3): source /home/claude/ch32-3work/src/s3.txt (about 1,950 words); overlap source /home/claude/pdfsrc/ch32-3-clean.txt
Write /home/claude/ch32-3work/g3.js + c3.js; part "Psychosocial aspects of aging"
  s323-psysoc | op | Social activity, ageism, chronic conditions (Table 32-25), transference and countertransference with older patients
  s323-retire | or | Socioeconomics, retirement, sexual activity in old age and long-term care
  hy ids hy323-05 to hy323-06; tags: Psychosocial aging | Retirement and care

## JOB H (32.1 leftover): source /home/claude/ch32-1work/src/s9.txt (about 150 words: the end of the prostitution and trafficking paragraph, then "Tattoos and Body Piercing"); overlap source /home/claude/pdfsrc/ch32-1-tail-clean.txt
Write /home/claude/ch32-1work/g9.js (part "Adolescence: body modification", ONE section) + c9.js, and /home/claude/ch32-1work/adsexo-add.js containing ({blocks:[...]}) with 1 or 2 blocks (a short `p` and, if useful, a `caution`) that complete the trafficking paragraph; these will be appended to section s321-adsexo.
  s321-body | ab | Tattoos and body piercing (a short section of about 250 words; 3 callouts still required)
  hy id hy321-23; tag: Body modification. Card targets for this small job: dx 3 to 4, cs 3, fd 1 to 2, ph 0. Cases about trafficking may use prefix ab as well.
