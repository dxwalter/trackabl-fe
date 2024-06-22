<template>
  <div class="plan-tabs">
    <div class="flex w-full mx-auto justify-center mb-8 gap-2">
      <div
        class="w-full xl:w-[400px] flex border border-[#0439A3] rounded-lg p-1.5"
      >
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: tab === activeTab }"
          @click="activeTab = tab"
          class="py-2.5 w-full px-3.5 rounded-md lato-regular text-base text-grey-500"
        >
          {{ tab }}
        </button>
        <div
          class="self-center hidden xl:inline bg-blue-50 py-0.5 px-2.5 rounded-2xl text-sm text-blue-500 w-full"
        >
          Save 20%
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div
        v-if="activeTab === 'Monthly billing'"
        class="flex flex-col xl:flex-row gap-5 w-full"
      >
        <div class="border-[#005EE8] p-6 rounded-2xl border-2 w-full">
          <h3 class="lato-semibold text-[#101828] mb-6">Free</h3>

          <div class="flex">
            <sup class="text-2xl text-blue-900 lato-semi-bold leading-10"
              >₦</sup
            >
            <div class="text-blue-900 lato-semi-bold text-4xl self-center px-1">
              0
            </div>
            <div class="lato-medium text-grey-500 text-base self-center">
              / month
            </div>
          </div>

          <p class="mt-6 lato-semibold mb-1">FEATURES</p>
          <p class="lato-regular text-grey-500">
            Everything in our monthly plan plus....
          </p>
          <ul class="mt-6 flex flex-col gap-4">
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Unlock all features</p>
            </li>
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Basic reporting + analytics</p>
            </li>
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Up to 10 individual users</p>
            </li>
          </ul>
          <button
            class="current h-[56px] mt-6 py-2 px-4 rounded-xl w-full bg-grey-300 text-white lato-medium"
          >
            Current Subscription
          </button>
        </div>
        <div class="w-full border p-6 rounded-2xl border-grey-300">
          <div class="mb-6 flex justify-between">
            <h3 class="lato-semibold text-[#101828]">Premium</h3>
            <div
              class="bg-[#039855] p-2 rounded-lg text-xs self-start text-white"
            >
              RECOMMENDED
            </div>
          </div>

          <div class="flex">
            <sup class="text-2xl text-blue-900 lato-semi-bold leading-10"
              >₦</sup
            >
            <div class="text-blue-900 lato-semi-bold text-4xl self-center px-1">
              4,000
            </div>
            <div class="lato-medium text-grey-500 text-base self-center">
              / month
            </div>
          </div>

          <p class="mt-6 lato-semibold mb-1">FEATURES</p>
          <p class="lato-regular text-grey-500">
            Everything in our monthly plan plus....
          </p>
          <ul class="mt-6 flex flex-col gap-4">
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Unlock all features</p>
            </li>
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Basic reporting + analytics</p>
            </li>
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Up to 10 individual users</p>
            </li>
          </ul>
          <button
            class="current h-[56px] mt-6 py-2 px-4 rounded-xl w-full bg-blue-500 text-white lato-medium"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div
        v-if="activeTab === 'Annual billing'"
        class="flex flex-col xl:flex-row gap-5 w-full"
      >
        <div class="border-grey-300 p-6 rounded-2xl border w-full">
          <h3 class="lato-semibold text-[#101828] mb-6">Free</h3>

          <div class="flex">
            <sup class="text-2xl text-blue-900 lato-semi-bold leading-10"
              >₦</sup
            >
            <div class="text-blue-900 lato-semi-bold text-4xl self-center px-1">
              0
            </div>
            <div class="lato-medium text-grey-500 text-base self-center">
              / month
            </div>
          </div>

          <p class="mt-6 lato-semibold mb-1">FEATURES</p>
          <p class="lato-regular text-grey-500">
            Everything in our monthly plan plus....
          </p>
          <ul class="mt-6 flex flex-col gap-4">
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Unlock all features</p>
            </li>
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Basic reporting + analytics</p>
            </li>
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Up to 10 individual users</p>
            </li>
          </ul>
          <button
            class="current h-[56px] mt-6 py-2 px-4 rounded-xl w-full bg-grey-300 text-white lato-medium"
          >
            Current Subscription
          </button>
        </div>
        <div class="w-full border p-6 rounded-2xl border-grey-300">
          <div class="mb-6 flex justify-between">
            <h3 class="lato-semibold text-[#101828]">Premium</h3>
            <div
              class="bg-[#039855] p-2 rounded-lg text-xs self-start text-white"
            >
              RECOMMENDED
            </div>
          </div>

          <div class="flex">
            <sup class="text-2xl text-blue-900 lato-semi-bold leading-10"
              >₦</sup
            >
            <div class="text-blue-900 lato-semi-bold text-4xl self-center px-1">
              4,000
            </div>
            <div class="lato-medium text-grey-500 text-base self-center">
              / month
            </div>
          </div>

          <p class="mt-6 lato-semibold mb-1">FEATURES</p>
          <p class="lato-regular text-grey-500">
            Everything in our monthly plan plus....
          </p>
          <ul class="mt-6 flex flex-col gap-4">
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Unlock all features</p>
            </li>
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Basic reporting + analytics</p>
            </li>
            <li class="flex gap-3">
              <img src="/assets/img/check-icon.svg" alt="" />
              <p class="text-grey-500">Up to 10 individual users</p>
            </li>
          </ul>
          <button
            class="current h-[56px] mt-6 py-2 px-4 rounded-xl w-full bg-blue-500 text-white lato-medium"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PlanTabs',
  setup() {
    const tabs = ['Monthly billing', 'Annual billing'];
    const activeTab = ref(tabs[0]);

    return {
      tabs,
      activeTab,
    };
  },
};
</script>

<style scoped>
.plan-tabs {
  /* width: 100%; */
  margin: 20px auto;
  /* max-width: 800px; */
}

/* .tab-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
} */

/* .tab-header button {
  padding: 10px 20px;
  border: none;
  background-color: #f4f4f4;
  cursor: pointer;
  margin: 0 5px;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;
} */

button.active {
  background-color: #101828;
  color: white;
}

.tab-header button:hover:not(.active) {
  background-color: #ddd;
}

.tab-content {
  display: flex;
  justify-content: center;
}

/* .tab-panel {
  display: flex;
  gap: 20px;
} */

.plan {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  /* width: 250px; */
  text-align: center;
}

.plan h3 {
  margin-bottom: 10px;
}

.plan p {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.plan ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

.plan ul li {
  margin: 10px 0;
}

/* button.current {
  background-color: #f4f4f4;
  color: gray;
  cursor: not-allowed;
}

button.subscribe {
  background-color: #007bff;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

button.subscribe:hover {
  background-color: #0056b3;
} */
</style>
