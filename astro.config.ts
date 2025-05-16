import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
      resolve: {
          alias: {
              "@": "/src",
          },
      },

      plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],
});