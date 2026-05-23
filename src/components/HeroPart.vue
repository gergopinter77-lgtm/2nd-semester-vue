<template>
    <div class="grid grid-cols-12 gap-2.5 sm:pt-20 pt-5">
        <h1 
            class="col-start-1 lg:col-end-9 col-end-11 text-xl sm:text-2xl md:text-4xl lg:text-6xl text-blue font-semibold font-[raleway]"
            :class="{ 'is-visible': isVisible }"
        >
            <span class="text-orange">W</span>orking Cross Border Was Never This Easy Before
        </h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    requestAnimationFrame(() => {
        isVisible.value = true
    })
})
</script>

<style scoped>
h1 {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>