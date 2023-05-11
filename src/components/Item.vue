<template>
  <div class="bg-violet-50 grid grid-cols-1 place-items-center shadow-md p-4">
    <!-- img area -->
    <img :src="img" :alt="name" class="w-2/4" />

    <!-- parameters area -->
    <div class="w-[100%] flex flex-col place-items-center">
      <span class="">{{ name }}</span>
      <span class="">CPU: {{ cpu }}</span>
      <span class="">GPU: {{ gpu }}</span>
      <span class="">Price: {{ price }}</span>
      <div
        class="bg-violet-600 text-3xl rounded-md mt-4 p-2 text-white cursor-pointer"
      >
        <RouterLink :to="`/catalog/view/${+id}`">
          <Icon icon="mdi:information-variant-circle-outline" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  id: {
    type: String,
  },
  img: {
    type: String,
  },
  name: {
    type: String,
  },
  cpu: {
    type: String,
  },
  gpu: {
    type: String,
  },
  price: {
    type: String,
  },
  category: {
    type: String,
  },
  motherboard: {
    type: String,
  },
});

const { id, name, cpu, gpu, price, category, motherboard, img } = props;
</script>

<style scoped></style>
