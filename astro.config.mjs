// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  site: "https://resolvecuritiba.com.br/newsite",
  base: "/newsite/", // Update this to match your actual deployment path
});
