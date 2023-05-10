<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/Header.vue";
import TheAbout from "./components/TheAbout.vue";
import TheParts from "./components/TheParts.vue";
</script>

<template>
  <navigation></navigation>
  <main class="overflow-y-hidden">
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
