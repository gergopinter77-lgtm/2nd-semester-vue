<template>
  <div class="hero-background">
    <slot></slot>
  </div>
</template>

<style scoped>
.hero-background {
  background-image: url('@/assets/heropattern.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
