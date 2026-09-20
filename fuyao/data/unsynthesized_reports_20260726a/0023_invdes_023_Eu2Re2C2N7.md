> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.459 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

Evidence notation: **CS-1** means chemically similar entry 1, **SS-4** means structurally similar entry 4, and **TS-3** means thermodynamic similar entry 3. Extrapolations are explicitly marked **[Reasonable Inference]**.

---

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Sealed-Ampoule Solid-State Metathesis

| Field | Details |
|:--|:--|
| Reference basis | Rare-earth chloride carbodiimide/nitride phases were made from **RECl₃ + Li₂CN₂ + Li₃N** at **750–800 °C** in sealed Ta ampules under Ar, so this is the closest chemical route to an Eu–C–N nitride/carbodiimide target. **Insufficient evidence from TS** for metathesis-specific conditions, so TS is neutral for this route. (CS-1, CS-2, CS-4) |
| Precursors | Anhydrous EuCl₃ or EuCl₂, ReCl₃/ReCl₅, Li₂CN₂, Li₃N; ≥99.9% metals/halides preferred. ReCl₅ volatility and Eu redox choice are **[Reasonable Inference]** from the need to introduce Re and preserve nitride/carbodiimide chemistry. (CS-1, CS-2, CS-4) |
| Temperature program | Glovebox grind → seal in Ta/Nb ampoule → ramp 1–3 °C/min to **750–800 °C** → hold **24–48 h** → slow cool or furnace cool → wash LiCl/Li salts if compatible. Ramp/cooling details are **[Reasonable Inference]** because CS gives temperature/time but not full ramp profile. (CS-1, CS-4) |
| Atmosphere | Strict Ar or vacuum-sealed refractory ampoule; inert handling is required because analogous rare-earth carbodiimide routes used glovebox/sealed ampoules. (CS-1, CS-2, CS-4) |
| Pressure | Ambient pressure inside sealed ampoule. (CS-1, CS-2, CS-4) |
| Additional conditions | Use dried LiCl/KCl or in-situ LiCl byproduct as flux/mineralizer; avoid oxygen because rare-earth carbodiimide nitride phase purity was oxygen-sensitive. (CS-1, CS-2) |
| Transferability to target | Strong for Eu–N/C–N chemistry because rare-earth carbodiimide/nitride frameworks are directly represented; weaker for Re because no CS entry contains Re, so Re incorporation is **[Reasonable Inference]**. (CS-1, CS-2, CS-4) |
| Estimated difficulty | **Challenging** because the route combines air-sensitive nitrides/carbodiimides, volatile Re halides, sealed ampoules, and multi-cation phase control. (CS-1, CS-2, CS-4) |

#### Route 2: LiCl/KCl Molten-Salt Flux Metathesis / Flux Growth

| Field | Details |
|:--|:--|
| Reference basis | Structurally similar transition-metal carbodiimides were prepared in **LiCl/KCl flux** at **390–550 °C**, and rare-earth carbodiimides used LiCl/KCl flux at **500–650 °C**, so a flux route is the best-supported low-temperature pathway. (SS-1, SS-2, SS-4, CS-2) |
| Precursors | EuCl₃ or EuCl₂, Re₃N/ReN or ReCl₃, ZnNCN or Li₂CN₂, LiCl/KCl eutectic; using Re nitride instead of ReCl₅ to reduce volatility is **[Reasonable Inference]**. (SS-4, CS-2) |
| Temperature program | Dry flux/precursors at 250–300 °C under vacuum if compatible → ramp to **500–650 °C** → hold **48 h to 1–3 weeks** → slow cool 0.5–2 °C/h for crystal growth → wash flux. (SS-4, CS-2) |
| Atmosphere | Ar-sealed ampoule or dynamic vacuum for drying; structurally similar Cr₂(CN₂)₃ used dynamic vacuum and Fe/Co carbodiimides used protective Ar. (SS-1, SS-2, SS-4) |
| Pressure | Ambient pressure in sealed silica/Ta/Nb ampoule. (SS-1, SS-2, SS-4, CS-2) |
| Additional conditions | Large excess LiCl/KCl flux, anhydrous handling, possible slight excess cyanamide/nitride source to compensate C/N loss; excess C/N is **[Reasonable Inference]** from phase sensitivity in analogues. (SS-4, CS-1, CS-2) |
| Transferability to target | Good for preserving C–N units at lower temperature and improving Re/Eu diffusion; Re–Eu ordering remains uncertain because no SS entry combines rare earth + Re + carbodiimide. (SS-1, SS-2, SS-4, CS-2) |
| Estimated difficulty | **Moderate–Challenging**, and this is the recommended first attempt because it lowers temperature while keeping metathesis chemistry active. (SS-1, SS-4, CS-2) |

#### Route 3: High-Pressure N-Rich Stabilization

| Field | Details |
|:--|:--|
| Reference basis | Thermodynamic and structural analogues containing N–N units were synthesized from azides under **3–12 GPa** and **450–800 °C**, so high pressure could stabilize the target’s N-rich motif. **Insufficient evidence from CS** for high-pressure synthesis, so CS is neutral for this route. (TS-1, TS-2, TS-4, SS-3, SS-5) |
| Precursors | EuN or Eu metal, Re/Re₃N/ReN, Li₂CN₂ or C₃N₄, NaN₃/NH₄N₃ or another N-rich source; use of Re nitride and C₃N₄ is **[Reasonable Inference]**. (TS-1, TS-2, TS-4, CS-1, CS-2) |
| Temperature program | Load in BN capsule → pressurize to **6–10 GPa** → heat **600–900 °C** for 15 min–4 h → quench → decompress slowly; longer holds for Eu/Re ordering are **[Reasonable Inference]**. (TS-1, TS-2, TS-4, SS-3, SS-5) |
| Atmosphere | No gas atmosphere during high-pressure run; glovebox loading due air/moisture sensitivity. (TS-1, TS-2, SS-5) |
| Pressure | High pressure, preferably **>5 GPa**. (TS-1, TS-2, TS-4, SS-3, SS-5) |
| Additional conditions | Avoid excess azide shock/thermal risk; use BN capsule and moisture-free transfer. (TS-1, TS-2, SS-5) |
| Transferability to target | Useful if N–N subunits are essential, but the analogues are simpler alkaline-earth diazenides and not Eu–Re carbonitrides, so transferability is limited. (TS-1, TS-2, TS-4, SS-3, SS-5) |
| Estimated difficulty | **Challenging** due high-pressure apparatus, hazardous azides, and uncertain recovery of a complex Eu–Re–C–N phase. (TS-1, TS-2, SS-5) |

#### Route 4: High-Temperature Refractory-Ampoule Solid-State Nitridation

| Field | Details |
|:--|:--|
| Reference basis | Eu-containing nitridoborate LiEu₄(BN₂)₃ was reported from Li/Li₃N/EuN/BN in sealed Nb at **1950 K**, and Ce boronitride analogues were made by long Ar sintering at **1400 °C for 100 h**. **Insufficient evidence from CS and SS** for a directly analogous Eu–Re–C–N high-temperature route, so those source signals are neutral here. (TS-3, TS-5) |
| Precursors | EuN, Re metal or Re₃N/ReN, Li₂CN₂ or C₃N₄, Li₃N; using C₃N₄/Re nitride is **[Reasonable Inference]**. (TS-3, TS-5, CS-1, CS-2) |
| Temperature program | Grind/press pellet → seal in Nb/Ta → pre-react 1000–1200 °C → regrind → anneal **1300–1500 °C** for 24–100 h → slow cool. The two-step pellet/regrind program is transferred from TS-5 and adapted **[Reasonable Inference]**. (TS-5, TS-3) |
| Atmosphere | Sealed Nb/Ta ampoule or high-purity Ar. (TS-3, TS-5) |
| Pressure | Ambient pressure sealed refractory ampoule. (TS-3, TS-5) |
| Additional conditions | Regrinding/recompaction for homogeneity; possible excess Li₃N/C–N source to maintain nitrogen activity is **[Reasonable Inference]**. (TS-5, TS-3) |
| Transferability to target | Good for Eu–N robustness but risky for C–N/N–N retention at high temperature; Re diffusion improves, but C–N decomposition risk is high. (TS-3, TS-5, CS-2) |
| Estimated difficulty | **Challenging** because high temperature aids Re diffusion but may destroy cyanamide-like units. (TS-3, TS-5, CS-2) |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Sealed-Ampoule Solid-State Metathesis

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuCl₃ or EuCl₂, anhydrous | Eu source | Rare-earth trichlorides were used in the closest RE carbodiimide/nitride metathesis routes; EuCl₂ may tune Eu redox **[Reasonable Inference]**. (CS-1, CS-2, CS-4) | Air/moisture-sensitive |
| 2 | ReCl₃ or ReCl₅, anhydrous | Re source | Metal halide metathesis is the basis of CS/SS routes; Re halide selection is **[Reasonable Inference]** because no Re analogue is supplied. (CS-1, CS-4, SS-4) | ReCl₅ volatile/toxic **[Reasonable Inference]** |
| 3 | Li₂CN₂ | C–N source | Li₂CN₂/Li₂(CN₂) is the repeated carbodiimide/cyanamide source in rare-earth analogues. (CS-1, CS-2, CS-4) | Requires prior synthesis; moisture-sensitive |
| 4 | Li₃N | Nitride source / N activity buffer | Li₃N was used in La₂Cl(CN₂)N synthesis and in Eu nitridoborate precursor chemistry. (CS-1, TS-3) | Air-sensitive, reactive |
| 5 | LiCl/KCl | Flux / dilution medium | Flux improves low-temperature crystallization in rare-earth and transition-metal carbodiimides. (CS-2, SS-1, SS-4) | Hygroscopic; must be dried |

#### Route 2: LiCl/KCl Molten-Salt Flux Metathesis / Flux Growth

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuCl₃ or EuCl₂ | Eu source | Rare-earth chlorides are directly used in carbodiimide metathesis; EuCl₂ option is redox control **[Reasonable Inference]**. (CS-1, CS-2, CS-4) | Air/moisture-sensitive |
| 2 | Re₃N/ReN or ReCl₃ | Re source | A less volatile Re nitride may reduce halide volatility while still supplying Re/N; this substitution is **[Reasonable Inference]**. (TS-3, SS-4) | Re nitrides may require prior synthesis |
| 3 | ZnNCN or Li₂CN₂ | C–N source | ZnNCN enabled phase-pure Cr₂(CN₂)₃ in molten salt, while Li₂CN₂ enabled rare-earth carbodiimides. (SS-4, CS-2) | ZnNCN requires prior synthesis; Li₂CN₂ moisture-sensitive |
| 4 | LiCl/KCl eutectic | Flux | Fe/Co/Cr carbodiimides used LiCl/KCl flux at 390–550 °C. (SS-1, SS-2, SS-4) | Hygroscopic; flux removal needed |
| 5 | Li₃N, small excess | Nitrogen activity buffer | Li₃N is used in rare-earth carbodiimide nitride and Eu nitride chemistry; excess use is **[Reasonable Inference]**. (CS-1, TS-3) | Air-sensitive, reactive |

#### Route 3: High-Pressure N-Rich Stabilization

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN or Eu metal | Eu/N source | EuN appears in the Eu-containing thermodynamic analogue route. (TS-3) | Air/moisture-sensitive **[Reasonable Inference]** |
| 2 | Re, Re₃N, or ReN | Re source | Re nitride use is **[Reasonable Inference]** because no Re-containing TS/SS analogue is supplied. (TS-3, SS-4) | Re nitride prior synthesis; Re diffusion slow |
| 3 | Li₂CN₂ or C₃N₄ | C–N source | Li₂CN₂ is established in CS routes; C₃N₄ is an extrapolated dense C/N source **[Reasonable Inference]**. (CS-1, CS-2, CS-4) | C–N decomposition risk |
| 4 | NaN₃/NH₄N₃ or related azide | N-rich pressure medium/reactant | High-pressure diazenides were synthesized by controlled azide decomposition. (TS-1, TS-2, TS-4, SS-3, SS-5) | Explosive/toxic; shock-sensitive |
| 5 | BN capsule | Containment | BN crucibles/capsules are used in high-pressure nitride analogues. (TS-1, TS-2, SS-5) | Possible B contamination **[Reasonable Inference]** |

#### Route 4: High-Temperature Refractory-Ampoule Solid-State Nitridation

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN | Eu/N source | EuN is a precursor in the Eu-containing thermodynamic analogue LiEu₄(BN₂)₃. (TS-3) | Air/moisture-sensitive **[Reasonable Inference]** |
| 2 | Re metal or Re₃N/ReN | Re source | Re source choice is **[Reasonable Inference]** because no provided route directly supplies Re carbonitride synthesis. (TS-3, TS-5) | Refractory; slow diffusion |
| 3 | Li₂CN₂ or C₃N₄ | C–N source | Li₂CN₂ is established for rare-earth carbodiimide chemistry; C₃N₄ is extrapolated for high-T C/N delivery **[Reasonable Inference]**. (CS-1, CS-2) | Volatile/decomposition risk at high T |
| 4 | Li₃N | Nitrogen activity / fluxing aid | Li₃N is used in La carbodiimide nitride and Eu nitridoborate syntheses. (CS-1, TS-3) | Air-sensitive, reactive |
| 5 | Nb/Ta ampoule | Refractory sealed container | Nb/Ta-style sealed containers are used in analogous high-temperature nitride chemistry. (TS-3, CS-1) | Specialized sealing required |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability

| Evidence | Score signal |
|:--|:--|
| Candidate E_hull | Not reported; the placeholder 0 eV/atom must not be treated as real, so candidate-specific hull evidence is neutral. Insufficient evidence from CS/SS/TS for the target’s actual hull gives neutral 50 for direct hull evidence. |
| CS analogue stability | Several chemically similar rare-earth carbodiimide/cyanamide phases are reported at or near ground state, including E_hull = 0 for CS-1/CS-4 and 0.045 eV/atom for CS-2. (CS-1, CS-2, CS-4) |
| SS analogue stability | Structurally similar carbodiimides include metastable-but-synthesized Fe/Co phases around 0.20 eV/atom and Cr₂(CN₂)₃ near 0.064 eV/atom, supporting metastable accessibility rather than guaranteed ground-state stability. (SS-1, SS-2, SS-4) |
| TS analogue stability | Thermodynamic neighbors are reported as E_hull = 0, including alkaline-earth diazenides and Eu/Ce nitridoborates, but they lack the full Eu–Re–C–N chemistry. (TS-1, TS-2, TS-3, TS-4, TS-5) |

**F1 Score: 68 / 100**

#### F2 + F3: Per-Route Scoring

##### Route 1: Sealed-Ampoule Solid-State Metathesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; analogues run mainly 600–800 °C. (CS-1, CS-4) | 0 |
| T > 1400°C additional | No. (CS-1, CS-4) | 0 |
| High pressure >5 GPa | No. (CS-1, CS-2, CS-4) | 0 |
| Reactive/controlled atmosphere | Yes; sealed Ar/vacuum/glovebox handling is used. (CS-1, CS-2, CS-4) | −15 |
| Volatile precursor requiring sealed system | Yes for Re halide choice **[Reasonable Inference]**, and sealed ampoules are required in analogues. (CS-1, CS-2) | −10 |
| Multi-step process ≥3 steps | Yes; precursor preparation, glovebox loading/sealing, heating, and washing are reported. (CS-1, CS-2, CS-4) | −10 |
| Toxic or air-sensitive precursors | Yes; Li₃N/Li₂CN₂/RE halide handling is inert-atmosphere chemistry. (CS-1, CS-2) | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 75 | Halide + Li₂CN₂/Li₃N metathesis is chemically active and produces salt byproducts, but Re incorporation is extrapolated. (CS-1, CS-2, CS-4) |
| Ion diffusion difficulty | 30 | Re is refractory and Eu/Re ordering is likely slow **[Reasonable Inference]**; metathesis/liquid salt byproducts partly offset diffusion barriers. (CS-1, CS-2) |
| Structural reconstruction | 40 | The target requires a mixed Eu/Re carbonitride network, while CS analogues are simpler rare-earth carbodiimides/chlorides. (CS-1, CS-2, CS-4) |

**F3 Score for Route 1: 48 / 100**

##### Route 2: LiCl/KCl Molten-Salt Flux Metathesis / Flux Growth

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; flux analogues run 390–650 °C. (SS-1, SS-2, SS-4, CS-2) | 0 |
| T > 1400°C additional | No. (SS-1, SS-4, CS-2) | 0 |
| High pressure >5 GPa | No. (SS-1, SS-2, SS-4) | 0 |
| Reactive/controlled atmosphere | Yes; Ar or dynamic vacuum is used. (SS-1, SS-2, SS-4) | −15 |
| Volatile precursor requiring sealed system | No if Re nitride/ReCl₃ is used instead of ReCl₅; this avoidance is **[Reasonable Inference]**. (SS-4, CS-2) | 0 |
| Multi-step process ≥3 steps | Yes; flux drying, precursor synthesis/mixing, sealed heating, and washing are reported. (SS-1, SS-4, CS-2) | −10 |
| Toxic or air-sensitive precursors | Yes; air-sensitive cyanamide/nitride/halide handling is expected and analogous precursors required inert handling. (SS-1, CS-2) | −10 |

**F2 Score for Route 2: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 75 | ZnNCN/Li₂CN₂ and metal chlorides are reactive in molten-salt carbodiimide syntheses. (SS-4, CS-2) |
| Ion diffusion difficulty | 35 | Re ordering remains difficult **[Reasonable Inference]**, but LiCl/KCl flux enables synthesis far below refractory cation melting temperatures. (SS-1, SS-2, SS-4) |
| Structural reconstruction | 50 | Flux can preserve NCN/C–N motifs, but the Eu/Re mixed network is more complex than Fe/Co/Cr carbodiimides. (SS-1, SS-2, SS-4, CS-2) |

**F3 Score for Route 2: 53 / 100**

##### Route 3: High-Pressure N-Rich Stabilization

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No for the proposed 600–900 °C screening window. (TS-1, TS-2, TS-4) | 0 |
| T > 1400°C additional | No. (TS-1, TS-2, TS-4) | 0 |
| High pressure >5 GPa | Yes; 6–10 GPa is proposed and analogues use 3–12 GPa. (TS-1, TS-2, TS-4, SS-3, SS-5) | −25 |
| Reactive/controlled atmosphere | No gas atmosphere, but glovebox loading is still required. (TS-1, SS-5) | 0 |
| Volatile precursor requiring sealed system | Yes; azide/N-rich precursors require controlled containment. (TS-1, TS-2, SS-5) | −10 |
| Multi-step process ≥3 steps | Yes; azide/nitride precursor preparation, capsule loading, HP/HT treatment, and recovery are involved. (TS-1, TS-2, SS-5) | −10 |
| Toxic or air-sensitive precursors | Yes; azides are hazardous and nitride products are moisture-sensitive. (TS-1, TS-2, SS-5) | −10 |

**F2 Score for Route 3: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 65 | Azides/N-rich precursors are reactive, but Re source activation is extrapolated. (TS-1, TS-2, SS-5) |
| Ion diffusion difficulty | 25 | High pressure stabilizes N-rich units but does not solve Re/Eu ordering over a complex lattice **[Reasonable Inference]**. (TS-1, TS-2, SS-5) |
| Structural reconstruction | 35 | Binary diazenide analogues are much simpler than Eu₂Re₂C₂N₇, so full reconstruction is likely. (TS-1, TS-2, TS-4) |

**F3 Score for Route 3: 42 / 100**

##### Route 4: High-Temperature Refractory-Ampoule Solid-State Nitridation

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; TS analogues use 1400 °C or 1950 K. (TS-3, TS-5) | −10 |
| T > 1400°C additional | Yes if matching TS-3/upper Route 4 window. (TS-3, TS-5) | −10 |
| High pressure >5 GPa | No; route uses sealed ampoule/Ar at ambient pressure. (TS-3, TS-5) | 0 |
| Reactive/controlled atmosphere | Yes; sealed Nb/Ta or high-purity Ar is required. (TS-3, TS-5) | −15 |
| Volatile precursor requiring sealed system | Yes; C–N/N-rich components may decompose or volatilize at high T **[Reasonable Inference]**. (CS-2, TS-3) | −10 |
| Multi-step process ≥3 steps | Yes; pelletizing, first reaction, crushing/recompaction, and final anneal are reported for TS-5. (TS-5) | −10 |
| Toxic or air-sensitive precursors | Yes; EuN/Li₃N/nitrides require inert handling **[Reasonable Inference]**. (TS-3, CS-1) | −10 |

**F2 Score for Route 4: 35 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 40 | Dense nitride/metal precursors are less reactive than halide/cyanamide metathesis precursors. (TS-3, TS-5, CS-1) |
| Ion diffusion difficulty | 20 | High temperature helps, but refractory Re diffusion and Eu/Re ordering remain difficult **[Reasonable Inference]**. (TS-5) |
| Structural reconstruction | 30 | Long sintering and regrinding are required in TS-5, and target C–N/N–N motifs may not survive high temperature **[Reasonable Inference]**. (TS-5, CS-2) |

**F3 Score for Route 4: 30 / 100**

#### F4: Amorphization Tendency

| Check | Criterion | Trigger? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | Eu and Re have very different likely coordination/size regimes **[Reasonable Inference]**; analogous datasets do not directly quantify target radii, so insufficient evidence from CS/SS/TS for exact radius values gives neutral 50 for direct source-only scoring. |
| C2 | Unit cell atom count >40 | No | The provided target formula has 13 atoms per formula unit; no CS/SS/TS source reports the target unit cell count, so source-only evidence is neutral 50. |
| C3 | Mixed vertex + edge + face sharing coexist | No | The target description emphasizes corner-sharing motifs, while CS/TS analogues show mixed sharing in other compounds; insufficient evidence from CS/SS/TS that the target itself has vertex+edge+face coexist. (CS-1, CS-4, TS-3) |

**F4 Score: 78 / 100**

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 48 | 68 | 78 | 60.6 |
| 2 | 65 | 53 | 68 | 78 | 65.5 |
| 3 | 45 | 42 | 68 | 78 | 57.8 |
| 4 | 35 | 30 | 68 | 78 | 52.3 |

|  |  |
|:--|:--|
| **Best Route** | **Route 2: LiCl/KCl Molten-Salt Flux Metathesis / Flux Growth** |
| **Expert adjustment (±5)** | **−3.5**, because no CS/SS/TS entry directly demonstrates Eu–Re–C–N phase formation, no source reports target-specific E_hull/phonons, and Re ordering is a major kinetic risk. |
| **Final Synthesizability Score** | **62 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **500–650 °C** for first-pass flux screening; optionally extend to **750–800 °C** if metathesis is incomplete. (SS-4, CS-2, CS-1) |
| Preferred atmosphere | Ar glovebox loading; sealed silica/Ta/Nb ampoule or dynamic vacuum pre-drying. (SS-1, SS-4, CS-1, CS-2) |
| Pressure | Ambient pressure for preferred Route 2; high pressure only as fallback Route 3. (SS-1, SS-4, TS-1, TS-2) |
| Estimated duration | **48 h to 3 weeks**, with longer holds/slow cooling for crystal growth. (CS-2, SS-4) |
| Critical control parameters | Anhydrous LiCl/KCl flux, high-purity Li₂CN₂ or ZnNCN, careful Eu redox selection, avoid ReCl₅ volatility if possible, slight C/N excess as **[Reasonable Inference]**. (CS-1, CS-2, SS-4) |
| Basis | Best basis is flux/metathesis chemistry from rare-earth carbodiimides and transition-metal carbodiimides; high-pressure diazenide evidence is supportive only for N-rich stabilization. (CS-1, CS-2, SS-1, SS-4, TS-1, TS-2) |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target lacks a reported convex-hull energy, so the placeholder 0 eV/atom cannot be used and candidate-specific hull evidence is neutral. Chemically similar rare-earth carbodiimide/cyanamide phases are ground-state or near-ground-state, which supports moderate thermodynamic plausibility. (CS-1, CS-2, CS-4) Structurally similar Fe/Co carbodiimides are synthesized despite ~0.20 eV/atom metastability, so metastable synthesis remains plausible but not guaranteed. (SS-1, SS-2, SS-4) Thermodynamic analogues are stable but chemically simpler than Eu₂Re₂C₂N₇, leaving substantial uncertainty. (TS-1, TS-2, TS-3, TS-4, TS-5)

**F2/F3 — Route 1**  
Solid-state metathesis is well supported for rare-earth carbodiimide nitride chemistry, but it requires sealed ampoules, inert handling, and multiple operations. (CS-1, CS-2, CS-4) Kinetics are limited by introducing Re into a mixed Eu/Re framework, which is **[Reasonable Inference]** because no CS entry contains Re. The route is chemically plausible but less attractive than flux growth because it uses higher temperatures and more volatile halide chemistry. (CS-1, CS-2)

**F2/F3 — Route 2**  
Flux growth has the best balance of severity and kinetics because SS analogues form carbodiimides at 390–550 °C and CS analogues use LiCl/KCl at 500–650 °C. (SS-1, SS-2, SS-4, CS-2) The flux improves mass transport and helps preserve C–N units, but Eu/Re ordering and Re precursor selection remain unresolved **[Reasonable Inference]**. The route scores highest because it avoids high pressure and avoids the most severe high-temperature decomposition risk. (SS-4, CS-2)

**F2/F3 — Route 3**  
High-pressure synthesis is strongly supported for N–N diazenide motifs but only in simpler alkaline-earth systems. (TS-1, TS-2, TS-4, SS-3, SS-5) The high-pressure penalty is large, and hazardous azides make the route operationally difficult. (TS-1, TS-2, SS-5) This route is a fallback if the N-rich framework cannot be stabilized at ambient pressure. (TS-1, TS-2, TS-4)

**F2/F3 — Route 4**  
High-temperature sealed-ampoule nitridation is supported by Eu and Ce nitridoborate analogues, so Eu–N framework formation is credible. (TS-3, TS-5) However, high temperature is poorly matched to cyanamide-like C–N and N–N retention, which is a **[Reasonable Inference]** from the lower-temperature CS/SS carbodiimide routes. (CS-2, SS-4) This route is more suitable for dense nitride phases than for a C/N-rich Re–Eu phase. (TS-3, TS-5)

**F4 — Amorphization Tendency**  
The target likely has one amorphization trigger from large Eu/Re cation size/coordination mismatch, but the provided CS/SS/TS data do not directly quantify target ionic radii, so that trigger is a **[Reasonable Inference]**. The atom count criterion is not triggered from the target formula, and CS/SS/TS provide insufficient direct evidence for a >40-atom target cell. Mixed sharing is seen in some analogues, but the target description does not establish simultaneous vertex+edge+face sharing, so C3 is not triggered. (CS-1, CS-4, TS-3)

---

### SECTION 6 — Synthesizability Interpretation

Eu₂Re₂C₂N₇ is more likely a **metastable or narrowly stable** phase than a confidently established ground-state phase because no candidate-specific E_hull or phonon validation is reported, while analogous carbodiimides include both stable and metastable synthesized examples. (CS-1, CS-2, SS-1, SS-2, SS-4) The CS data strongly support rare-earth C–N/N chemistry, the SS data support low-temperature flux access to transition-metal carbodiimides, and the TS data support N-rich nitride stability under more forcing conditions. (CS-1, CS-2, SS-4, TS-1, TS-3) The most critical enabling factor is **low-temperature molten-salt metathesis**, because it improves diffusion while preserving C–N units. (SS-1, SS-4, CS-2) The most critical limiting factor is **Re incorporation and ordering** in a complex Eu/Re carbonitride lattice, since no provided analogue directly contains Eu–Re–C–N chemistry. Overall, synthesis is plausible but should be treated as a challenging exploratory target with Route 2 as the first experimental screen. (CS-2, SS-4, TS-3)

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--|:--|:--:|:--|
| 1 | All | No candidate-specific convex-hull/phonon validation, so thermodynamic stability is uncertain. | High | Prioritize low-temperature flux/metathesis screens that have precedent for metastable carbodiimides. (SS-1, SS-2, SS-4) |
| 2 | All | Re/Eu cation ordering may be slow because Re is refractory and chemically unlike Eu **[Reasonable Inference]**. | High | Use LiCl/KCl flux and long holds/slow cooling to improve diffusion and crystal growth. (SS-4, CS-2) |
| 3 | Route 1 | Re halide volatility and sealed-ampoule pressure risk **[Reasonable Inference]**. | High | Prefer Re₃N/ReN or less volatile ReCl₃ where possible, and use Ta/Nb ampoules. (CS-1, TS-3) |
| 4 | Routes 1–2 | Oxygen/moisture contamination can generate rare-earth oxycarbonitride/oxide impurities. | High | Use glovebox handling, dry flux, high-purity Li₂CN₂/ZnNCN, and sealed ampoules. (CS-1, CS-2, SS-4) |
| 5 | Route 2 | Flux removal may leach or alter product if the target is moisture-sensitive **[Reasonable Inference]**. | Medium | Test dry mechanical flux separation before water washing; water/acetone washing is used in analogues but should be validated. (CS-2, SS-4) |
| 6 | Route 3 | Azide/N-rich precursors are hazardous and high-pressure synthesis is equipment-intensive. | High | Use minimal azide loading, BN capsules, glovebox handling, and controlled decompression. (TS-1, TS-2, SS-5) |
| 7 | Route 4 | High temperature may decompose C–N/N–N units before Eu/Re ordering completes **[Reasonable Inference]**. | High | Use Route 4 only as fallback; lower-T flux routes better preserve carbodiimide motifs. (CS-2, SS-4, TS-5) |
| 8 | All | Competing rare-earth carbodiimide, rhenium nitride, or binary nitride phases may form **[Reasonable Inference]**. | Medium–High | Screen C/N excess, Eu redox state, and cooling rate; analogous phase purity depends on precursor purity and reaction window. (CS-1, CS-2, SS-2, SS-4) |