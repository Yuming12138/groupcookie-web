> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.543 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

#### Route 1: Low-Temperature Azide/Cyanide Coordination Crystallization

| Field | Details |
|:--|:--|
| Reference basis | Structurally similar N-rich azides and dicyanamide frameworks form by aqueous/ethanol precipitation or cooling crystallization at room temperature to 356 K, including K/Rb/Cs–Au–N and Cd–azide analogues [SS]. The target contains short N–N distances of ~1.16–1.20 Å and a C–N distance of 1.19 Å, consistent with azide/cyanide-like ligands [Reasonable Inference]. Insufficient evidence from CS and TS for solution crystallization of this exact Eu–Re–C–N phase; both are neutral 50 for this route. |
| Precursors | EuCl2 or EuCl3, preformed Re(V) nitrido/azido chloride complex, NaN3 or KN3, NaCN/KCN or Na[N(CN)2], water/ethanol/acetonitrile solvent [SS][Reasonable Inference]. |
| Temperature program | Dissolve/mix at 20–25 °C → hold 12–24 h → optional slow cooling from 60–85 °C to room temperature over 1–3 days → slow evaporation or diffusion crystallization up to ~20 days [SS][Reasonable Inference]. |
| Atmosphere | Ambient is supported for several SS azide analogues, but an inert N2/Ar blanket is recommended if Eu(II) or Re(V) precursors are used [SS][Reasonable Inference]. |
| Pressure | Ambient for evaporation/crystallization; optional autogenous solvothermal pressure below high-pressure regime if sealed-vial screening is used [SS][Reasonable Inference]. |
| Additional conditions | Very dilute solutions, low light exposure, neutral-to-basic pH if cyanide is present, no isolation of large dry heavy-metal azide/cyanide cakes [SS][Reasonable Inference]. |
| Transferability to target | Best match to the target’s apparent azide/cyanide ligand chemistry and low-temperature molecular assembly needs; the major adaptation is supplying a Re-centered nitrido/azido synthon rather than simple Au/Cd/Co salts [SS][Reasonable Inference]. |
| Estimated difficulty | Challenging. |

#### Route 2: Sealed-Ampoule Halide Metathesis / LiCl–KCl Flux

| Field | Details |
|:--|:--|
| Reference basis | Thermodynamic analogues use rare-earth halides with Li2(CN2) in sealed ampoules under Ar/vacuum at 450–650 °C, sometimes with LiCl/KCl flux [TS]. Chemically similar transition-metal halide compounds use volatile halides in sealed silica/quartz tubes at 600–750 °C [CS]. Insufficient evidence from SS for high-temperature metathesis; SS is neutral 50 for this route. |
| Precursors | Anhydrous EuCl2 or EuCl3, ReCl5/ReCl3, Li2(CN2), Li3N or NaN3/LiN3 as nitrogen source, LiCl/KCl flux [CS][TS][SS][Reasonable Inference]. |
| Temperature program | Glovebox grind → ramp 1–2 °C/min to 200–250 °C hold 6–12 h → ramp to 450–600 °C hold 2–7 days → slow cool 1–5 °C/h [CS][TS][Reasonable Inference]. |
| Atmosphere | Dry Ar handling; evacuated or sealed ampoule reaction [CS][TS]. |
| Pressure | Ambient internal pressure in sealed ampoule; not high-pressure synthesis [CS][TS]. |
| Additional conditions | Use LiCl/KCl flux to improve mass transport, keep temperature below aggressive azide decomposition where possible, and test small batches because Re halides and azides can generate pressure [TS][SS][Reasonable Inference]. |
| Transferability to target | Strong for rare-earth C–N metathesis and sealed halide chemistry, but weaker for preserving N–N azide motifs at elevated temperature [TS][SS][Reasonable Inference]. |
| Estimated difficulty | Challenging. |

#### Route 3: Reactive Nitride/Carbodiimide Flux from EuN/ReN or Metals

| Field | Details |
|:--|:--|
| Reference basis | Thermodynamic analogues show SrCN2/BaCN2-type carbodiimides made from metal nitrides plus melamine under Ar, and rare-earth carbodiimides made from RE halides plus Li2(CN2) in ampoules [TS]. CS supports sealed high-temperature handling for transition-metal compounds, but insufficient evidence from CS for nitride/melamine chemistry beyond sealed-tube practice; CS is neutral 50 for route-specific chemistry. Insufficient evidence from SS for high-temperature nitride routes; SS is neutral 50. |
| Precursors | EuN or Eu metal, Re/Re3N/ReN or ReCl5, melamine/dicyandiamide/Li2(CN2), optional LiCl/KCl flux [TS][CS][Reasonable Inference]. |
| Temperature program | Ball-mill or agate-grind under Ar → 220 °C hold ~2 days → 650–850 °C hold 2–5 days → slow cool, with lower-temperature screening first [TS][Reasonable Inference]. |
| Atmosphere | Ar or sealed evacuated ampoule with moisture/oxygen excluded [TS]. |
| Pressure | Ambient/sealed ampoule pressure; no >5 GPa pressure indicated [TS]. |
| Additional conditions | Flux addition and repeated grinding may be needed to overcome Re diffusion limitations [TS][Reasonable Inference]. |
| Transferability to target | Plausible for Eu–C–N frameworks but least compatible with intact azide-like N–N units because high-temperature nitride routes favor carbodiimide/nitride products [TS][SS][Reasonable Inference]. |
| Estimated difficulty | Challenging. |

---

### SECTION 2 — Recommended Precursors

#### Route 1: Low-Temperature Azide/Cyanide Coordination Crystallization

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuCl2, EuI2, or EuCl3·6H2O | Eu source | Eu salts are required; Eu(II) may better charge-balance azide/cyanide-rich frameworks, while Eu(III) is easier to screen in solution [Reasonable Inference]. | Eu(II) salts are air/moisture-sensitive; Eu(III) salts are hygroscopic. |
| 2 | Preformed Re(V) nitrido/azido chloride complex | Re source | Target has Re–N tetrahedral coordination, so a preorganized Re–N synthon is preferred over Re metal [Reasonable Inference]. | Toxic/oxidizing; may be air- or moisture-sensitive. |
| 3 | NaN3 or KN3 | Azide/N–N ligand source | SS analogues use KN3/RbN3/CsN3/TlN3/HN3 to form N-rich azide frameworks [SS]. | Explosive with heavy metals; toxic. |
| 4 | NaCN/KCN or Na[N(CN)2] | C–N ligand source | SS includes dicyanamide precipitation chemistry, and the target C–N bond suggests cyanide-like bonding [SS][Reasonable Inference]. | Cyanides are acutely toxic; acidification can release HCN. |
| 5 | Water/ethanol/acetonitrile | Crystallization medium | SS azide analogues use aqueous or ethanol solutions and evaporation/cooling crystallization [SS]. | Solvent pressure if sealed; flammable for ethanol/acetonitrile. |

#### Route 2: Sealed-Ampoule Halide Metathesis / LiCl–KCl Flux

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Anhydrous EuCl2 or EuCl3 | Eu source | TS rare-earth carbodiimides use RE halides with Li2(CN2); EuCl2 is a charge-state screen for Eu-rich nitride/cyanide phases [TS][Reasonable Inference]. | Air/moisture-sensitive, especially EuCl2. |
| 2 | ReCl5 or ReCl3 | Re source | CS supports sealed-tube reactions using volatile transition-metal chlorides such as TaCl5, NbCl5, and WCl4 [CS]. | Volatile at synthesis temperature; air-sensitive/toxic. |
| 3 | Li2(CN2) | Carbonitride source | TS directly uses Li2(CN2) to make rare-earth carbodiimides/cyanamides [TS]. | Requires dry handling; may require prior synthesis. |
| 4 | Li3N and/or NaN3/LiN3 | Additional nitrogen / azide source | TS uses nitrides/melamine for carbodiimides, while SS supports azide ligand chemistry [TS][SS][Reasonable Inference]. | Li3N is air/moisture-sensitive; azides are explosive. |
| 5 | LiCl/KCl flux | Flux and diffusion aid | TS rare-earth carbodiimide synthesis uses KCl/LiCl flux in sealed ampoules [TS]. | Hygroscopic salts; washing may alter sensitive phases. |

#### Route 3: Reactive Nitride/Carbodiimide Flux from EuN/ReN or Metals

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuN or Eu metal | Eu/nitride source | TS carbodiimide routes use metal nitrides such as Sr2N/Ba3N2 with melamine [TS]. | Air-sensitive; Eu metal is reactive. |
| 2 | Re powder, Re3N, or ReN | Re source | Re nitride or activated Re avoids relying entirely on volatile Re halides [Reasonable Inference]. | Re metal is refractory and slow to react. |
| 3 | Melamine or dicyandiamide | C–N source | TS reports carbodiimides from metal nitrides plus excess melamine under Ar [TS]. | Decomposes and can generate gas pressure in sealed systems. |
| 4 | Li2(CN2) | Alternative C–N source | TS repeatedly uses Li2(CN2) for rare-earth C–N frameworks [TS]. | Air/moisture-sensitive; prior synthesis may be needed. |
| 5 | LiCl/KCl flux | Flux and crystal growth aid | TS flux-assisted rare-earth carbodiimide synthesis improves crystallinity [TS]. | Hygroscopic; post-reaction washing can affect products. |

---

### SECTION 3 — Synthesizability Score

#### F1: Thermodynamic Stability (Weight: 30%)

| Evidence item | Signal used | Source score |
|:--|:--|:--:|
| Target E_hull | Candidate-specific convex-hull energy is not reported, so no ≤0.05 eV/atom ground-state claim is made [Reasonable Inference]. | — |
| Target formation energy | Negative predicted formation energy supports possible thermodynamic viability but does not prove hull stability [Reasonable Inference]. | — |
| CS analogues | Several chemically similar halide analogues are reported at or near the hull, but their halide chemistry is not directly transferable to Eu–Re–C–N [CS]. | 65 |
| SS analogues | High structural-similarity N-rich azides/dicyanamides include elevated hull energies around 0.21–0.53 eV/atom, suggesting metastability risk [SS]. | 40 |
| TS analogues | Thermodynamic analogues are rare-earth carbodiimide/cyanamide phases at E_hull = 0.0 eV/atom, supporting related C–N framework stability [TS]. | 85 |

| E_hull (eV/atom) | Score |
|:--:|:--:|
| Not reported; scored from negative formation energy plus CS/SS/TS analogues | 62 |

**F1 Score: 62 / 100**

---

#### F2 + F3: Per-Route Scoring

##### Route 1: Low-Temperature Azide/Cyanide Coordination Crystallization

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No [SS] | 0 |
| T > 1400°C additional | No [SS] | 0 |
| High pressure > 5 GPa | No [SS] | 0 |
| Reactive/controlled atmosphere | No required by SS; inert blanket only recommended [SS][Reasonable Inference] | 0 |
| Volatile precursor requiring sealed system | Yes if solvothermal or HN3/volatile solvent screening is used [SS][Reasonable Inference] | −10 |
| Multi-step process ≥3 steps | Yes: Re synthon preparation, mixing, crystallization, isolation [SS][Reasonable Inference] | −10 |
| Toxic or air-sensitive precursors | Yes: azides/cyanides and possible Eu(II)/Re(V) precursors [SS][Reasonable Inference] | −10 |

**F2 Score for Route 1: 70 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 65 | Soluble azides and dicyanamide/cyanide salts are highly reactive in SS precipitation analogues, but the required Re synthon is specialized [SS][Reasonable Inference]. |
| Ion diffusion difficulty | 85 | Solution crystallization avoids solid-state diffusion limits; this is an extrapolation because the rubric is bulk-route oriented [Reasonable Inference]. |
| Structural reconstruction | 30 | SS analogues match N-rich ligand motifs but not the full Eu–Re–C–N topology, so the assembly pathway is uncertain [SS][Reasonable Inference]. |

**F3 Score for Route 1: 60 / 100**

##### Route 2: Sealed-Ampoule Halide Metathesis / LiCl–KCl Flux

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; TS/CS routes are mostly 450–750 °C [CS][TS] | 0 |
| T > 1400°C additional | No [CS][TS] | 0 |
| High pressure > 5 GPa | No [CS][TS] | 0 |
| Reactive/controlled atmosphere | Yes: dry Ar, vacuum, sealed ampoules [CS][TS] | −15 |
| Volatile precursor requiring sealed system | Yes: ReCl5/ReCl3 analogy to volatile metal halides [CS][Reasonable Inference] | −10 |
| Multi-step process ≥3 steps | Yes: glovebox mixing, sealing, staged heating, flux removal [TS][Reasonable Inference] | −10 |
| Toxic or air-sensitive precursors | Yes: Eu halides, Re halides, Li2(CN2), azides/nitrides [CS][TS][SS][Reasonable Inference] | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 70 | Halide metathesis with Li2(CN2) is active in TS analogues, and volatile transition-metal halides react in sealed CS routes [CS][TS]. |
| Ion diffusion difficulty | 40 | Re is a refractory cation if reduced/metallic intermediates form, but halide/flux chemistry should partly bypass dense-metal diffusion [CS][TS][Reasonable Inference]. |
| Structural reconstruction | 45 | TS supports rare-earth C–N frameworks, but the target requires simultaneous cyanide/azide/nitrido ordering and long sealed heating [TS][SS][Reasonable Inference]. |

**F3 Score for Route 2: 52 / 100**

##### Route 3: Reactive Nitride/Carbodiimide Flux from EuN/ReN or Metals

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; TS nitride/carbodiimide routes are below ~980 °C [TS] | 0 |
| T > 1400°C additional | No [TS] | 0 |
| High pressure > 5 GPa | No [TS] | 0 |
| Reactive/controlled atmosphere | Yes: Ar/vacuum, oxygen/moisture exclusion [TS] | −15 |
| Volatile precursor requiring sealed system | Yes: melamine decomposition gases or sealed ampoule chemistry [TS][Reasonable Inference] | −10 |
| Multi-step process ≥3 steps | Yes: precursor activation, grinding, staged heating, possible regrinding [TS][Reasonable Inference] | −10 |
| Toxic or air-sensitive precursors | Yes: Eu metal/EuN and possible azide/nitride reagents [TS][Reasonable Inference] | −10 |

**F2 Score for Route 3: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Rationale |
|:--|:--:|:--|
| Precursor activity | 40 | Metal nitrides and Re/ReN are less reactive than soluble salts or halides; TS nitride routes need long staged heating [TS][Reasonable Inference]. |
| Ion diffusion difficulty | 20 | Re-containing dense or refractory intermediates make cation diffusion difficult, even with flux assistance [Reasonable Inference]. |
| Structural reconstruction | 35 | High-temperature nitride/carbodiimide routes can form C–N frameworks, but they are poorly matched to preserving azide-like N–N units [TS][SS][Reasonable Inference]. |

**F3 Score for Route 3: 32 / 100**

---

#### F4: Amorphization Tendency (Weight: 20%)

| Check | Criterion | Applies? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference >15% | Yes | Eu and Re have substantially different expected coordination radii and bonding preferences [Reasonable Inference]. |
| C2 | Unit cell atom count >40 | No | The provided target formula and P1 description list 13 crystallographic atoms per formula-level structure [Reasonable Inference]. |
| C3 | Mixed vertex + edge + face sharing coexist | No confirmed trigger | CS halide analogues show mixed corner/edge/face sharing, but the target description does not confirm that coexistence; SS and TS provide insufficient target-specific evidence, so SS/TS are neutral 50 for this check [CS][SS][TS]. |

| Triggers | Score | Risk Level |
|:--:|:--:|:--:|
| 1 | 78 | Low–Medium |

**F4 Score: 78 / 100**

---

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 70 | 60 | 62 | 78 | 66.7 |
| 2 | 55 | 52 | 62 | 78 | 61.0 |
| 3 | 55 | 32 | 62 | 78 | 56.0 |

| | |
|:--|:--|
| **Best Route** | Route 1 — Low-Temperature Azide/Cyanide Coordination Crystallization |
| **Expert adjustment (±5)** | −5, because no CS/SS/TS source gives a direct Eu–Re–C–N analogue, E_hull is unreported, and azide/cyanide/Re speciation creates a narrow synthesis window [CS][SS][TS][Reasonable Inference]. |
| **Final Synthesizability Score** | **62 / 100** |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | 20–85 °C for primary solution crystallization; optional ≤120 °C solvothermal screening [SS][Reasonable Inference]. |
| Preferred atmosphere | Ambient or N2/Ar blanket; inert handling is preferred if Eu(II) or Re(V) precursors are used [SS][Reasonable Inference]. |
| Pressure | Ambient for evaporation/diffusion crystallization; autogenous sealed-vial pressure only for solvothermal screens [SS][Reasonable Inference]. |
| Estimated duration | 12–24 h initial precipitation screen; 3–20 days for slow crystallization [SS]. |
| Critical control parameters | Dilute solutions, slow evaporation/cooling, strict ligand stoichiometry, preformed Re–N synthon, light exclusion where azide complexes are photosensitive, and avoidance of dry heavy-metal azide accumulation [SS][Reasonable Inference]. |
| Basis | SS is the primary basis for low-temperature N-rich azide/dicyanamide crystallization; TS supports C–N rare-earth framework stability but not the exact solution route; CS provides little direct signal for Route 1 and is neutral 50 for this route [SS][TS][CS]. |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The target has no reported convex-hull energy, so it cannot be scored as a confirmed ground-state phase [Reasonable Inference]. CS analogues are mostly stable or near-hull halides, which supports synthetic precedent for chemically complex inorganic phases but is only partially transferable to Eu–Re–C–N chemistry [CS]. SS analogues are structurally close N-rich phases but include high E_hull values around 0.21–0.53 eV/atom, which pulls the score downward toward metastability risk [SS]. TS analogues are all on-hull rare-earth carbodiimide/cyanamide-type phases, so the final F1 score is moderate rather than low [TS].

**F2/F3 — Route 1**  
Route 1 receives the best condition score because SS azide and dicyanamide analogues form at room temperature to mild heating without high pressure [SS]. The main deductions are safety and process complexity from azides, cyanides, and the need for a Re-centered precursor [SS][Reasonable Inference]. Kinetics are favorable for solution diffusion, but the lack of a direct Eu–Re structural analogue makes controlled assembly the key uncertainty [SS][Reasonable Inference]. CS and TS provide insufficient direct evidence for this solution route and are treated as neutral 50 for route-specific evidence [CS][TS].

**F2/F3 — Route 2**  
Route 2 is supported by TS metathesis chemistry using rare-earth halides and Li2(CN2), and by CS sealed-tube reactions using volatile transition-metal chlorides [CS][TS]. The route is penalized for dry Ar/vacuum handling, sealed volatile halides, multiple operations, and toxic or air-sensitive precursors [CS][TS][SS]. Kinetics are moderate because halide/flux metathesis improves precursor activity, but Re-containing intermediates and mixed cyanide/azide/nitrido ordering are likely slow [CS][TS][Reasonable Inference]. SS offers insufficient evidence for high-temperature preservation of azide-like motifs and is neutral 50 for this route [SS].

**F2/F3 — Route 3**  
Route 3 is supported by TS nitride/melamine and rare-earth carbodiimide syntheses, but those reactions require inert atmospheres and long heating [TS]. The route is kinetically weakest because EuN/ReN/Re precursors are less reactive than soluble salts or halides, and Re diffusion is expected to be slow [TS][Reasonable Inference]. The route also risks converting the target’s N–N-containing motifs into simpler nitride/carbodiimide phases at high temperature [TS][SS][Reasonable Inference]. CS and SS provide insufficient direct evidence for this nitride/melamine Eu–Re target route and are neutral 50 for route-specific chemistry [CS][SS].

**F4 — Amorphization Tendency**  
One amorphization trigger is assigned because Eu and Re have strongly different size/coordination preferences, increasing local strain and ordering difficulty [Reasonable Inference]. The unit-cell atom-count trigger is not assigned because the target formula-level structure is small rather than >40 atoms [Reasonable Inference]. The mixed vertex/edge/face-sharing trigger is not assigned because only CS halide analogues explicitly show corner/edge/face coexistence, while the target does not confirm this connectivity [CS][Reasonable Inference]. SS and TS are insufficient for target-specific face-sharing evidence and are neutral 50 for that check [SS][TS].

---

### SECTION 6 — Synthesizability Interpretation

Eu2ReCN9 is more likely a metastable or narrow-window phase than a confirmed ground-state material because its E_hull is unreported and structurally similar N-rich analogues include high hull energies [SS][Reasonable Inference]. TS analogues provide the strongest positive thermodynamic signal because rare-earth C–N frameworks can be on-hull and made by metathesis routes [TS]. SS analogues provide the strongest structural synthesis signal because azide/dicyanamide-like N-rich frameworks can crystallize at low temperature [SS]. The most critical enabling factor is low-temperature ligand-directed crystallization that can preserve N–N and C–N units [SS][Reasonable Inference]. The most critical limiting factor is simultaneous control of Eu oxidation/coordination, Re–N speciation, cyanide/azide safety, and competing simpler rare-earth C–N phases [SS][TS][Reasonable Inference].

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy (from CS/SS/TS) |
|:--:|:--:|:--|:--:|:--|
| 1 | All | Unknown convex-hull and phonon stability create ground-state uncertainty. | High | Treat as exploratory; prioritize small-scale screening and compare products by PXRD against predicted pattern [Reasonable Inference]. |
| 2 | All | Azide/cyanide chemistry creates explosive/toxic handling risk. | High | Use dilute solution screens, avoid dry heavy-metal azide buildup, and follow the low-temperature SS crystallization style [SS][Reasonable Inference]. |
| 3 | Route 1 | Re precursor speciation may not deliver the target ReN4 tetrahedral environment. | High | Use preformed Re–N complexes rather than Re metal, then screen ligand ratios slowly [Reasonable Inference]. |
| 4 | Route 1 | Stoichiometry control across Eu, Re, CN, and N3-like ligands is narrow. | Medium | Use slow diffusion/evaporation and small stoichiometry matrices, analogous to SS crystallization screens [SS][Reasonable Inference]. |
| 5 | Route 2 | Volatile Re halide loss or ampoule pressure can change composition. | High | Use sealed ampoules and staged ramps, following CS/TS sealed-tube practice [CS][TS]. |
| 6 | Route 2 | High temperature may destroy azide-like N–N motifs. | High | Keep maximum temperature as low as possible and use flux to reduce required reaction temperature [SS][TS][Reasonable Inference]. |
| 7 | Route 3 | Refractory Re/ReN diffusion can prevent homogeneous ordering. | High | Prefer halide or flux-mediated precursors over dense Re metal when possible [CS][TS][Reasonable Inference]. |
| 8 | All | Competing rare-earth carbodiimide/nitride phases may form. | Medium | Use TS temperature windows and flux control, then adjust C/N activity through Li2(CN2), azide, and nitride source ratios [TS][SS][Reasonable Inference]. |