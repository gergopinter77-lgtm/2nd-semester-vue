import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useNewsCard } from '../modules/useNewsCard'

export const useNewsStore = defineStore('news', () => {
    const { newsCards } = useNewsCard()
    const activeCategories = ref([])
    const searchQuery = ref('')

    const filteredCards = computed(() => {
        return newsCards.value.filter(card => {
            const matchesCategory =
                activeCategories.value.length === 0 ||
                activeCategories.value.includes(card.category)

            const matchesSearch =
                !searchQuery.value ||
                card.title.toLowerCase().includes(searchQuery.value.toLowerCase())

            return matchesCategory && matchesSearch
        })
    })

    return { activeCategories, searchQuery, filteredCards }
})