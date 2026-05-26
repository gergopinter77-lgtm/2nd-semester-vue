<template>
    <div class="mt-20">
        <h2 class="text-4xl font-bold text-blue font-[raleway]">{{ t.ContactUs }}</h2>
        <hr class="border-blue mt-4 mb-8">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6">
            <div class="flex items-center gap-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ea791e" d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q2.075 0 3.888.788t3.174 2.15t2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22m0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95m-2.6-.4q-.45-.825-.787-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55m5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55M4.25 14h3.4q-.075-.5-.112-.987T7.5 12t.038-1.012T7.65 10h-3.4q-.125.5-.187.988T4 12t.063 1.013t.187.987m5.4 0h4.7q.075-.5.113-.987T14.5 12t-.038-1.012T14.35 10h-4.7q-.075.5-.112.988T9.5 12t.038 1.013t.112.987m6.7 0h3.4q.125-.5.188-.987T20 12t-.062-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12t-.038 1.013t-.112.987m-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8M10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8m-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.913 5.825T5.1 8"/></svg>
                <a :href="`https://`" target="_blank" class="text-blue font-[raleway] hover:scale-[1.02] hover:text-orange">businesregion.dk</a>
            </div>
            <div class="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ea791e" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363t.225.587v4.05q0 .45-.3.75t-.75.3"/></svg>
                <p class="text-blue font-[raleway]">+45 71311909</p>
            </div>
            <div class="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ea791e" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>
                <p class="text-blue font-[raleway]">Gronnegade 21 6700</p>
            </div>
            <div class="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ea791e" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
                <a  class="text-blue font-[raleway] hover:scale-[1.02] hover:text-orange">businessregion@gmail.dk</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from './modules/useLanguage'
import { translations } from './modules/translations'

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])
</script>

<style lang="scss" scoped>

</style>