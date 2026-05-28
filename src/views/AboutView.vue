<script setup>  
  import AboutHeroPart from '@/components/AboutHeroPart.vue';
  import AboutPart from '@/components/AboutPart.vue';
  import ContactUsPart from '@/components/ContactUsPart.vue';
  import OurGoalsPart from '@/components/OurGoalsPart.vue';
  import NewsLetterPart from '@/components/NewsLetterPart.vue';
</script>

<template>
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
    <AboutHeroPart />
    <div class="my-20">
        <OurGoalsPart />
    </div>
        <AboutPart />
        <ContactUsPart />
        <div class="my-20">
        <NewsLetterPart />
        </div>
    </div>
</template>

<style>

</style>
