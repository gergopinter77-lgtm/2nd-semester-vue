
<script setup>
 import { useMediaNews, } from './modules/useMediaNews';
  const { News } = useMediaNews();
</script>

<template>
    <div>
        <div class="grid grid-cols-12 pb-2">
            <h1 class="col-span-10 col-start-2 text-4xl uppercase text-blue font-bold">what’s happening</h1>
        </div>
        <div class="grid grid-cols-12">
            <div class="col-span-10 col-start-2 grid grid-cols-4 gap-4 rounded-lg">
                <div  v-for="media in News" :key="media.id" class="col-span-1 w-full h-120 rounded-lg relative">
                    <img :src="media.img" alt="media image" class="w-full h-full object-cover rounded-lg border-5 border-blue/5">
                    <p class="absolute top-5 pl-7 text-white text-2xl font-bold">{{ media.text }}</p>
                    <RouterLink to="/news" class=" absolute bottom-5 right-1 mr-7 flex flex-cols bg-white rounded-2xl font-bold w-35">
                        <h1 class="uppercase text-blue text-xl font-bold pt-0.75 pl-1.25 ">read more</h1>
                        <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="#EA791D"/></svg>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>