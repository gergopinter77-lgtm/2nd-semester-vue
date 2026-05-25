<template>
    <div class="news-header py-4 font-[raleway]">
        <div class="flex items-center">
            <h1 class="text-blue lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold uppercase">
                News
            </h1>
            <div class="flex flex-row justify-end w-screen gap-2">
            <div class="flex items-center gap-4">
                <div class="relative" ref="filterRef">
                    <button @click="toggleFilter" class="flex items-center lg:text-2xl md:text-xl sm:text-lg text-base max-md:hidden gap-2 text-blue font-medium uppercase tracking-widest" :class="{ 'opacity-70': filterOpen }">
                        <span>Filter</span>
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-[0.1em]">
                                <line x1="4" y1="6" x2="20" y2="6"/>
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <line x1="4" y1="18" x2="20" y2="18"/>
                                <circle cx="9" cy="6" r="2" fill="currentColor" stroke="none"/>
                                <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none"/>
                                <circle cx="9" cy="18" r="2" fill="currentColor" stroke="none"/>
                            </svg>
                    </button>

                    <Transition
                        enter-active-class="transition-all duration-200 ease-out"
                        enter-from-class="opacity-0 translate-y-[-6px]"
                        enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition-all duration-150 ease-in"
                        leave-from-class="opacity-100 translate-y-0"
                        leave-to-class="opacity-0 translate-y-[-6px]"
                    >
                    <div v-if="filterOpen" class="absolute right-0 mt-2 w-52 bg-white border border-white shadow-lg z-50 py-2 rounded-2xl">
                        <div class="px-4 py-2 text-sm font-bold uppercase text-blue border-b border-white/10 mb-1">
                            Category
                        </div>
                        <button v-for="cat in categories" :key="cat.value" @click="toggleCategory(cat.value)" class="w-full flex items-center justify-between px-4 py-2 text-xs text-blue hover:bg-[#0f2c4a]/6 transition-colors duration-100" :class="{ 'font-bold': store.activeCategories.includes(cat.value) }">
                            <span class="uppercase tracking-widest text-[11px]">{{ cat.label }}</span>
                            <span
                            v-if="store.activeCategories.includes(cat.value)"
                            class="w-2 h-2 rounded-full bg-white"
                            />
                        </button>
                        <button @click="clearFilters" class="text-sm pl-16 uppercase text-blue/50 hover:text-blue transition-colors duration-50">
                            Clear all
                        </button>
                    </div>
                    </Transition>
                </div>
            </div>

                <div class="relative flex items-center">
                    <input
                        v-model="store.searchQuery"
                        type="text"
                        class="lg:w-67.75 lg:h-7.5 md:h-6 md:w-60 h-6 w-50 bg-white border border-black focus:outline-none focus:border-black-70 rounded"
                    >
                    <button
                        class="absolute right-2.5 text-orange hover:text-orange/70 transition-colors duration-150"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
            <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-10"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 max-h-10"
            leave-to-class="opacity-0 max-h-0"
            >
            <div v-if="store.activeCategories.length > 0 || store.searchQuery" class="flex items-center gap-2 mt-3 overflow-hidden">
                <span class="text-[10px] tracking-widest uppercase text-[#0f2c4a]/40">Showing:</span>
                <span
                v-for="cat in store.activeCategories"
                :key="cat"
                class="flex items-center gap-1.5 px-2.5 py-0.5 border border-[#0f2c4a]/30 text-[10px] tracking-widest uppercase text-[#0f2c4a]"
                >
                {{ cat }}
                <button @click="toggleCategory(cat)" class="text-orange/60 hover:text-[#c8922a] leading-none">×</button>
                </span>
                <span
                v-if="store.searchQuery"
                class="flex items-center gap-1.5 px-2.5 py-0.5 border border-orange/40 text-[10px] tracking-widest uppercase text-[#c8922a]"
                >
                "{{ store.searchQuery }}"
                <button @click="clearSearch" class="text-orange/60 hover:text-[#c8922a] leading-none">×</button>
                </span>
            </div>
            </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCategories } from './modules/useCategories'
import { useNewsStore } from './modules/useNewsStore'

const { categories } = useCategories()
const store = useNewsStore()

const filterOpen = ref(false)
const filterRef = ref(null)

function clearSearch() {
    store.searchQuery = ''
}

function toggleFilter() {
    filterOpen.value = !filterOpen.value
}

function toggleCategory(value) {
    if (value === 'all') {
        store.activeCategories.splice(0)
    } else {
        const idx = store.activeCategories.indexOf(value)
        if (idx === -1) store.activeCategories.push(value)
        else store.activeCategories.splice(idx, 1)
    }
}

function clearFilters() {
    store.activeCategories.splice(0)
}

function handleClickOutside(e) {
    if (filterRef.value && !filterRef.value.contains(e.target)) {
        filterOpen.value = false
    }
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside))
</script>