import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({    
    css: [
        // Foundation:
        // (use the sass version in the future and then customize it so it no brokey)
        '~/assets/css/foundation.css',
        // Mechetle's global styling shit:
        '~/assets/scss/stylesheet.scss'
    ]

})
