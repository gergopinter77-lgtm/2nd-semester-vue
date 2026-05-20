<script setup>
import NewsheroPart from '@/components/NewsheroPart.vue';
import NewsfilterPart from '@/components/NewsfilterPart.vue';
import NewsCards from '@/components/NewsCards.vue';
import TestimonialPart from '@/components/TestimonialPart.vue';
</script>

<template>
  <main>
    <div class="px-20">
      <NewsheroPart />
      <div class="mt-66">
        <NewsfilterPart />
      </div>
      <NewsCards />
    </div>
    <div class="my-20">
      <TestimonialPart />
    </div>
  </main>
</template>