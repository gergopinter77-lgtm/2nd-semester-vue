<template>
    <div class="w-screen h-85 bg-blue" ref="sectionRef">
        <div class="grid grid-cols-12 gap-2.5 px-20 max-md:px-8 max-sm:px-2.5">

            <div class="col-start-1 col-span-2 pt-11 avatar-item" :class="{ 'is-visible': isVisible }">
                <img src="https://i.imgur.com/TmXKaUA.jpeg" alt="" class="lg:h-44.75 md:h-33.75 sm:h-22.75 lg:mt-0 mt-6 rounded-full">
            </div>

            <div class="col-start-3 col-span-12 pt-22.75 pl-8 cols-span-2">
                <div class="flex flex-row">
                    <h4 class="text-white font-[Raleway] lg:text-xl md:text-base sm:text-sm text-sm w-85 name-item" :class="{ 'is-visible': isVisible }">
                        Marlon Olvezecky <span class="font-light">- Creative User</span>
                    </h4>
                    <div class="flex flex-row col-span-2 stars-item" :class="{ 'is-visible': isVisible }">
                        <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-7.5 lg:h-7.5 w-4 h-4" width="30" height="30" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ea791e" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-7.5 lg:h-7.5 w-4 h-4" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ea791e" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-7.5 lg:h-7.5 w-4 h-4" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ea791e" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-7.5 lg:h-7.5 w-4 h-4" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ea791e" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-7.5 lg:h-7.5 w-4 h-4" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ea791e" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                    </div>
                </div>
                <h5 class="text-lg lg:text-3xl md:text-2xl sm:text-xl text-white font-[raleway] italic mt-1 title-item" :class="{ 'is-visible': isVisible }">
                    Lorem ipsum dolor sit amet!
                </h5>
                <p class="text-white font-[raleway] italic font-thin lg:w-152.5 md:w-120 sm:w-110 w-110 mt-1 body-item" :class="{ 'is-visible': isVisible }">
                    Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true
                    observer.disconnect()
                }
            })
        },
        { threshold: 0.15 }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<style scoped>
.avatar-item {
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;

    &.is-visible {
        opacity: 1;
        transform: translateX(0);
    }
}

.name-item {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}

.stars-item {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.5s ease 0.35s, transform 0.5s ease 0.35s;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}

.title-item {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.5s ease 0.45s, transform 0.5s ease 0.45s;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}

.body-item {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.5s ease 0.55s, transform 0.5s ease 0.55s;

    &.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>