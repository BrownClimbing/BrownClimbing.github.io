// 1. Import utilities from `astro:content`
// import { z, defineCollection } from 'astro:content';

import { defineCollection, z } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const eventCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    date: z.string(),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string();
  }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  events: eventCollection,
};
