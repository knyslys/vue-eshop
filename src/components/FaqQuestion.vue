<template>
  <li
    class="bg-violet-500 p-3 flex flex-col text-white rounded-md gap-y-4 cursor-pointer animate__animated animate__fadeIn"
    :style="`animation-delay:${props.delay}s`"
    @click="showAnswer = !showAnswer"
  >
    <span class="font-bold">{{ props.question }}</span>
    <Collapse :when="showAnswer" class="v-collapse">
      <span>{{ props.answer }}</span>
    </Collapse>
  </li>
</template>

<script setup>
import { ref } from "vue";
import { Collapse } from "vue-collapsed";
import "animate.css";
const showAnswer = ref(false);
const props = defineProps({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
  delay: {
    type: Number,
  },
});
</script>

<style scoped>
.v-collapse {
  transition: all 600ms cubic-bezier(0.33, 1, 0.68, 1);
}
</style>
