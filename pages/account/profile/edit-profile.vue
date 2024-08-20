<template>
  <div>
    <div class="mb-6 px-[18px] xl:px-9 flex gap-6">
      <div class="self-center">
        <img
          src="/assets/img/arrow-left.svg"
          alt=""
          class="cursor-pointer"
          @click="$router.back()"
        />
      </div>
      <p class="text-2xl font-semibold self-center xl:hidden">Edit Profile</p>
      <!-- <p class="text-red-500 font-medium self-center xl:hidden">Sign Out</p> -->
    </div>

    <div
      class="w-full xl:w-[545px] px-[18px] xl:px-8 xl:py-8 xl:border mt-6 xl:border-grey-200 xl:shadow-sm rounded mx-auto"
    >
      <div class="flex justify-center">
        <p
          class="text-xl font-semibold self-center hidden xl:block text-[#101828]"
        >
          Edit Profile
        </p>
        <!-- <p class="text-red-500 font-medium self-center hidden xl:block">
          Sign Out
        </p> -->
      </div>

      <div class="xl:mt-8 flex flex-col justify-center">
        <div class="relative w-[96px] h-[96px] mx-auto rounded-[50%]">
          <img src="/assets/img/profile-icon.svg" class="w-full" alt="" />
          <img
            src="/assets/img/edit.svg"
            alt=""
            class="absolute bottom-0 right-0 cursor-pointer"
            @click="latchEditProfilePopover"
          />
        </div>
        <div class="text-center mt-2">
          <p class="text-grey-900 text-[18px]">{{ form.full_name }}</p>
          <p class="text-grey-500 mt-2">{{ form.email }}</p>
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
            v-model="form.full_name"
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
            v-model="form.email"
          />
        </div>

        <div class="mt-[56px]">
          <button
            class="w-full text-white bg-blue-500 py-3 px-4 rounded-xl border-blue-400 hover:bg-red-700 flex justify-center"
            @click="updateProfile"
          >
            <div class="button-text" v-if="!isPending">Update</div>
            <div class="w-6" v-else>
              <img src="/assets/img/button-loader.svg" class="w-full" />
            </div>
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
import { useMyFetch } from '@/composables/useMyFetch.ts';
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
const isPending = ref(false);
const form = ref({
  full_name: '',
  email: '',
  trial_count: 0,
});

const latchEditProfilePopover = () => {
  console.log('kdkfd');
  openEditProfileModal.value = !openEditProfileModal.value;
};

const handleActionClick = () => {
  console.log('action click');
  openEditProfileModal.value = false;
};

const updateProfile = async () => {
  isPending.value = true;
  const { data, error } = await useMyFetch(`/user/update-profile`, {
    method: 'PATCH',
    body: form.value,
  });

  if (data.value) {
    form.value.trial_count += 1;
    useNuxtApp().$toast.success(
      `<div class="toastHeader lato-semi-bold text-base mb-2">Success</div><div class="toastBody text-sm lato-regular">${data.value.message}</div>`
    );
    isPending.value = false;
  } else {
    useNuxtApp().$toast.error(
      `<div class="toastHeader lato-semi-bold text-base mb-2">${error.value.data.error}</div><div class="toastBody text-sm lato-regular">${error.value.data.message}</div>`
    );
    form.value.trial_count += 1;
    isPending.value = false;
  }
};

const fetchProfile = async () => {
  const { data, error } = await useMyFetch('/user', {
    method: 'GET',
  });
  console.log(data.value.data);
  form.value.full_name = `${data.value.data.firstName} ${data.value.data.lastName}`;
  form.value.email = `${data.value.data.email}`;

  await fetchProfile();

  if (data.value) {
  } else {
    useNuxtApp().$toast.error(
      `<div class="toastHeader lato-semi-bold text-base mb-2">${error.value.data.error}</div><div class="toastBody text-sm lato-regular">${error.value.data.message}</div>`
    );
  }
};

onMounted(() => {
  fetchProfile();
});
</script>
