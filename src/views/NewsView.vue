<script setup>
import NewsheroPart from '@/components/NewsheroPart.vue';
import NewsfilterPart from '@/components/NewsfilterPart.vue';
import NewsCards from '@/components/NewsCards.vue';
import TestimonialPart from '@/components/TestimonialPart.vue';
import NewsLetterPart from '@/components/NewsLetterPart.vue';
</script>

<template>
  <main>
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
      <NewsheroPart />
      <div class="mt-8 sm:mt-16 lg:mt-66">
        <NewsfilterPart />
      </div>
      <NewsCards />
    </div>
    <div class="my-20 px-20 max-md:px-8 max-sm:px-2.5">
        <NewsLetterPart />
    </div>
    <div class="my-20">
      <TestimonialPart />
    </div>
  </main>
</template>
