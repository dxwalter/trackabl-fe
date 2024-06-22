<template>
  <div>
    <div class="mb-6 px-[18px] xl:px-9 flex gap-6">
      <div class="self-center">
        <img
          src="/arrow-left.svg"
          alt=""
          class="cursor-pointer"
          @click="$router.back()"
        />
      </div>
      <!-- <p
        class="lato-medium text-2xl text-navyBlue-900 font-semibold self-center xl:hidden"
      >
        Payment History
      </p> -->
    </div>

    <div
      class="w-full xl:w-[80%] shadow-sm px-[18px] xl:px-8 xl:py-8 xl:border mt-6 xl:border-grey-200 xl:shadow-sm rounded mx-auto"
    >
      <p class="lato-medium text-[30px]">Payment History</p>

      <div
        class="w-full p-6 border mt-6 border-grey-300 xl:shadow-sm rounded-[16px] mx-auto"
      >
        <div class="">
          <p class="text-xl text-navyBlue-900">Monthly Plan</p>
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

          <div class="mt-6 text-navyBlue-900">
            <p>Next billing</p>
            <p class="text-grey-500">27/05/2024</p>
          </div>
        </div>
      </div>
      <div
        class="w-full border mt-6 border-grey-300 xl:shadow-sm rounded-[16px] mx-auto"
      >
        <AccountTablesPaymentHistory
          class="hidden xl:block"
          :payments="payments"
        />
        <AccountTablesPaymentHistoryCard :payments="payments" />
        <pagination
          class="border-grey-300 border-t"
          :current-page="1"
          :total-records="80"
          :per-page="5"
          @onchange="console.log('kenny')"
        ></pagination>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Toggle from '@/components/Toggle.vue';
import { ref } from 'vue';

const payments = ref([
  {
    date: 'May 6, 2024',
    purchase: 'Monthly subscription',
    servicePeriod: '6/05/2024–5/06/2024',
    amount: '₦5,000',
    status: 'Paid',
  },
  {
    date: 'April 6, 2024',
    purchase: 'Monthly subscription',
    servicePeriod: '6/04/2024–5/05/2024',
    amount: '₦5,000',
    status: 'Paid',
  },
  {
    date: 'March 6, 2024',
    purchase: 'Monthly subscription',
    servicePeriod: '6/03/2024–5/04/2024',
    amount: '₦4,400',
    status: 'Paid',
  },
  {
    date: 'February 6, 2024',
    purchase: 'Monthly subscription',
    servicePeriod: '6/02/2024–5/03/2024',
    amount: '₦4,400',
    status: 'Failed',
  },
  {
    date: 'January 6, 2024',
    purchase: 'Monthly subscription',
    servicePeriod: '6/01/2024–5/02/2024',
    amount: '₦4,400',
    status: 'Refunded',
  },
  {
    date: 'December 6, 2023',
    purchase: 'Monthly subscription',
    servicePeriod: '6/12/2023–5/01/2024',
    amount: '₦4,400',
    status: 'Paid',
  },
  {
    date: 'November 6, 2023',
    purchase: 'Monthly subscription',
    servicePeriod: '6/11/2023–5/12/2023',
    amount: '₦4,200',
    status: 'Failed',
  },
  {
    date: 'September 6, 2023',
    purchase: 'Monthly subscription',
    servicePeriod: '6/10/2023–5/11/2023',
    amount: '₦4,400',
    status: 'Paid',
  },
  {
    date: 'August 6, 2023',
    purchase: 'Monthly subscription',
    servicePeriod: '6/09/2023–5/10/2023',
    amount: '₦4,400',
    status: 'Paid',
  },
  {
    date: 'July 6, 2023',
    purchase: 'Monthly subscription',
    servicePeriod: '6/08/2023–5/09/2023',
    amount: '₦3,600',
    status: 'Paid',
  },
]);

defineComponent({
  Toggle,
});
definePageMeta({
  layout: 'account',
});
</script>
