<template>
  <p class="mt-6 text-[#101828]">{{ transaction.date }}</p>
  <div
    class="p-6 border-grey-200 flex mt-4 justify-between rounded-xl xl:border rounded-bl-none"
    v-for="(item, i) in transaction.details"
    :key="`details-${i}`"
  >
    <div class="flex gap-4">
      <div class="self-center">
        <p class="text-grey-900 font-medium">
          {{ item.description }}
        </p>
      </div>
    </div>

    <div class="">
      <p class="text-grey-900 font-medium mb-1">{{ item.amount }}</p>
      <p class="text-grey-500 text-xs">{{ item.date }}</p>
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

const props = defineProps({
  transaction: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped></style>
