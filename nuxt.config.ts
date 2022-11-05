
export default defineNuxtConfig({
  runtimeConfig: {
    //secretSauce: 'SECRET SAUCE NOT ADDED, CHECK FOR NUXT_SECRET_SAUCE',
    secretSauce: process.env.NUXT_SECRET_SAUCE,
  },

  css: [
    // Mechetle's global styling shit:
    '~/assets/scss/main.scss'
  ],

  /* modules: [
    '@nuxt/image-edge',
  ], */

  generate: { fallback: '404.html' },

  components: [
    //global: true,
    '~/components',
    { path: '~/components/layout', extensions: ['vue'] },
    { path: '~/components/layout/grid', extensions: ['vue'] },
    { path: '~/components/cards-widgets', extensions: ['vue'] },
    { path: '~/components/sections', extensions: ['vue'] }
  ],

  routeRules: {
    /* // Static page generated on-demand, revalidates in background
    '/': { swr: true }, */
    
    
    // Static page generated on-demand once for portfolio pages
    //'/portfolio/**': { static: true },

    // Add cors headers
    '/api/**': { cors: true},
  },
  
  /* experimental: {
    payloadExtraction: false
  } */

})
