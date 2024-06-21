<template>
  <div>
    <AccountModal
      @close-modal="CloseModal()"
      :setup="{
        modalActive: props.setup.openModal,
        modalTitle: '',
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
            v-for="(action, i) in props.setup.editActions"
            :key="`edit-actions-${i}`"
          >
            <!-- <ul> -->
            <li
              class="py-2.5 px-3.5 cursor-pointer w-full flex justify-between text-navyBlue-900"
              :key="`action-${i}`"
              @click="handleActionClick(action)"
            >
              <p>{{ action.text }}</p>
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
const emit = defineEmits(['closeYearFilterModal', 'actionClick']);
const props = defineProps<{
  setup: {
    openModal: boolean;
    editActions: [];
  };
}>();
const CloseModal = () => {
  emit('closeYearFilterModal');
};

const handleActionClick = (action) => {
  emit('actionClick', action);
};
</script>
<style scoped>
.manage-modal-container-height {
  max-height: calc(100vh - 300px);
  /* overflow-y: scroll; */
  padding-bottom: 20px;
}
</style>
