> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.752 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

#### Route 1: High-Temperature Solid-State Nitride Sintering

| Field | Details |
|:--|:--|
| Reference basis | Chemically/structurally/thermodynamically similar actinide-transition-metal nitrides U₂MnN₃ and U₂CrN₃ were made by pressing nitride/metal powders and equilibrating under 1 atm N₂ at 1200–1600 °C; SrHfN₂ was made from binary nitrides at 1000 °C for 5 days under Ar. (CS-2, CS-4, CS-5; SS-1, SS-2; TS-1) |
| Precursors | EuN or Eu₃N₂ powder, Re powder or pre-nitrided ReNₓ, optional excess nitrogen donor such as Li₃N. Eu nitride / ReNₓ selection is an adaptation because no Eu-Re-N precursor set is directly reported. [Reasonable Inference] |
| Temperature program | Grind under Ar → pelletize → ramp 2–5 °C/min to 1200–1450 °C → hold 24–72 h → regrind/re-pelletize → second hold 24–72 h → controlled cool 2–5 °C/min. High-temperature range follows U₂MnN₃/U₂CrN₃ and SrHfN₂ analogues. (CS-2, CS-4, CS-5; SS-1, SS-2; TS-1) |
| Atmosphere | 1 atm N₂ or sealed inert/N₂-compatible refractory ampoule; N₂ atmosphere is directly supported for U₂MnN₃/U₂CrN₃. (CS-2, CS-4; SS-1, SS-2; TS-1) |
| Pressure | Ambient pressure / sealed-ampoule autogenous pressure; no high pressure is required in the solid-state analogues. (CS-2, CS-4, CS-5; SS-1, SS-2; TS-1) |
| Additional conditions | Fine grinding, pellet pressing, inert-atmosphere handling, and possible repeated annealing are needed because Re is refractory and cation diffusion is likely slow. [Reasonable Inference] |
| Transferability to target | Applies because several ternary nitrides with electropositive actinide/alkaline-earth or rare-earth-like cations plus transition metals are accessible by solid-state nitride synthesis. The adaptation risk is that Eu-Re-N has no direct analogue and the target contains a short N–N bond motif not demonstrated in the solid-state ternary nitride examples. (CS-2, CS-4, CS-5; SS-1, SS-2; TS-1; [Reasonable Inference]) |
| Estimated difficulty | Challenging. High T and slow Re diffusion are supported concerns from the 1200–1600 °C analogues, while Eu/Re/N stoichiometry control is an extrapolated concern. (CS-2, CS-4; SS-1, SS-2; TS-1; [Reasonable Inference]) |

#### Route 2: Li₃N / Ga Flux-Assisted Nitride Growth — **Recommended First Attempt**

| Field | Details |
|:--|:--|
| Reference basis | La₃(TaN₃)₂ was synthesized by Ga flux at 1600 °C or Li₃N flux at 1030 °C; this is the strongest chemical analogue because it is a rare-earth/transition-metal nitride flux route. (CS-1) |
| Precursors | Eu metal or EuN, Re powder, large excess Li₃N flux / nitrogen source; Ga flux is a higher-temperature backup. This Eu-Re substitution is an adaptation from Ln/Ta nitride flux chemistry. (CS-1; [Reasonable Inference]) |
| Temperature program | Load under Ar → seal in Ta/Nb ampoule inside silica → ramp 50–100 °C/h to 950–1030 °C for Li₃N flux → hold ~60 h → slow cool 1–5 °C/h to 600 °C → separate flux under inert conditions. The 1030 °C / 60 h Li₃N basis is direct; slow cooling is an extrapolation for crystal growth. (CS-1; [Reasonable Inference]) |
| Atmosphere | Ar glovebox loading; sealed Ta/Nb or Nb/Ta-compatible ampoule; N₂ or inert outer containment. (CS-1) |
| Pressure | Ambient / sealed-ampoule autogenous pressure. (CS-1) |
| Additional conditions | Use excess Li₃N to raise nitrogen chemical potential; avoid aqueous workup unless product stability is confirmed because Eu nitrides are likely moisture sensitive. Li₃N flux and sealed ampoules are supported; moisture sensitivity is an extrapolation. (CS-1; [Reasonable Inference]) |
| Transferability to target | Most transferable chemically because CS-1 demonstrates rare-earth + refractory transition-metal nitride formation from metals/flux, and flux can mitigate Re diffusion limitations. The main gap is that SS and TS do not provide flux-specific evidence, so flux-specific support from SS/TS is insufficient evidence and neutral 50. (CS-1; insufficient evidence from SS/TS for flux-specific route) |
| Estimated difficulty | Moderate–Challenging. The method uses specialized sealed ampoules and air-sensitive flux but avoids the most severe 1200–1600 °C solid-state diffusion regime. (CS-1; [Reasonable Inference]) |

#### Route 3: High-Pressure Nitrogen-Rich / Azide-Derived Route

| Field | Details |
|:--|:--|
| Reference basis | SrN₂, CaN₂, and BaN₂ diazenides were synthesized by controlled azide decomposition at 3–12 GPa and 450–800 °C; these analogues are relevant because the target contains a short N–N bond of 1.30 Å, comparable to N–N units in diazenides. (SS-4, SS-5; TS-2, TS-3, TS-4; target structure) |
| Precursors | EuN or Eu azide precursor, Re powder or ReNₓ, and an internal nitrogen source such as azide or compressed N₂. Eu azide / mixed Eu-Re-N high-pressure chemistry is extrapolated. (SS-4, SS-5; TS-2, TS-3, TS-4; [Reasonable Inference]) |
| Temperature program | Load under Ar → compress to 5–10 GPa → heat to 550–800 °C for 15–120 min → quench at pressure → decompress slowly. Pressure/temperature basis comes from alkaline-earth diazenides; longer hold is extrapolated for ternary ordering. (SS-4, SS-5; TS-2, TS-3, TS-4; [Reasonable Inference]) |
| Atmosphere | Sealed high-pressure capsule, glovebox-loaded; nitrogen supplied internally by azide/N₂. (SS-4, SS-5; TS-2, TS-3, TS-4) |
| Pressure | High pressure, likely >5 GPa for Eu-Re-N screening. The 3–12 GPa range is directly supported for alkaline-earth diazenides; applying it to Eu₃Re₃N₇ is extrapolated. (SS-4, SS-5; TS-2, TS-3, TS-4; [Reasonable Inference]) |
| Additional conditions | BN capsule, multianvil/DAC-type equipment, strict moisture exclusion, and careful azide safety controls. (SS-4, SS-5; TS-2, TS-3, TS-4) |
| Transferability to target | Applies mainly to stabilizing the N–N unit, not necessarily to Eu-Re cation ordering. CS provides insufficient evidence for high-pressure azide synthesis, so CS route support is neutral 50. (SS-4, SS-5; TS-2, TS-3, TS-4; insufficient evidence from CS) |
| Estimated difficulty | Challenging. High-pressure equipment, hazardous azides, and ternary cation ordering are all limiting. (SS-4, SS-5; TS-2, TS-3, TS-4; [Reasonable Inference]) |

#### Route 4: Reactive Thin-Film Deposition / CVD Screening

| Field | Details |
|:--|:--|
| Reference basis | Nb₄N₅ was made by thermal CVD using NbCl₅ + NH₃ + H₂ at 950–1000 °C; TaN high-pressure nitrides use NH₃/N₂ as nitrogen sources, but not multication vapor deposition. (SS-3; TS-5) |
| Precursors | Eu metal sputter target or volatile Eu precursor, Re sputter target or ReCl₅, N₂/NH₃ plasma or NH₃/H₂ gas. Eu-Re-N co-deposition is extrapolated from binary nitride CVD/sputtering practice. (SS-3; TS-5; [Reasonable Inference]) |
| Temperature program | Co-sputter or CVD deposit at 500–900 °C under activated nitrogen → anneal 700–950 °C for 0.5–5 h under N₂/NH₃ → quench or controlled cool. The 950–1000 °C nitride CVD basis is direct only for Nb₄N₅. (SS-3; [Reasonable Inference]) |
| Atmosphere | Vacuum / Ar–N₂ plasma or flowing NH₃/H₂; reactive gas handling is supported by Nb₄N₅ CVD. (SS-3) |
| Pressure | Low-pressure deposition or atmospheric-pressure CVD; not high-pressure. (SS-3) |
| Additional conditions | Requires cation-flux calibration, nitrogen chemical-potential control, and substrate/anneal screening. Multicomponent Eu/Re composition control is extrapolated. (SS-3; [Reasonable Inference]) |
| Transferability to target | Useful as a metastable screening route because vapor deposition can bypass bulk diffusion, but CS and TS provide insufficient evidence for Eu-Re-N vapor deposition and are neutral 50 for route-specific support. (SS-3; insufficient evidence from CS/TS; [Reasonable Inference]) |
| Estimated difficulty | Challenging. Composition control and crystallizing a low-symmetry P1 bulk-like phase are the key risks. (SS-3; [Reasonable Inference]) |

---

### SECTION 2 — Recommended Precursors

#### Route 1: High-Temperature Solid-State Nitride Sintering

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN or Eu₃N₂, ≥99%, dry powder | Eu + N source | Binary nitrides are analogous to Sr₂N/HfN use in SrHfN₂ and actinide mononitrides in U₂MnN₃/U₂CrN₃; Eu nitride choice is extrapolated. (CS-2, CS-4, CS-5; SS-1, SS-2; TS-1; [Reasonable Inference]) | Air/moisture sensitive; may require prior synthesis. |
| 2 | Re powder, ≥99.9%, fine | Re source | Transition-metal elements were used for U₂MnN₃/U₂CrN₃; Re substitution is extrapolated. (CS-2, CS-4; SS-1, SS-2; TS-1; [Reasonable Inference]) | Refractory; slow diffusion. |
| 3 | ReNₓ, if available | Reactive Re–N source | Pre-nitrided transition-metal nitride could reduce nitrogen uptake burden, but this is not directly reported for Eu-Re-N. [Reasonable Inference] | Requires prior synthesis; phase purity uncertain. |
| 4 | Li₃N, small excess | Nitrogen activity booster | Li₃N is directly used as flux/reactive nitrogen source in La₃Ta₂N₆ synthesis; use as a minor booster in solid-state route is extrapolated. (CS-1; [Reasonable Inference]) | Air-sensitive; possible Li contamination. |

#### Route 2: Li₃N / Ga Flux-Assisted Nitride Growth

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Li₃N, large excess, dry | Flux + N source | Li₃N flux/reactive nitrogen source directly produced La₃Ta₂N₆ at 1030 °C. (CS-1) | Strongly air/moisture sensitive; reacts with water. |
| 2 | Eu metal, ≥99.9%, freshly cleaned, or EuN | Eu source | Rare-earth metal precursors were used in Ln/Ta nitride flux synthesis; Eu substitution is extrapolated. (CS-1; [Reasonable Inference]) | Eu metal is air-sensitive; EuN may require prior synthesis. |
| 3 | Re powder, ≥99.9%, fine | Re source | Ta metal was used as refractory transition-metal source in CS-1; Re substitution is extrapolated. (CS-1; [Reasonable Inference]) | Refractory; incomplete dissolution possible. |
| 4 | Ga metal, optional backup flux | Alternative flux | Ga flux route directly produced rare-earth tantalum nitrides, but at 1600 °C. (CS-1) | High T; Ga inclusion/contamination risk. |

#### Route 3: High-Pressure Nitrogen-Rich / Azide-Derived Route

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN or Eu₃N₂ | Eu + baseline N source | Nitride starting materials are supported by ternary nitride analogues; applying them under high pressure is extrapolated. (CS-2, CS-4, CS-5; SS-1, SS-2; TS-1; [Reasonable Inference]) | Air-sensitive; may require prior synthesis. |
| 2 | Re powder or ReNₓ | Re source | Transition-metal powder/nitride use is supported in solid-state nitride analogues; high-pressure Re incorporation is extrapolated. (CS-2, CS-4; SS-1, SS-2; TS-1; [Reasonable Inference]) | Refractory; ordering risk. |
| 3 | Eu(N₃)₂ / Eu(N₃)₃ or physically separated azide N₂ source | High-N chemical potential | Azide decomposition is directly used for Ca/Sr/Ba diazenides; applying an Eu or external azide source to Eu-Re-N is extrapolated. (SS-4, SS-5; TS-2, TS-3, TS-4; [Reasonable Inference]) | Highly hazardous, shock/thermal sensitivity, toxic decomposition risk. |
| 4 | BN capsule | Containment | BN crucibles/capsules are used in high-pressure diazenide synthesis. (SS-4, SS-5; TS-2, TS-3, TS-4) | Specialized setup; contamination possible. |

#### Route 4: Reactive Thin-Film Deposition / CVD Screening

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Eu metal sputter target or volatile Eu precursor | Eu source | Multicomponent vapor route is extrapolated; SS only directly supports Nb nitride CVD, not Eu vapor chemistry. (SS-3; insufficient evidence from CS/TS; [Reasonable Inference]) | Eu oxidation/volatility; precursor availability. |
| 2 | Re metal target or ReCl₅ | Re source | NbCl₅ was used for Nb nitride CVD; ReCl₅ / Re target use is extrapolated. (SS-3; [Reasonable Inference]) | ReCl₅ is moisture-sensitive/corrosive; Re target needs high power. |
| 3 | NH₃ or N₂ plasma | Nitrogen source | NH₃/H₂ flow directly supported Nb₄N₅ CVD; N₂/NH₃ nitridation also appears in nitride analogues. (SS-3; TS-5) | NH₃ toxic; plasma/N control required. |
| 4 | H₂, optional | Reducing carrier gas | H₂ is directly used in Nb₄N₅ CVD. (SS-3) | Flammable; may reduce Eu/Re phases incorrectly. |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability — Weight 30%

| Evidence | Interpretation |
|:--|:--|
| Target E_hull | Candidate-specific convex-hull energy is not reported; the 0.000000 placeholder must not be interpreted as E_hull = 0. Target source evidence gives predicted formation energy = −0.752 eV/atom, but no convex-hull or phonon validation. |
| CS signal | Chemically similar nitrides show low reported hull values: La₃Ta₂N₆ at 0, U₂MnN₃ at 0, NaTa₃N₅ at 0.038, U₂CrN₃ at 0.041, SrHfN₂ at 0.031 eV/atom. (CS-1 to CS-5) |
| SS signal | Structurally similar U₂CrN₃, U₂MnN₃, Nb₄N₅, SrN₂, and CaN₂ are reported near/at hull, but none is Eu-Re-N. (SS-1 to SS-5) |
| TS signal | Thermodynamic analogues are mostly at/near hull, including U₂MnN₃, SrN₂, CaN₂, BaN₂, and TaN. (TS-1 to TS-5) |

**F1 Score: 72 / 100**

This is scored in the 65–85 band because analogue thermodynamics are favorable, but the target lacks candidate-specific E_hull and phonon validation. (CS; SS; TS; target source limitation)

---

#### F2 + F3: Per-Route Scoring

##### Route 1: High-Temperature Solid-State Nitride Sintering

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; 1200–1600 °C analogues. (CS-2, CS-4; SS-1, SS-2; TS-1) | −10 |
| T > 1400°C | Yes; some analogues require up to 1600 °C. (CS-2, CS-4; SS-1, SS-2; TS-1) | −10 |
| High pressure (>5 GPa) | No; ambient N₂ analogues. (CS-2, CS-4; SS-1, SS-2; TS-1) | 0 |
| Reactive/controlled atmosphere | Yes; N₂-controlled nitride synthesis. (CS-2, CS-4; SS-1, SS-2; TS-1) | −15 |
| Volatile precursor requiring sealed system | Not directly evidenced for solid-state analogues; Eu volatility is an extrapolated risk and not counted. [Reasonable Inference] | 0 |
| Multi-step process | Yes; nitride precursor preparation, grinding/pelletizing, and annealing/regrinding. (CS-5; [Reasonable Inference]) | −10 |
| Toxic or air-sensitive precursors | Yes; nitride/Eu handling is extrapolated from inert nitride synthesis and Li₃N/Sr₂N handling. (CS-1, CS-5; [Reasonable Inference]) | −10 |

**F2 Score for Route 1: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 40 | Dense/refractory metal + binary nitride route resembles high-T solid-state analogues; Re powder is expected to be less reactive than fluxed Ta. (CS-2, CS-4; SS-1, SS-2; TS-1; [Reasonable Inference]) |
| Ion diffusion difficulty | 15 | Re has very high melting point and slow diffusion is likely; high-T analogues support needing 1200–1600 °C. (CS-2, CS-4; SS-1, SS-2; TS-1; [Reasonable Inference]) |
| Structural reconstruction | 30 | Target P1 Eu₃Re₃N₇ with multiple inequivalent sites and N–N motif requires more reconstruction than simple binary nitride mixing. (SS-1 to SS-5; TS-2 to TS-4; target structure; [Reasonable Inference]) |

**F3 Score for Route 1: 28 / 100**

##### Route 2: Li₃N / Ga Flux-Assisted Nitride Growth

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes for the Li₃N analogue at 1030 °C. (CS-1) | −10 |
| T > 1400°C | No for Li₃N route; Ga backup reaches 1600 °C but is not the primary recommendation. (CS-1) | 0 |
| High pressure (>5 GPa) | No; sealed flux at ambient/autogenous pressure. (CS-1) | 0 |
| Reactive/controlled atmosphere | Yes; Ar/N₂ and sealed ampoule handling are required. (CS-1) | −15 |
| Volatile precursor requiring sealed system | Not counted; sealing is directly for flux/inert containment, not specifically a volatile Eu/Re precursor in the evidence. (CS-1) | 0 |
| Multi-step process | Yes; inert loading, ampoule sealing, flux growth, cooling, and flux separation. (CS-1) | −10 |
| Toxic or air-sensitive precursors | Yes; Li₃N and Eu-containing precursors require inert handling. (CS-1; [Reasonable Inference]) | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 70 | Li₃N directly acts as flux and reactive nitrogen source in La₃Ta₂N₆ synthesis. (CS-1) |
| Ion diffusion difficulty | 30 | Re remains refractory, but flux synthesis can partially bypass solid-state diffusion; CS-1 demonstrates nitride formation at 1030 °C despite refractory Ta chemistry. (CS-1; [Reasonable Inference]) |
| Structural reconstruction | 55 | Flux crystallization can build complex nitrides from solution, but CS-1 reports phase-control/nonstoichiometry issues, so reconstruction risk remains moderate. (CS-1) |

**F3 Score for Route 2: 52 / 100**

##### Route 3: High-Pressure Nitrogen-Rich / Azide-Derived Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; diazenide analogues form at 450–800 °C. (SS-4, SS-5; TS-2, TS-3, TS-4) | 0 |
| T > 1400°C | No. (SS-4, SS-5; TS-2, TS-3, TS-4) | 0 |
| High pressure (>5 GPa) | Yes; 9–12 GPa examples and target screening likely >5 GPa. (SS-4, SS-5; TS-2, TS-3; [Reasonable Inference]) | −25 |
| Reactive/controlled atmosphere | Not counted; nitrogen is generated internally in sealed high-pressure capsules. (SS-4, SS-5; TS-2 to TS-4) | 0 |
| Volatile precursor requiring sealed system | Yes; azide decomposition creates high internal nitrogen activity. (SS-4, SS-5; TS-2 to TS-4) | −10 |
| Multi-step process | Yes; azide/nitride preparation, glovebox loading, compression, heating, quenching, recovery. (SS-4, SS-5; TS-2 to TS-4) | −10 |
| Toxic or air-sensitive precursors | Yes; azides are hazardous and products/precursors are moisture-sensitive. (SS-4, SS-5; TS-2 to TS-4) | −10 |

**F2 Score for Route 3: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 75 | Azide decomposition provides very high nitrogen activity and directly forms diazenides. (SS-4, SS-5; TS-2 to TS-4) |
| Ion diffusion difficulty | 20 | Lower temperature and short time limit cation ordering, while Re remains refractory. (SS-4, SS-5; TS-2 to TS-4; [Reasonable Inference]) |
| Structural reconstruction | 35 | N–N motif formation is supported, but ternary Eu/Re ordering in P1 is not directly supported. (SS-4, SS-5; TS-2 to TS-4; [Reasonable Inference]) |

**F3 Score for Route 3: 43 / 100**

##### Route 4: Reactive Thin-Film Deposition / CVD Screening

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No if kept ≤950–1000 °C as in Nb₄N₅ CVD. (SS-3) | 0 |
| T > 1400°C | No. (SS-3) | 0 |
| High pressure (>5 GPa) | No; CVD is atmospheric/low-pressure, not GPa. (SS-3) | 0 |
| Reactive/controlled atmosphere | Yes; NH₃/H₂ or N₂ plasma is required. (SS-3) | −15 |
| Volatile precursor requiring sealed system | Yes for halide CVD precursor delivery; NbCl₅ vaporization is the direct analogue. (SS-3) | −10 |
| Multi-step process | Yes; deposition, composition calibration, and annealing/screening. (SS-3; [Reasonable Inference]) | −10 |
| Toxic or air-sensitive precursors | Yes; NH₃/H₂ and Eu/Re halide or Eu metal handling. (SS-3; [Reasonable Inference]) | −10 |

**F2 Score for Route 4: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor vapor availability | 45 | NbCl₅/NH₃/H₂ CVD is supported, but Eu-Re-N precursor compatibility is not; CS/TS give insufficient vapor-route evidence and are neutral 50. (SS-3; insufficient evidence from CS/TS; [Reasonable Inference]) |
| Crystallization pathway | 35 | SS-3 supports binary Nb nitride crystallization, but a complex P1 Eu-Re nitride likely needs annealing and may form competing phases. (SS-3; [Reasonable Inference]) |
| Composition control | 25 | Eu:Re:N = 3:3:7 requires tight multicomponent control, and no analogue reports a wide Eu/Re/N vapor window. (insufficient evidence from CS/SS/TS; [Reasonable Inference]) |

**F3 Score for Route 4: 35 / 100**

---

#### F4: Amorphization Tendency — Weight 20%

| Check | Criterion | Trigger? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | Eu and Re cations are expected to differ substantially in size/coordination, so this check triggers. [Reasonable Inference] |
| C2 | Unit cell atom count >40 | No | P1 target has 3 Eu + 3 Re + 7 N inequivalent sites, implying 13 atoms in the primitive structural description. (target structure) |
| C3 | Mixed vertex + edge + face sharing coexist | No | Target description reports corner/edge sharing but no face-sharing; analogue face-sharing exists in U₂MnN₃/U₂CrN₃ but does not prove target face-sharing. (SS-1, SS-2; TS-1; target structure) |

**F4 Score: 78 / 100**

Risk level: **Low–Medium**, with 1 trigger. CS/SS/TS do not directly provide Eu/Re target ionic radii or target atom count, so those direct-source signals are neutral 50; the final F4 check uses target structure plus chemical extrapolation. (insufficient direct C1/C2 evidence from CS/SS/TS; [Reasonable Inference])

---

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 45 | 28 | 72 | 78 | 55 |
| 2 | 55 | 52 | 72 | 78 | 64 |
| 3 | 45 | 43 | 72 | 78 | 59 |
| 4 | 55 | 35 | 72 | 78 | 60 |

|  |  |
|:--|:--|
| **Best Route** | Route 2 — Li₃N / Ga Flux-Assisted Nitride Growth |
| **Expert adjustment (±5)** | −4, because the target has no candidate-specific E_hull/phonon validation, no direct Eu-Re-N analogue, and the N–N motif is better supported by high-pressure diazenides than by flux ternary nitrides. (CS-1; SS-4, SS-5; TS-2 to TS-4; target source limitation; [Reasonable Inference]) |
| **Final Synthesizability Score** | **60 / 100** based on Route 2 |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **950–1030 °C** for Li₃N flux first pass; Ga-flux backup may require ~1600 °C. (CS-1) |
| Preferred atmosphere | Ar glovebox loading; sealed Ta/Nb ampoule in silica; N₂ or inert containment. (CS-1) |
| Pressure | Ambient / sealed-ampoule autogenous pressure. (CS-1) |
| Estimated duration | ~60 h hold plus slow cooling; longer 2–5 day screening may be needed if ordering is incomplete. (CS-1, CS-5; [Reasonable Inference]) |
| Critical control parameters | Excess Li₃N nitrogen activity, Eu/Re stoichiometry, ampoule compatibility, slow cooling, flux removal under inert conditions, and avoidance of Eu oxidation. (CS-1; [Reasonable Inference]) |
| Basis | Primary basis is rare-earth/tantalum nitride flux synthesis; solid-state and high-pressure analogues define backup strategies and risks. (CS-1; CS-2, CS-4, CS-5; SS-4, SS-5; TS-2 to TS-4) |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability.**  
Analogue thermodynamics are favorable because CS, SS, and TS entries are largely at or near the convex hull, including La₃Ta₂N₆, U₂MnN₃, U₂CrN₃, SrHfN₂, SrN₂, CaN₂, BaN₂, and TaN. (CS-1 to CS-5; SS-1 to SS-5; TS-1 to TS-5) The target’s predicted formation energy is negative, but the target has no reported candidate-specific E_hull or phonon validation, so it cannot be treated as a confirmed ground-state compound. (target source limitation) The score is therefore favorable but capped at 72. (CS; SS; TS; [Reasonable Inference])

**F2/F3 — Route 1.**  
Solid-state synthesis is directly supported by U₂MnN₃/U₂CrN₃ under 1 atm N₂ at 1200–1600 °C and SrHfN₂ from binary nitrides at 1000 °C for 5 days. (CS-2, CS-4, CS-5; SS-1, SS-2; TS-1) Its severity is high because T >1000 °C and often >1400 °C apply, and kinetics are poor because Re is refractory and the target requires complex cation/N ordering. (CS-2, CS-4; SS-1, SS-2; TS-1; [Reasonable Inference]) The route is plausible but not preferred because diffusion and phase purity are likely limiting. (CS-5; [Reasonable Inference])

**F2/F3 — Route 2.**  
Flux synthesis is the best-supported chemical route because CS-1 directly demonstrates rare-earth/refractory-transition-metal nitride formation using Ga or Li₃N flux. (CS-1) Li₃N flux lowers the effective diffusion barrier and supplies nitrogen, giving better kinetics than direct solid-state sintering, but SS and TS provide insufficient flux-specific evidence and are neutral 50 for this route. (CS-1; insufficient evidence from SS/TS) The score remains moderate rather than high because Eu-Re-N composition, Re incorporation, and target N–N motif are not directly demonstrated. (CS-1; SS-4, SS-5; TS-2 to TS-4; [Reasonable Inference])

**F2/F3 — Route 3.**  
High-pressure azide/nitrogen-rich synthesis is strongly supported for alkaline-earth diazenides with short N–N bonds at 3–12 GPa and 450–800 °C. (SS-4, SS-5; TS-2 to TS-4) It is chemically relevant to the target N–N bond but not directly validated for Eu-Re ternary ordering, and CS provides insufficient high-pressure evidence and is neutral 50. (SS-4, SS-5; TS-2 to TS-4; insufficient evidence from CS) The high-pressure and azide hazards reduce F2, while high nitrogen activity partially improves F3. (SS-4, SS-5; TS-2 to TS-4)

**F2/F3 — Route 4.**  
CVD/thin-film screening is supported only by binary Nb₄N₅ CVD using NbCl₅/NH₃/H₂, so the source signal for Eu-Re-N vapor deposition is weak. (SS-3; insufficient evidence from CS/TS) Condition severity is moderate because high pressure is avoided, but F3 is low because Eu/Re/N composition control and crystallization of a complex P1 phase are not demonstrated. (SS-3; [Reasonable Inference]) This route is best viewed as exploratory metastable screening, not the main bulk synthesis route. (SS-3; [Reasonable Inference])

**F4 — Amorphization Tendency.**  
The target has one clear amorphization trigger from large Eu/Re cation-size mismatch. [Reasonable Inference] The target does not trigger the >40 atom-count check and does not show vertex+edge+face-sharing coexistence in the provided structure, although SS/TS analogues show complex connectivity in related nitrides. (SS-1, SS-2; TS-1; target structure) The resulting F4 = 78 indicates low–medium amorphization risk, with uncertainty because CS/SS/TS do not directly report target-specific radii or glass-forming behavior. (insufficient direct C1/C2 evidence from CS/SS/TS; [Reasonable Inference])

---

### SECTION 6 — Synthesizability Interpretation

Eu₃Re₃N₇ should be treated as **possibly metastable or near-ground-state, not confirmed ground-state**, because the target has negative predicted formation energy but no candidate-specific convex-hull or phonon validation. (target source limitation) The analogue support is meaningful: CS supports rare-earth/refractory-transition-metal nitride flux and solid-state routes, SS supports related nitride frameworks and N–N-bearing diazenides, and TS supports that nearby nitride chemistries can be thermodynamically viable. (CS-1 to CS-5; SS-1 to SS-5; TS-1 to TS-5) The most critical enabling factor is high nitrogen activity with enhanced mass transport, best supplied by Li₃N flux in the recommended route. (CS-1) The most critical limiting factor is simultaneous control of Eu/Re stoichiometry, Re incorporation, and the short N–N motif, because no single analogue demonstrates all three together. (CS; SS; TS; [Reasonable Inference]) Overall, the material is **moderately synthesizable but experimentally nontrivial**, with a best-score estimate of **60/100**. (CS; SS; TS; [Reasonable Inference])

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|:--|:--:|:--|
| 1 | All | No target-specific convex-hull or phonon validation, so thermodynamic stability is uncertain. | Med | Prioritize small-scale screening and confirm by PXRD/EDS; analogue low-hull data supports trying synthesis but not assuming stability. (CS; SS; TS; target source limitation) |
| 2 | All | Competing binary nitrides or residual Re metal may form because Re is refractory and Eu/Re/N ordering is complex. | High | Use fine Re powder or ReNₓ, repeated grinding, or flux to improve mass transport. (CS-2, CS-4; SS-1, SS-2; TS-1; [Reasonable Inference]) |
| 3 | Route 2 | Flux inclusion or Li/Ga side phases may contaminate products. | Med | Use excess flux, slow cooling, inert flux removal, and compare Li₃N versus Ga flux windows. (CS-1; [Reasonable Inference]) |
| 4 | Route 2 | Nitrogen stoichiometry may drift during sealed flux growth. | High | Use Li₃N as both flux and nitrogen source and screen small excess-N conditions. (CS-1; [Reasonable Inference]) |
| 5 | Route 3 | Azides and high-pressure nitrogen sources are hazardous and equipment-intensive. | High | Follow controlled decomposition in multianvil/DAC capsules with glovebox handling, as in diazenide syntheses. (SS-4, SS-5; TS-2 to TS-4) |
| 6 | Route 3 | Ternary cation ordering may be incomplete during short high-pressure holds. | Med–High | Extend hold time cautiously, use pre-reacted EuN/ReNₓ mixtures, and quench from pressure to preserve N–N units. (SS-4, SS-5; TS-2 to TS-4; [Reasonable Inference]) |
| 7 | Route 4 | Eu/Re/N composition control in vapor deposition is likely narrow. | High | Calibrate Eu and Re fluxes independently, use N₂/NH₃ plasma control, and screen post-anneal temperatures. (SS-3; [Reasonable Inference]) |
| 8 | All | Air/moisture sensitivity of Eu nitrides, Li₃N, and azide-type precursors can degrade samples. | Med–High | Use Ar glovebox loading, sealed ampoules/capsules, and inert transfer for characterization. (CS-1, CS-5; SS-4, SS-5; TS-2 to TS-4) |