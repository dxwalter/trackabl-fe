<template>
  <ClientOnly>
    <div class="flex gap-12 flex-col xl:flex-row">
      <div class="xl:w-3/5">
        <div class="w-full p-6 border-grey-200 rounded-xl xl:border">
          <donut-chart />
        </div>
        <div>
          <div
            class="w-full flex flex-wrap gap-2 p-6 mt-6 border-grey-200 rounded-xl xl:border"
          >
            <div class="flex space-between justify-between w-full">
              <p class="text-grey-900 font-semibold">Categories</p>
              <div
                class="flex gap-[2px] px-2 py-1 border-b-2 border-blue-500 cursor-pointer"
                @click="latchCategoryPopover"
              >
                <img src="~/assets/img/add.svg" class="w-4 h-4 self-center" />
                <p class="text-sm text-blue-500 font-medium leading-[20px]">
                  Add
                </p>
              </div>
            </div>
            <!-- Grid Layout for larger screens -->
            <div class="analytics-summary-grid w-full hidden lg:grid">
              <AnalyticsCategoryCard
                v-for="category in categories"
                :key="category.id"
                :setup="category"
                class="analytics-card"
              />
            </div>
            <!-- Carousel Layout for mobile screens -->
            <div class="analytics-summary-carousel w-full lg:hidden">
              <Carousel :wrap-around="true" :breakpoints="breakpoints">
                <Slide
                  v-for="(category, index) in chunkedCategories"
                  :key="index"
                  class
                >
                  <div class="flex gap-2">
                    <AnalyticsCategoryCard
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
      <div class="w-full p-6 border-grey-200 rounded-xl xl:border">
        <p>Transaction History</p>
        <AnalyticsTransactionHistory
          v-for="transaction in transactions"
          :key="transaction.id"
          :transaction="transaction"
          v-if="transactions.length !== 0"
        />

        <div
          class="py-3 xl:pt-12 mt-10 xl:mt-[50%] flex flex-col justify-center"
          v-else
        >
          <div class="w-[60px] m-auto mb-1">
<<<<<<< HEAD
            <img src="~/assets/img/recent-transaction.svg" class="w-full" />
=======
            <img src="/assets/img/recent-transaction.svg" class="w-full" />
>>>>>>> temp-branch
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

        <button
          class="py-2 px-4 border-blue-500 border rounded-xl text-blue-500 font-medium w-full mt-8"
          v-if="transactions.length !== 0"
        >
          Load more Transaction
        </button>
      </div>
    </div>
  </ClientOnly>

  <AccountPopoversSuggestCategoryPopover
    :setup="{
      openModal: openCategorySuggestionModal,
    }"
    @close-add-category-popover="latchCategoryPopover"
  />
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import DonutChart from "./DonutChart.vue";
import { ref } from "vue";

const categories = ref([
  { id: 1, name: "Food & Drinks", amount: "1500", icon: "food-icon.svg" },
  { id: 2, name: "Housing", amount: "0.00", icon: "food-icon.svg" },
  { id: 3, name: "Shopping", amount: "0.00", icon: "food-icon.svg" },
  { id: 4, name: "Family", amount: "0.00", icon: "food-icon.svg" },
  { id: 5, name: "Healthcare", amount: "0.00", icon: "food-icon.svg" },
  { id: 6, name: "Entertainment", amount: "0.00", icon: "food-icon.svg" },
  { id: 7, name: "Transportation", amount: "0.00", icon: "food-icon.svg" },
  { id: 8, name: "Travel/Vacation", amount: "0.00", icon: "food-icon.svg" },
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

const chunkedCategories = chunkArray(categories.value, 2);

const breakpoints = {
  0: { itemsToShow: 1, snapAlign: "center" },
  640: { itemsToShow: 1, snapAlign: "center" },
  768: { itemsToShow: 1, snapAlign: "center" },
  1024: { itemsToShow: 1, snapAlign: "center" },
  1280: { itemsToShow: 1, snapAlign: "center" },
  1440: { itemsToShow: 1, snapAlign: "center" },
};

const transactions = [
  {
    id: 1,
    description: "Cooking gas",
    amount: "₦ 12,000",
    category: "Housing",
    date: "Sun, 16 Jan",
    label: "#F79009",
  },
  {
    id: 2,
    description: "A/C Repair",
    amount: "₦ 36,000",
    category: "Car",
    date: "Sun, 16 Jan",
    label: "#12B76A",
  },
  {
    id: 3,
    description: "Bolu Upkeep",
    amount: "₦ 10,000",
    category: "Family",
    date: "Sun, 16 Jan",
    label: "#004EC1",
  },
  {
    id: 4,
    description: "Food",
    amount: "₦ 12,000",
    category: "Housing",
    date: "Sun, 16 Jan",
    label: "#F79009",
  },
  {
    id: 5,
    description: "A/C Repair",
    amount: "₦ 36,000",
    category: "Car",
    date: "Sun, 16 Jan",
    label: "#12B76A",
  },
  {
    id: 6,
    description: "Internet",
    amount: "₦ 12,000",
    category: "Housing",
    date: "Sun, 16 Jan",
    label: "#F79009",
  },
];
</script>

<style lang="css" scoped>
/* Grid layout styles */
.analytics-summary-grid {
  grid-template-columns: repeat(4, 1fr);
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
  margin-right: 0px;
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
