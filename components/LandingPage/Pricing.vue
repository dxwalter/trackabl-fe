<template>
  <section id="Pricing">
    <div class="app-container">
      <div class="py-12 2xl:py-24 bg-white">
        <div class="px-4 2xl:px-[100px] mb-8">
          <div class="flex justify-center mb-2">
            <div
              class="w-[10px] h-[10px] bg-blue-500 rounded-full mr-[10px] self-center"
            ></div>
            <div
              class="text-grey-500 text-lg leading-7 self-center 2xl:text-xl"
            >
              Pricing
            </div>
          </div>
          <h1
            class="text-navyBlue-900 text-3xl text-center lato-semi-bold mb-8 2xl:text-6xl 2xl:mb-12"
          >
            Discover Our Simple Plan
          </h1>
        </div>
        <!-- tab -->
        <div class="flex justify-center mb-8 xl:mb-12 px-2 2xl:px-[100px]">
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
        <div class="px-4 2xl:px-[100px] xl:flex xl:justify-center">
          <!-- price -->
          <div
            class="rounded-2xl p-6 border border-grey-100 w-full mb-4 xl:mb-0 xl:mr-2 xl:w-[479px]"
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
            class="rounded-2xl p-6 border border-grey-100 w-full xl:ml-2 xl:w-[479px]"
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
  </section>
</template>
