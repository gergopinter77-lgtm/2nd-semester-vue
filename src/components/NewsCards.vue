<template>
  <div class="grid grid-cols-12 gap-x-2.5 gap-y-2.5">

    <div
      v-for="(news, index) in store.filteredCards"
      :key="news.id"
      :ref="el => setDesktopRef(el, index)"
      class="news-card hidden md:block col-span-3 rounded-2xl overflow-hidden relative h-125"
    >
      <img :src="news.image" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-blue/60 rounded-lg"></div>
      <div class="absolute bottom-0 left-0 right-0 px-4.5 pb-5.5">
        <span class="inline-block text-sm shadow-2xl font-medium tracking-widest uppercase text-white
                     border border-white/40 rounded px-1.75 py-0.5 mb-2.5">
          {{ news.category }}
        </span>
        <RouterLink :to="`/news/${news.slug}`">
          <h3 class="text-white text-2xl font-semibold leading-snug font-[raleway] m-0 hover:text-orange transition-colors duration-75">
            <span class="text-orange shadow-2xl">{{ news.title[0] }}</span>{{ news.title.slice(1) }}
          </h3>
        </RouterLink>
      </div>
    </div>

    <div class="col-span-12 md:hidden flex flex-col gap-2.5">
      <TransitionGroup name="card" tag="div" class="flex flex-col gap-2.5">
        <div
          v-for="news in visibleMobileCards"
          :key="news.id"
          :ref="el => setMobileRef(el, news.id)"
          class="mobile-card rounded-2xl overflow-hidden relative h-72"
        >
          <img :src="news.image" alt="" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-blue/60 rounded-lg"></div>
          <div class="absolute bottom-0 left-0 right-0 px-4.5 pb-5.5">
            <span class="inline-block text-sm shadow-2xl font-medium tracking-widest uppercase text-white
                         border border-white/40 rounded px-1.75 py-0.5 mb-2.5">
              {{ news.category }}
            </span>
            <RouterLink :to="`/news/${news.slug}`">
              <h3 class="text-white text-2xl font-semibold leading-snug font-[raleway] m-0 hover:text-orange transition-colors duration-75">
                <span class="text-orange shadow-2xl">{{ news.title[0] }}</span>{{ news.title.slice(1) }}
              </h3>
            </RouterLink>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { useNewsStore } from './modules/useNewsStore';

const store = useNewsStore();

const INITIAL = 3;
const BATCH = 3;
const visibleCount = ref(INITIAL);

const visibleMobileCards = computed(() =>
  store.filteredCards.slice(0, visibleCount.value)
);
const hasMore = computed(() =>
  visibleCount.value < store.filteredCards.length
);
function loadMore() {
  visibleCount.value = Math.min(visibleCount.value + BATCH, store.filteredCards.length);
}

const desktopRefs = ref([]);
const mobileRefs = ref({});
let observer = null;

function setDesktopRef(el, index) {
  if (el) desktopRefs.value[index] = el;
}
function setMobileRef(el, id) {
  if (el) mobileRefs.value[id] = el;
}

function observeEl(el) {
  if (el && observer) observer.observe(el);
}

function createObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
}

onMounted(() => {
  createObserver();
  desktopRefs.value.forEach(observeEl);
  Object.values(mobileRefs.value).forEach(observeEl);
});

watch(visibleMobileCards, async () => {
  await nextTick();
  Object.values(mobileRefs.value).forEach((el) => {
    if (el && !el.classList.contains('is-visible')) observeEl(el);
  });
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});

import { nextTick } from 'vue';
</script>

<style scoped>
.news-card {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.news-card:nth-child(1) { transition-delay: 0s; }
.news-card:nth-child(2) { transition-delay: 0.10s; }
.news-card:nth-child(3) { transition-delay: 0.20s; }
.news-card:nth-child(4) { transition-delay: 0.30s; }
.news-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}


.mobile-card {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.mobile-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.card-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.card-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.card-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>