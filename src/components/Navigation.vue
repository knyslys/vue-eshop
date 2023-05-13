<template>
  <nav class="p-4 bg-violet-100 relative">
    <div
      class="container flex justify-between mx-auto flex-wrap place-items-center"
    >
      <h1 class="text-2xl">JSComputers</h1>
      <ul class="flex gap-4 place-items-center">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li
          class="flex place-items-center gap-1 hover:cursor-pointer"
          @click="setShowServies"
        >
          Services <Icon icon="mdi:dots-grid" class="text-md" />
        </li>
        <li><RouterLink to="#">About</RouterLink></li>
        <li><RouterLink to="#">FAQ</RouterLink></li>
        <li v-if="cart.howManyItems > 0" class="relative">
          <RouterLink to="/cart/">
            <Icon
              icon="material-symbols:shopping-cart-outline"
              class="text-lg"
            />
            <div
              class="absolute -top-1/4 -right-6 rounded-lg p-1 bg-violet-950 text-white text-sm"
            >
              <span>
                {{ cart.howManyItems }}
              </span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
    <services :show="showServices" @set-service="setShowServies"></services>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useCart } from "../stores/cart.js";
import Services from "../views/Services.vue";
const showServices = ref(false);
const cart = useCart();
const setShowServies = () => {
  showServices.value = !showServices.value;
};
</script>

<style scoped></style>
