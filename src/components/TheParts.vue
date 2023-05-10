<template>
  <section class="section-parts shadow-lg">
    <div class="container mx-auto p-14 flex flex-col text-center">
      <h1 class="text-4xl text-violet-600 uppercase font-bold">
        Only the best manifacturers
      </h1>
      <div
        class="flex md:justify-between mt-10 sm:flex-col md:flex-row flex-wrap"
      >
        <img
          class="partner md:max-w-[10%]"
          src="/images/intel.png"
          alt="intel"
        />
        <img class="partner md:max-w-[10%]" src="/images/amd.png" alt="intel" />
        <img
          class="partner md:max-w-[10%]"
          src="/images/nvidia.png"
          alt="intel"
        />
        <img class="partner md:max-w-[10%]" src="/images/msi.png" alt="intel" />
      </div>
      <kinesis-container class="pc-circle mx-auto mt-10">
        <kinesis-element
          tag="img"
          src="/images/pc1.webp"
          :strength="-7"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x"
          class="shadow-lg"
        />
        <kinesis-element
          tag="img"
          src="/images/pc1.webp"
          :strength="7"
          type="rotate"
          transformOrigin="50% 300%"
          class="shadow-lg"
          axis="x"
        />
        <kinesis-element
          tag="img"
          src="/images/pc3.webp"
          :strength="14"
          type="rotate"
          transformOrigin="50% 300%"
          class="shadow-lg"
          axis="x"
        />
        <kinesis-element
          tag="img"
          src="/images/pc5.webp"
          :strength="-14"
          type="rotate"
          transformOrigin="50% 300%"
          class="shadow-lg"
          axis="x"
        />
        <kinesis-element
          tag="img"
          src="/images/pc3.webp"
          :strength="7"
          type="depth"
          transformOrigin="50% 300%"
          class="shadow-lg z-50 relative"
        />
      </kinesis-container>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.partner {
  /* width: clamp(5rem, 2.5vw, 10rem); */
  /* max-height: 4.5rem; */
  filter: grayscale(1);
  /* opacity:; */
}
.pc-circle {
  position: relative;
  width: clamp(10rem, 20vw, 20rem);
}

.pc-circle img {
  max-width: 100%;
  border-radius: 100%;
  aspect-ratio: 16/12;
}

.pc-circle img:nth-child(2) {
  /* background-color: green; */
}
.pc-circle img:not(:last-child) {
  /* background-color: red; */
  position: absolute;
  top: 0;
  left: 0;
}

section {
  /* min-height: 1000px; */
  background-image: linear-gradient(
    to bottom,
    rgb(237, 233, 254),
    rgb(245, 243, 255)
  );
}
</style>
