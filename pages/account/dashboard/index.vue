<template>
  <div>
    <div class="mb-6 px-[18px] xl:px-9">
      <div class="mb-1">
        <span class="text-sm lato-medium text-grey-500 mr-1 xl:text-base"
          >Good Morning!</span
        >
        <span>☀️</span>
      </div>
      <div class="lato-semi-bold text-navyBlue-900 xl:text-2xl">
        Adeola Adeyoyin
      </div>
    </div>
    <!-- Dashboard carousel-analytics -->
    <div class="pl-[18px] xl:px-9 mb-6 2xl:mb-12">
      <AnalyticsDashboardAnalyticsCarousel />
    </div>
    <div class="xl:flex px-[18px] xl:px-9 2xl:px-20">
      <!-- Quick links -->
      <div class="mb-6 xl:w-4/12 2xl:w-5/12 3xl:w-4/12 2xl:mr-8 3xl:mr-8">
        <div class="lato-semi-bold text-navyBlue-900 mb-2 xl:text-lg">
          Quick Links
        </div>
        <div class="flex xl:flex-col quicklinks-nav">
          <NuxtLink
            to="/account/expense/add"
            class="py-3 px-4 border border-grey-200 rounded-xl w-[186px] xl:w-[250px] 2xl:w-[418px] 3xl:w-full mr-2 xl:mr-0 block shrink-0 xl:mb-2"
          >
            <div class="w-[36px] mb-2">
              <NuxtImg src="/add-expense-quick-link.svg" class="w-full" />
            </div>
            <div class="lato-medium text-blue-500">Add Expense</div>
          </NuxtLink>

          <button
            class="py-3 px-4 border border-grey-200 rounded-xl w-[186px] 2xl:w-[418px] xl:w-[250px] 3xl:w-full mr-2 xl:mr-0 block shrink-0"
            @click="latchCategoryPopover"
          >
            <div class="w-[36px] mb-2">
              <NuxtImg src="/create-category-quick-link.svg" class="w-full" />
            </div>
            <div class="lato-medium text-blue-500 text-left">
              Create a Category
            </div>
          </button>
        </div>
      </div>
      <!-- Recent -->
      <div class="xl:w-8/12 2xl:w-7/12 3xl:w-7/12">
        <AnalyticsRecentExpenses />
      </div>
    </div>
  </div>

  <AccountPopoversSuggestCategoryPopover
    :setup="{
      openModal: openCategorySuggestionModal,
    }"
    @close-add-category-popover="latchCategoryPopover"
  />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "account",
});

const openCategorySuggestionModal = ref(false);
const latchCategoryPopover = () => {
  openCategorySuggestionModal.value = !openCategorySuggestionModal.value;
};
</script>
