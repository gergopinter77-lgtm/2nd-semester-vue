<script setup>
import MediaChanelPart from '@/components/MediaChanelPart.vue';
import MediaHeroPart from '@/components/MediaHeroPart.vue';
import NewsLetterPart from '@/components/NewsLetterPart.vue';
import MediaNewspart from '@/components/MediaNewspart.vue';
import Mediafilter from '@/components/MediafilterPart.vue';
</script>

<template>
    <div class="px-20">
        <MediaHeroPart />
    </div>
    <div  class="px-20">
        <Mediafilter />
    </div>
    <div>
        <MediaChanelPart /> 
    </div>
    <div class="my-10">
        <NewsLetterPart />
    </div>
    <div class="my-10">
        <MediaNewspart />
    </div>

</template>
