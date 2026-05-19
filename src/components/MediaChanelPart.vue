<template>
  <div class="mx-20">
    <div class="flex flex-col gap-4">
      <div>
          <div>
              <h3 class="text-blue font-[raleway] font-bold text-4xl">
                  Media Channel
              </h3>
          </div>
          <div>
              <h1>filter</h1>
          </div>
      </div>

      <div class="grid grid-cols-4 gap-2.5 mt-10 mb-5">
        <div v-for="media in medias" :key="media.id" class="col-span-1">
          <img :src="media.pictures" alt="" class="h-68.25 w-full object-cover rounded-xl">
        </div>
      </div>
          <RouterLink class="self-center capitalize font-[raleway] font-semibold text-2xl bg-orange text-white px-10 py-2 rounded-lg">check out more</RouterLink>
    </div>
  </div>
</template>

<script setup>
  import { useMedias } from './modules/useMedias';
  const { medias } = useMedias();
</script>