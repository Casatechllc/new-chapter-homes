<template>
  <section class="relative py-24 lg:py-32 overflow-hidden bg-slate-50/50">
    
    <!-- Design Accents -->
    <div class="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#0B3D91_1px,transparent_1px),linear-gradient(to_bottom,#0B3D91_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-4xl">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Have Questions?
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
        >
          Clear Answers. <span class="text-gradient">Honest Support.</span>
        </h2>
        <p class="mt-4 text-slate-600 text-base leading-relaxed">
          We believe in absolute transparency. Navigating a difficult housing situation brings a lot of moving parts, so we’ve gathered answers to the questions families ask us most.
        </p>
      </div>

      <!-- Accordion List -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
          :class="{ 'shadow-md border-brand-blue/10': activeIndex === index }"
        >
          <!-- Accordion Header Toggle Button -->
          <button 
            @click="toggleFAQ(index)"
            class="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
          >
            <span class="font-bold text-slate-900 sm:text-lg transition-colors duration-200" :class="{ 'text-brand-blue': activeIndex === index }">
              {{ faq.question }}
            </span>
            <div 
              class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 transform transition-transform duration-300"
              :class="{ 'rotate-185 bg-brand-blue/5 text-brand-blue': activeIndex === index }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <!-- Smooth Dynamic Grid Height Collapse Panel -->
          <div 
            class="grid transition-all duration-300 ease-in-out"
            :class="activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'"
          >
            <div class="overflow-hidden">
              <div class="px-6 pb-6 sm:px-8 sm:pb-8 text-sm sm:text-base text-slate-600 space-y-3 leading-relaxed border-t border-slate-50/50 pt-2">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Reassurance Banner -->
      <div class="mt-12 text-center bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs sm:text-sm text-slate-500 font-medium">
          Have a unique situation not covered here? Don't worry, we are here for you.
        </p>
        <NuxtLink  to="/contact" class="text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-lightblue flex items-center gap-1 transition-colors duration-200 group">
          Chat Directly With Our Team <span class="transform group-hover:translate-x-1 transition-transform">→</span>
        </NuxtLink >
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const toggleFAQ = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: "What exactly does buying a home 'as-is' mean for me?",
    answer: "It means you do absolutely nothing. You do not need to fix leaky roofs, clean out cluttered rooms, patch up bad floors, or even pick up a broom. You can pack up the personal belongings you care about and leave everything else exactly where it sits. We take full responsibility for the home's condition from the day we buy it."
  },
  {
    question: "How do you calculate your buyout offer? Are there hidden fees?",
    answer: "We never hit you with lowball investor numbers. Our team analyzes the maximum upcoming potential of your property in the local market. From there, we stretch our cash buyout calculation to its highest absolute limit. There are zero hidden fees, zero real estate commissions, and zero surprise deductions—what we agree on is what goes onto your final check at closing."
  },
  {
    question: "Can you help me if I am facing immediate foreclosure or backed taxes?",
    answer: "Yes, absolutely. This is exactly why we consider ourselves a people company. If you are navigating financial stress, tax pressures, or a strict legal deadline, we step in immediately. We work alongside our local partners to stabilize your timeline, resolve overdue balances directly, protect your remaining equity, and stop the collection process in its tracks."
  },
  {
    question: "How do your short-term and long-term housing solutions work?",
    answer: "We believe a true fresh start requires having a reliable place to call home. If your transition requires you to leave your current property immediately, we fund and coordinate clean, comfortable, short-term housing nearby so your school routes and work commutes aren't disrupted. Long-term, we utilize our local networks of property providers and leasing professionals to help you step into an affordable rental or leverage your closing equity for a new purchase."
  },
  {
    question: "How fast can we complete the buyout and get me my payout?",
    answer: "We move entirely at your pace. If you are in a high-stress timeline and need a quick transition to pull out your cash, we can coordinate an accelerated closing in a matter of days. If you need a few weeks to organize your family, locate historical records, or process life changes, we will gladly wait until the exact day you tell us you are ready."
  }
]
</script>