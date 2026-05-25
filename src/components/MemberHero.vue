<template>
    <div class="pt-10">
        <RouterLink to="/network" class="text-blue font-[raleway]">‹ {{ t.backToNetwork }}</RouterLink>
        <h1 class="text-4xl md:text-6xl text-blue font-semibold font-[raleway] mt-4">
            <span class="text-orange">{{ member.name.charAt(0) }}</span>{{ member.name.slice(1) }}
        </h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-10 ">
        <div class="bg-blue p-8 md:p-20 flex items-center ">
            <p class="text-white font-[raleway] text-base md:text-lg">{{ member[`descriptionLong_${currentLanguage}`] || member.descriptionLong }}</p>
        </div>
        <div class="h-64 md:h-96">
            <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
        </div>
    </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useLanguage } from './modules/useLanguage'
  import { translations } from './modules/translations'

  defineProps({ member: { type: Object, required: true } })

  const { currentLanguage } = useLanguage()
  const t = computed(() => translations[currentLanguage.value])
</script>

<style lang="scss" scoped>

</style>