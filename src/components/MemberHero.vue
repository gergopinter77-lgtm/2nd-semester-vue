<template>
    <div class="pt-10">
        <RouterLink to="/network" class="text-blue font-[raleway]">‹ Network</RouterLink>

        <h1 class="text-6xl text-blue font-semibold font-[raleway] mt-4">
            <span class="text-orange">{{ member.name.charAt(0) }}</span>{{ member.name.slice(1) }}
        </h1>
    </div>

    <div class="grid grid-cols-2 mt-10">
        <div class="bg-blue p-20 flex items-center">
            <p class="text-white font-[raleway] text-lg">{{ member.descriptionLong }}</p>
        </div>
        <div class="h-96">
            <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
        </div>
    </div>
</template>

<script setup>
  defineProps({
    member: {
      type: Object,
      required: true
    }
  })
</script>

<style lang="scss" scoped>

</style>