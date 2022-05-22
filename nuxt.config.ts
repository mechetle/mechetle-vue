import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    // Mechetle's global styling shit:
    '~/assets/scss/main.scss'
  ],
  script: [
    // <script src="https://myawesome-lib.js"></script>
    { src: '~/assets/js/rellax.min.js' }
  ],

  generate: { fallback: '404.html' }

})
