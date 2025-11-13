# Portfolio

Preview Link: https://deny-hl.github.io/portfolio/

## Getting Started

```bash
npm install
npm run dev
```

`npm run dev` starts Parcel in development mode and opens the site in your default browser. Updates to HTML, SCSS, or JS files trigger hot reloads.

## Available Scripts

- `npm run dev` – start Parcel with live reload.
- `npm run build` – create a production build in the `dist` directory.
- `npm run preview` – serve the production build locally for final QA.

## Project Structure

```
src/
├── assets/
│   ├── docs/         # Resume and downloadable documents
│   ├── fonts/        # Local web fonts
│   └── images/       # Static imagery used across the site
├── js/
│   ├── index.js              # Bundle entry point
│   ├── mobileMenu.js         # Accessible mobile navigation
│   ├── navActiveSection.js   # In-view section tracker for nav links
│   └── scrollAnimations.js   # IntersectionObserver-powered reveals
└── scss/
    ├── base/     # Variables, mixins, resets, typography
    ├── layout/   # Global layout primitives (header, footer, sections)
    ├── blocks/   # BEM component styles (hero, skills, projects, etc.)
    ├── utils/    # Animations and responsive helpers
    └── main.scss # Root stylesheet importing all partials
```

## Deployment

1. Run `npm run build`.
2. Deploy the generated `dist` folder (e.g., to GitHub Pages).

## Notes

- Class naming follows the BEM methodology for maintainability.
- Animations respect `prefers-reduced-motion` for accessibility.
- JavaScript modules are vanilla ES modules bundled by Parcel.