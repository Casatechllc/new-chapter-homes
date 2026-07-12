<template>
  <!-- Wrap everything inside ClientOnly to prevent SSR/Hydration conflicts -->
  <ClientOnly>
    <Teleport to="body">
      <!-- Dark Mask Backdrop Layer -->
      <div 
        v-if="isDrawerOpen"
        @click="closeDrawer"
        class="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      <!-- Right Side Sliding Panel Layer -->
      <div 
        class="fixed top-0 right-0 h-full w-full sm:max-w-xl bg-white z-[101] shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col"
        :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- Header Controls Panel -->
        <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/50">
          <div>
            <h2 class="text-lg font-extrabold text-slate-900">Priority Blueprint Form</h2>
            <p class="text-xs text-slate-500 mt-0.5">Let's find the best solution for your family.</p>
          </div>
          <button 
            @click="closeDrawer"
            class="w-9 h-9 rounded-xl bg-white border border-slate-200/80 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <i class="fa-solid fa-xmark text-base"></i>
          </button>
        </div>

        <!-- Scrollable Inner Content Form Port -->
        <div class="flex-grow overflow-y-auto p-6 sm:p-8 space-y-6">
          <div class="p-4 bg-brand-blue/5 rounded-xl text-xs font-medium text-slate-700 leading-relaxed">
            💡 <strong>People-First Reassurance:</strong> Everything shared here remains 100% confidential. This form helps our local team map out short-term and long-term housing paths before our call.
          </div>
          
          <!-- Reusable Form Component -->
          <ContactForm @submit-success="handleDrawerSuccess" />
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useDrawer } from '~/composables/useDrawer'
import ContactForm from '~/components/ContactForm.vue'

const { isDrawerOpen, closeDrawer } = useDrawer()

const handleDrawerSuccess = (formData: any) => {
  console.log('Drawer Intake Completed:', formData)
  closeDrawer()
}
</script>