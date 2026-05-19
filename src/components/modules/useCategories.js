import { ref } from 'vue'

export const useCategories = () => {
    const categories = ref ([
        { label: 'All',        value: 'all' },
        { label: 'Technology', value: 'tech' },
        { label: 'Business',   value: 'business' },
        { label: 'Politics',   value: 'politics' },
        { label: 'Science',    value: 'science' },
        { label: 'Health',     value: 'health' },
        { label: 'Sports',     value: 'sports' },
        { label: 'Culture',    value: 'culture' }, 
    ]);
    return { 
        categories  
    }
}