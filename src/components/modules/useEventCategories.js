import { ref } from 'vue'

export function useEventCategories() {
    const categories = ref([
        { label: 'Technology', value: 'technology' },
        { label: 'Business', value: 'business' },
        { label: 'Networking', value: 'networking' },
        { label: 'Marketing', value: 'marketing' },
    ])

    return { categories }
}
