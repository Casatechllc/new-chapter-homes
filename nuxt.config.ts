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
    '@nuxt/image',
    '@nuxtjs/supabase'
  ],

  supabase: {
    redirect: false
  },

  runtimeConfig: {
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    adminEmail: process.env.ADMIN_EMAIL,
    noreplyAlias: process.env.NOREPLY_ALIAS,
    public: {
      tenantId: process.env.NUXT_PUBLIC_TENANT_ID || ''
    }
  },

  // Inject your global Tailwind CSS entry file
  css: ['~/assets/css/main.css'],

  // Register Tailwind CSS v4 using the Vite plugin engine
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  app: {
    head: {
      title: 'New Chapter Homes LLC | People-First Real Estate Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Fair upfront cash offers and transparent profit-share options with zero fees or obligations. We guide your housing transition every step of the way.' 
        },
        // Open Graph / Facebook / LinkedIn Metadata
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'New Chapter Homes LLC | People-First Real Estate Solutions' },
        { property: 'og:description', content: 'Get a custom cash offer and keep total control with zero hidden fees. We help families navigate home transitions smoothly.' },
        { property: 'og:image', content: 'https://new-chapter-homes.netlify.app/new-chapter-homes-llc-icon.png' },
        
        // Twitter Card Metadata
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'New Chapter Homes LLC' },
        { name: 'twitter:description', content: 'Transparent cash offers and zero-stress housing transitions.' },
        { name: 'twitter:image', content: 'https://new-chapter-homes.netlify.app/new-chapter-homes-llc-icon.png' }
      ],
      link: [
        // Favicon & Touch Icon Configs using icon file
        { rel: 'icon', type: 'image/png', href: 'https://new-chapter-homes.netlify.app/new-chapter-homes-llc-icon.png' },
        { rel: 'apple-touch-icon', href: 'https://new-chapter-homes.netlify.app/new-chapter-homes-llc-icon.png' },
        
        // External Fonts & Icon Libraries
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;700;800&family=Caveat:wght@500;700&display=swap' 
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
          crossorigin: 'anonymous'
        }
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