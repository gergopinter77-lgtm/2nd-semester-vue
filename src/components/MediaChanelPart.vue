<template>
  <div class="flex flex-col gap-4">
    <div class="grid sm:grid-cols-3 grid-cols-2 gap-2.5 mb-5 row-auto">
      <div v-for="media in store.filteredmedias" :key="media.id" class="col-span-1 items-center justify-center">
        <div class="flex flex-col lg:h-105 h-65 w-full  relative">
          <img :src="media.pictures" alt="" class="h-full w-full object-cover rounded-xl static">
          <div class="absolute inset-0 bg-blue/50 rounded-xl">
          </div>
          <div class="absolute bottom-5 lg:pl-7 pl-5">
            <h4 class="lg:text-lg text-sm font-[raleway] font-medium mt-2 top-0 left-0 static text-white text-shadow-lg/50 capitalize">{{ media.title }}</h4>
            <div class="flex items-center gap-1">
              <RouterLink to="/media" class="top-0 left-0 static flex items-center gap-1 ">
                <p class="text-shadow-lg/50 text-white lg:text-sm text-xs font-[raleway] font-medium mt-2 pb-2">Lorem, ipsum dolor.</p>
                <div class="relative justify-center lg:w-[33px] lg:h-[33px] w-[22px] h-[22px]">
                  <svg class="absolute  lg:visible invisible pr-1.5" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4167 31.8333C24.9313 31.8333 31.8333 24.9313 31.8333 16.4167C31.8333 7.90204 24.9313 1 16.4167 1C7.90204 1 1 7.90204 1 16.4167C1 24.9313 7.90204 31.8333 16.4167 31.8333Z" stroke="white" stroke-width="2" stroke-linejoin="round"/><path d="M14.104 23.3542L21.0415 16.4167L14.104 9.47919" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <svg class="absolute  lg:invisible visible pr-1.5 " width="22" height="22" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4167 31.8333C24.9313 31.8333 31.8333 24.9313 31.8333 16.4167C31.8333 7.90204 24.9313 1 16.4167 1C7.90204 1 1 7.90204 1 16.4167C1 24.9313 7.90204 31.8333 16.4167 31.8333Z" stroke="white" stroke-width="2" stroke-linejoin="round"/><path d="M14.104 23.3542L21.0415 16.4167L14.104 9.47919" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="self-center">
      <RouterLink class="capitalize font-[raleway] font-semibold text-2xl bg-orange text-white px-10 py-2.5 rounded-lg whitespace-nowrap">check out more</RouterLink>
    </div>
  </div>
</template>

<script setup>
  import { useMediasstore } from './modules/useMediasstore'
  const store = useMediasstore()
</script>
