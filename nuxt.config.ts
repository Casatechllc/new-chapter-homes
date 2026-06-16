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

  // Register Tailwind CSS v4 using the Vite plugin engine
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  // Optional Swiper Config: Prevents SSR mismatches for Swiper custom elements if using them
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('swiper-')
    }
  }
})