<template>
  <div>
    <div class="mb-6 px-[18px] xl:px-9 flex justify-between">
      <div class="w-[62px]">
        <img
          src="/arrow-left.svg"
          alt=""
          class="self-center"
          @click="$router.back()"
        />
      </div>
      <p class="text-2xl font-semibold self-center xl:hidden">Profile</p>
      <p class="text-red-500 font-medium self-center xl:hidden">Sign Out</p>
    </div>

    <div
      class="w-full xl:w-[545px] px-[18px] xl:px-8 xl:py-8 xl:border mt-6 xl:border-grey-200 xl:shadow-sm rounded mx-auto"
    >
      <div class="flex justify-between">
        <div class="w-[62px]"></div>
        <p
          class="text-xl font-semibold self-center hidden xl:block text-[#101828]"
        >
          Profile
        </p>
        <p class="text-red-500 font-medium self-center hidden xl:block">
          Sign Out
        </p>
      </div>

      <div class="xl:mt-8 flex flex-col justify-center">
        <div
          class="bg-red-500 relative w-[96px] h-[96px] mx-auto rounded-[50%]"
        >
          <img src="/profile-icon.svg" class="w-full" alt="" />
          <img
            src="/edit.svg"
            alt=""
            class="absolute bottom-0 right-0 cursor-pointer"
            @click="latchEditProfilePopover"
          />
        </div>
        <div class="text-center mt-2">
          <p class="text-grey-900 text-[18px]">Adeola Adedoyin</p>
          <p class="text-grey-500 mt-2">adeola4real@gmail.com</p>
        </div>
      </div>

      <div class="mt-8 flex flex-col justify-center">
        <div class="">
          <div
            class="flex justify-between mb-1.5 text-navyBlue-900 text-sm lato-medium"
          >
            <div class="text-sm">Full Name</div>
          </div>
          <input
            required
            type="text"
            class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field"
            placeholder="Enter short name"
            v-model="full_name"
          />
        </div>

        <div class="mt-8">
          <div
            class="flex justify-between mb-1.5 text-navyBlue-900 text-sm lato-medium"
          >
            <div class="text-sm">Email</div>
          </div>
          <input
            required
            type="email"
            class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field"
            placeholder="Enter short name"
            v-model="email"
          />
        </div>

        <div class="mt-[56px]">
          <button
            class="w-full text-white bg-blue-500 py-3 px-4 rounded-xl border-blue-400 hover:bg-red-700"
          >
            Update
          </button>
          <p class="text-sm text-grey-500 mt-2 text-center">
            You can make update to your profile details once every 30 days.
          </p>
        </div>
      </div>
    </div>

    <AccountPopoversEditProfilePopover
      :setup="{
        openModal: openEditProfileModal,
        editActions: editActions,
      }"
      @closeYearFilterModal="latchEditProfilePopover"
      @actionClick="handleActionClick"
    />
  </div>
</template>
<script lang="ts" setup>
import Toggle from '@/components/Toggle.vue';
import { ref } from 'vue';

defineComponent({
  Toggle,
});
definePageMeta({
  layout: 'account',
});

const full_name = ref('Adeola Adedoyin');
const email = ref('adeola4real@gmail.com');
const openEditProfileModal = ref(false);
const editActions = ref([
  { text: 'Take Photo', checked: true },
  { text: 'Upload Photo', checked: false },
  { text: 'View Photo', checked: false },
]);

const latchEditProfilePopover = () => {
  console.log('kdkfd');
  openEditProfileModal.value = !openEditProfileModal.value;
};

const handleActionClick = () => {
  console.log('action click');
  openEditProfileModal.value = false;
};
</script>
