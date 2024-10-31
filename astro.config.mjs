import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "http://localhost:4322/",
  integrations: [preact()]
});