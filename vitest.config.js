// vitest.config.ts
import { fileURLToPath } from "node:url";
import { defineVitestConfig } from "@nuxt/test-utils/config";
import vue from "@vitejs/plugin-vue";

export default defineVitestConfig({
  plugins: [],
  test: {
    globals: true,
    environment: "nuxt",
  },
});
