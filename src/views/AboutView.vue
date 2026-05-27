<script setup>
  import AboutHeroPart from '@/components/AboutHeroPart.vue';
  import WhatWeDoPart from '@/components/WhatWeDoPart.vue';
  import AboutPart from '@/components/AboutPart.vue';
  import ContactUsPart from '@/components/ContactUsPart.vue';
  import NewsLetterPart from '@/components/NewsLetterPart.vue';
</script>

<template>
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
        <AboutHeroPart />
        <div class="pt-30">
            <WhatWeDoPart />
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
