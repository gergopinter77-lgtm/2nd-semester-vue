<template>
    <div class="grid grid-cols-12 gap-2.5">
        <div class="col-start-1 col-span-6">
            <h2 class="capitalize font-[raleway] text-4xl text-blue font-semibold mb-5"><span class="text-orange">w</span>hat’s happening right now in the world of business</h2>
        </div>
        <div v-for="news in newses" :key="news" class="col-span-3 rounded-lg h-125 row-2">
            <div class="flex flex-col">
                <div class="relative">
                    <img :src="news.image" alt="" class="w-full h-125 object-cover rounded-lg text-white">
                    <div class="absolute inset-0 bg-blue/60" rounded-lg></div>
                </div>
                <RouterLink to="/news" class="absolute -bottom-355 pl-7 text-[32px]/9 font-[raleway] font-semibold mb-2 w-65 text-white text-shadow-lg hover:text-orange duration-75"><span class="text-orange">{{ news.text[0] }}</span>{{ news.text.slice(1) }}</RouterLink>
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