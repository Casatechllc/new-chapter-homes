<template>
  <section class="relative py-20 lg:py-28 overflow-hidden bg-slate-50/40 border-t border-b border-slate-100">
    
    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Our Trusted Network
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight"
        >
          Local Partners Making a Difference
        </h2>
        <p class="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          Being a true community-first company means collaborating with exceptional local teams. We work hand-in-hand with these operators to find short-term safety and coordinate long-term transitions.
        </p>
      </div>

      <!-- Partners Dynamic Grid Framework -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center max-w-5xl mx-auto">
        <div 
          v-for="(partner, index) in businessInfo.partners" 
          :key="partner.name"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: index * 75, duration: 400 } }"
          class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col items-center justify-between min-h-[150px] group hover:shadow-md hover:border-brand-blue/10 transition-all duration-300"
        >
          <!-- Main Core Brand Logo Link Wrap -->
          <a 
            :href="partner.website" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full flex items-center justify-center flex-grow py-3 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-102"
            :title="'Visit ' + partner.name + ' website'"
          >
            <!-- Nuxt Image Element fallback safely container handling standard SVG parameters -->
            <NuxtImg 
              :src="partner.logo" 
              :alt="partner.name + ' Logo'"
              loading="lazy"
              class="max-h-12 w-auto object-contain mx-auto"
            />
          </a>

          <!-- Dynamic Social Media Handles Conditional Drawer Block -->
          <div 
            v-if="hasSocials(partner.socials)" 
            class="w-full border-t border-slate-50 pt-3 mt-2 flex items-center justify-center gap-3 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          >
            <!-- Facebook link track injection -->
            <a 
              v-if="partner.socials.facebook" 
              :href="partner.socials.facebook" 
              target="_blank" 
              rel="noopener noreferrer"
              class="hover:text-brand-blue transition-colors p-1"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.42 0-4 1.36-4 4v2z"/>
              </svg>
            </a>

            <!-- Instagram link track injection -->
            <a 
              v-if="partner.socials.instagram" 
              :href="partner.socials.instagram" 
              target="_blank" 
              rel="noopener noreferrer"
              class="hover:text-brand-terracotta transition-colors p-1"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { businessInfo } from '~/data/businessInfo'

// Simple script check logic checking if a specific item object actually has keys populated
const hasSocials = (socials: Record<string, string> | undefined) => {
  if (!socials) return false
  return Object.keys(socials).length > 0
}
</script>