<script setup>
import { RouterLink, RouterView } from "vue-router";
import "animate.css";
import TheHeader from "./components/Header.vue";
import TheAbout from "./components/TheAbout.vue";
import TheParts from "./components/TheParts.vue";
</script>

<template>
  <navigation></navigation>
  <main class="overflow-y-hidden flex flex-col min-h-screen">
    <RouterView v-slot="{ Component }">
      <Transition name="fade-in" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </main>
  <the-footer></the-footer>
</template>

<style scoped>
.fade-in-enter-active {
  animation: fadeIn 0.5s;
  animation-timing-function: cubic-bezier(0.94, -0.44, 0.14, 1.5);
}
.fade-in-leave-active {
  animation: fadeOut 0.5s;
  animation-timing-function: cubic-bezier(0.94, -0.44, 0.14, 1.5);
}
</style>
