import { describe, it, expect, beforeEach } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import Footer from '@/components/Account/DesktopFooter.vue';
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

describe('Footer.vue', () => {
  let router: any;

  beforeEach(() => {
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
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
    return mount(Footer, {
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
    expect(wrapper.find('.current-year').text()).toContain(
      new Date().getFullYear().toString()
    );
    expect(wrapper.findAll('.sm-links').length).toBe(3); // social media links
  });

  it('renders "Add Expense" button on non-expense routes', async () => {
    const wrapper = await factory('/some-other-route');
    await wrapper.vm.$nextTick(); // wait for the component to update
    expect(wrapper.find('.manage-direction').exists()).toBe(true);
  });

  it('does not render "Add Expense" button on expense/add route', async () => {
    const wrapper = await factory('/account/expense/add');
    await wrapper.vm.$nextTick(); // wait for the component to update
    expect(wrapper.find('.manage-direction').exists()).toBe(false);
  });
});
