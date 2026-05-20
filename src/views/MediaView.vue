<script setup>
import MediaChanelPart from '@/components/MediaChanelPart.vue';
import MediaHeroPart from '@/components/MediaHeroPart.vue';
import TestimonialPart from '@/components/TestimonialPart.vue';
import NewsLetterPart from '@/components/NewsLetterPart.vue';
</script>

<template>
    <div class="px-20">
        <MediaHeroPart />
    </div>
    <div>
        <MediaChanelPart /> 
    </div>
    <div class="my-10">
        <NewsLetterPart />
    </div>
    <div class="my-10">
        <TestimonialPart />
    </div>

</template>
