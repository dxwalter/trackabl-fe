<template>
  <div>
    <ClientOnly>
      <Modal
        :setup="{
          modalActive: modalState,
        }"
        @close-modal="closeModal"
      >
        <div>
          <p class="text-2xl mb-4 text-navyBlue-900 lato-semibold">
            Confirm Account Deletion
          </p>

          <p class="lato-regular mb-8 text-grey-500">
            We’re sorry to see you go. Once your account is deleted, all your
            data will be permanently gone. To confirm deletion, type your email
            (adeola4real@gmail.com) below
          </p>
          <div class="full mb-8">
            <div class="full mb-5">
              <input
                required
                type="email"
                class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field"
                placeholder="Enter email"
              />
            </div>
          </div>

          <button
            class="p-4 bg-red-500 w-full text-center rounded-xl text-white lato-medium hover:bg-red-600 flex justify-center"
            :disabled="isFormSubmitted"
            :class="{
              'is-loading': isFormSubmitted,
            }"
            type="submit"
          >
            <div class="button-text">Delete</div>
            <div class="w-6 button-spinner">
              <img src="/assets/img/button-loader.svg" class="w-full" />
            </div>
          </button>

          <button
            class="p-4 w-full text-center rounded-xl text-grey-500 lato-medium flex justify-center"
            :disabled="isFormSubmitted"
            :class="{
              'is-loading': isFormSubmitted,
            }"
            type="submit"
            @click="closeModal"
          >
            <div class="button-text">Cancel</div>
            <div class="w-6 button-spinner">
              <img src="/assets/img/button-loader.svg" class="w-full" />
            </div>
          </button>
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

const emit = defineEmits(['close-modal']);

const modalState = ref(false);

const closeModal = () => {
  modalState.value = false;
  emit('close-modal');
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
