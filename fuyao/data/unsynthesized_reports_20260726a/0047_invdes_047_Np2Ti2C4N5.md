> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.916 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Halide / Carbodiimide Solid-State Metathesis

| Field | Details |
|:--|:--|
| Reference basis | CS2 and CS3 show rare-earth chlorides reacting with Li₂CN₂ / Li₃N in sealed ampoules at 600–800 °C to form C–N nitride/chloride solids; this is the closest route for controlled C/N incorporation. SS and TS give insufficient evidence for metathesis-specific chemistry, so they are neutral for this route-specific factor. [CS2, CS3] |
| Precursors | Anhydrous NpCl₃, TiCl₃ or TiCl₄, Li₂CN₂, Li₃N, plus activated carbon / TiC / Li₂C₂ to raise C:N toward Np₂Ti₂C₄N₅; Np/Ti chloride substitution is [Reasonable Inference]. [CS2, CS3] |
| Temperature program | Glovebox grind → pelletize → seal in Ta or evacuated silica ampoule → ramp 50–100 °C/h to 750–850 °C → hold 24–72 h → regrind/second anneal if needed → controlled cool; 600 °C / 2 days and 750–800 °C / 1–2 days are directly supported by CS analogues. [CS2, CS3] |
| Atmosphere | Ar-filled or evacuated sealed ampoule; CS2 used sealed Ta ampoules under Ar, and CS3 used sealed silica ampoules under vacuum. [CS2, CS3] |
| Pressure | Nominal sealed-ampoule pressure, not high pressure; CS2 used 600 mbar Ar and CS3 used vacuum-sealed ampoules. [CS2, CS3] |
| Additional conditions | Strictly dry handling, oxygen exclusion, LiCl removal if formed, and possible dry washing rather than water washing because actinide/Ti carbonitrides may be moisture-sensitive; dry-wash adaptation is [Reasonable Inference]. [CS2, CS3] |
| Transferability to target | Strongest C/N-chemistry transfer because Li₂CN₂ and Li₃N directly supply carbonitride/nitride units, but target is halide-free Np–Ti–C–N rather than La/Ce chloride carbodiimide nitride, so full structural transfer is uncertain. [CS2, CS3, Target] |
| Estimated difficulty | **Challenging**: moderate temperature but air-sensitive/toxic precursors, radiological Np handling, halide byproducts, and uncertain phase selectivity. [CS2, CS3, SS1] |

#### Route 2: Arc Melting + Reactive Annealing

| Field | Details |
|:--|:--|
| Reference basis | SS3/SS4/SS5 and TS1/TS2/TS5 show actinide/rare-earth transition-metal carbides prepared by arc melting under Ar followed by long annealing; CS1–CS3 provide insufficient evidence for arc-melted actinide/Ti carbonitrides and are neutral for this route-specific factor. [SS3, SS4, SS5, TS1, TS2, TS5] |
| Precursors | Np metal or preformed NpN/NpC, Ti metal/TiN/TiC, graphite or carbon black, and controlled N source such as N₂ overpressure or nitride-rich starting mix; using nitrides to retain N is [Reasonable Inference]. [SS3, SS4, TS1, Target] |
| Temperature program | Cold press → arc melt/remelt several times under Ar or Ar/N₂ → rapid cool → anneal 900–1100 °C for 1–10 days in sealed Ta/Nb ampoule; analogous routes used arc melting near 1400 °C and annealing at 1100 °C / 1 day plus 700 °C / 10 days or 900 °C / 10 days. [SS3, SS4, SS5, TS1, TS2] |
| Atmosphere | Purified Ar for arc melting; Ar/N₂ or sealed N-rich ampoule is [Reasonable Inference] for N retention. [SS3, SS4, SS5] |
| Pressure | Ambient / sub-atmospheric inert gas; analogous arc melting used about 0.6 atm purified Ar. [SS3, SS4, SS5] |
| Additional conditions | Multiple flips/remelts, mass-loss tracking, slight N or volatile-component excess, and long annealing for ordering; these adaptations address vapor/composition issues seen in actinide carbide analogues. [SS1, SS3, SS5] |
| Transferability to target | Good transfer for actinide/transition-metal carbide frameworks, but weak direct transfer for nitrogen stoichiometry because SS/TS analogues are mostly carbides rather than carbonitrides. [SS3, SS4, TS1, TS2, Target] |
| Estimated difficulty | **Challenging**: high temperature, radiological handling, volatile/stoichiometry loss, and likely multi-phase products. [SS1, SS2, TS5] |

#### Route 3: High-Temperature Reactive Sintering / Hot Pressing of Binary Carbide–Nitride Powders

| Field | Details |
|:--|:--|
| Reference basis | CS4/CS5 show high-temperature solid-state sintering of Ta₂S₂C at 1200 °C, SS2 shows uranium carbide formation after high-temperature homogenization/sintering, and TS3 shows rare-earth carbide powder reduction plus hot compaction at 1700–1900 °C. [CS4, CS5, SS2, TS3] |
| Precursors | Pre-synthesized NpN/NpC or Np carbonitride, TiN, TiC, graphite/carbon black, and optional salt flux/mineralizer; use of binary nitrides/carbides to control C:N is [Reasonable Inference]. [SS2, TS3, Target] |
| Temperature program | Ball mill → pelletize → seal in Ta/graphite crucible → heat 1300–1500 °C for 1–5 days → regrind/reanneal; high-temperature ranges are inferred from 1200 °C Ta carbide/sulfide sintering, 1350–1900 °C carbide analogues, and target Ti–C/N refractory bonding. [CS4, CS5, SS2, TS3, Target] |
| Atmosphere | Ar, vacuum, or N₂/Ar sealed environment; vacuum/Ar are directly supported by carbide analogues, while N₂ use for target N retention is [Reasonable Inference]. [SS2, TS3] |
| Pressure | Ambient sealed ampoule or moderate hot pressing; TS3 used hot compaction at 100 kg/cm², which is not >5 GPa. [TS3] |
| Additional conditions | Fine powders, repeated grinding, possible hot pressing, and sealed N-rich conditions to limit N loss; repeated thermal processing is supported by long annealing/sintering analogues. [CS4, CS5, TS3] |
| Transferability to target | Transferable for refractory carbide/nitride ceramic synthesis, but slower kinetics and less reactive precursors make phase-pure P1 Np₂Ti₂C₄N₅ less likely than metathesis. [CS4, CS5, SS2, Target] |
| Estimated difficulty | **Challenging**: high T, slow diffusion, radiological handling, and strong risk of binary carbide/nitride impurities. [SS2, TS3] |

**Route not advanced:** Hydrothermal cyanide synthesis is not scored as a plausible bulk route because CS1 forms a coordination cyanide framework at 125–165 °C, while the target is a dense Np/Ti carbonitride with multiple metal–C/N polyhedra; therefore CS1 gives insufficient transferability evidence and is treated as neutral 50 for route scoring. [CS1, Target]

---

### SECTION 2 — Recommended Precursors

#### Route 1: Halide / Carbodiimide Solid-State Metathesis

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | Anhydrous NpCl₃ | Np source | RECl₃ chlorides are the demonstrated cation source in CS2/CS3; replacing RECl₃ with NpCl₃ is [Reasonable Inference]. [CS2, CS3] | Radioactive/toxic and likely air-sensitive; actinide handling risk is supported by SS1. [SS1] |
| 2 | TiCl₃ preferred; TiCl₄ possible | Ti source | Chloride metathesis requires a Ti chloride analogue, but CS/SS/TS give insufficient direct Ti-chloride evidence, so this exact choice is neutral 50 and [Reasonable Inference]. [CS2, CS3] | TiCl₃ is air-sensitive; TiCl₄ is volatile/corrosive, so TiCl₃ is preferred. [Reasonable Inference] |
| 3 | Li₂CN₂ | Main C/N source | Li₂CN₂ is directly used in CS2/CS3 metathesis to introduce CN₂ units. [CS2, CS3] | Requires prior synthesis/purification and inert handling. [CS2, CS3] |
| 4 | Li₃N | Nitride source / N activity control | CS2 explicitly uses Li₃N with Li₂CN₂ for rare-earth chloride carbodiimide nitrides. [CS2] | Air/moisture-sensitive and reactive. [CS2] |
| 5 | Activated carbon, TiC, or Li₂C₂ | Supplemental carbon source | Target C:N = 4:5 is more carbon-rich than pure CN₂ chemistry, so extra carbon/carbide is [Reasonable Inference]. [Target] | Carbon may be kinetically sluggish; Li₂C₂ would be reactive/air-sensitive. [Reasonable Inference] |

#### Route 2: Arc Melting + Reactive Annealing

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | Np metal or preformed NpN/NpC | Np source and possible N/C carrier | Arc-melted actinide carbide analogues use actinide metals with graphite; using NpN/NpC to improve N/C control is [Reasonable Inference]. [SS1, SS3, TS1] | Radioactive/toxic; possible mass-loss/composition risk by analogy to actinide vapor issues. [SS1] |
| 2 | Ti metal + TiN/TiC blend | Ti source and C/N balance | Transition-metal carbide analogues use elemental metals plus graphite; TiN/TiC substitution for target C/N control is [Reasonable Inference]. [SS3, SS4, Target] | Ti powder can be reactive; TiN/TiC are refractory and slow to equilibrate. [Reasonable Inference] |
| 3 | Graphite flakes or carbon black | Carbon source | Graphite is the direct carbon source in multiple arc-melted carbide analogues. [SS3, SS4, SS5, TS4] | Low chemical activity unless finely divided or melted/reacted. [SS5, TS4] |
| 4 | N₂ atmosphere or nitride excess | Nitrogen activity control | SS/TS do not directly show nitrogen incorporation, so N₂/nitride excess is [Reasonable Inference] for target N₅ stoichiometry. [Target] | N loss or over-nitridation risk. [Reasonable Inference] |

#### Route 3: High-Temperature Reactive Sintering / Hot Pressing

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | NpN / NpC / Np carbonitride powder | Np plus C/N carrier | Binary carbide/nitride powders reduce volatile N/C balancing during sintering; exact Np precursor choice is [Reasonable Inference]. [SS2, TS3, Target] | Requires prior synthesis; radioactive/toxic; may be air-sensitive. [SS1] |
| 2 | TiN | Ti and N source | TiN supplies refractory Ti–N units needed by target Ti–N coordination; direct TiN evidence is insufficient from CS/SS/TS and is [Reasonable Inference]. [Target] | Refractory, slow diffusion. [Reasonable Inference] |
| 3 | TiC | Ti and C source | TiC supplies Ti–C units consistent with target Ti–C bonding; direct TiC precursor evidence is insufficient from CS/SS/TS and is [Reasonable Inference]. [Target] | Refractory, slow diffusion. [Reasonable Inference] |
| 4 | Graphite / carbon black | Carbon adjustment | Graphite/carbon black are used in carbide analogues and allow final C stoichiometry tuning. [SS3, SS5, TS3, TS4] | Excess C can form competing carbide/graphitic impurity. [SS2, TS3] |
| 5 | Optional LiCl/NaCl flux | Diffusion aid | Flux/mineralizer use is not directly supported by CS/SS/TS for this target and is [Reasonable Inference]. | Corrosion/contamination risk. [Reasonable Inference] |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability

| Basis | Evidence | Score impact |
|:--|:--|:--|
| Target E_hull | Candidate-specific convex-hull energy is not reported, and the placeholder 0.000000 eV/atom must not be interpreted as E_hull = 0. [Target] | Caps confidence below “confirmed ground-state.” |
| Target formation energy | Predicted formation energy is negative at −0.916 eV/atom, but no candidate-specific hull or phonon validation is reported. [Target] | Supports feasibility but not definitive stability. |
| Thermodynamic analogues | TS1–TS5 are all reported at E_hull = 0.0 eV/atom. [TS1, TS2, TS3, TS4, TS5] | Strong positive analogue signal. |
| Conflicting analogue signal | CS1 is 0.228 eV/atom and SS2 is 0.290 eV/atom, showing that high similarity can still include metastable phases. [CS1, SS2] | Prevents a >85 score. |

**F1 Score: 76 / 100**

---

#### F2 + F3: Per-Route Scoring

##### Route 1: Halide / Carbodiimide Solid-State Metathesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction | Basis |
|:--|:--:|:--:|:--|
| T > 1000°C | No | 0 | CS2/CS3 operate at 600–800 °C; target adaptation is estimated at 750–850 °C. [CS2, CS3] |
| T > 1400°C | No | 0 | No CS metathesis analogue requires this range. [CS2, CS3] |
| High pressure (>5 GPa) | No | 0 | CS2/CS3 use sealed ampoules, not high pressure. [CS2, CS3] |
| Reactive/controlled atmosphere | Yes | −15 | Ar/vacuum sealed handling is required in CS2/CS3. [CS2, CS3] |
| Volatile precursor requiring sealed system | Yes | −10 | Sealed ampoules are required, and Ti chloride volatility is [Reasonable Inference]. [CS2, CS3] |
| Multi-step process (≥3 steps) | Yes | −10 | Precursor preparation, glovebox loading, sealing/heating, cooling, and washing are reported. [CS2, CS3] |
| Toxic or air-sensitive precursors | Yes | −10 | Li₃N/Li₂CN₂/halides require inert handling; Np radiological handling is [Reasonable Inference] supported by actinide hazard in SS1. [CS2, SS1] |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 80 | Halides plus Li₂CN₂/Li₃N are chemically reactive and form C/N solids at 600–800 °C in CS2/CS3. [CS2, CS3] |
| Ion diffusion difficulty | 70 | Metathesis lowers reaction temperature relative to refractory carbide routes, but Np/Ti ordering is unproven. [CS2, CS3, Target] |
| Structural reconstruction | 45 | CS2/CS3 products are chloride carbodiimide nitrides, not the dense P1 Np–Ti carbonitride target, so reconstruction is substantial. [CS2, CS3, Target] |

**F3 Score for Route 1: 65 / 100**

---

##### Route 2: Arc Melting + Reactive Annealing

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction | Basis |
|:--|:--:|:--:|:--|
| T > 1000°C | Yes | −10 | Arc/anneal carbide analogues use 900–1400 °C plus melting. [SS3, SS4, SS5, TS1] |
| T > 1400°C | Yes | −10 | Arc melting implies local melting temperatures above normal furnace anneal conditions. [SS3, SS4, SS5] |
| High pressure (>5 GPa) | No | 0 | Analogues use ~0.6 atm Ar, not high pressure. [SS3, SS4, SS5] |
| Reactive/controlled atmosphere | Yes | −15 | Purified Ar is required, and N₂/N-rich adaptation is [Reasonable Inference]. [SS3, SS4, SS5] |
| Volatile precursor requiring sealed system | Yes | −10 | Actinide vapor/composition control issues are reported in SS1; N retention is [Reasonable Inference]. [SS1, Target] |
| Multi-step process (≥3 steps) | Yes | −10 | Mixing, pressing, arc melting, rapid cooling, and annealing are reported. [SS3, SS4, SS5] |
| Toxic or air-sensitive precursors | Yes | −10 | Actinide handling is hazardous by analogy to SS1. [SS1] |

**F2 Score for Route 2: 35 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 45 | Elemental metals/graphite are less reactive than metathesis salts, although arc melting improves contact. [SS3, SS4, SS5] |
| Ion diffusion difficulty | 60 | Arc melting and long annealing help overcome diffusion limits, but target C/N ordering is not directly supported. [SS3, SS4, TS1, Target] |
| Structural reconstruction | 30 | Actinide carbide analogues do not contain the target N-rich P1 carbonitride network, and annealing is needed for near-single-phase products. [SS3, SS5, TS5, Target] |

**F3 Score for Route 2: 45 / 100**

---

##### Route 3: High-Temperature Reactive Sintering / Hot Pressing

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction | Basis |
|:--|:--:|:--:|:--|
| T > 1000°C | Yes | −10 | CS4/CS5 use 1200 °C, SS2 uses 1350 °C, and TS3 uses 1700–1900 °C steps. [CS4, CS5, SS2, TS3] |
| T > 1400°C | Yes | −10 | TS3 requires 1700–1900 °C for carbide powder preparation, and target adaptation may need >1400 °C. [TS3, Target] |
| High pressure (>5 GPa) | No | 0 | TS3 hot compaction is 100 kg/cm², below 5 GPa. [TS3] |
| Reactive/controlled atmosphere | Yes | −15 | Vacuum/Ar atmospheres are used in SS2/TS3. [SS2, TS3] |
| Volatile precursor requiring sealed system | Yes | −10 | N retention in the target is [Reasonable Inference], and sealed processing is needed by analogy to high-temperature carbide routes. [SS2, TS3, Target] |
| Multi-step process (≥3 steps) | Yes | −10 | Powder preparation, pressing, high-temperature reaction, and annealing/hot compaction are reported. [TS3] |
| Toxic or air-sensitive precursors | Yes | −10 | Np-containing powders require radiological/inert handling by analogy to actinide synthesis concerns. [SS1] |

**F2 Score for Route 3: 35 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 40 | Binary carbides/nitrides and graphite are refractory, and analogous carbide routes require high-temperature sintering or hot compaction. [SS2, TS3] |
| Ion diffusion difficulty | 45 | Solid-state diffusion is slow at these compositions, as shown by multi-day sintering/annealing in CS4/CS5 and high-temperature carbide processing in TS3. [CS4, CS5, TS3] |
| Structural reconstruction | 26 | Forming a low-symmetry mixed C/N target from refractory binaries requires major reconstruction and long annealing. [CS4, CS5, Target] |

**F3 Score for Route 3: 37 / 100**

---

#### F4: Amorphization Tendency

| Check | Applies? | Evidence | Trigger |
|:--:|:--:|:--|:--:|
| C1 | Yes | Target contains Np and Ti cations with substantially different size/coordination environments; radius mismatch >15% is [Reasonable Inference]. [Target] | 1 |
| C2 | No | Target formula has 13 atoms per formula unit in P1 as described; CS/SS/TS give insufficient direct evidence for target cell atom count and are neutral 50 for this check. [Target] | 0 |
| C3 | No | Target reports corner and edge sharing, but not face sharing; criterion requires vertex + edge + face coexistence. [Target] | 0 |

**F4 Score: 78 / 100**  
**Risk Level: Low–Medium**

---

#### Final Score Table

| Route | F2 | F3 | F1 (shared) | F4 (shared) | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 65 | 76 | 78 | 68.4 |
| 2 | 35 | 45 | 76 | 78 | 58.4 |
| 3 | 35 | 37 | 76 | 78 | 56.4 |

| | |
|:--|:--|
| **Best Route** | Route 1 — Halide / Carbodiimide Solid-State Metathesis |
| **Expert adjustment (±5)** | −4, because the target lacks candidate-specific hull/phonon validation and no CS/SS/TS example directly demonstrates Np–Ti–C–N phase formation. [Target, CS2, CS3, SS3, TS1] |
| **Final Synthesizability Score** | **64 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **750–850 °C**, extrapolated from 600 °C / 2 days and 750–800 °C / 1–2 days metathesis analogues. [CS2, CS3] |
| Preferred atmosphere | Ar-filled sealed Ta ampoule or evacuated sealed ampoule; both are supported by CS metathesis analogues. [CS2, CS3] |
| Pressure | Sealed-ampoule pressure, approximately vacuum to ~600 mbar Ar; not high pressure. [CS2, CS3] |
| Estimated duration | 24–72 h initial reaction plus optional regrind/reanneal; CS analogues use 1–2 days. [CS2, CS3] |
| Critical control parameters | Anhydrous halides, high-purity Li₂CN₂/Li₃N, oxygen exclusion, C:N stoichiometry correction, LiCl byproduct removal, and cautious dry workup; oxygen/precursor purity issues are directly noted in CS2/CS3, and dry workup is [Reasonable Inference]. [CS2, CS3, Target] |
| Basis | Route 1 is preferred because CS2/CS3 directly support C/N metathesis, while SS/TS mostly support high-temperature carbide frameworks rather than nitrogen-rich carbonitrides. [CS2, CS3, SS3, TS1] |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target has a negative predicted formation energy, but no valid target E_hull or phonon validation is provided, so it cannot be classified as a confirmed ground-state phase. [Target] TS analogues are strongly favorable because all five thermodynamic neighbors are reported at E_hull = 0.0 eV/atom, but CS1 and SS2 show that similar materials can still sit ~0.23–0.29 eV/atom above hull. [TS1, TS2, TS3, TS4, TS5, CS1, SS2] The resulting F1 score of 76 reflects “promising but unverified” thermodynamic stability. [Target, TS1–TS5]

**F2/F3 — Route 1**  
Metathesis has the best severity score because CS2/CS3 operate at 600–800 °C in sealed ampoules rather than >1000 °C furnaces. [CS2, CS3] Its kinetic score is also highest because halides, Li₂CN₂, and Li₃N are more reactive than refractory binary carbides, but the dense P1 Np–Ti–C–N framework still requires major reconstruction from the CS analogue structures. [CS2, CS3, Target] SS/TS give insufficient evidence for metathesis-specific kinetics, so they are neutral for this route-specific factor. [SS1–SS5, TS1–TS5]

**F2/F3 — Route 2**  
Arc melting is well supported for actinide/transition-metal carbide analogues, but it is penalized for high temperature, controlled atmosphere, multi-step annealing, and actinide volatility/composition risks. [SS1, SS3, SS4, SS5, TS1] Kinetics are moderate because melting improves homogenization, yet N incorporation and preservation are not demonstrated by the carbide-dominated SS/TS analogues. [SS3, SS4, TS1, Target] CS1–CS3 provide insufficient evidence for arc-melted Np–Ti carbonitride formation and are neutral for this route-specific factor. [CS1, CS2, CS3]

**F2/F3 — Route 3**  
Reactive sintering/hot pressing is strongly penalized because CS4/CS5, SS2, and TS3 require 1200–1900 °C processing, vacuum/Ar control, and multi-step powder treatment. [CS4, CS5, SS2, TS3] Kinetics are weaker than Route 1 because refractory nitride/carbide powders require long diffusion distances and substantial structural reconstruction into the P1 target. [SS2, TS3, Target] CS1–CS3 provide insufficient evidence for this refractory binary-powder route and are neutral for this route-specific factor. [CS1, CS2, CS3]

**F4 — Amorphization Tendency**  
The main amorphization trigger is the Np/Ti cation-size mismatch, which is [Reasonable Inference] from the target’s mixed Np/Ti sublattices. [Target] The target does not exceed the >40 atom-count trigger based on the reported P1 formula description, and the connectivity description reports corner/edge sharing but not face sharing. [Target] CS/SS/TS give insufficient direct evidence for the target’s atom-count and radius-trigger checks, so direct trigger scoring relies on the target structure and treats uninformative analogue evidence as neutral. [CS1–CS5, SS1–SS5, TS1–TS5, Target]

---

### SECTION 6 — Synthesizability Interpretation

Np₂Ti₂C₄N₅ should be treated as an **unverified potentially metastable phase**, not a confirmed ground state, because the target has negative predicted formation energy but no candidate-specific convex-hull or phonon validation. [Target] The strongest positive evidence is that thermodynamic analogues in TS are all reported on hull and several structurally similar actinide/rare-earth carbides are experimentally accessible by arc melting or sintering. [TS1, TS2, TS3, TS4, TS5, SS3, SS5] The most transferable synthetic chemistry is the CS2/CS3 metathesis route because it directly introduces C/N units at moderate temperature. [CS2, CS3] The critical enabling factor is reactive C/N chemistry from Li₂CN₂/Li₃N under sealed inert conditions. [CS2, CS3] The critical limiting factor is phase and stoichiometry control for a halide-free Np–Ti carbonitride with no direct analogue, especially N retention and competing binary carbide/nitride formation. [Target, SS1, SS2, TS5]

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|---|:--:|---|
| 1 | All | No direct CS/SS/TS analogue has the exact Np–Ti–C–N composition, so transferability is incomplete. | High | Use CS2/CS3 for C/N chemistry and SS/TS for actinide/metal carbide thermal-processing guidance rather than relying on one analogue family. [CS2, CS3, SS3, TS1] |
| 2 | All | Np radiological/toxic handling and possible actinide composition control issues. | High | Use glovebox loading, sealed ampoules, mass tracking, and actinide protocols; SS1 reports actinide vapor/composition difficulty. [SS1] |
| 3 | Route 1 | Halide/oxide impurities and LiCl byproduct can obscure the target phase. | Medium–High | Use anhydrous chlorides, high-purity Li₂CN₂/Li₃N, sealed Ta/silica ampoules, and controlled post-reaction washing as in CS2/CS3. [CS2, CS3] |
| 4 | Route 1 | C:N stoichiometry mismatch from Li₂CN₂-rich chemistry. | Medium | Add controlled carbon/carbide source and run small stoichiometry screens; the need for extra carbon is [Reasonable Inference] from target C:N = 4:5. [Target] |
| 5 | Route 2 | Volatile component loss during arc melting can shift composition. | High | Use preformed nitrides/carbides, sealed post-anneal, slight N excess, and repeat mass checks; actinide vapor/composition issues are supported by SS1. [SS1] |
| 6 | Route 2 / 3 | Slow ordering kinetics and competing binary carbides/nitrides. | High | Use repeated grinding/remelting and long anneals, following SS/TS analogues that require annealing to approach single phase. [SS3, SS5, TS5] |
| 7 | Route 3 | Refractory precursor reactivity mismatch limits diffusion. | High | Use fine powders, hot pressing, and higher temperature only as needed; TS3 supports hot compaction for carbide powders. [TS3] |
| 8 | All | Crystal growth / phase-pure isolation may be difficult. | Medium | Expect powder products first; use annealing/slow cooling and phase screening because analogues can be nearly single phase but not always single-crystal accessible. [SS5, TS2, TS5] |