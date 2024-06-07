import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import AddCategoryPopover from '@/components/AccountPopovers/suggestCategoryPopover.vue'; // Adjust the path as necessary
import { defineComponent } from 'vue';

const AccountModal = defineComponent({
  name: 'AccountModal',
  props: ['setup'],
  template: '<div><slot /></div>',
});

describe('AddCategoryPopover.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(AddCategoryPopover, {
      props: {
        setup: {
          openModal: true,
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

  it('displays modal when openModal is true', () => {
    expect(wrapper.props().setup.openModal).toBe(true);
    expect(wrapper.findComponent(AccountModal).props().setup.modalActive).toBe(
      true
    );
  });

  it('emits closeAddCategoryPopover event when CloseModal is called', async () => {
    await wrapper.vm.CloseModal();
    expect(wrapper.emitted().closeAddCategoryPopover).toBeTruthy();
  });
});
