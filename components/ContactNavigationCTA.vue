<template>
  <section class="relative py-20 lg:py-28 overflow-hidden bg-slate-50/65 border-t border-slate-100">
    
    <!-- Light Decorative Accent -->
    <div class="absolute inset-0 z-0 opacity-[0.01] bg-[radial-gradient(#0B3D91_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-5xl">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
        >
          Want to Learn More Before We Talk?
        </h2>
        <p class="mt-3 text-slate-500 text-sm sm:text-base">
          We want you to feel completely confident and at ease. Explore how we protect your equity, meet our family team, or return back to the main layout.
        </p>
      </div>

      <!-- Path Cards Matrix -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <!-- Link Path 1: Our Process -->
        <NuxtLink 
          to="/process"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 500 } }"
          class="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-blue/10 transition-all duration-300 flex flex-col justify-between"
        >
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-xl bg-brand-blue/5 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors">See Our Step-by-Step Process</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Discover how we calculate your direct buyout offer and help arrange short-term or long-term housing options for your family.
            </p>
          </div>
          <div class="mt-6 pt-3 border-t border-slate-50 flex items-center text-xs font-bold text-brand-blue gap-1">
            <span>Explore the process</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </NuxtLink>

        <!-- Link Path 2: About Us -->
        <NuxtLink 
          to="/about"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          class="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-blue/10 transition-all duration-300 flex flex-col justify-between"
        >
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-xl bg-brand-lightblue/5 text-brand-lightblue flex items-center justify-center group-hover:bg-brand-lightblue group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-slate-900 group-hover:text-brand-lightblue transition-colors">Meet Our People-First Team</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              We are a local family business, not a faceless corporation. Read our core mission and find out why we treat neighbors like family.
            </p>
          </div>
          <div class="mt-6 pt-3 border-t border-slate-50 flex items-center text-xs font-bold text-brand-lightblue gap-1">
            <span>Meet our family</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </NuxtLink>

        <!-- Link Path 3: Return Home -->
        <NuxtLink 
          to="/"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 500 } }"
          class="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-blue/10 transition-all duration-300 flex flex-col justify-between"
        >
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-xl bg-brand-terracotta/5 text-brand-terracotta flex items-center justify-center group-hover:bg-brand-terracotta group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/xl" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-slate-900 group-hover:text-brand-terracotta transition-colors">Back to Main Homepage</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Return to our central landing framework to review full overview graphics, success paths, and local community milestones.
            </p>
          </div>
          <div class="mt-6 pt-3 border-t border-slate-50 flex items-center text-xs font-bold text-brand-terracotta gap-1">
            <span>Return to main page</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </NuxtLink>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Simple, clean structural layout paths handled beautifully via native Nuxt routing link components
</script>