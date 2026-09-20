> **Stability-data note:** The source does not report a convex-hull energy for this candidate. A numeric value of 0.000000 eV/atom was used only as a compatibility placeholder during similarity retrieval and is not evidence that E_hull = 0.
>
> Source evidence: Predicted formation energy = -0.760 eV/atom. Negative formation energy predicted by the authors' ML model after DPA-2 relaxation; no candidate-specific convex-hull or phonon validation was reported.

### SECTION 1 — Possible Synthesis Routes

#### Route 1: High-Pressure Controlled Azide/Nitride Decomposition

| Field | Details |
|:--|:--|
| Reference basis | Structurally/thermodynamically similar alkaline-earth diazenides SrN2, BaN2, and CaN2 were synthesized by controlled azide decomposition at 3–12 GPa and 450–800 °C, preserving short N–N units comparable to the target’s N–N contacts; CS gives only indirect azide chemistry support, so **insufficient evidence from CS for high-pressure necessity; CS neutral signal = 50**. (SS-1–3; TS-1–3; CS-1/5) |
| Precursors | Eu(N3)2 or Eu3N2 + azide nitrogen donor; ReNx or fine Re powder; optional NaN3/NH4N3 nitrogen reservoir. Eu azide use is a **[Reasonable Inference]** from alkaline-earth azide routes, not directly shown for Eu. (SS-1–3; TS-1–3; [Reasonable Inference]) |
| Temperature program | Compress at room temperature → heat to ~750–900 °C for ~15–60 min → quench or controlled cool → decompress; higher upper temperature than Sr/Ba/Ca diazenides is a **[Reasonable Inference]** to activate Re chemistry. (SS-1–3; TS-1–3; [Reasonable Inference]) |
| Atmosphere | Encapsulated high-pressure assembly loaded under dry Ar/glovebox conditions because analogous azides/nitrides are moisture sensitive. (SS-1–3; TS-1–3) |
| Pressure | 6–10 GPa target window, extrapolated from 3–12 GPa alkaline-earth diazenide synthesis. (SS-1–3; TS-1–3; [Reasonable Inference]) |
| Additional conditions | BN or inert capsule, very small batch, slow pressure release, and avoidance of water/oxygen; these handling requirements follow azide/diazenide sensitivity. (SS-1–3; TS-1–3) |
| Transferability to target | Best transfer for stabilizing N–N-containing nitrides, but ReN5 coordination and Eu/Re ordering are not directly represented in SS/TS; this is a **[Reasonable Inference]**. (SS-1–3; TS-1–3; [Reasonable Inference]) |
| Estimated difficulty | **Challenging**, due to GPa pressure, hazardous azide chemistry, and no direct Eu–Re analogue. (SS-1–3; TS-1–3; [Reasonable Inference]) |

#### Route 2: Sealed Nb/Ta Ampoule Solid-State Nitridation

| Field | Details |
|:--|:--|
| Reference basis | Eu nitride chemistry is represented by LiEu4(BN2)3 from Li/Li3N/EuN/BN in sealed Nb at 1950 K, and heavy transition-metal nitridometalate chemistry is represented by Ba6Os2N6O from Ba/Os/N2 at 800–825 °C; CS also supports sealed-tube solid-state handling for W chloride and NaTa3N5 routes. (SS-4; TS-4/5; CS-2/3) |
| Precursors | Eu3N2 or EuN; ReNx preferred over dense Re powder; Li3N or NaN3 as nitrogen chemical-potential buffer; use anhydrous, oxygen-free powders. (SS-4; TS-4/5; [Reasonable Inference]) |
| Temperature program | Ramp 1–3 °C/min → hold ~800–950 °C for 24–72 h → regrind/anneal if needed → cool 1–3 °C/min; this combines TS-5’s 800–825 °C multistep nitride annealing with lower-temperature retention of N–N motifs inferred from SS/TS diazenides. (TS-5; SS-1–3; [Reasonable Inference]) |
| Atmosphere | Sealed Nb/Ta ampoule under Ar or evacuated/inert backfill; strict dry handling. (SS-4; TS-4/5; CS-2/3) |
| Pressure | Ambient internal pressure, with autogenous nitrogen pressure if azide/nitride donor decomposes. (TS-5; [Reasonable Inference]) |
| Additional conditions | Intermediate grinding, slight nitrogen-source excess, and oxygen exclusion; TS-5 needed repeated anneals to remove impurities, supporting iterative processing. (TS-5; CS-3) |
| Transferability to target | Transfers Eu–N and heavy-metal–N solid-state chemistry, but the target’s N–N-rich P1 framework is more complex than Eu boron nitride or Ba/Os nitride analogues. (SS-4; TS-4/5; [Reasonable Inference]) |
| Estimated difficulty | **Challenging**, mainly because Re diffusion is slow and nitrogen loss/phase competition are likely. (TS-5; [Reasonable Inference]) |

#### Route 3: Alkali-Azide/Nitride Reactive Flux or Metathesis

| Field | Details |
|:--|:--|
| Reference basis | CS shows azide-rich Au compounds formed from metal chloride/alkali azides at low temperature, CS-3 shows Na insertion/topochemical nitride chemistry at 450–600 °C, SS-5 shows complex azide crystallization, and CS-2 shows sealed chloride solid-state chemistry near 600 °C. (CS-1/2/3/5; SS-5) |
| Precursors | EuCl2 or Eu3N2; ReCl5/ReCl3 or ReNx; Li3N/NaN3/KN3; optional LiCl/KCl or NaCl/KCl flux. Chloride-to-nitride metathesis for Eu–Re–N is a **[Reasonable Inference]** from chloride/azide analogues. (CS-1/2/3/5; SS-5; [Reasonable Inference]) |
| Temperature program | Load/seal under Ar → ramp slowly to ~500–650 °C → hold 2–7 days → slow cool 0.5–2 °C/h to promote crystallization; this borrows the 450–600 °C topochemical window and 600 °C sealed-tube precedent. (CS-2/3; [Reasonable Inference]) |
| Atmosphere | Sealed Ni/Nb/Ta tube or evacuated silica-in-metal secondary containment under Ar; dry handling required because azides/nitrides are sensitive. (CS-2/3; SS-5; [Reasonable Inference]) |
| Pressure | Ambient sealed-tube pressure; possible autogenous N2 pressure from azide decomposition. (CS-1/5; SS-5; [Reasonable Inference]) |
| Additional conditions | Use alkali flux to improve mass transport, keep Eu:Re near 3:1, and remove alkali halide by washing only if the product is stable to the workup; washing stability is **[Reasonable Inference]**. (CS-1/3/5; SS-5; [Reasonable Inference]) |
| Transferability to target | Best route for balancing high nitrogen activity with lower temperature and improved crystallization, but alkali incorporation is a major risk because several analogues retain alkali cations. (CS-1/3/5; SS-5; [Reasonable Inference]) |
| Estimated difficulty | **Moderate–Challenging**, because equipment is simpler than high pressure but phase purity and safety are difficult. (CS-1/3/5; SS-5) |

#### Route 4: Reactive Thin-Film Nitridation / PLD or Co-Sputtering

| Field | Details |
|:--|:--|
| Reference basis | No CS/SS/TS entry reports thin-film synthesis; **insufficient evidence from CS, SS, and TS for thin-film transferability; each source neutral signal = 50**. This route is included only as a metastable-screening **[Reasonable Inference]**. |
| Precursors | Eu and Re metal targets, or EuNx/ReNx ceramic targets; N2 or NH3 plasma as nitrogen source. ([Reasonable Inference]) |
| Temperature program | Deposit at ~300–600 °C → optional post-anneal at ~500–700 °C under activated nitrogen; low temperature is chosen to reduce nitrogen loss. ([Reasonable Inference]) |
| Atmosphere | Ar/N2 sputter plasma or NH3/N2 plasma; oxygen and water must be minimized. ([Reasonable Inference]) |
| Pressure | Low-pressure plasma deposition, not bulk high pressure. ([Reasonable Inference]) |
| Additional conditions | Eu/Re flux calibration, nitrogen-rich plasma, substrate screening, and protective capping to limit Eu oxidation. ([Reasonable Inference]) |
| Transferability to target | Could access metastable Eu–Re–N compositions, but there is no analogue support for crystallizing the target P1 N–N framework as a film. ([Reasonable Inference]; insufficient evidence from CS/SS/TS) |
| Estimated difficulty | **Challenging**, due to crystallization and stoichiometry control rather than equipment severity. ([Reasonable Inference]) |

---

### SECTION 2 — Recommended Precursors

#### Route 1: High-Pressure Controlled Azide/Nitride Decomposition

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Eu3N2 or Eu(N3)2 | Eu source and nitrogen reservoir | Eu nitride/azide selection is inferred from Eu–N precedent in SS-4/TS-4 and alkaline-earth azide decomposition in SS-1–3/TS-1–3. | Air-sensitive; Eu azide would require prior synthesis and is energetic. |
| 2 | ReNx or very fine Re powder | Re source | ReNx is preferred by **[Reasonable Inference]** to reduce diffusion barriers; TS-5 supports heavy transition-metal nitride formation from Os/N2. | Re metal is refractory; Re nitrides may require prior synthesis. |
| 3 | NaN3 or NH4N3 | Extra nitrogen / N–N unit source | Azide-derived nitrogen-rich products are directly supported by SS-1–3/TS-1–3 and CS-1/5. | Explosive/energetic; volatile decomposition products. |
| 4 | BN capsule | Containment medium | BN crucibles are used in high-pressure diazenide analogues. (SS-1–3; TS-1–3) | Possible B contamination if capsule reacts. |

#### Route 2: Sealed Nb/Ta Ampoule Solid-State Nitridation

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Eu3N2 or EuN | Eu source | EuN is used in LiEu4(BN2)3 synthesis, supporting Eu nitride transfer. (SS-4; TS-4) | Air/moisture sensitive; may require prior synthesis. |
| 2 | ReNx, Re3N, or fine Re powder | Re source | Heavy transition-metal nitride chemistry is supported by Os–N analogue TS-5; ReNx use is **[Reasonable Inference]** to improve reactivity. | Re powder is refractory; ReNx may be metastable. |
| 3 | Li3N or NaN3 | Nitrogen chemical-potential buffer | Li3N is used in SS-4/TS-4; azide nitrogen activity is supported by SS-1–3/TS-1–3. | Li3N air-sensitive; azides energetic. |
| 4 | N2 gas or sealed autogenous N2 | Nitrogen atmosphere | TS-5 forms Ba6Os2N6O under dry N2. | N loss/pressure buildup in sealed systems. |

#### Route 3: Alkali-Azide/Nitride Reactive Flux or Metathesis

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | EuCl2, EuCl3, or Eu3N2 | Eu source | Chloride/azide metathesis is inferred from CS-1/5 metal chloride + azide routes and CS-2 sealed chloride chemistry. | Eu halides/nitrides are air-sensitive and hygroscopic. |
| 2 | ReCl5/ReCl3 or ReNx | Re source | Metal chloride activation is supported indirectly by HAuCl4 azide chemistry and WCl4 sealed-tube chemistry; Re choice is **[Reasonable Inference]**. (CS-1/2/5) | Re chlorides are moisture-sensitive/corrosive; ReNx may require prior synthesis. |
| 3 | Li3N, NaN3, or KN3 | Nitride/azide donor | Alkali azides are central to CS-1/5 and SS-5; Li3N is supported by SS-4/TS-4. | Explosive/energetic for azides; Li3N air-sensitive. |
| 4 | LiCl/KCl or NaCl/KCl flux | Transport medium | Flux use is **[Reasonable Inference]** to improve crystallization and diffusion; CS-3 and CS-2 support lower-temperature sealed reactions. | Alkali/halide contamination risk. |

#### Route 4: Reactive Thin-Film Nitridation / PLD or Co-Sputtering

| Rank | Precursor | Role | Justification (CS/SS/TS or [Reasonable Inference]) | Risk |
|:--:|:--|:--|:--|:--|
| 1 | Eu metal or EuNx target | Eu source | Thin-film target choice is **[Reasonable Inference]**; no CS/SS/TS thin-film evidence. | Eu oxidizes readily; vapor/flux instability. |
| 2 | Re metal or ReNx target | Re source | Thin-film Re source is **[Reasonable Inference]**; no CS/SS/TS thin-film evidence. | Re is refractory; ReNx target may require prior synthesis. |
| 3 | N2 or NH3 plasma | Nitrogen source | Activated nitrogen is **[Reasonable Inference]** for nitrogen-rich film growth; no CS/SS/TS thin-film evidence. | Reactive gas/plasma hazard; nitrogen stoichiometry difficult. |
| 4 | Protective cap layer | Oxidation barrier | Capping is **[Reasonable Inference]** from Eu air sensitivity; no CS/SS/TS thin-film evidence. | May complicate characterization. |

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

The target has no valid reported E_hull, so the placeholder 0.000 eV/atom is not used; analogue evidence is mixed, with SS/TS diazenides and Eu/Os nitrides at E_hull = 0 but CS azide analogues also including high-hull synthesized phases near 0.51–0.53 eV/atom. (SS-1–4; TS-1–5; CS-1/5)  
**Insufficient evidence from CS/SS/TS for a candidate-specific convex hull or phonon stability; this uncertainty caps F1 below the 90–100 ground-state range.**

---

#### F2 + F3: Per-Route Scoring

##### Route 1: High-Pressure Controlled Azide/Nitride Decomposition

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; SS/TS analogues use 450–800 °C, with 750–900 °C target extrapolation. (SS-1–3; TS-1–3; [Reasonable Inference]) | 0 |
| T > 1400°C additional | No. (SS-1–3; TS-1–3) | 0 |
| High pressure > 5 GPa | Yes; route uses 6–10 GPa from 3–12 GPa analogues. (SS-1–3; TS-1–3) | −25 |
| Reactive/controlled atmosphere | No separate reactive gas; dry loading is required but not scored as H2/NH3/vacuum. (SS-1–3; TS-1–3) | 0 |
| Volatile precursor requiring sealed system | Yes; azide decomposition creates autogenous nitrogen pressure. (SS-1–3; TS-1–3) | −10 |
| Multi-step process ≥ 3 steps | Yes; precursor preparation/loading/HP heating/recovery. (SS-1–3; TS-1–3) | −10 |
| Toxic or air-sensitive precursors | Yes; azides and Eu nitrides are hazardous/sensitive. (SS-1–3; TS-1–3; [Reasonable Inference]) | −10 |

**F2 Score for Route 1: 45 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 75 | Azides are highly reactive nitrogen sources in SS/TS diazenides and CS azide compounds. (SS-1–3; TS-1–3; CS-1/5) |
| Ion diffusion difficulty | 25 | Re is refractory and likely diffusion-limiting; modest credit is given because high-pressure azide decomposition can generate reactive nitrogen locally. ([Reasonable Inference]; SS-1–3; TS-1–3) |
| Structural reconstruction | 35 | N–N motifs transfer from diazenide/azide analogues, but ReN5 + Eu polyhedral ordering is not directly represented. (SS-1–3; TS-1–3; [Reasonable Inference]) |

**F3 Score for Route 1: 45 / 100**

##### Route 2: Sealed Nb/Ta Ampoule Solid-State Nitridation

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No for recommended 800–950 °C window; higher SS-4/TS-4 temperature is avoided to retain N–N motifs. (TS-5; SS-4; [Reasonable Inference]) | 0 |
| T > 1400°C additional | No in recommended window. ([Reasonable Inference]) | 0 |
| High pressure > 5 GPa | No; sealed ampoule is ambient-pressure bulk synthesis. (TS-5; CS-2/3) | 0 |
| Reactive/controlled atmosphere | Yes; sealed inert/vacuum/N2 handling is required. (SS-4; TS-4/5; CS-2/3) | −15 |
| Volatile precursor requiring sealed system | Yes; nitrogen donors and nitrogen loss require sealing. (SS-4; TS-5; [Reasonable Inference]) | −10 |
| Multi-step process ≥ 3 steps | Yes; grinding, sealing, annealing, regrinding/reannealing are expected from TS-5 precedent. (TS-5) | −10 |
| Toxic or air-sensitive precursors | Yes; Eu nitrides, Li3N, and azides are air-sensitive or hazardous. (SS-4; TS-4; SS-1–3) | −10 |

**F2 Score for Route 2: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 50 | EuN/Li3N are reactive nitride precursors, but Re/ReNx remains comparatively difficult. (SS-4; TS-4/5; [Reasonable Inference]) |
| Ion diffusion difficulty | 25 | Heavy transition-metal diffusion is likely slow; TS-5 required repeated heating/grinding for Os nitride phase control. (TS-5; [Reasonable Inference]) |
| Structural reconstruction | 30 | A complete reconstruction from binary nitrides/metals to P1 Eu3ReN9 is required. (SS-4; TS-5; [Reasonable Inference]) |

**F3 Score for Route 2: 35 / 100**

##### Route 3: Alkali-Azide/Nitride Reactive Flux or Metathesis

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; recommended 500–650 °C is based on CS sealed/topochemical windows. (CS-2/3) | 0 |
| T > 1400°C additional | No. (CS-2/3) | 0 |
| High pressure > 5 GPa | No; sealed-tube ambient-pressure route. (CS-2/3; SS-5) | 0 |
| Reactive/controlled atmosphere | Yes; sealed inert/vacuum handling is needed. (CS-2/3; SS-5) | −15 |
| Volatile precursor requiring sealed system | Yes; azides/nitrogen donors can decompose and pressurize the tube. (CS-1/5; SS-5) | −10 |
| Multi-step process ≥ 3 steps | Yes; drying/loading, reaction, slow cooling, and flux removal/phase isolation. (CS-1/3/5; SS-5; [Reasonable Inference]) | −10 |
| Toxic or air-sensitive precursors | Yes; azides, Eu halides/nitrides, and Re chlorides are hazardous or air-sensitive. (CS-1/2/5; SS-5; [Reasonable Inference]) | −10 |

**F2 Score for Route 3: 55 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor activity | 80 | Alkali azides/nitrides and halide metathesis provide high chemical activity at lower temperature. (CS-1/2/3/5; SS-5; [Reasonable Inference]) |
| Ion diffusion difficulty | 35 | Re remains diffusion-limiting, but flux/liquid-mediated transport earns credit because analogous chemistry occurs at temperatures far below refractory cation melting points. (CS-2/3; SS-5; [Reasonable Inference]) |
| Structural reconstruction | 45 | Flux/azide chemistry can assemble N–N-rich frameworks, but the exact Eu3ReN9 P1 topology has no direct analogue. (CS-1/3/5; SS-5; [Reasonable Inference]) |

**F3 Score for Route 3: 53 / 100**

##### Route 4: Reactive Thin-Film Nitridation / PLD or Co-Sputtering

**F2 — Synthesis Condition Severity**

| Condition | Applies? | Deduction |
|:--|:--:|:--:|
| T > 1000°C | No; proposed deposition/anneal is ≤700 °C. ([Reasonable Inference]) | 0 |
| T > 1400°C additional | No. ([Reasonable Inference]) | 0 |
| High pressure > 5 GPa | No. ([Reasonable Inference]) | 0 |
| Reactive/controlled atmosphere | Yes; N2/NH3 plasma is required. ([Reasonable Inference]) | −15 |
| Volatile precursor requiring sealed system | No sealed volatile precursor; film growth uses controlled gas flow. ([Reasonable Inference]) | 0 |
| Multi-step process ≥ 3 steps | No; deposition plus anneal is not necessarily ≥3 steps. ([Reasonable Inference]) | 0 |
| Toxic or air-sensitive precursors | Yes; Eu source/film is air-sensitive. ([Reasonable Inference]) | −10 |

**F2 Score for Route 4: 75 / 100**

**F3 — Reaction Kinetics**

| Aspect | Score | Basis |
|:--|:--:|:--|
| Precursor vapor availability | 45 | Eu/Re targets are plausible, but Eu volatility/oxidation and reactive nitrogen incorporation are concerns; **insufficient evidence from CS/SS/TS for vapor precursor behavior; neutral source signal = 50**. ([Reasonable Inference]) |
| Crystallization pathway | 25 | No CS/SS/TS thin-film analogue confirms direct crystallization of this P1 N–N framework. (insufficient evidence from CS/SS/TS; [Reasonable Inference]) |
| Composition control | 20 | Eu:Re:N control is likely narrow because the phase is ternary, nitrogen-rich, and low symmetry. ([Reasonable Inference]) |

**F3 Score for Route 4: 30 / 100**

---

#### F4: Amorphization Tendency (Weight: 20%)

| Check | Criterion | Trigger? | Basis |
|:--:|:--|:--:|:--|
| C1 | Cation ionic radius difference > 15% | Yes | Eu is high-coordinate while Re is in a compact ReN5 unit; large cation-size mismatch is a **[Reasonable Inference]** supported by Eu–N and Os/Re-like short M–N environments in analogues. (SS-4; TS-5; [Reasonable Inference]) |
| C2 | Unit cell atom count > 40 | No | The provided P1 description contains 3 Eu, 1 Re, and 9 N crystallographic sites, so the apparent primitive formula has 13 atoms. (Target data) |
| C3 | Mixed vertex + edge + face sharing coexist | No | The target description reports corner and edge sharing, but not face sharing; analogous face sharing exists in some SS/TS materials but is not reported for the target. (Target data; SS-4; TS-5) |

| Triggers | Score | Risk Level |
|:--:|:--:|:--:|
| 1 | 78 | Low–Medium |

**F4 Score: 78 / 100**

---

#### Final Score Table

| Route | F2 | F3 | F1 shared | F4 shared | Weighted Total |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 45 | 45 | 70 | 78 | 59.1 |
| 2 | 55 | 35 | 70 | 78 | 59.1 |
| 3 | 55 | 53 | 70 | 78 | 63.6 |
| 4 | 75 | 30 | 70 | 78 | 62.9 |

| | |
|:--|:--|
| **Best Route** | Route 3 — Alkali-Azide/Nitride Reactive Flux or Metathesis |
| **Expert adjustment (±5)** | −3, because the target has no candidate-specific E_hull/phonon validation and no direct Eu–Re–N analogue. (insufficient evidence from CS/SS/TS for target-specific stability) |
| **Final Synthesizability Score** | **61 / 100**, based on Route 3 after expert adjustment |

---

### SECTION 4 — Synthesis Conditions Summary

| Parameter | Best Estimate |
|:--|:--|
| Temperature range | **500–650 °C**, based on CS-3 topochemical 450–600 °C and CS-2 sealed 600 °C chemistry. |
| Preferred atmosphere | Dry Ar loading; sealed Ni/Nb/Ta tube under inert/vacuum or autogenous N2 from azide/nitride donor. (CS-2/3; SS-5; [Reasonable Inference]) |
| Pressure | Ambient sealed-tube pressure, not GPa pressure for the recommended route. (CS-2/3; SS-5) |
| Estimated duration | 2–7 days hold plus slow cooling, extrapolated from CS-3 6–8 day topochemical synthesis and CS-2 4 day sealed reaction. (CS-2/3; [Reasonable Inference]) |
| Critical control parameters | Eu:Re ≈ 3:1, high nitrogen chemical potential, oxygen/water exclusion, slow cooling, avoidance/removal of alkali/halide flux residues, and phase-purity checks. (CS-1/2/3/5; SS-5; [Reasonable Inference]) |
| Basis | Low-temperature azide/halide chemistry from CS-1/5, sealed-tube chloride chemistry from CS-2, topochemical nitride insertion from CS-3, and complex azide crystallization risk from SS-5. |

---

### SECTION 5 — Scoring Rationale

**F1 — Thermodynamic Stability**  
The strongest favorable stability signal is that SS/TS structural and thermodynamic analogues SrN2, BaN2, CaN2, LiEu4(BN2)3, and Ba6Os2N6O are reported at E_hull = 0. (SS-1–4; TS-1–5) The limiting signal is that chemically similar Cs/Rb aurate azides are experimentally known yet have high listed E_hull values above 0.50 eV/atom, showing that nitrogen-rich analogues can be metastable. (CS-1/5) Because the target’s own convex-hull energy and phonons are absent, **insufficient evidence from CS/SS/TS for candidate-specific ground-state stability**, so F1 is set to 70 rather than a ground-state score.

**F2/F3 — Route 1**  
High-pressure severity is directly supported by SS/TS diazenide syntheses at 3–12 GPa and 450–800 °C, so F2 is penalized mainly for pressure, sealed energetic nitrogen sources, multistep handling, and hazardous precursors. (SS-1–3; TS-1–3) Kinetics benefit from reactive azides, but Re incorporation and Eu/Re ordering require reconstruction not shown in the HP diazenide analogues. (SS-1–3; TS-1–3; [Reasonable Inference]) CS provides azide chemistry but **insufficient evidence from CS for high-pressure transferability**, so the CS route-specific signal is neutral 50.

**F2/F3 — Route 2**  
Sealed-ampoule nitride synthesis is supported by EuN-containing LiEu4(BN2)3 and Ba/Os/N2 nitride formation, but the route needs controlled atmosphere, sealing, regrinding, and air-sensitive precursors. (SS-4; TS-4/5) Kinetics are weak because TS-5 required repeated annealing to suppress impurities and Re/ReNx diffusion is expected to be slow. (TS-5; [Reasonable Inference]) CS-3 supports lower-temperature topochemical nitride chemistry but does not directly solve Eu–Re ordering, so CS is only partial support. (CS-3)

**F2/F3 — Route 3**  
The flux/metathesis route has moderate severity because it avoids GPa pressure and >1000 °C temperatures, while still requiring sealed inert handling and hazardous azides/halides. (CS-1/2/3/5; SS-5) Kinetics score highest among bulk routes because alkali azides/nitrides and halide metathesis provide high nitrogen activity and improved mass transport at 500–650 °C. (CS-1/2/3/5; SS-5; [Reasonable Inference]) The main uncertainty is that alkali-containing analogues often retain alkali cations, so Eu3ReN9 may compete with alkali Eu/Re azides or nitrides. (CS-1/3/5; SS-5; [Reasonable Inference])

**F2/F3 — Route 4**  
Thin-film synthesis has mild nominal condition severity because it avoids sealed bulk azides and high pressure, but it still needs reactive nitrogen plasma and air-sensitive Eu handling. ([Reasonable Inference]) F3 is low because **insufficient evidence from CS/SS/TS supports thin-film crystallization**, and the target’s low-symmetry N–N framework likely requires a narrow composition/crystallization window. (insufficient evidence from CS/SS/TS; [Reasonable Inference])

**F4 — Amorphization Tendency**  
The target triggers the cation-radius mismatch check because high-coordinate Eu and compact ReN5 environments imply a large cation size/coordination contrast. (SS-4; TS-5; [Reasonable Inference]) It does not trigger the >40 atom-count check from the provided P1 formula-site description, and it does not trigger the full vertex+edge+face-sharing criterion because face sharing is not reported for the target. (Target data) Remaining uncertainty is moderate because the P1 symmetry and multiple inequivalent N–N motifs can still broaden the crystallization window even without all three F4 triggers. ([Reasonable Inference])

---

### SECTION 6 — Synthesizability Interpretation

Eu3ReN9 is more likely a metastable or narrowly stabilized nitrogen-rich phase than a proven ground-state phase because its candidate-specific convex hull and phonons are missing, even though analogue nitrides include several E_hull = 0 examples. (SS-1–4; TS-1–5) The analogue support is strongest for N–N-containing high-pressure nitrides and for sealed/flux nitrogen-rich chemistry, but no CS/SS/TS entry directly matches a Eu–Re–N ternary framework. (SS-1–3; TS-1–3; CS-1/3/5) The most critical enabling factor is maintaining high nitrogen chemical potential at low-to-moderate temperature so N–N units survive while Eu/Re ordering develops. (SS-1–3; CS-1/3/5; [Reasonable Inference]) The most critical limiting factor is phase control: Re diffusion, alkali/halide contamination, Eu oxidation, and competing Eu/Re binary nitrides are all credible risks. (TS-5; CS-2/3; [Reasonable Inference]) Overall, synthesis is plausible but should be approached as a challenging exploratory nitride/azide chemistry problem rather than a routine solid-state target. (CS/SS/TS overall; [Reasonable Inference])

---

### SECTION 7 — Synthesis Challenges

| # | Route | Challenge | Severity | Mitigation Strategy (from CS/SS/TS) |
|:--:|:--:|:--|:--:|:--|
| 1 | All | No candidate-specific E_hull or phonon validation, so competing phases may be lower energy. | High | Treat analogue stability as supportive only; screen multiple nitrogen chemical potentials and verify by PXRD/EDS. (SS-1–4; TS-1–5; CS-1/5) |
| 2 | All | Nitrogen loss or decomposition of N–N units during heating. | High | Use sealed systems, high-pressure cells, or azide/nitride nitrogen reservoirs as in diazenide and azide analogues. (SS-1–3; TS-1–3; CS-1/5) |
| 3 | All | Eu precursors/products are likely air/moisture sensitive. | High | Load and recover under glovebox/inert conditions, following SS/TS nitride and azide handling precedents. (SS-1–4; TS-1–4) |
| 4 | Route 1 | GPa pressure limits batch size and requires specialized equipment. | High | Use multianvil-style controlled decomposition windows similar to Sr/Ba/Ca diazenides. (SS-1–3; TS-1–3) |
| 5 | Route 2 | Slow Re diffusion and incomplete reaction in bulk solid-state synthesis. | High | Use ReNx or activated Re precursor, fine grinding, and repeated annealing, analogous to repeated Ba/Os/N2 processing. (TS-5; [Reasonable Inference]) |
| 6 | Route 3 | Alkali or halide incorporation may produce competing alkali Eu/Re azides or nitrides. | Medium–High | Use minimal flux excess, slow cooling, and post-reaction washing only after stability testing; alkali retention risk is indicated by CS/SS azide analogues. (CS-1/3/5; SS-5; [Reasonable Inference]) |
| 7 | Route 3 | Crystal growth may be difficult because low-symmetry P1 ordering requires slow assembly. | Medium | Use slow cooling, borrowing crystallization logic from azide precipitation/cooling routes. (CS-1/5; SS-5) |
| 8 | Route 4 | Thin-film stoichiometry and crystallization are unvalidated for this structure. | High | Use combinatorial Eu/Re flux gradients and nitrogen-rich plasma screening; **insufficient evidence from CS/SS/TS**, so this is a **[Reasonable Inference]** mitigation. |