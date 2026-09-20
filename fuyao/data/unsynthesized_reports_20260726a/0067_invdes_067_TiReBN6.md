> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.528 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

Citation notation: CS1–CS5, SS1–SS5, and TS1–TS5 refer to the ranked entries in the provided reference sets.

#### Route 1: High-Temperature Reactive Solid-State Nitridation

| Field | Details |
|:--|:--|
| Reference basis | Nitride/boronitride analogues are accessible by high-temperature solid-state firing: EuYSi₄N₇ at 1400–1660 °C under N₂/H₂, Ce₃(BN₂)₂ at 1400 °C under Ar, and X₂YN₃ nitrides at 1200–1600 °C under N₂. (CS1, TS4, TS5) Insufficient direct evidence from SS for this exact high-temperature Ti–Re–B–N route; SS is treated as neutral 50 for this route. |
| Precursors | TiN nanopowder, Re or pre-nitrided ReNₓ powder, h-BN or amorphous B, and excess active nitrogen such as NH₃/N₂ or a small Li₃N/NaN₃ additive. [Reasonable Inference] |
| Temperature program | Grind/pelletize → ramp 5 °C/min to 900 °C and hold 6–12 h → regrind → ramp to 1400–1500 °C and hold 24–72 h → slow cool or quench depending on phase retention. [Reasonable Inference based on CS1, TS4, TS5] |
| Atmosphere | Flowing N₂ or 5% H₂/95% N₂; NH₃ may be tested to raise nitrogen chemical potential. [Reasonable Inference based on CS1, TS5] |
| Pressure | Ambient pressure. (CS1, TS4, TS5) |
| Additional conditions | Glovebox mixing, Mo/W or BN-compatible crucible, intermediate grinding, and possible nitrogen-source excess. (CS1, TS4; [Reasonable Inference]) |
| Transferability to target | This route matches bulk nitride/boronitride practice but is diffusion-limited for refractory Ti/Re/B chemistry and may not preserve the target’s short N–N units. (CS1, TS4, TS5; Target data; [Reasonable Inference]) |
| Estimated difficulty | Challenging. (CS1, TS4, TS5; [Reasonable Inference]) |

#### Route 2: Molten-Salt / Halide Flux Reactive Nitridation — Preferred

| Field | Details |
|:--|:--|
| Reference basis | LiCl/KCl flux produces FeNCN and Co/Ni NCN phases at ~390–410 °C, Cr₂(CN₂)₃ at 550 °C under dynamic vacuum, and halide flux growth is used at 500–700 °C in sealed tubes. (SS1, SS3, SS4, CS2) Re–N chloride chemistry is accessible in sealed ampoules at 140–170 °C, supporting Re–N precursor transferability. (CS5) Insufficient useful evidence from TS for molten-salt flux chemistry; TS is neutral 50 for this route. |
| Precursors | TiCl₃/TiCl₄ or TiN, ReCl₅ or ReNCl₄, reactive B–N source such as ammonia-borane/borazine or h-BN, Li₃N/NaN₃/cyanamide-derived N source, and dry LiCl/KCl flux. [Reasonable Inference based on SS1, SS3, SS4, CS3, CS5] |
| Temperature program | Dry flux/reactants at ~300 °C under vacuum → seal under Ar/vacuum → ramp 1–2 °C/min to 450 °C and hold 12–24 h → heat to 550–650 °C for 2–7 days → cool 2–4 °C/h → wash out flux. [Reasonable Inference based on SS4, CS2, SS1, SS3] |
| Atmosphere | Sealed evacuated ampoule or sealed Ar ampoule with internal nitrogen source. (SS1, SS3, SS4, CS2, CS5) |
| Pressure | Ambient external pressure with autogenous sealed-tube pressure. (SS1, SS3, CS2, CS5) |
| Additional conditions | Use 10–20× halide flux excess, strictly dried salts, glovebox loading, slow cooling for crystallization, and post-reaction washing. (SS1, SS3, SS4, CS2; [Reasonable Inference]) |
| Transferability to target | Flux lowers diffusion barriers relative to direct Ti/Re/B solid-state reaction and is most compatible with preserving N–N/B–N molecular motifs. (SS1, SS3, SS4; Target data; [Reasonable Inference]) |
| Estimated difficulty | Moderate–Challenging. (SS1, SS3, SS4, CS5; [Reasonable Inference]) |

#### Route 3: Sealed-Ampoule Ammonolysis / Molecular Precursor Route

| Field | Details |
|:--|:--|
| Reference basis | Ta/Nb nitridochloride complexes form from pentachlorides and NH₄Cl at 400 °C in sealed glass ampoules, while ReNCl₄ forms from ReCl₅ and a nitridochloride reagent at 140–170 °C under vacuum. (CS3, CS5) Re complex thermolysis under H₂ at 250–700 °C shows Re precursor processing is possible but also flags phase-control risk. (CS4) Insufficient useful evidence from TS for sealed ammonolysis; TS is neutral 50 for this route. |
| Precursors | TiCl₄/TiCl₃, ReCl₅ or ReNCl₄, BCl₃/borazine/ammonia-borane, NH₄Cl/LiNH₂/NaNH₂, and optional chloride scavenger or salt diluent. [Reasonable Inference based on CS3, CS5] |
| Temperature program | Seal mixed molecular precursors → ramp slowly to 250–400 °C and hold 4–14 days → optional anneal at 500–700 °C under NH₃/N₂ → cool slowly. [Reasonable Inference based on CS3, CS4, CS5] |
| Atmosphere | Vacuum-sealed ampoule, dry NH₃, or inert sealed environment. (CS3, CS5; [Reasonable Inference]) |
| Pressure | Ambient external pressure with sealed-ampoule autogenous pressure. (CS3, CS5) |
| Additional conditions | Moisture-free handling, volatile chloride control, staged heating to avoid rapid decomposition, and possible cold-end trapping of byproducts. (CS3, CS5; [Reasonable Inference]) |
| Transferability to target | Molecular precursors could improve Ti/Re/B mixing at lower temperature, but chloride removal and conversion to a crystalline 2D nitride remain uncertain. (CS3, CS5; Target data; [Reasonable Inference]) |
| Estimated difficulty | Challenging. (CS3, CS5; [Reasonable Inference]) |

#### Route 4: High-Pressure Nitrogen-Rich Synthesis

| Field | Details |
|:--|:--|
| Reference basis | Alkaline-earth diazenides CaN₂/SrN₂/BaN₂ are made by controlled azide decomposition at 3–12 GPa and 450–800 °C, and W₂N₃ is synthesized at 5 GPa from Na₂WO₄/hBN. (TS1, TS2, TS3, SS2, SS5) Insufficient direct evidence from CS for high-pressure Ti–Re–B–N synthesis; CS is neutral 50 for this route. |
| Precursors | TiN or Ti metal, Re or ReNₓ, h-BN/amorphous B, and NaN₃/Li₃N/NH₄N₃ as high-nitrogen-activity source. [Reasonable Inference based on TS1, TS2, TS3, SS2, SS5] |
| Temperature program | Load under glovebox → compress to 5–10 GPa → heat to 800–1200 °C for 20–60 min → quench under pressure → decompress slowly. [Reasonable Inference based on TS1, TS2, TS3, SS2, SS5] |
| Atmosphere | Sealed capsule, no external gas atmosphere. (TS1, TS2, TS3, SS2, SS5) |
| Pressure | High pressure, typically 5–10 GPa for this extrapolated target screen. [Reasonable Inference based on TS1, TS2, TS3, SS2, SS5] |
| Additional conditions | BN/Pt capsule compatibility, small sample size, N-source excess, strict azide safety, and glovebox isolation. (TS1, TS2, TS3, SS5; [Reasonable Inference]) |
| Transferability to target | This route is best aligned with stabilizing short N–N units but is experimentally expensive and may produce only small, metastable samples. (TS1, TS2, TS3, SS5; Target data; [Reasonable Inference]) |
| Estimated difficulty | Challenging. (TS1, TS2, TS3, SS2, SS5) |

---

### SECTION 2 — Recommended Precursors

#### Route 1: High-Temperature Reactive Solid-State Nitridation

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|---|---|---|---|
| 1 | TiN nanopowder, ≥99.9% | Ti/N source | Nitride solid-state analogues use refractory nitride/metal sources and high-T firing. (CS1, TS5; [Reasonable Inference]) | Refractory; slow diffusion. [Reasonable Inference] |
| 2 | Re powder or pre-nitrided ReNₓ | Re source | Re–N bonding is demonstrated in ReNCl₄, but bulk Re nitridation is not directly shown for the target. (CS5; [Reasonable Inference]) | Refractory; ReNₓ may require prior synthesis. [Reasonable Inference] |
| 3 | h-BN or amorphous B | B/N source | BN powder is used in Ce₃(BN₂)₂ and hBN is used in W₂N₃ high-pressure synthesis. (TS4, SS2) | h-BN is inert at lower T. [Reasonable Inference] |
| 4 | N₂/H₂, NH₃, Li₃N, or NaN₃ | Nitrogen chemical potential | N₂/H₂ and N₂ atmospheres are used in nitride syntheses, while azides support N-rich phases under pressure. (CS1, TS5, TS1–TS3) | NH₃ corrosive; azides hazardous/volatile. [Reasonable Inference] |

#### Route 2: Molten-Salt / Halide Flux Reactive Nitridation

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|---|---|---|---|
| 1 | LiCl/KCl eutectic, dry | Flux | LiCl/KCl flux is used for FeNCN, Co/Ni NCN, and Cr₂(CN₂)₃ synthesis. (SS1, SS3, SS4) | Hygroscopic; requires drying. (SS4; [Reasonable Inference]) |
| 2 | TiCl₃/TiCl₄ or TiN | Ti source | Halide/nitrido precursor chemistry is transferable from nitridochloride and flux examples. (CS3, CS5, SS4; [Reasonable Inference]) | TiCl₄ volatile/moisture-sensitive; TiCl₃ air-sensitive. [Reasonable Inference] |
| 3 | ReCl₅ or ReNCl₄ | Re source | ReNCl₄ is synthesized from ReCl₅ under sealed vacuum conditions. (CS5) | ReCl₅/ReNCl₄ moisture-sensitive; ReNCl₄ requires prior synthesis. (CS5; [Reasonable Inference]) |
| 4 | Ammonia-borane, borazine, or h-BN | B–N source | B–N chemistry is supported by BN-based boronitride analogues, while reactive molecular B–N sources are proposed to improve low-T incorporation. (TS4, SS2; [Reasonable Inference]) | Ammonia-borane/borazine volatile or gas-evolving; h-BN inert. [Reasonable Inference] |
| 5 | Li₃N, NaN₃, cyanamide/melamine-derived source | Active N source | NCN precursors and azides enable N-rich analogues and flux nitrides. (SS1, SS3, SS4, TS1–TS3) | Li₃N air-sensitive; NaN₃ explosive/toxic; cyanamide chemistry may leave C impurities. [Reasonable Inference] |

#### Route 3: Sealed-Ampoule Ammonolysis / Molecular Precursor Route

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|---|---|---|---|
| 1 | TiCl₄ or TiCl₃ | Ti molecular precursor | Metal pentachloride/ammonium chloride chemistry forms nitridochloride analogues. (CS3; [Reasonable Inference]) | TiCl₄ volatile and hydrolyzes; TiCl₃ air-sensitive. [Reasonable Inference] |
| 2 | ReCl₅ or ReNCl₄ | Re precursor | ReNCl₄ formation from ReCl₅ demonstrates accessible Re–N chloride chemistry. (CS5) | Moisture-sensitive; ReNCl₄ prior synthesis needed. (CS5) |
| 3 | BCl₃, borazine, or ammonia-borane | B source | Molecular B–N precursors are proposed to avoid low reactivity of h-BN. [Reasonable Inference] | Volatile/toxic or gas-evolving. [Reasonable Inference] |
| 4 | NH₄Cl, NH₃, LiNH₂, or NaNH₂ | N/ammonolysis source | NH₄Cl is used in Ta/Nb nitridochloride synthesis at 400 °C. (CS3; [Reasonable Inference]) | NH₃ pressure/corrosion; amides air-sensitive. [Reasonable Inference] |
| 5 | Alkali chloride diluent | Heat-transfer / salt medium | Halide media support flux growth and byproduct separation. (CS2, SS1, SS3) | Hygroscopic salts; washing required. (SS4; [Reasonable Inference]) |

#### Route 4: High-Pressure Nitrogen-Rich Synthesis

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|---|---|---|---|
| 1 | TiN or Ti powder | Ti source | Nitride and metal powders are used in high-T nitride analogues. (TS5; [Reasonable Inference]) | Ti powder can be air-sensitive; TiN diffusion slow. [Reasonable Inference] |
| 2 | Re powder or ReNₓ | Re source | Re–N bonding is known from ReNCl₄, but HP Re–Ti–B nitride evidence is absent. (CS5; [Reasonable Inference]) | Refractory; ReNₓ prior synthesis may be needed. [Reasonable Inference] |
| 3 | h-BN or amorphous B | B/N source | hBN is used as a precursor in W₂N₃ high-pressure synthesis and BN powder in Ce boronitride synthesis. (SS2, TS4) | h-BN may be kinetically inert. [Reasonable Inference] |
| 4 | NaN₃, NH₄N₃, Li₃N, or related azide/nitride | High-N source | Azide decomposition stabilizes diazenides at high pressure. (TS1, TS2, TS3, SS5) | Azides are shock-sensitive/toxic and require prior safe handling. (TS1–TS3; [Reasonable Inference]) |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability (Weight: 30%)

| E_hull (eV/atom) | Score |
|:--:|:--:|
| ≤ 0.05 | 90–100 |
| 0.05 – 0.20 | 65–85 |
| 0.20 – 0.50 | 35–60 |
| > 0.50 | 5–30 |

Direct target E_hull is not reported, and the 0.000000 eV/atom retrieval placeholder must not be interpreted as hull stability. (Target data) For direct target E_hull, there is insufficient evidence from CS, insufficient evidence from SS, and insufficient evidence from TS; each direct-source signal is neutral 50. (CS, SS, TS) Analogue evidence is mixed: CS contains stable or near-stable entries but also high-hull Re/Ta chloronitrido examples, SS contains several positive-hull metastable structural analogues, and TS contains stable thermodynamic analogues. (CS1–CS5, SS1–SS5, TS1–TS5)

**F1 Score: 60 / 100**

#### F2 + F3: Per-Route Scoring

##### Route 1: High-Temperature Reactive Solid-State Nitridation

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; high-T nitride analogues use 1200–1660 °C. (CS1, TS4, TS5) | −10 |
| T > 1400°C (additional) | Yes; preferred screen reaches 1400–1500 °C. (CS1, TS4; [Reasonable Inference]) | −10 |
| High pressure (> 5 GPa) | No for this route. (CS1, TS4, TS5) | 0 |
| Reactive/controlled atmosphere | Yes; N₂/H₂, N₂, or NH₃ control is required. (CS1, TS5; [Reasonable Inference]) | −15 |
| Volatile precursor requiring sealed system | No if using TiN/Re/h-BN solids. [Reasonable Inference] | 0 |
| Multi-step process (≥3 steps) | Yes; grinding, firing, regrinding, and refiring are expected. (CS1, TS4; [Reasonable Inference]) | −10 |
| Toxic or air-sensitive precursors | No major deduction if nitride/metal powders are used. [Reasonable Inference] | 0 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 35 | TiN/Re/h-BN are refractory or kinetically sluggish relative to molecular/flux precursors. [Reasonable Inference based on CS1, TS4] |
| Ion diffusion difficulty | 15 | Re/Ti/B include high-melting cations/network formers, and direct solid-state diffusion is unfavorable. [Reasonable Inference; insufficient direct CS/SS/TS diffusion data] |
| Structural reconstruction | 30 | Forming a low-symmetry Ti–Re–B–N sheet from simple powders requires substantial reconstruction. (Target data; [Reasonable Inference]) |

**F3 Score for Route 1: 27 / 100**

##### Route 2: Molten-Salt / Halide Flux Reactive Nitridation

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; flux analogues operate near 390–700 °C. (SS1, SS3, SS4, CS2) | 0 |
| T > 1400°C (additional) | No. (SS1, SS3, SS4, CS2) | 0 |
| High pressure (> 5 GPa) | No. (SS1, SS3, SS4, CS2) | 0 |
| Reactive/controlled atmosphere | Yes; Ar, vacuum, or sealed ampoule control is required. (SS1, SS3, SS4, CS2) | −15 |
| Volatile precursor requiring sealed system | Yes; halide/N-rich precursor route likely requires sealed containment. (CS3, CS5; [Reasonable Inference]) | −10 |
| Multi-step process (≥3 steps) | Yes; drying, glovebox mixing, sealing, heating, cooling, and washing are required. (SS4, CS2; [Reasonable Inference]) | −10 |
| Toxic or air-sensitive precursors | Yes; Ti/Re halides and active N sources are moisture-sensitive or hazardous. (CS5, TS1–TS3; [Reasonable Inference]) | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 70 | Metal halides, NCN-like sources, and fluxes are more reactive than dense nitrides. (SS1, SS3, SS4, CS3, CS5) |
| Ion diffusion difficulty | 45 | Flux synthesis lowers diffusion barriers relative to solid-state firing, but Ti/Re/B remain compositionally demanding. (SS1, SS3, SS4; [Reasonable Inference]) |
| Structural reconstruction | 55 | Flux routes form crystalline NCN/nitride-like phases at lower T, but the target quaternary P1 sheet is not directly matched. (SS1, SS3, SS4; Target data; [Reasonable Inference]) |

**F3 Score for Route 2: 57 / 100**

##### Route 3: Sealed-Ampoule Ammonolysis / Molecular Precursor Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; reference ammonolysis/ampoule routes are 140–400 °C, with possible extrapolated anneal ≤700 °C. (CS3, CS5; [Reasonable Inference]) | 0 |
| T > 1400°C (additional) | No. (CS3, CS5) | 0 |
| High pressure (> 5 GPa) | No. (CS3, CS5) | 0 |
| Reactive/controlled atmosphere | Yes; vacuum/NH₃/sealed conditions are required. (CS3, CS5) | −15 |
| Volatile precursor requiring sealed system | Yes; halide/ammonolysis chemistry requires containment. (CS3, CS5; [Reasonable Inference]) | −10 |
| Multi-step process (≥3 steps) | Yes; precursor handling, sealing, staged heating, and annealing/washing are expected. (CS3, CS5; [Reasonable Inference]) | −10 |
| Toxic or air-sensitive precursors | Yes; metal halides and amide/NH₃ reagents are moisture-sensitive or hazardous. (CS3, CS5; [Reasonable Inference]) | −10 |

**F2 Score for Route 3: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 80 | Molecular halides and NH₄Cl/ammonolysis reagents are highly reactive at low temperature. (CS3, CS5) |
| Ion diffusion difficulty | 35 | Molecular mixing helps, but no flux analogue directly demonstrates long-range Ti/Re/B ordering. (CS3, CS5; insufficient evidence from SS/TS) |
| Structural reconstruction | 40 | Conversion from molecular chlorides to a crystalline 2D nitride sheet is a major reconstruction. (CS3, CS5; Target data; [Reasonable Inference]) |

**F3 Score for Route 3: 52 / 100**

##### Route 4: High-Pressure Nitrogen-Rich Synthesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes for the upper part of the proposed 800–1200 °C screen. (SS2; [Reasonable Inference]) | −10 |
| T > 1400°C (additional) | No for the proposed screen, although SS2 reaches higher temperatures for W₂N₃. (SS2; [Reasonable Inference]) | 0 |
| High pressure (> 5 GPa) | Yes; diazenide/high-pressure analogues use 3–12 GPa and the target screen uses 5–10 GPa. (TS1–TS3, SS5; [Reasonable Inference]) | −25 |
| Reactive/controlled atmosphere | No external reactive gas; reaction occurs in sealed capsule. (TS1–TS3, SS5) | 0 |
| Volatile precursor requiring sealed system | Yes if azides or active N sources are used. (TS1–TS3; [Reasonable Inference]) | −10 |
| Multi-step process (≥3 steps) | Yes; precursor preparation/loading, compression, heating, quenching, and recovery are required. (TS1–TS3, SS5) | −10 |
| Toxic or air-sensitive precursors | Yes; azides and moisture-sensitive products require careful handling. (TS1–TS3, SS5) | −10 |

**F2 Score for Route 4: 35 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 65 | Azides/Li₃N provide high nitrogen activity, but Ti/Re/B sources remain refractory. (TS1–TS3, SS5; [Reasonable Inference]) |
| Ion diffusion difficulty | 35 | High P–T treatment improves reaction driving force but short dwell times and refractory cations limit ordering. (TS1–TS3, SS2; [Reasonable Inference]) |
| Structural reconstruction | 45 | High pressure supports N–N-containing analogues, but no Ti–Re–B–N sheet analogue is reported. (TS1–TS3, SS5; Target data; [Reasonable Inference]) |

**F3 Score for Route 4: 48 / 100**

#### F4: Amorphization Tendency (Weight: 20%)

For direct target amorphization metrics, there is insufficient evidence from CS, insufficient evidence from SS, and insufficient evidence from TS; each source is neutral 50 for direct F4 evidence. The F4 score below uses the provided target structure and physicochemical extrapolation. (Target data; [Reasonable Inference])

| Check | Criterion | Applies? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | B as a small cationic/network-forming center differs strongly from Ti/Re coordination environments. (Target data; [Reasonable Inference]) |
| C2 | Unit cell atom count >40 | No | The structure formula TiReBN₆ contains 9 atoms per formula unit, and no >40-atom cell is reported. (Target data) |
| C3 | Mixed polyhedral connectivity: vertex + edge + face sharing coexist | No / not proven | Face-sharing TiN₆ units are reported, but coexistence of vertex, edge, and face sharing is not fully established. (Target data) |

| Triggers | Score | Risk Level |
|:--:|:--:|:--|
| 1 | 75 | Low–Medium |

**F4 Score: 75 / 100**

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 27 | 60 | 75 | 53.5 |
| 2 | 55 | 57 | 60 | 75 | 61.0 |
| 3 | 55 | 52 | 60 | 75 | 59.8 |
| 4 | 35 | 48 | 60 | 75 | 53.8 |

|  |  |
|:--|:--|
| **Best Route** | Route 2, Molten-Salt / Halide Flux Reactive Nitridation |
| **Expert adjustment (±5)** | −2, because no candidate-specific convex-hull or phonon validation is reported and no exact Ti–Re–B–N analogue appears in CS/SS/TS. (Target data; CS/SS/TS) |
| **Final Synthesizability Score** | **59 / 100**, based on Route 2. |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | 450–650 °C for initial flux screening, extend to 700 °C only if crystallinity is poor. (SS1, SS3, SS4, CS2; [Reasonable Inference]) |
| Preferred atmosphere | Sealed evacuated or Ar ampoule with internal active nitrogen source. (SS1, SS3, SS4, CS2, CS5) |
| Pressure | Ambient external pressure with sealed-tube autogenous pressure. (SS1, SS3, CS2, CS5) |
| Estimated duration | 2–7 days, with slow cooling at ~2–4 °C/h for crystal growth. (CS2, SS4; [Reasonable Inference]) |
| Critical control parameters | Dry LiCl/KCl flux, glovebox loading, N-source excess, Ti:Re:B stoichiometry control, volatile chloride containment, slow cooling, and post-reaction flux removal. (SS1, SS3, SS4, CS2, CS5; [Reasonable Inference]) |
| Basis | Best supported by low-temperature flux NCN/nitride analogues and sealed Re–N chloride chemistry. (SS1, SS3, SS4, CS5) |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target has a negative predicted formation energy, but no target-specific E_hull or phonon validation is reported, so the placeholder hull value is not used. (Target data) CS gives mixed analogue stability because CS1/CS2 are hull-stable and CS5 is near-hull, while CS3/CS4 have very high reported hull energies. (CS1–CS5) SS suggests metastable structural analogues can still be synthesized, since several SS entries have E_hull ~0.06–0.34 eV/atom yet are reported experimentally. (SS1–SS4) TS is favorable because listed thermodynamic analogues are hull-stable, but these are chemically different Ca/Sr/Ba/Ce/U systems rather than Ti–Re–B–N. (TS1–TS5)

**F2 — Route 1**  
Route 1 is penalized for high temperature above 1000 °C and likely above 1400 °C, matching CS1/TS4/TS5 nitride synthesis conditions. (CS1, TS4, TS5) It also requires controlled N₂/N₂–H₂ or NH₃ chemistry and repeated grinding/firing, which increases operational severity. (CS1, TS5; [Reasonable Inference]) Insufficient direct evidence from SS supports Route 1, so SS is neutral 50 for this route’s severity. (SS)

**F3 — Route 1**  
The kinetic score is low because TiN/Re/h-BN-type powders are expected to be refractory and slow to interdiffuse. [Reasonable Inference based on CS1, TS4, TS5] The target requires reconstructing into a low-symmetry 2D Ti–Re–B–N sheet, which is not matched by the high-temperature analogues. (Target data; CS1, TS4, TS5) The main uncertainty is whether a more active Re–N precursor could improve the route enough to compete with flux synthesis. (CS5; [Reasonable Inference])

**F2 — Route 2**  
Route 2 avoids >1000 °C operation because SS flux analogues crystallize around 390–550 °C and CS2 flux growth occurs at 500–700 °C. (SS1, SS3, SS4, CS2) It is still penalized for sealed/controlled atmosphere, volatile halide or active nitrogen reagents, multi-step handling, and air-sensitive components. (SS4, CS3, CS5; [Reasonable Inference]) TS provides insufficient useful flux-route evidence and is neutral 50 for Route 2 severity. (TS)

**F3 — Route 2**  
Flux chemistry receives the best kinetic score because LiCl/KCl lowers reaction temperature and enables crystallization of NCN/nitride-like analogues. (SS1, SS3, SS4) The route still has moderate diffusion and reconstruction risk because no analogue contains the exact Ti–Re–B–N quaternary sheet. (Target data; SS1, SS3, SS4; [Reasonable Inference]) The main uncertainty is whether B incorporates as the target B–N/Re–B environment rather than forming separate BN or boride/nitride phases. (TS4, SS2; [Reasonable Inference])

**F2 — Route 3**  
Route 3 benefits from low-temperature sealed-ampoule nitridochloride chemistry at 140–400 °C. (CS3, CS5) It is penalized for vacuum/NH₃ control, volatile chlorides, multi-step molecular precursor handling, and moisture-sensitive reagents. (CS3, CS5; [Reasonable Inference]) TS provides insufficient useful evidence for sealed ammonolysis of this target and is neutral 50 for this route. (TS)

**F3 — Route 3**  
The precursor activity is high because halides and ammonolysis reagents react at much lower temperature than refractory nitrides. (CS3, CS5) The kinetic risk is structural reconstruction: molecular chloride products in CS3/CS5 are zero- or one-dimensional chloronitrido species, while the target is a 2D Ti–Re–B–N sheet. (CS3, CS5; Target data) The route may produce amorphous or chloride-contaminated intermediates before crystallizing the target. [Reasonable Inference based on CS3, CS5]

**F2 — Route 4**  
Route 4 is strongly penalized for high pressure because TS/SS diazenide analogues require 3–12 GPa and W₂N₃ uses 5 GPa. (TS1–TS3, SS2, SS5) It also involves hazardous active N sources, sealed capsule handling, and multi-step high-pressure processing. (TS1–TS3, SS5) CS gives insufficient useful high-pressure evidence and is neutral 50 for this route. (CS)

**F3 — Route 4**  
High pressure is favorable for N-rich phases with short N–N bonds, as shown by alkaline-earth diazenides. (TS1–TS3, SS5) The kinetic score remains moderate because refractory Ti/Re/B sources must order within short high-pressure dwell times. (SS2, TS1–TS3; [Reasonable Inference]) The remaining uncertainty is whether pressure stabilizes the desired 2D sheet or instead favors denser competing nitrides/diazenides. (TS1–TS3, SS2; [Reasonable Inference])

**F4 — Amorphization Tendency**  
The target has one clear amorphization trigger from strong cation-size/coordination mismatch involving B versus Ti/Re environments. (Target data; [Reasonable Inference]) The target does not trigger the >40 atom-count criterion based on the provided TiReBN₆ formula unit. (Target data) The mixed vertex/edge/face-sharing criterion is not fully triggered because only face-sharing TiN₆ units are explicitly reported. (Target data) CS/SS/TS do not directly resolve target amorphization tendency, so all three are neutral 50 for direct F4 source evidence. (CS, SS, TS)

---

### SECTION 6 — Synthesizability Interpretation

TiReBN₆ is best treated as a likely metastable or near-metastable target rather than an established ground-state phase because candidate-specific E_hull and phonons are absent despite a negative predicted formation energy. (Target data) The analogues support synthetic plausibility for nitrides, boronitrides, Re–N chlorides, and N–N-containing phases, but no CS/SS/TS entry directly matches Ti–Re–B–N chemistry. (CS1, CS5, SS1–SS4, TS1–TS4) The most important enabling factor is the use of flux or molecular precursors to reduce diffusion limitations and preserve reactive N/B–N motifs. (SS1, SS3, SS4, CS3, CS5) The most important limiting factor is simultaneous control of Ti/Re/B stoichiometry, nitrogen activity, and competing BN/Re/Ti nitride phases. (CS1, CS5, TS4, SS2; [Reasonable Inference]) Overall, the target is feasible enough to screen experimentally but not strong enough to call readily synthesizable without additional hull, phonon, or small-scale phase-screen evidence. (Target data; CS/SS/TS)

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy (from CS/SS/TS) |
|:--:|:--:|---|:--:|---|
| 1 | All | No candidate-specific E_hull or phonon validation, so ground-state stability is unresolved. (Target data) | High | Treat as metastable screening; compare products against predicted pattern and avoid interpreting placeholder hull as stability. (Target data; SS1–SS4) |
| 2 | All | Competing TiN, Re/ReNₓ, BN, borides, or chloride residues may form. [Reasonable Inference based on CS5, TS4, SS2] | High | Use flux/molecular precursors and staged heating to improve mixing and reduce binary phase segregation. (SS1, SS3, SS4, CS3, CS5) |
| 3 | All | Short N–N units may be lost at high temperature or low nitrogen chemical potential. (Target data; [Reasonable Inference]) | High | Use sealed N-rich flux chemistry or high-pressure azide decomposition to maintain nitrogen activity. (TS1–TS3, SS5, SS1, SS3) |
| 4 | Route 1 | Slow ordering kinetics from refractory Ti/Re/B-containing powders. [Reasonable Inference based on CS1, TS4, TS5] | High | Apply repeated grinding/firing or switch to flux/molecular precursors. (CS1, TS4, SS4) |
| 5 | Route 2 | Halide volatility, moisture sensitivity, and flux contamination may obscure phase identification. (CS3, CS5, SS4; [Reasonable Inference]) | Medium–High | Dry salts/reactants, load in glovebox, use sealed ampoules, slow cool, and wash flux carefully. (SS4, CS2, CS5) |
| 6 | Route 3 | Molecular ammonolysis may stop at chloronitrido complexes instead of forming the 2D nitride sheet. (CS3, CS5; Target data) | Medium–High | Add a post-ammonolysis nitridation/anneal and screen chloride scavengers or salt diluents. [Reasonable Inference based on CS3, CS5, SS4] |
| 7 | Route 4 | High-pressure synthesis requires specialized equipment and gives small batches. (TS1–TS3, SS2, SS5) | High | Use multianvil screening only after flux/ampoule attempts, and quench under pressure to retain metastable N-rich phases. (TS1–TS3, SS5) |
| 8 | Route 2 | Crystal growth and stoichiometry control may be narrow for quaternary Ti:Re:B:N ordering. (SS1, SS3, SS4; [Reasonable Inference]) | Medium | Use excess flux, slow cooling, and systematic N-source / Ti:Re:B ratio screens. (CS2, SS4) |