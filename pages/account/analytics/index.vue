<template>
  <div>
    <div class="mb-6 px-[18px] xl:px-9 flex justify-between items-center">
      <div class="lato-semi-bold text-navyBlue-900 xl:text-2xl">
        Adeola Adeyoyin
      </div>
      <div class="hidden md:block">
        <AnalyticsTab :tabs="tabs" @update:selectedTab="updateSelectedTab">
        </AnalyticsTab>
      </div>
      <select name="" id="">
        <option value="">This year</option>
      </select>
    </div>

    <div class="mb-6 px-[18px] xl:px-9">
      <component :is="tabComponents[selectedTabContent]"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AnalyticsTab from '@/components/Analytics/AnalyticsTab.vue';
import AllExpenses from '@/components/Analytics/AllExpenses.vue';

definePageMeta({
  layout: 'account',
});

const tabs = ref([
  { name: 'All', slot: 'tab1' },
  { name: 'Daily', slot: 'tab2' },
  { name: 'Weekly', slot: 'tab3' },
  { name: 'Monthly', slot: 'tab4' },
]);

const tabComponents = {
  tab1: AllExpenses,
};

const selectedTabContent = ref('tab1');

const updateSelectedTab = (slotName) => {
  console.log(slotName);
  selectedTabContent.value = slotName;
};
</script>
