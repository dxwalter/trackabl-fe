<template>
  <div>
    <div class="text-navyBlue-900 text-sm mb-1.5 lato-medium">
      Add a receipt
    </div>
    <div
      class="flex w-full py-[16px] px-[24px] border rounded-xl border-grey-300 cursor-pointer relative"
    >
      <div class="w-[40px] mr-3 self-center">
        <img src="/assets/img/file-upload-icon.svg" class="w-full" />
      </div>
      <div class="text-xs text-grey-500 self-center" v-if="!file">
        <div class="mb-1">
          <span class="text-blue-500">Click to upload </span>
          <span>or drag and drop</span>
        </div>
        <div>JPEG, JPG, PNG, or PDF</div>
      </div>
      <div class="text-xs text-grey-500 self-center" v-else>
        <div class="mb-1">
          <div>{{ file?.name }}</div>
        </div>
      </div>
      <input
        type="file"
        class="file-style cursor-pointer"
        @change="exportFiles"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['getFile']);
const file = ref(null);

const exportFiles = (event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  file.value = target.files[0];

  if (!files || files.length === 0) return;
  emit('getFile', files);
};
</script>

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
