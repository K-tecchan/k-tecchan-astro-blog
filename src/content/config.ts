import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().max(120, "descriptionは120文字以内"),
    published: z.string(),
    updated: z.ostring(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  post: postCollection,
};
