import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import FooterMenu from '@/components/Account/MobileFooterNav.vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import { defineComponent } from 'vue';

// Mock NuxtLink and NuxtImg components for testing
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

describe('FooterMenu.vue', () => {
  let router: any;

  beforeEach(() => {
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        {
          path: '/account/dashboard',
          component: { template: '<div>Dashboard</div>' },
        },
        {
          path: '/account/analytics',
          component: { template: '<div>Analytics</div>' },
        },
        {
          path: '/account/expense/add',
          component: { template: '<div>Add Expense</div>' },
        },
      ],
    });
    router.push('/');
    router.isReady();
  });

  const factory = async (route: string) => {
    await router.push(route);
    await router.isReady();
    return mount(FooterMenu, {
      global: {
        plugins: [router],
        stubs: {
          NuxtLink,
          NuxtImg,
        },
      },
    });
  };

  it('renders correctly', async () => {
    const wrapper = await factory('/');
    expect(wrapper.findAll('a').length).toBe(3); // home, analytics, and add expense buttons
  });

  it('renders "Home" link correctly', async () => {
    const wrapper = await factory('/');
    const homeLink = wrapper
      .findAllComponents(NuxtLink)
      .find((link) => link.props('to') === '/account/dashboard');
    expect(homeLink.exists()).toBe(true);
    expect(homeLink.props('to')).toBe('/account/dashboard');
  });

  it('renders "Analytics" link correctly', async () => {
    const wrapper = await factory('/');
    const analyticsLink = wrapper
      .findAllComponents(NuxtLink)
      .find((link) => link.props('to') === '/account/analytics');
    expect(analyticsLink.exists()).toBe(true);
    expect(analyticsLink.props('to')).toBe('/account/analytics');
  });

  it('renders "Add Expense" button correctly', async () => {
    const wrapper = await factory('/');
    const addButton = wrapper.find('.manage-direction');
    expect(addButton.exists()).toBe(true);
    const addLink = addButton.findComponent(NuxtLink);
    expect(addLink.exists()).toBe(true);
    expect(addLink.props('to')).toBe('/account/expense/add.vue');
  });
});
