<template>
  <section class="relative py-24 lg:py-32 overflow-hidden bg-white">
    
    <div class="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#0B3D91_1px,transparent_1px),linear-gradient(to_bottom,#0B3D91_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
    
    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      
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
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight"
        >
          We Buy Houses. <br />
          <span class="text-gradient">Maximized Offers.</span> No Deductions.
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 300, duration: 600 } }"
          class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
        >
          Whether your property is deeply in need of physical repair or you are navigating immediate financial distress, we structure competitive cash buyouts designed to keep your hard-earned equity in your pocket.
        </p>
      </div>

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
            <div class="flex items-center justify-between mb-8">
              <span class="text-4xl font-black text-slate-200/80 group-hover:text-brand-lightblue/20 transition-colors duration-300">
                {{ step.num }}
              </span>
              <div class="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <svg v-if="index === 1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <svg v-if="index === 2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            <h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors duration-300">
              {{ step.title }}
            </h3>
            <p class="mt-4 text-slate-600 text-sm leading-relaxed">
              {{ step.description }}
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-50 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-terracotta"></span>
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">As-Is Purchase Guarantee</span>
          </div>
        </div>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 600 } }"
        class="mt-16 bg-gradient-to-r from-brand-blue to-brand-lightblue rounded-3xl p-8 lg:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        <div class="max-w-xl text-center lg:text-left">
          <h4 class="text-xl lg:text-2xl font-bold">Facing a stressful situation or an expensive property timeline?</h4>
          <p class="text-white/80 text-sm mt-2 leading-relaxed">
            Don't take a lowball offer from standard flippers or walk away from your equity. We purchase properties completely as-is, coordinate fast timelines to resolve backed debts, and deliver a clean financial slate.
          </p>
        </div>
        <button class="px-8 py-4 bg-brand-terracotta hover:bg-opacity-95 font-bold text-white rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer">
          See How We Calculate Offers
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    num: "01",
    title: "Transparent Assessment",
    description: "We analyze your property's market landscape and current condition with zero upfront fee requirements. No demanding structural inspections or deep cleanings are needed from your family."
  },
  {
    num: "02",
    title: "Financial Crisis Intervention",
    description: "If your household is navigating severe stress like backed tax records or a looming foreclosure calendar, we immediately step in to secure your timeline and safeguard your remaining value options."
  },
  {
    num: "03",
    title: "Maximized Direct Payout",
    description: "We skip lowball investor pricing entirely. By analyzing the optimal future asset framework, we stretch our buying offer upward to its absolute limit, placing maximum cash straight onto your closing check."
  }
]
</script>