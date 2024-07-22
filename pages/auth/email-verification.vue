<template>
  <div class="xl:py-[60px] 2xl:py-[120px]">
    <div
      class="lg:w-[545px] m-auto lg:p-7 lg:border lg:border-grey-200 lg:bg-white lg:box-shadow"
    >
      <div
        class="flex lg:justify-center text-navyBlue-900 lato-semi-bold text-2xl mb-6 lg:text-center lg:mb-8"
      >
        <span class="mr-2">Verify your Account</span><span>✅</span>
      </div>
      <div class="text-sm text-grey-500 mb-6 lg:text-center lg:mb-8">
        Please enter the 4 digit code we sent to your email address “<span
          class="text-navyBlue-900 lato-medium no-underline"
          >{{ email }}</span
        >”
      </div>
      <div class="mb-6 lg:flex lg:justify-center lg:mb-8">
        <Otp
          :setup="{
            numberOfFields: 4,
            fieldType: 'number',
          }"
          @otp-value="getOptValue"
        />
      </div>
      <div class="flex mb-40 lg:justify-center lg:mb-14">
        <div class="mr-1 text-grey-500">Didn’t receive the code?</div>
        <div class="text-blue-500 lato-semi-bold">
          <div v-if="time === 0" @click="resendVerificationCode">
            <div v-if="!requestingOtp" class="cursor-pointer">Resend</div>
            <div v-if="requestingOtp">Please wait...</div>
          </div>
          <div v-else>Resend in {{ time }}s</div>
        </div>
      </div>

      <div>
        <button
          class="p-4 bg-blue-500 w-full text-center rounded-xl text-white lato-medium hover:bg-blue-600 flex justify-center"
          :disabled="isFormSubmitted"
          :class="{
            'is-loading': isFormSubmitted,
          }"
          type="submit"
          @click="verifyEmail"
        >
          <div class="" v-if="!isPending">Tap to Confirm</div>
          <div class="w-6" v-else>
            <img src="/assets/img/button-loader.svg" class="w-full" />
          </div>
        </button>
      </div>
    </div>
  </div>
  <ModalsEmailVerificationSuccessful
    :setup="{
      open: false,
    }"
  />
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from '#imports';
import { useRouter } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useMyFetch } from '@/composables/useMyFetch';
import { useMyFetchNoToken } from '@/composables/useMyFetchNoToken';

const config = useRuntimeConfig();
const apiBaseUrl = config.public.API_BASE_URL;
const router = useRouter();
definePageMeta({
  layout: 'pricing-page-layout',
});

const time = ref(10);
const requestingOtp = ref(false);
const intervalId = ref<null | ReturnType<typeof setInterval>>(null);
const isFormSubmitted = ref(false);
const email = ref<string | null>(null);
const otpValue = ref('');
const isPending = ref(false);

const getOptValue = (data: string) => {
  otpValue.value = data;
  console.log(otpValue.value);
};

const resendVerificationCode = async () => {
  const payload = ref({
    email: email.value,
    trial_count: 0,
  });

  isPending.value = true;
  const { data, error } = await useMyFetchNoToken(
    `/auth/generate-verifcation-token`,
    {
      method: 'PATCH',
      body: payload.value,
    }
  );

  if (data.value) {
    payload.value.trial_count += 1;
    useNuxtApp().$toast.success(
      `<div class="toastHeader lato-semi-bold text-base mb-2">Success</div><div class="toastBody text-sm lato-regular">${data.value.message}</div>`
    );
    isPending.value = false;
  } else {
    useNuxtApp().$toast.error(
      `<div class="toastHeader lato-semi-bold text-base mb-2">Error</div><div class="toastBody text-sm lato-regular">${error.value.message}</div>`
    );
    payload.value.trial_count += 1;
    isPending.value = false;
  }

  requestingOtp.value = true;

  clearInterval(intervalId.value as any);
  time.value = 60;
  startCountDown();
};

const startCountDown = () => {
  if (time.value > 0) {
    intervalId.value = setInterval(() => {
      time.value--;
      if (time.value === 0) {
        clearInterval(intervalId.value as any);
      }
    }, 1000);
  }
};

onBeforeUnmount(() => {
  clearInterval(intervalId.value as any);
});

onMounted(() => {
  if (process.client) {
    email.value = localStorage.getItem('email');
    startCountDown();
  }
});

const verifyEmail = async () => {
  if (isFormSubmitted.value || isPending.value) {
    return;
  }

  isFormSubmitted.value = true;
  isPending.value = true;

  const payload = ref({
    trial_count: 0,
  });

  const { data, error } = await useMyFetch(
    `/auth/verify-email/${otpValue.value}`,
    {
      method: 'PATCH',
      body: payload.value,
    }
  );

  if (data.value) {
    payload.value.trial_count += 1;
    useNuxtApp().$toast.success(
      `<div class="toastHeader lato-semi-bold text-base mb-2">Success</div><div class="toastBody text-sm lato-regular">${data.value.message}</div>`
    );
    router.push('/account/dashboard');
  } else {
    useNuxtApp().$toast.error(
      `<div class="toastHeader lato-semi-bold text-base mb-2">Error</div><div class="toastBody text-sm lato-regular">${error.value}</div>`
    );
    payload.value.trial_count += 1;
  }

  isPending.value = false;
  isFormSubmitted.value = false;
};
</script>

<style></style>
