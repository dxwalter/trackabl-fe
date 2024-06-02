<template>
  <ClientOnly>
    <div class="bg-navyBlue-900 px-4 py-[14px] rounded-xl">
      <div class="text-right text-white lato-medium text-sm mb-1.5">
        How much?
      </div>
      <div class="flex">
        <div class="flex self-center cursor-pointer" @click="openCurrencyModal">
          <div class="w-[18px] mr-1 self-center">
            <NuxtImg src="/caret-down.svg" class="w-full" />
          </div>
          <div class="text-white text-2xl lato-semi-bold self-center">₦</div>
        </div>
        <div class="w-full self-center relative">
          <input
            type="text"
            class="w-full text-white border-0 bg-navyBlue-900 text-right text-4xl lato-semi-bold focus:border-0"
            placeholder="0.00"
            v-model="amount"
          />
        </div>
      </div>
    </div>
    <AccountPopoversCurrencyPopover
      :setup="{
        openModal: isCurrencyModalOpen,
      }"
      @close-currency-modal="openCurrencyModal"
    />
  </ClientOnly>
</template>

<script lang="ts" setup>
const amount = ref("");

const isCurrencyModalOpen = ref(false);
const openCurrencyModal = () => {
  console.log(isCurrencyModalOpen.value);
  isCurrencyModalOpen.value = !isCurrencyModalOpen.value;
};

const emit = defineEmits(["expenseAmount"]);

const validateInput = () => {
  const rawAmount = amount.value.replaceAll(",", "");
  const newNumber = Number(rawAmount);

  if (isNaN(Number(newNumber))) {
    amount.value = rawAmount.substring(0, rawAmount.length - 1);
  } else {
    if (amount.value.length === 0) {
      amount.value = "";
      return;
    }

    if (newNumber >= 9999999999) {
      limitExceeded();
      amount.value = rawAmount.substring(0, rawAmount.length - 1);
      return;
    }

    amount.value = newNumber.toLocaleString();
    emit("expenseAmount", Number(amount.value.replaceAll(",", "")));
  }
};

const limitExceeded = () => {
  useNuxtApp().$toast.error(
    `<div class="toastHeader lato-semi-bold text-base mb-2">Uh-uh! Limit exceeded</div><div class="toastBody text-sm lato-regular">You have exceeded the limit for an expense amount</div>`
  );
};

watch(
  amount,
  () => {
    validateInput();
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<style scoped lang="css">
input:focus-visible {
  border: 0 !important;
  outline: 0 !important;
}
.blinking-cursor {
  font-weight: 100;
  font-size: 30px;
  color: #2e3d48;
  right: 2px;
  bottom: 0px;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: white;
  }
  50% {
    color: transparent;
  }
}

@-moz-keyframes blink {
  from,
  to {
    color: white;
  }
  50% {
    color: transparent;
  }
}

@-webkit-keyframes blink {
  from,
  to {
    color: white;
  }
  50% {
    color: transparent;
  }
}

@-ms-keyframes blink {
  from,
  to {
    color: white;
  }
  50% {
    color: transparent;
  }
}

@-o-keyframes blink {
  from,
  to {
    color: white;
  }
  50% {
    color: transparent;
  }
}
</style>
