// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    "~/components",
  ],
  modules: [
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    'nuxt-icon'
  ],
  css: ["@/src/assets/styles/_reset.scss", "@/src/assets/styles/main.scss"],
  imports: {
    dirs: ['store'],
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  }
})