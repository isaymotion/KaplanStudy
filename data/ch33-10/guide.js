/* Section 33.10 study guide. Source: Kaplan & Sadock's Synopsis of Psychiatry, 12th ed., Chapter 33 (Chronobiology). */
KS.add("ch33-10", "guide", {
  "intro": "Chronobiology studies biological rhythms, above all the roughly 24-hour circadian rhythms driven by the suprachiasmatic nucleus. This entry covers the properties of the circadian clock and how light sets it, how the clock and sleep pressure together regulate sleep (Figure 33-36), the advanced and delayed sleep phase disorders and their genetics (Figure 33-37), seasonal rhythms and the role of melatonin in signaling day length, whether humans are seasonal, how aging changes the clock, and how circadian rhythms affect drug treatment. Update boxes add the 2017 Nobel Prize for the molecular clock and the current names and genetics of the phase disorders.",
  "objectives": [
    "Describe the properties of circadian rhythms and the role of the suprachiasmatic nucleus and light in entrainment.",
    "Explain how circadian and homeostatic processes together regulate sleep.",
    "Distinguish advanced from delayed sleep phase disorders, including their genetics and current names.",
    "Explain how melatonin signals day length and drives seasonal responses in animals.",
    "Summarize the evidence on seasonality in humans and the effects of aging on the clock.",
    "Describe how circadian rhythms bear on drug treatment, including the effects of antidepressants and lithium on the clock."
  ],
  "parts": [
    {
      "title": "Circadian rhythms and sleep",
      "sections": [
        {
          "id": "s3310-clock",
          "title": "Chronobiology: circadian rhythms, the clock and its properties",
          "blocks": [
            {
              "type": "p",
              "text": "**Chronobiology** is the science of **biologic time**. Because Earth spins on its axis once a day, life on the planet lives under a **24-hour** cycle. We readily accept that species fill niches in **space** (three dimensions). It is easy to forget that they also fill niches in **time**, the **fourth dimension**."
            },
            {
              "type": "p",
              "text": "The daily cycle is only a narrow band of biologic timing, much as visible light is a narrow band of the **electromagnetic spectrum**. Biologic rhythms span a huge range: from oscillations lasting **milliseconds** in **ocular field potentials** up to the **17-year** emergence cycle of the **periodic cicada** (*Magicicada* spp.)."
            },
            {
              "type": "defs",
              "title": "Key terms",
              "items": [
                [
                  "Chronobiology",
                  "Study of **biologic time** and rhythms of all periods."
                ],
                [
                  "Circadian",
                  "From Latin **circa** (about) and **dies** (day): rhythms with a period of **about one day**. Among the **most studied** and **best understood** biologic rhythms."
                ],
                [
                  "Zeitgeber",
                  "German **zeit** (time) plus **geber** (giver): a **time cue** that resets the internal clock. The main one is the daily change in **light**."
                ],
                [
                  "Suprachiasmatic nucleus (SCN)",
                  "The **main circadian pacemaker** of mammals, humans included; lies in the **anterior hypothalamus**."
                ]
              ]
            },
            {
              "type": "h",
              "text": "Rhythms that keep running without cues"
            },
            {
              "type": "p",
              "text": "The defining property of a circadian rhythm is that it **persists without time cues**; it is not simply a passive response to the outside day. Lab animals kept for **several months** in constant **darkness, temperature and humidity** still show **robust** daily rhythms. That rhythm in a \"timeless\" setting proves an **internal timing system** generates it."
            },
            {
              "type": "p",
              "text": "The human SCN produces a mean period of about **24.18 hours**. Such a person behaves like a watch that runs a little **slow**: each day the clock drifts further from solar time. The chapter reports that in **slightly more than 3 months** a normally day-active person would be in **antiphase** to the light-dark cycle and so become **transiently nocturnal**. (Simple arithmetic gives a shorter time: drifting **0.18 hours a day**, the clock is 12 hours out of step after about **67 days**, a little over **2 months**.) For this reason the clock has to be **reset regularly** to keep body processes properly timed to the 24-hour day."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Clock basics to recall",
              "text": "Master clock: **SCN** of the **anterior hypothalamus**. Human intrinsic period: about **24.18 hours**. Strongest zeitgeber: the **light-dark** change. Light is sensed by photoreceptors in the **eyes**."
            },
            {
              "type": "h",
              "text": "Light resets the clock"
            },
            {
              "type": "p",
              "text": "Temperature and humidity swing daily too, but the cue that tracks Earth's rotation **most reliably** is the shift in **illuminance** between day and night. Organisms use it as a **zeitgeber**. Light can only reset the pacemaker through a **photoreceptive** system linked to the central oscillator. That system sits in the **eyes**: animals whose eyes are surgically removed can **no longer reset** their clock to light."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why the clock needs daily resetting",
              "text": "A period a fraction of an hour longer than 24 hours seems trivial, but the error adds up every day. Without regular light cues the internal day slides steadily out of step with the outside day."
            },
            {
              "type": "h",
              "text": "Outputs of the clock and melatonin"
            },
            {
              "type": "p",
              "text": "The clock times **sleep**, **feeding**, **drinking**, **behavior**, **hormone levels** and **core body temperature**. One hormone under its control is the **indoleamine melatonin**. A **multisynaptic pathway** links the SCN to the **pineal gland**, which makes melatonin. Blood levels **rise at night** and fall back to **baseline by day**, so the night-time rise is a handy **marker of circadian phase**."
            },
            {
              "type": "table",
              "caption": "Two separate effects of light on the melatonin profile",
              "head": [
                "Effect",
                "What happens"
              ],
              "rows": [
                [
                  "**Acute suppression**",
                  "Light at night drops raised melatonin **at once** to baseline"
                ],
                [
                  "**Phase shift**",
                  "Light moves the **timing** of the daily rhythm of melatonin synthesis"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Melatonin is **easy to assay**. Any disturbance of the clock shows up in its profile, so melatonin serves as a readable **output** for studying how the central pacemaker is regulated."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Do not confuse suppression with shifting",
              "text": "A drop in melatonin under bright light is the **acute suppression** effect. It does not by itself show that the clock has been reset; a **phase shift** is a separate effect on the timing of the rhythm."
            },
            {
              "type": "update",
              "year": 2017,
              "title": "The molecular clock won the 2017 Nobel Prize",
              "text": "The clock genes and feedback loop this section describes were recognized after the book was written. The **2017 Nobel Prize in Physiology or Medicine** went to **Jeffrey C. Hall, Michael Rosbash and Michael W. Young** for their discoveries of the molecular mechanisms controlling the circadian rhythm. Working in fruit flies, they isolated the **period** gene in **1984**, showed that its protein (PER) builds up at night and is broken down by day, and found further clock genes such as **timeless** (Young, 1994). Together these explain a self-sustaining **transcription-translation feedback loop**, the same principle that runs clocks in human cells.",
              "source": "Karolinska Institutet, The Nobel Prize in Physiology or Medicine 2017 to Jeffrey C. Hall, Michael Rosbash and Michael W. Young, October 2, 2017"
            }
          ]
        },
        {
          "id": "s3310-sleep",
          "title": "Sleep and circadian rhythms: sleep regulation",
          "blocks": [
            {
              "type": "p",
              "text": "People value solid, restful sleep most once they have lost it. The chapter describes sleep as the combined result of **two oscillating processes**, one homeostatic and one circadian."
            },
            {
              "type": "table",
              "caption": "The two processes that regulate sleep",
              "head": [
                "Feature",
                "Sleep homeostat",
                "Circadian process"
              ],
              "rows": [
                [
                  "What it tracks",
                  "Build-up and release of **sleep debt**",
                  "Daily rhythm in **sleep propensity** (or, seen the other way, **arousal**)"
                ],
                [
                  "Driver",
                  "Time awake versus time asleep",
                  "The **circadian clock**"
                ],
                [
                  "Biologic basis",
                  "Not known; **adenosine** is the leading candidate neuromodulator",
                  "Clock in the SCN"
                ],
                [
                  "Variation between people",
                  "**Very similar** among people of the same age",
                  "Varies; sets **diurnal preference**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "The two processes normally run together, but they can be **pulled apart** by keeping people for **several weeks** in a **timeless environment**."
            },
            {
              "type": "steps",
              "title": "How circadian arousal and sleep timing unfold across the day",
              "items": [
                [
                  "Daytime rise",
                  "The circadian drive for **arousal** (wakefulness) climbs **steadily** through the day."
                ],
                [
                  "Evening peak",
                  "Arousal peaks **just before** the circadian rise in **plasma melatonin** (Figure 33-36)."
                ],
                [
                  "Night decline",
                  "Arousal then falls, reaching its low point at the same time as the daily **low point of core body temperature**."
                ],
                [
                  "Temperature nadir",
                  "The minimum usually falls at about **5:00 to 6:00 AM**."
                ],
                [
                  "Best sleep window",
                  "An unbroken **8-hour** sleep is possible only if sleep starts about **6 hours before** the temperature nadir; in healthy people, going to bed at **11:00 PM to 12:00 AM** gives the best chance of eight solid hours."
                ]
              ]
            },
            {
              "type": "p",
              "text": "These timing facts come from studies that **forced sleep schedules** at different points across the circadian day. Figure 33-36 shows how sleep in **young adults** sits in time against other markers of circadian phase (source: Dijk and Lockley, 2002)."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Sleep regulation numbers",
              "text": "Two processes: **homeostat** (sleep debt; candidate **adenosine**) and **circadian** (propensity or arousal). Temperature nadir about **5:00 to 6:00 AM**. Start sleep about **6 hours before** the nadir, about **11:00 PM to 12:00 AM**, for **8 hours** of unbroken sleep."
            },
            {
              "type": "h",
              "text": "Morning larks and night owls"
            },
            {
              "type": "p",
              "text": "**Diurnal preference** differs between people, shaped by **age**, the person's **endogenous circadian period** and other factors, and these differences show up in physiology. In the clinic it can be measured with the Horne-Östberg **Morningness-Eveningness Questionnaire (MEQ)**."
            },
            {
              "type": "table",
              "caption": "Morning and evening types",
              "head": [
                "Feature",
                "Morning lark",
                "Night owl"
              ],
              "rows": [
                [
                  "Waking time",
                  "**Earlier**",
                  "Later"
                ],
                [
                  "Clock time of lowest core body temperature",
                  "**Earlier**",
                  "**Later**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "Sleep deprivation work shows that the **homeostatic** part of sleep is strikingly **alike** across people of **similar age**. Sleep need does, however, **fall with age**, a well-established finding. The chapter therefore concludes that diurnal preference is set **almost exclusively** by the **circadian** side of sleep control."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Bedtime advice follows the clock",
              "text": "Because the temperature low point anchors the best sleep window, a late bedtime pushes the sleep period into the hours when circadian arousal is rising again, and the night is more likely to be broken."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Compare like with like",
              "text": "Homeostatic sleep drive is similar only among people of **similar age**. Sleep need **declines with age**, so do not compare sleep needs across age groups as if they were equal."
            }
          ]
        },
        {
          "id": "s3310-csd",
          "title": "Circadian sleep disorders and the effect of artificial light",
          "blocks": [
            {
              "type": "p",
              "text": "The two best-described circadian sleep disorders sit at the far ends of the lark and owl spectrum. Both have a **genetic** contribution."
            },
            {
              "type": "table",
              "caption": "Advanced and delayed sleep phase syndromes compared",
              "head": [
                "Feature",
                "Advanced sleep phase syndrome (ASPS)",
                "Delayed sleep phase syndrome (DSPS)"
              ],
              "rows": [
                [
                  "Relation to chronotype",
                  "**Pathologic extreme** of the **morning lark**",
                  "Linked to **evening** preference"
                ],
                [
                  "Genetic form",
                  "**Familial ASPS (FASPS)**, **autosomal dominant**",
                  "Genetics **influence** it"
                ],
                [
                  "Gene",
                  "**hPER2**, human homolog of mouse **Per2**",
                  "**hPER3**"
                ],
                [
                  "Variant",
                  "**SNP**: adenine to guanine, giving **serine to glycine** swap",
                  "**Length polymorphism** in a **repeat region**"
                ],
                [
                  "Effect",
                  "Mutant protein poorly **phosphorylated** by **casein kinase Iε**",
                  "**Shorter allele** goes with **evening preference**"
                ],
                [
                  "Sleep pattern",
                  "Sleep-wake rhythm about **4 hours advanced**: asleep about **7:30 PM**, wakes about **4:30 AM**",
                  "Not detailed in the chapter"
                ]
              ],
              "wide": true
            },
            {
              "type": "p",
              "text": "In **FASPS**, affected relatives show a sleep-wake cycle shifted **4 hours earlier**, a striking advance. They usually drop off at about **7:30 PM** and wake by themselves at about **4:30 AM**. They carry a **single nucleotide polymorphism** in **hPER2**. The change of **adenine to guanine** leads to **serine being replaced by glycine** in the protein. The altered protein is then **inefficiently phosphorylated** by **casein kinase Iε**, a known part of the molecular clock machinery."
            },
            {
              "type": "p",
              "text": "In **DSPS**, a **length polymorphism** in a repeat stretch of **hPER3** appears **associated** with patients' diurnal preference, and the **shorter allele** is tied to **evening preference**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Genes of the phase syndromes",
              "text": "**FASPS**: autosomal dominant, **hPER2** SNP, serine to glycine, weak phosphorylation by **casein kinase Iε**, about **4-hour** advance (sleep about **7:30 PM**, wake about **4:30 AM**). **DSPS**: **hPER3** repeat length polymorphism; **shorter allele** with **evening** preference."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Names in current manuals",
              "text": "The chapter uses the older labels **ASPS** and **DSPS**. Current classifications name these conditions as sleep-wake **phase disorders** within the circadian rhythm sleep-wake disorders (see Chapter 15). The hPER3 link is reported as an **association**, not a cause."
            },
            {
              "type": "h",
              "text": "Artificial light and the shape of human sleep"
            },
            {
              "type": "p",
              "text": "The **light bulb** stretched the human day into the night. That gain in productive hours changed how we sleep (Figure 33-37). With ordinary **artificial lighting**, people sleep in **one consolidated block** of about **8 hours**. Most other mammals do not; their sleep is usually more **fragmented**."
            },
            {
              "type": "p",
              "text": "When humans live under more **natural photoperiods**, with nights longer than in lit settings, sleep **spreads out**. It becomes **bimodal**: one bout early in the night and one late, separated by spells of **quiet wakefulness**. This pattern looks more like the sleep of **other mammals**."
            },
            {
              "type": "table",
              "caption": "Sleep under artificial versus natural photoperiods (Figure 33-37)",
              "head": [
                "Feature",
                "Artificial lighting",
                "Long natural nights"
              ],
              "rows": [
                [
                  "Structure",
                  "**Single consolidated** bout",
                  "**Bimodal**: early and late bouts"
                ],
                [
                  "Length",
                  "About **8 hours**",
                  "Longer total sleep"
                ],
                [
                  "Quiet wakefulness",
                  "**Abolished**",
                  "**Present** between the two bouts"
                ],
                [
                  "Resemblance to other mammals",
                  "Unusual",
                  "**More similar**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "The caption of Figure 33-37 (Wehr and colleagues, 1993) sums it up: when artificial light extends daytime into night, **total sleep time is reduced** and the periods of **quiet wakefulness** disappear."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Night waking may be natural",
              "text": "A quiet wakeful spell between two sleep bouts is the expected pattern when nights are long and dark. Consolidated 8-hour sleep is partly a product of **artificial lighting**."
            },
            {
              "type": "update",
              "year": 2023,
              "title": "Current names and genetics of the phase disorders",
              "text": "**Names:** the chapter's advanced and delayed sleep phase **syndromes** are now **advanced sleep-wake phase disorder** and **delayed sleep-wake phase disorder** in the **ICSD-3** (2014) and its **text revision, ICSD-3-TR (2023)**, from the American Academy of Sleep Medicine; DSM-5-TR lists them as types of **circadian rhythm sleep-wake disorder**. **Genetics:** rare variants that **shorten** the circadian period cause **familial advanced** sleep-wake phase disorder; besides the **PER2** variant the chapter names (Toh and colleagues, **2001**), others have been found, including in the gene for casein kinase 1 delta (**CSNK1D**, Xu and colleagues, **2005**). For the **delayed** disorder, proposed common polymorphisms such as the **PER3** repeat-length variant have **not held up consistently**. In **2017**, Patke and colleagues described a **dominant coding variant in CRY1** that lengthens the circadian period and runs in families with delayed sleep-wake phase disorder; it is carried by about **1 in 75** people of non-Finnish European ancestry, though most people with the disorder do not carry it.",
              "source": "American Academy of Sleep Medicine, International Classification of Sleep Disorders, 3rd ed., text revision (ICSD-3-TR), 2023; Patke A et al., Mutation of the human circadian clock gene CRY1 in familial delayed sleep phase disorder, Cell 2017 (PMC)"
            }
          ]
        }
      ]
    },
    {
      "title": "Seasonality, aging and treatment timing",
      "sections": [
        {
          "id": "s3310-season",
          "title": "Seasonality; melatonin and seasonality",
          "blocks": [
            {
              "type": "p",
              "text": "The length of the solar day, **24 hours**, stays the same all year. What changes over the year is how the day is split between light and dark. The reason is the **tilt of the Earth's axis**, which leans **23.45 degrees** away from the orbital plane around the sun, a plane called the **ecliptic**. As the planet moves along its orbit, the share of each day that is light rises and falls."
            },
            {
              "type": "p",
              "text": "Many living things tune their body functions to this **seasonal cycle**, which helps them survive. A clear example is **reproduction**: plants and animals alike show precise yearly cycles of breeding."
            },
            {
              "type": "table",
              "caption": "Short-day and long-day breeders as the chapter describes them",
              "head": [
                "Feature",
                "Short-day breeders",
                "Long-day breeders"
              ],
              "rows": [
                [
                  "Example",
                  "**Sheep** (large mammals)",
                  "**Hamsters**"
                ],
                [
                  "Length of pregnancy",
                  "**Long** gestation",
                  "Only **a few weeks**"
                ],
                [
                  "When they conceive",
                  "In **fall**, when nights are long and days short",
                  "In **spring and summer**, when days are long"
                ],
                [
                  "When young are born",
                  "In **spring**, a fairly mild season",
                  "In **spring and summer**, the same season as mating"
                ]
              ]
            },
            {
              "type": "p",
              "text": "These yearly patterns are called **circannual** rhythms. Like daily circadian rhythms, many of them keep running when seasonal cues are taken away, with an internal period of about **1 year**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Who is a short-day breeder?",
              "text": "A **short-day breeder** (for example the **sheep**) mates when days are short in **fall** so that birth falls in **spring**. A **long-day breeder** (for example the **hamster**) has a short pregnancy and mates and gives birth in **spring and summer**."
            },
            {
              "type": "h",
              "text": "How melatonin carries day length"
            },
            {
              "type": "p",
              "text": "For keeping time across a single day, the most dependable outside signal is the **day-night cycle**. For keeping time across the year, the most dependable signal is **day length**: the part of the 24 hours that falls between **sunrise and sunset**. In animals that breed by season, the body records day length in the shape of its **melatonin profile**."
            },
            {
              "type": "steps",
              "title": "From day length to a seasonal breeding response",
              "items": [
                [
                  "Night raises melatonin",
                  "Melatonin is **high during the night** and low by day."
                ],
                [
                  "Night length sets the duration",
                  "A long **winter** night gives a **long stretch** of high melatonin; a short **summer** night gives a **short stretch**."
                ],
                [
                  "The signal is read",
                  "The **reproductive axis** reads how long melatonin stays high."
                ],
                [
                  "The body responds",
                  "The animal makes the **breeding response** that fits the season."
                ]
              ]
            },
            {
              "type": "p",
              "text": "The proof came from removing the pineal gland (**pinealectomy**) in seasonal breeders, which takes away the body's main source of melatonin. Researchers then **infused melatonin** in patterns that copied long or short days. The **duration** of high melatonin decided the animal's reproductive state, **even when** the infusion clashed with the real day length outside. Other features mattered little: the **amplitude** of the profile, the **total amount** made, and the **phase** of the profile relative to light and dark."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Duration is the message",
              "text": "In seasonal breeders it is **how long** melatonin stays high each night, not how high it peaks or when it starts, that tells the body the season."
            },
            {
              "type": "h",
              "text": "A dramatic example and the pituitary link"
            },
            {
              "type": "p",
              "text": "In the male **Siberian hamster** (*Phodopus sungorus*) kept on long days, the animal can reproduce and each testis weighs about **250 mg**. On short days the testes shrink to about **15 mg** each, a **94 percent** loss of mass. Melatonin infusions that mimic short days cause the **same degree** of shrinkage."
            },
            {
              "type": "p",
              "text": "The day-length message probably reaches the reproductive axis, at least in part, through **melatonin receptors** located in the pituitary's **pars tuberalis**. How this works is **still unknown**. One hypothesis is that these receptors act indirectly on an unidentified factor given the provisional name **tuberalin**. Tuberalin in turn would govern **prolactin** secretion and gene activity in the **lactotrophs** of the **adenohypophysis** (anterior pituitary)."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Tuberalin is a hypothesis",
              "text": "Tuberalin has **not been identified**. Teach it as a **proposed** factor, and treat the pars tuberalis route as **likely and partial**, not proven."
            }
          ]
        },
        {
          "id": "s3310-human",
          "title": "Seasonality in humans",
          "blocks": [
            {
              "type": "p",
              "text": "Are humans **truly seasonal**? That question remains **much debated**. Several lines of evidence point to a **leftover tendency** toward seasonality, but none settles the question."
            },
            {
              "type": "table",
              "caption": "Evidence for residual seasonality in humans as the chapter reports it",
              "head": [
                "Observation",
                "What is seen",
                "Notes"
              ],
              "rows": [
                [
                  "Suicide",
                  "Rates peak in **summer**",
                  "The peak is found **across cultures**"
                ],
                [
                  "Births",
                  "A **small but distinct** peak in **spring and summer**",
                  "The pattern **varies** and is shaped by **unknown cultural and geographic** factors"
                ],
                [
                  "Industrialization",
                  "The spring-summer birth peak has **become smaller**",
                  "Seen as societies **industrialized**"
                ],
                [
                  "Sleep on long nights",
                  "Sleep spreads out into a **bimodal** pattern",
                  "Suggests natural sleep length tracks **night length**"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Keep the uncertainty",
              "text": "These are **associations** that hint at seasonality. The chapter does **not** claim that human mood or behavior is proven to be driven by season. Do not present the summer suicide peak as a cause-and-effect finding."
            },
            {
              "type": "h",
              "text": "A two-oscillator model"
            },
            {
              "type": "p",
              "text": "When nights are long, human sleep loosens into **two parts**. This suggests that how long we sleep naturally is tied to **how long the night is**. A system with **two oscillators** could, in theory, keep sleep in order as the **photoperiod** changes."
            },
            {
              "type": "defs",
              "title": "The proposed oscillators",
              "items": [
                [
                  "Evening oscillator",
                  "Follows the shift from day to night (**dusk**)."
                ],
                [
                  "Morning oscillator",
                  "Follows the shift from night to day (**dawn**)."
                ],
                [
                  "Phase difference",
                  "The gap in timing between the two **may encode** day length as the seasons change."
                ]
              ]
            },
            {
              "type": "p",
              "text": "Biologic support for two oscillators exists in **rodents and humans**. In many vertebrates, and in **some humans**, the melatonin profile is **bimodal**, with an **evening peak** and a **morning peak**."
            },
            {
              "type": "p",
              "text": "Most rodent SCN studies used **coronal** brain slices. Slices cut in the **horizontal** plane gave new findings. In them, SCN neurons fire in a **bimodal** pattern, peaking **early and late** in the **subjective day**. The gap between peaks also **changes with the photoperiod** in which the animal had been kept."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Horizontal slices, two firing peaks",
              "text": "In **horizontally cut** SCN slices, firing rate shows **two peaks** (early and late **subjective day**), and the **interpeak interval** shifts with the housing **photoperiod**."
            },
            {
              "type": "p",
              "text": "These results support old suspicions that the SCN of seasonal breeders, and **perhaps** of nonseasonal mammals, holds a **morning and an evening oscillator** that work together to signal day length."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Why it matters for patients",
              "text": "If two clocks track **dusk and dawn**, a change in season could shift sleep timing and length. This is a **working model**, so frame it to patients and students as a possibility, not an established mechanism."
            }
          ]
        },
        {
          "id": "s3310-aging",
          "title": "Effect of aging",
          "blocks": [
            {
              "type": "p",
              "text": "The circadian system changes as people grow older. In general, four things happen."
            },
            {
              "type": "list",
              "title": "Circadian changes with human aging",
              "items": [
                "The length of the circadian **period gets shorter**.",
                "The circadian **phase advances**, so people go to bed and wake up **earlier**.",
                "Most circadian rhythms lose **amplitude**.",
                "Large phase shifts, such as those from **jet lag**, are **tolerated less well**."
              ]
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Direction of change",
              "text": "With age, the period gets **shorter**, the phase moves **earlier** (advance), and rhythm amplitude gets **lower**."
            },
            {
              "type": "h",
              "text": "Chronic jet lag in aged mice"
            },
            {
              "type": "p",
              "text": "A mouse model shows how aging and the clock interact. Old mice exposed to **chronic jet lag** died at much higher rates."
            },
            {
              "type": "table",
              "caption": "Survival of aged mice under weekly 6-hour shifts as the chapter reports",
              "head": [
                "Condition",
                "Survival"
              ],
              "rows": [
                [
                  "Not shifted (age-matched controls)",
                  "**83%**"
                ],
                [
                  "Weekly **6-hour phase delay**",
                  "**68%** (intermediate)"
                ],
                [
                  "Weekly **6-hour phase advance**",
                  "About **half**"
                ]
              ]
            },
            {
              "type": "p",
              "text": "These large effects were **not seen in younger mice**. The cause of harm from chronic jet lag is **not yet known**. The shifted mice did **not** have more tumors."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Advances hurt more than delays",
              "text": "In the aged mice, forced **advances** cost more survival than forced **delays**, which fits the idea that older clocks cope poorly with large shifts."
            },
            {
              "type": "p",
              "text": "The chapter suggests that in humans, as in mice, **rotating light schedules** probably throw the body's oscillators out of step (**internal desynchrony**), and that this may have serious effects that **aging may worsen**."
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Mouse data, human inference",
              "text": "The survival figures come from **mice**. Harm to people on rotating schedules is stated as **likely**, not shown. Do not quote the mouse survival rates as human risks."
            }
          ]
        },
        {
          "id": "s3310-rx",
          "title": "Circadian rhythms and pharmacotherapy",
          "blocks": [
            {
              "type": "p",
              "text": "The link between drugs and the clock runs **both ways**. Drugs can change circadian rhythms, and the clock can change how well a drug works at **different times of day**. The chapter expects that understanding these links better will lead to **more effective** treatment."
            },
            {
              "type": "h",
              "text": "Antidepressants"
            },
            {
              "type": "p",
              "text": "Some of the best-studied links involve **antidepressants**. Depressed patients often have a **raised body temperature at night**. This **may** come from a weaker (**lower amplitude**) master oscillator in the **hypothalamus**, which drives body temperature. **TCAs** and **SSRIs** lower the raised night temperature and at the same time **boost circadian amplitude**. Many depressed patients also have **flattened daily activity rhythms**, and TCA or SSRI treatment **may** increase that amplitude too."
            },
            {
              "type": "h",
              "text": "Lithium"
            },
            {
              "type": "p",
              "text": "**Lithium** is an established bipolar treatment that also **lengthens the circadian period**. The molecular reason is **unknown**. One candidate is **glycogen synthase kinase 3β** (**GSK3β**), which has been linked to the clock mechanism and is **inhibited by lithium**."
            },
            {
              "type": "steps",
              "title": "Proposed lithium, GSK3β and REV-ERBα chain (cell culture)",
              "items": [
                [
                  "Normal state",
                  "**GSK3β** phosphorylates **REV-ERBα**, a negative regulator of the clock, and so **stabilizes** it."
                ],
                [
                  "REV-ERBα acts",
                  "Stable REV-ERBα **represses** transcription of **BMAL1**."
                ],
                [
                  "Lithium added",
                  "Lithium **inhibits GSK3β**, so REV-ERBα is not phosphorylated or stabilized."
                ],
                [
                  "Degradation",
                  "Unstable REV-ERBα is sent for **proteasomal degradation**."
                ],
                [
                  "Result",
                  "**BMAL1** transcription is **released from repression**."
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "caution",
              "title": "Not proven in behavior",
              "text": "Whether lithium's effect on circadian behavior actually comes from this **GSK3β and REV-ERBα** route **remains to be determined**. The chain is shown in **cell culture** only."
            },
            {
              "type": "h",
              "text": "Short-acting benzodiazepines and serotonin"
            },
            {
              "type": "p",
              "text": "**Triazolam** (Halcion) and **brotizolam** (Lendormin) have clock effects. In hamsters, either drug given in the **middle of the subjective day** causes **phase advances** in activity. Brotizolam **reduces light-induced** SCN expression of the clock genes **Per1 and Per2**. Benzodiazepines act as allosteric modulators of **GABAA** receptors, yet several lines of evidence show their clock effects need an **intact serotonergic system**. In hamsters, the **5-HT1A/7 agonist 8-OH-DPAT** given at subjective midday also causes phase advances in behavior and SCN firing and **lowers Per1 and Per2** expression."
            },
            {
              "type": "table",
              "caption": "Drugs and the circadian system as the chapter reports",
              "head": [
                "Agent",
                "Circadian finding",
                "Evidence"
              ],
              "rows": [
                [
                  "TCAs, SSRIs",
                  "Lower raised night temperature; **raise amplitude**",
                  "Depressed patients"
                ],
                [
                  "Lithium",
                  "**Longer period**",
                  "Mechanism unknown; GSK3β idea from cell culture"
                ],
                [
                  "Triazolam, brotizolam",
                  "**Phase advance** at mid subjective day",
                  "Hamsters"
                ],
                [
                  "8-OH-DPAT",
                  "Phase advance; less Per1 and Per2",
                  "Hamsters"
                ],
                [
                  "MDMA",
                  "Smaller triazolam shifts; poorer **re-entrainment**",
                  "Hamsters"
                ],
                [
                  "Methamphetamine",
                  "Disorganizes rhythms; **restores rhythm** after SCN ablation",
                  "Rodents"
                ]
              ],
              "note": "Most of these findings come from animals; only the antidepressant findings are described in patients."
            },
            {
              "type": "h",
              "text": "Drugs of abuse"
            },
            {
              "type": "p",
              "text": "**MDMA** (ecstasy) can be a **serotonin neurotoxin**. Hamsters given MDMA had **smaller** triazolam-induced phase shifts and were **less able to re-entrain** afterward. They also lost **serotonergic axon terminals** in the SCN, again pointing to the role of serotonin in the clock. The chapter notes that recreational **methamphetamine** use has risen sharply. Long-term methamphetamine **disorganizes** activity rhythms in rodents. Yet in rodents made **arrhythmic by SCN ablation**, methamphetamine brings rhythm **back**. How, and where it acts, is **unknown**."
            },
            {
              "type": "callout",
              "kind": "exam",
              "title": "Methamphetamine paradox",
              "text": "Chronic methamphetamine **disrupts** rodent rhythms, but it **restores rhythmicity** in rodents whose **SCN has been destroyed**."
            },
            {
              "type": "h",
              "text": "Timing and toxicity"
            },
            {
              "type": "p",
              "text": "How well a drug works and how toxic it is can **vary with circadian phase**. In rodents, the lethal effect of a fixed dose has long been known to **vary by time of day**. Many **anticancer drugs**, whether antimetabolites, DNA intercalators or mitotic inhibitors, differ **2-fold to 10-fold** in tolerability across the day in rodents. Much of this reflects daily changes in **absorption, distribution, metabolism and elimination**. These four depend on rhythms in **gastric pH**, gut movement, **glomerular filtration rate** and **membrane viscosity**. Regular **mealtimes** also affect how the body handles drugs."
            },
            {
              "type": "p",
              "text": "The chapter concludes that the **circadian phase of dosing** should be considered to get the most benefit with the least toxicity. Timing several drugs correctly can be very hard for ill patients or their caregivers. **Small implanted programmable pumps** that release anticancer or other drugs at set times **may** offer a **limited** answer. The rise of **chronotherapy** reflects growing knowledge of how the clock shapes drug response."
            },
            {
              "type": "callout",
              "kind": "pearl",
              "title": "Ask when, not only what",
              "text": "Drug handling follows the clock, so the **time of dosing** can change both **benefit and toxicity**. Much of the data on timing comes from **rodents**."
            }
          ]
        }
      ]
    }
  ]
});
