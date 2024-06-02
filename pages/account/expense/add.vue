<template>
  <div
    class="lg:mt-20 xl:mt-0 lg:w-[545px] lg:m-auto lg:p-8 lg:border border-grey-200 xl:box-shadow"
  >
    <div
      class="4xl:flex flex-col 4xl:justify-center 4xl:align-center px-[18px]"
    >
      <div class="flex justify-between mb-6 2xl:mb-14 w-full xl:hidden">
        <div class="w-[20px] self-center">
          <NuxtLink to="/auth">
            <NuxtImg src="/arrow-left.svg" class="w-full" />
          </NuxtLink>
        </div>

        <div class="flex self-center"></div>
      </div>

      <div>
        <div
          class="lato-semi-bold text-2xl text-navyBlue-900 mb-6 xl:text-center"
        >
          Add Expense
        </div>
        <div class="mb-6">
          <InputsExpenseInput @expense-amount="getExpenseAmount" />
        </div>
        <div class="mb-4">
          <InputsCategorySelector
            @set-selected-ids="getCategoryIds"
            @open-suggestion="openSuggestion"
          />
        </div>
        <div class="mb-4">
          <InputsDateSelector />
        </div>
        <div class="mb-4">
          <InputsFileSelector />
        </div>
        <div class="mb-14">
          <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">Note</div>
          <textarea
            placeholder="Give a description"
            class="border rounded-xl border-grey-300 w-full px-[14px] py-[10px] text-grey-500 h-[86px] blue-active-form-field"
          ></textarea>
        </div>
        <div class="flex gap-4">
          <button
            class="w-full text-navyBlue-900 lato-medium py-3 px-4 border rounded-xl bg-white border-grey-300 hover:bg-grey-200"
          >
            Cancel
          </button>
          <button
            class="w-full text-white bg-blue-500 py-3 px-4 rounded-xl border-blue-400 hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
  <AccountPopoversSuggestCategoryPopover
    :setup="{
      openModal: openCategorySuggestionModal,
    }"
    @close-add-category-popover="latchCategoryPopover"
  />

  <AccountPopoversSuggestSubcategoryPopover
    :setup="{
      openModal: openSubcategorySuggestionModal,
      categoryId: categoryIdForSuggestion,
    }"
    @close-add-subcategory-popover="latchSubCategoryPopover"
  />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "add-expense",
});

const openCategorySuggestionModal = ref(false);
const latchCategoryPopover = () => {
  openCategorySuggestionModal.value = !openCategorySuggestionModal.value;
};

const openSubcategorySuggestionModal = ref(false);
const categoryIdForSuggestion = ref<null | number>(null);
const latchSubCategoryPopover = () => {
  openSubcategorySuggestionModal.value = !openSubcategorySuggestionModal.value;
};
const openSuggestion = (data: { type: string; categoryId?: number }) => {
  if (data.type === "category") {
    latchCategoryPopover();
  } else {
    categoryIdForSuggestion.value = data.categoryId ? data.categoryId : null;
    latchSubCategoryPopover();
  }
};

const getExpenseAmount = (data: number) => {
  // console.log(data);
};

const getCategoryIds = (data: {
  categoryId: number;
  subcategoryId: number;
}) => {};
</script>

<style></style>
