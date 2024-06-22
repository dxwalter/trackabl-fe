<template>
  <div>
    <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">Expense date</div>
    <div class="date-modifier">
      <VueDatePicker
        v-model="date"
        :enable-time-picker="false"
        auto-apply
        placeholder="DD/MM/YYYY"
      >
        <!-- <div
          class="flex justify-start w-full py-[10px] px-[14px] border rounded-xl border-grey-300"
        >
          <div class="flex justify-between w-full">
            <div class="text-navyBlue-900 lato-medium self-center">
              24/04/2024
            </div>
            <div class="w-[20px] self-center">
              <img src="~/assets/img/calendar.svg" class="w-full" />
            </div>
          </div>
        </div> -->

        <template #input-icon>
          <div class="w-[20px] self-center">
            <img src="/assets/img/calendar.svg" class="w-full" />
          </div>
        </template>
      </VueDatePicker>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
const date = ref('');
</script>

<style scoped lang="css">
.date-modifier
  :deep(.dp__main .dp__input_wrap .dp__icon.dp__clear_icon.dp__input_icons) {
  display: none !important;
}

.date-modifier :deep(.dp__main .dp__input_wrap .dp__input_reg) {
  /* display: none !important; */
  color: #101828;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  padding: 12px 14px;
}

.date-modifier :deep(.dp__main .dp__input_wrap .dp__input_reg::placeholder) {
  color: #667085;
}

.date-modifier :deep(.dp__main .dp__input_wrap input::placeholder) {
  color: #667085;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.date-modifier :deep(.dp__main .dp__input_wrap div) {
  position: absolute;
  right: 0;
  margin-right: 8px;
  top: 8px;
}

.date-modifier :deep(.dp__main .dp__menu_inner) {
  padding: 12px 16px;
  width: 300px;
}

.date-modifier
  :deep(
    .dp__main .dp__outer_menu_wrap .dp--header-wrap .dp__month_year_wrap button
  ) {
  font-family: 'LatoMedium', sans-serif;
  color: #344054;
  font-weight: bold !important;
  font-size: 16px;
}

.date-modifier :deep(.dp__main .dp__outer_menu_wrap .dp__active_date) {
  background-color: #005ee8;
  border-radius: 12px;
}
.date-modifier :deep(.dp__main .dp__outer_menu_wrap .dp__calendar) {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.date-modifier
  :deep(
    .dp__main
      .dp__outer_menu_wrap
      .dp__calendar
      .dp__calendar_header
      .dp__calendar_header_item
  ) {
  font-size: 14px;
  color: #344054;
  font-family: 'Lato', sans-serif;
  font-style: normal;
}
</style>
