<template>
  <div>
    <AccountModal
      @close-modal="CloseModal()"
      :setup="{
        modalActive: props.setup.openModal,
        modalTitle: 'Currencies',
      }"
    >
      <div>
        <!-- search -->
        <div class="mb-6">
          <input
            type="text"
            class="w-full px-[14px] py-3 text-navyBlue-900 rounded-xl border border-grey-300 blue-active-form-field search-input"
            placeholder="Search using currency name or country"
            v-model="currencySearchKeyword"
          />
        </div>
        <!-- modal content -->
        <div class="manage-modal-container-height">
          <!--  -->

          <div
            class="border border-grey-200 w-full card-border-radius px-6 py-3 flex justify-between mb-4"
            v-for="currency in currencyList"
            :key="currency.id"
            @click="changeCurrency(currency)"
          >
            <div class="flex self-center">
              <div
                class="w-[36px] h-[36px] bg-grey-200 rounded-full flex justify-center items-center self-center mr-4 lato-bold text-lg"
              >
                {{ currency.symbol }}
              </div>
              <div>
                <div class="lato-medium text-navyBlue-900 mb-1">
                  {{ currency.currencyName }}
                </div>
                <div class="text-xs text-grey-500">{{ currency.name }}</div>
              </div>
            </div>
            <div class="w-[16px] self-center">
              <img src="/assets/img/caret-right.svg" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </AccountModal>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['closeCurrencyModal', 'changeCurrency']);
const props = defineProps<{
  setup: {
    openModal: boolean;
  };
}>();
const CloseModal = () => {
  emit('closeCurrencyModal');
};
const currencySearchKeyword = ref('');

const currencyList = computed(() => {
  return currencySearchKeyword.value.trim().length === 0
    ? currencies.value
    : currencies.value.filter((currency) =>
        currency.name
          .toLowerCase()
          .includes(currencySearchKeyword.value.toLowerCase())
      );
});

const changeCurrency = (currency) => {
  resetModalData();
  emit('changeCurrency', currency);

  console.log(currency);
};

const resetModalData = () => {
  CloseModal();
  currencySearchKeyword.value = '';
};

const isPending = ref(false);
const currencies = ref([]);

const fetchCurrencies = async () => {
  const { data, error } = await useMyFetch('/expense/currencies', {
    method: 'GET',
  });
  console.log(data.value.data);
  // console.log(error);
  currencies.value = data.value.data;
  if (data.value) {
    isPending.value = false;
  } else {
    useNuxtApp().$toast.error(
      `<div class="toastHeader lato-semi-bold text-base mb-2">${error.value.data.error}</div><div class="toastBody text-sm lato-regular">${error.value.data.message}</div>`
    );
    isPending.value = false;
  }
};

onMounted(() => {
  resetModalData();
  fetchCurrencies();
});
</script>
<style scoped>
.manage-modal-container-height {
  max-height: calc(100vh - 300px);
  overflow-y: scroll;
  padding-bottom: 20px;
}
</style>
