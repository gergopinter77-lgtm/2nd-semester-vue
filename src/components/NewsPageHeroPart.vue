<template>
    <div class="pt-10">
        <RouterLink to="/news" class="text-blue font-[raleway] hover:text-orange">‹ {{ t.News }} </RouterLink>

        <h1 class=" text-xl sm:text-2xl md:text-4xl lg:text-6xl  text-blue font-semibold font-[raleway] mt-4">
            <span class="text-orange">{{ (news[`title_${currentLanguage}`] || news.title).charAt(0) }}</span>{{ (news[`title_${currentLanguage}`] || news.title).slice(1) }}
        </h1>
    </div>

    <div class="grid grid-cols-3 mt-10">
        <div class="bg-blue p-10 flex items-center col-span-2 max-lg:col-span-3 rounded-l-2xl max-lg:rounded-b-none max-lg:rounded-t-2xl">
            <p class="text-white font-[raleway] md:text-lg text-base">{{ news[`description_${currentLanguage}`] || news.description }}</p>
        </div>
        <div class="h-96 col-span-1 max-lg:col-span-3">
            <img :src="news.image" :alt="news.title" class="w-full h-full object-cover rounded-r-2xl max-lg:rounded-t-none max-lg:rounded-b-2xl">
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useLanguage } from './modules/useLanguage'
    import { translations } from './modules/translations'

    const { currentLanguage } = useLanguage()
    const t = computed(() => translations[currentLanguage.value])
    defineProps({
        news: {
        type: Object,
        required: true
        }
    })
</script>

<style lang="scss" scoped>

</style>