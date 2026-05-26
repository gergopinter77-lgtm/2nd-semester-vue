import { ref } from 'vue'

export function useEventCategories() {
    const categories = ref([
        { label: 'Technology', value: 'technology' },
        { label: 'Business', value: 'business' },
        { label: 'Networking', value: 'networking' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Leadership', value: 'leadership' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Trade Fair', value: 'trade-fair' },
        { label: 'Startup', value: 'startup' },
    ])

    return { categories }
}
