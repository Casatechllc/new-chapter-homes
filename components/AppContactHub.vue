<template>
  <!-- FLOATING SPEED DIAL CONTACT ACTION HUB -->
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 rounded-full">
    
    <!-- Smooth Sliding Grid Wrapper -->
    <div 
      class="grid transition-all duration-300 ease-in-out"
      :class="isOpen ? 'grid-rows-[1fr] opacity-100 mb-1' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
    ">
      <!-- Overflow-hidden lets the element collapse natively down to 0px -->
      <div class="overflow-hidden flex flex-col items-center gap-3 bg-brand-blue/20 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-xl">
        <a 
          v-for="(action, index) in contactActions" 
          :key="action.label"
          :href="action.link"
          :target="action.target"
          :rel="action.target ? 'noopener noreferrer' : undefined"
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
          <component :is="action.icon" class="w-5 h-5" />
        </a>
      </div>
    </div>

    <!-- Core Interactive Toggle Floating Button (Bounces on Hover) -->
    <button 
      @click="isOpen = !isOpen"
      v-motion
      :hovered="{ scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 10 } }"
      :pressed="{ scale: 0.92 }"
      class="w-14 h-14 rounded-full bg-brand-terracotta text-white shadow-2xl flex items-center justify-center cursor-pointer border border-brand-terracotta/20 focus:outline-none"
    >
      <!-- Smooth Rotational Toggle SVG Cross -->
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 transform transition-transform duration-300"
        :class="{ 'rotate-135': isOpen }"
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
      </svg>
    </button>

  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { businessInfo } from '~/data/businessInfo'

const info = businessInfo
const isOpen = ref(false)

// State-Driven Variant Mapping to perfectly coordinate with the click open/close cycle
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

// Inline Functional SVG render wrappers
const PhoneIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' })])
const EmailIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })])
const MapIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }), h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })])
const InstagramIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '5', ry: '5' }), h('path', { d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01' })])
const FacebookIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' })])

const contactActions = [
  { label: 'Call Office', icon: PhoneIcon, link: `tel:${info.rawPhone}`, target: '_self' },
  { label: 'Email Us', icon: EmailIcon, link: `mailto:${info.email}`, target: '_self' },
  { label: 'Office Directions', icon: MapIcon, link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.addressLong)}`, target: '_blank' },
  { label: 'Instagram', icon: InstagramIcon, link: 'https://instagram.com/newchapterhomes', target: '_blank' },
  { label: 'Facebook', icon: FacebookIcon, link: 'https://facebook.com/newchapterhomes', target: '_blank' }
]
</script>