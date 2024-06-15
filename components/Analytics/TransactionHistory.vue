<template>
  <div
    class="p-6 border-grey-200 flex mt-4 justify-between rounded-xl xl:border rounded-bl-none"
  >
    <div class="flex gap-4">
      <div
        class="w-2.5 h-2.5 rounded-[50%] self-center"
        :style="{ backgroundColor: transaction.label }"
      ></div>
      <div class="">
        <p class="text-grey-900 font-medium mb-1">
          {{ transaction.description }}
        </p>
        <p class="text-grey-500 text-xs">{{ transaction.category }}</p>
      </div>
    </div>

    <div class="">
      <p class="text-grey-900 font-medium mb-1">{{ transaction.amount }}</p>
      <p class="text-grey-500 text-xs">{{ transaction.date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
interface History {
  id: number;
  description: string;
  category: string;
  amount: string;
  date: string;
}

const props = withDefaults(
  defineProps<{
    transaction: History[];
  }>(),
  {
    transaction: () => [
      {
        id: 1,
        description: 'Cooking gas',
        amount: '₦ 12,000',
        category: 'Housing',
        date: 'Sun, 16 Jan',
        label: '#F79009',
      },
    ],
  }
);
</script>

<style scoped></style>
