<template>
    <div class="grid grid-cols-12 gap-2.5">
        <div class="flex items-center justify-center cols-start-1 col-span-12 min-h-screen font-[raleway]">
            <div class="w-full grid grid-cols-[1fr_1px_1.7fr]">

            <div class="pr-10">
                <div
                v-for="(item, i) in items"
                :key="i"
                class="py-3 cursor-pointer text-lg transition-colors duration-200"
                :class="[activeIndex === i ? 'text-orange font-base' : 'text-gray-900 hover:text-[#f2845a]']"
                @click="activeIndex = i"
                >
                {{ item.label }}
                </div>
            </div>

            <div class="bg-black/10" />

            <div class="pl-10 min-h-48">
                <Transition name="fade" mode="out-in">
                <div :key="activeIndex">
                    <p class="font-[raleway] text-2xl font-bold mb-4">{{ active.title }}</p>
                    <p class="text-md leading-7 text-gray-500 font-light">{{ active.body }}</p>
                </div>
                </Transition>
            </div>

            </div>
        </div>
  </div>
</template>

<script setup>
import { useAbout } from './modules/useAbout.js'

const { items, activeIndex, active } = useAbout()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>