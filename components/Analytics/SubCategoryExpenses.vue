<template>
  <ClientOnly>
    <div class="flex gap-12 flex-col xl:flex-row">
      <div class="xl:w-3/5">
        <div class="w-full p-6 border-grey-200 rounded-xl xl:border">
          <donut-chart-sub-category />
        </div>
        <div>
          <div
            class="w-full flex flex-wrap gap-2 p-6 mt-6 border-grey-200 rounded-xl xl:border"
          >
            <div class="flex space-between justify-between w-full">
              <p class="text-grey-900 font-semibold">Subcategories</p>
              <div
                class="flex gap-[2px] px-2 py-1 border-b-2 border-blue-500 cursor-pointer"
                @click="latchCategoryPopover"
              >
                <NuxtImg src="/add.svg" class="w-4 h-4 self-center" />
                <p class="text-sm text-blue-500 font-medium leading-[20px]">
                  Add Subcategory
                </p>
              </div>
            </div>
            <!-- Grid Layout for larger screens -->
            <div class="analytics-summary-grid w-full hidden lg:grid">
              <AnalyticsSubCategoryCard
                v-for="category in categories"
                :key="category.id"
                :setup="category"
                class="analytics-card"
              />
            </div>
            <!-- Carousel Layout for mobile screens -->
            <div class="analytics-summary-carousel w-full lg:hidden">
              <Carousel :wrap-around="false" :breakpoints="breakpoints">
                <Slide
                  v-for="(category, index) in chunkedCategories"
                  :key="index"
                  class
                >
                  <div class="flex gap-2 w-full">
                    <AnalyticsSubCategoryCard
                      v-for="item in category"
                      :key="item.id"
                      :setup="item"
                      class="analytics-card"
                    />
                  </div>
                </Slide>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div class="grow p-6 border-grey-200 rounded-xl xl:border">
        <div class="flex justify-between">
          <p class="self-center">Transaction History</p>
          <div
            class="py-3 flex px-3.5 rounded-xl cursor-pointer gap-2 justify-between border-grey-200 border text-grey-500"
            v-if="transactions.length !== 0"
          >
            <p>Filter by</p>
            <NuxtImg src="/filter.svg" class="w-4 h-4 self-center" />
          </div>
        </div>

        <div
          class="overflow-y-scroll h-[500px]"
          v-if="transactions.length !== 0"
        >
          <AnalyticsSubTransactionHistory
            v-for="transaction in transactions"
            :key="transaction.id"
            :transaction="transaction"
          />
        </div>

        <div
          class="py-3 xl:pt-12 mt-10 xl:mt-[50%] flex flex-col justify-center"
          v-else
        >
          <div class="w-[60px] m-auto mb-1">
            <NuxtImg src="/recent-transaction.svg" class="w-full" />
          </div>
          <div
            class="text-center text-navyBlue-900 lato-medium text-sm mb-1"
            id="noTransaction"
          >
            Made a transaction today?
          </div>
          <div class="text-xs text-grey-500 text-center">
            Add your expenses to view & track a your transactions
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>

  <AccountPopoversSuggestSubcategoryPopover
    :setup="{
      openModal: openCategorySuggestionModal,
    }"
    @close-add-subcategory-popover="latchCategoryPopover"
  />
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import DonutChartSubCategory from './DonutChartSubCategory.vue';
import { ref } from 'vue';

const categories = ref([
  { id: 1, name: 'Groceries', amount: '1500' },
  { id: 2, name: 'Restaurant & Fast Food', amount: '0.00' },
  { id: 3, name: 'Bar & Cafe', amount: '0.00' },
]);

const openCategorySuggestionModal = ref(false);
const latchCategoryPopover = () => {
  openCategorySuggestionModal.value = !openCategorySuggestionModal.value;
};

const chunkArray = (array: any[], chunkSize: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const chunkedCategories = chunkArray(categories.value, 1);

const breakpoints = {
  0: { itemsToShow: 1.3, snapAlign: 'center' },
  640: { itemsToShow: 1.3, snapAlign: 'center' },
  768: { itemsToShow: 1.3, snapAlign: 'center' },
  1024: { itemsToShow: 1, snapAlign: 'center' },
  1280: { itemsToShow: 1, snapAlign: 'center' },
  1440: { itemsToShow: 1, snapAlign: 'center' },
};

const transactions = [
  // {
  //   id: 1,
  //   date: 'Today - 25/04/2023',
  //   details: [
  //     {
  //       description: 'Groceries',
  //       amount: '₦ 12,000',
  //       timestamp: 'Sun, 16 Jan',
  //     },
  //     {
  //       description: 'Restaurant & Fast Food',
  //       amount: '₦ 12,000',
  //       timestamp: 'Sun, 16 Jan',
  //     },
  //   ],
  // },
  // {
  //   id: 1,
  //   date: 'Yesterday - 24/04/2023',
  //   details: [
  //     {
  //       description: 'Groceries',
  //       amount: '₦ 12,000',
  //       timestamp: 'Sun, 16 Jan',
  //     },
  //     {
  //       description: 'Restaurant & Fast Food',
  //       amount: '₦ 12,000',
  //       timestamp: 'Sun, 16 Jan',
  //     },
  //     {
  //       description: 'Bar & Cafe',
  //       amount: '₦ 12,000',
  //       timestamp: 'Sun, 16 Jan',
  //     },
  //   ],
  // },
];
</script>

<style lang="css" scoped>
/* Grid layout styles */
.analytics-summary-grid {
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.analytics-card {
  /* margin-bottom: 16px; */
}

/* Carousel styles */
.analytics-summary-carousel :deep(.carousel__viewport) .analytics-card {
  /* margin-right: 8px; */
}

.analytics-summary-carousel
  :deep(.carousel__viewport:last-child)
  .analytics-card {
  margin-right: 3px;
}

.analytics-summary-carousel :deep(button.carousel__next),
.analytics-summary-carousel :deep(button.carousel__prev) {
  display: none;
}

.analytics-summary-carousel :deep(.carousel__pagination) {
  margin: 8px 0px 0px 0px;
}

.analytics-summary-carousel
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

.analytics-summary-carousel
  :deep(
    .carousel__pagination
      .carousel__pagination-item
      button.carousel__pagination-button
  ) {
  padding: 0;
  margin-right: 4px;
}

.analytics-summary-carousel
  :deep(
    .carousel__pagination
      .carousel__pagination-item:last-child
      button.carousel__pagination-button
  ) {
  padding: 0;
  margin-right: 0px;
}

.analytics-summary-carousel
  :deep(
    .carousel__pagination
      .carousel__pagination-item
      button.carousel__pagination-button.carousel__pagination-button--active::after
  ) {
  background-color: #101828;
}

.analytics-summary-carousel :deep(.carousel__slide) {
  /* width: 339px !important; */
}

@media (min-width: 1280px) {
  .analytics-summary-carousel
    :deep(.carousel__pagination .carousel__pagination-item) {
    display: none;
  }
}

@media (min-width: 1440px) {
  .analytics-summary-carousel :deep(.carousel__slide) {
    width: 170px !important;
  }
}
</style>
