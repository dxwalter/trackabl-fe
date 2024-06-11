<template>
  <ClientOnly>
    <div class="analytics-sunnary-carousel" data-test-component="true">
      <Carousel :wrap-around="true" :breakpoints="breakpoints">
        <Slide v-for="(slide, index) in dataList" :key="index">
          <div
            class="w-full p-6 xl:py-11 xl:px-4 bg-navyBlue-900 analytics-card rounded-xl text-white flex flex-col"
          >
            <div class="lato-semi-bold mb-4 text-center flex justify-center">
              <span class="text-white mr-1 block">{{ slide.title }}</span>
              <span class="text-grey-300 block">({{ slide.date }})</span>
            </div>
            <div class="flex justify-center text-center lato-semi-bold mb-3">
              <sup class="text-2xl mr-[2px] top-[-4px]">{{
                slide.currency
              }}</sup>
              <div class="text-2xl">{{ slide.amount }}</div>
            </div>
            <div class="flex justify-center">
              <div class="w-[16px] self-center mr-1">
                <NuxtImg
                  :src="slide.trendStatus ? '/trend-up.svg' : '/trend-down.svg'"
                  class="w-full"
                />
              </div>
              <div class="self-center text-xs text-grey-300">
                {{ slide.trendMessage }}
              </div>
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

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import { computed } from 'vue';

const breakpoints = {
  0: {
    itemsToShow: 1.02,
    snapAlign: 'left',
  },
  375: {
    itemsToShow: 1.05,
    snapAlign: 'left',
  },
  640: {
    itemsToShow: 2,
    snapAlign: 'left',
  },
  768: {
    itemsToShow: 2.05,
    snapAlign: 'left',
  },
  900: {
    itemsToShow: 2.9,
    snapAlign: 'left',
  },
  1024: {
    itemsToShow: 2.9,
    snapAlign: 'left',
  },
  1280: {
    itemsToShow: 3.9,
    snapAlign: 'left',
  },
  1440: {
    itemsToShow: 4,
    snapAlign: 'left',
  },
};

const dataValue = ref([
  {
    title: 'Today spend',
    date: 'Mon, 15 Apr',
    currency: '₦',
    amount: '12,000',
    trendStatus: true,
    trendMessage: '47% up from yesterday',
  },
  {
    title: 'This week spend',
    date: '15 Apr - 21 Apr',
    currency: '₦',
    amount: '28,000',
    trendStatus: false,
    trendMessage: '47% below than last week',
  },
  {
    title: "This month's spend",
    date: 'April',
    currency: '₦',
    amount: '148,000',
    trendStatus: true,
    trendMessage: '47% up than than month',
  },
  {
    title: "This years's spend",
    date: '2024',
    currency: '₦',
    amount: '5,000,000',
    trendStatus: false,
    trendMessage: '47% below than month',
  },
]);

const dataList = computed(() => dataValue.value);
</script>

<style lang="css" scoped>
.analytics-sunnary-carousel :deep(.carousel__viewport) .analytics-card {
  margin-right: 8px;
}

.analytics-sunnary-carousel
  :deep(.carousel__viewport:last-child)
  .analytics-card {
  margin-right: 0px;
}

.analytics-sunnary-carousel :deep(button.carousel__next),
.analytics-sunnary-carousel :deep(button.carousel__prev) {
  display: none;
}

.analytics-sunnary-carousel :deep(.carousel__pagination) {
  margin: 8px 0px 0px 0px;
}

.analytics-sunnary-carousel
  :deep(
    .carousel__pagination
      .carousel__pagination-item
      button.carousel__pagination-button::after
  ) {
  width: 16px;
  height: 4px;
  background-color: #eaecf0;
  border-radius: 100px;
}

.analytics-sunnary-carousel
  :deep(
    .carousel__pagination
      .carousel__pagination-item
      button.carousel__pagination-button
  ) {
  padding: 0;
  margin-right: 4px;
}
.analytics-sunnary-carousel
  :deep(
    .carousel__pagination
      .carousel__pagination-item:last-child
      button.carousel__pagination-button
  ) {
  padding: 0;
  margin-right: 0px;
}
.analytics-sunnary-carousel
  :deep(
    .carousel__pagination
      .carousel__pagination-item
      button.carousel__pagination-button.carousel__pagination-button--active::after
  ) {
  background-color: #101828;
}

.analytics-sunnary-carousel :deep(.carousel__slide) {
  /* width: 339px !important; */
}

@media (min-width: 1280px) {
  .analytics-sunnary-carousel
    :deep(.carousel__pagination .carousel__pagination-item) {
    display: none;
  }
}

@media (min-width: 1440px) {
  .analytics-sunnary-carousel :deep(.carousel__slide) {
    /* width: 418px !important; */
  }
}
</style>
