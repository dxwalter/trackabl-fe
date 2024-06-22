<template>
  <div
    class="4xl:flex 4xl:justify-center 4xl:align-center 4xl:w-vw 4xl:h-screen"
  >
    <div class="lg:w-[400px] m-auto xl:w-full 2xl:w-[492px]">
      <div class="flex justify-between mb-6 2xl:mb-14">
        <div class="w-[20px] self-center">
          <NuxtLink to="/">
            <img src="~/assets/img/arrow-left.svg" class="w-full" />
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
                <img src="~/assets/img/google-login-icon.svg" class="w-full" />
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
              />
              <div
                class="self-center h-full px-[14px] text-blue-700 text-sm underline cursor-pointer"
                style="text-underline-offset: 4px"
                @click="mangePasswordVisibility"
              >
                {{ isPasswordVisible ? "Hide" : "Show" }}
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
              <div class="button-text">Continue</div>
              <div class="w-6 button-spinner">
                <img src="~/assets/img/button-loader.svg" class="w-full" />
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
  layout: "auth-page-layout",
});

import { useFormInputManipulator } from "@/composables/FormInputManipulator";
import { ref } from "vue";

const { HidePassword, ShowPassword } = useFormInputManipulator();

const isPasswordVisible = ref(false);
const isFormSubmitted = ref(false);

const mangePasswordVisibility = () => {
  if (isPasswordVisible.value) {
    HidePassword("SignInPassword");
  } else {
    ShowPassword("SignInPassword");
  }

  isPasswordVisible.value = !isPasswordVisible.value;
};

const logUserIn = () => {
  useNuxtApp().$toast.success(
    `<div class="toastHeader lato-semi-bold text-base mb-2">Uh-uh! This email is not valid</div><div class="toastBody text-sm lato-regular">It looks like there is already an account with this email address. Try to login or use a different email address</div>`
  );
};
</script>
