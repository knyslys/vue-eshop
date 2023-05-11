<template>
  <section class="section-catalog">
    <div class="container mx-auto grid grid-cols-1">
      <div class="categories pt-2 pb-2 bg-violet-200">
        <ul>
          <li
            class="bg-violet-100 text-center border-transparent border-b-2 border-t-2 cursor-pointer"
            :class="{ 'current-category': selectedCategory === 'computers' }"
            @click="selectedCategory = 'computers'"
          >
            Computers
          </li>
          <li
            class="bg-violet-100 text-center border-transparent border-b-2 border-t-2 cursor-pointer"
            :class="{ 'current-category': selectedCategory === 'consoles' }"
            @click="selectedCategory = 'consoles'"
          >
            Consoles
          </li>
        </ul>
      </div>
      <div class="items bg-violet-400 grid gap-y-10 grid-cols-1">
        <item
          v-for="pc in items[selectedCategory]"
          :img="pc.image"
          :name="pc.name"
        ></item>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import Item from "../components/Item.vue";
const selectedCategory = ref("computers");

const items = {
  computers: [
    {
      id: "11",
      name: "Galaxy Chad Super",
      image: "/images/pc1.webp",
      cpu: "AMD Ryzen 4-5000",
      ram: "16",
      motherboard: "MSI",
      price: "799.00",
      desciption: "",
      category: "Computers",
    },
    {
      id: "12",
      name: "Galaxy Chad Super",
      image: "/images/pc1.webp",
      cpu: "AMD Ryzen 4-5000",
      ram: "16",
      motherboard: "MSI",
      price: "799.00",
      desciption: "",
      category: "Computers",
    },
    {
      id: "22",
      name: "Galaxy Chad Super",
      image: "/images/pc1.webp",
      cpu: "AMD Ryzen 4-5000",
      ram: "16",
      motherboard: "MSI",
      price: "799.00",
      desciption: "",
      category: "Computers",
    },
    {
      id: "23",
      name: "Galaxy Chad Super",
      image: "/images/pc1.webp",
      cpu: "AMD Ryzen 4-5000",
      ram: "16",
      motherboard: "MSI",
      price: "799.00",
      desciption: "",
      category: "Computers",
    },
    {
      id: "24",
      name: "Galaxy Chad Super",
      image: "/images/pc1.webp",
      cpu: "AMD Ryzen 4-5000",
      ram: "16",
      motherboard: "MSI",
      price: "799.00",
      desciption: "",
      category: "Computers",
    },
    {
      id: "25",
      name: "Galaxy Chad Super",
      image: "/images/pc1.webp",
      cpu: "AMD Ryzen 4-5000",
      ram: "16",
      motherboard: "MSI",
      price: "799.00",
      desciption: "",
      category: "Computers",
    },
    {
      id: "26",
      name: "Galaxy Chad Super",
      image: "/images/pc1.webp",
      cpu: "AMD Ryzen 4-5000",
      ram: "16",
      motherboard: "MSI",
      price: "799.00",
      desciption: "",
      category: "Computers",
    },
    {
      id: "27",
      name: "Galaxy Chad Super",
      image: "/images/pc1.webp",
      cpu: "AMD Ryzen 4-5000",
      ram: "16",
      motherboard: "MSI",
      price: "799.00",
      desciption: "",
      category: "Computers",
    },
    {
      id: "28",
      name: "Galaxy Chad Super",
      image: "/images/pc1.webp",
      cpu: "AMD Ryzen 4-5000",
      ram: "16",
      motherboard: "MSI",
      price: "799.00",
      desciption: "",
      category: "Computers",
    },
  ],
  consoles: [
    {
      id: "",
      name: "",
      price: "",
      desciption: "",
    },
    {
      id: "",
      name: "",
      price: "",
      desciption: "",
    },
    {
      id: "",
      name: "",
      price: "",
      desciption: "",
    },
  ],
};
</script>

<style scoped>
.current-category {
  @apply border-violet-300;
  /* box-shadow: inset 1px 1px 0 1px rgba(0, 0, 0, 0.5); */
}
</style>
