<template>
  <section class="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        :style="{ 
          backgroundImage: `url(/images/process-hero-bg.png)`,
          '-webkit-mask-image': 'linear-gradient(to right, transparent 0%, transparent 40%, black 90%)',
          'mask-image': 'linear-gradient(to right, transparent 0%, transparent 40%, black 90%)'
        }"
      ></div>

      <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl"></div>
      <div class="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-brand-lightblue/15 blur-3xl"></div>
      
      <div class="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#007ACC_1px,transparent_1px),linear-gradient(to_bottom,#007ACC_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-8 text-left space-y-6">
          <span 
            v-motion
            :initial="{ opacity: 0, y: -15 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
            class="text-xs uppercase tracking-widest font-extrabold text-brand-lightblue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
          >
            A Clear Path Forward
          </span>
          
          <h1 
            v-motion
            :initial="{ opacity: 0, x: -40 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 150, duration: 500 } }"
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Our Proven Roadmap: <br />
            From Relief to <span class="text-gradient">Clean Slate</span>
          </h1>
          
          <p 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 350, duration: 500 } }"
            class="text-slate-600 text-lg max-w-2xl leading-relaxed"
          >
            We designed our process to remove every ounce of risk, stress, and upfront financial burden. See exactly how we partner with you to resolve home complexities, manage temporary transitions, and maximize your cash at closing.
          </p>

          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 500 } }"
            class="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div class="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <div class="w-8 h-8 rounded-lg bg-brand-blue text-white font-bold text-xs flex items-center justify-center shrink-0">
                A
              </div>
              <div>
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Pre-Process</h3>
                <p class="text-sm font-bold text-slate-800">Assessment &amp; Plans</p>
              </div>
            </div>

            <div class="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <div class="w-8 h-8 rounded-lg bg-brand-lightblue text-white font-bold text-xs flex items-center justify-center shrink-0">
                B
              </div>
              <div>
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Stage</h3>
                <p class="text-sm font-bold text-slate-800">Restore &amp; Protect</p>
              </div>
            </div>

            <div class="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <div class="w-8 h-8 rounded-lg bg-brand-terracotta text-white font-bold text-xs flex items-center justify-center shrink-0">
                C
              </div>
              <div>
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Post-Process</h3>
                <p class="text-sm font-bold text-slate-800">Closing Payout</p>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden lg:block lg:col-span-4 relative">
          </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Completely self-contained component requiring no external data references
</script>