<template>
  <div>
    <div
      class="mb-8 hover:bg-grey-200 cursor-pointer card-border-radius border border-grey-200 w-full px-6 py-3 flex"
      @click="changeCategory"
    >
      <div
        class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg self-center"
      >
        <div class="w-[24px]">
          <NuxtImg src="/arrow-left.svg" class="w-full" />
        </div>
      </div>
      <div class="lato-medium text-navyBlue-900 self-center">
        Change category
      </div>
    </div>

    <div
      class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4 hover:bg-grey-200 cursor-pointer"
      v-for="subcategory in subcategoryList"
      :key="subcategory.id"
      @click="setSubcategory(subcategory.id)"
    >
      <div class="flex self-center">
        <div
          class="w-[36px] h-[36px] rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
          :style="{
            backgroundColor: subcategory.color,
          }"
        >
          <div class="w-[20px]">
            <NuxtImg :src="subcategory.icon" class="w-full" />
          </div>
        </div>

        <div class="lato-medium text-navyBlue-900 self-center">
          {{ subcategory.name }}
        </div>
      </div>
      <div class="w-[16px] self-center">
        <NuxtImg src="/caret-right.svg" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Subcategory } from "@/types/category";
const emit = defineEmits(["setSelectedSubCategory", "changeCategory"]);
const props = defineProps<{
  setup: {
    categoryId: number;
  };
}>();

const subcategoryList = computed(() => {
  const category = list.filter(
    (category) => category.id === props.setup.categoryId
  );

  const subcategories: Subcategory[] & { icon: string }[] = [];

  category[0].subcategories.forEach((element) => {
    subcategories.push({
      ...element,
      icon: category[0].icon,
    });
  });

  return subcategories;
});

import { useCategoryStore } from "@/stores/category";
const { list } = useCategoryStore();

const setSubcategory = (id: number) => {
  emit("setSelectedSubCategory", id);
};
const changeCategory = () => {
  emit("changeCategory");
};
</script>

<style></style>
