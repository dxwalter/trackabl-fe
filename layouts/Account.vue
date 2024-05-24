<template>
  <div>
    <!-- Header -->
    <div
      class="flex justify-between px-[18px] py-[14px] xl:px-[112px] xl:py-6 xl:border-b-2 xl:border-b-grey-200 fixed w-full z-10 bg-white"
    >
      <div class="flex w-[115px] xl:w-[140px] self-center">
        <NuxtLink to="/account/dashboard" class="w-full">
          <NuxtImg src="/blue-logo.svg" class="w-full" />
        </NuxtLink>
      </div>
      <div class="w-9 self-center xl:hidden">
        <NuxtLink to="/account/profile" class="w-full">
          <NuxtImg src="/profile-icon.svg" class="w-full" />
        </NuxtLink>
      </div>
    </div>
    <div>
      <div class="xl:pl-[106px]">
        <!-- side nav -->
        <div
          class="hidden xl:flex fixed w-[106px] h-screen bg-white left-0 border-r-2 border-r-grey-200 px-4 pt-[107px] pb-[122px] flex flex-col justify-between"
        >
          <div>
            <div class="flex justify-center mb-2 p-3 hover:bg-grey-50">
              <NuxtLink
                to="/account/dashboard"
                class="flex flex-col items-center"
              >
                <div class="w-[24px] mb-1">
                  <NuxtImg src="/menu-icons/home.svg" class="w-full" />
                </div>
                <div class="text-grey-500 text-xs">Home</div>
              </NuxtLink>
            </div>

            <div class="flex justify-center p-3 hover:bg-grey-50">
              <NuxtLink
                to="/account/analytics"
                class="flex flex-col items-center"
              >
                <div class="w-[24px] mb-1">
                  <NuxtImg src="/menu-icons/analytics.svg" class="w-full" />
                </div>
                <div class="text-grey-500 text-xs">Analytics</div>
              </NuxtLink>
            </div>
          </div>
          <div>
            <div class="border-t-2 border-t-grey-200 pt-6 pb-[2px]">
              <div class="self-center w-[48px]">
                <NuxtLink to="/account/profile" class="w-full">
                  <NuxtImg src="/profile-icon.svg" class="w-full" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!-- content -->
        <div class="pt-[60px] xl:pt-[75px]">
          <!-- content body -->
          <div class="px-[18px] pt-6 pb-40 xl:px-9 xl:pt-9"><slot /></div>
          <!-- mobile footer nav -->
          <div class="xl:hidden">
            <AccountMobileFooterNav />
          </div>
        </div>
      </div>

      <!-- desktop footer -->
      <div>
        <AccountDesktopFooter class="hidden xl:flex" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
