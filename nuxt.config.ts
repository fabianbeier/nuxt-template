import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   buildModules: [
      'nuxt-windicss',

    ],
    modules: [
      "nuxt-directus",
      '@vueuse/nuxt',
   ],
   css: [
      "@/assets/main.css"
   ],
    directus: {
      url: 'https://cms.futuretales.space/'
    }
})
