<template>
  <div>
    <div class="mb-6 px-[18px] xl:px-9 flex justify-between">
      <div class="w-[62px]">
        <img
          src="/assets/img/arrow-left.svg"
          alt=""
          class="self-center cursor-pointer"
          @click="$router.back()"
        />
      </div>
      <p class="lato-medium text-2xl font-semibold self-center xl:hidden">
        Profile
      </p>
      <p class="text-red-500 font-medium self-center xl:hidden">Sign Out</p>
    </div>

    <div
      class="w-full xl:w-[545px] px-[18px] xl:px-8 xl:py-8 xl:border mt-6 xl:border-grey-200 xl:shadow-sm rounded mx-auto"
    >
      <div class="flex justify-between">
        <div class="w-[62px]"></div>
        <p
          class="lato-medium text-xl font-semibold self-center hidden xl:block text-[#101828]"
        >
          Profile
        </p>
        <p class="text-red-500 font-medium self-center hidden xl:block">
          Sign Out
        </p>
      </div>

      <div class="xl:mt-8 flex flex-col justify-center">
        <div class="relative w-[96px] h-[96px] mx-auto rounded-[50%]">
          <img src="/assets/img/profile-icon.svg" class="w-full" alt="" />
          <img
            src="/assets/img/edit.svg"
            alt=""
            class="absolute bottom-0 right-0 xl:hidden"
          />
        </div>
        <div class="text-center mt-2">
          <p class="text-grey-900 text-[18px]">
            {{ profileData?.firstName }} {{ profileData?.lastName }}
          </p>
          <p class="text-grey-500 mt-2">{{ profileData?.email }}</p>
        </div>
      </div>

      <div class="mt-8 flex flex-col justify-center">
        <nuxt-link
          to="/account/profile/edit-profile"
          class="rounded-[8px] border rounded-bl-none py-3 px-4 border-grey-200 flex justify-between"
        >
          <p class="text-[#101828]">Edit Profile</p>
          <img src="/assets/img/caret-right.svg" alt="" />
        </nuxt-link>

        <nuxt-link
          to="/account/profile/manage-subscription"
          class="rounded-[8px] border rounded-bl-none py-3 px-4 border-grey-200 flex justify-between mt-4"
        >
          <p class="text-[#101828]">Manage Subscription</p>
          <img src="/assets/img/caret-right.svg" alt="" />
        </nuxt-link>

        <div
          class="rounded-[8px] border rounded-bl-none py-3 px-4 border-grey-200 flex justify-between mt-4 cursor-pointer"
          @click="showChangePasswordModal = true"
        >
          <p class="text-[#101828]">Change Password</p>
          <img src="/assets/img/caret-right.svg" alt="" />
        </div>

        <div
          class="rounded-[8px] border rounded-bl-none py-3 px-4 border-grey-200 flex justify-between mt-4"
        >
          <p class="text-[#101828]">Notification</p>
          <Toggle />
        </div>

        <div class="mt-[56px]">
          <button
            class="w-full text-white bg-red-500 py-3 px-4 rounded-xl border-blue-400 hover:bg-red-700"
            @click="showDeleteModal = true"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>

  <AccountPopoversChangePassword
    :setup="{
      open: showChangePasswordModal,
    }"
    @close-modal="showChangePasswordModal = false"
  />

  <AccountPopoversDeleteAccount
    :setup="{
      open: showDeleteModal,
    }"
    @close-modal="showDeleteModal = false"
  />
</template>
<script lang="ts" setup>
import Toggle from '@/components/Toggle.vue';
import { onMounted } from 'vue';

defineComponent({
  Toggle,
});
definePageMeta({
  layout: 'account',
});

const showChangePasswordModal = ref(false);
const showDeleteModal = ref(false);
const isPending = ref(false);
const profileData = ref(null);

const fetchProfile = async () => {
  const { data, error } = await useMyFetch('/user', {
    method: 'GET',
  });
  console.log(data.value.data);
  profileData.value = data.value.data;
  // console.log(error);
  // currencies.value = data.value.data;
  if (data.value) {
    isPending.value = false;
  } else {
    useNuxtApp().$toast.error(
      `<div class="toastHeader lato-semi-bold text-base mb-2">${error.value.data.error}</div><div class="toastBody text-sm lato-regular">${error.value.data.message}</div>`
    );
  }
};

// onMounted(() => {
fetchProfile();
// });
</script>
