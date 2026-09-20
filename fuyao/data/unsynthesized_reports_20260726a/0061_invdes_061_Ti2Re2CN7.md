> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.436 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

Citation key: **CS#** = chemically similar reference item; **SS#** = structurally similar reference item; **TS#** = thermodynamic similar reference item; **Target** = supplied target description and stability note.

---

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Flux-Assisted Halide/Cyanamide Metathesis

| Field | Details |
|:--|:--|
| Reference basis | **CS3** directly supports chloride + Li₂(CN₂) metathesis in KCl/LiCl flux to form crystalline carbodiimides, and **CS2** supports sealed-tube chloride solid-state chemistry at ~750 °C; **insufficient evidence from SS/TS** for cyanamide metathesis specifically, so SS/TS are neutral for this route. |
| Precursors | Anhydrous TiCl₃ or TiCl₄, anhydrous ReCl₅/ReCl₃ or K₂ReCl₆, Li₂(CN₂), optional Li₃N/NaN₃ for higher N activity, dry KCl/LiCl flux; Ti/Re precursor choices are **[Reasonable Inference]** from CS3 chloride/cyanamide chemistry and CS1/CS2 rhenium/chloride chemistry. |
| Temperature program | Glovebox grinding → ramp ~25–50 °C/h → hold 650–800 °C for 2–7 days → cool 10–20 °C/h → wash flux under dry/inert-compatible workup; ramp/cooling basis comes from CS2, while 500–650 °C flux precedent comes from CS3. |
| Atmosphere | Ar glovebox handling and evacuated or Ar-backfilled sealed silica ampoule, preferably with Ta/Nb liner if chloride volatility/corrosion is problematic; sealed inert handling is supported by CS2 and CS3, and liner use is **[Reasonable Inference]**. |
| Pressure | Ambient pressure inside sealed ampoule; this follows CS2/CS3 sealed-ampoule practice. |
| Additional conditions | Use dry flux, slight Li₂(CN₂)/Li₃N excess to maintain C/N activity, and multiple regrind/anneal screens; excess anion activity is **[Reasonable Inference]** based on CS3 carbodiimide chemistry and TS1 nitride synthesis using Li₃N. |
| Transferability to target | Best transfer among bulk routes because the target contains C/N and N–N motifs, while CS3 shows crystalline C–N anion frameworks can be made by metathesis; lack of exact Ti–Re–C–N analogue remains a major uncertainty from CS/SS/TS. |
| Estimated difficulty | **Challenging**, because the route combines moisture-sensitive halides, N/C stoichiometry control, and an unvalidated low-symmetry target phase; this difficulty is inferred from CS2/CS3 handling requirements and Target complexity. |

#### Route 2: Reactive Ammonolysis / Carbonitridation of a Mixed Precursor

| Field | Details |
|:--|:--|
| Reference basis | **SS2** supports ammonolysis of a mixed metal oxide precursor under dry NH₃ at 800 °C to form a ternary nitride, while **SS4/TS5** support NH₃/H₂ reactive nitride formation in gas flow; **insufficient evidence from CS** for ammonolysis of Ti–Re carbonitrides, so CS is neutral here. |
| Precursors | TiO₂ or Ti oxyhydroxide, NH₄ReO₄/ReO₂/Re metal salt, carbon black or cyanamide/urea/melamine, dry NH₃ gas; the Ti/Re/C precursor set is **[Reasonable Inference]** from SS2 oxide-to-nitride ammonolysis and CS3 C–N precursor chemistry. |
| Temperature program | Co-precipitate or grind precursor → dry/calcine gently → ramp 2–5 °C/min under N₂/NH₃ → hold 750–900 °C for 12–48 h under dry NH₃ → regrind and re-anneal if needed; 800 °C/24 h dry NH₃ precedent is from SS2. |
| Atmosphere | Dry flowing NH₃, optionally diluted with N₂ or followed by N₂ anneal; NH₃ flow precedent is from SS2 and SS4/TS5. |
| Pressure | Ambient pressure tube furnace; SS2 and SS4/TS5 use flowing gas at non-high-pressure conditions. |
| Additional conditions | Avoid overly reducing H₂-rich conditions that could reduce Re and deplete N; this caution is **[Reasonable Inference]** from CS1, where H₂ thermolysis gave metallic/phase-variable products. |
| Transferability to target | Useful for high N activity and intimate precursor mixing, but target C/N/N–N ordering is not directly demonstrated by SS2/SS4/TS5. |
| Estimated difficulty | **Challenging**, because NH₃ handling is manageable but phase purity and Ti/Re/C/N stoichiometry are difficult; this follows SS2 impurity/kinetic sensitivity and SS4/TS5 phase-window sensitivity. |

#### Route 3: Direct Solid-State Nitride/Carbonitride Annealing

| Field | Details |
|:--|:--|
| Reference basis | **TS1/TS3** support high-temperature solid-state synthesis of ternary nitrides from binary nitrides, **TS4** supports nitride + transition-metal equilibration under N₂ at 1200–1600 °C, and **CS4** supports sealed-ampoule direct elemental synthesis; **insufficient evidence from CS1/CS5** for direct bulk Ti–Re–C–N synthesis, so those CS entries are neutral. |
| Precursors | TiN, TiC or Ti metal, Re powder or preformed Re nitride, graphite/carbon black, optional Li₃N/NaN₃/NH₄Cl as N source; this combination is **[Reasonable Inference]** from TS1/TS3 binary-nitride routes and TS2 carbide/carbon use. |
| Temperature program | Glovebox grind → pelletize → seal under N₂/Ar or evacuated ampoule → heat 1000–1200 °C for 3–7 days → slow cool, regrind, repeat; long high-T solid-state holds are supported by TS1/TS3/CS2. |
| Atmosphere | N₂, Ar, or sealed evacuated ampoule with internal N source; inert/sealed practice is supported by TS1/TS3/CS2. |
| Pressure | Ambient pressure sealed-tube or crucible conditions; TS1/TS3/CS2 use non-high-pressure synthesis. |
| Additional conditions | Use excess N source, repeated regrinding, and slow cooling to improve ordering; these controls are **[Reasonable Inference]** from TS1/TS3 long anneals and CS2 controlled cooling. |
| Transferability to target | Transferability is moderate-low because many nitrides form by solid-state sintering, but dense Ti/Re binaries and graphite create slow diffusion and competing TiN/TiC/Re phases; diffusion concern is **[Reasonable Inference]** supported by TS1/TS3 long holds. |
| Estimated difficulty | **Challenging**, driven by refractory cation diffusion and phase competition; this follows TS1/TS3/TS4 high-temperature nitride practice. |

#### Route 4: Reactive CVD / Thin-Film Carbonitride Deposition

| Field | Details |
|:--|:--|
| Reference basis | **SS4/TS5** directly support transition-metal nitride CVD from metal chloride + NH₃/H₂ at 950–1000 °C; **insufficient evidence from CS** for CVD of Ti–Re–C–N, so CS is neutral. |
| Precursors | TiCl₄ or Ti amide precursor, ReCl₅/Re carbonyl precursor, NH₃ or N₂ plasma, CH₄/C₂H₂ or another carbon precursor, H₂/Ar carrier; Re/Ti/CVD precursor set is **[Reasonable Inference]** from SS4/TS5 chloride-NH₃ CVD. |
| Temperature program | Precursor vapor delivery → substrate 600–950 °C → reactive deposition → optional 700–900 °C N₂/NH₃ anneal; 950–1000 °C CVD precedent is from SS4/TS5. |
| Atmosphere | NH₃/H₂/Ar or N₂ plasma; controlled gas-flow precedent is from SS4/TS5. |
| Pressure | Atmospheric CVD or low-pressure CVD; atmospheric precedent is SS4/TS5, while low-pressure operation is **[Reasonable Inference]** for composition control. |
| Additional conditions | Calibrate Ti:Re and C:N fluxes, use diffusion barrier substrates, and screen substrate temperature to avoid Re loss; these are **[Reasonable Inference]** from SS4/TS5 phase-window sensitivity. |
| Transferability to target | Thin-film route is plausible for metastable phases because CVD can bypass bulk diffusion, but no SS/TS/CS analogue confirms the exact P1 Ti₂Re₂CN₇ phase. |
| Estimated difficulty | **Challenging**, mostly due to four-component composition control and C/N incorporation; this follows SS4/TS5 narrow nitride phase-window evidence. |

#### Route 5: High-Pressure High-Temperature Carbonitridation

| Field | Details |
|:--|:--|
| Reference basis | **SS1** supports W nitride synthesis at 5 GPa and high T, and **SS3** supports MoN synthesis at 20 kbar/1500 °C; **insufficient evidence from CS/TS** for high-pressure Ti–Re–C–N synthesis, so CS/TS are neutral for this route. |
| Precursors | TiN/TiC/Ti powder, Re powder or Re nitride, graphite, hBN/NaN₃/NH₄Cl internal N source, capsule material such as BN/Ta/Pt; this set is **[Reasonable Inference]** from SS1 hBN/Na₂WO₄ and SS3 MoO₂/NH₄Cl high-pressure routes. |
| Temperature program | Load capsule → pressurize 5–8 GPa → heat 1200–1500 °C for 0.5–2 h → quench under pressure → decompress; high-P/T precedent is SS1/SS3. |
| Atmosphere | Sealed capsule with internal nitrogen activity rather than flowing gas; this is **[Reasonable Inference]** from SS1/SS3 high-pressure practice. |
| Pressure | High pressure, ~5–8 GPa; SS1 reports 5 GPa and SS3 reports 20 kbar. |
| Additional conditions | Quench rapidly to retain metastable nitride/carbonitride products; quench/controlled cooling precedent is SS1/SS3. |
| Transferability to target | Useful if Ti₂Re₂CN₇ is metastable or needs high N chemical potential, but sample size and phase-screening burden are high; this follows SS1/SS3 high-pressure nitride evidence. |
| Estimated difficulty | **Challenging**, because specialized equipment and narrow phase windows are required; this follows SS1/SS3. |

#### Route 6: Molecular / Complex Precursor Thermolysis

| Field | Details |
|:--|:--|
| Reference basis | **CS1** supports thermolysis of Re-containing ammine/halide salts under H₂ at 250–700 °C, and **CS5** supports room-temperature precipitation of ammine/halometallate molecular salts; **insufficient evidence from SS/TS** for molecular precursor thermolysis to the target phase, so SS/TS are neutral here. |
| Precursors | Mixed Ti/Re ammine, amide, halide, or cyanamide complex precursor plus cyanamide/urea/dicyandiamide C–N source; this is **[Reasonable Inference]** from CS1/CS5 molecular precursor chemistry and CS3 C–N anion chemistry. |
| Temperature program | Prepare mixed precursor → dry under inert conditions → thermolyze 300–700 °C under NH₃/N₂/Ar → optional flux-assisted anneal at 650–800 °C; thermolysis temperature basis is CS1, while NH₃/N₂ substitution is **[Reasonable Inference]** to preserve N. |
| Atmosphere | Prefer NH₃/N₂/Ar rather than H₂-rich conditions; H₂ use is in CS1, but avoiding H₂ is **[Reasonable Inference]** because CS1 reports reduced metallic/phase-variable products. |
| Pressure | Ambient pressure tube furnace or sealed ampoule; CS1 uses a tube reactor, and CS3 uses sealed ampoules. |
| Additional conditions | Precursor homogeneity may help cation mixing, but crystallization likely needs post-anneal; this is **[Reasonable Inference]** because CS1/CS5 are molecular or decomposition routes, not extended Ti–Re–C–N frameworks. |
| Transferability to target | Low-to-moderate because molecular mixing is attractive, but CS1/CS5 do not demonstrate retention of an extended nitride/carbonitride target lattice. |
| Estimated difficulty | **Challenging**, mainly due to risk of amorphous carbonitride or metallic Re/Ti side phases; this risk is inferred from CS1 phase variation and Target complexity. |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Flux-Assisted Halide/Cyanamide Metathesis

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Li₂(CN₂), dry/fresh | C–N source | CS3 uses Li₂(CN₂) to form crystalline carbodiimides; target contains C/N and N–N motifs, so this is the most transferable C–N source. | Air/moisture-sensitive; may require prior synthesis, as CS3 notes precursor preparation complexity. |
| 2 | TiCl₃ or TiCl₄, anhydrous | Ti source | Chloride metathesis is supported by CS3, and Ti chloride use is **[Reasonable Inference]**. | TiCl₄ is volatile/corrosive; TiCl₃ is moisture-sensitive. |
| 3 | ReCl₅/ReCl₃ or K₂ReCl₆, anhydrous | Re source | CS1 uses Re halide complex salts, and CS2 supports sealed chloride chemistry. | Re chlorides are moisture-sensitive/corrosive and may volatilize. |
| 4 | Li₃N or NaN₃, optional | Extra N activity | TS1 uses Li₃N in nitride synthesis, and excess N is **[Reasonable Inference]** for N-rich Ti₂Re₂CN₇. | Li₃N is air-sensitive; azides can be hazardous. |
| 5 | KCl/LiCl flux, dry | Flux / diffusion aid | CS3 explicitly uses KCl/LiCl flux in sealed ampoules. | Hygroscopic; residual chloride must be removed. |

#### Route 2: Reactive Ammonolysis / Carbonitridation

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | TiO₂ nanopowder or Ti oxyhydroxide | Ti source | SS2 uses a mixed oxide precursor before ammonolysis; Ti oxide precursor use is **[Reasonable Inference]**. | Coarse TiO₂ is refractory and may react slowly. |
| 2 | NH₄ReO₄, ReO₂, or Re metal salt | Re source | Re oxide/salt precursor use is **[Reasonable Inference]** from SS2 mixed-oxide ammonolysis. | Re oxides/salts can be toxic, oxidizing, or volatile at high T. |
| 3 | Carbon black, cyanamide, urea, or melamine | C source / C–N source | CS3 supports C–N precursor chemistry, while carbon addition is **[Reasonable Inference]** for the target carbonitride. | C excess can form TiC/Re carbide; C deficiency can form nitrides. |
| 4 | Dry NH₃(g) | Nitrogen source | SS2 uses dry NH₃ for ammonolysis, and SS4/TS5 use NH₃ in nitride CVD. | Toxic/reactive gas; requires dry flow control. |
| 5 | N₂ or Ar purge | Carrier / inert protection | SS2 and SS4/TS5 require controlled gas handling. | Poor drying introduces oxides. |

#### Route 3: Direct Solid-State Nitride/Carbonitride Annealing

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | TiN and/or TiC powder | Ti, N, C source | TS1/TS3 support use of binary nitrides; TiC use is **[Reasonable Inference]** for carbon incorporation. | Dense/refractory; slow diffusion. |
| 2 | Re powder or preformed Re nitride | Re source | TS4 supports transition-metal/nitride powder equilibration; Re nitride use is **[Reasonable Inference]**. | Re is refractory; Re nitrides may require prior synthesis. |
| 3 | Graphite/carbon black | Carbon adjuster | TS2 uses graphitic carbon in carbide synthesis. | Slow diffusion and carbide side phases. |
| 4 | Li₃N/NaN₃/NH₄Cl | Nitrogen activity booster | TS1 uses Li₃N, and SS3 uses NH₄Cl as nitride-forming reagent. | Air-sensitive or gas-evolving; sealed-system pressure risk. |
| 5 | Ta/Nb/Mo liner or BN crucible | Containment | TS3 uses Mo foil/stainless crucibles, and liner choice is **[Reasonable Inference]**. | Possible contamination or reaction with halides/nitrides. |

#### Route 4: Reactive CVD / Thin-Film Carbonitride Deposition

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | TiCl₄ or Ti amide precursor | Ti vapor source | SS4/TS5 demonstrate metal chloride + NH₃ nitride CVD; Ti precursor choice is **[Reasonable Inference]**. | TiCl₄ is volatile/corrosive; amides can decompose early. |
| 2 | ReCl₅, Re carbonyl, or organo-Re precursor | Re vapor source | Re vapor precursor use is **[Reasonable Inference]** from SS4/TS5 CVD logic. | Re precursor volatility may be hard to match to Ti. |
| 3 | NH₃ or N₂ plasma | N source | SS4/TS5 use NH₃ for nitride CVD. | Toxic/reactive; N incorporation can be rate-limiting. |
| 4 | CH₄, C₂H₂, or organocarbon co-reactant | C source | Carbon precursor use is **[Reasonable Inference]** for CVD carbonitride growth. | Excess carbon can amorphize or form carbides. |
| 5 | H₂/Ar carrier gas | Carrier/reductant | SS4/TS5 use NH₃/H₂ gas flow. | H₂ is flammable and may reduce Re too strongly. |

#### Route 5: High-Pressure High-Temperature Carbonitridation

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | TiN/TiC/Ti powder | Ti/C/N source | Binary nitride/carbonitride feed is **[Reasonable Inference]** from SS1/SS3 high-pressure nitride synthesis. | Refractory; may remain unreacted. |
| 2 | Re powder or Re nitride | Re source | Re source choice is **[Reasonable Inference]** from transition-metal nitride HPHT analogues SS1/SS3. | Re is refractory; Re nitride prior synthesis may be needed. |
| 3 | hBN, NaN₃, or NH₄Cl | N source / capsule-compatible N donor | SS1 uses hBN and SS3 uses NH₄Cl. | Gas evolution and pressure control risk. |
| 4 | Graphite | Carbon source | Carbon addition is **[Reasonable Inference]** from Target composition and TS2 carbide/carbon precedent. | Carbide side phases. |
| 5 | BN/Ta/Pt capsule | Containment | Capsule use is **[Reasonable Inference]** from SS1/SS3 HPHT practice. | Capsule reaction or sample dilution. |

#### Route 6: Molecular / Complex Precursor Thermolysis

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Ti amide/chloride/alkoxide complex | Ti molecular source | Molecular Ti precursor use is **[Reasonable Inference]** from CS1/CS5 complex-salt logic. | Hydrolysis and premature decomposition. |
| 2 | Re ammine/halometallate complex | Re molecular source | CS1 uses Re halide ammine salts, and CS5 supports ammine/halometallate precipitation chemistry. | Reduction to Re metal is likely under H₂-rich conditions. |
| 3 | Cyanamide, dicyandiamide, or urea | C–N source | CS3 supports cyanamide-derived C–N framework chemistry. | Can produce amorphous carbon nitride residues. |
| 4 | NH₃/N₂/Ar | Thermolysis atmosphere | CS1 uses H₂ thermolysis, but NH₃/N₂/Ar is **[Reasonable Inference]** to preserve N. | NH₃ is toxic; Ar/N₂ may not supply enough N activity. |
| 5 | KCl/LiCl salt matrix, optional | Diluent / crystallization aid | CS3 flux use supports salt-assisted crystallization. | Chloride contamination and washing losses. |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability (Weight: 30%)

| E_hull (eV/atom) | Score |
|:--:|:--:|
| ≤ 0.05 | 90–100 |
| 0.05 – 0.20 | 65–85 |
| 0.20 – 0.50 | 35–60 |
| > 0.50 | 5–30 |

**F1 Score: 62 / 100**

| Source | Signal Used | Source Handling |
|:--|:--|:--|
| Target | Candidate-specific E_hull is not reported, and the placeholder 0.000 eV/atom must not be used; predicted formation energy is negative at −0.436 eV/atom but lacks hull/phonon validation. |
| CS | Mixed and weak stability signal: CS2/CS3/CS4 are low-hull analogues, while CS1/CS5 have high E_hull molecular/halide systems; no exact Ti–Re–C–N analogue is present, so CS is effectively neutral-to-weak. |
| SS | Mixed structural signal: SS4/SS5 are low-hull nitrides, but SS1/SS3 have high E_hull values; SS therefore supports metastability risk. |
| TS | Positive thermodynamic analogue signal: TS1–TS4 report E_hull = 0 and TS5 is near-hull at 0.032 eV/atom, but none is the exact target chemistry. |

#### F2 + F3: Per-Route Scoring

##### Route 1: Flux-Assisted Halide/Cyanamide Metathesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; route is inferred at 650–800 °C from CS3/CS2. | 0 |
| T > 1400°C | No; CS3/CS2 do not require this range. | 0 |
| High pressure (> 5 GPa) | No; CS2/CS3 are sealed ambient-pressure routes. | 0 |
| Reactive/controlled atmosphere | Yes; sealed evacuated/Ar handling is used in CS2/CS3. | −15 |
| Volatile precursor requiring sealed system | Yes; Ti/Re halides are **[Reasonable Inference]** volatile/corrosive analogues to CS chloride routes. | −10 |
| Multi-step process (≥3 steps) | Yes; glovebox mixing, sealing, heating, cooling, and washing follow CS3 practice. | −10 |
| Toxic or air-sensitive precursors | Yes; anhydrous halides/Li₂(CN₂)/Li₃N are **[Reasonable Inference]** from CS3/TS1. | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 75 | Halide/cyanamide metathesis and flux are reactive in CS3, and sealed chloride chemistry is active in CS2. |
| Ion diffusion difficulty | 45 | Flux should reduce diffusion length, but Ti/Re are refractory cations; the refractory-diffusion penalty is **[Reasonable Inference]**. |
| Structural reconstruction | 55 | C–N anion transfer is supported by CS3, but the target P1 Ti–Re–C–N framework has no exact analogue in CS/SS/TS. |

**F3 Score for Route 1: 58 / 100**

##### Route 2: Reactive Ammonolysis / Carbonitridation

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; SS2 uses 800 °C ammonolysis. | 0 |
| T > 1400°C | No; SS2 does not require this range. | 0 |
| High pressure (> 5 GPa) | No; SS2 is ambient-pressure flowing NH₃. | 0 |
| Reactive/controlled atmosphere | Yes; dry NH₃ is used in SS2 and SS4/TS5. | −15 |
| Volatile precursor requiring sealed system | No for the preferred flowing-gas route; this is neutral from SS2. | 0 |
| Multi-step process (≥3 steps) | Yes; precursor preparation plus ammonolysis follows SS2. | −10 |
| Toxic or air-sensitive precursors | Yes; NH₃ gas and reduced nitride products require controlled handling in SS2/SS4. | −10 |

**F2 Score for Route 2: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 60 | SS2 uses a reactive mixed oxide precursor and dry NH₃, but this is less active than molten flux. |
| Ion diffusion difficulty | 35 | Gas nitridation helps N incorporation, but Ti/Re cation redistribution remains slow; this is **[Reasonable Inference]** from refractory cations and SS2 kinetic sensitivity. |
| Structural reconstruction | 35 | SS2 reports impurity/kinetic sensitivity, and the target requires full C/N/N–N ordering not shown by SS2. |

**F3 Score for Route 2: 43 / 100**

##### Route 3: Direct Solid-State Nitride/Carbonitride Annealing

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; TS3 and TS4 use ~1030–1600 °C nitride reactions. | −10 |
| T > 1400°C | No for the preferred 1000–1200 °C screen, though TS4 shows higher-T analogues. | 0 |
| High pressure (> 5 GPa) | No; TS1/TS3/TS4 are ambient-pressure solid-state routes. | 0 |
| Reactive/controlled atmosphere | Yes; N₂/Ar/sealed conditions are required in TS1/TS3/TS4. | −15 |
| Volatile precursor requiring sealed system | Yes; internal N sources such as Li₃N/NaN₃ are **[Reasonable Inference]** and require sealing. | −10 |
| Multi-step process (≥3 steps) | Yes; pelletizing, annealing, regrinding, and repeat annealing follow TS1/TS3 practice. | −10 |
| Toxic or air-sensitive precursors | Yes; nitrides and N donors are air-sensitive in TS1/TS3. | −10 |

**F2 Score for Route 3: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 35 | Dense binary nitrides/metals are less reactive than salts or molecular precursors; TS1/TS3 need long high-T treatments. |
| Ion diffusion difficulty | 15 | Re and Ti are refractory, and multication ordering is slow; this is **[Reasonable Inference]** supported by TS1/TS3 long anneals. |
| Structural reconstruction | 40 | Direct binaries require major reconstruction, but nitride frameworks are accessible in TS1/TS3/TS4. |

**F3 Score for Route 3: 30 / 100**

##### Route 4: Reactive CVD / Thin-Film Carbonitride Deposition

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No if operated at ≤950 °C, matching SS4/TS5. | 0 |
| T > 1400°C | No; SS4/TS5 do not require this range. | 0 |
| High pressure (> 5 GPa) | No; SS4/TS5 are atmospheric-pressure CVD examples. | 0 |
| Reactive/controlled atmosphere | Yes; NH₃/H₂ controlled flow is used in SS4/TS5. | −15 |
| Volatile precursor requiring sealed system | Yes; volatile chloride/organometallic delivery is required by analogy to SS4/TS5. | −10 |
| Multi-step process (≥3 steps) | Yes; vaporization, deposition, and optional annealing are required in SS4/TS5-type workflows. | −10 |
| Toxic or air-sensitive precursors | Yes; NH₃/H₂/TiCl₄/Re precursors are hazardous by **[Reasonable Inference]** from SS4/TS5 gas chemistry. | −10 |

**F2 Score for Route 4: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor vapor availability | 60 | SS4/TS5 confirm metal-chloride nitride CVD, but matching Ti and Re vapor fluxes is **[Reasonable Inference]** difficult. |
| Crystallization pathway | 55 | SS4/TS5 show direct nitride film formation, but the target’s complex P1 structure likely needs post-annealing. |
| Composition control | 35 | SS4/TS5 report nitride phase-window sensitivity, and Ti:Re:C:N control is narrower by **[Reasonable Inference]**. |

**F3 Score for Route 4: 50 / 100**

##### Route 5: High-Pressure High-Temperature Carbonitridation

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Yes; SS1/SS3 use high temperatures for nitrides. | −10 |
| T > 1400°C | Yes if the route uses ~1500 °C, as in SS3. | −10 |
| High pressure (> 5 GPa) | Yes for a 5–8 GPa screen; SS1 uses 5 GPa and extrapolation above 5 GPa is **[Reasonable Inference]**. | −25 |
| Reactive/controlled atmosphere | No flowing gas; nitrogen is internal to capsule by **[Reasonable Inference]**. | 0 |
| Volatile precursor requiring sealed system | Yes; N donors in capsules require containment by analogy to SS1/SS3. | −10 |
| Multi-step process (≥3 steps) | Yes; capsule loading, pressurizing, heating, quenching, and recovery follow SS1/SS3. | −10 |
| Toxic or air-sensitive precursors | Yes; nitrides/N donors and high-pressure capsules require controlled handling by **[Reasonable Inference]**. | −10 |

**F2 Score for Route 5: 25 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 50 | SS1/SS3 use simple precursors that react under HPHT, but target precursors remain refractory. |
| Ion diffusion difficulty | 35 | HPHT improves kinetics, but Re/Ti multication ordering is still difficult by **[Reasonable Inference]**. |
| Structural reconstruction | 30 | SS1 reports difficult phase windows for novel nitrides, and the target has no confirmed HPHT analogue. |

**F3 Score for Route 5: 38 / 100**

##### Route 6: Molecular / Complex Precursor Thermolysis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; CS1 thermolysis is 250–700 °C. | 0 |
| T > 1400°C | No; CS1 does not require this range. | 0 |
| High pressure (> 5 GPa) | No; CS1/CS5 are ambient-pressure molecular routes. | 0 |
| Reactive/controlled atmosphere | Yes; CS1 uses H₂, and NH₃/N₂ substitution is **[Reasonable Inference]**. | −15 |
| Volatile precursor requiring sealed system | No as a baseline tube-reactor thermolysis route, based on CS1. | 0 |
| Multi-step process (≥3 steps) | Yes; CS1/CS5 precursor preparation plus thermolysis implies multiple steps. | −10 |
| Toxic or air-sensitive precursors | Yes; ammine/halide complexes and NH₃/H₂ handling are controlled-chemistry risks from CS1/CS5. | −10 |

**F2 Score for Route 6: 65 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 65 | CS1/CS5 molecular salts provide intimate mixing, but precursor synthesis is nontrivial. |
| Ion diffusion difficulty | 35 | Molecular mixing helps locally, but low-temperature thermolysis may not allow long-range Ti/Re ordering; this is **[Reasonable Inference]**. |
| Structural reconstruction | 25 | CS1 reports phase-variable/metallic products and CS5 is zero-dimensional, so conversion to an ordered extended Ti–Re–C–N phase is weakly supported. |

**F3 Score for Route 6: 42 / 100**

#### F4: Amorphization Tendency (Weight: 20%)

| Check | Criterion | Trigger? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | No / uncertain | Ti–C/Re–C and Ti–N/Re–N bond lengths overlap substantially in the Target description, so a >15% mismatch is not confidently established; insufficient evidence from CS/SS/TS for target-specific cation radii. |
| C2 | Unit cell atom count >40 | No | The supplied structure formula Ti₂Re₂CN₇ contains 12 atoms per formula unit; no >40-atom cell is indicated in the Target record. |
| C3 | Mixed polyhedral connectivity | Yes | Target explicitly reports face- and edge-sharing TiCN₄ trigonal bipyramids, and vertex-sharing through bridging C/N atoms is **[Reasonable Inference]**; mixed corner/edge/face connectivity is also common in SS/TS analogues such as TS4 and CS4. |

**F4 Score: 78 / 100**

#### Final Score Table

| Route | F2 | F3 | F1 (shared) | F4 (shared) | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 — Flux metathesis | 55 | 58 | 62 | 78 | 62.5 |
| 2 — Ammonolysis/carbonitridation | 65 | 43 | 62 | 78 | 61.2 |
| 3 — Direct solid-state | 45 | 30 | 62 | 78 | 53.0 |
| 4 — Reactive CVD/thin film | 55 | 50 | 62 | 78 | 60.5 |
| 5 — HPHT carbonitridation | 25 | 38 | 62 | 78 | 50.0 |
| 6 — Molecular thermolysis | 65 | 42 | 62 | 78 | 61.0 |

| | |
|:--|:--|
| **Best Route** | Route 1 — Flux-Assisted Halide/Cyanamide Metathesis |
| **Expert adjustment (±5)** | **−3**, because the best route is chemically plausible from CS3 but lacks any exact Ti–Re–C–N analogue, and the target has no reported convex-hull or phonon validation. |
| **Final Synthesizability Score** | **59 / 100**, based on Route 1 after expert adjustment. |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **650–800 °C**, based on CS3 500–650 °C flux metathesis and CS2 750 °C sealed chloride synthesis. |
| Preferred atmosphere | **Ar glovebox handling + evacuated/Ar-backfilled sealed ampoule**, based on CS2/CS3 sealed inert synthesis. |
| Pressure | **Ambient pressure sealed ampoule**, based on CS2/CS3. |
| Estimated duration | **2–7 days initial screen**, with longer anneal possible if ordering is poor; CS2 uses 4 days and CS3 reports 48 h to longer crystallization windows. |
| Critical control parameters | Dry halides/flux, slight Li₂(CN₂)/Li₃N excess, chloride volatility management, slow cooling, and careful flux washing; these controls follow CS3/CS2 and are extended to Ti/Re by **[Reasonable Inference]**. |
| Basis | Best basis is CS3 for C–N metathesis and CS2 for sealed chloride reaction conditions, with TS1/TS3 supporting nitride formation under controlled high-temperature inert conditions. |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target has a negative predicted formation energy but no candidate-specific E_hull or phonon validation, so it cannot be treated as a confirmed ground-state phase from the Target record. TS analogues are encouraging because TS1–TS4 are reported at E_hull = 0 and TS5 is near-hull, but SS analogues are mixed because SS1/SS3 are substantially above hull. CS evidence is contradictory because CS2/CS3/CS4 are low-hull while CS1/CS5 are high-hull molecular/halide systems, so CS is not strongly weighted.

**F2/F3 — Route 1**  
Route 1 has moderate condition severity because CS3/CS2 use sealed inert ampoules and moderate temperatures, but moisture-sensitive/volatile halide and cyanamide chemistry adds penalties. Its kinetics score is the best because CS3 provides a reactive C–N metathesis/flux template, although Ti/Re refractory ordering and lack of exact analogue limit confidence.

**F2/F3 — Route 2**  
Route 2 benefits from lower temperature and ambient pressure because SS2 ammonolysis occurs at 800 °C under dry NH₃. Its kinetics are weaker because SS2 reports impurity/kinetic sensitivity, and the target requires C/N/N–N ordering beyond the binary/ternary nitride chemistry directly shown in SS2/SS4/TS5.

**F2/F3 — Route 3**  
Route 3 is penalized for high temperature, sealed/controlled atmosphere, air-sensitive nitrides, and repeated annealing, all consistent with TS1/TS3/TS4 solid-state nitride practice. Its kinetics are poor because dense Ti/Re/nitride/carbon precursors require long-range diffusion, which is **[Reasonable Inference]** supported by the long high-temperature holds in TS1/TS3.

**F2/F3 — Route 4**  
Route 4 has manageable temperature but severe gas/precursor handling, based on SS4/TS5 NH₃/H₂ CVD. Its kinetics are moderate because thin-film growth bypasses bulk diffusion, but SS4/TS5 show nitride phase-window sensitivity and the target’s Ti:Re:C:N stoichiometry is likely narrow by **[Reasonable Inference]**.

**F2/F3 — Route 5**  
Route 5 is the most severe because SS1/SS3 require high pressure and high temperature for transition-metal nitrides. Its kinetic score is not catastrophic because HPHT can activate refractory precursors, but SS1 reports difficult phase control and the route is sample-size limited.

**F2/F3 — Route 6**  
Route 6 has mild nominal temperature because CS1 thermolysis occurs at 250–700 °C, but controlled atmosphere and precursor synthesis still add severity. Its kinetics are limited because CS1/CS5 demonstrate molecular or decomposition chemistry rather than crystallization of an extended Ti–Re–C–N lattice.

**F4 — Amorphization Tendency**  
The target does not clearly trigger the large-cell criterion because the supplied formula has 12 atoms, and a >15% Ti/Re radius mismatch is not established from CS/SS/TS. The mixed-connectivity criterion is triggered because the Target description reports face/edge-sharing Ti polyhedra and bridging C/N atoms, while TS4/CS4 show analogous mixed-connectivity frameworks. The resulting F4 score is low–medium risk rather than high risk.

---

### SECTION 6 — Synthesizability Interpretation

Ti₂Re₂CN₇ is more likely a **metastable or conditionally stable** phase than a confirmed ground-state phase because the target lacks a real E_hull value despite having negative predicted formation energy. The TS set supports the broader plausibility of stable multinary nitrides/carbides, while the SS set warns that structurally similar transition-metal nitrides can be substantially metastable or require specialized synthesis. The strongest enabling factor is access to high C/N chemical activity through cyanamide/flux or NH₃-based routes, especially because CS3 directly demonstrates crystalline C–N anion chemistry. The strongest limiting factor is phase control across Ti/Re/C/N with unusual N–N motifs and no exact analogue in CS/SS/TS. Overall, the material is plausible but challenging, with the best near-term route being flux-assisted halide/cyanamide metathesis followed by careful phase screening.

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:-:|:--:|:--|:--:|:--|
| 1 | All | Competing TiN, TiC, Re metal, Re nitride, and mixed carbide/nitride phases are likely by **[Reasonable Inference]** from target chemistry and SS/TS nitride phase complexity. | High | Use high anion activity and phase-screening; CS3 supports flux/cyanamide chemistry, SS2 supports NH₃ nitridation, and TS1/TS3 support controlled nitride annealing. |
| 2 | All | C/N stoichiometry and N–N motif retention are critical because the target is N-rich and contains short N–N bonds in the Target record. | High | Use Li₂(CN₂)/Li₃N excess in Route 1 from CS3/TS1, or dry NH₃ in Route 2 from SS2. |
| 3 | Route 1 | Halide volatility, corrosion, and moisture sensitivity can shift Ti:Re stoichiometry by **[Reasonable Inference]** from CS2/CS3 chloride sealed-tube practice. | Medium–High | Use anhydrous handling, sealed ampoules, slow ramps, and possible Ta/Nb liners; sealed inert practice is supported by CS2/CS3. |
| 4 | Route 2 / 4 | NH₃/H₂ gas chemistry creates safety and reduction risks, especially for Re-containing products by **[Reasonable Inference]** from CS1 and SS4/TS5. | Medium | Use dry NH₃ with controlled flow as in SS2, avoid overly H₂-rich conditions suggested by CS1 reduction behavior, and calibrate gas ratios as in SS4/TS5. |
| 5 | Route 3 | Slow ordering kinetics from refractory Ti/Re precursors are likely by **[Reasonable Inference]** and are consistent with long anneals in TS1/TS3. | High | Use fine powders, pellet/regrind cycles, long holds, and slow cooling; TS1/TS3/CS2 support these controls. |
| 6 | Route 4 | Ti/Re/C/N composition control may be narrow because SS4/TS5 report nitride phase-window sensitivity. | High | Use independent precursor flux calibration, lower growth rate, and post-deposition annealing; these are **[Reasonable Inference]** from SS4/TS5 CVD practice. |
| 7 | Route 5 | HPHT synthesis is equipment-limited and may produce small or mixed-phase samples, as SS1 reports difficult novel nitride phase control. | Medium–High | Screen pressure/temperature windows and quench under pressure; SS1/SS3 support HPHT nitride formation and quench/control strategies. |
| 8 | Route 6 | Molecular thermolysis may yield amorphous carbonitride or metallic Re/Ti rather than ordered Ti₂Re₂CN₇, because CS1 reports phase-variable reduced products and CS5 is molecular. | High | Replace H₂-rich thermolysis with NH₃/N₂/Ar and add flux-assisted annealing; this mitigation is **[Reasonable Inference]** from CS1/CS3. |
| 9 | All | Crystal growth and structure verification are difficult because the target is triclinic P1 with multiple inequivalent Ti/Re/N sites in the Target record. | Medium | Use slow cooling/flux growth and multiple characterization passes; slow cooling/sealed crystallization is supported by CS2/CS3/TS3. |