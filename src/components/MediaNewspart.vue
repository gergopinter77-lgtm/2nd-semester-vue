
<script setup>
 import { useMediaNews, } from './modules/useMediaNews';
  const { News } = useMediaNews();
</script>

<template>
    <div>
        <div class="grid grid-cols-12 pb-2">
            <h1 class="col-span-10 col-start-2 text-4xl uppercase text-blue font-bold">what’s happening</h1>
        </div>
        <div class="flex flex-col gap-10">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 rounded-lg">
                <div  v-for="media in News" :key="media.id" class="col-span-1 w-full h-120 rounded-lg relative">
                    <img :src="media.img" alt="media image" class="w-full h-full object-cover rounded-lg">
                    <div class="absolute inset-0 bg-blue/50 rounded-xl"></div>
                    <p class="absolute top-5 pl-7 text-white text-2xl font-bold">{{ media.text }}</p>
                    <RouterLink to="/news" class=" absolute bottom-5 right-1 lg:mx-7 sm:mx-4 mx-2 flex flex-cols bg-white rounded-2xl font-bold md:w-40 md:hover:w-44 w-34 hover:w-38 px-2 justify-center transition-all duration-300 overflow-hidden">
                        <h1 class="uppercase text-blue md:text-xl text-base font-bold md:pt-0.75 pt-1.25  whitespace-nowrap">read more</h1>
                        <div class="relative justify-center md:w-[18px] md:h-[36px] w-[18px] h-[36px]">
                          <svg class="absolute  lg:visible invisible " width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="#EA791D" /></svg>
                          <svg class="absolute  lg:invisible visible " width="12" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="#EA791D" /></svg>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>
