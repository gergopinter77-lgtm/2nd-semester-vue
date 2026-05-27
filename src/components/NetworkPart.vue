<template>
    <div class="grid grid-cols-12 gap-2.5 pt-10 md:pt-20">
        <h1
            class="hero-text col-start-1 col-span-12 md:col-span-9 text-3xl md:text-6xl text-blue font-semibold font-[raleway]"
            :class="{ 'is-visible': isVisible }"
        >
            <span class="text-orange">{{ t.networkTitle.charAt(0) }}</span>{{ t.networkTitle.slice(1) }}
        </h1>
        <p
            class="hero-text col-start-1 col-span-12 md:col-span-8 mt-4 md:mt-6 text-base md:text-lg text-blue font-[raleway] font-semibold"
            :class="{ 'is-visible': isVisible }"
        >
            {{ t.networkSubtitle }}
        </p>
    </div>

    <div class="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-2.5 mt-12 md:mt-20 md:items-center">
        <h2 class="md:col-start-1 md:col-span-3 text-3xl md:text-4xl font-bold text-blue font-[raleway]">{{ t.networkHeading }}</h2>

        <div class="md:col-end-13 md:col-span-9 flex flex-row justify-center md:justify-end gap-2 md:gap-3">
            <button @click="selectedCountry = 'all'" class="px-4 md:px-5 py-2 rounded-lg border border-blue font-[raleway] text-sm md:text-base hover:bg-blue hover:text-white" :class="selectedCountry === 'all' ? 'bg-blue text-white' : 'text-blue'">
                {{ t.filterAll }}
            </button>
            <button @click="selectedCountry = 'DK'" class="px-4 md:px-5 py-2 rounded-lg border border-blue font-[raleway] text-sm md:text-base hover:bg-blue hover:text-white" :class="selectedCountry === 'DK' ? 'bg-blue text-white' : 'text-blue'">
                {{ t.filterDenmark }}
            </button>
            <button @click="selectedCountry = 'DE'" class="px-4 md:px-5 py-2 rounded-lg border border-blue font-[raleway] text-sm md:text-base hover:bg-blue hover:text-white" :class="selectedCountry === 'DE' ? 'bg-blue text-white' : 'text-blue'">
                {{ t.filterGermany }}
            </button>
        </div>
    </div>

    <div class="grid grid-cols-12 gap-2.5 mt-10 mb-20">
        <div
            v-for="(member, index) in filteredMembers"
            :key="member.id"
            :ref="el => setCardRef(el, index)"
            class="network-card col-span-6 md:col-span-4 rounded-2xl overflow-hidden relative h-64 md:h-80 group hover:shadow-2xl transition-shadow duration-300"
        >
            <RouterLink :to="`/network/${member.slug}`" class="block w-full h-full cursor-pointer">
                <img :src="member.image" :alt="member.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-blue/60 rounded-lg"></div>

                <div class="absolute top-3 right-3">
                    <svg v-if="member.country === 'DK'" xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 37 28"><path fill="#c8102e" d="M0 0h37v28H0z"/><path fill="#ffffff" d="M12 0h4v28h-4z"/><path fill="#ffffff" d="M0 12h37v4H0z"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 5 3"><path fill="#000000" d="M0 0h5v1H0z"/><path fill="#dd0000" d="M0 1h5v1H0z"/><path fill="#ffce00" d="M0 2h5v1H0z"/></svg>
                </div>

                <div class="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white font-[raleway]">
                    <h3 class="text-base md:text-xl font-bold mb-1 group-hover:text-orange transition-colors duration-200">{{ member.name }}</h3>
                    <p class="hidden md:block text-xs md:text-sm font-light mb-3 md:mb-4">{{ member[`description_${currentLanguage}`] || member.description }}</p>
                    <div class="flex items-center gap-2 mt-2 hover:underline">
                        <span class="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#ffffff" d="M9.7 18.3q-.275-.275-.275-.712t.275-.713L13.875 12L9.7 7.825q-.275-.275-.275-.713t.275-.712t.713-.275t.712.275l4.9 4.9q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.9 4.9q-.275.275-.712.275t-.713-.275"/></svg>
                        </span>
                        <span class="text-white text-[10px] md:text-xs font-[raleway] uppercase tracking-wider">{{ t.moreAbout }}</span>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useNetwork } from './modules/useNetwork';
import { useLanguage } from './modules/useLanguage';
import { translations } from './modules/translations';

const { selectedCountry, filteredMembers } = useNetwork()
const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])

const isVisible = ref(false)

const cardRefs = ref([])
let observer = null

function setCardRef(el, index) {
    if (el) cardRefs.value[index] = el
}

function observeEl(el) {
    if (el && observer) observer.observe(el)
}

function resetAndObserve() {
    nextTick(() => {
        cardRefs.value.forEach(el => {
            if (el) {
                el.classList.remove('is-visible')
                observer.observe(el)
            }
        })
    })
}

function createObserver() {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.12 }
    )
}

onMounted(() => {
    requestAnimationFrame(() => {
        isVisible.value = true
    })
    createObserver()
    cardRefs.value.forEach(observeEl)
})

watch(filteredMembers, () => {
    resetAndObserve()
})

onBeforeUnmount(() => {
    if (observer) observer.disconnect()
})
</script>

<style scoped>
.hero-text {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}

.network-card {
    opacity: 0;
    transform: translateY(36px);
    transition: opacity 0.55s ease, transform 0.55s ease;
}
.network-card:nth-child(1) { transition-delay: 0s; }
.network-card:nth-child(2) { transition-delay: 0.10s; }
.network-card:nth-child(3) { transition-delay: 0.20s; }
.network-card:nth-child(4) { transition-delay: 0.30s; }
.network-card.is-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>