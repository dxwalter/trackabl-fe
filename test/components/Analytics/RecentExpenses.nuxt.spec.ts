// tests/RecentTransaction.spec.ts
import { mount } from '@vue/test-utils';
import { describe, beforeEach, it, expect } from 'vitest';
import RecentExpenses from '@/components/Analytics/RecentExpenses.vue';
import { defineComponent } from 'vue';

const NuxtLink = defineComponent({
  name: 'NuxtLink',
  props: {
    to: [String, Object],
    target: String,
  },
  template: '<a><slot /></a>',
});

const NuxtImg = defineComponent({
  name: 'NuxtImg',
  props: {
    src: String,
  },
  template: '<img :src="src" />',
});

describe('RecentExpenses.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(RecentExpenses, {
      props: {
        recentTransactions: [],
      },
      global: {
        stubs: {
          NuxtLink,
          NuxtImg,
        },
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('shows "Made a transaction today?" when there are no recent transactions', () => {
    expect(wrapper.find('#noTransaction').text()).toBe(
      'Made a transaction today?'
    );
  });

  it('shows the correct number of transactions', () => {
    const transactions = [
      {
        id: 1,
        subactegoryName: 'Cooking gas',
        category: {
          name: 'Housing',
          color: '#f79009',
          icon: '/house-category-icon.svg',
        },
        expenseCurrency: '₦',
        expenseAmount: '36,000',
        expenseDate: 'Sun, 16 Jan',
      },
      {
        id: 2,
        subactegoryName: 'A/C Repair',
        category: {
          name: 'Car',
          color: '#12B76A',
          icon: '/car-category.svg',
        },
        expenseCurrency: '₦',
        expenseAmount: '12,000,000',
        expenseDate: 'Sun, 16 Jan',
      },
      {
        id: 3,
        subactegoryName: 'Bolu Upkeep',
        category: {
          name: 'Family',
          color: '#004EC1',
          icon: '/family-category.svg',
        },
        expenseCurrency: '₦',
        expenseAmount: '10,000',
        expenseDate: 'Sun, 16 Jan',
      },
    ];

    wrapper = mount(RecentExpenses, {
      props: {
        recentTransactions: transactions,
      },
      global: {
        stubs: {
          NuxtLink,
          NuxtImg,
        },
      },
    });

    const transactionLinks = wrapper.findAllComponents(NuxtLink);
    // Filter the links to only those rendering transactions, avoiding other NuxtLinks in the component
    const transactionItems = transactionLinks.filter(
      (link) =>
        link.props().to &&
        link.props().to.toString().includes('/account/expense/')
    );

    expect(transactionItems.length).toBe(transactions.length);
  });

  it('displays transaction details correctly', () => {
    const transactions = [
      {
        id: 1,
        subactegoryName: 'Cooking gas',
        category: {
          name: 'Housing',
          color: '#f79009',
          icon: '/house-category-icon.svg',
        },
        expenseCurrency: '₦',
        expenseAmount: '36,000',
        expenseDate: 'Sun, 16 Jan',
      },
      {
        id: 2,
        subactegoryName: 'A/C Repair',
        category: {
          name: 'Car',
          color: '#12B76A',
          icon: '/car-category.svg',
        },
        expenseCurrency: '₦',
        expenseAmount: '12,000,000',
        expenseDate: 'Sun, 16 Jan',
      },
      {
        id: 3,
        subactegoryName: 'Bolu Upkeep',
        category: {
          name: 'Family',
          color: '#004EC1',
          icon: '/family-category.svg',
        },
        expenseCurrency: '₦',
        expenseAmount: '10,000',
        expenseDate: 'Sun, 16 Jan',
      },
    ];

    wrapper = mount(RecentExpenses, {
      props: {
        recentTransactions: transactions,
      },
      global: {
        stubs: {
          NuxtLink,
          NuxtImg,
        },
      },
    });

    const transactionLinks = wrapper.findAllComponents(NuxtLink);
    const transactionItems = transactionLinks.filter(
      (link) =>
        link.props().to &&
        link.props().to.toString().includes('/account/expense/')
    );

    transactionItems.forEach((link, index) => {
      const expense = transactions[index];
      const transactionText = link.text();

      expect(transactionText).toContain(expense.subactegoryName);
      expect(transactionText).toContain(expense.category.name);
      expect(transactionText).toContain(expense.expenseCurrency);
      expect(transactionText).toContain(expense.expenseAmount);
      expect(transactionText).toContain(expense.expenseDate);
    });
  });
});
