import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const poems = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/data/poems' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { poems };
