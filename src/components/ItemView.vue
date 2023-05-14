<template>
  <Teleport to="body">
    <div
      class="item-view min-w-full fixed min-h-screen bg-black bg-opacity-25 top-0 left-0 flex justify-center place-items-center z-0 overflow-y-hidden"
      @click="$router.push({ name: 'catalog' })"
    ></div>
    <div
      class="bg-violet-100 fixed top-0 w-screen max-h-[85vh] left-1/2 -translate-x-2/4 z-30 overflow-y-scroll p-4"
    >
      <div class="grid grid-cols-1 md:grid-cols-2">
        <img :src="selectedItem.image" />
        <div class="item-desc flex flex-col gap-y-4 place-content-center">
          <h1 class="text-2xl mt-1 text-violet-500 uppercase text-center">
            {{ selectedItem.name }}
          </h1>
          <p>{{ selectedItem.description }}</p>

          <div class="item-status flex flex-col md:justify-start">
            <span
              >Price:
              <span class="font-bold text-violet-500"
                >{{ selectedItem.price }} e
              </span>
            </span>
            <span v-if="prop.category === 'computers'"
              >GPU:
              <span class="font-bold text-violet-500">{{
                selectedItem.gpu
              }}</span></span
            >
            <span v-if="prop.category === 'computers'"
              >CPU:
              <span class="font-bold text-violet-500">{{
                selectedItem.cpu
              }}</span></span
            >
            <span v-if="prop.category === 'computers'"
              >RAM:
              <span class="font-bold text-violet-500"
                >{{ selectedItem.ram }} GB
              </span></span
            >
            <span v-if="prop.category === 'computers'"
              >MOTHERBOARD:
              <span class="font-bold text-violet-500"
                >{{ selectedItem.motherboard }}
              </span></span
            >
          </div>
          <p class="text-red-500 text-center" v-if="error !== ''">
            {{ error }}
          </p>
          <p class="text-green-500 text-center" v-if="added">
            Item added to your cart!
          </p>
          <input
            type="number"
            v-model="itemQuantity"
            class="text-center rounded-md"
          />
          <button
            class="hover:-translate-y-1 hover:shadow-md uppercase catalog bg-violet-950 text-white p-4 rounded-md duration-200 hover:p-5 md:justify-start"
            @click="submitToCart"
          >
            add
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useItemStore } from "../stores/items.js";
import { useCart } from "../stores/cart.js";
import { useRouter } from "vue-router";
const items = useItemStore();
const cart = useCart();
const router = useRouter();
const selectedItem = ref({});
const itemQuantity = ref(1);
const error = ref("");
const added = ref(false);
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
let addedTimeout;
const submitToCart = () => {
  if (itemQuantity.value <= 0) {
    error.value = "Please enter a valid quantity!";
    return;
  }
  cart.addToCart(
    selectedItem.value.id,
    selectedItem.value.category,
    itemQuantity.value
  );
  clearTimeout(addedTimeout);
  error.value = "";
  added.value = true;
  addedTimeout = setTimeout(() => {
    added.value = false;
  }, 2000);
};
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
