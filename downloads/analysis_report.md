# Scientific review of the sand emissivity draft

Review date: 16 October 2026. Original project: `20261016_irene_emisibitatea`.

The project contains a promising preliminary comparison of five sand samples, but the present evidence does not yet support a finished research paper. The missing ceramic and angular discussions can be supplied now. More consequential gaps concern what was measured, how the reference and uncertainty were handled, whether the sand beds were optically thick, and what the surface-preparation comparison actually establishes.

The most defensible present claim is: **five samples have broadly similar, structured near-normal infrared responses, with visible differences in selected spectral regions; the two reported bed preparations preserve the broad spectral features.** A quantitative claim of preparation independence, identification of minerals, or total thermal emissivity requires additional evidence.

An expanded, separately authored manuscript is available in [revised/main_revised.tex](revised/main_revised.tex), with a compiled [reading copy](revised/main_revised.pdf) and [references](revised/references.bib). It fills the explanatory gaps while keeping missing experimental facts as explicit author queries. The original four research files and `.DS_Store` were recorded in a SHA-256 manifest and left untouched.

## Scope and evidence

The entire supplied manuscript, bibliography and both figure PDFs were inspected. The current project contains no numerical spectra, instrument exports, acquisition log, sample characterization, calibration certificate or plotting code. These absences refer to this directory, not to what may exist in the laboratory.

Jon Gabirondo López's 318-page thesis was searched across its complete extracted text, then studied in the sections relevant to this experiment: radiative quantities and Kirchhoff's law, uncertainty propagation and integration, SiC validation by reflectance and direct emission, and traceable data reporting. This is a targeted scientific reading of the thesis, not a claim to have re-audited every chapter. Critical passages were checked against rendered PDF pages.

The publication context was checked against the 2025 short CV, the July 2026 CV document and the older comprehensive CV text. Primary publications and bibliographic records were consulted rather than treating a CV entry as conclusive evidence of authorship. See [source_inventory.md](source_inventory.md) for access status and locators, including failed downloads.

## What is already useful

The draft reports a plausible indirect measurement method: a 75 mm integrating sphere, nominal incidence of 13°, DLaTGS detector, Infragold comparison standard, and 100 scans for sample and reference. It compares five specimens in two preparations and provides both individual and combined plots. This is enough to formulate an explicit measurement model and a useful preliminary discussion.

The research connection to your previous work is substantive. Your 2020 Metrologia paper establishes the group's approach to explicit measuring equations and uncertainty budgets; the porous-spinel and laser-patterned-surface papers make the importance of morphology and directionality especially relevant. The sand study should apply that metrological discipline to a granular-bed reflectance measurement, while accounting for its different experimental inputs. [Metrologia paper](https://doi.org/10.1088/1681-7575/ab84ff), [spinel coatings](https://doi.org/10.1016/j.solmat.2019.109961), [laser patterning](https://doi.org/10.1016/j.matlet.2025.138485).

## Findings in the original files

Line numbers below refer to the unchanged `main.tex`.

| ID | Location | Finding and consequence | Treatment |
|---|---|---|---|
| F01 | Line 28 | “Normal” does not accurately identify a measurement at 13°. | Changed to near-normal directional spectral emissivity. |
| F02 | Line 34 | “Directional-hemispherical total reflectance” is ambiguous for a spectrum. | Use directional-hemispherical **spectral** reflectance; specify separately that specular and diffuse reflection are included. |
| F03 | Lines 37–39 | The simple signal ratio omits its operational assumptions. | Retained as the nominal model, with offset and sphere-geometry qualifications. |
| F04 | Line 34 | The constant reference value 0.95 has no calibration provenance or uncertainty. | Described as the original assumption; spectral calibration requested. |
| F05 | Line 41 | “100 scans” does not define independent repeats or preparation replication. | Distinguished scan noise, mean uncertainty and bed-to-bed variability. |
| F06 | Lines 41–43 | The uncertainty paragraph is unfinished and its “2%” is undefined. | Replaced with a complete symbolic propagation and an explicit data query. |
| F07 | Line 48 | The conversion omits transmission and the conditions of Kirchhoff's law. | Added the general relation and the optically thick-bed condition. |
| F08 | Line 51 | “Both curves collapse” is stronger than the figures support. | Replaced by broad qualitative similarity with visible offsets. |
| F09 | Line 51 | Grain size and orientation are declared limiting without being varied or quantified. | Removed the causal conclusion. |
| F10 | Line 53 | The ceramic and angular discussion is missing. | Filled, distinguishing granular beds from dense dielectric surfaces. |
| F11 | Line 57 | `bothmeasurements.pdf` differs in case from `Bothmeasurements.pdf`. | Corrected the reference in the separate revision; this matters on case-sensitive filesystems. |
| F12 | Figure 1(d) | The blue legend reads “ST1 rough,” although the panel is intended as ST4. | Flagged for data-identity verification; no speculative relabelling. |
| F13 | Both figures | Shaded bands are not defined. | They are not called confidence intervals or expanded uncertainties. |
| F14 | Line 61 | Wavelength interval 3–18 is given in cm⁻¹. | Corrected to μm in the physical discussion. |
| F15 | Line 61 | A universal 0.9 description overlooks spectral depressions and short-wavelength differences. | Replaced by a regional description. |
| F16 | Line 61 | “0.6 ± 0.1” has no stated averaging rule or uncertainty meaning. | Removed as a quantitative result; no replacement statistic invented. |
| F17 | Line 61 | “Significant” may imply a statistical test that is absent. | Use visible or apparent differences pending uncertainty analysis. |
| F18 | Figure 2 | Its inset has a broken wavelength axis. | Made explicit in the caption. |
| F19 | Entire draft | Sample provenance, mineralogy, grain size, moisture and bed geometry are missing. | Added a structured author query and completion plan. |
| F20 | Entire draft | Abstract, research question, discussion, conclusion and relevant bibliography are absent. | Added a coherent working manuscript and a verified bibliography. |
| F21 | `sample.bib` | The sole reference concerns CTAN and is unused. | Preserved the original; replaced only in the revised manuscript's new bibliography. |
| F22 | Entire project | There is no basis for numerical reprocessing or figure regeneration. | Kept the original figures and documented exactly what is needed to regenerate them. |

## The measured quantity and its physical meaning

### A directional measurement with hemispherical collection

For incidence from a specified direction, the relevant reflectance is the fraction of incident flux reflected into the whole outgoing hemisphere:

$$
R_{\mathrm{dh}}(\lambda,\Omega_i)
=\int_{\Omega_r\in2\pi} f_r(\lambda;\Omega_i,\Omega_r)
\cos\theta_r\,d\Omega_r,
$$

where $f_r$ is the bidirectional reflectance distribution function. This definition makes clear why collecting many reflection directions does not produce a hemispherical emissivity. The incident direction remains fixed.

With passive, reciprocal material behavior and matched wavelength, temperature, material state and polarization conventions, local thermal equilibrium permits the directional relation

$$
\varepsilon_{\mathrm d}=\alpha_{\mathrm d}
=1-R_{\mathrm{dh}}-\tau_{\mathrm{dh}}.
$$

The surroundings need not be at the sample temperature for a reflectance measurement; the relevant equilibrium condition concerns the material state and the emission–absorption relation. A Lambertian sample is **not** required when the appropriate hemispherical reflected flux is measured. Anisotropic scattering does, however, make incomplete collection and angular-response errors more consequential.

The original $\varepsilon=1-R$ is therefore a legitimate working equation only after bed opacity and the collection geometry are established. Directional-hemispherical measurements have a long precedent in terrestrial-material emissivity studies. [Salisbury and D'Aria, 1992](https://doi.org/10.1016/0034-4257(92)90092-X).

### Optical thickness belongs to the bed, not merely the holder

Individual mineral grains may transmit radiation over some intervals. Multiple scattering and absorption can still make a sufficiently deep bed effectively opaque. Neither “sand” nor “ceramic” guarantees this at every wavelength.

If a finite freestanding bed has transmittance $\tau$, using $1-R$ overestimates its absorptance by $\tau$. If it rests on an opaque backing, $1-R$ can instead describe the effective absorption of the complete bed–backing assembly. It cannot automatically be assigned to the sand alone.

A useful validation is to repeat measurements with increasing bed thickness, controlling surface preparation and packing, and test whether reflectance changes within a stated tolerance. A backing comparison or transmittance measurement adds discrimination. Thickness independence alone does not prove every aspect of opacity, but a systematic thickness dependence decisively exposes a problem with the simple bed interpretation. The short-wavelength region deserves particular scrutiny.

### What 13 degrees allows us to say

Retain the measured angle explicitly. Do not apply a universal 13°-to-0° correction. For a sufficiently smooth angular response of a rotationally symmetric bed near the normal, a local expansion can be written

$$
\varepsilon(\theta)=\varepsilon(0)+a_2\theta^2+O(\theta^4).
$$

At 13°, $\theta^2\simeq0.0515$ in radians squared. The coefficient is unknown, so the expansion provides no numerical error bound. Narrow angular structure or azimuthal anisotropy would require additional treatment. There is no justification for equating this difference to the draft's unrelated “2% misalignment” term.

Jon's thesis, printed p. 9 (PDF p. 19), describes small angles up to about 15° as reducing to normal emissivity. That wording should be treated as an approximation, not a theorem. Absence of azimuthal dependence also requires rotational symmetry, not merely spatial homogeneity. The sand revision avoids importing either simplification. Powdered-quartz measurements demonstrate that angular effects can coexist with random granular structure. [Wald and Salisbury, 1995](https://doi.org/10.1029/95JB02400).

## Completing the measurement and uncertainty model

### The signal ratio

Write the original working model as

$$R=C\frac{A}{B},\qquad
A=\overline{S}_s,\quad B=\overline{S}_{\mathrm{ref}},\quad C=R_{\mathrm{ref}}.$$

Signals are detector indications, not automatically the radiance reflected in one direction. The calibrated ratio is only as reliable as its background handling and transfer between sample and reference configurations.

A useful more explicit candidate model is

$$
R=C\frac{A-D_s}{B-D_r}K+\delta_R,
$$

where $D_s,D_r$ are justified offset corrections, $K$ represents a validated multiplicative transfer correction and $\delta_R$ any separately justified residual additive correction. This is a **model-development template**, not a claim that these corrections were measured or applied. Depending on the actual sphere protocol, a ratio of normalized measurements may be needed instead. The first task is to recover that protocol.

Changing a highly reflective standard to a weakly reflective bed can change the sphere's internal illumination. Reference placement, sphere loading, port losses and sample height therefore need examination. A study using a commercial 75 mm sphere provides directly relevant measurement guidance, but its detector, angle, protocol and reported uncertainties must not be copied into this experiment. [Blake et al., 2018](https://doi.org/10.1364/AO.57.000432).

### Propagation with covariance

For the nominal ratio, the sensitivity vector is

$$\mathbf g=\left(\frac{C}{B},-\frac{CA}{B^2},\frac{A}{B}\right),
\qquad u_c^2(R)=\mathbf g\,\boldsymbol\Sigma\,\mathbf g^{\mathsf T}.$$

The revised manuscript gives the expanded expression, including all three covariance terms. If the inputs are independent, it reduces to

$$
\left[\frac{u_c(R)}{R}\right]^2
=\left[\frac{u(A)}{A}\right]^2
+\left[\frac{u(B)}{B}\right]^2
+\left[\frac{u(C)}{C}\right]^2.
$$

This relative form is unsuitable when $A$ is near zero; use the absolute derivative form. If the denominator is poorly determined, linear propagation can itself be inadequate. Distribution propagation should preserve shared calibration and drift, rather than drawing every contribution independently. The general uncertainty framework follows the [JCGM GUM](https://doi.org/10.59161/JCGM100-2008E); the specific ratio derivatives were derived and checked for this review.

For negligible transmission, $u(\varepsilon)=u(R)$ in absolute units. Thus, **a 2% relative uncertainty in reflectance is not a 2% uncertainty in emissivity**. For illustration only, $R=0.10$ and $u(R)/R=0.02$ imply $\varepsilon=0.90$, $u(\varepsilon)=0.002$ and $u(\varepsilon)/\varepsilon\simeq0.222\%$. An absolute uncertainty of 0.02 would be ten times larger. None of these numbers is an estimate of the supplied measurements.

### Scans, repeats and preparation

The standard uncertainty of a mean is $s/\sqrt N$ only for independent, stationary observations of the same quantity. A saved spectrum constructed from 100 coadded scans is not evidence that 100 individually available spectra exist, nor that the instrument reports their standard deviation. If scan averaging occurred before a nonlinear ratio, the mean of ratios and the ratio of means may differ. The reduction sequence matters.

Separate three levels:

1. Scan variability at fixed sample and optical configuration.
2. Repeat acquisition, repositioning and reference drift.
3. Independent bed preparation, including refilling and changes in packing.

Only the first can ordinarily be reduced by collecting more scans of the same undisturbed bed. Averaging does not remove calibration bias. Repeated preparations are needed to generalize beyond the particular bed measured.

### A usable uncertainty budget

| Contribution | Required evidence | Treatment |
|---|---|---|
| Sample and reference noise | Individual scans or independently repeated spectra | Uncertainty of the relevant mean; retain covariance where appropriate. |
| Reference reflectance | Certificate or justified calibration dataset | Wavelength-dependent input with its coverage converted to standard uncertainty. |
| Source drift | Bracketing references or stability records | Shared or time-dependent term; avoid assuming full cancellation. |
| Dark or additive offsets | Closed-beam or equivalent characterization | Particularly important for low reflected signals. |
| Alignment and sample height | Repositioning experiments or defensible bounds | Convert the bound for the specified quantity; include local slopes and port contact as appropriate. |
| Sphere collection and loading | Protocol, geometry, validation standards | Correct demonstrated bias and propagate residual uncertainty. |
| Preparation and heterogeneity | Independently refilled beds and spatial repeats | Estimate the variability relevant to the reported sample population. |
| Atmosphere and optical configuration | Purge records, single-beam spectra, instrument settings | Diagnose residual features and define justified exclusions. |
| Wavelength scale and resolution | Instrument specifications and calibration | Important for assigning and comparing spectral structures. |
| Optical thickness | Thickness/backing/transmission checks | Establish model validity; do not conceal unknown transmission in a nominal noise budget. |

If “smaller than 2%” means a symmetric relative bound on a reflectance correction and a rectangular distribution is justified, its relative standard uncertainty would be $0.02/\sqrt3$. At $R=0.1$, its absolute emissivity contribution would then be approximately 0.00115. If it means an absolute bound of 0.02, the result is approximately 0.01155. The factor-of-ten distinction is another reason not to complete the original sentence with an unsupported number.

The reference's non-Lambertian behavior should be investigated rather than asserted to begin universally at 15 μm. Labsphere describes an effective Infragold range of approximately 0.7–20 μm; the plots extend farther. That is a reason to obtain the actual calibration and establish a valid range, not proof that every point above 20 μm is invalid. [Manufacturer information](https://www.labsphere.com/resources/application-based-infragold-spheres-2/).

## Interpreting the figures

### Surface preparation

![Original comparison of surface preparations](figures/Bothmeasurements.png)

The curves preserve broad spectral features between preparations. Nevertheless, offsets are visible in several insets, and at long wavelengths the bands widen considerably. There are no numerical difference spectra, documented confidence bands or independent preparation counts. Overlap of two shaded bands is not an equivalence test. The ST4 panel identity must also be resolved before a five-sample preparation conclusion is accepted.

Use the paired difference $\Delta\varepsilon=\varepsilon_r-\varepsilon_l$. Its variance is

$$u^2(\Delta\varepsilon)=u^2(\varepsilon_r)+u^2(\varepsilon_l)
-2\operatorname{cov}(\varepsilon_r,\varepsilon_l).$$

A common calibration contribution can partly cancel in this difference. Therefore, the absolute error bars on separate curves do not fully answer the preparation question. Conversely, a common drift or preparation confound can bias a paired comparison. Statistical nondetection is not evidence that the physical effect is zero.

For an equivalence claim, define an application-relevant tolerance $\delta$ before testing, and require an appropriate interval for the difference to lie within $[-\delta,\delta]$. Specify whether the claim concerns individual wavelengths, a prescribed band average, or a whole spectrum. Correlated spectral samples must not be treated as independent replicates.

### Differences among samples

![Original combined sample comparison](figures/All_together.png)

Approximate positions and values here are visual descriptions, not digitized data or fitted parameters. The displayed range is approximately 1.5–25 μm. Broad high-emissivity intervals are interrupted by depressions near 3.5–5 and 8–10 μm, and structure near 6–7 μm deserves discussion. ST3 is visibly lower than several other samples over part of the short-wavelength interval; it also differs in the depth of the longer-wavelength depression. The apparent ordering changes with wavelength, so no overall “best” sample follows from the plot.

The common sharp rise near 2.5–2.7 μm is worth checking against both material absorption and optical settings. A detector/source/beamsplitter transition, processing join or absorption feature are possible explanations to investigate; the graphic alone identifies none of them. The large long-wavelength spread could include source intensity, detector sensitivity, optical throughput, reference uncertainty and preparation variability. It should not all be attributed to the source without examining single-beam signals.

Some bands extend beyond unity. Symmetric uncertainty intervals can cross a physical bound without implying that the central estimate violates it. Their meaning must be known before judging this. Avoid clipping estimates or uncertainty limits merely to make the plots look physical; inspect the measurement model and report an appropriate distribution if bounded inference is needed.

Uniform sampling in wavenumber becomes nonuniform sampling in wavelength. This can make long-wavelength curves look sparsely sampled without proving reduced acquisition resolution. Use $\lambda[\mu\mathrm m]=10^4/\widetilde\nu[\mathrm{cm}^{-1}]$. The dimensionless emissivity values require no Jacobian under this relabelling; spectral densities and integration weights do.

## Filling the ceramic and spectral interpretation gap

The manuscript should discuss **dielectric minerals in a granular bed**, rather than treating “ceramics” as a material with one generic emissivity curve. Relevant mechanisms include vibrational dispersion, scattering at grain interfaces, absorption within grains, multiple scattering and the macroscopic bed geometry. This explains why levelling the top surface does not remove the optical role of the grains.

In a Reststrahlen region, strong dielectric dispersion can produce high reflection and consequently low emissivity for an opaque sample. An emissivity minimum must not be described as an absorption maximum without examining the relevant optical quantity. Grain size and packing can change the depth and shape of these features. [Salisbury and D'Aria, 1992](https://doi.org/10.1016/0034-4257(92)90092-X), [Wald and Salisbury, 1995](https://doi.org/10.1029/95JB02400).

| Region | Physically plausible interpretation | What would distinguish it |
|---|---|---|
| Approximately 1.5–2.5 μm | Material composition, volume scattering, moisture-related structure, or finite optical thickness | Original signals, thickness/backing test, conditioning record and mineralogy. |
| Approximately 2.5–2.7 μm rise | Material absorption onset or a shared instrumental/processing feature | Instrument configuration history and unprocessed spectra. |
| Approximately 3.5–5 μm | Mineral overtone/combination features; carbonate or other constituents may contribute | Phase identification and compatible reference spectra, plus gas-residual checks. |
| Near 4.3 μm | Possible residual atmospheric CO₂ superimposed on a material spectrum | Reference timing, purge history and single-beam data. |
| Approximately 6–7 μm | Material feature or water-related absorption/residuals | Controlled moisture comparison and atmospheric checks. |
| Approximately 8–10 μm | Consistent with silicate vibrational reflectance structure | XRD, grain-size analysis and full-spectrum consistency; not a standalone mineral identification. |
| Approximately 18–25 μm | Possible material trend mixed with poorer measurement precision | Reference validity, throughput and repeatability checks before assigning a physical mechanism. |

Salisbury and D'Aria's 1994 paper provides a specific reason to keep mineral overtone and combination features in the short-wave discussion; the inspected p. 353 describes quartz and carbonate examples. This is a set of candidates, not identification of those phases in ST1–ST5. [1994 paper](https://doi.org/10.1016/0034-4257(94)90102-3).

Hewson and colleagues directly investigated texture and mineral information in soil infrared spectra. Their results support combining grain-size and compositional information rather than inferring either from a single depression. Moisture measurements by Mira and colleagues provide a further reason to control sample conditioning. [Hewson et al., 2012](https://doi.org/10.1155/2012/535646), [Mira et al., 2007](https://doi.org/10.1029/2007JF000749).

Atmospheric CO₂ has bands near 2350 and 667 cm⁻¹, corresponding approximately to 4.26 and 15.0 μm; water contributes bands near 2.7 and 6.3 μm and additional rotational structure. These are diagnostic checks on the optical path, not a reason to label every nearby sample feature an artifact. [Bruker technical note](https://www.bruker.com/en/products-and-solutions/infrared-and-raman/ft-ir-research-spectrometers/high-end-vacuum-research/_jcr_content/root/sections/section_1952284321/sectionpar/twocolumns/contentpar-1/calltoaction_copy_co_2135081000.download-asset.pdf/primaryButton/PN_T18_VacuumAdvantages_EN.pdf).

## What can be transferred from Jon's thesis

| Thesis location | Useful contribution | Limit on transfer |
|---|---|---|
| Sections 1.4–1.6, printed pp. 8–15 | Radiative-property definitions, indirect measurement and material-state metadata | Use precise angular terminology; the small-angle statement on p. 9 is approximate. |
| Section 4.3.4, printed pp. 179–184 | Explicit measurement model, sensitivity coefficients and shared uncertainties | The HAIRL blackbody/temperature equation is not the sphere ratio equation. |
| Section 4.3.5, printed pp. 184–186 | Finite spectral coverage and uncertainty in integrated emissivity | Do not transfer metal-specific tail assumptions or universal angular boundary claims to sand. |
| Section 4.4, printed pp. 187–190 | Traceable processing and preserved settings | Adopt the reporting principle; no claim is made that this project already implements fer. |
| Section 4.5.1, especially printed p. 193 | SiC reflectance-derived emissivity used in radiometric temperature determination | Sintered SiC is not a calibration surrogate for an uncharacterized sand bed. |
| Section 5.2.2.3, printed p. 245 | Separate reflectance instrumentation described for coatings | That setup uses different geometry and spectral coverage; it cannot supply the missing instrument settings here. |

The thesis p. 186 states boundary values $\varepsilon(0)=\varepsilon(10^\circ)$ and $\varepsilon(90^\circ)=0$ as fixed by electromagnetic theory. The first is an approximation; the second needs material and geometry qualifications. Neither should be used as a universal boundary condition for a granular bed. This review does not alter the thesis.


## Relation to your publication record

Use prior work selectively, where it supports the actual argument:

- **González de Arrieta et al., Metrologia (2020), DOI 10.1088/1681-7575/ab84ff.** Verified coauthorship and relevant uncertainty-method precedent. Do not transfer its direct-emission uncertainty numbers.
- **González de Arrieta et al., Solar Energy Materials and Solar Cells (2019), DOI 10.1016/j.solmat.2019.109961.** Verified coauthorship; porous coatings show why morphology, normal emission and hemispherical emission need separate consideration.
- **Gabirondo-López et al., Materials Letters (2025), DOI 10.1016/j.matlet.2025.138485.** Verified coauthorship; useful context for surface structure and angular response, not a physical model for sand.
- **Gabirondo-López et al., EPJ Web of Conferences (2024), DOI 10.1051/epjconf/202430913003.** Verified coauthorship and an accessible precursor to the patterned-surface work. Listed in the bibliography but not needed in addition to the later paper for the same claim.
- **The fer work and the thesis.** Relevant to traceable reporting. A formal journal citation to fer should be added after its publisher metadata is checked; no unverified DOI was invented.


## Thermal interpretation and limits of spectral coverage

If an application calls for a band emissivity in the measured direction, define it explicitly:

$$
\varepsilon_{[a,b],\mathrm d}(T)=
\frac{\int_a^b\varepsilon_{\mathrm d}(\lambda,T)B_\lambda(T)\,d\lambda}
{\int_a^b B_\lambda(T)\,d\lambda}.
$$

This is a band quantity. Total directional emissivity uses integrals over all wavelengths. Total hemispherical emissivity also integrates over outgoing directions with the projected-solid-angle weight. Detector-effective emissivity introduces the instrument's spectral response and, for temperature retrieval, the surrounding radiance model.

The following calculation uses a **300 K blackbody solely as an illustration**; 300 K is not an experimentally established sand temperature:

| Wavelength interval | Fraction of total blackbody power |
|---|---:|
| 3–18 μm | 68.02% |
| 1.5–25 μm | 83.44% |
| 8–14 μm | 37.57% |
| 3–5 μm | 1.28% |

Thus, even an accurate 1.5–25 μm measurement would leave about 16.56% of the 300 K blackbody weighting outside the interval. If only 3–18 μm were accepted, the missing fraction would be about 31.98%. These are blackbody weighting fractions, not measured fractions of radiation from these samples.

If the validated measured contribution is $I_m=\pi(\sigma T^4)^{-1}\int_a^b\varepsilon B_\lambda\,d\lambda$, and the only tail information is $0\leq\varepsilon\leq1$, then

$$I_m\leq\varepsilon_{\mathrm{total,d}}\leq I_m+1-F_{[a,b]}.$$

This bound makes the unmeasured contribution explicit without inventing a tail. It still does not determine a hemispherical emissivity. The fractions and derivative checks are reproducible in [check_calculations.py](evidence/check_calculations.py), with results in [calculation_checks.json](evidence/calculation_checks.json).

## The shortest route to a defensible paper

First recover existing records before deciding that new experiments are necessary. The [author queries](author_queries.md) identify the minimum information needed. The priority sequence is:

1. **Establish traceability:** identify ST1–ST5, recover spectra and figure provenance, resolve the ST4 pairing, define the shaded bands, and document the reference and acquisition settings.
2. **Validate the physical measurement:** demonstrate bed opacity or describe the assembly measurand, confirm specular inclusion, and check reference transfer and the valid spectral range.
3. **Recompute uncertainty and comparisons:** distinguish scans from independent preparations, propagate calibration and covariance, and compare paired differences with a prespecified interpretation.
4. **Test the physical interpretation:** characterize mineral phases and particle-size distributions, control moisture and packing, then compare spectra under matched conditions. XRD is useful for phases; bulk XRF/EDS alone does not uniquely identify them. Quantitative phase analysis needs appropriate standards and treatment of any amorphous fraction.
5. **Choose the claim supported by the evidence:** a preliminary material-characterization note may be achievable with recovered records; a strong composition/texture paper requires those properties to be measured; a preparation-insensitivity paper requires a designed equivalence study. Elevated-temperature or hemispherical performance is a separate extension.

The draft currently has no documented novelty claim beyond measuring five unspecified sands. Existing mineral and soil spectroscopy literature is extensive, so novelty must come from the samples, the application, the controlled comparison or a validated method improvement. It should not be invented by describing these measurements as the first of their kind.

## Deliverable status

The explanatory gaps have been filled in a separate working manuscript: abstract, motivation, exact measurand, conversion conditions, uncertainty equations, interpretation, conclusions and bibliography. The original figures remain explicitly provisional. No new experimental result, mineral identity, numerical uncertainty, statistical significance, opacity test or successful calibration has been asserted.

Verification and preservation details are maintained in [work_log.md](work_log.md) and [validation.json](evidence/validation.json). The revised draft is ready for scientific review and completion from the laboratory record; it is not labelled submission-ready.
