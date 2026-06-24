<template>
  <section class="relative py-24 lg:py-32 overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Compare Your Options
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight"
        >
          See the Math. <span class="text-gradient">No Hidden Traps.</span>
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 300, duration: 500 } }"
          class="mt-4 text-lg text-slate-600 leading-relaxed"
        >
          Traditional paths often force you to sacrifice your home's hard-earned equity. Here is exactly how our restoration model protects your wallet compared to standard options.
        </p>
      </div>

      <!-- VISUAL EQUITY RETURN GRAPH GRAPHICS -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        class="max-w-4xl mx-auto bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-100 mb-16"
      >
        <h3 class="text-base font-bold text-slate-400 uppercase tracking-wider mb-6 text-center lg:text-left">
          Estimated Walk-Away Net Profit Comparison
        </h3>
        
        <div class="space-y-6">
          <!-- Bar 1: Selling As-Is -->
          <div class="space-y-2">
            <div class="flex justify-between text-sm font-semibold text-slate-700">
              <span>Selling It Yourself (As-Is)</span>
              <span class="text-slate-500">Low Price & Heavy Buyer Discounts</span>
            </div>
            <div class="h-8 w-full bg-slate-100 rounded-lg overflow-hidden relative flex items-center">
              <div class="h-full bg-slate-400 w-[45%] transition-all duration-1000 ease-out flex items-center justify-end pr-3 text-white font-bold text-xs">
                ~45% Value Retained
              </div>
            </div>
          </div>

          <!-- Bar 2: Traditional Wholesalers -->
          <div class="space-y-2">
            <div class="flex justify-between text-sm font-semibold text-slate-700">
              <span>Traditional Wholesalers / Cash Investors</span>
              <span class="text-red-500 font-medium">Predatory "Lowball" Pricing</span>
            </div>
            <div class="h-8 w-full bg-slate-100 rounded-lg overflow-hidden relative flex items-center">
              <div class="h-full bg-red-500/80 w-[30%] transition-all duration-1000 ease-out flex items-center justify-end pr-3 text-white font-bold text-xs">
                ~30% Cash Offer
              </div>
            </div>
          </div>

          <!-- Bar 3: New Chapter Homes -->
          <div class="space-y-2">
            <div class="flex justify-between text-sm font-semibold text-slate-900">
              <span class="font-bold">New Chapter Homes (Restore & Sell)</span>
              <span class="text-brand-lightblue font-bold">Maximized Equity Profit</span>
            </div>
            <div class="h-10 w-full bg-slate-100 rounded-xl overflow-hidden relative flex items-center p-1">
              <div class="h-full bg-gradient-to-r from-brand-blue to-brand-lightblue w-[95%] rounded-lg transition-all duration-1000 ease-out flex items-center justify-between px-4 text-white font-bold text-sm shadow-md shadow-brand-blue/20">
                <span>Unlocking Peak Market Value</span>
                <span>100% Maximized Share Profit</span>
              </div>
            </div>
          </div>
        </div>
        
        <p class="text-center text-xs text-slate-400 mt-6 italic">
          *Visual representation of a typical home transformation. We handle everything completely as-is and stretch our buying offers upward to their absolute limit, making sure the maximum amount of cash goes straight into your pocket to help you start your next chapter.
        </p>
      </div>

      <!-- 3-COLUMN COMPARISON MATRIX TABLE -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
        
        <!-- Column 1: Sell As-Is -->
        <div class="bg-white/60 border border-slate-200 rounded-3xl p-8 shadow-sm transition-all duration-300">
          <h3 class="text-xl font-bold text-slate-700">Selling Yourself As-Is</h3>
          <p class="text-xs text-slate-400 mt-1">The Traditional Stressful Path</p>
          <hr class="my-6 border-slate-100" />
          
          <ul class="space-y-4 text-sm text-slate-600">
            <li class="flex items-start gap-2.5">
              <span class="text-red-500 font-bold mt-0.5">✕</span>
              <span><strong>Low Sale Price:</strong> Buyers heavily discount for updates they'll have to make.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-red-500 font-bold mt-0.5">✕</span>
              <span><strong>Sits on Market:</strong> Homes requiring repairs struggle to pass inspections.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-red-500 font-bold mt-0.5">✕</span>
              <span><strong>Inspection Demands:</strong> Retail buyers hit you with a long list of fix-it requirements.</span>
            </li>
          </ul>
        </div>

        <!-- Column 2: New Chapter Homes (The Featured Winner Card) -->
        <div class="bg-white border-2 border-brand-blue rounded-3xl p-8 shadow-xl relative lg:-translate-y-4 transition-all duration-300">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white text-[10px] uppercase font-extrabold tracking-widest px-4 py-1.5 rounded-full shadow-md">
            Our Elite Solution
          </div>
          
          <h3 class="text-2xl font-extrabold text-brand-blue">New Chapter Homes</h3>
          <p class="text-xs text-brand-lightblue font-bold mt-1">Full Restoration Partnership</p>
          <hr class="my-6 border-slate-100" />
          
          <ul class="space-y-4 text-sm text-slate-800">
            <li class="flex items-start gap-2.5">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong>$0 Out-of-Pocket:</strong> We use our own financial resources to complete all modern upgrades.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong>Maximized Returns:</strong> Your house lists at peak value, meaning we share the maximum equity profit.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong>Full Protection Support:</strong> We handle transition logistics, including temporary housing if required.</span>
            </li>
          </ul>
          
          <button class="mt-8 w-full py-4 bg-brand-terracotta hover:bg-opacity-95 text-white font-bold rounded-xl shadow-lg shadow-brand-terracotta/20 transition-transform active:scale-98 cursor-pointer">
            Check My Home Eligibility
          </button>
        </div>

        <!-- Column 3: Traditional Wholesalers -->
        <div class="bg-white/60 border border-slate-200 rounded-3xl p-8 shadow-sm transition-all duration-300">
          <h3 class="text-xl font-bold text-slate-700">Traditional Wholesalers</h3>
          <p class="text-xs text-slate-400 mt-1">The Predatory "Fast Cash" Route</p>
          <hr class="my-6 border-slate-100" />
          
          <ul class="space-y-4 text-sm text-slate-600">
            <li class="flex items-start gap-2.5">
              <span class="text-red-500 font-bold mt-0.5">✕</span>
              <span><strong>Lowball Cash Offers:</strong> They capitalize on your stress by offering pennies on the dollar.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-red-500 font-bold mt-0.5">✕</span>
              <span><strong>Equity Strip:</strong> They leave you with nothing to help fund your family's next property move.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-red-500 font-bold mt-0.5">✕</span>
              <span><strong>Hidden Transaction Fees:</strong> Hidden fees frequently pop up right before signing the final deed away.</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </section>
</template>