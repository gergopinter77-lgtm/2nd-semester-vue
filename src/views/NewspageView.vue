<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useNewsCard } from '@/components/modules/useNewsCard'
  import NewsPageHeroPart from '@/components/NewsPageHeroPart.vue'
  import NewsLetterPart from '@/components/NewsLetterPart.vue'

  const route = useRoute()
  const { newsCards } = useNewsCard()

  const news = computed(() => {
    return newsCards.value.find(n => n.slug === route.params.slug)
  })
</script>

<template>
  <main v-if="news">
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
      <NewsPageHeroPart :news="news"/>
    </div>
    <div class="py-10">
      <NewsLetterPart/>
    </div>
  </main>
</template>