<template>
  <div class="4xl:flex 4xl:justify-center 4xl:align-center px-[18px]">
    <div class="flex justify-between mb-6 2xl:mb-14">
      <div class="w-[20px] self-center">
        <NuxtLink to="/auth">
          <NuxtImg src="/arrow-left.svg" class="w-full" />
        </NuxtLink>
      </div>

      <div class="flex self-center"></div>
    </div>

    <div>
      <div class="lato-semi-bold text-2xl text-navyBlue-900 mb-6">
        Add Expense
      </div>
      <div><InputsExpenseInput @expense-amount="getExpenseAmount" /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "add-expense",
});

const getExpenseAmount = (data: number) => {
  // console.log(data);
};
</script>

<style></style>
