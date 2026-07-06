# SIMAN B2B Site Deployment Guide

## Local preview

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

The production output will be generated in:

```text
dist
```

## Static hosting options

The project is a Vite static frontend and can be hosted on:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any server that can serve static files from `dist/`

## Vercel setup

| Field | Value |
|---|---|
| Framework Preset | Vite |
| Root Directory | project root |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

## GitHub Pages

This repository includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

If GitHub Pages is enabled with `GitHub Actions` as the source, the site should deploy to:

```text
https://hunfeizhu-oss.github.io/siman-b2b-site/
```

## Before going live

1. Replace all placeholder image slots with real assets from `public/assets/`.
2. Confirm final company logo.
3. Confirm phone, email and address.
4. Confirm certificate/report images and remove any unverified claims.
5. Run `npm run build` and check mobile layout.
6. Check all CTA links and email addresses.
7. Compress images to WebP and verify page loading speed.
