<template>
  <div>
    <div
      class="mb-6 px-[18px] xl:px-9 justify-between hidden xl:flex items-center"
    >
      <div class="lato-semi-bold text-navyBlue-900 xl:text-2xl flex gap-6">
        <img src="/assets/img/arrow-left.svg" class="w-6 h-6 self-center" />
        <div class="flex gap-2.5">
          <img src="/assets/img/food-category.svg" class="w-9 h-9" />
          <p>Food & Drinks</p>
        </div>
      </div>

      <div class="">
        <AnalyticsTab :tabs="tabs" @update:selectedTab="updateSelectedTab">
        </AnalyticsTab>
      </div>

      <!-- <div
        class="flex gap-[2px] px-2 py-1 border-b-2 border-blue-500 cursor-pointer"
        @click="latchCategoryPopover"
      >
        <NuxtImg src="/add.svg" class="w-4 h-4 self-center" />
        <p class="text-sm text-blue-500 font-medium leading-[20px]">
          Add subcategory
        </p>
      </div> -->

      <div class="relative w-[185px]">
        <div
          class="py-3 flex px-3.5 rounded-xl cursor-pointer gap-2 justify-between border-grey-200 border text-grey-500"
          @click="showYearDropdown = !showYearDropdown"
        >
          <p>{{ currentYearDate }}</p>

          <img src="/assets/img/arrow-down.svg" alt="" />
        </div>

        <div
          class="absolute right-0 top-[60px] rounded-xl w-[241px] shadow bg-white border-grey-200"
        >
          <ul v-if="showYearDropdown">
            <li
              class="py-2.5 px-3.5 cursor-pointer flex justify-between text-navyBlue-900"
              :class="year.checked ? 'bg-blue-50' : ''"
              v-for="(year, i) in yearFilter"
              :key="`year-${i}`"
              @click="handleChangeDate(year)"
            >
              <p>{{ year.text }}</p>
              <img
                src="/assets/img/check.svg"
                class="self-center"
                alt=""
                v-if="year.checked"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="mb-6 px-[18px] xl:px-9 justify-between xl:hidden block items-center"
    >
      <div class="flex justify-between mb-4">
        <div class="lato-semi-bold text-navyBlue-900 xl:text-2xl flex gap-6">
          <img src="/assets/img/arrow-left.svg" class="w-6 h-6 self-center" />
          <div class="flex gap-2.5">
            <img src="/assets/img/food-category.svg" class="w-9 h-9" />
            <p class="self-center text-2xl">Food & Drinks</p>
          </div>
        </div>
      </div>
      <div
        class="py-3 md:flex px-3.5 rounded-xl cursor-pointer gap-2 justify-between border-grey-200 border text-grey-500 hidden"
        @click="latchYearFilterPopover"
      >
        <p>{{ currentYearDate }}</p>

        <img src="/assets/img/arrow-down.svg" alt="" />
      </div>
      <div class="">
        <AnalyticsTab :tabs="tabs" @update:selectedTab="updateSelectedTab">
        </AnalyticsTab>
      </div>
    </div>

    <div class="mb-6 px-[18px] xl:px-9">
      <component :is="tabComponents[selectedTabContent]"></component>
    </div>

    <AccountPopoversYearFilterPopover
      :setup="{
        openModal: openYearFilterModal,
        yearList: yearFilter,
      }"
      @closeYearFilterModal="latchYearFilterPopover"
      @changeDate="handleChangeDate"
    />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AnalyticsTab from '@/components/Analytics/AnalyticsTab.vue';
import SubCategoryExpenses from '@/components/Analytics/SubCategoryExpenses.vue';

const route = useRoute();

definePageMeta({
  layout: 'account',
});

const yearFilter = ref([
  { text: 'This year (2024)', checked: true },
  { text: 'Last year - (2023)', checked: false },
  { text: '2022', checked: false },
  { text: '2021', checked: false },
]);

const tabs = ref([
  { name: 'All', slot: 'tab1' },
  { name: 'Daily', slot: 'tab2' },
  { name: 'Weekly', slot: 'tab3' },
  { name: 'Monthly', slot: 'tab4' },
]);

const tabComponents = {
  tab1: SubCategoryExpenses,
  tab2: SubCategoryExpenses,
  tab3: SubCategoryExpenses,
  tab4: SubCategoryExpenses,
};

const selectedTabContent = ref('tab1');

const updateSelectedTab = (slotName) => {
  console.log(slotName);
  selectedTabContent.value = slotName;
};

const showYearDropdown = ref(false);
const currentYearDate = ref(yearFilter.value[0].text);

const handleChangeDate = (selectedYear) => {
  yearFilter.value.forEach((year) => {
    year.checked = year.text === selectedYear.text;
  });
  currentYearDate.value = selectedYear.text;
  showYearDropdown.value = false;
  openYearFilterModal.value = false;
};

const openYearFilterModal = ref(false);

const latchYearFilterPopover = () => {
  openYearFilterModal.value = !openYearFilterModal.value;
};
</script>

<style lang="scss" scoped></style>
