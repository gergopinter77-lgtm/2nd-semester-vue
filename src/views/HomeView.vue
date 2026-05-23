<script setup>
  import HeroPart from '@/components/HeroPart.vue';
  import CardsPart from '@/components/CardsPart.vue';
  import AboutPart from '@/components/AboutPart.vue';
  import NewsEvent from '@/components/NewsEvent.vue';
  import MediaPart from '@/components/MediaPart.vue';
  import TestimonialPart from '@/components/TestimonialPart.vue';
</script>

<template>
  <main>
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
      <HeroPart />
      <div class="mt-16 md:mt-46 sm:mt-26 lg:mt-66">
        <CardsPart />
      </div>
        <AboutPart />
        <NewsEvent />
       <div class="mt-20">
        <MediaPart />
      </div>
    </div>
    <div class="my-10">
        <TestimonialPart />
    </div>
  </main>
</template>
