<template>
  <section class="relative py-24 lg:py-32 overflow-hidden bg-slate-50/50">
    
    <!-- Subtle Top Boundary Divider -->
    <div class="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-6xl space-y-24 lg:space-y-36">
      
      <!-- SECTION HEADER -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Your Journey Matters to Us
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight"
        >
          Compassionate Housing Support. <br />
          <span class="text-gradient">A Safe Landing for Your Family.</span>
        </h2>
        <p class="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Selling your home during a difficult time shouldn't mean worrying about where you will sleep tonight or live tomorrow. We pull together trusted local housing networks to find, fund, and coordinate the perfect transition setup tailored to your life.
        </p>
      </div>

      <!-- STEP 3: SHORT-TERM HOUSING RELIEF (Image Left / Text Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Image Container -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="lg:col-span-5 relative"
        >
          <div class="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 aspect-[4/3] lg:aspect-[4/5]">
            <NuxtImg 
              src="/images/home-hero-bg.png" 
              alt="Comfortable local short-term housing setup"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <span>🏠</span> Immediate Short-Term Accommodations
            </div>
          </div>
        </div>

        <!-- Text Description -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 150, duration: 600 } }"
          class="lg:col-span-7 space-y-4"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-blue text-white font-extrabold text-sm flex items-center justify-center shadow-md shrink-0">
              03
            </div>
            <h3 class="text-2xl font-extrabold text-slate-900">Immediate Short-Term Peace of Mind</h3>
          </div>
          <p class="text-xs uppercase font-bold text-brand-lightblue tracking-wider">Breathe Easy Right Away</p>
          <p class="text-slate-600 text-base leading-relaxed pt-2">
            If you need to move out quickly to relieve financial pressures or escape an overwhelming property condition, you don't have to carry the stress of a sudden relocation alone. We provide immediate, stress-free shelter solutions to give your family a safe space to pause and collect your thoughts.
          </p>
          <p class="text-slate-600 text-sm leading-relaxed">
            By coordinating directly with reliable local hospitality partners and short-term housing operators, we secure clean, fully furnished spaces located near your current daily routine. Your job commutes, school loops, and family dynamic remain entirely intact while we navigate the buyout process together.
          </p>
        </div>
      </div>

      <!-- STEP 4: LONG-TERM HOUSING SOLUTIONS (Text Left / Image Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Text Description -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="lg:col-span-7 order-2 lg:order-1 space-y-4"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white border-2 border-brand-blue text-brand-blue font-extrabold text-sm flex items-center justify-center shadow-sm shrink-0">
              04
            </div>
            <h3 class="text-2xl font-extrabold text-slate-900">Securing Your Long-Term Next Chapter</h3>
          </div>
          <p class="text-xs uppercase font-bold text-emerald-600 tracking-wider">A Sustainable Fresh Start</p>
          <p class="text-slate-600 text-base leading-relaxed pt-2">
            Being a true people-first company means our relationship doesn't stop when we purchase your house. A real fresh start requires a reliable, permanent place to call home. We want to see you thrive down the road, which is why we actively champion your long-term housing strategy.
          </p>
          <p class="text-slate-600 text-sm leading-relaxed">
            We pull together close-knit networks of trusted local property groups, leasing professionals, and community partners to find a sustainable home that aligns with your financial path. Whether that means transitioning into an affordable rental unit or setting aside your maximized cash buyout equity to secure a fresh purchase, we stay by your side until you hold the keys to your new front door.
          </p>
        </div>

        <!-- Image Container -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 150, duration: 600 } }"
          class="lg:col-span-5 order-1 lg:order-2 relative"
        >
          <div class="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 aspect-[4/3] lg:aspect-[4/5]">
            <NuxtImg 
              src="/images/home-hero-bg.png" 
              alt="Family unlocking the door to their new permanent home"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 right-4 bg-brand-blue/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <span>🔑</span> Sustainable Long-Term Solutions
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Self-contained logic optimized for the people-first housing transition framework
</script>