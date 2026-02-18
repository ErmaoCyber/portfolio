# Portfolio

Source code for my personal website.

This repository contains a React + Vite single-page application used as the development project for my portfolio site. The site is continuously updated as I learn, build, and refine new software engineering work.

The purpose of this repository is not to archive specific projects, but to provide a stable and maintainable website where my work, experience, and background can be presented over time.

---

## Tech Stack

- React
- Vite
- JavaScript (ES Modules)
- CSS
- GitHub Pages (deployment)

---

## Development

Run locally:

```bash
npm install
npm run dev
```

Then open:
http://localhost:5173

---

## Build

Create a production build:

```bash
npm run build
```

The compiled static files will be generated in the `dist/` directory.

---

## Deployment

Deployment is fully automated using GitHub Actions.

When changes are pushed to the `main` branch:

1. The site is built automatically
2. The build output is published to the `ermaocyber.github.io` repository
3. GitHub Pages serves the website

Live site:
https://ermaocyber.github.io/

---

## Notes

This repository contains the website **source code** only.

The published website files are stored in a separate deployment repository:
`ermaocyber.github.io`