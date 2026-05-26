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

<template>
    <div class="min-h-100">
        <div class="pt-20 ">
            <h1 class="md:text-6xl text-3xl text-blue font-semibold font-[raleway]"><span class="text-orange">{{ t.mediahero.charAt(0) }}</span>{{ t.mediahero.slice(1) }}</h1>
        </div>
        <div class="my-10">
            <p class="md:text-2xl text-base text-blue font-[raleway] font-semibold ">{{ t.mediaherotext.slice(0) }}</p>
        </div>
    </div>
</template>

<style>

</style>
