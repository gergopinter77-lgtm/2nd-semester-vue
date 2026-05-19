<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useNetwork } from '@/components/modules/useNetwork'
  import MemberHero from '@/components/MemberHero.vue';

  const route = useRoute()
  const { members } = useNetwork()

  const member = computed(() => {
      return members.value.find(m => m.slug === route.params.slug)
  })
</script>

<template>
  <main>
    <div class="px-20">
      <MemberHero :member="member" />
    </div>
  </main>
</template>