<template>
  <div>
    <div>
      <div class="flex text-nav-blue-900 lato-semi-bold text-2xl mb-6">
        <span class="mr-2">Verify your Account</span><span>✅</span>
      </div>
      <div class="text-sm text-grey-500 mb-6">
        Please enter the 4 digit code we sent to your email address “<span
          class="text-nav-blue-900 lato-medium"
          >adeola4real@gmail.com</span
        >”
      </div>
      <div>
        <Otp
          :setup="{
            numberOfFields: 4,
            fieldType: 'number',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "pricing-page-layout",
});
</script>

<style></style>
