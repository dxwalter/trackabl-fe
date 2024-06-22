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
      <p class="lato-medium text-[30px] hidden xl:block">Change Plan</p>
      <p class="lato-medium text-[30px] xl:hidden">Choose your Plan</p>

      <plan-tab />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import PlanTab from './components/PlanTab.vue';

defineComponent({
  PlanTab,
});
definePageMeta({
  layout: 'account',
});
</script>
