import { ref } from 'vue'

export const useCategories = () => {
    const categories = ref([
        { value: 'all',        lable: 'All',        lable_da: 'Alle',       lable_de: 'Alle' },
        { value: 'technology', lable: 'Technology', lable_da: 'Teknologi',  lable_de: 'Technologie' },
        { value: 'business',   lable: 'Business',   lable_da: 'Erhverv',    lable_de: 'Wirtschaft' },
        { value: 'politics',   lable: 'Politics',   lable_da: 'Politik',    lable_de: 'Politik' },
        { value: 'science',    lable: 'Science',    lable_da: 'Videnskab',  lable_de: 'Wissenschaft' },
        { value: 'health',     lable: 'Health',     lable_da: 'Sundhed',    lable_de: 'Gesundheit' },
        { value: 'sports',     lable: 'Sports',     lable_da: 'Sport',      lable_de: 'Sport' },
        { value: 'culture',    lable: 'Culture',    lable_da: 'Kultur',     lable_de: 'Kultur' },
    ]);
    return { 
        categories  
    }
}