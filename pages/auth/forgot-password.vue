<template>
  <div
    class="4xl:flex 4xl:justify-center 4xl:align-center 4xl:w-vw 4xl:h-screen"
  >
    <div class="lg:w-[400px] m-auto xl:w-full 2xl:w-[492px]">
      <div class="flex justify-between mb-6 2xl:mb-14">
        <div class="w-[20px] self-center">
          <NuxtLink to="/auth">
            <img src="/assets/img/arrow-left.svg" class="w-full" />
          </NuxtLink>
        </div>

        <div class="flex self-center"></div>
      </div>

      <!-- welcome -->
      <div class="flex text-navyBlue-900 lato-semi-bold text-2xl mb-2">
        <span class="mr-2">Forgot Password</span>
        <span>🔒</span>
      </div>
      <div class="mb-8 text-grey-700 leading-6">
        To help you reset your password, enter the email address you used in
        signing up and we’ll send you instructions.
      </div>
      <!-- form -->
      <div>
        <form @submit.prevent="logUserIn">
          <div class="full mb-14">
            <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">
              Email
            </div>
            <input
              required
              type="email"
              class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field"
              placeholder="Enter your email address"
            />
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
                <img src="/assets/img/button-loader.svg" class="w-full" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'auth-page-layout',
});

import { useFormInputManipulator } from '@/composables/FormInputManipulator';

const { HidePassword, ShowPassword } = useFormInputManipulator();

const isPasswordVisible = ref(false);
const isFormSubmitted = ref(false);

const mangePasswordVisibility = () => {
  if (isPasswordVisible.value) {
    HidePassword('SignInPassword');
  } else {
    ShowPassword('SignInPassword');
  }

  isPasswordVisible.value = !isPasswordVisible.value;
};

const logUserIn = () => {
  useNuxtApp().$toast.success(
    `<div class="toastHeader lato-semi-bold text-base mb-2">Uh-uh! This email is not valid</div><div class="toastBody text-sm lato-regular">It looks like there is already an account with this email address. Try to login or use a different email address</div>`
  );
};
</script>
