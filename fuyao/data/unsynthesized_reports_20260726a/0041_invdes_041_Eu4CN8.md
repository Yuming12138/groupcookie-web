> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.857 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Flux-Assisted Solid-State Metathesis / Carbodiimide–Nitride Route

| Field | Details |
|:--|:--|
| Reference basis | Rare-earth carbodiimides were synthesized from RECl₃ + Li₂(CN₂) in sealed silica ampoules with KCl/LiCl flux at 500–650 °C, and Gd nitride chloride was synthesized from GdCl₃ + GdN in sealed Ta/quartz hardware at 885–990 K. **(CS)** |
| Precursors | Anhydrous EuCl₂ or EuCl₃, Li₂(CN₂), EuN or Li₃N, small NaN₃/LiN₃ excess for N–N units, KCl/LiCl flux. EuCl₂ is preferred if Eu²⁺ stabilization is targeted. **(CS; SS/TS for Eu–N precedent; [Reasonable Inference])** |
| Temperature program | 2–5 °C/min ramp → 550–700 °C hold for 48 h to 7 d → slow cool 1–5 °C/h to 300 °C → furnace cool. **(CS; [Reasonable Inference])** |
| Atmosphere | Ar glovebox loading; evacuated or Ar-backfilled sealed silica/Nb/Ta ampoule. **(CS; SS/TS)** |
| Pressure | Ambient pressure sealed ampoule. **(CS)** |
| Additional conditions | Fine grinding, large KCl/LiCl flux excess, strict exclusion of H₂O/O₂, cautious gas-headspace allowance if azide is used. **(CS; SS/TS; [Reasonable Inference])** |
| Transferability to target | This route directly transfers the rare-earth–C–N metathesis chemistry from Lu₂(CN₂)₃ and adds nitride/azide chemistry to access the target’s Eu–N network and short N–N motifs. **(CS; SS/TS; [Reasonable Inference])** |
| Estimated difficulty | **Moderate–Challenging**, mainly because Eu oxidation state, N–N retention, and moisture sensitivity must be controlled. **(CS; SS/TS; [Reasonable Inference])** |

#### Route 2: High-Pressure Azide/Cyanamide Decomposition Route

| Field | Details |
|:--|:--|
| Reference basis | BaN₂ and SrN₂ analogues were made by controlled azide decomposition at 3–12 GPa and 450–800 °C in multianvil hardware, which is the strongest analogue evidence for stabilizing short N–N units. **(SS; TS)** |
| Precursors | Eu azide or in situ EuCl₂/EuCl₃ + NaN₃, Li₂(CN₂), EuN or Eu metal, optional graphite/C₃N₄ carbon source. **(SS; TS; CS; [Reasonable Inference])** |
| Temperature program | Compress at room temperature → heat to 500–800 °C for 15–60 min → quench/cool under pressure → slow decompression. **(SS; TS; [Reasonable Inference])** |
| Atmosphere | Glovebox loading; sealed BN capsule or equivalent inert capsule environment. **(SS; TS)** |
| Pressure | High pressure, likely 5–12 GPa screening window. **(SS; TS; [Reasonable Inference])** |
| Additional conditions | Use small batches, azide-compatible handling, pressure medium isolation, and stoichiometry screening around Eu:C:N = 4:1:8. **(SS; TS; [Reasonable Inference])** |
| Transferability to target | The target contains multiple short N–N bonds, so high pressure is a plausible stabilization tool, but adding carbon/cyanamide chemistry makes the reaction more complex than the Ba/Sr diazenide analogues. **(SS; TS; [Reasonable Inference])** |
| Estimated difficulty | **Challenging**, because multianvil pressure, hazardous azides, and phase-pure carbonitride formation are all required. **(SS; TS)** |

#### Route 3: Sealed Nb/Ta Ampoule Direct Eu Carbonitride Reaction

| Field | Details |
|:--|:--|
| Reference basis | LiEu₄(BN₂)₃ was reported from Li/Li₃N/EuN/BN in sealed Nb at 1950 K, while Sr/Ba cyanometallates were made from alkaline-earth nitrides plus NaCN/graphite in Ar/Ta ampoules near 1020–1200 K. **(SS; TS)** |
| Precursors | EuN, Eu metal, Li₂(CN₂) or NaCN, graphite or C₃N₄, optional Li₃N as additional nitride source. **(SS; TS; CS; [Reasonable Inference])** |
| Temperature program | 3–5 °C/min ramp → 900–1150 °C hold for 24–96 h; if no reaction, screen up to ~1400 °C in Nb/Ta → slow cool 2–5 °C/h. **(SS; TS; [Reasonable Inference])** |
| Atmosphere | Ar glovebox loading; sealed Nb or Ta ampoule, optionally jacketed in evacuated quartz. **(SS; TS; CS)** |
| Pressure | Ambient pressure sealed ampoule. **(SS; TS; CS)** |
| Additional conditions | Pellet pressing, Eu-rich/reducing condition control, sealed-metal compatibility testing, and post-reaction PXRD screening for EuN/Eu metal residues. **(SS; TS; [Reasonable Inference])** |
| Transferability to target | This route is plausible because Eu–N framework formation is directly supported by the Eu boronitride analogue, but replacing BN with carbon-only C–N sources and retaining N–N units is a major extrapolation. **(SS; TS; [Reasonable Inference])** |
| Estimated difficulty | **Challenging**, due to high temperature, sealed reactive ampoules, and likely competing EuN / Eu cyanamide / Eu carbide phases. **(SS; TS; [Reasonable Inference])** |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Flux-Assisted Solid-State Metathesis / Carbodiimide–Nitride Route

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | Anhydrous EuCl₂ / EuCl₃ | Eu source | RECl₃ is the rare-earth precursor class used for Lu₂(CN₂)₃ metathesis; GdCl₃ is used in nitride chloride synthesis. **(CS)** | Air/moisture-sensitive; Eu oxidation-state control required. **(CS; [Reasonable Inference])** |
| 2 | Li₂(CN₂) | C–N source | Li₂(CN₂) is the direct cyanamide/carbodiimide reagent in rare-earth carbodiimide synthesis. **(CS)** | Moisture-sensitive; may require prior synthesis. **(CS)** |
| 3 | EuN or Li₃N | Nitride source | EuN is used in the Eu boronitride analogue and GdN is used in the Gd nitride chloride analogue. **(SS; TS; CS)** | Air-sensitive; EuN may require prior synthesis. **(SS; TS; CS)** |
| 4 | NaN₃ or LiN₃ | N–N source | Azide decomposition is the route used to form diazenide-type BaN₂/SrN₂ analogues. **(SS; TS)** | Toxic/explosive; evolves N₂; sealed-system pressure risk. **(SS; TS; [Reasonable Inference])** |
| 5 | KCl/LiCl flux | Flux / diffusion aid | KCl/LiCl flux is used in rare-earth carbodiimide synthesis. **(CS)** | Hygroscopic; must be dry. **(CS; [Reasonable Inference])** |
| 6 | Eu metal or Li metal, optional | Reductant / Eu²⁺ control | Metallic reductants are used in rare-earth halide reduction chemistry and Li is present in the Eu boronitride route. **(CS; SS; TS)** | Pyrophoric/reactive; stoichiometry-sensitive. **(CS; SS; TS; [Reasonable Inference])** |

#### Route 2: High-Pressure Azide/Cyanamide Decomposition Route

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | Eu azide or EuCl₂ + NaN₃ in situ | Eu + N–N source | Alkaline-earth azides are decomposed under high pressure to make BaN₂/SrN₂ analogues. **(SS; TS)** | Toxic/explosive; likely requires prior synthesis or in situ handling. **(SS; TS; [Reasonable Inference])** |
| 2 | Li₂(CN₂) | C–N source | Rare-earth carbodiimide synthesis uses Li₂(CN₂) as the C–N reagent. **(CS)** | Moisture-sensitive; may decompose under harsh conditions. **(CS; [Reasonable Inference])** |
| 3 | EuN | Eu/N buffer | EuN is used in the Eu-containing nitride analogue. **(SS; TS)** | Air-sensitive; prior synthesis likely. **(SS; TS; [Reasonable Inference])** |
| 4 | Eu metal | Reducing Eu source | Metallic reagents are used in sealed high-temperature Eu/Li nitride chemistry. **(SS; TS; [Reasonable Inference])** | Air-sensitive/reactive; may form Eu-rich side phases. **(SS; TS; [Reasonable Inference])** |
| 5 | Graphite or C₃N₄, optional | Carbon balance | Graphite is used with NaCN in Ba₃Ir(CN)₃ synthesis; C₃N₄ is an inferred carbon nitride alternative. **(SS; TS; [Reasonable Inference])** | Graphite is kinetically sluggish; C₃N₄ may decompose. **(SS; TS; [Reasonable Inference])** |

#### Route 3: Sealed Nb/Ta Ampoule Direct Eu Carbonitride Reaction

| Rank | Precursor | Role | Justification | Risk |
|:--:|---|---|---|---|
| 1 | EuN | Main Eu/N source | EuN is a precursor in the Eu boronitride analogue. **(SS; TS)** | Air-sensitive; refractory enough to slow reaction. **(SS; TS; [Reasonable Inference])** |
| 2 | Eu metal | Eu-rich/reducing component | Metallic components are used in sealed nitride/boronitride and metallothermic halide routes. **(SS; TS; CS)** | Reactive/air-sensitive; may leave Eu metal impurity. **(SS; TS; CS; [Reasonable Inference])** |
| 3 | Li₂(CN₂) or NaCN | C–N source | Li₂(CN₂) supports rare-earth carbodiimide formation; NaCN is used in Sr/Ba cyanometallate synthesis. **(CS; SS; TS)** | NaCN is highly toxic; both require dry inert handling. **(CS; SS; TS)** |
| 4 | Graphite or C₃N₄ | Carbon source / C–N buffer | Graphite is used in Ba₃Ir(CN)₃ synthesis; C₃N₄ is an inferred carbon nitride source. **(SS; TS; [Reasonable Inference])** | Graphite may react slowly; C₃N₄ may volatilize/decompose. **(SS; TS; [Reasonable Inference])** |
| 5 | Li₃N | Nitride activator | Li₃N is used in the Eu boronitride analogue. **(SS; TS)** | Air/moisture-sensitive; can over-nitride or change stoichiometry. **(SS; TS; [Reasonable Inference])** |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability — Weight 30%

| Evidence item | Signal | Source score |
|:--|:--|:--:|
| Target-specific E_hull | Not reported; the placeholder 0.000 eV/atom must not be interpreted as hull stability. **(Target data; insufficient candidate-specific hull evidence from CS/SS/TS)** | 50 |
| Target formation energy | Predicted formation energy is negative, −0.857 eV/atom, but no convex-hull or phonon validation is reported. **(Target data; insufficient candidate-specific hull evidence from CS/SS/TS)** | 65 |
| Chemically similar analogues | CS analogues include stable or near-hull compounds with E_hull values of 0.0, 0.045, and 0.087 eV/atom. **(CS)** | 75 |
| Structural/thermodynamic analogues | SS/TS nearest analogues list E_hull = 0.0 for the top Eu–N and diazenide/cyanide-like analogues. **(SS; TS)** | 85 |

**F1 Score: 70 / 100**

#### F2 + F3: Per-Route Scoring

##### Route 1: Flux-Assisted Solid-State Metathesis / Carbodiimide–Nitride Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; route is based on 500–700 °C metathesis/flux conditions. **(CS; [Reasonable Inference])** | 0 |
| T > 1400°C | No. **(CS)** | 0 |
| High pressure > 5 GPa | No. **(CS)** | 0 |
| Reactive/controlled atmosphere | Yes; Ar glovebox and sealed ampoule are required. **(CS; SS/TS)** | −15 |
| Volatile precursor requiring sealed system | Yes if azide is used to preserve N–N chemistry. **(SS; TS; [Reasonable Inference])** | −10 |
| Multi-step process ≥ 3 steps | Yes: precursor drying/prep, grinding, sealing, heating, flux removal. **(CS; [Reasonable Inference])** | −10 |
| Toxic or air-sensitive precursors | Yes: Eu halides/nitrides, Li₂(CN₂), and azides require inert or hazardous handling. **(CS; SS/TS; [Reasonable Inference])** | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 75 | Halide metathesis with Li₂(CN₂) and molten salt flux is more reactive than dense oxide/metal routes. **(CS)** |
| Ion diffusion difficulty | 95 | Flux and salt metathesis reduce diffusion barriers, and CS analogues form at temperatures far below typical refractory ceramic synthesis. **(CS)** |
| Structural reconstruction | 50 | The target requires mixed Eu–N, C–N, and N–N motifs, so reconstruction is larger than in simple rare-earth carbodiimides. **(CS; SS/TS; [Reasonable Inference])** |

**F3 Score for Route 1: 73 / 100**

##### Route 2: High-Pressure Azide/Cyanamide Decomposition Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; diazenide analogues use 450–800 °C. **(SS; TS)** | 0 |
| T > 1400°C | No. **(SS; TS)** | 0 |
| High pressure > 5 GPa | Yes; analogues use up to 9–12 GPa. **(SS; TS)** | −25 |
| Reactive/controlled atmosphere | No direct reactive gas is specified, but glovebox/capsule handling is required; scored under precursor/equipment rather than atmosphere. **(SS; TS)** | 0 |
| Volatile precursor requiring sealed system | Yes; azide decomposition releases nitrogen and requires containment. **(SS; TS; [Reasonable Inference])** | −10 |
| Multi-step process ≥ 3 steps | Yes: azide preparation/loading, compression, heating, quench/decompression. **(SS; TS)** | −10 |
| Toxic or air-sensitive precursors | Yes; azides are hazardous and nitride/cyanamide reagents are sensitive. **(SS; TS; CS)** | −10 |

**F2 Score for Route 2: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 85 | Azides are highly reactive N sources and decompose directly into nitride/diazenide chemistry. **(SS; TS)** |
| Ion diffusion difficulty | 90 | High pressure plus reactive decomposition can form diazenides in short 15–20 min holds. **(SS; TS)** |
| Structural reconstruction | 40 | The target’s carbon-containing Eu₄CN₈ framework is more complex than the simple BaN₂/SrN₂ analogues. **(SS; TS; [Reasonable Inference])** |

**F3 Score for Route 2: 72 / 100**

##### Route 3: Sealed Nb/Ta Ampoule Direct Eu Carbonitride Reaction

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes for the upper recommended screening window and Eu boronitride precedent. **(SS; TS; [Reasonable Inference])** | −10 |
| T > 1400°C | Not in first-pass route; only contingency screening approaches this range. **(SS; TS; [Reasonable Inference])** | 0 |
| High pressure > 5 GPa | No. **(SS; TS)** | 0 |
| Reactive/controlled atmosphere | Yes; Ar glovebox and sealed Nb/Ta ampoules are required. **(SS; TS; CS)** | −15 |
| Volatile precursor requiring sealed system | Yes; NaCN/C–N reagents and nitrogen activity require sealed reaction control. **(SS; TS; [Reasonable Inference])** | −10 |
| Multi-step process ≥ 3 steps | Yes: precursor synthesis/handling, pelletizing, sealing, heating, slow cooling. **(SS; TS; CS)** | −10 |
| Toxic or air-sensitive precursors | Yes: EuN/Eu metal/Li₃N/NaCN are sensitive or toxic. **(SS; TS; CS)** | −10 |

**F2 Score for Route 3: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 50 | EuN, Eu metal, graphite, and sealed solid-state reagents are less reactive than flux metathesis precursors. **(SS; TS; [Reasonable Inference])** |
| Ion diffusion difficulty | 80 | Eu is the only cation, but direct bulk reaction still requires high-temperature diffusion through nitride/carbonitride solids. **(SS; TS; [Reasonable Inference])** |
| Structural reconstruction | 45 | The route must assemble a low-symmetry Eu–C–N/N–N framework from simpler nitride/cyanide reagents. **(SS; TS; [Reasonable Inference])** |

**F3 Score for Route 3: 58 / 100**

#### F4: Amorphization Tendency — Weight 20%

| Check | Criterion | Applies? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference > 15% | No | The target has only Eu as the cation, so there is no mixed-cation radius mismatch. **(Target data; insufficient direct CS/SS/TS signal, neutral for CS/SS/TS)** |
| C2 | Unit cell atom count > 40 | No | The P1 target description lists 4 Eu, 1 C, and 8 N sites, i.e., 13 atoms in the described primitive formula. **(Target data; insufficient direct CS/SS/TS signal, neutral for CS/SS/TS)** |
| C3 | Vertex + edge + face sharing coexist | No | The target explicitly reports corner- and edge-sharing N-centered polyhedra, but not face-sharing coexistence. **(Target data; SS/TS show face-sharing can occur in Eu nitride analogues but not in the target)** |

**F4 Score: 92 / 100**

#### Final Score Table

| Route | F2 | F3 | F1 | F4 | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 73 | 70 | 92 | 71.4 |
| 2 | 45 | 72 | 70 | 92 | 68.7 |
| 3 | 45 | 58 | 70 | 92 | 65.2 |

|  |  |
|:--|:--|
| **Best Route** | Route 1 — Flux-Assisted Solid-State Metathesis / Carbodiimide–Nitride Route |
| **Expert adjustment (±5)** | **−2**, because the target has no candidate-specific hull/phonon validation and requires simultaneous C–N plus N–N stabilization beyond any single analogue. **(CS; SS; TS; [Reasonable Inference])** |
| **Final Synthesizability Score** | **69 / 100**, based on Route 1 after adjustment. |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **550–700 °C** first screen; extend to **750 °C** only if PXRD shows incomplete conversion. **(CS; [Reasonable Inference])** |
| Preferred atmosphere | Ar glovebox loading; sealed evacuated or Ar-backfilled ampoule. **(CS; SS/TS)** |
| Pressure | Ambient pressure sealed ampoule for best route. **(CS)** |
| Estimated duration | 48 h to 7 d, with longer holds if crystallinity is poor. **(CS; [Reasonable Inference])** |
| Critical control parameters | Dry flux, Eu²⁺/Eu³⁺ control, small azide excess for N–N retention, safe headspace for N₂ evolution, slow cooling for crystallinity, and careful removal of LiCl/KCl by dry-compatible workup. **(CS; SS/TS; [Reasonable Inference])** |
| Basis | RECl₃ + Li₂(CN₂) flux metathesis supports the C–N route; Eu/Gd nitride analogues support Eu–N framework formation; high-pressure diazenides support the importance of N–N stabilization. **(CS; SS; TS)** |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The candidate lacks a reported convex-hull energy, so it cannot be scored as a confirmed ground-state phase even though its predicted formation energy is negative. **(Target data; insufficient candidate-specific hull evidence from CS/SS/TS)** Chemically similar compounds include stable or near-hull phases, and the structurally/thermodynamically similar top analogues are listed at E_hull = 0.0 eV/atom, which supports a moderate thermodynamic score. **(CS; SS; TS)** The main uncertainty is whether Eu₄CN₈ survives competition against EuN, Eu carbodiimides, Eu cyanides, Eu metal, and N₂-containing phases. **[Reasonable Inference]**

**F2 — Route 1**  
Route 1 avoids high pressure and very high temperature because rare-earth carbodiimide metathesis occurs at 500–650 °C and Gd nitride chloride forms at 885 K. **(CS)** The deductions come from sealed/inert handling, flux workup, azide or nitride sensitivity, and multi-step precursor preparation. **(CS; SS/TS; [Reasonable Inference])** This gives moderate severity rather than easy severity because the target requires both C–N and N–N chemistry in a moisture-sensitive Eu system. **(CS; SS/TS; [Reasonable Inference])**

**F3 — Route 1**  
The kinetics are favorable because halide metathesis and molten salt flux increase precursor contact and mobility. **(CS)** The main kinetic penalty is structural reconstruction, since the known Lu carbodiimide analogue contains linear C–N units but does not demonstrate the target’s multiple short N–N motifs. **(CS; SS/TS; [Reasonable Inference])** Overall, Route 1 is the best kinetic compromise because it combines reactive precursors with relatively mild temperatures. **(CS)**

**F2 — Route 2**  
Route 2 is penalized heavily for high pressure because BaN₂/SrN₂ analogues require multianvil conditions up to 9–12 GPa. **(SS; TS)** It is not penalized for >1000 °C because the diazenide analogue synthesis is reported at 450–800 °C. **(SS; TS)** Additional penalties come from azide hazard, gas evolution, and multi-step high-pressure processing. **(SS; TS)**

**F3 — Route 2**  
Azides provide highly reactive nitrogen and short reaction times in the diazenide analogues, which supports good precursor activity and diffusion scores. **(SS; TS)** The structural score is limited because Eu₄CN₈ adds carbon and a low-symmetry Eu framework beyond the simple alkaline-earth diazenides. **(SS; TS; [Reasonable Inference])** The remaining uncertainty is whether pressure stabilizes the desired carbonitride rather than a simpler Eu nitride/diazenide. **[Reasonable Inference]**

**F2 — Route 3**  
Route 3 inherits high-temperature sealed-ampoule demands from the Eu boronitride and cyanometallate analogues. **(SS; TS)** It avoids multianvil pressure but still requires Ar glovebox loading, sealed Nb/Ta hardware, toxic or air-sensitive precursors, and potentially volatile C–N/N species. **(SS; TS; CS)** The condition score is therefore challenging but not as severe as the high-pressure route. **(SS; TS)**

**F3 — Route 3**  
Direct EuN/Eu/C–N reactions are less kinetically activated than flux metathesis because solid-state diffusion through nitride/carbonitride phases is slower. **(SS; TS; [Reasonable Inference])** The route is supported by Eu–N framework formation in LiEu₄(BN₂)₃ and by NaCN/graphite use in Ba/Sr cyanometallates. **(SS; TS)** The uncertainty is high because no analogue shows Eu₄CN₈ stoichiometry or simultaneous C–N plus N–N retention under these conditions. **(SS; TS; [Reasonable Inference])**

**F4 — Amorphization Tendency**  
The rubric triggers no amorphization checks because the target has one cation species, only 13 atoms in the described P1 formula, and corner/edge rather than vertex+edge+face coexistence. **(Target data; SS/TS for comparison)** Low symmetry and multiple inequivalent N sites still add crystallization complexity, but that is better captured in F3 structural reconstruction than in the F4 trigger rubric. **[Reasonable Inference]** CS/SS/TS do not provide candidate-specific amorphization measurements, so the F4 score relies mainly on the target structure and uses CS/SS/TS only as analogue context. **(CS; SS; TS)**

---

### SECTION 6 — Synthesizability Interpretation

Eu₄CN₈ is more likely a **metastable or near-metastable** phase than a confirmed ground-state phase because no candidate-specific E_hull or phonon validation is reported, even though the predicted formation energy is negative. **(Target data; CS; SS; TS)** The analogue support is meaningful but fragmented: CS strongly supports rare-earth C–N metathesis, while SS/TS strongly support Eu–N frameworks and high-pressure N–N stabilization. **(CS; SS; TS)** The most critical enabling factor is using reactive salt/flux chemistry to lower diffusion barriers while maintaining nitrogen activity. **(CS; SS/TS; [Reasonable Inference])** The most critical limiting factor is simultaneous stabilization of Eu coordination, one C–N unit, and several short N–N motifs without forming EuN, Eu carbodiimide, cyanide, or diazenide side phases. **(CS; SS; TS; [Reasonable Inference])** Overall, the material is **plausibly synthesizable but experimentally nontrivial**, with Route 1 as the best first attempt and Route 2 as a pressure-stabilization fallback. **(CS; SS; TS; [Reasonable Inference])**

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|---|:--:|---|
| 1 | All | No candidate-specific convex-hull or phonon validation, so thermodynamic stability is uncertain. | High | Treat as exploratory metastable synthesis; screen products by PXRD/Raman and compare against EuN/carbodiimide/diazenide impurities. **(CS; SS; TS; [Reasonable Inference])** |
| 2 | All | Competing EuN or Eu-rich nitride phases may form because Eu–N frameworks are strongly represented in analogues. | High | Buffer Eu/N activity with EuN + Eu halide ratios and avoid excessive nitride chemical potential. **(SS; TS; CS; [Reasonable Inference])** |
| 3 | Route 1 | Moisture-sensitive halides, nitrides, cyanamides, and fluxes can hydrolyze or oxidize. | High | Use an Ar glovebox, dry KCl/LiCl flux, anhydrous Eu halides, and sealed ampoules as in CS routes. **(CS)** |
| 4 | Route 1 | N–N motifs may be lost if azide decomposes too rapidly or vents nitrogen. | Medium–High | Use small azide excess, sealed headspace, slow heating, and low first-pass temperatures. **(SS; TS; [Reasonable Inference])** |
| 5 | Route 2 | High-pressure synthesis has small sample size and difficult reproducibility. | High | Follow multianvil-style controlled azide decomposition windows and screen 5–12 GPa / 500–800 °C. **(SS; TS)** |
| 6 | Route 2 | Azide precursors are hazardous and can decompose explosively. | High | Use microgram–milligram scale high-pressure capsules and validated azide handling protocols. **(SS; TS; [Reasonable Inference])** |
| 7 | Route 3 | Direct solid-state reaction may have slow ordering kinetics. | Medium–High | Pelletize, regrind/reheat, use modest flux addition, and slow cool as adapted from sealed ampoule routes. **(SS; TS; CS; [Reasonable Inference])** |
| 8 | Route 3 | C/N volatility and NaCN toxicity complicate sealed high-temperature reactions. | High | Use sealed Nb/Ta ampoules, conservative fill fractions, and lower-temperature screening before high-temperature escalation. **(SS; TS; [Reasonable Inference])** |
| 9 | All | Single-crystal growth may be difficult because the target is low-symmetry P1 with many inequivalent sites. | Medium | Use flux-assisted slow cooling first, then attempt high-pressure or ampoule annealing only after powder phase evidence. **(CS; SS; TS; [Reasonable Inference])** |