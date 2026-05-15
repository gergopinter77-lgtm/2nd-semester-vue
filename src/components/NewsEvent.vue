<template>
    <div class="grid grid-cols-12 gap-2.5">
        <div class="col-start-1 col-span-6">
            <h2 class="capitalize font-[raleway] text-4xl text-black font-semibold"><span class="text-orange">w</span>hat’s happening right now in the world of business</h2>
        </div>
        <div v-for="news in newses" :key="news" class="col-span-3 rounded-lg h-125 row-2">
            <div class="flex flex-col">
                <img :src="news.image" alt="" class="w-full h-125 object-cover rounded-lg grayscale-80 text-white">
                <h3 class="absolute -bottom-355 pl-7 text-[32px]/9 font-[raleway] font-semibold mb-2 w-65 text-white text-shadow-lg "><span class="text-orange">{{ news.text[0] }}</span>{{ news.text.slice(1) }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
 import { useNewev } from './modules/useNewev';

 const { newses } = useNewev();
</script>

<style lang="scss" scoped>

</style>