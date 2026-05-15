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
    <div class="px-20">
      <HeroPart />
      <div class="mt-66">
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
