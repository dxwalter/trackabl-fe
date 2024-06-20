<template>
  <div>
    <AccountModal
      @close-modal="CloseModal()"
      :setup="{
        modalActive: props.setup.openModal,
        modalTitle: 'Select Year',
      }"
    >
      <div>
        <!-- search -->
        <!-- <div class="mb-6">
          <input
            type="text"
            class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field search-input"
            placeholder="Search using currency name or country"
          />
        </div> -->
        <!-- modal content -->
        <div class="manage-modal-container-height">
          <!--  -->
          <div
            class="border border-grey-200 w-full card-border-radius flex justify-between mb-4"
            v-for="(year, i) in props.setup.yearList"
            :key="`year-list-${i}`"
          >
            <!-- <ul> -->
            <li
              class="py-2.5 px-3.5 cursor-pointer w-full flex justify-between text-navyBlue-900"
              :class="year.checked ? 'bg-blue-50' : ''"
              :key="`year-${i}`"
              @click="handleChangeDate(year)"
            >
              <p>{{ year.text }}</p>
              <img
                src="/check.svg"
                class="self-center"
                alt=""
                v-if="year.checked"
              />
            </li>
            <!-- </ul> -->
          </div>
          <!--  -->

          <!--  -->
        </div>
      </div>
    </AccountModal>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['closeYearFilterModal', 'changeDate']);
const props = defineProps<{
  setup: {
    openModal: boolean;
    yearList: [];
  };
}>();
const CloseModal = () => {
  emit('closeYearFilterModal');
};

const handleChangeDate = (year) => {
  emit('changeDate', year);
};
</script>
<style scoped>
.manage-modal-container-height {
  max-height: calc(100vh - 300px);
  overflow-y: scroll;
  padding-bottom: 20px;
}
</style>
