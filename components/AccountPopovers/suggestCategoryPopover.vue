<template>
  <ClientOnly>
    <div>
      <AccountModal
        @close-modal="CloseModal()"
        :setup="{
          modalActive: props.setup.openModal,
          modalTitle: 'Create Expense Category',
        }"
      >
        <form class="">
          <div class="mb-4">
            <div
              class="flex justify-between mb-1.5 text-navyBlue-900 text-sm lato-medium"
            >
              <div class="">Category Name</div>
              <div>{{ categoryName.trim().length }}/20</div>
            </div>
            <input
              required
              type="text"
              class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field"
              placeholder="Enter short name"
              v-model="categoryName"
            />
          </div>

          <div class="mb-[50px]">
            <div class="mb-1.5 text-navyBlue-900 text-sm lato-medium">Note</div>
            <textarea
              placeholder="Give a description"
              class="border rounded-xl border-grey-300 w-full px-[14px] py-[10px] text-grey-500 h-[86px] blue-active-form-field"
            ></textarea>
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
const emit = defineEmits(["closeAddCategoryPopover"]);

const props = defineProps<{
  setup: {
    openModal: boolean;
  };
}>();

const categoryName = ref("");

const CloseModal = () => {
  emit("closeAddCategoryPopover");
};
</script>

<style></style>
