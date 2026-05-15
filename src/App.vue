<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/logo1.svg'
</script>

<template>  
  <div class="bg-white min-h-screen overflow-x-hidden">
    <header class="w-full">
      <div class="grid grid-cols-3 items-center gap-2.5 w-full px-20">
        <div class="flex justify-start items-center">
          <img class="w-70 h-20 pr-30 pb-1" src="@/assets/logo1.svg" alt="Logo">
        </div>
        <div class="flex justify-center py-13.25 items-center">
          <nav>
            <RouterLink class="pr-9 text-blue hover:text-orange text-lg font-[Raleway]" to="/">HOME</RouterLink>
            <RouterLink class="pr-9 text-blue hover:text-orange text-lg font-[Raleway]" to="/about">NEWS</RouterLink>
            <RouterLink class="pr-9 text-blue hover:text-orange text-lg font-[Raleway]" to="/events">EVENTS</RouterLink>
            <RouterLink class="pr-9 text-blue hover:text-orange text-lg font-[Raleway]" to="/network">NETWORK</RouterLink>
          </nav>
        </div>
          <div class="flex justify-end items-center">
            <div class="flex items-center border border-blue rounded-lg overflow-hidden">
              <button class="text-blue hover:text-orange text-lg font-[Raleway] px-6 py-2 border-r border-blue">
                DK
              </button>
              <button class="flex items-center justify-center px-6 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
                  <path fill="#101010" d="M6.5 2a4.5 4.5 0 0 1 3.515 7.308l2.839 2.839l.064.078a.5.5 0 0 1-.693.693l-.079-.064l-2.838-2.84A4.5 4.5 0 1 1 6.5 2m0 1a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"/>
                </svg>
              </button>
              <span class="w-px h-11 bg-blue"></span>
              <button class="flex items-center gap-2 text-blue hover:text-orange text-lg font-[Raleway] px-6 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#101010" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/>
                </svg>
                MENU
              </button>
            </div>
          </div>
      </div>
    </header>

    <RouterView />

    <footer class="bg-blue w-screen h-83.25"></footer>
  </div>
</template>

<style scoped>

</style>