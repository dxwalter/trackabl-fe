<template>
  <div class="bg-nav-color">
    <div class="app-container">
      <div class="py-12 px-4">
        <div
          class="text-center text-white lato-semi-bold text-2xl mb-2 leading-8 xl:text-4xl xl:leading-[44px]"
        >
          Start your free trial
        </div>
        <div
          class="text-center leading-6 text-grey-300 lato-regular mb-8 xl:text-xl"
        >
           Join the millions of users worldwide who trust Trackabl to manage
          their finances effectively
        </div>
        <div class="flex justify-center m-auto">
          <NuxtLink
            to="/auth/sign-up"
            class="button bg-white py-3 px-[57px] flex justify-center rounded-xl max-w-fit"
          >
            <div class="mr-2 lato-medium text-[16px] self-center text-blue-900">
              Try for free
            </div>
            <div class="w-[18px] self-center">
              <img src="/assets/img/arrow-right-black.svg" class="w-full" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-primary">
    <div class="app-container">
      <div class="xl:flex justify-between py-6 px-4 2xl:px-[100px]">
        <div class="mb-4 xl:mb-0 text-center self-center">
          <NuxtLink to="/legal" class="text-white">Privacy policy</NuxtLink>
        </div>
        <div class="mb-4 xl:mb-0 text-center self-center">
          <NuxtLink to="#" class="text-white"
            >© 2024 Trackabl.io. All rights reserved.</NuxtLink
          >
        </div>
        <div class="flex justify-center self-center">
          <div class="flex">
            <div class="w-[24px] self-center">
              <NuxtLink
                to="https://www.facebook.com/61559650231999"
                target="_blank"
              >
                <img src="/assets/img/facebook.svg" class="w-full" />
              </NuxtLink>
            </div>
            <div class="w-[18px] self-center mx-4">
              <NuxtLink
                to="https://twitter.com/officialtrackbl"
                target="_blank"
              >
                <img src="/assets/img/x.svg" class="w-full"
              /></NuxtLink>
            </div>
            <div class="w-[24px] self-center">
              <NuxtLink to="https://www.instagram.com/trackabl/" target="_blank"
                ><img src="/assets/img/instagram.svg" class="w-full"
              /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
