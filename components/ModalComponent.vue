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
            <div class="flex justify-end w-full">
              <div class="mb-6">
                <button
                  class="border-0 rounded-full close-modal-btn w-[24px] h-[24px] flex justify-center item-ends border-0 cursor-pointer"
                  @click="closeModal"
                >
                  <img src="~/assets/img/close-modal.svg" class="w-full" />
                </button>
              </div>
            </div>
            <div>
              <!-- modal content -->

              <slot />
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
    height: fit-content;
    width: 600px;
    left: 50%;

    top: 0;
    padding: 48px;
    /* Center the element by translating it back half its width and height */
    transform: translate(-50%, 0%);
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
    min-height: 1px;
    padding: 48px;
    align-self: center;
  }
}

@media (min-width: 1650px) {
  .modal-container .modal-inner-container {
    transform: unset;
    left: 0;
    right: 0;
    top: 0;
  }
}
</style>
