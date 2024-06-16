<template>
  <div
    class="w-full fixed bottom-0 z-10 px-[112px] pt-10 pb-8 border-t-2 border-t-grey-200 flex justify-between bg-white"
  >
    <div class="current-year text-grey-500 self-center">
      © {{ currentYear }} Trackabl.io. All rights reserved.
    </div>
    <div class="self-center">
      <div class="flex">
        <div class="w-[24px] self-center">
          <NuxtLink
            to="https://www.facebook.com/61559650231999"
            target="_blank"
            class="sm-links"
          >
            <NuxtImg src="/facebook-grey.svg" class="w-full"></NuxtImg>
          </NuxtLink>
        </div>
        <div class="w-[18px] self-center mx-4">
          <NuxtLink
            class="sm-links"
            to="https://twitter.com/officialtrackbl"
            target="_blank"
          >
            <NuxtImg src="/x-grey.svg" class="w-full"></NuxtImg
          ></NuxtLink>
        </div>
        <div class="w-[24px] self-center">
          <NuxtLink
            class="sm-links"
            to="https://www.instagram.com/trackabl/"
            target="_blank"
            ><NuxtImg src="/instagram-grey.svg" class="w-full"></NuxtImg
          ></NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="absolute bg-white w-fit p-1 manage-direction cursor-pointer"
      v-if="!isRouteAddExpense"
    >
      <NuxtLink to="/account/expense/add">
        <button class="w-[64px] h-[64px] bg-navyBlue-900 p-4 rounded-full">
          <NuxtImg src="/plus.svg" class="w-full" />
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const currentYear = new Date().getFullYear();
const isRouteAddExpense = ref(
  useRoute().path.toLowerCase().includes("expense/add")
);
</script>

<style lang="css" scoped>
.manage-direction {
  right: 40px;
  bottom: 120px;
  padding: 0;
  background-color: transparent;
}
</style>
