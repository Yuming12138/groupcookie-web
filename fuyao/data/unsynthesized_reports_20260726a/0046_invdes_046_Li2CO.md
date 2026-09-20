> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -1.036 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

#### Route 1: High-Pressure Direct Solid-State Reaction

| Field | Details |
|:--|:--|
| Reference basis | High-pressure Li–C–O chemistry is directly supported by Li₂CO₃ work up to 25 GPa and below 1273 K, with Li₂CO₃/Li₂O/black Pt reported as starting materials or pressure-cell components [CS1]. |
| Precursors | Anhydrous Li₂O + high-purity graphite/diamond carbon; optional Pt/Au capsule or Pt powder as inert pressure-cell medium [CS1; Reasonable Inference]. |
| Temperature program | Pressurize first to ~10–25 GPa → heat 700–1000 °C for 0.5–96 h or laser-anneal briefly → quench under pressure → decompress slowly [CS1; Reasonable Inference]. |
| Atmosphere | Dry Ar/glovebox loading, then sealed high-pressure cell; moisture exclusion is required for Li₂O handling [Reasonable Inference]. |
| Pressure | High pressure, ~10–25 GPa, because the closest Li–C–O analogue was studied/synthesized under this range [CS1]. |
| Additional conditions | Fine grinding/pelletizing before loading; avoid H₂O/CO₂ contamination to suppress LiOH/Li₂CO₃ formation [Reasonable Inference]. |
| Transferability to target | Transferability is moderate because CS1 is chemically close Li–C–O, but its stable motif is carbonate CO₃²⁻ rather than the target Li₂CO stoichiometry with Li–C contacts [CS1; Reasonable Inference]. |
| Estimated difficulty | Challenging, due to multi-anvil/DAC pressure requirements and uncertain quenchability [CS1]. |

#### Route 2: Sealed Inert Solid-State Reaction from Reactive Li–C / Li–O Precursors

| Field | Details |
|:--|:--|
| Reference basis | Li₂CN₂ was synthesized from Li₃N and Li₂C₂ at 600 °C for 10 h under Ar, showing that Li–C anion frameworks can be accessed by inert solid-state chemistry [CS3]. Sealed/inert solid-state methods near 650–800 °C are also common in SS and TS analogues [SS1, TS1, TS4]. |
| Precursors | Preferred: anhydrous Li₂O + activated carbon/graphite; more reactive variant: Li₂C₂ + Li₂O₂ in stoichiometric 1:1 to form 2 Li₂CO [CS3; Reasonable Inference]. |
| Temperature program | Ramp 2–5 °C/min → hold 600–850 °C for 10–72 h → intermediate regrind if phase evolution is incomplete → cool 1–5 °C/h or quench depending on observed phase purity [CS3, SS1, TS1, TS4; Reasonable Inference]. |
| Atmosphere | Ar glovebox preparation and sealed Ta/Nb/quartz ampoule under Ar or mild vacuum [CS3, TS1, TS4]. |
| Pressure | Ambient pressure in sealed ampoule [CS3, TS1, TS4]. |
| Additional conditions | Use finely ground intimate mixtures, pressed pellets, oxygen-poor conditions, and possibly slight Li excess to buffer Li activity [CS3; Reasonable Inference]. |
| Transferability to target | Transferability is moderate-to-good because the target has Li–C and Li–O coordination, and CS3 demonstrates Li–C precursor chemistry under similar temperatures, although replacing N by O changes redox chemistry substantially [CS3; Reasonable Inference]. |
| Estimated difficulty | Moderate to Challenging, mainly due to air-sensitive/reactive precursors and competing Li₂O/Li₂CO₃/C phases [CS3; Reasonable Inference]. |

#### Route 3: Carbonate Melt / Flux Reduction Under Controlled CO/CO₂ Pressure

| Field | Details |
|:--|:--|
| Reference basis | Mixed carbonate phases were prepared by solid-state/melt routes at 800–900 °C under CO₂ pressure and by hydrothermal methods at 450 °C and 1 kbar [CS2, CS5]. |
| Precursors | Li₂CO₃ flux + Li₂O + graphite/carbon black; optional Li metal as reductant is an extrapolation to reduce carbonate oxygen content [CS2, CS5; Reasonable Inference]. |
| Temperature program | Ramp 2–3 °C/min → hold 700–900 °C for 1–7 d → slow cool 1–5 °C/h; use sealed pressure vessel or capsule to retain volatile CO/CO₂ species [CS2, CS5; Reasonable Inference]. |
| Atmosphere | Controlled CO/Ar or carefully buffered CO/CO₂; pure CO₂ is likely too oxidizing for Li₂CO [CS2, CS5; Reasonable Inference]. |
| Pressure | Autoclave/pressure bomb regime, ~0.1–1 kbar; this is adapted from carbonate synthesis under high CO₂ pressure [CS2, CS5; Reasonable Inference]. |
| Additional conditions | Carbonate flux may improve mass transport, but oxygen fugacity must be lower than in normal carbonate synthesis [CS2, CS5; Reasonable Inference]. |
| Transferability to target | Transferability is weak-to-moderate because carbonate analogues are chemically similar but favor CO₃²⁻ units, whereas the target Li₂CO requires a reduced Li–C–O framework [CS2, CS5; Reasonable Inference]. |
| Estimated difficulty | Challenging, due to narrow redox/oxygen-fugacity control [Reasonable Inference]. |

#### Route 4: Exploratory Thin-Film Kinetic Trapping

| Field | Details |
|:--|:--|
| Reference basis | Insufficient evidence from CS for Li–C–O thin-film growth; insufficient evidence from SS for Li–C–O thin-film growth; insufficient evidence from TS for Li–C–O thin-film growth, because TS vapor/transport analogues are halides rather than Li–C–O compounds [TS1, TS2; Reasonable Inference]. |
| Precursors | Composite PLD/sputter target of Li₂O + carbon with Li excess, or co-sputtered Li / C / O sources [Reasonable Inference]. |
| Temperature program | Deposit at 25–500 °C → post-anneal 300–700 °C under vacuum/Ar → rapid quench to retain metastable phase [Reasonable Inference]. |
| Atmosphere | High vacuum or Ar; oxygen partial pressure must be minimized to avoid Li₂CO₃ [Reasonable Inference]. |
| Pressure | Thin-film vacuum deposition pressure, not bulk pressure [Reasonable Inference]. |
| Additional conditions | Li overflux or Li-rich target is likely needed because Li can be volatile during energetic deposition [Reasonable Inference]. |
| Transferability to target | Transferability is speculative because no CS/SS/TS analogue demonstrates Li₂CO-type thin-film crystallization [Reasonable Inference]. |
| Estimated difficulty | Challenging, due to Li volatility and narrow Li:C:O composition control [Reasonable Inference]. |

---

### SECTION 2 — Recommended Precursors

#### Route 1: High-Pressure Direct Solid-State Reaction

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Li₂O, anhydrous, ≥99.9% | Li/O source | Li₂O appears in the closest Li–C–O high-pressure reference basis [CS1]. | Hygroscopic/caustic; dry handling needed [Reasonable Inference]. |
| 2 | Graphite, diamond powder, or carbon black, ≥99.99% | C source | Direct Li₂O + C gives the target Li₂CO stoichiometry [Reasonable Inference]. | Carbon activity may be low; fine powder required [Reasonable Inference]. |
| 3 | Pt/Au capsule or Pt powder | Inert containment/pressure medium | Black Pt is listed in CS1 high-pressure work, supporting noble-metal compatibility in pressure cells [CS1]. | Possible catalytic side reactions are not established by CS/SS/TS; treat as low but uncertain risk [Reasonable Inference]. |

#### Route 2: Sealed Inert Solid-State Reaction

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Li₂O, anhydrous | Li/O source | Provides Li and O in the target ratio when combined with carbon [Reasonable Inference]. | Hygroscopic/caustic; must exclude H₂O/CO₂ [Reasonable Inference]. |
| 2 | Activated carbon or graphite | C source | Direct carbon addition is stoichiometric for Li₂O + C → Li₂CO [Reasonable Inference]. | Slow solid-state reaction with Li₂O is likely [Reasonable Inference]. |
| 3 | Li₂C₂ | Reactive Li–C source | Li₂C₂ was used successfully in Li₂CN₂ synthesis at 600 °C under Ar [CS3]. | Air/moisture sensitive and may require prior synthesis [CS3]. |
| 4 | Li₂O₂ | Reactive O source for Li₂C₂ route | Li₂C₂ + Li₂O₂ balances directly to 2 Li₂CO [Reasonable Inference]. | Oxidizer; may over-oxidize carbon toward carbonate [Reasonable Inference]. |
| 5 | Li metal, optional small excess | Li chemical-potential buffer | Li excess can compensate Li loss and reduce oxygen-rich impurities [Reasonable Inference]. | Air-sensitive and reactive; volatile at elevated temperature [Reasonable Inference]. |

#### Route 3: Carbonate Melt / Flux Reduction

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Li₂CO₃ | Carbonate flux / Li–C–O source | Li₂CO₃ is the closest chemical analogue and is used in high-pressure Li–C–O chemistry [CS1]. | Favors carbonate phases rather than Li₂CO [CS1; Reasonable Inference]. |
| 2 | Li₂O | Li/O activity adjuster | Li₂O is part of the Li–C–O high-pressure reference basis [CS1]. | Hygroscopic; can carbonate in air [Reasonable Inference]. |
| 3 | Graphite/carbon black | Reductant and C source | Carbon is needed to reduce carbonate oxygen content toward Li₂CO [Reasonable Inference]. | CO/CO₂ generation can shift stoichiometry [Reasonable Inference]. |
| 4 | Li metal, optional | Strong reductant / Li buffer | May help suppress oxygen-rich carbonate products [Reasonable Inference]. | Air-sensitive, reactive, and volatile at high T [Reasonable Inference]. |
| 5 | CO or CO/Ar gas mixture | Oxygen-fugacity buffer | Controlled gas pressure is extrapolated from CO₂-pressure carbonate synthesis [CS2, CS5; Reasonable Inference]. | CO is toxic and volatile [Reasonable Inference]. |

#### Route 4: Exploratory Thin-Film Kinetic Trapping

| Rank | Precursor | Role | Justification | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Li₂O–C composite target | Li/O/C source | Directly matches the target elemental set [Reasonable Inference]. | Target fabrication and phase homogeneity are uncertain [Reasonable Inference]. |
| 2 | Li-rich co-sputter source | Li compensation | Li overflux may be needed because Li can be lost during deposition/annealing [Reasonable Inference]. | Li is air-sensitive and volatile [Reasonable Inference]. |
| 3 | Graphite target | Carbon source | Carbon co-deposition enables independent C control [Reasonable Inference]. | Carbon incorporation may produce amorphous C or carbide byproducts [Reasonable Inference]. |
| 4 | Trace O₂ / oxide target oxygen | O source | Oxygen must be supplied without over-oxidizing to Li₂CO₃ [Reasonable Inference]. | Narrow oxygen window and carbonate formation risk [Reasonable Inference]. |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability (Weight: 30%)

| E_hull Evidence | Interpretation |
|:--|:--|
| Target E_hull is not reported, and the placeholder 0.000 eV/atom must not be used as stability evidence [Target note; Reasonable Inference]. | Candidate-specific hull stability is uncertain. |
| CS contains mixed evidence: Li₂CO₃ has E_hull ≈0.067 eV/atom and Li₂CN₂ has E_hull =0, but Na–Li/Ca carbonates include very high E_hull values up to ~2.21 eV/atom [CS1, CS2, CS3, CS5]. | Chemical analogues support possible formation but not uniformly low hull stability. |
| SS analogues are structurally similar but chemically unrelated halides/oxides, so SS gives insufficient evidence for Li₂CO thermodynamic stability and is treated as neutral 50 for F1 [SS1–SS5]. | Weak thermodynamic transferability. |
| TS analogues are thermodynamically close and mostly near the hull, with E_hull values of 0–0.0059 eV/atom for several entries [TS1–TS5]. | Thermodynamic similarity supports a metastable-to-near-stable possibility. |

**F1 Score: 60 / 100**

#### F2 + F3: Per-Route Scoring

##### Route 1: High-Pressure Direct Solid-State Reaction

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; CS1 reports below 1273 K, approximately ≤1000 °C [CS1]. | 0 |
| T > 1400°C additional | No [CS1]. | 0 |
| High pressure (>5 GPa) | Yes; CS1 uses up to 25 GPa [CS1]. | −25 |
| Reactive/controlled atmosphere | No direct H₂/NH₃/vacuum analogue is required for the pressure-cell reaction; dry loading is inferred [CS1; Reasonable Inference]. | 0 |
| Volatile precursor requiring sealed system | No volatile reagent is required in the preferred Li₂O + C route [Reasonable Inference]. | 0 |
| Multi-step process (≥3 steps) | Yes; grinding, pressure loading, heating/annealing, quench/decompression are required [CS1]. | −10 |
| Toxic or air-sensitive precursors | Yes; Li₂O is moisture-sensitive and requires dry handling [Reasonable Inference]. | −10 |

**F2 Score for Route 1: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 50 | Li₂O and graphite are stable solids, so reactivity is lower than nitrates/sol-gel precursors [Reasonable Inference]. |
| Ion diffusion difficulty | 90 | Li is the only cation and is highly mobile relative to multivalent refractory cations; CS1 demonstrates Li–C–O processing below ~1000 °C [CS1; Reasonable Inference]. |
| Structural reconstruction | 40 | Forming the target Li–C/O P1 framework from Li₂O + C requires major reconstruction rather than topotactic conversion [Reasonable Inference]. |

**F3 Score for Route 1: 60 / 100**

##### Route 2: Sealed Inert Solid-State Reaction

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; CS3 uses 600 °C and related solid-state analogues use ~650–800 °C [CS3, SS1]. | 0 |
| T > 1400°C additional | No [CS3, SS1]. | 0 |
| High pressure (>5 GPa) | No; CS3 and TS sealed-ampoule routes operate at ambient pressure [CS3, TS1, TS4]. | 0 |
| Reactive/controlled atmosphere | No deduction for Ar-only route; vacuum variants would trigger this deduction [CS3, TS1]. | 0 |
| Volatile precursor requiring sealed system | Yes; sealed ampoules are recommended to control Li/CO/O loss [TS1, TS4; Reasonable Inference]. | −10 |
| Multi-step process (≥3 steps) | Yes; dry mixing, pelletizing, sealing, heating, and possible regrinding are required [CS3, SS1]. | −10 |
| Toxic or air-sensitive precursors | Yes; Li₂C₂/Li metal variants are air-sensitive, and Li₂C₂ requires controlled preparation [CS3; Reasonable Inference]. | −10 |

**F2 Score for Route 2: 70 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 60 | Li₂C₂ is a reactive Li–C precursor used successfully in CS3, while Li₂O + C alone is less reactive [CS3; Reasonable Inference]. |
| Ion diffusion difficulty | 95 | Li is the only cation, and CS3 achieves a Li–C–anion product at 600 °C in 10 h under Ar [CS3]. |
| Structural reconstruction | 40 | The target requires creating Li–C and C–O bonding rather than simply preserving a known precursor framework [Reasonable Inference]. |

**F3 Score for Route 2: 65 / 100**

##### Route 3: Carbonate Melt / Flux Reduction

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; carbonate analogues use 450–900 °C [CS2, CS5]. | 0 |
| T > 1400°C additional | No [CS2, CS5]. | 0 |
| High pressure (>5 GPa) | No; CS5 uses 1 kbar, far below 5 GPa [CS5]. | 0 |
| Reactive/controlled atmosphere | Yes; CO₂ or controlled CO/CO₂ pressure is central to carbonate/flux control [CS2, CS5; Reasonable Inference]. | −15 |
| Volatile precursor requiring sealed system | Yes; CO/CO₂ retention and carbonate decomposition control require sealing [CS2, CS5; Reasonable Inference]. | −10 |
| Multi-step process (≥3 steps) | Yes; loading, sealing, heating, cooling/quenching, washing/separation are expected [CS5; Reasonable Inference]. | −10 |
| Toxic or air-sensitive precursors | Yes if CO or Li metal is used; CO toxicity and Li reactivity are inferred risks [Reasonable Inference]. | −10 |

**F2 Score for Route 3: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 75 | Carbonate melt/flux chemistry can improve contact and transport relative to dry Li₂O + C [CS2, CS5; Reasonable Inference]. |
| Ion diffusion difficulty | 90 | Li is the only cation, and carbonate analogues form at 450–900 °C under pressure/flux-like conditions [CS2, CS5]. |
| Structural reconstruction | 15 | Converting carbonate CO₃²⁻ chemistry to reduced Li₂CO requires strong redox and bonding reconstruction, making this the kinetic bottleneck [CS2, CS5; Reasonable Inference]. |

**F3 Score for Route 3: 60 / 100**

##### Route 4: Exploratory Thin-Film Kinetic Trapping

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; proposed deposition/anneal is ≤700 °C [Reasonable Inference]. | 0 |
| T > 1400°C additional | No [Reasonable Inference]. | 0 |
| High pressure (>5 GPa) | No [Reasonable Inference]. | 0 |
| Reactive/controlled atmosphere | Yes; high vacuum/controlled Ar is required [Reasonable Inference]. | −15 |
| Volatile precursor requiring sealed system | Yes; Li volatility/composition loss is expected [Reasonable Inference]. | −10 |
| Multi-step process (≥3 steps) | Yes; target preparation, deposition, annealing, and quench/characterization are required [Reasonable Inference]. | −10 |
| Toxic or air-sensitive precursors | Yes if Li-rich targets or Li metal are used [Reasonable Inference]. | −10 |

**F2 Score for Route 4: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor vapor availability | 55 | Li, C, and O can be supplied by targets/gases, but Li volatility makes vapor-phase stoichiometry difficult [Reasonable Inference]. |
| Crystallization pathway | 40 | No CS/SS/TS analogue confirms direct Li–C–O crystallization by deposition, so post-annealing/metastable trapping is speculative [TS1, TS2; Reasonable Inference]. |
| Composition control | 35 | Li:C:O ratio is likely narrow because excess oxygen favors carbonate and Li loss favors carbon/oxide impurities [Reasonable Inference]. |

**F3 Score for Route 4: 43 / 100**

#### F4: Amorphization Tendency (Weight: 20%)

| Check | Trigger? | Basis |
|:--:|:--:|:--|
| C1: Cation ionic radius difference >15% | No | The target has only Li as a cation, so cation-radius mismatch is not triggered [Reasonable Inference]. |
| C2: Unit cell atom count >40 | No | The described P1 target has two Li sites, one C site, and one O site, implying a small primitive cell rather than >40 atoms [Reasonable Inference]. |
| C3: Mixed vertex + edge + face sharing coexist | No | The target description reports distorted corner-sharing LiC₃O₂ trigonal bipyramids but does not report simultaneous edge/face/corner sharing [Reasonable Inference]. |

Insufficient direct amorphization evidence from CS, SS, and TS for the target itself; source-only F4 signals are therefore treated as neutral 50, while the target-structure checks give 0 triggers [CS1–CS5, SS1–SS5, TS1–TS5; Reasonable Inference].

**F4 Score: 92 / 100**

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 55 | 60 | 60 | 92 | 65 |
| 2 | 70 | 65 | 60 | 92 | 70 |
| 3 | 55 | 60 | 60 | 92 | 65 |
| 4 | 55 | 43 | 60 | 92 | 61 |

| | |
|:--|:--|
| **Best Route** | Route 2 — Sealed Inert Solid-State Reaction |
| **Expert adjustment (±5)** | −3, because the target has no reported convex-hull or phonon validation and the Li₂CO stoichiometry is chemically unusual relative to carbonate/cyanamide analogues [CS1, CS3; Reasonable Inference]. |
| **Final Synthesizability Score** | **67 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | 600–850 °C, based on Li₂CN₂ synthesis at 600 °C and related sealed solid-state analogues at 650–800 °C [CS3, SS1, TS1]. |
| Preferred atmosphere | Ar glovebox preparation and sealed Ar ampoule; vacuum is possible but increases severity [CS3, TS1, TS4]. |
| Pressure | Ambient pressure sealed ampoule for Route 2; high-pressure 10–25 GPa is backup Route 1 [CS1, CS3]. |
| Estimated duration | 10–72 h for Route 2, with longer 3–16 d holds possible if ordering is slow [CS3, TS1, TS4]. |
| Critical control parameters | Anhydrous handling, fine grinding, Li:C:O stoichiometry, suppression of CO₂/H₂O, sealed containment, and possible Li excess to buffer Li loss [CS3, TS4; Reasonable Inference]. |
| Basis | Route 2 is primarily supported by CS3 Li₂C₂-based inert synthesis and TS/SS sealed solid-state processing practices [CS3, SS1, TS1, TS4]. |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target lacks a reported E_hull, so the placeholder 0.000 eV/atom cannot be used as ground-state evidence [Target note; Reasonable Inference]. CS gives mixed thermodynamic support because Li₂CO₃ and Li₂CN₂ are low-hull examples, while some chemically similar Na/Li/Ca carbonate entries are very high in hull energy [CS1, CS2, CS3, CS5]. TS gives stronger analogue support because several thermodynamic neighbors are at or very near the hull, but those TS entries are chemically dissimilar halides/tellurides [TS1–TS5]. The final F1 score is therefore moderate rather than high [CS1–CS5, TS1–TS5; Reasonable Inference].

**F2 — Route 1**  
Route 1 is penalized heavily for >5 GPa pressure because the closest Li–C–O high-pressure evidence uses up to 25 GPa [CS1]. Temperature is not penalized because CS1 reports conditions below 1273 K, approximately ≤1000 °C [CS1]. The remaining penalties come from multi-step pressure-cell workflow and dry handling of Li₂O [CS1; Reasonable Inference].

**F3 — Route 1**  
Kinetics are mixed because Li mobility is favorable but Li₂O + carbon is not a highly reactive precursor pair [CS1; Reasonable Inference]. The main kinetic barrier is reconstructing dense Li–O and carbon networks into the target Li–C/O framework [Reasonable Inference]. High pressure may help densification but does not guarantee phase-selective ordering [CS1; Reasonable Inference].

**F2 — Route 2**  
Route 2 avoids high pressure and stays below 1000 °C, which is favorable relative to the F2 rubric [CS3, SS1]. It is penalized for sealed-system operation, multi-step processing, and air-sensitive Li–C/Li-rich precursor variants [CS3, TS4; Reasonable Inference]. Ar handling is directly supported by Li₂CN₂ synthesis under Ar [CS3].

**F3 — Route 2**  
Route 2 has the best kinetics because CS3 demonstrates a Li₂C₂-derived Li–C–anion phase at 600 °C in 10 h [CS3]. Li is the only cation, so cation diffusion should be easier than in multication refractory systems [Reasonable Inference]. The structural-reconstruction score remains limited because the target requires a reduced Li–C–O bonding motif not directly demonstrated in CS3 [CS3; Reasonable Inference].

**F2 — Route 3**  
Route 3 avoids >5 GPa pressure but requires controlled CO/CO₂ pressure and sealed vessels, which are supported by carbonate-pressure references [CS2, CS5]. The redox-adjusted version introduces CO toxicity or Li-metal reactivity, which increases severity [Reasonable Inference]. Its operational burden is comparable to pressure-bomb carbonate synthesis [CS2, CS5].

**F3 — Route 3**  
Flux/melt conditions can improve transport because carbonate analogues are made from melts or hydrothermal media [CS2, CS5]. The kinetic penalty is severe because carbonate chemistry naturally stabilizes CO₃²⁻ units, while Li₂CO requires a reduced oxygen-poor Li–C–O framework [CS2, CS5; Reasonable Inference]. This makes Route 3 more useful as exploratory chemistry than as the primary route [Reasonable Inference].

**F2 — Route 4**  
Route 4 avoids bulk high pressure and very high temperatures, but it requires vacuum, target preparation, and volatile Li management [Reasonable Inference]. CS/SS/TS provide insufficient direct evidence for Li–C–O thin-film synthesis, so this route is speculative [CS1–CS5, SS1–SS5, TS1–TS5]. The F2 penalty mainly reflects process complexity rather than furnace severity [Reasonable Inference].

**F3 — Route 4**  
Thin-film kinetics could kinetically trap metastable phases, but no CS/SS/TS analogue verifies direct crystallization of Li₂CO by vapor deposition [CS1–CS5, SS1–SS5, TS1–TS5]. Li volatility and oxygen over-incorporation make composition control the dominant challenge [Reasonable Inference]. The resulting F3 score is the lowest among the proposed routes [Reasonable Inference].

**F4 — Amorphization Tendency**  
The prescribed F4 checks give no triggers because the target has a single cation species, a small described primitive P1 cell, and no reported coexistence of vertex/edge/face-sharing polyhedra [Reasonable Inference]. SS analogues often contain mixed polyhedral sharing, but that structural detail cannot be transferred directly to the target [SS1, SS4; Reasonable Inference]. The F4 score is therefore high, with the caveat that P1 low symmetry may still indicate a narrow ordering window [Reasonable Inference].

---

### SECTION 6 — Synthesizability Interpretation

Li₂CO is more likely a metastable or near-stable predicted phase than a confirmed ground-state phase because no candidate-specific convex-hull or phonon validation is reported [Target note; Reasonable Inference]. The best support comes from CS3, which shows Li–C anion chemistry under mild inert solid-state conditions, and from TS analogues, which show near-hull thermodynamic neighbors, although those TS compounds are chemically dissimilar [CS3, TS1–TS5]. The most critical enabling factor is high Li mobility and access to reactive Li–C precursors such as Li₂C₂ under Ar [CS3; Reasonable Inference]. The most critical limiting factor is competition with stable Li₂O, Li₂CO₃, carbon, and oxygen-rich carbonate chemistry [CS1, CS2, CS5; Reasonable Inference]. Overall, synthesis is plausible but not straightforward, with Route 2 recommended first and Route 1 as the pressure-stabilized fallback [CS1, CS3; Reasonable Inference].

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy |
|:--:|:--:|:--|:--:|:--|
| 1 | All | Competing Li₂CO₃ / Li₂O / C phases are likely because carbonate analogues are well established in Li–C–O chemistry [CS1, CS2, CS5]. | High | Exclude H₂O/CO₂, use controlled stoichiometry, and screen oxygen-poor conditions [CS1, CS2, CS5; Reasonable Inference]. |
| 2 | Route 2 | Air-sensitive Li₂C₂ or Li-rich precursors complicate handling [CS3]. | Med | Use Ar glovebox mixing, sealed ampoules, and dry precursor storage as in Li₂CN₂ synthesis [CS3]. |
| 3 | Route 1 | High-pressure equipment and quenchability are major barriers because CS1 uses up to 25 GPa and reports difficult pressure-dependent phase behavior [CS1]. | High | Use multi-anvil screening before DAC optimization and quench under pressure [CS1; Reasonable Inference]. |
| 4 | Route 3 | Oxygen fugacity window is narrow because carbonate routes favor CO₃²⁻ chemistry rather than reduced Li₂CO [CS2, CS5; Reasonable Inference]. | High | Use CO/Ar buffering and carbon/Li₂O ratios rather than pure CO₂ conditions [CS2, CS5; Reasonable Inference]. |
| 5 | All | Slow ordering or incomplete reaction may occur in solid-state routes [SS1, TS4]. | Med | Use fine grinding, pelletizing, intermediate grinding, and extended anneals; these tactics are reported in related solid-state routes [SS1, TS4]. |
| 6 | Route 4 | Li volatility and Li:C:O stoichiometry control are difficult in thin films [Reasonable Inference]. | High | Use Li-rich targets/overflux and low-temperature post-annealing [Reasonable Inference]. |
| 7 | All | Crystal growth for structure confirmation may be difficult because several analogues rely on slow cooling or long holds for crystalline products [TS1, TS4, CS5]. | Med | Apply slow cooling of ~1–2 °C/h or longer anneals when powder XRD shows poor crystallinity [TS1, TS4, CS5]. |