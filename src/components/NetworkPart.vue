<template>
    <div class="grid grid-cols-12 gap-2.5 pt-20">
        <h1 class="col-start-1 col-span-9 text-6xl text-blue font-semibold font-[raleway]"><span class="text-orange">M</span>eet our network of 26 <br> partners across the border</h1>
        <p class="col-start-1 col-span-8 mt-6 text-lg text-blue font-[raleway] font-semibold">Meet leaders and specialists from across the region. <br>Share experience, build relationships, and put new knowledge <br>to work — across industries and roles.</p>
    </div>

    <div class="grid grid-cols-12 gap-2.5 mt-20 items-center">
        <h2 class="col-start-1 col-span-3 text-4xl font-bold text-blue font-[raleway]">NETWORK</h2>

        <div class="col-end-13 col-span-9 flex flex-row justify-end gap-3">
            <button @click="selectedCountry = 'all'" class="px-5 py-2 rounded-lg border border-blue font-[raleway] hover:bg-blue hover:text-white" :class="selectedCountry === 'all' ? 'bg-blue text-white' : 'text-blue'">
                All
            </button>
            <button @click="selectedCountry = 'DK'" class="px-5 py-2 rounded-lg border border-blue font-[raleway] hover:bg-blue hover:text-white" :class="selectedCountry === 'DK' ? 'bg-blue text-white' : 'text-blue'">
                Denmark
            </button>
            <button @click="selectedCountry = 'DE'" class="px-5 py-2 rounded-lg border border-blue font-[raleway] hover:bg-blue hover:text-white" :class="selectedCountry === 'DE' ? 'bg-blue text-white' : 'text-blue'">
                Germany
            </button>
        </div>
    </div>

    <div class="grid grid-cols-12 gap-2.5 mt-10 mb-20">
        <div v-for="member in filteredMembers" :key="member.id" class="col-span-4 relative rounded-2xl overflow-hidden h-80">
            <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-blue/60"></div>

            <div class="absolute top-3 right-3">
    <svg v-if="member.country === 'DK'" xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 37 28"><path fill="#c8102e" d="M0 0h37v28H0z"/><path fill="#ffffff" d="M12 0h4v28h-4z"/><path fill="#ffffff" d="M0 12h37v4H0z"/></svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 5 3"><path fill="#000000" d="M0 0h5v1H0z"/><path fill="#dd0000" d="M0 1h5v1H0z"/><path fill="#ffce00" d="M0 2h5v1H0z"/></svg>
</div>

            <div class="absolute bottom-0 left-0 right-0 p-5 text-white font-[raleway]">
                <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
                <p class="text-sm font-light mb-4">{{ member.description }}</p>
                <RouterLink to="/network" class="flex items-center gap-2 mt-2 hover:underline">
    <span class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#ffffff" d="M9.7 18.3q-.275-.275-.275-.712t.275-.713L13.875 12L9.7 7.825q-.275-.275-.275-.713t.275-.712t.713-.275t.712.275l4.9 4.9q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.9 4.9q-.275.275-.712.275t-.713-.275"/></svg>
</span>
    <span class="text-white text-xs font-[raleway] uppercase tracking-wider">More about the network</span>
</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
 import { useNetwork } from './modules/useNetwork';
 const { selectedCountry, filteredMembers } = useNetwork()
</script>

<style lang="scss" scoped>

</style>