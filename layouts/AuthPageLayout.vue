<template>
  <div>
    <div class="xl:flex justify-between">
      <div
        class="hidden xl:flex flex-col justify-between xl:w-6/12 bg-blue-500 h-screen px-9 py-8 overflow-hidden"
      >
        <!-- nav -->
        <div class="w-[140px]">
          <img src="/assets/img/white-logo.svg" class="w-full" />
        </div>
        <!-- carousel -->
        <div class="flex justify-center w-full">
          <AuthCarouselSlider />
        </div>
        <!-- footer -->
        <div class="flex justify-between w-full">
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
                <NuxtLink
                  to="https://www.instagram.com/trackabl/"
                  target="_blank"
                  ><img src="/assets/img/instagram.svg" class="w-full"
                /></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full px-[18px] py-6 xl:w-6/12 xl:pt-[120px] xl:px-[24px] 4xl:pt-0 h-screen"
      >
        <div class="w-full xl:hidden">
          <div class="w-[115px] mb-6 lg:mb-8 m-auto">
            <NuxtLink to="/auth">
              <img src="/assets/img/blue-logo.svg" class="w-full" />
            </NuxtLink>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
