import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useEventCard } from '../modules/useEventCard'

export const useEventStore = defineStore('events', () => {
    const { eventCards } = useEventCard()
    const activeCategories = ref([])
    const searchQuery = ref('')

    const searchMatchesCard = (card, query) => {
        const searchLower = query.toLowerCase()
        const allFields = [
            card.title_en, card.title_da, card.title_de,
            card.location_en, card.location_da, card.location_de
        ]
        return allFields.some(field => field.toLowerCase().includes(searchLower))
    }

    const filteredCards = computed(() => {
        return eventCards.value.filter(card => {
            const matchesCategory =
                activeCategories.value.length === 0 ||
                activeCategories.value.includes(card.category.toLocaleLowerCase())

            const matchesSearch = !searchQuery.value || searchMatchesCard(card, searchQuery.value)

            return matchesCategory && matchesSearch
        })
    })

    return { activeCategories, searchQuery, filteredCards }
})
