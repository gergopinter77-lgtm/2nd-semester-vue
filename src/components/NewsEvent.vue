<template>
  <div class="grid grid-cols-12 gap-2.5">

    <div
      v-for="(news, index) in newses"
      :key="news"
      :ref="el => setCardRef(el, index)"
      class="news-card hidden md:block max-md:col-span-6 col-span-3 rounded-lg h-125 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
    >
      <img :src="news.image" alt="" class="w-full h-full object-cover rounded-lg text-white group-hover:scale-105 transition-transform duration-500"/>
      <div class="absolute inset-0 bg-blue/60 rounded-lg"></div>
      <RouterLink
        to="/news"
        class="absolute bottom-6 left-7 right-4 text-[32px]/9 font-[raleway] font-semibold text-white text-shadow-lg group-hover:text-orange transition-colors duration-200"
      >
        <span class="text-orange">{{ (news[`title_${currentLanguage}`] || news.title).charAt(0) }}</span>{{ (news[`title_${currentLanguage}`] || news.title).slice(1) }}
      </RouterLink>
    </div>

    <div class="col-span-12 md:hidden">
      <div class="relative overflow-hidden">
        <div
          class="flex transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <div
            v-for="(news, index) in newses"
            :key="index"
            class="min-w-full rounded-lg h-96 relative shrink-0"
          >
            <img :src="news.image" alt="" class="w-full h-full object-cover rounded-lg" />
            <div class="absolute inset-0 bg-blue/60 rounded-lg"></div>
            <RouterLink
              to="/news"
              class="absolute bottom-6 left-6 right-6 text-2xl font-[raleway] font-semibold text-white hover:text-orange duration-75"
            >
              <span class="text-orange">{{ (news[`title_${currentLanguage}`] || news.title).charAt(0) }}</span>{{ (news[`title_${currentLanguage}`] || news.title).slice(1) }}
            </RouterLink>
          </div>
        </div>

        <button
          @click="prev"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-sm transition"
          aria-label="Previous"
        >‹</button>
        <button
          @click="next"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-sm transition"
          aria-label="Next"
        >›</button>

        <div class="flex justify-center gap-2 mt-3">
          <button
            v-for="(_, index) in newses"
            :key="index"
            @click="activeIndex = index"
            :class="[
              'w-2 h-2 rounded-full transition-colors duration-200',
              activeIndex === index ? 'bg-orange' : 'bg-blue/30'
            ]"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, } from 'vue';
import { useLanguage } from './modules/useLanguage';

const { currentLanguage } = useLanguage()
import { useNewev } from './modules/useNewev';

const { newses } = useNewev();

const activeIndex = ref(0);
const cardRefs = ref([]);
let observer = null;

function setCardRef(el, index) {
  if (el) cardRefs.value[index] = el;
}

function prev() {
  activeIndex.value = activeIndex.value === 0 ? newses.value.length - 1 : activeIndex.value - 1;
}

function next() {
  activeIndex.value = activeIndex.value === newses.value.length - 1 ? 0 : activeIndex.value + 1;
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cardRefs.value.forEach((card) => {
    if (card) observer.observe(card);
  });
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.news-card {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.news-card:nth-child(2) { transition-delay: 0s; }
.news-card:nth-child(3) { transition-delay: 0.12s; }
.news-card:nth-child(4) { transition-delay: 0.24s; }
.news-card:nth-child(5) { transition-delay: 0.36s; }

.news-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
