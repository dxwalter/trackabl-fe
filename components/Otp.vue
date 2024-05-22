<template>
  <div class="flex">
    <div v-for="(data, index) in inputFields" :key="data.id">
      <input
        :type="data.type"
        :id="data.id"
        class="w-[56px] h-[56px] border border-grey-300 rounded-xl flex flex-row justify-center items-center"
        :class="{
          'mr-4': index < props.setup.numberOfFields,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  setup: {
    numberOfFields: number;
    fieldType: string;
  };
}>();

const inputFields = computed(() => {
  const data = [];
  for (let x = 0; x < props.setup.numberOfFields; x++) {
    data.push({
      id: `formId` + x,
      type: props.setup.fieldType,
    });
  }

  return data;
});
</script>

<style></style>
