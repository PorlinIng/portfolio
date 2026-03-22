import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    category:    z.enum(['architectural', 'facade', 'residential', 'interior', 'competition']),
    projectType: z.enum(['professional', 'competition', 'portfolio']),
    year:        z.union([z.number(), z.string()]),
    role:        z.string(),
    concept:     z.string(),
    coverImage:  z.string(),
    coverAlt:    z.string(),
    firm:        z.string().optional(),
    images:      z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
    featured:    z.boolean().default(false),
    hasGreenery: z.boolean().default(false),
    order:       z.number().default(99),
  }),
});

export const collections = { projects };
