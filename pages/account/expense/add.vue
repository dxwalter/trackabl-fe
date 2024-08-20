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
            <img src="/assets/img/arrow-left.svg" class="w-full" />
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
          <InputsExpenseInput
            @expense-amount="getExpenseAmount"
            @currencySelected="updateCurrency"
          />
        </div>
        <div class="mb-4">
          <InputsCategorySelector
            @set-selected-ids="getCategoryIds"
            @open-suggestion="openSuggestion"
          />
        </div>
        <div class="mb-4">
          <InputsDateSelector @getFormattedDate="getFormattedDate" />
        </div>
        <div class="mb-4">
          <InputsFileSelector @getFile="getFile" />
        </div>
        <div class="mb-14">
          <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">Note</div>
          <textarea
            placeholder="Give a description"
            class="border rounded-xl border-grey-300 w-full px-[14px] py-[10px] text-grey-500 h-[86px] blue-active-form-field"
            v-model="payload.note"
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
            @click.prevent="createExpense"
          >
            <div class="button-text" v-if="!isPending">Continue</div>
            <div class="w-6" v-else>
              <img src="/assets/img/button-loader.svg" class="w-full" />
            </div>
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
  layout: 'add-expense',
});

const payload = ref({
  categoryId: '',
  subcategoryId: '',
  expenseDate: '',
  currencyId: '',
  note: '',
  receipt: '',
  trial_count: 0,
  amount: '',
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
  if (data.type === 'category') {
    latchCategoryPopover();
  } else {
    categoryIdForSuggestion.value = data.categoryId ? data.categoryId : null;
    latchSubCategoryPopover();
  }
};

const isPending = ref(false);

const getExpenseAmount = (data: number) => {
  console.log(data);
  payload.value.amount = data;
};

const updateCurrency = (data) => {
  console.log(data);
  payload.value.currencyId = data.id;
};

const getCategoryIds = (data: { cateoryId: number; subcategoryId: number }) => {
  console.log(data);
  payload.value.categoryId = data?.cateoryId;
  payload.value.subcategoryId = data.subcategoryId;
};

const getFormattedDate = (data) => {
  payload.value.expenseDate = data;
};

const getFile = (data) => {
  payload.value.receipt = data;
  console.log(data);
};

const createExpense = async () => {
  console.log(payload.value);
  const formData = new FormData();
  formData.append('categoryId', +payload.value.categoryId);
  formData.append('subcategoryId', +payload.value.subcategoryId);
  formData.append('expenseDate', payload.value.expenseDate);
  formData.append('currencyId', +payload.value.currencyId);
  formData.append('note', payload.value.note);
  formData.append('receipt', payload.value.receipt[0]);
  formData.append('trial_count', +payload.value.trial_count);
  formData.append('amount', +payload.value.trial_count);

  const { data, error } = await useMyFetch('/expense', {
    method: 'POST',
    body: formData,
  });
  console.log(data.value);
  console.log(error);
  if (data.value) {
    useNuxtApp().$toast.success(
      `<div class="toastHeader lato-semi-bold text-base mb-2"></div><div class="toastBody text-sm lato-regular">${data.value.message}</div>`
    );

    payload.value = {
      categoryId: '',
      subcategoryId: '',
      expenseDate: '',
      currencyId: '',
      note: '',
      receipt: '',
      trial_count: 0,
      amount: '',
    };
  } else {
    useNuxtApp().$toast.error(
      `<div class="toastHeader lato-semi-bold text-base mb-2">${error.value.data.error}</div><div class="toastBody text-sm lato-regular">${error.value.data.message}</div>`
    );
    isPending.value = false;
  }
};
</script>

<style></style>
