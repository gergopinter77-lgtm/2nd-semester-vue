<template>
  <div class="grid grid-cols-12 gap-x-2.5 gap-y-2.5">
    <div v-for="news in store.filteredCards" :key="news.id" class="col-span-3 rounded-2xl overflow-hidden relative h-125">
        <img :src="news.image" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-blue/60" rounded-lg></div>

      <div class="absolute bottom-0 left-0 right-0 px-4.5 pb-5.5">
        <span class="inline-block text-sm shadow-2xl font-medium tracking-widest uppercase text-white
                     border border-white/40 rounded px-1.75 py-0.5 mb-2.5">
          {{ news.category }}
        </span>
        <RouterLink :to="`/news/${news.slug}`">
          <h3 class="text-white text-2xl font-semibold leading-snug font-[raleway] m-0 hover:text-orange  hover:rotate-3 transition-transform duration-75">
            <span class="text-orange shadow-2xl">{{ news.title[0] }}</span>{{ news.title.slice(1) }}
          </h3>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNewsStore } from './modules/useNewsStore'
const store = useNewsStore()
</script>

<style lang="scss">
</style>