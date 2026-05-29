<script setup>
import MediaChanelPart from '@/components/MediaChanelPart.vue';
import MediaHeroPart from '@/components/MediaHeroPart.vue';
import NewsLetterPart from '@/components/NewsLetterPart.vue';
import MediaNewspart from '@/components/MediaNewspart.vue';
import Mediafilter from '@/components/MediafilterPart.vue';
</script>

<template>
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
        <MediaHeroPart />
    </div>
    <div  class="px-20 max-md:px-8 max-sm:px-2.5">
        <Mediafilter />
    </div>
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
        <MediaChanelPart />
    </div>
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
        <NewsLetterPart />
    </div>
    <div class="px-20 max-md:px-8 max-sm:px-2.5">
        <MediaNewspart />
    </div>

</template>
