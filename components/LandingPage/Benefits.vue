<template>
  <section id="Benefits">
    <div class="app-container">
      <div class="pt-12 2xl:pt-24 bg-white">
        <div class="px-4 2xl:px-[100px]">
          <div class="flex justify-center 2xl:justify-start mb-2">
            <div
              class="w-[10px] h-[10px] bg-blue-500 rounded-full mr-[10px] self-center"
            ></div>
            <div
              class="text-grey-500 text-lg leading-7 self-center 2xl:text-xl"
            >
              Membership benefits
            </div>
          </div>
          <h1
            class="text-navyBlue-900 text-3xl text-center 2xl:text-left lato-semi-bold mb-8 2xl:text-6xl 2xl:mb-12"
          >
            Features that you will love
          </h1>
        </div>
        <div class="xl:flex">
          <div
            class="px-4 xl:w-6/12 2xl:w-7/12 3xl:w-6/12 2xl:pl-[100px] 2xl:pr-[70px]"
          >
            <!-- benefit list -->
            <div class="mb-12 xl:flex">
              <!-- image -->
              <div class="w-9 mb-4 xl:mr-4 shrink-0">
                <NuxtImg
                  src="/benefit-easy-to-use.svg"
                  class="w-full"
                ></NuxtImg>
              </div>
              <!-- text -->
              <div>
                <div
                  class="text-xl lato-semi-bold leading-7 text-navyBlue-900 mb-2"
                >
                  Easy-to-use expense tracking
                </div>
                <div class="text-grey-500 leading-7 text-lg">
                  Trackabl offers a user-friendly interface with powerful
                  filters that provide detailed insights into your spending
                  habits. Easily categorize and subcategorize your expenses with
                  just a few clicks.
                </div>
              </div>
            </div>

            <!-- benefit list -->
            <div class="mb-12 xl:flex">
              <!-- image -->
              <div class="w-9 mb-4 xl:mr-4 shrink-0">
                <NuxtImg
                  src="/benefits-insightful-analytics.svg"
                  class="w-full"
                ></NuxtImg>
              </div>
              <!-- text -->
              <div>
                <div
                  class="text-xl lato-semi-bold leading-7 text-navyBlue-900 mb-2"
                >
                  Insightful analytics for smarter spending habit
                </div>
                <div class="text-grey-500 leading-7 text-lg">
                  Trackabl offers a user-friendly interface with powerful
                  filters that provide detailed insights into your spending
                  habits. Easily categorize and subcategorize your expenses with
                  just a few clicks.
                </div>
              </div>
            </div>

            <!-- benefit list -->
            <div class="mb-7 xl:flex">
              <!-- image -->
              <div class="w-9 mb-4 xl:mr-4 shrink-0">
                <NuxtImg
                  src="/benefits-flexible-organisation.svg"
                  class="w-full"
                ></NuxtImg>
              </div>
              <!-- text -->
              <div>
                <div
                  class="text-xl lato-semi-bold leading-7 text-navyBlue-900 mb-2"
                >
                  Flexible expense organization, your way
                </div>
                <div class="text-grey-500 leading-7 text-lg">
                  Trackabl adapts to your unique needs, empowering you to
                  organize your expenses in a way that makes the most sense for
                  your lifestyle. Stay on top of your spending with seamless,
                  personalized expense tracking.
                </div>
              </div>
            </div>
          </div>
          <!-- analytics image-->
          <div
            class="xl:w-6/12 2xl:w-5/12 3xl:w-6/12 pl-4 py-6 2xl:pl-12 2xl:pt-12 bg-grey-200 w-full h-80 md:h-[500px] lg:h-[600px]"
          >
            <div
              class="w-full h-full landing-analytics-image"
              style="background-image: url('/analytics.png')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
