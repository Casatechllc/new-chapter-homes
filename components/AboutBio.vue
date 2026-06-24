<template>
  <section class="relative py-24 lg:py-32 overflow-hidden bg-white">
    
    <!-- Subtle Background Design Accent -->
    <div class="absolute inset-0 z-0 opacity-[0.015] bg-[linear-gradient(to_right,#0B3D91_1px,transparent_1px),linear-gradient(to_bottom,#0B3D91_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Our People-First Group
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
        >
          The Dedicated Team Behind <span class="text-gradient">New Chapter Homes</span>
        </h2>
        <p class="mt-4 text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
          We’ve brought together experienced local specialists committed to shifting the real estate narrative. When you work with us, you are paired with advocates whose sole mission is your safe transition.
        </p>
      </div>

      <!-- DESKTOP VIEW GRID: Hidden on Mobile devices -->
      <div class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(member, index) in team" 
          :key="member.name"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          class="flex flex-col space-y-4 group"
        >
          <!-- Portrait Container -->
          <div class="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 aspect-[4/5] w-full">
            <NuxtImg 
              :src="member.image" 
              :alt="member.name + ' — ' + member.role"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-3 bg-brand-blue/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[9px] font-black tracking-widest text-white uppercase">
              {{ member.role }}
            </div>
          </div>
          <!-- Text Details -->
          <div class="space-y-1">
            <h3 class="text-lg font-black text-slate-900">{{ member.name }}</h3>
            <p class="text-xs font-semibold text-brand-lightblue">{{ member.specialty }}</p>
            <p class="text-xs text-slate-500 leading-relaxed pt-1">
              {{ member.bio }}
            </p>
          </div>
        </div>
      </div>

      <!-- MOBILE VIEW SWIPER CAROUSEL: Visible only on tiny viewports -->
      <div class="md:hidden">
        <Swiper
          :modules="[SwiperPagination]"
          :slides-per-view="1.05"
          :space-between="12"
          :pagination="{ clickable: true }"
          class="pb-12 team-swiper"
        >
          <SwiperSlide v-for="member in team" :key="member.name">
            <div class="bg-slate-50/70 border border-slate-100 p-5 rounded-2xl flex flex-col gap-4 text-left min-h-[420px]">
              
              <!-- Mini Team Profile Row -->
              <div class="flex items-center gap-4">
                <!-- Compact Image Container (Scaled Down to a neat 24w x 30h layout) -->
                <div class="relative rounded-xl overflow-hidden shadow-sm bg-slate-100 h-28 w-24 shrink-0">
                  <NuxtImg 
                    :src="member.image" 
                    :alt="member.name"
                    loading="lazy"
                    format="webp"
                    class="w-full h-full object-cover"
                  />
                </div>
                
                <!-- Title Stack right beside the profile image -->
                <div class="space-y-1">
                  <span class="text-[9px] font-black tracking-widest text-brand-blue bg-brand-blue/5 px-2 py-0.5 rounded uppercase inline-block">
                    {{ member.role }}
                  </span>
                  <h3 class="text-lg font-black text-slate-900 leading-tight">{{ member.name }}</h3>
                  <p class="text-xs font-bold text-brand-lightblue leading-tight">{{ member.specialty }}</p>
                </div>
              </div>

              <!-- Dedicated Bio Text Pane (Now has full layout breathing room below) -->
              <div class="border-t border-slate-100 pt-3 flex-grow">
                <p class="text-xs text-slate-600 leading-relaxed">
                  {{ member.bio }}
                </p>
              </div>

            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Cohesive Shared Closing Reassurance Quote -->
      <div 
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 400 } }"
        class="mt-20 max-w-3xl mx-auto text-center border-t border-slate-100 pt-12"
      >
        <p class="italic text-slate-500 text-base sm:text-lg leading-relaxed">
          "We don't look at houses as pieces of inventory to trade. We look at them as the chapters of a family’s life story. Our collective goal is helping you step forward with total clarity and safety."
        </p>
        <p class="text-xs uppercase font-black text-slate-400 tracking-widest mt-4">
          — The {{ businessInfo.name }} Support Team
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { businessInfo } from '~/data/businessInfo'

// Swiper Components and Core Native Styling Modules
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination as SwiperPagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const team = [
  {
    name: "Marcus Vance",
    role: "Property Valuation Lead",
    specialty: "Maximized Offer Architecture",
    image: "/images/team-valuation.jpg",
    bio: "Marcus calculates house values based on upcoming market capabilities. He ensures our offers break past typical corporate cash-buying strategies to keep real value in your check."
  },
  {
    name: "Sarah Jenkins",
    role: "Transition Coordinator",
    specialty: "Family & Housing Logistics",
    image: "/images/team-transition.jpg",
    bio: "Sarah works to organize safe landings for moving families, coordinating closely with local hospitality partners and property portfolios for short-term and long-term rentals."
  },
  {
    name: "David Wright",
    role: "Client Advocate",
    specialty: "Crisis Management & Debt Support",
    image: "/images/team-advocate.jpg",
    bio: "David steps in when families are navigating immediate back-tax pressures or foreclosure schedules. He communicates directly with local agencies to stabilize stressful timelines safely."
  },
  {
    name: "Elena Ross",
    role: "Asset Condition Specialist",
    specialty: "As-Is Evaluations",
    image: "/images/team-condition.jpg",
    bio: "Elena performs all property assessments completely as-is. She ensures that regardless of heavy repairs or extreme clutter details, families never have to pick up a broom."
  }
]
</script>

<style scoped>
/* Clean Swiper Custom Theme Styling overrides using your brand colors */
:deep(.team-swiper .swiper-pagination-bullet-active) {
  background: var(--color-brand-blue, #0B3D91) !important;
  width: 1.25rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
}
:deep(.team-swiper .swiper-pagination) {
  bottom: 0px !important;
}
</style>