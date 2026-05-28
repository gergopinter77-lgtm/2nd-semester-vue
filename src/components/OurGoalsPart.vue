<template>
    <div class="grid grid-cols-12 gap-2.5 sm:pt-20 pt-5" ref="sectionRef">
        <h1
            class="col-start-1 lg:col-end-9 col-end-11 text-xl sm:text-2xl md:text-4xl lg:text-6xl text-blue font-semibold font-[raleway] title-item"
            :class="{ 'is-visible': isVisible }"
        >
            <span class="text-orange">{{ t.OurGoals.charAt(0) }}</span>{{ t.OurGoals.slice(1) }}
        </h1>
        <div
            class="col-span-12 sm:col-start-1 mt-10 mb-5 video-item"
            :class="{ 'is-visible': isVisible }"
        >
            <iframe
                class="w-full h-120"
                src="https://www.youtube.com/embed/cPL89tny8TU"
                title="Business DE-DK"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from './modules/useLanguage'
import { translations } from './modules/translations'

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])

const sectionRef = ref(null)
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

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<style scoped>
.title-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}

.video-item {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>