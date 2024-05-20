<template>
  <div
    class="4xl:flex 4xl:justify-center 4xl:align-center 4xl:w-vw 4xl:h-screen"
  >
    <div class="lg:w-[400px] m-auto xl:w-full 2xl:w-[492px]">
      <div class="flex justify-between mb-6 2xl:mb-14">
        <div class="w-[20px] self-center">
          <NuxtLink to="/">
            <NuxtImg src="/arrow-left.svg" class="w-full" />
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
      <div class="flex text-nav-blue-900 lato-semi-bold text-2xl mb-8">
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
                <NuxtImg src="/google-login-icon.svg" class="w-full"></NuxtImg>
              </div>
              <span class="text-navy-blue-900 lato-medium self-center block"
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
        <form>
          <div class="full mb-5">
            <div class="text-navy-blue-900 text-sm mb-1.5 lato-medium">
              Email
            </div>
            <input
              required
              type="email"
              class="w-full px-[14px] py-3 text-grey-500 rounded-xl border border-grey-300 blue-active-form-field"
              placeholder="Enter your email address"
            />
          </div>
          <div class="full mb-6">
            <div class="text-navy-blue-900 text-sm mb-1.5 lato-medium">
              Password
            </div>
            <div class="flex rounded-xl border border-grey-300 overflow-hidden">
              <input
                required
                type="password"
                class="w-full px-[14px] rounded-xl py-3 text-grey-500 self-center password-field"
                placeholder="Enter your password"
              />
              <div
                class="self-center h-full px-[14px] text-blue-700 text-sm underline cursor-pointer"
                style="text-underline-offset: 4px"
              >
                Show
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
              class="p-4 bg-blue-500 w-full text-center rounded-xl text-white lato-medium hover:bg-blue-600"
            >
              Continue
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
</script>
