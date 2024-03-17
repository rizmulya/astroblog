import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    author: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string().optional(),
    }),
    description: z.string(),
    draft: z.boolean(),
    category: z.string(),
  }),
});

export const collections = { blog };
