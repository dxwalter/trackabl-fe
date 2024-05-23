<template>
  <div class="flex">
    <div v-for="(data, index) in inputFields" :key="data.id">
      <input
        :type="data.type"
        :id="data.id"
        class="w-[56px] h-[56px] border border-grey-300 rounded-xl text-nav-blue-900 text-center blue-active-form-field"
        :class="{
          'mr-4': index < props.setup.numberOfFields,
        }"
        maxlength="1"
        v-model="data.value"
        v-on:paste="grabPastedData"
        @input="updateInputField(index, $event)"
        v-on:keydown="onKeyDown"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["otpValue"]);
const props = defineProps<{
  setup: {
    numberOfFields: number;
    fieldType: string;
  };
}>();

const pastedValues = ref("");
const isBackspaceActive = ref(false);

const inputFields = computed(() => {
  const data = [];

  for (let x = 0; x < props.setup.numberOfFields; x++) {
    data.push({
      id: `formId` + x,
      type: props.setup.fieldType,
      value: pastedValues.value[x] ?? "",
    });
  }

  return data;
});

const setActiveTarget = (index: number) => {
  const inputIndex = isBackspaceActive.value ? index - 1 : index;

  if (inputIndex >= 0) {
    const field = document.getElementById(`formId${inputIndex}`);
    if (field) {
      field.focus();
    }
  }
};

const onKeyDown = (event: any) => {
  if (event.key === "Backspace") {
    isBackspaceActive.value = true;
  } else {
    isBackspaceActive.value = false;
  }
};

function updateInputField(index: number, event: any) {
  const value = event.target.value;
  inputFields.value[index].value = value; // Update value directly

  // Optional: Emit the entire OTP value if needed
  const inputValue = inputFields.value.map((field) => field.value).join("");
  pastedValues.value = inputValue;
  setActiveTarget(
    inputValue.length === props.setup.numberOfFields
      ? inputValue.length - 1
      : inputValue.length
  );
}
const grabPastedData = (event: any) => {
  event.preventDefault();

  if (event.target.id) {
    const inputElement = <HTMLInputElement>(
      document.getElementById(event.target.id)
    );

    const value = event.clipboardData.getData("text/plain");

    if (isNaN(value) === false) {
      pastedValues.value = value;
      setActiveTarget(
        value.length > props.setup.numberOfFields
          ? props.setup.numberOfFields - 1
          : value.length
      );
    }
  }
};

watch(
  pastedValues,
  () => {
    emit("otpValue", pastedValues.value);
  },
  {
    deep: true,
    immediate: true,
  }
);

onMounted(() => {});
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
