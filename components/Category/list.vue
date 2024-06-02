<template>
  <div>
    <div
      class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4 hover:bg-grey-200 cursor-pointer"
      v-for="category in props.setup.categoryList"
      :key="category.id"
      @click="setCategory(category.id)"
    >
      <div class="flex self-center">
        <div
          class="w-[36px] h-[36px] rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
          :style="{
            backgroundColor: category.color,
          }"
        >
          <div class="w-[20px]">
            <NuxtImg :src="category.icon" class="w-full" />
          </div>
        </div>

        <div class="lato-medium text-navyBlue-900 mb-1 self-center">
          {{ category.name }}
        </div>
      </div>
      <div class="w-[16px] self-center">
        <NuxtImg src="/caret-right.svg" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Category } from "@/types/category";
const emit = defineEmits(["setSelectedCategory"]);
const props = defineProps<{
  setup: {
    categoryList: Category[];
  };
}>();

const setCategory = (id: number) => {
  emit("setSelectedCategory", id);
};
</script>

<style></style>
