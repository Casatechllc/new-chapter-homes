<template>
  <div class="relative w-full min-h-screen pt-20">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />

    <!-- CLEAN MODULAR HUB TAGS -->
    <AppContactDrawer />
    <AppContactHub />
  </div>
</template>

<script setup>
useHead({
  meta: [
    { name: 'referrer', content: 'no-referrer' }
  ]
})
</script>