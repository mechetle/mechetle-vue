import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  runtimeConfig: {
    secretSauce: process.env.NUXT_SECRET_SAUCE,
  },

  css: [
    // Mechetle's global styling shit:
    '~/assets/scss/main.scss'
  ],
  /* script: [
    // <script src="https://myawesome-lib.js"></script>
    { src: '~/assets/' }
  ],
 */
  generate: { fallback: '404.html' },

  //build: {
  //  transpile: ['lottie-web-vue']
  //},

  components: {
    global: true,
  },

})
