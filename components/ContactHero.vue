<template>
  <section class="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white">
    
    <!-- Warm Background Accents -->
    <div class="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#0B3D91_1px,transparent_1px),linear-gradient(to_bottom,#0B3D91_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
    <div class="absolute top-1/4 -left-64 w-96 h-96 bg-brand-lightblue/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 -right-64 w-96 h-96 bg-brand-terracotta/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- LEFT COLUMN: Empathetic Text & Direct Info (7 Columns) -->
        <div class="lg:col-span-7 space-y-8 text-center lg:text-left">
          
          <div class="space-y-4">
            <span 
              v-motion
              :initial="{ opacity: 0, y: 10 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
              class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
            >
              Welcome to {{ businessInfo.name }}
            </span>
            <h1 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 500 } }"
              class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Let’s Take the Weight <br class="hidden sm:inline" />
              Off Your Shoulders. <span class="text-gradient">We’re Ready to Help.</span>
            </h1>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 200, duration: 500 } }"
              class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Scan landed you here? You are in the right place. We are a people company for the people—no judgment, no pressure, and no hidden fees. Reach out however you feel most comfortable.
            </p>
          </div>

          <!-- Quick Action Cards Grid -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 500 } }"
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0 text-left"
          >
            <a 
              :href="'tel:' + businessInfo.rawPhone" 
              class="flex items-center gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-sm hover:border-brand-blue/20 hover:shadow-md transition-all duration-300 group"
            >
              <div class="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <i class="fa-solid fa-phone text-lg"></i>
              </div>
              <div>
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Call or Text Us</h3>
                <p class="text-base font-bold text-slate-800 tracking-tight group-hover:text-brand-blue transition-colors">
                  {{ businessInfo.phone }}
                </p>
              </div>
            </a>

            <a 
              :href="'mailto:' + businessInfo.email" 
              class="flex items-center gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-sm hover:border-brand-blue/20 hover:shadow-md transition-all duration-300 group"
            >
              <div class="w-12 h-12 rounded-xl bg-brand-lightblue text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <i class="fa-solid fa-envelope text-lg"></i>
              </div>
              <div>
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Our Team</h3>
                <p class="text-sm font-bold text-slate-800 tracking-tight group-hover:text-brand-blue transition-colors break-all">
                  {{ businessInfo.email }}
                </p>
              </div>
            </a>
          </div>

          <!-- Heart-Centered Value Statement -->
          <div 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 400 } }"
            class="pt-2 flex items-center justify-center lg:justify-start gap-2 text-emerald-600 font-bold text-xs sm:text-sm"
          >
            <i class="fa-solid fa-heart text-base shrink-0"></i>
            <span>Based in {{ businessInfo.addressShort }} — Proudly serving our {{ businessInfo.serviceArea }} neighbors.</span>
          </div>

        </div>

        <!-- RIGHT COLUMN: Streamlined Priority Form (5 Columns) -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.96, y: 30 }"
          :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 250, duration: 600 } }"
          class="lg:col-span-5"
        >
          <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-200/80 border border-slate-100 relative">
            
            <div class="mb-6">
              <h2 class="text-xl font-extrabold text-slate-900">Request a Call &amp; Offer</h2>
              <p class="text-xs text-slate-500 mt-1">Takes less than 60 seconds. Zero obligations.</p>
            </div>

            <!-- Simple input form layout -->
            <ClientOnly>
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <label class="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Your Name</label>
                  <input 
                    v-model="formData.name"
                    type="text" 
                    required
                    placeholder="John Doe" 
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none"
                  />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input 
                      v-model="formData.phone"
                      type="tel" 
                      required
                      placeholder="(540) 555-0100" 
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Property Location</label>
                    <input 
                      v-model="formData.address"
                      type="text" 
                      required
                      :placeholder="businessInfo.addressShort + ', VA'" 
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Tell us a little bit about the situation (Optional)</label>
                  <textarea 
                    v-model="formData.message"
                    rows="3" 
                    placeholder="Examples: House needs repairs, behind on payments, inherited property, moving quickly..."
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full py-4 bg-brand-terracotta hover:bg-opacity-95 text-white font-extrabold rounded-xl shadow-lg shadow-brand-terracotta/20 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm cursor-pointer block text-center disabled:opacity-50"
                >
                  {{ isSubmitting ? 'Sending Request...' : 'Send Request &amp; Secure Timeline' }}
                </button>

                <p v-if="successMessage" class="text-xs text-emerald-600 font-bold text-center mt-2">{{ successMessage }}</p>
                <p v-if="errorMessage" class="text-xs text-rose-600 font-bold text-center mt-2">{{ errorMessage }}</p>
              </form>
            </ClientOnly>

            <!-- Human Reassurance Tag underneath form button -->
            <div class="mt-4 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400">
              <i class="fa-solid fa-lock text-xs text-slate-300"></i>
              <span>Your details stay completely confidential and safe with us.</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { businessInfo } from '~/data/businessInfo'

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const formData = reactive({
  name: '',
  phone: '',
  address: '',
  message: '',
  formType: 'Quick Contact Form'
})

const handleSubmit = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })
    successMessage.value = 'Thank you! Your request has been securely sent.'
    formData.name = ''
    formData.phone = ''
    formData.address = ''
    formData.message = ''
  } catch (err: any) {
    errorMessage.value = err?.data?.statusMessage || 'Something went wrong. Please call us directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>