import { shallowMount } from "@vue/test-utils";
import File from "./File.vue";

describe("CodeEditor/File.vue", () => {
  it("should show code tag if a code file", () => {
    const wrapper = shallowMount(File, {
      propsData: {
        code: "<p>test</p>"
      }
    });

    expect(wrapper.find("code").exists()).toBeTruthy();
  });

  it("should display slot if defined", () => {
    const wrapper = shallowMount(File, {
      slots: {
        default: "Lorem lorem lorem lorem"
      }
    });

    expect(wrapper.text()).toBe("Lorem lorem lorem lorem");
  });
});
