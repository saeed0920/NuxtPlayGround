// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    vue: {
      customElement: true,
    },
  },
  devtools: { enabled: true },
  vue: { propsDestructure: true },
});
