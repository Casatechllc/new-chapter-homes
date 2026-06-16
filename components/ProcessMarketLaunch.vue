<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    
    <!-- Subtle Boundary Divider Lines -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-5xl text-center">
      
      <!-- STAGE HEADER -->
      <div class="space-y-4 mb-16 lg:mb-20">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Stage C: The Market Launch
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Capturing <span class="text-gradient">Peak Retail Value</span>
        </h2>
      </div>

      <!-- HIGH-CONTRAST STEP DISPLAY MATRIX -->
      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.98, y: 30 }"
        :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 300, duration: 600 } }"
        class="bg-white rounded-3xl p-8 lg:p-16 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
      >
        <!-- Massive Gradient Accent Number Panel (4 Cols) -->
        <div class="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
          <span class="text-7xl sm:text-8xl font-black text-gradient block tracking-tighter">
            05
          </span>
          <span class="text-xs uppercase tracking-widest font-extrabold text-slate-400 mt-2 block">
            The Competitive Sale
          </span>
        </div>

        <!-- Detailed Strategic Text Panel (8 Cols) -->
        <div class="lg:col-span-8 space-y-4 lg:pl-4">
          <h3 class="text-2xl font-extrabold text-slate-900">
            Direct Strategic Listing
          </h3>
          <p class="text-slate-600 text-base leading-relaxed">
            Standard investors want to squeeze you into a fast, lowball cash offer so they can keep the profit margin for themselves. We do the exact opposite. Once your property is fully restored, we position it directly onto the competitive traditional retail market. 
          </p>
          <p class="text-slate-600 text-sm leading-relaxed">
            By presenting a pristine, move-in-ready home to everyday home buyers, we drive up demand, capture top-tier appraisal evaluations, and spark competitive offers. We don't hide your home in the shadows—we feature it on the open market to command the absolute highest return possible.
          </p>
        </div>
      </div>

      <!-- Micro Trust Callout Alignment -->
      <div 
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 600 } }"
        class="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-400"
      >
        <span class="flex items-center gap-2">
          <span class="text-brand-lightblue text-sm">✦</span> Listed On Local MLS Matrices
        </span>
        <span class="hidden sm:inline text-slate-200">|</span>
        <span class="flex items-center gap-2">
          <span class="text-brand-lightblue text-sm">✦</span> Open Market Exposure
        </span>
        <span class="hidden sm:inline text-slate-200">|</span>
        <span class="flex items-center gap-2">
          <span class="text-brand-lightblue text-sm">✦</span> Maximized Payout Target
        </span>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Completely self-contained high-contrast layout configuration block
</script>