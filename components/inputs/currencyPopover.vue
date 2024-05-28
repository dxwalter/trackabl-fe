<template>
  <transition name="modal-animation">
    <div
      class=""
      :class="{
        hidden: !props.setup.modalActive,
        'modal-container': props.setup.modalActive,
      }"
    >
      <div class="relative w-full h-screen">
        <div class="modal-inner-container">
          <div class="modal-inner" v-show="props.setup.modalActive">
            <div class="flex justify-between w-full mb-6">
              <div
                class="text-NavyBlue-900 lato-semi-bold text-2xl self-center"
              >
                Expense currency
              </div>
              <button
                class="border-0 rounded-full close-modal-btn w-[20px] h-[24px] flex justify-center item-ends border-0 cursor-pointer self-center"
                @click="closeModal"
              >
                <NuxtImg src="/close-modal.svg" class="w-full" />
              </button>
            </div>

            <div>
              <!-- search -->
              <div class="mb-6">
                <input
                  type="text"
                  class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field search-input"
                  placeholder="Search using currency name or country"
                />
              </div>
              <!-- modal content -->
              <div class="manage-container-height">
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
                <!--  -->
                <div
                  class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
                >
                  <div class="flex self-center">
                    <div
                      class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
                    >
                      ₦
                    </div>
                    <div>
                      <div class="lato-medium text-navyBlue-900 mb-1">
                        Naira
                      </div>
                      <div class="text-xs text-grey-500">Nigeria</div>
                    </div>
                  </div>
                  <div class="w-[16px] self-center">
                    <NuxtImg src="/caret-right.svg" class="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const emit = defineEmits(["closeModal"]);

const props = defineProps<{
  setup: {
    modalActive: boolean;
  };
}>();

const closeModal = () => {
  emit("closeModal");
};

const HideOverflowInBodyTag = () => {
  const bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.classList.add("overflow-hidden");
};
const ShowOverflowInBodyTag = () => {
  const bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.classList.remove("overflow-hidden");
};

watch(
  props,
  () => {
    if (props.setup.modalActive) {
      HideOverflowInBodyTag();
    } else {
      ShowOverflowInBodyTag();
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<style lang="css" scoped>
.modal-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(58, 50, 56, 0.6);
  border: 0;
  backdrop-filter: blur(2px);
  z-index: 1000;
}

.modal-inner-container {
  display: none;
}

.modal-container .modal-inner-container {
  width: 100%;
  max-height: calc(100vh - 100px);
  height: calc(100vh - 150px);
  background-color: white;
  position: absolute;
  bottom: 0px;
  padding: 24px 16px 48px 16px;
  animation: animateBottom 1000ms ease-in-out;
  display: block;
}

@keyframes animateBottom {
  from {
    bottom: -1000px;
  }
  to {
    bottom: 0;
  }
}

@media (min-width: 640px) {
  .modal-container .modal-inner-container {
    width: 500px;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 16px 16px 0px 0px;
  }
}

@media (min-width: 768px) {
  .modal-container .modal-inner-container {
    max-height: unset;
    height: 100vh;
    width: 500px;
    left: 50%;
    top: 0;
    padding: 48px;
    /* Center the element by translating it back half its width and height */
    transform: translate(-20%, 0%);
    border-radius: 0;
    animation: fadeInAnimation ease 500ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

@media (min-width: 1024px) {
  .modal-container .modal-inner-container {
    width: 755px;
    transform: translate(-20%, 0%);
    right: 0;
    padding: 48px;
    align-self: center;
  }
}

@media (min-width: 1650px) {
  .modal-container .modal-inner-container {
    right: 0;
    transform: unset;
  }
}

.manage-container-height {
  height: calc(100vh - 300px);
  overflow-y: scroll;
  padding-bottom: 20px;
}
</style>
