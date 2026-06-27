<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    
    <!-- Decorative subtle border break -->
    <div class="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        
        <!-- LEFT COLUMN: Warm, Welcoming Image Context -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="lg:col-span-5 relative"
        >
          <!-- Floating Accent Glow behind the image wrapper -->
          <div class="absolute -inset-4 bg-brand-blue/5 rounded-3xl blur-2xl z-0"></div>

          <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] z-10">
            <!-- Nuxt Optimized Image Layer -->
            <NuxtImg 
              src="/images/home-comfortable-interior.png" 
              alt="Warm, comfortable temporary living living room space"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover"
            />
            
            <!-- Bottom Floating Local Assurance Badge -->
            <div class="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white">
              <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-xs font-bold text-slate-800 leading-tight">
                We are a people company for the people—handling every detail as-is so you get the maximum payout you deserve.
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Deep Empathy Value Proposition Copy -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
          class="lg:col-span-7 space-y-6"
        >
          <span class="text-xs uppercase tracking-widest font-extrabold text-brand-lightblue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block">
            Our Transition Advantage
          </span>

          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            You Don't Have to Worry About <br />
            <span class="text-gradient">Where You Will Live.</span>
          </h2>

          <p class="text-slate-600 text-lg leading-relaxed">
            The biggest fear most families face when selling a home in distress is the sudden panic of relocating. We think you already have enough on your plate. You shouldn't have to carry the stress of a sudden move or wonder where you are going to sleep next week.
          </p>

          <p class="text-slate-600 text-base leading-relaxed">
            We don't just buy houses; we protect people. From organizing safe short-term spaces near your current routine to leveraging our local network to lock in a permanent rental, we cover your housing transition step-by-step—all while making sure you get a maximized upfront offer and a second check down the road.
          </p>

          <!-- Core Feature Blocks with specific structural icons -->
          <div class="space-y-4 pt-4">
            
            <!-- Bullet 1: Temporary Housing Support -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-base">Comfortable Temporary Living</h4>
                <p class="text-slate-500 text-sm mt-1 leading-relaxed">
                  We can coordinate and arrange comfortable, safe temporary housing options nearby so your family routine, schools, and daily work commute remain completely unaffected.
                </p>
              </div>
            </div>

            <!-- Bullet 2: Next Home Purchase Integration -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-base">Seamless Long-Term Purchasing Support</h4>
                <p class="text-slate-500 text-sm mt-1 leading-relaxed">
                  Our relationship doesn't stop at the sale. While our crews restore your current home to fetch peak profit, we work hand-in-hand to help you secure and buy your next long-term property.
                </p>
              </div>
            </div>

          </div>

          <!-- Bottom Micro Assurance Anchor Callout -->
          <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-3 mt-6">
            <span class="text-brand-terracotta text-lg font-bold">★</span>
            <p class="text-xs text-slate-600 font-medium">
              <strong>Zero Logistical Stress:</strong> Every piece of the moving timeline is structured seamlessly to ensure you move exactly once into your clean slate.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Fully self-contained structure requiring no external business file definitions
</script>