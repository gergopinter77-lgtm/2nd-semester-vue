<template>
    <div class="pt-10 header-item" :class="{ 'is-visible': isVisible }" ref="headerRef">
        <RouterLink to="/news" class="text-blue font-[raleway] hover:text-orange">‹ {{ t.News }} </RouterLink>

        <h1 class="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-blue font-semibold font-[raleway] mt-4">
            <span class="text-orange">{{ (news[`title_${currentLanguage}`] || news.title).charAt(0) }}</span>{{ (news[`title_${currentLanguage}`] || news.title).slice(1) }}
        </h1>
    </div>

    <div
        class="grid grid-cols-3 mt-10 content-item"
        :class="{ 'is-visible': isVisible }"
        ref="contentRef"
    >
        <div class="bg-blue p-10 flex items-center col-span-2 max-lg:col-span-3 rounded-l-2xl max-lg:rounded-b-none max-lg:rounded-t-2xl card-left"
            :class="{ 'is-visible': isVisible }"
        >
            <p class="text-white font-[raleway] md:text-lg text-base">{{ news[`description_${currentLanguage}`] || news.description }}</p>
        </div>
        <div class="h-96 col-span-1 max-lg:col-span-3 card-right"
            :class="{ 'is-visible': isVisible }"
        >
            <img :src="news.image" :alt="news.title" class="w-full h-full object-cover rounded-r-2xl max-lg:rounded-t-none max-lg:rounded-b-2xl">
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, computed } from 'vue'
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