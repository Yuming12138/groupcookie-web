### SECTION 1 — Possible Synthesis Routes

#### Route 1: Sealed-autoclave solid-state nitridation using NaN₃ / Mg metal

| Field | Details |
|:--|:--|
| Reference basis | Closest thermodynamic/chemical analogue is **MgMoN₂**, synthesized from **Mo + Mg + NaN₃** in a sealed stainless-steel autoclave at **700 °C for 10 h** and reported at **E_hull = 0.0 eV/atom** (TS4). This is the strongest direct transferability signal because it contains Mg, a refractory transition metal, and N in a layered nitride structure with Mg–N ≈ 2.15 Å and Mo–N ≈ 2.12 Å, very close to target Mg–N = 2.16 Å and Re–N = 2.12 Å (TS4; Target). |
| Precursors | Mg powder or Mg turnings, ≥99.9%; Re powder, preferably fine/high surface area, ≥99.9%; NaN₃, dry, ≥99%; optional 5–15 mol% Mg excess to compensate Mg volatility [Reasonable Inference based on sealed Mg/NaN₃ route in TS4]. |
| Temperature program | Grind/mix under inert atmosphere → ramp 5–10 °C min⁻¹ to 650–750 °C → hold 10–24 h → furnace cool; repeat grinding/anneal if XRD shows residual Re [Reasonable Inference; TS4 used 10 °C min⁻¹, 700 °C, 10 h]. |
| Atmosphere | Sealed autoclave; internally generated N₂/N-active species from NaN₃ decomposition (TS4). Use Ar glovebox loading to limit Mg oxidation [Reasonable Inference]. |
| Pressure | Autogenous pressure in sealed stainless-steel autoclave, not GPa-scale high pressure (TS4). |
| Additional conditions | Acid/water washing to remove Na-containing byproducts, analogous to post-treatment in MgMoN₂ synthesis (TS4). Use fine Re powder because Re is refractory and diffusion-limited [Reasonable Inference]. |
| Transferability to target | Very high: TS4 is Mg–Mo–N with MgN₆ octahedra, M–N distances near 2.12 Å, and ground-state stability; substituting Re for Mo is chemically plausible because Re nitrides are known but may require stronger nitriding conditions in some cases (SS2/TS2; [Reasonable Inference]). |
| Estimated difficulty | **Moderate** |

#### Route 2: Molecular / metal-organic precursor ammonolysis

| Field | Details |
|:--|:--|
| Reference basis | Structurally similar **CrWN₂** was synthesized by ammonolysis of a chemically derived metallorganic precursor at **750 °C for 8 h in flowing NH₃**, using metal chlorides, chelation/hydrolysis, drying, and pyrolysis/ammonolysis (SS5). Structurally similar **MnWN₂** was prepared by ammonolysis of MnWO₄ at **800 °C for 24 h in dry NH₃**, although impurities were reported (SS1). |
| Precursors | Mg alkoxide, Mg nitrate, or Mg acetylacetonate; ReCl₅/Re₂O₇/ammonium perrhenate converted into mixed precursor; acetonitrile/triethylamine or citrate/gel route [Reasonable Inference from SS5 metal-chloride/chelating precursor chemistry]. |
| Temperature program | Form homogeneous Mg–Re precursor → dry at ~100–150 °C under vacuum → ramp to 700–800 °C under flowing NH₃ → hold 8–24 h → cool under NH₃ or N₂ (SS5; SS1). |
| Atmosphere | Flowing dry NH₃, typically 100–150 mL min⁻¹ scale in tube furnace by analogy to CrWN₂ (SS5). |
| Pressure | Ambient pressure flowing NH₃ (SS5; SS1). |
| Additional conditions | Homogeneous precursor formation is critical to overcome Re diffusion limitations [Reasonable Inference]. Use alumina/AlN crucible or quartz tube, as ammonolysis analogues used quartz tube, Al₂O₃ cups, or AlN crucible (SS1; SS5). |
| Transferability to target | Good for ternary transition-metal nitrides because SS5 demonstrates stoichiometric CrWN₂ from molecular mixing, while SS1 shows W-containing nitride formation by NH₃ ammonolysis; however, target contains Mg, which can volatilize or form Mg₃N₂ under NH₃, requiring Mg excess/sealed traps [Reasonable Inference]. |
| Estimated difficulty | **Moderate to Challenging** |

#### Route 3: High-pressure/high-temperature nitridation with Mg/Re/N source

| Field | Details |
|:--|:--|
| Reference basis | Re nitrides **Re₂N/Re₃N** were synthesized from Re + N under high-pressure/high-temperature conditions using a laser-heated diamond anvil cell (SS2; TS2). The target contains Re–N units with Re–N = 2.12 Å, close to Re₂N Re–N = 2.17 Å (Target; SS2/TS2). |
| Precursors | Re powder/foil; Mg₃N₂ or Mg metal plus N₂/NH₃-derived nitrogen source; optional pre-reacted Mg₃N₂ + Re mixture to avoid Mg loss [Reasonable Inference]. |
| Temperature program | Compress mixture to >5 GPa → laser or resistive heat to high temperature, likely >1000 °C → quench under pressure → decompress [Reasonable Inference from SS2/TS2 high-P/high-T Re nitride synthesis]. |
| Atmosphere | Encapsulated nitrogen source or N₂ medium in high-pressure cell [Reasonable Inference]. |
| Pressure | High pressure, likely multi-GPa; DAC or multi-anvil (SS2; TS2). |
| Additional conditions | Small sample volumes, careful Mg containment, and post-run phase identification required [Reasonable Inference]. |
| Transferability to target | Useful if Re–N bonding requires high nitrogen chemical potential; however, TS4 suggests Mg–transition-metal nitrides can form at 700 °C without GPa pressure, so high pressure is a fallback rather than first-choice route (TS4 vs SS2/TS2). |
| Estimated difficulty | **Challenging** |

**Evidence gaps / neutral-source notes:** CS gives no direct Mg–Re–N analogue; CS mostly contains U pnictides/nitrides and general solid-state nitride evidence, so for Mg/Re precursor choice and detailed route transferability there is **insufficient evidence from CS**, scored neutral at 50 where route-specific guidance is needed. SS gives useful structural nitride/ammonolysis and Re nitride signals (SS1, SS2, SS5). TS gives the strongest route signal via MgMoN₂ (TS4).

---

### SECTION 2 — Recommended Precursors

#### Route 1: Sealed-autoclave solid-state nitridation using NaN₃ / Mg metal

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Re powder, fine, ≥99.9% | Re source | Re is the target transition metal; Re nitrides are experimentally accessible under nitriding conditions, although high-P/high-T was used for Re₂N/Re₃N (SS2/TS2). Fine powder is recommended to improve diffusion [Reasonable Inference]. | Re is refractory; slow diffusion risk [Reasonable Inference]. |
| 2 | Mg powder/turnings, ≥99.9%, 5–15 mol% excess | Mg source | Mg metal was used successfully with Mo and NaN₃ to form MgMoN₂ at 700 °C (TS4). Excess Mg compensates for Mg volatility/side reactions [Reasonable Inference]. | Air-sensitive/oxidation-prone; volatile at elevated T [Reasonable Inference]. |
| 3 | NaN₃, dry, ≥99% | Nitrogen source / reactive nitridizer | NaN₃ was used directly in MgMoN₂ synthesis in sealed autoclave at 700 °C (TS4). | Toxic; decomposes to gas; sealed-system pressure hazard (TS4; [Reasonable Inference]). |
| 4 | Optional pre-made Mg₃N₂ | Alternative Mg/N source | Could reduce gas pressure and provide Mg–N bonding before reaction [Reasonable Inference]. | Air/moisture sensitive; may lower reactivity if coarse [Reasonable Inference]. |

#### Route 2: Molecular / metal-organic precursor ammonolysis

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | ReCl₅, Re₂O₇, or NH₄ReO₄ | Re source | Metal chlorides were used for CrWN₂ metallorganic precursor synthesis before ammonolysis (SS5); Re chloride/oxo salts are plausible Re sources [Reasonable Inference]. | ReCl₅/Re₂O₇ can be moisture-sensitive/oxidizing; NH₄ReO₄ may leave oxygen unless fully reduced/nitrided [Reasonable Inference]. |
| 2 | Mg nitrate, Mg acetate, Mg acetylacetonate, or Mg alkoxide | Mg source | Soluble Mg salts enable homogeneous Mg–Re mixing, analogous to chemically derived precursor strategy for CrWN₂ (SS5; [Reasonable Inference]). | Mg salts can introduce O/C residues; requires careful drying/decomposition [Reasonable Inference]. |
| 3 | NH₃ gas, dry | Nitrogen source / reducing-nitriding atmosphere | Flowing NH₃ was used to synthesize CrWN₂ at 750 °C and MnWN₂ at 800 °C (SS5; SS1). | Toxic/corrosive; reactive atmosphere penalty (SS5; SS1). |
| 4 | Acetonitrile + triethylamine / citrate gel reagents | Chelation and homogeneous precursor formation | CrWN₂ synthesis used acetonitrile and triethylamine to form a polymeric precursor before hydrolysis/ammonolysis (SS5). | Flammable/volatile organics; possible carbon contamination [Reasonable Inference]. |

#### Route 3: High-pressure/high-temperature nitridation

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Re powder/foil | Re source | Re₂N/Re₃N were synthesized from Re + N under high-P/high-T conditions (SS2/TS2). | Requires high nitrogen chemical potential; refractory metal [Reasonable Inference]. |
| 2 | Mg₃N₂ or Mg metal | Mg source | Mg must be supplied in contained form; Mg₃N₂ can provide both Mg and N while limiting Mg vapor loss [Reasonable Inference]. | Mg metal volatile; Mg₃N₂ moisture-sensitive [Reasonable Inference]. |
| 3 | N₂, azide, or solid nitrogen source | N source | Re nitrides require high-P/high-T nitrogen conditions in SS2/TS2; a contained N source is needed [Reasonable Inference]. | Pressure generation and gas evolution hazards [Reasonable Inference]. |
| 4 | BN/NaCl capsule medium | Encapsulation/pressure medium | High-pressure synthesis generally requires inert capsule/pressure medium [Reasonable Inference from DAC/multi-anvil methods in SS2/TS2]. | Possible reaction with Mg at high T [Reasonable Inference]. |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability

The target has **E_hull = 0.0000 eV/atom**, so it falls in the ≤0.05 eV/atom bin. This directly supports a high thermodynamic score (Target). TS4 MgMoN₂ is also on the hull, strengthening the analogy for Mg–transition-metal nitrides (TS4). CS has no direct Mg–Re–N thermodynamic analogue; **insufficient evidence from CS**, neutral 50 for source-specific signal.

**F1 Score: 95 / 100**

---

#### F2 + F3: Per-Route Scoring

##### Route 1: Sealed-autoclave solid-state nitridation using NaN₃ / Mg metal

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; 650–750 °C based on TS4 | 0 |
| T > 1400°C additional | No (TS4) | 0 |
| High pressure (>5 GPa) | No; sealed autoclave, not GPa (TS4) | 0 |
| Reactive/controlled atmosphere (H₂, NH₃, vacuum) | No external reactive gas; sealed system with NaN₃ [Reasonable Inference from TS4] | 0 |
| Volatile precursor requiring sealed system | Yes; Mg/NaN₃ sealed autoclave route (TS4; [Reasonable Inference]) | −10 |
| Multi-step process ≥3 steps | Borderline: mixing/heating/washing; count as no major synthetic sequence (TS4) | 0 |
| Toxic or air-sensitive precursors | Yes; NaN₃ toxic and Mg oxidation-sensitive (TS4; [Reasonable Inference]) | −10 |

**F2 Score for Route 1: 80 / 100**

**F3 — Reaction Kinetics**

- **Precursor activity: 55/100.** NaN₃ is a reactive nitrogen source and Mg is reactive, as used successfully for MgMoN₂ (TS4), but Re metal is dense/refractory [Reasonable Inference].
- **Ion diffusion difficulty: 25/100.** Re has a very high melting point and would normally diffuse slowly [Reasonable Inference]; however, TS4 demonstrates MgMoN₂ formation at 700 °C from Mg/Mo/NaN₃, suggesting reactive nitridation/liquid or vapor-assisted transport can partially bypass refractory-metal diffusion limits (TS4).
- **Structural reconstruction: 70/100.** TS4 provides a close Mg–M–N structural analogue with MgN₆ and M–N ≈2.12 Å, but the target has Mg(ReN)₂ stoichiometry and Re 3-coordinate units, so some reconstruction/ordering is still required (TS4; Target).

**F3 Score for Route 1: 50 / 100**

---

##### Route 2: Molecular / metal-organic precursor ammonolysis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; 700–800 °C analogues (SS5; SS1) | 0 |
| T > 1400°C additional | No (SS5; SS1) | 0 |
| High pressure (>5 GPa) | No; ambient flowing NH₃ (SS5; SS1) | 0 |
| Reactive/controlled atmosphere | Yes; flowing NH₃ (SS5; SS1) | −15 |
| Volatile precursor requiring sealed system | No sealed volatile precursor required, though Mg volatility remains a concern [Reasonable Inference] | 0 |
| Multi-step process ≥3 steps | Yes; precursor formation, hydrolysis/drying, ammonolysis in SS5 | −10 |
| Toxic or air-sensitive precursors | Yes; NH₃ and possible Re chlorides/metal chlorides (SS5; [Reasonable Inference]) | −10 |

**F2 Score for Route 2: 65 / 100**

**F3 — Reaction Kinetics**

- **Precursor activity: 80/100.** Molecular precursor routes provide intimate cation mixing, and SS5 explicitly used a polymeric metallorganic precursor for CrWN₂.
- **Ion diffusion difficulty: 60/100.** Re remains refractory [Reasonable Inference], but molecular mixing and nitridation reduce long-range cation diffusion compared with elemental solid-state reaction (SS5).
- **Structural reconstruction: 55/100.** The route likely converts an amorphous/oxide/organic precursor into crystalline nitride, requiring significant reconstruction; SS5 demonstrates this can work for CrWN₂, while SS1 reports impurity sensitivity for MnWN₂ ammonolysis.

**F3 Score for Route 2: 65 / 100**

---

##### Route 3: High-pressure/high-temperature nitridation

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | Likely yes; Re nitride synthesis used high temperatures (SS2/TS2) | −10 |
| T > 1400°C additional | Insufficient exact temperature from SS2/TS2; neutral/no deduction | 0 |
| High pressure (>5 GPa) | Yes; DAC/high-pressure synthesis (SS2/TS2) | −25 |
| Reactive/controlled atmosphere | Yes; high nitrogen chemical potential required (SS2/TS2; [Reasonable Inference]) | −15 |
| Volatile precursor requiring sealed system | Mg containment likely needed [Reasonable Inference] | −10 |
| Multi-step process ≥3 steps | Not necessarily; SS2/TS2 do not provide enough steps, neutral | 0 |
| Toxic or air-sensitive precursors | Mg/Mg₃N₂ air sensitivity likely [Reasonable Inference] | −10 |

**F2 Score for Route 3: 40 / 100**

**F3 — Reaction Kinetics**

- **Precursor activity: 40/100.** Elemental Re + N routes are chemically simple but rely on refractory Re and high-pressure nitrogen activation (SS2/TS2).
- **Ion diffusion difficulty: 45/100.** High temperature and pressure improve nitridation, but Mg/Re ordering into the ternary layered phase still requires cation rearrangement [Reasonable Inference].
- **Structural reconstruction: 60/100.** Re₂N has layered Re–N motifs and similar Re–N distances to the target, but Mg insertion and Mg/Re ordering are nontrivial (SS2/TS2; Target).

**F3 Score for Route 3: 48 / 100**

---

#### F4: Amorphization Tendency

| Check | Criterion | Triggered? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | Mg²⁺ octahedral radius is substantially larger than typical high-valent Re radii; estimated difference exceeds 15% [Reasonable Inference]. |
| C2 | Unit cell atom count >40 | No | P-3m1 layered target description implies a small crystallographic cell, not >40 atoms (Target). |
| C3 | Mixed vertex + edge + face sharing coexist | No | Target reports corner and edge sharing, but not face-sharing (Target). |

**F4 Score: 80 / 100**

---

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 80 | 50 | 95 | 80 | 77.0 |
| 2 | 65 | 65 | 95 | 80 | 77.0 |
| 3 | 40 | 48 | 95 | 80 | 66.5 |

| | |
|:--|:--|
| **Best Route** | Route 1: sealed-autoclave solid-state nitridation using NaN₃ / Mg metal |
| **Expert adjustment ±5** | **+3** — TS4 is an unusually strong transferability analogue because MgMoN₂ is an on-hull Mg–transition-metal nitride synthesized directly from Mg + refractory metal + NaN₃ at 700 °C; this slightly offsets the Re diffusion concern (TS4; [Reasonable Inference]). |
| **Final Synthesizability Score** | **80 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **650–800 °C** |
| Preferred atmosphere | Sealed autoclave with NaN₃-derived nitrogen; alternatively flowing dry NH₃ for ammonolysis |
| Pressure | Autogenous sealed-autoclave pressure for best route; high-pressure DAC/multi-anvil only as fallback |
| Estimated duration | 10–24 h initial hold; possible second anneal if residual Re or Mg₃N₂ forms |
| Critical control parameters | Mg excess, NaN₃ loading/autoclave fill fraction, Re particle size, exclusion of oxygen/moisture, washing of Na byproducts, avoidance of Mg loss |
| Basis | MgMoN₂ used Mg + Mo + NaN₃ in sealed autoclave at 700 °C for 10 h (TS4); CrWN₂ and MnWN₂ ammonolysis used 750–800 °C NH₃ (SS5; SS1); Re nitrides sometimes need high-P/high-T nitrogen conditions (SS2/TS2). |

---

### SECTION 5 — Scoring Rationale

#### F1 — Thermodynamic Stability

The target is reported at **E_hull = 0.0000 eV/atom**, so it is predicted as a ground-state phase by the provided thermodynamic data (Target). This justifies a high F1 score of 95 rather than merely metastable-range scoring. TS4 further supports the existence of stable Mg–transition-metal nitrides because MgMoN₂ is also reported at E_hull = 0.0 eV/atom (TS4). CS provides no direct Mg–Re–N hull analogue, so there is **insufficient evidence from CS**, neutral 50 for source-specific thermodynamic transferability.

#### F2/F3 — Route 1

The sealed-autoclave route has moderate condition severity because TS4 achieved MgMoN₂ at 700 °C for 10 h, avoiding >1000 °C and GPa pressure (TS4). Deductions come from sealed volatile/reactive components and NaN₃/Mg handling hazards (TS4; [Reasonable Inference]). Kinetics are the main weakness: Re is refractory and may not react fully at 700 °C, although TS4 shows that a similar Mg–Mo–N compound can form well below the transition-metal melting point. The close Mg–N and M–N bond-length match between MgMoN₂ and the target improves structural-transfer confidence (TS4; Target).

#### F2/F3 — Route 2

The ammonolysis route is penalized for flowing NH₃ and multi-step precursor preparation, directly supported by SS5 and SS1. Its kinetic score is better than elemental solid-state because SS5 demonstrates that chemically derived precursors can yield stoichiometric ternary nitrides by intimate cation mixing. However, SS1 reports impurity phases and sensitivity to kinetic parameters for MnWN₂, so phase purity is not guaranteed. Mg volatility and possible Mg₃N₂ formation remain uncertainties [Reasonable Inference].

#### F2/F3 — Route 3

High-pressure synthesis is strongly penalized because Re₂N/Re₃N were synthesized under high-pressure/high-temperature DAC conditions (SS2/TS2). The method could enable Re–N bonding if ambient-pressure nitridation fails, but it is experimentally demanding and low-throughput. Kinetically, high temperature and high nitrogen chemical potential help nitride formation, but ternary Mg/Re ordering is not demonstrated in SS2/TS2. Therefore, this is a fallback route rather than the recommended first attempt.

#### F4 — Amorphization Tendency

The target’s small P-3m1 layered unit and corner/edge-sharing network reduce amorphization risk (Target). The main amorphization/ordering risk is the large Mg–Re size and bonding contrast, which triggers C1 [Reasonable Inference]. C3 is not triggered because the target description gives corner and edge sharing but not simultaneous face sharing (Target). Overall, F4 = 80 reflects low-to-medium amorphization tendency.

---

### SECTION 6 — Synthesizability Interpretation

Mg(ReN)₂ is likely a **thermodynamic ground-state phase** because the provided target E_hull is 0.0000 eV/atom (Target). The strongest analogue is MgMoN₂, which is also on the hull and was synthesized from Mg + Mo + NaN₃ in a sealed autoclave at 700 °C (TS4). Structural evidence is supportive because MgMoN₂ has Mg–N ≈ 2.15 Å and Mo–N ≈ 2.12 Å, close to Mg–N = 2.16 Å and Re–N = 2.12 Å in the target (TS4; Target). The most critical enabling factor is a high nitrogen chemical potential in a sealed/reactive nitriding environment, as shown by NaN₃ autoclave synthesis and NH₃ ammonolysis analogues (TS4; SS5; SS1). The most critical limiting factor is slow reaction/ordering of refractory Re and possible Mg volatility or Mg₃N₂ side-phase formation [Reasonable Inference].

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|:--|:--:|:--|
| 1 | All | Re is refractory and may react slowly with nitrogen/Mg at moderate temperature | High | Use fine Re powder, repeat grinding/anneal, or use molecular precursor mixing; MgMoN₂ formed at 700 °C but Re may be less reactive than Mo [Reasonable Inference; TS4]. |
| 2 | Route 1 | NaN₃ decomposition creates pressure and safety hazard | High | Follow sealed-autoclave approach analogous to MgMoN₂, control fill fraction and ramp rate; TS4 used sealed autoclave at 700 °C. |
| 3 | Route 1 / All | Mg volatility and Mg oxidation can shift stoichiometry | Medium–High | Use sealed vessel, inert-atmosphere loading, and slight Mg excess [Reasonable Inference]; sealed Mg route is supported by TS4. |
| 4 | Route 2 | NH₃ atmosphere is toxic/corrosive and requires flow control | Medium | Use dry flowing NH₃ and tube-furnace setup as in CrWN₂ and MnWN₂ syntheses (SS5; SS1). |
| 5 | Route 2 | Competing impurity phases during ammonolysis | Medium–High | Optimize time, temperature, powder packing, and precursor homogeneity; SS1 reported MnWN₂ impurity sensitivity, while SS5 used homogeneous precursor chemistry to improve phase formation. |
| 6 | Route 3 | High-pressure synthesis is low-throughput and equipment-intensive | High | Reserve for cases where ambient-pressure/autoclave routes fail; Re₂N/Re₃N required DAC high-P/high-T conditions (SS2/TS2). |
| 7 | All | Mg/Re/N stoichiometry control may be narrow | Medium | Use careful precursor weighing, Mg excess screening, and phase analysis after washing; TS4 indicates pure MgMoN₂ is possible but morphology/conditions were sensitive. |
| 8 | All | Crystal growth or texturing may be difficult for layered MAX-like phase | Medium | Start with powder synthesis; if single crystals are needed, explore flux/transport only after phase is confirmed [Reasonable Inference]. Flux analogues show single crystals but also side phases in oxide/pnictide systems (TS1/TS3; CS5). |