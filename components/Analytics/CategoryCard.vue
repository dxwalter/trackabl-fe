<template>
  <NuxtLink
    :to="`/account/category/${props.setup.id}`"
    class="border w-[170px] rounded-xl xl:border border-grey-200 rounded-bl-none text-center py-3 px-4"
  >
    <p class="text-sm text-grey-900">{{ props.setup.name }}</p>
    <img :src="props.setup.icon" class="w-9 mx-auto mt-2" />
    <div class="flex justify-center text-center mt-2 lato-semi-bold">
      <sup class="text-sm mr-[2px] top-[-4px]">₦</sup>
      <div class="text-[18px]">{{ props.setup.amount }}</div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  setup: {
    category: object;
  };
}>();
</script>

<style lang="scss" scoped></style>
