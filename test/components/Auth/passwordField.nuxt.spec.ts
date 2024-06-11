import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import PasswordField from '@/components/Auth/PasswordField.vue';

describe('PasswordField.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(PasswordField, {
      props: {
        setup: {
          label: 'Password',
          isRequired: true,
          placeholder: 'Enter your password',
          id: 'password-input',
          showGuideLinesOnActive: true,
        },
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
  });

  it('toggles password visibility', async () => {
    const toggleButton = wrapper.find('[data-test-password-visibility="true"]');
    const passwordInput = wrapper.find('input');

    // Initial state should be password
    expect(passwordInput.attributes('type')).toBe('password');

    // Click to show password
    await toggleButton.trigger('click');
    expect(passwordInput.attributes('type')).toBe('text');

    // Click to hide password
    await toggleButton.trigger('click');
    expect(passwordInput.attributes('type')).toBe('password');
  });

  it('updates password score correctly', async () => {
    const passwordInput = wrapper.find('input');

    // Initially, no password entered
    expect(wrapper.vm.passwordScore).toBe(0);
    expect(wrapper.find('.weak-label').exists()).toBe(false);
    expect(wrapper.find('.average-label').exists()).toBe(false);
    expect(wrapper.find('.strong-label').exists()).toBe(false);

    // Enter a weak password
    await passwordInput.setValue('abc');
    expect(wrapper.vm.passwordScore).toBe(0);
    expect(wrapper.find('.weak-label').exists()).toBe(false);
    expect(wrapper.find('.average-label').exists()).toBe(false);
    expect(wrapper.find('.strong-label').exists()).toBe(false);

    // Enter a password that is at least 6 characters
    await passwordInput.setValue('abcdef');
    await wrapper.vm.$nextTick(); // Ensure DOM updates
    expect(wrapper.vm.passwordScore).toBe(1);
    expect(wrapper.find('.weak-label').exists()).toBe(true);
    expect(wrapper.find('.average-label').exists()).toBe(false);
    expect(wrapper.find('.strong-label').exists()).toBe(false);

    // Enter a password with uppercase and lowercase
    await passwordInput.setValue('abcDef');
    await wrapper.vm.$nextTick(); // Ensure DOM updates
    expect(wrapper.vm.passwordScore).toBe(2);
    expect(wrapper.find('.weak-label').exists()).toBe(false);
    expect(wrapper.find('.average-label').exists()).toBe(true);
    expect(wrapper.find('.strong-label').exists()).toBe(false);

    // Enter a strong password with numbers or symbols
    await passwordInput.setValue('abcDef1!');
    await wrapper.vm.$nextTick(); // Ensure DOM updates
    expect(wrapper.vm.passwordScore).toBe(3);
    expect(wrapper.find('.weak-label').exists()).toBe(false);
    expect(wrapper.find('.average-label').exists()).toBe(false);
    expect(wrapper.find('.strong-label').exists()).toBe(true);
  });

  it('displays and updates password guidelines correctly', async () => {
    const passwordInput = wrapper.find('input');

    // Initially, guidelines should not be visible
    let guidelines = wrapper.findAll('.text-grey-500.text-xs');
    expect(guidelines.length).toBe(0);

    // Start typing to activate guidelines
    await passwordInput.setValue('a');
    await wrapper.vm.$nextTick();
    guidelines = wrapper.findAll('.text-grey-500.text-xs');

    // Verify guidelines appear
    expect(guidelines.length).toBe(3);
    expect(guidelines.at(0).text()).toContain('Must be least 6 characters');
    expect(guidelines.at(1).text()).toContain(
      'Contain Upper case and Lower case letters'
    );
    expect(guidelines.at(2).text()).toContain('Contain numbers or symbols');

    // Guidelines are not satisfied initially
    expect(guidelines.at(0).classes()).not.toContain('line-through');
    expect(guidelines.at(1).classes()).not.toContain('line-through');
    expect(guidelines.at(2).classes()).not.toContain('line-through');

    // Enter a password that is at least 6 characters
    await passwordInput.setValue('abcdef');
    await wrapper.vm.$nextTick();
    expect(guidelines.at(0).classes()).toContain('line-through');
    expect(guidelines.at(1).classes()).not.toContain('line-through');
    expect(guidelines.at(2).classes()).not.toContain('line-through');

    // Enter a password with uppercase and lowercase letters
    await passwordInput.setValue('abcDef');
    await wrapper.vm.$nextTick();
    expect(guidelines.at(0).classes()).toContain('line-through');
    expect(guidelines.at(1).classes()).toContain('line-through');
    expect(guidelines.at(2).classes()).not.toContain('line-through');

    // Enter a password with numbers or symbols
    await passwordInput.setValue('abcDef1!');
    await wrapper.vm.$nextTick();
    expect(guidelines.at(0).classes()).toContain('line-through');
    expect(guidelines.at(1).classes()).toContain('line-through');
    expect(guidelines.at(2).classes()).toContain('line-through');
  });

  it('emits newPasswordState event with correct data', async () => {
    const passwordInput = wrapper.find('input');

    // Enter a password
    await passwordInput.setValue('abcDef1!');
    await wrapper.vm.$nextTick();

    // Check emitted event
    const emitted = wrapper.emitted('newPasswordState');
    expect(emitted).toBeTruthy();
    expect(emitted.length).toBeGreaterThan(0);
    expect(emitted[emitted.length - 1][0]).toEqual({
      status: true,
      data: 'abcDef1!',
    });

    // Enter another password
    await passwordInput.setValue('abc');
    await wrapper.vm.$nextTick();

    // Check emitted event again
    const emittedAgain = wrapper.emitted('newPasswordState');
    expect(emittedAgain).toBeTruthy();
    expect(emittedAgain.length).toBeGreaterThan(1);
    expect(emittedAgain[emittedAgain.length - 1][0]).toEqual({
      status: false,
      data: 'abc',
    });
  });
});

// });
