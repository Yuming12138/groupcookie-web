> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.911 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Reactive Solid-State Sintering / Nitridation

| Field | Details |
|:--|:--|
| Reference basis | Actinide transition-metal nitrides such as U₂MnN₃ and U₂CrN₃ were made from actinide mononitride + transition-metal powders under 1 atm N₂ at 1200–1600 °C, supporting a high-T nitride route for Np–Ti–N chemistry (SS1, SS3, TS1). U₂N₂Se analogues also use cold-pressed actinide binary mixtures under 1 atm N₂ at 1500–1700 °C (SS5, TS3). CS gives only generic high-T sintering support from Ta₂S₂C; insufficient evidence from CS for direct actinide nitride transfer, treated as neutral source signal = 50 (CS1, CS2). |
| Precursors | NpN powder, Ti powder or TiN/Ti mixture, high-purity graphite/C black, high-purity N₂; using NpN follows the actinide-mononitride precursor pattern (SS1, SS3, TS1), while graphite/C is inferred from carbide/carbonitride analogues [Reasonable Inference] (CS5, TS5). |
| Temperature program | Ramp 3–5 °C/min → 1450–1600 °C → 24–72 h → grind/repellet → anneal 1200–1400 °C for 1–3 days → slow cool under N₂; long holds are [Reasonable Inference] because structurally similar actinide nitrides require high-T equilibration and target P1 ordering is more complex (SS1, SS3, TS1). |
| Atmosphere | 1 atm high-purity N₂ or sealed/flowing N₂; N₂ atmosphere is directly supported by U₂MnN₃/U₂CrN₃ and U₂N₂Se syntheses (SS1, SS3, SS5, TS1, TS3). |
| Pressure | Ambient reaction pressure; optional pellet compaction only, since analogous nitride syntheses use pressed powders and 1 atm N₂ rather than GPa pressure (SS1, SS5, TS1, TS3). |
| Additional conditions | Fine grinding, pelletization, repeated regrinding, W/Ta crucible, excess N₂ chemical potential; repeated processing is [Reasonable Inference] from high-T actinide nitride equilibration and phase-control needs (SS1, SS5, TS1). |
| Transferability to target | Strongest direct route for actinide–transition-metal nitrides, but target also contains C₂ and N–N units, so carbon/nitrogen ordering is an added uncertainty [Reasonable Inference] (SS1, SS3, TS1). |
| Estimated difficulty | Challenging. |

#### Route 2: Arc Melting Followed by Nitriding Anneal

| Field | Details |
|:--|:--|
| Reference basis | PuWC₂ and UFeC₂ analogues were prepared by arc melting actinide/transition-metal/carbon mixtures under Ar, followed by annealing for phase improvement (CS5, TS5). SS2 gives a structurally similar Np carbide, but its synthesis snippet refers to americium + graphite, so it is useful only as actinide-carbide difficulty evidence, not as exact Np synthesis evidence (SS2). |
| Precursors | Np metal or preformed NpC/NpN, Ti metal, graphite, then N₂/NH₃ annealing gas; adding a post-arc nitridation step is [Reasonable Inference] because the arc-melt analogues are carbides rather than N-rich carbonitrides (CS5, TS5). |
| Temperature program | Arc melt/remelt under Ar/He, effective melt zone ~1400–2300 °C → rapid cooling → anneal 700–1100 °C for 1–10 days under N₂/NH₃ or sealed N source; high-T arc melting and long anneals are supported by PuWC₂ and UFeC₂ (CS5, TS5). |
| Atmosphere | Ar/He during melting; N₂ or NH₃ during post-anneal; Ar melting is supported by CS5/TS5, while nitriding anneal is [Reasonable Inference] from nitride target composition. |
| Pressure | Ambient to subambient Ar during arc melting, comparable to 0.6 atm Ar in actinide carbide analogues (CS5, TS5). |
| Additional conditions | Multiple remelts for homogeneity, rapid quench, then lower-T ordering/nitridation anneal; repeated remelting and annealing are supported for actinide carbides (CS5, TS5). |
| Transferability to target | Good for forming dense actinide–transition-metal–carbon frameworks, weak for retaining seven N atoms per formula; N loss and incomplete nitridation are major risks [Reasonable Inference] (CS5, TS5). |
| Estimated difficulty | Challenging. |

#### Route 3: Carbothermal Nitridation from Oxides

| Field | Details |
|:--|:--|
| Reference basis | PuN was synthesized from PuO₂ + graphite in high-purity N₂ at 1740 K, with compaction and optional H₂–N₂ treatment to manage residual carbon/oxygen (SS4, TS2). U/Th nitride/chalcogenide analogues also use high-T N₂ processing in W crucibles (SS5, TS3). Insufficient evidence from CS for carbothermal nitridation, so CS is neutral source signal = 50 for this route. |
| Precursors | NpO₂, TiO₂ or TiN/TiO₂ blend, graphite/C black, high-purity N₂; oxide + graphite + N₂ follows PuN carbothermal evidence, while Ti incorporation is [Reasonable Inference] (SS4, TS2). |
| Temperature program | Ramp ~1–5 K/s → 1450–1550 °C → 1–6 h → optional 1000–1300 °C anneal under N₂/H₂–N₂; 1740 K PuN carbothermal synthesis and high-purity N₂ are directly supported (SS4, TS2). |
| Atmosphere | High-purity flowing N₂; optional H₂–N₂ post-treatment for oxygen/carbon cleanup, as reported for PuN processing (SS4, TS2). |
| Pressure | Reaction near ambient; pellet compaction may be high mechanical pressure but not >5 GPa, consistent with PuN compaction evidence (SS4, TS2). |
| Additional conditions | Carbon excess must be tuned because target needs retained C₂ but oxide reduction needs sacrificial carbon; this balance is [Reasonable Inference] from PuN carbon/oxygen impurity control (SS4, TS2). |
| Transferability to target | Practical precursor route but chemically harsh: it must reduce oxides, incorporate N, retain exactly two C atoms, and avoid PuN/NpN, TiN, TiC, and oxide impurities [Reasonable Inference] (SS4, TS2). |
| Estimated difficulty | Challenging. |

#### Route 4: Halide/Cyanamide Solid-State Metathesis in LiCl/KCl Flux

| Field | Details |
|:--|:--|
| Reference basis | Rare-earth chloride carbodiimide nitrides were made by RECl₃ + Li₂CN₂ + Li₃N at ~750–800 °C in sealed Ta ampules under Ar, and rare-earth carbodiimides were made from RECl₃ + Li₂CN₂ in sealed silica ampules with LiCl/KCl flux at 500–650 °C (CS3, CS4). Insufficient evidence from SS and TS for metathesis transfer to Np–Ti–C–N; SS/TS are neutral source signals = 50 for this route. |
| Precursors | Anhydrous NpCl₃, TiCl₃ preferred over TiCl₄, Li₂CN₂, Li₃N, LiCl/KCl flux; TiCl₄ can balance halide metathesis but is volatile/corrosive [Reasonable Inference], while Li₂CN₂/Li₃N and chloride precursors are directly supported in CS metathesis analogues (CS3, CS4). |
| Temperature program | Glovebox grind → seal in Ta ampule under Ar → 650–800 °C for 2–7 days → slow cool → remove LiCl/KCl by dry or carefully controlled washing; 750–800 °C for 1–2 days and 500–650 °C/48 h to weeks are supported by CS3/CS4. |
| Atmosphere | Ar glovebox loading and sealed Ta ampule; sealed inert ampules are directly supported for chloride/cyanamide metathesis (CS3, CS4). |
| Pressure | Sealed near-ambient Ar, comparable to 600 mbar Ar ampules in CS3. |
| Additional conditions | LiCl/KCl flux, strict exclusion of O₂/H₂O, slow cooling for crystallinity, and cautious byproduct washing; flux and post-washing are supported by CS3/CS4. |
| Transferability to target | Best low-temperature route for N-rich C/N frameworks, but anion reconstruction from cyanamide-like C–N units to target C–C/N–N motifs is [Reasonable Inference] and remains unvalidated by SS/TS (CS3, CS4). |
| Estimated difficulty | Challenging. |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Reactive Solid-State Sintering / Nitridation

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | NpN, high purity | Np + nitride source | Actinide mononitrides are direct precursors for U₂MnN₃/U₂CrN₃-type syntheses (SS1, SS3, TS1). | Radioactive, air/moisture sensitive [Reasonable Inference]; actinide handling risk is supported generally by SS1/TS1. |
| 2 | Ti metal powder or TiN | Ti source | Metallic transition metals are used with actinide mononitrides in X₂YN₃ analogues; TiN option reduces nitridation burden [Reasonable Inference] (SS1, SS3, TS1). | Ti powder oxidation/pyrophoricity risk [Reasonable Inference]. |
| 3 | Graphite or carbon black | C source | Graphite is used in actinide carbide and carbothermal nitride analogues (CS5, SS4, TS2, TS5). | Residual carbon or TiC/NpC competing phases [Reasonable Inference]. |
| 4 | High-purity N₂ | N source / atmosphere | 1 atm N₂ is used for actinide nitride formation and high-T nitride reactions (SS1, SS5, TS1, TS3). | N stoichiometry sensitivity [Reasonable Inference]. |

#### Route 2: Arc Melting Followed by Nitriding Anneal

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Np metal or NpC/NpN | Np source | Actinide metals/actinide carbide chemistry are supported by PuWC₂, UFeC₂, and Np₂C₃-like analogues (CS5, SS2, TS5). | Radioactive, composition loss risk [Reasonable Inference]. |
| 2 | Ti metal | Ti source | Transition metals are used in arc-melted actinide carbide analogues (CS5, TS5). | Refractory diffusion and TiC/TiN competition [Reasonable Inference]. |
| 3 | Graphite | C source | Graphite is the carbon source in arc-melted actinide carbide analogues (CS5, TS5). | Carbon-rich impurity phases [Reasonable Inference]. |
| 4 | N₂ or NH₃ annealing gas | N source | Nitriding gas is needed because CS5/TS5 arc analogues are carbides, not N-rich carbonitrides [Reasonable Inference]. | N loss, incomplete nitridation, pressure/sealing hazard [Reasonable Inference]. |

#### Route 3: Carbothermal Nitridation from Oxides

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | NpO₂ | Np source | PuO₂ is the actinide oxide precursor in PuN carbothermal synthesis, so NpO₂ is the Np analogue [Reasonable Inference] (SS4, TS2). | Radioactive oxide; oxygen retention risk (SS4, TS2). |
| 2 | TiO₂ or TiN/TiO₂ | Ti source | TiO₂ adapts the oxide route; TiN can lower oxygen removal burden [Reasonable Inference] because SS4/TS2 only prove PuO₂ → PuN. | TiO₂ reduction may be slow; TiN/TiC impurities [Reasonable Inference]. |
| 3 | Graphite / carbon black | Reductant + retained C source | PuN carbothermal synthesis uses graphite, and target requires retained carbon (SS4, TS2). | Excess carbon and residual C are known concerns in PuN-type processing (SS4, TS2). |
| 4 | High-purity N₂ | N source | PuN synthesis uses high-purity N₂ stream, and actinide nitride analogues use N₂ atmospheres (SS4, SS5, TS2, TS3). | N chemical potential must be high enough to avoid nitride deficiency [Reasonable Inference]. |
| 5 | H₂–N₂ mixture, optional | Cleanup anneal | PuN evidence reports optional H₂–N₂ treatment for carbon removal (SS4, TS2). | H₂ handling and over-removal of target carbon [Reasonable Inference]. |

#### Route 4: Halide/Cyanamide Solid-State Metathesis in LiCl/KCl Flux

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Anhydrous NpCl₃ | Np halide source | RECl₃ precursors are used in chloride/cyanamide metathesis analogues; NpCl₃ is the actinide analogue [Reasonable Inference] (CS3, CS4). | Radioactive, air-sensitive, requires prior synthesis/drying [Reasonable Inference]. |
| 2 | TiCl₃ preferred; TiCl₄ optional | Ti halide source | Ti halide extends the RECl₃ metathesis concept to a mixed Np/Ti target [Reasonable Inference] (CS3, CS4). | TiCl₄ is volatile/corrosive; TiCl₃ is air-sensitive [Reasonable Inference]. |
| 3 | Li₂CN₂ | C/N donor | Li₂CN₂ is a direct reagent in rare-earth carbodiimide nitride and carbodiimide metathesis (CS3, CS4). | Requires dry handling and may require prior synthesis (CS3, CS4). |
| 4 | Li₃N | Additional N donor | Li₃N is used with Li₂CN₂ in RE chloride carbodiimide nitride synthesis (CS3). | Strongly air/moisture sensitive [Reasonable Inference]. |
| 5 | LiCl/KCl flux | Flux / byproduct medium | KCl/LiCl flux is used in rare-earth carbodiimide synthesis to aid crystallization (CS4). | Salt removal can oxidize/hydrolyze air-sensitive products [Reasonable Inference]. |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability (Weight: 30%)

| E_hull (eV/atom) | Score |
|:--:|:--:|
| Target E_hull not reported; predicted formation energy is −0.911 eV/atom but not a hull value | Analogue-informed 72 |

**F1 Score: 72 / 100**

The target cannot receive a 90–100 hull-based score because no candidate-specific convex-hull or phonon validation is reported in the target data. Similar actinide nitride/carbide/carbonitride analogues are frequently on or near hull: PuWC₂ is reported at E_hull = 0.0 (CS5), U₂MnN₃/PuN/U₂N₂Se are reported at E_hull = 0.0 (SS1, SS4, SS5, TS1, TS2, TS3), and low-above-hull analogues include Lu₂(CN₂)₃ at 0.045 eV/atom and Np₂C₃/U₂CrN₃ near ~0.04 eV/atom (CS4, SS2, SS3). The negative predicted formation energy is favorable, but insufficient evidence from CS/SS/TS for the exact Np₃TiC₂N₇ hull position prevents a higher score.

---

#### F2 + F3: Per-Route Scoring

##### Route 1: Reactive Solid-State Sintering / Nitridation

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; analogues use 1200–1700 °C (SS1, SS5, TS1, TS3). | −10 |
| T > 1400°C additional | Yes; 1500–1700 °C appears in related actinide nitride/chalcogenide synthesis (SS5, TS3). | −10 |
| High pressure (>5 GPa) | No; analogues use 1 atm N₂, not GPa pressure (SS1, SS5, TS1, TS3). | 0 |
| Reactive/controlled atmosphere | Yes; 1 atm controlled N₂ is required (SS1, SS5, TS1, TS3). | −15 |
| Volatile precursor requiring sealed system | No for NpN/Ti/C route; insufficient evidence from SS/TS for a volatile precursor in this route. | 0 |
| Multi-step process | Yes; grinding, pelletizing, high-T sintering, and likely regrinding are needed [Reasonable Inference] (SS1, TS1). | −10 |
| Toxic or air-sensitive precursors | Yes; actinide nitride handling is non-routine, as actinide precursors require special handling in related sources (SS1, TS1). | −10 |

**F2 Score for Route 1: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 45 | Actinide mononitride + metal powders are reactive enough to form X₂YN₃ analogues but remain dense/refractory solid-state precursors (SS1, SS3, TS1). |
| Ion diffusion difficulty | 55 | High-T equilibration at 1200–1700 °C supports diffusion, but Ti-bearing solid-state diffusion remains slow [Reasonable Inference] (SS1, SS5, TS1, TS3). |
| Structural reconstruction | 45 | Existing analogues are ordered actinide nitrides, but the target is lower-symmetry P1 with C₂/N–N motifs, requiring more reconstruction [Reasonable Inference] (SS1, SS3, TS1). |

**F3 Score for Route 1: 48 / 100**

##### Route 2: Arc Melting Followed by Nitriding Anneal

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; arc-melted actinide carbides use high temperatures (CS5, TS5). | −10 |
| T > 1400°C additional | Yes; PuWC₂ evidence reports 1400–2300 °C processing (CS5). | −10 |
| High pressure (>5 GPa) | No; arc analogues use Ar atmosphere near ambient/subambient pressure (CS5, TS5). | 0 |
| Reactive/controlled atmosphere | Yes; Ar melting plus nitriding anneal are controlled atmospheres (CS5, TS5; nitriding step [Reasonable Inference]). | −15 |
| Volatile precursor requiring sealed system | No for elemental/graphite arc route; N loss is a process risk but not a volatile solid precursor [Reasonable Inference]. | 0 |
| Multi-step process | Yes; arc melting, remelting, rapid cooling, and annealing are reported or inferred (CS5, TS5). | −10 |
| Toxic or air-sensitive precursors | Yes; actinide metal handling is non-routine and hazardous (CS5, TS5). | −10 |

**F2 Score for Route 2: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 40 | Dense actinide/Ti/graphite mixtures are low-activity solid precursors before melting, although arc melting improves contact (CS5, TS5). |
| Ion diffusion difficulty | 60 | Liquid/near-liquid arc conditions can overcome diffusion limits, as actinide carbides form by arc melting (CS5, TS5). |
| Structural reconstruction | 25 | A carbide melt must be nitrided and ordered into a complex P1 carbonitride, which is a major reconstruction not directly shown in CS/SS/TS [Reasonable Inference]. |

**F3 Score for Route 2: 42 / 100**

##### Route 3: Carbothermal Nitridation from Oxides

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; PuN carbothermal synthesis uses 1740 K ≈ 1467 °C (SS4, TS2). | −10 |
| T > 1400°C additional | Yes; 1740 K exceeds 1400 °C (SS4, TS2). | −10 |
| High pressure (>5 GPa) | No; compaction is reported, but not >5 GPa (SS4, TS2). | 0 |
| Reactive/controlled atmosphere | Yes; high-purity flowing N₂ and optional H₂–N₂ are used (SS4, TS2). | −15 |
| Volatile precursor requiring sealed system | No; oxide/graphite route does not require volatile precursors based on SS4/TS2. | 0 |
| Multi-step process | Yes; blending, compaction, nitridation, and optional cleanup anneal are reported (SS4, TS2). | −10 |
| Toxic or air-sensitive precursors | Yes; actinide oxide/nitride processing is hazardous (SS4, TS2). | −10 |

**F2 Score for Route 3: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 55 | Oxide + graphite carbothermal mixtures are more chemically active than metals, but actinide oxides are still refractory (SS4, TS2). |
| Ion diffusion difficulty | 50 | High T helps, but simultaneous oxide reduction, Ti incorporation, nitridation, and carbon retention increase diffusion/reaction complexity [Reasonable Inference] (SS4, TS2). |
| Structural reconstruction | 20 | Oxide-to-carbonitride conversion is a complete reconstruction, and PuN evidence highlights residual C/O control challenges (SS4, TS2). |

**F3 Score for Route 3: 42 / 100**

##### Route 4: Halide/Cyanamide Solid-State Metathesis in LiCl/KCl Flux

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; CS metathesis analogues operate at 500–800 °C (CS3, CS4). | 0 |
| T > 1400°C additional | No; CS3/CS4 remain well below 1400 °C. | 0 |
| High pressure (>5 GPa) | No; sealed ampules are used, not GPa pressure (CS3, CS4). | 0 |
| Reactive/controlled atmosphere | Yes; glovebox handling and sealed Ar/evacuated ampules are required (CS3, CS4). | −15 |
| Volatile precursor requiring sealed system | No for preferred TiCl₃ variant; TiCl₄ variant would trigger −10 [Reasonable Inference]. | 0 |
| Multi-step process | Yes; precursor handling, ampule sealing, heating, flux/byproduct removal are required (CS3, CS4). | −10 |
| Toxic or air-sensitive precursors | Yes; NpCl₃/Li₃N/TiCl₃ are air-sensitive or hazardous [Reasonable Inference], and CS3/CS4 require inert handling. | −10 |

**F2 Score for Route 4: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 75 | Halide + Li₂CN₂/Li₃N metathesis precursors are chemically reactive and form C/N-rich rare-earth phases at 500–800 °C (CS3, CS4). |
| Ion diffusion difficulty | 65 | LiCl/KCl flux and metathesis can enable reaction below refractory cation melting points, as shown for rare-earth carbodiimides [Reasonable Inference] (CS4). |
| Structural reconstruction | 45 | No SS/TS analogue proves Np–Ti–C–N metathesis; anion rearrangement from cyanamide-like units to target C₂/N–N motifs is uncertain [Reasonable Inference], and insufficient evidence from SS/TS is neutral = 50. |

**F3 Score for Route 4: 62 / 100**

---

#### F4: Amorphization Tendency (Weight: 20%)

| Check | Trigger? | Basis |
|:--:|:--:|:--|
| C1: Cation ionic radius difference >15% | Yes | Np vs Ti size mismatch is >15% by standard ionic-radius chemistry [Reasonable Inference]; insufficient evidence from CS/SS/TS for ionic radii, so CS/SS/TS are neutral = 50 for this sub-check. |
| C2: Unit cell atom count >40 | No | Target P1 description lists 3 Np + 1 Ti + 2 C + 7 N inequivalent sites, implying 13 atoms for the described P1 cell unless Z is larger [Target data; Reasonable Inference]. |
| C3: Mixed polyhedral connectivity | Yes | Target has corner- and edge-sharing NpN₇/tetrahedral motifs, while structurally similar actinide nitrides/carbides commonly show corner/edge/face-sharing networks, supporting connectivity complexity (SS1, SS3, SS5, TS1, TS3, TS5). |

| Triggers | Score | Risk Level |
|:--:|:--:|:--:|
| 2 | 55 | Medium |

**F4 Score: 55 / 100**

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 45 | 48 | 72 | 55 | 55.9 |
| 2 | 45 | 42 | 72 | 55 | 54.4 |
| 3 | 45 | 42 | 72 | 55 | 54.4 |
| 4 | 65 | 62 | 72 | 55 | 64.4 |

| | |
|:--|:--|
| **Best Route** | Route 4: Halide/Cyanamide Solid-State Metathesis in LiCl/KCl Flux |
| **Expert adjustment (±5)** | −2, because the best route is extrapolated from rare-earth C/N metathesis rather than demonstrated Np–Ti–C–N chemistry, and the target lacks candidate-specific hull/phonon validation (CS3, CS4; insufficient evidence from SS/TS for Route 4). |
| **Final Synthesizability Score** | **62 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | 650–800 °C |
| Preferred atmosphere | Ar glovebox loading; sealed Ta ampule under Ar |
| Pressure | Near ambient sealed ampule, e.g., sub-atmospheric to ~1 atm Ar |
| Estimated duration | 2–7 days for screening; up to several weeks for crystal growth if flux route is slow |
| Critical control parameters | Strictly anhydrous NpCl₃/TiCl₃/Li₃N handling, LiCl/KCl flux ratio, slight N-donor excess, avoidance of TiCl₄ volatility if possible, slow cooling, and gentle byproduct salt removal |
| Basis | CS3 supports RECl₃ + Li₂CN₂ + Li₃N at 750–800 °C in sealed Ta/Ar ampules; CS4 supports LiCl/KCl flux and sealed ampules at 500–650 °C; Ti/Np transfer is [Reasonable Inference], with insufficient evidence from SS/TS for this route. |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
Similar actinide and carbonitride analogues are often at or near the convex hull, including PuWC₂, U₂MnN₃, PuN, and U₂N₂Se at E_hull = 0.0, plus Np₂C₃/U₂CrN₃/Lu₂(CN₂)₃ near ~0.04–0.045 eV/atom (CS4, CS5, SS1, SS2, SS3, SS4, SS5, TS1, TS2, TS3). The target has favorable predicted formation energy, but no actual E_hull or phonons, so it is treated as plausibly stable/metastable rather than confirmed ground state [Target data]. The score of 72 reflects strong analogue thermodynamics but insufficient evidence from CS/SS/TS for the exact Np₃TiC₂N₇ hull position.

**F2 — Route 1**  
Route 1 is penalized for >1400 °C processing, controlled N₂ atmosphere, multi-step pellet/regrind/anneal workflow, and actinide precursor handling (SS1, SS5, TS1, TS3). It avoids GPa pressure and volatile sealed precursors, which keeps the score from falling further (SS1, TS1). CS provides only generic high-T sintering evidence and is neutral = 50 for direct actinide nitride transfer (CS1, CS2).

**F3 — Route 1**  
Kinetics are moderate-to-poor because actinide mononitride/Ti/C powders require long-range solid-state diffusion, even though U₂MnN₃/U₂CrN₃ show that such nitride frameworks can form under N₂ (SS1, SS3, TS1). The target’s C₂ and N–N ordering require more reconstruction than the simpler Immm analogues, lowering the structural-reconstruction score [Reasonable Inference] (SS1, SS3).

**F2 — Route 2**  
Arc melting is severe because CS5 reports 1400–2300 °C processing for PuWC₂ and TS5 reports controlled Ar arc melting plus annealing for UFeC₂. The route also requires controlled atmosphere, multiple thermal steps, and hazardous actinide handling, but it does not require high pressure (CS5, TS5).

**F3 — Route 2**  
Arc melting improves cation mixing, which helps diffusion, but the nitriding step must introduce high nitrogen content after melt processing [Reasonable Inference] (CS5, TS5). Because CS5/TS5 demonstrate carbides rather than N-rich carbonitrides, the structural-reconstruction burden is high and SS evidence is only partially transferable (SS2).

**F2 — Route 3**  
Carbothermal nitridation inherits high temperature, high-purity N₂/H₂–N₂ atmosphere, compaction, and cleanup complexity from PuN synthesis (SS4, TS2). It avoids high pressure above 5 GPa and volatile halide precursors, but oxygen/carbon control makes the route operationally challenging (SS4, TS2). CS has insufficient evidence for carbothermal nitridation and is neutral = 50.

**F3 — Route 3**  
Oxide + graphite mixtures are chemically reactive, but full conversion to a mixed Np–Ti carbonitride requires reduction, nitridation, cation diffusion, and carbon retention in one process [Reasonable Inference] (SS4, TS2). PuN evidence explicitly shows residual carbon/oxygen control as a challenge, so the structural-reconstruction score is low (SS4, TS2).

**F2 — Route 4**  
The metathesis/flux route earns the best F2 because CS3/CS4 operate at 500–800 °C rather than >1000 °C. It is still penalized for sealed inert handling, multi-step ampule/flux work, and air-sensitive/hazardous precursors (CS3, CS4). SS/TS provide insufficient evidence for this low-T metathesis route and are neutral = 50 for route-specific condition transfer.

**F3 — Route 4**  
Reactive halides plus Li₂CN₂/Li₃N provide high precursor activity and lower the diffusion burden through salt metathesis/flux chemistry, as shown by rare-earth C/N analogues (CS3, CS4). The main kinetic uncertainty is whether the target’s C₂ and N–N topology forms rather than a cyanamide/carbodiimide or binary nitride mixture [Reasonable Inference]. This route therefore scores best but remains only moderately favorable.

**F4 — Amorphization Tendency**  
The target has large Np/Ti cation mismatch by ionic-radius reasoning and mixed corner/edge polyhedral connectivity, both of which increase amorphization or disorder risk [Reasonable Inference] (SS1, SS3, TS1). The small described P1 cell avoids the >40-atom trigger, limiting the penalty [Target data]. CS/SS/TS do not directly report target ionic radii or amorphization behavior, so that portion is treated with neutral source signal = 50.

---

### SECTION 6 — Synthesizability Interpretation

Np₃TiC₂N₇ should be treated as a plausible metastable or near-ground-state candidate rather than a confirmed ground-state phase because the target has negative predicted formation energy but no reported convex-hull or phonon validation [Target data]. The SS/TS analogues strongly support the broader feasibility of actinide nitride and actinide-transition-metal nitride frameworks under high-T N₂, while CS supports C/N-rich halide metathesis chemistry at lower temperature (SS1, SS3, SS5, TS1, TS3, CS3, CS4). The most critical enabling factor is access to reactive N/C donors in a sealed flux/metathesis environment, which may bypass the slow diffusion seen in refractory solid-state routes (CS3, CS4). The most critical limiting factor is phase selectivity: NpN, TiN, TiC, Np carbides, and cyanamide-like byproducts are all chemically plausible competitors [Reasonable Inference] (CS3, CS5, SS1, SS4, TS2, TS5). Overall, the target is synthesizable only with careful inert handling, high N chemical potential, and iterative phase screening.

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy (from CS/SS/TS) |
|:--:|:--:|:--|:--:|:--|
| 1 | All | Radioactive/air-sensitive actinide precursors | High | Use glovebox loading, sealed ampules, and actinide-compatible containment; inert/sealed handling is supported in CS3/CS4 and actinide handling difficulty is noted in SS1/SS4/TS1/TS2. |
| 2 | All | Competing NpN, TiN, TiC, Np carbide, or residual graphite phases | High | Use fine powders, slight N-donor excess, repeated grinding/annealing, and phase checks; high-T N₂ equilibration and repeated/annealed processing are supported by SS1/SS5/TS1/TS3 and CS5/TS5. |
| 3 | Route 1 | Slow solid-state diffusion and ordering of a low-symmetry P1 phase | Medium–High | Use high-T holds, pelletization, regrinding, and slow cooling; analogous nitride syntheses use pressed/equilibrated powders at 1200–1600 °C (SS1, SS3, TS1). |
| 4 | Route 2 | Nitrogen loss or incomplete nitridation after arc melting | High | Separate carbide/alloy formation from post-anneal nitridation under N₂/NH₃; arc-melting/annealing is supported by CS5/TS5, while nitriding anneal is [Reasonable Inference]. |
| 5 | Route 3 | Oxygen contamination and residual carbon control | High | Use high-purity N₂, tuned graphite excess, and optional H₂–N₂ cleanup; PuN carbothermal evidence uses high-purity N₂ and optional H₂–N₂ treatment (SS4, TS2). |
| 6 | Route 4 | Halide/cyanamide byproducts and incomplete salt removal | Medium | Use LiCl/KCl flux, slow cooling, and controlled washing; flux and post-treatment are supported by CS3/CS4. |
| 7 | Route 4 | TiCl₄ volatility if used for halide balance | Medium–High | Prefer TiCl₃ or cold-load/seal TiCl₄ with excess salt flux; TiCl₄ volatility mitigation is [Reasonable Inference], while sealed ampule metathesis is supported by CS3/CS4. |
| 8 | All | Crystal growth difficulty for a complex, low-symmetry Np–Ti carbonitride | Medium | Use flux route for crystals or long anneals for powders; CS4 shows longer flux growth can improve crystallinity, while SS/TS high-T routes show bulk phase formation but not target single crystals (CS4, SS1, TS1). |