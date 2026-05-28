<template>
    <div class="grid grid-cols-12 gap-2.5" ref="sectionRef">
        <div
            class="flex items-center justify-center cols-start-1 col-span-12 min-h-96 font-[raleway] section-item"
            :class="{ 'is-visible': isVisible }"
        >
            <div class="w-full grid grid-cols-[1fr_1px_1.7fr]">

                <div class="pr-10">
                    <div
                        v-for="(item, i) in items"
                        :key="i"
                        class="py-3 cursor-pointer text-lg transition-colors duration-200 nav-item"
                        :class="[
                            { 'is-visible': isVisible },
                            activeIndex === i ? 'text-orange font-base' : 'text-blue hover:text-[#f2845a]'
                        ]"
                        :style="{ transitionDelay: isVisible ? `${i * 0.1}s` : '0s' }"
                        @click="activeIndex = i"
                    >
                        {{ item[`label_${currentLanguage}`] || item.label }}
                    </div>
                </div>

                <div class="bg-black/10" />

                <div class="pl-10 min-h-48">
                    <Transition name="fade" mode="out-in">
                        <div :key="activeIndex">
                            <p class="font-[raleway] md:text-2xl sm:text-xl text-lg font-bold mb-4 text-blue">{{ active[`title_${currentLanguage}`] || active.title }}</p>
                            <p class="text-md leading-7 md:text-lg sm:text-md text-sm text-blue/50 font-base">{{ active[`body_${currentLanguage}`] || active.body }}</p>
                        </div>
                    </Transition>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, } from 'vue'
import { useAbout } from './modules/useAbout.js'
import { useLanguage } from './modules/useLanguage.js'

const { currentLanguage } = useLanguage()


const { items, activeIndex, active } = useAbout()

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
        { threshold: 0.50 }
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
.section-item {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.section-item.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.nav-item {
    opacity: 0;
    transform: translateX(-12px);
    transition: opacity 0.4s ease, transform 0.4s ease, color 0.2s ease;
}

.nav-item.is-visible {
    opacity: 1;
    transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from {
    opacity: 0;
    transform: translateY(6px);
}
.fade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>
