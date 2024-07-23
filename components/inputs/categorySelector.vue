<template>
  <div>
    <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">Category</div>
    <div class="">
      <div
        class="flex justify-between w-full py-[10px] px-[14px] border rounded-xl border-grey-300 cursor-pointer"
        @click="openCategoryModal()"
      >
        <div class="w-full flex self-center" v-if="selectedCategory.length">
          <div
            class="w-[28px] h-[28px] rounded-full mr-2 flex justify-center items-center shrink-0 self-center"
            :style="{ backgroundColor: selectedCategory[0].color }"
          >
            <div class="w-[16px]">
              <img :src="selectedCategory[0].icon" class="w-full" />
            </div>
          </div>
          <div class="flex justify-between w-full self-center">
            <div class="text-navyBlue-900 lato-medium">
              {{ selectedCategory[0]?.name }} &
              {{ selectedCategory[0]?.subcategories[0]?.name }}
            </div>
          </div>
        </div>

        <div class="w-full flex self-center text-grey-500" v-else>
          Select a category
        </div>

        <div class="w-[20px] self-center">
          <img src="/assets/img/caret-thin-down.svg" class="w-full" />
        </div>
      </div>
    </div>
  </div>
  <AccountPopoversCategoryPopover
    :setup="{
      openModal: isCategoryPopoverOpen,
    }"
    @set-selected-ids="manageCategoryModal"
    v-if="isCategoryPopoverOpen"
    @open-suggestion="onOpenSuggestion"
  />
</template>

<script lang="ts" setup>
const emit = defineEmits(['setSelectedIds', 'openSuggestion']);

const selectedCategoryId = ref<number | null>(null);
const selectedSubcategoryId = ref<number | null>(null);

import { useCategoryStore } from '@/stores/category';
import type { Subcategory } from '@/types/category';
const { list } = useCategoryStore();

const selectedCategory = computed(() => {
  if (!selectedCategoryId.value || !selectedSubcategoryId.value) return [];
  const category = list.filter(
    (category) => category.id === selectedCategoryId.value
  );

  const newCategory = {
    ...category[0],
  };

  const subcategory: Subcategory[] = newCategory.subcategories.filter(
    (sub) => sub.id === selectedSubcategoryId.value
  );

  newCategory.subcategories = subcategory;

  return [{ ...newCategory }];
});

const isCategoryPopoverOpen = ref(false);
const manageCategoryModal = (data: {
  cateoryId: number | null;
  subcategoryId: number | null;
}) => {
  selectedCategoryId.value = data.cateoryId;
  selectedSubcategoryId.value = data.subcategoryId;

  if (data.cateoryId === null || data.subcategoryId === null) {
    useNuxtApp().$toast.info(
      `<div class="toastHeader lato-semi-bold text-base mb-2">Uh-uh 😉!</div><div class="toastBody text-sm lato-regular">Selecting a category and a subcategory is required</div>`
    );
    closeCategoryModal();
    return;
  }

  console.log('Here');
  emit('setSelectedIds', data);

  closeCategoryModal();
};

const onOpenSuggestion = (data: { type: string; categoryId?: number }) => {
  emit('openSuggestion', data);
  closeCategoryModal();
};

const closeCategoryModal = () => {
  isCategoryPopoverOpen.value = false;
};

const openCategoryModal = () => {
  isCategoryPopoverOpen.value = true;
};

onMounted(() => {
  selectedCategoryId.value = null;
  selectedSubcategoryId.value = null;
});
</script>

<style></style>
