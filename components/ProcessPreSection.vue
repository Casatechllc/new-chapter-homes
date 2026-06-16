<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    
    <!-- Subtle Top Boundary Gradient Line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- LEFT COLUMN: Image Layer with Fading Gradient Overlay -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="lg:col-span-5 order-2 lg:order-1 relative"
        >
          <!-- Accent blur circle mimicking our page layout theme -->
          <div class="absolute -inset-4 bg-brand-blue/5 rounded-3xl blur-2xl z-0"></div>

          <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-200 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] z-10">
            <!-- Nuxt Image representing a friendly local property evaluation walkthrough -->
            <NuxtImg 
              src="/images/process-planning.png" 
              alt="Friendly local property walkthrough assessment"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover"
            />
            
            <!-- Elegant dynamic overlay masking the image slightly into the layout -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

            <!-- On-Image Reassurance Tag -->
            <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p class="text-xs font-bold text-slate-800 leading-tight">
                100% Confidential. Your data is entirely protected with us.
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Detailed Pre-Process Copy Blocks -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 150, duration: 600 } }"
          class="lg:col-span-7 order-1 lg:order-2 space-y-8"
        >
          <div class="space-y-4">
            <span class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block">
              Stage A: The Pre-Process
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Before We Meet: <br />
              <span class="text-gradient">Zero Cost, Zero Judgment.</span>
            </h2>
            <p class="text-slate-600 text-base leading-relaxed">
              When you're dealing with a stressful property, the last thing you need is a aggressive sales pitch or a list of costly demands. Our onboarding process requires absolutely no financial investment from you. We sit on the same side of the table, designing a custom roadmap to protect your hard-earned equity.
            </p>
          </div>

          <!-- Chronological Step Breakdown -->
          <div class="space-y-8 pt-4">
            
            <!-- STEP 1: Zero-Obligation Review -->
            <div class="relative flex flex-col sm:flex-row gap-4 items-start group">
              <!-- Visual Number Marker Connecting Line Context -->
              <div class="absolute top-12 bottom-0 left-6 w-0.5 bg-slate-200 hidden sm:block"></div>
              
              <div class="w-12 h-12 rounded-2xl bg-brand-blue text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-lg shadow-brand-blue/10">
                01
              </div>
              <div class="space-y-2">
                <h3 class="font-extrabold text-slate-900 text-lg group-hover:text-brand-blue transition-colors duration-200">
                  The Zero-Obligation Review
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Simply share your primary property details. Our local Harrisonburg experts will conduct a thorough review of the current structural status and analyze any immediate crisis timelines—including helping catch up on backed tax records or directly stepping in to pause pending foreclosure schedules.
                </p>
              </div>
            </div>

            <!-- STEP 2: The Equity Maximization Blueprint -->
            <div class="flex flex-col sm:flex-row gap-4 items-start group">
              <div class="w-12 h-12 rounded-2xl bg-white border-2 border-brand-blue text-brand-blue font-extrabold text-sm flex items-center justify-center shrink-0">
                02
              </div>
              <div class="space-y-2">
                <h3 class="font-extrabold text-slate-900 text-lg group-hover:text-brand-blue transition-colors duration-200">
                  The Equity Maximization Blueprint
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Next, we present a completely transparent, line-by-line project outline. This blueprint maps out the specific modern repairs we will fund entirely out of our pocket, our strategic projected peak sales price, and a precise layout of the increased cash profit heading directly to your final closing check.
                </p>
              </div>
            </div>

          </div>

          <!-- Bottom Assurance Callout -->
          <div class="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3.5 mt-4 shadow-sm">
            <div class="w-2 h-2 rounded-full bg-brand-terracotta shrink-0 animate-pulse"></div>
            <p class="text-xs text-slate-500 leading-normal font-medium">
              <strong>Our Commitment:</strong> If you review our custom blueprint and decide it isn't the right fit for your family, you walk away with zero fees or obligations owed. You stay completely in control.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Completely self-contained component matching standard chronological pages tracking rules
</script>