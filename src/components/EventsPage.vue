<template>
  <div class="grid grid-cols-12 gap-2.5 pt-8 sm:pt-12 md:pt-20">
    <div class="col-span-12 sm:col-span-10">
      <h1 class="text-2xl sm:text-4xl md:text-6xl text-blue font-semibold font-[raleway]">
        <span class="text-orange">{{ t.EventsTitle.charAt(0) }}</span>{{ t.EventsTitle.slice(1) }}
      </h1>
    </div>
  </div>

  <div class="mt-8 sm:mt-16 lg:mt-66">
      <div class="news-header py-4 font-[raleway]">
        <div class="flex flex-col md:flex-row md:items-baseline gap-4">
          <div class="flex items-center gap-2 md:gap-0 md:flex-none justify-between">
            <h1 class="text-blue text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
              {{ t.EventsHeading }}
            </h1>
            <div class="relative flex items-center md:hidden ml-auto">
              <input v-model="store.searchQuery" type="text" class="w-32 sm:w-40 h-7.5 bg-white border border-black focus:outline-none focus:border-black-70 rounded text-sm">
              <button @click="updateSearch" class="absolute right-2.5 text-orange hover:text-orange/70 transition-colors duration-150">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="hidden md:flex flex-row gap-2 md:justify-end md:w-full lg:gap-2">
            <div class="flex items-center gap-4">
              <div class="relative" ref="filterRef">
                <button @click="toggleFilter" class="flex items-center text-lg lg:text-2xl gap-2 text-blue font-medium uppercase tracking-widest" :class="{ 'opacity-70': filterOpen }">
                  <span>{{ t.EventsFilter }}</span>
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
                      {{ t.EventsCategory }}
                    </div>
                    <button v-for="cat in categories" :key="cat.value" @click="toggleCategory(cat.value)" class="w-full flex items-center justify-between px-4 py-2 text-xs text-blue hover:bg-[#0f2c4a]/6 transition-colors duration-100" :class="{ 'font-bold': store.activeCategories.includes(cat.value) }">
                      <span class="uppercase tracking-widest text-[11px]">{{ cat.label }}</span>
                      <span
                        v-if="store.activeCategories.includes(cat.value)"
                        class="w-2 h-2 rounded-full bg-white"
                      />
                    </button>
                    <button @click="clearFilters" class="text-sm pl-16 uppercase text-blue/50 hover:text-blue transition-colors duration-50">
                      {{ t.EventsClearAll }}
                    </button>
                  </div>
                </Transition>
              </div>
            </div>

            <div class="relative flex items-center">
              <input v-model="store.searchQuery" type="text" class="w-67.75 h-7.5 bg-white border border-black focus:outline-none focus:border-black-70 rounded" :placeholder="t.EventsSearchPlaceholder">
              <button @click="updateSearch" class="absolute right-2.5 text-orange hover:text-orange/70 transition-colors duration-150">
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
            <span class="text-[10px] tracking-widest uppercase text-[#0f2c4a]/40">{{ t.EventsShowing }}</span>
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
              <button @click="store.searchQuery = ''" class="text-orange/60 hover:text-[#c8922a] leading-none">×</button>
            </span>
          </div>
        </Transition>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2.5">
      <div v-for="event in store.filteredCards" :key="event.id" class="hidden md:block col-span-1 rounded-2xl overflow-hidden relative h-64 sm:h-80 md:h-96 lg:h-125 group hover:shadow-2xl transition-shadow duration-300">
        <img :src="event.image" :alt="event.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute inset-0 bg-blue/60"></div>

        <div class="absolute bottom-0 left-0 right-0 px-3 sm:px-4.5 pb-3 sm:pb-5.5">
          <span class="inline-block text-xs sm:text-sm shadow-2xl font-medium tracking-widest uppercase text-white border border-white/40 rounded px-1.5 sm:px-1.75 py-0.5 mb-2 sm:mb-2.5">
            {{ event[`category_${currentLanguage}`] }}
          </span>
          <div @click="openEventModal(event)" class="cursor-pointer">
            <h3 class="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug font-[raleway] m-0 group-hover:text-orange transition-colors duration-200">
              <span class="text-orange shadow-2xl">{{ event[`title_${currentLanguage}`][0] }}</span>{{ event[`title_${currentLanguage}`].slice(1) }}
            </h3>
          </div>

          <p class="text-white/80 text-xs sm:text-sm mt-1.5 sm:mt-2.5 flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span class="truncate">{{ formatDate(event.date) }}</span>
          </p>

          <p class="text-white/80 text-xs sm:text-sm flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span class="truncate">{{ event[`location_${currentLanguage}`] }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="md:hidden flex flex-col gap-2.5">
      <TransitionGroup name="card" tag="div" class="flex flex-col gap-2.5">
        <div
          v-for="event in visibleMobileCards"
          :key="event.id"
          class="rounded-2xl overflow-hidden relative h-64 group hover:shadow-2xl transition-shadow duration-300"
        >
          <img :src="event.image" :alt="event.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-blue/60"></div>

          <div class="absolute bottom-0 left-0 right-0 px-3 pb-3">
            <span class="inline-block text-xs shadow-2xl font-medium tracking-widest uppercase text-white border border-white/40 rounded px-1.5 py-0.5 mb-2">
              {{ event[`category_${currentLanguage}`] }}
            </span>
            <div @click="openEventModal(event)" class="cursor-pointer">
              <h3 class="text-white text-lg font-semibold leading-snug font-[raleway] m-0 group-hover:text-orange transition-colors duration-200">
                <span class="text-orange shadow-2xl">{{ event[`title_${currentLanguage}`][0] }}</span>{{ event[`title_${currentLanguage}`].slice(1) }}
              </h3>
            </div>

            <p class="text-white/80 text-xs mt-2 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span class="truncate">{{ formatDate(event.date) }}</span>
            </p>

            <p class="text-white/80 text-xs flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span class="truncate">{{ event[`location_${currentLanguage}`] }}</span>
            </p>
          </div>
        </div>
      </TransitionGroup>

      <button
        v-if="hasMore"
        @click="loadMore"
        class="mt-2 w-full py-3 rounded-xl bg-orange text-white font-[raleway] font-semibold text-sm tracking-widest uppercase hover:bg-blue hover:text-white transition-colors duration-200"
      >
        Load more
      </button>
    </div>

    <div v-if="store.filteredCards.length === 0" class="text-center py-12 sm:py-20">
      <p class="text-lg sm:text-2xl text-gray-600 font-[raleway] px-4">{{ t.EventsNoResults }}</p>
    </div>

    <Teleport to="body" v-if="selectedEvent">
      <div @click="closeModal" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div @click.stop class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">

          <div class="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 class="text-2xl font-bold text-blue font-[raleway]">{{ selectedEvent[`title_${currentLanguage}`] }}</h2>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div class="p-6 space-y-4">
            <img :src="selectedEvent.image" :alt="selectedEvent[`title_${currentLanguage}`]" class="w-full h-64 object-cover rounded-lg">
            <div>
              <p class="text-sm text-orange font-semibold tracking-widest uppercase mb-2">{{ selectedEvent[`category_${currentLanguage}`] }}</p>
              <p class="text-gray-700 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {{ formatDate(selectedEvent.date) }}
              </p>
              <p class="text-gray-700 flex items-center gap-2 mt-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ selectedEvent[`location_${currentLanguage}`] }}
              </p>
            </div>
            <p class="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="w-full py-2 bg-orange text-white rounded-lg font-semibold hover:bg-blue transition-colors duration-200">
              Register for event
            </button>
          </div>
        </div>
      </div>
    </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useEventStore } from './modules/useEventStore'
import { useEventCategories } from './modules/useEventCategories'
import { useLanguage } from './modules/useLanguage'
import { translations } from './modules/translations'

const store = useEventStore()
const { categories } = useEventCategories()
const filterOpen = ref(false)
const filterRef = ref(null)
const selectedEvent = ref(null)
const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])

const INITIAL = 3
const BATCH = 3
const visibleCount = ref(INITIAL)

const visibleMobileCards = computed(() =>
  store.filteredCards.slice(0, visibleCount.value)
)
const hasMore = computed(() =>
  visibleCount.value < store.filteredCards.length
)

function loadMore() {
  visibleCount.value = Math.min(visibleCount.value + BATCH, store.filteredCards.length)
}

const toggleFilter = () => {
  filterOpen.value = !filterOpen.value
}

const toggleCategory = (category) => {
  const index = store.activeCategories.indexOf(category)
  if (index > -1) {
    store.activeCategories.splice(index, 1)
  } else {
    store.activeCategories.push(category)
  }
}

const clearFilters = () => {
  store.activeCategories.length = 0
  store.searchQuery = ''
}

const updateSearch = () => {
  if (filterOpen.value) {
    filterOpen.value = false
  }
}

const openEventModal = (event) => {
  selectedEvent.value = event
}

const closeModal = () => {
  selectedEvent.value = null
}

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(date).toLocaleDateString(undefined, options)
}

const handleClickOutside = (e) => {
  if (filterRef.value && !filterRef.value.contains(e.target)) {
    filterOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: all 300ms ease;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.card-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.card-move {
  transition: transform 300ms ease;
}
</style>
