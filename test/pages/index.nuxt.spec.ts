// @vitest-environment nuxt
import { mount, shallowMount } from "@vue/test-utils";
import { test, expect, describe } from "vitest";
import LandingPage from "@/pages/index.vue";

describe("Landing Page", () => {
  test("should be mounted", () => {
    const wrapper = shallowMount(LandingPage);
    const element = wrapper.find('[data-test-component="true"]');
    expect(element.exists()).toBe(true);
  });
});
