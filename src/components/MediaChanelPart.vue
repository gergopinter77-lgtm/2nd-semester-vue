<template>
  <div class="mx-20">
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between">
          <div>
              <h3 class="text-blue font-[raleway] font-bold text-4xl">
                  Media Channel
              </h3>
          </div>
          <div class="flex items-center justify-between">
              <button class="text-2xl font-medium uppercase">filter</button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2z" /></svg>
            </div>
      </div>

      <div class="grid grid-cols-3 gap-2.5 mt-10 mb-5 row-auto">
        <div v-for="media in medias" :key="media.id" class="col-span-1 items-center justify-center ">
          <div class="flex flex-col h-105 w-full relative">
            <img :src="media.pictures" alt="" class="h-full w-full object-cover rounded-xl static">
            <div class="absolute bottom-5 pl-7">
              <h4 class=" text-lg font-[raleway] font-medium mt-2  top-0 left-0 static text-white">{{ media.title }}</h4>  
              <div class="flex items-center gap-1">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4167 31.8333C24.9313 31.8333 31.8333 24.9313 31.8333 16.4167C31.8333 7.90204 24.9313 1 16.4167 1C7.90204 1 1 7.90204 1 16.4167C1 24.9313 7.90204 31.8333 16.4167 31.8333Z" stroke="white" stroke-width="2" stroke-linejoin="round"/><path d="M14.104 23.3542L21.0415 16.4167L14.104 9.47919" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <RouterLink to="/media" class="text-white text-sm font-[raleway] font-medium mt-2  top-0 left-0 static">Lorem, ipsum dolor.</RouterLink>
              </div>
            </div>
          </div>  
        </div>
      </div>
      
      <div class="self-center">
        <RouterLink class="capitalize font-[raleway] font-semibold text-2xl bg-orange text-white px-10 py-2 rounded-lg">check out more</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useMedias, } from './modules/useMediasPage';
  const { medias } = useMedias();
</script>