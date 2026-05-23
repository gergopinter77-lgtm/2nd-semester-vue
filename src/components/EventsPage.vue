<template>
  <main>
    <div class="container">
      <div class="hero-section">
        <h1 class="hero-title"><span>J</span>oin our events & put your <br>name out there!</h1>
      </div>

      <div class="events-header">
        <div class="header-left">
          <h2>Events</h2>
          <div class="header-right">
            <button @click="toggleFilter" class="filter-button" :class="{ active: filterOpen }">
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

            <div class="search-section">
              <input
                v-model="store.searchQuery"
                type="text"
                placeholder="Search events..."
                class="search-input"
              >
              <button @click="updateSearch" class="search-button">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div v-if="store.activeCategories.length > 0 || store.searchQuery" class="active-filters">
          <span class="label">Showing:</span>
          <span v-for="categ in store.activeCategories" :key="categ" class="filter-tag">
            {{ categ }}
            <button @click="toggleCategory(categ)" class="remove-tag">x</button>
          </span>
          <span v-if="store.searchQuery" class="search-tag">
            {{ store.searchQuery }}
            <button @click="store.searchQuery = ''" class="remove-tag">x</button>
          </span>
        </div>
      </div>

      <div class="events-layout">
        <div v-for="event in store.filteredCards" :key="event.id" class="event-card">
          <img :src="event.image" alt="event.title" class="event-image" />
          <div class="event-overlay"></div>
          <div class="event-content">
            <span class="event-category">{{ event.category }}</span>

            <RouterLink :to="`/events/${event.slug}`" class="event-link">
              <h3 class="event-title">{{ event.title }}
                <span>{{ event.title[0] }}</span>{{ event.title.slice(1) }}
              </h3>
            </RouterLink>

            <p class="event-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {{ formatDate(event.date) }}
            </p>

            <p class="event-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {{ event.location }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="store.filteredCards.length === 0" class="no-events">
        <p>No events found.</p>
      </div>

      <div class="newsletter-section">
        <NewsLetterPart />
      </div>

      <div class="testimonial-section">
        <TestimonialPart />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useEventStore } from './modules/useEventStore'
import { useEventCategories } from './modules/useEventCategories'
import NewsLetterPart from '@/components/NewsLetterPart.vue'
import TestimonialPart from '@/components/TestimonialPart.vue'
import { RouterLink } from 'vue-router'

const store = useEventStore()
const { categories } = useEventCategories()
const filterOpen = ref(false)
const filterRef = ref(null)

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

<style lang="scss" scoped>

</style>
