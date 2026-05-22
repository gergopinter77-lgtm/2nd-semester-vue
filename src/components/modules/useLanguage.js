import { ref } from 'vue'

const currentLanguage = ref('en')

export const useLanguage = () => {
    const setLanguage = (lang) => {
        currentLanguage.value = lang
    }

    return {
        currentLanguage,
        setLanguage
    }
}