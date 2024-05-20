<template>
  <ClientOnly>
    <div class="carousel-style-modifier">
      <Carousel
        :items-to-show="1"
        :wrapAround="false"
        :transition="1000"
        :itemsToScroll="1"
      >
        <Slide v-for="slide in carouselHeadings" :key="slide">
          <div class="flex flex-col mb-6">
            <div class="text-center text-white lato-medium text-3xl mb-3">
              {{ slide.heading }}
            </div>
            <div
              class="w-[342px] m-auto text-lg leading-7 text-center text-white"
            >
              {{ slide.subtext }}
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </ClientOnly>
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const carouselHeadings = ref([
  {
    heading: "Take control of your Expenses",
    subtext:
      "Trackabl helps manage your expenses & keep track of all transactions.",
  },
  {
    heading: "Insightful analytics, Smart spending",
    subtext:
      "Easy-to-use filters and analytics that gives insights into your spending habits",
  },
  {
    heading: "Customizable expense organization",
    subtext: "Stay on top of your spending with seamless customizations",
  },
]);
</script>
<style lang="css"></style>
