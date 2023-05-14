import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";
import { useItemStore } from "./items";
export const useCart = defineStore("cart", () => {
  const cart = ref([]);

  onMounted(() => {
    if (localStorage.hasOwnProperty("cart")) {
      cart.value = JSON.parse(localStorage.getItem("cart"));
    }
  });
  const itemStore = useItemStore();
  const addToCart = (id, category, quantity) => {
    const findItem = cart.value.findIndex((item) => item.id === id);
    // if item exist we should add only to quantity
    if (findItem !== -1) {
      cart.value[findItem].quantity += quantity;
    } else {
      // if item doesnt exist
      const whatItemToAdd = itemStore.items[category].find(
        (item) => item.id === id
      );
      whatItemToAdd.quantity = quantity;
      cart.value.push(whatItemToAdd);
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const howManyItems = computed(() => {
    let items;
    if (cart.value.length > 0)
      items = cart.value.reduce((acc, item) => acc + item.quantity, 0);

    return items;
  });

  const increaseQuantity = (id) => {
    const findItem = cart.value.findIndex((item) => item.id === id);
    cart.value[findItem].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const decreaseQuantity = (id) => {
    const findItem = cart.value.findIndex((item) => item.id === id);
    cart.value[findItem].quantity--;
    if (cart.value[findItem].quantity === 0) {
      cart.value.splice(findItem, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const totalCost = computed(() => {
    let cost;
    cost = cart.value.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return cost;
  });
  return {
    cart,
    addToCart,
    howManyItems,
    increaseQuantity,
    decreaseQuantity,
    totalCost,
  };
});
