<script setup lang="ts">
import { ref } from 'vue'
import OfferRequestModal from '~/components/OfferRequestModal.vue'
import { businessInfo } from '~/data/businessInfo'

definePageMeta({
  layout: 'app-shell'
})

const isTestModalOpen = ref(false)
const isLogoModalOpen = ref(false)
const info = businessInfo
</script>

<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-16">
    
    <!-- PAGE HEADER -->
    <div class="space-y-2 border-b border-secondary/15 pb-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--color-brand-lightblue)]/15 border border-[color:var(--color-brand-lightblue)]/30 text-xs font-bold tracking-wide text-[color:var(--color-brand-lightblue)]">
        Sandbox Environment
      </div>
      <h1 class="text-3xl font-black tracking-tight text-main">
        Component Test Workbench
      </h1>
      <p class="text-sm text-secondary font-medium">
        Use this isolated page to inspect, test, and troubleshoot newly developed components before deploying them to production.
      </p>
    </div>

    <!-- BUSINESS PROFILE & LOGO PREVIEW -->
    <div class="p-6 rounded-2xl bg-background border border-secondary/15 space-y-4 shadow-2xs">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-secondary/15 pb-4">
        <div class="flex items-center gap-4">
          <!-- Clickable Logo Thumbnail -->
          <button 
            @click="isLogoModalOpen = true"
            class="group relative rounded-xl bg-primary border border-secondary/15 p-1 shadow-2xs cursor-pointer hover:border-brand-lightblue transition-all"
            title="Click to view full logo"
          >
            <img 
              src="/new-chapter-homes-llc-icon.png" 
              :alt="info.name"
              class="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div class="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-[10px]">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </button>

          <div>
            <h2 class="text-lg font-black text-main">{{ info.name }}</h2>
            <p class="text-xs text-secondary">{{ info.website }} • {{ info.addressShort }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <a :href="`tel:${info.rawPhone}`" class="px-4 py-2 rounded-xl bg-[color:var(--color-brand-blue)] text-white text-xs font-bold shadow-2xs">
            {{ info.phone }}
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div class="p-3 rounded-xl bg-primary border border-secondary/15 space-y-1">
          <span class="text-secondary font-semibold uppercase tracking-wider text-[10px]">Email Address</span>
          <p class="font-bold text-main truncate">{{ info.email }}</p>
        </div>
        <div class="p-3 rounded-xl bg-primary border border-secondary/15 space-y-1">
          <span class="text-secondary font-semibold uppercase tracking-wider text-[10px]">Headquarters</span>
          <p class="font-bold text-main">{{ info.address }}, {{ info.city }}, {{ info.state }} {{ info.Zip }}</p>
        </div>
        <div class="p-3 rounded-xl bg-primary border border-secondary/15 space-y-1">
          <span class="text-secondary font-semibold uppercase tracking-wider text-[10px]">Service Area</span>
          <p class="font-bold text-main">{{ info.serviceArea }}</p>
        </div>
      </div>
    </div>

    <!-- BRAND COLOR PALETTE INSPECTOR -->
    <div class="p-6 rounded-2xl bg-background border border-secondary/15 space-y-4 shadow-2xs">
      <div class="space-y-1">
        <h2 class="text-lg font-black tracking-tight text-main">Brand Color Palette</h2>
        <p class="text-xs text-secondary">
          Active color tokens loaded for your real estate platform theme.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div class="p-4 rounded-xl border border-secondary/15 space-y-2" style="background-color: var(--color-brand-blue);">
          <div class="text-[10px] font-bold text-white uppercase tracking-wider">Brand Blue</div>
          <div class="text-xs font-mono text-white/80">#0B3D91</div>
        </div>
        <div class="p-4 rounded-xl border border-secondary/15 space-y-2" style="background-color: var(--color-brand-lightblue);">
          <div class="text-[10px] font-bold text-slate-950 uppercase tracking-wider">Light Blue</div>
          <div class="text-xs font-mono text-slate-950/80">#00A3FF</div>
        </div>
        <div class="p-4 rounded-xl border border-secondary/15 space-y-2" style="background-color: var(--color-brand-terracotta);">
          <div class="text-[10px] font-bold text-white uppercase tracking-wider">Terracotta</div>
          <div class="text-xs font-mono text-white/80">#E07A5F</div>
        </div>
        <div class="p-4 rounded-xl border border-secondary/15 space-y-2" style="background-color: var(--color-brand-silver);">
          <div class="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Silver</div>
          <div class="text-xs font-mono text-slate-900/80">#D1D5DB</div>
        </div>
      </div>
    </div>

    <!-- TEST SECTION 1: MODAL COMPONENT TESTING -->
    <div class="p-6 rounded-2xl bg-background border border-secondary/15 space-y-4 shadow-2xs">
      <div class="space-y-1">
        <h2 class="text-lg font-black tracking-tight text-main">Multi-Step Offer Modal</h2>
        <p class="text-xs text-secondary">
          Test the 9-step real estate cash offer wizard workflow with brand accents.
        </p>
      </div>

      <div class="pt-2">
        <button 
          @click="isTestModalOpen = true"
          class="px-6 py-3 rounded-xl bg-[color:var(--color-brand-terracotta)] text-white font-bold text-xs tracking-wide shadow-sm hover:opacity-90 transition-all cursor-pointer"
        >
          Launch 9-Step Offer Modal
        </button>
      </div>
    </div>

    <div class="space-y-8 max-w-5xl mx-auto pb-16">

        <div class="p-6 rounded-2xl bg-background border border-secondary/15 space-y-4 shadow-2xs">
        <h2 class="text-lg font-black tracking-tight text-main">Logo Carousel Preview</h2>
        <LogoCarousel />
        </div>
    </div>

    <!-- 🌟 LOGO VIEWER MODAL -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isLogoModalOpen" @click="isLogoModalOpen = false" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
        <div class="bg-background border border-secondary/15 rounded-3xl p-8 max-w-sm w-full text-center space-y-4 shadow-2xl relative" @click.stop>
          <button 
            @click="isLogoModalOpen = false"
            class="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary flex items-center justify-center cursor-pointer transition-colors"
          >
            <i class="fa-solid fa-xmark text-xs"></i>
          </button>
          <div class="pt-2">
            <img 
              src="/new-chapter-homes-llc-icon.png" 
              :alt="info.name"
              class="w-32 h-32 object-contain mx-auto rounded-2xl bg-primary border border-secondary/15 p-4 shadow-2xs"
            />
          </div>
          <div class="space-y-1">
            <h3 class="text-base font-black text-main">{{ info.name }}</h3>
            <p class="text-xs text-secondary font-mono">/new-chapter-homes-llc-icon.png</p>
          </div>
        </div>
      </div>
    </transition>

    <!-- 🌟 RENDER THE OFFER MODAL FOR TESTING -->
    <OfferRequestModal 
      :is-open="isTestModalOpen"
      @close="isTestModalOpen = false"
    />

  </div>
</template>