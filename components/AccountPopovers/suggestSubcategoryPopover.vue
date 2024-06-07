<template>
  <ClientOnly>
    <div>
      <AccountModal
        @close-modal="CloseModal()"
        :setup="{
          modalActive: props.setup.openModal,
          modalTitle: 'Create Expense Subcategory',
        }"
      >
        <div
          v-if="categoryDetails.length"
          class="flex justify-center mb-9 mt-10"
        >
          <div
            class="w-[36px] h-[36px] rounded-full flex justify-center items-center shrink-0 mr-[10px]"
            :style="{
              backgroundColor: categoryDetails[0].color,
            }"
          >
            <div class="w-[20px]">
              <NuxtImg :src="categoryDetails[0].icon" class="w-full" />
            </div>
          </div>

          <div class="lato-semi-bold text-2xl text-grey-500">
            {{ categoryDetails[0].name }}
          </div>
        </div>
        <form class="">
          <div class="mb-4">
            <div
              class="flex justify-between mb-1.5 text-navyBlue-900 text-sm lato-medium"
            >
              <div class="">Subcategory Name</div>
              <div>{{ subcategoryName.trim().length }}/20</div>
            </div>
            <input
              required
              type="text"
              class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field"
              placeholder="Enter short name"
              v-model="subcategoryName"
            />
          </div>

          <div class="mb-4">
            <div class="mb-1.5 text-navyBlue-900 text-sm lato-medium">Note</div>
            <textarea
              placeholder="Give a description"
              class="border rounded-xl border-grey-300 w-full px-[14px] py-[10px] text-grey-500 h-[86px] blue-active-form-field"
            ></textarea>
          </div>

          <div class="mb-[50px] flex">
            <div class="mr-2">
              <div class="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-500 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
            <label for="default-checkbox" class="text-grey-500 text-sm">
              I want this subcategory to be available to others
            </label>
          </div>

          <div>
            <button
              class="w-full text-white bg-blue-500 py-3 px-4 rounded-xl border-blue-400 hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        </form>
      </AccountModal>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { useCategoryStore } from '@/stores/category';
import { ref, computed } from 'vue';
const { list } = useCategoryStore();

const emit = defineEmits(['closeAddSubcategoryPopover']);

const props = defineProps<{
  setup: {
    openModal: boolean;
    categoryId: number;
  };
}>();

const subcategoryName = ref('');

const categoryDetails = computed(() =>
  list.filter((cat) => cat.id === props.setup.categoryId)
);

const CloseModal = () => {
  emit('closeAddSubcategoryPopover');
};
</script>

<style></style>
