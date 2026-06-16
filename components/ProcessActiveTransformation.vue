<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    
    <div class="container mx-auto px-6 relative z-10 max-w-6xl space-y-24 lg:space-y-36">
      
      <!-- SECTION HEADER -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Stage B: Active Transformation
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
        >
          Restoration &amp; <span class="text-gradient">Housing Protection</span>
        </h2>
      </div>

      <!-- STEP 3: ALTERNATING BLOCK (Image Left / Text Right) -->
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
              alt="Comfortable local temporary housing living setup"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wide">
              📍 Local Accommodations Secured
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
            <div class="w-10 h-10 rounded-xl bg-brand-blue text-white font-extrabold text-xs flex items-center justify-center shadow-md">
              03
            </div>
            <h3 class="text-2xl font-extrabold text-slate-900">Coordinated Relocation</h3>
          </div>
          <p class="text-xs uppercase font-bold text-brand-lightblue tracking-wider">The Housing Guarantee</p>
          <p class="text-slate-600 text-base leading-relaxed pt-2">
            Construction dust and renovation noise should never disrupt your family's daily peace. If your property requires deep structural remodeling, heavy updates, or safety modifications, we don't leave you to sort out the logistics alone. 
          </p>
          <p class="text-slate-600 text-sm leading-relaxed">
            We actively coordinate and fully absorb the transition arrangements, placing your family in comfortable, clean, and safe local temporary housing nearby. Your school loops, job commutes, and family routines remain completely intact while we do the heavy lifting.
          </p>
        </div>
      </div>

      <!-- STEP 4: ALTERNATING BLOCK (Text Left / Image Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Text Description -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="lg:col-span-7 order-2 lg:order-1 space-y-4"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white border-2 border-brand-blue text-brand-blue font-extrabold text-xs flex items-center justify-center shadow-sm">
              04
            </div>
            <h3 class="text-2xl font-extrabold text-slate-900">Full-Scale Property Restoration</h3>
          </div>
          <p class="text-xs uppercase font-bold text-emerald-600 tracking-wider">100% Funded &amp; Managed</p>
          <p class="text-slate-600 text-base leading-relaxed pt-2">
            Once your transition is smoothly handled, our elite local construction crews move in. Homeowners do not pay a single dollar out of pocket for any phase of this transformation. We fund every single material, permit, and labor cost directly.
          </p>
          <p class="text-slate-600 text-sm leading-relaxed">
            From correcting major structural defects like leaky roofs and degraded foundations to executing high-end cosmetic upgrades like modern kitchens, fresh premium flooring, and crisp interior painting—we systematically optimize your asset to capture maximum demand and top-dollar market values.
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
              alt="Professional contractors installing high-end modern kitchen finishes"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 right-4 bg-brand-blue/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wide">
              🛠️ Professional Renovations
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Self-contained logic optimized for the alternating chronological layout layout framework
</script>