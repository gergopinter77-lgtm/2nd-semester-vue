<template>
    <div class="grid grid-cols-12 gap-2.5 sm:pt-20 pt-5">
        <h1
            class="col-start-1 lg:col-end-9 col-end-11 text-xl sm:text-2xl md:text-4xl lg:text-6xl text-blue font-semibold font-[raleway]"
            :class="{ 'is-visible': isVisible }"
        >
            <span class="text-orange">{{t.AboutHeroText.charAt(0)}}</span>{{ t.AboutHeroText.slice(1) }}
        </h1>
        <p class="col-start-1 lg:col-end-8 col-end-10 text-lg md:text-2xl font-[raleway] font-bold pt-7.5">{{ t.AboutText }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useLanguage } from './modules/useLanguage'
import { translations } from './modules/translations'

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])
const isVisible = ref(false)

onMounted(() => {
    requestAnimationFrame(() => {
        isVisible.value = true
    })
})
</script>

<style scoped>
h1 {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
