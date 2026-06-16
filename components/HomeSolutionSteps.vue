<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    
    <!-- Design Accents -->
    <div class="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#0B3D91_1px,transparent_1px),linear-gradient(to_bottom,#0B3D91_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-lightblue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          The New Chapter Advantage
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 600 } }"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight"
        >
          Fix It Up. Maximize Profit. Move Worry-Free.
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 300, duration: 600 } }"
          class="mt-4 text-lg text-slate-600 leading-relaxed"
        >
          We invest our own money to repair and update your home before selling it, unlocking thousands in hidden equity—with $0 out-of-pocket costs to you.
        </p>
      </div>

      <!-- Steps Grid Matrix -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div 
          v-for="(step, index) in steps" 
          :key="step.num"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 150, duration: 600 } }"
          class="relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-100 border border-slate-100 flex flex-col justify-between group hover:border-brand-lightblue/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div>
            <!-- Step Number Badge -->
            <div class="flex items-center justify-between mb-8">
              <span class="text-4xl font-black text-slate-200/80 group-hover:text-brand-lightblue/20 transition-colors duration-300">
                {{ step.num }}
              </span>
              <!-- UI Accent Icons matching each step purpose -->
              <div class="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <svg v-if="index === 1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <svg v-if="index === 2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <!-- Title & Description text blocks -->
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors duration-300">
              {{ step.title }}
            </h3>
            <p class="mt-4 text-slate-600 text-sm leading-relaxed">
              {{ step.description }}
            </p>
          </div>

          <!-- Bottom Micro-indicator anchor to draw the eye down -->
          <div class="mt-8 pt-4 border-t border-slate-50 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-terracotta"></span>
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">100% Risk-Free Commitment</span>
          </div>
        </div>
      </div>

      <!-- Under-Grid Trust Banner for Target Demographic -->
      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 600 } }"
        class="mt-16 bg-gradient-to-r from-brand-blue to-brand-lightblue rounded-3xl p-8 lg:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
        <div class="max-w-xl text-center lg:text-left">
            <h4 class="text-xl lg:text-2xl font-bold">Behind on payments or dealing with a stressful property?</h4>
            <p class="text-white/80 text-sm mt-2 leading-relaxed">
            Don't walk away from your home's true equity or sell it cheap as-is. Let us take care of the renovations, cover your transition, and secure the clean break you deserve.
            </p>
        </div>
        <button class="px-8 py-4 bg-brand-terracotta hover:bg-opacity-95 font-bold text-white rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer">
            View Our Process
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    num: "01",
    title: "Zero-Cost Restoration",
    description: "We handle and fund 100% of the upfront repairs, deep cleaning, and modern updates needed to command top-dollar for your property in Harrisonburg."
  },
  {
    num: "02",
    title: "Temporary Housing Support",
    description: "No displacement stress. If your home requires major renovations, we can assist with putting you up in comfortable temporary housing while our teams work."
  },
  {
    num: "03",
    title: "Maximized Profit at Closing",
    description: "We list and sell the house at its absolute peak value. Our restoration costs are simply deducted from the increased profit at closing—if the house doesn't profit, we don't get paid."
  }
]
</script>