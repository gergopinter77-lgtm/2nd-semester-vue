<template>
  <div class="flex flex-col gap-4">
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2.5 row-auto" ref="gridRef">
      <div
      v-for="(media, index) in store.filteredmedias"
      :key="media.id"
      :style="{ transitionDelay: `${index * 0.15}s` }"
      class="col-span-1 rounded-2xl overflow-hidden relative h-125 group hover:shadow-2xl transition-shadow duration-300"
    >
      <img :src="media.pictures" alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div class="absolute inset-0 bg-blue/60 rounded-lg"></div>
      <div class="absolute bottom-0 left-0 right-0 px-4.5 pb-5.5">
        <RouterLink :to="`/media/${media.slug}`">
          <h3 class="text-white text-2xl font-semibold leading-snug font-[raleway] m-0 group-hover:text-orange transition-colors duration-200">
            <span class="text-orange shadow-2xl">{{ (media[`title_${currentLanguage}`] || media.title).charAt(0) }}</span>{{ (media[`title_${currentLanguage}`] || media.title).slice(1) }}
          </h3>
        </RouterLink>
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
