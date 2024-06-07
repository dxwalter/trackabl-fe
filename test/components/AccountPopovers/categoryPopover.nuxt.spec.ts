import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CategoryModal from '@/components/AccountPopovers/categoryPopover.vue'; // Adjust the path as necessary
// import { createTestingPinia } from '@pinia/testing';
import { defineComponent } from 'vue';

// Mock ClientOnly, NuxtLink, and NuxtImg components for testing
const ClientOnly = defineComponent({
  name: 'ClientOnly',
  template: '<div><slot /></div>',
});

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

const AccountModal = defineComponent({
  name: 'AccountModal',
  props: ['setup'],
  template: '<div><slot /></div>',
});

const CategoryList = defineComponent({
  name: 'CategoryList',
  props: ['setup'],
  template: '<div><slot /></div>',
});

const SubcategoryList = defineComponent({
  name: 'SubcategoryList',
  props: ['setup'],
  template: '<div><slot /></div>',
});

describe('CategoryModal.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(CategoryModal, {
      global: {
        // plugins: [createTestingPinia()],
        stubs: {
          ClientOnly,
          NuxtLink,
          NuxtImg,
          AccountModal,
          CategoryList,
          SubcategoryList,
        },
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('input.search-input').exists()).toBe(true);
  });

  it('filters categories based on search input', async () => {
    const searchInput = wrapper.find('input.search-input');
    await searchInput.setValue('test');
    expect(wrapper.vm.categorySearchKeyword).toBe('test');
  });

  it('opens subcategory list on category selection', async () => {
    await wrapper.vm.setCategoryId(1);
    expect(wrapper.vm.openSubcategoryList).toBe(true);
    expect(wrapper.vm.selectedCategoryId).toBe(1);
  });

  it('closes modal and emits event with selected ids', async () => {
    // Set the category first
    await wrapper.vm.setCategoryId(1);
    // Now set the subcategory
    await wrapper.vm.setSubcategoryId(2);
    // Ensure the modal is closed and the correct event is emitted
    expect(wrapper.emitted().setSelectedIds).toBeTruthy();
    expect(wrapper.emitted().setSelectedIds[0]).toEqual([
      { cateoryId: 1, subcategoryId: 2 },
    ]);
  });

  it('emits openSuggestion event with correct payload', async () => {
    await wrapper.vm.showSuggestionPopover();
    expect(wrapper.emitted().openSuggestion).toBeTruthy();
    expect(wrapper.emitted().openSuggestion[0]).toEqual([{ type: 'category' }]);

    await wrapper.vm.setCategoryId(1);
    await wrapper.vm.showSuggestionPopover();
    expect(wrapper.emitted().openSuggestion[1]).toEqual([
      { type: 'subcategory', categoryId: 1 },
    ]);
  });
});
