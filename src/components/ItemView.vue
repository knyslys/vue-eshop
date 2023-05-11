<template>
  <div
    class="item-view min-w-full fixed min-h-screen bg-black bg-opacity-25 top-0 left-0 flex justify-center place-items-center"
    @click="$router.push({ name: 'catalog' })"
  >
    <div class="bg-violet-500 container">
      {{ selectedItem.price }}
    </div>
  </div>
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
  overflow-y: hidden;
}
</style>
