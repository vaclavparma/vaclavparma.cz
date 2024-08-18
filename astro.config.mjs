import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://vaclavparma.cz",
  integrations: [sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: '@import "./src/global.css";',
        },
      },
    },
  },
});
