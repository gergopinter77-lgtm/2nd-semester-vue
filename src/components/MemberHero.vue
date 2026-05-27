<template>
    <div class="pt-10 header-item" :class="{ 'is-visible': isVisible }" ref="headerRef">
        <RouterLink to="/network" class="text-blue font-[raleway] hover:text-orange">‹ {{ t.backToNetwork }}</RouterLink>

        <h1 class="text-4xl md:text-6xl text-blue font-semibold font-[raleway] mt-4">
            <span class="text-orange">{{ member.name.charAt(0) }}</span>{{ member.name.slice(1) }}
        </h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-10 rounded-2xl overflow-hidden">
        <div
            class="bg-blue p-8 md:p-20 flex items-center card-left"
            :class="{ 'is-visible': isVisible }"
        >
            <p class="text-white font-[raleway] text-base md:text-lg">{{ member[`descriptionLong_${currentLanguage}`] || member.descriptionLong }}</p>
        </div>
        <div
            class="h-64 md:h-96 card-right"
            :class="{ 'is-visible': isVisible }"
        >
            <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useLanguage } from './modules/useLanguage'
import { translations } from './modules/translations'

defineProps({
    member: {
        type: Object,
        required: true
    }
})

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])

const headerRef = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true
                    observer.disconnect()
                }
            })
        },
        { threshold: 0.1 }
    )

    if (headerRef.value) {
        observer.observe(headerRef.value)
    }
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<style scoped>
.header-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}

.card-left {
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;

    &.is-visible {
        opacity: 1;
        transform: translateX(0);
    }
}

.card-right {
    opacity: 0;
    transform: translateX(20px);
    transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;

    &.is-visible {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>