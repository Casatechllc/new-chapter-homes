<template>
  <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-32">
    
    <div class="absolute inset-0 z-0 overflow-hidden">
      
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 lg:opacity-80 transition-opacity duration-500"
        :style="{ 
          backgroundImage: `url(/images/home-hero-bg.png)`,
          '-webkit-mask-image': 'linear-gradient(to right, transparent 0%, transparent 20%, black 60%)',
          'mask-image': 'linear-gradient(to right, transparent 0%, transparent 30%, black 60%)'
        }"
      ></div>

      <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-lightblue/20 blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-brand-blue/30 blur-3xl"></div>
      
      <div class="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#007ACC_1px,transparent_1px),linear-gradient(to_bottom,#007ACC_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <div class="lg:col-span-7 text-left">
        
        <span 
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 500 } }"
          class="brand-script text-3xl lg:text-4xl text-brand-lightblue block mb-3"
        >
          We Buy Homes!
        </span>

        <h1 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 250, duration: 600 } }"
          class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900"
        >
          Where Your Next <br />
          <span class="text-gradient">Chapter Begins</span>
        </h1>

        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 450, duration: 600 } }"
          class="mt-6 text-lg text-slate-700 max-w-xl leading-relaxed"
        >
          Empowering homeowners in {{ info.addressLong }} with seamless, trustworthy real estate solutions. Whether you are looking to sell quickly or transition smoothly, we handle your property with elite local expertise.
        </p>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
          class="mt-10 flex flex-wrap gap-4 items-center"
        >
          <button class="px-8 py-4 bg-brand-terracotta hover:bg-opacity-90 text-white font-semibold rounded-xl shadow-lg shadow-brand-terracotta/20 transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-brand-terracotta/30 cursor-pointer">
            Get an Offer Today
          </button>

          <button class="px-8 py-4 bg-slate-100 hover:bg-slate-200 border-2 border-slate-200 text-slate-800 font-semibold rounded-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer backdrop-blur-sm">
            Learn Our Process
          </button>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 800 } }"
          class="mt-8 pt-6 border-t border-slate-200 flex items-center gap-3 text-slate-700"
        >
          <div class="w-10 h-10 rounded-full bg-brand-lightblue/10 flex items-center justify-center text-brand-lightblue">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p class="text-xs text-slate-500 uppercase tracking-wider font-bold">Speak Directly with Us</p>
            <a :href="`tel:${info.rawPhone}`" class="text-lg font-bold text-slate-900 hover:text-brand-lightblue hover:underline transition-colors">
              {{ info.phone }}
            </a>
          </div>
        </div>

      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.9, x: 50 }"
        :enter="{ opacity: 1, scale: 1, x: 0, transition: { delay: 400, duration: 700 } }"
        class="lg:col-span-5 relative flex justify-center"
      >
        <div class="hidden lg:block relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform hover:rotate-1 transition-transform duration-300">
          
          <div class="bg-gradient-to-r from-brand-blue to-brand-lightblue p-8 text-white relative">
            <div class="absolute right-4 top-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium tracking-wide">
              {{ info.addressShort }}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h3 class="text-2xl font-bold tracking-tight">{{ info.name }}</h3>
            <p class="text-white/80 text-sm mt-1">Real Estate Solutions</p>
          </div>

          <div class="p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <span class="text-slate-500 text-sm font-medium">Service Area</span>
              <span class="text-slate-800 font-semibold text-sm">{{ info.serviceArea }}</span>
            </div>
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <span class="text-slate-500 text-sm font-medium">Closing Timeframe</span>
              <span class="text-brand-lightblue font-bold text-sm">As Quick as 7 Days</span>
            </div>
            <div class="flex items-center justify-between pb-1">
              <span class="text-slate-500 text-sm font-medium">Fees / Commissions</span>
              <span class="text-emerald-600 font-bold text-sm">$0 (Zero Out of Pocket)</span>
            </div>

            <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4 mt-2">
              <span class="flex h-3 w-3 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-terracotta opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-brand-terracotta"></span>
              </span>
              <p class="text-xs text-slate-600 font-medium leading-normal">
                Currently actively reviewing neighborhood properties near Harrisonburg.
              </p>
            </div>
          </div>

        </div>

        <div 
          v-motion
          :initial="{ scale: 0, rotate: -45 }"
          :enter="{ scale: 1, rotate: 0, transition: { delay: 900, type: 'spring' } }"
          class="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl p-4 max-w-[160px] border border-slate-100 hidden lg:block"
        >
          <p class="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Our Standard</p>
          <p class="text-sm font-bold text-slate-800 mt-1">100% Transparent Local Solutions</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup class="ts">
import { businessInfo } from '~/data/businessInfo'

const info = businessInfo
</script>