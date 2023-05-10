<template>
  <section class="section-about">
    <div
      class="container max-w-screen-xl mx-auto mt-14 p-4 grid place-items-center md:grid-cols-2 gap-y-10"
    >
      <div class="imgarea">
        <img src="/images/macbook.png" alt="macbook" />
      </div>
      <div class="textarea">
        <h1 class="text-4xl text-violet-600 uppercase font-bold">
          Fast delivery
        </h1>
        <p class="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos
          labore voluptatum illum doloribus quis, similique sed, vitae impedit,
          veritatis facere ipsum placeat iure fugit exercitationem. Nobis
          excepturi quia quasi?
        </p>
      </div>
      <div class="textarea">
        <h1 class="text-4xl text-violet-600 uppercase font-bold">
          Impressive support
        </h1>
        <p class="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos
          labore voluptatum illum doloribus quis, similique sed, vitae impedit,
          veritatis facere ipsum placeat iure fugit exercitationem. Nobis
          excepturi quia quasi?
        </p>
      </div>
      <div class="imgarea">
        <img src="/images/chatting.png" alt="macbook" />
      </div>
      <div class="imgarea">
        <img src="/images/cloud-data.png" alt="macbook" />
      </div>
      <div class="textarea">
        <h1 class="text-4xl text-violet-600 uppercase font-bold">
          Preinstalled programs
        </h1>
        <p class="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos
          labore voluptatum illum doloribus quis, similique sed, vitae impedit,
          veritatis facere ipsum placeat iure fugit exercitationem. Nobis
          excepturi quia quasi?
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.imgarea {
  width: clamp(15rem, 60%, 35rem);
}
img {
  max-width: 100%;
}
</style>
