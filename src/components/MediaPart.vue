<template>
  <div class="flex flex-col gap-4">
    <h3 class="text-blue font-[raleway] font-semibold text-xl sm:text-2xl md:text-4xl ">
      <span class="text-orange">{{ t.HomeMediaText.charAt(0) }}</span>{{ t.HomeMediaText.slice(1) }}
    </h3>

    <div class="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-2.5 mt-10 mb-5">
      <iframe class="w-full h-150" src="https://www.youtube.com/embed/8i50dL2wIYc" title="business DE DK short" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe class="w-full h-150 max-[1023.3px]:hidden" src="https://www.youtube.com/embed/8i50dL2wIYc" title="business DE DK short" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe class="w-full h-150 max-[1023.3px]:hidden" src="https://www.youtube.com/embed/8i50dL2wIYc" title="business DE DK short" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe class="w-full h-150 max-[1023.3px]:hidden" src="https://www.youtube.com/embed/8i50dL2wIYc" title="business DE DK short" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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