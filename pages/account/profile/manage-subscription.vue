<template>
  <div>
    <div class="mb-6 px-[18px] xl:px-9 flex gap-6">
      <div class="self-center">
        <img
          src="/assets/img/arrow-left.svg"
          alt=""
          class="cursor-pointer"
          @click="$router.back()"
        />
      </div>
      <p
        class="lato-medium text-2xl text-navyBlue-900 font-semibold self-center xl:hidden"
      >
        Manage Subscription
      </p>
    </div>

    <div
      class="w-full xl:w-[545px] px-[18px] xl:px-8 xl:py-8 xl:border mt-6 xl:border-grey-200 xl:shadow-sm rounded mx-auto"
    >
      <div class="flex justify-center">
        <div class="w-[62px]"></div>
        <p
          class="lato-medium text-[30px] font-semibold self-center hidden xl:block text-[#101828]"
        >
          Manage Subscription
        </p>
      </div>

      <div
        class="w-full p-6 border mt-6 border-grey-300 xl:shadow-sm rounded-[16px] mx-auto"
      >
        <div class="">
          <p class="text-xl text-navyBlue-900">Premium</p>
          <div class="flex mt-2">
            <sup class="text-2xl text-blue-900 lato-semi-bold leading-10"
              >₦</sup
            >
            <div class="text-blue-900 lato-semi-bold text-4xl self-center px-1">
              2000
            </div>
            <div class="lato-medium text-grey-500 text-base self-center">
              / month
            </div>
          </div>

          <div class="flex gap-1 mt-2">
            <img src="/assets/img/calendar.svg" alt="" />
            <p class="text-grey-500">Renews 26 May</p>
          </div>
        </div>
        <div class="mt-8 flex flex-col justify-center">
          <nuxt-link
            to="/account/profile/payment-history"
            class="rounded-[8px] border rounded-bl-none py-3 px-4 border-grey-200 flex justify-between"
          >
            <p class="text-grey-500">View payment history</p>
            <img src="/assets/img/caret-right.svg" alt="" />
          </nuxt-link>

          <nuxt-link
            to="/account/profile/change-plan"
            class="rounded-[8px] border rounded-bl-none py-3 px-4 border-grey-200 flex justify-between mt-4"
          >
            <p class="text-grey-500">Change plan</p>
            <img src="/assets/img/caret-right.svg" alt="" />
          </nuxt-link>
        </div>
      </div>
      <div class="mt-[56px]">
        <button
          class="w-full bg-red-500 text-white py-3 px-4 rounded-xl cursor-pointer"
        >
          Cancel Free Trial
        </button>
        <p class="text-sm text-grey-500 mt-2 text-center">
          If you cancel, you will immediately loose access to your subscription.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Toggle from '@/components/Toggle.vue';

defineComponent({
  Toggle,
});
definePageMeta({
  layout: 'account',
});
</script>
