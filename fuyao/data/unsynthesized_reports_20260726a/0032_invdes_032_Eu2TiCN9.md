> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.744 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Sealed-Ampoule Solid-State Metathesis / Salt-Flux Carbodiimide–Nitride Route

| Field | Details |
|:--|:--|
| Reference basis | Rare-earth carbodiimides and mixed rare-earth carbodiimides are repeatedly made by solid-state metathesis using RE halides + Li₂(CN₂) in sealed ampoules at 450–650 °C under Ar or dry Ar (CS5, SS2, SS5, TS1–TS3). |
| Precursors | EuCl₃ or EuF₃, TiCl₃/TiF₃ or fine TiN, Li₂(CN₂), optional Li₃N or NaN₃/LiN₃ nitrogen donor, KCl/LiCl flux [Reasonable Inference from CS5, SS2, TS1–TS3]. |
| Temperature program | Ramp 25–50 °C/h → 500–650 °C → hold 2–7 days → furnace cool; longer holds up to 2–3 weeks may improve crystallinity, as rare-earth carbodiimide analogues sometimes require extended heating (CS5, SS2, TS1). |
| Atmosphere | Dry Ar handling in glovebox; evacuated or Ar-backfilled sealed silica/copper ampoule (CS5, SS2, SS5, TS1–TS3). |
| Pressure | Ambient sealed ampoule. |
| Additional conditions | Thorough grinding under Ar, optional KCl/LiCl flux, post-reaction washing to remove LiCl/KCl salts, avoid moisture/oxygen (CS5, SS2, SS5, TS1–TS3). |
| Transferability to target | Strongest transferability because the target contains a linear C–N–C/N–C–N carbodiimide-like C–N unit with C–N = 1.23–1.24 Å, comparable to rare-earth carbodiimides with C–N ≈ 1.20–1.27 Å (CS5, SS2, SS5, TS1–TS3). Incorporating Ti is an extrapolation because no CS/SS/TS entry gives Eu–Ti carbodiimide directly [Reasonable Inference]. |
| Estimated difficulty | Moderate. |

#### Route 2: High-Pressure Azide / Diazenide-Assisted Nitrogen-Rich Route

| Field | Details |
|:--|:--|
| Reference basis | High-pressure controlled decomposition of alkaline-earth azides produces diazenides/nitrides such as SrN₂ at 3–12 GPa and 450–800 °C (TS4). Structurally similar azide-rich K₂CdN₁₂ contains N–N units with N–N = 1.17–1.20 Å (SS1), and chemically similar BaN₆O also contains N–N units with N–N = 1.18–1.19 Å (CS1). |
| Precursors | EuN or Eu metal + Eu azide precursor, TiN or Ti metal/TiCl₃, Li₂(CN₂), NaN₃/LiN₃ as excess nitrogen source [Reasonable Inference from TS4, SS1, CS1]. |
| Temperature program | Cold press/load under inert atmosphere → 3–9 GPa → heat 450–800 °C for 15–60 min → quench → decompress slowly [Reasonable Inference from TS4]. |
| Atmosphere | Glovebox loading; sealed BN or metal capsule in high-pressure assembly (TS4). |
| Pressure | High pressure, likely 3–9 GPa; >5 GPa may be needed to retain N-rich N–N anions [Reasonable Inference from TS4]. |
| Additional conditions | Avoid mechanical shock and thermal runaway from azides; use small charges and controlled heating (TS4, SS1, CS1). |
| Transferability to target | Transferable to the N-rich part of the target because Eu₂TiCN₉ contains several short N–N contacts: 1.14, 1.19–1.21, and 1.34 Å in the target structure, resembling azide/diazenide-like motifs in SS1, CS1, and TS4. Transfer to the mixed Eu–Ti–C–N framework is uncertain because TS4 lacks C and Ti; insufficient direct Ti–carbodiimide evidence from TS4, so that component is treated as neutral/uncertain. |
| Estimated difficulty | Challenging. |

#### Route 3: Nitride + Melamine / Carbodiimide Solid-State Nitridation Route

| Field | Details |
|:--|:--|
| Reference basis | SrCN₂ is made from metal nitrides and excess melamine under Ar with staged heating, ball milling, and tungsten crucibles (TS5). Rare-earth carbodiimides are also made from RE halides and Li₂(CN₂) under sealed Ar/vacuum conditions (CS5, SS2, TS1). |
| Precursors | EuN or Eu metal pre-nitrided to EuN, TiN or fine Ti powder, Li₂(CN₂), melamine C₃N₃(NH₂)₃ or dicyandiamide as C/N source, optional LiCl/KCl flux [Reasonable Inference from TS5, CS5, SS2, TS1]. |
| Temperature program | Ball mill/grind → 220 °C prehold for 1–2 days → 740–850 °C for 2–5 days → optional anneal 900–980 °C if crystallinity is poor → slow cool (TS5). |
| Atmosphere | Ar, moisture/oxygen excluded; glovebox and Schlenk handling (TS5). |
| Pressure | Ambient pressure. |
| Additional conditions | Excess melamine or carbodiimide source, tungsten or Ta container, avoid oxygen/water contamination, repeat grinding if unreacted nitrides persist (TS5). |
| Transferability to target | Moderately transferable for forming metal carbodiimide/nitride frameworks, but less ideal than Route 1 because dense TiN can slow diffusion and high temperature may destroy N–N units [Reasonable Inference from TS5]. |
| Estimated difficulty | Moderate–Challenging. |

**Screened-out route:** Room-temperature aqueous azide crystallization is supported for Ba/Cd azide compounds only (CS1, SS1), but it is not promoted as a target route because Eu–Ti mixed carbodiimide/nitride formation and Ti hydrolysis control are not supported by CS/SS/TS; insufficient target-relevant evidence from CS1/SS1, so this pathway is neutral-to-negative for Eu₂TiCN₉ [Reasonable Inference].

---

### SECTION 2 — Recommended Precursors

#### Route 1: Sealed-Ampoule Solid-State Metathesis / Salt-Flux Carbodiimide–Nitride Route

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuCl₃ or EuF₃, anhydrous 99.9% | Eu source | RECl₃/REF₃ are direct rare-earth sources in carbodiimide metathesis analogues (CS5, SS2, SS5, TS1–TS3); Eu substitution is [Reasonable Inference]. | Air/moisture-sensitive; Eu valence control risk. |
| 2 | Li₂(CN₂), dry | Carbodiimide C/N source | Li₂(CN₂) is the core carbodiimide reagent in rare-earth carbodiimide and silicate-carbodiimide analogues (CS5, SS2, SS5, TS1–TS3). | Requires prior synthesis or careful dry handling. |
| 3 | TiCl₃ or TiF₃, anhydrous | Ti source | Ti halide metathesis with Li₂(CN₂) is not directly shown in CS/SS/TS; proposed to match the halide-salt metathesis chemistry [Reasonable Inference]. | Air-sensitive; Ti oxidation-state control. |
| 4 | Li₃N or NaN₃/LiN₃ | Extra nitrogen / N–N motif source | Target has more N than one CN₂ unit and contains N–N contacts; azide/diazenide analogues show N–N chemistry (CS1, SS1, TS4). | Azides are explosive/toxic; Li₃N is air-sensitive. |
| 5 | KCl/LiCl flux | Flux / diffusion aid | KCl/LiCl flux is used in rare-earth carbodiimide synthesis (CS5). | Hygroscopic salts; must be washed out. |

#### Route 2: High-Pressure Azide / Diazenide-Assisted Nitrogen-Rich Route

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN or Eu metal + nitriding pretreatment | Eu source | High-pressure diazenide synthesis uses metal azide/nitride chemistry for alkaline-earth nitrides (TS4); EuN substitution is [Reasonable Inference]. | Air-sensitive; Eu valence control. |
| 2 | TiN or Ti powder | Ti source | Ti source is not present in TS4; TiN/Ti is proposed to provide Ti–N framework chemistry [Reasonable Inference]. | TiN is refractory and diffusion-limited. |
| 3 | Li₂(CN₂) | C/N source | Carbodiimide analogues use Li₂(CN₂) to form RE–C–N frameworks (CS5, SS2, TS1). | Dry handling; possible decomposition at high T. |
| 4 | NaN₃ or LiN₃ | Nitrogen-rich / N–N source | Azide precursors generate N-rich diazenides under pressure in TS4, and azide-rich structures appear in CS1 and SS1. | Explosive, toxic, shock-sensitive. |
| 5 | BN capsule / inert spacer | Containment | High-pressure azide decomposition in TS4 uses specialized high-pressure assemblies and inert containers. | Specialized equipment; contamination risk. |

#### Route 3: Nitride + Melamine / Carbodiimide Solid-State Nitridation Route

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN or Eu metal pre-nitrided | Eu–N source | Metal nitrides are used with melamine to form alkaline-earth carbodiimides such as SrCN₂ (TS5); Eu analogue is [Reasonable Inference]. | Air-sensitive; Eu oxidation risk. |
| 2 | TiN or fine Ti powder | Ti–N source | Ti source is required by the target but absent from TS5; TiN/Ti selection is [Reasonable Inference]. | Refractory; slow reaction kinetics. |
| 3 | Melamine C₃N₃(NH₂)₃ | C/N donor | Melamine is used as the C/N source for MgCN₂, SrCN₂, and BaCN₂ synthesis (TS5). | Decomposes/sublimes; gas evolution. |
| 4 | Li₂(CN₂) | Supplemental carbodiimide source | Li₂(CN₂) is repeatedly used in rare-earth carbodiimide metathesis analogues (CS5, SS2, TS1). | Requires dry handling or prior synthesis. |
| 5 | LiCl/KCl flux | Optional diffusion aid | Flux improves rare-earth carbodiimide crystallization in CS5; use here is [Reasonable Inference]. | Must be removed after reaction. |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability (Weight: 30%)

| E_hull (eV/atom) | Score |
|:--:|:--:|
| ≤ 0.05 | 90–100 |
| 0.05 – 0.20 | 65–85 |
| 0.20 – 0.50 | 35–60 |
| > 0.50 | 5–30 |

**F1 Score: 70 / 100**

The target has no candidate-specific E_hull, and the reported 0.000000 eV/atom placeholder must not be used as hull stability evidence. The only direct stability signal is predicted formation energy = −0.744 eV/atom, which supports compound-forming thermodynamics but not convex-hull stability. TS gives the strongest analogue signal because TS1–TS5 are all reported at E_hull = 0.0 eV/atom; CS and SS are mixed, with stable analogues such as CS5/SS2/SS5 but also high-above-hull azide-like examples such as CS1 and SS1/SS3. Therefore F1 is moderate-positive rather than ground-state-level.

#### F2 + F3: Per-Route Scoring

##### Route 1: Sealed-Ampoule Solid-State Metathesis / Salt-Flux Carbodiimide–Nitride Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No | 0 |
| T > 1400°C additional | No | 0 |
| High pressure > 5 GPa | No | 0 |
| Reactive/controlled atmosphere | Yes; dry Ar / evacuated sealed ampoule (CS5, SS2, TS1–TS3) | −15 |
| Volatile precursor requiring sealed system | No direct evidence; sealed system mainly for atmosphere/salt metathesis, so neutral | 0 |
| Multi-step process ≥ 3 steps | Yes; glovebox mixing, sealing, heating, washing (CS5, SS2, TS1) | −10 |
| Toxic or air-sensitive precursors | Yes; RE halides/Li₂(CN₂), and optional azide [Reasonable Inference from CS5, SS2, TS1 plus CS1/SS1] | −10 |

**F2 Score for Route 1: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 80 | Halide + Li₂(CN₂) metathesis is reactive and repeatedly works at 450–650 °C for rare-earth carbodiimides (CS5, SS2, TS1). |
| Ion diffusion difficulty | 70 | Ti is refractory, but flux/metathesis analogues form at temperatures far below the highest cation melting point, supporting a diffusion boost (CS5, SS2, TS1–TS3) [Reasonable Inference]. |
| Structural reconstruction | 50 | The carbodiimide substructure transfers well, but adding Ti and extra N–N units requires partial-to-large reconstruction not directly shown by CS/SS/TS [Reasonable Inference]. |

**F3 Score for Route 1: 67 / 100**

##### Route 2: High-Pressure Azide / Diazenide-Assisted Nitrogen-Rich Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No | 0 |
| T > 1400°C additional | No | 0 |
| High pressure > 5 GPa | Yes; TS4 uses up to 12 GPa and target likely needs N-rich retention [Reasonable Inference from TS4] | −25 |
| Reactive/controlled atmosphere | No direct gas atmosphere in reaction capsule; glovebox loading only, so neutral | 0 |
| Volatile precursor requiring sealed system | No direct evidence; pressure capsule is required by route, not volatility, so neutral | 0 |
| Multi-step process ≥ 3 steps | Yes; precursor preparation, capsule loading, HP/HT reaction, recovery (TS4) | −10 |
| Toxic or air-sensitive precursors | Yes; azides are hazardous and nitrides are moisture-sensitive (TS4, CS1, SS1) | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 80 | Azides are highly reactive nitrogen sources, and TS4 uses controlled azide decomposition to form N-rich phases. |
| Ion diffusion difficulty | 60 | HP/HT promotes reaction, but Ti-bearing ordering remains diffusion-limited because no TS analogue contains Ti [Reasonable Inference]. |
| Structural reconstruction | 40 | N–N motifs are supported by TS4/SS1/CS1, but the full Eu–Ti–C–N framework is not directly supported by any HP analogue. |

**F3 Score for Route 2: 60 / 100**

##### Route 3: Nitride + Melamine / Carbodiimide Solid-State Nitridation Route

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; best estimate 740–980 °C from TS5 | 0 |
| T > 1400°C additional | No | 0 |
| High pressure > 5 GPa | No | 0 |
| Reactive/controlled atmosphere | Yes; Ar with moisture/oxygen exclusion (TS5) | −15 |
| Volatile precursor requiring sealed system | No direct sealed-volatile requirement from TS5, so neutral | 0 |
| Multi-step process ≥ 3 steps | Yes; precursor synthesis, ball milling, staged heating, possible anneal (TS5) | −10 |
| Toxic or air-sensitive precursors | Yes; metal nitrides and Li₂(CN₂) require dry handling [Reasonable Inference from TS5, CS5] | −10 |

**F2 Score for Route 3: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 60 | Melamine/nitride chemistry is established for SrCN₂, but TiN/EuN are less reactive than soluble halides [Reasonable Inference from TS5]. |
| Ion diffusion difficulty | 55 | TS5 requires multiday heating and ball milling, indicating moderate diffusion limits; TiN would likely worsen this [Reasonable Inference]. |
| Structural reconstruction | 35 | TS5 supports simple metal carbodiimides, but Eu₂TiCN₉ requires mixed Eu/Ti ordering plus N–N motifs, a larger reconstruction than TS5 demonstrates. |

**F3 Score for Route 3: 50 / 100**

#### F4: Amorphization Tendency (Weight: 20%)

| Check | Criterion | Trigger? | Evidence |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference > 15% | Yes | Eu and Ti have substantially different coordination sizes [Reasonable Inference]; target has separate Eu and Ti sites. |
| C2 | Unit cell atom count > 40 | No | Target formula has 13 atoms per Eu₂TiCN₉ formula unit; no evidence for Z > 3 is provided. |
| C3 | Mixed polyhedral connectivity: vertex + edge + face coexist | No / insufficient direct evidence | CS3/CS4/TS5 show mixed connectivity in analogues, but target description does not explicitly report vertex+edge+face coexist, so this is not triggered. |

**F4 Score: 78 / 100**

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 65 | 67 | 70 | 78 | 69.6 |
| 2 | 55 | 60 | 70 | 78 | 65.4 |
| 3 | 65 | 50 | 70 | 78 | 65.4 |

| | |
|:--|:--|
| **Best Route** | Route 1: Sealed-Ampoule Solid-State Metathesis / Salt-Flux Carbodiimide–Nitride Route |
| **Expert adjustment ±5** | −3, because no candidate-specific E_hull/phonon validation exists and no CS/SS/TS analogue contains the exact Eu–Ti–C–N chemistry. |
| **Final Synthesizability Score** | **67 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | 500–650 °C for Route 1; screen up to ~700 °C only if crystallinity is poor (CS5, SS2, TS1–TS3). |
| Preferred atmosphere | Dry Ar glovebox handling; evacuated or Ar-backfilled sealed silica/copper ampoule (CS5, SS2, TS1–TS3). |
| Pressure | Ambient sealed ampoule for best route; high pressure only as backup Route 2 (TS4). |
| Estimated duration | 2–7 days initial screen; extend to 2–3 weeks for single-crystal or phase-purity optimization, consistent with rare-earth carbodiimide analogues (CS5, SS2, TS1). |
| Critical control parameters | Anhydrous precursors, Eu oxidation state, Ti source reactivity, Li₂(CN₂)/extra N stoichiometry, sealed ampoule integrity, flux removal, avoidance of azide shock/heat if azide is used (CS5, SS2, SS5, TS1–TS4). |
| Basis | Route 1 is based mainly on CS5, SS2, SS5, and TS1–TS3; Route 2 backup is based on TS4 plus N–N analogues CS1/SS1; Route 3 backup is based on TS5 plus CS5/SS2/TS1. |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target’s direct E_hull is not reported, so the 0.000000 eV/atom retrieval placeholder is excluded from scoring. The negative predicted formation energy of −0.744 eV/atom supports exothermic compound formation, but not phase stability against competing Eu–Ti–C–N phases. TS evidence is favorable because TS1–TS5 are reported at E_hull = 0.0 eV/atom, while CS/SS evidence is mixed because CS1, SS1, and SS3 have significant positive hull energies. This justifies a moderate F1 score of 70 rather than a ground-state score.

**F2/F3 — Route 1**  
Route 1 benefits from multiple successful rare-earth carbodiimide metathesis analogues at 450–650 °C under Ar or sealed ampoules (CS5, SS2, SS5, TS1–TS3). Its condition severity is moderate because it needs inert handling, sealed reaction vessels, washing, and air-sensitive reagents, but no high pressure or >1000 °C step. Kinetics are the best of the three routes because halide/Li₂(CN₂) metathesis and flux chemistry reduce diffusion barriers, although Ti incorporation and N–N retention remain extrapolations [Reasonable Inference]. The main uncertainty is that no CS/SS/TS material combines Eu, Ti, carbodiimide carbon, and excess N–N motifs in one phase.

**F2/F3 — Route 2**  
Route 2 is supported by TS4 for high-pressure azide decomposition into diazenide/nitride phases and by CS1/SS1 for short N–N azide-like motifs. Its condition severity is challenging because >5 GPa pressure, hazardous azides, and specialized high-pressure equipment are required (TS4). Kinetically, azides are highly reactive, but assembling ordered Eu–Ti–C–N connectivity under short HP/HT conditions is uncertain [Reasonable Inference]. This route is valuable if N–N units cannot be retained at ambient pressure.

**F2/F3 — Route 3**  
Route 3 is supported by TS5, where metal nitrides react with excess melamine under Ar to form alkaline-earth carbodiimides, and by CS5/SS2/TS1 for Li₂(CN₂)-based carbodiimide formation. Its conditions are less severe than Route 2 but likely more kinetically limited than Route 1 because TiN/EuN diffusion is slow and TS5 requires staged multiday heating. Structural reconstruction is the weakest part because simple SrCN₂-type chemistry does not directly demonstrate the target’s mixed Eu–Ti framework or multiple N–N units. This route is therefore a backup bulk route rather than the primary recommendation.

**F4 — Amorphization Tendency**  
The target has a large Eu/Ti cation size mismatch, which triggers C1 and increases disorder/amorphization risk [Reasonable Inference]. The atom count criterion is not triggered because the provided formula contains 13 atoms per formula unit, and no evidence for a >40-atom cell is provided. Mixed polyhedral connectivity is seen in some analogues such as CS3/CS4/TS5, but the target description does not explicitly prove vertex+edge+face coexist, so C3 is treated as insufficient evidence and not triggered. The resulting F4 score of 78 indicates low–medium amorphization risk.

---

### SECTION 6 — Synthesizability Interpretation

Eu₂TiCN₉ is more likely a metastable or near-metastable N-rich phase than a confirmed ground-state phase because the target lacks candidate-specific E_hull and phonon validation, despite a negative predicted formation energy. The CS/SS/TS analogues strongly support the feasibility of rare-earth carbodiimide chemistry and N-rich N–N anion chemistry, but they do not directly demonstrate the exact Eu–Ti–C–N composition. The most critical enabling factor is salt-metathesis/flux chemistry, which can form rare-earth carbodiimide frameworks at moderate temperatures before N–N motifs fully decompose (CS5, SS2, TS1–TS3). The most critical limiting factor is simultaneous control of Eu valence, Ti–N coordination, and excess nitrogen stoichiometry, which is not directly solved by any CS/SS/TS analogue. Overall, the target is synthetically plausible but requires careful screening rather than a routine one-shot synthesis.

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy (from CS/SS/TS) |
|:--:|:--:|:--|:--:|:--|
| 1 | All | No direct Eu–Ti–C–N analogue is provided, so phase competition is uncertain. | High | Start from the best-supported rare-earth carbodiimide metathesis window and screen stoichiometry around Route 1 (CS5, SS2, TS1–TS3). |
| 2 | All | N–N motif retention may fail at high temperature. | High | Use sealed ampoules and moderate temperatures first; use high pressure only if ambient-pressure products lose N–N units (TS4, CS1, SS1). |
| 3 | Route 1 | Ti precursor reactivity may not match RE halide/Li₂(CN₂) metathesis. | Med | Use more reactive TiCl₃/TiF₃ before dense TiN; add LiCl/KCl flux to improve transport [Reasonable Inference from CS5/SS2/TS1]. |
| 4 | Route 1 | Eu oxidation-state control may shift products toward Eu²⁺ nitrides or Eu³⁺ carbodiimides. | Med | Use dry Ar, anhydrous halides, and sealed ampoules as in rare-earth carbodiimide syntheses (CS5, SS2, TS1). |
| 5 | Route 2 | Azides are explosive and shock-sensitive. | High | Use small charges, controlled heating, glovebox loading, and HP containment consistent with azide decomposition work (TS4, CS1, SS1). |
| 6 | Route 2 | High-pressure equipment limits scalability and throughput. | High | Reserve HP route for phase discovery or N–N retention tests, not bulk production (TS4). |
| 7 | Route 3 | Slow ordering kinetics from TiN/EuN can leave unreacted nitrides. | Med | Ball mill, use staged heating, extend dwell time, and consider flux addition (TS5, CS5). |
| 8 | Route 3 | Melamine decomposition can cause volatile/gas evolution and off-stoichiometry. | Med | Use excess melamine/carbonitride source and closed/inert containers as in TS5. |
| 9 | All | Crystal growth may be difficult in triclinic P1 with many inequivalent N sites. | Med | Extend low-temperature annealing or use flux-assisted slow cooling, following longer rare-earth carbodiimide crystallization practice (CS5, SS2, TS1). |