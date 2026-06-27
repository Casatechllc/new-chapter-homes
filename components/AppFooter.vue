<template>
  <footer class="relative bg-slate-900 text-slate-400 pt-20 pb-10 overflow-hidden">
    
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-lightblue to-brand-terracotta"></div>
    
    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
        
        <div class="lg:col-span-4 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.317-1.317a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <span class="text-white font-extrabold text-xl tracking-tight block leading-tight">
                New<span class="text-brand-blue">Chapter</span>
              </span>
              <span class="text-[10px] uppercase tracking-widest font-bold text-slate-500 block mt-0.5">
                People First Real Estate
              </span>
            </div>
          </div>
          
          <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
            We are a people company for the people. We specialize in competitive, direct home purchases that maximize your final payout, while providing immediate short-term and long-term housing solutions.
          </p>

          <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-slate-300 font-medium">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Serving {{ info.addressShort }} Neighbors
          </div>
        </div>

        <div class="lg:col-span-4 lg:pl-8 space-y-4">
          <h4 class="text-white font-bold text-sm uppercase tracking-wider">How We Help</h4>
          <ul class="space-y-3 text-sm">
            <li>
              <NuxtLink to="/process" class="hover:text-white transition-colors block">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="hover:text-white transition-colors block">Meet Our Family Team</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/process" class="hover:text-white transition-colors block">Our Buying Process</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-white transition-colors block">Request a Confidential Offer</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- <div class="lg:col-span-2 space-y-4">
          <h4 class="text-white font-bold text-sm uppercase tracking-wider">Service Regions</h4>
          <ul class="space-y-2.5 text-xs text-slate-500 font-medium">
            <li>• {{ info.addressShort }}</li>
            <li>• Shenandoah Valley</li>
            <li>• Rockingham County</li>
            <li>• Harrisonburg Region</li>
            <li>• Surrounding Areas</li>
          </ul>
        </div> -->

        <div class="lg:col-span-4 space-y-4">
          <h4 class="text-white font-bold text-sm uppercase tracking-wider">Direct Access</h4>
          <div class="space-y-3">
            <a 
              :href="`tel:${info.rawPhone}`" 
              class="block p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-lightblue/30 hover:bg-white/10 text-white transition-all group"
            >
              <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Call or Text Anytime</p>
              <p class="text-base font-extrabold mt-0.5 group-hover:text-brand-lightblue transition-colors">
                {{ info.phone }}
              </p>
            </a>
            
            <div class="text-xs text-slate-500 leading-relaxed pl-1">
              <p>We are always available for urgent, judgment-free consultations regarding back payments or fast foreclosure timelines.</p>
            </div>
          </div>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {{ new Date().getFullYear() }} {{ info.name }}. All rights reserved.</p>
        
        <p class="text-slate-600">
          Designed &amp; Developed by 
          <a 
            href="https://casatechllc.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-slate-500 hover:text-brand-lightblue font-semibold transition-colors underline decoration-slate-700 underline-offset-4 hover:decoration-brand-lightblue"
          >
            Casatech LLC
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { businessInfo } from '~/data/businessInfo'

const info = businessInfo
</script>