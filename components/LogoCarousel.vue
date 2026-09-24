<!-- components/LogoCarousel.vue -->
<template>
  <div class="space-y-16 py-12 bg-background">
    
    <!-- ========================================== -->
    <!-- CAROUSEL 1: Transparent & Borderless      -->
    <!-- ========================================== -->
    <section class="relative overflow-hidden">
      <div class="container mx-auto px-6 max-w-6xl mb-8 text-center">
        <span class="text-xs uppercase tracking-widest font-extrabold text-[color:var(--color-brand-lightblue)] bg-[color:var(--color-brand-lightblue)]/10 px-4 py-1.5 rounded-full inline-block">
          Transparent Variant
        </span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-main mt-3 tracking-tight">
          Our Valued Community Partners
        </h2>
      </div>

      <div v-if="pending" class="flex justify-center items-center py-12">
        <i class="fa-solid fa-spinner fa-spin text-2xl text-[color:var(--color-brand-lightblue)]"></i>
      </div>

      <div v-else-if="duplicatedPartners && duplicatedPartners.length > 0" class="relative w-full overflow-hidden flex py-4 carousel-container">
        <div class="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none"></div>
        <div class="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none"></div>

        <div class="flex animate-marquee gap-16 items-center shrink-0">
          <div 
            v-for="partner in duplicatedPartners" 
            :key="partner.uniqueKey"
            class="flex items-center justify-center shrink-0 px-4"
          >
            <component 
              :is="partner.websiteUrl ? 'a' : 'div'"
              v-bind="partner.websiteUrl ? { href: partner.websiteUrl, target: '_blank', rel: 'noopener noreferrer', title: 'Visit ' + partner.name } : {}"
              class="block transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img 
                v-if="partner.logo && !failedLogos.has(partner.id)"
                :src="partner.logo" 
                :alt="partner.name + ' Logo'"
                loading="lazy"
                @error="handleImageError(partner.id)"
                class="h-12 sm:h-16 w-auto object-contain mx-auto opacity-75 hover:opacity-100 transition-opacity"
              />
              <span v-else class="text-sm font-extrabold text-main text-center leading-snug">
                {{ partner.name }}
              </span>
            </component>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-4xl mx-auto border-t border-secondary/15"></div>

    <!-- ========================================== -->
    <!-- CAROUSEL 2: Rich Gradient Background      -->
    <!-- ========================================== -->
    <section class="relative overflow-hidden">
      <div class="container mx-auto px-6 max-w-6xl mb-8 text-center">
        <span class="text-xs uppercase tracking-widest font-extrabold text-white bg-white/10 px-4 py-1.5 rounded-full inline-block">
          Gradient Background Variant
        </span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
          Featured Ecosystem Network
        </h2>
      </div>

      <!-- Full-Width Gradient Container -->
      <div class="relative w-full py-12 bg-gradient-to-r from-[color:var(--color-brand-blue)] via-[color:var(--color-brand-lightblue)] to-[color:var(--color-brand-terracotta)] shadow-lg overflow-hidden flex carousel-container-gradient">
        
        <!-- Smooth Edge Fades blending into the gradient wrapper -->
        <div class="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[color:var(--color-brand-blue)] to-transparent z-20 pointer-events-none"></div>
        <div class="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[color:var(--color-brand-terracotta)] to-transparent z-20 pointer-events-none"></div>

        <div v-if="pending" class="flex justify-center items-center py-12 w-full">
          <i class="fa-solid fa-spinner fa-spin text-2xl text-white"></i>
        </div>

        <div v-else-if="duplicatedPartners && duplicatedPartners.length > 0" class="flex animate-marquee-reverse gap-16 items-center shrink-0">
          <div 
            v-for="partner in duplicatedPartners" 
            :key="'grad-' + partner.uniqueKey"
            class="flex items-center justify-center shrink-0 px-4 group"
          >
            <component 
              :is="partner.websiteUrl ? 'a' : 'div'"
              v-bind="partner.websiteUrl ? { href: partner.websiteUrl, target: '_blank', rel: 'noopener noreferrer', title: 'Visit ' + partner.name } : {}"
              class="block transition-transform duration-300 hover:scale-105 cursor-pointer p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 shadow-2xs"
            >
              <img 
                v-if="partner.logo && !failedLogos.has(partner.id)"
                :src="partner.logo" 
                :alt="partner.name + ' Logo'"
                loading="lazy"
                @error="handleImageError(partner.id)"
                class="h-10 sm:h-14 w-auto object-contain mx-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span v-else class="text-sm font-extrabold text-white text-center leading-snug">
                {{ partner.name }}
              </span>
            </component>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-4xl mx-auto border-t border-secondary/15"></div>

    <!-- ========================================== -->
    <!-- SHOWCASE 3: Animated Floating Trio Grid     -->
    <!-- ========================================== -->
    <section class="relative overflow-hidden py-10">
      <div class="container mx-auto px-6 max-w-6xl mb-8 text-center">
        <span class="text-xs uppercase tracking-widest font-extrabold text-[color:var(--color-brand-terracotta)] bg-[color:var(--color-brand-terracotta)]/10 px-4 py-1.5 rounded-full inline-block">
          Animated Trio Showcase
        </span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-main mt-3 tracking-tight">
          Core Alliance Partners
        </h2>
      </div>

      <div v-if="pending" class="flex justify-center items-center py-12">
        <i class="fa-solid fa-spinner fa-spin text-2xl text-[color:var(--color-brand-terracotta)]"></i>
      </div>

      <div v-else-if="partners && partners.length > 0" class="container mx-auto px-6 max-w-5xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 pb-6">
          <div 
            v-for="(partner, index) in partners.slice(0, 3)" 
            :key="'showcase-' + partner.id"
            class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-secondary/25 via-secondary/10 to-transparent hover:from-[color:var(--color-brand-blue)] hover:to-[color:var(--color-brand-terracotta)] shadow-md hover:shadow-xl animate-float"
            :style="{ animationDelay: `${index * 0.6}s` }"
          >
            <div class="w-full h-full bg-primary rounded-[15px] p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[180px]">
              <component 
                :is="partner.websiteUrl ? 'a' : 'div'"
                v-bind="partner.websiteUrl ? { href: partner.websiteUrl, target: '_blank', rel: 'noopener noreferrer', title: 'Visit ' + partner.name } : {}"
                class="w-full h-full flex flex-col items-center justify-center space-y-3 cursor-pointer"
              >
                <img 
                  v-if="partner.logo && !failedLogos.has(partner.id)"
                  :src="partner.logo" 
                  :alt="partner.name + ' Logo'"
                  loading="lazy"
                  @error="handleImageError(partner.id)"
                  class="h-14 sm:h-16 w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                />
                <span class="text-sm font-bold text-main">
                  {{ partner.name }}
                </span>
              </component>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRuntimeConfig, useAsyncData } from '#imports'
import { useSupabaseClient } from '#imports'

interface PartnerItem {
  id: string
  name: string
  logo: string
  websiteUrl?: string
}

const config = useRuntimeConfig()
const supabase = useSupabaseClient()
const tenantId = config.public.tenantId

const failedLogos = ref<Set<string>>(new Set())
const handleImageError = (partnerId: string) => {
  failedLogos.value.add(partnerId)
}

const isWebsiteType = (typeName: string): boolean => {
  const clean = (typeName || '').toLowerCase().replace(/[^a-z0-9]/g, '')
  return ['website', 'web', 'site', 'url', 'homepage', 'domain'].includes(clean)
}

// Fetch partner records from Supabase
const { data: partners, pending } = await useAsyncData('logo_carousel_partners', async () => {
  if (!tenantId) return []

  const { data: typeData, error: typeError } = await supabase
    .from('web_item_types')
    .select('id, type_name')
    .ilike('type_name', 'partners')
    .maybeSingle()

  if (typeError || !typeData) return []

  const { data: webItems, error: webItemsError } = await supabase
    .from('live_web')
    .select('id, header, image_url, link_group_id')
    .eq('tenant_id', tenantId)
    .eq('type_id', typeData.id)

  if (webItemsError || !webItems || webItems.length === 0) return []

  const linkGroupIds = webItems
    .map(item => item.link_group_id)
    .filter((id): id is string => Boolean(id))

  let linksMap: Record<string, string> = {}
  
  if (linkGroupIds.length > 0) {
    const { data: linksData } = await supabase
      .from('web_item_links')
      .select(`
        id,
        link_group_id,
        url,
        web_item_link_types ( name )
      `)
      .in('link_group_id', linkGroupIds)

    if (linksData) {
      linksData.forEach((link: any) => {
        const rawType = Array.isArray(link.web_item_link_types)
          ? link.web_item_link_types[0]?.name
          : link.web_item_link_types?.name

        const typeName = (rawType || '').trim()
        
        if (isWebsiteType(typeName)) {
          linksMap[link.link_group_id] = link.url
        }
      })
    }
  }

  return webItems.map(item => ({
    id: item.id,
    name: item.header || 'Partner',
    logo: item.image_url || '',
    websiteUrl: (item.link_group_id && linksMap[item.link_group_id]) ? linksMap[item.link_group_id] : ''
  })) as PartnerItem[]
})

// Computed array duplicated to create a seamless infinite marquee loop
const duplicatedPartners = computed(() => {
  if (!partners.value || partners.value.length === 0) return []
  const baseList = partners.value
  return [
    ...baseList.map((p, i) => ({ ...p, uniqueKey: `${p.id}-original-${i}` })),
    ...baseList.map((p, i) => ({ ...p, uniqueKey: `${p.id}-duplicate-1-${i}` })),
    ...baseList.map((p, i) => ({ ...p, uniqueKey: `${p.id}-duplicate-2-${i}` }))
  ]
})
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-33.333%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-33.333%); }
  100% { transform: translateX(0%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}

.animate-marquee-reverse {
  display: flex;
  width: max-content;
  animation: marquee-reverse 35s linear infinite;
}

.animate-marquee:hover,
.animate-marquee-reverse:hover {
  animation-play-state: paused;
}

/* Smooth Floating Keyframes */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float:hover {
  animation-play-state: paused;
}

/* Edge Fading Masks */
.carousel-container {
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 88%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 88%, rgba(0, 0, 0, 0) 100%);
}

.carousel-container-gradient {
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
}
</style>