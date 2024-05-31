<template>
  <div>
    <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">
      Add a receipt
    </div>
    <div
      class="flex w-full py-[16px] px-[24px] border rounded-xl border-grey-300 cursor-pointer relative"
    >
      <div class="w-[40px] mr-3 self-center">
        <NuxtImg src="/file-upload-icon.svg" class="w-full" />
      </div>
      <div class="text-xs text-grey-500 self-center">
        <div class="mb-1">
          <span class="text-blue-500">Click to upload </span>
          <span>or drag and drop</span>
        </div>
        <div>JPEG, JPG, PNG, or PDF</div>
      </div>
      <input type="file" class="file-style" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
.file-style {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
}
</style>
