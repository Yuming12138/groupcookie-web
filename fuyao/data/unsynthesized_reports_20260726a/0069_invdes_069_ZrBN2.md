> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.051 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

Citation shorthand: **[CS-1]** means Chemical Similarity entry 1, **[SS-5]** means Structural Similarity entry 5, **[TS-2]** means Thermodynamic Similarity entry 2, and **[Target]** means the supplied target description.

---

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Anhydrous Halide-Flux Growth from ZrN + BN

| Field | Details |
|:--|:--|
| Reference basis | La/Ce boron nitrides were made from LnN + a-BN in CaCl₂ flux at 1500 K under Ar in Ta ampoules, and Zr₂N₂Se was made from ZrN + Se + NaCl flux at 900 °C in evacuated silica tubes, so a ZrN + BN flux route is the most direct analogue-supported route. [CS-1, CS-2, SS-5, TS-2] |
| Precursors | ZrN powder, preferably fine and high purity; amorphous BN or h-BN; anhydrous CaCl₂, NaCl, or LiCl/KCl flux. [CS-1, CS-2, SS-5, TS-2] |
| Temperature program | Ramp under sealed inert conditions to ~1100–1250 °C, hold ~3–7 d, then slow-cool or furnace-cool before flux washing. [CS-1, CS-2, SS-5, TS-2; Reasonable Inference] |
| Atmosphere | Dry Ar handling plus sealed evacuated or inert ampoule. [CS-1, CS-2, SS-5, TS-2] |
| Pressure | Ambient pressure in sealed ampoule. [CS-1, CS-2, SS-5, TS-2] |
| Additional conditions | Use excess dry flux, moisture-free handling, and post-reaction water washing only after cooling; Ta containment is preferred if CaCl₂/BN/ZrN reactivity with silica is a concern. [CS-1, CS-2, SS-5, TS-2; Reasonable Inference] |
| Transferability to target | ZrN + BN gives the target stoichiometry ZrBN₂ directly, and flux is supported by both boron nitride analogues and Zr nitride chalcogenide analogues. [CS-1, CS-2, SS-5, TS-2; Reasonable Inference] |
| Estimated difficulty | **Moderate–Challenging**, because flux methods successfully form related nitrides, but ZrN/BN are refractory and phase-pure Zr₂N₂Se still showed minor ZrN impurity. [SS-5, TS-2] |

#### Route 2: Solid-State Metathesis / Salt-Flux Metathesis

| Field | Details |
|:--|:--|
| Reference basis | ZrNCl reacts with alkali sulfides by solid-state metathesis to form Zr₂N₂S at 800 °C/72 h/vacuum, and REF₃ + Li₂(CN₂) metathesis forms rare-earth cyanamides at 450–650 °C under dry Ar. [CS-5, TS-4] |
| Precursors | ZrCl₃ or ZrNCl; Li₃BN₂ or related alkali boron nitride; optional LiCl/KCl or NaCl flux. [CS-5, TS-4; Reasonable Inference] |
| Temperature program | Ball-mill or grind under Ar, seal in ampoule, heat ~650–900 °C for ~2–3 d, cool, and wash out alkali halide byproducts. [CS-5, TS-4; Reasonable Inference] |
| Atmosphere | Dry Ar loading plus sealed evacuated or inert ampoule. [CS-5, TS-4] |
| Pressure | Ambient pressure in sealed ampoule. [CS-5, TS-4] |
| Additional conditions | Salt byproduct formation is intended to drive reaction, and LiCl/KCl/NaCl may improve transport. [CS-5, TS-4, SS-4; Reasonable Inference] |
| Transferability to target | The route is chemically plausible because Zr–N halide metathesis is demonstrated, but no CS/SS/TS source directly demonstrates a Zr–B–N metathesis product; therefore this is more exploratory. [CS-5, TS-4; insufficient direct evidence from SS] |
| Estimated difficulty | **Challenging**, because the required alkali boron nitride precursor and Zr halide chemistry are air-sensitive and phase selectivity is uncertain. [CS-5, TS-4; Reasonable Inference] |

#### Route 3: Direct High-Temperature Nitridation / Sintering

| Field | Details |
|:--|:--|
| Reference basis | Rare-earth boron nitrides were made from rare-earth metal filings + BN at 1200–1400 °C for long holds, and alkaline-earth silicon nitrides were made from metal + nitride precursors at 1550–1650 °C under N₂. [TS-5, CS-3, CS-4] |
| Precursors | Zr metal or ZrH₂ powder; BN powder; N₂ or NH₃ as supplemental nitrogen source. [TS-5, CS-3, CS-4; Reasonable Inference] |
| Temperature program | Pre-react near 1000–1200 °C, regrind/repress, then hold ~1400–1600 °C for ~50–100 h; quench or controlled cool. [TS-5, CS-3, CS-4; Reasonable Inference] |
| Atmosphere | High-purity N₂, or NH₃/N₂ if stronger nitriding activity is required. [CS-3, CS-4; Reasonable Inference] |
| Pressure | Ambient pressure tube furnace or high-temperature furnace. [TS-5, CS-3, CS-4] |
| Additional conditions | Regrinding/repressing is likely needed because analogous sintering routes used repeated compaction, crushing, and long anneals. [TS-5] |
| Transferability to target | This route supplies all elements directly, but it risks forming ZrN, ZrB₂, BN-rich residues, or multiphase products because it requires extensive reconstruction of refractory solids. [TS-5, SS-5; Reasonable Inference] |
| Estimated difficulty | **Challenging**, because analogous routes require long high-temperature treatments and impurity control is nontrivial. [TS-5, SS-5] |

#### Route 4: High-Pressure High-Temperature Reactive Synthesis

| Field | Details |
|:--|:--|
| Reference basis | Zr₃N₄ was synthesized from Zr or ZrN-related precursors in a nitrogen pressure medium at up to 18 GPa and 3000 K. [SS-3] |
| Precursors | ZrN + BN, or Zr + BN with N₂ pressure medium. [SS-3; Reasonable Inference] |
| Temperature program | Compress to ~5–15 GPa, heat to ~1500–2500 K for minutes to ~1 h, quench under pressure, then decompress. [SS-3; Reasonable Inference] |
| Atmosphere | Nitrogen pressure medium or BN capsule environment. [SS-3; Reasonable Inference] |
| Pressure | High pressure, likely >5 GPa. [SS-3; Reasonable Inference] |
| Additional conditions | Small sample volume, laser or multianvil heating, and rapid quench may be needed to retain a dense or metastable phase. [SS-3; Reasonable Inference] |
| Transferability to target | This route may help stabilize unusual Zr–N coordination, but no CS or TS source directly supports high-pressure Zr–B–N synthesis; therefore CS and TS are neutral for this route. [SS-3; insufficient evidence from CS; insufficient evidence from TS] |
| Estimated difficulty | **Challenging/Very Challenging**, because the structurally similar Zr₃N₄ analogue requires extreme pressure-temperature equipment and narrow phase control. [SS-3] |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Anhydrous Halide-Flux Growth from ZrN + BN

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | ZrN powder, ≥99%, fine | Zr + N source | ZrN was used directly for Zr₂N₂Se flux synthesis, and ZrN + BN gives ZrBN₂ stoichiometry. [SS-5, TS-2; Reasonable Inference] | Refractory; may remain as impurity, as unreacted ZrN was observed in Zr₂N₂Se synthesis. [SS-5, TS-2] |
| 2 | a-BN or h-BN, degassed | B + N source | a-BN was used for La/Ce boron nitride flux syntheses. [CS-1, CS-2] | Refractory; degassing/drying used in analogue preparation. [CS-1, CS-2] |
| 3 | CaCl₂, anhydrous | Flux | CaCl₂ flux enabled LnBN₂-family synthesis at 1500 K. [CS-1, CS-2] | Hygroscopic; drying and inert handling required. [CS-1, CS-2] |
| 4 | NaCl or LiCl/KCl | Alternative flux | NaCl flux enabled Zr₂N₂Se at 900 °C, and LiCl/KCl flux enabled carbodiimide synthesis. [SS-5, TS-2, SS-4] | Flux choice may change solubility and phase selectivity. [SS-5, SS-4; Reasonable Inference] |

#### Route 2: Solid-State Metathesis / Salt-Flux Metathesis

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | ZrNCl or ZrCl₃ | Zr source | ZrNCl is the demonstrated Zr precursor for metathesis to Zr₂N₂S. [CS-5] | Air/moisture-sensitive handling likely; ZrCl₃ variant is an extrapolated precursor. [CS-5; Reasonable Inference] |
| 2 | Li₃BN₂ or Na₃BN₂ | B–N source | Li₂(CN₂) metathesis shows alkali main-group nitride anions can act as reactive N-containing precursors; Li₃BN₂ is proposed by analogy. [TS-4; Reasonable Inference] | Requires prior synthesis; likely air/moisture-sensitive. [Reasonable Inference] |
| 3 | LiCl/KCl or NaCl | Flux / transport medium | LiCl/KCl flux supports low-temperature cyanamide conversion, and NaCl flux supports Zr nitride chalcogenide formation. [SS-4, SS-5, TS-2] | Hygroscopic salts must be dried. [SS-4, SS-5; Reasonable Inference] |
| 4 | Excess Li₃N or BN | Stoichiometry adjuster | May compensate nitrogen or boron activity if ZrNCl-based stoichiometry is not clean. [Reasonable Inference] | Air-sensitive if Li₃N is used. [Reasonable Inference] |

#### Route 3: Direct High-Temperature Nitridation / Sintering

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Zr metal powder or ZrH₂ | Zr source | Metal filings/powders are used in high-temperature nitride/boron nitride syntheses. [TS-5, CS-3, CS-4; Reasonable Inference] | Fine Zr/ZrH₂ can be air-sensitive or pyrophoric. [Reasonable Inference] |
| 2 | BN powder | B + partial N source | BN powder was used directly in rare-earth boron nitride sintering. [TS-5] | Refractory and slow to react. [TS-5; Reasonable Inference] |
| 3 | N₂ or NH₃ | Nitrogen source / nitriding atmosphere | N₂ atmospheres were used for high-temperature alkaline-earth silicon nitrides; NH₃ is an extrapolated stronger nitriding source. [CS-3, CS-4; Reasonable Inference] | NH₃ is toxic/reactive; N₂ requires high purity. [Reasonable Inference] |
| 4 | Optional CaCl₂/NaCl | Mineralizer | Fluxes accelerate analogous nitride/chalcogenide formation. [CS-1, CS-2, SS-5, TS-2; Reasonable Inference] | May introduce competing flux-mediated phases. [Reasonable Inference] |

#### Route 4: High-Pressure High-Temperature Reactive Synthesis

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | ZrN powder | Zr + N source | MN/Zr-related precursors were used for high-pressure Zr₃N₄ synthesis. [SS-3] | Refractory; may persist if reaction is incomplete. [SS-3; Reasonable Inference] |
| 2 | BN powder or BN capsule | B + N source / containment | BN is the direct B–N source used in boron nitride analogues. [CS-1, CS-2, TS-5; Reasonable Inference] | Refractory; may remain unreacted. [TS-5; Reasonable Inference] |
| 3 | N₂ pressure medium | Nitrogen activity / pressure medium | Nitrogen pressure medium was used for high-pressure Zr₃N₄ synthesis. [SS-3] | High-pressure gas handling and small sample volume. [SS-3] |
| 4 | Laser absorber, if needed | Heating aid | Laser-heated DAC synthesis used laser heating for Zr₃N₄. [SS-3] | Contamination risk if absorber reacts. [Reasonable Inference] |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability

The target has **no reported convex-hull energy**, and the provided 0.000000 eV/atom value is explicitly a retrieval placeholder, so it is not used as E_hull. [Target] The only target-specific stability evidence is predicted formation energy = −0.051 eV/atom after DPA-2 relaxation, with no candidate-specific convex-hull or phonon validation. [Target]

| Source | Useful signal? | Evidence | Source-level score |
|:--|:--:|:--|:--:|
| CS | Yes | Chemically similar LaBN₂ and Zr₂N₂S have E_hull = 0.0, while CeBN₂ has E_hull = 0.073 eV/atom. [CS-1, CS-2, CS-5] | 75 |
| SS | Yes, mixed | Structurally similar Gd₄B₃C₄ and Zr₂N₂Se have E_hull = 0.0, but Zr₃N₄ is 0.061 eV/atom and CoCN₂ is 0.200 eV/atom. [SS-1, SS-3, SS-4, SS-5] | 65 |
| TS | Yes | Thermodynamic analogues listed are mostly E_hull = 0.0, including Zr₂N₂Se and LaBN₂. [TS-1, TS-2, TS-3, TS-4, TS-5] | 80 |
| Target direct hull | Insufficient | No candidate-specific E_hull is reported. [Target] | 50 |

**F1 Score: 68 / 100**

---

#### F2 + F3: Per-Route Scoring

##### Route 1: Anhydrous Halide-Flux Growth from ZrN + BN

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; proposed 1100–1250 °C follows 1500 K LnBN₂ flux chemistry. [CS-1, CS-2; Reasonable Inference] | −10 |
| T > 1400°C | No; best estimate is below 1400 °C. [CS-1, CS-2, SS-5; Reasonable Inference] | 0 |
| High pressure (> 5 GPa) | No; analogues are ambient-pressure sealed ampoule syntheses. [CS-1, CS-2, SS-5] | 0 |
| Reactive/controlled atmosphere | Yes; dry Ar, evacuated silica, or sealed ampoule conditions are used. [CS-1, CS-2, SS-5] | −15 |
| Volatile precursor requiring sealed system | No strong volatile precursor signal; sealed system is mainly for inert/flux control. [CS-1, CS-2, SS-5] | 0 |
| Multi-step process | Yes; drying/degassing, inert loading, sealing, heating, and washing are required. [CS-1, CS-2, SS-5] | −10 |
| Toxic or air-sensitive precursors | No strong evidence that ZrN/BN are toxic or highly air-sensitive; flux is moisture-sensitive but not scored here. [CS-1, CS-2, SS-5] | 0 |

**F2 Score for Route 1: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 55 | ZrN and BN are refractory solids, but flux-assisted analogues show feasible reaction/crystal growth. [CS-1, CS-2, SS-5, TS-2; Reasonable Inference] |
| Ion diffusion difficulty | 40 | Zr and B are high-melting/refractory elements, but flux routes synthesize analogues well below elemental melting points. [CS-1, CS-2, SS-5, TS-2; Reasonable Inference] |
| Structural reconstruction | 55 | ZrN + BN must reconstruct into P-6m2 ZrBN₂, but related flux syntheses form crystalline boron nitrides and Zr nitride chalcogenides. [CS-1, CS-2, SS-5, TS-2; Reasonable Inference] |

**F3 Score for Route 1: 50 / 100**

##### Route 2: Solid-State Metathesis / Salt-Flux Metathesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; metathesis analogues operate at 450–900 °C. [CS-5, TS-4; Reasonable Inference] | 0 |
| T > 1400°C | No. [CS-5, TS-4] | 0 |
| High pressure (> 5 GPa) | No; analogues are ambient-pressure ampoule/tube-furnace reactions. [CS-5, TS-4] | 0 |
| Reactive/controlled atmosphere | Yes; vacuum or dry Ar is required. [CS-5, TS-4] | −15 |
| Volatile precursor requiring sealed system | Yes if Zr halides or salt-metathesis precursors are used in sealed ampoules. [CS-5, TS-4; Reasonable Inference] | −10 |
| Multi-step process | Yes; precursor preparation, grinding, sealing, heating, and washing are expected. [CS-5, TS-4; Reasonable Inference] | −10 |
| Toxic or air-sensitive precursors | Yes; Zr halides and alkali boron nitrides are expected to require dry handling. [CS-5, TS-4; Reasonable Inference] | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 70 | Metathesis precursors are more reactive than ZrN/BN, and salt formation can drive reaction. [CS-5, TS-4; Reasonable Inference] |
| Ion diffusion difficulty | 45 | Lower reaction temperature helps, but Zr–B–N ordering still involves refractory cation/network formation and no direct ZrBN₂ metathesis analogue is reported. [CS-5, TS-4; insufficient direct evidence from SS; Reasonable Inference] |
| Structural reconstruction | 60 | ZrNCl preserves Zr–N bonding and alkali boron nitrides may supply preformed B–N units, but the target P-6m2 topology is not demonstrated. [CS-5, TS-4; Reasonable Inference] |

**F3 Score for Route 2: 58 / 100**

##### Route 3: Direct High-Temperature Nitridation / Sintering

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; analogues use 1200–1650 °C. [TS-5, CS-3, CS-4] | −10 |
| T > 1400°C | Yes; proposed final hold is ~1400–1600 °C. [TS-5, CS-3, CS-4; Reasonable Inference] | −10 |
| High pressure (> 5 GPa) | No. [TS-5, CS-3, CS-4] | 0 |
| Reactive/controlled atmosphere | Yes; N₂ or NH₃/nitriding atmosphere is required. [CS-3, CS-4; Reasonable Inference] | −15 |
| Volatile precursor requiring sealed system | No strong volatile precursor signal for Zr/BN/N₂ route. [TS-5, CS-3, CS-4] | 0 |
| Multi-step process | Yes; compaction, prereaction, crushing, recompaction, and final anneal are analogue-supported. [TS-5] | −10 |
| Toxic or air-sensitive precursors | Yes if fine Zr/ZrH₂ or NH₃ is used. [Reasonable Inference] | −10 |

**F2 Score for Route 3: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 40 | Metal/BN solid-state routes use refractory reactants and long anneals. [TS-5, CS-3, CS-4] |
| Ion diffusion difficulty | 20 | Zr/B-containing solids require high-temperature diffusion, and analogues needed 100 h or multistep high-temperature programs. [TS-5, CS-3, CS-4] |
| Structural reconstruction | 20 | The route requires major reconstruction from Zr or ZrH₂ + BN + nitrogen into the target P-6m2 network. [Target, TS-5; Reasonable Inference] |

**F3 Score for Route 3: 27 / 100**

##### Route 4: High-Pressure High-Temperature Reactive Synthesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; Zr₃N₄ analogue reached up to 3000 K. [SS-3] | −10 |
| T > 1400°C | Yes; HPHT Zr nitride synthesis can exceed 1400 °C equivalent. [SS-3] | −10 |
| High pressure (> 5 GPa) | Yes; analogue used up to 18 GPa. [SS-3] | −25 |
| Reactive/controlled atmosphere | Yes; nitrogen pressure medium is used. [SS-3] | −15 |
| Volatile precursor requiring sealed system | No CS/SS/TS volatile precursor signal for this route. [SS-3] | 0 |
| Multi-step process | Yes; pressure loading, laser/multianvil heating, quench, and recovery are required. [SS-3] | −10 |
| Toxic or air-sensitive precursors | No useful CS/SS/TS signal; neutral for this deduction. [insufficient evidence from CS; insufficient evidence from TS] | 0 |

**F2 Score for Route 4: 30 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 45 | Zr or MN precursors are available, but ZrN/BN are refractory. [SS-3; Reasonable Inference] |
| Ion diffusion difficulty | 20 | HPHT helps activate diffusion, but the route still involves refractory Zr–B–N solids and small reaction volumes. [SS-3; Reasonable Inference] |
| Structural reconstruction | 30 | High pressure can access unusual Zr–N phases, but SS-3 reports difficult narrow-window phase control. [SS-3] |

**F3 Score for Route 4: 32 / 100**

---

#### F4: Amorphization Tendency

| Check | Criterion | Applies? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | Zr and trigonal B have very different effective cation/network-former sizes. [Target; Reasonable Inference] |
| C2 | Unit cell atom count >40 | No | The described primitive target has one Zr, one B, and two inequivalent N sites, so there is no evidence for >40 atoms/cell. [Target] |
| C3 | Mixed polyhedral connectivity: vertex + edge + face sharing coexist | No | The target description emphasizes corner-sharing trigonal bipyramids and does not report edge/face-sharing coexistence. [Target] |

**F4 Score: 78 / 100**

---

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 65 | 50 | 68 | 78 | 64.8 |
| 2 | 55 | 58 | 68 | 78 | 64.3 |
| 3 | 45 | 27 | 68 | 78 | 54.0 |
| 4 | 30 | 32 | 68 | 78 | 51.5 |

| | |
|:--|:--|
| **Best Route** | Route 1, Anhydrous Halide-Flux Growth from ZrN + BN |
| **Expert adjustment (±5)** | **−3**, because target E_hull and phonons are missing, and the target B–N distance of 2.03 Å is much longer than the 1.44–1.49 Å B–N distances in La/Ce boron nitride analogues. [Target, CS-1, CS-2] |
| **Final Synthesizability Score** | **62 / 100**, based on Route 1 |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **1100–1250 °C**, bracketed by Zr₂N₂Se flux synthesis at 900 °C and LnBN₂ CaCl₂ flux synthesis at 1500 K / ~1227 °C. [SS-5, TS-2, CS-1, CS-2] |
| Preferred atmosphere | Dry Ar glovebox loading plus sealed evacuated or inert ampoule. [CS-1, CS-2, SS-5, TS-2] |
| Pressure | Ambient pressure in sealed Ta/silica ampoule. [CS-1, CS-2, SS-5, TS-2] |
| Estimated duration | ~3–7 days, using 72 h Zr₂N₂S metathesis and 7 d Zr₂N₂Se flux synthesis as anchors. [CS-5, SS-5, TS-2] |
| Critical control parameters | ZrN:BN near 1:1, anhydrous flux, inert loading, sealed containment, possible slight BN excess, slow cooling for crystallinity, and washing to remove flux. [CS-1, CS-2, SS-5, TS-2; Reasonable Inference] |
| Basis | Best supported by LnN + BN + CaCl₂ flux analogues and ZrN + NaCl flux Zr nitride analogue. [CS-1, CS-2, SS-5, TS-2] |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**
The target has negative predicted formation energy, but no true candidate-specific E_hull or phonon stability evidence is reported. [Target] Chemically and thermodynamically similar analogues include several E_hull = 0.0 entries, especially LaBN₂, Zr₂N₂S, and Zr₂N₂Se, which supports moderate thermodynamic plausibility. [CS-2, CS-5, TS-2, TS-3] The score is held below the 90–100 range because the target’s actual convex-hull position is unknown and some structurally similar materials are metastable or higher in energy. [Target, SS-3, SS-4]

**F2/F3 — Route 1**
Route 1 has moderate condition severity because it avoids high pressure but still needs >1000 °C, inert/sealed handling, and flux processing. [CS-1, CS-2, SS-5, TS-2] Its kinetics are moderate because flux can improve mass transport, but ZrN and BN are refractory and Zr₂N₂Se analogues still retained minor ZrN impurity. [SS-5, TS-2] CS and TS provide useful support for this route, while SS provides useful ZrN-flux support through Zr₂N₂Se. [CS-1, CS-2, SS-5, TS-2]

**F2/F3 — Route 2**
Route 2 avoids very high temperatures but requires air-sensitive halide/alkali nitride chemistry, controlled atmosphere, and multistep salt washing. [CS-5, TS-4; Reasonable Inference] Its kinetics are better than direct sintering because metathesis can be chemically driven by salt formation, but no direct Zr–B–N metathesis analogue is reported. [CS-5, TS-4; insufficient direct evidence from SS] The main uncertainty is whether the proposed alkali boron nitride precursor transfers intact B–N units into the ZrBN₂ structure. [Reasonable Inference]

**F2/F3 — Route 3**
Route 3 is condition-severe because analogues require 1200–1650 °C, long holds, controlled nitrogen or argon atmospheres, and repeated processing. [TS-5, CS-3, CS-4] Its kinetics are poor because direct reaction of refractory Zr/BN solids requires long diffusion distances and extensive structural reconstruction. [TS-5, CS-3, CS-4; Reasonable Inference] The route is plausible as a screening method, but the risk of ZrN, ZrB₂, or residual BN is high. [SS-5, TS-5; Reasonable Inference]

**F2/F3 — Route 4**
Route 4 is the most severe because the structurally related Zr₃N₄ synthesis used up to 18 GPa and 3000 K in a laser-heated DAC. [SS-3] Its kinetic score remains low-to-moderate because high pressure can activate phase formation but also imposes small sample volume and narrow phase windows. [SS-3] CS and TS provide insufficient direct support for a high-pressure Zr–B–N route, so the route is retained only as a contingency for metastable phase access. [insufficient evidence from CS; insufficient evidence from TS; Reasonable Inference]

**F4 — Amorphization Tendency**
The target appears structurally simple and small, with no evidence for a >40-atom unit cell. [Target] The target also reports corner-sharing connectivity rather than simultaneous vertex/edge/face-sharing networks. [Target] The one amorphization trigger is the large effective size/chemistry mismatch between Zr and trigonal B, so the amorphization risk is low–medium rather than high. [Target; Reasonable Inference]

---

### SECTION 6 — Synthesizability Interpretation

ZrBN₂ is best treated as a **moderately plausible but unvalidated metastable or near-stable phase**, because the target has negative predicted formation energy but no reported E_hull or phonon validation. [Target] The analogue support is strongest chemically for LnBN₂ flux syntheses and strongest Zr-specific for Zr₂N₂Se/Zr₂N₂S nitride frameworks. [CS-1, CS-2, CS-5, SS-5, TS-2] The most critical enabling factor is **anhydrous flux-mediated transport**, because flux routes successfully form related boron nitrides and Zr nitride chalcogenides at accessible temperatures. [CS-1, CS-2, SS-5, TS-2] The most critical limiting factor is **phase selectivity**, because ZrN persistence is reported in a close Zr nitride flux analogue and the target lacks direct thermodynamic validation. [SS-5, TS-2, Target] The unusual target B–N distance relative to La/Ce boron nitride analogues adds additional structural uncertainty. [Target, CS-1, CS-2]

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|:--|:--:|:--|
| 1 | All | Unknown true convex-hull stability and no phonon validation. [Target] | High | Treat first syntheses as exploratory and prioritize flux-grown crystals for structural verification. [CS-1, CS-2, SS-5; Reasonable Inference] |
| 2 | Route 1 | Residual ZrN impurity risk. [SS-5, TS-2] | Medium | Use excess flux, longer hold, fine ZrN powder, and repeated flux optimization. [SS-5, TS-2; Reasonable Inference] |
| 3 | Route 1 | Moisture/oxygen sensitivity of flux ampoule chemistry. [CS-1, CS-2] | Medium | Dry CaCl₂/NaCl, load in glovebox, and use sealed Ta/silica containment. [CS-1, CS-2, SS-5] |
| 4 | Route 2 | Precursor reactivity mismatch for Zr halide + alkali boron nitride. [CS-5, TS-4; Reasonable Inference] | High | Screen ZrNCl, ZrCl₃, and Li₃BN₂ ratios with LiCl/KCl flux to tune reaction activity. [CS-5, TS-4, SS-4; Reasonable Inference] |
| 5 | Route 2 | Air-sensitive or prior-synthesis precursors. [CS-5, TS-4; Reasonable Inference] | Medium | Prepare and store precursors under dry Ar and use sealed ampoules. [CS-5, TS-4] |
| 6 | Route 3 | Slow ordering kinetics in refractory Zr/BN solids. [TS-5, CS-3, CS-4] | High | Use fine powders, ZrH₂ instead of coarse Zr, repeated grind/repress cycles, and extended anneals. [TS-5; Reasonable Inference] |
| 7 | Route 3 | Competing ZrN, ZrB₂, or BN-rich phases. [SS-5, TS-5; Reasonable Inference] | High | Control nitrogen activity and test slight BN/N excess to suppress boride or nitride binaries. [CS-3, CS-4; Reasonable Inference] |
| 8 | Route 4 | Extreme pressure-temperature equipment and tiny sample scale. [SS-3] | High | Use HPHT only after flux/metathesis attempts fail, and prioritize in situ diffraction if available. [SS-3; Reasonable Inference] |
| 9 | All | Target B–N bonding differs from known La/Ce boron nitride B–N distances. [Target, CS-1, CS-2] | Medium | Validate products by single-crystal or high-resolution powder diffraction rather than composition alone. [CS-1, CS-2; Reasonable Inference] |