# SIMAN Image Replacement Guide

The homepage supports direct real-image replacement through one config file.

## 1. Add images

Put optimized WebP/JPG/PNG files under:

```text
public/assets/
```

Recommended paths are listed in `public/assets/README.md`.

## 2. Fill image paths

Open:

```text
src/siteAssets.ts
```

Fill the relevant field with a public path. Example:

```ts
export const siteAssets = {
  logo: '/assets/logo/siman-logo.svg',
  hero: '/assets/hero/hero-soap-family.webp',
  products: {
    soap: '/assets/products/soap.webp',
    handmadeSoap: '/assets/products/handmade-soap.webp',
    laundrySoap: '/assets/products/laundry-soap.webp',
    soapBase: '/assets/products/soap-base.webp',
    oliveOilSoap: '/assets/products/olive-oil-soap.webp',
    essentialOilSoap: '/assets/products/essential-oil-soap.webp',
    transparentSoap: '/assets/products/transparent-soap.webp',
    goatMilkSoap: '/assets/products/goat-milk-soap.webp',
  },
}
```

## 3. Empty path behavior

If a path is empty, the page automatically keeps the designed placeholder card.

This means assets can be replaced gradually without breaking the page.

## 4. Build check

After replacing images:

```bash
npm run build
```

Then review the page on:

- Desktop 1440px+
- Laptop 1280px
- Tablet 768px
- Mobile 390px

## 5. Certificate rule

Only use real certificate/report images. If documents are not confirmed, keep the placeholder and use safe wording such as:

- Test Reports Available
- Certification Support
- MSDS Report Available
- Certificate of Origin Support
