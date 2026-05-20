<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useNetwork } from '@/components/modules/useNetwork'
  import MemberHero from '@/components/MemberHero.vue';
  import MemberInfo from '@/components/MemberInfo.vue';
  import NewsLetterPart from '@/components/NewsLetterPart.vue';

  const route = useRoute()
  const { members } = useNetwork()

  const member = computed(() => {
      return members.value.find(m => m.slug === route.params.slug)
  })
</script>

<template>
  <main v-if="member">
    <div class="px-20">
      <MemberHero :member="member" />
      <MemberInfo :member="member" />
    </div>
    <div class="my-20">
     <NewsLetterPart />
   </div>
  </main>

  <main v-else class="px-20 pt-20">
    <h1 class="text-4xl text-blue font-[raleway]">Member not found</h1>
    <RouterLink to="/network" class="text-orange font-[raleway] mt-4 block">Back to Network</RouterLink>
  </main>
</template>