<template>
  <section id="Hero">
    <div class="app-container">
      <div class="px-4 pt-12 2xl:px-0 2xl:pt-[136px]">
        <div class="2xl:flex justify-between">
          <div class="2xl:w-6/12 3xl:w-7/12 2xl:pt-[80px] 2xl:pl-[100px]">
            <div
              class="w-full text-[48px] 2xl:text-[72px] text-white text-center 2xl:text-left lato-semi-bold leading-[60px] mb-5 2xl:mb-6 lg:w-[500px] 2xl:w-full m-auto 2xl:ml-0 2xl:leading-[90px]"
            >
              Take control of your finances with Trackabl
            </div>
            <div
              class="text-center 2xl:text-left text-grey-300 leading-7 2xl:leading-[30px] text-[18px] 2xl:text-[20px] lato-regular mb-6 2xl:mb-12 lg:w-[500px] 3xl:w-[595px] m-auto 2xl:ml-0"
            >
              Effortlessly manage your expenses and gain valuable insights. Join
              the millions of users worldwide who trust Trackabl to manage their
              finances effectively
            </div>
            <div
              class="flex justify-center 2xl:justify-start 2xl:w-[500px] mb-12 m-auto 2xl:ml-0"
            >
              <NuxtLink
                to="#"
                class="button bg-white py-3 px-[57px] flex justify-center rounded-xl max-w-fit"
              >
                <div
                  class="mr-2 lato-medium text-[16px] self-center text-blue-900"
                >
                  Try for free
                </div>
                <div class="w-[18px] self-center">
                  <img
                    src="~/assets/img/arrow-right-black.svg"
                    class="w-full"
                  />
                </div>
              </NuxtLink>
            </div>
          </div>
          <div
            class="flex justify-center md:w-60 m-auto lg:w-[300px] 2xl:w-6/12 3xl:w-5/12"
          >
            <img
              src="~/assets/img/iPhone-12-Pro-mockup.png"
              class="w-full 2xl:hidden"
            />
            <img
              src="~/assets/img/iPhone-12-Pro-mockup-desktop.png"
              class="w-full hidden 2xl:block"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>
