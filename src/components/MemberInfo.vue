<template>
    <div class="mt-20">
        <h2 class="text-4xl font-bold text-blue font-[raleway]">Information</h2>
        <hr class="border-blue mt-4 mb-8">

        <div class="grid grid-cols-2 gap-y-6">
            <div class="flex items-center gap-4">
                <span class="text-orange text-2xl">🌐</span>
                <a :href="`https://${member.website}`" target="_blank" class="text-blue font-[raleway] hover:scale-[1.02] hover:text-orange">{{ member.website }}</a>
            </div>
            <div class="flex items-center gap-4">
                <span class="text-orange text-2xl">📞</span>
                <p class="text-blue font-[raleway]">{{ member.phone }}</p>
            </div>
            <div class="flex items-center gap-4">
                <span class="text-orange text-2xl">📍</span>
                <p class="text-blue font-[raleway]">{{ member.address }}</p>
            </div>
            <div class="flex items-center gap-4">
                <span class="text-orange text-2xl">✉️</span>
                <a :href="`mailto:${member.email}`" class="text-blue font-[raleway] hover:scale-[1.02] hover:text-orange">{{ member.email }}</a>
            </div>
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