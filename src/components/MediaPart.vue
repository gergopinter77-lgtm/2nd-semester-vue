<template>
  <div class="flex flex-col gap-4">
    <h3 class="text-blue font-[raleway] font-semibold text-4xl">
      <span class="text-orange">{{ t.HomeMediaText.charAt(0) }}</span>{{ t.HomeMediaText.slice(1) }}
    </h3>

    <div class="grid grid-cols-4 gap-2.5 mt-10 mb-5">
      <div v-for="media in medias" :key="media.id" class="col-span-1 ">
        <img :src="media.pictures" alt="" class="h-68.25 w-full object-cover rounded-xl">
      </div>
    </div>
        <RouterLink to="/media" class="self-center capitalize font-[raleway] font-semibold text-2xl bg-orange text-white px-10 py-2 rounded-lg">{{ t.CheckOutMore }}</RouterLink>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { translations } from './modules/translations';
  import { useLanguage } from './modules/useLanguage';
  import { useMedias } from './modules/useMedias';

  const { currentLanguage } = useLanguage()
  const t = computed(() => translations[currentLanguage.value])
  const { medias } = useMedias();
</script>