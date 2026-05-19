<template>
    <div class="grid grid-cols-12 gap-x-2.5 gap-y-2.5">
        <div v-for="news in newsCards" :key="news.id" class="col-span-3 rounded-xl flex flex-col relative">
            <img :src="news.image" alt="" class="rounded-xl h-125">
            <h3 class="text-white text-4xl font-[raleway] top-90 font-semibold mb-2 absolute pl-5 shadow-lg">{{ news.title }}</h3>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { useNewsCard } from './modules/useNewsCard';
    const { newsCards } = useNewsCard()
</script>

<style lang="scss" scoped>

</style>