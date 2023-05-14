<template>
  <header class="bg-violet-50 p-4 md:p-14">
    <div
      class="container test mx-auto bg-violet-50 border-solid border-2 rounded-lg shadow-lg"
    >
      <div
        class="arrow arrow--left top-[5%] md:top[10%] lg:top-[30%] lg:translate-y-2/4 bg-violet-800 rounded-md"
        @click="changeHeader(-1)"
      >
        <Icon icon="material-symbols:chevron-left" class="icon" />
      </div>
      <div
        class="arrow arrow--right top-[5%] md:top[10%] lg:top-[30%] lg:translate-y-2/4 bg-violet-800 rounded-md"
        @click="changeHeader(1)"
      >
        <Icon icon="material-symbols:chevron-right" class="icon" />
      </div>
      <Transition :name="animationName" mode="out-in">
        <div
          class="p-4 grid md:grid-cols-2 place-items-center sm:grid-cols-1"
          :key="headerIndex"
        >
          <div class="imgarea">
            <img
              :src="headerContent[headerIndex].image"
              :alt="headerContent.title"
            />
          </div>
          <div class="textarea">
            <h1 class="text-4xl text-violet-600 uppercase font-bold">
              {{ headerContent[headerIndex].title }}
            </h1>
            <h1 class="text-2xl mt-1 text-violet-500 uppercase">
              {{ headerContent[headerIndex].subtitle }}
            </h1>
            <p class="mt-4">
              {{ headerContent[headerIndex].desc }}
            </p>
          </div>
        </div>
      </Transition>
    </div>
    <div class="text-center mt-14">
      <!-- <h2 class="uppercase">Enough waiting</h2> -->
      <RouterLink
        to="/catalog"
        class="hover:-translate-y-1 hover:shadow-md uppercase catalog bg-violet-950 text-white p-4 rounded-md duration-200 hover:p-5"
      >
        Check our Catalog
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
const headerContent = [
  {
    image: "/images/pc-game.png",

    title: "Best Prebuilt computers",
    subtitle: "With the best price!",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
  },
  {
    image: "/images/seo.png",

    title: "Best experts in the industry",
    subtitle: "With a best attitude!",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
  },
  {
    image: "/images/programmer.png",

    title: "Best of the best",
    subtitle: "Because we love what we do!",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
  },
];

const headerIndex = ref(0);
const animationName = ref(undefined);
let slidingInterval;

slidingInterval = setInterval(() => {
  changeHeader(1);
}, 6000);
const changeHeader = (i) => {
  clearInterval(slidingInterval);
  animationName.value = i === 1 ? "slide-right" : "slide-left";
  headerIndex.value += i;
  if (headerIndex.value < 0) {
    headerIndex.value = headerContent.length - 1;
  } else if (headerIndex.value > headerContent.length - 1) {
    headerIndex.value = 0;
  }
  slidingInterval = setInterval(() => {
    changeHeader(1);
  }, 6000);
};
</script>

<style scoped>
header {
  position: relative;

  overflow: hidden;
}

.catalog {
  position: relative;
  cursor: pointer;
  transition: 1s all ease-in-out;
}

.catalog:hover.catalog::after,
.catalog:hover.catalog::before {
  width: 200%;
}

.catalog span {
  position: relative;
  z-index: 500;
}

.catalog::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(50%);
  width: 0%;
  height: 2.5px;
  transition: 0.4s all ease-in-out;
  background-image: linear-gradient(
    to right,
    rgb(46, 16, 101),
    rgb(245, 243, 255, 1)
  );
  z-index: -1;
}

.catalog::before {
  content: "";
  position: absolute;
  top: 50%;
  transition: 0.4s all ease-in-out;
  transform: translateX(-50%);
  left: 0;
  width: 0%;
  height: 2.5px;
  background-image: linear-gradient(
    to left,
    rgb(46, 16, 101),
    rgb(245, 243, 255, 1)
  );
  z-index: -1;
}

.test {
  overflow: hidden;
  position: relative;
}

.icon {
  font-size: 2rem;
}

.imgarea {
  width: clamp(20rem, 50%, 30rem);
}

img {
  max-width: 100%;
}
.arrow {
  position: absolute;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow--left {
  left: 0;
  transform: translateX(50%) translateY(-50%);
}
.arrow--right {
  right: 0;
  transform: translateX(-50%) translateY(-50%);
}

.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}
.slide-right-leave-from {
  transform: translateX(0);
}
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: 0.4s all ease-in-out;
}
/* slide left */
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-enter-to {
  transform: translateX(0);
}
.slide-left-leave-from {
  transform: translateX(0);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: 0.4s all ease-in-out;
}
</style>
