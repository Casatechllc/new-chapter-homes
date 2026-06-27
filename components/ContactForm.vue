<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Step 1: Core Contact Coordinates -->
    <div class="space-y-4">
      <h3 class="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">
        01. Personal Information
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name</label>
          <input 
            v-model="formData.name"
            type="text" 
            required
            placeholder="Jane Doe" 
            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none"
          />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number</label>
          <input 
            v-model="formData.phone"
            type="tel" 
            required
            placeholder="(540) 555-0100" 
            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none"
          />
        </div>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address</label>
        <input 
          v-model="formData.email"
          type="email" 
          required
          placeholder="email@example.com" 
          class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none"
        />
      </div>
    </div>

    <!-- Step 2: Property Metrics -->
    <div class="space-y-4 pt-2">
      <h3 class="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">
        02. Property Specifications
      </h3>
      <div>
        <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Street Address</label>
        <input 
          v-model="formData.address"
          type="text" 
          required
          placeholder="123 Main Street, Woodstock, VA" 
          class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none"
        />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Is it Occupied?</label>
          <select 
            v-model="formData.occupancy"
            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer"
          >
            <option value="owner">Yes, by Owner</option>
            <option value="tenant">Yes, by Tenant</option>
            <option value="vacant">No, it is Vacant</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Estimated Repairs Needed</label>
          <select 
            v-model="formData.repairLevel"
            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer"
          >
            <option value="none">None (Move-in Ready)</option>
            <option value="light">Light (Cosmetic/Paint)</option>
            <option value="moderate">Moderate (Roof/HVAC/Kitchen)</option>
            <option value="heavy">Heavy (Structural/Full Gut)</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Step 3: Situation Reassurance Details -->
    <div class="space-y-4 pt-2">
      <h3 class="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">
        03. What is Your Ideal Timeline?
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">How fast would you like to move?</label>
          <select 
            v-model="formData.timeline"
            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer"
          >
            <option value="asap">As soon as possible (Within days)</option>
            <option value="month">Within 30 days</option>
            <option value="flexible">Flexible (1-3 months)</option>
            <option value="just_checking">Just testing options for now</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Are you interested in our housing support?</label>
          <select 
            v-model="formData.housingHelp"
            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer"
          >
            <option value="no">No, I have housing arranged</option>
            <option value="short_term">Yes, tell me about short-term setups</option>
            <option value="long_term">Yes, I need a long-term rental plan</option>
            <option value="both">I'd love to hear about both</option>
          </select>
        </div>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Is there anything specific we can help resolve?</label>
        <textarea 
          v-model="formData.notes"
          rows="4" 
          placeholder="Feel free to share details here (e.g., behind on payments, inherited home from across the country, hoarding situation, backed taxes). Everything stays 100% confidential."
          class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white rounded-xl text-sm transition-all outline-none resize-none leading-relaxed"
        ></textarea>
      </div>
    </div>

    <!-- Submit Trigger -->
    <div class="pt-4">
      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full py-4 bg-brand-terracotta hover:bg-opacity-95 text-white font-extrabold rounded-xl shadow-lg shadow-brand-terracotta/20 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm cursor-pointer disabled:opacity-50"
      >
        {{ isSubmitting ? 'Securing Your Priority Slot...' : 'Submit Confidential Analysis Request' }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const emit = defineEmits(['submit-success'])

const isSubmitting = ref(false)
const formData = reactive({
  name: '',
  phone: '',
  email: '',
  address: '',
  occupancy: 'owner',
  repairLevel: 'moderate',
  timeline: 'month',
  housingHelp: 'no',
  notes: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulated operational framework integration (e.g., Netlify Forms, API endpoint)
  await new Promise(resolve => setTimeout(resolve, 1200))
  
  emit('submit-success', { ...formData })
  isSubmitting.value = false
}
</script>