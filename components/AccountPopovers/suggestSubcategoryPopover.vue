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
              <img :src="categoryDetails[0].icon" class="w-full" />
            </div>
          </div>

          <div class="lato-semi-bold text-2xl text-grey-500">
            {{ categoryDetails[0].name }}
          </div>
        </div>
        <form class="" @submit.prevent="createSubCategory">
          <div class="mb-4">
            <div
              class="flex justify-between mb-1.5 text-navyBlue-900 text-sm lato-medium"
            >
              <div class="">Subcategory Name</div>
              <div>{{ form.name.trim().length }}/20</div>
            </div>
            <input
              required
              type="text"
              class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field"
              placeholder="Enter short name"
              v-model="form.name"
            />
          </div>

          <div class="mb-4">
            <div class="mb-1.5 text-navyBlue-900 text-sm lato-medium">Note</div>
            <textarea
              placeholder="Give a description"
              class="border rounded-xl border-grey-300 w-full px-[14px] py-[10px] text-grey-500 h-[86px] blue-active-form-field"
              v-model="form.description"
            ></textarea>
          </div>

          <div class="mb-[50px] flex">
            <div class="mr-2">
              <div class="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-500 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  v-model="form.isPublic"
                />
              </div>
            </div>
            <label for="default-checkbox" class="text-grey-500 text-sm">
              I want this subcategory to be available to others
            </label>
          </div>

          <div>
            <button
              class="w-full text-white bg-blue-500 py-3 px-4 rounded-xl border-blue-400 hover:bg-blue-700 flex justify-center"
            >
              <div class="button-text" v-if="!isPending">Done</div>
              <div class="w-6" v-else>
                <img src="/assets/img/button-loader.svg" class="w-full" />
              </div>
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
const categoryStore = useCategoryStore();

const emit = defineEmits(['closeAddSubcategoryPopover']);

const props = defineProps<{
  setup: {
    openModal: boolean;
    categoryId: number;
  };
}>();

// console.log(props.setup.categoryId);

// const subcategoryName = ref('');

const categoryDetails = computed(() =>
  categoryStore.categoryList.filter((cat) => cat.id === props.setup.categoryId)
);

// const changeIsPublic = () => {
//   form.value.isPublic === false ? (form.value.isPublic = true) : false;
//   console.log(form.value.isPublic);
// };

const CloseModal = () => {
  emit('closeAddSubcategoryPopover');
};

const isPending = ref(false);
const form = ref({
  name: '',
  description: '',
  categoryId: props?.setup?.categoryId,
  isPublic: false,
  trial_count: 0,
});

const createSubCategory = async () => {
  if (isPending.value) return; //
  isPending.value = true;
  console.log(form.value);
  // const data = await AuthService.login();

  const { data, error } = await useMyFetch('/category/subcategory-suggestion', {
    method: 'POST',
    body: form.value,
  });
  // console.log(data.value);
  // // console.log(error);
  if (data.value) {
    useNuxtApp().$toast.success(
      `<div class="toastHeader lato-semi-bold text-base mb-2"></div><div class="toastBody text-sm lato-regular">${data.value.message}</div>`
    );
    CloseModal();
    isPending.value = false;
    form.value.trial_count += 1;
  } else {
    useNuxtApp().$toast.error(
      `<div class="toastHeader lato-semi-bold text-base mb-2">${error.value.data.error}</div><div class="toastBody text-sm lato-regular">${error.value.data.message}</div>`
    );
    isPending.value = false;
    form.value.trial_count += 1;
  }
};
</script>

<style></style>
