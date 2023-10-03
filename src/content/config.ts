import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    city: z.string(),
    country: z.string(),
    state: z.string().optional(),
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
