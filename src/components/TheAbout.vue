<template>
  <section class="section-about">
    <!-- grid place-items-center md:grid-cols-2 gap-y-10 -->
    <div
      class="container max-w-screen-xl mx-auto mt-14 p-4 text-center grid grid-cols-1 place-items-center gap-y-10 md:grid-cols-2 md:text-left"
    >
      <div class="imgarea row-start-2 md:row-auto">
        <img src="/images/macbook.webp" alt="Fast Delivery" />
      </div>
      <div class="textarea row-start-1 md:row-auto">
        <h1 class="text-4xl text-violet-600 uppercase font-bold">
          Fast delivery
        </h1>
        <p class="mt-2">
          With our efficient logistics network and reliable shipping partners,
          we guarantee prompt delivery without compromising on the safety and
          security of your purchase. Experience the thrill of receiving your new
          PC sooner than you expect with our fast delivery service.
        </p>
      </div>
      <div class="textarea">
        <h1 class="text-4xl text-violet-600 uppercase font-bold">
          Impressive support
        </h1>
        <p class="mt-2">
          At our PC selling site, we are committed to providing impressive
          support to our valued customers. We understand that buying a computer
          can sometimes be a complex process, and we're here to make it as
          smooth as possible.
        </p>
      </div>
      <div class="imgarea">
        <img src="/images/chatting.webp" alt="macbook" />
      </div>
      <div class="imgarea">
        <img src="/images/cloud-data.webp" alt="macbook" />
      </div>
      <div class="textarea row-start-5 md:row-auto">
        <h1 class="text-4xl text-violet-600 uppercase font-bold">
          Preinstalled programs
        </h1>
        <p class="mt-2">
          We carefully curate a selection of useful software to provide you with
          a ready-to-use system that meets your needs. Our preinstalled programs
          include essential tools for productivity, such as office suites, media
          players, and antivirus software, ensuring you can start working or
          enjoying your multimedia content without any hassle.
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
