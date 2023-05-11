<template>
  <div class="bg-violet-300 grid grid-cols-1 place-items-center">
    <!-- img area -->
    <img :src="img" :alt="name" class="w-2/4" />

    <!-- parameters area -->
    <div class="bg-violet-100 place-self-start w-[100%]">
      <span class="block text-center">{{ name }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
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
