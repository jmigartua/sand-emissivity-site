# Sources and verification record

Access date: 16 October 2026. “Verified PDF” means a successful response with a PDF content type and `%PDF-` signature; successful metadata access is distinguished from file retrieval. Primary sources underpin the scientific discussion. Search snippets were used to locate records, not to invent missing experimental details.

## Local project

| File | Inspection | Role |
|---|---|---|
| `../main.tex` | All 71 lines read | Sole manuscript source; original line locators in the review. |
| `../sample.bib` | Complete | One unrelated CTAN reference, unused by the manuscript. |
| `../Bothmeasurements.pdf` | Complete one-page figure, rendered and visually inspected | Five preparation comparisons; ST4 panel's blue legend discrepancy identified. |
| `../All_together.pdf` | Complete one-page figure, rendered and visually inspected | Five-sample comparison, broken-axis inset and undocumented bands. |

The starting inventory and hashes are in `evidence/original_manifest.json`. None of these files was edited. No machine-readable experimental measurements were supplied in this directory.

## Thesis and local publication context

Thesis directory: `20260801_jon_tesia`.

| Source | Reading scope and locator | Use |
|---|---|---|
| `manuscript.pdf`, Jon Gabirondo López, *On the standardization of radiometric emissometry and the update of the HAIRL emissometer*, 2026 | 318 pages; full text extracted and searched. Relevant sections 1.4–1.6, 4.3.4–4.5.1, 5.2.2.3 studied. Critical PDF pages 19, 195, 203 rendered; printed numbering is 10 lower in these sections. | Definitions, uncertainty, spectral integration, SiC comparison and traceability. |
| `manuscript.md` | Relevant sections read and compared with PDF | Search and reading aid; PDF used to verify delicate claims. |

CVs were used to locate publications; author metadata were checked against primary records.

## Primary literature used in the revision

| Key | Source | Access and verification | Contribution |
|---|---|---|---|
| `salisbury1992` | Salisbury, J. W.; D'Aria, D. M. (1992). *Emissivity of terrestrial materials in the 8–14 μm atmospheric window*. Remote Sensing of Environment 42, 83–106. [DOI](https://doi.org/10.1016/0034-4257(92)90092-X) | DOI metadata checked; NASA primary catalogue checked; verified scanned PDF downloaded from RIT. Printed p. 85 visually inspected. PDF has no useful text layer. | Directional-hemispherical reflectance and terrestrial-material context. |
| `salisbury1994` | Salisbury, J. W.; D'Aria, D. M. (1994). *Emissivity of terrestrial materials in the 3–5 μm atmospheric window*. Remote Sensing of Environment 47, 345–361. [DOI](https://doi.org/10.1016/0034-4257(94)90102-3) | Publisher abstract and DOI metadata checked; verified scanned PDF downloaded from RIT. Printed p. 353 visually inspected. No useful text layer. | Short-wave mineral overtone and combination-band candidates. |
| `wald1995` | Wald, A. E.; Salisbury, J. W. (1995). *Thermal infrared directional emissivity of powdered quartz*. JGR Solid Earth 100(B12), 24665–24675. [DOI](https://doi.org/10.1029/95JB02400) | Publisher abstract and references accessible; DOI metadata checked. Publisher PDF URL redirects to abstract; no PDF obtained. | Evidence that angular response, size and packing matter. No detailed fit result transferred to the sands. |
| `blake2018` | Blake, T. A., et al. (2018). *Methods for quantitative infrared directional-hemispherical and diffuse reflectance measurements using an FTIR and a commercial integrating sphere*. Applied Optics 57(3), 432–446. [DOI](https://doi.org/10.1364/AO.57.000432) | Full article text available through web PDF extraction from [NIST](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=923806); methods and uncertainty sections inspected. Direct local download returned 403; no local PDF saved. Crossref request returned 429, not retried. Bibliographic details checked on article first page. | Sphere-specific measurement guidance. Its instrument configuration and uncertainty are not adopted as experimental facts. |
| `gum2008` | JCGM 100:2008. *Evaluation of measurement data — Guide to the expression of uncertainty in measurement*. [Official DOI](https://doi.org/10.59161/JCGM100-2008E) | Official BIPM publication listing checked and verified PDF downloaded. | Measurement model, standard uncertainty, covariance and coverage. The BIPM listing also identifies the 2026 nonlinearity amendment; this review uses the established linear propagation framework and explicitly flags its limits. |
| `mira2007` | Mira, M.; Valor, E.; Boluda, R.; Caselles, V.; Coll, C. (2007). *Influence of soil water content on the thermal infrared emissivity of bare soils: Implication for land surface temperature determination*. JGR Earth Surface 112, F04003. [DOI](https://doi.org/10.1029/2007JF000749) | Publisher article text and DOI metadata checked. | Moisture as a variable requiring control. No empirical coefficients borrowed for ST1–ST5. |
| `hewson2012` | Hewson, R. D.; Cudahy, T. J.; Jones, M.; Thomas, M. (2012). *Investigations into Soil Composition and Texture Using Infrared Spectroscopy (2–14 μm)*. Applied and Environmental Soil Science, 535646. [DOI](https://doi.org/10.1155/2012/535646) | Publisher full text inspected; DOI metadata checked and XML markup cleaned from the title. | Direct composition/texture precedent and caution about incompatible reflectance geometries. |
| `gonzalez2020` | González de Arrieta, I., et al. (2020). *Updated measurement method and uncertainty budget for direct emissivity measurements at the University of the Basque Country*. Metrologia 57, 045002. [DOI](https://doi.org/10.1088/1681-7575/ab84ff) | CV entry and Crossref authors/title checked; accepted manuscript first-page/abstract content available in web results. Old EHU PDF link returned 404 locally. No full-text download claimed. | Verified coauthored metrology precedent; claims restricted to documented methodology context. |
| `spinel2019` | González de Arrieta, I., et al. (2019). *Infrared emissivity of copper-alloyed spinel black coatings for concentrated solar power systems*. Solar Energy Materials and Solar Cells 200, 109961. [DOI](https://doi.org/10.1016/j.solmat.2019.109961) | Publisher abstract and DOI author metadata checked. OSTI PDF request timed out; no PDF saved. | Verified coauthored precedent for morphology and angular/hemispherical distinctions. |
| `dlip2025` | Gabirondo-López, J.; Soldera, M.; Igartua, J. M.; Lasagni, A. F.; López, G. A. (2025). *Tuning infrared radiative properties using Direct Laser Interference Patterning*. Materials Letters 391, 138485. [DOI](https://doi.org/10.1016/j.matlet.2025.138485) | Publisher text and DOI metadata checked. | Verified coauthored surface-structure and angular-response context. |
| `dlip2024` | Gabirondo-López, J., et al. (2024). *Directional spectral emissivity characterization and modeling of laser-patterned steel surfaces*. EPJ Web of Conferences 309, 13003. [DOI](https://doi.org/10.1051/epjconf/202430913003) | Publisher PDF text/first page and Fraunhofer primary record checked; DOI metadata verified. | Optional precursor, included in `.bib` but not cited redundantly in manuscript. |
| `brukerVacuum` | Bruker Optics. *Vacuum Advantages: Isolate Yourself from the Elements*, Product Note T18-07/08. [Manufacturer PDF](https://www.bruker.com/en/products-and-solutions/infrared-and-raman/ft-ir-research-spectrometers/high-end-vacuum-research/_jcr_content/root/sections/section_1952284321/sectionpar/twocolumns/contentpar-1/calltoaction_copy_co_2135081000.download-asset.pdf/primaryButton/PN_T18_VacuumAdvantages_EN.pdf) | Manufacturer text checked. | Atmospheric band locations as diagnostic checks. |

## Additional checks and leads

- [Labsphere Infragold technical description](https://www.labsphere.com/resources/application-based-infragold-spheres-2/): manufacturer effective-range statement checked; not a certificate for the actual reference.
- [USGS Spectral Library](https://www.usgs.gov/labs/spectroscopy-lab/usgs-spectral-library): primary source for possible later comparison, with sample descriptions and characterization. No library spectra were downloaded, matched or fitted in this review.
- Ni oxidation, DOI 10.1016/j.infrared.2019.01.002; V–Cr–Ti alloys, DOI 10.1016/j.jnucmat.2018.10.051: found in the older CV. Not needed to support the revised sand argument; not independently re-audited here.
- fer: identified in thesis and CV, but publisher DOI verification remained incomplete. Do not turn the discovery into a fully verified journal citation. The thesis itself supplies the local reporting context.

## Retrieval and evidence files

`retrieval_log.json` records the initial seven download attempts. `additional_retrieval_log.json` records two successful RIT downloads using the system TLS trust after Python's certificate validation failed. No TLS verification was disabled. Access-denied and rate-limited requests were not repeatedly attempted. Final downloaded PDFs are Salisbury 1992, Salisbury 1994 and JCGM 100:2008 only. The two Salisbury PDFs are scanned: blank text extractions are not evidence of full-text reading.

`crossref_metadata.json` preserves the exact successful DOI records and the one failed response. `build_bibliography.py` generates the reference file from those records plus the primary-verified Blake and GUM entries. Metadata verification alone is not claimed as full-text verification.
