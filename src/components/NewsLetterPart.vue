<template>
    <div class="gap-2.5" ref="sectionRef">
        <div class="h-77.75 relative">
            <img
                class="h-77.5 w-full object-cover rounded-xl img-item"
                :class="{ 'is-visible': isVisible }"
                src="https://i.imgur.com/hrtG7NI.jpeg"
                alt=""
            >
            <div class="absolute inset-0 bg-blue/60 rounded-xl h-77.5" />

            <h3
                class="absolute top-5 px-5 font-[raleway] font-bold text-white capitalize lg:text-5xl md:text-3xl text-2xl title-item"
                :class="{ 'is-visible': isVisible }"
            >
                {{ t.NewsLetterFirst }} <br> {{ t.NewsLetterTwo }}
            </h3>

            <div
                class="absolute bottom-10 sm:justify-end flex flex-row gap-2 w-full px-5 form-item"
                :class="{ 'is-visible': isVisible }"
            >
                <input
                    class="bg-white md:max-w-102.75 w-full h-13 px-5 rounded-lg text-right"
                    type="text"
                    placeholder="example@email.com"
                >
                <div class="w-full max-w-55 flex justify-center md:justify-start">
                    <button class="bg-orange flex-col w-full max-w-55 flex justify-center rounded-lg uppercase text-white md:text-xl font-bold font-[raleway] whitespace-nowrap cursor-pointer">
                        {{ t.newslettersignup.slice(0) }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, computed } from 'vue'
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
            { threshold: 0.15 }
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
.img-item {
    opacity: 0;
    transform: scale(1.03);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.img-item.is-visible {
    opacity: 1;
    transform: scale(1);
}

.title-item {
    opacity: 0;
    transform: translateY(-16px);
    transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
}

.title-item.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.form-item {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
}

.form-item.is-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>