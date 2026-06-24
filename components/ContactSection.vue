<template>
  <section class="relative py-24 lg:py-32 overflow-hidden bg-slate-50/50 border-t border-slate-100">
    
    <!-- Pattern Accent Backdrop -->
    <div class="absolute inset-0 z-0 opacity-[0.015] bg-[linear-gradient(to_right,#0B3D91_1px,transparent_1px),linear-gradient(to_bottom,#0B3D91_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-4xl">
      
      <!-- Layout Header Section -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Deep Consultation Form
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 500 } }"
          class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
        >
          Tell Us Your Story. <span class="text-gradient">We’ll Build the Blueprint.</span>
        </h2>
        <p class="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          Every family’s blueprint is slightly different. By giving us a tiny bit more information about the property and your timeline goals, we can cross-reference with our local housing networks ahead of time to bring you real, actionable solutions on our very first phone call.
        </p>
      </div>

      <!-- High-Contrast Structural Form Shield Wrapper Card -->
      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.99, y: 30 }"
        :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        class="bg-white rounded-3xl p-6 sm:p-12 border border-slate-100 shadow-xl"
      >
        <!-- Succinct Alert Notification Banner upon successful completion emit -->
        <div v-if="showSuccessAlert" class="mb-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h4 class="text-base font-bold text-slate-900">Your information has been securely cataloged</h4>
            <p class="text-sm text-slate-600 mt-1 leading-relaxed">
              Thank you for trusting us. Our leadership team is already reviewing your property location. We will personally reach out to you within the hour to coordinate a gentle introductory chat.
            </p>
          </div>
        </div>

        <!-- Calling the Reusable Contact Form Component -->
        <ContactForm v-else @submit-success="onFormSuccess" />

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactForm from '~/components/ContactForm.vue'

const showSuccessAlert = ref(false)

const onFormSuccess = (submittedData: any) => {
  console.log('Operational Data Transmitted Successfully:', submittedData)
  showSuccessAlert.value = true
  
  // Smoothly scroll to top of the card block container to show success message clearly
  window.scrollTo({ top: errorScrollOffset(), behavior: 'smooth' })
}

const errorScrollOffset = () => {
  return window.scrollY + 100
}
</script>