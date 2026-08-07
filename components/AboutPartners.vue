<!-- components/AboutPartners.vue -->
<template>
  <section class="relative py-20 lg:py-28 overflow-hidden bg-slate-50/40 border-t border-b border-slate-100">
    <div class="container mx-auto px-6 relative z-10 max-w-6xl">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span 
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
          class="text-xs uppercase tracking-widest font-extrabold text-brand-blue bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block"
        >
          Our Trusted Network
        </span>
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight"
        >
          Local Partners Making a Difference
        </h2>
        <p class="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          Being a true community-first company means collaborating with exceptional local teams. We work hand-in-hand with these operators to find short-term safety and coordinate long-term transitions.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center items-center py-12">
        <i class="fa-solid fa-spinner fa-spin text-2xl text-brand-blue"></i>
      </div>

      <!-- Partners Dynamic Grid Framework -->
      <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-center justify-center max-w-5xl mx-auto">
        <div 
          v-for="(partner, index) in partners" 
          :key="partner.id"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: index * 75, duration: 400 } }"
          class="relative group bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px] hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 overflow-hidden"
        >
          
          <!-- BRAND LOGO / HEADER (Centered Perfectly) -->
          <component 
            :is="partner.websiteUrl ? 'a' : 'div'"
            v-bind="partner.websiteUrl ? { href: partner.websiteUrl, target: '_blank', rel: 'noopener noreferrer', title: 'Visit ' + partner.name } : {}"
            class="w-full h-full flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105 cursor-pointer z-10"
          >
            <img 
              v-if="partner.logo && !failedLogos.has(partner.id)"
              :src="partner.logo" 
              :alt="partner.name + ' Logo'"
              loading="lazy"
              @error="handleImageError(partner.id)"
              class="max-h-16 sm:max-h-20 w-full object-contain mx-auto"
            />
            <span v-else class="text-sm sm:text-base font-extrabold text-slate-800 text-center leading-snug">
              {{ partner.name }}
            </span>
          </component>

          <!-- TRANSPARENT BOTTOM LINK BAR (Hover on Desktop, Static on Mobile) -->
          <div 
            v-if="partner.links && partner.links.length > 0" 
            class="absolute bottom-0 inset-x-0 py-2 px-2 bg-white/80 backdrop-blur-sm border-t border-slate-100/60 flex items-center justify-center gap-2 transition-all duration-300 z-20
                   opacity-100 translate-y-0
                   lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
          >
            <a 
              v-for="link in partner.links" 
              :key="link.id"
              :href="link.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-7 h-7 rounded-full bg-slate-100/80 border border-slate-200/50 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-200 shadow-2xs hover:scale-110"
              :title="link.typeName + (link.description ? `: ${link.description}` : '')"
            >
              <i :class="[getSocialIcon(link.typeName), 'text-[11px]']"></i>
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRuntimeConfig, useAsyncData } from '#imports'
import { useSupabaseClient } from '#imports'

interface LinkItem {
  id: string
  url: string
  description?: string
  typeName: string
}

interface PartnerItem {
  id: string
  name: string
  logo: string
  websiteUrl?: string
  links: LinkItem[]
}

const config = useRuntimeConfig()
const supabase = useSupabaseClient()
const tenantId = config.public.tenantId

// Track failed images locally
const failedLogos = ref<Set<string>>(new Set())

const handleImageError = (partnerId: string) => {
  failedLogos.value.add(partnerId)
}

// Helper: Flexible check for website link types
const isWebsiteType = (typeName: string): boolean => {
  const clean = (typeName || '').toLowerCase().replace(/[^a-z0-9]/g, '')
  return ['website', 'web', 'site', 'url', 'homepage', 'domain'].includes(clean)
}

// Fetch partner data
const { data: partners, pending, error: asyncError } = await useAsyncData('partners_data', async () => {
  if (!tenantId) {
    console.warn('⚠️ [PARTNERS FETCH] tenantId is missing or empty!')
  }

  // 1. Get the type_id for 'partners'
  const { data: typeData, error: typeError } = await supabase
    .from('web_item_types')
    .select('id, type_name')
    .ilike('type_name', 'partners')
    .maybeSingle()

  if (typeError || !typeData) return []

  // 2. Fetch live_web records matching tenant_id and type_id
  const { data: webItems, error: webItemsError } = await supabase
    .from('live_web')
    .select('id, header, image_url, link_group_id')
    .eq('tenant_id', tenantId)
    .eq('type_id', typeData.id)

  if (webItemsError || !webItems || webItems.length === 0) return []

  // Extract link_group_ids
  const linkGroupIds = webItems
    .map(item => item.link_group_id)
    .filter((id): id is string => Boolean(id))

  // 3. Fetch web_item_links and join web_item_link_types
  let linksMap: Record<string, LinkItem[]> = {}
  
  if (linkGroupIds.length > 0) {
    const { data: linksData } = await supabase
      .from('web_item_links')
      .select(`
        id,
        link_group_id,
        url,
        description,
        web_item_link_types (
          name
        )
      `)
      .in('link_group_id', linkGroupIds)

    if (linksData) {
      linksData.forEach((link: any) => {
        const rawType = Array.isArray(link.web_item_link_types)
          ? link.web_item_link_types[0]?.name
          : link.web_item_link_types?.name

        const typeName = (rawType || '').trim()
        
        const linkItem: LinkItem = {
          id: link.id,
          url: link.url,
          description: link.description,
          typeName
        }
        
        if (!linksMap[link.link_group_id]) {
          linksMap[link.link_group_id] = []
        }
        linksMap[link.link_group_id].push(linkItem)
      })
    }
  }

  // 4. Map together into PartnerItem objects
  return webItems.map(item => {
    const itemLinks = (item.link_group_id && linksMap[item.link_group_id]) ? linksMap[item.link_group_id] : []
    const websiteLink = itemLinks.find(l => isWebsiteType(l.typeName))

    return {
      id: item.id,
      name: item.header || 'Partner',
      logo: item.image_url || '',
      websiteUrl: websiteLink?.url || '',
      links: itemLinks
    } as PartnerItem
  })
})

if (asyncError.value) {
  console.error('🚨 [ASYNC DATA ERROR]:', asyncError.value)
}

// Font Awesome Icon Utility
const getSocialIcon = (typeName: string) => {
  const normalized = typeName.toLowerCase().replace(/[^a-z]/g, '')
  
  switch (normalized) {
    case 'facebook':
      return 'fa-brands fa-facebook-f'
    case 'instagram':
      return 'fa-brands fa-instagram'
    case 'linkedin':
      return 'fa-brands fa-linkedin-in'
    case 'x':
    case 'twitter':
      return 'fa-brands fa-x-twitter'
    case 'youtube':
      return 'fa-brands fa-youtube'
    case 'website':
    case 'web':
    case 'site':
    case 'url':
      return 'fa-solid fa-globe'
    default:
      return 'fa-solid fa-link'
  }
}
</script>