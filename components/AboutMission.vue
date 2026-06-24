<template>
  <section class="relative py-24 lg:py-36 overflow-hidden bg-slate-900 text-white">
    
    <!-- Atmospheric Visual Grid Accents -->
    <div class="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    <div class="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-5xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- LEFT PANEL: Large Impact Core Belief Signature (5 Columns) -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="lg:col-span-5 space-y-4 text-center lg:text-left"
        >
          <span class="text-xs uppercase tracking-widest font-extrabold text-brand-lightblue bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
            Our Core Credo
          </span>
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            A People Company <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-white to-brand-terracotta">
              For The People.
            </span>
          </h2>
          <div class="h-1 w-20 bg-brand-terracotta mx-auto lg:mx-0 rounded-full mt-2"></div>
        </div>

        <!-- RIGHT PANEL: Deep Objective Narrative Blocks (7 Columns) -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 150, duration: 600 } }"
          class="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed text-center lg:text-left"
        >
          <p class="font-medium text-white text-lg sm:text-xl">
            Our mission is simple: to transform real estate burdens into predictable fresh starts by prioritizing human dignity over corporate margins.
          </p>
          <p class="text-sm sm:text-base text-slate-400">
            We don’t measure our company milestones in properties flipped or closed transaction tallies. We measure success by the collective weight we lift off our neighbors’ shoulders. When a family is navigating sudden physical property decay, backed debt pressures, or emotional family transitions, they deserve an advocate—not an opportunistic investor.
          </p>
          <p class="text-sm sm:text-base text-slate-400">
            By eliminating traditional market hurdles, purchasing entirely as-is, and stretching our direct cash buyout offers upward to their absolute maximum limits, we ensure your hard-earned equity stays protected. We are here to listen with absolute empathy, act with total transparency, and walk alongside your family until you are standing safely inside your next chapter.
          </p>
        </div>

      </div>

      <!-- BOTTOM ROW: Shared Value Pillars Tri-Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 pt-16 border-t border-white/10 text-left">
        
        <!-- Pillar 1: Total Protection -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 500 } }"
          class="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.04] transition-colors"
        >
          <div class="text-brand-lightblue text-xl mb-3">🛡️</div>
          <h3 class="text-sm font-black uppercase tracking-wider text-white">Equity Protection</h3>
          <p class="text-xs text-slate-400 mt-2 leading-relaxed">
            We actively combat lowball pricing schemes. We push our calculations up to their absolute boundaries so you walk away with maximum cash.
          </p>
        </div>

        <!-- Pillar 2: Complete Reassurance -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
          class="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.04] transition-colors"
        >
          <div class="text-brand-lightblue text-xl mb-3">🤝</div>
          <h3 class="text-sm font-black uppercase tracking-wider text-white">Zero-Judgment Care</h3>
          <p class="text-xs text-slate-400 mt-2 leading-relaxed">
            No matter how messy the property or how stressful the backup payments, we see a neighbor in need of support. Period.
          </p>
        </div>

        <!-- Pillar 3: Housing Security -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 500 } }"
          class="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.04] transition-colors"
        >
          <div class="text-brand-lightblue text-xl mb-3">❤️</div>
          <h3 class="text-sm font-black uppercase tracking-wider text-white">A Safe Landing</h3>
          <p class="text-xs text-slate-400 mt-2 leading-relaxed">
            Our job isn't finished when a house sells. We utilize our local networks to secure short-term and long-term shelters for your family.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Self-contained, high-contrast statement state configuration
</script>