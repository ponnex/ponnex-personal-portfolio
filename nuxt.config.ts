// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxtjs/color-mode', 'nuxt-phosphor-icons'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables/_variables.scss" as *;'
        }
      }
    }
  }
})
