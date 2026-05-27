<template>
  <div>
    <div class="pb-10 gap-5 flex flex-col">
      <RouterLink to="/media" class="text-blue font-[raleway] hover:text-orange">< {{ t.medias }}</RouterLink>
      <h1 class="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-blue font-semibold font-[raleway] mt-4">
        <span class="text-orange">{{ (media[`title_${currentLanguage}`] || media.title).charAt(0) }}</span>{{ (media[`title_${currentLanguage}`] || media.title).slice(1) }}
      </h1>
      <p class="md:text-lg text-base  text-blue font-semibold font-[raleway]">
        {{ (media[`description_${currentLanguage}`] || media.description).slice(0) }}
      </p>
    </div>

    <div class="grid md:grid-cols-4 grid-col-2 gap-2.5 mt-10 mb-5">
      <div v-for="media in medias" :key="media.id" class="col-span-1 ">
        <img :src="media.pictures" alt="" class="h-68.25 w-full object-cover rounded-xl">
      </div>
    </div>
  </div>
</template>

<script setup>
    import { useMedias } from './modules/useMedias';
    import { useLanguage } from './modules/useLanguage'
    import { computed } from 'vue'
    import { translations } from './modules/translations'
    const { currentLanguage } = useLanguage()
    const t = computed(() => translations[currentLanguage.value])
    const { medias } = useMedias();
    defineProps({
        media: {
        type: Object,
        required: true
        }
    })
</script>

<style lang="scss" scoped>

</style>
