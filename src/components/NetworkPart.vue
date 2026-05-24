<template>
    <div class="grid grid-cols-12 gap-2.5 pt-10 md:pt-20">
        <h1 class="col-start-1 col-span-12 md:col-span-9 text-3xl md:text-6xl text-blue font-semibold font-[raleway]"><span class="text-orange">{{ t.networkTitle.charAt(0) }}</span>{{ t.networkTitle.slice(1) }}</h1>
        <p class="col-start-1 col-span-12 md:col-span-8 mt-4 md:mt-6 text-base md:text-lg text-blue font-[raleway] font-semibold">{{ t.networkSubtitle }}</p>
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
        <RouterLink v-for="member in filteredMembers" :key="member.id" :to="`/network/${member.slug}`" class="col-span-6 md:col-span-4 relative rounded-2xl overflow-hidden h-64 md:h-80 hover:scale-[1.02] transition-transform duration-300 cursor-pointer block">
            <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-blue/60"></div>

            <div class="absolute top-3 right-3">
    <svg v-if="member.country === 'DK'" xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 37 28"><path fill="#c8102e" d="M0 0h37v28H0z"/><path fill="#ffffff" d="M12 0h4v28h-4z"/><path fill="#ffffff" d="M0 12h37v4H0z"/></svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 5 3"><path fill="#000000" d="M0 0h5v1H0z"/><path fill="#dd0000" d="M0 1h5v1H0z"/><path fill="#ffce00" d="M0 2h5v1H0z"/></svg>
</div>

            <div class="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white font-[raleway]">
                <h3 class="text-base md:text-xl font-bold mb-1">{{ member.name }}</h3>
                <p class="text-xs md:text-sm font-light mb-3 md:mb-4">{{ member[`description_${currentLanguage}`] || member.description }}</p>
                <div class="flex items-center gap-2 mt-2 hover:underline">
    <span class="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white flex items-center justify-center shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#ffffff" d="M9.7 18.3q-.275-.275-.275-.712t.275-.713L13.875 12L9.7 7.825q-.275-.275-.275-.713t.275-.712t.713-.275t.712.275l4.9 4.9q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.9 4.9q-.275.275-.712.275t-.713-.275"/></svg>
</span>
    <span class="text-white text-[10px] md:text-xs font-[raleway] uppercase tracking-wider">{{ t.moreAbout }}</span>
</div>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
 import { computed } from 'vue'
 import { useNetwork } from './modules/useNetwork';
 import { useLanguage } from './modules/useLanguage';
 import { translations } from './modules/translations';

 const { selectedCountry, filteredMembers } = useNetwork()
 const { currentLanguage } = useLanguage()

 const t = computed(() => translations[currentLanguage.value])
</script>

<style lang="scss" scoped>

</style>