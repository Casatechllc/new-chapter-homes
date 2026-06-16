<template>
  <footer class="relative bg-slate-900 text-slate-400 pt-20 pb-10 overflow-hidden">
    
    <!-- Design Accent Line matching your theme color -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-lightblue to-brand-terracotta"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
        
        <!-- COLUMN 1: BRAND IDENTITY & LOGO PLACEHOLDER (4 Cols) -->
        <div class="lg:col-span-4 space-y-6">
          <div class="flex items-center gap-3">
            <!-- Logo Icon Box -->
            <div class="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <span class="text-white font-extrabold text-xl tracking-tight block leading-tight">
                {{ info.name }}
              </span>
              <span class="text-[10px] uppercase tracking-widest font-bold text-slate-500 block mt-0.5">
                Real Estate Solutions
              </span>
            </div>
          </div>
          
          <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
            Empowering homeowners with zero out-of-pocket restorations, custom transition relief, and a completely transparent way to maximize property value.
          </p>

          <!-- Quick Trust Badge -->
          <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-slate-300 font-medium">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Locally Operating in Harrisonburg, VA
          </div>
        </div>

        <!-- COLUMN 2: QUICK NAV PATHS (3 Cols) -->
        <div class="lg:col-span-3 lg:pl-8 space-y-4">
          <h4 class="text-white font-bold text-sm uppercase tracking-wider">Solutions</h4>
          <ul class="space-y-2.5 text-sm">
            <li><NuxtLink to="/how-it-works" class="hover:text-white transition-colors">How It Works</NuxtLink></li>
            <li><NuxtLink to="/restore-and-sell" class="hover:text-white transition-colors">Restore &amp; Sell Program</NuxtLink></li>
            <li><NuxtLink to="/help-with-payments" class="hover:text-white transition-colors">Facing Foreclosure Help</NuxtLink></li>
            <li><NuxtLink to="/moving-support" class="hover:text-white transition-colors">Temporary Housing Support</NuxtLink></li>
          </ul>
        </div>

        <!-- COLUMN 3: SERVICE AREA COVERAGE (2 Cols) -->
        <div class="lg:col-span-2 space-y-4">
          <h4 class="text-white font-bold text-sm uppercase tracking-wider">Service Area</h4>
          <ul class="space-y-2 text-xs text-slate-500">
            <li>• Harrisonburg, VA</li>
            <li>• Rockingham County</li>
            <li>• Shenandoah Valley</li>
            <li>• Surrounding Regions</li>
          </ul>
        </div>

        <!-- COLUMN 4: CONTACT & IMMEDIATE CALL ACTION (3 Cols) -->
        <div class="lg:col-span-3 space-y-4">
          <h4 class="text-white font-bold text-sm uppercase tracking-wider">Contact Direct</h4>
          <div class="space-y-3">
            <a 
              :href="`tel:${info.rawPhone}`" 
              class="block p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-lightblue/30 hover:bg-white/10 text-white transition-all group"
            >
              <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Call Our Office</p>
              <p class="text-base font-extrabold mt-0.5 group-hover:text-brand-lightblue transition-colors">
                {{ info.phone }}
              </p>
            </a>
            
            <div class="text-xs text-slate-500 leading-normal pl-2">
              <p>Available for emergency consultations regarding backed payments and pending foreclosure timelines.</p>
            </div>
          </div>
        </div>

      </div>

      <!-- SUB-FOOTER CODE: COPYRIGHT & DEVELOPER ATTRIBUTION -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {{ new Date().getFullYear() }} {{ info.name }}. All rights reserved.</p>
        
        <!-- Casatech LLC Backlink Assignment -->
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