<template>
  <section class="relative py-24 lg:py-32 overflow-hidden bg-white">
    
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
          The Outcome: Freedom to Move Forward
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          A Clean Break with a <span class="text-gradient">Maximized Payout</span>
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
            The Fresh Start Payout
          </span>
        </div>

        <!-- Detailed Strategic Text Panel (8 Cols) -->
        <div class="lg:col-span-8 space-y-4 lg:pl-4">
          <h3 class="text-2xl font-extrabold text-slate-900">
            A Direct Purchase Built Around You
          </h3>
          <p class="text-slate-600 text-base leading-relaxed">
            Standard cash flippers often try to catch you at a vulnerable moment to corner you into a lowball offer, keeping your home's remaining equity for themselves. We believe a true people-first company does the exact opposite. 
          </p>
          <p class="text-slate-600 text-sm leading-relaxed">
            By completely bypassing standard investor lowballing, we evaluate the absolute highest future potential value of the property and squeeze our direct purchase offer upward to its maximum limits. This ensures a clean check at closing with no hidden fees or surprise costs, putting every dollar possible right into your hands so you can begin your next chapter with confidence.
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
          <span class="text-emerald-500 text-sm">✓</span> Direct Cash Buyout
        </span>
        <span class="hidden sm:inline text-slate-200">|</span>
        <span class="flex items-center gap-2">
          <span class="text-emerald-500 text-sm">✓</span> No Real Estate Fees or Deductions
        </span>
        <span class="hidden sm:inline text-slate-200">|</span>
        <span class="flex items-center gap-2">
          <span class="text-emerald-500 text-sm">✓</span> People-First Equity Protection
        </span>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Completely self-contained cash buyout outcome block
</script>