<template>
  <div>
    <div class="xl:w-[1008px] m-auto xl:p-7">
      <div
        class="bg-white 2xl:border 2xl:border-grey-200 2xl:bg-white 2xl:shadow 2xl:w-[1008px] 2xl:pt-7 2xl:pb-5 2xl:px-"
      >
        <div class="2xl:px-[100px] mb-6">
          <h1
            class="text-navyBlue-900 text-2xl text-left lato-semi-bold mb-2 2xl:text-6xl 2xl:mb-12 px-2 md:text-center 2xl:text-3xl 2xl:mb-2"
          >
            Choose your plan
          </h1>
          <div class="text-center text-grey-500 text-sm">
            Get a plan that fits you, to achieve better overview of your
            expenses.
          </div>
        </div>
        <!-- tab -->
        <div class="flex justify-center mb-6 xl:mb-12 2xl:px-[100px]">
          <div
            class="rounded-lg p-[6px] border border-grey-100 w-fit pricing-period xl:flex"
          >
            <button
              class="px-[27px] py-[10px] xl:px-[14px] bg-grey-50 rounded-md mr-2 text-grey-500 lato-semi-bold text-base"
            >
              Monthly billing
            </button>
            <button
              class="px-[27px] py-[10px] xl:px-[14px] bg-grey-50 rounded-md text-grey-500 lato-semi-bold text-base xl:flex isActive"
            >
              <span class="xl:block xl:mr-2 self-center">Annual billing</span>
              <span
                class="hidden xl:block bg-blue-50 px-[10px] py-[2px] rounded-2xl text-blue-500 text-sm self-center"
                >Save 20%</span
              >
            </button>
          </div>
        </div>
        <!-- price list -->
        <div class="xl:flex xl:justify-center px-2">
          <!-- price -->
          <div
            class="rounded-2xl p-6 border border-grey-100 w-full mb-4 xl:mb-0 xl:mr-2 md:w-[464px] md:m-auto md:mb-4"
          >
            <div class="mb-6">
              <div class="flex justify-between mb-4">
                <div class="text-blue-900 text-xl lato-semi-bold self-center">
                  Free
                </div>
              </div>
              <div class="flex">
                <sup class="text-2xl text-blue-900 lato-semi-bold leading-10"
                  >₦</sup
                >
                <div
                  class="text-blue-900 lato-semi-bold text-4xl self-center px-1"
                >
                  0
                </div>
                <div class="lato-medium text-grey-500 text-base self-center">
                  / month
                </div>
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-1 lato-semi-bold text-base">FEATURES</div>
              <div class="text-grey-500">
                Everything in our monthly plan plus....
              </div>
            </div>
            <div class="mb-6">
              <!--  -->
              <div class="flex mb-4">
                <div class="w-[24px] mr-3">
                  <NuxtImg src="/check-icon.svg" class="w-full" />
                </div>
                <div class="text-grey-500">Unlock all Features</div>
              </div>
              <!--  -->
              <div class="flex mb-4">
                <div class="w-[24px] mr-3">
                  <NuxtImg src="/check-icon.svg" class="w-full" />
                </div>
                <div class="text-grey-500">Basic reporting + analytics</div>
              </div>
              <!--  -->
              <div class="flex mb-4">
                <div class="w-[24px] mr-3">
                  <NuxtImg src="/check-icon.svg" class="w-full" />
                </div>
                <div class="text-grey-500">Up to 10 individual users</div>
              </div>
            </div>
            <div class="flex justify-center">
              <NuxtLink
                to="#"
                class="button p-3 bg-blue-500 w-full text-center rounded-xl text-white lato-medium hover:bg-blue-600"
                >Get Started</NuxtLink
              >
            </div>
          </div>
          <!-- price 2 -->
          <div
            class="rounded-2xl p-6 border border-grey-100 w-full xl:ml-2 md:w-[464px] md:m-auto"
          >
            <div class="mb-6">
              <div class="flex justify-between mb-4">
                <div class="text-blue-900 text-xl lato-semi-bold self-center">
                  Premium
                </div>
                <div
                  class="self-center py-[5px] px-2 text-xs text-white bg-green-600 text-center rounded-lg"
                >
                  RECOMMENDED
                </div>
              </div>
              <div class="flex">
                <sup class="text-2xl text-blue-900 lato-semi-bold leading-10"
                  >₦</sup
                >
                <div
                  class="text-blue-900 lato-semi-bold text-4xl self-center px-1"
                >
                  4,000
                </div>
                <div class="lato-medium text-grey-500 text-base self-center">
                  / month
                </div>
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-1 lato-semi-bold text-base">FEATURES</div>
              <div class="text-grey-500">
                Everything in our monthly plan plus....
              </div>
            </div>
            <div class="mb-6">
              <!--  -->
              <div class="flex mb-4">
                <div class="w-[24px] mr-3">
                  <NuxtImg src="/check-icon.svg" class="w-full" />
                </div>
                <div class="text-grey-500">Unlock all Features</div>
              </div>
              <!--  -->
              <div class="flex mb-4">
                <div class="w-[24px] mr-3">
                  <NuxtImg src="/check-icon.svg" class="w-full" />
                </div>
                <div class="text-grey-500">Basic reporting + analytics</div>
              </div>
              <!--  -->
              <div class="flex mb-4">
                <div class="w-[24px] mr-3">
                  <NuxtImg src="/check-icon.svg" class="w-full" />
                </div>
                <div class="text-grey-500">Up to 10 individual users</div>
              </div>
            </div>
            <div class="flex justify-center">
              <NuxtLink
                to="#"
                class="button p-3 bg-blue-500 w-full text-center rounded-xl text-white lato-medium hover:bg-blue-600"
                >Get Started</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalsSubscriptionSetSuccessfully
    :setup="{
      open: false,
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
