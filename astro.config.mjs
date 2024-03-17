import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kamewalk.com",
  redirects: {
    '/blog/': '/blog/1/',
  },
  integrations: [expressiveCode({
    themes: ['dracula'],
    styleOverrides: {
      codeFontSize: '1rem'
    }
  }), mdx(), sitemap()]
});