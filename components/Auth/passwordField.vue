<template>
  <div class="full">
    <div class="mb-1.5 flex justify-between">
      <div class="text-navyBlue-900 text-sm lato-medium self-center">
        {{ setup.label }}
      </div>

      <div
        class="password-score self-center flex"
        v-if="props.setup.showGuideLinesOnActive"
      >
        <div class="self-center mr-1 text-xs">
          <div class="weak-label text-red-600" v-if="passwordScore === 1">
            Weak
          </div>
          <div
            class="average-label text-warning-600"
            v-if="passwordScore === 2"
          >
            Average
          </div>
          <div class="strong-label text-green-600" v-if="passwordScore === 3">
            Strong
          </div>
        </div>
        <div class="flex self-center">
          <div
            class="w-[16px] h-[4px] rounded-full bg-grey-300 mr-1"
            :class="{
              weak: passwordScore === 1,
              average: passwordScore === 2,
              strong: passwordScore === 3,
            }"
          ></div>
          <div
            class="w-[16px] h-[4px] rounded-full bg-grey-300 mr-1"
            :class="{
              average: passwordScore === 2,
              strong: passwordScore === 3,
            }"
          ></div>
          <div
            class="w-[16px] h-[4px] rounded-full bg-grey-300 mr-1"
            :class="{
              strong: passwordScore === 3,
            }"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="flex rounded-xl border border-grey-300 overflow-hidden"
      :class="{
        'mb-1.5': props.setup.showGuideLinesOnActive && isPasswordFieldActive,
      }"
    >
      <input
        :required="props.setup.isRequired"
        :type="type"
        class="w-full px-[14px] rounded-xl py-3 text-navyBlue-900 self-center password-field"
        :id="props.setup.id"
        :placeholder="props.setup.placeholder"
        v-model="userPassword"
        @input="updatePasswordValue"
      />
      <div
        class="self-center h-full px-[14px] text-blue-700 text-sm underline cursor-pointer"
        style="text-underline-offset: 4px"
        @click="mangePasswordVisibility"
        data-test-password-visibility="true"
      >
        {{ isPasswordVisible ? 'Hide' : 'Show' }}
      </div>
    </div>
    <div v-if="props.setup.showGuideLinesOnActive && isPasswordFieldActive">
      <div class="flex">
        <div class="text-grey-500 text-base self-center mr-2">&#x2022;</div>
        <div
          class="text-grey-500 text-xs self-center"
          :class="{
            'line-through':
              passwordValidationRequirement.mustBeAtleastSixCharacters,
          }"
        >
          Must be least 6 characters
        </div>
      </div>
      <div class="flex">
        <div class="text-grey-500 text-base self-center mr-2">&#x2022;</div>
        <div
          class="text-grey-500 text-xs self-center"
          :class="{
            'line-through':
              passwordValidationRequirement.containsUpperCaseAndLowercase,
          }"
        >
          Contain Upper case and Lower case letters
        </div>
      </div>
      <div class="flex mb-0">
        <div class="text-grey-500 text-base self-center mr-2">&#x2022;</div>
        <div
          class="text-grey-500 text-xs self-center"
          :class="{
            'line-through':
              passwordValidationRequirement.containsNumbersAndSymbols,
          }"
        >
          Contain numbers or symbols
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['newPasswordState', 'passwordValue']);
const props = defineProps<{
  setup: {
    label: string;
    isRequired: boolean;
    placeholder: string;
    id: string;
    showGuideLinesOnActive: boolean;
  };
}>();

import { useFormInputManipulator } from '@/composables/FormInputManipulator';

const { HidePassword, ShowPassword } = useFormInputManipulator();

const userPassword = ref<string>('');
const passwordScore = ref(0);
const type = ref('password');

const isPasswordVisible = ref(false);
const isPasswordFieldActive = ref(false);
const passwordValidationRequirement = ref({
  containsNumbersAndSymbols: false,
  containsUpperCaseAndLowercase: false,
  mustBeAtleastSixCharacters: false,
});

const mangePasswordVisibility = () => {
  if (isPasswordVisible.value) {
    HidePassword(props.setup.id);
    type.value = 'password';
  } else {
    const kennyd = ShowPassword(props.setup.id);
    type.value = 'text';
  }

  isPasswordVisible.value = !isPasswordVisible.value;
};

const checkForCaseLetters = (password: string) => {
  // password contains lowercase and uppercase
  const regexLowerCase = /(?=.*[a-z]).*/;
  const regexHigherCase = /(?=.*[A-Z]).*/;

  return regexLowerCase.test(password) && regexHigherCase.test(password);
};

const checkForSpecialCharacters = (password: string) => {
  // password contains numbers and symbols
  const numberRegex = /\d+/;
  const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  return numberRegex.test(password) || symbolRegex.test(password);
};

const validatePassword = (password: string) => {
  // reset password score
  passwordScore.value = 0;
  passwordValidationRequirement.value = {
    containsNumbersAndSymbols: false,
    containsUpperCaseAndLowercase: false,
    mustBeAtleastSixCharacters: false,
  };

  // password length >= 6
  const passwordLength = password.length >= 6;

  if (passwordLength) {
    passwordScore.value = passwordScore.value + 1;
    passwordValidationRequirement.value.mustBeAtleastSixCharacters = true;
  }

  if (checkForCaseLetters(password)) {
    passwordScore.value = passwordScore.value + 1;
    passwordValidationRequirement.value.containsUpperCaseAndLowercase = true;
  }

  if (checkForSpecialCharacters(password)) {
    passwordScore.value = passwordScore.value + 1;
    passwordValidationRequirement.value.containsNumbersAndSymbols = true;
  }

  emit('newPasswordState', {
    status: passwordScore.value === 3 ? true : false,
    data: password,
  });
};

const updatePasswordValue = (e) => {
  emit('passwordValue', e);
};

watch(
  userPassword,
  () => {
    isPasswordFieldActive.value = userPassword.value.length > 0 ? true : false;
    validatePassword(userPassword.value);
  },
  {
    immediate: true,
  }
);
</script>

<style lang="css" scoped>
.password-score .weak {
  background-color: #f04438;
}

.password-score .average {
  background-color: #f79009;
}

.password-score .strong {
  background-color: #12b76a;
}
</style>
