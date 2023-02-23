import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      content: {
        anchorLinks: {
          depth: 0
        }
      },
    }
  },
  modules: [
    "@nuxt/content"
  ],
  components: {
    global: true,
    dirs: ["~/components"]
  }
});
