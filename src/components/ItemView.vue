<template>
  <Teleport to="body">
    <div
      class="item-view min-w-full fixed min-h-screen bg-black bg-opacity-25 top-0 left-0 flex justify-center place-items-center z-0 overflow-y-hidden"
      @click="$router.push({ name: 'catalog' })"
    ></div>
    <div
      class="bg-violet-100 fixed top-0 w-screen max-h-[85vh] left-1/2 -translate-x-2/4 z-30 overflow-y-scroll p-4"
    >
      <div class="grid grid-cols-1">
        <img :src="selectedItem.image" />
        <div class="item-desc flex flex-col gap-y-4 place-content-center">
          <h1 class="text-2xl mt-1 text-violet-500 uppercase text-center">
            {{ selectedItem.name }}
          </h1>
          <p>{{ selectedItem.description }}</p>

          <div class="item-status flex flex-col">
            <span
              >Price:
              <span class="font-bold text-violet-500"
                >{{ selectedItem.price }} e
              </span>
            </span>
            <span
              >GPU:
              <span class="font-bold text-violet-500">{{
                selectedItem.gpu
              }}</span></span
            >
            <span
              >CPU:
              <span class="font-bold text-violet-500">{{
                selectedItem.cpu
              }}</span></span
            >
            <span
              >RAM:
              <span class="font-bold text-violet-500"
                >{{ selectedItem.ram }} GB
              </span></span
            >
            <span
              >MOTHERBOARD:
              <span class="font-bold text-violet-500"
                >{{ selectedItem.motherboard }}
              </span></span
            >
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useItemStore } from "../stores/items.js";
import { useRouter } from "vue-router";
const items = useItemStore();
const router = useRouter();
const selectedItem = ref({});
onMounted(() => {
  const foundedItem = items.itemExist(prop.category, prop.id);
  if (!foundedItem) {
    router.push({ name: "catalog" });
  } else {
    selectedItem.value = foundedItem;
  }
});
const prop = defineProps({
  id: {
    type: String,
  },
  category: {
    type: String,
  },
});
</script>

<style scoped>
body {
}
html {
}
.item-view {
  backdrop-filter: blur(5px);
}
</style>
