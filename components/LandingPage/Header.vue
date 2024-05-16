<template>
  <div class="app-container">
    <div class="flex justify-between py-6 px-4 xl:py-6 2xl:px-[100px]">
      <div class="flex justify-between w-full">
        <div class="w-[140px] xl:w-[170px] self-center">
          <NuxtImg src="/white-logo.svg" class="w-full" />
        </div>
        <div class="hidden xl:flex w-full justify-between self-center">
          <div></div>
          <div class="flex self-center">
            <NuxtLink to="#" class="mr-6 text-white text-[16px] lato-medium"
              >Features</NuxtLink
            >
            <NuxtLink to="#" class="mr-6 text-white text-[16px] lato-medium"
              >Pricing</NuxtLink
            >
            <NuxtLink to="#" class="mr-6 text-white text-[16px] lato-medium"
              >About Us</NuxtLink
            >
            <NuxtLink to="#" class="text-white text-[16px] lato-medium"
              >Contact Us</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              to="#"
              class="button bg-primary py-3 px-6 flex justify-center rounded-xl max-w-fit"
            >
              <div class="mr-2 lato-medium text-[16px] self-center text-white">
                Get Started
              </div>
              <div class="w-[18px] self-center">
                <NuxtImg src="/arrow-right-white.svg" class="w-full"></NuxtImg>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="self-center xl:hidden">
        <button class="w-7 h-7 hamburger-menu"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
