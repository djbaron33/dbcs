# Devin Baron Creative Services

Single-page Astro site for an a la carte creative services brand. The content is set up so you can edit most of the copy and service offerings in MDX files instead of digging through layout code.

## Run it locally

```sh
npm install
npm run dev
```

Astro will start at `http://localhost:4321`.

## Where to edit things

- Homepage copy: `src/content/site/home.mdx`
- Service categories and individual offerings: `src/content/services/*.mdx`
- Page layout and styling: `src/pages/index.astro`
- Shared shell and fonts: `src/layouts/BaseLayout.astro`
- Portrait placeholder image: `public/images/self-portrait-placeholder.svg`

## Editing services

Each file in `src/content/services/` represents one tile and one large section on the homepage.

- Change the intro text in the MDX body.
- Change the tile text in the frontmatter fields like `summary`, `tileLabel`, and `highlights`.
- Add or remove specific services in the `items` array.

## Notes for later

- The current portrait is a placeholder. Replace it with your real self-portrait when ready.
- Vercel is not configured yet.
- If you want a contact form, pricing, case studies, or separate service detail pages next, those can be layered on without changing the content structure much.
