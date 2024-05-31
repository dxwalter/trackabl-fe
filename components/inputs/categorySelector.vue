<template>
  <div>
    <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">Category</div>
    <div class="">
      <div
        class="flex justify-between w-full py-[10px] px-[14px] border rounded-xl border-grey-300"
      >
        <div class="w-full flex self-center" v-if="isSelected">
          <div class="mr-2 w-[28px]">
            <NuxtImg src="/food-category.svg" class="w-full" />
          </div>
          <div class="flex justify-between w-full">
            <div class="text-navyBlue-900 lato-medium">
              Restaurant & Fast food
            </div>
          </div>
        </div>

        <div class="w-full flex self-center text-grey-500" v-if="!isSelected">
          Select a category
        </div>

        <div class="w-[20px] self-center">
          <NuxtImg src="/caret-thin-down.svg" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isSelected = ref(false);
</script>

<style></style>
