<template>
  <div class="relative min-h-screen bg-white text-slate-900 overflow-x-hidden">
    
    <!-- DYNAMIC SCROLL-DRIVEN BACKGROUND PORTAL -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        class="absolute rounded-full bg-brand-blue/20 blur-[120px] will-change-transform transition-all duration-200 ease-out"
        :style="{
          width: `${baseSize + scrollY * 0.4}px`,
          height: `${baseSize + scrollY * 0.1}px`,
          left: '10%',
          top: `${verticalPosition}%`,
          transform: 'translate(-50%, -50%)'
        }"
      ></div>
    </div>

    <!-- MAIN INTERACTIVE HOMEPAGE COMPONENTS -->
    <div ref="pageContainer" class="relative z-10">
      <ProcessHero />
    <ProcessPreSection />
    <ProcessActiveTransformation />
    <ProcessMarketLaunch />
    <ProcessPostSection />
    <ProcessFAQ />
    </div>    
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useScroll } from '@vueuse/core'

const pageContainer = ref<HTMLElement | null>(null)
const maxScroll = ref(1000) // Safe fallback container height during initial SSR pass

// Track real-time scroll metrics from the window object via VueUse
const { y: scrollY } = useScroll(window)

// Base diameter size of the glowing circle asset in pixels at the very top of the page
const baseSize = 400

// Recalculate total available scroll depth accurately on the client side
onMounted(() => {
  if (pageContainer.value) {
    maxScroll.value = pageContainer.value.scrollHeight - window.innerHeight
  }
})

// Dynamic calculation mapping the scroll position to a 100% -> 0% vertical track
const verticalPosition = computed(() => {
  if (maxScroll.value <= 0) return 100
  
  // Calculate the percentage scrolled (0 to 1)
  const scrollRatio = Math.min(Math.max(scrollY.value / maxScroll.value, 0), 1)
  
  // Inverse it so it starts at 100% (bottom) and scales toward 0% (top)
  return 100 - scrollRatio * 100
})
</script>