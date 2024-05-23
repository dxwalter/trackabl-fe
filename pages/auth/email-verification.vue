<template>
  <div>
    <div
      class="lg:w-[545px] m-auto lg:p-7 lg:border lg:border-grey-200 lg:bg-white lg:shadow"
    >
      <div
        class="flex lg:justify-center text-navyBlue-900 lato-semi-bold text-2xl mb-6 lg:text-center lg:mb-8"
      >
        <span class="mr-2">Verify your Account</span><span>✅</span>
      </div>
      <div class="text-sm text-grey-500 mb-6 lg:text-center lg:mb-8">
        Please enter the 4 digit code we sent to your email address “<span
          class="text-navyBlue-900 lato-medium no-underline"
          >adeola4real@gmail.com</span
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
          @click="isFormSubmitted = !isFormSubmitted"
        >
          <div class="button-text">Tap to Confirm</div>
          <div class="w-6 button-spinner">
            <NuxtImg src="/button-loader.svg" class="w-full" />
          </div>
        </button>
      </div>
    </div>
  </div>
  <ModalsEmailVerificationSuccessful
    :setup="{
      open: true,
    }"
  />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "pricing-page-layout",
});

const time = ref(10);
const requestingOtp = ref(false);
const intervalId = ref(<null | ReturnType<typeof setTimeout>>null);
const isFormSubmitted = ref(false);

const getOptValue = (data: string) => {
  // console.log(data);
};

const resendVerificationCode = () => {
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

onBeforeMount(() => {
  clearInterval(intervalId.value as any);
});

onMounted(() => {
  startCountDown();
});
</script>

<style></style>
