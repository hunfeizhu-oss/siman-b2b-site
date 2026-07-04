# SIMAN B2B Site

A React + TypeScript + Tailwind one-page B2B independent-site homepage for Zhejiang Siman Biotechnology Co., Ltd.

## Positioning

SIMAN is presented as an OEM / ODM soap and personal-care manufacturing partner for global brands, wholesalers, distributors, supermarkets and project buyers.

## Product scope

- Soap / Toilet Soap
- Handmade Soap
- Laundry Soap
- Soap Base
- Extended personal-care categories: Shampoo, Shower Gel, Bath Salt

## Homepage sections

1. Header Navigation
2. Hero Banner
3. Product Categories
4. Featured Products
5. OEM / ODM Solutions
6. Factory & Production Capacity
7. Advanced Equipment
8. Quality & Certifications
9. Export Support
10. About SIMAN
11. Latest Blog
12. CTA + Footer

## Visual system

- Main color: `#173F22`
- Support color: `#F7F4EE`
- Accent: muted copper / warm clay
- Style: premium B2B, clean manufacturing, low-AI, high trust
- Layout: conversion-first one-page homepage with real-image replacement slots

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build output will be generated in `dist/`.

## Image replacement workflow

The homepage supports gradual image replacement.

1. Put optimized real images into `public/assets/`.
2. Open `src/siteAssets.ts`.
3. Fill the matching path, for example `hero: '/assets/hero/hero-soap-family.webp'`.
4. Empty fields automatically keep the designed placeholder blocks.
5. Detailed instructions are in `IMAGE_REPLACEMENT_GUIDE.md`.

## Handoff files

- `SIMAN_CONTENT_MAP.md` — homepage copy and real-asset replacement map
- `public/assets/README.md` — real website image folder structure and image rules
- `src/siteAssets.ts` — editable image path map
- `IMAGE_REPLACEMENT_GUIDE.md` — step-by-step image replacement guide
- `DEPLOYMENT.md` — static deployment instructions

## Compliance note

Do not invent certificates, client logos, partner brands, certificate numbers, export approvals or unverified testing claims. Use safe wording such as `Test Reports Available`, `Certification Support`, `MSDS Report Available`, and `Certificate of Origin Support` unless the real document is provided.
