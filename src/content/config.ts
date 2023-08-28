import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().max(100, "descriptionは100文字以内"),
    published: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  post: postCollection,
};
