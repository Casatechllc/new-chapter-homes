import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Define compatibility date for Nuxt features
  compatibilityDate: '2025-07-15',

  // Enable Nuxt devtools for a better development experience
  devtools: { enabled: true },

  // Register Nuxt modules
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxt/image'
  ],

  // Inject your global Tailwind CSS entry file
  css: ['~/assets/css/main.css'],

  // 1. CRITICAL MISSING LINK: Explicitly route PostCSS build compilation
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Register Tailwind CSS v4 using the Vite plugin engine
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  app: {
    head: {
      link: [
        // 2. FIXED: Properly separated preconnect links for high performance Google Font delivery
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;700;800&family=Caveat:wght@500;700&display=swap' }
      ]
    }
  },

  // Optional Swiper Config: Prevents SSR mismatches for Swiper custom elements if using them
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('swiper-')
    }
  }
})