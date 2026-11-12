/* Chapter 31 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 31. */
KS.add("ch31", "guide", {
  "intro": "Chapter 31 covers global and cultural issues in psychiatry: the prevalence and burden of mental disorders worldwide (WHO and World Mental Health survey data, disability ratings and DALY projections for 2030), the treatment gap, resources for mental health care by WHO region (policy, financing and workforce), principles and barriers in program development, stigma, the links between mental and physical illness, ethical issues and international declarations, and the international organizations active in mental health. Many figures date from the mid-2000s; update boxes give WHO's 2022 and 2025 estimates, the Mental Health Atlas 2024 and the Comprehensive Mental Health Action Plan 2013 to 2030, and correct three details.",
  "objectives": [
    "Describe the worldwide prevalence and burden of mental disorders and interpret disability and DALY figures, including current WHO estimates.",
    "Explain the treatment gap and how it varies by country income, disorder and patient features.",
    "Compare mental health resources across WHO regions and name the main barriers to program development and WHO's suggested solutions.",
    "Describe stigma and anti-stigma strategies, and the excess physical illness and mortality in people with mental disorders.",
    "Name the main international declarations on the rights of people with mental disorders and the roles of WHO, WPA, WFMH and other organizations."
  ],
  "parts": [
    {
      "title": "Burden, treatment gap and resources",
      "sections": [
        {
          "id": "s31-burden",
          "title": "Worldwide prevalence and burden of mental disorders",
          "blocks": [
            {
              "type": "p",
              "text": "Mental disorders are common in every region of the world. They cause much disability and social burden. Effective treatments exist and work in both developed and developing countries, yet most people with these disorders go untreated, above all in **low-income countries**. Many countries, mostly poor ones, still have **no national mental health policy**, and mental health resources are **scarce and unevenly shared**. World psychiatry also deals with **stigma**, the links between **mental and physical disease**, and the **ethics** of care."
            },
            {
              "type": "h",
              "text": "How common are mental disorders?"
            },
            {
              "type": "list",
              "title": "Key prevalence figures (WHO)",
              "items": [
                "Lifetime: over **25 percent** of people in the world will have at least one mental disorder.",
                "Primary care: over **20 percent** of patients seen by primary health care workers have at least one current mental disorder.",
                "WHO study at **14 sites** (Africa, Asia, the Americas and Europe): current prevalence of any disorder averaged **24 percent**, with **no consistent difference** between low- and high-income countries.",
                "Commonest diagnoses at those sites: **depression**, averaging **10.4 percent**, then **generalized anxiety disorder**, averaging **7.9 percent**.",
                "Women had depression **1.89 times** as often as men; men had more **alcohol-related disorders**, so the share of people with any disorder showed **no sex difference**.",
                "A mental disorder diagnosis was significantly linked to **physical ill-health** and **educational disadvantage**."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Same total, different disorders",
              "text": "Across the WHO sites, men and women had any mental disorder equally often. The excess of **depression** in women was balanced by the excess of **alcohol-related disorders** in men."
            },
            {
              "type": "h",
              "text": "Measuring burden: the DALY"
            },
            {
              "type": "defs",
              "items": [
                [
                  "Disability-adjusted life year (DALY)",
                  "Burden measure built jointly by the **WHO**, the **World Bank** and **Harvard School of Public Health**. For a disease or injury it adds the **years of life lost to early death** to the **years lived with disability** from new cases in the general population."
                ],
                [
                  "Sheehan Disability Scale",
                  "Rating used in the **World Mental Health (WMH)** surveys to judge how disabling a condition is; Table 31-1 gives the share of cases rated **severely disabling**."
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Share of all DALYs from mental and neurologic disorders over time",
              "head": [
                "Estimate year",
                "Mental and neurologic share of all DALYs",
                "Comment"
              ],
              "rows": [
                [
                  "1990 (original estimate)",
                  "**10.5%**",
                  "First figures"
                ],
                [
                  "2000",
                  "**12.3%**",
                  "**Depression**, **alcohol use disorders** and **suicide** ranked among the 20 leading DALY causes across all ages"
                ],
                [
                  "2005",
                  "**13.5%**",
                  "**Largest single source** of noncommunicable-disease burden"
                ],
                [
                  "2030 (projection)",
                  "**14.4%** of all DALYs; **25.4%** of noncommunicable-disease DALYs",
                  "Projected, likely figure"
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Percent of cases rated severely disabling in developed versus developing World Mental Health countries (see Table 31-1)",
              "wide": true,
              "head": [
                "Condition",
                "Developed % (SE)",
                "Developing % (SE)",
                "Group"
              ],
              "rows": [
                [
                  "Arthritis",
                  "23.3 (1.5)",
                  "22.8 (3.0)",
                  "Physical"
                ],
                [
                  "Asthma",
                  "8.2 (1.4)",
                  "26.9 (5.4)",
                  "Physical"
                ],
                [
                  "Back or neck problems",
                  "34.6 (1.5)",
                  "22.7 (1.8)",
                  "Physical"
                ],
                [
                  "Cancer",
                  "16.6 (3.2)",
                  "23.9 (10.3)",
                  "Physical"
                ],
                [
                  "Chronic pain",
                  "40.9 (3.6)",
                  "24.8 (3.8)",
                  "Physical"
                ],
                [
                  "Diabetes",
                  "13.6 (3.4)",
                  "23.7 (6.1)",
                  "Physical"
                ],
                [
                  "Headaches",
                  "42.1 (1.9)",
                  "28.1 (2.1)",
                  "Physical"
                ],
                [
                  "Heart disease",
                  "26.5 (3.9)",
                  "27.8 (5.2)",
                  "Physical"
                ],
                [
                  "High blood pressure",
                  "**5.3** (0.9)",
                  "23.8 (2.6)",
                  "Physical"
                ],
                [
                  "Ulcer",
                  "15.3 (3.9)",
                  "18.3 (3.6)",
                  "Physical"
                ],
                [
                  "ADHD",
                  "37.6 (3.6)",
                  "24.3 (7.4)",
                  "Mental"
                ],
                [
                  "Bipolar disorder",
                  "**68.3** (2.6)",
                  "**52.1** (4.9)",
                  "Mental"
                ],
                [
                  "Depression",
                  "**65.8** (1.6)",
                  "**52.0** (1.8)",
                  "Mental"
                ],
                [
                  "GAD",
                  "56.3 (1.9)",
                  "42.0 (4.2)",
                  "Mental"
                ],
                [
                  "Intermittent explosive disorder (IED)",
                  "36.3 (2.8)",
                  "27.8 (3.6)",
                  "Mental"
                ],
                [
                  "Oppositional defiant disorder (ODD)",
                  "34.2 (6.0)",
                  "41.3 (10.3)",
                  "Mental"
                ],
                [
                  "Panic disorder",
                  "48.4 (2.6)",
                  "38.8 (4.7)",
                  "Mental"
                ],
                [
                  "PTSD",
                  "54.8 (2.8)",
                  "41.2 (7.3)",
                  "Mental"
                ],
                [
                  "Social phobia",
                  "35.1 (1.4)",
                  "41.4 (3.6)",
                  "Mental"
                ],
                [
                  "Specific phobia",
                  "18.6 (1.1)",
                  "16.2 (1.6)",
                  "Mental"
                ]
              ],
              "note": "SE = standard error. In both country groups, **bipolar disorder** and **depression** had the highest share of severe ratings; no physical condition reached 50%."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Most disabling in the WMH surveys",
              "text": "**Bipolar disorder** (68.3% developed, 52.1% developing) and **depression** (65.8% and 52.0%) were most often rated severely disabling, ahead of every chronic physical condition listed, including **headaches** (42.1%) and **chronic pain** (40.9%) in developed countries."
            },
            {
              "type": "h",
              "text": "Projections for 2030"
            },
            {
              "type": "p",
              "text": "For **2030** the projection puts **depression** at **number 2** among causes of total DALYs (**5.7 percent**), after **HIV/AIDS** and ahead of **ischemic heart disease**. By income group it is projected to rank **first** (**9.8 percent**) in **high-income** settings, **second** (**6.7 percent**) in **middle-income** settings and **third** (**4.7 percent**) in **low-income** settings."
            },
            {
              "type": "table",
              "caption": "Top 10 causes of DALYs worldwide, projected for 2030 (see Table 31-3; Mathers and Loncar, 2006)",
              "head": [
                "Cause",
                "% of total DALYs",
                "Rank"
              ],
              "rows": [
                [
                  "**HIV/AIDS**",
                  "12.1",
                  "1"
                ],
                [
                  "**Unipolar depressive disorders**",
                  "**5.7**",
                  "2"
                ],
                [
                  "Ischemic heart disease",
                  "4.7",
                  "3"
                ],
                [
                  "Road traffic injuries (accidents)",
                  "4.2",
                  "4"
                ],
                [
                  "Perinatal conditions",
                  "4.0",
                  "5"
                ],
                [
                  "Cerebrovascular disease (stroke)",
                  "3.9",
                  "6"
                ],
                [
                  "COPD (chronic obstructive pulmonary disease)",
                  "3.1",
                  "7"
                ],
                [
                  "Lower respiratory infections",
                  "3.0",
                  "8"
                ],
                [
                  "Adult-onset hearing loss",
                  "2.5",
                  "9"
                ],
                [
                  "Cataracts",
                  "2.5",
                  "10"
                ]
              ]
            },
            {
              "type": "table",
              "caption": "Mental and substance use disorders in the Global Burden of Disease work: percentages by period (see Table 31-2)",
              "wide": true,
              "head": [
                "Cause",
                "Before 1998",
                "1998 to 2005",
                "2006 to 2013",
                "Total"
              ],
              "rows": [
                [
                  "All causes",
                  "100.0%",
                  "100.0%",
                  "100.0%",
                  "100.0%"
                ],
                [
                  "All mental and substance use disorders",
                  "37.8%",
                  "58.5%",
                  "35.6%",
                  "67.6%"
                ],
                [
                  "Schizophrenia",
                  "17.0%",
                  "9.0%",
                  "3.7%",
                  "19.1%"
                ],
                [
                  "Alcohol use disorders",
                  "19.7%",
                  "28.7%",
                  "14.9%",
                  "31.4%"
                ],
                [
                  "Drug use disorders (all)",
                  "20.7%",
                  "47.3%",
                  "26.1%",
                  "51.6%"
                ],
                [
                  "  Opioid use disorders",
                  "12.8%",
                  "17.6%",
                  "2.7%",
                  "19.7%"
                ],
                [
                  "  Cocaine use disorders",
                  "6.9%",
                  "31.9%",
                  "5.9%",
                  "34.6%"
                ],
                [
                  "  Amphetamine use disorders",
                  "6.4%",
                  "23.9%",
                  "8.0%",
                  "27.7%"
                ],
                [
                  "  Cannabis use disorders",
                  "16.0%",
                  "42.0%",
                  "20.7%",
                  "46.8%"
                ],
                [
                  "  Other drug use disorders",
                  "—",
                  "—",
                  "—",
                  "—"
                ],
                [
                  "Depressive disorders (all)",
                  "19.7%",
                  "23.9%",
                  "11.2%",
                  "33.0%"
                ],
                [
                  "  Major depressive disorder",
                  "19.7%",
                  "23.9%",
                  "11.2%",
                  "33.0%"
                ],
                [
                  "  Dysthymia",
                  "9.0%",
                  "13.8%",
                  "5.3%",
                  "18.6%"
                ],
                [
                  "Bipolar disorder",
                  "8.5%",
                  "16.0%",
                  "3.7%",
                  "18.6%"
                ],
                [
                  "Anxiety disorders",
                  "12.8%",
                  "21.8%",
                  "5.3%",
                  "26.1%"
                ],
                [
                  "Eating disorders (all)",
                  "10.6%",
                  "12.2%",
                  "4.3%",
                  "14.9%"
                ],
                [
                  "  Anorexia nervosa",
                  "10.1%",
                  "12.2%",
                  "4.3%",
                  "14.4%"
                ],
                [
                  "  Bulimia nervosa",
                  "8.5%",
                  "11.7%",
                  "3.2%",
                  "14.9%"
                ],
                [
                  "Autistic spectrum disorders (all)",
                  "5.3%",
                  "5.9%",
                  "3.7%",
                  "9.6%"
                ],
                [
                  "  Autism",
                  "5.3%",
                  "5.3%",
                  "3.7%",
                  "9.6%"
                ],
                [
                  "  Asperger syndrome",
                  "1.6%",
                  "4.8%",
                  "1.6%",
                  "5.3%"
                ],
                [
                  "ADHD",
                  "10.6%",
                  "10.1%",
                  "4.8%",
                  "19.1%"
                ],
                [
                  "Conduct disorder",
                  "5.9%",
                  "6.4%",
                  "1.6%",
                  "11.2%"
                ],
                [
                  "Idiopathic intellectual disability",
                  "6.4%",
                  "3.2%",
                  "1.1%",
                  "7.4%"
                ],
                [
                  "Other mental and substance use disorders",
                  "0.5%",
                  "0.5%",
                  "0.0%",
                  "1.1%"
                ]
              ],
              "note": "Figures as printed. The table does not say what the percentages measure, so read it only as printed values by period. \"Asperger syndrome\" is an older label; current DSM usage places it within autism spectrum disorder."
            },
            {
              "type": "h",
              "text": "Burden on families"
            },
            {
              "type": "p",
              "text": "The WHO estimates that **one in four families** in the world includes at least one person with a mental disorder. Caring for someone with a **severe** mental disorder strains family ties, limits social, leisure and work life, causes money problems, harms the carer's physical health, and brings grief, low mood, embarrassment and the stress of handling disturbing behavior. This load is **substantial** and **significantly higher** than the load of looking after relatives with chronic physical illness such as **diabetes** or **heart, kidney or lung disease**. Some aspects of family burden **differ across cultures**."
            },
            {
              "type": "h",
              "text": "Suicide"
            },
            {
              "type": "list",
              "items": [
                "Suicide is one of the **10 leading causes of death** at all ages in most countries with data.",
                "In some countries, such as **China**, suicide is the **top cause of death** for people aged **15 to 34**.",
                "WHO estimate: about **849,000** suicide deaths worldwide in **2001**, more than deaths that year from **war (230,000)** or **violence (500,000)**.",
                "Projection on current trends: about **1.53 million** suicide deaths in **2020**, with **10 to 20 times** as many attempts.",
                "Rates vary widely: **48.0 to 79.3 per 100,000** a year in many countries of **Central and Eastern Europe** versus **under 4.0 per 100,000** in many **Islamic and Latin American** countries.",
                "**Low- and middle-income** countries account for over **85 percent** of suicides; this may be an **underestimate** because official statistics there are unreliable.",
                "With a **verbal autopsy** in **South India**, observed suicide rates were **10-fold** higher than official national figures.",
                "**Pesticide self-poisoning** may account for about **300,000** suicides a year across the **Asia-Pacific** region.",
                "Male to female ratio by year: **1950**, **3.2:1**; **1995**, **3.6:1**; **2020** (estimate), **3.9:1**.",
                "Only in **China** do women consistently die by suicide **more often** than men, above all in **rural** areas.",
                "Worldwide rates have been broadly **stable** over recent decades, but are **rising in young men aged 15 to 19**."
              ]
            },
            {
              "type": "table",
              "caption": "Mental disorders among people who died by suicide (systematic review of 15,629 general-population cases)",
              "head": [
                "Finding",
                "Figure"
              ],
              "rows": [
                [
                  "Had a diagnosable mental disorder",
                  "**98%**"
                ],
                [
                  "Mood disorders",
                  "**35.8%**"
                ],
                [
                  "Substance-related disorders",
                  "**22.4%**"
                ],
                [
                  "Personality disorders",
                  "**11.6%**"
                ],
                [
                  "Schizophrenia",
                  "**10.6%**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Official suicide counts can mislead",
              "text": "Low- and middle-income countries may undercount suicide. In South India a **verbal autopsy** found rates **10 times** the official figure. The 2020 figures in this section are **projections** made from trends, not observed counts."
            },
            {
              "type": "case",
              "title": "A district officer reads the suicide data",
              "text": "A 40-year-old health officer in a rural farming district notices that most local suicides are by drinking pesticide, and that young men aged 15 to 19 are a growing share of deaths. She asks which disorders are most often found in people who die by suicide.",
              "point": "Pesticide self-poisoning is a major method in the Asia-Pacific region, and young men 15 to 19 show a rising trend. In the systematic review, 98 percent of people who died by suicide had a diagnosable disorder, most often a mood disorder (35.8 percent)."
            },
            {
              "type": "update",
              "year": 2025,
              "title": "Newer WHO estimates of the burden",
              "text": "WHO's **World mental health report** (2022) estimated that **970 million** people, about **1 in 8** (13 percent), lived with a mental disorder in **2019**, most often **anxiety** and **depressive** disorders, and that the point prevalence stayed near 13 percent from 2000 to 2019. In **September 2025** WHO's update, **World mental health today**, put the number above **1 billion**, and estimated **727,000** suicide deaths in **2021**. Mental disorders account for about **1 in 6 years lived with disability**, and people with severe mental health conditions die **10 to 20 years earlier** than the general population.",
              "source": "WHO, World mental health report: transforming mental health for all (2022); WHO, Over a billion people living with mental health conditions (news release, 2 September 2025); WHO, Mental health: scaling up mental health care"
            }
          ]
        },
        {
          "id": "s31-gap",
          "title": "Treatment gap and projected treatment effectiveness at population level",
          "blocks": [
            {
              "type": "p",
              "text": "Trials have shown clearly that both **drug** and **psychosocial** treatments work for **psychotic, mood, substance-related and anxiety disorders**. This evidence comes from **low- and middle-income** countries as well as **high-income** countries. So the problem is not a lack of effective treatment."
            },
            {
              "type": "p",
              "text": "The problem is the **treatment gap**: the difference between the number of people who need care and the number who get it. The gap is **large for every mental disorder** worldwide and **largest in low-income countries**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Efficacy is not the issue",
              "text": "Treatments for psychotic, mood, substance-related and anxiety disorders have proven efficacy in **poor and rich countries alike**. The global problem is the **treatment gap**, widest in **low-income countries**."
            },
            {
              "type": "h",
              "text": "Who delays or fails to seek treatment?"
            },
            {
              "type": "p",
              "text": "The **World Mental Health (WMH) Surveys** looked at whether and how fast people with a disorder first made treatment contact. Failure to seek care, and delay in seeking it, were generally greater in four groups."
            },
            {
              "type": "table",
              "caption": "Groups with more failure and delay in treatment seeking (World Mental Health Surveys)",
              "head": [
                "Group with more failure or delay",
                "Compared with"
              ],
              "rows": [
                [
                  "People in **low-income countries**",
                  "People in higher-income countries"
                ],
                [
                  "**Older cohorts**",
                  "Younger cohorts"
                ],
                [
                  "**Men**",
                  "Women"
                ],
                [
                  "Cases with **earlier age of onset**",
                  "Cases with later onset"
                ]
              ]
            },
            {
              "type": "p",
              "text": "People with **mood disorders** reached treatment **sooner** than people with other mental disorders. The likely reason is that many countries have aimed **screening campaigns** and **public information campaigns** at these disorders."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Campaigns shorten the delay",
              "text": "The earlier treatment contact seen for **mood disorders** is likely due to targeted **screening** and **public awareness** campaigns. This suggests that focused public effort can narrow the gap for a given disorder."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Early onset does not mean early care",
              "text": "A disorder that begins in **childhood or youth** is linked to **more** failure and delay in seeking help, not less. Do not assume a long-standing problem has already been treated."
            },
            {
              "type": "steps",
              "title": "Why the gap matters, step by step",
              "items": [
                [
                  "Disorders are common",
                  "Over 25 percent lifetime risk; 24 percent current prevalence at WHO primary care sites."
                ],
                [
                  "They are disabling",
                  "Depression and bipolar disorder are rated severely disabling more often than chronic physical illnesses (Table 31-1)."
                ],
                [
                  "Treatment works",
                  "Efficacy shown in low-, middle- and high-income countries."
                ],
                [
                  "Few get it",
                  "The treatment gap is large everywhere and greatest in low-income countries."
                ],
                [
                  "Resources are scarce",
                  "Policies, services and staff are lacking, especially in poor countries (next section)."
                ]
              ]
            },
            {
              "type": "case",
              "title": "A late first visit",
              "text": "A 58-year-old farmer in a low-income country comes to a district clinic with panic attacks and heavy drinking that began when he was a teenager. He has never seen a health worker for these problems before.",
              "point": "Being male, being older, living in a low-income country and having an early onset were each linked to more failure and delay in the WMH Surveys. He fits all four."
            },
            {
              "type": "case",
              "title": "Why she was seen sooner",
              "text": "A 34-year-old teacher with depression sought help within months of onset after seeing a public poster campaign and being screened at her clinic. Her brother, with an anxiety disorder of similar length, has never been treated.",
              "point": "People with mood disorders tend to make earlier treatment contact, likely because many countries target mood disorders with screening and public information campaigns."
            },
            {
              "type": "update",
              "year": 2025,
              "title": "The treatment gap in recent WHO data",
              "text": "WHO's 2022 report found that about **71 percent** of people with **psychosis** worldwide receive **no** mental health services, and only about **12 percent** of people with psychosis in **low-income countries** do. WHO's 2025 figures show that in low-income countries **fewer than 10 percent** of people with mental health conditions receive care, compared with **more than half** in higher-income countries.",
              "source": "WHO, World mental health report: transforming mental health for all (2022); WHO, Over a billion people living with mental health conditions (news release, 2 September 2025)"
            }
          ]
        },
        {
          "id": "s31-res",
          "title": "Resources for mental health care worldwide",
          "blocks": [
            {
              "type": "p",
              "text": "Most figures here come from the WHO **Mental Health Atlas 2005**. They show that mental health resources are **grossly inadequate** for the need and **very unequal** between countries, most of all between rich and poor (high- versus low-income) countries. Within poor countries, services also cluster in **cities**, leaving large areas with **no mental health care at all**."
            },
            {
              "type": "defs",
              "items": [
                [
                  "Mental health policy",
                  "An official government or health ministry document that sets the **goals** for improving a country's mental health, ranks the **priorities** among them, and gives the **main directions** for reaching them."
                ],
                [
                  "Mental Health Atlas 2005",
                  "WHO survey of country mental health resources; source for Tables 31-4, 31-5 and 31-6."
                ]
              ]
            },
            {
              "type": "h",
              "text": "Policy"
            },
            {
              "type": "list",
              "items": [
                "A mental health policy exists in only **62.1 percent** of countries; together they hold **68.3 percent** of the world's people.",
                "By income: **low-income** countries **58.8 percent**, **high-income** countries **70.5 percent**.",
                "**Africa**: half of countries (**50 percent**).",
                "**Southeast Asia**: about **half** of countries have one, but it reaches only around **one quarter** of people."
              ]
            },
            {
              "type": "table",
              "caption": "Mental health policy by WHO region (see Table 31-4; Mental Health Atlas 2005)",
              "head": [
                "WHO region",
                "% of population covered",
                "% of countries with a policy"
              ],
              "rows": [
                [
                  "Africa",
                  "69.4",
                  "**50.0**"
                ],
                [
                  "Americas",
                  "64.2",
                  "72.7"
                ],
                [
                  "Eastern Mediterranean",
                  "93.8",
                  "72.7"
                ],
                [
                  "Europe",
                  "89.1",
                  "70.6"
                ],
                [
                  "Southeast Asia",
                  "**23.6**",
                  "54.5"
                ],
                [
                  "Western Pacific",
                  "93.8",
                  "**48.1**"
                ]
              ]
            },
            {
              "type": "h",
              "text": "Services and medicines"
            },
            {
              "type": "table",
              "wide": true,
              "caption": "Availability of services, by income group",
              "head": [
                "Service",
                "All countries",
                "Low-income",
                "High-income"
              ],
              "rows": [
                [
                  "Community care facilities",
                  "**68.1%**",
                  "**51.7%**",
                  "**93%**"
                ],
                [
                  "Treatment for severe mental disorders in primary care",
                  "**60.9%**",
                  "**55.2%**",
                  "**79.5%**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "About **one quarter** of low-income countries do not supply even basic **antidepressants** in primary care. In many others the supply misses some regions or is very irregular. Because health facilities often lack medicines, **patients and families pay out of pocket**."
            },
            {
              "type": "h",
              "text": "Financing"
            },
            {
              "type": "list",
              "items": [
                "In **Europe**, **61.5 percent** of countries give mental health **more than 5 percent** of the health budget.",
                "**70 percent** of **African** and **50 percent** of **Southeast Asian** countries spend **under 1 percent**.",
                "Every country where **out-of-pocket payment** is the main way to pay for mental health care is **low-income or lower-middle-income**.",
                "Almost every country where **social insurance** is the main method is **high-income or upper-middle-income**."
              ]
            },
            {
              "type": "table",
              "caption": "Share of countries where out-of-pocket payment is the main way of paying for mental health care, by WHO region (see Table 31-5)",
              "head": [
                "WHO region",
                "% of countries"
              ],
              "rows": [
                [
                  "Africa",
                  "**38.6**"
                ],
                [
                  "Western Pacific",
                  "18.5"
                ],
                [
                  "Southeast Asia",
                  "**30.0**"
                ],
                [
                  "Eastern Mediterranean",
                  "15.8"
                ],
                [
                  "Americas",
                  "12.9"
                ],
                [
                  "Europe",
                  "**0**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Out-of-pocket financing",
              "text": "Out-of-pocket payment is the main funding method in **38.6%** of African and **30%** of Southeast Asian countries, and in **no European** country. Countries relying mainly on it are all **low- or lower-middle-income**."
            },
            {
              "type": "h",
              "text": "Workforce"
            },
            {
              "type": "table",
              "caption": "Median mental health professionals per 100,000 people, by WHO region (see Table 31-6)",
              "wide": true,
              "head": [
                "WHO region",
                "Psychiatrists",
                "Psychologists in mental health",
                "Psychiatric nurses"
              ],
              "rows": [
                [
                  "Africa",
                  "**0.04**",
                  "0.05",
                  "0.20"
                ],
                [
                  "Americas",
                  "2.00",
                  "2.80",
                  "2.60"
                ],
                [
                  "Eastern Mediterranean",
                  "0.95",
                  "0.60",
                  "1.25"
                ],
                [
                  "Europe",
                  "**9.80**",
                  "**3.10**",
                  "**24.80**"
                ],
                [
                  "Southeast Asia",
                  "0.20",
                  "**0.03**",
                  "**0.10**"
                ],
                [
                  "Western Pacific",
                  "0.32",
                  "0.03",
                  "0.50"
                ]
              ]
            },
            {
              "type": "list",
              "title": "More workforce facts",
              "items": [
                "Median psychiatrists per 100,000 by income: **low-income** countries **0.1**, **high-income** countries **9.2**.",
                "In **two thirds** of low-income countries there are **fewer than one** psychiatrist for every 100,000 people.",
                "**Chad** (9 million people), **Eritrea** (4.2 million) and **Liberia** (3.5 million): only **one** psychiatrist per 100,000 each (as printed).",
                "**Afghanistan** (25 million people), **Rwanda** (8.5 million) and **Togo** (5 million): only **two** psychiatrists per 100,000 each (as printed).",
                "Roughly **69 percent** of low-income countries: **under one psychologist** per 100,000.",
                "**Brain drain**: large numbers of psychiatrists leave poorer (low- and middle-income) nations for high-income ones, within a wider outflow of health workers; this is well documented.",
                "The **United Kingdom** draws much of its mental health workforce from **India** and from parts of **sub-Saharan Africa**. The UK has **110 psychiatrists per million**; India has **2 per million**, sub-Saharan Africa **under 1 per million**."
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Check the units",
              "text": "Workforce numbers switch between **per 100,000** (Table 31-6) and **per million** (the UK, India and sub-Saharan Africa comparison). Convert before you compare."
            },
            {
              "type": "h",
              "text": "Child and adolescent mental health"
            },
            {
              "type": "list",
              "items": [
                "Only **7 percent** of countries have a dedicated policy for **child and adolescent mental health** (WHO).",
                "In **fewer than one third** of countries can a single institution or government body be named as having overall charge of children's mental health.",
                "**School-based services** exist almost only in high-income countries; and even within **Europe**, just **17 percent** of countries have an adequate number.",
                "**Pediatric mental health beds**: none identified in **low-income** countries; found in half (**50 percent**) of **high-income** countries.",
                "Outside **South Africa**, African countries have as few as **10** psychiatrists trained for work with children.",
                "In **Europe**, child psychiatrist supply runs between **1 in 5,300** and **1 in 51,800** people.",
                "Over **70 percent** of countries have **no essential psychotropic medicines list for children**.",
                "**Psychostimulants** for children with **ADHD** are **banned or unavailable** in **45 percent** of countries."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Children fare worst",
              "text": "Child and adolescent services are even thinner than adult services: a specific policy in only **7 percent** of countries, and no child psychiatric beds identified in low-income countries."
            },
            {
              "type": "case",
              "title": "Paying for an antidepressant herself",
              "text": "A 29-year-old mother in a rural district of a low-income African country is diagnosed with depression at a health post. The post has no antidepressant in stock, so her family buys the medicine privately with their own money.",
              "point": "About a quarter of low-income countries do not supply even basic antidepressants in primary care, and families often pay out of pocket. Out-of-pocket payment is the main funding method in 38.6 percent of African countries."
            },
            {
              "type": "case",
              "title": "A boy with ADHD and no stimulant",
              "text": "A 9-year-old boy in a country where stimulant drugs cannot be used in children is diagnosed with ADHD. There is no child psychiatrist in his region and no school-based mental health service.",
              "point": "Child mental health resources are the scarcest of all: in 45 percent of countries psychostimulants are prohibited or unavailable for children with ADHD, and school-based services are almost limited to high-income countries."
            },
            {
              "type": "update",
              "year": 2025,
              "title": "Mental Health Atlas 2024: resources today",
              "text": "WHO's **Mental Health Atlas 2024** (released September 2025; **144** of 194 member states responded) found **median government spending** on mental health still at about **2 percent** of health budgets, **unchanged since 2017**, ranging from as little as **US$0.04** per person in low-income countries to up to **US$65** in high-income countries. The global median is about **13 specialized mental health workers per 100,000** people (13.5 in the Atlas), with only about **1.5 per 100,000** for children and adolescents. Only **45 percent** of countries that evaluated their laws found them fully in line with international **human rights** standards. Compare these with the older figures in Tables 31-4 to 31-6.",
              "source": "WHO, Mental Health Atlas 2024 (2025); WHO, Over a billion people living with mental health conditions (news release, 2 September 2025)"
            }
          ]
        }
      ]
    },
    {
      "title": "Programs, stigma, comorbidity and ethics",
      "sections": [
        {
          "id": "s31-prog",
          "title": "Principles for building mental health programs, and barriers to change",
          "blocks": [
            {
              "type": "p",
              "text": "The **World Health Organization (WHO)** has set out ten principles that any country should follow when it builds a mental health program. They move care out of the large hospital and into **primary care** and the **community**, and they ask governments to back the change with policy, staff and research."
            },
            {
              "type": "list",
              "title": "WHO's ten principles for building mental health programs",
              "items": [
                "Deliver treatment through **primary care**.",
                "Make **psychotropic medications** available.",
                "Provide care **in the community**.",
                "**Educate the public**.",
                "Involve **communities, families and consumers**.",
                "Set up **national policies and legislation**.",
                "Develop **human resources** (train and deploy staff).",
                "Link mental health with **other relevant sectors**.",
                "**Monitor** the mental health of the community.",
                "Support **more research**."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Ten WHO principles",
              "text": "Boards like the first few: treatment in **primary care**, availability of **psychotropic drugs**, and **community-based care**. The list closes with **monitoring** community mental health and **supporting research**."
            },
            {
              "type": "h",
              "text": "Suicide prevention worldwide"
            },
            {
              "type": "list",
              "title": "Six guiding principles for preventing suicide",
              "items": [
                "Restrict **access to means**, for example **pesticides** and **firearms**.",
                "**Treat people with mental disorders**.",
                "Improve how the **media portray suicide**.",
                "Train **primary health care staff**.",
                "Run **school-based programs**.",
                "Set up **hotlines and crisis centers**."
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Means restriction is concrete",
              "text": "The two means named are **pesticides** and **firearms**. Making a lethal method harder to reach is a population measure that does not depend on each person seeking help."
            },
            {
              "type": "h",
              "text": "Barriers to change and suggested solutions"
            },
            {
              "type": "p",
              "text": "WHO also lists what most often blocks these reforms, and a matching set of fixes. Many barriers are human: people who hold power or comfort in the old system resist the new one."
            },
            {
              "type": "table",
              "caption": "WHO barriers to implementing mental health programs, and the proposed solutions",
              "head": [
                "Barriers",
                "Suggested solutions"
              ],
              "rows": [
                [
                  "Some **stakeholders resist** the change",
                  "An **\"all-winners approach\"** that weighs the needs of every stakeholder"
                ],
                [
                  "Health authorities **doubt that mental health interventions work**",
                  "**Pilot projects**, evaluated for health effects and **consumer satisfaction**"
                ],
                [
                  "**No consensus** among stakeholders on how to write or carry out the policy",
                  "**Technical reports** from **international experts**"
                ],
                [
                  "**Scarce money and staff**",
                  "Start in a **demonstration area** and run **cost-effectiveness studies**"
                ],
                [
                  "**Other health priorities** compete for the same funds",
                  "**Tie** mental health to **other health priorities**"
                ],
                [
                  "**Primary care teams feel overburdened** and reject the policy",
                  "Show primary care that these patients **already sit, unrecognized, in their workload**, and that the load **shrinks** once the disorders are found and treated"
                ],
                [
                  "Many specialists **prefer to stay in hospitals** rather than work in the community or with primary care",
                  "(No single matching solution is listed; the six solutions above apply to the barriers as a whole.)"
                ]
              ],
              "note": "The source gives seven barriers and six solutions as two separate lists; the pairing in rows is a teaching aid, not a strict one-to-one match."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Do not pitch it as extra work",
              "text": "Primary care teams resist when mental health looks like **one more task**. The suggested argument is the opposite: these patients are **already** in their clinics, hidden, and treating them **lowers** the total workload."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Start small, measure, then scale",
              "text": "A **pilot project** or a single **demonstration area**, with **cost-effectiveness** data, answers the authority who doubts that mental health care works and the budget officer who says there is no money."
            }
          ]
        },
        {
          "id": "s31-stigma",
          "title": "Stigma toward people with mental disorders",
          "blocks": [
            {
              "type": "p",
              "text": "Stigma against people with mental disorders is **widespread**. It shows up among **ordinary citizens** and **even in mental health staff**. It may be **milder in some Asian and African countries**, but it is far from absent there."
            },
            {
              "type": "table",
              "caption": "The WPA Stigma Programme study in India",
              "head": [
                "Item",
                "Finding"
              ],
              "rows": [
                [
                  "Program",
                  "The **WPA**'s **Stigma Programme** (WPA, World Psychiatric Association)"
                ],
                [
                  "Sample",
                  "**463** people with **schizophrenia** plus **651 relatives**, across **four cities**"
                ],
                [
                  "Main result",
                  "About **two-thirds** had **experienced discrimination**"
                ],
                [
                  "Most stigmatized groups",
                  "**Women** and **urban** residents"
                ],
                [
                  "Men",
                  "More discrimination at **work** (the job area)"
                ],
                [
                  "Women",
                  "More problems in **family and social** life"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "India WPA stigma study",
              "text": "**Two-thirds** reported discrimination. **Women** and **city dwellers** were hit hardest; men mainly at **work**, women mainly in **family and social** life."
            },
            {
              "type": "h",
              "text": "Why mental illness is judged differently"
            },
            {
              "type": "p",
              "text": "The public tends to see a physical disability as bad luck. A mental disorder, by contrast, is often seen as something the person **controls** and **caused**. In many countries people still blame **\"weakness,\" \"laziness\"** or a **\"lack of willpower.\"**"
            },
            {
              "type": "list",
              "title": "Consequences of stigma",
              "items": [
                "**Public avoidance** of people with mental disorders.",
                "**Systematic discrimination**.",
                "**Less help-seeking**.",
                "Exclusion from **disability benefits**, even where a country provides them for other conditions.",
                "Mental disorders often **left out of social and private health insurance** schemes."
              ]
            },
            {
              "type": "p",
              "text": "A **1996** survey of a probability sample of **1,444** US adults found that **more than half** would not spend an evening socializing with, work beside, or accept a family member marrying a person with mental illness."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Shame blocks care",
              "text": "**Shame** ranks among the **chief obstacles to seeking help**, in **developed and developing countries** alike. A patient who delays care may be acting from shame, not indifference."
            },
            {
              "type": "h",
              "text": "Three ways to fight stigma"
            },
            {
              "type": "defs",
              "title": "Anti-stigma strategies",
              "items": [
                [
                  "Protest",
                  "Campaigns that object to stigmatizing acts. There is **some evidence** they reduce **stigmatizing behaviors**."
                ],
                [
                  "Education",
                  "Builds **understanding** of mental illness. Better-informed people may **back stigma and discrimination less often**."
                ],
                [
                  "Contact",
                  "Meeting and knowing a person with mental illness. Contact is **inversely related** to endorsing stigma: more contact, less stigma."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Contact works through people",
              "text": "Of the three strategies, **contact** is the one described by a direct **inverse relationship**: the more people know someone with a mental illness, the less they back stigmatizing behavior."
            },
            {
              "type": "case",
              "title": "A young man who will not come back",
              "text": "A 27-year-old man with schizophrenia stops attending a city clinic after his employer learns of his diagnosis and moves him off his team. He tells the nurse his family calls his illness laziness and that he is ashamed to be seen at the clinic.",
              "point": "His story holds the classic stigma pattern: work discrimination for a man, the belief that mental illness reflects weak will, and shame that cuts help-seeking."
            }
          ]
        },
        {
          "id": "s31-phys",
          "title": "Relationships between mental and physical diseases",
          "blocks": [
            {
              "type": "p",
              "text": "People with **severe mental disorders** die more often from **physical illness** than the general population. They also carry more physical disease, get **worse medical care**, and face more barriers to reaching it."
            },
            {
              "type": "table",
              "caption": "Excess mortality in mental disorders",
              "head": [
                "Group and setting",
                "Measure",
                "Finding"
              ],
              "rows": [
                [
                  "Schizophrenia, UK follow-up",
                  "SMR, natural causes",
                  "**2.32** (death rate more than **twice** the general population)"
                ],
                [
                  "Schizophrenia, UK follow-up",
                  "SMR, causes **avoidable by appropriate treatment**",
                  "**4.68**"
                ],
                [
                  "Schizophrenia, UK follow-up",
                  "Highest SMRs by system",
                  "**Endocrine, nervous, respiratory, circulatory, gastrointestinal**"
                ],
                [
                  "Bipolar disorder",
                  "Nonsuicide all-cause SMR",
                  "**1.9** in men, **2.1** in women"
                ],
                [
                  "Dementia",
                  "Relative risk",
                  "**2.63** (95% CI 2.17 to 3.21)"
                ],
                [
                  "Depression, meta-analysis of **15** population studies",
                  "Pooled odds ratio, all-cause death",
                  "**1.7** (confidence interval 1.5 to 2.0)"
                ],
                [
                  "Major depression, **Ethiopia**",
                  "SMR",
                  "**3.55** (95% CI 1.97 to 6.39)"
                ],
                [
                  "Schizophrenia, **Ethiopia**",
                  "Death rate",
                  "Almost **5%** per year"
                ]
              ],
              "note": "SMR, standardized mortality ratio. Data from low-income countries are limited; the Ethiopian study was a large population study.",
              "wide": false
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Avoidable deaths",
              "text": "In the UK schizophrenia cohort the SMR for natural causes was **2.32**, but for deaths **avoidable with proper treatment** it was **4.68**. The gap points to failures of care, not only to the illness."
            },
            {
              "type": "h",
              "text": "More physical disease"
            },
            {
              "type": "list",
              "items": [
                "US study: people with **psychotic disorders** had more **heart disease, hypertension, diabetes, asthma, acute respiratory disorders, gastrointestinal disorders, skin infections** and **cancers (malignant neoplasms)**. The excess held **even without a substance use disorder**.",
                "Nigeria: **55.2 percent** of people with **schizophrenia-spectrum** disorders at a first psychiatric referral had at least one physical disease, versus **11.8 percent** of those with **neurotic disorders**.",
                "**Depression** predicts worse **coronary heart disease** outcomes, **fatal myocardial infarction** among them. In the other direction, depression becomes more common after an MI, most of all in the **first month**.",
                "Depression raises the risk of **type II diabetes**.",
                "South Asia: **maternal perinatal depression** is linked with **malnutrition** and **stunting** in infants at **6 months**.",
                "Severe mental disorders raise the risk of **HIV infection**, though rates **vary widely** across the world.",
                "A multicenter study across five world regions found more **depressive disorder** in **symptomatic** HIV-positive people than in asymptomatic HIV-positive people or seronegative controls.",
                "Adherence to **HAART** (highly active antiretroviral therapy) falls with **depression**, **substance abuse** and **cognitive impairment**, in rich and poor countries alike."
              ]
            },
            {
              "type": "table",
              "caption": "Obesity in severe mental illness (SMI), UK study",
              "head": [
                "Group",
                "Obese (BMI over 30): SMI vs general",
                "Morbidly obese (BMI over 40): SMI vs general"
              ],
              "rows": [
                [
                  "All adults",
                  "**35.0%** vs 19.4%",
                  "**3.7%** vs 1.3%"
                ],
                [
                  "Men aged 18 to 44",
                  "**28.7%** vs 13.6%",
                  "**3.7%** vs 0.4%"
                ],
                [
                  "Women aged 18 to 44",
                  "**50.6%** vs 16.6%",
                  "**7.4%** vs 2.0%"
                ]
              ],
              "note": "The excess is most striking in young women."
            },
            {
              "type": "p",
              "text": "A worldwide meta-analysis tied **schizophrenia** strongly to **current smoking**: weighted average odds ratio **5.9** (**7.2** in men, **3.3** in women). The link held against controls with other severe mental illness (odds ratio **1.9**). People with schizophrenia also more often showed **heavy smoking** and **high nicotine dependence**."
            },
            {
              "type": "h",
              "text": "Worse care and poorer access"
            },
            {
              "type": "p",
              "text": "In a US study, patients with **schizophrenia** had more **adverse events** in medical and surgical wards: **infections caused by medical care**, **postoperative respiratory failure**, **postoperative DVT or pulmonary embolism** and **postoperative sepsis**. Each raised the odds of **ICU admission** and **death**."
            },
            {
              "type": "table",
              "caption": "US access findings for people with mental disorders",
              "head": [
                "Problem",
                "Odds ratio"
              ],
              "rows": [
                [
                  "Denied insurance for a **preexisting condition**",
                  "**2.18** (about twice as likely)"
                ],
                [
                  "Delayed care because of **cost**",
                  "**1.76**"
                ],
                [
                  "Could not get **needed medical care**",
                  "**2.30**"
                ]
              ]
            },
            {
              "type": "list",
              "title": "Why physical illness is missed",
              "items": [
                "Primary care may label complaints **\"psychosomatic\"**, lack skill, or feel uneasy with these patients; **stigma** may lie underneath.",
                "Ward staff may **minimize or misread somatic symptoms**, misuse **restraints or sedatives**, or overlook **drug interactions** with psychotropics.",
                "Many psychiatrists **cannot or will not do physical or neurologic examinations**, or are out of date on common medical illness."
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Not everything is psychosomatic",
              "text": "Calling a new complaint **psychosomatic** in a patient with schizophrenia is a known route to a **missed diagnosis**. Examine the patient."
            },
            {
              "type": "steps",
              "title": "Closing the physical health gap",
              "items": [
                [
                  "Raise awareness",
                  "Among mental health staff, **primary care providers**, and **patients and families**."
                ],
                [
                  "Educate and train",
                  "Mental health staff learn at least **basic medical tasks** and the common reasons physical illness is missed. Primary care staff overcome **reluctance**; the core issue is **attitude**, not just knowledge."
                ],
                [
                  "Name a responsible clinician",
                  "One **clearly identified professional** owns each patient's physical care."
                ],
                [
                  "Assess routinely",
                  "Services give at least a **standard routine assessment** and follow **antipsychotic monitoring guidelines**."
                ],
                [
                  "Involve the patient",
                  "For example, patients **monitor and chart their own weight**."
                ],
                [
                  "Offer lifestyle programs",
                  "Routine **diet and exercise** programs. **Flexible quit-smoking** programs, with **some success** so far, may suit some settings."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Attitude first",
              "text": "For primary care providers the main hurdle is described as **attitude** more than knowledge or skill. Practical ways to **talk with** patients with severe mental illness help."
            }
          ]
        },
        {
          "id": "s31-ethics",
          "title": "Ethical issues in mental health care",
          "blocks": [
            {
              "type": "p",
              "text": "Guarding and advancing the **human rights** of those with mental disorders is becoming a **worldwide priority**. Several international documents set the standard."
            },
            {
              "type": "table",
              "caption": "Key international human rights and ethics documents",
              "head": [
                "Document",
                "Year and body",
                "Core content"
              ],
              "rows": [
                [
                  "**UN Resolution 46/119** (on protecting persons with mental illness and improving mental health care)",
                  "**1991**, United Nations",
                  "Codified human rights and the **right to treatment**, in **25 principles**"
                ],
                [
                  "**Declaration of Caracas**",
                  "**1990**, a regional conference on restructuring psychiatric care, **Latin America**",
                  "Care must protect **dignity** plus **civil and human rights** and keep people **in their communities**; laws must protect rights and services must enforce them"
                ],
                [
                  "**Banjul Charter** (Africa's charter of human and peoples' rights)",
                  "**Africa**; **legally binding**, overseen by the **African Commission** for these rights",
                  "**Article 5**: respect for inherent **dignity**; forbids every form of **degradation**, for example **cruel, inhuman or degrading treatment**"
                ],
                [
                  "**Madrid Declaration**",
                  "**1996**, **WPA**",
                  "Ethical principles for all national psychiatric societies; **seven general guidelines**"
                ]
              ],
              "wide": false
            },
            {
              "type": "list",
              "title": "Areas covered by the 25 UN principles (1991)",
              "items": [
                "What counts as **mental illness** (definition).",
                "Keeping information **confidential**.",
                "Care standards, among them **involuntary admission** and **consent**.",
                "Patients' rights **within facilities**.",
                "Protecting **minors**.",
                "Funding and **resources** for facilities.",
                "How **community and culture** matter.",
                "**Review bodies** that protect **offenders** with mental disorders.",
                "**Procedural safeguards** for rights."
              ]
            },
            {
              "type": "p",
              "text": "The UN urged governments to advance these principles through **legislative, judicial, administrative, educational** and other means. Even so, violations persist. In many **low- and middle-income countries**, hospital patients are **restrained or secluded for long periods**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Rights on paper, not in practice",
              "text": "A resolution does not end abuse. **Prolonged restraint and seclusion** still occur in many low- and middle-income countries."
            },
            {
              "type": "list",
              "title": "What WHO says mental health laws should cover",
              "items": [
                "**Informed consent** before treatment.",
                "Care that is the **least restrictive** possible.",
                "A right of access to **basic care**.",
                "Admission, both **voluntary and involuntary**.",
                "Questions of **competence**.",
                "**Regular review** of decisions.",
                "**Confidentiality**.",
                "**Rehabilitation**.",
                "**Accrediting** staff and facilities.",
                "Rights of **families and caregivers**."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Mental health laws by income",
              "text": "A specific mental health law exists in **74 percent** of **low-income** nations, compared with **92.7 percent** of **high-income** nations."
            },
            {
              "type": "steps",
              "title": "The seven general guidelines of the Madrid Declaration (WPA, 1996)",
              "items": [
                [
                  "1. Best therapy, least restriction",
                  "Give the **best available treatment**, in line with science and ethics, and choose interventions **least restrictive** of freedom."
                ],
                [
                  "2. Keep learning",
                  "Stay **current** with the field and **pass on** new knowledge."
                ],
                [
                  "3. Partnership",
                  "Accept the patient as a **partner by right**; build the relationship on **mutual trust and respect** so the patient can make **free and informed decisions**."
                ],
                [
                  "4. Best interest and consent",
                  "Treat only in the **patient's best interest**. **Never treat against the patient's wishes** unless holding treatment back would **endanger the life** of the patient or of those around them."
                ],
                [
                  "5. Assessment purpose",
                  "When asked to assess someone, **tell the person the purpose** of the assessment."
                ],
                [
                  "6. Confidentiality",
                  "Keep therapeutic information **confidential** and use it **only to improve the patient's mental health**."
                ],
                [
                  "7. Research",
                  "Psychiatric patients are **especially vulnerable** research subjects; take **extra care** to protect their **autonomy** and **mental and physical integrity**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Assessment for a third party",
              "text": "When a court, employer or agency asks for an assessment, guideline 5 still applies: the person must be **told why** they are being assessed."
            },
            {
              "type": "case",
              "title": "Ms. R, refusing treatment",
              "text": "A 45-year-old woman with a long psychotic illness refuses a new medication. She is not suicidal, has no history of violence, and her life is not at risk. The ward team wants to give it anyway because they believe it will help.",
              "point": "Under the Madrid Declaration, treatment against a patient's will is acceptable only when withholding it would endanger her life or the lives of those around her; otherwise her informed refusal stands."
            }
          ]
        },
        {
          "id": "s31-orgs",
          "title": "International mental health organizations and future perspectives",
          "blocks": [
            {
              "type": "p",
              "text": "Many international bodies work in mental health. They fall into a few types: the **WHO** (the leading public health agency), **professional associations** (the largest is the **WPA**), groups of **users and families**, and groups that combine **professionals with users and families**."
            },
            {
              "type": "table",
              "caption": "International organizations in mental health",
              "head": [
                "Organization",
                "Type",
                "Key facts"
              ],
              "rows": [
                [
                  "**WHO**",
                  "UN agency; world's leading **public health** agency",
                  "Funded by **192 member states**; **six regions**; mental health and substance abuse department based in **Geneva**"
                ],
                [
                  "**WPA**",
                  "Association of **national psychiatric societies**; largest professional body",
                  "**134** member societies, **122** countries, over **200,000** psychiatrists"
                ],
                [
                  "**World Fellowship (Schizophrenia and Allied Disorders)**",
                  "**Users and families**",
                  "Membership-based advocacy"
                ],
                [
                  "**GAMIAN** (a global alliance of advocacy networks on mental illness)",
                  "**Users and families**",
                  "Membership-based advocacy"
                ],
                [
                  "**WFMH** (World Federation for Mental Health)",
                  "**Professionals plus users and families**; multidisciplinary",
                  "Advocacy and education; runs **World Mental Health Day**"
                ]
              ],
              "wide": false
            },
            {
              "type": "update",
              "year": 2018,
              "title": "Corrections: three details about WHO and the Lancet",
              "text": "WHO now has **194 member states** (the chapter says 192). The **World Health Report 2001** and **Mental Health: New Understanding, New Hope** are **one report**: the second is its title. The Lancet published a **series on global mental health in 2007**, which called for scaling up services in low- and middle-income countries; the **Lancet Commission on global mental health and sustainable development** (Patel and colleagues) came out in **October 2018** and widened the agenda from closing the treatment gap to the mental health of whole populations.",
              "source": "WHO, Comprehensive mental health action plan 2013-2030; WHO, The World Health Report 2001: mental disorders affect one in four people (news release, 2001); Patel V et al., The Lancet Commission on global mental health and sustainable development, Lancet 2018"
            },
            {
              "type": "h",
              "text": "WHO"
            },
            {
              "type": "list",
              "items": [
                "Six regional groupings: **Africa, Americas, Europe, Southeast Asia, Eastern Mediterranean** and **Western Pacific**.",
                "The mental health department in Geneva has **mental health advisors in every regional office**.",
                "Main functions: **leading and coordinating** global health work, and **technical cooperation** with member countries.",
                "**World Health Report 2001** and the report titled **Mental Health: New Understanding, New Hope**, given over entirely to mental health. It summarized the present and projected impact of mental disorders, principles of policy and service provision, and recommendations countries can adapt to their own needs and resources.",
                "**Project Atlas** collects data on **mental health resources** worldwide. Global and regional analyses first appeared in **2001** and were updated in **2005**. Reports cover, for example, **child and adolescent** resources and **psychiatric education and training** (the latter with the WPA)."
              ]
            },
            {
              "type": "h",
              "text": "WPA and WFMH"
            },
            {
              "type": "list",
              "items": [
                "The WPA aims to build the **knowledge and skills** needed for mental health work and care of the mentally ill.",
                "It holds a **World Congress of Psychiatry** once every **3 years**, plus international, regional and thematic meetings.",
                "It has **65 scientific sections** that share information and foster joint work in specific fields.",
                "It issues books, teaching programs and consensus statements; one is the **Declaration of Madrid**.",
                "Its official journal, **World Psychiatry**, appears in **English, Spanish and Chinese**, is listed in **PubMed** and **Current Contents**, and goes to over **33,000** psychiatrists.",
                "The **WFMH** promotes mental health **awareness, prevention, advocacy** and **recovery-focused** best practice. It organizes **World Mental Health Day** every **October 10**, with a new theme each year."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Who does what",
              "text": "**WHO**: UN agency, policy and technical cooperation, **Project Atlas**. **WPA**: national psychiatric societies, **World Psychiatry**, **Madrid Declaration**. **WFMH**: professionals with users and families, **World Mental Health Day (October 10)**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Keep the user groups apart",
              "text": "**GAMIAN** and the **World Fellowship (Schizophrenia and Allied Disorders)** are run by **users and families**. The **WFMH** mixes **professionals** with users and families. Do not confuse the two kinds."
            },
            {
              "type": "h",
              "text": "Future perspectives"
            },
            {
              "type": "p",
              "text": "Many groups have set priorities for future international action. A notable one is a document by **39 leaders** of the **Lancet Commission (global mental health and sustainable development)** (also called the **Global Mental Health Commission**)."
            },
            {
              "type": "table",
              "caption": "The five goals of the Global Mental Health Commission and example strategies",
              "head": [
                "Goal",
                "Example strategies"
              ],
              "rows": [
                [
                  "1. Make mental health a **public health priority**",
                  "**Uniform, clear advocacy messages**; educate **government and donor** decision-makers on the **cost-effectiveness** of care and the **public health weight** of mental disorders"
                ],
                [
                  "2. Improve the **organization of services**",
                  "**Incentives** to overcome **vested interests** that block change; **international technical help** so countries can learn from **successful reforms** elsewhere"
                ],
                [
                  "3. **Integrate** mental health into **general health care**",
                  "Appoint and train mental health professionals to **support and supervise primary care staff**"
                ],
                [
                  "4. Develop **human resources**",
                  "**Increase and diversify** the workforce; make training **practical** and rooted in **community or primary care** settings"
                ],
                [
                  "5. Strengthen **public mental health leadership**",
                  "(No specific strategy is listed.)"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Specialists as supervisors",
              "text": "In the integration goal, the specialist's job is to **train, support and supervise primary care staff**, not to see every patient personally."
            },
            {
              "type": "update",
              "year": 2021,
              "title": "WHO's action plan and programs since the book's sources",
              "text": "The **Comprehensive Mental Health Action Plan** was adopted for **2013 to 2020** by the World Health Assembly in May 2013, **extended to 2030** in **2019**, and given updated indicators in **2021**. Its four objectives are unchanged: **leadership and governance**; **comprehensive, integrated, community-based services**; **promotion and prevention**; and **information, evidence and research**. Its targets include cutting the **suicide rate by one-third by 2030**. WHO's **mhGAP** programme (since **2008**) has been introduced in more than **100 countries**, and the **WHO Special Initiative for Mental Health (2019 to 2023)** aimed to bring care to 100 million more people in 12 priority countries.",
              "source": "WHO, Comprehensive mental health action plan 2013-2030; WHO, Mental health: scaling up mental health care; Singh OP, Comprehensive Mental Health Action Plan 2013-2030: we must rise to the challenge (2021)"
            }
          ]
        }
      ]
    }
  ]
});
