<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import './assets/logo1.svg'
import { useLanguage } from '@/components/modules/useLanguage'

const { currentLanguage, setLanguage } = useLanguage()
const languageOpen = ref(false)
const menuOpen = ref(false)

const chooseLanguage = (lang) => {
  setLanguage(lang)
  languageOpen.value = false
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <div class="bg-white min-h-screen overflow-x-hidden max-[874px]:pt-5">
    <header class="w-full">
      <div class="grid grid-cols-3 max-[874px]:grid-cols-2 items-center gap-2.5 w-full px-20 max-md:px-8 max-sm:px-2.5">

        <div class="flex justify-start items-center">
          <img class="w-70 h-20 max-[874px]:min-h-10 max-[874px]:min-w-60 max-[874px]max-h-10 max-[874px]:max-w-60 md:pr-25 lg:pr-30 pr-20 pb-1" src="@/assets/logo1.svg" alt="Logo">
        </div>

        <div class="flex justify-center py-13.25 items-center max-[874px]:hidden">
          <nav>
            <RouterLink class="pr-9 text-blue hover:text-orange text-sm lg:text-lg font-[Raleway]" to="/">HOME</RouterLink>
            <RouterLink class="pr-9 text-blue hover:text-orange text-sm lg:text-lg font-[Raleway]" to="/news">NEWS</RouterLink>
            <RouterLink class="pr-9 text-blue hover:text-orange text-sm lg:text-lg font-[Raleway]" to="/events">EVENTS</RouterLink>
            <RouterLink class="pr-9 text-blue hover:text-orange text-sm lg:text-lg font-[Raleway]" to="/network">NETWORK</RouterLink>
          </nav>
        </div>

        <div class="flex justify-end items-center">
          <div class="relative flex items-center border border-blue rounded-lg">

            <div class="relative border-r border-blue">
              <button @click="languageOpen = !languageOpen; menuOpen = false" class="flex items-center gap-1 text-blue hover:text-orange text-sm lg:text-lg font-[Raleway] px-4 lg:px-6 py-2 uppercase transition-colors duration-300">
                {{ currentLanguage }}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="transition-transform duration-300" :class="languageOpen ? 'rotate-180' : ''">
                  <path fill="currentColor" d="M12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"/>
                </svg>
              </button>
              <div v-if="languageOpen" class="absolute top-full left-0 mt-1 bg-white border border-blue rounded-lg overflow-hidden z-50 w-full">
                <button @click="chooseLanguage('en')" class="block w-full text-left px-4 py-2 font-[raleway] uppercase hover:bg-blue hover:text-white transition-colors" :class="currentLanguage === 'en' ? 'text-orange' : 'text-blue'">EN</button>
                <button @click="chooseLanguage('da')" class="block w-full text-left px-4 py-2 font-[raleway] uppercase hover:bg-blue hover:text-white transition-colors" :class="currentLanguage === 'da' ? 'text-orange' : 'text-blue'">DA</button>
                <button @click="chooseLanguage('de')" class="block w-full text-left px-4 py-2 font-[raleway] uppercase hover:bg-blue hover:text-white transition-colors" :class="currentLanguage === 'de' ? 'text-orange' : 'text-blue'">DE</button>
              </div>
            </div>


            <button @click="menuOpen = !menuOpen; languageOpen = false" class="flex items-center gap-2 text-blue hover:text-orange text-sm lg:text-lg font-[Raleway] px-4 lg:px-6 py-2 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
                <path fill="#101010" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/>
              </svg>
              <span class="max-[874px]:hidden">MENU</span>
            </button>

            <div v-if="menuOpen" class="absolute top-full right-0 mt-1 bg-white border border-blue rounded-lg overflow-hidden z-50 w-full">
              <RouterLink @click="closeMenu" to="/" class="min-[875px]:hidden block px-6 py-3 text-blue hover:bg-blue hover:text-white font-[Raleway] text-sm uppercase transition-colors">HOME</RouterLink>
              <RouterLink @click="closeMenu" to="/news" class="min-[875px]:hidden block px-6 py-3 text-blue hover:bg-blue hover:text-white font-[Raleway] text-sm uppercase transition-colors border-t border-blue/20">NEWS</RouterLink>
              <RouterLink @click="closeMenu" to="/events" class="min-[875px]:hidden block px-6 py-3 text-blue hover:bg-blue hover:text-white font-[Raleway] text-sm uppercase transition-colors border-t border-blue/20">EVENTS</RouterLink>
              <RouterLink @click="closeMenu" to="/network" class="min-[875px]:hidden block px-6 py-3 text-blue hover:bg-blue hover:text-white font-[Raleway] text-sm uppercase transition-colors border-t border-blue/20">NETWORK</RouterLink>
              <RouterLink @click="closeMenu" to="/media" class="block px-6 py-3 text-blue hover:bg-blue hover:text-white font-[Raleway] text-sm uppercase transition-colors border-t border-blue/20 min-[875px]:border-t-0">MEDIA</RouterLink>
            </div>

          </div>
        </div>
      </div>

      <div v-if="menuOpen || languageOpen" @click="menuOpen = false; languageOpen = false" class="fixed inset-0 z-40"></div>
    </header>

    <RouterView />

              <footer class="bg-blue w-full px-6 md:px-20 py-10 md:py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-white font-[raleway]">
        <div class="flex flex-col items-center md:items-start gap-4 md:gap-0 md:justify-between text-center md:text-left">
          <img class="w-48 md:w-60" src="@/assets/logo2.svg" alt="Business Region Logo">
          <p class="text-sm">© 2026 Business Region <br> All Rights Reserved</p>
        </div>

        <div class="flex flex-col items-center md:border-r md:border-white/30 md:pr-10 border-t border-white/30 md:border-t-0 pt-8 md:pt-0">
          <h3 class="text-lg font-semibold mb-4 md:mb-6">QUICK LINKS</h3>
          <ul class="flex flex-col gap-3 text-center">
            <li><RouterLink to="" class="hover:text-orange">ABOUT US</RouterLink></li>
            <li><RouterLink to="/events" class="hover:text-orange">EVENTS</RouterLink></li>
            <li><RouterLink to="/news" class="hover:text-orange">NEWS</RouterLink></li>
            <li><RouterLink to="/network" class="hover:text-orange">NETWORK</RouterLink></li>
          </ul>
        </div>

        <div class="flex flex-col items-center md:items-start border-t border-white/30 md:border-t-0 pt-8 md:pt-0">
          <h3 class="text-lg font-semibold mb-4 md:mb-6">FOLLOW US</h3>
          <div class="flex gap-4">
            <a href="https://www.instagram.com/businessregiondedk/" target="_blank" class="hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fffaf0" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" class="hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fffaf0" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
            </a>
            <a href="https://www.youtube.com/@Business-region/videos" target="_blank" class="hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fffaf0" d="M10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" class="hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fffaf0" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
