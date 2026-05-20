<template>
    <div class="grid grid-cols-12 gap-x-2.5 gap-y-2.5">
        <div v-for="news in store.filteredCards" :key="news.id" class="col-span-3 rounded-xl flex flex-col relative">
            <img :src="news.image" alt="" class="rounded-lg h-125">
            <div class="absolute inset-0 bg-blue/60 rounded-lg"></div>
            <h3 class="text-white text-4xl font-[raleway] top-90 font-semibold mb-2 absolute pl-5 xshadow-lg"><span class="text-orange">{{ news.title[0] }}</span>{{ news.title.slice(1) }}</h3>
        </div>
    </div>
</template>

<script setup>
import { useNewsStore } from './modules/useNewsStore'
const store = useNewsStore()
</script>

<style lang="scss">
</style>