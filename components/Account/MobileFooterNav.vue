<template>
  <div>
    <div class="fixed w-full bottom-0 border-t-2 border-t-grey-200 bg-white">
      <div class="flex justify-between relative pt-[14px] mb-6 px-4 lg:px-10">
        <div class="w-[124px] flex justify-center">
          <NuxtLink to="/account/dashboard" class="flex flex-col items-center">
            <div class="w-[24px] mb-1">
              <img src="~/assets/img/menu-icons/home.svg" class="w-full" />
            </div>
            <div class="text-grey-500 text-xs">Home</div>
          </NuxtLink>
        </div>

        <div class="w-[124px] flex justify-center">
          <NuxtLink to="/account/analytics" class="flex flex-col items-center">
            <div class="w-[24px] mb-1">
              <<<<<<< HEAD
              <img src="~/assets/img/menu-icons/analytics.svg" class="w-full" />
              =======
              <img src="/assets/img/menu-icons/analytics.svg" class="w-full" />
              >>>>>>> temp-branch
            </div>
            <div class="text-grey-500 text-xs">Analytics</div>
          </NuxtLink>
        </div>

        <div
          class="absolute bg-white w-fit p-1 manage-direction cursor-pointer"
        >
          <NuxtLink to="/account/expense/add">
            <button class="w-[64px] h-[64px] bg-navyBlue-900 p-4 rounded-full">
              <img src="/assets/img/plus.svg" class="w-full" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="css">
.manage-direction {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 0px;
}
</style>
