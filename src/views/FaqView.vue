<template>
  <section class="section-faq p-4">
    <div class="container mx-auto bg-violet-50 p-4 rounded-md">
      <ul class="flex flex-col gap-y-4">
        <faq-question
          v-for="f in faq"
          :key="f.question"
          :question="f.question"
          :answer="f.answer"
          :delay="f.delay"
        ></faq-question>
      </ul>
    </div>
  </section>
</template>

<script setup>
import FaqQuestion from "../components/FaqQuestion.vue";
import { ref } from "vue";

const faq = [
  {
    question:
      "What operating systems can I choose from when buying a PC from your site?",
    answer:
      "We offer a range of operating systems to choose from, including Windows 10, MacOS, and various Linux distributions. You can select your preferred operating system during the checkout process.",
    delay: 0.25,
  },
  {
    question: "What payment methods do you accept for PC purchases?",
    answer:
      "We accept several payment methods, including credit cards, debit cards, PayPal, and bank transfers. You can select your preferred payment method during the checkout process.",
    delay: 0.55,
  },
  {
    question: "How long will it take to receive my PC after I place an order?",
    answer:
      "The shipping time will depend on your location and the availability of the PC you ordered. We typically process orders within 1-2 business days and provide a tracking number once your PC is shipped. Shipping times can vary from 2-5 business days for domestic orders and up to 2-4 weeks for international orders.",
    delay: 0.75,
  },
  {
    question: "What is your return policy for PCs?",
    answer:
      "We offer a 30-day return policy for all PCs purchased from our site. If you are not satisfied with your purchase, you can return it for a refund or exchange. The PC must be in its original condition and packaging, and you will be responsible for shipping costs unless the PC is defective or damaged upon arrival.",
    delay: 0.95,
  },
  {
    question: "What if I have a problem with my PC after I receive it?",
    answer:
      "If you have any issues with your PC after receiving it, please contact our customer service team right away. We'll work with you to troubleshoot the issue and determine the best course of action, whether that's repairing or replacing the PC.",
    delay: 1.25,
  },
  {
    question: "What is your shipping policy?",
    answer:
      "We offer free shipping on all orders within the country of Lithuania. Shipping times vary depending on your location, but most orders are delivered within 5-7 business days. We also offer expedited shipping options for an additional fee.",
    delay: 1.55,
  },
];
</script>

<style scoped></style>
