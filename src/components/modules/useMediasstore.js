import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useMedias } from '../modules/useMediasPage'

export const useMediasstore = defineStore('media', () => {
    const { medias } = useMedias()
    const activeCategories = ref([])
    const searchQuery = ref('')

    const filteredmedias = computed(() => {
        return medias.value.filter(card => {
            const matchesCategory =
                activeCategories.value.length === 0 ||
                activeCategories.value.includes(card.category)

            const matchesSearch =
                !searchQuery.value ||
                card.title.toLowerCase().includes(searchQuery.value.toLowerCase())

            return matchesCategory && matchesSearch
        })
    })

    return { activeCategories, searchQuery, filteredmedias }
})