<template>
    <div class="gap-2.5">
        <div class="h-77.75 relative">
            <img class="h-77.5 w-full object-cover rounded-xl" src="https://i.imgur.com/hrtG7NI.jpeg" alt="">
            <div class="absolute inset-0 bg-blue/60 rounded-xl h-77.5" rounded-lg></div>
            <h3 class="absolute top-5 px-5 font-[raleway] font-bold text-white capitalize lg:text-5xl md:text-3xl text-2xl">{{ t.NewsLetterFirst }} <br> {{ t.NewsLetterTwo }}</h3>
            <div class="absolute bottom-10 sm:justify-end flex  flex-row gap-2 w-full px-5">
              <input class="bg-white md:max-w-102.75 w-full h-13 px-5 rounded-lg text-right" type="text" placeholder="example@email.com">
              <div class="w-full max-w-55 flex justify-center md:justify-start">
                <button class="bg-orange flex-col w-full max-w-55 flex justify-center rounded-lg uppercase text-white md:text-xl font-bold font-[raleway] whitespace-nowrap">{{ t.newslettersignup.slice(0) }}</button>
              </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useLanguage } from './modules/useLanguage'
    import { translations } from './modules/translations'

    const { currentLanguage } = useLanguage()
    const t = computed(() => translations[currentLanguage.value])
</script>

<style scoped>

</style>
