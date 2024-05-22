<template>
  <div
    class="4xl:flex 4xl:justify-center 4xl:align-center 4xl:w-vw 4xl:h-screen"
  >
    <div class="lg:w-[400px] m-auto xl:w-full 2xl:w-[492px]">
      <div class="flex justify-between mb-6 2xl:mb-14">
        <div class="w-[20px] self-center">
          <NuxtLink to="/auth">
            <NuxtImg src="/arrow-left.svg" class="w-full" />
          </NuxtLink>
        </div>

        <div class="flex self-center"></div>
      </div>

      <!-- welcome -->
      <div class="flex text-nav-blue-900 lato-semi-bold text-2xl mb-2">
        <span class="mr-2">Reset Password</span>
        <span>🔄</span>
      </div>
      <div class="mb-8 text-grey-700 leading-6">
        Update your new password below.
      </div>
      <!-- form -->
      <div>
        <form @submit.prevent="logUserIn">
          <div class="full mb-5">
            <AuthPasswordField
              :setup="{
                label: 'New Password',
                isRequired: true,
                placeholder: 'Enter your new password',
                id: 'ChangeNewPassword',
                showGuideLinesOnActive: true,
              }"
              @new-password-state="getNewPassword"
            />
          </div>
          <div class="full mb-14">
            <AuthPasswordField
              class="mb-1.5"
              :setup="{
                label: 'Confirm New Password',
                isRequired: true,
                placeholder: 'Password must match',
                id: 'ConfirmNewPassword',
                showGuideLinesOnActive: false,
              }"
              @new-password-state="getConfirmedPassword"
            />
            <div class="text-red-600 lato-medium text-xs">
              Oops! The password doesn’t match. Try again
            </div>
          </div>
          <div>
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
                <NuxtImg src="/button-loader.svg" class="w-full" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <PasswordRecoverySuccessModal
    :setup="{
      open: false,
    }"
  />
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "auth-page-layout",
});

import PasswordRecoverySuccessModal from "@/components/Modals/PasswordRecoverySuccess.vue";

import { useFormInputManipulator } from "@/composables/FormInputManipulator";
const { HidePassword, ShowPassword } = useFormInputManipulator();

const isPasswordVisible = ref(false);
const isFormSubmitted = ref(false);

const getConfirmedPassword = (data: { status: boolean; data: string }) => {
  // console.log(data);
};
const getNewPassword = (data: { status: boolean; data: string }) => {
  // console.log(data);
};

const logUserIn = () => {
  useNuxtApp().$toast.success(
    `<div class="toastHeader lato-semi-bold text-base mb-2">Uh-uh! This email is not valid</div><div class="toastBody text-sm lato-regular">It looks like there is already an account with this email address. Try to login or use a different email address</div>`
  );
};
</script>
