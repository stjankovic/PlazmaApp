import { resolve } from 'path';
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
    },
  },
  plugins: ['~/plugins/disable-zoom.js', '~/plugins/disable-drag.js', '~/plugins/vue-touch-events.js'],
  modules: ['@vueuse/nuxt', '@nuxtjs/device'],
  alias: {
    '@': resolve(__dirname, "/")
  },
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})