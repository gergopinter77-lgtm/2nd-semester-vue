<template>
    <div class="pt-10">
        <RouterLink to="/news" class="text-blue font-[raleway] hover:text-orange">‹ News</RouterLink>

        <h1 class="text-6xl text-blue font-semibold font-[raleway] mt-4">
            <span class="text-orange">{{ news.title.charAt(0) }}</span>{{ news.title.slice(1) }}
        </h1>
    </div>

    <div class="grid grid-cols-3 mt-10">
        <div class="bg-blue p-10 flex items-center col-span-2">
            <p class="text-white font-[raleway] text-lg">{{ news.description }}</p>
        </div>
        <div class="h-96 col-span-1">
            <img :src="news.image" :alt="news.title" class="w-full h-full object-cover">
        </div>
    </div>
</template>

<script setup>
  defineProps({
    news: {
      type: Object,
      required: true
    }
  })
</script>

<style lang="scss" scoped>

</style>