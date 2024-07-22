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
              @password-value="setPassword"
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
            <div
              class="text-red-600 lato-medium text-xs"
              v-if="confirmPassword !== newPassword"
            >
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
                <img src="/assets/img/button-loader.svg" class="w-full" />
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
  layout: 'auth-page-layout',
});

import PasswordRecoverySuccessModal from '@/components/Modals/PasswordRecoverySuccess.vue';

import { useFormInputManipulator } from '@/composables/FormInputManipulator';
import { useRoute, useRouter } from 'vue-router';

const { HidePassword, ShowPassword } = useFormInputManipulator();

const isPasswordVisible = ref(false);
const isFormSubmitted = ref(false);
const confirmPassword = ref('');
const newPassword = ref('');

const getConfirmedPassword = (data: { status: boolean; data: string }) => {
  confirmPassword.value = data.data;
};
const getNewPassword = (data: { status: boolean; data: string }) => {
  newPassword.value = data.data;
};

const setPassword = (e) => {
  form.value.password = e.target.value;
};

const isPending = ref(false);
const route = useRoute();
const router = useRouter();
console.log(route.query);
const form = ref({
  email: route.query.email,
  trial_count: 0,
  token: route.query.token,
  password: '',
});

const logUserIn = async () => {
  if (isPending.value) return; //
  isPending.value = true;
  console.log(form);
  // const data = await AuthService.login();

  const { data, error } = await useMyFetch('/auth/update-password', {
    method: 'PATCH',
    body: form.value,
  });
  console.log(data.value);
  console.log(error);
  if (data.value) {
    useNuxtApp().$toast.success(
      `<div class="toastHeader lato-semi-bold text-base mb-2"></div><div class="toastBody text-sm lato-regular">${data.value.message}</div>`
    );

    isPending.value = false;
    form.value.trial_count += 1;
    router.push('/auth');
  } else {
    useNuxtApp().$toast.error(
      `<div class="toastHeader lato-semi-bold text-base mb-2">${error.value.data.error}</div><div class="toastBody text-sm lato-regular">${error.value.data.message}</div>`
    );
    isPending.value = false;
    form.value.trial_count += 1;
  }
};
</script>
