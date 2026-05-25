<script setup>
import MediaChanelPart from '@/components/MediaChanelPart.vue';
import MediaHeroPart from '@/components/MediaHeroPart.vue';
import NewsLetterPart from '@/components/NewsLetterPart.vue';
import MediaNewspart from '@/components/MediaNewspart.vue';
import Mediafilter from '@/components/MediafilterPart.vue';
</script>

<template>
    <div class="md:px-20 px-10">
        <MediaHeroPart />
    </div>
    <div  class="md:px-20 px-10">
        <Mediafilter />
    </div>
    <div class="lg:px-20 md:px-10 px-5">
        <MediaChanelPart />
    </div>
    <div class="my-10 lg:px-20 md:px-10 px-5">
        <NewsLetterPart />
    </div>
    <div class="my-10 lg:px-20 md:px-10 px-5">
        <MediaNewspart />
    </div>

</template>
