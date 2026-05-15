<script setup>
  import HeroPart from '@/components/HeroPart.vue';
  import CardsPart from '@/components/CardsPart.vue';
  import AboutPart from '@/components/AboutPart.vue';
  import NewsEvent from '@/components/NewsEvent.vue';
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
    </div>
  </main>
</template>
