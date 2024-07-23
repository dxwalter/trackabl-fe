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
        <form class="" @submit.prevent="createCategory">
          <div class="mb-4">
            <div
              class="flex justify-between mb-1.5 text-navyBlue-900 text-sm lato-medium"
            >
              <div class="">Category Name</div>
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

          <div class="mb-[50px]">
            <div class="mb-1.5 text-navyBlue-900 text-sm lato-medium">Note</div>
            <textarea
              placeholder="Give a description"
              class="border rounded-xl border-grey-300 w-full px-[14px] py-[10px] text-grey-500 h-[86px] blue-active-form-field"
              v-model="form.description"
            ></textarea>
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
const emit = defineEmits(['closeAddCategoryPopover']);

const props = defineProps<{
  setup: {
    openModal: boolean;
  };
}>();

// const categoryName = ref('');
// const note = ref('');

const CloseModal = () => {
  emit('closeAddCategoryPopover');
};

const isPending = ref(false);
const form = ref({
  name: '',
  description: '',
  trial_count: 0,
});

const createCategory = async () => {
  if (isPending.value) return; //
  isPending.value = true;
  console.log(form.value);
  // const data = await AuthService.login();

  const { data, error } = await useMyFetch('/category/suggestion', {
    method: 'POST',
    body: form.value,
  });
  console.log(data.value);
  // console.log(error);
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
