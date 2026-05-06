import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/site' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    heroLead: z.string(),
    heroSublead: z.string(),
    portraitAlt: z.string(),
    portraitCaption: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    kicker: z.string(),
    summary: z.string(),
    tileLabel: z.string(),
    highlights: z.array(z.string()).min(2).max(3),
    items: z.array(z.string()).min(1),
  }),
});

export const collections = {
  site,
  services,
};
