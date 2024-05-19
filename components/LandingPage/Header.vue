<template>
  <div class="app-container">
    <div class="flex justify-between py-6 px-4 xl:py-6 2xl:px-[100px]">
      <div class="flex justify-between w-full">
        <div class="w-[140px] xl:w-[170px] self-center">
          <NuxtLink to="/">
            <NuxtImg src="/white-logo.svg" class="w-full" />
          </NuxtLink>
        </div>
        <div
          class="flex flex-col xl:flex xl:flex-row w-full justify-between self-center"
          :class="{
            'open-nav-for-mobile': isMenuOpen,
            hidden: !isMenuOpen,
          }"
        >
          <div></div>
          <div class="flex flex-col xl:flex-row self-center nav-link-container">
            <NuxtLink
              to="/#Benefits"
              class="xl:mr-6 text-white text-[16px] lato-medium"
              >Features</NuxtLink
            >
            <NuxtLink
              to="/#Pricing"
              class="xl:mr-6 text-white text-[16px] lato-medium"
              >Pricing</NuxtLink
            >
            <NuxtLink
              to="/#AboutUs"
              class="xl:mr-6 text-white text-[16px] lato-medium"
              >About Us</NuxtLink
            >
            <NuxtLink to="/contact" class="text-white text-[16px] lato-medium"
              >Contact Us</NuxtLink
            >
          </div>
          <div class="nav-btn-container">
            <NuxtLink
              to="#"
              class="button bg-primary py-3 px-6 flex justify-center rounded-xl max-w-fit"
            >
              <div class="mr-2 lato-medium text-[16px] self-center text-white">
                Get Started
              </div>
              <div class="w-[18px] self-center">
                <NuxtImg src="/arrow-right-white.svg" class="w-full" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="self-center xl:hidden">
        <button
          class="w-7 h-7 hamburger-menu-close"
          :class="{
            'menu-is-closed': !isMenuOpen,
            'menu-is-open': isMenuOpen,
          }"
          @click="mobileNavState"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isMenuOpen = ref(false);

const mobileNavState = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style></style>
