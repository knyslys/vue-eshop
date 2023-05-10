<template>
  <div class="services bg-violet-100" v-if="props.show">
    <div class="services-info bg-violet-100">
      <div
        class="container mx-auto flex justify-between place-items-center pt-4 pb-4"
      >
        <div class="flex place-items-center">
          <img
            src="/images/customer-service.png"
            alt="Our services"
            class="max-w-[20%]"
          />
          <h1 class="text-2xl mt-1 text-violet-500 uppercase">Our services</h1>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <h1 class="text-xl flex place-items-center gap-1">
            <Icon icon="fluent-mdl2:repair" /><span>Repairing</span>
          </h1>
          <h1 class="text-xl flex place-items-center gap-1">
            <Icon icon="ep:sell" /><span>Selling</span>
          </h1>
          <h1 class="text-xl flex place-items-center gap-1">
            <Icon icon="icons8:buy" /> <span>Buying</span>
          </h1>
          <h1 class="text-xl flex place-items-center gap-1">
            <Icon icon="mdi:talking" /> <span>Consulting</span>
          </h1>
        </div>
      </div>
    </div>
    <div class="overlay" @click="$emit('set-service')"></div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
// import { defineProps } from "vue";
const props = defineProps({
  show: {
    type: Boolean,
  },
});
</script>

<style scoped>
.services {
  position: absolute;
  /* bottom: 0; */
  /* transform: translateY(100%); */
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.services-info {
  /* background-color: red; */
}
.overlay {
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4.5px);
  min-height: 100vh;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 10000; */
}
</style>
