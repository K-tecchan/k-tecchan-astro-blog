import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kamewalk.com",
  redirects: {
    '/blog/': '/blog/1/',
    '/[tag]/[page]': '/tag/[tag]/[page]'
  },
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [mdx(), sitemap()],
});
