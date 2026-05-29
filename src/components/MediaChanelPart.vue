<template>
  <div class="flex flex-col gap-4">
    <div class="grid sm:grid-cols-3 grid-cols-1 gap-2.5 row-auto" ref="gridRef">
      <div v-for="(media, index) in store.filteredmedias"
          :key="media.id"
          class="col-span-1 items-center justify-center card-item"
          :class="{ 'is-visible': visibleMedias[index] }"
          :style="{ transitionDelay: `${index * 0.15}s` }">
        <div class="flex flex-col lg:h-105 h-65 w-full  relative">
          <img :src="media.pictures" alt="" class="h-full w-full object-cover rounded-xl static">
          <div class="absolute inset-0 bg-blue/50 rounded-xl">
          </div>
          <div class="absolute bottom-5 lg:px-7 px-5">
            <RouterLink :to="`/media/${media.slug}`" class="top-0 left-0 static flex items-center gap-1">
              <div class="flex flex-col text-white font-semibold leading-snug font-[raleway] m-0 hover:text-orange transition-colors duration-200" >
                <h4 class="md:text-2xl sm:text-lg text-base">{{ media[`title_${currentLanguage}`] || media.title }}</h4>
                <div class="flex items-center gap-1 group-hover:border-orange md:text-xl sm:text-base text-sm">
                    <p class="mt-2 pb-2">{{ t.CheckOutMore.slice(0) }}</p>
                    <span class="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 flex items-center justify-center shrink-0 ">
                        <svg  class="" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M9.7 18.3q-.275-.275-.275-.712t.275-.713L13.875 12L9.7 7.825q-.275-.275-.275-.713t.275-.712t.713-.275t.712.275l4.9 4.9q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.9 4.9q-.275.275-.712.275t-.713-.275"/></svg>
                    </span>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="self-center py-10">
      <RouterLink class="capitalize font-[raleway] font-semibold text-2xl bg-orange text-white px-10 py-2.5 rounded-lg whitespace-nowrap">{{ t.CheckOutMore.slice(0) }}</RouterLink>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  import { useMediasstore } from './modules/useMediasstore'
  import { translations } from './modules/translations'
  import { useLanguage } from './modules/useLanguage'

  const { currentLanguage } = useLanguage()
  const t = computed(() => translations[currentLanguage.value])

  const store = useMediasstore()

  const gridRef = ref(null)
  const visibleMedias = ref([])
  let observer = null


  onMounted(() => {
    visibleMedias.value = new Array(store.filteredmedias?.length ?? 0).fill(false)

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    const cardEls = gridRef.value?.querySelectorAll('.card-item')
                    cardEls?.forEach((el, i) => {
                        setTimeout(() => {
                            visibleMedias.value[i] = true
                        }, i * 150)
                    })

                    observer.disconnect()
                }
            })
        },
        { threshold: 0.20 }
    )

    if (gridRef.value) {
        observer.observe(gridRef.value)
    }
})

onUnmounted(() => {
    observer?.disconnect()
})


</script>

<style scoped>
.card-item {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.card-item.is-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
