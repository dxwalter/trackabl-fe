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
          <p class="text-2xl mb-8 text-navyBlue-900 lato-semibold">
            Change Password
          </p>

          <div class="full mb-8">
            <AuthPasswordField
              class="mb-1.5"
              :setup="{
                label: 'Old Password',
                isRequired: true,
                placeholder: 'Enter your old passsword',
                id: 'OldPassword',
              }"
            />
          </div>

          <div class="full mb-8">
            <AuthPasswordField
              class="mb-1.5"
              :setup="{
                label: 'New Password',
                isRequired: true,
                placeholder: 'Enter your new passsword',
                id: 'NewPassword',
                showGuideLinesOnActive: true,
              }"
            />
          </div>

          <div class="full mb-8">
            <AuthPasswordField
              class="mb-1.5"
              :setup="{
                label: 'Confirm New Password',
                isRequired: true,
                placeholder: 'Password must match',
                id: 'ConfirmPassword',
              }"
            />
          </div>

          <button
            class="p-4 bg-blue-500 w-full text-center rounded-xl text-white lato-medium hover:bg-blue-600 flex justify-center"
            :disabled="isFormSubmitted"
            :class="{
              'is-loading': isFormSubmitted,
            }"
            type="submit"
          >
            <div class="button-text">Continue</div>
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
