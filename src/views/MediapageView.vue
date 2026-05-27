<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useMedias } from '@/components/modules/useMediasPage'
  import MediasPageHeroPart from '@/components/MediasPageHeroPart.vue'
  import NewsLetterPart from '@/components/NewsLetterPart.vue'

  const route = useRoute()
  const { medias } = useMedias()

  const media = computed(() => {
    return medias.value.find(n => n.slug === route.params.slug)
  })
</script>

<template>
  <main v-if="media">
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
      <MediasPageHeroPart :media="media"/>
    </div>
    <div class="py-10 px-20 max-md:px-8 max-sm:px-2.5">
      <NewsLetterPart/>
    </div>
  </main>
</template>
