<template>
  <!-- FLOATING SPEED DIAL CONTACT ACTION HUB -->
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 rounded-full">
    
    <!-- Smooth Sliding Grid Wrapper -->
    <div 
      class="grid transition-all duration-300 ease-in-out"
      :class="isOpen ? 'grid-rows-[1fr] opacity-100 mb-1' : 'grid-rows-[0fr] opacity-0 pointer-events-none'"
    >
      <!-- Overflow-hidden lets the element collapse natively down to 0px -->
      <div class="overflow-hidden flex flex-col items-center gap-3 bg-brand-blue/20 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-xl">
        <a 
          v-for="(action, index) in contactActions" 
          :key="action.label"
          :href="action.link"
          :target="action.target"
          :rel="action.target === '_blank' ? 'noopener noreferrer' : undefined"
          v-motion
          :variants="iconVariants"
          :variant="isOpen ? 'visible' : 'hidden'"
          :style="{ transitionDelay: isOpen ? `${index * 40}ms` : '0ms' }"
          class="group relative w-12 h-12 rounded-full bg-white/75 backdrop-blur-sm shadow-md flex items-center justify-center text-slate-700 hover:text-white hover:bg-brand-blue border border-white/40 transition-all duration-200"
        >
          <!-- Dynamic Floating Tooltip Tag -->
          <span class="absolute right-14 bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-md whitespace-nowrap">
            {{ action.label }}
          </span>
          
          <!-- Font Awesome Dynamic Icon Element -->
          <i :class="[action.icon, 'text-lg group-hover:scale-110 transition-transform duration-200']"></i>
        </a>
      </div>
    </div>

    <!-- Core Interactive Toggle Floating Button (Bounces on Hover) -->
    <button 
      @click="isOpen = !isOpen"
      v-motion
      :hovered="{ scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 10 } }"
      :pressed="{ scale: 0.92 }"
      class="w-14 h-14 rounded-full bg-brand-terracotta text-white shadow-2xl flex items-center justify-center cursor-pointer border border-brand-terracotta/20 focus:outline-none z-10 relative overflow-hidden"
    >
      <!-- Dynamic Operational Icon Layer -->
      <div class="relative w-6 h-6 flex items-center justify-center">
        <!-- Chat Bubble Icon (Visible when closed) -->
        <i 
          class="fa-solid fa-comments text-lg absolute transition-all duration-300"
          :class="isOpen ? 'opacity-0 scale-75 rotate-45' : 'opacity-100 scale-100 rotate-0'"
        ></i>
        
        <!-- Close/X Mark Icon (Visible when open) -->
        <i 
          class="fa-solid fa-xmark text-lg absolute transition-all duration-300"
          :class="isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-45'"
        ></i>
      </div>
    </button>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { businessInfo } from '~/data/businessInfo'

const info = businessInfo
const isOpen = ref(false)

// State-Driven Variant Mapping for click animation cycles
const iconVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.4, 
    y: 15,
    transition: { duration: 150 } 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 16
    } 
  }
}

const contactActions = [
  { label: 'Call Office', icon: 'fa-solid fa-phone', link: `tel:${info.rawPhone}`, target: '_self' },
  { label: 'Email Us', icon: 'fa-solid fa-envelope', link: `mailto:${info.email}`, target: '_self' },
  { label: 'Office Directions', icon: 'fa-solid fa-location-dot', link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.addressLong)}`, target: '_blank' },
  { label: 'Instagram', icon: 'fa-brands fa-instagram', link: 'https://instagram.com/newchapterhomes', target: '_blank' },
  { label: 'Facebook', icon: 'fa-brands fa-facebook-f', link: 'https://facebook.com/newchapterhomes', target: '_blank' }
]
</script>