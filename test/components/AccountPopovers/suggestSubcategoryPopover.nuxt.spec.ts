import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import AccountSubcategoryPopover from '@/components/AccountPopovers/suggestSubcategoryPopover.vue'; // Adjust the path as necessary
import { defineComponent } from 'vue';

const AccountModal = defineComponent({
  name: 'AccountModal',
  props: ['setup'],
  template: '<div><slot /></div>',
});

describe('AccountSubcategoryPopover.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(AccountSubcategoryPopover, {
      props: {
        setup: {
          openModal: true,
          categoryId: 1,
        },
      },
      global: {
        stubs: {
          AccountModal,
        },
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('textarea').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('displays category details', async () => {
    // Simulate async update
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.text-grey-500').text()).toContain('Food & Drinks');
  });

  it('emits closeAddSubcategoryPopover event when CloseModal is called', async () => {
    await wrapper.vm.CloseModal();
    expect(wrapper.emitted().closeAddSubcategoryPopover).toBeTruthy();
  });
});
