<template>
  <div class="">
    <table class="w-full">
      <thead>
        <tr class="rounded-[16px]">
          <th class="rounded-[16px] lato-medium text-sm text-grey-500">Date</th>
          <th class="lato-medium text-sm text-grey-500">Purchase</th>
          <th class="lato-medium text-sm text-grey-500">Service Period</th>
          <th class="lato-medium text-sm text-grey-500">Amount</th>
          <th class="rounded-[16px] lato-medium text-sm text-grey-500">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedPayments" :key="index">
          <td>{{ item.date }}</td>
          <td>{{ item.purchase }}</td>
          <td>{{ item.servicePeriod }}</td>
          <td class="!text-blue-500">{{ item.amount }}</td>
          <td>
            <div
              class="bg-[#ECFDF3] rounded-[16px] inline-flex gap-1 text-[#027A48] py-[2px] px-2"
              v-if="item.status === 'Paid'"
            >
              <img src="/assets/img/status-check.svg" alt="" />
              {{ item.status }}
            </div>

            <div
              class="bg-[#FEF3F2] rounded-[16px] inline-flex gap-1 text-[#B42318] py-[2px] px-2"
              v-if="item.status === 'Failed'"
            >
              <img src="/assets/img/failed.svg" alt="" />
              {{ item.status }}
            </div>

            <div
              class="bg-[#0439A3] rounded-[16px] inline-flex gap-1 text-[#fff] py-[2px] px-2"
              v-if="item.status === 'Refunded'"
            >
              <img src="/assets/img/corner-up-left.svg" alt="" />
              {{ item.status }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <pagination /> -->

    <!-- <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div> -->
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'PaymentHistoryTable',
  props: {
    payments: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const currentPage = ref(1);
    const itemsPerPage = 10;

    const totalPages = computed(() =>
      Math.ceil(props.payments.value.length / itemsPerPage)
    );
    const paginatedPayments = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return props.payments.slice(start, start + itemsPerPage);
    });

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    return {
      currentPage,
      totalPages,
      paginatedPayments,
      prevPage,
      nextPage,
      props,
    };
  },
};
</script>

<style scoped>
th,
td {
  padding: 12px;
  text-align: left;
  /* border-bottom: 1px solid #ddd; */
}

td {
  padding: 16px 24px;
  height: 72px;
  font-size: 14px;
  color: #344054;
}

tr:nth-of-type(odd) {
  background-color: #f9fafb;
}

th {
  background-color: #fff;
  padding: 12px 24px;
}

.paid {
  color: green;
}

.pending {
  color: blue;
}

.failed {
  color: red;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
