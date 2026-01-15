# Portfolio

Modern personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Quick start

```bash
pnpm install
pnpm dev
```

If you prefer npm:

```bash
npm install
npm run dev
```

## Scripts

- `dev`: start the development server
- `build`: production build
- `start`: run the production server
- `lint`: run ESLint
- `format`: run Prettier

## Customize content

Edit these single-source content files:

- `content/profile.ts`: name, role, bio, links, home/about/contact/resume/privacy copy
- `content/projects.ts`: project list, tags, stack, highlights, detail sections
- `content/experience.ts`: timeline entries

Replace images in `public/images/projects/` and the PDF at `public/resume.pdf`.

## Deployment

### GitHub Pages

This repo is configured for GitHub Pages with automatic deployment:

1. Push the repository to GitHub.
2. Go to your repository Settings → Pages.
3. Under "Build and deployment", select Source: **GitHub Actions**.
4. Push to the `main` branch to trigger automatic deployment.
5. Your site will be available at `https://[username].github.io/[repo-name]`.

The GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) automatically builds and deploys on every push to `main`.

### Alternative: Vercel

You can also deploy to Vercel:

1. Remove the `output: "export"` line from [next.config.js](next.config.js).
2. Change `images.unoptimized` to `formats: ["image/avif", "image/webp"]`.
3. Import into Vercel.
4. Set `NEXT_PUBLIC_SITE_URL` or update [next-sitemap.config.js](next-sitemap.config.js) with your domain.

## Notes on best practices

- App Router with server components by default
- Accessible navigation, skip link, and keyboard-friendly UI
- SEO metadata, OpenGraph/Twitter cards, JSON-LD
- next-sitemap for `sitemap.xml` and `robots.txt`
- Tailwind CSS with responsive, mobile-first layout
- Theme toggle with system default and SSR-safe hydration
