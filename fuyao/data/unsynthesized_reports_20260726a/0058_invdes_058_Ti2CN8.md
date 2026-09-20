> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.474 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

Citation key: **CS-n / SS-n / TS-n** refer to the numbered entries in the provided evidence set; **Target** refers to the target-structure description.

#### Route 1: Sealed-Ampoule Solid-State Metathesis / Salt-Flux Route

| Field | Details |
|:--|:--|
| Reference basis | Thermodynamic analogues are made by SSM from metal chlorides + Li₂CN₂ in Ar/vacuum-sealed quartz ampoules at 500–650 °C, often with KCl/LiCl flux; this is the strongest route analogy for a Ti–C–N framework. [TS-1, TS-2, TS-5] |
| Precursors | Anhydrous TiCl₃ or TiCl₄, Li₂CN₂ or CaCN₂, NaN₃/LiN₃ or NH₄N₃ as N-rich additive, optional KCl/LiCl flux. [TS-1, TS-5, CS-3, Reasonable Inference] |
| Temperature program | Glovebox grinding → slow ramp to 250–350 °C for controlled intermediate formation → 500–650 °C hold for 3–7 d → slow cool 1–5 °C/h. [TS-1, TS-2, TS-5, Reasonable Inference] |
| Atmosphere | Ar handling, evacuated or sealed quartz ampoule. [TS-1, TS-2, TS-5] |
| Pressure | Sealed-ampoule autogenous pressure; no evidence supports >5 GPa. [TS-1, TS-5; insufficient evidence from CS/SS for high-pressure need, neutral=50] |
| Additional conditions | Dry grinding, salt flux, strict pressure control if azide is used, post-reaction washing of LiCl/KCl salts. [TS-5, CS-3, Reasonable Inference] |
| Transferability to target | Strongest because TS analogues directly support crystalline metal carbodiimide/cyanamide frameworks, while the target contains Ti–C/N sheets plus N–N units. [TS-1, TS-5, Target, Reasonable Inference] |
| Estimated difficulty | **Challenging** because the route combines inert sealed synthesis, N-rich additives, and uncertain retention of molecular N₂-like units. [CS-3, TS-5, Target, Reasonable Inference] |

#### Route 2: Liquid-Ammonia / Azide Ammonothermal Route

| Field | Details |
|:--|:--|
| Reference basis | The chemically similar MgN₈ analogue was synthesized from Mg₃N₂ and NH₄N₃ in liquid NH₃ at 150 °C for 20 d under autogenous HN₃/NH₃, showing that N-rich metal–nitrogen solids can be accessed solvothermally. [CS-3] |
| Precursors | TiCl₃, Ti amide, or Ti nitride; NH₄N₃/NaN₃; cyanamide or Na[N(CN)₂]; liquid NH₃ solvent. [CS-3, SS-1, SS-2, Reasonable Inference] |
| Temperature program | Load under dry inert conditions at low temperature → seal with liquid NH₃ → heat near 120–150 °C for 10–20 d → slow cool. [CS-3, Reasonable Inference] |
| Atmosphere | Autogenous NH₃/HN₃ in sealed ampoule or pressure tube. [CS-3] |
| Pressure | Autogenous solvothermal pressure; no CS/SS/TS evidence for multi-GPa pressure. [CS-3; insufficient evidence from TS for this route, neutral=50] |
| Additional conditions | Use excess azide/NH₃ to maintain high nitrogen chemical potential; avoid temperatures associated with azide decomposition hazards. [CS-3, Reasonable Inference] |
| Transferability to target | Good for N-rich/N–N chemistry but weaker for Ti–C–N sheet formation, because CS-3 lacks carbon and SS dicyanamide analogues lack Ti/N₂ clusters. [CS-3, SS-1, SS-2, Target] |
| Estimated difficulty | **Challenging** because HN₃/NH₃ pressure chemistry and Ti precursor compatibility are major uncertainties. [CS-3, Reasonable Inference] |

#### Route 3: Solution Ti–Dicyanamide Precursor + Sealed Low-T Anneal

| Field | Details |
|:--|:--|
| Reference basis | Structurally similar cyanamide/dicyanamide/cyanide frameworks form by ion exchange, precipitation, co-precipitation, or slow diffusion under mild solution conditions. [SS-1, SS-2, SS-3, SS-4, SS-5] |
| Precursors | Anhydrous or strongly acidic TiCl₃/TiCl₄ solution; Na[N(CN)₂] or cyanamide; optional NH₄Cl/HCl for Ti chloride stabilization; optional NH₄N₃ or melamine for N-rich anneal. [CS-1, SS-1, SS-3, TS-3, Reasonable Inference] |
| Temperature program | Precipitate/ion-exchange precursor at room temperature → dry under vacuum/inert gas → sealed anneal at 350–550 °C for 12–72 h → slow cool. [SS-1, SS-3, CS-1, TS-1, Reasonable Inference] |
| Atmosphere | N₂/Ar during isolation; evacuated or inert sealed ampoule during anneal. [CS-1, TS-1, TS-5] |
| Pressure | Ambient during precipitation; sealed autogenous pressure during anneal. [SS-1, SS-3, TS-1, Reasonable Inference] |
| Additional conditions | Control Ti hydrolysis, use dry/acidic medium, maintain C/N stoichiometry, and avoid amorphous Ti–C–N decomposition products. [CS-1, SS-3, Reasonable Inference] |
| Transferability to target | Moderate because SS analogues support C–N framework formation, but the target’s Ti₂CN₄(N₂)₂ sheet requires major reconstruction and N₂ retention. [SS-1, SS-3, Target, Reasonable Inference] |
| Estimated difficulty | **Moderate–Challenging** because the solution step is mild but the anneal must form a low-symmetry Ti–C–N/N₂ phase. [SS-1, SS-3, Target, Reasonable Inference] |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Sealed-Ampoule Solid-State Metathesis / Salt-Flux Route

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | TiCl₃ or TiCl₄, anhydrous | Ti source | Metal chlorides are directly used in TS SSM analogues; Ti chloride chemistry is also represented in CS. [TS-1, TS-5, CS-1, Reasonable Inference] | TiCl₄ volatile; Ti chlorides moisture-sensitive. [CS-1, Reasonable Inference] |
| 2 | Li₂CN₂ or CaCN₂ | C–N framework source | Li₂CN₂/Li₂(CN₂) is the key cyanamide precursor in TS SSM analogues. [TS-1, TS-2, TS-5] | May require prior synthesis/drying. [TS-1, TS-5] |
| 3 | NaN₃, LiN₃, or NH₄N₃ | Extra nitrogen / N–N source | NH₄N₃ enables N-rich MgN₈ synthesis in CS; extrapolated to supply N₂-like units in Ti₂CN₈. [CS-3, Target, Reasonable Inference] | Toxic/explosive; sealed heating risk. [CS-3] |
| 4 | KCl/LiCl flux | Flux / diffusion aid | KCl/LiCl flux is used for crystalline rare-earth carbodiimides. [TS-5] | Hygroscopic; requires washing. [TS-5, Reasonable Inference] |
| 5 | TiN or Ti metal, optional seed | Ti–N seed / phase control | TS-3 uses metal nitrides for carbodiimide synthesis; TiN seeding is an extrapolated phase-control tactic. [TS-3, Reasonable Inference] | Refractory/slow-reacting if used as main precursor. [Reasonable Inference] |

#### Route 2: Liquid-Ammonia / Azide Ammonothermal Route

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | TiCl₃, Ti amide, or fine TiN | Ti source | CS-3 uses a nitride precursor in liquid NH₃; Ti source substitution is extrapolated. [CS-3, Reasonable Inference] | Ti halides are moisture-sensitive; TiN may be kinetically inert. [Reasonable Inference] |
| 2 | NH₄N₃ or NaN₃ | N-rich reagent | NH₄N₃ is directly used in the N-rich MgN₈ synthesis. [CS-3] | Toxic/explosive; HN₃ hazard. [CS-3] |
| 3 | Liquid NH₃ | Solvent / N chemical potential | CS-3 uses liquid ammonia under autogenous HN₃/NH₃. [CS-3] | Volatile/toxic; pressure vessel required. [CS-3] |
| 4 | Cyanamide or Na[N(CN)₂] | Carbon–nitrogen source | SS analogues use Na[N(CN)₂] to make C–N frameworks. [SS-1, SS-2, SS-3] | Cyanamide/dicyanamide chemistry may produce competing C–N phases. [SS-1, SS-3, Reasonable Inference] |
| 5 | NH₄Cl or LiCl, optional | Solubility/mineralizer control | Chloride-rich media are used for Ti chloride precipitation and flux analogues. [CS-1, TS-5, Reasonable Inference] | Hygroscopic/corrosive depending medium. [CS-1, Reasonable Inference] |

#### Route 3: Solution Ti–Dicyanamide Precursor + Sealed Low-T Anneal

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | TiCl₃ or TiCl₄ in dry/acidic medium | Ti source | CS-1 shows Ti chloride chemistry can be controlled under HCl/N₂; Ti adaptation is inferred. [CS-1, Reasonable Inference] | Hydrolysis and volatility risk, especially TiCl₄. [CS-1, Reasonable Inference] |
| 2 | Na[N(CN)₂] | C–N ligand source | SS dicyanamide frameworks are made from Na[N(CN)₂] by ion exchange/precipitation. [SS-1, SS-2, SS-3] | Toxicity/side products possible. [Reasonable Inference] |
| 3 | NH₄Cl / HCl | Ti solution stabilization | CS-1 uses NH₄Cl and HCl gas to precipitate Ti chloride species under controlled conditions. [CS-1] | Corrosive; moisture-sensitive isolation. [CS-1] |
| 4 | NH₄N₃ or melamine | N-rich anneal additive | CS-3 uses NH₄N₃ for N-rich phases; TS-3 uses melamine for carbodiimides. [CS-3, TS-3] | Azide explosive/toxic; melamine may leave C/N impurities. [CS-3, TS-3, Reasonable Inference] |
| 5 | KCl/LiCl flux, optional | Anneal flux | Flux-assisted carbodiimide crystallization is supported by TS-5. [TS-5] | Requires post-washing and dry handling. [TS-5] |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability (Weight: 30%)

| E_hull (eV/atom) | Score |
|:--:|:--:|
| Target E_hull not reported; placeholder 0.000 eV/atom is invalid. [Target] | — |
| Predicted formation energy is negative, but no candidate-specific hull or phonon validation is reported. [Target] | — |
| TS analogues are all reported at E_hull = 0.0, while SS analogues span ~0.04–0.21 eV/atom and CS analogues are mixed, including high-E_hull cases. [TS-1–TS-5, SS-1–SS-5, CS-1–CS-5] | proxy only |

**Source signal for F1**

| Source | Evidence signal | Source score |
|:--|:--|:--:|
| CS | Mixed stability signal: some chemically similar phases are stable, but CS-1 and CS-3 have high E_hull values; not target-specific. [CS-1, CS-3, CS-4, CS-5] | 50 |
| SS | Useful structural analogue signal: C–N framework analogues are near-hull to moderately metastable. [SS-1–SS-5] | 70 |
| TS | Strongest analogue signal: thermodynamic analogues are all reported at E_hull = 0.0. [TS-1–TS-5] | 90 |
| Target-specific hull | Insufficient evidence from CS/SS/TS for the actual target E_hull; neutral treatment required for direct hull evidence. [Target] | 50 |

**F1 Score: 60 / 100**

---

#### F2 + F3: Per-Route Scoring

##### Route 1: Sealed-Ampoule Solid-State Metathesis / Salt-Flux Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; TS analogues use 500–650 °C or 550 °C, and TS-3 uses up to 850 °C. [TS-1, TS-3, TS-5] | 0 |
| T > 1400°C additional | No evidence for this regime. [TS-1, TS-5] | 0 |
| High pressure (>5 GPa) | No; evidence supports sealed ampoules, not GPa pressure. [TS-1, TS-5] | 0 |
| Reactive/controlled atmosphere | Yes; Ar glovebox and vacuum-sealed ampoule are required. [TS-1, TS-5] | −15 |
| Volatile precursor requiring sealed system | Yes; sealed ampoules are intrinsic, and azide/N-rich additives add pressure risk. [TS-1, CS-3, Reasonable Inference] | −10 |
| Multi-step process (≥3 steps) | Yes; glovebox mixing, sealing, heating, cooling, and washing are used in analogues. [TS-1, TS-5] | −10 |
| Toxic or air-sensitive precursors | Yes; Ti halides and azides/NH₄N₃ are moisture-sensitive or hazardous. [CS-1, CS-3, Reasonable Inference] | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 78 | Halide/cyanamide SSM is reactive and gives crystalline products in TS analogues; Ti substitution is extrapolated. [TS-1, TS-5, Reasonable Inference] |
| Ion diffusion difficulty | 65 | Flux/metathesis analogues form below refractory cation melting regimes, partly bypassing bulk diffusion; Ti diffusion remains nontrivial. [TS-1, TS-5, Reasonable Inference] |
| Structural reconstruction | 50 | The target Ti₂CN₄(N₂)₂ sheet is not isostructural with TS analogues, but carbodiimide/cyanamide connectivity provides a partial motif match. [TS-1, TS-5, Target, Reasonable Inference] |

**F3 Score for Route 1: 64 / 100**

##### Route 2: Liquid-Ammonia / Azide Ammonothermal Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; CS-3 uses 150 °C. [CS-3] | 0 |
| T > 1400°C additional | No. [CS-3] | 0 |
| High pressure (>5 GPa) | No evidence for >5 GPa; pressure is autogenous sealed-vessel pressure. [CS-3] | 0 |
| Reactive/controlled atmosphere | Yes; HN₃/NH₃ autogenous atmosphere is reactive. [CS-3] | −15 |
| Volatile precursor requiring sealed system | Yes; liquid NH₃/HN₃ requires sealed apparatus. [CS-3] | −10 |
| Multi-step process (≥3 steps) | Yes; precursor prep, liquid NH₃ handling, sealed heating, purification, and crystallization are involved. [CS-3] | −10 |
| Toxic or air-sensitive precursors | Yes; azides/HN₃/NH₃ create significant hazard. [CS-3] | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 80 | Liquid NH₃/azide chemistry is highly reactive for N-rich phases, and SS dicyanamide salts are solution-processable. [CS-3, SS-1, SS-2] |
| Ion diffusion difficulty | 70 | Solution-mediated crystallization can bypass solid-state diffusion, but Ti precursor solubility/reactivity is uncertain. [CS-3, Reasonable Inference] |
| Structural reconstruction | 40 | CS-3 supports N–N-rich chemistry, while SS supports C–N frameworks, but neither directly demonstrates a Ti–C–N sheet with trapped N₂ units. [CS-3, SS-1, SS-2, Target] |

**F3 Score for Route 2: 63 / 100**

##### Route 3: Solution Ti–Dicyanamide Precursor + Sealed Low-T Anneal

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; proposed anneal follows TS low/moderate-temperature regimes. [TS-1, TS-5, Reasonable Inference] | 0 |
| T > 1400°C additional | No. [TS-1, TS-5] | 0 |
| High pressure (>5 GPa) | No; route uses ambient precipitation and sealed anneal. [SS-1, SS-3, TS-1] | 0 |
| Reactive/controlled atmosphere | Yes; Ti isolation and anneal require N₂/Ar/vacuum. [CS-1, TS-1] | −15 |
| Volatile precursor requiring sealed system | Yes if N-rich additive or TiCl₄ is used during anneal. [CS-1, CS-3, Reasonable Inference] | −10 |
| Multi-step process (≥3 steps) | Yes; precipitation, drying, sealed anneal, and washing/characterization are required. [SS-3, TS-5, Reasonable Inference] | −10 |
| Toxic or air-sensitive precursors | Yes; Ti chlorides and possible azide/N-rich additives are hazardous. [CS-1, CS-3, Reasonable Inference] | −10 |

**F2 Score for Route 3: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 85 | SS analogues show rapid solution formation of C–N frameworks from dicyanamide/cyanide salts. [SS-1, SS-2, SS-3, SS-5] |
| Ion diffusion difficulty | 60 | A preorganized Ti–C–N precursor should reduce diffusion length, but annealing still requires Ti–C/N rearrangement. [SS-3, TS-5, Reasonable Inference] |
| Structural reconstruction | 35 | Conversion from a molecular/precipitated precursor to a 2D P1 Ti₂CN₄(N₂)₂ phase is a major reconstruction not directly supported by SS. [SS-1, SS-3, Target, Reasonable Inference] |

**F3 Score for Route 3: 60 / 100**

---

#### F4: Amorphization Tendency (Weight: 20%)

| Check | Criterion | Target assessment |
|:--:|:--|:--|
| C1 | Cation ionic radius difference >15% | Not triggered; the target has one metal cation type, Ti, so a multi-cation radius mismatch is not applicable. [Target, Reasonable Inference] |
| C2 | Unit cell atom count >40 | Not triggered from the described formula unit Ti₂CN₈ = 11 atoms; no evidence is provided for >40 atoms per cell. [Target] |
| C3 | Mixed polyhedral connectivity | Not triggered; target description explicitly mentions corner-sharing TiCN₃ trigonal pyramids but does not report coexistence of vertex + edge + face sharing. [Target] |

CS/SS/TS provide insufficient direct evidence for target-specific F4 trigger assignment, so CS=50, SS=50, and TS=50 for direct amorphization checks; the trigger count is assigned from the target structure. [Target]

**F4 Score: 92 / 100**

---

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 64 | 60 | 92 | 66.2 |
| 2 | 55 | 63 | 60 | 92 | 65.9 |
| 3 | 55 | 60 | 60 | 92 | 65.2 |

| | |
|:--|:--|
| **Best Route** | Route 1 — Sealed-Ampoule Solid-State Metathesis / Salt-Flux Route |
| **Expert adjustment (±5)** | −4, because target-specific E_hull/phonons are absent and N₂-like units may be lost or form competing TiN/TiC/Ti–CN phases. [Target, CS-3, TS-5, Reasonable Inference] |
| **Final Synthesizability Score** | **62 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | 500–650 °C main hold, with possible lower-temperature pre-reaction at 250–350 °C. [TS-1, TS-5, Reasonable Inference] |
| Preferred atmosphere | Ar glovebox loading followed by evacuated or sealed quartz ampoule. [TS-1, TS-2, TS-5] |
| Pressure | Sealed-ampoule autogenous pressure; no evidence supports >5 GPa. [TS-1, TS-5; insufficient evidence from CS/SS for high-pressure need, neutral=50] |
| Estimated duration | 3–7 d initially; extend toward 2–3 weeks if crystallinity is poor. [TS-1, TS-2, TS-5] |
| Critical control parameters | Dry handling, N-rich but pressure-safe stoichiometry, slow ramping, flux selection, slow cooling, and avoidance of TiN/TiC side phases. [CS-3, TS-5, Target, Reasonable Inference] |
| Basis | Best supported by TS SSM/carbodiimide analogues, with N-rich handling lessons from CS-3 and structural C–N framework support from SS. [TS-1, TS-5, CS-3, SS-1, SS-3] |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target has no valid reported E_hull; the placeholder 0.000 eV/atom must not be treated as stability evidence. [Target] TS provides the strongest positive analogue signal because all five thermodynamic analogues are reported at E_hull = 0.0, while SS analogues are near-hull to moderately metastable and CS analogues are contradictory. [TS-1–TS-5, SS-1–SS-5, CS-1–CS-5] The F1 score is therefore capped at 60 because analogue stability does not replace candidate-specific convex-hull or phonon validation. [Target, Reasonable Inference]

**F2 — Route 1**  
Route 1 avoids very high temperature and GPa pressure, matching TS SSM conditions of 500–650 °C and sealed ampoules. [TS-1, TS-5] The severity penalties come from Ar/vacuum control, sealed-system use, multiple handling/heating/washing steps, and hazardous N-rich additives inferred from CS-3. [TS-1, TS-5, CS-3, Reasonable Inference] SS gives insufficient evidence for Route 1 sealed metathesis severity and is treated as neutral=50 for this specific factor. [SS]

**F3 — Route 1**  
The kinetic score is moderate because halide/cyanamide metathesis is reactive and flux-assisted synthesis can reduce diffusion barriers. [TS-1, TS-5] Structural reconstruction remains significant because none of the TS analogues contains the exact Ti₂CN₄(N₂)₂ sheet plus discrete N₂ clusters. [TS-1, TS-5, Target] The score is not higher because target formation likely requires simultaneous Ti–C/N ordering and N₂ retention. [Target, Reasonable Inference]

**F2 — Route 2**  
Route 2 operates at low temperature, but the NH₃/HN₃ sealed environment is reactive and hazardous. [CS-3] The deductions are driven by volatile sealed-vessel chemistry, multistep precursor handling, and azide toxicity/explosion risk. [CS-3] TS provides insufficient evidence for liquid-ammonia route severity and is treated as neutral=50 for this route. [TS]

**F3 — Route 2**  
Liquid NH₃/azide chemistry provides high precursor activity for N-rich products, and SS shows that C–N ligands are accessible in solution. [CS-3, SS-1, SS-2] The structural score is lower because CS-3 lacks carbon and SS analogues lack the target’s Ti/N₂ cluster motif. [CS-3, SS-1, Target] The main uncertainty is whether Ti can crystallize into the predicted 2D Ti–C–N sheet rather than amorphous Ti nitride/carbodiimide species. [Reasonable Inference]

**F2 — Route 3**  
The solution step is mild because SS analogues form by room-temperature ion exchange, precipitation, or diffusion. [SS-1, SS-2, SS-3, SS-4] The route still receives severity deductions because the anneal likely requires sealed/inert conditions and potentially hazardous N-rich additives. [CS-3, TS-1, Reasonable Inference] CS-1 supports controlled Ti chloride precipitation but not direct Ti₂CN₈ formation. [CS-1, Target]

**F3 — Route 3**  
Precursor activity is high because dicyanamide/cyanide frameworks precipitate readily in SS analogues. [SS-1, SS-3, SS-5] The overall F3 is reduced because transforming a soft precursor into a crystalline Ti₂CN₄(N₂)₂ sheet is a major reconstruction. [Target, Reasonable Inference] The route is attractive as a precursor strategy but weak as a direct crystallization route. [SS-3, Target, Reasonable Inference]

**F4 — Amorphization Tendency**  
The formal rubric gives zero triggers: one Ti cation type, small formula atom count, and no reported edge/face/vertex mixed connectivity in the target description. [Target] CS/SS/TS are insufficient for direct target F4 trigger assignment and are neutral=50 for those checks. [CS, SS, TS] The practical amorphization risk is still nonzero because N-rich Ti–C–N ordering is unvalidated, but that is accounted for in the expert adjustment rather than the rubric score. [Target, Reasonable Inference]

---

### SECTION 6 — Synthesizability Interpretation

The target is more likely a metastable or near-metastable phase than a proven ground state because no candidate-specific convex-hull or phonon validation is reported. [Target] The CS/SS/TS analogues support the broader chemistry of N-rich solids, C–N frameworks, and carbodiimide/metathesis synthesis, but none directly demonstrates Ti₂CN₄(N₂)₂. [CS-3, SS-1, SS-3, TS-1, TS-5, Target] The most important enabling factor is use of reactive C–N/N-rich precursors under sealed inert conditions, which is supported by TS SSM and CS azide chemistry. [TS-1, TS-5, CS-3] The most important limiting factor is retaining N₂-like units while avoiding TiN, TiC, Ti(C,N), or amorphous Ti–C–N competing products. [Target, Reasonable Inference] Overall, synthesis is plausible but challenging, with Route 1 providing the best evidence-backed starting point. [TS-1, TS-5, CS-3, Reasonable Inference]

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|:--|:--:|:--|
| 1 | All | No validated target E_hull or phonon stability. [Target] | High | Treat as exploratory metastable synthesis and screen products by PXRD/Raman before scale-up. [Target, Reasonable Inference] |
| 2 | All | Loss of N₂/N-rich species during heating may prevent Ti₂CN₄(N₂)₂ formation. [CS-3, Target, Reasonable Inference] | High | Use sealed ampoules, slow ramps, and N-rich additives modeled after CS-3 and TS sealed reactions. [CS-3, TS-1, TS-5] |
| 3 | Route 1 | Competing TiN/TiC/Ti–cyanamide phases may form during SSM. [TS-3, TS-5, Reasonable Inference] | High | Use Li₂CN₂-rich mixtures, salt flux, lower temperature holds, and slow cooling. [TS-1, TS-5, Reasonable Inference] |
| 4 | Route 1 / Route 2 | Azide or HN₃/NH₃ pressure chemistry creates safety and containment constraints. [CS-3] | High | Use small charges, validated sealed vessels, conservative temperature ramps, and avoid exceeding known decomposition-risk regimes. [CS-3, Reasonable Inference] |
| 5 | Route 2 | Ti precursor solubility and compatibility in liquid NH₃ are uncertain. [CS-3, Reasonable Inference] | Medium–High | Test TiCl₃/Ti amide/TiN precursor screens before full target stoichiometry. [CS-3, Reasonable Inference] |
| 6 | Route 3 | Ti hydrolysis or amorphous precipitation may occur during solution precursor formation. [CS-1, SS-3, Reasonable Inference] | Medium–High | Use dry or strongly acidic chloride media and isolate under N₂, following Ti chloride handling logic from CS-1. [CS-1] |
| 7 | All | Slow ordering of a low-symmetry 2D Ti–C–N sheet may limit crystallinity. [Target, Reasonable Inference] | Medium | Extend anneals from 3 d toward multi-week TS precedent and use flux-assisted crystallization. [TS-1, TS-5] |
| 8 | All | Stoichiometry control is difficult because Ti:C:N = 2:1:8 requires simultaneous C–N framework formation and excess nitrogen retention. [Target, Reasonable Inference] | High | Use mass-balanced sealed reactions with slight N-source excess and compare product composition against CN/azide analogues. [CS-3, TS-5, Reasonable Inference] |