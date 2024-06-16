// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/supporting-style.css",
    "animate.css/animate.min.css",
  ],
  image: {
    dir: "assets/img",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    // Options
    preconnect: true,
    prefetch: true,
    display: "swap",
    Lato: "400-900",
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "vue3-carousel-nuxt",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
  ],
  carousel: {
    prefix: "MyPrefix",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
