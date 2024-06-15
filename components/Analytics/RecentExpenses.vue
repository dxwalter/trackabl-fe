<template>
  <div>
    <div class="flex justify-between" data-test-component="true">
      <div class="lato-semi-bold text-navyBlue-900 mb-2 xl:text-lg">
        Recent Transaction
      </div>

      <NuxtLink
        to="/account/analytics"
        class="lato-semi-bold text-blue-500 underline view-all-link"
        style="text-underline-offset: 4px"
      >
        View All
      </NuxtLink>
    </div>
    <!-- no recent expense -->
    <div
      class="py-3 xl:pt-12 flex flex-col justify-center"
      v-if="!recentTransactions.length"
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
    <!-- 00 -->
    <div class="py-5" v-if="recentTransactions?.length">
      <NuxtLink
        :to="`/account/expense/${expense.id}`"
        class="flex justify-between mb-6"
        v-for="expense in recentTransactions"
        :key="expense.id"
      >
        <div class="flex self-center">
          <div
            class="w-[36px] h-[36px] rounded-full flex justify-center items-center p-2 self-center mr-3"
            :style="{ backgroundColor: expense.category.color }"
          >
            <NuxtImg :src="expense.category.icon" class="w-full" />
          </div>
          <div class="self-center flex flex-col">
            <div class="lato-medium text-base text-navyBlue-900 mb-1">
              {{ expense.subactegoryName }}
            </div>
            <div class="text-xs text-grey-500">
              {{ expense.category.name }}
            </div>
          </div>
        </div>
        <div class="self-center">
          <div class="lato-medium text-base text-navyBlue-900 mb-1">
            {{ expense.expenseCurrency }} {{ expense.expenseAmount }}
          </div>
          <div class="text-xs text-grey-500 text-right">
            {{ expense.expenseDate }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';

interface Expense {
  id: number;
  subactegoryName: string;
  category: {
    name: string;
    color: string;
    icon: string;
  };
  expenseCurrency: string;
  expenseAmount: string;
  expenseDate: string;
}

const props = withDefaults(
  defineProps<{
    recentTransactions: Expense[];
  }>(),
  {
    recentTransactions: () => [
      {
        id: 1,
        subactegoryName: 'Cooking gas',
        category: {
          name: 'Housing',
          color: '#f79009',
          icon: '/house-category-icon.svg',
        },
        expenseCurrency: '₦',
        expenseAmount: '36,000',
        expenseDate: 'Sun, 16 Jan',
      },
      {
        id: 2,
        subactegoryName: 'A/C Repair',
        category: {
          name: 'Car',
          color: '#12B76A',
          icon: '/car-category.svg',
        },
        expenseCurrency: '₦',
        expenseAmount: '12,000,000',
        expenseDate: 'Sun, 16 Jan',
      },
      {
        id: 3,
        subactegoryName: 'Bolu Upkeep',
        category: {
          name: 'Family',
          color: '#004EC1',
          icon: '/family-category.svg',
        },
        expenseCurrency: '₦',
        expenseAmount: '10,000',
        expenseDate: 'Sun, 16 Jan',
      },
    ],
  }
);
</script>

<style></style>
