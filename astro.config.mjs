import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://resolvecuritiba.com.br/newsite",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  // routing: {
  //   prefixDefaultLocate: "en",
  // },
  base: "/newsite",
})
