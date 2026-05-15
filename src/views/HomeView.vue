<script setup>
  import HeroPart from '@/components/HeroPart.vue';
  import CardsPart from '@/components/CardsPart.vue';
  import AboutPart from '@/components/AboutPart.vue';
  import NewsEvent from '@/components/NewsEvent.vue';
  import MediaPart from '@/components/MediaPart.vue';
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
  </main>
</template>
