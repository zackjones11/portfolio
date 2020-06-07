import { shallowMount } from "@vue/test-utils";
import CodeEditorHeaderButton from "./CodeEditorHeaderButton.vue";

describe("CodeEditorHeaderButton.vue", () => {
  it("should add correct class for colour", () => {
    const color = "green";
    const wrapper = shallowMount(CodeEditorHeaderButton, {
      propsData: { color }
    });
    expect(wrapper.find(`.button--${color}`).exists()).toBeTruthy();
  });
});
