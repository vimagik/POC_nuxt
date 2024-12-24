// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', 'nuxt-directus'],
  runtimeConfig: {
    public: {
      directus: {
        url: "http://localhost:8055"
      }
    }
  }
})