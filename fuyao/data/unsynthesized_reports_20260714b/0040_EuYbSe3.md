Source tags: **[CS#]** = chemical similarity entry, **[SS#]** = structural similarity entry, **[TS#]** = thermodynamic similarity entry, **[Target]** = target prompt, **[Reasonable Inference]** = extrapolated from supplied data plus basic synthesis chemistry.

---

### SECTION 1 — Possible Synthesis Routes

#### Route 1: KI-Assisted High-Temperature Solid-State Sintering

| Field | Details |
|:--|:--|
| Reference basis | Closest formula precedent is **LnYbSe₃** made from elements at 1223 K with KI in sealed carbon-coated fused-silica tubes; SmYbSe₃ and PrYbSe₃ are direct chemical analogues, though Cmcm rather than target Pnma. [CS1, CS5] Insufficient evidence from SS for KI-assisted YbEuSe₃ synthesis → neutral 50. Insufficient evidence from TS for KI-assisted YbEuSe₃ synthesis → neutral 50. |
| Precursors | Eu metal, Yb metal, Se, KI mineralizer/flux, all handled dry and air-free. [CS1, CS5, Reasonable Inference] |
| Temperature program | Heat to ~1223 K / 950 °C over ~24 h, hold ~96 h, cool slowly to ~823 K over ~144 h, then cool rapidly to room temperature. [CS1, CS5] |
| Atmosphere | Ar glovebox loading, sealed under vacuum / low pressure in fused-silica tube. [CS1, CS5] |
| Pressure | Ambient external pressure; sealed ampoule internal Se vapor pressure expected at high T. [CS1, CS5, Reasonable Inference] |
| Additional conditions | Carbon-coated silica tube, KI removable by water washing, acetone drying. [CS1, CS5] |
| Transferability to target | Strong chemical transfer because target is Yb–Eu–Se with the same ABSe₃ stoichiometry as LnYbSe₃ analogues; adaptation is needed because Eu may favor Eu²⁺ chemistry and the target has Pnma symmetry plus a Se–Se bond. [CS1, CS5, Target, Reasonable Inference] |
| Estimated difficulty | **Moderate** because conditions are standard sealed-tube solid-state chemistry but phase purity and polymorph selection are nontrivial. [CS1, CS5] |

#### Route 2: Sb₂Se₃ Flux Growth — Recommended Discovery Route

| Field | Details |
|:--|:--|
| Reference basis | EuLn₂Se₄ analogues, including late-lanthanide systems, are Pnma and grown from Eu, Ln, Se, and Sb₂Se₃ flux at 1000 °C. [CS2–CS4] Sb₂Se₃ flux also grows MSe₃-type crystals in a sealed ampoule. [SS5] Insufficient evidence from TS for Sb₂Se₃ flux specifically in Eu–Yb–Se → neutral 50. |
| Precursors | Eu metal, Yb metal, Se, Sb₂Se₃ flux; optional slight Se excess to maintain Se chemical potential. [CS2–CS4, SS5, Reasonable Inference] |
| Temperature program | Ramp 2 °C/min to 500 °C, hold 1 h; ramp 0.5 °C/min to 1000 °C, hold 7 d; cool 0.05 °C/min to 550 °C, hold 2 d; cool 0.5 °C/min to room temperature. [CS2–CS4] |
| Atmosphere | Ar glovebox loading, sealed evacuated fused-silica ampoule. [CS2–CS4, SS5] |
| Pressure | Ambient external pressure; sealed vacuum ampoule. [CS2–CS4, SS5] |
| Additional conditions | Starting screen Eu:Yb:Se:Sb₂Se₃ ≈ 1:1:3:0.25–0.5 is inferred from Eu:Ln:Q:Sb₂Q₃ = 1:2:4:0.5 flux precedent. [CS2–CS4, Reasonable Inference] |
| Transferability to target | Strong structural transfer because EuLn₂Se₄ analogues are Pnma with Eu 8-coordinate environments and LnSe₆ octahedra, matching key target motifs; stoichiometry must be adapted from EuLn₂Se₄ to EuYbSe₃. [CS2–CS4, Target, Reasonable Inference] |
| Estimated difficulty | **Moderate to challenging** because flux growth supports crystallization but CS reports low yield and EuSbSe₃ impurities for some EuLn₂Se₄ selenides. [CS2–CS4] |

#### Route 3: Two-Step Binary-Selenide Solid-State Annealing

| Field | Details |
|:--|:--|
| Reference basis | Eu–selenide structural/thermodynamic analogues were made by first preparing binary intermediates, then selenizing, homogenizing, and reheating. [SS2, SS3, TS2, TS3] Insufficient evidence from CS for binary-selenide preformation in YbEuSe₃ → neutral 50. |
| Precursors | EuSe, Yb₂Se₃ or YbSeₓ, plus Se to reach Eu:Yb:Se = 1:1:3. [SS2, SS3, TS2, TS3, Reasonable Inference] |
| Temperature program | Prepare binaries near 850 °C, grind/homogenize, anneal with Se near 750–850 °C for 15–50 h, then repeat grinding/reheating if PXRD shows residual binaries. [SS2, SS3, TS2, TS3, Reasonable Inference] |
| Atmosphere | Ar glovebox handling, sealed quartz ampoule under Ar or vacuum. [SS2, SS3, TS2, TS3] |
| Pressure | Ambient external pressure. [SS2, SS3, TS2, TS3] |
| Additional conditions | Multiple grinding/homogenization cycles improve cation mixing and reduce elemental Se loss. [SS2, SS3, TS2, TS3, Reasonable Inference] |
| Transferability to target | Moderate transfer because the method lowers reactivity mismatch by using preformed selenides, but no supplied analogue shows the exact YbEuSe₃ phase by this route. [SS2, SS3, TS2, TS3, Reasonable Inference] |
| Estimated difficulty | **Moderate** because equipment is standard but ordering kinetics may be slow. [SS2, SS3, TS2, TS3] |

#### Route 4: High-Pressure Elemental Synthesis

| Field | Details |
|:--|:--|
| Reference basis | The top structural and thermodynamic analogue YbSe₂ contains Yb–Se bonding and Se–Se contacts near the target Se–Se distance, and was synthesized at 14–70 kbar and 400–2000 °C. [SS1, TS1, Target] Insufficient evidence from CS for high-pressure YbEuSe₃ synthesis → neutral 50. |
| Precursors | Eu metal, Yb metal, Se in 1:1:3 stoichiometry, sealed in BN or comparable inert capsule. [SS1, TS1, Reasonable Inference] |
| Temperature program | Initial screen ~900–1200 °C under pressure, hold several hours to 1 d, then quench or controlled cool before decompression. [SS1, TS1, Reasonable Inference] |
| Atmosphere | Capsule-contained; oxygen contamination should be minimized. [SS1, TS1] |
| Pressure | High pressure, likely 1.4–7 GPa by analogy to YbSe₂; >5 GPa may be needed if the Pnma Se–Se-bearing phase is not stabilized at ambient pressure. [SS1, TS1, Reasonable Inference] |
| Additional conditions | Use inert capsule materials such as BN to avoid reaction with rare-earth metals and selenium. [SS1, TS1, Reasonable Inference] |
| Transferability to target | Useful if ambient-pressure routes produce binaries or competing Eu/Yb selenides; high pressure may stabilize dense/Se–Se-containing frameworks. [SS1, TS1, Target, Reasonable Inference] |
| Estimated difficulty | **Challenging** because it requires multi-anvil or equivalent high-pressure equipment. [SS1, TS1] |

#### Route 5: I₂-Assisted Chemical Vapor Transport / Recrystallization

| Field | Details |
|:--|:--|
| Reference basis | CVT with I₂ in evacuated silica tubes produced thermodynamically similar Pb–Se crystals, but no CS or SS entry directly supports Eu–Yb–Se transport. [TS4] Insufficient evidence from CS for Eu/Yb CVT → neutral 50. Insufficient evidence from SS for Eu/Yb CVT → neutral 50. |
| Precursors | Pre-reacted YbEuSe₃ powder or Eu/Yb/Se feed, plus small I₂ transport agent. [TS4, Reasonable Inference] |
| Temperature program | Pre-react feed near 800–950 °C, then transport in ~800–850 °C gradient for ~2 weeks. [TS4, Reasonable Inference] |
| Atmosphere | Evacuated sealed silica tube. [TS4] |
| Pressure | Ambient external pressure; sealed evacuated tube. [TS4] |
| Additional conditions | Low I₂ loading is needed to limit iodide side reactions with Eu/Yb. [TS4, Reasonable Inference] |
| Transferability to target | Weak to moderate; CVT may improve crystal size but composition control for ternary Eu–Yb–Se is uncertain. [TS4, Reasonable Inference] |
| Estimated difficulty | **Challenging** because transport chemistry is unsupported for Eu/Yb in the supplied CS/SS data. [TS4, Reasonable Inference] |

---

### SECTION 2 — Recommended Precursors

#### Route 1: KI-Assisted High-Temperature Solid-State Sintering

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | Eu metal, ≥99.9% | Eu source | Eu is used directly in Eu–Ln–Se flux analogues. [CS2–CS4] | Air-sensitive rare-earth metal. [CS2–CS4, Reasonable Inference] |
| 2 | Yb metal, ≥99.9% | Yb source | Yb metal is used in LnYbSe₃ solid-state syntheses. [CS1, CS5] | Air-sensitive; may oxidize before sealing. [CS1, CS5, Reasonable Inference] |
| 3 | Se shot/powder, ≥99.99% | Chalcogen source | Elemental Se is used in LnYbSe₃ syntheses. [CS1, CS5] | Volatile/toxic at synthesis T; sealed tube required. [CS1, CS5, Reasonable Inference] |
| 4 | KI, dry, ≥99.9% | Mineralizer/flux | KI is present in the LnYbSe₃ solid-state route and is removed by washing. [CS1, CS5] | Hygroscopic; possible K/I contamination if washing is incomplete. [CS1, CS5, Reasonable Inference] |

#### Route 2: Sb₂Se₃ Flux Growth

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | Eu metal, ≥99.9% | Eu source | Eu is a direct precursor in EuLn₂Se₄ Pnma flux syntheses. [CS2–CS4] | Air-sensitive; requires glovebox loading. [CS2–CS4] |
| 2 | Yb metal, ≥99.9% | Yb source | Yb is listed among lanthanide precursors for EuLn₂Q₄ flux chemistry. [CS2–CS4] | Air-sensitive; oxidation would shift stoichiometry. [CS2–CS4, Reasonable Inference] |
| 3 | Se, ≥99.99% | Se source / Se chemical potential control | Se is a direct precursor in EuLn₂Se₄ and MSe₃ flux syntheses. [CS2–CS4, SS5] | Volatile/toxic; sealed ampoule required. [CS2–CS4, SS5, Reasonable Inference] |
| 4 | Sb₂Se₃ flux | Solvent / crystal-growth flux | Sb₂Se₃ flux enables EuLn₂Se₄ and NpSe₃ crystal growth. [CS2–CS4, SS5] | Toxic Sb compound; may form EuSbSe₃ impurity. [CS2–CS4] |
| 5 | Sb + Se, optional | Flux preparation | Sb₂Se₃ may be prepared before use in related flux routes. [CS2–CS4, SS5] | Prior synthesis and sealed-tube handling required. [CS2–CS4, SS5] |

#### Route 3: Two-Step Binary-Selenide Solid-State Annealing

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | EuSe | Pre-reacted Eu source | Binary-intermediate strategy is used before selenization in Eu–Ge–Se analogues. [SS2, SS3, TS2, TS3] | Requires prior synthesis; Eu chalcogenides should be handled air-free. [SS2, SS3, TS2, TS3, Reasonable Inference] |
| 2 | Yb₂Se₃ or YbSeₓ | Pre-reacted Yb source | Pre-reacted selenide lowers elemental-metal diffusion mismatch by analogy to binary-intermediate routes. [SS2, SS3, TS2, TS3, Reasonable Inference] | Requires prior synthesis or purchase; Yb valence/selenium content must be verified. [Reasonable Inference] |
| 3 | Se | Stoichiometry and Se chemical potential adjustment | Eu–Ge–Se analogues are formed by oxidizing/interacting intermediates with stoichiometric Se. [SS2, SS3, TS2, TS3] | Volatile/toxic; sealed ampoule required. [SS2, SS3, TS2, TS3, Reasonable Inference] |
| 4 | Optional small Se excess | Compensates Se vapor loss | Target contains a Se–Se contact, so maintaining Se chemical potential may help. [Target, SS1, TS1, Reasonable Inference] | Excess Se can leave secondary polyselenides. [Reasonable Inference] |

#### Route 4: High-Pressure Elemental Synthesis

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | Eu metal | Eu source | Elemental rare-earth metals are used in high-pressure rare-earth selenide synthesis. [SS1, TS1] | Air-sensitive; must be loaded inertly. [SS1, TS1, Reasonable Inference] |
| 2 | Yb metal | Yb source | Yb is directly used in the high-pressure YbSe₂ analogue. [SS1, TS1] | Air-sensitive; oxidation reduces phase control. [SS1, TS1, Reasonable Inference] |
| 3 | Se | Chalcogen / Se–Se source | YbSe₂ contains Se–Se contacts similar to the target Se–Se distance. [SS1, TS1, Target] | Volatile/toxic; high-pressure capsule containment required. [SS1, TS1, Reasonable Inference] |
| 4 | BN capsule | Inert containment | BN tubes are used in the high-pressure YbSe₂ synthesis. [SS1, TS1] | Not a reagent, but capsule failure would compromise stoichiometry. [SS1, TS1, Reasonable Inference] |

#### Route 5: I₂-Assisted Chemical Vapor Transport / Recrystallization

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | Pre-reacted YbEuSe₃ powder | Feed material | CVT in TS uses preformed powder before transport growth. [TS4, Reasonable Inference] | Requires successful prior synthesis. [TS4, Reasonable Inference] |
| 2 | I₂ | Transport agent | I₂ is used as the transport agent in the TS CVT route. [TS4] | Toxic/volatile; may form Eu/Yb iodides. [TS4, Reasonable Inference] |
| 3 | Se, optional | Se vapor pressure buffer | Se loss is a common sealed-tube concern for selenides. [CS1–CS5, SS1, TS4, Reasonable Inference] | Excess Se can shift phase equilibria. [Reasonable Inference] |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability — Weight 30%

| E_hull (eV/atom) | Score |
|:--:|:--:|
| 0.0500 | 90 |

**F1 Score: 90 / 100**

The target is exactly at the ≤0.05 eV/atom threshold, so it receives the low end of the 90–100 band. [Target] CS analogues include several near-ground-state or ground-state rare-earth selenides, supporting feasibility. [CS1–CS5] SS/TS analogues show experimentally synthesized compounds even around ~0.03–0.10 eV/atom, so the target’s 0.0500 eV/atom is not prohibitive. [SS1–SS3, TS1–TS5]

---

#### F2 + F3: Per-Route Scoring

##### Route 1: KI-Assisted High-Temperature Solid-State Sintering

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; 1223 K ≈ 950 °C. [CS1, CS5] | 0 |
| T > 1400°C additional | No. [CS1, CS5] | 0 |
| High pressure >5 GPa | No. [CS1, CS5] | 0 |
| Reactive/controlled atmosphere | Yes; Ar glovebox and sealed vacuum tube. [CS1, CS5] | −15 |
| Volatile precursor requiring sealed system | Yes; Se-bearing sealed-tube synthesis. [CS1, CS5, Reasonable Inference] | −10 |
| Multi-step process ≥3 steps | Yes; load, seal, heat/slow cool, wash, dry. [CS1, CS5] | −10 |
| Toxic or air-sensitive precursors | Yes; Eu/Yb/Se require inert and careful handling. [CS1, CS5, Reasonable Inference] | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 60 | Elemental rare-earth metals and Se react under sealed-tube conditions, and KI can assist transport, but elemental metals are less active than molecular/solution precursors. [CS1, CS5, Reasonable Inference] |
| Ion diffusion difficulty | 95 | Eu/Yb have relatively low melting points compared with refractory cations, and the CS route works at 950 °C with flux/mineralizer assistance. [CS1, CS5, Reasonable Inference] |
| Structural reconstruction | 65 | Formula transfer from LnYbSe₃ is strong, but target Pnma and Se–Se bonding differ from Cmcm LnYbSe₃ analogues; 96 h sintering also indicates nontrivial reconstruction. [CS1, CS5, Target] |

**F3 Score for Route 1: 73 / 100**

##### Route 2: Sb₂Se₃ Flux Growth

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; reported peak is exactly 1000 °C. [CS2–CS4] | 0 |
| T > 1400°C additional | No. [CS2–CS4] | 0 |
| High pressure >5 GPa | No. [CS2–CS4] | 0 |
| Reactive/controlled atmosphere | Yes; evacuated sealed ampoule. [CS2–CS4] | −15 |
| Volatile precursor requiring sealed system | Yes; Se/Sb₂Se₃ flux in sealed silica. [CS2–CS4] | −10 |
| Multi-step process ≥3 steps | Yes; flux preparation/loading/sealing/heating/slow cooling/crystal isolation. [CS2–CS4] | −10 |
| Toxic or air-sensitive precursors | Yes; Eu/Yb are air-sensitive and Sb/Se compounds are hazardous. [CS2–CS4, Reasonable Inference] | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 70 | Molten Sb₂Se₃ flux increases mass transport relative to dry solid-state reaction. [CS2–CS4, SS5] |
| Ion diffusion difficulty | 95 | Flux growth occurs at ~1000 °C with liquid-mediated transport, reducing cation diffusion limitations. [CS2–CS4] |
| Structural reconstruction | 70 | Pnma EuLn₂Se₄ analogues share Eu 8-coordinate and LnSe₆ motifs with the target, but stoichiometry and Se–Se bonding differ. [CS2–CS4, Target] |

**F3 Score for Route 2: 78 / 100**

##### Route 3: Two-Step Binary-Selenide Solid-State Annealing

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; analogue steps are 1023–1123 K / ~750–850 °C. [SS2, SS3, TS2, TS3] | 0 |
| T > 1400°C additional | No. [SS2, SS3, TS2, TS3] | 0 |
| High pressure >5 GPa | No. [SS2, SS3, TS2, TS3] | 0 |
| Reactive/controlled atmosphere | Yes; Ar-sealed ampoule / glovebox. [SS2, SS3, TS2, TS3] | −15 |
| Volatile precursor requiring sealed system | Yes; Se reaction in sealed ampoule. [SS2, SS3, TS2, TS3] | −10 |
| Multi-step process ≥3 steps | Yes; binary formation, homogenization, selenization, reheating. [SS2, SS3, TS2, TS3] | −10 |
| Toxic or air-sensitive precursors | Yes; rare-earth selenides and Se require careful inert handling. [SS2, SS3, TS2, TS3, Reasonable Inference] | −10 |

**F2 Score for Route 3: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 65 | Preformed selenides should be more chemically matched than elements, but they remain solid-state precursors. [SS2, SS3, TS2, TS3, Reasonable Inference] |
| Ion diffusion difficulty | 90 | Analogue syntheses succeed at 750–850 °C with repeated homogenization. [SS2, SS3, TS2, TS3] |
| Structural reconstruction | 60 | Binary-to-ternary conversion requires cation ordering and Se–Se chemistry; repeated reheating in analogues indicates moderate kinetic barriers. [SS2, SS3, TS2, TS3, Target] |

**F3 Score for Route 3: 72 / 100**

##### Route 4: High-Pressure Elemental Synthesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes for proposed upper screen ~1200 °C. [SS1, TS1, Reasonable Inference] | −10 |
| T > 1400°C additional | No for the recommended initial screen; full reference window can reach 2000 °C. [SS1, TS1, Reasonable Inference] | 0 |
| High pressure >5 GPa | Yes; reference range extends to 70 kbar / 7 GPa. [SS1, TS1] | −25 |
| Reactive/controlled atmosphere | No external gas atmosphere; capsule containment instead. [SS1, TS1] | 0 |
| Volatile precursor requiring sealed system | Yes; Se must be contained in capsule. [SS1, TS1, Reasonable Inference] | −10 |
| Multi-step process ≥3 steps | Yes; capsule assembly, pressurization, heating, quench/decompression. [SS1, TS1] | −10 |
| Toxic or air-sensitive precursors | Yes; Eu/Yb/Se handling risk. [SS1, TS1, Reasonable Inference] | −10 |

**F2 Score for Route 4: 35 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 50 | Elemental metal/Se mixtures are used successfully, but no flux or solution pathway is present. [SS1, TS1] |
| Ion diffusion difficulty | 80 | High temperature and pressure can accelerate reaction, but diffusion occurs in a compacted solid/capsule environment. [SS1, TS1, Reasonable Inference] |
| Structural reconstruction | 55 | YbSe₂ supports Se–Se-containing rare-earth selenide formation, but ternary Eu/Yb ordering and Pnma selection remain uncertain. [SS1, TS1, Target] |

**F3 Score for Route 4: 62 / 100**

##### Route 5: I₂-Assisted Chemical Vapor Transport / Recrystallization

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; TS CVT uses ~800–850 °C. [TS4] | 0 |
| T > 1400°C additional | No. [TS4] | 0 |
| High pressure >5 GPa | No. [TS4] | 0 |
| Reactive/controlled atmosphere | Yes; evacuated silica tube. [TS4] | −15 |
| Volatile precursor requiring sealed system | Yes; I₂ and Se-containing feed in sealed tube. [TS4, Reasonable Inference] | −10 |
| Multi-step process ≥3 steps | Yes; pre-reaction, I₂ loading, gradient transport, crystal recovery. [TS4] | −10 |
| Toxic or air-sensitive precursors | Yes; I₂/Se hazards and Eu/Yb sensitivity. [TS4, Reasonable Inference] | −10 |

**F2 Score for Route 5: 55 / 100**

**F3 — Vapor/Transport Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor vapor availability | 45 | I₂ transport is demonstrated for Pb–Se chemistry, but Eu/Yb transport chemistry is unsupported in CS/SS. [TS4] |
| Crystallization pathway | 55 | CVT can grow crystals after pre-reaction, but no supplied analogue confirms direct crystallization of Eu–Yb–Se. [TS4, Reasonable Inference] |
| Composition control | 40 | Ternary Eu:Yb:Se control during vapor transport is likely narrow and sensitive to iodide formation. [TS4, Reasonable Inference] |

**F3 Score for Route 5: 47 / 100**

---

#### F4: Amorphization Tendency — Weight 20%

| Check | Criterion | Trigger? | Evidence |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | Eu is 8-coordinate while Yb is octahedral in the target, implying a large site-size mismatch. [Target, Reasonable Inference] |
| C2 | Unit cell atom count >40 | No / not demonstrated | Target is ABSe₃ in Pnma, which commonly implies a modest cell; insufficient evidence from CS/SS/TS for >40 target atoms → neutral 50 source signal. [Target, Reasonable Inference] |
| C3 | Mixed vertex + edge + face sharing coexist | No direct target trigger | Target explicitly reports corner-sharing YbSe₆ octahedra, while mixed edge/corner motifs appear in analogues but are not proven for target. [Target, CS1–CS5, SS1–SS5] |

| Triggers | Score | Risk Level |
|:--:|:--:|:--:|
| 1 | 75 | Low–Medium |

**F4 Score: 75 / 100**

---

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 73 | 90 | 75 | 74.0 |
| 2 | 55 | 78 | 90 | 75 | 75.3 |
| 3 | 55 | 72 | 90 | 75 | 73.8 |
| 4 | 35 | 62 | 90 | 75 | 66.3 |
| 5 | 55 | 47 | 90 | 75 | 67.5 |

| | |
|:--|:--|
| **Best Route** | Route 2 — Sb₂Se₃ Flux Growth |
| **Expert adjustment ±5** | −2, because the best analogues support Eu–Ln–Se Pnma flux growth, but no supplied source directly demonstrates EuYbSe₃ or its Se–Se-containing Pnma polymorph. [CS2–CS4, Target, Reasonable Inference] |
| **Final Synthesizability Score** | **73 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **550–1000 °C**, with 1000 °C peak hold and slow cooling through the crystallization window. [CS2–CS4] |
| Preferred atmosphere | Ar glovebox loading, sealed evacuated fused-silica ampoule. [CS2–CS4, SS5] |
| Pressure | Ambient external pressure; sealed vacuum ampoule. [CS2–CS4, SS5] |
| Estimated duration | ~7 d at 1000 °C plus ~2 d near 550 °C and slow cooling/ramping. [CS2–CS4] |
| Critical control parameters | Eu:Yb:Se stoichiometry near 1:1:3, slight Se excess screen, Sb₂Se₃ flux ratio screen, slow cooling at ~0.05 °C/min, avoidance of EuSbSe₃ impurity, PXRD/EDX verification. [CS2–CS4, Target, Reasonable Inference] |
| Basis | Pnma EuLn₂Se₄ flux growth provides the strongest structural/process analogue, while MSe₃ Sb₂Se₃ flux growth supports chalcogen-rich single-crystal growth. [CS2–CS4, SS5] |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target’s E_hull is 0.0500 eV/atom, exactly at the favorable threshold, so it is near-ground-state rather than deeply metastable. [Target] CS analogues include ground-state or near-ground-state rare-earth selenides, supporting thermodynamic plausibility. [CS1–CS5] SS/TS analogues demonstrate that experimentally accessible selenides can occur around ~0.03–0.10 eV/atom, reducing concern about the target’s small metastability. [SS1–SS3, TS1–TS5] Remaining uncertainty is that the target’s Eu/Yb valence balance and Se–Se bond are not directly reproduced by any single analogue. [Target, Reasonable Inference]

**F2/F3 — Route 1**  
The solid-state route is conditionally moderate because CS analogues use 950 °C sealed-tube synthesis, not >1000 °C or high pressure. [CS1, CS5] The penalties come from vacuum sealing, volatile Se, glovebox handling, and post-reaction washing. [CS1, CS5] Kinetics are favorable relative to refractory oxides because Eu/Yb selenides form at sub-1000 °C, but 96 h holds and phase yields near ~50% for selenides indicate moderate phase-control difficulty. [CS1, CS5]

**F2/F3 — Route 2**  
The flux route has the best F3 because molten Sb₂Se₃ improves transport and CS provides Pnma EuLn₂Se₄ analogues with Eu coordination similar to the target. [CS2–CS4, Target] F2 remains moderate rather than easy because the route requires vacuum sealing, slow programmed cooling, air-sensitive metals, and toxic/volatile chalcogenide flux. [CS2–CS4] The main uncertainty is stoichiometric transfer from EuLn₂Se₄ to EuYbSe₃, especially because CS reports EuSbSe₃ impurity for some compositions. [CS2–CS4, Reasonable Inference]

**F2/F3 — Route 3**  
The binary-selenide route avoids the least reactive elemental mixing by using pre-reacted selenides, and SS/TS analogues show successful two-step selenization with reheating. [SS2, SS3, TS2, TS3] F2 is moderate because sealed Ar/vacuum handling and multiple heating/grinding steps are still required. [SS2, SS3, TS2, TS3] The uncertainty is structural reconstruction: no SS/TS analogue demonstrates ABSe₃ Eu–Yb ordering or target Se–Se bonding by this exact pathway. [Target, SS2, SS3, TS2, TS3]

**F2/F3 — Route 4**  
High pressure is justified only by the YbSe₂ analogue, which has Yb–Se and Se–Se features close to the target. [SS1, TS1, Target] F2 is low because the method can require >5 GPa and high-temperature capsule synthesis. [SS1, TS1] Kinetics are acceptable under high T/P, but the route is experimentally burdensome and phase windows may be narrow. [SS1, TS1]

**F2/F3 — Route 5**  
CVT is only weakly supported because TS shows I₂ transport for Pb–Se chemistry, not Eu–Yb–Se. [TS4] F2 is moderate by the rule set, but F3 is low because Eu/Yb vapor transport and ternary stoichiometry control are not established in CS or SS. [TS4, Reasonable Inference] This route is better viewed as recrystallization after bulk synthesis rather than a primary discovery route. [TS4, Reasonable Inference]

**F4 — Amorphization Tendency**  
The target has distinct Eu and Yb coordination environments, so site-size mismatch triggers one amorphization-risk check. [Target, Reasonable Inference] The target description does not establish a >40 atom unit cell, and it explicitly emphasizes corner-sharing YbSe₆ rather than mixed vertex/edge/face connectivity. [Target] CS/SS analogues do show mixed connectivity in related compounds, but that is analogue evidence rather than direct target evidence, so F4 is kept at low–medium risk rather than high risk. [CS1–CS5, SS1–SS5]

---

### SECTION 6 — Synthesizability Interpretation

YbEuSe₃ is likely a **near-ground-state or mildly metastable** phase because its E_hull is 0.0500 eV/atom, right at the favorable cutoff. [Target] The CS data strongly support rare-earth Yb selenide synthesis by sealed-tube routes, and the EuLn₂Se₄ flux analogues support Pnma Eu–Ln–Se crystallization motifs. [CS1–CS5] The SS/TS data add support for Se–Se-containing Yb selenides and for experimentally accessible materials in the same metastability range. [SS1, TS1–TS5] The most important enabling factor is liquid/flux-mediated mass transport, especially Sb₂Se₃ flux, because it can overcome slow cation ordering and promote crystals. [CS2–CS4, SS5] The main limiting factor is phase competition among LnYbSe₃-like phases, EuLn₂Se₄-like phases, YbSe₂/polyselenides, and Sb-containing impurities. [CS1–CS5, SS1, TS1, Reasonable Inference]

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|---|:--:|---|
| 1 | All | Se volatility and loss at high temperature. [CS1–CS5, SS1, TS4, Reasonable Inference] | High | Use evacuated sealed ampoules/capsules and consider slight Se excess screening. [CS1–CS5, SS1, Reasonable Inference] |
| 2 | All | Eu/Yb oxidation or hydrolysis before reaction. [CS1–CS5, Reasonable Inference] | Medium | Load in Ar glovebox using clean metal surfaces and dry reagents. [CS1–CS5] |
| 3 | All | Eu/Yb valence and Se–Se bond control. [Target, SS1, TS1, Reasonable Inference] | High | Maintain controlled Se chemical potential and compare Se-rich vs stoichiometric charges by PXRD/EDX. [SS1, TS1, Reasonable Inference] |
| 4 | Route 1 | Cmcm LnYbSe₃ analogues may compete with target Pnma polymorph. [CS1, CS5, Target] | Medium | Screen slow-cooling profiles and compare KI vs no-KI charges. [CS1, CS5, Reasonable Inference] |
| 5 | Route 2 | EuSbSe₃ or Sb-containing impurities can form in Sb₂Se₃ flux. [CS2–CS4] | Medium–High | Reduce flux loading, manually isolate crystals, and verify by PXRD/EDX. [CS2–CS4] |
| 6 | Route 3 | Slow cation ordering and incomplete ternary conversion. [SS2, SS3, TS2, TS3] | Medium | Use binary selenide precursors, repeated grinding, homogenization, and reheating. [SS2, SS3, TS2, TS3] |
| 7 | Route 4 | High-pressure equipment and narrow phase window. [SS1, TS1] | High | Reserve for failed ambient routes; screen pressure/temperature systematically around the YbSe₂ precedent. [SS1, TS1, Reasonable Inference] |
| 8 | Route 5 | Poor ternary composition control during vapor transport. [TS4, Reasonable Inference] | High | Use pre-reacted feed, low I₂ loading, and treat CVT as recrystallization rather than primary synthesis. [TS4, Reasonable Inference] |