<template>
  <div
    class="4xl:flex 4xl:justify-center 4xl:align-center 4xl:w-vw 4xl:h-screen"
  >
    <div class="lg:w-[400px] m-auto xl:w-full 2xl:w-[492px]">
      <div class="flex justify-between mb-6 2xl:mb-14">
        <div class="w-[20px] self-center">
          <NuxtLink to="/">
            <img src="/assets/img/arrow-left.svg" class="w-full" />
          </NuxtLink>
        </div>

        <div class="flex self-center">
          <span class="text-grey-500 mr-2">Don’t have an account?</span>
          <span
            ><NuxtLink to="/auth/sign-up" class="text-blue-500 lato-medium"
              >Sign Up</NuxtLink
            ></span
          >
        </div>
      </div>

      <!-- welcome -->
      <div class="flex text-navyBlue-900 lato-semi-bold text-2xl mb-8">
        <span class="mr-2">Welcome back </span>
        <span>👋🏽</span>
      </div>
      <!-- form -->
      <div>
        <!-- google -->
        <div>
          <div class="mb-4">
            <button
              class="flex justify-center w-full bg-white px-8 py-4 border rounded-xl border-grey-300"
            >
              <div class="w-[24px] mr-3 self-center">
                <img src="/assets/img/google-login-icon.svg" class="w-full" />
              </div>
              <span class="text-navyBlue-900 lato-medium self-center block"
                >Sign in with Google</span
              >
            </button>
          </div>
          <div class="mb-4 flex justify-between">
            <div class="w-5/12 border self-center text-grey-150"></div>
            <div class="text-sm w-1/12 text-center self-center">OR</div>
            <div class="w-5/12 border self-center text-grey-150"></div>
          </div>
        </div>
        <form @submit.prevent="logUserIn">
          <div class="full mb-5">
            <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">
              Email
            </div>
            <input
              required
              type="email"
              class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field"
              placeholder="Enter your email address"
              v-model="form.email"
            />
          </div>
          <div class="full mb-6">
            <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">
              Password
            </div>
            <div class="flex rounded-xl border border-grey-300 overflow-hidden">
              <input
                required
                type="password"
                class="w-full px-[14px] rounded-xl py-3 text-navyBlue-900 self-center password-field"
                id="SignInPassword"
                placeholder="Enter your password"
                v-model="form.password"
              />
              <div
                class="self-center h-full px-[14px] text-blue-700 text-sm underline cursor-pointer"
                style="text-underline-offset: 4px"
                @click="mangePasswordVisibility"
              >
                {{ isPasswordVisible ? 'Hide' : 'Show' }}
              </div>
            </div>
          </div>
          <div class="mb-14">
            <NuxtLink
              to="/auth/forgot-password"
              class="text-blue-600 lato-medium text-base"
              >Forgot Password?</NuxtLink
            >
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
              <div class="button-text" v-if="!isPending">Continue</div>
              <div class="w-6" v-else>
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
// import { AuthService } from '@/services/index.js';
definePageMeta({
  layout: 'auth-page-layout',
});

import { useFormInputManipulator } from '@/composables/FormInputManipulator';
import { ref } from 'vue';
import { useRuntimeConfig } from '#imports';
import { useRouter } from 'vue-router';
import { useMyFetch } from '@/composables/useMyFetch.ts';
import { useUserStore } from '@/stores/userStore.ts';

const config = useRuntimeConfig();
const apiBaseUrl = config.public.API_BASE_URL;
const userStore = useUserStore();

const { HidePassword, ShowPassword } = useFormInputManipulator();

const isPasswordVisible = ref(false);
const isFormSubmitted = ref(false);
const isPending = ref(false);
const router = useRouter();

const form = ref({
  email: '',
  password: '',
  trial_count: 0,
});

const mangePasswordVisibility = () => {
  if (isPasswordVisible.value) {
    HidePassword('SignInPassword');
  } else {
    ShowPassword('SignInPassword');
  }

  isPasswordVisible.value = !isPasswordVisible.value;
};

const logUserIn = async () => {
  if (isPending.value) return; //
  isPending.value = true;
  // const data = await AuthService.login();

  const { data, error } = await useMyFetch('/auth/login', {
    method: 'POST',
    body: form.value,
  });
  console.log(data.value);
  console.log(error);
  if (data.value) {
    useNuxtApp().$toast.success(
      `<div class="toastHeader lato-semi-bold text-base mb-2"></div><div class="toastBody text-sm lato-regular">${data.value.message}</div>`
    );

    if (data.value.data.isEmailVerified === false) {
      router.push('/auth/email-verification');
      localStorage.setItem('email', form.value.email);
      localStorage.setItem('user', JSON.stringify(data.value.data));
    } else {
      userStore.SET_USER(data.value.data);
      localStorage.setItem('token', data.value.data.token);

      router.push('/account/dashboard');
    }

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
