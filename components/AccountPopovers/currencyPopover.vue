<template>
  <div>
    <AccountModal
      @close-modal="CloseModal()"
      :setup="{
        modalActive: props.setup.openModal,
        modalTitle: 'Filter Year',
      }"
    >
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
        <div class="manage-modal-container-height">
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
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
                <div class="lato-medium text-navyBlue-900 mb-1">Naira</div>
                <div class="text-xs text-grey-500">Nigeria</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="~/assets/img/caret-right.svg" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </AccountModal>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['closeCurrencyModal']);
const props = defineProps<{
  setup: {
    openModal: boolean;
  };
}>();
const CloseModal = () => {
  emit('closeCurrencyModal');
};
</script>
<style scoped>
.manage-modal-container-height {
  max-height: calc(100vh - 300px);
  overflow-y: scroll;
  padding-bottom: 20px;
}
</style>
