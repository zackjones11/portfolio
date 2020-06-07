import { shallowMount } from "@vue/test-utils";
import HeadButton from "./HeadButton.vue";

describe("CodeEditor/HeadButton.vue", () => {
  it("should add correct class for colour", () => {
    const color = "green";
    const wrapper = shallowMount(HeadButton, {
      propsData: { color }
    });
    expect(wrapper.find(`.button--${color}`).exists()).toBeTruthy();
  });
});
