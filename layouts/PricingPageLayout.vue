<template>
  <div class="h-screen flex flex-col justify-between">
    <!-- Header -->
    <div
      class="flex justify-center py-6 px-4 xl:py-9 xl:px-[112px] xl:justify-start"
    >
      <div class="w-[115px] xl:w-[140px]">
        <NuxtImg src="/blue-logo.svg" class="w-full" />
      </div>
    </div>
    <!-- content -->
    <div class="xl:py-[96px] px-4">
      <slot />
    </div>
    <!-- Footer -->
    <div class="py-8 px-4">
      <div class="text-center text-grey-500 mb-6">
        © 2024 Trackable.io. All rights reserved.
      </div>
      <div class="flex justify-center self-center">
        <div class="flex">
          <div class="w-[24px] self-center">
            <NuxtLink
              to="https://www.facebook.com/61559650231999"
              target="_blank"
            >
              <NuxtImg src="/facebook-grey.svg" class="w-full"></NuxtImg>
            </NuxtLink>
          </div>
          <div class="w-[18px] self-center mx-4">
            <NuxtLink to="https://twitter.com/officialtrackbl" target="_blank">
              <NuxtImg src="/x-grey.svg" class="w-full"></NuxtImg
            ></NuxtLink>
          </div>
          <div class="w-[24px] self-center">
            <NuxtLink to="https://www.instagram.com/trackabl/" target="_blank"
              ><NuxtImg src="/instagram-grey.svg" class="w-full"></NuxtImg
            ></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
