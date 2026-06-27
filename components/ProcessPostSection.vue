<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    
    <!-- Subtle Boundary Line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-4xl">
      
      <!-- STAGE HEADER -->
      <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Stage D: The Post-Process
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
        >
          Closing Day &amp; <span class="text-gradient">Your Clean Slate</span>
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 300, duration: 500 } }"
          class="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
        >
          This is where the partnership comes together. We align our success completely with yours, ensuring you walk away with the financial security you deserve.
        </p>
      </div>

      <!-- UNIFIED SUMMARY CARD (The "Aha!" Window) -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 700 } }"
        class="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative border border-slate-800"
      >
        <!-- Background Ambient Glow Specific to the Payout Card -->
        <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-terracotta/10 blur-3xl pointer-events-none"></div>

        <div class="space-y-12">
          
          <!-- STEP 6: True Equity Payout -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div class="md:col-span-3 flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-white/10 text-white font-black text-sm flex items-center justify-center shrink-0 border border-white/10">
                06
              </div>
              <h3 class="text-xs uppercase tracking-widest font-extrabold text-slate-400 md:hidden">
                The Payout
              </h3>
            </div>
            
            <div class="md:col-span-9 space-y-2">
              <span class="hidden md:block text-xs uppercase tracking-widest font-extrabold text-slate-500">The Financial Reset</span>
              <h4 class="text-xl font-extrabold text-white">The True Equity Payout</h4>
              <p class="text-slate-400 text-sm leading-relaxed">
                On closing day, you get your maximized upfront cash buyout check. There are absolutely no surprise fees, agent commissions, or hidden closing costs deducted from your money. We handle the property entirely as-is, so you can walk away with absolute financial peace of mind.
              </p>
            </div>
          </div>

          <div class="h-px bg-slate-800 w-full"></div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div class="md:col-span-3 flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-white/10 text-white font-black text-sm flex items-center justify-center shrink-0 border border-white/10">
                07
              </div>
              <h3 class="text-xs uppercase tracking-widest font-extrabold text-slate-400 md:hidden">
                The Move
              </h3>
            </div>
            
            <div class="md:col-span-9 space-y-2">
              <span class="hidden md:block text-xs uppercase tracking-widest font-extrabold text-slate-500">The Next Step</span>
              <h4 class="text-xl font-extrabold text-white">Paid Twice &amp; A Safe Landing</h4>
              <p class="text-slate-400 text-sm leading-relaxed">
                Once you are safely moved into your new short-term or long-term housing arrangement, our partnership doesn't stop. Down the road, when the home's transition is completely finished, we share the final equity profits with you. That means you get your immediate relief today, and a second bonus check later.
              </p>
            </div>
          </div>

          <!-- TERRACOTTA ORANGE FINAL ANCHOR CTA -->
          <div class="pt-4 text-center">
            <button 
            @click="openDrawer"
            class="w-full sm:w-auto px-10 py-5 bg-brand-terracotta hover:bg-opacity-95 text-white text-base font-bold rounded-2xl shadow-xl shadow-brand-terracotta/20 transition-transform active:scale-98 cursor-pointer">
              Begin Your New Chapter Today
            </button>
            <p class="text-[11px] text-slate-500 uppercase tracking-widest font-bold mt-4">
              Free Consultations • Completely Confidential • People Company
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useDrawer } from '~/composables/useDrawer'

// Grab the openDrawer function from your global drawer state
const { openDrawer } = useDrawer()
// Completely self-contained script panel following your no-module requirement
</script>