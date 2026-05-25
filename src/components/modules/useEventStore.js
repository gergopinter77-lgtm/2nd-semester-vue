import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useEventCard } from '../modules/useEventCard'

export const useEventStore = defineStore('events', () => {
    const { eventCards } = useEventCard()
    const activeCategories = ref([])
    const searchQuery = ref('')

    const filteredCards = computed(() => {
        return eventCards.value.filter(card => {
            const matchesCategory =
                activeCategories.value.length === 0 ||
                activeCategories.value.includes(card.category.toLocaleLowerCase())

            const matchesSearch =
                !searchQuery.value ||
                card.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                card.location.toLowerCase().includes(searchQuery.value.toLowerCase())

            return matchesCategory && matchesSearch
        })
    })

    return { activeCategories, searchQuery, filteredCards }
})
