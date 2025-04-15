import { defineCollection, z } from 'astro:content';

// Define the schema for the portfolio collection
const portfolioCollection = defineCollection({
  // Changed from 'content' to 'data' which is the correct type in Astro
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    github: z.string().url(),
  }),
});

export const collections = {
  'portfolio': portfolioCollection,
}; 