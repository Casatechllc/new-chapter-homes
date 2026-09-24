<!-- components/modals/OfferRequestModal.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

// Step tracking (1 to 9)
const currentStep = ref(1)
const totalSteps = 9

// Form Data Object for local testing/preview
const formData = ref({
  address: '',
  propertyType: 'Single Family Home',
  isHomeowner: 'Yes, I am the legal homeowner',
  ownershipDuration: '3 to 5 years',
  isListed: 'No, it is not listed',
  timeline: 'ASAP (Within 7 days)',
  condition: 'Good - Minor repairs needed',
  reason: 'Facing foreclosure',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

// Progress percentage for step indicator bar
const progressPercentage = computed(() => (currentStep.value / totalSteps) * 100)

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleClose = () => {
  emit('close')
}

const handleSubmit = () => {
  alert('Form submitted successfully! (Testing mode)')
  handleClose()
}
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm select-none">
      
      <!-- Modal Container -->
      <div 
        class="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-xl overflow-hidden relative transform transition-all"
        @click.stop
      >
        <!-- Top Close Button -->
        <button 
          @click="handleClose"
          class="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>

        <!-- Progress Bar Header -->
        <div class="px-8 pt-8 pb-4 border-b border-slate-100">
          <div class="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <span>Step {{ currentStep }} of {{ totalSteps }}</span>
            <span class="text-brand-blue bg-brand-blue/10 px-2.5 me-10 py-0.5 rounded-md">{{ Math.round(progressPercentage) }}% Complete</span>
          </div>
          <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-brand-blue to-brand-lightblue transition-all duration-300 rounded-full"
              :style="{ width: `${progressPercentage}%` }"
            ></div>
          </div>
        </div>

        <!-- Modal Body Content -->
        <div class="p-8 space-y-6 max-h-[60vh] overflow-y-auto">

          <!-- STEP 1: Address -->
          <div v-if="currentStep === 1" class="space-y-4">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">What's your property address?</h2>
              <p class="text-sm text-slate-500 mt-1">Start typing and select your address from the dropdown.</p>
            </div>
            <div>
              <input 
                v-model="formData.address"
                type="text"
                placeholder="368 E Rock St, Harrisonburg, VA 22802, USA"
                class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl text-sm transition-all outline-none font-medium text-slate-800"
              />
            </div>
          </div>

          <!-- STEP 2: Property Type -->
          <div v-if="currentStep === 2" class="space-y-4">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">What type of property is it?</h2>
              <p class="text-sm text-slate-500 mt-1">Select the option that best describes your property.</p>
            </div>
            <div class="space-y-2.5">
              <label 
                v-for="opt in ['Single Family Home', 'Multi-Family (Duplex, Triplex, etc.)', 'Condo / Townhouse', 'Mobile / Manufactured Home', 'Vacant Land / Lot', 'Other']"
                :key="opt"
                :class="[
                  formData.propertyType === opt ? 'border-brand-blue bg-brand-blue/5 text-slate-900 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-slate-100',
                  'flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all text-sm'
                ]"
              >
                <span>{{ opt }}</span>
                <input type="radio" name="propertyType" :value="opt" v-model="formData.propertyType" class="accent-brand-blue" />
              </label>
            </div>
          </div>

          <!-- STEP 3: Legal Homeowner -->
          <div v-if="currentStep === 3" class="space-y-4">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">Are you the legal homeowner?</h2>
              <p class="text-sm text-slate-500 mt-1">This helps us understand who we'll be working with.</p>
            </div>
            <div class="space-y-2.5">
              <label 
                v-for="opt in ['Yes, I am the legal homeowner', 'Yes, I am a family member with the legal right to sell', 'No, I am not']"
                :key="opt"
                :class="[
                  formData.isHomeowner === opt ? 'border-brand-blue bg-brand-blue/5 text-slate-900 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-slate-100',
                  'flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all text-sm'
                ]"
              >
                <span>{{ opt }}</span>
                <input type="radio" name="isHomeowner" :value="opt" v-model="formData.isHomeowner" class="accent-brand-blue" />
              </label>
            </div>
          </div>

          <!-- STEP 4: Ownership Duration -->
          <div v-if="currentStep === 4" class="space-y-4">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">How long have you owned the home?</h2>
              <p class="text-sm text-slate-500 mt-1">This helps us estimate your equity position.</p>
            </div>
            <div class="space-y-2.5">
              <label 
                v-for="opt in ['Less than 3 years', '3 to 5 years', '5 to 10 years', '10+ years']"
                :key="opt"
                :class="[
                  formData.ownershipDuration === opt ? 'border-brand-blue bg-brand-blue/5 text-slate-900 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-slate-100',
                  'flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all text-sm'
                ]"
              >
                <span>{{ opt }}</span>
                <input type="radio" name="ownershipDuration" :value="opt" v-model="formData.ownershipDuration" class="accent-brand-blue" />
              </label>
            </div>
          </div>

          <!-- STEP 5: Property Listed Status -->
          <div v-if="currentStep === 5" class="space-y-4">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">Is the property currently listed?</h2>
              <p class="text-sm text-slate-500 mt-1">Let us know if the property is currently for sale.</p>
            </div>
            <div class="space-y-2.5">
              <label 
                v-for="opt in ['No, it is not listed', 'Yes, listed with a realtor', 'Yes, listed for sale by owner']"
                :key="opt"
                :class="[
                  formData.isListed === opt ? 'border-brand-blue bg-brand-blue/5 text-slate-900 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-slate-100',
                  'flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all text-sm'
                ]"
              >
                <span>{{ opt }}</span>
                <input type="radio" name="isListed" :value="opt" v-model="formData.isListed" class="accent-brand-blue" />
              </label>
            </div>
          </div>

          <!-- STEP 6: Selling Timeline -->
          <div v-if="currentStep === 6" class="space-y-4">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">How fast are you looking to sell?</h2>
              <p class="text-sm text-slate-500 mt-1">Select your ideal timeline for closing.</p>
            </div>
            <div class="space-y-2.5">
              <label 
                v-for="opt in ['ASAP (Within 7 days)', 'Within 2 weeks', 'Within 30 days', 'Within 60 days', 'I\'m flexible']"
                :key="opt"
                :class="[
                  formData.timeline === opt ? 'border-brand-blue bg-brand-blue/5 text-slate-900 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-slate-100',
                  'flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all text-sm'
                ]"
              >
                <span>{{ opt }}</span>
                <input type="radio" name="timeline" :value="opt" v-model="formData.timeline" class="accent-brand-blue" />
              </label>
            </div>
          </div>

          <!-- STEP 7: Property Condition -->
          <div v-if="currentStep === 7" class="space-y-4">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">What condition is the property in?</h2>
              <p class="text-sm text-slate-500 mt-1">Be honest. We buy houses in any condition.</p>
            </div>
            <div class="space-y-2.5">
              <label 
                v-for="opt in ['Excellent - Move-in ready', 'Good - Minor repairs needed', 'Fair - Needs some work', 'Poor - Major repairs needed', 'Distressed - Significant issues']"
                :key="opt"
                :class="[
                  formData.condition === opt ? 'border-brand-blue bg-brand-blue/5 text-slate-900 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-slate-100',
                  'flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all text-sm'
                ]"
              >
                <span>{{ opt }}</span>
                <input type="radio" name="condition" :value="opt" v-model="formData.condition" class="accent-brand-blue" />
              </label>
            </div>
          </div>

          <!-- STEP 8: Reason for Selling -->
          <div v-if="currentStep === 8" class="space-y-4">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">What's your reason for selling?</h2>
              <p class="text-sm text-slate-500 mt-1">This helps us understand your situation better.</p>
            </div>
            <div class="space-y-2.5 max-h-60 overflow-y-auto pr-1">
              <label 
                v-for="opt in [
                  'Facing foreclosure', 'Behind on payments', 'Inherited property', 
                  'Divorce or separation', 'Cant\'t afford repairs', 'Vacant property I need to sell', 
                  'Urgent financial situation not listed above', 'Personal situation not listed above', 
                  'No reason / seeing what my house is worth'
                ]"
                :key="opt"
                :class="[
                  formData.reason === opt ? 'border-brand-blue bg-brand-blue/5 text-slate-900 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700 font-medium hover:bg-slate-100',
                  'flex items-center justify-between p-3.5 rounded-xl border-2 cursor-pointer transition-all text-sm'
                ]"
              >
                <span>{{ opt }}</span>
                <input type="radio" name="reason" :value="opt" v-model="formData.reason" class="accent-brand-blue" />
              </label>
            </div>
          </div>

          <!-- STEP 9: Contact Info -->
          <div v-if="currentStep === 9" class="space-y-4">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900">Almost done. How can we reach you?</h2>
              <p class="text-sm text-slate-500 mt-1">We'll use this to send you your cash offer within 24 hours.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">First Name</label>
                <input v-model="formData.firstName" type="text" placeholder="John" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl text-sm outline-none" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Last Name</label>
                <input v-model="formData.lastName" type="text" placeholder="Doe" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl text-sm outline-none" />
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
              <input v-model="formData.email" type="email" placeholder="john@example.com" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl text-sm outline-none" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
              <input v-model="formData.phone" type="tel" placeholder="(888) 555-0000" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl text-sm outline-none" />
            </div>
          </div>

        </div>

        <!-- Modal Footer Navigation Actions -->
        <div class="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button 
            v-if="currentStep > 1"
            @click="prevStep"
            class="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
          >
            Back
          </button>
          <div v-else></div>

          <button 
            v-if="currentStep < totalSteps"
            @click="nextStep"
            class="px-6 py-2.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl text-sm shadow-md transition-colors cursor-pointer"
          >
            Continue
          </button>
          
          <button 
            v-else
            @click="handleSubmit"
            class="px-8 py-3 bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-extrabold rounded-xl text-sm shadow-lg shadow-brand-terracotta/20 transition-all cursor-pointer"
          >
            Get My Cash Offer
          </button>
        </div>

      </div>
    </div>
  </transition>
</template>