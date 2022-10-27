import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  runtimeConfig: {
    //secretSauce: 'SECRET SAUCE NOT ADDED, CHECK FOR NUXT_SECRET_SAUCE',
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

  components: [
    //global: true,
    '~/components',
    { path: '~/components/layout', extensions: ['vue'] },
    { path: '~/components/layout/grid', extensions: ['vue'] },
    { path: '~/components/cards-widgets', extensions: ['vue'] },
    { path: '~/components/sections', extensions: ['vue'] }
  ],

  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/': { swr: true },
    // Static page generated on-demand once
    '/portfolio/**': { static: true },


    // Add cors headers
    '/api/**': { cors: true },
  },
  
  experimental: {
    payloadExtraction: false
  }

})
