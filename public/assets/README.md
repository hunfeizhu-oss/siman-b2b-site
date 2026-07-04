# SIMAN Real Asset Folder

Put final delivery images in this folder before production deployment.

Recommended structure:

```text
public/assets/
  logo/
    siman-logo.svg
  hero/
    hero-soap-family.webp
  products/
    soap.webp
    handmade-soap.webp
    laundry-soap.webp
    soap-base.webp
    olive-oil-soap.webp
    essential-oil-soap.webp
    transparent-soap.webp
    goat-milk-soap.webp
  oem/
    custom-packaging.webp
    label-design.webp
    mold-shape.webp
  factory/
    exterior.webp
    production-line.webp
    workers-machines.webp
    warehouse-packing.webp
  equipment/
    three-roll-grinder.webp
    plodder.webp
    conveyor.webp
  certificates/
    certificate-01.webp
    certificate-02.webp
    report-01.webp
    inspection-record.webp
  export/
    cartons.webp
    loading.webp
    container.webp
  about/
    building.webp
    office-lab.webp
    team.webp
  blog/
    soap-brand-guide.webp
    natural-ingredients.webp
    oem-process.webp
```

## Image rules

- Use real product and factory photos whenever available.
- Prefer `.webp` for production loading performance.
- Keep original high-resolution source files outside this folder; only optimized website assets should be committed.
- Do not use fake certificate images, fake client logos or unverified testing marks.
- Do not upload personal private files or unlicensed images.

## Suggested dimensions

| Use case | Suggested size |
|---|---:|
| Hero image | 1400 × 1000 px |
| Category image | 800 × 600 px |
| Featured product | 800 × 800 px |
| Factory image | 1200 × 800 px |
| Certificate image | 900 × 1200 px |
| Blog thumbnail | 900 × 600 px |

After assets are prepared, fill paths in `src/siteAssets.ts`.
