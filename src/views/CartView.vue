<template>
  <div class="container mx-auto p-2">
    <ul class="flex flex-col gap-y-4">
      <li
        v-for="item in cartStore.cart"
        class="flex flex-col place-items-center bg-violet-50 rounded-md shadow-md p-2"
      >
        <img :src="item.image" class="max-w-[25%]" />
        <h1>{{ item.name }}</h1>
        <div class="quantity flex flex-col gap-y-2">
          <h1>Quantity: {{ item.quantity }}</h1>
          <span
            class="bg-violet-400 text-center cursor-pointer rounded-md"
            @click="cartStore.increaseQuantity(item.id)"
            >+</span
          >
          <span
            class="bg-violet-400 text-center cursor-pointer rounded-md"
            @click="cartStore.decreaseQuantity(item.id)"
            >-</span
          >
        </div>
      </li>

      <div class="total-price flex justify-between mt-4 p-2">
        <h1>Total:</h1>
        <h1>{{ cartStore.totalCost }} e</h1>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { useCart } from "../stores/cart";
const cartStore = useCart();
</script>

<style scoped></style>
