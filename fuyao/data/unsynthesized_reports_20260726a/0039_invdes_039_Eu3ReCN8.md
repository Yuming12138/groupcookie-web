> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.751 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Rare-Earth Carbodiimide / Nitride Solid-State Metathesis

| Field | Details |
|:--|:--|
| Reference basis | Rare-earth carbodiimides are synthesized by metathesis of rare-earth halides with Li₂(CN₂) at 450–650 °C under dry Ar, and related RbLaSi(CN₂)₄ forms from RECl₃/A₂SiF₆/Li₂CN₂ at 550 °C in sealed ampoules. This is the closest transferable chemistry for Eu–C–N framework formation. **SS/TS** |
| Precursors | Anhydrous EuCl₃ or EuF₃, Li₂CN₂, activated Re source such as ReCl₅/ReNₓ/Re powder, and optional Li₃N or NaN₃ nitrogen donor for the N-rich target. Re-source and extra-N choices are **[Reasonable Inference]** from Re-containing cyanide/nitride analogues and the target N:C = 8:1 ratio. **SS/TS** |
| Temperature program | Grind in glovebox → ramp 3–5 °C/min to 550–700 °C → hold 48–72 h → slow cool or furnace cool; a second regrind/anneal may be needed. 450–650 °C is directly supported by rare-earth carbodiimide metathesis; 650–700 °C for Re activation is **[Reasonable Inference]**. **SS/TS** |
| Atmosphere | Dry Ar handling, sealed evacuated silica/copper/Nb ampoule. **SS/TS** |
| Pressure | Ambient pressure in sealed ampoule. **SS/TS** |
| Additional conditions | Strict exclusion of O₂/H₂O, finely ground powders, slight excess C/N donor, possible salt washing after reaction. **SS/TS** |
| Transferability to target | Strongest route because SS/TS analogues directly form rare-earth C–N frameworks from Li₂CN₂, but no CS/SS/TS analogue contains Eu–Re–C–N specifically; Re incorporation is therefore **[Reasonable Inference]** and remains the main adaptation. |
| Estimated difficulty | **Moderate–Challenging** |

#### Route 2: High-Temperature Nitride / Cyanide Solid-State Route

| Field | Details |
|:--|:--|
| Reference basis | Sr₃Co(CN)₃ and Ba₃Rh(CN)₃ are made from alkaline-earth nitrides plus transition-metal powder and NaCN under Ar at ~1070–1200 K, while SrCN₂/BaCN₂ form from metal nitrides plus melamine under Ar. **SS/TS** |
| Precursors | EuN or Eu₃N₂, Re powder or preactivated ReNₓ, NaCN/KCN and/or melamine, optional NaN₃/Li₃N as extra nitrogen donor. Eu/Re substitutions are **[Reasonable Inference]** from Ae₂N + Co/Rh + NaCN analogues. **SS/TS** |
| Temperature program | Pelletize → ramp 3–5 °C/min to 850–1000 °C → hold 24–96 h → slow cool; repeat grinding if impurity phases persist. **SS/TS** |
| Atmosphere | Ar glovebox loading, sealed Nb/Ta ampoule or sealed silica jacket. **TS** |
| Pressure | Ambient pressure in sealed ampoule. **TS** |
| Additional conditions | Use finely divided Re, intimate pellet contact, slight excess NaCN/melamine to compensate C/N loss, avoid air exposure. **SS/TS** |
| Transferability to target | This route is chemically plausible because TS analogues form alkaline-earth transition-metal cyanides from nitrides/cyanides, but Re is more refractory than Co/Rh and no source directly validates Eu–Re incorporation. **[Reasonable Inference]**, **TS** |
| Estimated difficulty | **Challenging** |

#### Route 3: Molten Halide / Cyanamide Flux Growth

| Field | Details |
|:--|:--|
| Reference basis | Flux growth is supported by CS analogues prepared in polychalcogenide or reactive halide fluxes at 650–850 °C with slow cooling, and sealed-ampoule C–N metathesis is supported by SS/TS analogues. **CS/SS/TS** |
| Precursors | EuCl₂/EuCl₃ or EuN, ReCl₅ or activated Re powder, Li₂CN₂ or NaCN, optional NaN₃/Li₃N, and LiCl/KCl/CsCl flux. Eu–Re–C–N flux transfer is **[Reasonable Inference]** because CS flux analogues are chalcogenide/halide rather than nitride/cyanamide. |
| Temperature program | Dry flux/precursors → seal under vacuum or Ar → ramp to 650–850 °C → hold 72 h to 5 d → slow cool 2–4 °C/h → wash flux under rigorously dry conditions. **CS/SS/TS** |
| Atmosphere | Vacuum-sealed or Ar-sealed ampoule. **CS/TS** |
| Pressure | Ambient pressure in sealed ampoule. **CS/TS** |
| Additional conditions | Large flux excess, slow cooling for crystals, strict dry handling, composition screening to avoid Eu halide or Re nitride residues. **CS/TS** |
| Transferability to target | Flux should improve mass transport and crystal growth, but CS gives only indirect flux-process evidence and not direct Eu–Re–C–N chemistry; therefore transferability is moderate and partly **[Reasonable Inference]**. |
| Estimated difficulty | **Moderate–Challenging** |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Rare-Earth Carbodiimide / Nitride Solid-State Metathesis

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuCl₃ or EuF₃, anhydrous 99.9% | Eu source | Rare-earth halides are directly used in LiRE(CN₂)₂ and related metathesis syntheses. **SS/TS** | Hygroscopic; dry handling required. |
| 2 | Li₂CN₂ | C–N framework source | Li₂(CN₂) is the key carbodiimide reagent in rare-earth C–N metathesis analogues. **SS/TS** | Requires prior synthesis/dry handling. |
| 3 | ReCl₅, ReNₓ, or finely divided Re | Re source | Transition-metal powder is used in cyanide/nitride analogues, while reactive halide use is **[Reasonable Inference]** to improve Re incorporation. **TS** | ReCl₅ is moisture-sensitive/volatile; Re metal is refractory. |
| 4 | Li₃N or NaN₃, small excess | Supplemental N source | Target has N:C = 8:1, so extra nitrogen beyond Li₂CN₂ is needed; azide/nitride donor use is **[Reasonable Inference]** from N-rich SS analogues. **SS** | NaN₃ is toxic/explosive; Li₃N is air-sensitive. |
| 5 | LiCl/NaCl byproduct sink | Metathesis driving force | Salt formation drives halide/carbodiimide metathesis in rare-earth analogues. **SS/TS** | Must be removed without hydrolyzing product. |

#### Route 2: High-Temperature Nitride / Cyanide Solid-State Route

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN or Eu₃N₂ | Eu + N source | Alkaline-earth nitrides are used for Sr/Ba cyanide analogues; Eu nitride substitution is **[Reasonable Inference]**. **SS/TS** | Strongly air/moisture-sensitive. |
| 2 | Re powder, high surface area | Re source | Co/Rh powders are used in TS cyanometallate analogues; Re powder transfer is **[Reasonable Inference]**. **TS** | Refractory; slow kinetics. |
| 3 | NaCN or KCN | C/N ligand source | NaCN is used directly in Sr₃Co(CN)₃ and Ba₃Rh(CN)₃ analogues. **TS** | Highly toxic; may volatilize/decompose in sealed reactions. |
| 4 | Melamine | Alternative C–N donor | Melamine reacts with metal nitrides to form SrCN₂/BaCN₂ analogues. **SS/TS** | Gas evolution; possible carbon/nitrogen imbalance. |
| 5 | NaN₃ or Li₃N | Extra N donor | Needed to approach Eu₃ReCN₈ stoichiometry; this is **[Reasonable Inference]** from the target N-rich formula and N-rich SS analogues. **SS** | Explosive/toxic or air-sensitive. |

#### Route 3: Molten Halide / Cyanamide Flux Growth

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuCl₂/EuCl₃ or EuN | Eu source | Rare-earth halides are used in metathesis analogues; Eu nitride is **[Reasonable Inference]** from nitride/cyanide TS routes. **SS/TS** | Hygroscopic/air-sensitive. |
| 2 | ReCl₅ or activated Re powder | Re source | Re halide is **[Reasonable Inference]** to increase reactivity; transition-metal powders are used in cyanide analogues. **TS** | ReCl₅ volatile/moisture-sensitive; Re powder slow to react. |
| 3 | Li₂CN₂ and/or NaCN | C–N source | Li₂CN₂ supports rare-earth carbodiimide formation; NaCN supports transition-metal cyanide formation. **SS/TS** | Air/moisture sensitivity and cyanide toxicity. |
| 4 | LiCl/KCl/CsCl eutectic flux | Flux / mass transport medium | Halide fluxes are used in CS flux growth analogues at 750–850 °C. **CS** | Must be dry; possible alkali incorporation. |
| 5 | NaN₃/Li₃N, low loading | Nitrogen chemical potential control | Extra N is **[Reasonable Inference]** for the N-rich target and N–N motifs. **SS** | Explosive/toxic or air-sensitive. |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability (Weight: 30%)

| E_hull (eV/atom) | Score |
|:--:|:--:|
| ≤ 0.05 | 90–100 |
| 0.05 – 0.20 | 65–85 |
| 0.20 – 0.50 | 35–60 |
| > 0.50 | 5–30 |

**F1 Score: 60 / 100**

Candidate-specific convex-hull energy is not reported, so the placeholder 0.000 eV/atom is not used. The negative predicted formation energy gives a favorable but incomplete thermodynamic signal, while CS/SS/TS analogues include many E_hull = 0 phases but do not validate the Eu–Re–C–N target hull. **Insufficient candidate-specific hull evidence from CS/SS/TS; neutral 50 component applied, then adjusted upward for stable C–N analogue evidence.**

#### F2 + F3: Per-Route Scoring

##### Route 1: Rare-Earth Carbodiimide / Nitride Solid-State Metathesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No | 0 |
| T > 1400°C additional | No | 0 |
| High pressure > 5 GPa | No | 0 |
| Reactive/controlled atmosphere | Yes — dry Ar / sealed ampoule. **SS/TS** | −15 |
| Volatile precursor requiring sealed system | Yes — sealed C–N/halide chemistry. **SS/TS**, **[Reasonable Inference]** | −10 |
| Multi-step process ≥ 3 steps | Yes — precursor drying, glovebox grinding, sealing, annealing/post-wash. **SS/TS** | −10 |
| Toxic or air-sensitive precursors | Yes — Li₂CN₂/Eu halides/N donors. **SS/TS** | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 70 | Li₂CN₂ and rare-earth halides are reactive metathesis precursors, but Re activation is uncertain. **SS/TS**, **[Reasonable Inference]** |
| Ion diffusion difficulty | 30 | Re has very high melting point by physicochemical reasoning; low-T metathesis analogues partly offset diffusion limits. **SS/TS**, **[Reasonable Inference]** |
| Structural reconstruction | 62 | C–N rare-earth frameworks are known, but the target adds Re–C/N tetrahedra and N–N units, requiring partial-to-large reconstruction. **SS/TS**, **[Reasonable Inference]** |

**F3 Score for Route 1: 54 / 100**

##### Route 2: High-Temperature Nitride / Cyanide Solid-State Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No for base 850–1000 °C program; if Re requires >1000 °C, deduct an additional −10. **TS**, **[Reasonable Inference]** | 0 |
| T > 1400°C additional | No | 0 |
| High pressure > 5 GPa | No | 0 |
| Reactive/controlled atmosphere | Yes — Ar and sealed ampoules. **TS** | −15 |
| Volatile precursor requiring sealed system | Yes — NaCN/N donors in sealed reaction. **TS**, **[Reasonable Inference]** | −10 |
| Multi-step process ≥ 3 steps | Yes — grinding, pelletizing, sealing, annealing/regrinding. **TS** | −10 |
| Toxic or air-sensitive precursors | Yes — cyanides and nitrides. **SS/TS** | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 45 | NaCN is reactive, but Eu nitrides are sensitive and Re powder is refractory. **SS/TS**, **[Reasonable Inference]** |
| Ion diffusion difficulty | 25 | Re diffusion is expected to be slow; TS analogues need high-T pellet annealing but avoid melting. **TS**, **[Reasonable Inference]** |
| Structural reconstruction | 35 | Formation from nitrides/cyanides/metals likely requires complete reconstruction into a low-symmetry Eu–Re–C–N phase. **TS**, **[Reasonable Inference]** |

**F3 Score for Route 2: 35 / 100**

##### Route 3: Molten Halide / Cyanamide Flux Growth

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No | 0 |
| T > 1400°C additional | No | 0 |
| High pressure > 5 GPa | No | 0 |
| Reactive/controlled atmosphere | Yes — vacuum/Ar sealed ampoule. **CS/TS** | −15 |
| Volatile precursor requiring sealed system | Yes — halide/C–N flux chemistry. **CS/TS**, **[Reasonable Inference]** | −10 |
| Multi-step process ≥ 3 steps | Yes — flux drying, sealing, heating, slow cooling, washing. **CS** | −10 |
| Toxic or air-sensitive precursors | Yes — cyanide/carbodiimide/nitride components. **SS/TS**, **[Reasonable Inference]** | −10 |

**F2 Score for Route 3: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 70 | Molten flux improves contact and can dissolve/react precursors; direct nitride/cyanamide flux evidence is indirect. **CS**, **[Reasonable Inference]** |
| Ion diffusion difficulty | 35 | Flux should mitigate Re diffusion, but Re remains the slowest cationic component. **CS**, **[Reasonable Inference]** |
| Structural reconstruction | 45 | Flux promotes crystallization, but CS analogues are chalcogenide/halide and not direct Eu–Re–C–N structural matches. **CS**, **[Reasonable Inference]** |

**F3 Score for Route 3: 50 / 100**

#### F4: Amorphization Tendency (Weight: 20%)

| Check | Criterion | Target assessment |
|:--:|:--|:--|
| C1 | Cation ionic radius difference > 15% | Triggered: Eu and Re cation environments differ strongly; this uses physicochemical ionic-radius reasoning. **[Reasonable Inference]** |
| C2 | Unit cell atom count > 40 | Not triggered: P1 target description lists 3 Eu + 1 Re + 1 C + 8 N = 13 crystallographic atoms in the primitive cell. |
| C3 | Mixed polyhedral connectivity | Not triggered as a strict check: the target has many bridging N sites, but explicit vertex+edge+face coexistence is not provided. **Insufficient evidence from CS/SS/TS for target-specific C3; neutral 50 source treatment for this sub-check.** |

**F4 Score: 78 / 100**

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 54 | 60 | 78 | 60.9 |
| 2 | 55 | 35 | 60 | 78 | 56.1 |
| 3 | 55 | 50 | 60 | 78 | 59.9 |

|  |  |
|:--|:--|
| **Best Route** | Route 1 — Rare-Earth Carbodiimide / Nitride Solid-State Metathesis |
| **Expert adjustment ±5** | **−3** — missing candidate hull, uncertain Re redox/coordination, and no direct Eu–Re–C–N analogue. |
| **Final Synthesizability Score** | **58 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **550–700 °C**, with possible screening up to ~750 °C if Re incorporation is incomplete. **SS/TS**, **[Reasonable Inference]** |
| Preferred atmosphere | Dry Ar handling and sealed evacuated ampoule. **SS/TS** |
| Pressure | Ambient pressure, sealed ampoule. **SS/TS** |
| Estimated duration | 48–72 h per anneal, with possible regrind/reanneal. **SS/TS** |
| Critical control parameters | O₂/H₂O exclusion, activated Re source, slight C/N donor excess, N chemical potential control, avoidance of excessive T that decomposes C–N/N–N units. **SS/TS**, **[Reasonable Inference]** |
| Basis | Rare-earth carbodiimide metathesis at 450–650 °C and related C–N solid-state routes provide the strongest basis; high-T cyanide/nitride and flux routes provide secondary process analogues. **SS/TS/CS** |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability.** The target has no reported convex-hull energy, so it cannot be assigned a ground-state score from the E_hull table; this is insufficient candidate-specific evidence from CS/SS/TS and is treated near neutral. SS/TS provide favorable analogue evidence because SrCN₂, LiLa(CN₂)₂, Sr₃Co(CN)₃, Ba₃Rh(CN)₃, and RbLaSi(CN₂)₄ are reported at or near E_hull = 0, while SS also includes a less stable azide analogue. The resulting F1 = 60 reflects possible thermodynamic accessibility but substantial uncertainty for Eu₃ReCN₈ itself. **SS/TS**

**F2/F3 — Route 1.** Route 1 has moderate condition severity because SS/TS metathesis analogues use 450–650 °C, dry Ar, glovebox loading, and sealed ampoules rather than high pressure. Kinetics are only moderate because Li₂CN₂/rare-earth halides are reactive, but Re incorporation into a low-symmetry N-rich framework is not directly demonstrated. This route receives the best total because it most directly transfers rare-earth C–N framework chemistry. **SS/TS**, **[Reasonable Inference]**

**F2/F3 — Route 2.** Route 2 is more kinetically difficult because TS cyanometallate analogues use nitrides, transition-metal powders, NaCN, pellets, and high-temperature annealing under Ar. Re powder is expected to be less reactive than Co/Rh powders, so diffusion and structural reconstruction are penalized. The route is plausible but less favored unless Re can be preactivated. **TS**, **[Reasonable Inference]**

**F2/F3 — Route 3.** Route 3 benefits from CS flux evidence showing halide or chalcogenide fluxes can grow complex crystals at 650–850 °C with slow cooling. However, CS flux analogues do not contain Eu–Re–C–N chemistry, so the route is process-supported but chemically indirect. Its F3 is slightly below Route 1 because flux improves mass transport but does not solve Re redox or N-rich stoichiometry control. **CS/SS/TS**, **[Reasonable Inference]**

**F4 — Amorphization Tendency.** The target has a large Eu/Re size and bonding mismatch, which triggers one amorphization-risk check by ionic-radius reasoning. The target’s P1 primitive description contains 13 atoms, so the >40 atom-count check is not triggered. Explicit vertex+edge+face sharing is not provided for the target, so C3 is not triggered and CS/SS/TS are insufficient for target-specific confirmation. **[Reasonable Inference]**

---

### SECTION 6 — Synthesizability Interpretation

Eu₃ReCN₈ is best treated as a **possibly metastable but chemically accessible** target, not a confirmed ground-state phase, because no candidate-specific convex-hull or phonon validation is reported. SS/TS analogues support the general feasibility of rare-earth/alkaline-earth C–N frameworks and cyanometallate nitrides, while CS mainly supports sealed-tube/flux processing rather than direct chemistry. The most important enabling factor is the existence of dry-ampoule Li₂CN₂ and cyanide/nitride routes that form crystalline C–N solids at moderate temperatures. The most important limiting factor is controlling Re incorporation and oxidation state in an N-rich Eu–C–N matrix without losing volatile C/N species. Overall, synthesis is plausible but likely requires screening rather than a single deterministic recipe. **CS/SS/TS**, **[Reasonable Inference]**

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|:--|:--:|:--|
| 1 | All | No candidate-specific E_hull or phonon validation, so phase stability is uncertain. | High | Run temperature/composition screens and compare products by PXRD; analogue stability supports trying C–N routes but not claiming ground-state stability. **SS/TS** |
| 2 | All | C/N loss or decomposition from cyanide, carbodiimide, azide, or melamine donors. | High | Use sealed ampoules, slight C/N donor excess, and moderate temperatures similar to SS/TS routes. **SS/TS** |
| 3 | All | Air/moisture sensitivity of nitrides, cyanides, rare-earth halides, and possible products. | High | Load, grind, and seal under dry Ar using glovebox/Schlenk-style handling. **SS/TS** |
| 4 | Route 1 | Re incorporation may be slow or redox-mismatched relative to Eu–C–N framework formation. | High | Use ReCl₅ or preactivated ReNₓ instead of dense Re powder where possible; this is **[Reasonable Inference]** from TS transition-metal powder routes. **TS** |
| 5 | Route 2 | Slow solid-state ordering due to refractory Re and complete structural reconstruction. | High | Use fine powders, pelletizing, longer anneals, and regrinding as in TS/SS high-temperature routes. **SS/TS** |
| 6 | Route 3 | Flux may incorporate alkali/halide impurities or stabilize competing phases. | Medium | Screen flux identity/loading and wash/remove flux carefully; CS flux analogues show slow cooling and flux optimization are important. **CS** |
| 7 | All | Competing Eu nitrides, Eu carbodiimides, Re nitrides, or cyanide salts may form. | Medium–High | Use small stoichiometry grids, activated Re source, and C/N chemical-potential control; phase-control difficulty is consistent with analogue impurity/byproduct reports. **CS/SS/TS**, **[Reasonable Inference]** |