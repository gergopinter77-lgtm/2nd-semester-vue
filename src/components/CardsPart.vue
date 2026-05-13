<template>
    <div class="grid grid-cols-12 gap-2.5">
        <div v-for="card in cards" :key="card" class="col-span-3 bg-blue rounded-2xl px-9 py-8.75 flex flex-col justify-between">
            <h3 class="text-white text-base font-[raleway] font-semibold mb-8.5 w-49.5">{{ card.text }}</h3>
            <div class="flex flex-row items-center">
                <h4 class="text-orange text-6xl font-semibold">{{ card.number }}</h4>
                <div class="felx flex-col ml-2.5 place-items-center">
                    <p class="text-white text-sm mb-3 font-[raleway]">{{ card.text2 }}</p>
                    <RouterLink class="text-white bg-orange py-3 px-3.25 text-xs rounded-lg font-[raleway] uppercase">{{ card.button }}</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
 import { useCards } from './modules/useCards';
 const { cards } = useCards()
</script>

<style lang="" scoped>

</style>