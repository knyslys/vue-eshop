<template>
  <div class="container mx-auto p-4">
    <ul class="flex flex-col gap-y-4" v-if="cartStore.cart.length > 0">
      <li
        v-for="item in cartStore.cart"
        class="flex flex-col place-items-center bg-violet-50 rounded-md shadow-md p-2 md:flex-row md:justify-between"
      >
        <img :src="item.image" class="max-w-[25%]" />
        <h1 class="md:titlez">{{ item.name }}</h1>
        <div
          class="quantity flex flex-col gap-y-2 md:flex-row md:gap-x-4 md:place-items-center"
        >
          <h1>Quantity: {{ item.quantity }}</h1>
          <span
            class="bg-violet-400 text-center cursor-pointer rounded-md md:text-xl md:p-2"
            @click="cartStore.increaseQuantity(item.id)"
            >+</span
          >
          <span
            class="bg-violet-400 text-center cursor-pointer rounded-md md:text-xl md:p-2"
            @click="cartStore.decreaseQuantity(item.id)"
            >-</span
          >
        </div>
      </li>

      <div class="total-price flex justify-between mt-4 p-2">
        <h1 class="md:titlez">Total:</h1>
        <h1 class="md:titlez md:text-violet-800">
          {{ cartStore.totalCost }} e
        </h1>
      </div>
    </ul>
    <div v-else class="flex flex-col gap-y-5 place-items-center">
      <p>Your Cart is empty</p>
      <RouterLink
        to="/catalog"
        class="hover:-translate-y-1 hover:shadow-md uppercase catalog bg-violet-950 text-white p-4 rounded-md duration-200 hover:p-5"
      >
        Check our Catalog
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "../stores/cart";
const cartStore = useCart();
</script>

<style scoped></style>
