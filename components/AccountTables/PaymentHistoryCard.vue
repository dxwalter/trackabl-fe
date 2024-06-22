<template>
  <div
    class="w-full xl:hidden text-sm lato-regular py-4 px-6 xl:shadow-sm rounded-[16px] mx-auto payment-card"
    v-for="(payment, i) in payments"
    :key="`payment-history-${i}`"
  >
    <p class="text-[#101828]">{{ payment.date }}</p>
    <div class="mt-2 text-grey-700">
      <p class="">{{ payment.description }}</p>
      <p class="mt-1">{{ payment.servicePeriod }}</p>
    </div>

    <div class="mt-2 flex justify-between">
      <p class="text-blue-500">{{ payment.amount }}</p>
      <div
        class="bg-[#ECFDF3] flex roudned-[16px] gap-1 text-[#027A48] py-[2px] px-2"
        v-if="payment.status === 'Paid'"
      >
        <img src="/status-check.svg" alt="" />
        {{ payment.status }}
      </div>

      <div
        class="bg-[#FEF3F2] flex rounded-[16px] gap-1 text-[#B42318] py-[2px] px-2"
        v-if="payment.status === 'Failed'"
      >
        <img src="/failed.svg" alt="" />
        {{ payment.status }}
      </div>

      <div
        class="bg-[#0439A3] rounded-[16px] flex gap-1 text-[#fff] py-[2px] px-2"
        v-if="payment.status === 'Refunded'"
      >
        <img src="/corner-up-left.svg" alt="" />
        {{ payment.status }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  payments: [];
}>();
</script>

<style scoped>
.payment-card:nth-of-type(even) {
  background: #f9fafb;
}
</style>
