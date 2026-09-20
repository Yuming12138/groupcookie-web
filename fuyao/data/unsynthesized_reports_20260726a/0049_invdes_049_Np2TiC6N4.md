> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.578 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

Notation: **[CS#] / [SS#] / [TS#]** refer to the numbered chemical, structural, and thermodynamic references in the prompt; **[Target]** refers to the provided target description; **[Reasonable Inference]** marks extrapolation beyond the references.

---

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Arc-Melting + High-Temperature Reactive Annealing

| Field | Details |
|:--|:--|
| Reference basis | Actinide / rare-earth transition-metal carbides are repeatedly synthesized by arc melting plus annealing: UFeC₂ / UNiC₂ analogues use elemental actinide + transition metal + graphite under Ar with long anneals, and UAl₃C₃ uses arc melting / annealing [SS3][SS4][TS1][CS5]. |
| Precursors | Np metal or preformed NpC/NpN, Ti metal or TiC/TiN, high-purity graphite, plus a nitrogen source such as TiN/NpN or sealed N₂/NH₃-derived nitridation chemistry [SS3][SS4][TS1][CS5][Reasonable Inference]. |
| Temperature program | Glovebox mixing → cold press → arc-melt / re-melt under Ar → anneal 900–1100 °C for 7–14 days → slow cool; this adapts 1400 °C arc melting and 700–1100 °C anneals used for UFeC₂/UNiC₂-type phases [SS3][SS4][TS1]. |
| Atmosphere | Purified Ar during melting; sealed evacuated Ta/Nb or silica-secondary containment during anneal to limit C/N loss [SS3][TS1][CS5][Reasonable Inference]. |
| Pressure | Ambient to ~0.6 atm Ar; no high-pressure evidence is present in the analogues [SS3][SS4][TS1]. |
| Additional conditions | Repeated melting for homogeneity, slight excess C/N source, oxygen exclusion, and post-annealing for phase purity [SS2][SS3][TS1][Reasonable Inference]. |
| Transferability to target | Strong for making actinide/transition-metal carbide frameworks, but weaker for preserving the target’s C/N-rich Np–N / Ti–C / C–N network [SS3][SS4][TS1][Target][Reasonable Inference]. |
| Estimated difficulty | **Challenging**, mainly due to actinide handling, high temperature, nitrogen retention, and phase competition [SS1][SS2][TS1][CS5]. |

#### Route 2: Halide–Cyanamide Solid-State Metathesis in LiCl/KCl Flux

| Field | Details |
|:--|:--|
| Reference basis | Rare-earth carbodiimides are synthesized from RECl₃ + Li₂(CN₂) in sealed ampoules with LiCl/KCl flux at 500–650 °C under Ar; this is the closest C/N-polyanion route in the CS set [CS3]. |
| Precursors | Anhydrous NpCl₃ or NpCl₄, TiCl₃ preferred over volatile TiCl₄, Li₂(CN₂), optional Li₂C₂/graphite to enrich carbon, and LiCl/KCl flux [CS3][Reasonable Inference]. |
| Temperature program | Dry grind under Ar → seal in ampoule → ramp 2–5 °C/min to 550–700 °C → hold 48 h to 3 weeks → slow cool 0.5–2 °C/h → remove flux under dry conditions [CS3][Reasonable Inference]. |
| Atmosphere | Ar glovebox handling plus evacuated / sealed ampoule; CS3 uses Ar handling and sealed silica ampoules [CS3]. |
| Pressure | Sealed ampoule at autogenous internal pressure, not high-pressure synthesis [CS3]. |
| Additional conditions | Strictly anhydrous salts, LiCl/KCl flux, slow cooling, stoichiometry screening around Np:Ti = 2:1 and C:N = 6:4 [CS3][Target][Reasonable Inference]. |
| Transferability to target | Best chemical transfer because Li₂(CN₂) directly supplies C/N units and flux lowers diffusion barriers; extra carbon chemistry is needed because the target C:N ratio is more carbon-rich than simple carbodiimide [CS3][Target][Reasonable Inference]. |
| Estimated difficulty | **Challenging**, but it is the most balanced route because it avoids >1000 °C melting while retaining C/N chemistry [CS3][SS3][TS1][Reasonable Inference]. |

#### Route 3: Hydrothermal / Solvothermal Cyanide-Ligand Assembly

| Field | Details |
|:--|:--|
| Reference basis | Chemically similar cyanide frameworks are made by hydrothermal synthesis, co-precipitation, or slow evaporation using metal cyanide precursors [CS1][CS2][CS4]. |
| Precursors | Np(IV/V) chloride or nitrate, Ti(III/IV) chloride or a preformed Ti–C/N complex, KCN/NaCN or safer preformed cyanamide/dicyanamide/C₃N₂-type ligand salts [CS1][CS2][CS4][Reasonable Inference]. |
| Temperature program | Hydrothermal variant: 120–180 °C for 1–3 days with slow cooling; precipitation / evaporation variant: room temperature to 85 °C followed by slow crystallization [CS1][CS2][CS4][Reasonable Inference]. |
| Atmosphere | CS2 demonstrates air-compatible co-precipitation, but Np/Ti redox and Ti hydrolysis likely require inert or controlled redox conditions [CS2][Reasonable Inference]. |
| Pressure | Hydrothermal autoclave / sealed ampoule pressure, not >5 GPa; CS1 uses sealed hydrothermal conditions [CS1]. |
| Additional conditions | pH/redox control, cyanide safety controls, slow cooling or slow evaporation, and suppression of Ti hydrolysis [CS1][CS2][CS4][Reasonable Inference]. |
| Transferability to target | Chemically plausible for M–C≡N–An-type connectivity, but weakly supported for the target’s low-symmetry Np–Ti carbonitride network [CS1][CS2][CS4][Target][Reasonable Inference]. |
| Estimated difficulty | **Challenging**, because the mild CS cyanide routes do not directly solve Np redox control, Ti hydrolysis, or C–C/C–N network formation [CS1][CS2][CS4][Target][Reasonable Inference]. |

#### Route 4: Reactive Thin-Film Co-Deposition + Anneal

| Field | Details |
|:--|:--|
| Reference basis | Insufficient evidence from CS/SS/TS for thin-film deposition; source signal is neutral 50, and this route is included only as a metastability-screening extrapolation [Reasonable Inference]. |
| Precursors | Np metal target, Ti or TiC target, graphite target, reactive N₂ or NH₃ plasma; no CS/SS/TS source directly validates these for the target [Reasonable Inference]. |
| Temperature program | Co-sputter or PLD at 400–700 °C → post-anneal 600–900 °C under N₂/Ar → cap/quench if needed [Reasonable Inference]. |
| Atmosphere | High vacuum with Ar/N₂ or Ar/NH₃ plasma; insufficient evidence from CS/SS/TS for this environment [Reasonable Inference]. |
| Pressure | Low-pressure deposition chamber; not high-pressure synthesis [Reasonable Inference]. |
| Additional conditions | Combinatorial stoichiometry calibration, capping layer to suppress N/C loss, rapid thermal annealing to search metastable windows [Reasonable Inference]. |
| Transferability to target | Useful only if bulk synthesis fails and metastable stabilization is needed; CS/SS/TS provide no direct thin-film analogue [Reasonable Inference]. |
| Estimated difficulty | **Challenging**, because Np sputtering, multianion composition control, and crystallization of P1 order are all nontrivial [Reasonable Inference]. |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Arc-Melting + High-Temperature Reactive Annealing

| Rank | Precursor | Role | Justification | Risk |
|:--:|--|--|--|--|
| 1 | Np metal, NpC, or NpN | Actinide source | Actinide carbide analogues use Am/U metals with graphite, and Np substitution is an actinide extrapolation [SS1][SS3][TS1][Reasonable Inference]. | **Toxic/radioactive; air-sensitive handling likely** [SS1][CS5][Reasonable Inference]. |
| 2 | Ti metal, TiC, or TiN | Ti source | Transition-metal carbides use elemental Fe/Ni/Co with actinide or rare-earth metals; Ti adaptation is inferred [SS3][SS4][TS1][Reasonable Inference]. | Ti powder can oxidize; TiN/TiC are refractory [Reasonable Inference]. |
| 3 | Graphite, 99.99% | Carbon source | Graphite is used in actinide / rare-earth carbide arc-melting analogues [SS1][SS3][TS1][CS5]. | Low volatility; slow diffusion if not well mixed [SS2][Reasonable Inference]. |
| 4 | TiN/NpN or controlled N₂/NH₃ nitridation | Nitrogen source | Nitrogen source is needed because SS/TS analogues are mostly carbides, while the target contains N sites [Target][SS3][TS1][Reasonable Inference]. | **Nitrogen loss / competing nitrides likely** [Reasonable Inference]. |

#### Route 2: Halide–Cyanamide Solid-State Metathesis in LiCl/KCl Flux

| Rank | Precursor | Role | Justification | Risk |
|:--:|--|--|--|--|
| 1 | Anhydrous NpCl₃ or NpCl₄ | Np source | CS3 uses RECl₃ for carbodiimide metathesis; Np chloride is the actinide analogue [CS3][Reasonable Inference]. | **Radioactive; air/moisture sensitive; requires prior preparation/purification** [CS3][SS1][Reasonable Inference]. |
| 2 | TiCl₃ preferred; TiCl₄ only if sealed | Ti source | Halide metathesis requires a reactive Ti halide; TiCl₃ avoids the volatility penalty of TiCl₄ [CS3][Reasonable Inference]. | **Air-sensitive; TiCl₄ is volatile/corrosive if used** [Reasonable Inference]. |
| 3 | Li₂(CN₂) | C/N source | Directly used in rare-earth carbodiimide solid-state metathesis [CS3]. | Requires dry handling; may require prior synthesis [CS3]. |
| 4 | Li₂C₂, graphite, or carbon-rich C/N salt | Extra carbon source | Target C:N = 6:4 is more carbon-rich than simple CN₂ chemistry, so extra carbon is needed [Target][CS3][Reasonable Inference]. | Li₂C₂ is moisture-sensitive; graphite is kinetically sluggish [Reasonable Inference]. |
| 5 | LiCl/KCl flux | Flux / diffusion medium | CS3 uses KCl/LiCl flux for crystalline carbodiimides [CS3]. | Flux removal and actinide containment require dry protocols [CS3][Reasonable Inference]. |

#### Route 3: Hydrothermal / Solvothermal Cyanide-Ligand Assembly

| Rank | Precursor | Role | Justification | Risk |
|:--:|--|--|--|--|
| 1 | Np chloride or nitrate | Np source | CS1/CS2 use soluble metal salts in cyanide framework synthesis; Np salt use is inferred [CS1][CS2][Reasonable Inference]. | **Radioactive; redox-sensitive; hydrolysis risk** [Reasonable Inference]. |
| 2 | TiCl₃, TiCl₄, or Ti–C/N complex | Ti source | CS cyanide analogues need metal–cyanide connectivity, but no CS/SS/TS Ti cyanide analogue is provided, so this is inferred [CS1][CS2][CS4][Reasonable Inference]. | **Hydrolysis and oxidation risk; TiCl₄ volatile/corrosive** [Reasonable Inference]. |
| 3 | KCN/NaCN, KAu(CN)₂-type cyanide salt, or dicyanamide/cyanamide salt | C/N ligand source | CS1/CS2/CS4 all use cyanide-bearing precursors for M–C–N frameworks [CS1][CS2][CS4]. | **Highly toxic cyanide; HCN risk under acid** [CS2][Reasonable Inference]. |
| 4 | Acetic acid / buffer / redox control agent | pH/redox control | CS2 uses acidic pH control for Pb₂Fe(CN)₆ precipitation; Np/Ti would likely need tighter control [CS2][Reasonable Inference]. | pH changes can release HCN from cyanide [CS2][Reasonable Inference]. |

#### Route 4: Reactive Thin-Film Co-Deposition + Anneal

| Rank | Precursor | Role | Justification | Risk |
|:--:|--|--|--|--|
| 1 | Np metal sputter/PLD target | Np source | No CS/SS/TS thin-film support; included only as a metastability route [Reasonable Inference]. | **Radioactive target; specialized containment** [Reasonable Inference]. |
| 2 | Ti or TiC target | Ti source | Standard thin-film source choice inferred for Ti–C phases; no CS/SS/TS direct signal [Reasonable Inference]. | Target poisoning / oxidation possible [Reasonable Inference]. |
| 3 | Graphite target or hydrocarbon plasma | Carbon source | Carbon delivery by target or gas is a deposition extrapolation, not CS/SS/TS-supported [Reasonable Inference]. | Composition drift possible [Reasonable Inference]. |
| 4 | N₂ or NH₃ plasma | Nitrogen source | Reactive nitrogen is required for target N content; no CS/SS/TS thin-film analogue is supplied [Target][Reasonable Inference]. | Reactive gas incorporation can be kinetically limited [Reasonable Inference]. |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability — Weight 30%

| Evidence item | Interpretation |
|:--|:--|
| Target E_hull | Not reported; the placeholder 0.000000 eV/atom is not used as an E_hull value [Target]. |
| Target formation energy | Predicted formation energy is negative at −0.578 eV/atom, but no target-specific convex hull or phonon validation is reported [Target]. |
| CS analogue signal | Chemical analogues span low-to-moderate E_hull values, including Lu₂(CN₂)₃ at 0.045 eV/atom and KNiAu₃(CN)₆ / Pb₂Fe(CN)₆ near 0.13–0.23 eV/atom [CS1][CS2][CS3]. |
| SS analogue signal | Structural analogues include stable/near-stable actinide carbides but also one high E_hull analogue at ~0.29 eV/atom, so SS support is mixed [SS1][SS2][SS3][SS4]. |
| TS analogue signal | Thermodynamic analogues TS1–TS5 are all reported at E_hull = 0.0 eV/atom, giving the strongest stability support [TS1][TS2][TS3][TS4][TS5]. |

**F1 Score: 72 / 100**  
This is an analogue-supported score, not a direct hull score, because candidate-specific E_hull is absent [Target][TS1][TS2][TS3][TS4][TS5].

---

#### F2 + F3: Per-Route Scoring

##### Route 1: Arc-Melting + High-Temperature Reactive Annealing

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; arc / carbide analogues use ~1350–1500 °C conditions [SS2][SS3][CS5]. | −10 |
| T > 1400°C additional | Yes; UAl₃C₃ analogue reports ~1500 °C arc-melting conditions [CS5]. | −10 |
| High pressure >5 GPa | No; analogues use Ar / ~0.6 atm rather than high pressure [SS3][TS1]. | 0 |
| Reactive/controlled atmosphere | Yes; Ar and evacuated anneals are used in analogues [SS3][SS4][TS1]. | −15 |
| Volatile precursor requiring sealed system | Yes by target adaptation, because C/N retention likely needs sealed annealing [CS3][CS5][Reasonable Inference]. | −10 |
| Multi-step process ≥3 steps | Yes; mixing, pressing, arc melting, and annealing are typical [SS3][TS1][TS3]. | −10 |
| Toxic or air-sensitive precursors | Yes; actinide handling is hazardous in Am/U analogues and inferred for Np [SS1][CS5][Reasonable Inference]. | −10 |

**F2 Score for Route 1: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 30 | Dense metals/carbides/nitrides are low-activity compared with solution or metathesis precursors [SS2][SS3][TS1]. |
| Ion diffusion difficulty | 50 | High-temperature annealing is needed in actinide/transition-metal carbide analogues, but no >5 GPa barrier is indicated [SS3][SS4][TS1]. |
| Structural reconstruction | 35 | Building a low-symmetry C/N target from elemental/binary precursors is a major reconstruction, and analogues often require long anneals [TS3][TS4][TS5][Target][Reasonable Inference]. |

**F3 Score for Route 1: 38 / 100**

---

##### Route 2: Halide–Cyanamide Solid-State Metathesis in LiCl/KCl Flux

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; CS3 uses 500–650 °C conditions [CS3]. | 0 |
| T > 1400°C additional | No; CS3 is far below this threshold [CS3]. | 0 |
| High pressure >5 GPa | No; sealed ampoules are used, not high-pressure apparatus [CS3]. | 0 |
| Reactive/controlled atmosphere | Yes; Ar glovebox and sealed evacuated ampoules are used [CS3]. | −15 |
| Volatile precursor requiring sealed system | No if TiCl₃ is used; TiCl₄ would trigger this penalty [Reasonable Inference]. | 0 |
| Multi-step process ≥3 steps | Yes; precursor preparation, grinding, sealing, heating, flux removal [CS3]. | −10 |
| Toxic or air-sensitive precursors | Yes; anhydrous actinide/Ti halides are inferred to require dry radiochemical handling [CS3][SS1][Reasonable Inference]. | −10 |

**F2 Score for Route 2: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 80 | Halide + Li₂(CN₂) metathesis is substantially more reactive than dense elements, and CS3 directly validates this precursor class [CS3]. |
| Ion diffusion difficulty | 70 | LiCl/KCl flux and sub-700 °C metathesis lower diffusion barriers relative to arc-melt carbide routes [CS3][SS3][TS1]. |
| Structural reconstruction | 45 | The target C₃N₂-derived network is more carbon-rich and lower symmetry than simple RE carbodiimides, so reconstruction remains significant [CS3][Target][Reasonable Inference]. |

**F3 Score for Route 2: 65 / 100**

---

##### Route 3: Hydrothermal / Solvothermal Cyanide-Ligand Assembly

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; CS hydrothermal / precipitation routes are room temperature to ~165 °C [CS1][CS2][CS4]. | 0 |
| T > 1400°C additional | No; CS solution routes are far below this threshold [CS1][CS2][CS4]. | 0 |
| High pressure >5 GPa | No; hydrothermal autogenous pressure is not >5 GPa [CS1]. | 0 |
| Reactive/controlled atmosphere | Yes for target adaptation, because Np/Ti redox control is likely needed; CS2 air compatibility is insufficient evidence for Np/Ti [CS2][Reasonable Inference]. | −15 |
| Volatile precursor requiring sealed system | Yes; hydrothermal cyanide systems can require sealed vessels, and acid/cyanide systems carry HCN risk [CS1][CS2][Reasonable Inference]. | −10 |
| Multi-step process ≥3 steps | Yes; solution preparation, pH/redox control, crystallization, filtration/drying [CS1][CS2][CS4]. | −10 |
| Toxic or air-sensitive precursors | Yes; cyanide and Np chemistry are hazardous [CS1][CS2][CS4][Reasonable Inference]. | −10 |

**F2 Score for Route 3: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 85 | Soluble nitrates/chlorides/cyanides are high-activity precursors in CS solution routes [CS1][CS2][CS4]. |
| Ion diffusion difficulty | 90 | Solution/hydrothermal transport bypasses long solid-state diffusion, as implied by mild CS crystallization conditions [CS1][CS2][CS4]. |
| Structural reconstruction | 25 | CS solution analogues are simple cyanide frameworks, while the target has multiple C–C, C–N, Ti–C, and Np–N motifs in P1 symmetry [CS1][CS2][CS4][Target][Reasonable Inference]. |

**F3 Score for Route 3: 67 / 100**

---

##### Route 4: Reactive Thin-Film Co-Deposition + Anneal

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; proposed deposition / anneal is <1000 °C [Reasonable Inference]. | 0 |
| T > 1400°C additional | No; proposed route avoids melting [Reasonable Inference]. | 0 |
| High pressure >5 GPa | No; thin-film deposition is low-pressure rather than high-pressure [Reasonable Inference]. | 0 |
| Reactive/controlled atmosphere | Yes; vacuum plus Ar/N₂ or Ar/NH₃ plasma is controlled/reactive [Reasonable Inference]. | −15 |
| Volatile precursor requiring sealed system | No; target-based co-sputtering does not require volatile precursors [Reasonable Inference]. | 0 |
| Multi-step process ≥3 steps | Yes; deposition, annealing, and capping/characterization are required [Reasonable Inference]. | −10 |
| Toxic or air-sensitive precursors | Yes; Np target handling is hazardous [Reasonable Inference]. | −10 |

**F2 Score for Route 4: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor vapor availability | 50 | Insufficient evidence from CS/SS/TS for Np–Ti–C–N vapor deposition; neutral source signal 50 with reactive N penalty [Reasonable Inference]. |
| Crystallization pathway | 45 | No CS/SS/TS confirms direct crystallization of this P1 phase; post-annealing is likely [Reasonable Inference]. |
| Composition control | 40 | Multication and C/N stoichiometry control is likely narrow for Np₂TiC₆N₄ [Target][Reasonable Inference]. |

**F3 Score for Route 4: 45 / 100**

---

#### F4: Amorphization Tendency — Weight 20%

| Check | Criterion | Target result |
|:--:|:--|:--|
| C1 | Cation ionic radius difference >15% | Triggered: Np vs Ti cation size mismatch is expected to exceed 15%, while SS/TS analogues show such mismatch can still crystallize in actinide/rare-earth transition-metal carbides [SS3][SS4][TS1][TS4][Reasonable Inference]. |
| C2 | Unit cell atom count >40 | Not triggered based on the provided formula unit Np₂TiC₆N₄ = 13 atoms; no CS/SS/TS source overrides this target count [Target]. |
| C3 | Mixed polyhedral connectivity: vertex + edge + face sharing coexist | Not triggered for the target because the provided target description explicitly reports corner-sharing N-centered units but does not establish simultaneous vertex/edge/face sharing; SS/TS analogues have mixed sharing, but this is insufficient evidence from SS/TS for the target C3 trigger [Target][SS3][SS4][TS2]. |

**F4 Score: 78 / 100**  
**Triggers:** 1  
**Risk level:** Low–Medium

---

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 45 | 38 | 72 | 78 | 58 |
| 2 | 65 | 65 | 72 | 78 | 70 |
| 3 | 55 | 67 | 72 | 78 | 68 |
| 4 | 65 | 45 | 72 | 78 | 65 |

| | |
|:--|:--|
| **Best Route** | **Route 2 — Halide–Cyanamide Solid-State Metathesis in LiCl/KCl Flux** |
| **Expert adjustment ±5** | **−3**, because the target lacks candidate-specific E_hull / phonon validation and Np–Ti–C–N phase competition is not directly validated by CS/SS/TS [Target][SS2][TS1][CS3]. |
| **Final Synthesizability Score** | **67 / 100** based on Route 2 after adjustment. |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **550–700 °C** for metathesis / flux growth [CS3]. |
| Preferred atmosphere | Ar glovebox handling plus evacuated sealed ampoule [CS3]. |
| Pressure | Sealed ampoule autogenous pressure; not high-pressure synthesis [CS3]. |
| Estimated duration | 48 h to 3 weeks, with slow cooling for crystallinity [CS3]. |
| Critical control parameters | Dry Np/Ti halides, Li₂(CN₂) quality, LiCl/KCl flux ratio, extra carbon source, Np:Ti = 2:1 control, C:N = 6:4 targeting, oxygen exclusion, slow cooling [CS3][Target][Reasonable Inference]. |
| Basis | CS3 provides the strongest direct C/N-polyanion synthesis basis, while SS/TS show that actinide/transition-metal carbide frameworks usually need inert handling and annealing for phase purity [CS3][SS3][SS4][TS1][TS4]. |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target cannot be assigned a true hull-based score because E_hull is not reported and the 0.000000 eV/atom placeholder must not be used [Target]. The negative predicted formation energy supports chemical plausibility, but it is weaker than convex-hull or phonon validation [Target]. TS analogues provide the strongest stability support because TS1–TS5 are reported at E_hull = 0.0 eV/atom, while SS analogues include both near-stable and high-E_hull cases [TS1][TS2][TS3][TS4][TS5][SS1][SS2]. CS analogues support C/N framework feasibility but include several metastable entries, so F1 is discounted to 72 rather than placed in the 90–100 range [CS1][CS2][CS3].

**F2 — Condition Severity**  
Route 1 is severe because arc-melting / high-temperature annealing analogues use ~1350–1500 °C and inert atmospheres, with actinide handling penalties [SS2][SS3][TS1][CS5]. Route 2 is less severe because CS3 demonstrates 500–650 °C sealed-ampoule metathesis, though Ar handling and air-sensitive/radiological halides still impose penalties [CS3][Reasonable Inference]. Route 3 is thermally mild by CS evidence, but cyanide toxicity, sealed hydrothermal conditions, and inferred Np/Ti redox control reduce the score [CS1][CS2][CS4][Reasonable Inference]. Route 4 has insufficient evidence from CS/SS/TS for vapor deposition, so the source signal is neutral 50 and the condition score relies on thin-film extrapolation [Reasonable Inference].

**F3 — Reaction Kinetics**  
Route 1 has poor kinetics because dense elemental / carbide precursors and long solid-state diffusion dominate, even though arc melting can homogenize initially [SS2][SS3][TS1]. Route 2 has the best kinetic balance because halide–cyanamide metathesis and molten LiCl/KCl flux provide reactive precursors and shorter diffusion pathways [CS3]. Route 3 has high precursor mobility in solution, but structural reconstruction is weakly supported because CS cyanides are simpler than the target P1 Np–Ti carbonitride network [CS1][CS2][CS4][Target]. Route 4 has insufficient CS/SS/TS kinetic evidence, so vapor availability, crystallization, and composition control are scored conservatively from [Reasonable Inference].

**F4 — Amorphization Tendency**  
The main amorphization trigger is the expected Np/Ti cation size mismatch, but ordered actinide / rare-earth transition-metal carbides in SS/TS show that large cation mismatch does not preclude crystalline ordering [SS3][SS4][TS1][TS4][Reasonable Inference]. The atom count trigger is not met from the provided target formula unit, and the target description does not prove simultaneous vertex/edge/face sharing [Target]. CS provides insufficient direct amorphization evidence for an actinide/Ti carbonitride, so CS is neutral 50 for this factor, while SS/TS are more informative structurally [CS][SS3][SS4][TS2].

**Evidence conflict and weighting**  
CS1/CS2/CS4 suggest mild cyanide framework synthesis is possible, but SS/TS indicate actinide/transition-metal carbide-like phases usually require arc melting, inert atmospheres, and annealing [CS1][CS2][CS4][SS3][SS4][TS1]. I weight SS/TS more heavily for the actinide–transition-metal carbide framework and CS3 more heavily for the C/N-polyanion chemistry [CS3][SS3][TS1].

---

### SECTION 6 — Synthesizability Interpretation

The target should be treated as **possibly metastable or unvalidated near-stable**, not as a confirmed ground-state phase, because the target E_hull and phonons are absent despite a negative predicted formation energy [Target]. The strongest support comes from TS analogues that are all hull-stable and from SS analogues showing actinide/transition-metal carbides can be synthesized by inert high-temperature routes [TS1][TS2][TS3][TS4][TS5][SS3][SS4]. The most critical enabling factor is a reactive C/N precursor route, especially Li₂(CN₂)-based metathesis in LiCl/KCl flux, because it supplies C/N units at much lower temperature than arc melting [CS3]. The most critical limiting factor is phase control among Np carbides/nitrides, TiC/TiN, and C/N-rich competing phases, which is suggested by the phase-control issues in actinide carbide analogues [SS1][SS2][TS1]. Overall, Route 2 is plausible but experimentally demanding, with a final estimated synthesizability of **67 / 100** [CS3][SS3][TS1][Target].

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|--|:--:|--|
| 1 | All | Np handling, radiotoxicity, and likely air/moisture sensitivity | High | Use inert glovebox workflows and sealed containment, consistent with actinide / sensitive carbide analogue handling [SS1][CS5][SS3]. |
| 2 | Route 1 | Nitrogen loss and formation of binary Np/Ti carbides or nitrides during arc melting | High | Use preformed nitrides/carbides, sealed post-anneal, and compare against lower-temperature metathesis route [SS2][TS1][CS3][Reasonable Inference]. |
| 3 | Route 1 | Slow ordering kinetics after melting | Medium–High | Apply long anneals, as UFeC₂/UNiC₂ and rare-earth carbide analogues require annealing for improved phase purity [SS3][SS4][TS1][TS3]. |
| 4 | Route 2 | Correct C:N = 6:4 stoichiometry is not directly matched by simple Li₂(CN₂) | Medium–High | Add carbon-rich co-precursor such as graphite/Li₂C₂ and screen flux compositions [CS3][Target][Reasonable Inference]. |
| 5 | Route 2 | Flux/halide side phases and incomplete metathesis | Medium | Use dry halides, excess LiCl/KCl flux, slow cooling, and extended holds following CS3 practice [CS3]. |
| 6 | Route 3 | Ti hydrolysis, Np redox instability, and cyanide/HCN safety | High | Use pH/redox control, sealed hydrothermal protocols, and preformed cyanide ligands where possible [CS1][CS2][CS4][Reasonable Inference]. |
| 7 | Route 3 | Crystal growth may yield simple cyanide frameworks rather than the target P1 carbonitride | Medium–High | Slow cooling / slow evaporation helps crystallization in CS analogues, but target transfer remains weak [CS1][CS4][Target][Reasonable Inference]. |
| 8 | Route 4 | Thin-film crystallization of the exact low-symmetry Np₂TiC₆N₄ phase is unvalidated | Medium–High | Use combinatorial deposition and post-anneal screening; CS/SS/TS provide insufficient direct mitigation, neutral source signal 50 [Reasonable Inference]. |