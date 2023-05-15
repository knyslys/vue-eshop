<template>
  <section class="section-catalog p-4">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-2">
      <div class="categories pt-2 pb-2">
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
      <div
        class="items grid gap-y-10 grid-cols-1 lg:grid-cols-2 lg:col-span-2 gap-x-10"
      >
        <item
          v-for="pc in itemStore.items[selectedCategory]"
          :key="pc.id"
          :id="pc.id"
          :img="pc.image"
          :name="pc.name"
          :price="pc.price"
          :cpu="pc.cpu"
          :gpu="pc.gpu"
          :category="selectedCategory"
          v-if="selectedCategory === 'computers'"
        ></item>
        <item
          v-for="pc in itemStore.items[selectedCategory]"
          :id="pc.id"
          :img="pc.image"
          :name="pc.name"
          :price="pc.price"
          :category="selectedCategory"
          v-else
        ></item>
      </div>
    </div>

    <item-view
      :id="rtr.params.id"
      :category="selectedCategory"
      v-if="rtr.params.id !== undefined"
    ></item-view>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Item from "../components/Item.vue";
import { useRoute } from "vue-router";
import ItemView from "../components/ItemView.vue";
import { useItemStore } from "../stores/items";

const selectedCategory = ref("computers");
const rtr = useRoute();
const itemStore = useItemStore();
// const items = {
//   computers: [
//     {
//       id: "11",
//       name: "Galaxy Chad Super",
//       image: "/images/pc1.webp",
//       cpu: "AMD Ryzen 4-5000",
//       gpu: "NVIDIA RTX 3060TI",
//       ram: "16",
//       motherboard: "MSI",
//       price: "799.00",
//       desciption: "",
//       category: "Computers",
//     },
//     {
//       id: "12",
//       name: "Galaxy Chad Super",
//       image: "/images/pc1.webp",
//       cpu: "AMD Ryzen 4-5000",
//       gpu: "NVIDIA RTX 3060TI",
//       ram: "16",
//       motherboard: "MSI",
//       price: "799.00",
//       desciption: "",
//       category: "Computers",
//     },
//     {
//       id: "22",
//       name: "Galaxy Chad Super",
//       image: "/images/pc1.webp",
//       cpu: "AMD Ryzen 4-5000",
//       gpu: "NVIDIA RTX 3060TI",
//       ram: "16",
//       motherboard: "MSI",
//       price: "799.00",
//       desciption: "",
//       category: "Computers",
//     },
//     {
//       id: "23",
//       name: "Galaxy Chad Super",
//       image: "/images/pc1.webp",
//       cpu: "AMD Ryzen 4-5000",
//       gpu: "NVIDIA RTX 3060TI",
//       ram: "16",
//       motherboard: "MSI",
//       price: "799.00",
//       desciption: "",
//       category: "Computers",
//     },
//     {
//       id: "24",
//       name: "Galaxy Chad Super",
//       image: "/images/pc1.webp",
//       cpu: "AMD Ryzen 4-5000",
//       gpu: "NVIDIA RTX 3060TI",
//       ram: "16",
//       motherboard: "MSI",
//       price: "799.00",
//       desciption: "",
//       category: "Computers",
//     },
//     {
//       id: "25",
//       name: "Galaxy Chad Super",
//       image: "/images/pc1.webp",
//       cpu: "AMD Ryzen 4-5000",
//       gpu: "NVIDIA RTX 3060TI",
//       ram: "16",
//       motherboard: "MSI",
//       price: "799.00",
//       desciption: "",
//       category: "Computers",
//     },
//     {
//       id: "26",
//       name: "Galaxy Chad Super",
//       image: "/images/pc1.webp",
//       cpu: "AMD Ryzen 4-5000",
//       gpu: "NVIDIA RTX 3060TI",
//       ram: "16",
//       motherboard: "MSI",
//       price: "799.00",
//       desciption: "",
//       category: "Computers",
//     },
//     {
//       id: "27",
//       name: "Galaxy Chad Super",
//       image: "/images/pc1.webp",
//       cpu: "AMD Ryzen 4-5000",
//       gpu: "NVIDIA RTX 3060TI",
//       ram: "16",
//       motherboard: "MSI",
//       price: "799.00",
//       desciption: "",
//       category: "Computers",
//     },
//     {
//       id: "28",
//       name: "Galaxy Chad Super",
//       image: "/images/pc1.webp",
//       cpu: "AMD Ryzen 4-5000",
//       gpu: "NVIDIA RTX 3060TI",
//       ram: "16",
//       motherboard: "MSI",
//       price: "799.00",
//       desciption: "",
//       category: "Computers",
//     },
//   ],
//   consoles: [
//     {
//       id: "",
//       name: "",
//       price: "",
//       desciption: "",
//     },
//     {
//       id: "",
//       name: "",
//       price: "",
//       desciption: "",
//     },
//     {
//       id: "",
//       name: "",
//       price: "",
//       desciption: "",
//     },
//   ],
// };
</script>

<style scoped>
.current-category {
  @apply border-violet-300;
  /* box-shadow: inset 1px 1px 0 1px rgba(0, 0, 0, 0.5); */
}
</style>
