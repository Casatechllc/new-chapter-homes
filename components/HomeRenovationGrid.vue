<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    
    <!-- Subtle Top Boundary Divider -->
    <div class="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          No Matter the Condition
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight"
        >
          We Cover It All. <span class="text-gradient">Zero Judgment.</span>
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 300, duration: 500 } }"
          class="mt-4 text-lg text-slate-600 leading-relaxed"
        >
          Many homeowners worry their property is too broken, too outdated, or too complicated to sell. We see past the surface. We actively invest in and transform properties facing any challenge.
        </p>
      </div>

      <!-- Situation Cards Grid Matrix -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(situation, index) in situations" 
          :key="situation.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          class="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300"
        >
          
          <!-- Image Layer Context using Nuxt Image Component -->
          <div class="relative h-48 w-full overflow-hidden bg-slate-200">
            <NuxtImg 
              :src="situation.image" 
              :alt="situation.title"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <!-- Dark modern overlay tag for categorizing the visual path -->
            <div class="absolute left-4 bottom-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-white uppercase">
              {{ situation.category }}
            </div>
          </div>

          <!-- Card Description Content Panel -->
          <div class="p-6 lg:p-8 flex-grow flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors duration-200">
                {{ situation.title }}
              </h3>
              
              <!-- Tag Sub-list detailing specific micro-problems to hit exact triggers -->
              <div class="mt-3 flex flex-wrap gap-1.5">
                <span 
                  v-for="tag in situation.tags" 
                  :key="tag" 
                  class="text-[11px] font-medium bg-white border border-slate-200/80 text-slate-500 px-2 py-0.5 rounded-md"
                >
                  {{ tag }}
                </span>
              </div>

              <p class="mt-4 text-slate-600 text-sm leading-relaxed">
                {{ situation.description }}
              </p>
            </div>

            <!-- Validation Footnote on Card to reduce personal user shame -->
            <div class="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-brand-lightblue font-semibold text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
              </svg>
              <span>Fully eligible for AS-IS solution</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Complete structured object matrix for local component state
const situations = [
  {
    category: "Structural",
    title: "Deferred Maintenance",
    image: "/images/home-deferred-maintenance.png", // Replace with optimized local paths or placeholders
    tags: ["Outdated Kitchens", "Leaky Roofs", "Bad Flooring", "Peeling Paint"],
    description: "When property maintenance begins to pile up, trying to handle cleanups or expensive construction out-of-pocket can feel paralyzing. We step in to absorb those tasks completely as-is, looking past the surface to evaluate your home at its full upcoming potential."
  },
  {
    category: "Financial",
    title: "Financial Distress",
    image: "/images/home-financial-distress.png",
    tags: ["Backed Taxes", "Behind Payments", "Pre-Foreclosure"],
    description: "Falling behind on property payments happens easily when life gets difficult, causing endless stress. We are a people-first company here to help you breathe easy again. We handle your balances directly, halt stressful collection timelines, and design maximized payouts to save your hard-earned equity."
  },
  {
    category: "Transition",
    title: "Complicated Life Changes",
    image: "/images/home-life-transitions.png",
    tags: ["Hoarding Situations", "Inherited Estates", "Rapid Relocations"],
    description: "Managing a family estate from afar or sorting through decades of personal family memories is an emotionally exhausting journey. You don't have to clean, pack, or apologize for anything. Our compassionate team handles the details softly, letting you look forward with absolute peace of mind."
  }
]
</script>