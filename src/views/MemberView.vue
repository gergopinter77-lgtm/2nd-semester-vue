<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useNetwork } from '@/components/modules/useNetwork'
  import { useLanguage } from '@/components/modules/useLanguage'
  import { translations } from '@/components/modules/translations'
  import MemberHero from '@/components/MemberHero.vue';
  import MemberInfo from '@/components/MemberInfo.vue';
  import NewsLetterPart from '@/components/NewsLetterPart.vue';

  const route = useRoute()
  const { members } = useNetwork()
  const { currentLanguage } = useLanguage()
  const t = computed(() => translations[currentLanguage.value])
  const member = computed(() => members.value.find(m => m.slug === route.params.slug))
</script>

<template>
  <main v-if="member">
    <div class="px-4 md:px-20">
      <MemberHero :member="member" />
      <MemberInfo :member="member" />
    </div>
    <div class="my-20 px-20 max-md:px-8 max-sm:px-2.5">
      <NewsLetterPart />
    </div>
  </main>

  <main v-else class="px-4 md:px-20 pt-20">
    <h1 class="text-4xl text-blue font-[raleway]">{{ t.memberNotFound }}</h1>
    <RouterLink to="/network" class="text-orange font-[raleway] mt-4 block">{{ t.backToNetworkLink }}</RouterLink>
  </main>
</template>