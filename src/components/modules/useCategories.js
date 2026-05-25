import { ref } from 'vue'

export const useCategories = () => {
    const categories = ref ([
        { label: 'All',        value: 'all' },
        { label: 'Technology', value: 'technology' },
        { label: 'teknologi',  value: 'teknologi' },
        { label: 'Technologie', value: 'technologie' },
        { label: 'Business',   value: 'business' },
        { label: 'Erhverv',   value: 'erhverv' },
        { label: 'Geschäft',   value: 'geschäft' },
        { label: 'Politics',   value: 'politics' },
        { label: 'Politik',    value: 'politik' },
        { label: 'Science',    value: 'science' },
        { label: 'Videnskab',   value: 'videnskab' },
        { label: 'Wissenschaft',    value: 'wissenschaft' },
        { label: 'Health',     value: 'health' },
        { label: 'Sundhed',    value: 'sundhed' },
        { label: 'Gesundheit',     value: 'gesundheit' },
        { label: 'Sports',     value: 'sports' },
        { label: 'Sport',      value: 'sport' },
        { label: 'Sport',      value: 'sport' },
        { label: 'Culture',    value: 'culture' },
        { label: 'Kultur',     value: 'kultur' },     
    ]);
    return { 
        categories  
    }
}