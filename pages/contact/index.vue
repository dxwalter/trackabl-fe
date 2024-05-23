<template>
  <div>
    <div class="bg-nav-color">
      <!-- Hero -->
      <section id="Hero">
        <div class="app-container">
          <div class="px-4 py-12 2xl:px-0 xl:py-24">
            <div
              class="text-white text-center lato-semi-bold text-5xl mb-2 xl:text-6xl"
            >
              Contact us
            </div>
            <div class="text-center text-grey-100">
              We’d love to hear from you
            </div>
          </div>
        </div>
      </section>
    </div>
    <section id="contactInfo">
      <div class="app-container">
        <div class="py-12 xl:py-24 px-4 bg-white">
          <div class="xl:flex xl:w-full xl:justify-center">
            <!-- contact-us -->
            <div class="mb-6 xl:mb-0 xl:w-[384px]">
              <div class="flex justify-center mb-4">
                <div class="w-[58px] h-[58px] rounded-full p-1 bg-blue-400">
                  <NuxtImg src="/contact-address.svg" class="w-full" />
                </div>
              </div>
              <div
                class="text-center text-navy-blue-900 lato-semi-bold text-xl mb-2"
              >
                Contact address
              </div>
              <div class="text-grey-500 text-center mb-5 lato-regular">
                Questions or queries? Get in touch!
              </div>
              <div class="text-blue-500 text-center lato-medium">
                <NuxtLink to="mailto:contact.gasdat@gmail.com" _target="_blank"
                  >contact.gasdat@gmail.com</NuxtLink
                >
              </div>
            </div>
            <!-- office -->
            <div class="mb-6 xl:mb-0 xl:w-[384px]">
              <div class="flex justify-center mb-4">
                <div class="w-[58px] h-[58px] rounded-full p-1 bg-red-500">
                  <NuxtImg src="/contact-office.svg" class="w-full" />
                </div>
              </div>
              <div
                class="text-center text-navy-blue-900 lato-semi-bold text-xl mb-2"
              >
                Office
              </div>
              <div class="text-grey-500 text-center mb-5 lato-regular">
                Registered Locations
              </div>
              <div class="text-blue-500 text-center lato-medium">
                <div>
                  Wyoming, United States <br />
                  & <br />
                  Rivers state, Nigeria.
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="xl:w-[384px]">
              <div class="flex justify-center mb-4">
                <div class="w-[58px] h-[58px] rounded-full p-1 bg-green-500">
                  <NuxtImg src="/contact-phone.svg" class="w-full" />
                </div>
              </div>
              <div
                class="text-center text-navy-blue-900 lato-semi-bold text-xl mb-2"
              >
                Phone
              </div>
              <div class="text-grey-500 text-center mb-5 lato-regular">
                Mon-Fri from 8am to 5pm.
              </div>
              <div class="text-blue-500 text-center lato-medium">
                +1 (555) 000-0000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-grey-100">
      <section id="contactForm">
        <div class="app-container">
          <div class="py-12 xl:py-24 px-4 flex flex-col items-center w-full">
            <div class="text-center mb-8 w-[300px]">
              <div class="text-navyBlue-900 lato-semi-bold text-2xl mb-2">
                Get in touch
              </div>
              <div class="text-grey-500">
                Please fill out this form for any enquires.
              </div>
            </div>
            <!-- form -->
            <div class="w-full lg:w-[500px] xl:w-[616px]">
              <form>
                <!-- first & last name -->
                <div class="mb-5 xl:flex">
                  <div class="w-full mb-5 xl:w-6/12 xl:mb-0 mr-2">
                    <div class="text-navy-blue-900 text-sm mb-1.5 lato-medium">
                      First name
                    </div>
                    <input
                      type="text"
                      required
                      class="w-full px-[14px] py-3 text-grey-500 rounded-xl border border-grey-300"
                      placeholder="Enter your First name"
                    />
                  </div>
                  <div class="w-full xl:w-6/12 ml-2">
                    <div class="text-navy-blue-900 text-sm mb-1.5 lato-medium">
                      Last name
                    </div>
                    <input
                      type="text"
                      required
                      class="w-full px-[14px] py-3 text-grey-500 rounded-xl border border-grey-300"
                      placeholder="Enter your Last name"
                    />
                  </div>
                </div>
                <div class="mb-8">
                  <div class="full mb-5">
                    <div class="text-navy-blue-900 text-sm mb-1.5 lato-medium">
                      Email
                    </div>
                    <input
                      required
                      type="email"
                      class="w-full px-[14px] py-3 text-grey-500 rounded-xl border border-grey-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div class="full">
                    <div class="text-navy-blue-900 text-sm mb-1.5 lato-medium">
                      Message
                    </div>
                    <textarea
                      class="w-full px-[14px] py-3 text-grey-500 rounded-xl border border-grey-300 resize-none text-black"
                      rows="4"
                      required
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    class="p-3 bg-blue-500 w-full text-center rounded-xl text-white lato-medium hover:bg-blue-600"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing-page-layout",
});
</script>

<style></style>
