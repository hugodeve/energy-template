// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://resolvecuritiba.com.br/newsite",
  i18n:{
    defaultLocale: 'en',
    locales: ['en', 'pt']
  },
  routing: {
    prefixDefaultLocate: 'en'
  },
  base: "/newsite/", // Update this to match your actual deployment path
});
