// import { defineNuxtConfig } from "nuxt";
// import { generateSitemap } from "./sitemap";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Max Stouten",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Max Stouten is a Frontend Developer specialized in Vue.js and Nuxt.js based in Melbourne.",
        },
        {
          hid: "author",
          name: "author",
          content: "Max Stouten",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Max Stouten",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Max Stouten is a Frontend Developer specialized in Vue.js and Nuxt.js based in Melbourne.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://maxstouten.com/raj-og-img.png",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://maxstouten.com",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@maxstouten",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@maxstouten",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Max Stouten",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Max Stouten is a Frontend Developer specialized in Vue.js and Nuxt.js based in Melbourne.",
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/icon.png",
        },
        {
          rel: "canonical",
          href: "https://maxstouten.com",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/27ec220848.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  ssr: true,
  target: "server",
  modules: [
    "bootstrap-vue-3/nuxt", '@nuxtjs/color-mode',
    // [
    //   '@pinia/nuxt',
    //   {
    //     autoImports: ['defineStore', 'acceptHMRUpdate'],
    //   },
    // ],
  ],
  // modules: ["bootstrap-vue-3/nuxt", '@nuxtjs/color-mode'],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/style.css",
    "~/assets/css/fonts.css",
  ],
  // hooks: {
  //   "build:before": () => {
  //     // generateSitemap();
  //   },
  // },
  vite: {
    optimizeDeps: {
      exclude: ["class-validator"],
    },
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
  },
  runtimeConfig: {
    private: {},
    public: {
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  buildModules: ["@pinia/nuxt"],
});
