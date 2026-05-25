<template>
    <div class="grid grid-cols-12 gap-2.5">
    <div class="col-start-1 col-span-9">
      <h2 class="capitalize font-[raleway] text-xl sm:text-2xl md:text-4xl  text-blue font-semibold mb-5">
        <span class="text-orange">{{ t.HomeNewsEventText.charAt(0) }}</span>{{ t.HomeNewsEventText.slice(1) }}
      </h2>
    </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { translations } from './modules/translations';
import { useLanguage } from './modules/useLanguage';

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])
</script>

<style lang="scss" scoped>

</style>