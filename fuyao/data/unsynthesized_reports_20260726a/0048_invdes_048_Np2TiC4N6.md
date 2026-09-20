> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.604 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

Citation key: **CS1–CS5**, **SS1–SS5**, and **TS1–TS5** refer to the numbered references in your prompt. Target-only structural/stability details are cited as **Target**; extrapolations are labeled **[Reasonable Inference]**.

---

## SECTION 1 — Possible Synthesis Routes

### Route 1: Solid-State Metathesis / Molten-Salt Flux

| Field | Details |
|:--|:--|
| Reference basis | Rare-earth carbodiimides and carbide/nitride/cyanamide phases are made by halide + Li₂(CN₂) / Li₂CN₂ metathesis in sealed ampoules with KCl/LiCl flux, typically 500–800 °C under Ar or vacuum-sealed conditions. Evidence comes from Lu₂(CN₂)₃ and Sm₂(CN₂)₃ metathesis at 500–650 °C with flux, La₂CN₃Cl at 750–800 °C in sealed Ta ampoules, and RbLaSi(CN₂)₄ at 550 °C in sealed quartz ampoules. The target contains a C/N framework related to cyanamide/dicyanamide chemistry, but no CS/SS/TS source directly demonstrates Np–Ti incorporation, so that adaptation is **[Reasonable Inference]**. Insufficient route-specific solid-state-metathesis evidence from SS; neutral SS route-method score = 50. [CS2, CS5, TS4, TS5, Target] |
| Precursors | Anhydrous NpCl₃ or NpCl₄, TiCl₃ preferred over TiCl₄, Na[N(CN)₂] or Li[N(CN)₂] as C₂N₃ source, optional Li₂CN₂ / Li₃N nitrogen-buffer component, and KCl/LiCl or NaCl/KCl flux. Np and Ti choices are **[Reasonable Inference]** because no CS/SS/TS analogue contains Np–Ti together. [CS2, CS5, SS1, SS3, TS5] |
| Temperature program | Grind under Ar → ramp 50–100 °C/h to 600–750 °C → hold 48 h to 7 days → slow cool 1–5 °C/h or furnace cool. The 500–650 °C and multi-day range is supported by rare-earth carbodiimide analogues, while the 750–800 °C upper bound follows La₂CN₃Cl metathesis. [CS2, CS5, TS5] |
| Atmosphere | Dry Ar glovebox loading, evacuated/sealed quartz for lower-temperature tests, or sealed Ta/Nb ampoule if chloride/nitride chemistry is too reducing or reactive. [CS2, CS5, TS4, TS5] |
| Pressure | Sealed ampoule self-pressure; no high-pressure synthesis evidence appears in CS/SS/TS. [CS2, CS5, TS4, TS5] |
| Additional conditions | Use excess alkali halide flux to improve diffusion and remove NaCl/LiCl by washing only if the target survives moisture; flux use and washing are supported for rare-earth carbodiimide routes, while target water tolerance is unknown. [CS2, TS5, Target] |
| Transferability to target | This route best transfers the anhydrous C/N framework chemistry and avoids aqueous Ti hydrolysis, but incorporating radioactive Np and Ti into a low-symmetry P1 mixed-metal phase is an unproven **[Reasonable Inference]**. [CS2, CS5, TS5, Target] |
| Estimated difficulty | **Challenging**, because analogues require glovebox/ampoule handling and the target adds Np radiochemistry, mixed Np/Ti ordering, and no reported convex-hull or phonon validation. [CS2, CS5, TS5, Target] |

---

### Route 2: Dicyanamide Precipitation / Controlled Dehydration

| Field | Details |
|:--|:--|
| Reference basis | Mn(C₂N₃)₂ and Co(C₂N₃)₂ structural analogues form by room-temperature precipitation from metal salts and Na[N(CN)₂], and the target formula Np₂Ti(C₂N₃)₂ directly contains C₂N₃ units. Cyanide framework precipitations are also supported by Cs/Mn/Fe cyanides and Pb₂Fe(CN)₆ analogues. Insufficient thermodynamic-route evidence from TS for ambient precipitation; neutral TS route-method score = 50. [SS1, SS3, SS2, SS4, CS3, Target] |
| Precursors | Anhydrous NpCl₃ or NpCl₄, TiCl₃ or Ti alkoxide/chloride precursor, Na[N(CN)₂] or KN(CN)₂, dry MeCN/DMF or carefully controlled water/acid medium. Np/Ti precursor selection and nonaqueous substitution are **[Reasonable Inference]** because SS analogues use Mn/Co salts, not Np/Ti. [SS1, SS3, SS2, SS4] |
| Temperature program | Room-temperature mixing/slow evaporation for several days → isolate solid → vacuum dehydration at 80–150 °C → optional Ar anneal at 250–400 °C if crystallinity is poor. Room-temperature precipitation and dehydration are supported by SS1/SS3; the higher anneal is **[Reasonable Inference]** for Np/Ti ordering. [SS1, SS3] |
| Atmosphere | Dry Ar/N₂ preferred; oxygen-free handling is supported in Mn cyanide precipitation, and vacuum dehydration is supported for Mn(C₂N₃)₂. [SS1, SS2] |
| Pressure | Ambient pressure, with optional vacuum during dehydration. [SS1, SS3] |
| Additional conditions | Slow evaporation, controlled stoichiometry near Np:Ti:C₂N₃ = 2:1:2, and avoidance of strong acid with cyanide/dicyanamide ligands. Slow evaporation and filtration are supported by SS1/SS3; the target stoichiometry control is **[Reasonable Inference]**. [SS1, SS3, Target] |
| Transferability to target | This route has the closest ligand match because SS1/SS3 are M(C₂N₃)₂ dicyanamide frameworks, but heterometal Np₂Ti ordering and the target’s N₂ cluster are not demonstrated by SS/CS/TS and remain **[Reasonable Inference]** risks. [SS1, SS3, Target] |
| Estimated difficulty | **Moderate–Challenging**, because solution assembly is mild in SS analogues but Np/Ti hydrolysis, oxidation-state control, and crystallization of the P1 target are unproven. [SS1, SS3, SS2, Target] |

---

### Route 3: Hydrothermal / Solvothermal Cyanide Framework Assembly

| Field | Details |
|:--|:--|
| Reference basis | Hydrothermal KNiAu₃(CN)₆ is made at 125–165 °C in sealed vessels, and several cyanide frameworks form by aqueous precipitation or slow evaporation at mild conditions. Applying this to Np–Ti cyanide/nitride assembly is **[Reasonable Inference]** because CS/SS analogues do not include Np or Ti together. Insufficient high-temperature thermodynamic synthesis-path evidence from TS for hydrothermal assembly; neutral TS route-method score = 50. [CS1, CS3, CS4, SS2, SS4] |
| Precursors | NpCl₃/NpCl₄ or nitrate, TiCl₃ or preformed Ti cyanide complex, NaCN/KCN or Na[N(CN)₂], plus reducing/complexing agent as needed. Preformed Np/Ti cyanide use is **[Reasonable Inference]** from cyanometallate analogues. [CS1, CS3, CS4, SS4] |
| Temperature program | Charge sealed vessel → ramp to 150–220 °C → hold 12–72 h → slow cool 0.5–2 °C/h. CS1 supports 125–165 °C hydrothermal synthesis with slow cooling; the 220 °C upper bound is **[Reasonable Inference]** for harder Np/Ti crystallization. [CS1] |
| Atmosphere | Inert or oxygen-limited handling preferred because Mn cyanides use oxygen-free conditions and Np/Ti redox control is expected to matter. The Np/Ti redox statement is **[Reasonable Inference]**. [SS2] |
| Pressure | Autogenous autoclave pressure; no >5 GPa route evidence appears in CS/SS/TS. [CS1] |
| Additional conditions | pH and ligand stoichiometry control are critical; CS3 uses pH-controlled co-precipitation for Pb₂Fe(CN)₆, while CS1 uses sealed hydrothermal conditions. [CS3, CS1] |
| Transferability to target | This route can grow cyanide-framework crystals under mild temperature, but Ti hydrolysis and Np oxidation-state instability are serious **[Reasonable Inference]** issues not resolved by CS/SS/TS. [CS1, CS3, Target] |
| Estimated difficulty | **Challenging**, because CS1 reports impurity/phase-control issues even for non-actinide hydrothermal cyanides, and the target adds mixed actinide/early-transition-metal chemistry. [CS1, Target] |

---

### Route 4: High-Temperature Sealed-Ampoule Carbido-Nitridation / Cyanidation

| Field | Details |
|:--|:--|
| Reference basis | Sr₃Co(CN)₃ and Ba₃Rh(CN)₃ are made by high-temperature Ar sintering of nitrides/metals/NaCN in sealed or controlled environments, and EuC₂ is made from Eu metal + graphite at 1050 °C under He. Applying this to Np–Ti–C–N is **[Reasonable Inference]** because no TS analogue contains both Np and Ti. Insufficient solution-route support from CS/SS for this high-temperature route; neutral CS and SS route-method scores = 50. [TS1, TS2, TS3] |
| Precursors | NpN or Np metal, Ti powder/TiN/TiC, graphite, NaCN/LiCN, optional Li₃N or NaN₃ nitrogen source. Np/Ti precursor mapping is **[Reasonable Inference]** from TS nitrides/metals/NaCN routes. [TS1, TS2, TS3] |
| Temperature program | Grind/pelletize under Ar → seal in Nb/Ta ampoule → ramp to 800–1050 °C → hold 24–72 h → slow cool. TS1 supports ~1200 K, TS2 supports 1070 K for 24 h, and TS3 supports 1050 °C for carbide formation. [TS1, TS2, TS3] |
| Atmosphere | Ar glovebox loading and sealed Nb/Ta ampoule under Ar; TS1/TS2 use Ar and sealed ampoules. [TS1, TS2] |
| Pressure | Sealed ampoule self-pressure; no high-pressure evidence is reported in TS. [TS1, TS2] |
| Additional conditions | Pelletizing and reducing conditions are supported by TS1/TS2; excess cyanide or nitrogen source may compensate volatilization but is **[Reasonable Inference]**. [TS1, TS2] |
| Transferability to target | This route may overcome diffusion barriers and form refractory Np/Ti C/N phases, but it risks destroying molecular C₂N₃/N₂ motifs and forming binary carbides/nitrides instead. The decomposition risk is **[Reasonable Inference]** from high-temperature chemistry and the target’s molecular N₂/CN features. [TS1, TS2, TS3, Target] |
| Estimated difficulty | **Challenging**, because TS analogues require high temperature, sealed ampoules, air-sensitive precursors, and sometimes byproducts or persistent second phases. [TS1, TS2, TS3] |

---

## SECTION 2 — Recommended Precursors

### Route 1: Solid-State Metathesis / Molten-Salt Flux

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Anhydrous NpCl₃ or NpCl₄ | Np source | Metal chlorides are transferable from RECl₃ metathesis chemistry; Np substitution is **[Reasonable Inference]**. [CS2, CS5, TS5] | Radiotoxic and air-sensitive **[Reasonable Inference]** |
| 2 | TiCl₃, or TiCl₄ only if sealed cold-loading is possible | Ti source | Halide metathesis is supported for rare-earth systems; Ti precursor choice is **[Reasonable Inference]**. [CS2, CS5, TS5] | TiCl₄ volatile/moisture-sensitive **[Reasonable Inference]** |
| 3 | Na[N(CN)₂] or Li[N(CN)₂] | C₂N₃ ligand source | Dicyanamide gives M(C₂N₃)₂ frameworks in SS analogues. [SS1, SS3] | Toxic C/N ligand salt; may decompose on heating **[Reasonable Inference]** |
| 4 | Li₂CN₂ / Li₂(CN₂) | Auxiliary C/N source | Carbodiimide/cyanamide metathesis is established in CS2/CS5/TS5. [CS2, CS5, TS5] | Often requires prior synthesis and inert handling. [CS2, CS5, TS5] |
| 5 | KCl/LiCl or NaCl/KCl flux | Diffusion/crystal-growth medium | Flux improves rare-earth carbodiimide crystallization in sealed ampoules. [CS2, TS5] | Requires post-reaction removal; product water stability unknown. [TS5, Target] |

---

### Route 2: Dicyanamide Precipitation / Controlled Dehydration

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | NpCl₃/NpCl₄ or soluble Np nitrate | Np source | Soluble metal salts are used for dicyanamide/cyanide precipitation; Np choice is **[Reasonable Inference]**. [SS1, SS3, CS3] | Radiotoxic; redox-sensitive **[Reasonable Inference]** |
| 2 | TiCl₃, Ti alkoxide, or TiCl₄ in dry solvent | Ti source | Solution metal salts enable precipitation in SS analogues; Ti substitution is **[Reasonable Inference]**. [SS1, SS3] | Hydrolysis/volatile TiCl₄ risk **[Reasonable Inference]** |
| 3 | Na[N(CN)₂] | Primary C₂N₃ source | Directly used to form Mn(C₂N₃)₂ and Co(C₂N₃)₂ frameworks. [SS1, SS3] | Toxic; ligand decomposition possible **[Reasonable Inference]** |
| 4 | Dry MeCN/DMF or carefully controlled water | Solvent/assembly medium | Water is used in SS1/SS3, but dry solvent is **[Reasonable Inference]** for Ti/Np hydrolysis control. [SS1, SS3] | Solvent coordination may change phase **[Reasonable Inference]** |
| 5 | Mild reducing/oxidation buffer if needed | Np valence control | Np oxidation-state control is not addressed in CS/SS/TS and is therefore **[Reasonable Inference]**. Insufficient direct evidence from CS/SS/TS; neutral precursor-control score = 50. | May introduce impurities **[Reasonable Inference]** |

---

### Route 3: Hydrothermal / Solvothermal Cyanide Framework Assembly

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | NpCl₃/NpCl₄ or Np nitrate | Np source | Aqueous metal salts are used in precipitation analogues; Np use is **[Reasonable Inference]**. [CS3, SS4] | Radiotoxic/redox-sensitive **[Reasonable Inference]** |
| 2 | TiCl₃ or preformed Ti cyanide complex | Ti source | Cyanometallate assembly is supported by CS1/CS3/SS4; Ti cyanide complex use is **[Reasonable Inference]**. [CS1, CS3, SS4] | Hydrolysis and oxidation risk **[Reasonable Inference]** |
| 3 | NaCN/KCN or Na[N(CN)₂] | Cyanide/C₂N₃ source | Cyanide salts are used in CS/SS cyanide frameworks, and Na[N(CN)₂] is used in dicyanamides. [CS1, CS3, SS1, SS3] | Highly toxic; acid contact can be dangerous **[Reasonable Inference]** |
| 4 | Mineralizer / pH adjuster | Solubility and crystallization control | pH control is used for Pb₂Fe(CN)₆ precipitation, and sealed hydrothermal growth uses slow cooling. [CS3, CS1] | Wrong pH may hydrolyze Ti or change Np valence **[Reasonable Inference]** |
| 5 | Deoxygenated water or polar solvent | Reaction medium | Water is used in CS1/CS3/SS routes; deoxygenation is **[Reasonable Inference]** from oxygen-free Mn cyanide handling. [CS1, CS3, SS2] | Autoclave cyanide safety risk **[Reasonable Inference]** |

---

### Route 4: High-Temperature Sealed-Ampoule Carbido-Nitridation / Cyanidation

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | NpN or Np metal | Np source | Nitrides/metals are used in TS high-temperature cyanide/carbide analogues; Np use is **[Reasonable Inference]**. [TS1, TS2, TS3] | Radiotoxic and air-sensitive **[Reasonable Inference]** |
| 2 | Ti powder, TiN, or TiC | Ti source | Metal/carbon/nitrogen solid-state routes are supported by TS1–TS3; Ti precursor choice is **[Reasonable Inference]**. [TS1, TS2, TS3] | Refractory Ti slows diffusion **[Reasonable Inference]** |
| 3 | Graphite | Carbon source | Graphite is used directly in Ba₃Rh(CN)₃ and EuC₂ routes. [TS2, TS3] | Low reactivity at moderate T **[Reasonable Inference]** |
| 4 | NaCN or LiCN | CN source / mineralizer | NaCN is used in Sr₃Co(CN)₃ and Ba₃Rh(CN)₃ solid-state routes. [TS1, TS2] | Toxic and volatile/decomposition risk at high T **[Reasonable Inference]** |
| 5 | Li₃N or NaN₃ | N activity buffer | Extra nitrogen source is **[Reasonable Inference]** because the target contains N-rich C/N units and an N₂ cluster. [Target] | Air-sensitive/reactive **[Reasonable Inference]** |

---

## SECTION 3 — Synthesizability Score

### F1: Thermodynamic Stability

| E_hull (eV/atom) | Score |
|:--:|:--:|
| ≤ 0.05 | 90–100 |
| 0.05 – 0.20 | 65–85 |
| 0.20 – 0.50 | 35–60 |
| > 0.50 | 5–30 |

The target has **no reported convex-hull energy**, and the 0.000000 eV/atom value is explicitly a retrieval placeholder, so direct E_hull evidence is insufficient from CS, SS, and TS for the target itself; each direct-source hull signal is treated as neutral = 50. [Target]  
Indirect analogue evidence is favorable but mixed: TS analogues are all reported at E_hull = 0, CS analogues span 0.0–0.228 eV/atom, and SS analogues span 0.0147–0.3495 eV/atom. [TS1, TS2, TS3, TS4, TS5, CS1, CS2, CS3, CS4, CS5, SS1, SS2, SS3, SS4, SS5]

**F1 Score: 72 / 100**

---

### F2 + F3: Per-Route Scoring

#### Route 1: Solid-State Metathesis / Molten-Salt Flux

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; analogues are generally 500–800 °C. [CS2, CS5, TS4, TS5] | 0 |
| T > 1400°C additional | No evidence for >1400 °C route. [CS2, CS5, TS4, TS5] | 0 |
| High pressure >5 GPa | No; sealed ampoules only. [CS2, CS5, TS4, TS5] | 0 |
| Reactive/controlled atmosphere | Yes; Ar/vacuum sealed handling is used. [CS2, CS5, TS4, TS5] | −15 |
| Volatile precursor requiring sealed system | Yes; sealed ampoule and possible cyanide/halide volatility are relevant. [CS2, CS5, TS5] | −10 |
| Multi-step process ≥3 steps | Yes; glovebox grinding, sealing, heating, cooling, and possible washing. [CS2, CS5, TS5] | −10 |
| Toxic or air-sensitive precursors | Yes; Li₂CN₂/metal chlorides require controlled handling, and Np/cyanide risk is **[Reasonable Inference]**. [CS2, CS5, TS5] | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 78 | Halides plus Li₂CN₂/dicyanamide are reactive metathesis precursors; exact Np/Ti halide transfer is **[Reasonable Inference]**. [CS2, CS5, SS1, SS3, TS5] |
| Ion diffusion difficulty | 65 | Flux/ampoule analogues react well below refractory cation melting points, but Ti ordering remains diffusion-limited **[Reasonable Inference]**. [CS2, CS5, TS5] |
| Structural reconstruction | 52 | The target shares C/N framework motifs but requires heterometal Np/Ti ordering and low-symmetry P1 reconstruction, not directly shown in analogues. [SS1, SS3, Target] |

**F3 Score for Route 1: 65 / 100**

---

#### Route 2: Dicyanamide Precipitation / Controlled Dehydration

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; SS analogues form at room temperature with dehydration. [SS1, SS3] | 0 |
| T > 1400°C additional | No evidence for >1400 °C route. [SS1, SS3] | 0 |
| High pressure >5 GPa | No; ambient precipitation is used. [SS1, SS3] | 0 |
| Reactive/controlled atmosphere | Yes; vacuum dehydration and oxygen-free/inert handling are relevant. [SS1, SS2] | −15 |
| Volatile precursor requiring sealed system | No required sealed volatile precursor in the base route. [SS1, SS3] | 0 |
| Multi-step process ≥3 steps | Yes; dissolve/mix, precipitate/crystallize, isolate, dehydrate/anneal. [SS1, SS3] | −10 |
| Toxic or air-sensitive precursors | Yes; Np/Ti/cyanamide hazards are **[Reasonable Inference]** from target chemistry and cyanide/dicyanamide routes. [SS1, SS3, Target] | −10 |

**F2 Score for Route 2: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 90 | Soluble salts plus Na[N(CN)₂] precipitate M(C₂N₃)₂ analogues efficiently. [SS1, SS3] |
| Ion diffusion difficulty | 92 | Solution assembly avoids long-range solid-state diffusion and occurs at room temperature in SS analogues. [SS1, SS3] |
| Structural reconstruction | 46 | Ligand topology matches C₂N₃, but heterometal Np₂Ti ordering and the target N₂ cluster are not demonstrated by CS/SS/TS. [SS1, SS3, Target] |

**F3 Score for Route 2: 76 / 100**

---

#### Route 3: Hydrothermal / Solvothermal Cyanide Framework Assembly

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; CS1 hydrothermal route is 125–165 °C. [CS1] | 0 |
| T > 1400°C additional | No evidence for >1400 °C route. [CS1] | 0 |
| High pressure >5 GPa | No; autogenous hydrothermal pressure only. [CS1] | 0 |
| Reactive/controlled atmosphere | Yes for target adaptation; oxygen/redox control is **[Reasonable Inference]**, with oxygen-free cyanide handling precedent. [SS2] | −15 |
| Volatile precursor requiring sealed system | Yes; sealed cyanide hydrothermal chemistry is used. [CS1] | −10 |
| Multi-step process ≥3 steps | Yes; solution preparation, sealing, heating, slow cooling, isolation. [CS1] | −10 |
| Toxic or air-sensitive precursors | Yes; cyanide and Np/Ti handling risks are **[Reasonable Inference]**. [CS1, Target] | −10 |

**F2 Score for Route 3: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 82 | Cyanide/cyanometallate solution precursors assemble frameworks under mild conditions. [CS1, CS3, SS4] |
| Ion diffusion difficulty | 88 | Hydrothermal/solution routes reduce cation diffusion limitations relative to solid-state synthesis. [CS1, CS3] |
| Structural reconstruction | 28 | CS1-like cyanide frameworks differ strongly from the target’s mixed Np/Ti P1 C/N framework with N₂ cluster, and CS1 reports impurity/phase issues. [CS1, Target] |

**F3 Score for Route 3: 66 / 100**

---

#### Route 4: High-Temperature Sealed-Ampoule Carbido-Nitridation / Cyanidation

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes if following the EuC₂-like upper-temperature route at ~1050 °C. [TS3] | −10 |
| T > 1400°C additional | No; TS routes are ~1070–1200 K or 1050 °C. [TS1, TS2, TS3] | 0 |
| High pressure >5 GPa | No; sealed ampoules/bombs only. [TS1, TS2, TS3] | 0 |
| Reactive/controlled atmosphere | Yes; Ar/He and sealed ampoules are used. [TS1, TS2, TS3] | −15 |
| Volatile precursor requiring sealed system | Yes; NaCN-containing sealed high-temperature routes are used. [TS1, TS2] | −10 |
| Multi-step process ≥3 steps | Yes; grind, pelletize, seal, anneal, cool. [TS1, TS2] | −10 |
| Toxic or air-sensitive precursors | Yes; TS routes use air/moisture-sensitive nitrides/cyanides, and Np adds radiotoxicity **[Reasonable Inference]**. [TS1, TS2, Target] | −10 |

**F2 Score for Route 4: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 35 | Dense metals/nitrides/graphite are less reactive than soluble salts or metathesis halides. [TS1, TS2, TS3] |
| Ion diffusion difficulty | 55 | High temperature helps diffusion, but Ti-containing solids are refractory and ordering is difficult **[Reasonable Inference]**. [TS1, TS2, TS3] |
| Structural reconstruction | 36 | Formation from binaries/metals to a molecular C/N framework is a major reconstruction, and TS analogues report byproducts or persistent second phases. [TS2, TS3, Target] |

**F3 Score for Route 4: 42 / 100**

---

### F4: Amorphization Tendency

| Check | Criterion | Trigger? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | Np vs Ti coordination sizes are expected to differ substantially; this is **[Reasonable Inference]** from actinide vs Ti chemistry and the target’s distinct Np/Ti coordination environments. [Target] |
| C2 | Unit cell atom count >40 | No | The reported target formula contains 13 atoms per formula unit; no evidence in the target description indicates a >40-atom primitive cell. [Target] |
| C3 | Mixed vertex + edge + face sharing coexist | No | The target description reports corner-sharing NpCN₄ tetrahedra and CNp₃C₂ square pyramids, but does not report simultaneous vertex/edge/face-sharing coexistence. [Target] |

| Triggers | Score | Risk Level |
|:--:|:--:|:--:|
| 1 | 78 | Low–Medium |

**F4 Score: 78 / 100**

---

### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 65 | 72 | 78 | 67.2 |
| 2 | 65 | 76 | 72 | 78 | 72.5 |
| 3 | 55 | 66 | 72 | 78 | 67.5 |
| 4 | 45 | 42 | 72 | 78 | 59.0 |

|  |  |
|:--|:--|
| **Best Route** | Route 2, Dicyanamide Precipitation / Controlled Dehydration |
| **Expert adjustment (±5)** | −4, because no source validates Np₂Ti mixed-metal ordering, the target has no real E_hull/phonon validation, and no CS/SS/TS analogue contains the target’s N₂ cluster. [Target, SS1, SS3] |
| **Final Synthesizability Score** | **68 / 100** based on the best route |

---

## SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | 20–150 °C for precipitation/dehydration, optional 250–400 °C Ar anneal if crystallinity is poor. [SS1, SS3] |
| Preferred atmosphere | Dry Ar/N₂ for setup and vacuum for dehydration; oxygen-free handling is supported by Mn cyanide analogues. [SS1, SS2] |
| Pressure | Ambient pressure, with vacuum dehydration; no high-pressure evidence is required by SS analogues. [SS1, SS3] |
| Estimated duration | Several days for slow evaporation/crystallization plus overnight to 48 h dehydration/anneal. [SS1, SS3] |
| Critical control parameters | Np:Ti:C₂N₃ stoichiometry near 2:1:2, Ti hydrolysis suppression, Np oxidation-state control, slow evaporation, and gentle dehydration; stoichiometry and Np/Ti controls are **[Reasonable Inference]** from the target composition and SS precipitation behavior. [SS1, SS3, Target] |
| Basis | Closest structural/ligand basis is Mn(C₂N₃)₂ and Co(C₂N₃)₂ precipitation; supporting cyanide precipitation evidence comes from Cs/Mn/Fe and Pb/Fe cyanide frameworks. [SS1, SS3, SS2, SS4, CS3] |

---

## SECTION 5 — Scoring Rationale

### F1 — Thermodynamic Stability

The target has no valid reported E_hull, so the table cannot be applied directly to the target; direct hull evidence is insufficient from CS, SS, and TS and is treated as neutral = 50 for direct target stability. [Target]  
Analogue stability is encouraging because all TS top matches are on the hull, CS includes on-hull/near-hull carbodiimide/cyanide examples, and SS includes both low-hull and higher-hull dicyanamide/cyanide analogues. [TS1, TS2, TS3, TS4, TS5, CS2, CS5, SS2, SS4, SS5]  
The score is therefore moderate-positive rather than high because the target only has predicted negative formation energy and lacks candidate-specific convex-hull or phonon validation. [Target]

### F2 / F3 — Route 1

Route 1 receives a moderate-low F2 because the temperature is below 1000 °C but controlled atmosphere, sealed ampoules, multistep preparation, and toxic/air-sensitive precursors apply. [CS2, CS5, TS4, TS5]  
Its F3 is moderate because metathesis/flux routes give reactive C/N chemistry and help diffusion, but the target requires heterometal Np/Ti ordering not shown in the rare-earth analogues. [CS2, CS5, TS5, Target]  
Remaining uncertainty is high because SS gives ligand/structure relevance but no direct solid-state-metathesis route for Np₂Ti(C₂N₃)₂. [SS1, SS3, Target]

### F2 / F3 — Route 2

Route 2 has the best F2 because SS analogues form at room temperature and require only filtration/dehydration rather than high-temperature sealed synthesis. [SS1, SS3]  
Route 2 has the best F3 because Na[N(CN)₂] directly forms M(C₂N₃)₂ frameworks, and solution assembly minimizes diffusion barriers. [SS1, SS3]  
The main kinetic uncertainty is structural reconstruction from simple homometal M(C₂N₃)₂ analogues to heterometal Np₂Ti(C₂N₃)₂ with an N₂ cluster. [SS1, SS3, Target]

### F2 / F3 — Route 3

Route 3 has moderate severity because hydrothermal analogues use only 125–165 °C but require sealed cyanide-containing systems and slow cooling. [CS1]  
The kinetic score is moderate because solution transport is favorable, but CS1-like cyanide frameworks differ substantially from the target’s mixed Np/Ti P1 framework and CS1 reports impurity/phase-control complications. [CS1, Target]  
Insufficient TS evidence exists for hydrothermal synthesis of thermodynamically similar compounds, so TS is neutral = 50 for this route-method factor. [TS1, TS2, TS3, TS4, TS5]

### F2 / F3 — Route 4

Route 4 has the harshest F2 because TS analogues use high temperature, sealed ampoules, controlled Ar/He atmospheres, NaCN/nitrides, and multistep pellet/anneal workflows. [TS1, TS2, TS3]  
Its F3 is low because dense metals/nitrides/graphite have slower reaction kinetics, and reconstructing them into a molecular C/N framework is difficult. [TS1, TS2, TS3, Target]  
The main uncertainty is whether high temperature would form the target or instead decompose the C₂N₃/N₂ motifs into carbides, nitrides, or simpler cyanides; that risk is **[Reasonable Inference]** from the target’s molecular C/N description. [Target]

### F4 — Amorphization Tendency

The target triggers one amorphization check because Np and Ti are expected to have substantially different cation sizes and coordination preferences, and the target indeed reports distinct Np and Ti coordination environments. [Target]  
The atom-count trigger is not activated from the reported formula, and the connectivity trigger is not activated because the description reports corner-sharing but not simultaneous vertex/edge/face-sharing coexistence. [Target]  
The resulting low–medium amorphization risk is consistent with SS dicyanamide analogues forming crystalline phases under mild conditions, but the lower-symmetry Np/Ti target remains more complex. [SS1, SS3, Target]

---

## SECTION 6 — Synthesizability Interpretation

The target is best treated as a **plausibly metastable** phase rather than a confirmed ground-state compound because no valid E_hull or phonon stability is reported, even though the predicted formation energy is negative. [Target]  
The strongest support comes from SS dicyanamide analogues Mn(C₂N₃)₂ and Co(C₂N₃)₂, which directly match the C₂N₃ ligand chemistry and form by mild precipitation. [SS1, SS3]  
CS and TS analogues show that cyanide/carbodiimide C/N frameworks can be synthesized across solution, hydrothermal, metathesis, and high-temperature routes, but none directly contains Np₂Ti ordering. [CS1, CS2, CS3, TS1, TS2, TS5]  
The critical enabling factor is the availability of reactive C₂N₃/cyanamide precursors that assemble C/N frameworks without extreme temperature. [SS1, SS3, CS2, TS5]  
The critical limiting factor is simultaneous control of Np oxidation state, Ti hydrolysis/reactivity, heterometal ordering, and retention of the target N₂/CN framework. [Target, SS2]

---

## SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|:--|:--:|:--|
| 1 | All | No candidate-specific E_hull or phonon validation, so thermodynamic stability is uncertain. | High | Use low-temperature routes first to access metastable products, then verify phase purity by diffraction; analogue low-T precipitation is supported by SS1/SS3. [Target, SS1, SS3] |
| 2 | All | Np oxidation-state and radiochemical handling are not addressed by CS/SS/TS. | High | Use dry/inert handling analogous to glovebox and oxygen-free routes; Np-specific controls are **[Reasonable Inference]**. [SS2, CS2, TS5] |
| 3 | All | Ti hydrolysis or formation of TiO₂/TiN/TiC competing phases may block target formation. | High | Prefer anhydrous precipitation or sealed metathesis rather than uncontrolled aqueous synthesis; this is **[Reasonable Inference]** from Ti chemistry and supported by anhydrous ampoule analogues. [CS2, CS5, TS5] |
| 4 | Route 2 | Mixed Np₂Ti ordering may not emerge during mild precipitation. | Medium–High | Use slow evaporation followed by gentle vacuum dehydration/annealing, as SS1 obtains hydrated crystals then dehydrates them. [SS1] |
| 5 | Route 1 | Flux/metathesis may yield binary chlorides, carbodiimides, or unreacted salts instead of the P1 target. | Medium | Use KCl/LiCl flux, long holds, and optimized temperature similar to rare-earth carbodiimide metathesis routes. [CS2, TS5] |
| 6 | Route 3 | Hydrothermal cyanide chemistry may create impurity nanoparticles or competing cyanide frameworks. | Medium | Use slow cooling and precise stoichiometry; CS1 shows hydrothermal synthesis but also phase-control difficulty. [CS1] |
| 7 | Route 4 | Volatile CN/N species loss and decomposition of C₂N₃/N₂ motifs at high temperature. | High | Seal in Nb/Ta ampoules and use excess cyanide/nitrogen activity; sealed NaCN routes are supported by TS1/TS2, while excess control is **[Reasonable Inference]**. [TS1, TS2, Target] |
| 8 | All | Crystal growth may be difficult because the target is low-symmetry P1 with multiple inequivalent Np/C/N sites. | Medium | Use slow evaporation for Route 2 or slow cooling/flux for Routes 1 and 3; these growth strategies are supported by SS1 and CS1. [SS1, CS1, Target] |