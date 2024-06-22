<template>
  <div>
    <ClientOnly>
      <Modal
        :setup="{
          modalActive: modalState,
        }"
        @close-modal="closeModal"
      >
        <div class="flex flex-col justify-center items-center">
          <div class="w-[198px] mb-6">
            <img src="/assets/img/successBadge.svg" class="w-full" />
          </div>
          <div
            class="text-navyBlue-900 mb-2 text-2xl text-center lato-semi-bold"
          >
            Success! Account Verfified.
          </div>
          <div class="text-center text-grey-500 text-base mb-[50px] w-[325px]">
            You have successfully created account with Trackabl. Get ready to
            unlock a world of innovative financial solutions and take control of
            your expenses.
          </div>
          <div class="w-full">
            <button
              class="p-4 bg-blue-500 w-full text-center rounded-xl text-white lato-medium hover:bg-blue-600 flex justify-center"
            >
              <div class="button-text">Awesome! Continue</div>
            </button>
          </div>
        </div>
      </Modal>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import Modal from '@/components/ModalComponent.vue';

const props = defineProps<{
  setup: {
    open: boolean;
  };
}>();

const modalState = ref(false);

const closeModal = () => {
  modalState.value = false;
};

watch(
  props,
  () => {
    if (props.setup.open) {
      modalState.value = true;
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<style></style>
