<template>
    <div class="">
        <div class="lg:px-5 px-2 py-7">
            <h1 class=" lg:text-4xl text-3xl flex uppercase text-blue font-bold ">{{t.whatsnew.slice(0) }}</h1>
        </div>
        <div class="flex flex-col pb-10">
            <div class="grid lg:grid-cols-4 grid-cols-1 gap-4 rounded-lg overflow-hidden ">
                <div  v-for="media in News"
                :key="media.id"
                :ref="el => setCardRef(el, index)"
                class="col-span-1 w-full h-120 rounded-lg relative overflow-hidden hidden lg:block ">
                    <img :src="media.img" alt="media image" class="w-full h-full object-cover rounded-lg">
                    <div class="absolute inset-0 bg-blue/50 rounded-xl"></div>
                    <p class="absolute top-5 px-7 text-white text-2xl font-bold">{{ media[`text_${currentLanguage}`] || media.text }}</p>
                    <RouterLink to="/news" class="absolute bottom-5 right-1 lg:mx-7 sm:mx-4 mx-2 flex flex-cols bg-white rounded-2xl font-bold md:w-40 md:hover:w-44 w-34 hover:w-38 px-2 justify-center transition-all duration-300 overflow-hidden">
                        <h1 class="uppercase text-blue md:text-xl text-base font-bold md:pt-0.75 pt-1.25  whitespace-nowrap">{{ t.readmore.slice(0) }}</h1>
                        <div class="relative justify-center 4.5 md:h-9 w-4.5 h-9">
                          <svg class="absolute  lg:visible invisible " width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="#EA791D" /></svg>
                          <svg class="absolute  lg:invisible visible " width="12" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="#EA791D" /></svg>
                        </div>
                    </RouterLink>
                </div>
            </div>
            <div class="rounded-lg overflow-hidden relative ">
              <div
              class="flex transition-transform duration-300 ease-in-out"
              :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
              >
                <div  v-for="media in News"
                :key="media.id"
                class="overflow-hidden lg:hidden block  w-full span-1 rounded-lg h-96 relative shrink-0"
                >
                    <img :src="media.img" alt="media image" class="w-full h-full object-cover rounded-lg">
                    <div class="absolute inset-0 bg-blue/50 rounded-xl"></div>
                    <p class="absolute top-5 pl-7 text-white text-2xl font-bold">{{ media[`text_${currentLanguage}`] || media.text }}</p>
                    <RouterLink to="/news" class="absolute bottom-5 right-1 lg:mx-7 sm:mx-4 mx-2 flex flex-cols bg-white rounded-2xl font-bold md:w-40 md:hover:w-44 w-34 hover:w-38 px-2 justify-center transition-all duration-300 overflow-hidden">
                        <h1 class="uppercase text-blue md:text-xl text-base font-bold md:pt-0.75 pt-1.25  whitespace-nowrap">{{ t.readmore.slice(0) }}</h1>
                        <div class="relative justify-center 4.5 md:h-9 w-4.5 h-9">
                          <svg class="absolute  lg:visible invisible " width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="#EA791D" /></svg>
                          <svg class="absolute  lg:invisible visible " width="12" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="#EA791D" /></svg>
                        </div>
                    </RouterLink>
                </div>
              </div>
              <button
                @click="prev"
                class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-orange rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-sm transition"
                aria-label="Previous"
              >‹</button>
              <button
                @click="next"
                class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-orange  rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-sm transition"
                aria-label="Next"
              >›</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed} from 'vue';
import { useMediaNews, } from './modules/useMediaNews';
import { translations } from './modules/translations'
import { useLanguage } from './modules/useLanguage'

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])

const { News } = useMediaNews();

const activeIndex = ref(0);
const cardRefs = ref([]);
let observer = null;

function setCardRef(el, index) {
  if (el) cardRefs.value[index] = el;
}

function prev() {
  activeIndex.value = activeIndex.value === 0 ? News.value.length - 1 : activeIndex.value - 1;
}

function next() {
  activeIndex.value = activeIndex.value === News.value.length - 1 ? 0 : activeIndex.value + 1;
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

<style>

</style>
