import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CurrencyModal from '@/components/AccountPopovers/currencyPopover.vue'; // Adjust the path as necessary
import { defineComponent } from 'vue';

// Mock NuxtImg component for testing
const NuxtImg = defineComponent({
  name: 'NuxtImg',
  props: {
    src: String,
  },
  template: '<img :src="src" />',
});

const AccountModal = defineComponent({
  name: 'AccountModal',
  props: ['setup'],
  template: '<div><slot /></div>',
});

describe('CurrencyModal.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(CurrencyModal, {
      props: {
        setup: {
          openModal: true,
        },
      },
      global: {
        stubs: {
          NuxtImg,
          AccountModal,
        },
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('input.search-input').exists()).toBe(true);
  });

  it('displays modal when openModal is true', () => {
    expect(wrapper.props().setup.openModal).toBe(true);
    expect(wrapper.findComponent(AccountModal).props().setup.modalActive).toBe(
      true
    );
  });

  it('emits closeCurrencyModal event when CloseModal is called', async () => {
    await wrapper.vm.CloseModal();
    expect(wrapper.emitted().closeCurrencyModal).toBeTruthy();
  });
});
