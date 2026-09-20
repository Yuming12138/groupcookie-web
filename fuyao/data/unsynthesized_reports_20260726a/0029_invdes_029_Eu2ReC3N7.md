> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.436 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

Low-temperature hydrothermal cyanide chemistry is **not carried forward** as a main route because CS only supports K/Ni/Au cyanide coordination frameworks at 125–165 °C, while the target is an anhydrous Eu–Re carbonitride/nitride with Eu–N, Re–C/Re–N, C–N, and N–N linkages. **Insufficient evidence from SS/TS** for hydrothermal transferability; scored neutral 50 for that route family. [CS; SS; TS; Reasonable Inference]

#### Route 1: Halide–Carbodiimide Solid-State Metathesis / Molten-Salt Flux

| Field | Details |
|:--|:--|
| Reference basis | Rare-earth carbodiimides form from RECl₃ or REF₃ + Li₂(CN₂) in sealed ampoules at 450–650 °C, sometimes with LiCl/KCl or KCl/LiCl flux. [CS; TS] Cr₂(CN₂)₃ forms from CrCl₃ + ZnNCN + LiCl/KCl at 550 °C. [SS] La chloride carbodiimide nitride uses RECl₃ + Li₂CN₂ + Li₃N at 800 °C in Ta ampoules. [CS] |
| Precursors | Anhydrous EuCl₃ or EuF₃; ReCl₃ preferred, ReCl₅ possible with volatility control; Li₂(CN₂) as C/N source; Li₃N as extra N source; LiCl/KCl or KCl/LiCl flux. [CS; SS; TS; Reasonable Inference] |
| Temperature program | Dry/mix under Ar → ramp 50–100 °C/h to 550–650 °C → hold 48 h–7 d → optional anneal 700–800 °C for 1–2 d → slow cool 1–5 °C/h through flux. [CS; SS; TS; Reasonable Inference] |
| Atmosphere | Dry Ar glovebox loading; sealed evacuated or Ar-backfilled silica/Ta/Nb ampoule. [CS; SS; TS] |
| Pressure | Ambient pressure in sealed ampoule. [CS; SS; TS] |
| Additional conditions | Use halide flux for transport, slight Li₂(CN₂)/Li₃N excess for N/C activity, avoid oxygen/moisture, and wash soluble LiCl/KCl byproducts only after confirming target stability. [CS; SS; TS; Reasonable Inference] |
| Transferability to target | This route best matches the target’s rare-earth–C–N chemistry and provides reactive CN₂/N sources, but Re incorporation and Re redox are not directly demonstrated in CS/SS/TS. [CS; SS; TS; Reasonable Inference] |
| Estimated difficulty | **Moderate–Challenging** because analogues are accessible but require inert handling, sealed ampoules, flux optimization, and Re-specific adaptation. [CS; SS; TS; Reasonable Inference] |

#### Route 2: High-Temperature Sealed-Ampoule Nitridocarbonization

| Field | Details |
|:--|:--|
| Reference basis | Eu-containing nitride analogue LiEu₄(BN₂)₃ uses Li/Li₃N/EuN/BN in sealed Nb at 1950 K. [SS; TS] Sr₃Co(CN)₃ forms from Ae₂N + Co + NaCN under Ar at about 1200 K. [TS] La₂Cl(CN₂)N forms in sealed Ta at 800 °C. [CS] |
| Precursors | EuN; Re metal or Re nitride; C₃N₄ or Li₂(CN₂); optional Li₃N or NaCN as N/C activity modifier. [SS; TS; CS; Reasonable Inference] |
| Temperature program | Pre-react 600–700 °C → grind/pelletize → anneal 950–1150 °C for 24–72 h → slow cool or quench depending on phase stability. [SS; TS; CS; Reasonable Inference] |
| Atmosphere | Sealed Ta/Nb ampoule under Ar or vacuum. [SS; TS; CS] |
| Pressure | Ambient pressure with sealed self-atmosphere. [SS; TS; CS] |
| Additional conditions | Fine grinding and repeated annealing are likely needed because Re is refractory and diffusion-limited. [Reasonable Inference] |
| Transferability to target | Route applies to Eu–N and carbonitride frameworks, but it risks decomposing C–N/N–N motifs and has weaker direct support for Re–C/N ordering. [SS; TS; CS; Reasonable Inference] |
| Estimated difficulty | **Challenging** due to high temperature, Re diffusion, and uncertain preservation of target C–N/N–N units. [SS; TS; Target; Reasonable Inference] |

#### Route 3: HPHT Nitrogen-Rich Carbonitride / Diazenide Stabilization

| Field | Details |
|:--|:--|
| Reference basis | SrN₂-type diazenides form by azide decomposition at 3–12 GPa and 450–800 °C. [TS] Eu nitride analogue LiEu₄(BN₂)₃ is stabilized under severe sealed high-temperature conditions. [SS; TS] |
| Precursors | EuN or Eu azide-derived Eu/N source; Re metal or Re nitride; C₃N₄ or Li₂(CN₂); NaN₃/LiN₃ as high-N chemical-potential source. [TS; SS; Reasonable Inference] |
| Temperature program | Load under Ar → compress to 6–8 GPa → heat 600–900 °C for 15–120 min → quench at pressure → decompress. [TS; Reasonable Inference] |
| Atmosphere | Sealed capsule with internal N chemical potential from azide/cyanamide decomposition. [TS; Reasonable Inference] |
| Pressure | High pressure, preferably >5 GPa. [TS] |
| Additional conditions | BN/Ta capsule, small batch size, strict shock/thermal safety for azide-bearing mixtures. [TS; Reasonable Inference] |
| Transferability to target | HPHT is relevant because the target contains short N–N bonds, but CS provides insufficient high-pressure evidence and Re–carbonitride transferability is unproven. [Target; TS; SS; CS; Reasonable Inference] |
| Estimated difficulty | **Challenging** because specialized HPHT equipment and hazardous N-rich precursors are required. [TS; Reasonable Inference] |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Halide–Carbodiimide Solid-State Metathesis / Molten-Salt Flux

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuCl₃, anhydrous 99.9%, or EuF₃ | Eu source | RECl₃/REF₃ are directly used in rare-earth carbodiimide SSM analogues. [CS; TS] | Air/moisture-sensitive chloride handling. [CS; Reasonable Inference] |
| 2 | ReCl₃ preferred; ReCl₅ fallback | Re source | Re halide use is extrapolated to match halide metathesis chemistry because CS/SS/TS lack Re analogues. [Reasonable Inference] | ReCl₅ may be volatile/corrosive and redox-active. [Reasonable Inference] |
| 3 | Li₂(CN₂), dry | Main C/N source | Li₂(CN₂) is the recurring carbodiimide reagent in rare-earth and mixed-cation analogues. [CS; TS] | Requires prior synthesis/careful drying; air/moisture sensitivity possible. [CS; TS; Reasonable Inference] |
| 4 | Li₃N | Extra N source | Li₃N is used in nitride-carbodiimide chemistry and can supply the extra N beyond 3×CN₂. [CS; SS; TS; Reasonable Inference] | Strongly air/moisture sensitive. [SS; TS; Reasonable Inference] |
| 5 | LiCl/KCl or KCl/LiCl flux | Transport/phase-control medium | Halide flux is used for rare-earth and transition-metal carbodiimides. [CS; SS] | Hygroscopic flux; requires dry handling. [CS; SS; Reasonable Inference] |

#### Route 2: High-Temperature Sealed-Ampoule Nitridocarbonization

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN | Eu/N source | EuN is used in the Eu nitride analogue LiEu₄(BN₂)₃. [SS; TS] | Air/moisture-sensitive nitride. [SS; TS; Reasonable Inference] |
| 2 | Re metal or Re nitride | Re source | Re source choice is extrapolated because CS/SS/TS do not contain Re carbonitride analogues. [Reasonable Inference] | Re metal is refractory; Re nitride stoichiometry may be hard to control. [Reasonable Inference] |
| 3 | C₃N₄ or Li₂(CN₂) | C/N source | Li₂(CN₂) is strongly supported by carbodiimide analogues; C₃N₄ is a plausible carbonitride source. [CS; TS; Reasonable Inference] | C₃N₄/cyanamide sources can decompose and release volatile N/C species. [Reasonable Inference] |
| 4 | Li₃N | N activity modifier | Li₃N appears in Eu nitride and La nitride-carbodiimide analogues. [SS; TS; CS] | Air/moisture-sensitive and may form Li-containing side phases. [SS; TS; Reasonable Inference] |
| 5 | NaCN, optional | C/N activity modifier | NaCN is used in Sr₃Co(CN)₃ synthesis. [TS] | Toxic cyanide; incompatible with wet acidic workup. [TS; Reasonable Inference] |

#### Route 3: HPHT Nitrogen-Rich Carbonitride / Diazenide Stabilization

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN or Eu azide-derived source | Eu/N source | EuN is supported by Eu nitride analogue data; azide logic is extrapolated from alkaline-earth diazenide synthesis. [SS; TS; Reasonable Inference] | Eu azide route would be shock/thermal hazardous. [TS; Reasonable Inference] |
| 2 | Re metal or Re nitride | Re source | Required Re source; no Re analogue exists in CS/SS/TS. [Reasonable Inference] | Slow diffusion and uncertain Re oxidation state. [Reasonable Inference] |
| 3 | Li₂(CN₂) or C₃N₄ | C/N source | Li₂(CN₂) is strongly supported by carbodiimide analogues; C₃N₄ is extrapolated as a dense C/N source. [CS; TS; Reasonable Inference] | Possible decomposition under HPHT. [Reasonable Inference] |
| 4 | NaN₃ or LiN₃ | N₂/N–N chemical-potential source | Azide decomposition is the direct HPHT route to diazenide N–N units in TS. [TS] | Toxic, explosive, shock-sensitive. [TS; Reasonable Inference] |
| 5 | BN/Ta capsule materials | Containment | HPHT diazenide synthesis uses specialized high-pressure assemblies and inert crucibles/capsules. [TS; Reasonable Inference] | Capsule reaction or contamination possible. [Reasonable Inference] |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability

| E_hull (eV/atom) | Score |
|:--:|:--:|
| Target E_hull not reported; target formation energy is predicted negative at −0.436 eV/atom, but no candidate-specific hull or phonons are reported. [Target] CS analogues span 0–0.228 eV/atom, with several rare-earth carbodiimides at 0–0.045 eV/atom. [CS] SS analogues include synthesizable metastable M(NCN) phases around 0.155–0.215 eV/atom and an Eu nitride analogue at 0 eV/atom. [SS] TS analogues are mostly reported at 0 eV/atom. [TS] | **72** |

**F1 Score: 72 / 100**

#### F2 + F3: Per-Route Scoring

##### Route 1: Halide–Carbodiimide Solid-State Metathesis / Molten-Salt Flux

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; main analogue window is 450–800 °C. [CS; SS; TS] | 0 |
| T > 1400°C | No. [CS; SS; TS] | 0 |
| High pressure (>5 GPa) | No; sealed ampoule reactions are ambient pressure. [CS; SS; TS] | 0 |
| Reactive/controlled atmosphere (H₂, NH₃, vacuum) | Yes; dry Ar and evacuated/sealed ampoules are required. [CS; SS; TS] | −15 |
| Volatile precursor requiring sealed system | Yes; Re halide selection adds volatility/redox risk. [Reasonable Inference] | −10 |
| Multi-step process (≥3 steps) | Yes; precursor drying/prep, glovebox mixing, sealing, heating, and washing are used. [CS; SS; TS] | −10 |
| Toxic or air-sensitive precursors | Yes; Li₂(CN₂), Li₃N, anhydrous halides, and possible Re chlorides require controlled handling. [CS; SS; TS; Reasonable Inference] | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 75 | Halide metathesis with Li₂(CN₂)/Li₃N and molten salts is reactive and repeatedly successful for rare-earth/mixed carbodiimides. [CS; SS; TS] |
| Ion diffusion difficulty | 35 | Re has a very high melting point, but flux/metathesis analogues show synthesis far below refractory cation melting temperatures. [SS; CS; Reasonable Inference] |
| Structural reconstruction | 50 | Carbodiimide/nitride motifs transfer, but the target’s P1 Eu–Re–C–N/N–N network is not directly matched by any analogue. [Target; CS; SS; TS; Reasonable Inference] |

**F3 Score for Route 1: 53 / 100**

##### Route 2: High-Temperature Sealed-Ampoule Nitridocarbonization

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; recommended anneal reaches about 1000–1150 °C, and TS includes 1200 K/1950 K analogues. [TS; SS; Reasonable Inference] | −10 |
| T > 1400°C | No for the recommended moderated program, although one Eu nitride analogue uses 1950 K. [SS; TS; Reasonable Inference] | 0 |
| High pressure (>5 GPa) | No. [SS; TS; CS] | 0 |
| Reactive/controlled atmosphere (H₂, NH₃, vacuum) | Yes; sealed Ta/Nb under Ar/vacuum is needed. [SS; TS; CS] | −15 |
| Volatile precursor requiring sealed system | Yes; C/N sources and possible Re halides/nitrides require containment. [Reasonable Inference] | −10 |
| Multi-step process (≥3 steps) | Yes; pre-reaction, grinding/pelletizing, ampoule sealing, high-T anneal, and characterization are expected. [SS; TS; CS; Reasonable Inference] | −10 |
| Toxic or air-sensitive precursors | Yes; EuN/Li₃N/NaCN-type reagents are air-sensitive or toxic. [SS; TS; Reasonable Inference] | −10 |

**F2 Score for Route 2: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 40 | EuN/Re/C₃N₄-type solids are less reactive than halide metathesis mixtures. [SS; TS; Reasonable Inference] |
| Ion diffusion difficulty | 14 | Re is refractory and no flux/liquid transport is intrinsic to this route. [Reasonable Inference] |
| Structural reconstruction | 30 | Direct conversion from nitrides/metals/carbon nitride to low-symmetry Eu₂ReC₃N₇ requires major reconstruction. [Target; SS; TS; Reasonable Inference] |

**F3 Score for Route 2: 28 / 100**

##### Route 3: HPHT Nitrogen-Rich Carbonitride / Diazenide Stabilization

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; HPHT diazenide analogues operate at 450–800 °C and recommended target screening is 600–900 °C. [TS; Reasonable Inference] | 0 |
| T > 1400°C | No for this HPHT route. [TS; Reasonable Inference] | 0 |
| High pressure (>5 GPa) | Yes; 6–8 GPa is recommended from HPHT diazenide precedent. [TS; Reasonable Inference] | −25 |
| Reactive/controlled atmosphere (H₂, NH₃, vacuum) | Yes; sealed N-rich internal chemical potential is required. [TS; Reasonable Inference] | −15 |
| Volatile precursor requiring sealed system | Yes; azide/cyanamide decomposition generates volatile N/C species. [TS; Reasonable Inference] | −10 |
| Multi-step process (≥3 steps) | Yes; glovebox loading, capsule sealing, pressurization, heating/quench, decompression, and recovery are required. [TS; Reasonable Inference] | −10 |
| Toxic or air-sensitive precursors | Yes; azides, EuN, and cyanamide sources are hazardous or air-sensitive. [TS; SS; Reasonable Inference] | −10 |

**F2 Score for Route 3: 30 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 70 | Azide/cyanamide decomposition provides reactive N/C species under HPHT. [TS; Reasonable Inference] |
| Ion diffusion difficulty | 20 | HPHT helps densification, but Re diffusion remains difficult because Re is refractory. [TS; Reasonable Inference] |
| Structural reconstruction | 40 | HPHT can stabilize N–N units, but Eu–Re–C–N ordering is not directly shown by CS/SS/TS. [Target; TS; SS; Reasonable Inference] |

**F3 Score for Route 3: 43 / 100**

#### F4: Amorphization Tendency

| Check | Criterion | Trigger? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | Eu–N distances of 2.37–2.78 Å and Re–N/Re–C distances of 1.88–2.23 Å imply a large Eu/Re size mismatch. [Target; Reasonable Inference] |
| C2 | Unit cell atom count >40 | No | The P1 structure description lists 2 Eu + 1 Re + 3 C + 7 N = 13 crystallographic sites/formula atoms. [Target] |
| C3 | Mixed polyhedral connectivity | Yes, inferred | Target has mixed Eu 5/6-coordinate and Re 6-coordinate environments linked through N/CN/N–N units, and the Eu nitride analogue shows corner/edge/face-sharing octahedra. [Target; SS; TS; Reasonable Inference] |

| Triggers | Score | Risk Level |
|:--:|:--:|:--:|
| 2 | **58** | Medium |

**F4 Score: 58 / 100**

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 53 | 72 | 58 | **60.2** |
| 2 | 45 | 28 | 72 | 58 | **51.5** |
| 3 | 30 | 43 | 72 | 58 | **51.5** |

| | |
|:--|:--|
| **Best Route** | Route 1, Halide–Carbodiimide Solid-State Metathesis / Molten-Salt Flux |
| **Expert adjustment (±5)** | **−3**, because no CS/SS/TS analogue contains Re in this Eu–C–N framework and the target has no reported hull/phonon validation. [Target; CS; SS; TS; Reasonable Inference] |
| **Final Synthesizability Score** | **57 / 100**, based on Route 1. |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **550–800 °C** for the recommended flux/metathesis screen. [CS; SS; TS] |
| Preferred atmosphere | Dry Ar handling plus sealed evacuated or Ar-backfilled ampoule. [CS; SS; TS] |
| Pressure | Ambient pressure, sealed ampoule. [CS; SS; TS] |
| Estimated duration | 2–7 days for screening; up to 3 weeks for crystal growth if phase appears. [CS; Reasonable Inference] |
| Critical control parameters | Strictly anhydrous precursors, Li₂(CN₂):Li₃N ratio, Re halide volatility/redox, oxygen exclusion, flux loading, slow cooling, and side-phase mapping. [CS; SS; TS; Reasonable Inference] |
| Basis | Rare-earth carbodiimide SSM, La nitride-carbodiimide SSM, Cr carbodiimide molten-salt synthesis, and mixed carbodiimide metathesis analogues. [CS; SS; TS] |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target has a negative predicted formation energy of −0.436 eV/atom, but no target-specific convex-hull or phonon evidence is reported, so it cannot be treated as confirmed ground-state. [Target] CS supports moderate-to-good stability because several rare-earth carbodiimides are reported at 0–0.045 eV/atom, although one chemically similar cyanide is 0.228 eV/atom. [CS] SS gives mixed evidence because Fe/Ni/Co carbodiimides are synthesizable but metastable at 0.155–0.215 eV/atom, while an Eu nitride analogue is 0 eV/atom. [SS] TS gives the strongest analogue thermodynamic signal because the top thermodynamic analogues are mostly 0 eV/atom, but they are not candidate-specific. [TS]

**F2/F3 — Route 1**  
Route 1 has moderate condition severity because the analogue temperature range is only 450–800 °C, but inert/vacuum sealed ampoules, flux, multistep handling, and air-sensitive C/N reagents are required. [CS; SS; TS] Its kinetics are the best of the three routes because halide metathesis and molten salts provide reactive transport, but Re incorporation remains the major kinetic penalty. [CS; SS; TS; Reasonable Inference] CS/SS/TS give useful signal for this route; no source is neutral for the general metathesis/flux concept. [CS; SS; TS]

**F2/F3 — Route 2**  
Route 2 is harsher because it relies on high-temperature sealed-ampoule nitridocarbonization, with analogues ranging from 800 °C to 1950 K. [CS; SS; TS] Its kinetics are weak because direct reaction from EuN/Re/C–N solids requires major diffusion and reconstruction, and CS/SS/TS do not directly demonstrate Re–C/N ordering. [CS; SS; TS; Reasonable Inference] CS provides partial sealed-ampoule nitride-carbodiimide evidence, but insufficient direct evidence for Eu–Re nitridocarbonization; that missing Re-specific component is treated as neutral 50 in source weighting. [CS; Reasonable Inference]

**F2/F3 — Route 3**  
Route 3 has the most severe conditions because TS supports 3–12 GPa HPHT diazenide synthesis, and the proposed target screen requires >5 GPa pressure with hazardous N-rich precursors. [TS; Reasonable Inference] Its kinetic score is better than Route 2 only in precursor activity because azide/cyanamide decomposition can provide reactive nitrogen, but Re diffusion and ordering remain difficult. [TS; Reasonable Inference] CS gives insufficient useful high-pressure signal and is treated as neutral 50 for this route; SS and TS provide the relevant HPHT/nitride-stabilization evidence. [CS; SS; TS]

**F4 — Amorphization Tendency**  
The target has a likely large Eu/Re cation-size mismatch and a low-symmetry P1 network with multiple Eu/Re/C/N/N–N environments, which increases disorder risk. [Target; Reasonable Inference] The atom count criterion is not triggered because the reported formula/structure description corresponds to 13 atoms/sites, not >40. [Target] Mixed connectivity is inferred from the target’s linked coordination environments and supported by Eu nitride analogue connectivity, but the exact target polyhedral sharing is not directly reported. [Target; SS; TS; Reasonable Inference]

---

### SECTION 6 — Synthesizability Interpretation

Eu₂ReC₃N₇ should be viewed as an **unvalidated low-energy or metastable candidate**, not a confirmed ground-state phase, because the target has only negative formation energy and no reported E_hull or phonon validation. [Target] The strongest synthesis support comes from CS/TS rare-earth carbodiimide and nitride-carbodiimide metathesis routes at 450–800 °C, which closely match the Eu–C–N chemistry. [CS; TS] SS adds support for flux-assisted formation of transition-metal carbodiimides, although those examples do not include Re. [SS; Reasonable Inference] The most important enabling factor is reactive halide/carbodiimide metathesis in molten salts, which can lower diffusion barriers and preserve C–N motifs. [CS; SS; TS] The main limiting factor is controlled incorporation of Re into a low-symmetry Eu–Re–C–N/N–N framework without forming simpler Eu carbodiimides, Re nitrides/carbides, or decomposed carbonitrides. [Target; CS; SS; TS; Reasonable Inference]

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|:--|:--:|:--|
| 1 | All | No candidate-specific E_hull or phonon validation, so thermodynamic confidence is limited. [Target] | High | Treat first products as exploratory; perform PXRD/SEM/EDS and compare to predicted pattern before optimization. [Reasonable Inference] |
| 2 | Route 1 | Competing Eu carbodiimides or Eu nitride-carbodiimide side phases may form. [CS; Reasonable Inference] | High | Vary Li₂(CN₂):Li₃N ratio and anneal temperature using CS 500–800 °C windows. [CS] |
| 3 | Route 1 | Re chloride volatility and Re redox mismatch may cause stoichiometry loss. [Reasonable Inference] | High | Use sealed Ta/Nb liner, lower initial temperature, slight Re excess, and slow heating. [CS; SS; Reasonable Inference] |
| 4 | Routes 2–3 | Slow Re diffusion and ordering may block formation of P1 Eu–Re ordering. [Target; Reasonable Inference] | High | Prefer flux/metathesis activation, fine powders, repeated grinding, or HPHT quench screening. [SS; TS; Reasonable Inference] |
| 5 | All | Air/moisture sensitivity of EuN/Li₃N/Li₂(CN₂)/azide-type reagents can contaminate products. [CS; SS; TS] | Med–High | Use Ar glovebox loading, dried flux, sealed ampoules/capsules, and oxygen-free workup. [CS; SS; TS] |
| 6 | Route 3 | Azide or N-rich HPHT mixtures pose shock, pressure, and gas-release hazards. [TS; Reasonable Inference] | High | Use small charges, validated capsules, controlled heating, and established multi-anvil azide-decomposition protocols. [TS] |
| 7 | All | Crystal growth may be difficult because the target is triclinic P1 with many inequivalent sites. [Target; Reasonable Inference] | Medium | Use slow cooling in LiCl/KCl or KCl/LiCl flux and longer holds up to weeks if a phase match appears. [CS; SS] |
| 8 | All | C–N/N–N motif preservation is uncertain at high temperature. [Target; Reasonable Inference] | Medium | Start with Route 1 at 550–650 °C before escalating to 800 °C or HPHT conditions. [CS; SS; TS; Reasonable Inference] |