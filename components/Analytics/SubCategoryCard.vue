<template>
  <div
    class="border mr-2 grow rounded-xl xl:border border-grey-200 rounded-bl-none text-center py-3 px-4"
  >
    <div class="flex justify-center gap-2">
      <div class="w-2.5 h-2.5 rounded-[50%] bg-[#F04438] self-center"></div>
      <p class="text-sm text-grey-900 self-center">{{ props.setup.name }}</p>
    </div>
    <div class="flex justify-center text-center mt-2 lato-semi-bold">
      <sup class="text-sm mr-[2px] top-[-4px]">₦</sup>
      <div class="text-[18px]">{{ props.setup.amount }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  setup: {
    category: object;
  };
}>();
</script>

<style lang="scss" scoped></style>
