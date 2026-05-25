<template>
    <div class="grid grid-cols-4 max-[1146px]:grid-cols-2 gap-2.5" ref="gridRef">
        <div
            v-for="(card, index) in cards"
            :key="card"
            class="col-span-1 bg-blue rounded-2xl max-[640px]:px-5 max-[640px]:py-4.75 px-9 py-8.75 flex flex-col justify-between card-item group hover:shadow-2xl transition-shadow duration-300 group-hover:scale-105 transition-transform duration-500"
            :class="{ 'is-visible': visibleCards[index] }"
            :style="{ transitionDelay: `${index * 0.15}s` }"
        >
            <h3 class="text-white text-base max-md:text-sm max-[640px]:text-xs font-[raleway] font-semibold mb-8.5 w-49.5">{{ card.text }}</h3>
            <div class="flex flex-row items-center">
                <h4 class="text-orange text-6xl max-md:text-5xl max-[640px]:text-4xl font-semibold group-hover:text-white transition-colors duration-200">{{ card.number }}</h4>
                <div class="felx flex-col ml-2.5 place-items-center">
                    <p class="text-white max-md:text-xs text-sm max-md:mb-1.5 mb-3 font-[raleway]">{{ card.text2 }}</p>
                    <RouterLink :to="card.route" class="whitespace-nowrap text-white bg-orange py-3 px-3.25 max-sm:px-1 text-xs rounded-lg font-[raleway] uppercase">{{ card.button }}</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCards } from './modules/useCards'

const { cards } = useCards()

const gridRef = ref(null)
const visibleCards = ref([])

let observer = null

onMounted(() => {
    visibleCards.value = Array.from({ length: cards.value?.length ?? 0 }, () => false)

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    const cardEls = gridRef.value?.querySelectorAll('.card-item')
                    cardEls?.forEach((el, i) => {
                        setTimeout(() => {
                            visibleCards.value[i] = true
                        }, i * 150)
                    })

                    observer.disconnect()
                }
            })
        },
        { threshold: 0.20 }
    )

    if (gridRef.value) {
        observer.observe(gridRef.value)
    }
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<style scoped>
.card-item {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.card-item.is-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
