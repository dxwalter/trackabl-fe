<template>
  <div>
    <div class="flex justify-between" data-test-component="true">
      <div class="lato-semi-bold text-navyBlue-900 mb-2 xl:text-lg">
        Recent Transaction
      </div>

      <NuxtLink
        to="/account/analytics"
        class="lato-semi-bold text-blue-500 underline view-all-link"
        style="text-underline-offset: 4px"
      >
        View All
      </NuxtLink>
    </div>
    <!-- no recent expense -->
    <div
      class="py-3 xl:pt-12 flex flex-col justify-center"
      v-if="recentTransactions?.length === 0"
    >
      <div class="w-[60px] m-auto mb-1">
        <img src="/assets/img/recent-transaction.svg" class="w-full" />
      </div>
      <div
        class="text-center text-navyBlue-900 lato-medium text-sm mb-1"
        id="noTransaction"
      >
        Made a transaction today?
      </div>
      <div class="text-xs text-grey-500 text-center">
        Add your expenses to view & track a your transactions
      </div>
    </div>
    <!-- 00 -->
    <div class="py-5" v-else>
      <NuxtLink
        :to="`/account/expense/${expense.id}`"
        class="flex justify-between mb-6"
        v-for="expense in recentTransactions"
        :key="expense.id"
      >
        <div class="flex self-center">
          <div
            class="w-[36px] h-[36px] rounded-full flex justify-center items-center p-2 self-center mr-3"
            :style="{ backgroundColor: expense.category.color }"
          >
            <img :src="expense.category.icon" class="w-full" />
          </div>
          <div class="self-center flex flex-col">
            <div class="lato-medium text-base text-navyBlue-900 mb-1">
              {{ expense.subactegoryName }}
            </div>
            <div class="text-xs text-grey-500">
              {{ expense.category.name }}
            </div>
          </div>
        </div>
        <div class="self-center">
          <div class="lato-medium text-base text-navyBlue-900 mb-1">
            {{ expense.expenseCurrency }} {{ expense.expenseAmount }}
          </div>
          <div class="text-xs text-grey-500 text-right">
            {{ expense.expenseDate }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';
import { useMyFetch } from '@/composables/useMyFetch.ts';

const router = useRouter();

interface Expense {
  id: number;
  subactegoryName: string;
  category: {
    name: string;
    color: string;
    icon: string;
  };
  expenseCurrency: string;
  expenseAmount: string;
  expenseDate: string;
}

const transactions = ref();

const props = defineProps<{
  recentTransactions: Expense[];
}>();

console.log(props);

// console.log(data.value);
// console.log(error);
// if (data.value) {
//   useNuxtApp().$toast.success(
//     `<div class="toastHeader lato-semi-bold text-base mb-2"></div><div class="toastBody text-sm lato-regular">${data.value.message}</div>`
//   );

// if (data.value.data.isEmailVerified === false) {
//   router.push('/auth/email-verification');
//   localStorage.setItem('email', form.value.email);
//   localStorage.setItem('user', JSON.stringify(data.value.data));
// } else {
//   // userStore.SET_USER(data.value.data);

//   router.push('/account/dashboard');
// }

// isPending.value = false;
// form.value.trial_count += 1;
// } else {
//   useNuxtApp().$toast.error(
//     `<div class="toastHeader lato-semi-bold text-base mb-2">${error.value.data.error}</div><div class="toastBody text-sm lato-regular">${error.value.data.message}</div>`
//   );
//   isPending.value = false;
//   form.value.trial_count += 1;
// }
// };
</script>

<style></style>
