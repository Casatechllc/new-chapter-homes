<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <div class="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-lg">N</span>
        </div>
        <span class="text-xl font-bold text-slate-900 tracking-tight">New<span class="text-brand-blue">Chapter</span></span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.path"
          class="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
        <NuxtLink to="/contact" class="px-5 py-2.5 bg-brand-blue text-white text-sm font-bold rounded-lg hover:bg-brand-blue/90 transition-all">
          Get Started
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button class="lg:hidden p-2 text-slate-600" @click="isMenuOpen = !isMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMenuOpen" 
      class="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4"
    >
      <NuxtLink 
        v-for="link in navLinks" 
        :key="link.name" 
        :to="link.path"
        @click="isMenuOpen = false"
        class="text-lg font-semibold text-slate-800 p-2"
      >
        {{ link.name }}
      </NuxtLink>
      <NuxtLink to="/contact" @click="isMenuOpen = false" class="mt-2 text-center w-full px-5 py-4 bg-brand-blue text-white font-bold rounded-xl">
        Get Started
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

// Modular Page Configuration
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Process', path: '/process' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'About Us', path: '/about' }
]
</script>