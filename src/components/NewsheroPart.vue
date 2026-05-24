<template>
    <div class="grid grid-cols-12 gap-2.5 pt-20">
        <div class="col-start-1 col-end-10">
            <h1 class="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-blue font-semibold font-[raleway]"
                :class="{ 'is-visible': isVisible }">
                <span class="text-orange">S</span>tay Updated on everything that’s happening in the world of business</h1>
        </div>
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