<template>
    <div class="grid grid-cols-12 gap-2.5 pt-8 sm:pt-12 md:pt-20">
        <div class="col-span-12 sm:col-start-1 sm:col-end-10">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-blue font-semibold font-[raleway]"
                :class="{ 'is-visible': isVisible }">
                <span class="text-orange">{{ t.NewsHero.charAt(0) }}</span>{{ t.NewsHero.slice(1) }}
            </h1>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { translations } from './modules/translations'
import { useLanguage } from './modules/useLanguage'

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
