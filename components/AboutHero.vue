<template>
  <section class="relative min-h-[80vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white">
    
    <!-- Soft Decorative Grid Accent -->
    <div class="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#0B3D91_1px,transparent_1px),linear-gradient(to_bottom,#0B3D91_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
    
    <!-- Top-Left Subtle Ambient Glow -->
    <div class="absolute -top-40 -left-40 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>

    <!-- BOTTOM-RIGHT ARCH GRADIENT DESIGN ELEMENT -->
    <div class="absolute -bottom-24 -right-24 w-[38rem] h-[38rem] sm:w-[48rem] sm:h-[48rem] lg:w-[56rem] lg:h-[56rem] pointer-events-none z-0">
      <!-- Curved Arch Layer 1: Outer Warm Glow -->
      <div class="absolute inset-0 rounded-tl-[100%] bg-gradient-to-tl from-brand-terracotta/10 via-brand-lightblue/10 to-transparent blur-2xl"></div>
      
      <!-- Curved Arch Layer 2: Main Smooth Gradient Arch -->
      <div class="absolute inset-12 rounded-tl-[100%] bg-gradient-to-br from-brand-blue/10 via-brand-lightblue/15 to-brand-terracotta/10 border-t border-l border-brand-blue/15 shadow-2xl backdrop-blur-[2px]"></div>
      
      <!-- Curved Arch Layer 3: Inner Accent Ring -->
      <div class="absolute inset-28 rounded-tl-[100%] bg-gradient-to-tl from-brand-blue/5 via-white/40 to-transparent border-t border-l border-brand-lightblue/20"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 max-w-5xl">
      <!-- Mission & Heart-Centered Narrative -->
      <div class="space-y-8 text-center lg:text-left max-w-3xl">
        
        <div class="space-y-4">
          <span 
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
            class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
          >
            Our Story &amp; Core Values
          </span>
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 500 } }"
            class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Real Estate Built on <br />
            <span class="text-gradient">Kindness, Not Corporate</span> Rules.
          </h1>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 250, duration: 500 } }"
          class="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed"
        >
          <p>
            We watched standard real estate companies and corporate flippers treat home purchases like cold math problems. They look for property vulnerabilities to drive down prices, leaving families feeling backed into a corner when navigating tough times.
          </p>
          <p class="text-base sm:text-lg font-medium text-slate-700">
            We knew our neighbors deserved something completely different. At {{ businessInfo.name }}, we built our entire model around absolute transparency, judgment-free listening, and direct cash buyouts stretched to their highest possible limit.
          </p>
        </div>

        <!-- People-First Credo Callout Badge + Local Anchor -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
          class="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-2"
        >
          <!-- Main Promise Card -->
          <div class="sm:col-span-8 p-5 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-sm flex items-start gap-4 text-left">
            <div class="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
              <i class="fa-solid fa-heart text-base"></i>
            </div>
            <div>
              <h4 class="text-xs font-black uppercase tracking-wider text-slate-400">Our Everyday Promise</h4>
              <p class="text-xs sm:text-sm text-slate-700 font-bold mt-1 leading-relaxed">
                We are a people company for the people. We promise to respect your timeline, protect your equity, and handle every physical detail completely as-is.
              </p>
            </div>
          </div>

          <!-- Local Community Badge -->
          <div class="sm:col-span-4 p-5 bg-slate-900 text-white rounded-2xl shadow-sm flex flex-col justify-center text-left border border-slate-800">
            <span class="text-[10px] uppercase font-black text-brand-lightblue tracking-widest block">Local &amp; Rooted</span>
            <p class="text-sm font-extrabold text-white mt-1">
              {{ businessInfo.name }}
            </p>
            <p class="text-xs text-slate-400 mt-1 leading-tight">
              Operating right here in {{ businessInfo.addressShort }}, serving our local neighbors.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { businessInfo } from '~/data/businessInfo'
</script>