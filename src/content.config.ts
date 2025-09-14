import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const postCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/post" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(100, "descriptionは100文字以内"),
    published: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  post: postCollection,
};
