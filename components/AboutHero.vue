<template>
  <section class="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white">
    
    <!-- Soft Decorative Design Accents -->
    <div class="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#0B3D91_1px,transparent_1px),linear-gradient(to_bottom,#0B3D91_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
    <div class="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- LEFT COLUMN: Mission & Heart-Centered Narrative (7 Columns) -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
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
            class="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            <p>
              We watched standard real estate companies and corporate flippers treat home purchases like cold math problems. They look for property vulnerabilities to drive down prices, leaving families feeling backed into a corner when navigating tough times.
            </p>
            <p class="text-base font-medium text-slate-700">
              We knew our neighbors deserved something completely different. At {{ businessInfo.name }}, we built our entire model around absolute transparency, judgment-free listening, and direct cash buyouts stretched to their highest possible limit. 
            </p>
          </div>

          <!-- People-First Credo Callout Badge -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
            class="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-3 text-left max-w-xl mx-auto lg:mx-0"
          >
            <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.317-1.317a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-xs font-black uppercase tracking-wider text-slate-400">Our Everyday Promise</h4>
              <p class="text-xs sm:text-sm text-slate-700 font-bold mt-0.5">
                We are a people company for the people. We promise to respect your timeline, protect your equity, and handle every physical detail completely as-is.
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Professional Team Portrait Placeholder (5 Columns) -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.97, x: 30 }"
          :enter="{ opacity: 1, scale: 1, x: 0, transition: { delay: 200, duration: 600 } }"
          class="lg:col-span-5 relative"
        >
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-[4/5] max-w-sm mx-auto lg:max-w-none group">
            
            <!-- Team Image Placeholder Layout -->
            <NuxtImg 
              src="/images/team-portrait.jpg" 
              alt="New Chapter Homes core leadership and family team"
              loading="eager"
              format="webp"
              class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-101"
            />

            <!-- Soft Overlay Shadow Sheet -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>

            <!-- Integrated Floating Team Signature Box -->
            <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 text-left">
              <span class="text-[10px] uppercase font-black text-brand-blue tracking-widest block">Local &amp; Rooted</span>
              <p class="text-sm font-extrabold text-slate-900 mt-0.5">
                The {{ businessInfo.name }} Family
              </p>
              <p class="text-xs text-slate-500 mt-1 leading-normal">
                Proudly operating right here out of {{ businessInfo.addressShort }}, serving our local community neighbors with care.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { businessInfo } from '~/data/businessInfo'
</script>