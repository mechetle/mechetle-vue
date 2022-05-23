import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    // Foundation:
    // (use the sass version in the future and then customize it so it no brokey)
    '~/assets/css/foundation.css',
    // Mechetle's global styling shit:
    '~/assets/scss/main.scss'
  ],

  generate: { fallback: '404.html' }

})
