import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://yoursite.com",
  integrations: [sitemap(), tailwind({nesting: true}), icon()],
});
