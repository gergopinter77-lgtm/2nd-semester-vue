<script setup>
import EventsPage from '@/components/EventsPage.vue';
import NewsLetterPart from '@/components/NewsLetterPart.vue';
import TestimonialPart from '@/components/TestimonialPart.vue';
</script>

<template>
  <main>
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
      <EventsPage />
    </div>
    <div class="my-20">
      <NewsLetterPart />
    </div>
    <div class="my-20">
      <TestimonialPart />
    </div>
  </main>
</template>
