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

This repo is Vercel-ready:

1. Push the repository to GitHub.
2. Import into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` or update `next-sitemap.config.js` with your domain.
4. Deploy.

## Notes on best practices

- App Router with server components by default
- Accessible navigation, skip link, and keyboard-friendly UI
- SEO metadata, OpenGraph/Twitter cards, JSON-LD
- next-sitemap for `sitemap.xml` and `robots.txt`
- Tailwind CSS with responsive, mobile-first layout
- Theme toggle with system default and SSR-safe hydration
