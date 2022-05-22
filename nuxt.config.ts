import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    // Mechetle's global styling shit:
    '~/assets/scss/main.scss'
  ],

  generate: { fallback: '404.html' }

})
