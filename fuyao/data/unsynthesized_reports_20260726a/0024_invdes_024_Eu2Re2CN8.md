> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.518 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

Notation: I cite analogue evidence as **CS# / SS# / TS#** and target-provided facts as **Target**. Where CS/SS/TS do not provide direct target evidence, I state that explicitly and treat that source signal as neutral **50**, per instruction.

---

## SECTION 1 — Possible Synthesis Routes

### Route 1: Low-Temperature Molten-Salt Carbodiimide / Nitridocyanide Flux

| Field | Details |
|:--|:--|
| Reference basis | FeNCN and CoCN₂ are made by decomposing metal hydrogencyanamides in LiCl/KCl flux at ~390–410 °C under Ar, and Cr₂(CN₂)₃ is made from CrCl₃ + ZnNCN + LiCl/KCl at 550 °C under dynamic vacuum, supporting molten-salt access to metal–C–N frameworks. The target contains short C–N and N–N bonds, so adapting NCN/N-rich flux chemistry is plausible. **[SS1, SS3, SS4, Target, Reasonable Inference]** |
| Precursors | Anhydrous EuCl₂/EuCl₃, ReCl₃/ReCl₅, freshly prepared ZnNCN or Li₂(CN₂), LiCl/KCl eutectic flux; optional Li₃N or NaN₃ as extra nitrogen source because target Eu₂Re₂CN₈ is N-rich relative to one C atom. **[SS4, SS5/TS1, TS5, Reasonable Inference]** |
| Temperature program | Dry charge at 120–200 °C under vacuum, ramp 2–5 °C/min to 500–650 °C, hold 2–5 days, cool 1–3 °C/h through flux crystallization window. **[SS1, SS3, SS4, SS5/TS1, Reasonable Inference]** |
| Atmosphere | Dry Ar glovebox loading, sealed ampoule or dynamic vacuum; moisture exclusion is important because analogous NCN/azide routes use Ar, vacuum, or dry argon. **[SS1, SS4, SS5/TS1]** |
| Pressure | Ambient pressure in sealed ampoule; no high-pressure apparatus is required in the flux analogues. **[SS1, SS3, SS4]** |
| Additional conditions | Use LiCl/KCl 46:54 flux, slight excess NCN/N donor, anhydrous handling, post-reaction flux washing; these are adapted from LiCl/KCl carbodiimide syntheses. **[SS1, SS3, SS4, Reasonable Inference]** |
| Transferability to target | Best structural transferability among routes because SS analogues contain metal–N polyhedra plus linear C–N units; uncertainty remains because none contains both Eu and Re. **[SS1, SS3, SS4, SS5/TS1; insufficient evidence from CS for Eu–Re–C–N co-synthesis]** |
| Estimated difficulty | **Challenging**, mainly due to Eu/Re redox control, N-rich stoichiometry, and absence of a direct Eu–Re analogue. **[SS4, SS5/TS1, Reasonable Inference]** |

---

### Route 2: Sealed-Ampoule Solid-State Metathesis from Halides + Li₂(CN₂)

| Field | Details |
|:--|:--|
| Reference basis | LiLa(CN₂)₂ is made by solid-state metathesis between rare-earth halides and Li₂(CN₂) at 450–650 °C under dry Ar, and the target contains a lanthanide cation plus C–N bonding. **[SS5/TS1, Target, Reasonable Inference]** |
| Precursors | EuF₃/EuCl₃ or EuCl₂, ReCl₃/ReCl₅, Li₂(CN₂), optional Li₃N/NaN₃ for nitrogen excess, and possibly a small reductant such as Eu metal if Re/Eu oxidation balance requires tuning. **[SS5/TS1, TS5, Reasonable Inference]** |
| Temperature program | Ramp to 450–650 °C, hold ~2 days, then slow-cool or furnace-cool; longer 4–7 day holds may be needed because CS nitrides and SS metathesis examples use multi-day sealed reactions. **[SS5/TS1, CS3, Reasonable Inference]** |
| Atmosphere | Dry Ar loading in glovebox, sealed copper/Nb/Ta ampoule inside silica tube; dry argon and ampoule containment are directly supported for rare-earth cyanamide metathesis. **[SS5/TS1]** |
| Pressure | Ambient sealed-ampoule pressure. **[SS5/TS1]** |
| Additional conditions | Salt byproducts such as LiF/LiCl should drive metathesis; repeated grind/heat cycles may be required if Re-rich phases persist. **[SS5/TS1, Reasonable Inference]** |
| Transferability to target | Strong for rare-earth–NCN chemistry but weaker for Re incorporation because the cited SSM analogue uses La/Ce, not a 5d transition metal. **[SS5/TS1; insufficient evidence from CS/SS/TS for Re-specific SSM]** |
| Estimated difficulty | **Challenging**, because the metathesis concept is supported but the Eu–Re mixed-cation product is extrapolated. **[SS5/TS1, Reasonable Inference]** |

---

### Route 3: High-Pressure Azide / Diazenide Decomposition

| Field | Details |
|:--|:--|
| Reference basis | SrN₂ and BaN₂ are synthesized by controlled alkaline-earth azide decomposition at 3–12 GPa and 450–800 °C, and the target contains short N–N distances consistent with diazenide/azide-like fragments. **[TS2, TS3, Target, Reasonable Inference]** |
| Precursors | Eu azide or Eu nitride + azide nitrogen source, Re nitride/Re chloride, Li₂(CN₂) or NaCN for carbon, and possibly NaN₃/NH₄N₃ as nitrogen pressure source; azide use is high-risk. **[TS2, TS3, SS2, TS4, Reasonable Inference]** |
| Temperature program | Compress to ~5–10 GPa, heat 500–800 °C for 15–60 min, quench at pressure, then decompress slowly; this follows diazenide high-pressure decomposition logic. **[TS2, TS3, Reasonable Inference]** |
| Atmosphere | Sealed BN capsule/sample assembly loaded in glovebox; moisture-sensitive azides require inert handling. **[TS2, TS3]** |
| Pressure | High pressure, likely >5 GPa for transferable stabilization of N–N units. **[TS2, TS3, Reasonable Inference]** |
| Additional conditions | Small batches, strict shock/heat control, avoid free HN₃ where possible, and use pressure to suppress N₂ loss. **[SS2, TS2, TS3, Reasonable Inference]** |
| Transferability to target | Strong for stabilizing N–N units but weak for incorporating C and Re simultaneously, because TS2/TS3 are binary alkaline-earth diazenides. **[TS2, TS3; insufficient evidence from TS for Eu–Re–C incorporation]** |
| Estimated difficulty | **Challenging**, driven by high pressure and energetic azide chemistry. **[TS2, TS3, SS2]** |

---

### Route 4: Direct High-Temperature Sealed Nb/Ta Ampoule Nitride–Cyanide Reaction

| Field | Details |
|:--|:--|
| Reference basis | Sr₃Co(CN)₃ is made from alkaline-earth nitride, Co, and NaCN under Ar at ~1200 K, while LiEu₄(BN₂)₃ is reported from Li/Li₃N/EuN/BN in sealed Nb ampoules at 1950 K. **[TS4, TS5]** |
| Precursors | EuN or Eu metal + Li₃N, Re metal/Re nitride, NaCN or Li₂(CN₂), and an additional nitrogen source such as Li₃N/NaN₃ to reach Eu₂Re₂CN₈ stoichiometry. **[TS4, TS5, Reasonable Inference]** |
| Temperature program | Ramp under sealed-metal containment to 900–1200 °C first; if unreacted Re remains, screen up to ~1400–1650 °C, but high temperature may destroy N–N/C–N units. **[TS4, TS5, Reasonable Inference]** |
| Atmosphere | Ar-loaded sealed Nb/Ta ampoule, possibly inside evacuated silica; analogous systems are air/moisture sensitive. **[TS4, TS5]** |
| Pressure | Ambient sealed-ampoule pressure unless adapting to high-pressure stabilization. **[TS4, TS5]** |
| Additional conditions | Slight nitrogen excess, reducing conditions, rapid quench vs slow-cool screen, and careful ampoule compatibility with cyanide/nitride reagents. **[TS4, TS5, Reasonable Inference]** |
| Transferability to target | Useful for Eu nitride/cyanide chemistry but risky because target’s short N–N bonds may not survive high-temperature equilibration. **[TS4, TS5, Target, Reasonable Inference]** |
| Estimated difficulty | **Challenging**, due to refractory Re, volatile/toxic cyanide components, and high-temperature anion loss risk. **[TS4, TS5, Reasonable Inference]** |

**Not listed:** Thin-film, PLD, sputtering, CVD, and MBE routes are not scored because there is **insufficient evidence from CS, SS, and TS** for vapor-deposition synthesis of this chemistry; those source signals are neutral **50** for thin-film feasibility.

---

## SECTION 2 — Recommended Precursors

### Route 1: Low-Temperature Molten-Salt Carbodiimide / Nitridocyanide Flux

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Li₂(CN₂) or ZnNCN | C–N framework donor | Li₂(CN₂) is used in rare-earth carbodiimide metathesis, and ZnNCN is used for Cr₂(CN₂)₃ molten-salt synthesis. **[SS4, SS5/TS1]** | Requires prior synthesis / dry handling. **[SS4, SS5/TS1]** |
| 2 | Anhydrous EuCl₂/EuCl₃ | Eu source | Rare-earth halides are directly used in LiRE(CN₂)₂ metathesis, so Eu halides are the closest Eu-transfer analogue. **[SS5/TS1, Reasonable Inference]** | Air/moisture sensitive. **[SS5/TS1, Reasonable Inference]** |
| 3 | ReCl₃/ReCl₅ | Re source | CrCl₃ reacts with ZnNCN in LiCl/KCl to form Cr carbodiimide, so Re chloride is a reasonable 5d-metal chloride analogue. **[SS4, Reasonable Inference]** | Volatile/corrosive/air-sensitive risk. **[Reasonable Inference]** |
| 4 | LiCl/KCl 46:54 | Flux | LiCl/KCl 46:54 is repeatedly used to form metal carbodiimides at low temperature. **[SS1, SS3, SS4]** | Hygroscopic flux requires drying. **[SS1, SS3, SS4]** |
| 5 | Li₃N or NaN₃, small excess | Extra N donor | The target is N-rich relative to one C atom, while TS diazenides and Eu nitridoborate use nitride/azide-derived nitrogen. **[TS2, TS3, TS5, Target, Reasonable Inference]** | NaN₃ is toxic/energetic; Li₃N is air-sensitive. **[TS2, TS3, Reasonable Inference]** |

---

### Route 2: Sealed-Ampoule Solid-State Metathesis

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuF₃/EuCl₃ or EuCl₂ | Eu source | Rare-earth halides are the directly supported cation source in LiRE(CN₂)₂ synthesis. **[SS5/TS1, Reasonable Inference]** | Air/moisture sensitive. **[SS5/TS1, Reasonable Inference]** |
| 2 | ReCl₃/ReCl₅ | Re source | Transition-metal chloride + NCN metathesis is supported for Cr₂(CN₂)₃. **[SS4, Reasonable Inference]** | Re chloride volatility and redox sensitivity. **[Reasonable Inference]** |
| 3 | Li₂(CN₂) | Metathesis C–N donor | Li₂(CN₂) is the key reagent in rare-earth carbodiimide SSM. **[SS5/TS1]** | Requires prior synthesis and dry handling. **[SS5/TS1]** |
| 4 | Li₃N | Nitride donor / N activity buffer | Li₃N appears in Eu nitride-borate synthesis and can raise nitrogen chemical potential. **[TS5, Reasonable Inference]** | Air-sensitive. **[TS5, Reasonable Inference]** |
| 5 | LiF/LiCl byproduct sink | Thermodynamic driver | Halide metathesis is driven by alkali-halide formation in the rare-earth SSM analogue. **[SS5/TS1, Reasonable Inference]** | Not hazardous as product, but excess salt can trap product. **[Reasonable Inference]** |

---

### Route 3: High-Pressure Azide / Diazenide Decomposition

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Eu(N₃)₂/Eu(N₃)₃ or EuN + azide source | Eu + N–N source | Alkaline-earth diazenides are made from corresponding azides under high pressure. **[TS2, TS3, Reasonable Inference]** | Energetic, shock/heat sensitive, moisture sensitive. **[TS2, TS3, SS2]** |
| 2 | Re nitride or Re chloride | Re source | No Re high-pressure analogue is provided, so this is an extrapolated Re source. **[insufficient evidence from CS/SS/TS for Re azide/nitride HP route; Reasonable Inference]** | Refractory/reduction-state mismatch. **[Reasonable Inference]** |
| 3 | Li₂(CN₂) | Carbon + nitrogen donor | Li₂(CN₂) is proven for rare-earth CN₂ frameworks. **[SS5/TS1]** | Dry handling / prior synthesis. **[SS5/TS1]** |
| 4 | NaN₃/NH₄N₃ | Nitrogen pressure source | Azide decomposition supplies N-rich diazenide chemistry in high-pressure analogues. **[TS2, TS3]** | Toxic and energetic. **[TS2, TS3, SS2]** |
| 5 | BN capsule | Containment | BN crucibles/capsules are used in high-pressure diazenide synthesis. **[TS2, TS3]** | Requires multianvil-compatible assembly. **[TS2, TS3]** |

---

### Route 4: Direct High-Temperature Sealed Nb/Ta Ampoule Nitride–Cyanide Reaction

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN or Eu metal + Li₃N | Eu/nitride source | EuN and Li₃N are used in the Eu nitridoborate analogue. **[TS5]** | Air-sensitive and reactive. **[TS5, Reasonable Inference]** |
| 2 | Re metal or Re nitride | Re source | Direct use of transition metal is supported for Co in Sr₃Co(CN)₃, but Re is more refractory. **[TS4, Reasonable Inference]** | Slow diffusion / refractory metal risk. **[Reasonable Inference]** |
| 3 | NaCN | Cyanide C–N donor | NaCN is used in the Sr₃Co(CN)₃ nitride–cyanide synthesis. **[TS4]** | Highly toxic and moisture sensitive. **[TS4, Reasonable Inference]** |
| 4 | Li₂(CN₂) or C₃N₄ | Alternative C–N donor | Li₂(CN₂) is supported by rare-earth carbodiimide synthesis; C₃N₄ is an extrapolated lower-volatility C/N donor. **[SS5/TS1, Reasonable Inference]** | Li₂(CN₂) needs dry synthesis; C₃N₄ may decompose. **[SS5/TS1, Reasonable Inference]** |
| 5 | Nb/Ta ampoule | High-T containment | Sealed Nb ampoule is reported for LiEu₄(BN₂)₃. **[TS5]** | Specialized sealing and compatibility requirements. **[TS5]** |

---

## SECTION 3 — Synthesizability Score

### F1: Thermodynamic Stability — Weight 30%

| Evidence item | Signal | Score treatment |
|:--|:--|:--:|
| Target E_hull | Candidate-specific convex-hull energy is not reported; the 0.000000 placeholder must not be interpreted as E_hull = 0. **[Target]** | Neutral baseline |
| CS analogue hulls | CS analogues are mostly on/near hull: 0.0, 0.038, 0.0056 eV/atom values appear among top chemical matches. **[CS1–CS5]** | Positive analogue signal |
| SS analogue hulls | SS analogues are mixed: several synthesized carbodiimides are metastable at ~0.20–0.27 eV/atom, while LiLa(CN₂)₂ is on hull. **[SS1–SS5]** | Mixed signal |
| TS analogue hulls | TS analogues are reported at E_hull = 0.0, including LiLa(CN₂)₂ and diazenides/cyanides. **[TS1–TS5]** | Positive analogue signal |
| Direct source limitation | Insufficient evidence from CS, SS, and TS for the **target’s** actual convex-hull energy; each direct target-hull source signal is neutral 50. **[CS/SS/TS limitation]** | Conservative cap |

**F1 Score: 62 / 100**

---

### F2 + F3: Per-Route Scoring

### Route 1: Low-Temperature Molten-Salt Carbodiimide / Nitridocyanide Flux

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; analogue flux routes are ~390–650 °C. **[SS1, SS3, SS4, SS5/TS1]** | 0 |
| T > 1400°C additional | No. **[SS1, SS3, SS4]** | 0 |
| High pressure >5 GPa | No. **[SS1, SS3, SS4]** | 0 |
| Reactive/controlled atmosphere | Yes; Ar or dynamic vacuum is used. **[SS1, SS4, SS5/TS1]** | −15 |
| Volatile precursor requiring sealed system | Yes by adaptation to Re chlorides/N donors in sealed ampoule. **[SS1, SS4, Reasonable Inference]** | −10 |
| Multi-step process ≥3 steps | Yes; precursor prep, dry mixing, flux heating, washing. **[SS1, SS3, SS4]** | −10 |
| Toxic or air-sensitive precursors | Yes; NCN/halide and possible nitride/azide handling. **[SS4, SS5/TS1, TS2, Reasonable Inference]** | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 75 | Metal chlorides + NCN donors are reactive in molten LiCl/KCl flux. **[SS1, SS3, SS4]** |
| Ion diffusion difficulty | 35 | Flux improves transport, but Re is a refractory 5d cation and no direct Re flux analogue is provided. **[SS4, Reasonable Inference; insufficient evidence from CS/SS/TS for Re-specific diffusion]** |
| Structural reconstruction | 55 | Metal–C–N structural motifs transfer well, but the target’s P1 Eu–Re–C–N/N–N network is more complex than the higher-symmetry SS analogues. **[SS1, SS3, SS4, SS5/TS1, Target]** |

**F3 Score for Route 1: 55 / 100**

---

### Route 2: Sealed-Ampoule Solid-State Metathesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; rare-earth SSM analogue is 450–650 °C. **[SS5/TS1]** | 0 |
| T > 1400°C additional | No. **[SS5/TS1]** | 0 |
| High pressure >5 GPa | No. **[SS5/TS1]** | 0 |
| Reactive/controlled atmosphere | Yes; dry Ar glovebox and sealed ampoule. **[SS5/TS1]** | −15 |
| Volatile precursor requiring sealed system | Yes by Re chloride / N donor adaptation. **[SS5/TS1, Reasonable Inference]** | −10 |
| Multi-step process ≥3 steps | Yes; Li₂(CN₂) prep, mixing, ampoule sealing, heating, washing. **[SS5/TS1]** | −10 |
| Toxic or air-sensitive precursors | Yes; Eu/Re halides and Li₂(CN₂)/nitride donors need dry handling. **[SS5/TS1, Reasonable Inference]** | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 70 | Halide + Li₂(CN₂) metathesis is chemically active and salt-forming. **[SS5/TS1]** |
| Ion diffusion difficulty | 30 | No molten flux is required in the base SSM route, so Re diffusion/order is more limiting. **[SS5/TS1, Reasonable Inference]** |
| Structural reconstruction | 50 | Rare-earth CN₂ frameworks are supported, but Eu–Re mixed-cation ordering is a major extrapolation. **[SS5/TS1; insufficient evidence from CS/SS/TS for Eu–Re ordering]** |

**F3 Score for Route 2: 50 / 100**

---

### Route 3: High-Pressure Azide / Diazenide Decomposition

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; HP diazenide analogues use 450–800 °C. **[TS2, TS3]** | 0 |
| T > 1400°C additional | No. **[TS2, TS3]** | 0 |
| High pressure >5 GPa | Yes; analogues use up to 9–12 GPa. **[TS2, TS3]** | −25 |
| Reactive/controlled atmosphere | Yes; glovebox/inert handling of azides is required. **[TS2, TS3]** | −15 |
| Volatile precursor requiring sealed system | Yes; azide decomposition evolves nitrogen and requires containment/pressure. **[TS2, TS3, Reasonable Inference]** | −10 |
| Multi-step process ≥3 steps | Yes; azide preparation, loading, HP heating, quench/decompression. **[TS2, TS3]** | −10 |
| Toxic or air-sensitive precursors | Yes; azides are hazardous and moisture sensitive. **[TS2, TS3, SS2]** | −10 |

**F2 Score for Route 3: 30 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 65 | Azides are highly reactive nitrogen sources. **[TS2, TS3, SS2]** |
| Ion diffusion difficulty | 40 | Short HP heating can limit cation ordering, and Re incorporation is not demonstrated. **[TS2, TS3, Reasonable Inference]** |
| Structural reconstruction | 35 | HP azide routes support N–N units but do not directly support the target’s mixed Eu–Re–C–N framework. **[TS2, TS3, Target; insufficient evidence from TS for C/Re incorporation]** |

**F3 Score for Route 3: 47 / 100**

---

### Route 4: Direct High-Temperature Sealed Nb/Ta Ampoule Nitride–Cyanide Reaction

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes for the high-temperature screen; TS5 uses 1950 K and TS4 uses ~1200 K. **[TS4, TS5]** | −10 |
| T > 1400°C additional | Yes if TS5-like Eu nitride-borate conditions are needed. **[TS5]** | −10 |
| High pressure >5 GPa | No quantitative >5 GPa condition is provided for TS4/TS5 route basis. **[TS4, TS5]** | 0 |
| Reactive/controlled atmosphere | Yes; Ar/sealed Nb conditions are used. **[TS4, TS5]** | −15 |
| Volatile precursor requiring sealed system | Yes; NaCN/Li/nitride chemistry requires sealed containment. **[TS4, TS5, Reasonable Inference]** | −10 |
| Multi-step process ≥3 steps | Yes if EuN/Re nitride precursor preparation is required. **[TS5, Reasonable Inference]** | −10 |
| Toxic or air-sensitive precursors | Yes; NaCN, EuN/Li₃N, and alkaline-earth nitride analogues are sensitive/toxic. **[TS4, TS5, Reasonable Inference]** | −10 |

**F2 Score for Route 4: 35 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 45 | NaCN and nitrides are reactive, but Re metal/nitride is likely kinetically sluggish. **[TS4, TS5, Reasonable Inference]** |
| Ion diffusion difficulty | 45 | High temperature improves diffusion, but refractory Re and possible anion loss remain limiting. **[TS4, TS5, Reasonable Inference]** |
| Structural reconstruction | 35 | Direct high-T reaction likely requires complete reconstruction and may destroy target N–N/C–N units. **[TS4, TS5, Target, Reasonable Inference]** |

**F3 Score for Route 4: 42 / 100**

---

### F4: Amorphization Tendency — Weight 20%

| Check | Criterion | Trigger? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | Eu and Re are very different cations by size/chemistry; exact oxidation states are not assigned, so this is a conservative inference. **[Target, Reasonable Inference]** |
| C2 | Unit cell atom count >40 | No | The target description lists 13 inequivalent atomic sites in P1, so the described cell is not obviously >40 atoms. **[Target]** |
| C3 | Mixed vertex + edge + face sharing coexist | No / not proven | Analogues show mixed sharing, but the target description does not explicitly establish simultaneous vertex, edge, and face sharing; insufficient evidence from CS/SS/TS for target C3, neutral 50 source signal. **[CS1, CS3, SS5/TS1, Target]** |

**F4 Score: 75 / 100**  
**Risk Level:** Low–Medium, with 1 confirmed trigger. **[Target, Reasonable Inference]**

---

### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 55 | 62 | 75 | 61.1 |
| 2 | 55 | 50 | 62 | 75 | 59.9 |
| 3 | 30 | 47 | 62 | 75 | 52.9 |
| 4 | 35 | 42 | 62 | 75 | 52.9 |

| | |
|:--|:--|
| **Best Route** | Route 1 — Low-Temperature Molten-Salt Carbodiimide / Nitridocyanide Flux |
| **Expert adjustment ±5** | **−3**, because no CS/SS/TS source contains the exact Eu–Re–C–N chemistry and the target lacks candidate-specific E_hull/phonon validation. **[insufficient direct evidence from CS/SS/TS; Target]** |
| **Final Synthesizability Score** | **58 / 100**, based on best route after expert adjustment. |

---

## SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **500–650 °C** for first-pass flux screening, because structurally related NCN phases form at ~390–550 °C and rare-earth CN₂ metathesis runs at 450–650 °C. **[SS1, SS3, SS4, SS5/TS1]** |
| Preferred atmosphere | Dry Ar loading plus sealed ampoule or dynamic vacuum, because analogous NCN/metathesis routes require Ar, dry Ar, or vacuum. **[SS1, SS4, SS5/TS1]** |
| Pressure | Ambient sealed ampoule for best route; high pressure is reserved for Route 3 only. **[SS1, SS4, TS2, TS3]** |
| Estimated duration | 2–5 days hold plus slow cooling, because SS4 holds 2 days and TS1/SS5 uses 2 days, while flux growth benefits from controlled cooling. **[SS4, SS5/TS1, SS1, SS3]** |
| Critical control parameters | Dry handling, LiCl/KCl flux ratio, Re/Eu redox balance, slight N/NCN excess, sealed containment, slow cooling, and post-reaction phase washing. **[SS1, SS3, SS4, SS5/TS1, Reasonable Inference]** |
| Basis | Best estimate is primarily based on SS carbodiimide flux/metathesis analogues, with TS1 reinforcing rare-earth CN₂ stability. **[SS1, SS3, SS4, SS5/TS1]** |

---

## SECTION 5 — Scoring Rationale

### F1 — Thermodynamic Stability
The target has no reported candidate-specific E_hull, and the placeholder 0.000000 eV/atom cannot be treated as thermodynamic stability evidence. **[Target]** CS and TS analogues are mostly on or near the hull, which supports feasibility of related chemistries, but SS analogues include synthesized metastable carbodiimides at ~0.20–0.27 eV/atom, creating a mixed stability signal. **[CS1–CS5, SS1–SS5, TS1–TS5]** The negative predicted formation energy supports formation relative to elements, but it does not replace a convex-hull or phonon check. **[Target]** Therefore F1 is above neutral but capped at **62/100** because there is insufficient direct target-hull evidence from CS, SS, and TS. **[CS/SS/TS limitation]**

### F2 — Route 1
Route 1 avoids high pressure and >1000 °C operation because NCN flux analogues run at 390–650 °C. **[SS1, SS3, SS4, SS5/TS1]** Severity deductions come from dry Ar/vacuum control, sealed operation, multistep precursor/flux handling, and air-sensitive or hazardous N/C–N precursors. **[SS1, SS4, SS5/TS1, Reasonable Inference]** The resulting F2 score is **55/100**, reflecting moderate laboratory severity but significant handling complexity. **[SS1, SS4, SS5/TS1]**

### F3 — Route 1
Flux chemistry gives high precursor activity because metal chlorides and NCN donors react in molten LiCl/KCl. **[SS1, SS3, SS4]** Ion diffusion remains difficult because Re is not represented in the flux analogues and is expected to be slower-ordering than 3d metals or rare-earth-only systems. **[SS4, SS5/TS1, Reasonable Inference]** Structural reconstruction is moderate because the target shares C–N/N-rich motifs with SS analogues but has a more complex P1 Eu–Re network. **[SS1, SS3, SS4, SS5/TS1, Target]**

### F2 — Route 2
Route 2 uses moderate 450–650 °C sealed-ampoule conditions supported by LiLa(CN₂)₂ metathesis. **[SS5/TS1]** It still requires dry Ar, sealed ampoules, Li₂(CN₂) preparation, and likely air-sensitive Eu/Re halides. **[SS5/TS1, Reasonable Inference]** F2 is therefore **55/100**, similar to Route 1 but without the diffusion benefit of a large molten flux. **[SS5/TS1]**

### F3 — Route 2
Metathesis provides good precursor activity through alkali-halide byproduct formation. **[SS5/TS1]** Kinetics are penalized because Re ordering and mixed Eu/Re cation placement are not demonstrated in the provided SSM sources. **[insufficient evidence from CS/SS/TS for Re-specific SSM; Reasonable Inference]** Structural reconstruction is more difficult than in LiLa(CN₂)₂ because the target contains multiple N–N units and low-symmetry mixed metal coordination. **[SS5/TS1, Target]**

### F2 — Route 3
High-pressure azide decomposition has the strongest condition penalty because TS diazenide analogues use 3–12 GPa and energetic azide precursors. **[TS2, TS3]** The route also requires inert handling and specialized multianvil-type equipment. **[TS2, TS3]** F2 is **30/100**, reflecting severe but chemically relevant conditions for N–N stabilization. **[TS2, TS3, SS2]**

### F3 — Route 3
Azides are highly reactive nitrogen sources, which helps precursor activity. **[TS2, TS3, SS2]** However, short high-pressure heat treatments may not allow full Eu/Re/C ordering, and no source shows a quaternary Eu–Re–C–N phase from azides. **[TS2, TS3; insufficient evidence from CS/SS/TS for Eu–Re–C–N HP synthesis]** F3 is **47/100**, mainly because the route supports N–N chemistry but not the full target architecture. **[TS2, TS3, Target]**

### F2 — Route 4
Route 4 is condition-severe because TS5 uses 1950 K sealed Nb chemistry and TS4 uses high-temperature nitride/cyanide reaction under Ar. **[TS4, TS5]** Toxic cyanide, air-sensitive nitrides, and sealed ampoule handling add further penalties. **[TS4, TS5, Reasonable Inference]** F2 is **35/100**, making this a fallback rather than the preferred route. **[TS4, TS5]**

### F3 — Route 4
High temperature helps bulk diffusion, but Re remains kinetically difficult and C/N/N–N volatility or decomposition is likely. **[TS4, TS5, Reasonable Inference]** The structural pathway likely requires complete reconstruction from nitrides/cyanides, unlike lower-temperature NCN flux routes. **[TS4, TS5, SS1, SS4, Reasonable Inference]** F3 is **42/100** because the route may form related nitride/cyanide phases but risks losing the target anion topology. **[TS4, TS5, Target]**

### F4 — Amorphization Tendency
The target has a large cation mismatch between Eu and Re, which triggers C1 by reasonable ionic-size/chemistry inference. **[Target, Reasonable Inference]** The described target cell has 13 inequivalent atoms, so C2 is not triggered. **[Target]** C3 is not counted because mixed vertex/edge/face sharing is common in analogues but not explicitly proven for the target; insufficient evidence from CS/SS/TS is treated neutrally. **[CS1, CS3, SS5/TS1, Target]**

---

## SECTION 6 — Synthesizability Interpretation

Eu₂Re₂CN₈ is **not proven to be a ground-state phase** because no candidate-specific convex-hull or phonon result is reported, even though the predicted formation energy is negative. **[Target]** The material is best interpreted as a **moderately plausible metastable or near-stable N-rich phase**, because SS analogues show synthesized metastable carbodiimides while CS/TS analogues show many stable or near-stable related compositions. **[SS1–SS5, CS1–CS5, TS1–TS5]** The strongest enabling factor is the existence of low-temperature molten-salt and metathesis routes that form metal–C–N frameworks without requiring full high-temperature equilibration. **[SS1, SS3, SS4, SS5/TS1]** The strongest limiting factor is simultaneous control of Eu/Re redox, C–N/N–N anion chemistry, and phase purity in a chemistry with no direct Eu–Re analogue. **[Target; insufficient direct evidence from CS/SS/TS; Reasonable Inference]** Overall, the target is **challenging but not implausible**, with the best chance coming from low-temperature flux/metathesis screening rather than direct high-temperature synthesis. **[SS1, SS3, SS4, SS5/TS1, TS4, TS5]**

---

## SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|:--|:--:|:--|
| 1 | All | No target-specific E_hull or phonon validation, so thermodynamic stability is uncertain. **[Target]** | High | Treat as exploratory phase search; prioritize low-temperature routes that have produced metastable but isolable NCN phases. **[SS1, SS3, SS4]** |
| 2 | All | Eu/Re redox and site ordering are unproven because no CS/SS/TS source contains Eu–Re–C–N together. **[insufficient evidence from CS/SS/TS]** | High | Screen EuCl₂ vs EuCl₃ and ReCl₃ vs ReCl₅ under sealed dry conditions. **[SS4, SS5/TS1, Reasonable Inference]** |
| 3 | Route 1 / 2 | Competing carbodiimide, nitride, cyanide, or halide phases may form. **[SS4, SS5/TS1, Reasonable Inference]** | High | Use LiCl/KCl flux, slight NCN/N excess, and iterative stoichiometry mapping; flux analogues show phase-pure products when conditions are controlled. **[SS1, SS3, SS4]** |
| 4 | Route 1 / 2 | Volatile or moisture-sensitive precursors can cause off-stoichiometry. **[SS1, SS4, SS5/TS1, Reasonable Inference]** | Medium–High | Use glovebox loading, pre-dried flux, sealed ampoules, and low-temperature holds. **[SS1, SS4, SS5/TS1]** |
| 5 | Route 3 | Azide precursors are hazardous and require high pressure. **[TS2, TS3, SS2]** | High | Use small batches, BN capsules, multianvil containment, and avoid free HN₃ handling where possible. **[TS2, TS3, SS2]** |
| 6 | Route 4 | High temperature may decompose N–N/C–N units or cause nitrogen loss. **[TS4, TS5, Target, Reasonable Inference]** | High | Use sealed Nb/Ta ampoules, nitrogen excess, and limit high-T exposure; reserve this route as fallback. **[TS4, TS5]** |
| 7 | All | Crystal growth and phase purity may be difficult for a low-symmetry P1 quaternary phase. **[Target, CS1, CS4]** | Medium–High | Use slow cooling in flux and compare multiple products by PXRD/single-crystal screening; analogous flux routes yield crystals when cooling is controlled. **[SS1, SS3, CS4]** |